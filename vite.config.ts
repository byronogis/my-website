import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// File system based route
// See https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
// On-demand components auto importing for Vue
// See https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// Auto import APIs
// See https://github.com/antfu/unplugin-auto-import#readme
import AutoImport from 'unplugin-auto-import/vite'
// atomic CSS engine
// See https://github.com/unocss/unocss/tree/main/packages/vite
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command: _commond, mode: _mode }) => {
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Pages(),
      Markdown(),
      Components({
        resolvers: [
          NaiveUiResolver(),
        ],
        dts: './src/components.d.ts',
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
        ],
        dts: './src/auto-imports.d.ts',
        dirs: [
          './src/store',
        ],
      }),
      Unocss(),
    ],
    resolve: {
      alias: {
        '~': `${path.resolve(__dirname, 'src')}`,
        '@': `${path.resolve(__dirname, 'src')}`,
      },
    },
  }
})
