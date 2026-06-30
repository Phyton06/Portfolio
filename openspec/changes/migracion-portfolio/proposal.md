# Proposal: Migración a Astro 5 + Tailwind CSS v4

## Intent

Eliminar ~4200 líneas de CSS duplicado migrando a Astro 5 + Tailwind CSS v4 con Content Collections (MDX). Reimplementación desde cero que reduce deuda técnica, habilita rutas dinámicas, y produce un portafolio competitivo para Big Tech.

## Scope

**In**: Sitio Astro 5 SSG + Tailwind v4, Content Collections (MDX) para proyectos, View Transitions, 6 temas oklch, panel accesibilidad (FAB + reading ruler), filtrado por tecnología (Islands), responsive, skip links, ARIA.

**Out**: Blog, CMS, backend, tests, copy-paste de código existente, i18n.

## Capabilities

**New**: `project-content` (schema MDX + zod para proyectos), `theme-system` (6 temas via CSS custom props + data-theme)

**Modified**: None

## Approach

Astro 5 SSG (cero JS default). Tailwind v4 con `@theme` para tokens y `@custom-variant` para data-theme switching. Content Collections con zod. View Transitions nativas. Islands (Custom Elements < 2KB) solo para ThemeToggle, AccessPanel, FilterBar. Sin frameworks UI.

## Pages

- `/` — Hero + proyectos destacados + sobre mí + contacto
- `/projects` — Grid con filtros
- `/projects/[slug]` — Caso de estudio (STAR)

## Content Schema

`title, description, tags[], techStack[{name, color}], images[], featured (bool), liveUrl, repoUrl, role, metrics[{label, value}], duration, stars, commits`

## Components

Layout, Nav, Hero, ProjectCard, ProjectGrid, FilterBar, CodeBlock, Footer, AccessPanel, ThemeToggle, ReadingRuler, ScrollReveal

## Theme System

CSS custom props en `@layer base`. `@custom-variant` mapea `data-theme`. JS del panel alterna el atributo y persiste en localStorage.

## Phases

| # | Scope | Est. |
|---|-------|------|
| 1 | Scaffold + Layout + themes | ~200 |
| 2 | Home (hero + featured) | ~250 |
| 3 | Projects (grid + FilterBar) | ~200 |
| 4 | Detail (dynamic routes + MDX) | ~300 |
| 5 | Access panel + scroll reveal + polish | ~200 |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Tailwind v4 + oklch dinámico | Medium | CSS vars + `@apply` |
| View Transitions + a11y | Low | Test con NVDA |
| Bundle islands | Low | < 2KB c/u |

## Rollback

`git revert`. HTML original se conserva hasta validar deploy Astro.

## Success Criteria

- `pnpm build` → `/dist` con HTML estático por ruta
- Lighthouse > 90 en Performance, A11y, Best Practices
- 6 temas funcionan sin errores JS
- Panel accesibilidad persiste en localStorage
- 0 regresiones de contenido
