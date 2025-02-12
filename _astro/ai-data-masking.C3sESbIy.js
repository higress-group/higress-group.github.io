import{c as p,__tla as r}from"./astro-component.CXlaF79K.js";import{r as c,m as u,u as y,__tla as v}from"./constant.KGRmul9V.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let s,d,t,a,o,l,n,E=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>Interception and replacement of sensitive words in requests/responses
<img src="https://img.alicdn.com/imgextra/i4/O1CN0156Wtko1T9JO0RiWow_!!6000000002339-0-tps-1314-638.jpg" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="data-handling-scope">Data Handling Scope</h3>
<ul>
<li>openai protocol: Request/response conversation content</li>
<li>jsonpath: Only process specified fields</li>
<li>raw: Entire request/response body</li>
</ul>
<h3 id="sensitive-word-interception">Sensitive Word Interception</h3>
<ul>
<li>Directly intercept sensitive words in the data handling scope and return preset error messages</li>
<li>Supports system\u2019s built-in sensitive word library and custom sensitive words</li>
</ul>
<h3 id="sensitive-word-replacement">Sensitive Word Replacement</h3>
<ul>
<li>Replace sensitive words in request data with masked strings before passing to back-end services. Ensures that sensitive data does not leave the domain</li>
<li>Some masked data can be restored after being returned by the back-end service</li>
<li>Custom rules support standard regular expressions and grok rules, and replacement strings support variable substitution</li>
</ul>
<h2 id="execution-properties">Execution Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code><br>
Plugin Execution Priority: <code dir="auto">991</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>































































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>deny_openai</td><td>bool</td><td>true</td><td>Intercept openai protocol</td></tr><tr><td>deny_jsonpath</td><td>string</td><td>[]</td><td>Intercept specified jsonpath</td></tr><tr><td>deny_raw</td><td>bool</td><td>false</td><td>Intercept raw body</td></tr><tr><td>system_deny</td><td>bool</td><td>true</td><td>Enable built-in interception rules</td></tr><tr><td>deny_code</td><td>int</td><td>200</td><td>HTTP status code when intercepted</td></tr><tr><td>deny_message</td><td>string</td><td>Sensitive words found in the question or answer have been blocked</td><td>AI returned message when intercepted</td></tr><tr><td>deny_raw_message</td><td>string</td><td>{\u201Cerrmsg\u201D:\u201CSensitive words found in the question or answer have been blocked\u201D}</td><td>Content returned when not openai intercepted</td></tr><tr><td>deny_content_type</td><td>string</td><td>application/json</td><td>Content type header returned when not openai intercepted</td></tr><tr><td>deny_words</td><td>array of string</td><td>[]</td><td>Custom sensitive word list</td></tr><tr><td>replace_roles</td><td>array</td><td>-</td><td>Custom sensitive word regex replacement</td></tr><tr><td>replace_roles.regex</td><td>string</td><td>-</td><td>Rule regex (built-in GROK rule)</td></tr><tr><td>replace_roles.type</td><td>[replace, hash]</td><td>-</td><td>Replacement type</td></tr><tr><td>replace_roles.restore</td><td>bool</td><td>false</td><td>Whether to restore</td></tr><tr><td>replace_roles.value</td><td>string</td><td>-</td><td>Replacement value (supports regex variables)</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">system_deny</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_openai</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_jsonpath</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"$.messages[*].content"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_raw</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_message</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Sensitive words found in the question or answer have been blocked"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_raw_message</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">errmsg</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">Sensitive words found in the question or answer have been blocked</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_content_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"application/json"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_words</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"Custom sensitive word 1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"Custom sensitive word 2"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">replace_roles</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{MOBILE}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"****"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Mobile number  13800138000 -> ****</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{EMAILLOCALPART}@%{HOSTNAME:domain}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restore</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"****@$domain"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Email  admin@gmail.com -> ****@gmail.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{IP}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restore</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"***.***.***.***"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># IP 192.168.0.1 -> ***.***.***.***</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{IDCARD}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"****"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># ID card number 110000000000000000 -> ****</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-[0-9a-zA-Z]*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restore</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hash"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># The hashed value is provided to the large model, and the hash value will be restored to the original value from the data returned by the large model</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="system_deny: true\x7Fdeny_openai: true\x7Fdeny_jsonpath:\x7F  - &#x22;$.messages[*].content&#x22;\x7Fdeny_raw: true\x7Fdeny_code: 200\x7Fdeny_message: &#x22;Sensitive words found in the question or answer have been blocked&#x22;\x7Fdeny_raw_message: &#x22;{\\&#x22;errmsg\\&#x22;:\\&#x22;Sensitive words found in the question or answer have been blocked\\&#x22;}&#x22;\x7Fdeny_content_type: &#x22;application/json&#x22;\x7Fdeny_words:\x7F  - &#x22;Custom sensitive word 1&#x22;\x7F  - &#x22;Custom sensitive word 2&#x22;\x7Freplace_roles:\x7F  - regex: &#x22;%{MOBILE}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    value: &#x22;****&#x22;\x7F    # Mobile number  13800138000 -> ****\x7F  - regex: &#x22;%{EMAILLOCALPART}@%{HOSTNAME:domain}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    restore: true\x7F    value: &#x22;****@$domain&#x22;\x7F    # Email  admin@gmail.com -> ****@gmail.com\x7F  - regex: &#x22;%{IP}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    restore: true\x7F    value: &#x22;***.***.***.***&#x22;\x7F    # IP 192.168.0.1 -> ***.***.***.***\x7F  - regex: &#x22;%{IDCARD}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    value: &#x22;****&#x22;\x7F    # ID card number 110000000000000000 -> ****\x7F  - regex: &#x22;sk-[0-9a-zA-Z]*&#x22;\x7F    restore: true\x7F    type: &#x22;hash&#x22;\x7F    # hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d\x7F    # The hashed value is provided to the large model, and the hash value will be restored to the original value from the data returned by the large model"><div></div></button></div></figure></div>
<h2 id="sensitive-word-replacement-example">Sensitive Word Replacement Example</h2>
<h3 id="user-request-content">User Request Content</h3>
<p>Please change <code dir="auto">curl http://172.20.5.14/api/openai/v1/chat/completions -H "Authorization: sk-12345" -H "Auth: test@gmail.com"</code> to POST method</p>
<h3 id="processed-request-large-model-content">Processed Request Large Model Content</h3>
<p><code dir="auto">curl http://***.***.***.***/api/openai/v1/chat/completions -H "Authorization: 48a7e98a91d93896d8dac522c5853948" -H "Auth: ****@gmail.com"</code> change to POST method</p>
<h3 id="large-model-returned-content">Large Model Returned Content</h3>
<p>You want to convert a <code dir="auto">curl</code> GET request to a POST request, and this request is sending data to a specific API. Below is the modified <code dir="auto">curl</code> command to send as POST:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: 48a7e98a91d93896d8dac522c5853948"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Auth: ****@gmail.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"key":"value"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#9ECBFF">http://</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">.</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">.</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">.</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">/api/openai/v1/chat/completions</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST \\\x7F     -H &#x22;Authorization: 48a7e98a91d93896d8dac522c5853948&#x22; \\\x7F     -H &#x22;Auth: ****@gmail.com&#x22; \\\x7F     -H &#x22;Content-Type: application/json&#x22; \\\x7F     -d &#x27;{&#x22;key&#x22;:&#x22;value&#x22;}&#x27; \\\x7F     http://***.***.***.***/api/openai/v1/chat/completions"><div></div></button></div></figure></div>
<p>Here are the following modifications made:</p>
<ul>
<li><code dir="auto">-X POST</code> sets the request method to POST.</li>
<li><code dir="auto">-H "Content-Type: application/json"</code> sets the <code dir="auto">Content-Type</code> in the request header to <code dir="auto">application/json</code>, which is typically used to inform the server that the data you are sending is in JSON format.</li>
<li><code dir="auto">-d '{"key":"value"}'</code> sets the data to be sent, where <code dir="auto">'{"key":"value"}'</code> is a simple example of a JSON object. You need to replace it with the actual data you want to send.</li>
</ul>
<p>Please note that you need to replace <code dir="auto">"key":"value"</code> with the actual data content you want to send. If your API accepts a different data structure or requires specific fields, please adjust this part according to your actual situation.</p>
<h3 id="processed-return-to-user-content">Processed Return to User Content</h3>
<p>You want to convert a <code dir="auto">curl</code> GET request to a POST request, and this request is sending data to a specific API. Below is the modified <code dir="auto">curl</code> command to send as POST:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: sk-12345"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Auth: test@gmail.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"key":"value"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#9ECBFF">http://172.20.5.14/api/openai/v1/chat/completions</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST \\\x7F     -H &#x22;Authorization: sk-12345&#x22; \\\x7F     -H &#x22;Auth: test@gmail.com&#x22; \\\x7F     -H &#x22;Content-Type: application/json&#x22; \\\x7F     -d &#x27;{&#x22;key&#x22;:&#x22;value&#x22;}&#x27; \\\x7F     http://172.20.5.14/api/openai/v1/chat/completions"><div></div></button></div></figure></div>
<p>Here are the following modifications made:</p>
<ul>
<li><code dir="auto">-X POST</code> sets the request method to POST.</li>
<li><code dir="auto">-H "Content-Type: application/json"</code> sets the <code dir="auto">Content-Type</code> in the request header to <code dir="auto">application/json</code>, which is typically used to inform the server that the data you are sending is in JSON format.</li>
<li><code dir="auto">-d '{"key":"value"}'</code> sets the data to be sent, where <code dir="auto">'{"key":"value"}'</code> is a simple example of a JSON object. You need to replace it with the actual data you want to send.</li>
</ul>
<p>Please note that you need to replace <code dir="auto">"key":"value"</code> with the actual data content you want to send. If your API accepts a different data structure or requires specific fields, please adjust this part according to your actual situation.</p>
<h2 id="related-notes">Related Notes</h2>
<ul>
<li>In streaming mode, if the masked words are split across multiple chunks, restoration may not be possible</li>
<li>In streaming mode, if sensitive words are split across multiple chunks, there may be cases where part of the sensitive word is returned to the user</li>
<li>Grok built-in rule list: <a href="https://help.aliyun.com/zh/sls/user-guide/grok-patterns" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://help.aliyun.com/zh/sls/user-guide/grok-patterns</a></li>
<li>Built-in sensitive word library data source: <a href="https://github.com/houbb/sensitive-word/tree/master/src/main/resources" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/houbb/sensitive-word/tree/master/src/main/resources</a></li>
</ul>`,a={title:"AI Data Masking",keywords:["higress","ai data masking"],description:"AI Data Masking Plugin Configuration Reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-consumer/ai-data-masking.md",n=void 0,l=function(){return`## Function Description
  Interception and replacement of sensitive words in requests/responses
