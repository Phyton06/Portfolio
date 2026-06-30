# Phyton.dev — Portfolio profesional

Portfolio personal de **Luis Angel Cardona Becerra** (Phyton06). Construido con Astro 5 + Tailwind CSS v4, diseñado para destacar en procesos de selección de Big Tech. 6 temas de accesibilidad, View Transitions nativas, cero JavaScript superfluo.

## Cómo empezar

```bash
npm install
npm run dev        # http://localhost:4321
```

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor local con recarga en caliente |
| `npm run build` | Compila sitio estático en `dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run astro -- --help` | Ayuda del CLI de Astro |

## Stack

| Capa | Tecnología |
|------|------------|
| Framework | Astro 5 (SSG) |
| Estilos | Tailwind CSS v4 + 6 temas en oklch |
| Contenido | Content Collections + MDX |
| Animaciones | View Transitions API + CSS |
| Dominio | phyton.dev |
| Hosting | Cloudflare Pages |

## Estructura del proyecto

```
src/
├── components/        # Componentes reutilizables (Nav, Footer, ThemeToggle, etc.)
├── content/
│   └── projects/      # Archivos MDX — cada proyecto es un archivo
├── layouts/           # Layouts (BaseLayout)
├── pages/             # Rutas del sitio
│   ├── index.astro    # Home
│   ├── projects/      # Listado de proyectos
│   │   └── [slug].astro  # Detalle de proyecto
│   └── about.astro    # Sobre mí / Contacto
└── styles/            # Estilos globales (tema, base)
```

## Agregar un proyecto

1. Crear un archivo `.mdx` en `src/content/projects/`
2. Completar el frontmatter:

```yaml
---
title: "Nombre del proyecto"
description: "Breve descripción"
pubDate: 2026-06-29
tags: ["React", "TypeScript"]
techStack: ["Astro", "Tailwind"]
featured: true
---
```

3. Escribir el contenido en MDX
4. `npm run build` para verificar

## Temas de accesibilidad

El sitio incluye 6 temas diseñados para distintas necesidades visuales:

| Tema | Ideal para |
|------|------------|
| Midnight | Modo oscuro general |
| Sunset | Modo claro general |
| Forest | Fatiga visual prolongada |
| Ocean | Baja sensibilidad al contraste |
| Lavender | Sensibilidad a la luz azul |
| Paper | Dislexia y sensibilidad visual |

Los temas se cambian desde el panel de accesibilidad y se persisten en `localStorage`.

## Desarrollo

```bash
# Modo desarrollo con recarga en caliente
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## Licencia

Código fuente disponible como referencia educativa. Diseño y contenido © Luis Angel Cardona Becerra.
