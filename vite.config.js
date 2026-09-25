import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://mguzman.dev (custom domain, see public/CNAME).
// If the site moves back to https://mikehgm.github.io/mguzman/, change base to '/mguzman/'.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
  base: '/',
});
