---
title: llms.txt
keywords: [llms.txt, AI, LLM, large language model, site index]
description: llms.txt is a new standard to optimize website content access for large language models (LLMs), providing a machine-readable description file for websites.
---

## llms.txt

## What is llms.txt

llms.txt is a standard file format designed for large language models (LLMs). Its goal is to help AI systems understand and access website content more efficiently. Unlike traditional `robots.txt` (used to restrict crawlers) and `sitemap.xml` (used for SEO), `llms.txt` is specifically designed to provide LLMs with a structured and concise navigation of a site's content.

## Why do we need llms.txt

With the widespread adoption of large language models, website content is becoming an important data source for AI systems. However, the current structure of websites presents several challenges:

- **HTML complexity**: Web pages contain a large amount of navigation, ads, and styling code, which interferes with LLMs understanding the core content
- **Context limitations**: LLMs have limited context windows and cannot directly process a full complex web page
- **Difficulty locating content**: LLMs struggle to quickly locate the most important and relevant content on a site

llms.txt provides a clear and concise Markdown-based index of content, helping LLMs quickly understand a site’s structure and key documents.

## llms.txt on the Higress website

The Higress official website automatically generates and exposes an `llms.txt` file that contains the full documentation navigation and links. You can access it at:

**🔗 [https://higress.ai/llms.txt](https://higress.ai/llms.txt)**

This file includes:

- **Site overview**: The core features and positioning of Higress
- **Documentation categories**: Organized by Overview, User Guide, Operations Guide, Developer Guide, and other sections
- **Complete links**: Direct links to all major documentation pages

## How to use llms.txt in AI tools

### Typical use cases

- **Chatbots / Copilot tools**: Before answering questions related to Higress, first read `https://higress.ai/llms.txt`, then select 1–3 of the most relevant documentation links based on the query keywords, and fetch those pages as context.
- **Knowledge-base indexing tools**: Treat llms.txt as a “seed index” and only crawl the pages listed in it instead of the entire site, which reduces noise and crawling costs.
- **Documentation navigation plugins**: In IDEs, browser extensions, or internal assistants, use llms.txt to build a “documentation navigation tree” that lets users or agents jump directly to the corresponding docs.

### Working with common AI tools

### Cursor

In Cursor, you can use the `@Docs` feature or add `https://higress.ai/llms.txt` to the project’s docs configuration. This allows Cursor to prioritize the document structure and links defined in the index file when answering Higress-related questions, resulting in more accurate completions and explanations.

[Learn more about Cursor @Docs](https://docs.cursor.com/context/@-symbols/@-docs)

### Windsurf

In Windsurf, you can reference `https://higress.ai/llms.txt` directly in a conversation using `@https://higress.ai/llms.txt`, or configure it in `.windsurf/rules` so that Windsurf can treat it as a long-term memory source for understanding the Higress documentation structure and gateway configuration examples.

[Learn more about Windsurf Memories](https://docs.windsurf.com/windsurf/cascade/memories)

### Claude Code

In Claude Code, you can add `https://higress.ai/llms.txt` as a docs / knowledge source for your workspace. Claude can then automatically retrieve relevant content from the Higress docs when generating configurations, developing plugins, or analyzing issues.

[Learn more about Claude Code docs context configuration](https://code.claude.com/docs)

### Gemini CLI

In Gemini CLI, you can pass `https://higress.ai/llms.txt` via the `--context` flag or configure it in `.gemini/config.json`, so that the CLI reads and parses this index file before answering questions related to Higress.

[Learn more about Gemini CLI context configuration](https://ai.google.dev/gemini-api/docs?hl=en)

### Trae

In Trae, you can add `https://higress.ai/llms.txt` as a knowledge source in the project configuration and enable citation in the settings. This allows Trae to automatically reference the official documentation structure when generating or analyzing Higress-related APIs or gateway configurations.

[Learn more about Trae knowledge source configuration](https://trae.ai/docs)

### Qoder

In Qoder, you can configure `https://higress.ai/llms.txt` as an external knowledge file in `.qoder/config.yml`, or temporarily reference it in a conversation using `@docs https://higress.ai/llms.txt`. This enables the assistant to automatically consult the documentation index when writing Higress-related code or configurations.

[Learn more about Qoder configuration](https://docs.qoder.com/)

### Other AI tools

For other AI tools that support llms.txt or external documentation indexes, you only need to configure `https://higress.ai/llms.txt` as a knowledge or documentation entry point. This will help them better understand Higress gateway capabilities and usage when generating or analyzing content.

## Automatic generation mechanism

The `llms.txt` file of the Higress official website is automatically generated at build time and does not require manual maintenance. The generation process includes:

1. Reading the documentation sidebar configuration (`_sidebar.json`)
2. Traversing all documentation directories and files
3. Extracting documentation titles and links
4. Generating the llms.txt file in the standard format

This ensures that llms.txt always stays in sync with the actual documentation.

## Learn more

- **llms.txt proposal**: [https://llmstxt.org/](https://llmstxt.org/)
- **Proposal author**: Jeremy Howard (Co-founder of Answer.AI)
- **Release date**: September 3, 2024

## Related resources

- [Higress documentation home](/docs/latest/overview/what-is-higress/)
- [Quick start](/docs/latest/user/quickstart/)
- [FAQ](/docs/latest/overview/faq/)
