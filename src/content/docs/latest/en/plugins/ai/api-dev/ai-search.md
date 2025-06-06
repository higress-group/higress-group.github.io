---
title: AI Search Enhancement
keywords: [higress, ai search]
description: Higress supports enhancing the accuracy and timeliness of responses from models like DeepSeek-R1 by integrating real-time results from search engines (Google/Bing/Arxiv/Elasticsearch etc.)
---

## Feature Description

The `ai-search` plugin enhances the accuracy and timeliness of AI model responses by integrating real-time results from search engines (Google/Bing/Arxiv/Elasticsearch etc.). The plugin automatically injects search results into the prompt template and determines whether to add reference sources in the final response based on configuration.

## Runtime Properties

Plugin execution stage: `Default stage`
Plugin execution priority: `440`

## Configuration Fields

| Name | Data Type | Requirement | Default Value | Description |
|------|-----------|-------------|---------------|-------------|
| defaultEnable | bool | Optional | true | Whether the plugin functionality is enabled by default. When set to false, the plugin will only be activated when the request contains a web_search_options field |
| needReference | bool | Optional | false | Whether to add reference sources in the response |
| referenceFormat | string | Optional | `"**References:**\n%s"` | Reference content format, must include %s placeholder |
| referenceLocation | string | Optional | "head" | Reference position: "head" at the beginning of the response, "tail" at the end of the response |
| defaultLang | string | Optional | - | Default search language code (e.g. zh-CN/en-US) |
| promptTemplate | string | Optional | Built-in template | Prompt template, must include `{search_results}` and `{question}` placeholders |
| searchFrom | array of object | Required | - | Refer to search engine configuration below, at least one engine must be configured |
| searchRewrite | object | Optional | - | Search rewrite configuration, used to optimize search queries using an LLM service |

## Search Rewrite Description

The search rewrite feature uses an LLM service to analyze and optimize the user's original query, which can:
1. Determine whether the user's question requires a search engine query. If it does not, the search-related logic will not be executed
2. Convert natural language queries into keyword combinations better suited for search engines
3. For Arxiv paper searches, automatically identify relevant paper categories and add category constraints
4. For private knowledge base searches, break down long queries into multiple precise keyword combinations

It is strongly recommended to enable this feature when using Arxiv or Elasticsearch engines. For Arxiv searches, it can accurately identify paper domains and optimize English keywords; for private knowledge base searches, it can provide more precise keyword matching, significantly improving search effectiveness.

## Search Rewrite Configuration

| Name | Data Type | Requirement | Default Value | Description |
|------|-----------|-------------|---------------|-------------|
| llmServiceName | string | Required | - | LLM service name |
| llmServicePort | number | Required | - | LLM service port |
| llmApiKey | string | Optional | - | LLM service API key |
| llmUrl | string | Required | - | LLM service API URL |
| llmModelName | string | Required | - | LLM model name |
| timeoutMillisecond | number | Optional | 30000 | API call timeout (milliseconds) |
| maxCount | number | Optional | 3 | Maximum number of search queries generated by the search rewrite |

## Search Engine Common Configuration

| Name | Data Type | Requirement | Default Value | Description |
|------|-----------|-------------|---------------|-------------|
| type | string | Required | - | Engine type (google/bing/arxiv/elasticsearch/quark) |
| apiKey | string | Required | - | Search engine API key/Aliyun AccessKey |
| serviceName | string | Required | - | Backend service name |
| servicePort | number | Required | - | Backend service port |
| count | number | Optional | 10 | Number of results returned per search |
| start | number | Optional | 0 | Search result offset (start returning from the start+1 result) |
| timeoutMillisecond | number | Optional | 5000 | API call timeout (milliseconds) |
| optionArgs | map | Optional | - | Search engine specific parameters (key-value format) |

## Google Specific Configuration

| Name | Data Type | Requirement | Default Value | Description |
|------|-----------|-------------|---------------|-------------|
| cx | string | Required | - | Google Custom Search Engine ID, used to specify search scope |

## Arxiv Specific Configuration

