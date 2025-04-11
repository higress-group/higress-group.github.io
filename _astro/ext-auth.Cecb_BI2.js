import{c as r,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as p,m as h,u,__tla as v}from"./constant.IVguHoYO.js";import{__tla as f}from"./astro/assets-service.BhtN0nM5.js";let t,d,a,s,o,c,n,x=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="feature-description">Feature Description</h2>
<p>The <code dir="auto">ext-auth</code> plugin sends an authorization request to an external authorization service to check if the client request is authorized. When implementing this plugin, it refers to the native <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ext_authz filter</a> of Envoy, and realizes part of the capabilities of the native filter to connect to an HTTP service.</p>
<h2 id="operating-attributes">Operating Attributes</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code>
Plugin Execution Priority: <code dir="auto">360</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>






















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">http_service</code></td><td>object</td><td>Yes</td><td>-</td><td>Configuration for the external authorization service</td></tr><tr><td><code dir="auto">match_type</code></td><td>string</td><td>No</td><td></td><td>Can be <code dir="auto">whitelist</code> or <code dir="auto">blacklist</code></td></tr><tr><td><code dir="auto">match_list</code></td><td>array of MatchRule</td><td>No</td><td></td><td>A list containing (<code dir="auto">match_rule_domain</code>, <code dir="auto">match_rule_path</code>, <code dir="auto">match_rule_type</code>)</td></tr><tr><td><code dir="auto">failure_mode_allow</code></td><td>bool</td><td>No</td><td>false</td><td>When set to true, client requests will be accepted even if the communication with the authorization service fails or the authorization service returns an HTTP 5xx error</td></tr><tr><td><code dir="auto">failure_mode_allow_header_add</code></td><td>bool</td><td>No</td><td>false</td><td>When both <code dir="auto">failure_mode_allow</code> and <code dir="auto">failure_mode_allow_header_add</code> are set to true, if the communication with the authorization service fails or the authorization service returns an HTTP 5xx error, the <code dir="auto">x-envoy-auth-failure-mode-allowed: true</code> header will be added to the request header</td></tr><tr><td><code dir="auto">status_on_error</code></td><td>int</td><td>No</td><td>403</td><td>Sets the HTTP status code returned to the client when the authorization service is inaccessible or has a 5xx status code. The default status code is <code dir="auto">403</code></td></tr></tbody></table>
<p>Configuration fields for each item in <code dir="auto">http_service</code></p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">endpoint_mode</code></td><td>string</td><td>No</td><td>envoy</td><td>Can be <code dir="auto">envoy</code> or <code dir="auto">forward_auth</code></td></tr><tr><td><code dir="auto">endpoint</code></td><td>object</td><td>Yes</td><td>-</td><td>Information about the HTTP service to which the authentication request is sent</td></tr><tr><td><code dir="auto">timeout</code></td><td>int</td><td>No</td><td>1000</td><td>The connection timeout for the <code dir="auto">ext-auth</code> service in milliseconds</td></tr><tr><td><code dir="auto">authorization_request</code></td><td>object</td><td>No</td><td>-</td><td>Configuration for sending the authentication request</td></tr><tr><td><code dir="auto">authorization_response</code></td><td>object</td><td>No</td><td>-</td><td>Configuration for handling the authentication response</td></tr></tbody></table>
<p>Configuration fields for each item in <code dir="auto">endpoint</code></p>






















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">service_name</code></td><td>string</td><td>Yes</td><td>-</td><td>Enter the name of the authorization service, the full FQDN name with service type, e.g., <code dir="auto">ext-auth.dns</code>, <code dir="auto">ext-auth.my-ns.svc.cluster.local</code></td></tr><tr><td><code dir="auto">service_port</code></td><td>int</td><td>No</td><td>80</td><td>Enter the service port of the authorization service</td></tr><tr><td><code dir="auto">service_host</code></td><td>string</td><td>No</td><td>-</td><td>The Host header set when requesting the authorization service. If not filled, it will be the same as the FQDN</td></tr><tr><td><code dir="auto">path_prefix</code></td><td>string</td><td>Required when <code dir="auto">endpoint_mode</code> is <code dir="auto">envoy</code></td><td>-</td><td>When <code dir="auto">endpoint_mode</code> is <code dir="auto">envoy</code>, the request path prefix for the client to send a request to the authorization service</td></tr><tr><td><code dir="auto">request_method</code></td><td>string</td><td>No</td><td>GET</td><td>When <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, the HTTP Method for the client to send a request to the authorization service</td></tr><tr><td><code dir="auto">path</code></td><td>string</td><td>Required when <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code></td><td>-</td><td>When <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, the request path for the client to send a request to the authorization service</td></tr></tbody></table>
<p>Configuration fields for each item in <code dir="auto">authorization_request</code></p>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allowed_headers</code></td><td>array of StringMatcher</td><td>No</td><td>-</td><td>After setting, the client request headers that match the items will be added to the request headers in the authorization service request. In addition to the user-defined header matching rules, the <code dir="auto">Authorization</code> HTTP header will be automatically included in the authorization service request (when <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, the <code dir="auto">X-Forwarded-*</code> request headers will be added)</td></tr><tr><td><code dir="auto">headers_to_add</code></td><td>map[string]string</td><td>No</td><td>-</td><td>Sets the list of request headers to be included in the authorization service request. Please note that the client request headers with the same name will be overwritten</td></tr><tr><td><code dir="auto">with_request_body</code></td><td>bool</td><td>No</td><td>false</td><td>Buffer the client request body and send it to the authentication request (not effective for HTTP Method GET, OPTIONS, HEAD requests)</td></tr><tr><td><code dir="auto">max_request_body_bytes</code></td><td>int</td><td>No</td><td>10MB</td><td>Sets the maximum size of the client request body to be saved in memory. When the client request body reaches the value set in this field, an HTTP 413 status code will be returned and the authorization process will not be started. Note that this setting takes precedence over the <code dir="auto">failure_mode_allow</code> configuration</td></tr></tbody></table>
<p>Configuration fields for each item in <code dir="auto">authorization_response</code></p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allowed_upstream_headers</code></td><td>array of StringMatcher</td><td>No</td><td>-</td><td>The response headers of the authentication request that match the items will be added to the original client request headers. Please note that the request headers with the same name will be overwritten</td></tr><tr><td><code dir="auto">allowed_client_headers</code></td><td>array of StringMatcher</td><td>No</td><td>-</td><td>If not set, when the request is rejected, all the response headers of the authentication request will be added to the client\u2019s response headers. When set, when the request is rejected, the response headers of the authentication request that match the items will be added to the client\u2019s response headers</td></tr></tbody></table>
<p>Configuration fields for each item of <code dir="auto">StringMatcher</code> type. When using <code dir="auto">array of StringMatcher</code>, the StringMatchers defined in the array will be configured in order.</p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">exact</code></td><td>string</td><td>No, one of <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> must be selected</td><td>-</td><td>Exact match</td></tr><tr><td><code dir="auto">prefix</code></td><td>string</td><td>No, one of <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> must be selected</td><td>-</td><td>Prefix match</td></tr><tr><td><code dir="auto">suffix</code></td><td>string</td><td>No, one of <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> must be selected</td><td>-</td><td>Suffix match</td></tr><tr><td><code dir="auto">contains</code></td><td>string</td><td>No, one of <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> must be selected</td><td>-</td><td>Contains</td></tr><tr><td><code dir="auto">regex</code></td><td>string</td><td>No, one of <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> must be selected</td><td>-</td><td>Regular expression match</td></tr></tbody></table>
<p>Configuration fields for each item of <code dir="auto">MatchRule</code> type. When using <code dir="auto">array of MatchRule</code>, the MatchRules defined in the array will be configured in order.</p>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">match_rule_domain</code></td><td>string</td><td>No</td><td>-</td><td>The domain of the matching rule, supports wildcard patterns, e.g., <code dir="auto">*.bar.com</code></td></tr><tr><td><code dir="auto">match_rule_method</code></td><td>[]string</td><td>No</td><td>-</td><td>Matching rule for the request method</td></tr><tr><td><code dir="auto">match_rule_path</code></td><td>string</td><td>No</td><td>-</td><td>The rule for matching the request path</td></tr><tr><td><code dir="auto">match_rule_type</code></td><td>string</td><td>No</td><td>-</td><td>The type of the rule for matching the request path, can be <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code></td></tr></tbody></table>
<h3 id="differences-between-the-two-endpoint_mode">Differences between the two <code dir="auto">endpoint_mode</code></h3>
<p>When <code dir="auto">endpoint_mode</code> is <code dir="auto">envoy</code>, the authentication request will use the original request\u2019s HTTP Method and the configured <code dir="auto">path_prefix</code> as the request path prefix, concatenated with the original request path.</p>
<p>When <code dir="auto">endpoint_mode</code> is <code dir="auto">forward_auth</code>, the authentication request will use the configured <code dir="auto">request_method</code> as the HTTP Method and the configured <code dir="auto">path</code> as the request path. Higress will automatically generate and send the following headers to the authorization service:</p>

























