"use client";

import { useEffect, useRef, useState } from "react";
import { foods } from "@/lib/data/foods";
import {
  getRecaptchaConfig,
  getRecaptchaV3Token,
  getRecaptchaV2Token,
  mountRecaptchaV2,
  resetRecaptchaV2,
} from "@/lib/captcha";

const captchaConfig = getRecaptchaConfig();

const REGIONS = [
  "West Africa",
  "Sahel",
  "East Africa",
  "Horn of Africa",
  "Southern Africa",
  "Central Africa",
  "North Africa",
  "Diaspora",
];

const DIET_NOTES = [
  "Vegan",
  "Vegetarian",
  "Gluten free",
  "Dairy free",
  "Under 30 minutes",
  "Batch friendly",
  "Family friendly",
];

/**
 * Share a recipe form: structured enough for our editors to test and
 * credit properly, gentle enough for a first time contributor.
 * Posts to /api/share-recipe.
 */
export default function ShareRecipeForm() {
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const errorRef = useRef<HTMLDivElement | null>(null);
  const sentRef = useRef<HTMLDivElement | null>(null);
  const v2BoxRef = useRef<HTMLDivElement | null>(null);
  const [v2Widget, setV2Widget] = useState<number | null>(null);
  const [dietNotes, setDietNotes] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (captchaConfig?.version === "2" && v2BoxRef.current) {
      let cancelled = false;
      mountRecaptchaV2(v2BoxRef.current).then((widget) => {
        if (!cancelled) setV2Widget(widget);
      });
      return () => {
        cancelled = true;
      };
    }
  }, []);

  const show = (ref: React.RefObject<HTMLDivElement | null>, on: boolean) => {
    if (ref.current) ref.current.style.display = on ? "block" : "none";
  };

  const toggleDiet = (note: string) => {
    setDietNotes((prev) => (prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    show(loadingRef, true);
    show(errorRef, false);
    show(sentRef, false);

    try {
      let token: string | null = null;
      if (captchaConfig?.version === "3") {
        token = await getRecaptchaV3Token("share_recipe");
      } else if (captchaConfig?.version === "2") {
        token = getRecaptchaV2Token(v2Widget);
      }
      const res = await fetch("/api/share-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          dietNotes: dietNotes.join(", "),
          consent,
          recaptcha_token: token,
        }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string; reason?: string };
      show(loadingRef, false);
      if (res.ok && data.ok) {
        show(sentRef, true);
        form.reset();
        setDietNotes([]);
        setConsent(false);
        resetRecaptchaV2(v2Widget);
      } else {
        if (errorRef.current) {
          errorRef.current.textContent =
            data.reason === "rate-limited"
              ? "Too many attempts. Please try again in a few minutes."
              : typeof data.reason === "string" && data.reason.startsWith("Please confirm")
                ? "Please tick the consent box so we can review and credit your recipe."
                : "Please complete the required fields and try again.";
        }
        show(errorRef, true);
        resetRecaptchaV2(v2Widget);
      }
    } catch {
      show(loadingRef, false);
      if (errorRef.current) errorRef.current.textContent = "Network error. Please try again.";
      show(errorRef, true);
      resetRecaptchaV2(v2Widget);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="php-email-form cg-form" noValidate>
      <input type="text" name="company_website" className="cg-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="row gy-3">
        <div className="col-md-6">
          <label htmlFor="share-name">Your name</label>
          <input type="text" id="share-name" name="name" className="form-control" required maxLength={120} autoComplete="name" />
          <p className="cg-form-help">How we will credit you if the recipe is published.</p>
        </div>
        <div className="col-md-6">
          <label htmlFor="share-email">Your email</label>
          <input type="email" id="share-email" name="email" className="form-control" required maxLength={160} autoComplete="email" />
          <p className="cg-form-help">Only used to ask follow up questions. Never shared.</p>
        </div>

        <div className="col-md-6">
          <label htmlFor="share-title">Recipe title</label>
          <input type="text" id="share-title" name="recipeTitle" className="form-control" required maxLength={180} placeholder="e.g. Grandma's wimbi uji with groundnuts" />
        </div>
        <div className="col-md-6">
          <label htmlFor="share-region">Region</label>
          <select id="share-region" name="region" className="form-select" required defaultValue="">
            <option value="" disabled>
              Choose the region this dish belongs to
            </option>
            {REGIONS.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="share-food">Main indigenous ingredient</label>
          <select id="share-food" name="linkedFood" className="form-select">
            <option value="">Choose a food (optional)</option>
            {foods.map((food) => (
              <option key={food.slug} value={food.slug}>
                {food.name}
              </option>
            ))}
            <option value="other">Something else indigenous</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="share-time">Total time (minutes)</label>
          <input type="number" id="share-time" name="timeMinutes" className="form-control" min={1} max={1440} placeholder="45" />
        </div>
        <div className="col-md-3">
          <label htmlFor="share-servings">Serves</label>
          <input type="text" id="share-servings" name="servings" className="form-control" maxLength={40} placeholder="4" />
        </div>

        <div className="col-12">
          <span className="d-block mb-2" style={{ fontSize: 14, fontWeight: 600, color: "var(--heading-color)" }}>
            Diet notes (optional)
          </span>
          <div className="cg-chip-row" role="group" aria-label="Diet notes">
            {DIET_NOTES.map((note) => (
              <button
                key={note}
                type="button"
                className="cg-chip"
                aria-pressed={dietNotes.includes(note)}
                onClick={() => toggleDiet(note)}
              >
                {note}
              </button>
            ))}
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="share-ingredients">Ingredients (one per line, with amounts)</label>
          <textarea id="share-ingredients" name="ingredients" className="form-control" rows={7} required maxLength={4000} placeholder={"300 g fonio\n2 tomatoes\n1 onion"} style={{ height: 180 }}></textarea>
        </div>

        <div className="col-12">
          <label htmlFor="share-steps">Method (one step per line)</label>
          <textarea id="share-steps" name="steps" className="form-control" rows={9} required maxLength={8000} placeholder={"Rinse the fonio until the water runs clear.\nFry the onion until soft, then add tomatoes."} style={{ height: 240 }}></textarea>
        </div>

        <div className="col-12">
          <label htmlFor="share-story">The story behind the dish (optional)</label>
          <textarea id="share-story" name="story" className="form-control" rows={4} maxLength={3000} placeholder="Who taught you this dish, and when do you cook it?" style={{ height: 120 }}></textarea>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="share-consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              style={{ minWidth: 22, minHeight: 22 }}
            />
            <label className="form-check-label" htmlFor="share-consent" style={{ fontSize: 14, fontWeight: 400 }}>
              I confirm this recipe is mine to share, and Chloe Grains may test, edit and publish it
              with credit to me.
            </label>
          </div>
        </div>

        {captchaConfig?.version === "2" && (
          <div className="col-12">
            <div className="cg-recaptcha-box" ref={v2BoxRef}></div>
          </div>
        )}

        <div className="col-12">
          <div className="loading" ref={loadingRef}>
            Loading
          </div>
          <div className="error-message" ref={errorRef}></div>
          <div className="sent-message" ref={sentRef}>
            Asante! Your recipe is in the queue for review. We will email you if we have questions.
          </div>
          <button type="submit">Send Recipe</button>
          {captchaConfig?.version === "3" && (
            <p className="cg-recaptcha-note">
              This site is protected by reCAPTCHA and the Google privacy policy and terms of service
              apply.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
