import{c as r,__tla as p}from"./astro-component.YcfuVWta.js";import{r as c,m as u,u as y,__tla as v}from"./constant.9_4gXTQt.js";import{__tla as E}from"./astro/assets-service.r1ocst81.js";let s,d,a,t,o,l,n,h=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="feature-description">Feature Description</h2>
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











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">server.name</code></td><td>string</td><td>Yes</td><td>-</td><td>Name of the MCP server. If using a pre-integrated MCP server (like quark-search), you only need to configure this field with the corresponding name and don\u2019t need to configure the tools field. For REST-to-MCP scenarios, this field can be any arbitrary value.</td></tr><tr><td><code dir="auto">server.type</code></td><td>string</td><td>No</td><td>rest</td><td>MCP server type. Options: <code dir="auto">rest</code> (REST-to-MCP conversion), <code dir="auto">mcp-proxy</code> (MCP proxy). Defaults to <code dir="auto">rest</code> if not specified.</td></tr><tr><td><code dir="auto">server.config</code></td><td>object</td><td>No</td><td>{}</td><td>Server configuration, such as API keys</td></tr><tr><td><code dir="auto">server.mcpServerURL</code></td><td>string</td><td>Required when <code dir="auto">server.type</code> is <code dir="auto">mcp-proxy</code></td><td>-</td><td>Backend MCP server URL. Only used for <code dir="auto">mcp-proxy</code> type.</td></tr><tr><td><code dir="auto">server.timeout</code></td><td>integer</td><td>No</td><td>5000</td><td>Request timeout in milliseconds for backend services. Applies to <code dir="auto">mcp-proxy</code> type.</td></tr><tr><td><code dir="auto">server.passthroughAuthHeader</code></td><td>boolean</td><td>No</td><td>false</td><td>Whether to pass through the Authorization header. When set to <code dir="auto">true</code>, the client\u2019s <code dir="auto">Authorization</code> header will be passed through to the backend even if no downstream security configuration (<code dir="auto">defaultDownstreamSecurity</code> or tool-level <code dir="auto">security</code>) is configured. Defaults to <code dir="auto">false</code>, meaning the <code dir="auto">Authorization</code> header will be removed when no explicit security configuration is defined, preventing client credentials from being incorrectly passed to the backend. This field is suitable for scenarios that require direct passthrough of original authentication information.</td></tr><tr><td><code dir="auto">server.securitySchemes</code></td><td>array of object</td><td>No</td><td>-</td><td>Defines reusable security schemes that can be referenced by tools. See the Authentication and Security section for details.</td></tr><tr><td><code dir="auto">server.defaultDownstreamSecurity</code></td><td>object</td><td>No</td><td>-</td><td>Server-level default client-to-gateway authentication configuration for all tools/list and tools/call requests. Can be overridden by tool-level <code dir="auto">security</code> configuration. Supports <code dir="auto">id</code> (reference to securitySchemes) and <code dir="auto">passthrough</code> (passthrough flag) fields.</td></tr><tr><td><code dir="auto">server.defaultUpstreamSecurity</code></td><td>object</td><td>No</td><td>-</td><td>Server-level default gateway-to-backend authentication configuration for all backend requests. Can be overridden by tool-level <code dir="auto">requestTemplate.security</code> configuration. Supports <code dir="auto">id</code> (reference to securitySchemes) and <code dir="auto">credential</code> (override default credential) fields.</td></tr></tbody></table>
<h3 id="allowed-tools-configuration">Allowed Tools Configuration</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allowTools</code></td><td>array of string</td><td>No</td><td>-</td><td>List of tools allowed to be called. If not specified, all tools are allowed</td></tr></tbody></table>
<h4 id="dynamic-tool-permission-control">Dynamic Tool Permission Control</h4>
<p>In addition to statically defining <code dir="auto">allowTools</code> in the configuration, tool access permissions can be dynamically controlled through the HTTP request header <code dir="auto">x-envoy-allow-mcp-tools</code>. This allows upstream plugins (such as authentication and authorization plugins) to dynamically set the list of allowed tools based on user identity or other conditions.</p>
<p><strong>Header Format</strong>:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-allow-mcp-tools: tool1,tool2,tool3</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="x-envoy-allow-mcp-tools: tool1,tool2,tool3"><div></div></button></div></figure></div>
<p><strong>Permission Control Logic</strong>:</p>
<ol>
<li><strong>Configuration-level <code dir="auto">allowTools</code></strong> (static): Base tool whitelist defined in the plugin configuration</li>
<li><strong>Header-level <code dir="auto">x-envoy-allow-mcp-tools</code></strong> (dynamic): Tool whitelist read from request header</li>
<li><strong>Effective Permissions</strong>: <strong>Intersection</strong> of tools specified in both configuration and header</li>
</ol>
<p><strong>Header Value Semantics</strong>:</p>

























