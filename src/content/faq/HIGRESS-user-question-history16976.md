---
id: "question-history-16976"
title: "模块详细介绍"
date: "2024-09-11"
category: "expertConsultation"
description: "Higress模块详细介绍如下：1. **Higress简介**   Higress是一个高级云原生网关解决方案，基于开源Istio和Envoy项目，集成了流量网关、微服务网关、安全网关三大功能于一体。它旨在简化部署和运维流程，同时保持高性能和服务能力。Higress与Dubbo、Nacos、Sen"
tags: ["请您提供冒号后的文章内容，以便我可以帮助您提取关键词。"]
keywords: ["请您提供冒号后的文章内容，以便我可以帮助您提取关键词。"]
---

## 用户问题 ： 
 模块详细介绍  

---------------
## 专家官方解答 ：

Higress模块详细介绍如下：

1. **Higress简介**
   Higress是一个高级云原生网关解决方案，基于开源Istio和Envoy项目，集成了流量网关、微服务网关、安全网关三大功能于一体。它旨在简化部署和运维流程，同时保持高性能和服务能力。Higress与Dubbo、Nacos、Sentinel等微服务生态系统紧密集成，确保了与现有技术栈的无缝对接。此外，它还全面兼容Ingress与Gateway API标准，便于在云原生环境中实施，并支持从Nginx Ingress平滑迁移。

2. **可观测性特性 - 链路追踪**
   Higress内置了强大的可观测性能力，其中包括链路追踪。链路追踪对于理解分布式系统中的请求流动路径和性能至关重要。Higress利用Envoy的链路追踪能力，支持与主流链路追踪系统如Skywalking集成，通过配置configmap即可轻松开启Skywalking集成并设定采样率。

3. **与Skywalking集成**
   - **配置示例**：在Higress的配置文件(configmap)中加入Skywalking的配置信息，如服务地址和服务端口，以及采样率设置，即可实现与Skywalking的集成。
   ```yaml
     data:
       higress: |-
         tracing:
           enable: true
           sampling: 100
           timeout: 500
           skywalking:
             service: skywalking-oap-server.op-system.svc.cluster.local
             port: 11800
   ```
   - **测试环境架构**：通过在本地Kubernetes集群部署一套Spring Boot应用，模拟复杂的服务调用链路，以此展示Higress与Skywalking结合后的链路追踪效果。

4. **链路追踪能力应用**
   - **微服务调用拓扑图**：Skywalking提供微服务之间的调用关系拓扑图，帮助开发者清晰地掌握系统架构和依赖关系。
   - **性能瓶颈定位**：通过链路追踪数据，可以快速识别出请求处理过程中的慢节点，如案例中springboot-svc-4-2的高响应时间，从而进行针对性优化。
   - **错误节点排查**：当系统中某环节发生错误时，链路追踪能精确指出错误发生的节点及其影响范围，如模拟删除springboot svc 4-2导致的连锁错误效应，便于快速定位和修复问题。

综上所述，Higress作为一个高性能、易集成的云原生网关，其链路追踪功能与Skywalking的结合为分布式系统提供了强大的可观测性和故障排查能力，极大地提升了开发和运维效率。

参考链接：
- [Higress + Skywalking + SpringBoot 链路追踪探索](https://github.com/higress-group/higress-demo/tree/main/observability/skywalking)


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress Higress + Skywalking + SpringBoot 链路追踪探索 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16983)给我们反馈。
