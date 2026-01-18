import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  // 🔴 MUST match your GitHub repo name
  base: '/Test/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  // 🔴 IMPORTANT: build to docs (GitHub Pages supports this)
  build: {
    outDir: 'docs',
  },
})
