// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArmSoM docs',
  tagline: 'Documentations for ArmSoM products',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.armsom.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
      zh: {
        htmlLang: "zh-CN",
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          // {
          //   position: 'left',
          //   label: 'SIG',
          //   to: '/sig',
          // },
          // {
          //   position: 'left',
          //   label: 'LM',
          //   to: '/lm',
          // },
          // {
          //   position: 'left',
          //   label: 'BM',
          //   to: '/bm',
          // },
          // {
          //   position: 'left',
          //   label: 'AIM',
          //   to: '/aim',
          // },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'sib',
            label: 'SIB',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'lm',
            label: 'LM',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'aim',
            label: 'AIM',
          }, {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'bm',
            label: 'BM',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://armsom.org/',
            label: 'ArmSoM',
            position: 'right',
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: "Home",
                to: "http://www.armsom.org/",
                target: "_self",
              },
              {
                label: "Products",
                to: "http://www.armsom.org/product",
                target: "_self",
              },
              {
                label: "News",
                to: "http://www.armsom.org/news",
                target: "_self",
              },
              {
                label: "Services",
                to: "http://www.armsom.org/services",
                target: "_self",
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCVJQJTAx11UBYwOVD-1r94w',
              },
              {
                label: 'twitter',
                href: 'https://twitter.com/armsom',
              },
              {
                label: 'Blog',
                href: 'http://docs.armsom.org/blog',
              },
              {
                label: 'stackoverflow',
                href: 'https://stackoverflow.com/users/21867949/armsom',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Forum',
                href: 'http://forum.armsom.org/',
              },
              {
                label: 'Github',
                href: 'https://github.com/armsom',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash"],
      },
      typography: {
        fontFamily: [
          "Helvetica",
          "pingFangSC",
          "Microsoft YaHei",
          "微软雅黑",
          "Arial",
          "sans-serif",
        ],
      },
    }),
};

module.exports = config;
