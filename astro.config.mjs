import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  outDir: 'dist',
  site: 'https://pages.cyberitdad.xyz',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  integrations: [mdx()],
});
