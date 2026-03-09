# Project Agent Guide – Nathaniel Senyo Gemegah Portfolio

This document is for AI agents (and future maintainers) working on this codebase. It summarizes the purpose, constraints, and conventions you must follow when making changes.

---

## 1. Project Overview

- **Owner**: Nathaniel Senyo Gemegah  
- **Purpose**:
  - Present Nathaniel’s background, projects, and current work.
  - Encourage visitors to subscribe to a weekly newsletter via a clear, prominent CTA.
- **Stack**:
  - **Framework**: Astro (static output)
  - **Styling**: Tailwind CSS
  - **Fonts**: Switzer (body), Khand (headings) via Fontshare
  - **Hosting target**: Cloudflare Pages
- **Key Requirement**: Keep the site **clean, minimal, bold, and extremely fast**. Avoid unnecessary JavaScript or complexity.

---

## 2. Codebase Structure (High Level)

- `src/pages/`
  - `index.astro` – Home page (hero + primary newsletter signup, link to projects).
  - `about.astro` – About page (story sections + newsletter signup near bottom).
  - `projects.astro` – Projects grid (placeholder projects + newsletter signup).
- `src/components/`
  - `Header.astro` – Simple top navigation (Home, About, Projects). Highlights current page via `Astro.url.pathname`.
  - `Footer.astro` – Minimal footer with dynamic year and Nathaniel’s name.
  - `NewsletterForm.astro` – Frontend-only email capture form, styled as primary CTA.
  - `ProjectCard.astro` – Card component for project listings.
- `src/layouts/`
  - `BaseLayout.astro` – Shared HTML shell: meta tags, fonts, favicon, header/footer, global layout.
- `src/styles/`
  - `globals.css` – Tailwind base + custom utility classes (`page-wrapper`, `page-inner`, `.btn-primary`, etc.).
- Root/config:
  - `astro.config.mjs` – Astro config with `output: 'static'`, Tailwind, and sitemap integration.
  - `tailwind.config.cjs` – Tailwind theme with custom fonts and violent red accent.
  - `postcss.config.cjs` – PostCSS + Tailwind + Autoprefixer.
- `public/`
  - `robots.txt` – Basic crawlers config + sitemap reference (domain is placeholder).
  - `favicon.svg` – Minimal black/white/red favicon with placeholder title mentioning Nathaniel.
- `README.md` – Setup, structure, and Cloudflare deployment instructions.

---

## 3. Design & UX Rules

**Overall style**

- Clean, minimal, editorial; **no clutter**.
- Heavy use of **whitespace** and **bold typography**.
- Layout should feel intentional and quiet, not busy.

**Color system**

- **White**: `#FFFFFF` – dominant background.
- **Black**: `#000000` – primary text and structural elements.
- **Violent Red (accent)**: `#E10600` – for:
  - Primary CTAs (e.g., newsletter submit button hover/active states).
  - Links and subtle highlights.
- **Do not introduce additional colors.** Tints/opacity of black are allowed (e.g., `text-black/70`).

**Typography**

- Import via Fontshare (see `BaseLayout.astro`):
  - **Headings**: `Khand`, sans-serif (uppercase, bold, impactful).
  - **Body**: `Switzer`, sans-serif.
- Maintain:
  - Large, confident headings (`page-heading`, `section-heading`).
  - Comfortable line-height and spacing on body text.

**Layout**

- Content width around **800–960px**, centered (`page-inner` handles this).
- Use Tailwind utilities and existing component classes instead of custom ad-hoc CSS where possible.
- Site must be fully **responsive** (mobile, tablet, desktop).

---

## 4. Functional Requirements

**Pages**

- **Home (`index.astro`)**
  - Hero introducing Nathaniel (currently placeholder text).
  - Primary CTA: **newsletter signup** (`NewsletterForm`).
  - Secondary: short overview + button linking to `/projects`.
