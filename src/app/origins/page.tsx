import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import { getFood } from "@/lib/data/foods";
import { origins } from "@/lib/data/origins";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Origins",
  description:
    "Regional origin stories for Africa's indigenous grains and botanicals: West Africa, the Sahel belt, East Africa, the Horn of Africa, Southern Africa and diaspora kitchens.",
  alternates: { canonical: "/origins" },
};

export default async function OriginsPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.origins")}
        text="Six landscapes shaped these grains. Follow the farming stories, market cultures and crops of each region, then cook from them."
        crumbs={[{ label: t(locale, "nav.origins") }]}
      />

      <section className="section">
        <div className="container">
          <div className="cg-origin-strip" data-aos="fade-up">
            {origins.map((origin) => (
              <Link href={`#${origin.slug}`} key={origin.slug}>
                <span className="cg-origin-name">{origin.name}</span>
                <span className="cg-origin-sub">{origin.countries.slice(0, 3).join(", ")}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {origins.map((origin, index) => (
        <section
          key={origin.slug}
          id={origin.slug}
          className={`section${index % 2 === 1 ? " light-background" : ""}`}
        >
          <div className="container">
            <div className="row gy-5 align-items-start">
              <div className="col-lg-5" data-aos="zoom-out">
                <a href={origin.image} className="glightbox" data-gallery="origins-gallery">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={origin.image}
                    alt={origin.imageAlt}
                    className="img-fluid rounded"
                    style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
                    loading="lazy"
                  />
                </a>
                <div className="cg-chip-row mt-4">
                  {origin.crops.map((crop) => (
                    <span key={crop} className="cg-chip">
                      {crop}
                    </span>
                  ))}
                </div>
                <p className="cg-badge-note">Countries and territories in this story: {origin.countries.join(", ")}.</p>
              </div>

              <div className="col-lg-7">
                <span className="cg-origin-marker">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                  {origin.subtitle}
                </span>
                <h2 className="cg-section-heading mt-2">{origin.name}</h2>
                {origin.story.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mb-3">
                    {paragraph}
                  </p>
                ))}

                <div className="cg-callout cg-callout-green mt-4">
                  <strong>Market note: </strong>
                  {origin.marketNote}
                </div>

                {origin.quote && (
                  <blockquote className="mt-4" style={{ borderLeft: "3px solid var(--clay-color)", paddingLeft: 20, fontStyle: "italic" }}>
                    <p style={{ fontSize: 18, marginBottom: 6 }}>&ldquo;{origin.quote.text}&rdquo;</p>
                    <footer style={{ fontSize: 13, color: "color-mix(in srgb, var(--default-color), transparent 40%)" }}>
                      {origin.quote.attribution}
                    </footer>
                  </blockquote>
                )}

                <div className="cg-chip-row mt-4">
                  {origin.foodSlugs.map((slug) => {
                    const food = getFood(slug);
                    if (!food) return null;
                    return (
                      <Link key={slug} href={`/foods/${slug}`} className="cg-chip cg-chip-clay" style={{ minHeight: 44 }}>
                        {food.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
