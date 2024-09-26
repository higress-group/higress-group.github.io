import{c as d,__tla as l}from"./astro-component.CwRucF1h.js";import{r as u,m as c,u as g,__tla as h}from"./constant.CvItjurb.js";import{__tla as f}from"./astro/assets-service.Dd3mQuiC.js";let t,n,i,o,a,p,r,m=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">geo-ip</code> plugin allows querying geographical location information based on the user\u2019s IP address, and then passes this geographical information to subsequent plugins through request attributes and newly added request headers.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code><br>
Plugin Execution Priority: <code dir="auto">440</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>ip_protocol</td><td>string</td><td>No</td><td>ipv4</td><td>Optional values: 1. ipv4: Only queries geographical location information for ipv4 user requests, passing it to subsequent plugins. Requests from ipv6 users will skip this plugin and be processed by later plugins. 2. ipv6: (To be implemented in the future) Only queries geographical location information for ipv6 users, passing it to subsequent plugins. Requests from ipv4 users will skip this plugin and be processed by later plugins. (Currently skips the plugin; requests are handled by subsequent plugins.)</td></tr><tr><td>ip_source_type</td><td>string</td><td>No</td><td>origin-source</td><td>Optional values: 1. Peer socket IP: <code dir="auto">origin-source</code>; 2. Retrieved via header: <code dir="auto">header</code></td></tr><tr><td>ip_header_name</td><td>string</td><td>No</td><td>x-forwarded-for</td><td>When <code dir="auto">ip_source_type</code> is <code dir="auto">header</code>, specify the custom IP source header.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ipv4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Real-Ip</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_protocol: ipv4\x7Fip_source_type: header\x7Fip_header_name: X-Real-Ip"><div></div></button></div></figure></div>
<h2 id="explanation-for-generating-geocidrtxt">Explanation for Generating geoCidr.txt</h2>
<p>The ip.merge.txt file included in the generateCidr directory is the global IP segment database from the ip2region project on GitHub. The ipRange2Cidr.go program converts IP segments into multiple CIDRs. The converted CIDRs and geographical location information are stored in the /data/geoCidr.txt file. The geo-ip plugin will read the geoCidr.txt file during the configuration stage when Higress starts and parse it into the radixtree data structure in memory for future queries of geographical location information corresponding to user IP addresses. The command to run the conversion program is as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">generateCidr/ipRange2Cidr.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go run generateCidr/ipRange2Cidr.go"><div></div></button></div></figure></div>
<h2 id="usage-of-properties">Usage of Properties</h2>
<p>In the geo-ip plugin, call proxywasm.SetProperty() to set country, city, province, and isp into request attributes so that subsequent plugins can use proxywasm.GetProperty() to obtain the geographical information corresponding to the user\u2019s IP for that request.</p>`,o={title:"IP Geolocation",keywords:["higress","geo ip"],description:"IP Geolocation Plugin Configuration Reference"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-o11y/geo-ip.md",r=void 0,p=function(){return`## Function Description
The \`geo-ip\` plugin allows querying geographical location information based on the user's IP address, and then passes this geographical information to subsequent plugins through request attributes and newly added request headers.

## Runtime Properties
Plugin Execution Phase: \`Authentication Phase\`  
Plugin Execution Priority: \`440\`  

## Configuration Fields
| Name            | Data Type    | Requirement | Default Value      | Description  |
| --------        | -----------  | ----------- | ------------------ | ------------ |
|  ip_protocol    |  string      |  No         |   ipv4             |  Optional values: 1. ipv4: Only queries geographical location information for ipv4 user requests, passing it to subsequent plugins. Requests from ipv6 users will skip this plugin and be processed by later plugins. 2. ipv6: (To be implemented in the future) Only queries geographical location information for ipv6 users, passing it to subsequent plugins. Requests from ipv4 users will skip this plugin and be processed by later plugins. (Currently skips the plugin; requests are handled by subsequent plugins.) |
|  ip_source_type |  string      |  No         |   origin-source    |  Optional values: 1. Peer socket IP: \`origin-source\`; 2. Retrieved via header: \`header\`  |
|  ip_header_name |  string      |  No         |   x-forwarded-for  |  When \`ip_source_type\` is \`header\`, specify the custom IP source header.                      |

## Configuration Example
\`\`\`yaml
ip_protocol: ipv4
ip_source_type: header
ip_header_name: X-Real-Ip
\`\`\` 

## Explanation for Generating geoCidr.txt
The ip.merge.txt file included in the generateCidr directory is the global IP segment database from the ip2region project on GitHub. The ipRange2Cidr.go program converts IP segments into multiple CIDRs. The converted CIDRs and geographical location information are stored in the /data/geoCidr.txt file. The geo-ip plugin will read the geoCidr.txt file during the configuration stage when Higress starts and parse it into the radixtree data structure in memory for future queries of geographical location information corresponding to user IP addresses. The command to run the conversion program is as follows:
\`\`\`bash
go run generateCidr/ipRange2Cidr.go
\`\`\` 

## Usage of Properties
In the geo-ip plugin, call proxywasm.SetProperty() to set country, city, province, and isp into request attributes so that subsequent plugins can use proxywasm.GetProperty() to obtain the geographical information corresponding to the user's IP for that request.
`},n=function(){return e},a=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:2,slug:"explanation-for-generating-geocidrtxt",text:"Explanation for Generating geoCidr.txt"},{depth:2,slug:"usage-of-properties",text:"Usage of Properties"}]},t=d((y,v,b)=>{const{layout:_,...s}=o;return s.file=i,s.url=r,u`${c()}${g(e)}`})});export{t as Content,m as __tla,n as compiledContent,t as default,i as file,o as frontmatter,a as getHeadings,p as rawContent,r as url};
