import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/salu-bot/', // GitHub Pages için repo adınla aynı olmalı
  plugins: [react()],
})
