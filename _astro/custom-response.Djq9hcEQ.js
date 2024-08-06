import{c,__tla as p}from"./astro-component.DeDyO-JF.js";import{r,m as u,u as h,__tla as m}from"./constant.Bu2T7soS.js";import{__tla as v}from"./astro/assets-service.B3vdYoe2.js";let s,i,t,a,d,l,n,y=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let e;e=`<h2 id="description">Description</h2>
<p><code dir="auto">custom-response</code> plugin implements a function of sending custom responses, including custom HTTP response status codes, HTTP response headers and HTTP response body, which can be used in the scenarios of response mocking and sending a custom response for specific status codes, such as customizing the response for rate-limited requests.</p>
<h2 id="configuration-fields">Configuration Fields</h2>








































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>status_code</td><td>number</td><td>Optional</td><td>200</td><td>Custom HTTP response status code</td></tr><tr><td>headers</td><td>array of string</td><td>Optional</td><td>-</td><td>Custom HTTP response header. Key and value shall be separated using <code dir="auto">=</code>.</td></tr><tr><td>body</td><td>string</td><td>Optional</td><td>-</td><td>Custom HTTP response body</td></tr><tr><td>enable_on_status</td><td>array of number</td><td>Optional</td><td>-</td><td>The original response status code to match. Generate the custom response only the actual status code matches the configuration. Ignore the status code match if left unconfigured.</td></tr></tbody></table>
<h2 id="configuration-samples">Configuration Samples</h2>
<h3 id="mock-responses">Mock Responses</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type=application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Hello=World</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">world</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="status_code: 200\x7Fheaders:\x7F- Content-Type=application/json\x7F- Hello=World\x7Fbody: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;world\\&#x22;}&#x22;"><div></div></button></div></figure></div>
<p>According to the configuration above, all the requests will get the following custom response:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type: application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Hello: World</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 17</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{"hello":"world"}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 200 OK\x7FContent-Type: application/json\x7FHello: World\x7FContent-Length: 17\x7F\x7F{&#x22;hello&#x22;:&#x22;world&#x22;}"><div></div></button></div></figure></div>
<h3 id="send-a-custom-response-when-rate-limited">Send a Custom Response when Rate-Limited</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">enable_on_status</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">429</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">302</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Location=https://example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="enable_on_status:\x7F- 429\x7Fstatus_code: 302\x7Fheaders:\x7F- Location=https://example.com"><div></div></button></div></figure></div>
<p>When rate-limited, normally gateway will return a status code of <code dir="auto">429</code> . Now, rate-limited requests will get the following custom response:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 302 Found</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Location: https://example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 302 Found\x7FLocation: https://example.com"><div></div></button></div></figure></div>
<p>So based on the 302 redirecting mechanism provided by browsers, this can redirect rate-limited users to other pages, for example, a static page hosted on CDN.</p>
<p>If you\u2019d like to send other responses when rate-limited, please add other fields into the configuration, referring to the Mock Responses scenario.</p>
<h3 id="only-enabled-for-specific-routes-or-domains">Only Enabled for Specific Routes or Domains</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use _rules_ field for fine-grained rule configurations</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Match by route name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">world</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Match by domain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enable_on_status</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">429</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type=application/json</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">errmsg</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">rate limited</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Use _rules_ field for fine-grained rule configurations\x7F_rules_:\x7F# Rule 1: Match by route name\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F  body: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;world\\&#x22;}&#x22;\x7F# Rule 2: Match by domain\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  enable_on_status:\x7F  - 429\x7F  status_code: 200\x7F  headers:\x7F  - Content-Type=application/json\x7F  body: &#x22;{\\&#x22;errmsg\\&#x22;: \\&#x22;rate limited\\&#x22;}&#x22;"><div></div></button></div></figure></div>
<p>In the rule sample of <code dir="auto">_match_route_</code>, <code dir="auto">route-a</code> and <code dir="auto">route-b</code> are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of <code dir="auto">_match_domain_</code>, <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the <code dir="auto">_rules_</code> field, The first matched rule will be applied. All remained will be ignored.</p>`,a={title:"Custom response",keywords:["higress","custom response"],description:"Custom response plugin implements a function of sending custom responses."},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/custom-response.md",n=void 0,l=function(){return`
## Description
\`custom-response\` plugin implements a function of sending custom responses, including custom HTTP response status codes, HTTP response headers and HTTP response body, which can be used in the scenarios of response mocking and sending a custom response for specific status codes, such as customizing the response for rate-limited requests.

## Configuration Fields

| Name | Type | Requirement |  Default Value | Description |
| -------- | -------- | -------- | -------- | -------- |
|  status_code    |  number     |  Optional      |   200  |  Custom HTTP response status code   |
|  headers     |  array of string      |  Optional     |   -  |  Custom HTTP response header. Key and value shall be separated using \`=\`.   |
|  body      |  string    |  Optional     |   -   |  Custom HTTP response body  |
|  enable_on_status   |  array of number    |   Optional     |  -  | The original response status code to match. Generate the custom response only the actual status code matches the configuration. Ignore the status code match if left unconfigured.   |

## Configuration Samples

### Mock Responses

\`\`\`yaml
status_code: 200
headers:
- Content-Type=application/json
- Hello=World
body: "{\\"hello\\":\\"world\\"}"

\`\`\`

According to the configuration above, all the requests will get the following custom response:

\`\`\`text
HTTP/1.1 200 OK
Content-Type: application/json
Hello: World
Content-Length: 17

{"hello":"world"}
\`\`\`

### Send a Custom Response when Rate-Limited

\`\`\`yaml
enable_on_status: 
- 429
status_code: 302
headers:
- Location=https://example.com
\`\`\`

When rate-limited, normally gateway will return a status code of \`429\` . Now, rate-limited requests will get the following custom response:

\`\`\`text
HTTP/1.1 302 Found
Location: https://example.com
\`\`\`

So based on the 302 redirecting mechanism provided by browsers, this can redirect rate-limited users to other pages, for example, a static page hosted on CDN.

If you'd like to send other responses when rate-limited, please add other fields into the configuration, referring to the Mock Responses scenario.

### Only Enabled for Specific Routes or Domains
\`\`\`yaml
# Use _rules_ field for fine-grained rule configurations 
_rules_:
# Rule 1: Match by route name
- _match_route_:
  - route-a
  - route-b
  body: "{\\"hello\\":\\"world\\"}"
# Rule 2: Match by domain
- _match_domain_:
  - "*.example.com"
  - test.com
  enable_on_status: 
  - 429
  status_code: 200
  headers:
  - Content-Type=application/json
  body: "{\\"errmsg\\": \\"rate limited\\"}"
\`\`\`
In the rule sample of \`_match_route_\`, \`route-a\` and \`route-b\` are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of \`_match_domain_\`, \`*.example.com\` and \`test.com\` are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the \`_rules_\` field, The first matched rule will be applied. All remained will be ignored.
`},i=function(){return e},d=function(){return[{depth:2,slug:"description",text:"Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-samples",text:"Configuration Samples"},{depth:3,slug:"mock-responses",text:"Mock Responses"},{depth:3,slug:"send-a-custom-response-when-rate-limited",text:"Send a Custom Response when Rate-Limited"},{depth:3,slug:"only-enabled-for-specific-routes-or-domains",text:"Only Enabled for Specific Routes or Domains"}]},s=c((f,E,g)=>{const{layout:_,...o}=a;return o.file=t,o.url=n,r`${u()}${h(e)}`})});export{s as Content,y as __tla,i as compiledContent,s as default,t as file,a as frontmatter,d as getHeadings,l as rawContent,n as url};
