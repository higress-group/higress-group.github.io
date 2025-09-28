---
title: "解读阿里云发布的《AI 原生应用架构白皮书》"
description: "解读阿里云发布的《AI 原生应用架构白皮书》"
date: "2025-09-28"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

**<font style="color:rgba(0, 0, 0, 0.9);">作者： 彦林、麻芃、望宸</font>**

<font style="color:rgba(0, 0, 0, 0.9);">阿里云在云栖大会重磅发布了《AI 原生应用架构白皮书》，该</font><font style="color:rgba(0, 0, 0, 0.9);">白皮书</font>**<font style="color:rgba(0, 0, 0, 0.9);">覆盖 AI 原生应用的 11 大关键要素，获得业界 15 位专家联名推荐，来自 40 多位一线工程师实践心得，全书合计超 20w 字，分为 11 章</font>**<font style="color:rgba(0, 0, 0, 0.9);">，</font><font style="color:rgba(0, 0, 0, 0.9);">全面、系统地解构 AI 原生应用架构，包含了 AI 原生应用的 11 大关键要素，模型、框架、提示词、RAG、记忆、工具、网关、运行时、可观测、评估和安全。本文整理自阿里云智能技术专家李艳林在云栖大会现场的解读。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01ywoDI421gT6B8O8SL_!!6000000007014-54-tps-1080-555.apng)



> [**点击链接即可下载《AI 原生应用架构白皮书》**](https://developer.aliyun.com/ebook/8479)
>

# 为什么要写《AI 原生应用架构白皮书》？
<font style="color:rgba(0, 0, 0, 0.9);">ChatGPT 迈过智能拐点后，大模型按照 Scaling Law 法则不断刷新智能边界；Deepseek 迈过效果/成本拐点后，AI 应用创新加速。</font>

<font style="color:rgba(0, 0, 0, 0.9);">应用 从以前</font>**<font style="color:rgba(0, 0, 0, 0.9);">工具</font>**<font style="color:rgba(0, 0, 0, 0.9);">升级为</font>**<font style="color:rgba(0, 0, 0, 0.9);">助手</font>**<font style="color:rgba(0, 0, 0, 0.9);">，Agent 通过工具和记忆打通模型孤岛，智能化水平提升到 L3 水平，逐渐接管数字世界；AI 工程师、数字员工、DeepResearch 等开始爆发。</font>

<font style="color:rgba(0, 0, 0, 0.9);">当然改变不止与此，有了工具就相当于有了眼耳鼻舌身，模型可以感知和影响物理世界，智能驾驶、具身智能等逐渐走进大众生活。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01fo3znQ1ytnmXvYJF5_!!6000000006637-54-tps-1080-582.apng)

<font style="color:rgba(0, 0, 0, 0.9);">从技术成熟度看，目前 AI Agent 迈过炒作周期峰值，进入大规模探索落地阶段。</font>

<font style="color:rgba(0, 0, 0, 0.9);">从技术架构上看，从早期提示词工程构建简单 Agent，到通过 DIFY 低代码平台构建复杂工作流，再到 Manus 零代码平台解决复杂任务；AI 原生应用平台逐步形成雏形。</font>

<font style="color:rgba(0, 0, 0, 0.9);">因此我们在这 AI 应用爆发，AI 原生应用技术逐渐成型过程中，推出《AI 原生应用架构白皮书》，</font>**<font style="color:rgba(0, 0, 0, 0.9);">期望以抛砖引玉的姿态，为 AI 原生应用的标准化、体系化发展提供参考框架，加速 AI 应用的发生。</font>**

![](https://img.alicdn.com/imgextra/i1/O1CN01mqklXn1gIYUJsd5lp_!!6000000004119-54-tps-1080-580.apng)

# AI 原生应用架构主要发生了哪些深刻的变革？
<font style="color:rgba(0, 0, 0, 0.9);">我们主要洞察到下面几个主要方面：</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">应用形态：以前构建的是</font>**<font style="color:rgba(0, 0, 0, 0.9);">数字化</font>**<font style="color:rgba(0, 0, 0, 0.9);">工具，现在构建的是</font>**<font style="color:rgba(0, 0, 0, 0.9);">智能化</font>**<font style="color:rgba(0, 0, 0, 0.9);">助手。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">应用实现：以前是人通过逻辑思维，采用面对对象语言编程实现；现在是人通过结构化思维，采用面对自然语言实现。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">应用编排：以前是写复杂的代码逻辑和策略；现在是下沉到模型的推理过程。</font>

<font style="color:rgba(0, 0, 0, 0.9);">由此可见，AI 原生应用架构是一次</font>**<font style="color:rgba(0, 0, 0, 0.9);">智能化范式升级</font>**<font style="color:rgba(0, 0, 0, 0.9);">，让机器学会了思考。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01j2SQ181C1fPWki0oZ_!!6000000000021-54-tps-1080-592.apng)

