import { foods } from "@/lib/data/foods";
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

const REGION_CHOICES = [
  "West Africa",
  "Sahel",
  "East Africa",
  "Horn of Africa",
  "Southern Africa",
  "Central Africa",
  "North Africa",
  "Diaspora",
];

export async function POST(request: Request) {
  const body = await readJsonBody(request);
  if (!body) return badRequest("invalid-json");

  const ip = clientIp(request);
  if (rateLimited(`share:${ip}`)) return tooManyRequests();
  if (honeypotTripped(body)) {
    return okResponse("Asante! Your recipe is in the queue for review.");
  }

  const { values, errors } = cleanFields(body, {
    name: { required: true, max: 120 },
    email: { required: true, max: 160, type: "email" },
    recipeTitle: { required: true, max: 180 },
    region: { required: true, max: 60 },
    linkedFood: { required: false, max: 60 },
    timeMinutes: { required: false, max: 10 },
    servings: { required: false, max: 40 },
    dietNotes: { required: false, max: 200 },
    ingredients: { required: true, max: 4000, type: "textarea" },
    steps: { required: true, max: 8000, type: "textarea" },
    story: { required: false, max: 3000, type: "textarea" },
  });
  if (errors.length > 0) return badRequest(errors.join("; "));

  if (!REGION_CHOICES.includes(values.region)) {
    return badRequest("region must be one of the listed options");
  }
  const foodSlugs = foods.map((f) => f.slug);
  if (values.linkedFood && !foodSlugs.includes(values.linkedFood) && values.linkedFood !== "other") {
    return badRequest("linkedFood is not recognised");
  }
  if (body["consent"] !== true) {
    return badRequest("Please confirm we may review and publish your recipe with credit.");
  }

  const captcha = await verifyRecaptcha(
    typeof body["recaptcha_token"] === "string" ? body["recaptcha_token"] : undefined,
    ip
  );
  if (!captcha.ok) return badRequest(captcha.reason ?? "captcha");

  await forwardToWebhook({ form: "share-recipe", ...values, receivedAt: new Date().toISOString() });
  return okResponse("Asante! Your recipe is in the queue for review.");
}

export function GET() {
  return badRequest("method-not-allowed");
}
