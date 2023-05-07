// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OHMG',
  tagline: 'Online Historical Map Georeferencer (OHMG) is an open source application designed for the collaborative creation of historical map mosaic layers through a multi-step georeferencing process.',
  url: 'https://www.ohmg.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  scripts: [{src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'www.ohmg.dev'}],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          // editUrl: 'https://github.com/mradamcox/ohmg.dev',
        },
        blog: {
          showReadingTime: true,
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
      navbar: {
        title: 'OHMG',
        logo: {
          alt: 'Home',
          href: '/',
          src: 'img/teal-cleaned4.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs',
            items: [
              {
                type: 'doc',
                docId: 'index',
                // position: 'left',
                label: 'Docs',
              }
            ]
          }          ,
          {to: '/faq', label: 'FAQ', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: '/support',
            label: 'Support',
            position: 'left',
          },
          {
            href: 'https://oldinsurancemaps.net',
            label: 'OldInsuranceMaps.net',
            position: 'left',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Navigating the Site',
                to: '/docs/category/navigating-the-site-1',
              },
              {
                label: 'Making the Mosaics',
                to: '/docs/category/making-the-mosaics-1',
              },
              {
                label: 'Technical Documentation',
                to: '/docs/category/technical-documentation-1',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'FAQ',
                to: '/faq',
              },
              {
                label: 'Sanborn Maps',
                to: '/docs/category/about-sanborn-maps-1',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mradamcox/loc-insurancemaps',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        // theme: darkCodeTheme,
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'in_development',
        content:
          'OHMG is in development, an abstraction of the platform built for <a target="_blank" rel="noopener noreferrer" href="#">OldInsuranceMaps.net</a>. Follow along at <a href="https://github.com/mradamcox/ohmg">mradamcox/ohmg</a>.',
        backgroundColor: '#fafbfc',
        textColor: '#333333',
        isCloseable: false,
      },
    }),
};

module.exports = config;
