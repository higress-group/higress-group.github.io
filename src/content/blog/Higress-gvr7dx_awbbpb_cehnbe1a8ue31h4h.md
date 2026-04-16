---
title: "HiClaw 上线 Worker 模板市场，提供稳定可共享的 Agent 生产力"
description: "HiClaw 上线 Worker 模板市场，提供稳定可共享的 Agent 生产力"
date: "2026-04-16"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：子葵

# 摘要
HiClaw 现已支持 Worker 模板，帮助团队把某一类问题中已经验证过的 Skill 组合、执行约束、输出结构和 SOP 沉淀为标准 Worker，让 Agent 在处理同类任务时不必每次从头组织能力，从而获得更稳定的输出，也更方便分发、管理和测试。

很多团队刚开始使用 Agent 时，采用的都是一种很自然的方式：用户先提出任务，再让 Agent 按当前上下文去理解问题、搜索 Skill、组织执行路径，最后完成交付。

这种方式足够灵活，也适合探索新问题。但当一类任务反复出现之后，很多团队会自然进入下一阶段：开始希望把已经跑顺的做法保留下来，而不是每次都从头组织一遍。

HiClaw 的 Worker 模板，更多是在这个阶段发挥作用。

![](https://i-blog.csdnimg.cn/img_convert/5713ac3581c3bdf9cf6dd0bf86453a34.webp?x-oss-process=image/format,png)

# 没有 Work 模板的情况下
在没有模板时，很多 Agent 的执行过程通常是这样的：

1. 用户发起一个任务。
2. Agent 根据描述理解问题。
3. 再去搜索或匹配合适的 Skill。
4. 按当次上下文组合执行步骤并输出结果。

这种方式本身没有问题，尤其适合开放型任务。只是随着任务逐渐重复出现，它也会呈现出一个比较常见的特点：同类任务往往会在不同上下文下走出不同路径。

常见的表现包括：

+ 每次任务都要重新装配能力
+ Skill 的使用顺序不完全固定
+ 输出结构容易随着上下文变化
+ 已经验证过的经验很难直接复用

于是团队关注的重点，通常也会从“能不能完成一次任务”，慢慢转向“能不能比较稳定地重复完成同一类任务”。

![](https://i-blog.csdnimg.cn/img_convert/14f4916b69d06cc8c3a7a7fa586f8104.webp?x-oss-process=image/format,png)

# 使用 Worker 模板的场景
Worker 模板看起来像是在复用配置，但它真正承载的内容通常会更多一些，往往是一类问题中已经跑通的做法。

当团队对某个领域已经足够熟悉后，通常会形成一套比较稳定的处理方式，比如：

+ 先用哪些 Skill
+ 哪些步骤必须保留
+ 哪些执行约束不能放松
+ 输出应该按什么结构组织
+ 哪些检查项要进入 SOP

这样被复用的，就不只是单个能力本身，也包括能力之间的配合方式。

![](https://i-blog.csdnimg.cn/img_convert/24b4c66a04049b6075dfc22efe0fdd78.webp?x-oss-process=image/format,png)



Worker 模板更适合那些已经逐渐形成稳定处理框架的场景，例如：

+ 售前方案编写
+ 代码评审
+ 发布前检查
+ 项目启动与需求拆解
+ 内容生产与渠道改写
+ 面向特定业务系统的标准化分析任务

这些任务并不一定简单，但通常已经有比较成熟的 skill 组合和 SOP。在这类场景里，把经验沉淀进模板，往往会比每次重新理解流程、重新搜索能力更顺一些。

# Worker 模板：利于稳定执行
当 Worker 以模板为起点时，同类任务通常会更容易拥有一致的默认执行路径。

这会带来几个直接变化：

+ Agent 不必每次重新搜索和组织能力
+ 同类任务更容易得到相对一致的输出
+ 团队可以围绕模板持续优化，而不是反复修正单次结果
+ 成熟经验能够稳定复用，而不是每次重新触发

从这个角度看，Worker 模板更像是在给 Agent 提供一个相对稳定的起点。它并不排斥灵活调整，只是先把执行建立在已经比较成熟的做法之上。

# Worker 模板如何被共享、分发和持续维护
Worker 模板带来的变化，也不只发生在执行阶段。

当一套成熟做法被固化成模板之后，后续很多事情都会更顺手：

+ 可以分发给不同团队直接复用
+ 可以作为标准资产做版本管理
+ 可以围绕模板建立测试和回归机制
+ 可以持续迭代，而不是依赖个人经验传递

这时候，团队维护的就不再只是一次次任务结果，也是一套可以长期复用的标准 Worker。

对于公开分发场景，这件事会更直观。HiClaw 已经提供了公开的 Worker 市场入口。

Worker 市场：

`https://market.hiclaw.io/workers`

![](https://i-blog.csdnimg.cn/img_convert/6c55e9f311434fb1b060b4bcd0855c82.webp?x-oss-process=image/format,png)

这个市场本身也是 Worker 模板体系里很重要的一层，但它更准确的定位，是一个面向外部用户开放的公开入口。用户在 `market` 里看到的 skill、Worker 和相关模板能力，门户层基于 HiMarket 构建，底层基于 Nacos AI Registry 统一供给。

在这个体系里，Worker 不再只是某个团队内部保存的一份配置，而会逐渐变成一种可以被注册、审核、发布、发现、选择、复用和迭代的数字人力资源。

从使用者的角度看，这意味着当你需要某一类能力时，不一定要从零开始设计 Agent，也不一定要自己重新整理 skill 和 SOP，而是可以先去市场里看看，是否已经有适合当前任务的数字员工。对于需要私有化部署的场景，也不必依赖公共 `market` ，而是可以私有化部署 HiMarket 和 Nacos AI Registry，构建企业内自己的 Skill 市场和 Worker 市场。

从供给侧的角度看，HiMarket 门户和 Nacos AI Registry 支持 `skill`  和 `agentspec` 的全生命周期管理、分发和审核能力，能够帮助团队集中、安全地管理 skill 和 Worker 模板。这样一来，已经沉淀下来的 Worker 就有了更清晰的演进路径：被统一治理，被持续优化，被安全分发，并在不同团队和环境中稳定复用。

![](https://i-blog.csdnimg.cn/img_convert/e67d363282b4b54fe1dc04413b50670a.webp?x-oss-process=image/format,png)

# 实践案例：售前方案团队
很多团队在做售前时，流程其实已经比较固定：

+ 先理解客户背景和核心诉求
+ 再整理技术需求、约束和交付边界
+ 结合既有方案能力做匹配
+ 输出方案初稿、风险说明和汇报摘要

如果没有 Worker 模板，这个过程往往还是要靠人临时组织，或者让 Agent 每次重新搜索 skill、重新拼装路径。这样当然也能做，只是产出的结构和稳定性会比较依赖当次上下文。

如果把这套流程进一步固化为一支售前方案团队，对应的 Worker 模板就可以把不同数字员工组合起来。例如：

+ `sales-engineer`
+ `sales-proposal-strategist`
+ `support-executive-summary-generator`
+ `legal-contract-reviewer`

部署完成后，用户只需要提供客户需求文档、会议纪要或者 RFP，团队就可以按既定分工开始工作：

+ 有人负责理解需求和技术边界
+ 有人负责组织解决方案叙事
+ 有人负责压缩成管理层可读摘要
+ 有人负责补齐合同和合规视角的风险点

最终输出的，也就不只是一段泛泛而谈的回答，而会更接近一份可以进入真实业务沟通的方案初稿。

# 快速开始
第一步，先安装 Hiclaw：  


```plain
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```



第二步，直接告诉  `manager` 帮你导入这几个 Worker，名字保持默认即可：

+ `sales-engineer` 
+ `sales-proposal-strategist` 
+ `support-executive-summary-generator` 
+ `legal-contract-reviewer` 

![](https://i-blog.csdnimg.cn/img_convert/2c3d37b87d0539c73080717746be0467.webp?x-oss-process=image/format,png)



你可以直接这样发给 `manager` ：

```plain
帮我导入以下 worker，名字都保持默认即可：
- sales-engineer
- sales-proposal-strategist
- support-executive-summary-generator
- legal-contract-reviewer
```



第三步，导入完成并且Worker 都初始化成功后，再把具体的售前方案目标发给 `manager` ，让它基于这几个 Worker 组织执行。例如：

```plain
请基于刚才导入的 worker 组成一个团队并创建 leader 协调各个成员并行帮我完成一份售前方案初稿。

目标：

面向一家连锁零售企业，建设统一的会员与营销平台
需要支持多门店接入、会员积分、优惠券、短信触达和活动编排
现有系统包含 CRM、POS 和微信小程序
客户关注交付周期、系统集成复杂度、数据安全与预算控制

请输出：
- 客户需求理解
- 方案架构与能力设计
- 系统集成与实施路径
- 风险与边界说明
- 面向管理层的汇报摘要
```

  


![](https://i-blog.csdnimg.cn/img_convert/960aa15a6d98f6926a9c3f657aa67971.webp?x-oss-process=image/format,png)

# 结语
如果你所在的团队已经在某些任务上形成了比较成熟的处理方式，Worker 模板提供的就是一种更顺手的承载方式：把这些经验沉淀成标准 Worker，在后续任务里直接复用。

在 HiClaw 的使用方式里，你可以把 HiClaw 理解为团队，把 Worker 理解为数字员工，把 `market` 理解为人才市场。需要某类能力时，不必从头搭一套 prompt 和 skill，而是可以直接从市场里找到合适的 Worker，像招聘数字员工一样部署使用。


