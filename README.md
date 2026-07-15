# Duo di Gusto website

Responsive bilingual marketing website for Duo di Gusto, implemented from the approved brand-book direction and visual mockup.

## Why Astro

Astro is a strong fit for this project because the site is primarily editorial and conversion-focused. It ships static HTML with no client-side JavaScript by default, supports localized routes and SEO metadata cleanly, and keeps maintenance simpler than a full application framework. The only JavaScript in this build powers the mobile menu, subtle reveal effects, header state, and the contact-email handoff.

## Commands

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Structure

- `/` — German homepage
- `/it/` — Italian homepage
- `/impressum/` and `/datenschutz/` — German legal templates
- `/it/impressum/` and `/it/datenschutz/` — Italian legal templates
- `src/data/content.ts` — localized site copy
- `src/styles/global.css` — brand tokens and responsive styling
- `public/images/` — optimized production imagery

## Before publishing

Replace the legal placeholders with verified company and hosting details. The contact form currently validates the request and prepares an email in the visitor's mail application; no visitor data is stored by the website.

