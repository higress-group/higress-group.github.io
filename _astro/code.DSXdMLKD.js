import{c as p,r as o,m as r}from"./render-template.CJlwwtnB.js";import{u as l}from"./constant.CxavaNFL.js";import"./preload-helper.BiBI96sQ.js";const s=`<p>\u5982\u679C\u60A8\u60F3\u7ED9 Higress \u8D21\u732E\u4EE3\u7801\uFF0C\u8BF7\u53C2\u8003<a href="../../developers/guide_dev/" referrerpolicy="unsafe-url">\u53C2\u4E0E\u8D21\u732E</a></p>
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
<p>envoy: \u4F9D\u8D56\u7684 envoy \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801</p>
</li>
<li>
<p>istio: \u4F9D\u8D56\u7684 istio \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801</p>
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
<p>\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u6267\u884C<code dir="auto">make prebuild</code>\uFF0C\u5C06\u4EA7\u751F <code dir="auto">external</code> \u76EE\u5F55\uFF0C\u8FD9\u662F\u5C06\u7528\u5230\u7684 envoy \u548C istio \u4F9D\u8D56\uFF0C\u6253\u4E0A\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801\u540E\u751F\u6210\u3002</p>
<p>\u5982\u679C\u8981\u4FEE\u6539 envoy \u548C istio \u4EE3\u7801\uFF0C\u5E76\u4EA7\u751F\u65B0\u7684\u8865\u4E01\u6587\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 external \u76EE\u5F55\u4E0B\u4FEE\u6539\uFF0C\u5E76\u8FDB\u884C\u91CD\u547D\u540D\uFF0C\u518D\u6267\u884C prebuild\uFF0C\u4E4B\u540E\u5BF9\u6BD4\u751F\u6210\u8865\u4E01\u6587\u4EF6\uFF0C\u4F8B\u5982:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy_new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">diff</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Naur</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy_new</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">../envoy/1.20/patches/envoy/</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">date</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+%Y%m%d</span><span style="--0:#E1E4E8">)</span><span style="--0:#9ECBFF">-what-changed.patch</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mv external/envoy external/envoy_new\x7Fmake prebuild\x7Fcd external\x7Fdiff -Naur envoy envoy_new > ../envoy/1.20/patches/envoy/$(date +%Y%m%d)-what-changed.patch"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\u8865\u4E01\u6267\u884C\u987A\u5E8F\u6309\u7167\u6587\u4EF6\u540D\u5B57\u7B26\u987A\u5E8F\uFF0C\u8BF7\u4EE5\u65F6\u95F4\u6233\u5F00\u5934</p>`,n={title:"\u6E90\u7801\u9605\u8BFB\u6307\u5F15",keywords:["higress","coding"],description:"Higress \u6E90\u7801\u9605\u8BFB\u6307\u5F15.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/code.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/code.md",i=void 0;function d(){return`
# \u6E90\u7801\u9605\u8BFB\u6307\u5F15

\u5982\u679C\u60A8\u60F3\u7ED9 Higress \u8D21\u732E\u4EE3\u7801\uFF0C\u8BF7\u53C2\u8003[\u53C2\u4E0E\u8D21\u732E](../developers/guide_dev.md)

\u4EE3\u7801\u76EE\u5F55\u7ED3\u6784\u8BF4\u660E

- cmd: \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801

- pkg/ingress: Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801

- pkg/bootstrap: \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801

- registry: \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801

- envoy: \u4F9D\u8D56\u7684 envoy \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801

- istio: \u4F9D\u8D56\u7684 istio \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801

- plugins: Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801

- script: \u7F16\u8BD1\u76F8\u5173\u811A\u672C

- docker: docker \u955C\u50CF\u6784\u5EFA\u76F8\u5173\u811A\u672C

\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u4F1A\u81EA\u52A8\u6267\u884C\`make prebuild\`\uFF0C\u5C06\u4EA7\u751F \`external\` \u76EE\u5F55\uFF0C\u8FD9\u662F\u5C06\u7528\u5230\u7684 envoy \u548C istio \u4F9D\u8D56\uFF0C\u6253\u4E0A\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801\u540E\u751F\u6210\u3002

\u5982\u679C\u8981\u4FEE\u6539 envoy \u548C istio \u4EE3\u7801\uFF0C\u5E76\u4EA7\u751F\u65B0\u7684\u8865\u4E01\u6587\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 external \u76EE\u5F55\u4E0B\u4FEE\u6539\uFF0C\u5E76\u8FDB\u884C\u91CD\u547D\u540D\uFF0C\u518D\u6267\u884C prebuild\uFF0C\u4E4B\u540E\u5BF9\u6BD4\u751F\u6210\u8865\u4E01\u6587\u4EF6\uFF0C\u4F8B\u5982:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > ../envoy/1.20/patches/envoy/$(date +%Y%m%d)-what-changed.patch
\`\`\`

\u6CE8\u610F\u8865\u4E01\u6267\u884C\u987A\u5E8F\u6309\u7167\u6587\u4EF6\u540D\u5B57\u7B26\u987A\u5E8F\uFF0C\u8BF7\u4EE5\u65F6\u95F4\u6233\u5F00\u5934
`}function c(){return s}function y(){return[]}const t=p((v,u,E)=>{const{layout:g,...e}=n;return e.file=a,e.url=i,o`${r()}${l(s)}`});export{t as Content,c as compiledContent,t as default,a as file,n as frontmatter,y as getHeadings,d as rawContent,i as url};