<table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">x-forwarded-proto</code></td><td>The scheme of the original request, such as http/https</td></tr><tr><td><code dir="auto">x-forwarded-method</code></td><td>The method of the original request, such as get/post/delete/patch</td></tr><tr><td><code dir="auto">x-forwarded-host</code></td><td>The host of the original request</td></tr><tr><td><code dir="auto">x-forwarded-uri</code></td><td>The path of the original request, including path parameters, e.g., <code dir="auto">/v1/app?test=true</code></td></tr></tbody></table>
<h3 id="blacklist-and-whitelist-modes">Blacklist and Whitelist Modes</h3>
<p>Supports blacklist and whitelist mode configuration. The default is the whitelist mode. If the whitelist is empty, all requests need to be verified. The matching domain supports wildcard domains such as <code dir="auto">*.bar.com</code>, and the matching rule supports <code dir="auto">exact</code>, <code dir="auto">prefix</code>, <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code>.</p>
<p><strong>Whitelist Mode</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Configuration for the whitelist mode. Requests that match the whitelist rules do not need verification.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">match_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'whitelist'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">match_list</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Requests with the domain name api.example.com and a path prefixed with /public do not need verification.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'api.example.com'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/public'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'prefix'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># For the image resource server images.example.com, all GET requests do not need verification.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'images.example.com'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_method</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"GET"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># For all domains, HEAD requests with an exact path match of /health-check do not need verification.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_method</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"HEAD"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/health-check'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'exact'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Configuration for the whitelist mode. Requests that match the whitelist rules do not need verification.\x7Fmatch_type: &#x27;whitelist&#x27;\x7Fmatch_list:\x7F  # Requests with the domain name api.example.com and a path prefixed with /public do not need verification.\x7F  - match_rule_domain: &#x27;api.example.com&#x27;\x7F    match_rule_path: &#x27;/public&#x27;\x7F    match_rule_type: &#x27;prefix&#x27;\x7F  # For the image resource server images.example.com, all GET requests do not need verification.\x7F  - match_rule_domain: &#x27;images.example.com&#x27;\x7F    match_rule_method: [&#x22;GET&#x22;]\x7F  # For all domains, HEAD requests with an exact path match of /health-check do not need verification.\x7F  - match_rule_method: [&#x22;HEAD&#x22;]\x7F    match_rule_path: &#x27;/health-check&#x27;\x7F    match_rule_type: &#x27;exact&#x27;"><div></div></button></div></figure></div>
<p><strong>Blacklist Mode</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Configuration for the blacklist mode. Requests that match the blacklist rules need verification.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">match_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'blacklist'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">match_list</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Requests with the domain name admin.example.com and a path prefixed with /sensitive need verification.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'admin.example.com'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/sensitive'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'prefix'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># For all domains, DELETE requests with an exact path match of /user need verification.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_method</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"DELETE"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/user'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'exact'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># For the domain legacy.example.com, all POST requests need verification.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'legacy.example.com'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">match_rule_method</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"POST"</span><span style="--0:#E1E4E8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Configuration for the blacklist mode. Requests that match the blacklist rules need verification.\x7Fmatch_type: &#x27;blacklist&#x27;\x7Fmatch_list:\x7F  # Requests with the domain name admin.example.com and a path prefixed with /sensitive need verification.\x7F  - match_rule_domain: &#x27;admin.example.com&#x27;\x7F    match_rule_path: &#x27;/sensitive&#x27;\x7F    match_rule_type: &#x27;prefix&#x27;\x7F  # For all domains, DELETE requests with an exact path match of /user need verification.\x7F  - match_rule_method: [&#x22;DELETE&#x22;]\x7F    match_rule_path: &#x27;/user&#x27;\x7F    match_rule_type: &#x27;exact&#x27;\x7F  # For the domain legacy.example.com, all POST requests need verification.\x7F  - match_rule_domain: &#x27;legacy.example.com&#x27;\x7F    match_rule_method: [&#x22;POST&#x22;]"><div></div></button></div></figure></div>
<h2 id="configuration-examples">Configuration Examples</h2>
<p>Assume that in Kubernetes, the <code dir="auto">ext-auth</code> service has a <code dir="auto">serviceName</code> of <code dir="auto">ext-auth</code>, a port of <code dir="auto">8090</code>, a path of <code dir="auto">/auth</code>, and is in the <code dir="auto">backend</code> namespace.</p>
<h3 id="when-endpoint_mode-is-envoy">When endpoint_mode is envoy</h3>
<h4 id="example-1">Example 1</h4>
<p>Configuration of the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  endpoint_mode: envoy\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path_prefix: /auth\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>When using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p><strong>When the request to the <code dir="auto">ext-auth</code> service is successful</strong>:</p>
<p>The <code dir="auto">ext-auth</code> service will receive the following authorization request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\x7FHost: ext-auth.backend.svc.cluster.local\x7FAuthorization: xxx\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><strong>When the request to the <code dir="auto">ext-auth</code> service fails</strong>:</p>
<p>When the response from the <code dir="auto">ext-auth</code> service is 5xx, the client will receive an HTTP response code of 403 and all the response headers returned by the <code dir="auto">ext-auth</code> service.</p>
<p>If the <code dir="auto">ext-auth</code> service returns response headers of <code dir="auto">x-auth-version: 1.0</code> and <code dir="auto">x-auth-failed: true</code>, they will be passed to the client.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-failed: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Tue, 16 Jul 2024 00:19:41 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fx-auth-version: 1.0\x7Fx-auth-failed: true\x7Fdate: Tue, 16 Jul 2024 00:19:41 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>
<p>When the <code dir="auto">ext-auth</code> service is inaccessible or the status code is 5xx, the client request will be rejected with the status code configured in <code dir="auto">status_on_error</code>.</p>
<p>When the <code dir="auto">ext-auth</code> service returns other HTTP status codes, the client request will be rejected with the returned status code. If <code dir="auto">allowed_client_headers</code> is configured, the response headers with corresponding matching items will be added to the client\u2019s response.</p>
<h4 id="example-2">Example 2</h4>
<p>Configuration of the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers_to_add</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">x-envoy-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_upstream_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-domain.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  authorization_request:\x7F    allowed_headers:\x7F      - exact: x-auth-version\x7F    headers_to_add:\x7F      x-envoy-header: true\x7F  authorization_response:\x7F    allowed_upstream_headers:\x7F      - exact: x-user-id\x7F      - exact: x-auth-version\x7F  endpoint_mode: envoy\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_host: my-domain.local\x7F    service_port: 8090\x7F    path_prefix: /auth\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>When using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p>The <code dir="auto">ext-auth</code> service will receive the following authorization request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: my-domain.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Auth-Version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-header: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\x7FHost: my-domain.local\x7FAuthorization: xxx\x7FX-Auth-Version: 1.0\x7Fx-envoy-header: true\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p>If the response headers returned by the <code dir="auto">ext-auth</code> service contain <code dir="auto">x-user-id</code> and <code dir="auto">x-auth-version</code>, these two headers will be included in the request when the gateway calls the upstream.</p>
<h3 id="when-endpoint_mode-is-forward_auth">When endpoint_mode is forward_auth</h3>
<h4 id="example-1-1">Example 1</h4>
<p>Configuration of the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">forward_auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">request_method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  endpoint_mode: forward_auth\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path: /auth\x7F    request_method: POST\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>When using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: foo.bar.com"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22; -H &#x22;Host: foo.bar.com&#x22;"><div></div></button></div></figure></div>
<p><strong>When the request to the <code dir="auto">ext-auth</code> service is successful</strong>:</p>
<p>The <code dir="auto">ext-auth</code> service will receive the following authorization request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Proto: HTTP</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Host: foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Method: GET</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth HTTP/1.1\x7FHost: ext-auth.backend.svc.cluster.local\x7FAuthorization: xxx\x7FX-Forwarded-Proto: HTTP\x7FX-Forwarded-Host: foo.bar.com\x7FX-Forwarded-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\x7FX-Forwarded-Method: GET\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><strong>When the request to the <code dir="auto">ext-auth</code> service fails</strong>:</p>
<p>When the response from the <code dir="auto">ext-auth</code> service is 5xx, the client will receive an HTTP response code of 403 and all the response headers returned by the <code dir="auto">ext-auth</code> service.</p>
<p>If the <code dir="auto">ext-auth</code> service returns response headers of <code dir="auto">x-auth-version: 1.0</code> and <code dir="auto">x-auth-failed: true</code>, they will be passed to the client.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-failed: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Tue, 16 Jul 2024 00:19:41 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fx-auth-version: 1.0\x7Fx-auth-failed: true\x7Fdate: Tue, 16 Jul 2024 00:19:41 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>
<p>When the <code dir="auto">ext-auth</code> service is inaccessible or the status code is 5xx, the client request will be rejected with the status code configured in <code dir="auto">status_on_error</code>.</p>
<p>When the <code dir="auto">ext-auth</code> service returns other HTTP status codes, the client request will be rejected with the returned status code. If <code dir="auto">allowed_client_headers</code> is configured, the response headers with corresponding matching items will be added to the client\u2019s response.</p>
<h4 id="example-2-1">Example 2</h4>
<p>Configuration of the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers_to_add</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">x-envoy-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_upstream_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">forward_auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-domain.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">request_method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  authorization_request:\x7F    allowed_headers:\x7F      - exact: x-auth-version\x7F    headers_to_add:\x7F      x-envoy-header: true\x7F  authorization_response:\x7F    allowed_upstream_headers:\x7F      - exact: x-user-id\x7F      - exact: x-auth-version\x7F  endpoint_mode: forward_auth\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_host: my-domain.local\x7F    service_port: 8090\x7F    path: /auth\x7F    request_method: POST\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>When using the following request to the gateway after enabling the <code dir="auto">ext-auth</code> plugin:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"X-Auth-Version: 1.0"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: foo.bar.com"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22; -H &#x22;X-Auth-Version: 1.0&#x22; -H &#x22;Host: foo.bar.com&#x22;"><div></div></button></div></figure></div>
<p>The <code dir="auto">ext-auth</code> service will receive the following authorization request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: my-domain.local</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Proto: HTTP</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Host: foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Forwarded-Method: GET</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Auth-Version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-header: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth HTTP/1.1\x7FHost: my-domain.local\x7FAuthorization: xxx\x7FX-Forwarded-Proto: HTTP\x7FX-Forwarded-Host: foo.bar.com\x7FX-Forwarded-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\x7FX-Forwarded-Method: GET\x7FX-Auth-Version: 1.0\x7Fx-envoy-header: true\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p>If the response headers returned by the <code dir="auto">ext-auth</code> service contain <code dir="auto">x-user-id</code> and <code dir="auto">x-auth-version</code>, these two headers will be included in the request when the gateway calls the upstream.</p>`,s={title:"External Authentication",keywords:["higress","auth"],description:"The Ext Authentication plugin implements the capability to call external authorization services for authentication and authorization."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/ext-auth.md",n=void 0,c=function(){return"\n## Feature Description\n\nThe `ext-auth` plugin sends an authorization request to an external authorization service to check if the client request is authorized. When implementing this plugin, it refers to the native [ext_authz filter](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter) of Envoy, and realizes part of the capabilities of the native filter to connect to an HTTP service.\n\n## Operating Attributes\n\nPlugin Execution Phase: `Authentication Phase`\nPlugin Execution Priority: `360`\n\n\n## Configuration Fields\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `http_service` | object | Yes | - | Configuration for the external authorization service |\n| `match_type` | string | No |  | Can be `whitelist` or `blacklist` |\n| `match_list` | array of MatchRule | No |  | A list containing (`match_rule_domain`, `match_rule_path`, `match_rule_type`) |\n| `failure_mode_allow` | bool | No | false | When set to true, client requests will be accepted even if the communication with the authorization service fails or the authorization service returns an HTTP 5xx error |\n| `failure_mode_allow_header_add` | bool | No | false | When both `failure_mode_allow` and `failure_mode_allow_header_add` are set to true, if the communication with the authorization service fails or the authorization service returns an HTTP 5xx error, the `x-envoy-auth-failure-mode-allowed: true` header will be added to the request header |\n| `status_on_error` | int | No | 403 | Sets the HTTP status code returned to the client when the authorization service is inaccessible or has a 5xx status code. The default status code is `403` |\n\nConfiguration fields for each item in `http_service`\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `endpoint_mode` | string | No | envoy | Can be `envoy` or `forward_auth` |\n| `endpoint` | object | Yes | - | Information about the HTTP service to which the authentication request is sent |\n| `timeout` | int | No | 1000 | The connection timeout for the `ext-auth` service in milliseconds |\n| `authorization_request` | object | No | - | Configuration for sending the authentication request |\n| `authorization_response` | object | No | - | Configuration for handling the authentication response |\n\nConfiguration fields for each item in `endpoint`\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `service_name` | string | Yes | - | Enter the name of the authorization service, the full FQDN name with service type, e.g., `ext-auth.dns`, `ext-auth.my-ns.svc.cluster.local` |\n| `service_port` | int | No | 80 | Enter the service port of the authorization service |\n| `service_host` | string | No | - | The Host header set when requesting the authorization service. If not filled, it will be the same as the FQDN |\n| `path_prefix` | string | Required when `endpoint_mode` is `envoy` | - | When `endpoint_mode` is `envoy`, the request path prefix for the client to send a request to the authorization service |\n| `request_method` | string | No | GET | When `endpoint_mode` is `forward_auth`, the HTTP Method for the client to send a request to the authorization service |\n| `path` | string | Required when `endpoint_mode` is `forward_auth` | - | When `endpoint_mode` is `forward_auth`, the request path for the client to send a request to the authorization service |\n\nConfiguration fields for each item in `authorization_request`\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `allowed_headers` | array of StringMatcher | No | - | After setting, the client request headers that match the items will be added to the request headers in the authorization service request. In addition to the user-defined header matching rules, the `Authorization` HTTP header will be automatically included in the authorization service request (when `endpoint_mode` is `forward_auth`, the `X-Forwarded-*` request headers will be added) |\n| `headers_to_add` | map[string]string | No | - | Sets the list of request headers to be included in the authorization service request. Please note that the client request headers with the same name will be overwritten |\n| `with_request_body` | bool | No | false | Buffer the client request body and send it to the authentication request (not effective for HTTP Method GET, OPTIONS, HEAD requests) |\n| `max_request_body_bytes` | int | No | 10MB | Sets the maximum size of the client request body to be saved in memory. When the client request body reaches the value set in this field, an HTTP 413 status code will be returned and the authorization process will not be started. Note that this setting takes precedence over the `failure_mode_allow` configuration |\n\nConfiguration fields for each item in `authorization_response`\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `allowed_upstream_headers` | array of StringMatcher | No | - | The response headers of the authentication request that match the items will be added to the original client request headers. Please note that the request headers with the same name will be overwritten |\n| `allowed_client_headers` | array of StringMatcher | No | - | If not set, when the request is rejected, all the response headers of the authentication request will be added to the client's response headers. When set, when the request is rejected, the response headers of the authentication request that match the items will be added to the client's response headers |\n\nConfiguration fields for each item of `StringMatcher` type. When using `array of StringMatcher`, the StringMatchers defined in the array will be configured in order.\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `exact` | string | No, one of `exact`, `prefix`, `suffix`, `contains`, `regex` must be selected | - | Exact match |\n| `prefix` | string | No, one of `exact`, `prefix`, `suffix`, `contains`, `regex` must be selected | - | Prefix match |\n| `suffix` | string | No, one of `exact`, `prefix`, `suffix`, `contains`, `regex` must be selected | - | Suffix match |\n| `contains` | string | No, one of `exact`, `prefix`, `suffix`, `contains`, `regex` must be selected | - | Contains |\n| `regex` | string | No, one of `exact`, `prefix`, `suffix`, `contains`, `regex` must be selected | - | Regular expression match |\n\nConfiguration fields for each item of `MatchRule` type. When using `array of MatchRule`, the MatchRules defined in the array will be configured in order.\n\n| Name | Data Type | Required | Default Value | Description |\n| --- | --- | --- | --- | --- |\n| `match_rule_domain` | string | No | - | The domain of the matching rule, supports wildcard patterns, e.g., `*.bar.com` |\n| `match_rule_method` | []string | No | - | Matching rule for the request method |\n| `match_rule_path` | string | No | - | The rule for matching the request path |\n| `match_rule_type` | string | No | - | The type of the rule for matching the request path, can be `exact`, `prefix`, `suffix`, `contains`, `regex` |\n\n### Differences between the two `endpoint_mode`\n\nWhen `endpoint_mode` is `envoy`, the authentication request will use the original request's HTTP Method and the configured `path_prefix` as the request path prefix, concatenated with the original request path.\n\nWhen `endpoint_mode` is `forward_auth`, the authentication request will use the configured `request_method` as the HTTP Method and the configured `path` as the request path. Higress will automatically generate and send the following headers to the authorization service:\n\n| Header | Description |\n| --- | --- |\n| `x-forwarded-proto` | The scheme of the original request, such as http/https |\n| `x-forwarded-method` | The method of the original request, such as get/post/delete/patch |\n| `x-forwarded-host` | The host of the original request |\n| `x-forwarded-uri` | The path of the original request, including path parameters, e.g., `/v1/app?test=true` |\n\n### Blacklist and Whitelist Modes\n\nSupports blacklist and whitelist mode configuration. The default is the whitelist mode. If the whitelist is empty, all requests need to be verified. The matching domain supports wildcard domains such as `*.bar.com`, and the matching rule supports `exact`, `prefix`, `suffix`, `contains`, `regex`.\n\n**Whitelist Mode**\n\n```yaml\n# Configuration for the whitelist mode. Requests that match the whitelist rules do not need verification.\nmatch_type: 'whitelist'\nmatch_list:\n  # Requests with the domain name api.example.com and a path prefixed with /public do not need verification.\n  - match_rule_domain: 'api.example.com'\n    match_rule_path: '/public'\n    match_rule_type: 'prefix'\n  # For the image resource server images.example.com, all GET requests do not need verification.\n  - match_rule_domain: 'images.example.com'\n    match_rule_method: [\"GET\"]\n  # For all domains, HEAD requests with an exact path match of /health-check do not need verification.\n  - match_rule_method: [\"HEAD\"]\n    match_rule_path: '/health-check'\n    match_rule_type: 'exact'\n```\n\n**Blacklist Mode**\n\n```yaml\n# Configuration for the blacklist mode. Requests that match the blacklist rules need verification.\nmatch_type: 'blacklist'\nmatch_list:\n  # Requests with the domain name admin.example.com and a path prefixed with /sensitive need verification.\n  - match_rule_domain: 'admin.example.com'\n    match_rule_path: '/sensitive'\n    match_rule_type: 'prefix'\n  # For all domains, DELETE requests with an exact path match of /user need verification.\n  - match_rule_method: [\"DELETE\"]\n    match_rule_path: '/user'\n    match_rule_type: 'exact'\n  # For the domain legacy.example.com, all POST requests need verification.\n  - match_rule_domain: 'legacy.example.com'\n    match_rule_method: [\"POST\"]\n```\n\n\n## Configuration Examples\n\nAssume that in Kubernetes, the `ext-auth` service has a `serviceName` of `ext-auth`, a port of `8090`, a path of `/auth`, and is in the `backend` namespace.\n\n### When endpoint_mode is envoy\n\n#### Example 1\n\nConfiguration of the `ext-auth` plugin:\n\n```yaml\nhttp_service:\n  endpoint_mode: envoy\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path_prefix: /auth\n  timeout: 1000\n```\n\nWhen using the following request to the gateway after enabling the `ext-auth` plugin:\n\n```shell\ncurl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H \"foo: bar\" -H \"Authorization: xxx\"\n```\n\n**When the request to the `ext-auth` service is successful**:\n\nThe `ext-auth` service will receive the following authorization request:\n\n```\nPOST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\nHost: ext-auth.backend.svc.cluster.local\nAuthorization: xxx\nContent-Length: 0\n```\n\n**When the request to the `ext-auth` service fails**:\n\nWhen the response from the `ext-auth` service is 5xx, the client will receive an HTTP response code of 403 and all the response headers returned by the `ext-auth` service.\n\nIf the `ext-auth` service returns response headers of `x-auth-version: 1.0` and `x-auth-failed: true`, they will be passed to the client.\n\n```\nHTTP/1.1 403 Forbidden\nx-auth-version: 1.0\nx-auth-failed: true\ndate: Tue, 16 Jul 2024 00:19:41 GMT\nserver: istio-envoy\ncontent-length: 0\n```\n\nWhen the `ext-auth` service is inaccessible or the status code is 5xx, the client request will be rejected with the status code configured in `status_on_error`.\n\nWhen the `ext-auth` service returns other HTTP status codes, the client request will be rejected with the returned status code. If `allowed_client_headers` is configured, the response headers with corresponding matching items will be added to the client's response.\n\n#### Example 2\n\nConfiguration of the `ext-auth` plugin:\n\n```yaml\nhttp_service:\n  authorization_request:\n    allowed_headers:\n      - exact: x-auth-version\n    headers_to_add:\n      x-envoy-header: true\n  authorization_response:\n    allowed_upstream_headers:\n      - exact: x-user-id\n      - exact: x-auth-version\n  endpoint_mode: envoy\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_host: my-domain.local\n    service_port: 8090\n    path_prefix: /auth\n  timeout: 1000\n```\n\nWhen using the following request to the gateway after enabling the `ext-auth` plugin:\n\n```shell\ncurl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H \"foo: bar\" -H \"Authorization: xxx\"\n```\n\nThe `ext-auth` service will receive the following authorization request:\n\n```\nPOST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\nHost: my-domain.local\nAuthorization: xxx\nX-Auth-Version: 1.0\nx-envoy-header: true\nContent-Length: 0\n```\n\nIf the response headers returned by the `ext-auth` service contain `x-user-id` and `x-auth-version`, these two headers will be included in the request when the gateway calls the upstream.\n\n### When endpoint_mode is forward_auth\n\n#### Example 1\n\nConfiguration of the `ext-auth` plugin:\n\n```yaml\nhttp_service:\n  endpoint_mode: forward_auth\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path: /auth\n    request_method: POST\n  timeout: 1000\n```\n\nWhen using the following request to the gateway after enabling the `ext-auth` plugin:\n\n```shell\ncurl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H \"foo: bar\" -H \"Authorization: xxx\" -H \"Host: foo.bar.com\"\n```\n\n**When the request to the `ext-auth` service is successful**:\n\nThe `ext-auth` service will receive the following authorization request:\n\n```\nPOST /auth HTTP/1.1\nHost: ext-auth.backend.svc.cluster.local\nAuthorization: xxx\nX-Forwarded-Proto: HTTP\nX-Forwarded-Host: foo.bar.com\nX-Forwarded-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\nX-Forwarded-Method: GET\nContent-Length: 0\n```\n\n**When the request to the `ext-auth` service fails**:\n\nWhen the response from the `ext-auth` service is 5xx, the client will receive an HTTP response code of 403 and all the response headers returned by the `ext-auth` service.\n\nIf the `ext-auth` service returns response headers of `x-auth-version: 1.0` and `x-auth-failed: true`, they will be passed to the client.\n\n```\nHTTP/1.1 403 Forbidden\nx-auth-version: 1.0\nx-auth-failed: true\ndate: Tue, 16 Jul 2024 00:19:41 GMT\nserver: istio-envoy\ncontent-length: 0\n```\n\nWhen the `ext-auth` service is inaccessible or the status code is 5xx, the client request will be rejected with the status code configured in `status_on_error`.\n\nWhen the `ext-auth` service returns other HTTP status codes, the client request will be rejected with the returned status code. If `allowed_client_headers` is configured, the response headers with corresponding matching items will be added to the client's response.\n\n#### Example 2\n\nConfiguration of the `ext-auth` plugin:\n\n```yaml\nhttp_service:\n  authorization_request:\n    allowed_headers:\n      - exact: x-auth-version\n    headers_to_add:\n      x-envoy-header: true\n  authorization_response:\n    allowed_upstream_headers:\n      - exact: x-user-id\n      - exact: x-auth-version\n  endpoint_mode: forward_auth\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_host: my-domain.local\n    service_port: 8090\n    path: /auth\n    request_method: POST\n  timeout: 1000\n```\n\nWhen using the following request to the gateway after enabling the `ext-auth` plugin:\n\n```shell\ncurl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H \"foo: bar\" -H \"Authorization: xxx\" -H \"X-Auth-Version: 1.0\" -H \"Host: foo.bar.com\"\n```\n\nThe `ext-auth` service will receive the following authorization request:\n\n```\nPOST /auth HTTP/1.1\nHost: my-domain.local\nAuthorization: xxx\nX-Forwarded-Proto: HTTP\nX-Forwarded-Host: foo.bar.com\nX-Forwarded-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\nX-Forwarded-Method: GET\nX-Auth-Version: 1.0\nx-envoy-header: true\nContent-Length: 0\n```\n\nIf the response headers returned by the `ext-auth` service contain `x-user-id` and `x-auth-version`, these two headers will be included in the request when the gateway calls the upstream."},d=function(){return e},o=function(){return[{depth:2,slug:"feature-description",text:"Feature Description"},{depth:2,slug:"operating-attributes",text:"Operating Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"differences-between-the-two-endpoint_mode",text:"Differences between the two endpoint_mode"},{depth:3,slug:"blacklist-and-whitelist-modes",text:"Blacklist and Whitelist Modes"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"when-endpoint_mode-is-envoy",text:"When endpoint_mode is envoy"},{depth:4,slug:"example-1",text:"Example 1"},{depth:4,slug:"example-2",text:"Example 2"},{depth:3,slug:"when-endpoint_mode-is-forward_auth",text:"When endpoint_mode is forward_auth"},{depth:4,slug:"example-1-1",text:"Example 1"},{depth:4,slug:"example-2-1",text:"Example 2"}]},t=r((E,y,m)=>{const{layout:_,...i}=s;return i.file=a,i.url=n,p`${h()}${u(e)}`})});export{t as Content,x as __tla,d as compiledContent,t as default,a as file,s as frontmatter,o as getHeadings,c as rawContent,n as url};
