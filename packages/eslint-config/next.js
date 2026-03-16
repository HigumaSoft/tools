// @higuma/eslint-config/next
// Extends react with Next.js-specific rules.
// Use for: Next.js app projects.

import nextPlugin from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import react from './react.js';

/** @type {import('eslint').Linter.Config[]} */
const next = tseslint.config(
  ...react,

  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      // Core Next.js rules — all recommended ones as errors
      ...Object.fromEntries(
        Object.entries(nextPlugin.configs.recommended.rules ?? {}).map(
          ([rule, _]) => [rule, 'error']
        )
      ),

      // Next.js specific overrides
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',        // enforce next/image
      '@next/next/no-sync-scripts': 'error',
    },
  }
);

export default next;
