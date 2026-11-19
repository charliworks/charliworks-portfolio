import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  {
    ignores: [
      'dist/',
      '.astro/',
      '.superpowers/',
      'playwright-report/',
      'test-results/',
      '.lighthouseci/',
    ],
  },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
];
