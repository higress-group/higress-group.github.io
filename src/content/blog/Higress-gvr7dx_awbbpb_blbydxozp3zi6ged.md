---
title: "Qoder CLI实战：全自动编码参加编程挑战赛"
description: "Qoder CLI实战：全自动编码参加编程挑战赛"
date: "2025-10-31"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

# 前言
Higress 的 AI 网关开发挑战赛已经开赛，总奖金池 20 万，详情可以查看这篇文章：[https://mp.weixin.qq.com/s/E9Ek9ObQiBS_d1BWpnjdkw](https://mp.weixin.qq.com/s/E9Ek9ObQiBS_d1BWpnjdkw)

这次挑战赛的赛题有一定的门槛，借助 AI Coding 工具，如 Qoder 等则可以大幅降低门槛。甚至用 Auto Coding 的方式，解放双手和大脑，全自动编码，Auto Coding Auto Win!

之前使用 Qoder 的 IDE 工具，对于 Quest 模式的感受很好，特别是较复杂的任务，有了 Quest 提前做约定和设计，可以让 AI 不在多轮任务处理中迷失，较少需要人介入。对于 Auto Coding/Vibe Coding 来说，更是一个必需品，确保在完全没有人介入编码的情况下，最终的结果和预期不至于偏差过大。

现在 Qoder 推出了 CLI 工具：[https://mp.weixin.qq.com/s/OKqBW9IWSOLur-TxDykrTw](https://mp.weixin.qq.com/s/OKqBW9IWSOLur-TxDykrTw)，并且也支持了 Quest 模式。这样就可以让 Qoder CLI 在不支持图形化界面的云端服务器上全自动编码。

想象下：

+ 下班前还有代码没写完，可以设计好 Quest，用 MacBook 连上云端服务器上启动 Qoder CLI；
+ 下班后 MacBook 断网带回家看剧，让 Qoder 在云端帮你加班；
+ 第二天上班 MacBook 连上云端服务器检查结果符合预期。美滋滋。

接下来让我们用 Qoder CLI 实战一把 Higress 的 AI 网关挑战赛，看看效果如何：

# Qoder CLI 的准备工作
## 安装 Qoder CLI
```bash
curl -fsSL https://qoder.com/install | bash
```

## 配置一些有用的 MCP 工具
> 在这篇文章发布的时候，最新的 Qoder CLI 已经支持了内置的 WebSearch 和 WebFetch 能力，不需要再单独安装下面的 BraveSearch 和 Firecrawl MCP Server 了，Qoder CLI 又更简单更好用了～
>

这里推荐 3 个比较有用的 MCP 工具，并且可以从 [https://mcp.higress.ai/](https://mcp.higress.ai/) 获取地址一键接入：

![](https://img.alicdn.com/imgextra/i3/O1CN01Qe0uJW1JYpPBcvIre_!!6000000001041-54-tps-842-182.apng)

![](https://img.alicdn.com/imgextra/i3/O1CN01NYnfRb1gO3FTUcPgd_!!6000000004131-54-tps-838-187.apng)

![](https://img.alicdn.com/imgextra/i3/O1CN01jVZZUm27FLLNJNyY4_!!6000000007767-54-tps-832-180.apng)

这里 Context7 可以用于查询开源库的最新代码文档，用 BraveSearch 可以在互联网搜索资料，再结合 Firecrawl 可以将 Context7 和 BraveSearch 查询到的资料中的 URL 连接解析成完整文本（支持执行 JS 脚本，将面向浏览器的页面内容解析成 Markdown），从而提供更详细的信息。

在 mcp.higress.ai 上获取到这三个 MCP 服务的 streamableHTTP 接入点后，对 Qoder CLI 进行如下配置:

```bash
qodercli mcp add -s user -t http bravesearch https://mcp.higress.ai/mcp-bravesearch/xxxxxx
qodercli mcp add -s user -t http firecrawl https://mcp.higress.ai/mcp-firecrawl/xxxxxx
qodercli mcp add -s user -t http context7 https://mcp.higress.ai/mcp-context7/xxxxxx
```

在 Qoder CLI 里执行 `/mcp`可以看到所有加载进来的 MCP 工具：

![](https://img.alicdn.com/imgextra/i4/O1CN01l4c69G1zkvjWqq3Cb_!!6000000006753-54-tps-402-540.apng)

# Auto Coding 的准备工作
Higress 的 AI 网关挑战赛一共有 3 个赛题，这里选择第 2 个赛题方向：RAG 增强。

首先将 Higress 的 repo（[https://github.com/alibaba/higress](https://github.com/alibaba/higress)） fork 到你自己的账号下：

![](https://img.alicdn.com/imgextra/i2/O1CN01L6TitG1N9PtSBVPOg_!!6000000001527-54-tps-1403-148.apng)

然后 clone 下来：

```bash
git clone https://github.com/<你的github ID>/higress.git
```

然后进入到 clone 的目录下，启动 qodercli：

```bash
cd higress
qodercli --dangerously-skip-permissions
```

这里因为需要 Auto Coding，建议以`--dangerously-skip-permissions`方式启动，注意这将完全信任 Qoder 的所有操作，可以避免因为需要权限时，停下操作等待用户输入。

接下来我会分多个阶段来演示和 Qoder CLI 的交互：

## 阶段一：题目理解
我们首先让 Qoder 读一下题，理解一下背景，告诉他用 firecrawl 的 scrap 工具访问赛事页面获取赛题内容：

> 我现在要参加Higress AI网关编程挑战赛的赛题二：RAG增强，请先理解这个赛题，可以用firecrawl的scrape工具获取这个页面内容：[https://competition.atomgit.com/competitionInfo?id=c16f796963021f21711ad25819c664b4](https://competition.atomgit.com/competitionInfo?id=c16f796963021f21711ad25819c664b4)
>

可以看到 Qoder 成功解读了这个 RAG 增强的赛题：

![](https://img.alicdn.com/imgextra/i1/O1CN01c35G021rz74XCvj8L_!!6000000005701-2-tps-2043-914.png)

接下来让他搜索一下互联网上的相关技术，可以提供一些参考，告诉他用 bravesearch 的 brave_web_search 工具：

> 用bravesearch的brave_web_search工具可以搜索下互联网上相关技术实现，可以用firecrawl的scrape工具对搜索到的url的内容进行深入分析，我希望你通过这个方式，从而对类似的技术实现有一定了解
>

可以看到他从github，技术博客，论文网站等地方上搜索到了大量相关知识：

![](https://img.alicdn.com/imgextra/i2/O1CN01piicUf23YLJM6wwBP_!!6000000007267-2-tps-2560-807.png)

![](https://img.alicdn.com/imgextra/i3/O1CN01SuKJQw1ZTovSX9U30_!!6000000003196-2-tps-2560-1416.png)

到此，我们认为 Qoder 理解到的东西足够多了，可以开始进入 Quest 设计模式了

## 阶段二：Quest 详细设计
我们输入 `/quest` 指令，让它根据赛题要求，进行设计：

> /quest 请根据你理解到的知识以及赛题要求，进行参赛编码前的详细设计，要求该方案的可行性较高
>

Qoder 询问了是否需要提供更多的技术细节

![](https://img.alicdn.com/imgextra/i2/O1CN01jkIG5K1mR9cuoUfjt_!!6000000004950-54-tps-1352-647.apng)

这里我们回复数字 3 ，并告诉他当前 Higress 仓库下具体的改动位置：

> plugins/golang-filter/mcp-server/servers/rag 这个目录下已经有一个 RAG MCP Server 的基础实现，请在这个基础上实现RAG增强的相关逻辑，来完成这个赛题
>

Qoder 会提供多种选项，比如让我介绍现有实现，或者边分析变讨论。我们直接选择让他进行深度代码分析。

![](https://img.alicdn.com/imgextra/i4/O1CN01F7a8iT1tZaE5tC7M4_!!6000000005916-2-tps-1238-938.png)

分析完成后，我们让他进行详细设计：

![](https://img.alicdn.com/imgextra/i4/O1CN018EfWlY1rEr4GsKg7p_!!6000000005600-2-tps-1050-958.png)

后续 Qoder 还会让提供一些关键设计的决策，基本上都回复 ok 即可，例如：

![](https://img.alicdn.com/imgextra/i1/O1CN01O1hinv1OKhGPffGzf_!!6000000001687-2-tps-2089-1182.png)

最终完成了设计文档和任务清单的编写：

![](https://img.alicdn.com/imgextra/i4/O1CN01XG8TAy1OJmTJTs8oF_!!6000000001685-2-tps-1103-1051.png)

这里我们可以对两个文档进行 Review 和修改，并在最终确认后批准这两个文档。这样我们就正式进入 Auto Coding 阶段了。

# 开始 Auto Coding
选择立即开始实现：

![](https://img.alicdn.com/imgextra/i3/O1CN012OAD7328SSIaIfC7a_!!6000000007931-54-tps-860-275.apng)

在等待一段较长的时间之后，Qoder 完成了所有工作，可以看到他完成了所有集成测试，按照赛题要求提供了核心功能展示的 demo，还可以根据赛题要求提供一份参赛说明文档。

![](https://img.alicdn.com/imgextra/i2/O1CN01oSxDb928i1lUAwMmc_!!6000000007965-2-tps-1343-1232.png)

让 Qoder 提交这些改动，然后 Push，提交了一个 PR，可以到这里查看：[https://github.com/alibaba/higress/pull/2989/files](https://github.com/alibaba/higress/pull/2989/files)

共计 49 个文件，2万行左右的代码改动，人工 Review 的成本还是比较高的。可以基于 Higress 项目集成的通义灵码 Agent 进行辅助 Review。这是 Review Agent 的整体分析：

![](https://img.alicdn.com/imgextra/i4/O1CN017zIiDa1Z55XV6IL8D_!!6000000003142-2-tps-1006-1038.png)

整体代码的实现基本是可用的，但也有些细节问题，例如混合检索的部分是实现了一个基于 BM25 的纯内存检索，没有使用项目已经对接的 Milvus 内置的 BM25 全文检索。这个可能也是因为我们在设计阶段偷了懒。

# 后记
想要通过完全 Auto Coding 参加这个编程挑战赛，目前来看还是不太可行的。不过使用 Qoder CLI 肯定可以大幅降低参赛门槛。此外，如果对于 Qoder CLI 命令行的方式不习惯，建议可以直接使用 Qoder IDE 桌面客户端，近期也推出了 Quest Remote 功能，可以跟 CLI 一样在云端，默默为你加班：[《Qoder 重磅升级，推出 Quest Remote 功能，像发邮件一样将任务委派到云端》](https://mp.weixin.qq.com/s/1BVA_tt1_y3ixF5JOM_9aw)

如果你对 AI 工程，AI Coding 感兴趣，也想小试一把牛刀，可以参考本文的方式参加 Higress AI 网关挑战赛，总奖金池有 20 万，没准就获奖了呢，可以扫描下面的二维码报名参赛：

![](https://img.alicdn.com/imgextra/i4/O1CN01FqYf5z1Owi8a6XCnm_!!6000000001770-54-tps-400-400.apng)


