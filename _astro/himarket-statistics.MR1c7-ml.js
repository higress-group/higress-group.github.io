import{c as d,__tla as o}from"./astro-component.YcfuVWta.js";import{r,m as E,u as v,__tla as y}from"./constant.9_4gXTQt.js";import{__tla as u}from"./astro/assets-service.r1ocst81.js";let e,l,a,n,t,c,i,_=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7B80\u4ECB">\u7B80\u4ECB</h2>
<p>HiMarket \u96C6\u6210\u4E86\u963F\u91CC\u4E91 SLS\uFF08\u65E5\u5FD7\u670D\u52A1\uFF09\u63D0\u4F9B\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u652F\u6301\u57FA\u4E8E\u8BBF\u95EE\u65E5\u5FD7\u7684\u6307\u6807\u805A\u5408\u3001\u56FE\u8868\u5C55\u793A\u548C\u65E5\u5FD7\u68C0\u7D22\u3002\u672C\u624B\u518C\u5C06\u6307\u5BFC\u60A8\u5B8C\u6210 SLS \u53EF\u89C2\u6D4B\u529F\u80FD\u7684\u914D\u7F6E\u3002</p>
<p>HiMarket \u53EF\u89C2\u6D4B\u529F\u80FD\u6A21\u5757\u4F9D\u8D56 SLS\uFF0C\u6682\u672A\u63D0\u4F9B\u5F00\u6E90\u5B9E\u73B0\uFF0C\u76EE\u524D\u53EA\u6709\u4EE5\u4E0B\u60C5\u51B5\u53EF\u6B63\u5E38\u4F7F\u7528\uFF1A</p>
<ul>
<li>\u4F7F\u7528\u963F\u91CC\u4E91\u5546\u4E1A\u5316 AI \u7F51\u5173\uFF08\u963F\u91CC\u4E91 AI \u7F51\u5173\u6216\u8005\u98DE\u5929\u4F01\u4E1A\u7248\uFF09\uFF0C\u5F00\u542F SLS \u6295\u9012\u5373\u53EF\uFF08\u5F00\u7BB1\u5373\u7528\uFF09</li>
<li>\u4F7F\u7528\u5F00\u6E90 Higress\uFF0C\u901A\u8FC7\u914D\u7F6E ai-statistics \u63D2\u4EF6\u548C\u65E5\u5FD7\u91C7\u96C6\uFF0C\u6295\u9012\u5230\u963F\u91CC\u4E91 SLS</li>
</ul>
<h2 id="\u529F\u80FD\u6982\u89C8">\u529F\u80FD\u6982\u89C8</h2>
<ul>
<li><strong>\u53EF\u89C2\u6D4B\u5927\u76D8</strong>\uFF1A\u6A21\u578B\u8C03\u7528\u7EDF\u8BA1\u3001MCP \u5DE5\u5177\u8C03\u7528\u7EDF\u8BA1\u3001\u8BF7\u6C42\u6210\u529F\u7387\u3001\u54CD\u5E94\u65F6\u95F4\u7B49</li>
<li><strong>\u65E5\u5FD7\u67E5\u8BE2</strong>\uFF1A\u652F\u6301\u81EA\u5B9A\u4E49 SQL \u67E5\u8BE2\u8BBF\u95EE\u65E5\u5FD7</li>
<li><strong>\u8BA4\u8BC1\u65B9\u5F0F</strong>\uFF1A\u652F\u6301 AK/SK \u8BA4\u8BC1\u65B9\u5F0F\uFF0CSTS \u5F85\u652F\u6301</li>
<li><strong>\u81EA\u52A8\u964D\u7EA7</strong>\uFF1ASLS \u672A\u914D\u7F6E\u65F6\u81EA\u52A8\u8FD4\u56DE\u7A7A\u6570\u636E\uFF0C\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u6B63\u5E38\u8FD0\u884C</li>
</ul>
<h2 id="\u914D\u7F6E\u6B65\u9AA4">\u914D\u7F6E\u6B65\u9AA4</h2>
<ul>
<li>\u4F7F\u7528\u5F00\u6E90 Higress\uFF0C\u9700\u8981\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E</li>
<li>\u4F7F\u7528\u963F\u91CC\u4E91\u5546\u4E1A\u5316 AI \u7F51\u5173\uFF08\u963F\u91CC\u4E91/\u98DE\u5929\u4F01\u4E1A\u7248\uFF09\uFF0C\u5219\u65E0\u9700\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u5F00\u542F\u65E5\u5FD7\u6295\u9012\u5373\u53EF\u3002</li>
</ul>
<h3 id="\u6B65\u9AA4-1\u51C6\u5907-sls-\u8D44\u6E90">\u6B65\u9AA4 1\uFF1A\u51C6\u5907 SLS \u8D44\u6E90</h3>
<p>\u5728\u5F00\u59CB\u914D\u7F6E\u524D\uFF0C\u60A8\u9700\u8981\u5728\u963F\u91CC\u4E91 SLS \u63A7\u5236\u53F0\u51C6\u5907\u4EE5\u4E0B\u8D44\u6E90\uFF1A</p>
<h4 id="11-\u521B\u5EFA-project-\u548C-logstore">1.1 \u521B\u5EFA Project \u548C Logstore</h4>
<ol>
<li>\u767B\u5F55<a href="https://sls.console.aliyun.com/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u963F\u91CC\u4E91 SLS \u63A7\u5236\u53F0</a></li>
<li>\u521B\u5EFA Project\uFF08\u4F8B\u5982\uFF1A<code dir="auto">apigateway-csb-cop</code>\uFF09</li>
<li>\u5728 Project \u4E0B\u521B\u5EFA Logstore\uFF08\u4F8B\u5982\uFF1A<code dir="auto">apig-access-log</code>\uFF09</li>
</ol>
<h4 id="12-\u914D\u7F6E\u65E5\u5FD7\u91C7\u96C6\u4EE5-docker-\u4E3A\u4F8B">1.2 \u914D\u7F6E\u65E5\u5FD7\u91C7\u96C6\uFF08\u4EE5 Docker \u4E3A\u4F8B\uFF09</h4>
<p>\u5C06\u7F51\u5173\u8BBF\u95EE\u65E5\u5FD7\u91C7\u96C6\u5230\u4E0A\u8FF0 logstore\u3002\u5EFA\u8BAE\u4F7F\u7528 higress 2.1.9 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0Caccesslogformat \u5DF2\u4F18\u5316\uFF0C\u9002\u914D\u4E86 HiMarket \u53EF\u89C2\u6D4B\u5927\u76D8\u3002</p>
<p>\u786E\u8BA4 higress \u90E8\u7F72\u6210\u529F\uFF0C\u4F7F\u7528 all-in-one \u90E8\u7F72</p>
<p><img src="https://image.cnkirito.cn/image-20260119103948203.png" alt="docker ps" referrerpolicy="no-referrer"></p>
<p>\u786E\u8BA4\u65E5\u5FD7\u8F93\u51FA\u6210\u529F\uFF0CDocker \u90E8\u7F72\u7684 higress \u4F1A\u5728 <code dir="auto">/var/log/higress/gateway.log</code>\uFF0C\u5728\u5BBF\u4E3B\u901A\u8FC7 <code dir="auto">docker exec higress tail -n 10 /var/log/higress/gateway.log</code> \u53EF\u76F4\u63A5\u67E5\u770B\u65E5\u5FD7\u8F93\u51FA</p>
<p><img src="https://image.cnkirito.cn/image-20260119105302742.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u6B63\u5E38 AI \u8BF7\u6C42\u4E2D ai_log \u5B57\u6BB5\u5E94\u5F53\u5305\u542B\u4E00\u4E2A json \u8BF7\u6C42</p>
<p>AI \u76F8\u5173\u5B57\u6BB5\uFF08JSON \u683C\u5F0F\u7684 <code dir="auto">ai_log</code> \u5B57\u6BB5\uFF09\uFF1A</p>
<ul>
<li><code dir="auto">model</code>: \u6A21\u578B\u540D\u79F0</li>
<li><code dir="auto">api</code>: API \u540D\u79F0</li>
<li><code dir="auto">input_token</code>: \u8F93\u5165 Token \u6570</li>
<li><code dir="auto">output_token</code>: \u8F93\u51FA Token \u6570</li>
<li><code dir="auto">response_type</code>: \u54CD\u5E94\u7C7B\u578B\uFF08stream/normal\uFF09</li>
<li><code dir="auto">llm_service_duration</code>: LLM \u670D\u52A1\u8017\u65F6</li>
<li><code dir="auto">cache_status</code>: \u7F13\u5B58\u72B6\u6001\uFF08hit/miss/skip\uFF09</li>
<li><code dir="auto">token_ratelimit_status</code>: \u9650\u6D41\u72B6\u6001</li>
<li><code dir="auto">mcp_tool_name</code>: MCP \u5DE5\u5177\u540D\u79F0</li>
</ul>
<p>\u5728\u786E\u8BA4\u65E5\u5FD7\u8F93\u51FA\u6B63\u5E38\u540E\uFF0C\u53EF\u53C2\u8003 SLS \u5B98\u65B9\u6587\u6863\u914D\u7F6E Docker \u6216\u8005 K8s \u91C7\u96C6\uFF0C\u4EE5 Docker \u90E8\u7F72 Higress \u4E3A\u4F8B\uFF0C\u53EF\u53C2\u8003\u8BE5\u6587\u6863\uFF1A<a href="https://help.aliyun.com/zh/sls/collect-docker-container-text-logs%E3%80%82%E6%9C%80%E5%85%B3%E9%94%AE%E7%9A%84%E6%AD%A5%E9%AA%A4%E4%B8%BA%E5%AE%89%E8%A3%85" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://help.aliyun.com/zh/sls/collect-docker-container-text-logs\u3002\u6700\u5173\u952E\u7684\u6B65\u9AA4\u4E3A\u5B89\u88C5</a> LoongCollector \u548C Logtail\uFF0C\u5E76\u914D\u7F6E <code dir="auto">/var/log/higress/gateway.log</code> \u6587\u4EF6\u7684\u91C7\u96C6\u3002\u7531\u4E8E\u65E5\u5FD7\u975E\u5E38\u591A\u5E76\u4E14\u9700\u8981\u914D\u5408\u540E\u7EED\u7684\u53EF\u89C2\u6D4B\u67E5\u8BE2\uFF0C\u8FD8\u9700\u8981\u914D\u7F6E\u76F8\u5173\u7684 SLS \u5904\u7406\u63D2\u4EF6</p>
<p><img src="https://image.cnkirito.cn/image-20260119110357227.png" alt="\u63D2\u4EF6\u914D\u7F6E" referrerpolicy="no-referrer"></p>
<p><img src="https://image.cnkirito.cn/image-20260119110436918.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://image.cnkirito.cn/image-20260119110501783.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5982\u679C\u91C7\u96C6\u6210\u529F\uFF0C\u5E94\u8BE5\u53EF\u4EE5\u5728 logstore \u4E2D\u770B\u5230\u8BE6\u7EC6\u7684\u65E5\u5FD7\uFF0C\u5982\u4E0B\u56FE\uFF1A</p>
<p><img src="https://image.cnkirito.cn/image-20260119110122535.png" alt="sls log" referrerpolicy="no-referrer"></p>
<h4 id="13-\u914D\u7F6E\u7D22\u5F15">1.3 \u914D\u7F6E\u7D22\u5F15</h4>
<p>HiMarket \u5F53\u524D\u7248\u672C\u672A\u63D0\u4F9B\u81EA\u52A8\u7D22\u5F15\u66F4\u65B0\u63A5\u53E3\uFF0C\u9700\u8981\u5728 SLS \u63A7\u5236\u53F0\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15</p>
<ul>
<li><strong>\u6587\u672C\u5B57\u6BB5</strong>\uFF1A<code dir="auto">method</code>\u3001<code dir="auto">consumer</code>\u3001<code dir="auto">route_name</code>\u3001<code dir="auto">upstream_cluster</code> \u7B49</li>
<li><strong>\u6570\u503C\u5B57\u6BB5</strong>\uFF1A<code dir="auto">duration</code>\u3001<code dir="auto">bytes_received</code>\u3001<code dir="auto">bytes_sent</code>\u3001<code dir="auto">response_code</code> \u7B49</li>
<li><strong>JSON \u5B57\u6BB5</strong>\uFF1A<code dir="auto">ai_log</code>\uFF08\u5F00\u542F JSON \u7D22\u5F15\uFF0C\u5305\u542B\u4E0A\u8FF0 AI \u76F8\u5173\u5B57\u6BB5\uFF09</li>
</ul>
<p>\u63A8\u8350\u5728\u5DF2\u7ECF\u6709\u4E00\u90E8\u5206\u539F\u59CB\u6570\u636E\u4E4B\u540E\uFF0C\u5728 SLS \u7684\u67E5\u8BE2\u5206\u6790\u5C5E\u6027\u4E2D\uFF0C\u6839\u636E\u83B7\u53D6\u5230\u7684\u65E5\u5FD7\u81EA\u52A8\u5EFA\u7ACB\u7D22\u5F15\uFF1A</p>
<p><img src="https://image.cnkirito.cn/image-20260119110750641.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5173\u952E\u6B65\u9AA4\uFF1A</p>
<ul>
<li>ai_log \u7C7B\u578B\u914D\u7F6E\u4E3A json</li>
<li>\u6240\u6709\u5B57\u6BB5\uFF0C\u5305\u62EC ai_log \u7684\u5C5E\u6027\u5B57\u6BB5\u5168\u90E8\u914D\u7F6E\u5F00\u542F\u7EDF\u8BA1\uFF0C\u5426\u5219\u4F1A\u5F71\u54CD\u540E\u7EED\u7684\u53EF\u89C2\u6D4B</li>
</ul>
<h3 id="\u6B65\u9AA4-2\u914D\u7F6E-himarket">\u6B65\u9AA4 2\uFF1A\u914D\u7F6E HiMarket</h3>
<h4 id="21-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6">2.1 \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h4>
<p>\u7F16\u8F91 <code dir="auto">himarket-bootstrap/src/main/resources/application.yml</code>\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># SLS \u670D\u52A1\u7AEF\u70B9\uFF08\u5FC5\u586B\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u683C\u5F0F\uFF1A&#x3C;region-id>.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4F8B\u5982\uFF1Acn-hangzhou.log.aliyuncs.com\u3001cn-beijing.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ENDPOINT:}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u8BA4\u8BC1\u65B9\u5F0F\uFF1AAK_SK</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">auth-type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_AUTH_TYPE:AK_SK}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># AK/SK \u8BA4\u8BC1\u65B9\u5F0F\u7684\u5BC6\u94A5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_ID:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_SECRET:}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u9ED8\u8BA4 Project \u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-project</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_PROJECT:apigateway-csb-cop}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u9ED8\u8BA4 Logstore \u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-logstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_LOGSTORE:apig-access-log}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># AliyunLogConfig CR \u914D\u7F6E\uFF08K8s \u73AF\u5883\u4F7F\u7528\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">aliyun-log-config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># CR \u6240\u5728\u7684 namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># CR \u7684\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">cr-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  # SLS \u670D\u52A1\u7AEF\u70B9\uFF08\u5FC5\u586B\uFF09\x7F  # \u683C\u5F0F\uFF1A<region-id>.log.aliyuncs.com\x7F  # \u4F8B\u5982\uFF1Acn-hangzhou.log.aliyuncs.com\u3001cn-beijing.log.aliyuncs.com\x7F  endpoint: \${SLS_ENDPOINT:}\x7F\x7F  # \u8BA4\u8BC1\u65B9\u5F0F\uFF1AAK_SK\x7F  auth-type: \${SLS_AUTH_TYPE:AK_SK}\x7F\x7F  # AK/SK \u8BA4\u8BC1\u65B9\u5F0F\u7684\u5BC6\u94A5\x7F  access-key-id: \${SLS_ACCESS_KEY_ID:}\x7F  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}\x7F\x7F  # \u9ED8\u8BA4 Project \u540D\u79F0\x7F  default-project: \${SLS_DEFAULT_PROJECT:apigateway-csb-cop}\x7F\x7F  # \u9ED8\u8BA4 Logstore \u540D\u79F0\x7F  default-logstore: \${SLS_DEFAULT_LOGSTORE:apig-access-log}\x7F\x7F  # AliyunLogConfig CR \u914D\u7F6E\uFF08K8s \u73AF\u5883\u4F7F\u7528\uFF09\x7F  aliyun-log-config:\x7F    # CR \u6240\u5728\u7684 namespace\x7F    namespace: \${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}\x7F    # CR \u7684\u540D\u79F0\x7F    cr-name: \${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}"><div></div></button></div></figure></div>
<h4 id="22-\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u63A8\u8350">2.2 \u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\uFF08\u63A8\u8350\uFF09</h4>
<p>\u4E3A\u4E86\u5B89\u5168\u6027\uFF0C\u5EFA\u8BAE\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u4F20\u9012\u654F\u611F\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5199\u5165\u914D\u7F6E\u6587\u4EF6\uFF1A</p>
<p><strong>Linux/macOS\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ENDPOINT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"cn-hangzhou.log.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_AUTH_TYPE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"AK_SK"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_ID</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"your-access-key-id"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_SECRET</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"your-access-key-secret"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_DEFAULT_PROJECT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"apigateway-csb-cop"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_DEFAULT_LOGSTORE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"apig-access-log"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export SLS_ENDPOINT=&#x22;cn-hangzhou.log.aliyuncs.com&#x22;\x7Fexport SLS_AUTH_TYPE=&#x22;AK_SK&#x22;\x7Fexport SLS_ACCESS_KEY_ID=&#x22;your-access-key-id&#x22;\x7Fexport SLS_ACCESS_KEY_SECRET=&#x22;your-access-key-secret&#x22;\x7Fexport SLS_DEFAULT_PROJECT=&#x22;apigateway-csb-cop&#x22;\x7Fexport SLS_DEFAULT_LOGSTORE=&#x22;apig-access-log&#x22;"><div></div></button></div></figure></div>
<p><strong>Windows\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_ENDPOINT</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">cn</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">hangzhou.</span><span style="--0:#79B8FF">log</span><span style="--0:#E1E4E8">.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_AUTH_TYPE</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">AK_SK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_ACCESS_KEY_ID</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">your</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">access</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">key</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">id</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_ACCESS_KEY_SECRET</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">your</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">access</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">key</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_DEFAULT_PROJECT</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">apigateway</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">csb</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">cop</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_DEFAULT_LOGSTORE</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">apig</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">access</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="set SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com\x7Fset SLS_AUTH_TYPE=AK_SK\x7Fset SLS_ACCESS_KEY_ID=your-access-key-id\x7Fset SLS_ACCESS_KEY_SECRET=your-access-key-secret\x7Fset SLS_DEFAULT_PROJECT=apigateway-csb-cop\x7Fset SLS_DEFAULT_LOGSTORE=apig-access-log"><div></div></button></div></figure></div>
<p><strong>Docker \u90E8\u7F72\uFF1A</strong></p>
<p>\u7F16\u8F91 <code dir="auto">deploy/docker/docker-compose.yml</code>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">himarket-server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_AUTH_TYPE=AK_SK</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_ACCESS_KEY_ID=your-access-key-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_ACCESS_KEY_SECRET=your-access-key-secret</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_DEFAULT_PROJECT=apigateway-csb-cop</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_DEFAULT_LOGSTORE=apig-access-log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="services:\x7F  himarket-server:\x7F    environment:\x7F      - SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com\x7F      - SLS_AUTH_TYPE=AK_SK\x7F      - SLS_ACCESS_KEY_ID=your-access-key-id\x7F      - SLS_ACCESS_KEY_SECRET=your-access-key-secret\x7F      - SLS_DEFAULT_PROJECT=apigateway-csb-cop\x7F      - SLS_DEFAULT_LOGSTORE=apig-access-log"><div></div></button></div></figure></div>
<p><strong>Kubernetes \u90E8\u7F72\uFF1A</strong></p>
<p>\u7F16\u8F91 <code dir="auto">deploy/helm/values.yaml</code>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cn-hangzhou.log.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"AK_SK"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">accessKeyId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-access-key-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">accessKeySecret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-access-key-secret"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultProject</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"apigateway-csb-cop"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultLogstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"apig-access-log"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  endpoint: &#x22;cn-hangzhou.log.aliyuncs.com&#x22;\x7F  authType: &#x22;AK_SK&#x22;\x7F  accessKeyId: &#x22;your-access-key-id&#x22;\x7F  accessKeySecret: &#x22;your-access-key-secret&#x22;\x7F  defaultProject: &#x22;apigateway-csb-cop&#x22;\x7F  defaultLogstore: &#x22;apig-access-log&#x22;"><div></div></button></div></figure></div>
<h3 id="\u6B65\u9AA4-3\u542F\u52A8\u5E76\u9A8C\u8BC1">\u6B65\u9AA4 3\uFF1A\u542F\u52A8\u5E76\u9A8C\u8BC1</h3>
<h4 id="31-\u542F\u52A8-himarket">3.1 \u542F\u52A8 HiMarket</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5F00\u53D1\u73AF\u5883</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clean</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-bootstrap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">spring-boot:run</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u751F\u4EA7\u73AF\u5883</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">java</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-jar</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-bootstrap/target/himarket-bootstrap.jar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mvn clean install\x7Fcd himarket-bootstrap\x7Fmvn spring-boot:run\x7Fjava -jar himarket-bootstrap/target/himarket-bootstrap.jar"><div></div></button></div></figure></div>
<h4 id="32-\u68C0\u67E5\u914D\u7F6E\u72B6\u6001">3.2 \u68C0\u67E5\u914D\u7F6E\u72B6\u6001</h4>
<p>\u542F\u52A8\u540E\u67E5\u770B\u65E5\u5FD7\uFF0C\u786E\u8BA4 SLS \u914D\u7F6E\u52A0\u8F7D\u6210\u529F\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com\x7FINFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK\x7FINFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop\x7FINFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log"><div></div></button></div></figure></div>
<h2 id="higress-\u63D2\u4EF6\u914D\u7F6E">Higress \u63D2\u4EF6\u914D\u7F6E</h2>
<h3 id="model-\u5927\u76D8">Model \u5927\u76D8</h3>
<p><code dir="auto">ai-statistics</code> \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">default_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">unknown</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">fallback_from</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-higress-fallback-from</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">as_separate_log_field</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">question</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gen_ai.input.messages</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">messages.@reverse.0.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">as_separate_log_field</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">rule</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gen_ai.input.messages</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.delta.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_streaming_body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">as_separate_log_field</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gen_ai.input.messages</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.message.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">ai-route-higress-qwen-max.internal</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  - config:\x7F      attributes:\x7F      - apply_to_log: true\x7F        default_value: unknown\x7F        key: consumer\x7F        value: x-mse-consumer\x7F        value_source: request_header\x7F      - apply_to_log: true\x7F        key: fallback_from\x7F        value: x-higress-fallback-from\x7F        value_source: request_header\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        as_separate_log_field: true\x7F        key: question\x7F        trace_span_key: gen_ai.input.messages\x7F        value: messages.@reverse.0.content\x7F        value_source: request_body\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        as_separate_log_field: true\x7F        key: answer\x7F        rule: append\x7F        trace_span_key: gen_ai.input.messages\x7F        value: choices.0.delta.content\x7F        value_source: response_streaming_body\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        as_separate_log_field: true\x7F        key: answer\x7F        trace_span_key: gen_ai.input.messages\x7F        value: choices.0.message.content\x7F        value_source: response_body\x7F    configDisable: false\x7F    ingress:\x7F    - ai-route-higress-qwen-max.internal"><div></div></button></div></figure></div>
<h3 id="mcp-\u5927\u76D8">MCP \u5927\u76D8</h3>
<p><code dir="auto">ai-statistics</code> \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">network.protocol.version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-id</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rpc.jsonrpc.request_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_method</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-method</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp.method.name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_params</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-params</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp.arguments</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_result</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-result</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">attribute_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tool.name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp.tool.name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">attribute_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tool.parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_arguments</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-arguments</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_response</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-response</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_error</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-error</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">mcp-server-travel.internal</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  - config:\x7F      attributes:\x7F      - apply_to_log: true\x7F        key: jsonrpc_version\x7F        value: x-envoy-jsonrpc-version\x7F        value_source: request_header\x7F        trace_span_key: network.protocol.version\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_id\x7F        value: x-envoy-jsonrpc-id\x7F        value_source: request_header\x7F        trace_span_key: rpc.jsonrpc.request_id\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_method\x7F        value: x-envoy-jsonrpc-method\x7F        value_source: request_header\x7F        trace_span_key: mcp.method.name\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_params\x7F        value: x-envoy-jsonrpc-params\x7F        value_source: request_header\x7F        trace_span_key: mcp.arguments\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_result\x7F        value: x-envoy-jsonrpc-result\x7F        value_source: response_header\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        attribute_key: tool.name\x7F        key: mcp_tool_name\x7F        value: x-envoy-mcp-tool-name\x7F        value_source: request_header\x7F        trace_span_key: mcp.tool.name\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        attribute_key: tool.parameters\x7F        key: mcp_tool_arguments\x7F        value: x-envoy-mcp-tool-arguments\x7F        value_source: request_header\x7F      - apply_to_log: true\x7F        key: mcp_tool_response\x7F        value: x-envoy-mcp-tool-response\x7F        value_source: response_header\x7F      - apply_to_log: true\x7F        key: mcp_tool_error\x7F        value: x-envoy-mcp-tool-error\x7F        value_source: response_header\x7F    configDisable: false\x7F    ingress:\x7F    - mcp-server-travel.internal"><div></div></button></div></figure></div>
<p><code dir="auto">pre-request</code> \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">pre-request.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">himarket-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">stage</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">mcp-server-travel.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  annotations:\x7F  name: pre-request.internal\x7F  namespace: himarket-system\x7Fspec:\x7F  imagePullPolicy: Always\x7F  matchRules:\x7F  - config:\x7F      stage: request\x7F    configDisable: false\x7F    ingress:\x7F    - mcp-server-travel.internal\x7F  phase: AUTHN\x7F  priority: 1000\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0"><div></div></button></div></figure></div>
<p><code dir="auto">pre-response</code> \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">pre-response.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">himarket-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">stage</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">mcp-server-travel.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  annotations:\x7F  name: pre-response.internal\x7F  namespace: himarket-system\x7Fspec:\x7F  imagePullPolicy: Always\x7F  matchRules:\x7F  - config:\x7F      stage: response\x7F    configDisable: false\x7F    ingress:\x7F    - mcp-server-travel.internal\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 1000\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0"><div></div></button></div></figure></div>
<p>\u63D2\u4EF6\u4F18\u5148\u7EA7\u8C03\u6574\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">pre-request(json-converter)</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">key-auth</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">310</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ai-statistics</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">pre-response(json-converter)</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">mcp-server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">999</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ai-security-guard</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">850</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="pre-request(json-converter):\x7F  phase: AUTHN\x7F  priority: 1000\x7F\x7Fkey-auth:\x7F  phase: AUTHN\x7F  priority: 310\x7F\x7Fai-statistics:\x7F  phase: AUTHN\x7F  priority: 100\x7F\x7Fpre-response(json-converter):\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 1000\x7F\x7Fmcp-server:\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 999\x7F\x7Fai-security-guard:\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 850"><div></div></button></div></figure></div>
<h2 id="\u9884\u8BBE\u573A\u666F\u8BF4\u660E">\u9884\u8BBE\u573A\u666F\u8BF4\u660E</h2>
<p>HiMarket \u5185\u7F6E\u4E86\u4E30\u5BCC\u7684\u9884\u8BBE\u67E5\u8BE2\u573A\u666F\uFF0C\u6DB5\u76D6\u6A21\u578B\u5927\u76D8\u3001MCP \u5927\u76D8\u7B49\uFF1A</p>
<h3 id="\u5361\u7247\u7C7Bcard">\u5361\u7247\u7C7B\uFF08CARD\uFF09</h3>
<p>| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E | \u9002\u7528\u5927\u76D8 |
||||
| <code dir="auto">pv</code> | \u603B\u8BF7\u6C42\u6B21\u6570 | \u6A21\u578B\u3001MCP |
| <code dir="auto">uv</code> | \u72EC\u7ACB\u8C03\u7528\u8005\u6570\u91CF | \u6A21\u578B\u3001MCP |
| <code dir="auto">fallback_count</code> | Fallback \u8BF7\u6C42\u6570 | \u6A21\u578B |
| <code dir="auto">bytes_received</code> | \u7F51\u5173\u5165\u6D41\u91CF\uFF08MB\uFF09 | MCP |
| <code dir="auto">bytes_sent</code> | \u7F51\u5173\u51FA\u6D41\u91CF\uFF08MB\uFF09 | MCP |
| <code dir="auto">input_token_total</code> | \u8F93\u5165 Token \u603B\u6570 | \u6A21\u578B |
| <code dir="auto">output_token_total</code> | \u8F93\u51FA Token \u603B\u6570 | \u6A21\u578B |
| <code dir="auto">token_total</code> | Token \u603B\u6570 | \u6A21\u578B |</p>
<h3 id="\u7EBF\u56FE\u7C7Bline">\u7EBF\u56FE\u7C7B\uFF08LINE\uFF09</h3>
<p>| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E | \u9002\u7528\u5927\u76D8 |
||||
| <code dir="auto">qps_stream</code> | \u6D41\u5F0F QPS | \u6A21\u578B |
| <code dir="auto">qps_normal</code> | \u975E\u6D41\u5F0F QPS | \u6A21\u578B |
| <code dir="auto">qps_total</code> | \u603B\u4F53 QPS | \u6A21\u578B |
| <code dir="auto">success_rate</code> | \u8BF7\u6C42\u6210\u529F\u7387 | \u6A21\u578B\u3001MCP |
| <code dir="auto">token_per_sec_input</code> | \u8F93\u5165 Token/s | \u6A21\u578B |
| <code dir="auto">token_per_sec_output</code> | \u8F93\u51FA Token/s | \u6A21\u578B |
| <code dir="auto">token_per_sec_total</code> | \u603B Token/s | \u6A21\u578B |
| <code dir="auto">rt_avg_total</code> | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF08\u6574\u4F53\uFF09 | \u6A21\u578B |
| <code dir="auto">rt_avg_stream</code> | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF08\u6D41\u5F0F\uFF09 | \u6A21\u578B |
| <code dir="auto">rt_avg_normal</code> | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF08\u975E\u6D41\u5F0F\uFF09 | \u6A21\u578B |
| <code dir="auto">rt_first_token</code> | \u9996\u5305\u54CD\u5E94\u65F6\u95F4 | \u6A21\u578B |
| <code dir="auto">cache_hit/miss/skip</code> | \u7F13\u5B58\u547D\u4E2D/\u672A\u547D\u4E2D/\u8DF3\u8FC7 | \u6A21\u578B |
| <code dir="auto">ratelimited_per_sec</code> | \u9650\u6D41\u8BF7\u6C42\u6570/s | \u6A21\u578B |
| <code dir="auto">qps_by_status</code> | \u6309\u72B6\u6001\u7801\u5206\u7EC4\u7684 QPS | MCP |
| <code dir="auto">qps_total_simple</code> | \u603B QPS | MCP |
| <code dir="auto">rt_avg</code> | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4 | MCP |
| <code dir="auto">rt_p99/p95/p90/p50</code> | P99/P95/P90/P50 \u54CD\u5E94\u65F6\u95F4 | MCP |</p>
<h3 id="\u8868\u683C\u7C7Btable">\u8868\u683C\u7C7B\uFF08TABLE\uFF09</h3>
<p>| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E | \u9002\u7528\u5927\u76D8 |
||||
| <code dir="auto">model_token_table</code> | \u6A21\u578B Token \u4F7F\u7528\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">consumer_token_table</code> | \u6D88\u8D39\u8005 Token \u4F7F\u7528\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">service_token_table</code> | \u670D\u52A1 Token \u4F7F\u7528\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">error_requests_table</code> | \u9519\u8BEF\u8BF7\u6C42\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">ratelimited_consumer_table</code> | \u9650\u6D41\u6D88\u8D39\u8005\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">risk_label_table</code> | \u98CE\u9669\u7C7B\u578B\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">risk_consumer_table</code> | \u98CE\u9669\u6D88\u8D39\u8005\u7EDF\u8BA1 | \u6A21\u578B |
| <code dir="auto">method_distribution</code> | Method \u5206\u5E03 | MCP |
| <code dir="auto">gateway_status_distribution</code> | \u7F51\u5173\u72B6\u6001\u7801\u5206\u5E03 | MCP |
| <code dir="auto">backend_status_distribution</code> | \u540E\u7AEF\u72B6\u6001\u7801\u5206\u5E03 | MCP |
| <code dir="auto">request_distribution</code> | \u8BF7\u6C42\u5206\u5E03 | MCP |</p>
<h3 id="\u7B5B\u9009\u9009\u9879\u7C7Btable">\u7B5B\u9009\u9009\u9879\u7C7B\uFF08TABLE\uFF09</h3>
<p>| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E |
|||
| <code dir="auto">filter_service_options</code> | \u5B9E\u4F8B\u5217\u8868 |
| <code dir="auto">filter_api_options</code> | API \u5217\u8868 |
| <code dir="auto">filter_model_options</code> | \u6A21\u578B\u5217\u8868 |
| <code dir="auto">filter_route_options</code> | \u8DEF\u7531\u5217\u8868 |
| <code dir="auto">filter_consumer_options</code> | \u6D88\u8D39\u8005\u5217\u8868 |
| <code dir="auto">filter_upstream_options</code> | \u4E0A\u6E38\u670D\u52A1\u5217\u8868 |
| <code dir="auto">filter_mcp_tool_options</code> | MCP \u5DE5\u5177\u540D\u79F0\u5217\u8868 |</p>
<h2 id="\u6545\u969C\u6392\u67E5">\u6545\u969C\u6392\u67E5</h2>
<h3 id="\u95EE\u9898-1\u63A5\u53E3\u8FD4\u56DE\u7A7A\u6570\u636E">\u95EE\u9898 1\uFF1A\u63A5\u53E3\u8FD4\u56DE\u7A7A\u6570\u636E</h3>
<p><strong>\u539F\u56E0\u5206\u6790\uFF1A</strong></p>
<ul>
<li>SLS \u672A\u914D\u7F6E\uFF08<code dir="auto">endpoint</code> \u4E3A\u7A7A\uFF09</li>
<li>Project \u6216 Logstore \u4E0D\u5B58\u5728</li>
<li>\u65F6\u95F4\u8303\u56F4\u5185\u65E0\u65E5\u5FD7\u6570\u636E</li>
<li>\u8BA4\u8BC1\u4FE1\u606F\u9519\u8BEF</li>
</ul>
<p><strong>\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p>
<ol>
<li>\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u6216\u73AF\u5883\u53D8\u91CF\u662F\u5426\u6B63\u786E\u8BBE\u7F6E</li>
<li>\u67E5\u770B\u5E94\u7528\u65E5\u5FD7\uFF0C\u786E\u8BA4 SLS \u914D\u7F6E\u52A0\u8F7D\u72B6\u6001</li>
<li>\u767B\u5F55 SLS \u63A7\u5236\u53F0\u786E\u8BA4 Project \u548C Logstore \u5B58\u5728</li>
<li>\u4F7F\u7528 SLS \u63A7\u5236\u53F0\u67E5\u8BE2\u9A8C\u8BC1\u6570\u636E\u662F\u5426\u5B58\u5728</li>
<li>\u9A8C\u8BC1 AccessKey \u6743\u9650\u662F\u5426\u5305\u542B SLS \u8BFB\u53D6\u6743\u9650</li>
</ol>
<h3 id="\u95EE\u9898-2\u67E5\u8BE2\u8D85\u65F6">\u95EE\u9898 2\uFF1A\u67E5\u8BE2\u8D85\u65F6</h3>
<p><strong>\u539F\u56E0\u5206\u6790\uFF1A</strong></p>
<ul>
<li>\u65F6\u95F4\u8303\u56F4\u8FC7\u5927</li>
<li>\u65E5\u5FD7\u91CF\u8FC7\u5927</li>
<li>\u7D22\u5F15\u672A\u914D\u7F6E\u6216\u914D\u7F6E\u4E0D\u5F53</li>
</ul>
<p><strong>\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p>
<ol>
<li>\u7F29\u5C0F\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4</li>
<li>\u5728 SLS \u63A7\u5236\u53F0\u4E3A Logstore \u914D\u7F6E\u7D22\u5F15</li>
<li>\u4F7F\u7528\u9884\u8BBE\u573A\u666F\u800C\u975E\u590D\u6742\u81EA\u5B9A\u4E49\u67E5\u8BE2</li>
<li>\u589E\u52A0 <code dir="auto">interval</code> \u53C2\u6570\u51CF\u5C11\u6570\u636E\u70B9\u6570\u91CF</li>
</ol>
<h3 id="\u95EE\u9898-3\u67E5\u8BE2\u7ED3\u679C\u4E0E\u9884\u671F\u4E0D\u7B26">\u95EE\u9898 3\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E0E\u9884\u671F\u4E0D\u7B26</h3>
<p><strong>\u539F\u56E0\u5206\u6790\uFF1A</strong></p>
<ul>
<li>\u65E5\u5FD7\u5B57\u6BB5\u6620\u5C04\u4E0D\u5339\u914D</li>
<li>\u7D22\u5F15\u914D\u7F6E\u4E0D\u6B63\u786E</li>
<li>SQL \u8BED\u6CD5\u9519\u8BEF</li>
</ul>
<p><strong>\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p>
<ol>
<li>\u786E\u8BA4\u65E5\u5FD7\u5B57\u6BB5\u540D\u79F0\u4E0E\u9884\u8BBE SQL \u4E00\u81F4</li>
<li>\u68C0\u67E5 JSON \u5B57\u6BB5\uFF08\u5982 <code dir="auto">ai_log</code>\uFF09\u662F\u5426\u5F00\u542F JSON \u7D22\u5F15</li>
<li>\u67E5\u770B\u5E94\u7528\u65E5\u5FD7\u83B7\u53D6\u5B9E\u9645\u6267\u884C\u7684 SQL</li>
<li>\u5728 SLS \u63A7\u5236\u53F0\u624B\u52A8\u6267\u884C SQL \u9A8C\u8BC1</li>
</ol>
<h3 id="\u95EE\u9898-4\u8BA4\u8BC1\u5931\u8D25">\u95EE\u9898 4\uFF1A\u8BA4\u8BC1\u5931\u8D25</h3>
<p><strong>\u9519\u8BEF\u65E5\u5FD7\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">LogException: AccessKeyId is required</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client\x7FLogException: AccessKeyId is required"><div></div></button></div></figure></div>
<p><strong>\u89E3\u51B3\u65B9\u6CD5\uFF1A</strong></p>
<ol>
<li>\u786E\u8BA4\u73AF\u5883\u53D8\u91CF\u5DF2\u6B63\u786E\u8BBE\u7F6E</li>
<li>\u786E\u8BA4 <code dir="auto">auth-type</code> \u4E3A <code dir="auto">AK_SK</code></li>
<li>\u786E\u8BA4 AccessKey ID \u548C Secret \u65E0\u8BEF</li>
<li>\u786E\u8BA4 AccessKey \u672A\u88AB\u7981\u7528\u6216\u8FC7\u671F</li>
</ol>
<h2 id="\u6700\u4F73\u5B9E\u8DF5">\u6700\u4F73\u5B9E\u8DF5</h2>
<h3 id="1-\u5B89\u5168\u6027">1. \u5B89\u5168\u6027</h3>
<ul>
<li><strong>\u4E0D\u8981</strong>\u5C06 AccessKey \u76F4\u63A5\u5199\u5165\u914D\u7F6E\u6587\u4EF6</li>
<li><strong>\u4F7F\u7528</strong>\u73AF\u5883\u53D8\u91CF\u6216 Kubernetes Secret \u7BA1\u7406\u654F\u611F\u4FE1\u606F</li>
<li><strong>\u5B9A\u671F\u8F6E\u6362</strong> AccessKey</li>
<li><strong>\u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219</strong>\uFF0C\u4EC5\u6388\u4E88 SLS \u8BFB\u53D6\u6743\u9650</li>
</ul>
<h3 id="2-\u6027\u80FD\u4F18\u5316">2. \u6027\u80FD\u4F18\u5316</h3>
<ul>
<li><strong>\u5408\u7406\u8BBE\u7F6E</strong>\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\uFF0C\u907F\u514D\u4E00\u6B21\u67E5\u8BE2\u8D85\u8FC7 7 \u5929</li>
<li><strong>\u914D\u7F6E\u7D22\u5F15</strong>\u63D0\u5347\u67E5\u8BE2\u6027\u80FD</li>
<li><strong>\u4F7F\u7528\u9884\u8BBE\u573A\u666F</strong>\u800C\u975E\u590D\u6742\u81EA\u5B9A\u4E49\u67E5\u8BE2</li>
<li><strong>\u589E\u5927 interval</strong> \u51CF\u5C11\u65F6\u5E8F\u56FE\u6570\u636E\u70B9</li>
</ul>
<h3 id="3-\u6210\u672C\u63A7\u5236">3. \u6210\u672C\u63A7\u5236</h3>
<ul>
<li>\u6309\u9700\u914D\u7F6E Logstore \u5B58\u50A8\u5468\u671F</li>
<li>\u5408\u7406\u8BBE\u7F6E\u65E5\u5FD7\u91C7\u96C6\u89C4\u5219\uFF0C\u907F\u514D\u91C7\u96C6\u65E0\u7528\u65E5\u5FD7</li>
<li>\u4F7F\u7528 SLS \u7684\u6570\u636E\u751F\u547D\u5468\u671F\u7BA1\u7406\u529F\u80FD</li>
</ul>
<h3 id="4-\u76D1\u63A7\u544A\u8B66">4. \u76D1\u63A7\u544A\u8B66</h3>
<ul>
<li>\u5728 SLS \u63A7\u5236\u53F0\u914D\u7F6E\u67E5\u8BE2\u5F02\u5E38\u544A\u8B66</li>
<li>\u76D1\u63A7 HiMarket \u5E94\u7528\u65E5\u5FD7\u4E2D\u7684 SLS \u76F8\u5173\u9519\u8BEF</li>
<li>\u5B9A\u671F\u68C0\u67E5 SLS \u4F7F\u7528\u91CF\u548C\u8D39\u7528</li>
</ul>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5F00\u53D1\u73AF\u5883\u5B8C\u6574\u914D\u7F6E">\u5F00\u53D1\u73AF\u5883\u5B8C\u6574\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cn-hangzhou.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">auth-type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AK_SK</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LTAI5tXXXXXXXXXXXXXX</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">YourAccessKeySecretHere</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-project</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev-apigateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-logstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev-access-log</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">aliyun-log-config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apigateway-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">cr-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apigateway-access-log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  endpoint: cn-hangzhou.log.aliyuncs.com\x7F  auth-type: AK_SK\x7F  access-key-id: LTAI5tXXXXXXXXXXXXXX\x7F  access-key-secret: YourAccessKeySecretHere\x7F  default-project: dev-apigateway\x7F  default-logstore: dev-access-log\x7F  aliyun-log-config:\x7F    namespace: apigateway-system\x7F    cr-name: apigateway-access-log"><div></div></button></div></figure></div>
<h3 id="\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\u4F7F\u7528\u73AF\u5883\u53D8\u91CF">\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\uFF08\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\uFF09</h3>
<p><strong>application.yml\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ENDPOINT:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">auth-type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_AUTH_TYPE:AK_SK}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_ID:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_SECRET:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-project</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_PROJECT:prod-apigateway}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-logstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_LOGSTORE:prod-access-log}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  endpoint: \${SLS_ENDPOINT:}\x7F  auth-type: \${SLS_AUTH_TYPE:AK_SK}\x7F  access-key-id: \${SLS_ACCESS_KEY_ID:}\x7F  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}\x7F  default-project: \${SLS_DEFAULT_PROJECT:prod-apigateway}\x7F  default-logstore: \${SLS_DEFAULT_LOGSTORE:prod-access-log}"><div></div></button></div></figure></div>
<p><strong>\u73AF\u5883\u53D8\u91CF\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ENDPOINT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"cn-beijing.log.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_AUTH_TYPE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"AK_SK"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_ID</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"LTAI5tProdXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_SECRET</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"ProdAccessKeySecretHere"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export SLS_ENDPOINT=&#x22;cn-beijing.log.aliyuncs.com&#x22;\x7Fexport SLS_AUTH_TYPE=&#x22;AK_SK&#x22;\x7Fexport SLS_ACCESS_KEY_ID=&#x22;LTAI5tProdXXXXXXXXXX&#x22;\x7Fexport SLS_ACCESS_KEY_SECRET=&#x22;ProdAccessKeySecretHere&#x22;"><div></div></button></div></figure></div>
<h2 id="\u9644\u5F55">\u9644\u5F55</h2>
<h3 id="a-sls-\u533A\u57DF-endpoint-\u5217\u8868">A. SLS \u533A\u57DF Endpoint \u5217\u8868</h3>
<p>| \u533A\u57DF | Endpoint |
||-|
| \u534E\u4E1C1\uFF08\u676D\u5DDE\uFF09 | cn-hangzhou.log.aliyuncs.com |
| \u534E\u4E1C2\uFF08\u4E0A\u6D77\uFF09 | cn-shanghai.log.aliyuncs.com |
| \u534E\u53171\uFF08\u9752\u5C9B\uFF09 | cn-qingdao.log.aliyuncs.com |
| \u534E\u53172\uFF08\u5317\u4EAC\uFF09 | cn-beijing.log.aliyuncs.com |
| \u534E\u53173\uFF08\u5F20\u5BB6\u53E3\uFF09 | cn-zhangjiakou.log.aliyuncs.com |
| \u534E\u53571\uFF08\u6DF1\u5733\uFF09 | cn-shenzhen.log.aliyuncs.com |
| \u897F\u53571\uFF08\u6210\u90FD\uFF09 | cn-chengdu.log.aliyuncs.com |</p>
<p>\u66F4\u591A\u533A\u57DF\u8BF7\u53C2\u8003\uFF1A<a href="https://help.aliyun.com/document_detail/29008.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://help.aliyun.com/document_detail/29008.html</a></p>
<h3 id="b-\u914D\u7F6E\u53C2\u6570\u5B8C\u6574\u5217\u8868">B. \u914D\u7F6E\u53C2\u6570\u5B8C\u6574\u5217\u8868</h3>
<p>| \u53C2\u6570 | \u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u8BF4\u660E |
||||\u2014||
| <code dir="auto">endpoint</code> | String | \u662F | - | SLS \u670D\u52A1\u7AEF\u70B9 |
| <code dir="auto">auth-type</code> | Enum | \u5426 | <code dir="auto">AK_SK</code> | \u8BA4\u8BC1\u65B9\u5F0F\uFF1A<code dir="auto">AK_SK</code> |
| <code dir="auto">access-key-id</code> | String | \u6761\u4EF6 | - | AccessKey ID\uFF08auth-type=AK_SK \u65F6\u5FC5\u586B\uFF09 |
| <code dir="auto">access-key-secret</code> | String | \u6761\u4EF6 | - | AccessKey Secret\uFF08auth-type=AK_SK \u65F6\u5FC5\u586B\uFF09 |
| <code dir="auto">default-project</code> | String | \u662F | - | \u9ED8\u8BA4 Project \u540D\u79F0 |
| <code dir="auto">default-logstore</code> | String | \u662F | - | \u9ED8\u8BA4 Logstore \u540D\u79F0 |
| <code dir="auto">aliyun-log-config.namespace</code> | String | \u5426 | <code dir="auto">apigateway-system</code> | AliyunLogConfig CR \u6240\u5728 namespace |
| <code dir="auto">aliyun-log-config.cr-name</code> | String | \u5426 | <code dir="auto">apigateway-access-log</code> | AliyunLogConfig CR \u540D\u79F0 |</p>
<h2 id="\u76F8\u5173\u94FE\u63A5">\u76F8\u5173\u94FE\u63A5</h2>
<ul>
<li><a href="https://help.aliyun.com/product/28958.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u963F\u91CC\u4E91 SLS \u5B98\u65B9\u6587\u6863</a></li>
<li><a href="https://help.aliyun.com/document_detail/63449.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SLS SQL \u8BED\u6CD5\u53C2\u8003</a></li>
</ul>`,n={title:"HiMarket \u53EF\u89C2\u6D4B\u5927\u76D8\u4F7F\u7528\u6307\u5357",description:"HiMarket \u53EF\u89C2\u6D4B\u5927\u76D8\u4F7F\u7528\u6307\u5357",date:"2025-12-24",category:"article",keywords:["HiMarket","\u53EF\u89C2\u6D4B","\u8BA1\u91CF"],authors:"Higress Team"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/himarket/himarket-statistics.md",i=void 0,c=function(){return`
# HiMarket \u53EF\u89C2\u6D4B\u5927\u76D8\u4F7F\u7528\u6307\u5357