<table><thead><tr><th>Header State</th><th>Behavior</th></tr></thead><tbody><tr><td>Header not present</td><td>No additional restriction, use <code dir="auto">allowTools</code> from configuration</td></tr><tr><td>Header is empty string <code dir="auto">""</code></td><td>No additional restriction, use <code dir="auto">allowTools</code> from configuration</td></tr><tr><td>Header is whitespace string <code dir="auto">"  ,  ,  "</code></td><td>Deny access to all tools (empty set)</td></tr><tr><td>Header has value <code dir="auto">"tool1,tool2"</code></td><td>Intersect with configured <code dir="auto">allowTools</code></td></tr></tbody></table>
<p><strong>Usage Scenarios</strong>:</p>
<ol>
<li>
<p><strong>Role-Based Access Control</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Define all available tools in configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allowTools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">get-user-info</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">update-user-info</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">delete-user-info</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">admin-operation</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Define all available tools in configuration\x7FallowTools:\x7F- get-user-info\x7F- update-user-info\x7F- delete-user-info\x7F- admin-operation"><div></div></button></div></figure></div>
<p>Upstream authentication plugin can set different tool permissions based on user roles:</p>
<ul>
<li>Regular users: <code dir="auto">x-envoy-allow-mcp-tools: get-user-info</code></li>
<li>Advanced users: <code dir="auto">x-envoy-allow-mcp-tools: get-user-info,update-user-info</code></li>
<li>Administrators: Don\u2019t set header (allow all configured tools)</li>
</ul>
</li>
<li>
<p><strong>Multi-Tenant Scenario</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Define tools available for tenants</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allowTools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tenant-query-data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tenant-update-data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tenant-report</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Define tools available for tenants\x7FallowTools:\x7F- tenant-query-data\x7F- tenant-update-data\x7F- tenant-report"><div></div></button></div></figure></div>
<p>Upstream plugin dynamically controls based on tenant subscription plan:</p>
<ul>
<li>Basic plan: <code dir="auto">x-envoy-allow-mcp-tools: tenant-query-data</code></li>
<li>Professional plan: <code dir="auto">x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data</code></li>
<li>Enterprise plan: <code dir="auto">x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data,tenant-report</code></li>
</ul>
</li>
<li>
<p><strong>Temporary Permission Restriction</strong></p>
<p>In special circumstances (e.g., system maintenance), upstream plugins can temporarily restrict access to certain tools:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2"><div></div></button></div></figure></div>
</li>
</ol>
<p><strong>Upstream Plugin Integration Guide</strong>:</p>
<p>For upstream plugins (such as authentication and authorization plugins) that need to dynamically set tool permissions, <strong>you must use <code dir="auto">proxywasm.ReplaceHttpRequestHeader</code></strong> to set the <code dir="auto">x-envoy-allow-mcp-tools</code> header:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// Correct way: Use ReplaceHttpRequestHeader</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// This will override any value that users might have passed in, ensuring security</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ReplaceHttpRequestHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"x-envoy-allow-mcp-tools"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tool1,tool2,tool3"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u274C Wrong way: Use AddHttpRequestHeader</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// This may retain user-provided values, creating a security vulnerability</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpRequestHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"x-envoy-allow-mcp-tools"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tool1,tool2,tool3"</span><span style="--0:#E1E4E8">)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// Correct way: Use ReplaceHttpRequestHeader\x7F// This will override any value that users might have passed in, ensuring security\x7Fproxywasm.ReplaceHttpRequestHeader(&#x22;x-envoy-allow-mcp-tools&#x22;, &#x22;tool1,tool2,tool3&#x22;)\x7F\x7F// \u274C Wrong way: Use AddHttpRequestHeader\x7F// This may retain user-provided values, creating a security vulnerability\x7Fproxywasm.AddHttpRequestHeader(&#x22;x-envoy-allow-mcp-tools&#x22;, &#x22;tool1,tool2,tool3&#x22;)"><div></div></button></div></figure></div>
<p>Using <code dir="auto">ReplaceHttpRequestHeader</code> ensures:</p>
<ol>
<li><strong>Security</strong>: Users cannot bypass permission controls by directly passing the <code dir="auto">x-envoy-allow-mcp-tools</code> header in their requests</li>
<li><strong>Reliability</strong>: The permission configuration set by the upstream plugin always takes effect and won\u2019t be overridden by user input</li>
<li><strong>Predictability</strong>: The MCP Server plugin always receives the permission value set by the upstream plugin</li>
</ol>
<p><strong>Notes</strong>:</p>
<ul>
<li>Header value uses comma to separate multiple tool names</li>
<li>Whitespace before and after tool names is automatically trimmed</li>
<li>When configured <code dir="auto">allowTools</code> is an empty array, all tool access is denied regardless of header settings</li>
<li>The MCP Server plugin automatically removes the <code dir="auto">x-envoy-allow-mcp-tools</code> header and doesn\u2019t pass it to backend services</li>
</ul>
<h3 id="rest-to-mcp-tool-configuration">REST-to-MCP Tool Configuration</h3>


























































































































































































































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">tools</code></td><td>array of object</td><td>No</td><td>[]</td><td>List of REST-to-MCP tool configurations</td></tr><tr><td><code dir="auto">tools[].name</code></td><td>string</td><td>Yes</td><td>-</td><td>Tool name</td></tr><tr><td><code dir="auto">tools[].description</code></td><td>string</td><td>Yes</td><td>-</td><td>Tool functionality description</td></tr><tr><td><code dir="auto">tools[].args</code></td><td>array of object</td><td>Yes</td><td>[]</td><td>Tool parameter definitions</td></tr><tr><td><code dir="auto">tools[].args[].name</code></td><td>string</td><td>Yes</td><td>-</td><td>Parameter name</td></tr><tr><td><code dir="auto">tools[].args[].description</code></td><td>string</td><td>Yes</td><td>-</td><td>Parameter description</td></tr><tr><td><code dir="auto">tools[].args[].type</code></td><td>string</td><td>No</td><td>string</td><td>Parameter type (string, number, integer, boolean, array, object)</td></tr><tr><td><code dir="auto">tools[].args[].required</code></td><td>boolean</td><td>No</td><td>false</td><td>Whether the parameter is required</td></tr><tr><td><code dir="auto">tools[].args[].default</code></td><td>any</td><td>No</td><td>-</td><td>Parameter default value</td></tr><tr><td><code dir="auto">tools[].args[].enum</code></td><td>array</td><td>No</td><td>-</td><td>List of allowed values for the parameter</td></tr><tr><td><code dir="auto">tools[].args[].items</code></td><td>object</td><td>No</td><td>-</td><td>Schema for array items (when type is array)</td></tr><tr><td><code dir="auto">tools[].args[].properties</code></td><td>object</td><td>No</td><td>-</td><td>Schema for object properties (when type is object)</td></tr><tr><td><code dir="auto">tools[].args[].position</code></td><td>string</td><td>No</td><td>-</td><td>Position of the parameter in the request (query, path, header, cookie, body)</td></tr><tr><td><code dir="auto">tools[].requestTemplate</code></td><td>object</td><td>Yes</td><td>-</td><td>HTTP request template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.url</code></td><td>string</td><td>Yes</td><td>-</td><td>Request URL template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.method</code></td><td>string</td><td>Yes</td><td>-</td><td>HTTP method (GET/POST, etc.)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers</code></td><td>array of object</td><td>No</td><td>[]</td><td>Request header templates</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].key</code></td><td>string</td><td>Yes</td><td>-</td><td>Request header name</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].value</code></td><td>string</td><td>Yes</td><td>-</td><td>Request header value template</td></tr><tr><td><code dir="auto">tools[].requestTemplate.body</code></td><td>string</td><td>No</td><td>-</td><td>Request body template (mutually exclusive with argsToJsonBody, argsToUrlParam, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToJsonBody</code></td><td>boolean</td><td>No</td><td>false</td><td>When true, arguments will be used directly as the JSON request body (mutually exclusive with body, argsToUrlParam, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToUrlParam</code></td><td>boolean</td><td>No</td><td>false</td><td>When true, arguments will be added to the URL as query parameters (mutually exclusive with body, argsToJsonBody, argsToFormBody)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToFormBody</code></td><td>boolean</td><td>No</td><td>false</td><td>When true, arguments will be encoded as application/x-www-form-urlencoded in the request body (mutually exclusive with body, argsToJsonBody, argsToUrlParam)</td></tr><tr><td><code dir="auto">tools[].responseTemplate</code></td><td>object</td><td>Yes</td><td>-</td><td>HTTP response transformation template</td></tr><tr><td><code dir="auto">tools[].responseTemplate.body</code></td><td>string</td><td>No</td><td>-</td><td>Response body transformation template (mutually exclusive with prependBody and appendBody)</td></tr><tr><td><code dir="auto">tools[].responseTemplate.prependBody</code></td><td>string</td><td>No</td><td>-</td><td>Text to insert before the response body (mutually exclusive with body)</td></tr><tr><td><code dir="auto">tools[].responseTemplate.appendBody</code></td><td>string</td><td>No</td><td>-</td><td>Text to insert after the response body (mutually exclusive with body)</td></tr><tr><td><code dir="auto">tools[].security</code></td><td>object</td><td>No</td><td>-</td><td>Tool-level security configuration, defining authentication between MCP Client and MCP Server, with support for credential passthrough.</td></tr><tr><td><code dir="auto">tools[].security.id</code></td><td>string</td><td>Required when <code dir="auto">tools[].security</code> is configured</td><td>-</td><td>References a security scheme ID defined in <code dir="auto">server.securitySchemes</code>.</td></tr><tr><td><code dir="auto">tools[].security.passthrough</code></td><td>boolean</td><td>No</td><td>false</td><td>Enables transparent authentication. If <code dir="auto">true</code>, credentials extracted from the MCP Client request will be used for the authentication scheme defined in <code dir="auto">requestTemplate.security</code>.</td></tr><tr><td><code dir="auto">tools[].requestTemplate.security</code></td><td>object</td><td>No</td><td>-</td><td>Security configuration for the HTTP request template, defining authentication between MCP Server and REST API.</td></tr><tr><td><code dir="auto">tools[].requestTemplate.security.id</code></td><td>string</td><td>Required when <code dir="auto">tools[].requestTemplate.security</code> is configured</td><td>-</td><td>References a security scheme ID defined in <code dir="auto">server.securitySchemes</code>.</td></tr><tr><td><code dir="auto">tools[].requestTemplate.security.credential</code></td><td>string</td><td>No</td><td>-</td><td>Overrides the default credential defined in <code dir="auto">server.securitySchemes</code>. If <code dir="auto">tools[].security.passthrough</code> is enabled, this field will be ignored, and the passthrough credential will be used instead.</td></tr><tr><td><code dir="auto">tools[].errorResponseTemplate</code></td><td>string</td><td>No</td><td>-</td><td>Error Response Template when HTTP Response Status >=300 \\</td></tr></tbody></table>
<h2 id="authentication-and-security">Authentication and Security</h2>
<p>The MCP Server plugin supports flexible authentication configurations to ensure secure communication with backend REST APIs or MCP servers. The plugin supports two server types with authentication configuration:</p>
<ul>
<li><strong>REST-to-MCP Server (<code dir="auto">rest</code> type)</strong>: Converts client requests to REST API calls</li>
<li><strong>MCP Proxy Server (<code dir="auto">mcp-proxy</code> type)</strong>: Proxies client requests to backend MCP servers</li>
</ul>
<p>Both types support a <strong>two-tier authentication mechanism</strong>:</p>
<ol>
<li><strong>Client-to-Gateway Authentication</strong>: Validates the identity of clients calling the MCP Server</li>
<li><strong>Gateway-to-Backend Authentication</strong>: Authentication method used by MCP Server when calling backend services</li>
</ol>
<h3 id="defining-security-schemes-serversecurityschemes">Defining Security Schemes (<code dir="auto">server.securitySchemes</code>)</h3>
<p>You can define a set of reusable security schemes at the server level. These schemes can later be referenced by tools to configure how the MCP Server authenticates requests to backend REST APIs.</p>
<p><strong>Configuration Fields (<code dir="auto">server.securitySchemes[]</code>)</strong>:</p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td>string</td><td>Yes</td><td>Unique identifier for the security scheme, to be referenced in tool configurations.</td></tr><tr><td><code dir="auto">type</code></td><td>string</td><td>Yes</td><td>Authentication type, supporting <code dir="auto">http</code> (for Basic and Bearer auth) and <code dir="auto">apiKey</code>.</td></tr><tr><td><code dir="auto">scheme</code></td><td>string</td><td>No</td><td>When <code dir="auto">type</code> is <code dir="auto">http</code>, specifies the specific scheme, such as <code dir="auto">basic</code> or <code dir="auto">bearer</code>.</td></tr><tr><td><code dir="auto">in</code></td><td>string</td><td>No</td><td>When <code dir="auto">type</code> is <code dir="auto">apiKey</code>, specifies the location of the API key, such as <code dir="auto">header</code> or <code dir="auto">query</code>.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>No</td><td>When <code dir="auto">type</code> is <code dir="auto">apiKey</code>, specifies the header name or query parameter name.</td></tr><tr><td><code dir="auto">defaultCredential</code></td><td>string</td><td>No</td><td>Default credential for this scheme. For Basic Auth, this can be \u201Cuser:password
\u201D; for Bearer Token, the token itself; for API Key, the key itself.</td></tr></tbody></table>
<p><strong>Example (<code dir="auto">server.securitySchemes</code>)</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyBasicAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">basic</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"admin:secretpassword"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Default username and password</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyBearerToken</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Default Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyApiKeyInHeader</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Custom-API-Key</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># API Key in a header named X-Custom-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abcdef123456"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Default API Key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyApiKeyInQuery</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api_token"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># API Key in a query parameter named api_token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"uvwxyz789012"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-api-server\x7F  securitySchemes:\x7F  - id: MyBasicAuth\x7F    type: http\x7F    scheme: basic\x7F    defaultCredential: &#x22;admin:secretpassword&#x22; # Default username and password\x7F  - id: MyBearerToken\x7F    type: http\x7F    scheme: bearer\x7F    defaultCredential: &#x22;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&#x22; # Default Bearer Token\x7F  - id: MyApiKeyInHeader\x7F    type: apiKey\x7F    in: header\x7F    name: X-Custom-API-Key # API Key in a header named X-Custom-API-Key\x7F    defaultCredential: &#x22;abcdef123456&#x22; # Default API Key\x7F  - id: MyApiKeyInQuery\x7F    type: apiKey\x7F    in: query\x7F    name: &#x22;api_token&#x22; # API Key in a query parameter named api_token\x7F    defaultCredential: &#x22;uvwxyz789012&#x22;"><div></div></button></div></figure></div>
<h3 id="applying-security-schemes-in-tools">Applying Security Schemes in Tools</h3>
<p>After defining <code dir="auto">server.securitySchemes</code>, you can reference these schemes in each tool\u2019s <code dir="auto">requestTemplate.security</code> by their <code dir="auto">id</code> to specify the authentication method used by the MCP Server when calling the backend REST API.</p>
<ul>
<li><strong><code dir="auto">tools[].requestTemplate.security.id</code></strong>: References the <code dir="auto">id</code> of a security scheme defined in <code dir="auto">server.securitySchemes</code>.</li>
<li><strong><code dir="auto">tools[].requestTemplate.security.credential</code></strong>: Optional. If provided, it will override the <code dir="auto">defaultCredential</code> in the referenced scheme. This allows you to use different credentials for specific tools, even if they share the same authentication mechanism.</li>
</ul>
<p><strong>Example</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-user-details</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># ... other tool configuration ...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/users/{{.args.userId}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyBearerToken</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Use the MyBearerToken scheme defined above</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># credential: "override_token_for_this_tool" # Optional: Override the default token for this tool</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">update-inventory</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># ... other tool configuration ...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/inventory/{{.args.itemId}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyApiKeyInHeader</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Use the MyApiKeyInHeader scheme</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># This tool will use the defaultCredential defined in MyApiKeyInHeader</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tools:\x7F- name: get-user-details\x7F  # ... other tool configuration ...\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/users/{{.args.userId}}&#x22;\x7F    method: GET\x7F    security:\x7F      id: MyBearerToken # Use the MyBearerToken scheme defined above\x7F      # credential: &#x22;override_token_for_this_tool&#x22; # Optional: Override the default token for this tool\x7F# ...\x7F- name: update-inventory\x7F  # ... other tool configuration ...\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/inventory/{{.args.itemId}}&#x22;\x7F    method: POST\x7F    security:\x7F      id: MyApiKeyInHeader # Use the MyApiKeyInHeader scheme\x7F      # This tool will use the defaultCredential defined in MyApiKeyInHeader"><div></div></button></div></figure></div>
<h3 id="passthrough-authentication">Passthrough Authentication</h3>
<p>The passthrough authentication feature allows credentials provided by the MCP Client (e.g., an AI assistant) when calling the MCP Server to be passed through to the authentication process when the MCP Server calls the backend REST API.</p>
<p><strong>Configuration</strong>:</p>
<ol>
<li>
<p><strong>Ensure relevant security schemes are defined in <code dir="auto">server.securitySchemes</code></strong>. This includes schemes for both client-to-MCP Server and MCP Server-to-backend REST API authentication.</p>
</li>
<li>
<p><strong>Configure tool-level authentication (<code dir="auto">tools[].security</code>)</strong>:
In tools where credential passthrough is needed, configure the <code dir="auto">security</code> field:</p>
<ul>
<li><code dir="auto">id</code>: References a security scheme defined in <code dir="auto">server.securitySchemes</code> that is used for <strong>MCP Client to MCP Server</strong> authentication. The plugin will extract credentials from the client request based on this scheme and clean the original credential from the request.</li>
<li><code dir="auto">passthrough: true</code>: Enables passthrough authentication.</li>
</ul>
</li>
<li>
<p><strong>Configure request template authentication (<code dir="auto">tools[].requestTemplate.security</code>)</strong>:
In the tool\u2019s <code dir="auto">requestTemplate</code>, configure the <code dir="auto">security</code> field:</p>
<ul>
<li><code dir="auto">id</code>: References a security scheme defined in <code dir="auto">server.securitySchemes</code> that is used for <strong>MCP Server to backend REST API</strong> authentication.</li>
<li>When <code dir="auto">tools[].security.passthrough</code> is <code dir="auto">true</code>, the credential extracted from the client will be applied to the backend REST API call according to this <code dir="auto">requestTemplate.security</code> scheme.</li>
</ul>
</li>
</ol>
<p><strong>Example</strong>:</p>
<p>Suppose the MCP Client uses a Bearer Token to call the MCP Server, and the MCP Server needs to use an API Key to call the backend REST API.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientSideBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Client uses Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span><span style="--0:#E1E4E8">    </span><span style="--0:#99A0A6"># Backend API uses X-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># defaultCredential: "optional_default_backend_key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-product-securely</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get product information (secure passthrough)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Client -> MCP Server authentication configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientSideBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># MCP Server expects clients to use this scheme and will extract this type of credential</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># Enable passthrough</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Product ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># MCP Server -> backend REST API authentication configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Backend API requires this scheme. The passthrough credential will be applied according to this scheme.</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/products/{{.args.product_id}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: product-api-server\x7F  securitySchemes:\x7F  - id: ClientSideBearer # Client uses Bearer Token\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendApiKey    # Backend API uses X-API-Key\x7F    type: apiKey\x7F    in: header\x7F    name: X-API-Key\x7F    # defaultCredential: &#x22;optional_default_backend_key&#x22;\x7F\x7Ftools:\x7F- name: get-product-securely\x7F  description: &#x22;Get product information (secure passthrough)&#x22;\x7F  security: # Client -> MCP Server authentication configuration\x7F    id: ClientSideBearer # MCP Server expects clients to use this scheme and will extract this type of credential\x7F    passthrough: true   # Enable passthrough\x7F  args:\x7F  - name: product_id\x7F    description: &#x22;Product ID&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # MCP Server -> backend REST API authentication configuration\x7F      id: BackendApiKey # Backend API requires this scheme. The passthrough credential will be applied according to this scheme.\x7F    url: &#x22;https://api.example.com/products/{{.args.product_id}}&#x22;\x7F    method: GET"><div></div></button></div></figure></div>
<p><strong>Workflow</strong>:</p>
<ol>
<li>The MCP Client sends a request to the MCP Server\u2019s <code dir="auto">get-product-securely</code> tool, with an <code dir="auto">Authorization</code> header containing <code dir="auto">Bearer &#x3C;client_token></code>.</li>
<li>The MCP Server identifies that the client is using a Bearer Token based on <code dir="auto">tools[].security</code> (id: <code dir="auto">ClientSideBearer</code>). It extracts <code dir="auto">&#x3C;client_token></code> from the request and removes the original <code dir="auto">Authorization</code> header.</li>
<li>Because <code dir="auto">passthrough: true</code> is set, the extracted <code dir="auto">&#x3C;client_token></code> is marked for passthrough.</li>
<li>The MCP Server prepares to call the backend REST API. It looks at <code dir="auto">requestTemplate.security</code> (id: <code dir="auto">BackendApiKey</code>).</li>
<li>Since passthrough is enabled, the MCP Server uses the previously extracted <code dir="auto">&#x3C;client_token></code> as the credential value, applying it according to the <code dir="auto">BackendApiKey</code> scheme (i.e., as an HTTP header named <code dir="auto">X-API-Key</code>).</li>
<li>The backend REST API receives the request with the <code dir="auto">X-API-Key</code> header containing the value <code dir="auto">&#x3C;client_token></code>.</li>
</ol>
<p><strong>Notes</strong>:</p>
<ul>
<li>When <code dir="auto">tools[].security.passthrough</code> is <code dir="auto">true</code>, the <code dir="auto">requestTemplate.security.credential</code> field is ignored, and the passthrough credential takes precedence.</li>
<li>The passthrough credential value is applied directly to the authentication scheme specified by <code dir="auto">requestTemplate.security</code>. Ensure that the credential format is compatible with the target authentication scheme. The <code dir="auto">extractAndRemoveIncomingCredential</code> function attempts to extract the core credential part (e.g., the Bearer token value, the base64-encoded part of Basic auth).</li>
</ul>
<h3 id="server-level-default-authentication-configuration">Server-Level Default Authentication Configuration</h3>
<p>To simplify configuration and ensure consistency, the MCP Server plugin supports setting default authentication configurations at the server level. These default configurations apply to all tools and non-tool-specific interfaces (such as <code dir="auto">tools/list</code>).</p>
<h4 id="serverdefaultdownstreamsecurity"><code dir="auto">server.defaultDownstreamSecurity</code></h4>
<p>Defines the default client-to-gateway authentication configuration. This configuration applies to:</p>
<ul>
<li>All tools that don\u2019t have an explicit <code dir="auto">security</code> field configured</li>
<li><code dir="auto">tools/list</code> requests (for retrieving tool lists)</li>
<li>Other non-tool-specific MCP protocol interfaces</li>
</ul>
<p><strong>Configuration Fields</strong>:</p>
<ul>
<li><code dir="auto">id</code>: References a security scheme ID defined in <code dir="auto">server.securitySchemes</code></li>
<li><code dir="auto">passthrough</code>: Whether to enable passthrough authentication (optional, defaults to false)</li>
</ul>
<h4 id="serverdefaultupstreamsecurity"><code dir="auto">server.defaultUpstreamSecurity</code></h4>
<p>Defines the default gateway-to-backend authentication configuration. This configuration applies to:</p>
<ul>
<li>All tools that don\u2019t have an explicit <code dir="auto">requestTemplate.security</code> field configured</li>
<li><code dir="auto">tools/list</code> and other requests that need to access backend services</li>
</ul>
<p><strong>Configuration Fields</strong>:</p>
<ul>
<li><code dir="auto">id</code>: References a security scheme ID defined in <code dir="auto">server.securitySchemes</code></li>
<li><code dir="auto">credential</code>: Override the default credential (optional)</li>
</ul>
<h4 id="priority-rules">Priority Rules</h4>
<p>Authentication configuration priority from highest to lowest:</p>
<ol>
<li>Tool-level configuration (<code dir="auto">tools[].security</code> and <code dir="auto">tools[].requestTemplate.security</code>)</li>
<li>Server-level default configuration (<code dir="auto">server.defaultDownstreamSecurity</code> and <code dir="auto">server.defaultUpstreamSecurity</code>)</li>
<li>Default credentials in security schemes (<code dir="auto">server.securitySchemes[].defaultCredential</code>)</li>
</ol>
<h4 id="use-cases">Use Cases</h4>
<p>Server-level default authentication is particularly useful for:</p>
<ul>
<li><strong>Unified Authentication Strategy</strong>: All tools use the same authentication method</li>
<li><strong>MCP Proxy Servers</strong>: Need to provide authentication for <code dir="auto">tools/list</code> and other non-tool-specific requests</li>
<li><strong>Simplified Configuration</strong>: Reduce repetitive configuration of the same authentication information for each tool</li>
</ul>
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
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Search keyword"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Number of results to return"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">filters</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Filter conditions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">category</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"food"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"hotel"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"attraction"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">price</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">coordinates</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"List of coordinate points"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lat</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lng</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="args:\x7F- name: query\x7F  description: &#x22;Search keyword&#x22;\x7F  type: string\x7F  required: true\x7F- name: limit\x7F  description: &#x22;Number of results to return&#x22;\x7F  type: integer\x7F  default: 10\x7F- name: filters\x7F  description: &#x22;Filter conditions&#x22;\x7F  type: object\x7F  properties:\x7F    category:\x7F      type: string\x7F      enum: [&#x22;food&#x22;, &#x22;hotel&#x22;, &#x22;attraction&#x22;]\x7F    price:\x7F      type: integer\x7F      minimum: 0\x7F- name: coordinates\x7F  description: &#x22;List of coordinate points&#x22;\x7F  type: array\x7F  items:\x7F    type: object\x7F    properties:\x7F      lat:\x7F        type: number\x7F      lng:\x7F        type: number"><div></div></button></div></figure></div>
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
<h3 id="mcp-proxy-server-example-proxying-to-backend-mcp-server">MCP Proxy Server Example: Proxying to Backend MCP Server</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-mcpserver-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com/mcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Client-to-gateway default authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Gateway-to-backend default authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Client-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Backend-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend-secret-key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-secure-product</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get secure product information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Product ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Tool-level gateway-to-backend authentication, overrides default</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"special-key-for-this-tool"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-mcpserver-proxy\x7F  type: mcp-proxy\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com/mcp&#x22;\x7F  timeout: 5000\x7F  defaultDownstreamSecurity: # Client-to-gateway default authentication\x7F    id: ClientApiKey\x7F  defaultUpstreamSecurity: # Gateway-to-backend default authentication\x7F    id: BackendApiKey\x7F  securitySchemes:\x7F  - id: ClientApiKey\x7F    type: apiKey\x7F    in: header\x7F    name: X-Client-API-Key\x7F  - id: BackendApiKey\x7F    type: apiKey\x7F    in: header\x7F    name: X-Backend-API-Key\x7F    defaultCredential: &#x22;backend-secret-key&#x22;\x7F\x7Ftools:\x7F- name: get-secure-product\x7F  description: &#x22;Get secure product information&#x22;\x7F  args:\x7F  - name: product_id\x7F    description: &#x22;Product ID&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # Tool-level gateway-to-backend authentication, overrides default\x7F      id: BackendApiKey\x7F      credential: &#x22;special-key-for-this-tool&#x22;"><div></div></button></div></figure></div>
<p>This configuration creates an MCP proxy server that:</p>
<ol>
<li>Proxies client MCP requests to <code dir="auto">http://backend-mcp.example.com/mcp</code></li>
<li>Uses server-level default authentication configuration for <code dir="auto">tools/list</code> and other general requests</li>
<li>Tool-level authentication configuration can override default settings</li>
<li>Supports passthrough authentication and credential overrides</li>
</ol>
<h3 id="advanced-mcp-proxy-server-example-passthrough-authentication">Advanced MCP Proxy Server Example: Passthrough Authentication</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-secure-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.backend-mcp.com/v1/mcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Default requires client to provide Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Enable passthrough authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Default uses passthrough credentials for backend</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Client uses Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Backend also uses Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AdminApiKey</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Admin tools use special API Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Admin-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"admin-secret-key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-user-data</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get user data (using passthrough authentication)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"User ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># This tool uses default passthrough authentication, client Bearer Token will be passed to backend</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">admin-operation</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Perform admin operation (using special authentication)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Tool-level client authentication: still requires client Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Don't passthrough client credentials</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">operation</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Operation type"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Tool-level backend authentication: use admin API Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AdminApiKey</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-secure-proxy\x7F  type: mcp-proxy\x7F  mcpServerURL: &#x22;https://api.backend-mcp.com/v1/mcp&#x22;\x7F  timeout: 10000\x7F  defaultDownstreamSecurity: # Default requires client to provide Bearer Token\x7F    id: ClientBearer\x7F    passthrough: true # Enable passthrough authentication\x7F  defaultUpstreamSecurity: # Default uses passthrough credentials for backend\x7F    id: BackendBearer\x7F  securitySchemes:\x7F  - id: ClientBearer # Client uses Bearer Token\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendBearer # Backend also uses Bearer Token\x7F    type: http\x7F    scheme: bearer\x7F  - id: AdminApiKey # Admin tools use special API Key\x7F    type: apiKey\x7F    in: header\x7F    name: X-Admin-Key\x7F    defaultCredential: &#x22;admin-secret-key&#x22;\x7F\x7Ftools:\x7F- name: get-user-data\x7F  description: &#x22;Get user data (using passthrough authentication)&#x22;\x7F  args:\x7F  - name: user_id\x7F    description: &#x22;User ID&#x22;\x7F    type: string\x7F    required: true\x7F  # This tool uses default passthrough authentication, client Bearer Token will be passed to backend\x7F\x7F- name: admin-operation\x7F  description: &#x22;Perform admin operation (using special authentication)&#x22;\x7F  security: # Tool-level client authentication: still requires client Bearer Token\x7F    id: ClientBearer\x7F    passthrough: false # Don&#x27;t passthrough client credentials\x7F  args:\x7F  - name: operation\x7F    description: &#x22;Operation type&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # Tool-level backend authentication: use admin API Key\x7F      id: AdminApiKey"><div></div></button></div></figure></div>
<p>This advanced configuration demonstrates:</p>
<ol>
<li><strong>Passthrough Authentication</strong>: <code dir="auto">get-user-data</code> tool passes client Bearer Token to backend</li>
<li><strong>Mixed Authentication</strong>: <code dir="auto">admin-operation</code> tool requires client authentication but uses different backend authentication</li>
<li><strong>Server-Level Default Configuration</strong>: Provides unified authentication strategy for all <code dir="auto">tools/list</code> requests</li>
<li><strong>Flexible Authentication Schemes</strong>: Supports both HTTP Bearer Token and API Key authentication methods</li>
</ol>
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
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if gt $day.day.maxtemp_c 30}}**High Temperature Alert!**{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if lt $day.day.mintemp_c 0}}**Low Temperature Alert!**{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Max Temperature**: {{$day.day.maxtemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Min Temperature**: {{$day.day.mintemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Conditions**: {{$day.day.condition.text}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">#### Hourly Forecast</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $hour := slice $day.hour 6 24 3}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: weather-api-server\x7F  config:\x7F    apiKey: your-weather-api-key\x7Ftools:\x7F- name: get-weather\x7F  description: &#x22;Get weather forecast information for a specified city&#x22;\x7F  args:\x7F  - name: city\x7F    description: &#x22;City name&#x22;\x7F    type: string\x7F    required: true\x7F  - name: days\x7F    description: &#x22;Number of days (1-7)&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 3\x7F  - name: include_hourly\x7F    description: &#x22;Whether to include hourly forecasts&#x22;\x7F    type: boolean\x7F    default: true\x7F  requestTemplate:\x7F    url: &#x22;https://api.weatherapi.com/v1/forecast.json&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # {{.location.name}}, {{.location.country}} Weather Forecast\x7F\x7F      **Current Temperature**: {{.current.temp_c}}\xB0C\x7F      **Feels Like**: {{.current.feelslike_c}}\xB0C\x7F      **Conditions**: {{.current.condition.text}}\x7F      **Humidity**: {{.current.humidity}}%\x7F      **Wind Speed**: {{.current.wind_kph}} km/h\x7F\x7F      ## Future Forecast\x7F      {{range $index, $day := .forecast.forecastday}}\x7F      ### {{$day.date}} ({{dateFormat &#x22;Monday&#x22; $day.date_epoch | title}})\x7F\x7F      {{if gt $day.day.maxtemp_c 30}}**High Temperature Alert!**{{end}}\x7F      {{if lt $day.day.mintemp_c 0}}**Low Temperature Alert!**{{end}}\x7F\x7F      - **Max Temperature**: {{$day.day.maxtemp_c}}\xB0C\x7F      - **Min Temperature**: {{$day.day.mintemp_c}}\xB0C\x7F      - **Chance of Rain**: {{$day.day.daily_chance_of_rain}}%\x7F      - **Conditions**: {{$day.day.condition.text}}\x7F\x7F      #### Hourly Forecast\x7F      {{range $hour := slice $day.hour 6 24 3}}\x7F      - **{{dateFormat &#x22;15:04&#x22; $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}\x7F      {{end}}\x7F      {{end}}"><div></div></button></div></figure></div>
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
<h3 id="example-of-customizing-error-responses-using-errorresponsetemplate">Example of Customizing Error Responses Using errorResponseTemplate</h3>
<p>The errorResponseTemplate is used to customize the response transformation template when the HTTP response status code is >= 300 or &#x3C; 200. It supports accessing header key-value pairs in map structure via _headers, so that values from the header can be referenced in the errorResponseTemplate to customize the error response result.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appCode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bank Card 2nd, 3rd, and 4th Element Verification"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bank card number"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cardno"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Name (Note: apply UrlEncode encoding)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"name"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Registered mobile number"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"mobile"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ID card number"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"idcard"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Verify whether card number, name, mobile number, and ID card number match"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">errorResponseTemplate</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">statusCode: {{gjson "_headers.\\\\:status"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">errorCode: {{gjson "_headers.x-ca-error-code"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">data: {{.data.value}}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bank Card 2nd, 3rd, and 4th Element Validation"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToFormBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToJsonBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://ckid.market.alicloudapi.com/lundear/verifyBank"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span><span style="--0:#79B8FF">2</span><span style="--0:#F97583">-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Below are descriptions of the returned parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: code, Parameter Type: integer, Description: Response status code</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: desc, Parameter Type: string, Description: Description message</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data, Parameter Type: object, Description: No description</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.bankId, Parameter Type: string, Description: Bank code</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.bankName, Parameter Type: string, Description: Bank name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.abbr, Parameter Type: string, Description: Bank abbreviation</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.cardName, Parameter Type: string, Description: Card name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.cardType, Parameter Type: string, Description: Card type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.cardBin, Parameter Type: string, Description: Card BIN</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.binLen, Parameter Type: integer, Description: Length of card BIN</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.area, Parameter Type: string, Description: Region where the card belongs</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.bankPhone, Parameter Type: string, Description: Bank phone number</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.bankUrl, Parameter Type: string, Description: Bank website URL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- Parameter Name: data.bankLogo, Parameter Type: string, Description: Bank logo URL</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  config:\x7F    appCode: &#x22;&#x22;\x7F  name: &#x22;Bank Card 2nd, 3rd, and 4th Element Verification&#x22;\x7Ftools:\x7F- args:\x7F  - description: &#x22;Bank card number&#x22;\x7F    name: &#x22;cardno&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: true\x7F    type: &#x22;string&#x22;\x7F  - description: &#x22;Name (Note: apply UrlEncode encoding)&#x22;\x7F    name: &#x22;name&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: false\x7F    type: &#x22;string&#x22;\x7F  - description: &#x22;Registered mobile number&#x22;\x7F    name: &#x22;mobile&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: false\x7F    type: &#x22;string&#x22;\x7F  - description: &#x22;ID card number&#x22;\x7F    name: &#x22;idcard&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: false\x7F    type: &#x22;string&#x22;\x7F  description: &#x22;Verify whether card number, name, mobile number, and ID card number match&#x22;\x7F  errorResponseTemplate: |-\x7F    statusCode: {{gjson &#x22;_headers.\\\\:status&#x22;}}\x7F    errorCode: {{gjson &#x22;_headers.x-ca-error-code&#x22;}}\x7F    data: {{.data.value}}\x7F  name: &#x22;Bank Card 2nd, 3rd, and 4th Element Validation&#x22;\x7F  requestTemplate:\x7F    argsToFormBody: false\x7F    argsToJsonBody: false\x7F    argsToUrlParam: true\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://ckid.market.alicloudapi.com/lundear/verifyBank&#x22;\x7F  responseTemplate:\x7F    appendBody: |2-\x7F        - Below are descriptions of the returned parameters\x7F        - Parameter Name: code, Parameter Type: integer, Description: Response status code\x7F        - Parameter Name: desc, Parameter Type: string, Description: Description message\x7F        - Parameter Name: data, Parameter Type: object, Description: No description\x7F        - Parameter Name: data.bankId, Parameter Type: string, Description: Bank code\x7F        - Parameter Name: data.bankName, Parameter Type: string, Description: Bank name\x7F        - Parameter Name: data.abbr, Parameter Type: string, Description: Bank abbreviation\x7F        - Parameter Name: data.cardName, Parameter Type: string, Description: Card name\x7F        - Parameter Name: data.cardType, Parameter Type: string, Description: Card type\x7F        - Parameter Name: data.cardBin, Parameter Type: string, Description: Card BIN\x7F        - Parameter Name: data.binLen, Parameter Type: integer, Description: Length of card BIN\x7F        - Parameter Name: data.area, Parameter Type: string, Description: Region where the card belongs\x7F        - Parameter Name: data.bankPhone, Parameter Type: string, Description: Bank phone number\x7F        - Parameter Name: data.bankUrl, Parameter Type: string, Description: Bank website URL\x7F        - Parameter Name: data.bankLogo, Parameter Type: string, Description: Bank logo URL"><div></div></button></div></figure></div>
<p>This example demonstrates:</p>
<ul>
<li>{{gjson \u201C_headers.\\:status
\u201D}} -> Get HTTP status code</li>
<li>{{gjson \u201C_headers.x-ca-error-code\u201D}} -> Get value of header key \u201Cx-ca-error-code\u201D</li>
<li>{{.data.value}} -> Access original responseBody content (e.g., JSON field \u201Cdata.value\u201D)</li>
</ul>
<h2 id="ai-prompt-for-template-generation">AI Prompt for Template Generation</h2>
<p>When working with AI assistants to generate templates for REST-to-MCP configuration, you can use the following prompt:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Please help me create an MCP server configuration for Higress. Supports two types:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. **REST-to-MCP Server**: Converts REST APIs to MCP tools</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. **MCP Proxy Server**: Proxies to backend MCP servers</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## Configuration Format</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">### REST-to-MCP Server Configuration</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\`\`\`yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: rest-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">type: rest  # Optional, defaults to rest</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">apiKey: your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8"># Server-level default authentication (optional)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">defaultDownstreamSecurity:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">id: ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">defaultUpstreamSecurity:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">id: BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">securitySchemes:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- id: ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: http</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">scheme: bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- id: BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">in: header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">name: X-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">defaultCredential: your-backend-api-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">tools:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- name: tool-name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">description: "Detailed description of what this tool does"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">security: # Tool-level client authentication (optional, overrides server default)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">id: ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">passthrough: true  # Enable passthrough authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of argument 1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: string  # Optional types: string, number, integer, boolean, array, object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: path  # Optional positions: query, path, header, cookie, body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "Description of argument 2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: integer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">default: 10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">url: "https://api.example.com/endpoint"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">method: POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">security: # Tool-level backend authentication (optional, overrides server default)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">id: BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">credential: "specific-tool-credential"  # Optional, override default credential</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># The following four options are mutually exclusive, only one can be used</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">argsToUrlParam: true  # Add arguments to URL query parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># OR other options...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">headers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- key: x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">value: "{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">body: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8"># Result</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- range $index, $item := .items }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">## Item {{add $index 1}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **Name**: {{ $item.name }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **Value**: {{ $item.value }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Please help me create an MCP server configuration for Higress. Supports two types:\x7F1. **REST-to-MCP Server**: Converts REST APIs to MCP tools\x7F2. **MCP Proxy Server**: Proxies to backend MCP servers\x7F\x7F## Configuration Format\x7F\x7F### REST-to-MCP Server Configuration\x7F\x7F&#x60;&#x60;&#x60;yaml\x7Fserver:\x7F  name: rest-api-server\x7F  type: rest  # Optional, defaults to rest\x7F  config:\x7F    apiKey: your-api-key-here\x7F  # Server-level default authentication (optional)\x7F  defaultDownstreamSecurity:\x7F    id: ClientAuth\x7F  defaultUpstreamSecurity:\x7F    id: BackendAuth\x7F  securitySchemes:\x7F  - id: ClientAuth\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendAuth\x7F    type: apiKey\x7F    in: header\x7F    name: X-API-Key\x7F    defaultCredential: your-backend-api-key\x7Ftools:\x7F- name: tool-name\x7F  description: &#x22;Detailed description of what this tool does&#x22;\x7F  security: # Tool-level client authentication (optional, overrides server default)\x7F    id: ClientAuth\x7F    passthrough: true  # Enable passthrough authentication\x7F  args:\x7F  - name: arg1\x7F    description: &#x22;Description of argument 1&#x22;\x7F    type: string  # Optional types: string, number, integer, boolean, array, object\x7F    required: true\x7F    position: path  # Optional positions: query, path, header, cookie, body\x7F  - name: arg2\x7F    description: &#x22;Description of argument 2&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 10\x7F    position: query\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/endpoint&#x22;\x7F    method: POST\x7F    security: # Tool-level backend authentication (optional, overrides server default)\x7F      id: BackendAuth\x7F      credential: &#x22;specific-tool-credential&#x22;  # Optional, override default credential\x7F    # The following four options are mutually exclusive, only one can be used\x7F    argsToUrlParam: true  # Add arguments to URL query parameters\x7F    # OR other options...\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # Result\x7F      {{- range $index, $item := .items }}\x7F      ## Item {{add $index 1}}\x7F      - **Name**: {{ $item.name }}\x7F      - **Value**: {{ $item.value }}\x7F      {{- end }}"><div></div></button></div></figure></div>
<h3 id="mcp-proxy-server-configuration">MCP Proxy Server Configuration</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com/mcp"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Backend MCP server URL</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5000</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Timeout in milliseconds</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Server-level default authentication (recommended)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">:  </span><span style="--0:#99A0A6"># Client-to-gateway authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Enable passthrough authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">:   </span><span style="--0:#99A0A6"># Gateway-to-backend authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Backend-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend-service-key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># For MCP proxy, tools configuration is optional</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># If tools are configured, only listed tools are available</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># If tools are not configured, all backend MCP server tools are proxied</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">specific-tool</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Specific tool configuration (optional)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Override default client authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Don't passthrough</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">param1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Parameter description"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># Override default backend authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"specific-tool-backend-credential"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: mcp-proxy-server\x7F  type: mcp-proxy\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com/mcp&#x22;  # Backend MCP server URL\x7F  timeout: 5000  # Timeout in milliseconds\x7F  # Server-level default authentication (recommended)\x7F  defaultDownstreamSecurity:  # Client-to-gateway authentication\x7F    id: ClientAuth\x7F    passthrough: true  # Enable passthrough authentication\x7F  defaultUpstreamSecurity:   # Gateway-to-backend authentication\x7F    id: BackendAuth\x7F  securitySchemes:\x7F  - id: ClientAuth\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendAuth\x7F    type: apiKey\x7F    in: header\x7F    name: X-Backend-Key\x7F    defaultCredential: &#x22;backend-service-key&#x22;\x7F\x7F# For MCP proxy, tools configuration is optional\x7F# If tools are configured, only listed tools are available\x7F# If tools are not configured, all backend MCP server tools are proxied\x7Ftools:\x7F- name: specific-tool\x7F  description: &#x22;Specific tool configuration (optional)&#x22;\x7F  security: # Override default client authentication\x7F    id: ClientAuth\x7F    passthrough: false  # Don&#x27;t passthrough\x7F  args:\x7F  - name: param1\x7F    description: &#x22;Parameter description&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # Override default backend authentication\x7F      id: BackendAuth\x7F      credential: &#x22;specific-tool-backend-credential&#x22;"><div></div></button></div></figure></div>
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
<h2 id="my-requirements">My Requirements</h2>
<p>Please choose your requirement type:</p>
<h3 id="if-you-want-to-convert-rest-api-to-mcp-tools">If you want to convert REST API to MCP tools</h3>
<p>Please describe your REST API:</p>
<ul>
<li>API endpoint URLs</li>
<li>Authentication methods (API Key, Bearer Token, etc.)</li>
<li>Parameters and response formats</li>
<li>Or paste Swagger/OpenAPI specifications</li>
</ul>
<h3 id="if-you-want-to-proxy-to-an-existing-mcp-server">If you want to proxy to an existing MCP server</h3>
<p>Please provide:</p>
<ul>
<li>Backend MCP server URL</li>
<li>Authentication requirements (client authentication, backend authentication)</li>
<li>Whether passthrough authentication is needed (pass client credentials to backend)</li>
<li>Specific tool configuration requirements</li>
</ul>
<p>[Describe your specific requirements here]</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## Generation Requirements</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Please generate a complete configuration based on the above information, including:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">### For REST-to-MCP Server:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. Descriptive name and appropriate server configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. Define all necessary parameters with clear descriptions and appropriate types, required/default values</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. Choose appropriate parameter passing methods (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. Create responseTemplate that transforms API responses into formats suitable for AI consumption</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">5. Configure appropriate security schemes and authentication configuration</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">### For MCP Proxy Server:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. Configure backend MCP server URL and timeout</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. Set server-level default authentication configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. Configure passthrough authentication as needed</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. Configure tool-specific authentication overrides if required</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">5. Ensure complete authentication chain from client-to-gateway and gateway-to-backend</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="## Generation Requirements\x7F\x7FPlease generate a complete configuration based on the above information, including:\x7F\x7F### For REST-to-MCP Server:\x7F1. Descriptive name and appropriate server configuration\x7F2. Define all necessary parameters with clear descriptions and appropriate types, required/default values\x7F3. Choose appropriate parameter passing methods (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)\x7F4. Create responseTemplate that transforms API responses into formats suitable for AI consumption\x7F5. Configure appropriate security schemes and authentication configuration\x7F\x7F### For MCP Proxy Server:\x7F1. Configure backend MCP server URL and timeout\x7F2. Set server-level default authentication configuration\x7F3. Configure passthrough authentication as needed\x7F4. Configure tool-specific authentication overrides if required\x7F5. Ensure complete authentication chain from client-to-gateway and gateway-to-backend"><div></div></button></div></figure></div>`,t={title:"MCP Server Plugin Configuration",description:"MCP Server Plugin Configuration Reference",date:"2025-04-03",category:"article",keywords:["higress","mcp","ai"],authors:"Chengtan"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/mcp-server.md",n=void 0,l=function(){return`
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
| \`server.type\` | string     | No     | rest   | MCP server type. Options: \`rest\` (REST-to-MCP conversion), \`mcp-proxy\` (MCP proxy). Defaults to \`rest\` if not specified. |
| \`server.config\` | object     | No     | {}     | Server configuration, such as API keys      |
| \`server.mcpServerURL\` | string | Required when \`server.type\` is \`mcp-proxy\` | - | Backend MCP server URL. Only used for \`mcp-proxy\` type. |
| \`server.timeout\` | integer | No | 5000 | Request timeout in milliseconds for backend services. Applies to \`mcp-proxy\` type. |
| \`server.passthroughAuthHeader\` | boolean | No | false | Whether to pass through the Authorization header. When set to \`true\`, the client's \`Authorization\` header will be passed through to the backend even if no downstream security configuration (\`defaultDownstreamSecurity\` or tool-level \`security\`) is configured. Defaults to \`false\`, meaning the \`Authorization\` header will be removed when no explicit security configuration is defined, preventing client credentials from being incorrectly passed to the backend. This field is suitable for scenarios that require direct passthrough of original authentication information. |
| \`server.securitySchemes\` | array of object | No | - | Defines reusable security schemes that can be referenced by tools. See the Authentication and Security section for details. |
| \`server.defaultDownstreamSecurity\` | object | No | - | Server-level default client-to-gateway authentication configuration for all tools/list and tools/call requests. Can be overridden by tool-level \`security\` configuration. Supports \`id\` (reference to securitySchemes) and \`passthrough\` (passthrough flag) fields. |
| \`server.defaultUpstreamSecurity\` | object | No | - | Server-level default gateway-to-backend authentication configuration for all backend requests. Can be overridden by tool-level \`requestTemplate.security\` configuration. Supports \`id\` (reference to securitySchemes) and \`credential\` (override default credential) fields. |

### Allowed Tools Configuration

| Name         | Data Type        | Required | Default | Description                                   |
| ------------ | --------------- | -------- | ------ | --------------------------------------------- |
| \`allowTools\` | array of string | No       | -      | List of tools allowed to be called. If not specified, all tools are allowed |

#### Dynamic Tool Permission Control

In addition to statically defining \`allowTools\` in the configuration, tool access permissions can be dynamically controlled through the HTTP request header \`x-envoy-allow-mcp-tools\`. This allows upstream plugins (such as authentication and authorization plugins) to dynamically set the list of allowed tools based on user identity or other conditions.

**Header Format**:
\`\`\`
x-envoy-allow-mcp-tools: tool1,tool2,tool3
\`\`\`

**Permission Control Logic**:

1. **Configuration-level \`allowTools\`** (static): Base tool whitelist defined in the plugin configuration
2. **Header-level \`x-envoy-allow-mcp-tools\`** (dynamic): Tool whitelist read from request header
3. **Effective Permissions**: **Intersection** of tools specified in both configuration and header

**Header Value Semantics**:

| Header State | Behavior |
|------------|------|
| Header not present | No additional restriction, use \`allowTools\` from configuration |
| Header is empty string \`""\` | No additional restriction, use \`allowTools\` from configuration |
| Header is whitespace string \`"  ,  ,  "\` | Deny access to all tools (empty set) |
| Header has value \`"tool1,tool2"\` | Intersect with configured \`allowTools\` |

**Usage Scenarios**:

1. **Role-Based Access Control**
   \`\`\`yaml
   # Define all available tools in configuration
   allowTools:
   - get-user-info
   - update-user-info
   - delete-user-info
   - admin-operation
   \`\`\`
   
   Upstream authentication plugin can set different tool permissions based on user roles:
   - Regular users: \`x-envoy-allow-mcp-tools: get-user-info\`
   - Advanced users: \`x-envoy-allow-mcp-tools: get-user-info,update-user-info\`
   - Administrators: Don't set header (allow all configured tools)

2. **Multi-Tenant Scenario**
   \`\`\`yaml
   # Define tools available for tenants
   allowTools:
   - tenant-query-data
   - tenant-update-data
   - tenant-report
   \`\`\`
   
   Upstream plugin dynamically controls based on tenant subscription plan:
   - Basic plan: \`x-envoy-allow-mcp-tools: tenant-query-data\`
   - Professional plan: \`x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data\`
   - Enterprise plan: \`x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data,tenant-report\`

3. **Temporary Permission Restriction**
   
   In special circumstances (e.g., system maintenance), upstream plugins can temporarily restrict access to certain tools:
   \`\`\`
   x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2
   \`\`\`

**Upstream Plugin Integration Guide**:

For upstream plugins (such as authentication and authorization plugins) that need to dynamically set tool permissions, **you must use \`proxywasm.ReplaceHttpRequestHeader\`** to set the \`x-envoy-allow-mcp-tools\` header:

\`\`\`go
// Correct way: Use ReplaceHttpRequestHeader
// This will override any value that users might have passed in, ensuring security
proxywasm.ReplaceHttpRequestHeader("x-envoy-allow-mcp-tools", "tool1,tool2,tool3")

// \u274C Wrong way: Use AddHttpRequestHeader
// This may retain user-provided values, creating a security vulnerability
proxywasm.AddHttpRequestHeader("x-envoy-allow-mcp-tools", "tool1,tool2,tool3")
\`\`\`

Using \`ReplaceHttpRequestHeader\` ensures:
1. **Security**: Users cannot bypass permission controls by directly passing the \`x-envoy-allow-mcp-tools\` header in their requests
2. **Reliability**: The permission configuration set by the upstream plugin always takes effect and won't be overridden by user input
3. **Predictability**: The MCP Server plugin always receives the permission value set by the upstream plugin

**Notes**:
- Header value uses comma to separate multiple tool names
- Whitespace before and after tool names is automatically trimmed
- When configured \`allowTools\` is an empty array, all tool access is denied regardless of header settings
- The MCP Server plugin automatically removes the \`x-envoy-allow-mcp-tools\` header and doesn't pass it to backend services

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
| \`tools[].security\`                    | object  | No     | -      | Tool-level security configuration, defining authentication between MCP Client and MCP Server, with support for credential passthrough. |
| \`tools[].security.id\`                 | string  | Required when \`tools[].security\` is configured | -      | References a security scheme ID defined in \`server.securitySchemes\`. |
| \`tools[].security.passthrough\`        | boolean | No     | false  | Enables transparent authentication. If \`true\`, credentials extracted from the MCP Client request will be used for the authentication scheme defined in \`requestTemplate.security\`. |
| \`tools[].requestTemplate.security\`    | object  | No     | -      | Security configuration for the HTTP request template, defining authentication between MCP Server and REST API. |
| \`tools[].requestTemplate.security.id\` | string  | Required when \`tools[].requestTemplate.security\` is configured | - | References a security scheme ID defined in \`server.securitySchemes\`. |
| \`tools[].requestTemplate.security.credential\` | string | No | - | Overrides the default credential defined in \`server.securitySchemes\`. If \`tools[].security.passthrough\` is enabled, this field will be ignored, and the passthrough credential will be used instead. |
| \`tools[].errorResponseTemplate\`       | string  | No     | -      | Error Response Template when HTTP Response Status >=300 \\\\|\\\\| <200 |

## Authentication and Security

The MCP Server plugin supports flexible authentication configurations to ensure secure communication with backend REST APIs or MCP servers. The plugin supports two server types with authentication configuration:

- **REST-to-MCP Server (\`rest\` type)**: Converts client requests to REST API calls
- **MCP Proxy Server (\`mcp-proxy\` type)**: Proxies client requests to backend MCP servers

Both types support a **two-tier authentication mechanism**:
1. **Client-to-Gateway Authentication**: Validates the identity of clients calling the MCP Server
2. **Gateway-to-Backend Authentication**: Authentication method used by MCP Server when calling backend services

### Defining Security Schemes (\`server.securitySchemes\`)

You can define a set of reusable security schemes at the server level. These schemes can later be referenced by tools to configure how the MCP Server authenticates requests to backend REST APIs.

**Configuration Fields (\`server.securitySchemes[]\`)**:

| Name                | Data Type | Required | Description                                                                 |
| ------------------- | -------- | -------- | -------------------------------------------------------------------- |
| \`id\`                | string   | Yes     | Unique identifier for the security scheme, to be referenced in tool configurations. |
| \`type\`              | string   | Yes     | Authentication type, supporting \`http\` (for Basic and Bearer auth) and \`apiKey\`. |
| \`scheme\`            | string   | No     | When \`type\` is \`http\`, specifies the specific scheme, such as \`basic\` or \`bearer\`. |
| \`in\`                | string   | No     | When \`type\` is \`apiKey\`, specifies the location of the API key, such as \`header\` or \`query\`. |
| \`name\`              | string   | No     | When \`type\` is \`apiKey\`, specifies the header name or query parameter name. |
| \`defaultCredential\` | string   | No     | Default credential for this scheme. For Basic Auth, this can be "user:password"; for Bearer Token, the token itself; for API Key, the key itself. |

**Example (\`server.securitySchemes\`)**:

\`\`\`yaml
server:
  name: my-api-server
  securitySchemes:
  - id: MyBasicAuth
    type: http
    scheme: basic
    defaultCredential: "admin:secretpassword" # Default username and password
  - id: MyBearerToken
    type: http
    scheme: bearer
    defaultCredential: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." # Default Bearer Token
  - id: MyApiKeyInHeader
    type: apiKey
    in: header
    name: X-Custom-API-Key # API Key in a header named X-Custom-API-Key
    defaultCredential: "abcdef123456" # Default API Key
  - id: MyApiKeyInQuery
    type: apiKey
    in: query
    name: "api_token" # API Key in a query parameter named api_token
    defaultCredential: "uvwxyz789012"
\`\`\`

### Applying Security Schemes in Tools

After defining \`server.securitySchemes\`, you can reference these schemes in each tool's \`requestTemplate.security\` by their \`id\` to specify the authentication method used by the MCP Server when calling the backend REST API.

- **\`tools[].requestTemplate.security.id\`**: References the \`id\` of a security scheme defined in \`server.securitySchemes\`.
- **\`tools[].requestTemplate.security.credential\`**: Optional. If provided, it will override the \`defaultCredential\` in the referenced scheme. This allows you to use different credentials for specific tools, even if they share the same authentication mechanism.

**Example**:

\`\`\`yaml
tools:
- name: get-user-details
  # ... other tool configuration ...
  requestTemplate:
    url: "https://api.example.com/users/{{.args.userId}}"
    method: GET
    security:
      id: MyBearerToken # Use the MyBearerToken scheme defined above
      # credential: "override_token_for_this_tool" # Optional: Override the default token for this tool
# ...
- name: update-inventory
  # ... other tool configuration ...
  requestTemplate:
    url: "https://api.example.com/inventory/{{.args.itemId}}"
    method: POST
    security:
      id: MyApiKeyInHeader # Use the MyApiKeyInHeader scheme
      # This tool will use the defaultCredential defined in MyApiKeyInHeader
\`\`\`

### Passthrough Authentication

The passthrough authentication feature allows credentials provided by the MCP Client (e.g., an AI assistant) when calling the MCP Server to be passed through to the authentication process when the MCP Server calls the backend REST API.

**Configuration**:

1.  **Ensure relevant security schemes are defined in \`server.securitySchemes\`**. This includes schemes for both client-to-MCP Server and MCP Server-to-backend REST API authentication.
2.  **Configure tool-level authentication (\`tools[].security\`)**:
    In tools where credential passthrough is needed, configure the \`security\` field:
    - \`id\`: References a security scheme defined in \`server.securitySchemes\` that is used for **MCP Client to MCP Server** authentication. The plugin will extract credentials from the client request based on this scheme and clean the original credential from the request.
    - \`passthrough: true\`: Enables passthrough authentication.

3.  **Configure request template authentication (\`tools[].requestTemplate.security\`)**:
    In the tool's \`requestTemplate\`, configure the \`security\` field:
    - \`id\`: References a security scheme defined in \`server.securitySchemes\` that is used for **MCP Server to backend REST API** authentication.
    - When \`tools[].security.passthrough\` is \`true\`, the credential extracted from the client will be applied to the backend REST API call according to this \`requestTemplate.security\` scheme.

**Example**:

Suppose the MCP Client uses a Bearer Token to call the MCP Server, and the MCP Server needs to use an API Key to call the backend REST API.

\`\`\`yaml
server:
  name: product-api-server
  securitySchemes:
  - id: ClientSideBearer # Client uses Bearer Token
    type: http
    scheme: bearer
  - id: BackendApiKey    # Backend API uses X-API-Key
    type: apiKey
    in: header
    name: X-API-Key
    # defaultCredential: "optional_default_backend_key"

tools:
- name: get-product-securely
  description: "Get product information (secure passthrough)"
  security: # Client -> MCP Server authentication configuration
    id: ClientSideBearer # MCP Server expects clients to use this scheme and will extract this type of credential
    passthrough: true   # Enable passthrough
  args:
  - name: product_id
    description: "Product ID"
    type: string
    required: true
  requestTemplate:
    security: # MCP Server -> backend REST API authentication configuration
      id: BackendApiKey # Backend API requires this scheme. The passthrough credential will be applied according to this scheme.
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
\`\`\`

**Workflow**:

1.  The MCP Client sends a request to the MCP Server's \`get-product-securely\` tool, with an \`Authorization\` header containing \`Bearer <client_token>\`.
2.  The MCP Server identifies that the client is using a Bearer Token based on \`tools[].security\` (id: \`ClientSideBearer\`). It extracts \`<client_token>\` from the request and removes the original \`Authorization\` header.
3.  Because \`passthrough: true\` is set, the extracted \`<client_token>\` is marked for passthrough.
4.  The MCP Server prepares to call the backend REST API. It looks at \`requestTemplate.security\` (id: \`BackendApiKey\`).
5.  Since passthrough is enabled, the MCP Server uses the previously extracted \`<client_token>\` as the credential value, applying it according to the \`BackendApiKey\` scheme (i.e., as an HTTP header named \`X-API-Key\`).
6.  The backend REST API receives the request with the \`X-API-Key\` header containing the value \`<client_token>\`.

**Notes**:
- When \`tools[].security.passthrough\` is \`true\`, the \`requestTemplate.security.credential\` field is ignored, and the passthrough credential takes precedence.
- The passthrough credential value is applied directly to the authentication scheme specified by \`requestTemplate.security\`. Ensure that the credential format is compatible with the target authentication scheme. The \`extractAndRemoveIncomingCredential\` function attempts to extract the core credential part (e.g., the Bearer token value, the base64-encoded part of Basic auth).

### Server-Level Default Authentication Configuration

To simplify configuration and ensure consistency, the MCP Server plugin supports setting default authentication configurations at the server level. These default configurations apply to all tools and non-tool-specific interfaces (such as \`tools/list\`).

#### \`server.defaultDownstreamSecurity\`

Defines the default client-to-gateway authentication configuration. This configuration applies to:
- All tools that don't have an explicit \`security\` field configured
- \`tools/list\` requests (for retrieving tool lists)
- Other non-tool-specific MCP protocol interfaces

**Configuration Fields**:
- \`id\`: References a security scheme ID defined in \`server.securitySchemes\`
- \`passthrough\`: Whether to enable passthrough authentication (optional, defaults to false)

#### \`server.defaultUpstreamSecurity\`

Defines the default gateway-to-backend authentication configuration. This configuration applies to:
- All tools that don't have an explicit \`requestTemplate.security\` field configured
- \`tools/list\` and other requests that need to access backend services

**Configuration Fields**:
- \`id\`: References a security scheme ID defined in \`server.securitySchemes\`
- \`credential\`: Override the default credential (optional)

#### Priority Rules

Authentication configuration priority from highest to lowest:
1. Tool-level configuration (\`tools[].security\` and \`tools[].requestTemplate.security\`)
2. Server-level default configuration (\`server.defaultDownstreamSecurity\` and \`server.defaultUpstreamSecurity\`)
3. Default credentials in security schemes (\`server.securitySchemes[].defaultCredential\`)

#### Use Cases

Server-level default authentication is particularly useful for:
- **Unified Authentication Strategy**: All tools use the same authentication method
- **MCP Proxy Servers**: Need to provide authentication for \`tools/list\` and other non-tool-specific requests
- **Simplified Configuration**: Reduce repetitive configuration of the same authentication information for each tool

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

### MCP Proxy Server Example: Proxying to Backend MCP Server

\`\`\`yaml
server:
  name: my-mcpserver-proxy
  type: mcp-proxy
  mcpServerURL: "http://backend-mcp.example.com/mcp"
  timeout: 5000
  defaultDownstreamSecurity: # Client-to-gateway default authentication
    id: ClientApiKey
  defaultUpstreamSecurity: # Gateway-to-backend default authentication
    id: BackendApiKey
  securitySchemes:
  - id: ClientApiKey
    type: apiKey
    in: header
    name: X-Client-API-Key
  - id: BackendApiKey
    type: apiKey
    in: header
    name: X-Backend-API-Key
    defaultCredential: "backend-secret-key"

tools:
- name: get-secure-product
  description: "Get secure product information"
  args:
  - name: product_id
    description: "Product ID"
    type: string
    required: true
  requestTemplate:
    security: # Tool-level gateway-to-backend authentication, overrides default
      id: BackendApiKey
      credential: "special-key-for-this-tool"
\`\`\`

This configuration creates an MCP proxy server that:
1. Proxies client MCP requests to \`http://backend-mcp.example.com/mcp\`
2. Uses server-level default authentication configuration for \`tools/list\` and other general requests
3. Tool-level authentication configuration can override default settings
4. Supports passthrough authentication and credential overrides

### Advanced MCP Proxy Server Example: Passthrough Authentication

\`\`\`yaml
server:
  name: my-secure-proxy
  type: mcp-proxy
  mcpServerURL: "https://api.backend-mcp.com/v1/mcp"
  timeout: 10000
  defaultDownstreamSecurity: # Default requires client to provide Bearer Token
    id: ClientBearer
    passthrough: true # Enable passthrough authentication
  defaultUpstreamSecurity: # Default uses passthrough credentials for backend
    id: BackendBearer
  securitySchemes:
  - id: ClientBearer # Client uses Bearer Token
    type: http
    scheme: bearer
  - id: BackendBearer # Backend also uses Bearer Token
    type: http
    scheme: bearer
  - id: AdminApiKey # Admin tools use special API Key
    type: apiKey
    in: header
    name: X-Admin-Key
    defaultCredential: "admin-secret-key"

tools:
- name: get-user-data
  description: "Get user data (using passthrough authentication)"
  args:
  - name: user_id
    description: "User ID"
    type: string
    required: true
  # This tool uses default passthrough authentication, client Bearer Token will be passed to backend

- name: admin-operation
  description: "Perform admin operation (using special authentication)"
  security: # Tool-level client authentication: still requires client Bearer Token
    id: ClientBearer
    passthrough: false # Don't passthrough client credentials
  args:
  - name: operation
    description: "Operation type"
    type: string
    required: true
  requestTemplate:
    security: # Tool-level backend authentication: use admin API Key
      id: AdminApiKey
\`\`\`

This advanced configuration demonstrates:
1. **Passthrough Authentication**: \`get-user-data\` tool passes client Bearer Token to backend
2. **Mixed Authentication**: \`admin-operation\` tool requires client authentication but uses different backend authentication
3. **Server-Level Default Configuration**: Provides unified authentication strategy for all \`tools/list\` requests
4. **Flexible Authentication Schemes**: Supports both HTTP Bearer Token and API Key authentication methods

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
      
      {{if gt $day.day.maxtemp_c 30}}**High Temperature Alert!**{{end}}
      {{if lt $day.day.mintemp_c 0}}**Low Temperature Alert!**{{end}}
      
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

### Example of Customizing Error Responses Using errorResponseTemplate

The errorResponseTemplate is used to customize the response transformation template when the HTTP response status code is >= 300 or < 200. It supports accessing header key-value pairs in map structure via _headers, so that values from the header can be referenced in the errorResponseTemplate to customize the error response result.

\`\`\`yaml
server:
  config:
    appCode: ""
  name: "Bank Card 2nd, 3rd, and 4th Element Verification"
tools:
- args:
  - description: "Bank card number"
    name: "cardno"
    position: "query"
    required: true
    type: "string"
  - description: "Name (Note: apply UrlEncode encoding)"
    name: "name"
    position: "query"
    required: false
    type: "string"
  - description: "Registered mobile number"
    name: "mobile"
    position: "query"
    required: false
    type: "string"
  - description: "ID card number"
    name: "idcard"
    position: "query"
    required: false
    type: "string"
  description: "Verify whether card number, name, mobile number, and ID card number match"
  errorResponseTemplate: |-
    statusCode: {{gjson "_headers.\\\\:status"}}
    errorCode: {{gjson "_headers.x-ca-error-code"}}
    data: {{.data.value}}
  name: "Bank Card 2nd, 3rd, and 4th Element Validation"
  requestTemplate:
    argsToFormBody: false
    argsToJsonBody: false
    argsToUrlParam: true
    method: "GET"
    url: "https://ckid.market.alicloudapi.com/lundear/verifyBank"
  responseTemplate:
    appendBody: |2-
        - Below are descriptions of the returned parameters
        - Parameter Name: code, Parameter Type: integer, Description: Response status code
        - Parameter Name: desc, Parameter Type: string, Description: Description message
        - Parameter Name: data, Parameter Type: object, Description: No description
        - Parameter Name: data.bankId, Parameter Type: string, Description: Bank code
        - Parameter Name: data.bankName, Parameter Type: string, Description: Bank name
        - Parameter Name: data.abbr, Parameter Type: string, Description: Bank abbreviation
        - Parameter Name: data.cardName, Parameter Type: string, Description: Card name
        - Parameter Name: data.cardType, Parameter Type: string, Description: Card type
        - Parameter Name: data.cardBin, Parameter Type: string, Description: Card BIN
        - Parameter Name: data.binLen, Parameter Type: integer, Description: Length of card BIN
        - Parameter Name: data.area, Parameter Type: string, Description: Region where the card belongs
        - Parameter Name: data.bankPhone, Parameter Type: string, Description: Bank phone number
        - Parameter Name: data.bankUrl, Parameter Type: string, Description: Bank website URL
        - Parameter Name: data.bankLogo, Parameter Type: string, Description: Bank logo URL
\`\`\`
This example demonstrates:
- {{gjson "_headers.\\\\:status"}} -> Get HTTP status code
- {{gjson "_headers.x-ca-error-code"}} -> Get value of header key "x-ca-error-code"
- {{.data.value}} -> Access original responseBody content (e.g., JSON field "data.value")

## AI Prompt for Template Generation

When working with AI assistants to generate templates for REST-to-MCP configuration, you can use the following prompt:

\`\`\`
Please help me create an MCP server configuration for Higress. Supports two types:
1. **REST-to-MCP Server**: Converts REST APIs to MCP tools
2. **MCP Proxy Server**: Proxies to backend MCP servers

## Configuration Format

### REST-to-MCP Server Configuration

\`\`\`yaml
server:
  name: rest-api-server
  type: rest  # Optional, defaults to rest
  config:
    apiKey: your-api-key-here
  # Server-level default authentication (optional)
  defaultDownstreamSecurity:
    id: ClientAuth
  defaultUpstreamSecurity:
    id: BackendAuth
  securitySchemes:
  - id: ClientAuth
    type: http
    scheme: bearer
  - id: BackendAuth
    type: apiKey
    in: header
    name: X-API-Key
    defaultCredential: your-backend-api-key
tools:
- name: tool-name
  description: "Detailed description of what this tool does"
  security: # Tool-level client authentication (optional, overrides server default)
    id: ClientAuth
    passthrough: true  # Enable passthrough authentication
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
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    security: # Tool-level backend authentication (optional, overrides server default)
      id: BackendAuth
      credential: "specific-tool-credential"  # Optional, override default credential
    # The following four options are mutually exclusive, only one can be used
    argsToUrlParam: true  # Add arguments to URL query parameters
    # OR other options...
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # Result
      {{- range $index, $item := .items }}
      ## Item {{add $index 1}}
      - **Name**: {{ $item.name }}
      - **Value**: {{ $item.value }}
      {{- end }}
\`\`\`

### MCP Proxy Server Configuration

\`\`\`yaml
server:
  name: mcp-proxy-server
  type: mcp-proxy
  mcpServerURL: "http://backend-mcp.example.com/mcp"  # Backend MCP server URL
  timeout: 5000  # Timeout in milliseconds
  # Server-level default authentication (recommended)
  defaultDownstreamSecurity:  # Client-to-gateway authentication
    id: ClientAuth
    passthrough: true  # Enable passthrough authentication
  defaultUpstreamSecurity:   # Gateway-to-backend authentication
    id: BackendAuth
  securitySchemes:
  - id: ClientAuth
    type: http
    scheme: bearer
  - id: BackendAuth
    type: apiKey
    in: header
    name: X-Backend-Key
    defaultCredential: "backend-service-key"

# For MCP proxy, tools configuration is optional
# If tools are configured, only listed tools are available
# If tools are not configured, all backend MCP server tools are proxied
tools:
- name: specific-tool
  description: "Specific tool configuration (optional)"
  security: # Override default client authentication
    id: ClientAuth
    passthrough: false  # Don't passthrough
  args:
  - name: param1
    description: "Parameter description"
    type: string
    required: true
  requestTemplate:
    security: # Override default backend authentication
      id: BackendAuth
      credential: "specific-tool-backend-credential"
\`\`\`

## Template Syntax

The templates use GJSON Template syntax (https://github.com/higress-group/gjson_template), which combines Go templates with GJSON path syntax for JSON processing. The template engine supports:

1. Basic dot notation for accessing fields: {{.fieldName}}
2. The gjson function for complex queries: {{gjson "users.#(active==true)#.name"}}
3. All Sprig template functions (like Helm): {{add}}, {{upper}}, {{lower}}, {{date}}, etc.
4. Control structures: {{if}}, {{range}}, {{with}}, etc.
5. Variable assignment: {{$var := .value}}

For complex JSON responses, consider using GJSON's powerful filtering and querying capabilities to extract and format the most relevant information.

## My Requirements

Please choose your requirement type:

### If you want to convert REST API to MCP tools
Please describe your REST API:
- API endpoint URLs
- Authentication methods (API Key, Bearer Token, etc.)
- Parameters and response formats
- Or paste Swagger/OpenAPI specifications

### If you want to proxy to an existing MCP server
Please provide:
- Backend MCP server URL
- Authentication requirements (client authentication, backend authentication)
- Whether passthrough authentication is needed (pass client credentials to backend)
- Specific tool configuration requirements

[Describe your specific requirements here]
\`\`\`

## Generation Requirements

Please generate a complete configuration based on the above information, including:

### For REST-to-MCP Server:
1. Descriptive name and appropriate server configuration
2. Define all necessary parameters with clear descriptions and appropriate types, required/default values
3. Choose appropriate parameter passing methods (argsToUrlParam, argsToJsonBody, argsToFormBody, or custom body)
4. Create responseTemplate that transforms API responses into formats suitable for AI consumption
5. Configure appropriate security schemes and authentication configuration

### For MCP Proxy Server:
1. Configure backend MCP server URL and timeout
2. Set server-level default authentication configuration
3. Configure passthrough authentication as needed
4. Configure tool-specific authentication overrides if required
5. Ensure complete authentication chain from client-to-gateway and gateway-to-backend
`},d=function(){return e},o=function(){return[{depth:2,slug:"feature-description",text:"Feature Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"server-configuration",text:"Server Configuration"},{depth:3,slug:"allowed-tools-configuration",text:"Allowed Tools Configuration"},{depth:4,slug:"dynamic-tool-permission-control",text:"Dynamic Tool Permission Control"},{depth:3,slug:"rest-to-mcp-tool-configuration",text:"REST-to-MCP Tool Configuration"},{depth:2,slug:"authentication-and-security",text:"Authentication and Security"},{depth:3,slug:"defining-security-schemes-serversecurityschemes",text:"Defining Security Schemes (server.securitySchemes)"},{depth:3,slug:"applying-security-schemes-in-tools",text:"Applying Security Schemes in Tools"},{depth:3,slug:"passthrough-authentication",text:"Passthrough Authentication"},{depth:3,slug:"server-level-default-authentication-configuration",text:"Server-Level Default Authentication Configuration"},{depth:4,slug:"serverdefaultdownstreamsecurity",text:"server.defaultDownstreamSecurity"},{depth:4,slug:"serverdefaultupstreamsecurity",text:"server.defaultUpstreamSecurity"},{depth:4,slug:"priority-rules",text:"Priority Rules"},{depth:4,slug:"use-cases",text:"Use Cases"},{depth:2,slug:"parameter-type-support",text:"Parameter Type Support"},{depth:2,slug:"parameter-position-control",text:"Parameter Position Control"},{depth:3,slug:"supported-position-types",text:"Supported Position Types"},{depth:3,slug:"usage-example",text:"Usage Example"},{depth:3,slug:"relationship-with-bulk-parameter-processing-options",text:"Relationship with Bulk Parameter Processing Options"},{depth:2,slug:"request-parameter-passing-methods",text:"Request Parameter Passing Methods"},{depth:2,slug:"template-syntax",text:"Template Syntax"},{depth:3,slug:"request-templates",text:"Request Templates"},{depth:3,slug:"response-templates",text:"Response Templates"},{depth:3,slug:"gjson-path-syntax",text:"GJSON Path Syntax"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"using-built-in-mcp-server-example-configuring-quark-search",text:"Using Built-in MCP Server Example: Configuring quark-search"},{depth:3,slug:"mcp-proxy-server-example-proxying-to-backend-mcp-server",text:"MCP Proxy Server Example: Proxying to Backend MCP Server"},{depth:3,slug:"advanced-mcp-proxy-server-example-passthrough-authentication",text:"Advanced MCP Proxy Server Example: Passthrough Authentication"},{depth:3,slug:"basic-example-converting-amap-api",text:"Basic Example: Converting AMap API"},{depth:3,slug:"advanced-example-complex-response-processing-with-conditional-logic",text:"Advanced Example: Complex Response Processing with Conditional Logic"},{depth:3,slug:"using-prependbody-and-appendbody-openapi-conversion",text:"Using PrependBody and AppendBody: OpenAPI Conversion"},{depth:3,slug:"example-of-customizing-error-responses-using-errorresponsetemplate",text:"Example of Customizing Error Responses Using errorResponseTemplate"},{depth:2,slug:"ai-prompt-for-template-generation",text:"AI Prompt for Template Generation"},{depth:3,slug:"mcp-proxy-server-configuration",text:"MCP Proxy Server Configuration"},{depth:2,slug:"template-syntax-1",text:"Template Syntax"},{depth:2,slug:"my-requirements",text:"My Requirements"},{depth:3,slug:"if-you-want-to-convert-rest-api-to-mcp-tools",text:"If you want to convert REST API to MCP tools"},{depth:3,slug:"if-you-want-to-proxy-to-an-existing-mcp-server",text:"If you want to proxy to an existing MCP server"}]},s=r((m,f,g)=>{const{layout:x,...i}=t;return i.file=a,i.url=n,c`${u()}${y(e)}`})});export{s as Content,h as __tla,d as compiledContent,s as default,a as file,t as frontmatter,o as getHeadings,l as rawContent,n as url};
