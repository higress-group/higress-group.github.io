---
title: 阿里巴巴重磅开源云原生网关
keywords: [higress]
description: 介绍Higress的诞生背景与发展历程
author: gengleilei
date: 2022-11-04
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/higress.md
---

# 阿里巴巴重磅开源云原生网关: Higress

Higress 是一款标准化、高集成、易扩展、热更新的云原生网关。

<!--truncate-->

Higress 源自阿里巴巴内部电商、交易等核心生产场景的实践沉淀，遵循 Ingress/Gateway API 标准，将流量网关、微服务网关、安全网关三合一，并在此基础上扩展了服务管理插件、安全类插件和自定义插件，高度集成 K8s 和微服务生态，包括 Nacos 注册和配置、Sentinel 限流降级等能力，并支持规则变更毫秒级生效等热更新能力。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01VYKTu922ZsiibaCml_!!6000000007135-2-tps-2178-1198.png)
## Higress的前世今生

### 诞生背景
Higress 的创建源于阿里内部的“本地生活战役”，该战役始于“支付宝2020合作伙伴大会”，在此大会上支付宝宣布升级为数字生活开放平台。该战役的核心技术目标，是实现阿里巴巴业务域与蚂蚁业务域之间 RPC 直接调用，但因阿里巴巴与蚂蚁业务域网络是隔离的，即网络是不通的，很自然想到利用网关来解决此问题。

### 技术选型
利用网关来解决阿里巴巴与蚂蚁跨业务域 RPC 互通问题，首先要对网关做技术选型。

相信大家也都或多或少知道，阿里巴巴开源的反向代理程序 Tengine。Tengine 在阿里内部统一接入网关 AServer 中被使用，我们团队就是负责其开发运维，同时我们团队也在负责阿里巴巴 Service Mesh 的落地，不管是对 Tengine 还是对 Istio + Envoy 这套架构都比较熟悉。

在选型时，虽然也调研过一些其他的软件，但考虑到网关对性能、可靠性的高要求，在结合我们自身的网关运维经验，决定看看 Tengine 与 Envoy 是否可以满足我们的业务需求，在对比时我们罗列了四个关键要点，其对比如下：

![image.png](https://img.alicdn.com/imgextra/i3/O1CN0154SFHA1geXCJT8KIm_!!6000000004167-2-tps-2568-888.png)
这里提一下“为什么我们认为配置的热更新，是非常重要的”？

Tengine/Nginx 的配置更新需要 reload，reload 需要重启 worker 进程，重启时会引起流量抖动，对长连接影响尤为明显。在网关的集群规模非常大时，更是不能随意的做 reload，这时就会引发一个矛盾点：业务向网关提交配置后，希望能快速验证，但受限于 reload 机制和稳定性要求，无法满足业务快速验证与快速试错的诉求。

现在已经有很多主流应用选择采用长连接，HTTP 1.1一般默认会使用Keep-Alive去保持长连接，后续HTTP 2以及HTTP 3也是如此，随着网络协议的发展，未来使用长连接会变得更加普遍。而配置热更新天然对长连接非常友好。

如何解决这点呢？

一是采用两层网关，即流量网关 + 业务网关；二是实现网关原生支持配置热更新。除了对比不同方案的优劣势，我们也调研了 Envoy 作为网关在业界的趋势，结论是目前 Envoy 作为 K8s 中的 Ingress Provider 增长最快的事实（Ingress Provider 指 K8s Ingress 规范具体实现，因 K8s Ingress 自身只是规范定义，是 K8s 下外部流量进入集群内部的网关规范定义），我们最终选择了 Envoy 来实现两层网关。

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01noxgsq1izikgjVavA_!!6000000004484-2-tps-2948-1054.png)

### 发展历程
Higress从最初社区的 Istio + Envoy，到经历阿里巴巴内部的自研扩展，再到大规模生成验证，最后完成商业化产品的发布，其整个过程介绍如下：

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01ZzyYWg1mJoyzwgeoC_!!6000000004934-2-tps-2296-908.png)
下面的章节会对Higress的各个阶段做进一步的详细说明。
# Higress (2020.05~2020.11)
此阶段的大目标是为了满足集团与蚂蚁RPC互通，降低全链路的RT，解决原s2s链路因RT过高带来的用户体验差及无法满足更多集团与蚂蚁协同场景要求。s2s链路是走公网链路，协议采用HTTP。与蚂蚁互通网关的架构图如下，这里以上海云单元为背景说明。

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01uEUUkR1Er4nkwYiOW_!!6000000000404-2-tps-2036-1088.png)

