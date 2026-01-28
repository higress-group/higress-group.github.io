---
title: "Skills 实战全记录：一个人一周完成开源官网重构"
description: "Skills 实战全记录：一个人一周完成开源官网重构"
date: "2026-01-28"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：丹坤

> **"你的官网，AI 能读懂吗？"当我第一次把 Higress 文档链接丢给 Claude，让它帮我写个接入 Demo 时，AI 的回复是："抱歉，我无法有效解析这个页面的内容结构..."这一刻我意识到：我们的文档，正在被时代淘汰。**
>

## 00 TL;DR
+  **技术栈大换血**：迁移到 Astro 5 + Starlight，Lighthouse 性能跑分 **100 分。**
+  **AI 友好**：接入 llms.txt 标准，支持 Cursor、Claude Code 等 **主流 AI Coding 工具。**
+  **AI 全能助手**：设计稿转代码、无效资源自动清理、页面体验和性能优化、SEO/CRO 专业分析、内容缺失智能补全。**这些原本需要设计师、运维、SEO 专家、产品经理协同的工作，现在 AI 都能搞定。**
+  **效率革命**：一个人 + Qoder + Skills，完成过去需要**一个小组的工作量**。

## <font style="color:rgb(0, 0, 0);">01 开源网关遇上 AI 浪潮</font>
[Higress](https://github.com/alibaba/higress)<font style="color:rgb(0, 0, 0);"> 作为 AI 时代的流量基础设施，经历了多次升级，目前分为以下三大能力形态：</font>

+ **API 网关**（[https://higress.ai/api-gateway](https://higress.ai/api-gateway)）：将流量网关、微服务网关和安全网关三合一，提供统一的服务暴露、流量管控、API 全生命周期管理能力。
+ **AI 网关**（[https://higress.ai/ai-gateway](https://higress.ai/ai-gateway)）：专为 AI 场景设计，统一代理大模型 API 与 MCP Server，支持模型、工具（MCP）及 Agent 的集中接入与管理。
+ **HiMarket**（[https://higress.ai/himarket](https://higress.ai/himarket)）：助力企业构建 Agent、Model、MCP 市场，通过统一的 AI 能力管理平台，解决 AI 资源分散、权限管控复杂、成本分摊困难等挑战。平台提供 HiChat AI 创新中心作为全员 AI 使用入口，打破团队间的能力孤岛，降低接入成本，释放 AI 创新潜能。

Higress 以 Envoy 为内核，通过 [WASM](https://higress.ai/docs/ebook/wasm14) 插件进行能力边界拓展。然而，现有的官网架构逐渐成为发展的阻碍：

+ **产品孤岛**：所有的网关都需要独立的 Landing Page，以及独立产品文档，维护成本高。
+ **AI 阅读障碍**：随着 AI Coding 的深入使用，开发者趋向让 AI 阅读产品文档，然后编写 Demo 或者融入当前的业务逻辑。我们的产品官网不仅仅是给人阅读，更多需要考虑给 AI 阅读。
+ **能力短板**：团队同学的过往工作经验一直在 B 端业务，官网首页是一个偏 C 端的场景。对于性能、SEO、样式效果要求和 B 端完全不一样。过去的这部分的工作经验非常少。

## 02 Higress 官网全新升级
基于以上痛点，我们对 Higress 官网进行了一次全面的架构升级和体验重塑。

### 1、技术栈大换血：
新官网采用 [Astro 5](https://astro.build/) 作为核心框架，配合 [Starlight](https://starlight.astro.build/) 文档系统，实现了：

+ **岛屿架构**：默认零 JS，只在需要交互的组件加载 JavaScript，首屏性能大幅提升
+ **Tailwind CSS 4**：全新的样式系统，开发效率更高，产物体积更小
+ **TypeScript 全量覆盖**：类型安全的开发体验

### 2、产品矩阵统一门户
告别产品孤岛，三大产品线统一入口，独立 Landing Page：

| 产品 | 入口 | 定位 |
| :--- | :--- | :--- |
| **首页** | [higress.ai](https://higress.ai) | 品牌门户，角色引导 |
| **API 网关** | [/api-gateway](https://higress.ai/api-gateway) | 流量、微服务、安全三合一 |
| **AI 网关** | [/ai-gateway](https://higress.ai/ai-gateway) | 大模型 API + MCP 统一代理 |
| **HiMarket** | [/himarket](https://higress.ai/himarket) | Agent/Model/MCP 市场 |


每个产品都有独立的快速开始文档，用户可以根据场景快速上手。

### 3、用户引导分流
首页增加三种**方案选择器**（[企业版](https://www.aliyun.com/product/api-gateway?spm=higress-website.topbar.0.0.0)、[快速体验](https://higress.ai/docs/ai/quick-start)、[产品介绍](https://higress.ai/ai-gateway)），根据用户不同需求和时间投入意愿，提供差异化的引导路径，降低决策成本，提升转化率。

### 4、用户友好设计
除了技术架构升级，我们在用户体验上也做了大量优化：

+ **场景化快速入门**

首页提供四大核心场景卡片（多模型代理、应用安全防护、AI 语义缓存、Token 管理），每个场景标注预计阅读时间，hover 展示场景简介和"立即体验"按钮，帮助用户快速找到所需内容。

+ **70+ 常见问题库**

整理社区高频问题，构建 FAQ 知识库，覆盖部署、配置、插件开发等常见场景，减少用户排查成本。

+ **100+ 技术博客**

涵盖版本发布、最佳实践、用户案例、技术深度解读，支持按分类和标签筛选。

+ **响应式设计**

全站适配 PC、平板、手机等多端设备，移动端导航优化，确保在任何设备上都有良好的阅读体验。

### 5、让 AI 读懂你的文档：三个关键设计
在 AI Coding 时代，官网的读者不再仅仅是人类，还有 AI。我们从架构层面为 AI 阅读做了专项优化：

**5.1 llms.txt 自动生成**

遵循 [llms.txt 标准](https://llmstxt.org/)，构建时自动生成 AI 专属入口文件：

+ 访问地址：[https://higress.ai/llms.txt](https://higress.ai/llms.txt)
+ 包含：网站简介 + 文档分类 + 完整链接索引
+ 自动同步：每次构建自动从 `_sidebar.json` 生成，无需手动维护

**5.2 Markdown 原文导出**

所有文档页面提供 Markdown 原文访问： AI 工具可直接抓取纯净的 Markdown 内容，无需解析 HTML

**5.3 主流 AI 工具对接**

提供与 Cursor、Windsurf、Claude Code、Gemini CLI、Trae、Qoder 等主流 AI Coding 工具的集成指南，开发者可一键将 Higress 文档接入 AI 助手。

详见：[如何在 AI 工具中使用 Higress 文档](https://higress.ai/docs/latest/overview/llms/)

## 03 用 Skills 补齐程序员的"营销短板"
网站的成功不仅依赖技术实现，**流量获取与增长策略**同样至关重要。这些能力长期属于 SEO 专家和增长黑客的专业领域，对程序员来说是明显的短板。

[Skills](https://docs.qoder.com/zh/extensions/skills) 是 [Qoder](https://qoder.com/) 的扩展能力，可以将专业领域知识封装成可复用的 AI 指令集。Skills 支持自动触发与手动调用两种模式，使用方式与自定义 Command 一致，开发者可以零门槛上手。

本文使用的 [marketingskills](https://github.com/coreyhaines31/marketingskills) 整合了营销、CRO、文案写作、SEO 等核心能力，让开发者也能快速掌握增长技能。

![](https://img.alicdn.com/imgextra/i4/O1CN01lx0lfM1QREA7jS2Kh_!!6000000001972-49-tps-2400-1792.webp)

### 1、让搜索引擎读懂你：SEO 优化策略
**1.1 结构化数据 Skill(Schema Markup)**

配置：[https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/schema-markup](https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/schema-markup)

作用：实现 schema.org 标记，以帮助搜索引擎理解内容并启用搜索中的富媒体结果。

生成的审核：

![](https://img.alicdn.com/imgextra/i3/O1CN01Uwdk6Y1e64UJDeuzG_!!6000000003821-2-tps-1554-1354.png)

执行优化：

由于优化项较多，Agent 容易遗忘，根据 [Manus 的经验](https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)，使用 todolist (add_tasks) 工具进行任务管理。通过 prompt "使用 todolist 工具开始执行任务"，AI 会创建任务列表并逐一完成 Article、SoftwareApplication、Organization、WebSite 等 Schema 的优化。

![](https://img.alicdn.com/imgextra/i3/O1CN01rUNbwb1s3EejaaIgr_!!6000000005710-2-tps-1566-562.png)

**1.2 pSEO Skill:规模化构建高质量内容**

配置：[https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/programmatic-seo](https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/programmatic-seo)

作用：利用模板和数据大规模构建经过 SEO 优化的页面。 注意，谨慎使用此 Skill 会批量制造垃圾页面，所有的页面都需要经过人工 Review。

给出的建议如下：

![](https://img.alicdn.com/imgextra/i1/O1CN01Hr8Kcy1pQBen9Ah3s_!!6000000005354-2-tps-1870-1524.png)

基于 SEO 最佳实践，AI 建议从以下三个维度扩展内容矩阵：

+ **技术术语表**：构建 API 网关领域的专业词汇库，提升长尾词覆盖
+ **竞品对比页**：与 Kong、APISIX 等网关产品的深度功能对比
+ **插件专题页**：为每个插件创建独立落地页，精准匹配用户搜索意图

确定了方向后，我们借助 AI 整理现有的文档帮忙生成：

**技术术语表 (Glossary)**

![](https://img.alicdn.com/imgextra/i3/O1CN01hKkyUO1xLcdSnxLeo_!!6000000006427-2-tps-1828-1350.png)

效果：[https://higress.ai/glossary](https://higress.ai/glossary)

**插件落地页**

效果：[https://higress.ai/plugins](https://higress.ai/plugins)

![](https://img.alicdn.com/imgextra/i2/O1CN01UGuQhP1ljBck0USqz_!!6000000004854-2-tps-2764-1440.png)

**竞品对比**

效果：[https://higress.ai/comparison](https://higress.ai/comparison)

![](https://img.alicdn.com/imgextra/i3/O1CN01wUUwkS25ZNSMLd5rl_!!6000000007540-2-tps-2622-1658.png)

### 2、让用户爱上你：转化率优化策略
利用 `onboarding-cro` 和 `page-cro` Skills 对关键页面进行诊断优化。

**2.1 用户引导优化 Skill(Onboarding CRO)**

配置：[https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/onboarding-cro](https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/onboarding-cro)

作用：用户引导优化(Onboarding CRO)，帮助识别首页的用户引导问题并提供优化建议。

生成的审核报告如下：

![](https://img.alicdn.com/imgextra/i1/O1CN01022Nxi1IHauC1jZ67_!!6000000000868-2-tps-1474-1374.png)

优化效果：

![](https://img.alicdn.com/imgextra/i1/O1CN01jALuJO1NvVV2L5S9C_!!6000000001632-2-tps-2394-1226.png)

AI 生成的审核报告会识别出首页在价值主张、CTA 层次、信任信号等方面的不足，并提供具体的优化方案。

**2.2 页面转化率优化 Skill(Page CRO)**

配置：[https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/page-cro](https://github.com/higress-group/higress-group.github.io/tree/ai/.qoder/skills/page-cro)

prompt: 对于 /ai-gateway 页面进行 CRO 优化：

AI 生成的详细分析报告包括：

![](https://img.alicdn.com/imgextra/i4/O1CN01nnWtdR21gT7rUgtHm_!!6000000007014-2-tps-1868-1476.png)

**优化效果总结**

+ 快速部署引导

![](https://img.alicdn.com/imgextra/i1/O1CN01Q2w9zl1dkXsAo8f7A_!!6000000003774-2-tps-3148-700.png)

+ 竞对分析引导

![](https://img.alicdn.com/imgextra/i1/O1CN01cZsLi725X5TaR7MxE_!!6000000007535-2-tps-2958-1204.png)

### 3、让 AI 读懂你：AI 亲和优化策略
在 AI 时代，官网的受众正在发生变化。随着 AI Coding 的深入使用，开发者倾向于让 AI 阅读产品文档，然后编写 Demo 或融入业务逻辑。我们的产品官网**不仅仅是给人阅读，更需要考虑给 AI 阅读**。

**3.1 llms.txt:为 AI 准备的文档入口**

实现：[https://higress.ai/docs/latest/overview/llms/](https://higress.ai/docs/latest/overview/llms/)

llms.txt 是一个为大模型准备的专属文档入口，类似于 robots.txt，但专门为 AI 设计。它帮助 AI 快速索引和理解网站的核心内容结构，方便 AI 代理快速找到所需信息。

**3.2 Markdown 结构化:AI 友好的内容格式**

支持 复制为Markdown文本，以及支持 Makrdown链接。方便在AI Coding工具集成。

![](https://img.alicdn.com/imgextra/i3/O1CN015ZZt5j1DuSR0WefkL_!!6000000000276-1-tps-1347-750.gif)

## 04 效率革命：AI Coding 让我一人顶起一个开发组
有了 AI 这个"全能队友"，过去棘手的工程问题迎刃而解。

### **1、Design2Code：从设计稿到代码的直达**
通过 [MasterGo MCP](https://mastergo.com/help/MG/MCP)，我们可以直接将设计稿转化为代码，大幅提升 UI 开发效率。

配置方式：

```plain
{
  "mcpServers": {
    "mastergo-magic-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@mastergo/magic-mcp",
        "--token=<MG_MCP_TOKEN>",
        "--url=https://mastergo.com"
      ]
    }
  }
}
```

网页还原： ![](https://img.alicdn.com/imgextra/i3/O1CN01oDKX7A1pfl7b31CMX_!!6000000005388-2-tps-1478-1200.png)

### 2、代码"断舍离"：AI 帮我删掉 147 张废图
通过 `du -sh ./public/img` 发现图片目录高达 155M。使用 Claude Code 配合简单 Prompt：

> 查看 @public/img/ 中的所有图片，看下图片是否被使用，如果没有被使用直接删除
>

瞬间删除了 147 张无效图片，实现了资源的高效瘦身。

![](https://img.alicdn.com/imgextra/i2/O1CN01gs3auN23LydSAbm8T_!!6000000007240-2-tps-1942-754.png)

### 3、从 65 分到 100 分：让 AI 自己优化性能
安装 [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) 工具，利用 AI 生成报告并自主执行优化。优化效果：

![](https://img.alicdn.com/imgextra/i1/O1CN01EhPKyf1EIjQTfeBmG_!!6000000000329-2-tps-3050-1194.png)

配置方式：

```plain
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx -y chrome-devtools-mcp@latest",
      "env": {},
      "args": [ ]
    }
  }
}
```

使用 Prompt：

> use chrome-devtools mcp: 生成 Lighthouse report，收集问题，并针对问题进行优化
>

![](https://img.alicdn.com/imgextra/i2/O1CN015DrARV1srcDuiLtte_!!6000000005820-2-tps-2152-1224.png)

AI 会自动生成 Lighthouse 报告，识别性能问题（如未使用的 CSS、图片优化、资源加载等），并逐一执行优化，最终实现性能评分的显著提升。

### 4、翻车现场：AI 也会犯错
坦白说，AI 不是万能的。这里分享几个踩坑经历，希望能帮你避免同样的问题。

**踩坑 1：pSEO 差点变成"垃圾页面制造机"**

在使用 pSEO Skill 时，AI 一口气规划了 200+ 页面生成方案——其中大量是低质量、内容空洞的模板页面。如果直接上线，很可能被搜索引擎判定为垃圾站点，反而损害 SEO。

**教训**：AI 生成的内容**必须经过人工 Review**，宁缺毋滥。比如 "竞品分析"是个非常严肃的话题，绝对不能让AI主导，必须是工程师一线的亲身体验。

**踩坑 2：AI 删错了还在用的图片**

让 AI 清理无效图片时，它误删了几张通过 JavaScript 动态引用的图片（静态分析检测不到）。上线后部分页面图片 404。

**教训**：对于删除操作，建议先让 AI 生成**待删除清单**，人工确认后再执行。

**踩坑 3：Design2Code 的"完美主义陷阱"**

AI 生成的代码追求像素级还原，导致大量硬编码的 px 值和绝对定位，响应式适配一塌糊涂。

**教训**：Design2Code 适合快速出原型，但**生产代码需要人工重构**，建立语义化的设计系统。

## 05 结语：AI 时代的开发范式已经变了
从 Higress 的升级实践可以看出，未来的开发不再仅仅是 Coding，而是对 AI 能力的深度编排。通过 AI 补齐性能、SEO、营销等短板，开发者可以将精力集中在更具创造性的产品能力构建上。

**实践心得：**

| 场景 | AI 角色 | 人类角色 |
| :--- | :--- | :--- |
| Design2Code | 快速出原型 | 重构为生产代码 |
| 性能优化 | 识别问题 + 自动修复 | 验收 + 边界 case 处理 |
| pSEO | 规模化生成 | 质量把控 + 内容审核 |
| CRO 优化 | 诊断分析 + 建议方案 | 最终决策 + A/B 测试 |


**一句话总结**：AI 是你的"10 倍效率加速器"，但**方向盘始终在你手里**。

## 06 开始你的 AI 官网升级之旅
想复刻这套实践？这里是你需要的全部资源：

**1. 体验 Higress**

+  Star 项目：[github.com/alibaba/higress](https://github.com/alibaba/higress)
+  访问官网：[higress.ai](https://higress.ai)
+  AI 文档入口：[higress.ai/llms.txt](https://higress.ai/llms.txt)

**2. 获取本文涉及的工具**

+ [MasterGo Magic MCP](https://mastergo.com/help/MG/MCP) - Design2Code
+ [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) - Lighthouse 自动化
+ [marketingskills](https://github.com/coreyhaines31/marketingskills) - SEO/CRO Skills

**3. 加入社区讨论**

有问题或想法？欢迎在评论区交流，或加入 [Higress 社区](https://github.com/alibaba/higress/issues) 一起探讨 AI 时代的开发实践！


