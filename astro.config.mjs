import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shoaib6174.github.io',
  integrations: [sitemap()],
  build: { format: 'directory' },
  redirects: {
    '/experiences/': '/route/',
    '/education/': '/route/',
    '/projects/': '/work/',
    '/publications/': '/writing/',
    '/blogs/': '/writing/',
    '/cv/': '/files/pdfs/Shoaib_s_Resume.pdf',
    '/resume': '/files/pdfs/Shoaib_s_Resume.pdf',
    '/resume/': '/files/pdfs/Shoaib_s_Resume.pdf',
    '/journey/': '/route/',
  },
});
