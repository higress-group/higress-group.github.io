import type { Customer, Solution, ChooseReason, CommunityLink, ContributeLink } from "@/types"
import { getEntries } from "astro:content";

// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// 吊顶提示文案
export const TOPBAR = {
    "text": "云栖回顾 | 2024 云栖大会微服务和网关相关演讲材料",
    "mobileText": "云栖回顾 | 2024 云栖大会微服务和网关相关演讲材料",
    "link": "https://developer.aliyun.com/ebook/8379",
    "target": "_blank",
    "display": true
}


// TODO: 配置algolia
export const ALGOLIA = {
  appId: 'XLRZN94V02',
  apiKey: 'dc990c3b1509885bfe31b58063b60c51',
  indexName: 'higress'
}
// 文档根据版本区分的提示banner
export const DOCS_BANNER = {
  latest: '',
  next: '',
  v1: '',
  v2: '',
}
// TODO: 文档Header数据
export const DOCS_ITEM = [
  {
    key: "latest",
    label: "最新版（Latest）",
    target: "_self",
    link: "/docs/latest/overview/what-is-higress/",
    translations: {
      en: "Latest",
      link: "/en/docs/latest/overview/what-is-higress/",
    }
  },
];

export const MEDIARESOURCE = null;

// 主要特性
export const CHOOSE_REASON_LIST: ChooseReason[] = [
  {
    title: "home.website.edge.1.title",
    svgKey: "adaptive",
    description: "home.website.edge.1.description",
  },
  {
    title: "home.website.edge.2.title",
    svgKey: "standard",
    description: "home.website.edge.2.description",
  },
  {
    title: "home.website.edge.3.title",
    svgKey: "timeTested",
    description: "home.website.edge.3.description",
  },
  {
    title: "home.website.edge.4.title",
    svgKey: "variety",
    description: "home.website.edge.4.description",
  },
]

// TODO: 合作客户反馈
export const COMPANY_CUSTOMERS: Customer[] = [
  {
    name: "cloud.feedback.soul.name",
    theme: "gray",
    logo: "https://img.alicdn.com/imgextra/i2/O1CN01GZhEqR1bY3dY5SOuY_!!6000000003476-2-tps-160-130.png",
    href: "https://code.alibaba-inc.com/goat/astro-nacos",
    description: "cloud.feedback.soul.description",
  },
  {
    name: "cloud.feedback.laidian.name",
    theme: "dark",
    logo: "https://img.alicdn.com/imgextra/i3/O1CN010ulPrT1M45UNBCAXe_!!6000000001380-2-tps-160-130.png",
    href: "https://developer.aliyun.com/article/855894",
    description: "cloud.feedback.laidian.description",
  },
  {
    name: "cloud.feedback.zeekr.name",
    theme: "light",
    logo: "https://img.alicdn.com/imgextra/i2/O1CN01zluUCK29BKvOCojPr_!!6000000008029-2-tps-160-130.png",
    href: "https://developer.aliyun.com/article/1173573",
    description: "cloud.feedback.zeekr.description",
  },
  {
    name: "cloud.feedback.ykc.name",
    theme: "gray",
    logo: "https://img.alicdn.com/imgextra/i1/O1CN01LWMfwx1Ggf9VGmXBF_!!6000000000652-2-tps-160-130.png",
    href: "https://developer.aliyun.com/article/1172572?groupCode=mse",
    description: "cloud.feedback.ykc.description",
  },
  {
    name: "cloud.feedback.bosideng.name",
    theme: "dark",
    logo: "https://img.alicdn.com/imgextra/i2/O1CN01d7EDXs1HLsnXSTgGG_!!6000000000742-2-tps-160-130.png",
    href: "https://developer.aliyun.com/article/1147221?groupCode=mse",
    description: "cloud.feedback.bosideng.description",
  },
  {
    name: "cloud.feedback.skechers.name",
    theme: "light",
    logo: "https://img.alicdn.com/imgextra/i1/O1CN01P1k9gA1YpVsxPYzAw_!!6000000003108-2-tps-160-130.png",
    href: "https://developer.aliyun.com/article/844814",
    description: "cloud.feedback.skechers.description",
  },
  {
    name: "cloud.feedback.very.name",
    theme: "gray",
    logo: "https://img.alicdn.com/imgextra/i1/O1CN01DevTFA28W7HY1JFC6_!!6000000007939-2-tps-160-130.png",
    href: "https://developer.aliyun.com/article/992090",
    description: "cloud.feedback.very.description",
  },
  {
    name: "cloud.feedback.helian.name",
    theme: "dark",
    logo: "https://img.alicdn.com/imgextra/i3/O1CN01YmUBmh1snwqr4kRot_!!6000000005812-2-tps-544-180.png",
    href: "https://developer.aliyun.com/article/1095573",
    description: "cloud.feedback.helian.description",
  },
  {
    name: "cloud.feedback.zhijin.name",
    theme: "light",
    logo: "https://img.alicdn.com/imgextra/i3/O1CN015GIqM31qsPTObt2CV_!!6000000005551-2-tps-544-180.png",
    href: "https://developer.aliyun.com/article/1064881",
    description: "cloud.feedback.zhijin.description",
  },
];