| Name | Data Type | Requirement | Default Value | Description |
|------|-----------|-------------|---------------|-------------|
| arxivCategory | string | Optional | - | Search paper [category](https://arxiv.org/category_taxonomy) (e.g. cs.AI, cs.CL etc.) |

## Elasticsearch Specific Configuration

| Name | Data Type | Requirement | Default Value | Description                        |
|------|-----------|-------------|---------------|------------------------------------|
| index | string | Required    | - | Elasticsearch index name to search |
| contentField | string | Required    | - | Content field name to query        |
| semanticTextField | string | Required    | - | Embedding field name to query      |
| linkField | string | Optional    | - | Result link field name, needed when `needReference` is configured |
| titleField | string | Optional    | - | Result title field name, needed when `needReference` is configured          |
| username | string | Optional          | - | Elasticsearch username             |
| password | string | Optional    | - | Elasticsearch password             |

The [Reciprocal Rank Fusion (RRF)](https://www.elastic.co/guide/en/elasticsearch/reference/8.17/rrf.html) query used in hybrid search requires Elasticsearch version 8.8 or higher.

Currently, document vectorization relies on Elasticsearch's embedding model, which requires an Elasticsearch Enterprise license or a 30-day Trial license. To install the built-in embedding model in Elasticsearch, please refer to [this documentation](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser#alternative-download-deploy). If you want to install a third-party embedding model, please refer to [this guide](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-text-emb-vector-search-example).

For a complete tutorial on integrating the ai-search plugin with Elasticsearch, please refer to: [Building a RAG Application with LangChain + Higress + Elasticsearch](https://cr7258.github.io/blogs/original/2025/15-rag-higress-es-langchain).

## Quark Specific Configuration

| Name | Data Type | Requirement | Default Value | Description |
|------|-----------|-------------|---------------|-------------|
| contentMode | string | Optional | "summary" | Content mode: "summary" uses snippet, "full" uses full text (markdownText first, then mainText if empty) |

## Configuration Examples

### Basic Configuration (Single Search Engine)

```yaml
needReference: true
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  count: 5
  optionArgs:
    fileType: "pdf"
```

### Arxiv Search Configuration

```yaml
searchFrom:
- type: arxiv
  serviceName: "arxiv-svc.dns" 
  servicePort: 443
  arxivCategory: "cs.AI"
  count: 10
```

### Quark Search Configuration

```yaml
searchFrom:
- type: quark
  serviceName: "quark-svc.dns" 
  servicePort: 443
  apiKey: "quark api key"
  contentMode: "full"  # Optional values: "summary"(default) or "full"
```

### Multiple Search Engines Configuration

```yaml
defaultLang: "en-US"
promptTemplate: |
  # Search Results:
  {search_results}
  
  # Please answer this question: 
  {question}
searchFrom:
- type: google
  apiKey: "google-key"
  cx: "github-search-id"  # Search engine ID specifically for GitHub content
  serviceName: "google-svc.dns"
  servicePort: 443
- type: google
  apiKey: "google-key"
  cx: "news-search-id"    # Search engine ID specifically for Google News content 
  serviceName: "google-svc.dns"
  servicePort: 443
- type: bing
  apiKey: "bing-key"
  serviceName: "bing-svc.dns"
  servicePort: 443
  optionArgs:
    answerCount: "5"
```

### Concurrent Query Configuration

Since search engines limit the number of results per query (e.g. Google limits to 100 results per query), you can get more results by:
1. Setting a smaller count value (e.g. 10)
2. Specifying result offset with start parameter
3. Concurrently initiating multiple query requests, with each request's start value incrementing by count

For example, to get 30 results, configure count=10 and concurrently initiate 3 queries with start values 0,10,20 respectively:

```yaml
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  start: 0
  count: 10
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  start: 10
  count: 10
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  start: 20
  count: 10 
```

Note that excessive concurrency may lead to rate limiting, adjust according to actual situation.

### Elasticsearch Configuration (For Private Knowledge Base Integration)

```yaml
searchFrom:
- type: elasticsearch
  serviceName: "es-svc.static"
  index: "knowledge_base"
  contentField: "content"
  semanticTextField: "semantic_text"
  # username: "elastic"
  # password: "password"
```

### Custom Reference Format

```yaml
needReference: true
referenceFormat: "### Data Sources\n%s"
searchFrom: 
- type: bing
  apiKey: "your-bing-key"
  serviceName: "search-service.dns"
  servicePort: 8080
```

### Custom Reference Location

```yaml
needReference: true
referenceLocation: "tail"  # Add references at the end of the response instead of the beginning
searchFrom:
- type: bing
  apiKey: "your-bing-key"
  serviceName: "search-service.dns"
  servicePort: 8080
```

### Search Rewrite Configuration

```yaml
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
searchRewrite:
  llmServiceName: "llm-svc.dns"
  llmServicePort: 443
  llmApiKey: "your-llm-api-key"
  llmUrl: "https://api.example.com/v1/chat/completions"
  llmModelName: "gpt-3.5-turbo"
  timeoutMillisecond: 15000
```

### On-Demand Plugin Activation Configuration

Configure the plugin to only be enabled when the request contains a `web_search_options` field:

```yaml
defaultEnable: false
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
```

When the request contains a `web_search_options` field, even if it's an empty object (`"web_search_options": {}`), the plugin will be activated.

### Search Context Size Configuration

You can dynamically adjust the number of search queries by adding a `search_context_size` parameter in the `web_search_options` field of the request:

```json
{
  "web_search_options": {
    "search_context_size": "medium"
  }
}
```

The `search_context_size` supports three levels:
- `low`: Generates 1 search query (suitable for simple questions)
- `medium`: Generates 3 search queries (default)
- `high`: Generates 5 search queries (suitable for complex questions)

This setting overrides the `maxCount` value in the configuration, allowing clients to dynamically adjust search depth based on question complexity.

## Notes

1. The prompt template must include `{search_results}` and `{question}` placeholders, optionally use `{cur_date}` to insert current date (format: January 2, 2006)
2. The default template includes search results processing instructions and response specifications, you can use the default template unless there are special needs
3. Multiple search engines query in parallel, total timeout = maximum timeoutMillisecond value among all search engine configurations + processing time
4. Arxiv search doesn't require API key, but you can specify paper category (arxivCategory) to narrow search scope