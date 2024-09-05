import{c as l,__tla as r}from"./astro-component.cI6d52vQ.js";import{r as p,m as u,u as h,__tla as m}from"./constant.WdiYQGjw.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let t,o,a,s,d,c,n,y=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="features">Features</h2>
<p>The <code dir="auto">key-auth</code> plug-in implements the authentication function based on the API Key, supports parsing the API Key from the URL parameter or request header of the HTTP request, and verifies whether the API Key has permission to access.</p>
<h2 id="configuration-field">Configuration field</h2>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Parameter requirements</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>Required</td><td>-</td><td>Configure the caller of the service to authenticate the request.</td></tr><tr><td><code dir="auto">keys</code></td><td>array of string</td><td>Required</td><td>-</td><td>The name of the source field of the API Key, which can be a URL parameter or an HTTP request header name.</td></tr><tr><td><code dir="auto">in_query</code></td><td>bool</td><td>At least one of <code dir="auto">in_query</code> and <code dir="auto">in_header</code> must be true.</td><td>true</td><td>When configured true, the gateway will try to parse the API Key from the URL parameters.</td></tr><tr><td><code dir="auto">in_header</code></td><td>bool</td><td>The same as above.</td><td>true</td><td>The same as above.</td></tr><tr><td><code dir="auto">_rules_</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Configure the access list of a specific route or domain name for authenticating requests.</td></tr></tbody></table>
<p>The configuration fields of each item in <code dir="auto">consumers</code> are described as follows:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Parameter requirements</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">credential</code></td><td>string</td><td>Required</td><td>-</td><td>Configure the consumer\u2019s access credentials.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Configure the name of the consumer.</td></tr></tbody></table>
<p>The configuration fields of each item in <code dir="auto">_rules_</code> are described as follows:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Parameter requirements</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">_match_route_</code></td><td>array of string</td><td>Optional\uFF0COptionally fill in one of <code dir="auto">_match_route_</code>, <code dir="auto">_match_domain_</code>.</td><td>-</td><td>Configure the route name to match.</td></tr><tr><td><code dir="auto">_match_domain_</code></td><td>array of string</td><td>Optional\uFF0COptionally fill in one of <code dir="auto">_match_route_</code>, <code dir="auto">_match_domain_</code>.</td><td>-</td><td>Configure the domain name to match.</td></tr><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>Required</td><td>-</td><td>For requests that meet the matching conditions, configure the name of the consumer that is allowed to access.</td></tr></tbody></table>
<p><strong>Warning\uFF1A</strong></p>
<ul>
<li>If the <code dir="auto">_rules_</code> field is not configured, authentication will be enabled for all routes of the current gateway instance by default;</li>
<li>For a request that passes authentication, an <code dir="auto">X-Mse-Consumer</code> field will be added to the request header to identify the name of the caller.</li>
</ul>
<h2 id="example-configuration">Example configuration</h2>
<h3 id="enabled-for-specific-routes-or-domains">Enabled for specific routes or domains</h3>
<p>The following configuration will enable Key Auth authentication and authentication for gateway-specific routes or domain names. Note that the <code dir="auto">credential</code> field can not be repeated.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">in_query</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use the _rules_ field for fine-grained rule configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Match by route name to take effect</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Take effect by domain name matching</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F  name: consumer1\x7F- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F  name: consumer2\x7Fkeys:\x7F- apikey\x7Fin_query: true\x7F# Use the _rules_ field for fine-grained rule configuration\x7F_rules_:\x7F# Rule 1: Match by route name to take effect\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F  allow:\x7F  - consumer1\x7F# Rule 2: Take effect by domain name matching\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  allow:\x7F  - consumer2"><div></div></button></div></figure></div>
<p>The <code dir="auto">route-a</code> and <code dir="auto">route-b</code> specified in <code dir="auto">_match_route_</code> in this example are the route names filled in when creating the gateway route. When these two routes are matched, calls whose <code dir="auto">name</code> is <code dir="auto">consumer1</code> will be allowed Access by callers, other callers are not allowed to access;</p>
<p><code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> specified in <code dir="auto">_match_domain_</code> in this example are used to match the domain name of the request. When the domain name matches, the caller whose <code dir="auto">name</code> is <code dir="auto">consumer2</code> will be allowed to access, and other calls access is not allowed.</p>
<h4 id="depending-on-this-configuration-the-following-requests-would-allow-access">Depending on this configuration, the following requests would allow access\uFF1A</h4>
<p>Assume that the following request will match the route-a route:</p>
<p><strong>Set the API Key in the url parameter</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5"><div></div></button></div></figure></div>
<p><strong>Set the API Key in the http request header</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5&#x27;"><div></div></button></div></figure></div>
<p>After the authentication is passed, an <code dir="auto">X-Mse-Consumer</code> field will be added to the header of the request. In this example, its value is <code dir="auto">consumer1</code>, which is used to identify the name of the caller.</p>
<h4 id="the-following-requests-will-deny-access">The following requests will deny access\uFF1A</h4>
<p><strong>The request does not provide an API Key, return 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>The API Key provided by the request is not authorized to access, return 401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5"><div></div></button></div></figure></div>
<p><strong>The caller matched according to the API Key provided in the request has no access rights, return 403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer2 is not in the allow list of route-a</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<h3 id="gateway-instance-level-enabled">Gateway instance level enabled</h3>
<p>The following configuration does not specify the <code dir="auto">_rules_</code> field, so Key Auth authentication will be enabled at the gateway instance level.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">in_query</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F  name: consumer1\x7F- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F  name: consumer2\x7Fkeys:\x7F- apikey\x7Fin_query: true"><div></div></button></div></figure></div>
<h2 id="error-code">Error code</h2>

