- **About (`about.astro`)**
  - Large intro heading and paragraph (placeholder).
  - Story sections (who I am, what I’ve done, what I’m focused on, how newsletter fits in).
  - A **newsletter signup block near the bottom** (compact form variant).
- **Projects (`projects.astro`)**
  - Brief intro.
  - Grid of `ProjectCard`s with placeholder titles & descriptions (Project Alpha/Beta/Gamma/Delta).
  - Newsletter signup section at the bottom (compact form variant).

**Newsletter form**

- Implemented in `NewsletterForm.astro` as a standard `<form>` with:
  - Email input (required).
  - Submit button styled as a primary CTA.
- **No backend integration.** Do not add real submission logic or external APIs without explicit instructions.
- Must remain accessible (labels or `sr-only` text, focus outlines, proper `type="email"`).

---

## 5. SEO, Sitemap, and Robots

- Each page uses `BaseLayout.astro` and passes:
  - `title` – page-specific `<title>`.
  - `description` – page-specific `<meta name="description">`.
- `@astrojs/sitemap` is enabled in `astro.config.mjs`:
  - Ensure `site` is updated from `https://example.com` to the real domain when known.
- `public/robots.txt`:
  - Currently references `https://example.com/sitemap-index.xml`.
  - Update this to match the deployed domain when it changes.

When modifying SEO:

- Keep titles concise and descriptive.
- Keep meta descriptions under ~160 characters and aligned with the page’s purpose.

---

## 6. Performance & JavaScript Guidelines

- Astro should continue to build a **static site** (`output: 'static'`).
- By default, pages should ship **zero or minimal JS**.
- Do **not**:
  - Add heavy client-side libraries without a strong reason.
  - Introduce frameworks or runtimes beyond Astro + Tailwind without explicit user request.
- If interactivity is ever added:
  - Prefer Astro’s island architecture with **as little hydration as possible**.
  - Avoid degrading Lighthouse performance significantly.

---

## 7. Accessibility Expectations

- Use semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, etc.).
- Ensure:
  - Sufficient contrast (white/black/red scheme already helps).
  - Visible focus indicators on interactive elements.
  - `aria-label`s where needed (e.g., header home link, nav).
  - Forms have accessible labels or `sr-only` text.
- When editing or adding components, preserve or improve accessibility; do not regress it.

---

## 8. Content & Naming Rules

- **Name everywhere**: use **“Nathaniel Senyo Gemegah”** consistently (not Pete or any previous placeholder name).
- Most text is intentionally **placeholder content** and clearly written as such.
  - Do not introduce sensitive or real personal details unless explicitly provided by the user.
  - Keep language neutral, professional, and easily editable.

If you find remnants of other names, update them to **Nathaniel Senyo Gemegah** to stay consistent.

---

## 9. Deployment Notes (Cloudflare Pages)

- Build with: `npm run build`
- Output directory: `dist`
- When guided to configure a new project:
  - Framework preset: **Astro** (or “None” with the above settings).
  - Optionally set `NODE_VERSION` env var to a supported Node version (e.g., 18 or 20).
- Do not add server-side code that requires a Node runtime; this is intended to stay a static site.

---

## 10. When Making Future Changes

When you (as an agent) modify this project:

1. **Respect minimalism**  
   - Prefer removing elements over adding new ones unless they clearly serve the site’s core goals (introduce Nathaniel, promote the newsletter).

2. **Reuse existing patterns**  
   - Extend `BaseLayout`, `NewsletterForm`, `ProjectCard`, and `globals.css` utilities instead of reinventing layout/typography.

3. **Keep it static and fast**  
   - No backends, databases, or auth flows unless explicitly requested.
   - Keep JS footprint small and targeted.

4. **Document significant changes**  
   - When you significantly change behavior or structure, update `README.md` and, if needed, this `AGENT.md` so future agents and humans understand the new conventions.

Following these guidelines will keep the site aligned with Nathaniel’s original intent: a **clean, bold, minimal portfolio** that strongly emphasizes the **newsletter signup**. 

