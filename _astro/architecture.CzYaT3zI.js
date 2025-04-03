import{c,__tla as p}from"./astro-component.m4CCZO6J.js";import{r,m as u,u as g,__tla as y}from"./constant.DUMFLcxs.js";import{__tla as v}from"./astro/assets-service.BhtN0nM5.js";let e,l,t,i,d,n,a,h=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="higress-controller">Higress Controller</h2>
<p>Higress \u7684\u63A7\u5236\u9762\u7A0B\u5E8F\uFF0C\u4F1A\u8FDE\u63A5 Istio \uFF0C\u7528\u4E8E\u751F\u6210 Istio API \u5BF9\u8C61\uFF0C\u901A\u8FC7 xDS \u534F\u8BAE\u53D1\u9001\u7ED9 Istio\u3002</p>
<p>\u5728 higress \u4ED3\u5E93\u76EE\u5F55\u4E0B\u6267\u884C <code dir="auto">make build</code> \u5373\u53EF\u8FDB\u884C\u672C\u5730\u73AF\u5883\u80FD\u8FD0\u884C\u7684\u4E8C\u8FDB\u5236\u7F16\u8BD1</p>
<p>\u82E5\u9700\u8981\u7F16\u8BD1 docker \u955C\u50CF\uFF0C\u8BF7\u6267\u884C <code dir="auto">make docker-build</code>\u3002Higress Controller\u4F7F\u7528\u7684Istio pilot\u955C\u50CF\u4F7F\u7528<code dir="auto">make build-istio-local</code> \u7F16\u8BD1\u3002</p>
<h3 id="\u7ED9\u65B0\u624B\u7684\u4E00\u4E9Btips">\u7ED9\u65B0\u624B\u7684\u4E00\u4E9Btips\uFF1A</h3>
<p>\u5982\u679C\u5728Linux\u670D\u52A1\u5668\u7F16\u8BD1\u6253\u5305\u65F6\u53D1\u73B0\u4F7F\u7528https\u65B9\u5F0Fclone\u5B50\u9879\u76EE\u5931\u8D25\uFF0C\u5982\u8FDE\u63A5\u8D85\u65F6\u7B49\u5BFC\u81F4\u4E0B\u8F7D\u4F9D\u8D56\u51FA\u9519\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539submodule\u914D\u7F6E\u4E3Assh\uFF0C\u5E76\u914D\u7F6EGOPROXY\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u524D\u63D0\u662F\u5DF2\u7ECF\u5728github\u4E2D\u914D\u7F6E\u4E86\u672C\u5730\u516C\u94A5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u4FEE\u6539https\u65B9\u5F0F\u4E3Assh\u65B9\u5F0F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sed</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'s|https://github.com/|git@github.com:|g'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.gitmodules</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u540C\u6B65.git/config\u4E2D\u7684\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">submodule</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">sync</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u4FEE\u6539Makefile.core.mk\u4E2D\u7684GOPROXY\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#export GOPROXY ?= https://proxy.golang.org,direct</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> GOPROXY </span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">= https://goproxy.cn,direct</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sed -i &#x27;s|https://github.com/|git@github.com:|g&#x27; .gitmodules\x7Fgit submodule sync\x7Fexport GOPROXY ?= https://goproxy.cn,direct"><div></div></button></div></figure></div>
<p>\u53E6\u5916\uFF0C\u5728windows\u4E2D\u5F00\u53D1\u65F6\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8FDB\u884C\u4EE3\u7801\u5F00\u53D1\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\u5B8C\u6210\u4F9D\u8D56\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u5982\u679Chttps\u65B9\u5F0F\u65E0\u6CD5clone submodule\uFF0C\u5219\u540C\u4E0A\u4FEE\u6539.gitmodules\u914D\u7F6E\uFF0C\u5E76\u6267\u884Cgit submodule sync\u540C\u6B65</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u521D\u59CB\u5316submodule\uFF08\u5982\u679C\u6267\u884C\u8FD9\u6761\u547D\u4EE4\u53D1\u73B0\u90E8\u5206submodule\u6CA1\u6709clone\uFF0C\u53EF\u4EE5\u6DFB\u52A0 --force\uFF09\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">submodule</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--init</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u4F7F\u7528Git Bash\u5DE5\u5177\uFF0C\u8FDB\u5165tools/hack\u76EE\u5F55\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210\u4F9D\u8D56\u52A0\u8F7D\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild.sh</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git submodule update --init\x7Fbash -x prebuild.sh"><div></div></button></div></figure></div>
<h2 id="higress-gateway">Higress Gateway</h2>
<p>Higress \u7684\u6570\u636E\u9762\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u8F6C\u53D1\u7B49\u80FD\u529B\u3002</p>
<h3 id="\u5FEB\u901F\u6784\u5EFA">\u5FEB\u901F\u6784\u5EFA</h3>
<p>\u9002\u7528\u573A\u666F\uFF1A\u672A\u5BF9 Envoy \u672C\u4F53\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u5373\u4E0D\u9700\u8981\u91CD\u65B0\u7F16\u8BD1 Envoy \u672C\u4F53\u7684\u60C5\u51B5</p>
<p>\u6784\u5EFA\u6B65\u9AA4\uFF1A</p>
<ol>
<li>\u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 higress \u4ED3\u5E93\u76EE\u5F55\uFF1B</li>
<li>\u6267\u884C <code dir="auto">make build-gateway-local</code> \u547D\u4EE4\uFF0C\u8FDB\u884C Higress Gateway \u955C\u50CF\u7684\u6784\u5EFA\uFF1B</li>
<li>\u6784\u5EFA\u5B8C\u6210\u540E\u4F1A\u8F93\u51FA\u955C\u50CF tag\u3002</li>
</ol>
<h3 id="\u5B8C\u6574\u6784\u5EFA">\u5B8C\u6574\u6784\u5EFA</h3>
<p>\u9002\u7528\u573A\u666F\uFF1A\u9700\u8981\u91CD\u65B0\u7F16\u8BD1 Envoy \u672C\u4F53\u7684\u60C5\u51B5</p>
<p>\u6784\u5EFA\u6B65\u9AA4\uFF1A</p>
<ol>
<li>\u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 higress \u4ED3\u5E93\u76EE\u5F55\uFF1B</li>
<li>\u6267\u884C <code dir="auto">make build-envoy</code> \u547D\u4EE4\uFF0C\u6784\u5EFA Envoy \u672C\u4F53\uFF1B</li>
<li>\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u7684 envoy \u4EA7\u7269\u6587\u4EF6\uFF08tar.gz \u540E\u7F6E\u7684\u538B\u7F29\u5305\uFF09\u4F1A\u653E\u5728 higress \u4ED3\u5E93\u76EE\u5F55\u7684 <code dir="auto">external/package</code> \u5B50\u76EE\u5F55\u5185\uFF1B</li>
<li>\u5C06\u6784\u5EFA\u5B8C\u6210\u540E\u8F93\u51FA\u7684 tar.gz \u6587\u4EF6\uFF0C\u653E\u5230 OSS \u6216\u5176\u4ED6\u6587\u4EF6\u4E0B\u8F7D\u670D\u52A1\u5668\u4E0A\uFF0C\u6CE8\u610F\u6587\u4EF6\u540D\u8981\u4EE5\u67B6\u6784\u540D\u7ED3\u5C3E\uFF0C\u4F8B\u5982 <code dir="auto">envoy-amd64.tar.gz</code> \u6216\u8005 <code dir="auto">envoy-arm64.tar.gz</code>\uFF1B</li>
<li>\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF<code dir="auto">ENVOY_PACKAGE_URL_PATTERN</code>\u4E3A envoy \u4EA7\u7269\u6587\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740\uFF0C\u53C2\u8003\u4E0A\u9762\u7684\u5FEB\u901F\u6784\u5EFA\u6B65\u9AA4\uFF0C\u6784\u5EFA Higress Gateway \u955C\u50CF</li>
</ol>`,i={title:"\u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E",keywords:["higress","architecture"],description:"Higress \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E."},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/architecture.md",a=void 0,n=function(){return`
# \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E

