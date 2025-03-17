import{c as d,__tla as r}from"./astro-component.CXlaF79K.js";import{r as o,m as x,u as E,__tla as y}from"./constant.DFiws9hU.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let e,l,a,n,t,c,i,g=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h1 id="\u573A\u666F\u63CF\u8FF0">\u573A\u666F\u63CF\u8FF0</h1>
<p>AI\u7F51\u5173\u652F\u6301\u7CBE\u786E\u7F13\u5B58\u53CA\u8BED\u4E49\u7F13\u5B58\u63A8\u7406\u7684\u7ED3\u679C\u4E0A\u4E0B\u6587\uFF0C\u5BF9\u4E8E\u5E38\u89C1\u7684\u76F8\u4F3C/\u91CD\u590D\u7684\u95EE\u9898\u8282\u7701Token\u5E76\u51CF\u5C0F\u65F6\u5EF6\uFF0C\u4ECE\u800C\u63D0\u5347\u8C03\u7528\u4F53\u9A8C\u3002</p>
<p>AI\u7F51\u5173\u901A\u8FC7\u5728\u5185\u5B58\u6570\u636E\u5E93\u4E2D\u7F13\u5B58 LLM \u54CD\u5E94\uFF0C\u5E76\u4EE5\u7F51\u5173\u63D2\u4EF6\u7684\u5F62\u5F0F\u6765\u6539\u5584\u63A8\u7406\u7684\u5EF6\u8FDF\u548C\u6210\u672C\uFF0C\u5728\u7F51\u5173\u5C42\u81EA\u52A8\u7F13\u5B58\u5BF9\u5E94\u7528\u6237\u7684\u5386\u53F2\u5BF9\u8BDD\uFF0C\u5728\u540E\u7EED\u5BF9\u8BDD\u4E2D\u81EA\u52A8\u586B\u5145\u5230\u4E0A\u4E0B\u6587\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5927\u6A21\u578B\u5BF9\u4E0A\u4E0B\u6587\u8BED\u4E49\u7684\u7406\u89E3\u3002</p>
<h1 id="\u90E8\u7F72higressai">\u90E8\u7F72Higress.AI</h1>
<p>\u672C\u6307\u5357\u4E2D\u57FA\u4E8Edocker\u90E8\u7F72\uFF0C\u5982\u60A8\u9700\u8981\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08k8s\u3001helm\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167<a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5FEB\u901F\u5F00\u59CB</a>\u3002</p>
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165 Aliyun Dashscope\u6216\u5176\u4ED6API-KEY\uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002</p>
<p><img src="/img/1742200994211.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u4E0A\u8FF0\u547D\u4EE4\u7684\u9ED8\u8BA4\u7684HTTP\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8080\uFF0CHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8443\uFF0C\u63A7\u5236\u53F0\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8001\u3002\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539<em>DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT</em>\u7ED3\u679C\uFF1B\u7136\u540E\u662F\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002</p>
<p><img src="/img/1742200997154.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A</p>
<p><img src="/img/1742201001139.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u63A7\u5236\u53F0\u914D\u7F6E">\u63A7\u5236\u53F0\u914D\u7F6E</h1>
<p>\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762<a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002</p>
<p>\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002\u8FD9\u91CC\u6211\u4EEC\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EAPI-KEY\uFF0C\u5982\u60A8\u5728\u4E0A\u4E00\u6B65\u4E2D\u5DF2\u7ECF\u914D\u7F6E\uFF0C\u5219\u76F4\u63A5\u5FFD\u7565\u3002</p>
<p><img src="/img/1742201005206.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6E\u5411\u91CF\u7F13\u5B58\u670D\u52A1">\u914D\u7F6E\u5411\u91CF\u7F13\u5B58\u670D\u52A1</h2>
<p>Higress\u8BED\u4E49\u7F13\u5B58\u8C03\u7528\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u8FDB\u884Cembedding\u3001\u8C03\u7528\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\u8FDB\u884C\u5411\u91CF\u5B58\u50A8\u53CA\u68C0\u7D22\uFF1B\u8FD9\u91CC\u4EE5\u963F\u91CC\u4E91\u767E\u70BCtext-embedding-v3\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u3001\u963F\u91CC\u4E91DashVector\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u4E3A\u4F8B\uFF0C\u9700\u8981\u5728\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u5F00\u901A\u5BF9\u5E94\u7684\u670D\u52A1\u53CA\u6743\u9650\uFF1A<a href="https://help.aliyun.com/zh/model-studio/user-guide/embedding" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u963F\u91CC\u4E91\u767E\u70BCEmbedding</a>\u3001<a href="https://help.aliyun.com/product/2510217.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5411\u91CF\u68C0\u7D22\u670D\u52A1</a>\u3002\u5176\u4E2D\uFF0C\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u9700\u8981\u521B\u5EFAcluster\u53CA\u5B58\u50A8\u5411\u91CF\u7684collection\uFF1B\u521B\u5EFA\u7684collection\u914D\u7F6E\u7684\u5411\u91CF\u7EF4\u5EA6\u4E3A1024\uFF08text-embedding-v3\u5BF9\u5E94\u7EF4\u5EA6\uFF09\uFF0C\u5EA6\u91CF\u8DDD\u79BB\u4E3ACosine\u3002</p>
<p>\u5728\u63A7\u5236\u53F0\u670D\u52A1\u6765\u6E90\u754C\u9762\u4E2D\uFF0C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u3002</p>
<p><img src="/img/1742201009338.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728\u670D\u52A1\u6765\u6E90\u7684\u754C\u9762\uFF0C\u586B\u5199\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF1A</p>
<p>\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF1A</p>
<ul>
<li>\u7C7B\u578B\uFF1ADNS\u57DF\u540D</li>
<li>\u670D\u52A1\u7AEF\u53E3\uFF1A443</li>
<li>\u57DF\u540D\u5217\u8868\uFF1A
<ul>
<li>\u963F\u91CC\u4E91\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF1Adashscope.aliyuncs.com</li>
<li>\u963F\u91CC\u4E91\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\uFF1A\u5BF9\u5E94cluster\u7684\u7AEF\u70B9\u5730\u5740\uFF0C\u5728_\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u63A7\u5236\u53F0-cluster-collection_\u4E2D\u67E5\u770B</li>
</ul>
</li>
<li>\u670D\u52A1\u534F\u8BAE\uFF1AHTTPS</li>
<li>SNI\uFF1A\u548C\u57DF\u540D\u5217\u8868\u76F8\u540C</li>
</ul>
<p><img src="/img/1742201012838.png" alt="" referrerpolicy="no-referrer"><img src="/img/1742201016446.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6Eai\u8DEF\u7531\u7B56\u7565">\u914D\u7F6EAI\u8DEF\u7531\u7B56\u7565</h2>
<p>\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6E\u63D2\u4EF6\u7B56\u7565\uFF0C\u9009\u62E9AI\u7F13\u5B58\u3002</p>
<p><img src="/img/1742201020734.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1742201024751.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728AI\u7F13\u5B58\u63D2\u4EF6\u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u53C2\u8003\u4EE5\u4E0B\u5B57\u6BB5\u586B\u5199\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">vector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashvector</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-dashvector.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">collectionID</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXX"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">#\u5B58\u50A8\u5411\u91CF\u7684collection\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">#\u5B58\u50A8cluster\u7684\u7AEF\u70B9\u5730\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-xxxxxxxxxxxxxxxxxx"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">#\u5411\u91CF\u68C0\u7D22api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">threshold</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.12</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">embedding</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-embedding.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-xxxxxxxxxx"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">#\u963F\u91CC\u4E91\u767E\u70BCapi-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v3"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6">#\u4F7F\u7528\u7684embedding\u6A21\u578B</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vector:\x7F  type: dashvector\x7F  serviceName: &#x22;aliyun-dashvector.dns&#x22;\x7F  collectionID: &#x22;XXXXX&#x22;  #\u5B58\u50A8\u5411\u91CF\u7684collection\u540D\u79F0\x7F  serviceHost: &#x22;vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com&#x22;  #\u5B58\u50A8cluster\u7684\u7AEF\u70B9\u5730\u5740\x7F  apiKey: &#x22;sk-xxxxxxxxxxxxxxxxxx&#x22;  #\u5411\u91CF\u68C0\u7D22api-key\x7F  threshold: 0.12\x7F\x7Fembedding:\x7F  type: dashscope\x7F  serviceName: &#x22;aliyun-embedding.dns&#x22;\x7F  apiKey: &#x22;sk-xxxxxxxxxx&#x22;  #\u963F\u91CC\u4E91\u767E\u70BCapi-key\x7F  model: &#x22;text-embedding-v3&#x22; #\u4F7F\u7528\u7684embedding\u6A21\u578B"><div></div></button></div></figure></div>
<p><img src="/img/1742201028204.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u8C03\u8BD5">\u8C03\u8BD5</h1>
<p>\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982HTTP\u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u661F\u661F\u662F\u4EC0\u4E48"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u661F\u661F\u662F\u4EC0\u4E48&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>\u53EF\u4EE5\u5C1D\u8BD5\u4EE5\u4E0B\u95EE\u9898\uFF1A</p>
<ul>
<li>\u661F\u661F\u662F\u4EC0\u4E48</li>
<li>\u4EC0\u4E48\u662F\u661F\u661F</li>
<li>\u661F\u661F\u901A\u5E38\u6307\u4EC0\u4E48</li>
</ul>
<p>\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A</p>
<p><img src="/img/1742201032172.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u7ED3\u679C\u89C2\u6D4B">\u7ED3\u679C\u89C2\u6D4B</h1>
<p>\u5728AI\u76D1\u63A7\u9762\u677F\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9AI\u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FAToken\u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546/\u6A21\u578BToken\u4F7F\u7528\u6570\u91CF\u7B49\u3002</p>
<p><img src="/img/1742201036092.png" alt="" referrerpolicy="no-referrer"></p>`,n={title:"\u8BED\u4E49\u7F13\u5B58",description:"\u8BED\u4E49\u7F13\u5B58\u573A\u666F\u5F00\u6E90\u8FD0\u884C\u6D41\u7A0B",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/semantic-cache.md",i=void 0,c=function(){return`# \u573A\u666F\u63CF\u8FF0
AI\u7F51\u5173\u652F\u6301\u7CBE\u786E\u7F13\u5B58\u53CA\u8BED\u4E49\u7F13\u5B58\u63A8\u7406\u7684\u7ED3\u679C\u4E0A\u4E0B\u6587\uFF0C\u5BF9\u4E8E\u5E38\u89C1\u7684\u76F8\u4F3C/\u91CD\u590D\u7684\u95EE\u9898\u8282\u7701Token\u5E76\u51CF\u5C0F\u65F6\u5EF6\uFF0C\u4ECE\u800C\u63D0\u5347\u8C03\u7528\u4F53\u9A8C\u3002