// 解决方案列表
export const SOLUTION_LIST: Solution[] = [
  {
    checked: true,
    src: "https://mp.weixin.qq.com/s/Ks1iOCQFFMyLJp8C7HtpaA",
    introduce: "Sealos几乎打爆了市面上所有开源网关 ... 需要有支撑数十万条 Ingress 的能力... 在我们的场景里面能够达到生产可用的目前只有 Higress...我们之前的代码都是用的Nginx Ingress，所以几乎没有任何迁移成本，直接几分钟的升级就可以搞定",
    logo: 'https://img.alicdn.com/imgextra/i2/O1CN01ArAIoX1Ca0zd6BlrB_!!6000000000096-2-tps-1058-450.png',
    user: '方海涛',
    userInfo: 'Sealos 创始人，环界云计算 CEO',
    speed: '40',
    unit:'x',
    speedDes: ['40倍 路由变更生效速度']
  },
  {
    checked: false,
    src: "https://mp.weixin.qq.com/s/yg_-MuI2psneWPEUBCP96w",
    introduce: "费芮互动通过 Higress 解决了原本 Nginx Ingress 网关的诸多痛点，性能提升90%，响应时间下降50%，并大幅提升业务入口的稳定及安全性，高效支撑每日1亿+粉丝交互， 4万+线下门店、每月3000万+笔的移动支付需求。",
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN01OItOyX1iugZcRz2jC_!!6000000004473-2-tps-160-130.png',
    user: '戴喜军',
    userInfo: '上海费芮网络科技系统运维副总监',
    speed: '90',
    unit:'%',
    speedDes: ['90% 性能提升','50% HTTPS 延时下降']
  },
  {
    checked: false,
    src: "https://mp.weixin.qq.com/s/AzFfHEW9_vBLbUjHsU_iow",
    introduce: "美洽是全球智能云客服服务商，除了阿里云，美洽在国外其他云上也有部署业务，希望统一多云网关技术架构，Higress 在阿里云上有成熟的企业版产品，又有开源版，正好符合... 基于 Websocket  进行 AI 客服长连接保持和消息通信，非常关注网关更新网关配置所带来的副作用 ... 在迁移到 Higress 上之后 ，彻底解决配置更新 reload 带来的断线重连风暴问题",
    logo: 'https://img.alicdn.com/imgextra/i1/O1CN010vTgRy1eHWEx9uMCX_!!6000000003846-2-tps-760-360.png',
    user: '古建国',
    userInfo: '美洽科技架构师',
    speed: '100',
    unit:'%',
    speedDes: ['100% 连接无损的配置热更新']
  },
];

