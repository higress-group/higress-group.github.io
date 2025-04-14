import{c,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as u,m as p,u as h,__tla as f}from"./constant.n-J9LWvA.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let t,o,a,s,d,r,i,g=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">basic-auth</code> plugin implements authentication and authorization based on the HTTP Basic Auth standard.</p>
<h2 id="operation-attributes">Operation Attributes</h2>
<p>Plugin execution stage: <code dir="auto">Authentication Phase</code><br>
Plugin execution priority: <code dir="auto">320</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<p><strong>Note:</strong></p>
<ul>
<li>In one rule, authentication configurations and authorization configurations cannot coexist.</li>
<li>For requests that pass authentication, the request header will include an <code dir="auto">X-Mse-Consumer</code> field to identify the caller\u2019s name.</li>
</ul>
<h3 id="authentication-configuration">Authentication Configuration</h3>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>Optional (<strong>instance-level only</strong>)</td><td>-</td><td>Can only be configured at the instance level. If set to true, the authentication mechanism will take effect globally; if set to false, it will only take effect for the configured domains and routes. If not configured, it will only take effect globally when there are no domain and route configurations (compatible with old user habits).</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configures the service callers for request authentication.</td></tr></tbody></table>
<p>Each configuration field in <code dir="auto">consumers</code> is described as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">credential</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the access credentials for this consumer.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Configures the name of this consumer.</td></tr></tbody></table>
<h3 id="authorization-configuration-optional">Authorization Configuration (Optional)</h3>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Required</td><td>-</td><td>Configures the consumer names allowed to access for matching requests.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="global-authentication-and-route-granularity-authorization">Global Authentication and Route Granularity Authorization</h3>
<p>The following configuration will enable Basic Auth authentication and authorization for specific routes or domains of the gateway. Note that the username and password in the credential information are separated by \u201D:\u201D, and the <code dir="auto">credential</code> field cannot be duplicated.</p>
<p>Make the following plugin configuration at the instance level:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'admin:123456'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'guest:abc'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- credential: &#x27;admin:123456&#x27;\x7F  name: consumer1\x7F- credential: &#x27;guest:abc&#x27;\x7F  name: consumer2\x7Fglobal_auth: false"><div></div></button></div></figure></div>
<p>For routes <code dir="auto">route-a</code> and <code dir="auto">route-b</code>, configure as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>For the domains <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code>, configure as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p>If configured in the console, the specified <code dir="auto">route-a</code> and <code dir="auto">route-b</code> refer to the route names filled in when creating the routes in the console. When matching these two routes, callers with the name <code dir="auto">consumer1</code> will be allowed access, while other callers will not.</p>
<p>The specified <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are used to match the request domain. When a match is found, callers with the name <code dir="auto">consumer2</code> will be allowed access, while other callers will not.</p>
<p>Based on this configuration, the following requests may be allowed access:
<strong>Request with specified username and password</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Assuming the following request matches the route-a route</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Using curl's -u parameter to specify</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin:123456</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Or directly specify the Authorization request header with the username and password encoded in base64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Basic YWRtaW46MTIzNDU2'</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u admin:123456  http://xxx.hello.com/test\x7Fcurl -H &#x27;Authorization: Basic YWRtaW46MTIzNDU2&#x27;  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p>After successful authentication, the request header will have an added <code dir="auto">X-Mse-Consumer</code> field, which in this case is <code dir="auto">consumer1</code> to identify the caller\u2019s name.</p>
<p>The following requests will be denied access:
<strong>Request without username and password, returns 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>Request with incorrect username and password, returns 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin:abc</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u admin:abc  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>Caller matched by username and password has no access, returns 403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer2 is not in the allow list for route-a</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">guest:abc</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u guest:abc  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<h2 id="related-error-codes">Related Error Codes</h2>

























