import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://orionheatingandcooling.net';
const base = process.env.PUBLIC_BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      filter: (page) => !new URL(page).pathname.replace(/\/$/, '').endsWith('/thank-you')
    })
  ],
  output: 'static'
});