## \u7B80\u4ECB

HiMarket \u96C6\u6210\u4E86\u963F\u91CC\u4E91 SLS\uFF08\u65E5\u5FD7\u670D\u52A1\uFF09\u63D0\u4F9B\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u652F\u6301\u57FA\u4E8E\u8BBF\u95EE\u65E5\u5FD7\u7684\u6307\u6807\u805A\u5408\u3001\u56FE\u8868\u5C55\u793A\u548C\u65E5\u5FD7\u68C0\u7D22\u3002\u672C\u624B\u518C\u5C06\u6307\u5BFC\u60A8\u5B8C\u6210 SLS \u53EF\u89C2\u6D4B\u529F\u80FD\u7684\u914D\u7F6E\u3002

HiMarket \u53EF\u89C2\u6D4B\u529F\u80FD\u6A21\u5757\u4F9D\u8D56 SLS\uFF0C\u6682\u672A\u63D0\u4F9B\u5F00\u6E90\u5B9E\u73B0\uFF0C\u76EE\u524D\u53EA\u6709\u4EE5\u4E0B\u60C5\u51B5\u53EF\u6B63\u5E38\u4F7F\u7528\uFF1A

- \u4F7F\u7528\u963F\u91CC\u4E91\u5546\u4E1A\u5316 AI \u7F51\u5173\uFF08\u963F\u91CC\u4E91 AI \u7F51\u5173\u6216\u8005\u98DE\u5929\u4F01\u4E1A\u7248\uFF09\uFF0C\u5F00\u542F SLS \u6295\u9012\u5373\u53EF\uFF08\u5F00\u7BB1\u5373\u7528\uFF09
- \u4F7F\u7528\u5F00\u6E90 Higress\uFF0C\u901A\u8FC7\u914D\u7F6E ai-statistics \u63D2\u4EF6\u548C\u65E5\u5FD7\u91C7\u96C6\uFF0C\u6295\u9012\u5230\u963F\u91CC\u4E91 SLS

