"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { foods } from "@/lib/data/foods";
import {
  dietTagLabels,
  recipes,
  timeBandLabels,
  type DietTag,
  type TimeBand,
} from "@/lib/data/recipes";
import { RecipeCard } from "./Cards";

const REGIONS = [
  "West Africa",
  "Sahel",
  "East Africa",
  "Horn of Africa",
  "Southern Africa",
  "Pan African",
];

const DIET_FILTERS: DietTag[] = ["vegan", "vegetarian", "gluten-free", "dairy-free"];
const TIME_FILTERS: TimeBand[] = ["under-30", "30-60", "over-60"];

/**
 * Filterable recipe index: by ingredient, time, diet note and region.
 * State lives in the URL so filters are shareable, and on mobile the
 * filters open as a bottom sheet per the responsive contract.
 */
export default function RecipesExplorer() {
  const router = useRouter();
  const params = useSearchParams();
  const [sheetOpen, setSheetOpen] = useState(false);

  const ingredient = params.get("ingredient") ?? "";
  const time = params.get("time") ?? "";
  const diet = params.get("diet") ?? "";
  const region = params.get("region") ?? "";

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params.toString());
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    const qs = next.toString();
    router.replace(qs ? `/recipes?${qs}` : "/recipes", { scroll: false });
  };

  const clearAll = () => {
    router.replace("/recipes", { scroll: false });
  };

  // Close the sheet on Escape and lock Lenis while it is open.
  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSheetOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [sheetOpen]);

  const filtered = useMemo(
    () =>
      recipes.filter((recipe) => {
        if (ingredient && !recipe.foodSlugs.includes(ingredient)) return false;
        if (time && recipe.timeBand !== time) return false;
        if (diet && !recipe.dietTags.includes(diet as DietTag)) return false;
        if (region && recipe.region !== region) return false;
        return true;
      }),
    [ingredient, time, diet, region]
  );

  // Re-observe newly rendered cards so AOS never leaves them invisible.
  useEffect(() => {
    const id = window.setTimeout(() => {
      // AOS is loaded lazily by TemplateMotion; refresh after list changes so
      // newly rendered cards never stay invisible.
      void import("aos").then((mod) => mod.default.refreshHard());
    }, 60);
    return () => window.clearTimeout(id);
  }, [filtered]);

  const hasFilters = Boolean(ingredient || time || diet || region);

  const filterBody = (
    <div className="cg-filters" data-lenis-prevent={sheetOpen ? "" : undefined}>
      <div className="cg-filter-group">
        <h3>Ingredient</h3>
        <label className="visually-hidden" htmlFor="filter-ingredient">
          Filter by ingredient
        </label>
        <select
          id="filter-ingredient"
          className="cg-filter-select"
          value={ingredient}
          onChange={(e) => setParam("ingredient", e.target.value)}
        >
          <option value="">All ingredients</option>
          {foods.map((food) => (
            <option key={food.slug} value={food.slug}>
              {food.name}
            </option>
          ))}
        </select>
      </div>

      <div className="cg-filter-group">
        <h3>Time</h3>
        <div className="cg-chip-row" role="group" aria-label="Filter by time">
          {TIME_FILTERS.map((band) => (
            <button
              key={band}
              type="button"
              className="cg-chip"
              aria-pressed={time === band}
              onClick={() => setParam("time", time === band ? "" : band)}
            >
              {timeBandLabels[band]}
            </button>
          ))}
        </div>
      </div>

      <div className="cg-filter-group">
        <h3>Diet note</h3>
        <div className="cg-chip-row" role="group" aria-label="Filter by diet note">
          {DIET_FILTERS.map((tag) => (
            <button
              key={tag}
              type="button"
              className="cg-chip"
              aria-pressed={diet === tag}
              onClick={() => setParam("diet", diet === tag ? "" : tag)}
            >
              {dietTagLabels[tag]}
            </button>
          ))}
        </div>
      </div>

      <div className="cg-filter-group">
        <h3>Region</h3>
        <div className="cg-chip-row" role="group" aria-label="Filter by region">
          {REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              className="cg-chip"
              aria-pressed={region === r}
              onClick={() => setParam("region", region === r ? "" : r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <div className="cg-filter-group">
          <button type="button" className="cg-chip cg-chip-clay" onClick={clearAll}>
            <i className="bi bi-x-circle" aria-hidden="true"></i>
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="container">
      {/* Mobile: filters behind a bottom sheet */}
      <button
        type="button"
        className="cg-filter-toggle"
        aria-expanded={sheetOpen}
        onClick={() => setSheetOpen((v) => !v)}
      >
        <i className="bi bi-funnel" aria-hidden="true"></i>
        Filters
        {hasFilters && (
          <span className="cg-saved-count" style={{ position: "static" }}>
            {[ingredient, time, diet, region].filter(Boolean).length}
          </span>
        )}
      </button>

      {/* Desktop: inline filters */}
      <div className="d-none d-lg-block">{filterBody}</div>

      {sheetOpen && (
        <>
          <button
            type="button"
            className="cg-sheet-backdrop"
            aria-label="Close filters"
            onClick={() => setSheetOpen(false)}
          />
          <div className="cg-sheet" role="dialog" aria-label="Recipe filters" aria-modal="true">
            <div className="cg-sheet-header">
              <h2>Filters</h2>
              <button
                type="button"
                className="cg-sheet-close"
                aria-label="Close filters"
                onClick={() => setSheetOpen(false)}
              >
                <i className="bi bi-x-lg" aria-hidden="true"></i>
              </button>
            </div>
            <div className="cg-sheet-body" data-lenis-prevent>
              {filterBody}
            </div>
          </div>
        </>
      )}

      <p aria-live="polite" style={{ marginBottom: 24, fontSize: 15 }}>
        Showing <strong>{filtered.length}</strong> of {recipes.length} recipes
        {hasFilters && " matching your filters"}.
      </p>

      {filtered.length === 0 ? (
        <div className="cg-empty-state">
          <i className="bi bi-basket" aria-hidden="true"></i>
          <h3 style={{ marginBottom: 8 }}>No recipes match those filters yet</h3>
          <p style={{ marginBottom: 20 }}>
            Try removing a filter, or share the recipe you are looking for and we will cook it.
          </p>
          <button type="button" className="cg-chip" onClick={clearAll}>
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="row gy-4">
          {filtered.map((recipe) => (
            <div className="col-xl-4 col-md-6" key={recipe.slug}>
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
