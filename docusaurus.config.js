// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yooking',
  tagline: '报国，裕民',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.yooking.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YooKing', // Usually your GitHub org/user name.
  projectName: 'yooking.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  plugins: [
    [require.resolve('docusaurus-lunr-search'), {
      languages: ['zh'], indexBaseUrl: true
    }],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // 最大缩放图片尺寸。
        min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
        steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YooKing/yooking.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '最近博文',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YooKing/yooking.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-MX335S1FD6',
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: 'GTM-PCWBK64',
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

      }),       
    ],
   
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ykmclogo.png',
      navbar: {
        title: 'YooKing',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ykmclogo.png',
        },
        items: [
          {
            position: 'right',
            label: '博客',
            items:[
              {
                label: '最新',
                to: 'blog',
              },
              {
                label: '标签',
                to: 'blog/tags',
              },
              {
                label: '归档',
                to: 'blog/archive',
              }            
            ]
          },
          
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '文档',
          },
          
          {
            position: 'right',
            label: '项目',
            items:[
              {
                label: 'YKMC',
                href: 'https://mc.yooking.top',
              },
              {
                label: 'ChatGPT',
                href: 'https://gpt.yooking.top',
              }            
            ]
          },
           
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '页面',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
          
              {
                label: '文档',
                to: '/docs/gpt/',
              },
              
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: '关于我',
                href: '/about',
              },
              {
                label: '友情链接',
                to: '/friends',
              },
              {
                label: 'Github',
                href: 'https://github.com/YooKing',
              }             
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'YKMC',
                href: 'https://mc.yooking.top',
              },
              {
                label: 'ChatGPT',
                href: 'https://gpt.yooking.top',
              },
              {
                label: 'Alist',
                href: 'https://alist.yooking.top',
              },
             
            ],
          },
        ],
        copyright: `版权所有 © ${new Date().getFullYear()} Yooking, 使用 Docusaurus 搭建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
