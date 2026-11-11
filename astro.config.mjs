// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jimmysofwatertown.com',
  integrations: [
    react(),
    sitemap({
      // Keep the post-checkout thank-you page out of search results
      filter: (page) => !page.includes('/order-confirmation'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});