// 文档贡献板块的链接列表
export const getCommunityLinkList = (t: Function): CommunityLink[] => [
  {
    href: `/blog/`,
    text: t("rightSidebar.readBlog"),
    icon: "basil:document-outline",
  },
  {
    // TODO: 替换文档链接
    href: "https://github.com/higress-group/higress-group.github.io/tree/develop-astro-higress/src/content/docs",
    text: t("rightSidebar.github"),
    icon: "ant-design:github-filled",
  },
];



// 文档社区板块的链接列表
export const getContributeLinkList = (lang: string, editHref: string, feedbackUrl: string, t: Function): ContributeLink[] => [
  {
    // TODO: 替换贡献者指南链接
    href: `/${lang}/developers/contributor-guide/guide_dev/`,
    text: t("rightSidebar.contributorGuides"),
    depth: 2,
    icon: "tabler:book",
  },
  {
    href: editHref,
    text: t("rightSidebar.editPage"),
    depth: 2,
    icon: "tabler:pencil",
  },
  {
    href: feedbackUrl,
    text: t("rightSidebar.feedbackIssue"),
    depth: 2,
    icon: "ant-design:github-filled",
  },
];

export const i18nMap = {
  "blog": {
    article: 'blog.article.technical',
    case: 'blog.article.case.best.practices',
    ecosystem: 'blog.article.ecosystem.articles',
    event: 'blog.article.event.articles',
    all: 'blog.all.articles'
  },
  "news": {
    announcement: 'blog.activity.community.announcement',
    release: 'blog.activity.release.statement',
    committer: 'page.blog.news.personnel.promotion',
    cooperate: 'page.blog.news.community.cooperation',
    all: 'page.blog.news.all'
  },
  "activity": {
    'announcement': 'blog.activity.community.announcement',
    'activity-preview': 'blog.activity.preview.event',
    'activity-detail': 'blog.activity.detail.event',
    'all': 'blog.activity.all.event'

  },
  "wuyi": {
      'expertConsultation': 'wuyi.meet-professor.title',
  },
};

export const WUYI_CATEGORY = [
  {
      type: 'expertConsultation',
      title: '全部文章',
      href: '/wuyi/'
  },
];

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

export const NEWS_CATEGORY = [
  {
    type: 'announcement',
    title: '社区公告',
    href: '/news/announcement'
  },
  {
    type: 'release',
    title: '发布声明',
    href: '/news/release'
  },
  {
    type: 'committer',
    title: '人员晋升',
    href: '/news/committer'
  },
  {
    type: 'cooperate',
    title: '社区合作',
    href: '/news/cooperate'
  },
  {
    type: 'all',
    title: '全部新闻',
    href: '/news/all'
  }
];

export const ACTIVITY_CATEGORY = [
  {
    type: 'announcement',
    title: '社区公告',
    href: '/activity/announcement'
  },
  {
    type: 'activity-preview',
    title: '活动预告',
    href: '/activity/activity-preview'
  },
  {
    type: 'activity-detail',
    title: '活动详情',
    href: '/activity/activity-detail'
  },
  {
    type: 'all',
    title: '全部活动',
    href: '/activity/all'
  }
];

// TODO: 设置运营位
export const HEADER_ACTIVITY_CARD = [
    {
        "collection": "blog",
        "slug": "higress-gvr7dx_awbbpb_im44tpldqyt8c97d",
        "description": "API赋能AI，AI网关零代码解决AI幻觉问题",
        "imageUrl": "https://img.alicdn.com/imgextra/i4/O1CN01bGnAVW1pFeLFnlaQL_!!6000000005331-2-tps-508-370.png"
    },
    {
        "collection": "blog",
        "slug": "higress-gvr7dx_awbbpb_picigqfume3k5lf3",
        "description": "Higress 发布 v1.4，开放 AI 网关能力，增强云原生能力",
        "imageUrl": "https://img.alicdn.com/imgextra/i4/O1CN01zfayJW1Lhe4kliPv9_!!6000000001331-2-tps-508-370.png"
    }
];

