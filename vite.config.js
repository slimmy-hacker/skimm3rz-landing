import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/skimm3rz-landing/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})