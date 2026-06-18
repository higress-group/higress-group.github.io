---
title: "企业智能体的下半场，如何让智能体越用越聪明？"
description: "企业智能体的下半场，如何让智能体越用越聪明？"
date: "2026-06-18"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：望宸&涯海

当我们谈 Agent 进化的时候，通常涵盖两类场景。一种是员工办公场景，通过 Coding Agent 或通用 Agent 的记忆、协作风格、用户画像等能力，让 Agent 越用越聪明、越用越懂用户。另一种是企业的业务场景，比如企业对外提供的客服 Agent，对内提供智能分析的 Data Agent。关于前者，Anthropic 发布的 Economic Index 给过一个有意思的对照，使用 Claude 6 个月以上的老用户，对话成功率比新用户高 3–5 个百分点。可见，Coding Agent、通用 Agent 已经在加速进化，用户越用越喜欢。而后者，仍处于各个企业手搓观测、评估、优化，各自积累业务实践经验的阶段。本文要聊的是后者。



## 一、企业手搓 Agent 进化飞轮的现状
进化飞轮通常分为数据采集、数据集构建、效果评估、进化资产沉淀4个步骤。虽然模型和 Agent 进化飞轮的流水线类似，但影响 Agent 行为的因素更多。



模型任务，是指一次模型的调用，包括对模型的输入和模型的输出。Agent 任务，则是一条带拓扑结构的线，甚至是一张网络图，因为除了模型调用，还有检索、规划、工具调用、浏览器访问、中间状态、反思和决策、回退，甚至还有多个并行子任务等。



由于影响 Agent 行为的因素更多，导致进化飞轮带来的新工程难点，是以往的 LLM-as-Judge 的范式所难以应对的。



### 数据采集难：单点变拓扑，schema 不再稳定
LLM-as-Judge 的范式采集的是 (prompt, completion) 二元组，schema 干净，存日志就够。Agent 行为评估要采集的是一条 trajectory（执行轨迹）：每一步的输入输出形状都不一样。检索返回 chunk 列表，工具返回结构化 JSON，浏览器返回 DOM 片段，模型返回 token 流，要把这些异构事件按时序和因果关系串起来，不丢中间状态、不丢父子调用关系，再加上 token 用量、延迟、错误码，存储和埋点成本是 LLM-as-Judge 的几十倍。另外，OpenTelemetry 的 GenAI semconv 还在草案阶段，目前没有事实标准，企业基本都在自己造轮子。



### 数据集构建难，一条轨迹是不是好的数据样本，定义更难
LLM-as-Judge 从日志里挑 prompt-completion 对，按 token 长度、置信度、人工反馈一筛就行。trajectory（执行轨迹），包括

+ 规划：它怎么把任务拆成子目标的
+ 检索：grep 了哪些文件、搜了哪些关键词
+ 工具调用：每一次 git / grep / 测试运行的入参、出参、耗时
+ 中间状态：每一步执行完，它对任务的理解更新了什么
+ 反思 / 决策分支：它在哪一步改了主意，为什么改
+ 模型调用：每次调 LLM 的 prompt、response、token 消耗
+ 最终输出：那个 diff 提交



把这一整串顺序串起来，就是这次任务的 Trajectory。



但是"这条轨迹是好样本吗"，人肉很难定义。例如，最终结果对，但中间走了三个错误工具。最终结果错，但前 5 步推理是对的，这 5 步要不要单独抽出来当训练信号？trajectory 里到包含了返回的真实业务数据（订单、客户名、内部接口响应），脱敏不是字符串替换那么简单，要做结构化脱敏才能进数据集等等。



### 效果评估难，单点打分失效，需要分层
对于 LLM-as-Judge，都是对一个点打分。Agent 时代要分三层进行评估：step-level（每一步的工具调用是否正确）、trajectory-level（整条路径是否合理，有没有绕路、回退、死循环）、outcome-level（最终交付是否满足要求）。



三层结论可能完全不一致。



### 沉淀进化资产难，经验很难被标准化
模型的资产形态非常清楚：SFT 数据、DPO pair、LoRA 权重，行业有共识，工具链成熟。



Agent 时代的资产形态目前还在分化期，可以回流成 prompt 改进，可以构造成 few-shot 经验库，可以做成 episodic memory，还可以抽成可复用的 skill 或子流程。每一种形态消化 trajectory 的方式都不一样，也都没有像模型权重那样的统一容器。这导致企业即使把前三步做完，最后一步资产怎么落、落到哪、谁来消费，往往还是个待定项。



因此，Agent 上线了、服务的用户越来越多了，但企业拥有的可进化资产可能并没有变多。这已经成为企业智能体进化的真实状态。



