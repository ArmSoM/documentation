// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
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
      "en": {
        htmlLang: "en-US",
      },
      "zh": {
        htmlLang: "zh-Hans",
        path: 'zh',
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
          routeBasePath: '/',
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
        title: 'ArmSoM',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'main',
            label: 'Main page',
          }, 
          {to: '/blog', label: 'Blog', position: 'left'},
          
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
                label: "ODM",
                to: "http://www.armsom.org/odm",
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
              }, {
                label: 'CSDN',
                to: 'https://blog.csdn.net/nb124667390',
                target: "_blank",
              }
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
        additionalLanguages: ['bash', 'diff', 'json'],
        theme: lightTheme,
        darkTheme: darkTheme,
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
      algolia: {
        // The application ID provided by Algolia
        appId: 'DGDM5Q007G',
  
        // Public API key: it is safe to commit it
        apiKey: '88a93752eefff9f567bcfffca4b326c6',
  
        indexName: 'armsom',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        // searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
