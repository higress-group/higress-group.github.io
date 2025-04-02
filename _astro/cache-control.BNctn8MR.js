import{c as d,__tla as p}from"./astro-component.fC12J6m8.js";import{r as l,m as u,u as h,__tla as m}from"./constant.BdKA6-5g.js";import{__tla as g}from"./astro/assets-service.CogLqxaq.js";let t,o,i,n,r,c,s,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">cache-control</code> plugin implements adding <code dir="auto">Expires</code> and <code dir="auto">Cache-Control</code> headers to the response based on the URL file extensions, making it easier for the browser to cache files with specific extensions, such as <code dir="auto">jpg</code>, <code dir="auto">png</code>, and other image files.</p>
<h2 id="runtime-attributes">Runtime Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Authentication Phase</code><br>
Plugin execution priority: <code dir="auto">420</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>suffix</td><td>string</td><td>Optional, indicates the file extensions to match, such as <code dir="auto">jpg</code>, <code dir="auto">png</code>, etc.<br>If multiple extensions are needed, separate them with <code dir="auto">|</code>, for example <code dir="auto">png|jpg</code>.<br>If not specified, it matches all extensions.</td><td>-</td><td>Configures the request file extensions to match</td></tr><tr><td>expires</td><td>string</td><td>Required, indicates the maximum caching time.<br>When the input string is a number, the unit is seconds; for example, if you want to cache for 1 hour, enter 3600.<br>You can also enter epoch or max<br>, with the same semantics as in nginx.</td><td>-</td><td>Configures the maximum caching time</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<ol>
<li>Cache files with extensions <code dir="auto">jpg</code>, <code dir="auto">png</code>, <code dir="auto">jpeg</code>, with a caching time of one hour</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">suffix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jpg|png|jpeg</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expires</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3600</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="suffix: jpg|png|jpeg\x7Fexpires: 3600"><div></div></button></div></figure></div>
<p>With this configuration, the following requests will have <code dir="auto">Expires</code> and <code dir="auto">Cache-Control</code> fields added to the response headers, with an expiration time of 1 hour later.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/test.png</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/test.jpg</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com/test.png\x7Fcurl http://example.com/test.jpg"><div></div></button></div></figure></div>
<ol start="2">
<li>Cache all files, with a maximum caching time of <code dir="auto">"Thu, 31 Dec 2037 23:55:55 GMT"</code></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">expires</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">max</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="expires: max"><div></div></button></div></figure></div>`,n={title:"Browser Cache Control",keywords:["higress","browser cache control"],description:"Browser cache control plugin configuration reference"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/cache-control.md",s=void 0,c=function(){return'## Function Description\nThe `cache-control` plugin implements adding `Expires` and `Cache-Control` headers to the response based on the URL file extensions, making it easier for the browser to cache files with specific extensions, such as `jpg`, `png`, and other image files.\n\n## Runtime Attributes\nPlugin execution phase: `Authentication Phase`  \nPlugin execution priority: `420`\n\n## Configuration Fields\n| Name      | Data Type   | Requirements                                                                                                | Default Value | Description                       |\n|-----------|-------------|----------------------------------------------------------------------------------------------------------|---------------|-----------------------------------|\n| suffix    | string      | Optional, indicates the file extensions to match, such as `jpg`, `png`, etc.<br/>If multiple extensions are needed, separate them with `\\|`, for example `png\\|jpg`.<br/>If not specified, it matches all extensions. | -             | Configures the request file extensions to match            |\n| expires   | string      | Required, indicates the maximum caching time.<br/>When the input string is a number, the unit is seconds; for example, if you want to cache for 1 hour, enter 3600.<br/>You can also enter epoch or max<br/>, with the same semantics as in nginx. | -             | Configures the maximum caching time                |\n\n## Configuration Example\n1. Cache files with extensions `jpg`, `png`, `jpeg`, with a caching time of one hour\n```yaml\nsuffix: jpg|png|jpeg\nexpires: 3600\n```\nWith this configuration, the following requests will have `Expires` and `Cache-Control` fields added to the response headers, with an expiration time of 1 hour later.\n```bash\ncurl http://example.com/test.png\ncurl http://example.com/test.jpg\n```\n2. Cache all files, with a maximum caching time of `"Thu, 31 Dec 2037 23:55:55 GMT"`\n```yaml\nexpires: max\n```\n'},o=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-attributes",text:"Runtime Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"}]},t=d((x,v,b)=>{const{layout:y,...a}=n;return a.file=i,a.url=s,l`${u()}${h(e)}`})});export{t as Content,f as __tla,o as compiledContent,t as default,i as file,n as frontmatter,r as getHeadings,c as rawContent,s as url};
