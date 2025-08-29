import{c as h,__tla as l}from"./astro-component.B3fYMMDi.js";import{r as u,m as p,u as d,__tla as m}from"./constant.B9AWHwfy.js";import{__tla as g}from"./astro/assets-service.DmDXK_Mj.js";let e,a,o,r,n,c,i,T=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let t;t=`<h2 id="file-requirements">File Requirements</h2>
<p>For convenience, it is recommended that the target URL points directly to the Wasm file.</p>
<h2 id="http-protocol">HTTP Protocol</h2>
<p>Simply configure the URL directly. However, ensure that the target URL is accessible from within the Gateway container. You can verify this by using the <code dir="auto">curl</code> command inside the container.</p>
<p><img src="/img/docs/ops/how-tos/load-wasm-with-http/http.png" alt="http" referrerpolicy="no-referrer"></p>
<h2 id="https-protocol">HTTPS Protocol</h2>
<p>The configuration approach is similar to the HTTP protocol. However, if the server uses an untrusted certificate (such as a self-signed certificate), you need to add an environment variable named \u201CWASM_INSECURE_REGISTRIES\u201D to the Gateway container. Set the value to \u201D*\u201D to trust all HTTPS certificates returned by servers.</p>`,r={title:"Loading Wasm Plugins with HTTP/HTTPS Protocol",keywords:["ops","config","wasm","plugin","http","https"],description:"How to load Wasm plugins using HTTP/HTTPS protocol",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md",i=void 0,c=function(){return`
# Loading Wasm Plugins with HTTP/HTTPS Protocol

## File Requirements

For convenience, it is recommended that the target URL points directly to the Wasm file.

## HTTP Protocol

Simply configure the URL directly. However, ensure that the target URL is accessible from within the Gateway container. You can verify this by using the \`curl\` command inside the container.

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS Protocol

The configuration approach is similar to the HTTP protocol. However, if the server uses an untrusted certificate (such as a self-signed certificate), you need to add an environment variable named "WASM_INSECURE_REGISTRIES" to the Gateway container. Set the value to "*" to trust all HTTPS certificates returned by servers.
`},a=function(){return t},n=function(){return[{depth:2,slug:"file-requirements",text:"File Requirements"},{depth:2,slug:"http-protocol",text:"HTTP Protocol"},{depth:2,slug:"https-protocol",text:"HTTPS Protocol"}]},e=h((f,w,P)=>{const{layout:y,...s}=r;return s.file=o,s.url=i,u`${p()}${d(t)}`})});export{e as Content,T as __tla,a as compiledContent,e as default,o as file,r as frontmatter,n as getHeadings,c as rawContent,i as url};
