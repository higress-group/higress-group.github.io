import{c,__tla as p}from"./astro-component.CXlaF79K.js";import{r,m as v,u as y,__tla as u}from"./constant.CIJt_13b.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let s,n,t,d,i,l,a,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">custom-response</code>\u63D2\u4EF6\u652F\u6301\u914D\u7F6E\u81EA\u5B9A\u4E49\u7684\u54CD\u5E94\uFF0C\u5305\u62EC\u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u72B6\u6001\u7801\u3001HTTP \u5E94\u7B54\u5934\uFF0C\u4EE5\u53CA HTTP \u5E94\u7B54 Body\u3002\u53EF\u4EE5\u7528\u4E8E Mock \u54CD\u5E94\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5224\u65AD\u7279\u5B9A\u72B6\u6001\u7801\u540E\u7ED9\u51FA\u81EA\u5B9A\u4E49\u5E94\u7B54\uFF0C\u4F8B\u5982\u5728\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u7B56\u7565\u65F6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">910</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>status_code</td><td>number</td><td>\u9009\u586B</td><td>200</td><td>\u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u72B6\u6001\u7801</td></tr><tr><td>headers</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u5934\uFF0Ckey \u548C value \u7528<code dir="auto">=</code>\u5206\u9694</td></tr><tr><td>body</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54 Body</td></tr><tr><td>enable_on_status</td><td>array of number</td><td>\u9009\u586B</td><td>-</td><td>\u5339\u914D\u539F\u59CB\u72B6\u6001\u7801\uFF0C\u751F\u6210\u81EA\u5B9A\u4E49\u54CD\u5E94\uFF0C\u4E0D\u586B\u5199\u65F6\uFF0C\u4E0D\u5224\u65AD\u539F\u59CB\u72B6\u6001\u7801</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="mock-\u5E94\u7B54\u573A\u666F">Mock \u5E94\u7B54\u573A\u666F</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type=application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Hello=World</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">hello</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">world</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="status_code: 200\x7Fheaders:\x7F- Content-Type=application/json\x7F- Hello=World\x7Fbody: &#x22;{\\&#x22;hello\\&#x22;:\\&#x22;world\\&#x22;}&#x22;"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5C06\u8FD4\u56DE\u81EA\u5B9A\u4E49\u5E94\u7B54\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type: application/json</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Hello: World</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 17</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{"hello":"world"}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 200 OK\x7FContent-Type: application/json\x7FHello: World\x7FContent-Length: 17\x7F\x7F{&#x22;hello&#x22;:&#x22;world&#x22;}"><div></div></button></div></figure></div>
<h3 id="\u89E6\u53D1\u9650\u6D41\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94">\u89E6\u53D1\u9650\u6D41\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">enable_on_status</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">429</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">status_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">302</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Location=https://example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="enable_on_status:\x7F- 429\x7Fstatus_code: 302\x7Fheaders:\x7F- Location=https://example.com"><div></div></button></div></figure></div>
<p>\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u65F6\u4E00\u822C\u4F1A\u8FD4\u56DE <code dir="auto">429</code> \u72B6\u6001\u7801\uFF0C\u8FD9\u65F6\u8BF7\u6C42\u5C06\u8FD4\u56DE\u81EA\u5B9A\u4E49\u5E94\u7B54\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 302 Found</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Location: https://example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 302 Found\x7FLocation: https://example.com"><div></div></button></div></figure></div>
<p>\u4ECE\u800C\u5B9E\u73B0\u57FA\u4E8E\u6D4F\u89C8\u5668 302 \u91CD\u5B9A\u5411\u673A\u5236\uFF0C\u5C06\u9650\u6D41\u540E\u7684\u7528\u6237\u5F15\u5BFC\u5230\u5176\u4ED6\u9875\u9762\uFF0C\u6BD4\u5982\u53EF\u4EE5\u662F\u4E00\u4E2A CDN \u4E0A\u7684\u9759\u6001\u9875\u9762\u3002</p>
<p>\u5982\u679C\u5E0C\u671B\u89E6\u53D1\u9650\u6D41\u65F6\uFF0C\u6B63\u5E38\u8FD4\u56DE\u5176\u4ED6\u5E94\u7B54\uFF0C\u53C2\u8003 Mock \u5E94\u7B54\u573A\u666F\u914D\u7F6E\u76F8\u5E94\u7684\u5B57\u6BB5\u5373\u53EF\u3002</p>`,d={title:"\u81EA\u5B9A\u4E49\u5E94\u7B54",keywords:["higress","customn response"],description:"\u81EA\u5B9A\u4E49\u5E94\u7B54\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/custom-response.md",a=void 0,l=function(){return`

