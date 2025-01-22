import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r as E,m as v,u as y,__tla as x}from"./constant.D_aL6M0L.js";import{__tla as r}from"./astro/assets-service.DQopRnBr.js";let a,d,n,e,t,l,p,F=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return r}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">AI \u4EE3\u7406</code>\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E OpenAI API \u5951\u7EA6\u7684 AI \u4EE3\u7406\u529F\u80FD\u3002\u76EE\u524D\u652F\u6301 OpenAI\u3001Azure OpenAI\u3001\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09\u548C\u901A\u4E49\u5343\u95EE\u7B49 AI
\u670D\u52A1\u63D0\u4F9B\u5546\u3002</p>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
</blockquote>
<blockquote>
<p>\u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D <code dir="auto">/v1/chat/completions</code> \u65F6\uFF0C\u5BF9\u5E94\u6587\u751F\u6587\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u751F\u6587\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u751F\u6587\u534F\u8BAE</p>
</blockquote>
<blockquote>
<p>\u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D <code dir="auto">/v1/embeddings</code> \u65F6\uFF0C\u5BF9\u5E94\u6587\u672C\u5411\u91CF\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE</p>
</blockquote>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">100</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<h3 id="\u57FA\u672C\u914D\u7F6E">\u57FA\u672C\u914D\u7F6E</h3>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">provider</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u76EE\u6807 AI \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F</td></tr></tbody></table>
<p><code dir="auto">provider</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>











































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">type</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>AI \u670D\u52A1\u63D0\u4F9B\u5546\u540D\u79F0</td></tr><tr><td><code dir="auto">apiTokens</code></td><td>array of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE AI \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002\u5982\u679C\u914D\u7F6E\u4E86\u591A\u4E2A token\uFF0C\u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42\u65F6\u968F\u673A\u8FDB\u884C\u9009\u62E9\u3002\u90E8\u5206\u670D\u52A1\u63D0\u4F9B\u5546\u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A token\u3002</td></tr><tr><td><code dir="auto">timeout</code></td><td>number</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE AI \u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A 120000\uFF0C\u5373 2 \u5206\u949F</td></tr><tr><td><code dir="auto">modelMapping</code></td><td>map of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>AI \u6A21\u578B\u6620\u5C04\u8868\uFF0C\u7528\u4E8E\u5C06\u8BF7\u6C42\u4E2D\u7684\u6A21\u578B\u540D\u79F0\u6620\u5C04\u4E3A\u670D\u52A1\u63D0\u4F9B\u5546\u652F\u6301\u6A21\u578B\u540D\u79F0\u3002<br>1. \u652F\u6301\u524D\u7F00\u5339\u914D\u3002\u4F8B\u5982\u7528 \u201Cgpt-3-<em>\u201D \u5339\u914D\u6240\u6709\u540D\u79F0\u4EE5\u201Cgpt-3-\u201D\u5F00\u5934\u7684\u6A21\u578B\uFF1B<br>2. \u652F\u6301\u4F7F\u7528 "</em>" \u4E3A\u952E\u6765\u914D\u7F6E\u901A\u7528\u515C\u5E95\u6620\u5C04\u5173\u7CFB\uFF1B<br>3. \u5982\u679C\u6620\u5C04\u7684\u76EE\u6807\u540D\u79F0\u4E3A\u7A7A\u5B57\u7B26\u4E32 ""\uFF0C\u5219\u8868\u793A\u4FDD\u7559\u539F\u6A21\u578B\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">protocol</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u63D2\u4EF6\u5BF9\u5916\u63D0\u4F9B\u7684 API \u63A5\u53E3\u5951\u7EA6\u3002\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u53D6\u503C\uFF1Aopenai\uFF08\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 OpenAI \u7684\u63A5\u53E3\u5951\u7EA6\uFF09\u3001original\uFF08\u4F7F\u7528\u76EE\u6807\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u539F\u59CB\u63A5\u53E3\u5951\u7EA6\uFF09</td></tr><tr><td><code dir="auto">context</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u4FE1\u606F</td></tr><tr><td><code dir="auto">customSettings</code></td><td>array of customSetting</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u4E3AAI\u8BF7\u6C42\u6307\u5B9A\u8986\u76D6\u6216\u8005\u586B\u5145\u53C2\u6570</td></tr><tr><td><code dir="auto">failover</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E apiToken \u7684 failover \u7B56\u7565\uFF0C\u5F53 apiToken \u4E0D\u53EF\u7528\u65F6\uFF0C\u5C06\u5176\u79FB\u51FA apiToken \u5217\u8868\uFF0C\u5F85\u5065\u5EB7\u68C0\u6D4B\u901A\u8FC7\u540E\u91CD\u65B0\u6DFB\u52A0\u56DE apiToken \u5217\u8868</td></tr><tr><td><code dir="auto">retryOnFailure</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u5F53\u8BF7\u6C42\u5931\u8D25\u65F6\u7ACB\u5373\u8FDB\u884C\u91CD\u8BD5</td></tr></tbody></table>
<p><code dir="auto">context</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">fileUrl</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u4FDD\u5B58 AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u7684\u6587\u4EF6 URL\u3002\u4EC5\u652F\u6301\u7EAF\u6587\u672C\u7C7B\u578B\u7684\u6587\u4EF6\u5185\u5BB9</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u5B8C\u6574\u540D\u79F0</td></tr><tr><td><code dir="auto">servicePort</code></td><td>number</td><td>\u5FC5\u586B</td><td>-</td><td>URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u8BBF\u95EE\u7AEF\u53E3</td></tr></tbody></table>
<p><code dir="auto">customSettings</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u540D\u79F0\uFF0C\u4F8B\u5982<code dir="auto">max_tokens</code></td></tr><tr><td><code dir="auto">value</code></td><td>string/int/float/bool</td><td>\u5FC5\u586B</td><td>-</td><td>\u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u503C\uFF0C\u4F8B\u59820</td></tr><tr><td><code dir="auto">mode</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>\u201Dauto\u201D</td><td>\u53C2\u6570\u8BBE\u7F6E\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u201Dauto\u201D\u6216\u8005\u201Draw\u201D\uFF0C\u5982\u679C\u4E3A\u201Dauto\u201D\u5219\u4F1A\u81EA\u52A8\u6839\u636E\u534F\u8BAE\u5BF9\u53C2\u6570\u540D\u505A\u6539\u5199\uFF0C\u5982\u679C\u4E3A\u201Draw\u201D\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u5199\u548C\u9650\u5236\u68C0\u67E5</td></tr><tr><td><code dir="auto">overwrite</code></td><td>bool</td><td>\u975E\u5FC5\u586B</td><td>true</td><td>\u5982\u679C\u4E3Afalse\u5219\u53EA\u5728\u7528\u6237\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E2A\u53C2\u6570\u65F6\u586B\u5145\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u76F4\u63A5\u8986\u76D6\u7528\u6237\u539F\u6709\u7684\u53C2\u6570\u8BBE\u7F6E</td></tr></tbody></table>
<p>custom-setting\u4F1A\u9075\u5FAA\u5982\u4E0B\u8868\u683C\uFF0C\u6839\u636E<code dir="auto">name</code>\u548C\u534F\u8BAE\u6765\u66FF\u6362\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u7528\u6237\u9700\u8981\u586B\u5199\u8868\u683C\u4E2D<code dir="auto">settingName</code>\u5217\u4E2D\u5B58\u5728\u7684\u503C\u3002\u4F8B\u5982\u7528\u6237\u5C06<code dir="auto">name</code>\u8BBE\u7F6E\u4E3A<code dir="auto">max_tokens</code>\uFF0C\u5728openai\u534F\u8BAE\u4E2D\u4F1A\u66FF\u6362<code dir="auto">max_tokens</code>\uFF0C\u5728gemini\u4E2D\u4F1A\u66FF\u6362<code dir="auto">maxOutputTokens</code>\u3002
<code dir="auto">none</code>\u8868\u793A\u8BE5\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\u3002\u5982\u679C<code dir="auto">name</code>\u4E0D\u5728\u6B64\u8868\u683C\u4E2D\u6216\u8005\u5BF9\u5E94\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\uFF0C\u540C\u65F6\u6CA1\u6709\u8BBE\u7F6Eraw\u6A21\u5F0F\uFF0C\u5219\u914D\u7F6E\u4E0D\u4F1A\u751F\u6548\u3002</p>







































































