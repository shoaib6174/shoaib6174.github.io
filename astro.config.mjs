import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shoaib6174.github.io',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
