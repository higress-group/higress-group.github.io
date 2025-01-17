import{c,__tla as l}from"./astro-component.CXlaF79K.js";import{r as p,m as h,u,__tla as v}from"./constant.uml0BwTi.js";import{__tla as f}from"./astro/assets-service.DQopRnBr.js";let t,o,a,s,d,r,n,x=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">ext-auth</code> plugin implements sending authentication requests to an external authorization service to check whether the client request is authorized. This plugin is implemented with reference to Envoy\u2019s native <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ext_authz filter</a>, which covers some capabilities for connecting to HTTP services.</p>
<h2 id="execution-properties">Execution Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code><br>
Plugin Execution Priority: <code dir="auto">360</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">http_service</code></td><td>object</td><td>Yes</td><td>-</td><td>Configuration for the external authorization service</td></tr><tr><td><code dir="auto">failure_mode_allow</code></td><td>bool</td><td>No</td><td>false</td><td>When set to true, client requests will still be accepted even if communication with the authorization service fails or the authorization service returns an HTTP 5xx error</td></tr><tr><td><code dir="auto">failure_mode_allow_header_add</code></td><td>bool</td><td>No</td><td>false</td><td>When both <code dir="auto">failure_mode_allow</code> and <code dir="auto">failure_mode_allow_header_add</code> are set to true, if communication with the authorization service fails or returns an HTTP 5xx error, the request header will include <code dir="auto">x-envoy-auth-failure-mode-allowed: true</code></td></tr><tr><td><code dir="auto">status_on_error</code></td><td>int</td><td>No</td><td>403</td><td>Sets the HTTP status code returned to the client when the authorization service is unreachable or returns a 5xx status code. The default status code is <code dir="auto">403</code></td></tr></tbody></table>
<h3 id="configuration-fields-for-each-item-in-http_service">Configuration Fields for Each Item in <code dir="auto">http_service</code></h3>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">endpoint_mode</code></td><td>string</td><td>No</td><td>envoy</td><td>Select either <code dir="auto">envoy</code> or <code dir="auto">forward_auth</code> as an optional choice</td></tr><tr><td><code dir="auto">endpoint</code></td><td>object</td><td>Yes</td><td>-</td><td>Information about the HTTP service for sending authentication requests</td></tr><tr><td><code dir="auto">timeout</code></td><td>int</td><td>No</td><td>1000</td><td>Connection timeout for <code dir="auto">ext-auth</code> service, in milliseconds</td></tr><tr><td><code dir="auto">authorization_request</code></td><td>object</td><td>No</td><td>-</td><td>Configuration for sending authentication requests</td></tr><tr><td><code dir="auto">authorization_response</code></td><td>object</td><td>No</td><td>-</td><td>Configuration for processing authentication responses</td></tr></tbody></table>
<h3 id="configuration-fields-for-each-item-in-endpoint">Configuration Fields for Each Item in <code dir="auto">endpoint</code></h3>






















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">service_name</code></td><td>string</td><td>Required</td><td>-</td><td>Input the name of the authorization service, in complete FQDN format, e.g., <code dir="auto">ext-auth.dns</code> or <code dir="auto">ext-auth.my-ns.svc.cluster.local</code></td></tr><tr><td><code dir="auto">service_port</code></td><td>int</td><td>No</td><td>80</td><td>Input the port of the authorization service</td></tr><tr><td><code dir="auto">service_host</code></td><td>string</td><td>No</td><td>-</td><td>The Host header set when requesting the authorization service; remains the same as FQDN if not filled</td></tr><tr><td><code dir="auto">path_prefix</code></td><td>string</td><td>Required when <code dir="auto">endpoint_mode</code> is <code dir="auto">envoy</code></td><td></td><td>Request path prefix for the client when sending requests to the authorization service</td></tr><tr><td><code dir="auto">request_method</code></td><td>string</td><td>No</td><td>GET</td><td>HTTP Method for client requests to the authorization service when <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code></td></tr><tr><td><code dir="auto">path</code></td><td>string</td><td>Required when <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code></td><td>-</td><td>Request path for the client when sending requests to the authorization service</td></tr></tbody></table>
<h3 id="configuration-fields-for-each-item-in-authorization_request">Configuration Fields for Each Item in <code dir="auto">authorization_request</code></h3>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allowed_headers</code></td><td>array of StringMatcher</td><td>No</td><td>-</td><td>When set, client request headers with matching criteria will be added to the headers of the request to the authorization service. The <code dir="auto">Authorization</code> HTTP header will be automatically included in the authorization service request, and if <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, the original request path will be set to <code dir="auto">X-Original-Uri</code> and the original request HTTP method will be set to <code dir="auto">X-Original-Method</code>.</td></tr><tr><td><code dir="auto">headers_to_add</code></td><td><code dir="auto">map[string]string</code></td><td>No</td><td>-</td><td>Sets the list of request headers to include in the authorization service request. Note that headers with the same name from the client will be overwritten.</td></tr><tr><td><code dir="auto">with_request_body</code></td><td>bool</td><td>No</td><td>false</td><td>Buffer the client request body and send it in the authentication request (does not take effect for HTTP Methods GET, OPTIONS, and HEAD)</td></tr><tr><td><code dir="auto">max_request_body_bytes</code></td><td>int</td><td>No</td><td>10MB</td><td>Sets the maximum size of the client request body to keep in memory. When the client request body reaches the value set in this field, an HTTP 413 status code will be returned, and the authorization process will not start. Note that this setting takes precedence over the <code dir="auto">failure_mode_allow</code> configuration.</td></tr></tbody></table>
<h3 id="configuration-fields-for-each-item-in-authorization_response">Configuration Fields for Each Item in <code dir="auto">authorization_response</code></h3>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allowed_upstream_headers</code></td><td>array of StringMatcher</td><td>No</td><td>-</td><td>When set, the response headers of the authorization request with matching criteria will be added to the original client request headers. Note that headers with the same name will be overwritten.</td></tr><tr><td><code dir="auto">allowed_client_headers</code></td><td>array of StringMatcher</td><td>No</td><td>-</td><td>If not set, all response headers from authorization requests will be added to the client\u2019s response when a request is denied. When set, response headers from authorization requests with matching criteria will be added to the client\u2019s response when a request is denied.</td></tr></tbody></table>
<h3 id="field-descriptions-for-stringmatcher-type">Field Descriptions for <code dir="auto">StringMatcher</code> Type</h3>
<p>When using <code dir="auto">array of StringMatcher</code>, the fields are configured according to the order defined in the array.</p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">exact</code></td><td>string</td><td>No, must select one from <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code></td><td>-</td><td>Exact match</td></tr><tr><td><code dir="auto">prefix</code></td><td>string</td><td>No, must select one from <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code></td><td>-</td><td>Prefix match</td></tr><tr><td><code dir="auto">suffix</code></td><td>string</td><td>No, must select one from <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code></td><td>-</td><td>Suffix match</td></tr><tr><td><code dir="auto">contains</code></td><td>string</td><td>No, must select one from <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code></td><td>-</td><td>Contains match</td></tr><tr><td><code dir="auto">regex</code></td><td>string</td><td>No, must select one from <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code></td><td>-</td><td>Regex match</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<p>Assuming the <code dir="auto">ext-auth</code> service has a serviceName of <code dir="auto">ext-auth</code>, port <code dir="auto">8090</code>, path <code dir="auto">/auth</code>, and namespace <code dir="auto">backend</code> in Kubernetes.</p>
<p>Two types of <code dir="auto">endpoint_mode</code> are supported:</p>
<ul>
<li>When <code dir="auto">endpoint_mode</code> is <code dir="auto">envoy</code>, the authentication request will use the original request HTTP Method, and the configured <code dir="auto">path_prefix</code> will be concatenated with the original request path.</li>
<li>When <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, the authentication request will use the configured <code dir="auto">request_method</code> as the HTTP Method and the configured <code dir="auto">path</code> as the request path.</li>
</ul>
<h3 id="example-1-endpoint_mode-is-envoy">Example 1: <code dir="auto">endpoint_mode</code> is <code dir="auto">envoy</code></h3>
<h4 id="configuration-of-ext-auth-plugin">Configuration of <code dir="auto">ext-auth</code> Plugin:</h4>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  endpoint_mode: envoy\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path_prefix: /auth\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>Using the following request to the gateway, after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p><strong>Successful request to the <code dir="auto">ext-auth</code> service:</strong>
The <code dir="auto">ext-auth</code> service will receive the following authentication request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\x7FHost: ext-auth.backend.svc.cluster.local\x7FAuthorization: xxx\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><strong>Failed request to the <code dir="auto">ext-auth</code> service:</strong>
When the <code dir="auto">ext-auth</code> service responds with a 5xx error, the client will receive an HTTP response code of 403 along with all response headers returned by the <code dir="auto">ext-auth</code> service.</p>
<p>If the <code dir="auto">ext-auth</code> service returns <code dir="auto">x-auth-version: 1.0</code> and <code dir="auto">x-auth-failed: true</code> headers, these will be conveyed to the client:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-failed: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Tue, 16 Jul 2024 00:19:41 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fx-auth-version: 1.0\x7Fx-auth-failed: true\x7Fdate: Tue, 16 Jul 2024 00:19:41 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>
<p>When the <code dir="auto">ext-auth</code> service is inaccessible or returns a status code of 5xx, the client request will be denied with the status code configured in <code dir="auto">status_on_error</code>. When the <code dir="auto">ext-auth</code> service returns other HTTP status codes, the client request will be denied with the returned status code. If <code dir="auto">allowed_client_headers</code> is configured, the matching response headers will be added to the client\u2019s response.</p>
<h4 id="example-2-ext-auth-plugin-configuration">Example 2: <code dir="auto">ext-auth</code> Plugin Configuration:</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers_to_add</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">x-envoy-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_upstream_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-domain.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  authorization_request:\x7F    allowed_headers:\x7F    - exact: x-auth-version\x7F    headers_to_add:\x7F      x-envoy-header: true\x7F  authorization_response:\x7F    allowed_upstream_headers:\x7F    - exact: x-user-id\x7F    - exact: x-auth-version\x7F  endpoint_mode: envoy\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_host: my-domain.local\x7F    service_port: 8090\x7F    path_prefix: /auth\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>Using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p>The <code dir="auto">ext-auth</code> service will receive the following authentication request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: my-domain.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Auth-Version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-header: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\x7FHost: my-domain.local\x7FAuthorization: xxx\x7FX-Auth-Version: 1.0\x7Fx-envoy-header: true\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p>If the <code dir="auto">ext-auth</code> service returns headers containing <code dir="auto">x-user-id</code> and <code dir="auto">x-auth-version</code>, these two request headers will be included in requests to the upstream when the gateway calls it.</p>
<h3 id="example-1-endpoint_mode-is-forward_auth">Example 1: <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code></h3>
<p><code dir="auto">ext-auth</code> Plugin Configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">forward_auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">request_method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  endpoint_mode: forward_auth\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path: /auth\x7F    request_method: POST\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>Using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p><strong>Successful request to the <code dir="auto">ext-auth</code> service:</strong>
The <code dir="auto">ext-auth</code> service will receive the following authentication request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Method: GET</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth HTTP/1.1\x7FHost: ext-auth.backend.svc.cluster.local\x7FAuthorization: xxx\x7FX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\x7FX-Original-Method: GET\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><strong>Failed request to the <code dir="auto">ext-auth</code> service:</strong>
When the <code dir="auto">ext-auth</code> service responds with a 5xx error, the client will receive an HTTP response code of 403 along with all response headers returned by the <code dir="auto">ext-auth</code> service.</p>
<p>If the <code dir="auto">ext-auth</code> service returns <code dir="auto">x-auth-version: 1.0</code> and <code dir="auto">x-auth-failed: true</code> headers, these will be conveyed to the client:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-failed: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Tue, 16 Jul 2024 00:19:41 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fx-auth-version: 1.0\x7Fx-auth-failed: true\x7Fdate: Tue, 16 Jul 2024 00:19:41 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>
<p>When the <code dir="auto">ext-auth</code> service is inaccessible or returns a status code of 5xx, the client request will be denied with the status code configured in <code dir="auto">status_on_error</code>. When the <code dir="auto">ext-auth</code> service returns other HTTP status codes, the client request will be denied with the returned status code. If <code dir="auto">allowed_client_headers</code> is configured, the matching response headers will be added to the client\u2019s response.</p>
<h4 id="example-2-ext-auth-plugin-configuration-1">Example 2: <code dir="auto">ext-auth</code> Plugin Configuration:</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers_to_add</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">x-envoy-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_upstream_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">forward_auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-domain.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">request_method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  authorization_request:\x7F    allowed_headers:\x7F    - exact: x-auth-version\x7F    headers_to_add:\x7F      x-envoy-header: true\x7F  authorization_response:\x7F    allowed_upstream_headers:\x7F    - exact: x-user-id\x7F    - exact: x-auth-version\x7F  endpoint_mode: forward_auth\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_host: my-domain.local\x7F    service_port: 8090\x7F    path: /auth\x7F    request_method: POST\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>Using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"X-Auth-Version: 1.0"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22; -H &#x22;X-Auth-Version: 1.0&#x22;"><div></div></button></div></figure></div>
<p>The <code dir="auto">ext-auth</code> service will receive the following authentication request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: my-domain.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Method: GET</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Auth-Version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-header: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth HTTP/1.1\x7FHost: my-domain.local\x7FAuthorization: xxx\x7FX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\x7FX-Original-Method: GET\x7FX-Auth-Version: 1.0\x7Fx-envoy-header: true\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p>If the <code dir="auto">ext-auth</code> service returns headers containing <code dir="auto">x-user-id</code> and <code dir="auto">x-auth-version</code>, these two request headers will be included in requests to the upstream when the gateway calls it.</p>
<h4 id="x-forwarded--header">x-forwarded-* Header</h4>
<p>When <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, Higress will automatically generate and send the following headers to the authorization service.</p>





























