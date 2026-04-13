import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The build stays intentionally lean: Vite's defaults are enough once React
// plugin support is enabled for JSX and fast refresh.
export default defineConfig({
  plugins: [react()],
})
