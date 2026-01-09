---
id: "question-history-16381"
title: "介绍一下higress"
date: "2024-09-26"
category: "expertConsultation"
description: "Higress是一款高性能的云原生API网关，它基于阿里巴巴内部的Envoy Gateway实践发展而来，核心构建于开源的Istio与Envoy之上。Higress的主要特点是集成了流量网关、微服务网关以及安全网关的功能，实现了三合一的高度集成，从而降低了部署和运维成本，同时保持了强大的功能特性。它"
tags: ["higress","介绍"]
keywords: ["higress","介绍"]
---

## 用户问题 ： 
 介绍一下higress  

---------------
## 专家官方解答 ：

Higress是一款高性能的云原生API网关，它基于阿里巴巴内部的Envoy Gateway实践发展而来，核心构建于开源的Istio与Envoy之上。Higress的主要特点是集成了流量网关、微服务网关以及安全网关的功能，实现了三合一的高度集成，从而降低了部署和运维成本，同时保持了强大的功能特性。它深度集成了Dubbo、Nacos、Sentinel等微服务技术栈，确保了与现有云原生生态的无缝对接。

### Higress的关键特点与优势：

1. **三合一高集成能力**：Higress将流量网关、微服务网关和安全网关整合在一起，简化了架构，提高了效率。它能处理南北向（外部到集群）和东西向（集群内部）的流量，同时内置WAF模块，提供安全防护。

2. **云原生友好**：完全兼容Kubernetes生态，支持Ingress与Gateway API标准，易于融入现有的云原生技术栈，并且支持从Nginx Ingress平滑迁移，降低了迁移成本。

3. **高性能与低延迟**：基于Envoy的高性能代理，优化了网络请求的处理速度，减少链路往返时间（RT），提升了用户体验。

4. **强大的安全防护**：内置的WAF模块能够在单一网关层面完成Web应用防火墙的功能，无需额外部署，增强了系统的安全性。

5. **阿里巴巴内部验证**：Higress起源于阿里巴巴内部的实战需求，已经过双11、双12等大规模流量考验，支持包括优酷、钉钉在内的多个重要业务，证明了其稳定性和可靠性。

### 为什么选择Envoy + Istio作为内核：

- **云原生趋势**：Envoy的增长迅速，尤其是在Service Mesh领域，Istio + Envoy的组合能够覆盖服务间通信（东西向）和外部访问（南北向）的全场景流量管理。
  
- **标准化与兼容性**：尽管Ingress存在一些限制，但仍是主流标准。Envoy与Istio的结合既符合当前标准，又为未来的Gateway API标准做好准备，确保了长期的技术先进性和生态适应性。

综上所述，Higress以其独特的设计和强大的功能集合，成为现代云原生架构中不可或缺的组件，特别适合追求高效、安全、易维护的微服务部署环境。


<font color="#949494">---------------</font> 


## 参考链接 ：



 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16382)给我们反馈。
