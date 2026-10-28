import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecipeCard } from "@/components/Cards";
import PageTitle from "@/components/PageTitle";
import SaveButton from "@/components/SaveButton";
import { foods, getFood } from "@/lib/data/foods";
import { getRecipe } from "@/lib/data/recipes";
import { site } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return foods.map((food) => ({ slug: food.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const food = getFood(slug);
  if (!food) return { title: "Food not found" };
  return {
    title: `${food.name} (${food.scientificName})`,
    description: `${food.tagline}. Origin regions, nutrition highlights, traditional uses and modern recipes for ${food.name}.`,
    alternates: { canonical: `/foods/${food.slug}` },
    openGraph: {
      title: `${food.name} | ${site.name}`,
      description: food.intro,
      images: [{ url: food.image, alt: food.imageAlt }],
    },
  };
}

export default async function FoodProfilePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const food = getFood(slug);
  if (!food) notFound();
  const locale = await getLocale();

  const index = foods.findIndex((f) => f.slug === food.slug);
  const prev = foods[(index - 1 + foods.length) % foods.length];
  const next = foods[(index + 1) % foods.length];
  const foodRecipes = food.recipeSlugs
    .map((recipeSlug) => getRecipe(recipeSlug))
    .filter((recipe) => recipe !== undefined);

  return (
    <>
      <PageTitle
        title={food.name}
        text={food.tagline}
        crumbs={[{ label: t(locale, "nav.foods"), href: "/foods" }, { label: food.name }]}
        image={food.image}
      />

      <section className="section">
        <div className="container">
          <div className="row gy-5 align-items-start">
            <div className="col-lg-5" data-aos="zoom-out">
              <a href={food.image} className="glightbox" data-gallery="food-gallery">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={food.image}
                  alt={food.imageAlt}
                  className="img-fluid rounded"
                  style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
                />
              </a>
              <div className="cg-chip-row mt-4">
                {food.localNames.map((ln) => (
                  <span key={ln.name} className="cg-chip cg-chip-clay" title={ln.language}>
                    {ln.name}
                  </span>
                ))}
              </div>
              <p className="cg-badge-note">Local names, with language or trade context.</p>
            </div>

            <div className="col-lg-7">
              <p className="cg-profile-intro">{food.intro}</p>

              <div className="cg-fact-grid my-4" data-aos="fade-up">
                <div className="cg-fact">
                  <span className="cg-fact-label">Category</span>
                  <span className="cg-fact-value">{food.category}</span>
                </div>
                <div className="cg-fact">
                  <span className="cg-fact-label">Botanical name</span>
                  <span className="cg-fact-value" style={{ fontStyle: "italic" }}>
                    {food.scientificName}
                  </span>
                </div>
                <div className="cg-fact">
                  <span className="cg-fact-label">Home regions</span>
                  <span className="cg-fact-value">{food.regions.join(", ")}</span>
                </div>
                <div className="cg-fact">
                  <span className="cg-fact-label">Flavor</span>
                  <span className="cg-fact-value">{food.flavor.split(",")[0]}</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-3 align-items-center">
                <SaveButton kind="food" slug={food.slug} />
                {foodRecipes.length > 0 && (
                  <Link href={`/recipes?ingredient=${food.slug}`} className="btn-cta" style={{ backgroundColor: "var(--accent-color)", color: "var(--contrast-color)", borderRadius: 6, padding: "12px 24px", display: "inline-flex", alignItems: "center", minHeight: 44, fontFamily: "var(--heading-font)", textTransform: "uppercase", fontSize: 13 }}>
                    Cook with {food.name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-background">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <h2 className="cg-section-heading">Origin and geography</h2>
              <p>{food.origin}</p>
              <h2 className="cg-section-heading mt-4">Resilience in the field</h2>
              <p>{food.resilience}</p>
            </div>
            <div className="col-lg-6">
              <h2 className="cg-section-heading">Culture and ceremony</h2>
              <p>{food.culture}</p>
              <h2 className="cg-section-heading mt-4">Flavor and texture</h2>
              <p>{food.flavor}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <h2 className="cg-section-heading">Nutrition highlights</h2>
              <ul className="list-unstyled list-check">
                {food.nutritionHighlights.map((item) => (
                  <li key={item} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="cg-callout mt-4">
                <strong>{t(locale, "label.disclaimer")}:</strong> {site.disclaimers.medical}
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="cg-section-heading">Traditional uses</h2>
              <ul className="list-unstyled list-check">
                {food.traditionalUses.map((item) => (
                  <li key={item} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
              <h2 className="cg-section-heading mt-4">Modern uses</h2>
              <ul className="list-unstyled list-check">
                {food.modernUses.map((item) => (
                  <li key={item} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-background">
        <div className="container">
          <h2 className="cg-section-heading">How to cook it well</h2>
          <ol className="cg-steps">
            {food.cookingNotes.map((note) => (
              <li key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {foodRecipes.length > 0 && (
        <section className="section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Recipes</h2>
            <p>{food.name} in real kitchens</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              {foodRecipes.map((recipe) => (
                <div className="col-xl-4 col-md-6" key={recipe.slug}>
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section light-background" style={{ padding: "30px 0" }}>
        <div className="container d-flex justify-content-between flex-wrap gap-3">
          <Link href={`/foods/${prev.slug}`} className="readmore" style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}>
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>
            <span>Previous: {prev.name}</span>
          </Link>
          <Link href={`/foods/${next.slug}`} className="readmore" style={{ minHeight: 44, display: "inline-flex", alignItems: "center" }}>
            <span>Next: {next.name}</span>
            <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