上图主要展示的是集团侧的架构，最终采用了Istio+Envoy的方案，在部署的时候又分成了出口集群和入口集群。之所以拆成两个集群，一方面是当时两边互访，蚂蚁调集团的流量要远远大于集团调蚂蚁的流量，上下行特别不均等；另一方面是分开之后两个集群可以各自维护，稳定性会更好。

Higress 从开始立项到完成第一期研发，网关改造的核心工作差不多两个人投入了一个半月左右，其中还涉及到大量网络、安全等协调部门的工作。Higress架构并没有完全按照社区方案来设计，社区版本中配置变更和服务发现使用的是K8s，在阿里内部庞大的服务规模及配置量下社区原生方案不管在稳定性及性能上都无法满足要求，因此阿里这套方案重点对服务发现、配置存储组件做了替换，及优化xDS推送性能。

Higress 上线后，顺利达成了最初的业务诉求，目前蚂蚁互通网关链路已经成为集团与蚂蚁互通的首选方案，一些支付链路也迁移到了该方案，例如充值中心等，具体达到的成果简述如下：

- 蚂蚁调用集团链路相比原链路RT降低50%，网关自身RT 0.3ms。
- Higress成功复制到集团与蚂蚁的消息互通，目前集团与蚂蚁的消息互通也是走的Higress Triple链路。
- 微服务网关从5月份上线，目前已经成为集团与蚂蚁东西向流量的核心链路，飞猪、手淘、口碑、饿了么、1688、部分导购应用、商品库、评价等业务已成功上线，而且圆满支撑了618大促、支付宝717夏至大促。
- 在2020双11大促每秒 数十万 的请求流量，圆满支撑了双11城市生活狂欢节的互动会场。
- 在技术侧完成了Higress在东西向流量分发的探索。
# Higress (2020.12~2021.10)
随着阿里巴巴上云战役的推进，越来越多的场景找到我们。比如云上云下业务互通，由于 Tengine 服务管理弱导致阿里内部大量二层微服务网关需要收敛，这就需要从业务上做 Tengine+Envoy 两层网关的演进，承担南北向网关流量。在 2020 年 12 月份，团队开始了Higress 架构的继续演进，以优酷场景为例的演进过程如下图：

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01t1RGjj1RpKIIm5zQU_!!6000000002160-2-tps-1614-1194.png)

Higress  南北向的架构图如下：

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01B2guUL1Q8RauU7pCo_!!6000000001931-2-tps-2390-1242.png)

在两层架构中，Higress 网关更多承担了微服务网关和微服务治理的需求，和 Tengine 流量网关完成了整合。在这个过程里，团队支撑优酷内部多个二层微服务网关统一的工作，大幅提升了性能和运维效率。

在这一阶段，Higress Gateway 实现了东西向、南北向全域流量的调度分发，东西向上不仅支持跨业务域的蚂蚁 RPC 互通，也扩展到了混合云的云上云下 RPC 互通场景，覆盖钉钉文档、阿里视频云、达摩院的店小蜜、智慧数字人等。该阶段的业务大图如下（云上云下互通场景，以钉钉为例说明）：

![image.png](https://img.alicdn.com/imgextra/i4/O1CN01VQ51BO2A5D7oqbLG6_!!6000000008151-2-tps-2370-1200.png)

随着 Higress Gateway 覆盖的业务场景越来多，在跟优酷持续合作的过程中，双方团队不约而同提出了一个设想：Tengine Gateway（承担流量网关角色） + Higress Gateway（承担微服务网关角色）的两层网关是否可以合并为一层 Higress Gateway？

我们对这一想法做了调研，答案是肯定的，并且当时大家也合作设计了新的架构方案，如下图：

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01DMqpay1COYubY2QrN_!!6000000000071-2-tps-2394-1250.png)

虽然由于各种各样的原因，这个方案最终没有跟优酷继续往下推进。但这个演进方向让团队明确了网关新的发展趋势：**在以 K8s 主导的容器化背景下，由于K8s 集群内外网络的天然隔离性，用户需要一款兼顾高性能与安全性，以及强大服务治理能力的入口网关。这也为后续团队将技术沉淀变成云产品、推进Higress的诞生打下了基础。**

