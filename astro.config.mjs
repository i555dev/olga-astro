import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://astrolog-tkachenko.ru',
  integrations: [sitemap()],
});
