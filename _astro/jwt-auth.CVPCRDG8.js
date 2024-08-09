import{c,__tla as p}from"./astro-component.CD2fzakh.js";import{r,m as h,u as y,__tla as u}from"./constant.BWHCh4is.js";import{__tla as f}from"./astro/assets-service.Bk7KqR8o.js";let s,o,t,a,d,l,n,v=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="description">Description</h2>
<p>The <code dir="auto">jwt-auth</code> plugin implements authentication and authorization based on JWT (JSON Web Token), supports parsing JWTs from URL parameters, request headers, and Cookie fields from HTTP requests, and verifies whether the token has permission to access.</p>
<p>The difference between this plugin and the JWT authentication in <code dir="auto">Security Capabilities->Authentication and Authorization</code> is that it provides additional capabilities for identifying the caller\u2019s identity, supporting the configuration of different JWT credentials for different callers.</p>
<h2 id="detailed-description">Detailed Description</h2>
<h3 id="1-token-based-authentication">1. Token-based authentication</h3>
<h4 id="11-introduction">1.1 Introduction</h4>
<p>Many open APIs need to identify the identity of the caller and determine whether the requested resource can be returned to the caller based on this identity. Token is a mechanism used for identity verification. Based on this mechanism, the application does not need to retain the user\u2019s authentication information or session information on the server, which can realize stateless and distributed web application authorization and provide convenience for application extension.</p>
<h4 id="12-process-description">1.2 Process Description</h4>
<p>The above figure is the business process sequence diagram when the gateway uses JWT for authentication, and the following we will describe the steps marked in the figure in detail in words:</p>
<ol>
<li>
<p>The client initiates an authentication request to the API gateway, usually carrying the end user\u2019s username and password in the request;</p>
</li>
<li>
<p>The gateway forwards the request directly to the backend service;</p>
</li>
<li>
<p>The backend service reads the authentication information (such as the username and password) in the request for verification. After the verification is passed, it uses the private key to generate a standard token and returns it to the gateway;</p>
</li>
<li>
<p>The gateway returns the response with the token to the client, and the client needs to cache this token locally;</p>
</li>
<li>
<p>The client sends a business request to the API gateway, carrying the token in the request;</p>
</li>
<li>
<p>The gateway uses the public key set by the user to verify the token in the request. After the verification is passed, the request is passed through to the backend service;</p>
</li>
<li>
<p>The backend service processes the business and responds;</p>
</li>
<li>
<p>The gateway returns the business response to the client.</p>
</li>
</ol>
<p>In this entire process, the gateway uses the token authentication mechanism to realize the ability of users to use their own user system to authorize their API. Next, we will introduce the structured token JSON Web Token (JWT) used by the gateway to implement token authentication.</p>
<h4 id="13-jwt">1.3 JWT</h4>
<h5 id="131-introduction">1.3.1 Introduction</h5>
<p>JSON Web Token (JWT) is an open standard RFC7519 based on JSON for executing a type of claim to pass between network applications. JWT can generally be used as an independent identity verification token, which can contain user identification, user roles, and permissions information, making it easier to obtain resources from the resource server, and can also add some other necessary declarative information for other business logic, especially suitable for the login scenario of distributed sites.</p>
<h5 id="132-composition-of-jwt">1.3.2 Composition of JWT</h5>
<p><code dir="auto">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</code></p>
<p>As shown in the example above, JWT is a string consisting of three parts:</p>
<ul>
<li>Header</li>
<li>Payload</li>
<li>Signature</li>
</ul>
<p><strong>Header</strong></p>
<p>The header of the JWT carries two pieces of information:</p>
<ul>
<li>The type of the token, which is JWT</li>
<li>The algorithm used for encryption</li>
</ul>
<p>The gateway supports the following encryption algorithms:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ES256, ES384, ES512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HS256, HS384, HS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">RS256, RS384, RS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PS256, PS384, PS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">EdDSA</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ES256, ES384, ES512,\x7FHS256, HS384, HS512,\x7FRS256, RS384, RS512,\x7FPS256, PS384, PS512,\x7FEdDSA"><div></div></button></div></figure></div>
<p>The complete header looks like the following JSON:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">'typ'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'JWT'</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">'alg'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'HS256'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x27;typ&#x27;: &#x27;JWT&#x27;,\x7F  &#x27;alg&#x27;: &#x27;HS256&#x27;\x7F}"><div></div></button></div></figure></div>
<p>The header is then Base64-encoded (this encoding can be symmetrically decoded), forming the first part:</p>
<p><code dir="auto">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</code></p>
<p><strong>Payload</strong></p>
<p>The payload is where the actual information is stored. The details are defined below:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iss: The issuer of the token. This indicates who created the token and is a string value.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">sub: The subject identifier. This is the unique identifier for the end user provided by the issuer, and is no longer than 255 ASCII characters, and is case-sensitive within the issuer's scope.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">aud: The audience(s) of the token, which is an array of case-sensitive strings.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">exp: The expiration time of the token, after which the token will be invalidated, is an integer declaration representing the Unix timestamp in seconds.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iat: The issuance time of the token, is an integer declaration representing the Unix timestamp in seconds.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">jti: The unique identifier of the token, and the value is unique for every token created by the issuer. It is usually a cryptographically random value to prevent conflicts. This component adds a random entropy that an attacker cannot obtain to the structured token, making it more difficult for the token to be guessed or replayed.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="iss: The issuer of the token. This indicates who created the token and is a string value.\x7Fsub: The subject identifier. This is the unique identifier for the end user provided by the issuer, and is no longer than 255 ASCII characters, and is case-sensitive within the issuer&#x27;s scope.\x7Faud: The audience(s) of the token, which is an array of case-sensitive strings.\x7Fexp: The expiration time of the token, after which the token will be invalidated, is an integer declaration representing the Unix timestamp in seconds.\x7Fiat: The issuance time of the token, is an integer declaration representing the Unix timestamp in seconds.\x7Fjti: The unique identifier of the token, and the value is unique for every token created by the issuer. It is usually a cryptographically random value to prevent conflicts. This component adds a random entropy that an attacker cannot obtain to the structured token, making it more difficult for the token to be guessed or replayed."><div></div></button></div></figure></div>
<p>Custom fields for a user feature can also be added, such as the example below adding a \u201Cname\u201D field for the user\u2019s nickname:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"sub"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1234567890"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"John Doe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;sub&#x22;: &#x22;1234567890&#x22;,\x7F  &#x22;name&#x22;: &#x22;John Doe&#x22;\x7F}"><div></div></button></div></figure></div>
<p>The payload is then Base64-encoded, forming the second part of the JWT:</p>
<p><code dir="auto">JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE</code></p>
<p><strong>Signature</strong></p>
<p>This part is a string that consists of the Base64-encoded header and Base64-encoded payload concatenated with a period, followed by the encryption of the resulting string using the algorithm specified in the header (where $secret represents the user\u2019s private key).</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> encodedString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">base64UrlEncode</span><span style="--0:#E1E4E8">(header) </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'.'</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">base64UrlEncode</span><span style="--0:#E1E4E8">(payload);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> signature </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">HMACSHA256</span><span style="--0:#E1E4E8">(encodedString, </span><span style="--0:#9ECBFF">'$secret'</span><span style="--0:#E1E4E8">);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="var encodedString = base64UrlEncode(header) + &#x27;.&#x27; + base64UrlEncode(payload);\x7Fvar signature = HMACSHA256(encodedString, &#x27;$secret&#x27;);"><div></div></button></div></figure></div>
<p>These three parts are then concatenated using periods to form the complete JWT string as shown in the example at the beginning of this section.</p>
<h5 id="133-time-validity">1.3.3 Time validity</h5>
<p>The gateway will verify the exp field in the token. Once this field has expired, the gateway will consider the token invalid and reject the request directly. The expiration time value must be set.</p>
<h5 id="134-several-characteristics-of-jwt">1.3.4 Several Characteristics of JWT</h5>
<ol>
<li>By default, JWT is not encrypted and cannot write secret data into JWT.</li>
<li>JWT can not only be used for authentication but also for exchanging information. Using JWT effectively can reduce the number of times servers query the database.</li>
<li>The biggest drawback of JWT is that the server cannot invalidate a token during use, or change the token\u2019s permission, because the server does not keep the session state. That is, once JWT is issued, it will always be valid before it expires, unless the server deploys additional logic.</li>
<li>JWT contains authentication information itself. Once leaked, anyone can obtain all permissions of the token. To reduce theft, the expiration time of JWT should be set relatively short. For some more important permissions, users should be authenticated again when using them.</li>
<li>To reduce theft, JWT should not be transmitted in plaintext using the HTTP protocol, and the HTTPS protocol should be used for transmission.</li>
</ol>
<h3 id="2-how-to-apply-the-jwt-plugin-to-protect-the-api-of-the-user-system">2. How to apply the JWT plugin to protect the API of the user system</h3>
<h4 id="21-generate-a-pair-of-jwk-json-web-key">2.1 Generate a pair of JWK (JSON Web Key)</h4>
<p><strong>Method 1: Generate online</strong></p>
<p>Users can generate the private and public keys used for token generation and verification on this website <a href="https://mkjwk.org" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://mkjwk.org</a>. The private key is used for the authorization service to issue JWT, and the public key is configured into the JWT plugin for the gateway to verify the signature of the request. Note that the JWKs format configuration used by the gateway requires the public key in the figure below to be placed in the keys structure, such as: <code dir="auto">{"keys":[{"kty":"RSA","e":"AQAB",...}]}</code></p>
<p><img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png" alt="" referrerpolicy="no-referrer"></p>
<p><strong>Method 2: Generate locally</strong></p>
<p>This article uses a Java example to illustrate, and users of other languages can also find relevant tools to generate key pairs. Create a new Maven project and add the following dependencies:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>org.bitbucket.b_c&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>jose4j&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>0.7.0&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<dependency>\x7F     <groupId>org.bitbucket.b_c</groupId>\x7F     <artifactId>jose4j</artifactId>\x7F     <version>0.7.0</version>\x7F</dependency>"><div></div></button></div></figure></div>
<p>Use the following code to generate a pair of RSA keys:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">RsaJsonWebKey rsaJsonWebKey </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> RsaJwkGenerator.</span><span style="--0:#B392F0">generateJwk</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">2048</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">final</span><span style="--0:#E1E4E8"> String publicKeyString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> rsaJsonWebKey.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">final</span><span style="--0:#E1E4E8"> String privateKeyString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> rsaJsonWebKey.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);\x7Ffinal String publicKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);\x7Ffinal String privateKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);"><div></div></button></div></figure></div>
<h4 id="22-implement-the-token-issuance-authentication-service-using-the-private-key-in-jwk">2.2 Implement the token issuance authentication service using the private key in JWK</h4>
<p>The Keypair JSON string generated online in Section 2.1 (the first of the three boxes) or privateKeyString JSON string generated locally needs to be used as the private key to issue tokens for trusted users to access protected APIs. The specific implementation can refer to the following example. The form of issuing tokens to customers is determined by the user according to the specific business scenario. The function of issuing tokens can be deployed in the production environment and configured as a normal API for visitors to obtain through username and password, or tokens can be generated directly in the local environment and copied to designated users for use.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> java.security.PrivateKey;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.json.JsonUtil;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwk.RsaJsonWebKey;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwk.RsaJwkGenerator;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jws.AlgorithmIdentifiers;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jws.JsonWebSignature;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwt.JwtClaims;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwt.NumericDate;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.lang.JoseException;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">class</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GenerateJwtDemo</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">static</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">void</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">String</span><span style="--0:#E1E4E8">[] </span><span style="--0:#FFAB70">args</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">throws</span><span style="--0:#E1E4E8"> JoseException  {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String keyId </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"uniq_key"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#99A0A6">//Use the Keypair generated in section 2.1 of this article</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String privateKeyJson </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">kty</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">RSA</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">d</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: "</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">e</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">AQAB</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">alg</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">RS256</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw</span><span style="--0:#79B8FF">\\"\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"}"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">JwtClaims claims </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">JwtClaims</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setGeneratedJwtId</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setIssuedAtToNow</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">//Expiration time must be set</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">NumericDate date </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> NumericDate.</span><span style="--0:#B392F0">now</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">date.</span><span style="--0:#B392F0">addSeconds</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">120</span><span style="--0:#F97583">*</span><span style="--0:#79B8FF">60</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setExpirationTime</span><span style="--0:#E1E4E8">(date);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setNotBeforeMinutesInThePast</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setSubject</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"YOUR_SUBJECT"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setAudience</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"YOUR_AUDIENCE"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">//Add custom parameters, use String type for all values</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setClaim</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"userId"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"1213234"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setClaim</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"email"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"userEmail@youapp.com"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">JsonWebSignature jws </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">JsonWebSignature</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setAlgorithmHeaderValue</span><span style="--0:#E1E4E8">(AlgorithmIdentifiers.RSA_USING_SHA256);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setKeyIdHeaderValue</span><span style="--0:#E1E4E8">(keyId);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setPayload</span><span style="--0:#E1E4E8">(claims.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">());</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">PrivateKey privateKey </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RsaJsonWebKey</span><span style="--0:#E1E4E8">(JsonUtil.</span><span style="--0:#B392F0">parseJson</span><span style="--0:#E1E4E8">(privateKeyJson)).</span><span style="--0:#B392F0">getPrivateKey</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setKey</span><span style="--0:#E1E4E8">(privateKey);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String jwtResult </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> jws.</span><span style="--0:#B392F0">getCompactSerialization</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">System.out.</span><span style="--0:#B392F0">println</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Generate Json Web token , result is "</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> jwtResult);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import java.security.PrivateKey;\x7Fimport org.jose4j.json.JsonUtil;\x7Fimport org.jose4j.jwk.RsaJsonWebKey;\x7Fimport org.jose4j.jwk.RsaJwkGenerator;\x7Fimport org.jose4j.jws.AlgorithmIdentifiers;\x7Fimport org.jose4j.jws.JsonWebSignature;\x7Fimport org.jose4j.jwt.JwtClaims;\x7Fimport org.jose4j.jwt.NumericDate;\x7Fimport org.jose4j.lang.JoseException;\x7Fpublic class GenerateJwtDemo {\x7F    public static void main(String[] args) throws JoseException  {\x7F        String keyId = &#x22;uniq_key&#x22;;\x7F          //Use the Keypair generated in section 2.1 of this article\x7F        String privateKeyJson = &#x22;{\\n&#x22;\x7F            + &#x22;  \\&#x22;kty\\&#x22;: \\&#x22;RSA\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;d\\&#x22;: &#x22;\x7F            +\x7F            &#x22;\\&#x22;O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;e\\&#x22;: \\&#x22;AQAB\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;alg\\&#x22;: \\&#x22;RS256\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;n\\&#x22;: \\&#x22;vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe&#x22;\x7F            +\x7F            &#x22;--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\&#x22;\\n&#x22;\x7F            + &#x22;}&#x22;;\x7F        JwtClaims claims = new JwtClaims();\x7F        claims.setGeneratedJwtId();\x7F        claims.setIssuedAtToNow();\x7F        //Expiration time must be set\x7F        NumericDate date = NumericDate.now();\x7F        date.addSeconds(120*60);\x7F        claims.setExpirationTime(date);\x7F        claims.setNotBeforeMinutesInThePast(1);\x7F        claims.setSubject(&#x22;YOUR_SUBJECT&#x22;);\x7F        claims.setAudience(&#x22;YOUR_AUDIENCE&#x22;);\x7F        //Add custom parameters, use String type for all values\x7F        claims.setClaim(&#x22;userId&#x22;, &#x22;1213234&#x22;);\x7F        claims.setClaim(&#x22;email&#x22;, &#x22;userEmail@youapp.com&#x22;);\x7F        JsonWebSignature jws = new JsonWebSignature();\x7F        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);\x7F        jws.setKeyIdHeaderValue(keyId);\x7F        jws.setPayload(claims.toJson());\x7F        PrivateKey privateKey = new RsaJsonWebKey(JsonUtil.parseJson(privateKeyJson)).getPrivateKey();\x7F\x7F        jws.setKey(privateKey);\x7F        String jwtResult = jws.getCompactSerialization();\x7F        System.out.println(&#x22;Generate Json Web token , result is &#x22; + jwtResult);\x7F    }\x7F}"><div></div></button></div></figure></div>
<h2 id="plugin-configuration-guide">Plugin Configuration Guide</h2>
<h3 id="configuration-fields">Configuration Fields</h3>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Yes</td><td>-</td><td>Configures callers of the service for authenticating requests</td></tr><tr><td><code dir="auto">_rules_</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Configures access control lists for specific routes or domains for authorizing requests</td></tr></tbody></table>
<p>The configuration field descriptions for each item in consumers are as follows:</p>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Yes</td><td>-</td><td>Configures the name of this consumer</td></tr><tr><td><code dir="auto">jwks</code></td><td>string</td><td>Yes</td><td>-</td><td>Specifies a JSON Web Key Set, as defined in <a href="https://www.rfc-editor.org/rfc/rfc7517" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.rfc-editor.org/rfc/rfc7517</a>, consisting of public keys (or symmetric keys) used to verify the signature of JWT</td></tr><tr><td><code dir="auto">issuer</code></td><td>string</td><td>Yes</td><td>-</td><td>The issuer of the JWT, which should be consistent with the iss field in the payload</td></tr><tr><td><code dir="auto">claims_to_headers</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Extracts the specified fields from the JWT\u2019s payload and sets them to the specified request headers for forwarding to the backend</td></tr><tr><td><code dir="auto">from_headers</code></td><td>array of object</td><td>Optional</td><td>{\u201Cname\u201D:\u201CAuthorization\u201D,\u201Cvalue_prefix\u201D:\u201CBearer \u201C}</td><td>Extracts the JWT from the specified request headers</td></tr><tr><td><code dir="auto">from_params</code></td><td>array of string</td><td>Optional</td><td>access_token</td><td>Extracts the JWT from the specified URL parameters</td></tr><tr><td><code dir="auto">from_cookies</code></td><td>array of string</td><td>Optional</td><td>-</td><td>Extracts the JWT from the specified cookie(s)</td></tr><tr><td><code dir="auto">clock_skew_seconds</code></td><td>number</td><td>Optional</td><td>60</td><td>The amount of clock skew, in seconds, that is allowed when verifying the exp and iat fields of the JWT</td></tr><tr><td><code dir="auto">keep_token</code></td><td>bool</td><td>Optional</td><td>true</td><td>Whether to keep the JWT when forwarding it to the backend</td></tr></tbody></table>
<p><strong>Note:</strong></p>
<ul>
<li>The default value is used only if neither <code dir="auto">from_headers</code>, <code dir="auto">from_params</code>, nor <code dir="auto">from_cookies</code> are configured.</li>
</ul>
<p>The configuration field descriptions for each item in <code dir="auto">from_headers</code> are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Yes</td><td>-</td><td>Specifies the request header to extract the JWT from</td></tr><tr><td><code dir="auto">value_prefix</code></td><td>string</td><td>Yes</td><td>-</td><td>Removes the specified prefix from the request header\u2019s value, leaving the rest as the JWT</td></tr></tbody></table>
<p>The configuration field descriptions for each item in <code dir="auto">claims_to_headers</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">claim</code></td><td>string</td><td>Yes</td><td>-</td><td>The name of the field in the JWT payload, which must be a string or unsigned integer</td></tr><tr><td><code dir="auto">header</code></td><td>string</td><td>Yes</td><td>-</td><td>Sets the value of the specified request header to the value of the specified field in the payload, for forwarding to the backend</td></tr><tr><td><code dir="auto">override</code></td><td>bool</td><td>Optional</td><td>true</td><td>If true, overrides an existing header with the same name; if false, appends the header to the existing headers</td></tr></tbody></table>
<p>The configuration field descriptions for each item in <code dir="auto">_rules_</code> are as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">_match_route_</code></td><td>array of string</td><td>Optional, select either <code dir="auto">_match_route_</code> or <code dir="auto">_match_domain_</code></td><td>-</td><td>Configures the route names to match</td></tr><tr><td><code dir="auto">_match_domain_</code></td><td>array of string</td><td>Optional, select either <code dir="auto">_match_route_</code> or <code dir="auto">_match_domain_</code></td><td>-</td><td>Configures the domains to match</td></tr><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Required</td><td>-</td><td>Configures the consumer names allowed to access the matched requests</td></tr></tbody></table>
<p><strong>Note:</strong></p>
<ul>
<li>If the <code dir="auto">_rules_</code> field is not configured, authentication and authorization are enabled for all routes of the current gateway instance by default;</li>
<li>For authenticated and authorized requests, a <code dir="auto">X-Mse-Consumer</code> field is added to the request header to identify the caller\u2019s name.</li>
</ul>
<h3 id="configuration-example">Configuration Example</h3>
<h4 id="enable-for-specific-routes-or-domains">Enable for Specific Routes or Domains</h4>
<p>The following configuration enables Jwt Auth authentication and authorization for specific routes or domains of the gateway. If a JWT can match multiple <code dir="auto">jwks</code>, the first matching <code dir="auto">consumer</code> is hit according to the configuration order.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcd</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abc</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "RSA",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"e": "AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"use": "sig",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "RS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use the _rules_ field for fine-grained rule configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Effective when matched by route name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Effective when matched by domain name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- name: consumer1\x7F  issuer: abcd\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;k&#x22;: &#x22;hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew&#x22;,\x7F          &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F      ]\x7F    }\x7F- name: consumer2\x7F  issuer: abc\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;RSA&#x22;,\x7F          &#x22;e&#x22;: &#x22;AQAB&#x22;,\x7F          &#x22;use&#x22;: &#x22;sig&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;alg&#x22;: &#x22;RS256&#x22;,\x7F          &#x22;n&#x22;: &#x22;i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw&#x22;\x7F        }\x7F      ]\x7F    }\x7F# Use the _rules_ field for fine-grained rule configuration\x7F_rules_:\x7F# Rule 1: Effective when matched by route name\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F  allow:\x7F  - consumer1\x7F# Rule 2: Effective when matched by domain name\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  allow:\x7F  - consumer2"><div></div></button></div></figure></div>
<p>In this example, the <code dir="auto">route-a</code> and <code dir="auto">route-b</code> specified in <code dir="auto">_match_route_</code> are the names of the routes filled in when creating the gateway route. When these two routes are matched, access will be allowed for the caller with the <code dir="auto">name</code> of <code dir="auto">consumer1</code>, and other callers will not be allowed to access.</p>
<p>The <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> specified in <code dir="auto">_match_domain_</code> are used to match the domain names of the requests. When a domain name match is found, access will be allowed for the caller with the <code dir="auto">name</code> of <code dir="auto">consumer2</code>, and other callers will not be allowed to access.</p>
<h5 id="according-to-this-configuration-the-following-requests-are-allowed">According to this configuration, the following requests are allowed:</h5>
<p>Assuming the following requests will match the route-a route:</p>
<p><strong>JWT is set in URL parameter</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  &#x27;http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<p><strong>JWT is set in HTTP request header</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<p>After authentication and authorization, a <code dir="auto">X-Mse-Consumer</code> field will be added in the request header with a value of <code dir="auto">consumer1</code> in this example, to identify the name of the caller.</p>
<h5 id="the-following-requests-will-be-denied">The following requests will be denied:</h5>
<p><strong>Request without JWT provided, returns 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>The consumer matched by the provided JWT in the request does not have access, returns 403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer1 is not in the allow list of *.example.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">'http://xxx.example.com/test'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  &#x27;http://xxx.example.com/test&#x27; -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<h4 id="enabling-at-gateway-instance-level">Enabling at Gateway Instance Level</h4>
<p>The following configuration does not specify the <code dir="auto">_rules_</code> field, so JWT authentication will be enabled at the gateway instance level:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcd</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abc</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "RSA",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"e": "AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"use": "sig",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "RS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- name: consumer1\x7F  issuer: abcd\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;k&#x22;: &#x22;hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew&#x22;,\x7F          &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F      ]\x7F    }\x7F- name: consumer2\x7F  issuer: abc\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;RSA&#x22;,\x7F          &#x22;e&#x22;: &#x22;AQAB&#x22;,\x7F          &#x22;use&#x22;: &#x22;sig&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;alg&#x22;: &#x22;RS256&#x22;,\x7F          &#x22;n&#x22;: &#x22;i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw&#x22;\x7F        }\x7F      ]\x7F    }"><div></div></button></div></figure></div>
<h2 id="common-error-codes">Common Error Codes</h2>






























