import{c as r,__tla as c}from"./astro-component.CXlaF79K.js";import{r as d,m as y,u as E,__tla as v}from"./constant.DB78Y6zg.js";import{__tla as u}from"./astro/assets-service.DQopRnBr.js";let e,i,n,a,l,o,t,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<p>\u5982\u679C\u60A8\u60F3\u7ED9 Higress \u8D21\u732E\u4EE3\u7801\uFF0C\u8BF7\u53C2\u8003<a href="../../developers/guide_dev/" referrerpolicy="unsafe-url">\u53C2\u4E0E\u8D21\u732E</a></p>
<p>\u4EE3\u7801\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E</p>
<ul>
<li>
<p>cmd: \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801</p>
</li>
<li>
<p>pkg/ingress: Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801</p>
</li>
<li>
<p>pkg/bootstrap: \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801</p>
</li>
<li>
<p>registry: \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801</p>
</li>
<li>
<p>envoy: \u4F9D\u8D56\u7684 envoy \u4ED3\u5E93 commit</p>
</li>
<li>
<p>istio: \u4F9D\u8D56\u7684 istio \u4ED3\u5E93 commit</p>
</li>
<li>
<p>plugins: Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801</p>
</li>
<li>
<p>script: \u7F16\u8BD1\u76F8\u5173\u811A\u672C</p>
</li>
<li>
<p>docker: docker \u955C\u50CF\u6784\u5EFA\u76F8\u5173\u811A\u672C</p>
</li>
</ul>
<p>\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u6267\u884C<code dir="auto">make prebuild</code>\uFF0C\u5C06\u4EA7\u751F <code dir="auto">external</code> \u76EE\u5F55\uFF0C\u8FD9\u662F\u5C06\u7528\u5230\u7684 envoy \u548C istio \u4F9D\u8D56</p>
<p>\u5982\u679C\u8981\u4FEE\u6539 envoy \u548C istio \u4EE3\u7801\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 external \u76EE\u5F55\u4E0B\u4FEE\u6539\uFF0C\u5E76\u8FDB\u884C\u91CD\u547D\u540D\uFF0C\u518D\u6267\u884C prebuild\uFF0C\u4E4B\u540E\u5BF9\u6BD4\u751F\u6210\u8865\u4E01\u6587\u4EF6\uFF0C\u4F8B\u5982:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy_new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">diff</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Naur</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy_new</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy.patch</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mv external/envoy external/envoy_new\x7Fmake prebuild\x7Fcd external\x7Fdiff -Naur envoy envoy_new > envoy.patch"><div></div></button></div></figure></div>
<p>\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5C06\u5BF9\u5E94\u7684\u8865\u4E01\u6587\u4EF6\uFF0Cpatch \u5230 envoy \u6216 istio \u7684\u4ED3\u5E93\u91CC\u8FDB\u884C\u63D0\u4EA4.</p>
<p>\u9996\u5148 fork higress \u7684 <a href="https://github.com/higress-group/envoy" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy</a> \u6216 <a href="https://github.com/higress-group/istio" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">istio</a> \u4ED3\u5E93\uFF0C\u63A5\u7740\u63A8\u9001\u4F60\u7684\u6539\u52A8\uFF0C\u5E76\u63D0\u4EA4 PR\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clone</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/&#x3C;your-fork>/envoy.git</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">checkout</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-b</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;Your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">branch</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name></span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">patch</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy.patch</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">commit</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x3C;</span><span style="--0:#9ECBFF">Your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">change</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">info></span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">origin</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;Your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">branch</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git clone https://github.com/<your-fork>/envoy.git\x7Fcd envoy\x7Fgit checkout -b <Your branch name>\x7Fpatch -p1 < envoy.patch\x7Fgit add -u\x7Fgit commit -m <Your change info>\x7Fgit push origin <Your branch name>"><div></div></button></div></figure></div>`,a={title:"\u6E90\u7801\u9605\u8BFB\u6307\u5F15",keywords:["higress","coding"],description:"Higress \u6E90\u7801\u9605\u8BFB\u6307\u5F15.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/code.md"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/code.md",t=void 0,o=function(){return`
# \u6E90\u7801\u9605\u8BFB\u6307\u5F15

\u5982\u679C\u60A8\u60F3\u7ED9 Higress \u8D21\u732E\u4EE3\u7801\uFF0C\u8BF7\u53C2\u8003[\u53C2\u4E0E\u8D21\u732E](../developers/guide_dev.md)

\u4EE3\u7801\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E

- cmd: \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801

- pkg/ingress: Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801

- pkg/bootstrap: \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801

- registry: \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801

- envoy: \u4F9D\u8D56\u7684 envoy \u4ED3\u5E93 commit

- istio: \u4F9D\u8D56\u7684 istio \u4ED3\u5E93 commit

- plugins: Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801

- script: \u7F16\u8BD1\u76F8\u5173\u811A\u672C

- docker: docker \u955C\u50CF\u6784\u5EFA\u76F8\u5173\u811A\u672C

\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u6267\u884C\`make prebuild\`\uFF0C\u5C06\u4EA7\u751F \`external\` \u76EE\u5F55\uFF0C\u8FD9\u662F\u5C06\u7528\u5230\u7684 envoy \u548C istio \u4F9D\u8D56

\u5982\u679C\u8981\u4FEE\u6539 envoy \u548C istio \u4EE3\u7801\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 external \u76EE\u5F55\u4E0B\u4FEE\u6539\uFF0C\u5E76\u8FDB\u884C\u91CD\u547D\u540D\uFF0C\u518D\u6267\u884C prebuild\uFF0C\u4E4B\u540E\u5BF9\u6BD4\u751F\u6210\u8865\u4E01\u6587\u4EF6\uFF0C\u4F8B\u5982:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > envoy.patch
\`\`\`

\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5C06\u5BF9\u5E94\u7684\u8865\u4E01\u6587\u4EF6\uFF0Cpatch \u5230 envoy \u6216 istio \u7684\u4ED3\u5E93\u91CC\u8FDB\u884C\u63D0\u4EA4.

\u9996\u5148 fork higress \u7684 [envoy](https://github.com/higress-group/envoy) \u6216 [istio](https://github.com/higress-group/istio) \u4ED3\u5E93\uFF0C\u63A5\u7740\u63A8\u9001\u4F60\u7684\u6539\u52A8\uFF0C\u5E76\u63D0\u4EA4 PR\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
git clone https://github.com/<your-fork>/envoy.git
cd envoy
git checkout -b <Your branch name>
patch -p1 < envoy.patch
git add -u
git commit -m <Your change info>
git push origin <Your branch name>
\`\`\`
`},i=function(){return s},l=function(){return[]},e=r((F,h,m)=>{const{layout:f,...p}=a;return p.file=n,p.url=t,d`${y()}${E(s)}`})});export{e as Content,g as __tla,i as compiledContent,e as default,n as file,a as frontmatter,l as getHeadings,o as rawContent,t as url};