export const BLOG_IMAGE_SOURCE = [
  "https://img.alicdn.com/imgextra/i1/O1CN0114MKuq1qKyZ0heOq7_!!6000000005478-2-tps-304-179.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01E4YfjD1WmBmWymUJC_!!6000000002830-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i1/O1CN01o9sjZA1Efd1bMrl0C_!!6000000000379-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i1/O1CN011wgjV01CZ695M8OEB_!!6000000000094-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01swoIUH1csxKPKfwJE_!!6000000003657-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i4/O1CN01nIy1Wf1DjSiy0TCxe_!!6000000000252-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i3/O1CN019EjKf11Dj0KQKkP3e_!!6000000000251-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01l7gM7r1Y4L5ngHWb8_!!6000000003005-2-tps-608-358.png",
  "https://img.alicdn.com/imgextra/i2/O1CN01oWfLB51kfENwUFaQw_!!6000000004710-2-tps-608-358.png"
];

export const MICROSERVICE_SOLUTION = [
  { title: 'Spring Cloud Alibaba SEATA', image: '/assets/2-1.jpg', detailTitle: "home.introduction.detailTitle.1", detail: 'home.introduction.detail.1' },
  { title: 'Spring Cloud Alibaba Sentinel', image: '/assets/2-2.jpg', detailTitle: 'home.introduction.detailTitle.2', detail: 'home.introduction.detail.2' },
  { title: 'Spring', image: '/assets/2-3.jpg', detailTitle: 'home.introduction.detailTitle.3', detail: 'home.introduction.detail.3' },
  { title: 'Spring Cloud Alibaba Nacos', image: '/assets/2-4.jpg', detailTitle: 'home.introduction.detailTitle.4', detail: 'home.introduction.detail.4' },
  { title: 'Spring Cloud Alibaba Nacos', image: '/assets/2-5.jpg', detailTitle: 'home.introduction.detailTitle.5', detail: 'home.introduction.detail.5' },
  { title: 'Spring Cloud Alibaba Nacos', image: '/assets/2-6.jpg', detailTitle: 'home.introduction.detailTitle.6', detail: 'home.introduction.detail.6' },
  { title: 'Spring Cloud Alibaba Nacos', image: '/assets/2-7.jpg', detailTitle: 'home.introduction.detailTitle.7', detail: 'home.introduction.detail.7' },
];

export const categoryMap = {
  article: "blog_article",
  case: "blog_case",
  ecosystem: "blog_ecosystem",
  release: "news_release",
  committer: "news_personnel",
  announcement: "news_announcement",
  cooperate: "news_cooperate",
  "activity-preview": "activity_activity-preview",
  "activity-detail": "activity_activity-preview",
};

export const ProductDisplayCardData = [
  {
    cover: "https://img.alicdn.com/imgextra/i2/O1CN01k1amBw1U0RHtPPlvH_!!6000000002455-0-tps-1000-1500.jpg",
    coverPosition: "bottom",
    title: "Spring",
    body: "home.introduction.card.des",
  },
  {
    cover: "https://img.alicdn.com/imgextra/i3/O1CN01WxXILZ1C0I4pkZUyD_!!6000000000018-0-tps-1000-1500.jpg",
    coverPosition: "bottom",
    title: "Spring Boot",
    body: "home.introduction.card.des",
  },
  {
    cover: "https://img.alicdn.com/imgextra/i4/O1CN01ye2eKa1obLWDSsIiE_!!6000000005243-0-tps-1000-1500.jpg",
    coverPosition: "bottom",
    title: "Spring Cloud Alibaba",
    body: "home.introduction.card.sca.des",
  },
  {
    cover: "https://img.alicdn.com/imgextra/i2/O1CN01psWBwW1tzgeAxapCz_!!6000000005973-0-tps-2448-3672.jpg",
    coverPosition: "bottom",
    title: "Spring Cloud Alibaba Nacos",
    body: "home.introduction.card.Nacos.des",
  },
  {
    cover: "https://img.alicdn.com/imgextra/i2/O1CN01HzKXZY29J7h0UIGJ5_!!6000000008046-0-tps-1000-1500.jpg",
    coverPosition: "bottom",
    title: "Spring Cloud Alibaba Sentinel",
    body: "home.introduction.card.Sentinel.des",
  },
  {
    cover: "https://img.alicdn.com/imgextra/i3/O1CN01bJroU81BzNHfeB3jN_!!6000000000016-0-tps-1000-1500.jpg",
    coverPosition: "bottom",
    title: "Spring Cloud Alibaba Seata",
    body: "home.introduction.card.Seata.des",
  },
  {
    cover: "https://img.alicdn.com/imgextra/i2/O1CN01l9eXcR1LJN7PxX79e_!!6000000001278-0-tps-1000-1500.jpg",
    coverPosition: "bottom",
    title: "Spring Cloud Alibaba RocketMQ",
    body: "home.introduction.card.RocketMQ.des",
  },
];

