import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Replace framer-motion with a no-op shim during dev/build to disable animations
// and reduce runtime cost. This maps imports of 'framer-motion' to
// 'src/noopFramerMotion.js' which exports a silent `motion` object.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'framer-motion': path.resolve(__dirname, 'src/noopFramerMotion.js')
    }
  }
})
