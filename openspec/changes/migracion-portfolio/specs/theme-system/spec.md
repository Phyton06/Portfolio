# Theme System Specification

## Purpose

Define a 6-theme system using oklch CSS custom properties, `data-theme` attribute switching, and localStorage persistence. No framework dependency — pure CSS custom properties + a lightweight Custom Element.

## Requirements

### Requirement: Theme Token Definition

The system MUST define 6 distinct themes as CSS custom properties scoped to `[data-theme="<name>"]`. All color values MUST use the `oklch()` color space. Each theme MUST set tokens for: `--color-bg`, `--color-surface`, `--color-text`, `--color-primary`, `--color-secondary`, `--color-accent`, `--color-muted`.

The 6 themes SHALL be: `midnight` (dark, cool blue base), `sunset` (warm orange-red), `forest` (green earth tones), `ocean` (blue-teal), `lavender` (purple-pink), and `paper` (light, warm beige for reading).

#### Scenario: Theme renders with correct colors

- GIVEN the `<html>` element has `data-theme="midnight"`
- WHEN a paragraph with `color: var(--color-text)` is rendered
- THEN the text color matches the `midnight` token value (light cool white on dark blue)

#### Scenario: Theme switch changes all tokens

- GIVEN the page is on `data-theme="midnight"`
- WHEN the user switches to `data-theme="paper"`
- THEN every element using theme variables updates immediately without page reload

### Requirement: Client-Side Theme Switching

The system MUST provide a lightweight Custom Element (`<theme-toggle>`, < 2KB) that toggles the `data-theme` attribute on `<html>` and persists the selection to `localStorage` under key `theme`.

#### Scenario: Toggle cycles through themes

- GIVEN the current theme is `midnight`
- WHEN the user clicks `<theme-toggle>`
- THEN `data-theme` changes to the next theme in the defined sequence

#### Scenario: Selected theme survives page reload

- GIVEN the user selected `forest` theme
- WHEN the page is reloaded
- THEN `<html>` renders with `data-theme="forest"`
- AND the localStorage key `theme` holds `"forest"`

### Requirement: Static-First Default

The system MUST render the default theme server-side in the HTML (no flash of wrong colors). The `data-theme` attribute MUST be present in the initial HTML output. The client script SHALL only override it if a stored preference exists.

#### Scenario: No stored preference uses server default

- GIVEN a user visits for the first time with no `localStorage` entry
- WHEN the HTML is served
- THEN `data-theme` is set to the default theme (`midnight`)

#### Scenario: No-JS environment still shows themed content

- GIVEN JavaScript is disabled in the browser
- WHEN the user visits the page
- THEN the default theme is rendered correctly
- AND all theme colors are visible

### Requirement: CSS Custom Variant Mapping

The system MUST use Tailwind v4's `@custom-variant` to map `data-theme` selectors, enabling utility-friendly theme switching like `class="text-primary theme-midnight:bg-blue-900"`.

#### Scenario: Utility class reflects active theme

- GIVEN a div with `class="bg-surface theme-paper:bg-amber-50"`
- WHEN `data-theme="paper"`
- THEN the background is `bg-amber-50`
- AND all other theme variants remain inactive
