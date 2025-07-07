import{c as r,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as p,m as g,u as y,__tla as h}from"./constant.ByWDeEHI.js";import{__tla as u}from"./astro/assets-service.BhtN0nM5.js";let e,o,a,i,n,c,l,v=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u67E5\u770B\u7EC4\u4EF6\u65E5\u5FD7">\u67E5\u770B\u7EC4\u4EF6\u65E5\u5FD7</h2>
<h3 id="k8s-\u90E8\u7F72">K8s \u90E8\u7F72</h3>
<p>\u76F4\u63A5\u4F7F\u7528 <code dir="auto">kubectl logs</code> \u547D\u4EE4\u5373\u53EF\u3002\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway-5cb7f44768-snfbd</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -n higress-system higress-gateway-5cb7f44768-snfbd"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF0C<code dir="auto">higress-controller</code> pod \u91CC\u6709\u4E24\u4E2A\u5BB9\u5668\uFF0C<code dir="auto">higress-core</code> \u548C <code dir="auto">discovery</code>\uFF0C\u5206\u522B\u5BF9\u5E94 <code dir="auto">controller</code> \u548C <code dir="auto">pilot</code> \u4E24\u4E2A\u7EC4\u4EF6\u3002\u67E5\u770B\u65E5\u5FD7\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 <code dir="auto">-c</code> \u53C2\u6570\u6765\u6267\u884C\u8981\u67E5\u770B\u65E5\u5FD7\u7684\u5BB9\u5668\u540D\u79F0\u3002\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-controller-5c768d64d9-m5gtp</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-c</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">discovery</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -n higress-system higress-controller-5c768d64d9-m5gtp -c discovery"><div></div></button></div></figure></div>
<h3 id="docker-compose-\u90E8\u7F72">Docker Compose \u90E8\u7F72</h3>
<p>\u5728\u5B89\u88C5\u76EE\u5F55\u4E0B\u6267\u884C <code dir="auto">./bin/logs.sh \u7EC4\u4EF6\u540D\u79F0</code> \u5373\u53EF\u67E5\u770B\u5BF9\u5E94\u7EC4\u4EF6\u7684\u65E5\u5FD7\u3002</p>
<p>\u5E38\u7528\u7684\u7EC4\u4EF6\u540D\u79F0\u5982\u4E0B\uFF1A</p>
<ul>
<li>apiserver</li>
<li>controller</li>
<li>pilot</li>
<li>gateway</li>
<li>console</li>
</ul>
<h3 id="all-in-one-\u955C\u50CF\u90E8\u7F72">all-in-one \u955C\u50CF\u90E8\u7F72</h3>
<p>all-in-one \u6A21\u5F0F\u4E0B\uFF0CHigress \u6240\u6709\u7684\u65E5\u5FD7\u6587\u4EF6\u5747\u4FDD\u5B58\u5728\u5BB9\u5668\u5185\u7684 <code dir="auto">/var/log/higress</code> \u76EE\u5F55\u4E0B\u3002\u4F7F\u7528 <code dir="auto">docker exec</code> \u547D\u4EE4\u8FDB\u5165\u5230\u5BB9\u5668\u5185\u76F4\u63A5\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\u5373\u53EF\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/var/log/higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">ls</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-l</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">cat</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-ai-gateway bash\x7F\x7Fcd /var/log/higress\x7Fls -l\x7Fcat gateway.log"><div></div></button></div></figure></div>
<h2 id="\u67E5\u770B\u8BBF\u95EE\u65E5\u5FD7">\u67E5\u770B\u8BBF\u95EE\u65E5\u5FD7</h2>
<h3 id="\u5DF2\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6">\u5DF2\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6</h3>
<p>\u5982\u679C\u5F00\u542F\u4E86 Higress \u5185\u7F6E\u7684\u76D1\u63A7\u5957\u4EF6\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728 Higress Console \u4E0A\u76F4\u63A5\u67E5\u770B\u8BF7\u6C42\u65E5\u5FD7\uFF1A</p>
<ol>
<li>\u8FDB\u5165 Higress Console \u7684\u76D1\u63A7\u9762\u677F\u9875\u9762</li>
<li>\u70B9\u51FB\u53F3\u4FA7\u76D1\u63A7\u533A\u57DF\u6700\u5DE6\u8FB9\u7684\u201C\u56DB\u4E2A\u5C0F\u65B9\u683C\u201D\u56FE\u6807</li>
<li>\u70B9\u51FB\u53F3\u4FA7\u7684\u201CHigress Access Logs\u201D\u5373\u53EF\u8FDB\u5165\u8BBF\u95EE\u65E5\u5FD7\u770B\u677F\u9875\u9762</li>
</ol>
<h3 id="\u672A\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6">\u672A\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6</h3>
<p>\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8BBF\u95EE\u65E5\u5FD7\u4F1A\u4E0E\u8FD0\u884C\u65E5\u5FD7\u4E00\u540C\u8BB0\u5F55\u3002\u53C2\u8003\u8FD0\u884C\u65E5\u5FD7\u7684\u67E5\u770B\u65B9\u6CD5\u5373\u53EF\u3002</p>
<h2 id="\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7">\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7</h2>
<p>\u76EE\u524D\u9700\u8981\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7\u7684\u4E3B\u8981\u662F gateway \u7EC4\u4EF6\u3002\u4E34\u65F6\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7\u7684\u5177\u4F53\u65B9\u5F0F\u4E3A\uFF1A</p>
<ol>
<li>\u6253\u5F00 gateway \u6240\u5728\u5BB9\u5668\u7684 <code dir="auto">bash</code> \u7EC8\u7AEF
<ul>
<li>K8s \u90E8\u7F72\uFF1A<code dir="auto">kubectl exec -it higress-gateway-xxxx-yyyyy -n higress-system -- bash</code></li>
<li>Docker Compose \u90E8\u7F72\uFF1A<code dir="auto">docker exec -it higress-gateway-1 bash</code></li>
<li>all-in-one \u955C\u50CF\u90E8\u7F72\uFF1A<code dir="auto">docker exec -it higress-ai-gateway bash</code></li>
</ul>
</li>
<li>\u6267\u884C\u547D\u4EE4\uFF1A<code dir="auto">curl localhost:15000/logging?\u6A21\u5757\u540D=\u65E5\u5FD7\u7B49\u7EA7 -X POST</code></li>
</ol>
<p>\u5E38\u7528\u6A21\u5757\u540D\u79F0\u6709\uFF1A</p>
<ul>
<li>golang\uFF1AMCP Server \u6A21\u5757</li>
<li>wasm\uFF1AWasm \u63D2\u4EF6\u6A21\u5757</li>
</ul>
<p>\u65E5\u5FD7\u7B49\u7EA7\u5305\u62EC\uFF1A</p>
<ul>
<li>trace</li>
<li>debug</li>
<li>info</li>
<li>warning/warn\uFF08\u9ED8\u8BA4\u503C\uFF09</li>
<li>error</li>
<li>critical</li>
<li>off</li>
</ul>
<p>\u8C03\u6574\u540E\u7684\u65E5\u5FD7\u7B49\u7EA7\u5728 gateway \u91CD\u542F\u540E\u5C06\u4F1A\u81EA\u52A8\u5931\u6548\u3002</p>`,i={title:"\u67E5\u770B\u65E5\u5FD7",keywords:["ops","logging","log"],description:"\u4ECB\u7ECD\u5982\u4F55\u67E5\u770B Higress \u7684\u8FD0\u884C\u65E5\u5FD7",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/view-logs.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/view-logs.md",l=void 0,c=function(){return`# \u67E5\u770B\u65E5\u5FD7

