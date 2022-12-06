import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: 'Higress',
            briefIntroduction: '一个遵循开源Ingress/Gateway API标准，提供流量调度、服务治理、安全防护三合一的高集成、易使用、易扩展、热更新的下一代云原生网关。',
            buttons: [
                {
                    text: '快速入门',
                    link: '/zh-cn/docs/overview/what-is-higress.html',
                    type: 'primary',
                },
                {
                  text: 'GitHub',
                  link: 'https://github.com/alibaba/higress',
                  type: 'normal',
                },
            ],
            versionNote: {
                text: 'Release Note of 0.5.0',
                link: 'https://github.com/alibaba/higress/releases/tag/v0.5.0',
            },
            releaseDate: 'Released on Nov 12, 2022',
        },
        introduction: {
            title: 'Higress 是什么？',
            desc: 'Higress是基于阿里内部两年多的Envoy Gateway实践沉淀，以开源Istio + Envoy为核心构建的下一代云原生网关，实现了流量调度 + 服务治理 + 安全防护三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够为您带来低成本的网关部署运维及高性能、易使用、易扩展、功能丰富的一站式网关解决方案。',
            img: 'https://img.alicdn.com/imgextra/i2/O1CN01Tm5Bi51dQqVvZABEp_!!6000000003731-2-tps-2396-1214.png',
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
                  content: ['脱胎于阿里巴巴生产验证的内部产品，经历双十一洪峰锤炼，具备企业级SLA的开源产品'],
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
            briefIntroduction: 'Higress is ...',
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
                text: 'Release Note of 0.5.0',
                link: 'https://github.com/alibaba/higress/releases/tag/v0.5.0',
            },
            releaseDate: 'Released on Nov 1, 2022',
        },
        introduction: {
            title: 'What is Higress?',
            desc: 'Higress is ...',
            img: 'https://img.alicdn.com/imgextra/i2/O1CN01Tm5Bi51dQqVvZABEp_!!6000000003731-2-tps-2396-1214.png',
        },
        features: {
            title: 'Feature List',
            list: [
                {
                    icon: 'feature-1',
                    title: 'XXX1',
                    content: 'XXX1',
                },
                {
                    icon: 'feature-2',
                    title: 'XXX2',
                    content: 'XXX2.',
                },
                {
                    icon: 'feature-3',
                    title: 'XXX3',
                    content: 'XXX3.',
                },
                {
                    icon: 'feature-4',
                    title: 'XXX4',
                    content: 'XXX4.',
                },
                {
                    icon: 'feature-5',
                    title: 'XXX5',
                    content: 'XXX5',
                },
                {
                    icon: 'feature-6',
                    title: 'XXX6',
                    content: 'XXX6.',
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
