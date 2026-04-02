import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Lisää tämä rivi. Käytä projektisi nimeä GitLabissa vinoviivojen välissä.
  base: '/junctionxturku/', 
})