<table><thead><tr><th>HTTP status code</th><th>Error information</th><th>Reason</th></tr></thead><tbody><tr><td>401</td><td>No API key found in request.</td><td>API not provided by request Key.</td></tr><tr><td>401</td><td>Request denied by Key Auth check. Invalid API key.</td><td>Current API Key access is not allowed.</td></tr><tr><td>403</td><td>Request denied by Basic Auth check. Unauthorized consumer.</td><td>The requested caller does not have access.</td></tr></tbody></table>`,s={title:"Key Authentication",keywords:["higress","key auth"],description:"API Key authentication implements the authentication function based on the API Key"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/key-auth.md",n=void 0,c=function(){return`## Features
The \`key-auth\` plug-in implements the authentication function based on the API Key, supports parsing the API Key from the URL parameter or request header of the HTTP request, and verifies whether the API Key has permission to access.

## Configuration field

|   Name      | Data Type       |               Parameter requirements                     | Default|     Description                                                                                           |
| ----------- | --------------- | -------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| \`consumers\` | array of object | Required                                                 | -      | Configure the caller of the service to authenticate the request.                                          |
| \`keys\`      | array of string | Required                                                 | -      | The name of the source field of the API Key, which can be a URL parameter or an HTTP request header name. |
| \`in_query\`  | bool            | At least one of \`in_query\` and \`in_header\` must be true. | true   | When configured true, the gateway will try to parse the API Key from the URL parameters.                  |
| \`in_header\` | bool            | The same as above.                                       | true   | The same as above.                                                                                        |
| \`_rules_\`   | array of object | Optional                                                 | -      | Configure the access list of a specific route or domain name for authenticating requests.                 |


The configuration fields of each item in \`consumers\` are described as follows:

| Name         | Data Type | Parameter requirements | Default | Description                                  |
| ------------ | --------- | -----------------------| ------  | -------------------------------------------  |
| \`credential\` | string    | Required               | -       | Configure the consumer's access credentials. |
| \`name\`       | string    | Required               | -       | Configure the name of the consumer.          |

The configuration fields of each item in \`_rules_\` are described as follows:

| Name             | Data Type       | Parameter requirements                                                 | Default| Description                                               |
| ---------------- | --------------- | ---------------------------------------------------------------------  | ------ | -------------------------------------------------- |
| \`_match_route_\`  | array of string | Optional\uFF0COptionally fill in one of \`_match_route_\`, \`_match_domain_\`. | -      | Configure the route name to match.                               |
| \`_match_domain_\` | array of string | Optional\uFF0COptionally fill in one of \`_match_route_\`, \`_match_domain_\`. | -      | Configure the domain name to match.                                  |
| \`allow\`          | array of string | Required                                                               | -      | For requests that meet the matching conditions, configure the name of the consumer that is allowed to access. |

**Warning\uFF1A**
- If the \`_rules_\` field is not configured, authentication will be enabled for all routes of the current gateway instance by default;
- For a request that passes authentication, an \`X-Mse-Consumer\` field will be added to the request header to identify the name of the caller.

## Example configuration

### Enabled for specific routes or domains

The following configuration will enable Key Auth authentication and authentication for gateway-specific routes or domain names. Note that the \`credential\` field can not be repeated.

\`\`\`yaml
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
in_query: true
# Use the _rules_ field for fine-grained rule configuration
_rules_:
# Rule 1: Match by route name to take effect
- _match_route_:
  - route-a
  - route-b
  allow:
  - consumer1
# Rule 2: Take effect by domain name matching
- _match_domain_:
  - "*.example.com"
  - test.com
  allow:
  - consumer2
\`\`\`

The \`route-a\` and \`route-b\` specified in \`_match_route_\` in this example are the route names filled in when creating the gateway route. When these two routes are matched, calls whose \`name\` is \`consumer1\` will be allowed Access by callers, other callers are not allowed to access;

\`*.example.com\` and \`test.com\` specified in \`_match_domain_\` in this example are used to match the domain name of the request. When the domain name matches, the caller whose \`name\` is \`consumer2\` will be allowed to access, and other calls access is not allowed.

#### Depending on this configuration, the following requests would allow access\uFF1A

Assume that the following request will match the route-a route:

**Set the API Key in the url parameter**
\`\`\`bash
curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5
\`\`\`
**Set the API Key in the http request header**
\`\`\`bash
curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'
\`\`\`

After the authentication is passed, an \`X-Mse-Consumer\` field will be added to the header of the request. In this example, its value is \`consumer1\`, which is used to identify the name of the caller.

#### The following requests will deny access\uFF1A

**The request does not provide an API Key, return 401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`
**The API Key provided by the request is not authorized to access, return 401**
\`\`\`bash
curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5
\`\`\`

**The caller matched according to the API Key provided in the request has no access rights, return 403**
\`\`\`bash
# consumer2 is not in the allow list of route-a
curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

### Gateway instance level enabled

The following configuration does not specify the \`_rules_\` field, so Key Auth authentication will be enabled at the gateway instance level.

\`\`\`yaml
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
in_query: true
\`\`\`

## Error code

| HTTP status code | Error information                                          | Reason                                        |
| ---------------- | ---------------------------------------------------------  | --------------------------------------------  |
| 401              | No API key found in request.                               | API not provided by request Key.              |
| 401              | Request denied by Key Auth check. Invalid API key.         | Current API Key access is not allowed.        |
| 403              | Request denied by Basic Auth check. Unauthorized consumer. | The requested caller does not have access.    |

`},o=function(){return e},d=function(){return[{depth:2,slug:"features",text:"Features"},{depth:2,slug:"configuration-field",text:"Configuration field"},{depth:2,slug:"example-configuration",text:"Example configuration"},{depth:3,slug:"enabled-for-specific-routes-or-domains",text:"Enabled for specific routes or domains"},{depth:4,slug:"depending-on-this-configuration-the-following-requests-would-allow-access",text:"Depending on this configuration, the following requests would allow access\uFF1A"},{depth:4,slug:"the-following-requests-will-deny-access",text:"The following requests will deny access\uFF1A"},{depth:3,slug:"gateway-instance-level-enabled",text:"Gateway instance level enabled"},{depth:2,slug:"error-code",text:"Error code"}]},t=l((v,b,E)=>{const{layout:g,...i}=s;return i.file=a,i.url=n,p`${u()}${h(e)}`})});export{t as Content,y as __tla,o as compiledContent,t as default,a as file,s as frontmatter,d as getHeadings,c as rawContent,n as url};
