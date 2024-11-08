import{c as o,__tla as d}from"./astro-component.DIa0fJKh.js";import{r,m as E,u as v,__tla as y}from"./constant.Cq9jJUDl.js";import{__tla as h}from"./astro/assets-service.tyfV9CK3.js";let e,l,a,n,p,c,t,g=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">cors</code> plugin can enable CORS (Cross-Origin Resource Sharing) HTTP response headers for the server.</p>
<h2 id="execution-attributes">Execution Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Authorization Phase</code><br>
Plugin execution priority: <code dir="auto">340</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>





























































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>allow_origins</td><td>array of string</td><td>Optional</td><td>*</td><td>Allowed Origins for cross-origin access, formatted as scheme://host:port
, for example, <a href="http://example.com:8081" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://example.com:8081</a>. When allow_credentials is false, * can be used to allow all Origins through.</td></tr><tr><td>allow_origin_patterns</td><td>array of string</td><td>Optional</td><td>-</td><td>Patterns for matching allowed Origins for cross-origin access, using * to match domain or port, <br>for example http://<em>.example.com \u2014 matches domain, http://</em>.example.com:[8080,9090] \u2014 matches domain and specified ports, http://<em>.example.com:[</em>] \u2014 matches domain and all ports. A single * indicates matching all domains and ports.</td></tr><tr><td>allow_methods</td><td>array of string</td><td>Optional</td><td>GET, PUT, POST, DELETE, PATCH, OPTIONS</td><td>Allowed Methods for cross-origin access, for example: GET, POST, etc. * can be used to indicate all Methods are allowed.</td></tr><tr><td>allow_headers</td><td>array of string</td><td>Optional</td><td>DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,<br>If-Modified-Since,Cache-Control,Content-Type,Authorization</td><td>Allowed Headers for the requester to carry that are not part of CORS specifications during cross-origin access. * can be used to indicate any Header is allowed.</td></tr><tr><td>expose_headers</td><td>array of string</td><td>Optional</td><td>-</td><td>Allowed Headers for the responder to carry that are not part of CORS specifications during cross-origin access. * can be used to indicate any Header is allowed.</td></tr><tr><td>allow_credentials</td><td>bool</td><td>Optional</td><td>false</td><td>Whether to allow the requester to carry credentials (e.g. Cookies) during cross-origin access. According to CORS specifications, if this option is set to true, * cannot be used for allow_origins, replace it with allow_origin_patterns.</td></tr><tr><td>max_age</td><td>number</td><td>Optional</td><td>86400 seconds</td><td>Maximum time for browsers to cache CORS results, in seconds. <br>Within this time frame, browsers will reuse the previous inspection results.</td></tr></tbody></table>
<blockquote>
<p>Note</p>
<ul>
<li>allow_credentials is a very sensitive option, please enable it with caution. Once enabled, allow_credentials and allow_origins cannot both be <em>, if both are set, the allow_origins value of "</em>" takes effect.</li>
<li>allow_origins and allow_origin_patterns can be set simultaneously. First, check if allow_origins matches, then check if allow_origin_patterns matches.</li>
<li>Illegal CORS requests will return HTTP status code 403, with the response body content as \u201CInvalid CORS request\u201D.</li>
</ul>
</blockquote>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="allow-all-cross-origin-access-without-allowing-the-requester-to-carry-credentials">Allow all cross-origin access, without allowing the requester to carry credentials</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origins:\x7F  - &#x27;*&#x27;\x7Fallow_methods:\x7F  - &#x27;*&#x27;\x7Fallow_headers:\x7F  - &#x27;*&#x27;\x7Fexpose_headers:\x7F  - &#x27;*&#x27;\x7Fallow_credentials: false\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h3 id="allow-all-cross-origin-access-while-allowing-the-requester-to-carry-credentials">Allow all cross-origin access, while allowing the requester to carry credentials</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origin_patterns</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origin_patterns:\x7F  - &#x27;*&#x27;\x7Fallow_methods:\x7F  - &#x27;*&#x27;\x7Fallow_headers:\x7F  - &#x27;*&#x27;\x7Fexpose_headers:\x7F  - &#x27;*&#x27;\x7Fallow_credentials: true\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h3 id="allow-specific-subdomains-specific-methods-and-specific-request-headers-for-cross-origin-access-while-allowing-the-requester-to-carry-credentials">Allow specific subdomains, specific methods, and specific request headers for cross-origin access, while allowing the requester to carry credentials</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origin_patterns</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.org:[8080,9090]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">PUT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DELETE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Token</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Authorization</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origin_patterns:\x7F  - http://*.example.com\x7F  - http://*.example.org:[8080,9090]\x7Fallow_methods:\x7F  - GET\x7F  - PUT\x7F  - POST\x7F  - DELETE\x7Fallow_headers:\x7F  - Token\x7F  - Content-Type\x7F  - Authorization\x7Fexpose_headers:\x7F  - &#x27;*&#x27;\x7Fallow_credentials: true\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h2 id="testing">Testing</h2>
<h3 id="test-configuration">Test Configuration</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.org</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/upstream-vhost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"httpbin.org"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTP</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasm-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfigDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_origins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://httpbin.example.net</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_origin_patterns</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.com:[*]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.org:[9090,8080]</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">PATCH</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Token</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Authorization</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Custom-Header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Env-UTM</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3600</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">ingress-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: mcp-cors-httpbin\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    - domain: httpbin.org\x7F      name: httpbin\x7F      port: 80\x7F      type: dns\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: httpbin.dns\x7F    higress.io/upstream-vhost: &#x22;httpbin.org&#x22;\x7F    higress.io/backend-protocol: HTTP\x7F  name: ingress-cors-httpbin\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: httpbin.example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              resource:\x7F                apiGroup: networking.higress.io\x7F                kind: McpBridge\x7F                name: mcp-cors-httpbin\x7F            path: /\x7F            pathType: Prefix\x7F---\x7FapiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: wasm-cors-httpbin\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfigDisable: true\x7F  matchRules:\x7F    - config:\x7F        allow_origins:\x7F          - http://httpbin.example.net\x7F        allow_origin_patterns:\x7F          - http://*.example.com:[*]\x7F          - http://*.example.org:[9090,8080]\x7F        allow_methods:\x7F          - GET\x7F          - POST\x7F          - PATCH\x7F        allow_headers:\x7F          - Content-Type\x7F          - Token\x7F          - Authorization\x7F        expose_headers:\x7F          - X-Custom-Header\x7F          - X-Env-UTM\x7F        allow_credentials: true\x7F        max_age: 3600\x7F      configDisable: false\x7F      ingress:\x7F        - ingress-cors-httpbin\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0\x7F  imagePullPolicy: Always"><div></div></button></div></figure></div>
<h3 id="request-testing">Request Testing</h3>
<h4 id="simple-request">Simple Request</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> access-control-allow-origin: http://httpbin2.example.org:9090</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> access-control-expose-headers: X-Custom-Header,X-Env-UTM</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> access-control-allow-credentials: true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H &#x22;Host: httpbin.example.com&#x22; http://127.0.0.1/anything/get\\?foo\\=1\x7F< HTTP/1.1 200 OK\x7F> x-cors-version: 1.0.0\x7F> access-control-allow-origin: http://httpbin2.example.org:9090\x7F> access-control-expose-headers: X-Custom-Header,X-Env-UTM\x7F> access-control-allow-credentials: true"><div></div></button></div></figure></div>
<h4 id="preflight-request">Preflight Request</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: POST"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Headers: Content-Type, Token"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-origin: http://httpbin2.example.org:9090</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-methods: GET,POST,PATCH</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-headers: Content-Type,Token,Authorization</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-expose-headers: X-Custom-Header,X-Env-UTM</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-credentials: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-max-age: 3600</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:41:28 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Closing connection 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: POST&#x22; -H &#x22;Access-Control-Request-Headers: Content-Type, Token&#x22; http://127.0.0.1/anything/get\\?foo\\=1\x7F< HTTP/1.1 200 OK\x7F< x-cors-version: 1.0.0\x7F< access-control-allow-origin: http://httpbin2.example.org:9090\x7F< access-control-allow-methods: GET,POST,PATCH\x7F< access-control-allow-headers: Content-Type,Token,Authorization\x7F< access-control-expose-headers: X-Custom-Header,X-Env-UTM\x7F< access-control-allow-credentials: true\x7F< access-control-max-age: 3600\x7F< date: Tue, 23 May 2023 11:41:28 GMT\x7F< server: istio-envoy\x7F< content-length: 0\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7F* Closing connection 0"><div></div></button></div></figure></div>
<h4 id="illegal-cors-origin-preflight-request">Illegal CORS Origin Preflight Request</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: GET"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">HTTP/1.1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">403</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 70</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: text/plain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:27:01 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Invalid</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CORS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">request</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org&#x22; -H &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: GET&#x22; http://127.0.0.1/anything/get\\?foo\\=1\x7F HTTP/1.1 403 Forbidden\x7F< content-length: 70\x7F< content-type: text/plain\x7F< x-cors-version: 1.0.0\x7F< date: Tue, 23 May 2023 11:27:01 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7FInvalid CORS request"><div></div></button></div></figure></div>
<h4 id="illegal-cors-method-preflight-request">Illegal CORS Method Preflight Request</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: DELETE"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 49</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: text/plain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:28:51 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Invalid</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CORS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">request</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: DELETE&#x22; http://127.0.0.1/anything/get\\?foo\\=1\x7F< HTTP/1.1 403 Forbidden\x7F< content-length: 49\x7F< content-type: text/plain\x7F< x-cors-version: 1.0.0\x7F< date: Tue, 23 May 2023 11:28:51 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7FInvalid CORS request"><div></div></button></div></figure></div>
<h4 id="illegal-cors-header-preflight-request">Illegal CORS Header Preflight Request</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: GET"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Headers: TokenView"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 52</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: text/plain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:31:03 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Invalid</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CORS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">request</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: GET&#x22; -H &#x22;Access-Control-Request-Headers: TokenView&#x22; http://127.0.0.1/anything/get\\?foo\\=1\x7F< HTTP/1.1 403 Forbidden\x7F< content-length: 52\x7F< content-type: text/plain\x7F< x-cors-version: 1.0.0\x7F< date: Tue, 23 May 2023 11:31:03 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7FInvalid CORS request"><div></div></button></div></figure></div>
<h2 id="reference-documents">Reference Documents</h2>
<ul>
<li><a href="https://www.ruanyifeng.com/blog/2016/04/cors.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.ruanyifeng.com/blog/2016/04/cors.html</a></li>
<li><a href="https://fetch.spec.whatwg.org/#http-cors-protocol" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://fetch.spec.whatwg.org/#http-cors-protocol</a></li>
</ul>`,n={title:"Cross-Origin Resource Sharing",keywords:["higress","cors"],description:"Cross-Origin Resource Sharing plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/cors.md",t=void 0,c=function(){return`## Function Description
The \`cors\` plugin can enable CORS (Cross-Origin Resource Sharing) HTTP response headers for the server.

## Execution Attributes
Plugin execution phase: \`Authorization Phase\`  
Plugin execution priority: \`340\`

## Configuration Fields
| Name                  | Data Type        | Required | Default Value                                                                                                                | Description                                                                                                                                                                                                                                       |
|-----------------------|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allow_origins         | array of string  | Optional | *                                                                                                                           | Allowed Origins for cross-origin access, formatted as scheme://host:port, for example, http://example.com:8081. When allow_credentials is false, * can be used to allow all Origins through.                                                |
| allow_origin_patterns | array of string  | Optional | -                                                                                                                           | Patterns for matching allowed Origins for cross-origin access, using * to match domain or port, <br/>for example http://*.example.com -- matches domain, http://*.example.com:[8080,9090] -- matches domain and specified ports, http://*.example.com:[*] -- matches domain and all ports. A single * indicates matching all domains and ports. |
| allow_methods         | array of string  | Optional | GET, PUT, POST, DELETE, PATCH, OPTIONS                                                                                     | Allowed Methods for cross-origin access, for example: GET, POST, etc. * can be used to indicate all Methods are allowed.                                                                                                                       |
| allow_headers         | array of string  | Optional | DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,<br/>If-Modified-Since,Cache-Control,Content-Type,Authorization | Allowed Headers for the requester to carry that are not part of CORS specifications during cross-origin access. * can be used to indicate any Header is allowed.                                                                                 |
| expose_headers        | array of string  | Optional | -                                                                                                                           | Allowed Headers for the responder to carry that are not part of CORS specifications during cross-origin access. * can be used to indicate any Header is allowed.                                                                                 |
| allow_credentials     | bool             | Optional | false                                                                                                                       | Whether to allow the requester to carry credentials (e.g. Cookies) during cross-origin access. According to CORS specifications, if this option is set to true, * cannot be used for allow_origins, replace it with allow_origin_patterns.  |
| max_age               | number           | Optional | 86400 seconds                                                                                                              | Maximum time for browsers to cache CORS results, in seconds. <br/>Within this time frame, browsers will reuse the previous inspection results.                                                                                                 |
> Note
> * allow_credentials is a very sensitive option, please enable it with caution. Once enabled, allow_credentials and allow_origins cannot both be *, if both are set, the allow_origins value of "*" takes effect.
> * allow_origins and allow_origin_patterns can be set simultaneously. First, check if allow_origins matches, then check if allow_origin_patterns matches.
> * Illegal CORS requests will return HTTP status code 403, with the response body content as "Invalid CORS request".

## Configuration Examples
### Allow all cross-origin access, without allowing the requester to carry credentials
\`\`\`yaml
allow_origins:
  - '*'
allow_methods:
  - '*'
allow_headers:
  - '*'
expose_headers:
  - '*'
allow_credentials: false
max_age: 7200
\`\`\`

### Allow all cross-origin access, while allowing the requester to carry credentials
\`\`\`yaml
allow_origin_patterns:
  - '*'
allow_methods:
  - '*'
allow_headers:
  - '*'
expose_headers:
  - '*'
allow_credentials: true
max_age: 7200
\`\`\`

### Allow specific subdomains, specific methods, and specific request headers for cross-origin access, while allowing the requester to carry credentials
\`\`\`yaml
allow_origin_patterns:
  - http://*.example.com
  - http://*.example.org:[8080,9090]
allow_methods:
  - GET
  - PUT
  - POST
  - DELETE
allow_headers:
  - Token
  - Content-Type
  - Authorization
expose_headers:
  - '*'
allow_credentials: true
max_age: 7200
\`\`\`

## Testing
### Test Configuration
\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: mcp-cors-httpbin
  namespace: higress-system
spec:
  registries:
    - domain: httpbin.org
      name: httpbin
      port: 80
      type: dns
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: httpbin.dns
    higress.io/upstream-vhost: "httpbin.org"
    higress.io/backend-protocol: HTTP
  name: ingress-cors-httpbin
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
    - host: httpbin.example.com
      http:
        paths:
          - backend:
              resource:
                apiGroup: networking.higress.io
                kind: McpBridge
                name: mcp-cors-httpbin
            path: /
            pathType: Prefix
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: wasm-cors-httpbin
  namespace: higress-system
spec:
  defaultConfigDisable: true
  matchRules:
    - config:
        allow_origins:
          - http://httpbin.example.net
        allow_origin_patterns:
          - http://*.example.com:[*]
          - http://*.example.org:[9090,8080]
        allow_methods:
          - GET
          - POST
          - PATCH
        allow_headers:
          - Content-Type
          - Token
          - Authorization
        expose_headers:
          - X-Custom-Header
          - X-Env-UTM
        allow_credentials: true
        max_age: 3600
      configDisable: false
      ingress:
        - ingress-cors-httpbin
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0
  imagePullPolicy: Always
\`\`\`

### Request Testing
#### Simple Request
\`\`\`shell
curl -v -H "Origin: http://httpbin2.example.org:9090" -H "Host: httpbin.example.com" http://127.0.0.1/anything/get\\?foo\\=1
< HTTP/1.1 200 OK
> x-cors-version: 1.0.0
> access-control-allow-origin: http://httpbin2.example.org:9090
> access-control-expose-headers: X-Custom-Header,X-Env-UTM
> access-control-allow-credentials: true
\`\`\`

#### Preflight Request
\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H "Host: httpbin.example.com" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: Content-Type, Token" http://127.0.0.1/anything/get\\?foo\\=1
< HTTP/1.1 200 OK
< x-cors-version: 1.0.0
< access-control-allow-origin: http://httpbin2.example.org:9090
< access-control-allow-methods: GET,POST,PATCH
< access-control-allow-headers: Content-Type,Token,Authorization
< access-control-expose-headers: X-Custom-Header,X-Env-UTM
< access-control-allow-credentials: true
< access-control-max-age: 3600
< date: Tue, 23 May 2023 11:41:28 GMT
< server: istio-envoy
< content-length: 0
<
* Connection #0 to host 127.0.0.1 left intact
* Closing connection 0
\`\`\`

#### Illegal CORS Origin Preflight Request
\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org" -H "Host: httpbin.example.com" -H "Access-Control-Request-Method: GET" http://127.0.0.1/anything/get\\?foo\\=1
 HTTP/1.1 403 Forbidden
< content-length: 70
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:27:01 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

#### Illegal CORS Method Preflight Request
\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H "Host: httpbin.example.com" -H "Access-Control-Request-Method: DELETE" http://127.0.0.1/anything/get\\?foo\\=1
< HTTP/1.1 403 Forbidden
< content-length: 49
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:28:51 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

#### Illegal CORS Header Preflight Request
\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H "Host: httpbin.example.com" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: TokenView" http://127.0.0.1/anything/get\\?foo\\=1
< HTTP/1.1 403 Forbidden
< content-length: 52
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:31:03 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

## Reference Documents
- https://www.ruanyifeng.com/blog/2016/04/cors.html
- https://fetch.spec.whatwg.org/#http-cors-protocol
`},l=function(){return s},p=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-attributes",text:"Execution Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"allow-all-cross-origin-access-without-allowing-the-requester-to-carry-credentials",text:"Allow all cross-origin access, without allowing the requester to carry credentials"},{depth:3,slug:"allow-all-cross-origin-access-while-allowing-the-requester-to-carry-credentials",text:"Allow all cross-origin access, while allowing the requester to carry credentials"},{depth:3,slug:"allow-specific-subdomains-specific-methods-and-specific-request-headers-for-cross-origin-access-while-allowing-the-requester-to-carry-credentials",text:"Allow specific subdomains, specific methods, and specific request headers for cross-origin access, while allowing the requester to carry credentials"},{depth:2,slug:"testing",text:"Testing"},{depth:3,slug:"test-configuration",text:"Test Configuration"},{depth:3,slug:"request-testing",text:"Request Testing"},{depth:4,slug:"simple-request",text:"Simple Request"},{depth:4,slug:"preflight-request",text:"Preflight Request"},{depth:4,slug:"illegal-cors-origin-preflight-request",text:"Illegal CORS Origin Preflight Request"},{depth:4,slug:"illegal-cors-method-preflight-request",text:"Illegal CORS Method Preflight Request"},{depth:4,slug:"illegal-cors-header-preflight-request",text:"Illegal CORS Header Preflight Request"},{depth:2,slug:"reference-documents",text:"Reference Documents"}]},e=o((x,f,u)=>{const{layout:F,...i}=n;return i.file=a,i.url=t,r`${E()}${v(s)}`})});export{e as Content,g as __tla,l as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,c as rawContent,t as url};
