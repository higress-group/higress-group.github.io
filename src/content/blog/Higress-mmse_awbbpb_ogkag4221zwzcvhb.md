---
title: "Higress v2.2.3 发布：AI Gateway 能力增强，Gateway API 及其推理扩展持续打磨"
description: "Higress v2.2.3 发布：AI Gateway 能力增强，Gateway API 及其推理扩展持续打磨"
date: "2026-06-26"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：如漫

Higress 近期发布了 v2.2.3 版本，主仓库共 48 项更新、Higress Console 8 项更新。核心变化包括：

+ AI Gateway：新增 vLLM 协议透传与 `ai-context-limit` 上下文限制插件，增强 AI 安全防护与负载均衡，并修复一批多厂商协议兼容问题。
+ Gateway API 与推理扩展：支持可配置的 GatewayClass 隔离、默认分离稳定与实验性资源，并修复推理路由在 HTTPRoute 合并时的配置丢失问题。
+ Ingress 迁移：支持跳过 IngressClass 创建、正确保留 LoadBalancer hostname，尽量不改动集群中已有的资源。
+ 安全与稳定性：`jwt-auth` 支持 remote JWKS，并加固 OIDC、TLS 校验、限流与 WASM/MCP 运行时。
+ Console：LLM provider token 列表支持折叠，并修复多项 MCP 与路由配置问题。

此外，社区层面 Higress 已正式完成 CNCF Sandbox 入驻。下面按主题展开。

---

## AI Gateway：自建模型、长上下文与安全拦截
过去几个版本里，Higress 的 AI Gateway 能力一直围绕一个方向演进：让不同模型服务尽量通过统一入口接入，同时少让业务应用自己处理协议差异。v2.2.3 继续在这条线上做了增补，并修掉了一批协议兼容上的小毛病。

**新增与增强**

