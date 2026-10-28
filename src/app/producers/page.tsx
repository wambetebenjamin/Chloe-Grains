import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { producers } from "@/lib/data/producers";
import { site } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Producers",
  description:
    "Informational directory of cooperatives, women's groups and smallholder ecosystems growing and processing Africa's indigenous grains and botanicals.",
  alternates: { canonical: "/producers" },
};

export default async function ProducersPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.producers")}
        text="The cooperatives, women's groups and smallholder ecosystems behind the grains. Informational listings, with the ethical questions worth asking."
        crumbs={[{ label: t(locale, "nav.producers") }]}
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="cg-callout mb-5" data-aos="fade-up">
                <strong>How to read this directory: </strong>
                {site.disclaimers.commerce} Each entry describes a producer ecosystem we have
                researched, the practices that make it healthy, and the season its crops move.
              </div>
            </div>
          </div>
        </div>

        <SectionTitle kicker="Directory" title="Hands behind the harvest" />

        <div className="container">
          <div className="row gy-5">
            {producers.map((producer) => (
              <div className="col-lg-6" key={producer.slug}>
                <article className="cg-card" data-aos="fade-up">
                  <div className="cg-card-img" style={{ aspectRatio: "16 / 9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={producer.image} alt={producer.imageAlt} loading="lazy" decoding="async" />
                    <span className="cg-card-tag">{producer.region}</span>
                  </div>
                  <div className="cg-card-body">
                    <h3 className="cg-card-title">{producer.name}</h3>
                    <p className="cg-badge-note" style={{ marginTop: 0, marginBottom: 12 }}>
                      {producer.kind} | {producer.country}
                    </p>
                    <p className="cg-card-text">{producer.whatTheyDo}</p>
                    <h4 style={{ fontSize: 15, fontFamily: "var(--heading-font)", color: "var(--heading-color)", marginBottom: 10 }}>
                      Ethical notes
                    </h4>
                    <ul className="list-unstyled list-check" style={{ marginBottom: 16 }}>
                      {producer.ethicalNotes.map((note) => (
                        <li key={note} className="mb-2" style={{ fontSize: 14 }}>
                          {note}
                        </li>
                      ))}
                    </ul>
                    <div className="cg-chip-row">
                      {producer.crops.map((crop) => (
                        <span key={crop} className="cg-chip">
                          {crop}
                        </span>
                      ))}
                    </div>
                    <p className="cg-badge-note mt-3">
                      <i className="bi bi-calendar3" aria-hidden="true" style={{ marginRight: 6 }}></i>
                      {producer.seasonNote}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto text-center">
              <p className="mb-4">
                Know a cooperative or processor that belongs on this page? Tell us about them and we
                will research the listing.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link
                  href="/contact"
                  className="btn-cta"
                  style={{ backgroundColor: "var(--accent-color)", color: "var(--contrast-color)", borderRadius: 6, padding: "14px 28px", display: "inline-flex", alignItems: "center", minHeight: 44, fontFamily: "var(--heading-font)", textTransform: "uppercase", fontSize: 13 }}
                >
                  Suggest a producer
                </Link>
                <Link
                  href="/sourcing-ethics"
                  className="btn-cta"
                  style={{ backgroundColor: "transparent", color: "var(--accent-color)", border: "2px solid var(--accent-color)", borderRadius: 6, padding: "14px 28px", display: "inline-flex", alignItems: "center", minHeight: 44, fontFamily: "var(--heading-font)", textTransform: "uppercase", fontSize: 13 }}
                >
                  Read our sourcing ethics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
