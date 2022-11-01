export default {
    'en-us': {
        sidemenu: [
            {
                title: 'Overview',
                children: [
                    {
                        title: 'What is Higress?',
                        link: '/en-us/docs/overview/what-is-higress.html',
                    },
                    {
                        title: 'Terminology',
                        link: '/en-us/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/en-us/docs/overview/faq.html',
                    }
                ],
            },
            {
              title: 'User Doc',
              children: [
                  {
                      title: 'Quick Start',
                      link: '/en-us/docs/user/quickstart.html',
                  },
                  {
                      title: 'Parameters Configurations Guide',
                      link: '/en-us/docs/user/configurations.html',
                  },
                  {
                    title: 'Ingress Guide',
                    children: [
                        {
                            title: 'Nginx Ingress Compatibility Description',
                            link: '/en-us/docs/user/nginx-ingress.html',
                        },
                    ]
                },
              ],
            },
            {
              title: 'Developer Guide',
              children: [
                  {
                      title: 'Architecture Description',
                      link: '/en-us/docs/dev/architecture.html',
                  },
              ],
            },
            {
              title: 'Ops Guide',
              children: [
                  {
                      title: 'Deploy',
                      children: [
                          {
                              title: 'Deploy Guide',
                              link: '/en-us/docs/ops/deploy-guide-beginner.html',
                          },
                          {
                              title: 'Deploy by Helm',
                              link: '/en-us/docs/ops/deploy-by-helm.html',
                          },
                      ]
                  }
              ]
            },
        ],
        barText: 'Documentation'
    },
    'zh-cn': {
        sidemenu: [
            {
                title: '概述',
                children: [
                    {
                        title: 'Higress 是什么？',
                        link: '/zh-cn/docs/overview/what-is-higress.html',
                    },
                    {
                        title: '术语表',
                        link: '/zh-cn/docs/overview/terminology.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/zh-cn/docs/overview/faq.html',
                    }
                ],
            },
            {
              title: '用户文档',
              children: [
                  {
                      title: '快速启动',
                      link: '/zh-cn/docs/user/quickstart.html',
                  },
                  {
                      title: '参数配置',
                      link: '/zh-cn/docs/user/configurations.html',
                  },
                  {
                      title: 'Ingress指南',
                      children: [
                          {
                              title: 'Nginx Ingress兼容说明',
                              link: '/zh-cn/docs/user/nginx-ingress.html',
                          },
                      ]
                  },
                ]
            },
            {
              title: '开发者指南',
              children: [
                  {
                    title: '架构说明',
                    link: '/zh-cn/docs/dev/architecture.html',
                  },
              ],
            },
            {
              title: '运维指南',
              children: [
                  {
                      title: '部署',
                      children: [
                          {
                              title: '新人文档',
                              link: '/zh-cn/docs/ops/deploy-guide-beginner.html',
                          },
                          {
                              title: 'Helm 部署',
                              link: '/zh-cn/docs/ops/deploy-by-helm.html',
                          },
                      ]
                  }
              ]

          },
        ],
        barText: '文档',
    },
};
