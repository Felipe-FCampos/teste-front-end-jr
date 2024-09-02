import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/teste-front-end': {
      target: 'https://app.econverse.com.br',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/teste-front-end/, '/teste-front-end')
      }
    }
  }
})
