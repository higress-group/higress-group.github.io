---
title: "Agent 构建变轻、Agent 架构变薄，什么正在变厚？"
description: "Agent 构建变轻、Agent 架构变薄，什么正在变厚？"
date: "2026-04-16"
category: "article"
keywords: ["Higress"]
authors: "王晨"
---

作者：望宸

### 一、三条龙，三副缰绳
之前我们聊过 [Harness Engineering（驾驭工程）](https://mp.weixin.qq.com/s/-JHzUKtOU8-v5NZW-Uph6A)。你的客厅里来了一条龙，得给它配上一套完整的驾驭系统：缰绳、马鞍、护具。其实自从 Agent 出现后，驾驭工程就一直存在。只是 OpenClaw 的出现，促使 AI 主权从模型厂商转移到用户侧，我们才对驾驭工程有了更深刻的体会，从而引发业界共鸣。



但不同时代的 Agent 形态，我们所需要的缰绳并不一样。



以 Manus、OpenClaw 和 Claude Managed Agent 三种主流的 Agent 为例，它们都遵循三层结构，底层是基础模型，中间是 Agent 能力构建层，顶层是用户交互界面，但在"谁来构建中间层"和"中间层有多厚"这两个问题上，三者给出了不同的答案。



### 二、三种 Agent 形态，三种产品设计哲学
![](https://i-blog.csdnimg.cn/img_convert/92ae8da15e7939169883caaaf40f23ab.png)


**Manus：交钥匙式的黑盒 Agent 方案。** 

第二层 Agent 能力层（记忆、系统提示、知识库、Workflow、MCP 等）由 Manus 负责调优和控制。用户拿到的是一个成品，只拥有第三层浏览器界面的使用权。就好比我们买了一台品牌整车，发动机、变速箱、悬挂系统都是厂商标定好的，只管踩油门、控制方向盘。



**OpenClaw：开放骨架，用户负责优化 Agent 效果。**

第二层 Agent 能力层被解构为一组文本协议：agent.md 定义行为、soul.md 定义性格、User.MD 描述用户画像，再加上 Heartbeat 心跳机制、Skills 技能和 Sessions 会话管理。这些全部归用户所有，通过自然语言“调教”龙虾，让他更懂你，能做更多事。第三层的交互界面从单一浏览器扩展到 Discord、飞书、钉钉等 IM 平台。就好比我们拿到了一辆可改装的赛车底盘，引擎是厂商的，但悬挂、空力套件、座椅全由我们自己装配。



**Claude Managed Agent：托管共建，按需定制。** 

第二层 Agent 能力层被极简化为三个核心原语：Environment（环境）、Session（会话）和 Events（事件）。与 OpenClaw 不同的是，这个极简的第二层由 Anthropic 基于用户需求来定制化构建。第三层同样支持浏览器和 IM 多端。好比我们请了一位顶级的赛车工程团队，帮我们把一切调到最佳状态。

### 三、Agent 的构建在变轻，Agent 的架构在变薄
![](https://i-blog.csdnimg.cn/img_convert/3a4b95d5d61f6cb6ebec9f8330217027.png)

**Manus 的第二层是一个完整的能力栈。**



记忆系统、系统提示词、知识库、Workflow 编排、MCP 工具协议……它几乎把让 AI 可靠工作所需要的一切都包裹在了 Agent 能力层。



这种"厚 Agent"策略在早期模型不够智能的情况下，完全合理。例如我们在[这里](https://mp.weixin.qq.com/s/-JHzUKtOU8-v5NZW-Uph6A)提到的“技术债指数级放大"和"上下文腐烂"问题，根源都在于模型在面对泛化需求的自主能力有限，需要厚重的 Harness 来弥补。



**OpenClaw 的第二层开始收敛。** 



从五六种不同类型的能力模块（记忆、知识库、Workflow……），收敛为一组结构化的文本协议（Agent.md、Soul.md、User.md），再通过热插拔的 Skills，就能构建出一个高度定制化的 Agent。我们甚至可以把"品味"编码为自动化规则来约束。因此，Agent 的行为复杂度被降维了，从工程复杂度降到了文本复杂度。



这背后反应的是我们对模型和 Agent 的认知在提升：与其设计复杂的编排系统来弥补模型的不足，不如设计简洁的约束环境来发挥模型的能力。



**Claude Managed Agent 则是把第二层压缩到了极致。** 



只剩三个核心原语：Environment 定义执行环境，Session 管理会话状态，Events 处理事件驱动。没有显式的记忆模块、没有知识库、没有 Workflow 编排。这些能力都被"下沉"到了模型层，在一个极简的 Agent 能力框架内自主规划、推理和执行。

![](https://i-blog.csdnimg.cn/img_convert/1e282508964b9fe20bc7dddd26f7fb37.png)
_Claude Managed Agent 用户界面_



### 四、多 Agent 协作在变厚
轻和薄只是故事的一半，Agent 与 Agent 之间的协作，正在迅速变厚。



**复杂任务推动 Agent Team 的涌现。** 



我们交给 Agent 的任务正在从"输出一张图片"升级为["帮我诊断一个线上故障"](https://mp.weixin.qq.com/s/TMZw7Ibx9CyenaqEvs2vnQ)。复杂和长程任务，单体 Agent 越来越力不从心，例如出现上下文会腐烂、Skills 污染等情况。多 Agent 既能对上下文、技能起到隔离的作用，还能让主 Agent 负责规划，子 Agent 在隔离的上下文中执行具体任务，各司其职。



例如 HiClaw 采用的 Manager-Workers 架构就是典型的 Agent Team 范式，但多智能体协作的范式没有银弹，取决于场景。下方列举了 Manager-Worker（管理者-执行者）、Sequential / Pipeline（顺序链式）、Peer-to-Peer / Decentralized（去中心化对等协作），三种常见的协作范式。

![](https://i-blog.csdnimg.cn/img_convert/028f6cdb9ad1300ffadd49de85559fde.png)



**Manager-Worker（管理者-执行者）**

这种范式的核心能力是"分而治之"，最擅长的是那些任务可以被明确拆分为独立子任务、且最终需要汇总的场景。



深度研究与报告生成是最典型的场景。比如你要做一份行业竞品分析报告，Manager 把任务拆成"调研公司A的产品线"、"调研公司B的财务数据"、"调研公司C的技术栈"，三个 Worker 并行去做，最后 Manager 汇总成一份完整报告。每个子任务之间几乎没有依赖关系，并行效率很高。



复杂软件项目的任务分配也是常见用法。Manager 理解了整体需求后，把前端、后端、数据库设计分别交给不同的专家 Agent。不过这里有个微妙之处：如果子任务之间有强依赖（比如后端接口定义影响前端实现），纯 Manager-Worker 就会吃力，需要 Manager 做更多的协调。



简单说，只要你的任务满足"可拆分、子任务独立、需要汇总"这三个条件，Manager-Worker 就是首选。



**Sequential / Pipeline（顺序链式）**

Pipeline 擅长的是有明确阶段性、后一步依赖前一步输出的任务。它的思维模型就是流水线：原料进去，成品出来，每一站做一道加工。



数据分析管道是经典场景。数据清洗 → 特征工程 → 模型推理 → 结果可视化，每一步都建立在前一步的基础上，ETL 流程天然就是 Pipeline 结构。还有代码生成与测试场景。需求理解 → 代码编写 → 单元测试生成 → 代码审查 → 修复。



每个 Agent 专注一个环节，职责边界非常清楚，出了问题也容易定位是哪个环节的 Agent 表现不佳。Pipeline 的核心优势是可解释性和可调试性。我们能清楚地看到每一步的中间结果。但它的局限也很明显：一旦某个环节需要回溯修改前面的输出，纯线性结构就很尴尬，需要加入反馈回路才能处理。



**Peer-to-Peer / Decentralized（去中心化对等协作）**

P2P 范式的独特之处在于没有中心控制者，每个 Agent 都是自主的，它们通过协商、广播、共享信息来协作。这种架构最擅长的是那些没有预定义流程、需要动态涌现协作模式的场景。



社会模拟与仿真是 P2P 最经典的应用。比如 [Generative Agents](https://github.com/joonspk-research/generative_agents)（斯坦福"AI小镇"实验）。25个 Agent 各自有自己的记忆、目标和日程，它们在虚拟环境中自主行动、互相对话、形成关系。没有任何 Manager 在指挥谁该做什么，所有的社会行为都是从对等交互中涌现出来的。



另外，多方谈判与博弈也天然适合P2P 范式。比如模拟一场商业谈判，买方、卖方、中介方各自有自己的利益和策略，它们需要互相试探、出价、让步。这种场景不存在一个正确的中心调度逻辑，博弈结果取决于各方的动态交互。



自组织的工作流优化也是一个前沿方向。多个 Agent 在执行任务时发现瓶颈，自主调整分工——比如某个 Agent 发现自己任务轻，主动从负载重的 Agent 那里分担工作。这种动态负载均衡在 Manager-Worker 架构中需要 Manager 来做，但在 P2P 中可以自发实现。



但是 P2P 的代价是协调复杂度高、行为难以预测。在生产环境中，纯 P2P 通常需要配合良好的通信协议和终止条件设计，否则容易陷入无限循环或信息爆炸。



**群体智能已在从实验走向应用，从另一维度推动 Agent Team 的共鸣。** 



当单个 Agent 变薄到足够轻量，养一群 Agents 的成本就变得可以接受。这催生了一种全新的玩法：群体智能。



HiClaw 的[700万豪车汽车设计](https://github.com/agentscope-ai/HiClaw/issues/405)就是一个典型群体智能的案例。多个不同角色的 Agent 进行 100 轮讨论，输出综合结论。再例如最近爆火的 [AI Hedge Fund](https://github.com/virattt/ai-hedge-fund)。该项目构建一个了19位传奇投资人组成的 Agent 军团，包括：巴菲特 Agent 专注价值投资和护城河分析，芒格 Agent 擅长逆向思维和跨学科模型，木头姐 Agent 聚焦颠覆式创新和长期科技趋势...

![](https://i-blog.csdnimg.cn/img_convert/e05ff4f1eb55f1b87250bcba3c5f6867.png)

当多个风格迥异的投资大师 Agent 组成军团、相互碰撞时，涌现出的洞察就不再是任何单一 Agent 能达到的。这就是群体智能的价值：个体效率的提升是线性的，而群体智能的涌现是指数级的。



Agent Team 恰好和互联网的发展逻辑一致。终端设备从大型机变成了手机，越来越轻薄，但基于互联网的人类协作越来越多样化，发挥无与伦比的群体智慧。



本文配图由 QoderWork 制作。


