import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// File system based route
// See https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      Pages(),
    ],
    resolve: {
      alias: {
        '~': '/src',
        '@': '/src',
      }
    }
  }
})
