---
title: "Tokenmaxxing 困局，有立竿见影的改善方案吗？"
description: "Tokenmaxxing 困局，有立竿见影的改善方案吗？"
date: "2026-06-05"
category: "article"
keywords: ["Higress"]
authors: "王晨"
---

![](https://img.alicdn.com/imgextra/i1/O1CN018lTYot1kJi034Ozlr_!!6000000004663-2-tps-1923-818.png)

4个多月前，Uber 开始向旗下约 5000 名工程师全面推广 Claude Code，该工具迅速在工程师群体中引发热潮，但4个月后使用量远超公司财务模型的预期，烧光了全年的 AI 编程预算[1]。这一案例引发了的社区的连锁讨论，一是控制 Token 消耗的最佳实践，二是如何量化商业价值。由此可见，鼓励开发者使用 AI 提效、加速产品迭代和创新的同时，建立透明的成本管控机制，将成为各大企业面临的重要课题。



## 一、Token 都烧在哪里？
这是一个复杂的问题，既依赖严苛的统计学，又需要大量的合规样本。我们尝试从以下三类数据源，对Token 消耗的分布，做一番初探：学术论文 arXiv:2604.22750[2]、来自 Vantage.sh 的工程实测 、Jake Nesler[3]、Reddit 1 亿 token 样本的消耗追踪[4]。



### arXiv:2604.22750
《"How Do AI Agents Spend Your Money?》[2] 发布于今年4月，对 Agent Token 的消耗作了非常系统的研究，核心发现是 Agentic 编程任务消耗的 Token 量是普通 Chat 的约 1000 倍，而 Input Token 而非 Output Token 主导了绝大部分成本；论文同时报告了一个反直觉的结论：Token 消耗与任务准确率之间几乎没有相关性（r < 0.15），即花更多钱并不能买到更好的结果。

![](https://img.alicdn.com/imgextra/i3/O1CN01dEh5VU1zsG79God70_!!6000000006769-2-tps-1906-1498.png)



### Vantage.sh
Vantage.sh 是一家云成本管理平台公司，帮企业看清并优化多云环境下的费用支出，并提供成本报告、预算预警、资源优化建议等能力。他们在今年4月发布了《The Hidden Cost Driver in Agentic Coding: It's Not the Per-Token Price》[3]，提供了有关 Token 消耗更加精确的数据：Agentic 编程会话的 Input/Output Token 比约为 25:1（约 100 万 Input vs 4 万 Output），Input 占总成本约 85%；Agentic 会话虽然只占总请求量的 1/10，却比非 Agentic 使用贵约 200 倍；并识别出会话分为三个阶段（探索→实现→测试迭代），其中前 10 轮的探索期 Token 消耗密度最高。

![](https://img.alicdn.com/imgextra/i4/O1CN01ReX9so1MqBIpajQVv_!!6000000001485-2-tps-1914-1576.png)



### Reddit 100M Token 追踪
这是一位 Claude Code 重度用户在 r/ClaudeAI 发布的个人追踪数据（1289 次请求、1 亿 token 样本量）[4]，其中 99.4% 的 AI 开销来自 Input Token；作为独立的、未经过滤的一手使用数据，它从实操层面印证了学术论文和 FinOps 报告的方向判断，Agent 的成本问题本质上是**读太多，而非写太多。**

![](https://img.alicdn.com/imgextra/i4/O1CN01FbIgHs1a1FssoKpWB_!!6000000003269-2-tps-1876-1446.png)



综合以上来源，三份报告的共识是：Agent 的 Token 消耗绝大部分是 Input（理解/寻找），而非 Output（生成/输出），需要注意的是，以上三份报告未涉及多模态的输出，若考虑多模态，输出占比会显著提升。但它们均未对 Input Token 做进一步的细分归类。然而在实际使用中，Agent 读了很多并不能帮我们定位优化方，我们需要一个更细的分类框架。



下面这张表是我们基于个人使用 Agent 的经验，结合行业中对 Agent Input 行为的常见分类共识，所做的定性归因，分为文件检索、关系追踪、上下文管理、生成循环、工具交互。其中，高/中/低排序反映的是日常体感中各类动作对 Token 消耗的相对贡献，不是某个实验的精确测量结果。

![](https://img.alicdn.com/imgextra/i3/O1CN01EQZoZW283ixHbP0Tw_!!6000000007877-2-tps-1540-976.png)

C1（文件盲读）和 C2（依赖探索）是消耗最重的两个来源，合计构成了 Input Token 的主体。这与 Jake Nesler 的 "80% wasted finding things"、Vantage.sh 的 "re-reading files"、arXiv 的 "input tokens dominate" 三方互证。而 C4（生成迭代）和 C5（工具试错）虽然也消耗 Token，但在体感上远不如前两者夸张。



在这五大成本源中，C2（依赖探索）是最具结构性、最适合作为架构手段干预的一类。



为什么这么说？文件盲读（C1）虽然消耗同样重，但本质上是搜索问题，更好的索引、更精准的文件定位就能缓解。上下文重建（C3）可以靠更大的上下文缓存、记忆能力来优化。但依赖探索不一样，Agent 追踪的是实体之间的关系：A 调用 B、B 部署在 C、C 的 SLA 是几级、C 最近变更了什么。这种关系如果不被提前结构化，Agent 每次都得在纯文本中现场推断，推断失败就重来。接下来，我们将以依赖探索为关键词，聊聊我们的实践。



## 二、依赖探索的三个范式
如果我们只看 Agent 如何获取依赖/关系信息这一条线，过去三年差不多走过了三个阶段。每一代都解决了上一代的核心痛点，也暴露了新的瓶颈。下面的演进对比中，我们用运维场景的例子来串联。



场景描述：一个名为 shopping-user 服务的告警响了，但根因实际在下游的 shopping-cart（一个用户 sleep + NPE、另一个自旋 500ms）。传统根因分析把矛头指向 shopping-user 本身，只有在明确知道"shopping-user 调了 shopping-cart、shopping-cart 调了 shopping-item"这条依赖链的情况下，Agent 才能沿着拓扑往下查到真正的故障点。



这是一个典型的依赖探索决定了诊断成败的场景，用它来展示三代范式如何处理依赖信息，这样最直观。

![](https://img.alicdn.com/imgextra/i1/O1CN0170WXGe1DZOEww2f6y_!!6000000000230-2-tps-1560-1614.png)<font style="color:rgb(44, 62, 80);background-color:rgb(250, 251, 252);">  
</font>

Stuffing 卡在容量，RAG 用检索把容量打开了；RAG 又卡在语义碎片化，我们拿到一段相关文本，依然不知道它和当前问题里的实体有没有直接的依赖关系；Ontology 则是把实体和实体关系提到了一等公民的位置，Agent 从在文本里推断关系变成了在图谱上查询关系。



## 三、Ontology <font style="color:rgb(10, 37, 64);background-color:rgb(250, 251, 252);">如何降低依赖探索的 Token 消耗？</font>
我们从代码场景和运维场景两个方向，提供两组实证，探究"有 Ontology"和"没 Ontology"之间的具体差距。

### 代码知识图谱：10× Token 压缩
2026 年 3 月，Martin Vogel 等人发表了 Codebase-Memory（arXiv:2603.27277）[5]，用 Tree-Sitter 将代码解析为函数/类/调用链的持久化知识图谱，存储在 SQLite 中，通过 14 个 MCP 工具暴露给 LLM，实验结果是在 31 个代码仓库的 hub detection 和 caller ranking 任务上验证：有图谱的消耗约 1,000 token、token 消耗压缩 10 倍、工具调用减少 2.1 倍，没图谱的消耗了高达 10,000 token，实验覆盖 31 个代码仓库、66 种编程语言，方法是用 Tree-Sitter 将代码解析为持久化知识图谱存储在 SQLite 中，通过 14 个 MCP 工具暴露给 LLM。

![](https://img.alicdn.com/imgextra/i4/O1CN01NyLwDD1DiYA4OYqeA_!!6000000000250-2-tps-2632-1610.png)



### <font style="color:rgb(27, 58, 92);background-color:rgb(250, 251, 252);">UModel：一行代码实现智能异常检测</font>
代码场景的 ontology 只是入门。企业运维场景的 ontology，由于领域知识完全不在模型预训练范围内，效果会更为显著。



阿里云可观测团队在[《一行代码实现智能异常检测：UModel PaaS API》](https://mp.weixin.qq.com/s/ggm8MhyGXlRjpXNwxBUmJg)中给出了一个直白的对比。以下是开发者手动集成可观测数据时需要走的路径。如果让 Agent 在 runtime 重走同样的路径，每一步都要消耗对应的 Token。

![](https://img.alicdn.com/imgextra/i1/O1CN01GUrGf91L5dR2KnOsJ_!!6000000001248-2-tps-1546-1170.png)



但如果提供了 UModel 这类 ontology，就能避免三类任务的 Token 开销。

+ 多轮元数据查询：不再反复查 EntitySet、MetricSet、Storage 的对应关系。原先每一步都需要回到模型推理一轮，现在 ontology 层一次性解析完毕。
+ 字段映射的现场推断：不需要 Agent 琢磨 `service_id` 和 `acs_arms_service_id` 是不是同一回事——映射关系已内置于 DataLink。
+ 查询语法纠错循环：不需要 PromQL/SPL 拼错一次再回来重试。Object 模式下 Agent 只需表达意图（`get_metric()`），底层语法对其完全透明。



## <font style="color:rgb(10, 37, 64);background-color:rgb(250, 251, 252);">四、模型变强后，还需要 Ontology 么？</font>
到这里，一个不可回避的问题浮出水面：如果上下文窗口持续变大、推理成本持续下降，Ontology 的价值会被"蛮力"吃掉吗？



我们的判断是：取决于领域。



对于代码场景，答案确实有些暧昧。代码是模型预训练的主战场，随着模型能力持续增强，它理解一个新 codebase 的能力确实在变强。在这个领域里，ontology 的价值可能逐步被模型内化。



但一旦换运维（Ops）这种企业级领域，情况完全不同。我们认为这是一个 Ontology 价值最明确、最不可能被模型吃掉的正面案例。原因有三：



+ 企业内的实体和实体关系永远不在通用模型的预训练语料中。企业的实例规模、服务拓扑、CMDB 配置、告警规则、变更窗口、值班排班，这些实体信息每天都在变。
+ 运维的本质是关系推理。告警在 A，根因在 B，中间经过三层依赖。如果这条依赖链不是结构化地给到 Agent，它就得在日志和文档里一段段翻找、一步步猜，模型变强能加速推理，但不能消灭"没有信息"这个问题。
+ 运维作为严肃场景，对准确率的容忍度极低。自主运维误判一次根因，可能把正常服务重启掉，或者放过真正的故障导致 P0 级事件。在这种场景下，"83% 的准确率"是不可接受的，你需要 ontology 来把质量损失逼近零。



Palantir 是"企业 Ontology"商业价值最具说服力的验证案例。他们的核心产品 AIP（AI Platform）底层就是一套 ontology，把企业的人员、资产、流程、数据画成统一图谱，让 AI Agent 在上面做推理。Palantir 市值高达3000亿+美金，本质上是资本市场对"企业 Ontology"这个能力的定价，不只是省 token，更关键的是让 AI 输出变得可靠、可审计、可操作。



## 五、<font style="color:rgb(10, 37, 64);background-color:rgb(250, 251, 252);">阿里云的 Ontology 实践：STAROps</font>
说到这里，我们想把讨论落到一个具体的、已经在线上运行的工程实践上。阿里云近期发布的全域智能运维平台 STAROps，它将大模型技术、UModel、RCA、RCA benchmark 进行有机结合，是国内在 AIOps 方向上把 Ontology 落地得较为完整的实践。其中，UModel 是本体论层，负责定义运维世界里的实体以及实体之间的关系。RCA，Root Cause Analysis，是阿里云可观测团队面向分布式系统故障诊断的实践方法论，RCA benchmark 提供了标准化根因分析评估数据集与评估协议体系，联合信通院、小鹏汽车、中科院软件共同发起。

![](https://img.alicdn.com/imgextra/i4/O1CN0114Tzsr26hS4y7FKRu_!!6000000007693-2-tps-1672-941.png)



接下来，我们通过一段实操视频，感受 ontology 在运维场景故障诊断一个前端应用报错中所发挥的应用。

[Ontology 在故障诊断场景下的应用_2026年6月1日.mov](https://cloud.video.taobao.com/vod/xQQ4vIpHRycmC6VioTRVKixSLAtdwuMN3KCBVlK6FOc.mp4)

+ 实体感知：确定需要诊断的实体，frontend。
+ 自动编排多源查询：系统自动生成了一张调查拓扑图，展示 frontend 及其上下游服务的调用关系，查询 ERROR 级别日志，提取具体异常堆栈。
+ 深度调查：系统自动编排多步观测数据查询，包括 Pod 级存储/文件系统指标、K8s Events 查询、资源变更记录查询、下游服务拓扑获取等。
+ 给出故障实体症状：
    - 现象：frontend 服务在告警窗口内 HTTP 500 状态码占比极高。
    - 证据：Trace 差异分析显示 http.status_code=500 的 diff 值高达 0.958；关键错误堆栈显示 TypeError: Cannot read properties of undefined (reading 'streetAddress')，发生在渲染 /cart/checkout/[orderId] 页面时，这表明前端依赖的某个数据结构（预期从 ad 服务获取）为空。
+ 因果链确认：Ad 服务滚动更新 → 部分 Pod 不可达（ECONNREFUSED）→ Frontend 调用 Ad 服务失败 → Frontend 代码未捕获该依赖失败或处理返回的空数据 → 抛出 TypeError → 用户请求返回 500 错误。
+ 数据完整性自评：明确数据缺失：无。核心链路 Trace、Pod 指标、K8s 事件均已覆盖，部分 Pod 的拓扑查询（如 obs_117, obs_124）未执行，但不影响根因判定。
+ 处置建议：
    - 紧急修复：检查 ad 服务所有 Pod 状态，确保全部 Ready。若有异常 Pod，立即重启或回滚 ad 服务 deployment。
    - 代码优化：修复 frontend 服务代码，增加对 ad 服务返回数据的判空处理或添加 try-catch 块，防止单点依赖失败导致整个页面崩溃（实现优雅降级）。
    - 配置检查：审查 ad 服务的滚动更新策略（maxSurge、maxUnavailable）及健康探针（readinessProbe）配置，确保更新期间服务可用性。



<font style="color:rgb(44, 62, 80);background-color:rgb(250, 251, 252);">[1] </font>[https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code/](https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code/)

<font style="color:rgb(44, 62, 80);background-color:rgb(250, 251, 252);">[2] </font>[https://arxiv.org/abs/2604.22750](https://arxiv.org/abs/2604.22750)

<font style="color:rgb(44, 62, 80);background-color:rgb(250, 251, 252);">[3] </font>[https://www.vantage.sh/blog/agentic-coding-costs](https://www.vantage.sh/blog/agentic-coding-costs)

<font style="color:rgb(44, 62, 80);background-color:rgb(250, 251, 252);">[4]</font>[https://www.reddit.com/r/ClaudeAI/comments/1roxoo5/i_tracked_100m_tokens_of_coding_with_claude_code/](https://www.reddit.com/r/ClaudeAI/comments/1roxoo5/i_tracked_100m_tokens_of_coding_with_claude_code/)

[5] [https://arxiv.org/abs/2603.27277](https://arxiv.org/abs/2603.27277)


