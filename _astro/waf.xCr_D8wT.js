import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r,m as u,u as E,__tla as y}from"./constant.L4C-IM3N.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let e,p,a,t,i,d,n,h=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>waf\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8EModSecurity\u7684\u89C4\u5219\u9632\u62A4\u5F15\u64CE\uFF0C\u53EF\u4EE5\u6839\u636E\u7528\u6237\u914D\u7F6E\u7684\u89C4\u5219\u5C4F\u853D\u53EF\u7591\u8BF7\u6C42\uFF0C\u5E76\u652F\u6301OWASP CRS\uFF0C\u4E3A\u7AD9\u70B9\u63D0\u4F9B\u57FA\u7840\u7684\u9632\u62A4\u529F\u80FD\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u6388\u6743\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">330</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>useCRS</td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u662F\u5426\u5F00\u542FOWASP CRS\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003<a href="https://github.com/coreruleset/coreruleset/tree/v3.3.2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">coreruleset</a></td></tr><tr><td>secRules</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u7528\u6237\u81EA\u5B9A\u4E49\u7684waf\u9632\u62A4\u89C4\u5219\uFF0C\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003<a href="http://www.modsecurity.cn/chm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ModSecurity\u4E2D\u6587\u624B\u518C</a></td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u89C2\u5BDF\u6A21\u5F0F">\u89C2\u5BDF\u6A21\u5F0F</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine DetectionOnly"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F  - &#x22;SecRuleEngine DetectionOnly&#x22;"><div></div></button></div></figure></div>
<h3 id="\u79FB\u9664\u7279\u5B9A\u89C4\u5219">\u79FB\u9664\u7279\u5B9A\u89C4\u5219</h3>
<p>\u4F8B\u5982\u5F00\u542F\u89C2\u5BDF\u6A21\u5F0F\u540E\uFF0C\u53D1\u73B0\u6709\u4E00\u4E2Aid\u4E3A10\u7684\u89C4\u5219\u5BFC\u81F4\u8BEF\u62E6\u622A\uFF0C\u53EF\u4EE5\u5355\u72EC\u79FB\u9664\u8FD9\u6761\u89C4\u5219\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleRemoveById 10"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F  - &#x22;SecRuleRemoveById 10&#x22;\x7F  - &#x22;SecRuleEngine On&#x22;"><div></div></button></div></figure></div>
<h3 id="\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219">\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecAction </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:100,phase:1,pass</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_BODY </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@rx maliciouspayload</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:102,phase:2,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F  - &#x22;SecDebugLogLevel 3&#x22;\x7F  - &#x22;SecRuleEngine On&#x22;\x7F  - &#x22;SecAction \\&#x22;id:100,phase:1,pass\\&#x22;&#x22;\x7F  - &#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;\x7F  - &#x22;SecRule REQUEST_BODY \\&#x22;@rx maliciouspayload\\&#x22; \\&#x22;id:102,phase:2,t:lowercase,deny\\&#x22;&#x22;"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"maliciouspayload"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com/admin\x7Fcurl http://example.com -d &#x22;maliciouspayload&#x22;"><div></div></button></div></figure></div>`,t={title:"WAF",keywords:["higress","waf"],description:"WAF \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/waf.md",n=void 0,d=function(){return`
## \u529F\u80FD\u8BF4\u660E
waf\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8EModSecurity\u7684\u89C4\u5219\u9632\u62A4\u5F15\u64CE\uFF0C\u53EF\u4EE5\u6839\u636E\u7528\u6237\u914D\u7F6E\u7684\u89C4\u5219\u5C4F\u853D\u53EF\u7591\u8BF7\u6C42\uFF0C\u5E76\u652F\u6301OWASP CRS\uFF0C\u4E3A\u7AD9\u70B9\u63D0\u4F9B\u57FA\u7840\u7684\u9632\u62A4\u529F\u80FD\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u6388\u6743\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`330\`


## \u914D\u7F6E\u5B57\u6BB5
| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
| useCRS | bool | \u9009\u586B | false | \u662F\u5426\u5F00\u542FOWASP CRS\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003[coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2) |
| secRules | array of string | \u9009\u586B | - | \u7528\u6237\u81EA\u5B9A\u4E49\u7684waf\u9632\u62A4\u89C4\u5219\uFF0C\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003[ModSecurity\u4E2D\u6587\u624B\u518C](http://www.modsecurity.cn/chm/) |

## \u914D\u7F6E\u793A\u4F8B

### \u89C2\u5BDF\u6A21\u5F0F

\`\`\`yaml
useCRS: true
secRules:
  - "SecRuleEngine DetectionOnly"
\`\`\`

### \u79FB\u9664\u7279\u5B9A\u89C4\u5219

\u4F8B\u5982\u5F00\u542F\u89C2\u5BDF\u6A21\u5F0F\u540E\uFF0C\u53D1\u73B0\u6709\u4E00\u4E2Aid\u4E3A10\u7684\u89C4\u5219\u5BFC\u81F4\u8BEF\u62E6\u622A\uFF0C\u53EF\u4EE5\u5355\u72EC\u79FB\u9664\u8FD9\u6761\u89C4\u5219\uFF1A

\`\`\`yaml
useCRS: true
secRules:
  - "SecRuleRemoveById 10"
  - "SecRuleEngine On"
\`\`\`

### \u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219

\`\`\`yaml
useCRS: true
secRules: 
  - "SecDebugLogLevel 3"
  - "SecRuleEngine On"
  - "SecAction \\"id:100,phase:1,pass\\""
  - "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
  - "SecRule REQUEST_BODY \\"@rx maliciouspayload\\" \\"id:102,phase:2,t:lowercase,deny\\""
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A
\`\`\`bash
curl http://example.com/admin
curl http://example.com -d "maliciouspayload"
\`\`\`
`},p=function(){return s},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u89C2\u5BDF\u6A21\u5F0F",text:"\u89C2\u5BDF\u6A21\u5F0F"},{depth:3,slug:"\u79FB\u9664\u7279\u5B9A\u89C4\u5219",text:"\u79FB\u9664\u7279\u5B9A\u89C4\u5219"},{depth:3,slug:"\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219",text:"\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219"}]},e=c((F,x,f)=>{const{layout:R,...l}=t;return l.file=a,l.url=n,r`${u()}${E(s)}`})});export{e as Content,h as __tla,p as compiledContent,e as default,a as file,t as frontmatter,i as getHeadings,d as rawContent,n as url};
