import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/PageTitle";
import { site, whatsappLink } from "@/lib/data/site";
import { t } from "@/lib/i18n";
import { getLocale } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Chloe Grains on WhatsApp or by email. Recipe questions, corrections, producer information and partnership ideas all reach a human inbox.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage() {
  const locale = await getLocale();

  return (
    <>
      <PageTitle
        title={t(locale, "nav.contact")}
        text={site.contactNote}
        crumbs={[{ label: t(locale, "nav.contact") }]}
      />

      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="info h-100 d-flex flex-column">
                <h3>Talk to us</h3>
                <p>Three doors into the same small office.</p>

                <div className="info-item d-flex align-items-start">
                  <i className="bi bi-whatsapp" aria-hidden="true"></i>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                        +{site.whatsappNumber}
                      </a>
                      <br />
                      Fastest for quick recipe questions, Monday to Saturday.
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex align-items-start">
                  <i className="bi bi-envelope" aria-hidden="true"></i>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                      <br />
                      For corrections, producer suggestions and partnerships.
                    </p>
                  </div>
                </div>

                <div className="info-item d-flex align-items-start">
                  <i className="bi bi-clock-history" aria-hidden="true"></i>
                  <div>
                    <h4>Response time</h4>
                    <p>Usually within two working days, East Africa time.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
