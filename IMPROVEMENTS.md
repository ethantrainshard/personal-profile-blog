# Improvement Plan

## 1. Architecture & Content Management

**a) ~~Use Astro Content Collections for blog posts and projects~~** ✅ Done — 4 blog posts and 4 projects are stored as `.mdx` files in `src/content/blog/` and `src/content/projects/` with type-safe frontmatter. Pages use `getCollection` to fetch and render them.

**b) ~~Extract shared data into a config module~~** ✅ Done — `src/config.ts` centralizes nav links, social links, focus areas, hero subtitle, and skills data.

---

## 2. Pages & Content

**a) Add a contact page**
The About page has contact buttons but no actual contact form or dedicated contact section. A `Contact` page with a form (via Formspree or similar) would make it easy for visitors to reach out.

**b) Add a reading time estimate to blog cards**
Currently blog cards show date and category but no reading time. Adding an estimated read time (e.g., "8 min read") helps users decide what to read.

**c) Add blog post pagination**
The blog list page shows all posts at once. With more posts, pagination or "Load More" would be needed.

**d) Add project image placeholders with actual visuals**
The project cards use a plain text placeholder ("Project"). Adding colored gradient backgrounds or SVG illustrations per project would make the grid more visually engaging.

**e) Add a "Featured" or highlight to key projects**
On the projects page, the most impressive project could be featured larger (a hero card) above the grid.

---

## 3. Navigation & UX

**a) ~~Active nav link highlighting~~** ✅ Done — `<script client:load>` in `Nav.astro` adds `.active` class when the current path matches a nav link, styled with ice-blue `var(--color-link)`.

**b) Smooth scroll to top on navigation**
Clicking a nav link should smoothly scroll to the top of the page instead of jumping.

**c) Add a "Back to top" button**
On pages with long content (blog posts, experience), a floating back-to-top button improves UX.

**d) Improve mobile nav UX**
The hamburger menu closes the menu when a link is clicked, but there's no animation. A slide-down animation with a subtle backdrop would feel more polished.

---

## 4. Design & Visual Polish

**a) ~~Hero section could use a subtle animated element~~** ✅ Done — Added a slow-pulsing ice-blue radial glow (`@keyframes hero-glow-pulse`, 8s cycle) behind the name in the hero section. Pure CSS, respects `prefers-reduced-motion`.

**b) ~~Add a subtle section intro pattern~~** ✅ Done — Added `.section-heading` class with a 40px ice-blue `::before` pseudo-element accent line before every page `<h1>`. Applied to About, Blog, Projects, Experience, blog post detail, and project detail pages.

**c) ~~Improve blog post typography~~** ✅ Done — Extended `.post-content` CSS with styles for `h4`/`h5`/`h6` (display font, ice-blue left border on h4), `table`/`thead`/`tbody` (striped rows, display font headers), `kbd`, `mark`, and `details`/`summary` (styled collapsible blocks).

**d) ~~Add a last-updated date to blog posts~~** ✅ Done — Added optional `updated` field to blog content schema. Blog post detail page conditionally displays "Updated \<date\>" when present, falling back to publish date.

**e) ~~Add a table of contents to blog posts~~** ✅ Done — Custom `extractToc` utility parses h2/h3 headings from raw MDX. Desktop shows a sticky 200px TOC sidebar in a two-column grid. Mobile shows a collapsible `<details>` accordion TOC.

---

## 5. Performance & SEO

**a) Add structured data (JSON-LD)**
Schema.org markup for `Person`, `Blog`, `Article`, and `CreativeWork` would improve search engine understanding of the site.

**b) Add Open Graph images**
Currently OG meta tags have no `og:image`. Generating dynamic OG images for each blog post and project would improve social sharing.

**c) Add a sitemap.xml**
Astro can generate `sitemap.xml` automatically, which helps search engines discover all pages.

**d) Optimize font loading**
The Google Fonts import uses `display=swap` but doesn't use `font-display: optional`. Adding `&display=swap` and `&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-` subset would reduce font file size.

**e) Add a robots.txt**
A `public/robots.txt` file would explicitly allow crawling.

---

## 6. Accessibility

**a) Add skip-to-content link**
A visually hidden "Skip to main content" link that appears on focus would help keyboard users bypass the nav.

**b) Improve focus visible styles**
Currently focus outlines use `outline: 2px solid var(--color-link)` but some elements (like cards) don't have focus styles. All interactive elements should have visible focus indicators.

**c) Add ARIA labels to icon-only elements**
The nav toggle button has `aria-label` but the timeline dots and some decorative elements could use `aria-hidden="true"` more consistently.

**d) Screen reader-only text for project/blog cards**
The card image placeholders use `aria-hidden="true"` which is correct, but the card links should have descriptive `aria-label` attributes (e.g., "View project: VaultGuard").

---

## 7. Code Quality

**a) Remove inline styles**
Pages use heavy inline styles (e.g., `style="margin-bottom: var(--spacing-lg);"`) instead of CSS utility classes. Extracting these to CSS classes would reduce repetition and improve maintainability.

**b) DRY up skill tag rendering**
The About page repeats `style="border-color: var(--color-link); color: var(--color-link);"` 11 times. A utility class like `.skill-tag--blue` would be cleaner.

**c) Extract timeline tech colors into CSS variables**
The inline `style={techColors && techColors[i] ? ...}` pattern is verbose. CSS custom properties per tech category would be cleaner.

**d) Add TypeScript to Astro components**
The `Button.astro` uses `target={target as any}` which suppresses type checking. Proper typing would catch errors earlier.

---

## 8. Missing Pages/Features

**a) Add a "Uses" or "Tech Stack" page**
Shows the specific tools, hardware, and software used daily — popular among developer portfolios.

**b) Add RSS feed**
Astro can generate an `rss.xml` feed for blog posts, allowing readers to subscribe.

**c) Add a dark/light mode toggle**
While the Bugatti design is intentionally dark-only, a toggle could be added for accessibility (some users prefer light mode).

**d) Add a simple analytics integration**
A privacy-friendly analytics script (e.g., Plausible or Umami) to track page views.

**e) Add a 404 page**
Currently there's no custom 404 page — visitors landing on a non-existent route get a generic Astro error.

---

## Priority Summary

| Priority | Improvement | Impact |
|---|---|---|
| **P0** | Content Collections for blog/projects | Foundation for scalable content |
| **P0** | Active nav link highlighting | Essential UX |
| **P1** | Blog post TOC + reading time | Content usability |
| **P1** | Structured data (JSON-LD) + sitemap | SEO |
| **P1** | Custom 404 page | User experience |
| **P2** | Skip-to-content link | Accessibility |
| **P2** | Project image placeholders | Visual polish |
| **P2** | RSS feed | Content distribution |
| **P3** | Contact page | Conversion |
| **P3** | Blog pagination | Scalability |
