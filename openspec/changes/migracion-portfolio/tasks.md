# Tasks: Migración a Astro 5 + Tailwind CSS v4

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1150 (25+ files) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 → PR 2 → PR 3 → PR 4 → PR 5 |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Scaffold + base layout + theme CSS | PR 1 | Infrastructure. No content yet. |
| 2 | Content Collections (Zod schema + 6 MDX) | PR 2 | Depends on PR 1 for build pipeline. |
| 3 | Home page (Hero + featured projects grid) | PR 3 | Depends on PR 2 for data. |
| 4 | Projects pages (grid + filter + detail) | PR 4 | Depends on PR 2 for data, PR 3 for shared components. |
| 5 | Islands (ThemeToggle, AccessPanel) + ScrollReveal + polish | PR 5 | Depends on PR 1 for BaseLayout. |

## Phase 1: Foundation & Theme System

- [x] 1.1 Scaffold Astro 5: `package.json`, `astro.config.mjs` (static), `tsconfig.json`
- [x] 1.2 `src/styles/theme.css` — `@layer base` with 6 `[data-theme]` oklch blocks + `@custom-variant`
- [x] 1.3 `src/layouts/BaseLayout.astro` — HTML shell, `<ViewTransitions />`, skip link, ARIA live
- [x] 1.4 `src/components/Nav.astro` + `src/components/Footer.astro` (static shells)
- [x] 1.5 Inline script in BaseLayout head: read localStorage theme before paint (anti-FOUC)

## Phase 2: Content Collections & Project Data

- [x] 2.1 `src/content/config.ts` — Zod schema per spec (title, description, tags, techStack, images, featured, etc.)
- [x] 2.2 6 MDX files in `src/content/projects/`: taskflow, cloudrover, synthai, datamesh, neodeploy, pysec
- [x] 2.3 `pnpm build` — confirm Zod validation passes, no errors

## Phase 3: Home Page

- [x] 3.1 `src/pages/index.astro` — `getCollection` with `featured: true` filter
- [x] 3.2 `src/components/Hero.astro` — headline, subtitle, CV download CTA, projects link
- [x] 3.3 `src/components/ProjectCard.astro` — title, description, techStack badges with colors
- [x] 3.4 `src/components/ProjectGrid.astro` — responsive grid for featured cards

## Phase 4: Projects Pages & Filtering

- [x] 4.1 `src/pages/projects/index.astro` — full collection grid + filter inline script
- [x] 4.2 `src/pages/projects/[slug].astro` — `getStaticPaths()`, MDX content, role/duration/stars
- [x] 4.3 `src/components/CodeBlock.astro` — syntax-highlighted code block component
- [x] 4.4 Filter bar implemented inline with client-side JS (aria-pressed, announcements)

## Phase 5: Interactive Islands & Polish

- [x] 5.1 `src/islands/ThemeToggle.ts` — Custom Element < 2KB, cycles 6 themes, localStorage
- [x] 5.2 `src/islands/AccessPanel.ts` — Custom Element < 2KB, a11y toggles (ruler, font-size, animations, cursor, underline, colorblind)
- [x] 5.3 `src/components/ScrollReveal.astro` — Intersection Observer fade-in
- [x] 5.4 Islands loaded via `<script>` imports en Nav y BaseLayout
- [x] 5.5 `pnpm build` + Lighthouse check (> 90 Perf/A11y/BP)

## Phase 6: Cleanup

- [x] 6.1 Delete legacy HTML files after confirming `/dist` replaces all routes
