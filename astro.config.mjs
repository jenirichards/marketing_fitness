// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Standalone marketing site for Harbour Fitness (iCentric Systems Ltd).
  // TODO: point `site` at the live domain once decided - used for canonical
  // URLs, sitemap entries and absolute OG image URLs.
  site: 'https://harbourfitness.co.uk',
  // Trailing slashes everywhere so canonical URLs, sitemap entries and the
  // actually-served URLs all match (mirrors the studio site).
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