2021 年，阿里巴巴开启了中间件三位一体战役，目标是用云产品支撑集团业务。**我们开始将孵化成熟的Higress技术沉淀为云产品，即目前阿里云上提供的 MSE 云原生网关**，一方面面向广大的公有云用户提供托管的网关服务，另一方面也对内服务集团。MSE 云原生网关的技术架构简图如下：

![image.png](https://img.alicdn.com/imgextra/i1/O1CN01jCUMA11It93SO68gE_!!6000000000950-2-tps-1570-1262.png)
# Higress (2021.11~2022.11)
随着Higress成为云产品服务于更多外部用户，我们逐步发现用户对Higress提出了更高的要求，其中反馈较多的大的需求点是插件扩展、Waf防护、多注册中心、Nginx Ingress注解兼容以及HTTP转Dubbo协议，当然也有很多小的需求点在此就不一一列出，因此该阶段我们重点发力在上述用户反馈的高频需求。

Higress 提供的插件市场，其一阶段支持Wasm插件，满足追求高性能、高安全的用户对网关的扩展诉求，二阶段会支持Lua插件，满足传统用户使用Lua的扩展的诉求，如Nginx用户，三阶段会支持进程外插件，满足多语言用户诉求，尤其是Java用户因现阶段Java社区对WebAssembly支持尚不完善但又希望对网关进行扩展的诉求。

![image.png](https://img.alicdn.com/imgextra/i3/O1CN01j4BOm725DO7A6PdWS_!!6000000007492-2-tps-1424-1282.png)

Higress 也支持了Nginx Ingress注解平滑迁移的能力，满足部分用户期望迁移到Higress但又不希望重新配置网关的诉求，同时**Higress打破了Nginx Ingress只能关联单个K8s集群的限制，支持关联多个K8s集群，即可以将Higress作为统一接入网关使用，同时又可以享受Ingress的红利**。

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01M65eMf1PZB6HdQsOt_!!6000000001854-2-tps-2480-1126.png)

对于传统使用Dubbo的微服务用户希望使用原生RPC方式暴露对外服务，但通常提供外部访问的服务以使用HTTP为主，为了帮助Dubbo用户降低服务暴露的开发成本，Higress提供了HTTP转Dubbo协议功能，且通过Console为用户提供白屏化的配置方式，**某客户使用后反馈“这是业界完成度最高的HTTP转Dubbo协议”功能**。

![image.png](https://img.alicdn.com/imgextra/i3/O1CN013yp9rz202KTX6AkAa_!!6000000006791-2-tps-2356-1280.png)

在云原生的浪潮下，开源已经成为软件发展的必然趋势与快速路径，因为社区的力量是非常强大的。因此我们将
这套经过内部实践沉淀下来的网关方案Higress正式对外开源，以Kubernetes Ingress网关为契机带来了流量网关与微服务网关融合的可能性，结合阿里内部实践沉淀Higress实现了流量网关 + 微服务网关 + 安全网关三合一的高集成能力，同时深度集成了Dubbo、Nacos、Sentinel等，能够帮助用户极大的降低网关的部署及运维成本，而且能力不打折。

![image.png](https://img.alicdn.com/imgextra/i2/O1CN01ad1fKt1toEafyw0GN_!!6000000005948-2-tps-1734-1360.png)
# Higress 未来展望

虽然目前云原生已经成为必然趋势，但现实是有很大一部分用户处于迁移上云的过程中，在从传统架构向以Kubernetes 为代表的容器化云原生架构迁移，可预见这在未来很长一段时间会一直持续，因此 Higress 后续会重点支持非 Kubernetes 部署架构，以 Higress + Nacos 的组合形式为用户提供最小集运行环境，同时满足用户服务注册、配置管理、微服务治理的诉求。

在以 Kubernetes 为代表的容器化云原生方向，我们在兼容好现有 Ingress 标准的基础上，会重点发力下一代的Ingress 标准 Gateway API，利用 Gateway API 带来的契机打通南北向与东西向的全域流量调度，帮助用户使用一套架构架构同时管理外部与内部流量，降低部署运维成本、提升开发及运维效率。

