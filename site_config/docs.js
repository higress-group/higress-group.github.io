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
                        title: 'Roadmap',
                        link: '/zh-cn/docs/overview/roadmap.html',
                    },
                    {
                        title: 'FAQ',
                        link: '/zh-cn/docs/overview/faq.html',
                    },
                    {
                        title: '术语表',
                        link: '/zh-cn/docs/overview/terminology.html',
                    },
                ],
            },
            {
              title: '用户指南',
              children: [
                  {
                      title: '快速开始',
                      link: '/zh-cn/docs/user/quickstart.html',
                  },
                  {
                      title: '最佳实践示例',
                      children: [
                          {
                              title: '使用 GO 语言开发 WASM 插件',
                              link: '/zh-cn/docs/user/wasm-go.html',
                          },
                          {
                              title: '通过 OpenKruise Rollout 实现灰度发布',
                              link: '/zh-cn/docs/user/kruise-rollout.html',
                          },
                          {
                              title: '配置 Ingress 转发给注册在 Nacos 的服务',
                              link: '/zh-cn/docs/user/nacos-route.html',
                          },
                          {
                              title: '实现 SpringCloud 服务发现和路由',
                              link: '/zh-cn/docs/user/spring-cloud.html',
                          },
                          {
                              title: '实现 Dubbo 服务发现和路由',
                              link: '/zh-cn/docs/user/dubbo.html',
                          },
                       ],
                  },
                  {
                    title: '文档陆续增加中...',
                    children: [
                      {
                        title: '基于 Prometheus 实现入口流量观测',
                        link: '/zh-cn/docs/user/prometheus.html',
                      },
                      {
                        title: '对接 OpenSergo 实现全链路灰度',
                        link: '/zh-cn/docs/user/opensergo-gray.html',
                      },
                      {
                        title: '基于 Sentinel 实现入口熔断限流',
                        link: '/zh-cn/docs/user/sentinel.html',
                      },
                      {
                        title: '开启 WAF 防护的最佳实践',
                        link: '/zh-cn/docs/user/waf.html',
                      },
                    ],
                  },
                  {
                      title: '参考手册',
                      children: [
                          {
                              title: 'Ingress Annotaion 配置说明',
                              link: '/zh-cn/docs/user/annotation.html',
                          },
                          {
                              title: '运维参数配置说明',
                              link: '/zh-cn/docs/user/configurations.html',
                          },
                          {
                              title: 'Mcp Brdige 配置说明',
                              link: '/zh-cn/docs/user/mcp-bridge.html',
                          },
                      ]
                  },
                ]
            },
            {
              title: '运维指南',
              children: [
                {
                  title: '安装部署',
                  link: '/zh-cn/docs/ops/deploy-by-helm.html',
                },
                {
                  title: '版本升级',
                  link: '/zh-cn/docs/ops/upgrade.html',
                },
                {
                  title: '日志说明',
                  link: '/zh-cn/docs/ops/log.html',
                },
              ]

            },
            {
              title: '开发者指南',
              children: [
                  {
                    title: '源码阅读指引',
                    link: '/zh-cn/docs/dev/code.html',
                  },
                  {
                    title: '组件编译说明',
                    link: '/zh-cn/docs/dev/architecture.html',
                  },
              ],
            },
        ],
        barText: '文档',
    },
};
