import{c as d,__tla as r}from"./astro-component.fC12J6m8.js";import{r as o,m as v,u as E,__tla as y}from"./constant.bgh36aEY.js";import{__tla as g}from"./astro/assets-service.CogLqxaq.js";let e,p,a,n,t,c,i,m=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u4E00\u5F00\u6E90llm\u7684\u65B0\u7EAA\u5143deepseek\u5E26\u6765\u7684\u6280\u672F\u5E73\u6743">\u4E00\u3001\u5F00\u6E90LLM\u7684\u65B0\u7EAA\u5143\uFF1ADeepSeek\u5E26\u6765\u7684\u6280\u672F\u5E73\u6743</h2>
<p>\u968F\u7740DeepSeek\u7B49\u9AD8\u8D28\u91CF\u5F00\u6E90\u5927\u6A21\u578B\u7684\u6D8C\u73B0\uFF0C\u4F01\u4E1A\u81EA\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF\u7684\u6210\u672C\u5DF2\u964D\u4F4E90%\u4EE5\u4E0A\u3002\u57FA\u4E8E7B/13B\u53C2\u6570\u91CF\u7684\u6A21\u578B\u5728\u5E38\u89C4GPU\u670D\u52A1\u5668\u4E0A\u5373\u53EF\u83B7\u5F97\u5546\u4E1A\u7EA7\u54CD\u5E94\u6548\u679C\uFF0C\u914D\u5408Higress\u5F00\u6E90AI\u7F51\u5173\u7684\u589E\u5F3A\u80FD\u529B\uFF0C\u5F00\u53D1\u8005\u53EF\u5FEB\u901F\u6784\u5EFA\u5177\u5907\u5B9E\u65F6\u8054\u7F51\u641C\u7D22\u80FD\u529B\u7684\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF\u3002</p>
<h2 id="\u4E8Chigress\u96F6\u4EE3\u7801\u589E\u5F3Allm\u7684\u745E\u58EB\u519B\u5200">\u4E8C\u3001Higress\uFF1A\u96F6\u4EE3\u7801\u589E\u5F3ALLM\u7684\u745E\u58EB\u519B\u5200</h2>
<p>Higress\u4F5C\u4E3A\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u901A\u8FC7wasm\u63D2\u4EF6\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684AI\u589E\u5F3A\u80FD\u529B\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01vnbj6a1ov2dijiPMM_!!6000000005286-0-tps-1213-688.jpg" alt="" referrerpolicy="no-referrer"></p>
<p>\u4E3B\u8981\u80FD\u529B\u77E9\u9635\uFF1A</p>
<ul>
<li><strong>\u8054\u7F51\u641C\u7D22</strong>\uFF1A\u5B9E\u65F6\u63A5\u5165\u4E92\u8054\u7F51\u6700\u65B0\u4FE1\u606F</li>
<li><strong>\u667A\u80FD\u8DEF\u7531</strong>\uFF1A\u591A\u6A21\u578B\u8D1F\u8F7D\u5747\u8861\u4E0E\u81EA\u52A8\u515C\u5E95</li>
<li><strong>\u5B89\u5168\u9632\u62A4</strong>\uFF1A\u654F\u611F\u8BCD\u8FC7\u6EE4\u4E0E\u6CE8\u5165\u653B\u51FB\u9632\u5FA1</li>
<li><strong>\u6548\u80FD\u4F18\u5316</strong>\uFF1A\u8BF7\u6C42\u7F13\u5B58+token\u914D\u989D\u7BA1\u7406</li>
<li><strong>\u53EF\u89C2\u6D4B\u6027</strong>\uFF1A\u5168\u94FE\u8DEF\u76D1\u63A7\u4E0E\u5BA1\u8BA1\u65E5\u5FD7</li>
</ul>
<h2 id="\u4E09\u8054\u7F51\u641C\u7D22\u7684\u6280\u672F\u5B9E\u73B0\u4E0E\u573A\u666F\u4EF7\u503C">\u4E09\u3001\u8054\u7F51\u641C\u7D22\u7684\u6280\u672F\u5B9E\u73B0\u4E0E\u573A\u666F\u4EF7\u503C</h2>
<h3 id="\u6838\u5FC3\u67B6\u6784\u89E3\u6790">\u6838\u5FC3\u67B6\u6784\u89E3\u6790</h3>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN017bNRNG1rVLGL64gd0_!!6000000005636-0-tps-770-704.jpg" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u5173\u952E\u6280\u672F\u7279\u6027">\u5173\u952E\u6280\u672F\u7279\u6027</h3>
<ol>
<li><strong>\u591A\u5F15\u64CE\u667A\u80FD\u5206\u6D41</strong></li>
</ol>
<ul>
<li>\u516C\u5171\u641C\u7D22\uFF08Google/Bing/Quark\uFF09\u83B7\u53D6\u5B9E\u65F6\u8D44\u8BAF</li>
<li>\u5B66\u672F\u641C\u7D22\uFF08Arxiv\uFF09\u5BF9\u63A5\u79D1\u7814\u573A\u666F</li>
<li>\u79C1\u6709\u641C\u7D22\uFF08Elasticsearch\uFF09\u8FDE\u63A5\u4F01\u4E1A/\u4E2A\u4EBA\u77E5\u8BC6\u5E93</li>
</ul>
<ol start="2">
<li><strong>\u641C\u7D22\u589E\u5F3A\u6838\u5FC3\u601D\u8DEF</strong></li>
</ol>
<ul>
<li>LLM\u91CD\u5199Query\uFF1A\u57FA\u4E8E LLM \u8BC6\u522B\u7528\u6237\u610F\u56FE\uFF0C\u751F\u6210\u641C\u7D22\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5927\u5E45\u63D0\u5347\u641C\u7D22\u589E\u5F3A\u6548\u679C</li>
<li>\u5173\u952E\u8BCD\u63D0\u70BC\uFF1A\u9488\u5BF9\u4E0D\u540C\u7684\u5F15\u64CE\uFF0C\u9700\u8981\u751F\u6210\u4E0D\u540C\u7684\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982Arxiv\u91CC\u82F1\u6587\u8BBA\u6587\u5C45\u591A\uFF0C\u5173\u952E\u8BCD\u9700\u8981\u7528\u82F1\u6587</li>
<li>\u9886\u57DF\u8BC6\u522B\uFF1A\u4ECD\u4EE5Arxiv\u4E3E\u4F8B\uFF0CArxiv\u5212\u5206\u4E86\u8BA1\u7B97\u673A\u79D1\u5B66/\u7269\u7406\u5B66/\u6570\u5B66/\u751F\u7269\u5B66\u7B49\u7B49\u4E0D\u540C\u5B66\u79D1\u4E0B\u7684\u7EC6\u5206\u9886\u57DF\uFF0C\u6307\u5B9A\u9886\u57DF\u8FDB\u884C\u641C\u7D22\uFF0C\u53EF\u4EE5\u63D0\u5347\u641C\u7D22\u51C6\u786E\u5EA6</li>
<li>\u957F\u67E5\u8BE2\u62C6\u5206\uFF1A\u957F\u67E5\u8BE2\u53EF\u4EE5\u62C6\u5206\u4E3A\u591A\u4E2A\u77ED\u67E5\u8BE2\uFF0C\u63D0\u9AD8\u641C\u7D22\u6548\u7387</li>
<li>\u9AD8\u8D28\u91CF\u6570\u636E\uFF1AGoogle/Bing/Arxiv\u641C\u7D22\u90FD\u53EA\u80FD\u8F93\u51FA\u6587\u7AE0\u6458\u8981\uFF0C\u800C\u57FA\u4E8E\u963F\u91CC\u4E91\u4FE1\u606F\u68C0\u7D22\u5BF9\u63A5Quark\u641C\u7D22\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5168\u6587\uFF0C\u53EF\u4EE5\u63D0\u9AD8LLM\u751F\u6210\u5185\u5BB9\u7684\u8D28\u91CF</li>
</ul>
<h3 id="\u5178\u578B\u5E94\u7528\u573A\u666F\u6548\u679C\u5C55\u793A">\u5178\u578B\u5E94\u7528\u573A\u666F\u6548\u679C\u5C55\u793A</h3>
<p><strong>\u91D1\u878D\u8D44\u8BAF\u95EE\u7B54</strong>
<img src="https://img.alicdn.com/imgextra/i2/O1CN01No4emp1GBWL2eb2mS_!!6000000000584-0-tps-1910-1016.jpg" alt="" referrerpolicy="no-referrer"></p>
<p><strong>\u524D\u6CBF\u6280\u672F\u63A2\u7D22</strong>
<img src="https://img.alicdn.com/imgextra/i4/O1CN01bWLstU1jWhVnf7R5s_!!6000000004556-0-tps-1913-855.jpg" alt="" referrerpolicy="no-referrer">
<img src="https://img.alicdn.com/imgextra/i4/O1CN01ubSKKy1u1yiWCe36e_!!6000000005978-0-tps-1848-1019.jpg" alt="" referrerpolicy="no-referrer"></p>
<p><strong>\u533B\u7597\u95EE\u9898\u89E3\u7B54</strong>
<img src="https://img.alicdn.com/imgextra/i1/O1CN01nYOMkg1Ur6vQ8q0L0_!!6000000002570-0-tps-1912-1016.jpg" alt="" referrerpolicy="no-referrer">
<img src="https://img.alicdn.com/imgextra/i3/O1CN012NeWkw28562C402pO_!!6000000007880-0-tps-1870-330.jpg" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u56DB\u4ECE\u5F00\u6E90\u5230\u843D\u5730\u4E09\u6B65\u6784\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF">\u56DB\u3001\u4ECE\u5F00\u6E90\u5230\u843D\u5730\uFF1A\u4E09\u6B65\u6784\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF</h2>
<ol>
<li><strong>\u57FA\u7840\u90E8\u7F72</strong></li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4E00\u884C\u547D\u4EE4\u5B89\u88C5\u5E76\u542F\u52A8Higress\u7F51\u5173</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u7528vllm\u90E8\u7F72DeepSeek-R1-Distill-Qwen-7B\u793A\u610F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">python3</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">vllm.entrypoints.openai.api_server</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--model=deepseek-ai/DeepSeek-R1-Distill-Qwen-7B</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--dtype=half</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--tensor-parallel-size=4</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--enforce-eager</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS  https://higress.cn/ai-gateway/install.sh | bash\x7Fpython3 -m vllm.entrypoints.openai.api_server --model=deepseek-ai/DeepSeek-R1-Distill-Qwen-7B --dtype=half --tensor-parallel-size=4 --enforce-eager"><div></div></button></div></figure></div>
<ol start="2">
<li><strong>\u63D2\u4EF6\u914D\u7F6E</strong></li>
</ol>
<p>\u53EF\u4EE5\u901A\u8FC7<code dir="auto">http://127.0.0.1:8001</code>\u8BBF\u95EEhigress\u63A7\u5236\u53F0\uFF0C\u7ED9ai-search\u63D2\u4EF6\u505A\u5982\u4E0B\u914D\u7F6E</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">plugins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">quark</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-aliyun-ak"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">keySecret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-aliyun-sk"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bing</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bing-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bing-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">arxiv</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"arxiv-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchRewrite</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmServiceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"llm-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmServicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmApiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-llm-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/v1/chat/completions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmModelName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"deepseek-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeoutMillisecond</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="plugins:\x7FsearchFrom:\x7F- type: quark\x7F  apiKey: &#x22;your-aliyun-ak&#x22;\x7F  keySecret: &#x22;your-aliyun-sk&#x22;\x7F  serviceName: &#x22;aliyun-svc.dns&#x22;\x7F  servicePort: 443\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F- type: bing\x7F  apiKey: &#x22;bing-key&#x22;\x7F  serviceName: &#x22;bing-svc.dns&#x22;\x7F  servicePort: 443\x7F- type: arxiv\x7F  serviceName: &#x22;arxiv-svc.dns&#x22;\x7F  servicePort: 443\x7FsearchRewrite:\x7F  llmServiceName: &#x22;llm-svc.dns&#x22;\x7F  llmServicePort: 443\x7F  llmApiKey: &#x22;your-llm-api-key&#x22;\x7F  llmUrl: &#x22;https://api.example.com/v1/chat/completions&#x22;\x7F  llmModelName: &#x22;deepseek-chat&#x22;\x7F  timeoutMillisecond: 15000"><div></div></button></div></figure></div>
<ol start="3">
<li><strong>\u5BF9\u63A5SDK\u6216\u524D\u7AEF</strong></li>
</ol>
<p>\u4F7F\u7528\u8FD9\u4E2AOpenAI\u534F\u8BAEBaseUrl\uFF1A<a href="http://127.0.0.1:8080/v1%EF%BC%8C%E5%B0%B1%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8ChatBox/LobeChat%E7%AD%89%E6%94%AF%E6%8C%81OpenAI%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%AF%B9%E8%AF%9D%E5%B7%A5%E5%85%B7%E8%BF%9B%E8%A1%8C%E5%AF%B9%E8%AF%9D%E3%80%82" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://127.0.0.1:8080/v1\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528ChatBox/LobeChat\u7B49\u652F\u6301OpenAI\u534F\u8BAE\u7684\u5BF9\u8BDD\u5DE5\u5177\u8FDB\u884C\u5BF9\u8BDD\u3002</a></p>
<p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528OpenAI\u7684SDK\u5BF9\u63A5\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">from</span><span style="--0:#E1E4E8"> openai </span><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> OpenAI</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> OpenAI(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#FFAB70">api_key</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"none"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#FFAB70">base_url</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"http://localhost:8080/v1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">completion </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> client.chat.completions.create(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#FFAB70">model</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"deepseek-r1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#FFAB70">messages</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">[</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5206\u6790\u4E00\u4E0B\u56FD\u9645\u91D1\u4EF7\u8D70\u52BF"</span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#FFAB70">stream</span><span style="--0:#F97583">=</span><span style="--0:#79B8FF">False</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">print</span><span style="--0:#E1E4E8">(completion.choices[</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">].message.content)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import json\x7Ffrom openai import OpenAI\x7F\x7Fclient = OpenAI(\x7F    api_key=&#x22;none&#x22;,\x7F    base_url=&#x22;http://localhost:8080/v1&#x22;,\x7F)\x7F\x7Fcompletion = client.chat.completions.create(\x7F    model=&#x22;deepseek-r1&#x22;,\x7F    messages=[\x7F        {&#x22;role&#x22;: &#x22;user&#x22;, &#x22;content&#x22;: &#x22;\u5206\u6790\u4E00\u4E0B\u56FD\u9645\u91D1\u4EF7\u8D70\u52BF&#x22;}\x7F    ],\x7F    stream=False\x7F)\x7F\x7Fprint(completion.choices[0].message.content)"><div></div></button></div></figure></div>
<p>\u901A\u8FC7Higress+DeepSeek\u7684\u5F00\u6E90\u7EC4\u5408\uFF0C\u4F01\u4E1A\u53EF\u572824\u5C0F\u65F6\u5185\u5B8C\u6210\u4ECE\u96F6\u5230\u751F\u4EA7\u7EA7\u7684\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF\u90E8\u7F72\uFF0C\u4F7FLLM\u771F\u6B63\u6210\u4E3A\u4E1A\u52A1\u589E\u957F\u7684\u667A\u80FD\u5F15\u64CE\u3002</p>`,n={title:"\u81EA\u5EFADeepSeek\u65F6\u4EE3\u5DF2\u6765\uFF0C\u8054\u7F51\u641C\u7D22\u5982\u4F55\u9AD8\u6548\u5B9E\u73B0",description:"\u81EA\u5EFADeepSeek\u65F6\u4EE3\u5DF2\u6765\uFF0C\u8054\u7F51\u641C\u7D22\u5982\u4F55\u9AD8\u6548\u5B9E\u73B0",date:"2025-02-26",category:"case",keywords:["Higress"],authors:"CH3CHO"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_nta6lxxcpsngxrp4.md",i=void 0,c=function(){return`


