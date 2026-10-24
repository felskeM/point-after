import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://pointafterpubandgrille.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  build: { inlineStylesheets: 'never' },
  vite: {
    plugins: [tailwindcss()],
  },
});
