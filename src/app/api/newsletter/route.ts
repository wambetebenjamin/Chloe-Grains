import {
  badRequest,
  cleanFields,
  clientIp,
  forwardToWebhook,
  honeypotTripped,
  okResponse,
  rateLimited,
  readJsonBody,
  tooManyRequests,
  verifyRecaptcha,
} from "@/lib/forms-server";

export async function POST(request: Request) {
  const body = await readJsonBody(request);
  if (!body) return badRequest("invalid-json");

  const ip = clientIp(request);
  if (rateLimited(`newsletter:${ip}`)) return tooManyRequests();
  if (honeypotTripped(body)) {
    return okResponse("Your subscription request has been sent. Thank you!");
  }

  const { values, errors } = cleanFields(body, {
    email: { required: true, max: 160, type: "email" },
  });
  if (errors.length > 0) return badRequest(errors.join("; "));

  const captcha = await verifyRecaptcha(
    typeof body["recaptcha_token"] === "string" ? body["recaptcha_token"] : undefined,
    ip
  );
  if (!captcha.ok) return badRequest(captcha.reason ?? "captcha");

  await forwardToWebhook({ form: "newsletter", ...values, receivedAt: new Date().toISOString() });
  return okResponse("Your subscription request has been sent. Thank you!");
}

export function GET() {
  return badRequest("method-not-allowed");
}
