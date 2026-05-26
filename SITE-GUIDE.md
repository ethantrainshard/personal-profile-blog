# Site Management Guide

## Quick Start

```bash
npm run dev      # Local development server
npm run build    # Production build
npm run preview  # Preview production build locally
```

---

## 1. Site Configuration

**File:** `src/config.ts`

All site-wide settings live in a single file. Every export is plain TypeScript — edit and save.

### Site Metadata

```ts
export const site = {
  title: 'Your Name',
  defaultDescription: 'SEO description that appears in <head> and social previews.',
  ogUrl: 'URL for the Open Graph image (used in social share previews).',
};
```

### Navigation Links

```ts
export const navLinks = [
  { href: '/experience', label: 'Experience' },
  { href: '/projects',   label: 'Projects' },
  { href: '/blog',       label: 'Blog' },
  { href: '/about',      label: 'About' },
  { href: '/contact',    label: 'Contact' },
] as const;
```

Add, remove, or reorder entries. Each entry needs `href` (route path) and `label` (display text).

### Social Links

```ts
export const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/you', target: '_blank', rel: 'noopener noreferrer' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/you', target: '_blank', rel: 'noopener noreferrer' },
  { label: 'Email',    href: 'mailto:you@example.com', target: null, rel: null },
] as const;
```

### Hero Subtitle

```ts
export const heroSubtitle = 'Software Development · Cybersecurity · Infrastructure';
```

One-line tagline shown under your name on the homepage.

### Focus Area Cards (Homepage)

```ts
export const focusAreas = [
  { label: 'Software Development', href: '/projects/vaultguard' },
  { label: 'Cybersecurity',        href: '/projects/netsentinel' },
  { label: 'Infrastructure',       href: '/projects/cloudforge' },
] as const;
```

Three cards on the homepage. Each links to any page or project.

### Skills Sections

```ts
export const skills = {
  development: {
    label: 'Software Development',
    colorVar: '--color-link',       // CSS custom property for accent color
    tags: ['Python', 'TypeScript', 'Go', ...],
  },
  cybersecurity: {
    label: 'Cybersecurity',
    colorVar: '--color-warning',
    tags: ['Penetration Testing', 'OWASP Top 10', ...],
  },
  infrastructure: {
    label: 'Infrastructure & DevOps',
    colorVar: '--color-success',
    tags: ['AWS', 'Docker', 'Kubernetes', ...],
  },
} as const;
```

Edit `label`, `colorVar`, and `tags` arrays. Available color variables: `--color-link`, `--color-warning`, `--color-success`.

### Stats

```ts
export const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'LinkedIn Connections', value: '500+' },
] as const;
```

---

## 2. Blog Posts

**Location:** `src/content/blog/`
**Format:** `.mdx` files (Markdown + JSX)

### Creating a New Post

Create a file: `src/content/blog/your-post-slug.mdx`

### Frontmatter Schema

```yaml
---
title: 'Post Title'
excerpt: 'Short summary shown on the blog listing page.'
date: 2024-07-10            # Publication date (YYYY-MM-DD)
updated: 2025-03-15         # Optional: last updated date
category: 'Development'     # Category label (e.g., Development, Security, DevOps, Life Lessons)
readingTime: '5 min read'   # Optional: displayed reading time
---
```

### Field Reference

| Field       | Required | Type   | Description                              |
|-------------|----------|--------|------------------------------------------|
| `title`     | Yes      | string | Post heading                             |
| `excerpt`   | Yes      | string | 1-2 sentence summary for listing page    |
| `date`      | Yes      | date   | Publication date                         |
| `updated`   | No       | date   | Last modification date                   |
| `category`  | Yes      | string | Category tag                             |
| `readingTime` | No    | string | Displayed reading time estimate          |

### Content Body

Write standard Markdown. MDX is supported, so you can also use JSX components. Code blocks get Dracula theme syntax highlighting.

```md
## Heading

Paragraph text with **bold** and *italic*.

```python
def hello():
    print("world")
```
```

---

## 3. Projects

**Location:** `src/content/projects/`
**Format:** `.mdx` files

### Creating a New Project

Create a file: `src/content/projects/your-project-slug.mdx`

### Frontmatter Schema

