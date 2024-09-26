import{c as n,__tla as c}from"./astro-component.CwRucF1h.js";import{r as l,m as g,u as h,__tla as u}from"./constant.CvItjurb.js";import{__tla as y}from"./astro/assets-service.Dd3mQuiC.js";let t,o,i,r,a,s,p,v=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">geo-ip</code>\u672C\u63D2\u4EF6\u5B9E\u73B0\u4E86\u901A\u8FC7\u7528\u6237ip\u67E5\u8BE2\u51FA\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u7136\u540E\u901A\u8FC7\u8BF7\u6C42\u5C5E\u6027\u548C\u65B0\u6DFB\u52A0\u7684\u8BF7\u6C42\u5934\u628A\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">440</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>ip_protocol</td><td>string</td><td>\u5426</td><td>ipv4</td><td>\u53EF\u9009\u503C\uFF1A1. ipv4\uFF1A\u53EA\u5BF9ipv4\u7528\u6237\u8BF7\u6C42\u67E5\u627E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u800Cipv6\u7528\u6237\u7684\u8BF7\u6C42\u4F1A\u8DF3\u8FC7\u8BE5\u63D2\u4EF6\uFF0C\u7EE7\u7EED\u7531\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002 2. ipv6\uFF1A(\u672A\u6765\u5B9E\u73B0\u540E)\u53EA\u5BF9ipv6\u7528\u6237\u67E5\u627E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u800Cipv4\u7528\u6237\u7684\u8BF7\u6C42\u4F1A\u8DF3\u8FC7\u8BE5\u63D2\u4EF6\uFF0C\u7EE7\u7EED\u7531\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\uFF08\u76EE\u524D\u662F\u8DF3\u8FC7\u63D2\u4EF6\uFF0C\u8BF7\u6C42\u7531\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\uFF09</td></tr><tr><td>ip_source_type</td><td>string</td><td>\u5426</td><td>origin-source</td><td>\u53EF\u9009\u503C\uFF1A1. \u5BF9\u7AEFsocket ip\uFF1A<code dir="auto">origin-source</code>; 2. \u901A\u8FC7header\u83B7\u53D6\uFF1A<code dir="auto">header</code></td></tr><tr><td>ip_header_name</td><td>string</td><td>\u5426</td><td>x-forwarded-for</td><td>\u5F53<code dir="auto">ip_source_type</code>\u4E3A<code dir="auto">header</code>\u65F6\uFF0C\u6307\u5B9A\u81EA\u5B9A\u4E49IP\u6765\u6E90\u5934</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ipv4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Real-Ip</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_protocol: ipv4\x7Fip_source_type: header\x7Fip_header_name: X-Real-Ip"><div></div></button></div></figure></div>
<h2 id="\u751F\u6210geocidrtxt\u7684\u8BF4\u660E">\u751F\u6210geoCidr.txt\u7684\u8BF4\u660E</h2>
<p>\u5728generateCidr\u76EE\u5F55\u91CC\u5305\u542B\u7684ip.merge.txt\u6587\u4EF6\u662Fgithub\u4E0Aip2region\u9879\u76EE\u7684\u5168\u4E16\u754C\u7684ip\u7F51\u6BB5\u5E93\u3002 ipRange2Cidr.go \u662F\u628Aip\u7F51\u6BB5\u8F6C\u6362\u6210\u591A\u4E2Acidr\u7684\u7A0B\u5E8F\u3002\u8F6C\u6362\u51FA\u7684cidr \u548C\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u5B58\u5728 /data/geoCidr.txt\u6587\u4EF6\u91CC\u3002geo-ip\u63D2\u4EF6\u4F1A\u5728Higress\u542F\u52A8\u8BFB\u914D\u7F6E\u9636\u6BB5\u8BFB\u53D6geoCidr.txt\u6587\u4EF6\u5E76\u4E14\u89E3\u6790\u5230radixtree\u6570\u636E\u7ED3\u6784\u7684\u5185\u5B58\u91CC\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u67E5\u8BE2\u7528\u6237ip\u5BF9\u5E94\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u3002\u8F6C\u6362\u7A0B\u5E8F\u8FD0\u884C\u547D\u4EE4\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">generateCidr/ipRange2Cidr.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go run generateCidr/ipRange2Cidr.go"><div></div></button></div></figure></div>
<h2 id="property-\u7684\u4F7F\u7528\u65B9\u5F0F">property \u7684\u4F7F\u7528\u65B9\u5F0F</h2>
<p>\u5728geo-ip\u63D2\u4EF6\u91CC\u8C03\u7528proxywasm.SetProperty() \u5206\u522B\u628Acountry\u3001city\u3001province\u3001isp\u8BBE\u7F6E\u8FDB\u8BF7\u6C42\u5C5E\u6027\u91CC\uFF0C\u4EE5\u4FBF\u540E\u7EED\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528proxywasm.GetProperty()\u83B7\u53D6\u8BE5\u8BF7\u6C42\u7684\u7528\u6237ip\u5BF9\u5E94\u7684\u5730\u7406\u4FE1\u606F\u3002</p>`,r={title:"IP \u5730\u7406\u4F4D\u7F6E",keywords:["higress","geo ip"],description:"IP \u5730\u7406\u4F4D\u7F6E\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-o11y/geo-ip.md",p=void 0,s=function(){return`

