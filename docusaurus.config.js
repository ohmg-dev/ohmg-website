// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OHMG',
  tagline: 'Online Historical Map Georeferencer (OHMG) is an open source application that facilitates the creation of georeferenced historical map mosaic layers through a collaborative, public process.',
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
          {to: '/concepts', label: 'Concepts', position: 'left'},          
          {to: '/developers', label: 'Developers', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
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
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ohmg-dev',
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
          'OHMG is an in-progress abstraction of the platform built for <a target="_blank" rel="noopener noreferrer" href="https://oldinsurancemaps.net">OldInsuranceMaps.net</a>. Follow along: <a href="https://github.com/mradamcox/ohmg">mradamcox/ohmg</a>.',
        backgroundColor: '#fafbfc',
        textColor: '#333333',
        isCloseable: true,
      },
    }),
};

module.exports = config;
