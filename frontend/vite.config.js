import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      buffer: path.resolve(__dirname, 'node_modules/buffer/'),
      stream: 'stream-browserify',
      events: 'events',
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4173,
  },

  preview: {
    allowedHosts: ['portfoliogus-production.up.railway.app'],
  },

  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  build: {
    minify: process.env.NODE_ENV === 'production',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  css: {
    postcss: './postcss.config.js'
  }
})