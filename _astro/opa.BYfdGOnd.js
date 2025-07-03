import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as E,__tla as y}from"./constant.ZI3O5-xu.js";import{__tla as u}from"./astro/assets-service.BhtN0nM5.js";let e,p,a,t,i,l,n,F=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u4E86 <code dir="auto">OPA</code> \u7B56\u7565\u63A7\u5236</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">225</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>





























































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>policy</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>opa \u7B56\u7565</td></tr><tr><td>timeout</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E</td></tr><tr><td>serviceSource</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>k8s,nacos,ip,route</td></tr><tr><td>host</td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u670D\u52A1\u4E3B\u673A\uFF08serviceSource\u4E3A<code dir="auto">ip</code>\u5FC5\u586B\uFF09</td></tr><tr><td>serviceName</td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u670D\u52A1\u540D\u79F0\uFF08serviceSource\u4E3A<code dir="auto">k8s,nacos,ip</code>\u5FC5\u586B\uFF09</td></tr><tr><td>servicePort</td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u670D\u52A1\u7AEF\u53E3\uFF08serviceSource\u4E3A<code dir="auto">k8s,nacos,ip</code>\u5FC5\u586B\uFF09</td></tr><tr><td>namespace</td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u670D\u52A1\u7AEF\u53E3\uFF08serviceSource\u4E3A<code dir="auto">k8s,nacos</code>\u5FC5\u586B\uFF09</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k8s</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">opa</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8181</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-backend</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">5s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceSource: k8s\x7FserviceName: opa\x7FservicePort: 8181\x7Fnamespace: higress-backend\x7Fpolicy: example1\x7Ftimeout: 5s"><div></div></button></div></figure></div>
<h2 id="opa-\u670D\u52A1\u5B89\u88C5\u53C2\u8003">OPA \u670D\u52A1\u5B89\u88C5\u53C2\u8003</h2>
<h3 id="\u542F\u52A8-opa-\u670D\u52A1">\u542F\u52A8 OPA \u670D\u52A1</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">opa</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8181:8181</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">openpolicyagent/opa:0.35.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s"><div></div></button></div></figure></div>
<h3 id="\u521B\u5EFA-opa-\u7B56\u7565">\u521B\u5EFA OPA \u7B56\u7565</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PUT</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'127.0.0.1:8181/v1/policies/example1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: text/plain'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'package example1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">import input.request</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">default allow = false</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">allow {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF"># HTTP method must GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">request.method == "GET"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X PUT &#x27;127.0.0.1:8181/v1/policies/example1&#x27; \\\x7F  -H &#x27;Content-Type: text/plain&#x27; \\\x7F  -d &#x27;package example1\x7F\x7Fimport input.request\x7F\x7Fdefault allow = false\x7F\x7Fallow {\x7F    request.method == &#x22;GET&#x22;\x7F}&#x27;"><div></div></button></div></figure></div>
<h3 id="\u67E5\u8BE2\u7B56\u7565">\u67E5\u8BE2\u7B56\u7565</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'127.0.0.1:8181/v1/data/example1/allow'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"input":{"request":{"method":"GET"}}}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;127.0.0.1:8181/v1/data/example1/allow&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{&#x22;input&#x22;:{&#x22;request&#x22;:{&#x22;method&#x22;:&#x22;GET&#x22;}}}&#x27;"><div></div></button></div></figure></div>`,t={title:"OPA",keywords:["higress","opa"],description:"OPA \u7B56\u7565\u63A7\u5236\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/opa.md",n=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E

\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u4E86 \`OPA\` \u7B56\u7565\u63A7\u5236

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`225\`

## \u914D\u7F6E\u5B57\u6BB5

| \u5B57\u6BB5            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                   |
|---------------|--------|------|-----|--------------------------------------|
| policy        | string | \u5FC5\u586B   | -   | opa \u7B56\u7565                               |
| timeout       | string | \u5FC5\u586B   | -   | \u8BBF\u95EE\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E                             |
| serviceSource | string | \u5FC5\u586B   | -   | k8s,nacos,ip,route                   |
| host          | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u4E3B\u673A\uFF08serviceSource\u4E3A\`ip\`\u5FC5\u586B\uFF09           |
| serviceName   | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u540D\u79F0\uFF08serviceSource\u4E3A\`k8s,nacos,ip\`\u5FC5\u586B\uFF09 |
| servicePort   | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u7AEF\u53E3\uFF08serviceSource\u4E3A\`k8s,nacos,ip\`\u5FC5\u586B\uFF09 |
| namespace     | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u7AEF\u53E3\uFF08serviceSource\u4E3A\`k8s,nacos\`\u5FC5\u586B\uFF09    |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
serviceSource: k8s
serviceName: opa
servicePort: 8181
namespace: higress-backend
policy: example1
timeout: 5s
\`\`\`

## OPA \u670D\u52A1\u5B89\u88C5\u53C2\u8003

### \u542F\u52A8 OPA \u670D\u52A1

\`\`\`shell
docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s
\`\`\`

### \u521B\u5EFA OPA \u7B56\u7565

\`\`\`shell
curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\
  -H 'Content-Type: text/plain' \\
  -d 'package example1

import input.request

default allow = false

allow {
    # HTTP method must GET
    request.method == "GET"
}'
\`\`\`

### \u67E5\u8BE2\u7B56\u7565

\`\`\`shell
curl -X POST '127.0.0.1:8181/v1/data/example1/allow' \\
  -H 'Content-Type: application/json' \\
  -d '{"input":{"request":{"method":"GET"}}}'
\`\`\`
`},p=function(){return s},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:2,slug:"opa-\u670D\u52A1\u5B89\u88C5\u53C2\u8003",text:"OPA \u670D\u52A1\u5B89\u88C5\u53C2\u8003"},{depth:3,slug:"\u542F\u52A8-opa-\u670D\u52A1",text:"\u542F\u52A8 OPA \u670D\u52A1"},{depth:3,slug:"\u521B\u5EFA-opa-\u7B56\u7565",text:"\u521B\u5EFA OPA \u7B56\u7565"},{depth:3,slug:"\u67E5\u8BE2\u7B56\u7565",text:"\u67E5\u8BE2\u7B56\u7565"}]},e=c((h,x,m)=>{const{layout:g,...d}=t;return d.file=a,d.url=n,r`${v()}${E(s)}`})});export{e as Content,F as __tla,p as compiledContent,e as default,a as file,t as frontmatter,i as getHeadings,l as rawContent,n as url};
