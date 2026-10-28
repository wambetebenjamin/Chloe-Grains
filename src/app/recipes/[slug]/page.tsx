import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecipeCard } from "@/components/Cards";
import PageTitle from "@/components/PageTitle";
import PrintButton from "@/components/PrintButton";
import SaveButton from "@/components/SaveButton";
import { getFood } from "@/lib/data/foods";
import { dietTagLabels, getRecipe, recipes } from "@/lib/data/recipes";
import { site } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: recipe.title,
    description: `${recipe.subtitle}. A ${recipe.region} recipe ready in about ${recipe.timeMinutes} minutes.`,
    alternates: { canonical: `/recipes/${recipe.slug}` },
    openGraph: {
      title: `${recipe.title} | ${site.name}`,
      description: recipe.subtitle,
      images: [{ url: recipe.image, alt: recipe.imageAlt }],
    },
  };
}

export default async function RecipeDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();
  const locale = await getLocale();

  const linkedFoods = recipe.foodSlugs
    .map((foodSlug) => getFood(foodSlug))
    .filter((food) => food !== undefined);

  const related = recipes
    .filter((r) => r.slug !== recipe.slug)
    .filter(
      (r) =>
        r.region === recipe.region ||
        r.foodSlugs.some((foodSlug) => recipe.foodSlugs.includes(foodSlug))
    )
    .slice(0, 3);

  return (
    <>
      <PageTitle
        title={recipe.title}
        text={recipe.subtitle}
        crumbs={[
          { label: t(locale, "nav.recipes"), href: "/recipes" },
          { label: recipe.title },
        ]}
        image={recipe.image}
      />

      <section className="section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-5">
              <a href={recipe.image} className="glightbox" data-gallery="recipe-gallery">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  className="img-fluid rounded"
                  style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
                />
              </a>

              <div className="cg-fact-grid mt-4" data-aos="fade-up">
                <div className="cg-fact">
                  <span className="cg-fact-label">{t(locale, "label.time")}</span>
                  <span className="cg-fact-value">
                    {recipe.timeMinutes} minutes
                    {recipe.plusTimeNote ? ` ${recipe.plusTimeNote}` : ""}
                  </span>
                </div>
                <div className="cg-fact">
                  <span className="cg-fact-label">{t(locale, "label.servings")}</span>
                  <span className="cg-fact-value">{recipe.servings}</span>
                </div>
                <div className="cg-fact">
                  <span className="cg-fact-label">{t(locale, "label.difficulty")}</span>
                  <span className="cg-fact-value">{recipe.difficulty}</span>
                </div>
                <div className="cg-fact">
                  <span className="cg-fact-label">{t(locale, "label.region")}</span>
                  <span className="cg-fact-value">{recipe.region}</span>
                </div>
              </div>

              <div className="cg-chip-row mt-4">
                {recipe.dietTags.map((tag) => (
                  <span key={tag} className="cg-chip">
                    {dietTagLabels[tag]}
                  </span>
                ))}
              </div>

              <div className="d-flex gap-3 mt-4 align-items-center flex-wrap">
                <SaveButton kind="recipe" slug={recipe.slug} />
                <PrintButton />
              </div>
            </div>

            <div className="col-lg-7">
              <h2 className="cg-section-heading">{t(locale, "label.ingredients")}</h2>
              <ul className="cg-ingredient-list">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.item}>
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <span>
                      {ingredient.item}
                      {ingredient.note && (
                        <em style={{ color: "color-mix(in srgb, var(--default-color), transparent 35%)" }}>
                          {" "}
                          ({ingredient.note})
                        </em>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8 mx-auto">
              <h2 className="cg-section-heading">{t(locale, "label.method")}</h2>
              <ol className="cg-steps">
                {recipe.steps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>

              {recipe.tips.length > 0 && (
                <>
                  <h2 className="cg-section-heading mt-5">{t(locale, "label.tips")}</h2>
                  <ul className="list-unstyled list-check">
                    {recipe.tips.map((tip) => (
                      <li key={tip} className="mb-3">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {recipe.culturalNote && (
                <div className="cg-callout cg-callout-green mt-4">
                  <strong>Behind the dish: </strong>
                  {recipe.culturalNote}
                </div>
              )}

              {recipe.safetyNote && (
                <div className="cg-callout mt-3">
                  <strong>Food safety: </strong>
                  {recipe.safetyNote}
                </div>
              )}

              <div className="cg-disclaimer mt-4">
                <i className="bi bi-info-circle" aria-hidden="true"></i>
                {site.disclaimers.platform} {site.disclaimers.safety}
              </div>
            </div>
          </div>
        </div>
      </section>

      {linkedFoods.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="cg-section-heading">The indigenous ingredients inside</h2>
            <div className="cg-chip-row">
              {linkedFoods.map((food) => (
                <Link key={food.slug} href={`/foods/${food.slug}`} className="cg-chip cg-chip-clay" style={{ minHeight: 44 }}>
                  <i className="bi bi-flower1" aria-hidden="true"></i>
                  {food.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Cook next</h2>
            <p>More from this grain and this region</p>
          </div>
          <div className="container">
            <div className="row gy-4">
              {related.map((item) => (
                <div className="col-xl-4 col-md-6" key={item.slug}>
                  <RecipeCard recipe={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