## \u4E00\u3001\u5F00\u6E90LLM\u7684\u65B0\u7EAA\u5143\uFF1ADeepSeek\u5E26\u6765\u7684\u6280\u672F\u5E73\u6743

\u968F\u7740DeepSeek\u7B49\u9AD8\u8D28\u91CF\u5F00\u6E90\u5927\u6A21\u578B\u7684\u6D8C\u73B0\uFF0C\u4F01\u4E1A\u81EA\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF\u7684\u6210\u672C\u5DF2\u964D\u4F4E90%\u4EE5\u4E0A\u3002\u57FA\u4E8E7B/13B\u53C2\u6570\u91CF\u7684\u6A21\u578B\u5728\u5E38\u89C4GPU\u670D\u52A1\u5668\u4E0A\u5373\u53EF\u83B7\u5F97\u5546\u4E1A\u7EA7\u54CD\u5E94\u6548\u679C\uFF0C\u914D\u5408Higress\u5F00\u6E90AI\u7F51\u5173\u7684\u589E\u5F3A\u80FD\u529B\uFF0C\u5F00\u53D1\u8005\u53EF\u5FEB\u901F\u6784\u5EFA\u5177\u5907\u5B9E\u65F6\u8054\u7F51\u641C\u7D22\u80FD\u529B\u7684\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF\u3002

