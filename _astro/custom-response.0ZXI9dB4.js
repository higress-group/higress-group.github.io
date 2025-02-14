import{c,__tla as l}from"./astro-component.CXlaF79K.js";import{r as p,m as u,u as h,__tla as g}from"./constant.CMfJiRre.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let s,a,t,o,r,d,n,m=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">custom-response</code> plugin supports the configuration of custom responses, including custom HTTP response status codes, HTTP response headers, and HTTP response bodies. It can be used for Mock responses or for providing custom responses based on specific status codes, such as implementing custom responses when triggering the gateway rate-limiting policy.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code></p>
<p>Plugin Execution Priority: <code dir="auto">910</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>status_code</td><td>number</td><td>Optional</td><td>200</td><td>Custom HTTP response status code</td></tr><tr><td>headers</td><td>array of string</td><td>Optional</td><td>-</td><td>Custom HTTP response headers, keys and values separated by <code dir="auto">=</code></td></tr><tr><td>body</td><td>string</td><td>Optional</td><td>-</td><td>Custom HTTP response body</td></tr><tr><td>enable_on_status</td><td>array of number</td><td>Optional</td><td>-</td><td>Match original status codes to generate custom responses; if not specified, the original status code is not checked</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="mock-response-scenario">Mock Response Scenario</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type=application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Hello=World</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">world</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="status_code: 200\x7Fheaders:\x7F- Content-Type=application/json\x7F- Hello=World\x7Fbody: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;world\\&#x22;}&#x22;"><div></div></button></div></figure></div>
<p>With this configuration, the request will return the following custom response:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type: application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Hello: World</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 17</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{"hello":"world"}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 200 OK\x7FContent-Type: application/json\x7FHello: World\x7FContent-Length: 17\x7F{&#x22;hello&#x22;:&#x22;world&#x22;}"><div></div></button></div></figure></div>
<h3 id="custom-response-on-rate-limiting">Custom Response on Rate Limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">enable_on_status</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">429</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">302</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Location=https://example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="enable_on_status:\x7F- 429\x7Fstatus_code: 302\x7Fheaders:\x7F- Location=https://example.com"><div></div></button></div></figure></div>
<p>When the gateway rate limiting is triggered, it generally returns the <code dir="auto">429</code> status code, and the request will return the following custom response:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 302 Found</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Location: https://example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 302 Found\x7FLocation: https://example.com"><div></div></button></div></figure></div>
<p>This achieves the goal of redirecting users who have been rate-limited to another page based on the browser\u2019s 302 redirect mechanism, which could be a static page on a CDN.</p>
<p>If you wish to return other responses normally when rate limiting is triggered, just refer to the Mock response scenario to configure the relevant fields accordingly.</p>`,o={title:"Custom Response",keywords:["higress","custom response"],description:"Custom response plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/custom-response.md",n=void 0,d=function(){return`## Function Description\r
The \`custom-response\` plugin supports the configuration of custom responses, including custom HTTP response status codes, HTTP response headers, and HTTP response bodies. It can be used for Mock responses or for providing custom responses based on specific status codes, such as implementing custom responses when triggering the gateway rate-limiting policy.\r
\r
## Running Attributes\r
Plugin Execution Phase: \`Authentication Phase\`\r
\r
Plugin Execution Priority: \`910\`\r
\r
## Configuration Fields\r
| Name | Data Type | Requirements | Default Value | Description |\r
| -------- | -------- | -------- | -------- | -------- |\r
|  status_code    |  number     |  Optional      |   200  |  Custom HTTP response status code   |\r
|  headers     |  array of string      |  Optional     |   -  |  Custom HTTP response headers, keys and values separated by \`=\`   |\r
|  body      |  string    |  Optional     |   -   |  Custom HTTP response body  |\r
|  enable_on_status   |  array of number    |   Optional     |  -  | Match original status codes to generate custom responses; if not specified, the original status code is not checked   |\r
\r
## Configuration Example\r
### Mock Response Scenario\r
\`\`\`yaml\r
status_code: 200\r
headers:\r
- Content-Type=application/json\r
- Hello=World\r
body: "{\\"hello\\":\\"world\\"}"\r
\`\`\`\r
With this configuration, the request will return the following custom response:\r
\`\`\`text\r
HTTP/1.1 200 OK\r
Content-Type: application/json\r
Hello: World\r
Content-Length: 17\r
{"hello":"world"}\r
\`\`\`\r
### Custom Response on Rate Limiting\r
\`\`\`yaml\r
enable_on_status:\r
- 429\r
status_code: 302\r
headers:\r
- Location=https://example.com\r
\`\`\`\r
When the gateway rate limiting is triggered, it generally returns the \`429\` status code, and the request will return the following custom response:\r
\`\`\`text\r
HTTP/1.1 302 Found\r
Location: https://example.com\r
\`\`\`\r
This achieves the goal of redirecting users who have been rate-limited to another page based on the browser's 302 redirect mechanism, which could be a static page on a CDN.\r
\r
If you wish to return other responses normally when rate limiting is triggered, just refer to the Mock response scenario to configure the relevant fields accordingly.\r
`},a=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"mock-response-scenario",text:"Mock Response Scenario"},{depth:3,slug:"custom-response-on-rate-limiting",text:"Custom Response on Rate Limiting"}]},s=c((y,f,b)=>{const{layout:x,...i}=o;return i.file=t,i.url=n,p`${u()}${h(e)}`})});export{s as Content,m as __tla,a as compiledContent,s as default,t as file,o as frontmatter,r as getHeadings,d as rawContent,n as url};