## \u529F\u80FD\u6982\u89C8

- **\u53EF\u89C2\u6D4B\u5927\u76D8**\uFF1A\u6A21\u578B\u8C03\u7528\u7EDF\u8BA1\u3001MCP \u5DE5\u5177\u8C03\u7528\u7EDF\u8BA1\u3001\u8BF7\u6C42\u6210\u529F\u7387\u3001\u54CD\u5E94\u65F6\u95F4\u7B49
- **\u65E5\u5FD7\u67E5\u8BE2**\uFF1A\u652F\u6301\u81EA\u5B9A\u4E49 SQL \u67E5\u8BE2\u8BBF\u95EE\u65E5\u5FD7
- **\u8BA4\u8BC1\u65B9\u5F0F**\uFF1A\u652F\u6301 AK/SK \u8BA4\u8BC1\u65B9\u5F0F\uFF0CSTS \u5F85\u652F\u6301
- **\u81EA\u52A8\u964D\u7EA7**\uFF1ASLS \u672A\u914D\u7F6E\u65F6\u81EA\u52A8\u8FD4\u56DE\u7A7A\u6570\u636E\uFF0C\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u6B63\u5E38\u8FD0\u884C


## \u914D\u7F6E\u6B65\u9AA4

- \u4F7F\u7528\u5F00\u6E90 Higress\uFF0C\u9700\u8981\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E
- \u4F7F\u7528\u963F\u91CC\u4E91\u5546\u4E1A\u5316 AI \u7F51\u5173\uFF08\u963F\u91CC\u4E91/\u98DE\u5929\u4F01\u4E1A\u7248\uFF09\uFF0C\u5219\u65E0\u9700\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u53EA\u9700\u8981\u5F00\u542F\u65E5\u5FD7\u6295\u9012\u5373\u53EF\u3002

