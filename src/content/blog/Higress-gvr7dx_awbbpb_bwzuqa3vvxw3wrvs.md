---
title: "回归开源，Java 和 Go 程序员贡献 AI 的内心独白"
description: "回归开源，Java 和 Go 程序员贡献 AI 的内心独白"
date: "2025-05-21"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：岛风、十眠

## <font style="color:rgb(51, 51, 51);">概述</font>
<font style="color:rgb(51, 51, 51);">Higress 是一个基于 Istio 和 Envoy 的云原生 API 网关，具备先进的 AI 功能。通过 Go/Rust/JS 编写的 Wasm 插件提供可扩展的架构，并提供了基于 Node 和 Java 的 console 模块，使得用户可以可视化使用 Higress。</font>

<font style="color:rgb(51, 51, 51);">Higress 最初由阿里巴巴研发，旨在解决 Tengine 配置 reload 对长连接造成影响，以及 gRPC/Dubbo 服务负载均衡能力不足的问题，于 2022 年开源。如今，阿里云云原生 API 网关、MSE 云原生网关、专有云飞天企业版 API 网关等网关产品系列均采用了 Higress 的统一架构，它已成为阿里云 API 网关产品的基础。</font>

<font style="color:rgb(51, 51, 51);">本文主要面向开发者和开源爱好者，围绕 Higress 基本的架构，分享一些 Higress 的基本原理，欢迎一起共建 Higress。</font>

## <font style="color:rgb(51, 51, 51);">Higress 产品介绍</font>
<font style="color:rgb(51, 51, 51);">网关产品在不同场景，不同发展阶段可能会加上很多修饰词前缀，这本质上是网关主要是一层代理，伴随着应用架构的演进，网关的身份也会发生转变。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/156306/1744260687857-b77d8779-f23c-4fb6-9b15-54484cedd0dc.png?x-oss-process=image%2Fformat%2Cwebp)

<font style="color:rgb(51, 51, 51);">正如单体式应用到 SOA 架构时 ESB 总线的称谓，微服务架构阶段时的微服务网关，K8s 云原生架构下的云原生网关，再到现如今 AI 时代的 AI 网关。可以发现不仅仅是 Higress 如此，传统的 API 网关产品以及国内外的 API 网关云厂商，都非常默契地将自家用户页面的入口换上了 AI 网关的皮肤。按照用户场景，Higress 可以有以下几种定位：</font>

### <font style="color:rgb(51, 51, 51);">AI 网关</font>
<font style="color:rgb(51, 51, 51);">AI 网关相比传统 API 网关有了一些本质的变化：</font>

| | **<font style="color:rgb(51, 51, 51);">传统 API 网关</font>** | **<font style="color:rgb(51, 51, 51);">AI 网关</font>** |
| --- | :--- | :--- |
| <font style="color:rgb(51, 51, 51);">请求响应模型</font> | <font style="color:rgb(51, 51, 51);">无流式处理需求，多为 HTTP</font> | <font style="color:rgb(51, 51, 51);">流式处理，SSE/Streamable 协议支持</font> |
| <font style="color:rgb(51, 51, 51);">内容感知深度</font> | <font style="color:rgb(51, 51, 51);">根据 header/query/path 等部分进行流量转发</font> | <font style="color:rgb(51, 51, 51);">支持 OpenAI 协议，多模型协同，提示词改写，可能对流量需要有语义级别的理解</font> |
| <font style="color:rgb(51, 51, 51);">流控差异</font> | <font style="color:rgb(51, 51, 51);">Query Per Second</font> | <font style="color:rgb(51, 51, 51);">Token Per Second</font> |
| <font style="color:rgb(51, 51, 51);">内容安全</font> | <font style="color:rgb(51, 51, 51);">防御 DDos、SQL 注入等攻击手段</font> | <font style="color:rgb(51, 51, 51);">防御提示词注入、数据和模型投毒、无限资源消耗等攻击手段</font> |


<font style="color:rgb(51, 51, 51);">AI 网关伴随 AI 原生架构演进，会提供各类 AI 原子能力和场景化能力，助力企业应用完成智能化升级。同时，随着越来越多 AI 的概念被提出，例如 MCP、A2A，为了解决对应的场景的问题，Higress 也提供了对应的解决方案，在这些场景下我们也可能会称呼 Higress 为 MCP 网关、Agent 网关。</font>

