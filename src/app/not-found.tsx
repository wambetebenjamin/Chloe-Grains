import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <PageTitle
        title="Page not found"
        text="The grain you were looking for is in another granary. Let us walk you back."
        crumbs={[{ label: "404" }]}
      />
      <section className="section">
        <div className="container text-center">
          <i className="bi bi-basket2" aria-hidden="true" style={{ fontSize: 64, color: "var(--accent-color)" }}></i>
          <h2 className="mt-4 mb-3">Nothing harvested here</h2>
          <p className="mb-4" style={{ maxWidth: 520, marginInline: "auto" }}>
            This page does not exist, or it moved when we replanted the site. The foods library and
            the recipe kitchen are always open.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link
              href="/"
              className="btn-cta"
              style={{ backgroundColor: "var(--accent-color)", color: "var(--contrast-color)", borderRadius: 6, padding: "14px 28px", display: "inline-flex", alignItems: "center", minHeight: 44, fontFamily: "var(--heading-font)", textTransform: "uppercase", fontSize: 13 }}
            >
              Back to home
            </Link>
            <Link
              href="/recipes"
              className="btn-cta"
              style={{ backgroundColor: "transparent", color: "var(--accent-color)", border: "2px solid var(--accent-color)", borderRadius: 6, padding: "14px 28px", display: "inline-flex", alignItems: "center", minHeight: 44, fontFamily: "var(--heading-font)", textTransform: "uppercase", fontSize: 13 }}
            >
              Browse recipes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
