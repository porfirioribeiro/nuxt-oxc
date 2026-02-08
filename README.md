# Oxc Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module to provide oxlint and oxfmt integration for doing amazing things.

- [✨ &nbsp;Release Notes](https://github.com/porfirioribeiro/oxc-nuxt/releases)
- [🏀 &nbsp;Online playground](https://stackblitz.com/github/porfirioribeiro/oxc-nuxt?file=playground%2Fapp.vue)
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Integrates Oxc's linting capabilities into your Nuxt app
- Adds nuxt auto-imports as globals

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxt module add oxc-nuxt
```

Create a `oxlint.config.ts` file in the root of your project with the following content:

```ts [oxlint.config.ts]
import { withNuxt } from './.nuxt/oxlint.mjs';

export default withNuxt({
  // Your custom Oxc rules and configurations go here. For example:
});
```

Add the below to lint commands to your `package.json` script section:

```json
{
  "scripts": {
    ...
    "lint": "oxlint --type-aware --type-check",
    "lint:fix": "oxlint --type-aware --type-check --fix",
    ...
  },
}
```

That's it! You can now use Oxc Nuxt in your Nuxt app ✨

## Contribution

<details>
  <summary>Local development</summary>

### Install dependencies

> pnpm install

### Generate type stubs

> pnpm run dev:prepare

### Develop with the playground

> pnpm run dev

### Build the playground

> pnpm run dev:build

### Run Oxlint

> pnpm run lint

### Run Oxfmt

> pnpm run format

### Run Vitest

> pnpm run test

> pnpm run test:watch

### Release new version

> pnpm run release

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/oxc-nuxt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/oxc-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dm/oxc-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/oxc-nuxt
[license-src]: https://img.shields.io/npm/l/oxc-nuxt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/oxc-nuxt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
