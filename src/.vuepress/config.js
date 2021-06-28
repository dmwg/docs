const { description } = require('../../package');

const { join, resolve } = require('path');
const { readdirSync } = require('fs');

const autoSidebar = (path) => {
  const dir = join(__dirname, '..', path);

  return readdirSync(dir).map((x) => path.split('/').slice(1).join('/') + '/' + x);
};

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DMWG Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/docs/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Internals',
        link: '/internals/',
      },
      {
        text: 'Theming',
        link: '/theming/'
      }
    ],
    sidebar: {
      '/internals/': [
        {
          title: 'Tech',
          children: [
            ...autoSidebar('internals/tech')
          ]
        },

        {
          title: 'Components',
          children: [
            ...autoSidebar('internals/components')
          ]
        },
      ],

      '/theming/': [
        {
          title: 'Variables',
          children: [
            ...autoSidebar('theming/vars')
          ]
        },
        {
          title: 'Mod Support',
          children: [
            ...autoSidebar('theming/mods')
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  theme: 'yuu',

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use(resolve(__dirname, './md_preproc/index'))
        .loader(resolve(__dirname, './md_preproc/index'))
        .end()
  },
}