//获取顶部导航悬浮层 博客列表信息
export const getBlogContentList = async (blogList = []) => {

  const simplifiedPosts = blogList.map((item) => ({
    collection: item.collection,
    slug: item.slug,
  }));
  const blogDescrip = blogList.map((item) => item.description);

  const blogImgs = blogList.map((item) => item.imageUrl);
  const posts = (await getEntries(simplifiedPosts as any)) || [];

  return {
    blogDescrip,
    blogImgs,
    posts,
  };
}

export const COMMUNITY_MENU_LIST = [
  {
    label: "社区",
    translations: {
      en: "COMMUNITY",
    },
    children: [
      {
        label: "报告文档问题",
        target: "_blank",
        link: "https://github.com/higress-group/higress-group.github.io/issues",
        translations: {
          en: "Report a doc issue",
        },
      },
      {
        label: "贡献社区",
        target: "_self",
        link: "/docs/developers/contributor-guide/guide_dev/",
        translations: {
          en: "Contribute community",
        },
      },
      {
        label: "贡献者",
        target: "_blank",
        link: "https://github.com/alibaba/higress/graphs/contributors",
        translations: {
          en: "Contributors",
        },
      },
    ],
  },
  {
    label: "资源",
    translations: {
      en: "Resources",
    },
    children: [
      {
        label: "博客",
        target: "_self",
        link: "/blog/",
        translations: {
          en: "Blog",
        },
      },
      {
        label: "电子书",
        target: "_self",
        link: "/docs/ebook/wasm14/",
        translations: {
          en: "E-book",
        },
      },
    ],
  },
];


// Cloud页面价格 后付费的卡片内容
export const getCloudPostpaidData = (t: Function) => [
  {
    title: t("cloud.introduce.free.pkg"),
    price: t("cloud.introduce.free.price"),
    priceDesc: [t("cloud.introduce.free.feature")],
    linkName: t("cloud.introduce.free.link"),
    link: "https://www.aliyun.com/product/apigateway?spm=higress-website.topbar.0.0.0",
    feature: [
      t("cloud.introduce.free.discount.1"),
    ],
  },
  {
    title: t("cloud.introduce.regular.pkg"),
    priceDesc: [t("cloud.introduce.regular.feature")],
    price: '¥0.84',
    priceSupply: t("cloud.introduce.regular.price_supply"),
    linkName: t("cloud.introduce.regular.link"),
    link: "https://www.aliyun.com/product/aliware/mse?spm=higress.cloud.topbar.0.0.0",
    feature: [
      t("cloud.introduce.regular.discount.1"),
    ],
  },
  {
    title: t("cloud.introduce.serverless.pkg"),
    priceDesc: [
      t('cloud.introduce.serverless.priceDesc'),
    ],
    price: '¥0.135',
    priceSupply: t('cloud.introduce.serverless.price_supply'),
    linkName: t("cloud.introduce.regular.link"),
    link: "https://www.aliyun.com/product/aliware/mse?spm=higress.cloud.topbar.0.0.0",
    feature: [t('cloud.introduce.serverless.feature')],
  },
];

