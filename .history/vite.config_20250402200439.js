import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'  // Import path module

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Add alias for `src/`
    },
  },
  server: {
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
    host: true, // Enable external access
  },
})
