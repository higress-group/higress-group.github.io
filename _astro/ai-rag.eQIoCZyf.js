import{c as x,__tla as r}from"./astro-component.cI6d52vQ.js";import{r as p,m as l,u as v,__tla as h}from"./constant.drmVjFn1.js";import{__tla as u}from"./astro/assets-service.Da9pL5MS.js";let e,c,t,a,n,o,d,y=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u57FA\u4E8E AI \u68C0\u7D22\u589E\u5F3A\u751F\u6210\uFF08RAG\uFF09\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u5B9E\u73B0 LLM-RAG \u5E94\u7528\u7684\u5F00\u53D1\uFF0C\u6D41\u7A0B\u5982\u56FE\u6240\u793A\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01LuRVs41KhoeuzakeF_!!6000000001196-0-tps-1926-1316.jpg" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>




































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">dashscope.apiKey</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE\u901A\u4E49\u5343\u95EE\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002</td></tr><tr><td><code dir="auto">dashscope.serviceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u901A\u4E49\u5343\u95EE\u670D\u52A1\u540D</td></tr><tr><td><code dir="auto">dashscope.servicePort</code></td><td>int</td><td>\u5FC5\u586B</td><td>-</td><td>\u901A\u4E49\u5343\u95EE\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">dashscope.domain</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u901A\u4E49\u5343\u95EE\u670D\u52A1\u65F6\u57DF\u540D</td></tr><tr><td><code dir="auto">dashvector.apiKey</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002</td></tr><tr><td><code dir="auto">dashvector.serviceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u540D</td></tr><tr><td><code dir="auto">dashvector.servicePort</code></td><td>int</td><td>\u5FC5\u586B</td><td>-</td><td>\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">dashvector.domain</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u65F6\u57DF\u540D</td></tr></tbody></table>
<h1 id="\u793A\u4F8B">\u793A\u4F8B</h1>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">dashscope</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">dashvector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashvector</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">vrs-cn-xxxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">collection</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="dashscope:\x7F    apiKey: xxxxxxxxxxxxxxx\x7F    serviceName: dashscope\x7F    servicePort: 443\x7F    domain: dashscope.aliyuncs.com\x7Fdashvector:\x7F    apiKey: xxxxxxxxxxxxxxxxxxxx\x7F    serviceName: dashvector\x7F    servicePort: 443\x7F    domain: vrs-cn-xxxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com\x7F    collection: xxxxxxxxxxxxxxx"><div></div></button></div></figure></div>
<p><a href="https://github.com/shijiebei2009/CEC-Corpus" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">CEC-Corpus</a> \u6570\u636E\u96C6\u5305\u542B 332 \u7BC7\u7A81\u53D1\u4E8B\u4EF6\u7684\u65B0\u95FB\u62A5\u9053\u7684\u8BED\u6599\u548C\u6807\u6CE8\u6570\u636E\uFF0C\u63D0\u53D6\u5176\u539F\u59CB\u7684\u65B0\u95FB\u7A3F\u6587\u672C\uFF0C\u5C06\u5176\u5411\u91CF\u5316\u540E\u6DFB\u52A0\u5230\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u3002\u6587\u672C\u5411\u91CF\u5316\u7684\u6559\u7A0B\u53EF\u4EE5\u53C2\u8003<a href="https://help.aliyun.com/document_detail/2510234.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300A\u57FA\u4E8E\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u4E0E\u7075\u79EF\u5B9E\u73B0\u8BED\u4E49\u641C\u7D22\u300B</a>\u3002</p>
<p>\u4EE5\u4E0B\u4E3A\u4F7F\u7528 RAG \u8FDB\u884C\u589E\u5F3A\u7684\u4F8B\u5B50\uFF0C\u539F\u59CB\u8BF7\u6C42\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u6D77\u5357\u8FFD\u5C3E\u4E8B\u6545\uFF0C\u53D1\u751F\u5728\u54EA\u91CC\uFF1F\u539F\u56E0\u662F\u4EC0\u4E48\uFF1F\u4EBA\u5458\u4F24\u4EA1\u60C5\u51B5\u5982\u4F55\uFF1F</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="\u6D77\u5357\u8FFD\u5C3E\u4E8B\u6545\uFF0C\u53D1\u751F\u5728\u54EA\u91CC\uFF1F\u539F\u56E0\u662F\u4EC0\u4E48\uFF1F\u4EBA\u5458\u4F24\u4EA1\u60C5\u51B5\u5982\u4F55\uFF1F"><div></div></button></div></figure></div>
<p>\u672A\u7ECF\u8FC7 RAG \u63D2\u4EF6\u5904\u7406 LLM \u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u62B1\u6B49\uFF0C\u4F5C\u4E3AAI\u6A21\u578B\uFF0C\u6211\u65E0\u6CD5\u5B9E\u65F6\u83B7\u53D6\u548C\u66F4\u65B0\u65B0\u95FB\u4E8B\u4EF6\u7684\u5177\u4F53\u4FE1\u606F\uFF0C\u5305\u62EC\u5730\u70B9\u3001\u539F\u56E0\u3001\u4EBA\u5458\u4F24\u4EA1\u7B49\u7EC6\u8282\u3002\u5BF9\u4E8E\u6B64\u7C7B\u5177\u4F53\u4E8B\u4EF6\uFF0C\u5EFA\u8BAE\u60A8\u67E5\u9605\u6700\u65B0\u7684\u65B0\u95FB\u62A5\u9053\u6216\u5B98\u65B9\u901A\u62A5\u4EE5\u83B7\u53D6\u51C6\u786E\u4FE1\u606F\u3002\u60A8\u53EF\u4EE5\u8BBF\u95EE\u4E3B\u6D41\u5A92\u4F53\u7F51\u7AD9\u3001\u4F7F\u7528\u65B0\u95FB\u5E94\u7528\u6216\u8005\u5173\u6CE8\u76F8\u5173\u653F\u5E9C\u90E8\u95E8\u7684\u516C\u544A\u6765\u83B7\u53D6\u8FD9\u7C7B\u52A8\u6001\u8D44\u8BAF\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="\u62B1\u6B49\uFF0C\u4F5C\u4E3AAI\u6A21\u578B\uFF0C\u6211\u65E0\u6CD5\u5B9E\u65F6\u83B7\u53D6\u548C\u66F4\u65B0\u65B0\u95FB\u4E8B\u4EF6\u7684\u5177\u4F53\u4FE1\u606F\uFF0C\u5305\u62EC\u5730\u70B9\u3001\u539F\u56E0\u3001\u4EBA\u5458\u4F24\u4EA1\u7B49\u7EC6\u8282\u3002\u5BF9\u4E8E\u6B64\u7C7B\u5177\u4F53\u4E8B\u4EF6\uFF0C\u5EFA\u8BAE\u60A8\u67E5\u9605\u6700\u65B0\u7684\u65B0\u95FB\u62A5\u9053\u6216\u5B98\u65B9\u901A\u62A5\u4EE5\u83B7\u53D6\u51C6\u786E\u4FE1\u606F\u3002\u60A8\u53EF\u4EE5\u8BBF\u95EE\u4E3B\u6D41\u5A92\u4F53\u7F51\u7AD9\u3001\u4F7F\u7528\u65B0\u95FB\u5E94\u7528\u6216\u8005\u5173\u6CE8\u76F8\u5173\u653F\u5E9C\u90E8\u95E8\u7684\u516C\u544A\u6765\u83B7\u53D6\u8FD9\u7C7B\u52A8\u6001\u8D44\u8BAF\u3002"><div></div></button></div></figure></div>
<p>\u7ECF\u8FC7 RAG \u63D2\u4EF6\u5904\u7406\u540E LLM \u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u6D77\u5357\u8FFD\u5C3E\u4E8B\u6545\u53D1\u751F\u5728\u6D77\u6587\u9AD8\u901F\u516C\u8DEF\u6587\u660C\u81F3\u6D77\u53E3\u65B9\u541137\u516C\u91CC\u5904\u3002\u5173\u4E8E\u4E8B\u6545\u7684\u5177\u4F53\u539F\u56E0\uFF0C\u4EA4\u8B66\u90E8\u95E8\u5F53\u65F6\u4ECD\u5728\u8FDB\u4E00\u6B65\u8C03\u67E5\u4E2D\uFF0C\u6240\u4EE5\u6839\u636E\u63D0\u4F9B\u7684\u4FE1\u606F\u65E0\u6CD5\u786E\u5B9A\u4E8B\u6545\u7684\u786E\u5207\u539F\u56E0\u3002\u4EBA\u5458\u4F24\u4EA1\u60C5\u51B5\u662F1\u4EBA\u6B7B\u4EA1\uFF08\u53F8\u673A\u5F53\u573A\u6B7B\u4EA1\uFF09\uFF0C\u53E6\u6709 8 \u4EBA\u53D7\u4F24\uFF08\u5305\u62EC 2 \u540D\u513F\u7AE5\u548C 6 \u540D\u6210\u4EBA\uFF09\uFF0C\u6240\u6709\u53D7\u4F24\u4EBA\u5458\u90FD\u88AB\u89E3\u6551\u5E76\u9001\u5F80\u533B\u9662\u8FDB\u884C\u6CBB\u7597\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="\u6D77\u5357\u8FFD\u5C3E\u4E8B\u6545\u53D1\u751F\u5728\u6D77\u6587\u9AD8\u901F\u516C\u8DEF\u6587\u660C\u81F3\u6D77\u53E3\u65B9\u541137\u516C\u91CC\u5904\u3002\u5173\u4E8E\u4E8B\u6545\u7684\u5177\u4F53\u539F\u56E0\uFF0C\u4EA4\u8B66\u90E8\u95E8\u5F53\u65F6\u4ECD\u5728\u8FDB\u4E00\u6B65\u8C03\u67E5\u4E2D\uFF0C\u6240\u4EE5\u6839\u636E\u63D0\u4F9B\u7684\u4FE1\u606F\u65E0\u6CD5\u786E\u5B9A\u4E8B\u6545\u7684\u786E\u5207\u539F\u56E0\u3002\u4EBA\u5458\u4F24\u4EA1\u60C5\u51B5\u662F1\u4EBA\u6B7B\u4EA1\uFF08\u53F8\u673A\u5F53\u573A\u6B7B\u4EA1\uFF09\uFF0C\u53E6\u6709 8 \u4EBA\u53D7\u4F24\uFF08\u5305\u62EC 2 \u540D\u513F\u7AE5\u548C 6 \u540D\u6210\u4EBA\uFF09\uFF0C\u6240\u6709\u53D7\u4F24\u4EBA\u5458\u90FD\u88AB\u89E3\u6551\u5E76\u9001\u5F80\u533B\u9662\u8FDB\u884C\u6CBB\u7597\u3002"><div></div></button></div></figure></div>`,a={title:"AI \u68C0\u7D22\u589E\u5F3A\u751F\u6210",keywords:["higress","ai","rag"],description:"\u57FA\u4E8E AI \u68C0\u7D22\u589E\u5F3A\u751F\u6210\uFF08RAG\uFF09\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u5B9E\u73B0 LLM-RAG \u5E94\u7528\u7684\u5F00\u53D1\u3002"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-rag.md",d=void 0,o=function(){return`
## \u529F\u80FD\u8BF4\u660E

