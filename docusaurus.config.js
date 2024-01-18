// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ArmSoM docs',
  tagline: 'Find the desired sbc or som',
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

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

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
      metadata: [
        {name: 'keywords', content: 'armsom, SBC, Open Source, Thin client, rockchip'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      // Replace with your project's social card
      image: 'img/armsom-social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'sige',
            label: 'Sige',
          }, {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'link',
            label: 'Link',
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
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'general-tutorial',
            label: 'General Tutorial',
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
                target: "_blank",
              },
              {
                label: "Products",
                to: "http://www.armsom.org/product",
                target: "_blank",
              },
              {
                label: "News",
                to: "http://www.armsom.org/news",
                target: "_blank",
              },
              {
                label: "Services",
                to: "http://www.armsom.org/services",
                target: "_blank",
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                to: 'http://docs.armsom.org/blog',
                target: "_self",
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/armsom',
                target: "_blank",
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/channel/UCVJQJTAx11UBYwOVD-1r94w',
                target: "_blank",
              },
              {
                label: 'bilibili',
                to: 'https://space.bilibili.com/101696800',
                target: "_blank",
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Forum',
                to: 'http://forum.armsom.org/',
                target: "_blank",
              },
              {
                label: 'Github',
                to: 'https://github.com/armsom',
                target: "_blank",
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