// Cloud页面价格 资源包的卡片内容

export const getCloudResourcePackData = (t: Function) => [
  {
    title: t("cloud.introduce.free.pkg"),
    price: t("cloud.introduce.free.price"),
    unit: "",
    priceDesc: [t("cloud.introduce.free.feature")],
    linkName: t("cloud.introduce.free.link"),
    link: "https://www.aliyun.com/product/apigateway?spm=higress-website.topbar.0.0.0",
    feature: [
      t("cloud.introduce.free.discount.1"),
    ],
  },
  {
    title: t("cloud.introduce.regular.pkg"),
    priceDesc: [t("cloud.introduce.regular.feature")],
    price: '¥422',
    priceSupply: t("cloud.introduce.regular.unit"),
    priceDes: t('cloud.introduce.regular.des'),
    linkName: t("cloud.introduce.regular.link"),
    link: "https://www.aliyun.com/product/aliware/mse?spm=higress.cloud.topbar.0.0.0",
    feature: [
      t("cloud.introduce.regular.discount.1"),
      t("cloud.introduce.regular.feature.1"),
      t("cloud.introduce.regular.feature.2"),
    ],
  },
  {
    title: t("cloud.introduce.serverless.pkg"),
    priceDesc: [
      t('cloud.introduce.serverless.priceDesc'),
    ],
    price: '¥92 ',
    priceSupply: '元起',
    linkName: t("cloud.introduce.regular.link"),
    link: "https://www.aliyun.com/product/aliware/mse?spm=higress.cloud.topbar.0.0.0",
    feature: [
      t('cloud.introduce.serverless.feature'),
      t('cloud.introduce.serverless.feature.1'),
      t('cloud.introduce.serverless.feature.2'),
    ],
  },
];

// 版本功能对比
export const versionDataSource = [
  {
    title: "易用性", data: [
      {
        name: {
          title: '自动化运维',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: ['免运维']
        },
      },
      {
        name: {
          title: '多种服务发现能力',
        },
        free: {
          checked: '',
          des: '自行实现'
        },
        speciality: {
          checked: true,
          des: ['支持 K8s、Nacos、Zookeeper、DNS、固定IP及其他云产品']
        },
        serverless: {
          checked: true,
          des: ['支持 K8s、Nacos、Zookeeper、DNS、固定IP及其他云产品']
        },
      },
      {
        name: {
          title: '协议自动转化（HTTPS转Dubbo)',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: [],
        },
      },
      {
        name: {
          title: 'RAM鉴权和权限管理',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '云产品集成',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: ['和阿里云 MSE 注册配置、微服务治理等产品深度集成']
        },
        serverless: {
          checked: true,
          des: ['和阿里云 MSE 注册配置、微服务治理等产品深度集成']
        },
      },
    ]
  },
  {
    title: "可用性", data: [
      {
        name: {
          title: 'SLA',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: '',
          des: ['99.95%'],
        },
        serverless: {
          checked: '',
          des: ['99.9%']
        },
      },
      {
        name: {
          title: '多节点容灾',
          des: ''
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '多可区容灾',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '推空保护',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '过载保护',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '限流降级',
        },
        free: {
          checked: true,
          des: '全局限流，需要自建 Redis'
        },
        speciality: {
          checked: true,
          des: ['']
        },
        serverless: {
          checked: true,
          des: ['']
        },
      },
      {
        name: {
          title: '故障自动检测和恢复',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '自动扩缩容',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: false,
          des: []
        },
        serverless: {
          checked: true,
          des: ['内置扩容上限，避免恶意攻击导致资损']
        },
      },
    ]
  },
  {
    title: "安全性", data: [
      {
        name: {
          title: 'IP黑白名单',
        },
        free: {
          checked: true,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '消费者鉴权',
        },
        free: {
          checked: true,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '全局认证及鉴权',
        },
        free: {
          checked: true,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: 'Waf防护',
        },
        free: {
          checked: true,
          des: '开源方案，静态规则'
        },
        speciality: {
          checked: true,
          des: ['商业方案，动态运营规则']
        },
        serverless: {
          checked: true,
          des: ['商业方案，动态运营规则']
        },
      },
    ]
  },
  {
    title: "性能", data: [
      {
        name: {
          title: 'HTTPS 请求吞吐量提升',
        },
        free: {
          checked: '',
          des: '自行调优',
        },
        speciality: {
          checked: '',
          des: ['86%','软硬一体技术和 Envoy 内核调优']
        },
        serverless: {
          checked: '',
          des: ['86%','软硬一体技术和 Envoy 内核调优']
        },
      },
      {
        name: {
          title: 'RT 下降',
        },
        free: {
          checked: '',
          des: '自行调优',
        },
        speciality: {
          checked: '',
          des: ['86%','软硬一体技术和 Envoy 内核调优'],
        },
        serverless: {
          checked: '',
          des: ['86%','软硬一体技术和 Envoy 内核调优'],
        },
      },
    ]
  },
  {
    title: "可观测性", data: [
      {
        name: {
          title: '基础监控',
          des:'(基于 Prometheus + Grafana 的监控套件)'
        },
        free: {
          checked: true,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '高级监控',
          des:'(可对QPS、请求耗时、后端服务成功率等指标进行监控)',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '自定义告警',
          des:'(通过钉钉、电话、短信等告警渠道)',
        },
        free: {
          checked: false,
          des: ''
        },
        speciality: {
          checked: true,
          des: []
        },
        serverless: {
          checked: true,
          des: []
        },
      },
    ]
  },
]

