"use client";

import Link from "next/link";
import { site, whatsappLink } from "@/lib/data/site";
import { useI18n } from "./I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer dark-background">
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">Chloe Grains</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>{t("footer.tagline")}</p>
                <p className="mt-3">
                  <strong>WhatsApp:</strong>{" "}
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    +{site.whatsappNumber}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </p>
                <p className="mt-2" style={{ fontSize: 13, lineHeight: 1.6 }}>
                  An educational and discovery platform. Not medical advice. Not a food seller or
                  certifier.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{t("footer.explore")}</h4>
              <ul>
                <li>
                  <Link href="/foods">{t("nav.foods")}</Link>
                </li>
                <li>
                  <Link href="/recipes">{t("nav.recipes")}</Link>
                </li>
                <li>
                  <Link href="/origins">{t("nav.origins")}</Link>
                </li>
                <li>
                  <Link href="/producers">{t("nav.producers")}</Link>
                </li>
                <li>
                  <Link href="/cook">{t("nav.cook")}</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{t("footer.learn")}</h4>
              <ul>
                <li>
                  <Link href="/about">{t("nav.about")}</Link>
                </li>
                <li>
                  <Link href="/sourcing-ethics">{t("footer.ethics")}</Link>
                </li>
                <li>
                  <Link href="/share-recipe">{t("nav.share")}</Link>
                </li>
                <li>
                  <Link href="/saved">{t("nav.saved")}</Link>
                </li>
                <li>
                  <Link href="/contact">{t("nav.contact")}</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>{t("footer.connect")}</h4>
              <ul>
                <li>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    Chat with us on WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>Write to {site.email}</a>
                </li>
                <li>
                  <Link href="/privacy">{t("footer.privacy")}</Link>
                </li>
                <li>
                  <Link href="/terms">{t("footer.terms")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center">
        <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-column align-items-center align-items-lg-start">
            <div>
              &copy; {year} <strong><span>{t("footer.rights")}</span></strong>
            </div>
            <div className="credits">
              Built on the{" "}
              <a href="https://bootstrapmade.com/agriculture-bootstrap-website-template/" rel="noopener">
                AgriCulture template
              </a>{" "}
              by <a href="https://bootstrapmade.com/" rel="noopener">BootstrapMade</a>, distributed
              by <a href="https://themewagon.com" rel="noopener">ThemeWagon</a>. Photography via{" "}
              <a href="https://www.pexels.com/" rel="noopener">Pexels</a>.
            </div>
          </div>

          <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chloe Grains on WhatsApp"
            >
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email Chloe Grains">
              <i className="bi bi-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