<table><thead><tr><th>HTTP Status Code</th><th>Error Message</th><th>Reason Description</th></tr></thead><tbody><tr><td>401</td><td>Request denied by Basic Auth check. No Basic Authentication information found.</td><td>Request did not provide credentials.</td></tr><tr><td>401</td><td>Request denied by Basic Auth check. Invalid username and/or password.</td><td>Request credentials are invalid.</td></tr><tr><td>403</td><td>Request denied by Basic Auth check. Unauthorized consumer.</td><td>The caller making the request does not have access.</td></tr></tbody></table>`,s={title:"Basic Authentication",keywords:["higress","basic auth"],description:"Basic authentication plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/basic-auth.md",i=void 0,r=function(){return`## Function Description
The \`basic-auth\` plugin implements authentication and authorization based on the HTTP Basic Auth standard.

## Operation Attributes
Plugin execution stage: \`Authentication Phase\`  
Plugin execution priority: \`320\`

## Configuration Fields
**Note:**
- In one rule, authentication configurations and authorization configurations cannot coexist.
- For requests that pass authentication, the request header will include an \`X-Mse-Consumer\` field to identify the caller's name.

### Authentication Configuration
| Name          | Data Type        | Requirements                   | Default Value | Description                                                                                                                                                                            |
| ------------- | ---------------- | ------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`global_auth\` | bool             | Optional (**instance-level only**) | -              | Can only be configured at the instance level. If set to true, the authentication mechanism will take effect globally; if set to false, it will only take effect for the configured domains and routes. If not configured, it will only take effect globally when there are no domain and route configurations (compatible with old user habits). |
| \`consumers\`   | array of object  | Required                        | -              | Configures the service callers for request authentication.                                                                                                                                           |

Each configuration field in \`consumers\` is described as follows:
| Name         | Data Type | Requirements | Default Value | Description                     |
| ------------ | --------- | ------------ | ------------- | ------------------------------- |
| \`credential\` | string    | Required     | -             | Configures the access credentials for this consumer. |
| \`name\`       | string    | Required     | -             | Configures the name of this consumer.     |

### Authorization Configuration (Optional)
| Name             | Data Type        | Requirements                                          | Default Value | Description                                               |
| ---------------- | ---------------- | ---------------------------------------------------- | -------------- | -------------------------------------------------------- |
| \`allow\`          | array of string  | Required                                             | -              | Configures the consumer names allowed to access for matching requests. |

## Configuration Example
### Global Authentication and Route Granularity Authorization
The following configuration will enable Basic Auth authentication and authorization for specific routes or domains of the gateway. Note that the username and password in the credential information are separated by ":", and the \`credential\` field cannot be duplicated.

Make the following plugin configuration at the instance level:
\`\`\`yaml
consumers:
- credential: 'admin:123456'
  name: consumer1
- credential: 'guest:abc'
  name: consumer2
global_auth: false
\`\`\`

For routes \`route-a\` and \`route-b\`, configure as follows:
\`\`\`yaml
allow:
- consumer1
\`\`\`

For the domains \`*.example.com\` and \`test.com\`, configure as follows:
\`\`\`yaml
allow:
- consumer2
\`\`\`

If configured in the console, the specified \`route-a\` and \`route-b\` refer to the route names filled in when creating the routes in the console. When matching these two routes, callers with the name \`consumer1\` will be allowed access, while other callers will not.

The specified \`*.example.com\` and \`test.com\` are used to match the request domain. When a match is found, callers with the name \`consumer2\` will be allowed access, while other callers will not.

Based on this configuration, the following requests may be allowed access:
**Request with specified username and password**
\`\`\`bash
# Assuming the following request matches the route-a route
# Using curl's -u parameter to specify
curl -u admin:123456  http://xxx.hello.com/test
# Or directly specify the Authorization request header with the username and password encoded in base64
curl -H 'Authorization: Basic YWRtaW46MTIzNDU2'  http://xxx.hello.com/test
\`\`\`

After successful authentication, the request header will have an added \`X-Mse-Consumer\` field, which in this case is \`consumer1\` to identify the caller's name.

The following requests will be denied access:
**Request without username and password, returns 401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`

**Request with incorrect username and password, returns 401**
\`\`\`bash
curl -u admin:abc  http://xxx.hello.com/test
\`\`\`

**Caller matched by username and password has no access, returns 403**
\`\`\`bash
# consumer2 is not in the allow list for route-a
curl -u guest:abc  http://xxx.hello.com/test
\`\`\`

## Related Error Codes
| HTTP Status Code | Error Message                                                                         | Reason Description               |
| ---------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| 401              | Request denied by Basic Auth check. No Basic Authentication information found.      | Request did not provide credentials.         |
| 401              | Request denied by Basic Auth check. Invalid username and/or password.               | Request credentials are invalid.           |
| 403              | Request denied by Basic Auth check. Unauthorized consumer.                          | The caller making the request does not have access. |
`},o=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"operation-attributes",text:"Operation Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"authentication-configuration",text:"Authentication Configuration"},{depth:3,slug:"authorization-configuration-optional",text:"Authorization Configuration (Optional)"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"global-authentication-and-route-granularity-authorization",text:"Global Authentication and Route Granularity Authorization"},{depth:2,slug:"related-error-codes",text:"Related Error Codes"}]},t=c((y,v,b)=>{const{layout:w,...n}=s;return n.file=a,n.url=i,u`${p()}${h(e)}`})});export{t as Content,g as __tla,o as compiledContent,t as default,a as file,s as frontmatter,d as getHeadings,r as rawContent,i as url};
