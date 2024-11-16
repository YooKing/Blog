// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yooking\'s blog ',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YooKing', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/YooKing/Blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '最近博文',
          routeBasePath: '/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/YooKing/yooking.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Yooking\'s blog',
        logo: {
          alt: 'Blog Logo',
          src: 'img/ykmclogo.png',
        },
        items: [
          {
            position: 'right',
            label: '博客',
            items:[
              {
                label: '最新',
                to: '/',
              },
              {
                label: '标签',
                to: '/tags',
              },
              {
                label: '归档',
                to: '/archive',
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
                to: '/',
              },
          
              {
                label: '文档',
                to: '/docs/gpt',
              }
            ],
          },
          {
            title: '更多',
            items: [
          
              {
                label: 'Github',
                href: 'https://github.com/YooKing',
              },
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
        copyright: `Copyright © ${new Date().getFullYear()} Yooking, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
