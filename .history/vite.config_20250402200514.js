import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'  // Import fileURLToPath

const __dirname = path.dirname(fileURLToPath(import.meta.url)) // Correct way to get __dirname

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for `src/`
    },
  },
  server: {
    allowedHosts: ['.ngrok-free.app'],
    host: true,
  },
})
