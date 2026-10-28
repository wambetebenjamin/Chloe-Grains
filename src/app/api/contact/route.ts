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
  if (rateLimited(`contact:${ip}`)) return tooManyRequests();
  if (honeypotTripped(body)) return okResponse("Thanks! Your message is on its way.");

  const { values, errors } = cleanFields(body, {
    name: { required: true, max: 120 },
    email: { required: true, max: 160, type: "email" },
    subject: { required: true, max: 180 },
    message: { required: true, max: 4000, type: "textarea" },
  });
  if (errors.length > 0) return badRequest(errors.join("; "));

  const captcha = await verifyRecaptcha(
    typeof body["recaptcha_token"] === "string" ? body["recaptcha_token"] : undefined,
    ip
  );
  if (!captcha.ok) return badRequest(captcha.reason ?? "captcha");

  await forwardToWebhook({ form: "contact", ...values, receivedAt: new Date().toISOString() });
  return okResponse("Thanks! Your message is on its way.");
}

export function GET() {
  return badRequest("method-not-allowed");
}