![image](https://img.alicdn.com/imgextra/i4/O1CN0156Wtko1T9JO0RiWow_!!6000000002339-0-tps-1314-638.jpg)

### Data Handling Scope
  - openai protocol: Request/response conversation content
  - jsonpath: Only process specified fields
  - raw: Entire request/response body

### Sensitive Word Interception
  - Directly intercept sensitive words in the data handling scope and return preset error messages
  - Supports system's built-in sensitive word library and custom sensitive words

### Sensitive Word Replacement
  - Replace sensitive words in request data with masked strings before passing to back-end services. Ensures that sensitive data does not leave the domain
  - Some masked data can be restored after being returned by the back-end service
  - Custom rules support standard regular expressions and grok rules, and replacement strings support variable substitution

## Execution Properties
Plugin Execution Phase: \`Authentication Phase\`  
Plugin Execution Priority: \`991\`

## Configuration Fields
| Name                   | Data Type       | Default Value | Description                          |
| ---------------------- | ---------------- | -------------- | ------------------------------------ |
|  deny_openai           | bool             | true           |  Intercept openai protocol          |
|  deny_jsonpath         | string           |   []           |  Intercept specified jsonpath       |
|  deny_raw              | bool             | false          |  Intercept raw body                 |
|  system_deny           | bool             | true           |  Enable built-in interception rules  |
|  deny_code             | int              | 200            |  HTTP status code when intercepted   |
|  deny_message          | string           | Sensitive words found in the question or answer have been blocked | AI returned message when intercepted |
|  deny_raw_message      | string           | {"errmsg":"Sensitive words found in the question or answer have been blocked"} | Content returned when not openai intercepted |
|  deny_content_type     | string           | application/json | Content type header returned when not openai intercepted |
|  deny_words            | array of string  | []             | Custom sensitive word list           |
|  replace_roles         | array            |   -            | Custom sensitive word regex replacement |
|  replace_roles.regex   | string           |   -            | Rule regex (built-in GROK rule)    |
|  replace_roles.type    | [replace, hash]  |   -            | Replacement type                     |
|  replace_roles.restore  | bool             | false          | Whether to restore                   |
|  replace_roles.value    | string          |   -            | Replacement value (supports regex variables) |

## Configuration Example
\`\`\`yaml
system_deny: true
deny_openai: true
deny_jsonpath:
  - "$.messages[*].content"
deny_raw: true
deny_code: 200
deny_message: "Sensitive words found in the question or answer have been blocked"
deny_raw_message: "{\\"errmsg\\":\\"Sensitive words found in the question or answer have been blocked\\"}"
deny_content_type: "application/json"
deny_words:
  - "Custom sensitive word 1"
  - "Custom sensitive word 2"
replace_roles:
  - regex: "%{MOBILE}"
    type: "replace"
    value: "****"
    # Mobile number  13800138000 -> ****
  - regex: "%{EMAILLOCALPART}@%{HOSTNAME:domain}"
    type: "replace"
    restore: true
    value: "****@$domain"
    # Email  admin@gmail.com -> ****@gmail.com
  - regex: "%{IP}"
    type: "replace"
    restore: true
    value: "***.***.***.***"
    # IP 192.168.0.1 -> ***.***.***.***
  - regex: "%{IDCARD}"
    type: "replace"
    value: "****"
    # ID card number 110000000000000000 -> ****
  - regex: "sk-[0-9a-zA-Z]*"
    restore: true
    type: "hash"
    # hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d
    # The hashed value is provided to the large model, and the hash value will be restored to the original value from the data returned by the large model
\`\`\`

## Sensitive Word Replacement Example
### User Request Content
  Please change \`curl http://172.20.5.14/api/openai/v1/chat/completions -H "Authorization: sk-12345" -H "Auth: test@gmail.com"\` to POST method

### Processed Request Large Model Content
  \`curl http://***.***.***.***/api/openai/v1/chat/completions -H "Authorization: 48a7e98a91d93896d8dac522c5853948" -H "Auth: ****@gmail.com"\` change to POST method

### Large Model Returned Content
  You want to convert a \`curl\` GET request to a POST request, and this request is sending data to a specific API. Below is the modified \`curl\` command to send as POST:
\`\`\`sh
curl -X POST \\
     -H "Authorization: 48a7e98a91d93896d8dac522c5853948" \\
     -H "Auth: ****@gmail.com" \\
     -H "Content-Type: application/json" \\
     -d '{"key":"value"}' \\
     http://***.***.***.***/api/openai/v1/chat/completions
\`\`\`
Here are the following modifications made:
- \`-X POST\` sets the request method to POST.
- \`-H "Content-Type: application/json"\` sets the \`Content-Type\` in the request header to \`application/json\`, which is typically used to inform the server that the data you are sending is in JSON format.
- \`-d '{"key":"value"}'\` sets the data to be sent, where \`'{"key":"value"}'\` is a simple example of a JSON object. You need to replace it with the actual data you want to send.

Please note that you need to replace \`"key":"value"\` with the actual data content you want to send. If your API accepts a different data structure or requires specific fields, please adjust this part according to your actual situation.

### Processed Return to User Content
  You want to convert a \`curl\` GET request to a POST request, and this request is sending data to a specific API. Below is the modified \`curl\` command to send as POST:
\`\`\`sh
curl -X POST \\
     -H "Authorization: sk-12345" \\
     -H "Auth: test@gmail.com" \\
     -H "Content-Type: application/json" \\
     -d '{"key":"value"}' \\
     http://172.20.5.14/api/openai/v1/chat/completions
\`\`\`
Here are the following modifications made:
- \`-X POST\` sets the request method to POST.
- \`-H "Content-Type: application/json"\` sets the \`Content-Type\` in the request header to \`application/json\`, which is typically used to inform the server that the data you are sending is in JSON format.
- \`-d '{"key":"value"}'\` sets the data to be sent, where \`'{"key":"value"}'\` is a simple example of a JSON object. You need to replace it with the actual data you want to send.

Please note that you need to replace \`"key":"value"\` with the actual data content you want to send. If your API accepts a different data structure or requires specific fields, please adjust this part according to your actual situation.

## Related Notes
 - In streaming mode, if the masked words are split across multiple chunks, restoration may not be possible
 - In streaming mode, if sensitive words are split across multiple chunks, there may be cases where part of the sensitive word is returned to the user
 - Grok built-in rule list: https://help.aliyun.com/zh/sls/user-guide/grok-patterns
 - Built-in sensitive word library data source: https://github.com/houbb/sensitive-word/tree/master/src/main/resources
`},d=function(){return e},o=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:3,slug:"data-handling-scope",text:"Data Handling Scope"},{depth:3,slug:"sensitive-word-interception",text:"Sensitive Word Interception"},{depth:3,slug:"sensitive-word-replacement",text:"Sensitive Word Replacement"},{depth:2,slug:"execution-properties",text:"Execution Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:2,slug:"sensitive-word-replacement-example",text:"Sensitive Word Replacement Example"},{depth:3,slug:"user-request-content",text:"User Request Content"},{depth:3,slug:"processed-request-large-model-content",text:"Processed Request Large Model Content"},{depth:3,slug:"large-model-returned-content",text:"Large Model Returned Content"},{depth:3,slug:"processed-return-to-user-content",text:"Processed Return to User Content"},{depth:2,slug:"related-notes",text:"Related Notes"}]},s=p((m,g,f)=>{const{layout:x,...i}=a;return i.file=t,i.url=n,c`${u()}${y(e)}`})});export{s as Content,E as __tla,d as compiledContent,s as default,t as file,a as frontmatter,o as getHeadings,l as rawContent,n as url};