<table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>x-forwarded-proto</td><td>The scheme of the original request, e.g., http/https</td></tr><tr><td>x-forwarded-method</td><td>The method of the original request, e.g., get/post/delete/patch</td></tr><tr><td>x-forwarded-host</td><td>The host of the original request</td></tr><tr><td>x-forwarded-uri</td><td>The path of the original request, including path parameters, e.g., /v1/app?test=true</td></tr><tr><td>x-forwarded-for</td><td>The client IP address of the original request</td></tr></tbody></table>`,s={title:"External Authentication",keywords:["higress","auth"],description:"The Ext Authentication plugin implements the capability to call external authorization services for authentication and authorization."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/ext-auth.md",n=void 0,r=function(){return'## Function Description\nThe `ext-auth` plugin implements sending authentication requests to an external authorization service to check whether the client request is authorized. This plugin is implemented with reference to Envoy\'s native [ext_authz filter](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter), which covers some capabilities for connecting to HTTP services.\n\n## Execution Properties\nPlugin Execution Phase: `Authentication Phase`  \nPlugin Execution Priority: `360`\n\n## Configuration Fields\n| Name                            | Data Type | Required | Default Value | Description                                                                                                                                                            |\n| ------------------------------- | --------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `http_service`                  | object    | Yes      | -             | Configuration for the external authorization service                                                                                                                   |\n| `failure_mode_allow`            | bool      | No       | false         | When set to true, client requests will still be accepted even if communication with the authorization service fails or the authorization service returns an HTTP 5xx error |\n| `failure_mode_allow_header_add` | bool      | No       | false         | When both `failure_mode_allow` and `failure_mode_allow_header_add` are set to true, if communication with the authorization service fails or returns an HTTP 5xx error, the request header will include `x-envoy-auth-failure-mode-allowed: true` |\n| `status_on_error`               | int       | No       | 403           | Sets the HTTP status code returned to the client when the authorization service is unreachable or returns a 5xx status code. The default status code is `403`          |\n\n### Configuration Fields for Each Item in `http_service`\n| Name                     | Data Type | Required | Default Value | Description                                  |\n| ------------------------ | --------- | -------- | ------------- | -------------------------------------------- |\n| `endpoint_mode`          | string    | No       | envoy         | Select either `envoy` or `forward_auth` as an optional choice |\n| `endpoint`               | object    | Yes      | -             | Information about the HTTP service for sending authentication requests |\n| `timeout`                | int       | No       | 1000          | Connection timeout for `ext-auth` service, in milliseconds |\n| `authorization_request`  | object    | No       | -             | Configuration for sending authentication requests |\n| `authorization_response` | object    | No       | -             | Configuration for processing authentication responses |\n\n### Configuration Fields for Each Item in `endpoint`\n| Name             | Data Type | Required               | Default Value | Description                                                                                                   |\n| ---------------- | --------- | ---------------------- | ------------- | ------------------------------------------------------------------------------------------------------------- |\n| `service_name`   | string    | Required               | -             | Input the name of the authorization service, in complete FQDN format, e.g., `ext-auth.dns` or `ext-auth.my-ns.svc.cluster.local` |\n| `service_port`   | int       | No                     | 80            | Input the port of the authorization service                                                                      |\n| `service_host`   | string    | No                     | -             | The Host header set when requesting the authorization service; remains the same as FQDN if not filled          |\n| `path_prefix`    | string    | Required when `endpoint_mode` is `envoy` |             | Request path prefix for the client when sending requests to the authorization service                          |\n| `request_method` | string    | No                     | GET           | HTTP Method for client requests to the authorization service when `endpoint_mode` is `forward_auth`            |\n| `path`           | string    | Required when `endpoint_mode` is `forward_auth` | -             | Request path for the client when sending requests to the authorization service                                   |\n\n### Configuration Fields for Each Item in `authorization_request`\n| Name                     | Data Type               | Required | Default Value | Description                                                                                                                                                            |\n| ------------------------ | ---------------------- | -------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| `allowed_headers`        | array of StringMatcher | No       | -             | When set, client request headers with matching criteria will be added to the headers of the request to the authorization service. The `Authorization` HTTP header will be automatically included in the authorization service request, and if `endpoint_mode` is `forward_auth`, the original request path will be set to `X-Original-Uri` and the original request HTTP method will be set to `X-Original-Method`. |\n| `headers_to_add`         | `map[string]string`    | No       | -             | Sets the list of request headers to include in the authorization service request. Note that headers with the same name from the client will be overwritten.              |\n| `with_request_body`      | bool                   | No       | false         | Buffer the client request body and send it in the authentication request (does not take effect for HTTP Methods GET, OPTIONS, and HEAD)                               |\n| `max_request_body_bytes` | int                    | No       | 10MB          | Sets the maximum size of the client request body to keep in memory. When the client request body reaches the value set in this field, an HTTP 413 status code will be returned, and the authorization process will not start. Note that this setting takes precedence over the `failure_mode_allow` configuration. |\n\n### Configuration Fields for Each Item in `authorization_response`\n| Name                       | Data Type               | Required | Default Value | Description                                                                                     |\n| -------------------------- | ---------------------- | -------- | ------------- | ----------------------------------------------------------------------------------------------- |\n| `allowed_upstream_headers` | array of StringMatcher | No       | -             | When set, the response headers of the authorization request with matching criteria will be added to the original client request headers. Note that headers with the same name will be overwritten. |\n| `allowed_client_headers`   | array of StringMatcher | No       | -             | If not set, all response headers from authorization requests will be added to the client\u2019s response when a request is denied. When set, response headers from authorization requests with matching criteria will be added to the client\'s response when a request is denied. |\n\n### Field Descriptions for `StringMatcher` Type\nWhen using `array of StringMatcher`, the fields are configured according to the order defined in the array.\n| Name       | Data Type | Required                                            | Default Value | Description |\n| ---------- | --------- | --------------------------------------------------- | ------------- | ----------- |\n| `exact`    | string    | No, must select one from `exact`, `prefix`, `suffix`, `contains`, `regex` | -             | Exact match |\n| `prefix`   | string    | No, must select one from `exact`, `prefix`, `suffix`, `contains`, `regex` | -             | Prefix match |\n| `suffix`   | string    | No, must select one from `exact`, `prefix`, `suffix`, `contains`, `regex` | -             | Suffix match |\n| `contains` | string    | No, must select one from `exact`, `prefix`, `suffix`, `contains`, `regex` | -             | Contains match |\n| `regex`    | string    | No, must select one from `exact`, `prefix`, `suffix`, `contains`, `regex` | -             | Regex match |\n\n## Configuration Example\nAssuming the `ext-auth` service has a serviceName of `ext-auth`, port `8090`, path `/auth`, and namespace `backend` in Kubernetes.\n\nTwo types of `endpoint_mode` are supported:\n- When `endpoint_mode` is `envoy`, the authentication request will use the original request HTTP Method, and the configured `path_prefix` will be concatenated with the original request path.\n- When `endpoint_mode` is `forward_auth`, the authentication request will use the configured `request_method` as the HTTP Method and the configured `path` as the request path.\n\n### Example 1: `endpoint_mode` is `envoy`\n#### Configuration of `ext-auth` Plugin:\n```yaml\nhttp_service:\n  endpoint_mode: envoy\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path_prefix: /auth\n  timeout: 1000\n```\n\nUsing the following request to the gateway, after enabling the `ext-auth` plugin:\n```shell\ncurl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx"\n```\n\n**Successful request to the `ext-auth` service:**\nThe `ext-auth` service will receive the following authentication request:\n```\nPOST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\nHost: ext-auth.backend.svc.cluster.local\nAuthorization: xxx\nContent-Length: 0\n```\n\n**Failed request to the `ext-auth` service:**\nWhen the `ext-auth` service responds with a 5xx error, the client will receive an HTTP response code of 403 along with all response headers returned by the `ext-auth` service.\n\nIf the `ext-auth` service returns `x-auth-version: 1.0` and `x-auth-failed: true` headers, these will be conveyed to the client:\n```\nHTTP/1.1 403 Forbidden\nx-auth-version: 1.0\nx-auth-failed: true\ndate: Tue, 16 Jul 2024 00:19:41 GMT\nserver: istio-envoy\ncontent-length: 0\n```\n\nWhen the `ext-auth` service is inaccessible or returns a status code of 5xx, the client request will be denied with the status code configured in `status_on_error`. When the `ext-auth` service returns other HTTP status codes, the client request will be denied with the returned status code. If `allowed_client_headers` is configured, the matching response headers will be added to the client\'s response.\n\n#### Example 2: `ext-auth` Plugin Configuration:\n```yaml\nhttp_service:\n  authorization_request:\n    allowed_headers:\n    - exact: x-auth-version\n    headers_to_add:\n      x-envoy-header: true\n  authorization_response:\n    allowed_upstream_headers:\n    - exact: x-user-id\n    - exact: x-auth-version\n  endpoint_mode: envoy\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_host: my-domain.local\n    service_port: 8090\n    path_prefix: /auth\n  timeout: 1000\n```\n\nUsing the following request to the gateway after enabling the `ext-auth` plugin:\n```shell\ncurl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx"\n```\n\nThe `ext-auth` service will receive the following authentication request:\n```\nPOST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\nHost: my-domain.local\nAuthorization: xxx\nX-Auth-Version: 1.0\nx-envoy-header: true\nContent-Length: 0\n```\n\nIf the `ext-auth` service returns headers containing `x-user-id` and `x-auth-version`, these two request headers will be included in requests to the upstream when the gateway calls it.\n\n### Example 1: `endpoint_mode` is `forward_auth`\n`ext-auth` Plugin Configuration:\n```yaml\nhttp_service:\n  endpoint_mode: forward_auth\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path: /auth\n    request_method: POST\n  timeout: 1000\n```\n\nUsing the following request to the gateway after enabling the `ext-auth` plugin:\n```shell\ncurl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx"\n```\n\n**Successful request to the `ext-auth` service:**\nThe `ext-auth` service will receive the following authentication request:\n```\nPOST /auth HTTP/1.1\nHost: ext-auth.backend.svc.cluster.local\nAuthorization: xxx\nX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\nX-Original-Method: GET\nContent-Length: 0\n```\n\n**Failed request to the `ext-auth` service:**\nWhen the `ext-auth` service responds with a 5xx error, the client will receive an HTTP response code of 403 along with all response headers returned by the `ext-auth` service.\n\nIf the `ext-auth` service returns `x-auth-version: 1.0` and `x-auth-failed: true` headers, these will be conveyed to the client:\n```\nHTTP/1.1 403 Forbidden\nx-auth-version: 1.0\nx-auth-failed: true\ndate: Tue, 16 Jul 2024 00:19:41 GMT\nserver: istio-envoy\ncontent-length: 0\n```\n\nWhen the `ext-auth` service is inaccessible or returns a status code of 5xx, the client request will be denied with the status code configured in `status_on_error`. When the `ext-auth` service returns other HTTP status codes, the client request will be denied with the returned status code. If `allowed_client_headers` is configured, the matching response headers will be added to the client\'s response.\n\n#### Example 2: `ext-auth` Plugin Configuration:\n```yaml\nhttp_service:\n  authorization_request:\n    allowed_headers:\n    - exact: x-auth-version\n    headers_to_add:\n      x-envoy-header: true\n  authorization_response:\n    allowed_upstream_headers:\n    - exact: x-user-id\n    - exact: x-auth-version\n  endpoint_mode: forward_auth\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_host: my-domain.local\n    service_port: 8090\n    path: /auth\n    request_method: POST\n  timeout: 1000\n```\n\nUsing the following request to the gateway after enabling the `ext-auth` plugin:\n```shell\ncurl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx" -H "X-Auth-Version: 1.0"\n```\n\nThe `ext-auth` service will receive the following authentication request:\n```\nPOST /auth HTTP/1.1\nHost: my-domain.local\nAuthorization: xxx\nX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\nX-Original-Method: GET\nX-Auth-Version: 1.0\nx-envoy-header: true\nContent-Length: 0\n```\n\nIf the `ext-auth` service returns headers containing `x-user-id` and `x-auth-version`, these two request headers will be included in requests to the upstream when the gateway calls it.\n\n#### x-forwarded-* Header\nWhen `endpoint_mode` is `forward_auth`, Higress will automatically generate and send the following headers to the authorization service.\n| Header             | Description                                   |\n|--------------------|-----------------------------------------------|\n| x-forwarded-proto  | The scheme of the original request, e.g., http/https |\n| x-forwarded-method | The method of the original request, e.g., get/post/delete/patch |\n| x-forwarded-host   | The host of the original request               |\n| x-forwarded-uri    | The path of the original request, including path parameters, e.g., /v1/app?test=true |\n| x-forwarded-for    | The client IP address of the original request   |\n'},o=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-properties",text:"Execution Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"configuration-fields-for-each-item-in-http_service",text:"Configuration Fields for Each Item in http_service"},{depth:3,slug:"configuration-fields-for-each-item-in-endpoint",text:"Configuration Fields for Each Item in endpoint"},{depth:3,slug:"configuration-fields-for-each-item-in-authorization_request",text:"Configuration Fields for Each Item in authorization_request"},{depth:3,slug:"configuration-fields-for-each-item-in-authorization_response",text:"Configuration Fields for Each Item in authorization_response"},{depth:3,slug:"field-descriptions-for-stringmatcher-type",text:"Field Descriptions for StringMatcher Type"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"example-1-endpoint_mode-is-envoy",text:"Example 1: endpoint_mode is envoy"},{depth:4,slug:"configuration-of-ext-auth-plugin",text:"Configuration of ext-auth Plugin:"},{depth:4,slug:"example-2-ext-auth-plugin-configuration",text:"Example 2: ext-auth Plugin Configuration:"},{depth:3,slug:"example-1-endpoint_mode-is-forward_auth",text:"Example 1: endpoint_mode is forward_auth"},{depth:4,slug:"example-2-ext-auth-plugin-configuration-1",text:"Example 2: ext-auth Plugin Configuration:"},{depth:4,slug:"x-forwarded--header",text:"x-forwarded-* Header"}]},t=c((y,E,g)=>{const{layout:m,...i}=s;return i.file=a,i.url=n,p`${h()}${u(e)}`})});export{t as Content,x as __tla,o as compiledContent,t as default,a as file,s as frontmatter,d as getHeadings,r as rawContent,n as url};
