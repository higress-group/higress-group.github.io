---
id: "question-history-16710"
title: "Higress 和 Kong 有什么区别"
date: "2024-09-03"
category: "expertConsultation"
description: "Higress和Kong都是流行的API网关解决方案，但它们之间存在一些关键区别，这些差异可以从它们的设计理念、核心技术和应用场景来分析。### 设计理念与核心技术**Higress:**- **设计理念：** Higress强调的是云原生环境下的高集成能力和简化运维。它是一个基于开源Istio和E"
tags: ["Higress","Kong","区别"]
keywords: ["Higress","Kong","区别"]
---

## 用户问题 ： 
 Higress 和 Kong 有什么区别  

---------------
## 专家官方解答 ：

Higress和Kong都是流行的API网关解决方案，但它们之间存在一些关键区别，这些差异可以从它们的设计理念、核心技术和应用场景来分析。

### 设计理念与核心技术

**Higress:**
- **设计理念：** Higress强调的是云原生环境下的高集成能力和简化运维。它是一个基于开源Istio和Envoy的云原生API网关，旨在通过一体化的设计（流量网关 + 微服务网关 + 安全网关）来降低部署与运维成本。
- **核心技术：** Higress利用Envoy的强大代理功能和Istio的服务网格能力，支持Ingress与Gateway API标准，确保了与云原生生态的紧密集成。此外，它深度集成Dubbo、Nacos、Sentinel等微服务技术栈，特别适合阿里巴巴集团内部以及与之类似的微服务架构。

**Kong:**
- **设计理念：** Kong则更侧重于提供高度可扩展和灵活的API管理平台。它通过插件化的架构设计，允许用户根据需求添加功能，比如认证、限流、日志记录等，从而提供了极高的灵活性和定制性。
- **核心技术：** Kong最初基于NGINX，后来发展出了基于Go语言的高性能数据平面Kong Gateway，以及管理平面Kong Manager和Kong Hub。这种分离式的架构让Kong能够独立于底层代理技术进行快速迭代和扩展。

### 应用场景与特性

- **Higress**由于其内置的安全网关（如WAF）和对微服务生态的深度集成，特别适合那些希望在云原生环境下实现微服务治理、并追求低延迟、高安全性和运维效率的企业。
- **Kong**由于其高度的可扩展性和丰富的插件市场，适用于需要高度定制化API管理方案的场景，特别是当企业有特定的安全、监控或性能需求时，Kong的灵活性可以更好地满足这些需求。

### 结论

选择Higress还是Kong，很大程度上取决于您的具体需求和现有技术栈。如果您正处在云原生转型中，寻求高度集成、简化运维和深度微服务支持，Higress可能是更合适的选择。相反，如果您需要一个高度灵活、可高度定制的API管理平台，尤其是在已有NGINX基础或需要特定插件支持的情况下，Kong则更能满足您的需求。

以上分析基于当前的知识内容，具体选择还需结合实际项目的技术要求、团队熟悉度和长期发展规划来综合考量。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress Higress是什么? 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16724)给我们反馈。
