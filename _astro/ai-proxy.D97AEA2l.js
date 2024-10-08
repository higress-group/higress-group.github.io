import{c,__tla as o}from"./astro-component.CD2fzakh.js";import{r as E,m as v,u as r,__tla as y}from"./constant.BH97KGt6.js";import{__tla as x}from"./astro/assets-service.Bk7KqR8o.js";let e,t,n,a,l,d,i,f=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">AI Proxy</code> plugin implements AI proxy functionality based on the OpenAI API contract. It currently supports AI service providers such as OpenAI, Azure OpenAI, Moonshot, and Qwen.</p>
<blockquote>
<p><strong>Note:</strong></p>
</blockquote>
<blockquote>
<p>When the request path suffix matches <code dir="auto">/v1/chat/completions</code>, it corresponds to text-to-text scenarios. The request body will be parsed using OpenAI\u2019s text-to-text protocol and then converted to the corresponding LLM vendor\u2019s text-to-text protocol.</p>
</blockquote>
<blockquote>
<p>When the request path suffix matches <code dir="auto">/v1/embeddings</code>, it corresponds to text vector scenarios. The request body will be parsed using OpenAI\u2019s text vector protocol and then converted to the corresponding LLM vendor\u2019s text vector protocol.</p>
</blockquote>
<h2 id="configuration-fields">Configuration Fields</h2>
<h3 id="basic-configuration">Basic Configuration</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">provider</code></td><td>object</td><td>Required</td><td>-</td><td>Configures information for the target AI service provider</td></tr></tbody></table>
<p><strong>Details for the <code dir="auto">provider</code> configuration fields:</strong></p>






















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">type</code></td><td>string</td><td>Required</td><td>-</td><td>Name of the AI service provider</td></tr><tr><td><code dir="auto">apiTokens</code></td><td>Array of string</td><td>Optional</td><td>-</td><td>Tokens used for authentication when accessing AI services. If multiple tokens are configured, the plugin randomly selects one for each request. Some service providers only support configuring a single token.</td></tr><tr><td><code dir="auto">timeout</code></td><td>number</td><td>Optional</td><td>-</td><td>Timeout for accessing AI services. Measured in milliseconds. The default value is 120000, equivalent to 2 minutes.</td></tr><tr><td><code dir="auto">modelMapping</code></td><td>Map of string</td><td>Optional</td><td>-</td><td>Model Mapping Table for AI Models, used to map model names in requests to the names supported by service providers.<br>1. Prefix Matching is Supported. For example, use \u201Cgpt-3-<em>\u201D to match all models that start with \u201Cgpt-3-\u201D.<br>2. Supports using "</em>" as a key for a generic fallback mapping relationship.<br>3.  If the target name in the mapping is an empty string ("")**, it indicates that the original model name should be retained.</td></tr><tr><td><code dir="auto">protocol</code></td><td>string</td><td>Optional</td><td>-</td><td>API contract provided by the plugin. Currently supports the following values: openai (default, uses OpenAI\u2019s API contract), original (uses the raw API contract of the target service provider)</td></tr><tr><td><code dir="auto">context</code></td><td>object</td><td>Optional</td><td>-</td><td>Configures context information for AI conversations</td></tr></tbody></table>
<p><strong>Details for the <code dir="auto">context</code> configuration fields:</strong></p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">fileUrl</code></td><td>string</td><td>Required</td><td>-</td><td>URL for storing AI conversation context. Only supports file content of plain text type</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>Required</td><td>-</td><td>Full name of the Higress backend service corresponding to the URL</td></tr><tr><td><code dir="auto">servicePort</code></td><td>number</td><td>Required</td><td>-</td><td>Port for accessing the Higress backend service corresponding to the URL</td></tr></tbody></table>
<h3 id="provider-specific-configurations">Provider-Specific Configurations</h3>
<h4 id="openai">OpenAI</h4>
<p>For OpenAI, the corresponding <code dir="auto">type</code> is <code dir="auto">openai</code>. Its unique configuration fields include:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">openaiCustomUrl</code></td><td>string</td><td>Optional</td><td>-</td><td>A custom backend URL based on the OpenAI protocol, e.g., <a href="http://www.example.com/myai/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">www.example.com/myai/v1/chat/completions</a></td></tr></tbody></table>
<h4 id="azure-openai">Azure OpenAI</h4>
<p>For Azure OpenAI, the corresponding <code dir="auto">type</code> is <code dir="auto">azure</code>. Its unique configuration field is:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">azureServiceUrl</code></td><td>string</td><td>Required</td><td>-</td><td>The URL of the Azure OpenAI service, must include the <code dir="auto">api-version</code> query parameter.</td></tr></tbody></table>
<p><strong>Note:</strong> Azure OpenAI only supports configuring one API Token.</p>
<h4 id="moonshot">Moonshot</h4>
<p>For Moonshot, the corresponding <code dir="auto">type</code> is <code dir="auto">moonshot</code>. Its unique configuration field is:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">moonshotFileId</code></td><td>string</td><td>Optional</td><td>-</td><td>The file ID uploaded via the file interface to Moonshot, whose content will be used as context for AI conversations. Cannot be configured with the <code dir="auto">context</code> field.</td></tr></tbody></table>
<h4 id="qwen-tongyi-qwen">Qwen (Tongyi Qwen)</h4>
<p>For Qwen (Tongyi Qwen), the corresponding <code dir="auto">type</code> is <code dir="auto">qwen</code>. Its unique configuration fields are:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">qwenEnableSearch</code></td><td>boolean</td><td>Optional</td><td>-</td><td>Whether to enable the built-in Internet search function provided by Qwen.</td></tr><tr><td><code dir="auto">qwenFileIds</code></td><td>array of string</td><td>Optional</td><td>-</td><td>The file IDs uploaded via the Dashscope file interface, whose content will be used as context for AI conversations. Cannot be configured with the <code dir="auto">context</code> field.</td></tr></tbody></table>
<h4 id="baichuan-ai">Baichuan AI</h4>
<p>For Baichuan AI, the corresponding <code dir="auto">type</code> is <code dir="auto">baichuan</code>. It has no unique configuration fields.</p>
<h4 id="yi-zero-one-universe">Yi (Zero One Universe)</h4>
<p>For Yi (Zero One Universe), the corresponding <code dir="auto">type</code> is <code dir="auto">yi</code>. It has no unique configuration fields.</p>
<h4 id="zhipu-ai">Zhipu AI</h4>
<p>For Zhipu AI, the corresponding <code dir="auto">type</code> is <code dir="auto">zhipuai</code>. It has no unique configuration fields.</p>
<h4 id="deepseek">DeepSeek</h4>
<p>For DeepSeek, the corresponding <code dir="auto">type</code> is <code dir="auto">deepseek</code>. It has no unique configuration fields.</p>
<h4 id="groq">Groq</h4>
<p>For Groq, the corresponding <code dir="auto">type</code> is <code dir="auto">groq</code>. It has no unique configuration fields.</p>
<h4 id="ernie-bot">ERNIE Bot</h4>
<p>For ERNIE Bot, the corresponding <code dir="auto">type</code> is <code dir="auto">baidu</code>. It has no unique configuration fields.</p>
<h4 id="minimax">Minimax</h4>
<p>For Minimax, the corresponding <code dir="auto">type</code> is <code dir="auto">minimax</code>. Its unique configuration field is:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">minimaxGroupId</code></td><td>string</td><td>Required when using models <code dir="auto">abab6.5-chat</code>, <code dir="auto">abab6.5s-chat</code>, <code dir="auto">abab5.5s-chat</code>, <code dir="auto">abab5.5-chat</code></td><td>-</td><td>When using models <code dir="auto">abab6.5-chat</code>, <code dir="auto">abab6.5s-chat</code>, <code dir="auto">abab5.5s-chat</code>, <code dir="auto">abab5.5-chat</code>, Minimax uses ChatCompletion Pro and requires setting the groupID.</td></tr></tbody></table>
<h4 id="anthropic-claude">Anthropic Claude</h4>
<p>For Anthropic Claude, the corresponding <code dir="auto">type</code> is <code dir="auto">claude</code>. Its unique configuration field is:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">claudeVersion</code></td><td>string</td><td>Optional</td><td>-</td><td>The version of the Claude service\u2019s API, default is 2023-06-01.</td></tr></tbody></table>
<h4 id="ollama">Ollama</h4>
<p>For Ollama, the corresponding <code dir="auto">type</code> is <code dir="auto">ollama</code>. Its unique configuration field is:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">ollamaServerHost</code></td><td>string</td><td>Required</td><td>-</td><td>The host address of the Ollama server.</td></tr><tr><td><code dir="auto">ollamaServerPort</code></td><td>number</td><td>Required</td><td>-</td><td>The port number of the Ollama server, defaults to 11434.</td></tr></tbody></table>
<h4 id="hunyuan">Hunyuan</h4>
<p>For Hunyuan, the corresponding <code dir="auto">type</code> is <code dir="auto">hunyuan</code>. Its unique configuration fields are:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">hunyuanAuthId</code></td><td>string</td><td>Required</td><td>-</td><td>Hunyuan authentication ID for version 3 authentication.</td></tr><tr><td><code dir="auto">hunyuanAuthKey</code></td><td>string</td><td>Required</td><td>-</td><td>Hunyuan authentication key for version 3 authentication.</td></tr></tbody></table>
<h4 id="stepfun">Stepfun</h4>
<p>For Stepfun, the corresponding <code dir="auto">type</code> is <code dir="auto">stepfun</code>. It has no unique configuration fields.</p>
<h4 id="cloudflare-workers-ai">Cloudflare Workers AI</h4>
<p>For Cloudflare Workers AI, the corresponding <code dir="auto">type</code> is <code dir="auto">cloudflare</code>. Its unique configuration field is:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">cloudflareAccountId</code></td><td>string</td><td>Required</td><td>-</td><td><a href="https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Cloudflare Account ID</a>.</td></tr></tbody></table>
<h4 id="spark">Spark</h4>
<p>For Spark, the corresponding <code dir="auto">type</code> is <code dir="auto">spark</code>. It has no unique configuration fields.</p>
<p>The <code dir="auto">apiTokens</code> field value for Xunfei Spark (Xunfei Star) is <code dir="auto">APIKey:APISecret</code>. That is, enter your own APIKey and APISecret, separated by <code dir="auto">:</code>.</p>
<h4 id="gemini">Gemini</h4>
<p>For Gemini, the corresponding <code dir="auto">type</code> is <code dir="auto">gemini</code>. Its unique configuration field is:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">geminiSafetySetting</code></td><td>map of string</td><td>Optional</td><td>-</td><td>Gemini AI content filtering and safety level settings. Refer to <a href="https://ai.google.dev/gemini-api/docs/safety-settings" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Safety settings</a>.</td></tr></tbody></table>
<h2 id="usage-examples">Usage Examples</h2>
<h3 id="using-openai-protocol-proxy-for-azure-openai-service">Using OpenAI Protocol Proxy for Azure OpenAI Service</h3>
<p>Using the basic Azure OpenAI service without configuring any context.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">azure</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_AZURE_OPENAI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">azureServiceUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview"</span><span style="--0:#E1E4E8">,</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: azure\x7F  apiTokens:\x7F    - &#x22;YOUR_AZURE_OPENAI_API_TOKEN&#x22;\x7F  azureServiceUrl: &#x22;https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview&#x22;,"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content_filter_results"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"hate"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"self_harm"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"sexual"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"violence"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello! I am an AI assistant, here to answer your questions and provide assistance. Is there anything I can help you with?"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1714807624</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-abcdefg1234567890"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-35-turbo-16k"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"prompt_filter_results"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"prompt_index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content_filter_results"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"hate"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"self_harm"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"sexual"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"violence"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"filtered"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"severity"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safe"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"system_fingerprint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">40</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">55</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;content_filter_results&#x22;: {\x7F        &#x22;hate&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;self_harm&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;sexual&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;violence&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        }\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;message&#x22;: {\x7F        &#x22;content&#x22;: &#x22;Hello! I am an AI assistant, here to answer your questions and provide assistance. Is there anything I can help you with?&#x22;,\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;\x7F      }\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1714807624,\x7F  &#x22;id&#x22;: &#x22;chatcmpl-abcdefg1234567890&#x22;,\x7F  &#x22;model&#x22;: &#x22;gpt-35-turbo-16k&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;prompt_filter_results&#x22;: [\x7F    {\x7F      &#x22;prompt_index&#x22;: 0,\x7F      &#x22;content_filter_results&#x22;: {\x7F        &#x22;hate&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;self_harm&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;sexual&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        },\x7F        &#x22;violence&#x22;: {\x7F          &#x22;filtered&#x22;: false,\x7F          &#x22;severity&#x22;: &#x22;safe&#x22;\x7F        }\x7F      }\x7F    }\x7F  ],\x7F  &#x22;system_fingerprint&#x22;: null,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;completion_tokens&#x22;: 40,\x7F    &#x22;prompt_tokens&#x22;: 15,\x7F    &#x22;total_tokens&#x22;: 55\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-qwen-service">Using OpenAI Protocol Proxy for Qwen Service</h3>
<p>Using Qwen service and configuring the mapping relationship between OpenAI large models and Qwen models.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-35-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-4-*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'text-embedding-v1'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'text-embedding-v1'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;qwen-turbo&#x22;\x7F    &#x27;gpt-35-turbo&#x27;: &#x22;qwen-plus&#x22;\x7F    &#x27;gpt-4-turbo&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;gpt-4-*&#x27;: &#x22;qwen-max&#x22;\x7F    &#x27;text-embedding-v1&#x27;: &#x27;text-embedding-v1&#x27;\x7F    &#x27;*&#x27;: &#x22;qwen-turbo&#x22;"><div></div></button></div></figure></div>
<p><strong>AI Dialogue Request Example</strong></p>
<p>URL: <code dir="auto">http://your-domain/v1/chat/completions</code></p>
<p>Request Body:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"input"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;text-embedding-v1&#x22;,\x7F  &#x22;input&#x22;: &#x22;Hello&#x22;\x7F}"><div></div></button></div></figure></div>
<p>Response Body Example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"list"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"data"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"embedding"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"embedding"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-1.0437825918197632</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">5.208984375</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">3.0483806133270264</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-1.7897135019302368</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-2.0107421875</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#FDAEB7;--0fs:italic">...</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.8125</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-1.1759847402572632</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">0.8174641728401184</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">1.0432943105697632</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-0.5885213017463684</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;object&#x22;: &#x22;list&#x22;,\x7F  &#x22;data&#x22;: [\x7F    {\x7F      &#x22;object&#x22;: &#x22;embedding&#x22;,\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;embedding&#x22;: [\x7F        -1.0437825918197632,\x7F        5.208984375,\x7F        3.0483806133270264,\x7F        -1.7897135019302368,\x7F        -2.0107421875,\x7F        ...,\x7F        0.8125,\x7F        -1.1759847402572632,\x7F        0.8174641728401184,\x7F        1.0432943105697632,\x7F        -0.5885213017463684\x7F      ]\x7F    }\x7F  ],\x7F  &#x22;model&#x22;: &#x22;text-embedding-v1&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 1,\x7F    &#x22;total_tokens&#x22;: 1\x7F  }\x7F}"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<p>URL: <code dir="auto">http://your-domain/v1/embeddings</code></p>
<p>Example Request Content:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"Hello world!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;text-embedding-v1&#x22;,\x7F    &#x22;input&#x22;: [\x7F        &#x22;Hello world!&#x22;\x7F    ]\x7F}"><div></div></button></div></figure></div>
<p>Example Response Content:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"c2518bd3-0f46-97d1-be34-bb5777cb3108"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"I am Qwen, an AI assistant developed by Alibaba Cloud. I can answer various questions, provide information, and engage in conversations with users. What can I assist you with?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1715175072</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">24</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">33</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">57</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;c2518bd3-0f46-97d1-be34-bb5777cb3108&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;I am Qwen, an AI assistant developed by Alibaba Cloud. I can answer various questions, provide information, and engage in conversations with users. What can I assist you with?&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1715175072,\x7F  &#x22;model&#x22;: &#x22;qwen-turbo&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 24,\x7F    &#x22;completion_tokens&#x22;: 33,\x7F    &#x22;total_tokens&#x22;: 57\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-qwen-service-with-pure-text-context-information">Using Qwen Service with Pure Text Context Information</h3>
<p>Using Qwen service while configuring pure text context information.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">context</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fileUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://file.default.svc.cluster.local/ai/context.txt"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"file.dns"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;qwen-turbo&#x22;\x7F  context:\x7F    - fileUrl: &#x22;http://file.default.svc.cluster.local/ai/context.txt&#x22;,\x7F      serviceName: &#x22;file.dns&#x22;,\x7F      servicePort: 80"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Please summarize the content"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Please summarize the content&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cmpl-77861a17681f4987ab8270dbf8001936"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9756990</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-128k"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The content of this document is about..."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20181</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">439</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20620</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;cmpl-77861a17681f4987ab8270dbf8001936&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 9756990,\x7F  &#x22;model&#x22;: &#x22;moonshot-v1-128k&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;The content of this document is about...&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 20181,\x7F    &#x22;completion_tokens&#x22;: 439,\x7F    &#x22;total_tokens&#x22;: 20620\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-qwen-service-with-native-file-context">Using Qwen Service with Native File Context</h3>
<p>Uploading files to Qwen in advance to use them as context when utilizing its AI service.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_QWEN_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-long"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Qwen's file context can only be used in the qwen-long model</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">qwenFileIds</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"file-fe-xxx"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"file-fe-yyy"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: qwen\x7F  apiTokens:\x7F    - &#x22;YOUR_QWEN_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;qwen-long&#x22; # Qwen&#x27;s file context can only be used in the qwen-long model\x7F  qwenFileIds:\x7F  - &#x22;file-fe-xxx&#x22;\x7F  - &#x22;file-fe-yyy&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Please summarize the content"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Please summarize the content&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"output"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You uploaded two files, \`context.txt\` and \`context_2.txt\`, which seem to contain information about..."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2023</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">530</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1493</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"request_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"187e99ba-5b64-9ffe-8f69-01dafbaf6ed7"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;output&#x22;: {\x7F    &#x22;choices&#x22;: [\x7F      {\x7F        &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F        &#x22;message&#x22;: {\x7F          &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F          &#x22;content&#x22;: &#x22;You uploaded two files, &#x60;context.txt&#x60; and &#x60;context_2.txt&#x60;, which seem to contain information about...&#x22;\x7F        }\x7F      }\x7F    ]\x7F  },\x7F  &#x22;usage&#x22;: {\x7F    &#x22;total_tokens&#x22;: 2023,\x7F    &#x22;output_tokens&#x22;: 530,\x7F    &#x22;input_tokens&#x22;: 1493\x7F  },\x7F  &#x22;request_id&#x22;: &#x22;187e99ba-5b64-9ffe-8f69-01dafbaf6ed7&#x22;\x7F}"><div></div></button></div></figure></div>
<h3 id="utilizing-moonshot-with-its-native-file-context">Utilizing Moonshot with its Native File Context</h3>
<p>Upload files to Moonshot in advance and use its AI services based on file content.</p>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">moonshot</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">moonshotFileId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MOONSHOT_FILE_ID"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-32k"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: moonshot\x7F  apiTokens:\x7F    - &#x22;YOUR_MOONSHOT_API_TOKEN&#x22;\x7F  moonshotFileId: &#x22;YOUR_MOONSHOT_FILE_ID&#x22;,\x7F  modelMapping:\x7F    &#x27;*&#x27;: &#x22;moonshot-v1-32k&#x22;"><div></div></button></div></figure></div>
<p><strong>Example Request</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Please summarize the content"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"temperature"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Please summarize the content&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3\x7F}"><div></div></button></div></figure></div>
<p><strong>Example Response</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cmpl-e5ca873642ca4f5d8b178c1742f9a8e8"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1872961</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"moonshot-v1-128k"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The content of the text is about a payment platform named \u2018xxxx\u2019..."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">11</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">498</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">509</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;cmpl-e5ca873642ca4f5d8b178c1742f9a8e8&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1872961,\x7F  &#x22;model&#x22;: &#x22;moonshot-v1-128k&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;The content of the text is about a payment platform named \u2018xxxx\u2019...&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 11,\x7F    &#x22;completion_tokens&#x22;: 498,\x7F    &#x22;total_tokens&#x22;: 509\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-groq-service">Using OpenAI Protocol Proxy for Groq Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GROQ_API_TOKEN"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: groq\x7F  apiTokens:\x7F    - &#x22;YOUR_GROQ_API_TOKEN&#x22;"><div></div></button></div></figure></div>
<p><strong>Example Request</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"llama3-8b-8192"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;llama3-8b-8192&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>Example Response</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1715917967</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"llama3-8b-8192"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u{1F60A} Ni Hao! (That's </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> in Chinese!)</span><span style="--0:#79B8FF">\\n\\n</span><span style="--0:#9ECBFF">I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I'm happy to chat with you in Chinese or help with any questions or topics you'd like to discuss! \u{1F60A}"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">16</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.005</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">89</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.104</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">105</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.109</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"system_fingerprint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"fp_dadc9d6142"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"x_groq"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"req_01hy2awmcxfpwbq56qh6svm7qz"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;chatcmpl-26733989-6c52-4056-b7a9-5da791bd7102&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1715917967,\x7F  &#x22;model&#x22;: &#x22;llama3-8b-8192&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u{1F60A} Ni Hao! (That&#x27;s \\&#x22;hello\\&#x22; in Chinese!)\\n\\nI am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I&#x27;m not a human, but a computer program designed to simulate conversations and answer questions to the best of my ability. I&#x27;m happy to chat with you in Chinese or help with any questions or topics you&#x27;d like to discuss! \u{1F60A}&#x22;\x7F      },\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 16,\x7F    &#x22;prompt_time&#x22;: 0.005,\x7F    &#x22;completion_tokens&#x22;: 89,\x7F    &#x22;completion_time&#x22;: 0.104,\x7F    &#x22;total_tokens&#x22;: 105,\x7F    &#x22;total_time&#x22;: 0.109\x7F  },\x7F  &#x22;system_fingerprint&#x22;: &#x22;fp_dadc9d6142&#x22;,\x7F  &#x22;x_groq&#x22;: {\x7F    &#x22;id&#x22;: &#x22;req_01hy2awmcxfpwbq56qh6svm7qz&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-claude-service">Using OpenAI Protocol Proxy for Claude Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_CLAUDE_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2023-06-01"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: claude\x7F  apiTokens:\x7F    - &#x22;YOUR_CLAUDE_API_TOKEN&#x22;\x7F  version: &#x22;2023-06-01&#x22;"><div></div></button></div></figure></div>
<p><strong>Example Request</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"claude-3-opus-20240229"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"max_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1024</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;claude-3-opus-20240229&#x22;,\x7F  &#x22;max_tokens&#x22;: 1024,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>Example Response</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"msg_01Jt3GzyjuzymnxmZERJguLK"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, I am a conversation system developed by Anthropic, a company specializing in artificial intelligence. My name is Claude, a friendly and knowledgeable chatbot. Nice to meet you! I can engage in discussions on various topics, answer questions, provide suggestions, and assist you. I'll do my best to give you helpful responses. I hope we have a pleasant exchange!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717385918</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"claude-3-opus-20240229"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">16</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">126</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">142</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;msg_01Jt3GzyjuzymnxmZERJguLK&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;Hello, I am a conversation system developed by Anthropic, a company specializing in artificial intelligence. My name is Claude, a friendly and knowledgeable chatbot. Nice to meet you! I can engage in discussions on various topics, answer questions, provide suggestions, and assist you. I&#x27;ll do my best to give you helpful responses. I hope we have a pleasant exchange!&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1717385918,\x7F  &#x22;model&#x22;: &#x22;claude-3-opus-20240229&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 16,\x7F    &#x22;completion_tokens&#x22;: 126,\x7F    &#x22;total_tokens&#x22;: 142\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-hunyuan-service">Using OpenAI Protocol Proxy for Hunyuan Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH KEY>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hunyuanAuthId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"&#x3C;YOUR AUTH ID>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1200000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan-lite"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: &#x22;hunyuan&#x22;\x7F  hunyuanAuthKey: &#x22;<YOUR AUTH KEY>&#x22;\x7F  apiTokens:\x7F    - &#x22;&#x22;\x7F  hunyuanAuthId: &#x22;<YOUR AUTH ID>&#x22;\x7F  timeout: 1200000\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;hunyuan-lite&#x22;"><div></div></button></div></figure></div>
<p><strong>Example Request</strong></p>
<p>Request script:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--location</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;your higress domain>/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--header </span><span style="--0:#9ECBFF">'Content-Type:  application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "You are a professional developer!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"temperature": 0.3,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"stream": false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --location &#x27;http://<your higress domain>/v1/chat/completions&#x27; \\\x7F--header &#x27;Content-Type:  application/json&#x27; \\\x7F--data &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;You are a professional developer!&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F    }\x7F  ],\x7F  &#x22;temperature&#x22;: 0.3,\x7F  &#x22;stream&#x22;: false\x7F}&#x27;"><div></div></button></div></figure></div>
<p><strong>Example Response</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"fd140c3e-0b69-4b19-849b-d354d32a6162"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"delta"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello! I am a professional developer."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717493117</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hunyuan-lite"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">24</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;fd140c3e-0b69-4b19-849b-d354d32a6162&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;delta&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;Hello! I am a professional developer.&#x22;\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1717493117,\x7F    &#x22;model&#x22;: &#x22;hunyuan-lite&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 15,\x7F        &#x22;completion_tokens&#x22;: 9,\x7F        &#x22;total_tokens&#x22;: 24\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-ernie-bot-service">Using OpenAI Protocol Proxy for ERNIE Bot Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">baidu</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_BAIDU_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: baidu\x7F  apiTokens:\x7F    - &#x22;YOUR_BAIDU_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x27;gpt-3&#x27;: &#x22;ERNIE-4.0&#x22;\x7F    &#x27;*&#x27;: &#x22;ERNIE-4.0&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"as-e90yfg1pk1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, I am ERNIE Bot. I can interact with people, answer questions, assist in creation, and efficiently provide information, knowledge, and inspiration."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717251488</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ERNIE-4.0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">4</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">33</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">37</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;as-e90yfg1pk1&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;Hello, I am ERNIE Bot. I can interact with people, answer questions, assist in creation, and efficiently provide information, knowledge, and inspiration.&#x22;\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1717251488,\x7F    &#x22;model&#x22;: &#x22;ERNIE-4.0&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 4,\x7F        &#x22;completion_tokens&#x22;: 33,\x7F        &#x22;total_tokens&#x22;: 37\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-minimax-service">Using OpenAI Protocol Proxy for MiniMax Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">minimax</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-3"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5g-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">minimaxGroupId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_MINIMAX_GROUP_ID"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: minimax\x7F  apiTokens:\x7F    - &#x22;YOUR_MINIMAX_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-3&#x22;: &#x22;abab6.5g-chat&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;abab6.5-chat&#x22;\x7F    &#x22;*&#x22;: &#x22;abab6.5g-chat&#x22;\x7F  minimaxGroupId: &#x22;YOUR_MINIMAX_GROUP_ID&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4-turbo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-4-turbo&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"02b2251f8c6c09d68c1743f07c72afd7"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello! I am MM Intelligent Assistant, a large language model developed by MiniMax. I can help answer questions, provide information, and engage in conversations. How can I assist you?"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1717760544</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abab6.5s-chat"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">106</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_sensitive"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_sensitive"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_sensitive_type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_sensitive_type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"base_resp"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"status_code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"status_msg"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;02b2251f8c6c09d68c1743f07c72afd7&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;,\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;content&#x22;: &#x22;Hello! I am MM Intelligent Assistant, a large language model developed by MiniMax. I can help answer questions, provide information, and engage in conversations. How can I assist you?&#x22;,\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;\x7F            }\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1717760544,\x7F    &#x22;model&#x22;: &#x22;abab6.5s-chat&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;total_tokens&#x22;: 106\x7F    },\x7F    &#x22;input_sensitive&#x22;: false,\x7F    &#x22;output_sensitive&#x22;: false,\x7F    &#x22;input_sensitive_type&#x22;: 0,\x7F    &#x22;output_sensitive_type&#x22;: 0,\x7F    &#x22;base_resp&#x22;: {\x7F        &#x22;status_code&#x22;: 0,\x7F        &#x22;status_msg&#x22;: &#x22;&#x22;\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-cloudflare-workers-ai-service">Using OpenAI Protocol Proxy for Cloudflare Workers AI Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cloudflare</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_WORKERS_AI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cloudflareAccountId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"YOUR_CLOUDFLARE_ACCOUNT_ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"@cf/meta/llama-3-8b-instruct"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: cloudflare\x7F  apiTokens:\x7F    - &#x22;YOUR_WORKERS_AI_API_TOKEN&#x22;\x7F  cloudflareAccountId: &#x22;YOUR_CLOUDFLARE_ACCOUNT_ID&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;@cf/meta/llama-3-8b-instruct&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"max_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1024</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5&#x22;,\x7F  &#x22;max_tokens&#x22;: 1024,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"id-1720367803430"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1720367803</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"@cf/meta/llama-3-8b-instruct"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;id-1720367803430&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1720367803,\x7F  &#x22;model&#x22;: &#x22;@cf/meta/llama-3-8b-instruct&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I&#x27;m not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture.&#x22;\x7F      },\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<h3 id="using-openai-protocol-proxy-for-spark-service">Using OpenAI Protocol Proxy for Spark Service</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">spark</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"APIKey:APISecret"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3.5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"general"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: spark\x7F  apiTokens:\x7F    - &#x22;APIKey:APISecret&#x22;\x7F  modelMapping:\x7F    &#x22;gpt-4o&#x22;: &#x22;generalv3.5&#x22;\x7F    &#x22;gpt-4&#x22;: &#x22;generalv3&#x22;\x7F    &#x22;*&#x22;: &#x22;general&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You are a professional developer!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-4o&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;system&#x22;,\x7F            &#x22;content&#x22;: &#x22;You are a professional developer!&#x22;\x7F        },\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cha000c23c6@dx190ef0b4b96b8f2532"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Hello! I am a professional developer skilled in programming and problem-solving. What can I assist you with?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1721997415</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"generalv3.5"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">19</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">29</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;cha000c23c6@dx190ef0b4b96b8f2532&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;Hello! I am a professional developer skilled in programming and problem-solving. What can I assist you with?&#x22;\x7F            }\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1721997415,\x7F    &#x22;model&#x22;: &#x22;generalv3.5&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 10,\x7F        &#x22;completion_tokens&#x22;: 19,\x7F        &#x22;total_tokens&#x22;: 29\x7F    }\x7F}"><div></div></button></div></figure></div>
<h3 id="utilizing-openai-protocol-proxy-for-gemini-services">Utilizing OpenAI Protocol Proxy for Gemini Services</h3>
<p><strong>Configuration Information</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gemini</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_GEMINI_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gemini-pro"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">geminiSafetySetting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_SEXUALLY_EXPLICIT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HATE_SPEECH"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_HARASSMENT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"HARM_CATEGORY_DANGEROUS_CONTENT"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">:"BLOCK_NONE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="provider:\x7F  type: gemini\x7F  apiTokens:\x7F    - &#x22;YOUR_GEMINI_API_TOKEN&#x22;\x7F  modelMapping:\x7F    &#x22;*&#x22;: &#x22;gemini-pro&#x22;\x7F  geminiSafetySetting:\x7F    &#x22;HARM_CATEGORY_SEXUALLY_EXPLICIT&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HATE_SPEECH&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_HARASSMENT&#x22; :&#x22;BLOCK_NONE&#x22;\x7F    &#x22;HARM_CATEGORY_DANGEROUS_CONTENT&#x22; :&#x22;BLOCK_NONE&#x22;"><div></div></button></div></figure></div>
<p><strong>Request Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3.5"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"stream"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;gpt-3.5&#x22;,\x7F    &#x22;messages&#x22;: [\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F        }\x7F    ],\x7F    &#x22;stream&#x22;: false\x7F}"><div></div></button></div></figure></div>
<p><strong>Response Example</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1722756984</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gemini-pro"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">29</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">34</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;chatcmpl-b010867c-0d3f-40ba-95fd-4e8030551aeb&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;I am a large multi-modal model, trained by Google. I am designed to provide information and answer questions to the best of my abilities.&#x22;\x7F            },\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ],\x7F    &#x22;created&#x22;: 1722756984,\x7F    &#x22;model&#x22;: &#x22;gemini-pro&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;usage&#x22;: {\x7F        &#x22;prompt_tokens&#x22;: 5,\x7F        &#x22;completion_tokens&#x22;: 29,\x7F        &#x22;total_tokens&#x22;: 34\x7F    }\x7F}"><div></div></button></div></figure></div>
<h2 id="full-configuration-example">Full Configuration Example</h2>
<h3 id="kubernetes-example">Kubernetes Example</h3>
<p>Here\u2019s a full plugin configuration example using the OpenAI protocol proxy for Groq services.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai-proxy-groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"YOUR_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.groq.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-server-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"on"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/resource-definer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">&#x3C;YOUR-DOMAIN></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.groq.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">groq</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: ai-proxy-groq\x7F  namespace: higress-system\x7Fspec:\x7F  matchRules:\x7F  - config:\x7F      provider:\x7F        type: groq\x7F        apiTokens:\x7F          - &#x22;YOUR_API_TOKEN&#x22;\x7F    ingress:\x7F    - groq\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: HTTPS\x7F    higress.io/destination: groq.dns\x7F    higress.io/proxy-ssl-name: api.groq.com\x7F    higress.io/proxy-ssl-server-name: &#x22;on&#x22;\x7F  labels:\x7F    higress.io/resource-definer: higress\x7F  name: groq\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: <YOUR-DOMAIN>\x7F    http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix\x7F---\x7FapiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: api.groq.com\x7F    name: groq\x7F    port: 443\x7F    type: dns"><div></div></button></div></figure></div>
<p>Access Example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://&#x3C;YOUR-DOMAIN>/v1/chat/completions"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "llama3-8b-8192",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://<YOUR-DOMAIN>/v1/chat/completions&#x22; -H &#x22;Content-Type: application/json&#x22; -d &#x27;{\x7F  &#x22;model&#x22;: &#x22;llama3-8b-8192&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;hello, who are you?&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<h3 id="docker-compose-example">Docker-Compose Example</h3>
<p><code dir="auto">docker-compose.yml</code> configuration file:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.7'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">envoy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">entrypoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/usr/local/bin/envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Enables debug level logging for easier debugging</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">command</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">-c /etc/envoy/envoy.yaml --component-log-level wasm:debug</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-net</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"10000:10000"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./envoy.yaml:/etc/envoy/envoy.yaml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./plugin.wasm:/etc/envoy/plugin.wasm</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress-net</span><span style="--0:#E1E4E8">: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="version: &#x27;3.7&#x27;\x7Fservices:\x7F  envoy:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20\x7F    entrypoint: /usr/local/bin/envoy\x7F    # Enables debug level logging for easier debugging\x7F    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug\x7F    networks:\x7F      - higress-net\x7F    ports:\x7F      - &#x22;10000:10000&#x22;\x7F    volumes:\x7F      - ./envoy.yaml:/etc/envoy/envoy.yaml\x7F      - ./plugin.wasm:/etc/envoy/plugin.wasm\x7Fnetworks:\x7F  higress-net: {}"><div></div></button></div></figure></div>
<p><code dir="auto">envoy.yaml</code> configuration file:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9901</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">static_resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">listener_0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">scheme_header_transformation</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">scheme_to_overwrite</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">stat_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress_http</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#99A0A6"># Outputs envoy logs to stdout</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">access_log</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.access_loggers.stdout</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#99A0A6"># Modify as needed</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">route_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_route</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">virtual_hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">domains</span><span style="--0:#E1E4E8">: [ </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> ]</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">routes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">route</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">cluster</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">300s</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/udpa.type.v1.TypedStruct</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">type_url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.wasm.runtime.v8</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                                </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/etc/envoy/plugin.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Plugin configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                              </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">"provider": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                  </span></span><span style="--0:#9ECBFF">"type": "claude",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                  </span></span><span style="--0:#9ECBFF">"apiTokens": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                    </span></span><span style="--0:#9ECBFF">"YOUR_API_TOKEN"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                                </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                              </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">clusters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">connect_timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">30s</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LOGICAL_DNS</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dns_lookup_family</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">V4_ONLY</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lb_policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ROUND_ROBIN</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">load_assignment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">cluster_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">claude</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">lb_endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.anthropic.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Service address</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">transport_socket</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.transport_sockets.tls</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">"sni"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api.anthropic.com"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="admin:\x7F  address:\x7F    socket_address:\x7F      protocol: TCP\x7F      address: 0.0.0.0\x7F      port_value: 9901\x7Fstatic_resources:\x7F  listeners:\x7F    - name: listener_0\x7F      address:\x7F        socket_address:\x7F          protocol: TCP\x7F          address: 0.0.0.0\x7F          port_value: 10000\x7F      filter_chains:\x7F        - filters:\x7F            - name: envoy.filters.network.http_connection_manager\x7F              typed_config:\x7F                &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\x7F                scheme_header_transformation:\x7F                  scheme_to_overwrite: https\x7F                stat_prefix: ingress_http\x7F                # Outputs envoy logs to stdout\x7F                access_log:\x7F                  - name: envoy.access_loggers.stdout\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog\x7F                # Modify as needed\x7F                route_config:\x7F                  name: local_route\x7F                  virtual_hosts:\x7F                    - name: local_service\x7F                      domains: [ &#x22;*&#x22; ]\x7F                      routes:\x7F                        - match:\x7F                            prefix: &#x22;/&#x22;\x7F                          route:\x7F                            cluster: claude\x7F                            timeout: 300s\x7F                http_filters:\x7F                  - name: claude\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/udpa.type.v1.TypedStruct\x7F                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F                      value:\x7F                        config:\x7F                          name: claude\x7F                          vm_config:\x7F                            runtime: envoy.wasm.runtime.v8\x7F                            code:\x7F                              local:\x7F                                filename: /etc/envoy/plugin.wasm\x7F                          configuration:\x7F                            &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F                            value: | # Plugin configuration\x7F                              {\x7F                                &#x22;provider&#x22;: {\x7F                                  &#x22;type&#x22;: &#x22;claude&#x22;,\x7F                                  &#x22;apiTokens&#x22;: [\x7F                                    &#x22;YOUR_API_TOKEN&#x22;\x7F                                  ]\x7F                                }\x7F                              }\x7F                  - name: envoy.filters.http.router\x7F  clusters:\x7F    - name: claude\x7F      connect_timeout: 30s\x7F      type: LOGICAL_DNS\x7F      dns_lookup_family: V4_ONLY\x7F      lb_policy: ROUND_ROBIN\x7F      load_assignment:\x7F        cluster_name: claude\x7F        endpoints:\x7F          - lb_endpoints:\x7F              - endpoint:\x7F                  address:\x7F                    socket_address:\x7F                      address: api.anthropic.com # Service address\x7F                      port_value: 443\x7F      transport_socket:\x7F        name: envoy.transport_sockets.tls\x7F        typed_config:\x7F          &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext\x7F          &#x22;sni&#x22;: &#x22;api.anthropic.com&#x22;"><div></div></button></div></figure></div>
<p>Access Example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost:10000/v1/chat/completions"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "claude-3-opus-20240229",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"max_tokens": 1024,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://localhost:10000/v1/chat/completions&#x22;  -H &#x22;Content-Type: application/json&#x22;  -d &#x27;{\x7F  &#x22;model&#x22;: &#x22;claude-3-opus-20240229&#x22;,\x7F  &#x22;max_tokens&#x22;: 1024,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;hello, who are you?&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>`,a={title:"AI Proxy",keywords:["AI Gateway","AI Proxy"],description:"Reference for configuring the AI Proxy plugin"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/ai-proxy.md",i=void 0,d=function(){return`
## Function Description

The \`AI Proxy\` plugin implements AI proxy functionality based on the OpenAI API contract. It currently supports AI service providers such as OpenAI, Azure OpenAI, Moonshot, and Qwen.

> **Note:**

> When the request path suffix matches \`/v1/chat/completions\`, it corresponds to text-to-text scenarios. The request body will be parsed using OpenAI's text-to-text protocol and then converted to the corresponding LLM vendor's text-to-text protocol.

> When the request path suffix matches \`/v1/embeddings\`, it corresponds to text vector scenarios. The request body will be parsed using OpenAI's text vector protocol and then converted to the corresponding LLM vendor's text vector protocol.


## Configuration Fields

### Basic Configuration

| Name       | Data Type   | Requirement | Default | Description               |
|------------|--------|------|-----|------------------|
| \`provider\` | object | Required   | -   | Configures information for the target AI service provider |

**Details for the \`provider\` configuration fields:**

| Name           | Data Type        | Requirement | Default | Description                                                                                                                                                                                                                                                           |
| -------------- | --------------- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------                                                                                                  |
| \`type\`         | string          | Required     | -      | Name of the AI service provider                                                                                                                                                                                                                                              |
| \`apiTokens\`    | Array of string | Optional   | -      | Tokens used for authentication when accessing AI services. If multiple tokens are configured, the plugin randomly selects one for each request. Some service providers only support configuring a single token.                                                                                                                                     |
| \`timeout\`      | number          | Optional   | -      | Timeout for accessing AI services. Measured in milliseconds. The default value is 120000, equivalent to 2 minutes.                                                                                                                                                                                                 |
| \`modelMapping\` | Map of string   | Optional   | -      | Model Mapping Table for AI Models, used to map model names in requests to the names supported by service providers.<br/>1. Prefix Matching is Supported. For example, use "gpt-3-*" to match all models that start with "gpt-3-".<br/>2. Supports using "*" as a key for a generic fallback mapping relationship.<br/>3.  If the target name in the mapping is an empty string ("")**, it indicates that the original model name should be retained.|
| \`protocol\`     | string          | Optional   | -      | API contract provided by the plugin. Currently supports the following values: openai (default, uses OpenAI's API contract), original (uses the raw API contract of the target service provider)                                                                                                                          |
| \`context\`      | object          | Optional   | -      | Configures context information for AI conversations                                                                                                                                                                                                                                         |

**Details for the \`context\` configuration fields:**

| Name           | Data Type   | Requirement | Default | Description                               |
|---------------|--------|------|-----|----------------------------------|
| \`fileUrl\`     | string | Required   | -   | URL for storing AI conversation context. Only supports file content of plain text type |
| \`serviceName\` | string | Required   | -   | Full name of the Higress backend service corresponding to the URL |
| \`servicePort\` | number | Required   | -   | Port for accessing the Higress backend service corresponding to the URL |

### Provider-Specific Configurations

#### OpenAI

For OpenAI, the corresponding \`type\` is \`openai\`. Its unique configuration fields include:

| Name                   | Data Type | Filling Requirements | Default Value | Description                                                                                                 |
|-----------------------|-----------|----------------------|---------------|------------------------------------------------------------------------------------------------------------|
| \`openaiCustomUrl\`     | string    | Optional              | -             | A custom backend URL based on the OpenAI protocol, e.g., www.example.com/myai/v1/chat/completions          |

#### Azure OpenAI

For Azure OpenAI, the corresponding \`type\` is \`azure\`. Its unique configuration field is:

| Name                 | Data Type   | Filling Requirements | Default Value | Description                                                                                                    |
|---------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| \`azureServiceUrl\`   | string      | Required             | -             | The URL of the Azure OpenAI service, must include the \`api-version\` query parameter.                           |

**Note:** Azure OpenAI only supports configuring one API Token.

#### Moonshot

For Moonshot, the corresponding \`type\` is \`moonshot\`. Its unique configuration field is:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                                      |
|-------------------|-------------|----------------------|---------------|-----------------------------------------------------------------------------------------------------------------|
| \`moonshotFileId\`   | string      | Optional             | -             | The file ID uploaded via the file interface to Moonshot, whose content will be used as context for AI conversations. Cannot be configured with the \`context\` field. |

#### Qwen (Tongyi Qwen)

For Qwen (Tongyi Qwen), the corresponding \`type\` is \`qwen\`. Its unique configuration fields are:

| Name                 | Data Type            | Filling Requirements | Default Value | Description                                                                                                            |
|--------------------|-----------------|----------------------|---------------|------------------------------------------------------------------------------------------------------------------------|
| \`qwenEnableSearch\`  | boolean          | Optional             | -             | Whether to enable the built-in Internet search function provided by Qwen.                                             |
| \`qwenFileIds\`       | array of string   | Optional             | -             | The file IDs uploaded via the Dashscope file interface, whose content will be used as context for AI conversations. Cannot be configured with the \`context\` field. |

#### Baichuan AI

For Baichuan AI, the corresponding \`type\` is \`baichuan\`. It has no unique configuration fields.

#### Yi (Zero One Universe)

For Yi (Zero One Universe), the corresponding \`type\` is \`yi\`. It has no unique configuration fields.

#### Zhipu AI

For Zhipu AI, the corresponding \`type\` is \`zhipuai\`. It has no unique configuration fields.

#### DeepSeek

For DeepSeek, the corresponding \`type\` is \`deepseek\`. It has no unique configuration fields.

#### Groq

For Groq, the corresponding \`type\` is \`groq\`. It has no unique configuration fields.

#### ERNIE Bot

For ERNIE Bot, the corresponding \`type\` is \`baidu\`. It has no unique configuration fields.

#### Minimax

For Minimax, the corresponding \`type\` is \`minimax\`. Its unique configuration field is:

| Name             | Data Type | Filling Requirements | Default Value | Description                                                                                                 |
| ---------------- | -------- | --------------------- |---------------|------------------------------------------------------------------------------------------------------------|
| \`minimaxGroupId\` | string   | Required when using models \`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\` | -             | When using models \`abab6.5-chat\`, \`abab6.5s-chat\`, \`abab5.5s-chat\`, \`abab5.5-chat\`, Minimax uses ChatCompletion Pro and requires setting the groupID. |

#### Anthropic Claude

For Anthropic Claude, the corresponding \`type\` is \`claude\`. Its unique configuration field is:

| Name        | Data Type   | Filling Requirements | Default Value | Description                                                                                                    |
|------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------------|
| \`claudeVersion\` | string | Optional             | -             | The version of the Claude service's API, default is 2023-06-01.                                               |

#### Ollama

For Ollama, the corresponding \`type\` is \`ollama\`. Its unique configuration field is:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                              |
|-------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`ollamaServerHost\` | string      | Required             | -             | The host address of the Ollama server.                                                                |
| \`ollamaServerPort\` | number      | Required             | -             | The port number of the Ollama server, defaults to 11434.                                              |

#### Hunyuan

For Hunyuan, the corresponding \`type\` is \`hunyuan\`. Its unique configuration fields are:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                              |
|-------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`hunyuanAuthId\`    | string      | Required             | -             | Hunyuan authentication ID for version 3 authentication.                                                |
| \`hunyuanAuthKey\`   | string      | Required             | -             | Hunyuan authentication key for version 3 authentication.                                               |

#### Stepfun

For Stepfun, the corresponding \`type\` is \`stepfun\`. It has no unique configuration fields.

#### Cloudflare Workers AI

For Cloudflare Workers AI, the corresponding \`type\` is \`cloudflare\`. Its unique configuration field is:

| Name                | Data Type   | Filling Requirements | Default Value | Description                                                                                              |
|-------------------|-------------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`cloudflareAccountId\` | string      | Required             | -             | [Cloudflare Account ID](https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id). |

#### Spark

For Spark, the corresponding \`type\` is \`spark\`. It has no unique configuration fields.

The \`apiTokens\` field value for Xunfei Spark (Xunfei Star) is \`APIKey:APISecret\`. That is, enter your own APIKey and APISecret, separated by \`:\`.

#### Gemini

For Gemini, the corresponding \`type\` is \`gemini\`. Its unique configuration field is:

| Name                  | Data Type | Filling Requirements | Default Value | Description                                                                                              |
|---------------------|----------|----------------------|---------------|---------------------------------------------------------------------------------------------------------|
| \`geminiSafetySetting\` | map of string   | Optional             | -             | Gemini AI content filtering and safety level settings. Refer to [Safety settings](https://ai.google.dev/gemini-api/docs/safety-settings). |

## Usage Examples

### Using OpenAI Protocol Proxy for Azure OpenAI Service

Using the basic Azure OpenAI service without configuring any context.

**Configuration Information**

\`\`\`yaml
provider:
  type: azure
  apiTokens:
    - "YOUR_AZURE_OPENAI_API_TOKEN"
  azureServiceUrl: "https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/chat/completions?api-version=2024-02-15-preview",
\`\`\`

**Request Example**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Response Example**

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
        "content": "Hello! I am an AI assistant, here to answer your questions and provide assistance. Is there anything I can help you with?",
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

### Using OpenAI Protocol Proxy for Qwen Service

Using Qwen service and configuring the mapping relationship between OpenAI large models and Qwen models.

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
    'text-embedding-v1': 'text-embedding-v1'
    '*': "qwen-turbo"
\`\`\`

**AI Dialogue Request Example**

URL: \`http://your-domain/v1/chat/completions\`

Request Body:

\`\`\`json
{
  "model": "text-embedding-v1",
  "input": "Hello"
}
\`\`\`

Response Body Example:

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

**Request Example**

URL: \`http://your-domain/v1/embeddings\`

Example Request Content:

\`\`\`json
{
    "model": "text-embedding-v1",
    "input": [
        "Hello world!"
    ]
}
\`\`\`

Example Response Content:

\`\`\`json
{
  "id": "c2518bd3-0f46-97d1-be34-bb5777cb3108",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "I am Qwen, an AI assistant developed by Alibaba Cloud. I can answer various questions, provide information, and engage in conversations with users. What can I assist you with?"
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

### Using Qwen Service with Pure Text Context Information

Using Qwen service while configuring pure text context information.

**Configuration Information**

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

**Request Example**

\`\`\`json
{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "Please summarize the content"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Response Example**

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
        "content": "The content of this document is about..."
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

### Using Qwen Service with Native File Context

Uploading files to Qwen in advance to use them as context when utilizing its AI service.

**Configuration Information**

\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "*": "qwen-long" # Qwen's file context can only be used in the qwen-long model
  qwenFileIds:
  - "file-fe-xxx"
  - "file-fe-yyy"
\`\`\`

**Request Example**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please summarize the content"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Response Example**

\`\`\`json
{
  "output": {
    "choices": [
      {
        "finish_reason": "stop",
        "message": {
          "role": "assistant",
          "content": "You uploaded two files, \`context.txt\` and \`context_2.txt\`, which seem to contain information about..."
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
### Utilizing Moonshot with its Native File Context

Upload files to Moonshot in advance and use its AI services based on file content.

**Configuration Information**

\`\`\`yaml
provider:
  type: moonshot
  apiTokens:
    - "YOUR_MOONSHOT_API_TOKEN"
  moonshotFileId: "YOUR_MOONSHOT_FILE_ID",
  modelMapping:
    '*': "moonshot-v1-32k"
\`\`\`

**Example Request**

\`\`\`json
{
  "model": "gpt-4-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please summarize the content"
    }
  ],
  "temperature": 0.3
}
\`\`\`

**Example Response**

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
        "content": "The content of the text is about a payment platform named \u2018xxxx\u2019..."
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

### Using OpenAI Protocol Proxy for Groq Service

**Configuration Information**

\`\`\`yaml
provider:
  type: groq
  apiTokens:
    - "YOUR_GROQ_API_TOKEN"
\`\`\`

**Example Request**

\`\`\`json
{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ]
}
\`\`\`

**Example Response**

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

### Using OpenAI Protocol Proxy for Claude Service

**Configuration Information**

\`\`\`yaml
provider:
  type: claude
  apiTokens:
    - "YOUR_CLAUDE_API_TOKEN"
  version: "2023-06-01"
\`\`\`

**Example Request**

\`\`\`json
{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ]
}
\`\`\`

**Example Response**

\`\`\`json
{
  "id": "msg_01Jt3GzyjuzymnxmZERJguLK",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello, I am a conversation system developed by Anthropic, a company specializing in artificial intelligence. My name is Claude, a friendly and knowledgeable chatbot. Nice to meet you! I can engage in discussions on various topics, answer questions, provide suggestions, and assist you. I'll do my best to give you helpful responses. I hope we have a pleasant exchange!"
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

### Using OpenAI Protocol Proxy for Hunyuan Service

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

**Example Request**

Request script:

\`\`\`sh

curl --location 'http://<your higress domain>/v1/chat/completions' \\
--header 'Content-Type:  application/json' \\
--data '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "system",
      "content": "You are a professional developer!"
    },
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ],
  "temperature": 0.3,
  "stream": false
}'
\`\`\`

**Example Response**

\`\`\`json
{
    "id": "fd140c3e-0b69-4b19-849b-d354d32a6162",
    "choices": [
        {
            "index": 0,
            "delta": {
                "role": "assistant",
                "content": "Hello! I am a professional developer."
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

### Using OpenAI Protocol Proxy for ERNIE Bot Service

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

**Request Example**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "Hello, who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "as-e90yfg1pk1",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Hello, I am ERNIE Bot. I can interact with people, answer questions, assist in creation, and efficiently provide information, knowledge, and inspiration."
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

### Using OpenAI Protocol Proxy for MiniMax Service

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

**Request Example**

\`\`\`json
{
    "model": "gpt-4-turbo",
    "messages": [
        {
            "role": "user",
            "content": "Hello, who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "02b2251f8c6c09d68c1743f07c72afd7",
    "choices": [
        {
            "finish_reason": "stop",
            "index": 0,
            "message": {
                "content": "Hello! I am MM Intelligent Assistant, a large language model developed by MiniMax. I can help answer questions, provide information, and engage in conversations. How can I assist you?",
                "role": "assistant"
            }
        }
    ],
    "created": 1717760544,
    "model": "abab6.5s-chat",
    "object": "chat.completion",
    "usage": {
        "total_tokens": 106
    },
    "input_sensitive": false,
    "output_sensitive": false,
    "input_sensitive_type": 0,
    "output_sensitive_type": 0,
    "base_resp": {
        "status_code": 0,
        "status_msg": ""
    }
}
\`\`\`

### Using OpenAI Protocol Proxy for Cloudflare Workers AI Service

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

**Request Example**

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

**Response Example**

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
        "content": "I am LLaMA, an AI assistant developed by Meta AI that can understand and respond to human input in a conversational manner. I'm not a human, but a computer program designed to simulate conversation and answer questions to the best of my knowledge. I can be used to generate text on a wide range of topics, from science and history to entertainment and culture."
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ]
}
\`\`\`

### Using OpenAI Protocol Proxy for Spark Service

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

**Request Example**

\`\`\`json
{
    "model": "gpt-4o",
    "messages": [
        {
            "role": "system",
            "content": "You are a professional developer!"
        },
        {
            "role": "user",
            "content": "Hello, who are you?"
        }
    ],
    "stream": false
}
\`\`\`

**Response Example**

\`\`\`json
{
    "id": "cha000c23c6@dx190ef0b4b96b8f2532",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Hello! I am a professional developer skilled in programming and problem-solving. What can I assist you with?"
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

### Utilizing OpenAI Protocol Proxy for Gemini Services

**Configuration Information**

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

**Request Example**

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

**Response Example**

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

## Full Configuration Example

### Kubernetes Example

Here's a full plugin configuration example using the OpenAI protocol proxy for Groq services.

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

Access Example:

\`\`\`bash
curl "http://<YOUR-DOMAIN>/v1/chat/completions" -H "Content-Type: application/json" -d '{
  "model": "llama3-8b-8192",
  "messages": [
    {
      "role": "user",
      "content": "hello, who are you?"
    }
  ]
}'
\`\`\`

### Docker-Compose Example

\`docker-compose.yml\` configuration file:

\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/envoy:1.20
    entrypoint: /usr/local/bin/envoy
    # Enables debug level logging for easier debugging
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

\`envoy.yaml\` configuration file:

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
                # Outputs envoy logs to stdout
                access_log:
                  - name: envoy.access_loggers.stdout
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.access_loggers.stream.v3.StdoutAccessLog
                # Modify as needed
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
                            value: | # Plugin configuration
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
                      address: api.anthropic.com # Service address
                      port_value: 443
      transport_socket:
        name: envoy.transport_sockets.tls
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.UpstreamTlsContext
          "sni": "api.anthropic.com"
\`\`\`

Access Example:

\`\`\`bash
curl "http://localhost:10000/v1/chat/completions"  -H "Content-Type: application/json"  -d '{
  "model": "claude-3-opus-20240229",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "hello, who are you?"
    }
  ]
}'
\`\`\`
`},t=function(){return s},l=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"basic-configuration",text:"Basic Configuration"},{depth:3,slug:"provider-specific-configurations",text:"Provider-Specific Configurations"},{depth:4,slug:"openai",text:"OpenAI"},{depth:4,slug:"azure-openai",text:"Azure OpenAI"},{depth:4,slug:"moonshot",text:"Moonshot"},{depth:4,slug:"qwen-tongyi-qwen",text:"Qwen (Tongyi Qwen)"},{depth:4,slug:"baichuan-ai",text:"Baichuan AI"},{depth:4,slug:"yi-zero-one-universe",text:"Yi (Zero One Universe)"},{depth:4,slug:"zhipu-ai",text:"Zhipu AI"},{depth:4,slug:"deepseek",text:"DeepSeek"},{depth:4,slug:"groq",text:"Groq"},{depth:4,slug:"ernie-bot",text:"ERNIE Bot"},{depth:4,slug:"minimax",text:"Minimax"},{depth:4,slug:"anthropic-claude",text:"Anthropic Claude"},{depth:4,slug:"ollama",text:"Ollama"},{depth:4,slug:"hunyuan",text:"Hunyuan"},{depth:4,slug:"stepfun",text:"Stepfun"},{depth:4,slug:"cloudflare-workers-ai",text:"Cloudflare Workers AI"},{depth:4,slug:"spark",text:"Spark"},{depth:4,slug:"gemini",text:"Gemini"},{depth:2,slug:"usage-examples",text:"Usage Examples"},{depth:3,slug:"using-openai-protocol-proxy-for-azure-openai-service",text:"Using OpenAI Protocol Proxy for Azure OpenAI Service"},{depth:3,slug:"using-openai-protocol-proxy-for-qwen-service",text:"Using OpenAI Protocol Proxy for Qwen Service"},{depth:3,slug:"using-qwen-service-with-pure-text-context-information",text:"Using Qwen Service with Pure Text Context Information"},{depth:3,slug:"using-qwen-service-with-native-file-context",text:"Using Qwen Service with Native File Context"},{depth:3,slug:"utilizing-moonshot-with-its-native-file-context",text:"Utilizing Moonshot with its Native File Context"},{depth:3,slug:"using-openai-protocol-proxy-for-groq-service",text:"Using OpenAI Protocol Proxy for Groq Service"},{depth:3,slug:"using-openai-protocol-proxy-for-claude-service",text:"Using OpenAI Protocol Proxy for Claude Service"},{depth:3,slug:"using-openai-protocol-proxy-for-hunyuan-service",text:"Using OpenAI Protocol Proxy for Hunyuan Service"},{depth:3,slug:"using-openai-protocol-proxy-for-ernie-bot-service",text:"Using OpenAI Protocol Proxy for ERNIE Bot Service"},{depth:3,slug:"using-openai-protocol-proxy-for-minimax-service",text:"Using OpenAI Protocol Proxy for MiniMax Service"},{depth:3,slug:"using-openai-protocol-proxy-for-cloudflare-workers-ai-service",text:"Using OpenAI Protocol Proxy for Cloudflare Workers AI Service"},{depth:3,slug:"using-openai-protocol-proxy-for-spark-service",text:"Using OpenAI Protocol Proxy for Spark Service"},{depth:3,slug:"utilizing-openai-protocol-proxy-for-gemini-services",text:"Utilizing OpenAI Protocol Proxy for Gemini Services"},{depth:2,slug:"full-configuration-example",text:"Full Configuration Example"},{depth:3,slug:"kubernetes-example",text:"Kubernetes Example"},{depth:3,slug:"docker-compose-example",text:"Docker-Compose Example"}]},e=c((u,F,g)=>{const{layout:m,...p}=a;return p.file=n,p.url=i,E`${v()}${r(s)}`})});export{e as Content,f as __tla,t as compiledContent,e as default,n as file,a as frontmatter,l as getHeadings,d as rawContent,i as url};