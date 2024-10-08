import{c,__tla as r}from"./astro-component.CwRucF1h.js";import{r as p,m as u,u as h,__tla as b}from"./constant.Bj9KG4Ll.js";import{__tla as m}from"./astro/assets-service.Dd3mQuiC.js";let s,l,a,t,n,d,o,f=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return b}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="description">Description</h2>
<p><code dir="auto">request-block</code> plugin implements a request blocking function based on request characteristics such as URL and request header. It can be used to protect internal resources from unauthorized access.</p>
<h2 id="configuration-fields">Configuration Fields</h2>






















































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>block_urls</td><td>array of string</td><td>Optional. Choose one from following: <code dir="auto">block_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code></td><td>-</td><td>HTTP URLs to be blocked.</td></tr><tr><td>block_headers</td><td>array of string</td><td>Optional. Choose one from following: <code dir="auto">block_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code></td><td>-</td><td>HTTP request headers to be blocked.</td></tr><tr><td>block_bodies</td><td>array of string</td><td>Optional. Choose one from following: <code dir="auto">block_urls</code> ,<code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code></td><td>-</td><td>HTTP request bodies to be blocked.</td></tr><tr><td>blocked_code</td><td>number</td><td>Optional</td><td>403</td><td>HTTP response status code to be sent when corresponding request is blocked.</td></tr><tr><td>blocked_message</td><td>string</td><td>Optional</td><td>-</td><td>HTTP response body to be sent when corresponding request is blocked.</td></tr><tr><td>case_sensitive</td><td>bool</td><td>Optional</td><td>true</td><td>Whether to use case-senstive comparison when matching. Enabled by default.</td></tr></tbody></table>
<h2 id="configuration-samples">Configuration Samples</h2>
<h3 id="block-specific-request-urls">Block Specific Request URLs</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_urls:\x7F- swagger.html\x7F- foo=bar\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>According to the configuration above, following requests will be blocked:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar\x7Fcurl http://exmaple.com/Swagger.html"><div></div></button></div></figure></div>
<h3 id="block-specific-request-headers">Block Specific Request Headers</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_headers:\x7F- example-key\x7F- example-value"><div></div></button></div></figure></div>
<p>According to the configuration above, following requests will be blocked:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'example-key: 123'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'my-header: example-value'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -H &#x27;example-key: 123&#x27;\x7Fcurl http://exmaple.com -H &#x27;my-header: example-value&#x27;"><div></div></button></div></figure></div>
<h3 id="block-specific-request-bodies">Block Specific Request Bodies</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_bodies:\x7F- &#x22;hello world&#x22;\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>According to the configuration above, following requests will be blocked:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Hello World'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'hello world'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -d &#x27;Hello World&#x27;\x7Fcurl http://exmaple.com -d &#x27;hello world&#x27;"><div></div></button></div></figure></div>
<h3 id="only-enable-for-specific-routes-or-domains">Only Enable for Specific Routes or Domains</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use _rules_ field for fine-grained rule configurations</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Match by route name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Match by domain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"swagger.html"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Use _rules_ field for fine-grained rule configurations\x7F_rules_:\x7F# Rule 1: Match by route name\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F  block_bodies:\x7F  - &#x22;hello world&#x22;\x7F# Rule 2: Match by domain\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  block_urls:\x7F  - &#x22;swagger.html&#x22;\x7F  block_bodies:\x7F  - &#x22;hello world&#x22;"><div></div></button></div></figure></div>
<p>In the rule sample of <code dir="auto">_match_route_</code>, <code dir="auto">route-a</code> and <code dir="auto">route-b</code> are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of <code dir="auto">_match_domain_</code>, <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the <code dir="auto">_rules_</code> field, The first matched rule will be applied. All remained will be ignored.</p>
<h2 id="maximum-request-body-size-limitation">Maximum Request Body Size Limitation</h2>
<p>When <code dir="auto">block_bodies</code> is configured, body matching shall only be performed when its size is smaller than 32MB. If not, and no <code dir="auto">block_urls</code> or <code dir="auto">block_headers</code> configuration is matched, the request won\u2019t be blocked.
When <code dir="auto">block_bodies</code> is configured, if the size of request body exceeds the global configuration of DownstreamConnectionBufferLimits, a <code dir="auto">413 Payload Too Large</code> response will be returned.</p>`,t={title:"request blocking",keywords:["higress","request block"],description:"Request blocking plug-in  implements a request blocking function based on request characteristics such as URL and request header. It can be used to protect internal resources from unauthorized access."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/request-block.md",o=void 0,d=function(){return`
## Description
\`request-block\` plugin implements a request blocking function based on request characteristics such as URL and request header. It can be used to protect internal resources from unauthorized access.

## Configuration Fields

| Name | Type | Requirement |  Default Value | Description |
| -------- | -------- | -------- | -------- | -------- |
|  block_urls     |  array of string     | Optional. Choose one from following: \`block_urls\`, \`block_headers\`, \`block_bodies\` |  -  |  HTTP URLs to be blocked. |
|  block_headers     |  array of string     | Optional. Choose one from following: \`block_urls\`, \`block_headers\`, \`block_bodies\` |  -  |  HTTP request headers to be blocked.  |
|  block_bodies     |  array of string     | Optional. Choose one from following: \`block_urls\` ,\`block_headers\`, \`block_bodies\` |  -  |  HTTP request bodies to be blocked.  |
|  blocked_code     |  number     |  Optional     |   403  |  HTTP response status code to be sent when corresponding request is blocked.  |
|  blocked_message     |  string     |  Optional   |   -  |  HTTP response body to be sent when corresponding request is blocked.   |
|  case_sensitive     |  bool     |  Optional     |   true  |  Whether to use case-senstive comparison when matching. Enabled by default.   |

## Configuration Samples

### Block Specific Request URLs
\`\`\`yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
\`\`\`

According to the configuration above, following requests will be blocked:

\`\`\`bash
curl http://example.com?foo=Bar
curl http://exmaple.com/Swagger.html
\`\`\`

### Block Specific Request Headers
\`\`\`yaml
block_headers:
- example-key
- example-value
\`\`\`

According to the configuration above, following requests will be blocked:

\`\`\`bash
curl http://example.com -H 'example-key: 123'
curl http://exmaple.com -H 'my-header: example-value'
\`\`\`

### Block Specific Request Bodies
\`\`\`yaml
block_bodies:
- "hello world"
case_sensitive: false
\`\`\`

According to the configuration above, following requests will be blocked:

\`\`\`bash
curl http://example.com -d 'Hello World'
curl http://exmaple.com -d 'hello world'
\`\`\`

### Only Enable for Specific Routes or Domains
\`\`\`yaml
# Use _rules_ field for fine-grained rule configurations 
_rules_:
# Rule 1: Match by route name
- _match_route_:
  - route-a
  - route-b
  block_bodies: 
  - "hello world"
# Rule 2: Match by domain
- _match_domain_:
  - "*.example.com"
  - test.com
  block_urls: 
  - "swagger.html"
  block_bodies:
  - "hello world"
\`\`\`
In the rule sample of \`_match_route_\`, \`route-a\` and \`route-b\` are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of \`_match_domain_\`, \`*.example.com\` and \`test.com\` are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the \`_rules_\` field, The first matched rule will be applied. All remained will be ignored.

## Maximum Request Body Size Limitation

When \`block_bodies\` is configured, body matching shall only be performed when its size is smaller than 32MB. If not, and no \`block_urls\` or \`block_headers\` configuration is matched, the request won't be blocked.
When \`block_bodies\` is configured, if the size of request body exceeds the global configuration of DownstreamConnectionBufferLimits, a \`\`413 Payload Too Large\`\` response will be returned.
`},l=function(){return e},n=function(){return[{depth:2,slug:"description",text:"Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-samples",text:"Configuration Samples"},{depth:3,slug:"block-specific-request-urls",text:"Block Specific Request URLs"},{depth:3,slug:"block-specific-request-headers",text:"Block Specific Request Headers"},{depth:3,slug:"block-specific-request-bodies",text:"Block Specific Request Bodies"},{depth:3,slug:"only-enable-for-specific-routes-or-domains",text:"Only Enable for Specific Routes or Domains"},{depth:2,slug:"maximum-request-body-size-limitation",text:"Maximum Request Body Size Limitation"}]},s=c((v,E,y)=>{const{layout:g,...i}=t;return i.file=a,i.url=o,p`${u()}${h(e)}`})});export{s as Content,f as __tla,l as compiledContent,s as default,a as file,t as frontmatter,n as getHeadings,d as rawContent,o as url};
