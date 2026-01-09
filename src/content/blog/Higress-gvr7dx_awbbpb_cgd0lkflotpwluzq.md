---
title: "Nginx Ingress 迁移指引"
description: "Nginx Ingress 迁移指引"
date: "2025-11-26"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：澄潭

<font style="color:rgba(0, 0, 0, 0.9);">编者按：Ingress NGINX 退役引发开发者们的强烈关注，</font>[《遗憾，Ingress NGINX 要退役了》](https://higress.cn/blog/higress-gvr7dx_awbbpb_glwn7aov9cvqg8gx/)<font style="color:rgba(0, 0, 0, 0.9);">公众号阅读量超过2w。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01JlSMU02267IB3Phci_!!6000000007070-2-tps-588-116.png)

<font style="color:rgba(0, 0, 0, 0.9);">官方已经提供了完备的应对措施，迁移到 Gateway API，以及20+ Ingress 控制器。但实施迁移的时候，企业还会希望了解新的 Ingress 控制器是否兼容 Ingress NGINX 的注解，迁移过程中如何进行灰度切流，遇到流量损失如何快速回滚等，以保障迁移过程平滑，不影响线上业务。</font>

<font style="color:rgba(0, 0, 0, 0.9);">因此，本文将提供基于实操的应对方案，以阿里云云原生 API 网关(Higress 企业版)为例，按步骤详细阐述迁移的操作过程。</font>**<font style="color:rgb(122, 152, 228);"></font>**

## <font style="color:rgb(27, 28, 29);">概述</font>
<font style="color:rgb(27, 28, 29);">随着 Nginx Ingress 逐步停止维护，用户需要将其迁移至新的网关方案。云原生 API 网关是阿里云 API 网关的子产品，统一了流量网关、微服务网关和安全网关 ，为 Nginx Ingress 用户提供了平滑的迁移路径和强大的功能升级。</font>

<font style="color:rgb(27, 28, 29);">云原生 API 网关提供两种核心配置模式，以适应不同的管理需求和使用场景：</font>

1. **<font style="color:rgb(27, 28, 29);">监听 K8s Ingress（Ingress 模式）</font>**<font style="color:rgb(27, 28, 29);">：网关作为 APIG Ingress Controller 运行，兼容 K8s Ingress 资源及 </font>[Nginx Ingress 注解](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways)<font style="color:rgb(27, 28, 29);">，适用于希望保持 K8s 原生工作流（如 GitOps）的团队 。</font>
2. **<font style="color:rgb(27, 28, 29);">控制台配置 API（API 管理模式）</font>**<font style="color:rgb(27, 28, 29);">：通过阿里云控制台或 API 进行配置，提供完整的 API 生命周期管理、高级安全策略和 API 运营能力，适用于需要集中治理和精细化管理的场景 。</font>

<font style="color:rgb(27, 28, 29);">本文档将详细对比这两种模式的功能、优势及适用场景，以帮助您选择最适合的配置路径。</font>

## <font style="color:rgb(27, 28, 29);">模式一：监听 K8s Ingress（Ingress 模式）</font>
<font style="color:rgb(27, 28, 29);">此模式将云原生 API 网关部署为 Kubernetes 集群的 Ingress Controller，用于管理集群的南北向流量。</font>

### <font style="color:rgb(27, 28, 29);">1.1 核心优势与适用场景</font>
+ **<font style="color:rgb(27, 28, 29);">平滑迁移</font>**<font style="color:rgb(27, 28, 29);">：为 Nginx Ingress 用户提供</font>[一键式迁移工具](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/migrating-from-nginx-ingress-to-cloud-native-api-gateway)<font style="color:rgb(27, 28, 29);">，最大程度降低迁移成本和业务中断风险。</font>
+ **<font style="color:rgb(27, 28, 29);">保持 K8s 原生工作流</font>**<font style="color:rgb(27, 28, 29);">：完全兼容 K8s Ingress 资源和注解，团队可以继续使用</font>`<font style="color:rgb(68, 71, 70);">kubectl apply</font>`<font style="color:rgb(27, 28, 29);">、GitOps等现有工作流来管理路由规则。</font>
+ **<font style="color:rgb(27, 28, 29);">功能增强</font>**<font style="color:rgb(27, 28, 29);">：在兼容 Nginx Ingress 的基础上，提供了更强大的治理能力，如</font>[全局限流](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress?spm=a2c4g.11186623.help-menu-29462.d_2_10_2.13d16ab7JSrjZM#862f08d03d4d3)<font style="color:rgb(27, 28, 29);">等。</font>

**<font style="color:rgb(27, 28, 29);">适用场景</font>**<font style="color:rgb(27, 28, 29);">：</font>

+ <font style="color:rgb(27, 28, 29);">Nginx Ingress 的存量用户迁移。</font>
+ <font style="color:rgb(27, 28, 29);">以 K8s 为中心、依赖 GitOps 流程管理应用发布的团队。</font>
+ <font style="color:rgb(27, 28, 29);">需要快速实现集群流量路由和基础治理的开发运维团队。</font>

### <font style="color:rgb(27, 28, 29);">1.2 功能详情</font>
> APIG Ingress Controller 支持的完整 Ingress 能力请参考：
>
> 1. [《APIG Ingress支持的Annotation》](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways)
> 2. [《APIG Ingress高级用法》](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress)
>

#### <font style="color:rgb(27, 28, 29);">1.2.1 高度兼容 Nginx Ingress 注解</font>
<font style="color:rgb(27, 28, 29);">APIG Ingress（云原生 API 网关的 Ingress Controller）支持绝大多数 Nginx Ingress 注解（据统计支持51种，覆盖90%的用户场景）。这意味着现有的 K8s Ingress YAML 文件无需大量修改即可迁移。</font>

**<font style="color:rgb(27, 28, 29);">关键兼容注解示例</font>**<sup><font style="color:rgb(68, 71, 70);"></font></sup><font style="color:rgb(27, 28, 29);">：</font>

| **<font style="color:rgb(27, 28, 29);">功能类别</font>** | **<font style="color:rgb(27, 28, 29);">兼容的 Nginx 注解 (nginx.ingress.kubernetes.io/)</font>** |
| --- | --- |
| **<font style="color:rgb(27, 28, 29);">路由与重写</font>** | `<font style="color:rgb(68, 71, 70);">rewrite-target</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">use-regex</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">upstream-vhost</font>` |
| **<font style="color:rgb(27, 28, 29);">流量切分</font>** | `<font style="color:rgb(68, 71, 70);">canary</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">canary-by-header</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">canary-weight</font>` |
| **<font style="color:rgb(27, 28, 29);">安全与跨域</font>** | `<font style="color:rgb(68, 71, 70);">enable-cors</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">cors-allow-methods</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">ssl-redirect</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">force-ssl-redirect</font>` |
| **<font style="color:rgb(27, 28, 29);">超时与重试</font>** | `<font style="color:rgb(68, 71, 70);">proxy-next-upstream</font>`<br/><font style="color:rgb(27, 28, 29);"></font>`<font style="color:rgb(68, 71, 70);">proxy-next-upstream-tries</font>` |
| **<font style="color:rgb(27, 28, 29);">IP 访问控制</font>** | `<font style="color:rgb(68, 71, 70);">whitelist-source-range</font>` |


#### <font style="color:rgb(27, 28, 29);">1.2.2 独有的功能增强 (Higress 注解)</font>
<font style="color:rgb(27, 28, 29);">此模式不仅兼容 Nginx，还通过</font>`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/</font>`<font style="color:rgb(27, 28, 29);">前缀注解提供了Nginx Ingress所不具备的高级功能，举例来说：</font>

+ **<font style="color:rgb(27, 28, 29);">流量预热 </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx 的问题</font>**<font style="color:rgb(27, 28, 29);">：无法实现此能力</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress 解决</font>**<font style="color:rgb(27, 28, 29);">：提供原生的</font>`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/warmup</font>`<font style="color:rgb(27, 28, 29);">注解，可以保证新节点上线时，流量在指定预热窗口内是逐步调大，充分保证新节点完成预热。</font>
+ **<font style="color:rgb(27, 28, 29);">全局限流 </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx 的问题</font>**<font style="color:rgb(27, 28, 29);">：</font>`<font style="color:rgb(68, 71, 70);">nginx.ingress.kubernetes.io/limit-rps</font>`<font style="color:rgb(27, 28, 29);">实现的是单Pod限流，总限制等于“限流值 x Pod数量”，难以精确控制。</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress 解决</font>**<font style="color:rgb(27, 28, 29);">：</font>`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/rate-limit</font>`<font style="color:rgb(27, 28, 29);">提供的是跨所有网关实例的</font>_<font style="color:rgb(27, 28, 29);">全局</font>_<font style="color:rgb(27, 28, 29);">限流，可精确控制总 QPS。</font>
+ **<font style="color:rgb(27, 28, 29);">全局并发控制 </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx 的问题</font>**<font style="color:rgb(27, 28, 29);">：缺乏简单有效的全局并发数控制。</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress 解决</font>**<font style="color:rgb(27, 28, 29);">：</font>`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/concurrency-limit</font>`<font style="color:rgb(27, 28, 29);">提供</font>_<font style="color:rgb(27, 28, 29);">全局</font>_<font style="color:rgb(27, 28, 29);">并发数限制，保护后端服务免受瞬时流量冲击。</font>
+ **<font style="color:rgb(27, 28, 29);">流量镜像 </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx 的问题</font>**<font style="color:rgb(27, 28, 29);">：缺乏流量镜像能力，需要写 Lua 脚本</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress 解决</font>**<font style="color:rgb(27, 28, 29);">：提供原生的</font>`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/mirror-target-service</font>`<font style="color:rgb(27, 28, 29);">注解，可便捷地复制流量到测试服务，用于生产环境的影子测试。</font>



## <font style="color:rgb(27, 28, 29);">模式二：控制台配置 API（API 管理模式）</font>
<font style="color:rgb(27, 28, 29);">此模式将云原生 API 网关作为一个中心化的 API 管理平台。用户通过阿里云控制台（或 API/Terraform）来定义和管理 API，实现从路由转发到 API 治理的全面升级。</font>

### <font style="color:rgb(27, 28, 29);">2.1 核心优势与适用场景</font>
+ **<font style="color:rgb(27, 28, 29);">集中化治理</font>**<font style="color:rgb(27, 28, 29);">：允许平台团队、架构师或安全团队从统一视图管理所有 API，强制执行安全、合规和流量策略。</font>
+ **<font style="color:rgb(27, 28, 29);">全生命周期管理</font>**<font style="color:rgb(27, 28, 29);">：支持 API 从设计、开发、测试、发布到下线的完整生命周期，包括版本控制、发布审计和一键回滚。</font>
+ **<font style="color:rgb(27, 28, 29);">高级安全能力</font>**<font style="color:rgb(27, 28, 29);">：原生集成复杂的认证机制（如 OIDC, JWT，自建认证鉴权）</font>
+ **<font style="color:rgb(27, 28, 29);">API 运营与生态</font>**<font style="color:rgb(27, 28, 29);">：支持 API 的消费者管理 、订阅关系和调用配额 ，赋能 API 经济。</font>

**<font style="color:rgb(27, 28, 29);">适用场景</font>**<font style="color:rgb(27, 28, 29);">：</font>

+ <font style="color:rgb(27, 28, 29);">需要对 API 进行精细化、集中化治理的企业。</font>
+ <font style="color:rgb(27, 28, 29);">对 API 安全身份认证有高要求的业务。</font>
+ <font style="color:rgb(27, 28, 29);">需要管理 API 版本、进行灰度发布和审计的团队。</font>
+ <font style="color:rgb(27, 28, 29);">构建开放平台，需要管理第三方开发者（消费者）及其调用配额的场景。</font>

### <font style="color:rgb(27, 28, 29);">2.2 功能详情</font>
#### <font style="color:rgb(27, 28, 29);">2.2.1 完整的 API 生命周期管理</font>
<font style="color:rgb(27, 28, 29);">支持 API 的设计、开发、测试、发布及下线全周期管理 。关键功能包括：</font>

+ **<font style="color:rgb(27, 28, 29);">版本管理</font>**<font style="color:rgb(27, 28, 29);">：支持 API 的多个版本（如v1, v2）同时在线，并可管理其发布状态 。</font>
+ **<font style="color:rgb(27, 28, 29);">发布与回滚</font>**<font style="color:rgb(27, 28, 29);">：提供 API 的发布历史记录，支持一键回滚到任一历史版本 。</font>

#### <font style="color:rgb(27, 28, 29);">2.2.2 高级的企业级安全</font>
<font style="color:rgb(27, 28, 29);">提供远超 Ingress 模式的基础安全能力，将复杂的认证逻辑从后端服务中剥离：</font>

+ **<font style="color:rgb(27, 28, 29);">丰富认证鉴权</font>**<font style="color:rgb(27, 28, 29);">：原生支持 JWT、OIDC，并能与阿里云 IDaaS（应用身份服务）集成。</font>
+ **<font style="color:rgb(27, 28, 29);">多层防御</font>**<font style="color:rgb(27, 28, 29);">：深度集成 WAF（Web 应用防火墙）、支持 mTLS 双向认证、IP 黑白名单及自定义安全插件。</font>

#### <font style="color:rgb(27, 28, 29);">2.2.3 强大的可扩展性</font>
+ **<font style="color:rgb(27, 28, 29);">插件市场</font>**<font style="color:rgb(27, 28, 29);">：提供丰富的官方插件（覆盖认证、安全、流量等），并支持用户上传自定义插件。</font>
+ **<font style="color:rgb(27, 28, 29);">热更新</font>**<font style="color:rgb(27, 28, 29);">：网关支持插件和配置的热更新，无需重启实例，保障业务高可用。</font>

#### <font style="color:rgb(27, 28, 29);">2.2.4 API 运营与多源服务发现</font>
+ **<font style="color:rgb(27, 28, 29);">API 生态</font>**<font style="color:rgb(27, 28, 29);">：提供“消费者管理”功能，可管理 API 的调用配额和订阅规则。</font>
+ **<font style="color:rgb(27, 28, 29);">多源发现</font>**<font style="color:rgb(27, 28, 29);">：后端服务不仅限于 K8s 集群，还支持从 Nacos、函数计算(FC)以及固定地址/域名等多种来源发现服务。</font>

## <font style="color:rgb(27, 28, 29);">模式对比总结</font>
<font style="color:rgb(27, 28, 29);">下表总结了两种配置模式在关键维度的差异：</font>

| **<font style="color:rgb(27, 28, 29);">维度</font>** | **<font style="color:rgb(27, 28, 29);">模式一：K8s Ingress 模式</font>** | **<font style="color:rgb(27, 28, 29);">模式二：控制台 API 模式</font>** |
| --- | --- | --- |
| **<font style="color:rgb(27, 28, 29);">核心定位</font>** | <font style="color:rgb(27, 28, 29);">K8s Ingress Controller，流量路由 </font><sup><font style="color:rgb(68, 71, 70);"></font></sup> | <font style="color:rgb(27, 28, 29);">统一 API 管理平台</font> |
| **<font style="color:rgb(27, 28, 29);">配置方式</font>** | <font style="color:rgb(27, 28, 29);">K8s YAML</font> | <font style="color:rgb(27, 28, 29);">阿里云控制台 / API / Terraform</font> |
| **<font style="color:rgb(27, 28, 29);">管理工作流</font>** | <font style="color:rgb(27, 28, 29);">GitOps / </font>`<font style="color:rgb(68, 71, 70);">kubectl apply</font>`<br/><font style="color:rgb(27, 28, 29);"></font> | <font style="color:rgb(27, 28, 29);">UI/API驱动</font> |
| **<font style="color:rgb(27, 28, 29);">Nginx 迁移</font>** | **<font style="color:rgb(27, 28, 29);"></font>**<font style="color:rgb(27, 28, 29);">提供一键式迁移工具。</font> | <font style="color:rgb(27, 28, 29);">需要重新定义 API 并配置策略</font> |
| **<font style="color:rgb(27, 28, 29);">API 生命周期</font>** | **<font style="color:rgb(27, 28, 29);">无</font>**<font style="color:rgb(27, 28, 29);">。与 K8s 资源生命周期绑定</font> | **<font style="color:rgb(27, 28, 29);">完整</font>**<font style="color:rgb(27, 28, 29);">。支持设计、开发、测试、发布、版本、下线</font> |
| **<font style="color:rgb(27, 28, 29);">扩展性</font>** | **<font style="color:rgb(27, 28, 29);">有限</font>**<font style="color:rgb(27, 28, 29);">。受限于已支持的注解</font> | **<font style="color:rgb(27, 28, 29);">高</font>**<font style="color:rgb(27, 28, 29);">。丰富的插件市场 + 自定义插件热更新</font> |
| **<font style="color:rgb(27, 28, 29);">服务发现</font>** | **<font style="color:rgb(27, 28, 29);">K8s原生</font>**<font style="color:rgb(27, 28, 29);">。自动发现 K8s </font>`<font style="color:rgb(68, 71, 70);">Service</font>` | **<font style="color:rgb(27, 28, 29);">多源</font>**<font style="color:rgb(27, 28, 29);">。支持 K8s (ACK)、Nacos、FC、固定地址等</font> |
| **<font style="color:rgb(27, 28, 29);">API 运营</font>** | **<font style="color:rgb(27, 28, 29);">无</font>**<font style="color:rgb(27, 28, 29);"></font> | **<font style="color:rgb(27, 28, 29);">完整</font>**<font style="color:rgb(27, 28, 29);">。支持消费者管理、订阅、配额管理</font> |


## <font style="color:rgb(27, 28, 29);">如何选择：推荐的迁移与演进路径</font>
### <font style="color:rgb(27, 28, 29);">场景一：平滑迁移</font>
+ **<font style="color:rgb(27, 28, 29);">适用对象</font>**<font style="color:rgb(27, 28, 29);">：优先考虑迁移速度、希望保持现有 K8s 工作流的团队。</font>
+ **<font style="color:rgb(27, 28, 29);">推荐方案</font>**<font style="color:rgb(27, 28, 29);">：采用</font>**<font style="color:rgb(27, 28, 29);">模式一：K8s Ingress 模式</font>**<font style="color:rgb(27, 28, 29);">。</font>
+ **<font style="color:rgb(27, 28, 29);">实施</font>**<font style="color:rgb(27, 28, 29);">：</font>
    1. <font style="color:rgb(27, 28, 29);">使用官方迁移工具将 Nginx Ingress 配置迁移至云原生 API 网关。</font>
    2. <font style="color:rgb(27, 28, 29);">审查迁移报告，处理少量不兼容注解（可提交工单咨询）。</font>
    3. <font style="color:rgb(27, 28, 29);">（可选）使用</font>`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/</font>`<font style="color:rgb(27, 28, 29);">注解替换原有配置，以启用全局限流等高级功能。</font>

### <font style="color:rgb(27, 28, 29);">场景二：新业务架构</font>
+ **<font style="color:rgb(27, 28, 29);">适用对象</font>**<font style="color:rgb(27, 28, 29);">：构建全新的 API 平台，或对安全、治理有高要求的企业。</font>
+ **<font style="color:rgb(27, 28, 29);">推荐方案</font>**<font style="color:rgb(27, 28, 29);">：采用</font>**<font style="color:rgb(27, 28, 29);">模式二：控制台 API 模式</font>**<font style="color:rgb(27, 28, 29);">。</font>
+ **<font style="color:rgb(27, 28, 29);">实施</font>**<font style="color:rgb(27, 28, 29);">：</font>
    1. <font style="color:rgb(27, 28, 29);">在控制台定义 API、配置安全策略（如 OIDC/JWT）和限流策略。</font>
    2. <font style="color:rgb(27, 28, 29);">使用网关的服务发现能力，将 API 后端指向 ACK 集群中的</font>`<font style="color:rgb(68, 71, 70);">Service</font>`<font style="color:rgb(27, 28, 29);">或其他服务来源。</font>

### <font style="color:rgb(27, 28, 29);">场景三：渐进式演进（推荐策略）</font>
+ **<font style="color:rgb(27, 28, 29);">适用对象</font>**<font style="color:rgb(27, 28, 29);">：绝大多数组织，既要解决存量迁移问题，又希望逐步提升治理能力。</font>
+ **<font style="color:rgb(27, 28, 29);">推荐方案</font>**<font style="color:rgb(27, 28, 29);">：</font>**<font style="color:rgb(27, 28, 29);">从模式一开始，逐步演进到模式二</font>**<font style="color:rgb(27, 28, 29);">。</font>
+ **<font style="color:rgb(27, 28, 29);">实施</font>**<font style="color:rgb(27, 28, 29);">：</font>
    1. **<font style="color:rgb(27, 28, 29);">第一步（迁移）</font>**<font style="color:rgb(27, 28, 29);">：首先采用</font>**<font style="color:rgb(27, 28, 29);">模式一（Ingress）</font>**<font style="color:rgb(27, 28, 29);">，完成所有 Nginx Ingress 的平滑迁移，快速解决 Nginx EOL 问题。</font>
    2. **<font style="color:rgb(27, 28, 29);">第二步（治理）</font>**<font style="color:rgb(27, 28, 29);">：识别出组织内的核心 API（例如：对外的、高安全等级的、需精细化管理的 API）。</font>
    3. **<font style="color:rgb(27, 28, 29);">第三步（演进）</font>**<font style="color:rgb(27, 28, 29);">：将这些核心 API 逐步“纳管”到</font>**<font style="color:rgb(27, 28, 29);">模式二（控制台）</font>**<font style="color:rgb(27, 28, 29);">。您可以在控制台为这些 API 配置JWT 认证、WAF 防护、消费者配额 等高级策略，而其他非核心 API 可以继续保留在模式一中运行。</font>

#### 路由优先级说明：
对于相同域名和相同路径的路由，控制台创建的 API 优先级会高于 Ingress 方式同步的路由，因此迁移过程中可以逐个在控制台上进行配置，如果发现有问题，也可以通过删除控制台配置立即恢复到 Ingress 模式。

**注意：** 优先级是基于单个路由粒度的，不是整个域名。这意味着：

+ 可以对某个域名下的部分路径使用控制台配置，其他路径继续使用 Ingress
+ 控制台配置的路由仅覆盖匹配条件相同的 Ingress 路由
+ 建议按路径逐步迁移，而不是一次性迁移整个域名的所有路由

可以通过例子，更容易理解这个优先级机制：

**场景：** 您有一个域名 `example.com`，需要从 Ingress 逐步迁移到控制台配置。

**1. 初始状态（仅 Ingress 配置）**

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service-v1
            port:
              number: 8080
      - path: /web
        pathType: Prefix
        backend:
          service:
            name: web-service-v1
            port:
              number: 80
```

此时 API 网关自动生成的路由为：

+ `/api` → `api-service-v1:8080`
+ `/web` → `web-service-v1:80`



**2. 迁移中（控制台配置 **`**/api**`** 路径）**

在控制台为 `example.com` 创建路由，配置 `/api` 指向新版本服务 `api-service-v2:8080`。

此时合并后的实际路由顺序为：

```plain
1. /api → api-service-v2:8080  (控制台配置，优先匹配) ✅
2. /api → api-service-v1:8080  (Ingress 配置，不会匹配到)
3. /web → web-service-v1:80    (Ingress 配置，正常生效)
```

**效果：**

+ 访问 `example.com/api/*` → 路由到 `api-service-v2`（控制台配置生效）
+ 访问 `example.com/web/*` → 路由到 `web-service-v1`（Ingress 配置生效）



**3. 发现问题，快速回退**

如果发现 `api-service-v2` 有问题，只需在控制台删除 `/api` 路由配置。

删除后的路由顺序：

```plain
1. /api → api-service-v1:8080  (Ingress 配置，立即恢复) ✅
2. /web → web-service-v1:80    (Ingress 配置)
```

**效果：** 流量立即回退到 Ingress 配置的 `api-service-v1`，无需修改 Ingress 或重启任何服务。



**4. 完全迁移（控制台配置所有路径）**

在控制台继续配置 `/web` 路径后：

```plain
1. /api → api-service-v2:8080  (控制台配置) ✅
2. /web → web-service-v2:80    (控制台配置) ✅
3. /api → api-service-v1:8080  (Ingress 配置，不会匹配到)
4. /web → web-service-v1:80    (Ingress 配置，不会匹配到)
```

此时所有流量都由控制台配置控制，可以安全删除对应的 Ingress 配置。


