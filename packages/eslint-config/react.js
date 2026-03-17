// @higuma/eslint-config/react
// Extends base with React-specific rules.
// Use for: React SPA projects.

import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import base from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
const react = tseslint.config(...base, {
  files: ["**/*.tsx", "**/*.jsx"],
  languageOptions: {
    globals: {
      ...globals.browser,
    },
    parserOptions: {
      ecmaFeatures: { jsx: true },
    },
  },
  plugins: {
    "react-hooks": reactHooks,
  },
  rules: {
    // Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
  },
});

export default react;