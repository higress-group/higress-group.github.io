import{c as r,__tla as p}from"./astro-component.m4CCZO6J.js";import{r as c,m as v,u,__tla as y}from"./constant.CJ0ZKn9N.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,d,a,t,o,l,n,g=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="feature-overview">Feature Overview</h2>
<p>The <code dir="auto">mcp-server</code> plugin provides AI tool integration capabilities based on the Model Context Protocol (MCP). MCP is a protocol specifically designed for AI assistants, defining a standard way for AI models to interact with external tools and resources. Through this plugin, you can:</p>
<ol>
<li>Transform existing REST APIs into AI-callable tools without writing code</li>
<li>Leverage Higress gateway\u2019s unified authentication, authorization, rate limiting, and observability capabilities</li>
<li>Quickly build and deploy AI tools and services</li>
</ol>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png" alt="" referrerpolicy="no-referrer"></p>
<p>By hosting MCP Server through Higress, you can achieve:</p>
<ul>
<li>Unified authentication and authorization mechanisms to ensure AI tool call security</li>
<li>Fine-grained rate limiting to prevent abuse and resource exhaustion</li>
<li>Complete audit logs to record all tool call behaviors</li>
<li>Rich observability to monitor tool call performance and health status</li>
<li>Simplified deployment and management through Higress plugin mechanism to quickly add new MCP Servers</li>
</ul>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code>
Plugin execution priority: <code dir="auto">30</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<h3 id="server-configuration">Server Configuration</h3>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">server.name</code></td><td>string</td><td>Required</td><td>-</td><td>Name of the MCP Server. For built-in MCP Servers (like quark-search), only this field needs to be configured with the corresponding name, no tools field configuration needed. For REST-to-MCP scenarios, this field can be any value.</td></tr><tr><td><code dir="auto">server.config</code></td><td>object</td><td>Optional</td><td>{}</td><td>MCP Server configuration, such as API keys</td></tr><tr><td><code dir="auto">server.allowTools</code></td><td>array of string</td><td>Optional</td><td>-</td><td>List of allowed tools. If not specified, all tools are allowed</td></tr></tbody></table>
<h3 id="rest-to-mcp-tool-configuration">REST-to-MCP Tool Configuration</h3>




















































































































































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">tools</code></td><td>array of object</td><td>Optional</td><td>[]</td><td>REST-to-MCP tool configuration list</td></tr><tr><td><code dir="auto">tools[].name</code></td><td>string</td><td>Required</td><td>-</td><td>Tool name</td></tr><tr><td><code dir="auto">tools[].description</code></td><td>string</td><td>Required</td><td>-</td><td>Tool function description</td></tr><tr><td><code dir="auto">tools[].args</code></td><td>array of object</td><td>Required</td><td>[]</td><td>Tool parameter definitions</td></tr><tr><td><code dir="auto">tools[].args[].name</code></td><td>string</td><td>Required</td><td>-</td><td>Parameter name</td></tr><tr><td><code dir="auto">tools[].args[].description</code></td><td>string</td><td>Required</td><td>-</td><td>Parameter description</td></tr><tr><td><code dir="auto">tools[].args[].type</code></td><td>string</td><td>Optional</td><td>string</td><td>Parameter type (string, number, integer, boolean, array, object)</td></tr><tr><td><code dir="auto">tools[].args[].required</code></td><td>boolean</td><td>Optional</td><td>false</td><td>Whether the parameter is required</td></tr><tr><td><code dir="auto">tools[].args[].default</code></td><td>any</td><td>Optional</td><td>-</td><td>Parameter default value</td></tr><tr><td><code dir="auto">tools[].args[].enum</code></td><td>array</td><td>Optional</td><td>-</td><td>List of allowed parameter values</td></tr><tr><td><code dir="auto">tools[].args[].items</code></td><td>object</td><td>Optional</td><td>-</td><td>Array item schema (when type is array)</td></tr><tr><td><code dir="auto">tools[].args[].properties</code></td><td>object</td><td>Optional</td><td>-</td><td>Object property schema (when type is object)</td></tr><tr><td><code dir="auto">tools[].requestTemplate</code></td><td>object</td><td>Required</td><td>-</td><td>HTTP request template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.url</code></td><td>string</td><td>Required</td><td>-</td><td>Request URL template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.method</code></td><td>string</td><td>Required</td><td>-</td><td>HTTP method (GET/POST etc.)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers</code></td><td>array of object</td><td>Optional</td><td>[]</td><td>Request header templates</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].key</code></td><td>string</td><td>Required</td><td>-</td><td>Request header name</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].value</code></td><td>string</td><td>Required</td><td>-</td><td>Request header value template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.body</code></td><td>string</td><td>Optional</td><td>-</td><td>Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToJsonBody</code></td><td>boolean</td><td>Optional</td><td>false</td><td>When true, parameters will be used directly as JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToUrlParam</code></td><td>boolean</td><td>Optional</td><td>false</td><td>When true, parameters will be added to URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToFormBody</code></td><td>boolean</td><td>Optional</td><td>false</td><td>When true, parameters will be encoded in request body in application/x-www-form-urlencoded format (mutually exclusive with body, argsToJsonBody, argsToUrlParam)</td></tr><tr><td><code dir="auto">tools[].responseTemplate</code></td><td>object</td><td>Required</td><td>-</td><td>HTTP response transformation template</td></tr><tr><td><code dir="auto">tools[].responseTemplate.body</code></td><td>string</td><td>Required</td><td>-</td><td>Response body transformation template</td></tr></tbody></table>
<h2 id="parameter-type-support">Parameter Type Support</h2>
<p>REST-to-MCP tools support various parameter types to define tool parameters more precisely:</p>
<ul>
<li><strong>string</strong>: String type (default)</li>
<li><strong>number</strong>: Number type (floating point)</li>
<li><strong>integer</strong>: Integer type</li>
<li><strong>boolean</strong>: Boolean type (true/false)</li>
<li><strong>array</strong>: Array type, use <code dir="auto">items</code> field to define array element schema</li>
<li><strong>object</strong>: Object type, use <code dir="auto">properties</code> field to define object property schema</li>
</ul>
<p>Example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Search keywords"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Number of results to return"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">filters</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Filter conditions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">category</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"food"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"hotel"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"attraction"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">price</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">coordinates</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"List of coordinate points"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lat</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lng</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="args:\x7F- name: query\x7F  description: &#x22;Search keywords&#x22;\x7F  type: string\x7F  required: true\x7F- name: limit\x7F  description: &#x22;Number of results to return&#x22;\x7F  type: integer\x7F  default: 10\x7F- name: filters\x7F  description: &#x22;Filter conditions&#x22;\x7F  type: object\x7F  properties:\x7F    category:\x7F      type: string\x7F      enum: [&#x22;food&#x22;, &#x22;hotel&#x22;, &#x22;attraction&#x22;]\x7F    price:\x7F      type: integer\x7F      minimum: 0\x7F- name: coordinates\x7F  description: &#x22;List of coordinate points&#x22;\x7F  type: array\x7F  items:\x7F    type: object\x7F    properties:\x7F      lat:\x7F        type: number\x7F      lng:\x7F        type: number"><div></div></button></div></figure></div>
<h2 id="request-parameter-passing-methods">Request Parameter Passing Methods</h2>
<p>REST-to-MCP tools support four different request parameter passing methods. These options are <strong>mutually exclusive</strong>, and only one can be chosen:</p>
<ol>
<li>
<p><strong>body</strong>: Manually construct request body using templates. This is the most flexible way, allowing complete control over request body format.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"query": "{{.args.query}}",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"filters": {{toJson .args.filters}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"options": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"limit": {{.args.limit}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  body: |\x7F    {\x7F      &#x22;query&#x22;: &#x22;{{.args.query}}&#x22;,\x7F      &#x22;filters&#x22;: {{toJson .args.filters}},\x7F      &#x22;options&#x22;: {\x7F        &#x22;limit&#x22;: {{.args.limit}}\x7F      }\x7F    }"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToJsonBody</strong>: When set to <code dir="auto">true</code>, tool parameters will be sent directly as a JSON object in the request body, and <code dir="auto">Content-Type: application/json; charset=utf-8</code> header will be added automatically.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToJsonBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToJsonBody: true"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToUrlParam</strong>: When set to <code dir="auto">true</code>, tool parameters will be added to the URL as query parameters.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToUrlParam: true"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToFormBody</strong>: When set to <code dir="auto">true</code>, tool parameters will be encoded in the request body in <code dir="auto">application/x-www-form-urlencoded</code> format, and the corresponding Content-Type header will be added automatically.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToFormBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToFormBody: true"><div></div></button></div></figure></div>
</li>
</ol>
<p>These options simplify the configuration of common API call patterns without manually constructing request bodies or URL parameters. Note that these four options are mutually exclusive, and only one can be used in a tool configuration. If multiple options are configured, the system will reject loading the tool configuration with an error.</p>
<h2 id="template-syntax">Template Syntax</h2>
<p>REST-to-MCP functionality uses the <a href="https://github.com/higress-group/gjson_template" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Template</a> library for template rendering, which combines Go template syntax with GJSON\u2019s powerful path syntax:</p>
<h3 id="request-templates">Request Templates</h3>
<p>Used to construct HTTP request URLs, headers, and bodies:</p>
<ul>
<li>Access configuration values: <code dir="auto">.config.fieldName</code></li>
<li>Access tool parameters: <code dir="auto">.args.paramName</code></li>
</ul>
<h3 id="response-templates">Response Templates</h3>
<p>Used to transform HTTP responses into AI-consumable format:</p>
<ul>
<li>Use GJSON path syntax to access JSON response fields</li>
<li>Use template functions like <code dir="auto">add</code>, <code dir="auto">upper</code>, <code dir="auto">lower</code>, etc.</li>
<li>Use control structures like <code dir="auto">if</code>, <code dir="auto">range</code>, etc.</li>
</ul>
<p>GJSON Template includes all <a href="https://github.com/Masterminds/sprig" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Sprig</a> functions, providing 70+ template functions for string operations, mathematical calculations, date formatting, etc., equivalent to Helm\u2019s template capabilities.</p>
<p>Commonly used Sprig functions include:</p>
<ul>
<li><strong>String Operations</strong>: <code dir="auto">trim</code>, <code dir="auto">upper</code>, <code dir="auto">lower</code>, <code dir="auto">replace</code>, <code dir="auto">plural</code>, <code dir="auto">nospace</code></li>
<li><strong>Math Operations</strong>: <code dir="auto">add</code>, <code dir="auto">sub</code>, <code dir="auto">mul</code>, <code dir="auto">div</code>, <code dir="auto">max</code>, <code dir="auto">min</code></li>
<li><strong>Date Formatting</strong>: <code dir="auto">now</code>, <code dir="auto">date</code>, <code dir="auto">dateInZone</code>, <code dir="auto">dateModify</code></li>
<li><strong>List Operations</strong>: <code dir="auto">list</code>, <code dir="auto">first</code>, <code dir="auto">last</code>, <code dir="auto">uniq</code>, <code dir="auto">sortAlpha</code></li>
<li><strong>Dictionary Operations</strong>: <code dir="auto">dict</code>, <code dir="auto">get</code>, <code dir="auto">set</code>, <code dir="auto">hasKey</code>, <code dir="auto">pluck</code></li>
<li><strong>Flow Control</strong>: <code dir="auto">ternary</code>, <code dir="auto">default</code>, <code dir="auto">empty</code>, <code dir="auto">coalesce</code></li>
<li><strong>Type Conversion</strong>: <code dir="auto">toString</code>, <code dir="auto">toJson</code>, <code dir="auto">toPrettyJson</code>, <code dir="auto">toRawJson</code></li>
<li><strong>Encoding/Decoding</strong>: <code dir="auto">b64enc</code>, <code dir="auto">b64dec</code>, <code dir="auto">urlquery</code>, <code dir="auto">urlqueryescape</code></li>
<li><strong>UUID Generation</strong>: <code dir="auto">uuidv4</code></li>
</ul>
<p>For a complete reference of all available functions, please refer to the <a href="https://helm.sh/docs/chart_template_guide/function_list/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Helm Function Documentation</a>, as GJSON Template includes the same function set.</p>
<h3 id="gjson-path-syntax">GJSON Path Syntax</h3>
<p>GJSON provides powerful JSON querying capabilities:</p>
<ul>
<li><strong>Dot Notation</strong>: <code dir="auto">address.city</code></li>
<li><strong>Array Indexing</strong>: <code dir="auto">users.0.name</code></li>
<li><strong>Array Iteration</strong>: <code dir="auto">users.#.name</code></li>
<li><strong>Array Filtering</strong>: <code dir="auto">users.#(age>=30)#.name</code></li>
<li><strong>Modifiers</strong>: <code dir="auto">users.@reverse.#.name</code></li>
<li><strong>Multiple Paths</strong>: <code dir="auto">{name:users.0.name,count:users.#}</code></li>
<li><strong>Escape Characters</strong>: <code dir="auto">path.with\\.dot</code></li>
</ul>
<p>For more complex queries, use the <code dir="auto">gjson</code> function:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Using gjson function for complex queries --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Active Users: {{gjson "users.#(active==true)#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Array filtering with multiple conditions --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Active developers over 30: {{gjson "users.#(active==true &#x26;&#x26; age>30)#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Using modifiers --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Usernames (reversed): {{gjson "users.@reverse.#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- Iterating over filtered results --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Administrators:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- {{$user.name}} ({{$user.age}})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<!-- Using gjson function for complex queries -->\x7FActive Users: {{gjson &#x22;users.#(active==true)#.name&#x22;}}\x7F\x7F<!-- Array filtering with multiple conditions -->\x7FActive developers over 30: {{gjson &#x22;users.#(active==true &#x26;&#x26; age>30)#.name&#x22;}}\x7F\x7F<!-- Using modifiers -->\x7FUsernames (reversed): {{gjson &#x22;users.@reverse.#.name&#x22;}}\x7F\x7F<!-- Iterating over filtered results -->\x7FAdministrators:\x7F{{range $user := gjson &#x22;users.#(roles.#(==admin)>0)#&#x22;}}\x7F  - {{$user.name}} ({{$user.age}})\x7F{{end}}"><div></div></button></div></figure></div>
<p>For complete GJSON path syntax reference, see <a href="https://github.com/tidwall/gjson#path-syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Documentation</a>.</p>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="using-built-in-mcp-server-example-configuring-quark-search">Using Built-in MCP Server Example: Configuring quark-search</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quark-search"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"xxxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;quark-search&#x22;\x7F  config:\x7F    apiKey: &#x22;xxxx&#x22;"><div></div></button></div></figure></div>
<p>This configuration uses Higress\u2019s built-in quark-search MCP Server. In this case, only the Server name and necessary configuration (such as API key) need to be specified, no tools field configuration is needed as the tools are predefined in the MCP Server.</p>
<h3 id="basic-configuration-example-converting-amap-api">Basic Configuration Example: Converting AMap API</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rest-amap-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">maps-geo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Convert detailed structured addresses into latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Structured address information to be parsed"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">city</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Specify the query city"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">output</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Output format"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"json"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"xml"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://restapi.amap.com/v3/geocode/geo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># Geocoding Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- range $index, $geo := .geocodes }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">## Location {{add $index 1}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Country**: {{ $geo.country }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Province**: {{ $geo.province }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **City**: {{ $geo.city }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **City Code**: {{ $geo.citycode }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **District**: {{ $geo.district }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Street**: {{ $geo.street }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Street Number**: {{ $geo.number }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Administrative Code**: {{ $geo.adcode }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Coordinates**: {{ $geo.location }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Level**: {{ $geo.level }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: rest-amap-server\x7F  config:\x7F    apiKey: your-api-key-here\x7Ftools:\x7F- name: maps-geo\x7F  description: &#x22;Convert detailed structured addresses into latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates&#x22;\x7F  args:\x7F  - name: address\x7F    description: &#x22;Structured address information to be parsed&#x22;\x7F    type: string\x7F    required: true\x7F  - name: city\x7F    description: &#x22;Specify the query city&#x22;\x7F    type: string\x7F    required: false\x7F  - name: output\x7F    description: &#x22;Output format&#x22;\x7F    type: string\x7F    enum: [&#x22;json&#x22;, &#x22;xml&#x22;]\x7F    default: &#x22;json&#x22;\x7F  requestTemplate:\x7F    url: &#x22;https://restapi.amap.com/v3/geocode/geo&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # Geocoding Information\x7F      {{- range $index, $geo := .geocodes }}\x7F      ## Location {{add $index 1}}\x7F\x7F      - **Country**: {{ $geo.country }}\x7F      - **Province**: {{ $geo.province }}\x7F      - **City**: {{ $geo.city }}\x7F      - **City Code**: {{ $geo.citycode }}\x7F      - **District**: {{ $geo.district }}\x7F      - **Street**: {{ $geo.street }}\x7F      - **Street Number**: {{ $geo.number }}\x7F      - **Administrative Code**: {{ $geo.adcode }}\x7F      - **Coordinates**: {{ $geo.location }}\x7F      - **Level**: {{ $geo.level }}\x7F      {{- end }}"><div></div></button></div></figure></div>
<p>This configuration converts AMap\u2019s geocoding API into an AI-callable tool. When AI calls this tool:</p>
<ol>
<li>Builds API request using provided address and city parameters</li>
<li>Calls AMap API</li>
<li>Transforms JSON response into easy-to-read Markdown format</li>
<li>Returns formatted results to AI assistant</li>
</ol>
<h3 id="advanced-configuration-example-complex-response-processing-with-conditional-logic">Advanced Configuration Example: Complex Response Processing with Conditional Logic</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">weather-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-weather-api-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-weather</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get weather forecast information for a specified city"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">city</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"City name"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">days</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Number of days (1-7)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">include_hourly</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Whether to include hourly forecast"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.weatherapi.com/v1/forecast.json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># {{.location.name}}, {{.location.country}} Weather Forecast</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Current Temperature**: {{.current.temp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Feels Like**: {{.current.feelslike_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Weather Condition**: {{.current.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Humidity**: {{.current.humidity}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**Wind Speed**: {{.current.wind_kph}} km/h</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">## Future Forecast</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $index, $day := .forecast.forecastday}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Warning!**{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Warning!**{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Maximum Temperature**: {{$day.day.maxtemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Minimum Temperature**: {{$day.day.mintemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Weather Condition**: {{$day.day.condition.text}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">#### Hourly Forecast</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $hour := slice $day.hour 6 24 3}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: weather-api-server\x7F  config:\x7F    apiKey: your-weather-api-key\x7Ftools:\x7F- name: get-weather\x7F  description: &#x22;Get weather forecast information for a specified city&#x22;\x7F  args:\x7F  - name: city\x7F    description: &#x22;City name&#x22;\x7F    type: string\x7F    required: true\x7F  - name: days\x7F    description: &#x22;Number of days (1-7)&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 3\x7F  - name: include_hourly\x7F    description: &#x22;Whether to include hourly forecast&#x22;\x7F    type: boolean\x7F    default: true\x7F  requestTemplate:\x7F    url: &#x22;https://api.weatherapi.com/v1/forecast.json&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # {{.location.name}}, {{.location.country}} Weather Forecast\x7F\x7F      **Current Temperature**: {{.current.temp_c}}\xB0C\x7F      **Feels Like**: {{.current.feelslike_c}}\xB0C\x7F      **Weather Condition**: {{.current.condition.text}}\x7F      **Humidity**: {{.current.humidity}}%\x7F      **Wind Speed**: {{.current.wind_kph}} km/h\x7F\x7F      ## Future Forecast\x7F      {{range $index, $day := .forecast.forecastday}}\x7F      ### {{$day.date}} ({{dateFormat &#x22;Monday&#x22; $day.date_epoch | title}})\x7F\x7F      {{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Warning!**{{end}}\x7F      {{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Warning!**{{end}}\x7F\x7F      - **Maximum Temperature**: {{$day.day.maxtemp_c}}\xB0C\x7F      - **Minimum Temperature**: {{$day.day.mintemp_c}}\xB0C\x7F      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%\x7F      - **Weather Condition**: {{$day.day.condition.text}}\x7F\x7F      #### Hourly Forecast\x7F      {{range $hour := slice $day.hour 6 24 3}}\x7F      - **{{dateFormat &#x22;15:04&#x22; $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}\x7F      {{end}}\x7F      {{end}}"><div></div></button></div></figure></div>
<p>This example demonstrates:</p>
<ul>
<li>Using conditional statements (<code dir="auto">if</code>) for temperature warnings</li>
<li>Using date formatting functions (<code dir="auto">dateFormat</code>)</li>
<li>Using array slicing (<code dir="auto">slice</code>) to select specific time weather</li>
<li>Nested loops to iterate through multiple days and time periods of weather data</li>
</ul>
<h2 id="ai-prompt-template-for-generation">AI Prompt Template for Generation</h2>
<p>When working with AI assistants to generate REST-to-MCP configurations, you can use the following prompt:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Please help me create a Higress REST-to-MCP configuration to convert a REST API into an MCP tool.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## Configuration Format</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">The configuration should follow this format:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\`\`\`yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: rest-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">apiKey: your-api-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">tools:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- name: tool-name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">description: "Detailed description of this tool's functionality"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of parameter 1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: string  # Available types: string, number, integer, boolean, array, object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of parameter 2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: integer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">default: 10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of parameter 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: array</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">items:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of parameter 4"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">properties:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">subfield1:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">subfield2:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">type: number</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">url: "https://api.example.com/endpoint"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">method: POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># The following four options are mutually exclusive, choose only one</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">argsToUrlParam: true  # Add parameters to URL query parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># or</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># argsToJsonBody: true  # Send parameters as JSON object in request body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># or</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># argsToFormBody: true  # Send parameters form-encoded in request body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># or</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># body: |  # Manually construct request body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#     "param1": "{{.args.arg1}}",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#     "param2": {{.args.arg2}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#     "complex": {{toJson .args.arg4}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">#   }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">headers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- key: x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">value: "{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">body: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8"># Results</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- range $index, $item := .items }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">## Item {{add $index 1}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **Name**: {{ $item.name }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **Value**: {{ $item.value }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Please help me create a Higress REST-to-MCP configuration to convert a REST API into an MCP tool.\x7F\x7F## Configuration Format\x7F\x7FThe configuration should follow this format:\x7F\x7F&#x60;&#x60;&#x60;yaml\x7Fserver:\x7F  name: rest-api-server\x7F  config:\x7F    apiKey: your-api-key\x7Ftools:\x7F- name: tool-name\x7F  description: &#x22;Detailed description of this tool&#x27;s functionality&#x22;\x7F  args:\x7F  - name: arg1\x7F    description: &#x22;Description of parameter 1&#x22;\x7F    type: string  # Available types: string, number, integer, boolean, array, object\x7F    required: true\x7F  - name: arg2\x7F    description: &#x22;Description of parameter 2&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 10\x7F  - name: arg3\x7F    description: &#x22;Description of parameter 3&#x22;\x7F    type: array\x7F    items:\x7F      type: string\x7F  - name: arg4\x7F    description: &#x22;Description of parameter 4&#x22;\x7F    type: object\x7F    properties:\x7F      subfield1:\x7F        type: string\x7F      subfield2:\x7F        type: number\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/endpoint&#x22;\x7F    method: POST\x7F    # The following four options are mutually exclusive, choose only one\x7F    argsToUrlParam: true  # Add parameters to URL query parameters\x7F    # or\x7F    # argsToJsonBody: true  # Send parameters as JSON object in request body\x7F    # or\x7F    # argsToFormBody: true  # Send parameters form-encoded in request body\x7F    # or\x7F    # body: |  # Manually construct request body\x7F    #   {\x7F    #     &#x22;param1&#x22;: &#x22;{{.args.arg1}}&#x22;,\x7F    #     &#x22;param2&#x22;: {{.args.arg2}},\x7F    #     &#x22;complex&#x22;: {{toJson .args.arg4}}\x7F    #   }\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # Results\x7F      {{- range $index, $item := .items }}\x7F      ## Item {{add $index 1}}\x7F      - **Name**: {{ $item.name }}\x7F      - **Value**: {{ $item.value }}\x7F      {{- end }}"><div></div></button></div></figure></div>
<h2 id="template-syntax-1">Template Syntax</h2>
<p>Templates use GJSON Template syntax (<a href="https://github.com/higress-group/gjson_template" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/gjson_template</a>), which combines Go templates and GJSON path syntax for JSON processing. The template engine supports:</p>
<ol>
<li>Basic dot notation for accessing fields: {{.fieldName}}</li>
<li>gjson function for complex queries: {{gjson \u201Cusers.#(active==true)#.name\u201D}}</li>
<li>All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.</li>
<li>Control structures: {{if}}, {{range}}, {{with}}, etc.</li>
<li>Variable assignment: {{$var := .value}}</li>
</ol>
<p>For complex JSON responses, consider using GJSON\u2019s powerful filtering and querying capabilities to extract and format the most relevant information.</p>
<h2 id="my-api-information">My API Information</h2>
<p>The REST API I want to convert is:</p>
<p>[Describe your API here, including endpoints, parameters, and response format, or paste Swagger/OpenAPI specification]</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Please generate a complete configuration based on the above information, including:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. Descriptive name and appropriate server configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. Define all necessary parameters with clear descriptions and appropriate types, required/default values</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. Choose suitable parameter passing method (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. Create responseTemplate that transforms API response into AI-consumable readable format</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/).</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Please generate a complete configuration based on the above information, including:\x7F1. Descriptive name and appropriate server configuration\x7F2. Define all necessary parameters with clear descriptions and appropriate types, required/default values\x7F3. Choose suitable parameter passing method (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)\x7F4. Create responseTemplate that transforms API response into AI-consumable readable format\x7F\x7F> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).\x7F>\x7F> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/)."><div></div></button></div></figure></div>`,t={title:"MCP Server Plugin Configuration",description:"MCP Server Plugin Configuration Reference",date:"2025-04-03",category:"article",keywords:["higress","mcp","ai"],authors:"Chengtan"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/mcp-server.md",n=void 0,l=function(){return`# MCP Server Plugin Configuration

## Feature Overview

The \`mcp-server\` plugin provides AI tool integration capabilities based on the Model Context Protocol (MCP). MCP is a protocol specifically designed for AI assistants, defining a standard way for AI models to interact with external tools and resources. Through this plugin, you can:

1. Transform existing REST APIs into AI-callable tools without writing code
2. Leverage Higress gateway's unified authentication, authorization, rate limiting, and observability capabilities
3. Quickly build and deploy AI tools and services

![](https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png)

By hosting MCP Server through Higress, you can achieve:
- Unified authentication and authorization mechanisms to ensure AI tool call security
- Fine-grained rate limiting to prevent abuse and resource exhaustion
- Complete audit logs to record all tool call behaviors
- Rich observability to monitor tool call performance and health status
- Simplified deployment and management through Higress plugin mechanism to quickly add new MCP Servers

## Runtime Properties

Plugin execution phase: \`Default Phase\`
Plugin execution priority: \`30\`

## Configuration Fields

### Server Configuration

| Name | Data Type | Required | Default | Description |
| ------------ | ---------- | -------- | ------ | ------------------------------ |
| \`server.name\` | string | Required | - | Name of the MCP Server. For built-in MCP Servers (like quark-search), only this field needs to be configured with the corresponding name, no tools field configuration needed. For REST-to-MCP scenarios, this field can be any value. |
| \`server.config\` | object | Optional | {} | MCP Server configuration, such as API keys |
| \`server.allowTools\` | array of string | Optional | - | List of allowed tools. If not specified, all tools are allowed |

### REST-to-MCP Tool Configuration

| Name | Data Type | Required | Default | Description |
| ----------------------------- | --------------- | -------- | ------ | ------------------------------ |
| \`tools\` | array of object | Optional | [] | REST-to-MCP tool configuration list |
| \`tools[].name\` | string | Required | - | Tool name |
| \`tools[].description\` | string | Required | - | Tool function description |
| \`tools[].args\` | array of object | Required | [] | Tool parameter definitions |
| \`tools[].args[].name\` | string | Required | - | Parameter name |
| \`tools[].args[].description\` | string | Required | - | Parameter description |
| \`tools[].args[].type\` | string | Optional | string | Parameter type (string, number, integer, boolean, array, object) |
| \`tools[].args[].required\` | boolean | Optional | false | Whether the parameter is required |
| \`tools[].args[].default\` | any | Optional | - | Parameter default value |
| \`tools[].args[].enum\` | array | Optional | - | List of allowed parameter values |
| \`tools[].args[].items\` | object | Optional | - | Array item schema (when type is array) |
| \`tools[].args[].properties\` | object | Optional | - | Object property schema (when type is object) |
| \`tools[].requestTemplate\` | object | Required | - | HTTP request template |
| \`tools[].requestTemplate.url\` | string | Required | - | Request URL template |
| \`tools[].requestTemplate.method\` | string | Required | - | HTTP method (GET/POST etc.) |
| \`tools[].requestTemplate.headers\` | array of object | Optional | [] | Request header templates |
| \`tools[].requestTemplate.headers[].key\` | string | Required | - | Request header name |
| \`tools[].requestTemplate.headers[].value\` | string | Required | - | Request header value template |
| \`tools[].requestTemplate.body\` | string | Optional | - | Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody) |
| \`tools[].requestTemplate.argsToJsonBody\` | boolean | Optional | false | When true, parameters will be used directly as JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody) |
| \`tools[].requestTemplate.argsToUrlParam\` | boolean | Optional | false | When true, parameters will be added to URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody) |
| \`tools[].requestTemplate.argsToFormBody\` | boolean | Optional | false | When true, parameters will be encoded in request body in application/x-www-form-urlencoded format (mutually exclusive with body, argsToJsonBody, argsToUrlParam) |
| \`tools[].responseTemplate\` | object | Required | - | HTTP response transformation template |
| \`tools[].responseTemplate.body\` | string | Required | - | Response body transformation template |

## Parameter Type Support

REST-to-MCP tools support various parameter types to define tool parameters more precisely:

- **string**: String type (default)
- **number**: Number type (floating point)
- **integer**: Integer type
- **boolean**: Boolean type (true/false)
- **array**: Array type, use \`items\` field to define array element schema
- **object**: Object type, use \`properties\` field to define object property schema

Example:

\`\`\`yaml
args:
- name: query
  description: "Search keywords"
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

## Request Parameter Passing Methods

REST-to-MCP tools support four different request parameter passing methods. These options are **mutually exclusive**, and only one can be chosen:

1. **body**: Manually construct request body using templates. This is the most flexible way, allowing complete control over request body format.
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

2. **argsToJsonBody**: When set to \`true\`, tool parameters will be sent directly as a JSON object in the request body, and \`Content-Type: application/json; charset=utf-8\` header will be added automatically.
   \`\`\`yaml
   requestTemplate:
     argsToJsonBody: true
   \`\`\`

3. **argsToUrlParam**: When set to \`true\`, tool parameters will be added to the URL as query parameters.
   \`\`\`yaml
   requestTemplate:
     argsToUrlParam: true
   \`\`\`

4. **argsToFormBody**: When set to \`true\`, tool parameters will be encoded in the request body in \`application/x-www-form-urlencoded\` format, and the corresponding Content-Type header will be added automatically.
   \`\`\`yaml
   requestTemplate:
     argsToFormBody: true
   \`\`\`

These options simplify the configuration of common API call patterns without manually constructing request bodies or URL parameters. Note that these four options are mutually exclusive, and only one can be used in a tool configuration. If multiple options are configured, the system will reject loading the tool configuration with an error.

## Template Syntax

REST-to-MCP functionality uses the [GJSON Template](https://github.com/higress-group/gjson_template) library for template rendering, which combines Go template syntax with GJSON's powerful path syntax:

### Request Templates

Used to construct HTTP request URLs, headers, and bodies:
- Access configuration values: \`.config.fieldName\`
- Access tool parameters: \`.args.paramName\`

### Response Templates

Used to transform HTTP responses into AI-consumable format:
- Use GJSON path syntax to access JSON response fields
- Use template functions like \`add\`, \`upper\`, \`lower\`, etc.
- Use control structures like \`if\`, \`range\`, etc.

GJSON Template includes all [Sprig](https://github.com/Masterminds/sprig) functions, providing 70+ template functions for string operations, mathematical calculations, date formatting, etc., equivalent to Helm's template capabilities.

Commonly used Sprig functions include:

- **String Operations**: \`trim\`, \`upper\`, \`lower\`, \`replace\`, \`plural\`, \`nospace\`
- **Math Operations**: \`add\`, \`sub\`, \`mul\`, \`div\`, \`max\`, \`min\`
- **Date Formatting**: \`now\`, \`date\`, \`dateInZone\`, \`dateModify\`
- **List Operations**: \`list\`, \`first\`, \`last\`, \`uniq\`, \`sortAlpha\`
- **Dictionary Operations**: \`dict\`, \`get\`, \`set\`, \`hasKey\`, \`pluck\`
- **Flow Control**: \`ternary\`, \`default\`, \`empty\`, \`coalesce\`
- **Type Conversion**: \`toString\`, \`toJson\`, \`toPrettyJson\`, \`toRawJson\`
- **Encoding/Decoding**: \`b64enc\`, \`b64dec\`, \`urlquery\`, \`urlqueryescape\`
- **UUID Generation**: \`uuidv4\`

For a complete reference of all available functions, please refer to the [Helm Function Documentation](https://helm.sh/docs/chart_template_guide/function_list/), as GJSON Template includes the same function set.

### GJSON Path Syntax

GJSON provides powerful JSON querying capabilities:

- **Dot Notation**: \`address.city\`
- **Array Indexing**: \`users.0.name\`
- **Array Iteration**: \`users.#.name\`
- **Array Filtering**: \`users.#(age>=30)#.name\`
- **Modifiers**: \`users.@reverse.#.name\`
- **Multiple Paths**: \`{name:users.0.name,count:users.#}\`
- **Escape Characters**: \`path.with\\.dot\`

For more complex queries, use the \`gjson\` function:

\`\`\`
<!-- Using gjson function for complex queries -->
Active Users: {{gjson "users.#(active==true)#.name"}}

<!-- Array filtering with multiple conditions -->
Active developers over 30: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- Using modifiers -->
Usernames (reversed): {{gjson "users.@reverse.#.name"}}

<!-- Iterating over filtered results -->
Administrators:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
\`\`\`

For complete GJSON path syntax reference, see [GJSON Documentation](https://github.com/tidwall/gjson#path-syntax).

## Configuration Examples

### Using Built-in MCP Server Example: Configuring quark-search

\`\`\`yaml
server:
  name: "quark-search"
  config:
    apiKey: "xxxx"
\`\`\`

This configuration uses Higress's built-in quark-search MCP Server. In this case, only the Server name and necessary configuration (such as API key) need to be specified, no tools field configuration is needed as the tools are predefined in the MCP Server.

### Basic Configuration Example: Converting AMap API

\`\`\`yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps-geo
  description: "Convert detailed structured addresses into latitude and longitude coordinates. Supports parsing landmarks, scenic spots, and building names into coordinates"
  args:
  - name: address
    description: "Structured address information to be parsed"
    type: string
    required: true
  - name: city
    description: "Specify the query city"
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
      - **Street Number**: {{ $geo.number }}
      - **Administrative Code**: {{ $geo.adcode }}
      - **Coordinates**: {{ $geo.location }}
      - **Level**: {{ $geo.level }}
      {{- end }}
\`\`\`

This configuration converts AMap's geocoding API into an AI-callable tool. When AI calls this tool:

1. Builds API request using provided address and city parameters
2. Calls AMap API
3. Transforms JSON response into easy-to-read Markdown format
4. Returns formatted results to AI assistant

### Advanced Configuration Example: Complex Response Processing with Conditional Logic

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
    description: "Whether to include hourly forecast"
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
      **Weather Condition**: {{.current.condition.text}}
      **Humidity**: {{.current.humidity}}%
      **Wind Speed**: {{.current.wind_kph}} km/h

      ## Future Forecast
      {{range $index, $day := .forecast.forecastday}}
      ### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})
      
      {{if gt $day.day.maxtemp_c 30}}\u{1F525} **High Temperature Warning!**{{end}}
      {{if lt $day.day.mintemp_c 0}}\u2744\uFE0F **Low Temperature Warning!**{{end}}
      
      - **Maximum Temperature**: {{$day.day.maxtemp_c}}\xB0C
      - **Minimum Temperature**: {{$day.day.mintemp_c}}\xB0C
      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%
      - **Weather Condition**: {{$day.day.condition.text}}
      
      #### Hourly Forecast
      {{range $hour := slice $day.hour 6 24 3}}
      - **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}
      {{end}}
      {{end}}
\`\`\`

This example demonstrates:
- Using conditional statements (\`if\`) for temperature warnings
- Using date formatting functions (\`dateFormat\`)
- Using array slicing (\`slice\`) to select specific time weather
- Nested loops to iterate through multiple days and time periods of weather data

## AI Prompt Template for Generation

When working with AI assistants to generate REST-to-MCP configurations, you can use the following prompt:

\`\`\`
Please help me create a Higress REST-to-MCP configuration to convert a REST API into an MCP tool.

## Configuration Format

The configuration should follow this format:

\`\`\`yaml
server:
  name: rest-api-server
  config:
    apiKey: your-api-key
tools:
- name: tool-name
  description: "Detailed description of this tool's functionality"
  args:
  - name: arg1
    description: "Description of parameter 1"
    type: string  # Available types: string, number, integer, boolean, array, object
    required: true
  - name: arg2
    description: "Description of parameter 2"
    type: integer
    required: false
    default: 10
  - name: arg3
    description: "Description of parameter 3"
    type: array
    items:
      type: string
  - name: arg4
    description: "Description of parameter 4"
    type: object
    properties:
      subfield1:
        type: string
      subfield2:
        type: number
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    # The following four options are mutually exclusive, choose only one
    argsToUrlParam: true  # Add parameters to URL query parameters
    # or
    # argsToJsonBody: true  # Send parameters as JSON object in request body
    # or
    # argsToFormBody: true  # Send parameters form-encoded in request body
    # or
    # body: |  # Manually construct request body
    #   {
    #     "param1": "{{.args.arg1}}",
    #     "param2": {{.args.arg2}},
    #     "complex": {{toJson .args.arg4}}
    #   }
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # Results
      {{- range $index, $item := .items }}
      ## Item {{add $index 1}}
      - **Name**: {{ $item.name }}
      - **Value**: {{ $item.value }}
      {{- end }}
\`\`\`

## Template Syntax

Templates use GJSON Template syntax (https://github.com/higress-group/gjson_template), which combines Go templates and GJSON path syntax for JSON processing. The template engine supports:

1. Basic dot notation for accessing fields: {{.fieldName}}
2. gjson function for complex queries: {{gjson "users.#(active==true)#.name"}}
3. All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.
4. Control structures: {{if}}, {{range}}, {{with}}, etc.
5. Variable assignment: {{$var := .value}}

For complex JSON responses, consider using GJSON's powerful filtering and querying capabilities to extract and format the most relevant information.

## My API Information

The REST API I want to convert is:

[Describe your API here, including endpoints, parameters, and response format, or paste Swagger/OpenAPI specification]
\`\`\`

Please generate a complete configuration based on the above information, including:
1. Descriptive name and appropriate server configuration
2. Define all necessary parameters with clear descriptions and appropriate types, required/default values
3. Choose suitable parameter passing method (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)
4. Create responseTemplate that transforms API response into AI-consumable readable format

> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).
> 
> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/). `},d=function(){return e},o=function(){return[{depth:2,slug:"feature-overview",text:"Feature Overview"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"server-configuration",text:"Server Configuration"},{depth:3,slug:"rest-to-mcp-tool-configuration",text:"REST-to-MCP Tool Configuration"},{depth:2,slug:"parameter-type-support",text:"Parameter Type Support"},{depth:2,slug:"request-parameter-passing-methods",text:"Request Parameter Passing Methods"},{depth:2,slug:"template-syntax",text:"Template Syntax"},{depth:3,slug:"request-templates",text:"Request Templates"},{depth:3,slug:"response-templates",text:"Response Templates"},{depth:3,slug:"gjson-path-syntax",text:"GJSON Path Syntax"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"using-built-in-mcp-server-example-configuring-quark-search",text:"Using Built-in MCP Server Example: Configuring quark-search"},{depth:3,slug:"basic-configuration-example-converting-amap-api",text:"Basic Configuration Example: Converting AMap API"},{depth:3,slug:"advanced-configuration-example-complex-response-processing-with-conditional-logic",text:"Advanced Configuration Example: Complex Response Processing with Conditional Logic"},{depth:2,slug:"ai-prompt-template-for-generation",text:"AI Prompt Template for Generation"},{depth:2,slug:"template-syntax-1",text:"Template Syntax"},{depth:2,slug:"my-api-information",text:"My API Information"}]},s=r((f,E,h)=>{const{layout:x,...i}=t;return i.file=a,i.url=n,c`${v()}${u(e)}`})});export{s as Content,g as __tla,d as compiledContent,s as default,a as file,t as frontmatter,o as getHeadings,l as rawContent,n as url};
