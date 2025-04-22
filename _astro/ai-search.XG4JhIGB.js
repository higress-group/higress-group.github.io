const e="latest/zh-cn/plugins/ai/api-dev/ai-search.md",s="docs",r="latest/zh-cn/plugins/ai/api-dev/ai-search",a=`
## \u529F\u80FD\u8BF4\u660E

\`ai-search\`\u63D2\u4EF6\u901A\u8FC7\u96C6\u6210\u641C\u7D22\u5F15\u64CE\uFF08Google/Bing/Arxiv/Elasticsearch\u7B49\uFF09\u7684\u5B9E\u65F6\u7ED3\u679C\uFF0C\u589E\u5F3AAI\u6A21\u578B\u7684\u56DE\u7B54\u51C6\u786E\u6027\u548C\u65F6\u6548\u6027\u3002\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5C06\u641C\u7D22\u7ED3\u679C\u6CE8\u5165\u5230\u63D0\u793A\u6A21\u677F\u4E2D\uFF0C\u5E76\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u662F\u5426\u5728\u6700\u7EC8\u56DE\u7B54\u4E2D\u6DFB\u52A0\u5F15\u7528\u6765\u6E90\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`460\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| defaultEnable | bool | \u9009\u586B | true | \u63D2\u4EF6\u529F\u80FD\u9ED8\u8BA4\u662F\u5426\u5F00\u542F\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4EC5\u5F53\u8BF7\u6C42\u4E2D\u5305\u542Bweb_search_options\u5B57\u6BB5\u65F6\u624D\u542F\u7528\u63D2\u4EF6\u529F\u80FD |
| needReference | bool | \u9009\u586B | false | \u662F\u5426\u5728\u56DE\u7B54\u4E2D\u6DFB\u52A0\u5F15\u7528\u6765\u6E90 |
| referenceFormat | string | \u9009\u586B | \`"**References:**\\n%s"\` | \u5F15\u7528\u5185\u5BB9\u683C\u5F0F\uFF0C\u5FC5\u987B\u5305\u542B%s\u5360\u4F4D\u7B26 |
| referenceLocation | string | \u9009\u586B | "head" | \u5F15\u7528\u4F4D\u7F6E\uFF1A"head"\u5728\u56DE\u7B54\u5F00\u5934\uFF0C"tail"\u5728\u56DE\u7B54\u7ED3\u5C3E |
| defaultLang | string | \u9009\u586B | - | \u9ED8\u8BA4\u641C\u7D22\u8BED\u8A00\u4EE3\u7801\uFF08\u5982zh-CN/en-US\uFF09 |
| promptTemplate | string | \u9009\u586B | \u5185\u7F6E\u6A21\u677F | \u63D0\u793A\u6A21\u677F\uFF0C\u5FC5\u987B\u5305\u542B\`{search_results}\`\u548C\`{question}\`\u5360\u4F4D\u7B26 |
| searchFrom | array of object | \u5FC5\u586B | - | \u53C2\u8003\u4E0B\u9762\u641C\u7D22\u5F15\u64CE\u914D\u7F6E\uFF0C\u81F3\u5C11\u914D\u7F6E\u4E00\u4E2A\u5F15\u64CE |
| searchRewrite | object | \u9009\u586B | - | \u641C\u7D22\u91CD\u5199\u914D\u7F6E\uFF0C\u7528\u4E8E\u4F7F\u7528LLM\u670D\u52A1\u4F18\u5316\u641C\u7D22\u67E5\u8BE2 |

## \u641C\u7D22\u91CD\u5199\u8BF4\u660E

\u641C\u7D22\u91CD\u5199\u529F\u80FD\u4F7F\u7528LLM\u670D\u52A1\u5BF9\u7528\u6237\u7684\u539F\u59CB\u67E5\u8BE2\u8FDB\u884C\u5206\u6790\u548C\u4F18\u5316\uFF0C\u53EF\u4EE5\uFF1A
1. \u8BC6\u522B\u7528\u6237\u95EE\u9898\u662F\u5426\u9700\u8981\u67E5\u8BE2\u641C\u7D22\u5F15\u64CE\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u4E0D\u4F1A\u6267\u884C\u641C\u7D22\u589E\u5F3A\u76F8\u5173\u903B\u8F91
2. \u5C06\u7528\u6237\u7684\u81EA\u7136\u8BED\u8A00\u67E5\u8BE2\u8F6C\u6362\u4E3A\u66F4\u9002\u5408\u641C\u7D22\u5F15\u64CE\u7684\u5173\u952E\u8BCD\u7EC4\u5408
3. \u5BF9\u4E8EArxiv\u8BBA\u6587\u641C\u7D22\uFF0C\u81EA\u52A8\u8BC6\u522B\u76F8\u5173\u7684\u8BBA\u6587\u7C7B\u522B\u5E76\u6DFB\u52A0\u7C7B\u522B\u9650\u5B9A
4. \u5BF9\u4E8E\u79C1\u6709\u77E5\u8BC6\u5E93\u641C\u7D22\uFF0C\u5C06\u957F\u67E5\u8BE2\u62C6\u5206\u6210\u591A\u4E2A\u7CBE\u51C6\u7684\u5173\u952E\u8BCD\u7EC4\u5408

\u5F3A\u70C8\u5EFA\u8BAE\u5728\u4F7F\u7528Arxiv\u6216Elasticsearch\u5F15\u64CE\u65F6\u542F\u7528\u6B64\u529F\u80FD\u3002\u5BF9\u4E8EArxiv\u641C\u7D22\uFF0C\u5B83\u80FD\u51C6\u786E\u8BC6\u522B\u8BBA\u6587\u6240\u5C5E\u9886\u57DF\u5E76\u4F18\u5316\u82F1\u6587\u5173\u952E\u8BCD\uFF1B\u5BF9\u4E8E\u79C1\u6709\u77E5\u8BC6\u5E93\u641C\u7D22\uFF0C\u5B83\u80FD\u63D0\u4F9B\u66F4\u7CBE\u51C6\u7684\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u663E\u8457\u63D0\u5347\u641C\u7D22\u6548\u679C\u3002

## \u641C\u7D22\u91CD\u5199\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| llmServiceName | string | \u5FC5\u586B | - | LLM\u670D\u52A1\u540D\u79F0 |
| llmServicePort | number | \u5FC5\u586B | - | LLM\u670D\u52A1\u7AEF\u53E3 |
| llmApiKey | string | \u9009\u586B | - | LLM\u670D\u52A1API\u5BC6\u94A5 |
| llmUrl | string | \u5FC5\u586B | - | LLM\u670D\u52A1API\u5730\u5740 |
| llmModelName | string | \u5FC5\u586B | - | LLM\u6A21\u578B\u540D\u79F0 |
| timeoutMillisecond | number | \u9009\u586B | 30000 | API\u8C03\u7528\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09 |
| maxCount | number | \u9009\u586B | 3 | \u641C\u7D22\u91CD\u5199\u751F\u6210\u7684\u6700\u5927\u67E5\u8BE2\u6B21\u6570 |

## \u641C\u7D22\u5F15\u64CE\u901A\u7528\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| type | string | \u5FC5\u586B | - | \u5F15\u64CE\u7C7B\u578B\uFF08google/bing/arxiv/elasticsearch/quark\uFF09 |
| serviceName | string | \u5FC5\u586B | - | \u540E\u7AEF\u670D\u52A1\u540D\u79F0 |
| servicePort | number | \u5FC5\u586B | - | \u540E\u7AEF\u670D\u52A1\u7AEF\u53E3 |
| apiKey | string | \u5FC5\u586B | - | \u641C\u7D22\u5F15\u64CEAPI\u5BC6\u94A5/Aliyun AccessKey |
| count | number | \u9009\u586B | 10 | \u5355\u6B21\u641C\u7D22\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF |
| start | number | \u9009\u586B | 0 | \u641C\u7D22\u7ED3\u679C\u504F\u79FB\u91CF\uFF08\u4ECE\u7B2Cstart+1\u6761\u7ED3\u679C\u5F00\u59CB\u8FD4\u56DE\uFF09 |
| timeoutMillisecond | number | \u9009\u586B | 5000 | API\u8C03\u7528\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09 |
| optionArgs | map | \u9009\u586B | - | \u641C\u7D22\u5F15\u64CE\u7279\u5B9A\u53C2\u6570\uFF08key-value\u683C\u5F0F\uFF09 |

## Google \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| cx | string | \u5FC5\u586B | - | Google\u81EA\u5B9A\u4E49\u641C\u7D22\u5F15\u64CEID\uFF0C\u7528\u4E8E\u6307\u5B9A\u641C\u7D22\u8303\u56F4 |

## Arxiv \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| arxivCategory | string | \u9009\u586B | - | \u641C\u7D22\u7684\u8BBA\u6587[\u7C7B\u522B](https://arxiv.org/category_taxonomy)\uFF08\u5982cs.AI, cs.CL\u7B49\uFF09 |

## Elasticsearch \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                 |
|------|----------|------|--------|------------------------------------|
| index | string | \u5FC5\u586B   | - | \u8981\u641C\u7D22\u7684 Elasticsearch \u7D22\u5F15\u540D\u79F0            |
| contentField | string | \u5FC5\u586B   | - | \u8981\u67E5\u8BE2\u7684\u5185\u5BB9\u5B57\u6BB5\u540D\u79F0                         |
| semanticTextField | string | \u5FC5\u586B   | - | \u8981\u67E5\u8BE2\u7684 embedding \u5B57\u6BB5\u540D\u79F0                | 
| linkField | string | \u9009\u586B   | - | \u7ED3\u679C\u94FE\u63A5\u5B57\u6BB5\u540D\u79F0\uFF0C\u5F53\u914D\u7F6E \`needReference\` \u65F6\u9700\u8981\u586B\u5199 |
| titleField | string | \u9009\u586B   | - | \u7ED3\u679C\u6807\u9898\u5B57\u6BB5\u540D\u79F0\uFF0C\u5F53\u914D\u7F6E \`needReference\` \u65F6\u9700\u8981\u586B\u5199 |
| username | string | \u9009\u586B   | - | Elasticsearch \u7528\u6237\u540D                  |
| password | string | \u9009\u586B   | - | Elasticsearch \u5BC6\u7801                   |

\u6DF7\u5408\u641C\u7D22\u4E2D\u4F7F\u7528\u7684 [Reciprocal Rank Fusion (RRF)](https://www.elastic.co/guide/en/elasticsearch/reference/8.17/rrf.html) \u67E5\u8BE2\u8981\u6C42 Elasticsearch \u7684\u7248\u672C\u5728 8.8 \u53CA\u4EE5\u4E0A\u3002

\u76EE\u524D\u6587\u6863\u5411\u91CF\u5316\u4F9D\u8D56\u4E8E Elasticsearch \u7684 Embedding \u6A21\u578B\uFF0C\u8BE5\u529F\u80FD\u9700\u8981 Elasticsearch \u4F01\u4E1A\u7248 License\uFF0C\u6216\u53EF\u4F7F\u7528 30 \u5929\u7684 Trial License\u3002\u5B89\u88C5 Elasticsearch \u5185\u7F6E Embedding \u6A21\u578B\u7684\u6B65\u9AA4\u53EF\u53C2\u8003[\u8BE5\u6587\u6863](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser#alternative-download-deploy)\uFF1B\u82E5\u9700\u5B89\u88C5\u7B2C\u4E09\u65B9 Embedding \u6A21\u578B\uFF0C\u53EF\u53C2\u8003[\u8BE5\u6587\u6863](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-text-emb-vector-search-example)\u3002

\u6709\u5173 ai-search \u63D2\u4EF6\u96C6\u6210 Elasticsearch \u7684\u5B8C\u6574\u6559\u7A0B\uFF0C\u8BF7\u53C2\u8003\uFF1A[\u4F7F\u7528 LangChain + Higress + Elasticsearch \u6784\u5EFA RAG \u5E94\u7528](https://cr7258.github.io/blogs/original/2025/15-rag-higress-es-langchain)\u3002

## Quark \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| contentMode | string | \u9009\u586B | "summary" | \u5185\u5BB9\u6A21\u5F0F\uFF1A"summary"\u4F7F\u7528\u6458\u8981(snippet)\uFF0C"full"\u4F7F\u7528\u6B63\u6587(\u4F18\u5148markdownText\uFF0C\u4E3A\u7A7A\u5219\u7528mainText) |

## \u914D\u7F6E\u793A\u4F8B

### \u57FA\u7840\u914D\u7F6E\uFF08\u5355\u641C\u7D22\u5F15\u64CE\uFF09

\`\`\`yaml
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
\`\`\`

### Arxiv\u641C\u7D22\u914D\u7F6E

\`\`\`yaml
searchFrom:
- type: arxiv
  serviceName: "arxiv-svc.dns" 
  servicePort: 443
  arxivCategory: "cs.AI"
  count: 10
\`\`\`


### \u5938\u514B\u641C\u7D22\u914D\u7F6E

\`\`\`yaml
searchFrom:
- type: quark
  serviceName: "quark-svc.dns" 
  servicePort: 443
  apiKey: "quark api key"
  contentMode: "full"  # \u53EF\u9009\u503C\uFF1A"summary"(\u9ED8\u8BA4)\u6216"full"
\`\`\`

### \u591A\u641C\u7D22\u5F15\u64CE\u914D\u7F6E

\`\`\`yaml
defaultLang: "en-US"
promptTemplate: |
  # Search Results:
  {search_results}
  
  # Please answer this question: 
  {question}
searchFrom:
- type: google
  apiKey: "google-key"
  cx: "github-search-id"  # \u4E13\u95E8\u641C\u7D22GitHub\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID
  serviceName: "google-svc.dns"
  servicePort: 443
- type: google
  apiKey: "google-key"
  cx: "news-search-id"    # \u4E13\u95E8\u641C\u7D22Google News\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID 
  serviceName: "google-svc.dns"
  servicePort: 443
- type: bing
  apiKey: "bing-key"
  serviceName: "bing-svc.dns"
  servicePort: 443
  optionArgs:
    answerCount: "5"
\`\`\`

### \u5E76\u53D1\u67E5\u8BE2\u914D\u7F6E

\u7531\u4E8E\u641C\u7D22\u5F15\u64CE\u5BF9\u5355\u6B21\u67E5\u8BE2\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF\u6709\u9650\u5236\uFF08\u5982Google\u9650\u5236\u5355\u6B21\u6700\u591A\u8FD4\u56DE100\u6761\u7ED3\u679C\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u53D6\u66F4\u591A\u7ED3\u679C\uFF1A
1. \u8BBE\u7F6E\u8F83\u5C0F\u7684count\u503C\uFF08\u598210\uFF09
2. \u901A\u8FC7start\u53C2\u6570\u6307\u5B9A\u7ED3\u679C\u504F\u79FB\u91CF
3. \u5E76\u53D1\u53D1\u8D77\u591A\u4E2A\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u7684start\u503C\u6309count\u9012\u589E

\u4F8B\u5982\uFF0C\u8981\u83B7\u53D630\u6761\u7ED3\u679C\uFF0C\u53EF\u4EE5\u914D\u7F6Ecount=10\u5E76\u5E76\u53D1\u53D1\u8D7720\u4E2A\u67E5\u8BE2\uFF0C\u6BCF\u4E2A\u67E5\u8BE2\u7684start\u503C\u5206\u522B\u4E3A0,10,20\uFF1A

\`\`\`yaml
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
\`\`\`

\u6CE8\u610F\uFF0C\u8FC7\u9AD8\u7684\u5E76\u53D1\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9650\u6D41\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u3002

### Elasticsearch \u914D\u7F6E\uFF08\u7528\u4E8E\u5BF9\u63A5\u79C1\u6709\u77E5\u8BC6\u5E93\uFF09

\`\`\`yaml
searchFrom:
- type: elasticsearch
  serviceName: "es-svc.static"
  index: "knowledge_base"
  contentField: "content"
  semanticTextField: "semantic_text"
  # username: "elastic"
  # password: "password"
\`\`\`

### \u81EA\u5B9A\u4E49\u5F15\u7528\u683C\u5F0F

\`\`\`yaml
needReference: true
referenceFormat: "### \u6570\u636E\u6765\u6E90\\n%s"
searchFrom:
- type: bing
  apiKey: "your-bing-key"
  serviceName: "search-service.dns"
  servicePort: 8080
\`\`\`

### \u81EA\u5B9A\u4E49\u5F15\u7528\u4F4D\u7F6E

\`\`\`yaml
needReference: true
referenceLocation: "tail"  # \u5728\u56DE\u7B54\u7ED3\u5C3E\u6DFB\u52A0\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u5F00\u5934
searchFrom:
- type: bing
  apiKey: "your-bing-key"
  serviceName: "search-service.dns"
  servicePort: 8080
\`\`\`

### \u641C\u7D22\u91CD\u5199\u914D\u7F6E

\`\`\`yaml
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
\`\`\`

### \u6309\u9700\u542F\u7528\u63D2\u4EF6\u914D\u7F6E

\u914D\u7F6E\u63D2\u4EF6\u4EC5\u5728\u8BF7\u6C42\u4E2D\u5305\u542B\`web_search_options\`\u5B57\u6BB5\u65F6\u624D\u542F\u7528\uFF1A

\`\`\`yaml
defaultEnable: false
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
\`\`\`

\u8FD9\u79CD\u914D\u7F6E\u53EF\u4EE5\u517C\u5BB9OpenAI\u7684\u641C\u7D22\u6A21\u578B\u534F\u8BAE\u3002\u5F53\u8BF7\u6C42\u4E2D\u5305\u542B\`web_search_options\`\u5B57\u6BB5\u65F6\uFF0C\u5373\u4F7F\u662F\u7A7A\u5BF9\u8C61\uFF08\`"web_search_options": {}\`\uFF09\uFF0C\u63D2\u4EF6\u4E5F\u4F1A\u88AB\u6FC0\u6D3B\u3002

### \u641C\u7D22\u4E0A\u4E0B\u6587\u5927\u5C0F\u914D\u7F6E

\u901A\u8FC7\u5728\u8BF7\u6C42\u4E2D\u7684\`web_search_options\`\u5B57\u6BB5\u4E2D\u6DFB\u52A0\`search_context_size\`\u53C2\u6570\uFF0C\u53EF\u4EE5\u52A8\u6001\u8C03\u6574\u641C\u7D22\u67E5\u8BE2\u6B21\u6570\uFF1A

\`\`\`json
{
  "web_search_options": {
    "search_context_size": "medium"
  }
}
\`\`\`

\`search_context_size\`\u652F\u6301\u4E09\u4E2A\u7EA7\u522B\uFF1A
- \`low\`: \u751F\u62101\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9002\u5408\u7B80\u5355\u95EE\u9898\uFF09
- \`medium\`: \u751F\u62103\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9ED8\u8BA4\u503C\uFF09
- \`high\`: \u751F\u62105\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9002\u5408\u590D\u6742\u95EE\u9898\uFF09

\u8FD9\u4E2A\u8BBE\u7F6E\u4F1A\u8986\u76D6\u914D\u7F6E\u4E2D\u7684\`maxCount\`\u503C\uFF0C\u5141\u8BB8\u5BA2\u6237\u7AEF\u6839\u636E\u95EE\u9898\u590D\u6742\u5EA6\u52A8\u6001\u8C03\u6574\u641C\u7D22\u6DF1\u5EA6\u3002

## \u6CE8\u610F\u4E8B\u9879

1. \u63D0\u793A\u8BCD\u6A21\u7248\u5FC5\u987B\u5305\u542B\`{search_results}\`\u548C\`{question}\`\u5360\u4F4D\u7B26\uFF0C\u53EF\u9009\u4F7F\u7528\`{cur_date}\`\u63D2\u5165\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1A2006\u5E741\u67082\u65E5\uFF09
2. \u9ED8\u8BA4\u6A21\u677F\u5305\u542B\u641C\u7D22\u7ED3\u679C\u5904\u7406\u6307\u5F15\u548C\u56DE\u7B54\u89C4\u8303\uFF0C\u5982\u65E0\u7279\u6B8A\u9700\u8981\u53EF\u4EE5\u76F4\u63A5\u7528\u9ED8\u8BA4\u6A21\u677F\uFF0C\u5426\u5219\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539
3. \u591A\u4E2A\u641C\u7D22\u5F15\u64CE\u662F\u5E76\u884C\u67E5\u8BE2\uFF0C\u603B\u8D85\u65F6\u65F6\u95F4 = \u6240\u6709\u641C\u7D22\u5F15\u64CE\u914D\u7F6E\u4E2D\u6700\u5927timeoutMillisecond\u503C + \u5904\u7406\u65F6\u95F4
4. Arxiv\u641C\u7D22\u4E0D\u9700\u8981API\u5BC6\u94A5\uFF0C\u4F46\u53EF\u4EE5\u6307\u5B9A\u8BBA\u6587\u7C7B\u522B\uFF08arxivCategory\uFF09\u6765\u7F29\u5C0F\u641C\u7D22\u8303\u56F4`,i={title:"AI \u641C\u7D22\u589E\u5F3A",description:"higress \u652F\u6301\u901A\u8FC7\u96C6\u6210\u641C\u7D22\u5F15\u64CE\uFF08Google/Bing/Arxiv/Elasticsearch\u7B49\uFF09\u7684\u5B9E\u65F6\u7ED3\u679C\uFF0C\u589E\u5F3ADeepSeek-R1\u7B49\u6A21\u578B\u7B49\u56DE\u7B54\u51C6\u786E\u6027\u548C\u65F6\u6548\u6027",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai search"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-search.md",rawData:void 0};export{t as _internal,a as body,s as collection,i as data,e as id,r as slug};
