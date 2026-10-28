import type { Metadata } from "next";
import { FoodCard } from "@/components/Cards";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/lib/data/site";
import { foods } from "@/lib/data/foods";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Foods",
  description:
    "Profiles of Africa's indigenous grains and botanicals: fonio, teff, moringa, baobab, sorghum, millet, hibiscus, amaranth and bambara groundnut, with origins, nutrition highlights and traditional uses.",
  alternates: { canonical: "/foods" },
};

export default async function FoodsPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.foods")}
        text="Ten indigenous crops, each with its own geography, kitchen tradition and quiet resilience. Read the profiles, then cook from them."
        crumbs={[{ label: t(locale, "nav.foods") }]}
      />

      <section id="foods-index" className="section">
        <SectionTitle
          kicker={t(locale, "home.featuredTitle")}
          title={t(locale, "home.featuredKicker")}
        />
        <div className="container">
          <div className="row gy-4">
            {foods.map((food) => (
              <div className="col-xl-4 col-md-6" key={food.slug}>
                <FoodCard food={food} />
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto">
              <div className="cg-callout" data-aos="fade-up">
                <strong>{t(locale, "label.disclaimer")}:</strong> {site.disclaimers.medical}{" "}
                {site.disclaimers.platform}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
