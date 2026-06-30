# Plan de Proyecto: Portafolio Profesional para Big Tech (Versión Final)

Este documento detalla la estrategia, estructura y funcionalidad para la creación de un portafolio web personal, diseñado para captar la atención de reclutadores de empresas de tecnología de primer nivel.

## 1. Estrategia y Marca

### 1.1. Mensaje Central (Elevator Pitch)
El mensaje que debe comunicarse en menos de 15 segundos es:
**"Desarrollador de software que integra IA y herramientas Open Source (MCP, SDD) en el ciclo de vida del desarrollo para construir y entregar soluciones tecnológicas eficientes, sin importar el lenguaje o la tecnología."**

### 1.2. Dominio
El dominio principal será: **`phyton.dev`**

### 1.3. Jerarquía de Llamadas a la Acción (CTA)
La estructura del sitio estará optimizada para el flujo de trabajo de un reclutador. Las prioridades son:
1.  **Descargar CV:** Acceso inmediato y sin fricciones al currículum.
2.  **Ver Proyectos:** Validación de la experiencia técnica a través de casos de estudio.
3.  **Verificar Perfiles Externos:** Acceso rápido a GitHub (para código) y LinkedIn (para contexto profesional).
4.  **Contacto:** Una opción secundaria y pasiva.

## 2. Estructura y Funcionalidad del Sitio Web

### 2.1. Página de Inicio (`/`)
La puerta de entrada principal. Debe ser clara, concisa y orientada a la acción.

*   **Componentes:**
    *   **Barra de Navegación (Header):** Fija (`sticky`), con el logo/nombre `phyton.dev` a la izquierda. A la derecha, iconos para GitHub y LinkedIn, y enlaces de texto a "Proyectos", "Sobre Mí", "Contacto".
    *   **Sección Principal (Hero Section):**
        *   **Título (H1):** Phyton
        *   **Subtítulo (H2):** Desarrollador de Software & Líder de Proyectos Técnicos
        *   **Párrafo:** El Mensaje Central definido en la sección 1.1.
        *   **Botón Primario:** `[Icono] Descargar CV`
        *   **Botón Secundario:** `Ver mis Proyectos [→]`
    *   **Sección de Proyectos Destacados:**
        *   Una cuadrícula con un máximo de 3 proyectos seleccionados.
        *   Cada proyecto se presenta en una "tarjeta" que muestra:
            *   Imagen o miniatura.
            *   Título del proyecto.
            *   Resumen de una línea.
            *   Iconos de las tecnologías clave utilizadas.
            *   Un botón/enlace "Ver Caso de Estudio".

### 2.2. Página de Proyectos (`/projects`)
El catálogo completo e interactivo de todos los proyectos.

*   **Componentes:**
    *   **Título de la Página:** "Proyectos"
    *   **Barra de Filtros por Tecnología:**
        *   Una fila de "píldoras" o "tags" interactivos (ej: `Python`, `React`, `Docker`, `GCP`).
        *   Al hacer clic en un tag, la cuadrícula de proyectos se filtra en tiempo real para mostrar solo los proyectos que usan esa tecnología.
        *   Debe ser posible seleccionar múltiples filtros.
    *   **Cuadrícula de Proyectos:**
        *   Muestra todos los proyectos (o los filtrados) usando el mismo diseño de tarjeta que en la página de inicio.

### 2.3. Plantilla para Página de Detalle de Proyecto (`/projects/nombre-proyecto`)
Cada proyecto tendrá su propia página, funcionando como un caso de estudio detallado.

*   **Estructura:**
    *   **Encabezado:** Título del proyecto, tu rol, y un resumen de impacto de una frase.
    *   **Enlaces Rápidos:** Botones prominentes para `[Ver Demo en Vivo]` y `[Ver Código en GitHub]`.
    *   **Stack Tecnológico:** Una sección clara y visual que lista todas las tecnologías, herramientas y lenguajes usados. Estos son los datos que alimentan el sistema de filtros.
    *   **Cuerpo del Caso de Estudio (Metodología STAR):**
        *   **S - Situación (El Desafío):** Contexto y problema a resolver.
        *   **T - Tarea (Mi Misión):** Objetivos medibles y tus responsabilidades.
        *   **A - Acción (Mi Proceso):**
            *   Decisiones clave de arquitectura y el *porqué* de ellas.
            *   El desafío técnico más complejo y cómo lo superaste.
            *   Acciones de liderazgo y gestión ágil.
            *   Uso específico de herramientas de IA en el proceso.
        *   **R - Resultado (El Impacto):**
            *   Resultados cuantificables (métricas, mejoras).
            *   Principales lecciones aprendidas.
    *   **Galería Visual:** Espacio para capturas de pantalla, vídeos cortos y diagramas de arquitectura.

## 3. Contenido Requerido

*   [ ] Redactar el contenido para la sección "Sobre Mí".
*   [ ] Preparar un CV en formato PDF, optimizado para sistemas de seguimiento de candidatos (ATS).
*   [ ] Para cada proyecto a incluir:
    *   [ ] Recopilar todos los activos (links, imágenes, diagramas).
    *   [ ] Redactar el caso de estudio siguiendo la plantilla STAR.
    *   [ ] Listar de manera consistente todas las tecnologías utilizadas.
