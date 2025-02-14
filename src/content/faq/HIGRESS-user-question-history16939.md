---
id: "question-history-16939"
title: "为什么需要云原生网关？"
date: "2024-09-26"
category: "expertConsultation"
description: "Higress之所以需要云原生网关，主要是因为以下几个原因，依托于提供的知识进行分析：1. **传统网关的局限性：**   - 传统网关往往分为流量网关与业务网关两大类，分别处理南北向流量和东西向流量，以及不同层级的服务治理需求。但在云原生时代，应用架构向微服务转型，容器技术和Kubernetes成"
tags: ["云原生","网关","需要","Higress"]
keywords: ["云原生","网关","需要","Higress"]
---

## 用户问题 ： 
 为什么需要云原生网关？  

---------------
## 专家官方解答 ：

Higress之所以需要云原生网关，主要是因为以下几个原因，依托于提供的知识进行分析：

1. **传统网关的局限性：**
   - 传统网关往往分为流量网关与业务网关两大类，分别处理南北向流量和东西向流量，以及不同层级的服务治理需求。但在云原生时代，应用架构向微服务转型，容器技术和Kubernetes成为主流，单一职责的网关难以高效应对复杂的微服务架构和动态变化的云环境。

2. **云原生环境的需求：**
   - 云原生环境强调自动化、弹性伸缩和微服务治理。Kubernetes Ingress作为云原生生态的标准接口，简化了外部访问集群内部服务的配置管理。然而，原生Ingress在路由表达能力等方面存在局限，促使了更强大、灵活的云原生网关解决方案的需求。

3. **集成与扩展性：**
   - Higress选择Envoy + Istio作为内核，是因为它们在云原生领域具有广泛的接受度和强大的功能集。Envoy作为高性能的代理服务器，提供了丰富的网络功能和可观测性；Istio则进一步增强了服务网格的能力，使得流量管理和安全控制更为集中和高效。这种组合能够更好地支持微服务间通信、安全控制和策略实施。

4. **一站式解决方案：**
   - Higress设计为流量网关 + 微服务网关 + 安全网关的高集成形态，旨在降低部署运维成本，提升效率。它不仅支持南北向流量管理，还深度集成了Dubbo、Nacos、Sentinel等微服务技术栈，实现了一站式的服务发现、负载均衡、限流熔断等功能，简化了微服务架构下的网关部署和管理。

5. **热更新与灵活性：**
   - 与传统的Nginx相比，Higress支持长连接热更新，减少了配置变更带来的服务中断风险，提升了服务连续性和用户体验。这对于频繁更新配置的云原生环境至关重要。

6. **安全与性能：**
   - 内置的安全模块，如WAF，直接集成到Higress中，简化了安全防护链路，降低了请求延迟，同时提升了系统的安全性。

综上所述，Higress作为一款云原生网关，是为了解决传统网关在云原生环境下面临的挑战，满足现代微服务架构对高集成度、高性能、易运维、安全可控的需求。通过利用Envoy和Istio的强大力量，Higress提供了一个更加适应云原生趋势的解决方案，帮助用户构建更加健壮、灵活的服务架构。

相关链接：
- [Higress是什么?](https://link.zhihu.com/?target=https%3A//higress.cn/docs/latest/overview/what-is-higress/)
- [Higress官方文档 - 外部认证插件](https://higress.cn/docs/latest/plugins/authentication/ext-auth/?source=plugin)


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：Higress 支持配置热更新吗?？ 
 
 * 专家经验：higress Higress是什么? 
 
 * 专家经验：开源的higress支持 mse的鉴权模块功能吗 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16944)给我们反馈。