<table><thead><tr><th>settingName</th><th>openai</th><th>baidu</th><th>spark</th><th>qwen</th><th>gemini</th><th>hunyuan</th><th>claude</th><th>minimax</th></tr></thead><tbody><tr><td>max_tokens</td><td>max_tokens</td><td>max_output_tokens</td><td>max_tokens</td><td>max_tokens</td><td>maxOutputTokens</td><td>none</td><td>max_tokens</td><td>tokens_to_generate</td></tr><tr><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>Temperature</td><td>temperature</td><td>temperature</td></tr><tr><td>top_p</td><td>top_p</td><td>top_p</td><td>none</td><td>top_p</td><td>topP</td><td>TopP</td><td>top_p</td><td>top_p</td></tr><tr><td>top_k</td><td>none</td><td>none</td><td>top_k</td><td>none</td><td>topK</td><td>none</td><td>top_k</td><td>none</td></tr><tr><td>seed</td><td>seed</td><td>none</td><td>none</td><td>seed</td><td>none</td><td>none</td><td>none</td><td>none</td></tr></tbody></table>
<p>\u5982\u679C\u542F\u7528\u4E86raw\u6A21\u5F0F\uFF0Ccustom-setting\u4F1A\u76F4\u63A5\u7528\u8F93\u5165\u7684<code dir="auto">name</code>\u548C<code dir="auto">value</code>\u53BB\u66F4\u6539\u8BF7\u6C42\u4E2D\u7684json\u5185\u5BB9\uFF0C\u800C\u4E0D\u5BF9\u53C2\u6570\u540D\u79F0\u505A\u4EFB\u4F55\u9650\u5236\u548C\u4FEE\u6539\u3002
\u5BF9\u4E8E\u5927\u591A\u6570\u534F\u8BAE\uFF0Ccustom-setting\u90FD\u4F1A\u5728json\u5185\u5BB9\u7684\u6839\u8DEF\u5F84\u4FEE\u6539\u6216\u8005\u586B\u5145\u53C2\u6570\u3002\u5BF9\u4E8E<code dir="auto">qwen</code>\u534F\u8BAE\uFF0Cai-proxy\u4F1A\u5728json\u7684<code dir="auto">parameters</code>\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002\u5BF9\u4E8E<code dir="auto">gemini</code>\u534F\u8BAE\uFF0C\u5219\u4F1A\u5728<code dir="auto">generation_config</code>\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002</p>
<p><code dir="auto">failover</code> \u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>






















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>enabled</td><td>bool</td><td>\u975E\u5FC5\u586B</td><td>false</td><td>\u662F\u5426\u542F\u7528 apiToken \u7684 failover \u673A\u5236</td></tr><tr><td>failureThreshold</td><td>int</td><td>\u975E\u5FC5\u586B</td><td>3</td><td>\u89E6\u53D1 failover \u8FDE\u7EED\u8BF7\u6C42\u5931\u8D25\u7684\u9608\u503C\uFF08\u6B21\u6570\uFF09</td></tr><tr><td>successThreshold</td><td>int</td><td>\u975E\u5FC5\u586B</td><td>1</td><td>\u5065\u5EB7\u68C0\u6D4B\u7684\u6210\u529F\u9608\u503C\uFF08\u6B21\u6570\uFF09</td></tr><tr><td>healthCheckInterval</td><td>int</td><td>\u975E\u5FC5\u586B</td><td>5000</td><td>\u5065\u5EB7\u68C0\u6D4B\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td>healthCheckTimeout</td><td>int</td><td>\u975E\u5FC5\u586B</td><td>5000</td><td>\u5065\u5EB7\u68C0\u6D4B\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td>healthCheckModel</td><td>string</td><td>\u542F\u7528 failover \u65F6\u5FC5\u586B</td><td></td><td>\u5065\u5EB7\u68C0\u6D4B\u4F7F\u7528\u7684\u6A21\u578B</td></tr></tbody></table>
<p><code dir="auto">retryOnFailure</code> \u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>enabled</td><td>bool</td><td>\u975E\u5FC5\u586B</td><td>false</td><td>\u662F\u5426\u542F\u7528\u5931\u8D25\u8BF7\u6C42\u91CD\u8BD5</td></tr><tr><td>maxRetries</td><td>int</td><td>\u975E\u5FC5\u586B</td><td>1</td><td>\u6700\u5927\u91CD\u8BD5\u6B21\u6570</td></tr><tr><td>retryTimeout</td><td>int</td><td>\u975E\u5FC5\u586B</td><td>30000</td><td>\u91CD\u8BD5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr></tbody></table>
<h3 id="\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E">\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E</h3>
<h4 id="openai">OpenAI</h4>
<p>OpenAI \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">openai</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B:</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">openaiCustomUrl</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u57FA\u4E8EOpenAI\u534F\u8BAE\u7684\u81EA\u5B9A\u4E49\u540E\u7AEFURL\uFF0C\u4F8B\u5982: <a href="http://www.example.com/myai/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">www.example.com/myai/v1/chat/completions</a></td></tr><tr><td><code dir="auto">responseJsonSchema</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u9884\u5148\u5B9A\u4E49OpenAI\u54CD\u5E94\u9700\u6EE1\u8DB3\u7684Json Schema, \u6CE8\u610F\u76EE\u524D\u4EC5\u7279\u5B9A\u7684\u51E0\u79CD\u6A21\u578B\u652F\u6301\u8BE5\u7528\u6CD5</td></tr></tbody></table>
<h4 id="azure-openai">Azure OpenAI</h4>
<p>Azure OpenAI \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">azure</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">azureServiceUrl</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>Azure OpenAI \u670D\u52A1\u7684 URL\uFF0C\u987B\u5305\u542B <code dir="auto">api-version</code> \u67E5\u8BE2\u53C2\u6570\u3002</td></tr></tbody></table>
<p><strong>\u6CE8\u610F\uFF1A</strong> Azure OpenAI \u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A API Token\u3002</p>
<h4 id="\u6708\u4E4B\u6697\u9762moonshot">\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09</h4>
<p>\u6708\u4E4B\u6697\u9762\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">moonshot</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">moonshotFileId</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u901A\u8FC7\u6587\u4EF6\u63A5\u53E3\u4E0A\u4F20\u81F3\u6708\u4E4B\u6697\u9762\u7684\u6587\u4EF6 ID\uFF0C\u5176\u5185\u5BB9\u5C06\u88AB\u7528\u505A AI \u5BF9\u8BDD\u7684\u4E0A\u4E0B\u6587\u3002\u4E0D\u53EF\u4E0E <code dir="auto">context</code> \u5B57\u6BB5\u540C\u65F6\u914D\u7F6E\u3002</td></tr></tbody></table>
<h4 id="\u901A\u4E49\u5343\u95EEqwen">\u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09</h4>
<p>\u901A\u4E49\u5343\u95EE\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">qwen</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">qwenEnableSearch</code></td><td>boolean</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u662F\u5426\u542F\u7528\u901A\u4E49\u5343\u95EE\u5185\u7F6E\u7684\u4E92\u8054\u7F51\u641C\u7D22\u529F\u80FD\u3002</td></tr><tr><td><code dir="auto">qwenFileIds</code></td><td>array of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u901A\u8FC7\u6587\u4EF6\u63A5\u53E3\u4E0A\u4F20\u81F3Dashscope\u7684\u6587\u4EF6 ID\uFF0C\u5176\u5185\u5BB9\u5C06\u88AB\u7528\u505A AI \u5BF9\u8BDD\u7684\u4E0A\u4E0B\u6587\u3002\u4E0D\u53EF\u4E0E <code dir="auto">context</code> \u5B57\u6BB5\u540C\u65F6\u914D\u7F6E\u3002</td></tr></tbody></table>
<h4 id="\u767E\u5DDD\u667A\u80FD-baichuan-ai">\u767E\u5DDD\u667A\u80FD (Baichuan AI)</h4>
<p>\u767E\u5DDD\u667A\u80FD\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">baichuan</code> \u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="\u96F6\u4E00\u4E07\u7269yi">\u96F6\u4E00\u4E07\u7269\uFF08Yi\uFF09</h4>
<p>\u96F6\u4E00\u4E07\u7269\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">yi</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="\u667A\u8C31aizhipu-ai">\u667A\u8C31AI\uFF08Zhipu AI\uFF09</h4>
<p>\u667A\u8C31AI\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">zhipuai</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="deepseekdeepseek">DeepSeek\uFF08DeepSeek\uFF09</h4>
<p>DeepSeek\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">deepseek</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="groq">Groq</h4>
<p>Groq \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">groq</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="\u6587\u5FC3\u4E00\u8A00baidu">\u6587\u5FC3\u4E00\u8A00\uFF08Baidu\uFF09</h4>
<p>\u6587\u5FC3\u4E00\u8A00\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">baidu</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="360\u667A\u8111">360\u667A\u8111</h4>
<p>360\u667A\u8111\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">ai360</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="github\u6A21\u578B">GitHub\u6A21\u578B</h4>
<p>GitHub\u6A21\u578B\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">github</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="mistral">Mistral</h4>
<p>Mistral \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">mistral</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="minimax">MiniMax</h4>
<p>MiniMax\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">minimax</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">minimaxApiType</code></td><td>string</td><td>v2 \u548C pro \u4E2D\u9009\u586B\u4E00\u9879</td><td>v2</td><td>v2 \u4EE3\u8868 ChatCompletion v2 API\uFF0Cpro \u4EE3\u8868 ChatCompletion Pro API</td></tr><tr><td><code dir="auto">minimaxGroupId</code></td><td>string</td><td><code dir="auto">minimaxApiType</code> \u4E3A pro \u65F6\u5FC5\u586B</td><td>-</td><td><code dir="auto">minimaxApiType</code> \u4E3A pro \u65F6\u4F7F\u7528 ChatCompletion Pro API\uFF0C\u9700\u8981\u8BBE\u7F6E groupID</td></tr></tbody></table>
<h4 id="anthropic-claude">Anthropic Claude</h4>
<p>Anthropic Claude \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">claude</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">claudeVersion</code></td><td>string</td><td>\u53EF\u9009</td><td>-</td><td>Claude \u670D\u52A1\u7684 API \u7248\u672C\uFF0C\u9ED8\u8BA4\u4E3A 2023-06-01</td></tr></tbody></table>
<h4 id="ollama">Ollama</h4>
<p>Ollama \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">ollama</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">ollamaServerHost</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>Ollama \u670D\u52A1\u5668\u7684\u4E3B\u673A\u5730\u5740</td></tr><tr><td><code dir="auto">ollamaServerPort</code></td><td>number</td><td>\u5FC5\u586B</td><td>-</td><td>Ollama \u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4\u4E3A11434</td></tr></tbody></table>
<h4 id="\u6DF7\u5143">\u6DF7\u5143</h4>
<p>\u6DF7\u5143\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">hunyuan</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">hunyuanAuthId</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6DF7\u5143\u7528\u4E8Ev3\u7248\u672C\u8BA4\u8BC1\u7684id</td></tr><tr><td><code dir="auto">hunyuanAuthKey</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6DF7\u5143\u7528\u4E8Ev3\u7248\u672C\u8BA4\u8BC1\u7684key</td></tr></tbody></table>
<h4 id="\u9636\u8DC3\u661F\u8FB0-stepfun">\u9636\u8DC3\u661F\u8FB0 (Stepfun)</h4>
<p>\u9636\u8DC3\u661F\u8FB0\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">stepfun</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="cloudflare-workers-ai">Cloudflare Workers AI</h4>
<p>Cloudflare Workers AI \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">cloudflare</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">cloudflareAccountId</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td><a href="https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Cloudflare Account ID</a></td></tr></tbody></table>
<h4 id="\u661F\u706B-spark">\u661F\u706B (Spark)</h4>
<p>\u661F\u706B\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">spark</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<p>\u8BAF\u98DE\u661F\u706B\u8BA4\u77E5\u5927\u6A21\u578B\u7684<code dir="auto">apiTokens</code>\u5B57\u6BB5\u503C\u4E3A<code dir="auto">APIKey:APISecret</code>\u3002\u5373\u586B\u5165\u81EA\u5DF1\u7684APIKey\u4E0EAPISecret\uFF0C\u5E76\u4EE5<code dir="auto">:</code>\u5206\u9694\u3002</p>
<h4 id="gemini">Gemini</h4>
<p>Gemini \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">gemini</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">geminiSafetySetting</code></td><td>map of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Gemini AI\u5185\u5BB9\u8FC7\u6EE4\u548C\u5B89\u5168\u7EA7\u522B\u8BBE\u5B9A\u3002\u53C2\u8003<a href="https://ai.google.dev/gemini-api/docs/safety-settings" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Safety settings</a></td></tr></tbody></table>
<h4 id="deepl">DeepL</h4>
<p>DeepL \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">deepl</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">targetLang</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>DeepL \u7FFB\u8BD1\u670D\u52A1\u9700\u8981\u7684\u76EE\u6807\u8BED\u79CD</td></tr></tbody></table>
<h4 id="cohere">Cohere</h4>
<p>Cohere \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">cohere</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="together-ai">Together-AI</h4>
<p>Together-AI \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">together-ai</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h2 id="\u7528\u6CD5\u793A\u4F8B">\u7528\u6CD5\u793A\u4F8B</h2>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-azure-openai-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Azure OpenAI \u670D\u52A1</h3>
<p>\u4F7F\u7528\u6700\u57FA\u672C\u7684 Azure OpenAI \u670D\u52A1\uFF0C\u4E0D\u914D\u7F6E\u4EFB\u4F55\u4E0A\u4E0B\u6587\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">azure</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_AZURE_OPENAI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">azureServiceUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview"</span><span style="--0:#E1E4E8">,</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: azure\x7F  apiTokens:\x7F    - &#x22;YOUR_AZURE_OPENAI_API_TOKEN&#x22;\x7F  azureServiceUrl: &#x22;https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview&#x22;,"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content_filter_results"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"hate"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"self_harm"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"sexual"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"violence"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF01\u6211\u662F\u4E00\u4E2AAI\u52A9\u624B\uFF0C\u53EF\u4EE5\u56DE\u7B54\u4F60\u7684\u95EE\u9898\u548C\u63D0\u4F9B\u5E2E\u52A9\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u5230\u4F60\u7684\u5417\uFF1F"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1714807624</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-abcdefg1234567890"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-35-turbo-16k"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"prompt_filter_results"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"prompt_index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content_filter_results"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"hate"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"self_harm"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"sexual"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"violence"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"system_fingerprint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">40</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">55</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;content_filter_results&#x22;: {\x7F        &#x22;hate&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;self_harm&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;sexual&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;violence&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        }\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;message&#x22;: {\x7F        &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF01\u6211\u662F\u4E00\u4E2AAI\u52A9\u624B\uFF0C\u53EF\u4EE5\u56DE\u7B54\u4F60\u7684\u95EE\u9898\u548C\u63D0\u4F9B\u5E2E\u52A9\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u5230\u4F60\u7684\u5417\uFF1F&#x22;,\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;\x7F      }\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1714807624,\x7F  &#x22;id&#x22;: &#x22;chatcmpl-abcdefg1234567890&#x22;,\x7F  &#x22;model&#x22;: &#x22;gpt-35-turbo-16k&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;prompt_filter_results&#x22;: [\x7F    {\x7F      &#x22;prompt_index&#x22;: 0,\x7F      &#x22;content_filter_results&#x22;: {\x7F        &#x22;hate&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;self_harm&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;sexual&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;violence&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        }\x7F      }\x7F    }\x7F  ],\x7F  &#x22;system_fingerprint&#x22;: null,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;completion_tokens&#x22;: 40,\x7F    &#x22;prompt_tokens&#x22;: 15,\x7F    &#x22;total_tokens&#x22;: 55\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1</h3>
<p>\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u5E76\u914D\u7F6E\u4ECE OpenAI \u5927\u6A21\u578B\u5230\u901A\u4E49\u5343\u95EE\u7684\u6A21\u578B\u6620\u5C04\u5173\u7CFB\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-35-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4o'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-vl-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'text-embedding-v1'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'text-embedding-v1'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;qwen-turbo&#x22;\x7F    &#x27;gpt-35-turbo&#x27;: &#x22;qwen-plus&#x22;\x7F    &#x27;gpt-4-turbo&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4-*&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4o&#x27;: &#x22;qwen-vl-plus&#x22;\x7F    &#x27;text-embedding-v1&#x27;: &#x27;text-embedding-v1&#x27;\x7F    &#x27;*&#x27;: &#x22;qwen-turbo&#x22;"><div></div></button></div></figure></div>
<p><strong>AI \u5BF9\u8BDD\u8BF7\u6C42\u793A\u4F8B</strong></p>
<p>URL: <a href="http://your-domain/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://your-domain/v1/chat/completions</a></p>
<p>\u8BF7\u6C42\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"c2518bd3-0f46-97d1-be34-bb5777cb3108"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1715175072</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">24</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">33</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">57</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;c2518bd3-0f46-97d1-be34-bb5777cb3108&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1715175072,\x7F  &#x22;model&#x22;: &#x22;qwen-turbo&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 24,\x7F    &#x22;completion_tokens&#x22;: 33,\x7F    &#x22;total_tokens&#x22;: 57\x7F  }\x7F}"><div></div></button></div></figure></div>
<p><strong>\u591A\u6A21\u6001\u6A21\u578B API \u8BF7\u6C42\u793A\u4F8B\uFF08\u9002\u7528\u4E8E <code dir="auto">qwen-vl-plus</code> \u548C <code dir="auto">qwen-vl-max</code> \u6A21\u578B\uFF09</strong></p>
<p>URL: <a href="http://your-domain/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://your-domain/v1/chat/completions</a></p>
<p>\u8BF7\u6C42\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"image_url"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"image_url"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#79B8FF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"text"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FD9\u4E2A\u56FE\u7247\u662F\u54EA\u91CC\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-4o&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: [\x7F                {\x7F                    &#x22;type&#x22;: &#x22;image_url&#x22;,\x7F                    &#x22;image_url&#x22;: {\x7F                        &#x22;url&#x22;: &#x22;https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg&#x22;\x7F                    }\x7F                },\x7F                {\x7F                    &#x22;type&#x22;: &#x22;text&#x22;,\x7F                    &#x22;text&#x22;: &#x22;\u8FD9\u4E2A\u56FE\u7247\u662F\u54EA\u91CC\uFF1F&#x22;\x7F                }\x7F            ]\x7F        }\x7F    ],\x7F    &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"17c5955d-af9c-9f28-bbde-293a9c9a3515"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#79B8FF">"text"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FD9\u5F20\u7167\u7247\u663E\u793A\u7684\u662F\u4E00\u4F4D\u5973\u58EB\u548C\u4E00\u53EA\u72D7\u5728\u6D77\u6EE9\u4E0A\u3002\u7531\u4E8E\u6211\u65E0\u6CD5\u83B7\u53D6\u5177\u4F53\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u6240\u4EE5\u4E0D\u80FD\u786E\u5B9A\u8FD9\u662F\u54EA\u4E2A\u5730\u65B9\u7684\u6D77\u6EE9\u3002\u4F46\u662F\u4ECE\u89C6\u89C9\u5185\u5BB9\u6765\u770B\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u4F4D\u4E8E\u6CBF\u6D77\u5730\u533A\u7684\u6C99\u6EE9\u6D77\u5CB8\u7EBF\uFF0C\u5E76\u4E14\u6709\u6D77\u6D6A\u62CD\u6253\u7740\u5CB8\u8FB9\u3002\u8FD9\u6837\u7684\u573A\u666F\u5728\u5168\u7403\u8BB8\u591A\u7F8E\u4E3D\u7684\u6D77\u6EE8\u5730\u533A\u90FD\u53EF\u4EE5\u627E\u5230\u3002\u5982\u679C\u60A8\u9700\u8981\u66F4\u7CBE\u786E\u7684\u4FE1\u606F\uFF0C\u8BF7\u63D0\u4F9B\u66F4\u591A\u7684\u80CC\u666F\u6216\u7EC6\u8282\u63CF\u8FF0\u3002"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1723949230</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-vl-plus"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1279</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">78</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;17c5955d-af9c-9f28-bbde-293a9c9a3515&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: [\x7F                    {\x7F                        &#x22;text&#x22;: &#x22;\u8FD9\u5F20\u7167\u7247\u663E\u793A\u7684\u662F\u4E00\u4F4D\u5973\u58EB\u548C\u4E00\u53EA\u72D7\u5728\u6D77\u6EE9\u4E0A\u3002\u7531\u4E8E\u6211\u65E0\u6CD5\u83B7\u53D6\u5177\u4F53\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u6240\u4EE5\u4E0D\u80FD\u786E\u5B9A\u8FD9\u662F\u54EA\u4E2A\u5730\u65B9\u7684\u6D77\u6EE9\u3002\u4F46\u662F\u4ECE\u89C6\u89C9\u5185\u5BB9\u6765\u770B\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u4F4D\u4E8E\u6CBF\u6D77\u5730\u533A\u7684\u6C99\u6EE9\u6D77\u5CB8\u7EBF\uFF0C\u5E76\u4E14\u6709\u6D77\u6D6A\u62CD\u6253\u7740\u5CB8\u8FB9\u3002\u8FD9\u6837\u7684\u573A\u666F\u5728\u5168\u7403\u8BB8\u591A\u7F8E\u4E3D\u7684\u6D77\u6EE8\u5730\u533A\u90FD\u53EF\u4EE5\u627E\u5230\u3002\u5982\u679C\u60A8\u9700\u8981\u66F4\u7CBE\u786E\u7684\u4FE1\u606F\uFF0C\u8BF7\u63D0\u4F9B\u66F4\u591A\u7684\u80CC\u666F\u6216\u7EC6\u8282\u63CF\u8FF0\u3002&#x22;\x7F                    }\x7F                ]\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1723949230,\x7F    &#x22;model&#x22;: &#x22;qwen-vl-plus&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 1279,\x7F        &#x22;completion_tokens&#x22;: 78\x7F    }\x7F}"><div></div></button></div></figure></div>
<p><strong>\u6587\u672C\u5411\u91CF\u8BF7\u6C42\u793A\u4F8B</strong></p>
<p>URL: <a href="http://your-domain/v1/embeddings" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://your-domain/v1/embeddings</a></p>
<p>\u8BF7\u6C42\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"input"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;text-embedding-v1&#x22;,\x7F  &#x22;input&#x22;: &#x22;Hello&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"list"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"data"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"embedding"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-1.0437825918197632</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">5.208984375</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">3.0483806133270264</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-1.7897135019302368</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-2.0107421875</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#FDAEB7;--0fs:italic">...</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.8125</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-1.1759847402572632</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.8174641728401184</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">1.0432943105697632</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.5885213017463684</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;object&#x22;: &#x22;list&#x22;,\x7F  &#x22;data&#x22;: [\x7F    {\x7F      &#x22;object&#x22;: &#x22;embedding&#x22;,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;embedding&#x22;: [\x7F        -1.0437825918197632,\x7F        5.208984375,\x7F        3.0483806133270264,\x7F        -1.7897135019302368,\x7F        -2.0107421875,\x7F        ...,\x7F        0.8125,\x7F        -1.1759847402572632,\x7F        0.8174641728401184,\x7F        1.0432943105697632,\x7F        -0.5885213017463684\x7F      ]\x7F    }\x7F  ],\x7F  &#x22;model&#x22;: &#x22;text-embedding-v1&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 1,\x7F    &#x22;total_tokens&#x22;: 1\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F">\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F</h3>
<p>\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u540C\u65F6\u914D\u7F6E\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">context</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fileUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://file.default.svc.cluster.local/ai/context.txt"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"file.dns"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;qwen-turbo&#x22;\x7F  context:\x7F    - fileUrl: &#x22;http://file.default.svc.cluster.local/ai/context.txt&#x22;,\x7F      serviceName: &#x22;file.dns&#x22;,\x7F      servicePort: 80"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cmpl-77861a17681f4987ab8270dbf8001936"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9756990</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-128k"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FD9\u4EFD\u6587\u6848\u662F\u4E00\u4EFD\u5173\u4E8E..."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20181</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">439</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20620</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;cmpl-77861a17681f4987ab8270dbf8001936&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 9756990,\x7F  &#x22;model&#x22;: &#x22;moonshot-v1-128k&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u8FD9\u4EFD\u6587\u6848\u662F\u4E00\u4EFD\u5173\u4E8E...&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 20181,\x7F    &#x22;completion_tokens&#x22;: 439,\x7F    &#x22;total_tokens&#x22;: 20620\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587">\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587</h3>
<p>\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u901A\u4E49\u5343\u95EE\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-long"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u901A\u4E49\u5343\u95EE\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587\u53EA\u80FD\u5728 qwen-long \u6A21\u578B\u4E0B\u4F7F\u7528</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">qwenFileIds</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"file-fe-xxx"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"file-fe-yyy"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;qwen-long&#x22; # \u901A\u4E49\u5343\u95EE\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587\u53EA\u80FD\u5728 qwen-long \u6A21\u578B\u4E0B\u4F7F\u7528\x7F  qwenFileIds:\x7F  - &#x22;file-fe-xxx&#x22;\x7F  - &#x22;file-fe-yyy&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"output"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u60A8\u4E0A\u4F20\u4E86\u4E24\u4E2A\u6587\u4EF6\uFF0C\`context.txt\` \u548C \`context_2.txt\`\uFF0C\u5B83\u4EEC\u4F3C\u4E4E\u90FD\u5305\u542B\u4E86\u5173\u4E8Exxxx"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2023</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">530</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1493</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"request_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"187e99ba-5b64-9ffe-8f69-01dafbaf6ed7"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;output&#x22;: {\x7F    &#x22;choices&#x22;: [\x7F      {\x7F        &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F        &#x22;message&#x22;: {\x7F          &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F          &#x22;content&#x22;: &#x22;\u60A8\u4E0A\u4F20\u4E86\u4E24\u4E2A\u6587\u4EF6\uFF0C&#x60;context.txt&#x60; \u548C &#x60;context_2.txt&#x60;\uFF0C\u5B83\u4EEC\u4F3C\u4E4E\u90FD\u5305\u542B\u4E86\u5173\u4E8Exxxx&#x22;\x7F        }\x7F      }\x7F    ]\x7F  },\x7F  &#x22;usage&#x22;: {\x7F    &#x22;total_tokens&#x22;: 2023,\x7F    &#x22;output_tokens&#x22;: 530,\x7F    &#x22;input_tokens&#x22;: 1493\x7F  },\x7F  &#x22;request_id&#x22;: &#x22;187e99ba-5b64-9ffe-8f69-01dafbaf6ed7&#x22;\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528">\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DASHSCOPE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">original</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_DASHSCOPE_API_TOKEN&#x22;\x7F  protocol: original"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u5B9E\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"input"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"prompt"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4ECB\u7ECD\u4E00\u4E0BDubbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"parameters"</span><span style="--0:#E1E4E8">:  {},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"debug"</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;input&#x22;: {\x7F      &#x22;prompt&#x22;: &#x22;\u4ECB\u7ECD\u4E00\u4E0BDubbo&#x22;\x7F  },\x7F  &#x22;parameters&#x22;:  {},\x7F  &#x22;debug&#x22;: {}\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u5B9E\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"session_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"677e7e8fbb874e1b84792b65042e1599"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"text"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Apache Dubbo \u662F\u4E00\u4E2A..."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"models"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"output_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">449</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"model_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"input_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">282</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"request_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"b59e45e3-5af4-91df-b7c6-9d746fd3297c"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;output&#x22;: {\x7F        &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F        &#x22;session_id&#x22;: &#x22;677e7e8fbb874e1b84792b65042e1599&#x22;,\x7F        &#x22;text&#x22;: &#x22;Apache Dubbo \u662F\u4E00\u4E2A...&#x22;\x7F    },\x7F    &#x22;usage&#x22;: {\x7F        &#x22;models&#x22;: [\x7F            {\x7F                &#x22;output_tokens&#x22;: 449,\x7F                &#x22;model_id&#x22;: &#x22;qwen-max&#x22;,\x7F                &#x22;input_tokens&#x22;: 282\x7F            }\x7F        ]\x7F    },\x7F    &#x22;request_id&#x22;: &#x22;b59e45e3-5af4-91df-b7c6-9d746fd3297c&#x22;\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">doubao</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">YOUR_DOUBAO_API_KEY</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">YOUR_DOUBAO_ENDPOINT</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: doubao\x7F  apiTokens:\x7F    - YOUR_DOUBAO_API_KEY\x7F  modelMapping:\x7F    &#x27;*&#x27;: YOUR_DOUBAO_ENDPOINT\x7F  timeout: 1200000"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-original-\u534F\u8BAE\u4EE3\u7406-coze-\u5E94\u7528">\u4F7F\u7528 original \u534F\u8BAE\u4EE3\u7406 Coze \u5E94\u7528</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">coze</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">YOUR_COZE_API_KEY</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">original</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: coze\x7F  apiTokens:\x7F    - YOUR_COZE_API_KEY\x7F  protocol: original"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587">\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587</h3>
<p>\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u6708\u4E4B\u6697\u9762\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">moonshot</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">moonshotFileId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_FILE_ID"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-32k"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: moonshot\x7F  apiTokens:\x7F    - &#x22;YOUR_MOONSHOT_API_TOKEN&#x22;\x7F  moonshotFileId: &#x22;YOUR_MOONSHOT_FILE_ID&#x22;,\x7F  modelMapping:\x7F    &#x27;*&#x27;: &#x22;moonshot-v1-32k&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cmpl-e5ca873642ca4f5d8b178c1742f9a8e8"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1872961</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-128k"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6587\u6848\u5185\u5BB9\u662F\u5173\u4E8E\u4E00\u4E2A\u540D\u4E3A\u201Cxxxx\u201D\u7684\u652F\u4ED8\u5E73\u53F0..."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">11</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">498</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">509</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;cmpl-e5ca873642ca4f5d8b178c1742f9a8e8&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1872961,\x7F  &#x22;model&#x22;: &#x22;moonshot-v1-128k&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u6587\u6848\u5185\u5BB9\u662F\u5173\u4E8E\u4E00\u4E2A\u540D\u4E3A\u201Cxxxx\u201D\u7684\u652F\u4ED8\u5E73\u53F0...&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 11,\x7F    &#x22;completion_tokens&#x22;: 498,\x7F    &#x22;total_tokens&#x22;: 509\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-groq-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GROQ_API_TOKEN"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: groq\x7F  apiTokens:\x7F    - &#x22;YOUR_GROQ_API_TOKEN&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"llama3-8b-8192"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;llama3-8b-8192&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1715917967</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"llama3-8b-8192"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u{1F60A} Ni Hao! (That's </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> in Chinese!)</span><span style="--0:#79B8FF">\\n\\n</span><span style="--0:#9ECBFF">I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I'm happy to chat with you in Chinese or help with any questions or topics you'd like to discuss! \u{1F60A}"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">16</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.005</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">89</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.104</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">105</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.109</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"system_fingerprint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"fp_dadc9d6142"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"x_groq"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"req_01hy2awmcxfpwbq56qh6svm7qz"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1715917967,\x7F  &#x22;model&#x22;: &#x22;llama3-8b-8192&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u{1F60A} Ni Hao! (That&#x27;s \\&#x22;hello\\&#x22; in Chinese!)\\n\\nI am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I&#x27;m not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I&#x27;m happy to chat with you in Chinese or help with any questions or topics you&#x27;d like to discuss! \u{1F60A}&#x22;\x7F      },\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 16,\x7F    &#x22;prompt_time&#x22;: 0.005,\x7F    &#x22;completion_tokens&#x22;: 89,\x7F    &#x22;completion_time&#x22;: 0.104,\x7F    &#x22;total_tokens&#x22;: 105,\x7F    &#x22;total_time&#x22;: 0.109\x7F  },\x7F  &#x22;system_fingerprint&#x22;: &#x22;fp_dadc9d6142&#x22;,\x7F  &#x22;x_groq&#x22;: {\x7F    &#x22;id&#x22;: &#x22;req_01hy2awmcxfpwbq56qh6svm7qz&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-claude-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Claude \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_CLAUDE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2023-06-01"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: claude\x7F  apiTokens:\x7F    - &#x22;YOUR_CLAUDE_API_TOKEN&#x22;\x7F  version: &#x22;2023-06-01&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"claude-3-opus-20240229"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"max_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1024</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;claude-3-opus-20240229&#x22;,\x7F  &#x22;max_tokens&#x22;: 1024,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"msg_01Jt3GzyjuzymnxmZERJguLK"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u60A8\u597D,\u6211\u662F\u4E00\u4E2A\u7531\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8Anthropic\u5F00\u53D1\u7684\u804A\u5929\u52A9\u624B\u3002\u6211\u7684\u540D\u5B57\u53EBClaude,\u662F\u4E00\u4E2A\u806A\u660E\u53CB\u5584\u3001\u77E5\u8BC6\u6E0A\u535A\u7684\u5BF9\u8BDD\u7CFB\u7EDF\u3002\u5F88\u9AD8\u5174\u8BA4\u8BC6\u60A8!\u6211\u53EF\u4EE5\u5C31\u5404\u79CD\u8BDD\u9898\u4E0E\u60A8\u804A\u5929,\u56DE\u7B54\u95EE\u9898,\u63D0\u4F9B\u5EFA\u8BAE\u548C\u5E2E\u52A9\u3002\u6211\u4F1A\u5C3D\u6700\u5927\u52AA\u529B\u7ED9\u60A8\u6709\u5E2E\u52A9\u7684\u56DE\u590D\u3002\u5E0C\u671B\u6211\u4EEC\u80FD\u6709\u4E2A\u6109\u5FEB\u7684\u4EA4\u6D41!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717385918</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"claude-3-opus-20240229"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">16</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">126</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">142</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;msg_01Jt3GzyjuzymnxmZERJguLK&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u60A8\u597D,\u6211\u662F\u4E00\u4E2A\u7531\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8Anthropic\u5F00\u53D1\u7684\u804A\u5929\u52A9\u624B\u3002\u6211\u7684\u540D\u5B57\u53EBClaude,\u662F\u4E00\u4E2A\u806A\u660E\u53CB\u5584\u3001\u77E5\u8BC6\u6E0A\u535A\u7684\u5BF9\u8BDD\u7CFB\u7EDF\u3002\u5F88\u9AD8\u5174\u8BA4\u8BC6\u60A8!\u6211\u53EF\u4EE5\u5C31\u5404\u79CD\u8BDD\u9898\u4E0E\u60A8\u804A\u5929,\u56DE\u7B54\u95EE\u9898,\u63D0\u4F9B\u5EFA\u8BAE\u548C\u5E2E\u52A9\u3002\u6211\u4F1A\u5C3D\u6700\u5927\u52AA\u529B\u7ED9\u60A8\u6709\u5E2E\u52A9\u7684\u56DE\u590D\u3002\u5E0C\u671B\u6211\u4EEC\u80FD\u6709\u4E2A\u6109\u5FEB\u7684\u4EA4\u6D41!&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1717385918,\x7F  &#x22;model&#x22;: &#x22;claude-3-opus-20240229&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 16,\x7F    &#x22;completion_tokens&#x22;: 126,\x7F    &#x22;total_tokens&#x22;: 142\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH KEY>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH ID>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan-lite"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: &#x22;hunyuan&#x22;\x7F  hunyuanAuthKey: &#x22;<YOUR AUTH KEY>&#x22;\x7F  apiTokens:\x7F    - &#x22;&#x22;\x7F  hunyuanAuthId: &#x22;<YOUR AUTH ID>&#x22;\x7F  timeout: 1200000\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;hunyuan-lite&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<p>\u8BF7\u6C42\u811A\u672C\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--location</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;your higress domain>/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--header </span><span style="--0:#9ECBFF">'Content-Type:  application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u662F\u4E00\u4E2A\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"temperature": 0.3,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"stream": false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --location &#x27;http://<your higress domain>/v1/chat/completions&#x27; \\\x7F--header &#x27;Content-Type:  application/json&#x27; \\\x7F--data &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u4E00\u4E2A\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3,\x7F  &#x22;stream&#x22;: false\x7F}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"fd140c3e-0b69-4b19-849b-d354d32a6162"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"delta"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\u3002"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717493117</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan-lite"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">24</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;fd140c3e-0b69-4b19-849b-d354d32a6162&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;delta&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\u3002&#x22;\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1717493117,\x7F    &#x22;model&#x22;: &#x22;hunyuan-lite&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 15,\x7F        &#x22;completion_tokens&#x22;: 9,\x7F        &#x22;total_tokens&#x22;: 24\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">baidu</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_BAIDU_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: baidu\x7F  apiTokens:\x7F    - &#x22;YOUR_BAIDU_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;ERNIE-4.0&#x22;\x7F    &#x27;*&#x27;: &#x22;ERNIE-4.0&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"as-e90yfg1pk1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u6211\u662F\u6587\u5FC3\u4E00\u8A00\uFF0C\u82F1\u6587\u540D\u662FERNIE Bot\u3002\u6211\u80FD\u591F\u4E0E\u4EBA\u5BF9\u8BDD\u4E92\u52A8\uFF0C\u56DE\u7B54\u95EE\u9898\uFF0C\u534F\u52A9\u521B\u4F5C\uFF0C\u9AD8\u6548\u4FBF\u6377\u5730\u5E2E\u52A9\u4EBA\u4EEC\u83B7\u53D6\u4FE1\u606F\u3001\u77E5\u8BC6\u548C\u7075\u611F\u3002"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717251488</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">4</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">33</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">37</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;as-e90yfg1pk1&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u6211\u662F\u6587\u5FC3\u4E00\u8A00\uFF0C\u82F1\u6587\u540D\u662FERNIE Bot\u3002\u6211\u80FD\u591F\u4E0E\u4EBA\u5BF9\u8BDD\u4E92\u52A8\uFF0C\u56DE\u7B54\u95EE\u9898\uFF0C\u534F\u52A9\u521B\u4F5C\uFF0C\u9AD8\u6548\u4FBF\u6377\u5730\u5E2E\u52A9\u4EBA\u4EEC\u83B7\u53D6\u4FE1\u606F\u3001\u77E5\u8BC6\u548C\u7075\u611F\u3002&#x22;\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1717251488,\x7F    &#x22;model&#x22;: &#x22;ERNIE-4.0&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 4,\x7F        &#x22;completion_tokens&#x22;: 33,\x7F        &#x22;total_tokens&#x22;: 37\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406minimax\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">minimax</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5s-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5t-chat"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: minimax\x7F  apiTokens:\x7F    - &#x22;YOUR_MINIMAX_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-3&#x22;: &#x22;abab6.5s-chat&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;abab6.5g-chat&#x22;\x7F    &#x22;*&#x22;: &#x22;abab6.5t-chat&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"03ac4fcfe1c6cc9c6a60f9d12046e2b4"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u4E2A\u7531MiniMax\u516C\u53F8\u7814\u53D1\u7684\u5927\u578B\u8BED\u8A00\u6A21\u578B\uFF0C\u540D\u4E3AMM\u667A\u80FD\u52A9\u7406\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u56DE\u7B54\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FDB\u884C\u5BF9\u8BDD\u548C\u6267\u884C\u591A\u79CD\u8BED\u8A00\u5904\u7406\u4EFB\u52A1\u3002\u5982\u679C\u4F60\u6709\u4EFB\u4F55\u95EE\u9898\u6216\u9700\u8981\u5E2E\u52A9\uFF0C\u8BF7\u968F\u65F6\u544A\u8BC9\u6211\uFF01"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"MM\u667A\u80FD\u52A9\u7406"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"audio_content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1734155471</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5s-chat"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">116</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_characters"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">70</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">46</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_sensitive"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_sensitive"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_sensitive_type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_sensitive_type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_sensitive_int"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"base_resp"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"status_code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"status_msg"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;03ac4fcfe1c6cc9c6a60f9d12046e2b4&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u4E2A\u7531MiniMax\u516C\u53F8\u7814\u53D1\u7684\u5927\u578B\u8BED\u8A00\u6A21\u578B\uFF0C\u540D\u4E3AMM\u667A\u80FD\u52A9\u7406\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u56DE\u7B54\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FDB\u884C\u5BF9\u8BDD\u548C\u6267\u884C\u591A\u79CD\u8BED\u8A00\u5904\u7406\u4EFB\u52A1\u3002\u5982\u679C\u4F60\u6709\u4EFB\u4F55\u95EE\u9898\u6216\u9700\u8981\u5E2E\u52A9\uFF0C\u8BF7\u968F\u65F6\u544A\u8BC9\u6211\uFF01&#x22;,\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;name&#x22;: &#x22;MM\u667A\u80FD\u52A9\u7406&#x22;,\x7F                &#x22;audio_content&#x22;: &#x22;&#x22;\x7F            }\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1734155471,\x7F    &#x22;model&#x22;: &#x22;abab6.5s-chat&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;total_tokens&#x22;: 116,\x7F        &#x22;total_characters&#x22;: 0,\x7F        &#x22;prompt_tokens&#x22;: 70,\x7F        &#x22;completion_tokens&#x22;: 46\x7F    },\x7F    &#x22;input_sensitive&#x22;: false,\x7F    &#x22;output_sensitive&#x22;: false,\x7F    &#x22;input_sensitive_type&#x22;: 0,\x7F    &#x22;output_sensitive_type&#x22;: 0,\x7F    &#x22;output_sensitive_int&#x22;: 0,\x7F    &#x22;base_resp&#x22;: {\x7F        &#x22;status_code&#x22;: 0,\x7F        &#x22;status_msg&#x22;: &#x22;&#x22;\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-github-\u6A21\u578B\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 GitHub \u6A21\u578B\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">github</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GITHUB_ACCESS_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Phi-3.5-MoE-instruct"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cohere-command-r-08-2024"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"text-embedding-3-large"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-3-large"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: github\x7F  apiTokens:\x7F    - &#x22;YOUR_GITHUB_ACCESS_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;gpt-4o&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;Phi-3.5-MoE-instruct&#x22;\x7F    &#x22;gpt-3.5&#x22;: &#x22;cohere-command-r-08-2024&#x22;\x7F    &#x22;text-embedding-3-large&#x22;: &#x22;text-embedding-3-large&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You are a helpful assistant."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"What is the capital of France?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"top_p"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"max_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;You are a helpful assistant.&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;What is the capital of France?&#x22;\x7F    }\x7F  ],\x7F  &#x22;stream&#x22;: true,\x7F  &#x22;temperature&#x22;: 1.0,\x7F  &#x22;top_p&#x22;: 1.0,\x7F  &#x22;max_tokens&#x22;: 1000,\x7F  &#x22;model&#x22;: &#x22;gpt-4o&#x22;\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The capital of France is Paris."</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1728131051</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-AEy7PU2JImdsD1W6Jw8GigZSEnM2u"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o-2024-08-06"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"system_fingerprint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"fp_67802d9a6d"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">24</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">31</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;message&#x22;: {\x7F        &#x22;content&#x22;: &#x22;The capital of France is Paris.&#x22;,\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;\x7F      }\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1728131051,\x7F  &#x22;id&#x22;: &#x22;chatcmpl-AEy7PU2JImdsD1W6Jw8GigZSEnM2u&#x22;,\x7F  &#x22;model&#x22;: &#x22;gpt-4o-2024-08-06&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;system_fingerprint&#x22;: &#x22;fp_67802d9a6d&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;completion_tokens&#x22;: 7,\x7F    &#x22;prompt_tokens&#x22;: 24,\x7F    &#x22;total_tokens&#x22;: 31\x7F  }\x7F}"><div></div></button></div></figure></div>
<p><strong>\u6587\u672C\u5411\u91CF\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"input"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"first phrase"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"second phrase"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"third phrase"</span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-3-large"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;input&#x22;: [&#x22;first phrase&#x22;, &#x22;second phrase&#x22;, &#x22;third phrase&#x22;],\x7F  &#x22;model&#x22;: &#x22;text-embedding-3-large&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"list"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"data"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"embedding"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.0012583479</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.0020349282</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#FDAEB7;--0fs:italic">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.012051377</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.0053306012</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.0060688322</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-3-large"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;object&#x22;: &#x22;list&#x22;,\x7F  &#x22;data&#x22;: [\x7F    {\x7F      &#x22;object&#x22;: &#x22;embedding&#x22;,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;embedding&#x22;: [\x7F        -0.0012583479,\x7F        0.0020349282,\x7F        ...\x7F        0.012051377,\x7F        -0.0053306012,\x7F        0.0060688322\x7F      ]\x7F    }\x7F  ],\x7F  &#x22;model&#x22;: &#x22;text-embedding-3-large&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 6,\x7F    &#x22;total_tokens&#x22;: 6\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai360</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_360_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo-responsibility-8k"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt2-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"text-embedding-3-small"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding_s1_v1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-pro"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: ai360\x7F  apiTokens:\x7F    - &#x22;YOUR_360_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;360gpt-turbo-responsibility-8k&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;360gpt2-pro&#x22;\x7F    &#x22;gpt-3.5&#x22;: &#x22;360gpt-turbo&#x22;\x7F    &#x22;text-embedding-3-small&#x22;: &#x22;embedding_s1_v1.2&#x22;\x7F    &#x22;*&#x22;: &#x22;360gpt-pro&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4o&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u6211\u662F360\u667A\u8111\uFF0C\u4E00\u4E2A\u5927\u578B\u8BED\u8A00\u6A21\u578B\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FDB\u884C\u5BF9\u8BDD\u7B49\u3002\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1724257207</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"5e5c94a2-d989-40b5-9965-5b971db941fe"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">33</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">24</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">57</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"context"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u6211\u662F360\u667A\u8111\uFF0C\u4E00\u4E2A\u5927\u578B\u8BED\u8A00\u6A21\u578B\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FDB\u884C\u5BF9\u8BDD\u7B49\u3002\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;&#x22;,\x7F      &#x22;index&#x22;: 0\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1724257207,\x7F  &#x22;id&#x22;: &#x22;5e5c94a2-d989-40b5-9965-5b971db941fe&#x22;,\x7F  &#x22;model&#x22;: &#x22;360gpt-turbo&#x22;,\x7F  &#x22;object&#x22;: &#x22;&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;completion_tokens&#x22;: 33,\x7F    &#x22;prompt_tokens&#x22;: 24,\x7F    &#x22;total_tokens&#x22;: 57\x7F  },\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ],\x7F  &#x22;context&#x22;: null\x7F}"><div></div></button></div></figure></div>
<p><strong>\u6587\u672C\u5411\u91CF\u8BF7\u6C42\u793A\u4F8B</strong></p>
<p>URL: <a href="http://your-domain/v1/embeddings" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://your-domain/v1/embeddings</a></p>
<p>\u8BF7\u6C42\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"input"</span><span style="--0:#E1E4E8">:[</span><span style="--0:#9ECBFF">"\u4F60\u597D"</span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"text-embedding-3-small"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;input&#x22;:[&#x22;\u4F60\u597D&#x22;],\x7F  &#x22;model&#x22;:&#x22;text-embedding-3-small&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"data"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"embedding"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.011237</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.015433</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#FDAEB7;--0fs:italic">...</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.028946</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.052778</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.003768</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.007917</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.042201</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding_s1_v1.2"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;data&#x22;: [\x7F    {\x7F      &#x22;embedding&#x22;: [\x7F        -0.011237,\x7F        -0.015433,\x7F        ...,\x7F        -0.028946,\x7F        -0.052778,\x7F        0.003768,\x7F        -0.007917,\x7F        -0.042201\x7F      ],\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;object&#x22;: &#x22;&#x22;\x7F    }\x7F  ],\x7F  &#x22;model&#x22;: &#x22;embedding_s1_v1.2&#x22;,\x7F  &#x22;object&#x22;: &#x22;&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 2,\x7F    &#x22;total_tokens&#x22;: 2\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-cloudflare-workers-ai-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Cloudflare Workers AI \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cloudflare</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_WORKERS_AI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cloudflareAccountId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_CLOUDFLARE_ACCOUNT_ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"@cf/meta/llama-3-8b-instruct"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: cloudflare\x7F  apiTokens:\x7F    - &#x22;YOUR_WORKERS_AI_API_TOKEN&#x22;\x7F  cloudflareAccountId: &#x22;YOUR_CLOUDFLARE_ACCOUNT_ID&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;@cf/meta/llama-3-8b-instruct&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"max_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1024</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5&#x22;,\x7F  &#x22;max_tokens&#x22;: 1024,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"id-1720367803430"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1720367803</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"@cf/meta/llama-3-8b-instruct"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture.</span><span style="--0:#79B8FF">\\n\\n</span><span style="--0:#9ECBFF">I'm a large language model, which means I've been trained on a massive dataset of text from the internet and can generate human-like responses. I can understand natural language and respond accordingly, making me suitable for tasks such as:</span><span style="--0:#79B8FF">\\n\\n</span><span style="--0:#9ECBFF">* Answering questions on various topics</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">* Generating text based on a given prompt</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">* Translating text from one language to another</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">* Summarizing long pieces of text</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">* Creating chatbot dialogues</span><span style="--0:#79B8FF">\\n\\n</span><span style="--0:#9ECBFF">I'm constantly learning and improving, so the more conversations I have with users like you, the better I'll become."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;id-1720367803430&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1720367803,\x7F  &#x22;model&#x22;: &#x22;@cf/meta/llama-3-8b-instruct&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I&#x27;m not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture.\\n\\nI&#x27;m a large language model, which means I&#x27;ve been trained on a massive dataset of text from the internet and can generate human-like responses. I can understand natural language and respond accordingly, making me suitable for tasks such as:\\n\\n* Answering questions on various topics\\n* Generating text based on a given prompt\\n* Translating text from one language to another\\n* Summarizing long pieces of text\\n* Creating chatbot dialogues\\n\\nI&#x27;m constantly learning and improving, so the more conversations I have with users like you, the better I&#x27;ll become.&#x22;\x7F      },\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406spark\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406Spark\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">spark</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"APIKey:APISecret"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3.5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"general"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: spark\x7F  apiTokens:\x7F    - &#x22;APIKey:APISecret&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;generalv3.5&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;generalv3&#x22;\x7F    &#x22;*&#x22;: &#x22;general&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-4o&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;system&#x22;,\x7F            &#x22;content&#x22;: &#x22;\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01&#x22;\x7F        },\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cha000c23c6@dx190ef0b4b96b8f2532"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF0C\u64C5\u957F\u7F16\u7A0B\u548C\u89E3\u51B3\u6280\u672F\u95EE\u9898\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1721997415</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3.5"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">19</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">29</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;cha000c23c6@dx190ef0b4b96b8f2532&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF0C\u64C5\u957F\u7F16\u7A0B\u548C\u89E3\u51B3\u6280\u672F\u95EE\u9898\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F&#x22;\x7F            }\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1721997415,\x7F    &#x22;model&#x22;: &#x22;generalv3.5&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 10,\x7F        &#x22;completion_tokens&#x22;: 19,\x7F        &#x22;total_tokens&#x22;: 29\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-gemini-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 gemini \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gemini</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GEMINI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gemini-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">geminiSafetySetting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_SEXUALLY_EXPLICIT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HATE_SPEECH"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HARASSMENT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_DANGEROUS_CONTENT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: gemini\x7F  apiTokens:\x7F    - &#x22;YOUR_GEMINI_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;gemini-pro&#x22;\x7F  geminiSafetySetting:\x7F    &#x22;HARM_CATEGORY_SEXUALLY_EXPLICIT&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HATE_SPEECH&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HARASSMENT&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_DANGEROUS_CONTENT&#x22; :&#x22;BLOCK_NONE&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-3.5&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1722756984</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gemini-pro"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">29</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">34</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities.&#x22;\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1722756984,\x7F    &#x22;model&#x22;: &#x22;gemini-pro&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 5,\x7F        &#x22;completion_tokens&#x22;: 29,\x7F        &#x22;total_tokens&#x22;: 34\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-deepl-\u6587\u672C\u7FFB\u8BD1\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 DeepL \u6587\u672C\u7FFB\u8BD1\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">deepl</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DEEPL_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">targetLang</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ZH"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: deepl\x7F  apiTokens:\x7F    - &#x22;YOUR_DEEPL_API_TOKEN&#x22;\x7F  targetLang: &#x22;ZH&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong>
\u6B64\u5904 <code dir="auto">model</code> \u8868\u793A DeepL \u7684\u670D\u52A1\u7C7B\u578B\uFF0C\u53EA\u80FD\u586B <code dir="auto">Free</code> \u6216 <code dir="auto">Pro</code>\u3002<code dir="auto">content</code> \u4E2D\u8BBE\u7F6E\u9700\u8981\u7FFB\u8BD1\u7684\u6587\u672C\uFF1B\u5728 <code dir="auto">role: system</code> \u7684 <code dir="auto">content</code> \u4E2D\u53EF\u4EE5\u5305\u542B\u53EF\u80FD\u5F71\u54CD\u7FFB\u8BD1\u4F46\u672C\u8EAB\u4E0D\u4F1A\u88AB\u7FFB\u8BD1\u7684\u4E0A\u4E0B\u6587\uFF0C\u4F8B\u5982\u7FFB\u8BD1\u4EA7\u54C1\u540D\u79F0\u65F6\uFF0C\u53EF\u4EE5\u5C06\u4EA7\u54C1\u63CF\u8FF0\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F20\u9012\uFF0C\u8FD9\u79CD\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u53EF\u80FD\u4F1A\u63D0\u9AD8\u7FFB\u8BD1\u7684\u8D28\u91CF\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Free"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"money"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sit by the bank"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"a bank in China"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;Free&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;money&#x22;\x7F    },\x7F    {\x7F      &#x22;content&#x22;: &#x22;sit by the bank&#x22;\x7F    },\x7F    {\x7F      &#x22;content&#x22;: &#x22;a bank in China&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"EN"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5750\u5E84"</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"EN"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4E2D\u56FD\u94F6\u884C"</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1722747752</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Free"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: { &#x22;name&#x22;: &#x22;EN&#x22;, &#x22;role&#x22;: &#x22;assistant&#x22;, &#x22;content&#x22;: &#x22;\u5750\u5E84&#x22; }\x7F    },\x7F    {\x7F      &#x22;index&#x22;: 1,\x7F      &#x22;message&#x22;: { &#x22;name&#x22;: &#x22;EN&#x22;, &#x22;role&#x22;: &#x22;assistant&#x22;, &#x22;content&#x22;: &#x22;\u4E2D\u56FD\u94F6\u884C&#x22; }\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1722747752,\x7F  &#x22;model&#x22;: &#x22;Free&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {}\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-together-ai-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Together-AI \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">together-ai</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_TOGETHER_AI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Qwen/Qwen2.5-72B-Instruct-Turbo"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: together-ai\x7F  apiTokens:\x7F    - &#x22;YOUR_TOGETHER_AI_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;Qwen/Qwen2.5-72B-Instruct-Turbo&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Qwen/Qwen2.5-72B-Instruct-Turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;Qwen/Qwen2.5-72B-Instruct-Turbo&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F        }\x7F    ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"8f5809d54b73efac"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1734785851</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Qwen/Qwen2.5-72B-Instruct-Turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"prompt"</span><span style="--0:#E1E4E8">: [],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"eos"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"seed"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">12830868308626506000</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"I am Qwen, a large language model created by Alibaba Cloud. I am designed to assist users in generating various types of text, such as articles, stories, poems, and more, as well as answering questions and providing information on a wide range of topics. How can I assist you today?"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"tool_calls"</span><span style="--0:#E1E4E8">: []</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">33</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">61</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">94</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;8f5809d54b73efac&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1734785851,\x7F  &#x22;model&#x22;: &#x22;Qwen/Qwen2.5-72B-Instruct-Turbo&#x22;,\x7F  &#x22;prompt&#x22;: [],\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;finish_reason&#x22;: &#x22;eos&#x22;,\x7F      &#x22;seed&#x22;: 12830868308626506000,\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;I am Qwen, a large language model created by Alibaba Cloud. I am designed to assist users in generating various types of text, such as articles, stories, poems, and more, as well as answering questions and providing information on a wide range of topics. How can I assist you today?&#x22;,\x7F        &#x22;tool_calls&#x22;: []\x7F      }\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 33,\x7F    &#x22;completion_tokens&#x22;: 61,\x7F    &#x22;total_tokens&#x22;: 94\x7F  }\x7F}"><div></div></button></div></figure></div>
<h2 id="\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B">\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="kubernetes-\u793A\u4F8B">Kubernetes \u793A\u4F8B</h3>
<p>\u4EE5\u4E0B\u4EE5\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1\u4E3A\u4F8B\uFF0C\u5C55\u793A\u5B8C\u6574\u7684\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai-proxy-groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.groq.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-server-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"on"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/resource-definer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">&#x3C;YOUR-DOMAIN></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.groq.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: ai-proxy-groq\x7F  namespace: higress-system\x7Fspec:\x7F  matchRules:\x7F  - config:\x7F      provider:\x7F        type: groq\x7F        apiTokens:\x7F          - &#x22;YOUR_API_TOKEN&#x22;\x7F    ingress:\x7F    - groq\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: HTTPS\x7F    higress.io/destination: groq.dns\x7F    higress.io/proxy-ssl-name: api.groq.com\x7F    higress.io/proxy-ssl-server-name: &#x22;on&#x22;\x7F  labels:\x7F    higress.io/resource-definer: higress\x7F  name: groq\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: <YOUR-DOMAIN>\x7F    http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix\x7F---\x7FapiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: api.groq.com\x7F    name: groq\x7F    port: 443\x7F    type: dns"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://&#x3C;YOUR-DOMAIN>/v1/chat/completions"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "llama3-8b-8192",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://<YOUR-DOMAIN>/v1/chat/completions&#x22; -H &#x22;Content-Type: application/json&#x22; -d &#x27;{\x7F  &#x22;model&#x22;: &#x22;llama3-8b-8192&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<h3 id="docker-compose-\u793A\u4F8B">Docker-Compose \u793A\u4F8B</h3>
<p><code dir="auto">docker-compose.yml</code> \u914D\u7F6E\u6587\u4EF6\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.7'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">envoy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">entrypoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/usr/local/bin/envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\u65B9\u4FBF\u8C03\u8BD5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">command</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">-c /etc/envoy/envoy.yaml --component-log-level wasm:debug</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-net</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"10000:10000"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./envoy.yaml:/etc/envoy/envoy.yaml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./plugin.wasm:/etc/envoy/plugin.wasm</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress-net</span><span style="--0:#E1E4E8">: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="version: &#x27;3.7&#x27;\x7Fservices:\x7F  envoy:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20\x7F    entrypoint: /usr/local/bin/envoy\x7F    # \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\u65B9\u4FBF\u8C03\u8BD5\x7F    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug\x7F    networks:\x7F      - higress-net\x7F    ports:\x7F      - &#x22;10000:10000&#x22;\x7F    volumes:\x7F      - ./envoy.yaml:/etc/envoy/envoy.yaml\x7F      - ./plugin.wasm:/etc/envoy/plugin.wasm\x7Fnetworks:\x7F  higress-net: {}"><div></div></button></div></figure></div>
<p><code dir="auto">envoy.yaml</code> \u914D\u7F6E\u6587\u4EF6\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9901</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">static_resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">listener_0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">scheme_header_transformation</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">scheme_to_overwrite</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">stat_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress_http</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#99A0A6"># Output envoy logs to stdout</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">access_log</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.access_loggers.stdout</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#99A0A6"># Modify as required</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">route_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_route</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">virtual_hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">domains</span><span style="--0:#E1E4E8">: [ </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> ]</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">routes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">route</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">cluster</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">300s</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/udpa.type.v1.TypedStruct</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">type_url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.wasm.runtime.v8</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                                </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/etc/envoy/plugin.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                              </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">"provider": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                  </span></span><span style="--0:#9ECBFF">"type": "claude",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                  </span></span><span style="--0:#9ECBFF">"apiTokens": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                    </span></span><span style="--0:#9ECBFF">"YOUR_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                              </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">clusters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">connect_timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">30s</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LOGICAL_DNS</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dns_lookup_family</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">V4_ONLY</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lb_policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ROUND_ROBIN</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">load_assignment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">cluster_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">lb_endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.anthropic.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># API \u670D\u52A1\u5730\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">transport_socket</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.transport_sockets.tls</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">"sni"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api.anthropic.com"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="admin:\x7F  address:\x7F    socket_address:\x7F      protocol: TCP\x7F      address: 0.0.0.0\x7F      port_value: 9901\x7Fstatic_resources:\x7F  listeners:\x7F    - name: listener_0\x7F      address:\x7F        socket_address:\x7F          protocol: TCP\x7F          address: 0.0.0.0\x7F          port_value: 10000\x7F      filter_chains:\x7F        - filters:\x7F            - name: envoy.filters.network.http_connection_manager\x7F              typed_config:\x7F                &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\x7F                scheme_header_transformation:\x7F                  scheme_to_overwrite: https\x7F                stat_prefix: ingress_http\x7F                # Output envoy logs to stdout\x7F                access_log:\x7F                  - name: envoy.access_loggers.stdout\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog\x7F                # Modify as required\x7F                route_config:\x7F                  name: local_route\x7F                  virtual_hosts:\x7F                    - name: local_service\x7F                      domains: [ &#x22;*&#x22; ]\x7F                      routes:\x7F                        - match:\x7F                            prefix: &#x22;/&#x22;\x7F                          route:\x7F                            cluster: claude\x7F                            timeout: 300s\x7F                http_filters:\x7F                  - name: claude\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/udpa.type.v1.TypedStruct\x7F                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F                      value:\x7F                        config:\x7F                          name: claude\x7F                          vm_config:\x7F                            runtime: envoy.wasm.runtime.v8\x7F                            code:\x7F                              local:\x7F                                filename: /etc/envoy/plugin.wasm\x7F                          configuration:\x7F                            &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F                            value: | # \u63D2\u4EF6\u914D\u7F6E\x7F                              {\x7F                                &#x22;provider&#x22;: {\x7F                                  &#x22;type&#x22;: &#x22;claude&#x22;,\x7F                                  &#x22;apiTokens&#x22;: [\x7F                                    &#x22;YOUR_API_TOKEN&#x22;\x7F                                  ]\x7F                                }\x7F                              }\x7F                  - name: envoy.filters.http.router\x7F  clusters:\x7F    - name: claude\x7F      connect_timeout: 30s\x7F      type: LOGICAL_DNS\x7F      dns_lookup_family: V4_ONLY\x7F      lb_policy: ROUND_ROBIN\x7F      load_assignment:\x7F        cluster_name: claude\x7F        endpoints:\x7F          - lb_endpoints:\x7F              - endpoint:\x7F                  address:\x7F                    socket_address:\x7F                      address: api.anthropic.com # API \u670D\u52A1\u5730\u5740\x7F                      port_value: 443\x7F      transport_socket:\x7F        name: envoy.transport_sockets.tls\x7F        typed_config:\x7F          &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext\x7F          &#x22;sni&#x22;: &#x22;api.anthropic.com&#x22;"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost:10000/v1/chat/completions"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "claude-3-opus-20240229",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"max_tokens": 1024,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://localhost:10000/v1/chat/completions&#x22;  -H &#x22;Content-Type: application/json&#x22;  -d &#x27;{\x7F  &#x22;model&#x22;: &#x22;claude-3-opus-20240229&#x22;,\x7F  &#x22;max_tokens&#x22;: 1024,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>`,e={title:"AI \u4EE3\u7406",keywords:["AI\u7F51\u5173","AI\u4EE3\u7406"],description:"AI \u4EE3\u7406\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-proxy.md",p=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`AI \u4EE3\u7406\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E OpenAI API \u5951\u7EA6\u7684 AI \u4EE3\u7406\u529F\u80FD\u3002\u76EE\u524D\u652F\u6301 OpenAI\u3001Azure OpenAI\u3001\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09\u548C\u901A\u4E49\u5343\u95EE\u7B49 AI
\u670D\u52A1\u63D0\u4F9B\u5546\u3002

> **\u6CE8\u610F\uFF1A**

> \u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D \`/v1/chat/completions\` \u65F6\uFF0C\u5BF9\u5E94\u6587\u751F\u6587\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u751F\u6587\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u751F\u6587\u534F\u8BAE

> \u8BF7\u6C42\u8DEF\u5F84\u540E\u7F00\u5339\u914D \`/v1/embeddings\` \u65F6\uFF0C\u5BF9\u5E94\u6587\u672C\u5411\u91CF\u573A\u666F\uFF0C\u4F1A\u7528 OpenAI \u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE\u89E3\u6790\u8BF7\u6C42 Body\uFF0C\u518D\u8F6C\u6362\u4E3A\u5BF9\u5E94 LLM \u5382\u5546\u7684\u6587\u672C\u5411\u91CF\u534F\u8BAE

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`100\`


## \u914D\u7F6E\u5B57\u6BB5

### \u57FA\u672C\u914D\u7F6E

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0               |
|------------|--------|------|-----|------------------|
| \`provider\` | object | \u5FC5\u586B   | -   | \u914D\u7F6E\u76EE\u6807 AI \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F |

\`provider\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                        |
|------------------| --------------- | -------- | ------ |-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| \`type\`           | string          | \u5FC5\u586B     | -      | AI \u670D\u52A1\u63D0\u4F9B\u5546\u540D\u79F0                                                                                                                                                |
| \`apiTokens\`      | array of string | \u975E\u5FC5\u586B   | -      | \u7528\u4E8E\u5728\u8BBF\u95EE AI \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002\u5982\u679C\u914D\u7F6E\u4E86\u591A\u4E2A token\uFF0C\u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42\u65F6\u968F\u673A\u8FDB\u884C\u9009\u62E9\u3002\u90E8\u5206\u670D\u52A1\u63D0\u4F9B\u5546\u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A token\u3002                                                                                     |
| \`timeout\`        | number          | \u975E\u5FC5\u586B   | -      | \u8BBF\u95EE AI \u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A 120000\uFF0C\u5373 2 \u5206\u949F                                                                                                                    |
| \`modelMapping\`   | map of string   | \u975E\u5FC5\u586B   | -      | AI \u6A21\u578B\u6620\u5C04\u8868\uFF0C\u7528\u4E8E\u5C06\u8BF7\u6C42\u4E2D\u7684\u6A21\u578B\u540D\u79F0\u6620\u5C04\u4E3A\u670D\u52A1\u63D0\u4F9B\u5546\u652F\u6301\u6A21\u578B\u540D\u79F0\u3002<br/>1. \u652F\u6301\u524D\u7F00\u5339\u914D\u3002\u4F8B\u5982\u7528 "gpt-3-*" \u5339\u914D\u6240\u6709\u540D\u79F0\u4EE5\u201Cgpt-3-\u201D\u5F00\u5934\u7684\u6A21\u578B\uFF1B<br/>2. \u652F\u6301\u4F7F\u7528 "*" \u4E3A\u952E\u6765\u914D\u7F6E\u901A\u7528\u515C\u5E95\u6620\u5C04\u5173\u7CFB\uFF1B<br/>3. \u5982\u679C\u6620\u5C04\u7684\u76EE\u6807\u540D\u79F0\u4E3A\u7A7A\u5B57\u7B26\u4E32 ""\uFF0C\u5219\u8868\u793A\u4FDD\u7559\u539F\u6A21\u578B\u540D\u79F0\u3002 |
| \`protocol\`       | string          | \u975E\u5FC5\u586B   | -      | \u63D2\u4EF6\u5BF9\u5916\u63D0\u4F9B\u7684 API \u63A5\u53E3\u5951\u7EA6\u3002\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u53D6\u503C\uFF1Aopenai\uFF08\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 OpenAI \u7684\u63A5\u53E3\u5951\u7EA6\uFF09\u3001original\uFF08\u4F7F\u7528\u76EE\u6807\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u539F\u59CB\u63A5\u53E3\u5951\u7EA6\uFF09                                                                          |
| \`context\`        | object          | \u975E\u5FC5\u586B   | -      | \u914D\u7F6E AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u4FE1\u606F                                                                                                                                             |
| \`customSettings\` | array of customSetting | \u975E\u5FC5\u586B   | -      | \u4E3AAI\u8BF7\u6C42\u6307\u5B9A\u8986\u76D6\u6216\u8005\u586B\u5145\u53C2\u6570                                                                                                                                           |
| \`failover\`       | object | \u975E\u5FC5\u586B   | -      | \u914D\u7F6E apiToken \u7684 failover \u7B56\u7565\uFF0C\u5F53 apiToken \u4E0D\u53EF\u7528\u65F6\uFF0C\u5C06\u5176\u79FB\u51FA apiToken \u5217\u8868\uFF0C\u5F85\u5065\u5EB7\u68C0\u6D4B\u901A\u8FC7\u540E\u91CD\u65B0\u6DFB\u52A0\u56DE apiToken \u5217\u8868                                                                      |
| \`retryOnFailure\` | object | \u975E\u5FC5\u586B   | -      | \u5F53\u8BF7\u6C42\u5931\u8D25\u65F6\u7ACB\u5373\u8FDB\u884C\u91CD\u8BD5                                                                                                                                              |  

\`context\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|---------------|--------|------|-----|----------------------------------|
| \`fileUrl\`     | string | \u5FC5\u586B   | -   | \u4FDD\u5B58 AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u7684\u6587\u4EF6 URL\u3002\u4EC5\u652F\u6301\u7EAF\u6587\u672C\u7C7B\u578B\u7684\u6587\u4EF6\u5185\u5BB9 |
| \`serviceName\` | string | \u5FC5\u586B   | -   | URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u5B8C\u6574\u540D\u79F0        |
| \`servicePort\` | number | \u5FC5\u586B   | -   | URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u8BBF\u95EE\u7AEF\u53E3        |


\`customSettings\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B              | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                         |
| ----------- | --------------------- | -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| \`name\`      | string                | \u5FC5\u586B     | -      | \u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u540D\u79F0\uFF0C\u4F8B\u5982\`max_tokens\`                                                                                       |
| \`value\`     | string/int/float/bool | \u5FC5\u586B     | -      | \u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u503C\uFF0C\u4F8B\u59820                                                                                                    |
| \`mode\`      | string                | \u975E\u5FC5\u586B   | "auto" | \u53C2\u6570\u8BBE\u7F6E\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A"auto"\u6216\u8005"raw"\uFF0C\u5982\u679C\u4E3A"auto"\u5219\u4F1A\u81EA\u52A8\u6839\u636E\u534F\u8BAE\u5BF9\u53C2\u6570\u540D\u505A\u6539\u5199\uFF0C\u5982\u679C\u4E3A"raw"\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u5199\u548C\u9650\u5236\u68C0\u67E5 |
| \`overwrite\` | bool                  | \u975E\u5FC5\u586B   | true   | \u5982\u679C\u4E3Afalse\u5219\u53EA\u5728\u7528\u6237\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E2A\u53C2\u6570\u65F6\u586B\u5145\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u76F4\u63A5\u8986\u76D6\u7528\u6237\u539F\u6709\u7684\u53C2\u6570\u8BBE\u7F6E                                            |


custom-setting\u4F1A\u9075\u5FAA\u5982\u4E0B\u8868\u683C\uFF0C\u6839\u636E\`name\`\u548C\u534F\u8BAE\u6765\u66FF\u6362\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u7528\u6237\u9700\u8981\u586B\u5199\u8868\u683C\u4E2D\`settingName\`\u5217\u4E2D\u5B58\u5728\u7684\u503C\u3002\u4F8B\u5982\u7528\u6237\u5C06\`name\`\u8BBE\u7F6E\u4E3A\`max_tokens\`\uFF0C\u5728openai\u534F\u8BAE\u4E2D\u4F1A\u66FF\u6362\`max_tokens\`\uFF0C\u5728gemini\u4E2D\u4F1A\u66FF\u6362\`maxOutputTokens\`\u3002
\`none\`\u8868\u793A\u8BE5\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\u3002\u5982\u679C\`name\`\u4E0D\u5728\u6B64\u8868\u683C\u4E2D\u6216\u8005\u5BF9\u5E94\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\uFF0C\u540C\u65F6\u6CA1\u6709\u8BBE\u7F6Eraw\u6A21\u5F0F\uFF0C\u5219\u914D\u7F6E\u4E0D\u4F1A\u751F\u6548\u3002


| settingName | openai      | baidu             | spark       | qwen        | gemini          | hunyuan     | claude      | minimax            |
| ----------- | ----------- | ----------------- | ----------- | ----------- | --------------- | ----------- | ----------- | ------------------ |
| max_tokens  | max_tokens  | max_output_tokens | max_tokens  | max_tokens  | maxOutputTokens | none        | max_tokens  | tokens_to_generate |
| temperature | temperature | temperature       | temperature | temperature | temperature     | Temperature | temperature | temperature        |
| top_p       | top_p       | top_p             | none        | top_p       | topP            | TopP        | top_p       | top_p              |
| top_k       | none        | none              | top_k       | none        | topK            | none        | top_k       | none               |
| seed        | seed        | none              | none        | seed        | none            | none        | none        | none               |

\u5982\u679C\u542F\u7528\u4E86raw\u6A21\u5F0F\uFF0Ccustom-setting\u4F1A\u76F4\u63A5\u7528\u8F93\u5165\u7684\`name\`\u548C\`value\`\u53BB\u66F4\u6539\u8BF7\u6C42\u4E2D\u7684json\u5185\u5BB9\uFF0C\u800C\u4E0D\u5BF9\u53C2\u6570\u540D\u79F0\u505A\u4EFB\u4F55\u9650\u5236\u548C\u4FEE\u6539\u3002
\u5BF9\u4E8E\u5927\u591A\u6570\u534F\u8BAE\uFF0Ccustom-setting\u90FD\u4F1A\u5728json\u5185\u5BB9\u7684\u6839\u8DEF\u5F84\u4FEE\u6539\u6216\u8005\u586B\u5145\u53C2\u6570\u3002\u5BF9\u4E8E\`qwen\`\u534F\u8BAE\uFF0Cai-proxy\u4F1A\u5728json\u7684\`parameters\`\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002\u5BF9\u4E8E\`gemini\`\u534F\u8BAE\uFF0C\u5219\u4F1A\u5728\`generation_config\`\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002

\`failover\` \u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42            | \u9ED8\u8BA4\u503C   | \u63CF\u8FF0                          |
|------------------|--------|-----------------|-------|-----------------------------|
| enabled | bool   | \u975E\u5FC5\u586B             | false | \u662F\u5426\u542F\u7528 apiToken \u7684 failover \u673A\u5236 |
| failureThreshold | int    | \u975E\u5FC5\u586B             | 3     | \u89E6\u53D1 failover \u8FDE\u7EED\u8BF7\u6C42\u5931\u8D25\u7684\u9608\u503C\uFF08\u6B21\u6570\uFF09   |
| successThreshold | int    | \u975E\u5FC5\u586B             | 1     | \u5065\u5EB7\u68C0\u6D4B\u7684\u6210\u529F\u9608\u503C\uFF08\u6B21\u6570\uFF09               |
| healthCheckInterval | int    | \u975E\u5FC5\u586B             | 5000  | \u5065\u5EB7\u68C0\u6D4B\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2              |
| healthCheckTimeout | int    | \u975E\u5FC5\u586B             | 5000  | \u5065\u5EB7\u68C0\u6D4B\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2              |
| healthCheckModel | string | \u542F\u7528 failover \u65F6\u5FC5\u586B |      | \u5065\u5EB7\u68C0\u6D4B\u4F7F\u7528\u7684\u6A21\u578B                   |

\`retryOnFailure\` \u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42            | \u9ED8\u8BA4\u503C   | \u63CF\u8FF0          |
|------------------|--------|-----------------|-------|-------------|
| enabled | bool   | \u975E\u5FC5\u586B             | false | \u662F\u5426\u542F\u7528\u5931\u8D25\u8BF7\u6C42\u91CD\u8BD5  |
| maxRetries | int    | \u975E\u5FC5\u586B             | 1     | \u6700\u5927\u91CD\u8BD5\u6B21\u6570      |
| retryTimeout | int    | \u975E\u5FC5\u586B             | 30000 | \u91CD\u8BD5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |

### \u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E

#### OpenAI

OpenAI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`openai\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B:

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                          |
|-------------------|----------|----------|--------|-------------------------------------------------------------------------------|
| \`openaiCustomUrl\` | string   | \u975E\u5FC5\u586B   | -      | \u57FA\u4E8EOpenAI\u534F\u8BAE\u7684\u81EA\u5B9A\u4E49\u540E\u7AEFURL\uFF0C\u4F8B\u5982: www.example.com/myai/v1/chat/completions |
| \`responseJsonSchema\` | object | \u975E\u5FC5\u586B | - | \u9884\u5148\u5B9A\u4E49OpenAI\u54CD\u5E94\u9700\u6EE1\u8DB3\u7684Json Schema, \u6CE8\u610F\u76EE\u524D\u4EC5\u7279\u5B9A\u7684\u51E0\u79CD\u6A21\u578B\u652F\u6301\u8BE5\u7528\u6CD5|


#### Azure OpenAI

Azure OpenAI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`azure\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                           |
|-------------------|--------|------|-----|----------------------------------------------|
| \`azureServiceUrl\` | string | \u5FC5\u586B   | -   | Azure OpenAI \u670D\u52A1\u7684 URL\uFF0C\u987B\u5305\u542B \`api-version\` \u67E5\u8BE2\u53C2\u6570\u3002 |

**\u6CE8\u610F\uFF1A** Azure OpenAI \u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A API Token\u3002

#### \u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09

\u6708\u4E4B\u6697\u9762\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`moonshot\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                          |
|------------------|--------|------|-----|-------------------------------------------------------------|
| \`moonshotFileId\` | string | \u975E\u5FC5\u586B  | -   | \u901A\u8FC7\u6587\u4EF6\u63A5\u53E3\u4E0A\u4F20\u81F3\u6708\u4E4B\u6697\u9762\u7684\u6587\u4EF6 ID\uFF0C\u5176\u5185\u5BB9\u5C06\u88AB\u7528\u505A AI \u5BF9\u8BDD\u7684\u4E0A\u4E0B\u6587\u3002\u4E0D\u53EF\u4E0E \`context\` \u5B57\u6BB5\u540C\u65F6\u914D\u7F6E\u3002 |

#### \u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09

\u901A\u4E49\u5343\u95EE\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`qwen\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                 | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                               |
|--------------------|-----------------|------|-----|------------------------------------------------------------------|
| \`qwenEnableSearch\` | boolean         | \u975E\u5FC5\u586B  | -   | \u662F\u5426\u542F\u7528\u901A\u4E49\u5343\u95EE\u5185\u7F6E\u7684\u4E92\u8054\u7F51\u641C\u7D22\u529F\u80FD\u3002                          |
| \`qwenFileIds\`      | array of string | \u975E\u5FC5\u586B  | -   | \u901A\u8FC7\u6587\u4EF6\u63A5\u53E3\u4E0A\u4F20\u81F3Dashscope\u7684\u6587\u4EF6 ID\uFF0C\u5176\u5185\u5BB9\u5C06\u88AB\u7528\u505A AI \u5BF9\u8BDD\u7684\u4E0A\u4E0B\u6587\u3002\u4E0D\u53EF\u4E0E \`context\` \u5B57\u6BB5\u540C\u65F6\u914D\u7F6E\u3002 |

#### \u767E\u5DDD\u667A\u80FD (Baichuan AI)

\u767E\u5DDD\u667A\u80FD\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`baichuan\` \u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### \u96F6\u4E00\u4E07\u7269\uFF08Yi\uFF09

\u96F6\u4E00\u4E07\u7269\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`yi\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### \u667A\u8C31AI\uFF08Zhipu AI\uFF09

\u667A\u8C31AI\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`zhipuai\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### DeepSeek\uFF08DeepSeek\uFF09

DeepSeek\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`deepseek\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Groq

Groq \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`groq\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### \u6587\u5FC3\u4E00\u8A00\uFF08Baidu\uFF09

\u6587\u5FC3\u4E00\u8A00\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`baidu\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### 360\u667A\u8111

360\u667A\u8111\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`ai360\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### GitHub\u6A21\u578B

GitHub\u6A21\u578B\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`github\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Mistral

Mistral \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`mistral\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### MiniMax

MiniMax\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`minimax\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42                       | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                             |
| ---------------- | -------- | ------------------------------ | ------ |----------------------------------------------------------------|
| \`minimaxApiType\` | string   | v2 \u548C pro \u4E2D\u9009\u586B\u4E00\u9879           | v2     | v2 \u4EE3\u8868 ChatCompletion v2 API\uFF0Cpro \u4EE3\u8868 ChatCompletion Pro API      |
| \`minimaxGroupId\` | string   | \`minimaxApiType\` \u4E3A pro \u65F6\u5FC5\u586B | -      | \`minimaxApiType\` \u4E3A pro \u65F6\u4F7F\u7528 ChatCompletion Pro API\uFF0C\u9700\u8981\u8BBE\u7F6E groupID |

#### Anthropic Claude

Anthropic Claude \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`claude\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|-----------|--------|------|-----|----------------------------------|
| \`claudeVersion\` | string | \u53EF\u9009   | -   | Claude \u670D\u52A1\u7684 API \u7248\u672C\uFF0C\u9ED8\u8BA4\u4E3A 2023-06-01 |

#### Ollama

Ollama \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`ollama\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                           |
|-------------------|--------|------|-----|----------------------------------------------|
| \`ollamaServerHost\` | string | \u5FC5\u586B   | -   | Ollama \u670D\u52A1\u5668\u7684\u4E3B\u673A\u5730\u5740 |
| \`ollamaServerPort\` | number | \u5FC5\u586B   | -   | Ollama \u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53F7\uFF0C\u9ED8\u8BA4\u4E3A11434 |

#### \u6DF7\u5143

\u6DF7\u5143\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`hunyuan\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                           |
|-------------------|--------|------|-----|----------------------------------------------|
| \`hunyuanAuthId\` | string | \u5FC5\u586B   | -   | \u6DF7\u5143\u7528\u4E8Ev3\u7248\u672C\u8BA4\u8BC1\u7684id |
| \`hunyuanAuthKey\` | string | \u5FC5\u586B   | -   | \u6DF7\u5143\u7528\u4E8Ev3\u7248\u672C\u8BA4\u8BC1\u7684key |

#### \u9636\u8DC3\u661F\u8FB0 (Stepfun)

\u9636\u8DC3\u661F\u8FB0\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`stepfun\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Cloudflare Workers AI

Cloudflare Workers AI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`cloudflare\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                         |
|-------------------|--------|------|-----|----------------------------------------------------------------------------------------------------------------------------|
| \`cloudflareAccountId\` | string | \u5FC5\u586B   | -   | [Cloudflare Account ID](https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id) |

#### \u661F\u706B (Spark)

\u661F\u706B\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`spark\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

\u8BAF\u98DE\u661F\u706B\u8BA4\u77E5\u5927\u6A21\u578B\u7684\`apiTokens\`\u5B57\u6BB5\u503C\u4E3A\`APIKey:APISecret\`\u3002\u5373\u586B\u5165\u81EA\u5DF1\u7684APIKey\u4E0EAPISecret\uFF0C\u5E76\u4EE5\`:\`\u5206\u9694\u3002

#### Gemini

Gemini \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`gemini\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0                  | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                              |
| --------------------- | -------- | -------- |-----|-------------------------------------------------------------------------------------------------|
| \`geminiSafetySetting\` | map of string   | \u975E\u5FC5\u586B     | -   | Gemini AI\u5185\u5BB9\u8FC7\u6EE4\u548C\u5B89\u5168\u7EA7\u522B\u8BBE\u5B9A\u3002\u53C2\u8003[Safety settings](https://ai.google.dev/gemini-api/docs/safety-settings) |

#### DeepL

DeepL \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`deepl\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                         |
| ------------ | -------- | -------- | ------ | ---------------------------- |
| \`targetLang\` | string   | \u5FC5\u586B     | -      | DeepL \u7FFB\u8BD1\u670D\u52A1\u9700\u8981\u7684\u76EE\u6807\u8BED\u79CD |

#### Cohere

Cohere \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`cohere\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### Together-AI
Together-AI \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`together-ai\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

## \u7528\u6CD5\u793A\u4F8B

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Azure OpenAI \u670D\u52A1

\u4F7F\u7528\u6700\u57FA\u672C\u7684 Azure OpenAI \u670D\u52A1\uFF0C\u4E0D\u914D\u7F6E\u4EFB\u4F55\u4E0A\u4E0B\u6587\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: azure
  apiTokens:
    - "YOUR_AZURE_OPENAI_API_TOKEN"
  azureServiceUrl: "https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview",
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "choices": [
    {
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      },
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u4E2AAI\u52A9\u624B\uFF0C\u53EF\u4EE5\u56DE\u7B54\u4F60\u7684\u95EE\u9898\u548C\u63D0\u4F9B\u5E2E\u52A9\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u5230\u4F60\u7684\u5417\uFF1F",
        "role": "assistant"
      }
    }
  ],
  "created": 1714807624,
  "id": "chatcmpl-abcdefg1234567890",
  "model": "gpt-35-turbo-16k",
  "object": "chat.completion",
  "prompt_filter_results": [
    {
      "prompt_index": 0,
      "content_filter_results": {
        "hate": {
          "filtered": false,
          "severity": "safe"
        },
        "self_harm": {
          "filtered": false,
          "severity": "safe"
        },
        "sexual": {
          "filtered": false,
          "severity": "safe"
        },
        "violence": {
          "filtered": false,
          "severity": "safe"
        }
      }
    }
  ],
  "system_fingerprint": null,
  "usage": {
    "completion_tokens": 40,
    "prompt_tokens": 15,
    "total_tokens": 55
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1

\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u5E76\u914D\u7F6E\u4ECE OpenAI \u5927\u6A21\u578B\u5230\u901A\u4E49\u5343\u95EE\u7684\u6A21\u578B\u6620\u5C04\u5173\u7CFB\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    'gpt-3': "qwen-turbo"
    'gpt-35-turbo': "qwen-plus"
    'gpt-4-turbo': "qwen-max"
    'gpt-4-*': "qwen-max"
    'gpt-4o': "qwen-vl-plus"
    'text-embedding-v1': 'text-embedding-v1'
    '*': "qwen-turbo"
\`\`\`

**AI \u5BF9\u8BDD\u8BF7\u6C42\u793A\u4F8B**

URL: http://your-domain/v1/chat/completions

\u8BF7\u6C42\u793A\u4F8B\uFF1A

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "temperature": 0.3
}
\`\`\`

\u54CD\u5E94\u793A\u4F8B\uFF1A

\`\`\`json
{
  "id": "c2518bd3-0f46-97d1-be34-bb5777cb3108",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1715175072,
  "model": "qwen-turbo",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 24,
    "completion_tokens": 33,
    "total_tokens": 57
  }
}
\`\`\`

**\u591A\u6A21\u6001\u6A21\u578B API \u8BF7\u6C42\u793A\u4F8B\uFF08\u9002\u7528\u4E8E \`qwen-vl-plus\` \u548C \`qwen-vl-max\` \u6A21\u578B\uFF09**

URL: http://your-domain/v1/chat/completions

\u8BF7\u6C42\u793A\u4F8B\uFF1A

\`\`\`json
{
    "model": "gpt-4o",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://dashscope.oss-cn-beijing.aliyuncs.com/images/dog_and_girl.jpeg"
                    }
                },
                {
                    "type": "text",
                    "text": "\u8FD9\u4E2A\u56FE\u7247\u662F\u54EA\u91CC\uFF1F"
                }
            ]
        }
    ],
    "temperature": 0.3
}
\`\`\`

\u54CD\u5E94\u793A\u4F8B\uFF1A

\`\`\`json
{
    "id": "17c5955d-af9c-9f28-bbde-293a9c9a3515",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": [
                    {
                        "text": "\u8FD9\u5F20\u7167\u7247\u663E\u793A\u7684\u662F\u4E00\u4F4D\u5973\u58EB\u548C\u4E00\u53EA\u72D7\u5728\u6D77\u6EE9\u4E0A\u3002\u7531\u4E8E\u6211\u65E0\u6CD5\u83B7\u53D6\u5177\u4F53\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u6240\u4EE5\u4E0D\u80FD\u786E\u5B9A\u8FD9\u662F\u54EA\u4E2A\u5730\u65B9\u7684\u6D77\u6EE9\u3002\u4F46\u662F\u4ECE\u89C6\u89C9\u5185\u5BB9\u6765\u770B\uFF0C\u5B83\u53EF\u80FD\u662F\u4E00\u4E2A\u4F4D\u4E8E\u6CBF\u6D77\u5730\u533A\u7684\u6C99\u6EE9\u6D77\u5CB8\u7EBF\uFF0C\u5E76\u4E14\u6709\u6D77\u6D6A\u62CD\u6253\u7740\u5CB8\u8FB9\u3002\u8FD9\u6837\u7684\u573A\u666F\u5728\u5168\u7403\u8BB8\u591A\u7F8E\u4E3D\u7684\u6D77\u6EE8\u5730\u533A\u90FD\u53EF\u4EE5\u627E\u5230\u3002\u5982\u679C\u60A8\u9700\u8981\u66F4\u7CBE\u786E\u7684\u4FE1\u606F\uFF0C\u8BF7\u63D0\u4F9B\u66F4\u591A\u7684\u80CC\u666F\u6216\u7EC6\u8282\u63CF\u8FF0\u3002"
                    }
                ]
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1723949230,
    "model": "qwen-vl-plus",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 1279,
        "completion_tokens": 78
    }
}
\`\`\`

**\u6587\u672C\u5411\u91CF\u8BF7\u6C42\u793A\u4F8B**

URL: http://your-domain/v1/embeddings

\u8BF7\u6C42\u793A\u4F8B\uFF1A

\`\`\`json
{
  "model": "text-embedding-v1",
  "input": "Hello"
}
\`\`\`

\u54CD\u5E94\u793A\u4F8B\uFF1A

\`\`\`json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        -1.0437825918197632,
        5.208984375,
        3.0483806133270264,
        -1.7897135019302368,
        -2.0107421875,
        ...,
        0.8125,
        -1.1759847402572632,
        0.8174641728401184,
        1.0432943105697632,
        -0.5885213017463684
      ]
    }
  ],
  "model": "text-embedding-v1",
  "usage": {
    "prompt_tokens": 1,
    "total_tokens": 1
  }
}
\`\`\`

### \u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F

\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u540C\u65F6\u914D\u7F6E\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-turbo"
  context:
    - fileUrl: "http://file.default.svc.cluster.local/ai/context.txt",
      serviceName: "file.dns",
      servicePort: 80
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "cmpl-77861a17681f4987ab8270dbf8001936",
  "object": "chat.completion",
  "created": 9756990,
  "model": "moonshot-v1-128k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u8FD9\u4EFD\u6587\u6848\u662F\u4E00\u4EFD\u5173\u4E8E..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 20181,
    "completion_tokens": 439,
    "total_tokens": 20620
  }
}
\`\`\`

### \u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587

\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u901A\u4E49\u5343\u95EE\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-long" # \u901A\u4E49\u5343\u95EE\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587\u53EA\u80FD\u5728 qwen-long \u6A21\u578B\u4E0B\u4F7F\u7528
  qwenFileIds:
  - "file-fe-xxx"
  - "file-fe-yyy"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "output": {
    "choices": [
      {
        "finish_reason": "stop",
        "message": {
          "role": "assistant",
          "content": "\u60A8\u4E0A\u4F20\u4E86\u4E24\u4E2A\u6587\u4EF6\uFF0C\`context.txt\` \u548C \`context_2.txt\`\uFF0C\u5B83\u4EEC\u4F3C\u4E4E\u90FD\u5305\u542B\u4E86\u5173\u4E8Exxxx"
        }
      }
    ]
  },
  "usage": {
    "total_tokens": 2023,
    "output_tokens": 530,
    "input_tokens": 1493
  },
  "request_id": "187e99ba-5b64-9ffe-8f69-01dafbaf6ed7"
}
\`\`\`

### \u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_DASHSCOPE_API_TOKEN"
  protocol: original
\`\`\`

**\u8BF7\u6C42\u5B9E\u4F8B**
\`\`\`json
{
  "input": {
      "prompt": "\u4ECB\u7ECD\u4E00\u4E0BDubbo"
  },
  "parameters":  {},
  "debug": {}
}
\`\`\`

**\u54CD\u5E94\u5B9E\u4F8B**

\`\`\`json
{
    "output": {
        "finish_reason": "stop",
        "session_id": "677e7e8fbb874e1b84792b65042e1599",
        "text": "Apache Dubbo \u662F\u4E00\u4E2A..."
    },
    "usage": {
        "models": [
            {
                "output_tokens": 449,
                "model_id": "qwen-max",
                "input_tokens": 282
            }
        ]
    },
    "request_id": "b59e45e3-5af4-91df-b7c6-9d746fd3297c"
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: doubao
  apiTokens:
    - YOUR_DOUBAO_API_KEY
  modelMapping:
    '*': YOUR_DOUBAO_ENDPOINT
  timeout: 1200000
\`\`\`

### \u4F7F\u7528 original \u534F\u8BAE\u4EE3\u7406 Coze \u5E94\u7528

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: coze
  apiTokens:
    - YOUR_COZE_API_KEY
  protocol: original
\`\`\`

### \u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587

\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u6708\u4E4B\u6697\u9762\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: moonshot
  apiTokens:
    - "YOUR_MOONSHOT_API_TOKEN"
  moonshotFileId: "YOUR_MOONSHOT_FILE_ID",
  modelMapping:
    '*': "moonshot-v1-32k"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u8BF7\u6982\u8FF0\u6587\u6848\u5185\u5BB9"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "cmpl-e5ca873642ca4f5d8b178c1742f9a8e8",
  "object": "chat.completion",
  "created": 1872961,
  "model": "moonshot-v1-128k",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u6587\u6848\u5185\u5BB9\u662F\u5173\u4E8E\u4E00\u4E2A\u540D\u4E3A\u201Cxxxx\u201D\u7684\u652F\u4ED8\u5E73\u53F0..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 11,
    "completion_tokens": 498,
    "total_tokens": 509
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102",
  "object": "chat.completion",
  "created": 1715917967,
  "model": "llama3-8b-8192",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u{1F60A} Ni Hao! (That's \\"hello\\" in Chinese!)\\n\\nI am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I'm happy to chat with you in Chinese or help with any questions or topics you'd like to discuss! \u{1F60A}"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 16,
    "prompt_time": 0.005,
    "completion_tokens": 89,
    "completion_time": 0.104,
    "total_tokens": 105,
    "total_time": 0.109
  },
  "system_fingerprint": "fp_dadc9d6142",
  "x_groq": {
    "id": "req_01hy2awmcxfpwbq56qh6svm7qz"
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Claude \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: claude
  apiTokens:
    - "YOUR_CLAUDE_API_TOKEN"
  version: "2023-06-01"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "msg_01Jt3GzyjuzymnxmZERJguLK",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u60A8\u597D,\u6211\u662F\u4E00\u4E2A\u7531\u4EBA\u5DE5\u667A\u80FD\u516C\u53F8Anthropic\u5F00\u53D1\u7684\u804A\u5929\u52A9\u624B\u3002\u6211\u7684\u540D\u5B57\u53EBClaude,\u662F\u4E00\u4E2A\u806A\u660E\u53CB\u5584\u3001\u77E5\u8BC6\u6E0A\u535A\u7684\u5BF9\u8BDD\u7CFB\u7EDF\u3002\u5F88\u9AD8\u5174\u8BA4\u8BC6\u60A8!\u6211\u53EF\u4EE5\u5C31\u5404\u79CD\u8BDD\u9898\u4E0E\u60A8\u804A\u5929,\u56DE\u7B54\u95EE\u9898,\u63D0\u4F9B\u5EFA\u8BAE\u548C\u5E2E\u52A9\u3002\u6211\u4F1A\u5C3D\u6700\u5927\u52AA\u529B\u7ED9\u60A8\u6709\u5E2E\u52A9\u7684\u56DE\u590D\u3002\u5E0C\u671B\u6211\u4EEC\u80FD\u6709\u4E2A\u6109\u5FEB\u7684\u4EA4\u6D41!"
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1717385918,
  "model": "claude-3-opus-20240229",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 16,
    "completion_tokens": 126,
    "total_tokens": 142
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: "hunyuan"
  hunyuanAuthKey: "<YOUR AUTH KEY>"
  apiTokens:
    - ""
  hunyuanAuthId: "<YOUR AUTH ID>"
  timeout: 1200000
  modelMapping:
    "*": "hunyuan-lite"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\u8BF7\u6C42\u811A\u672C\uFF1A

\`\`\`shell
curl --location 'http://<your higress domain>/v1/chat/completions' \\
--header 'Content-Type:  application/json' \\
--data '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "system",
      "content": "\u4F60\u662F\u4E00\u4E2A\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"
    },
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "temperature": 0.3,
  "stream": false
}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "fd140c3e-0b69-4b19-849b-d354d32a6162",
    "choices": [
        {
            "index": 0,
            "delta": {
                "role": "assistant",
                "content": "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\u3002"
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1717493117,
    "model": "hunyuan-lite",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 15,
        "completion_tokens": 9,
        "total_tokens": 24
    }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: baidu
  apiTokens:
    - "YOUR_BAIDU_API_TOKEN"
  modelMapping:
    'gpt-3': "ERNIE-4.0"
    '*': "ERNIE-4.0"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "as-e90yfg1pk1",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\u4F60\u597D\uFF0C\u6211\u662F\u6587\u5FC3\u4E00\u8A00\uFF0C\u82F1\u6587\u540D\u662FERNIE Bot\u3002\u6211\u80FD\u591F\u4E0E\u4EBA\u5BF9\u8BDD\u4E92\u52A8\uFF0C\u56DE\u7B54\u95EE\u9898\uFF0C\u534F\u52A9\u521B\u4F5C\uFF0C\u9AD8\u6548\u4FBF\u6377\u5730\u5E2E\u52A9\u4EBA\u4EEC\u83B7\u53D6\u4FE1\u606F\u3001\u77E5\u8BC6\u548C\u7075\u611F\u3002"
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1717251488,
    "model": "ERNIE-4.0",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 4,
        "completion_tokens": 33,
        "total_tokens": 37
    }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: minimax
  apiTokens:
    - "YOUR_MINIMAX_API_TOKEN"
  modelMapping:
    "gpt-3": "abab6.5s-chat"
    "gpt-4": "abab6.5g-chat"
    "*": "abab6.5t-chat"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-3",
    "messages": [
        {
            "role": "user",
            "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "03ac4fcfe1c6cc9c6a60f9d12046e2b4",
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "message": {
                "content": "\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u4E2A\u7531MiniMax\u516C\u53F8\u7814\u53D1\u7684\u5927\u578B\u8BED\u8A00\u6A21\u578B\uFF0C\u540D\u4E3AMM\u667A\u80FD\u52A9\u7406\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u56DE\u7B54\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FDB\u884C\u5BF9\u8BDD\u548C\u6267\u884C\u591A\u79CD\u8BED\u8A00\u5904\u7406\u4EFB\u52A1\u3002\u5982\u679C\u4F60\u6709\u4EFB\u4F55\u95EE\u9898\u6216\u9700\u8981\u5E2E\u52A9\uFF0C\u8BF7\u968F\u65F6\u544A\u8BC9\u6211\uFF01",
                "role": "assistant",
                "name": "MM\u667A\u80FD\u52A9\u7406",
                "audio_content": ""
            }
        }
    ],
    "created": 1734155471,
    "model": "abab6.5s-chat",
    "object": "chat.completion",
    "usage": {
        "total_tokens": 116,
        "total_characters": 0,
        "prompt_tokens": 70,
        "completion_tokens": 46
    },
    "input_sensitive": false,
    "output_sensitive": false,
    "input_sensitive_type": 0,
    "output_sensitive_type": 0,
    "output_sensitive_int": 0,
    "base_resp": {
        "status_code": 0,
        "status_msg": ""
    }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 GitHub \u6A21\u578B\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: github
  apiTokens:
    - "YOUR_GITHUB_ACCESS_TOKEN"
  modelMapping:
    "gpt-4o": "gpt-4o"
    "gpt-4": "Phi-3.5-MoE-instruct"
    "gpt-3.5": "cohere-command-r-08-2024"
    "text-embedding-3-large": "text-embedding-3-large"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "What is the capital of France?"
    }
  ],
  "stream": true,
  "temperature": 1.0,
  "top_p": 1.0,
  "max_tokens": 1000,
  "model": "gpt-4o"
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**
\`\`\`json
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "The capital of France is Paris.",
        "role": "assistant"
      }
    }
  ],
  "created": 1728131051,
  "id": "chatcmpl-AEy7PU2JImdsD1W6Jw8GigZSEnM2u",
  "model": "gpt-4o-2024-08-06",
  "object": "chat.completion",
  "system_fingerprint": "fp_67802d9a6d",
  "usage": {
    "completion_tokens": 7,
    "prompt_tokens": 24,
    "total_tokens": 31
  }
}
\`\`\`

**\u6587\u672C\u5411\u91CF\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "input": ["first phrase", "second phrase", "third phrase"],
  "model": "text-embedding-3-large"
}
\`\`\`

\u54CD\u5E94\u793A\u4F8B\uFF1A

\`\`\`json
{
  "object": "list",
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        -0.0012583479,
        0.0020349282,
        ...
        0.012051377,
        -0.0053306012,
        0.0060688322
      ]
    }
  ],
  "model": "text-embedding-3-large",
  "usage": {
    "prompt_tokens": 6,
    "total_tokens": 6
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: ai360
  apiTokens:
    - "YOUR_360_API_TOKEN"
  modelMapping:
    "gpt-4o": "360gpt-turbo-responsibility-8k"
    "gpt-4": "360gpt2-pro"
    "gpt-3.5": "360gpt-turbo"
    "text-embedding-3-small": "embedding_s1_v1.2"
    "*": "360gpt-pro"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"
    },
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "choices": [
    {
      "message": {
        "role": "assistant",
        "content": "\u4F60\u597D\uFF0C\u6211\u662F360\u667A\u8111\uFF0C\u4E00\u4E2A\u5927\u578B\u8BED\u8A00\u6A21\u578B\u3002\u6211\u53EF\u4EE5\u5E2E\u52A9\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FDB\u884C\u5BF9\u8BDD\u7B49\u3002\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"
      },
      "finish_reason": "",
      "index": 0
    }
  ],
  "created": 1724257207,
  "id": "5e5c94a2-d989-40b5-9965-5b971db941fe",
  "model": "360gpt-turbo",
  "object": "",
  "usage": {
    "completion_tokens": 33,
    "prompt_tokens": 24,
    "total_tokens": 57
  },
  "messages": [
    {
      "role": "system",
      "content": "\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"
    },
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "context": null
}
\`\`\`

**\u6587\u672C\u5411\u91CF\u8BF7\u6C42\u793A\u4F8B**

URL: http://your-domain/v1/embeddings

\u8BF7\u6C42\u793A\u4F8B\uFF1A

\`\`\`json
{
  "input":["\u4F60\u597D"],
  "model":"text-embedding-3-small"
}
\`\`\`

\u54CD\u5E94\u793A\u4F8B\uFF1A

\`\`\`json
{
  "data": [
    {
      "embedding": [
        -0.011237,
        -0.015433,
        ...,
        -0.028946,
        -0.052778,
        0.003768,
        -0.007917,
        -0.042201
      ],
      "index": 0,
      "object": ""
    }
  ],
  "model": "embedding_s1_v1.2",
  "object": "",
  "usage": {
    "prompt_tokens": 2,
    "total_tokens": 2
  }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Cloudflare Workers AI \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: cloudflare
  apiTokens:
    - "YOUR_WORKERS_AI_API_TOKEN"
  cloudflareAccountId: "YOUR_CLOUDFLARE_ACCOUNT_ID"
  modelMapping:
    "*": "@cf/meta/llama-3-8b-instruct"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
  "model": "gpt-3.5",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Who are you?"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
  "id": "id-1720367803430",
  "object": "chat.completion",
  "created": 1720367803,
  "model": "@cf/meta/llama-3-8b-instruct",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture.\\n\\nI'm a large language model, which means I've been trained on a massive dataset of text from the internet and can generate human-like responses. I can understand natural language and respond accordingly, making me suitable for tasks such as:\\n\\n* Answering questions on various topics\\n* Generating text based on a given prompt\\n* Translating text from one language to another\\n* Summarizing long pieces of text\\n* Creating chatbot dialogues\\n\\nI'm constantly learning and improving, so the more conversations I have with users like you, the better I'll become."
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ]
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406Spark\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: spark
  apiTokens:
    - "APIKey:APISecret"
  modelMapping:
    "gpt-4o": "generalv3.5"
    "gpt-4": "generalv3"
    "*": "general"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-4o",
    "messages": [
        {
            "role": "system",
            "content": "\u4F60\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF01"
        },
        {
            "role": "user",
            "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "cha000c23c6@dx190ef0b4b96b8f2532",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\u4F60\u597D\uFF01\u6211\u662F\u4E00\u540D\u4E13\u4E1A\u7684\u5F00\u53D1\u4EBA\u5458\uFF0C\u64C5\u957F\u7F16\u7A0B\u548C\u89E3\u51B3\u6280\u672F\u95EE\u9898\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"
            }
        }
    ],
    "created": 1721997415,
    "model": "generalv3.5",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 10,
        "completion_tokens": 19,
        "total_tokens": 29
    }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 gemini \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: gemini
  apiTokens:
    - "YOUR_GEMINI_API_TOKEN"
  modelMapping:
    "*": "gemini-pro"
  geminiSafetySetting:
    "HARM_CATEGORY_SEXUALLY_EXPLICIT" :"BLOCK_NONE"
    "HARM_CATEGORY_HATE_SPEECH" :"BLOCK_NONE"
    "HARM_CATEGORY_HARASSMENT" :"BLOCK_NONE"
    "HARM_CATEGORY_DANGEROUS_CONTENT" :"BLOCK_NONE"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`json
{
    "model": "gpt-3.5",
    "messages": [
        {
            "role": "user",
            "content": "Who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{
    "id": "chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities."
            },
            "finish_reason": "stop"
        }
    ],
    "created": 1722756984,
    "model": "gemini-pro",
    "object": "chat.completion",
    "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 29,
        "total_tokens": 34
    }
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 DeepL \u6587\u672C\u7FFB\u8BD1\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: deepl
  apiTokens:
    - "YOUR_DEEPL_API_TOKEN"
  targetLang: "ZH"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**
