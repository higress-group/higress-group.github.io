import{c as l,__tla as c}from"./astro-component.CXlaF79K.js";import{r as d,m as v,u as E,__tla as u}from"./constant.V2td3cJV.js";import{__tla as g}from"./astro/assets-service.DQopRnBr.js";let e,r,n,a,o,p,t,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<p>#Higress Terminology</p>
<h2 id="ingress-annotation-annotation">Ingress Annotation (Annotation)</h2>
<p>The annotation (Annotation) field in the Ingress resource is a kv dictionary structure, which can implement various routing strategies in a declarative manner. As shown below, annotations are used to enable cross-domain access permission for the Ingress route:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-example</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">higress.io/enable-cors</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"true"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nginx-example</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">   </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">       </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">         </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">         </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">           </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">             </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">test</span></div></div><div class="ec-line"><div class="code"><span class="indent">             </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">               </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F   name: ingress-example\x7F   annotations:\x7F     higress.io/enable-cors: &#x22;true&#x22;\x7Fspec:\x7F   ingressClassName: nginx-example\x7F   rules:\x7F   - http:\x7F       paths:\x7F       - path: /test\x7F         pathType: Prefix\x7F         backend:\x7F           service:\x7F             name: test\x7F             port:\x7F               number: 80"><div></div></button></div></figure></div>
<p>For other annotation configuration methods supported by Higress, please refer to <a href="../../user/annotation/" referrerpolicy="unsafe-url">Ingress Annotation Configuration Instructions</a></p>
<h2 id="downstream">Downstream</h2>
<p>Downstream refers to the source where Higress receives the request, usually a client such as a browser</p>
<h2 id="upstream">Upstream</h2>
<p>Upstream refers to the target backend service that Higress forwards the request to</p>`,a={title:"Higress Terminology",keywords:["Higress"],description:"Higress Terminology.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/overview/terminology.md"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/overview/terminology.md",t=void 0,p=function(){return`
#Higress Terminology

## Ingress Annotation (Annotation)

The annotation (Annotation) field in the Ingress resource is a kv dictionary structure, which can implement various routing strategies in a declarative manner. As shown below, annotations are used to enable cross-domain access permission for the Ingress route:

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
   name: ingress-example
   annotations:
     higress.io/enable-cors: "true"
spec:
   ingressClassName: nginx-example
   rules:
   - http:
       paths:
       - path: /test
         pathType: Prefix
         backend:
           service:
             name: test
             port:
               number: 80
\`\`\`

For other annotation configuration methods supported by Higress, please refer to [Ingress Annotation Configuration Instructions](../user/annotation.md)


## Downstream

Downstream refers to the source where Higress receives the request, usually a client such as a browser

## Upstream

Upstream refers to the target backend service that Higress forwards the request to
`},r=function(){return s},o=function(){return[{depth:2,slug:"ingress-annotation-annotation",text:"Ingress Annotation (Annotation)"},{depth:2,slug:"downstream",text:"Downstream"},{depth:2,slug:"upstream",text:"Upstream"}]},e=l((m,h,f)=>{const{layout:x,...i}=a;return i.file=n,i.url=t,d`${v()}${E(s)}`})});export{e as Content,y as __tla,r as compiledContent,e as default,n as file,a as frontmatter,o as getHeadings,p as rawContent,t as url};
