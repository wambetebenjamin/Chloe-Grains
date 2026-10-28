import type { ReactNode } from "react";

/**
 * The template's section title pattern:
 * h2 carries the small caps kicker, p carries the large heading-font line.
 */
export default function SectionTitle({
  kicker,
  title,
  aos = true,
}: {
  kicker: ReactNode;
  title: ReactNode;
  aos?: boolean;
}) {
  return (
    <div className="container section-title" data-aos={aos ? "fade-up" : undefined}>
      <h2>{kicker}</h2>
      <p>{title}</p>
    </div>
  );
}
