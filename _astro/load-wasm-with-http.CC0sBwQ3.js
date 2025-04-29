import{c as l,__tla as p}from"./astro-component.m4CCZO6J.js";import{r as d,m as u,u as h,__tla as m}from"./constant.CgKTHRkp.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let e,a,o,i,n,c,s,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let t;t=`<h2 id="file-requirement">File Requirement</h2>
<p>Considering convenience, it is recommended that the target URL point directly to the Wasm file.</p>
<h2 id="http-protocol">HTTP Protocol</h2>
<p>Just set the URL directly. But the URL must be accessible inside the gateway container. You can test it using the <code dir="auto">curl</code> command.</p>
<p><img src="/img/docs/ops/how-tos/load-wasm-with-http/http.png" alt="http" referrerpolicy="no-referrer"></p>
<h2 id="https-protocol">HTTPS Protocol</h2>
<p>The configuration is similar with HTTP protocol. But if the server uses an untrusted certificate, for example, a self-signed certificate, you need to add the following environment variable to the gateway container, to make it trust all the server-returned HTTPS certificates.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">WASM_INSECURE_REGISTRIES</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">*</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="WASM_INSECURE_REGISTRIES=*"><div></div></button></div></figure></div>`,i={title:"Load Wasm plugins with HTTP/HTTPS protocol",keywords:["ops","config","wasm","plugin","http","https"],custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/ops/config/load-wasm-with-http.md"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md",s=void 0,c=function(){return`
# Load Wasm plugins with HTTP/HTTPS protocol

## File Requirement

Considering convenience, it is recommended that the target URL point directly to the Wasm file.

## HTTP Protocol

Just set the URL directly. But the URL must be accessible inside the gateway container. You can test it using the \`curl\` command.

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS Protocol

The configuration is similar with HTTP protocol. But if the server uses an untrusted certificate, for example, a self-signed certificate, you need to add the following environment variable to the gateway container, to make it trust all the server-returned HTTPS certificates.

\`\`\`bash
WASM_INSECURE_REGISTRIES=*
\`\`\`
`},a=function(){return t},n=function(){return[{depth:2,slug:"file-requirement",text:"File Requirement"},{depth:2,slug:"http-protocol",text:"HTTP Protocol"},{depth:2,slug:"https-protocol",text:"HTTPS Protocol"}]},e=l((T,w,y)=>{const{layout:_,...r}=i;return r.file=o,r.url=s,d`${u()}${h(t)}`})});export{e as Content,f as __tla,a as compiledContent,e as default,o as file,i as frontmatter,n as getHeadings,c as rawContent,s as url};
