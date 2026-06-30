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

- [ ] 1.1 Scaffold Astro 5: `package.json`, `astro.config.mjs` (static), `tsconfig.json`
- [ ] 1.2 `src/styles/theme.css` — `@layer base` with 6 `[data-theme]` oklch blocks + `@custom-variant`
- [ ] 1.3 `src/layouts/BaseLayout.astro` — HTML shell, `<ViewTransitions />`, skip link, ARIA live
- [ ] 1.4 `src/components/Nav.astro` + `src/components/Footer.astro` (static shells)
- [ ] 1.5 Inline script in BaseLayout head: read localStorage theme before paint (anti-FOUC)

## Phase 2: Content Collections & Project Data

- [ ] 2.1 `src/content/config.ts` — Zod schema per spec (title, description, tags, techStack, images, featured, etc.)
- [ ] 2.2 6 MDX files in `src/content/projects/`: taskflow, cloudrover, synthai, datamesh, neodeploy, pysec
- [ ] 2.3 `pnpm build` — confirm Zod validation passes, no errors

## Phase 3: Home Page

- [ ] 3.1 `src/pages/index.astro` — `getCollection` with `featured: true` filter
- [ ] 3.2 `src/components/Hero.astro` — headline, subtitle, CV download CTA, projects link
- [ ] 3.3 `src/components/ProjectCard.astro` — title, description, techStack badges with colors
- [ ] 3.4 `src/components/ProjectGrid.astro` — responsive grid for featured cards

## Phase 4: Projects Pages & Filtering

- [ ] 4.1 `src/pages/projects.astro` — full collection grid + FilterBar island
- [ ] 4.2 `src/pages/projects/[slug].astro` — `getStaticPaths()`, MDX content, STAR layout
- [ ] 4.3 `src/components/CodeBlock.astro` — syntax-highlighted code for MDX
- [ ] 4.4 `src/islands/FilterBar.ts` — Custom Element < 2KB, tech tag filtering

## Phase 5: Interactive Islands & Polish

- [ ] 5.1 `src/islands/ThemeToggle.ts` — Custom Element < 2KB, cycles 6 themes, localStorage
- [ ] 5.2 `src/islands/AccessPanel.ts` — Custom Element < 2KB, a11y toggles (ruler, font-size, animations, cursor, underline, colorblind)
- [ ] 5.3 `src/components/ScrollReveal.astro` — Intersection Observer fade-in
- [ ] 5.4 Wire islands with `client:load` in BaseLayout and pages
- [ ] 5.5 `pnpm build` + Lighthouse check (> 90 Perf/A11y/BP)

## Phase 6: Cleanup

- [ ] 6.1 Delete legacy HTML files after confirming `/dist` replaces all routes