# 什么是 AI 原生应用架构？
**<font style="color:rgba(0, 0, 0, 0.9);">AI 原生应用</font>**<font style="color:rgba(0, 0, 0, 0.9);">是以大模型为认知基础，以 Agent 为编排和执行单元，以数据作为决策和个性化基础，通过工具感知和执行的智能应用。</font>

<font style="color:rgba(0, 0, 0, 0.9);">AI 原生应用模式按照编排方式和单多个应用可以划分四个象限。早期简单智能体+提示词工程快速构建一个单智能体，后来大家通过 Worflow 编排业务流程解决相对复杂重复的任务。近期大家开始构建能够泛化解决复杂任务的多智能体。</font>

<font style="color:rgba(0, 0, 0, 0.9);">我们判断未来</font>**<font style="color:rgba(0, 0, 0, 0.9);">基于 LLM 编排的多智能体</font>**<font style="color:rgba(0, 0, 0, 0.9);">会是行业主流演进方向。主要有以下几个原因：</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">随着模型能力不断提升，需要业务代码编排的 Workflow 逐渐用 LLM 编排可以替代，这个会持续发生。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">由于组织架构决定软件架构，不同组织角色、权限、数据都有一定边界；Agent 上下文有上限，且上下文太多影响注意力；随着智能体大规模落地，业务复杂度提升，需要拆分降低复杂度，提升协作效率。可见未来单 Agent 往多 Agent 演进也是一个必然趋势。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01OuFt0A1jYX9YwwvU3_!!6000000004560-54-tps-1080-570.apng)

<font style="color:rgba(0, 0, 0, 0.9);">当大家落地 AI 原生应用架构的时候不禁会问和云原生应用架构关系是什么？他们区别和联系是什么？</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">AI 原生应用架构是云原生架构的超集，是云原生架构从身体到大脑的延伸。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">左边是云原生架构，解决数字化问题，构建各种工具，人机交互通过人驱动工具完成任务。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">右边是 AI 原生架构，解决智能化问题，构建各种助手，人机交互通过多模态感知自主完成任务。</font>

<font style="color:rgba(0, 0, 0, 0.9);">通过 AI Agent 完成 AI 原生应用架构的模型大脑和云原生架构的工具手脚协同。</font>

<font style="color:rgba(0, 0, 0, 0.9);">当然随着业务复杂度，智能化程度不断提升，多 Agent 架构和微服务架构有更多相通之处，两边的链接也在加强。未来我们判断每个应用后面都是大量智能体和工具协作完成的，云原生和 AI 原生架构双轮驱动高速发展。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01wa8YCc1fcsRkOccdb_!!6000000004028-54-tps-1080-560.apng)

# 如何构建有竞争力的 AI 原生应用？
<font style="color:rgba(0, 0, 0, 0.9);">我们基于服务云上客户的实践，提供一些解题思路：</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">场景上大家要意识到 AI 更多是效率革命，未来多模态会陆续有场景和交互变革产生。大家需要在业务场景中找到高频&结构强（Coding），轻决策&重执行（外包）场景重构业务流程，提升整体效率。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">当大家突破了场景，竞争对手一定会跟上来，最终我们 AI 应用壁垒会在自己的数据上面，如何私域数据，沉淀数据，优化数据，就是 AI 应用的护城河。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">最后还是拼智价比。找到符合自己场景的模型，做一些强化学习，微调，训练垂类模型，巩固行业地位。</font>

![](https://img.alicdn.com/imgextra/i2/O1CN01FWkslY1J53eaXhPIv_!!6000000000976-54-tps-1080-586.apng)

<font style="color:rgba(0, 0, 0, 0.9);">私域数据如此重要，那我们在 AI 原生应用开发中如何构建自己的数据飞轮呢？</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">首先沉淀好客户数据，作为长短期记忆，个性化的解决客户问题。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">其次行业数据可演进，作为知识库长期迭代，解决专业化问题。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">再次评估数据可量化，作为评估打分机制，度量智能化水平。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">最后反馈数据可持续，通过正负反馈最强化学习，持续迭代自进化。</font>

<font style="color:rgba(0, 0, 0, 0.9);">不断用左边数据优化右边数据，有右边数据不断提升智能化水平，从而完成数据飞轮，为客户提供个性化、专业、持续优化的智能助手。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01iPk76i23mXa7Aq3md_!!6000000007298-54-tps-1080-618.apng)

<font style="color:rgba(0, 0, 0, 0.9);">那构建 AI 应用架构的会遇到诸多挑战。以下按照 DevOps 两个阶段重点分析。</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">在 Dev 阶段，主要因为大模型黑盒，不可控，幻觉，导致要到生产可用效果需要几个月时间。优化调试评估代价都非常大，导致开发业务效果和研发效率问题。</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">在 Ops 阶段，主要因为大模型推理慢，推理容易超时不稳定，更容易被攻击，输出内容不可控有舆情风险，业务规模上来 Token 成本较高，维护期间黑盒排查问题更难。</font>