AI\u7F51\u5173\u901A\u8FC7\u5728\u5185\u5B58\u6570\u636E\u5E93\u4E2D\u7F13\u5B58 LLM \u54CD\u5E94\uFF0C\u5E76\u4EE5\u7F51\u5173\u63D2\u4EF6\u7684\u5F62\u5F0F\u6765\u6539\u5584\u63A8\u7406\u7684\u5EF6\u8FDF\u548C\u6210\u672C\uFF0C\u5728\u7F51\u5173\u5C42\u81EA\u52A8\u7F13\u5B58\u5BF9\u5E94\u7528\u6237\u7684\u5386\u53F2\u5BF9\u8BDD\uFF0C\u5728\u540E\u7EED\u5BF9\u8BDD\u4E2D\u81EA\u52A8\u586B\u5145\u5230\u4E0A\u4E0B\u6587\uFF0C\u4ECE\u800C\u5B9E\u73B0\u5927\u6A21\u578B\u5BF9\u4E0A\u4E0B\u6587\u8BED\u4E49\u7684\u7406\u89E3\u3002

# \u90E8\u7F72Higress.AI
\u672C\u6307\u5357\u4E2D\u57FA\u4E8Edocker\u90E8\u7F72\uFF0C\u5982\u60A8\u9700\u8981\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08k8s\u3001helm\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167[\u5FEB\u901F\u5F00\u59CB](https://higress.cn/docs/latest/user/quickstart/)\u3002



\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165 Aliyun Dashscope\u6216\u5176\u4ED6API-KEY\uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002

![](/img/1742200994211.png)


\u4E0A\u8FF0\u547D\u4EE4\u7684\u9ED8\u8BA4\u7684HTTP\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8080\uFF0CHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8443\uFF0C\u63A7\u5236\u53F0\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8001\u3002\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 \`wget https://higress.cn/ai-gateway/install.sh\`\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539*DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*\u7ED3\u679C\uFF1B\u7136\u540E\u662F\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002

![](/img/1742200997154.png)



\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A

![](/img/1742201001139.png)



# \u63A7\u5236\u53F0\u914D\u7F6E
\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762[http://localhost:8001/](http://localhost:8001/)\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002

\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002\u8FD9\u91CC\u6211\u4EEC\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EAPI-KEY\uFF0C\u5982\u60A8\u5728\u4E0A\u4E00\u6B65\u4E2D\u5DF2\u7ECF\u914D\u7F6E\uFF0C\u5219\u76F4\u63A5\u5FFD\u7565\u3002

![](/img/1742201005206.png)



## \u914D\u7F6E\u5411\u91CF\u7F13\u5B58\u670D\u52A1
Higress\u8BED\u4E49\u7F13\u5B58\u8C03\u7528\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u8FDB\u884Cembedding\u3001\u8C03\u7528\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\u8FDB\u884C\u5411\u91CF\u5B58\u50A8\u53CA\u68C0\u7D22\uFF1B\u8FD9\u91CC\u4EE5\u963F\u91CC\u4E91\u767E\u70BCtext-embedding-v3\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\u3001\u963F\u91CC\u4E91DashVector\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u4E3A\u4F8B\uFF0C\u9700\u8981\u5728\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u5F00\u901A\u5BF9\u5E94\u7684\u670D\u52A1\u53CA\u6743\u9650\uFF1A[\u963F\u91CC\u4E91\u767E\u70BCEmbedding](https://help.aliyun.com/zh/model-studio/user-guide/embedding)\u3001[\u5411\u91CF\u68C0\u7D22\u670D\u52A1](https://help.aliyun.com/product/2510217.html)\u3002\u5176\u4E2D\uFF0C\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u9700\u8981\u521B\u5EFAcluster\u53CA\u5B58\u50A8\u5411\u91CF\u7684collection\uFF1B\u521B\u5EFA\u7684collection\u914D\u7F6E\u7684\u5411\u91CF\u7EF4\u5EA6\u4E3A1024\uFF08text-embedding-v3\u5BF9\u5E94\u7EF4\u5EA6\uFF09\uFF0C\u5EA6\u91CF\u8DDD\u79BB\u4E3ACosine\u3002

\u5728\u63A7\u5236\u53F0\u670D\u52A1\u6765\u6E90\u754C\u9762\u4E2D\uFF0C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u3002

![](/img/1742201009338.png)

\u5728\u670D\u52A1\u6765\u6E90\u7684\u754C\u9762\uFF0C\u586B\u5199\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF1A

\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF1A

+ \u7C7B\u578B\uFF1ADNS\u57DF\u540D
+ \u670D\u52A1\u7AEF\u53E3\uFF1A443
+ \u57DF\u540D\u5217\u8868\uFF1A
    - \u963F\u91CC\u4E91\u6587\u672C\u5411\u91CF\u5316\u670D\u52A1\uFF1Adashscope.aliyuncs.com
    - \u963F\u91CC\u4E91\u5411\u91CF\u6570\u636E\u5E93\u670D\u52A1\uFF1A\u5BF9\u5E94cluster\u7684\u7AEF\u70B9\u5730\u5740\uFF0C\u5728_\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u63A7\u5236\u53F0-cluster-collection_\u4E2D\u67E5\u770B
+ \u670D\u52A1\u534F\u8BAE\uFF1AHTTPS
+ SNI\uFF1A\u548C\u57DF\u540D\u5217\u8868\u76F8\u540C

![](/img/1742201012838.png)![](/img/1742201016446.png)



## \u914D\u7F6EAI\u8DEF\u7531\u7B56\u7565
\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6E\u63D2\u4EF6\u7B56\u7565\uFF0C\u9009\u62E9AI\u7F13\u5B58\u3002

![](/img/1742201020734.png)

![](/img/1742201024751.png)

\u5728AI\u7F13\u5B58\u63D2\u4EF6\u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u53C2\u8003\u4EE5\u4E0B\u5B57\u6BB5\u586B\u5199\uFF1A

\`\`\`yaml
vector:
  type: dashvector
  serviceName: "aliyun-dashvector.dns"
  collectionID: "XXXXX"	#\u5B58\u50A8\u5411\u91CF\u7684collection\u540D\u79F0
  serviceHost: "vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"	#\u5B58\u50A8cluster\u7684\u7AEF\u70B9\u5730\u5740
  apiKey: "sk-xxxxxxxxxxxxxxxxxx"	#\u5411\u91CF\u68C0\u7D22api-key
  threshold: 0.12

embedding:
  type: dashscope
  serviceName: "aliyun-embedding.dns"
  apiKey: "sk-xxxxxxxxxx"	#\u963F\u91CC\u4E91\u767E\u70BCapi-key
  model: "text-embedding-v3" #\u4F7F\u7528\u7684embedding\u6A21\u578B

\`\`\`

![](/img/1742201028204.png)



# \u8C03\u8BD5
\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982HTTP\u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09

\`\`\`yaml
curl 'http://localhost:8080/v1/chat/completions' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "\u661F\u661F\u662F\u4EC0\u4E48"
      }
    ]
  }'

\`\`\`



\u53EF\u4EE5\u5C1D\u8BD5\u4EE5\u4E0B\u95EE\u9898\uFF1A

+ \u661F\u661F\u662F\u4EC0\u4E48
+ \u4EC0\u4E48\u662F\u661F\u661F
+ \u661F\u661F\u901A\u5E38\u6307\u4EC0\u4E48

\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A

![](/img/1742201032172.png)



# \u7ED3\u679C\u89C2\u6D4B
\u5728AI\u76D1\u63A7\u9762\u677F\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9AI\u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FAToken\u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546/\u6A21\u578BToken\u4F7F\u7528\u6570\u91CF\u7B49\u3002

![](/img/1742201036092.png)

`},l=function(){return s},t=function(){return[{depth:1,slug:"\u573A\u666F\u63CF\u8FF0",text:"\u573A\u666F\u63CF\u8FF0"},{depth:1,slug:"\u90E8\u7F72higressai",text:"\u90E8\u7F72Higress.AI"},{depth:1,slug:"\u63A7\u5236\u53F0\u914D\u7F6E",text:"\u63A7\u5236\u53F0\u914D\u7F6E"},{depth:2,slug:"\u914D\u7F6E\u5411\u91CF\u7F13\u5B58\u670D\u52A1",text:"\u914D\u7F6E\u5411\u91CF\u7F13\u5B58\u670D\u52A1"},{depth:2,slug:"\u914D\u7F6Eai\u8DEF\u7531\u7B56\u7565",text:"\u914D\u7F6EAI\u8DEF\u7531\u7B56\u7565"},{depth:1,slug:"\u8C03\u8BD5",text:"\u8C03\u8BD5"},{depth:1,slug:"\u7ED3\u679C\u89C2\u6D4B",text:"\u7ED3\u679C\u89C2\u6D4B"}]},e=d((h,m,u)=>{const{layout:f,...p}=n;return p.file=a,p.url=i,o`${x()}${E(s)}`})});export{e as Content,g as __tla,l as compiledContent,e as default,a as file,n as frontmatter,t as getHeadings,c as rawContent,i as url};
