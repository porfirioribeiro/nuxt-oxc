import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['typescript', 'oxc', 'import'],
  globals: {
    defineNuxtConfig: 'readonly',
  },
  env: { builtin: true, node: true },
  categories: {
    correctness: 'error',
    suspicious: 'warn',
    pedantic: 'warn',
    perf: 'warn',
    nursery: 'warn',
  },
  rules: {
    'import/max-dependencies': 'off',
  },
  ignorePatterns: ['playground/**/*', 'test/fixtures/**/*'],

  overrides: [
    {
      files: ['**/*.test.ts'],
      plugins: ['vitest'],
      env: { builtin: true, node: true },
      rules: {
        'no-explicit-any': 'off',
        'no-param-reassign': 'off',
        'no-empty-function': 'off',
        'unbound-method': 'off',
        'typescript/no-unsafe-member-access': 'off',
        'typescript/no-unsafe-call': 'off',
        'typescript/no-unsafe-argument': 'off',
        'typescript/no-unsafe-return': 'off',
        'typescript/no-unsafe-assignment': 'off',
        'typescript/no-unsafe-type-assertion': 'off',
      },
    },
  ],
});
