---
title: "对比5个开源网关项目，这家SaaS企业如何统一网关架构"
description: "对比5个开源网关项目，这家SaaS企业如何统一网关架构"
date: "2024-08-12"
category: "case"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：古建国
<a name="8d9c4456"></a>
## 一、关于美洽
美洽作为全球智能云客服服务商，10 年来深耕智能客服领域，旗下拥有在线客服、呼叫中心、客服机器人、工单系统、语音机器人等智能客服系列产品矩阵，覆盖不同行业客户服务场景，致力于帮助企业获客、销售和服务场景的效率提升。目前，美洽全链路产品已经服务超过 40 万家企业客户，覆盖互联网软件、教育培训、医疗、电子商务、金融、生活服务和房地产等行业领域。
<a name="a11d9117"></a>
## 二、需求背景

1. 多条业务线使用了了不同编程语言，在微服务化演进的路上困难重重；
2. 历史架构使用多个流量转发中间件导致流量路径冗长、复杂且故障排查困难（LB + OpenResty + Nginx + Caddy + SpringCloud-Gateway）；
3. WebSocket 长连接服务在多重路由层上不支持热更新，维护成本高。

**历史架构的流量拓扑图如下：**<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434290873-5c4c4776-9144-41c3-971f-985284368ffa.webp#clientId=u629904be-ae5e-4&from=paste&id=u80c878a0&originHeight=517&originWidth=627&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u81988a64-7fdc-4fd5-b05e-e9dbaa29349&title=)
<a name="8a4960e6"></a>
## 三、需求目标

1. 找到一个统一网关，能够一次性解决流量网关和业务网关的路由转发需求；
2. 支持路由规则热更新，解决 WebSocket 连接在路由更新或网络抖动时产生的重连风暴；
3. 前置API 请求权限校验、签名校验、WAF 拦截、CC 拦截；
4. 可视化统一网关的后台操作，让普通员工也能上手；
5. 多云架构下私有化部署支持。
<a name="dc6b3675"></a>
## 四、方案横向对比
通过对目前市面上流行的网关产品进行详细的横向对比，再结合美洽对统一网关的需求目标，我们从对比的表格当中，看到了 Higress 所带来的最佳对比结果。<br />同时美洽重点关注的几个点：K8S Ingress 支持、WebSocket支持、Nacos 服务发现、路由配置热更新、WASM 插件都得到了很好的支持。<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434290961-59e188e7-4695-42bf-af5e-08f43829d5ca.webp#clientId=u629904be-ae5e-4&from=paste&id=u3219b9d6&originHeight=470&originWidth=750&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u19baa11c-1ce3-4b25-88a4-87fae8b59dd&title=)
<a name="5b4d401f"></a>
## 五、为什么选择 Higress
<a name="94ad0566"></a>
### 面向多云架构友好
Higress 在阿里云上有成熟的企业版产品：MSE 云原生网关，我们从 2021 年开始使用这款产品，这是一款全托管，完全免运维的 SaaS 网关产品，并且具备强劲的性能和丰富的功能，相比自建同吞吐的网关，整体成本是更低的，因此我们在阿里云上直接使用了这款产品。<br />美洽除了阿里云，在其他云上也有部署业务，我们希望能统一多云的统一网关技术架构，开源版 Higress 正好符合我们的需求，相比商业版，在控制台功能上，开源版目前的能力相对较少，但大部分功能也都可以通过自己定义 K8s CRD 配置的方式来实现，完全满足我们的需求。
<a name="5e0a528a"></a>
### 原生支持 K8s Ingress
美洽从 2021 年便已经全面迁移到 Kubernetes 进行资源调度，遇到最大的困难是历史的网关中间件，在容器化的架构里面，各种水土不服，要么需要借助 Nginx-Ingress-Controller，要么需要外部的 SLB 进行服务之间的负载均衡与网络通信。这导致了比容器化之前更加复杂的流量路径，一度让我们下定决心，必须、必须、必须要解决统一网关的问题，还必须云原生的。<br />2021 年底开始，我们开始尝试使用阿里云 MSE 网关 SaaS 产品，开始将部分服务从 Nginx 路由迁移到 MSE 网关上，很快解决了Ngxin Configuration 配置维护复杂，故障频发的问题，尝到甜头后，我们便开始计划进一步扩大 MSE 网关的使用，结合 Nacos 和 K8S 的服务发现，将 80% 大部分容器化服务路由转发全部迁移到了云原生网关上。<br />这带来的收益就包括：

1. 简化了流量路径，公网流量通过 SLB 直接到达网关，网关路由直达容器 Pod；
2. 释放了使用 ECS 自建的 Nginx 、OpenResty 、Caddy 服务，降低了大量服务器成本；
3. 服务发现和服务治理，以及各个服务当前的健康状态都以可视化的 Dashborad 呈现出来；
<a name="9f95ede0"></a>
### 控制面和数据面解耦的架构
控制面和数据面解耦是一种很好的设计模式，把管理控制逻辑和运行处理逻辑分开，这样可以更好地管理和扩展系统。

1. Console 负责管理 和 Gateway 负责处理请求，灵活可扩展，互不干扰；
2. 整个系统的性能和可用性可以得到很好的保障；
3. 即使控制面出现问题，数据面仍然可以继续处理请求，反之亦然。

