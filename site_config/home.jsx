import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: 'Higress',
            brandLogoUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01bmdCFQ1Zupzs0XIKc_!!6000000003255-55-tps-288-86.svg',
            briefIntroduction: '一个遵循开源Ingress/Gateway API标准，提供流量调度、服务治理、安全防护三合一的高集成、易使用、易扩展、热更新的下一代云原生网关。',
            buttons: [
                {
                    text: '快速入门',
                    link: '/zh-cn/docs/user/quickstart.html',
                    type: 'primary',
                },
                {
                  text: 'GitHub',
                  link: 'https://github.com/alibaba/higress',
                  type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 0.6.0',
                link: 'https://github.com/alibaba/higress/releases/tag/v0.6.0',
            },
            releaseDate: 'Released on Jan 19, 2023',
        },
        introduction: {
            title: 'Higress 是什么？',
            desc: 'Higress是基于阿里内部两年多的Envoy Gateway实践沉淀，以开源Istio + Envoy为核心构建的下一代云原生网关，实现了流量调度 + 服务治理 + 安全防护三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够为您带来低成本的网关部署运维及高性能、易使用、易扩展、功能丰富的一站式网关解决方案。',
            img: 'https://img.alicdn.com/imgextra/i4/O1CN01goCCMC1HBLZend9Gl_!!6000000000719-2-tps-3201-1561.png',
        },
        features: {
            title: '特色功能',
            list: [
                {
                  icon: 'feature-1',
                  title: '易于使用',
                  content: ['提供流量调度、服务治理、安全防护一站式网关解决方案，支持Console与K8s Ingress、Gateway API配置方式，也支持HTTP到Dubbo协议转换，一键轻松完成协议映射配置。'],
                },
                {
                  icon: 'feature-2',
                  title: '生产等级',
                  content: ['脱胎于阿里巴巴生产验证的内部产品，经历双十一洪峰锤炼，企业级的开源产品'],
                },
                {
                  icon: 'feature-3',
                  title: '便于扩展',
                  content: '提供Wasm、Lua、进程外三种插件扩展机制，让多语言编写插件不再成为障碍，插件生效粒度既支持全局级、域名级，也支持细粒度的路由级',
                },
                {
                  icon: 'feature-1',
                  title: '动态热更新',
                  content: '彻底摆脱reload引起的流量抖动，配置变更毫秒级生效且业务无感，Wasm插件热更新且流量无损',
                },
                {
                  icon: 'feature-4',
                  title: '平滑升级',
                  content: '兼容Nginx Ingress Annotation 80%+ 的使用场景，且提供功能更丰富的注解，简单一步轻松搞定Nginx Ingress迁移',
                },
                {
                    icon: 'feature-6',
                    title: '安全防护',
                    content: '提供JWT、OIDC、自定义认证鉴权，深度集成开源Web应用防火墙，让安全防护成为标配',
                },
            ],
        },
        users: {
            title: '谁在使用 Higress',
            desc: <span>请在 <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/alibaba/higress/issues/1">Wanted: who&#39;s using Higress</a> 上提供信息来帮助 Higress 做的更好。</span>,
            list: [
                'https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png' ,
                'https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png' ,
                'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png' ,
                'https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg' ,
                'https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg' ,
                'https://img.alicdn.com/imgextra/i1/O1CN01vrxF2I1rfs7rihLdy_!!6000000005659-0-tps-310-160.jpg' ,
                'https://img.alicdn.com/imgextra/i1/O1CN01638eOX1ZcW9bTIID4_!!6000000003215-2-tps-700-394.png',
                'https://img.alicdn.com/imgextra/i2/O1CN01T8c4by29tlErCcjHw_!!6000000008126-2-tps-170-170.png',              
            ],
        },
        community: {
            title: '搭把手，共建Higress',
            list: [
              'https://img.alicdn.com/imgextra/i4/O1CN01lP4p411R49V3tQpFH_!!6000000002057-0-tps-1062-1410.jpg' ,
              'https://img.alicdn.com/imgextra/i3/O1CN01RkvQ3J1WMXUBDJ2y6_!!6000000002774-2-tps-1056-1371.png' ,              
            ],
        },
    },
    'en-us': {
        brand: {
            brandName: 'Higress',
            brandLogoUrl: 'https://img.alicdn.com/imgextra/i1/O1CN01bmdCFQ1Zupzs0XIKc_!!6000000003255-55-tps-288-86.svg',
            briefIntroduction: "Higress is a next-generation cloud-native gateway based on Alibaba's internal gateway practices.",
            buttons: [
                {
                    text: 'Get Started',
                    link: '/en-us/docs/user/quickstart.html',
                    type: 'primary',
                },
                {
                  text: 'Github',
                  link: 'https://github.com/alibaba/higress',
                  type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 0.6.0',
                link: 'https://github.com/alibaba/higress/releases/tag/v0.6.0',
            },
            releaseDate: 'Released on Jan 19, 2023',
        },
        introduction: {
            title: 'What is Higress?',
            desc: 'Powered by Istio and Envoy, Higress realizes the integration of the triple gateway architecture of traffic gateway, microservice gateway and security gateway, thereby greatly reducing the costs of deployment, operation and maintenance.',
            img: 'https://img.alicdn.com/imgextra/i4/O1CN01goCCMC1HBLZend9Gl_!!6000000000719-2-tps-3201-1561.png',
        },
        features: {
            title: 'Feature List',
            list: [
                {
                    icon: 'feature-1',
                    title: 'Easy to use',
                    content: 'Provide one-stop gateway solutions for traffic scheduling, service management, and security protection, support Console, K8s Ingress, and Gateway API configuration methods, and also support HTTP to Dubbo protocol conversion, and easily complete protocol mapping configuration.',
                },
                {
                    icon: 'feature-2',
                    title: 'Production grade',
                    content: "An internal product that was born out of Alibaba's production and verification, experienced the peak of Double Eleven, and an enterprise-level open source product",
                },
                {
                    icon: 'feature-3',
                    title: 'Easy to expand',
                    content: 'Provides Wasm, Lua, and out-of-process  plug-in extension mechanisms, so that multi-language plug-in writing is no longer an obstacle. The granularity of plug-in effectiveness supports not only the global level, domain name level, but also fine-grained routing level',
                },
                {
                    icon: 'feature-4',
                    title: 'Dynamic hot update',
                    content: 'Get rid of the traffic jitter caused by reload at the bottom, the configuration change takes effect in milliseconds and the business is not affected, the Wasm plug-in is hot updated and the traffic is not damaged',
                },
                {
                    icon: 'feature-5',
                    title: 'Smooth upgrade',
                    content: 'Compatible with 80%+ usage scenarios of Nginx Ingress Annotation, and provides more feature-rich annotations, easy to handle Nginx Ingress migration in one step',
                },
                {
                    icon: 'feature-6',
                    title: 'Security',
                    content: 'Provides JWT, OIDC, custom authentication and authentication, deeply integrates open source web application firewall.',
                },
            ]
        },
        users: {
            title: 'Who is using Higress?',
            desc: <span>请在 <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/alibaba/higress/issues/1246">Wanted: who&#39;s using Higress</a> to help improving Higress better.</span>,
            list: [
                'https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png' ,
                'https://img.alicdn.com/imgextra/i4/O1CN01IOIk0s1bWgJ05f4HF_!!6000000003473-2-tps-1200-699.png' ,
                'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png' ,
                'https://img.alicdn.com/imgextra/i3/O1CN01pH2InM1iuDzpDxxox_!!6000000004472-0-tps-228-82.jpg' ,
                'https://img.alicdn.com/imgextra/i3/O1CN013OMegK1xQCGX3CQNQ_!!6000000006437-0-tps-178-88.jpg' ,
                'https://img.alicdn.com/imgextra/i1/O1CN01vrxF2I1rfs7rihLdy_!!6000000005659-0-tps-310-160.jpg' ,
                'https://img.alicdn.com/imgextra/i1/O1CN01638eOX1ZcW9bTIID4_!!6000000003215-2-tps-700-394.png',
                'https://img.alicdn.com/imgextra/i2/O1CN01T8c4by29tlErCcjHw_!!6000000008126-2-tps-170-170.png',
            ],
        },
        community: {
          title: 'community',
          list: [
              'https://img.alicdn.com/imgextra/i4/O1CN01lP4p411R49V3tQpFH_!!6000000002057-0-tps-1062-1410.jpg' ,
              'https://img.alicdn.com/imgextra/i3/O1CN01RkvQ3J1WMXUBDJ2y6_!!6000000002774-2-tps-1056-1371.png' ,
          ],
      },
    },
};
