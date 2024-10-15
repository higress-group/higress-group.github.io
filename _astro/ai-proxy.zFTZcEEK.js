import{c as l,__tla as r}from"./astro-component.BNo6A4i3.js";import{r as c,m as u,u as v,__tla as E}from"./constant.BusZ7hZv.js";import{__tla as y}from"./astro/assets-service.lesyujvn.js";let t,o,s,n,d,p,a,h=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p><code dir="auto">AI Proxy</code> plugin implements AI proxy functionality based on OpenAI API contracts. It currently supports AI service providers such as OpenAI, Azure OpenAI, Moonshot, and Qwen.</p>
<blockquote>
<p><strong>Note:</strong>
When the request path suffix matches <code dir="auto">/v1/chat/completions</code>, corresponding to text generation scenarios, the request body will be parsed using OpenAI\u2019s text generation protocol and then converted to the corresponding LLM vendor\u2019s text generation protocol.</p>
<p>When the request path suffix matches <code dir="auto">/v1/embeddings</code>, corresponding to text vector scenarios, the request body will be parsed using OpenAI\u2019s text vector protocol and then converted to the corresponding LLM vendor\u2019s text vector protocol.</p>
</blockquote>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Default phase</code><br>
Plugin execution priority: <code dir="auto">100</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<h3 id="basic-configuration">Basic Configuration</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">provider</code></td><td>object</td><td>Required</td><td>-</td><td>Information about the target AI service provider</td></tr></tbody></table>
<p>The description of fields in <code dir="auto">provider</code> is as follows:</p>





























































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">type</code></td><td>string</td><td>Required</td><td>-</td><td>Name of the AI service provider</td></tr><tr><td><code dir="auto">apiTokens</code></td><td>array of string</td><td>Optional</td><td>-</td><td>Tokens for authentication when accessing the AI service. If multiple tokens are provided, the plugin will randomly choose one when making requests. Some service providers only support one token configuration.</td></tr><tr><td><code dir="auto">timeout</code></td><td>number</td><td>Optional</td><td>-</td><td>Timeout for accessing the AI service, in milliseconds. The default value is 120000, which is 2 minutes.</td></tr><tr><td><code dir="auto">modelMapping</code></td><td>map of string</td><td>Optional</td><td>-</td><td>AI model mapping table for mapping model names in requests to supported model names by the service provider. <br>1. Supports prefix matching. For example, \u201Cgpt-3-<em>\u201D matches all models whose names start with \u201Cgpt-3-\u201D; <br>2. Supports using "</em>" as a key to configure a general fallback mapping; <br>3. If the target name in the mapping is an empty string "", it means to retain the original model name.</td></tr><tr><td><code dir="auto">protocol</code></td><td>string</td><td>Optional</td><td>-</td><td>The API interface contract provided by the plugin. Currently supports the following values: openai (default, uses OpenAI\u2019s interface contract), original (uses the original interface contract of the target service provider)</td></tr><tr><td><code dir="auto">context</code></td><td>object</td><td>Optional</td><td>-</td><td>Configuration for AI conversation context information</td></tr><tr><td><code dir="auto">customSettings</code></td><td>array of customSetting</td><td>Optional</td><td>-</td><td>Specify override or fill parameters for AI requests</td></tr></tbody></table>
<p>The description of fields in <code dir="auto">context</code> is as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">fileUrl</code></td><td>string</td><td>Required</td><td>-</td><td>URL of the file that stores AI conversation context. Only pure text file content is supported.</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>Required</td><td>-</td><td>The complete name of the Higress backend service corresponding to the URL.</td></tr><tr><td><code dir="auto">servicePort</code></td><td>number</td><td>Required</td><td>-</td><td>The access port of the Higress backend service corresponding to the URL.</td></tr></tbody></table>
<p>The description of fields in <code dir="auto">customSettings</code> is as follows:</p>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Name of the parameter to set, e.g., <code dir="auto">max_tokens</code></td></tr><tr><td><code dir="auto">value</code></td><td>string/int/float/bool</td><td>Required</td><td>-</td><td>Value for the parameter to set, e.g., 0</td></tr><tr><td><code dir="auto">mode</code></td><td>string</td><td>Optional</td><td>\u201Dauto\u201D</td><td>Mode for parameter settings, can be set to \u201Cauto\u201D or \u201Craw\u201D. If \u201Cauto\u201D, parameter names will be automatically rewritten based on the protocol; if \u201Craw\u201D, no rewriting or validation checks will be done.</td></tr><tr><td><code dir="auto">overwrite</code></td><td>bool</td><td>Optional</td><td>true</td><td>If false, the parameter will only be filled if the user hasn\u2019t set it; otherwise, it will overwrite the user\u2019s original parameter settings.</td></tr></tbody></table>
<p>Custom settings will follow the table below to replace corresponding fields based on <code dir="auto">name</code> and protocol. Users need to fill in values that exist in the <code dir="auto">settingName</code> column of the table. For example, if the user sets <code dir="auto">name</code> to <code dir="auto">max_tokens</code>, it will be replaced by <code dir="auto">max_tokens</code> in the OpenAI protocol, and by <code dir="auto">maxOutputTokens</code> in Gemini. <code dir="auto">none</code> indicates that the protocol does not support this parameter. If <code dir="auto">name</code> is not in this table or the corresponding protocol does not support this parameter, and if raw mode is not set, the configuration will not take effect.</p>







































































