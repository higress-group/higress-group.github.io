import{c as r,__tla as l}from"./astro-component.DeDyO-JF.js";import{r as u,m as p,u as h,__tla as m}from"./constant.CRM8ttM5.js";import{__tla as f}from"./astro/assets-service.B3vdYoe2.js";let t,o,s,a,d,c,n,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="description">Description</h2>
<p><code dir="auto">basic-auth</code> plugin implements the function of authentication based on the HTTP Basic Auth standard.</p>
<h2 id="configuration-fields">Configuration Fields</h2>


























<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Caller of the service for authentication of requests</td></tr><tr><td><code dir="auto">_rules_</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Configure access permission list for specific routes or domains to authenticate requests</td></tr></tbody></table>
<p>Filed descriptions of <code dir="auto">consumers</code> items:</p>


























<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">credential</code></td><td>string</td><td>Required</td><td>-</td><td>Credential for this consumer\u2019s access</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Name of this consumer</td></tr></tbody></table>
<p>Configuration field descriptions for each item in <code dir="auto">_rules_</code> are as follows:</p>

































<table><thead><tr><th>Field Name</th><th>Data Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">_match_route_</code></td><td>array of string</td><td>One of <code dir="auto">_match_route_</code> or <code dir="auto">_match_domain_</code></td><td>-</td><td>Configure the routes to match for request authorization</td></tr><tr><td><code dir="auto">_match_domain_</code></td><td>array of string</td><td>One of <code dir="auto">_match_route_</code> , <code dir="auto">_match_domain_</code></td><td>-</td><td>Configure the domains to match for request authorization</td></tr><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Required</td><td>-</td><td>Configure the consumer names allowed to access requests that match the match condition</td></tr></tbody></table>
<p><strong>Note:</strong></p>
<ul>
<li>If the <code dir="auto">_rules_</code> field is not configured, authentication is enabled for all routes of the current gateway instance by default;</li>
<li>For authenticated requests,  <code dir="auto">X-Mse-Consumer</code> field will be added to the request header to identify the name of the caller.</li>
</ul>
<h2 id="configuration-samples">Configuration Samples</h2>
<h3 id="enable-authentication-and-authorization-for-specific-routes-or-domains">Enable Authentication and Authorization for specific routes or domains</h3>
<p>The following configuration will enable Basic Auth authentication and authorization for specific routes or domains of the gateway. Note that the username and password in the credential information are separated by a \u201D:\u201D, and the <code dir="auto">credential</code> field cannot be repeated.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># use the _rules_ field for fine-grained rule configuration.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'admin:123456'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'guest:abc'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># rule 1: match by the route name.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># rule 2: match by the domain.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# use the _rules_ field for fine-grained rule configuration.\x7Fconsumers:\x7F- credential: &#x27;admin:123456&#x27;\x7F  name: consumer1\x7F- credential: &#x27;guest:abc&#x27;\x7F  name: consumer2\x7F_rules_:\x7F# rule 1: match by the route name.\x7F  - _match_route_:\x7F    - route-a\x7F    - route-b\x7F    allow:\x7F    - consumer1\x7F# rule 2: match by the domain.\x7F  - _match_domain_:\x7F    - &#x22;*.example.com&#x22;\x7F    - test.com\x7F    allow:\x7F    - consumer2"><div></div></button></div></figure></div>
<p>In this sample, <code dir="auto">route-a</code> and <code dir="auto">route-b</code> specified in <code dir="auto">_match_route_</code> are the route names filled in when creating gateway routes. When these two routes are matched, the caller with <code dir="auto">name</code> as <code dir="auto">consumer1</code> is allowed to access, and other callers are not allowed to access.</p>
<p>The <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> specified in <code dir="auto">_match_domain_</code> are used to match the domain name of the request. When the domain name is matched, the caller with <code dir="auto">name</code> as <code dir="auto">consumer2</code> is allowed to access, and other callers are not allowed to access.</p>
<h4 id="according-to-this-configuration-the-following-requests-are-allowed">According to this configuration, the following requests are allowed:</h4>
<p><strong>Requests with specified username and password</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Assuming the following request will match with route-a</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use -u option of curl to specify the credentials</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin:123456</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Or specify the Authorization request header directly with the credentials in base64 encoding</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Basic YWRtaW46MTIzNDU2'</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u admin:123456  http://xxx.hello.com/test\x7Fcurl -H &#x27;Authorization: Basic YWRtaW46MTIzNDU2&#x27;  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p>A <code dir="auto">X-Mse-Consumer</code> field will be added to the headers of the request, and its value in this example is <code dir="auto">consumer1</code>, used to identify the name of the caller when passed authentication and authorization.</p>
<h4 id="the-following-requests-will-be-denied">The following requests will be denied:</h4>
<p><strong>Requests without providing username and password, returning 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>Requests with incorrect username or password, returning 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin:abc</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u admin:abc  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>Requests matched with a caller who has no access permission, returning 403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer2 is not in the allow list of route-a</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">guest:abc</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u guest:abc  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<h3 id="enable-basic-auth-for-gateway-instance">Enable basic auth for gateway instance</h3>
<p>The following configuration does not specify the <code dir="auto">_rules_</code> field, so Basic Auth authentication will be effective for the whole gateway instance.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'admin:123456'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'guest:abc'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- credential: &#x27;admin:123456&#x27;\x7F  name: consumer1\x7F- credential: &#x27;guest:abc&#x27;\x7F  name: consumer2"><div></div></button></div></figure></div>
<h2 id="error-codes">Error Codes</h2>

























