import{c as l,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as y,u,__tla as g}from"./constant.CqGXQvIp.js";import{__tla as E}from"./astro/assets-service.BhtN0nM5.js";let s,o,n,t,p,r,a,v=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<p>If you want to contribute code to Higress, please refer to the <a href="../../developers/guide_dev/" referrerpolicy="unsafe-url">Contribution Guide</a></p>
<p>Code directory structure explanation:</p>
<ul>
<li>
<p>cmd: Command-line parameter parsing and processing code</p>
</li>
<li>
<p>pkg/ingress: Code related to converting Ingress resources to Istio resources</p>
</li>
<li>
<p>pkg/bootstrap: Code for starting gRPC/xDS/HTTP servers, etc.</p>
</li>
<li>
<p>registry: Code implementing service discovery with various service registries</p>
</li>
<li>
<p>envoy: Envoy repository commit dependency</p>
</li>
<li>
<p>istio: Istio repository commit dependency</p>
</li>
<li>
<p>plugins: Higress plugin SDK and official built-in plugin code</p>
</li>
<li>
<p>script: Compilation-related scripts</p>
</li>
<li>
<p>docker: Docker image building scripts</p>
</li>
</ul>
<p>During compilation, <code dir="auto">make prebuild</code> will be executed automatically, generating an <code dir="auto">external</code> directory containing the envoy and istio dependencies that will be used.</p>
<p>If you want to modify envoy and istio code, you can modify it directly in the external directory, rename it, then execute prebuild, and afterward compare to generate patch files, for example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy_new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">diff</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Naur</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy_new</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy.patch</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mv external/envoy external/envoy_new\x7Fmake prebuild\x7Fcd external\x7Fdiff -Naur envoy envoy_new > envoy.patch"><div></div></button></div></figure></div>
<p>After testing is complete, you can patch the corresponding patch files to the envoy or istio repository for submission.</p>
<p>First fork Higress\u2019s <a href="https://github.com/higress-group/envoy" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy</a> or <a href="https://github.com/higress-group/istio" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">istio</a> repository, then push your changes and submit a PR, for example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clone</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/&#x3C;your-fork>/envoy.git</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">checkout</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-b</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;Your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">branch</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name></span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">patch</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy.patch</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">commit</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x3C;</span><span style="--0:#9ECBFF">Your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">change</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">info></span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">origin</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;Your</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">branch</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git clone https://github.com/<your-fork>/envoy.git\x7Fcd envoy\x7Fgit checkout -b <Your branch name>\x7Fpatch -p1 < envoy.patch\x7Fgit add -u\x7Fgit commit -m <Your change info>\x7Fgit push origin <Your branch name>"><div></div></button></div></figure></div>`,t={title:"Code Reading Guide",keywords:["higress","coding"],description:"Higress Code Reading Guide.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/dev/code.md"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/code.md",a=void 0,r=function(){return`
# Code Reading Guide

If you want to contribute code to Higress, please refer to the [Contribution Guide](../developers/guide_dev.md)

Code directory structure explanation:

- cmd: Command-line parameter parsing and processing code

- pkg/ingress: Code related to converting Ingress resources to Istio resources

- pkg/bootstrap: Code for starting gRPC/xDS/HTTP servers, etc.

- registry: Code implementing service discovery with various service registries

- envoy: Envoy repository commit dependency

- istio: Istio repository commit dependency

- plugins: Higress plugin SDK and official built-in plugin code

- script: Compilation-related scripts

- docker: Docker image building scripts

During compilation, \`make prebuild\` will be executed automatically, generating an \`external\` directory containing the envoy and istio dependencies that will be used.

If you want to modify envoy and istio code, you can modify it directly in the external directory, rename it, then execute prebuild, and afterward compare to generate patch files, for example:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > envoy.patch
\`\`\`

After testing is complete, you can patch the corresponding patch files to the envoy or istio repository for submission.

First fork Higress's [envoy](https://github.com/higress-group/envoy) or [istio](https://github.com/higress-group/istio) repository, then push your changes and submit a PR, for example:

\`\`\`bash
git clone https://github.com/<your-fork>/envoy.git
cd envoy
git checkout -b <Your branch name>
patch -p1 < envoy.patch
git add -u
git commit -m <Your change info>
git push origin <Your branch name>
\`\`\`
`},o=function(){return e},p=function(){return[]},s=l((m,h,f)=>{const{layout:F,...i}=t;return i.file=n,i.url=a,d`${y()}${u(e)}`})});export{s as Content,v as __tla,o as compiledContent,s as default,n as file,t as frontmatter,p as getHeadings,r as rawContent,a as url};
