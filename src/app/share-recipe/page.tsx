import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import ShareRecipeForm from "@/components/ShareRecipeForm";
import { site } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Share a Recipe",
  description:
    "Share your family or community recipe for an indigenous African grain or botanical. We test, edit and publish with full credit to you.",
  alternates: { canonical: "/share-recipe" },
};

const nextSteps = [
  {
    heading: "We read every submission",
    body: "A human editor reads your recipe within a few days. If anything is unclear, we email one or two gentle questions, never a form letter.",
  },
  {
    heading: "We test in a home kitchen",
    body: "Every recipe published on Chloe Grains is cooked at least twice in a normal home kitchen, with supermarket or grocer ingredients, and the timings are checked on a timer.",
  },
  {
    heading: "You keep the credit",
    body: "Your name (or your grandmother's name, if you prefer) appears with the recipe, together with the region and the story you shared. You can ask us to amend or withdraw it at any time.",
  },
];

export default async function ShareRecipePage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.share")}
        text="Your family's uji, jollof, okpa or thiakry belongs in this library. Send it over and we will cook it with care."
        crumbs={[{ label: t(locale, "nav.share") }]}
      />

      <section className="section">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-5">
              <h2 className="cg-section-heading">What happens next</h2>
              {nextSteps.map((step, index) => (
                <div className="d-flex gap-3 mb-4" key={step.heading} data-aos="fade-up" data-aos-delay={index * 80}>
                  <span className="cg-fact" style={{ minWidth: 52, minHeight: 52, display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--heading-font)", fontSize: 18 }}>
                    {index + 1}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 17, color: "var(--heading-color)", marginBottom: 6 }}>{step.heading}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.7 }}>{step.body}</p>
                  </div>
                </div>
              ))}
              <div className="cg-disclaimer mt-4">
                <i className="bi bi-shield-check" aria-hidden="true"></i>
                We never publish your email address. Submissions are used only for editorial work on
                this site.
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact">
                <div className="info" style={{ padding: 30 }}>
                  <ShareRecipeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
