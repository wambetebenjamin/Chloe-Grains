"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/data/site";
import { useI18n } from "./I18nProvider";

type ConsentLevel = "all" | "essential";

function readConsent(): ConsentLevel | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${site.cookieConsentKey}=`));
  if (!match) return null;
  try {
    const value = decodeURIComponent(match.slice(site.cookieConsentKey.length + 1));
    const parsed = JSON.parse(value) as { level?: string };
    if (parsed.level === "all" || parsed.level === "essential") return parsed.level;
  } catch {
    // fall through
  }
  return null;
}

function writeConsent(level: ConsentLevel) {
  const maxAge = 60 * 60 * 24 * 365;
  const value = encodeURIComponent(JSON.stringify({ level, time: new Date().toISOString() }));
  document.cookie = `${site.cookieConsentKey}=${value}; path=/; max-age=${maxAge}; samesite=lax`;
  try {
    window.localStorage.setItem(site.cookieConsentKey, value);
  } catch {
    // localStorage may be blocked; the cookie is the source of truth.
  }
}

export default function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  const decide = (level: ConsentLevel) => {
    writeConsent(level);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cg-cookie" role="region" aria-label="Cookie consent">
      <div className="cg-cookie-card">
        <div className="cg-cookie-text">
          <strong>{t("cookie.title")}</strong>
          <span>
            {t("cookie.body")}{" "}
            <Link href="/privacy">{t("cookie.learnMore")}</Link>.
          </span>
        </div>
        <div className="cg-cookie-actions">
          <button type="button" className="cg-cookie-accept" onClick={() => decide("all")}>
            {t("cookie.accept")}
          </button>
          <button type="button" className="cg-cookie-essential" onClick={() => decide("essential")}>
            {t("cookie.essential")}
          </button>
        </div>
      </div>
    </div>
  );
}
