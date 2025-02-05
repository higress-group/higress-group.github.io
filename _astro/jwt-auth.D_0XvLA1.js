import{c,__tla as r}from"./astro-component.CXlaF79K.js";import{r as p,m as u,u as h,__tla as y}from"./constant.Zsfu44Ss.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let s,o,t,a,d,l,n,E=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p><code dir="auto">jwt-auth</code> plugin implements authentication and authorization based on JWT (JSON Web Tokens). It supports extracting JWT from HTTP request URL parameters, request headers, and Cookie fields, while verifying whether the Token has the necessary permissions to access the resource.</p>
<p>The difference between this plugin and the JWT authentication in <code dir="auto">Security Capability -> Authentication and Authorization</code> is that it additionally provides the capability of identifying the caller\u2019s identity, supporting different JWT credentials for different callers.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin execution phase: <code dir="auto">Authentication Phase</code>
Plugin execution priority: <code dir="auto">340</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<p><strong>Note:</strong></p>
<ul>
<li>In one rule, authentication configuration and authorization configuration cannot coexist.</li>
<li>For requests authenticated through authentication and authorization, the request header will be augmented with an <code dir="auto">X-Mse-Consumer</code> field to identify the caller\u2019s name.</li>
</ul>
<h3 id="authentication-configuration">Authentication Configuration</h3>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>Optional (<strong>instance-level configuration only</strong>)</td><td>-</td><td>Can only be configured at the instance level. If set to true, it will globally enable the authentication mechanism; if set to false, it will only apply to the configured domain names and routes. If not configured, it will only globally take effect when no domain names and routes are configured (to be compatible with old user habits).</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configure service consumers for request authentication</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">consumers</code> are as follows:</p>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>The name of the consumer</td></tr><tr><td><code dir="auto">jwks</code></td><td>string</td><td>Required</td><td>-</td><td>JSON format string specified by <a href="https://www.rfc-editor.org/rfc/rfc7517" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.rfc-editor.org/rfc/rfc7517</a>, consisting of the public key (or symmetric key) used to verify the JWT signature.</td></tr><tr><td><code dir="auto">issuer</code></td><td>string</td><td>Required</td><td>-</td><td>The issuer of the JWT, must match the <code dir="auto">iss</code> field in the payload.</td></tr><tr><td><code dir="auto">claims_to_headers</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Extract the specified fields from the JWT payload and set them in the specified request headers to forward to the backend.</td></tr><tr><td><code dir="auto">from_headers</code></td><td>array of object</td><td>Optional</td><td>{\u201Cname\u201D:\u201CAuthorization\u201D,\u201Cvalue_prefix\u201D:\u201CBearer \u201C}</td><td>Extract JWT from the specified request headers.</td></tr><tr><td><code dir="auto">from_params</code></td><td>array of string</td><td>Optional</td><td>access_token</td><td>Extract JWT from the specified URL parameters.</td></tr><tr><td><code dir="auto">from_cookies</code></td><td>array of string</td><td>Optional</td><td>-</td><td>Extract JWT from the specified cookies.</td></tr><tr><td><code dir="auto">clock_skew_seconds</code></td><td>number</td><td>Optional</td><td>60</td><td>The allowed clock skew when validating the <code dir="auto">exp</code> and <code dir="auto">iat</code> fields of the JWT, measured in seconds.</td></tr><tr><td><code dir="auto">keep_token</code></td><td>bool</td><td>Optional</td><td>true</td><td>Whether to retain the JWT when forwarding to the backend.</td></tr></tbody></table>
<p><strong>Note:</strong></p>
<ul>
<li>The default values will only be used when <code dir="auto">from_headers</code>, <code dir="auto">from_params</code>, and <code dir="auto">from_cookies</code> are not all configured.
The configuration fields for each item in <code dir="auto">from_headers</code> are as follows:
| Name            | Data Type        | Requirements | Default Value | Description                                     |
| --------------- | ---------------- | ------------ | ------------- | ----------------------------------------------- |
| <code dir="auto">name</code>          | string           | Required     | -             | Extract JWT from the request header.           |
| <code dir="auto">value_prefix</code>  | string           | Required     | -             | Remove the prefix from the request header value, with the remaining part serving as the JWT. |</li>
</ul>
<p>The configuration fields for each item in <code dir="auto">claims_to_headers</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">claim</code></td><td>string</td><td>Required</td><td>-</td><td>The specified field in the JWT payload, must be a string or unsigned integer type.</td></tr><tr><td><code dir="auto">header</code></td><td>string</td><td>Required</td><td>-</td><td>The value of the field extracted from the payload is set to this request header and forwarded to the backend.</td></tr><tr><td><code dir="auto">override</code></td><td>bool</td><td>Optional</td><td>true</td><td>If true, existing headers with the same name will be overridden; if false, they will be appended.</td></tr></tbody></table>
<h3 id="authorization-configuration-optional">Authorization Configuration (Optional)</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Optional (<strong>not instance-level configuration</strong>)</td><td>-</td><td>Can only be configured on fine-grained rules such as routes or domain names, allowing specified consumers to access matching requests for fine-grained permission control.</td></tr></tbody></table>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="global-configuration-for-authentication-and-route-level-authorization">Global Configuration for Authentication and Route-Level Authorization</h3>
<p>Note: If a JWT matches multiple <code dir="auto">jwks</code>, the first matching consumer will be applied according to the configuration order.</p>
<p>Configure the plugin at the instance level as follows:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcd</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abc</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "RSA",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"e": "AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"use": "sig",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "RS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  issuer: abcd\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;k&#x22;: &#x22;hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew&#x22;,\x7F          &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F      ]\x7F    }\x7F- name: consumer2\x7F  issuer: abc\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;RSA&#x22;,\x7F          &#x22;e&#x22;: &#x22;AQAB&#x22;,\x7F          &#x22;use&#x22;: &#x22;sig&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;alg&#x22;: &#x22;RS256&#x22;,\x7F          &#x22;n&#x22;: &#x22;i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw&#x22;\x7F        }\x7F      ]\x7F    }"><div></div></button></div></figure></div>
<p>Configure the following for routes <code dir="auto">route-a</code> and <code dir="auto">route-b</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>Configure the following for domain names <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p><strong>Explanation:</strong>
The specified <code dir="auto">route-a</code> and <code dir="auto">route-b</code> refer to the routing names filled in when creating the gateway route. When these two routes are matched, the caller with the name consumer1 will be allowed access, while others will not be permitted.</p>
<p>The specified <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are used to match the request domain names. When a matching domain name is found, the caller with the name consumer2 will be allowed access, while others will not.</p>
<p>Based on this configuration, the following requests will be allowed:</p>
<p>Suppose the following request matches the route-a.
<strong>Setting the JWT in URL parameters</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  &#x27;http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<p><strong>Setting the JWT in HTTP request headers</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<p>After successful authentication and authorization, the request\u2019s header will include an <code dir="auto">X-Mse-Consumer</code> field, in this example with the value <code dir="auto">consumer1</code>, to identify the caller\u2019s name.</p>
<p>The following requests will be denied:
<strong>Request without JWT returns 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>Caller matching from the provided JWT has no access permission, returning 403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer1 is not in the allow list for *.example.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">'http://xxx.example.com/test'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  &#x27;http://xxx.example.com/test&#x27; -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<h4 id="enable-at-gateway-instance-level">Enable at Gateway Instance Level</h4>
<p>The following configuration will enable JWT Auth authentication at the instance level, requiring all requests to be authenticated before accessing.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcd</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abc</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "RSA",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"e": "AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"use": "sig",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "RS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- name: consumer1\x7F  issuer: abcd\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;k&#x22;: &#x22;hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew&#x22;,\x7F          &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F      ]\x7F    }\x7F- name: consumer2\x7F  issuer: abc\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;RSA&#x22;,\x7F          &#x22;e&#x22;: &#x22;AQAB&#x22;,\x7F          &#x22;use&#x22;: &#x22;sig&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;alg&#x22;: &#x22;RS256&#x22;,\x7F          &#x22;n&#x22;: &#x22;i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw&#x22;\x7F        }\x7F      ]\x7F    }"><div></div></button></div></figure></div>
<h2 id="common-error-codes">Common Error Codes</h2>






























