import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms of use for Chloe Grains: educational purpose, content licensing, submissions, disclaimers and acceptable use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageTitle
        title="Terms of Use"
        text="Short, fair and readable. By using this site you agree to these terms."
        crumbs={[{ label: "Terms" }]}
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="cg-section-heading">1. What this site is</h2>
              <p>
                {site.disclaimers.platform} {site.disclaimers.medical} {site.disclaimers.commerce}{" "}
                {site.disclaimers.safety}
              </p>

              <h2 className="cg-section-heading mt-4">2. Using our content</h2>
              <p>
                You may read, cook from, print and share individual recipes and profiles for
                personal, classroom or community use with a link back to the page. Republishing
                whole sections, scraping the site into datasets, or reselling our editorial content
                requires written permission. Photography is licensed from Pexels contributors under
                the Pexels license and remains theirs; see our image credits page for sources.
              </p>

              <h2 className="cg-section-heading mt-4">3. Your submissions</h2>
              <p>
                When you share a recipe or story, you confirm it is yours to share and you grant
                Chloe Grains a non exclusive right to test, edit and publish it with credit. You
                keep ownership and may request amendments or withdrawal at any time. Do not submit
                content you do not have the right to share, and do not include personal data about
                other people without their consent.
              </p>

              <h2 className="cg-section-heading mt-4">4. Saved items and your device</h2>
              <p>
                Saved recipes and foods are stored locally in your browser through local storage.
                They are not synced to our servers, so clearing browser data removes them. We are
                not liable for loss of saved items.
              </p>

              <h2 className="cg-section-heading mt-4">5. Acceptable use</h2>
              <p>
                Do not attempt to disrupt the site, probe its forms at scale, or use automated
                submissions to spam us. Forms include rate limiting and spam protection, and abuse
                may result in blocked submissions.
              </p>

              <h2 className="cg-section-heading mt-4">6. No warranty</h2>
              <p>
                Content is provided in good faith and as is. Cooking involves heat, allergens and
                fermentation; you are responsible for applying local food safety guidance and your
                own judgment. We work to keep information accurate but cannot warrant completeness,
                and we correct errors promptly when reported.
              </p>

              <h2 className="cg-section-heading mt-4">7. Template and software credits</h2>
              <p>
                This website is built on the AgriCulture template by BootstrapMade, distributed by
                ThemeWagon, under its free license with footer credit retained. Open source
                libraries including Next.js, React, Bootstrap, Swiper, AOS, GLightbox and Lenis are
                used under their respective licenses.
              </p>

              <h2 className="cg-section-heading mt-4">8. Changes and contact</h2>
              <p>
                We may update these terms; the date below always reflects the current version.
                Questions go to <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>

              <p className="cg-badge-note">Last updated: October 2026.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