<table><thead><tr><th>HTTP Status Code</th><th>Error Info</th><th>Reason</th></tr></thead><tbody><tr><td>401</td><td>Request denied by Basic Auth check. No Basic Authentication information found.</td><td>Credentials not provided in the request</td></tr><tr><td>401</td><td>Request denied by Basic Auth check. Invalid username and/or password</td><td>Invalid username and/or password</td></tr><tr><td>403</td><td>Request denied by Basic Auth check. Unauthorized consumer</td><td>Unauthorized consumer</td></tr></tbody></table>`,a={title:"Basic Auth",keywords:["higress","basic auth"],description:"basic-auth plugin implements the function of authentication based on the HTTP Basic Auth standard."},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/basic-auth.md",n=void 0,c=function(){return`
## Description 
\`basic-auth\` plugin implements the function of authentication based on the HTTP Basic Auth standard.

## Configuration Fields

| Name        | Type            | Requirement | Default Value | Description                                                 |
| ----------- | --------------- | -------- | ------ | ---------------------------------------------------- |
| \`consumers\` | array of object | Required     | -      | Caller of the service for authentication of requests |
| \`_rules_\`   | array of object | Optional     | -      | Configure access permission list for specific routes or domains to authenticate requests |

Filed descriptions of \`consumers\` items:

| Name         | Type   | Requirement | Default Value | Description                           |
| ------------ | ------ | ----------- | ------------- | ------------------------------------- |
| \`credential\` | string | Required    | -             | Credential for this consumer's access |
| \`name\`       | string | Required    | -             | Name of this consumer                 |

Configuration field descriptions for each item in \`_rules_\` are as follows:

| Field Name            | Data Type        | Requirement                                          | Default | Description                                               |
| ---------------- | --------------- | ------------------------------------------------- | ------ | -------------------------------------------------- |
| \`_match_route_\`  | array of string | One of \`_match_route_\` or \`_match_domain_\` | -      | Configure the routes to match for request authorization                               |
| \`_match_domain_\` | array of string | One of \`_match_route_\` , \`_match_domain_\` | -      | Configure the domains to match for request authorization                                   |
| \`allow\`          | array of string | Required                                              | -      | Configure the consumer names allowed to access requests that match the match condition |

**Note:**

- If the \`_rules_\` field is not configured, authentication is enabled for all routes of the current gateway instance by default;
- For authenticated requests,  \`X-Mse-Consumer\` field will be added to the request header to identify the name of the caller.

## Configuration Samples

### Enable Authentication and Authorization for specific routes or domains

The following configuration will enable Basic Auth authentication and authorization for specific routes or domains of the gateway. Note that the username and password in the credential information are separated by a ":", and the \`credential\` field cannot be repeated.



\`\`\`yaml
# use the _rules_ field for fine-grained rule configuration.
consumers:
- credential: 'admin:123456'
  name: consumer1
- credential: 'guest:abc'
  name: consumer2
_rules_:
# rule 1: match by the route name.
  - _match_route_:
    - route-a
    - route-b
    allow:
    - consumer1
# rule 2: match by the domain.
  - _match_domain_:
    - "*.example.com"
    - test.com
    allow:
    - consumer2
\`\`\`
In this sample, \`route-a\` and \`route-b\` specified in \`_match_route_\` are the route names filled in when creating gateway routes. When these two routes are matched, the caller with \`name\` as \`consumer1\` is allowed to access, and other callers are not allowed to access.

The \`*.example.com\` and \`test.com\` specified in \`_match_domain_\` are used to match the domain name of the request. When the domain name is matched, the caller with \`name\` as \`consumer2\` is allowed to access, and other callers are not allowed to access.


#### According to this configuration, the following requests are allowed:

**Requests with specified username and password**

\`\`\`bash
# Assuming the following request will match with route-a
# Use -u option of curl to specify the credentials
curl -u admin:123456  http://xxx.hello.com/test
# Or specify the Authorization request header directly with the credentials in base64 encoding
curl -H 'Authorization: Basic YWRtaW46MTIzNDU2'  http://xxx.hello.com/test
\`\`\`

A \`X-Mse-Consumer\` field will be added to the headers of the request, and its value in this example is \`consumer1\`, used to identify the name of the caller when passed authentication and authorization.

#### The following requests will be denied:

**Requests without providing username and password, returning 401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`
**Requests with incorrect username or password, returning 401**
\`\`\`bash
curl -u admin:abc  http://xxx.hello.com/test
\`\`\`
**Requests matched with a caller who has no access permission, returning 403**
\`\`\`bash
# consumer2 is not in the allow list of route-a
curl -u guest:abc  http://xxx.hello.com/test
\`\`\`

### Enable basic auth for gateway instance

The following configuration does not specify the \`_rules_\` field, so Basic Auth authentication will be effective for the whole gateway instance.

\`\`\`yaml
consumers:
- credential: 'admin:123456'
  name: consumer1
- credential: 'guest:abc'
  name: consumer2
\`\`\`

## Error Codes 

| HTTP Status Code | Error Info                                                                       | Reason               |
| ----------- | ------------------------------------------------------------------------------ | ---------------------- |
| 401         | Request denied by Basic Auth check. No Basic Authentication information found. | Credentials not provided in the request        |
| 401         | Request denied by Basic Auth check. Invalid username and/or password           | Invalid username and/or password           |
| 403         | Request denied by Basic Auth check. Unauthorized consumer                      | Unauthorized consumer |
`},o=function(){return e},d=function(){return[{depth:2,slug:"description",text:"Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-samples",text:"Configuration Samples"},{depth:3,slug:"enable-authentication-and-authorization-for-specific-routes-or-domains",text:"Enable Authentication and Authorization for specific routes or domains"},{depth:4,slug:"according-to-this-configuration-the-following-requests-are-allowed",text:"According to this configuration, the following requests are allowed:"},{depth:4,slug:"the-following-requests-will-be-denied",text:"The following requests will be denied:"},{depth:3,slug:"enable-basic-auth-for-gateway-instance",text:"Enable basic auth for gateway instance"},{depth:2,slug:"error-codes",text:"Error Codes"}]},t=r((E,v,g)=>{const{layout:b,...i}=a;return i.file=s,i.url=n,u`${p()}${h(e)}`})});export{t as Content,y as __tla,o as compiledContent,t as default,s as file,a as frontmatter,d as getHeadings,c as rawContent,n as url};
