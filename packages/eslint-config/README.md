# @higuma/eslint-config

Shared ESLint flat configs (ESLint 9+) for Higuma Soft projects.

## Installation

```bash
# All projects need these
npm install --save-dev @higuma/eslint-config eslint typescript-eslint @eslint/js globals \
  eslint-plugin-simple-import-sort eslint-plugin-unused-imports

# React / Next.js projects also need
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks

# Next.js projects also need
npm install --save-dev @next/eslint-plugin-next
```

## Configs

| Import | Use for |
|--------|---------|
| `@higuma/eslint-config/base` | Any TS project — libraries, Node, CLI |
| `@higuma/eslint-config/react` | React SPA |
| `@higuma/eslint-config/next` | Next.js app |

## Usage

### Library (registrie)

```js
// eslint.config.mjs
import base from '@higuma/eslint-config/base';
export default base;
```

### React SPA

```js
// eslint.config.mjs
import react from '@higuma/eslint-config/react';
export default react;
```

### Next.js

```js
// eslint.config.mjs
import next from '@higuma/eslint-config/next';
export default next;
```

### With overrides

```js
// eslint.config.mjs
import base from '@higuma/eslint-config/base';

export default [
  ...base,
  {
    rules: {
      'no-console': 'warn', // downgrade for this project
    },
  },
];
```

## Rules included in all configs

| Rule | Level |
|------|-------|
| `simple-import-sort/imports` | error |
| `unused-imports/no-unused-imports` | error |
| `@typescript-eslint/no-explicit-any` | error |
| `@typescript-eslint/no-unused-vars` | error |
| `@typescript-eslint/no-non-null-assertion` | warn |
| `@typescript-eslint/consistent-type-imports` | error |
| `@typescript-eslint/no-floating-promises` | error |
| `no-console` | error |
| `no-var` | error |
| `prefer-const` | error |
| `eqeqeq` | error |
| `consistent-return` | error |
| `no-shadow` | error |

Test files (`*.test.ts`, `*.spec.ts`, `test/**`) get `no-explicit-any`, `no-non-null-assertion`, `no-floating-promises`, and `no-console` turned off.
