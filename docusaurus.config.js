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
  clientModules: [require.resolve('./src/myClientModule.ts'), require.resolve('./src/custom-js.ts')],
  i18n: {
    defaultLocale: 'default',
    locales: ['en-us', 'zh-cn', 'default'],
    localeConfigs: {
      'en-us': {
        label: 'En',
        htmlLang: 'en-US',
      },
      'zh-cn': {
        label: '中',
        htmlLang: 'zh-CN',
      },
    },
  },
  scripts: [
    { src: '//g.alicdn.com/mamba/assets/0.0.19/mse-arc-ui.min.js' },
    {
      src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
      id: 'beacon-aplus',
      exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
    },
    {
      src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-YHS75WKFBR',
      async: true,
    },
  ],
  stylesheets: [
    {
      href: '//g.alicdn.com/mamba/assets/0.0.19/mse-arc-ui.min.css',
    },
  ],
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath, locale }) => {
            return `https://github.com/higress-group/higress-group.github.io/blob/main/i18n/${locale}/docusaurus-plugin-content-docs/current/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          editUrl: ({ blogPath, locale }) => {
            return `https://github.com/higress-group/higress-group.github.io/blob/main/i18n/${locale}/docusaurus-plugin-content-blog/${blogPath}`;
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
    // [
    //   '@docusaurus/preset-classic',
    //   {
    //     pages: {
    //       path: 'src/pages',
    //       routeBasePath: '/zh-cn',
    //       include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
    //       exclude: ['**/_*.{js,jsx,ts,tsx,md,mdx}', '**/_*/**', '**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**'],
    //       mdxPageComponent: '@theme/MDXPage',
    //       // remarkPlugins: [require('remark-math')],
    //       rehypePlugins: [],
    //       beforeDefaultRemarkPlugins: [],
    //       beforeDefaultRehypePlugins: [],
    //     },
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'higress,higress官网,云原生网关' }],
      // Replace with your project's social card
      image: 'img/higress_logo_small.png',
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
            label: 'Commercial',
            to: 'https://www.aliyun.com/product/aliware/mse?spm=higress-website.topbar.0.0.0',
            position: 'right',
            target: '_blank',
          },
          {
            label: 'FreeTrial',
            to: 'https://free.aliyun.com/?searchKey=云原生网关&spm=higress-website.topbar.0.0.0',
            position: 'right',
            target: '_blank',
          },
          {
            label: 'Case',
            to: 'https://survey.aliyun.com/apps/zhiliao/SmDQwdihe',
            position: 'right',
            target: '_blank',
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
        copyright: `Copyright © ${new Date().getFullYear()} Higress<br/>浙公网安备 33011002016922号 浙ICP备12022327号-1119`,
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