### <font style="color:rgb(51, 51, 51);">API 网关</font>
<font style="color:rgb(51, 51, 51);">API First 是一种以接口设计为核心的开发范式，主张在应用开发初期即优先构建标准化、可复用的 API 接口，通过契约化通信推动系统间的高效集成与生态协同。Higress 提供 API 全生命周期管理、流量治理、安全控制、多端适配及可观测性等核心能力 ，具体包括：基于 OpenAPI 规范的契约优先设计、动态路由/限流熔断的弹性保障机制、OAuth2/JWT 身份认证体系、协议转换适配（HTTP/gRPC/Dubbo）以及监控告警等能力 。</font>

<font style="color:rgb(51, 51, 51);">高质量的 API 管理能力不仅解决了异构系统间的数据孤岛问题，更为企业构建AI训练数据管道、实现模型服务编排及资源配额管控提供了标准化通道 ，成为连接传统业务数据与智能应用的关键枢纽。</font>

### <font style="color:rgb(51, 51, 51);">Ingress 流量网关</font>
<font style="color:rgb(51, 51, 51);">K8s 的 Ingress 控制器提供了良好地扩展机制，Higress 从名字上也可以看出，其必然是支持 Ingress 的，同时还支持 Gateway API。如果是存量的 nginx-ingress 用户，也可以低成本迁移至 Higress，Higress 完全兼容 nginx-ingress 注解。</font>

### <font style="color:rgb(51, 51, 51);">微服务网关</font>
<font style="color:rgb(51, 51, 51);">背靠阿里巴巴开源生态，Higress 与微服务中间件生态都有良好的适配度，可以对接 Nacos、Zookeeper、Consul 和 Eureka 等注册中心，支持 Dubbo 和 Grpc 协议转换，可以作为微服务网关直接对接 Dubbo、Spring Cloud 等框架构建的微服务应用。</font>

## <font style="color:rgb(51, 51, 51);">Higress 部署架构</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/156306/1747478068440-d56476a2-35d2-4aa5-9828-cbc29cbd7594.png)

<font style="color:rgb(51, 51, 51);">以 K8s 部署 Higress 为例，介绍 Higress 的基本组件</font>

+ <font style="color:rgb(51, 51, 51);">higress-console 控制台</font>
+ <font style="color:rgb(51, 51, 51);">higress-controller 控制面</font>
+ <font style="color:rgb(51, 51, 51);">higress-gateway 数据面</font>

<font style="color:rgb(51, 51, 51);">配置信息主要以 CRD 的形式存储在 K8s etcd 中，不依赖额外的存储组件。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/291935/1739938430331-4ef9dec2-b8da-4f0b-84a3-1f00cf6b6912.png?x-oss-process=image%2Fformat%2Cwebp)

<font style="color:rgb(51, 51, 51);">higress-controller 是一个核心组件，用于监听 K8s APIServer，完成对应等规则的转换：K8s Ingress -> Istio API -> xDS，再实现配置下发。higress-controller 有两个容器，作用如下：</font>

+ <font style="color:rgb(51, 51, 51);">higress-core：监听 </font><font style="color:rgb(13, 18, 57);">Kubernetes API</font><font style="color:rgb(51, 51, 51);">，将 ingress & higress crd 等内容转换为istio api</font>
+ <font style="color:rgb(51, 51, 51);">pilot: 移植 istiod pilot 模块的能力。将 istio api 转换为 xDS，同时将其下发给 envoy</font>

<font style="color:rgb(51, 51, 51);">higress-gateway 是另一个核心组件，集成了 envoy ，用于数据面的实际流量转发。</font>

