import{c,__tla as o}from"./astro-component.YcfuVWta.js";import{r,m as E,u as y,__tla as u}from"./constant.Cx6UCuye.js";import{__tla as v}from"./astro/assets-service.r1ocst81.js";let e,l,a,n,d,p,t,h=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="feature-description">Feature Description</h2>
<p>The <code dir="auto">hmac-auth-apisix</code> plugin is compatible with Apache APISIX\u2019s HMAC authentication mechanism. It generates tamper-proof digital signatures for HTTP requests using the HMAC algorithm, enabling request identity authentication and permission control. This plugin is fully compatible with the configuration and signature algorithm of the Apache APISIX HMAC Authentication Plugin. For signature generation methods, please refer to the <a href="https://apisix.apache.org/docs/apisix/plugins/hmac-auth/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Apache APISIX HMAC Authentication Documentation</a>.</p>
<h2 id="operational-attributes">Operational Attributes</h2>
<ul>
<li>Plugin Execution Phase: <code dir="auto">Authentication Phase</code></li>
<li>Plugin Execution Priority: <code dir="auto">330</code></li>
</ul>
<h2 id="configuration-fields">Configuration Fields</h2>
<p><strong>Note:</strong></p>
<ul>
<li>In a single rule, authentication configuration and authorization configuration cannot coexist.</li>
<li>For requests that pass authentication and authorization, a <code dir="auto">X-Mse-Consumer</code> field will be added to the request header to identify the caller\u2019s name.</li>
</ul>
<h3 id="authentication-configuration">Authentication Configuration</h3>




































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>Optional (<strong>Instance-level configuration only</strong>)</td><td>-</td><td>Can only be configured at the instance level. If set to <code dir="auto">true</code>, the authentication mechanism takes effect globally; if set to <code dir="auto">false</code>, authentication only applies to domains and routes with specific configurations. If not configured, it takes effect globally only when there are no domain or route configurations (to maintain compatibility with legacy user habits).</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configures service callers for request authentication.</td></tr><tr><td><code dir="auto">allowed_algorithms</code></td><td>array of string</td><td>Optional</td><td>[\u201Chmac-sha1\u201D, \u201Chmac-sha256\u201D, \u201Chmac-sha512\u201D]</td><td>List of allowed HMAC algorithms. Valid values are combinations of \u201Chmac-sha1\u201D, \u201Chmac-sha256\u201D, and \u201Chmac-sha512\u201D.</td></tr><tr><td><code dir="auto">clock_skew</code></td><td>number</td><td>Optional</td><td>300</td><td>Maximum allowed time difference (in seconds) between the timestamp of the client request and the current time of the Higress server. This helps resolve time synchronization differences between the client and server and prevents replay attacks. The timestamp is calculated based on the time in the <code dir="auto">Date</code> header (must be in GMT format). If set to <code dir="auto">0</code>, this check is skipped.</td></tr><tr><td><code dir="auto">signed_headers</code></td><td>array of string</td><td>Optional</td><td>-</td><td>List of HTTP headers that should be included in the HMAC signature of the client request.</td></tr><tr><td><code dir="auto">validate_request_body</code></td><td>boolean</td><td>Optional</td><td>false</td><td>If set to <code dir="auto">true</code>, the integrity of the request body is verified to ensure no tampering during transmission. Specifically, the plugin creates a SHA-256 base64-encoded digest and compares it with the <code dir="auto">Digest</code> header. Verification fails if the <code dir="auto">Digest</code> header is missing or the digest does not match.</td></tr><tr><td><code dir="auto">hide_credentials</code></td><td>boolean</td><td>Optional</td><td>false</td><td>If set to <code dir="auto">true</code>, the authorization request header will not be passed to the upstream service.</td></tr><tr><td><code dir="auto">anonymous_consumer</code></td><td>string</td><td>Optional</td><td>-</td><td>Name of the anonymous consumer. If configured, anonymous users are allowed to bypass identity authentication.</td></tr></tbody></table>
<h3 id="configuration-fields-for-each-item-in-consumers">Configuration Fields for Each Item in <code dir="auto">consumers</code></h3>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">access_key</code></td><td>string</td><td>Required</td><td>-</td><td>A unique identifier for the consumer, used to reference configurations such as the secret key.</td></tr><tr><td><code dir="auto">secret_key</code></td><td>string</td><td>Required</td><td>-</td><td>Secret key used to generate the HMAC signature.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Optional</td><td><code dir="auto">access_key</code></td><td>Name of the consumer.</td></tr></tbody></table>
<h3 id="authorization-configuration-non-essential">Authorization Configuration (Non-essential)</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Optional (<strong>Non-instance-level configuration only</strong>)</td><td>-</td><td>Can only be configured in fine-grained rules such as routes or domains. For requests that match the criteria, it configures the consumers allowed to access, enabling fine-grained permission control.</td></tr></tbody></table>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="global-configuration-authentication-and-route-level-authorization">Global Configuration Authentication and Route-Level Authorization</h3>
<p>The following configuration is used to enable Hmac Auth authentication and authorization for specific routes or domains of the gateway. <strong>Note: The <code dir="auto">access_key</code> field must be unique.</strong></p>
<h4 id="example-1-basic-route-and-domain-authorization-configuration">Example 1: Basic Route and Domain Authorization Configuration</h4>
<p><strong>Instance-Level Plugin Configuration</strong>:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  access_key: consumer1-key\x7F  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F- name: consumer2\x7F  access_key: consumer2-key\x7F  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<p><strong>Route-Level Configuration</strong> (applicable to <code dir="auto">route-a</code> and <code dir="auto">route-b</code>):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Only consumer1 is allowed access</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1  # Only consumer1 is allowed access"><div></div></button></div></figure></div>
<p><strong>Domain-Level Configuration</strong> (applicable to <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code>):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Only consumer2 is allowed access</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2  # Only consumer2 is allowed access"><div></div></button></div></figure></div>
<h4 id="configuration-instructions">Configuration Instructions:</h4>
<ul>
<li><strong>Route Names</strong> (e.g., <code dir="auto">route-a</code>, <code dir="auto">route-b</code>): Correspond to the names defined when creating gateway routes. Only <code dir="auto">consumer1</code> is allowed access when matched.</li>
<li><strong>Domain Matching</strong> (e.g., <code dir="auto">*.example.com</code>, <code dir="auto">test.com</code>): Used to filter request domains. Only <code dir="auto">consumer2</code> is allowed access when matched.</li>
<li>Callers not in the <code dir="auto">allow</code> list will be denied access.</li>
</ul>
<h4 id="to-generate-a-signature-use-the-following-go-code-snippet-or-other-tech-stacks">To Generate a Signature, Use the Following Go Code Snippet or Other Tech Stacks:</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/hmac</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/sha1</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/sha256</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/sha512</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">encoding/base64</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">fmt</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">hash</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">strings</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">time</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// SignedHeader defines the structure of signed headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SignedHeader</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">Name  </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">Value </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Configuration parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">keyID </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"consumer1-key"</span><span style="--0:#E1E4E8">                            </span><span style="--0:#99A0A6">// Key ID</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">secretKey </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"2bda943c-ba2b-11ec-ba07-00163e1250b5"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6">// Secret key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestMethod </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"POST"</span><span style="--0:#E1E4E8">                             </span><span style="--0:#99A0A6">// HTTP method</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestPath </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"/foo"</span><span style="--0:#E1E4E8">                               </span><span style="--0:#99A0A6">// Route URI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">algorithm </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha256"</span><span style="--0:#E1E4E8">                          </span><span style="--0:#99A0A6">// Algorithm</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">validateRequestBody </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">                        </span><span style="--0:#99A0A6">// Whether to validate the request body; set to true to add the Digest header</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// If signed_headers is configured, add them in order</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signedHeaders </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> []</span><span style="--0:#B392F0">SignedHeader</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//{Name: "x-custom-header-a", Value: "test1"},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//{Name: "x-custom-header-b", Value: "test2"},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">body </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"{}"</span><span style="--0:#E1E4E8">) </span><span style="--0:#99A0A6">// Request body</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Get current GMT time</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">gmtTime </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> time.</span><span style="--0:#B392F0">Now</span><span style="--0:#E1E4E8">().</span><span style="--0:#B392F0">UTC</span><span style="--0:#E1E4E8">().</span><span style="--0:#B392F0">Format</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Mon, 02 Jan 2006 15:04:05 GMT"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Dynamically construct the signing string (in order)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signingStringBuilder </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">strings</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Builder</span><span style="--0:#E1E4E8">{}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signingStringBuilder.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s\\n%s</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">date: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">keyID,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestMethod,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestPath,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">gmtTime))</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Add headers in the order specified in signedHeaders</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, header </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> signedHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">signingStringBuilder.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, header.Name, header.Value))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signingString </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> signingStringBuilder.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Generate signature</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signature, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">generateHmacSignature</span><span style="--0:#E1E4E8">(secretKey, algorithm, signingString)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Printf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error generating signature: </span><span style="--0:#79B8FF">%v\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Dynamically build the content of the headers field</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">headersField </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"@request-target date"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, header </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> signedHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">headersField </span><span style="--0:#F97583">+=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">" "</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> header.Name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Construct request headers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">headers </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"Date"</span><span style="--0:#E1E4E8">: gmtTime,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"Authorization"</span><span style="--0:#E1E4E8">: fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">\`Signature keyId="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">",algorithm="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">",headers="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">",signature="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"\`</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">keyID,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">algorithm,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">headersField,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">signature,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Add Digest header if request body validation is required</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> validateRequestBody {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">headers[</span><span style="--0:#9ECBFF">"Digest"</span><span style="--0:#E1E4E8">] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">calculateBodyDigest</span><span style="--0:#E1E4E8">(body)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Add signed request headers</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, header </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> signedHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">formattedHeaderName </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">formatHeaderName</span><span style="--0:#E1E4E8">(header.Name)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">headers[formattedHeaderName] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> header.Value</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Print the signing string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Printf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"signingString: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, signingString)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Print request headers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Println</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Headers:"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> key, value </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> headers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Printf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, key, value)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// generateHmacSignature generates an HMAC signature</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">generateHmacSignature</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">secretKey</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">algorithm</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">message</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> mac </span><span style="--0:#B392F0">hash</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Hash</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">switch</span><span style="--0:#E1E4E8"> algorithm {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha1"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mac </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmac.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(sha1.New, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(secretKey))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha256"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mac </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmac.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(sha256.New, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(secretKey))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha512"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mac </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmac.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(sha512.New, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(secretKey))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">default</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">, fmt.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"unsupported algorithm: </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, algorithm)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">mac.</span><span style="--0:#B392F0">Write</span><span style="--0:#E1E4E8">([]</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(message))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signature </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> mac.</span><span style="--0:#B392F0">Sum</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> base64.StdEncoding.</span><span style="--0:#B392F0">EncodeToString</span><span style="--0:#E1E4E8">(signature), </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// calculateBodyDigest calculates the digest of the request body</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">calculateBodyDigest</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">body</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">hash </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> sha256.</span><span style="--0:#B392F0">Sum256</span><span style="--0:#E1E4E8">(body)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">encodedDigest </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> base64.StdEncoding.</span><span style="--0:#B392F0">EncodeToString</span><span style="--0:#E1E4E8">(hash[:])</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"SHA-256="</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> encodedDigest</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// formatHeaderName converts the header name to standard HTTP header format</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">formatHeaderName</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">headerName</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">parts </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">Split</span><span style="--0:#E1E4E8">(headerName, </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> i, part </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> parts {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">len</span><span style="--0:#E1E4E8">(part) </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">parts[i] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">ToUpper</span><span style="--0:#E1E4E8">(part[:</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">]) </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">ToLower</span><span style="--0:#E1E4E8">(part[</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">:])</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">Join</span><span style="--0:#E1E4E8">(parts, </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;crypto/hmac&#x22;\x7F  &#x22;crypto/sha1&#x22;\x7F  &#x22;crypto/sha256&#x22;\x7F  &#x22;crypto/sha512&#x22;\x7F  &#x22;encoding/base64&#x22;\x7F  &#x22;fmt&#x22;\x7F  &#x22;hash&#x22;\x7F  &#x22;strings&#x22;\x7F  &#x22;time&#x22;\x7F)\x7F\x7F// SignedHeader defines the structure of signed headers\x7Ftype SignedHeader struct {\x7F  Name  string\x7F  Value string\x7F}\x7F\x7Ffunc main() {\x7F  // Configuration parameters\x7F  keyID := &#x22;consumer1-key&#x22;                            // Key ID\x7F  secretKey := &#x22;2bda943c-ba2b-11ec-ba07-00163e1250b5&#x22; // Secret key\x7F  requestMethod := &#x22;POST&#x22;                             // HTTP method\x7F  requestPath := &#x22;/foo&#x22;                               // Route URI\x7F  algorithm := &#x22;hmac-sha256&#x22;                          // Algorithm\x7F  validateRequestBody := false                        // Whether to validate the request body; set to true to add the Digest header\x7F\x7F  // If signed_headers is configured, add them in order\x7F  signedHeaders := []SignedHeader{\x7F    //{Name: &#x22;x-custom-header-a&#x22;, Value: &#x22;test1&#x22;},\x7F    //{Name: &#x22;x-custom-header-b&#x22;, Value: &#x22;test2&#x22;},\x7F  }\x7F\x7F  body := []byte(&#x22;{}&#x22;) // Request body\x7F\x7F  // Get current GMT time\x7F  gmtTime := time.Now().UTC().Format(&#x22;Mon, 02 Jan 2006 15:04:05 GMT&#x22;)\x7F\x7F  // Dynamically construct the signing string (in order)\x7F  signingStringBuilder := strings.Builder{}\x7F  signingStringBuilder.WriteString(fmt.Sprintf(&#x22;%s\\n%s %s\\ndate: %s\\n&#x22;,\x7F    keyID,\x7F    requestMethod,\x7F    requestPath,\x7F    gmtTime))\x7F\x7F  // Add headers in the order specified in signedHeaders\x7F  for _, header := range signedHeaders {\x7F    signingStringBuilder.WriteString(fmt.Sprintf(&#x22;%s: %s\\n&#x22;, header.Name, header.Value))\x7F  }\x7F\x7F  signingString := signingStringBuilder.String()\x7F\x7F  // Generate signature\x7F  signature, err := generateHmacSignature(secretKey, algorithm, signingString)\x7F  if err != nil {\x7F    fmt.Printf(&#x22;Error generating signature: %v\\n&#x22;, err)\x7F    return\x7F  }\x7F\x7F  // Dynamically build the content of the headers field\x7F  headersField := &#x22;@request-target date&#x22;\x7F  for _, header := range signedHeaders {\x7F    headersField += &#x22; &#x22; + header.Name\x7F  }\x7F\x7F  // Construct request headers\x7F  headers := map[string]string{\x7F    &#x22;Date&#x22;: gmtTime,\x7F    &#x22;Authorization&#x22;: fmt.Sprintf(&#x60;Signature keyId=&#x22;%s&#x22;,algorithm=&#x22;%s&#x22;,headers=&#x22;%s&#x22;,signature=&#x22;%s&#x22;&#x60;,\x7F      keyID,\x7F      algorithm,\x7F      headersField,\x7F      signature,\x7F    ),\x7F  }\x7F\x7F  // Add Digest header if request body validation is required\x7F  if validateRequestBody {\x7F    headers[&#x22;Digest&#x22;] = calculateBodyDigest(body)\x7F  }\x7F\x7F  // Add signed request headers\x7F  for _, header := range signedHeaders {\x7F    formattedHeaderName := formatHeaderName(header.Name)\x7F    headers[formattedHeaderName] = header.Value\x7F  }\x7F\x7F  // Print the signing string\x7F  fmt.Printf(&#x22;signingString: %s\\n&#x22;, signingString)\x7F  // Print request headers\x7F  fmt.Println(&#x22;Headers:&#x22;)\x7F  for key, value := range headers {\x7F    fmt.Printf(&#x22;%s: %s\\n&#x22;, key, value)\x7F  }\x7F}\x7F\x7F// generateHmacSignature generates an HMAC signature\x7Ffunc generateHmacSignature(secretKey, algorithm, message string) (string, error) {\x7F  var mac hash.Hash\x7F\x7F  switch algorithm {\x7F  case &#x22;hmac-sha1&#x22;:\x7F    mac = hmac.New(sha1.New, []byte(secretKey))\x7F  case &#x22;hmac-sha256&#x22;:\x7F    mac = hmac.New(sha256.New, []byte(secretKey))\x7F  case &#x22;hmac-sha512&#x22;:\x7F    mac = hmac.New(sha512.New, []byte(secretKey))\x7F  default:\x7F    return &#x22;&#x22;, fmt.Errorf(&#x22;unsupported algorithm: %s&#x22;, algorithm)\x7F  }\x7F\x7F  mac.Write([]byte(message))\x7F  signature := mac.Sum(nil)\x7F  return base64.StdEncoding.EncodeToString(signature), nil\x7F}\x7F\x7F// calculateBodyDigest calculates the digest of the request body\x7Ffunc calculateBodyDigest(body []byte) string {\x7F  hash := sha256.Sum256(body)\x7F  encodedDigest := base64.StdEncoding.EncodeToString(hash[:])\x7F  return &#x22;SHA-256=&#x22; + encodedDigest\x7F}\x7F\x7F// formatHeaderName converts the header name to standard HTTP header format\x7Ffunc formatHeaderName(headerName string) string {\x7F  parts := strings.Split(headerName, &#x22;-&#x22;)\x7F  for i, part := range parts {\x7F    if len(part) > 0 {\x7F      parts[i] = strings.ToUpper(part[:1]) + strings.ToLower(part[1:])\x7F    }\x7F  }\x7F  return strings.Join(parts, &#x22;-&#x22;)\x7F}"><div></div></button></div></figure></div>
<h4 id="request-and-response-examples">Request and Response Examples:</h4>
<ol>
<li><strong>Validation Passed Scenario</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:53:18 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:53:18 GMT&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: Returns a normal response from the backend service.</li>
<li><strong>Additional Info</strong>: After successful authentication, the request header <code dir="auto">X-Mse-Consumer: consumer1</code> is automatically added and passed to the backend.</li>
</ul>
<ol start="2">
<li><strong>Signature Verification Failure Due to Modified Request Method</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PUT</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># POST is modified to PUT here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:53:18 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X PUT &#x27;http://localhost:8082/foo&#x27; \\  # POST is modified to PUT here\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:53:18 GMT&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: <code dir="auto">401 Unauthorized</code></li>
<li><strong>Error Message</strong>: <code dir="auto">{"message":"client request can't be validated: Invalid signature"}</code></li>
</ul>
<ol start="3">
<li><strong>Caller Not in Allow List</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer2-key",algorithm="hmac-sha256",headers="@request-target date",signature="dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:59:01 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer2-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:59:01 GMT&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: <code dir="auto">401 Unauthorized</code></li>
<li><strong>Error Message</strong>: <code dir="auto">{"message":"client request can't be validated: consumer 'consumer2' is not allowed"}</code></li>
</ul>
<ol start="4">
<li><strong>Expired Timestamp</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:53:18 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Expired timestamp</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:53:18 GMT&#x27; \\  # Expired timestamp\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: <code dir="auto">401 Unauthorized</code></li>
<li><strong>Error Message</strong>: <code dir="auto">{"message":"client request can't be validated: Clock skew exceeded"}</code></li>
</ul>
<h4 id="example-2-configuration-with-custom-signed-headers-and-request-body-validation">Example 2: Configuration with Custom Signed Headers and Request Body Validation</h4>
<p><strong>Instance-Level Plugin Configuration</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">signed_headers</span><span style="--0:#E1E4E8">:  </span><span style="--0:#99A0A6"># Custom request headers to be included in the signature</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Custom-Header-A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Custom-Header-B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">validate_request_body</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Enable request body signature verification</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  access_key: consumer1-key\x7F  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F- name: consumer2\x7F  access_key: consumer2-key\x7F  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7Fsigned_headers:  # Custom request headers to be included in the signature\x7F- X-Custom-Header-A\x7F- X-Custom-Header-B\x7Fvalidate_request_body: true  # Enable request body signature verification"><div></div></button></div></figure></div>
<h4 id="request-and-response-examples-1">Request and Response Examples:</h4>
<ol>
<li><strong>Validation Passed Scenario</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Sat, 13 Sep 2025 00:04:34 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o='</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Request body digest</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-Custom-Header-A:test1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-B:test2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date x-custom-header-a x-custom-header-b&#x22;,signature=&#x22;KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo=&#x22;&#x27; \\\x7F-H &#x27;Date:Sat, 13 Sep 2025 00:04:34 GMT&#x27; \\\x7F-H &#x27;Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=&#x27; \\  # Request body digest\x7F-H &#x27;X-Custom-Header-A:test1&#x27; \\\x7F-H &#x27;X-Custom-Header-B:test2&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: Returns a normal response from the backend service.</li>
</ul>
<ol start="2">
<li><strong>Missing Signed Header</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Sat, 13 Sep 2025 00:04:34 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o='</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-B:test2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># X-Custom-Header-A is missing</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date x-custom-header-b&#x22;,signature=&#x22;KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo=&#x22;&#x27; \\\x7F-H &#x27;Date:Sat, 13 Sep 2025 00:04:34 GMT&#x27; \\\x7F-H &#x27;Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=&#x27; \\\x7F-H &#x27;X-Custom-Header-B:test2&#x27; \\  # X-Custom-Header-A is missing\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: <code dir="auto">401 Unauthorized</code></li>
<li><strong>Error Message</strong>: <code dir="auto">{"message":"client request can't be validated: expected header \\"X-Custom-Header-A\\" missing in signing"}</code></li>
</ul>
<ol start="3">
<li><strong>Tampered Request Body</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Sat, 13 Sep 2025 00:09:40 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o='</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-A:test1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-B:test2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"key":"value"}'</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Tampered request body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date x-custom-header-a x-custom-header-b&#x22;,signature=&#x22;NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA=&#x22;&#x27; \\\x7F-H &#x27;Date:Sat, 13 Sep 2025 00:09:40 GMT&#x27; \\\x7F-H &#x27;Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=&#x27; \\\x7F-H &#x27;X-Custom-Header-A:test1&#x27; \\\x7F-H &#x27;X-Custom-Header-B:test2&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;key&#x22;:&#x22;value&#x22;}&#x27;  # Tampered request body"><div></div></button></div></figure></div>
<ul>
<li><strong>Response</strong>: <code dir="auto">401 Unauthorized</code></li>
<li><strong>Error Message</strong>: <code dir="auto">{"message":"client request can't be validated: Invalid digest"}</code></li>
</ul>
<h3 id="enable-global-authentication-at-the-gateway-instance-level">Enable Global Authentication at the Gateway Instance Level</h3>
<p>The following configuration enables Hmac Auth authentication at the gateway instance level. <strong>All requests must be authenticated to access the gateway</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Enable global authentication</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true  # Enable global authentication\x7Fconsumers:\x7F- name: consumer1\x7F  access_key: consumer1-key\x7F  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F- name: consumer2\x7F  access_key: consumer2-key\x7F  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<p><strong>Description</strong>: When <code dir="auto">global_auth: true</code>, all requests to the gateway must carry valid authentication information. Unauthenticated requests will be rejected directly.</p>`,n={title:"APISIX HMAC Authentication",keywords:["higress","hmac auth","apisix"],description:"Configuration Reference for the APISIX HMAC Authentication Plugin"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/hmac-auth-apisix.md",t=void 0,p=function(){return`
## Feature Description
The \`hmac-auth-apisix\` plugin is compatible with Apache APISIX's HMAC authentication mechanism. It generates tamper-proof digital signatures for HTTP requests using the HMAC algorithm, enabling request identity authentication and permission control. This plugin is fully compatible with the configuration and signature algorithm of the Apache APISIX HMAC Authentication Plugin. For signature generation methods, please refer to the [Apache APISIX HMAC Authentication Documentation](https://apisix.apache.org/docs/apisix/plugins/hmac-auth/).


## Operational Attributes
- Plugin Execution Phase: \`Authentication Phase\`
- Plugin Execution Priority: \`330\`


## Configuration Fields
**Note:**
- In a single rule, authentication configuration and authorization configuration cannot coexist.
- For requests that pass authentication and authorization, a \`X-Mse-Consumer\` field will be added to the request header to identify the caller's name.


### Authentication Configuration

| Name                    | Data Type        | Requirements                              | Default Value                                      | Description                                                                                                                                                                                                 |
| ----------------------- | ---------------- | ----------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`global_auth\`           | bool             | Optional (**Instance-level configuration only**) | -                                                   | Can only be configured at the instance level. If set to \`true\`, the authentication mechanism takes effect globally; if set to \`false\`, authentication only applies to domains and routes with specific configurations. If not configured, it takes effect globally only when there are no domain or route configurations (to maintain compatibility with legacy user habits). |
| \`consumers\`             | array of object  | Required                                  | -                                                   | Configures service callers for request authentication.                                                                                                                                                     |
| \`allowed_algorithms\`    | array of string  | Optional                                  | ["hmac-sha1", "hmac-sha256", "hmac-sha512"]        | List of allowed HMAC algorithms. Valid values are combinations of "hmac-sha1", "hmac-sha256", and "hmac-sha512".                                                                                           |
| \`clock_skew\`            | number           | Optional                                  | 300                                                 | Maximum allowed time difference (in seconds) between the timestamp of the client request and the current time of the Higress server. This helps resolve time synchronization differences between the client and server and prevents replay attacks. The timestamp is calculated based on the time in the \`Date\` header (must be in GMT format). If set to \`0\`, this check is skipped. |
| \`signed_headers\`        | array of string  | Optional                                  | -                                                   | List of HTTP headers that should be included in the HMAC signature of the client request.                                                                                                                  |
| \`validate_request_body\` | boolean          | Optional                                  | false                                               | If set to \`true\`, the integrity of the request body is verified to ensure no tampering during transmission. Specifically, the plugin creates a SHA-256 base64-encoded digest and compares it with the \`Digest\` header. Verification fails if the \`Digest\` header is missing or the digest does not match. |
| \`hide_credentials\`      | boolean          | Optional                                  | false                                               | If set to \`true\`, the authorization request header will not be passed to the upstream service.                                                                                                              |
| \`anonymous_consumer\`    | string           | Optional                                  | -                                                   | Name of the anonymous consumer. If configured, anonymous users are allowed to bypass identity authentication.                                                                                              |


### Configuration Fields for Each Item in \`consumers\`

| Name         | Data Type | Requirements | Default Value | Description                                                                 |
|--------------|-----------|--------------|---------------|-----------------------------------------------------------------------------|
| \`access_key\` | string    | Required     | -             | A unique identifier for the consumer, used to reference configurations such as the secret key. |
| \`secret_key\` | string    | Required     | -             | Secret key used to generate the HMAC signature.                             |
| \`name\`       | string    | Optional     | \`access_key\`  | Name of the consumer.                                                       |


### Authorization Configuration (Non-essential)

| Name    | Data Type        | Requirements                              | Default Value | Description                                                                                                                                 |
|---------|------------------| ----------------------------------------- |---------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| \`allow\` | array of string  | Optional (**Non-instance-level configuration only**) | -             | Can only be configured in fine-grained rules such as routes or domains. For requests that match the criteria, it configures the consumers allowed to access, enabling fine-grained permission control. |


## Configuration Examples

### Global Configuration Authentication and Route-Level Authorization

The following configuration is used to enable Hmac Auth authentication and authorization for specific routes or domains of the gateway. **Note: The \`access_key\` field must be unique.**


#### Example 1: Basic Route and Domain Authorization Configuration

**Instance-Level Plugin Configuration**:
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`  

