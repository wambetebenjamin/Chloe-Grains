# Chloe Grains

**Ancient grains. Present strength.**

Chloe Grains is an educational discovery platform for Africa's indigenous grains
and botanicals: fonio, teff, moringa, baobab, sorghum, millet, hibiscus, amaranth
and bambara groundnut. The site pairs food profiles and home tested recipes with
origin stories, producer directories and sourcing ethics, in English, Kiswahili
and French.

Built as a Next.js 16 + Tailwind CSS 4 application on top of the BootstrapMade
"AgriCulture" template (v1.0.0), whose structure, CSS variables, fonts and motion
patterns are preserved exactly and rebranded for Chloe Grains.

## What is inside

| Route | Purpose |
| --- | --- |
| `/` | Hero carousel, why indigenous crops matter, featured foods, recipe teasers, voices, newsletter |
| `/foods` and `/foods/[slug]` | Ten indigenous food profiles: origins, resilience, culture, cautious nutrition notes, traditional and modern uses, cooking notes |
| `/recipes` and `/recipes/[slug]` | Eighteen step by step recipes, filterable by ingredient, time, diet note and region (URL driven filters) |
| `/origins` | Six regional origin stories with anchors: West Africa, Sahel, East Africa, Horn of Africa, Southern Africa, diaspora kitchens |
| `/producers` | Informational directory of cooperatives, women's groups and small processors, with ethical questions and season notes |
| `/cook` | Diaspora and beginner guides: first basket, sourcing abroad, substitutions, fermentation, batch cooking, glossary |
| `/share-recipe` | Community recipe submission form with spam protection |
| `/about`, `/sourcing-ethics` | Editorial values and the six sourcing principles behind every listing |
| `/saved` | Light auth: saved recipes and foods kept in browser local storage, plus an optional display name |
| `/contact`, `/privacy`, `/terms` | Contact channels, plain language privacy and terms |

## Honest by design

- Educational and discovery platform only. Nothing here is medical advice.
- We do not sell food and we do not certify, audit or endorse producers.
- Nutrition statements stay cautious: "commonly reported", "a source of", never miracle claims.
- Every recipe carries food safety notes; fermentation guidance defers to local rules.
- Photography is licensed from Pexels contributors and credited in
  [`public/image-credits.md`](public/image-credits.md).

## Stack and preserved template DNA

- Next.js 16 (App Router, React 19), TypeScript, Tailwind CSS 4 alongside the
  preserved template stylesheet (`src/styles/template-main.css`, verbatim plus
  brand variables only).
- Template motion preserved: Bootstrap fade carousel, Swiper, AOS scroll
  animations, GLightbox, preloader, scroll top, pulsating play button, plus
  Lenis smooth scroll. No Bootstrap JS bundle is loaded; every plugin is driven
  by small vanilla initializers in `src/components/TemplateMotion.tsx`.
- Brand extensions live in `src/styles/chloe-grains.css` under `cg-*` classes.

## Getting started

Requirements: Node.js 24 or newer (see `.nvmrc`).

```bash
npm ci
cp .env.example .env.local   # optional: reCAPTCHA keys, webhook, site URL
npm run dev                  # http://localhost:3000
```

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server bound to 0.0.0.0 |
| `npm run build` | Production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run audit:high` | `npm audit --audit-level=high` |
| `npm run gate` | ci + typecheck + build + audit, the release gate |

### Environment variables

See [`.env.example`](.env.example):

- `NEXT_PUBLIC_SITE_URL` canonical origin for metadata, sitemap and robots.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` floating WhatsApp button and contact links
  (default 254112272061).
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY` enable reCAPTCHA
  v3 (score based) with v2 checkbox fallback on all forms. Without keys the
  forms fall back to a honeypot field and light rate limiting.
- `FORMS_WEBHOOK_URL` optional POST target for contact, newsletter and recipe
  submissions.

Saved recipes, saved foods, language choice and cookie consent are stored only
in the visitor's browser (`localStorage` / cookies), never on a server.

## Content architecture

All editorial content lives in typed TypeScript modules under `src/lib/data/`:
`foods.ts`, `recipes.ts`, `origins.ts`, `producers.ts`, `guides.ts`,
`voices.ts`, `site.ts`. Translations and interface strings live in
`src/lib/i18n.ts` with a header language switcher (English, Kiswahili, French)
persisted in the `chloe-grains-locale` cookie.

## Deployment

Deployable as is to Vercel (`vercel.json` sets region `cdg1`, security headers
and cache rules). The build is fully static friendly: every page renders at
build time, with client islands for filters, saves, forms and motion.

## Credits

Template by BootstrapMade via ThemeWagon; photography via Pexels; embedded talk
by Pierre Thiam at TED. Full attribution in [`credits.md`](credits.md) and
[`public/image-credits.md`](public/image-credits.md).
