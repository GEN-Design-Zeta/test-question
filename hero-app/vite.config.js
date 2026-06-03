import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative base so the build works on GitHub Pages project sites
  // (served from /<repo>/) as well as from a plain file open.
  base: './',
  plugins: [react()],
})
