---
title: "AgentTeams 和 Claude Tag 都进入群聊模式，是新范式还是新叙事？"
description: "AgentTeams 和 Claude Tag 都进入群聊模式，是新范式还是新叙事？"
date: "2026-06-26"
category: "article"
keywords: ["Higress"]
authors: "王晨"
---

作者：望宸

我们在今年的 520 阿里云云峰会上发布了 AgentTeams，定位的是企业级多智能体治理与协作平台，支持企业统一创建、调度 Agent，每个 Agent 可以自定义模型，在钉钉、企微、飞书等 IM 平台创建群聊，进行团队协作。



Anthropic 近日发布了 Claude Tag，把 Claude 直接作为团队成员嵌入 Slack 频道。在 ambient 模式下，Claude 不需要被显式 @ 也会主动监听上下文、跟进任务、提醒进展，依托 Opus 4.8 实现跨小时级的异步协作。



企业办公场景，从一对一私聊到多对多群聊，大家不禁要问，这会是使用 Agent 的新范式么？我们不着急给出判断，选择范式之前，读者们更多的还是想了解下单聊和群聊，有哪些不同？



## 一、什么是群聊模式？
![](https://img.alicdn.com/imgextra/i2/O1CN01yhKfTB1fei5Lks3MX_!!6000000004032-2-tps-1672-941.png)

Anthropic 在 Claude Tag 的博客里定义了 Agent 群聊的四个特征：

+ @Claude is multiplayer：在一个 Slack 频道里，Claude 是同一个实例，与所有人协同工作，而不是每个人各自开一个独立会话。
+ @Claude learns over time：它持续跟随频道活动，积累上下文，不需要每次重新解释项目背景。
+ @Claude takes initiative：开启 ambient 模式后，它无须被 @ 也会主动监听、标注相关信息、跟进沉默的任务。
+ @Claude works asynchronously：它可以接收一个跨小时甚至跨天的任务，自主规划执行节奏，类似一个远程同事。



因此，**群聊 ≠ 多人各自和 Bot 聊天的并集**。如果群内，每个人开自己的会话，就只是并行的单聊了。



阿里云 AgentTeams 给出的，则是一个更工程化的定义。把群聊抽象为一组声明式 CRD，每个 Agent、每个真人都会赋予一层身份：

| 成员 | 身份 |
| :---: | :---: |
| **Manager** | 人类成员，平台级管理员 |
| **Team Leader** | Agent，N 个 Workers 的管理者 |
| **Worker** | Agent，最小执行单元  |
| **Human** | 人类成员，提供 L1 Admin / L2 Team Leader/ L3 Worker 的三级权限 |




每个 Worker 都会携带若干声明文件，SOUL.md、AGENT.md、MEMORY.md、USER.md。底层通信走 Matrix 协议，通过 Element Web 接入钉钉、企微、飞书等主流 IM。



**群聊不是聊天形态的升级，而是组织建模的开始**。



Slack 里的 Claude 是 Anthropic 把 Slack 当作 UI，把 Slack 的 thread、channel、DM 当作天然的对话拓扑结构来复用；AgentTeams 则是把群聊当作一种**可被声明、可被调度、可被审计、可被复制**的组织资源。



总结来看，**Agent 群聊模式 = 多个人类成员 × 多个 Agent × 共享上下文 × 异步任务 × 显式身份权重的协作平面。**



## 二、什么情况下，需要引入群聊？
不是所有 Agent 场景都需要群聊。如果只是写一段代码、查一份资料、生成一张图，单聊是更直接、更低成本的选择。引入群聊的代价是显著的，无论是用户的使用习惯，还是背后的 Agent Infra，包括技术架构、上下文管理、权限治理、并发调度、成本归因，每一项的复杂度都会迅速拉高。



那什么情况下，需要引入群聊？我们可以基于没有 Agent 的情况下进行推演，即什么时候我需要从单聊，切换到参与某个群聊中。



### 场景一：跨领域协作和长链路工作流 
跨领域协作需要多智能体，本质原因是 Agent 的上下文和记忆等是有限的，和人一样，一个 Agent 塞太多职责，注意力一分散，每件事都做不好。



跨领域是注意力在空间上的分散，长链路则是注意力在时间上的衰减。比如从需求到发布的软件研发流程，跑几小时甚至几天，上下文越积越长，Agent 对早期信息的注意力不断被稀释，推理质量持续下降。



当长链路叠加跨领域，需求分析、编码、测试本身就是不同领域的工作，等于空间和时间的双重挑战。拆成多个 Agent 按阶段接力，每段上下文干净、注意力集中，中间状态可持久化，断了能从断点续跑，更健壮，并且要发生在所有人都能看到、都能介入、都能纠偏的频道里。



阿里云 AgentLoop 的端到端 Coding 流水线，就是基于 AgentTeams 群聊模式实现的。AgentTeams 中的 TeamLeader 负责调度与状态，5 个 Worker 分别纳管本地 Agent，包括需求分类、Coding、Test、Review 和 Verify。需求分类中，按复杂度定义为 T1-T5 5档，lint fix 由 Agent 链路端到端自动化处理，bug fix 由人来审核 PR，架构设计类的需求，Agent 辅助。**（通过 AgentTeams 造 AgentLoop 的详细实践，AgentLoop 研发工程师马云雷后续将展开分享）**

 ![](https://img.alicdn.com/imgextra/i4/O1CN018RTIAO1l33DMDSqjO_!!6000000004762-2-tps-2820-1476.png)

****

### 场景二：多智能体治理
前两个是 Agent 注意力的限制，第三个是信任边界的要求。多个团队的人和 Agent 在一起协作，谁的 Agent 做了什么、花了多少钱、能访问哪些数据，必须有清晰的边界。单 Agent 没法代表多个组织身份，必须拆成多个独立的 Agents，各自归属、各自授权、各自计费。AgentTeams 支持将所有 LLM Key、MCP 凭据、GitHub PAT、内部 API Key 全部托管在 Higress AI Gateway，Worker 只持有可撤销的 Consumer Token。这些都是多智能体治理的刚性需求。



### 场景三：沉淀组织级知识
单聊的上下文是用完即焚的，用户关掉窗口，记忆主要存在于用户自己和对话日志里。但群聊不一样，新员工入群直接 @ 它就能完成 onboarding，这是组织级记忆资产，不是个人助理能提供的。



例如 AgentTeams 提供了独立的 AI Registry 注册中心，统一管理 Skills、MCP Servers、Agents、Team Templates，支持版本管理、安全审查、热加载。知识和对话被拆开：前者是组织资产，跨频道、跨 Team 复用；后者是临时上下文，绑定到具体频道。



以上三种，单聊都很难承载，Anthropic 已经用 Claude Tag 跑通了产品团队 65% 的 PR，阿里云 AgentLoop 使用 AgentTeams 实现端到端的 Coding 流水线。这意味着，至少在研发场景里，群聊模式带来的边际收益已经远超它带来的复杂性成本。

---

## 三、群聊模式，用户的使用习惯会有哪些变化？
![](https://img.alicdn.com/imgextra/i4/O1CN01y5xfKG1jO06F2sRnO_!!6000000004537-2-tps-1536-1024.png)不得不承认，多 Agents 的群聊模式，和普通的多人群聊，行为上存在一些区别，需要适应。

### 身份分层
单聊里 Agent 面对的是单一身份。群聊模式，则需要平台管理者对成员的权限进行配置管理。



Claude Tag 用 agent-identity 模型把频道身份作为权限主体，无论谁在频道里 @ Claude，工具调用权限边界由管理员预设的频道规则决定，而不是触发者本人的权限。比如，HR 频道里的敏感数据只有 HR 频道里的 Claude 能访问；研发频道里的 Claude 拿不到。



AgentTeams 则是设计了用户和 Agent 角色，用户分为 Admin 和普通用户，每个普通用户可以配置是否可以使用 TeamLeader Agent 和哪些 Workers 的权限，Agent 则分为 TeamLeader 和普通 Workers，每个 Worker 永远只持有可撤销凭据，真实凭据由网关托管。



### 上下文消歧
单聊上下文是低熵的，你说什么就是你说什么。群聊上下文是高熵的：30 人 5 分钟发 80 条消息，Agent 接到一句"帮我看下这个"，它怎么判断"哪个这个"？



Claude Tag 的设计是不主动猜，最大化利用 Slack 原生的 thread 模型。所有产出绑回原始 thread，由 Slack 的数据结构而不是 Agent 的推理来消除歧义。



AgentTeams 则是把消歧的责任拆给 TeamLeader Worker，任务先在 Team 内部由 Leader 做意图识别和分解，再下发给具体 Worker 执行。先内部协商再对外执行是一种组织级解法。



用户因此要学会一个新的发言习惯，重要任务从 thread 里发起，不要从主频道里抛。否则上下文会被淹没在群聊噪音里。



### 协作并发
单聊是回合制，你问、它答、你再问。群聊是流式，多个用户同时 @ Agent 触发独立任务，Agent 并行处理。



AgentTeams 的并发模型是显式的，每个 Worker 都是独立的容器实例，由 hiclaw-controller reconcile，类比 Pod 在 K8s 控制平面下的弹性调度。Team CRD 里 "1 个 TeamLeader + N 个 Workers" 的结构本身就是并发的声明式表达。

---

## 四、群聊模式，对 Agent Infra 提出了哪些新的挑战？
![](https://img.alicdn.com/imgextra/i3/O1CN01MkO4Or1WtWLuZCYJj_!!6000000002846-2-tps-1536-1024.png)前三节是从产品层、用户层讲的是群聊模式的不同，这一节就是讲基础设施层。在 AgentTeams 的设计过程中，我们会思考一个问题：群聊模式对基础设施提出了哪些新的挑战？



总的来看，单聊 Agent，核心问题是调度，怎么拆任务、怎么分配。但群聊模式，核心挑战变成了治理，谁有权限调用哪个 Agent？成本算谁的？出了问题谁负责？因此，群聊模式需要统一身份、RBAC 权限、成本归因、群体记忆等，这些需求在企业团队场景下是刚需，也更加复杂。



### 身份与权限
群聊里的权限主体不再是用户，而是频道 / Team 这种集合实体。这件事 K8s 早就处理过，ServiceAccount 是 Pod 的身份，不是创建 Pod 的人的身份；RoleBinding 绑定的是角色，不是工号。



AgentTeams 把这套模型搬到 Agent 群聊中，并显式拆成两条正交的轴：



Worker 侧：每个 Worker 拥有自己的 Consumer Token、自己的 MCP Servers 子集、自己的 Skills 子集；能力边界在 AGENT.md 里声明，运行时由 hiclaw-controller reconcile，未声明的工具和未授权的频道，Worker 是调不到的。



Human 侧：Human 显式分为三级，L1 Admin 是组织管理员，可创建/解散 Team、配置 Manager、托管主 Key。L2 Team 是 TeamLeader（含 TeamAdmin 人类角色），定义 Team 的 SOUL/AGENT/MEMORY/USER 四份声明文件、决定 Worker 编制与 Skills。L3 Worker：日常发言者，发起任务、@ Worker、审阅产出两条轴正交但联动：同一个 HR 同学在公司层是 L1 Admin，在研发 Team 里可能只是 L3 Worker；比如同一个 Worker 在 HR 频道里可以读敏感字段，在研发频道里看不到。



### 凭据治理
Agent 单聊场景，Agent 拿到的是用户的 OAuth token、API Key、MCP 授权。但在群聊模式中，多人 @ 同一个 Agent 时，到底用谁的 token？跨小时挂起的任务恢复执行时，原始触发者的 session 早就过期了。



AgentTeams 把这一层完全做到基础设施级，实现细颗粒度的权限管控：



第一步，【agent不碰真实凭据】所有凭据集中纳管在 Higress AI Gateway。LLM Key、MCP 凭据、GitHub PAT、内部业务 API Key 全部不下发给 Worker，Worker 只持有一个可撤销的 Consumer Token，每次出向调用由网关代换为真实凭据。这相当于把 K8s 的 ServiceAccount + RBAC 模型平移到 Agent 的出向流量层。Worker 容器即便被攻破，攻击者拿到的也只是一个一次性临时凭据，真实 Key 永远不出网关。



第二步，【主 Key 二次签发】真实凭据变成多把小权限的临时的凭据。一个 Team 持有一把主 API Key，平台基于这把主 Key 派生出 N 把派生凭证分发给每个 Worker。派生凭证天然带租户/Team/Worker 三级标签，一个 Worker 被攻击或被滥用，影响范围被严格约束在它自己那把派生凭证内，主 Key 与其他 Worker 完全不受影响。



第三步，【MCP 凭据按需下发、用完即焚】Worker 调用某个 MCP Server 时，对应的 MCP 凭据是任务粒度下发、执行完即销毁、不可转发、不可持久化。



### 群体记忆
群聊里的记忆问题比单聊复杂一个数量级。不是简单地加一个向量库，我们至少要回答四个问题：短期对话怎么不爆 token？长期事实怎么沉淀？过期信息怎么显式遗忘？组织知识怎么不污染个人记忆？ 



[AgentTeams 提供了开源实现](https://github.com/agentscope-ai/hiclaw)，和 [QwenPaw](https://github.com/agentscope-ai/QwenPaw)<font style="color:#DF2A3F;"> </font>同属 AgentScope，是 QwenPaw 的“群聊版”，因此我们采用了 [ReMe](https://github.com/agentscope-ai/ReMe) 的记忆框架。



第一层短期记忆：原始对话流水落到 session/dialog/，每次回复后由 auto_memory 钩子把当日轻量加工的事实卡片、对话摘要、资源阅读笔记写入 daily/<date>/。这一层只关心"今天发生了什么"，结构稳定、可审计，且不直接参与在线召回，避免短期碎片污染长期检索质量。



第二层，长期记忆走 digest/{personal, procedure, wiki}/ 三类结构化目录，分别对应个人事实 / 操作经验 / 知识节点。后端可插拔，本地默认是 Markdown + BM25/Embedding/wikilink 混合索引，企业生产环境对接到 AnalyticDB for PostgreSQL 的长记忆服务，服务端 LLM 做事实抽取、按 Agent 隔离、REST 调用。



当一个 Worker 被解雇，控制平面有一个明确的 cleanup hook，把它的工作区目录整体归档或销毁，不会有残留向量散落到其他 Worker 上。



第三层，Dream 让 Agent 每晚"睡觉"。auto_dream 是一个 cron 任务，定时触发，对当天的 daily/ 做四件事，备份当前 MEMORY.md 保证可回滚、扫描全部短期记忆、用 LLM 做沉淀+修正+去重+合并把短期事实蒸馏进长期 digest/、输出一份"苏醒汇报"到 memory/dreams/ 让 Team Admin 可审阅。



此外，Dream 会同步生成 daily/<date>/interests.yaml，次日由 proactive 能力读取，让 Agent 主动把"昨天遗留的待办、合并出来的新主题、用户最近高频关注但还没追问的问题"在合适的时机抛进频道。

---

## 五、是新范式吗？
回到开篇那个问题，群聊会成为使用 Agent 的新范式吗？



我们的判断是：群聊不会取代单聊，它会成为 AI Native 组织深挖团队协作效率提升空间的试验田。原因有三：



第一，企业 70% 以上的协作发生在 IM 群聊里。个人 Agent 的使用惯性势必会潜移默化的影响到团队间的协作习惯。



第二，个人提效的边际收益在递减。单人 Agent 的演进走过了四个阶段：prompt engineering、context engineering、harness engineering、loop engineering。但在人和人、岗位和岗位之间的衔接里依旧存在等待、信息丢失、重新对齐、责任推诿等效率黑洞。



Anthropic 选择把模型直接嵌进 Slack，认为单一强模型足以扮演合格队友；AgentTeams 则是把整套 K8s 风格的控制平面搬到协作编排中，走的是多 Agent、多 IM、多模型的异构开放路线，认为模型能力外，治理能力也是刚需。



第三，面向多智能体的基础设施已经准备好了，包括构建和运行时、身份和凭据治理、观测和进化、上下文和记忆等。不过有一件事我们需要澄清：群聊是一种组织协作形态，不是一个万能解。它的代价并不低，甚至会存在较长时间的冷启动时间，例如上下文管理变复杂、权限治理变复杂、并发调度变复杂、成本归因变复杂。



总的来看，Agent 实现组织协作提效，既需要强大的模型，更需要能支持其稳定、安全、经济运行的新基础设施。



**AgentTeams 和 AgentLoop 均处于邀测期，欢迎感兴趣的朋友加入钉群，申请测试。**[**AgentTeams**](https://help.aliyun.com/zh/document_detail/3040377.html)**、AgentLoop（群号：168330022816）。**




