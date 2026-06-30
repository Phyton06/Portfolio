# Design: Migración a Astro 5 + Tailwind CSS v4

## Technical Approach

Reemplazar los 3 HTML estáticos (con ~4200 líneas CSS duplicadas) por un proyecto Astro 5 SSG con Tailwind v4, Content Collections (MDX + Zod), View Transitions nativas, e Islands (Custom Elements < 2KB) para interactividad mínima. Sin frameworks UI. Se preserva el contenido y el sistema de accesibilidad actual (data-* attributes, reading ruler, FAB panel, skip links, ARIA live).

## Architecture Decisions

### Decision: astro.config — `output: 'static'`

| Option | Tradeoff | Decision |
|--------|----------|----------|
| `static` | Sin server, HTML 100% pre-renderizado. Ideal para portfolio. | ✅ Elegido |
| `server` | Necesita runtime. Overkill para contenido estático. | ❌ |
| `hybrid` | Server + static. Sin endpoints dinámicos no tiene sentido. | ❌ |

### Decision: Content Collections con Zod

Zod schema valida cada `.mdx` en build-time. Error en build si falta campo required. `getCollection('projects')` para queries. `getStaticPaths()` genera rutas. Schema mapea exactamente spec `project-content`.

### Decision: Tailwind v4 `@theme` + `@custom-variant` para temas

Tailwind v4 `@theme` define tokens CSS como variables. `@custom-variant theme-($theme)` mapea `data-theme` selectors. Las variables se definen en `@layer base` con bloques `[data-theme="midnight"]`, etc. Esto permite clases tipo `bg-surface theme-midnight:bg-blue-900`.

### Decision: Islands como Custom Elements nativos

Custom Elements (< 2KB c/u) sin Shadow DOM (para heredar CSS global). `ThemeToggle` (cicla 6 temas), `FilterBar` (filtrado client-side), `AccessPanel` (toggles a11y). Sin Lit, Sin Svelte, Sin React. Astro los hidrata con `client:load`.

### Decision: 6 temas nuevos (no heredar nombres legacy)

| Viejo (legacy) | Nuevo (spec) | Perfil |
|----------------|--------------|--------|
| dark → | midnight | Cool blue oscuro |
| — | sunset | Naranja-rojo cálido |
| — | forest | Verde tierra |
| blue-filter → | ocean | Azul-teal |
| — | lavender | Rosa-púrpura |
| light/tired-eyes → | paper | Beige claro lectura |

Se migran pero cambian nombres porque el spec los redefine con nuevos valores oklch.

### Decision: View Transitions nativas

Astro `<ViewTransitions />` sin configuración extra. `data-astro-transition-persist` en elementos compartidos (nav, footer) para evitar reflow. Sin `framer-motion` ni librerías externas.

### Decision: Skip frameworks JS

React/Vue/Svelte añaden ~40KB+ por island. Custom Elements nativos son < 2KB c/u y cubren toda la interactividad necesaria.

## Data Flow

```
src/content/projects/*.mdx
    │
    ▼
Zod schema validation (build-time)
    │
    ├── getCollection('projects') → index.astro (featured: true)
    ├── getCollection('projects') → projects.astro (todos)
    └── getStaticPaths() → [slug].astro (detalle)
```

## File Structure

```
phyton.dev/
├── astro.config.mjs
├── tailwind.config.mjs        # @theme tokens
├── package.json
├── tsconfig.json
├── public/
│   └── cv.pdf
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # <html>, nav, footer, a11y shell, ViewTransitions
│   ├── pages/
│   │   ├── index.astro         # Hero + featured projects + about + contact
│   │   ├── projects.astro      # Grid + FilterBar island
│   │   └── projects/
│   │       └── [slug].astro    # Dynamic route, getStaticPaths
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectGrid.astro
│   │   ├── CodeBlock.astro
│   │   ├── Footer.astro
│   │   └── ScrollReveal.astro
│   ├── islands/
│   │   ├── ThemeToggle.ts      # Custom Element, < 2KB
│   │   ├── FilterBar.ts        # Custom Element, < 2KB
│   │   └── AccessPanel.ts      # Custom Element, < 2KB
│   ├── content/
│   │   ├── config.ts           # defineCollection + Zod schema
│   │   └── projects/
│   │       ├── taskflow.mdx
│   │       ├── cloudrover.mdx
│   │       ├── synthai.mdx
│   │       ├── datamesh.mdx
│   │       ├── neodeploy.mdx
│   │       └── pysec.mdx
│   └── styles/
│       └── theme.css           # @layer base — 6 data-theme blocks + tokens
├── openspec/                   # (existing, unchanged)
├── index.html                  # (kept until astro build validated)
├── projects.html               # (kept until astro build validated)
└── project-detail.html         # (kept until astro build validated)
```

