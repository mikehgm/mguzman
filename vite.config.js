import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://mikehgm.github.io/mguzman/.
// If the site moves to a custom domain (e.g. mguzman.dev), change base to '/'.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
  base: '/mguzman/',
});
