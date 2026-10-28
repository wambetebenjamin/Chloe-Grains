import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chloe Grains is an educational discovery platform for Africa's indigenous grains and botanicals: what we believe, how we edit, and what we are not.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    heading: "Write with farmers, not about them",
    body: "Producer profiles are built from published research, cooperative statements and market reporting, and every ethical note is phrased as a question a buyer should ask, not a claim we audit.",
  },
  {
    heading: "Keep claims small enough to be true",
    body: "Nutrition notes say 'commonly reported' and 'a source of' because that is what the evidence supports. We do not sell miracle narratives; these crops do not need them.",
  },
  {
    heading: "Respect the kitchen that kept the grain",
    body: "Recipes carry their cultural note, their local names and their region, because a dish without its story is just ingredients. We credit home cooks and communities by name where they wish it.",
  },
  {
    heading: "Stay out of the market, stay in the library",
    body: "Chloe Grains sells nothing and certifies nothing. Our only product is understanding, so our only incentive is accuracy.",
  },
];

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.about")}
        text="One belief runs through this site: indigenous grains are not relics, they are answers."
        crumbs={[{ label: t(locale, "nav.about") }]}
      />

      <section className="about-3 section">
        <div className="container">
          <div className="row gy-4 justify-content-between align-items-center">
            <div className="col-lg-6 order-lg-2 position-relative" data-aos="zoom-out">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-community.jpg"
                alt="Friends laughing while sharing a spread of dishes around an outdoor table"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-5 order-lg-1" data-aos="fade-up" data-aos-delay="100">
              <h2 className="content-title mb-4">Ancient grains. Present strength.</h2>
              <p className="mb-4">
                Chloe Grains began as a notebook of grain names collected in markets from Conakry to
                Kisumu, and grew into this library of profiles, recipes and sourcing stories. The
                name honors a grandmother who cooked acha porridge every cold morning and called it
                strength in a bowl.
              </p>
              <p className="mb-4">
                Today we work as a lean editorial project: writers, cooks and researchers across
                four African regions and the diaspora, publishing what we can verify and labeling
                everything else honestly.
              </p>
              <ul className="list-unstyled list-check">
                <li>Profiles for ten indigenous crops and counting</li>
                <li>Home tested recipes with timings and safety notes</li>
                <li>Sourcing stories that name regions and seasons, not just brands</li>
              </ul>
              <p>
                <Link href="/contact" className="btn-cta">
                  Work with us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-background">
        <SectionTitle kicker="How we work" title="Four rules we edit by" />
        <div className="container">
          <div className="row gy-4">
            {values.map((value, index) => (
              <div className="col-lg-6" key={value.heading}>
                <div className="cg-guide-item h-100" data-aos="fade-up" data-aos-delay={index * 60}>
                  <h3>{value.heading}</h3>
                  <p>{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cg-section-heading">What Chloe Grains is not</h2>
              <div className="cg-callout mb-3">
                <strong>Not medical advice. </strong>
                {site.disclaimers.medical}
              </div>
              <div className="cg-callout mb-3">
                <strong>Not a shop or certifier. </strong>
                {site.disclaimers.commerce}
              </div>
              <div className="cg-callout">
                <strong>Not a substitute for local food safety rules. </strong>
                {site.disclaimers.safety}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
