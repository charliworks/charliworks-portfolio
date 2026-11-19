// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// The only place the site URL lives. Change it here when charli.works is bought.
export default defineConfig({
  site: 'https://charliworks-portfolio.pages.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