<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Reason Description</th></tr></thead><tbody><tr><td>401</td><td>JWT missing</td><td>The JWT is not provided in the request header.</td></tr><tr><td>401</td><td>JWT expired</td><td>The JWT has expired.</td></tr><tr><td>401</td><td>JWT verification fails</td><td>The JWT payload verification failed, such as the iss mismatch.</td></tr><tr><td>403</td><td>Access denied</td><td>Access to the current route is denied.</td></tr></tbody></table>`,a={title:"JWT authentication",keywords:["higress","jwt"],description:"JWT authentication implements authentication and authorization based on JWT (JSON Web Token)."},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/jwt-auth.md",n=void 0,l=function(){return`
## Description
The \`jwt-auth\` plugin implements authentication and authorization based on JWT (JSON Web Token), supports parsing JWTs from URL parameters, request headers, and Cookie fields from HTTP requests, and verifies whether the token has permission to access.

The difference between this plugin and the JWT authentication in \`Security Capabilities->Authentication and Authorization\` is that it provides additional capabilities for identifying the caller's identity, supporting the configuration of different JWT credentials for different callers.

## Detailed Description

### 1. Token-based authentication

#### 1.1 Introduction
Many open APIs need to identify the identity of the caller and determine whether the requested resource can be returned to the caller based on this identity. Token is a mechanism used for identity verification. Based on this mechanism, the application does not need to retain the user's authentication information or session information on the server, which can realize stateless and distributed web application authorization and provide convenience for application extension.

#### 1.2 Process Description

The above figure is the business process sequence diagram when the gateway uses JWT for authentication, and the following we will describe the steps marked in the figure in detail in words:

1. The client initiates an authentication request to the API gateway, usually carrying the end user's username and password in the request;

2. The gateway forwards the request directly to the backend service;

3. The backend service reads the authentication information (such as the username and password) in the request for verification. After the verification is passed, it uses the private key to generate a standard token and returns it to the gateway;

4. The gateway returns the response with the token to the client, and the client needs to cache this token locally;

5. The client sends a business request to the API gateway, carrying the token in the request;

6. The gateway uses the public key set by the user to verify the token in the request. After the verification is passed, the request is passed through to the backend service;

7. The backend service processes the business and responds;

8. The gateway returns the business response to the client.

In this entire process, the gateway uses the token authentication mechanism to realize the ability of users to use their own user system to authorize their API. Next, we will introduce the structured token JSON Web Token (JWT) used by the gateway to implement token authentication.

#### 1.3 JWT

##### 1.3.1 Introduction

JSON Web Token (JWT) is an open standard RFC7519 based on JSON for executing a type of claim to pass between network applications. JWT can generally be used as an independent identity verification token, which can contain user identification, user roles, and permissions information, making it easier to obtain resources from the resource server, and can also add some other necessary declarative information for other business logic, especially suitable for the login scenario of distributed sites.

##### 1.3.2 Composition of JWT

\`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\`

As shown in the example above, JWT is a string consisting of three parts:

- Header
- Payload
- Signature

**Header**

The header of the JWT carries two pieces of information:

- The type of the token, which is JWT
- The algorithm used for encryption

The gateway supports the following encryption algorithms:

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

The header is then Base64-encoded (this encoding can be symmetrically decoded), forming the first part:

\`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\`

**Payload**

The payload is where the actual information is stored. The details are defined below:

\`\`\`text
iss: The issuer of the token. This indicates who created the token and is a string value.
sub: The subject identifier. This is the unique identifier for the end user provided by the issuer, and is no longer than 255 ASCII characters, and is case-sensitive within the issuer's scope.
aud: The audience(s) of the token, which is an array of case-sensitive strings.
exp: The expiration time of the token, after which the token will be invalidated, is an integer declaration representing the Unix timestamp in seconds.
iat: The issuance time of the token, is an integer declaration representing the Unix timestamp in seconds.
jti: The unique identifier of the token, and the value is unique for every token created by the issuer. It is usually a cryptographically random value to prevent conflicts. This component adds a random entropy that an attacker cannot obtain to the structured token, making it more difficult for the token to be guessed or replayed.
\`\`\`

Custom fields for a user feature can also be added, such as the example below adding a "name" field for the user's nickname:

\`\`\`js
{
  "sub": "1234567890",
  "name": "John Doe"
}
\`\`\`

The payload is then Base64-encoded, forming the second part of the JWT:

\`JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE\`

**Signature**

This part is a string that consists of the Base64-encoded header and Base64-encoded payload concatenated with a period, followed by the encryption of the resulting string using the algorithm specified in the header (where $secret represents the user's private key).

\`\`\`js
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, '$secret');
\`\`\`

These three parts are then concatenated using periods to form the complete JWT string as shown in the example at the beginning of this section.

##### 1.3.3 Time validity

The gateway will verify the exp field in the token. Once this field has expired, the gateway will consider the token invalid and reject the request directly. The expiration time value must be set.

##### 1.3.4 Several Characteristics of JWT

1. By default, JWT is not encrypted and cannot write secret data into JWT.
2. JWT can not only be used for authentication but also for exchanging information. Using JWT effectively can reduce the number of times servers query the database.
3. The biggest drawback of JWT is that the server cannot invalidate a token during use, or change the token's permission, because the server does not keep the session state. That is, once JWT is issued, it will always be valid before it expires, unless the server deploys additional logic.
4. JWT contains authentication information itself. Once leaked, anyone can obtain all permissions of the token. To reduce theft, the expiration time of JWT should be set relatively short. For some more important permissions, users should be authenticated again when using them.
5. To reduce theft, JWT should not be transmitted in plaintext using the HTTP protocol, and the HTTPS protocol should be used for transmission.

### 2. How to apply the JWT plugin to protect the API of the user system

#### 2.1 Generate a pair of JWK (JSON Web Key)

**Method 1: Generate online**

Users can generate the private and public keys used for token generation and verification on this website https://mkjwk.org. The private key is used for the authorization service to issue JWT, and the public key is configured into the JWT plugin for the gateway to verify the signature of the request. Note that the JWKs format configuration used by the gateway requires the public key in the figure below to be placed in the keys structure, such as: \`{"keys":[{"kty":"RSA","e":"AQAB",...}]}\`

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png)

**Method 2: Generate locally**

This article uses a Java example to illustrate, and users of other languages can also find relevant tools to generate key pairs. Create a new Maven project and add the following dependencies:

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

#### 2.2 Implement the token issuance authentication service using the private key in JWK

The Keypair JSON string generated online in Section 2.1 (the first of the three boxes) or privateKeyString JSON string generated locally needs to be used as the private key to issue tokens for trusted users to access protected APIs. The specific implementation can refer to the following example. The form of issuing tokens to customers is determined by the user according to the specific business scenario. The function of issuing tokens can be deployed in the production environment and configured as a normal API for visitors to obtain through username and password, or tokens can be generated directly in the local environment and copied to designated users for use.

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
          //Use the Keypair generated in section 2.1 of this article
        String privateKeyJson = "{\\n"
            + "  \\"kty\\": \\"RSA\\",\\n"
            + "  \\"d\\": "
            +
            "\\"O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\",\\n"
            + "  \\"e\\": \\"AQAB\\",\\n"
            + "  \\"alg\\": \\"RS256\\",\\n"
            + "  \\"n\\": \\"vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe"
            +
            "--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\"\\n"
            + "}";
        JwtClaims claims = new JwtClaims();
        claims.setGeneratedJwtId();
        claims.setIssuedAtToNow();
        //Expiration time must be set
        NumericDate date = NumericDate.now();
        date.addSeconds(120*60);
        claims.setExpirationTime(date);
        claims.setNotBeforeMinutesInThePast(1);
        claims.setSubject("YOUR_SUBJECT");
        claims.setAudience("YOUR_AUDIENCE");
        //Add custom parameters, use String type for all values
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

## Plugin Configuration Guide

### Configuration Fields

| Name        | Data Type  | Required  | Default | Description  |
| ----------- | --------------- | ------------------------------------------- | ------ | ----------------------------------------------------------- |
| \`consumers\` | array of object | Yes  | -      | Configures callers of the service for authenticating requests |
| \`_rules_\`   | array of object | Optional   | -      | Configures access control lists for specific routes or domains for authorizing requests        |

The configuration field descriptions for each item in consumers are as follows:

| Name                    | Data Type          | Required | Default | Description|
| ----------------------- | ----------------- | -------- | ------------------------------------------------- | ------------------------ |
| \`name\`                  | string            | Yes     | -    | Configures the name of this consumer     |
| \`jwks\`                  | string            | Yes     | -   | Specifies a JSON Web Key Set, as defined in https://www.rfc-editor.org/rfc/rfc7517, consisting of public keys (or symmetric keys) used to verify the signature of JWT  |
| \`issuer\`                | string            | Yes     | -  | The issuer of the JWT, which should be consistent with the iss field in the payload   |
| \`claims_to_headers\`     | array of object   | Optional     | -  | Extracts the specified fields from the JWT's payload and sets them to the specified request headers for forwarding to the backend |
| \`from_headers\`          | array of object   | Optional     | {"name":"Authorization","value_prefix":"Bearer "} | Extracts the JWT from the specified request headers |
| \`from_params\`           | array of string   | Optional     | access_token    | Extracts the JWT from the specified URL parameters     |
| \`from_cookies\`          | array of string   | Optional     | -    | Extracts the JWT from the specified cookie(s)     |
| \`clock_skew_seconds\`    | number            | Optional     | 60     | The amount of clock skew, in seconds, that is allowed when verifying the exp and iat fields of the JWT          |
| \`keep_token\`            | bool              | Optional     | true   | Whether to keep the JWT when forwarding it to the backend  |

**Note:**

- The default value is used only if neither \`from_headers\`, \`from_params\`, nor \`from_cookies\` are configured.

The configuration field descriptions for each item in \`from_headers\` are as follows:

| Name             | Data Type        | Required| Default | Description |
| ---------------- | --------------- | ------- | ------ | --------------------------------------------------------- |
| \`name\`           | string          | Yes    | -      | Specifies the request header to extract the JWT from |
| \`value_prefix\`   | string          | Yes    | -      | Removes the specified prefix from the request header's value, leaving the rest as the JWT  |

The configuration field descriptions for each item in \`claims_to_headers\` are as follows:

| Name             | Data Type        | Required| Default | Description  |
| ---------------- | --------------- | ------- | ------ | --------------------------------------------------------- |
| \`claim\`          | string          | Yes    | -      | The name of the field in the JWT payload, which must be a string or unsigned integer |
| \`header\`         | string          | Yes    | -      | Sets the value of the specified request header to the value of the specified field in the payload, for forwarding to the backend  |
| \`override\`       | bool            | Optional    | true   | If true, overrides an existing header with the same name; if false, appends the header to the existing headers |

The configuration field descriptions for each item in \`_rules_\` are as follows:

|  Name             | Data Type        | Required| Default | Description  |
| ---------------- | --------------- | ------------------------------------------------- | ------ | -------------------------------------------------- |
| \`_match_route_\`  | array of string | Optional, select either \`_match_route_\` or \`_match_domain_\` | -      | Configures the route names to match|
| \`_match_domain_\` | array of string | Optional, select either \`_match_route_\` or \`_match_domain_\` | -      | Configures the domains to match |
| \`allow\`          | array of string | Required  | -      | Configures the consumer names allowed to access the matched requests |

**Note:**
- If the \`_rules_\` field is not configured, authentication and authorization are enabled for all routes of the current gateway instance by default;
- For authenticated and authorized requests, a \`X-Mse-Consumer\` field is added to the request header to identify the caller's name.

### Configuration Example

#### Enable for Specific Routes or Domains

The following configuration enables Jwt Auth authentication and authorization for specific routes or domains of the gateway. If a JWT can match multiple \`jwks\`, the first matching \`consumer\` is hit according to the configuration order.

\`\`\`yaml
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
# Use the _rules_ field for fine-grained rule configuration
_rules_:
# Rule 1: Effective when matched by route name
- _match_route_:
  - route-a
  - route-b
  allow:
  - consumer1
# Rule 2: Effective when matched by domain name
- _match_domain_:
  - "*.example.com"
  - test.com
  allow:
  - consumer2
\`\`\`

In this example, the \`route-a\` and \`route-b\` specified in \`_match_route_\` are the names of the routes filled in when creating the gateway route. When these two routes are matched, access will be allowed for the caller with the \`name\` of \`consumer1\`, and other callers will not be allowed to access.

The \`*.example.com\` and \`test.com\` specified in \`_match_domain_\` are used to match the domain names of the requests. When a domain name match is found, access will be allowed for the caller with the \`name\` of \`consumer2\`, and other callers will not be allowed to access.

##### According to this configuration, the following requests are allowed:

Assuming the following requests will match the route-a route:

**JWT is set in URL parameter**
\`\`\`bash
curl  'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

**JWT is set in HTTP request header**
\`\`\`bash
curl  http://xxx.hello.com/test -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

After authentication and authorization, a \`X-Mse-Consumer\` field will be added in the request header with a value of \`consumer1\` in this example, to identify the name of the caller.

##### The following requests will be denied:

**Request without JWT provided, returns 401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`

