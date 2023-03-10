---
title: Roadmap
keywords: [Higress,roadmap]
description: Higress Roadmap.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/roadmap.md
---

# 版本计划

| 版本号  | 版本核心目标 | 预计发布时间 |
| ------- | -----------  | -----------  |
| v0.6.0  | K8s 下黑屏操作(kubectl)达到**GA状态**；发布控制台预览版，提高安装部署的易用性   | 2023-01   |
| v0.7.0  | 控制台发布正式版本，集成开箱即用的可观测   | 2023-02   |
| v0.8.0  | 持续优化控制台功能和配套 CLI 运维工具，整体达到**GA状态**   | 2023-03   |
| v0.9.0  | 增强控制台功能中微服务网关相关能力；支持非 K8s 下安装部署   | 2023-04   |
| v1.0.0  | 增强控制台功能中安全网关、可扩展相关能力   | 2023-05   |


# 具体功能计划 

| 功能                    | 计划发布版本 | 发布状态 |
| ----------------------  | -----------  | -------  |
| 实现简易控制台，支持路由、服务、域名管理 | v0.6.0 | done |
| 提供基于 Nacos/Zookeeper 进行服务发现的能力 | v0.6.0 | done |
| 支持基于 OpenKruise Rollout 的灰度发布  | v0.6.0 | done |
| 提供 Plugin CRD，降低 wasm 插件配置复杂度  | v0.6.0 | done |
| 提供基于 Prometheus + Grafana 的监控大盘  | v0.7.0 | - |
| 提供基于 Skywalking 的监控大盘  | v0.8.0 | - |
| 实现 CLI 工具，支持 K8s 环境下一键安装/升级，并支持如配置证书等基础运维能力 | v0.8.0 | - |
| 支持基于 OpenSergo 的全链路灰度  | v0.9.0 | - |
| 实现基于 Nacos 存储配置的模式，解耦 Istio/K8s 依赖  | v0.9.0 | - |
| 控制台支持 dubbo 协议转换  | v0.9.0 | - |
| 控制台支持 sentinel 高可用配置  | v0.9.0 | - |
| 控制台支持 WAF 能力  | v1.0.0 | - |
| 控制台提供插件市场，支持与 SerivceMesh 共享 WASM 插件生态   | v1.0.0 | - |
| CLI 支持对接 cert-manager 进行证书管理   | v1.0.0 | - |
| 网关引擎侧支持国密 TLS 算法   | v1.0.0 | - |
 

