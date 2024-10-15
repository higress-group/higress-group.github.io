import{c as l,__tla as c}from"./astro-component.BNo6A4i3.js";import{r,m as E,u as v,__tla as y}from"./constant.DDTZxEal.js";import{__tla as u}from"./astro/assets-service.lesyujvn.js";let e,p,a,t,i,o,n,x=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
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





























































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">type</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>AI \u670D\u52A1\u63D0\u4F9B\u5546\u540D\u79F0</td></tr><tr><td><code dir="auto">apiTokens</code></td><td>array of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE AI \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002\u5982\u679C\u914D\u7F6E\u4E86\u591A\u4E2A token\uFF0C\u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42\u65F6\u968F\u673A\u8FDB\u884C\u9009\u62E9\u3002\u90E8\u5206\u670D\u52A1\u63D0\u4F9B\u5546\u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A token\u3002</td></tr><tr><td><code dir="auto">timeout</code></td><td>number</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE AI \u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A 120000\uFF0C\u5373 2 \u5206\u949F</td></tr><tr><td><code dir="auto">modelMapping</code></td><td>map of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>AI \u6A21\u578B\u6620\u5C04\u8868\uFF0C\u7528\u4E8E\u5C06\u8BF7\u6C42\u4E2D\u7684\u6A21\u578B\u540D\u79F0\u6620\u5C04\u4E3A\u670D\u52A1\u63D0\u4F9B\u5546\u652F\u6301\u6A21\u578B\u540D\u79F0\u3002<br>1. \u652F\u6301\u524D\u7F00\u5339\u914D\u3002\u4F8B\u5982\u7528 \u201Cgpt-3-<em>\u201D \u5339\u914D\u6240\u6709\u540D\u79F0\u4EE5\u201Cgpt-3-\u201D\u5F00\u5934\u7684\u6A21\u578B\uFF1B<br>2. \u652F\u6301\u4F7F\u7528 "</em>" \u4E3A\u952E\u6765\u914D\u7F6E\u901A\u7528\u515C\u5E95\u6620\u5C04\u5173\u7CFB\uFF1B<br>3. \u5982\u679C\u6620\u5C04\u7684\u76EE\u6807\u540D\u79F0\u4E3A\u7A7A\u5B57\u7B26\u4E32 ""\uFF0C\u5219\u8868\u793A\u4FDD\u7559\u539F\u6A21\u578B\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">protocol</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u63D2\u4EF6\u5BF9\u5916\u63D0\u4F9B\u7684 API \u63A5\u53E3\u5951\u7EA6\u3002\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u53D6\u503C\uFF1Aopenai\uFF08\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 OpenAI \u7684\u63A5\u53E3\u5951\u7EA6\uFF09\u3001original\uFF08\u4F7F\u7528\u76EE\u6807\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u539F\u59CB\u63A5\u53E3\u5951\u7EA6\uFF09</td></tr><tr><td><code dir="auto">context</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u4FE1\u606F</td></tr><tr><td><code dir="auto">customSettings</code></td><td>array of customSetting</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u4E3AAI\u8BF7\u6C42\u6307\u5B9A\u8986\u76D6\u6216\u8005\u586B\u5145\u53C2\u6570</td></tr></tbody></table>
<p><code dir="auto">context</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">fileUrl</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u4FDD\u5B58 AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u7684\u6587\u4EF6 URL\u3002\u4EC5\u652F\u6301\u7EAF\u6587\u672C\u7C7B\u578B\u7684\u6587\u4EF6\u5185\u5BB9</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u5B8C\u6574\u540D\u79F0</td></tr><tr><td><code dir="auto">servicePort</code></td><td>number</td><td>\u5FC5\u586B</td><td>-</td><td>URL \u6240\u5BF9\u5E94\u7684 Higress \u540E\u7AEF\u670D\u52A1\u8BBF\u95EE\u7AEF\u53E3</td></tr></tbody></table>
<p><code dir="auto">customSettings</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u540D\u79F0\uFF0C\u4F8B\u5982<code dir="auto">max_tokens</code></td></tr><tr><td><code dir="auto">value</code></td><td>string/int/float/bool</td><td>\u5FC5\u586B</td><td>-</td><td>\u60F3\u8981\u8BBE\u7F6E\u7684\u53C2\u6570\u7684\u503C\uFF0C\u4F8B\u59820</td></tr><tr><td><code dir="auto">mode</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>\u201Dauto\u201D</td><td>\u53C2\u6570\u8BBE\u7F6E\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u201Dauto\u201D\u6216\u8005\u201Draw\u201D\uFF0C\u5982\u679C\u4E3A\u201Dauto\u201D\u5219\u4F1A\u81EA\u52A8\u6839\u636E\u534F\u8BAE\u5BF9\u53C2\u6570\u540D\u505A\u6539\u5199\uFF0C\u5982\u679C\u4E3A\u201Draw\u201D\u5219\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6539\u5199\u548C\u9650\u5236\u68C0\u67E5</td></tr><tr><td><code dir="auto">overwrite</code></td><td>bool</td><td>\u975E\u5FC5\u586B</td><td>true</td><td>\u5982\u679C\u4E3Afalse\u5219\u53EA\u5728\u7528\u6237\u6CA1\u6709\u8BBE\u7F6E\u8FD9\u4E2A\u53C2\u6570\u65F6\u586B\u5145\u53C2\u6570\uFF0C\u5426\u5219\u4F1A\u76F4\u63A5\u8986\u76D6\u7528\u6237\u539F\u6709\u7684\u53C2\u6570\u8BBE\u7F6E</td></tr></tbody></table>
<p>custom-setting\u4F1A\u9075\u5FAA\u5982\u4E0B\u8868\u683C\uFF0C\u6839\u636E<code dir="auto">name</code>\u548C\u534F\u8BAE\u6765\u66FF\u6362\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF0C\u7528\u6237\u9700\u8981\u586B\u5199\u8868\u683C\u4E2D<code dir="auto">settingName</code>\u5217\u4E2D\u5B58\u5728\u7684\u503C\u3002\u4F8B\u5982\u7528\u6237\u5C06<code dir="auto">name</code>\u8BBE\u7F6E\u4E3A<code dir="auto">max_tokens</code>\uFF0C\u5728openai\u534F\u8BAE\u4E2D\u4F1A\u66FF\u6362<code dir="auto">max_tokens</code>\uFF0C\u5728gemini\u4E2D\u4F1A\u66FF\u6362<code dir="auto">maxOutputTokens</code>\u3002
<code dir="auto">none</code>\u8868\u793A\u8BE5\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\u3002\u5982\u679C<code dir="auto">name</code>\u4E0D\u5728\u6B64\u8868\u683C\u4E2D\u6216\u8005\u5BF9\u5E94\u534F\u8BAE\u4E0D\u652F\u6301\u6B64\u53C2\u6570\uFF0C\u540C\u65F6\u6CA1\u6709\u8BBE\u7F6Eraw\u6A21\u5F0F\uFF0C\u5219\u914D\u7F6E\u4E0D\u4F1A\u751F\u6548\u3002</p>







































