**The consumer matched by the provided JWT in the request does not have access, returns 403**
\`\`\`bash
# consumer1 is not in the allow list of *.example.com
curl  'http://xxx.example.com/test' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

#### Enabling at Gateway Instance Level

The following configuration does not specify the \`_rules_\` field, so JWT authentication will be enabled at the gateway instance level:

\`\`\`yaml
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

| HTTP Status Code | Error Message               | Reason Description|
|------------------| ---------------------- | -------------------------------------------------------------------------------- |
| 401              | JWT missing            | The JWT is not provided in the request header. |
| 401              | JWT expired            | The JWT has expired. |
| 401              | JWT verification fails | The JWT payload verification failed, such as the iss mismatch. |
| 403              | Access denied          | Access to the current route is denied. |
`},o=function(){return e},d=function(){return[{depth:2,slug:"description",text:"Description"},{depth:2,slug:"detailed-description",text:"Detailed Description"},{depth:3,slug:"1-token-based-authentication",text:"1. Token-based authentication"},{depth:4,slug:"11-introduction",text:"1.1 Introduction"},{depth:4,slug:"12-process-description",text:"1.2 Process Description"},{depth:4,slug:"13-jwt",text:"1.3 JWT"},{depth:5,slug:"131-introduction",text:"1.3.1 Introduction"},{depth:5,slug:"132-composition-of-jwt",text:"1.3.2 Composition of JWT"},{depth:5,slug:"133-time-validity",text:"1.3.3 Time validity"},{depth:5,slug:"134-several-characteristics-of-jwt",text:"1.3.4 Several Characteristics of JWT"},{depth:3,slug:"2-how-to-apply-the-jwt-plugin-to-protect-the-api-of-the-user-system",text:"2. How to apply the JWT plugin to protect the API of the user system"},{depth:4,slug:"21-generate-a-pair-of-jwk-json-web-key",text:"2.1 Generate a pair of JWK (JSON Web Key)"},{depth:4,slug:"22-implement-the-token-issuance-authentication-service-using-the-private-key-in-jwk",text:"2.2 Implement the token issuance authentication service using the private key in JWK"},{depth:2,slug:"plugin-configuration-guide",text:"Plugin Configuration Guide"},{depth:3,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"configuration-example",text:"Configuration Example"},{depth:4,slug:"enable-for-specific-routes-or-domains",text:"Enable for Specific Routes or Domains"},{depth:5,slug:"according-to-this-configuration-the-following-requests-are-allowed",text:"According to this configuration, the following requests are allowed:"},{depth:5,slug:"the-following-requests-will-be-denied",text:"The following requests will be denied:"},{depth:4,slug:"enabling-at-gateway-instance-level",text:"Enabling at Gateway Instance Level"},{depth:2,slug:"common-error-codes",text:"Common Error Codes"}]},s=c((E,m,g)=>{const{layout:x,...i}=a;return i.file=t,i.url=n,r`${h()}${y(e)}`})});export{s as Content,v as __tla,o as compiledContent,s as default,t as file,a as frontmatter,d as getHeadings,l as rawContent,n as url};