**Route-Level Configuration** (applicable to \`route-a\` and \`route-b\`):
\`\`\`yaml
allow: 
- consumer1  # Only consumer1 is allowed access
\`\`\`  

**Domain-Level Configuration** (applicable to \`*.example.com\` and \`test.com\`):
\`\`\`yaml
allow:
- consumer2  # Only consumer2 is allowed access
\`\`\`  


#### Configuration Instructions:
- **Route Names** (e.g., \`route-a\`, \`route-b\`): Correspond to the names defined when creating gateway routes. Only \`consumer1\` is allowed access when matched.
- **Domain Matching** (e.g., \`*.example.com\`, \`test.com\`): Used to filter request domains. Only \`consumer2\` is allowed access when matched.
- Callers not in the \`allow\` list will be denied access.


#### To Generate a Signature, Use the Following Go Code Snippet or Other Tech Stacks:

\`\`\`go
package main

import (
	"crypto/hmac"
	"crypto/sha1"
	"crypto/sha256"
	"crypto/sha512"
	"encoding/base64"
	"fmt"
	"hash"
	"strings"
	"time"
)

// SignedHeader defines the structure of signed headers
type SignedHeader struct {
	Name  string
	Value string
}

func main() {
	// Configuration parameters
	keyID := "consumer1-key"                            // Key ID
	secretKey := "2bda943c-ba2b-11ec-ba07-00163e1250b5" // Secret key
	requestMethod := "POST"                             // HTTP method
	requestPath := "/foo"                               // Route URI
	algorithm := "hmac-sha256"                          // Algorithm
	validateRequestBody := false                        // Whether to validate the request body; set to true to add the Digest header

	// If signed_headers is configured, add them in order
	signedHeaders := []SignedHeader{
		//{Name: "x-custom-header-a", Value: "test1"},
		//{Name: "x-custom-header-b", Value: "test2"},
	}

	body := []byte("{}") // Request body

	// Get current GMT time
	gmtTime := time.Now().UTC().Format("Mon, 02 Jan 2006 15:04:05 GMT")

	// Dynamically construct the signing string (in order)
	signingStringBuilder := strings.Builder{}
	signingStringBuilder.WriteString(fmt.Sprintf("%s\\n%s %s\\ndate: %s\\n",
		keyID,
		requestMethod,
		requestPath,
		gmtTime))

	// Add headers in the order specified in signedHeaders
	for _, header := range signedHeaders {
		signingStringBuilder.WriteString(fmt.Sprintf("%s: %s\\n", header.Name, header.Value))
	}

	signingString := signingStringBuilder.String()

	// Generate signature
	signature, err := generateHmacSignature(secretKey, algorithm, signingString)
	if err != nil {
		fmt.Printf("Error generating signature: %v\\n", err)
		return
	}

	// Dynamically build the content of the headers field
	headersField := "@request-target date"
	for _, header := range signedHeaders {
		headersField += " " + header.Name
	}

	// Construct request headers
	headers := map[string]string{
		"Date": gmtTime,
		"Authorization": fmt.Sprintf(\`Signature keyId="%s",algorithm="%s",headers="%s",signature="%s"\`,
			keyID,
			algorithm,
			headersField,
			signature,
		),
	}

	// Add Digest header if request body validation is required
	if validateRequestBody {
		headers["Digest"] = calculateBodyDigest(body)
	}

	// Add signed request headers
	for _, header := range signedHeaders {
		formattedHeaderName := formatHeaderName(header.Name)
		headers[formattedHeaderName] = header.Value
	}

	// Print the signing string
	fmt.Printf("signingString: %s\\n", signingString)
	// Print request headers
	fmt.Println("Headers:")
	for key, value := range headers {
		fmt.Printf("%s: %s\\n", key, value)
	}
}

// generateHmacSignature generates an HMAC signature
func generateHmacSignature(secretKey, algorithm, message string) (string, error) {
	var mac hash.Hash

	switch algorithm {
	case "hmac-sha1":
		mac = hmac.New(sha1.New, []byte(secretKey))
	case "hmac-sha256":
		mac = hmac.New(sha256.New, []byte(secretKey))
	case "hmac-sha512":
		mac = hmac.New(sha512.New, []byte(secretKey))
	default:
		return "", fmt.Errorf("unsupported algorithm: %s", algorithm)
	}

	mac.Write([]byte(message))
	signature := mac.Sum(nil)
	return base64.StdEncoding.EncodeToString(signature), nil
}

// calculateBodyDigest calculates the digest of the request body
func calculateBodyDigest(body []byte) string {
	hash := sha256.Sum256(body)
	encodedDigest := base64.StdEncoding.EncodeToString(hash[:])
	return "SHA-256=" + encodedDigest
}

// formatHeaderName converts the header name to standard HTTP header format
func formatHeaderName(headerName string) string {
	parts := strings.Split(headerName, "-")
	for i, part := range parts {
		if len(part) > 0 {
			parts[i] = strings.ToUpper(part[:1]) + strings.ToLower(part[1:])
		}
	}
	return strings.Join(parts, "-")
}
\`\`\`  


#### Request and Response Examples:

1. **Validation Passed Scenario**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`  
- **Response**: Returns a normal response from the backend service.
- **Additional Info**: After successful authentication, the request header \`X-Mse-Consumer: consumer1\` is automatically added and passed to the backend.


2. **Signature Verification Failure Due to Modified Request Method**
\`\`\`shell
curl -X PUT 'http://localhost:8082/foo' \\  # POST is modified to PUT here
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`  
- **Response**: \`401 Unauthorized\`
- **Error Message**: \`{"message":"client request can't be validated: Invalid signature"}\`


3. **Caller Not in Allow List**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer2-key",algorithm="hmac-sha256",headers="@request-target date",signature="dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE="' \\
-H 'Date:Fri, 12 Sep 2025 23:59:01 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`  
- **Response**: \`401 Unauthorized\`
- **Error Message**: \`{"message":"client request can't be validated: consumer 'consumer2' is not allowed"}\`


4. **Expired Timestamp**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\  # Expired timestamp
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`  
- **Response**: \`401 Unauthorized\`
- **Error Message**: \`{"message":"client request can't be validated: Clock skew exceeded"}\`


#### Example 2: Configuration with Custom Signed Headers and Request Body Validation

**Instance-Level Plugin Configuration**:
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
signed_headers:  # Custom request headers to be included in the signature
- X-Custom-Header-A
- X-Custom-Header-B
validate_request_body: true  # Enable request body signature verification
\`\`\`  


#### Request and Response Examples:

1. **Validation Passed Scenario**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="' \\
-H 'Date:Sat, 13 Sep 2025 00:04:34 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\  # Request body digest
-H 'X-Custom-Header-A:test1' \\
-H 'X-Custom-Header-B:test2' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`  
- **Response**: Returns a normal response from the backend service.


2. **Missing Signed Header**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="' \\
-H 'Date:Sat, 13 Sep 2025 00:04:34 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\
-H 'X-Custom-Header-B:test2' \\  # X-Custom-Header-A is missing
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`  
- **Response**: \`401 Unauthorized\`
- **Error Message**: \`{"message":"client request can't be validated: expected header \\"X-Custom-Header-A\\" missing in signing"}\`


3. **Tampered Request Body**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA="' \\
-H 'Date:Sat, 13 Sep 2025 00:09:40 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\
-H 'X-Custom-Header-A:test1' \\
-H 'X-Custom-Header-B:test2' \\
-H 'Content-Type: application/json' \\
-d '{"key":"value"}'  # Tampered request body
\`\`\`  
- **Response**: \`401 Unauthorized\`
- **Error Message**: \`{"message":"client request can't be validated: Invalid digest"}\`


### Enable Global Authentication at the Gateway Instance Level

The following configuration enables Hmac Auth authentication at the gateway instance level. **All requests must be authenticated to access the gateway**:

\`\`\`yaml
global_auth: true  # Enable global authentication
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`  

**Description**: When \`global_auth: true\`, all requests to the gateway must carry valid authentication information. Unauthenticated requests will be rejected directly.`},l=function(){return s},d=function(){return[{depth:2,slug:"feature-description",text:"Feature Description"},{depth:2,slug:"operational-attributes",text:"Operational Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"authentication-configuration",text:"Authentication Configuration"},{depth:3,slug:"configuration-fields-for-each-item-in-consumers",text:"Configuration Fields for Each Item in consumers"},{depth:3,slug:"authorization-configuration-non-essential",text:"Authorization Configuration (Non-essential)"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"global-configuration-authentication-and-route-level-authorization",text:"Global Configuration Authentication and Route-Level Authorization"},{depth:4,slug:"example-1-basic-route-and-domain-authorization-configuration",text:"Example 1: Basic Route and Domain Authorization Configuration"},{depth:4,slug:"configuration-instructions",text:"Configuration Instructions:"},{depth:4,slug:"to-generate-a-signature-use-the-following-go-code-snippet-or-other-tech-stacks",text:"To Generate a Signature, Use the Following Go Code Snippet or Other Tech Stacks:"},{depth:4,slug:"request-and-response-examples",text:"Request and Response Examples:"},{depth:4,slug:"example-2-configuration-with-custom-signed-headers-and-request-body-validation",text:"Example 2: Configuration with Custom Signed Headers and Request Body Validation"},{depth:4,slug:"request-and-response-examples-1",text:"Request and Response Examples:"},{depth:3,slug:"enable-global-authentication-at-the-gateway-instance-level",text:"Enable Global Authentication at the Gateway Instance Level"}]},e=c((g,m,f)=>{const{layout:F,...i}=n;return i.file=a,i.url=t,r`${E()}${y(s)}`})});export{e as Content,h as __tla,l as compiledContent,e as default,a as file,n as frontmatter,d as getHeadings,p as rawContent,t as url};
