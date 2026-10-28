import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

/**
 * The template's inner page title band: dark background, background image,
 * h1, optional intro paragraph and breadcrumbs.
 */
export default function PageTitle({
  title,
  text,
  crumbs,
  image = "/images/page-title.jpg",
}: {
  title: string;
  text?: string;
  crumbs: Crumb[];
  image?: string;
}) {
  return (
    <div
      className="page-title dark-background"
      data-aos="fade"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container position-relative">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {crumbs.map((crumb, index) =>
              crumb.href && index < crumbs.length - 1 ? (
                <li key={`${crumb.label}-${index}`}>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </li>
              ) : (
                <li key={`${crumb.label}-${index}`} className="current">
                  {crumb.label}
                </li>
              )
            )}
          </ol>
        </nav>
      </div>
    </div>
  );
}
