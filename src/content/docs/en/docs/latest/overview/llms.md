---
title: llms.txt
keywords: [llms.txt, AI, LLM, Large Language Model, Website Index]
description: llms.txt is a new standard for optimizing website content access for Large Language Models (LLMs), providing a machine-readable website description file.
---

# llms.txt

## What is llms.txt

llms.txt is a standard file format designed for Large Language Models (LLMs) to help AI systems understand and access website content more efficiently. Unlike traditional `robots.txt` (used for crawler restrictions) and `sitemap.xml` (used for SEO), `llms.txt` specifically provides LLMs with a structured and concise navigation of website content.

## Why llms.txt is Needed

As Large Language Models become widely adopted, website content is becoming a critical data source for AI systems. However, existing website structures face several challenges:

- **HTML Complexity**: Web pages contain extensive navigation, advertisements, and styling code that interfere with LLM content understanding
- **Context Limitations**: LLMs have limited context windows and cannot directly process complete complex web pages
- **Content Location Difficulties**: LLMs struggle to quickly locate the most important and relevant content on websites

llms.txt addresses these issues by providing a clear, concise Markdown-formatted content index that helps LLMs quickly understand website structure and core content.

## Higress's llms.txt

The Higress official website automatically generates and provides an llms.txt file containing complete documentation navigation and links. You can access it at:

**🔗 [https://higress.ai/llms.txt](https://higress.ai/llms.txt)**

This file includes:

- **Website Introduction**: Core features and positioning of Higress
- **Documentation Categories**: Organized by Overview, User Guide, Operations Guide, Developer Guide, etc.
- **Complete Links**: Direct links to all major documentation pages

## llms.txt Structure

The llms.txt file follows standard Markdown format and includes the following sections:

### 1. Website Title (H1)

```markdown
# Higress
```

### 2. Brief Description (Blockquote)

```markdown
> Higress is a cloud-native API gateway built on Istio and Envoy, integrating AI Gateway, API Gateway, and Microservices Gateway into one solution.
```

### 3. Optional Preamble Section

Provides supplementary information such as core features and main functionalities.

### 4. Content Categories (H2) and Link Lists

```markdown
## User Guide

- [Quick Start](https://higress.ai/docs/latest/user/quickstart/)
- [Global Configuration](https://higress.ai/docs/latest/user/configmap/)
...

## Operations Guide

- [Deploy with Helm](https://higress.ai/docs/latest/ops/deploy-by-helm/)
...
```

## How to Use llms.txt

### For AI Developers

When developing AI applications, you can quickly understand Higress's documentation structure by reading the llms.txt file:

```python
import requests

# Fetch llms.txt
response = requests.get('https://higress.ai/llms.txt')
content = response.text

# Process content with LLM
# You can directly provide llms.txt as context to the LLM
```

### For LLM Applications

When an LLM needs to find Higress-related documentation, it can:

1. First read `/llms.txt` to obtain the website structure
2. Locate the relevant category based on requirements
3. Access specific documentation links for detailed information

## Automatic Generation Mechanism

Higress website's llms.txt is automatically generated during the build process without manual maintenance. The generation process includes:

1. Reading the documentation's sidebar configuration (`_sidebar.json`)
2. Traversing all documentation directories and files
3. Extracting document titles and links
4. Generating the llms.txt file in standard format

This ensures that llms.txt always stays synchronized with the actual documentation.

## Learn More

- **llms.txt Standard Proposal**: [https://llmstxt.org/](https://llmstxt.org/)
- **Proposal Author**: Jeremy Howard (Co-founder of Answer.AI)
- **Publication Date**: September 3, 2024

## Related Resources

- [Higress Documentation Home](/docs/latest/overview/what-is-higress/)
- [Quick Start](/docs/latest/user/quickstart/)
- [FAQ](/docs/latest/overview/faq/)
