import 'babel-polyfill'

window.docute.init({
  plugins: [
    window.docuteIframe()
  ],
  icons: [{
    icon: 'github',
    label: 'Star me on GitHub',
    link: 'https://github.com/mengqingshen'
  }, {
    icon: 'edit',
    label: 'Edit this page',
    link: 'https://github.com/mengqingshen/generator-rick-doc/tree/master/docs'
  }],
  url: '.',
  routerMode: 'hash',
  sidebar: true,
  disableSidebarToggle: false,
  tocVisibleDepth: 3,
  nav: [
    {
      title: '首页',
      path: '/'
    },
    {
      title: '起步',
      path: '/start',
      source: '/docs/start.md'
    },
    {
      title: '手册',
      path: '/norms',
      source: '/docs/norms.md'
    }
  ]
})
