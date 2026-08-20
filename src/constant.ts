export const BLOG_CATEGORY = [
  {
    type: 'all',
    title: '全部文章',
    href: '/blog/'
  },
  {
    type: 'article',
    title: '技术文章',
    href: '/blog/article/'
  },

  {
    type: 'ecosystem',
    title: '生态文章',
    href: '/blog/ecosystem/'
  },
  {
    type: 'case',
    title: '最佳实践',
    href: '/blog/case/'
  },
  {
    type: 'event',
    title: '社区活动',
    href: '/blog/event/'
  },
];

export const SPM = {
  website: "higress-website.topbar.0.0.0",
  console: "higress-console.topbar.0.0.0",
  github: "higress-github.topbar.0.0.0"
}

export const LINKS = {
  higressConsole: `https://demo.higress.io?spm=${SPM.console}`,
  higressGithub: `https://github.com/alibaba/higress?spm=${SPM.github}`,
  himarketGithub: `https://github.com/higress-group/himarket?spm=${SPM.github}`,
  himarketConsole: `http://himarket.higress.ai?spm=${SPM.console}`,
  enterprise: `https://www.aliyun.com/product/api-gateway/ai-gateway?spm=${SPM.website}`
}

// 吊顶提示文案
export const TOPBAR = {
  "text": "下载量破万，《AI 原生应用架构白皮书》免费下载",
  "mobileText": "下载量破万，《AI 原生应用架构白皮书》免费下载",
  "link": "https://developer.aliyun.com/ebook/8479",
  "target": "_blank",
  "display": true
}