## \u529F\u80FD\u8BF4\u660E

\`geo-ip\`\u672C\u63D2\u4EF6\u5B9E\u73B0\u4E86\u901A\u8FC7\u7528\u6237ip\u67E5\u8BE2\u51FA\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u7136\u540E\u901A\u8FC7\u8BF7\u6C42\u5C5E\u6027\u548C\u65B0\u6DFB\u52A0\u7684\u8BF7\u6C42\u5934\u628A\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`440\`

## \u914D\u7F6E\u5B57\u6BB5
| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B     | \u586B\u5199\u8981\u6C42    |  \u9ED8\u8BA4\u503C          | \u63CF\u8FF0      |
| --------        | --------    | --------   | --------          | -------- |
|  ip_protocol    |  string     |  \u5426        |   ipv4             |  \u53EF\u9009\u503C\uFF1A1. ipv4\uFF1A\u53EA\u5BF9ipv4\u7528\u6237\u8BF7\u6C42\u67E5\u627E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u800Cipv6\u7528\u6237\u7684\u8BF7\u6C42\u4F1A\u8DF3\u8FC7\u8BE5\u63D2\u4EF6\uFF0C\u7EE7\u7EED\u7531\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002 2. ipv6\uFF1A(\u672A\u6765\u5B9E\u73B0\u540E)\u53EA\u5BF9ipv6\u7528\u6237\u67E5\u627E\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u800Cipv4\u7528\u6237\u7684\u8BF7\u6C42\u4F1A\u8DF3\u8FC7\u8BE5\u63D2\u4EF6\uFF0C\u7EE7\u7EED\u7531\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\uFF08\u76EE\u524D\u662F\u8DF3\u8FC7\u63D2\u4EF6\uFF0C\u8BF7\u6C42\u7531\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\uFF09
|  ip_source_type |  string     |  \u5426        |   origin-source    |  \u53EF\u9009\u503C\uFF1A1. \u5BF9\u7AEFsocket ip\uFF1A\`origin-source\`; 2. \u901A\u8FC7header\u83B7\u53D6\uFF1A\`header\`  |
|  ip_header_name |  string     |  \u5426        |   x-forwarded-for  |  \u5F53\`ip_source_type\`\u4E3A\`header\`\u65F6\uFF0C\u6307\u5B9A\u81EA\u5B9A\u4E49IP\u6765\u6E90\u5934                      |


## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
ip_protocol: ipv4
ip_source_type: header
ip_header_name: X-Real-Ip
\`\`\`

## \u751F\u6210geoCidr.txt\u7684\u8BF4\u660E

\u5728generateCidr\u76EE\u5F55\u91CC\u5305\u542B\u7684ip.merge.txt\u6587\u4EF6\u662Fgithub\u4E0Aip2region\u9879\u76EE\u7684\u5168\u4E16\u754C\u7684ip\u7F51\u6BB5\u5E93\u3002 ipRange2Cidr.go \u662F\u628Aip\u7F51\u6BB5\u8F6C\u6362\u6210\u591A\u4E2Acidr\u7684\u7A0B\u5E8F\u3002\u8F6C\u6362\u51FA\u7684cidr \u548C\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u5B58\u5728 /data/geoCidr.txt\u6587\u4EF6\u91CC\u3002geo-ip\u63D2\u4EF6\u4F1A\u5728Higress\u542F\u52A8\u8BFB\u914D\u7F6E\u9636\u6BB5\u8BFB\u53D6geoCidr.txt\u6587\u4EF6\u5E76\u4E14\u89E3\u6790\u5230radixtree\u6570\u636E\u7ED3\u6784\u7684\u5185\u5B58\u91CC\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u67E5\u8BE2\u7528\u6237ip\u5BF9\u5E94\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u3002\u8F6C\u6362\u7A0B\u5E8F\u8FD0\u884C\u547D\u4EE4\u5982\u4E0B\uFF1A

\`\`\`bash
go run generateCidr/ipRange2Cidr.go
\`\`\`

## property \u7684\u4F7F\u7528\u65B9\u5F0F
\u5728geo-ip\u63D2\u4EF6\u91CC\u8C03\u7528proxywasm.SetProperty() \u5206\u522B\u628Acountry\u3001city\u3001province\u3001isp\u8BBE\u7F6E\u8FDB\u8BF7\u6C42\u5C5E\u6027\u91CC\uFF0C\u4EE5\u4FBF\u540E\u7EED\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528proxywasm.GetProperty()\u83B7\u53D6\u8BE5\u8BF7\u6C42\u7684\u7528\u6237ip\u5BF9\u5E94\u7684\u5730\u7406\u4FE1\u606F\u3002
`},o=function(){return e},a=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:2,slug:"\u751F\u6210geocidrtxt\u7684\u8BF4\u660E",text:"\u751F\u6210geoCidr.txt\u7684\u8BF4\u660E"},{depth:2,slug:"property-\u7684\u4F7F\u7528\u65B9\u5F0F",text:"property \u7684\u4F7F\u7528\u65B9\u5F0F"}]},t=n((_,x,m)=>{const{layout:C,...d}=r;return d.file=i,d.url=p,l`${g()}${h(e)}`})});export{t as Content,v as __tla,o as compiledContent,t as default,i as file,r as frontmatter,a as getHeadings,s as rawContent,p as url};
