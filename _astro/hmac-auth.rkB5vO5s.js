import{c,__tla as l}from"./astro-component.cI6d52vQ.js";import{r as p,m as h,u,__tla as g}from"./constant.CjTzk9Ry.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let t,o,a,s,r,d,i,m=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">hmac-auth</code> plugin implements the generation of tamper-proof signatures for HTTP requests based on HMAC algorithm, and uses the signature for identity authentication and authorization.</p>
<h2 id="configuration-fields">Configuration Fields</h2>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configures the caller of the service to authenticate the request.</td></tr><tr><td><code dir="auto">date_offset</code></td><td>number</td><td>Optional</td><td>-</td><td>Configures the maximum allowed time deviation of the client, in seconds. It is used to parse the client\u2019s UTC time from <code dir="auto">the Date</code> header of the request, and can be used to prevent replay attacks. If not configured, no validation is performed.</td></tr><tr><td><code dir="auto">_rules_</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Configures the access control list for specific routes or domains, used for authorization of requests.</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">consumers</code> are as follows :</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">key</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the key extracted from the <code dir="auto">x-ca-key</code> header of the request.</td></tr><tr><td><code dir="auto">secret</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the secret used to generate the signature.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the name of the consumer.</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">_rules_</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">_match_route_</code></td><td>array of string</td><td>Optional, either <code dir="auto">_match_route_</code> or <code dir="auto">_match_domain_</code> must be provided</td><td>-</td><td>Configures the name of the route to match.</td></tr><tr><td><code dir="auto">_match_domain_</code></td><td>array of string</td><td>Optional, either <code dir="auto">_match_route_</code> or <code dir="auto">_match_domain_</code> must be provided</td><td>-</td><td>Configures the name of the domain to match.</td></tr><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Required</td><td>-</td><td>Configures the name of the consumer to allow for requests that match the specified route or domain.</td></tr></tbody></table>
<p><strong>Note\uFF1A</strong></p>
<ul>
<li>If <code dir="auto">_rules_</code> is not configured, authentication is enabled for all routes on the current gateway instance by default \uFF1B</li>
<li>For requests that pass authentication and authorization, a <code dir="auto">X-Mse-Consumer</code> header will be added to the request headers to identify the name of the consumer.</li>
</ul>
<h2 id="configuration-example">Configuration Example</h2>
<p>The following configuration enables Hmac Auth authentication and authorization for specific routes or domains on the gateway. Note that the <code dir="auto">key</code> field should not be duplicated.</p>
<h3 id="enabling-for-specific-routes-or-domains">Enabling for specific routes or domains</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Configuring Fine-Grained Rules using _rules_ Field</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Matching by route name.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Applies based on domain name matching.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer-2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- key: appKey-example-1\x7F  secret: appSecret-example-1\x7F  name: consumer-1\x7F- key: appKey-example-2\x7F  secret: appSecret-example-2\x7F  name: consumer-2\x7F# Configuring Fine-Grained Rules using _rules_ Field\x7F_rules_:\x7F# Rule 1: Matching by route name.\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F  allow:\x7F  - consumer-1\x7F# Rule 2: Applies based on domain name matching.\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  allow:\x7F  - consumer-2"><div></div></button></div></figure></div>
<p>The <code dir="auto">allow</code> field under each matching rule specifies the list of callers allowed to access under that matching condition;</p>
<p>In this example, <code dir="auto">route-a</code> and <code dir="auto">route-b</code> specified in <code dir="auto">_match_route_</code> are the route names filled in when creating the gateway route. When either of these routes is matched, it will allow access to the caller named <code dir="auto">consumer-1</code>, while denying access to other callers\uFF1B</p>
<p>In<code dir="auto"> _match_domain_</code>, <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are used to match the requested domain name. When a match is found, it will allow access to the caller named <code dir="auto">consumer-2</code>, while denying access to other callers\uFF1B</p>
<p>Upon successful authentication, the <code dir="auto">X-Mse-Consumer</code> field will be added to the request header with the value set to the caller\u2019s name, such as <code dir="auto">consumer-1</code>.\u3002</p>
<h3 id="enable-at-the-gateway-instance-level">Enable at the Gateway Instance Level</h3>
<p>The following configuration enables HMAC authentication at the gateway instance level.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- key: appKey-example-1\x7F  secret: appSecret-example-1\x7F  name: consumer-1\x7F- key: appKey-example-2\x7F  secret: appSecret-example-2\x7F  name: consumer-2"><div></div></button></div></figure></div>
<h2 id="description-of-signing-mechanism">Description of Signing Mechanism</h2>
<h3 id="configuration-preparation">Configuration Preparation</h3>
<p>As mentioned in the guide above, configure the credential settings required for generating and validating signatures in the plugin configuration.</p>
<ul>
<li>key: Used for setting in the request header <code dir="auto">x-ca-key</code>.</li>
<li>secret: Used for generating the request signature.</li>
</ul>
<h3 id="client-signature-generation-method">Client Signature Generation Method</h3>
<h4 id="overview-of-the-process">Overview of the Process</h4>
<p>The process for generating a signature on the client side consists of three steps:</p>
<ol>
<li>
<p>Extracting key data from the original request to obtain a string to be signed.</p>
</li>
<li>
<p>Using encryption algorithms and the configured <code dir="auto">secret</code> to encrypt the key data signing string and obtain a signature.</p>
</li>
<li>
<p>Adding all headers related to the signature to the original HTTP request to obtain the final HTTP request.</p>
</li>
</ol>
<p>As shown below :
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="process-for-extracting-signing-string">Process for Extracting Signing String</h4>
<p>To generate a signature, the client needs to extract key data from the HTTP request and combine it into a signing string. The format of the generated signing string is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTPMethod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Accept</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-MD5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Date</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PathAndParameters</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTPMethod\x7FAccept\x7FContent-MD5\x7FContent-Type\x7FDate\x7FHeaders\x7FPathAndParameters"><div></div></button></div></figure></div>
<p>The signing string consists of the above 7 fields separated by \\n. If Headers is empty, no \\n is needed. If other fields are empty, the \\n should still be retained. The signature is case-sensitive. Below are the rules for extracting each field:</p>
<ul>
<li>
<p>HTTPMethod: The HTTP method used in the request, in all capital letters, such as POST.</p>
</li>
<li>
<p>Accept: The value of the Accept header in the request, which can be empty. It is recommended to explicitly set the Accept header. When Accept is empty, some HTTP clients will set the default value of <code dir="auto">*/*</code>, which may cause signature verification to fail.</p>
</li>
<li>
<p>Content-MD5: The value of the Content-MD5 header in the request, which can be empty. It is only calculated when there is a non-form body in the request. The following is a reference calculation method for Content-MD5 values in \uFF1A</p>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String content</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">MD5 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">MD5</span><span style="--0:#E1E4E8">(bodyStream.</span><span style="--0:#B392F0">getbytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">)));</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getbytes(&#x22;UTF-8&#x22;)));"><div></div></button></div></figure></div>
<ul>
<li>
<p>Content-Type: The value of the Content-Type header in the request, which can be empty.</p>
</li>
<li>
<p>Date: The value of the Date header in the request. When the<code dir="auto"> date_offset</code> configuration is not enabled, it can be empty. Otherwise, it will be used for time offset verification.</p>
</li>
<li>
<p>Headers: Users can select specific headers to participate in the signature. There are the following rules for concatenating the signature string with headers:</p>
<ul>
<li>The keys of the headers participating in the signature calculation are sorted in alphabetical order and concatenated as follows:</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKey2 + ":" + HeaderValue2 + "\\n"\\+</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKeyN + ":" + HeaderValueN + "\\n"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HeaderKey1 + &#x22;:&#x22; + HeaderValue1 + &#x22;\\n&#x22;\\+\x7FHeaderKey2 + &#x22;:&#x22; + HeaderValue2 + &#x22;\\n&#x22;\\+\x7F...\x7FHeaderKeyN + &#x22;:&#x22; + HeaderValueN + &#x22;\\n&#x22;"><div></div></button></div></figure></div>
<ul>
<li>If the value of a header is empty, it will participate in the signature with the <code dir="auto">HeaderKey+":"+"\\n"</code> only, and the key and english colon should be retained.</li>
<li>The set of keys for all headers participating in the signature is separated by a comma and placed in the <code dir="auto">X-Ca-Signature-Headers header</code>.</li>
<li>The following headers are not included in the header signature calculation: X-Ca-Signature, X-Ca-Signature-Headers, Accept, Content-MD5, Content-Type, Date.</li>
</ul>
</li>
<li>
<p>PathAndParameters: This field contains all parameters in the path, query, and form. The specific format is as follows:</p>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Path + "?" + Key1 + "=" + Value1 + "&#x26;" + Key2 + "=" + Value2 + ... "&#x26;" + KeyN + "=" + ValueN</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Path + &#x22;?&#x22; + Key1 + &#x22;=&#x22; + Value1 + &#x22;&#x26;&#x22; + Key2 + &#x22;=&#x22; + Value2 + ... &#x22;&#x26;&#x22; + KeyN + &#x22;=&#x22; + ValueN"><div></div></button></div></figure></div>
<p>Notes:</p>
<ol>
<li>
<p>The keys of the query and form parameter pairs are sorted alphabetically, and the same format as above is used for concatenation.</p>
</li>
<li>
<p>If there are no query and form parameters, use the path directly without adding <code dir="auto">?</code> .</p>
</li>
<li>
<p>If the value of a parameter is empty, only the key will be included in the signature. The equal sign should not be included in the signature.</p>
</li>
<li>
<p>If there are array parameters in the query or form (parameters with the same key but different values), only the first value should be included in the signature calculation.</p>
</li>
</ol>
<h4 id="example-of-extracting-signing-string">Example of Extracting Signing String</h4>
<p>The initial HTTP request :</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<p>The correct generated signature string is :</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST\x7Fapplication/json; charset=utf-8\x7Fapplication/x-www-form-urlencoded; charset=utf-8\x7FWed, 09 May 2018 13:30:29 GMT+00:00\x7Fx-ca-key:203753385\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-signature-method:HmacSHA256\x7Fx-ca-timestamp:1525872629832\x7F/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming"><div></div></button></div></figure></div>
<h4 id="signature-calculation-process">Signature Calculation Process</h4>
<p>After extracting the key data from the HTTP request and assembling it into a signature string, the client needs to encrypt and encode the signature string to form the final signature.</p>
<p>The specific encryption format is as follows, where <code dir="auto">stringToSign</code> is the extracted signature string, <code dir="auto">secret</code> is the one filled in the plugin configuration, and <code dir="auto">sign</code> is the final generated signature:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">Mac hmacSha256 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Mac.</span><span style="--0:#B392F0">getInstance</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] secretBytes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> secret.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">hmacSha256.</span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SecretKeySpec</span><span style="--0:#E1E4E8">(secretBytes, </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">, secretBytes.length, </span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] result </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmacSha256.</span><span style="--0:#B392F0">doFinal</span><span style="--0:#E1E4E8">(stringToSign.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String sign </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64String</span><span style="--0:#E1E4E8">(result);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Mac hmacSha256 = Mac.getInstance(&#x22;HmacSHA256&#x22;);\x7Fbyte[] secretBytes = secret.getBytes(&#x22;UTF-8&#x22;);\x7FhmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, &#x22;HmacSHA256&#x22;));\x7Fbyte[] result = hmacSha256.doFinal(stringToSign.getBytes(&#x22;UTF-8&#x22;));\x7FString sign = Base64.encodeBase64String(result);"><div></div></button></div></figure></div>
<p>In summary, the <code dir="auto">stringToSign</code> is decoded using UTF-8 to obtain a Byte array. Then, an encryption algorithm is used to encrypt the Byte array, and finally, the Base64 algorithm is used to encode the encrypted data, resulting in the final signature.</p>
<h4 id="the-process-of-adding-a-signature">The Process of Adding a Signature</h4>
<p>The client needs to include the following four headers in the HTTP request to be transmitted to the API gateway for signature verification:</p>
<ul>
<li>
<p>x-ca-key: The value is the APP Key and is required.</p>
</li>
<li>
<p>x-ca-signature-method: The signature algorithm, the value can be HmacSHA256 or HmacSHA1, optional. The default value is HmacSHA256.</p>
</li>
<li>
<p>x-ca-signature-headers: The collection of keys for all signature headers, separated by commas. Optional.</p>
</li>
<li>
<p>x-ca-signature: The signature and it is required.</p>
</li>
</ul>
<p>Here is an example of a complete HTTP request with a signature :</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-key:203753385\x7Fx-ca-signature-method:HmacSHA256\x7Fx-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method\x7Fx-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<h3 id="server-side-signature-verification-method">Server-side Signature Verification Method</h3>
<h4 id="overview-of-the-process-1">Overview of the Process</h4>
<p>The server-side signature verification of the client\u2019s request involves four steps :</p>
<ol>
<li>
<p>Extract crucial data from the received request to obtain a string for signing.</p>
</li>
<li>
<p>Retrieve the <code dir="auto">key</code> from the received request and use it to query its corresponding <code dir="auto">secret</code>.</p>
</li>
<li>
<p>Encrypt the string for signing using the encryption algorithm and <code dir="auto">secret</code>.</p>
</li>
<li>
<p>Retrieve the client\u2019s signature from the received request, and compare the consistency of the server-side signature with the client\u2019s signature.</p>
</li>
</ol>
<p>As shown below :
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="troubleshooting-signature-errors">Troubleshooting Signature Errors</h3>
<p>When the gateway signature verification fails, the server-side signing string (StringToSign) will be returned to the client in the HTTP Response Header. The key is X-Ca-Error-Message. Users only need to compare the locally calculated signing string with the server-side signing string returned to locate the problem;</p>
<p>If the StringToSign on the server side is consistent with that on the client side, please check whether the APP Secret used for signature calculation is correct\uFF1B</p>
<p>Because line breaks cannot be represented in HTTP headers, all line breaks in the StringToSign are replaced with #, as shown below:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Ca-Error-Message:  Server StringToSign:\`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST\`</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="X-Ca-Error-Message:  Server StringToSign:&#x60;GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST&#x60;"><div></div></button></div></figure></div>
<h2 id="related-error-codes">Related Error Codes</h2>


















































<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Reason</th></tr></thead><tbody><tr><td>401</td><td>Invalid Key</td><td>The x-ca-key request header is not provided or is invalid.</td></tr><tr><td>401</td><td>Empty Signature</td><td>The x-ca-signature request header does not contain a signature.</td></tr><tr><td>400</td><td>Invalid Signature</td><td>The x-ca-signature request header contains a signature that does not match the server-calculated signature.</td></tr><tr><td>400</td><td>Invalid Content-MD5</td><td>The content-md5 request header is incorrect.</td></tr><tr><td>400</td><td>Invalid Date</td><td>The time offset calculated based on the date request header exceeds the configured date_offset.</td></tr><tr><td>413</td><td>Request Body Too Large</td><td>The request body exceeds the size limit of 32 MB.</td></tr><tr><td>413</td><td>Payload Too Large</td><td>The request body exceeds the DownstreamConnectionBufferLimits global configuration.</td></tr><tr><td>403</td><td>Unauthorized Consumer</td><td>The requesting party does not have access permission.</td></tr></tbody></table>`,s={title:"HMAC authentication",keywords:["higress","hmac"],description:"HMAC authentication implements the generation of tamper-proof signatures for HTTP requests based on HMAC algorithm, and uses the signature for identity authentication and authorization."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/hmac-auth.md",i=void 0,d=function(){return`
## Function Description
The \`hmac-auth\` plugin implements the generation of tamper-proof signatures for HTTP requests based on HMAC algorithm, and uses the signature for identity authentication and authorization.

## Configuration Fields

| Name         |  Data Type       | Required     | Default | Description                                                                                                                |
| ------------- | --------------- | -------------| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`consumers\`   | array of object | Required     | -      | Configures the caller of the service to authenticate the request.                                                                                 |
| \`date_offset\` | number          | Optional     | -      | Configures the maximum allowed time deviation of the client, in seconds. It is used to parse the client's UTC time from \`the Date\` header of the request, and can be used to prevent replay attacks. If not configured, no validation is performed. |
| \`_rules_\`     | array of object | Optional     | -      | Configures the access control list for specific routes or domains, used for authorization of requests.                                                              |

The configuration fields for each item in \`consumers\` are as follows :

| Name     | Data Type| Required     | Default| Description                                                             |
| -------- | -------- | ------------ | ------ | ----------------------------------------------------------------------- |
| \`key\`    | string   | Required     | -      | Configures the key extracted from the \`x-ca-key\` header of the request. |
| \`secret\` | string   | Required     | -      | Configures the secret used to generate the signature.                   |
| \`name\`   | string   | Required     | -      | Configures the name of the consumer.                                    |

The configuration fields for each item in \`_rules_\` are as follows:

| Name            | Data Type        | Required                                         | Default | Description                                               |
| ---------------- | --------------- | ------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| \`_match_route_\`  | array of string | Optional, either \`_match_route_\` or \`_match_domain_\` must be provided | -      | Configures the name of the route to match.                               |
| \`_match_domain_\` | array of string | Optional, either \`_match_route_\` or \`_match_domain_\` must be provided | -      | Configures the name of the domain to match.                                   |
| \`allow\`          | array of string | Required                                              | -      | Configures the name of the consumer to allow for requests that match the specified route or domain. |

**Note\uFF1A**
- If \`_rules_\` is not configured, authentication is enabled for all routes on the current gateway instance by default \uFF1B
- For requests that pass authentication and authorization, a \`X-Mse-Consumer\` header will be added to the request headers to identify the name of the consumer.

## Configuration Example

The following configuration enables Hmac Auth authentication and authorization for specific routes or domains on the gateway. Note that the \`key\` field should not be duplicated.

### Enabling for specific routes or domains
\`\`\`yaml
consumers: 
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
# Configuring Fine-Grained Rules using _rules_ Field
_rules_:
# Rule 1: Matching by route name.
- _match_route_:
  - route-a
  - route-b
  allow:
  - consumer-1
# Rule 2: Applies based on domain name matching.
- _match_domain_:
  - "*.example.com"
  - test.com
  allow:
  - consumer-2
\`\`\`
The \`allow\` field under each matching rule specifies the list of callers allowed to access under that matching condition;

In this example, \`route-a\` and \`route-b\` specified in \`_match_route_\` are the route names filled in when creating the gateway route. When either of these routes is matched, it will allow access to the caller named \`consumer-1\`, while denying access to other callers\uFF1B

In\` _match_domain_\`, \`*.example.com\` and \`test.com\` are used to match the requested domain name. When a match is found, it will allow access to the caller named \`consumer-2\`, while denying access to other callers\uFF1B

Upon successful authentication, the \`X-Mse-Consumer\` field will be added to the request header with the value set to the caller's name, such as \`consumer-1\`.\u3002

### Enable at the Gateway Instance Level

The following configuration enables HMAC authentication at the gateway instance level.

\`\`\`yaml
consumers: 
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
\`\`\`


## Description of Signing Mechanism

### Configuration Preparation

As mentioned in the guide above, configure the credential settings required for generating and validating signatures in the plugin configuration.

- key: Used for setting in the request header \`x-ca-key\`.
- secret: Used for generating the request signature.

### Client Signature Generation Method
#### Overview of the Process

The process for generating a signature on the client side consists of three steps:

1. Extracting key data from the original request to obtain a string to be signed.

2. Using encryption algorithms and the configured \`secret\` to encrypt the key data signing string and obtain a signature.

3. Adding all headers related to the signature to the original HTTP request to obtain the final HTTP request.

As shown below :
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png)

#### Process for Extracting Signing String

To generate a signature, the client needs to extract key data from the HTTP request and combine it into a signing string. The format of the generated signing string is as follows:

\`\`\`text
HTTPMethod
Accept
Content-MD5
Content-Type
Date
Headers
PathAndParameters
\`\`\`

The signing string consists of the above 7 fields separated by \\n. If Headers is empty, no \\n is needed. If other fields are empty, the \\n should still be retained. The signature is case-sensitive. Below are the rules for extracting each field:

- HTTPMethod: The HTTP method used in the request, in all capital letters, such as POST.

- Accept: The value of the Accept header in the request, which can be empty. It is recommended to explicitly set the Accept header. When Accept is empty, some HTTP clients will set the default value of \`*/*\`, which may cause signature verification to fail.

- Content-MD5: The value of the Content-MD5 header in the request, which can be empty. It is only calculated when there is a non-form body in the request. The following is a reference calculation method for Content-MD5 values in \uFF1A


\`\`\`java
String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getbytes("UTF-8")));
\`\`\`

- Content-Type: The value of the Content-Type header in the request, which can be empty.

- Date: The value of the Date header in the request. When the\` date_offset\` configuration is not enabled, it can be empty. Otherwise, it will be used for time offset verification.

- Headers: Users can select specific headers to participate in the signature. There are the following rules for concatenating the signature string with headers:
    - The keys of the headers participating in the signature calculation are sorted in alphabetical order and concatenated as follows:
    \`\`\`text
    HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+
    HeaderKey2 + ":" + HeaderValue2 + "\\n"\\+
    ...
    HeaderKeyN + ":" + HeaderValueN + "\\n"
    \`\`\`
    - If the value of a header is empty, it will participate in the signature with the \`HeaderKey+":"+"\\n"\` only, and the key and english colon should be retained.
    - The set of keys for all headers participating in the signature is separated by a comma and placed in the \`X-Ca-Signature-Headers header\`.
    - The following headers are not included in the header signature calculation: X-Ca-Signature, X-Ca-Signature-Headers, Accept, Content-MD5, Content-Type, Date.
    
- PathAndParameters: This field contains all parameters in the path, query, and form. The specific format is as follows:
  
\`\`\`text
Path + "?" + Key1 + "=" + Value1 + "&" + Key2 + "=" + Value2 + ... "&" + KeyN + "=" + ValueN
\`\`\`

Notes:
1. The keys of the query and form parameter pairs are sorted alphabetically, and the same format as above is used for concatenation.
    
2. If there are no query and form parameters, use the path directly without adding \`?\` .
    
3. If the value of a parameter is empty, only the key will be included in the signature. The equal sign should not be included in the signature.
   
4. If there are array parameters in the query or form (parameters with the same key but different values), only the first value should be included in the signature calculation.
    
#### Example of Extracting Signing String

The initial HTTP request :
\`\`\`text
POST /http2test/test?param1=test HTTP/1.1
host:api.aliyun.com
accept:application/json; charset=utf-8
ca_version:1
content-type:application/x-www-form-urlencoded; charset=utf-8
x-ca-timestamp:1525872629832
date:Wed, 09 May 2018 13:30:29 GMT+00:00
user-agent:ALIYUN-ANDROID-DEMO
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
content-length:33
username=xiaoming&password=123456789
\`\`\`

The correct generated signature string is :
\`\`\`text
POST
application/json; charset=utf-8
application/x-www-form-urlencoded; charset=utf-8
Wed, 09 May 2018 13:30:29 GMT+00:00
x-ca-key:203753385
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-signature-method:HmacSHA256
x-ca-timestamp:1525872629832
/http2test/test?param1=test&password=123456789&username=xiaoming
\`\`\`

#### Signature Calculation Process

After extracting the key data from the HTTP request and assembling it into a signature string, the client needs to encrypt and encode the signature string to form the final signature.

The specific encryption format is as follows, where \`stringToSign\` is the extracted signature string, \`secret\` is the one filled in the plugin configuration, and \`sign\` is the final generated signature:

\`\`\`java
Mac hmacSha256 = Mac.getInstance("HmacSHA256");
byte[] secretBytes = secret.getBytes("UTF-8");
hmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));
byte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));
String sign = Base64.encodeBase64String(result);
\`\`\`

In summary, the \`stringToSign\` is decoded using UTF-8 to obtain a Byte array. Then, an encryption algorithm is used to encrypt the Byte array, and finally, the Base64 algorithm is used to encode the encrypted data, resulting in the final signature.

#### The Process of Adding a Signature

The client needs to include the following four headers in the HTTP request to be transmitted to the API gateway for signature verification:

- x-ca-key: The value is the APP Key and is required.

- x-ca-signature-method: The signature algorithm, the value can be HmacSHA256 or HmacSHA1, optional. The default value is HmacSHA256.

- x-ca-signature-headers: The collection of keys for all signature headers, separated by commas. Optional.

- x-ca-signature: The signature and it is required.

Here is an example of a complete HTTP request with a signature :

\`\`\`text
POST /http2test/test?param1=test HTTP/1.1
host:api.aliyun.com
accept:application/json; charset=utf-8
ca_version:1
content-type:application/x-www-form-urlencoded; charset=utf-8
x-ca-timestamp:1525872629832
date:Wed, 09 May 2018 13:30:29 GMT+00:00
user-agent:ALIYUN-ANDROID-DEMO
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-key:203753385
x-ca-signature-method:HmacSHA256
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
content-length:33
username=xiaoming&password=123456789
\`\`\`

### Server-side Signature Verification Method

#### Overview of the Process

The server-side signature verification of the client's request involves four steps :

1. Extract crucial data from the received request to obtain a string for signing.

2. Retrieve the \`key\` from the received request and use it to query its corresponding \`secret\`.

3. Encrypt the string for signing using the encryption algorithm and \`secret\`.

4. Retrieve the client's signature from the received request, and compare the consistency of the server-side signature with the client's signature.

As shown below :
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png)


### Troubleshooting Signature Errors

When the gateway signature verification fails, the server-side signing string (StringToSign) will be returned to the client in the HTTP Response Header. The key is X-Ca-Error-Message. Users only need to compare the locally calculated signing string with the server-side signing string returned to locate the problem;

If the StringToSign on the server side is consistent with that on the client side, please check whether the APP Secret used for signature calculation is correct\uFF1B

Because line breaks cannot be represented in HTTP headers, all line breaks in the StringToSign are replaced with #, as shown below:

\`\`\`text
X-Ca-Error-Message:  Server StringToSign:\`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST\`

\`\`\`

## Related Error Codes

| HTTP Status Code | Error Message               | Reason                                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------------------------- |
| 401         | Invalid Key            | The x-ca-key request header is not provided or is invalid.                                        |
| 401         | Empty Signature        | The x-ca-signature request header does not contain a signature.                                               |
| 400         | Invalid Signature      | The x-ca-signature request header contains a signature that does not match the server-calculated signature.                         |
| 400         | Invalid Content-MD5    | The content-md5 request header is incorrect.                                                        |
| 400         | Invalid Date           | The time offset calculated based on the date request header exceeds the configured date_offset.                               |
| 413         | Request Body Too Large | The request body exceeds the size limit of 32 MB.                                                    |
| 413         | Payload Too Large      | The request body exceeds the DownstreamConnectionBufferLimits global configuration.                          |
| 403         | Unauthorized Consumer  | The requesting party does not have access permission.                                                         |
`},o=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"enabling-for-specific-routes-or-domains",text:"Enabling for specific routes or domains"},{depth:3,slug:"enable-at-the-gateway-instance-level",text:"Enable at the Gateway Instance Level"},{depth:2,slug:"description-of-signing-mechanism",text:"Description of Signing Mechanism"},{depth:3,slug:"configuration-preparation",text:"Configuration Preparation"},{depth:3,slug:"client-signature-generation-method",text:"Client Signature Generation Method"},{depth:4,slug:"overview-of-the-process",text:"Overview of the Process"},{depth:4,slug:"process-for-extracting-signing-string",text:"Process for Extracting Signing String"},{depth:4,slug:"example-of-extracting-signing-string",text:"Example of Extracting Signing String"},{depth:4,slug:"signature-calculation-process",text:"Signature Calculation Process"},{depth:4,slug:"the-process-of-adding-a-signature",text:"The Process of Adding a Signature"},{depth:3,slug:"server-side-signature-verification-method",text:"Server-side Signature Verification Method"},{depth:4,slug:"overview-of-the-process-1",text:"Overview of the Process"},{depth:3,slug:"troubleshooting-signature-errors",text:"Troubleshooting Signature Errors"},{depth:2,slug:"related-error-codes",text:"Related Error Codes"}]},t=c((v,y,x)=>{const{layout:E,...n}=s;return n.file=a,n.url=i,p`${h()}${u(e)}`})});export{t as Content,m as __tla,o as compiledContent,t as default,a as file,s as frontmatter,r as getHeadings,d as rawContent,i as url};
