---
title: "OpenClaw vs Hermes：来自6篇评测文章、4篇安全报告和500+社区互动的真实看法"
description: "OpenClaw vs Hermes：来自6篇评测文章、4篇安全报告和500+社区互动的真实看法"
date: "2026-04-21"
category: "article"
keywords: ["Higress"]
authors: "王晨"
---

作者：望宸

我们基于 X 、Reddit、Hacker News 等社区，对过去30天的真实用户反馈进行了整理，尝试去还原全球开发者对 OpenClaw vs. Hermes 的真实看法，例如 OpenClaw 被开发者抛弃？Hermes 过度营销？自部署转向 Serverless 托管服务？

## 目录
一、调研方法说明

二、核心架构差异：网关中心 vs 学习循环

三、OpenClaw：优势与缺陷

四、Hermes Agent：优势与缺陷

五、两者合用：1+1>2 的最佳实践

六、社区声音：基于500+评论的大数据分析



## 一、调研方法说明
为避免仅依赖 SEO 排名靠前的营销文章，本调研采用以下方式获取用户反馈：

+ Reddit：包括 r/openclaw、r/better_claw、r/hermesagent、r/LocalLLaMA、r/AI_Agents 在内的5个主题。
+ Hack News：OpenClaw、Hermes 热度最高的6条 News。
+ X：搜索 Openclaw + Hermes 的相关帖子。
+ 评测和报告：通过11组不同关键词搜索，获取6篇完整评测文章内容，以及来自 Conscia、getaiperks 等4份安全分析报告。



## 核心发现：
在展开分析之前，我们想先表达一个核心结论：在多 Agent 协作以及通过 IM 来使用模型服务的发展趋势下，OpenClaw 和 Hermes 之间并不存在替代关系，而是并存和互补的关系。