## \u4E8C\u3001Higress\uFF1A\u96F6\u4EE3\u7801\u589E\u5F3ALLM\u7684\u745E\u58EB\u519B\u5200

Higress\u4F5C\u4E3A\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u901A\u8FC7wasm\u63D2\u4EF6\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684AI\u589E\u5F3A\u80FD\u529B\uFF1A

![](https://img.alicdn.com/imgextra/i2/O1CN01vnbj6a1ov2dijiPMM_!!6000000005286-0-tps-1213-688.jpg)

\u4E3B\u8981\u80FD\u529B\u77E9\u9635\uFF1A
- **\u8054\u7F51\u641C\u7D22**\uFF1A\u5B9E\u65F6\u63A5\u5165\u4E92\u8054\u7F51\u6700\u65B0\u4FE1\u606F
- **\u667A\u80FD\u8DEF\u7531**\uFF1A\u591A\u6A21\u578B\u8D1F\u8F7D\u5747\u8861\u4E0E\u81EA\u52A8\u515C\u5E95
- **\u5B89\u5168\u9632\u62A4**\uFF1A\u654F\u611F\u8BCD\u8FC7\u6EE4\u4E0E\u6CE8\u5165\u653B\u51FB\u9632\u5FA1
- **\u6548\u80FD\u4F18\u5316**\uFF1A\u8BF7\u6C42\u7F13\u5B58+token\u914D\u989D\u7BA1\u7406
- **\u53EF\u89C2\u6D4B\u6027**\uFF1A\u5168\u94FE\u8DEF\u76D1\u63A7\u4E0E\u5BA1\u8BA1\u65E5\u5FD7

## \u4E09\u3001\u8054\u7F51\u641C\u7D22\u7684\u6280\u672F\u5B9E\u73B0\u4E0E\u573A\u666F\u4EF7\u503C

### \u6838\u5FC3\u67B6\u6784\u89E3\u6790

![](https://img.alicdn.com/imgextra/i1/O1CN017bNRNG1rVLGL64gd0_!!6000000005636-0-tps-770-704.jpg)

### \u5173\u952E\u6280\u672F\u7279\u6027

1. **\u591A\u5F15\u64CE\u667A\u80FD\u5206\u6D41**
- \u516C\u5171\u641C\u7D22\uFF08Google/Bing/Quark\uFF09\u83B7\u53D6\u5B9E\u65F6\u8D44\u8BAF
- \u5B66\u672F\u641C\u7D22\uFF08Arxiv\uFF09\u5BF9\u63A5\u79D1\u7814\u573A\u666F
- \u79C1\u6709\u641C\u7D22\uFF08Elasticsearch\uFF09\u8FDE\u63A5\u4F01\u4E1A/\u4E2A\u4EBA\u77E5\u8BC6\u5E93

2. **\u641C\u7D22\u589E\u5F3A\u6838\u5FC3\u601D\u8DEF**
- LLM\u91CD\u5199Query\uFF1A\u57FA\u4E8E LLM \u8BC6\u522B\u7528\u6237\u610F\u56FE\uFF0C\u751F\u6210\u641C\u7D22\u547D\u4EE4\uFF0C\u53EF\u4EE5\u5927\u5E45\u63D0\u5347\u641C\u7D22\u589E\u5F3A\u6548\u679C
- \u5173\u952E\u8BCD\u63D0\u70BC\uFF1A\u9488\u5BF9\u4E0D\u540C\u7684\u5F15\u64CE\uFF0C\u9700\u8981\u751F\u6210\u4E0D\u540C\u7684\u63D0\u793A\u8BCD\uFF0C\u4F8B\u5982Arxiv\u91CC\u82F1\u6587\u8BBA\u6587\u5C45\u591A\uFF0C\u5173\u952E\u8BCD\u9700\u8981\u7528\u82F1\u6587
- \u9886\u57DF\u8BC6\u522B\uFF1A\u4ECD\u4EE5Arxiv\u4E3E\u4F8B\uFF0CArxiv\u5212\u5206\u4E86\u8BA1\u7B97\u673A\u79D1\u5B66/\u7269\u7406\u5B66/\u6570\u5B66/\u751F\u7269\u5B66\u7B49\u7B49\u4E0D\u540C\u5B66\u79D1\u4E0B\u7684\u7EC6\u5206\u9886\u57DF\uFF0C\u6307\u5B9A\u9886\u57DF\u8FDB\u884C\u641C\u7D22\uFF0C\u53EF\u4EE5\u63D0\u5347\u641C\u7D22\u51C6\u786E\u5EA6
- \u957F\u67E5\u8BE2\u62C6\u5206\uFF1A\u957F\u67E5\u8BE2\u53EF\u4EE5\u62C6\u5206\u4E3A\u591A\u4E2A\u77ED\u67E5\u8BE2\uFF0C\u63D0\u9AD8\u641C\u7D22\u6548\u7387
- \u9AD8\u8D28\u91CF\u6570\u636E\uFF1AGoogle/Bing/Arxiv\u641C\u7D22\u90FD\u53EA\u80FD\u8F93\u51FA\u6587\u7AE0\u6458\u8981\uFF0C\u800C\u57FA\u4E8E\u963F\u91CC\u4E91\u4FE1\u606F\u68C0\u7D22\u5BF9\u63A5Quark\u641C\u7D22\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5168\u6587\uFF0C\u53EF\u4EE5\u63D0\u9AD8LLM\u751F\u6210\u5185\u5BB9\u7684\u8D28\u91CF

### \u5178\u578B\u5E94\u7528\u573A\u666F\u6548\u679C\u5C55\u793A

**\u91D1\u878D\u8D44\u8BAF\u95EE\u7B54**
![](https://img.alicdn.com/imgextra/i2/O1CN01No4emp1GBWL2eb2mS_!!6000000000584-0-tps-1910-1016.jpg)

**\u524D\u6CBF\u6280\u672F\u63A2\u7D22**
![](https://img.alicdn.com/imgextra/i4/O1CN01bWLstU1jWhVnf7R5s_!!6000000004556-0-tps-1913-855.jpg)
![](https://img.alicdn.com/imgextra/i4/O1CN01ubSKKy1u1yiWCe36e_!!6000000005978-0-tps-1848-1019.jpg)

**\u533B\u7597\u95EE\u9898\u89E3\u7B54**
![](https://img.alicdn.com/imgextra/i1/O1CN01nYOMkg1Ur6vQ8q0L0_!!6000000002570-0-tps-1912-1016.jpg)
![](https://img.alicdn.com/imgextra/i3/O1CN012NeWkw28562C402pO_!!6000000007880-0-tps-1870-330.jpg)
## \u56DB\u3001\u4ECE\u5F00\u6E90\u5230\u843D\u5730\uFF1A\u4E09\u6B65\u6784\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF

1. **\u57FA\u7840\u90E8\u7F72**

\`\`\`bash
# \u4E00\u884C\u547D\u4EE4\u5B89\u88C5\u5E76\u542F\u52A8Higress\u7F51\u5173
curl -sS  https://higress.cn/ai-gateway/install.sh | bash

# \u7528vllm\u90E8\u7F72DeepSeek-R1-Distill-Qwen-7B\u793A\u610F
python3 -m vllm.entrypoints.openai.api_server --model=deepseek-ai/DeepSeek-R1-Distill-Qwen-7B --dtype=half --tensor-parallel-size=4 --enforce-eager
\`\`\`

2. **\u63D2\u4EF6\u914D\u7F6E**

\u53EF\u4EE5\u901A\u8FC7\`http://127.0.0.1:8001\`\u8BBF\u95EEhigress\u63A7\u5236\u53F0\uFF0C\u7ED9ai-search\u63D2\u4EF6\u505A\u5982\u4E0B\u914D\u7F6E

\`\`\`yaml
plugins:
searchFrom:
- type: quark
  apiKey: "your-aliyun-ak"
  keySecret: "your-aliyun-sk"
  serviceName: "aliyun-svc.dns"
  servicePort: 443
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
- type: bing
  apiKey: "bing-key"
  serviceName: "bing-svc.dns"
  servicePort: 443
- type: arxiv
  serviceName: "arxiv-svc.dns" 
  servicePort: 443
searchRewrite:
  llmServiceName: "llm-svc.dns"
  llmServicePort: 443
  llmApiKey: "your-llm-api-key"
  llmUrl: "https://api.example.com/v1/chat/completions"
  llmModelName: "deepseek-chat"
  timeoutMillisecond: 15000
\`\`\`

3. **\u5BF9\u63A5SDK\u6216\u524D\u7AEF**

\u4F7F\u7528\u8FD9\u4E2AOpenAI\u534F\u8BAEBaseUrl\uFF1Ahttp://127.0.0.1:8080/v1\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528ChatBox/LobeChat\u7B49\u652F\u6301OpenAI\u534F\u8BAE\u7684\u5BF9\u8BDD\u5DE5\u5177\u8FDB\u884C\u5BF9\u8BDD\u3002

\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528OpenAI\u7684SDK\u5BF9\u63A5\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A

\`\`\`python
import json
from openai import OpenAI

client = OpenAI(
    api_key="none",
    base_url="http://localhost:8080/v1",
)

completion = client.chat.completions.create(
    model="deepseek-r1",
    messages=[
        {"role": "user", "content": "\u5206\u6790\u4E00\u4E0B\u56FD\u9645\u91D1\u4EF7\u8D70\u52BF"}
    ],
    stream=False
)

print(completion.choices[0].message.content)
\`\`\`

\u901A\u8FC7Higress+DeepSeek\u7684\u5F00\u6E90\u7EC4\u5408\uFF0C\u4F01\u4E1A\u53EF\u572824\u5C0F\u65F6\u5185\u5B8C\u6210\u4ECE\u96F6\u5230\u751F\u4EA7\u7EA7\u7684\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF\u90E8\u7F72\uFF0C\u4F7FLLM\u771F\u6B63\u6210\u4E3A\u4E1A\u52A1\u589E\u957F\u7684\u667A\u80FD\u5F15\u64CE\u3002

`},p=function(){return s},t=function(){return[{depth:2,slug:"\u4E00\u5F00\u6E90llm\u7684\u65B0\u7EAA\u5143deepseek\u5E26\u6765\u7684\u6280\u672F\u5E73\u6743",text:"\u4E00\u3001\u5F00\u6E90LLM\u7684\u65B0\u7EAA\u5143\uFF1ADeepSeek\u5E26\u6765\u7684\u6280\u672F\u5E73\u6743"},{depth:2,slug:"\u4E8Chigress\u96F6\u4EE3\u7801\u589E\u5F3Allm\u7684\u745E\u58EB\u519B\u5200",text:"\u4E8C\u3001Higress\uFF1A\u96F6\u4EE3\u7801\u589E\u5F3ALLM\u7684\u745E\u58EB\u519B\u5200"},{depth:2,slug:"\u4E09\u8054\u7F51\u641C\u7D22\u7684\u6280\u672F\u5B9E\u73B0\u4E0E\u573A\u666F\u4EF7\u503C",text:"\u4E09\u3001\u8054\u7F51\u641C\u7D22\u7684\u6280\u672F\u5B9E\u73B0\u4E0E\u573A\u666F\u4EF7\u503C"},{depth:3,slug:"\u6838\u5FC3\u67B6\u6784\u89E3\u6790",text:"\u6838\u5FC3\u67B6\u6784\u89E3\u6790"},{depth:3,slug:"\u5173\u952E\u6280\u672F\u7279\u6027",text:"\u5173\u952E\u6280\u672F\u7279\u6027"},{depth:3,slug:"\u5178\u578B\u5E94\u7528\u573A\u666F\u6548\u679C\u5C55\u793A",text:"\u5178\u578B\u5E94\u7528\u573A\u666F\u6548\u679C\u5C55\u793A"},{depth:2,slug:"\u56DB\u4ECE\u5F00\u6E90\u5230\u843D\u5730\u4E09\u6B65\u6784\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF",text:"\u56DB\u3001\u4ECE\u5F00\u6E90\u5230\u843D\u5730\uFF1A\u4E09\u6B65\u6784\u5EFA\u667A\u80FD\u95EE\u7B54\u7CFB\u7EDF"}]},e=d((x,F,h)=>{const{layout:u,...l}=n;return l.file=a,l.url=i,o`${v()}${E(s)}`})});export{e as Content,m as __tla,p as compiledContent,e as default,a as file,n as frontmatter,t as getHeadings,c as rawContent,i as url};
