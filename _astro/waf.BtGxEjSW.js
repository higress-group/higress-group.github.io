import{c as o,__tla as r}from"./astro-component.CD2fzakh.js";import{r as p,m as u,u as y,__tla as v}from"./constant.AV_Bn1q0.js";import{__tla as h}from"./astro/assets-service.Bk7KqR8o.js";let s,l,t,a,d,c,n,f=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u5F00\u6E90\u7248 WAF \u63D2\u4EF6\uFF0C\u652F\u6301\u57FA\u4E8E OWASP ModSecurity Core Rule Set (CRS) \u7684 WAF \u89C4\u5219\u914D\u7F6E\u3002</p>
<blockquote>
<p>\u26A0\uFE0F<strong>\u91CD\u8981</strong></p>
<p>\u5F53\u524D WAF \u63D2\u4EF6\u4F1A\u7F13\u5B58\u8BF7\u6C42 Body \u548C\u54CD\u5E94 Body\uFF0C\u5982\u679C Body \u6BD4\u5168\u5C40\u914D\u7F6E\u4E2D\u7684 downstream.connectionBufferLimits \u914D\u7F6E\u8981\u5927\uFF0C\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u6216\u54CD\u5E94\u5F02\u5E38</p>
<p>downstream.connectionBufferLimits \u4E5F\u4E0D\u5EFA\u8BAE\u914D\u7F6E\u8FC7\u5927\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7F51\u7EDC\u4F20\u8F93\u6162\u65F6\uFF0C\u7F51\u5173\u5185\u5B58\u5360\u7528\u8FC7\u9AD8</p>
</blockquote>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>useCRS</td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u662F\u5426\u5F00\u542F OWASP CRS\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003 <a href="https://github.com/coreruleset/coreruleset/tree/v3.3.2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">coreruleset</a></td></tr><tr><td>secRules</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u7528\u6237\u81EA\u5B9A\u4E49\u7684waf\u9632\u62A4\u89C4\u5219\uFF0C\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003 <a href="https://coraza.io/docs/seclang/directives/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SecLang \u8BED\u6CD5\u53C2\u8003</a> \u548C <a href="http://www.modsecurity.cn/chm/index.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ModSecurity \u4E2D\u6587\u624B\u518C</a></td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u89C2\u5BDF\u6A21\u5F0F\u53EA\u4F1A\u8BB0\u5F55\u65E5\u5FD7">\u89C2\u5BDF\u6A21\u5F0F\uFF08\u53EA\u4F1A\u8BB0\u5F55\u65E5\u5FD7)</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine DetectionOnly"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F- &#x22;SecRuleEngine DetectionOnly&#x22;"><div></div></button></div></figure></div>
<h3 id="\u9632\u62A4\u6A21\u5F0F">\u9632\u62A4\u6A21\u5F0F</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F- &#x22;SecRuleEngine On&#x22;"><div></div></button></div></figure></div>
<h3 id="\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u89C4\u5219">\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u89C4\u5219</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true\x7FsecRules:\x7F- &#x22;SecRuleEngine On&#x22;\x7F- &#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/admin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com/admin"><div></div></button></div></figure></div>`,a={title:"WAF \u9632\u62A4",keywords:["higress","waf"],description:"\u5F00\u6E90\u7248 WAF \u63D2\u4EF6\uFF0C\u652F\u6301\u57FA\u4E8E OWASP ModSecurity Core Rule Set (CRS) \u7684 WAF \u89C4\u5219\u914D\u7F6E\u3002"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/waf.md",n=void 0,c=function(){return`
## \u529F\u80FD\u8BF4\u660E

\u5F00\u6E90\u7248 WAF \u63D2\u4EF6\uFF0C\u652F\u6301\u57FA\u4E8E OWASP ModSecurity Core Rule Set (CRS) \u7684 WAF \u89C4\u5219\u914D\u7F6E\u3002


> \u26A0\uFE0F**\u91CD\u8981**
>
> \u5F53\u524D WAF \u63D2\u4EF6\u4F1A\u7F13\u5B58\u8BF7\u6C42 Body \u548C\u54CD\u5E94 Body\uFF0C\u5982\u679C Body \u6BD4\u5168\u5C40\u914D\u7F6E\u4E2D\u7684 downstream.connectionBufferLimits \u914D\u7F6E\u8981\u5927\uFF0C\u4F1A\u5BFC\u81F4\u8BF7\u6C42\u6216\u54CD\u5E94\u5F02\u5E38
>
> downstream.connectionBufferLimits \u4E5F\u4E0D\u5EFA\u8BAE\u914D\u7F6E\u8FC7\u5927\uFF0C\u53EF\u80FD\u5BFC\u81F4\u7F51\u7EDC\u4F20\u8F93\u6162\u65F6\uFF0C\u7F51\u5173\u5185\u5B58\u5360\u7528\u8FC7\u9AD8

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                              |
| -------- | -------- | -------- | -------- |-------------------------------------------------------------------------------------------------------------------------------------------------|
| useCRS | bool | \u9009\u586B | false | \u662F\u5426\u5F00\u542F OWASP CRS\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003 [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2)                                                      |
| secRules | array of string | \u9009\u586B | - | \u7528\u6237\u81EA\u5B9A\u4E49\u7684waf\u9632\u62A4\u89C4\u5219\uFF0C\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003 [SecLang \u8BED\u6CD5\u53C2\u8003](https://coraza.io/docs/seclang/directives/) \u548C [ModSecurity \u4E2D\u6587\u624B\u518C](http://www.modsecurity.cn/chm/index.html) |

## \u914D\u7F6E\u793A\u4F8B

### \u89C2\u5BDF\u6A21\u5F0F\uFF08\u53EA\u4F1A\u8BB0\u5F55\u65E5\u5FD7)

\`\`\`yaml
useCRS: true
secRules: 
- "SecRuleEngine DetectionOnly"
\`\`\`

### \u9632\u62A4\u6A21\u5F0F

\`\`\`yaml
useCRS: true
secRules: 
- "SecRuleEngine On"
\`\`\`

### \u6D4B\u8BD5\u81EA\u5B9A\u4E49\u89C4\u5219

\`\`\`yaml
useCRS: true
secRules: 
- "SecRuleEngine On"
- "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com/admin
\`\`\`
`},l=function(){return e},d=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u89C2\u5BDF\u6A21\u5F0F\u53EA\u4F1A\u8BB0\u5F55\u65E5\u5FD7",text:"\u89C2\u5BDF\u6A21\u5F0F\uFF08\u53EA\u4F1A\u8BB0\u5F55\u65E5\u5FD7)"},{depth:3,slug:"\u9632\u62A4\u6A21\u5F0F",text:"\u9632\u62A4\u6A21\u5F0F"},{depth:3,slug:"\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u89C4\u5219",text:"\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u89C4\u5219"}]},s=o((E,g,m)=>{const{layout:R,...i}=a;return i.file=t,i.url=n,p`${u()}${y(e)}`})});export{s as Content,f as __tla,l as compiledContent,s as default,t as file,a as frontmatter,d as getHeadings,c as rawContent,n as url};
