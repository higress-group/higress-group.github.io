---
title: "Higress 社区 10 月进展：HiRoute 不到一个月发布 6 个版本，Windows 桌面版来了"
description: "Higress v2.2.5 发布并持续加固；Higress 团队开源的 Agent 智能路由引擎 HiRoute 不到一个月发布 6 个版本，带来 Windows 桌面版和新模型边用边评，路由计划也可以绑定执行 Agent。本文介绍两个项目 10 月的进展、HiRoute 的上手方式，以及接下来的两层架构。"
date: "2026-11-06"
category: "article"
keywords: ["Higress", "HiRoute", "AI 网关", "Agent 智能路由", "模型路由", "社区进展"]
authors: "Higress 社区"
heroImage: "/img/blog/higress-community-2026-10/cover.png"
---

10 月，Higress 发布了 v2.2.5，发版后继续做安全加固，并修复了一批 AI 和 MCP 插件的问题。Higress 团队开源的 Agent 智能路由引擎 HiRoute 进入快速迭代：从 10 月 9 日到 11 月 6 日，连续发布了 6 个版本，社区多次问到的 Windows 桌面版也已经上线。

这篇月报先介绍 Higress 的更新，再给第一次听说 HiRoute 的朋友讲讲它能做什么、这个月做了哪些事，最后简单说说两个项目接下来的方向。

## 一、Higress：v2.2.5 发布，持续加固

