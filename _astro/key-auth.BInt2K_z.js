import{c as l,__tla as c}from"./astro-component.CXlaF79K.js";import{r as u,m as p,u as h,__tla as f}from"./constant.D0llTwwf.js";import{__tla as y}from"./astro/assets-service.DQopRnBr.js";let t,o,a,s,d,r,i,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">key-auth</code> plugin implements authentication based on API Key, supporting the parsing of the API Key from HTTP request URL parameters or request headers, while also verifying whether the API Key has permission to access the resource.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code>
Plugin Execution Priority: <code dir="auto">310</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<p><strong>Note:</strong></p>
<ul>
<li>Authentication and authorization configurations cannot coexist within a single rule.</li>
<li>For requests that are authenticated, a header field <code dir="auto">X-Mse-Consumer</code> will be added to identify the caller\u2019s name.</li>
</ul>
<h3 id="authentication-configuration">Authentication Configuration</h3>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>Optional (<strong>Instance-Level Configuration Only</strong>)</td><td>-</td><td>Can only be configured at the instance level; if set to true, the authentication mechanism takes effect globally; if set to false, it only applies to the configured hostnames and routes. If not configured, it will only take effect globally when no hostname and route configurations are present (to maintain compatibility with older user habits).</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configures the service callers for request authentication.</td></tr><tr><td><code dir="auto">keys</code></td><td>array of string</td><td>Required</td><td>-</td><td>Source field names for the API Key, which can be URL parameters or HTTP request header names.</td></tr><tr><td><code dir="auto">in_query</code></td><td>bool</td><td>At least one of <code dir="auto">in_query</code> and <code dir="auto">in_header</code> must be true</td><td>true</td><td>When configured as true, the gateway will attempt to parse the API Key from URL parameters.</td></tr><tr><td><code dir="auto">in_header</code></td><td>bool</td><td>At least one of <code dir="auto">in_query</code> and <code dir="auto">in_header</code> must be true</td><td>true</td><td>When configured as true, the gateway will attempt to parse the API Key from HTTP request headers.</td></tr></tbody></table>
<p>The configuration field descriptions for each item in <code dir="auto">consumers</code> are as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">credential</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the access credential for this consumer.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the name for this consumer.</td></tr></tbody></table>
<h3 id="authorization-configuration-optional">Authorization Configuration (Optional)</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Optional (<strong>Non-Instance Level Configuration</strong>)</td><td>-</td><td>Can only be configured on fine-grained rules such as routes or hostnames; specifies the allowed consumers for matching requests, allowing for fine-grained permission control.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="global-configuration-for-authentication-and-granular-route-authorization">Global Configuration for Authentication and Granular Route Authorization</h3>
<p>The following configuration will enable Key Auth authentication and authorization for specific routes or hostnames in the gateway. The <code dir="auto">credential</code> field must not repeat.</p>
<p>At the instance level, do the following plugin configuration:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">x-api-key</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F  name: consumer1\x7F- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F  name: consumer2\x7Fkeys:\x7F- apikey\x7F- x-api-key"><div></div></button></div></figure></div>
<p>For routes route-a and route-b, do the following configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>For the hostnames *.example.com and test.com, do the following configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p><strong>Note:</strong>
The routes route-a and route-b specified in this example refer to the route names filled in when creating the gateway routes. When matched with these two routes, requests from the caller named consumer1 will be allowed while others will be denied.</p>
<p>The specified hostnames *.example.com and test.com are used to match the request\u2019s domain name. When a domain name is matched, callers named consumer2 will be allowed while others will be denied.</p>
<p>Based on this configuration, the following requests will be allowed:</p>
<p>Assuming the following request matches route-a:
<strong>Setting API Key in URL Parameters</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5"><div></div></button></div></figure></div>
<p><strong>Setting API Key in HTTP Request Headers</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5&#x27;"><div></div></button></div></figure></div>
<p>After successful authentication and authorization, the request\u2019s header will have an added <code dir="auto">X-Mse-Consumer</code> field with the value <code dir="auto">consumer1</code>, to identify the name of the caller.</p>
<p>The following requests will be denied access:
<strong>Request without an API Key returns 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>Request with an invalid API Key returns 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5"><div></div></button></div></figure></div>
<p><strong>Caller matched with provided API Key has no access rights, returns 403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer2 is not in the allow list of route-a</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<h3 id="enabling-at-the-instance-level">Enabling at the Instance Level</h3>
<p>The following configuration will enable Basic Auth authentication at the instance level for the gateway, requiring all requests to pass authentication before accessing.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">x-api-key</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F  name: consumer1\x7F- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F  name: consumer2\x7Fkeys:\x7F- apikey\x7F- x-api-key"><div></div></button></div></figure></div>
<h2 id="related-error-codes">Related Error Codes</h2>






























