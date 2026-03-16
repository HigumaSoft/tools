# @higuma/tsconfig

Shared TypeScript configurations for Higuma Soft projects.

## Installation

```bash
npm install --save-dev @higuma/tsconfig
```

## Configs

| File | Use for |
|------|---------|
| `base.json` | Strict baseline — no environment assumptions |
| `lib.json` | Node.js libraries (e.g. `registrie`) |
| `tsconfig.app.json` | React / Next.js client-side code (DOM, JSX, path aliases) |
| `tsconfig.node.json` | Next.js server-side code (no DOM) |

## Usage

### Library (registrie)

```jsonc
// tsconfig.json
{
  "extends": "@higuma/tsconfig/lib.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"]
}
```

### Next.js

```jsonc
// tsconfig.json — used by editor and Next.js
{
  "extends": "@higuma/tsconfig/tsconfig.app.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

// tsconfig.node.json — server-only files
{
  "extends": "@higuma/tsconfig/tsconfig.node.json",
  "include": ["app/**/*.ts", "pages/api/**/*.ts"]
}
```

### React SPA

```jsonc
// tsconfig.json
{
  "extends": "@higuma/tsconfig/tsconfig.app.json",
  "include": ["src/**/*.ts", "src/**/*.tsx"]
}
```
