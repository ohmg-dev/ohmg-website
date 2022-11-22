// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'About LaHMG',
  tagline: 'A crowdsourcing platform for georeferencing content from the Sanborn maps collection at the Library of Congress.',
  url: 'https://about.oldinsurancemaps.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  scripts: [{src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'about.oldinsurancemaps.net'}],

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
          editUrl:
            'https://github.com/mradamcox/loc-insurancemaps-website',
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
        title: 'About LaHMG',
        logo: {
          alt: 'About LaHMG',
          src: 'img/noun_Map_heavy-colored-with-roadlines.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Resources',
          },
          {to: '/faq', label: 'FAQs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
          {
            href: 'https://oldinsurancemaps.net',
            label: 'Main Site',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'FAQs',
                to: '/faq',
              },
              {
                label: 'Sanborn Maps',
                to: '/docs/category/sanborn-maps',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
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
                label: 'GitHub',
                href: 'https://github.com/mradamcox/loc-insurancemaps',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
