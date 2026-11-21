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
      // Vendored GSAP for the HyperFrames clips.
      'video/shared/',
      'video/renders/',
      'video/.hyperframes/',
    ],
  },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
];
