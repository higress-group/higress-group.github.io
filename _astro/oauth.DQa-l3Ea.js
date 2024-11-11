import{c as d,__tla as l}from"./astro-component.DIa0fJKh.js";import{r,m as p,u,__tla as h}from"./constant.Cs5LLcwe.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let t,x,i,a,o,c,n,g=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p><code dir="auto">OAuth2</code> plugin implements the capability of issuing OAuth2 Access Tokens based on JWT (JSON Web Tokens), complying with the <a href="https://datatracker.ietf.org/doc/html/rfc9068" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RFC9068</a> specification.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin execution phase: <code dir="auto">Authentication Phase</code>
Plugin execution priority: <code dir="auto">350</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<h3 id="authentication-configuration">Authentication Configuration</h3>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configures the callers of the service for request authentication</td></tr><tr><td><code dir="auto">issuer</code></td><td>string</td><td>Optional</td><td>Higress-Gateway</td><td>Used to fill the issuer in the JWT</td></tr><tr><td><code dir="auto">auth_path</code></td><td>string</td><td>Optional</td><td>/oauth2/token</td><td>Specifies the path suffix for issuing Tokens. When configured at the routing level, ensure it matches the corresponding route first. When using API management, create an interface with the same path.</td></tr><tr><td><code dir="auto">global_credentials</code></td><td>bool</td><td>Optional</td><td>true</td><td>Allows any route to issue credentials for access under the condition of authentication through the consumer.</td></tr><tr><td><code dir="auto">auth_header_name</code></td><td>string</td><td>Optional</td><td>Authorization</td><td>Specifies which request header to retrieve the JWT from</td></tr><tr><td><code dir="auto">token_ttl</code></td><td>number</td><td>Optional</td><td>7200</td><td>The time duration in seconds for which the token is valid after issuance.</td></tr><tr><td><code dir="auto">clock_skew_seconds</code></td><td>number</td><td>Optional</td><td>60</td><td>Allowed clock skew when verifying the exp and iat fields of the JWT, in seconds.</td></tr><tr><td><code dir="auto">keep_token</code></td><td>bool</td><td>Optional</td><td>true</td><td>Indicates whether to keep the JWT when forwarding to the backend.</td></tr><tr><td><code dir="auto">global_auth</code></td><td>array of string</td><td>Optional (<strong>Instance-level configuration only</strong>)</td><td>-</td><td>Can only be configured at the instance level. If set to true, the global authentication mechanism takes effect; if false, the authentication mechanism only takes effect for configured domains and routes; if not configured, global effect occurs only when there are no domain and route configurations (compatible with legacy user habits).</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">consumers</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the name of the consumer.</td></tr><tr><td><code dir="auto">client_id</code></td><td>string</td><td>Required</td><td>-</td><td>OAuth2 client id</td></tr><tr><td><code dir="auto">client_secret</code></td><td>string</td><td>Required</td><td>-</td><td>OAuth2 client secret</td></tr></tbody></table>
<p><strong>Note:</strong></p>
<ul>
<li>For routes with this configuration enabled, if the path suffix matches <code dir="auto">auth_path</code>, the route will not forward to the original target service but will be used to generate a Token.</li>
<li>If <code dir="auto">global_credentials</code> is disabled, please ensure that the routes enabling this plugin do not precisely match routes. If there is another prefix-matching route, it may lead to unexpected behavior.</li>
<li>For requests authenticated and authorized, the request header will have an <code dir="auto">X-Mse-Consumer</code> field added to identify the caller\u2019s name.</li>
</ul>
<h3 id="authorization-configuration-optional">Authorization Configuration (Optional)</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Optional (<strong>Non-instance-level configuration</strong>)</td><td>-</td><td>Can only be configured on fine-grained rules such as routes or domains, allowing specified consumers to access requests that meet the matching conditions for fine-grained permission control.</td></tr></tbody></table>
<p><strong>Note:</strong></p>
<ul>
<li>Authentication and authorization configurations cannot coexist in one rule.</li>
</ul>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="route-granularity-configuration-authentication">Route Granularity Configuration Authentication</h3>
<p>For the two routes <code dir="auto">route-a</code> and <code dir="auto">route-b</code>, do the following plugin configuration:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- name: consumer1\x7F  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx"><div></div></button></div></figure></div>
<p>At this time, although using the same configuration, the credentials issued under <code dir="auto">route-a</code> cannot be used to access <code dir="auto">route-b</code>, and vice versa.</p>
<p>If you want the same configuration to share credential access permissions, you can configure as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_credentials: true\x7Fconsumers:\x7F- name: consumer1\x7F  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx"><div></div></button></div></figure></div>
<h3 id="global-configuration-authentication-route-granularity-authorization">Global Configuration Authentication, Route Granularity Authorization</h3>
<p>The following configuration will enable Jwt Auth for specific routes or domains on the gateway. Note that if a JWT matches multiple <code dir="auto">jwks</code>, it will hit the first matching <code dir="auto">consumer</code> in the order of configuration.</p>
<p>At the instance level, do the following plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F- name: consumer2\x7F  client_id: 87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F  client_secret: hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx"><div></div></button></div></figure></div>
<p>For the routes <code dir="auto">route-a</code> and <code dir="auto">route-b</code>, do the following plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>For the domains <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code>, do the following plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p>In this example, route names <code dir="auto">route-a</code> and <code dir="auto">route-b</code> refer to the route names filled in when creating the gateway route. When these two routes are matched, it will allow access for the caller with <code dir="auto">name</code> as <code dir="auto">consumer1</code>, and other callers will not be allowed to access.</p>
<p>In this example, the domains <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are used to match request domains. When a matching domain is found, it will allow access for the caller with <code dir="auto">name</code> as <code dir="auto">consumer2</code>, while other callers will not be allowed to access.</p>
<h3 id="enable-at-gateway-instance-level">Enable at Gateway Instance Level</h3>
<p>The following configuration will enable OAuth2 authentication at the gateway instance level, requiring all requests to be authenticated before access.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">client_secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- name: consumer1\x7F  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F- name: consumer2\x7F  client_id: 87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx\x7F  client_secret: hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx"><div></div></button></div></figure></div>
<h1 id="request-example">Request Example</h1>
<h2 id="using-client-credential-authorization-mode">Using Client Credential Authorization Mode</h2>
<h3 id="get-accesstoken">Get AccessToken</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Get via GET method (recommended)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://test.com/oauth2/token?grant_type=client_credentials&#x26;client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#x26;client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Get via POST method (requires matching a route with a real target service first, or the gateway will not read the request Body)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://test.com/oauth2/token'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'content-type: application/x-www-form-urlencoded'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'grant_type=client_credentials&#x26;client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#x26;client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Simply get the access_token field from the response:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"token_type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"bearer",</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"access_token"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0",</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"expires_in"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">7200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://test.com/oauth2/token?grant_type=client_credentials&#x26;client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#x26;client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#x27;\x7Fcurl &#x27;http://test.com/oauth2/token&#x27; -H &#x27;content-type: application/x-www-form-urlencoded&#x27; -d &#x27;grant_type=client_credentials&#x26;client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#x26;client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx&#x27;\x7F{\x7F  &#x22;token_type&#x22;: &#x22;bearer&#x22;,\x7F  &#x22;access_token&#x22;: &#x22;eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0&#x22;,\x7F  &#x22;expires_in&#x22;: 7200\x7F}"><div></div></button></div></figure></div>
<h3 id="accesstoken-request">AccessToken Request</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://test.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://test.com&#x27; -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0&#x27;"><div></div></button></div></figure></div>
<h1 id="common-error-code-description">Common Error Code Description</h1>




