export const advantageSource = [
  {
    title: "基础架构", data: [
      {
        name: {
          title: '内核',
        },
        higress: {
          checked: '',
          des: ['基于 Envoy 和 Istio 实现的云原生 API 网关']
        },
        nginx: {
          checked: '',
          des: ['独立的高性能服务器软件']
        },
        scg: {
          checked: '',
          des: ['基于 Spring Framework 的微服务网关']
        },
      },
      {
        name: {
          title: '架构',
        },
        higress: {
          checked: '',
          des: ['流量网关、微服务网关、安全网关三合一','(缩短网关转化链路、降低故障排查难度)']
        },
        nginx: {
          checked: '',
          des: ['流量网关']
        },
        scg: {
          checked: '',
          des: ['微服务网关']
        },
      },
      {
        name: {
          title: '遵循 Ingress 标准，提供标准化的扩展机制',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: true,
          des: ['基于 Ingress Nginx']
        },
        scg: {
          checked: false,
          des: ['暂未见公开的支持计划'],
        },
      },
      {
        name: {
          title: '遵循 Gateway API 标准',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: true,
          des: ['基于 Ingress Nginx，有支持计划']
        },
        scg: {
          checked: false,
          des: ['暂未见公开的支持计划']
        },
      },
    ]
  },
  {
    title: "AI 特性", data: [
      {
        name: {
          title: 'AI 代理插件',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的相关能力'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
      },
      {
        name: {
          title: 'AI 内容审核插件',
          des: ''
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的相关能力'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
      },
      {
        name: {
          title: 'AI 统计插件',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的相关能力'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
      },
      {
        name: {
          title: 'AI 限流插件',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的相关能力'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
      },
      {
        name: {
          title: 'AI 开发插件集',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的相关能力'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
      },
    ]
  },
  {
    title: "云原生特性", data: [
      {
        name: {
          title: '无损变更',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['通常不直接集成服务发现，需要配合其他组件']
        },
        scg: {
          checked: false,
          des: ['暂未见相关能力']
        },
      },
      {
        name: {
          title: '支持 Nacos、K8s Service 等多种注册中心',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['通常不直接集成服务发现，需要配合其他组件']
        },
        scg: {
          checked: false,
          des: ['暂未见相关能力']
        },
      },
      {
        name: {
          title: '限流防护',
        },
        higress: {
          checked: true,
          des: ['支持 Header/URL 参数/IP 粒度的全局统一限流']
        },
        nginx: {
          checked: false,
          des: ['有较高的集成开发成本']
        },
        scg: {
          checked: false,
          des: ['通常不直接集成服务发现，需要配合其他组件']
        },
      },
      {
        name: {
          title: 'HTTP 转 Dubbo 协议',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
        scg: {
          checked: false,
          des: ['暂未见公开的相关能力']
        },
      },
      {
        name: {
          title: '可观测（metrics/logging/tracing）',
        },
        higress: {
          checked: true,
          des: ['开箱即用']
        },
        nginx: {
          checked: false,
          des: ['需自行搭建']
        },
        scg: {
          checked: false,
          des: ['需自行搭建']
        },
      },
      {
        name: {
          title: '极简部署',
        },
        higress: {
          checked: true,
          des: ['不依赖 K8s，Docker 容器即可启动']
        },
        nginx: {
          checked: true,
          des: []
        },
        scg: {
          checked: true,
          des: []
        },
      },
    ]
  },
  {
    title: "性能", data: [
      // {
      //   name: {
      //     title: 'QPS 性能',
      //   },
      //   higress: {
      //     checked: '',
      //     des: [],
      //   },
      //   nginx: {
      //     checked: '',
      //     des: []
      //   },
      //   scg: {
      //     checked: '',
      //     des: []
      //   },
      // },
      {
        name: {
          title: '超大规模路由配置性能优化',
        },
        higress: {
          checked: true,
          des: ['10000 个路由，生效时间3秒'],
        },
        nginx: {
          checked: false,
          des: ['Ingress Nginx 为例，10000个路由，生效时间1分钟'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的优化能力'],
        },
      },
      {
        name: {
          title: 'CPU/内存成本优化',
        },
        higress: {
          checked: true,
          des: ['对比 Ingress Nginx，CPU 成本节省50%，内存成本节省90%'],
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的优化能力'],
        },
        scg: {
          checked: false,
          des: ['暂未见公开的优化能力'],
        },
      },
    ]
  },
  {
    title: "扩展性", data: [
      {
        name: {
          title: 'Lua',
          des:''
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: true,
          des: []
        },
        scg: {
          checked: false,
          des: ['通过 Java 编程模型进行扩展']
        },
      },
      {
        name: {
          title: 'WASM',
          des:'',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['暂未见公开的支持计划']
        },
        scg: {
          checked: false,
          des: ['通过 Java 编程模型进行扩展']
        },
      },
      {
        name: {
          title: '热更新',
          des:'',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['需要 reload']
        },
        scg: {
          checked: false,
          des: ['需要重启网关']
        },
      },
    ]
  },
  {
    title: "安全性", data: [
      {
        name: {
          title: 'IP 黑白名单',
          des:''
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: true,
          des: []
        },
        scg: {
          checked: true,
          des: []
        },
      },
      {
        name: {
          title: '消费者认证鉴权',
          des:'（key-auth/hmac-auth/jwt-auth等）',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['需要额外配置安全模块']
        },
        scg: {
          checked: false,
          des: ['支持安全特性，但需要额外配置']
        },
      },
      {
        name: {
          title: '自建服务鉴权',
          des:'',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['需要额外配置安全模块']
        },
        scg: {
          checked: false,
          des: ['支持安全特性，但需要额外配置']
        },
      },
      {
        name: {
          title: 'OIDC 认证',
          des:'',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['需要额外配置安全模块']
        },
        scg: {
          checked: false,
          des: ['支持安全特性，但需要额外配置']
        },
      },
      {
        name: {
          title: 'WAF 防护',
          des:'',
        },
        higress: {
          checked: true,
          des: []
        },
        nginx: {
          checked: false,
          des: ['需要额外配置安全模块']
        },
        scg: {
          checked: false,
          des: ['支持安全特性，但需要额外配置']
        },
      },
    ]
  },
]
