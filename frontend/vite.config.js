import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import AppConfig from '../config/App.json'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: [
        'fs',
        'path',
        'stream',
        'util',
        'process'
      ],
      overrides: {
        fs: 'memfs',
      },

    })
  ],
  server: {
    port: AppConfig.Server.Frontend.PORT
  }
})
