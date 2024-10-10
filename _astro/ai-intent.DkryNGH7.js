import{c as p,__tla as l}from"./astro-component.COZxaGv5.js";import{r as c,m as y,u as m,__tla as x}from"./constant.C9P4cBlv.js";import{__tla as v}from"./astro/assets-service.8AFaQ3Qd.js";let e,a,s,n,i,r,d,u=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>LLM \u610F\u56FE\u8BC6\u522B\u63D2\u4EF6\uFF0C\u80FD\u591F\u667A\u80FD\u5224\u65AD\u7528\u6237\u8BF7\u6C42\u4E0E\u67D0\u4E2A\u9886\u57DF\u6216agent\u7684\u529F\u80FD\u5951\u5408\u5EA6\uFF0C\u4ECE\u800C\u63D0\u5347\u4E0D\u540C\u6A21\u578B\u7684\u5E94\u7528\u6548\u679C\u548C\u7528\u6237\u4F53\u9A8C</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">700</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>
<blockquote>
<p>1.\u8BE5\u63D2\u4EF6\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8Eai-proxy\u7B49\u540E\u7EED\u4F7F\u7528\u610F\u56FE\u7684\u63D2\u4EF6\uFF0C\u540E\u7EED\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7proxywasm.GetProperty([]string{\u201Cintent_category\u201D})\u65B9\u6CD5\u83B7\u53D6\u5230\u610F\u56FE\u4E3B\u9898\uFF0C\u6309\u7167\u610F\u56FE\u4E3B\u9898\u53BB\u505A\u4E0D\u540C\u7F13\u5B58\u5E93\u6216\u8005\u5927\u6A21\u578B\u7684\u9009\u62E9</p>
</blockquote>
<blockquote>
<p>2.\u9700\u65B0\u5EFA\u4E00\u6761higress\u7684\u5927\u6A21\u578B\u8DEF\u7531\uFF0C\u4F9B\u8BE5\u63D2\u4EF6\u8BBF\u95EE\u5927\u6A21\u578B,\u5982\uFF1A\u8DEF\u7531\u4EE5 /intent \u4F5C\u4E3A\u524D\u7F00\uFF0C\u670D\u52A1\u9009\u62E9\u5927\u6A21\u578B\u670D\u52A1\uFF0C\u4E3A\u8BE5\u8DEF\u7531\u5F00\u542Fai-proxy\u63D2\u4EF6</p>
</blockquote>
<blockquote>
<p>3.\u9700\u65B0\u5EFA\u4E00\u4E2A\u56FA\u5B9A\u5730\u5740\u7684\u670D\u52A1\uFF08\u5982\uFF1Aintent-service\uFF09\uFF0C\u670D\u52A1\u6307\u5411127.0.0.1:80 \uFF08\u5373\u81EA\u8EAB\u7F51\u5173\u5B9E\u4F8B+\u7AEF\u53E3\uFF09\uFF0Cai-intent\u63D2\u4EF6\u5185\u90E8\u9700\u8981\u8BE5\u670D\u52A1\u8FDB\u884C\u8C03\u7528\uFF0C\u4EE5\u8BBF\u95EE\u4E0A\u8FF0\u65B0\u589E\u7684\u8DEF\u7531,\u670D\u52A1\u540D\u5BF9\u5E94 llm.proxyServiceName\uFF08\u4E5F\u53EF\u4EE5\u65B0\u5EFADNS\u7C7B\u578B\u670D\u52A1\uFF0C\u4F7F\u63D2\u4EF6\u8BBF\u95EE\u5176\u4ED6\u5927\u6A21\u578B\uFF09</p>
</blockquote>
<blockquote>
<p>4.\u5982\u679C\u4F7F\u7528\u56FA\u5B9A\u5730\u5740\u7684\u670D\u52A1\u8C03\u7528\u7F51\u5173\u81EA\u8EAB\uFF0C\u9700\u628A127.0.0.1\u52A0\u5165\u5230\u7F51\u5173\u7684\u8BBF\u95EE\u767D\u540D\u5355\u4E2D</p>
</blockquote>











































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">scene.category</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u9884\u8BBE\u573A\u666F\u7C7B\u522B\uFF0C\u4EE5\`</td></tr><tr><td><code dir="auto">scene.prompt</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>\u4F60\u662F\u4E00\u4E2A\u667A\u80FD\u7C7B\u522B\u8BC6\u522B\u52A9\u624B\uFF0C\u8D1F\u8D23\u6839\u636E\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u548C\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u786E\u5B9A\u95EE\u9898\u5C5E\u4E8E\u54EA\u4E2A\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u5E76\u7ED9\u51FA\u76F8\u5E94\u7684\u7C7B\u522B\u3002\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u4E3A:%s,\u9884\u8BBE\u7684\u7C7B\u522B\u4E3A%s\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u79CD\u5177\u4F53\u7C7B\u522B\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u8FD4\u56DE\u2019NotFound\u2019\u3002</td><td>llm\u8BF7\u6C42prompt\u6A21\u677F</td></tr><tr><td><code dir="auto">llm.proxyServiceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u65B0\u5EFA\u7684higress\u670D\u52A1\uFF0C\u6307\u5411\u5927\u6A21\u578B (\u53D6higress\u4E2D\u7684 FQDN \u503C)</td></tr><tr><td><code dir="auto">llm.proxyUrl</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5927\u6A21\u578B\u8DEF\u7531\u8BF7\u6C42\u5730\u5740\u5168\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u7F51\u5173\u81EA\u8EAB\u7684\u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u5927\u6A21\u578B\u7684\u5730\u5740\uFF08openai\u534F\u8BAE\uFF09\uFF0C\u4F8B\u5982\uFF1A<a href="http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions</a></td></tr><tr><td><code dir="auto">llm.proxyDomain</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>proxyUrl\u4E2D\u89E3\u6790\u83B7\u53D6</td><td>\u5927\u6A21\u578B\u670D\u52A1\u7684domain</td></tr><tr><td><code dir="auto">llm.proxyPort</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>proxyUrl\u4E2D\u89E3\u6790\u83B7\u53D6</td><td>\u5927\u6A21\u578B\u670D\u52A1\u7AEF\u53E3\u53F7</td></tr><tr><td><code dir="auto">llm.proxyApiKey</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u5F53\u4F7F\u7528\u5916\u90E8\u5927\u6A21\u578B\u670D\u52A1\u65F6\u9700\u914D\u7F6E \u5BF9\u5E94\u5927\u6A21\u578B\u7684 API_KEY</td></tr><tr><td><code dir="auto">llm.proxyModel</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>qwen-long</td><td>\u5927\u6A21\u578B\u7C7B\u578B</td></tr><tr><td><code dir="auto">llm.proxyTimeout</code></td><td>number</td><td>\u975E\u5FC5\u586B</td><td>10000</td><td>\u8C03\u7528\u5927\u6A21\u578B\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4Dms\uFF0C\u9ED8\u8BA4\uFF1A10000ms</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">scene</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">category</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u91D1\u878D|\u7535\u5546|\u6CD5\u5F8B|Higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u4E00\u4E2A\u667A\u80FD\u7C7B\u522B\u8BC6\u522B\u52A9\u624B\uFF0C\u8D1F\u8D23\u6839\u636E\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u548C\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u786E\u5B9A\u95EE\u9898\u5C5E\u4E8E\u54EA\u4E2A\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u5E76\u7ED9\u51FA\u76F8\u5E94\u7684\u7C7B\u522B\u3002\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u4E3A:'%s',\u9884\u8BBE\u7684\u7C7B\u522B\u4E3A'%s'\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u79CD\u5177\u4F53\u7C7B\u522B\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u8FD4\u56DE'NotFound'\u3002"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">llm</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyServiceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"intent-service.static"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyDomain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"127.0.0.1"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"80"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyModel</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-long"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyApiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyTimeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"10000"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="scene:\x7F  category: &#x22;\u91D1\u878D|\u7535\u5546|\u6CD5\u5F8B|Higress&#x22;\x7F  prompt: &#x22;\u4F60\u662F\u4E00\u4E2A\u667A\u80FD\u7C7B\u522B\u8BC6\u522B\u52A9\u624B\uFF0C\u8D1F\u8D23\u6839\u636E\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u548C\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u786E\u5B9A\u95EE\u9898\u5C5E\u4E8E\u54EA\u4E2A\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u5E76\u7ED9\u51FA\u76F8\u5E94\u7684\u7C7B\u522B\u3002\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u4E3A:&#x27;%s&#x27;,\u9884\u8BBE\u7684\u7C7B\u522B\u4E3A&#x27;%s&#x27;\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u79CD\u5177\u4F53\u7C7B\u522B\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u8FD4\u56DE&#x27;NotFound&#x27;\u3002&#x22;\x7Fllm:\x7F  proxyServiceName: &#x22;intent-service.static&#x22;\x7F  proxyUrl: &#x22;http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions&#x22;\x7F  proxyDomain: &#x22;127.0.0.1&#x22;\x7F  proxyPort: &#x22;80&#x22;\x7F  proxyModel: &#x22;qwen-long&#x22;\x7F  proxyApiKey: &#x22;&#x22;\x7F  proxyTimeout: &#x22;10000&#x22;"><div></div></button></div></figure></div>`,n={title:"AI \u610F\u56FE\u8BC6\u522B",keywords:["AI\u7F51\u5173","AI\u610F\u56FE\u8BC6\u522B"],description:"AI \u610F\u56FE\u8BC6\u522B\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/others/ai-intent.md",d=void 0,r=function(){return`
## \u529F\u80FD\u8BF4\u660E