### \u6B65\u9AA4 1\uFF1A\u51C6\u5907 SLS \u8D44\u6E90

\u5728\u5F00\u59CB\u914D\u7F6E\u524D\uFF0C\u60A8\u9700\u8981\u5728\u963F\u91CC\u4E91 SLS \u63A7\u5236\u53F0\u51C6\u5907\u4EE5\u4E0B\u8D44\u6E90\uFF1A

#### 1.1 \u521B\u5EFA Project \u548C Logstore

1. \u767B\u5F55[\u963F\u91CC\u4E91 SLS \u63A7\u5236\u53F0](https://sls.console.aliyun.com/)
2. \u521B\u5EFA Project\uFF08\u4F8B\u5982\uFF1A\`apigateway-csb-cop\`\uFF09
3. \u5728 Project \u4E0B\u521B\u5EFA Logstore\uFF08\u4F8B\u5982\uFF1A\`apig-access-log\`\uFF09

#### 1.2 \u914D\u7F6E\u65E5\u5FD7\u91C7\u96C6\uFF08\u4EE5 Docker \u4E3A\u4F8B\uFF09

\u5C06\u7F51\u5173\u8BBF\u95EE\u65E5\u5FD7\u91C7\u96C6\u5230\u4E0A\u8FF0 logstore\u3002\u5EFA\u8BAE\u4F7F\u7528 higress 2.1.9 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0Caccesslogformat \u5DF2\u4F18\u5316\uFF0C\u9002\u914D\u4E86 HiMarket \u53EF\u89C2\u6D4B\u5927\u76D8\u3002

\u786E\u8BA4 higress \u90E8\u7F72\u6210\u529F\uFF0C\u4F7F\u7528 all-in-one \u90E8\u7F72

![docker ps](https://image.cnkirito.cn/image-20260119103948203.png)

\u786E\u8BA4\u65E5\u5FD7\u8F93\u51FA\u6210\u529F\uFF0CDocker \u90E8\u7F72\u7684 higress \u4F1A\u5728 \`/var/log/higress/gateway.log\`\uFF0C\u5728\u5BBF\u4E3B\u901A\u8FC7 \`docker exec higress tail -n 10 /var/log/higress/gateway.log\` \u53EF\u76F4\u63A5\u67E5\u770B\u65E5\u5FD7\u8F93\u51FA

![](https://image.cnkirito.cn/image-20260119105302742.png)

\u6B63\u5E38 AI \u8BF7\u6C42\u4E2D ai_log \u5B57\u6BB5\u5E94\u5F53\u5305\u542B\u4E00\u4E2A json \u8BF7\u6C42

AI \u76F8\u5173\u5B57\u6BB5\uFF08JSON \u683C\u5F0F\u7684 \`ai_log\` \u5B57\u6BB5\uFF09\uFF1A

- \`model\`: \u6A21\u578B\u540D\u79F0
- \`api\`: API \u540D\u79F0
- \`input_token\`: \u8F93\u5165 Token \u6570
- \`output_token\`: \u8F93\u51FA Token \u6570
- \`response_type\`: \u54CD\u5E94\u7C7B\u578B\uFF08stream/normal\uFF09
- \`llm_service_duration\`: LLM \u670D\u52A1\u8017\u65F6
- \`cache_status\`: \u7F13\u5B58\u72B6\u6001\uFF08hit/miss/skip\uFF09
- \`token_ratelimit_status\`: \u9650\u6D41\u72B6\u6001
- \`mcp_tool_name\`: MCP \u5DE5\u5177\u540D\u79F0

\u5728\u786E\u8BA4\u65E5\u5FD7\u8F93\u51FA\u6B63\u5E38\u540E\uFF0C\u53EF\u53C2\u8003 SLS \u5B98\u65B9\u6587\u6863\u914D\u7F6E Docker \u6216\u8005 K8s \u91C7\u96C6\uFF0C\u4EE5 Docker \u90E8\u7F72 Higress \u4E3A\u4F8B\uFF0C\u53EF\u53C2\u8003\u8BE5\u6587\u6863\uFF1Ahttps://help.aliyun.com/zh/sls/collect-docker-container-text-logs\u3002\u6700\u5173\u952E\u7684\u6B65\u9AA4\u4E3A\u5B89\u88C5 LoongCollector \u548C Logtail\uFF0C\u5E76\u914D\u7F6E \`/var/log/higress/gateway.log\` \u6587\u4EF6\u7684\u91C7\u96C6\u3002\u7531\u4E8E\u65E5\u5FD7\u975E\u5E38\u591A\u5E76\u4E14\u9700\u8981\u914D\u5408\u540E\u7EED\u7684\u53EF\u89C2\u6D4B\u67E5\u8BE2\uFF0C\u8FD8\u9700\u8981\u914D\u7F6E\u76F8\u5173\u7684 SLS \u5904\u7406\u63D2\u4EF6

![\u63D2\u4EF6\u914D\u7F6E](https://image.cnkirito.cn/image-20260119110357227.png)

![](https://image.cnkirito.cn/image-20260119110436918.png)

![](https://image.cnkirito.cn/image-20260119110501783.png)

\u5982\u679C\u91C7\u96C6\u6210\u529F\uFF0C\u5E94\u8BE5\u53EF\u4EE5\u5728 logstore \u4E2D\u770B\u5230\u8BE6\u7EC6\u7684\u65E5\u5FD7\uFF0C\u5982\u4E0B\u56FE\uFF1A

![sls log](https://image.cnkirito.cn/image-20260119110122535.png)

#### 1.3 \u914D\u7F6E\u7D22\u5F15

HiMarket \u5F53\u524D\u7248\u672C\u672A\u63D0\u4F9B\u81EA\u52A8\u7D22\u5F15\u66F4\u65B0\u63A5\u53E3\uFF0C\u9700\u8981\u5728 SLS \u63A7\u5236\u53F0\u81EA\u52A8\u521B\u5EFA\u7D22\u5F15

- **\u6587\u672C\u5B57\u6BB5**\uFF1A\`method\`\u3001\`consumer\`\u3001\`route_name\`\u3001\`upstream_cluster\` \u7B49
- **\u6570\u503C\u5B57\u6BB5**\uFF1A\`duration\`\u3001\`bytes_received\`\u3001\`bytes_sent\`\u3001\`response_code\` \u7B49
- **JSON \u5B57\u6BB5**\uFF1A\`ai_log\`\uFF08\u5F00\u542F JSON \u7D22\u5F15\uFF0C\u5305\u542B\u4E0A\u8FF0 AI \u76F8\u5173\u5B57\u6BB5\uFF09

\u63A8\u8350\u5728\u5DF2\u7ECF\u6709\u4E00\u90E8\u5206\u539F\u59CB\u6570\u636E\u4E4B\u540E\uFF0C\u5728 SLS \u7684\u67E5\u8BE2\u5206\u6790\u5C5E\u6027\u4E2D\uFF0C\u6839\u636E\u83B7\u53D6\u5230\u7684\u65E5\u5FD7\u81EA\u52A8\u5EFA\u7ACB\u7D22\u5F15\uFF1A

![](https://image.cnkirito.cn/image-20260119110750641.png)

\u5173\u952E\u6B65\u9AA4\uFF1A

- ai_log \u7C7B\u578B\u914D\u7F6E\u4E3A json
- \u6240\u6709\u5B57\u6BB5\uFF0C\u5305\u62EC ai_log \u7684\u5C5E\u6027\u5B57\u6BB5\u5168\u90E8\u914D\u7F6E\u5F00\u542F\u7EDF\u8BA1\uFF0C\u5426\u5219\u4F1A\u5F71\u54CD\u540E\u7EED\u7684\u53EF\u89C2\u6D4B

### \u6B65\u9AA4 2\uFF1A\u914D\u7F6E HiMarket

#### 2.1 \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6

\u7F16\u8F91 \`himarket-bootstrap/src/main/resources/application.yml\`\uFF1A

\`\`\`yaml
sls:
  # SLS \u670D\u52A1\u7AEF\u70B9\uFF08\u5FC5\u586B\uFF09
  # \u683C\u5F0F\uFF1A<region-id>.log.aliyuncs.com
  # \u4F8B\u5982\uFF1Acn-hangzhou.log.aliyuncs.com\u3001cn-beijing.log.aliyuncs.com
  endpoint: \${SLS_ENDPOINT:}
  
  # \u8BA4\u8BC1\u65B9\u5F0F\uFF1AAK_SK
  auth-type: \${SLS_AUTH_TYPE:AK_SK}
  
  # AK/SK \u8BA4\u8BC1\u65B9\u5F0F\u7684\u5BC6\u94A5
  access-key-id: \${SLS_ACCESS_KEY_ID:}
  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}
  
  # \u9ED8\u8BA4 Project \u540D\u79F0
  default-project: \${SLS_DEFAULT_PROJECT:apigateway-csb-cop}
  
  # \u9ED8\u8BA4 Logstore \u540D\u79F0
  default-logstore: \${SLS_DEFAULT_LOGSTORE:apig-access-log}
  
  # AliyunLogConfig CR \u914D\u7F6E\uFF08K8s \u73AF\u5883\u4F7F\u7528\uFF09
  aliyun-log-config:
    # CR \u6240\u5728\u7684 namespace
    namespace: \${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}
    # CR \u7684\u540D\u79F0
    cr-name: \${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}
\`\`\`

#### 2.2 \u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\uFF08\u63A8\u8350\uFF09

\u4E3A\u4E86\u5B89\u5168\u6027\uFF0C\u5EFA\u8BAE\u901A\u8FC7\u73AF\u5883\u53D8\u91CF\u4F20\u9012\u654F\u611F\u4FE1\u606F\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u5199\u5165\u914D\u7F6E\u6587\u4EF6\uFF1A

**Linux/macOS\uFF1A**
\`\`\`bash
export SLS_ENDPOINT="cn-hangzhou.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="your-access-key-id"
export SLS_ACCESS_KEY_SECRET="your-access-key-secret"
export SLS_DEFAULT_PROJECT="apigateway-csb-cop"
export SLS_DEFAULT_LOGSTORE="apig-access-log"
\`\`\`

**Windows\uFF1A**
\`\`\`cmd
set SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
set SLS_AUTH_TYPE=AK_SK
set SLS_ACCESS_KEY_ID=your-access-key-id
set SLS_ACCESS_KEY_SECRET=your-access-key-secret
set SLS_DEFAULT_PROJECT=apigateway-csb-cop
set SLS_DEFAULT_LOGSTORE=apig-access-log
\`\`\`

**Docker \u90E8\u7F72\uFF1A**

\u7F16\u8F91 \`deploy/docker/docker-compose.yml\`\uFF1A

\`\`\`yaml
services:
  himarket-server:
    environment:
      - SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
      - SLS_AUTH_TYPE=AK_SK
      - SLS_ACCESS_KEY_ID=your-access-key-id
      - SLS_ACCESS_KEY_SECRET=your-access-key-secret
      - SLS_DEFAULT_PROJECT=apigateway-csb-cop
      - SLS_DEFAULT_LOGSTORE=apig-access-log
\`\`\`

**Kubernetes \u90E8\u7F72\uFF1A**

\u7F16\u8F91 \`deploy/helm/values.yaml\`\uFF1A

\`\`\`yaml
sls:
  endpoint: "cn-hangzhou.log.aliyuncs.com"
  authType: "AK_SK"
  accessKeyId: "your-access-key-id"
  accessKeySecret: "your-access-key-secret"
  defaultProject: "apigateway-csb-cop"
  defaultLogstore: "apig-access-log"
\`\`\`

### \u6B65\u9AA4 3\uFF1A\u542F\u52A8\u5E76\u9A8C\u8BC1

#### 3.1 \u542F\u52A8 HiMarket

\`\`\`bash
# \u5F00\u53D1\u73AF\u5883
mvn clean install
cd himarket-bootstrap
mvn spring-boot:run

# \u751F\u4EA7\u73AF\u5883
java -jar himarket-bootstrap/target/himarket-bootstrap.jar
\`\`\`

#### 3.2 \u68C0\u67E5\u914D\u7F6E\u72B6\u6001

\u542F\u52A8\u540E\u67E5\u770B\u65E5\u5FD7\uFF0C\u786E\u8BA4 SLS \u914D\u7F6E\u52A0\u8F7D\u6210\u529F\uFF1A

\`\`\`
INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com
INFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK
INFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop
INFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log
\`\`\`

## Higress \u63D2\u4EF6\u914D\u7F6E

### Model \u5927\u76D8

\`ai-statistics\` \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
  - config:
      attributes:
      - apply_to_log: true
        default_value: unknown
        key: consumer
        value: x-mse-consumer
        value_source: request_header
      - apply_to_log: true
        key: fallback_from
        value: x-higress-fallback-from
        value_source: request_header
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: question
        trace_span_key: gen_ai.input.messages
        value: messages.@reverse.0.content
        value_source: request_body
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: answer
        rule: append
        trace_span_key: gen_ai.input.messages
        value: choices.0.delta.content
        value_source: response_streaming_body
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: answer
        trace_span_key: gen_ai.input.messages
        value: choices.0.message.content
        value_source: response_body
    configDisable: false
    ingress:
    - ai-route-higress-qwen-max.internal
\`\`\`

### MCP \u5927\u76D8

\`ai-statistics\` \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
  - config:
      attributes:
      - apply_to_log: true
        key: jsonrpc_version
        value: x-envoy-jsonrpc-version
        value_source: request_header
        trace_span_key: network.protocol.version
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_id
        value: x-envoy-jsonrpc-id
        value_source: request_header
        trace_span_key: rpc.jsonrpc.request_id
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_method
        value: x-envoy-jsonrpc-method
        value_source: request_header
        trace_span_key: mcp.method.name
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_params
        value: x-envoy-jsonrpc-params
        value_source: request_header
        trace_span_key: mcp.arguments
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_result
        value: x-envoy-jsonrpc-result
        value_source: response_header
      - apply_to_log: true
        apply_to_span: true
        attribute_key: tool.name
        key: mcp_tool_name
        value: x-envoy-mcp-tool-name
        value_source: request_header
        trace_span_key: mcp.tool.name
        apply_to_span: true
      - apply_to_log: true
        apply_to_span: true
        attribute_key: tool.parameters
        key: mcp_tool_arguments
        value: x-envoy-mcp-tool-arguments
        value_source: request_header
      - apply_to_log: true
        key: mcp_tool_response
        value: x-envoy-mcp-tool-response
        value_source: response_header
      - apply_to_log: true
        key: mcp_tool_error
        value: x-envoy-mcp-tool-error
        value_source: response_header
    configDisable: false
    ingress:
    - mcp-server-travel.internal
\`\`\`

\`pre-request\` \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  annotations:
  name: pre-request.internal
  namespace: himarket-system
spec:
  imagePullPolicy: Always
  matchRules:
  - config:
      stage: request
    configDisable: false
    ingress:
    - mcp-server-travel.internal
  phase: AUTHN
  priority: 1000
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0
\`\`\`

\`pre-response\` \u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  annotations:
  name: pre-response.internal
  namespace: himarket-system
spec:
  imagePullPolicy: Always
  matchRules:
  - config:
      stage: response
    configDisable: false
    ingress:
    - mcp-server-travel.internal
  phase: UNSPECIFIED_PHASE
  priority: 1000
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0
\`\`\`

\u63D2\u4EF6\u4F18\u5148\u7EA7\u8C03\u6574\uFF1A

\`\`\`yaml
pre-request(json-converter):
  phase: AUTHN
  priority: 1000
  
key-auth:
  phase: AUTHN
  priority: 310

ai-statistics:
  phase: AUTHN
  priority: 100

pre-response(json-converter):
  phase: UNSPECIFIED_PHASE
  priority: 1000

mcp-server:
  phase: UNSPECIFIED_PHASE
  priority: 999
  
ai-security-guard:
  phase: UNSPECIFIED_PHASE
  priority: 850
\`\`\`

## \u9884\u8BBE\u573A\u666F\u8BF4\u660E

HiMarket \u5185\u7F6E\u4E86\u4E30\u5BCC\u7684\u9884\u8BBE\u67E5\u8BE2\u573A\u666F\uFF0C\u6DB5\u76D6\u6A21\u578B\u5927\u76D8\u3001MCP \u5927\u76D8\u7B49\uFF1A

### \u5361\u7247\u7C7B\uFF08CARD\uFF09

| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E | \u9002\u7528\u5927\u76D8 |
||||
| \`pv\` | \u603B\u8BF7\u6C42\u6B21\u6570 | \u6A21\u578B\u3001MCP |
| \`uv\` | \u72EC\u7ACB\u8C03\u7528\u8005\u6570\u91CF | \u6A21\u578B\u3001MCP |
| \`fallback_count\` | Fallback \u8BF7\u6C42\u6570 | \u6A21\u578B |
| \`bytes_received\` | \u7F51\u5173\u5165\u6D41\u91CF\uFF08MB\uFF09 | MCP |
| \`bytes_sent\` | \u7F51\u5173\u51FA\u6D41\u91CF\uFF08MB\uFF09 | MCP |
| \`input_token_total\` | \u8F93\u5165 Token \u603B\u6570 | \u6A21\u578B |
| \`output_token_total\` | \u8F93\u51FA Token \u603B\u6570 | \u6A21\u578B |
| \`token_total\` | Token \u603B\u6570 | \u6A21\u578B |

### \u7EBF\u56FE\u7C7B\uFF08LINE\uFF09

| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E | \u9002\u7528\u5927\u76D8 |
||||
| \`qps_stream\` | \u6D41\u5F0F QPS | \u6A21\u578B |
| \`qps_normal\` | \u975E\u6D41\u5F0F QPS | \u6A21\u578B |
| \`qps_total\` | \u603B\u4F53 QPS | \u6A21\u578B |
| \`success_rate\` | \u8BF7\u6C42\u6210\u529F\u7387 | \u6A21\u578B\u3001MCP |
| \`token_per_sec_input\` | \u8F93\u5165 Token/s | \u6A21\u578B |
| \`token_per_sec_output\` | \u8F93\u51FA Token/s | \u6A21\u578B |
| \`token_per_sec_total\` | \u603B Token/s | \u6A21\u578B |
| \`rt_avg_total\` | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF08\u6574\u4F53\uFF09 | \u6A21\u578B |
| \`rt_avg_stream\` | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF08\u6D41\u5F0F\uFF09 | \u6A21\u578B |
| \`rt_avg_normal\` | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4\uFF08\u975E\u6D41\u5F0F\uFF09 | \u6A21\u578B |
| \`rt_first_token\` | \u9996\u5305\u54CD\u5E94\u65F6\u95F4 | \u6A21\u578B |
| \`cache_hit/miss/skip\` | \u7F13\u5B58\u547D\u4E2D/\u672A\u547D\u4E2D/\u8DF3\u8FC7 | \u6A21\u578B |
| \`ratelimited_per_sec\` | \u9650\u6D41\u8BF7\u6C42\u6570/s | \u6A21\u578B |
| \`qps_by_status\` | \u6309\u72B6\u6001\u7801\u5206\u7EC4\u7684 QPS | MCP |
| \`qps_total_simple\` | \u603B QPS | MCP |
| \`rt_avg\` | \u5E73\u5747\u54CD\u5E94\u65F6\u95F4 | MCP |
| \`rt_p99/p95/p90/p50\` | P99/P95/P90/P50 \u54CD\u5E94\u65F6\u95F4 | MCP |

### \u8868\u683C\u7C7B\uFF08TABLE\uFF09

| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E | \u9002\u7528\u5927\u76D8 |
||||
| \`model_token_table\` | \u6A21\u578B Token \u4F7F\u7528\u7EDF\u8BA1 | \u6A21\u578B |
| \`consumer_token_table\` | \u6D88\u8D39\u8005 Token \u4F7F\u7528\u7EDF\u8BA1 | \u6A21\u578B |
| \`service_token_table\` | \u670D\u52A1 Token \u4F7F\u7528\u7EDF\u8BA1 | \u6A21\u578B |
| \`error_requests_table\` | \u9519\u8BEF\u8BF7\u6C42\u7EDF\u8BA1 | \u6A21\u578B |
| \`ratelimited_consumer_table\` | \u9650\u6D41\u6D88\u8D39\u8005\u7EDF\u8BA1 | \u6A21\u578B |
| \`risk_label_table\` | \u98CE\u9669\u7C7B\u578B\u7EDF\u8BA1 | \u6A21\u578B |
| \`risk_consumer_table\` | \u98CE\u9669\u6D88\u8D39\u8005\u7EDF\u8BA1 | \u6A21\u578B |
| \`method_distribution\` | Method \u5206\u5E03 | MCP |
| \`gateway_status_distribution\` | \u7F51\u5173\u72B6\u6001\u7801\u5206\u5E03 | MCP |
| \`backend_status_distribution\` | \u540E\u7AEF\u72B6\u6001\u7801\u5206\u5E03 | MCP |
| \`request_distribution\` | \u8BF7\u6C42\u5206\u5E03 | MCP |

### \u7B5B\u9009\u9009\u9879\u7C7B\uFF08TABLE\uFF09

| \u573A\u666F\u6807\u8BC6 | \u8BF4\u660E |
|||
| \`filter_service_options\` | \u5B9E\u4F8B\u5217\u8868 |
| \`filter_api_options\` | API \u5217\u8868 |
| \`filter_model_options\` | \u6A21\u578B\u5217\u8868 |
| \`filter_route_options\` | \u8DEF\u7531\u5217\u8868 |
| \`filter_consumer_options\` | \u6D88\u8D39\u8005\u5217\u8868 |
| \`filter_upstream_options\` | \u4E0A\u6E38\u670D\u52A1\u5217\u8868 |
| \`filter_mcp_tool_options\` | MCP \u5DE5\u5177\u540D\u79F0\u5217\u8868 |



## \u6545\u969C\u6392\u67E5

### \u95EE\u9898 1\uFF1A\u63A5\u53E3\u8FD4\u56DE\u7A7A\u6570\u636E

**\u539F\u56E0\u5206\u6790\uFF1A**
- SLS \u672A\u914D\u7F6E\uFF08\`endpoint\` \u4E3A\u7A7A\uFF09
- Project \u6216 Logstore \u4E0D\u5B58\u5728
- \u65F6\u95F4\u8303\u56F4\u5185\u65E0\u65E5\u5FD7\u6570\u636E
- \u8BA4\u8BC1\u4FE1\u606F\u9519\u8BEF

**\u89E3\u51B3\u65B9\u6CD5\uFF1A**
1. \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u6216\u73AF\u5883\u53D8\u91CF\u662F\u5426\u6B63\u786E\u8BBE\u7F6E
2. \u67E5\u770B\u5E94\u7528\u65E5\u5FD7\uFF0C\u786E\u8BA4 SLS \u914D\u7F6E\u52A0\u8F7D\u72B6\u6001
3. \u767B\u5F55 SLS \u63A7\u5236\u53F0\u786E\u8BA4 Project \u548C Logstore \u5B58\u5728
4. \u4F7F\u7528 SLS \u63A7\u5236\u53F0\u67E5\u8BE2\u9A8C\u8BC1\u6570\u636E\u662F\u5426\u5B58\u5728
5. \u9A8C\u8BC1 AccessKey \u6743\u9650\u662F\u5426\u5305\u542B SLS \u8BFB\u53D6\u6743\u9650

### \u95EE\u9898 2\uFF1A\u67E5\u8BE2\u8D85\u65F6

**\u539F\u56E0\u5206\u6790\uFF1A**
- \u65F6\u95F4\u8303\u56F4\u8FC7\u5927
- \u65E5\u5FD7\u91CF\u8FC7\u5927
- \u7D22\u5F15\u672A\u914D\u7F6E\u6216\u914D\u7F6E\u4E0D\u5F53

**\u89E3\u51B3\u65B9\u6CD5\uFF1A**
1. \u7F29\u5C0F\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4
2. \u5728 SLS \u63A7\u5236\u53F0\u4E3A Logstore \u914D\u7F6E\u7D22\u5F15
3. \u4F7F\u7528\u9884\u8BBE\u573A\u666F\u800C\u975E\u590D\u6742\u81EA\u5B9A\u4E49\u67E5\u8BE2
4. \u589E\u52A0 \`interval\` \u53C2\u6570\u51CF\u5C11\u6570\u636E\u70B9\u6570\u91CF

### \u95EE\u9898 3\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E0E\u9884\u671F\u4E0D\u7B26

**\u539F\u56E0\u5206\u6790\uFF1A**
- \u65E5\u5FD7\u5B57\u6BB5\u6620\u5C04\u4E0D\u5339\u914D
- \u7D22\u5F15\u914D\u7F6E\u4E0D\u6B63\u786E
- SQL \u8BED\u6CD5\u9519\u8BEF

**\u89E3\u51B3\u65B9\u6CD5\uFF1A**
1. \u786E\u8BA4\u65E5\u5FD7\u5B57\u6BB5\u540D\u79F0\u4E0E\u9884\u8BBE SQL \u4E00\u81F4
2. \u68C0\u67E5 JSON \u5B57\u6BB5\uFF08\u5982 \`ai_log\`\uFF09\u662F\u5426\u5F00\u542F JSON \u7D22\u5F15
3. \u67E5\u770B\u5E94\u7528\u65E5\u5FD7\u83B7\u53D6\u5B9E\u9645\u6267\u884C\u7684 SQL
4. \u5728 SLS \u63A7\u5236\u53F0\u624B\u52A8\u6267\u884C SQL \u9A8C\u8BC1

### \u95EE\u9898 4\uFF1A\u8BA4\u8BC1\u5931\u8D25

**\u9519\u8BEF\u65E5\u5FD7\uFF1A**
\`\`\`
ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client
LogException: AccessKeyId is required
\`\`\`

**\u89E3\u51B3\u65B9\u6CD5\uFF1A**
1. \u786E\u8BA4\u73AF\u5883\u53D8\u91CF\u5DF2\u6B63\u786E\u8BBE\u7F6E
2. \u786E\u8BA4 \`auth-type\` \u4E3A \`AK_SK\`
3. \u786E\u8BA4 AccessKey ID \u548C Secret \u65E0\u8BEF
4. \u786E\u8BA4 AccessKey \u672A\u88AB\u7981\u7528\u6216\u8FC7\u671F



## \u6700\u4F73\u5B9E\u8DF5

### 1. \u5B89\u5168\u6027

- **\u4E0D\u8981**\u5C06 AccessKey \u76F4\u63A5\u5199\u5165\u914D\u7F6E\u6587\u4EF6
- **\u4F7F\u7528**\u73AF\u5883\u53D8\u91CF\u6216 Kubernetes Secret \u7BA1\u7406\u654F\u611F\u4FE1\u606F
- **\u5B9A\u671F\u8F6E\u6362** AccessKey
- **\u9075\u5FAA\u6700\u5C0F\u6743\u9650\u539F\u5219**\uFF0C\u4EC5\u6388\u4E88 SLS \u8BFB\u53D6\u6743\u9650

### 2. \u6027\u80FD\u4F18\u5316

- **\u5408\u7406\u8BBE\u7F6E**\u67E5\u8BE2\u65F6\u95F4\u8303\u56F4\uFF0C\u907F\u514D\u4E00\u6B21\u67E5\u8BE2\u8D85\u8FC7 7 \u5929
- **\u914D\u7F6E\u7D22\u5F15**\u63D0\u5347\u67E5\u8BE2\u6027\u80FD
- **\u4F7F\u7528\u9884\u8BBE\u573A\u666F**\u800C\u975E\u590D\u6742\u81EA\u5B9A\u4E49\u67E5\u8BE2
- **\u589E\u5927 interval** \u51CF\u5C11\u65F6\u5E8F\u56FE\u6570\u636E\u70B9

### 3. \u6210\u672C\u63A7\u5236

- \u6309\u9700\u914D\u7F6E Logstore \u5B58\u50A8\u5468\u671F
- \u5408\u7406\u8BBE\u7F6E\u65E5\u5FD7\u91C7\u96C6\u89C4\u5219\uFF0C\u907F\u514D\u91C7\u96C6\u65E0\u7528\u65E5\u5FD7
- \u4F7F\u7528 SLS \u7684\u6570\u636E\u751F\u547D\u5468\u671F\u7BA1\u7406\u529F\u80FD

### 4. \u76D1\u63A7\u544A\u8B66

- \u5728 SLS \u63A7\u5236\u53F0\u914D\u7F6E\u67E5\u8BE2\u5F02\u5E38\u544A\u8B66
- \u76D1\u63A7 HiMarket \u5E94\u7528\u65E5\u5FD7\u4E2D\u7684 SLS \u76F8\u5173\u9519\u8BEF
- \u5B9A\u671F\u68C0\u67E5 SLS \u4F7F\u7528\u91CF\u548C\u8D39\u7528



## \u914D\u7F6E\u793A\u4F8B

### \u5F00\u53D1\u73AF\u5883\u5B8C\u6574\u914D\u7F6E

\`\`\`yaml
sls:
  endpoint: cn-hangzhou.log.aliyuncs.com
  auth-type: AK_SK
  access-key-id: LTAI5tXXXXXXXXXXXXXX
  access-key-secret: YourAccessKeySecretHere
  default-project: dev-apigateway
  default-logstore: dev-access-log
  aliyun-log-config:
    namespace: apigateway-system
    cr-name: apigateway-access-log
\`\`\`

### \u751F\u4EA7\u73AF\u5883\u914D\u7F6E\uFF08\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\uFF09

**application.yml\uFF1A**
\`\`\`yaml
sls:
  endpoint: \${SLS_ENDPOINT:}
  auth-type: \${SLS_AUTH_TYPE:AK_SK}
  access-key-id: \${SLS_ACCESS_KEY_ID:}
  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}
  default-project: \${SLS_DEFAULT_PROJECT:prod-apigateway}
  default-logstore: \${SLS_DEFAULT_LOGSTORE:prod-access-log}
\`\`\`

**\u73AF\u5883\u53D8\u91CF\uFF1A**
\`\`\`bash
export SLS_ENDPOINT="cn-beijing.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="LTAI5tProdXXXXXXXXXX"
export SLS_ACCESS_KEY_SECRET="ProdAccessKeySecretHere"
\`\`\`



## \u9644\u5F55

### A. SLS \u533A\u57DF Endpoint \u5217\u8868

| \u533A\u57DF | Endpoint |
||-|
| \u534E\u4E1C1\uFF08\u676D\u5DDE\uFF09 | cn-hangzhou.log.aliyuncs.com |
| \u534E\u4E1C2\uFF08\u4E0A\u6D77\uFF09 | cn-shanghai.log.aliyuncs.com |
| \u534E\u53171\uFF08\u9752\u5C9B\uFF09 | cn-qingdao.log.aliyuncs.com |
| \u534E\u53172\uFF08\u5317\u4EAC\uFF09 | cn-beijing.log.aliyuncs.com |
| \u534E\u53173\uFF08\u5F20\u5BB6\u53E3\uFF09 | cn-zhangjiakou.log.aliyuncs.com |
| \u534E\u53571\uFF08\u6DF1\u5733\uFF09 | cn-shenzhen.log.aliyuncs.com |
| \u897F\u53571\uFF08\u6210\u90FD\uFF09 | cn-chengdu.log.aliyuncs.com |

\u66F4\u591A\u533A\u57DF\u8BF7\u53C2\u8003\uFF1Ahttps://help.aliyun.com/document_detail/29008.html

### B. \u914D\u7F6E\u53C2\u6570\u5B8C\u6574\u5217\u8868

| \u53C2\u6570 | \u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u8BF4\u660E |
||||--||
| \`endpoint\` | String | \u662F | - | SLS \u670D\u52A1\u7AEF\u70B9 |
| \`auth-type\` | Enum | \u5426 | \`AK_SK\` | \u8BA4\u8BC1\u65B9\u5F0F\uFF1A\`AK_SK\` |
| \`access-key-id\` | String | \u6761\u4EF6 | - | AccessKey ID\uFF08auth-type=AK_SK \u65F6\u5FC5\u586B\uFF09 |
| \`access-key-secret\` | String | \u6761\u4EF6 | - | AccessKey Secret\uFF08auth-type=AK_SK \u65F6\u5FC5\u586B\uFF09 |
| \`default-project\` | String | \u662F | - | \u9ED8\u8BA4 Project \u540D\u79F0 |
| \`default-logstore\` | String | \u662F | - | \u9ED8\u8BA4 Logstore \u540D\u79F0 |
| \`aliyun-log-config.namespace\` | String | \u5426 | \`apigateway-system\` | AliyunLogConfig CR \u6240\u5728 namespace |
| \`aliyun-log-config.cr-name\` | String | \u5426 | \`apigateway-access-log\` | AliyunLogConfig CR \u540D\u79F0 |

## \u76F8\u5173\u94FE\u63A5

- [\u963F\u91CC\u4E91 SLS \u5B98\u65B9\u6587\u6863](https://help.aliyun.com/product/28958.html)
- [SLS SQL \u8BED\u6CD5\u53C2\u8003](https://help.aliyun.com/document_detail/63449.html)
`},l=function(){return s},t=function(){return[{depth:2,slug:"\u7B80\u4ECB",text:"\u7B80\u4ECB"},{depth:2,slug:"\u529F\u80FD\u6982\u89C8",text:"\u529F\u80FD\u6982\u89C8"},{depth:2,slug:"\u914D\u7F6E\u6B65\u9AA4",text:"\u914D\u7F6E\u6B65\u9AA4"},{depth:3,slug:"\u6B65\u9AA4-1\u51C6\u5907-sls-\u8D44\u6E90",text:"\u6B65\u9AA4 1\uFF1A\u51C6\u5907 SLS \u8D44\u6E90"},{depth:4,slug:"11-\u521B\u5EFA-project-\u548C-logstore",text:"1.1 \u521B\u5EFA Project \u548C Logstore"},{depth:4,slug:"12-\u914D\u7F6E\u65E5\u5FD7\u91C7\u96C6\u4EE5-docker-\u4E3A\u4F8B",text:"1.2 \u914D\u7F6E\u65E5\u5FD7\u91C7\u96C6\uFF08\u4EE5 Docker \u4E3A\u4F8B\uFF09"},{depth:4,slug:"13-\u914D\u7F6E\u7D22\u5F15",text:"1.3 \u914D\u7F6E\u7D22\u5F15"},{depth:3,slug:"\u6B65\u9AA4-2\u914D\u7F6E-himarket",text:"\u6B65\u9AA4 2\uFF1A\u914D\u7F6E HiMarket"},{depth:4,slug:"21-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",text:"2.1 \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"},{depth:4,slug:"22-\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u63A8\u8350",text:"2.2 \u4F7F\u7528\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\uFF08\u63A8\u8350\uFF09"},{depth:3,slug:"\u6B65\u9AA4-3\u542F\u52A8\u5E76\u9A8C\u8BC1",text:"\u6B65\u9AA4 3\uFF1A\u542F\u52A8\u5E76\u9A8C\u8BC1"},{depth:4,slug:"31-\u542F\u52A8-himarket",text:"3.1 \u542F\u52A8 HiMarket"},{depth:4,slug:"32-\u68C0\u67E5\u914D\u7F6E\u72B6\u6001",text:"3.2 \u68C0\u67E5\u914D\u7F6E\u72B6\u6001"},{depth:2,slug:"higress-\u63D2\u4EF6\u914D\u7F6E",text:"Higress \u63D2\u4EF6\u914D\u7F6E"},{depth:3,slug:"model-\u5927\u76D8",text:"Model \u5927\u76D8"},{depth:3,slug:"mcp-\u5927\u76D8",text:"MCP \u5927\u76D8"},{depth:2,slug:"\u9884\u8BBE\u573A\u666F\u8BF4\u660E",text:"\u9884\u8BBE\u573A\u666F\u8BF4\u660E"},{depth:3,slug:"\u5361\u7247\u7C7Bcard",text:"\u5361\u7247\u7C7B\uFF08CARD\uFF09"},{depth:3,slug:"\u7EBF\u56FE\u7C7Bline",text:"\u7EBF\u56FE\u7C7B\uFF08LINE\uFF09"},{depth:3,slug:"\u8868\u683C\u7C7Btable",text:"\u8868\u683C\u7C7B\uFF08TABLE\uFF09"},{depth:3,slug:"\u7B5B\u9009\u9009\u9879\u7C7Btable",text:"\u7B5B\u9009\u9009\u9879\u7C7B\uFF08TABLE\uFF09"},{depth:2,slug:"\u6545\u969C\u6392\u67E5",text:"\u6545\u969C\u6392\u67E5"},{depth:3,slug:"\u95EE\u9898-1\u63A5\u53E3\u8FD4\u56DE\u7A7A\u6570\u636E",text:"\u95EE\u9898 1\uFF1A\u63A5\u53E3\u8FD4\u56DE\u7A7A\u6570\u636E"},{depth:3,slug:"\u95EE\u9898-2\u67E5\u8BE2\u8D85\u65F6",text:"\u95EE\u9898 2\uFF1A\u67E5\u8BE2\u8D85\u65F6"},{depth:3,slug:"\u95EE\u9898-3\u67E5\u8BE2\u7ED3\u679C\u4E0E\u9884\u671F\u4E0D\u7B26",text:"\u95EE\u9898 3\uFF1A\u67E5\u8BE2\u7ED3\u679C\u4E0E\u9884\u671F\u4E0D\u7B26"},{depth:3,slug:"\u95EE\u9898-4\u8BA4\u8BC1\u5931\u8D25",text:"\u95EE\u9898 4\uFF1A\u8BA4\u8BC1\u5931\u8D25"},{depth:2,slug:"\u6700\u4F73\u5B9E\u8DF5",text:"\u6700\u4F73\u5B9E\u8DF5"},{depth:3,slug:"1-\u5B89\u5168\u6027",text:"1. \u5B89\u5168\u6027"},{depth:3,slug:"2-\u6027\u80FD\u4F18\u5316",text:"2. \u6027\u80FD\u4F18\u5316"},{depth:3,slug:"3-\u6210\u672C\u63A7\u5236",text:"3. \u6210\u672C\u63A7\u5236"},{depth:3,slug:"4-\u76D1\u63A7\u544A\u8B66",text:"4. \u76D1\u63A7\u544A\u8B66"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5F00\u53D1\u73AF\u5883\u5B8C\u6574\u914D\u7F6E",text:"\u5F00\u53D1\u73AF\u5883\u5B8C\u6574\u914D\u7F6E"},{depth:3,slug:"\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\u4F7F\u7528\u73AF\u5883\u53D8\u91CF",text:"\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\uFF08\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\uFF09"},{depth:2,slug:"\u9644\u5F55",text:"\u9644\u5F55"},{depth:3,slug:"a-sls-\u533A\u57DF-endpoint-\u5217\u8868",text:"A. SLS \u533A\u57DF Endpoint \u5217\u8868"},{depth:3,slug:"b-\u914D\u7F6E\u53C2\u6570\u5B8C\u6574\u5217\u8868",text:"B. \u914D\u7F6E\u53C2\u6570\u5B8C\u6574\u5217\u8868"},{depth:2,slug:"\u76F8\u5173\u94FE\u63A5",text:"\u76F8\u5173\u94FE\u63A5"}]},e=d((g,S,f)=>{const{layout:m,...p}=n;return p.file=a,p.url=i,r`${E()}${v(s)}`})});export{e as Content,_ as __tla,l as compiledContent,e as default,a as file,n as frontmatter,t as getHeadings,c as rawContent,i as url};
