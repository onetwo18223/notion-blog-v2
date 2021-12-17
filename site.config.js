module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '54a1218dae2048f5ba94abc9f5aa0fcc',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'qhlb的博客',
  domain: 'qhlb.monster',
  author: 'qhlb',

  // open graph metadata (optional)
  description: '菜饼同学的技术博客',
  socialImageTitle: 'Transitive Bullshit',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: null,
  github: 'onetwo18223',
  wechatPublicName: null,
  wechatPublicURL: null,
  notionPublic: 'https://qhlb.monster',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'onetwo18223/notion-blog-v2',
  utterancesGitHubLabel: '博客评论',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/os': 'ff8a4877c04f42eda0d050547c117ea5',
    // '/closure': 'C-6cfc812927c44a688e874d6212265b30'
  },
  showPageAsideSocials: true,
}