## 二、阿里云 AgentLoop 的实践
AgentLoop 是阿里云推出的面向企业级智能体的一站式自进化平台，提供 Agent 全栈观测与审计、Agent 评估与实验、Agent 资产管理与持续优化等核心能力，帮助企业构建智能体进化数据飞轮。



针对企业智能体构建进化飞轮的难点，AgentLoop 的应对方案是：



### 第一环：全栈观测分析：完整的 Trajectory 执行轨迹
AgentLoop 通过 LoongSuite 的开源自动插桩框架，将采集对象从二元组升级成完整的 Trajectory（执行轨迹）。

![](https://img.alicdn.com/imgextra/i1/O1CN01OZ7c1s1Y4nin1NSzn_!!6000000003006-2-tps-2852-1572.png)

LoongSuite 融合了三层语义规范，OTel GenAI 社区标准（含阿里贡献的 STEP / MCP span 扩展）、AgentLoop 产品侧数据契约、以及采集层自有扩展（session / turn / step / cost 专属字段），总计覆盖 55 个 GenAI 语义字段。在第三方源码逐行对比中，LoongSuite 有效字段覆盖率 84%，竞品最高仅 51%。



LoongSuite 采集到的 Trajectory 提供四类交叉印证的诊断视图：调用树（逐层下钻 Span 耗时占比）、推理轨迹（还原 ReAct 思考-工具-观察序列，检测无效循环）、时序线（区分串行/并行与阻塞等待）、链路拓扑图（还原全局调用关系）。

![](https://img.alicdn.com/imgextra/i4/O1CN01RHDsQv26dmuglEGG7_!!6000000007685-2-tps-2862-1584.png)

一条 23 秒的慢请求，通过这四层视图交叉定位，可以精确到"某一轮 LLM 多步冗余循环调用"这个粒度。



### 第二环：Agent Ontology + Pipeline，让观测数据图谱化，自动构建高质量数据集
只有 Trajectory 还不够，不然采集到的观测数据仍然是孤立的元数据，是一条条互不关联的 span。



AgentLoop 在 Trajectory 之上做了第二件事：基于 UModel 构建面向 Agent 实体关系的拓扑，称为 Agent Ontology。它的作用是把采集到的观测数据图谱化：自动发现 Agent → Tool → Model 之间的实体关系拓扑，打破数据孤岛，实现确定性关联与推理分析。



有了 Agent Ontology，每一条 Trajectory 就是一张有拓扑结构的关系图。哪个 Agent 调了哪些工具、哪些工具背后调了哪个模型、哪一步是关键决策节点、哪一步只是辅助。运维和算法团队能用 Agent 视角看问题，不需要在扁平日志里大海捞针。

![](https://img.alicdn.com/imgextra/i3/O1CN01wz17qs1i1jDp7JRRp_!!6000000004353-2-tps-2824-1400.png)

在 Ontology 之上，AgentLoop 再叠加了一条自动化 Pipeline：Trace2Dataset。它的逻辑是：线上全量运行时数据（Trajectory），通过 Pipeline 编排数据源接入 → 数据降维（过滤 / 去重 / 采样） → 特征提取（意图 / 难度 / 场景标签） → AI 审核与改写 → 写入目标数据集，从而自动构建成 Golden Dataset（高质量经典样本）和 BadCase Dataset（典型失败案例）。



整体上，Pipeline 可节省 90% 以上的 Token 消耗与时间成本。



### 第三环：内置标准化评估器，准确评价每个 Agent 的真实表现
数据采集了、数据集也构建了，下一个问题是做评估。



Meta AI 与 KAUST 团队在[《Agent-as-a-Judge: Evaluate Agents with Agents》](https://arxiv.org/abs/2410.10934)论文中，构造了 DevAI 基准，55 个真实 AI 开发任务，365 条层级化用户需求，要求评估方不仅看最终交付物，还要核对中间每一步是否满足结构化需求。



论文在同一基准上同时跑了人类专家、LLM-as-a-Judge、Agent-as-a-Judge 三种评估方式，结果是与人类专家评估的一致率，从 LLM-Judge 的约 65% 提升到了 Agent-Judge 的 90%。但是该报告也提到，美国人工评估的成本约 86 美元/小时，远高于 LLM-as-a-Judge、Agent-as-a-Judge。Agent-as-a-Judge 评估成本仅为人工的 1/30。

![](https://img.alicdn.com/imgextra/i4/O1CN01ilxy7D1QRgaMRE0Pl_!!6000000001973-2-tps-2832-1604.png)



因此 AgentLoop 采用了 Agent-as-a-Judge 评估器，可以理解为将 Agent-as-a-Judge 这一评估范式产品化了。评估器本身就是一个 Agent，基于大模型做规划、调用工具、回放轨迹、并基于中间状态做多步推理来做出判断。



AgentLoop 提供了13个标准评估器，包括 Agent 任务完成度、Agent 回答证据支持度、Agent 工具调用成功率等，并支持自定义模式。

![](https://img.alicdn.com/imgextra/i3/O1CN014bkGG51k7nhkuKMtf_!!6000000004637-2-tps-2832-1484.png)



这些评估器支持：

+ 问答准确性：多轮事实核验 + 幻觉检测
+ Skill 执行质量：工具调用链验证与结果校验
+ 意图达成度：复杂任务目标满足评估
+ 安全合规：越权 / 敏感信息 / 有害内容检测
+ 上下文一致性：跨轮次记忆与状态追踪
+ 业务自定义：用户可通过自定义 Prompt + Skill + Tool 构建面向特定业务场景的评估器



总的来看，AgentLoop 通过全量的自动化数据采集、Agent Ontology、自动化构建数据集的 Pipeline、Agent-as-a-Judge 范式的评估 Agent，实现了持续评估，是进化飞轮的基础设施。



### 第四环：记忆库与经验库，智能体进化的上下文工程
但进化飞轮中，全栈数据采集、拓扑认知、评估本质只是一个对 Agent 效果的打分器，通过打分，将智能体的进化资产去提升智能体的效果，才是构建飞轮的最终目的。



AgentLoop 把这个问题拆成两个路径：



路径一：数据驱动的 Agent 调优。 从评估结果中自动收集 BadCase → 失败模式聚类 → Agent 端到端改写（Prompt / Skill / 工具链协同改写） → 回归测试验证提升。这是"快速拉升基线"的路径，见效速度快，但依赖人工迭代节奏。

![](https://img.alicdn.com/imgextra/i4/O1CN011HjUGz1HAR7w5Lhql_!!6000000000717-2-tps-2822-1476.png)



路径二：Trajectory 驱动的自进化闭环。Agent 运行时自动记录完整调用轨迹与上下文、从成功/失败 Trajectory 中自动提取可复用经验规则、经验规则按需注入 Agent 上下文（Just-in-Time 加载）、评估注入后效果，持续迭代优化经验库。

![](https://img.alicdn.com/imgextra/i2/O1CN018QJQAd24zeafce0P5_!!6000000007462-2-tps-2854-1554.png)



要将以上两个路径产品化，AgentLoop 提供记忆库与经验库这两个独立组件。



其中，记忆库覆盖事实、情节、摘要和自定义四种策略，把用户偏好和历史上下文沉淀到一个长期可检索层中，下一次遇到类似请求时，会自动注入。经验库则聚焦成功模式的提取与复用，通过和各行业的业务专家共建，泛化成经验规则，归纳为长期记忆或 Skill，当相似场景再次出现时，会自动激活。



AgentLoop 的记忆库和经验库，参考了业内在自进化领域的成功实践，包括[ Hermes 的轨迹自我反思](https://hermes-agent.nousresearch.com/docs/)、[DreamGym 合成经验回放的 RL 训练框架](https://www.emergentmind.com/papers/2511.03773)**<font style="color:#DF2A3F;"></font>**、[Reflexion 的 episodic reflection（失败经验回灌机制）](https://arxiv.org/abs/2303.11366)。



因此，全栈观测采集完整 Trajectory、Agent Ontology 让数据图谱化、Pipeline 自动构建数据集、标准化评估器准确评价真实表现、记忆库/经验库把好的经验反哺回 Agent 上下文。这就构成了一个自运转的进化飞轮。



## 三、进化飞轮，是企业智能体下半场的发令枪
由于进化飞轮基础设施还不成熟，评估结果转化为智能体进化资产依赖行业经验，导致大部分企业智能体出现上线即落后的窘境，难以实现让智能体越用越聪明的完美预期。



LangChain 的《State of Agent Engineering》中，发现有 22.8% 的生产团队完全不做评估，离线评估覆盖只有 52.4%，线上评估更是只有 37.3%，32% 的团队把"质量"列为生产环境的头号障碍。Databricks 的《State of AI Agents》里给出了一组数据，接入评估的企业数量仅有接入治理的企业数量的17%。



大部分企业面临的现实困境是，缺少进化飞轮的基础设施就不敢放量，无法放量就没有观测数据，没有数据就无法进化的恶性循环中。



阿里云 AgentLoop 希望通过完善的进化飞轮基础设施，携手企业共同开启企业智能体的下半场。AgentLoop 正在邀测期，欢迎加入用户服务钉群(群号：168330022816)，申请邀测资格。




