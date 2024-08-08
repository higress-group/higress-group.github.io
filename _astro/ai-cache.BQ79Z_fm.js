import{c,__tla as l}from"./astro-component.DeDyO-JF.js";import{r as m,m as p,u,__tla as g}from"./constant.Jm2AyG_z.js";import{__tla as h}from"./astro/assets-service.B3vdYoe2.js";let e,a,s,r,n,i,d,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>AI \u7F13\u5B58\u63D2\u4EF6\u5B9E\u73B0\u4E86\u5C06 LLM \u54CD\u5E94\u8FDB\u884C\u62BD\u53D6\u5E76\u7F13\u5B58\u7684\u529F\u80FD\uFF0C\u5BF9\u4E8E\u5411 LLM API \u9AD8\u9891\u8BF7\u6C42\u76F8\u540C\u95EE\u9898\u7684\u573A\u666F\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u54CD\u5E94\u65F6\u5EF6\u5E76\u8282\u7701\u6210\u672C\u3002\u9ED8\u8BA4\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E openai \u534F\u8BAE\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u540C\u65F6\u652F\u6301\u6D41\u5F0F\u548C\u975E\u6D41\u5F0F\u54CD\u5E94\u7684\u7F13\u5B58\u3002</p>
<blockquote>
<p>\u9700\u8981\u6570\u636E\u9762\u7684proxy wasm\u7248\u672C\u5927\u4E8E\u7B49\u4E8E0.2.100
\u7F16\u8BD1\u65F6\uFF0C\u9700\u8981\u5E26\u4E0A\u7248\u672C\u7684tag\uFF0C\u4F8B\u5982\uFF1A<code dir="auto">tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100" ./</code></p>
</blockquote>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>
































































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cacheKeyFrom.requestBody</td><td>string</td><td>\u9009\u586B</td><td>\u201D<a href="mailto:messages.@reverse.0.content" referrerpolicy="unsafe-url">messages.@reverse.0.content</a>\u201D</td><td>\u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>cacheValueFrom.responseBody</td><td>string</td><td>\u9009\u586B</td><td>\u201Dchoices.0.message.content\u201D</td><td>\u4ECE\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>cacheStreamValueFrom.responseBody</td><td>string</td><td>\u9009\u586B</td><td>\u201Dchoices.0.delta.content\u201D</td><td>\u4ECE\u6D41\u5F0F\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32</td></tr><tr><td>cacheKeyPrefix</td><td>string</td><td>\u9009\u586B</td><td>\u201Dhigress-ai-cache:\u201C</td><td>Redis\u7F13\u5B58Key\u7684\u524D\u7F00</td></tr><tr><td>cacheTTL</td><td>integer</td><td>\u9009\u586B</td><td>0</td><td>\u7F13\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u9ED8\u8BA4\u503C\u4E3A0\uFF0C\u5373\u6C38\u4E0D\u8FC7\u671F</td></tr><tr><td>redis.serviceName</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</td></tr><tr><td>redis.servicePort</td><td>integer</td><td>\u9009\u586B</td><td>6379</td><td>redis \u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>redis.timeout</td><td>integer</td><td>\u9009\u586B</td><td>1000</td><td>\u8BF7\u6C42 redis \u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2</td></tr><tr><td>redis.username</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u767B\u9646 redis \u7684\u7528\u6237\u540D</td></tr><tr><td>redis.password</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u767B\u9646 redis \u7684\u5BC6\u7801</td></tr><tr><td>returnResponseTemplate</td><td>string</td><td>\u9009\u586B</td><td><code dir="auto">{"id":"from-cache","choices":[%s],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}</code></td><td>\u8FD4\u56DE HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206</td></tr><tr><td>returnStreamResponseTemplate</td><td>string</td><td>\u9009\u586B</td><td><code dir="auto">data:{"id":"from-cache","choices":[{"index":0,"delta":{"role":"assistant","content":"%s"},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n</code></td><td>\u8FD4\u56DE\u6D41\u5F0F HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis:\x7F  serviceName: my-redis.dns\x7F  timeout: 2000"><div></div></button></div></figure></div>
<h2 id="\u8FDB\u9636\u7528\u6CD5">\u8FDB\u9636\u7528\u6CD5</h2>
<p>\u5F53\u524D\u9ED8\u8BA4\u7684\u7F13\u5B58 key \u662F\u57FA\u4E8E GJSON PATH \u7684\u8868\u8FBE\u5F0F\uFF1A<code dir="auto">messages.@reverse.0.content</code> \u63D0\u53D6\uFF0C\u542B\u4E49\u662F\u628A messages \u6570\u7EC4\u53CD\u8F6C\u540E\u53D6\u7B2C\u4E00\u9879\u7684 content\uFF1B</p>
<p>GJSON PATH \u652F\u6301\u6761\u4EF6\u5224\u65AD\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u6700\u540E\u4E00\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A <code dir="auto">messages.@reverse.#(role=="user").content</code>\uFF1B</p>
<p>\u5982\u679C\u5E0C\u671B\u5C06\u6240\u6709 role \u4E3A user \u7684 content \u62FC\u6210\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A<code dir="auto">messages.@reverse.#(role=="user")#.content</code>\uFF1B</p>
<p>\u8FD8\u53EF\u4EE5\u652F\u6301\u7BA1\u9053\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u5230\u6570\u7B2C\u4E8C\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A<code dir="auto">messages.@reverse.#(role=="user")#.content|1</code>\u3002</p>
<p>\u66F4\u591A\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B98\u65B9\u6587\u6863</a>\uFF0C\u53EF\u4EE5\u4F7F\u7528 <a href="https://gjson.dev/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Playground</a> \u8FDB\u884C\u8BED\u6CD5\u6D4B\u8BD5\u3002</p>`,r={title:"AI \u7F13\u5B58",keywords:["higress","ai"],description:"AI \u7F13\u5B58\u63D2\u4EF6\u5B9E\u73B0\u4E86\u5C06 LLM \u54CD\u5E94\u8FDB\u884C\u62BD\u53D6\u5E76\u7F13\u5B58\u7684\u529F\u80FD\uFF0C\u5BF9\u4E8E\u5411 LLM API \u9AD8\u9891\u8BF7\u6C42\u76F8\u540C\u95EE\u9898\u7684\u573A\u666F\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u54CD\u5E94\u65F6\u5EF6\u5E76\u8282\u7701\u6210\u672C\u3002"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-cache.md",d=void 0,i=function(){return`
## \u529F\u80FD\u8BF4\u660E

AI \u7F13\u5B58\u63D2\u4EF6\u5B9E\u73B0\u4E86\u5C06 LLM \u54CD\u5E94\u8FDB\u884C\u62BD\u53D6\u5E76\u7F13\u5B58\u7684\u529F\u80FD\uFF0C\u5BF9\u4E8E\u5411 LLM API \u9AD8\u9891\u8BF7\u6C42\u76F8\u540C\u95EE\u9898\u7684\u573A\u666F\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u54CD\u5E94\u65F6\u5EF6\u5E76\u8282\u7701\u6210\u672C\u3002\u9ED8\u8BA4\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E openai \u534F\u8BAE\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u540C\u65F6\u652F\u6301\u6D41\u5F0F\u548C\u975E\u6D41\u5F0F\u54CD\u5E94\u7684\u7F13\u5B58\u3002

> \u9700\u8981\u6570\u636E\u9762\u7684proxy wasm\u7248\u672C\u5927\u4E8E\u7B49\u4E8E0.2.100
> \u7F16\u8BD1\u65F6\uFF0C\u9700\u8981\u5E26\u4E0A\u7248\u672C\u7684tag\uFF0C\u4F8B\u5982\uFF1A\`tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100" ./\`

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0                                | \u6570\u636E\u7C7B\u578B    | \u586B\u5199\u8981\u6C42     | \u9ED8\u8BA4\u503C                                                                                                                                                                                                                                                     | \u63CF\u8FF0                                                                                          |
|-----------------------------------|---------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| cacheKeyFrom.requestBody          | string  | 	\u9009\u586B | "messages.@reverse.0.content"                                                                                                                                                                                                                           | \u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32   |
| cacheValueFrom.responseBody       | string  | 	\u9009\u586B | "choices.0.message.content"                                                                                                                                                                                                                             | \u4ECE\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32   |
| cacheStreamValueFrom.responseBody | string  | 	\u9009\u586B | "choices.0.delta.content"                                                                                                                                                                                                                               | \u4ECE\u6D41\u5F0F\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32 |
| cacheKeyPrefix                    | string  | 	\u9009\u586B | "higress-ai-cache:"                                                                                                                                                                                                                                     | Redis\u7F13\u5B58Key\u7684\u524D\u7F00                                                                               |
| cacheTTL                          | integer | 	\u9009\u586B | 0                                                                                                                                                                                                                                                       | \u7F13\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u9ED8\u8BA4\u503C\u4E3A0\uFF0C\u5373\u6C38\u4E0D\u8FC7\u671F                                                                    |
| redis.serviceName                 | string  | \u5FC5\u586B | -                                                                                                                                                                                                                                                       | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local                   |
| redis.servicePort                 | integer | \u9009\u586B | 6379                                                                                                                                                                                                                                                    | redis \u670D\u52A1\u7AEF\u53E3                                                                                  |
| redis.timeout                     | integer | \u9009\u586B | 1000                                                                                                                                                                                                                                                    | \u8BF7\u6C42 redis \u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2                                                                        |
| redis.username                    | string  | \u9009\u586B | -                                                                                                                                                                                                                                                       | \u767B\u9646 redis \u7684\u7528\u6237\u540D                                                                               |
| redis.password                    | string  | \u9009\u586B | -                                                                                                                                                                                                                                                       | \u767B\u9646 redis \u7684\u5BC6\u7801                                                                                |
| returnResponseTemplate            | string  | \u9009\u586B | \`{"id":"from-cache","choices":[%s],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\`                                                                                                     | \u8FD4\u56DE HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206                                                  |
| returnStreamResponseTemplate      | string  | \u9009\u586B | \`data:{"id":"from-cache","choices":[{"index":0,"delta":{"role":"assistant","content":"%s"},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n\` | \u8FD4\u56DE\u6D41\u5F0F HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206                                                |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
redis:
  serviceName: my-redis.dns
  timeout: 2000
\`\`\`
## \u8FDB\u9636\u7528\u6CD5

\u5F53\u524D\u9ED8\u8BA4\u7684\u7F13\u5B58 key \u662F\u57FA\u4E8E GJSON PATH \u7684\u8868\u8FBE\u5F0F\uFF1A\`messages.@reverse.0.content\` \u63D0\u53D6\uFF0C\u542B\u4E49\u662F\u628A messages \u6570\u7EC4\u53CD\u8F6C\u540E\u53D6\u7B2C\u4E00\u9879\u7684 content\uFF1B

GJSON PATH \u652F\u6301\u6761\u4EF6\u5224\u65AD\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u6700\u540E\u4E00\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A \`messages.@reverse.#(role=="user").content\`\uFF1B

\u5982\u679C\u5E0C\u671B\u5C06\u6240\u6709 role \u4E3A user \u7684 content \u62FC\u6210\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A\`messages.@reverse.#(role=="user")#.content\`\uFF1B

\u8FD8\u53EF\u4EE5\u652F\u6301\u7BA1\u9053\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u5230\u6570\u7B2C\u4E8C\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A\`messages.@reverse.#(role=="user")#.content|1\`\u3002

\u66F4\u591A\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003[\u5B98\u65B9\u6587\u6863](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\uFF0C\u53EF\u4EE5\u4F7F\u7528 [GJSON Playground](https://gjson.dev/) \u8FDB\u884C\u8BED\u6CD5\u6D4B\u8BD5\u3002
`},a=function(){return t},n=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:2,slug:"\u8FDB\u9636\u7528\u6CD5",text:"\u8FDB\u9636\u7528\u6CD5"}]},e=c((f,v,_)=>{const{layout:b,...o}=r;return o.file=s,o.url=d,m`${p()}${u(t)}`})});export{e as Content,y as __tla,a as compiledContent,e as default,s as file,r as frontmatter,n as getHeadings,i as rawContent,d as url};
