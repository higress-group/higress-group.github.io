import{c as p,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as c,m as y,u as v,__tla as u}from"./constant.DBoFd8xR.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,d,a,n,o,l,t,g=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="feature-description">Feature Description</h2>
<p>The <code dir="auto">mcp-server</code> plugin provides AI tool integration capabilities based on the Model Context Protocol (MCP). MCP is a protocol designed specifically for AI assistants, defining a standard way for AI models to interact with external tools and resources. Through this plugin, you can:</p>
<ol>
<li>Convert existing REST APIs into tools callable by AI assistants without writing any code</li>
<li>Leverage Higress gateway\u2019s unified authentication, authorization, rate limiting, and observability capabilities</li>
<li>Quickly build and deploy AI tools and services</li>
</ol>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png" alt="" referrerpolicy="no-referrer"></p>
<p>By hosting MCP Servers with Higress, you can achieve:</p>
<ul>
<li>Unified authentication and authorization mechanisms, ensuring the security of AI tool calls</li>
<li>Fine-grained rate limiting to prevent abuse and resource exhaustion</li>
<li>Comprehensive audit logs recording all tool call behaviors</li>
<li>Rich observability for monitoring the performance and health of tool calls</li>
<li>Simplified deployment and management through Higress\u2019s plugin mechanism for quickly adding new MCP Servers</li>
</ul>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code>
Plugin execution priority: <code dir="auto">30</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<h3 id="server-configuration">Server Configuration</h3>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">server.name</code></td><td>string</td><td>Yes</td><td>-</td><td>Name of the MCP server. If using a pre-integrated MCP server (like quark-search), you only need to configure this field with the corresponding name and don\u2019t need to configure the tools field. For REST-to-MCP scenarios, this field can be any arbitrary value.</td></tr><tr><td><code dir="auto">server.config</code></td><td>object</td><td>No</td><td>{}</td><td>Server configuration, such as API keys</td></tr><tr><td><code dir="auto">server.allowTools</code></td><td>array of string</td><td>No</td><td>-</td><td>List of tools allowed to be called. If not specified, all tools are allowed</td></tr></tbody></table>
<h3 id="rest-to-mcp-tool-configuration">REST-to-MCP Tool Configuration</h3>









































































































































































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">tools</code></td><td>array of object</td><td>No</td><td>[]</td><td>List of REST-to-MCP tool configurations</td></tr><tr><td><code dir="auto">tools[].name</code></td><td>string</td><td>Yes</td><td>-</td><td>Tool name</td></tr><tr><td><code dir="auto">tools[].description</code></td><td>string</td><td>Yes</td><td>-</td><td>Tool functionality description</td></tr><tr><td><code dir="auto">tools[].args</code></td><td>array of object</td><td>Yes</td><td>[]</td><td>Tool parameter definitions</td></tr><tr><td><code dir="auto">tools[].args[].name</code></td><td>string</td><td>Yes</td><td>-</td><td>Parameter name</td></tr><tr><td><code dir="auto">tools[].args[].description</code></td><td>string</td><td>Yes</td><td>-</td><td>Parameter description</td></tr><tr><td><code dir="auto">tools[].args[].type</code></td><td>string</td><td>No</td><td>string</td><td>Parameter type (string, number, integer, boolean, array, object)</td></tr><tr><td><code dir="auto">tools[].args[].required</code></td><td>boolean</td><td>No</td><td>false</td><td>Whether the parameter is required</td></tr><tr><td><code dir="auto">tools[].args[].default</code></td><td>any</td><td>No</td><td>-</td><td>Parameter default value</td></tr><tr><td><code dir="auto">tools[].args[].enum</code></td><td>array</td><td>No</td><td>-</td><td>List of allowed values for the parameter</td></tr><tr><td><code dir="auto">tools[].args[].items</code></td><td>object</td><td>No</td><td>-</td><td>Schema for array items (when type is array)</td></tr><tr><td><code dir="auto">tools[].args[].properties</code></td><td>object</td><td>No</td><td>-</td><td>Schema for object properties (when type is object)</td></tr><tr><td><code dir="auto">tools[].args[].position</code></td><td>string</td><td>No</td><td>-</td><td>Position of the parameter in the request (query, path, header, cookie, body)</td></tr><tr><td><code dir="auto">tools[].requestTemplate</code></td><td>object</td><td>Yes</td><td>-</td><td>HTTP request template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.url</code></td><td>string</td><td>Yes</td><td>-</td><td>Request URL template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.method</code></td><td>string</td><td>Yes</td><td>-</td><td>HTTP method (GET/POST, etc.)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers</code></td><td>array of object</td><td>No</td><td>[]</td><td>Request header templates</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].key</code></td><td>string</td><td>Yes</td><td>-</td><td>Request header name</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].value</code></td><td>string</td><td>Yes</td><td>-</td><td>Request header value template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.body</code></td><td>string</td><td>No</td><td>-</td><td>Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToJsonBody</code></td><td>boolean</td><td>No</td><td>false</td><td>When true, arguments will be used directly as the JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToUrlParam</code></td><td>boolean</td><td>No</td><td>false</td><td>When true, arguments will be added to the URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToFormBody</code></td><td>boolean</td><td>No</td><td>false</td><td>When true, arguments will be encoded as application/x-www-form-urlencoded in the request body (mutually exclusive with body, argsToJsonBody, argsToUrlParam)</td></tr><tr><td><code dir="auto">tools[].responseTemplate</code></td><td>object</td><td>Yes</td><td>-</td><td>HTTP response transformation template</td></tr><tr><td><code dir="auto">tools[].responseTemplate.body</code></td><td>string</td><td>No</td><td>-</td><td>Response body transformation template (mutually exclusive with prependBody and appendBody)</td></tr><tr><td><code dir="auto">tools[].responseTemplate.prependBody</code></td><td>string</td><td>No</td><td>-</td><td>Text to insert before the response body (mutually exclusive with body)</td></tr><tr><td><code dir="auto">tools[].responseTemplate.appendBody</code></td><td>string</td><td>No</td><td>-</td><td>Text to insert after the response body (mutually exclusive with body)</td></tr></tbody></table>
<h2 id="parameter-type-support">Parameter Type Support</h2>
<p>REST-to-MCP tools support various parameter types, allowing you to define tool parameters more precisely:</p>
<ul>
<li><strong>string</strong>: String type (default)</li>
<li><strong>number</strong>: Number type (floating point)</li>
<li><strong>integer</strong>: Integer type</li>
<li><strong>boolean</strong>: Boolean type (true/false)</li>
<li><strong>array</strong>: Array type, using the <code dir="auto">items</code> field to define the schema for array elements</li>
<li><strong>object</strong>: Object type, using the <code dir="auto">properties</code> field to define the schema for object properties</li>
</ul>
<p>Example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Search keyword"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Number of results to return"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">filters</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Filter conditions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">category</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"food"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"hotel"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"attraction"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">price</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">coordinates</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"List of coordinate points"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lat</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lng</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="args:\x7F- name: query\x7F  description: &#x22;Search keyword&#x22;\x7F  type: string\x7F  required: true\x7F- name: limit\x7F  description: &#x22;Number of results to return&#x22;\x7F  type: integer\x7F  default: 10\x7F- name: filters\x7F  description: &#x22;Filter conditions&#x22;\x7F  type: object\x7F  properties:\x7F    category:\x7F      type: string\x7F      enum: [&#x22;food&#x22;, &#x22;hotel&#x22;, &#x22;attraction&#x22;]\x7F    price:\x7F      type: integer\x7F      minimum: 0\x7F- name: coordinates\x7F  description: &#x22;List of coordinate points&#x22;\x7F  type: array\x7F  items:\x7F    type: object\x7F    properties:\x7F      lat:\x7F        type: number\x7F      lng:\x7F        type: number"><div></div></button></div></figure></div>
<h2 id="parameter-position-control">Parameter Position Control</h2>
<p>REST-to-MCP tools support precise control of each parameter\u2019s position in the request through the <code dir="auto">position</code> field. This allows you to build API requests more flexibly, for example, using path parameters, query parameters, and request body parameters simultaneously.</p>
<h3 id="supported-position-types">Supported Position Types</h3>
<ul>
<li><strong>query</strong>: Parameter will be added to the URL as a query parameter</li>
<li><strong>path</strong>: Parameter will replace a path placeholder in the URL, such as <code dir="auto">{petId}</code> in <code dir="auto">/pet/{petId}</code></li>
<li><strong>header</strong>: Parameter will be added to the request as an HTTP header</li>
<li><strong>cookie</strong>: Parameter will be added to the request as a Cookie</li>
<li><strong>body</strong>: Parameter will be added to the request body (automatically formatted as JSON or form based on content type)</li>
</ul>
<h3 id="usage-example">Usage Example</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">petId</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Pet ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">path</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Authentication token"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sessionId</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Session ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cookie</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Number of results to return"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tags</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"List of tags"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="args:\x7F- name: petId\x7F  description: &#x22;Pet ID&#x22;\x7F  type: string\x7F  required: true\x7F  position: path\x7F- name: token\x7F  description: &#x22;Authentication token&#x22;\x7F  type: string\x7F  required: true\x7F  position: header\x7F- name: sessionId\x7F  description: &#x22;Session ID&#x22;\x7F  type: string\x7F  position: cookie\x7F- name: limit\x7F  description: &#x22;Number of results to return&#x22;\x7F  type: integer\x7F  default: 10\x7F  position: query\x7F- name: tags\x7F  description: &#x22;List of tags&#x22;\x7F  type: array\x7F  position: body"><div></div></button></div></figure></div>
<p>In the example above:</p>
<ul>
<li><code dir="auto">petId</code> will replace the <code dir="auto">{petId}</code> placeholder in the URL</li>
<li><code dir="auto">token</code> will be added as an HTTP header to the request</li>
<li><code dir="auto">sessionId</code> will be added as a Cookie to the request</li>
<li><code dir="auto">limit</code> will be added as a query parameter to the URL</li>
<li><code dir="auto">tags</code> will be added to the request body</li>
</ul>
<h3 id="relationship-with-bulk-parameter-processing-options">Relationship with Bulk Parameter Processing Options</h3>
<p>When using <code dir="auto">position</code> to specify parameter locations, these parameters will be processed according to their specified positions and will not be affected by bulk parameter processing options (<code dir="auto">argsToJsonBody</code>, <code dir="auto">argsToUrlParam</code>, <code dir="auto">argsToFormBody</code>). Only parameters without a specified <code dir="auto">position</code> will be affected by these bulk options.</p>
<p>For example, if you use both <code dir="auto">position</code> and <code dir="auto">argsToJsonBody</code>:</p>
<ul>
<li>Parameters with <code dir="auto">position: query</code> will be added to the URL query string</li>
<li>Parameters with <code dir="auto">position: header</code> will be added as HTTP headers</li>
<li>Parameters with <code dir="auto">position: path</code> will replace placeholders in the URL</li>
<li>Parameters with <code dir="auto">position: cookie</code> will be added as Cookies</li>
<li>Parameters with <code dir="auto">position: body</code> will be added to the JSON request body</li>
<li>Parameters without a specified <code dir="auto">position</code> will be added to the JSON request body via <code dir="auto">argsToJsonBody</code></li>
</ul>
<p>Additionally, if a <code dir="auto">body</code> is explicitly specified in the <code dir="auto">requestTemplate</code>, all parameters with <code dir="auto">position: body</code> will be ignored to avoid conflicts.</p>
<h2 id="request-parameter-passing-methods">Request Parameter Passing Methods</h2>
<p>In addition to precisely controlling each parameter\u2019s position using <code dir="auto">position</code>, REST-to-MCP tools also support four bulk parameter processing methods, which are <strong>mutually exclusive</strong> - only one can be used:</p>
<ol>
<li>
<p><strong>body</strong>: Manually construct the request body using a template. This is the most flexible approach, allowing you complete control over the request body format.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"query": "{{.args.query}}",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"filters": {{toJson .args.filters}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"options": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"limit": {{.args.limit}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  body: |\x7F    {\x7F      &#x22;query&#x22;: &#x22;{{.args.query}}&#x22;,\x7F      &#x22;filters&#x22;: {{toJson .args.filters}},\x7F      &#x22;options&#x22;: {\x7F        &#x22;limit&#x22;: {{.args.limit}}\x7F      }\x7F    }"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToJsonBody</strong>: When set to <code dir="auto">true</code>, parameters without a specified <code dir="auto">position</code> will be sent directly as a JSON object in the request body, and the <code dir="auto">Content-Type: application/json; charset=utf-8</code> header will be automatically added.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToJsonBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToJsonBody: true"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToUrlParam</strong>: When set to <code dir="auto">true</code>, parameters without a specified <code dir="auto">position</code> will be added to the URL as query parameters.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToUrlParam: true"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToFormBody</strong>: When set to <code dir="auto">true</code>, parameters without a specified <code dir="auto">position</code> will be encoded as <code dir="auto">application/x-www-form-urlencoded</code> in the request body, and the appropriate Content-Type header will be automatically added.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToFormBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToFormBody: true"><div></div></button></div></figure></div>
</li>
</ol>
<p>These options simplify the configuration of common API call patterns without having to manually construct request bodies or URL parameters. Note that these four options are mutually exclusive, and only one can be used in a tool configuration. If multiple options are configured simultaneously, the system will return an error and refuse to load the tool configuration.</p>
<h2 id="template-syntax">Template Syntax</h2>
<p>The REST-to-MCP feature uses the <a href="https://github.com/higress-group/gjson_template" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Template</a> library for template rendering, which combines Go\u2019s template syntax with GJSON\u2019s powerful path syntax:</p>
<h3 id="request-templates">Request Templates</h3>
<p>Used to construct HTTP request URLs, headers, and bodies:</p>
<ul>
<li>Access configuration values: <code dir="auto">.config.fieldName</code></li>
<li>Access tool parameters: <code dir="auto">.args.paramName</code></li>
</ul>
<h3 id="response-templates">Response Templates</h3>
<p>Used to transform HTTP responses into formats suitable for AI consumption:</p>
<ul>
<li>Access JSON response fields using GJSON path syntax</li>
<li>Use template functions like <code dir="auto">add</code>, <code dir="auto">upper</code>, <code dir="auto">lower</code>, etc.</li>
<li>Use control structures like <code dir="auto">if</code>, <code dir="auto">range</code>, etc.</li>
</ul>
<p>GJSON Template includes all <a href="https://github.com/Masterminds/sprig" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Sprig</a> functions, providing 70+ template functions for string manipulation, mathematical operations, date formatting, and more, making it functionally equivalent to Helm\u2019s template capabilities.</p>
<p>Commonly used Sprig functions include:</p>
<ul>
<li><strong>String manipulation</strong>: <code dir="auto">trim</code>, <code dir="auto">upper</code>, <code dir="auto">lower</code>, <code dir="auto">replace</code>, <code dir="auto">plural</code>, <code dir="auto">nospace</code></li>
<li><strong>Math operations</strong>: <code dir="auto">add</code>, <code dir="auto">sub</code>, <code dir="auto">mul</code>, <code dir="auto">div</code>, <code dir="auto">max</code>, <code dir="auto">min</code></li>
<li><strong>Date formatting</strong>: <code dir="auto">now</code>, <code dir="auto">date</code>, <code dir="auto">dateInZone</code>, <code dir="auto">dateModify</code></li>
<li><strong>List operations</strong>: <code dir="auto">list</code>, <code dir="auto">first</code>, <code dir="auto">last</code>, <code dir="auto">uniq</code>, <code dir="auto">sortAlpha</code></li>
<li><strong>Dictionary operations</strong>: <code dir="auto">dict</code>, <code dir="auto">get</code>, <code dir="auto">set</code>, <code dir="auto">hasKey</code>, <code dir="auto">pluck</code></li>
<li><strong>Flow control</strong>: <code dir="auto">ternary</code>, <code dir="auto">default</code>, <code dir="auto">empty</code>, <code dir="auto">coalesce</code></li>
<li><strong>Type conversion</strong>: <code dir="auto">toString</code>, <code dir="auto">toJson</code>, <code dir="auto">toPrettyJson</code>, <code dir="auto">toRawJson</code></li>
<li><strong>Encoding/decoding</strong>: <code dir="auto">b64enc</code>, <code dir="auto">b64dec</code>, <code dir="auto">urlquery</code>, <code dir="auto">urlqueryescape</code></li>
<li><strong>UUID generation</strong>: <code dir="auto">uuidv4</code></li>
</ul>
<p>For a complete reference of all available functions, see the <a href="https://helm.sh/docs/chart_template_guide/function_list/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Helm function documentation</a>, as GJSON Template includes the same function set.</p>
<h3 id="gjson-path-syntax">GJSON Path Syntax</h3>
<p>GJSON provides powerful JSON querying capabilities:</p>
<ul>
<li><strong>Dot notation</strong>: <code dir="auto">address.city</code></li>
<li><strong>Array indexing</strong>: <code dir="auto">users.0.name</code></li>
<li><strong>Array iteration</strong>: <code dir="auto">users.#.name</code></li>
<li><strong>Array filtering</strong>: <code dir="auto">users.#(age>=30)#.name</code></li>
<li><strong>Modifiers</strong>: <code dir="auto">users.@reverse.#.name</code></li>
<li><strong>Multipath</strong>: <code dir="auto">{name:users.0.name,count:users.#}</code></li>
<li><strong>Escape characters</strong>: <code dir="auto">path.with\\.dot</code></li>
</ul>
<p>For more complex queries, you can use the <code dir="auto">gjson</code> function:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Using the gjson function for complex queries --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Active users: {{gjson "users.#(active==true)#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Array filtering with multiple conditions --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Active developers over 30: {{gjson "users.#(active==true &#x26;&#x26; age>30)#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Using modifiers --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">User names (reversed): {{gjson "users.@reverse.#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Iterating over filtered results --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Admins:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- {{$user.name}} ({{$user.age}})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<!-- Using the gjson function for complex queries -->\x7FActive users: {{gjson &#x22;users.#(active==true)#.name&#x22;}}\x7F\x7F<!-- Array filtering with multiple conditions -->\x7FActive developers over 30: {{gjson &#x22;users.#(active==true &#x26;&#x26; age>30)#.name&#x22;}}\x7F\x7F<!-- Using modifiers -->\x7FUser names (reversed): {{gjson &#x22;users.@reverse.#.name&#x22;}}\x7F\x7F<!-- Iterating over filtered results -->\x7FAdmins:\x7F{{range $user := gjson &#x22;users.#(roles.#(==admin)>0)#&#x22;}}\x7F  - {{$user.name}} ({{$user.age}})\x7F{{end}}"><div></div></button></div></figure></div>
<p>For a complete reference of GJSON path syntax, see the <a href="https://github.com/tidwall/gjson#path-syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON documentation</a>.</p>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="using-built-in-mcp-server-example-configuring-quark-search">Using Built-in MCP Server Example: Configuring quark-search</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quark-search"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"xxxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;quark-search&#x22;\x7F  config:\x7F    apiKey: &#x22;xxxx&#x22;"><div></div></button></div></figure></div>
<p>This configuration uses Higress\u2019s built-in quark-search MCP server. In this case, you only need to specify the server name and necessary configuration (such as API key), without configuring the tools field, as the tools are already predefined in the server.</p>
<h3 id="basic-example-converting-amap-api">Basic Example: Converting AMap API</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rest-amap-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">maps-geo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Convert structured address information to latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates."</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The structured address to parse"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">city</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The city to search in"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">output</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Output format"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"json"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"xml"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://restapi.amap.com/v3/geocode/geo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># Geocoding Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- range $index, $geo := .geocodes }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">## Location {{add $index 1}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Country**: {{ $geo.country }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Province**: {{ $geo.province }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **City**: {{ $geo.city }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **City Code**: {{ $geo.citycode }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **District**: {{ $geo.district }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Street**: {{ $geo.street }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Number**: {{ $geo.number }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Administrative Code**: {{ $geo.adcode }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Coordinates**: {{ $geo.location }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Level**: {{ $geo.level }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: rest-amap-server\x7F  config:\x7F    apiKey: your-api-key-here\x7Ftools:\x7F- name: maps-geo\x7F  description: &#x22;Convert structured address information to latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates.&#x22;\x7F  args:\x7F  - name: address\x7F    description: &#x22;The structured address to parse&#x22;\x7F    type: string\x7F    required: true\x7F  - name: city\x7F    description: &#x22;The city to search in&#x22;\x7F    type: string\x7F    required: false\x7F  - name: output\x7F    description: &#x22;Output format&#x22;\x7F    type: string\x7F    enum: [&#x22;json&#x22;, &#x22;xml&#x22;]\x7F    default: &#x22;json&#x22;\x7F  requestTemplate:\x7F    url: &#x22;https://restapi.amap.com/v3/geocode/geo&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # Geocoding Information\x7F      {{- range $index, $geo := .geocodes }}\x7F      ## Location {{add $index 1}}\x7F\x7F      - **Country**: {{ $geo.country }}\x7F      - **Province**: {{ $geo.province }}\x7F      - **City**: {{ $geo.city }}\x7F      - **City Code**: {{ $geo.citycode }}\x7F      - **District**: {{ $geo.district }}\x7F      - **Street**: {{ $geo.street }}\x7F      - **Number**: {{ $geo.number }}\x7F      - **Administrative Code**: {{ $geo.adcode }}\x7F      - **Coordinates**: {{ $geo.location }}\x7F      - **Level**: {{ $geo.level }}\x7F      {{- end }}"><div></div></button></div></figure></div>
<p>This configuration converts AMap\u2019s geocoding API into a tool callable by AI. When the AI calls this tool:</p>
<ol>
<li>It builds an API request using the provided address and city parameters</li>
<li>Calls the AMap API</li>
<li>Transforms the JSON response into an easy-to-read Markdown format</li>
<li>Returns the formatted result to the AI assistant</li>
</ol>
<h3 id="advanced-example-complex-response-processing-with-conditional-logic">Advanced Example: Complex Response Processing with Conditional Logic</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">weather-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-weather-api-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-weather</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get weather forecast information for a specified city"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">city</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"City name"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">days</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Number of days (1-7)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">include_hourly</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Whether to include hourly forecasts"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.weatherapi.com/v1/forecast.json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># {{.location.name}}, {{.location.country}} Weather Forecast</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Current Temperature**: {{.current.temp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Feels Like**: {{.current.feelslike_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Conditions**: {{.current.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Humidity**: {{.current.humidity}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Wind Speed**: {{.current.wind_kph}} km/h</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">## Future Forecast</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $index, $day := .forecast.forecastday}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Alert!**{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Alert!**{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Max Temperature**: {{$day.day.maxtemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Min Temperature**: {{$day.day.mintemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Conditions**: {{$day.day.condition.text}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">#### Hourly Forecast</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $hour := slice $day.hour 6 24 3}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: weather-api-server\x7F  config:\x7F    apiKey: your-weather-api-key\x7Ftools:\x7F- name: get-weather\x7F  description: &#x22;Get weather forecast information for a specified city&#x22;\x7F  args:\x7F  - name: city\x7F    description: &#x22;City name&#x22;\x7F    type: string\x7F    required: true\x7F  - name: days\x7F    description: &#x22;Number of days (1-7)&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 3\x7F  - name: include_hourly\x7F    description: &#x22;Whether to include hourly forecasts&#x22;\x7F    type: boolean\x7F    default: true\x7F  requestTemplate:\x7F    url: &#x22;https://api.weatherapi.com/v1/forecast.json&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # {{.location.name}}, {{.location.country}} Weather Forecast\x7F\x7F      **Current Temperature**: {{.current.temp_c}}\xB0C\x7F      **Feels Like**: {{.current.feelslike_c}}\xB0C\x7F      **Conditions**: {{.current.condition.text}}\x7F      **Humidity**: {{.current.humidity}}%\x7F      **Wind Speed**: {{.current.wind_kph}} km/h\x7F\x7F      ## Future Forecast\x7F      {{range $index, $day := .forecast.forecastday}}\x7F      ### {{$day.date}} ({{dateFormat &#x22;Monday&#x22; $day.date_epoch | title}})\x7F\x7F      {{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Alert!**{{end}}\x7F      {{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Alert!**{{end}}\x7F\x7F      - **Max Temperature**: {{$day.day.maxtemp_c}}\xB0C\x7F      - **Min Temperature**: {{$day.day.mintemp_c}}\xB0C\x7F      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%\x7F      - **Conditions**: {{$day.day.condition.text}}\x7F\x7F      #### Hourly Forecast\x7F      {{range $hour := slice $day.hour 6 24 3}}\x7F      - **{{dateFormat &#x22;15:04&#x22; $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}\x7F      {{end}}\x7F      {{end}}"><div></div></button></div></figure></div>
<p>This example demonstrates:</p>
<ul>
<li>Using conditional statements (<code dir="auto">if</code>) for temperature alerts</li>
<li>Using date formatting functions (<code dir="auto">dateFormat</code>)</li>
<li>Using array slicing (<code dir="auto">slice</code>) to select specific weather times</li>
<li>Nested loops to iterate through multiple days and time periods of weather data</li>
</ul>
<h3 id="using-prependbody-and-appendbody-openapi-conversion">Using PrependBody and AppendBody: OpenAPI Conversion</h3>
<p>When you want to preserve the original API response but add additional context information, the <code dir="auto">prependBody</code> and <code dir="auto">appendBody</code> fields are very useful. This is particularly valuable when converting OpenAPI/Swagger specifications to MCP tools, as you can keep the original JSON response while providing explanations of field meanings for the AI assistant.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-product</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get detailed product information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Product ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/products/{{.args.product_id}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Authorization</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bearer {{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prependBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># Product Information</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">Below is the detailed product information returned in JSON format. Field descriptions:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **id**: Unique product identifier</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **name**: Product name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **description**: Product description</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **price**: Product price (USD)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **category**: Product category</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **inventory**: Inventory information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **quantity**: Current stock quantity</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **warehouse**: Warehouse location</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **ratings**: List of user ratings</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **score**: Rating (1-5)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **comment**: Review content</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">Original JSON response:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">You can use this information to understand the product's details, pricing, inventory status, and user reviews.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: product-api-server\x7F  config:\x7F    apiKey: your-api-key-here\x7Ftools:\x7F- name: get-product\x7F  description: &#x22;Get detailed product information&#x22;\x7F  args:\x7F  - name: product_id\x7F    description: &#x22;Product ID&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/products/{{.args.product_id}}&#x22;\x7F    method: GET\x7F    headers:\x7F    - key: Authorization\x7F      value: &#x22;Bearer {{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    prependBody: |\x7F      # Product Information\x7F\x7F      Below is the detailed product information returned in JSON format. Field descriptions:\x7F\x7F      - **id**: Unique product identifier\x7F      - **name**: Product name\x7F      - **description**: Product description\x7F      - **price**: Product price (USD)\x7F      - **category**: Product category\x7F      - **inventory**: Inventory information\x7F        - **quantity**: Current stock quantity\x7F        - **warehouse**: Warehouse location\x7F      - **ratings**: List of user ratings\x7F        - **score**: Rating (1-5)\x7F        - **comment**: Review content\x7F\x7F      Original JSON response:\x7F\x7F    appendBody: |\x7F\x7F      You can use this information to understand the product&#x27;s details, pricing, inventory status, and user reviews."><div></div></button></div></figure></div>
<p>This example demonstrates:</p>
<ul>
<li>Using <code dir="auto">prependBody</code> to add field descriptions before the original JSON response</li>
<li>Using <code dir="auto">appendBody</code> to add usage suggestions at the end of the response</li>
<li>Preserving the original JSON response, allowing the AI assistant to directly access all data</li>
</ul>
<h2 id="ai-prompt-for-template-generation">AI Prompt for Template Generation</h2>
<p>When working with AI assistants to generate templates for REST-to-MCP configuration, you can use the following prompt:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Please help me create a REST-to-MCP configuration for Higress that converts a REST API to an MCP tool.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## Configuration Format</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">The configuration should follow this format:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\`\`\`yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: rest-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">apiKey: your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">tools:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- name: tool-name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">description: "Detailed description of what this tool does"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of argument 1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: string  # Optional types: string, number, integer, boolean, array, object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: path  # Optional positions: query, path, header, cookie, body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of argument 2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: integer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">default: 10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of argument 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: array</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">items:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of argument 4"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">properties:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">subfield1:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">subfield2:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">type: number</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># No position specified, will be handled by argsToJsonBody/argsToUrlParam/argsToFormBody</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">url: "https://api.example.com/endpoint"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">method: POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># The following four options are mutually exclusive, only one can be used</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">argsToUrlParam: true  # Add arguments to URL query parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># OR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># argsToJsonBody: true  # Send arguments as a JSON object in the request body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># OR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># argsToFormBody: true  # Send arguments as form-encoded in the request body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># OR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># body: |  # Manually construct the request body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#     "param1": "{{.args.arg1}}",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#     "param2": {{.args.arg2}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#     "complex": {{toJson .args.arg4}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">headers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- key: x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">value: "{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># The following three options are mutually exclusive, only one can be used</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">body: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8"># Result</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- range $index, $item := .items }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">## Item {{add $index 1}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **Name**: {{ $item.name }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **Value**: {{ $item.value }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- end }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># OR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># prependBody: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   # API Response Description</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   Below is the original JSON response, with field meanings:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   - field1: Meaning of field 1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   - field2: Meaning of field 2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># appendBody: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   You can use this data to...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Please help me create a REST-to-MCP configuration for Higress that converts a REST API to an MCP tool.\x7F\x7F## Configuration Format\x7F\x7FThe configuration should follow this format:\x7F\x7F&#x60;&#x60;&#x60;yaml\x7Fserver:\x7F  name: rest-api-server\x7F  config:\x7F    apiKey: your-api-key-here\x7Ftools:\x7F- name: tool-name\x7F  description: &#x22;Detailed description of what this tool does&#x22;\x7F  args:\x7F  - name: arg1\x7F    description: &#x22;Description of argument 1&#x22;\x7F    type: string  # Optional types: string, number, integer, boolean, array, object\x7F    required: true\x7F    position: path  # Optional positions: query, path, header, cookie, body\x7F  - name: arg2\x7F    description: &#x22;Description of argument 2&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 10\x7F    position: query\x7F  - name: arg3\x7F    description: &#x22;Description of argument 3&#x22;\x7F    type: array\x7F    items:\x7F      type: string\x7F    position: body\x7F  - name: arg4\x7F    description: &#x22;Description of argument 4&#x22;\x7F    type: object\x7F    properties:\x7F      subfield1:\x7F        type: string\x7F      subfield2:\x7F        type: number\x7F    # No position specified, will be handled by argsToJsonBody/argsToUrlParam/argsToFormBody\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/endpoint&#x22;\x7F    method: POST\x7F    # The following four options are mutually exclusive, only one can be used\x7F    argsToUrlParam: true  # Add arguments to URL query parameters\x7F    # OR\x7F    # argsToJsonBody: true  # Send arguments as a JSON object in the request body\x7F    # OR\x7F    # argsToFormBody: true  # Send arguments as form-encoded in the request body\x7F    # OR\x7F    # body: |  # Manually construct the request body\x7F    #   {\x7F    #     &#x22;param1&#x22;: &#x22;{{.args.arg1}}&#x22;,\x7F    #     &#x22;param2&#x22;: {{.args.arg2}},\x7F    #     &#x22;complex&#x22;: {{toJson .args.arg4}}\x7F    #   }\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    # The following three options are mutually exclusive, only one can be used\x7F    body: |\x7F      # Result\x7F      {{- range $index, $item := .items }}\x7F      ## Item {{add $index 1}}\x7F      - **Name**: {{ $item.name }}\x7F      - **Value**: {{ $item.value }}\x7F      {{- end }}\x7F    # OR\x7F    # prependBody: |\x7F    #   # API Response Description\x7F    #\x7F    #   Below is the original JSON response, with field meanings:\x7F    #   - field1: Meaning of field 1\x7F    #   - field2: Meaning of field 2\x7F    #\x7F    # appendBody: |\x7F    #\x7F    #   You can use this data to..."><div></div></button></div></figure></div>
<h2 id="template-syntax-1">Template Syntax</h2>
<p>The templates use GJSON Template syntax (<a href="https://github.com/higress-group/gjson_template" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/gjson_template</a>), which combines Go templates with GJSON path syntax for JSON processing. The template engine supports:</p>
<ol>
<li>Basic dot notation for accessing fields: {{.fieldName}}</li>
<li>The gjson function for complex queries: {{gjson \u201Cusers.#(active==true)#.name\u201D}}</li>
<li>All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.</li>
<li>Control structures: {{if}}, {{range}}, {{with}}, etc.</li>
<li>Variable assignment: {{$var := .value}}</li>
</ol>
<p>For complex JSON responses, consider using GJSON\u2019s powerful filtering and querying capabilities to extract and format the most relevant information.</p>
<h2 id="my-api-information">My API Information</h2>
<p>The REST API I want to convert is:</p>
<p>[Describe your API here, including endpoints, parameters, and response format, or paste a Swagger/OpenAPI specification]</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=""><div></div></button></div></figure></div>`,n={title:"MCP Server Plugin Configuration",description:"MCP Server Plugin Configuration Reference",date:"2025-04-03",category:"article",keywords:["higress","mcp","ai"],authors:"Chengtan"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/mcp-server.md",t=void 0,l=function(){return`# MCP Server Plugin Configuration

## Feature Description

The \`mcp-server\` plugin provides AI tool integration capabilities based on the Model Context Protocol (MCP). MCP is a protocol designed specifically for AI assistants, defining a standard way for AI models to interact with external tools and resources. Through this plugin, you can:

1. Convert existing REST APIs into tools callable by AI assistants without writing any code
2. Leverage Higress gateway's unified authentication, authorization, rate limiting, and observability capabilities
3. Quickly build and deploy AI tools and services

![](https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png)

By hosting MCP Servers with Higress, you can achieve:
- Unified authentication and authorization mechanisms, ensuring the security of AI tool calls
- Fine-grained rate limiting to prevent abuse and resource exhaustion
- Comprehensive audit logs recording all tool call behaviors
- Rich observability for monitoring the performance and health of tool calls
- Simplified deployment and management through Higress's plugin mechanism for quickly adding new MCP Servers

## Runtime Properties

Plugin execution phase: \`Default Phase\`
Plugin execution priority: \`30\`

## Configuration Fields

### Server Configuration

| Name         | Data Type   | Required | Default | Description                           |
| ------------ | ---------- | -------- | ------ | ------------------------------ |
| \`server.name\` | string     | Yes     | -      | Name of the MCP server. If using a pre-integrated MCP server (like quark-search), you only need to configure this field with the corresponding name and don't need to configure the tools field. For REST-to-MCP scenarios, this field can be any arbitrary value. |
| \`server.config\` | object     | No     | {}     | Server configuration, such as API keys      |
| \`server.allowTools\` | array of string | No | - | List of tools allowed to be called. If not specified, all tools are allowed |

### REST-to-MCP Tool Configuration

| Name                          | Data Type        | Required | Default | Description                           |
| ----------------------------- | --------------- | -------- | ------ | ------------------------------ |
| \`tools\`                       | array of object | No     | []     | List of REST-to-MCP tool configurations       |
| \`tools[].name\`                | string          | Yes     | -      | Tool name                       |
| \`tools[].description\`         | string          | Yes     | -      | Tool functionality description                   |
| \`tools[].args\`                | array of object | Yes     | []     | Tool parameter definitions                   |
| \`tools[].args[].name\`         | string          | Yes     | -      | Parameter name                       |
| \`tools[].args[].description\`  | string          | Yes     | -      | Parameter description                       |
| \`tools[].args[].type\`         | string          | No     | string | Parameter type (string, number, integer, boolean, array, object) |
| \`tools[].args[].required\`     | boolean         | No     | false  | Whether the parameter is required                   |
| \`tools[].args[].default\`      | any             | No     | -      | Parameter default value                     |
| \`tools[].args[].enum\`         | array           | No     | -      | List of allowed values for the parameter               |
| \`tools[].args[].items\`        | object          | No     | -      | Schema for array items (when type is array)  |
| \`tools[].args[].properties\`   | object          | No     | -      | Schema for object properties (when type is object)|
| \`tools[].args[].position\`     | string          | No     | -      | Position of the parameter in the request (query, path, header, cookie, body) |
| \`tools[].requestTemplate\`     | object          | Yes     | -      | HTTP request template                  |
| \`tools[].requestTemplate.url\` | string          | Yes     | -      | Request URL template                  |
| \`tools[].requestTemplate.method\` | string       | Yes     | -      | HTTP method (GET/POST, etc.)          |
| \`tools[].requestTemplate.headers\` | array of object | No | [] | Request header templates                     |
| \`tools[].requestTemplate.headers[].key\` | string | Yes   | -      | Request header name                     |
| \`tools[].requestTemplate.headers[].value\` | string | Yes | -      | Request header value template                   |
| \`tools[].requestTemplate.body\` | string         | No     | -      | Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody) |
| \`tools[].requestTemplate.argsToJsonBody\` | boolean | No  | false  | When true, arguments will be used directly as the JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody) |
| \`tools[].requestTemplate.argsToUrlParam\` | boolean | No  | false  | When true, arguments will be added to the URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody) |
| \`tools[].requestTemplate.argsToFormBody\` | boolean | No  | false  | When true, arguments will be encoded as application/x-www-form-urlencoded in the request body (mutually exclusive with body, argsToJsonBody, argsToUrlParam) |
| \`tools[].responseTemplate\`    | object          | Yes     | -      | HTTP response transformation template              |
| \`tools[].responseTemplate.body\` | string        | No      | -      | Response body transformation template (mutually exclusive with prependBody and appendBody) |
| \`tools[].responseTemplate.prependBody\` | string | No      | -      | Text to insert before the response body (mutually exclusive with body) |
| \`tools[].responseTemplate.appendBody\` | string  | No      | -      | Text to insert after the response body (mutually exclusive with body) |

## Parameter Type Support

REST-to-MCP tools support various parameter types, allowing you to define tool parameters more precisely:

- **string**: String type (default)
- **number**: Number type (floating point)
- **integer**: Integer type
- **boolean**: Boolean type (true/false)
- **array**: Array type, using the \`items\` field to define the schema for array elements
- **object**: Object type, using the \`properties\` field to define the schema for object properties

Example:

\`\`\`yaml
args:
- name: query
  description: "Search keyword"
  type: string
  required: true
- name: limit
  description: "Number of results to return"
  type: integer
  default: 10
- name: filters
  description: "Filter conditions"
  type: object
  properties:
    category:
      type: string
      enum: ["food", "hotel", "attraction"]
    price:
      type: integer
      minimum: 0
- name: coordinates
  description: "List of coordinate points"
  type: array
  items:
    type: object
    properties:
      lat:
        type: number
      lng:
        type: number
\`\`\`

## Parameter Position Control

REST-to-MCP tools support precise control of each parameter's position in the request through the \`position\` field. This allows you to build API requests more flexibly, for example, using path parameters, query parameters, and request body parameters simultaneously.

### Supported Position Types

- **query**: Parameter will be added to the URL as a query parameter
- **path**: Parameter will replace a path placeholder in the URL, such as \`{petId}\` in \`/pet/{petId}\`
- **header**: Parameter will be added to the request as an HTTP header
- **cookie**: Parameter will be added to the request as a Cookie
- **body**: Parameter will be added to the request body (automatically formatted as JSON or form based on content type)

### Usage Example

\`\`\`yaml
args:
- name: petId
  description: "Pet ID"
  type: string
  required: true
  position: path
- name: token
  description: "Authentication token"
  type: string
  required: true
  position: header
- name: sessionId
  description: "Session ID"
  type: string
  position: cookie
- name: limit
  description: "Number of results to return"
  type: integer
  default: 10
  position: query
- name: tags
  description: "List of tags"
  type: array
  position: body
\`\`\`

In the example above:
- \`petId\` will replace the \`{petId}\` placeholder in the URL
- \`token\` will be added as an HTTP header to the request
- \`sessionId\` will be added as a Cookie to the request
- \`limit\` will be added as a query parameter to the URL
- \`tags\` will be added to the request body

### Relationship with Bulk Parameter Processing Options

When using \`position\` to specify parameter locations, these parameters will be processed according to their specified positions and will not be affected by bulk parameter processing options (\`argsToJsonBody\`, \`argsToUrlParam\`, \`argsToFormBody\`). Only parameters without a specified \`position\` will be affected by these bulk options.

For example, if you use both \`position\` and \`argsToJsonBody\`:
- Parameters with \`position: query\` will be added to the URL query string
- Parameters with \`position: header\` will be added as HTTP headers
- Parameters with \`position: path\` will replace placeholders in the URL
- Parameters with \`position: cookie\` will be added as Cookies
- Parameters with \`position: body\` will be added to the JSON request body
- Parameters without a specified \`position\` will be added to the JSON request body via \`argsToJsonBody\`

Additionally, if a \`body\` is explicitly specified in the \`requestTemplate\`, all parameters with \`position: body\` will be ignored to avoid conflicts.

## Request Parameter Passing Methods

In addition to precisely controlling each parameter's position using \`position\`, REST-to-MCP tools also support four bulk parameter processing methods, which are **mutually exclusive** - only one can be used:

1. **body**: Manually construct the request body using a template. This is the most flexible approach, allowing you complete control over the request body format.
   \`\`\`yaml
   requestTemplate:
     body: |
       {
         "query": "{{.args.query}}",
         "filters": {{toJson .args.filters}},
         "options": {
           "limit": {{.args.limit}}
         }
       }
   \`\`\`

2. **argsToJsonBody**: When set to \`true\`, parameters without a specified \`position\` will be sent directly as a JSON object in the request body, and the \`Content-Type: application/json; charset=utf-8\` header will be automatically added.
   \`\`\`yaml
   requestTemplate:
     argsToJsonBody: true
   \`\`\`

3. **argsToUrlParam**: When set to \`true\`, parameters without a specified \`position\` will be added to the URL as query parameters.
   \`\`\`yaml
   requestTemplate:
     argsToUrlParam: true
   \`\`\`

4. **argsToFormBody**: When set to \`true\`, parameters without a specified \`position\` will be encoded as \`application/x-www-form-urlencoded\` in the request body, and the appropriate Content-Type header will be automatically added.
   \`\`\`yaml
   requestTemplate:
     argsToFormBody: true
   \`\`\`

These options simplify the configuration of common API call patterns without having to manually construct request bodies or URL parameters. Note that these four options are mutually exclusive, and only one can be used in a tool configuration. If multiple options are configured simultaneously, the system will return an error and refuse to load the tool configuration.

## Template Syntax

The REST-to-MCP feature uses the [GJSON Template](https://github.com/higress-group/gjson_template) library for template rendering, which combines Go's template syntax with GJSON's powerful path syntax:

### Request Templates

Used to construct HTTP request URLs, headers, and bodies:
- Access configuration values: \`.config.fieldName\`
- Access tool parameters: \`.args.paramName\`

### Response Templates

Used to transform HTTP responses into formats suitable for AI consumption:
- Access JSON response fields using GJSON path syntax
- Use template functions like \`add\`, \`upper\`, \`lower\`, etc.
- Use control structures like \`if\`, \`range\`, etc.

GJSON Template includes all [Sprig](https://github.com/Masterminds/sprig) functions, providing 70+ template functions for string manipulation, mathematical operations, date formatting, and more, making it functionally equivalent to Helm's template capabilities.

Commonly used Sprig functions include:

- **String manipulation**: \`trim\`, \`upper\`, \`lower\`, \`replace\`, \`plural\`, \`nospace\`
- **Math operations**: \`add\`, \`sub\`, \`mul\`, \`div\`, \`max\`, \`min\`
- **Date formatting**: \`now\`, \`date\`, \`dateInZone\`, \`dateModify\`
- **List operations**: \`list\`, \`first\`, \`last\`, \`uniq\`, \`sortAlpha\`
- **Dictionary operations**: \`dict\`, \`get\`, \`set\`, \`hasKey\`, \`pluck\`
- **Flow control**: \`ternary\`, \`default\`, \`empty\`, \`coalesce\`
- **Type conversion**: \`toString\`, \`toJson\`, \`toPrettyJson\`, \`toRawJson\`
- **Encoding/decoding**: \`b64enc\`, \`b64dec\`, \`urlquery\`, \`urlqueryescape\`
- **UUID generation**: \`uuidv4\`

For a complete reference of all available functions, see the [Helm function documentation](https://helm.sh/docs/chart_template_guide/function_list/), as GJSON Template includes the same function set.

### GJSON Path Syntax

GJSON provides powerful JSON querying capabilities:

- **Dot notation**: \`address.city\`
- **Array indexing**: \`users.0.name\`
- **Array iteration**: \`users.#.name\`
- **Array filtering**: \`users.#(age>=30)#.name\`
- **Modifiers**: \`users.@reverse.#.name\`
- **Multipath**: \`{name:users.0.name,count:users.#}\`
- **Escape characters**: \`path.with\\.dot\`

For more complex queries, you can use the \`gjson\` function:

\`\`\`
<!-- Using the gjson function for complex queries -->
Active users: {{gjson "users.#(active==true)#.name"}}

<!-- Array filtering with multiple conditions -->
Active developers over 30: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- Using modifiers -->
User names (reversed): {{gjson "users.@reverse.#.name"}}

<!-- Iterating over filtered results -->
Admins:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
\`\`\`

For a complete reference of GJSON path syntax, see the [GJSON documentation](https://github.com/tidwall/gjson#path-syntax).

## Configuration Examples

### Using Built-in MCP Server Example: Configuring quark-search

\`\`\`yaml
server:
  name: "quark-search"
  config:
    apiKey: "xxxx"
\`\`\`

This configuration uses Higress's built-in quark-search MCP server. In this case, you only need to specify the server name and necessary configuration (such as API key), without configuring the tools field, as the tools are already predefined in the server.

### Basic Example: Converting AMap API

\`\`\`yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps-geo
  description: "Convert structured address information to latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates."
  args:
  - name: address
    description: "The structured address to parse"
    type: string
    required: true
  - name: city
    description: "The city to search in"
    type: string
    required: false
  - name: output
    description: "Output format"
    type: string
    enum: ["json", "xml"]
    default: "json"
  requestTemplate:
    url: "https://restapi.amap.com/v3/geocode/geo"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # Geocoding Information
      {{- range $index, $geo := .geocodes }}
      ## Location {{add $index 1}}

      - **Country**: {{ $geo.country }}
      - **Province**: {{ $geo.province }}
      - **City**: {{ $geo.city }}
      - **City Code**: {{ $geo.citycode }}
      - **District**: {{ $geo.district }}
      - **Street**: {{ $geo.street }}
      - **Number**: {{ $geo.number }}
      - **Administrative Code**: {{ $geo.adcode }}
      - **Coordinates**: {{ $geo.location }}
      - **Level**: {{ $geo.level }}
      {{- end }}
\`\`\`

This configuration converts AMap's geocoding API into a tool callable by AI. When the AI calls this tool:

1. It builds an API request using the provided address and city parameters
2. Calls the AMap API
3. Transforms the JSON response into an easy-to-read Markdown format
4. Returns the formatted result to the AI assistant

### Advanced Example: Complex Response Processing with Conditional Logic

\`\`\`yaml
server:
  name: weather-api-server
  config:
    apiKey: your-weather-api-key
tools:
- name: get-weather
  description: "Get weather forecast information for a specified city"
  args:
  - name: city
    description: "City name"
    type: string
    required: true
  - name: days
    description: "Number of days (1-7)"
    type: integer
    required: false
    default: 3
  - name: include_hourly
    description: "Whether to include hourly forecasts"
    type: boolean
    default: true
  requestTemplate:
    url: "https://api.weatherapi.com/v1/forecast.json"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # {{.location.name}}, {{.location.country}} Weather Forecast

      **Current Temperature**: {{.current.temp_c}}\xB0C
      **Feels Like**: {{.current.feelslike_c}}\xB0C
      **Conditions**: {{.current.condition.text}}
      **Humidity**: {{.current.humidity}}%
      **Wind Speed**: {{.current.wind_kph}} km/h

      ## Future Forecast
      {{range $index, $day := .forecast.forecastday}}
      ### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})
      
      {{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Alert!**{{end}}
      {{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Alert!**{{end}}
      
      - **Max Temperature**: {{$day.day.maxtemp_c}}\xB0C
      - **Min Temperature**: {{$day.day.mintemp_c}}\xB0C
      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%
      - **Conditions**: {{$day.day.condition.text}}
      
      #### Hourly Forecast
      {{range $hour := slice $day.hour 6 24 3}}
      - **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}
      {{end}}
      {{end}}
\`\`\`

This example demonstrates:
- Using conditional statements (\`if\`) for temperature alerts
- Using date formatting functions (\`dateFormat\`)
- Using array slicing (\`slice\`) to select specific weather times
- Nested loops to iterate through multiple days and time periods of weather data

### Using PrependBody and AppendBody: OpenAPI Conversion

When you want to preserve the original API response but add additional context information, the \`prependBody\` and \`appendBody\` fields are very useful. This is particularly valuable when converting OpenAPI/Swagger specifications to MCP tools, as you can keep the original JSON response while providing explanations of field meanings for the AI assistant.

\`\`\`yaml
server:
  name: product-api-server
  config:
    apiKey: your-api-key-here
tools:
- name: get-product
  description: "Get detailed product information"
  args:
  - name: product_id
    description: "Product ID"
    type: string
    required: true
  requestTemplate:
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
    headers:
    - key: Authorization
      value: "Bearer {{.config.apiKey}}"
  responseTemplate:
    prependBody: |
      # Product Information
      
      Below is the detailed product information returned in JSON format. Field descriptions:
      
      - **id**: Unique product identifier
      - **name**: Product name
      - **description**: Product description
      - **price**: Product price (USD)
      - **category**: Product category
      - **inventory**: Inventory information
        - **quantity**: Current stock quantity
        - **warehouse**: Warehouse location
      - **ratings**: List of user ratings
        - **score**: Rating (1-5)
        - **comment**: Review content
      
      Original JSON response:
      
    appendBody: |
      
      You can use this information to understand the product's details, pricing, inventory status, and user reviews.
\`\`\`

This example demonstrates:
- Using \`prependBody\` to add field descriptions before the original JSON response
- Using \`appendBody\` to add usage suggestions at the end of the response
- Preserving the original JSON response, allowing the AI assistant to directly access all data


## AI Prompt for Template Generation

When working with AI assistants to generate templates for REST-to-MCP configuration, you can use the following prompt:

\`\`\`
Please help me create a REST-to-MCP configuration for Higress that converts a REST API to an MCP tool.

## Configuration Format

The configuration should follow this format:

\`\`\`yaml
server:
  name: rest-api-server
  config:
    apiKey: your-api-key-here
tools:
- name: tool-name
  description: "Detailed description of what this tool does"
  args:
  - name: arg1
    description: "Description of argument 1"
    type: string  # Optional types: string, number, integer, boolean, array, object
    required: true
    position: path  # Optional positions: query, path, header, cookie, body
  - name: arg2
    description: "Description of argument 2"
    type: integer
    required: false
    default: 10
    position: query
  - name: arg3
    description: "Description of argument 3"
    type: array
    items:
      type: string
    position: body
  - name: arg4
    description: "Description of argument 4"
    type: object
    properties:
      subfield1:
        type: string
      subfield2:
        type: number
    # No position specified, will be handled by argsToJsonBody/argsToUrlParam/argsToFormBody
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    # The following four options are mutually exclusive, only one can be used
    argsToUrlParam: true  # Add arguments to URL query parameters
    # OR
    # argsToJsonBody: true  # Send arguments as a JSON object in the request body
    # OR
    # argsToFormBody: true  # Send arguments as form-encoded in the request body
    # OR
    # body: |  # Manually construct the request body
    #   {
    #     "param1": "{{.args.arg1}}",
    #     "param2": {{.args.arg2}},
    #     "complex": {{toJson .args.arg4}}
    #   }
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    # The following three options are mutually exclusive, only one can be used
    body: |
      # Result
      {{- range $index, $item := .items }}
      ## Item {{add $index 1}}
      - **Name**: {{ $item.name }}
      - **Value**: {{ $item.value }}
      {{- end }}
    # OR
    # prependBody: |
    #   # API Response Description
    #   
    #   Below is the original JSON response, with field meanings:
    #   - field1: Meaning of field 1
    #   - field2: Meaning of field 2
    #   
    # appendBody: |
    #   
    #   You can use this data to...
\`\`\`

## Template Syntax

The templates use GJSON Template syntax (https://github.com/higress-group/gjson_template), which combines Go templates with GJSON path syntax for JSON processing. The template engine supports:

1. Basic dot notation for accessing fields: {{.fieldName}}
2. The gjson function for complex queries: {{gjson "users.#(active==true)#.name"}}
3. All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.
4. Control structures: {{if}}, {{range}}, {{with}}, etc.
5. Variable assignment: {{$var := .value}}

For complex JSON responses, consider using GJSON's powerful filtering and querying capabilities to extract and format the most relevant information.

## My API Information

The REST API I want to convert is:

[Describe your API here, including endpoints, parameters, and response format, or paste a Swagger/OpenAPI specification]
\`\`\`
`},d=function(){return e},o=function(){return[{depth:2,slug:"feature-description",text:"Feature Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"server-configuration",text:"Server Configuration"},{depth:3,slug:"rest-to-mcp-tool-configuration",text:"REST-to-MCP Tool Configuration"},{depth:2,slug:"parameter-type-support",text:"Parameter Type Support"},{depth:2,slug:"parameter-position-control",text:"Parameter Position Control"},{depth:3,slug:"supported-position-types",text:"Supported Position Types"},{depth:3,slug:"usage-example",text:"Usage Example"},{depth:3,slug:"relationship-with-bulk-parameter-processing-options",text:"Relationship with Bulk Parameter Processing Options"},{depth:2,slug:"request-parameter-passing-methods",text:"Request Parameter Passing Methods"},{depth:2,slug:"template-syntax",text:"Template Syntax"},{depth:3,slug:"request-templates",text:"Request Templates"},{depth:3,slug:"response-templates",text:"Response Templates"},{depth:3,slug:"gjson-path-syntax",text:"GJSON Path Syntax"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"using-built-in-mcp-server-example-configuring-quark-search",text:"Using Built-in MCP Server Example: Configuring quark-search"},{depth:3,slug:"basic-example-converting-amap-api",text:"Basic Example: Converting AMap API"},{depth:3,slug:"advanced-example-complex-response-processing-with-conditional-logic",text:"Advanced Example: Complex Response Processing with Conditional Logic"},{depth:3,slug:"using-prependbody-and-appendbody-openapi-conversion",text:"Using PrependBody and AppendBody: OpenAPI Conversion"},{depth:2,slug:"ai-prompt-for-template-generation",text:"AI Prompt for Template Generation"},{depth:2,slug:"template-syntax-1",text:"Template Syntax"},{depth:2,slug:"my-api-information",text:"My API Information"}]},s=p((f,E,h)=>{const{layout:x,...i}=n;return i.file=a,i.url=t,c`${y()}${v(e)}`})});export{s as Content,g as __tla,d as compiledContent,s as default,a as file,n as frontmatter,o as getHeadings,l as rawContent,t as url};
