import{c as n,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as p,m as h,u,__tla as g}from"./constant.D5oro7t_.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let e,c,d,o,i,r,a,v=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>LLM \u7ED3\u679C\u7F13\u5B58\u63D2\u4EF6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E openai \u534F\u8BAE\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u540C\u65F6\u652F\u6301\u6D41\u5F0F\u548C\u975E\u6D41\u5F0F\u54CD\u5E94\u7684\u7F13\u5B58\u3002</p>
<p><strong>\u63D0\u793A</strong></p>
<p>\u643A\u5E26\u8BF7\u6C42\u5934<code dir="auto">x-higress-skip-ai-cache: on</code>\u65F6\uFF0C\u5F53\u524D\u8BF7\u6C42\u5C06\u4E0D\u4F1A\u4F7F\u7528\u7F13\u5B58\u4E2D\u7684\u5185\u5BB9\uFF0C\u800C\u662F\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\uFF0C\u540C\u65F6\u4E5F\u4E0D\u4F1A\u7F13\u5B58\u8BE5\u8BF7\u6C42\u8FD4\u56DE\u54CD\u5E94\u7684\u5185\u5BB9</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">10</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>
<p>\u914D\u7F6E\u5206\u4E3A 3 \u4E2A\u90E8\u5206\uFF1A\u5411\u91CF\u6570\u636E\u5E93\uFF08vector\uFF09\uFF1B\u6587\u672C\u5411\u91CF\u5316\u63A5\u53E3\uFF08embedding\uFF09\uFF1B\u7F13\u5B58\u6570\u636E\u5E93\uFF08cache\uFF09\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u7EC6\u7C92\u5EA6\u7684 LLM \u8BF7\u6C42/\u54CD\u5E94\u63D0\u53D6\u53C2\u6570\u914D\u7F6E\u7B49\u3002</p>
<h2 id="\u914D\u7F6E\u8BF4\u660E-1">\u914D\u7F6E\u8BF4\u660E</h2>
<p>\u672C\u63D2\u4EF6\u540C\u65F6\u652F\u6301\u57FA\u4E8E\u5411\u91CF\u6570\u636E\u5E93\u7684\u8BED\u4E49\u5316\u7F13\u5B58\u548C\u57FA\u4E8E\u5B57\u7B26\u4E32\u5339\u914D\u7684\u7F13\u5B58\u65B9\u6CD5\uFF0C\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86\u5411\u91CF\u6570\u636E\u5E93\u548C\u7F13\u5B58\u6570\u636E\u5E93\uFF0C\u4F18\u5148\u4F7F\u7528\u7F13\u5B58\u6570\u636E\u5E93\uFF0C\u672A\u547D\u4E2D\u573A\u666F\u4E0B\u4F7F\u7528\u5411\u91CF\u6570\u636E\u5E93\u80FD\u529B\u3002</p>
<p><em>Note</em>: \u5411\u91CF\u6570\u636E\u5E93(vector) \u548C \u7F13\u5B58\u6570\u636E\u5E93(cache) \u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A\uFF0C\u5426\u5219\u672C\u63D2\u4EF6\u65E0\u6CD5\u63D0\u4F9B\u7F13\u5B58\u670D\u52A1\u3002</p>















































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>vector</td><td>string</td><td>optional</td><td>""</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u63D0\u4F9B\u8005\u7C7B\u578B\uFF0C\u4F8B\u5982 dashvector</td></tr><tr><td>embedding</td><td>string</td><td>optional</td><td>""</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 dashscope</td></tr><tr><td>cache</td><td>string</td><td>optional</td><td>""</td><td>\u7F13\u5B58\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 redis</td></tr><tr><td>cacheKeyStrategy</td><td>string</td><td>optional</td><td>\u201DlastQuestion\u201D</td><td>\u51B3\u5B9A\u5982\u4F55\u6839\u636E\u5386\u53F2\u95EE\u9898\u751F\u6210\u7F13\u5B58\u952E\u7684\u7B56\u7565\u3002\u53EF\u9009\u503C: \u201ClastQuestion\u201D (\u4F7F\u7528\u6700\u540E\u4E00\u4E2A\u95EE\u9898), \u201CallQuestions\u201D (\u62FC\u63A5\u6240\u6709\u95EE\u9898) \u6216 \u201Cdisabled\u201D (\u7981\u7528\u7F13\u5B58)</td></tr><tr><td>enableSemanticCache</td><td>bool</td><td>optional</td><td>true</td><td>\u662F\u5426\u542F\u7528\u8BED\u4E49\u5316\u7F13\u5B58, \u82E5\u4E0D\u542F\u7528\uFF0C\u5219\u4F7F\u7528\u5B57\u7B26\u4E32\u5339\u914D\u7684\u65B9\u5F0F\u6765\u67E5\u627E\u7F13\u5B58\uFF0C\u6B64\u65F6\u9700\u8981\u914D\u7F6Ecache\u670D\u52A1</td></tr></tbody></table>
<p>\u6839\u636E\u662F\u5426\u9700\u8981\u542F\u7528\u8BED\u4E49\u7F13\u5B58\uFF0C\u53EF\u4EE5\u53EA\u914D\u7F6E\u7EC4\u4EF6\u7684\u7EC4\u5408\u4E3A:</p>
<ol>
<li><code dir="auto">cache</code>: \u4EC5\u542F\u7528\u5B57\u7B26\u4E32\u5339\u914D\u7F13\u5B58</li>
<li><code dir="auto">vector (+ embedding)</code>: \u542F\u7528\u8BED\u4E49\u5316\u7F13\u5B58, \u5176\u4E2D\u82E5 <code dir="auto">vector</code> \u672A\u63D0\u4F9B\u5B57\u7B26\u4E32\u8868\u5F81\u670D\u52A1\uFF0C\u5219\u9700\u8981\u81EA\u884C\u914D\u7F6E <code dir="auto">embedding</code> \u670D\u52A1</li>
<li><code dir="auto">vector (+ embedding) + cache</code>: \u542F\u7528\u8BED\u4E49\u5316\u7F13\u5B58\u5E76\u7528\u7F13\u5B58\u670D\u52A1\u5B58\u50A8LLM\u54CD\u5E94\u4EE5\u52A0\u901F</li>
</ol>
<p>\u6CE8\u610F\u82E5\u4E0D\u914D\u7F6E\u76F8\u5173\u7EC4\u4EF6\uFF0C\u5219\u53EF\u4EE5\u5FFD\u7565\u76F8\u5E94\u7EC4\u4EF6\u7684<code dir="auto">required</code>\u5B57\u6BB5\u3002</p>
<h2 id="\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1vector">\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\uFF08vector\uFF09</h2>


















































































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>vector.type</td><td>string</td><td>required</td><td>""</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u63D0\u4F9B\u8005\u7C7B\u578B\uFF0C\u4F8B\u5982 dashvector</td></tr><tr><td>vector.serviceName</td><td>string</td><td>required</td><td>""</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u540D\u79F0</td></tr><tr><td>vector.serviceHost</td><td>string</td><td>required</td><td>""</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u57DF\u540D</td></tr><tr><td>vector.servicePort</td><td>int64</td><td>optional</td><td>443</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>vector.apiKey</td><td>string</td><td>optional</td><td>""</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1 API Key</td></tr><tr><td>vector.topK</td><td>int</td><td>optional</td><td>1</td><td>\u8FD4\u56DETopK\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E3A 1</td></tr><tr><td>vector.timeout</td><td>uint32</td><td>optional</td><td>10000</td><td>\u8BF7\u6C42\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u662F10000\uFF0C\u537310\u79D2</td></tr><tr><td>vector.collectionID</td><td>string</td><td>optional</td><td>""</td><td>\u5411\u91CF\u5B58\u50A8\u670D\u52A1 Collection ID</td></tr><tr><td>vector.threshold</td><td>float64</td><td>optional</td><td>1000</td><td>\u5411\u91CF\u76F8\u4F3C\u5EA6\u5EA6\u91CF\u9608\u503C</td></tr><tr><td>vector.thresholdRelation</td><td>string</td><td>optional</td><td>lt</td><td>\u76F8\u4F3C\u5EA6\u5EA6\u91CF\u65B9\u5F0F\u6709 <code dir="auto">Cosine</code>, <code dir="auto">DotProduct</code>, <code dir="auto">Euclidean</code> \u7B49\uFF0C\u524D\u4E24\u8005\u503C\u8D8A\u5927\u76F8\u4F3C\u5EA6\u8D8A\u9AD8\uFF0C\u540E\u8005\u503C\u8D8A\u5C0F\u76F8\u4F3C\u5EA6\u8D8A\u9AD8\u3002\u5BF9\u4E8E <code dir="auto">Cosine</code> \u548C <code dir="auto">DotProduct</code> \u9009\u62E9 <code dir="auto">gt</code>\uFF0C\u5BF9\u4E8E <code dir="auto">Euclidean</code> \u5219\u9009\u62E9 <code dir="auto">lt</code>\u3002\u9ED8\u8BA4\u4E3A <code dir="auto">lt</code>\uFF0C\u6240\u6709\u6761\u4EF6\u5305\u62EC <code dir="auto">lt</code> (less than\uFF0C\u5C0F\u4E8E)\u3001<code dir="auto">lte</code> (less than or equal to\uFF0C\u5C0F\u7B49\u4E8E)\u3001<code dir="auto">gt</code> (greater than\uFF0C\u5927\u4E8E)\u3001<code dir="auto">gte</code> (greater than or equal to\uFF0C\u5927\u7B49\u4E8E)</td></tr></tbody></table>
<h2 id="\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1embedding">\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF08embedding\uFF09</h2>





























































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>embedding.type</td><td>string</td><td>required</td><td>""</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 dashscope</td></tr><tr><td>embedding.serviceName</td><td>string</td><td>required</td><td>""</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u540D\u79F0</td></tr><tr><td>embedding.serviceHost</td><td>string</td><td>optional</td><td>""</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u57DF\u540D</td></tr><tr><td>embedding.servicePort</td><td>int64</td><td>optional</td><td>443</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>embedding.apiKey</td><td>string</td><td>optional</td><td>""</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7684 API Key</td></tr><tr><td>embedding.timeout</td><td>uint32</td><td>optional</td><td>10000</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u662F10000\uFF0C\u537310\u79D2</td></tr><tr><td>embedding.model</td><td>string</td><td>optional</td><td>""</td><td>\u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7684\u6A21\u578B\u540D\u79F0</td></tr></tbody></table>
<h2 id="\u7F13\u5B58\u670D\u52A1cache">\u7F13\u5B58\u670D\u52A1\uFF08cache\uFF09</h2>











































































