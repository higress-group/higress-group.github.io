---
title: "阿里巴巴 MCP 分布式落地实践：快速转换 HSF 到 MCP server"
description: "阿里巴巴 MCP 分布式落地实践：快速转换 HSF 到 MCP server"
date: "2025-05-13"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：行词

本文产生自阿里巴巴内部 MCP 实践经验，实现了应用不做代码改动，通过 Higress AI 网关实现 MCP 协议卸载，快速将内部的 HSF 服务转换为 MCP Server ，将现有微服务接入 MCP 生态。在业务和技术同时不踏空的前提下，保留对 AI 原生应用基础设施的选择权。

HSF 是阿里巴巴内部以 Apache Dubbo 为内核的 RPC 框架，提供了支持超大规模高性能的 RPC 协议和高质量框架层实现支持，为阿里巴巴内部研发同学和业务提供了稳定易用高效的微服务生态。目前阿里内部 HSF 有百万级别生产级实例，经历了多年双十一百亿级洪峰考验。围绕 HSF，内部也有多年演进出的支持超大规模稳定运行的注册中心和配置中心，Nacos 就是基于其设计思想脱胎而生的开源产品。

Higress 是阿里巴巴开源的 AI 网关。2020 年，Higress 承担了集团跨 VPC 通信的重任，在保证高性能的前提下，其丰富的特性显著降低了业务研发的成本，成为内部跨域通信的网关事实标准。2022 年，在内部稳定运行两年，经历了单集群百万 QPS 的流量验证后，Higress 宣布开源，由于其出色的性能和易用性，迅速就获得了大量用户关注，并成为众多商业化客户的首选网关。 2024 年后，Higress 作为最被广泛使用的 AI 网关，在大模型和 MCP 领域成为官方认证的网关方案。

> 有关 Higress 的开源经历可以参考这篇文章，[阿里巴巴重磅开源云原生网关](https://higress.cn/blog/higress/) 。
>

在 MCP 生态中, Higress 作为关键的基础设施组件，通过其协议转换能力，实现了将现有服务无代码改动地接入 MCP 生态。 在MCP服务托管方案中，Higress 负责接收 MCP 请求并完成协议卸载，提供统一的身份认证、流量调度、参数映射与安全审计等能力，使开发者能在不深入了解 MCP 协议细节的情况下，快速将现有服务暴露为 MCP Server。这种 hosting 模式有效解决了 MCP 协议快速迭代、SDK 不稳定等挑战，为企业在 AI 原生应用发展中提供了灵活选择的空间。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1747016904904-5c8d918d-0de8-45fe-bc1e-91ead753683c.webp)

接下来回答一个问题，阿里内部这么多的 HSF 服务，为什么选择 hosting 的方式接入 MCP，而不是原生 SDK 的方式接入？

# 01 挑战
+ MCP 自身演进非常快，内部用户非常难跟上其迭代节奏。0326的 SPEC 距离上次发布只过了 4 个月，根据 MCP 2025 的 RoadMap，未来可能还会有 3 次以上的 SPEC 发布，这些 SPEC 不保证协议层面完全前向兼容。很容易遇到现在接入了官方开源的 SDK，后面还需要处理线上的老版本 MCP 如何升级到最新版本的重复投入和稳定性成本问题，对集团内核心应用的研发而言会非常痛苦。
+ 现有 MCP 的 SDK 还比较初级，仅对 SPEC 做了简单实现，在可用性上远远达不到生产级别，需要较长的时间稳定。比如 java-sdk 的 0.7.0 和 0.8.0 的 API 有非常多的改动项，MCP Java SDK Migration Guide: 0.7.0 to 0.8.0。对于应用开发同学而言，不光要升级，还要改接入的代码，成本和风险都是翻倍的。
+ MCP 生态虽然热火朝天，但缺乏系统化和最优实践，达到共识的时间成本和个人的学习成本不可忽视。如何快速掌握 MCP 协议和 MCP 应用开发，最快的方式当然是在现有的业务场景里先跑起来，然后一边运行一边学习。那么如何才能在不懂 MCP 的前提下跑起来自己的 MCP Server ？

