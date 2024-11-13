import{c as o,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as c,m as h,u as g,__tla as y}from"./constant.BFWUArEa.js";import{__tla as u}from"./astro/assets-service.tyfV9CK3.js";let e,p,a,t,l,r,n,E=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s='<h2 id="cloud-native-deployment">Cloud-Native Deployment</h2>\n<h3 id="upgrade-via-helm">Upgrade via Helm</h3>\n<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Sample value of ${higress_version} : v1.1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/alibaba/higress/releases/download/</span><span style="--0:#E1E4E8">${higress_version}</span><span style="--0:#9ECBFF">/customresourcedefinitions.gen.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f https://github.com/alibaba/higress/releases/download/${higress_version}/customresourcedefinitions.gen.yaml\x7Fhelm repo update\x7Fhelm upgrade higress -n higress-system higress.io/higress"><div></div></button></div></figure></div>\n<h2 id="standalone-deployment">Standalone Deployment</h2>\n<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ${higress_dir} is the path of Higress\' installation directory</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"${</span><span style="--0:#E1E4E8">higress_dir</span><span style="--0:#9ECBFF">}"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- &#x22;${higress_dir}&#x22; -u"><div></div></button></div></figure></div>',t={title:"Upgrade",keywords:["Higress"],description:"Higress Upgrade.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/ops/upgrade.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/upgrade.md",n=void 0,r=function(){return`
# Upgrade

## Cloud-Native Deployment

### Upgrade via Helm

\`\`\`bash
# Sample value of \${higress_version} : v1.1.0
kubectl apply -f https://github.com/alibaba/higress/releases/download/\${higress_version}/customresourcedefinitions.gen.yaml
helm repo update
helm upgrade higress -n higress-system higress.io/higress
\`\`\`

## Standalone Deployment

\`\`\`bash
# \${higress_dir} is the path of Higress' installation directory
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "\${higress_dir}" -u
\`\`\`
`},p=function(){return s},l=function(){return[{depth:2,slug:"cloud-native-deployment",text:"Cloud-Native Deployment"},{depth:3,slug:"upgrade-via-helm",text:"Upgrade via Helm"},{depth:2,slug:"standalone-deployment",text:"Standalone Deployment"}]},e=o((v,m,F)=>{const{layout:f,...i}=t;return i.file=a,i.url=n,c`${h()}${g(s)}`})});export{e as Content,E as __tla,p as compiledContent,e as default,a as file,t as frontmatter,l as getHeadings,r as rawContent,n as url};
