import{c as r,__tla as o}from"./astro-component.DeDyO-JF.js";import{r as c,m as v,u as E,__tla as g}from"./constant.CRM8ttM5.js";import{__tla as y}from"./astro/assets-service.B3vdYoe2.js";let n,p,e,a,l,d,t,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h1 id="higress-terminology">Higress Terminology</h1>
<h2 id="ingress-\u6CE8\u89E3annotation">Ingress \u6CE8\u89E3(Annotation)</h2>
<p>Ingress \u8D44\u6E90\u4E2D\u7684\u6CE8\u89E3(Annotation)\u5B57\u6BB5\uFF0C\u662F\u4E00\u4E2A kv \u5B57\u5178\u7ED3\u6784\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7533\u660E\u5F0F\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u5404\u79CD\u8DEF\u7531\u7B56\u7565\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u662F\u4F7F\u7528\u6CE8\u89E3\u5B9E\u73B0\u5BF9\u8BE5 Ingress \u8DEF\u7531\u5F00\u542F\u8DE8\u57DF\u8BBF\u95EE\u8BB8\u53EF\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-example</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/enable-cors</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"true"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nginx-example</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">test</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: ingress-example\x7F  annotations:\x7F    higress.io/enable-cors: &#x22;true&#x22;\x7Fspec:\x7F  ingressClassName: nginx-example\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - path: /test\x7F        pathType: Prefix\x7F        backend:\x7F          service:\x7F            name: test\x7F            port:\x7F              number: 80"><div></div></button></div></figure></div>
<p>Higress \u652F\u6301\u7684\u5176\u4ED6\u6CE8\u89E3\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8BF7\u53C2\u8003<a href="../../user/annotation/" referrerpolicy="unsafe-url">Ingress Annotation \u914D\u7F6E\u8BF4\u660E</a></p>
<h2 id="\u4E0B\u6E38downstream">\u4E0B\u6E38(Downstream)</h2>
<p>\u4E0B\u6E38\u6307 Higress \u63A5\u6536\u5230\u8BF7\u6C42\u7684\u6765\u6E90\uFF0C\u4E00\u822C\u662F\u5982\u6D4F\u89C8\u5668\u7B49\u5BA2\u6237\u7AEF</p>
<h2 id="\u4E0A\u6E38upstream">\u4E0A\u6E38(Upstream)</h2>
<p>\u4E0A\u6E38\u6307 Higress \u8F6C\u53D1\u8BF7\u6C42\u7684\u76EE\u6807\u540E\u7AEF\u670D\u52A1</p>`,a={title:"\u672F\u8BED\u8868",keywords:["Higress"],description:"Higress Terminology.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/terminology.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/overview/terminology.md",t=void 0,d=function(){return`
# Higress Terminology

## Ingress \u6CE8\u89E3(Annotation)

Ingress \u8D44\u6E90\u4E2D\u7684\u6CE8\u89E3(Annotation)\u5B57\u6BB5\uFF0C\u662F\u4E00\u4E2A kv \u5B57\u5178\u7ED3\u6784\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7533\u660E\u5F0F\u7684\u65B9\u5F0F\u6765\u5B9E\u73B0\u5404\u79CD\u8DEF\u7531\u7B56\u7565\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u662F\u4F7F\u7528\u6CE8\u89E3\u5B9E\u73B0\u5BF9\u8BE5 Ingress \u8DEF\u7531\u5F00\u542F\u8DE8\u57DF\u8BBF\u95EE\u8BB8\u53EF\uFF1A

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

Higress \u652F\u6301\u7684\u5176\u4ED6\u6CE8\u89E3\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8BF7\u53C2\u8003[Ingress Annotation \u914D\u7F6E\u8BF4\u660E](../user/annotation.md)


## \u4E0B\u6E38(Downstream)

\u4E0B\u6E38\u6307 Higress \u63A5\u6536\u5230\u8BF7\u6C42\u7684\u6765\u6E90\uFF0C\u4E00\u822C\u662F\u5982\u6D4F\u89C8\u5668\u7B49\u5BA2\u6237\u7AEF

## \u4E0A\u6E38(Upstream)

\u4E0A\u6E38\u6307 Higress \u8F6C\u53D1\u8BF7\u6C42\u7684\u76EE\u6807\u540E\u7AEF\u670D\u52A1



`},p=function(){return s},l=function(){return[{depth:1,slug:"higress-terminology",text:"Higress Terminology"},{depth:2,slug:"ingress-\u6CE8\u89E3annotation",text:"Ingress \u6CE8\u89E3(Annotation)"},{depth:2,slug:"\u4E0B\u6E38downstream",text:"\u4E0B\u6E38(Downstream)"},{depth:2,slug:"\u4E0A\u6E38upstream",text:"\u4E0A\u6E38(Upstream)"}]},n=r((u,h,f)=>{const{layout:x,...i}=a;return i.file=e,i.url=t,c`${v()}${E(s)}`})});export{n as Content,m as __tla,p as compiledContent,n as default,e as file,a as frontmatter,l as getHeadings,d as rawContent,t as url};
