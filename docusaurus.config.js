// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Higress',
  favicon: 'img/higress_logo_small.png',

  // Set the production url of your site here
  url: 'https://higress.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alibaba', // Usually your GitHub org/user name.
  projectName: 'higress', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'Higress' }],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // 禁止切换主题模式
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Higress logo',
          src: '//img.alicdn.com/imgextra/i1/O1CN01I7WjVs1K33EQjInid_!!6000000001107-2-tps-960-290.png',
        },
        items: [
          {
            label: 'Home',
            to: '/',
            activeBaseRegex: '^/$',
            position: 'right',
          },
          {
            label: 'Docs',
            type: 'doc',
            docId: 'overview/what-is-higress',
            position: 'right',
          },
          {
            label: 'Developers',
            type: 'doc',
            docId: 'developers/developers_dev',
            position: 'right',
          },
          {
            label: 'Blog',
            to: '/blog',
            position: 'right',
          },
          {
            label: 'Community',
            to: '/community',
            position: 'right',
          },
          {
            label: 'Download',
            to: 'https://github.com/alibaba/higress/releases',
            position: 'right',
            target: '_blank',
          },
          {
            label: 'Demo',
            to: 'http://demo.higress.io/',
            position: 'right',
            target: '_blank',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Vision',
            items: [
              {
                label: 'Higress is ...',
                to: '/',
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'What is Higress?',
                to: '/docs/overview/what-is-higress',
              },
              {
                label: 'Quick Start',
                to: '/docs/user/quickstart',
              },
              {
                label: 'Report a doc issue',
                href: 'https://github.com/higress-group/higress-group.github.io/issues/new',
              },
              {
                label: 'Edit This Page on GitHub',
                href: 'https://github.com/higress-group/higress-group.github.io',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Community',
                to: '/community',
              },
            ],
          },
        ],
        logo: {
          src: '//img.alicdn.com/imgextra/i2/O1CN01oNTGgE1lfW7oEPIzP_!!6000000004846-2-tps-960-290.png',
          width: 120,
          height: 36,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Copyright © 2022 Higress <br />sasa`,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