## \u529F\u80FD\u8BF4\u660E
\`custom-response\`\u63D2\u4EF6\u652F\u6301\u914D\u7F6E\u81EA\u5B9A\u4E49\u7684\u54CD\u5E94\uFF0C\u5305\u62EC\u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u72B6\u6001\u7801\u3001HTTP \u5E94\u7B54\u5934\uFF0C\u4EE5\u53CA HTTP \u5E94\u7B54 Body\u3002\u53EF\u4EE5\u7528\u4E8E Mock \u54CD\u5E94\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5224\u65AD\u7279\u5B9A\u72B6\u6001\u7801\u540E\u7ED9\u51FA\u81EA\u5B9A\u4E49\u5E94\u7B54\uFF0C\u4F8B\u5982\u5728\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u7B56\u7565\u65F6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`910\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
|  status_code    |  number     |  \u9009\u586B      |   200  |  \u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u72B6\u6001\u7801   |
|  headers     |  array of string      |  \u9009\u586B     |   -  |  \u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u5934\uFF0Ckey \u548C value \u7528\`=\`\u5206\u9694   |
|  body      |  string    |  \u9009\u586B     |   -   |  \u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54 Body  |
|  enable_on_status   |  array of number    |   \u9009\u586B     |  -  | \u5339\u914D\u539F\u59CB\u72B6\u6001\u7801\uFF0C\u751F\u6210\u81EA\u5B9A\u4E49\u54CD\u5E94\uFF0C\u4E0D\u586B\u5199\u65F6\uFF0C\u4E0D\u5224\u65AD\u539F\u59CB\u72B6\u6001\u7801   |

## \u914D\u7F6E\u793A\u4F8B

### Mock \u5E94\u7B54\u573A\u666F

\`\`\`yaml
status_code: 200
headers:
- Content-Type=application/json
- Hello=World
body: "{\\"hello\\":\\"world\\"}"

\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5C06\u8FD4\u56DE\u81EA\u5B9A\u4E49\u5E94\u7B54\u5982\u4E0B\uFF1A

\`\`\`text
HTTP/1.1 200 OK
Content-Type: application/json
Hello: World
Content-Length: 17

{"hello":"world"}
\`\`\`

### \u89E6\u53D1\u9650\u6D41\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94

\`\`\`yaml
enable_on_status: 
- 429
status_code: 302
headers:
- Location=https://example.com
\`\`\`

\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u65F6\u4E00\u822C\u4F1A\u8FD4\u56DE \`429\` \u72B6\u6001\u7801\uFF0C\u8FD9\u65F6\u8BF7\u6C42\u5C06\u8FD4\u56DE\u81EA\u5B9A\u4E49\u5E94\u7B54\u5982\u4E0B\uFF1A

\`\`\`text
HTTP/1.1 302 Found
Location: https://example.com
\`\`\`

\u4ECE\u800C\u5B9E\u73B0\u57FA\u4E8E\u6D4F\u89C8\u5668 302 \u91CD\u5B9A\u5411\u673A\u5236\uFF0C\u5C06\u9650\u6D41\u540E\u7684\u7528\u6237\u5F15\u5BFC\u5230\u5176\u4ED6\u9875\u9762\uFF0C\u6BD4\u5982\u53EF\u4EE5\u662F\u4E00\u4E2A CDN \u4E0A\u7684\u9759\u6001\u9875\u9762\u3002

\u5982\u679C\u5E0C\u671B\u89E6\u53D1\u9650\u6D41\u65F6\uFF0C\u6B63\u5E38\u8FD4\u56DE\u5176\u4ED6\u5E94\u7B54\uFF0C\u53C2\u8003 Mock \u5E94\u7B54\u573A\u666F\u914D\u7F6E\u76F8\u5E94\u7684\u5B57\u6BB5\u5373\u53EF\u3002
`},n=function(){return e},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"mock-\u5E94\u7B54\u573A\u666F",text:"Mock \u5E94\u7B54\u573A\u666F"},{depth:3,slug:"\u89E6\u53D1\u9650\u6D41\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94",text:"\u89E6\u53D1\u9650\u6D41\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94"}]},s=c((x,E,m)=>{const{layout:T,...o}=d;return o.file=t,o.url=a,r`${v()}${y(e)}`})});export{s as Content,f as __tla,n as compiledContent,s as default,t as file,d as frontmatter,i as getHeadings,l as rawContent,a as url};
