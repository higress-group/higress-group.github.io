import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r as d,m as g,u as h,__tla as E}from"./constant.NEBTwwBu.js";import{__tla as u}from"./astro/assets-service.BhtN0nM5.js";let e,i,a,t,p,l,r,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<p>\u672C\u6307\u5357\u57FA\u4E8E docker \u63D0\u4F9B Higress AI \u7F51\u5173\u4E00\u952E\u5FEB\u901F\u90E8\u7F72\u7684\u65B9\u5F0F\uFF0C\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08\u5982\u6807\u51C6k8s\u96C6\u7FA4\u3001\u672C\u5730k8s\u96C6\u7FA4\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167 <a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5FEB\u901F\u5F00\u59CB</a>\u3002</p>
<p>\u57FA\u4E8E Higress AI \u7F51\u5173\u5B9E\u73B0 Remote MCP Server \u6258\u7BA1\uFF0C\u8BF7\u53C2\u7167<a href="../../ai/mcp-quick-start/" referrerpolicy="unsafe-url">MCP Server \u5FEB\u901F\u5F00\u59CB</a>\u3002</p>
<h1 id="\u5B89\u88C5-higress-ai-\u7F51\u5173">\u5B89\u88C5 Higress AI \u7F51\u5173</h1>
<p>\u5728\u672C\u5730\u63A7\u5236\u53F0\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165\u6A21\u578B\u4F9B\u5E94\u5546\u7684 API-KEY \uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002</p>
<p><img src="/img/1745553594115.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5982\u60A8\u5F53\u524D\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>\u547D\u4EE4\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539<em>DEFAULT_GATEWAY_HTTP_PORT_/<em>DEFAULT_GATEWAY_HTTPS_PORT</em>/_DEFAULT_CONSOLE_PORT</em>\uFF1B\u7136\u540E\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002</p>
<p><img src="/img/1745553596367.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A</p>
<p><img src="/img/1745553599492.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u63A7\u5236\u53F0\u914D\u7F6E">\u63A7\u5236\u53F0\u914D\u7F6E</h1>
<p>\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762 <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002</p>
<p>\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684 API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002</p>
<p><img src="/img/1745553602857.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u6BCF\u4E2A<strong>AI\u670D\u52A1\u63D0\u4F9B\u5546</strong>\u90FD\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u4EE4\u724C\u964D\u7EA7\u7B56\u7565\uFF0C\u5F53\u67D0\u4E00\u8BA4\u8BC1\u4EE4\u724C\u8FD4\u56DE\u5F02\u5E38\u54CD\u5E94\u7684\u6570\u91CF\u8D85\u51FA\u9608\u503C\uFF0CHigress \u5C06\u6682\u505C\u4F7F\u7528\u8BE5\u4EE4\u724C\u53D1\u8D77\u8BF7\u6C42\uFF0C\u76F4\u81F3\u540E\u7EED\u5065\u5EB7\u68C0\u6D4B\u8BF7\u6C42\u8FDE\u7EED\u6536\u5230\u4E00\u5B9A\u6570\u91CF\u7684\u6B63\u5E38\u54CD\u5E94\u3002</p>
<p><img src="/img/1745553605663.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728<strong>AI\u8DEF\u7531\u7BA1\u7406</strong>\u754C\u9762\uFF0C\u652F\u6301\u914D\u7F6E\u4E0D\u540C\u8DEF\u7531\u7684\u57DF\u540D\u3001\u6A21\u578B\u5339\u914D\u65B9\u5F0F\u3001\u964D\u7EA7\u914D\u7F6E\u3001\u8BF7\u6C42\u6D88\u8D39\u8005\u7B49\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7B56\u7565\uFF0C\u914D\u7F6E\u4E0D\u540C\u8BA4\u8BC1\u9274\u6743\u65B9\u5F0F\u3001\u9650\u6D41\u7B56\u7565\u7B49\uFF0C\u4E5F\u652F\u6301\u5982 RAG\u3001Prompt \u6A21\u677F\u3001\u8BED\u4E49\u7F13\u5B58\u7B49\u529F\u80FD\u3002</p>
<p><img src="/img/1745553608628.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1745553611408.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1745553614457.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u8C03\u8BD5">\u8C03\u8BD5</h1>
<p>\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982 HTTP \u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u8C01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A</p>
<p><img src="/img/1745553617678.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u7ED3\u679C\u89C2\u6D4B">\u7ED3\u679C\u89C2\u6D4B</h1>
<p>\u5728<strong>AI\u76D1\u63A7\u9762\u677F</strong>\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9 AI \u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FA Token \u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546\u53CA\u6A21\u578B Token \u4F7F\u7528\u6570\u91CF\u7B49\u3002</p>
<p>\u901A\u8FC7\u89C2\u6D4B\u6307\u6807\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u6BD4\u8F83\u5F53\u524D\u591A\u4E2A\u6A21\u578B\u7684\u4F7F\u7528\u60C5\u51B5\u53CA\u65F6\u5EF6\u5BF9\u6BD4\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u8FDB\u4E00\u6B65\u4F18\u5316\u6A21\u578B\u8C03\u7528\u7B56\u7565\u3002</p>
<p><img src="/img/1745553620469.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>\u5982\u60A8\u5728\u90E8\u7F72\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a> \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002</p>
<p>\u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>\u3002</p>
</blockquote>`,t={title:"\u4E00\u952E\u90E8\u7F72 Higress AI \u7F51\u5173",description:"docker\u4E00\u952E\u90E8\u7F72 AI \u7F51\u5173,\u63A5\u5165\u591A\u6A21\u578B\u534F\u8BAE\u4EE3\u7406\u529F\u80FD,\u89C2\u6D4B\u6A21\u578B\u4F7F\u7528\u60C5\u51B5,\u7BA1\u7406\u8C03\u7528\u6D88\u8D39\u8005",date:"2025-03-24",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/quick-start.md",r=void 0,l=function(){return`
\u672C\u6307\u5357\u57FA\u4E8E docker \u63D0\u4F9B Higress AI \u7F51\u5173\u4E00\u952E\u5FEB\u901F\u90E8\u7F72\u7684\u65B9\u5F0F\uFF0C\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08\u5982\u6807\u51C6k8s\u96C6\u7FA4\u3001\u672C\u5730k8s\u96C6\u7FA4\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167 [\u5FEB\u901F\u5F00\u59CB](https://higress.cn/docs/latest/user/quickstart/)\u3002

\u57FA\u4E8E Higress AI \u7F51\u5173\u5B9E\u73B0 Remote MCP Server \u6258\u7BA1\uFF0C\u8BF7\u53C2\u7167[MCP Server \u5FEB\u901F\u5F00\u59CB](../ai/mcp-quick-start.md)\u3002

# \u5B89\u88C5 Higress AI \u7F51\u5173

\u5728\u672C\u5730\u63A7\u5236\u53F0\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165\u6A21\u578B\u4F9B\u5E94\u5546\u7684 API-KEY \uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002

![](/img/1745553594115.png)



\u5982\u60A8\u5F53\u524D\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528\uFF0C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 \`wget https://higress.cn/ai-gateway/install.sh\`\u547D\u4EE4\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539*DEFAULT_GATEWAY_HTTP_PORT_/_DEFAULT_GATEWAY_HTTPS_PORT_/_DEFAULT_CONSOLE_PORT*\uFF1B\u7136\u540E\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002

![](/img/1745553596367.png)



\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A

![](/img/1745553599492.png)



# \u63A7\u5236\u53F0\u914D\u7F6E
\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762 [http://localhost:8001/](http://localhost:8001/)\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002

\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684 API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002

![](/img/1745553602857.png)



\u6BCF\u4E2A**AI\u670D\u52A1\u63D0\u4F9B\u5546**\u90FD\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u4EE4\u724C\u964D\u7EA7\u7B56\u7565\uFF0C\u5F53\u67D0\u4E00\u8BA4\u8BC1\u4EE4\u724C\u8FD4\u56DE\u5F02\u5E38\u54CD\u5E94\u7684\u6570\u91CF\u8D85\u51FA\u9608\u503C\uFF0CHigress \u5C06\u6682\u505C\u4F7F\u7528\u8BE5\u4EE4\u724C\u53D1\u8D77\u8BF7\u6C42\uFF0C\u76F4\u81F3\u540E\u7EED\u5065\u5EB7\u68C0\u6D4B\u8BF7\u6C42\u8FDE\u7EED\u6536\u5230\u4E00\u5B9A\u6570\u91CF\u7684\u6B63\u5E38\u54CD\u5E94\u3002

![](/img/1745553605663.png)

\u5728**AI\u8DEF\u7531\u7BA1\u7406**\u754C\u9762\uFF0C\u652F\u6301\u914D\u7F6E\u4E0D\u540C\u8DEF\u7531\u7684\u57DF\u540D\u3001\u6A21\u578B\u5339\u914D\u65B9\u5F0F\u3001\u964D\u7EA7\u914D\u7F6E\u3001\u8BF7\u6C42\u6D88\u8D39\u8005\u7B49\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7B56\u7565\uFF0C\u914D\u7F6E\u4E0D\u540C\u8BA4\u8BC1\u9274\u6743\u65B9\u5F0F\u3001\u9650\u6D41\u7B56\u7565\u7B49\uFF0C\u4E5F\u652F\u6301\u5982 RAG\u3001Prompt \u6A21\u677F\u3001\u8BED\u4E49\u7F13\u5B58\u7B49\u529F\u80FD\u3002

![](/img/1745553608628.png)

![](/img/1745553611408.png)

![](/img/1745553614457.png)

# \u8C03\u8BD5
\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982 HTTP \u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09

\`\`\`yaml
curl 'http://localhost:8080/v1/chat/completions' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "\u4F60\u662F\u8C01"
      }
    ]
  }'

\`\`\`

\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A

![](/img/1745553617678.png)



# \u7ED3\u679C\u89C2\u6D4B
\u5728**AI\u76D1\u63A7\u9762\u677F**\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9 AI \u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FA Token \u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546\u53CA\u6A21\u578B Token \u4F7F\u7528\u6570\u91CF\u7B49\u3002

\u901A\u8FC7\u89C2\u6D4B\u6307\u6807\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u6BD4\u8F83\u5F53\u524D\u591A\u4E2A\u6A21\u578B\u7684\u4F7F\u7528\u60C5\u51B5\u53CA\u65F6\u5EF6\u5BF9\u6BD4\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u8FDB\u4E00\u6B65\u4F18\u5316\u6A21\u578B\u8C03\u7528\u7B56\u7565\u3002

![](/img/1745553620469.png)


> \u5982\u60A8\u5728\u90E8\u7F72\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
> 
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002
`},i=function(){return s},p=function(){return[{depth:1,slug:"\u5B89\u88C5-higress-ai-\u7F51\u5173",text:"\u5B89\u88C5 Higress AI \u7F51\u5173"},{depth:1,slug:"\u63A7\u5236\u53F0\u914D\u7F6E",text:"\u63A7\u5236\u53F0\u914D\u7F6E"},{depth:1,slug:"\u8C03\u8BD5",text:"\u8C03\u8BD5"},{depth:1,slug:"\u7ED3\u679C\u89C2\u6D4B",text:"\u7ED3\u679C\u89C2\u6D4B"}]},e=c((y,v,f)=>{const{layout:A,...n}=t;return n.file=a,n.url=r,d`${g()}${h(s)}`})});export{e as Content,m as __tla,i as compiledContent,e as default,a as file,t as frontmatter,p as getHeadings,l as rawContent,r as url};
