import{c as p,__tla as l}from"./astro-component.DtWAgCJT.js";import{r as u,m as c,u as y,__tla as _}from"./constant.D-aE-7Mt.js";import{__tla as f}from"./astro/assets-service.BMxLt3pn.js";let t,d,i,r,s,o,a,m=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return _}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="functional-description">Functional Description</h2>
<p>The <code dir="auto">key-rate-limit</code> plugin implements rate limiting based on specific key values, which can originate from URL parameters or HTTP request headers.</p>
<h2 id="running-properties">Running Properties</h2>
<p>Plugin execution phase: <code dir="auto">default phase</code>
Plugin execution priority: <code dir="auto">10</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>Optional, choose one from <code dir="auto">limit_by_header</code>, <code dir="auto">limit_by_param</code></td><td>-</td><td>Configuration for the source of the rate limiting key value (HTTP request header name)</td></tr><tr><td>limit_by_param</td><td>string</td><td>Optional, choose one from <code dir="auto">limit_by_header</code>, <code dir="auto">limit_by_param</code></td><td>-</td><td>Configuration for the source of the rate limiting key value (URL parameter name)</td></tr><tr><td>limit_keys</td><td>array of object</td><td>Required</td><td>-</td><td>Configuration for the rate limiting frequency based on matched key values</td></tr></tbody></table>
<p>Explanation of each configuration field in <code dir="auto">limit_keys</code></p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>Required</td><td>-</td><td>Matched key value</td></tr><tr><td>query_per_second</td><td>number</td><td>Optional, choose one from <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code></td><td>-</td><td>Allowed number of requests per second</td></tr><tr><td>query_per_minute</td><td>number</td><td>Optional, choose one from <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code></td><td>-</td><td>Allowed number of requests per minute</td></tr><tr><td>query_per_hour</td><td>number</td><td>Optional, choose one from <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code></td><td>-</td><td>Allowed number of requests per hour</td></tr><tr><td>query_per_day</td><td>number</td><td>Optional, choose one from <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code></td><td>-</td><td>Allowed number of requests per day</td></tr></tbody></table>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="identify-request-parameter-apikey-for-differentiated-rate-limiting">Identify request parameter apikey for differentiated rate limiting</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_param: apikey\x7Flimit_keys:\x7F- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F  query_per_second: 10\x7F- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F  query_per_minute: 100"><div></div></button></div></figure></div>
<h3 id="identify-request-header-x-ca-key-for-differentiated-rate-limiting">Identify request header x-ca-key for differentiated rate limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_header: x-ca-key\x7Flimit_keys:\x7F- key: 102234\x7F  query_per_second: 10\x7F- key: 308239\x7F  query_per_hour: 10"><div></div></button></div></figure></div>`,r={title:"Key-based Local Rate Limiting",keywords:["higress","key rate limit"],description:"Configuration reference for Key local rate limiting plugin"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/key-rate-limit.md",a=void 0,o=function(){return"\n## Functional Description\nThe `key-rate-limit` plugin implements rate limiting based on specific key values, which can originate from URL parameters or HTTP request headers.\n\n## Running Properties\nPlugin execution phase: `default phase`\nPlugin execution priority: `10`\n\n## Configuration Fields\n\n| Name            | Data Type       | Required                                                      | Default Value | Description                                                                            |\n|-----------------|-----------------|---------------------------------------------------------------|---------------|----------------------------------------------------------------------------------------|\n| limit_by_header | string          | Optional, choose one from `limit_by_header`, `limit_by_param` | -             | Configuration for the source of the rate limiting key value (HTTP request header name) |\n| limit_by_param  | string          | Optional, choose one from `limit_by_header`, `limit_by_param` | -             | Configuration for the source of the rate limiting key value (URL parameter name)       |\n| limit_keys      | array of object | Required                                                      | -             | Configuration for the rate limiting frequency based on matched key values              |\n\nExplanation of each configuration field in `limit_keys`\n\n| Name             | Data Type | Required                                                                                            | Default Value | Description                           |\n|------------------|-----------|-----------------------------------------------------------------------------------------------------|---------------|---------------------------------------|\n| key              | string    | Required                                                                                            | -             | Matched key value                     |\n| query_per_second | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per second |\n| query_per_minute | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per minute |\n| query_per_hour   | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per hour   |\n| query_per_day    | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per day    |\n\n## Configuration Examples\n### Identify request parameter apikey for differentiated rate limiting\n```yaml\nlimit_by_param: apikey\nlimit_keys:\n- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n  query_per_second: 10\n- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n  query_per_minute: 100\n```\n\n### Identify request header x-ca-key for differentiated rate limiting\n```yaml\nlimit_by_header: x-ca-key\nlimit_keys:\n- key: 102234\n  query_per_second: 10\n- key: 308239\n  query_per_hour: 10\n```\n"},d=function(){return e},s=function(){return[{depth:2,slug:"functional-description",text:"Functional Description"},{depth:2,slug:"running-properties",text:"Running Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"identify-request-parameter-apikey-for-differentiated-rate-limiting",text:"Identify request parameter apikey for differentiated rate limiting"},{depth:3,slug:"identify-request-header-x-ca-key-for-differentiated-rate-limiting",text:"Identify request header x-ca-key for differentiated rate limiting"}]},t=p((h,q,g)=>{const{layout:b,...n}=r;return n.file=i,n.url=a,u`${c()}${y(e)}`})});export{t as Content,m as __tla,d as compiledContent,t as default,i as file,r as frontmatter,s as getHeadings,o as rawContent,a as url};
