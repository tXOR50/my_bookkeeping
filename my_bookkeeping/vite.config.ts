import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Force Vite to detect file changes
    },
    host: true,  // Allow access from network (optional)
    strictPort: true,  // Ensure it binds to the specified port
  }
})
