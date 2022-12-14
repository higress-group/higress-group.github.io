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
                title: '??????',
                children: [
                    {
                        title: 'Higress ????????????',
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
                        title: '?????????',
                        link: '/zh-cn/docs/overview/terminology.html',
                    },
                ],
            },
            {
              title: '????????????',
              children: [
                  {
                      title: '????????????',
                      link: '/zh-cn/docs/user/quickstart.html',
                  },
                  {
                      title: '??????????????????',
                      children: [
                          {
                              title: '?????? GO ???????????? WASM ??????',
                              link: '/zh-cn/docs/user/wasm-go.html',
                          },
                          {
                              title: '?????? OpenKruise Rollout ??????????????????',
                              link: '/zh-cn/docs/user/kruise-rollout.html',
                          },
                          {
                              title: '?????? Ingress ?????????????????? Nacos ?????????',
                              link: '/zh-cn/docs/user/nacos-route.html',
                          },
                          {
                              title: '?????? SpringCloud ?????????????????????',
                              link: '/zh-cn/docs/user/spring-cloud.html',
                          },
                          {
                              title: '?????? Dubbo ?????????????????????',
                              link: '/zh-cn/docs/user/dubbo.html',
                          },
                       ],
                  },
                  {
                    title: '?????????????????????...',
                    children: [
                      {
                        title: '?????? Prometheus ????????????????????????',
                        link: '/zh-cn/docs/user/prometheus.html',
                      },
                      {
                        title: '?????? OpenSergo ?????????????????????',
                        link: '/zh-cn/docs/user/opensergo-gray.html',
                      },
                      {
                        title: '?????? Sentinel ????????????????????????',
                        link: '/zh-cn/docs/user/sentinel.html',
                      },
                      {
                        title: '?????? WAF ?????????????????????',
                        link: '/zh-cn/docs/user/waf.html',
                      },
                    ],
                  },
                  {
                      title: '????????????',
                      children: [
                          {
                              title: 'Ingress Annotaion ????????????',
                              link: '/zh-cn/docs/user/annotation.html',
                          },
                          {
                              title: '????????????????????????',
                              link: '/zh-cn/docs/user/configurations.html',
                          },
                          {
                              title: 'Mcp Brdige ????????????',
                              link: '/zh-cn/docs/user/mcp-bridge.html',
                          },
                      ]
                  },
                ]
            },
            {
              title: '????????????',
              children: [
                {
                  title: '????????????',
                  link: '/zh-cn/docs/ops/deploy-by-helm.html',
                },
                {
                  title: '????????????',
                  link: '/zh-cn/docs/ops/upgrade.html',
                },
                {
                  title: '????????????',
                  link: '/zh-cn/docs/ops/log.html',
                },
              ]

            },
            {
              title: '???????????????',
              children: [
                  {
                    title: '??????????????????',
                    link: '/zh-cn/docs/dev/code.html',
                  },
                  {
                    title: '??????????????????',
                    link: '/zh-cn/docs/dev/architecture.html',
                  },
              ],
            },
        ],
        barText: '??????',
    },
};
