import { site, type Locale } from "./data/site";

/**
 * Locale helpers safe for both server and client bundles. Server only cookie
 * reading lives in `./locale`.
 */
export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "sw" || value === "fr";
}

/** Cookie string used by the client side language switcher. */
export function localeCookieString(locale: Locale): string {
  const maxAge = 60 * 60 * 24 * 365;
  return `${site.localeCookieKey}=${locale}; path=/; max-age=${maxAge}; samesite=lax`;
}
