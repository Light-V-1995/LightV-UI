module.exports = {
  base:'/LightV-UI/',
  title: 'LightV UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/Light-V-1995/LightV-UI/tree/master' },
    ],
    sidebar: [
      {
        title:'入门',
        collapsable: true, // 可选的, 默认值是 true,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children: [
          '/components/button',
          '/components/input',
          '/components/layout',
          '/components/tabs',
          '/components/popover',
          '/components/toast',
          '/components/collapse',
          '/components/grid',
        ],
      }
    ],
  }
}