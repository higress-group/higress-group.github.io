---
title: "Higress v2.2.1 发布：让多模型对接少踩几个坑"
description: "Higress v2.2.1 发布：让多模型对接少踩几个坑"
date: "2026-04-15"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

你有没有遇到过这些场景——Claude Code 对接网关，突然冒出一个莫名其妙的 400；Bedrock 的请求签名怎么都对不上，日志里一串 403；Vertex 的流式响应推到一半，内容突然断了。

如果有，v2.2.1 可能正好解决了你的问题。

## 版本概览
Higress v2.2.1 于 2025 年 4 月 9 日发布，距上一个版本 v2.2.0 约两个月。本次更新包含约 **50 项核心变更**，主要集中在多模型协议兼容、云厂商稳定性、AI 可观测性三个方向。

下面按主题聊聊，相比 v2.2.0 都改了什么。

---

## 一、多模型兼容：抹平各家协议的"方言"
2025 年的 AI 领域有个残酷的现实：没有任何一个模型能打天下。你的团队可能同时在用 OpenAI、Claude、通义千问、智谱、Gemini、Bedrock……每家的 API 协议都有那么点"个性"。

比如，Claude 要求消息必须 user/assistant 交替出现，你连发两条 user 消息？直接报错。再比如，OpenAI 有个叫 developer 的消息角色，Claude 压根不认。

Higress 作为 AI Gateway，就是负责在中间做协议转换的。这些"方言差异"得由网关来抹平，不能让每个客户端自己去适配。

### 连发多条同角色消息不再报错
有些模型（比如 GLM、Kimi、通义千问）要求对话消息必须严格交替——一条 user、一条 assistant、再一条 user。但实际使用中，客户端经常会连发多条 user 消息。

