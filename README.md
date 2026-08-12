# Orion Heating & Cooling — First Draft

A four-page Astro site built around Orion's July 2026 brand standard.

## Pages
- `/` — Home
- `/services` — Services
- `/about` — About & Reviews
- `/contact` — Contact / Formspark

## Brand colors used
- Charcoal: `#231F20`
- Cyan: `#00AEEF`
- Blue: `#1C75BC`
- Red: `#EA3E3A`
- Red-orange: `#EF693D`
- Orange: `#F89939`
- Gold: `#FCC60E`

The supplied Orion logos are used directly; the logo artwork is not recreated with a font.

## Before launch
1. Create a Formspark form and replace `YOUR_FORMSPARK_ID` in `src/data/site.js`.
2. Confirm the public phone number. This draft uses **(706) 521-2995**, which is the number used on the current site's main header and current public business profile. The old site contains inconsistent phone numbers in other sections.
3. Replace the review summaries with the exact verified testimonials the client wants featured. The carousel and cards are already built.
4. Replace the About-page owner-photo placeholder with the original Jeremiah & Calina photo (not a screenshot) once the client supplies it.
5. Confirm the final service list and any emergency/after-hours claims before adding them.
6. Set `PUBLIC_SITE_URL` in the deploy environment if the production domain changes.

## Local development
```bash
npm install
npm run dev
```

## GitHub Pages
A Pages workflow is included at `.github/workflows/deploy.yml`.

In GitHub: **Settings → Pages → Source → GitHub Actions**.

## Content sources used for the draft
- Existing Orion Heating & Cooling website
- Existing Services and About pages
- Supplied Orion brand package / logos
- Publicly indexed review profile summaries

### GitHub Pages preview vs. custom domain
The included workflow automatically uses `/<repository-name>` as the base path for a normal GitHub Pages preview. When the custom domain is connected, add a GitHub repository variable named `PUBLIC_BASE_PATH` with the value `/` so links/assets are built for the domain root.