<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Explanation</th></tr></thead><tbody><tr><td>401</td><td>Invalid Jwt token</td><td>JWT not provided in request header, or JWT format is incorrect, or expired, etc.</td></tr><tr><td>403</td><td>Access Denied</td><td>No permission to access the current route.</td></tr></tbody></table>`,a={title:"OAuth2 Authentication",keywords:["higress","oauth2"],description:"OAuth2 authentication plugin configuration reference"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/oauth.md",n=void 0,c=function(){return`## Function Description
\`OAuth2\` plugin implements the capability of issuing OAuth2 Access Tokens based on JWT (JSON Web Tokens), complying with the [RFC9068](https://datatracker.ietf.org/doc/html/rfc9068) specification.

## Runtime Properties
Plugin execution phase: \`Authentication Phase\`
Plugin execution priority: \`350\`

## Configuration Fields
### Authentication Configuration
| Name                 | Data Type        | Requirement                                 | Default Value    | Description                                                                                                                                                                       |
| -------------------- | ---------------- | ------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`consumers\`          | array of object  | Required                                    | -                | Configures the callers of the service for request authentication                                                                                                                |
| \`issuer\`             | string           | Optional                                    | Higress-Gateway  | Used to fill the issuer in the JWT                                                                                                                                              |
| \`auth_path\`          | string           | Optional                                    | /oauth2/token    | Specifies the path suffix for issuing Tokens. When configured at the routing level, ensure it matches the corresponding route first. When using API management, create an interface with the same path. |
| \`global_credentials\` | bool             | Optional                                    | true             | Allows any route to issue credentials for access under the condition of authentication through the consumer.                                                                    |
| \`auth_header_name\`   | string           | Optional                                    | Authorization    | Specifies which request header to retrieve the JWT from                                                                                                                                                     |
| \`token_ttl\`          | number           | Optional                                    | 7200             | The time duration in seconds for which the token is valid after issuance.                                                                                                      |
| \`clock_skew_seconds\` | number           | Optional                                    | 60               | Allowed clock skew when verifying the exp and iat fields of the JWT, in seconds.                                                                                               |
| \`keep_token\`         | bool             | Optional                                    | true             | Indicates whether to keep the JWT when forwarding to the backend.                                                                                                              |
| \`global_auth\`        | array of string  | Optional (**Instance-level configuration only**) | -                | Can only be configured at the instance level. If set to true, the global authentication mechanism takes effect; if false, the authentication mechanism only takes effect for configured domains and routes; if not configured, global effect occurs only when there are no domain and route configurations (compatible with legacy user habits). |

The configuration fields for each item in \`consumers\` are as follows:
| Name                    | Data Type         | Requirement | Default Value                                     | Description                        |
| ----------------------- | ------------------| ----------- | ------------------------------------------------- | ---------------------------------- |
| \`name\`                  | string            | Required    | -                                               | Configures the name of the consumer.  |
| \`client_id\`             | string            | Required    | -                                               | OAuth2 client id                  |
| \`client_secret\`         | string            | Required    | -                                               | OAuth2 client secret              |

**Note:**
- For routes with this configuration enabled, if the path suffix matches \`auth_path\`, the route will not forward to the original target service but will be used to generate a Token.
- If \`global_credentials\` is disabled, please ensure that the routes enabling this plugin do not precisely match routes. If there is another prefix-matching route, it may lead to unexpected behavior.
- For requests authenticated and authorized, the request header will have an \`X-Mse-Consumer\` field added to identify the caller's name.

### Authorization Configuration (Optional)
| Name        | Data Type        | Requirement                                    | Default Value | Description                                                                                                                                                         |
| ----------- | ---------------- | ---------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`allow\`     | array of string  | Optional (**Non-instance-level configuration**) | -              | Can only be configured on fine-grained rules such as routes or domains, allowing specified consumers to access requests that meet the matching conditions for fine-grained permission control. |

**Note:**
- Authentication and authorization configurations cannot coexist in one rule.

## Configuration Example
### Route Granularity Configuration Authentication
For the two routes \`route-a\` and \`route-b\`, do the following plugin configuration:
\`\`\`yaml
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`
At this time, although using the same configuration, the credentials issued under \`route-a\` cannot be used to access \`route-b\`, and vice versa.

If you want the same configuration to share credential access permissions, you can configure as follows:
\`\`\`yaml
global_credentials: true
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

### Global Configuration Authentication, Route Granularity Authorization
The following configuration will enable Jwt Auth for specific routes or domains on the gateway. Note that if a JWT matches multiple \`jwks\`, it will hit the first matching \`consumer\` in the order of configuration.

At the instance level, do the following plugin configuration:
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- name: consumer2
  client_id: 87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

For the routes \`route-a\` and \`route-b\`, do the following plugin configuration:
\`\`\`yaml
allow:
- consumer1
\`\`\`

For the domains \`*.example.com\` and \`test.com\`, do the following plugin configuration:
\`\`\`yaml
allow:
- consumer2
\`\`\`

In this example, route names \`route-a\` and \`route-b\` refer to the route names filled in when creating the gateway route. When these two routes are matched, it will allow access for the caller with \`name\` as \`consumer1\`, and other callers will not be allowed to access.

In this example, the domains \`*.example.com\` and \`test.com\` are used to match request domains. When a matching domain is found, it will allow access for the caller with \`name\` as \`consumer2\`, while other callers will not be allowed to access.

### Enable at Gateway Instance Level
The following configuration will enable OAuth2 authentication at the gateway instance level, requiring all requests to be authenticated before access.
\`\`\`yaml
global_auth: true
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- name: consumer2
  client_id: 87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

# Request Example
## Using Client Credential Authorization Mode
### Get AccessToken
\`\`\`bash
# Get via GET method (recommended)
curl 'http://test.com/oauth2/token?grant_type=client_credentials&client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

# Get via POST method (requires matching a route with a real target service first, or the gateway will not read the request Body)
curl 'http://test.com/oauth2/token' -H 'content-type: application/x-www-form-urlencoded' -d 'grant_type=client_credentials&client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

# Simply get the access_token field from the response:
{
  "token_type": "bearer",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0",
  "expires_in": 7200
}
\`\`\`

### AccessToken Request
\`\`\`bash
curl 'http://test.com' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0'
\`\`\`

# Common Error Code Description
| HTTP Status Code | Error Message         | Explanation                                                                  |
| ---------------- | ----------------------| --------------------------------------------------------------------------- |
| 401              | Invalid Jwt token      | JWT not provided in request header, or JWT format is incorrect, or expired, etc. |
| 403              | Access Denied          | No permission to access the current route.                                  |
`},x=function(){return e},o=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"authentication-configuration",text:"Authentication Configuration"},{depth:3,slug:"authorization-configuration-optional",text:"Authorization Configuration (Optional)"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"route-granularity-configuration-authentication",text:"Route Granularity Configuration Authentication"},{depth:3,slug:"global-configuration-authentication-route-granularity-authorization",text:"Global Configuration Authentication, Route Granularity Authorization"},{depth:3,slug:"enable-at-gateway-instance-level",text:"Enable at Gateway Instance Level"},{depth:1,slug:"request-example",text:"Request Example"},{depth:2,slug:"using-client-credential-authorization-mode",text:"Using Client Credential Authorization Mode"},{depth:3,slug:"get-accesstoken",text:"Get AccessToken"},{depth:3,slug:"accesstoken-request",text:"AccessToken Request"},{depth:1,slug:"common-error-code-description",text:"Common Error Code Description"}]},t=d((m,y,v)=>{const{layout:E,...s}=a;return s.file=i,s.url=n,r`${p()}${u(e)}`})});export{t as Content,g as __tla,x as compiledContent,t as default,i as file,a as frontmatter,o as getHeadings,c as rawContent,n as url};
