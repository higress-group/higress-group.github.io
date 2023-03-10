import React from 'react';

export default {
  'en-us': {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
      ]
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Feel free to contact us via the following channel.',
      list: [
        {
          img: '/img/mailinglist.png',
          imgHover: '/img/mailinglist_hover.png',
          title: 'Mailing List',
          link: 'mailto:higress+subscribe@googlegroups.com'
        },
        {
          img: '//img.alicdn.com/imgextra/i1/O1CN01ACdB5r1JZHUeUgyrJ_!!6000000001042-0-tps-1022-1040.jpg',
          imgHover: '//img.alicdn.com/imgextra/i1/O1CN01ACdB5r1JZHUeUgyrJ_!!6000000001042-0-tps-1022-1040.jpg',
          title: 'dingTalk',
        }
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'You can always contribute to Higress.',
      list: [
        {
          img: '/img/channels/email_gray.svg',
          title: 'Mailing List',
          content: <span>Join our mailing list.</span>,
        },
        {
          img: '/img/channels/github_gray.svg',
          title: 'Issue',
          content: <span>Submit a <a href="https://github.com/alibaba/higress/issues/new">new issue</a>.</span>,
        },
        {
          img: '/img/documents.png',
          title: 'Documents',
          content: <span>Improve the <a href="https://github.com/higress-group/higress-group.github.io">documentation</a>.</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: 'Pull Request',
          content: <span>Create a brilliant <a href="https://github.com/alibaba/higress/pulls">pull request</a>.  </span>,
        },
      ],
    },
  },
  'zh-cn': {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
      list: [
      ]
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过一下方式联系我们。',
        list: [
            {
                img: '/img/mailinglist.png',
                imgHover: '/img/mailinglist_hover.png',
                title: '邮件列表',
                link: 'mailto:higress+subscribe@googlegroups.com'
            },
            {
                img: '//img.alicdn.com/imgextra/i1/O1CN01ACdB5r1JZHUeUgyrJ_!!6000000001042-0-tps-1022-1040.jpg',
                imgHover: '//img.alicdn.com/imgextra/i1/O1CN01ACdB5r1JZHUeUgyrJ_!!6000000001042-0-tps-1022-1040.jpg',
                title: '钉钉群(推荐)',
            },
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: '欢迎为 Higress 做贡献！',
      list: [
        {
          img: '/img/channels/email_gray.svg',
          title: '邮件列表',
          content: <span>加入我们的邮件列表。</span>,
        },
        {
          img: '/img/channels/github_gray.svg',
          title: '报告问题',
          content: <span>提交<a href="https://github.com/alibaba/higress/issues/new">新问题</a>。</span>,
        },
        {
          img: '/img/documents.png',
          title: '改进文档',
          content: <span>改进<a href="https://github.com/higress-group/higress-group.github.io">文档</a>。</span>,
        },
        {
          img: '/img/pullrequest.png',
          title: '提交 PR',
          content: <span>创建一个<a href="https://github.com/alibaba/higress/pulls">PR</a>。</span>,
        },
      ],
    },
  },
};
