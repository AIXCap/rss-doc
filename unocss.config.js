import { presetAttributify, presetUno, defineConfig, presetWebFonts } from "unocss";
// Unocss 指令插件
import transformerDirectives from '@unocss/transformer-directives'
// 变体组 指令插件
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // 快捷方式
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-justify-center': 'flex justify-center',
    'flex-items-center': 'flex items-center'
  },
  presets: [
    presetUno(), 
    presetAttributify({
      prefix: 'uno-',
      prefixedOnly: true,
    }),
    presetWebFonts({
      fonts: {
        custom: [],
        logofont: [
          {
            name: 'Pacifico',
            provider: 'google'
          }
        ]
      }
    })
  ],
  // 主题
  theme: {
    colors: {
      primary: 'var(--vp-c-indigo-1)',
    },
    fontFamily: {
      mono: 'var(--vt-font-family-mono)',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})