import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
   base: '/ESTATE-PROJECT/', 
   build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
})

