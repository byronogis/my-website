import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// File system based route
// See https://github.com/hannoeru/vite-plugin-pages
import Pages from 'vite-plugin-pages'
// Vue layout plugin for Vite
// See https://github.com/JohnCampionJr/vite-plugin-vue-layouts
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-md'
// On-demand components auto importing for Vue
// See https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
// Auto import APIs
// See https://github.com/antfu/unplugin-auto-import#readme
import AutoImport from 'unplugin-auto-import/vite'
// atomic CSS engine
// See https://github.com/unocss/unocss/tree/main/packages/vite
import Unocss from 'unocss/vite'
// PostCSS plugin to unwrap nested rules like how Sass does it.
// See https://github.com/postcss/postcss-nested#readme
import PostcssNested from 'postcss-nested'
// markdown-it used
import MarkdownItAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
import MarkdownItTOC from 'markdown-it-table-of-contents'

// https://vitejs.dev/config/
export default defineConfig(({ command: _commond, mode: _mode }) => {
  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Pages(),
      Layouts(),
      Markdown({
        builders: [],
        markdownItSetup(md) {
          md.use(MarkdownItAnchor, { slugify: s => uslug(s) })
          md.use(MarkdownItTOC, { includeLevel: [2, 3, 4], containerClass: 'table-of-contents' })
        },
        wrapperClasses: 'docs-markdown-body',
      }),
      Components({
        resolvers: [
        ],
        dts: './src/components.d.ts',
      }),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
        dts: './src/auto-imports.d.ts',
        dirs: [
          './src/store',
          './src/utils/utils',
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
    css: {
      postcss: {
        plugins: [
          PostcssNested,
        ],
      },
    },
  }
})