+ AI Proxy 支持 vLLM 透传 Anthropic Messages 和新版 OpenAI endpoints（[#3989](https://github.com/higress-group/higress/pull/3989)）。能原样透传的请求不再做多余转换，链路更短，排查也更轻。
+ 新增 `ai-context-limit` WASM 插件（[#4000](https://github.com/higress-group/higress/pull/4000)），可以在网关层提前判断请求是否超过模型上下文限制，省去等请求打到模型服务才失败的浪费。长文档问答、RAG、多轮对话、代码分析这类场景会比较实用。
+ `ai-security-guard` 增加结构化拒绝响应、错误路径指标和 AI 日志（[#3894](https://github.com/higress-group/higress/pull/3894)），并支持 Embedding API 内容检测（[#3895](https://github.com/higress-group/higress/pull/3895)）。安全插件在拦截之后还能把原因说清楚，方便业务侧展示提示、做审计、接告警。
+ `ai-load-balancer` 新增基于一致性哈希的 `cluster_hash` 策略（[#3898](https://github.com/higress-group/higress/pull/3898)）；`model-router` 支持保留完整原始模型名（[#3916](https://github.com/higress-group/higress/pull/3916)）。

**问题修复**

+ Vertex 场景补齐 tool call ID、保留 `thoughtSignature`、完善 Claude stream delta 中的 tool call type（[#3973](https://github.com/higress-group/higress/pull/3973)、[#3985](https://github.com/higress-group/higress/pull/3985)、[#3990](https://github.com/higress-group/higress/pull/3990)）。
+ Claude API 名称识别从宽泛匹配改成更准确的后缀判断（[#3839](https://github.com/higress-group/higress/pull/3839)），减少同一套客户端换个模型就出现异常 400 的概率。
+ 修复 `ai-cache` 在 SSE 流式响应首个 chunk 只有 role 时的兼容问题（[#3962](https://github.com/higress-group/higress/pull/3962)，修复 [#3953](https://github.com/higress-group/higress/issues/3953)）。

---

## Gateway API：多网关隔离与版本兼容
Gateway API 正在成为 Kubernetes 入口流量管理的重要标准。它比传统 Ingress 拆得更细：GatewayClass 负责说明谁来管网关，Gateway 负责网关实例，HTTPRoute 等资源负责路由规则。拆得更清楚之后，多团队、多网关、多协议的边界也更容易表达；但标准持续演进，生产环境里也会随之冒出一些现实问题。

**新增与增强**

+ 支持可配置的 GatewayClass 隔离（[#3981](https://github.com/higress-group/higress/pull/3981)）。过去 Higress 默认监听固定的 GatewayClass，对单套网关很直接；当一个集群里同时有公网、内网、测试等多套网关时，就需要更明确地分清谁处理哪些资源。现在多套 Higress 可以在同一集群里各自管理对应的资源。
+ 默认关闭 alpha Gateway API watch（[#3971](https://github.com/higress-group/higress/pull/3971)），把稳定资源和实验性资源分开：常规能力默认启用，实验性能力按需开启，减少版本差异对控制器启动和同步的影响。

**问题修复**

+ 修复 Gateway 状态地址写入（[#3980](https://github.com/higress-group/higress/pull/3980)）。对依赖 Gateway 状态做自动化发布、DNS 更新或平台展示的团队来说，状态写准确很重要。

---

## Gateway API 推理扩展：让 AI 推理流量获得更合理的调度
普通 Web 服务做负载均衡，常见依据是权重、连接数、健康状态。AI 推理流量会更复杂一些：不同请求可能命中不同模型，不同副本的 GPU 负载不同，队列长度不同，缓存命中情况也不同。Gateway API Inference Extension 想解决的就是这类问题：让网关在转发 AI 推理请求时，可以结合推理后端的状态做更合适的调度。

本次版本修复了 InferencePool 路由配置在 HTTPRoute 合并时可能丢失的问题（[#3964](https://github.com/higress-group/higress/pull/3964)）。当多个推理路由挂在同一个网关和域名下时，Higress 需要正确保留每条路由对应的推理调度配置，不能在合并过程中退回普通负载均衡。

这项能力还在跟随 Gateway API Inference Extension 持续演进，但它代表了 AI Gateway 的一个重要方向：网关不再只是入口，也会逐步参与推理流量调度。

---

## Ingress 迁移：尽量减少对既有集群资源的改动
Gateway API 是未来方向，但 Ingress 仍然是大量线上系统的现实入口。尤其是 Ingress NGINX，很多团队已经用了很多年，配置、发布系统、告警、DNS 自动化都围着它跑。所以从 Ingress NGINX 迁移到 Higress 时，用户最关心的往往不是新网关能不能写一套全新配置，而是已有配置能不能少改一点、现有平台边界能不能不被打乱。继 v2.2.2 的 `nginx-rewrite-compatible` 插件之后，v2.2.3 继续在迁移和安装细节上做补强。

**新增与增强**

+ Helm 支持跳过 IngressClass 创建（[#3979](https://github.com/higress-group/higress/pull/3979)）。很多集群里的 IngressClass 是预先创建和统一管理的，安装网关时不应擅自覆盖或新建。现在可以让 Higress 监听指定对象，而不动平台已有资源。

**问题修复**

+ 正确保留 Ingress LoadBalancer hostname（[#3994](https://github.com/higress-group/higress/pull/3994)）。有些云厂商返回的是域名而非 IP，状态同步时若丢了 hostname，外部系统、DNS 自动化和迁移验证都会受影响。
+ `imagePullPolicy` 从 PodSpec 调整到容器级别（[#3924](https://github.com/higress-group/higress/pull/3924)），并补齐 controller 和 promtail sidecar 的镜像拉取策略（[#4002](https://github.com/higress-group/higress/pull/4002)）；plugin-server 镜像 tag 默认跟随 Chart 版本（[#3998](https://github.com/higress-group/higress/pull/3998)）。

这些都算不上亮眼的功能，但迁移真正落地时，往往正是这些小地方决定了你要不要回滚。

---

## 安全与稳定性
网关在入口位置，安全默认值不能含糊。这一节大多是修复和加固，但每一项都直接关系到线上的可靠性。

**新增与增强**

+ `jwt-auth` 支持 remote JWKS（[#3838](https://github.com/higress-group/higress/pull/3838)），便于把认证公钥集中管理，后续密钥轮转也更方便。
+ Key Auth 支持同一个服务配置多个凭证（[#3849](https://github.com/higress-group/higress/pull/3849)），对迁移和多客户端接入更友好。

**问题修复与加固**

+ OIDC：升级 `oauth2-proxy` 修复 verifier callback 中的 nil panic（[#3914](https://github.com/higress-group/higress/pull/3914)），修复 Session 刷新时 `Set-Cookie` 被损坏的问题（[#3928](https://github.com/higress-group/higress/pull/3928)），并在 verifier 不可用时 fail closed（[#4013](https://github.com/higress-group/higress/pull/4013)）。最后一项尤其重要：认证组件异常时，受保护路由应该明确失败，而不是悄悄放行。
+ TLS：回滚了跳过 HTTPS 上游证书校验的行为（[#4016](https://github.com/higress-group/higress/pull/4016)），恢复更谨慎的默认校验。
+ 限流插件增强了 cluster key rate limit cookie 解析的健壮性（[#4012](https://github.com/higress-group/higress/pull/4012)）。
+ 运行时：MCP filter 在高内存使用时会重建（[#3922](https://github.com/higress-group/higress/pull/3922)），并移除了 WASM request-count rebuild 触发条件，减少不必要的重建（[#3923](https://github.com/higress-group/higress/pull/3923)）。

---

## Console：配置增多后的操作体验优化
Higress Console v2.2.3 包含 8 项更新，主要集中在 MCP、LLM provider 配置和路由操作体验。

**新增与增强**

+ LLM provider token 列表支持折叠（[higress-console#722](https://github.com/higress-group/higress-console/pull/722)）。配置多个 token 做负载均衡或容灾时，页面不用一直摊开一长串内容。

**问题修复**

+ MCP：服务名称包含冒号时可以正确解析（[higress-console#724](https://github.com/higress-group/higress-console/pull/724)），删除 MCP server 时不会误删同名 route（[higress-console#735](https://github.com/higress-group/higress-console/pull/735)），SSE transport 的 direct routing path 拼接也做了修正（[higress-console#734](https://github.com/higress-group/higress-console/pull/734)）。
+ 其他：修复服务权重表 stale state（[higress-console#733](https://github.com/higress-group/higress-console/pull/733)）、系统服务潜在 NPE（[higress-console#729](https://github.com/higress-group/higress-console/pull/729)）、YAML 尾随空白提交（[higress-console#730](https://github.com/higress-group/higress-console/pull/730)）、deploy-to-OSS workflow（[higress-console#737](https://github.com/higress-group/higress-console/pull/737)）等问题。

Console 这些改动的目标很直接：减少配置出错，让页面更易使用。

---

## CNCF Sandbox 入驻完成
比起上面这些功能细节，这个版本周期里更值得说的，是 Higress 在社区治理上的一步：经 CNCF TOC 投票通过后，Higress 已经正式完成 CNCF Sandbox 入驻（[cncf/sandbox#481](https://github.com/cncf/sandbox/issues/481)）。

入驻不是一句口号，而是一份需要逐项落实的清单。围绕这份清单，Higress 在这段时间里完成了几类工作：

+ 知识产权与合规：签署项目贡献协议（Contribution Agreement），将商标、Logo 等资产移交 Linux Foundation；遵循 CNCF IP 政策，采用 Apache 2.0 许可证，并接入许可证扫描以满足第三方依赖的合规要求。
+ 中立托管：项目迁入独立、中立的 GitHub 组织，并加入 CNCF 的 GitHub Enterprise 账号，由基金会保障中立托管，不再绑定在单一公司名下。
+ 治理与安全制度：建立开放治理与安全策略文档，在仓库中明确引用 CNCF 行为准则，为所有仓库启用 DCO，并持续推进 OpenSSF 最佳实践徽章。
+ 社区透明度：维护者名单并入 CNCF 聚合列表，项目接入 DevStats、CLOmonitor、LFX Insights 等社区健康度看板，活跃度、贡献分布等数据公开可查。

对正在选型或已经在用 Higress 的团队来说，这些事不像功能那样直接可感，但它们回答的是另一个更要紧的问题：当你把生产流量交给一个开源网关，它背后的项目，是否在被认真、长期、透明地维护。完成 Sandbox 入驻，意味着 Higress 的治理、合规与社区运作被纳入了 CNCF 的公共框架，而不只是依赖某一家公司或某几个人。

接下来，Higress 也会朝 Incubation 阶段继续准备。目前在活跃贡献者、社区关注度和 PR 活跃度上已经有了不错的基础，后续会把更多精力放在治理流程、安全治理，以及贡献者和采用方来源的多元化上。

如果你已经在生产或重要测试环境中使用 Higress，欢迎提供采用案例；如果你愿意参与 CNCF 采用方访谈，也欢迎主动联系 Higress maintainer。

---

## 谁应该升级？
如果你符合下面这些场景，建议关注 v2.2.3：

+ 正在使用 Higress 作为 AI Gateway，特别是接入 vLLM、Vertex、Claude-compatible API、流式响应、AI 安全防护或上下文限制能力。
+ 正在使用 Gateway API，或者关注 Gateway API Inference Extension 在 AI 推理调度中的落地。
+ 正在评估从 Ingress NGINX 迁移到 Higress，希望尽量复用现有 IngressClass、LoadBalancer 状态和平台发布流程。
+ 对认证链路、OIDC、TLS 校验、限流 Cookie、WASM/MCP 运行稳定性比较敏感。
+ 正在使用 Higress Console 管理 LLM provider、MCP server 或路由权重。

升级方式：

```bash
helm repo update
helm upgrade higress higress.io/higress --version 2.2.3
```

如果你正在使用 Gateway API、Ingress 迁移相关配置、AI Gateway 插件或自定义 Helm 参数，建议先在测试环境渲染并对比安装结果：

```bash
helm template higress higress.io/higress --version 2.2.3 > higress-2.2.3.yaml
```

---

## 贡献者
本次发布共有 18 位贡献者参与，其中 10 位是首次贡献：

首次贡献：[@GHX5T-SOL](https://github.com/GHX5T-SOL) · [@FAUST-BENCHOU](https://github.com/FAUST-BENCHOU) · [@ponypony0123](https://github.com/ponypony0123) · [@XinhhD](https://github.com/XinhhD) · [@geekspeng](https://github.com/geekspeng) · [@philo-x](https://github.com/philo-x) · [@yyyCode](https://github.com/yyyCode) · [@zijiren233](https://github.com/zijiren233) · [@enkilee](https://github.com/enkilee) · [@Rand01ph](https://github.com/Rand01ph)

持续贡献：[@Betula-L](https://github.com/Betula-L) · [@JianweiWang](https://github.com/JianweiWang) · [@zat366](https://github.com/zat366) · [@EndlessSeeker](https://github.com/EndlessSeeker) · [@Jing-ze](https://github.com/Jing-ze) · [@CH3CHO](https://github.com/CH3CHO) · [@johnlanni](https://github.com/johnlanni) · [@JayLi52](https://github.com/JayLi52)

每一个 PR 背后都是真实的使用场景和真实的问题。感谢每一位让 Higress 继续向前的贡献者。

---

## 相关链接
+ Higress GitHub：[https://github.com/higress-group/higress](https://github.com/higress-group/higress)
+ Higress v2.2.3 Release Notes：[https://github.com/higress-group/higress/releases/tag/v2.2.3](https://github.com/higress-group/higress/releases/tag/v2.2.3)
+ Higress Console v2.2.3：[https://github.com/higress-group/higress-console/releases/tag/v2.2.3](https://github.com/higress-group/higress-console/releases/tag/v2.2.3)
+ Higress 完整变更：[https://github.com/higress-group/higress/compare/v2.2.2...v2.2.3](https://github.com/higress-group/higress/compare/v2.2.2...v2.2.3)
+ Higress Console 完整变更：[https://github.com/higress-group/higress-console/compare/v2.2.2...v2.2.3](https://github.com/higress-group/higress-console/compare/v2.2.2...v2.2.3)
+ Gateway API Inference Extension：[https://gateway-api-inference-extension.sigs.k8s.io/](https://gateway-api-inference-extension.sigs.k8s.io/)