\u57FA\u4E8E AI \u68C0\u7D22\u589E\u5F3A\u751F\u6210\uFF08RAG\uFF09\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u5B9E\u73B0 LLM-RAG \u5E94\u7528\u7684\u5F00\u53D1\uFF0C\u6D41\u7A0B\u5982\u56FE\u6240\u793A\uFF1A

![](https://img.alicdn.com/imgextra/i1/O1CN01LuRVs41KhoeuzakeF_!!6000000001196-0-tps-1926-1316.jpg)

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                               |
|----------------|-----------------|------|-----|----------------------------------------------------------------------------------|
| \`dashscope.apiKey\` | string | \u5FC5\u586B | - | \u7528\u4E8E\u5728\u8BBF\u95EE\u901A\u4E49\u5343\u95EE\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002 |
| \`dashscope.serviceName\` | string | \u5FC5\u586B | - | \u901A\u4E49\u5343\u95EE\u670D\u52A1\u540D |
| \`dashscope.servicePort\` | int | \u5FC5\u586B | - | \u901A\u4E49\u5343\u95EE\u670D\u52A1\u7AEF\u53E3 |
| \`dashscope.domain\` | string | \u5FC5\u586B | - | \u8BBF\u95EE\u901A\u4E49\u5343\u95EE\u670D\u52A1\u65F6\u57DF\u540D |
| \`dashvector.apiKey\` | string | \u5FC5\u586B | - | \u7528\u4E8E\u5728\u8BBF\u95EE\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002 |
| \`dashvector.serviceName\` | string | \u5FC5\u586B | - | \u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u540D |
| \`dashvector.servicePort\` | int | \u5FC5\u586B | - | \u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u7AEF\u53E3 |
| \`dashvector.domain\` | string | \u5FC5\u586B | - | \u8BBF\u95EE\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u65F6\u57DF\u540D |

# \u793A\u4F8B

\`\`\`yaml
dashscope:
    apiKey: xxxxxxxxxxxxxxx
    serviceName: dashscope
    servicePort: 443
    domain: dashscope.aliyuncs.com
dashvector:
    apiKey: xxxxxxxxxxxxxxxxxxxx
    serviceName: dashvector
    servicePort: 443
    domain: vrs-cn-xxxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com
    collection: xxxxxxxxxxxxxxx
\`\`\`

[CEC-Corpus](https://github.com/shijiebei2009/CEC-Corpus) \u6570\u636E\u96C6\u5305\u542B 332 \u7BC7\u7A81\u53D1\u4E8B\u4EF6\u7684\u65B0\u95FB\u62A5\u9053\u7684\u8BED\u6599\u548C\u6807\u6CE8\u6570\u636E\uFF0C\u63D0\u53D6\u5176\u539F\u59CB\u7684\u65B0\u95FB\u7A3F\u6587\u672C\uFF0C\u5C06\u5176\u5411\u91CF\u5316\u540E\u6DFB\u52A0\u5230\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u3002\u6587\u672C\u5411\u91CF\u5316\u7684\u6559\u7A0B\u53EF\u4EE5\u53C2\u8003[\u300A\u57FA\u4E8E\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u4E0E\u7075\u79EF\u5B9E\u73B0\u8BED\u4E49\u641C\u7D22\u300B](https://help.aliyun.com/document_detail/2510234.html)\u3002

\u4EE5\u4E0B\u4E3A\u4F7F\u7528 RAG \u8FDB\u884C\u589E\u5F3A\u7684\u4F8B\u5B50\uFF0C\u539F\u59CB\u8BF7\u6C42\u4E3A\uFF1A
\`\`\`
\u6D77\u5357\u8FFD\u5C3E\u4E8B\u6545\uFF0C\u53D1\u751F\u5728\u54EA\u91CC\uFF1F\u539F\u56E0\u662F\u4EC0\u4E48\uFF1F\u4EBA\u5458\u4F24\u4EA1\u60C5\u51B5\u5982\u4F55\uFF1F
\`\`\`

\u672A\u7ECF\u8FC7 RAG \u63D2\u4EF6\u5904\u7406 LLM \u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\uFF1A
\`\`\`
\u62B1\u6B49\uFF0C\u4F5C\u4E3AAI\u6A21\u578B\uFF0C\u6211\u65E0\u6CD5\u5B9E\u65F6\u83B7\u53D6\u548C\u66F4\u65B0\u65B0\u95FB\u4E8B\u4EF6\u7684\u5177\u4F53\u4FE1\u606F\uFF0C\u5305\u62EC\u5730\u70B9\u3001\u539F\u56E0\u3001\u4EBA\u5458\u4F24\u4EA1\u7B49\u7EC6\u8282\u3002\u5BF9\u4E8E\u6B64\u7C7B\u5177\u4F53\u4E8B\u4EF6\uFF0C\u5EFA\u8BAE\u60A8\u67E5\u9605\u6700\u65B0\u7684\u65B0\u95FB\u62A5\u9053\u6216\u5B98\u65B9\u901A\u62A5\u4EE5\u83B7\u53D6\u51C6\u786E\u4FE1\u606F\u3002\u60A8\u53EF\u4EE5\u8BBF\u95EE\u4E3B\u6D41\u5A92\u4F53\u7F51\u7AD9\u3001\u4F7F\u7528\u65B0\u95FB\u5E94\u7528\u6216\u8005\u5173\u6CE8\u76F8\u5173\u653F\u5E9C\u90E8\u95E8\u7684\u516C\u544A\u6765\u83B7\u53D6\u8FD9\u7C7B\u52A8\u6001\u8D44\u8BAF\u3002
\`\`\`

\u7ECF\u8FC7 RAG \u63D2\u4EF6\u5904\u7406\u540E LLM \u8FD4\u56DE\u7684\u7ED3\u679C\u4E3A\uFF1A
\`\`\`
\u6D77\u5357\u8FFD\u5C3E\u4E8B\u6545\u53D1\u751F\u5728\u6D77\u6587\u9AD8\u901F\u516C\u8DEF\u6587\u660C\u81F3\u6D77\u53E3\u65B9\u541137\u516C\u91CC\u5904\u3002\u5173\u4E8E\u4E8B\u6545\u7684\u5177\u4F53\u539F\u56E0\uFF0C\u4EA4\u8B66\u90E8\u95E8\u5F53\u65F6\u4ECD\u5728\u8FDB\u4E00\u6B65\u8C03\u67E5\u4E2D\uFF0C\u6240\u4EE5\u6839\u636E\u63D0\u4F9B\u7684\u4FE1\u606F\u65E0\u6CD5\u786E\u5B9A\u4E8B\u6545\u7684\u786E\u5207\u539F\u56E0\u3002\u4EBA\u5458\u4F24\u4EA1\u60C5\u51B5\u662F1\u4EBA\u6B7B\u4EA1\uFF08\u53F8\u673A\u5F53\u573A\u6B7B\u4EA1\uFF09\uFF0C\u53E6\u6709 8 \u4EBA\u53D7\u4F24\uFF08\u5305\u62EC 2 \u540D\u513F\u7AE5\u548C 6 \u540D\u6210\u4EBA\uFF09\uFF0C\u6240\u6709\u53D7\u4F24\u4EBA\u5458\u90FD\u88AB\u89E3\u6551\u5E76\u9001\u5F80\u533B\u9662\u8FDB\u884C\u6CBB\u7597\u3002
\`\`\``},c=function(){return s},n=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:1,slug:"\u793A\u4F8B",text:"\u793A\u4F8B"}]},e=x((m,g,E)=>{const{layout:f,...i}=a;return i.file=t,i.url=d,p`${l()}${v(s)}`})});export{e as Content,y as __tla,c as compiledContent,e as default,t as file,a as frontmatter,n as getHeadings,o as rawContent,d as url};
