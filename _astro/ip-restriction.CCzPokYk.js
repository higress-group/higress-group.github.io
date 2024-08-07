import{c,__tla as p}from"./astro-component.DeDyO-JF.js";import{r as l,m as y,u,__tla as v}from"./constant.CNr0V-vs.js";import{__tla as _}from"./astro/assets-service.B3vdYoe2.js";let e,r,s,d,n,o,a,E=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">ip-restriction</code> \u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u5C06 IP \u5730\u5740\u5217\u5165\u767D\u540D\u5355\u6216\u9ED1\u540D\u5355\u6765\u9650\u5236\u5BF9\u670D\u52A1\u6216\u8DEF\u7531\u7684\u8BBF\u95EE\u3002\u652F\u6301\u5BF9\u5355\u4E2A IP \u5730\u5740\u3001\u591A\u4E2A IP \u5730\u5740\u548C\u7C7B\u4F3C 10.10.10.0/24 \u7684 CIDR \u8303\u56F4\u7684\u9650\u5236\u3002</p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>






















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ip_source_type</td><td>string</td><td>\u5426</td><td>origin-source</td><td>\u53EF\u9009\u503C\uFF1A1. \u5BF9\u7AEF socket ip\uFF1A<code dir="auto">origin-source</code>; 2. \u901A\u8FC7 header \u83B7\u53D6\uFF1A<code dir="auto">header</code></td></tr><tr><td>ip_header_name</td><td>string</td><td>\u5426</td><td>x-forwarded-for</td><td>\u5F53 <code dir="auto">ip_source_type</code> \u4E3A <code dir="auto">header</code> \u65F6\uFF0C\u6307\u5B9A\u81EA\u5B9A\u4E49 IP \u6765\u6E90\u5934</td></tr><tr><td>allow</td><td>array</td><td>\u5426</td><td>[]</td><td>\u767D\u540D\u5355\u5217\u8868</td></tr><tr><td>deny</td><td>array</td><td>\u5426</td><td>[]</td><td>\u9ED1\u540D\u5355\u5217\u8868</td></tr><tr><td>status</td><td>int</td><td>\u5426</td><td>403</td><td>\u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684 HTTP \u72B6\u6001\u7801</td></tr><tr><td>message</td><td>string</td><td>\u5426</td><td>Your IP address is blocked.</td><td>\u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8FD4\u56DE\u4FE1\u606F</td></tr></tbody></table>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">origin-source</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">10.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">192.168.0.0/16</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_source_type: origin-source\x7Fallow:\x7F  - 10.0.0.1\x7F  - 192.168.0.0/16"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-real-iP</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">10.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">192.169.0.0/16</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_source_type: header\x7Fip_header_name: x-real-iP\x7Fdeny:\x7F  - 10.0.0.1\x7F  - 192.169.0.0/16"><div></div></button></div></figure></div>`,d={title:"IP \u9650\u5236",keywords:["higress"],description:"IP \u9650\u5236\u63D2\u4EF6\u901A\u8FC7\u5C06 IP \u5730\u5740\u5217\u5165\u767D\u540D\u5355\u6216\u9ED1\u540D\u5355\u6765\u9650\u5236\u5BF9\u670D\u52A1\u6216\u8DEF\u7531\u7684\u8BBF\u95EE\u3002\u652F\u6301\u5BF9\u5355\u4E2A IP \u5730\u5740\u3001\u591A\u4E2A IP \u5730\u5740\u548C\u7C7B\u4F3C 10.10.10.0/24 \u7684 CIDR \u8303\u56F4\u7684\u9650\u5236\u3002"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/ip-restriction.md",a=void 0,o=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`ip-restriction\` \u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u5C06 IP \u5730\u5740\u5217\u5165\u767D\u540D\u5355\u6216\u9ED1\u540D\u5355\u6765\u9650\u5236\u5BF9\u670D\u52A1\u6216\u8DEF\u7531\u7684\u8BBF\u95EE\u3002\u652F\u6301\u5BF9\u5355\u4E2A IP \u5730\u5740\u3001\u591A\u4E2A IP \u5730\u5740\u548C\u7C7B\u4F3C 10.10.10.0/24 \u7684 CIDR \u8303\u56F4\u7684\u9650\u5236\u3002

## \u914D\u7F6E\u8BF4\u660E

| \u914D\u7F6E\u9879            | \u7C7B\u578B     | \u5FC5\u586B | \u9ED8\u8BA4\u503C                         | \u8BF4\u660E                                                            |
|----------------|--------|----|-----------------------------|---------------------------------------------------------------|
| ip_source_type | string | \u5426  | origin-source               | \u53EF\u9009\u503C\uFF1A1. \u5BF9\u7AEF socket ip\uFF1A\`origin-source\`; 2. \u901A\u8FC7 header \u83B7\u53D6\uFF1A\`header\` |
| ip_header_name | string | \u5426  | x-forwarded-for             | \u5F53 \`ip_source_type\` \u4E3A \`header\` \u65F6\uFF0C\u6307\u5B9A\u81EA\u5B9A\u4E49 IP \u6765\u6E90\u5934                  |
| allow          | array  | \u5426  | []                          | \u767D\u540D\u5355\u5217\u8868                                                         |
| deny           | array  | \u5426  | []                          | \u9ED1\u540D\u5355\u5217\u8868                                                         |
| status         | int    | \u5426  | 403                         | \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684 HTTP \u72B6\u6001\u7801                                               |
| message        | string | \u5426  | Your IP address is blocked. | \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8FD4\u56DE\u4FE1\u606F                                                    |


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
`},r=function(){return t},n=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"}]},e=c((h,g,f)=>{const{layout:m,...i}=d;return i.file=s,i.url=a,l`${y()}${u(t)}`})});export{e as Content,E as __tla,r as compiledContent,e as default,s as file,d as frontmatter,n as getHeadings,o as rawContent,a as url};
