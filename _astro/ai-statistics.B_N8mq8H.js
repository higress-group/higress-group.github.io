import{c as p,__tla as r}from"./astro-component.CXlaF79K.js";import{r as c,m as u,u as _,__tla as v}from"./constant.TIcaNJPW.js";import{__tla as y}from"./astro/assets-service.DQopRnBr.js";let s,i,t,a,l,d,n,m=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="introduction">Introduction</h2>
<p>Provides basic AI observability capabilities, including metric, log, and trace. The ai-proxy plug-in needs to be connected afterwards. If the ai-proxy plug-in is not connected, the user needs to configure it accordingly to take effect.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Phase: <code dir="auto">CUSTOM</code>
Plugin Priority: <code dir="auto">200</code></p>
<h2 id="configuration-instructions">Configuration instructions</h2>
<p>The default request of the plug-in conforms to the openai protocol format and provides the following basic observable values. Users do not need special configuration:</p>
<ul>
<li>metric: It provides indicators such as input token, output token, rt of the first token (streaming request), total request rt, etc., and supports observation in the four dimensions of gateway, routing, service, and model.</li>
<li>log: Provides input_token, output_token, model, llm_service_duration, llm_first_token_duration and other fields</li>
</ul>
<p>Users can also expand observable values \u200B\u200Bthrough configuration:</p>



















<table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">attributes</code></td><td>[]Attribute</td><td>required</td><td>-</td><td>Information that the user wants to record in log/span</td></tr></tbody></table>
<p>Attribute Configuration instructions:</p>






















































