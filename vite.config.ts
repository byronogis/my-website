import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// File system based route
// See https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default defineConfig(({ command: _commond, mode: _mode }) => {
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Pages(),
      Markdown(),
    ],
    resolve: {
      alias: {
        '~': '/src',
        '@': '/src',
      },
    },
  }
})
