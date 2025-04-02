import{c,__tla as p}from"./astro-component.fC12J6m8.js";import{r as l,m as u,u as h,__tla as y}from"./constant.BdKA6-5g.js";import{__tla as g}from"./astro/assets-service.CogLqxaq.js";let t,d,s,i,r,o,a,v=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">ip-restriction</code> plugin can restrict access to services or routes by whitelisting or blacklisting IP addresses. It supports restrictions on a single IP address, multiple IP addresses, and CIDR ranges like 10.10.10.0/24.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Authentication Phase</code></p>
<p>Plugin execution priority: <code dir="auto">210</code></p>
<h2 id="configuration-description">Configuration Description</h2>






















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>ip_source_type</td><td>string</td><td>No</td><td>origin-source</td><td>Optional values: 1. Peer socket IP: <code dir="auto">origin-source</code>; 2. Get from header: <code dir="auto">header</code></td></tr><tr><td>ip_header_name</td><td>string</td><td>No</td><td>x-forwarded-for</td><td>When <code dir="auto">ip_source_type</code> is <code dir="auto">header</code>, specify the custom IP source header</td></tr><tr><td>allow</td><td>array</td><td>No</td><td>[]</td><td>Whitelist</td></tr><tr><td>deny</td><td>array</td><td>No</td><td>[]</td><td>Blacklist</td></tr><tr><td>status</td><td>int</td><td>No</td><td>403</td><td>HTTP status code when access is denied</td></tr><tr><td>message</td><td>string</td><td>No</td><td>Your IP address is blocked.</td><td>Return message when access is denied</td></tr></tbody></table>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">origin-source</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">10.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">192.168.0.0/16</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_source_type: origin-source\x7Fallow:\x7F  - 10.0.0.1\x7F  - 192.168.0.0/16"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-real-iP</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">10.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">192.169.0.0/16</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_source_type: header\x7Fip_header_name: x-real-iP\x7Fdeny:\x7F  - 10.0.0.1\x7F  - 192.169.0.0/16"><div></div></button></div></figure></div>`,i={title:"IP Access Restriction",keywords:["higress","ip restriction"],description:"IP access restriction plugin configuration reference"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/ip-restriction.md",a=void 0,o=function(){return`## Function Description
The \`ip-restriction\` plugin can restrict access to services or routes by whitelisting or blacklisting IP addresses. It supports restrictions on a single IP address, multiple IP addresses, and CIDR ranges like 10.10.10.0/24.

## Running Attributes
Plugin execution phase: \`Authentication Phase\`

Plugin execution priority: \`210\`

## Configuration Description
| Configuration Item  | Type    | Required | Default Value                   | Description                                 |
|---------------------|---------|----------|---------------------------------|---------------------------------------------|
| ip_source_type      | string  | No       | origin-source                   | Optional values: 1. Peer socket IP: \`origin-source\`; 2. Get from header: \`header\` |
| ip_header_name      | string  | No       | x-forwarded-for                | When \`ip_source_type\` is \`header\`, specify the custom IP source header            |
| allow               | array   | No       | []                              | Whitelist                                    |
| deny                | array   | No       | []                              | Blacklist                                    |
| status              | int     | No       | 403                             | HTTP status code when access is denied      |
| message             | string  | No       | Your IP address is blocked.     | Return message when access is denied         |

\`\`\`yaml
ip_source_type: origin-source
allow:
  - 10.0.0.1
  - 192.168.0.0/16
\`\`\`

\`\`\`yaml
ip_source_type: header
ip_header_name: x-real-iP
deny:
  - 10.0.0.1
  - 192.169.0.0/16
\`\`\`
`},d=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-description",text:"Configuration Description"}]},t=c((f,E,_)=>{const{layout:m,...n}=i;return n.file=s,n.url=a,l`${u()}${h(e)}`})});export{t as Content,v as __tla,d as compiledContent,t as default,s as file,i as frontmatter,r as getHeadings,o as rawContent,a as url};
