# Project Content Specification

## Purpose

Define the content model, schema validation, and dynamic routing for projects in the portfolio. Powered by Astro Content Collections with Zod validation.

## Requirements

### Requirement: Content Collection Schema

The system MUST define a Content Collection named `projects` using a Zod schema that validates every `.mdx` entry.

The schema MUST include: `title` (string), `description` (string), `tags` (string array), `techStack` (array of `{name: string, color: string}`), `images` (string array), `featured` (boolean), `liveUrl` (optional string), `repoUrl` (optional string), `role` (string), `metrics` (optional array of `{label: string, value: string}`), `duration` (string), `stars` (optional number), `commits` (optional number).

#### Scenario: Valid project entry passes schema

- GIVEN a `.mdx` file in `src/content/projects/` with all required fields and valid types
- WHEN the build runs
- THEN the entry is parsed and included in the collection
- AND accessible at runtime via `Astro.glob` or `getCollection()`

#### Scenario: Invalid entry is rejected at build time

- GIVEN a `.mdx` file with a missing `title` or a string where `tags` array is expected
- WHEN the build runs
- THEN Astro emits a Zod validation error
- AND the entry is excluded from the collection

### Requirement: Dynamic Project Routes

The system MUST generate a static page at `/projects/[slug]` for EVERY entry in the `projects` collection, using `getStaticPaths()`.

#### Scenario: Existing project renders detail page

- GIVEN a valid project entry with slug `mi-proyecto`
- WHEN a user navigates to `/projects/mi-proyecto`
- THEN the server returns a 200 HTML page with the project's `title`, `description`, and content rendered

#### Scenario: Nonexistent slug returns 404

- GIVEN no project entry with slug `no-existe`
- WHEN a user navigates to `/projects/no-existe`
- THEN the server returns a 404 HTML page

### Requirement: Featured Projects on Home

The system MUST provide a queryable `featured` boolean. Home page SHALL filter and display only featured projects.

#### Scenario: Featured project appears on home

- GIVEN projects `A` (featured: true) and `B` (featured: false)
- WHEN the home page renders the featured section
- THEN project `A` is displayed
- AND project `B` is not

### Requirement: Tech Stack Display

The system SHOULD render `techStack` items with each entry's `color` as a visual indicator alongside the `name`.

#### Scenario: Tech stack renders with colors

- GIVEN a project with `techStack: [{name: "React", color: "#61DAFB"}]`
- WHEN the detail page renders
- THEN "React" appears with a visual badge whose background matches `#61DAFB`
