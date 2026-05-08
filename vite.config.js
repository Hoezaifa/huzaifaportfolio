import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'serve-404',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          const isRoot       = url === '/' || url === '';
          const isAsset      = url.includes('.');
          const isViteRoute  = url.startsWith('/@');
          if (isRoot || isAsset || isViteRoute) return next();
          const page = readFileSync(resolve('public/404.html'), 'utf-8');
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(page);
        });
      },
    },
  ],
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
  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
    watch: process.env.VITE_WATCH_POLLING ? { usePolling: true, interval: 300 } : undefined,
  },
  preview: { port: 3000 },
});
