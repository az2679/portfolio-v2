import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3001,
    host: '0.0.0.0',
  },
  plugins: [react()],
  publicDir: 'public',
  // base: '/portfolio-v2/',
  base: '/',
  build: {
    outDir: 'docs',
  },
});
