import{c as l,__tla as p}from"./astro-component.cI6d52vQ.js";import{r as g,m as o,u,__tla as X}from"./constant.drmVjFn1.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let t,a,r,n,d,c,i,h=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u5927\u6A21\u578B\u901A\u5E38\u662F\u901A\u8FC7\u5B66\u4E60\u4E92\u8054\u7F51\u4E0A\u5E7F\u6CDB\u53EF\u7528\u7684\u6570\u636E\u6765\u8BAD\u7EC3\u7684\uFF0C\u5B83\u4EEC\u6709\u53EF\u80FD\u5728\u8FC7\u7A0B\u4E2D\u5B66\u4E60\u5230\u5E76\u590D\u73B0\u6709\u5BB3\u5185\u5BB9\u6216\u4E0D\u826F\u8A00\u8BBA\uFF0C\u56E0\u6B64\uFF0C\u5F53\u5927\u6A21\u578B\u672A\u7ECF\u8FC7\u9002\u5F53\u7684\u8FC7\u6EE4\u548C\u76D1\u63A7\u5C31\u751F\u6210\u56DE\u5E94\u65F6\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4EA7\u751F\u5305\u542B\u6709\u5BB3\u8BED\u8A00\u3001\u8BEF\u5BFC\u4FE1\u606F\u3001\u6B67\u89C6\u6027\u8A00\u8BBA\u751A\u81F3\u662F\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u7684\u5185\u5BB9\u3002\u6B63\u662F\u56E0\u4E3A\u8FD9\u79CD\u6F5C\u5728\u7684\u98CE\u9669\uFF0C\u5927\u6A21\u578B\u4E2D\u7684\u5185\u5BB9\u5B89\u5168\u5C31\u663E\u5F97\u5F02\u5E38\u91CD\u8981\u3002
\u5728 Higress \u4E2D\uFF0C\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5373\u53EF\u5BF9\u63A5<a href="https://help.aliyun.com/document_detail/28417.html?spm=a2c4g.28415.0.0.1dab1f55pipQr9" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168</a>\uFF0C\u4E3A\u5927\u6A21\u578B\u95EE\u7B54\u7684\u5408\u89C4\u6027\u4FDD\u9A7E\u62A4\u822A\uFF0C\u5185\u5BB9\u5B89\u5168\u63D0\u4F9B\u4E86\u591A\u79CD\u68C0\u6D4B\u8303\u56F4\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF1A</p>
<p><img src="/img/plugins/ai/ai-security-guard/security-content-rules.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>






















































<table><thead><tr><th align="center">Name</th><th align="center">Type</th><th align="center">Requirement</th><th align="center">Default</th><th align="center">Description</th></tr></thead><tbody><tr><td align="center">serviceSource</td><td align="center">string</td><td align="center">requried</td><td align="center">-</td><td align="center">\u670D\u52A1\u6765\u6E90\uFF0C\u586Bdns</td></tr><tr><td align="center">serviceName</td><td align="center">string</td><td align="center">requried</td><td align="center">-</td><td align="center">\u670D\u52A1\u540D</td></tr><tr><td align="center">servicePort</td><td align="center">string</td><td align="center">requried</td><td align="center">-</td><td align="center">\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td align="center">domain</td><td align="center">string</td><td align="center">requried</td><td align="center">-</td><td align="center">\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168endpoint</td></tr><tr><td align="center">ak</td><td align="center">string</td><td align="center">requried</td><td align="center">-</td><td align="center">\u963F\u91CC\u4E91AK</td></tr><tr><td align="center">sk</td><td align="center">string</td><td align="center">requried</td><td align="center">-</td><td align="center">\u963F\u91CC\u4E91SK</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"dns"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"safecheck"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"green-cip.cn-shanghai.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ak</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">sk</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceSource: &#x22;dns&#x22;\x7FserviceName: &#x22;safecheck&#x22;\x7FservicePort: 443\x7Fdomain: &#x22;green-cip.cn-shanghai.aliyuncs.com&#x22;\x7Fak: &#x22;XXXXXXXXX&#x22;\x7Fsk: &#x22;XXXXXXXXXXXXXXX&#x22;"><div></div></button></div></figure></div>
<p>\u914D\u7F6E\u540E\uFF0C\u5982\u679C\u8BF7\u6C42/\u54CD\u5E94\u4E2D\u5305\u542B\u4E86\u975E\u6CD5\u5185\u5BB9\uFF0C\u88AB\u5185\u5BB9\u5B89\u5168\u62E6\u622A\u540E\uFF0C\u7F51\u5173\u4F1A\u8FD4\u56DE\u5185\u5BB9\u5B89\u5168\u5EFA\u8BAE\u7684\u56DE\u7B54\uFF1A</p>
<p><img src="/img/plugins/ai/ai-security-guard/security-response.png" alt="" referrerpolicy="no-referrer"></p>`,n={title:"AI \u5185\u5BB9\u5B89\u5168",keywords:["higress","ai"],description:"\u57FA\u4E8EAI \u5185\u5BB9\u5B89\u5168\u63D2\u4EF6\u53EF\u5BF9\u63A5[\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168]\uFF0C\u4E3A\u5927\u6A21\u578B\u95EE\u7B54\u7684\u5408\u89C4\u6027\u4FDD\u9A7E\u62A4\u822A\u3002"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-security-guard.md",i=void 0,c=function(){return`
## \u529F\u80FD\u8BF4\u660E 

