import 'highlight.js/styles/default.css'
import hljs from 'highlight.js'
import type { App } from 'vue'
// import type {HTML}

export default (app: App) => {
  app.directive('highlight', (el: HTMLElement) => {
    const blocks = el.querySelectorAll<HTMLElement>('pre code')
    blocks.forEach((block) => {
      hljs.highlightElement(block)
    })
  })
}