<table><thead><tr><th>cache.type</th><th>string</th><th>required</th><th>""</th><th>\u7F13\u5B58\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 redis</th></tr></thead><tbody><tr><td>cache.serviceName</td><td>string</td><td>required</td><td>""</td><td>\u7F13\u5B58\u670D\u52A1\u540D\u79F0</td></tr><tr><td>cache.serviceHost</td><td>string</td><td>required</td><td>""</td><td>\u7F13\u5B58\u670D\u52A1\u57DF\u540D</td></tr><tr><td>cache.servicePort</td><td>int64</td><td>optional</td><td>6379</td><td>\u7F13\u5B58\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>cache.username</td><td>string</td><td>optional</td><td>""</td><td>\u7F13\u5B58\u670D\u52A1\u7528\u6237\u540D</td></tr><tr><td>cache.password</td><td>string</td><td>optional</td><td>""</td><td>\u7F13\u5B58\u670D\u52A1\u5BC6\u7801</td></tr><tr><td>cache.timeout</td><td>uint32</td><td>optional</td><td>10000</td><td>\u7F13\u5B58\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u662F10000\uFF0C\u537310\u79D2</td></tr><tr><td>cache.cacheTTL</td><td>int</td><td>optional</td><td>0</td><td>\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u662F 0\uFF0C\u5373 \u6C38\u4E0D\u8FC7\u671F</td></tr><tr><td>cache.cacheKeyPrefix</td><td>string</td><td>optional</td><td>\u201Dhigress-ai-cache:\u201C</td><td>\u7F13\u5B58 Key \u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u503C\u4E3A \u201Chigress-ai-cache:\u201C</td></tr><tr><td>cache.database</td><td>int</td><td>optional</td><td>0</td><td>\u4F7F\u7528\u7684\u6570\u636E\u5E93id\uFF0C\u4EC5\u9650redis\uFF0C\u4F8B\u5982\u914D\u7F6E\u4E3A1\uFF0C\u5BF9\u5E94<code dir="auto">SELECT 1</code></td></tr></tbody></table>
<h2 id="\u5176\u4ED6\u914D\u7F6E">\u5176\u4ED6\u914D\u7F6E</h2>






















































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>cacheKeyFrom</td><td>string</td><td>optional</td><td>\u201D<a href="mailto:messages.@reverse.0.content" referrerpolicy="unsafe-url">messages.@reverse.0.content</a>\u201D</td><td>\u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>cacheValueFrom</td><td>string</td><td>optional</td><td>\u201Dchoices.0.message.content\u201D</td><td>\u4ECE\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>cacheStreamValueFrom</td><td>string</td><td>optional</td><td>\u201Dchoices.0.delta.content\u201D</td><td>\u4ECE\u6D41\u5F0F\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>cacheToolCallsFrom</td><td>string</td><td>optional</td><td>\u201Dchoices.0.delta.content.tool_calls\u201D</td><td>\u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>responseTemplate</td><td>string</td><td>optional</td><td><code dir="auto">{"id":"ai-cache.hit","choices":[{"index":0,"message":{"role":"assistant","content":%s},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}</code></td><td>\u8FD4\u56DE HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206</td></tr><tr><td>streamResponseTemplate</td><td>string</td><td>optional</td><td><code dir="auto">data:{"id":"ai-cache.hit","choices":[{"index":0,"delta":{"role":"assistant","content":%s},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n</code></td><td>\u8FD4\u56DE\u6D41\u5F0F HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206</td></tr></tbody></table>
<h2 id="\u6587\u672C\u5411\u91CF\u5316\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E">\u6587\u672C\u5411\u91CF\u5316\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E</h2>
<h3 id="openai">OpenAI</h3>
<p>OpenAI \u6240\u5BF9\u5E94\u7684 <code dir="auto">embedding.type</code> \u4E3A <code dir="auto">openai</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA <a href="https://platform.openai.com/settings/organization/api-keys" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">API Key</a>\uFF0C\u5E76\u5C06\u5176\u586B\u5165<code dir="auto">embedding.apiKey</code>\uFF0C\u4E00\u4E2A API Key \u7684\u793A\u4F8B\u4E3A<code dir="auto"> sk-xxxxxxx</code>\u3002</p>
<h3 id="ollama">Ollama</h3>
<p>Ollama \u6240\u5BF9\u5E94\u7684 <code dir="auto">embedding.type</code> \u4E3A <code dir="auto">ollama</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h3 id="\u8BAF\u98DE\u661F\u706B">\u8BAF\u98DE\u661F\u706B</h3>
<p>\u8BAF\u98DE\u661F\u706B \u6240\u5BF9\u5E94\u7684 <code dir="auto">embedding.type</code> \u4E3A <code dir="auto">xfyun</code>\u3002\u5B83\u9700\u8981\u63D0\u524D\u521B\u5EFA<a href="https://console.xfyun.cn/services/emb" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5E94\u7528</a>\uFF0C\u83B7\u53D6<code dir="auto">APPID</code>  \u3001<code dir="auto">APISecret</code>\u548C<code dir="auto">APIKey</code>\uFF0C\u5E76\u5C06<code dir="auto">APIKey</code>\u586B\u5165<code dir="auto">embedding.apiKey</code>\u4E2D\u3002</p>
<p>\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>





























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th><th>\u586B\u5199\u503C</th></tr></thead><tbody><tr><td><code dir="auto">embedding.appId</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5E94\u7528 ID</td><td>\u83B7\u53D6\u7684 APPID</td></tr><tr><td><code dir="auto">embedding.apiSecret</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8C03\u7528 API \u6240\u9700 Secret</td><td>\u83B7\u53D6\u7684 APISecret</td></tr></tbody></table>
<h3 id="textln">Textln</h3>
<p>Textln \u6240\u5BF9\u5E94\u7684 <code dir="auto">embedding.type</code> \u4E3A <code dir="auto">textln</code>\u3002\u5B83\u9700\u8981\u63D0\u524D\u83B7\u53D6<a href="https://www.textin.com/document/acge_text_embedding" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><code dir="auto">app-id</code> \u548C<code dir="auto">secret-code</code></a>\u3002</p>
<p>\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>





































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th><th>\u586B\u5199\u503C</th></tr></thead><tbody><tr><td><code dir="auto">embedding.textinAppId</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5E94\u7528 ID</td><td>\u83B7\u53D6\u7684 app-id</td></tr><tr><td><code dir="auto">embedding.textinSecretCode</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8C03\u7528 API \u6240\u9700 Secret</td><td>\u83B7\u53D6\u7684 secret-code</td></tr><tr><td><code dir="auto">embedding.textinMatryoshkaDim</code></td><td>int</td><td>\u5FC5\u586B</td><td>-</td><td>\u8FD4\u56DE\u7684\u5355\u4E2A\u5411\u91CF\u957F\u5EA6</td><td></td></tr></tbody></table>
<h3 id="hugging-face">Hugging Face</h3>
<p>Hugging Face \u6240\u5BF9\u5E94\u7684 <code dir="auto">embedding.type</code> \u4E3A <code dir="auto">huggingface</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA <a href="https://huggingface.co/blog/getting-started-with-embeddings" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">hf_token</a>\uFF0C\u5E76\u5C06\u5176\u586B\u5165<code dir="auto">embedding.apiKey</code>\uFF0C\u4E00\u4E2A hf_token \u7684\u793A\u4F8B\u4E3A<code dir="auto"> hf_xxxxxxx</code>\u3002</p>
<p><code dir="auto">embedding.model</code>\u9ED8\u8BA4\u6307\u5B9A\u4E3A<code dir="auto">sentence-transformers/all-MiniLM-L6-v2</code></p>
<h3 id="cohere">Cohere</h3>
<p>Cohere \u6240\u5BF9\u5E94\u7684 <code dir="auto">embedding.type</code> \u4E3A <code dir="auto">cohere</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA <a href="https://docs.cohere.com/reference/embed" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">API Key</a>\uFF0C\u5E76\u5C06\u5176\u586B\u5165<code dir="auto">embedding.apiKey</code>\u3002</p>
<h2 id="\u5411\u91CF\u6570\u636E\u5E93\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E">\u5411\u91CF\u6570\u636E\u5E93\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E</h2>
<h3 id="chroma">Chroma</h3>
<p>Chroma \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">chroma</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection ID \u81F3\u914D\u7F6E\u9879 <code dir="auto">vector.collectionID</code>\uFF0C\u4E00\u4E2A Collection ID \u7684\u793A\u4F8B\u4E3A <code dir="auto">52bbb8b3-724c-477b-a4ce-d5b578214612</code>\u3002</p>
<h3 id="dashvector">DashVector</h3>
<p>DashVector \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">dashvector</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 <code dir="auto">Collection \u540D\u79F0</code> \u81F3\u914D\u7F6E\u9879 <code dir="auto">vector.collectionID</code>\u3002</p>
<h3 id="elasticsearch">ElasticSearch</h3>
<p>ElasticSearch \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">elasticsearch</code>\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Index \u5E76\u586B\u5199 Index Name \u81F3\u914D\u7F6E\u9879 <code dir="auto">vector.collectionID</code> \u3002</p>
<p>\u5F53\u524D\u4F9D\u8D56\u4E8E <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">KNN</a> \u65B9\u6CD5\uFF0C\u8BF7\u4FDD\u8BC1 ES \u7248\u672C\u652F\u6301 <code dir="auto">KNN</code>\uFF0C\u5F53\u524D\u5DF2\u5728 <code dir="auto">8.16</code> \u7248\u672C\u6D4B\u8BD5\u3002</p>
<p>\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">vector.esUsername</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>ElasticSearch \u7528\u6237\u540D</td></tr><tr><td><code dir="auto">vector.esPassword</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>ElasticSearch \u5BC6\u7801</td></tr></tbody></table>
<p><code dir="auto">vector.esUsername</code> \u548C <code dir="auto">vector.esPassword</code> \u7528\u4E8E Basic \u8BA4\u8BC1\u3002\u540C\u65F6\u4E5F\u652F\u6301 Api Key \u8BA4\u8BC1\uFF0C\u5F53\u586B\u5199\u4E86 <code dir="auto">vector.apiKey</code> \u65F6\uFF0C\u5219\u542F\u7528 Api Key \u8BA4\u8BC1\uFF0C\u5982\u679C\u4F7F\u7528 SaaS \u7248\u672C\u9700\u8981\u586B\u5199 <code dir="auto">encoded</code> \u7684\u503C\u3002</p>
<h3 id="milvus">Milvus</h3>
<p>Milvus \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">milvus</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection Name \u81F3\u914D\u7F6E\u9879 <code dir="auto">vector.collectionID</code>\u3002</p>
<h3 id="pinecone">Pinecone</h3>
<p>Pinecone \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">pinecone</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Index\uFF0C\u5E76\u586B\u5199 Index \u8BBF\u95EE\u57DF\u540D\u81F3 <code dir="auto">vector.serviceHost</code>\u3002</p>
<p>Pinecone \u4E2D\u7684 <code dir="auto">Namespace</code> \u53C2\u6570\u901A\u8FC7\u63D2\u4EF6\u7684 <code dir="auto">vector.collectionID</code> \u8FDB\u884C\u914D\u7F6E\uFF0C\u5982\u679C\u4E0D\u586B\u5199 <code dir="auto">vector.collectionID</code>\uFF0C\u5219\u9ED8\u8BA4\u4E3A Default Namespace\u3002</p>
<h3 id="qdrant">Qdrant</h3>
<p>Qdrant \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">qdrant</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection Name \u81F3\u914D\u7F6E\u9879 <code dir="auto">vector.collectionID</code>\u3002</p>
<h3 id="weaviate">Weaviate</h3>
<p>Weaviate \u6240\u5BF9\u5E94\u7684 <code dir="auto">vector.type</code> \u4E3A <code dir="auto">weaviate</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002
\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection Name \u81F3\u914D\u7F6E\u9879 <code dir="auto">vector.collectionID</code>\u3002</p>
<p>\u9700\u8981\u6CE8\u610F\u7684\u662F Weaviate \u4F1A\u8BBE\u7F6E\u9996\u5B57\u6BCD\u81EA\u52A8\u5927\u5199\uFF0C\u5728\u586B\u5199\u914D\u7F6E <code dir="auto">collectionID</code> \u7684\u65F6\u5019\u9700\u8981\u5C06\u9996\u5B57\u6BCD\u8BBE\u7F6E\u4E3A\u5927\u5199\u3002</p>
<p>\u5982\u679C\u4F7F\u7528 SaaS \u9700\u8981\u586B\u5199 <code dir="auto">vector.serviceHost</code> \u53C2\u6570\u3002</p>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u57FA\u7840\u914D\u7F6E">\u57FA\u7840\u914D\u7F6E</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">embedding</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my_dashscope.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">Your Key</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">vector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashvector</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my_dashvector.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">collectionID</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">Your Collection ID</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceDomain</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">Your domain</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">Your key</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">cache</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my_redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="embedding:\x7F  type: dashscope\x7F  serviceName: my_dashscope.dns\x7F  apiKey: [Your Key]\x7F\x7Fvector:\x7F  type: dashvector\x7F  serviceName: my_dashvector.dns\x7F  collectionID: [Your Collection ID]\x7F  serviceDomain: [Your domain]\x7F  apiKey: [Your key]\x7F\x7Fcache:\x7F  type: redis\x7F  serviceName: my_redis.dns\x7F  servicePort: 6379\x7F  timeout: 100"><div></div></button></div></figure></div>
<p>\u65E7\u7248\u672C\u914D\u7F6E\u517C\u5BB9</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my_redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">database</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis:\x7F  serviceName: my_redis.dns\x7F  servicePort: 6379\x7F  timeout: 100\x7F  database: 1"><div></div></button></div></figure></div>
<h2 id="\u8FDB\u9636\u7528\u6CD5">\u8FDB\u9636\u7528\u6CD5</h2>
<p>\u5F53\u524D\u9ED8\u8BA4\u7684\u7F13\u5B58 key \u662F\u57FA\u4E8E GJSON PATH \u7684\u8868\u8FBE\u5F0F\uFF1A<code dir="auto">messages.@reverse.0.content</code> \u63D0\u53D6\uFF0C\u542B\u4E49\u662F\u628A messages \u6570\u7EC4\u53CD\u8F6C\u540E\u53D6\u7B2C\u4E00\u9879\u7684 content\uFF1B</p>
<p>GJSON PATH \u652F\u6301\u6761\u4EF6\u5224\u65AD\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u6700\u540E\u4E00\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A <code dir="auto">messages.@reverse.#(role=="user").content</code>\uFF1B</p>
<p>\u5982\u679C\u5E0C\u671B\u5C06\u6240\u6709 role \u4E3A user \u7684 content \u62FC\u6210\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A<code dir="auto">messages.@reverse.#(role=="user")#.content</code>\uFF1B</p>
<p>\u8FD8\u53EF\u4EE5\u652F\u6301\u7BA1\u9053\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u5230\u6570\u7B2C\u4E8C\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A<code dir="auto">messages.@reverse.#(role=="user")#.content|1</code>\u3002</p>
<p>\u66F4\u591A\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B98\u65B9\u6587\u6863</a>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="https://gjson.dev/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Playground</a> \u8FDB\u884C\u8BED\u6CD5\u6D4B\u8BD5\u3002</p>
<h2 id="\u5E38\u89C1\u95EE\u9898">\u5E38\u89C1\u95EE\u9898</h2>
<ol>
<li>\u5982\u679C\u8FD4\u56DE\u7684\u9519\u8BEF\u4E3A <code dir="auto">error status returned by host: bad argument</code>\uFF0C\u8BF7\u68C0\u67E5<code dir="auto">serviceName</code>\u662F\u5426\u6B63\u786E\u5305\u542B\u4E86\u670D\u52A1\u7684\u7C7B\u578B\u540E\u7F00(.dns\u7B49)\u3002</li>
</ol>`,o={title:"AI \u7F13\u5B58",keywords:["higress","ai cache"],description:"AI \u7F13\u5B58\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},d="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-cache.md",a=void 0,r=function(){return`
## \u529F\u80FD\u8BF4\u660E

LLM \u7ED3\u679C\u7F13\u5B58\u63D2\u4EF6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E openai \u534F\u8BAE\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u540C\u65F6\u652F\u6301\u6D41\u5F0F\u548C\u975E\u6D41\u5F0F\u54CD\u5E94\u7684\u7F13\u5B58\u3002

**\u63D0\u793A**

\u643A\u5E26\u8BF7\u6C42\u5934\`x-higress-skip-ai-cache: on\`\u65F6\uFF0C\u5F53\u524D\u8BF7\u6C42\u5C06\u4E0D\u4F1A\u4F7F\u7528\u7F13\u5B58\u4E2D\u7684\u5185\u5BB9\uFF0C\u800C\u662F\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\uFF0C\u540C\u65F6\u4E5F\u4E0D\u4F1A\u7F13\u5B58\u8BE5\u8BF7\u6C42\u8FD4\u56DE\u54CD\u5E94\u7684\u5185\u5BB9


## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`10\`

## \u914D\u7F6E\u8BF4\u660E
\u914D\u7F6E\u5206\u4E3A 3 \u4E2A\u90E8\u5206\uFF1A\u5411\u91CF\u6570\u636E\u5E93\uFF08vector\uFF09\uFF1B\u6587\u672C\u5411\u91CF\u5316\u63A5\u53E3\uFF08embedding\uFF09\uFF1B\u7F13\u5B58\u6570\u636E\u5E93\uFF08cache\uFF09\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u7EC6\u7C92\u5EA6\u7684 LLM \u8BF7\u6C42/\u54CD\u5E94\u63D0\u53D6\u53C2\u6570\u914D\u7F6E\u7B49\u3002

## \u914D\u7F6E\u8BF4\u660E

\u672C\u63D2\u4EF6\u540C\u65F6\u652F\u6301\u57FA\u4E8E\u5411\u91CF\u6570\u636E\u5E93\u7684\u8BED\u4E49\u5316\u7F13\u5B58\u548C\u57FA\u4E8E\u5B57\u7B26\u4E32\u5339\u914D\u7684\u7F13\u5B58\u65B9\u6CD5\uFF0C\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86\u5411\u91CF\u6570\u636E\u5E93\u548C\u7F13\u5B58\u6570\u636E\u5E93\uFF0C\u4F18\u5148\u4F7F\u7528\u7F13\u5B58\u6570\u636E\u5E93\uFF0C\u672A\u547D\u4E2D\u573A\u666F\u4E0B\u4F7F\u7528\u5411\u91CF\u6570\u636E\u5E93\u80FD\u529B\u3002

*Note*: \u5411\u91CF\u6570\u636E\u5E93(vector) \u548C \u7F13\u5B58\u6570\u636E\u5E93(cache) \u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A\uFF0C\u5426\u5219\u672C\u63D2\u4EF6\u65E0\u6CD5\u63D0\u4F9B\u7F13\u5B58\u670D\u52A1\u3002

| Name | Type | Requirement | Default | Description |
| --- | --- | --- | --- | --- |
| vector | string | optional | "" | \u5411\u91CF\u5B58\u50A8\u670D\u52A1\u63D0\u4F9B\u8005\u7C7B\u578B\uFF0C\u4F8B\u5982 dashvector |
| embedding | string | optional | "" | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 dashscope |
| cache | string | optional | "" | \u7F13\u5B58\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 redis |
| cacheKeyStrategy | string | optional | "lastQuestion" | \u51B3\u5B9A\u5982\u4F55\u6839\u636E\u5386\u53F2\u95EE\u9898\u751F\u6210\u7F13\u5B58\u952E\u7684\u7B56\u7565\u3002\u53EF\u9009\u503C: "lastQuestion" (\u4F7F\u7528\u6700\u540E\u4E00\u4E2A\u95EE\u9898), "allQuestions" (\u62FC\u63A5\u6240\u6709\u95EE\u9898) \u6216 "disabled" (\u7981\u7528\u7F13\u5B58) |
| enableSemanticCache | bool | optional | true | \u662F\u5426\u542F\u7528\u8BED\u4E49\u5316\u7F13\u5B58, \u82E5\u4E0D\u542F\u7528\uFF0C\u5219\u4F7F\u7528\u5B57\u7B26\u4E32\u5339\u914D\u7684\u65B9\u5F0F\u6765\u67E5\u627E\u7F13\u5B58\uFF0C\u6B64\u65F6\u9700\u8981\u914D\u7F6Ecache\u670D\u52A1 |

\u6839\u636E\u662F\u5426\u9700\u8981\u542F\u7528\u8BED\u4E49\u7F13\u5B58\uFF0C\u53EF\u4EE5\u53EA\u914D\u7F6E\u7EC4\u4EF6\u7684\u7EC4\u5408\u4E3A:
1. \`cache\`: \u4EC5\u542F\u7528\u5B57\u7B26\u4E32\u5339\u914D\u7F13\u5B58
3. \`vector (+ embedding)\`: \u542F\u7528\u8BED\u4E49\u5316\u7F13\u5B58, \u5176\u4E2D\u82E5 \`vector\` \u672A\u63D0\u4F9B\u5B57\u7B26\u4E32\u8868\u5F81\u670D\u52A1\uFF0C\u5219\u9700\u8981\u81EA\u884C\u914D\u7F6E \`embedding\` \u670D\u52A1
2. \`vector (+ embedding) + cache\`: \u542F\u7528\u8BED\u4E49\u5316\u7F13\u5B58\u5E76\u7528\u7F13\u5B58\u670D\u52A1\u5B58\u50A8LLM\u54CD\u5E94\u4EE5\u52A0\u901F

\u6CE8\u610F\u82E5\u4E0D\u914D\u7F6E\u76F8\u5173\u7EC4\u4EF6\uFF0C\u5219\u53EF\u4EE5\u5FFD\u7565\u76F8\u5E94\u7EC4\u4EF6\u7684\`required\`\u5B57\u6BB5\u3002


## \u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\uFF08vector\uFF09
| Name | Type | Requirement | Default | Description |
| --- | --- | --- | --- | --- |
| vector.type | string | required | "" | \u5411\u91CF\u5B58\u50A8\u670D\u52A1\u63D0\u4F9B\u8005\u7C7B\u578B\uFF0C\u4F8B\u5982 dashvector |
| vector.serviceName | string | required | "" | \u5411\u91CF\u5B58\u50A8\u670D\u52A1\u540D\u79F0 |
| vector.serviceHost | string | required | "" | \u5411\u91CF\u5B58\u50A8\u670D\u52A1\u57DF\u540D |
| vector.servicePort | int64 | optional | 443 | \u5411\u91CF\u5B58\u50A8\u670D\u52A1\u7AEF\u53E3 |
| vector.apiKey | string | optional | ""  | \u5411\u91CF\u5B58\u50A8\u670D\u52A1 API Key |
| vector.topK | int | optional | 1 | \u8FD4\u56DETopK\u7ED3\u679C\uFF0C\u9ED8\u8BA4\u4E3A 1 |
| vector.timeout | uint32 | optional | 10000 | \u8BF7\u6C42\u5411\u91CF\u5B58\u50A8\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u662F10000\uFF0C\u537310\u79D2 |
| vector.collectionID | string | optional | "" | \u5411\u91CF\u5B58\u50A8\u670D\u52A1 Collection ID |
| vector.threshold | float64 | optional | 1000 | \u5411\u91CF\u76F8\u4F3C\u5EA6\u5EA6\u91CF\u9608\u503C |
| vector.thresholdRelation | string | optional | lt | \u76F8\u4F3C\u5EA6\u5EA6\u91CF\u65B9\u5F0F\u6709 \`Cosine\`, \`DotProduct\`, \`Euclidean\` \u7B49\uFF0C\u524D\u4E24\u8005\u503C\u8D8A\u5927\u76F8\u4F3C\u5EA6\u8D8A\u9AD8\uFF0C\u540E\u8005\u503C\u8D8A\u5C0F\u76F8\u4F3C\u5EA6\u8D8A\u9AD8\u3002\u5BF9\u4E8E \`Cosine\` \u548C \`DotProduct\` \u9009\u62E9 \`gt\`\uFF0C\u5BF9\u4E8E \`Euclidean\` \u5219\u9009\u62E9 \`lt\`\u3002\u9ED8\u8BA4\u4E3A \`lt\`\uFF0C\u6240\u6709\u6761\u4EF6\u5305\u62EC \`lt\` (less than\uFF0C\u5C0F\u4E8E)\u3001\`lte\` (less than or equal to\uFF0C\u5C0F\u7B49\u4E8E)\u3001\`gt\` (greater than\uFF0C\u5927\u4E8E)\u3001\`gte\` (greater than or equal to\uFF0C\u5927\u7B49\u4E8E) |

## \u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF08embedding\uFF09
| Name | Type | Requirement | Default | Description |
| --- | --- | --- | --- | --- |
| embedding.type | string | required | "" | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 dashscope |
| embedding.serviceName | string | required | "" | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u540D\u79F0 |
| embedding.serviceHost | string | optional | "" | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u57DF\u540D |
| embedding.servicePort | int64 | optional | 443 | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7AEF\u53E3 |
| embedding.apiKey | string | optional | ""  | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7684 API Key |
| embedding.timeout | uint32 | optional | 10000 | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u662F10000\uFF0C\u537310\u79D2 |
| embedding.model | string | optional | "" | \u8BF7\u6C42\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u7684\u6A21\u578B\u540D\u79F0 |


## \u7F13\u5B58\u670D\u52A1\uFF08cache\uFF09
| cache.type | string | required | "" | \u7F13\u5B58\u670D\u52A1\u7C7B\u578B\uFF0C\u4F8B\u5982 redis |
| --- | --- | --- | --- | --- |
| cache.serviceName | string | required | "" | \u7F13\u5B58\u670D\u52A1\u540D\u79F0 |
| cache.serviceHost | string | required | "" | \u7F13\u5B58\u670D\u52A1\u57DF\u540D |
| cache.servicePort | int64 | optional | 6379 | \u7F13\u5B58\u670D\u52A1\u7AEF\u53E3 |
| cache.username | string | optional | ""  | \u7F13\u5B58\u670D\u52A1\u7528\u6237\u540D |
| cache.password | string | optional | "" | \u7F13\u5B58\u670D\u52A1\u5BC6\u7801 |
| cache.timeout | uint32 | optional | 10000 | \u7F13\u5B58\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u662F10000\uFF0C\u537310\u79D2 |
| cache.cacheTTL | int | optional | 0 | \u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u503C\u662F 0\uFF0C\u5373 \u6C38\u4E0D\u8FC7\u671F|
| cache.cacheKeyPrefix | string | optional | "higress-ai-cache:" | \u7F13\u5B58 Key \u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u503C\u4E3A "higress-ai-cache:" |
| cache.database | int | optional | 0 | \u4F7F\u7528\u7684\u6570\u636E\u5E93id\uFF0C\u4EC5\u9650redis\uFF0C\u4F8B\u5982\u914D\u7F6E\u4E3A1\uFF0C\u5BF9\u5E94\`SELECT 1\` |


## \u5176\u4ED6\u914D\u7F6E
| Name | Type | Requirement | Default | Description |
| --- | --- | --- | --- | --- |
| cacheKeyFrom | string | optional | "messages.@reverse.0.content" | \u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32 |
| cacheValueFrom | string | optional | "choices.0.message.content" | \u4ECE\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32 |
| cacheStreamValueFrom | string | optional | "choices.0.delta.content" | \u4ECE\u6D41\u5F0F\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32 |
| cacheToolCallsFrom | string | optional | "choices.0.delta.content.tool_calls" | \u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32 |
| responseTemplate | string | optional | \`{"id":"ai-cache.hit","choices":[{"index":0,"message":{"role":"assistant","content":%s},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\` | \u8FD4\u56DE HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206 |
| streamResponseTemplate | string | optional | \`data:{"id":"ai-cache.hit","choices":[{"index":0,"delta":{"role":"assistant","content":%s},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n\` | \u8FD4\u56DE\u6D41\u5F0F HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206 |

## \u6587\u672C\u5411\u91CF\u5316\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E

### OpenAI

OpenAI \u6240\u5BF9\u5E94\u7684 \`embedding.type\` \u4E3A \`openai\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA [API Key](https://platform.openai.com/settings/organization/api-keys)\uFF0C\u5E76\u5C06\u5176\u586B\u5165\`embedding.apiKey\`\uFF0C\u4E00\u4E2A API Key \u7684\u793A\u4F8B\u4E3A\` sk-xxxxxxx\`\u3002

### Ollama

Ollama \u6240\u5BF9\u5E94\u7684 \`embedding.type\` \u4E3A \`ollama\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

### \u8BAF\u98DE\u661F\u706B

\u8BAF\u98DE\u661F\u706B \u6240\u5BF9\u5E94\u7684 \`embedding.type\` \u4E3A \`xfyun\`\u3002\u5B83\u9700\u8981\u63D0\u524D\u521B\u5EFA[\u5E94\u7528](https://console.xfyun.cn/services/emb)\uFF0C\u83B7\u53D6\`APPID\`  \u3001\`APISecret\`\u548C\`APIKey\`\uFF0C\u5E76\u5C06\`APIKey\`\u586B\u5165\`embedding.apiKey\`\u4E2D\u3002

\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                  | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                 | \u586B\u5199\u503C           |
| --------------------- | -------- | -------- | ------ | -------------------- | ---------------- |
| \`embedding.appId\`     | string   | \u5FC5\u586B     | -      | \u5E94\u7528 ID              | \u83B7\u53D6\u7684 APPID     |
| \`embedding.apiSecret\` | string   | \u5FC5\u586B     | -      | \u8C03\u7528 API \u6240\u9700 Secret | \u83B7\u53D6\u7684 APISecret |

### Textln

Textln \u6240\u5BF9\u5E94\u7684 \`embedding.type\` \u4E3A \`textln\`\u3002\u5B83\u9700\u8981\u63D0\u524D\u83B7\u53D6[\`app-id\` \u548C\`secret-code\`](https://www.textin.com/document/acge_text_embedding)\u3002

\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                            | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                 | \u586B\u5199\u503C             |
| ------------------------------- | -------- | -------- | ------ | -------------------- | ------------------ |
| \`embedding.textinAppId\`         | string   | \u5FC5\u586B     | -      | \u5E94\u7528 ID              | \u83B7\u53D6\u7684 app-id      |
| \`embedding.textinSecretCode\`    | string   | \u5FC5\u586B     | -      | \u8C03\u7528 API \u6240\u9700 Secret | \u83B7\u53D6\u7684 secret-code |
| \`embedding.textinMatryoshkaDim\` | int      | \u5FC5\u586B     | -      | \u8FD4\u56DE\u7684\u5355\u4E2A\u5411\u91CF\u957F\u5EA6   |                    |

### Hugging Face

Hugging Face \u6240\u5BF9\u5E94\u7684 \`embedding.type\` \u4E3A \`huggingface\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA [hf_token](https://huggingface.co/blog/getting-started-with-embeddings)\uFF0C\u5E76\u5C06\u5176\u586B\u5165\`embedding.apiKey\`\uFF0C\u4E00\u4E2A hf_token \u7684\u793A\u4F8B\u4E3A\` hf_xxxxxxx\`\u3002

\`embedding.model\`\u9ED8\u8BA4\u6307\u5B9A\u4E3A\`sentence-transformers/all-MiniLM-L6-v2\`

### Cohere

Cohere \u6240\u5BF9\u5E94\u7684 \`embedding.type\` \u4E3A \`cohere\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA [API Key](https://docs.cohere.com/reference/embed)\uFF0C\u5E76\u5C06\u5176\u586B\u5165\`embedding.apiKey\`\u3002

## \u5411\u91CF\u6570\u636E\u5E93\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E

### Chroma
Chroma \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`chroma\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection ID \u81F3\u914D\u7F6E\u9879 \`vector.collectionID\`\uFF0C\u4E00\u4E2A Collection ID \u7684\u793A\u4F8B\u4E3A \`52bbb8b3-724c-477b-a4ce-d5b578214612\`\u3002

### DashVector
DashVector \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`dashvector\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 \`Collection \u540D\u79F0\` \u81F3\u914D\u7F6E\u9879 \`vector.collectionID\`\u3002

### ElasticSearch
ElasticSearch \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`elasticsearch\`\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Index \u5E76\u586B\u5199 Index Name \u81F3\u914D\u7F6E\u9879 \`vector.collectionID\` \u3002

\u5F53\u524D\u4F9D\u8D56\u4E8E [KNN](https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html) \u65B9\u6CD5\uFF0C\u8BF7\u4FDD\u8BC1 ES \u7248\u672C\u652F\u6301 \`KNN\`\uFF0C\u5F53\u524D\u5DF2\u5728 \`8.16\` \u7248\u672C\u6D4B\u8BD5\u3002

\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A
| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                          |
|-------------------|----------|----------|--------|-------------------------------------------------------------------------------|
| \`vector.esUsername\` | string   | \u975E\u5FC5\u586B   | -      | ElasticSearch \u7528\u6237\u540D |
| \`vector.esPassword\` | string | \u975E\u5FC5\u586B | - | ElasticSearch \u5BC6\u7801 |


\`vector.esUsername\` \u548C \`vector.esPassword\` \u7528\u4E8E Basic \u8BA4\u8BC1\u3002\u540C\u65F6\u4E5F\u652F\u6301 Api Key \u8BA4\u8BC1\uFF0C\u5F53\u586B\u5199\u4E86 \`vector.apiKey\` \u65F6\uFF0C\u5219\u542F\u7528 Api Key \u8BA4\u8BC1\uFF0C\u5982\u679C\u4F7F\u7528 SaaS \u7248\u672C\u9700\u8981\u586B\u5199 \`encoded\` \u7684\u503C\u3002

### Milvus
Milvus \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`milvus\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection Name \u81F3\u914D\u7F6E\u9879 \`vector.collectionID\`\u3002

### Pinecone
Pinecone \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`pinecone\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Index\uFF0C\u5E76\u586B\u5199 Index \u8BBF\u95EE\u57DF\u540D\u81F3 \`vector.serviceHost\`\u3002

Pinecone \u4E2D\u7684 \`Namespace\` \u53C2\u6570\u901A\u8FC7\u63D2\u4EF6\u7684 \`vector.collectionID\` \u8FDB\u884C\u914D\u7F6E\uFF0C\u5982\u679C\u4E0D\u586B\u5199 \`vector.collectionID\`\uFF0C\u5219\u9ED8\u8BA4\u4E3A Default Namespace\u3002

### Qdrant
Qdrant \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`qdrant\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection Name \u81F3\u914D\u7F6E\u9879 \`vector.collectionID\`\u3002

### Weaviate
Weaviate \u6240\u5BF9\u5E94\u7684 \`vector.type\` \u4E3A \`weaviate\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002
\u9700\u8981\u63D0\u524D\u521B\u5EFA Collection\uFF0C\u5E76\u586B\u5199 Collection Name \u81F3\u914D\u7F6E\u9879 \`vector.collectionID\`\u3002

\u9700\u8981\u6CE8\u610F\u7684\u662F Weaviate \u4F1A\u8BBE\u7F6E\u9996\u5B57\u6BCD\u81EA\u52A8\u5927\u5199\uFF0C\u5728\u586B\u5199\u914D\u7F6E \`collectionID\` \u7684\u65F6\u5019\u9700\u8981\u5C06\u9996\u5B57\u6BCD\u8BBE\u7F6E\u4E3A\u5927\u5199\u3002

\u5982\u679C\u4F7F\u7528 SaaS \u9700\u8981\u586B\u5199 \`vector.serviceHost\` \u53C2\u6570\u3002

## \u914D\u7F6E\u793A\u4F8B
### \u57FA\u7840\u914D\u7F6E
\`\`\`yaml
embedding:
  type: dashscope
  serviceName: my_dashscope.dns
  apiKey: [Your Key]

vector:
  type: dashvector
  serviceName: my_dashvector.dns
  collectionID: [Your Collection ID]
  serviceDomain: [Your domain]
  apiKey: [Your key]

cache:
  type: redis
  serviceName: my_redis.dns
  servicePort: 6379
  timeout: 100

\`\`\`

\u65E7\u7248\u672C\u914D\u7F6E\u517C\u5BB9
\`\`\`yaml
redis:
  serviceName: my_redis.dns
  servicePort: 6379
  timeout: 100
  database: 1
\`\`\`

## \u8FDB\u9636\u7528\u6CD5
\u5F53\u524D\u9ED8\u8BA4\u7684\u7F13\u5B58 key \u662F\u57FA\u4E8E GJSON PATH \u7684\u8868\u8FBE\u5F0F\uFF1A\`messages.@reverse.0.content\` \u63D0\u53D6\uFF0C\u542B\u4E49\u662F\u628A messages \u6570\u7EC4\u53CD\u8F6C\u540E\u53D6\u7B2C\u4E00\u9879\u7684 content\uFF1B

GJSON PATH \u652F\u6301\u6761\u4EF6\u5224\u65AD\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u6700\u540E\u4E00\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A \`messages.@reverse.#(role=="user").content\`\uFF1B

\u5982\u679C\u5E0C\u671B\u5C06\u6240\u6709 role \u4E3A user \u7684 content \u62FC\u6210\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A\`messages.@reverse.#(role=="user")#.content\`\uFF1B

\u8FD8\u53EF\u4EE5\u652F\u6301\u7BA1\u9053\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u5230\u6570\u7B2C\u4E8C\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A\`messages.@reverse.#(role=="user")#.content|1\`\u3002

\u66F4\u591A\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003[\u5B98\u65B9\u6587\u6863](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\uFF0C\u53EF\u4EE5\u4F7F\u7528 [GJSON Playground](https://gjson.dev/) \u8FDB\u884C\u8BED\u6CD5\u6D4B\u8BD5\u3002

## \u5E38\u89C1\u95EE\u9898

1. \u5982\u679C\u8FD4\u56DE\u7684\u9519\u8BEF\u4E3A \`error status returned by host: bad argument\`\uFF0C\u8BF7\u68C0\u67E5\`serviceName\`\u662F\u5426\u6B63\u786E\u5305\u542B\u4E86\u670D\u52A1\u7684\u7C7B\u578B\u540E\u7F00(.dns\u7B49)\u3002
`},c=function(){return t},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E-1",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1vector",text:"\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\uFF08vector\uFF09"},{depth:2,slug:"\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1embedding",text:"\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF08embedding\uFF09"},{depth:2,slug:"\u7F13\u5B58\u670D\u52A1cache",text:"\u7F13\u5B58\u670D\u52A1\uFF08cache\uFF09"},{depth:2,slug:"\u5176\u4ED6\u914D\u7F6E",text:"\u5176\u4ED6\u914D\u7F6E"},{depth:2,slug:"\u6587\u672C\u5411\u91CF\u5316\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E",text:"\u6587\u672C\u5411\u91CF\u5316\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E"},{depth:3,slug:"openai",text:"OpenAI"},{depth:3,slug:"ollama",text:"Ollama"},{depth:3,slug:"\u8BAF\u98DE\u661F\u706B",text:"\u8BAF\u98DE\u661F\u706B"},{depth:3,slug:"textln",text:"Textln"},{depth:3,slug:"hugging-face",text:"Hugging Face"},{depth:3,slug:"cohere",text:"Cohere"},{depth:2,slug:"\u5411\u91CF\u6570\u636E\u5E93\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E",text:"\u5411\u91CF\u6570\u636E\u5E93\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E"},{depth:3,slug:"chroma",text:"Chroma"},{depth:3,slug:"dashvector",text:"DashVector"},{depth:3,slug:"elasticsearch",text:"ElasticSearch"},{depth:3,slug:"milvus",text:"Milvus"},{depth:3,slug:"pinecone",text:"Pinecone"},{depth:3,slug:"qdrant",text:"Qdrant"},{depth:3,slug:"weaviate",text:"Weaviate"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u57FA\u7840\u914D\u7F6E",text:"\u57FA\u7840\u914D\u7F6E"},{depth:2,slug:"\u8FDB\u9636\u7528\u6CD5",text:"\u8FDB\u9636\u7528\u6CD5"},{depth:2,slug:"\u5E38\u89C1\u95EE\u9898",text:"\u5E38\u89C1\u95EE\u9898"}]},e=n((y,b,f)=>{const{layout:E,...s}=o;return s.file=d,s.url=a,p`${h()}${u(t)}`})});export{e as Content,v as __tla,c as compiledContent,e as default,d as file,o as frontmatter,i as getHeadings,r as rawContent,a as url};
