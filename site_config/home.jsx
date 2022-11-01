import React from 'react';

export default {
    'zh-cn': {
        brand: {
            brandName: 'Higress',
            briefIntroduction: 'Higress是一款开源的集流量网关、微服务网关、安全网关三合一的高集成网关，遵循Kubernetes的Ingress与Gateway API规范，致力于帮助用户构建高集成、低运维成本的一站式全流量调度网关。',
            buttons: [
                {
                    text: '快速入门',
                    link: '/zh-cn/docs/overview/what-is-higress.html',
                    type: 'primary',
                },
            ],
            versionNote: {
                text: 'Release Note of 0.1.0',
                link: 'https://github.com/alibaba/higress/releases/tag/v1.5.2',
            },
            releaseDate: 'Released on Jul 12, 2022',
        },
        introduction: {
            title: 'Higress 是什么？',
            desc: 'Higress是基于阿里内部的Envoy Gateway实践沉淀、以开源Istio + Envoy为核心构建的下一代云原生网关，实现了流量网关 + 微服务网关 + 安全网关三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够帮助用户极大的降低网关的部署及运维成本且能力不打折；在标准上全面支持Ingress与Gateway API，积极拥抱云原生下的标准API规范；同时，Higress Controller也支持Nginx Ingress平滑迁移，帮助用户零成本快速迁移到Higress。',
            img: 'https://img.alicdn.com/imgextra/i4/O1CN01dqXHDi27RhjAtZyNp_!!6000000007794-0-tps-1794-1446.jpg',
        },
        features: {
            title: '特色功能',
            list: [
                {
                    icon: 'feature-1',
                    title: '多种类型注册中心支持',
                    content: '提供多注册中心组件，支持Nacos、ZooKeeper、Consul，同时基于该组件可添加更多其他类型注册中心',
                },
                {
                    icon: 'feature-2',
                    title: '多Kubernetes集群支持',
                    content: '一个Higress Controller可同时监听多个Kubernetes集群，方便跨多集群的统一路由管理',
                },
                {
                    icon: 'feature-3',
                    title: '多种扩展方式支持',
                    content: '支持Wasm插件、Lua插件、进程外插件，通过丰富的插件扩展机制，用户可以使用多语言编写扩展插件，有效降低插件编写门槛，满足用户自定义的扩展诉求',
                },
                {
                    icon: 'feature-4',
                    title: 'Dubbo协议转换',
                    content: '提供HTTP协议到Dubbo协议的转换能力，降低用户对外暴露Dubbo服务的接入成本，满足传统Dubbo微服务用户希望提供对外请求访问的场景',
                },
                {
                    icon: 'feature-5',
                    title: 'Sentinel支持',
                    content: '深度集成Sentinel，一站式的满足传统微服务用户对限流、降级、熔断等高可用能力的诉求',
                },
                {
                    icon: 'feature-6',
                    title: 'Modsecurity',
                    content: '深度集成开源Web应用防火墙，满足网关用户对安全的首要防护诉求',
                },
            ],
        },
        users: {
            title: '谁在使用 Higress',
            desc: <span>请在 <a rel="noopener noreferrer" target="_blank"
                              href="https://github.com/alibaba/higress/issues/1">Wanted: who&#39;s using Higress</a> 上提供信息来帮助 Higress 做的更好。</span>,
            list: [
                'https://img.alicdn.com/imgextra/i1/O1CN01TleQq128FAP8POtL5_!!6000000007902-2-tps-241-42.png' ,
                'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png' ,
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
                }
            ],
            versionNote: {
                text: 'Release Note of 0.1.0',
                link: 'https://github.com/alibaba/higress/releases/tag/v0.1.0',
            },
            releaseDate: 'Released on Jul 17, 2022',
        },
        introduction: {
            title: 'What is Higress?',
            desc: 'Higress is ...',
            img: 'https://img.alicdn.com/tfs/TB1rDpkJAvoK1RjSZPfXXXPKFXa-794-478.png',
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
                'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-238-54.png' ,
            ],
        },
    },
};