![](https://img.alicdn.com/imgextra/i4/O1CN01IFCrhI1W2qn7vKQwR_!!6000000002731-2-tps-2018-1342.png)



+ **发现1：** 35%的用户依旧选择 OpenClaw，原因是习惯、以及强大的 Skill 和插件生态。
+ **发现2：** 使用了 OpenClaw 的人中，有30%开始使用 Hermes，并有15%开始考虑迁移，原因是自主进化的学习能力、运行成本更低、不会经常崩溃。但这些用户并未表达会放弃 OpenClaw。
+ **发现3：** 18%的双用率，聪明的用户不做单选题，这些用户自发选择了 OpenClaw 负责基础设施层（定时任务、消息路由）+ Hermes 负责智能层（对话、复杂执行）的分工。
+ **发现4：** 12% vs 5%的拒绝比，拒绝 OpenClaw 的理由（安全、崩溃）远比拒绝 Hermes 的理由（生态不成熟）严重。不过，这个和 OpenClaw 的用户基数远比 Hermes 高有关。



必须诚实的说明，这份调研数据存在较大的局限性，包括：

+ **票数不等于人数**：我们对 Reddit 的正面和负面评论的点赞数来代表票数，但并不完全等同于采纳的人数。
+ **沉默的大多数**：527条评论中约480条无法分类，他们的真实选择未知。
+ **样本来源偏差**：r/better_claw 帖子本身主题是"迁移到 Hermes"，天然吸引已迁移或考虑迁移的用户；r/LocalLLaMA 帖子主题是"OpenClaw 的可用性质疑"，天然吸引批评者。



## 一、核心架构差异：网关中心 vs 学习循环
### OpenClaw：网关中心的调度平台
OpenClaw的设计核心是一个集中式的 Node.js 控制器，围绕"通道、会话、路由"组织。它本质上是一个**可配置的智能体**。



> "I have a routing system that choses the best model for the job using subagents... the real killer was the memory model. OC has both kw and vector hybrid and temporal decay. It's honestly very good." u/_supert_Member（r/openclaw）_
>
> _我有一个路由系统，可以使用子代理为任务选择最佳模型……真正厉害的是记忆模型。OC 同时具备关键词和向量混合检索以及时间衰减。说实话非常好用。_
>



### Hermes Agent：学习循环驱动的智能体
Hermes Agent 更像是一个**会学习的队友**，内置持久记忆系统、自主技能生成模块，以及强化学习训练管道。



> _"It has built in learning, so if something isn't working or breaks, it ACTUALLY remembers it and creates a skill for troubleshooting it." — u/jpirog（r/openclaw，38票）_
>
> _它内置了学习功能，所以如果有什么东西不工作或坏了，它真的会记住并创建一个技能来排查问题。_
>



### 架构对比
| 维度 | OpenClaw | Hermes Agent |
| :---: | :---: | :---: |
| 运行时 | Node.js集中控制器 | Python统一运行时 |
| 记忆管理 | Markdown + SQLite混合检索 | 分层架构（Honcho持久记忆） |
| 能力扩展 | 5700+社区插件 | 自主生成 + 约40个预构建 |
| 部署复杂度 | 需要Node.js >= 22 | 安装更流畅，$5 VPS可运行 |




## 二、OpenClaw：优势与缺陷
### 优势
**1. 成熟的生态系统和广泛的集成**

OpenClaw 原生支持50+消息平台连接器，社区扩展市场拥有5700+扩展。

> _"OpenClaw has way more breadth and tools" — u/TheWordProcessor（r/openclaw）_
>
> _OpenClaw 拥有更广泛的功能和工具。_
>



> 评测文章（kanaries.net）指出："OpenClaw's ecosystem maturity is unmatched, with over 5,700 community extensions."
>
> _OpenClaw的生态系统成熟度无与伦比，拥有超过5700个社区扩展。_
>

****

**2. 跨平台会话统一管理**

> _"the ability to give each agent its own discord bot key and speak to that agent directly" — u/TurkeyLizards（r/openclaw）_
>
> _能够让每个代理拥有自己的 Discord 机器人密钥并直接与该代理对话。_
>

****

**3. 强大的记忆系统**

> "OC has both kw and vector hybrid and temporal decay. It's honestly very good." — u/_supert_Member_
>
> _OC 同时具备关键词和向量混合检索以及时间衰减。说实话非常好用。_
>



### 缺陷
**1. 安全危机**

2026年1-4月，OpenClaw接连暴露7个CVE漏洞，独立审计发现超过135,000个公开可访问的部署实例。

> Ars Technica报道："For OpenClaw users, assuming compromise is prudent."
>
> _对于OpenClaw用户来说，假设自己已经被入侵是审慎的做法。_
>



> Conscia安全报告："The OpenClaw security crisis represents one of the most significant supply chain attack vectors in the open-source AI ecosystem."
>
> _OpenClaw安全危机代表了开源AI生态系统中最重要的供应链攻击向量之一。_
>



> _"And security nightmare vector, don't forget!" — u/RoomyRoots（r/LocalLLaMA，316票）_
>
> _还有安全噩梦般的攻击面，别忘了！_
>



> _"I can't understand the total basic lack of caution using it. Either you give it access to your data and it's a security flaw, or you don't and it's basically useless." — u/Cherlokoms（r/LocalLLaMA，51票）_
>
> _我无法理解使用它时完全缺乏基本的谨慎。要么你给它访问你的数据，这是一个安全缺陷，要么你不给，它基本上就没用了。_
>



> _"If the only way to run it securely is to isolate it to its own sandbox with no access to the machine itself, the internet, or any accounts, then what's the point of it?" — u/suicidaleggroll（r/LocalLLaMA，43票）_
>
> _如果安全运行它的唯一方法是将其隔离到自己的沙盒中，无法访问机器本身、互联网或任何账户，那它还有什么意义？_
>


**2. 频繁更新导致工作流中断**

> _"broken some part of my workflow on nearly every single update, 2-3 times a week" — 多位用户引用_
>
> _几乎每次更新都会破坏我工作流的某些部分，每周2-3次。_
>


> _"The final straw was after updating to 4-2. It stopped working again!" — u/iamcabal（r/openclaw）_
>
> _更新到4-2版本后，它又停止工作了！_
>

****

**3. 会话损坏与静默失败**

> _"Memory is unreliable, and the worst part — you don't know when it will break." — u/Sad_Bandicoot_6925（r/LocalLLaMA，OP）_
>
> _记忆不可靠，最糟糕的是，你不知道它什么时候会崩溃。_
>



## 三、Hermes Agent：优势与缺陷
### 优势
**1. 安装和配置更流畅**

> _"Even from the beginning, the setup is so much more streamlined." — u/jpirog（r/openclaw，38票）_
>
> _从安装开始，设置就要流畅得多。_
>



> _"impressive OOTB, openclaw is a PITA even with all the popularity" — u/Additional_Click1（r/openclaw，OP）_
>
> _开箱体验令人印象深刻，OpenClaw 即使有这么多人气还是个麻烦东西。（注：PITA = Pain In The Ass）_
>



**2. 自我进化的学习循环**

> 独立测试确认，"自动生成的技能使技能创建过程提速40%"。
>
> _"It has built in learning, so if something isn't working or breaks, it ACTUALLY remembers it and creates a skill" — u/jpirog_
>

****

**3. 截至目前尚无公开CVE安全记录**

> _"with Hermes making its own skills, prompt injection is wayyyyyy less likely" — u/letsgoiowa（r/openclaw）_
>
> _Hermes自己创建技能，提示注入的可能性要小得多。_
>


**4. 高效的内存架构**

> _"the memory feature alone is __ok__" — u/Additional_Click1_
>
> _光是记忆功能就很棒了。_
>



> _"Hermes just 'feels' easier to setup and 'feels' like it stays up longer/better without things breaking" — u/cbelliott_
>
> _Hermes就是"感觉"更容易设置，而且"感觉"运行时间更长/更好，不会经常崩溃。_
>



**5. 更低的运行成本**

社区报告在5美元的 VPS 上即可流畅运行。

> _"best of all it's way more token efficient!" — u/iamcabal（r/openclaw）_
>
> _最重要的是它的token效率高得多！_
>



### 缺陷
**1. "Self-learning"可能过度自信**

> _"The problem is IT evaluates the result. Yes.. It decides if it did a good job or not. GUESS WHAT. It always thinks it did a good job. ALWAYS." — u/CustomMerkins4u（r/openclaw）_
>
> _问题是它自己评估结果。是的……它自己判断做得好不好。你猜怎么着？它总是认为自己做得很好。永远如此。_
>

****

**2. 手动编辑的技能会被覆盖**

> _"So then you go and manually edit the skill. Fix it. And it does a good job.. GUESS WHAT. It's self improving. It will overwrite your edits. No thank you." — u/CustomMerkins4u_
>
> _你去手动编辑技能，修复它。它做得不错……你猜怎么着？它在"自我改进"，会覆盖你的编辑。不了谢谢。_
>

****

**3. 生态规模较小**

预构建工具约40个，远少于OpenClaw的5700+。

****

**4. 本地模型支持仍有挑战**

> _"I'm running both with Hermes trying to be local first and it's been…challenging. Communicating through anything but the CLI turns into token hell." — u/TanguayX（r/openclaw）_
>
> _我同时在用两者，Hermes尝试本地优先，一直很有挑战性。除了 CLI 之外的任何通信方式都会变成token 地狱。_
>

****

## 四、两者合用：1+1>2的最佳实践
社区中一个日益流行的趋势是，**同时使用 OpenClaw 和 Hermes Agent**。



> _"I use both but I talk to Hermes 90% time and openclaw run all the cron jobs and automations." — u/EricAndersonL（r/better_claw）_
>
> _我两个都在用，但我90%的时间和Hermes对话，OpenClaw运行所有定时任务和自动化。_
>



> _"I have a Hermes agent supporting my Openclaw agent lol. Working great so far." — u/BigAlligatorPears（r/openclaw）_
>
> _我有一个Hermes代理在支持我的OpenClaw代理哈哈。到目前为止运行得很好。_
>



> _"Several people in the community are running both. OpenClaw for orchestration and scheduling, Hermes for execution." — u/ShabzSparq（r/better_claw，OP）_
>
> _社区中有几个人同时在用两个。OpenClaw用于编排和调度，Hermes用于执行。_
>



**推荐架构：**

```plain
消息平台 (WhatsApp/Slack/Discord/Telegram)
        |
        v
    [OpenClaw Gateway]  ← 统一路由、会话管理、角色分配
        |
        +---> OpenClaw内置代理 (简单任务、日常问答)
        |
        +---> [Hermes Agent]  ← 复杂任务、研究、学习
```

****

**具体实现方案**

1. **MCP 协议桥接**：最轻量级的集成方式
2. **共享技能标准**：通过 agentskills.io 实现跨平台技能共享
3. **分层部署**：OpenClaw 常驻 + Hermes 按需调用



> _"I asked openclaw agent to Instal hermes agent. He did it without openly complaining" — u/Lanfeust09（r/openclaw）_
>
> _我让OpenClaw代理安装Hermes代理。它照做了，没有公开抱怨。_
>



## 五、基于500+评论的8大主题分析
### 主题一：OpenClaw 能力与可靠性鸿沟
> _"The gap between capability and reliability seems bigger than most people admit right now." — u/norofbfg（67票）_
>
> _能力和可靠性之间的差距似乎比大多数人承认的要大得多。_
>



> _"OpenClaw runs as a persistent agent. It's supposed to be your always-on assistant. But its memory is unreliable, and the worst part — you don't know when it will break." — u/Sad_Bandicoot_6925（OP，47票回复）_
>
> _OpenClaw作为持久代理运行。它本应是你随时在线的助手。但它的记忆不可靠，最糟糕的是，你不知道它什么时候会崩溃。_
>



> _"I've got them all. OpenClaw, NanoClaw, PicoClaw, NanoBot, CoPaw, Hermes, a custom Pi bot. What I've determined after a few months: They burn tokens like my mother burns chicken. You can't trust them to do anything, at all, ever." — u/gurilagarden（37票）_
>
> _我全都有。OpenClaw、NanoClaw、PicoClaw、NanoBot、CoPaw、Hermes、一个自定义Pi机器人。几个月后我的结论：它们烧token就像我妈烧鸡一样。你完全不能信任它们做任何事，永远不能。_
>


> _"Openclaw is a bloated messy pile of shit. I ditched it after a few days." — u/cmndr_spanky（149票）_
>
> _OpenClaw就是一坨臃肿混乱的屎。我用了几天就扔了。_
>


**总结：** 超过60%的负面评论集中在同一个核心问题上：OpenClaw 能演示能力，但无法保证运行的可靠性。



### 主题二：OpenClaw 安全焦虑
> _"And security nightmare vector, don't forget!" — u/RoomyRoots（316票）_
>
> _还有安全噩梦般的攻击面，别忘了！_
>



> _"I can't understand the total basic lack of caution using it." — u/Cherlokoms（51票）_
>
> _我无法理解使用它时，完全缺乏基本的谨慎。_
>



> _"Wow OpenClaw's CVE/day rate has increased to 2.1." — u/Shoddy-Childhood-511（14票）_
>
> _哇，OpenClaw的CVE/天率已经上升到2.1了。_
>

****

**总结：** 社区对 OpenClaw 安全的态度表达了焦虑。



### 主题三：OpenClaw 成本真相
一个用户用3周时间追踪了6个模型的真实成本：

| 模型 | 日均成本 | 月均成本 |
| --- | --- | --- |
| Claude Opus 4.7 | $8.70 | ~$261 |
| Claude Opus 4.6 | $6.24 | ~$190 |
| Claude Sonnet 4.6 | $2.80 | ~$84 |
| GLM-5.1 | $1.03 | ~$31 |
| MiniMax M2.5 | $0.12 | ~$4 |
| Qwen 3.5 9B（本地） | $0 API | 仅电费 |


> _"The quality gap between 261/monthOpus4.7and261/monthOpus4.7and31/month GLM-5.1 exists but it's mostly in edge cases."_
>
> _每月261美元的Opus 4.7和每月31美元的GLM-5.1之间确实存在质量差距，但主要体现在边缘情况下。_
>



**总结：** OpenClaw的"免费"仅指软件许可。实际运行成本差距65倍。



### 主题四：合用模式
> _"I use both but I talk to Hermes 90% time and openclaw run all the cron jobs" — u/EricAndersonL_
>
> _我两个都在用，但我90%的时间和Hermes对话，OpenClaw运行所有定时任务。_
>



> _"I have openclaw install Hermes sidecar inside its same instance" — u/dv8ndee_
>
> _我让OpenClaw在同一个实例内安装Hermes边车。_
>



**总结：** 社区中已经自然涌现出多智能体的协作模式。HiClaw 提供的 Manager-Worker 的多智能体协作平台，将会扮演关键角色。之前我们在，分享了三种典型的 Agent Team 范式。

![](https://img.alicdn.com/imgextra/i3/O1CN01R8ceWO1rWiY7JOvNc_!!6000000005639-2-tps-2336-1522.png)



### 主题五：Hermes 过度营销争议
随着 Hermes 在各大社区的讨论量快速上升，另一个声音也开始出现：Hermes 的增长是否有机？是否存在刻意的营销操控？



> "Someone related to Hermes is running a guerrilla marketing campaign on Reddit, likely using bots to post as human users, to drum up natural-looking momentum for Hermes bot." — u/abricton（同一帖子后续评论，20票）
>
> 与 Hermes 相关的人正在 Reddit 上进行游击式营销活动，可能使用机器人伪装成真实用户发帖，为 Hermes 制造看似自然的增长势头。
>



> "If you haven't noticed that this sub has had completely unnatural comment / posting patterns for weeks now, with clearly templated language, you're not paying attention enough." — u/abricton（8票）
>
> 如果你还没注意到这个版块几周以来的评论/发帖模式完全不自然，使用了明显模板化的语言，那你的关注度还不够。
>



"to the tits. first heard about this hermes thing 3 days ago and ever since astroturfing posts have been non stop in my timeline" — u/nadareally_（r/openclaw，8票）

真是糟糕。3天前第一次听说这个叫 Hermes 的东西，从那时起我的时间线上就没停过刷帖。



社区还注意到 Hermes 在 X/Twitter 上也有类似的集中营销行为：



> "They have been absolutely swamping twitter with the same talking point about how hermes is better. They also always @ mention the nousresearch handle to get their shilling money." — u/Own-Lavishness4029（r/openclaw）
>
> 他们一直在 Twitter 上疯狂刷屏同一个话术——Hermes 更好。他们还总是 @ nousresearch 账号来获取推广费用。
>



> "I've seen the 'it just works' line everywhere." — u/fuzz11（r/openclaw，14票）
>
> 我到处都能看到"它就是用起来很顺"这句话。
>



也有用户认为 Hermes 的好口碑是真实的。



> "I don't think it's astroturfing. I think it's just good. The 'it just works' narrative is because it actually does." — u/jawni（r/openclaw）
>
> 我不认为是虚假营销。我认为它就是好用。"它用起来很顺"的说法是因为它确实如此。
>



无论 Hermes 的增长是否包含营销推动，社区对"真实性"的质疑本身就是一个值得关注的信号。



OpenClaw 曾因 360K GitHub Stars 的有机性遭到质疑，如今 Hermes 也面临类似的信任拷问。在 AI Agent 这个高度竞争、资本密集的赛道中，社区用户越来越警惕被操控的叙事。这些都提示我们，在评估任何产品的社区热度时，都应该保持批判性思维，区分有机增长和人为推动。  


### 主题六：从自部署到托管服务，Agent 的"Cloud 化"趋势
越来越多用户开始从自部署（self-hosted）转向托管服务（managed hosting），类似于早期云计算取代本地服务器的历程。



> "Most people don't use agents daily so idle time is a big factor. The idea of shared infra with isolation sounds like a good direction." — u/Cheetah532（r/AI_Agents）
>
> 大多数人不每天使用代理，空闲时间是个大问题。共享基础设施加隔离的方案听起来是个好方向。
>



> "Most people don't stick with agents because they're not used often, so paying for idle time feels wasteful. A low-cost shared hosting model could work if it stays reliable and actually delivers clear value when people need it." — u/Realistic_Quality494（r/AI_Agents）
>
> 大多数人不坚持使用代理是因为不经常用，所以为空闲时间付费感觉很浪费。如果保持可靠并在需要时提供清晰价值，低成本共享托管模式可以行得通。
>



类龙虾应用正在经历类似于"购买服务器自建 vs Serverless 托管服务"的分化。Serverless 托管服务的核心价值主张不仅是性价比更高，而是能提供企业级的可靠性，以消除摩擦。同时，面临高昂的维护成本，企业会更乐意选择集群模式 Serverless 托管服务，提供给员工。HiClaw 将于5月上线企业版，公测期间免费使用。通过 Serverless 托管服务、混合检索、任务切分、记忆增强等，提升企业部署类龙虾应用的经济性和可靠性。


