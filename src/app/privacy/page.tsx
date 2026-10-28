import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Chloe Grains handles cookies, local storage, form data and third party services. Privacy first, plain language, no surprises.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageTitle
        title="Privacy Policy"
        text="Plain language about the small amount of data this site touches, and the large amount it never asks for."
        crumbs={[{ label: "Privacy" }]}
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cg-section-heading">The short version</h2>
              <p>
                Chloe Grains works without accounts, without trackers by default and without selling
                anything, including data. Your saved recipes and saved foods live only in your own
                browser. The only cookies we set are the ones you can read about below.
              </p>

              <h2 className="cg-section-heading mt-4">Cookies and local storage</h2>
              <ul className="list-unstyled list-check">
                <li className="mb-3">
                  <strong>chloe-grains-cookie-consent:</strong> remembers whether you accepted all
                  cookies or essential only, for one year, so we do not ask again on every page.
                </li>
                <li className="mb-3">
                  <strong>chloe-grains-locale:</strong> remembers your language choice (English,
                  Kiswahili or French) for one year.
                </li>
                <li className="mb-3">
                  <strong>Local storage, chloe-grains-saved:</strong> your saved recipes, saved foods
                  and the optional display name you add on the Saved page. This never leaves your
                  device and clears when you clear site data.
                </li>
              </ul>
              <p>
                If you choose &ldquo;essential only&rdquo;, we set no analytics cookies at all. If
                you choose &ldquo;accept all&rdquo;, we may enable a privacy friendly, cookie light
                analytics script in the future; this page will say so before that happens.
              </p>

              <h2 className="cg-section-heading mt-4">Forms</h2>
              <p>
                Contact, newsletter and share a recipe submissions carry only what you type: your
                name, email and message or recipe. We use them to reply and to edit, nothing else.
                Submissions may pass through an optional webhook you can read about in our
                developer docs, and are protected by an invisible honeypot field plus light rate
                limiting.
              </p>

              <h2 className="cg-section-heading mt-4">reCAPTCHA</h2>
              <p>
                When the site owner configures reCAPTCHA keys, form submissions include a reCAPTCHA
                token verified with Google. Google then processes your IP address and standard
                security signals under its own privacy policy. Without keys configured, forms still
                work and rely on the honeypot and rate limiting instead.
              </p>

              <h2 className="cg-section-heading mt-4">Fonts and embedded media</h2>
              <p>
                Fonts load from Google Fonts and an optional talk video embeds from YouTube through
                GLightbox only when you press play. Those services see your IP address as part of
                serving the asset, exactly like any website that links them.
              </p>

              <h2 className="cg-section-heading mt-4">What we never do</h2>
              <ul className="list-unstyled list-check">
                <li className="mb-3">We never sell or rent personal data.</li>
                <li className="mb-3">We never set advertising or cross site tracking cookies.</li>
                <li className="mb-3">We never require an account, and we store no passwords.</li>
                <li className="mb-3">We never publish your email address or recipe submissions without your written consent.</li>
              </ul>

              <h2 className="cg-section-heading mt-4">Your choices</h2>
              <p>
                Clear cookies and site data in your browser any time: saved items and consent reset
                together. To withdraw consent for a published recipe, or to ask what we hold about
                you, write to <a href={`mailto:${site.email}`}>{site.email}</a> and we will answer
                within two working days.
              </p>

              <p className="cg-badge-note">Last updated: October 2026.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
