"use client";

export type RecaptchaVersion = "2" | "3";

export interface RecaptchaConfig {
  version: RecaptchaVersion;
  siteKey: string;
}

declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (
        container: HTMLElement | string,
        options: { sitekey: string; callback?: (token: string) => void }
      ) => number;
      getResponse: (widgetId?: number) => string;
      reset: (widgetId?: number) => void;
    };
    __cgRecaptchaLoading?: Promise<void>;
    __cgRecaptchaReady?: () => void;
  }
}

export function getRecaptchaConfig(): RecaptchaConfig | null {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;
  const version = process.env.NEXT_PUBLIC_RECAPTCHA_VERSION === "2" ? "2" : "3";
  return { version, siteKey };
}

export function onRecaptchaReady(): void {
  window.__cgRecaptchaReady?.();
}

function loadRecaptchaScript(config: RecaptchaConfig): Promise<void> {
  if (window.grecaptcha) return Promise.resolve();
  if (window.__cgRecaptchaLoading) return window.__cgRecaptchaLoading;

  window.__cgRecaptchaLoading = new Promise<void>((resolve, reject) => {
    window.__cgRecaptchaReady = resolve;
    const script = document.createElement("script");
    script.src =
      config.version === "3"
        ? `https://www.google.com/recaptcha/api.js?render=${config.siteKey}&onload=__cgRecaptchaReady`
        : "https://www.google.com/recaptcha/api.js?onload=__cgRecaptchaReady&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("recaptcha-load-failed"));
    document.head.appendChild(script);
    // If the script loads but onload never fires (cached), poll briefly.
    const started = Date.now();
    const poll = window.setInterval(() => {
      if (window.grecaptcha) {
        window.clearInterval(poll);
        resolve();
      } else if (Date.now() - started > 15000) {
        window.clearInterval(poll);
        reject(new Error("recaptcha-timeout"));
      }
    }, 250);
  });
  return window.__cgRecaptchaLoading;
}

/** Returns a token for invisible v3, or null when captcha is not configured. */
export async function getRecaptchaV3Token(action = "submit"): Promise<string | null> {
  const config = getRecaptchaConfig();
  if (!config || config.version !== "3") return null;
  try {
    await loadRecaptchaScript(config);
    if (!window.grecaptcha) return null;
    return await window.grecaptcha.execute(config.siteKey, { action });
  } catch {
    return null;
  }
}

/** Loads the v2 checkbox widget into a container. Returns widget id or null. */
export async function mountRecaptchaV2(container: HTMLElement): Promise<number | null> {
  const config = getRecaptchaConfig();
  if (!config || config.version !== "2") return null;
  try {
    await loadRecaptchaScript(config);
    if (!window.grecaptcha) return null;
    return window.grecaptcha.render(container, { sitekey: config.siteKey });
  } catch {
    return null;
  }
}

export function getRecaptchaV2Token(widgetId: number | null): string | null {
  if (widgetId === null || !window.grecaptcha) return null;
  const token = window.grecaptcha.getResponse(widgetId);
  return token || null;
}

export function resetRecaptchaV2(widgetId: number | null): void {
  if (widgetId !== null && window.grecaptcha) {
    window.grecaptcha.reset(widgetId);
  }
}