<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Reason Explanation</th></tr></thead><tbody><tr><td>401</td><td>Request denied by Key Auth check. Multiple API keys found in request</td><td>Multiple API Keys provided in the request.</td></tr><tr><td>401</td><td>Request denied by Key Auth check. No API key found in request</td><td>API Key not provided in the request.</td></tr><tr><td>401</td><td>Request denied by Key Auth check. Invalid API key</td><td>The current API Key is not authorized for access.</td></tr><tr><td>403</td><td>Request denied by Key Auth check. Unauthorized consumer</td><td>The caller does not have access permissions.</td></tr></tbody></table>`,s={title:"Key Authentication",keywords:["higress","key auth"],description:"Key Authentication Plugin Configuration Reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/key-auth.md",i=void 0,r=function(){return`## Function Description
The \`key-auth\` plugin implements authentication based on API Key, supporting the parsing of the API Key from HTTP request URL parameters or request headers, while also verifying whether the API Key has permission to access the resource.

## Runtime Properties
Plugin Execution Phase: \`Authentication Phase\`
Plugin Execution Priority: \`310\`

## Configuration Fields
**Note:**
- Authentication and authorization configurations cannot coexist within a single rule.
- For requests that are authenticated, a header field \`X-Mse-Consumer\` will be added to identify the caller's name.

### Authentication Configuration
| Name          | Data Type        | Requirements                                    | Default Value | Description                                                                                                                                                                            |
| ------------- | ---------------- | ----------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`global_auth\` | bool             | Optional (**Instance-Level Configuration Only**) | -             | Can only be configured at the instance level; if set to true, the authentication mechanism takes effect globally; if set to false, it only applies to the configured hostnames and routes. If not configured, it will only take effect globally when no hostname and route configurations are present (to maintain compatibility with older user habits). |
| \`consumers\`   | array of object  | Required                                        | -             | Configures the service callers for request authentication.                                                                                                                                  |
| \`keys\`        | array of string  | Required                                        | -             | Source field names for the API Key, which can be URL parameters or HTTP request header names.                                                                                           |
| \`in_query\`    | bool             | At least one of \`in_query\` and \`in_header\` must be true | true          | When configured as true, the gateway will attempt to parse the API Key from URL parameters.                                                                                             |
| \`in_header\`   | bool             | At least one of \`in_query\` and \`in_header\` must be true | true          | When configured as true, the gateway will attempt to parse the API Key from HTTP request headers.                                                                                      |

The configuration field descriptions for each item in \`consumers\` are as follows:
| Name         | Data Type | Requirements | Default Value | Description                   |
| ------------ | --------- | ------------ | ------------- | ------------------------------ |
| \`credential\` | string    | Required     | -             | Configures the access credential for this consumer. |
| \`name\`       | string    | Required     | -             | Configures the name for this consumer.     |

### Authorization Configuration (Optional)
| Name        | Data Type        | Requirements                                    | Default Value | Description                                                                                                                                                           |
| ----------- | ---------------- | ----------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`allow\`     | array of string  | Optional (**Non-Instance Level Configuration**) | -             | Can only be configured on fine-grained rules such as routes or hostnames; specifies the allowed consumers for matching requests, allowing for fine-grained permission control. |

## Configuration Example
### Global Configuration for Authentication and Granular Route Authorization
The following configuration will enable Key Auth authentication and authorization for specific routes or hostnames in the gateway. The \`credential\` field must not repeat.

At the instance level, do the following plugin configuration:
\`\`\`yaml
global_auth: false
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
- x-api-key
\`\`\`

For routes route-a and route-b, do the following configuration:
\`\`\`yaml
allow:
- consumer1
\`\`\`

For the hostnames *.example.com and test.com, do the following configuration:
\`\`\`yaml
allow:
- consumer2
\`\`\`

**Note:**
The routes route-a and route-b specified in this example refer to the route names filled in when creating the gateway routes. When matched with these two routes, requests from the caller named consumer1 will be allowed while others will be denied.

The specified hostnames *.example.com and test.com are used to match the request's domain name. When a domain name is matched, callers named consumer2 will be allowed while others will be denied.

Based on this configuration, the following requests will be allowed:

Assuming the following request matches route-a:
**Setting API Key in URL Parameters**
\`\`\`bash
curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5
\`\`\`

**Setting API Key in HTTP Request Headers**
\`\`\`bash
curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'
\`\`\`

After successful authentication and authorization, the request's header will have an added \`X-Mse-Consumer\` field with the value \`consumer1\`, to identify the name of the caller.

The following requests will be denied access:
**Request without an API Key returns 401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`

**Request with an invalid API Key returns 401**
\`\`\`bash
curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5
\`\`\`

**Caller matched with provided API Key has no access rights, returns 403**
\`\`\`bash
# consumer2 is not in the allow list of route-a
curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

### Enabling at the Instance Level
The following configuration will enable Basic Auth authentication at the instance level for the gateway, requiring all requests to pass authentication before accessing.

\`\`\`yaml
global_auth: true
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
- x-api-key
\`\`\`

## Related Error Codes
| HTTP Status Code | Error Message                                              | Reason Explanation                |
| ---------------- | ---------------------------------------------------------- | --------------------------------- |
| 401              | Request denied by Key Auth check. Multiple API keys found in request | Multiple API Keys provided in the request.      |
| 401              | Request denied by Key Auth check. No API key found in request | API Key not provided in the request.      |
| 401              | Request denied by Key Auth check. Invalid API key         | The current API Key is not authorized for access. |
| 403              | Request denied by Key Auth check. Unauthorized consumer   | The caller does not have access permissions.  |
`},o=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"authentication-configuration",text:"Authentication Configuration"},{depth:3,slug:"authorization-configuration-optional",text:"Authorization Configuration (Optional)"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"global-configuration-for-authentication-and-granular-route-authorization",text:"Global Configuration for Authentication and Granular Route Authorization"},{depth:3,slug:"enabling-at-the-instance-level",text:"Enabling at the Instance Level"},{depth:2,slug:"related-error-codes",text:"Related Error Codes"}]},t=l((g,b,v)=>{const{layout:E,...n}=s;return n.file=a,n.url=i,u`${p()}${h(e)}`})});export{t as Content,m as __tla,o as compiledContent,t as default,a as file,s as frontmatter,d as getHeadings,r as rawContent,i as url};
