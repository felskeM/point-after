import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://pointafterpubandgrille.com',
  output: 'static',
  integrations: [tailwind()],
  adapter: cloudflare(),
    vite: {
    // The old field is `esbuildOptions`; replace it with `rolldownOptions`.
    optimizeDeps: {
      // Copy any options you previously needed (e.g. target, plugins, etc.).
      // If you never set anything, an empty object is fine.
      rolldownOptions: {
        // Example: keep the same target that Vite used before
        target: 'es2020',
        // Add any other Rolldown‑specific options you might need here.
      },
    },
  },
});
