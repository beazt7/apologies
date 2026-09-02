import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, set to "/<repository-name>/" at build time (see the
  // GitHub Actions workflow in .github/workflows/deploy.yml, which sets this
  // automatically). Left as "/" for local dev and other static hosts.
  base: process.env.VITE_BASE_PATH ?? '/',
})
