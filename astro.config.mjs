import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const isDeploy = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: '/personal-profile-blog',
  outDir: 'dist',
  site: 'https://ethantrainshard.github.io/personal-profile-blog',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
  integrations: [mdx()],
});
