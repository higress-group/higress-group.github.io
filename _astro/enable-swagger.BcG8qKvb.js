import{c,__tla as d}from"./astro-component.B3fYMMDi.js";import{r as p,m as u,u as _,__tla as g}from"./constant.B9AWHwfy.js";import{__tla as h}from"./astro/assets-service.DmDXK_Mj.js";let s,n,t,o,i,l,r,E=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="k8s-\u90E8\u7F72">K8s \u90E8\u7F72</h2>
<p>\u5728 helm \u5B89\u88C5\u6216\u5347\u7EA7\u547D\u4EE4\u4E2D\u6DFB\u52A0 <code dir="auto">--set higress-console.swagger.enabled=true</code> \u53C2\u6570\u5373\u53EF\u3002</p>
<h2 id="docker-compose-\u90E8\u7F72">Docker Compose \u90E8\u7F72</h2>
<p>\u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF0C\u5728 <code dir="auto">compose/console.env</code> \u6587\u4EF6\u5185\u6DFB\u52A0\u4EE5\u4E0B\u4E24\u884C\u5185\u5BB9\uFF0C\u5E76\u91CD\u542F Higress \u5373\u53EF\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">SPRINGDOC_API_DOCS_ENABLED</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">SPRINGDOC_SWAGGER_UI_ENABLED</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="SPRINGDOC_API_DOCS_ENABLED=true\x7FSPRINGDOC_SWAGGER_UI_ENABLED=true"><div></div></button></div></figure></div>
<h2 id="all-in-one-\u955C\u50CF\u90E8\u7F72">all-in-one \u955C\u50CF\u90E8\u7F72</h2>
<p>\u5728 <code dir="auto">docker run</code> \u547D\u4EE4\u4E2D\u6DFB\u52A0 <code dir="auto">-e SPRINGDOC_API_DOCS_ENABLED=true -e SPRINGDOC_SWAGGER_UI_ENABLED=true</code> \u53C2\u6570\u5373\u53EF\u3002</p>
<h2 id="\u8BBF\u95EE\u5730\u5740">\u8BBF\u95EE\u5730\u5740</h2>
<p><code dir="auto">http://&#x3C;higress-console-endpoint>/swagger-ui/index.html</code></p>`,o={title:"\u542F\u7528 Console \u5185\u7684 Swagger UI",keywords:["ops","console","swagger"],description:"\u4ECB\u7ECD\u5982\u4F55\u542F\u7528 Higress Console \u5185\u7684 Swagger UI",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/enable-swagger.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/enable-swagger.md",r=void 0,l=function(){return`# \u542F\u7528 Console \u5185\u7684 Swagger UI

## K8s \u90E8\u7F72

\u5728 helm \u5B89\u88C5\u6216\u5347\u7EA7\u547D\u4EE4\u4E2D\u6DFB\u52A0 \`--set higress-console.swagger.enabled=true\` \u53C2\u6570\u5373\u53EF\u3002

## Docker Compose \u90E8\u7F72

\u8FDB\u5165\u5B89\u88C5\u76EE\u5F55\uFF0C\u5728 \`compose/console.env\` \u6587\u4EF6\u5185\u6DFB\u52A0\u4EE5\u4E0B\u4E24\u884C\u5185\u5BB9\uFF0C\u5E76\u91CD\u542F Higress \u5373\u53EF\uFF1A

\`\`\`bash
SPRINGDOC_API_DOCS_ENABLED=true
SPRINGDOC_SWAGGER_UI_ENABLED=true
\`\`\`

## all-in-one \u955C\u50CF\u90E8\u7F72

\u5728 \`docker run\` \u547D\u4EE4\u4E2D\u6DFB\u52A0 \`-e SPRINGDOC_API_DOCS_ENABLED=true -e SPRINGDOC_SWAGGER_UI_ENABLED=true\` \u53C2\u6570\u5373\u53EF\u3002

## \u8BBF\u95EE\u5730\u5740

\`http://<higress-console-endpoint>/swagger-ui/index.html\``},n=function(){return e},i=function(){return[{depth:2,slug:"k8s-\u90E8\u7F72",text:"K8s \u90E8\u7F72"},{depth:2,slug:"docker-compose-\u90E8\u7F72",text:"Docker Compose \u90E8\u7F72"},{depth:2,slug:"all-in-one-\u955C\u50CF\u90E8\u7F72",text:"all-in-one \u955C\u50CF\u90E8\u7F72"},{depth:2,slug:"\u8BBF\u95EE\u5730\u5740",text:"\u8BBF\u95EE\u5730\u5740"}]},s=c((m,C,D)=>{const{layout:I,...a}=o;return a.file=t,a.url=r,p`${u()}${_(e)}`})});export{s as Content,E as __tla,n as compiledContent,s as default,t as file,o as frontmatter,i as getHeadings,l as rawContent,r as url};
