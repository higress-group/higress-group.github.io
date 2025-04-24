import{c,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as p,m as u,u as b,__tla as g}from"./constant.C3qSKoyT.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let s,l,t,a,n,d,o,f=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">request-block</code> plugin implements HTTP request blocking based on features such as URL, request headers, etc. It can be used to protect certain site resources from being exposed to the outside.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin Execution Stage: <code dir="auto">Authentication Stage</code></p>
<p>Plugin Execution Priority: <code dir="auto">320</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>




































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>block_urls</td><td>array of string</td><td>Optional, at least one of <code dir="auto">block_urls</code>, <code dir="auto">block_exact_urls</code>, <code dir="auto">block_regexp_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code> must be filled</td><td>-</td><td>Configure strings for matching URLs to be blocked</td></tr><tr><td>block_exact_urls</td><td>array of string</td><td>Optional, at least one of <code dir="auto">block_urls</code>, <code dir="auto">block_exact_urls</code>, <code dir="auto">block_regexp_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code> must be filled</td><td>-</td><td>Configure strings for exactly matching URLs to be blocked</td></tr><tr><td>block_regexp_urls</td><td>array of string</td><td>Optional, at least one of <code dir="auto">block_urls</code>, <code dir="auto">block_exact_urls</code>, <code dir="auto">block_regexp_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code> must be filled</td><td>-</td><td>Configure regular expressions for matching URLs to be blocked</td></tr><tr><td>block_headers</td><td>array of string</td><td>Optional, at least one of <code dir="auto">block_urls</code>, <code dir="auto">block_exact_urls</code>, <code dir="auto">block_regexp_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code> must be filled</td><td>-</td><td>Configure strings for matching request headers to be blocked</td></tr><tr><td>block_bodies</td><td>array of string</td><td>Optional, at least one of <code dir="auto">block_urls</code>, <code dir="auto">block_exact_urls</code>, <code dir="auto">block_regexp_urls</code>, <code dir="auto">block_headers</code>, <code dir="auto">block_bodies</code> must be filled</td><td>-</td><td>Configure strings for matching request bodies to be blocked</td></tr><tr><td>blocked_code</td><td>number</td><td>Optional</td><td>403</td><td>Configure the HTTP status code to return when a request is blocked</td></tr><tr><td>blocked_message</td><td>string</td><td>Optional</td><td>-</td><td>Configure the HTTP response body to return when a request is blocked</td></tr><tr><td>case_sensitive</td><td>bool</td><td>Optional</td><td>true</td><td>Configure whether case sensitivity is considered during matching, default is case-sensitive</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="blocking-request-url-paths">Blocking Request URL Paths</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_urls:\x7F- swagger.html\x7F- foo=bar\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>Based on this configuration, the following requests will be denied access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar\x7Fcurl http://exmaple.com/Swagger.html"><div></div></button></div></figure></div>
<h3 id="block-requests-with-exact-url-path-matches">Block requests with exact URL path matches</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_exact_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">/swagger.html?foo=bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_exact_urls:\x7F- /swagger.html?foo=bar\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>Based on this configuration, the following request will be blocked:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/Swagger.html?foo=Bar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://exmaple.com/Swagger.html?foo=Bar"><div></div></button></div></figure></div>
<h3 id="block-requests-with-url-path-regex-matches">Block requests with URL path regex matches</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_exact_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">.*swagger.*</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_exact_urls:\x7F- .*swagger.*\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>Based on this configuration, the following request will be blocked:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/Swagger.html?foo=Bar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://exmaple.com/Swagger.html?foo=Bar"><div></div></button></div></figure></div>
<h3 id="blocking-request-headers">Blocking Request Headers</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_headers:\x7F- example-key\x7F- example-value"><div></div></button></div></figure></div>
<p>Based on this configuration, the following requests will be denied access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'example-key: 123'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'my-header: example-value'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -H &#x27;example-key: 123&#x27;\x7Fcurl http://exmaple.com -H &#x27;my-header: example-value&#x27;"><div></div></button></div></figure></div>
<h3 id="blocking-request-bodies">Blocking Request Bodies</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_bodies:\x7F- &#x22;hello world&#x22;\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>Based on this configuration, the following requests will be denied access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Hello World'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'hello world'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -d &#x27;Hello World&#x27;\x7Fcurl http://exmaple.com -d &#x27;hello world&#x27;"><div></div></button></div></figure></div>
<h2 id="request-body-size-limit">Request Body Size Limit</h2>
<p>When <code dir="auto">block_bodies</code> is configured, only request bodies smaller than 32 MB are supported for matching. If the request body exceeds this limit and there are no matching <code dir="auto">block_urls</code> or <code dir="auto">block_headers</code>, the blocking operation will not be executed for that request.</p>
<p>When <code dir="auto">block_bodies</code> is configured and the request body exceeds the global configuration DownstreamConnectionBufferLimits, it will return <code dir="auto">413 Payload Too Large</code>.</p>`,a={title:"Request Blocking",keywords:["higress","request block"],description:"Request blocking plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/request-block.md",o=void 0,d=function(){return"## Function Description\nThe `request-block` plugin implements HTTP request blocking based on features such as URL, request headers, etc. It can be used to protect certain site resources from being exposed to the outside.\n\n## Running Attributes\nPlugin Execution Stage: `Authentication Stage`\n\nPlugin Execution Priority: `320`\n\n## Configuration Fields\n| Name              | Data Type       | Filling Requirement                                                                                                             | Default Value | Description                                                                                 |\n| ----------------- | --------------- | -------------------------------------------------------------------------------------------------------------------             | ------------- | ------------------------------------------------                                            |\n| block_urls        | array of string | Optional, at least one of `block_urls`, `block_exact_urls`, `block_regexp_urls`, `block_headers`, `block_bodies` must be filled | -             | Configure strings for matching URLs to be blocked                                           |\n| block_exact_urls  | array of string | Optional, at least one of `block_urls`, `block_exact_urls`, `block_regexp_urls`, `block_headers`, `block_bodies` must be filled | -             | Configure strings for exactly matching URLs to be blocked                                   |\n| block_regexp_urls | array of string | Optional, at least one of `block_urls`, `block_exact_urls`, `block_regexp_urls`, `block_headers`, `block_bodies` must be filled | -             | Configure regular expressions for matching URLs to be blocked                               |\n| block_headers     | array of string | Optional, at least one of `block_urls`, `block_exact_urls`, `block_regexp_urls`, `block_headers`, `block_bodies` must be filled | -             | Configure strings for matching request headers to be blocked                                |\n| block_bodies      | array of string | Optional, at least one of `block_urls`, `block_exact_urls`, `block_regexp_urls`, `block_headers`, `block_bodies` must be filled | -             | Configure strings for matching request bodies to be blocked                                 |\n| blocked_code      | number          | Optional                                                                                                                        | 403           | Configure the HTTP status code to return when a request is blocked                          |\n| blocked_message   | string          | Optional                                                                                                                        | -             | Configure the HTTP response body to return when a request is blocked                        |\n| case_sensitive    | bool            | Optional                                                                                                                        | true          | Configure whether case sensitivity is considered during matching, default is case-sensitive |\n\n## Configuration Example\n### Blocking Request URL Paths\n```yaml\nblock_urls:\n- swagger.html\n- foo=bar\ncase_sensitive: false\n```\n\nBased on this configuration, the following requests will be denied access:\n```bash\ncurl http://example.com?foo=Bar\ncurl http://exmaple.com/Swagger.html\n```\n\n### Block requests with exact URL path matches\n\n```yaml\nblock_exact_urls:\n- /swagger.html?foo=bar\ncase_sensitive: false\n```\n\nBased on this configuration, the following request will be blocked:\n\n```bash\ncurl http://exmaple.com/Swagger.html?foo=Bar\n```\n\n### Block requests with URL path regex matches\n\n```yaml\nblock_exact_urls:\n- .*swagger.*\ncase_sensitive: false\n```\n\nBased on this configuration, the following request will be blocked:\n\n```bash\ncurl http://exmaple.com/Swagger.html?foo=Bar\n```\n\n### Blocking Request Headers\n```yaml\nblock_headers:\n- example-key\n- example-value\n```\n\nBased on this configuration, the following requests will be denied access:\n```bash\ncurl http://example.com -H 'example-key: 123'\ncurl http://exmaple.com -H 'my-header: example-value'\n```\n\n### Blocking Request Bodies\n```yaml\nblock_bodies:\n- \"hello world\"\ncase_sensitive: false\n```\n\nBased on this configuration, the following requests will be denied access:\n```bash\ncurl http://example.com -d 'Hello World'\ncurl http://exmaple.com -d 'hello world'\n```\n\n## Request Body Size Limit\nWhen `block_bodies` is configured, only request bodies smaller than 32 MB are supported for matching. If the request body exceeds this limit and there are no matching `block_urls` or `block_headers`, the blocking operation will not be executed for that request.\n\nWhen `block_bodies` is configured and the request body exceeds the global configuration DownstreamConnectionBufferLimits, it will return `413 Payload Too Large`.\n"},l=function(){return e},n=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"blocking-request-url-paths",text:"Blocking Request URL Paths"},{depth:3,slug:"block-requests-with-exact-url-path-matches",text:"Block requests with exact URL path matches"},{depth:3,slug:"block-requests-with-url-path-regex-matches",text:"Block requests with URL path regex matches"},{depth:3,slug:"blocking-request-headers",text:"Blocking Request Headers"},{depth:3,slug:"blocking-request-bodies",text:"Blocking Request Bodies"},{depth:2,slug:"request-body-size-limit",text:"Request Body Size Limit"}]},s=c((v,m,y)=>{const{layout:x,...i}=a;return i.file=t,i.url=o,p`${u()}${b(e)}`})});export{s as Content,f as __tla,l as compiledContent,s as default,t as file,a as frontmatter,n as getHeadings,d as rawContent,o as url};