## <font style="color:rgb(51, 51, 51);">Higress 开源贡献指引</font>
### 了解 Higress
<font style="color:rgb(51, 51, 51);">Higress 主站：</font>[<font style="color:rgb(65, 131, 196);">https://higress.cn/</font>](https://higress.cn/)

<font style="color:rgb(51, 51, 51);">Higress AI 网关主站：</font>[<font style="color:rgb(65, 131, 196);">https://higress.ai/</font>](https://higress.ai/)

快速开始：[https://higress.cn/docs/latest/user/quickstart/](https://higress.cn/docs/latest/user/quickstart/)

<font style="color:rgb(51, 51, 51);">推荐</font><font style="color:rgb(23, 24, 28);">在标准 K8s 集群中</font><font style="color:rgb(51, 51, 51);">进行 Higress 的部署，这也是 Higress 生产部署推荐的方案：</font>

```plain
helm repo add higress.io https://higress.cn/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
```

<font style="color:rgb(51, 51, 51);">仅需两行命令即可完成 Higress 的一键安装，如果你没有现成的 K8s 集群可以使用，那么非常推荐使用 Kind 来本地搭建一个 K8s 集群，可以参考快速开始中的步骤进行 Kind 的安装（或者其他本地 K8s 部署方案均可），与标准 K8s 集群相比，本地方案仅需额外添加 </font><font style="color:rgb(53, 56, 65);background-color:rgb(237, 238, 243);">--set global.local=true</font><font style="color:rgb(51, 51, 51);"> 开关即可。</font>

```plain
helm repo add higress.io https://higress.cn/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
```

<font style="color:rgb(51, 51, 51);">拥有一个 Higress 环境是开源贡献的第一步，你可以快速体验 Higress 功能，挑选你感兴趣的能力进行功能验证。例如：</font>

+ 配置 httpbin.org 服务，进行简单路由场景的验证
+ 配置 DeepSeek/通义千问等模型服务代理，感受 Higress 支持多种 AI 提供商的代理能力
+ 搭配 cherrystudio/deepchat/LobeChat 等 AI 客户端，对接到你自己的 Higress
+ 配置 ai-proxy/ai-token-ratelimit 等 Higress 提供的 AI 插件，感受 Higress 对 AI 流量的治理能力
+ ...

你可以在 https://higress.cn 的用户指南中尝试寻找你感兴趣的功能文档。

### 组件贡献指引
Higress 各个组件和模块支持多种语言进行编写，无论你熟悉哪一主流编程语言亦或是对 CICD、文档感兴趣，都是对 Higress 开源的一种贡献。

**higress-console**

后端基于 Java SpringBoot 构建，前端基于 NodeJS <font style="color:rgb(23, 24, 28);">飞冰（ICE）</font><font style="color:rgb(23, 24, 28);">构建</font>

可参考：《<font style="color:rgb(23, 24, 28);">如何在本地开发和调试 Higress 控制台》</font>https://higress.cn/blog/console-dev/

仓库地址：https://github.com/higress-group/higress-console

**higress-controller**

<font style="color:rgb(53, 56, 65);">Higress 的控制面程序，会连接 Istio ，用于生成 Istio API 对象，通过 xDS 协议发送给 Istio。</font>

<font style="color:rgb(53, 56, 65);">在 higress 仓库目录下执行 </font>`<font style="color:rgb(53, 56, 65);background-color:rgb(237, 238, 243);">make build</font>`<font style="color:rgb(53, 56, 65);"> 即可进行本地环境能运行的二进制编译</font>

可参考 https://higress.cn/docs/latest/dev/architecture/

**higress-gateway**

higress 数据面上游为 envoy，几乎很少有需求会直接修改 envoy 本体。

**插件开发**

Higress 提供丰富的插件扩展机制，插件位于 https://github.com/alibaba/higress/tree/main/plugins。

核心插件主要使用 Go 进行开发，可以参考《<font style="color:rgb(23, 24, 28);">使用 GO 语言开发 WASM 插件</font>》https://higress.cn/docs/latest/user/wasm-go 进行开发。

**文档贡献**

Higress 官网仓库为 higress-group.github.io ，其中官网文档以及博客均通过 markdown 文件的方式维护在这个项目中，如果需要新增或者修改文档内容，可以通过向该项目提交 PR 完成。

仓库地址：https://github.com/higress-group/higress-group.github.io

**运维**

Higress 支持 helm 部署，helm 模板位于

https://github.com/alibaba/higress/tree/main/helm

https://github.com/higress-group/higress-console/tree/main/helm

Higress 支持通过 AI 的方式进行运维，我们可以将 higress-ops-mcp-server 组建通过mcp server方式提供给大模型调用，另外 Higress 还支持以 Higress 命令行的方式进行运维，通过 hgctl 方式进行 higress 集群的快速部署与运维。

仓库地址：https://github.com/higress-group/higress-ops-mcp-server

仓库地址：https://github.com/higress-group/hgctl

### 开始贡献
无论贡献者是出于什么目的:

+ <font style="color:rgb(54, 54, 54);">巩固技能</font>
+ <font style="color:rgb(54, 54, 54);">结交朋友</font>
+ <font style="color:rgb(54, 54, 54);">建立个人影响力</font>
+ <font style="color:rgb(54, 54, 54);">传承开源精神</font>
+ <font style="color:rgb(54, 54, 54);">工作需要</font>
+ <font style="color:rgb(54, 54, 54);">...</font>

<font style="color:rgb(54, 54, 54);">Higress 都非常欢迎你的到来。需要明确的一点是，并非只有提交代码才算是开源贡献，提交 Higress 使用过程中的问题 issue，为新特性补充用户文档，补充任何使用过程中缺失的文档，报告安全问题，补充测试用例，参与 Higress 社区组织的各类 SIG 钉钉兴趣小组并提出 Higress 未来发展方向的建议... </font>

<font style="color:rgb(54, 54, 54);">如果你已经初步了解了 Higress 或者希望带着一些目标来学习 Higress，可以尝试从 github 的 issue 列表 </font>https://github.com/alibaba/higress/issues 中<font style="color:rgb(54, 54, 54);">，寻找你感兴趣的 issue 进行认领。认领 issue 是主要的贡献方式。</font>

## 开源最佳实践
### 有效沟通
无论你出于什么样的目的：仅仅是一次性的贡献，亦或是永久性的加入社区，都得和他人进行沟通和交往，这是你要在开源圈发展必须修炼的技能。

在你开启一个 issue 或 PR 之前，或者是在交流群问问题之前，请牢记下面所列出的几点建议，会让你的工作更加的高效。

**给出上下文**以便于让其他人能够快速的理解。比方说你运行程序时遇到一个错误，要解释你是如何做的，并描述如何才能再现错误现象。又比方说你是提交一个新的想法，要解释你为什么这么想，对于项目有用处吗（不仅仅是只有你！）

>  _“当我做 Y 的时候 X 不能工作”_
>
>  _“X 出问题! 请修复它。”_
>

**在进一步行动前，做好准备工作。** 不知道没关系，但是要展现你尝试过、努力过。在寻求帮助之前，请确认阅读了项目的 README、文档、问题（开放的和关闭的）、邮件列表，并搜索了网络。当你表现出很强烈的求知欲的时候，人们是非常欣赏这点的，会很乐意的帮助你。

>  _“我不确定 X 是如何实现的，我查阅了相关的帮助文档，然而毫无所获。”_
>
>  _“我该怎么做 X ?”_
>

**保持请求内容短小而直接。**正如发送一份邮件，每一次的贡献，无论是多么的简单，都是需要他人去查阅的。很多项目都是请求的人多，提供帮助的人少。相信我，保持简洁，你能得到他人帮助的机会会大大的增加。

>  _“我很乐意写 API 教程。”_
>
>  _” 有一天我驾驶汽车行驶在高速公路上，在某个加油站加油的时候，突发奇想，我们应该这么做，不过在我进一步解释之前，我先和大家展示一下。。。”_
>

**让所有的沟通都是在公开场合下进行。**哪怕是很不起眼的小事，也不要去给维护者发私信，除非是你要分享一些敏感信息（诸如安全问题或严重的过失）。你若能够保持谈话是公开的，很多人可以你们交换的意见中学习和受益。

>  _(评论) “@维护者 你好！我们该如何处理这个 PR？”_
>
>  _(邮件) “你好，非常抱歉给发信，但是我实在很希望你能看一下我提交的 PR。”_
>

**大胆的提问（但是要谨慎！）。**每个人参与社区，开始的时候都是新手，哪怕是非常有经验的贡献者也一样，在刚进入一个新的项目的时候，也是新手。出于同样的原因, 甚至长期维护人员并不总是熟悉一个项目的每一部分。给他们同样的耐心, 你也会得到同样的回报。

>  _“感谢查看了这个错误，我按照您的建议做了，这是输出结果。”_
>
>  _“你为什么不修复我的问题？这难道不是你的项目吗？”_
>

**尊重社区的决定。**你的想法可能会和社区的优先级、愿景等有差异，他们可能对于你的想法提供了反馈和最后的决定的理由，这时你应该去积极的讨论，并寻求妥协的办法，维护者必须慎重的考虑你的想法。但是如果你实在是不能同意社区的做法，你可以坚持自己！保持自己的分支，或者另起炉灶。

>  _“你不能支持我的用例，我蛮失望，但是你的解释仅仅是对一小部分用户起作用，我理解是为什么。感谢你的耐心倾听。”_
>
>  _“你为什么不支持我的用例？这是不可接受的！”_
>

开源是由来自世界各地的人们共同协作实现的。面临的问题是跨语言、跨文化、不同的地理为止、不同的时区，另外，撰写文字的沟通更是难上加难，无法传达语气和情绪。请让这些会话都充满善意吧！在以下情形中请保持礼貌：推动一个想法、请求更多的上下文、进一步澄清你的立场。既然你在互联网找到了自己的所需，那么请尝试让它变得更好！

### 创建 issue
你应该在遇到下列情况下，去创建一个 issue：

+ 报告你自己无法解决的错误
+ 讨论一个高级主题或想法
+ 期望实现某新的特性，或者其它项目的想法

在 issue 的沟通中几点实用的技巧:

+ 如果你刚好看到一个开放的 issue，恰是你打算解决的，添加评论，告诉他人你将对此展开工作，并及时响应。这样的话，可以避免他人重复劳动。
+ 如果说某个 issue 已经开放很久了，这可能是已经有人正在解决中，又或者是早已经解决过了，所以也请添加评论，在打算开始工作之前，最好是确认一下。
+ 如果你创建了一个 issue，但是没多久自己解决了，也要添加评论，让其他人知道，然后关闭该 issue。记录本身就是对社区的贡献。

### 创建 pull request
在下面的情形时，请你务必使用 PR：

+ 修复缺陷( 例如，纠正拼写错误、损坏的链接、或者是其它较明显的错误）
+ 开始一项别人请求的任务，或者是过去在 issue 中早就讨论过的

非常推荐大家在 issue 中挑选自己自己感兴趣，能够胜任的任务，并评论，Maintainer 或者其他有权限的角色会给你进行指派，同样的，也确保某些 issue 是否已经被其他人认领了。

一个 PR 并不代表着工作已经完成。它通常是尽早的开启一个 PR，这使得其他人可以反馈意见。在发送pull request之前，请同步 github 仓库和远程仓库，这会使 pull request 简单明了，具体操作请看如下所示步骤：

```plain
git remote add upstream git@github.com:alibaba/higress.git
git fetch upstream
git rebase upstream/main
git checkout -b your_awesome_patch
... add some work
git push origin your_awesome_patch
```

## Higress AI Landscape
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1747618543269-937ae308-84d0-4445-a49f-5c690850d2b9.png)

+ MCP 服务管理。Higress 开源控制台将直接提供开箱即用的 MCP 服务管理入口，支持三类场景： OpenAPI 转 MCP，DB 转 MCP，SSE/Streamable MCP 直接路由能力，借助该功能，用户可以基于 Higress 快速构建出自己的 MCP Marketplace。【5 月底至 6 月上旬】
+ Nacos MCP Registry 集成。Nacos 3.0 已经支持集成 Higress，将会进一步优化集成方案，支持从 Nacos 3.0 导入 MCP 服务，使得 Higress x Nacos 3.0 集成更加丝滑。【6 月至 7 月】
+ Agent 管理。Higress 将 Higress 提供面向多场景的 AI Agent 应用管理能力，实现 Agent 应用的发现、Agent Card 管理、A2A 协议转换、上下文内存管理等面向 A2A 协议的核心能力，帮助开发者以低代码方式快速构建 AI 应用。在能力规划方面，Higress 正在推进动态 Prompt 工程、可插拔工具集、Agent 应用灰度策略及基于 A2A 协议的多 Agent 协同编排等高级特性开发。【6 月至 9 月】
+ AI API 管理。Higress 作为 AI 原生网关，通过 API 货币化管理、统一鉴权与流量治理、全链路可观测性等核心能力为企业提供完整的 AI API 管理解决方案。此外，Higress 规划构建 MCP 开放市场、Agent 开放市场，两大开放市场加速 AI 应用生态，助力开发者快速构建与部署智能化 Agent 应用。【6 月至 9 月】

## <font style="color:rgb(51, 51, 51);">Higress 社区</font>
<font style="color:rgb(51, 51, 51);">如有开源贡献意向或者 Higress 使用问题，可以加群交流，Higress 社区交流 3 群，钉钉群号：</font>107690002780。  



