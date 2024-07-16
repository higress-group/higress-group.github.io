import{c as o,r,m as p}from"./render-template.DRFCmQJq.js";import{u as l}from"./index.BE_bY-hE.js";import"./hooks.module.6Mr8QjZg.js";import"./preact.module.LHOPIhyX.js";import"./jsxRuntime.module.B-HT3-kV.js";import"./preload-helper.BiBI96sQ.js";const e=`<p>#Higress Terminology</p>
<h2 id="ingress-annotation-annotation">Ingress Annotation (Annotation)</h2>
<p>The annotation (Annotation) field in the Ingress resource is a kv dictionary structure, which can implement various routing strategies in a declarative manner. As shown below, annotations are used to enable cross-domain access permission for the Ingress route:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-example</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">higress.io/enable-cors</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"true"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nginx-example</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">   </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">       </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">         </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">         </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">           </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">             </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">test</span></div></div><div class="ec-line"><div class="code"><span class="indent">             </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">               </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F   name: ingress-example\x7F   annotations:\x7F     higress.io/enable-cors: &#x22;true&#x22;\x7Fspec:\x7F   ingressClassName: nginx-example\x7F   rules:\x7F   - http:\x7F       paths:\x7F       - path: /test\x7F         pathType: Prefix\x7F         backend:\x7F           service:\x7F             name: test\x7F             port:\x7F               number: 80"><div></div></button></div></figure></div>
<p>For other annotation configuration methods supported by Higress, please refer to <a href="../../user/annotation/" referrerpolicy="unsafe-url">Ingress Annotation Configuration Instructions</a></p>
<h2 id="downstream">Downstream</h2>
<p>Downstream refers to the source where Higress receives the request, usually a client such as a browser</p>
<h2 id="upstream">Upstream</h2>
<p>Upstream refers to the target backend service that Higress forwards the request to</p>`,n={title:"Higress Terminology",keywords:["Higress"],description:"Higress Terminology.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/overview/terminology.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/overview/terminology.md",t=void 0;function c(){return`
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
`}function d(){return e}function v(){return[{depth:2,slug:"ingress-annotation-annotation",text:"Ingress Annotation (Annotation)"},{depth:2,slug:"downstream",text:"Downstream"},{depth:2,slug:"upstream",text:"Upstream"}]}const i=o((E,u,g)=>{const{layout:m,...s}=n;return s.file=a,s.url=t,r`${p()}${l(e)}`});export{i as Content,d as compiledContent,i as default,a as file,n as frontmatter,v as getHeadings,c as rawContent,t as url};
