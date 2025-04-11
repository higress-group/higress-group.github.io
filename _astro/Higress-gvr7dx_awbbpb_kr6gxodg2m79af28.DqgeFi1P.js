const e="Higress-gvr7dx_awbbpb_kr6gxodg2m79af28.md",t="blog",s="higress-gvr7dx_awbbpb_kr6gxodg2m79af28",r=`
\u4E4B\u524D\u53D1\u4E86Higress\u652F\u6301DeepSeek\u8054\u7F51\u641C\u7D22\u7684\u6587\u7AE0\uFF0C\u4F46\u91CC\u9762\u6CA1\u6709\u63D0\u4F9BStep-by-Step\u7684\u6307\u5BFC\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u662F\u4E00\u4E2A\u8865\u5145\uFF0C\u5E0C\u671B\u5BF9\u60F3\u4F7F\u7528\u8FD9\u4E2A\u529F\u80FD\u7684\u670B\u53CB\u6709\u5E2E\u52A9\u3002

\u5B89\u88C5 Higress \u7684\u8FC7\u7A0B\u4E0D\u518D\u8D58\u8FF0\uFF0C\u8BA9\u6211\u4EEC\u76F4\u63A5\u4ECE\u4E00\u4E2A\u5B89\u88C5\u597D\u7684 Higress \u5F00\u59CB\u3002

## Step.0 \u914D\u7F6E DeepSeek \u7684 API Key
\u53EF\u80FD\u4F60\u5728\u5B89\u88C5 Higress \u65F6\u6CA1\u6709\u586B\u5199 DeepSeek \u7684 API Key\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5728\u8FD9\u91CC\u8FDB\u884C\u914D\u7F6E

![](/img/1744339799751.png)

## Step.1 \u914D\u7F6E\u641C\u7D22\u5F15\u64CEAPI\u57DF\u540D
\u9996\u5148\u5728 Higress \u63A7\u5236\u53F0\uFF0C\u901A\u8FC7\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u65B9\u5F0F\u914D\u7F6E\u5404\u4E2A\u641C\u7D22\u5F15\u64CE\u7684\u57DF\u540D\uFF1A

google \u641C\u7D22 API \u7684\u57DF\u540D\u662F\uFF1Acustomsearch.googleapis.com

![](/img/1744339803584.png)

bing \u641C\u7D22 API \u7684\u57DF\u540D\u662F\uFF1Aapi.bing.microsoft.com

![](/img/1744339807667.png)

\u5938\u514B\u641C\u7D22 API \u7684\u57DF\u540D\u662F\uFF1A<font style="color:rgb(0, 0, 0);">cloud-iqs.aliyuncs.com</font>

![](/img/1744339811183.png)

Arxiv API \u7684\u57DF\u540D\u662F\uFF1Aexport.arxiv.org

![](/img/1744339814591.png)

\u914D\u7F6E\u597D\u540E\uFF0C\u8FD8\u8981\u7533\u8BF7\u5BF9\u5E94\u7684 API Key\uFF0C\u8FD9\u91CC\u4EE5\u5938\u514B\u641C\u7D22\u7684 API key \u7533\u8BF7\u4E3A\u4F8B\uFF0CGoogle\u548CBing\u4E0D\u505A\u8D58\u8FF0\uFF08\u7F51\u4E0A\u8D44\u6599\u4E5F\u6BD4\u8F83\u591A\uFF09\uFF0CArxiv\u662F\u514D\u8D39\u7684\u4E0D\u9700\u8981 API Key\u3002

\u9996\u5148\u9700\u8981\u6709\u4E2A\u963F\u91CC\u4E91\u8D26\u53F7\uFF0C\u7136\u540E\u5728\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u641C\u7D22 IQS\uFF0C\u8FDB\u5165 IQS \u7684\u63A7\u5236\u53F0\u751F\u6210 API Key \u5373\u53EF\uFF1A

![](/img/1744339817909.png)

\u5177\u4F53\u53EF\u4EE5\u67E5\u770B IQS \u7684\u6587\u6863\uFF1A[https://help.aliyun.com/document_detail/2870227.html](https://help.aliyun.com/document_detail/2870227.html)

## Step.2 \u914D\u7F6EAI Search\u63D2\u4EF6
2.1.0 \u7248\u672C\u4E4B\u524D\u7684 Higress \u9700\u8981\u901A\u8FC7\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\u65B9\u5F0F\uFF0C\u5BFC\u5165 AI Search \u63D2\u4EF6\uFF1A

![](/img/1744339822007.png)

\u6CE8\u610F\u63D2\u4EF6OCI\u955C\u50CF\u5730\u5740\u586B\u5199\uFF1Ahigress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-search:latest

\u53EF\u4EE5\u786E\u4FDD\u4F7F\u7528\u6700\u65B0\u7248\u672C\u7684 AI Search \u63D2\u4EF6\uFF0C\u5982\u679C\u5E0C\u671B\u4F7F\u7528\u7A33\u5B9A\u7248\u672C\uFF0C\u5C06tag\u6539\u4E3A1.0.0\u5373\u53EF

\u6267\u884C\u9636\u6BB5\u9009\u62E9\u9ED8\u8BA4\uFF0C\u6267\u884C\u4F18\u5148\u7EA7\u586B\u5199\u5927\u4E8E100\u7684\u4EFB\u610F\u503C\u5373\u53EF\uFF08\u8FD9\u6837\u8BA9AI Search\u63D2\u4EF6\u5728\u8F6C\u53D1\u5230LLM\u4F9B\u5E94\u5546\u4E4B\u524D\u7684\u65F6\u523B\u6267\u884C\uFF0C\u5BF9prompt\u8FDB\u884C\u4FEE\u6539\uFF09

\u6DFB\u52A0\u5B8C\u63D2\u4EF6\u540E\uFF0C\u8FDB\u884C\u76F8\u5E94\u914D\u7F6E\uFF1A

![](/img/1744339826230.png)

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
needReference: true # \u4E3A true \u65F6\u4F1A\u5728\u7ED3\u679C\u4E2D\u9644\u5E26\u7F51\u9875\u5F15\u7528\u4FE1\u606F
promptTemplate: | # \u53EF\u4EE5\u4E0D\u7528\u914D\u7F6E\u6A21\u7248\uFF0C\u4F7F\u7528\u5185\u7F6E\u7684\u4E5F\u53EF\u4EE5
  # The following content is based on search results from the user-submitted query:
  {search_results}
  In the search results I provide, each result is formatted as [webpage X begin]...[webpage X end], where X represents the index number of each article. Please cite the context at the end of the sentences where appropriate. Use a format of citation numbe] in the answer for corresponding parts. If a sentence is derived from multiple contexts, list all relevant citation numbers, such as [3][5], and ensure not to cluster the citations at the end; instead, list them in the corresponding parts of the answer.
  When responding, please pay attention to the following:
  - Today\u2019s date in Beijing time is: {cur_date}.
  - Not all content from the search results is closely related to the user's question. You need to discern and filter the search results based on the question.
  - For listing-type questions (e.g., listing all flight information), try to keep the answer to within 10 points and inform the user that they can check the search source for complete information. Prioritize providing the most comprehensive and relevantms; do not volunteer information missing from the search results unless necessary.
  - For creative questions (e.g., writing a paper), be sure to cite relevant references in the body paragraphs, such as [3][5], rather than only at the end of the article. You need to interpret and summarize the user's topic requirements, choose the apprate format, fully utilize search results, extract crucial information, and generate answers that meet user requirements, with deep thought, creativity, and professionalism. The length of your creation should be extended as much as possible, hypothesize tser's intent for each point, providing as many angles as possible, ensuring substantial information, and detailed discussion.
  - If the response is lengthy, try to structure the summary into paragraphs. If responding with points, try to keep it within 5 points and consolidate related content.
  - For objective Q&A, if the answer is very short, you can appropriately add one or two related sentences to enrich the content.
  - You need to choose a suitable and aesthetically pleasing response format based on the user\u2019s requirements and answer content to ensure high readability.
  - Your answers should synthesize multiple relevant web pages to respond and should not repeatedly quote a single web page.
  - Unless the user requests otherwise, respond in the same language the question was asked.
   # The user\u2019s message is:
  {question}
searchFrom: # \u4E0B\u9762\u662F\u914D\u7F6E\u4E00\u4E2A\u641C\u7D22\u5F15\u64CE\u9009\u62E9\u5217\u8868\uFF0C\u53EF\u4EE5\u4EC5\u914D\u7F6E\u4F60\u9700\u8981\u7684\u5F15\u64CE\uFF0C\u4E0D\u7528\u90FD\u914D\u4E0A
- type: quark
  apiKey: "your-quark-api-key" #  \u9700\u8981\u4FEE\u6539\u6210\u4F60\u7684key
  serviceName: "quark.dns"
  servicePort: 443
- type: google
  apiKey: "your-google-api-key" #  \u9700\u8981\u4FEE\u6539\u6210\u4F60\u7684key
  cx: "your-search-engine-id" #  \u9700\u8981\u4FEE\u6539\u6210\u4F60\u7684engine id
  serviceName: "google.dns"
  servicePort: 443
- type: bing
  apiKey: "bing-key" #  \u9700\u8981\u4FEE\u6539\u6210\u4F60\u7684key
  serviceName: "bing.dns"
  servicePort: 443
- type: arxiv
  serviceName: "arxiv.dns"
  servicePort: 443
searchRewrite:
  llmApiKey: "your-deepseek-api-key" #  \u9700\u8981\u4FEE\u6539\u6210\u4F60\u7684key
  llmModelName: "deepseek-chat"
  llmServiceName: "llm-deepseek.internal.dns"
  llmServicePort: 443
  llmUrl: "https://api.deepseek.com/chat/completions"
\`\`\`

## Step.3 \u76F4\u63A5\u8BF7\u6C42\u8FDB\u884C\u6D4B\u8BD5\u5427
\u4E0B\u9762\u662F\u4F7F\u7528 lobechat \u5BF9\u63A5 higress \u7684\u6548\u679C\uFF1A

![](/img/1744339830035.png)

![](/img/1744339833986.png)




`,i={title:"\u6559\u7A0B\uFF1A\u4F7F\u7528\u5F00\u6E90Higress\u5B9E\u73B0DeepSeek\u8054\u7F51\u641C\u7D22",description:"\u6559\u7A0B\uFF1A\u4F7F\u7528\u5F00\u6E90Higress\u5B9E\u73B0DeepSeek\u8054\u7F51\u641C\u7D22",keywords:["Higress"],date:"2025-03-10",category:"article"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_kr6gxodg2m79af28.md",rawData:void 0};export{n as _internal,r as body,t as collection,i as data,e as id,s as slug};