\u5927\u6A21\u578B\u901A\u5E38\u662F\u901A\u8FC7\u5B66\u4E60\u4E92\u8054\u7F51\u4E0A\u5E7F\u6CDB\u53EF\u7528\u7684\u6570\u636E\u6765\u8BAD\u7EC3\u7684\uFF0C\u5B83\u4EEC\u6709\u53EF\u80FD\u5728\u8FC7\u7A0B\u4E2D\u5B66\u4E60\u5230\u5E76\u590D\u73B0\u6709\u5BB3\u5185\u5BB9\u6216\u4E0D\u826F\u8A00\u8BBA\uFF0C\u56E0\u6B64\uFF0C\u5F53\u5927\u6A21\u578B\u672A\u7ECF\u8FC7\u9002\u5F53\u7684\u8FC7\u6EE4\u548C\u76D1\u63A7\u5C31\u751F\u6210\u56DE\u5E94\u65F6\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4EA7\u751F\u5305\u542B\u6709\u5BB3\u8BED\u8A00\u3001\u8BEF\u5BFC\u4FE1\u606F\u3001\u6B67\u89C6\u6027\u8A00\u8BBA\u751A\u81F3\u662F\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u7684\u5185\u5BB9\u3002\u6B63\u662F\u56E0\u4E3A\u8FD9\u79CD\u6F5C\u5728\u7684\u98CE\u9669\uFF0C\u5927\u6A21\u578B\u4E2D\u7684\u5185\u5BB9\u5B89\u5168\u5C31\u663E\u5F97\u5F02\u5E38\u91CD\u8981\u3002
\u5728 Higress \u4E2D\uFF0C\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5373\u53EF\u5BF9\u63A5[\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168](https://help.aliyun.com/document_detail/28417.html?spm=a2c4g.28415.0.0.1dab1f55pipQr9)\uFF0C\u4E3A\u5927\u6A21\u578B\u95EE\u7B54\u7684\u5408\u89C4\u6027\u4FDD\u9A7E\u62A4\u822A\uFF0C\u5185\u5BB9\u5B89\u5168\u63D0\u4F9B\u4E86\u591A\u79CD\u68C0\u6D4B\u8303\u56F4\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF1A

![](/img/plugins/ai/ai-security-guard/security-content-rules.png)

## \u914D\u7F6E\u8BF4\u660E
| Name | Type | Requirement | Default | Description |
| :-: | :-:  | :-:  | :-: | :-: |
| serviceSource | string | requried | - | \u670D\u52A1\u6765\u6E90\uFF0C\u586Bdns |
| serviceName | string | requried | - | \u670D\u52A1\u540D |
| servicePort | string | requried | - | \u670D\u52A1\u7AEF\u53E3 |
| domain | string | requried | - | \u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168endpoint |
| ak | string | requried | - | \u963F\u91CC\u4E91AK |
| sk | string | requried | - | \u963F\u91CC\u4E91SK |


## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
serviceSource: "dns"
serviceName: "safecheck"
servicePort: 443
domain: "green-cip.cn-shanghai.aliyuncs.com"
ak: "XXXXXXXXX"
sk: "XXXXXXXXXXXXXXX"
\`\`\`

\u914D\u7F6E\u540E\uFF0C\u5982\u679C\u8BF7\u6C42/\u54CD\u5E94\u4E2D\u5305\u542B\u4E86\u975E\u6CD5\u5185\u5BB9\uFF0C\u88AB\u5185\u5BB9\u5B89\u5168\u62E6\u622A\u540E\uFF0C\u7F51\u5173\u4F1A\u8FD4\u56DE\u5185\u5BB9\u5B89\u5168\u5EFA\u8BAE\u7684\u56DE\u7B54\uFF1A

![](/img/plugins/ai/ai-security-guard/security-response.png)
`},a=function(){return e},d=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"}]},t=l((v,m,f)=>{const{layout:E,...s}=n;return s.file=r,s.url=i,g`${o()}${u(e)}`})});export{t as Content,h as __tla,a as compiledContent,t as default,r as file,n as frontmatter,d as getHeadings,c as rawContent,i as url};