\u6B64\u5904 \`model\` \u8868\u793A DeepL \u7684\u670D\u52A1\u7C7B\u578B\uFF0C\u53EA\u80FD\u586B \`Free\` \u6216 \`Pro\`\u3002\`content\` \u4E2D\u8BBE\u7F6E\u9700\u8981\u7FFB\u8BD1\u7684\u6587\u672C\uFF1B\u5728 \`role: system\` \u7684 \`content\` \u4E2D\u53EF\u4EE5\u5305\u542B\u53EF\u80FD\u5F71\u54CD\u7FFB\u8BD1\u4F46\u672C\u8EAB\u4E0D\u4F1A\u88AB\u7FFB\u8BD1\u7684\u4E0A\u4E0B\u6587\uFF0C\u4F8B\u5982\u7FFB\u8BD1\u4EA7\u54C1\u540D\u79F0\u65F6\uFF0C\u53EF\u4EE5\u5C06\u4EA7\u54C1\u63CF\u8FF0\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F20\u9012\uFF0C\u8FD9\u79CD\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u53EF\u80FD\u4F1A\u63D0\u9AD8\u7FFB\u8BD1\u7684\u8D28\u91CF\u3002

\`\`\`json
{
  "model": "Free",
  "messages": [
    {
      "role": "system",
      "content": "money"
    },
    {
      "content": "sit by the bank"
    },
    {
      "content": "a bank in China"
    }
  ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**
\`\`\`json
{
  "choices": [
    {
      "index": 0,
      "message": { "name": "EN", "role": "assistant", "content": "\u5750\u5E84" }
    },
    {
      "index": 1,
      "message": { "name": "EN", "role": "assistant", "content": "\u4E2D\u56FD\u94F6\u884C" }
    }
  ],
  "created": 1722747752,
  "model": "Free",
  "object": "chat.completion",
  "usage": {}
}
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Together-AI \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**
\`\`\`yaml
provider:
  type: together-ai
  apiTokens:
    - "YOUR_TOGETHER_AI_API_TOKEN"
  modelMapping:
    "*": "Qwen/Qwen2.5-72B-Instruct-Turbo"
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**
\`\`\`json
{
    "model": "Qwen/Qwen2.5-72B-Instruct-Turbo",
    "messages": [
        {
            "role": "user",
            "content": "Who are you?"
        }
    ]
}
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**
\`\`\`json
{
  "id": "8f5809d54b73efac",
  "object": "chat.completion",
  "created": 1734785851,
  "model": "Qwen/Qwen2.5-72B-Instruct-Turbo",
  "prompt": [],
  "choices": [
    {
      "finish_reason": "eos",
      "seed": 12830868308626506000,
      "logprobs": null,
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I am Qwen, a large language model created by Alibaba Cloud. I am designed to assist users in generating various types of text, such as articles, stories, poems, and more, as well as answering questions and providing information on a wide range of topics. How can I assist you today?",
        "tool_calls": []
      }
    }
  ],
  "usage": {
    "prompt_tokens": 33,
    "completion_tokens": 61,
    "total_tokens": 94
  }
}
\`\`\`


## \u5B8C\u6574\u914D\u7F6E\u793A\u4F8B

### Kubernetes \u793A\u4F8B

\u4EE5\u4E0B\u4EE5\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1\u4E3A\u4F8B\uFF0C\u5C55\u793A\u5B8C\u6574\u7684\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\u3002

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-proxy-groq
  namespace: higress-system
spec:
  matchRules:
  - config:
      provider:
        type: groq
        apiTokens: 
          - "YOUR_API_TOKEN"
    ingress:
    - groq
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: HTTPS
    higress.io/destination: groq.dns
    higress.io/proxy-ssl-name: api.groq.com
    higress.io/proxy-ssl-server-name: "on"
  labels:
    higress.io/resource-definer: higress
  name: groq
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: <YOUR-DOMAIN> 
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
---
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: api.groq.com
    name: groq
    port: 443
    type: dns
\`\`\`

\u8BBF\u95EE\u793A\u4F8B\uFF1A

\`\`\`bash
curl "http://<YOUR-DOMAIN>/v1/chat/completions" -H "Content-Type: application/json" -d '{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}'
\`\`\`

### Docker-Compose \u793A\u4F8B

\`docker-compose.yml\` \u914D\u7F6E\u6587\u4EF6\uFF1A

\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20
    entrypoint: /usr/local/bin/envoy
    # \u5F00\u542F\u4E86 debug \u7EA7\u522B\u65E5\u5FD7\u65B9\u4FBF\u8C03\u8BD5
    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug
    networks:
      - higress-net
    ports:
      - "10000:10000"
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
      - ./plugin.wasm:/etc/envoy/plugin.wasm
networks:
  higress-net: {}
\`\`\`

\`envoy.yaml\` \u914D\u7F6E\u6587\u4EF6\uFF1A

\`\`\`yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                scheme_header_transformation:
                  scheme_to_overwrite: https
                stat_prefix: ingress_http
                # Output envoy logs to stdout
                access_log:
                  - name: envoy.access_loggers.stdout
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog
                # Modify as required
                route_config:
                  name: local_route
                  virtual_hosts:
                    - name: local_service
                      domains: [ "*" ]
                      routes:
                        - match:
                            prefix: "/"
                          route:
                            cluster: claude
                            timeout: 300s
                http_filters:
                  - name: claude
                    typed_config:
                      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      value:
                        config:
                          name: claude
                          vm_config:
                            runtime: envoy.wasm.runtime.v8
                            code:
                              local:
                                filename: /etc/envoy/plugin.wasm
                          configuration:
                            "@type": "type.googleapis.com/google.protobuf.StringValue"
                            value: | # \u63D2\u4EF6\u914D\u7F6E
                              {
                                "provider": {
                                  "type": "claude",                                
                                  "apiTokens": [
                                    "YOUR_API_TOKEN"
                                  ]                  
                                }
                              }
                  - name: envoy.filters.http.router
  clusters:
    - name: claude
      connect_timeout: 30s
      type: LOGICAL_DNS
      dns_lookup_family: V4_ONLY
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: claude
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: api.anthropic.com # API \u670D\u52A1\u5730\u5740
                      port_value: 443
      transport_socket:
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext
          "sni": "api.anthropic.com"
\`\`\`

\u8BBF\u95EE\u793A\u4F8B\uFF1A

\`\`\`bash
curl "http://localhost:10000/v1/chat/completions"  -H "Content-Type: application/json"  -d '{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}'
\`\`\`
`},d=function(){return s},t=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u57FA\u672C\u914D\u7F6E",text:"\u57FA\u672C\u914D\u7F6E"},{depth:3,slug:"\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E",text:"\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E"},{depth:4,slug:"openai",text:"OpenAI"},{depth:4,slug:"azure-openai",text:"Azure OpenAI"},{depth:4,slug:"\u6708\u4E4B\u6697\u9762moonshot",text:"\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09"},{depth:4,slug:"\u901A\u4E49\u5343\u95EEqwen",text:"\u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09"},{depth:4,slug:"\u767E\u5DDD\u667A\u80FD-baichuan-ai",text:"\u767E\u5DDD\u667A\u80FD (Baichuan AI)"},{depth:4,slug:"\u96F6\u4E00\u4E07\u7269yi",text:"\u96F6\u4E00\u4E07\u7269\uFF08Yi\uFF09"},{depth:4,slug:"\u667A\u8C31aizhipu-ai",text:"\u667A\u8C31AI\uFF08Zhipu AI\uFF09"},{depth:4,slug:"deepseekdeepseek",text:"DeepSeek\uFF08DeepSeek\uFF09"},{depth:4,slug:"groq",text:"Groq"},{depth:4,slug:"\u6587\u5FC3\u4E00\u8A00baidu",text:"\u6587\u5FC3\u4E00\u8A00\uFF08Baidu\uFF09"},{depth:4,slug:"360\u667A\u8111",text:"360\u667A\u8111"},{depth:4,slug:"github\u6A21\u578B",text:"GitHub\u6A21\u578B"},{depth:4,slug:"mistral",text:"Mistral"},{depth:4,slug:"minimax",text:"MiniMax"},{depth:4,slug:"anthropic-claude",text:"Anthropic Claude"},{depth:4,slug:"ollama",text:"Ollama"},{depth:4,slug:"\u6DF7\u5143",text:"\u6DF7\u5143"},{depth:4,slug:"\u9636\u8DC3\u661F\u8FB0-stepfun",text:"\u9636\u8DC3\u661F\u8FB0 (Stepfun)"},{depth:4,slug:"cloudflare-workers-ai",text:"Cloudflare Workers AI"},{depth:4,slug:"\u661F\u706B-spark",text:"\u661F\u706B (Spark)"},{depth:4,slug:"gemini",text:"Gemini"},{depth:4,slug:"deepl",text:"DeepL"},{depth:4,slug:"cohere",text:"Cohere"},{depth:4,slug:"together-ai",text:"Together-AI"},{depth:2,slug:"\u7528\u6CD5\u793A\u4F8B",text:"\u7528\u6CD5\u793A\u4F8B"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-azure-openai-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Azure OpenAI \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F",text:"\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u7EAF\u6587\u672C\u4E0A\u4E0B\u6587\u4FE1\u606F"},{depth:3,slug:"\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587",text:"\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587"},{depth:3,slug:"\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528",text:"\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-original-\u534F\u8BAE\u4EE3\u7406-coze-\u5E94\u7528",text:"\u4F7F\u7528 original \u534F\u8BAE\u4EE3\u7406 Coze \u5E94\u7528"},{depth:3,slug:"\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587",text:"\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-groq-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-claude-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Claude \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406minimax\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-github-\u6A21\u578B\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 GitHub \u6A21\u578B\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-cloudflare-workers-ai-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Cloudflare Workers AI \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406spark\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406Spark\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-gemini-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 gemini \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-deepl-\u6587\u672C\u7FFB\u8BD1\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 DeepL \u6587\u672C\u7FFB\u8BD1\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-together-ai-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Together-AI \u670D\u52A1"},{depth:2,slug:"\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B",text:"\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"kubernetes-\u793A\u4F8B",text:"Kubernetes \u793A\u4F8B"},{depth:3,slug:"docker-compose-\u793A\u4F8B",text:"Docker-Compose \u793A\u4F8B"}]},a=c((f,u,g)=>{const{layout:m,...i}=e;return i.file=n,i.url=p,E`${v()}${y(s)}`})});export{a as Content,F as __tla,d as compiledContent,a as default,n as file,e as frontmatter,t as getHeadings,l as rawContent,p as url};
