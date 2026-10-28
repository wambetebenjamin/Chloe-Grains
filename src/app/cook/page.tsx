import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { guides, substitutionTable } from "@/lib/data/guides";
import { site } from "@/lib/data/site";
import type { Locale } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Cook",
  description:
    "Diaspora and beginner guides for cooking Africa's indigenous grains: your first basket, sourcing outside the continent, substitutions, fermentation basics, batch cooking and a market glossary.",
  alternates: { canonical: "/cook" },
};

export default async function CookPage() {
  const locale = (await getLocale()) as Locale;

  return (
    <>
      <PageTitle
        title={t(locale, "nav.cook")}
        text="Guides for diaspora kitchens and first timers: start small, buy well, ferment calmly and let the grains teach you their timing."
        crumbs={[{ label: t(locale, "nav.cook") }]}
      />

      <section className="section">
        <div className="container">
          <div className="row gy-4">
            {guides
              .filter((guide) => guide.slug !== "glossary")
              .map((guide, index) => (
                <div className="col-lg-6" key={guide.slug}>
                  <div className="cg-guide-item" data-aos="fade-up" data-aos-delay={index * 60}>
                    <h3>{guide.title[locale] ?? guide.title.en}</h3>
                    <p style={{ fontStyle: "italic", color: "color-mix(in srgb, var(--default-color), transparent 35%)", marginBottom: 16 }}>
                      {guide.intro[locale] ?? guide.intro.en}
                    </p>
                    {guide.blocks.map((block) => (
                      <div key={block.heading} className="mb-4">
                        <h4 style={{ fontSize: 16, fontFamily: "var(--heading-font)", color: "var(--accent-color)", marginBottom: 6 }}>
                          {block.heading}
                        </h4>
                        <p>{block.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section light-background">
        <SectionTitle kicker="Quick reference" title="Substitutions that respect the grain" />
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="mb-4">{substitutionTable.intro}</p>
              <div className="cg-table-wrap" data-lenis-prevent>
                <table className="cg-table">
                  <thead>
                    <tr>
                      <th scope="col">Recipe wants</th>
                      <th scope="col">You have</th>
                      <th scope="col">What changes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {substitutionTable.rows.map((row) => (
                      <tr key={row.want}>
                        <td>{row.want}</td>
                        <td>{row.have}</td>
                        <td>{row.change}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionTitle kicker="Market words" title="A small grain glossary" />
        <div className="container">
          <div className="row gy-4">
            {guides
              .find((guide) => guide.slug === "glossary")
              ?.blocks.map((block) => (
                <div className="col-md-6 col-lg-4" key={block.heading}>
                  <div className="cg-guide-item h-100">
                    <h3>{block.heading}</h3>
                    <p>{block.body}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="cg-callout cg-callout-green">
                <strong>Ready to cook? </strong>
                Pick a recipe from the kitchen, or share your own family dish and we will test it
                with you. <Link href="/recipes">Browse recipes</Link> or{" "}
                <Link href="/share-recipe">share yours</Link>.
              </div>
              <div className="cg-disclaimer mt-3">
                <i className="bi bi-info-circle" aria-hidden="true"></i>
                {site.disclaimers.safety} {site.disclaimers.medical}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
