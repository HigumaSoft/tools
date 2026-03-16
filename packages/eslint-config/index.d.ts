import type { Linter } from 'eslint';

declare const base: Linter.Config[];
declare const react: Linter.Config[];
declare const next: Linter.Config[];

export { base, react, next };
export default base;
