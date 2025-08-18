import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '2277a8c7e10b.ngrok-free.app', // 👈 your ngrok domain
    ]
  }
})
