# Stylist-Svelte

`stylist-svelte` is a Svelte 5 component library with TypeScript typings, theme support, and a large generated component surface organized by domain.

## Installation

```bash
npm install stylist-svelte svelte
```

Peer dependency:

- `svelte@^5`

## Quick Start

```svelte
<script lang="ts">
	import { ThemeProvider, Button, Input } from 'stylist-svelte';
</script>

<ThemeProvider initialTheme="light">
	<Input placeholder="Enter your name" />
	<Button variant="primary">Get started</Button>
</ThemeProvider>
```

## Package Surface

- Primary entry point: `stylist-svelte`
- Types are published from `dist/index.d.ts`
- Svelte runtime entry is published from `dist/index.js`
- Story files, demo files, tests, and generated JSON metadata are not part of the public npm package

## Development

Useful commands:

```bash
yarn dev
yarn build
yarn validate
yarn test:unit
```

Build notes:

- `yarn build` runs SVG data generation before `svelte-package`
- `yarn validate` runs linting, TypeScript, and `svelte-check`
- generated `src/lib/**/index.ts` files are managed by the existing indexation workflow

## Documentation

- [DOCUMENTATION.md](DOCUMENTATION.md)
- [CONTRIBUTING.md](CONTRIBUTING.md)
- [CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)
