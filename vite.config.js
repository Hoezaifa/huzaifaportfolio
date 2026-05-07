import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'scripts/[name]-[hash].js',
        entryFileNames: 'scripts/[name]-[hash].js',
      },
    },
  },
  server:  { port: 3000 },
  preview: { port: 3000 },
});
