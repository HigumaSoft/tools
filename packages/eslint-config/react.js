// @higuma/eslint-config/react
// Extends base with React-specific rules.
// Use for: React SPA projects.

import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import base from './base.js';

/** @type {import('eslint').Linter.Config[]} */
const react = tseslint.config(
  ...base,

  {
    files: ['**/*.tsx', '**/*.jsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        // Automatically detect React version
        version: 'detect',
      },
    },
    rules: {
      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // Props
      'react/no-unused-prop-types': 'error',

      // React 17+ — no need to import React in scope
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  }
);

export default react;
