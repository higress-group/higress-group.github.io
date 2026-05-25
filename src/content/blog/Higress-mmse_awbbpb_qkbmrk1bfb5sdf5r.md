---
title: "Higress v2.2.2 发布：Bedrock 直连、Nginx 安全迁移、CNCF 治理完善"
description: "Higress v2.2.2 发布：Bedrock 直连、Nginx 安全迁移、CNCF 治理完善"
date: "2026-05-25"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：如漫

之前有用户在社区问过一个问题："我只是想通过 Bedrock 调个 Claude，为什么请求要在网关里转两次协议才能出去？"

好问题。我们也觉得这一趟弯路该省了——v2.2.2 主要就在干这类事。

## 这个版本在解决什么问题
v2.2.2 于 2026 年 5 月 21 日发布，距 v2.2.1 约六周，包含 70 项变更（主仓库 36 项 + Console 34 项）。这次的改动主要集中在三个方向：

+ 减少不必要的协议转换层，让 Bedrock 调用更直接
+ 让被限流摘掉的 API Key 能自动恢复，不用人工干预
+ 降低从 nginx 迁移过来的成本，rewrite 规则尽量原样能用

下面逐个展开。

---

## Bedrock 不再绕路
这个改动的背景稍微展开一下。

### 之前发生了什么
通过 Higress 用 Bedrock 调 Claude 的 Messages API 时，请求的生命周期是这样的：

> 你的请求（Claude Messages 格式）→ 网关转成 OpenAI 格式 → 再转成 Bedrock Converse 格式 → 发给 AWS
>

两层转换。每一层都在解构和重建你的请求体。

大多数时候这没问题。但当请求里有一些"边界情况"的数据——比如工具调用的参数是空对象 `{}`，比如 Claude 的 thinking 推理块——转着转着就丢了，或者变形了。用户看到的现象是：偶尔 400、偶尔工具调不通、偶尔推理过程消失。