## Theme System Architecture

```
tailwind.config.mjs
  └── @theme { ... tokens }
       ↓
src/styles/theme.css
  └── @layer base
       ├── :root { --font-*, --radius-*, --transition }
       ├── [data-theme="midnight"]  { --bg, --surface, --fg, --accent, ... }
       ├── [data-theme="sunset"]    { ... }
       ├── [data-theme="forest"]    { ... }
       ├── [data-theme="ocean"]     { ... }
       ├── [data-theme="lavender"]  { ... }
       └── [data-theme="paper"]     { ... }
       ↓
@custom-variant theme-midnight (&[data-theme="midnight"]);
@custom-variant theme-sunset (&[data-theme="sunset"]);
...via plugin or postcss
       ↓
Utility classes: bg-surface theme-midnight:bg-blue-900
```

**Server-side default**: `BaseLayout.astro` escribe `data-theme="midnight"` en el HTML inicial. Script inline en `<head>` (no island, ~5 líneas) lee localStorage y sobrescribe antes de paint — sin FOUC.

## Routes

| Path | Page | Data Source |
|------|------|-------------|
| `/` | index.astro | `getCollection('projects', { filter: p => p.data.featured })` |
| `/projects` | projects.astro | `getCollection('projects')` |
| `/projects/[slug]` | [slug].astro | `getStaticPaths()` genera N rutas. 404 si no existe. |

## Content Schema (Zod)

```ts
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  techStack: z.array(z.object({ name: z.string(), color: z.string() })),
  images: z.array(z.string()),
  featured: z.boolean(),
  liveUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  role: z.string(),
  metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  duration: z.string(),
  stars: z.number().optional(),
  commits: z.number().optional(),
});
```

## Performance Strategy

- **Zero JS por defecto**: Astro SSG renderiza HTML estático. Solo 3 islands (< 6KB total).
- **View Transitions**: Nativas, sin polyfill, sin JS extra.
- **Fonts**: Inter + JetBrains Mono via `@font-face` local o preconnect. OpenDyslexic condicional (solo si data-theme="dyslexia").
- **Images**: Astro `<Image />` con optimización automática si se usan assets locales.
- **CSS**: Tailwind genera solo las utilidades usadas (purge por defecto). Tema variables en `@layer base` sin repetición.

## Accessibility Strategy

- **Skip link**: Primer elemento tabulable en todas las páginas.
- **ARIA live region**: Para anuncios de cambio de tema/filtro. ID `announcements`.
- **Reading ruler**: Fixed overlay toggleable. Sin JS si `prefers-reduced-motion`.
- **data-* attributes**: `data-font-size`, `data-animations`, `data-underline`, `data-reduced-transparency`, `data-ruler`, `data-large-cursor`, `data-colorblind` — todos preservados del legacy.
- **Focus visible**: `:focus-visible` con outline 3px en temas high-contrast/dyslexia.
- **Theme transition**: `theme-transitioning` class para transiciones suaves entre temas.

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| Build | `pnpm build` succeeds | CI gate |
| Content | Zod schema rejects invalid MDX | Build-time, automático |
| Visual | Lighthouse > 90 Perf/A11y/BP | Manual post-deploy |
| A11y | NVDA + keyboard | Manual por página |

No test runner disponible en el proyecto. Validación vía build y revisión manual.

## Migration / Rollout

1. Inicializar Astro en el directorio raíz (`phyton.dev/`)
2. Construir páginas y componentes mientras los HTML legacy conviven
3. `pnpm build` produce `/dist` con HTML estático
4. Validar que `/dist` reemplaza funcionalidad legacy
5. Commit final elimina HTML legacy (opcional)

**Rollback**: `git revert`. Los HTML originales nunca se borran hasta validación completa.

## Open Questions

- [ ] Confirmar si los 6 temas del spec reemplazan COMPLETAMENTE los 6 legacy, o si algunos legacy mapean 1:1
- [ ] Decide if OpenDyslexic font se carga condicional o siempre (impacto performance)
