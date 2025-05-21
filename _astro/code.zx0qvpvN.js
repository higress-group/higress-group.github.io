import{c as p,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as u,u as g,__tla as f}from"./constant.C798a0v1.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let n,o,s,t,r,l,i,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<p>If you would like to constribute source code for Higress, please check out the <a href="../../developers/guide_dev/" referrerpolicy="unsafe-url">Contribute Guide</a></p>
<p>Code base structure descriptions:</p>
<ul>
<li>
<p>cmd: Containing functions of parsing command-line arguments, etc.</p>
</li>
<li>
<p>pkg/ingress: Containing functions of converting Ingress resources to Istio resources.</p>
</li>
<li>
<p>pkg/bootstrap: Containing functions of starting gRPC/xDS/HTTP servers.</p>
</li>
<li>
<p>registry: Implementations of various service registries.</p>
</li>
<li>
<p>envoy: Containing the referred official envoy codebase and corresponding patches.</p>
</li>
<li>
<p>istio: Containing the referred official istio codebase and corresponding patches.</p>
</li>
<li>
<p>plugins: Higress plugin SDK and official built-in plugins.</p>
</li>
<li>
<p>tools: Building related scripts.</p>
</li>
<li>
<p>docker: Docker image building related scripts.</p>
</li>
</ul>
<p>During compilation, <code dir="auto">make prebuild</code> will be executed automatically, generating an <code dir="auto">external</code> folder, which contains all the external dependencies, including envoy and istios, with all the patches applied.</p>
<p>If you would like to modify the source code of envoy or istio, you can do it directly in the <code dir="auto">external</code> folder, then execute the prebuild command and generate the patch file with diff later. For example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external/envoy_new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">external</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">diff</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Naur</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">envoy_new</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">../envoy/1.20/patches/envoy/</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">date</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+%Y%m%d</span><span style="--0:#E1E4E8">)</span><span style="--0:#9ECBFF">-what-changed.patch</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mv external/envoy external/envoy_new\x7Fmake prebuild\x7Fcd external\x7Fdiff -Naur envoy envoy_new > ../envoy/1.20/patches/envoy/$(date +%Y%m%d)-what-changed.patch"><div></div></button></div></figure></div>
<p>Please be aware that patches will be applied in the order of file names. So please use timestamp as a prefix when naming a new patch file.</p>`,t={title:"Code Reading Instructions",keywords:["higress","coding"],description:"Higress Code Reading Instructions",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/dev/code.md"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/code.md",i=void 0,l=function(){return`
# Code Reading Instructions

If you would like to constribute source code for Higress, please check out the [Contribute Guide](../developers/guide_dev.md)

Code base structure descriptions:

- cmd: Containing functions of parsing command-line arguments, etc.

- pkg/ingress: Containing functions of converting Ingress resources to Istio resources.

- pkg/bootstrap: Containing functions of starting gRPC/xDS/HTTP servers.

- registry: Implementations of various service registries.

- envoy: Containing the referred official envoy codebase and corresponding patches.

- istio: Containing the referred official istio codebase and corresponding patches.

- plugins: Higress plugin SDK and official built-in plugins.

- tools: Building related scripts.

- docker: Docker image building related scripts.

During compilation, \`make prebuild\` will be executed automatically, generating an \`external\` folder, which contains all the external dependencies, including envoy and istios, with all the patches applied.

If you would like to modify the source code of envoy or istio, you can do it directly in the \`external\` folder, then execute the prebuild command and generate the patch file with diff later. For example:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > ../envoy/1.20/patches/envoy/$(date +%Y%m%d)-what-changed.patch
\`\`\`

Please be aware that patches will be applied in the order of file names. So please use timestamp as a prefix when naming a new patch file.
`},o=function(){return e},r=function(){return[]},n=p((v,m,E)=>{const{layout:b,...a}=t;return a.file=s,a.url=i,d`${u()}${g(e)}`})});export{n as Content,y as __tla,o as compiledContent,n as default,s as file,t as frontmatter,r as getHeadings,l as rawContent,i as url};
