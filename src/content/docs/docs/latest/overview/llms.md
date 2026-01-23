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

## llms.txt 的结构

llms.txt 文件遵循标准的 Markdown 格式，包含以下几个部分：

### 1. 网站标题（H1）

```markdown
# Higress
```

### 2. 简短描述（引用块）

```markdown
> Higress 是一款云原生 API 网关，基于 Istio 和 Envoy 构建，支持 AI 网关、API 网关和微服务网关三合一。
```

### 3. 可选的前言部分

提供核心特性、主要功能等补充信息。

### 4. 内容分类（H2）和链接列表

```markdown
## 用户指南

- [快速开始](https://higress.ai/docs/latest/user/quickstart/)
- [全局配置说明](https://higress.ai/docs/latest/user/configmap/)
...

## 运维指南

- [使用 Helm 进行云原部署](https://higress.ai/docs/latest/ops/deploy-by-helm/)
...
```

## 如何使用 llms.txt

### 对于 AI 开发者

在开发 AI 应用时，可以通过读取 llms.txt 文件来快速了解 Higress 的文档结构：

```python
import requests

# 获取 llms.txt
response = requests.get('https://higress.ai/llms.txt')
content = response.text

# 使用 LLM 处理内容
# 可以直接将 llms.txt 作为上下文提供给 LLM
```

### 对于 LLM 应用

当 LLM 需要查找 Higress 的相关文档时，可以：

1. 首先读取 `/llms.txt` 获取网站结构
2. 根据需求定位到相关分类
3. 访问具体的文档链接获取详细信息

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
