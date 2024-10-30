import{c,__tla as p}from"./astro-component.DIa0fJKh.js";import{r as l,m as v,u,__tla as h}from"./constant.XaZN9xy-.js";import{__tla as y}from"./astro/assets-service.tyfV9CK3.js";let s,o,t,a,r,d,n,m=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>LLM structured response plugin, used to structure AI responses according to the default or user-configured Json Schema for subsequent plugin processing. Note that only <code dir="auto">non-streaming responses</code> are currently supported.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">default phase</code>
Plugin execution priority: <code dir="auto">150</code></p>
<h3 id="configuration-description">Configuration Description</h3>
































































































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>serviceName</td><td>str</td><td>required</td><td>-</td><td>AI service or gateway service name that supports AI-Proxy</td></tr><tr><td>serviceDomain</td><td>str</td><td>optional</td><td>-</td><td>AI service or gateway service domain/IP address that supports AI-Proxy</td></tr><tr><td>servicePath</td><td>str</td><td>optional</td><td>\u2019/v1/chat/completions\u2019</td><td>AI service or gateway service base path that supports AI-Proxy</td></tr><tr><td>serviceUrl</td><td>str</td><td>optional</td><td>-</td><td>AI service or gateway service URL that supports AI-Proxy; the plugin will automatically extract domain and path to fill in the unconfigured serviceDomain or servicePath</td></tr><tr><td>servicePort</td><td>int</td><td>optional</td><td>443</td><td>Gateway service port</td></tr><tr><td>serviceTimeout</td><td>int</td><td>optional</td><td>50000</td><td>Default request timeout</td></tr><tr><td>maxRetry</td><td>int</td><td>optional</td><td>3</td><td>Number of retry attempts when the answer cannot be correctly extracted and formatted</td></tr><tr><td>contentPath</td><td>str</td><td>optional</td><td>\u201Dchoices.0.message.content\u201D</td><td>gpath path to extract the response result from the LLM answer</td></tr><tr><td>jsonSchema</td><td>str (json)</td><td>optional</td><td>-</td><td>The jsonSchema against which the request is validated; if empty, only valid Json format responses are returned</td></tr><tr><td>enableSwagger</td><td>bool</td><td>optional</td><td>false</td><td>Whether to enable the Swagger protocol for validation</td></tr><tr><td>enableOas3</td><td>bool</td><td>optional</td><td>true</td><td>Whether to enable the Oas3 protocol for validation</td></tr><tr><td>enableContentDisposition</td><td>bool</td><td>optional</td><td>true</td><td>Whether to enable the Content-Disposition header; if enabled, the response header will include <code dir="auto">Content-Disposition: attachment; filename="response.json"</code></td></tr></tbody></table>
<blockquote>
<p>For performance reasons, the maximum supported Json Schema depth is 6 by default. Json Schemas exceeding this depth will not be used to validate responses; the plugin will only check if the returned response is a valid Json format.</p>
</blockquote>
<h3 id="request-and-return-parameter-description">Request and Return Parameter Description</h3>
<ul>
<li>
<p><strong>Request Parameters</strong>: The request format for this plugin is the OpenAI request format, including the <code dir="auto">model</code> and <code dir="auto">messages</code> fields, where <code dir="auto">model</code> is the AI model name and <code dir="auto">messages</code> is a list of conversation messages, each containing <code dir="auto">role</code> and <code dir="auto">content</code> fields, with <code dir="auto">role</code> being the message role and <code dir="auto">content</code> being the message content.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"give me a api doc for add the variable x to x+5"</span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {&#x22;role&#x22;: &#x22;user&#x22;, &#x22;content&#x22;: &#x22;give me a api doc for add the variable x to x+5&#x22;}\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>Other request parameters should refer to the corresponding documentation of the configured AI service or gateway service.</p>
</li>
<li>
<p><strong>Return Parameters</strong>:</p>
<ul>
<li>Returns a <code dir="auto">Json format response</code> that satisfies the constraints of the defined Json Schema.</li>
<li>If no Json Schema is defined, returns a valid <code dir="auto">Json format response</code>.</li>
<li>If an internal error occurs, returns <code dir="auto">{ "Code": 10XX, "Msg": "Error message" }</code>.</li>
</ul>
</li>
</ul>
<h2 id="request-example">Request Example</h2>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost:8001/v1/chat/completions"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-4",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{"role": "user", "content": "give me a api doc for add the variable x to x+5"}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x22;http://localhost:8001/v1/chat/completions&#x22; \\\x7F-H &#x22;Content-Type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-4&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {&#x22;role&#x22;: &#x22;user&#x22;, &#x22;content&#x22;: &#x22;give me a api doc for add the variable x to x+5&#x22;}\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<h2 id="return-example">Return Example</h2>
<h3 id="normal-return">Normal Return</h3>
<p>Under normal circumstances, the system should return JSON data validated by the JSON Schema. If no JSON Schema is configured, the system will return legally valid JSON data that complies with JSON standards.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"apiVersion"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1.0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"request"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"endpoint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/add_to_five"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"method"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"POST"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"port"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"headers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"Content-Type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"application/json"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"body"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"x"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;apiVersion&#x22;: &#x22;1.0&#x22;,\x7F  &#x22;request&#x22;: {\x7F    &#x22;endpoint&#x22;: &#x22;/add_to_five&#x22;,\x7F    &#x22;method&#x22;: &#x22;POST&#x22;,\x7F    &#x22;port&#x22;: 8080,\x7F    &#x22;headers&#x22;: {\x7F      &#x22;Content-Type&#x22;: &#x22;application/json&#x22;\x7F    },\x7F    &#x22;body&#x22;: {\x7F      &#x22;x&#x22;: 7\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="exception-return">Exception Return</h3>
<p>In case of an error, the return status code is <code dir="auto">500</code>, and the return content is a JSON format error message. It contains two fields: error code <code dir="auto">Code</code> and error message <code dir="auto">Msg</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"Code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1006</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"Msg"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"retry count exceed max retry count"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;Code&#x22;: 1006,\x7F  &#x22;Msg&#x22;: &#x22;retry count exceed max retry count&#x22;\x7F}"><div></div></button></div></figure></div>
<h3 id="error-code-description">Error Code Description</h3>









































<table><thead><tr><th>Error Code</th><th>Description</th></tr></thead><tbody><tr><td>1001</td><td>The configured Json Schema is not in a valid Json format</td></tr><tr><td>1002</td><td>The configured Json Schema compilation failed; it is not a valid Json Schema format or depth exceeds jsonSchemaMaxDepth while rejectOnDepthExceeded is true</td></tr><tr><td>1003</td><td>Unable to extract valid Json from the response</td></tr><tr><td>1004</td><td>Response is an empty string</td></tr><tr><td>1005</td><td>Response does not conform to the Json Schema definition</td></tr><tr><td>1006</td><td>Retry count exceeds the maximum limit</td></tr><tr><td>1007</td><td>Unable to retrieve the response content; may be due to upstream service configuration errors or incorrect ContentPath path to get the content</td></tr><tr><td>1008</td><td>serviceDomain is empty; please note that either serviceDomain or serviceUrl cannot be empty at the same time</td></tr></tbody></table>
<h2 id="service-configuration-description">Service Configuration Description</h2>
<p>This plugin requires configuration of upstream services to support automatic retry mechanisms in case of exceptions. Supported configurations mainly include <code dir="auto">AI services supporting OpenAI interfaces</code> or <code dir="auto">local gateway services</code>.</p>
<h3 id="ai-services-supporting-openai-interfaces">AI Services Supporting OpenAI Interfaces</h3>
<p>Taking Qwen as an example, the basic configuration is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceDomain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">Your API Key</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/compatible-mode/v1/chat/completions</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">jsonSchema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">title</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ReasoningSchema</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">reasoning_steps</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">The reasoning steps leading to the final conclusion.</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">answer</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">The final answer, taking into account the reasoning steps.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">reasoning_steps</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">additionalProperties</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: qwen\x7FserviceDomain: dashscope.aliyuncs.com\x7FapiKey: [Your API Key]\x7FservicePath: /compatible-mode/v1/chat/completions\x7FjsonSchema:\x7F  title: ReasoningSchema\x7F  type: object\x7F  properties:\x7F    reasoning_steps:\x7F      type: array\x7F      items:\x7F        type: string\x7F      description: The reasoning steps leading to the final conclusion.\x7F    answer:\x7F      type: string\x7F      description: The final answer, taking into account the reasoning steps.\x7F  required:\x7F    - reasoning_steps\x7F    - answer\x7F  additionalProperties: false"><div></div></button></div></figure></div>
<h3 id="local-gateway-services">Local Gateway Services</h3>
<p>To reuse already configured services, this plugin also supports configuring local gateway services. For example, if the gateway has already configured the AI-proxy service, it can be directly configured as follows:</p>
<ol>
<li>Create a service with a fixed IP address of 127.0.0.1:80, for example, localservice.static.</li>
<li>Add the service configuration for localservice.static in the configuration file.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">localservice</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceDomain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: localservice\x7FserviceDomain: 127.0.0.1\x7FservicePort: 80"><div></div></button></div></figure></div>
<ol start="3">
<li>Automatically extract request Path, Header, and other information.
The plugin will automatically extract request Path, Header, and other information to avoid repetitive configuration for the AI service.</li>
</ol>`,a={title:"AI JSON Formatting",keywords:["AI Gateway","AI JSON Formatting"],description:"AI JSON Formatting plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-dev/ai-json-resp.md",n=void 0,d=function(){return`## Function Description
LLM structured response plugin, used to structure AI responses according to the default or user-configured Json Schema for subsequent plugin processing. Note that only \`non-streaming responses\` are currently supported.

## Running Attributes
Plugin execution phase: \`default phase\`
Plugin execution priority: \`150\`

### Configuration Description
| Name | Type | Requirement | Default | **Description** |
| --- | --- | --- | --- | --- |
| serviceName | str |  required | - | AI service or gateway service name that supports AI-Proxy |
| serviceDomain | str |  optional | - | AI service or gateway service domain/IP address that supports AI-Proxy |
| servicePath | str |  optional | '/v1/chat/completions' | AI service or gateway service base path that supports AI-Proxy |
| serviceUrl | str |  optional | - | AI service or gateway service URL that supports AI-Proxy; the plugin will automatically extract domain and path to fill in the unconfigured serviceDomain or servicePath |
| servicePort | int |  optional | 443 | Gateway service port |
| serviceTimeout | int |  optional | 50000 | Default request timeout |
| maxRetry | int |  optional | 3 | Number of retry attempts when the answer cannot be correctly extracted and formatted |
| contentPath | str |  optional | "choices.0.message.content\u201D | gpath path to extract the response result from the LLM answer |
| jsonSchema | str (json) |  optional | - | The jsonSchema against which the request is validated; if empty, only valid Json format responses are returned |
| enableSwagger | bool |  optional | false | Whether to enable the Swagger protocol for validation |
| enableOas3 | bool |  optional | true | Whether to enable the Oas3 protocol for validation |
| enableContentDisposition | bool | optional | true | Whether to enable the Content-Disposition header; if enabled, the response header will include \`Content-Disposition: attachment; filename="response.json"\` |

> For performance reasons, the maximum supported Json Schema depth is 6 by default. Json Schemas exceeding this depth will not be used to validate responses; the plugin will only check if the returned response is a valid Json format.

### Request and Return Parameter Description
- **Request Parameters**: The request format for this plugin is the OpenAI request format, including the \`model\` and \`messages\` fields, where \`model\` is the AI model name and \`messages\` is a list of conversation messages, each containing \`role\` and \`content\` fields, with \`role\` being the message role and \`content\` being the message content.
  \`\`\`json
  {
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "give me a api doc for add the variable x to x+5"}
    ]
  }
  \`\`\`
  Other request parameters should refer to the corresponding documentation of the configured AI service or gateway service.

- **Return Parameters**:
  - Returns a \`Json format response\` that satisfies the constraints of the defined Json Schema.
  - If no Json Schema is defined, returns a valid \`Json format response\`.
  - If an internal error occurs, returns \`{ "Code": 10XX, "Msg": "Error message" }\`.

## Request Example
\`\`\`bash
curl -X POST "http://localhost:8001/v1/chat/completions" \\
-H "Content-Type: application/json" \\
-d '{
  "model": "gpt-4",
  "messages": [
    {"role": "user", "content": "give me a api doc for add the variable x to x+5"}
  ]
}'
\`\`\`

## Return Example
### Normal Return
Under normal circumstances, the system should return JSON data validated by the JSON Schema. If no JSON Schema is configured, the system will return legally valid JSON data that complies with JSON standards.
\`\`\`json
{
  "apiVersion": "1.0",
  "request": {
    "endpoint": "/add_to_five",
    "method": "POST",
    "port": 8080,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "x": 7
    }
  }
}
\`\`\`

### Exception Return
In case of an error, the return status code is \`500\`, and the return content is a JSON format error message. It contains two fields: error code \`Code\` and error message \`Msg\`.
\`\`\`json
{
  "Code": 1006,
  "Msg": "retry count exceed max retry count"
}
\`\`\`

### Error Code Description
| Error Code | Description |
| --- | --- |
| 1001 | The configured Json Schema is not in a valid Json format |
| 1002 | The configured Json Schema compilation failed; it is not a valid Json Schema format or depth exceeds jsonSchemaMaxDepth while rejectOnDepthExceeded is true |
| 1003 | Unable to extract valid Json from the response |
| 1004 | Response is an empty string |
| 1005 | Response does not conform to the Json Schema definition |
| 1006 | Retry count exceeds the maximum limit |
| 1007 | Unable to retrieve the response content; may be due to upstream service configuration errors or incorrect ContentPath path to get the content |
| 1008 | serviceDomain is empty; please note that either serviceDomain or serviceUrl cannot be empty at the same time |

## Service Configuration Description
This plugin requires configuration of upstream services to support automatic retry mechanisms in case of exceptions. Supported configurations mainly include \`AI services supporting OpenAI interfaces\` or \`local gateway services\`.

### AI Services Supporting OpenAI Interfaces
Taking Qwen as an example, the basic configuration is as follows:
\`\`\`yaml
serviceName: qwen
serviceDomain: dashscope.aliyuncs.com
apiKey: [Your API Key]
servicePath: /compatible-mode/v1/chat/completions
jsonSchema:
  title: ReasoningSchema
  type: object
  properties:
    reasoning_steps:
      type: array
      items:
        type: string
      description: The reasoning steps leading to the final conclusion.
    answer:
      type: string
      description: The final answer, taking into account the reasoning steps.
  required:
    - reasoning_steps
    - answer
  additionalProperties: false
\`\`\`

### Local Gateway Services
To reuse already configured services, this plugin also supports configuring local gateway services. For example, if the gateway has already configured the AI-proxy service, it can be directly configured as follows:

1. Create a service with a fixed IP address of 127.0.0.1:80, for example, localservice.static.
2. Add the service configuration for localservice.static in the configuration file.
\`\`\`yaml
serviceName: localservice
serviceDomain: 127.0.0.1
servicePort: 80
\`\`\`
3. Automatically extract request Path, Header, and other information.
The plugin will automatically extract request Path, Header, and other information to avoid repetitive configuration for the AI service.
`},o=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:3,slug:"configuration-description",text:"Configuration Description"},{depth:3,slug:"request-and-return-parameter-description",text:"Request and Return Parameter Description"},{depth:2,slug:"request-example",text:"Request Example"},{depth:2,slug:"return-example",text:"Return Example"},{depth:3,slug:"normal-return",text:"Normal Return"},{depth:3,slug:"exception-return",text:"Exception Return"},{depth:3,slug:"error-code-description",text:"Error Code Description"},{depth:2,slug:"service-configuration-description",text:"Service Configuration Description"},{depth:3,slug:"ai-services-supporting-openai-interfaces",text:"AI Services Supporting OpenAI Interfaces"},{depth:3,slug:"local-gateway-services",text:"Local Gateway Services"}]},s=c((E,f,g)=>{const{layout:x,...i}=a;return i.file=t,i.url=n,l`${v()}${u(e)}`})});export{s as Content,m as __tla,o as compiledContent,s as default,t as file,a as frontmatter,r as getHeadings,d as rawContent,n as url};