## Higress Controller

Higress \u7684\u63A7\u5236\u9762\u7A0B\u5E8F\uFF0C\u4F1A\u8FDE\u63A5 Istio \uFF0C\u7528\u4E8E\u751F\u6210 Istio API \u5BF9\u8C61\uFF0C\u901A\u8FC7 xDS \u534F\u8BAE\u53D1\u9001\u7ED9 Istio\u3002

\u5728 higress \u4ED3\u5E93\u76EE\u5F55\u4E0B\u6267\u884C \`make build\` \u5373\u53EF\u8FDB\u884C\u672C\u5730\u73AF\u5883\u80FD\u8FD0\u884C\u7684\u4E8C\u8FDB\u5236\u7F16\u8BD1

\u82E5\u9700\u8981\u7F16\u8BD1 docker \u955C\u50CF\uFF0C\u8BF7\u6267\u884C \`make docker-build\`\u3002Higress Controller\u4F7F\u7528\u7684Istio pilot\u955C\u50CF\u4F7F\u7528\`make build-istio-local\` \u7F16\u8BD1\u3002

### \u7ED9\u65B0\u624B\u7684\u4E00\u4E9Btips\uFF1A

\u5982\u679C\u5728Linux\u670D\u52A1\u5668\u7F16\u8BD1\u6253\u5305\u65F6\u53D1\u73B0\u4F7F\u7528https\u65B9\u5F0Fclone\u5B50\u9879\u76EE\u5931\u8D25\uFF0C\u5982\u8FDE\u63A5\u8D85\u65F6\u7B49\u5BFC\u81F4\u4E0B\u8F7D\u4F9D\u8D56\u51FA\u9519\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539submodule\u914D\u7F6E\u4E3Assh\uFF0C\u5E76\u914D\u7F6EGOPROXY\uFF1A

\`\`\`bash
#\u524D\u63D0\u662F\u5DF2\u7ECF\u5728github\u4E2D\u914D\u7F6E\u4E86\u672C\u5730\u516C\u94A5
#\u4FEE\u6539https\u65B9\u5F0F\u4E3Assh\u65B9\u5F0F
sed -i 's|https://github.com/|git@github.com:|g' .gitmodules
#\u540C\u6B65.git/config\u4E2D\u7684\u914D\u7F6E
git submodule sync
#\u4FEE\u6539Makefile.core.mk\u4E2D\u7684GOPROXY\u914D\u7F6E
#export GOPROXY ?= https://proxy.golang.org,direct
export GOPROXY ?= https://goproxy.cn,direct
\`\`\`

\u53E6\u5916\uFF0C\u5728windows\u4E2D\u5F00\u53D1\u65F6\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8FDB\u884C\u4EE3\u7801\u5F00\u53D1\uFF0C\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u6B65\u9AA4\u5B8C\u6210\u4F9D\u8D56\u914D\u7F6E\uFF1A

\`\`\`bash
#\u5982\u679Chttps\u65B9\u5F0F\u65E0\u6CD5clone submodule\uFF0C\u5219\u540C\u4E0A\u4FEE\u6539.gitmodules\u914D\u7F6E\uFF0C\u5E76\u6267\u884Cgit submodule sync\u540C\u6B65
#\u521D\u59CB\u5316submodule\uFF08\u5982\u679C\u6267\u884C\u8FD9\u6761\u547D\u4EE4\u53D1\u73B0\u90E8\u5206submodule\u6CA1\u6709clone\uFF0C\u53EF\u4EE5\u6DFB\u52A0 --force\uFF09\uFF1A
git submodule update --init
#\u4F7F\u7528Git Bash\u5DE5\u5177\uFF0C\u8FDB\u5165tools/hack\u76EE\u5F55\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B8C\u6210\u4F9D\u8D56\u52A0\u8F7D\uFF1A
bash -x prebuild.sh
\`\`\`

## Higress Gateway

Higress \u7684\u6570\u636E\u9762\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u8F6C\u53D1\u7B49\u80FD\u529B\u3002

### \u5FEB\u901F\u6784\u5EFA

\u9002\u7528\u573A\u666F\uFF1A\u672A\u5BF9 Envoy \u672C\u4F53\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u5373\u4E0D\u9700\u8981\u91CD\u65B0\u7F16\u8BD1 Envoy \u672C\u4F53\u7684\u60C5\u51B5

\u6784\u5EFA\u6B65\u9AA4\uFF1A
1. \u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 higress \u4ED3\u5E93\u76EE\u5F55\uFF1B
2. \u6267\u884C \`make build-gateway-local\` \u547D\u4EE4\uFF0C\u8FDB\u884C Higress Gateway \u955C\u50CF\u7684\u6784\u5EFA\uFF1B
3. \u6784\u5EFA\u5B8C\u6210\u540E\u4F1A\u8F93\u51FA\u955C\u50CF tag\u3002

### \u5B8C\u6574\u6784\u5EFA

\u9002\u7528\u573A\u666F\uFF1A\u9700\u8981\u91CD\u65B0\u7F16\u8BD1 Envoy \u672C\u4F53\u7684\u60C5\u51B5

\u6784\u5EFA\u6B65\u9AA4\uFF1A
1. \u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 higress \u4ED3\u5E93\u76EE\u5F55\uFF1B
2. \u6267\u884C \`make build-envoy\` \u547D\u4EE4\uFF0C\u6784\u5EFA Envoy \u672C\u4F53\uFF1B
3. \u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u751F\u6210\u7684 envoy \u4EA7\u7269\u6587\u4EF6\uFF08tar.gz \u540E\u7F6E\u7684\u538B\u7F29\u5305\uFF09\u4F1A\u653E\u5728 higress \u4ED3\u5E93\u76EE\u5F55\u7684 \`external/package\` \u5B50\u76EE\u5F55\u5185\uFF1B
4. \u5C06\u6784\u5EFA\u5B8C\u6210\u540E\u8F93\u51FA\u7684 tar.gz \u6587\u4EF6\uFF0C\u653E\u5230 OSS \u6216\u5176\u4ED6\u6587\u4EF6\u4E0B\u8F7D\u670D\u52A1\u5668\u4E0A\uFF0C\u6CE8\u610F\u6587\u4EF6\u540D\u8981\u4EE5\u67B6\u6784\u540D\u7ED3\u5C3E\uFF0C\u4F8B\u5982 \`envoy-amd64.tar.gz\` \u6216\u8005 \`envoy-arm64.tar.gz\`\uFF1B
5. \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\`ENVOY_PACKAGE_URL_PATTERN\`\u4E3A envoy \u4EA7\u7269\u6587\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740\uFF0C\u53C2\u8003\u4E0A\u9762\u7684\u5FEB\u901F\u6784\u5EFA\u6B65\u9AA4\uFF0C\u6784\u5EFA Higress Gateway \u955C\u50CF
`},l=function(){return s},d=function(){return[{depth:2,slug:"higress-controller",text:"Higress Controller"},{depth:3,slug:"\u7ED9\u65B0\u624B\u7684\u4E00\u4E9Btips",text:"\u7ED9\u65B0\u624B\u7684\u4E00\u4E9Btips\uFF1A"},{depth:2,slug:"higress-gateway",text:"Higress Gateway"},{depth:3,slug:"\u5FEB\u901F\u6784\u5EFA",text:"\u5FEB\u901F\u6784\u5EFA"},{depth:3,slug:"\u5B8C\u6574\u6784\u5EFA",text:"\u5B8C\u6574\u6784\u5EFA"}]},e=c((m,E,b)=>{const{layout:x,...o}=i;return o.file=t,o.url=a,r`${u()}${g(s)}`})});export{e as Content,h as __tla,l as compiledContent,e as default,t as file,i as frontmatter,d as getHeadings,n as rawContent,a as url};