<table><thead><tr><th>settingName</th><th>openai</th><th>baidu</th><th>spark</th><th>qwen</th><th>gemini</th><th>hunyuan</th><th>claude</th><th>minimax</th></tr></thead><tbody><tr><td>max_tokens</td><td>max_tokens</td><td>max_output_tokens</td><td>max_tokens</td><td>max_tokens</td><td>maxOutputTokens</td><td>none</td><td>max_tokens</td><td>tokens_to_generate</td></tr><tr><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>temperature</td><td>Temperature</td><td>temperature</td><td>temperature</td></tr><tr><td>top_p</td><td>top_p</td><td>top_p</td><td>none</td><td>top_p</td><td>topP</td><td>TopP</td><td>top_p</td><td>top_p</td></tr><tr><td>top_k</td><td>none</td><td>none</td><td>top_k</td><td>none</td><td>topK</td><td>none</td><td>top_k</td><td>none</td></tr><tr><td>seed</td><td>seed</td><td>none</td><td>none</td><td>seed</td><td>none</td><td>none</td><td>none</td><td>none</td></tr></tbody></table>
<p>If raw mode is enabled, custom settings will directly use the input <code dir="auto">name</code> and <code dir="auto">value</code> to change the JSON content of the request without any restrictions or modifications to the parameter names.</p>
<p>For most protocols, custom settings will modify or fill parameters at the root path of the JSON content. For the <code dir="auto">qwen</code> protocol, the ai-proxy will configure under the <code dir="auto">parameters</code> sub-path in JSON. For the <code dir="auto">gemini</code> protocol, it will be configured under the <code dir="auto">generation_config</code> sub-path.</p>
<h3 id="provider-specific-configuration">Provider-Specific Configuration</h3>
<h4 id="openai">OpenAI</h4>
<p>The <code dir="auto">type</code> corresponding to OpenAI is <code dir="auto">openai</code>. Its specific configuration fields are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">openaiCustomUrl</code></td><td>string</td><td>Optional</td><td>-</td><td>Custom backend URL based on OpenAI protocol, e.g., <a href="http://www.example.com/myai/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">www.example.com/myai/v1/chat/completions</a></td></tr><tr><td><code dir="auto">responseJsonSchema</code></td><td>object</td><td>Optional</td><td>-</td><td>Predefined Json Schema that OpenAI responses must satisfy, currently only supported by specific models.</td></tr></tbody></table>
<h4 id="azure-openai">Azure OpenAI</h4>
<p>The <code dir="auto">type</code> corresponding to Azure OpenAI is <code dir="auto">azure</code>. Its specific configuration fields are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">azureServiceUrl</code></td><td>string</td><td>Required</td><td>-</td><td>URL of Azure OpenAI service, must include <code dir="auto">api-version</code> query parameter.</td></tr><tr><td><strong>Note:</strong> Azure OpenAI only supports the configuration of one API Token.</td><td></td><td></td><td></td><td></td></tr></tbody></table>
<h4 id="moonshot">Moonshot</h4>
<p>The <code dir="auto">type</code> corresponding to Moonshot is <code dir="auto">moonshot</code>. Its specific configuration fields are as follows:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">moonshotFileId</code></td><td>string</td><td>Optional</td><td>-</td><td>File ID uploaded to Moonshot via the file interface, its content will be used as the context for AI conversation. Cannot be configured simultaneously with the <code dir="auto">context</code> field.</td></tr></tbody></table>
<h4 id="qwen">Qwen</h4>
<p>The <code dir="auto">type</code> corresponding to Qwen is <code dir="auto">qwen</code>. Its specific configuration fields are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">qwenEnableSearch</code></td><td>boolean</td><td>Optional</td><td>-</td><td>Whether to enable the built-in internet search functionality of Qwen.</td></tr><tr><td><code dir="auto">qwenFileIds</code></td><td>array of string</td><td>Optional</td><td>-</td><td>File IDs uploaded to Dashscope via the file interface, its contents will be used as the context for AI conversation. Cannot be configured simultaneously with the <code dir="auto">context</code> field.</td></tr></tbody></table>
<h4 id="baichuan-ai">Baichuan AI</h4>
<p>The <code dir="auto">type</code> corresponding to Baichuan AI is <code dir="auto">baichuan</code>. It has no specific configuration fields.</p>
<h4 id="yi">Yi</h4>
<p>The <code dir="auto">type</code> corresponding to Yi is <code dir="auto">yi</code>. It has no specific configuration fields.</p>
<h4 id="zhipu-ai">Zhipu AI</h4>
<p>The <code dir="auto">type</code> corresponding to Zhipu AI is <code dir="auto">zhipuai</code>. It has no specific configuration fields.</p>
<h4 id="deepseek">DeepSeek</h4>
<p>The <code dir="auto">type</code> corresponding to DeepSeek is <code dir="auto">deepseek</code>. It has no specific configuration fields.</p>
<h4 id="groq">Groq</h4>
<p>The <code dir="auto">type</code> corresponding to Groq is <code dir="auto">groq</code>. It has no specific configuration fields.</p>
<h4 id="baidu">Baidu</h4>
<p>The <code dir="auto">type</code> corresponding to Baidu is <code dir="auto">baidu</code>. It has no specific configuration fields.</p>
<h4 id="ai360">AI360</h4>
<p>The <code dir="auto">type</code> corresponding to AI360 is <code dir="auto">ai360</code>. It has no specific configuration fields.</p>
<h4 id="mistral">Mistral</h4>
<p>The <code dir="auto">type</code> corresponding to Mistral is <code dir="auto">mistral</code>. It has no specific configuration fields.</p>
<h4 id="minimax">MiniMax</h4>
<p>The <code dir="auto">type</code> corresponding to MiniMax is <code dir="auto">minimax</code>. Its specific configuration fields are as follows:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">minimaxGroupId</code></td><td>string</td><td>Required when using <code dir="auto">abab6.5-chat</code>, <code dir="auto">abab6.5s-chat</code>, <code dir="auto">abab5.5s-chat</code>, or <code dir="auto">abab5.5-chat</code> models</td><td>-</td><td>When using these models, ChatCompletion Pro will be used, and <code dir="auto">groupID</code> needs to be set.</td></tr></tbody></table>
<h4 id="anthropic-claude">Anthropic Claude</h4>
<p>The <code dir="auto">type</code> corresponding to Anthropic Claude is <code dir="auto">claude</code>. Its specific configuration fields are as follows:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">claudeVersion</code></td><td>string</td><td>Optional</td><td>-</td><td>The API version for Claude service, defaults to 2023-06-01</td></tr></tbody></table>
<h4 id="ollama">Ollama</h4>
<p>The <code dir="auto">type</code> corresponding to Ollama is <code dir="auto">ollama</code>. Its specific configuration fields are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">ollamaServerHost</code></td><td>string</td><td>Required</td><td>-</td><td>Host address for the Ollama server</td></tr><tr><td><code dir="auto">ollamaServerPort</code></td><td>number</td><td>Required</td><td>-</td><td>Port number for the Ollama server, defaults to 11434</td></tr></tbody></table>
<h4 id="hunyuan">Hunyuan</h4>
<p>The <code dir="auto">type</code> corresponding to Hunyuan is <code dir="auto">hunyuan</code>. Its specific configuration fields are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">hunyuanAuthId</code></td><td>string</td><td>Required</td><td>-</td><td>ID used for Hunyuan authentication with version v3</td></tr><tr><td><code dir="auto">hunyuanAuthKey</code></td><td>string</td><td>Required</td><td>-</td><td>Key used for Hunyuan authentication with version v3</td></tr></tbody></table>
<h4 id="stepfun">Stepfun</h4>
<p>The <code dir="auto">type</code> corresponding to Stepfun is <code dir="auto">stepfun</code>. It has no specific configuration fields.</p>
<h4 id="cloudflare-workers-ai">Cloudflare Workers AI</h4>
<p>The <code dir="auto">type</code> corresponding to Cloudflare Workers AI is <code dir="auto">cloudflare</code>. Its specific configuration fields are as follows:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cloudflareAccountId</code></td><td>string</td><td>Required</td><td>-</td><td><a href="https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Cloudflare Account ID</a></td></tr></tbody></table>
<h4 id="spark">Spark</h4>
<p>The <code dir="auto">type</code> corresponding to Spark is <code dir="auto">spark</code>. It has no specific configuration fields.</p>
<p>The <code dir="auto">apiTokens</code> field value for iFlytek\u2019s Spark cognitive large model is <code dir="auto">APIKey:APISecret</code>. That is, fill in your own APIKey and APISecret, separated by <code dir="auto">:</code>.</p>
<h4 id="gemini">Gemini</h4>
<p>The <code dir="auto">type</code> corresponding to Gemini is <code dir="auto">gemini</code>. Its specific configuration fields are as follows:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">geminiSafetySetting</code></td><td>map of string</td><td>Optional</td><td>-</td><td>Gemini AI content filtering and safety level settings. Refer to <a href="https://ai.google.dev/gemini-api/docs/safety-settings" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Safety settings</a>.</td></tr></tbody></table>
<h4 id="deepl">DeepL</h4>
<p>The <code dir="auto">type</code> corresponding to DeepL is <code dir="auto">deepl</code>. Its specific configuration fields are as follows:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">targetLang</code></td><td>string</td><td>Required</td><td>-</td><td>Target language required by DeepL translation service.</td></tr></tbody></table>
<h4 id="cohere">Cohere</h4>
<p>The <code dir="auto">type</code> corresponding to Cohere is <code dir="auto">cohere</code>. It has no specific configuration fields.</p>
<h2 id="usage-examples">Usage Examples</h2>
<h3 id="using-openai-protocol-to-proxy-azure-openai-service">Using OpenAI Protocol to Proxy Azure OpenAI Service</h3>
<p>Using the most basic Azure OpenAI service with no context configured.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">azure</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_AZURE_OPENAI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">azureServiceUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: azure\x7F  apiTokens:\x7F    - &#x22;YOUR_AZURE_OPENAI_API_TOKEN&#x22;\x7F  azureServiceUrl: &#x22;https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-qwen-service">Using OpenAI Protocol to Proxy Qwen Service</h3>
<p>Using Qwen service with a model mapping from OpenAI large models to Qwen.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-35-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4o'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-vl-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'text-embedding-v1'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'text-embedding-v1'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;qwen-turbo&#x22;\x7F    &#x27;gpt-35-turbo&#x27;: &#x22;qwen-plus&#x22;\x7F    &#x27;gpt-4-turbo&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4-*&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4o&#x27;: &#x22;qwen-vl-plus&#x22;\x7F    &#x27;text-embedding-v1&#x27;: &#x27;text-embedding-v1&#x27;\x7F    &#x27;*&#x27;: &#x22;qwen-turbo&#x22;"><div></div></button></div></figure></div>
<h3 id="using-original-protocol-to-proxy-baichuan-ai-proxy-application">Using original protocol to Proxy Baichuan AI proxy application</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DASHSCOPE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">original</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_DASHSCOPE_API_TOKEN&#x22;\x7F  protocol: original"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-doubao-large-model-service">Using OpenAI Protocol to Proxy Doubao Large Model Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">doubao</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DOUBAO_API_KEY"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">YOUR_DOUBAO_ENDPOINT</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: doubao\x7F  apiTokens:\x7F    - &#x22;YOUR_DOUBAO_API_KEY&#x22;\x7F  modelMapping:\x7F    &#x27;*&#x27;: YOUR_DOUBAO_ENDPOINT\x7F  timeout: 1200000"><div></div></button></div></figure></div>
<h3 id="using-moonshot-with-its-native-file-context">Using Moonshot with its native file context</h3>
<p>Pre-upload a file to Moonshot to use its content as context for its AI service.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">moonshot</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">moonshotFileId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_FILE_ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-32k"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: moonshot\x7F  apiTokens:\x7F    - &#x22;YOUR_MOONSHOT_API_TOKEN&#x22;\x7F  moonshotFileId: &#x22;YOUR_MOONSHOT_FILE_ID&#x22;\x7F  modelMapping:\x7F    &#x27;*&#x27;: &#x22;moonshot-v1-32k&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-groq-service">Using OpenAI Protocol to Proxy Groq Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GROQ_API_TOKEN"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: groq\x7F  apiTokens:\x7F    - &#x22;YOUR_GROQ_API_TOKEN&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-claude-service">Using OpenAI Protocol to Proxy Claude Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_CLAUDE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2023-06-01"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: claude\x7F  apiTokens:\x7F    - &#x22;YOUR_CLAUDE_API_TOKEN&#x22;\x7F  version: &#x22;2023-06-01&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-hunyuan-service">Using OpenAI Protocol to Proxy Hunyuan Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH KEY>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH ID>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan-lite"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: &#x22;hunyuan&#x22;\x7F  hunyuanAuthKey: &#x22;<YOUR AUTH KEY>&#x22;\x7F  apiTokens:\x7F    - &#x22;&#x22;\x7F  hunyuanAuthId: &#x22;<YOUR AUTH ID>&#x22;\x7F  timeout: 1200000\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;hunyuan-lite&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-baidu-wenxin-service">Using OpenAI Protocol to Proxy Baidu Wenxin Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">baidu</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_BAIDU_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: baidu\x7F  apiTokens:\x7F    - &#x22;YOUR_BAIDU_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;ERNIE-4.0&#x22;\x7F    &#x27;*&#x27;: &#x22;ERNIE-4.0&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-minimax-service">Using OpenAI Protocol to Proxy MiniMax Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">minimax</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">minimaxGroupId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_GROUP_ID"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: minimax\x7F  apiTokens:\x7F    - &#x22;YOUR_MINIMAX_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-3&#x22;: &#x22;abab6.5g-chat&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;abab6.5-chat&#x22;\x7F    &#x22;*&#x22;: &#x22;abab6.5g-chat&#x22;\x7F  minimaxGroupId: &#x22;YOUR_MINIMAX_GROUP_ID&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-ai360-service">Using OpenAI Protocol to Proxy AI360 Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai360</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo-responsibility-8k"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt2-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"text-embedding-3-small"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding_s1_v1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"360gpt-pro"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: ai360\x7F  apiTokens:\x7F    - &#x22;YOUR_MINIMAX_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;360gpt-turbo-responsibility-8k&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;360gpt2-pro&#x22;\x7F    &#x22;gpt-3.5&#x22;: &#x22;360gpt-turbo&#x22;\x7F    &#x22;text-embedding-3-small&#x22;: &#x22;embedding_s1_v1.2&#x22;\x7F    &#x22;*&#x22;: &#x22;360gpt-pro&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-cloudflare-workers-ai-service">Using OpenAI Protocol to Proxy Cloudflare Workers AI Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cloudflare</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_WORKERS_AI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cloudflareAccountId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_CLOUDFLARE_ACCOUNT_ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"@cf/meta/llama-3-8b-instruct"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: cloudflare\x7F  apiTokens:\x7F    - &#x22;YOUR_WORKERS_AI_API_TOKEN&#x22;\x7F  cloudflareAccountId: &#x22;YOUR_CLOUDFLARE_ACCOUNT_ID&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;@cf/meta/llama-3-8b-instruct&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-spark-service">Using OpenAI Protocol to Proxy Spark Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">spark</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"APIKey:APISecret"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3.5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"general"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: spark\x7F  apiTokens:\x7F    - &#x22;APIKey:APISecret&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;generalv3.5&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;generalv3&#x22;\x7F    &#x22;*&#x22;: &#x22;general&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-gemini-service">Using OpenAI Protocol to Proxy Gemini Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gemini</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GEMINI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gemini-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">geminiSafetySetting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_SEXUALLY_EXPLICIT"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HATE_SPEECH"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HARASSMENT"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_DANGEROUS_CONTENT"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"BLOCK_NONE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: gemini\x7F  apiTokens:\x7F    - &#x22;YOUR_GEMINI_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;gemini-pro&#x22;\x7F  geminiSafetySetting:\x7F    &#x22;HARM_CATEGORY_SEXUALLY_EXPLICIT&#x22;: &#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HATE_SPEECH&#x22;: &#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HARASSMENT&#x22;: &#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_DANGEROUS_CONTENT&#x22;: &#x22;BLOCK_NONE&#x22;"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-to-proxy-deepl-text-translation-service">Using OpenAI Protocol to Proxy DeepL Text Translation Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">deepl</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_DEEPL_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">targetLang</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ZH"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: deepl\x7F  apiTokens:\x7F    - &#x22;YOUR_DEEPL_API_TOKEN&#x22;\x7F  targetLang: &#x22;ZH&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong>
In this context, <code dir="auto">model</code> indicates the type of DeepL service, which can only be <code dir="auto">Free</code> or <code dir="auto">Pro</code>. The <code dir="auto">content</code> sets the text to be translated; in the <code dir="auto">role: system</code> <code dir="auto">content</code>, context that may affect the translation but itself will not be translated can be included. For example, when translating product names, product descriptions can be passed as context, and this additional context may improve the quality of the translation.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Free"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"money"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sit by the bank"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"a bank in China"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;Free&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;money&#x22;\x7F    },\x7F    {\x7F      &#x22;content&#x22;: &#x22;sit by the bank&#x22;\x7F    },\x7F    {\x7F      &#x22;content&#x22;: &#x22;a bank in China&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"EN"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5750\u5E84"</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"EN"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4E2D\u56FD\u94F6\u884C"</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1722747752</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Free"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: { &#x22;name&#x22;: &#x22;EN&#x22;, &#x22;role&#x22;: &#x22;assistant&#x22;, &#x22;content&#x22;: &#x22;\u5750\u5E84&#x22; }\x7F    },\x7F    {\x7F      &#x22;index&#x22;: 1,\x7F      &#x22;message&#x22;: { &#x22;name&#x22;: &#x22;EN&#x22;, &#x22;role&#x22;: &#x22;assistant&#x22;, &#x22;content&#x22;: &#x22;\u4E2D\u56FD\u94F6\u884C&#x22; }\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1722747752,\x7F  &#x22;model&#x22;: &#x22;Free&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {}\x7F}"><div></div></button></div></figure></div>`,n={title:"AI Proxy",keywords:["AI Gateway","AI Proxy"],description:"AI Proxy plugin configuration reference"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-provider/ai-proxy.md",a=void 0,p=function(){return`## Function Description
\`AI Proxy\` plugin implements AI proxy functionality based on OpenAI API contracts. It currently supports AI service providers such as OpenAI, Azure OpenAI, Moonshot, and Qwen.

> **Note:**
> When the request path suffix matches \`/v1/chat/completions\`, corresponding to text generation scenarios, the request body will be parsed using OpenAI's text generation protocol and then converted to the corresponding LLM vendor's text generation protocol.
>
> When the request path suffix matches \`/v1/embeddings\`, corresponding to text vector scenarios, the request body will be parsed using OpenAI's text vector protocol and then converted to the corresponding LLM vendor's text vector protocol.

## Running Attributes
Plugin execution phase: \`Default phase\`  
Plugin execution priority: \`100\`

## Configuration Fields
### Basic Configuration
| Name         | Data Type   | Requirement | Default Value | Description                            |
|--------------|-------------|-------------|---------------|----------------------------------------|
| \`provider\`   | object      | Required    | -             | Information about the target AI service provider |

The description of fields in \`provider\` is as follows:

| Name              | Data Type        | Requirement | Default Value | Description                                                                                               |
|-------------------|------------------|-------------|---------------|-----------------------------------------------------------------------------------------------------------|
| \`type\`            | string           | Required    | -             | Name of the AI service provider                                                                             |
| \`apiTokens\`       | array of string  | Optional    | -             | Tokens for authentication when accessing the AI service. If multiple tokens are provided, the plugin will randomly choose one when making requests. Some service providers only support one token configuration. |
| \`timeout\`         | number           | Optional    | -             | Timeout for accessing the AI service, in milliseconds. The default value is 120000, which is 2 minutes. |
| \`modelMapping\`    | map of string    | Optional    | -             | AI model mapping table for mapping model names in requests to supported model names by the service provider. <br/>1. Supports prefix matching. For example, "gpt-3-*" matches all models whose names start with "gpt-3-"; <br/>2. Supports using "*" as a key to configure a general fallback mapping; <br/>3. If the target name in the mapping is an empty string "", it means to retain the original model name. |
| \`protocol\`        | string           | Optional    | -             | The API interface contract provided by the plugin. Currently supports the following values: openai (default, uses OpenAI's interface contract), original (uses the original interface contract of the target service provider) |
| \`context\`         | object           | Optional    | -             | Configuration for AI conversation context information                                                         |
| \`customSettings\`  | array of customSetting | Optional | -             | Specify override or fill parameters for AI requests                                                         |

The description of fields in \`context\` is as follows:

| Name            | Data Type   | Requirement | Default Value | Description                                      |
|-----------------|-------------|-------------|---------------|--------------------------------------------------|
| \`fileUrl\`       | string      | Required    | -             | URL of the file that stores AI conversation context. Only pure text file content is supported. |
| \`serviceName\`   | string      | Required    | -             | The complete name of the Higress backend service corresponding to the URL.    |
| \`servicePort\`   | number      | Required    | -             | The access port of the Higress backend service corresponding to the URL.     |

The description of fields in \`customSettings\` is as follows:

| Name        | Data Type                | Requirement | Default Value | Description                                                              |
|-------------|-------------------------|-------------|---------------|--------------------------------------------------------------------------|
| \`name\`      | string                  | Required    | -             | Name of the parameter to set, e.g., \`max_tokens\`                       |
| \`value\`     | string/int/float/bool   | Required    | -             | Value for the parameter to set, e.g., 0                                 |
| \`mode\`      | string                  | Optional    | "auto"        | Mode for parameter settings, can be set to "auto" or "raw". If "auto", parameter names will be automatically rewritten based on the protocol; if "raw", no rewriting or validation checks will be done. |
| \`overwrite\` | bool                    | Optional    | true          | If false, the parameter will only be filled if the user hasn't set it; otherwise, it will overwrite the user's original parameter settings.  |

Custom settings will follow the table below to replace corresponding fields based on \`name\` and protocol. Users need to fill in values that exist in the \`settingName\` column of the table. For example, if the user sets \`name\` to \`max_tokens\`, it will be replaced by \`max_tokens\` in the OpenAI protocol, and by \`maxOutputTokens\` in Gemini. \`none\` indicates that the protocol does not support this parameter. If \`name\` is not in this table or the corresponding protocol does not support this parameter, and if raw mode is not set, the configuration will not take effect.

| settingName  | openai      | baidu             | spark       | qwen        | gemini          | hunyuan     | claude      | minimax            |
|--------------|-------------|-------------------|-------------|-------------|------------------|-------------|-------------|--------------------|
| max_tokens   | max_tokens  | max_output_tokens  | max_tokens  | max_tokens  | maxOutputTokens  | none        | max_tokens  | tokens_to_generate  |
| temperature   | temperature | temperature        | temperature | temperature | temperature      | Temperature | temperature | temperature        |
| top_p        | top_p       | top_p              | none        | top_p       | topP             | TopP        | top_p       | top_p              |
| top_k        | none        | none               | top_k       | none        | topK             | none        | top_k       | none               |
| seed         | seed        | none               | none        | seed        | none             | none        | none        | none               |

If raw mode is enabled, custom settings will directly use the input \`name\` and \`value\` to change the JSON content of the request without any restrictions or modifications to the parameter names. 

For most protocols, custom settings will modify or fill parameters at the root path of the JSON content. For the \`qwen\` protocol, the ai-proxy will configure under the \`parameters\` sub-path in JSON. For the \`gemini\` protocol, it will be configured under the \`generation_config\` sub-path.

### Provider-Specific Configuration
#### OpenAI
The \`type\` corresponding to OpenAI is \`openai\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                                        |
|------------------------|-----------|-------------|---------------|------------------------------------------------------------------------------------|
| \`openaiCustomUrl\`      | string    | Optional    | -             | Custom backend URL based on OpenAI protocol, e.g., www.example.com/myai/v1/chat/completions |
| \`responseJsonSchema\`   | object    | Optional    | -             | Predefined Json Schema that OpenAI responses must satisfy, currently only supported by specific models. |

#### Azure OpenAI
The \`type\` corresponding to Azure OpenAI is \`azure\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                           |
|------------------------|-----------|-------------|---------------|-----------------------------------------------------------------------|
| \`azureServiceUrl\`      | string    | Required    | -             | URL of Azure OpenAI service, must include \`api-version\` query parameter. |
**Note:** Azure OpenAI only supports the configuration of one API Token.

#### Moonshot
The \`type\` corresponding to Moonshot is \`moonshot\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                           |
|------------------------|-----------|-------------|---------------|-----------------------------------------------------------------------|
| \`moonshotFileId\`       | string    | Optional    | -             | File ID uploaded to Moonshot via the file interface, its content will be used as the context for AI conversation. Cannot be configured simultaneously with the \`context\` field. |

#### Qwen
The \`type\` corresponding to Qwen is \`qwen\`. Its specific configuration fields are as follows:

| Name                   | Data Type            | Requirement | Default Value | Description                                                          |
|------------------------|----------------------|-------------|---------------|----------------------------------------------------------------------|
| \`qwenEnableSearch\`     | boolean              | Optional    | -             | Whether to enable the built-in internet search functionality of Qwen. |
| \`qwenFileIds\`          | array of string      | Optional    | -             | File IDs uploaded to Dashscope via the file interface, its contents will be used as the context for AI conversation. Cannot be configured simultaneously with the \`context\` field. |

#### Baichuan AI
The \`type\` corresponding to Baichuan AI is \`baichuan\`. It has no specific configuration fields.

#### Yi
The \`type\` corresponding to Yi is \`yi\`. It has no specific configuration fields.

#### Zhipu AI
The \`type\` corresponding to Zhipu AI is \`zhipuai\`. It has no specific configuration fields.

#### DeepSeek
The \`type\` corresponding to DeepSeek is \`deepseek\`. It has no specific configuration fields.

#### Groq
The \`type\` corresponding to Groq is \`groq\`. It has no specific configuration fields.

#### Baidu
The \`type\` corresponding to Baidu is \`baidu\`. It has no specific configuration fields.

#### AI360
The \`type\` corresponding to AI360 is \`ai360\`. It has no specific configuration fields.

#### Mistral
The \`type\` corresponding to Mistral is \`mistral\`. It has no specific configuration fields.

#### MiniMax
The \`type\` corresponding to MiniMax is \`minimax\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement                             | Default Value | Description                                                        |
|------------------------|-----------|-----------------------------------------|---------------|--------------------------------------------------------------------|
| \`minimaxGroupId\`       | string    | Required when using \`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, or \`abab5.5-chat\` models | -             | When using these models, ChatCompletion Pro will be used, and \`groupID\` needs to be set. |

#### Anthropic Claude
The \`type\` corresponding to Anthropic Claude is \`claude\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                          |
|------------------------|-----------|-------------|---------------|----------------------------------------------------------------------|
| \`claudeVersion\`        | string    | Optional    | -             | The API version for Claude service, defaults to 2023-06-01         |

#### Ollama
The \`type\` corresponding to Ollama is \`ollama\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                         |
|------------------------|-----------|-------------|---------------|---------------------------------------------------------------------|
| \`ollamaServerHost\`     | string    | Required    | -             | Host address for the Ollama server                                 |
| \`ollamaServerPort\`     | number    | Required    | -             | Port number for the Ollama server, defaults to 11434              |

#### Hunyuan
The \`type\` corresponding to Hunyuan is \`hunyuan\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                         |
|------------------------|-----------|-------------|---------------|---------------------------------------------------------------------|
| \`hunyuanAuthId\`        | string    | Required    | -             | ID used for Hunyuan authentication with version v3                |
| \`hunyuanAuthKey\`       | string    | Required    | -             | Key used for Hunyuan authentication with version v3                |

#### Stepfun
The \`type\` corresponding to Stepfun is \`stepfun\`. It has no specific configuration fields.

#### Cloudflare Workers AI
The \`type\` corresponding to Cloudflare Workers AI is \`cloudflare\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                         |
|------------------------|-----------|-------------|---------------|---------------------------------------------------------------------|
| \`cloudflareAccountId\`  | string    | Required    | -             | [Cloudflare Account ID](https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id) |

#### Spark
The \`type\` corresponding to Spark is \`spark\`. It has no specific configuration fields. 

The \`apiTokens\` field value for iFlytek\u2019s Spark cognitive large model is \`APIKey:APISecret\`. That is, fill in your own APIKey and APISecret, separated by \`:\`.

#### Gemini
The \`type\` corresponding to Gemini is \`gemini\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                                      |
|------------------------|-----------|-------------|---------------|------------------------------------------------------------------|
| \`geminiSafetySetting\`  | map of string | Optional  | -             | Gemini AI content filtering and safety level settings. Refer to [Safety settings](https://ai.google.dev/gemini-api/docs/safety-settings). |

#### DeepL
The \`type\` corresponding to DeepL is \`deepl\`. Its specific configuration fields are as follows:

| Name                   | Data Type | Requirement | Default Value | Description                                      |
|------------------------|-----------|-------------|---------------|--------------------------------------------------|
| \`targetLang\`           | string    | Required    | -             | Target language required by DeepL translation service. |

#### Cohere
The \`type\` corresponding to Cohere is \`cohere\`. It has no specific configuration fields.

## Usage Examples
### Using OpenAI Protocol to Proxy Azure OpenAI Service
Using the most basic Azure OpenAI service with no context configured.

**Configuration Information**
\`\`\`yaml
provider:
  type: azure
  apiTokens:
    - "YOUR_AZURE_OPENAI_API_TOKEN"
  azureServiceUrl: "https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview"
\`\`\`
### Using OpenAI Protocol to Proxy Qwen Service
Using Qwen service with a model mapping from OpenAI large models to Qwen.

**Configuration Information**
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
### Using original protocol to Proxy Baichuan AI proxy application
**Configuration Information**
\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_DASHSCOPE_API_TOKEN"
  protocol: original
\`\`\`
### Using OpenAI Protocol to Proxy Doubao Large Model Service
**Configuration Information**
\`\`\`yaml
provider:
  type: doubao
  apiTokens:
    - "YOUR_DOUBAO_API_KEY"
  modelMapping:
    '*': YOUR_DOUBAO_ENDPOINT
  timeout: 1200000
\`\`\`
### Using Moonshot with its native file context
Pre-upload a file to Moonshot to use its content as context for its AI service.

**Configuration Information**
\`\`\`yaml
provider:
  type: moonshot
  apiTokens:
    - "YOUR_MOONSHOT_API_TOKEN"
  moonshotFileId: "YOUR_MOONSHOT_FILE_ID"
  modelMapping:
    '*': "moonshot-v1-32k"
\`\`\`
### Using OpenAI Protocol to Proxy Groq Service
**Configuration Information**
\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
\`\`\`
### Using OpenAI Protocol to Proxy Claude Service
**Configuration Information**
\`\`\`yaml
provider:
  type: claude
  apiTokens:
    - "YOUR_CLAUDE_API_TOKEN"
  version: "2023-06-01"
\`\`\`
### Using OpenAI Protocol to Proxy Hunyuan Service
**Configuration Information**
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
### Using OpenAI Protocol to Proxy Baidu Wenxin Service
**Configuration Information**
\`\`\`yaml
provider:
  type: baidu
  apiTokens:
    - "YOUR_BAIDU_API_TOKEN"
  modelMapping:
    'gpt-3': "ERNIE-4.0"
    '*': "ERNIE-4.0"
\`\`\`
### Using OpenAI Protocol to Proxy MiniMax Service
**Configuration Information**
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
### Using OpenAI Protocol to Proxy AI360 Service
**Configuration Information**
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
### Using OpenAI Protocol to Proxy Cloudflare Workers AI Service
**Configuration Information**
\`\`\`yaml
provider:
  type: cloudflare
  apiTokens:
    - "YOUR_WORKERS_AI_API_TOKEN"
  cloudflareAccountId: "YOUR_CLOUDFLARE_ACCOUNT_ID"
  modelMapping:
    "*": "@cf/meta/llama-3-8b-instruct"
\`\`\`
### Using OpenAI Protocol to Proxy Spark Service
**Configuration Information**
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
### Using OpenAI Protocol to Proxy Gemini Service
**Configuration Information**
\`\`\`yaml
provider:
  type: gemini
  apiTokens:
    - "YOUR_GEMINI_API_TOKEN"
  modelMapping:
    "*": "gemini-pro"
  geminiSafetySetting:
    "HARM_CATEGORY_SEXUALLY_EXPLICIT": "BLOCK_NONE"
    "HARM_CATEGORY_HATE_SPEECH": "BLOCK_NONE"
    "HARM_CATEGORY_HARASSMENT": "BLOCK_NONE"
    "HARM_CATEGORY_DANGEROUS_CONTENT": "BLOCK_NONE"
\`\`\`
### Using OpenAI Protocol to Proxy DeepL Text Translation Service
**Configuration Information**
\`\`\`yaml
provider:
  type: deepl
  apiTokens:
    - "YOUR_DEEPL_API_TOKEN"
  targetLang: "ZH"
\`\`\`
**Request Example**
In this context, \`model\` indicates the type of DeepL service, which can only be \`Free\` or \`Pro\`. The \`content\` sets the text to be translated; in the \`role: system\` \`content\`, context that may affect the translation but itself will not be translated can be included. For example, when translating product names, product descriptions can be passed as context, and this additional context may improve the quality of the translation.
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
**Response Example**
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
`},o=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"basic-configuration",text:"Basic Configuration"},{depth:3,slug:"provider-specific-configuration",text:"Provider-Specific Configuration"},{depth:4,slug:"openai",text:"OpenAI"},{depth:4,slug:"azure-openai",text:"Azure OpenAI"},{depth:4,slug:"moonshot",text:"Moonshot"},{depth:4,slug:"qwen",text:"Qwen"},{depth:4,slug:"baichuan-ai",text:"Baichuan AI"},{depth:4,slug:"yi",text:"Yi"},{depth:4,slug:"zhipu-ai",text:"Zhipu AI"},{depth:4,slug:"deepseek",text:"DeepSeek"},{depth:4,slug:"groq",text:"Groq"},{depth:4,slug:"baidu",text:"Baidu"},{depth:4,slug:"ai360",text:"AI360"},{depth:4,slug:"mistral",text:"Mistral"},{depth:4,slug:"minimax",text:"MiniMax"},{depth:4,slug:"anthropic-claude",text:"Anthropic Claude"},{depth:4,slug:"ollama",text:"Ollama"},{depth:4,slug:"hunyuan",text:"Hunyuan"},{depth:4,slug:"stepfun",text:"Stepfun"},{depth:4,slug:"cloudflare-workers-ai",text:"Cloudflare Workers AI"},{depth:4,slug:"spark",text:"Spark"},{depth:4,slug:"gemini",text:"Gemini"},{depth:4,slug:"deepl",text:"DeepL"},{depth:4,slug:"cohere",text:"Cohere"},{depth:2,slug:"usage-examples",text:"Usage Examples"},{depth:3,slug:"using-openai-protocol-to-proxy-azure-openai-service",text:"Using OpenAI Protocol to Proxy Azure OpenAI Service"},{depth:3,slug:"using-openai-protocol-to-proxy-qwen-service",text:"Using OpenAI Protocol to Proxy Qwen Service"},{depth:3,slug:"using-original-protocol-to-proxy-baichuan-ai-proxy-application",text:"Using original protocol to Proxy Baichuan AI proxy application"},{depth:3,slug:"using-openai-protocol-to-proxy-doubao-large-model-service",text:"Using OpenAI Protocol to Proxy Doubao Large Model Service"},{depth:3,slug:"using-moonshot-with-its-native-file-context",text:"Using Moonshot with its native file context"},{depth:3,slug:"using-openai-protocol-to-proxy-groq-service",text:"Using OpenAI Protocol to Proxy Groq Service"},{depth:3,slug:"using-openai-protocol-to-proxy-claude-service",text:"Using OpenAI Protocol to Proxy Claude Service"},{depth:3,slug:"using-openai-protocol-to-proxy-hunyuan-service",text:"Using OpenAI Protocol to Proxy Hunyuan Service"},{depth:3,slug:"using-openai-protocol-to-proxy-baidu-wenxin-service",text:"Using OpenAI Protocol to Proxy Baidu Wenxin Service"},{depth:3,slug:"using-openai-protocol-to-proxy-minimax-service",text:"Using OpenAI Protocol to Proxy MiniMax Service"},{depth:3,slug:"using-openai-protocol-to-proxy-ai360-service",text:"Using OpenAI Protocol to Proxy AI360 Service"},{depth:3,slug:"using-openai-protocol-to-proxy-cloudflare-workers-ai-service",text:"Using OpenAI Protocol to Proxy Cloudflare Workers AI Service"},{depth:3,slug:"using-openai-protocol-to-proxy-spark-service",text:"Using OpenAI Protocol to Proxy Spark Service"},{depth:3,slug:"using-openai-protocol-to-proxy-gemini-service",text:"Using OpenAI Protocol to Proxy Gemini Service"},{depth:3,slug:"using-openai-protocol-to-proxy-deepl-text-translation-service",text:"Using OpenAI Protocol to Proxy DeepL Text Translation Service"}]},t=l((f,g,x)=>{const{layout:m,...i}=n;return i.file=s,i.url=a,c`${u()}${v(e)}`})});export{t as Content,h as __tla,o as compiledContent,t as default,s as file,n as frontmatter,d as getHeadings,p as rawContent,a as url};
