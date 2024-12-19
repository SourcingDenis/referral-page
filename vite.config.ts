import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      external: [
        '@nestjs/core',
        '@nestjs/common',
        '@nestjs/platform-express',
        'serverless-http',
        'express',
        'reflect-metadata',
        'rxjs'
      ]
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
