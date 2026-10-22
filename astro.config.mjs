import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pointafterpubandgrille.com',
  output: 'static',
  build: { inlineStylesheets: 'never' },
  vite: {
    plugins: [tailwindcss()],
  },
});
