import * as path from 'path'

import react from '@vitejs/plugin-react'
import postcssImport from 'postcss-import'
import postcssPresetEnv from 'postcss-preset-env'
import { defineConfig } from 'vite'

const { resolve } = path

const PORT = 8081
const API_PREFIX = '/api'
const API_HOST = 'http://localhost:3000'

const PATHS = {
  // Source files
  src: resolve(__dirname, './src'),

  // Production build files
  build: resolve(__dirname, './dist'),

  // Static files that get copied to build folder
  public: resolve(__dirname, './public')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    IS_DEV: false
  },
  css: {
    postcss: {
      plugins: [postcssImport, postcssPresetEnv]
    }
  },
  resolve: {
    alias: {
      '@': PATHS.src
    }
  },
  server: {
    port: PORT,
    strictPort: true,
    proxy: {
      [`${API_PREFIX}`]: {
        target: API_HOST,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