### 现在怎么解决的
AWS 推出了 Bedrock Mantle endpoint，原生支持 Anthropic Messages API。v2.2.2 直接把 `/v1/messages` 的流量打到 Mantle（[#3820](https://github.com/alibaba/higress/pull/3820)），中间不做任何格式转换——只映射一下模型名，请求体原样发出去，响应原样回来。

路径短了，中间能出错的环节也就少了。

当然，之前版本遗留的几个具体问题也一并修了：工具调用索引错乱（[#3786](https://github.com/alibaba/higress/pull/3786)）、推理块被吞（[#3788](https://github.com/alibaba/higress/pull/3788)）、空输入被改坏（[#3799](https://github.com/alibaba/higress/pull/3799)）。但有了 Mantle 直连，这些问题在 `/v1/messages` 路径上本就不会再出现了。

---

## API Key 被限流？等一等就行
### 之前的情况
你配了 3 个 API Key 做负载均衡。某个 Key 因为限流收到了 429。网关把它标记为不可用，流量切到其他 Key——到这一步都没问题。

问题是：它怎么恢复？

之前的答案是"主动健康检查"：定时发一个真实请求去试探。这意味着每次试探都花钱（Token 费用），而且你必须额外配一个 `healthCheckModel` 参数，否则恢复机制根本不会启动。

对于 429 这种情况，模型服务那边只是让你歇会儿，过一阵子自然放行。专门发一个真实请求去试探——还得花 Token 钱——多少有点亏。

### 冷却恢复
v2.2.2 加了一个 `cooldownDuration` 配置（[#3700](https://github.com/alibaba/higress/pull/3700)）：Key 被摘掉后，到了指定时间自动恢复。不发请求、不花钱、不用额外配置模型名。比如设成 60 秒，Key 被摘掉一分钟后就自动回到可用池里。

冷却恢复和健康检查可以共存：429 靠冷却，5xx 靠健康检查，各管各的场景。

---

## nginx 迁移：Rewrite 规则不用重写
从 nginx 迁到新网关时，最让人犹豫的往往不是"新的行不行"，而是"旧的怎么搬"。

尤其是 rewrite 规则。你可能有几十条正则重写，带捕获组、带条件跳转、带 query string 拼接。一条条翻译成新语法，工作量大不说，还容易翻错。

v2.2.2 新增了一个 `nginx-rewrite-compatible` 插件（[#3823](https://github.com/alibaba/higress/pull/3823)），直接兼容 nginx rewrite 的语义：

+ 正则捕获组 `$1`、`$2` 正常用
+ `break` 和 `last` 两种流控模式都支持
+ query string 可以追加也可以模板替换
+ 捕获结果可以通过 Header 传给上游服务

如果你现有的 nginx 配置里有一堆 rewrite 规则，现在可以几乎不改地搬过来。

值得多说两句安全方面的事情。CVE-2026-42945 是 nginx 中一个存在已久的堆溢出漏洞——当 rewrite 规则里带 `?` 的重写跨多轮 pass 执行，并且后续 set 指令复用了捕获组时，会触发内存状态不一致，进而导致堆溢出。这个问题影响范围不小，因为 rewrite + set 是 nginx 配置中非常常见的组合。

Higress 的 `nginx-rewrite-compatible` 插件用 WASM 沙箱实现了同等的 rewrite 语义，路径匹配和捕获组替换的逻辑完全在沙箱内运行，即使处理逻辑本身有 Bug 也不会溢出到网关进程的内存空间。对于正在评估是否从 nginx 迁移的团队来说，这是一个比较实际的安全收益。

---

## AI 安全防护：除了拦截，还能脱敏
之前的安全防护只有一招：发现问题，整条拦掉。简单粗暴，但有时候粗暴过头了——模型回复里夹了个手机号，你其实只想把手机号打个码，没必要把整段回复都扔了。

### 脱敏模式
v2.2.2 给安全防护插件加了 `mask` 动作（[#3690](https://github.com/alibaba/higress/pull/3690)）：碰到敏感数据时，只替换敏感部分，其他内容正常返回。拦截和脱敏可以按维度独立配——内容审核走拦截，敏感数据走脱敏，互不干扰。

### 少一些误拦
之前有个过于激进的兜底策略：只要安全 API 返回 `Suggestion=block`，不看具体分数就直接拦。现在改成了基于阈值判断（[#3731](https://github.com/alibaba/higress/pull/3731)），低于阈值的不再误拦。

---

## Prompt 改写：在网关层统一处理
有些事情每个客户端都做一遍不如在网关统一做一次——比如把内部代号换成对外名称，比如把不小心出现在 prompt 里的 API Key 抹掉。

`ai-prompt-decorator` 插件新增了 `replace` 规则（[#3739](https://github.com/alibaba/higress/pull/3739)），支持字符串替换和正则替换，可以限定只对特定角色（比如 system）的消息生效。规则按声明顺序依次执行，多模态内容不受影响。

---

## 新增的模型服务支持
**快影视频生成**（[#3742](https://github.com/alibaba/higress/pull/3742)）：AI Gateway 的能力从文本、图片扩展到视频。通过统一接口就能调用快影的视频生成和任务查询 API。

**vLLM 自部署推理**（[higress-console#679](https://github.com/higress-group/higress-console/pull/679)）：Console 原生支持 vLLM 作为 Provider，配置表单、服务绑定、路由管理都能在 Console 里完成。

**Vertex AI 简化认证**（[#3695](https://github.com/alibaba/higress/pull/3695)）：Raw Express Mode 支持 API Key 直接认证了，不用折腾 OAuth2 Service Account。开发测试阶段会轻松不少。

**通义千问扩展**（[#3724](https://github.com/alibaba/higress/pull/3724)）：新增对 Qwen `/v1/rerank`（文档重排序）和 `/v1/conversations`（多轮对话管理）API 的路由支持。

---

## Dify 插件更新
今年 2 月，Higress 在 Dify 插件市场上架了模型代理插件（搜索 "higress" 即可安装），上线三个多月下载量已超过 2000。它的作用是让 Dify 把模型调用的流量交给 Higress 网关统一管理——限流、熔断、负载均衡、多模型路由这些能力由网关侧提供，Dify 专注做应用编排，各管各的事。

这个月内插件版本从 0.0.3 快速迭代到了 0.0.6，主要更新包括：支持多模态输入（图片、视频、音频、文档）、新增 AI 联网搜索能力、修复了 thinking 参数对不支持模型的误传问题，以及 Qwen3 Rerank 的调用兼容。

---

## Console 的变化
Console 这次也没闲着，34 项变更。挑几个日常能感知到的：

**路由权重分流**（[higress-console#705](https://github.com/higress-group/higress-console/pull/705)）——灰度发布和 A/B 测试可以直接在 Console 拖权重了，不用去改 Kubernetes YAML。

**插件文档内嵌**（[higress-console#685](https://github.com/higress-group/higress-console/pull/685)）——配置插件时，文档就在旁边。不用在两个浏览器 Tab 之间来回切。

**更好的错误提示**——Provider 配置、服务源、路由规则、Azure URL……各处的校验都加了人话版的错误信息，配错了当场就能知道哪里不对。

**双栈网络**（[higress-console#671](https://github.com/higress-group/higress-console/pull/671)）——IPv4/IPv6 双栈环境的服务发现问题修了。

---

## CNCF 社区治理完善
2026 年 3 月，Higress 正式通过 CNCF TOC 投票加入 Sandbox。加入之后，项目需要按照 CNCF 的治理规范把一些基础工作补齐——安全流程、维护者信息、贡献规范这些，也为后续持续向孵化阶段（Incubation）迈进打好基础。这个版本里集中做了几件：

**维护者名单正式化**（[#3754](https://github.com/alibaba/higress/pull/3754)）：新增 `MAINTAINERS.md`，明确谁负责什么、怎么联系。这是 CNCF Sandbox onboarding checklist（[cncf/sandbox#481](https://github.com/cncf/sandbox/issues/481)）的硬性要求——项目需要在 [CNCF 聚合维护者列表](https://maintainers.cncf.io) 上有一席之地。

**安全响应流程规范化**（[#3764](https://github.com/alibaba/higress/pull/3764)）：重写了 `SECURITY.md`，定义了完整的漏洞报告和处理流程：

+ 两条报告渠道：GitHub Private Security Advisory + 邮件
+ 响应 SLA：3 个工作日确认收到、14 天内完成分类、90 天协调披露
+ 安全响应团队指向 MAINTAINERS.md

现在整体对标 OpenSSF Best Practices Passing 级别的要求。

**测试覆盖率门禁**（[#3764](https://github.com/alibaba/higress/pull/3764)）：CONTRIBUTING 文档新增了明确的测试要求——新的 Wasm 插件 30% 覆盖率（CI 卡），所有 patch 50% 覆盖率（Codecov 卡），Bug fix 必须附带回归测试。

**OpenSSF Best Practices 评估**（[#3830](https://github.com/alibaba/higress/pull/3830)）：项目已启动 OpenSSF Best Practices 评估流程，目前完成度约 87%，并在 README 展示了进度徽章。通过 Passing 级别是 CNCF Incubation 的前置条件之一。

---

## 顺手修的一些事
+ 多个插件加了空指针防护（[#3757](https://github.com/alibaba/higress/pull/3757)），畸形请求不会再让网关崩溃
+ 开启 `log_as_json` 后不再偶尔输出非 JSON 格式的日志（[#3779](https://github.com/alibaba/higress/pull/3779)）
+ golang-filter 的交叉编译修了（[#3682](https://github.com/alibaba/higress/pull/3682)），arm64 产物不再"串台"
+ HTTPS 上游配了跳过证书验证后真的会跳过了（[#3770](https://github.com/alibaba/higress/pull/3770)）
+ reroute 之后插件拿到的路由名不再是旧的（[#3576](https://github.com/alibaba/higress/pull/3576)）
+ Claude 流式响应在边界协议情况下不再中断（[#3733](https://github.com/alibaba/higress/pull/3733)）
+ model-mapper 重映射后会同步更新模型 Header，不再触发路由循环（[#3827](https://github.com/alibaba/higress/pull/3827)）

---

## 升级方式
```bash
helm repo update
helm upgrade higress higress.io/higress --version 2.2.2
```

---

## 贡献者
本次发布有 16 位贡献者参与，其中 6 位是首次贡献：

**首次贡献** @Betula-L · @srpatcha · @KevinKingKong · @zengyr49 · @huchunnuan · @zat366

**持续贡献** @johnlanni · @CH3CHO · @wydream · @rinfx · @Jing-ze · @JianweiWang · @JayLi52 · @EndlessSeeker · @Thomas-Eliot · @zat366


