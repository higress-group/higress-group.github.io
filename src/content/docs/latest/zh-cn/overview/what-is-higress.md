---
title: Higress是什么?
keywords: [Higress]
description: Higress是什么
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/what-is-higress.md
---


## Higress 是什么?

Higress 是基于阿里内部多年的 Envoy Gateway 实践沉淀，以开源 [Istio](https://github.com/istio/istio) 与 [Envoy](https://github.com/envoyproxy/envoy) 为核心构建的云原生 API 网关。

Higress 在阿里内部作为 AI 网关，承载了通义千问 APP、百炼大模型 API、机器学习 PAI 平台等 AI 业务的流量。

Higress 能够用统一的协议对接国内外所有 LLM 模型厂商，同时具备丰富的 AI 可观测、多模型负载均衡/fallback、AI token 流控、AI 缓存等能力：

![](https://img.alicdn.com/imgextra/i1/O1CN01fNnhCp1cV8mYPRFeS_!!6000000003605-0-tps-1080-608.jpg)

### 什么是 AI 网关

AI Gateway = AI Native API Gateway

AI 网关的本质依然是 API 网关，AI 原生的意义在于，在这样的 API 网关里，AI 是一等公民。API 研发，API 供应，API 消费，以及 API 观测都基于 AI 场景下的需求，演进出全新的能力。

这是传统 API 网关的功能范畴，AI 场景下仍然有其通用价值：

![](https://img.alicdn.com/imgextra/i3/O1CN010HLOBV28WZkzCkHnE_!!6000000007940-2-tps-1904-908.png)

在 AI 场景下，API 网关的功能范畴进一步扩展：

![](https://img.alicdn.com/imgextra/i1/O1CN011Tlzje1gJvZrIfcCT_!!6000000004122-2-tps-1904-966.png)




## 核心优势

- **生产等级**

  脱胎于阿里巴巴2年多生产验证的内部产品，支持每秒请求量达数十万级的大规模场景。

  彻底摆脱 Nginx reload 引起的流量抖动，配置变更毫秒级生效且业务无感。对 AI 业务等长连接场景特别友好。

- **流式处理**

  支持真正的完全流式处理请求/响应 Body，Wasm 插件很方便地自定义处理 SSE （Server-Sent Events）等流式协议的报文。

  在 AI 业务等大带宽场景下，可以显著降低内存开销。  
    
- **便于扩展**
  
  提供丰富的官方插件库，涵盖 AI、流量管理、安全防护等常用功能，满足90%以上的业务场景需求。

  主打 Wasm 插件扩展，通过沙箱隔离确保内存安全，支持多种编程语言，允许插件版本独立升级，实现流量无损热更新网关逻辑。

- **安全易用**
  
  基于 Ingress API 和 Gateway API 标准，提供开箱即用的 UI 控制台（demo 点[这里](http://demo.higress.io/)），WAF 防护插件、IP/Cookie CC 防护插件开箱即用。

  支持对接 Let's Encrypt 自动签发和续签免费证书，并且可以脱离 K8s 部署，一行 Docker 命令即可启动，方便个人开发者使用。

## 使用场景

- **AI 网关**:

  Higress 提供了一站式的 AI 插件集，可以增强依赖 AI 能力业务的稳定性、灵活性、可观测性，使得业务与 AI 的集成更加便捷和高效。

- **Kubernetes Ingress 网关**:

  Higress 可以作为 K8s 集群的 Ingress 入口网关, 并且兼容了大量 K8s Nginx Ingress 的注解，可以从 K8s Nginx Ingress 快速平滑迁移到 Higress。
  
  支持 [Gateway API](https://gateway-api.sigs.k8s.io/) 标准，支持用户从 Ingress API 平滑迁移到 Gateway API。
  
- **微服务网关**:

  Higress 可以作为微服务网关, 能够对接多种类型的注册中心发现服务配置路由，例如 Nacos, ZooKeeper, Consul, Eureka 等。
  
  并且深度集成了 [Dubbo](https://github.com/apache/dubbo), [Nacos](https://github.com/alibaba/nacos), [Sentinel](https://github.com/alibaba/Sentinel) 等微服务技术栈，基于 Envoy C++ 网关内核的出色性能，相比传统 Java 类微服务网关，可以显著降低资源使用率，减少成本。
  
- **安全防护网关**:

  Higress 可以作为安全防护网关， 提供 WAF 的能力，并且支持多种认证鉴权策略，例如 key-auth, hmac-auth, jwt-auth, basic-auth, oidc 等。  
