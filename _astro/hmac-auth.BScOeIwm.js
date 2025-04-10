import{c as d,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as p,m as u,u as h,__tla as g}from"./constant.o9jmc9nU.js";import{__tla as f}from"./astro/assets-service.BhtN0nM5.js";let t,o,a,s,r,c,i,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">hmac-auth</code> plugin implements the generation of tamper-proof signatures for HTTP requests based on the HMAC algorithm, and performs authentication and authorization based on the signature.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Authentication phase</code>
Plugin execution priority: <code dir="auto">330</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<p><strong>Note:</strong></p>
<ul>
<li>In a rule, authentication and authorization configurations cannot coexist.</li>
<li>For requests that pass authentication and authorization, the request header will be added with an <code dir="auto">X-Mse-Consumer</code> field to identify the caller\u2019s name.</li>
</ul>
<h3 id="authentication-configuration">Authentication Configuration</h3>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>Optional (<strong>Instance level configuration only</strong>)</td><td>-</td><td>Can only be configured at the instance level. If set to true, it acts globally; if false, only applies to configured domains and routes. If not configured, it will apply globally only when there are no domain and route configurations (to accommodate old user habits).</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Mandatory</td><td>-</td><td>Configures the callers of the service for request authentication.</td></tr><tr><td><code dir="auto">date_offset</code></td><td>number</td><td>Optional</td><td>-</td><td>Configures the maximum allowed client time offset, in seconds; parsed based on the request header <code dir="auto">Date</code>; can be used to prevent request replay; no validation is performed if not configured.</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">consumers</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">key</code></td><td>string</td><td>Mandatory</td><td>-</td><td>Configures the key extracted from the <code dir="auto">x-ca-key</code> header of the request.</td></tr><tr><td><code dir="auto">secret</code></td><td>string</td><td>Mandatory</td><td>-</td><td>Configures the secret used to generate the signature.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Mandatory</td><td>-</td><td>Configures the name of the consumer.</td></tr></tbody></table>
<h3 id="authorization-configuration-optional">Authorization Configuration (Optional)</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Optional (<strong>Non-instance level configuration</strong>)</td><td>-</td><td>Can only be configured on granular rules such as routes or domains. For requests that match the conditions, configure the allowed consumers to achieve fine-grained permission control.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="global-configuration-authentication-and-route-granular-authorization">Global Configuration Authentication and Route Granular Authorization</h3>
<p>Configure the following plugin settings at the instance level. Note that the <code dir="auto">key</code> field cannot be duplicated:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- key: appKey-example-1\x7F  secret: appSecret-example-1\x7F  name: consumer-1\x7F- key: appKey-example-2\x7F  secret: appSecret-example-2\x7F  name: consumer-2"><div></div></button></div></figure></div>
<p>For route-a and route-b, configure the plugin as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>For the two domains *.example.com and test.com, configure as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p>If configured in the console, the specified route names route-a and route-b correspond to the route names filled in when creating the gateway routes. When matched to these two routes, access will be allowed for the caller named consumer1, while other callers will not be allowed access.</p>
<p>The specified *.example.com and test.com are used to match the domains of the requests. When a domain match is found, access will be allowed for the caller named consumer2, while other callers will not be allowed access.</p>
<h3 id="gateway-instance-level-activation">Gateway Instance Level Activation</h3>
<p>The following configuration will enable HMAC Auth authentication at the gateway instance level, requiring all requests to undergo authentication before access.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- key: appKey-example-1\x7F  secret: appSecret-example-1\x7F  name: consumer-1\x7F- key: appKey-example-2\x7F  secret: appSecret-example-2\x7F  name: consumer-2"><div></div></button></div></figure></div>
<h2 id="signature-mechanism-description">Signature Mechanism Description</h2>
<h3 id="configuration-preparation">Configuration Preparation</h3>
<p>As mentioned above, configure the credentials required for generating and verifying signatures in the plugin settings.</p>
<ul>
<li>key: to be set in the request header <code dir="auto">x-ca-key</code>.</li>
<li>secret: used for generating request signatures.</li>
</ul>
<h3 id="client-signature-generation-process">Client Signature Generation Process</h3>
<h4 id="overview">Overview</h4>
<p>The client generates a signature through three main steps:</p>
<ol>
<li>Extract key data from the original request to create a string for signing.</li>
<li>Encrypt the key data signing string using the algorithm and the configured <code dir="auto">secret</code> to obtain the signature.</li>
<li>Include all relevant headers for the signature into the original HTTP request to form the final HTTP request.</li>
</ol>
<p>As shown in the figure below:
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="signing-string-extraction-process">Signing String Extraction Process</h4>
<p>The client needs to extract key data from the HTTP request, combine it into a signing string, which has the following format:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTPMethod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Accept</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-MD5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Date</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PathAndParameters</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTPMethod\x7FAccept\x7FContent-MD5\x7FContent-Type\x7FDate\x7FHeaders\x7FPathAndParameters"><div></div></button></div></figure></div>
<p>The seven fields above constitute the entire signing string, separated by newline characters <code dir="auto">\\n</code>. If Headers is empty, no newline is needed; other fields should retain <code dir="auto">\\n</code> if empty. The signature is case-sensitive. Below are the extraction rules for each field:</p>
<ul>
<li>HTTPMethod: The HTTP method, all uppercase (e.g., POST).</li>
<li>Accept: The value of the Accept header in the request, can be empty. It is recommended to explicitly set the Accept Header. When Accept is empty, some HTTP clients may set a default value of <code dir="auto">*/*</code>, resulting in a signature verification failure.</li>
<li>Content-MD5: The value of the Content-MD5 header in the request, can be empty. It is calculated only if there is a Body in the request and it is not in Form format. Here\u2019s a reference calculation method for the Content-MD5 value in Java:</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String content</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">MD5 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">MD5</span><span style="--0:#E1E4E8">(bodyStream.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">)));</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getBytes(&#x22;UTF-8&#x22;)));"><div></div></button></div></figure></div>
<ul>
<li>Content-Type: The value of the Content-Type header in the request, can be empty.</li>
<li>Date: The value of the Date header in the request. If the <code dir="auto">date_offset</code> configuration is not turned on, it can be empty; otherwise, it will be used for time offset verification.</li>
<li>Headers: Users can select specific headers to participate in the signature. The rules for concatenating the signing header string are as follows:
<ul>
<li>The Keys of the headers participating in the signature calculation are concatenated after being sorted lexicographically, as follows:</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKey1 + ":" + HeaderValue1 + "\\n" +</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKey2 + ":" + HeaderValue2 + "\\n" +</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKeyN + ":" + HeaderValueN + "\\n"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HeaderKey1 + &#x22;:&#x22; + HeaderValue1 + &#x22;\\n&#x22; +\x7FHeaderKey2 + &#x22;:&#x22; + HeaderValue2 + &#x22;\\n&#x22; +\x7F...\x7FHeaderKeyN + &#x22;:&#x22; + HeaderValueN + &#x22;\\n&#x22;"><div></div></button></div></figure></div>
<ul>
<li>If the Value of a certain header is empty, use HeaderKey + \u201D:\u201D + \u201C\\n\u201D to participate in the signature, retaining the Key and the colon.</li>
<li>The collection of all participating header Keys is placed in the Header with the key X-Ca-Signature-Headers, separated by commas.</li>
<li>The following headers are not included in the header signature calculation: X-Ca-Signature, X-Ca-Signature-Headers, Accept, Content-MD5, Content-Type, Date.</li>
</ul>
</li>
<li>PathAndParameters: This field includes Path, Query, and all parameters in Form, specifically organized as follows:</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Path + "?" + Key1 + "=" + Value1 + "&#x26;" + Key2 + "=" + Value2 + ... "&#x26;" + KeyN + "=" + ValueN</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Path + &#x22;?&#x22; + Key1 + &#x22;=&#x22; + Value1 + &#x22;&#x26;&#x22; + Key2 + &#x22;=&#x22; + Value2 + ... &#x22;&#x26;&#x22; + KeyN + &#x22;=&#x22; + ValueN"><div></div></button></div></figure></div>
<p>Note:</p>
<ol>
<li>The Key of Query and Form parameters should be sorted lexicographically before being concatenated as above.</li>
<li>If Query and Form parameters are empty, just use Path without adding <code dir="auto">?</code>.</li>
<li>If the Value of parameters is empty, only the Key should be retained in the signature, the equal sign does not need to be added.</li>
<li>In the case of array parameters (parameters with the same key but different values), only the first Value should be used for signature calculation.</li>
</ol>
<h4 id="signing-string-extraction-example">Signing String Extraction Example</h4>
<p>Initial HTTP request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<p>The generated correct signing string is:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST\x7Fapplication/json; charset=utf-8\x7Fapplication/x-www-form-urlencoded; charset=utf-8\x7FWed, 09 May 2018 13:30:29 GMT+00:00\x7Fx-ca-key:203753385\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-signature-method:HmacSHA256\x7Fx-ca-timestamp:1525872629832\x7F/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming"><div></div></button></div></figure></div>
<h4 id="signature-calculation-process">Signature Calculation Process</h4>
<p>After the client assembles the key data extracted from the HTTP request into a signing string, it needs to encrypt the signing string and encode it to form the final signature.</p>
<p>The specific encryption form is as follows, where <code dir="auto">stringToSign</code> is the extracted signing string, <code dir="auto">secret</code> is the one filled in the plugin configuration, and <code dir="auto">sign</code> is the final generated signature:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">Mac hmacSha256 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Mac.</span><span style="--0:#B392F0">getInstance</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] secretBytes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> secret.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">hmacSha256.</span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SecretKeySpec</span><span style="--0:#E1E4E8">(secretBytes, </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">, secretBytes.length, </span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] result </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmacSha256.</span><span style="--0:#B392F0">doFinal</span><span style="--0:#E1E4E8">(stringToSign.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String sign </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64String</span><span style="--0:#E1E4E8">(result);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Mac hmacSha256 = Mac.getInstance(&#x22;HmacSHA256&#x22;);\x7Fbyte[] secretBytes = secret.getBytes(&#x22;UTF-8&#x22;);\x7FhmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, &#x22;HmacSHA256&#x22;));\x7Fbyte[] result = hmacSha256.doFinal(stringToSign.getBytes(&#x22;UTF-8&#x22;));\x7FString sign = Base64.encodeBase64String(result);"><div></div></button></div></figure></div>
<p>To summarize, the <code dir="auto">stringToSign</code> is decoded using UTF-8 to obtain a Byte array, then the encryption algorithm is applied to the Byte array, and finally, the Base64 algorithm is used for encoding, forming the final signature.</p>
<h4 id="adding-the-signature-process">Adding the Signature Process</h4>
<p>The client needs to include the following four headers in the HTTP request to transmit to the API gateway for signature verification:</p>
<ul>
<li>x-ca-key: The APP Key, mandatory.</li>
<li>x-ca-signature-method: The signature algorithm, can be HmacSHA256 or HmacSHA1, optional, default is HmacSHA256.</li>
<li>x-ca-signature-headers: The collection of all signature header Keys, separated by commas, optional.</li>
<li>x-ca-signature: The signature, mandatory.</li>
</ul>
<p>Below is an example of the entire HTTP request carrying the signature:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-key:203753385\x7Fx-ca-signature-method:HmacSHA256\x7Fx-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method\x7Fx-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<h3 id="server-side-signature-verification-method">Server-side Signature Verification Method</h3>
<h4 id="overview-1">Overview</h4>
<p>The server verifies the client signature through four main steps:</p>
<ol>
<li>Extract key data from the received request to create a signing string.</li>
<li>Read the <code dir="auto">key</code> from the received request and query the corresponding <code dir="auto">secret</code>.</li>
<li>Encrypt the key data signing string using the algorithm and the <code dir="auto">secret</code> to obtain the signature.</li>
<li>Read the client signature from the received request and compare the server-side signature with the client-side signature for consistency.</li>
</ol>
<p>As shown in the figure below:
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="signature-troubleshooting-method">Signature Troubleshooting Method</h3>
<p>When the gateway signature verification fails, the server\u2019s signing string (StringToSign) will be returned in the HTTP Response header to the client, with the key: X-Ca-Error-Message. The user only needs to compare the locally computed signing string (StringToSign) with the signing string returned by the server to find the issue.</p>
<p>If the StringToSign from the server and the client are consistent, please check whether the APP Secret used for signature calculation is correct.</p>
<p>Since HTTP headers cannot express line breaks, the line breaks in the StringToSign have been replaced with <code dir="auto">#</code>, as shown below:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Ca-Error-Message:  Server StringToSign:\`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST\`</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="X-Ca-Error-Message:  Server StringToSign:&#x60;GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST&#x60;"><div></div></button></div></figure></div>
<h2 id="related-error-codes">Related Error Codes</h2>


















































<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Reasoning</th></tr></thead><tbody><tr><td>401</td><td>Invalid Key</td><td>The request header did not provide x-ca-key, or x-ca-key is invalid.</td></tr><tr><td>401</td><td>Empty Signature</td><td>The request header did not provide the x-ca-signature signing string.</td></tr><tr><td>400</td><td>Invalid Signature</td><td>The x-ca-signature signing string in the request header does not match the signature calculated by the server.</td></tr><tr><td>400</td><td>Invalid Content-MD5</td><td>The Content-MD5 header in the request is incorrect.</td></tr><tr><td>400</td><td>Invalid Date</td><td>The time offset calculated based on the Date header in the request exceeds the configured date_offset.</td></tr><tr><td>413</td><td>Request Body Too Large</td><td>The request Body exceeds the maximum size of 32 MB.</td></tr><tr><td>413</td><td>Payload Too Large</td><td>The request Body exceeds the global configured DownstreamConnectionBufferLimits.</td></tr><tr><td>403</td><td>Unauthorized Consumer</td><td>The calling party does not have access permissions for the request.</td></tr></tbody></table>`,s={title:"HMAC Authentication",keywords:["higress","hmac auth"],description:"HMAC Authentication plugin configuration reference",githubHigressUrl:"https://github.com/alibaba/higress/tree/main/plugins/wasm-cpp/extensions/hmac_auth"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/hmac-auth.md",i=void 0,c=function(){return`## Function Description
The \`hmac-auth\` plugin implements the generation of tamper-proof signatures for HTTP requests based on the HMAC algorithm, and performs authentication and authorization based on the signature.

## Running Attributes
Plugin execution phase: \`Authentication phase\`
Plugin execution priority: \`330\`

## Configuration Fields
**Note:**  
- In a rule, authentication and authorization configurations cannot coexist.  
- For requests that pass authentication and authorization, the request header will be added with an \`X-Mse-Consumer\` field to identify the caller's name.

### Authentication Configuration
| Name          | Data Type        | Requirement         | Default Value | Description                                                                                                             |
| ------------- | ---------------- | ------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| \`global_auth\` | bool             | Optional (**Instance level configuration only**) | -             | Can only be configured at the instance level. If set to true, it acts globally; if false, only applies to configured domains and routes. If not configured, it will apply globally only when there are no domain and route configurations (to accommodate old user habits). |
| \`consumers\`   | array of object  | Mandatory           | -             | Configures the callers of the service for request authentication.                                                     |
| \`date_offset\` | number           | Optional            | -             | Configures the maximum allowed client time offset, in seconds; parsed based on the request header \`Date\`; can be used to prevent request replay; no validation is performed if not configured. |

The configuration fields for each item in \`consumers\` are as follows:
| Name     | Data Type | Requirement | Default Value | Description                                |
| -------- | --------- | ----------- | ------------- | ------------------------------------------- |
| \`key\`    | string    | Mandatory   | -             | Configures the key extracted from the \`x-ca-key\` header of the request. |
| \`secret\` | string    | Mandatory   | -             | Configures the secret used to generate the signature.            |
| \`name\`   | string    | Mandatory   | -             | Configures the name of the consumer.                |

### Authorization Configuration (Optional)
| Name        | Data Type        | Requirement                                    | Default Value | Description                                                                                                                                                          |
| ----------- | ---------------- | --------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`allow\`     | array of string  | Optional (**Non-instance level configuration**) | -             | Can only be configured on granular rules such as routes or domains. For requests that match the conditions, configure the allowed consumers to achieve fine-grained permission control. |

## Configuration Example
### Global Configuration Authentication and Route Granular Authorization
Configure the following plugin settings at the instance level. Note that the \`key\` field cannot be duplicated:
\`\`\`yaml
global_auth: false
consumers:
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
\`\`\`
For route-a and route-b, configure the plugin as follows:
\`\`\`yaml
allow:
- consumer1
\`\`\`
For the two domains *.example.com and test.com, configure as follows:
\`\`\`yaml
allow:
- consumer2
\`\`\`
If configured in the console, the specified route names route-a and route-b correspond to the route names filled in when creating the gateway routes. When matched to these two routes, access will be allowed for the caller named consumer1, while other callers will not be allowed access.

The specified *.example.com and test.com are used to match the domains of the requests. When a domain match is found, access will be allowed for the caller named consumer2, while other callers will not be allowed access.

### Gateway Instance Level Activation
The following configuration will enable HMAC Auth authentication at the gateway instance level, requiring all requests to undergo authentication before access.
\`\`\`yaml
global_auth: true
consumers:
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
\`\`\`

## Signature Mechanism Description
### Configuration Preparation
As mentioned above, configure the credentials required for generating and verifying signatures in the plugin settings.
- key: to be set in the request header \`x-ca-key\`.
- secret: used for generating request signatures.

### Client Signature Generation Process
#### Overview
The client generates a signature through three main steps:
1. Extract key data from the original request to create a string for signing.
2. Encrypt the key data signing string using the algorithm and the configured \`secret\` to obtain the signature.
3. Include all relevant headers for the signature into the original HTTP request to form the final HTTP request.

As shown in the figure below:
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png)

#### Signing String Extraction Process
The client needs to extract key data from the HTTP request, combine it into a signing string, which has the following format:
\`\`\`text
HTTPMethod
Accept
Content-MD5
Content-Type
Date
Headers
PathAndParameters
\`\`\`
The seven fields above constitute the entire signing string, separated by newline characters \`\\n\`. If Headers is empty, no newline is needed; other fields should retain \`\\n\` if empty. The signature is case-sensitive. Below are the extraction rules for each field:
- HTTPMethod: The HTTP method, all uppercase (e.g., POST).
- Accept: The value of the Accept header in the request, can be empty. It is recommended to explicitly set the Accept Header. When Accept is empty, some HTTP clients may set a default value of \`*/*\`, resulting in a signature verification failure.
- Content-MD5: The value of the Content-MD5 header in the request, can be empty. It is calculated only if there is a Body in the request and it is not in Form format. Here\u2019s a reference calculation method for the Content-MD5 value in Java:
\`\`\`java
String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getBytes("UTF-8")));
\`\`\`
- Content-Type: The value of the Content-Type header in the request, can be empty.
- Date: The value of the Date header in the request. If the \`date_offset\` configuration is not turned on, it can be empty; otherwise, it will be used for time offset verification.
- Headers: Users can select specific headers to participate in the signature. The rules for concatenating the signing header string are as follows:
    - The Keys of the headers participating in the signature calculation are concatenated after being sorted lexicographically, as follows:
    \`\`\`text
    HeaderKey1 + ":" + HeaderValue1 + "\\n" +
    HeaderKey2 + ":" + HeaderValue2 + "\\n" +
    ...
    HeaderKeyN + ":" + HeaderValueN + "\\n"
    \`\`\`
    - If the Value of a certain header is empty, use HeaderKey + ":" + "\\n" to participate in the signature, retaining the Key and the colon.
    - The collection of all participating header Keys is placed in the Header with the key X-Ca-Signature-Headers, separated by commas.
    - The following headers are not included in the header signature calculation: X-Ca-Signature, X-Ca-Signature-Headers, Accept, Content-MD5, Content-Type, Date.
- PathAndParameters: This field includes Path, Query, and all parameters in Form, specifically organized as follows:
\`\`\`text
Path + "?" + Key1 + "=" + Value1 + "&" + Key2 + "=" + Value2 + ... "&" + KeyN + "=" + ValueN
\`\`\`
Note:
1. The Key of Query and Form parameters should be sorted lexicographically before being concatenated as above.
2. If Query and Form parameters are empty, just use Path without adding \`?\`.
3. If the Value of parameters is empty, only the Key should be retained in the signature, the equal sign does not need to be added.
4. In the case of array parameters (parameters with the same key but different values), only the first Value should be used for signature calculation.

#### Signing String Extraction Example
Initial HTTP request:
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
The generated correct signing string is:
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
After the client assembles the key data extracted from the HTTP request into a signing string, it needs to encrypt the signing string and encode it to form the final signature. 

The specific encryption form is as follows, where \`stringToSign\` is the extracted signing string, \`secret\` is the one filled in the plugin configuration, and \`sign\` is the final generated signature:
\`\`\`java
Mac hmacSha256 = Mac.getInstance("HmacSHA256");
byte[] secretBytes = secret.getBytes("UTF-8");
hmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));
byte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));
String sign = Base64.encodeBase64String(result);
\`\`\`
To summarize, the \`stringToSign\` is decoded using UTF-8 to obtain a Byte array, then the encryption algorithm is applied to the Byte array, and finally, the Base64 algorithm is used for encoding, forming the final signature.

#### Adding the Signature Process
The client needs to include the following four headers in the HTTP request to transmit to the API gateway for signature verification:
- x-ca-key: The APP Key, mandatory.
- x-ca-signature-method: The signature algorithm, can be HmacSHA256 or HmacSHA1, optional, default is HmacSHA256.
- x-ca-signature-headers: The collection of all signature header Keys, separated by commas, optional.
- x-ca-signature: The signature, mandatory.

Below is an example of the entire HTTP request carrying the signature:
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
#### Overview
The server verifies the client signature through four main steps:
1. Extract key data from the received request to create a signing string.
2. Read the \`key\` from the received request and query the corresponding \`secret\`.
3. Encrypt the key data signing string using the algorithm and the \`secret\` to obtain the signature.
4. Read the client signature from the received request and compare the server-side signature with the client-side signature for consistency.

As shown in the figure below:
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png)

### Signature Troubleshooting Method
When the gateway signature verification fails, the server's signing string (StringToSign) will be returned in the HTTP Response header to the client, with the key: X-Ca-Error-Message. The user only needs to compare the locally computed signing string (StringToSign) with the signing string returned by the server to find the issue.

If the StringToSign from the server and the client are consistent, please check whether the APP Secret used for signature calculation is correct.

Since HTTP headers cannot express line breaks, the line breaks in the StringToSign have been replaced with \`#\`, as shown below:
\`\`\`text
X-Ca-Error-Message:  Server StringToSign:\`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST\`
\`\`\`

## Related Error Codes
| HTTP Status Code | Error Message         | Reasoning                                    |
| ---------------- | --------------------- | --------------------------------------------- |
| 401              | Invalid Key           | The request header did not provide x-ca-key, or x-ca-key is invalid.          |
| 401              | Empty Signature       | The request header did not provide the x-ca-signature signing string.          |
| 400              | Invalid Signature     | The x-ca-signature signing string in the request header does not match the signature calculated by the server. |
| 400              | Invalid Content-MD5   | The Content-MD5 header in the request is incorrect.                            |
| 400              | Invalid Date          | The time offset calculated based on the Date header in the request exceeds the configured date_offset. |
| 413              | Request Body Too Large| The request Body exceeds the maximum size of 32 MB.                           |
| 413              | Payload Too Large     | The request Body exceeds the global configured DownstreamConnectionBufferLimits. |
| 403              | Unauthorized Consumer  | The calling party does not have access permissions for the request.            |
`},o=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"authentication-configuration",text:"Authentication Configuration"},{depth:3,slug:"authorization-configuration-optional",text:"Authorization Configuration (Optional)"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"global-configuration-authentication-and-route-granular-authorization",text:"Global Configuration Authentication and Route Granular Authorization"},{depth:3,slug:"gateway-instance-level-activation",text:"Gateway Instance Level Activation"},{depth:2,slug:"signature-mechanism-description",text:"Signature Mechanism Description"},{depth:3,slug:"configuration-preparation",text:"Configuration Preparation"},{depth:3,slug:"client-signature-generation-process",text:"Client Signature Generation Process"},{depth:4,slug:"overview",text:"Overview"},{depth:4,slug:"signing-string-extraction-process",text:"Signing String Extraction Process"},{depth:4,slug:"signing-string-extraction-example",text:"Signing String Extraction Example"},{depth:4,slug:"signature-calculation-process",text:"Signature Calculation Process"},{depth:4,slug:"adding-the-signature-process",text:"Adding the Signature Process"},{depth:3,slug:"server-side-signature-verification-method",text:"Server-side Signature Verification Method"},{depth:4,slug:"overview-1",text:"Overview"},{depth:3,slug:"signature-troubleshooting-method",text:"Signature Troubleshooting Method"},{depth:2,slug:"related-error-codes",text:"Related Error Codes"}]},t=d((v,m,x)=>{const{layout:b,...n}=s;return n.file=a,n.url=i,p`${u()}${h(e)}`})});export{t as Content,y as __tla,o as compiledContent,t as default,a as file,s as frontmatter,r as getHeadings,c as rawContent,i as url};
