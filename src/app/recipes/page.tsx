import type { Metadata } from "next";
import { Suspense } from "react";
import PageTitle from "@/components/PageTitle";
import RecipesExplorer from "@/components/RecipesExplorer";
import { recipes } from "@/lib/data/recipes";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Practical recipes for Africa's indigenous grains and botanicals, filterable by ingredient, time, diet note and region. Step by step, with cultural notes and food safety guidance.",
  alternates: { canonical: "/recipes" },
};

export default async function RecipesPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.recipes")}
        text={`${recipes.length} home kitchen recipes built on fonio, teff, sorghum, millet, moringa, baobab, hibiscus, amaranth and bambara. Filter by what you have and how long you've got.`}
        crumbs={[{ label: t(locale, "nav.recipes") }]}
      />

      <section id="recipes-index" className="section">
        <Suspense
          fallback={
            <div className="container text-center py-5">
              <div className="loading" style={{ display: "block" }}>
                Loading
              </div>
            </div>
          }
        >
          <RecipesExplorer />
        </Suspense>
      </section>
    </>
  );
}