<table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">key</code></td><td>string</td><td>required</td><td>-</td><td>attrribute key</td></tr><tr><td><code dir="auto">value_source</code></td><td>string</td><td>required</td><td>-</td><td>attrribute value source, optional values \u200B\u200Bare <code dir="auto">fixed_value</code>, <code dir="auto">request_header</code>, <code dir="auto">request_body</code>, <code dir="auto">response_header</code>, <code dir="auto">response_body</code>, <code dir="auto">response_streaming_body</code></td></tr><tr><td><code dir="auto">value</code></td><td>string</td><td>required</td><td>-</td><td>how to get attrribute value</td></tr><tr><td><code dir="auto">rule</code></td><td>string</td><td>optional</td><td>-</td><td>Rule to extract attribute from streaming response, optional values \u200B\u200Bare <code dir="auto">first</code>, <code dir="auto">replace</code>, <code dir="auto">append</code></td></tr><tr><td><code dir="auto">apply_to_log</code></td><td>bool</td><td>optional</td><td>false</td><td>Whether to record the extracted information in the log</td></tr><tr><td><code dir="auto">apply_to_span</code></td><td>bool</td><td>optional</td><td>false</td><td>Whether to record the extracted information in the link tracking span</td></tr></tbody></table>
<p>The meanings of various values for <code dir="auto">value_source</code> \u200B\u200Bare as follows:</p>
<ul>
<li><code dir="auto">fixed_value</code>: fixed value</li>
<li><code dir="auto">requeset_header</code>: The attrribute is obtained through the http request header</li>
<li><code dir="auto">request_body</code>: The attrribute is obtained through the http request body</li>
<li><code dir="auto">response_header</code>: The attrribute is obtained through the http response header</li>
<li><code dir="auto">response_body</code>: The attrribute is obtained through the http response body</li>
<li><code dir="auto">response_streaming_body</code>: The attrribute is obtained through the http streaming response body</li>
</ul>
<p>When <code dir="auto">value_source</code> is <code dir="auto">response_streaming_body</code>, <code dir="auto">rule</code> should be configured to specify how to obtain the specified value from the streaming body. The meaning of the value is as follows:</p>
<ul>
<li><code dir="auto">first</code>: extract value from the first valid chunk</li>
<li><code dir="auto">replace</code>: extract value from the last valid chunk</li>
<li><code dir="auto">append</code>: join value pieces from all valid chunks</li>
</ul>
<h2 id="configuration-example">Configuration example</h2>
<p>If you want to record ai-statistic related statistical values \u200B\u200B\u200B\u200Bin the gateway access log, you need to modify log_format and add a new field based on the original log_format. The example is as follows:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">'{"ai_log":"%FILTER_STATE(wasm.ai_log:PLAIN)%"}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x27;{&#x22;ai_log&#x22;:&#x22;%FILTER_STATE(wasm.ai_log:PLAIN)%&#x22;}&#x27;"><div></div></button></div></figure></div>
<h3 id="empty">Empty</h3>
<h4 id="metric">Metric</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_input_token{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_llm_duration_count{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_llm_first_token_duration{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 309</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_llm_service_duration{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 1955</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_output_token{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 69</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="route_upstream_model_metric_input_token{ai_route=&#x22;llm&#x22;,ai_cluster=&#x22;outbound|443||qwen.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;} 10\x7Froute_upstream_model_metric_llm_duration_count{ai_route=&#x22;llm&#x22;,ai_cluster=&#x22;outbound|443||qwen.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;} 1\x7Froute_upstream_model_metric_llm_first_token_duration{ai_route=&#x22;llm&#x22;,ai_cluster=&#x22;outbound|443||qwen.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;} 309\x7Froute_upstream_model_metric_llm_service_duration{ai_route=&#x22;llm&#x22;,ai_cluster=&#x22;outbound|443||qwen.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;} 1955\x7Froute_upstream_model_metric_output_token{ai_route=&#x22;llm&#x22;,ai_cluster=&#x22;outbound|443||qwen.dns&#x22;,ai_model=&#x22;qwen-turbo&#x22;} 69"><div></div></button></div></figure></div>
<h4 id="log">Log</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"ai_log"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">model</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">qwen-turbo</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">input_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">10</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">output_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">69</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">llm_first_token_duration</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">309</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">llm_service_duration</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">1955</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;ai_log&#x22;:&#x22;{\\&#x22;model\\&#x22;:\\&#x22;qwen-turbo\\&#x22;,\\&#x22;input_token\\&#x22;:\\&#x22;10\\&#x22;,\\&#x22;output_token\\&#x22;:\\&#x22;69\\&#x22;,\\&#x22;llm_first_token_duration\\&#x22;:\\&#x22;309\\&#x22;,\\&#x22;llm_service_duration\\&#x22;:\\&#x22;1955\\&#x22;}&#x22;\x7F}"><div></div></button></div></figure></div>
<h4 id="trace">Trace</h4>
<p>When the configuration is empty, no additional attributes will be added to the span.</p>
<h3 id="extract-token-usage-information-from-non-openai-protocols">Extract token usage information from non-openai protocols</h3>
<p>When setting the protocol to original in ai-proxy, taking Alibaba Cloud Bailian as an example, you can make the following configuration to specify how to extract <code dir="auto">model</code>, <code dir="auto">input_token</code>, <code dir="auto">output_token</code></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">model</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">usage.models.0.model_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">input_token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">usage.models.0.input_tokens</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">output_token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">usage.models.0.output_tokens</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="attributes:\x7F  - key: model\x7F    value_source: response_body\x7F    value: usage.models.0.model_id\x7F    apply_to_log: true\x7F    apply_to_span: false\x7F  - key: input_token\x7F    value_source: response_body\x7F    value: usage.models.0.input_tokens\x7F    apply_to_log: true\x7F    apply_to_span: false\x7F  - key: output_token\x7F    value_source: response_body\x7F    value: usage.models.0.output_tokens\x7F    apply_to_log: true\x7F    apply_to_span: false"><div></div></button></div></figure></div>
<h4 id="metric-1">Metric</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_input_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 343</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_output_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 153</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_llm_service_duration{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 3725</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_metric_llm_duration_count{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="route_upstream_model_metric_input_token{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 343\x7Froute_upstream_model_metric_output_token{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 153\x7Froute_upstream_model_metric_llm_service_duration{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 3725\x7Froute_upstream_model_metric_llm_duration_count{ai_route=&#x22;bailian&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 1"><div></div></button></div></figure></div>
<h4 id="log-1">Log</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"ai_log"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">model</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">qwen-max</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">input_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">343</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">output_token</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">153</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">llm_service_duration</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">19110</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;ai_log&#x22;: &#x22;{\\&#x22;model\\&#x22;:\\&#x22;qwen-max\\&#x22;,\\&#x22;input_token\\&#x22;:\\&#x22;343\\&#x22;,\\&#x22;output_token\\&#x22;:\\&#x22;153\\&#x22;,\\&#x22;llm_service_duration\\&#x22;:\\&#x22;19110\\&#x22;}&#x22;\x7F}"><div></div></button></div></figure></div>
<h4 id="trace-1">Trace</h4>
<p>Three additional attributes <code dir="auto">model</code>, <code dir="auto">input_token</code>, and <code dir="auto">output_token</code> can be seen in the trace spans.</p>
<h3 id="cooperate-with-authentication-and-authentication-record-consumer">Cooperate with authentication and authentication record consumer</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="attributes:\x7F  - key: consumer\x7F    value_source: request_header\x7F    value: x-mse-consumer\x7F    apply_to_log: true"><div></div></button></div></figure></div>
<h3 id="record-questions-and-answers">Record questions and answers</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">question</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">messages.@reverse.0.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_streaming_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.delta.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rule</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.message.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="attributes:\x7F  - key: question\x7F    value_source: request_body\x7F    value: messages.@reverse.0.content\x7F    apply_to_log: true\x7F  - key: answer\x7F    value_source: response_streaming_body\x7F    value: choices.0.delta.content\x7F    rule: append\x7F    apply_to_log: true\x7F  - key: answer\x7F    value_source: response_body\x7F    value: choices.0.message.content\x7F    apply_to_log: true"><div></div></button></div></figure></div>`,a={title:"AI Statistics",keywords:["higress","AI","observability"],description:"AI Statistics plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-o11y/ai-statistics.md",n=void 0,d=function(){return`
## Introduction
Provides basic AI observability capabilities, including metric, log, and trace. The ai-proxy plug-in needs to be connected afterwards. If the ai-proxy plug-in is not connected, the user needs to configure it accordingly to take effect.

## Runtime Properties

Plugin Phase: \`CUSTOM\`
Plugin Priority: \`200\`

## Configuration instructions
The default request of the plug-in conforms to the openai protocol format and provides the following basic observable values. Users do not need special configuration:

- metric: It provides indicators such as input token, output token, rt of the first token (streaming request), total request rt, etc., and supports observation in the four dimensions of gateway, routing, service, and model.
- log: Provides input_token, output_token, model, llm_service_duration, llm_first_token_duration and other fields

Users can also expand observable values \u200B\u200Bthrough configuration:

| Name             | Type  | Required | Default | Description |
|----------------|-------|------|-----|------------------------|
| \`attributes\` | []Attribute | required  | -   | Information that the user wants to record in log/span |

Attribute Configuration instructions:

| Name             | Type  | Required | Default | Description |
|----------------|-------|-----|-----|------------------------|
| \`key\`         | string | required  | -   | attrribute key           |
| \`value_source\` | string | required  | -   | attrribute value source, optional values \u200B\u200Bare \`fixed_value\`, \`request_header\`, \`request_body\`, \`response_header\`, \`response_body\`, \`response_streaming_body\`             |
| \`value\`      | string | required  | -   | how to get attrribute value |
| \`rule\`      | string | optional  | -   | Rule to extract attribute from streaming response, optional values \u200B\u200Bare \`first\`, \`replace\`, \`append\`|
| \`apply_to_log\`      | bool | optional  | false  | Whether to record the extracted information in the log |
| \`apply_to_span\`      | bool | optional  | false  | Whether to record the extracted information in the link tracking span |

The meanings of various values for \`value_source\` \u200B\u200Bare as follows:

- \`fixed_value\`: fixed value
- \`requeset_header\`: The attrribute is obtained through the http request header
- \`request_body\`: The attrribute is obtained through the http request body
- \`response_header\`: The attrribute is obtained through the http response header
- \`response_body\`: The attrribute is obtained through the http response body
- \`response_streaming_body\`: The attrribute is obtained through the http streaming response body


When \`value_source\` is \`response_streaming_body\`, \`rule\` should be configured to specify how to obtain the specified value from the streaming body. The meaning of the value is as follows:

- \`first\`: extract value from the first valid chunk 
- \`replace\`: extract value from the last valid chunk 
- \`append\`: join value pieces from all valid chunks

## Configuration example
If you want to record ai-statistic related statistical values \u200B\u200B\u200B\u200Bin the gateway access log, you need to modify log_format and add a new field based on the original log_format. The example is as follows:

\`\`\`yaml
'{"ai_log":"%FILTER_STATE(wasm.ai_log:PLAIN)%"}'
\`\`\`

### Empty
#### Metric
\`\`\`
route_upstream_model_metric_input_token{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 10
route_upstream_model_metric_llm_duration_count{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 1
route_upstream_model_metric_llm_first_token_duration{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 309
route_upstream_model_metric_llm_service_duration{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 1955
route_upstream_model_metric_output_token{ai_route="llm",ai_cluster="outbound|443||qwen.dns",ai_model="qwen-turbo"} 69
\`\`\`

#### Log
\`\`\`json
{
  "ai_log":"{\\"model\\":\\"qwen-turbo\\",\\"input_token\\":\\"10\\",\\"output_token\\":\\"69\\",\\"llm_first_token_duration\\":\\"309\\",\\"llm_service_duration\\":\\"1955\\"}"
}
\`\`\`

#### Trace
When the configuration is empty, no additional attributes will be added to the span.

### Extract token usage information from non-openai protocols
When setting the protocol to original in ai-proxy, taking Alibaba Cloud Bailian as an example, you can make the following configuration to specify how to extract \`model\`, \`input_token\`, \`output_token\`

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
#### Metric
\`\`\`
route_upstream_model_metric_input_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 343
route_upstream_model_metric_output_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 153
route_upstream_model_metric_llm_service_duration{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 3725
route_upstream_model_metric_llm_duration_count{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 1
\`\`\`

#### Log
\`\`\`json
{
  "ai_log": "{\\"model\\":\\"qwen-max\\",\\"input_token\\":\\"343\\",\\"output_token\\":\\"153\\",\\"llm_service_duration\\":\\"19110\\"}"  
}
\`\`\`

#### Trace
Three additional attributes \`model\`, \`input_token\`, and \`output_token\` can be seen in the trace spans.

### Cooperate with authentication and authentication record consumer
\`\`\`yaml
attributes:
  - key: consumer
    value_source: request_header
    value: x-mse-consumer
    apply_to_log: true
\`\`\`

### Record questions and answers
\`\`\`yaml
attributes:
  - key: question 
    value_source: request_body
    value: messages.@reverse.0.content
    apply_to_log: true
  - key: answer
    value_source: response_streaming_body
    value: choices.0.delta.content
    rule: append
    apply_to_log: true
  - key: answer
    value_source: response_body
    value: choices.0.message.content
    apply_to_log: true
\`\`\``},i=function(){return e},l=function(){return[{depth:2,slug:"introduction",text:"Introduction"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-instructions",text:"Configuration instructions"},{depth:2,slug:"configuration-example",text:"Configuration example"},{depth:3,slug:"empty",text:"Empty"},{depth:4,slug:"metric",text:"Metric"},{depth:4,slug:"log",text:"Log"},{depth:4,slug:"trace",text:"Trace"},{depth:3,slug:"extract-token-usage-information-from-non-openai-protocols",text:"Extract token usage information from non-openai protocols"},{depth:4,slug:"metric-1",text:"Metric"},{depth:4,slug:"log-1",text:"Log"},{depth:4,slug:"trace-1",text:"Trace"},{depth:3,slug:"cooperate-with-authentication-and-authentication-record-consumer",text:"Cooperate with authentication and authentication record consumer"},{depth:3,slug:"record-questions-and-answers",text:"Record questions and answers"}]},s=p((E,h,f)=>{const{layout:g,...o}=a;return o.file=t,o.url=n,c`${u()}${_(e)}`})});export{s as Content,m as __tla,i as compiledContent,s as default,t as file,a as frontmatter,l as getHeadings,d as rawContent,n as url};
