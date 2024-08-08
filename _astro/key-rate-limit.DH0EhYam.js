import{c as l,__tla as p}from"./astro-component.DeDyO-JF.js";import{r as c,m as u,u as y,__tla as m}from"./constant.BLb3VGiE.js";import{__tla as _}from"./astro/assets-service.B3vdYoe2.js";let a,d,s,t,r,o,i,h=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let e;e=`<h2 id="description">Description</h2>
<p><code dir="auto">key-rate-limit</code> plugin implements a rate-limiting function based on specific key-values. The key-values may come from URL parameters or HTTP headers.</p>
<h2 id="configuration-fields">Configuration Fields</h2>

































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>Optional. Choose one from following: <code dir="auto">limit_by_header</code>, <code dir="auto">limit_by_param</code>.</td><td>-</td><td>The name of HTTP header used to obtain key-value used in rate-limiting.</td></tr><tr><td>limit_by_param</td><td>string</td><td>Optional. Choose one from following: <code dir="auto">limit_by_header</code>, <code dir="auto">limit_by_param</code>.</td><td>-</td><td>The name of URL parameter used to obtain key-value used in rate-limiting.</td></tr><tr><td>limit_keys</td><td>array of object</td><td>Required</td><td>-</td><td>Rate-limiting thresholds when matching specific key-values</td></tr></tbody></table>
<p>Field descriptions of <code dir="auto">limit_keys</code> items:</p>















































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>Required</td><td>-</td><td>Value to match of the specific key</td></tr><tr><td>query_per_second</td><td>number</td><td>Optional. Choose one from following: <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>.</td><td>-</td><td>Number of requests allowed per second</td></tr><tr><td>query_per_minute</td><td>number</td><td>Optional. Choose one from following: <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>.</td><td>-</td><td>Number of requests allowed per minute</td></tr><tr><td>query_per_hour</td><td>number</td><td>Optional. Choose one from following: <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>.</td><td>-</td><td>Number of requests allowed per hour</td></tr><tr><td>query_per_day</td><td>number</td><td>Optional. Choose one from following: <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>.</td><td>-</td><td>Number of requests allowed per day</td></tr></tbody></table>
<h2 id="configuration-samples">Configuration Samples</h2>
<h3 id="use-query-parameter-apikey-for-rate-limiting">Use query parameter <code dir="auto">apikey</code> for rate-limiting</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_param: apikey\x7Flimit_keys:\x7F- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F  query_per_second: 10\x7F- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F  query_per_minute: 100"><div></div></button></div></figure></div>
<h3 id="use-http-header-parameter-x-ca-key-for-rate-limiting">Use HTTP header parameter <code dir="auto">x-ca-key</code> for rate-limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_header: x-ca-key\x7Flimit_keys:\x7F- key: 102234\x7F  query_per_second: 10\x7F- key: 308239\x7F  query_per_hour: 10"><div></div></button></div></figure></div>
<h3 id="enable-rate-limiting-for-specific-routes-or-domains">Enable rate-limiting for specific routes or domains</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Use _rules_ field for fine-grained rule configurations</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">_rules_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 1: Match by route name</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_route_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-a</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">route-b</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Rule 2: Match by domain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">_match_domain_</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Use _rules_ field for fine-grained rule configurations\x7F_rules_:\x7F# Rule 1: Match by route name\x7F- _match_route_:\x7F  - route-a\x7F  - route-b\x7F  limit_by_header: x-ca-key\x7F  limit_keys:\x7F  - key: 102234\x7F    query_per_second: 10\x7F# Rule 2: Match by domain\x7F- _match_domain_:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  limit_by_header: x-ca-key\x7F  limit_keys:\x7F  - key: 102234\x7F    query_per_second: 100"><div></div></button></div></figure></div>
<p>In the rule sample of <code dir="auto">_match_route_</code>, <code dir="auto">route-a</code> and <code dir="auto">route-b</code> are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of <code dir="auto">_match_domain_</code>, <code dir="auto">*.example.com</code> and <code dir="auto">test.com</code> are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the <code dir="auto">_rules_</code> field, The first matched rule will be applied. All remained will be ignored.</p>`,t={title:"Rate limiting based on Key",keywords:["higress","rate limit"],description:"Key rate limiting plug-in implements a rate-limiting function based on specific key-values. The key-values may come from URL parameters or HTTP headers."},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/key-rate-limit.md",i=void 0,o=function(){return'\n## Description\n`key-rate-limit` plugin implements a rate-limiting function based on specific key-values. The key-values may come from URL parameters or HTTP headers.\n\n## Configuration Fields\n\n| Name | Type | Requirement |  Default Value | Description |\n| -------- | -------- | -------- | -------- | -------- |\n|  limit_by_header     |  string     | Optional. Choose one from following: `limit_by_header`, `limit_by_param`. |   -  |  The name of HTTP header used to obtain key-value used in rate-limiting. |\n|  limit_by_param     |  string     | Optional. Choose one from following: `limit_by_header`, `limit_by_param`. |   -  |  The name of URL parameter used to obtain key-value used in rate-limiting.   |\n|  limit_keys     |  array of object     | Required     |   -  |  Rate-limiting thresholds when matching specific key-values |\n\nField descriptions of `limit_keys` items:\n\n| Name | Type | Requirement |  Default Value | Description |\n| -------- | -------- | -------- | -------- | -------- |\n|  key     |  string     | Required     |   -  |  Value to match of the specific key |\n|  query_per_second     |  number     | Optional. Choose one from following: `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`. |   -  |  Number of requests allowed per second |\n|  query_per_minute     |  number     | Optional. Choose one from following: `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`. |   -  |  Number of requests allowed per minute |\n|  query_per_hour     |  number     | Optional. Choose one from following: `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`. |   -  |  Number of requests allowed per hour |\n|  query_per_day     |  number     | Optional. Choose one from following: `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`. |   -  |  Number of requests allowed per day |\n\n## Configuration Samples\n\n### Use query parameter `apikey` for rate-limiting\n```yaml\nlimit_by_param: apikey\nlimit_keys:\n- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n  query_per_second: 10\n- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n  query_per_minute: 100\n```\n\n### Use HTTP header parameter `x-ca-key` for rate-limiting\n```yaml\nlimit_by_header: x-ca-key\nlimit_keys:\n- key: 102234\n  query_per_second: 10\n- key: 308239\n  query_per_hour: 10\n```\n\n### Enable rate-limiting for specific routes or domains\n```yaml\n# Use _rules_ field for fine-grained rule configurations\n_rules_:\n# Rule 1: Match by route name\n- _match_route_:\n  - route-a\n  - route-b\n  limit_by_header: x-ca-key\n  limit_keys:\n  - key: 102234\n    query_per_second: 10\n# Rule 2: Match by domain\n- _match_domain_:\n  - "*.example.com"\n  - test.com\n  limit_by_header: x-ca-key\n  limit_keys:\n  - key: 102234\n    query_per_second: 100\n```\nIn the rule sample of `_match_route_`, `route-a` and `route-b` are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.\nIn the rule sample of `_match_domain_`, `*.example.com` and `test.com` are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.\nAll rules shall be checked following the order of items in the `_rules_` field, The first matched rule will be applied. All remained will be ignored.\n'},d=function(){return e},r=function(){return[{depth:2,slug:"description",text:"Description"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-samples",text:"Configuration Samples"},{depth:3,slug:"use-query-parameter-apikey-for-rate-limiting",text:"Use query parameter apikey for rate-limiting"},{depth:3,slug:"use-http-header-parameter-x-ca-key-for-rate-limiting",text:"Use HTTP header parameter x-ca-key for rate-limiting"},{depth:3,slug:"enable-rate-limiting-for-specific-routes-or-domains",text:"Enable rate-limiting for specific routes or domains"}]},a=l((f,E,v)=>{const{layout:b,...n}=t;return n.file=s,n.url=i,c`${u()}${y(e)}`})});export{a as Content,h as __tla,d as compiledContent,a as default,s as file,t as frontmatter,r as getHeadings,o as rawContent,i as url};