# 02 转换 HSF Service -> MCP Server
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1747016904831-721f54df-5a5b-4f05-89a0-690f0b3991d4.webp)

  


#### 组件
+ Higress 网关：承接 MCP 流量，提供统一身份认证、流量调度、参数映射、安全审计等切面能力。
+ MCP 控制台：AI 应用研发同学创建和维护 MCP server/tools/prompts 的平台，提供工具托管、调试、编排能力。
+ MCP Registry：注册中心，负责集团内所有 MCP server 的注册和 client 发现，由 HSF 注册中心承担。
+ MCP Metadata Center：存储提示词、MCP server 元数据、工具元数据、版本化支持等，由 HSF 配置中心承担。

#### 操作步骤
step1 ：打开对应环境的 HSFOPS 后台，选择 MCP 侧边栏

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1747016904836-df237c65-9fe7-4c6b-8781-ba3768d94dd9.webp)

step2：选择需要转 MCP Tool 的 hsf 应用（自己为 owner/ops 的应用）、服务名和方法名。

注意：工具描述需要准确具体，用于给大模型识别 tool 的用途。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1747016904850-afe3d64a-0a12-43bc-909b-0f98f26699ed.webp)

step3：补充标记为 //TODO 部分的 method 的入参的 fieldName 和 description

请求参数结构会自动生成，只需添加名称(key) 和描述 (description)。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1747016904868-5bae550d-1d91-4093-8ae9-1b71d9c011f4.webp)

step4：利用上述工具以 MCP SSE 方式访问域名( tool 创建完后一分钟左右即可被 list )

http://{MCP endpoint prefix}/{applicationName}/sse

代码配置如下

```plain
{
  "mcpServers": {
    "{applicationName}": {
      "url": "http://{MCP endpoint prefix}/{applicationName}/sse"
    }
  }
}
```

#### 实际效果
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1747016905522-25875504-7771-47ed-a12c-fd1bf07f84e2.webp)

# 03 AI Infra 视角对 MCP 的思考
+ MCP 不是银弹。从分布式领域和 AI 基础设施的角度看，MCP 作为一个通信协议或 AI 智能体协议都不够成熟，远达不到生产级别落地的标准。因此，无论是业务还是基础设施团队，盲目的选择 All in MCP 是不负责任的表现。通过快速跟进，快速试错实现 AI 业务场景的原型落地是更好的选择。因此，AI infra 团队关注的重点应是如何降低业务创新的成本，而不是拉上业务一起为自己的错误决策埋单。将这一点落实到技术决策，选择由 Higress 网关承担 MCP 协议卸载，再适配内部已有协议是对阿里内部全局较优的选择。无论是 MCP 发展到足够成熟还是被其他的生态取代，业务都可以灵活的选择跟进或切换，整个公司的基础设施不会发生 vendor lock-in。
+ Market 重要吗？重要也不重要。AI 智能体解决的是如何扩展 LLMs 的边界，从而解决更复杂的实际问题。MCP 合理的定位是解决 MxN 的重复建设和标准化资源访问的问题，MCP Market 是一个自然而然的产品，其存在是有必要性的。但认为掌握了 Market 就掌握了一切，这是本末倒置的想法。合理的路径是基础设施适配先做到位，让业务研发同学能够有更多的选择权，更快的迭代速度，自然会有完善易用的 Market 作为门户存在。前面的积累如果没有做扎实，后者只能是空中楼阁。
+ 看起来只关注了 Tool 的转换， Prompts/Roots 和 Sampling 呢？回答这个问题需要扩展阅读一下 MCP 的诞生背景以及使用场景，包括 Anthropic 对其的定位和创建 MCP 的目标。MCP 是 AI 业务工程化的起点里程碑，但不是终点，在投入 MCP 的同时关注 A2A 和 ANP 这些 AI Agent 交互协议的发展是做 Infra 的团队的必然选择。

# 04 总结
本文提供了阿里内部大规模 HSF 服务快速转换为 MCP Server 的实践，用于帮助业务同学降低改造成本，快速融入 MCP 生态，紧跟 AI 原生应用的发展速度。目前看来，MCP 只是第一步，AI 原生应用的路还很长，希望这篇文章能对 AI Infra 领域感兴趣的同学和团队有所启发。


