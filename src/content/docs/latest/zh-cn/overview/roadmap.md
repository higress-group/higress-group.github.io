---
title: 版本计划
keywords: [Higress,roadmap]
description: Higress 版本计划.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/overview/roadmap.md
---

# 版本计划

| 版本号  | 版本核心目标 | 预计发布时间 | 企业版的版本映射 |
| ------- | -----------  | -----------  |  -----------  |  
| v0.6.0  | K8s 下黑屏操作(kubectl)达到**GA状态**；发布控制台预览版，提高安装部署的易用性   | 2023-01   | 1.1.x  | 
| v0.7.0  | 控制台发布正式版本，集成开箱即用的可观测   | 2023-02   |  1.1.x  | 
| v1.0.0  | 整体达到**GA状态**   | 2023-05   | 1.2.x  | 
| v1.1.0  | 增强控制台功能中微服务网关相关能力；支持非 K8s 下安装部署   | 2023-07   | 1.2.x  | 
| v1.2.0  | 支持作为 Knative 的网络层使用；支持 ARM 架构部署；支持对接 Consul   | 2023-08   | 1.2.x  | 
| v1.3.0  | 完整支持 GatewayAPI；支持 Operator 模式部署   | 2023-11   | 1.2.x  |  
| v1.4.0  | WASM 支持 redis 调用；简化 HTTPS 证书管理  | 2024-05   | 1.2.x  | 
| v2.0.0  | Istio/Envoy 内核版本升级，基于大量新插件提供更丰富的 API 网关能力  | 2024-08   | 2.0.x  | 
| v2.1.0  | 控制台支持 AI 流量入口管理，降低 AI 功能相关的使用成本  | 2025-02   | 2.1.x  | 
| v2.2.0  | 推出 Higress Agent 能力 | 2025-10   | 2.2.x  | 


> **注意**
> 
>  Higress 企业版和开源版使用相同的核心逻辑，但迭代节奏不同，所以版本号上会有差异。
> 
>  从 Higress v2.0.0 开始，企业版和开源版的版本有了更好的对齐机制：
> 
>  基于[语义化版本规范](https://semver.org/)，可以确保开源和企业版本的 major version 和 minor version 完全一致映射，但 patch version 将有差异，例如：
>
>  Higress 企业版发布了 v2.1.x，开源版发布 v2.1.x 时也将带上对应版本的核心功能特性；
>
>  而 patch version 意味着一些小的修复，开源和企业版的版本不是完全对齐的，例如：
>
>  开源版后续发布了版本从 v2.1.1 到 v2.1.10，而企业版发布了从 v2.1.1 到 v2.1.3，对于每个具体小版本，二者之间不保证完全对齐。