<table><thead><tr><th>settingName</th><th>openai</th><th>baidu</th><th>spark</th><th>qwen</th><th>gemini</th><th>hunyuan</th><th>claude</th><th>minimax</th></tr></thead><tbody><tr><td>max_tokens</td><td>max_tokens</td><td>max_output_tokens</td><td>max_tokens</td><td>max_tokens</td><td>maxOutputTokens</td><td>none</td><td>max_tokens</td><td>tokens_to_generate</td></tr><tr><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>Temperature</td><td>temperature</td><td>temperature</td></tr><tr><td>top_p</td><td>top_p</td><td>top_p</td><td>none</td><td>top_p</td><td>topP</td><td>TopP</td><td>top_p</td><td>top_p</td></tr><tr><td>top_k</td><td>none</td><td>none</td><td>top_k</td><td>none</td><td>topK</td><td>none</td><td>top_k</td><td>none</td></tr><tr><td>seed</td><td>seed</td><td>none</td><td>none</td><td>seed</td><td>none</td><td>none</td><td>none</td><td>none</td></tr></tbody></table>
<p>\u5982\u679C\u542F\u7528\u4E86raw\u6A21\u5F0F\uFF0Ccustom-setting\u4F1A\u76F4\u63A5\u7528\u8F93\u5165\u7684<code dir="auto">name</code>\u548C<code dir="auto">value</code>\u53BB\u66F4\u6539\u8BF7\u6C42\u4E2D\u7684json\u5185\u5BB9\uFF0C\u800C\u4E0D\u5BF9\u53C2\u6570\u540D\u79F0\u505A\u4EFB\u4F55\u9650\u5236\u548C\u4FEE\u6539\u3002
\u5BF9\u4E8E\u5927\u591A\u6570\u534F\u8BAE\uFF0Ccustom-setting\u90FD\u4F1A\u5728json\u5185\u5BB9\u7684\u6839\u8DEF\u5F84\u4FEE\u6539\u6216\u8005\u586B\u5145\u53C2\u6570\u3002\u5BF9\u4E8E<code dir="auto">qwen</code>\u534F\u8BAE\uFF0Cai-proxy\u4F1A\u5728json\u7684<code dir="auto">parameters</code>\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002\u5BF9\u4E8E<code dir="auto">gemini</code>\u534F\u8BAE\uFF0C\u5219\u4F1A\u5728<code dir="auto">generation_config</code>\u5B50\u8DEF\u5F84\u4E0B\u505A\u914D\u7F6E\u3002</p>
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
<h4 id="mistral">Mistral</h4>
<p>Mistral \u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">mistral</code>\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002</p>
<h4 id="minimax">MiniMax</h4>
<p>MiniMax\u6240\u5BF9\u5E94\u7684 <code dir="auto">type</code> \u4E3A <code dir="auto">minimax</code>\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">minimaxGroupId</code></td><td>string</td><td>\u5F53\u4F7F\u7528<code dir="auto">abab6.5-chat</code>, <code dir="auto">abab6.5s-chat</code>, <code dir="auto">abab5.5s-chat</code>, <code dir="auto">abab5.5-chat</code>\u56DB\u79CD\u6A21\u578B\u65F6\u5FC5\u586B</td><td>-</td><td>\u5F53\u4F7F\u7528<code dir="auto">abab6.5-chat</code>, <code dir="auto">abab6.5s-chat</code>, <code dir="auto">abab5.5s-chat</code>, <code dir="auto">abab5.5-chat</code>\u56DB\u79CD\u6A21\u578B\u65F6\u4F1A\u4F7F\u7528ChatCompletion Pro\uFF0C\u9700\u8981\u8BBE\u7F6EgroupID</td></tr></tbody></table>
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
<h2 id="\u7528\u6CD5\u793A\u4F8B">\u7528\u6CD5\u793A\u4F8B</h2>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-azure-openai-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Azure OpenAI \u670D\u52A1</h3>
<p>\u4F7F\u7528\u6700\u57FA\u672C\u7684 Azure OpenAI \u670D\u52A1\uFF0C\u4E0D\u914D\u7F6E\u4EFB\u4F55\u4E0A\u4E0B\u6587\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">azure</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_AZURE_OPENAI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">azureServiceUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview"</span><span style="--0:#E1E4E8">,</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: azure\x7F  apiTokens:\x7F    - &#x22;YOUR_AZURE_OPENAI_API_TOKEN&#x22;\x7F  azureServiceUrl: &#x22;https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview&#x22;,"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1</h3>
<p>\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u670D\u52A1\uFF0C\u5E76\u914D\u7F6E\u4ECE OpenAI \u5927\u6A21\u578B\u5230\u901A\u4E49\u5343\u95EE\u7684\u6A21\u578B\u6620\u5C04\u5173\u7CFB\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-35-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4o'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-vl-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'text-embedding-v1'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'text-embedding-v1'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;qwen-turbo&#x22;\x7F    &#x27;gpt-35-turbo&#x27;: &#x22;qwen-plus&#x22;\x7F    &#x27;gpt-4-turbo&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4-*&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4o&#x27;: &#x22;qwen-vl-plus&#x22;\x7F    &#x27;text-embedding-v1&#x27;: &#x27;text-embedding-v1&#x27;\x7F    &#x27;*&#x27;: &#x22;qwen-turbo&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528">\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DASHSCOPE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">original</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_DASHSCOPE_API_TOKEN&#x22;\x7F  protocol: original"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">doubao</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">YOUR_DOUBAO_API_KEY</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">YOUR_DOUBAO_ENDPOINT</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: doubao\x7F  apiTokens:\x7F    - YOUR_DOUBAO_API_KEY\x7F  modelMapping:\x7F    &#x27;*&#x27;: YOUR_DOUBAO_ENDPOINT\x7F  timeout: 1200000"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587">\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587</h3>
<p>\u63D0\u524D\u4E0A\u4F20\u6587\u4EF6\u81F3\u6708\u4E4B\u6697\u9762\uFF0C\u4EE5\u6587\u4EF6\u5185\u5BB9\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F7F\u7528\u5176 AI \u670D\u52A1\u3002</p>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">moonshot</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">moonshotFileId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_FILE_ID"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-32k"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: moonshot\x7F  apiTokens:\x7F    - &#x22;YOUR_MOONSHOT_API_TOKEN&#x22;\x7F  moonshotFileId: &#x22;YOUR_MOONSHOT_FILE_ID&#x22;,\x7F  modelMapping:\x7F    &#x27;*&#x27;: &#x22;moonshot-v1-32k&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-groq-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GROQ_API_TOKEN"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: groq\x7F  apiTokens:\x7F    - &#x22;YOUR_GROQ_API_TOKEN&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-claude-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Claude \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_CLAUDE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2023-06-01"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: claude\x7F  apiTokens:\x7F    - &#x22;YOUR_CLAUDE_API_TOKEN&#x22;\x7F  version: &#x22;2023-06-01&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH KEY>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH ID>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan-lite"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: &#x22;hunyuan&#x22;\x7F  hunyuanAuthKey: &#x22;<YOUR AUTH KEY>&#x22;\x7F  apiTokens:\x7F    - &#x22;&#x22;\x7F  hunyuanAuthId: &#x22;<YOUR AUTH ID>&#x22;\x7F  timeout: 1200000\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;hunyuan-lite&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">baidu</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_BAIDU_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: baidu\x7F  apiTokens:\x7F    - &#x22;YOUR_BAIDU_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;ERNIE-4.0&#x22;\x7F    &#x27;*&#x27;: &#x22;ERNIE-4.0&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406minimax\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">minimax</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">minimaxGroupId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_GROUP_ID"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: minimax\x7F  apiTokens:\x7F    - &#x22;YOUR_MINIMAX_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-3&#x22;: &#x22;abab6.5g-chat&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;abab6.5-chat&#x22;\x7F    &#x22;*&#x22;: &#x22;abab6.5g-chat&#x22;\x7F  minimaxGroupId: &#x22;YOUR_MINIMAX_GROUP_ID&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai360</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo-responsibility-8k"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt2-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"text-embedding-3-small"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding_s1_v1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-pro"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: ai360\x7F  apiTokens:\x7F    - &#x22;YOUR_MINIMAX_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;360gpt-turbo-responsibility-8k&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;360gpt2-pro&#x22;\x7F    &#x22;gpt-3.5&#x22;: &#x22;360gpt-turbo&#x22;\x7F    &#x22;text-embedding-3-small&#x22;: &#x22;embedding_s1_v1.2&#x22;\x7F    &#x22;*&#x22;: &#x22;360gpt-pro&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-cloudflare-workers-ai-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Cloudflare Workers AI \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cloudflare</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_WORKERS_AI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cloudflareAccountId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_CLOUDFLARE_ACCOUNT_ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"@cf/meta/llama-3-8b-instruct"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: cloudflare\x7F  apiTokens:\x7F    - &#x22;YOUR_WORKERS_AI_API_TOKEN&#x22;\x7F  cloudflareAccountId: &#x22;YOUR_CLOUDFLARE_ACCOUNT_ID&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;@cf/meta/llama-3-8b-instruct&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406spark\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406Spark\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">spark</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"APIKey:APISecret"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3.5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"general"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: spark\x7F  apiTokens:\x7F    - &#x22;APIKey:APISecret&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;generalv3.5&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;generalv3&#x22;\x7F    &#x22;*&#x22;: &#x22;general&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-gemini-\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 gemini \u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gemini</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GEMINI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gemini-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">geminiSafetySetting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_SEXUALLY_EXPLICIT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HATE_SPEECH"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HARASSMENT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_DANGEROUS_CONTENT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: gemini\x7F  apiTokens:\x7F    - &#x22;YOUR_GEMINI_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;gemini-pro&#x22;\x7F  geminiSafetySetting:\x7F    &#x22;HARM_CATEGORY_SEXUALLY_EXPLICIT&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HATE_SPEECH&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HARASSMENT&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_DANGEROUS_CONTENT&#x22; :&#x22;BLOCK_NONE&#x22;"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-deepl-\u6587\u672C\u7FFB\u8BD1\u670D\u52A1">\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 DeepL \u6587\u672C\u7FFB\u8BD1\u670D\u52A1</h3>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">deepl</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DEEPL_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">targetLang</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ZH"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: deepl\x7F  apiTokens:\x7F    - &#x22;YOUR_DEEPL_API_TOKEN&#x22;\x7F  targetLang: &#x22;ZH&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong>
\u6B64\u5904 <code dir="auto">model</code> \u8868\u793A DeepL \u7684\u670D\u52A1\u7C7B\u578B\uFF0C\u53EA\u80FD\u586B <code dir="auto">Free</code> \u6216 <code dir="auto">Pro</code>\u3002<code dir="auto">content</code> \u4E2D\u8BBE\u7F6E\u9700\u8981\u7FFB\u8BD1\u7684\u6587\u672C\uFF1B\u5728 <code dir="auto">role: system</code> \u7684 <code dir="auto">content</code> \u4E2D\u53EF\u4EE5\u5305\u542B\u53EF\u80FD\u5F71\u54CD\u7FFB\u8BD1\u4F46\u672C\u8EAB\u4E0D\u4F1A\u88AB\u7FFB\u8BD1\u7684\u4E0A\u4E0B\u6587\uFF0C\u4F8B\u5982\u7FFB\u8BD1\u4EA7\u54C1\u540D\u79F0\u65F6\uFF0C\u53EF\u4EE5\u5C06\u4EA7\u54C1\u63CF\u8FF0\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F20\u9012\uFF0C\u8FD9\u79CD\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u53EF\u80FD\u4F1A\u63D0\u9AD8\u7FFB\u8BD1\u7684\u8D28\u91CF\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Free"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"money"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sit by the bank"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"a bank in China"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;Free&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;money&#x22;\x7F    },\x7F    {\x7F      &#x22;content&#x22;: &#x22;sit by the bank&#x22;\x7F    },\x7F    {\x7F      &#x22;content&#x22;: &#x22;a bank in China&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"EN"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5750\u5E84"</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"EN"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4E2D\u56FD\u94F6\u884C"</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1722747752</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Free"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: { &#x22;name&#x22;: &#x22;EN&#x22;, &#x22;role&#x22;: &#x22;assistant&#x22;, &#x22;content&#x22;: &#x22;\u5750\u5E84&#x22; }\x7F    },\x7F    {\x7F      &#x22;index&#x22;: 1,\x7F      &#x22;message&#x22;: { &#x22;name&#x22;: &#x22;EN&#x22;, &#x22;role&#x22;: &#x22;assistant&#x22;, &#x22;content&#x22;: &#x22;\u4E2D\u56FD\u94F6\u884C&#x22; }\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1722747752,\x7F  &#x22;model&#x22;: &#x22;Free&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {}\x7F}"><div></div></button></div></figure></div>`,t={title:"AI \u4EE3\u7406",keywords:["AI\u7F51\u5173","AI\u4EE3\u7406"],description:"AI \u4EE3\u7406\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-proxy.md",n=void 0,o=function(){return`
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

