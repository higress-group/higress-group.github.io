import{c as d,__tla as E}from"./astro-component.DIa0fJKh.js";import{r as o,m as y,u as c,__tla as h}from"./constant.Cs5LLcwe.js";import{__tla as g}from"./astro/assets-service.tyfV9CK3.js";let e,l,a,n,i,r,t,u=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s='<h2 id="\u4E91\u539F\u751F\u90E8\u7F72">\u4E91\u539F\u751F\u90E8\u7F72</h2>\n<h3 id="\u57FA\u4E8E-helm-\u5B9E\u73B0\u7248\u672C\u5347\u7EA7">\u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7</h3>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ${higress_version} \u7684\u503C\u793A\u4F8B: v2.0.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/alibaba/higress/releases/download/</span><span style="--0:#E1E4E8">${higress_version}</span><span style="--0:#9ECBFF">/crd.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f https://github.com/alibaba/higress/releases/download/${higress_version}/crd.yaml\x7Fhelm repo update\x7Fhelm get values higress -n higress-system > values.yaml\x7Fhelm upgrade higress -n higress-system higress.io/higress -f values.yaml"><div></div></button></div></figure></div>\n<p>\u4E0D\u5EFA\u8BAE\u4F7F\u7528 \u2014reuse-values\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u7EE7\u627F\u6240\u6709\u4E0A\u4E00\u4E2A\u7248\u672C\u7684 values\u3002</p>\n<h2 id="\u72EC\u7ACB\u90E8\u7F72">\u72EC\u7ACB\u90E8\u7F72</h2>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ${higress_dir} \u4E3A Higress \u72EC\u7ACB\u90E8\u7F72\u7684\u5B89\u88C5\u76EE\u5F55</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"${</span><span style="--0:#E1E4E8">higress_dir</span><span style="--0:#9ECBFF">}"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- &#x22;${higress_dir}&#x22; -u"><div></div></button></div></figure></div>',n={title:"\u7248\u672C\u5347\u7EA7",keywords:["Upgrade"],description:"Higress \u7248\u672C\u5347\u7EA7."},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/upgrade.md",t=void 0,r=function(){return`
# \u7248\u672C\u5347\u7EA7

## \u4E91\u539F\u751F\u90E8\u7F72

### \u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7

\`\`\`bash
# \${higress_version} \u7684\u503C\u793A\u4F8B: v2.0.3
kubectl apply -f https://github.com/alibaba/higress/releases/download/\${higress_version}/crd.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress -n higress-system higress.io/higress -f values.yaml
\`\`\`

\u4E0D\u5EFA\u8BAE\u4F7F\u7528 --reuse-values\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u7EE7\u627F\u6240\u6709\u4E0A\u4E00\u4E2A\u7248\u672C\u7684 values\u3002

## \u72EC\u7ACB\u90E8\u7F72

\`\`\`bash
# \${higress_dir} \u4E3A Higress \u72EC\u7ACB\u90E8\u7F72\u7684\u5B89\u88C5\u76EE\u5F55
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "\${higress_dir}" -u
\`\`\`
`},l=function(){return s},i=function(){return[{depth:2,slug:"\u4E91\u539F\u751F\u90E8\u7F72",text:"\u4E91\u539F\u751F\u90E8\u7F72"},{depth:3,slug:"\u57FA\u4E8E-helm-\u5B9E\u73B0\u7248\u672C\u5347\u7EA7",text:"\u57FA\u4E8E Helm \u5B9E\u73B0\u7248\u672C\u5347\u7EA7"},{depth:2,slug:"\u72EC\u7ACB\u90E8\u7F72",text:"\u72EC\u7ACB\u90E8\u7F72"}]},e=d((v,F,m)=>{const{layout:f,...p}=n;return p.file=a,p.url=t,o`${y()}${c(s)}`})});export{e as Content,u as __tla,l as compiledContent,e as default,a as file,n as frontmatter,i as getHeadings,r as rawContent,t as url};
