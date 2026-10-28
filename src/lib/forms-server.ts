import { NextResponse } from "next/server";

/**
 * Server side form pipeline shared by /api/contact, /api/share-recipe and
 * /api/newsletter: honeypot check, light rate limiting, optional reCAPTCHA
 * verification (v3 score or v2), field sanitisation and optional webhook
 * forwarding. Everything degrades gracefully when env keys are absent.
 */

interface RateBucket {
  count: number;
  windowStart: number;
}

const rateBuckets = new Map<string, RateBucket>();
const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 10 * 60 * 1000;

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimited(key: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.windowStart > RATE_WINDOW_MS) {
    rateBuckets.set(key, { count: 1, windowStart: now });
    // Keep the map from growing unbounded.
    if (rateBuckets.size > 5000) {
      for (const [k, v] of rateBuckets) {
        if (now - v.windowStart > RATE_WINDOW_MS) rateBuckets.delete(k);
      }
    }
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

export interface FieldRules {
  required?: boolean;
  max?: number;
  type?: "text" | "email" | "textarea";
}

export function cleanFields(
  body: Record<string, unknown>,
  rules: Record<string, FieldRules>
): { values: Record<string, string>; errors: string[] } {
  const values: Record<string, string> = {};
  const errors: string[] = [];

  for (const [field, rule] of Object.entries(rules)) {
    const raw = body[field];
    let value = typeof raw === "string" ? raw.trim() : typeof raw === "number" ? String(raw) : "";
    // Strip control characters and angle brackets; forms never need them.
    value = value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/[<>]/g, "").trim();
    if (rule.max && value.length > rule.max) {
      value = value.slice(0, rule.max);
    }
    if (rule.required && !value) {
      errors.push(`${field} is required`);
    }
    if (rule.type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      errors.push(`${field} must be a valid email`);
    }
    values[field] = value;
  }

  return { values, errors };
}

/** Honeypot: bots fill every field, humans never see this one. */
export function honeypotTripped(body: Record<string, unknown>): boolean {
  const hp = body["company_website"];
  return typeof hp === "string" && hp.trim().length > 0;
}

export async function verifyRecaptcha(
  token: string | undefined,
  ip: string,
  action = "submit"
): Promise<{ ok: boolean; reason?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    // reCAPTCHA not configured: honeypot plus rate limiting still protect.
    return { ok: true };
  }
  if (!token) {
    return { ok: false, reason: "missing-captcha-token" };
  }
  try {
    const params = new URLSearchParams({ secret, response: token, remoteip: ip });
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      cache: "no-store",
    });
    const data = (await res.json()) as {
      success: boolean;
      score?: number;
      action?: string;
      "error-codes"?: string[];
    };
    if (!data.success) {
      return { ok: false, reason: "captcha-failed" };
    }
    // v3 responses carry a score; v2 responses do not.
    if (typeof data.score === "number") {
      if (data.score < 0.4) return { ok: false, reason: "captcha-low-score" };
      if (data.action && action && data.action !== action) {
        return { ok: false, reason: "captcha-action-mismatch" };
      }
    }
    return { ok: true };
  } catch {
    // Verification endpoint unreachable: fail closed for safety.
    return { ok: false, reason: "captcha-unreachable" };
  }
}

export async function forwardToWebhook(payload: Record<string, unknown>): Promise<void> {
  const url = process.env.FORMS_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(6000),
    });
  } catch {
    // Delivery is best effort; the visitor still gets a confirmation.
  }
}

export function badRequest(reason: string): NextResponse {
  return NextResponse.json({ ok: false, reason }, { status: 400 });
}

export function tooManyRequests(): NextResponse {
  return NextResponse.json({ ok: false, reason: "rate-limited" }, { status: 429 });
}

export function okResponse(message: string): NextResponse {
  return NextResponse.json({ ok: true, message });
}

export async function readJsonBody(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = await request.json();
    if (body && typeof body === "object" && !Array.isArray(body)) {
      return body as Record<string, unknown>;
    }
    return null;
  } catch {
    return null;
  }
}
