"use client";

import Link from "next/link";
import { useState } from "react";
import { getFood } from "@/lib/data/foods";
import { getRecipe } from "@/lib/data/recipes";
import { useI18n } from "./I18nProvider";
import { useSaved } from "./SavedProvider";

/**
 * Light auth surface for saved recipes and foods: a local display name plus
 * two lists the visitor curates in their own browser. No dashboards, no
 * charts, no accounts.
 */
export default function SavedManager() {
  const { hydrated, recipes: savedRecipes, foods: savedFoods, name, setName, remove, clear, count } = useSaved();
  const { t } = useI18n();
  const [tab, setTab] = useState<"recipes" | "foods">("recipes");
  const [nameDraft, setNameDraft] = useState<string | null>(null);

  if (!hydrated) {
    return (
      <div className="container text-center py-5">
        <div className="loading" style={{ display: "block" }}>
          Loading
        </div>
      </div>
    );
  }

  const recipeItems = savedRecipes
    .map((slug) => getRecipe(slug))
    .filter((recipe) => recipe !== undefined);
  const foodItems = savedFoods.map((slug) => getFood(slug)).filter((food) => food !== undefined);

  return (
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <div className="cg-signin-card">
            <h2 style={{ fontSize: 20, marginBottom: 8, color: "var(--heading-color)" }}>
              Make this collection yours
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.6 }}>
              Saved items live privately in this browser. Add a display name and the page greets
              you by it. Nothing is uploaded anywhere.
            </p>
            <label htmlFor="saved-name" className="d-block mb-2" style={{ fontSize: 14, fontWeight: 600, color: "var(--heading-color)" }}>
              Display name (optional)
            </label>
            <input
              id="saved-name"
              className="form-control mb-3"
              style={{ minHeight: 44 }}
              value={nameDraft ?? name}
              maxLength={60}
              placeholder={name ? name : "e.g. Amina"}
              onChange={(e) => setNameDraft(e.target.value)}
              onBlur={() => {
                if (nameDraft !== null) setName(nameDraft.trim());
              }}
            />
            {name && <p style={{ fontSize: 14 }}>Karibu tena, {name}.</p>}
            <p style={{ fontSize: 13, color: "color-mix(in srgb, var(--default-color), transparent 40%)" }}>
              {count} item{count === 1 ? "" : "s"} saved on this device.
            </p>
            {count > 0 && (
              <button type="button" className="cg-chip cg-chip-clay" onClick={clear}>
                <i className="bi bi-trash3" aria-hidden="true"></i>
                Clear saved items
              </button>
            )}
          </div>
        </div>

        <div className="col-lg-8">
          <div className="cg-chip-row mb-4" role="tablist" aria-label="Saved collections">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "recipes"}
              className="cg-chip"
              onClick={() => setTab("recipes")}
            >
              <i className="bi bi-journal-text" aria-hidden="true"></i>
              Recipes ({recipeItems.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "foods"}
              className="cg-chip"
              onClick={() => setTab("foods")}
            >
              <i className="bi bi-flower2" aria-hidden="true"></i>
              Foods ({foodItems.length})
            </button>
          </div>

          {tab === "recipes" &&
            (recipeItems.length === 0 ? (
              <div className="cg-empty-state">
                <i className="bi bi-journal-text" aria-hidden="true"></i>
                <h3 style={{ marginBottom: 8 }}>No saved recipes yet</h3>
                <p style={{ marginBottom: 20 }}>
                  Tap the heart bookmark on any recipe and it will wait for you here.
                </p>
                <Link href="/recipes" className="cg-chip" style={{ minHeight: 44 }}>
                  {t("cta.browseRecipes")}
                </Link>
              </div>
            ) : (
              <div className="row gy-3">
                {recipeItems.map((recipe) => (
                  <div className="col-12" key={recipe.slug}>
                    <div className="cg-guide-item d-flex align-items-center justify-content-between gap-3 flex-wrap">
                      <div>
                        <h3 style={{ fontSize: 17, marginBottom: 4 }}>
                          <Link href={`/recipes/${recipe.slug}`}>{recipe.title}</Link>
                        </h3>
                        <p style={{ fontSize: 13.5, marginBottom: 0 }}>
                          {recipe.region} | {recipe.timeMinutes} minutes | {recipe.servings}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="cg-save-btn"
                        aria-pressed={true}
                        aria-label={`Remove ${recipe.title} from saved`}
                        onClick={() => remove("recipe", recipe.slug)}
                      >
                        <i className="bi bi-bookmark-x" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          {tab === "foods" &&
            (foodItems.length === 0 ? (
              <div className="cg-empty-state">
                <i className="bi bi-flower2" aria-hidden="true"></i>
                <h3 style={{ marginBottom: 8 }}>No saved foods yet</h3>
                <p style={{ marginBottom: 20 }}>
                  Save a food profile to keep its origins, nutrition notes and cooking tips close.
                </p>
                <Link href="/foods" className="cg-chip" style={{ minHeight: 44 }}>
                  {t("cta.exploreFoods")}
                </Link>
              </div>
            ) : (
              <div className="row gy-3">
                {foodItems.map((food) => (
                  <div className="col-12" key={food.slug}>
                    <div className="cg-guide-item d-flex align-items-center justify-content-between gap-3 flex-wrap">
                      <div>
                        <h3 style={{ fontSize: 17, marginBottom: 4 }}>
                          <Link href={`/foods/${food.slug}`}>{food.name}</Link>
                        </h3>
                        <p style={{ fontSize: 13.5, marginBottom: 0, fontStyle: "italic" }}>
                          {food.tagline}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="cg-save-btn"
                        aria-pressed={true}
                        aria-label={`Remove ${food.name} from saved`}
                        onClick={() => remove("food", food.slug)}
                      >
                        <i className="bi bi-bookmark-x" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
