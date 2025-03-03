<<<<<<< HEAD
// vite.config.ts
=======
>>>>>>> origin/main
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
<<<<<<< HEAD
  build: {
    outDir: 'dist',
    sourcemap: true
  }
=======
>>>>>>> origin/main
})