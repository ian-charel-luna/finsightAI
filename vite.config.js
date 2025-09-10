import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from 'react-router-dom'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:62708',
        changeOrigin: true,
      },
    },
  },
})
