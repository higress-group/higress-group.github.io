import{c as p,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as c,m as u,u as _,__tla as v}from"./constant.CgKTHRkp.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,t,l,d,n,m=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u4ECB\u7ECD">\u4ECB\u7ECD</h2>
<p>\u63D0\u4F9BAI\u53EF\u89C2\u6D4B\u57FA\u7840\u80FD\u529B\uFF0C\u5305\u62EC metric, log, trace\uFF0C\u5176\u540E\u9700\u63A5ai-proxy\u63D2\u4EF6\uFF0C\u5982\u679C\u4E0D\u63A5ai-proxy\u63D2\u4EF6\u7684\u8BDD\uFF0C\u5219\u9700\u8981\u7528\u6237\u8FDB\u884C\u76F8\u5E94\u914D\u7F6E\u624D\u53EF\u751F\u6548\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">200</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>
<p>\u63D2\u4EF6\u9ED8\u8BA4\u8BF7\u6C42\u7B26\u5408openai\u534F\u8BAE\u683C\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u57FA\u7840\u53EF\u89C2\u6D4B\u503C\uFF0C\u7528\u6237\u65E0\u9700\u7279\u6B8A\u914D\u7F6E\uFF1A</p>
<ul>
<li>metric\uFF1A\u63D0\u4F9B\u4E86\u8F93\u5165token\u3001\u8F93\u51FAtoken\u3001\u9996\u4E2Atoken\u7684rt\uFF08\u6D41\u5F0F\u8BF7\u6C42\uFF09\u3001\u8BF7\u6C42\u603Brt\u7B49\u6307\u6807\uFF0C\u652F\u6301\u5728\u7F51\u5173\u3001\u8DEF\u7531\u3001\u670D\u52A1\u3001\u6A21\u578B\u56DB\u4E2A\u7EF4\u5EA6\u4E0A\u8FDB\u884C\u89C2\u6D4B</li>
<li>log\uFF1A\u63D0\u4F9B\u4E86 input_token, output_token, model, llm_service_duration, llm_first_token_duration \u7B49\u5B57\u6BB5</li>
</ul>
<p>\u7528\u6237\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u7684\u65B9\u5F0F\u5BF9\u53EF\u89C2\u6D4B\u7684\u503C\u8FDB\u884C\u6269\u5C55\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">attributes</code></td><td>[]Attribute</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u6237\u5E0C\u671B\u8BB0\u5F55\u5728log/span\u4E2D\u7684\u4FE1\u606F</td></tr></tbody></table>
<p>Attribute \u914D\u7F6E\u8BF4\u660E:</p>






















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">key</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>attrribute \u540D\u79F0</td></tr><tr><td><code dir="auto">value_source</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>attrribute \u53D6\u503C\u6765\u6E90\uFF0C\u53EF\u9009\u503C\u4E3A <code dir="auto">fixed_value</code>, <code dir="auto">request_header</code>, <code dir="auto">request_body</code>, <code dir="auto">response_header</code>, <code dir="auto">response_body</code>, <code dir="auto">response_streaming_body</code></td></tr><tr><td><code dir="auto">value</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>attrribute \u53D6\u503C key value/path</td></tr><tr><td><code dir="auto">rule</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u4ECE\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6 attrribute \u7684\u89C4\u5219\uFF0C\u53EF\u9009\u503C\u4E3A <code dir="auto">first</code>, <code dir="auto">replace</code>, <code dir="auto">append</code></td></tr><tr><td><code dir="auto">apply_to_log</code></td><td>bool</td><td>\u975E\u5FC5\u586B</td><td>false</td><td>\u662F\u5426\u5C06\u63D0\u53D6\u7684\u4FE1\u606F\u8BB0\u5F55\u5728\u65E5\u5FD7\u4E2D</td></tr><tr><td><code dir="auto">apply_to_span</code></td><td>bool</td><td>\u975E\u5FC5\u586B</td><td>false</td><td>\u662F\u5426\u5C06\u63D0\u53D6\u7684\u4FE1\u606F\u8BB0\u5F55\u5728\u94FE\u8DEF\u8FFD\u8E2Aspan\u4E2D</td></tr></tbody></table>
<p><code dir="auto">value_source</code> \u7684\u5404\u79CD\u53D6\u503C\u542B\u4E49\u5982\u4E0B\uFF1A</p>
<ul>
<li><code dir="auto">fixed_value</code>\uFF1A\u56FA\u5B9A\u503C</li>
<li><code dir="auto">request_header</code> \uFF1A attrribute \u503C\u901A\u8FC7 http \u8BF7\u6C42\u5934\u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u4E3A header key</li>
<li><code dir="auto">request_body</code> \uFF1Aattrribute \u503C\u901A\u8FC7\u8BF7\u6C42 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath</li>
<li><code dir="auto">response_header</code> \uFF1Aattrribute \u503C\u901A\u8FC7 http \u54CD\u5E94\u5934\u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u4E3Aheader key</li>
<li><code dir="auto">response_body</code> \uFF1Aattrribute \u503C\u901A\u8FC7\u54CD\u5E94 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath</li>
<li><code dir="auto">response_streaming_body</code> \uFF1Aattrribute \u503C\u901A\u8FC7\u6D41\u5F0F\u54CD\u5E94 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath</li>
</ul>
<p>\u5F53 <code dir="auto">value_source</code> \u4E3A <code dir="auto">response_streaming_body</code> \u65F6\uFF0C\u5E94\u5F53\u914D\u7F6E <code dir="auto">rule</code>\uFF0C\u7528\u4E8E\u6307\u5B9A\u5982\u4F55\u4ECE\u6D41\u5F0Fbody\u4E2D\u83B7\u53D6\u6307\u5B9A\u503C\uFF0C\u53D6\u503C\u542B\u4E49\u5982\u4E0B\uFF1A</p>
<ul>
<li><code dir="auto">first</code>\uFF1A\u591A\u4E2Achunk\u4E2D\u53D6\u7B2C\u4E00\u4E2A\u6709\u6548chunk\u7684\u503C</li>
<li><code dir="auto">replace</code>\uFF1A\u591A\u4E2Achunk\u4E2D\u53D6\u6700\u540E\u4E00\u4E2A\u6709\u6548chunk\u7684\u503C</li>
<li><code dir="auto">append</code>\uFF1A\u62FC\u63A5\u591A\u4E2A\u6709\u6548chunk\u4E2D\u7684\u503C\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u56DE\u7B54\u5185\u5BB9</li>
</ul>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<p>\u5982\u679C\u5E0C\u671B\u5728\u7F51\u5173\u8BBF\u95EE\u65E5\u5FD7\u4E2D\u8BB0\u5F55ai-statistic\u76F8\u5173\u7684\u7EDF\u8BA1\u503C\uFF0C\u9700\u8981\u4FEE\u6539log_format\uFF0C\u5728\u539Flog_format\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5B57\u6BB5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">'{"ai_log":"%FILTER_STATE(wasm.ai_log:PLAIN)%"}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x27;{&#x22;ai_log&#x22;:&#x22;%FILTER_STATE(wasm.ai_log:PLAIN)%&#x22;}&#x27;"><div></div></button></div></figure></div>
<h3 id="\u7A7A\u914D\u7F6E">\u7A7A\u914D\u7F6E</h3>
<h4 id="\u76D1\u63A7">\u76D1\u63A7</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># counter \u7C7B\u578B\uFF0C\u8F93\u5165 token \u6570\u91CF\u7684\u7D2F\u52A0\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_input_token{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 24</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># counter \u7C7B\u578B\uFF0C\u8F93\u51FA token \u6570\u91CF\u7684\u7D2F\u52A0\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_output_token{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 507</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6D88\u8017\u603B\u65F6\u95F4\u7684\u7D2F\u52A0\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_llm_service_duration{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 6470</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_llm_duration_count{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 2</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u5EF6\u65F6\u7684\u7D2F\u52A0\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_llm_first_token_duration{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 340</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_llm_stream_duration_count{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# counter \u7C7B\u578B\uFF0C\u8F93\u5165 token \u6570\u91CF\u7684\u7D2F\u52A0\u503C\x7Froute_upstream_model_consumer_metric_input_token{ai_route=&#x22;ai-route-aliyun.internal&#x22;,ai_cluster=&#x22;outbound|443||llm-aliyun.internal.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;,ai_consumer=&#x22;none&#x22;} 24\x7F\x7F# counter \u7C7B\u578B\uFF0C\u8F93\u51FA token \u6570\u91CF\u7684\u7D2F\u52A0\u503C\x7Froute_upstream_model_consumer_metric_output_token{ai_route=&#x22;ai-route-aliyun.internal&#x22;,ai_cluster=&#x22;outbound|443||llm-aliyun.internal.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;,ai_consumer=&#x22;none&#x22;} 507\x7F\x7F# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6D88\u8017\u603B\u65F6\u95F4\u7684\u7D2F\u52A0\u503C\x7Froute_upstream_model_consumer_metric_llm_service_duration{ai_route=&#x22;ai-route-aliyun.internal&#x22;,ai_cluster=&#x22;outbound|443||llm-aliyun.internal.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;,ai_consumer=&#x22;none&#x22;} 6470\x7F\x7F# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C\x7Froute_upstream_model_consumer_metric_llm_duration_count{ai_route=&#x22;ai-route-aliyun.internal&#x22;,ai_cluster=&#x22;outbound|443||llm-aliyun.internal.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;,ai_consumer=&#x22;none&#x22;} 2\x7F\x7F# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u5EF6\u65F6\u7684\u7D2F\u52A0\u503C\x7Froute_upstream_model_consumer_metric_llm_first_token_duration{ai_route=&#x22;ai-route-aliyun.internal&#x22;,ai_cluster=&#x22;outbound|443||llm-aliyun.internal.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;,ai_consumer=&#x22;none&#x22;} 340\x7F\x7F# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C\x7Froute_upstream_model_consumer_metric_llm_stream_duration_count{ai_route=&#x22;ai-route-aliyun.internal&#x22;,ai_cluster=&#x22;outbound|443||llm-aliyun.internal.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;,ai_consumer=&#x22;none&#x22;} 1"><div></div></button></div></figure></div>
<p>\u4EE5\u4E0B\u662F\u4F7F\u7528\u6307\u6807\u7684\u51E0\u4E2A\u793A\u4F8B\uFF1A</p>
<p>\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u7684\u5E73\u5747\u5EF6\u65F6\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">irate(route_upstream_model_consumer_metric_llm_first_token_duration[2m])</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">irate(route_upstream_model_consumer_metric_llm_stream_duration_count[2m])</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="irate(route_upstream_model_consumer_metric_llm_first_token_duration[2m])\x7F/\x7Firate(route_upstream_model_consumer_metric_llm_stream_duration_count[2m])"><div></div></button></div></figure></div>
<p>\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u5E73\u5747\u6D88\u8017\u7684\u603B\u65F6\u957F\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">irate(route_upstream_model_consumer_metric_llm_service_duration[2m])</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">irate(route_upstream_model_consumer_metric_llm_duration_count[2m])</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="irate(route_upstream_model_consumer_metric_llm_service_duration[2m])\x7F/\x7Firate(route_upstream_model_consumer_metric_llm_duration_count[2m])"><div></div></button></div></figure></div>
<h4 id="\u65E5\u5FD7">\u65E5\u5FD7</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"ai_log"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">model</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">qwen-turbo</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">input_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">10</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">output_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">69</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">llm_first_token_duration</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">309</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">llm_service_duration</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">1955</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;ai_log&#x22;:&#x22;{\\&#x22;model\\&#x22;:\\&#x22;qwen-turbo\\&#x22;,\\&#x22;input_token\\&#x22;:\\&#x22;10\\&#x22;,\\&#x22;output_token\\&#x22;:\\&#x22;69\\&#x22;,\\&#x22;llm_first_token_duration\\&#x22;:\\&#x22;309\\&#x22;,\\&#x22;llm_service_duration\\&#x22;:\\&#x22;1955\\&#x22;}&#x22;\x7F}"><div></div></button></div></figure></div>
<h4 id="\u94FE\u8DEF\u8FFD\u8E2A">\u94FE\u8DEF\u8FFD\u8E2A</h4>
<p>\u914D\u7F6E\u4E3A\u7A7A\u65F6\uFF0C\u4E0D\u4F1A\u5728span\u4E2D\u6DFB\u52A0\u989D\u5916\u7684attribute</p>
<h3 id="\u4ECE\u975Eopenai\u534F\u8BAE\u63D0\u53D6token\u4F7F\u7528\u4FE1\u606F">\u4ECE\u975Eopenai\u534F\u8BAE\u63D0\u53D6token\u4F7F\u7528\u4FE1\u606F</h3>
<p>\u5728ai-proxy\u4E2D\u8BBE\u7F6E\u534F\u8BAE\u4E3Aoriginal\u65F6\uFF0C\u4EE5\u767E\u70BC\u4E3A\u4F8B\uFF0C\u53EF\u4F5C\u5982\u4E0B\u914D\u7F6E\u6307\u5B9A\u5982\u4F55\u63D0\u53D6model, input_token, output_token</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">model</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">usage.models.0.model_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">input_token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">usage.models.0.input_tokens</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">output_token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">usage.models.0.output_tokens</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="attributes:\x7F  - key: model\x7F    value_source: response_body\x7F    value: usage.models.0.model_id\x7F    apply_to_log: true\x7F    apply_to_span: false\x7F  - key: input_token\x7F    value_source: response_body\x7F    value: usage.models.0.input_tokens\x7F    apply_to_log: true\x7F    apply_to_span: false\x7F  - key: output_token\x7F    value_source: response_body\x7F    value: usage.models.0.output_tokens\x7F    apply_to_log: true\x7F    apply_to_span: false"><div></div></button></div></figure></div>
<h4 id="\u76D1\u63A7-1">\u76D1\u63A7</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_input_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 343</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_output_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 153</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_llm_service_duration{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 3725</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_consumer_metric_llm_duration_count{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="route_upstream_model_consumer_metric_input_token{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 343\x7Froute_upstream_model_consumer_metric_output_token{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 153\x7Froute_upstream_model_consumer_metric_llm_service_duration{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 3725\x7Froute_upstream_model_consumer_metric_llm_duration_count{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 1"><div></div></button></div></figure></div>
<h4 id="\u65E5\u5FD7-1">\u65E5\u5FD7</h4>
<p>\u6B64\u914D\u7F6E\u4E0B\u65E5\u5FD7\u6548\u679C\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"ai_log"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">model</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">qwen-max</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">input_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">343</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">output_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">153</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">llm_service_duration</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">19110</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;ai_log&#x22;: &#x22;{\\&#x22;model\\&#x22;:\\&#x22;qwen-max\\&#x22;,\\&#x22;input_token\\&#x22;:\\&#x22;343\\&#x22;,\\&#x22;output_token\\&#x22;:\\&#x22;153\\&#x22;,\\&#x22;llm_service_duration\\&#x22;:\\&#x22;19110\\&#x22;}&#x22;\x7F}"><div></div></button></div></figure></div>
<h4 id="\u94FE\u8DEF\u8FFD\u8E2A-1">\u94FE\u8DEF\u8FFD\u8E2A</h4>
<p>\u94FE\u8DEF\u8FFD\u8E2A\u7684 span \u4E2D\u53EF\u4EE5\u770B\u5230 model, input_token, output_token \u4E09\u4E2A\u989D\u5916\u7684 attribute</p>
<h3 id="\u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer">\u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer</h3>
<p>\u4E3E\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="attributes:\x7F  - key: consumer # \u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer\x7F    value_source: request_header\x7F    value: x-mse-consumer\x7F    apply_to_log: true"><div></div></button></div></figure></div>
<h3 id="\u8BB0\u5F55\u95EE\u9898\u4E0E\u56DE\u7B54">\u8BB0\u5F55\u95EE\u9898\u4E0E\u56DE\u7B54</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">question</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8BB0\u5F55\u95EE\u9898</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">messages.@reverse.0.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># \u5728\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_streaming_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.delta.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rule</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># \u5728\u975E\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.message.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="attributes:\x7F  - key: question # \u8BB0\u5F55\u95EE\u9898\x7F    value_source: request_body\x7F    value: messages.@reverse.0.content\x7F    apply_to_log: true\x7F  - key: answer   # \u5728\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54\x7F    value_source: response_streaming_body\x7F    value: choices.0.delta.content\x7F    rule: append\x7F    apply_to_log: true\x7F  - key: answer   # \u5728\u975E\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54\x7F    value_source: response_body\x7F    value: choices.0.message.content\x7F    apply_to_log: true"><div></div></button></div></figure></div>
<h2 id="\u8FDB\u9636">\u8FDB\u9636</h2>
<p>\u914D\u5408\u963F\u91CC\u4E91SLS\u6570\u636E\u52A0\u5DE5\uFF0C\u53EF\u4EE5\u5C06ai\u76F8\u5173\u7684\u5B57\u6BB5\u8FDB\u884C\u63D0\u53D6\u52A0\u5DE5\uFF0C\u4F8B\u5982\u539F\u59CB\u65E5\u5FD7\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ai_log:{"question":"\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9","answer":"\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n\`\`\`python\\nresult = 2 ** 3\\nprint(result)\\n\`\`\`\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002","model":"qwen-max","input_token":"16","output_token":"76","llm_service_duration":"5913"}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ai_log:{&#x22;question&#x22;:&#x22;\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9&#x22;,&#x22;answer&#x22;:&#x22;\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 &#x60;**&#x60; \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n&#x60;&#x60;&#x60;python\\nresult = 2 ** 3\\nprint(result)\\n&#x60;&#x60;&#x60;\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002&#x22;,&#x22;model&#x22;:&#x22;qwen-max&#x22;,&#x22;input_token&#x22;:&#x22;16&#x22;,&#x22;output_token&#x22;:&#x22;76&#x22;,&#x22;llm_service_duration&#x22;:&#x22;5913&#x22;}"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u6570\u636E\u52A0\u5DE5\u811A\u672C\uFF0C\u53EF\u4EE5\u63D0\u53D6\u51FAquestion\u548Canswer\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">e_regex("ai_log", grok("%{EXTRACTJSON}"))</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">e_set("question", json_select(v("json"), "question", default="-"))</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">e_set("answer", json_select(v("json"), "answer", default="-"))</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="e_regex(&#x22;ai_log&#x22;, grok(&#x22;%{EXTRACTJSON}&#x22;))\x7Fe_set(&#x22;question&#x22;, json_select(v(&#x22;json&#x22;), &#x22;question&#x22;, default=&#x22;-&#x22;))\x7Fe_set(&#x22;answer&#x22;, json_select(v(&#x22;json&#x22;), &#x22;answer&#x22;, default=&#x22;-&#x22;))"><div></div></button></div></figure></div>
<p>\u63D0\u53D6\u540E\uFF0CSLS\u4E2D\u4F1A\u6DFB\u52A0question\u548Canswer\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ai_log:{"question":"\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9","answer":"\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n\`\`\`python\\nresult = 2 ** 3\\nprint(result)\\n\`\`\`\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002","model":"qwen-max","input_token":"16","output_token":"76","llm_service_duration":"5913"}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">question:\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">answer:\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">result = 2 ** 3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">print(result)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ai_log:{&#x22;question&#x22;:&#x22;\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9&#x22;,&#x22;answer&#x22;:&#x22;\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 &#x60;**&#x60; \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n&#x60;&#x60;&#x60;python\\nresult = 2 ** 3\\nprint(result)\\n&#x60;&#x60;&#x60;\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002&#x22;,&#x22;model&#x22;:&#x22;qwen-max&#x22;,&#x22;input_token&#x22;:&#x22;16&#x22;,&#x22;output_token&#x22;:&#x22;76&#x22;,&#x22;llm_service_duration&#x22;:&#x22;5913&#x22;}\x7F\x7Fquestion:\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9\x7F\x7Fanswer:\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 &#x60;**&#x60; \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\x7F\x7Fresult = 2 ** 3\x7Fprint(result)\x7F\x7F\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002"><div></div></button></div></figure></div>`,t={title:"AI\u53EF\u89C2\u6D4B",keywords:["higress","AI","observability"],description:"AI\u53EF\u89C2\u6D4B\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-o11y/ai-statistics.md",n=void 0,d=function(){return`
## \u4ECB\u7ECD
\u63D0\u4F9BAI\u53EF\u89C2\u6D4B\u57FA\u7840\u80FD\u529B\uFF0C\u5305\u62EC metric, log, trace\uFF0C\u5176\u540E\u9700\u63A5ai-proxy\u63D2\u4EF6\uFF0C\u5982\u679C\u4E0D\u63A5ai-proxy\u63D2\u4EF6\u7684\u8BDD\uFF0C\u5219\u9700\u8981\u7528\u6237\u8FDB\u884C\u76F8\u5E94\u914D\u7F6E\u624D\u53EF\u751F\u6548\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`200\`

## \u914D\u7F6E\u8BF4\u660E
\u63D2\u4EF6\u9ED8\u8BA4\u8BF7\u6C42\u7B26\u5408openai\u534F\u8BAE\u683C\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u57FA\u7840\u53EF\u89C2\u6D4B\u503C\uFF0C\u7528\u6237\u65E0\u9700\u7279\u6B8A\u914D\u7F6E\uFF1A

- metric\uFF1A\u63D0\u4F9B\u4E86\u8F93\u5165token\u3001\u8F93\u51FAtoken\u3001\u9996\u4E2Atoken\u7684rt\uFF08\u6D41\u5F0F\u8BF7\u6C42\uFF09\u3001\u8BF7\u6C42\u603Brt\u7B49\u6307\u6807\uFF0C\u652F\u6301\u5728\u7F51\u5173\u3001\u8DEF\u7531\u3001\u670D\u52A1\u3001\u6A21\u578B\u56DB\u4E2A\u7EF4\u5EA6\u4E0A\u8FDB\u884C\u89C2\u6D4B
- log\uFF1A\u63D0\u4F9B\u4E86 input_token, output_token, model, llm_service_duration, llm_first_token_duration \u7B49\u5B57\u6BB5

\u7528\u6237\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u7684\u65B9\u5F0F\u5BF9\u53EF\u89C2\u6D4B\u7684\u503C\u8FDB\u884C\u6269\u5C55\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B  | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                     |
|----------------|-------|------|-----|------------------------|
| \`attributes\` | []Attribute | \u975E\u5FC5\u586B  | -   | \u7528\u6237\u5E0C\u671B\u8BB0\u5F55\u5728log/span\u4E2D\u7684\u4FE1\u606F |

Attribute \u914D\u7F6E\u8BF4\u660E:

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B  | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                     |
|----------------|-------|-----|-----|------------------------|
| \`key\`         | string | \u5FC5\u586B  | -   | attrribute \u540D\u79F0           |
| \`value_source\` | string | \u5FC5\u586B  | -   | attrribute \u53D6\u503C\u6765\u6E90\uFF0C\u53EF\u9009\u503C\u4E3A \`fixed_value\`, \`request_header\`, \`request_body\`, \`response_header\`, \`response_body\`, \`response_streaming_body\`             |
| \`value\`      | string | \u5FC5\u586B  | -   | attrribute \u53D6\u503C key value/path |
| \`rule\`      | string | \u975E\u5FC5\u586B  | -   | \u4ECE\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6 attrribute \u7684\u89C4\u5219\uFF0C\u53EF\u9009\u503C\u4E3A \`first\`, \`replace\`, \`append\`|
| \`apply_to_log\`      | bool | \u975E\u5FC5\u586B  | false  | \u662F\u5426\u5C06\u63D0\u53D6\u7684\u4FE1\u606F\u8BB0\u5F55\u5728\u65E5\u5FD7\u4E2D |
| \`apply_to_span\`      | bool | \u975E\u5FC5\u586B  | false  | \u662F\u5426\u5C06\u63D0\u53D6\u7684\u4FE1\u606F\u8BB0\u5F55\u5728\u94FE\u8DEF\u8FFD\u8E2Aspan\u4E2D |

\`value_source\` \u7684\u5404\u79CD\u53D6\u503C\u542B\u4E49\u5982\u4E0B\uFF1A

- \`fixed_value\`\uFF1A\u56FA\u5B9A\u503C
- \`request_header\` \uFF1A attrribute \u503C\u901A\u8FC7 http \u8BF7\u6C42\u5934\u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u4E3A header key
- \`request_body\` \uFF1Aattrribute \u503C\u901A\u8FC7\u8BF7\u6C42 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath
- \`response_header\` \uFF1Aattrribute \u503C\u901A\u8FC7 http \u54CD\u5E94\u5934\u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u4E3Aheader key
- \`response_body\` \uFF1Aattrribute \u503C\u901A\u8FC7\u54CD\u5E94 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath
- \`response_streaming_body\` \uFF1Aattrribute \u503C\u901A\u8FC7\u6D41\u5F0F\u54CD\u5E94 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath


\u5F53 \`value_source\` \u4E3A \`response_streaming_body\` \u65F6\uFF0C\u5E94\u5F53\u914D\u7F6E \`rule\`\uFF0C\u7528\u4E8E\u6307\u5B9A\u5982\u4F55\u4ECE\u6D41\u5F0Fbody\u4E2D\u83B7\u53D6\u6307\u5B9A\u503C\uFF0C\u53D6\u503C\u542B\u4E49\u5982\u4E0B\uFF1A

- \`first\`\uFF1A\u591A\u4E2Achunk\u4E2D\u53D6\u7B2C\u4E00\u4E2A\u6709\u6548chunk\u7684\u503C
- \`replace\`\uFF1A\u591A\u4E2Achunk\u4E2D\u53D6\u6700\u540E\u4E00\u4E2A\u6709\u6548chunk\u7684\u503C
- \`append\`\uFF1A\u62FC\u63A5\u591A\u4E2A\u6709\u6548chunk\u4E2D\u7684\u503C\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u56DE\u7B54\u5185\u5BB9

## \u914D\u7F6E\u793A\u4F8B
\u5982\u679C\u5E0C\u671B\u5728\u7F51\u5173\u8BBF\u95EE\u65E5\u5FD7\u4E2D\u8BB0\u5F55ai-statistic\u76F8\u5173\u7684\u7EDF\u8BA1\u503C\uFF0C\u9700\u8981\u4FEE\u6539log_format\uFF0C\u5728\u539Flog_format\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5B57\u6BB5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
'{"ai_log":"%FILTER_STATE(wasm.ai_log:PLAIN)%"}'
\`\`\`

### \u7A7A\u914D\u7F6E
#### \u76D1\u63A7

\`\`\`
# counter \u7C7B\u578B\uFF0C\u8F93\u5165 token \u6570\u91CF\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_input_token{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 24

# counter \u7C7B\u578B\uFF0C\u8F93\u51FA token \u6570\u91CF\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_output_token{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 507

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6D88\u8017\u603B\u65F6\u95F4\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_service_duration{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 6470

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_duration_count{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 2

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u5EF6\u65F6\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_first_token_duration{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 340

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_stream_duration_count{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 1
\`\`\`

\u4EE5\u4E0B\u662F\u4F7F\u7528\u6307\u6807\u7684\u51E0\u4E2A\u793A\u4F8B\uFF1A

\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u7684\u5E73\u5747\u5EF6\u65F6\uFF1A

\`\`\`
irate(route_upstream_model_consumer_metric_llm_first_token_duration[2m])
/
irate(route_upstream_model_consumer_metric_llm_stream_duration_count[2m])
\`\`\`

\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u5E73\u5747\u6D88\u8017\u7684\u603B\u65F6\u957F\uFF1A

\`\`\`
irate(route_upstream_model_consumer_metric_llm_service_duration[2m])
/
irate(route_upstream_model_consumer_metric_llm_duration_count[2m])
\`\`\`

#### \u65E5\u5FD7
\`\`\`json
{
  "ai_log":"{\\"model\\":\\"qwen-turbo\\",\\"input_token\\":\\"10\\",\\"output_token\\":\\"69\\",\\"llm_first_token_duration\\":\\"309\\",\\"llm_service_duration\\":\\"1955\\"}"
}
\`\`\`

#### \u94FE\u8DEF\u8FFD\u8E2A
\u914D\u7F6E\u4E3A\u7A7A\u65F6\uFF0C\u4E0D\u4F1A\u5728span\u4E2D\u6DFB\u52A0\u989D\u5916\u7684attribute

### \u4ECE\u975Eopenai\u534F\u8BAE\u63D0\u53D6token\u4F7F\u7528\u4FE1\u606F
\u5728ai-proxy\u4E2D\u8BBE\u7F6E\u534F\u8BAE\u4E3Aoriginal\u65F6\uFF0C\u4EE5\u767E\u70BC\u4E3A\u4F8B\uFF0C\u53EF\u4F5C\u5982\u4E0B\u914D\u7F6E\u6307\u5B9A\u5982\u4F55\u63D0\u53D6model, input_token, output_token

\`\`\`yaml
attributes:
  - key: model
    value_source: response_body
    value: usage.models.0.model_id
    apply_to_log: true
    apply_to_span: false
  - key: input_token
    value_source: response_body
    value: usage.models.0.input_tokens
    apply_to_log: true
    apply_to_span: false
  - key: output_token
    value_source: response_body
    value: usage.models.0.output_tokens
    apply_to_log: true
    apply_to_span: false
\`\`\`
#### \u76D1\u63A7

\`\`\`
route_upstream_model_consumer_metric_input_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 343
route_upstream_model_consumer_metric_output_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 153
route_upstream_model_consumer_metric_llm_service_duration{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 3725
route_upstream_model_consumer_metric_llm_duration_count{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 1
\`\`\`

#### \u65E5\u5FD7
\u6B64\u914D\u7F6E\u4E0B\u65E5\u5FD7\u6548\u679C\u5982\u4E0B\uFF1A
\`\`\`json
{
  "ai_log": "{\\"model\\":\\"qwen-max\\",\\"input_token\\":\\"343\\",\\"output_token\\":\\"153\\",\\"llm_service_duration\\":\\"19110\\"}"  
}
\`\`\`

#### \u94FE\u8DEF\u8FFD\u8E2A
\u94FE\u8DEF\u8FFD\u8E2A\u7684 span \u4E2D\u53EF\u4EE5\u770B\u5230 model, input_token, output_token \u4E09\u4E2A\u989D\u5916\u7684 attribute

### \u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer
\u4E3E\u4F8B\u5982\u4E0B\uFF1A 
\`\`\`yaml
attributes:
  - key: consumer # \u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer
    value_source: request_header
    value: x-mse-consumer
    apply_to_log: true
\`\`\`

### \u8BB0\u5F55\u95EE\u9898\u4E0E\u56DE\u7B54
\`\`\`yaml
attributes:
  - key: question # \u8BB0\u5F55\u95EE\u9898
    value_source: request_body
    value: messages.@reverse.0.content
    apply_to_log: true
  - key: answer   # \u5728\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54
    value_source: response_streaming_body
    value: choices.0.delta.content
    rule: append
    apply_to_log: true
  - key: answer   # \u5728\u975E\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54
    value_source: response_body
    value: choices.0.message.content
    apply_to_log: true
\`\`\`

## \u8FDB\u9636
\u914D\u5408\u963F\u91CC\u4E91SLS\u6570\u636E\u52A0\u5DE5\uFF0C\u53EF\u4EE5\u5C06ai\u76F8\u5173\u7684\u5B57\u6BB5\u8FDB\u884C\u63D0\u53D6\u52A0\u5DE5\uFF0C\u4F8B\u5982\u539F\u59CB\u65E5\u5FD7\u4E3A\uFF1A

\`\`\`
ai_log:{"question":"\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9","answer":"\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n\`\`\`python\\nresult = 2 ** 3\\nprint(result)\\n\`\`\`\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002","model":"qwen-max","input_token":"16","output_token":"76","llm_service_duration":"5913"}
\`\`\`

\u4F7F\u7528\u5982\u4E0B\u6570\u636E\u52A0\u5DE5\u811A\u672C\uFF0C\u53EF\u4EE5\u63D0\u53D6\u51FAquestion\u548Canswer\uFF1A

\`\`\`
e_regex("ai_log", grok("%{EXTRACTJSON}"))
e_set("question", json_select(v("json"), "question", default="-"))
e_set("answer", json_select(v("json"), "answer", default="-"))
\`\`\`

\u63D0\u53D6\u540E\uFF0CSLS\u4E2D\u4F1A\u6DFB\u52A0question\u548Canswer\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`
ai_log:{"question":"\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9","answer":"\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n\`\`\`python\\nresult = 2 ** 3\\nprint(result)\\n\`\`\`\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002","model":"qwen-max","input_token":"16","output_token":"76","llm_service_duration":"5913"}

question:\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9

answer:\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A

result = 2 ** 3
print(result)

\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002

\`\`\`
`},o=function(){return e},l=function(){return[{depth:2,slug:"\u4ECB\u7ECD",text:"\u4ECB\u7ECD"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u7A7A\u914D\u7F6E",text:"\u7A7A\u914D\u7F6E"},{depth:4,slug:"\u76D1\u63A7",text:"\u76D1\u63A7"},{depth:4,slug:"\u65E5\u5FD7",text:"\u65E5\u5FD7"},{depth:4,slug:"\u94FE\u8DEF\u8FFD\u8E2A",text:"\u94FE\u8DEF\u8FFD\u8E2A"},{depth:3,slug:"\u4ECE\u975Eopenai\u534F\u8BAE\u63D0\u53D6token\u4F7F\u7528\u4FE1\u606F",text:"\u4ECE\u975Eopenai\u534F\u8BAE\u63D0\u53D6token\u4F7F\u7528\u4FE1\u606F"},{depth:4,slug:"\u76D1\u63A7-1",text:"\u76D1\u63A7"},{depth:4,slug:"\u65E5\u5FD7-1",text:"\u65E5\u5FD7"},{depth:4,slug:"\u94FE\u8DEF\u8FFD\u8E2A-1",text:"\u94FE\u8DEF\u8FFD\u8E2A"},{depth:3,slug:"\u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer",text:"\u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer"},{depth:3,slug:"\u8BB0\u5F55\u95EE\u9898\u4E0E\u56DE\u7B54",text:"\u8BB0\u5F55\u95EE\u9898\u4E0E\u56DE\u7B54"},{depth:2,slug:"\u8FDB\u9636",text:"\u8FDB\u9636"}]},s=p((x,E,F)=>{const{layout:b,...i}=t;return i.file=a,i.url=n,c`${u()}${_(e)}`})});export{s as Content,m as __tla,o as compiledContent,s as default,a as file,t as frontmatter,l as getHeadings,d as rawContent,n as url};
