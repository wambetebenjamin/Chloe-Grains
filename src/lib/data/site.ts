export type Locale = "en" | "sw" | "fr";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "sw", label: "SW", native: "Kiswahili" },
  { code: "fr", label: "FR", native: "Francais" },
];

export const site = {
  name: "Chloe Grains",
  tagline: "Ancient grains. Present strength.",
  oneLiner:
    "Discover, cook and support Africa's indigenous grains and botanicals, from fonio and teff to moringa and baobab, with recipes and sourcing stories that travel.",
  description:
    "Chloe Grains is an educational discovery platform for Africa's indigenous grains and botanicals: food profiles, practical recipes, origin stories and ethical sourcing notes.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chloe-grains.vercel.app",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254112272061",
  whatsappMessage:
    "Hello Chloe Grains! I am exploring indigenous African grains and would like to know more.",
  email: "hello@chloe-grains.example",
  contactNote:
    "Chloe Grains is run as a lean editorial project. Write to us and a human will reply, usually within two working days.",
  voice: {
    lang: "en-KE",
    rate: 0.95,
    pitch: 1.1,
  },
  cookieConsentKey: "chloe-grains-cookie-consent",
  localeCookieKey: "chloe-grains-locale",
  savedKey: "chloe-grains-saved",
  userKey: "chloe-grains-user",
  disclaimers: {
    platform:
      "Chloe Grains is an educational and discovery platform. We celebrate indigenous African grains and botanicals through recipes, profiles and sourcing stories.",
    medical:
      "Nothing on this site is medical advice. Nutrition notes are general information, not health claims. Speak with a qualified professional about your own diet and health.",
    commerce:
      "Chloe Grains does not sell food and does not certify, audit or endorse producers, brands or products. Producer listings are informational directory entries.",
    safety:
      "Always follow local food safety guidance: wash ingredients, cook thoroughly, ferment carefully, and check allergens before serving others.",
  },
} as const;

export function whatsappLink(): string {
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