## \u67E5\u770B\u7EC4\u4EF6\u65E5\u5FD7

### K8s \u90E8\u7F72

\u76F4\u63A5\u4F7F\u7528 \`kubectl logs\` \u547D\u4EE4\u5373\u53EF\u3002\u4F8B\u5982\uFF1A

\`\`\`bash
kubectl logs -n higress-system higress-gateway-5cb7f44768-snfbd
\`\`\`

\u6CE8\u610F\uFF0C\`higress-controller\` pod \u91CC\u6709\u4E24\u4E2A\u5BB9\u5668\uFF0C\`higress-core\` \u548C \`discovery\`\uFF0C\u5206\u522B\u5BF9\u5E94 \`controller\` \u548C \`pilot\` \u4E24\u4E2A\u7EC4\u4EF6\u3002\u67E5\u770B\u65E5\u5FD7\u7684\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528 \`-c\` \u53C2\u6570\u6765\u6267\u884C\u8981\u67E5\u770B\u65E5\u5FD7\u7684\u5BB9\u5668\u540D\u79F0\u3002\u4F8B\u5982\uFF1A

\`\`\`bash
kubectl logs -n higress-system higress-controller-5c768d64d9-m5gtp -c discovery
\`\`\`

### Docker Compose \u90E8\u7F72

\u5728\u5B89\u88C5\u76EE\u5F55\u4E0B\u6267\u884C \`./bin/logs.sh \u7EC4\u4EF6\u540D\u79F0\` \u5373\u53EF\u67E5\u770B\u5BF9\u5E94\u7EC4\u4EF6\u7684\u65E5\u5FD7\u3002

\u5E38\u7528\u7684\u7EC4\u4EF6\u540D\u79F0\u5982\u4E0B\uFF1A

- apiserver
- controller
- pilot
- gateway
- console

### all-in-one \u955C\u50CF\u90E8\u7F72

all-in-one \u6A21\u5F0F\u4E0B\uFF0CHigress \u6240\u6709\u7684\u65E5\u5FD7\u6587\u4EF6\u5747\u4FDD\u5B58\u5728\u5BB9\u5668\u5185\u7684 \`/var/log/higress\` \u76EE\u5F55\u4E0B\u3002\u4F7F\u7528 \`docker exec\` \u547D\u4EE4\u8FDB\u5165\u5230\u5BB9\u5668\u5185\u76F4\u63A5\u67E5\u770B\u6587\u4EF6\u5185\u5BB9\u5373\u53EF\u3002 

\`\`\`bash
docker exec -it higress-ai-gateway bash

cd /var/log/higress
ls -l
cat gateway.log
\`\`\`

## \u67E5\u770B\u8BBF\u95EE\u65E5\u5FD7

### \u5DF2\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6

\u5982\u679C\u5F00\u542F\u4E86 Higress \u5185\u7F6E\u7684\u76D1\u63A7\u5957\u4EF6\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u5728 Higress Console \u4E0A\u76F4\u63A5\u67E5\u770B\u8BF7\u6C42\u65E5\u5FD7\uFF1A

1. \u8FDB\u5165 Higress Console \u7684\u76D1\u63A7\u9762\u677F\u9875\u9762
2. \u70B9\u51FB\u53F3\u4FA7\u76D1\u63A7\u533A\u57DF\u6700\u5DE6\u8FB9\u7684\u201C\u56DB\u4E2A\u5C0F\u65B9\u683C\u201D\u56FE\u6807
3. \u70B9\u51FB\u53F3\u4FA7\u7684\u201CHigress Access Logs\u201D\u5373\u53EF\u8FDB\u5165\u8BBF\u95EE\u65E5\u5FD7\u770B\u677F\u9875\u9762

### \u672A\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6

\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8BBF\u95EE\u65E5\u5FD7\u4F1A\u4E0E\u8FD0\u884C\u65E5\u5FD7\u4E00\u540C\u8BB0\u5F55\u3002\u53C2\u8003\u8FD0\u884C\u65E5\u5FD7\u7684\u67E5\u770B\u65B9\u6CD5\u5373\u53EF\u3002

## \u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7

\u76EE\u524D\u9700\u8981\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7\u7684\u4E3B\u8981\u662F gateway \u7EC4\u4EF6\u3002\u4E34\u65F6\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7\u7684\u5177\u4F53\u65B9\u5F0F\u4E3A\uFF1A

1. \u6253\u5F00 gateway \u6240\u5728\u5BB9\u5668\u7684 \`bash\` \u7EC8\u7AEF
    - K8s \u90E8\u7F72\uFF1A\`kubectl exec -it higress-gateway-xxxx-yyyyy -n higress-system -- bash\`
    - Docker Compose \u90E8\u7F72\uFF1A\`docker exec -it higress-gateway-1 bash\`
    - all-in-one \u955C\u50CF\u90E8\u7F72\uFF1A\`docker exec -it higress-ai-gateway bash\`
2. \u6267\u884C\u547D\u4EE4\uFF1A\`curl localhost:15000/logging?\u6A21\u5757\u540D=\u65E5\u5FD7\u7B49\u7EA7 -X POST\`

\u5E38\u7528\u6A21\u5757\u540D\u79F0\u6709\uFF1A

- golang\uFF1AMCP Server \u6A21\u5757
- wasm\uFF1AWasm \u63D2\u4EF6\u6A21\u5757

\u65E5\u5FD7\u7B49\u7EA7\u5305\u62EC\uFF1A

- trace
- debug
- info
- warning/warn\uFF08\u9ED8\u8BA4\u503C\uFF09
- error
- critical
- off

\u8C03\u6574\u540E\u7684\u65E5\u5FD7\u7B49\u7EA7\u5728 gateway \u91CD\u542F\u540E\u5C06\u4F1A\u81EA\u52A8\u5931\u6548\u3002`},o=function(){return s},n=function(){return[{depth:2,slug:"\u67E5\u770B\u7EC4\u4EF6\u65E5\u5FD7",text:"\u67E5\u770B\u7EC4\u4EF6\u65E5\u5FD7"},{depth:3,slug:"k8s-\u90E8\u7F72",text:"K8s \u90E8\u7F72"},{depth:3,slug:"docker-compose-\u90E8\u7F72",text:"Docker Compose \u90E8\u7F72"},{depth:3,slug:"all-in-one-\u955C\u50CF\u90E8\u7F72",text:"all-in-one \u955C\u50CF\u90E8\u7F72"},{depth:2,slug:"\u67E5\u770B\u8BBF\u95EE\u65E5\u5FD7",text:"\u67E5\u770B\u8BBF\u95EE\u65E5\u5FD7"},{depth:3,slug:"\u5DF2\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6",text:"\u5DF2\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6"},{depth:3,slug:"\u672A\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6",text:"\u672A\u5F00\u542F\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6"},{depth:2,slug:"\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7",text:"\u8C03\u6574\u65E5\u5FD7\u7B49\u7EA7"}]},e=r((E,b,m)=>{const{layout:f,...t}=i;return t.file=a,t.url=l,p`${g()}${y(s)}`})});export{e as Content,v as __tla,o as compiledContent,e as default,a as file,i as frontmatter,n as getHeadings,c as rawContent,l as url};
