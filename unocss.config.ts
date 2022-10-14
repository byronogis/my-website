import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  rules: [
    ['liam-bg', { 'background-color': 'var(--liam-bg)' }],
    ['liam-text', { color: 'var(--liam-text)' }],
    ['liam-btn', {
      'display': 'inline-block',
      'padding': '0.5em 1em',
      'border': '1px solid var(--liam-primary)',
      'border-radius': '2px',
      'box-shadow': '1px 1px 2px var(--liam-primary)',
    }],
  ],
})
