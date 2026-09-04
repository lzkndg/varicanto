import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.varicanto.li',
  vite: {
    // Avoids esbuild's stdin-based dep scan walking above the project root
    // when auto-discovering tsconfig.json (it can end up one directory too
    // high, e.g. into an unrelated ancestor's jsconfig.json).
    optimizeDeps: {
      esbuildOptions: {
        tsconfig: './tsconfig.json',
      },
    },
  },
});