```yaml
---
title: 'ProjectName'
description: 'One-line description shown on the projects listing page.'
date: '2024'
techStack: ['Go', 'Terraform', 'Vault', 'Kubernetes']
techColors: ['var(--color-link)', 'var(--color-success)', 'var(--color-warning)', 'var(--color-success)']
visualTheme: 'vaultguard'         # Optional: theme identifier
featured: true                    # Optional: highlights on listing page
overview: 'Longer multi-paragraph description of the problem and solution.'
features: [
  'Feature one',
  'Feature two',
  'Feature three',
]
role: 'Lead Engineer — designed architecture and implemented core'
githubUrl: 'https://github.com/you/project'
liveUrl: 'https://project-demo.com'   # Or null if no live demo
---
```

### Field Reference

| Field        | Required | Type              | Description                                        |
|--------------|----------|-------------------|----------------------------------------------------|
| `title`      | Yes      | string            | Project name                                       |
| `description`| Yes     | string            | Short summary for projects listing                 |
| `date`       | Yes      | string            | Year or date string                                |
| `techStack`  | Yes      | string[]          | Technologies used (array of strings)               |
| `techColors` | Yes      | string[]          | CSS color vars matching each tech in techStack     |
| `overview`   | Yes      | string            | Longer description (supports `\n` for paragraphs)  |
| `features`   | Yes      | string[]          | Bullet-point feature list                          |
| `role`       | Yes      | string            | Your role on the project                           |
| `githubUrl`  | Yes      | string or null    | GitHub repository URL                              |
| `liveUrl`    | No       | string or null    | Live demo URL (defaults to null)                   |
| `visualTheme`| No      | string            | Theme identifier for visual styling                |
| `featured`   | No       | boolean           | Marks project as featured on listing page          |

### Content Body

Write Markdown content that appears on the individual project detail page. This is supplementary to the frontmatter fields.

---

## 4. Page Routes

Astro uses file-system routing. Pages are in `src/pages/`.

| File                              | Route                  |
|-----------------------------------|------------------------|
| `index.astro`                     | `/`                    |
| `experience.astro`                | `/experience`          |
| `projects.astro`                  | `/projects`            |
| `blog.astro`                      | `/blog`                |
| `about.astro`                     | `/about`               |
| `contact.astro`                   | `/contact`             |
| `blog/[slug].astro`               | `/blog/:slug`          |
| `projects/[slug].astro`           | `/projects/:slug`      |

To add a new static page, create a `.astro` file in `src/pages/` and add a nav link in `src/config.ts`.

---

## 5. Astro Config

**File:** `astro.config.mjs`

```mjs
export default defineConfig({
  base: isDeploy ? '/personal-profile-blog' : '/',  // Base path (auto-set for GitHub Pages)
  outDir: 'dist',                                    // Build output directory
  markdown: {
    shikiConfig: {
      theme: 'dracula',                              // Code block syntax highlighting theme
    },
  },
  integrations: [mdx()],                             // MDX support enabled
});
```

Change `theme` to any Shiki theme. Change `base` if deploying to a different path.

---

## 6. Deployment

Deployed via GitHub Actions to GitHub Pages.

**Workflow file:** `.github/workflows/deploy.yml`

Triggers on pushes to `main`. Runs `npm run build` and deploys `dist/` to GitHub Pages.

---

## Cheat Sheet

| What I want to do          | Where to go                          |
|----------------------------|--------------------------------------|
| Change my name / bio       | `src/config.ts` → `site`, `heroSubtitle` |
| Change nav links           | `src/config.ts` → `navLinks`         |
| Change social links        | `src/config.ts` → `socialLinks`      |
| Update skills              | `src/config.ts` → `skills`           |
| Change homepage cards      | `src/config.ts` → `focusAreas`       |
| Change stats               | `src/config.ts` → `stats`            |
| Add a blog post            | New file in `src/content/blog/`      |
| Add a project              | New file in `src/content/projects/`  |
| Change code highlight theme| `astro.config.mjs` → `shikiConfig`   |
| Add a new page             | New `.astro` file in `src/pages/`    |
| Edit experience timeline   | `src/pages/experience.astro`         |
| Edit about page            | `src/pages/about.astro`              |
| Edit contact page          | `src/pages/contact.astro`            |
