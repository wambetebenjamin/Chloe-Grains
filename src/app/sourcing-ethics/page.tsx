import type { Metadata } from "next";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { site } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Sourcing Ethics",
  description:
    "How Chloe Grains approaches ethical sourcing of indigenous African grains: fair pricing, wild harvest stewardship, seed sovereignty and what our listings do and do not mean.",
  alternates: { canonical: "/sourcing-ethics" },
};

const principles = [
  {
    heading: "Price the labor, not just the kilos",
    body: "Fonio cleaning, baobab pod cracking and teff weeding are hours of skilled work, much of it women's work. Fair pricing recognises time and craft. When you buy, ask whether the cooperative or processor is named on the packet: named chains pay better.",
  },
  {
    heading: "Wild harvest keeps trees standing",
    body: "Baobab and moringa programs only help communities when standing trees earn more than cleared land. Support buyers who fund collector agreements, train sustainable pruning and leave enough fruit for regeneration and wildlife.",
  },
  {
    heading: "Seed sovereignty stays with farmers",
    body: "Landraces of sorghum, millet and teff are community heritage. Research and breeding should multiply and return seed with benefit sharing, not extract varieties for private lines. We highlight programs that do this well.",
  },
  {
    heading: "Household food security comes first",
    body: "Trade should buy surplus, never the family granary. Programs that purchase at harvest with fair prices, rather than in the hungry season at distress prices, keep farming viable for the next generation.",
  },
  {
    heading: "Names and stories are not free marketing",
    body: "When a dish or grain carries a community's name, that community deserves credit and, where commerce follows, benefit. We publish cultural notes with consent and avoid trademarking or gating heritage terms.",
  },
  {
    heading: "Honest labels beat certified theater",
    body: "Certification costs money small processors rarely have. We prefer transparent origin statements, cooperative names and harvest dates, and we say plainly that Chloe Grains certifies nothing.",
  },
];

export default async function SourcingEthicsPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.ethics")}
        text="Six principles guide every producer listing and every sourcing story we publish."
        crumbs={[{ label: t(locale, "nav.ethics") }]}
      />

      <section className="section">
        <SectionTitle kicker="Our principles" title="What fair sourcing looks like" />
        <div className="container">
          <div className="row gy-4">
            {principles.map((principle, index) => (
              <div className="col-lg-6" key={principle.heading}>
                <div className="cg-guide-item h-100" data-aos="fade-up" data-aos-delay={index * 60}>
                  <h3>
                    <span style={{ color: "var(--clay-color)", fontFamily: "var(--heading-font)", marginRight: 10 }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {principle.heading}
                  </h3>
                  <p>{principle.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cg-section-heading">What our producer listings mean</h2>
              <p>
                The producers directory describes ecosystems we have researched: cooperatives,
                women's groups, millers and wild harvest collectives. Entries are informational and
                educational.
              </p>
              <div className="cg-callout mb-3">
                <strong>{site.disclaimers.commerce}</strong>
              </div>
              <div className="cg-callout">
                <strong>Ask these questions when you buy: </strong>
                Which cooperative or zone grew this grain? When was it harvested or milled? Does the
                packer name the processor? Does the price reach the people who cleaned the grain? A
                shop that can answer three of four is usually buying well.
              </div>
              <p className="mt-4">
                Want the full directory? <Link href="/producers">Meet the producers</Link>, or{" "}
                <Link href="/contact">suggest one</Link> we should research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
