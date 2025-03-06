import{c as p,__tla as c}from"./astro-component.CXlaF79K.js";import{r as d,m as g,u as f,__tla as y}from"./constant.aRFXM4Q6.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let e,r,t,n,l,i,a,E=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h1 id="bskZG">\u573A\u666F\u63CF\u8FF0</h1>
AI\u7F51\u5173\u80FD\u591F\u5C06\u5916\u90E8\u8C03\u7528\u4E0D\u540C\u5927\u6A21\u578B\u7684\u8BF7\u6C42\uFF0C\u901A\u8FC7\u7EDF\u4E00\u7684\u8C03\u7528\u65B9\u5F0F\u8F6C\u53D1\u5230\u5185\u90E8\u5BF9\u5E94\u7684\u5927\u6A21\u578B\u4E0A\uFF0C\u4F7F\u5F97\u540E\u7AEF\u6A21\u578B\u8C03\u5EA6\u66F4\u52A0\u7075\u6D3B\uFF1BHigress.ai\u652F\u6301\u5E38\u7528\u7684100+\u4E2A\u6A21\u578B\u7684\u7EDF\u4E00\u534F\u8BAE\u8F6C\u6362\uFF0C\u5E76\u652F\u6301\u6A21\u578B\u7EA7Fallback\u3002
<p>\u5728\u5927\u6A21\u578B\u8BC4\u6D4B\u8FC7\u7A0B\u4E2D\uFF0C\u591A\u6A21\u578B\u4EE3\u7406\u529F\u80FD\u53EF\u4EE5\u6784\u9020\u7EDF\u4E00\u6570\u636E\u96C6\uFF0C\u5C06\u6A21\u578B\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u7AEF\u6A21\u578B\uFF0C\u9A8C\u8BC1\u6A21\u578B\u7684\u6548\u679C\uFF1B\u7ED3\u5408\u53EF\u89C2\u6D4B\u63D2\u4EF6\uFF0C\u80FD\u591F\u6E05\u6670\u5730\u8FFD\u8E2A\u4E0D\u540C\u6A21\u578B\u7684\u94FE\u8DEF\u3002</p>
<h1 id="uEsio">\u90E8\u7F72Higress.AI</h1>
\u672C\u6307\u5357\u4E2D\u57FA\u4E8Edocker\u90E8\u7F72\uFF0C\u5982\u60A8\u9700\u8981\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08k8s\u3001helm\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167[https://higress.cn/docs/latest/user/quickstart/](https://higress.cn/docs/latest/user/quickstart/)\u3002
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<p><code dir="auto">&#x3C;font style="color:rgb(53, 56, 65);">curl -sS https://higress.cn/ai-gateway/install.sh | bash&#x3C;/font></code></p>
<p><font style="color:rgb(53, 56, 65);">\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165 Aliyun Dashscope\u6216\u5176\u4ED6API-KEY\uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002</font></p>
<p><img src="/img/1741233375076.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(53, 56, 65);">\u4E0A\u8FF0\u547D\u4EE4\u7684\u9ED8\u8BA4\u7684HTTP\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8080\uFF0CHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8443\uFF0C\u63A7\u5236\u53F0\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8001\u3002\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 </font><code dir="auto">&#x3C;font style="color:rgb(53, 56, 65);">wget https://higress.cn/ai-gateway/install.sh&#x3C;/font></code><font style="color:rgb(53, 56, 65);">\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539</font><em><font style="color:rgb(53, 56, 65);">DEFAULT_GATEWAY_HTTP_PORT</font></em><font style="color:rgb(53, 56, 65);">/</font><em><font style="color:rgb(53, 56, 65);">DEFAULT_GATEWAY_HTTPS_PORT</font></em><font style="color:rgb(53, 56, 65);">/</font><em><font style="color:rgb(53, 56, 65);">DEFAULT_CONSOLE_PORT</font></em><font style="color:rgb(53, 56, 65);">\u7ED3\u679C\uFF1B\u7136\u540E\u662F\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002</font></p>
<p><img src="/img/1741233378334.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A</p>
<p><img src="/img/1741233381023.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="IH9ir">\u63A7\u5236\u53F0\u914D\u7F6E</h1>
\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762[http://localhost:8001/](http://localhost:8001/)\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002
<p>\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002\u8FD9\u91CC\u6211\u4EEC\u914D\u7F6E\u4E0A\u963F\u91CC\u4E91\u53CADeepSeek\u7684\u591A\u6A21\u578B\u4EE3\u7406\u3002</p>
<p><img src="/img/1741233383840.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728AI\u8DEF\u7531\u7BA1\u7406\u4E2D\uFF0C\u4E3ADeepSeek\u8DEF\u7531\u8FDB\u884C\u964D\u7EA7\u914D\u7F6E\uFF1B\u5F53\u8BF7\u6C42\u76EE\u6807\u670D\u52A1\u5931\u8D25\uFF08\u5982\u9650\u6D41\u3001\u8BBF\u95EE\u5931\u8D25\u7B49\uFF09\u65F6\uFF0C\u964D\u7EA7\u5230\u963F\u91CC\u4E91deepseek-turbo\u6A21\u578B\u3002</p>
<p><img src="/img/1741233386782.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1741233389324.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="kcnFW">\u8C03\u8BD5</h1>
\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982HTTP\u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u8C01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A</p>
<p><img src="/img/1741233392090.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="b0l07">\u7ED3\u679C\u89C2\u6D4B</h1>
\u5728AI\u76D1\u63A7\u9762\u677F\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9AI\u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FAToken\u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546/\u6A21\u578BToken\u4F7F\u7528\u6570\u91CF\u7B49\u3002
<p><img src="/img/1741233394937.png" alt="" referrerpolicy="no-referrer"></p>`,n={title:"\u591A\u6A21\u578B\u4EE3\u7406",description:"\u591A\u6A21\u578B\u4EE3\u7406\u573A\u666F\u5F00\u6E90\u8FD0\u884C\u6D41\u7A0B",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/scene-guide/multi-proxy.md",a=void 0,i=function(){return`<h1 id="bskZG">\u573A\u666F\u63CF\u8FF0</h1>
AI\u7F51\u5173\u80FD\u591F\u5C06\u5916\u90E8\u8C03\u7528\u4E0D\u540C\u5927\u6A21\u578B\u7684\u8BF7\u6C42\uFF0C\u901A\u8FC7\u7EDF\u4E00\u7684\u8C03\u7528\u65B9\u5F0F\u8F6C\u53D1\u5230\u5185\u90E8\u5BF9\u5E94\u7684\u5927\u6A21\u578B\u4E0A\uFF0C\u4F7F\u5F97\u540E\u7AEF\u6A21\u578B\u8C03\u5EA6\u66F4\u52A0\u7075\u6D3B\uFF1BHigress.ai\u652F\u6301\u5E38\u7528\u7684100+\u4E2A\u6A21\u578B\u7684\u7EDF\u4E00\u534F\u8BAE\u8F6C\u6362\uFF0C\u5E76\u652F\u6301\u6A21\u578B\u7EA7Fallback\u3002

\u5728\u5927\u6A21\u578B\u8BC4\u6D4B\u8FC7\u7A0B\u4E2D\uFF0C\u591A\u6A21\u578B\u4EE3\u7406\u529F\u80FD\u53EF\u4EE5\u6784\u9020\u7EDF\u4E00\u6570\u636E\u96C6\uFF0C\u5C06\u6A21\u578B\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u7AEF\u6A21\u578B\uFF0C\u9A8C\u8BC1\u6A21\u578B\u7684\u6548\u679C\uFF1B\u7ED3\u5408\u53EF\u89C2\u6D4B\u63D2\u4EF6\uFF0C\u80FD\u591F\u6E05\u6670\u5730\u8FFD\u8E2A\u4E0D\u540C\u6A21\u578B\u7684\u94FE\u8DEF\u3002

<h1 id="uEsio">\u90E8\u7F72Higress.AI</h1>
\u672C\u6307\u5357\u4E2D\u57FA\u4E8Edocker\u90E8\u7F72\uFF0C\u5982\u60A8\u9700\u8981\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08k8s\u3001helm\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167[https://higress.cn/docs/latest/user/quickstart/](https://higress.cn/docs/latest/user/quickstart/)\u3002



\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`<font style="color:rgb(53, 56, 65);">curl -sS https://higress.cn/ai-gateway/install.sh | bash</font>\`

<font style="color:rgb(53, 56, 65);">\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165 Aliyun Dashscope\u6216\u5176\u4ED6API-KEY\uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002</font>

![](/img/1741233375076.png)



<font style="color:rgb(53, 56, 65);">\u4E0A\u8FF0\u547D\u4EE4\u7684\u9ED8\u8BA4\u7684HTTP\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8080\uFF0CHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8443\uFF0C\u63A7\u5236\u53F0\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8001\u3002\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 </font>\`<font style="color:rgb(53, 56, 65);">wget https://higress.cn/ai-gateway/install.sh</font>\`<font style="color:rgb(53, 56, 65);">\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539</font>_<font style="color:rgb(53, 56, 65);">DEFAULT_GATEWAY_HTTP_PORT</font>_<font style="color:rgb(53, 56, 65);">/</font>_<font style="color:rgb(53, 56, 65);">DEFAULT_GATEWAY_HTTPS_PORT</font>_<font style="color:rgb(53, 56, 65);">/</font>_<font style="color:rgb(53, 56, 65);">DEFAULT_CONSOLE_PORT</font>_<font style="color:rgb(53, 56, 65);">\u7ED3\u679C\uFF1B\u7136\u540E\u662F\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002</font>

![](/img/1741233378334.png)



\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A

![](/img/1741233381023.png)



<h1 id="IH9ir">\u63A7\u5236\u53F0\u914D\u7F6E</h1>
\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762[http://localhost:8001/](http://localhost:8001/)\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002

\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002\u8FD9\u91CC\u6211\u4EEC\u914D\u7F6E\u4E0A\u963F\u91CC\u4E91\u53CADeepSeek\u7684\u591A\u6A21\u578B\u4EE3\u7406\u3002

![](/img/1741233383840.png)





\u5728AI\u8DEF\u7531\u7BA1\u7406\u4E2D\uFF0C\u4E3ADeepSeek\u8DEF\u7531\u8FDB\u884C\u964D\u7EA7\u914D\u7F6E\uFF1B\u5F53\u8BF7\u6C42\u76EE\u6807\u670D\u52A1\u5931\u8D25\uFF08\u5982\u9650\u6D41\u3001\u8BBF\u95EE\u5931\u8D25\u7B49\uFF09\u65F6\uFF0C\u964D\u7EA7\u5230\u963F\u91CC\u4E91deepseek-turbo\u6A21\u578B\u3002

![](/img/1741233386782.png)

![](/img/1741233389324.png)



<h1 id="kcnFW">\u8C03\u8BD5</h1>
\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982HTTP\u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09

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

![](/img/1741233392090.png)



<h1 id="b0l07">\u7ED3\u679C\u89C2\u6D4B</h1>
\u5728AI\u76D1\u63A7\u9762\u677F\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9AI\u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FAToken\u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546/\u6A21\u578BToken\u4F7F\u7528\u6570\u91CF\u7B49\u3002

![](/img/1741233394937.png)

`},r=function(){return s},l=function(){return[]},e=p((m,v,u)=>{const{layout:T,...o}=n;return o.file=t,o.url=a,d`${g()}${f(s)}`})});export{e as Content,E as __tla,r as compiledContent,e as default,t as file,n as frontmatter,l as getHeadings,i as rawContent,a as url};
