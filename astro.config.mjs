import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const isDeploy = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isDeploy ? '/personal-profile-blog' : '/',
  outDir: 'dist',
  site: 'https://cyberitdad.xyz',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  integrations: [mdx()],
});