![](https://img.alicdn.com/imgextra/i2/O1CN01MtBr1e1VXFQ2Lme0S_!!6000000002662-54-tps-1080-535.apng)

<font style="color:rgba(0, 0, 0, 0.9);">为了解决上面问题，我们需要构建一个简单、易用、专业的开发框架，提升研发效率。构建一个以数据为中心的 Agent 开发平台，通过 调试、观测、评估一体化解决 Dev 阶段调试效率和效果问题。构建 AI 原生应用开发平台（通过 AI 网关解决多模型超时重试、Failover、灰度、Token 流控和额度管理提升模型稳定性；通过 AI 网关接入安全护栏无侵入解决安全合规问题；通过 AI 网关语义缓存，智能路由，AI 消息解决成本问题；通过 Serverless平台解决极致弹性问题；通过端到端可观测&评估体系解决排查难，效果追踪问题）解决 Ops 阶段难以维护问题。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01KbtaQZ1iBLU7TY6Tj_!!6000000004374-54-tps-1080-694.apng)

# 展望未来
**<font style="color:rgba(0, 0, 0, 0.9);">每一次技术革命，都是人机关系的深刻变革。</font>**<font style="color:rgba(0, 0, 0, 0.9);">这次 AI 原生技术革命更多是让机器会思考；让人类从事更高级别的愿景、规则制定；逐渐将简单重复的劳动卸载到数字人、机器人去执行。</font>

<font style="color:rgba(0, 0, 0, 0.9);">新的碳硅共生的人机关系下，人机交互也在发生深刻变革，从早期的 GUI，到 VUI，到最近的 GenUI，多模态交互，脑机接口，人机交互变得越来越简单，更符合人的习惯。</font>

<font style="color:rgba(0, 0, 0, 0.9);">当然新型的 </font><font style="color:rgba(0, 0, 0, 0.9);">AI</font><font style="color:rgba(0, 0, 0, 0.9);"> 原生应用架构需要新的计算</font><font style="color:rgba(0, 0, 0, 0.9);">/</font><font style="color:rgba(0, 0, 0, 0.9);">存储</font><font style="color:rgba(0, 0, 0, 0.9);">/</font><font style="color:rgba(0, 0, 0, 0.9);">网络架构去支撑，以便有更强的智能化水平，更高的效率。</font>

+ **<font style="color:rgba(0, 0, 0, 0.9);">生产力：</font>**<font style="color:rgba(0, 0, 0, 0.9);">计算从 LLM 到多模态/WA 延伸，大量简单任务可以从大模型切到小模型大模型降低成本；芯片也从 GPU 往 XPU 异构计算延伸。</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);">生产资料：</font>**<font style="color:rgba(0, 0, 0, 0.9);">从早期提示词工程升级到现在上下文工程，未来长短期记忆和强化学习逐渐发挥关键作用。</font>
+ **<font style="color:rgba(0, 0, 0, 0.9);">生产关系：</font>**<font style="color:rgba(0, 0, 0, 0.9);">L2 到 L3 智能化提升非常关键因素就是模型能够使用各种工具协同自主完成任务。有没有工具，有 1 个工具还是多个工具，有单个 Agent 还是多个 Agent 协作，在智能化水平上会有显著差距，相信未来 Scaling Law 法则在应用层依然有效。因此我们需要 AI 开放平台建立 Agent 和 MCP 协同，建立 Agent 与 Agent 协同；打通模型孤岛，让模型高效使用工具，让智能化和效率发挥到极致。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01poXbEI1yvAyCnFFht_!!6000000006640-54-tps-1080-556.apng)

<font style="color:rgba(0, 0, 0, 0.9);">AI 平权之后，每个人和组织能力的到延伸，以前只有少部分人可以做跨领域链接和协同，现在可以让更多的人和角色进行连接，提升协同效率，提升创新速度，以便在市场竞争中保持先发优势。</font>

<font style="color:rgba(0, 0, 0, 0.9);">AI 作为创新的关键变量，需要一把手从上到下作为一号工程战略推进，组建一支敏捷、快速成长的团队快速突破创新，带动整个组织做 AI 变革，在 AI 时代重新找到生态位，构建行业壁垒。</font>

<font style="color:rgba(0, 0, 0, 0.9);">对于我们每个人而言，之前会使用和创造互联网/移动互联网应用和工具的人类已经拿到了一波时代红利，相信掌握 AI Agent/创造 AI Agent 的 AI 原生代能够拿到这波千载难逢的时代红利，引爆中国创造～</font>

![](https://img.alicdn.com/imgextra/i3/O1CN018458uU1KyJ2w8I8xi_!!6000000001232-54-tps-1080-677.apng)