<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Reason Description</th></tr></thead><tbody><tr><td>401</td><td>Jwt missing</td><td>The request header did not provide a JWT</td></tr><tr><td>401</td><td>Jwt expired</td><td>The JWT has expired</td></tr><tr><td>401</td><td>Jwt verification fails</td><td>JWT payload verification failed, such as mismatched <code dir="auto">iss</code></td></tr><tr><td>403</td><td>Access Denied</td><td>No permission to access the current route</td></tr></tbody></table>
<h2 id="detailed-description">Detailed Description</h2>
<h3 id="1-token-based-authentication">1. Token-based Authentication</h3>
<h4 id="11-introduction">1.1 Introduction</h4>
<p>Many open APIs need to identify the requester\u2019s identity and determine whether the requested resource can be returned. A token is a mechanism used for identity verification. With this mechanism, applications do not need to retain user authentication information or session information on the server, allowing for stateless, distributed web application authorization, facilitating application scaling.</p>
<h4 id="12-process-description">1.2 Process Description</h4>
<p><img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135822.png" alt="" referrerpolicy="no-referrer"><br>
The above image shows the entire business process sequence diagram for gateway authentication using JWT. Below, we will detail the steps indicated in the diagram:</p>
<ol>
<li>The client initiates an authentication request to the API gateway, generally carrying the terminal user\u2019s username and password.</li>
<li>The gateway forwards the request directly to the backend service.</li>
<li>The backend service reads the verification information in the request (such as username and password) for validation. Upon successful verification, it generates a standard token using a private key and returns it to the gateway.</li>
<li>The gateway returns a response containing the token to the client, who must cache this token locally.</li>
<li>The client sends a business request to the API gateway, carrying the token in the request.</li>
<li>The gateway validates the token using the user\u2019s set public key. Upon successful validation, it forwards the request to the backend service.</li>
<li>The backend service processes the business and responds.</li>
<li>The gateway returns the business response to the client.</li>
</ol>
<p>Throughout this process, the gateway utilizes the token authentication mechanism, enabling the user to authorize their API using their user system. Next, we will introduce the structured token used by the gateway for token authentication: JSON Web Token (JWT).</p>
<h4 id="13-jwt">1.3 JWT</h4>
<h5 id="131-introduction">1.3.1 Introduction</h5>
<p>JSON Web Token (JWT) is an open standard (RFC7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWT can be used as a stand-alone authentication token, capable of containing user identity, user roles, permissions, and other information, aiding in resource retrieval from resource servers and adding any additional claims required by business logic, particularly suitable for login scenarios for distributed sites.</p>
<h5 id="132-jwt-structure">1.3.2 JWT Structure</h5>
<p><code dir="auto">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</code><br>
As shown above, JWT is a string composed of three parts:</p>
<ul>
<li>Header</li>
<li>Payload</li>
<li>Signature</li>
</ul>
<p><strong>Header</strong><br>
The header of the JWT carries two pieces of information:</p>
<ul>
<li>Token type, which is JWT</li>
<li>Signing algorithm</li>
</ul>
<p>The supported signing algorithms by the gateway are as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ES256, ES384, ES512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HS256, HS384, HS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">RS256, RS384, RS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PS256, PS384, PS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">EdDSA</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ES256, ES384, ES512,\x7FHS256, HS384, HS512,\x7FRS256, RS384, RS512,\x7FPS256, PS384, PS512,\x7FEdDSA"><div></div></button></div></figure></div>
<p>The complete header looks like the following JSON:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">'typ'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'JWT'</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">'alg'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'HS256'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x27;typ&#x27;: &#x27;JWT&#x27;,\x7F  &#x27;alg&#x27;: &#x27;HS256&#x27;\x7F}"><div></div></button></div></figure></div>
<p>Then the header is Base64 encoded (this encoding is symmetrically decodable), forming the first part.<br>
<code dir="auto">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</code></p>
<p><strong>Payload</strong><br>
The payload is where valid information is stored. Its details are defined as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iss: Token issuer. Indicates who created the token, this claim is a string.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">sub: Subject Identifier, an identifier provided by the issuer for its end users, unique within the issuer's scope, up to 255 ASCII characters, case sensitive.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">aud: Audience(s), the audience of the token, an array of strings that are case-sensitive.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">exp: Expiration time, a timestamp of the token's expiration. Tokens expired beyond this time will be invalid. This claim is an integer, representing the number of seconds since January 1, 1970.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iat: Issuance time of the token, this claim is an integer, representing the number of seconds since January 1, 1970.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">jti: Unique identifier for the token, the value of this claim must be unique for each token created by the token issuer to prevent collisions. It is typically a cryptographically random value. This value adds a random entropy component to the structured token that is not accessible to an attacker, helping prevent token guess and replay attacks.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="iss: Token issuer. Indicates who created the token, this claim is a string.\x7Fsub: Subject Identifier, an identifier provided by the issuer for its end users, unique within the issuer&#x27;s scope, up to 255 ASCII characters, case sensitive.\x7Faud: Audience(s), the audience of the token, an array of strings that are case-sensitive.\x7Fexp: Expiration time, a timestamp of the token&#x27;s expiration. Tokens expired beyond this time will be invalid. This claim is an integer, representing the number of seconds since January 1, 1970.\x7Fiat: Issuance time of the token, this claim is an integer, representing the number of seconds since January 1, 1970.\x7Fjti: Unique identifier for the token, the value of this claim must be unique for each token created by the token issuer to prevent collisions. It is typically a cryptographically random value. This value adds a random entropy component to the structured token that is not accessible to an attacker, helping prevent token guess and replay attacks."><div></div></button></div></figure></div>
<p>Custom fields necessary for the user system can also be added, for example, the following example adds a nickname <code dir="auto">name</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"sub"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1234567890"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"John Doe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;sub&#x22;: &#x22;1234567890&#x22;,\x7F  &#x22;name&#x22;: &#x22;John Doe&#x22;\x7F}"><div></div></button></div></figure></div>
<p>Then encode it in Base64 to obtain the second part of the JWT:<br>
<code dir="auto">JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE</code></p>
<p><strong>Signature</strong><br>
This part requires the Base64-encoded Header and Base64-encoded Payload to be connected by a period, and then encrypted using the signing method declared in the Header (where <code dir="auto">$secret</code> represents the user\u2019s private key) to form the third part of the JWT.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> encodedString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">base64UrlEncode</span><span style="--0:#E1E4E8">(header) </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'.'</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">base64UrlEncode</span><span style="--0:#E1E4E8">(payload);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> signature </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">HMACSHA256</span><span style="--0:#E1E4E8">(encodedString, </span><span style="--0:#9ECBFF">'$secret'</span><span style="--0:#E1E4E8">);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="var encodedString = base64UrlEncode(header) + &#x27;.&#x27; + base64UrlEncode(payload);\x7Fvar signature = HMACSHA256(encodedString, &#x27;$secret&#x27;);"><div></div></button></div></figure></div>
<p>Connecting these three parts with a period creates a complete string that forms the JWT example at the beginning of section 1.3.2.</p>
<h5 id="133-validity-period">1.3.3 Validity Period</h5>
<p>The gateway will validate the <code dir="auto">exp</code> field in the token. Once this field expires, the gateway will consider this token invalid and directly reject the request. The expiration time must be set.</p>
<h5 id="134-characteristics-of-jwt">1.3.4 Characteristics of JWT</h5>
<ol>
<li>JWT is not encrypted by default; do not write secret data into JWT.</li>
<li>JWT can be used for both authentication and information exchange. Effectively using JWT can reduce the number of queries to the database on the server.</li>
<li>The biggest drawback of JWT is that since the server does not maintain session state, it cannot revoke a token during use or change the permissions of said token. In other words, once a JWT is issued, it will remain valid until expiration, unless the server implements additional logic.</li>
<li>JWT itself contains authentication information, and once leaked, anyone can gain all permissions of that token. To minimize theft, the validity period of JWT should be set to be relatively short. For some critical permissions, users should be re-authenticated.</li>
<li>To reduce theft, JWT should not be transmitted in plain text over HTTP but should use HTTPS for transmission.</li>
</ol>
<h3 id="2-how-user-systems-apply-the-jwt-plugin-to-protect-apis">2. How User Systems Apply the JWT Plugin to Protect APIs</h3>
<h4 id="21-generating-a-pair-of-jwks-json-web-keys">2.1 Generating a Pair of JWKs (JSON Web Keys)</h4>
<p><strong>Method 1: Online Generation:</strong><br>
Users can generate the private and public keys used for token generation and verification at this site <a href="https://mkjwk.org" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://mkjwk.org</a>. The private key is used by the authorization service to issue JWTs, and the public key is configured into the JWT plugin for the gateway to verify requests. Pay attention to the jwks format configuration used by the gateway. In the image below, the Public Key should be placed into the keys structure, for example: <code dir="auto">{"keys":[{"kty":"RSA","e":"AQAB",...}]}</code><br>
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png" style="zoom:50%"></p>
<p><strong>Method 2: Local Generation:</strong><br>
This article demonstrates using Java; users of other languages can find related tools to generate key pairs. Create a new Maven project and include the following dependency:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>org.bitbucket.b_c&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>jose4j&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>0.7.0&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<dependency>\x7F     <groupId>org.bitbucket.b_c</groupId>\x7F     <artifactId>jose4j</artifactId>\x7F     <version>0.7.0</version>\x7F</dependency>"><div></div></button></div></figure></div>
<p>Use the following code to generate a pair of RSA keys:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">RsaJsonWebKey rsaJsonWebKey </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> RsaJwkGenerator.</span><span style="--0:#B392F0">generateJwk</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">2048</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">final</span><span style="--0:#E1E4E8"> String publicKeyString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> rsaJsonWebKey.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">final</span><span style="--0:#E1E4E8"> String privateKeyString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> rsaJsonWebKey.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);\x7Ffinal String publicKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);\x7Ffinal String privateKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);"><div></div></button></div></figure></div>
<h4 id="22-using-the-private-key-in-jwk-to-implement-the-token-issuance-authentication-service">2.2 Using the Private Key in JWK to Implement the Token Issuance Authentication Service</h4>
<p>You will need to use the Keypair JSON string (the first inside the three boxes) generated online in section 2.1 or the locally generated privateKeyString JSON string as the private key to issue tokens for authorizing trusted users to access protected APIs. The specific implementation can refer to the example below. The form of issuing tokens to customers can be determined by the user based on the specific business scenario; it can be deployed in the production environment, configured to be a normal API that visitors can access through username and password, or tokens can be generated locally and directly copied for specified users to use.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> java.security.PrivateKey;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.json.JsonUtil;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwk.RsaJsonWebKey;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwk.RsaJwkGenerator;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jws.AlgorithmIdentifiers;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jws.JsonWebSignature;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwt.JwtClaims;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwt.NumericDate;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.lang.JoseException;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">class</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GenerateJwtDemo</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">static</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">void</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">String</span><span style="--0:#E1E4E8">[] </span><span style="--0:#FFAB70">args</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">throws</span><span style="--0:#E1E4E8"> JoseException  {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String keyId </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"uniq_key"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// Use the Keypair generated in section 2.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String privateKeyJson </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">kty</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">RSA</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">d</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">e</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">AQAB</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">alg</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">RS256</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw</span><span style="--0:#79B8FF">\\"\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"}"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">JwtClaims claims </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">JwtClaims</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setGeneratedJwtId</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setIssuedAtToNow</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// Expiration time must be set</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">NumericDate date </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> NumericDate.</span><span style="--0:#B392F0">now</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">date.</span><span style="--0:#B392F0">addSeconds</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">120</span><span style="--0:#F97583">*</span><span style="--0:#79B8FF">60</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setExpirationTime</span><span style="--0:#E1E4E8">(date);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setNotBeforeMinutesInThePast</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setSubject</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"YOUR_SUBJECT"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setAudience</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"YOUR_AUDIENCE"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// Add custom parameters, all values should be String type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setClaim</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"userId"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"1213234"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setClaim</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"email"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"userEmail@youapp.com"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">JsonWebSignature jws </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">JsonWebSignature</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setAlgorithmHeaderValue</span><span style="--0:#E1E4E8">(AlgorithmIdentifiers.RSA_USING_SHA256);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setKeyIdHeaderValue</span><span style="--0:#E1E4E8">(keyId);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setPayload</span><span style="--0:#E1E4E8">(claims.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">());</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">PrivateKey privateKey </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RsaJsonWebKey</span><span style="--0:#E1E4E8">(JsonUtil.</span><span style="--0:#B392F0">parseJson</span><span style="--0:#E1E4E8">(privateKeyJson)).</span><span style="--0:#B392F0">getPrivateKey</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setKey</span><span style="--0:#E1E4E8">(privateKey);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String jwtResult </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> jws.</span><span style="--0:#B392F0">getCompactSerialization</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">System.out.</span><span style="--0:#B392F0">println</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Generate Json Web token , result is "</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> jwtResult);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import java.security.PrivateKey;\x7Fimport org.jose4j.json.JsonUtil;\x7Fimport org.jose4j.jwk.RsaJsonWebKey;\x7Fimport org.jose4j.jwk.RsaJwkGenerator;\x7Fimport org.jose4j.jws.AlgorithmIdentifiers;\x7Fimport org.jose4j.jws.JsonWebSignature;\x7Fimport org.jose4j.jwt.JwtClaims;\x7Fimport org.jose4j.jwt.NumericDate;\x7Fimport org.jose4j.lang.JoseException;\x7F\x7Fpublic class GenerateJwtDemo {\x7F    public static void main(String[] args) throws JoseException  {\x7F        String keyId = &#x22;uniq_key&#x22;;\x7F        // Use the Keypair generated in section 2.1\x7F        String privateKeyJson = &#x22;{\\n&#x22;\x7F            + &#x22;  \\&#x22;kty\\&#x22;: \\&#x22;RSA\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;d\\&#x22;: \\&#x22;O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;e\\&#x22;: \\&#x22;AQAB\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;alg\\&#x22;: \\&#x22;RS256\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;n\\&#x22;: \\&#x22;vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\&#x22;\\n&#x22;\x7F            + &#x22;}&#x22;;\x7F        JwtClaims claims = new JwtClaims();\x7F        claims.setGeneratedJwtId();\x7F        claims.setIssuedAtToNow();\x7F        // Expiration time must be set\x7F        NumericDate date = NumericDate.now();\x7F        date.addSeconds(120*60);\x7F        claims.setExpirationTime(date);\x7F        claims.setNotBeforeMinutesInThePast(1);\x7F        claims.setSubject(&#x22;YOUR_SUBJECT&#x22;);\x7F        claims.setAudience(&#x22;YOUR_AUDIENCE&#x22;);\x7F        // Add custom parameters, all values should be String type\x7F        claims.setClaim(&#x22;userId&#x22;, &#x22;1213234&#x22;);\x7F        claims.setClaim(&#x22;email&#x22;, &#x22;userEmail@youapp.com&#x22;);\x7F        JsonWebSignature jws = new JsonWebSignature();\x7F        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);\x7F        jws.setKeyIdHeaderValue(keyId);\x7F        jws.setPayload(claims.toJson());\x7F        PrivateKey privateKey = new RsaJsonWebKey(JsonUtil.parseJson(privateKeyJson)).getPrivateKey();\x7F        jws.setKey(privateKey);\x7F        String jwtResult = jws.getCompactSerialization();\x7F        System.out.println(&#x22;Generate Json Web token , result is &#x22; + jwtResult);\x7F    }\x7F}"><div></div></button></div></figure></div>`,a={title:"JWT Authentication",keywords:["higress","jwt auth"],description:"JWT Authentication plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/jwt-auth.md",n=void 0,l=function(){return`
## Function Description
\`jwt-auth\` plugin implements authentication and authorization based on JWT (JSON Web Tokens). It supports extracting JWT from HTTP request URL parameters, request headers, and Cookie fields, while verifying whether the Token has the necessary permissions to access the resource. 

The difference between this plugin and the JWT authentication in \`Security Capability -> Authentication and Authorization\` is that it additionally provides the capability of identifying the caller's identity, supporting different JWT credentials for different callers.

## Runtime Properties
Plugin execution phase: \`Authentication Phase\`
Plugin execution priority: \`340\`

## Configuration Fields
**Note:**
- In one rule, authentication configuration and authorization configuration cannot coexist.
- For requests authenticated through authentication and authorization, the request header will be augmented with an \`X-Mse-Consumer\` field to identify the caller's name.

### Authentication Configuration
| Name        | Data Type        | Requirements                                   | Default Value | Description                                                  |
| ----------- | --------------- | ---------------------------------------------- | ------------- | ----------------------------------------------------------- |
| \`global_auth\` | bool            | Optional (**instance-level configuration only**) | -             | Can only be configured at the instance level. If set to true, it will globally enable the authentication mechanism; if set to false, it will only apply to the configured domain names and routes. If not configured, it will only globally take effect when no domain names and routes are configured (to be compatible with old user habits). |
| \`consumers\` | array of object | Required                                       | -             | Configure service consumers for request authentication       |

The configuration fields for each item in \`consumers\` are as follows:
| Name                    | Data Type         | Requirements | Default Value                                      | Description                     |
| ----------------------- | ------------------ | ------------ | -------------------------------------------------- | ------------------------------- |
| \`name\`                  | string             | Required     | -                                                  | The name of the consumer        |
| \`jwks\`                  | string             | Required     | -                                                  | JSON format string specified by https://www.rfc-editor.org/rfc/rfc7517, consisting of the public key (or symmetric key) used to verify the JWT signature. |
| \`issuer\`                | string             | Required     | -                                                  | The issuer of the JWT, must match the \`iss\` field in the payload. |
| \`claims_to_headers\`     | array of object    | Optional     | -                                                  | Extract the specified fields from the JWT payload and set them in the specified request headers to forward to the backend. |
| \`from_headers\`          | array of object    | Optional     | {"name":"Authorization","value_prefix":"Bearer "} | Extract JWT from the specified request headers. |
| \`from_params\`           | array of string    | Optional     | access_token                                       | Extract JWT from the specified URL parameters. |
| \`from_cookies\`          | array of string    | Optional     | -                                                  | Extract JWT from the specified cookies. |
| \`clock_skew_seconds\`    | number             | Optional     | 60                                               | The allowed clock skew when validating the \`exp\` and \`iat\` fields of the JWT, measured in seconds. |
| \`keep_token\`            | bool               | Optional     | true                                             | Whether to retain the JWT when forwarding to the backend. |

**Note:**
- The default values will only be used when \`from_headers\`, \`from_params\`, and \`from_cookies\` are not all configured.
The configuration fields for each item in \`from_headers\` are as follows:
| Name            | Data Type        | Requirements | Default Value | Description                                     |
| --------------- | ---------------- | ------------ | ------------- | ----------------------------------------------- |
| \`name\`          | string           | Required     | -             | Extract JWT from the request header.           |
| \`value_prefix\`  | string           | Required     | -             | Remove the prefix from the request header value, with the remaining part serving as the JWT. |

The configuration fields for each item in \`claims_to_headers\` are as follows:
| Name            | Data Type        | Requirements | Default Value | Description                                   |
| --------------- | ---------------- | ------------ | ------------- | --------------------------------------------- |
| \`claim\`         | string           | Required     | -             | The specified field in the JWT payload, must be a string or unsigned integer type. |
| \`header\`        | string           | Required     | -             | The value of the field extracted from the payload is set to this request header and forwarded to the backend. |
| \`override\`      | bool             | Optional     | true          | If true, existing headers with the same name will be overridden; if false, they will be appended. |

### Authorization Configuration (Optional)
| Name        | Data Type        | Requirements                                   | Default Value | Description                                                                                           |
| ----------- | --------------- | ---------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| \`allow\`     | array of string | Optional (**not instance-level configuration**) | -             | Can only be configured on fine-grained rules such as routes or domain names, allowing specified consumers to access matching requests for fine-grained permission control. |

## Configuration Examples
### Global Configuration for Authentication and Route-Level Authorization
Note: If a JWT matches multiple \`jwks\`, the first matching consumer will be applied according to the configuration order.

Configure the plugin at the instance level as follows:
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  issuer: abcd
  jwks: |
    {
      "keys": [
        {
          "kty": "oct",
          "kid": "123",
          "k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",
          "alg": "HS256"
        }
      ]
    }
- name: consumer2
  issuer: abc
  jwks: |
    {
      "keys": [
        {
          "kty": "RSA",
          "e": "AQAB",
          "use": "sig",
          "kid": "123",
          "alg": "RS256",
          "n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"
        }
      ]
    }
\`\`\`

Configure the following for routes \`route-a\` and \`route-b\`:
\`\`\`yaml
allow:
- consumer1
\`\`\`

Configure the following for domain names \`*.example.com\` and \`test.com\`:
\`\`\`yaml
allow:
- consumer2
\`\`\`

**Explanation:**
The specified \`route-a\` and \`route-b\` refer to the routing names filled in when creating the gateway route. When these two routes are matched, the caller with the name consumer1 will be allowed access, while others will not be permitted.

The specified \`*.example.com\` and \`test.com\` are used to match the request domain names. When a matching domain name is found, the caller with the name consumer2 will be allowed access, while others will not. 

Based on this configuration, the following requests will be allowed:

Suppose the following request matches the route-a.
**Setting the JWT in URL parameters**
\`\`\`bash
curl  'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

**Setting the JWT in HTTP request headers**
\`\`\`bash
curl  http://xxx.hello.com/test -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

After successful authentication and authorization, the request's header will include an \`X-Mse-Consumer\` field, in this example with the value \`consumer1\`, to identify the caller's name.

The following requests will be denied:
**Request without JWT returns 401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`

**Caller matching from the provided JWT has no access permission, returning 403**
\`\`\`bash
# consumer1 is not in the allow list for *.example.com
curl  'http://xxx.example.com/test' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

#### Enable at Gateway Instance Level
The following configuration will enable JWT Auth authentication at the instance level, requiring all requests to be authenticated before accessing.
\`\`\`yaml
global_auth: true
consumers:
- name: consumer1
  issuer: abcd
  jwks: |
    {
      "keys": [
        {
          "kty": "oct",
          "kid": "123",
          "k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",
          "alg": "HS256"
        }
      ]
    }
- name: consumer2
  issuer: abc
  jwks: |
    {
      "keys": [
        {
          "kty": "RSA",
          "e": "AQAB",
          "use": "sig",
          "kid": "123",
          "alg": "RS256",
          "n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"
        }
      ]
    }
\`\`\`

## Common Error Codes
| HTTP Status Code | Error Message                | Reason Description                                                           |
| ---------------- | ----------------------------- | ---------------------------------------------------------------------------- |
| 401              | Jwt missing                   | The request header did not provide a JWT                                   |
| 401              | Jwt expired                   | The JWT has expired                                                         |
| 401              | Jwt verification fails        | JWT payload verification failed, such as mismatched \`iss\`                 |
| 403              | Access Denied                 | No permission to access the current route                                   |

## Detailed Description
### 1. Token-based Authentication
#### 1.1 Introduction
Many open APIs need to identify the requester's identity and determine whether the requested resource can be returned. A token is a mechanism used for identity verification. With this mechanism, applications do not need to retain user authentication information or session information on the server, allowing for stateless, distributed web application authorization, facilitating application scaling.

#### 1.2 Process Description
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135822.png)  
The above image shows the entire business process sequence diagram for gateway authentication using JWT. Below, we will detail the steps indicated in the diagram:

1. The client initiates an authentication request to the API gateway, generally carrying the terminal user's username and password.
2. The gateway forwards the request directly to the backend service.
3. The backend service reads the verification information in the request (such as username and password) for validation. Upon successful verification, it generates a standard token using a private key and returns it to the gateway.
4. The gateway returns a response containing the token to the client, who must cache this token locally.
5. The client sends a business request to the API gateway, carrying the token in the request.
6. The gateway validates the token using the user's set public key. Upon successful validation, it forwards the request to the backend service.
7. The backend service processes the business and responds.
8. The gateway returns the business response to the client.

Throughout this process, the gateway utilizes the token authentication mechanism, enabling the user to authorize their API using their user system. Next, we will introduce the structured token used by the gateway for token authentication: JSON Web Token (JWT).

#### 1.3 JWT
##### 1.3.1 Introduction
JSON Web Token (JWT) is an open standard (RFC7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWT can be used as a stand-alone authentication token, capable of containing user identity, user roles, permissions, and other information, aiding in resource retrieval from resource servers and adding any additional claims required by business logic, particularly suitable for login scenarios for distributed sites.

##### 1.3.2 JWT Structure
\`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\`  
As shown above, JWT is a string composed of three parts:  
- Header  
- Payload  
- Signature  

**Header**  
The header of the JWT carries two pieces of information:
- Token type, which is JWT  
- Signing algorithm  

The supported signing algorithms by the gateway are as follows:  
\`\`\`text
ES256, ES384, ES512,  
HS256, HS384, HS512,  
RS256, RS384, RS512,  
PS256, PS384, PS512,  
EdDSA
\`\`\`  

The complete header looks like the following JSON:
\`\`\`js
{
  'typ': 'JWT',
  'alg': 'HS256'
}
\`\`\`  
Then the header is Base64 encoded (this encoding is symmetrically decodable), forming the first part.  
\`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\`  

**Payload**  
The payload is where valid information is stored. Its details are defined as follows:  
\`\`\`text
iss: Token issuer. Indicates who created the token, this claim is a string.  
sub: Subject Identifier, an identifier provided by the issuer for its end users, unique within the issuer's scope, up to 255 ASCII characters, case sensitive.  
aud: Audience(s), the audience of the token, an array of strings that are case-sensitive.  
exp: Expiration time, a timestamp of the token's expiration. Tokens expired beyond this time will be invalid. This claim is an integer, representing the number of seconds since January 1, 1970.  
iat: Issuance time of the token, this claim is an integer, representing the number of seconds since January 1, 1970.  
jti: Unique identifier for the token, the value of this claim must be unique for each token created by the token issuer to prevent collisions. It is typically a cryptographically random value. This value adds a random entropy component to the structured token that is not accessible to an attacker, helping prevent token guess and replay attacks.
\`\`\`  
Custom fields necessary for the user system can also be added, for example, the following example adds a nickname \`name\`:
\`\`\`js
{
  "sub": "1234567890",
  "name": "John Doe"
}
\`\`\`  
Then encode it in Base64 to obtain the second part of the JWT:  
\`JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE\`  

**Signature**  
This part requires the Base64-encoded Header and Base64-encoded Payload to be connected by a period, and then encrypted using the signing method declared in the Header (where \`$secret\` represents the user's private key) to form the third part of the JWT.  
\`\`\`js
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, '$secret');
\`\`\`  
Connecting these three parts with a period creates a complete string that forms the JWT example at the beginning of section 1.3.2.  

##### 1.3.3 Validity Period
The gateway will validate the \`exp\` field in the token. Once this field expires, the gateway will consider this token invalid and directly reject the request. The expiration time must be set.  

##### 1.3.4 Characteristics of JWT
1. JWT is not encrypted by default; do not write secret data into JWT.  
2. JWT can be used for both authentication and information exchange. Effectively using JWT can reduce the number of queries to the database on the server.  
3. The biggest drawback of JWT is that since the server does not maintain session state, it cannot revoke a token during use or change the permissions of said token. In other words, once a JWT is issued, it will remain valid until expiration, unless the server implements additional logic.  
4. JWT itself contains authentication information, and once leaked, anyone can gain all permissions of that token. To minimize theft, the validity period of JWT should be set to be relatively short. For some critical permissions, users should be re-authenticated.  
5. To reduce theft, JWT should not be transmitted in plain text over HTTP but should use HTTPS for transmission.

### 2. How User Systems Apply the JWT Plugin to Protect APIs
#### 2.1 Generating a Pair of JWKs (JSON Web Keys)
**Method 1: Online Generation:**  
Users can generate the private and public keys used for token generation and verification at this site https://mkjwk.org. The private key is used by the authorization service to issue JWTs, and the public key is configured into the JWT plugin for the gateway to verify requests. Pay attention to the jwks format configuration used by the gateway. In the image below, the Public Key should be placed into the keys structure, for example: \`{"keys":[{"kty":"RSA","e":"AQAB",...}]}\`  
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png" style="zoom:50%" />  

**Method 2: Local Generation:**  
This article demonstrates using Java; users of other languages can find related tools to generate key pairs. Create a new Maven project and include the following dependency:  
\`\`\`xml
<dependency>
     <groupId>org.bitbucket.b_c</groupId>
     <artifactId>jose4j</artifactId>
     <version>0.7.0</version>
</dependency>
\`\`\`  
Use the following code to generate a pair of RSA keys:  
\`\`\`java
RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);
final String publicKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);
final String privateKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);
\`\`\`  

#### 2.2 Using the Private Key in JWK to Implement the Token Issuance Authentication Service
You will need to use the Keypair JSON string (the first inside the three boxes) generated online in section 2.1 or the locally generated privateKeyString JSON string as the private key to issue tokens for authorizing trusted users to access protected APIs. The specific implementation can refer to the example below. The form of issuing tokens to customers can be determined by the user based on the specific business scenario; it can be deployed in the production environment, configured to be a normal API that visitors can access through username and password, or tokens can be generated locally and directly copied for specified users to use.  
\`\`\`java
import java.security.PrivateKey;
import org.jose4j.json.JsonUtil;
import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jwk.RsaJwkGenerator;
import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.NumericDate;
import org.jose4j.lang.JoseException;

public class GenerateJwtDemo {
    public static void main(String[] args) throws JoseException  {
        String keyId = "uniq_key";
        // Use the Keypair generated in section 2.1
        String privateKeyJson = "{\\n"
            + "  \\"kty\\": \\"RSA\\",\\n"
            + "  \\"d\\": \\"O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\",\\n"
            + "  \\"e\\": \\"AQAB\\",\\n"
            + "  \\"alg\\": \\"RS256\\",\\n"
            + "  \\"n\\": \\"vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\"\\n"
            + "}";
        JwtClaims claims = new JwtClaims();
        claims.setGeneratedJwtId();
        claims.setIssuedAtToNow();
        // Expiration time must be set
        NumericDate date = NumericDate.now();
        date.addSeconds(120*60);
        claims.setExpirationTime(date);
        claims.setNotBeforeMinutesInThePast(1);
        claims.setSubject("YOUR_SUBJECT");
        claims.setAudience("YOUR_AUDIENCE");
        // Add custom parameters, all values should be String type
        claims.setClaim("userId", "1213234");
        claims.setClaim("email", "userEmail@youapp.com");
        JsonWebSignature jws = new JsonWebSignature();
        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);
        jws.setKeyIdHeaderValue(keyId);
        jws.setPayload(claims.toJson());
        PrivateKey privateKey = new RsaJsonWebKey(JsonUtil.parseJson(privateKeyJson)).getPrivateKey();
        jws.setKey(privateKey);
        String jwtResult = jws.getCompactSerialization();
        System.out.println("Generate Json Web token , result is " + jwtResult);
    }
}
\`\`\`
`},o=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"authentication-configuration",text:"Authentication Configuration"},{depth:3,slug:"authorization-configuration-optional",text:"Authorization Configuration (Optional)"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"global-configuration-for-authentication-and-route-level-authorization",text:"Global Configuration for Authentication and Route-Level Authorization"},{depth:4,slug:"enable-at-gateway-instance-level",text:"Enable at Gateway Instance Level"},{depth:2,slug:"common-error-codes",text:"Common Error Codes"},{depth:2,slug:"detailed-description",text:"Detailed Description"},{depth:3,slug:"1-token-based-authentication",text:"1. Token-based Authentication"},{depth:4,slug:"11-introduction",text:"1.1 Introduction"},{depth:4,slug:"12-process-description",text:"1.2 Process Description"},{depth:4,slug:"13-jwt",text:"1.3 JWT"},{depth:5,slug:"131-introduction",text:"1.3.1 Introduction"},{depth:5,slug:"132-jwt-structure",text:"1.3.2 JWT Structure"},{depth:5,slug:"133-validity-period",text:"1.3.3 Validity Period"},{depth:5,slug:"134-characteristics-of-jwt",text:"1.3.4 Characteristics of JWT"},{depth:3,slug:"2-how-user-systems-apply-the-jwt-plugin-to-protect-apis",text:"2. How User Systems Apply the JWT Plugin to Protect APIs"},{depth:4,slug:"21-generating-a-pair-of-jwks-json-web-keys",text:"2.1 Generating a Pair of JWKs (JSON Web Keys)"},{depth:4,slug:"22-using-the-private-key-in-jwk-to-implement-the-token-issuance-authentication-service",text:"2.2 Using the Private Key in JWK to Implement the Token Issuance Authentication Service"}]},s=c((f,m,g)=>{const{layout:x,...i}=a;return i.file=t,i.url=n,p`${u()}${h(e)}`})});export{s as Content,E as __tla,o as compiledContent,s as default,t as file,a as frontmatter,d as getHeadings,l as rawContent,n as url};
