import { cookies } from "next/headers";
import { site, type Locale } from "./data/site";
import { isLocale } from "./locale-shared";

export { isLocale, localeCookieString } from "./locale-shared";

/** Reads the visitor's chosen locale from the light i18n cookie. */
export async function getLocale(): Promise<Locale> {
  try {
    const store = await cookies();
    const raw = store.get(site.localeCookieKey)?.value;
    if (isLocale(raw)) return raw;
  } catch {
    // cookies() is unavailable in some static contexts; default to English.
  }
  return "en";
}
