import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    fs: {
      strict: false,
      allow: ['..']
    }
  }
})