在美洽客服自己的产品中，也大量使用了控制面和数据面分离的这种架构设计模式，在选择 Higress 统一网关的落地实践中，也更好的可以和美洽产品的架构进行配合，例如控制台采用微前端技术统一美洽运维控制台，Higress 控制台，Nacos 控制台。
<a name="391fbf27"></a>
### 容易上手的后台 Dashboard
在早期，美洽在 2021 年开始使用阿里云 MSE 云原生网关时，就已经对网关的控制台使用有了很多的经验基础，团队中 QA 同学也能熟练使用了。目前在其他云上的项目，私有化部署的开源版Higress，在控制台方面功能与操作和阿里云 MSE 产品的交互保持一致，团队使用很快便上手了。<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434290874-96d450dc-9eb3-4683-99ee-ac4102a0634a.webp#clientId=u629904be-ae5e-4&from=paste&id=ued73e391&originHeight=300&originWidth=750&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u967caaf8-910a-4221-ac1c-1f0663d7853&title=)<br />插件方面，美洽使用了 JWT Auth 鉴权，Key Rate Limit 限流，HMAC Auth 请求签名，Bot Detect 和 WAF 功能有涉及。<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434292989-ebb5a4df-4ae6-4d85-91d2-b0986ce1feec.webp#clientId=u629904be-ae5e-4&from=paste&id=u6cf1ba83&originHeight=420&originWidth=750&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=uc6345478-17a1-4eb5-843f-0ff070dc65d&title=)
<a name="a2d7c7ec"></a>
## 六、美洽的落地实践
<a name="8a67918d"></a>
### 采用 Helm 在 K8s node 上 一键部署
helm repo add higress.io <https://higress.io/helm-charts>helm install higress higress.io/higress -n higress-system --create-namespace
<a name="e74e3ce9"></a>
### 完全替代了 Nginx 、OpenResty、Caddy 、SLB-Intranet
![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434290940-fda1b6bf-6a0f-474c-b106-3b88796a57e6.webp#clientId=u629904be-ae5e-4&from=paste&id=u4edf6f6d&originHeight=532&originWidth=630&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u4ee823b6-7866-4eb7-877d-5858cc92d2b&title=)![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434291359-3ef1f812-f826-4701-aad7-4b4177d4726c.webp#clientId=u629904be-ae5e-4&from=paste&id=u702a8e7d&originHeight=532&originWidth=631&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=uec8bac6b-5740-433f-82cc-e65953c4354&title=)
<a name="db1148bf"></a>
### 彻底解决 WebSocket 断线重连问题
美洽的智能客服产品侧使用了 WebSocket 进行长连接保持和消息通信，所以非常依赖网络的稳定，以及更新网关配置所带来的副作用。在使用 Nginx + OpenResty 方案的期间，每一次的配置变更都会带来极大的代价，断线重连风暴时常发生。一次配置变更 Pendding 或者变更失败带来的瞬时断联是极其痛苦的。<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434291350-35183af2-845e-4363-ba54-1f8ddbe5c069.webp#clientId=u629904be-ae5e-4&from=paste&id=u2f8afb65&originHeight=440&originWidth=750&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u52d4fd80-068e-4b38-b316-47b5d8d197d&title=)<br />在迁移到 Higress 上之后，路由配置热更新特性，不再需要像 Nginx 一样需要 Reload Gateway，解决配置更新 reload 带来的断线重连风暴问题。<br />另外，在 WebSocket Server 服务升级过程中，通过给 Pod 打上 stage 标签，在 Higress 侧通过标签路由进行新老版本无损流量切换，给产品快速迭代升级带了巨大的杠杆效应。
<a name="816cfeaf"></a>
### 熔断限流
在面向 2B 的 SaaS 产品业务场景中，经常会发生某一个客户突发海量流量，占据大量带宽，影响其他客户正常使用的情况，这时我们需要针对客户规模对单个客户的 API 并发上限做灵活的动态限流，使用 Higress 的插件Key Rate Limit 就很好的解决了这个问题，根据流量大盘随时调整限流水位红线，做到精准，灵活的限流。<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434291339-103b3c03-178a-40de-8935-934b941a7745.webp#clientId=u629904be-ae5e-4&from=paste&id=u3b02f798&originHeight=467&originWidth=750&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=uc6c8fb43-8cb8-4895-8608-02f47919d00&title=)
<a name="14f81b61"></a>
## 七、经验总结
Higress 网关的落地，给企业全面落地云原生微服务架构提供强有力的支持，对我们技术人员来说，这绝对是一个杠杆级别的开源产品，另外，在阿里云上又有对等的 SaaS 产品，这样的配合，将公有云和私有化部署的统一网关一次性全部解决，对企业来说是绝对的利好。

1. 统一流量网关+业务网关能力，实现了给企业降本，为研发增效；
2. 为云原生架构提供很好的基座，在异构语言服务化层面排除了网络通信难题；
3. 路由热更新、无损升级、可视化 Console、开放的插件、基于 Kubernetes 和 Istio，给技术演进带来了更多的可能性。

最后，我们祝愿 Higress 在云原生的道路上越走越远，大家一起用开源、开放、分享的心态将 Higress 建设地越来越好。

---

<a name="b1d75a08"></a>
## Higress 社区
欢迎点击原文提供企业落地案例，我们将：

1. 提供 Higress 在生产环境的落地支持，帮助您高效完成网关架构改造
2. 案例投稿到 InfoQ/CSDN 等知名技术媒体，提升您企业的技术影响力
3. 推荐至媒体或社区，参与年度优秀开源案例评选

Higress社区交流群：<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/webp/299576/1723434291304-2ca56d13-6f4d-42e9-b573-e7e8eb4f5800.webp#clientId=u629904be-ae5e-4&from=paste&id=u6f270044&originHeight=699&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u80e9e379-e9b5-43cf-81bf-2f8593c9b0a&title=)


