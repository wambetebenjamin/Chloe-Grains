"use client";

import { useI18n } from "./I18nProvider";
import { useSaved, type SavedKind } from "./SavedProvider";

export default function SaveButton({
  kind,
  slug,
  compact = false,
}: {
  kind: SavedKind;
  slug: string;
  compact?: boolean;
}) {
  const { isSaved, toggle, hydrated } = useSaved();
  const { t } = useI18n();
  const saved = hydrated && isSaved(kind, slug);

  return (
    <button
      type="button"
      className="cg-save-btn"
      aria-pressed={saved}
      aria-label={`${saved ? t("cta.saved") : t("cta.saveRecipe")} ${slug.replace(/-/g, " ")}`}
      title={saved ? t("cta.saved") : t("cta.saveRecipe")}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(kind, slug);
      }}
    >
      <i className={`bi ${saved ? "bi-bookmark-heart-fill" : "bi-bookmark-heart"}`} aria-hidden="true"></i>
      {!compact && <span>{saved ? t("cta.saved") : t("cta.saveRecipe")}</span>}
    </button>
  );
}
