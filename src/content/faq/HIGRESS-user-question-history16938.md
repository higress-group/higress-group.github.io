---
id: "question-history-16938"
title: "200字讲明白什么是云原生网关 higress"
date: "2024-09-26"
category: "expertConsultation"
description: "Higress是一款专为云原生设计的API网关，它集成了流量网关、微服务网关与安全网关的功能于一身，简化了部署与运维的复杂性。在云原生架构下，它基于开源Istio与Envoy，不仅支持南北向流量管理，也擅长东西向微服务间通信，还内建了WAF模块强化安全防护。Higress通过深度融合Dubbo、Na"
tags: ["云原生网关","Higress","200字","解释","技术","概念","网络"]
keywords: ["云原生网关","Higress","200字","解释","技术","概念","网络"]
---

## 用户问题 ： 
 200字讲明白什么是云原生网关 higress  

---------------
## 专家官方解答 ：

Higress是一款专为云原生设计的API网关，它集成了流量网关、微服务网关与安全网关的功能于一身，简化了部署与运维的复杂性。在云原生架构下，它基于开源Istio与Envoy，不仅支持南北向流量管理，也擅长东西向微服务间通信，还内建了WAF模块强化安全防护。Higress通过深度融合Dubbo、Nacos、Sentinel等微服务技术栈，以及对Ingress与Gateway API标准的支持，实现了与Kubernetes生态的高度整合，同时也简化了从Nginx Ingress迁移的过程。其设计旨在应对现代云环境的挑战，如动态配置更新需求，提供了一种更高效、灵活的解决方案，特别是在需要频繁更新配置或维持长连接的场景下，展现出了相比传统网关如Nginx更为优越的热更新能力与智能化管理特性[[1](https://link.zhihu.com/?target=https%3A//higress.cn/docs/latest/overview/what-is-higress/)]。简而言之，Higress代表了新一代云原生网关的发展方向，它让API管理更加智能、安全且高效。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress Higress是什么? 
 
 * 专家经验：Higress 支持配置热更新吗?？ 
 
 * 专家经验：higress 控制台本地运行的相关介绍 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16943)给我们反馈。