| \u540D\u79F0           | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                                                                                                                           |
| -------------- | --------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                  |
| \`type\`         | string          | \u5FC5\u586B     | -      | AI \u670D\u52A1\u63D0\u4F9B\u5546\u540D\u79F0                                                                                                                                                                                                                                              |
| \`apiTokens\`    | array of string | \u975E\u5FC5\u586B   | -      | \u7528\u4E8E\u5728\u8BBF\u95EE AI \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002\u5982\u679C\u914D\u7F6E\u4E86\u591A\u4E2A token\uFF0C\u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42\u65F6\u968F\u673A\u8FDB\u884C\u9009\u62E9\u3002\u90E8\u5206\u670D\u52A1\u63D0\u4F9B\u5546\u53EA\u652F\u6301\u914D\u7F6E\u4E00\u4E2A token\u3002                                                                                                                                     |
| \`timeout\`      | number          | \u975E\u5FC5\u586B   | -      | \u8BBF\u95EE AI \u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002\u9ED8\u8BA4\u503C\u4E3A 120000\uFF0C\u5373 2 \u5206\u949F                                                                                                                                                                                                 |
| \`modelMapping\` | map of string   | \u975E\u5FC5\u586B   | -      | AI \u6A21\u578B\u6620\u5C04\u8868\uFF0C\u7528\u4E8E\u5C06\u8BF7\u6C42\u4E2D\u7684\u6A21\u578B\u540D\u79F0\u6620\u5C04\u4E3A\u670D\u52A1\u63D0\u4F9B\u5546\u652F\u6301\u6A21\u578B\u540D\u79F0\u3002<br/>1. \u652F\u6301\u524D\u7F00\u5339\u914D\u3002\u4F8B\u5982\u7528 "gpt-3-*" \u5339\u914D\u6240\u6709\u540D\u79F0\u4EE5\u201Cgpt-3-\u201D\u5F00\u5934\u7684\u6A21\u578B\uFF1B<br/>2. \u652F\u6301\u4F7F\u7528 "*" \u4E3A\u952E\u6765\u914D\u7F6E\u901A\u7528\u515C\u5E95\u6620\u5C04\u5173\u7CFB\uFF1B<br/>3. \u5982\u679C\u6620\u5C04\u7684\u76EE\u6807\u540D\u79F0\u4E3A\u7A7A\u5B57\u7B26\u4E32 ""\uFF0C\u5219\u8868\u793A\u4FDD\u7559\u539F\u6A21\u578B\u540D\u79F0\u3002 |
| \`protocol\`     | string          | \u975E\u5FC5\u586B   | -      | \u63D2\u4EF6\u5BF9\u5916\u63D0\u4F9B\u7684 API \u63A5\u53E3\u5951\u7EA6\u3002\u76EE\u524D\u652F\u6301\u4EE5\u4E0B\u53D6\u503C\uFF1Aopenai\uFF08\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u7528 OpenAI \u7684\u63A5\u53E3\u5951\u7EA6\uFF09\u3001original\uFF08\u4F7F\u7528\u76EE\u6807\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u539F\u59CB\u63A5\u53E3\u5951\u7EA6\uFF09                                                                                                                          |
| \`context\`      | object          | \u975E\u5FC5\u586B   | -      | \u914D\u7F6E AI \u5BF9\u8BDD\u4E0A\u4E0B\u6587\u4FE1\u606F                                                                                                                                                                                                                                         |
| \`customSettings\` | array of customSetting | \u975E\u5FC5\u586B   | -      | \u4E3AAI\u8BF7\u6C42\u6307\u5B9A\u8986\u76D6\u6216\u8005\u586B\u5145\u53C2\u6570                                                                                                                                                                                                                                 |

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

#### Mistral

Mistral \u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`mistral\`\u3002\u5B83\u5E76\u65E0\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u3002

#### MiniMax

MiniMax\u6240\u5BF9\u5E94\u7684 \`type\` \u4E3A \`minimax\`\u3002\u5B83\u7279\u6709\u7684\u914D\u7F6E\u5B57\u6BB5\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42                                                     | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                         |
| ---------------- | -------- | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| \`minimaxGroupId\` | string   | \u5F53\u4F7F\u7528\`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\`\u56DB\u79CD\u6A21\u578B\u65F6\u5FC5\u586B | -      | \u5F53\u4F7F\u7528\`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\`\u56DB\u79CD\u6A21\u578B\u65F6\u4F1A\u4F7F\u7528ChatCompletion Pro\uFF0C\u9700\u8981\u8BBE\u7F6EgroupID |

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

### \u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528
**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_DASHSCOPE_API_TOKEN"
  protocol: original
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

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
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

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: minimax
  apiTokens:
    - "YOUR_MINIMAX_API_TOKEN"
  modelMapping:
    "gpt-3": "abab6.5g-chat"
    "gpt-4": "abab6.5-chat"
    "*": "abab6.5g-chat"
  minimaxGroupId: "YOUR_MINIMAX_GROUP_ID"
\`\`\`

### \u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
provider:
  type: ai360
  apiTokens:
    - "YOUR_MINIMAX_API_TOKEN"
  modelMapping:
    "gpt-4o": "360gpt-turbo-responsibility-8k"
    "gpt-4": "360gpt2-pro"
    "gpt-3.5": "360gpt-turbo"
    "text-embedding-3-small": "embedding_s1_v1.2"
    "*": "360gpt-pro"
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

`},p=function(){return s},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u57FA\u672C\u914D\u7F6E",text:"\u57FA\u672C\u914D\u7F6E"},{depth:3,slug:"\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E",text:"\u63D0\u4F9B\u5546\u7279\u6709\u914D\u7F6E"},{depth:4,slug:"openai",text:"OpenAI"},{depth:4,slug:"azure-openai",text:"Azure OpenAI"},{depth:4,slug:"\u6708\u4E4B\u6697\u9762moonshot",text:"\u6708\u4E4B\u6697\u9762\uFF08Moonshot\uFF09"},{depth:4,slug:"\u901A\u4E49\u5343\u95EEqwen",text:"\u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09"},{depth:4,slug:"\u767E\u5DDD\u667A\u80FD-baichuan-ai",text:"\u767E\u5DDD\u667A\u80FD (Baichuan AI)"},{depth:4,slug:"\u96F6\u4E00\u4E07\u7269yi",text:"\u96F6\u4E00\u4E07\u7269\uFF08Yi\uFF09"},{depth:4,slug:"\u667A\u8C31aizhipu-ai",text:"\u667A\u8C31AI\uFF08Zhipu AI\uFF09"},{depth:4,slug:"deepseekdeepseek",text:"DeepSeek\uFF08DeepSeek\uFF09"},{depth:4,slug:"groq",text:"Groq"},{depth:4,slug:"\u6587\u5FC3\u4E00\u8A00baidu",text:"\u6587\u5FC3\u4E00\u8A00\uFF08Baidu\uFF09"},{depth:4,slug:"360\u667A\u8111",text:"360\u667A\u8111"},{depth:4,slug:"mistral",text:"Mistral"},{depth:4,slug:"minimax",text:"MiniMax"},{depth:4,slug:"anthropic-claude",text:"Anthropic Claude"},{depth:4,slug:"ollama",text:"Ollama"},{depth:4,slug:"\u6DF7\u5143",text:"\u6DF7\u5143"},{depth:4,slug:"\u9636\u8DC3\u661F\u8FB0-stepfun",text:"\u9636\u8DC3\u661F\u8FB0 (Stepfun)"},{depth:4,slug:"cloudflare-workers-ai",text:"Cloudflare Workers AI"},{depth:4,slug:"\u661F\u706B-spark",text:"\u661F\u706B (Spark)"},{depth:4,slug:"gemini",text:"Gemini"},{depth:4,slug:"deepl",text:"DeepL"},{depth:4,slug:"cohere",text:"Cohere"},{depth:2,slug:"\u7528\u6CD5\u793A\u4F8B",text:"\u7528\u6CD5\u793A\u4F8B"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-azure-openai-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Azure OpenAI \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u901A\u4E49\u5343\u95EE\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528",text:"\u4F7F\u7528original\u534F\u8BAE\u4EE3\u7406\u767E\u70BC\u667A\u80FD\u4F53\u5E94\u7528"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u8C46\u5305\u5927\u6A21\u578B\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587",text:"\u4F7F\u7528\u6708\u4E4B\u6697\u9762\u914D\u5408\u5176\u539F\u751F\u7684\u6587\u4EF6\u4E0A\u4E0B\u6587"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-groq-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Groq \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-claude-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Claude \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u6DF7\u5143\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406\u767E\u5EA6\u6587\u5FC3\u4E00\u8A00\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406minimax\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406MiniMax\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406360\u667A\u8111\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-cloudflare-workers-ai-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 Cloudflare Workers AI \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406spark\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406Spark\u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-gemini-\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 gemini \u670D\u52A1"},{depth:3,slug:"\u4F7F\u7528-openai-\u534F\u8BAE\u4EE3\u7406-deepl-\u6587\u672C\u7FFB\u8BD1\u670D\u52A1",text:"\u4F7F\u7528 OpenAI \u534F\u8BAE\u4EE3\u7406 DeepL \u6587\u672C\u7FFB\u8BD1\u670D\u52A1"}]},e=l((h,g,m)=>{const{layout:A,...d}=t;return d.file=a,d.url=n,r`${E()}${v(s)}`})});export{e as Content,x as __tla,p as compiledContent,e as default,a as file,t as frontmatter,i as getHeadings,o as rawContent,n as url};
