import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  output: 'static',
  site: process.env.PUBLIC_SITE_URL || undefined,
  trailingSlash: 'always',
  markdown: { processor: satteri({ features: { smartPunctuation: false } }) },
  devToolbar: { enabled: false },
});
