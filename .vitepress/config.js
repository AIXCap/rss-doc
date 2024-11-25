import path from 'path'
import { fileURLToPath } from 'url';
import { defineConfig } from 'vitepress'
import UnoCSS from "unocss/vite";
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resolve = (dir) => dir ? path.resolve(__dirname, '../', dir) : __dirname

export default defineConfig({
  title: 'RssTabs',
  description: 'RssTabs Documentation',
  srcDir: './docs',
  sitemap: {
    hostname: 'https://doc.rsstabs.com'
  },
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [['link', { rel: 'icon', href: '/icons/logo-x48.png' }]],
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/introduction/what-is-it' },
          { text: '功能', link: '/zh/features/popular' },
          { text: '定价', link: '/zh/pricing/plan' },
          { 
            text: '政策',
            items: [
              { text: '隐私政策', link: '/zh/policy/privacy-policy' },
              { text: '用户协议', link: '/zh/policy/user-agreement' },
            ]
          },
          { 
            text: '常见问题',
            items: [
              { text: '产品问题', link: '/zh/faq/product-faq' },
              { text: '功能问题', link: '/zh/faq/feature-faq' },
            ]
          },
          { 
            text: '关于',
            items: [
              { text: '关于我们', link: '/zh/about/about-us' },
              { text: '联系我们', link: '/zh/about/contact-us' },
              { text: '特别鸣谢', link: '/zh/about/special-thanks' },
              { text: '变更日志', link: '/zh/about/changelog' }
            ]
          }
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { 
                text: '介绍', 
                items: [
                  { text: '它是什么', link: '/zh/guide/introduction/what-is-it' },
                  { text: '缘于 AI+RSS', link: '/zh/guide/introduction/due-to-ai-rss' },
                  { text: 'Single Feed', link: '/zh/guide/introduction/single-feed' },
                  { text: 'Poly Feed', link: '/zh/guide/introduction/poly-feed' },
                  { text: '我们的愿景', link: '/zh/guide/introduction/our-vision' },
                ]
              },
              { text: '快速上手', link: '/zh/guide/quick-start' },
            ]
          },
          {
            text: '功能',
            items: [
              { text: '源广场', link: '/zh/features/popular' },
              { text: '创建聚合源', link: '/zh/features/create-poly-feed' },
              { text: '管理聚合源', link: '/zh/features/manage-poly-feed' },
              { text: '信息流', link: '/zh/features/information' },
              { text: '搜索引擎', link: '/zh/features/search-engine' },
              { text: '账号与设置', link: '/zh/features/account-settings' },
            ]
          },
          {
            text: '定价',
            items: [
              { text: '计划', link: '/zh/pricing/plan' }
            ]
          },
          {
            text: '政策',
            items: [
              { text: '隐私政策', link: '/zh/policy/privacy-policy' },
              { text: '用户协议', link: '/zh/policy/user-agreement' }
            ]
          },
          {
            text: '常见问题',
            items: [
              { text: '产品问题', link: '/zh/faq/product-faq' },
              { text: '功能问题', link: '/zh/faq/feature-faq' }
            ]
          },
          {
            text: '关于',
            items: [
              { text: '关于我们', link: '/zh/about/about-us' },
              { text: '联系我们', link: '/zh/about/contact-us' },
              { text: '特别鸣谢', link: '/zh/about/special-thanks' },
              { text: '变更日志', link: '/zh/about/changelog' }
            ]
          }
        ],

        footer: {
          message: '根据 MIT 许可发布。',
          copyright: 'Copyright © 2024-present RssTabs'
        },

        outlineTitle: '目录...',
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '模式',
        sidebarMenuLabel: '归档',
        lastUpdatedText:"最后更新时间",
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        editLink: {
          pattern: 'https://github.com/AIXCap/rss-doc/edit/main/docs/zh/:path',
          text: '在 GitHub 上编辑此页',
        },

        search: {
          provider: 'local'
        }
      }
    }
  },

  themeConfig: {
    siteTitle: 'RssTabs',
    nav: [
      { text: 'Guide', link: '/guide/introduction/what-is-it' },
      { text: 'Features', link: '/features/popular' },
      { text: 'Pricing', link: '/pricing/plan' },
      { 
        text: 'Policy',
        items: [
          { text: 'Privacy Policy', link: '/policy/privacy-policy' },
          { text: 'User Agreement', link: '/policy/user-agreement' }
        ]
      },
      { 
        text: 'FAQ',
        items: [
          { text: 'Product FAQ', link: '/faq/product-faq' },
          { text: 'Feature FAQ', link: '/faq/feature-faq' }
        ]
      },
      { 
        text: 'About',
        items: [
          { text: 'About Us', link: '/about/about-us' },
          { text: 'Contact Us', link: '/about/contact-us' },
          { text: 'Special Thanks', link: '/about/special-thanks' },
          { text: 'Changelog', link: '/about/changelog' },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { 
            text: 'Introduction',
            items: [
              { text: 'What is it?', link: '/guide/introduction/what-is-it' },
              { text: 'From AI+RSS', link: '/guide/introduction/due-to-ai-rss' },
              { text: 'Single Feed', link: '/guide/introduction/single-feed' },
              { text: 'Poly Feed', link: '/guide/introduction/poly-feed' },
              { text: 'Our Vision', link: '/guide/introduction/our-vision' },
            ]
          },
          { text: 'Quick Start', link: '/guide/quick-start' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Popular', link: '/features/popular' },
          { text: 'Create Poly Feed', link: '/features/create-poly-feed' },
          { text: 'Manage Poly Feed', link: '/features/manage-poly-feed' },
          { text: 'Information Flow', link: '/features/information' },
          { text: 'Search Engine', link: '/features/search-engine' },
          { text: 'Account & Settings', link: '/features/account-settings' },
        ]
      },
      {
        text: 'Pricing',
        items: [
          { text: 'Plan', link: '/pricing/plan' },
        ]
      },
      {
        text: 'Policy',
        items: [
          { text: 'Privacy Policy', link: '/policy/privacy-policy' },
          { text: 'User Agreement', link: '/policy/user-agreement' }
        ]
      },
      {
        text: 'FAQ',
        items: [
          { text: 'Product FAQ', link: '/faq/product-faq' },
          { text: 'Feature FAQ', link: '/faq/feature-faq' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About Us', link: '/about/about-us' },
          { text: 'Contact Us', link: '/about/contact-us' },
          { text: 'Special Thanks', link: '/about/special-thanks' },
          { text: 'Changelog', link: '/about/changelog' },
        ]
      }
    ],

    outline: 'deep',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AIXCap/rss-doc' }
    ],

    editLink: {
      pattern: 'https://github.com/AIXCap/rss-doc/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present RssTabs'
    },

    externalLinkIcon: true,

    search: {
      provider: 'local'
    }
  },

  markdown: {
    lineNumbers: true,
  },

  vite: {
    plugins: [
      Components({
        dirs: [resolve('.vitepress/theme/components')],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            customCollections: ['rsstabs']
          })
        ]
      }),
      Icons({
        compiler: 'vue3',
        customCollections: {
          rsstabs: FileSystemIconLoader('public/svg/rsstabs', svg => svg.replace(/^<svg /, '<svg fill="currentColor" '))
        },
        autoInstall: true
      }),
      UnoCSS({
        // 详见 unocss.config.js
      })
    ],
    resolve: {
      // 替换 Vitepress 内部组件
      alias: [
        {
          find: /^.*\/VPNavBarTitle\.vue$/,
          replacement: resolve('.vitepress/theme/components/CustomTitle.vue')
        }
      ]
    },
  },
  async buildEnd(siteConfig) {}
})
