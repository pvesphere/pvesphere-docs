import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PveSphere',
  tagline: 'Comprehensive Management Platform for Proxmox VE Clusters',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.pvesphere.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For custom domain, use root path
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pvesphere',
  projectName: 'pvesphere-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      'en': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl: 'https://github.com/pvesphere/pvesphere-docs/tree/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/pvesphere-social-card.jpg',
    navbar: {
      title: 'PveSphere',
      logo: {
        alt: 'PveSphere Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'architectureSidebar',
          position: 'left',
          label: 'Architecture',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/pvesphere/pvesphere',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/docs/tutorials/intro',
            },
            {
              label: 'API Documentation',
              to: '/docs/api/intro',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pvesphere/pvesphere',
            },
            {
              label: 'Issues',
              href: 'https://github.com/pvesphere/pvesphere/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Proxmox VE',
              href: 'https://www.proxmox.com/',
            },
            {
              label: 'License',
              href: 'https://github.com/pvesphere/pvesphere/blob/main/LICENSE',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PveSphere Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'go', 'typescript', 'javascript'],
    },
    // Algolia search configuration (optional)
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_SEARCH_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   contextualSearch: true,
    // },
  },

  plugins: [
    // Temporarily disabled due to build issues
    // [
    //   '@easyops-cn/docusaurus-search-local',
    //   {
    //     hashed: true,
    //     language: ['en', 'zh'],
    //     highlightSearchTermsOnTargetPage: true,
    //     explicitSearchResultPath: true,
    //   },
    // ],
  ],
};

export default config;

