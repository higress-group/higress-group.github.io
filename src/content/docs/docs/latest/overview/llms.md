---
title: llms.txt
keywords: [llms.txt, AI, LLM, 大语言模型, 网站索引]
description: llms.txt 是为大语言模型（LLM）优化网站内容访问的新标准，提供了一个机器可读的网站说明文件。
---

# llms.txt

## 什么是 llms.txt

llms.txt 是一个为大语言模型（LLM）设计的标准文件格式，旨在帮助 AI 系统更高效地理解和访问网站内容。与传统的 `robots.txt`（用于限制爬虫）和 `sitemap.xml`（用于 SEO）不同，`llms.txt` 专门为 LLM 提供了一个结构化的、简洁的网站内容导航。

## 为什么需要 llms.txt

随着大语言模型的广泛应用，网站内容正成为 AI 系统的重要数据来源。然而，现有的网站结构存在以下挑战：

- **HTML 复杂性**：网页包含大量导航、广告和样式代码，这些对 LLM 理解内容造成干扰
- **上下文限制**：LLM 的上下文窗口有限，无法直接处理完整的复杂网页
- **内容定位困难**：LLM 难以快速定位网站中最重要和最相关的内容

llms.txt 通过提供一个清晰、简洁的 Markdown 格式内容索引，帮助 LLM 快速理解网站结构和核心内容。

## Higress 的 llms.txt

Higress 官网自动生成并提供 llms.txt 文件，包含了完整的文档导航和链接。您可以通过以下地址访问：

**🔗 [https://higress.ai/llms.txt](https://higress.ai/llms.txt)**

该文件包含：

- **网站简介**：Higress 的核心特性和定位
- **文档分类**：按照概述、用户指南、运维指南、开发者指南等分类组织
- **完整链接**：指向所有主要文档页面的直接链接

## 如何在 AI 工具中使用 llms.txt

### 典型使用场景

- **聊天机器人 / Copilot**：在回答与 Higress 相关的问题前，先读取 `https://higress.ai/llms.txt`，根据问题关键词选出 1～3 个最相关的文档链接，再抓取页面内容作为上下文。
- **知识库索引构建工具**：将 llms.txt 视为“种子索引”，只抓取其中列出的页面，而不是全站爬取，从而减少噪音和抓取成本。
- **文档导航插件**：在 IDE、浏览器插件或内部助手中，使用 llms.txt 构建“文档导航树”，让用户或 Agent 能一步跳转到对应文档。


### 与常见 AI 工具的配合使用

### Cursor

在 Cursor 中，可以使用 `@Docs` 功能或将 `https://higress.ai/llms.txt` 加入项目的文档配置，让 Cursor 在回答与 Higress 相关的问题时，优先参考该索引文件中的文档结构与链接，从而获得更准确的智能补全和解释。

[了解更多关于 Cursor @Docs 的用法](https://docs.cursor.com/context/@-symbols/@-docs)

### Windsurf

在 Windsurf 中，可以在对话中通过 `@https://higress.ai/llms.txt` 引用，或在 `.windsurf/rules` 中加入该地址，让 Windsurf 作为长期记忆来源来理解 Higress 的文档结构和网关配置示例。

[了解更多关于 Windsurf Memories](https://docs.windsurf.com/windsurf/cascade/memories)

### Claude Code

在 Claude Code 中，可以将 `https://higress.ai/llms.txt` 添加为工作区的文档 / 知识库来源，让 Claude 在进行配置生成、插件开发、排错分析时，自动从 Higress 文档中检索相关内容。

[了解更多关于 Claude Code 文档上下文配置](https://code.claude.com/docs)

### Gemini CLI

在 Gemini CLI 中，可以通过 `--context` 参数或在 `.gemini/config.json` 中指定 `https://higress.ai/llms.txt`，让 CLI 在回答与 Higress 相关的问题前，先读取并解析该索引文件。

[了解更多关于 Gemini CLI 上下文配置](https://ai.google.dev/gemini-api/docs?hl=en)

### Trae

在 Trae 中，可以将 `https://higress.ai/llms.txt` 作为知识源加入项目配置，并在设置中开启引用功能，使其在生成或分析与 Higress 相关的 API / 网关配置时自动参考官方文档结构。

[了解更多关于 Trae 知识源配置](https://trae.ai/docs)

### Qoder

在 Qoder 中，可以在 `.qoder/config.yml` 中将 `https://higress.ai/llms.txt` 配置为外部知识文件，或在对话中通过 `@docs https://higress.ai/llms.txt` 临时引用，让助手在编写 Higress 相关代码与配置时自动查阅文档索引。

[了解更多关于 Qoder 配置](https://docs.qoder.com/)

### 其他 AI 工具

对于其他支持 llms.txt 或外部文档索引的 AI 工具，只需将 `https://higress.ai/llms.txt` 作为知识或文档入口配置进去，即可在对话或代码生成过程中更好地理解 Higress 的网关能力和使用方式。


## 自动生成机制

Higress 官网的 llms.txt 是在构建时自动生成的，无需手动维护。生成过程包括：

1. 读取文档的 sidebar 配置（`_sidebar.json`）
2. 遍历所有文档目录和文件
3. 提取文档标题和链接
4. 按照标准格式生成 llms.txt 文件

这确保了 llms.txt 始终与实际文档保持同步。

## 了解更多

- **llms.txt 标准提案**：[https://llmstxt.org/](https://llmstxt.org/)
- **提案作者**：Jeremy Howard（Answer.AI 联合创始人）
- **发布日期**：2024年9月3日

## 相关资源

- [Higress 文档首页](/docs/latest/overview/what-is-higress/)
- [快速开始](/docs/latest/user/quickstart/)
- [常见问题](/docs/latest/overview/faq/)