10 月初，Higress 发布 [v2.2.5](https://github.com/higress-group/higress/releases/tag/v2.2.5)，共 133 项更新，其中新功能 21 项、问题修复 72 项。值得关注的有：

- **从 Helm 平滑迁移到 hgctl**：新增 `hgctl upgrade --from-helm`，可以直接接管用 Helm 部署的 Higress 集群，不改写 Helm 历史（[#4754](https://github.com/higress-group/higress/pull/4754)）。
- **MCP Server 自动适配协议**：代理上游 MCP 服务时，可以设置 `server.protocolStrategy: auto`，由网关自动选择新旧两种协议流程（[#4685](https://github.com/higress-group/higress/pull/4685)）。
- **内置 Endpoint Picker**：通过标准的 WasmPlugin 引用，就能为 AI 推理服务启用内置的 Endpoint Picker（[#4608](https://github.com/higress-group/higress/pull/4608)）。
- **ext-auth 按请求头匹配**：可以根据某个请求头是否存在，决定请求是否经过外部认证（[#4560](https://github.com/higress-group/higress/pull/4560)）。
- **插件市场与发布**：Console 插件市场只展示经过审核、与 Console 版本绑定的稳定插件（[#4516](https://github.com/higress-group/higress/pull/4516)）；插件按快照发布，每个版本都能校验 digest。

发版之后，10 月的工作集中在安全和稳定上：

- **安全加固**：
  - 收紧 xDS 配置推送端口的暴露面（[#5123](https://github.com/higress-group/higress/pull/5123)）。
  - 数据库 MCP Server 强制要求认证凭据（[#5122](https://github.com/higress-group/higress/pull/5122)）。
  - 顶层 `model` 字段重复的 AI 请求会被直接拒绝，避免网关和上游服务读到不同的模型（[#5124](https://github.com/higress-group/higress/pull/5124)）。
  - cluster-key-rate-limit、geo-ip、ip-restriction 三个插件，遇到格式错误的真实 IP 请求头时不再崩溃（[#4950](https://github.com/higress-group/higress/pull/4950)、[#4948](https://github.com/higress-group/higress/pull/4948)、[#4944](https://github.com/higress-group/higress/pull/4944)）。
- **AI 插件修复**：
  - ai-token-ratelimit 修复了非流式响应中 token 漏记、少记的问题（[#5080](https://github.com/higress-group/higress/pull/5080)）。
  - ai-data-masking 修复了流式工具调用内容丢失的问题（[#5209](https://github.com/higress-group/higress/pull/5209)）。
- **MCP 兼容**：统一了 MCP Server 在新旧协议下的业务兼容（[#5282](https://github.com/higress-group/higress/pull/5282)），并支持保留上游的 discovery instructions（[#5263](https://github.com/higress-group/higress/pull/5263)）。
- **合规**：移除了 GPL 许可的 lint 工具依赖（[#5276](https://github.com/higress-group/higress/pull/5276)）。

完整变更见 [v2.2.5 Release Notes](https://github.com/higress-group/higress/releases/tag/v2.2.5)。

## 二、写给 Higress 用户：HiRoute 是什么

用 Codex、Claude Code 这类 Agent 干活时，很多人会给它配上最强的模型。可在实际会话里，难度是一步一步变化的：复杂任务里有大量简单的活，比如查资料、写说明、整理数据；简单任务里也会突然冒出难题。全程用最强的模型，钱和订阅额度大多花在了简单的步骤上。

[HiRoute](https://github.com/higress-group/HiRoute) 是 Higress 团队开源的 Agent 智能路由引擎，运行在你自己的电脑或服务器上。你继续用 Codex、Claude Code、Qoder、Pi、OpenCode、Hermes、DeepSeek Harness 等熟悉的 Agent，HiRoute 在每一轮判断这一步该交给哪个模型：常规工作交给经济模型，复杂阶段交给主力模型；经济模型某一步没做好，下一轮由主力接手。

![HiRoute 会话页：第 2 轮复杂任务交给主力 GPT-6 Astra；第 3 轮简单任务交给经济模型 DeepSeek V4.1 Flash，评分 0.32，触发下一轮保护；第 4 轮由主力低分保护接手，评分 0.83；第 5 轮回到经济模型，评分 0.99，同一轮的 6 次请求缓存命中 95% 至 99%](/img/blog/higress-community-2026-10/session-routing.png)

*上图是 HiRoute 的会话页：第 3 轮经济模型评分偏低，第 4 轮由主力接手；到第 5 轮，之前的问题已不再相关，回到经济模型。*

我们做过一次技术选型任务的对比实验：Qwen 3.8 Flash 负责调研，GPT-6 Astra 负责关键决策。在达到同样验收标准的前提下，成本比全程使用 Astra 降低约 90%（API 等价估算）。实验过程见[《HiRoute 智能路由实战：GPT-6 Astra × Qwen-3.8 Flash，同等质量下成本降低 90%》](https://hiroute.ai/zh/news/astra-qwen-smart-routing/)。

![真实任务、相同验收标准下，全部使用 GPT-6 Astra 的成本为 1.953 至 1.987 美元，HiRoute 组合 Qwen 3.8 Flash 与 GPT-6 Astra 的成本为 0.150 至 0.162 美元，整单成本降低 91%，约为 1/12](/img/blog/higress-community-2026-10/cost-savings.png)

切换模型会不会丢掉缓存？HiRoute 只在用户发送新消息、上下文压缩或重建时切换模型，同一轮里的工具调用始终使用同一个模型，切换后只有第一次请求会错过缓存。上面会话页的下半部分就是一例：第 5 轮的 6 次请求，缓存命中 95% 到 99%。更完整的分析见[《切换模型会损失缓存，智能路由还省钱吗？》](https://hiroute.ai/zh/news/routing-cache-cost/)。

HiRoute 的核心组件 HiRoute Gateway 用 Rust 构建，把 Higress AI 网关积累的工程经验带到了本地 Agent 工作流中，包括协议适配、模型能力检查、失败时在候选模型间有限接力、流式交付和执行观测。

## 三、HiRoute 10 月进展

### 不到一个月，6 个版本

![HiRoute 从 10 月 9 日到 11 月 6 日发布的 6 个版本：0.2.0、0.3.0、0.3.1、0.5.0、0.5.1、0.5.3，其中 11 月 3 日的 0.5.0 首次发布 Windows 桌面版；10 月合并 149 个 PR，新接入 5 类 Agent，社区 15 个 Issue 已关闭 14 个，外部贡献者提交 6 个 PR](/img/blog/higress-community-2026-10/release-timeline.png)

- **0.2.0（10 月 9 日）**：内置决策模型和自定义任务分支；接入 Qoder、Pi、DeepSeek Harness；提供 macOS 和 Linux 的 x86_64 / ARM64 安装包。
- **0.3.0（10 月 11 日）**：支持 Claude 订阅；修正 Messages 缓存用量重复计费；Linux 安装包通过 glibc 2.31 最小运行环境验证。
- **0.3.1（10 月 12 日）**：修复订阅代理与登录问题，改进 Mac 应用内升级失败后的恢复，完善 API 接入的服务目录。
- **0.5.0（11 月 3 日）**：首次发布 Windows 桌面版；Linux 可以在浏览器里使用与桌面版相同的界面；新增新模型边用边评、System One 每轮三问，路由计划可以绑定执行 Agent。
- **0.5.1（11 月 5 日）**：改进 Windows 下的安装、卸载和升级；支持独立连接 Codex Desktop。
- **0.5.3（11 月 6 日）**：修复 Codex 图片请求经 Qoder 转发时的错误，改进 Windows 安装与更新的诊断信息。

10 月，HiRoute 共合并了 149 个 PR。下面按主题介绍主要进展，每个版本的完整说明见 [GitHub Releases](https://github.com/higress-group/HiRoute/releases)。

### 1. 三个平台都有图形界面

10 月 10 日和 15 日，先后有社区用户在 Issue 里问 HiRoute 什么时候支持 Windows（[#67](https://github.com/higress-group/HiRoute/issues/67)、[#124](https://github.com/higress-group/HiRoute/issues/124)）。社区贡献者 [@JasonBuildAI](https://github.com/JasonBuildAI) 在 Windows 上逐个排查编译和本地存储问题，并提交了修复。11 月 3 日，Windows x64 桌面版首次发布：按当前用户安装，自带命令行、后台服务和 WebView2 引导安装器，不需要 Python，也不需要管理员权限。

Linux 支持 x86_64 和 ARM64，安装不需要 sudo，在浏览器里打开的是和桌面版相同的界面，远程服务器可以通过 SSH 隧道访问。macOS 版同时支持 Apple 芯片和 Intel。

![HiRoute 支持三个平台：macOS 桌面应用支持 Apple 芯片和 Intel；新发布的 Windows x64 桌面应用按当前用户安装，不需要管理员权限和 Python；Linux 支持 x86_64 和 ARM64，一行命令安装，在浏览器里使用与桌面版相同的界面](/img/blog/higress-community-2026-10/platforms.png)

### 2. 接入更多 Agent

10 月新接入了 Qoder、Pi、DeepSeek Harness、OpenCode 和 Hermes；Codex 支持独立配置，也可以连接 Codex Desktop；订阅方面新增了 Claude 订阅。加上原有的 Codex 和 Claude Code，HiRoute 已经能路由 7 类 Agent 的模型请求。

### 3. 新模型边用边评

几乎每隔几周就有新模型发布，价格只有主力模型的零头，榜单分数却很接近。难的是判断它在自己的工作里行不行。这个月，HiRoute 把这件事从头到尾打通了：

- **从首页开始试用**：选好要试的新模型和熟悉的主力模型，映射到 Agent 即可，Agent 里的模型名不用改。
- **信任度连续可调**：从“试用”到“托付”，越往右，越多简单工作交给新模型。如果新模型某一步评分偏低，而这个问题又关系到接下来的工作，就由主力模型接手。
- **按证据调整**：模型表现报告根据你自己任务里的评分，建议上调或下调信任度，回放确认后再发布。
- **System One 每轮三问**：上一步做得怎么样？这一步有多难？上一步的问题会不会带进下一步？决策模型只负责回答，阈值、选组和执行由 HiRoute 负责。我们把这套机制写成了[论文](https://github.com/higress-group/HiRoute/tree/main/experiments/system-one-routing-paper)，公开了中英文数据集、原始模型回答和离线复现工具。
- **决策模型更好接**：内置了决策模型，新增 OpenAI Decisions，也可以直接复用已有的百炼、OpenAI 或 OpenRouter 接入。

![信任度滑块从谨慎到托付，可选试用、熟悉、信任、放手、托付五个档位，越往右，越多任务交给常规模型](/img/blog/higress-community-2026-10/trust-slider.png)

![模型表现报告：可以调到「信任」，完整评分阶段 41（要求 ≥30）、胜任率 90%（要求 ≥85%）、评分覆盖 71%（要求 ≥60%）、来自 9 个会话（要求 ≥3）；按记录回放，这一档约 84% 的阶段会交给常规模型](/img/blog/higress-community-2026-10/report-suggestion.png)

*模型表现报告把每条规则的实际值和要求并排列出，并按你的记录回放调整后的效果。费用为 API 等价估算。*

### 4. 任务交给合适的 Agent

模型路由决定“这一步用哪个模型”，任务路由决定“这项工作交给哪个 Agent”。现在，路由计划可以绑定一个执行 Agent，可选 Codex CLI、Claude Code、Qoder CLI、Pi、DeepSeek Harness 或 OpenCode；执行时，每一轮仍按计划里的模型路由选择模型。Hermes 可以委派已发布的计划。用 Hermes 加 HiRoute，就能搭出类似 DeepSeek 提出的 Router + Worker 两层 Super Agent 架构，搭建过程见[《用 Hermes 和 HiRoute 搭一个 DeepSeek 式的 Super Agent》](https://hiroute.ai/zh/news/hermes-super-agent/)。

![Super Agent 架构：Hermes 作为 Router 理解意图、选择计划，提交任务后马上回到对话；HiRoute 的路由计划各绑定一个执行 Agent，资料搜集交给 Pi，问题分析交给 DeepSeek Harness，工程编码交给 Qoder CLI，代码审查交给 Codex CLI；每份计划内部，System One 每轮在经济组和主力组之间选择](/img/blog/higress-community-2026-10/super-agent.png)

### 5. 成本更可控

- **订阅和 API 一起接入**：订阅和 API 里的同名模型可以组装成一个模型，优先使用订阅，订阅暂时用不了时自动切换到 API。
- **API Key 花费额度**：可以设置一次性额度、按周期补充的额度，或让多个 Key 共用一份额度。HiRoute 在转发前预留额度，完成后结算。
- **计费更准确**：修正了 Anthropic Messages 缓存 token 重复计费的问题，由社区贡献者 @JasonBuildAI 报告并修复（[#75](https://github.com/higress-group/HiRoute/pull/75)）。
- **按接入设置代理**：每个 API 接入可以单独选择直连、使用环境代理或手动配置代理。

### 6. 更稳、更省资源

- 降低了 Gateway 的转发开销，以及观测后台任务的资源占用。
- 长时间运行的请求和大请求体更稳定。
- 本地记录默认最多占用 20 GB 磁盘空间。
- 存储出问题时，会给出可以照着操作的恢复步骤。

### 社区反馈

10 月，社区用户在 HiRoute 仓库提交了 15 个 Issue，其中 14 个已经处理并关闭。剩下的一个是 Kubernetes 容器化、多副本部署的需求（[#104](https://github.com/higress-group/HiRoute/issues/104)），我们会在后面的企业架构中回应。

两位外部贡献者共提交了 6 个 PR：[@JasonBuildAI](https://github.com/JasonBuildAI) 修复了 Windows 编译、存储和缓存计费问题，[@Aias00](https://github.com/Aias00) 改进了构建和验证工具。@Aias00 也是 Higress v2.2.5 中 `hgctl upgrade --from-helm` 的作者。

Windows 版发布后，陆续有新用户反馈安装和 Agent 发现方面的问题。两天后发布的 0.5.1 改进了 Windows 下的安装、卸载和升级流程，11 月 6 日的 0.5.3 又改进了安装与更新失败时的诊断信息。

### 延伸阅读

- [《HiRoute 智能路由实战：GPT-6 Astra × Qwen-3.8 Flash，同等质量下成本降低 90%》](https://hiroute.ai/zh/news/astra-qwen-smart-routing/)
- [《切换模型会损失缓存，智能路由还省钱吗？》](https://hiroute.ai/zh/news/routing-cache-cost/)
- [《HiRoute 新版本发布：新模型放心试，任务交给对的 Agent》](https://hiroute.ai/zh/news/new-model-trials-and-task-routing/)
- [《用 Hermes 和 HiRoute 搭一个 DeepSeek 式的 Super Agent》](https://hiroute.ai/zh/news/hermes-super-agent/)

## 四、三步开始用 HiRoute

先到 [hiroute.ai/zh/download](https://hiroute.ai/zh/download/) 下载：macOS 和 Windows 用桌面版；Linux 用一行命令安装，然后在浏览器里使用。

```sh
curl -fsSL https://hiroute.ai/install.sh | sh
```

1. **接入模型**：加入已有的订阅或 API，选好经济模型和主力模型。
2. **配置分工**：在「模型 → 决策模型」中连接决策服务，选择信任度，发布后映射到 Agent。
3. **照常工作**：继续在原来的 Agent 里工作，到 HiRoute 查看每一轮用了哪个模型、为什么这么选。

详细步骤见 [HiRoute 文档](https://hiroute.ai/zh/docs/)。

HiRoute 并不完美，决策模型也会判断错。欢迎在自己的场景里试一试，也欢迎告诉我们它在哪里判断错了。

## 五、接下来：Higress 与 HiRoute 的两层架构

接下来约两个月，Higress 和 HiRoute 会完成一次架构分层，让开发者和企业都能用上同一套智能路由能力：

![开发者只需要 HiRoute Desktop，一体化的本地 AI 网关，负责模型路由和任务路由；企业由 Higress 和 HiRoute Gateway 组成两层架构提供中心化服务，HiRoute Gateway 负责 AI 网关能力、模型路由和任务路由，Higress 负责 K8s 部署、控制面与数据面分离和安全，兼容 Higress Wasm 插件生态；员工电脑上的 HiRoute Desktop 连接企业服务](/img/blog/higress-community-2026-10/architecture.png)

- **开发者**：只需要 HiRoute Desktop。这是一个一体化的本地 AI 网关工具，装上就能接入自己的 Agent 和模型。
- **企业**：由 Higress 和 HiRoute Gateway 组成两层架构，提供中心化服务。Higress 负责 K8s 部署、控制面与数据面分离等面向安全的分布式能力；HiRoute Gateway 负责 AI 网关能力和智能路由（模型路由、任务路由）。员工仍然使用 HiRoute Desktop，在连接企业服务的同时打通本地 Agent；企业则可以统一优化路由规则，做好成本治理。

这样分层有两个原因。

第一，AI 网关的基础能力已经趋于稳定，可以从 Wasm 插件沉淀为内置能力。这样做能省掉 Wasm 带来的额外开销，性能更好；独立于 Envoy 的 Rust 内核没有历史包袱，可以按第一性原理，把过去积累的 AI 网关需求重新做一遍更合理的实现。现有的 Higress Wasm 插件生态会继续兼容。

第二，开发者和企业的需求本来就不同：开发者要的是装上就能用，企业要的是 K8s 上的分布式、安全架构。组件分离之后，两种需求可以同时满足。[#104](https://github.com/higress-group/HiRoute/issues/104) 提出的容器化、多副本部署，也会由企业形态来回应。

具体设计我们会另文介绍。

## 致谢

感谢 10 月为 Higress 提交代码的 [@sunxia0](https://github.com/sunxia0)、[@zhihao-yuan](https://github.com/zhihao-yuan)、[@yyqdbngt](https://github.com/yyqdbngt)、[@btlqql](https://github.com/btlqql)、[@dusk5-Surtr](https://github.com/dusk5-Surtr)，以及参与 v2.2.5 的所有贡献者（完整名单见 [Release Notes](https://github.com/higress-group/higress/releases/tag/v2.2.5)）。

感谢为 HiRoute 贡献代码的 [@JasonBuildAI](https://github.com/JasonBuildAI)、[@Aias00](https://github.com/Aias00)，以及提交 Issue 的 [@springsheep](https://github.com/springsheep)、[@MrSsunlight](https://github.com/MrSsunlight)、[@NieRonghua](https://github.com/NieRonghua)、[@Nicholas2015](https://github.com/Nicholas2015)、[@alaggxz](https://github.com/alaggxz)、[@fishcake11](https://github.com/fishcake11)、[@hejun041](https://github.com/hejun041)、[@Weiss545](https://github.com/Weiss545)、[@menglol](https://github.com/menglol)、[@wy471x](https://github.com/wy471x)、[@augustazz](https://github.com/augustazz)。

- Higress：[github.com/higress-group/higress](https://github.com/higress-group/higress)
- HiRoute：[github.com/higress-group/HiRoute](https://github.com/higress-group/HiRoute)
- HiRoute 下载：[hiroute.ai/zh/download](https://hiroute.ai/zh/download/)
- HiRoute 文档：[hiroute.ai/zh/docs](https://hiroute.ai/zh/docs/)
