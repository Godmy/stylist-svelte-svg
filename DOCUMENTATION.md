# Stylist-Svelte Documentation

## Overview

Stylist-Svelte is a large Svelte 5 component library with a generated multi-domain surface. It is organized around reusable UI primitives, themed styling, state factories, and domain-specific component families.

The current structure is centered around `src/lib`, not `src/lib/components` or `src/lib/themes`.

## Installation

```bash
npm install stylist-svelte svelte
```

## Public API

The npm package currently exposes the root entry point only:

```ts
import { Button, ThemeProvider, ThemeSwitcher } from 'stylist-svelte';
```

Documented deep imports such as `stylist-svelte/components/atoms` are not part of the current `exports` map.

## Quick Start

```svelte
<script lang="ts">
	import { ThemeProvider, Button } from 'stylist-svelte';
</script>

<ThemeProvider initialMode="light" initialScheme="minimal">
	<Button variant="default">Hello world</Button>
</ThemeProvider>
```

## Theme System

The theme model is split into two independent axes:

- `TokenThemeMode`: `default`, `light`, `dark`
- `TokenThemeScheme`: `minimal`, `ocean`, `forest`, `sunset`

`default` applies only to the theme mode. It resolves to `light` or `dark` from the system preference.

`ThemeProvider` is implemented at `src/lib/theme/component/atom/theme-provider/index.svelte` and accepts:

- `initialMode?: TokenThemeMode`
- `initialScheme?: TokenThemeScheme`
- `class?: string`
- standard `HTMLAttributes<HTMLDivElement>`
- `children`

The provider state lives in `src/lib/theme/function/state/theme-provider/index.svelte.ts` and publishes theme accessors and mutators through `ManagerThemeContext`.

## Repository Layout

Top-level domains under `src/lib` include:

- `animation`
- `architecture`
- `calendar`
- `canvas`
- `chart`
- `chat`
- `color`
- `commerce`
- `control`
- `development`
- `file`
- `form`
- `geo`
- `input`
- `layout`
- `localization`
- `management`
- `media`
- `navigation`
- `notification`
- `science`
- `theme`
- `typography`

Inside each domain, code is commonly split into:

- `component` for Svelte components
- `function` for state factories and scripts
- `class` for style managers and object managers
- `type` for enums, records, and structs
- `interface` for recipes, slots, and contracts
- `const` for tokens, presets, and static maps

## Component Conventions

Common patterns used across the library:

- Svelte 5 runes in `.svelte` and `.svelte.ts`
- state factories such as `createButtonState(...)`
- style managers for class composition
- generated barrel files named `index.ts`
- story files named `index.story.svelte`

Example:

- component: `src/lib/control/component/atom/button/index.svelte`
- state factory: `src/lib/control/function/state/button-atom/index.svelte.ts`
- style manager: `src/lib/control/class/style-manager/button/index.ts`

## Build and Validation

Scripts defined in `package.json`:

```bash
yarn dev
yarn build
yarn validate
yarn test:unit
```

Important notes:

- `yarn build` runs `yarn data:svg` before `svelte-package`
- `yarn validate` runs `yarn lint && yarn tsc && yarn check`
- `yarn lint` currently uses `prettier --check . && eslint .`
- the repository contains many generated files, so formatting drift can affect thousands of files at once

## Generated Files

The repository contains a substantial generated surface. Auto-generated headers such as `AREA: STYLIST CODER MODEL -> AUTO-GENERATED` are present across many barrel files and generated modules.

Generated files are especially common in:

- `src/lib/**/index.ts`
- generated state wrappers
- generated domain exports

If you add or move components, keep the generated indexation workflow in sync with the manual source files.

## Testing

Current tests are concentrated mostly around the theme system under `src/test/theme`.

Representative files:

- `src/test/theme/theme-components.test.ts`
- `src/test/theme/theme-context-molecules.test.ts`
- `src/test/theme/test/runtime/index.test.ts`

## Practical Guidance

- Prefer root imports from `stylist-svelte` unless the package export map is expanded.
- Use `ThemeProvider` with `initialMode` and `initialScheme`, not `initialTheme`.
- Keep naming consistent because generated exports amplify naming mistakes quickly.
- Treat formatting changes carefully: large automated rewrites can touch thousands of files.