LLM \u610F\u56FE\u8BC6\u522B\u63D2\u4EF6\uFF0C\u80FD\u591F\u667A\u80FD\u5224\u65AD\u7528\u6237\u8BF7\u6C42\u4E0E\u67D0\u4E2A\u9886\u57DF\u6216agent\u7684\u529F\u80FD\u5951\u5408\u5EA6\uFF0C\u4ECE\u800C\u63D0\u5347\u4E0D\u540C\u6A21\u578B\u7684\u5E94\u7528\u6548\u679C\u548C\u7528\u6237\u4F53\u9A8C

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`700\`

## \u914D\u7F6E\u8BF4\u660E
> 1.\u8BE5\u63D2\u4EF6\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8Eai-proxy\u7B49\u540E\u7EED\u4F7F\u7528\u610F\u56FE\u7684\u63D2\u4EF6\uFF0C\u540E\u7EED\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7proxywasm.GetProperty([]string{"intent_category"})\u65B9\u6CD5\u83B7\u53D6\u5230\u610F\u56FE\u4E3B\u9898\uFF0C\u6309\u7167\u610F\u56FE\u4E3B\u9898\u53BB\u505A\u4E0D\u540C\u7F13\u5B58\u5E93\u6216\u8005\u5927\u6A21\u578B\u7684\u9009\u62E9

> 2.\u9700\u65B0\u5EFA\u4E00\u6761higress\u7684\u5927\u6A21\u578B\u8DEF\u7531\uFF0C\u4F9B\u8BE5\u63D2\u4EF6\u8BBF\u95EE\u5927\u6A21\u578B,\u5982\uFF1A\u8DEF\u7531\u4EE5 /intent \u4F5C\u4E3A\u524D\u7F00\uFF0C\u670D\u52A1\u9009\u62E9\u5927\u6A21\u578B\u670D\u52A1\uFF0C\u4E3A\u8BE5\u8DEF\u7531\u5F00\u542Fai-proxy\u63D2\u4EF6

> 3.\u9700\u65B0\u5EFA\u4E00\u4E2A\u56FA\u5B9A\u5730\u5740\u7684\u670D\u52A1\uFF08\u5982\uFF1Aintent-service\uFF09\uFF0C\u670D\u52A1\u6307\u5411127.0.0.1:80 \uFF08\u5373\u81EA\u8EAB\u7F51\u5173\u5B9E\u4F8B+\u7AEF\u53E3\uFF09\uFF0Cai-intent\u63D2\u4EF6\u5185\u90E8\u9700\u8981\u8BE5\u670D\u52A1\u8FDB\u884C\u8C03\u7528\uFF0C\u4EE5\u8BBF\u95EE\u4E0A\u8FF0\u65B0\u589E\u7684\u8DEF\u7531,\u670D\u52A1\u540D\u5BF9\u5E94 llm.proxyServiceName\uFF08\u4E5F\u53EF\u4EE5\u65B0\u5EFADNS\u7C7B\u578B\u670D\u52A1\uFF0C\u4F7F\u63D2\u4EF6\u8BBF\u95EE\u5176\u4ED6\u5927\u6A21\u578B\uFF09

> 4.\u5982\u679C\u4F7F\u7528\u56FA\u5B9A\u5730\u5740\u7684\u670D\u52A1\u8C03\u7528\u7F51\u5173\u81EA\u8EAB\uFF0C\u9700\u628A127.0.0.1\u52A0\u5165\u5230\u7F51\u5173\u7684\u8BBF\u95EE\u767D\u540D\u5355\u4E2D

| \u540D\u79F0           |   \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                         |
| -------------- | --------------- | -------- | ------ | ------------------------------------------------------------ |
| \`scene.category\`         | string          | \u5FC5\u586B     | -      | \u9884\u8BBE\u573A\u666F\u7C7B\u522B\uFF0C\u4EE5\`|\`\u5206\u5272\uFF0C\u5982\uFF1A\`\u91D1\u878D|\u7535\u5546|\u6CD5\u5F8B|Higress\`|
| \`scene.prompt\`         | string          | \u975E\u5FC5\u586B     | \u4F60\u662F\u4E00\u4E2A\u667A\u80FD\u7C7B\u522B\u8BC6\u522B\u52A9\u624B\uFF0C\u8D1F\u8D23\u6839\u636E\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u548C\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u786E\u5B9A\u95EE\u9898\u5C5E\u4E8E\u54EA\u4E2A\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u5E76\u7ED9\u51FA\u76F8\u5E94\u7684\u7C7B\u522B\u3002\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u4E3A:%s,\u9884\u8BBE\u7684\u7C7B\u522B\u4E3A%s\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u79CD\u5177\u4F53\u7C7B\u522B\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u8FD4\u56DE'NotFound'\u3002     | llm\u8BF7\u6C42prompt\u6A21\u677F |
| \`llm.proxyServiceName\`         | string          | \u5FC5\u586B     | -      | \u65B0\u5EFA\u7684higress\u670D\u52A1\uFF0C\u6307\u5411\u5927\u6A21\u578B (\u53D6higress\u4E2D\u7684 FQDN \u503C)|
| \`llm.proxyUrl\`         | string          | \u5FC5\u586B     | -      | \u5927\u6A21\u578B\u8DEF\u7531\u8BF7\u6C42\u5730\u5740\u5168\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u7F51\u5173\u81EA\u8EAB\u7684\u5730\u5740\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5176\u4ED6\u5927\u6A21\u578B\u7684\u5730\u5740\uFF08openai\u534F\u8BAE\uFF09\uFF0C\u4F8B\u5982\uFF1Ahttp://127.0.0.1:80/intent/compatible-mode/v1/chat/completions |
| \`llm.proxyDomain\`         | string          | \u975E\u5FC5\u586B     |   proxyUrl\u4E2D\u89E3\u6790\u83B7\u53D6    | \u5927\u6A21\u578B\u670D\u52A1\u7684domain|
| \`llm.proxyPort\`         | string          | \u975E\u5FC5\u586B     | proxyUrl\u4E2D\u89E3\u6790\u83B7\u53D6     | \u5927\u6A21\u578B\u670D\u52A1\u7AEF\u53E3\u53F7 |
| \`llm.proxyApiKey\`         | string          | \u975E\u5FC5\u586B     | -     | \u5F53\u4F7F\u7528\u5916\u90E8\u5927\u6A21\u578B\u670D\u52A1\u65F6\u9700\u914D\u7F6E \u5BF9\u5E94\u5927\u6A21\u578B\u7684 API_KEY |
| \`llm.proxyModel\`         | string          | \u975E\u5FC5\u586B     | qwen-long      | \u5927\u6A21\u578B\u7C7B\u578B |
| \`llm.proxyTimeout\`         | number          | \u975E\u5FC5\u586B     | 10000      | \u8C03\u7528\u5927\u6A21\u578B\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4Dms\uFF0C\u9ED8\u8BA4\uFF1A10000ms |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
scene:
  category: "\u91D1\u878D|\u7535\u5546|\u6CD5\u5F8B|Higress"
  prompt: "\u4F60\u662F\u4E00\u4E2A\u667A\u80FD\u7C7B\u522B\u8BC6\u522B\u52A9\u624B\uFF0C\u8D1F\u8D23\u6839\u636E\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u548C\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u786E\u5B9A\u95EE\u9898\u5C5E\u4E8E\u54EA\u4E2A\u9884\u8BBE\u7684\u7C7B\u522B\uFF0C\u5E76\u7ED9\u51FA\u76F8\u5E94\u7684\u7C7B\u522B\u3002\u7528\u6237\u63D0\u51FA\u7684\u95EE\u9898\u4E3A:'%s',\u9884\u8BBE\u7684\u7C7B\u522B\u4E3A'%s'\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E00\u79CD\u5177\u4F53\u7C7B\u522B\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u5C31\u8FD4\u56DE'NotFound'\u3002"
llm:
  proxyServiceName: "intent-service.static"
  proxyUrl: "http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions"
  proxyDomain: "127.0.0.1"
  proxyPort: "80"
  proxyModel: "qwen-long"
  proxyApiKey: ""
  proxyTimeout: "10000"
\`\`\`
`},a=function(){return t},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"}]},e=p((g,h,E)=>{const{layout:f,...o}=n;return o.file=s,o.url=d,c`${y()}${m(t)}`})});export{e as Content,u as __tla,a as compiledContent,e as default,s as file,n as frontmatter,i as getHeadings,r as rawContent,d as url};
