"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCALES } from "@/lib/data/site";
import type { DictKey } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";
import { useSaved } from "./SavedProvider";
import Wordmark from "./Wordmark";

interface NavItem {
  href: string;
  key: DictKey;
  match: (path: string) => boolean;
}

const navItems: NavItem[] = [
  { href: "/", key: "nav.home", match: (p) => p === "/" },
  { href: "/foods", key: "nav.foods", match: (p) => p.startsWith("/foods") },
  { href: "/recipes", key: "nav.recipes", match: (p) => p.startsWith("/recipes") },
  { href: "/origins", key: "nav.origins", match: (p) => p.startsWith("/origins") },
  { href: "/producers", key: "nav.producers", match: (p) => p.startsWith("/producers") },
  { href: "/cook", key: "nav.cook", match: (p) => p.startsWith("/cook") },
];

const moreItems: NavItem[] = [
  { href: "/about", key: "nav.about", match: (p) => p === "/about" },
  { href: "/sourcing-ethics", key: "nav.ethics", match: (p) => p === "/sourcing-ethics" },
  { href: "/share-recipe", key: "nav.share", match: (p) => p.startsWith("/share-recipe") },
  { href: "/saved", key: "nav.saved", match: (p) => p.startsWith("/saved") },
];

export default function Header() {
  const pathname = usePathname();
  const { t, locale, setLocale } = useI18n();
  const { count, hydrated } = useSaved();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  // Close the mobile overlay whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
    setLangOpen(false);
  }, [pathname]);

  // Lock scrolling while the mobile nav overlay is open (template behavior).
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
    return () => document.body.classList.remove("mobile-nav-active");
  }, [mobileOpen]);

  // Close the language menu on outside click and Escape.
  useEffect(() => {
    if (!langOpen) return;
    const onDown = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLangOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const moreActive = moreItems.some((item) => item.match(pathname));
  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <header id="header" className="header d-flex align-items-center position-relative">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center" aria-label="Chloe Grains, home">
          <Wordmark />
        </Link>

        <div className="cg-header-actions">
          <div className="cg-lang" ref={langRef}>
            <button
              type="button"
              className="cg-lang-toggle"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              aria-label={`Language: ${currentLocale.native}. Change language`}
              onClick={() => setLangOpen((v) => !v)}
            >
              <i className="bi bi-globe2" aria-hidden="true"></i>
              <span>{currentLocale.label}</span>
              <i className="bi bi-chevron-down" aria-hidden="true" style={{ fontSize: 11 }}></i>
            </button>
            {langOpen && (
              <ul className="cg-lang-menu" role="menu">
                {LOCALES.map((l) => (
                  <li key={l.code} role="none">
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={locale === l.code}
                      onClick={() => {
                        setLocale(l.code);
                        setLangOpen(false);
                      }}
                    >
                      <span>{l.native}</span>
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/saved"
            className={`cg-saved-link${pathname.startsWith("/saved") ? " active" : ""}`}
            aria-label={`Saved items${hydrated && count > 0 ? `, ${count} saved` : ""}`}
            title={t("nav.saved")}
          >
            <i className="bi bi-bookmark-heart" aria-hidden="true"></i>
            {hydrated && count > 0 && <span className="cg-saved-count">{count}</span>}
          </Link>
        </div>

        <nav id="navmenu" className="navmenu" aria-label="Main navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={item.match(pathname) ? "active" : undefined}>
                  {t(item.key)}
                </Link>
              </li>
            ))}
            <li className={`dropdown${moreOpen ? " dropdown-open" : ""}`}>
              <a
                href="#more-menu"
                className={moreActive ? "active" : undefined}
                onClick={(e) => {
                  // Desktop opens on hover via CSS; click is for mobile and keyboard.
                  e.preventDefault();
                  setMoreOpen((v) => !v);
                }}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                <span>{t("nav.more")}</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" aria-hidden="true"></i>
              </a>
              <ul id="more-menu" className={moreOpen ? "dropdown-active" : undefined}>
                {moreItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={item.match(pathname) ? "active" : undefined}>
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact" className={pathname === "/contact" ? "active" : undefined}>
                    {t("nav.contact")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className={pathname === "/contact" ? "active" : undefined}>
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className={`mobile-nav-toggle d-xl-none bi ${mobileOpen ? "bi-x" : "bi-list"}`}
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          />
        </nav>
      </div>
    </header>
  );
}