v2.2.1 新增了一个配置项 `mergeConsecutiveMessages`（[#3598](https://github.com/alibaba/higress/pull/3598)），开启后网关会自动把连续的同角色消息合并成一条再发给模型。你不用改客户端代码，这些"格式要求严格"的模型就能直接用了。

### developer 角色自动降级
OpenAI 定义了一个 developer 角色，但很多其他模型根本不认。现在网关碰到不支持 developer 的模型时，会自动把它转成 system 角色（[#3479](https://github.com/alibaba/higress/pull/3479)），不用你手动处理。

### Claude 协议转换：集中修了 8 个问题
这是 v2.2.1 相比 v2.2.0 改动最密集的部分。如果你在用 Claude Code 通过 Higress 调用服务，之前可能遇到过各种奇怪的错误——这次集中清理了一波。

简单说，修复涵盖这几类问题：

+ **工具调用信息丢失**：Claude 在流式返回时，工具调用的数据、停止原因等信息转成 OpenAI 格式后会丢失或出错，导致下游拿不到完整的工具调用结果（[#3507](https://github.com/alibaba/higress/pull/3507)、[#3506](https://github.com/alibaba/higress/pull/3506)、[#3517](https://github.com/alibaba/higress/pull/3517)）
+ **消息内容被意外丢弃**：当一条消息里同时包含工具调用结果和普通文本时，文本部分会被吞掉（[#3503](https://github.com/alibaba/higress/pull/3503)）
+ **流式响应格式不完整**：转换后的流式数据缺少必要的事件标识和字段结构，导致客户端解析失败（[#3502](https://github.com/alibaba/higress/pull/3502)、[#3510](https://github.com/alibaba/higress/pull/3510)）
+ **Claude 的推理参数被错误传给了其他模型**：Claude 特有的 thinking 和 reasoning_max_tokens 参数被透传到 Azure 等不支持这些参数的模型，直接 400（[#3667](https://github.com/alibaba/higress/pull/3667)）
+ **空消息导致请求被拒**：Claude 系统消息内容为空时，转换后会变成 null，模型直接拒绝请求（[#3496](https://github.com/alibaba/higress/pull/3496)）

Claude Code 用户升级后体感应该比较明显。

---

## 二、HiClaw 模式：给多 Agent 协作加个"保险"
在 HiClaw / OpenClaw 这类多 Agent 协作场景中，有个常见的坑：模型想了半天，返回了一大段推理过程，但最终回复的正文是空的。下游客户端一看——空回复？直接报错。

v2.2.1 新增了一个 `hiclawMode` 开关（[#3625](https://github.com/alibaba/higress/pull/3625)），打开后自动处理两件事：

1. **空回复自动补救**：如果模型只返回了推理过程、没有正文，网关会自动把推理内容当作正文返回，不让下游看到空回复。
2. **连续同角色消息自动合并**：就是前面说的那个能力，在多 Agent 场景下同样需要。

多 Agent 场景的两个常见问题，一个开关搞定。

---

## 三、AI 可观测性：看得清楚，又不把内存撑爆
AI 应用的监控有个经典的两难：你想看到完整的请求和响应内容方便调试，但高并发场景下，把完整的对话内容都缓存下来，内存分分钟 OOM。

### 轻量级统计模式
v2.2.1 新增了一个"轻量模式"（[#3512](https://github.com/alibaba/higress/pull/3512)）：不再缓存完整的对话内容、模型回复和推理过程这些大字段，只提取关键信息——用户问了什么、用了哪个模型（[#3513](https://github.com/alibaba/higress/pull/3513)）。对生产环境来说，这就够用了，内存压力小很多。

### Token 用量不再漏记
以前 Token 消耗要等整个流式响应结束才会记录。问题是，如果用户中途断开了连接呢？这部分 Token 实际已经消耗了，但日志里没有——钱花了，账对不上。

现在改成了实时记录（[#3624](https://github.com/alibaba/higress/pull/3624)）：网关一解析到 Token 用量就立刻写入日志，即使连接中途断开也不会丢。用 Codex、Claude Code 这类编码工具的同学应该懂这个痛——一个大请求跑了几十秒突然断了，Token 用量得算清楚。

### Claude 工具调用也能统计了
之前 ai-statistics 插件只能统计文本类的响应。现在它能解析 Claude 流式响应中的工具调用信息了（[#3523](https://github.com/alibaba/higress/pull/3523)）——用 Claude 做 Agent 时，每次调了什么工具、传了什么参数，都能完整记录。

另外还修了两个 Bug（[#3505](https://github.com/alibaba/higress/pull/3505)、[#3491](https://github.com/alibaba/higress/pull/3491)），之前流式响应的回复内容有时候不会被记到日志里，现在修好了。

---

## 四、三大云厂商 Provider 加固
### Amazon Bedrock：请求签名问题终于消停了
AWS 的 Bedrock 服务要求每个请求都带 SigV4 签名（一种 AWS 特有的身份验证机制）。v2.2.0 里这块有几个问题：

+ **模型名带特殊字符时签名对不上**（[#3590](https://github.com/alibaba/higress/pull/3590)）：比如模型名里有冒号（`nova-2-lite-v1:0`），签名计算时编码方式有误，导致 AWS 校验不通过，直接 403。
+ **部分 API 漏了签名**（[#3549](https://github.com/alibaba/higress/pull/3549)）：Embeddings 等扩展接口之前没走签名流程，现在统一了。
+ **新增 Prompt Cache 支持**（[#3563](https://github.com/alibaba/higress/pull/3563)、[#3609](https://github.com/alibaba/higress/pull/3609)）：可以通过 OpenAI 标准接口使用 Bedrock 的 Prompt Cache 功能（把常用的提示词缓存起来，下次请求时跳过重复计算），还能配置缓存保留策略。

### Google Vertex：流式响应不再"断片"
+ **长回复被截断的问题修了**（[#3599](https://github.com/alibaba/higress/pull/3599)）：Vertex 返回流式数据时，如果一条 JSON 消息刚好被网络拆成了两个包，之前会解析失败导致后续内容全部丢失。现在重新设计了拼接逻辑。
+ **支持让模型按固定格式返回**（[#3649](https://github.com/alibaba/higress/pull/3649)）：Gemini 2.5+ 模型现在可以通过 OpenAI 标准的 `response_format` 参数，要求模型按指定的 JSON 结构返回结果——适合需要结构化输出的场景。
+ **图片编辑 API**（[#3536](https://github.com/alibaba/higress/pull/3536)）：用标准 OpenAI SDK 就能调用 Vertex AI 的图片编辑功能，不用换客户端。

### Microsoft Azure：大图上传不再出错
+ 修复了通过 Azure 上传大图片时，模型映射出错的问题（[#3651](https://github.com/alibaba/higress/pull/3651)），高并发场景下的内存使用也优化了。

---

## 五、路由与配置：支持更多 API，部署更灵活
### OpenAI Responses API 开箱即用
OpenAI 新推出了 Responses API（`/v1/responses`），网关的模型路由和模型映射插件现在默认支持这个路径（[#3585](https://github.com/alibaba/higress/pull/3585)），不需要额外配置。

### 语音和实时通信 API
新增对以下 API 路径的路由支持（[#3620](https://github.com/alibaba/higress/pull/3620)）：

+ `/v1/audio/transcriptions`（语音转文字）
+ `/v1/audio/translations`（语音翻译）
+ `/v1/realtime`（实时通信）
+ 通义千问兼容模式的 Responses API

### 自定义域名和路径
有些企业需要通过自己的域名或内部代理来访问模型服务。v2.2.1 提供了三个新配置：

+ **自定义服务域名**（[#3638](https://github.com/alibaba/higress/pull/3638)）：Gemini 和 Claude 可以走你指定的域名，内网环境、合规要求都能满足。
+ **统一路径前缀**（[#3686](https://github.com/alibaba/higress/pull/3686)）：给所有请求加上统一的路径前缀，多租户和 SaaS 场景用得上。
+ **自定义模型标识 Header**（[#3689](https://github.com/alibaba/higress/pull/3689)）：网关传递模型标识用的 HTTP Header 名称可以自定义了，不再固定为 `x-higress-llm-model`。

### 有状态 API 不再随机 404
OpenAI 的文件管理、批量任务等 API 是有状态的——你上传了一个文件，后续请求必须打到同一个 API Token 才能找到它。但如果网关配了多个 Token 做负载均衡，请求可能被随机分到不同的 Token，结果就是 404。

v2.2.1 加了消费者亲和性逻辑（[#3499](https://github.com/alibaba/higress/pull/3499)）：同一个用户的请求始终路由到同一个 Token，404 的问题就不会再出现了。

### Claude Prompt Cache 命中率提升
Claude 的系统消息里有个字段每次请求都会变，导致 Prompt Cache 一直命中不了（缓存 key 每次都不一样）。v2.2.1 会自动过滤掉这个动态字段（[#3518](https://github.com/alibaba/higress/pull/3518)），让缓存能真正生效，减少重复计算。

---

## 六、新增模型服务
### 智谱（z.ai）
智谱 Provider 正式接入（[#3489](https://github.com/alibaba/higress/pull/3489)、[#3488](https://github.com/alibaba/higress/pull/3488)）：

+ 支持中英文品牌展示（"智谱" / "z.ai"）
+ 根据系统时区自动选择国内或国际域名
+ 支持代码规划模式和思考模式
+ 中国/国际双端点可配置

### AI 安全防护增强
安全防护插件拦截请求时，之前只返回一段纯文本提示。v2.2.1 改成了结构化的 JSON 响应（[#3642](https://github.com/alibaba/higress/pull/3642)），包含拦截原因、请求 ID 和错误码——下游系统可以根据这些字段做自动化处理，不用再靠解析文本来猜原因了。

---

## 七、工程与运维
这些改动用户可能感知不到，但对项目的长期健康很重要：

+ **MCP SDK 迁入主仓库**（[#3516](https://github.com/alibaba/higress/pull/3516)）：MCP（Model Context Protocol，模型上下文协议）的 SDK 从独立仓库搬进了主仓库，减少跨仓库依赖带来的构建问题。
+ **Helm Chart 瘦身**（[#3657](https://github.com/alibaba/higress/pull/3657)）：删掉了 29 个已经不用的配置项，部署模板更干净。
+ **镜像拉取策略可配置**（[#3550](https://github.com/alibaba/higress/pull/3550)）：gateway、plugin server、controller 三个组件的镜像拉取策略（Always / IfNotPresent / Never）都可以独立配置了。
+ **CI 环境锁定**（[#3500](https://github.com/alibaba/higress/pull/3500)）：固定使用 ubuntu-22.04，避免被 ubuntu-latest 底层升级搞出奇怪的 CI 失败。
+ **Nacos SDK 升级**（[#3587](https://github.com/alibaba/higress/pull/3587)）：升级到 v2.3.5，修复了内存泄漏、文件句柄泄漏、多集群场景下服务发现异常等老问题。
+ **Helm 镜像源管理优化**（[#3521](https://github.com/alibaba/higress/pull/3521)）：插件镜像可以和核心组件使用不同的镜像仓库了，方便企业内部管理。

其他零散修复：路由去重逻辑现在会考虑 Header 条件（[#3580](https://github.com/alibaba/higress/pull/3580)）、Ingress 状态更新逻辑修正（[#3575](https://github.com/alibaba/higress/pull/3575)）、高负载下 SSE 连接握手事件丢失（[#3567](https://github.com/alibaba/higress/pull/3567)）、配置模板解析修复（[#3652](https://github.com/alibaba/higress/pull/3652)）、通义千问的 Claude 兼容接口路径更新（[#3530](https://github.com/alibaba/higress/pull/3530)）。

---

## 谁应该升级？
如果你正在使用 v2.2.0 或更早版本，以下场景建议优先升级：

+ **用 Claude Code / Claude 做后端**：一口气修了 8 个协议转换问题，之前遇到的各种 400、内容丢失大概率能解
+ **用 Bedrock / Vertex 云服务**：签名、流式响应、缓存方面的问题修了不少
+ **跑高并发 AI 代理**：轻量统计模式帮你省内存，Token 用量也不会漏记了
+ **同时对接多家模型**：消息格式自动合并、角色自动转换，少写 workaround

```bash
helm repo update
helm upgrade higress higress.io/higress --version 2.2.1
```

---

## 致谢
本次发布共有 **13 位贡献者**参与，其中 **7 位首次贡献**：

@DamosChen · @lx1036 · @Sunrisea · @shiyan2016 · @Jholly2008 · @JianweiWang · @icylord

持续投入的核心成员：

@johnlanni · @CH3CHO · @wydream · @rinfx · @lexburner · @Jing-ze

每一个 PR 背后都是真实的使用场景和真实的问题，感谢每一位让 Higress 变得更好的人。

---

**GitHub**：[github.com/alibaba/higress](https://github.com/alibaba/higress)　|　**文档**：[higress.ai](https://higress.ai)　|　**Release Notes**：[v2.2.1](https://github.com/alibaba/higress/releases/tag/v2.2.1)


