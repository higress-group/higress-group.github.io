import{c as r,__tla as c}from"./astro-component.CXlaF79K.js";import{r as d,m as u,u as y,__tla as h}from"./constant.V2td3cJV.js";import{__tla as E}from"./astro/assets-service.DQopRnBr.js";let s,l,t,a,p,o,n,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The waf plugin implements a ModSecurity-based rule protection engine, which can block suspicious requests based on user-defined rules, and supports OWASP CRS, providing basic protection features for the site.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">authorization phase</code><br>
Plugin execution priority: <code dir="auto">330</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Filling Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>useCRS</td><td>bool</td><td>Optional</td><td>false</td><td>Whether to enable OWASP CRS, for details refer to <a href="https://github.com/coreruleset/coreruleset/tree/v3.3.2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">coreruleset</a></td></tr><tr><td>secRules</td><td>array of string</td><td>Optional</td><td>-</td><td>User-defined WAF protection rules, syntax rules can refer to <a href="http://www.modsecurity.cn/chm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ModSecurity Chinese Manual</a></td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecAction </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:100,phase:1,pass</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_BODY </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@rx maliciouspayload</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:102,phase:2,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F  - &#x22;SecDebugLogLevel 3&#x22;\x7F  - &#x22;SecRuleEngine On&#x22;\x7F  - &#x22;SecAction \\&#x22;id:100,phase:1,pass\\&#x22;&#x22;\x7F  - &#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;\x7F  - &#x22;SecRule REQUEST_BODY \\&#x22;@rx maliciouspayload\\&#x22; \\&#x22;id:102,phase:2,t:lowercase,deny\\&#x22;&#x22;"><div></div></button></div></figure></div>
<p>Based on this configuration, the following requests will be prohibited from access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"maliciouspayload"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com/admin\x7Fcurl http://example.com -d &#x22;maliciouspayload&#x22;"><div></div></button></div></figure></div>`,a={title:"WAF",keywords:["higress","waf"],description:"WAF plugin configuration reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/waf.md",n=void 0,o=function(){return`## Function Description

The waf plugin implements a ModSecurity-based rule protection engine, which can block suspicious requests based on user-defined rules, and supports OWASP CRS, providing basic protection features for the site.

## Running Attributes

Plugin execution phase: \`authorization phase\`  
Plugin execution priority: \`330\`

## Configuration Fields

| Name     | Data Type         | Filling Requirements | Default Value | Description                                                                 |
|----------|--------------------|----------------------|---------------|-----------------------------------------------------------------------------|
| useCRS   | bool               | Optional             | false         | Whether to enable OWASP CRS, for details refer to [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2) |
| secRules | array of string    | Optional             | -             | User-defined WAF protection rules, syntax rules can refer to [ModSecurity Chinese Manual](http://www.modsecurity.cn/chm/) |

## Configuration Example

\`\`\`yaml  
useCRS: true  
secRules:  
  - "SecDebugLogLevel 3"  
  - "SecRuleEngine On"  
  - "SecAction \\"id:100,phase:1,pass\\""  
  - "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""  
  - "SecRule REQUEST_BODY \\"@rx maliciouspayload\\" \\"id:102,phase:2,t:lowercase,deny\\""  
\`\`\`

Based on this configuration, the following requests will be prohibited from access:

\`\`\`bash  
curl http://example.com/admin  
curl http://example.com -d "maliciouspayload"  
\`\`\`
`},l=function(){return e},p=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"}]},s=r((F,g,m)=>{const{layout:v,...i}=a;return i.file=t,i.url=n,d`${u()}${y(e)}`})});export{s as Content,f as __tla,l as compiledContent,s as default,t as file,a as frontmatter,p as getHeadings,o as rawContent,n as url};
