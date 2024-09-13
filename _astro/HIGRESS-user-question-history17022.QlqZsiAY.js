import{c as r,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as d,m as h,u as g,__tla as u}from"./constant.tyGMsvAz.js";import{__tla as E}from"./astro/assets-service.Da9pL5MS.js";let e,i,a,t,l,p,n,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u7F51\u5173\u642D\u5EFA\u8D85\u8BE6\u7EC6\u6B65\u9AA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5173\u4E8EHigress\u7F51\u5173\u7684\u8D85\u8BE6\u7EC6\u642D\u5EFA\u6B65\u9AA4\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E3A\u60A8\u6574\u7406\u7684\u6307\u5357\uFF1A</p>
<h3 id="\u73AF\u5883\u4E00\u5728kubernetes-k8s\u4E2D\u4F7F\u7528">\u73AF\u5883\u4E00\uFF1A\u5728Kubernetes (K8s)\u4E2D\u4F7F\u7528</h3>
<h4 id="\u9636\u6BB5\u4E00\u5B89\u88C5\u524D\u51C6\u5907">\u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5\u524D\u51C6\u5907</h4>
<ol>
<li><strong>\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177</strong>\uFF1A\u786E\u4FDD\u60A8\u5DF2\u5B89\u88C5 <code dir="auto">kubectl</code>, <code dir="auto">kind</code> \u6216\u8005\u60A8\u5DF2\u6709\u8FD0\u884C\u4E2D\u7684K8s\u96C6\u7FA4\u3002</li>
</ol>
<h4 id="\u9636\u6BB5\u4E8C\u521B\u5EFAk8s\u96C6\u7FA4\u5982\u9700">\u9636\u6BB5\u4E8C\uFF1A\u521B\u5EFAK8s\u96C6\u7FA4\uFF08\u5982\u9700\uFF09</h4>
<ol start="2">
<li><strong>\u914D\u7F6Ekind\u96C6\u7FA4</strong>\uFF1A\u4F7F\u7528\u5982\u4E0B\u914D\u7F6E\u6587\u4EF6<code dir="auto">cluster.conf</code>\uFF08\u5185\u5BB9\u672A\u76F4\u63A5\u7ED9\u51FA\uFF0C\u4F46\u5E94\u5305\u62EC\u4E0A\u6587\u63D0\u53CA\u7684\u8282\u70B9\u548C\u7AEF\u53E3\u6620\u5C04\u914D\u7F6E\uFF09\uFF0C\u5728Mac/Linux\u7CFB\u7EDF\u6267\u884C\uFF1A
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf\x7Fkubectl config use-context kind-higress"><div></div></button></div></figure></div>
\u5BF9\u4E8EWindows\u7CFB\u7EDF\uFF0C\u4F7F\u7528\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind.exe create cluster --name higress --config=cluster.conf\x7Fkubectl.exe config use-context kind-higress"><div></div></button></div></figure></div>
</li>
</ol>
<h4 id="\u9636\u6BB5\u4E09\u5B89\u88C5higress">\u9636\u6BB5\u4E09\uFF1A\u5B89\u88C5Higress</h4>
<ol start="3">
<li><strong>\u5B89\u88C5Higress Gateway</strong>\uFF1A\u901A\u8FC7Helm charts\u8FDB\u884C\u5B89\u88C5\uFF0C\u5E76\u542F\u7528\u672C\u5730\u6A21\u5F0F\u548C\u5173\u95ED\u53EF\u89C2\u6D4B\u6027\u529F\u80FD\uFF08\u5982\u679C\u4E0D\u9700\u8981\uFF09\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false"><div></div></button></div></figure></div>
</li>
</ol>
<h4 id="\u9636\u6BB5\u56DB\u914D\u7F6E\u793A\u4F8B\u670D\u52A1">\u9636\u6BB5\u56DB\uFF1A\u914D\u7F6E\u793A\u4F8B\u670D\u52A1</h4>
<ol start="4">
<li>
<p><strong>\u90E8\u7F72\u793A\u4F8B\u670D\u52A1</strong>\uFF1A\u901A\u8FC7YAML\u6587\u4EF6\u90E8\u7F72\u540D\u4E3A<code dir="auto">foo-app</code>\u7684Pod\u548C\u670D\u52A1\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># YAML\u5B9A\u4E49\u7565\uFF0C\u53C2\u7167\u4E0A\u6587\u7ED9\u51FA\u7684\u793A\u4F8B\u670D\u52A1\u5B9A\u4E49</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# YAML\u5B9A\u4E49\u7565\uFF0C\u53C2\u7167\u4E0A\u6587\u7ED9\u51FA\u7684\u793A\u4F8B\u670D\u52A1\u5B9A\u4E49"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u521B\u5EFAIngress\u89C4\u5219</strong>\uFF1A\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF0C\u6307\u5411\u521A\u521A\u90E8\u7F72\u7684\u670D\u52A1\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># YAML\u5B9A\u4E49\u7565\uFF0C\u53C2\u7167\u4E0A\u6587\u7ED9\u51FA\u7684Ingress\u914D\u7F6E</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# YAML\u5B9A\u4E49\u7565\uFF0C\u53C2\u7167\u4E0A\u6587\u7ED9\u51FA\u7684Ingress\u914D\u7F6E"><div></div></button></div></figure></div>
</li>
</ol>
<h4 id="\u9636\u6BB5\u4E94\u8BF7\u6C42\u9A8C\u8BC1">\u9636\u6BB5\u4E94\uFF1A\u8BF7\u6C42\u9A8C\u8BC1</h4>
<ol start="6">
<li><strong>\u9A8C\u8BC1\u8DEF\u7531</strong>\uFF1A\u4F7F\u7528<code dir="auto">curl</code>\u547D\u4EE4\u6216\u6D4F\u89C8\u5668\u8BBF\u95EE\u4EE5\u786E\u8BA4\u8DEF\u7531\u914D\u7F6E\u6B63\u786E\u65E0\u8BEF\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://GatewayIP/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://GatewayIP/foo -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="\u73AF\u5883\u4E8C\u8131\u79BBk8s\u5728docker-compose\u4E2D\u4F7F\u7528\u53EF\u9009">\u73AF\u5883\u4E8C\uFF1A\u8131\u79BBK8s\u5728Docker Compose\u4E2D\u4F7F\u7528\uFF08\u53EF\u9009\uFF09</h3>
<p>\u5982\u679C\u60A8\u9009\u62E9\u4E0D\u4F7F\u7528K8s\u73AF\u5883\uFF0C\u800C\u662F\u91C7\u7528Standalone\u6A21\u5F0F\u5728Docker Compose\u4E2D\u90E8\u7F72Higress\uFF0C\u53EF\u4EE5\u53C2\u8003\u63D0\u4F9B\u7684\u7B2C\u4E8C\u90E8\u5206\u6307\u5357\u8FDB\u884C\u5B89\u88C5\u548C\u914D\u7F6E\u3002\u8FD9\u5305\u62EC\u4F7F\u7528\u9884\u8BBE\u811A\u672C\u5B89\u88C5Higress\uFF0C\u5E76\u901A\u8FC7\u5176\u5185\u7F6E\u7684Nacos\u6216\u72EC\u7ACB\u90E8\u7F72\u7684Nacos\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u548C\u914D\u7F6E\u7BA1\u7406\u3002</p>
<p>\u8BF7\u6CE8\u610F\uFF0C\u4E0A\u8FF0\u6B65\u9AA4\u5047\u8BBE\u60A8\u5DF2\u5177\u5907\u57FA\u672C\u7684Kubernetes\u6216Docker Compose\u64CD\u4F5C\u7ECF\u9A8C\u3002\u6BCF\u4E2A\u9636\u6BB5\u7684\u5177\u4F53\u5B9E\u65BD\u7EC6\u8282\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\uFF0C\u90FD\u53EF\u4EE5\u5728Higress\u5B98\u65B9\u6587\u6863\u4E2D\u627E\u5230\u66F4\u8BE6\u5C3D\u7684\u6307\u5BFC\u3002</p>
<h3 id="\u603B\u7ED3">\u603B\u7ED3</h3>
<p>\u901A\u8FC7\u9075\u5FAA\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u5B8C\u6210Higress\u7F51\u5173\u4ECE\u73AF\u5883\u642D\u5EFA\u3001\u5B89\u88C5\u914D\u7F6E\u5230\u670D\u52A1\u9A8C\u8BC1\u7684\u5168\u8FC7\u7A0B\u3002\u5BF9\u4E8E\u66F4\u9AD8\u7EA7\u7684\u914D\u7F6E\u9700\u6C42\u6216\u9047\u5230\u7684\u7279\u5B9A\u95EE\u9898\uFF0C\u5EFA\u8BAE\u67E5\u9605<a href="https://higress.io/zh-cn/docs/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u5B98\u65B9\u6587\u6863</a>\u83B7\u53D6\u8FDB\u4E00\u6B65\u7684\u5E2E\u52A9\u548C\u4FE1\u606F\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5FEB\u901F\u5F00\u59CB</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17023" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-17022",title:"higress \u7F51\u5173\u642D\u5EFA\u8D85\u8BE6\u7EC6\u6B65\u9AA4",date:"2024-09-11",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5173\u4E8EHigress\u7F51\u5173\u7684\u8D85\u8BE6\u7EC6\u642D\u5EFA\u6B65\u9AA4\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E3A\u60A8\u6574\u7406\u7684\u6307\u5357\uFF1A### \u73AF\u5883\u4E00\uFF1A\u5728Kubernetes (K8s)\u4E2D\u4F7F\u7528#### \u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5\u524D\u51C6\u59071. **\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177**\uFF1A\u786E\u4FDD\u60A8\u5DF2\u5B89\u88C5 `kubectl`, `kind` \u6216\u8005\u60A8\u5DF2\u6709\u8FD0\u884C\u4E2D\u7684K8s\u96C6\u7FA4\u3002  "},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17022.md",n=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u7F51\u5173\u642D\u5EFA\u8D85\u8BE6\u7EC6\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5173\u4E8EHigress\u7F51\u5173\u7684\u8D85\u8BE6\u7EC6\u642D\u5EFA\u6B65\u9AA4\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E3A\u60A8\u6574\u7406\u7684\u6307\u5357\uFF1A

### \u73AF\u5883\u4E00\uFF1A\u5728Kubernetes (K8s)\u4E2D\u4F7F\u7528

#### \u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5\u524D\u51C6\u5907

1. **\u5B89\u88C5\u5FC5\u8981\u7684\u5DE5\u5177**\uFF1A\u786E\u4FDD\u60A8\u5DF2\u5B89\u88C5 \`kubectl\`, \`kind\` \u6216\u8005\u60A8\u5DF2\u6709\u8FD0\u884C\u4E2D\u7684K8s\u96C6\u7FA4\u3002
   
#### \u9636\u6BB5\u4E8C\uFF1A\u521B\u5EFAK8s\u96C6\u7FA4\uFF08\u5982\u9700\uFF09

2. **\u914D\u7F6Ekind\u96C6\u7FA4**\uFF1A\u4F7F\u7528\u5982\u4E0B\u914D\u7F6E\u6587\u4EF6\`cluster.conf\`\uFF08\u5185\u5BB9\u672A\u76F4\u63A5\u7ED9\u51FA\uFF0C\u4F46\u5E94\u5305\u62EC\u4E0A\u6587\u63D0\u53CA\u7684\u8282\u70B9\u548C\u7AEF\u53E3\u6620\u5C04\u914D\u7F6E\uFF09\uFF0C\u5728Mac/Linux\u7CFB\u7EDF\u6267\u884C\uFF1A
   \`\`\`bash
   kind create cluster --name higress --config=cluster.conf
   kubectl config use-context kind-higress
   \`\`\`
   \u5BF9\u4E8EWindows\u7CFB\u7EDF\uFF0C\u4F7F\u7528\uFF1A
   \`\`\`bash
   kind.exe create cluster --name higress --config=cluster.conf
   kubectl.exe config use-context kind-higress
   \`\`\`

#### \u9636\u6BB5\u4E09\uFF1A\u5B89\u88C5Higress

3. **\u5B89\u88C5Higress Gateway**\uFF1A\u901A\u8FC7Helm charts\u8FDB\u884C\u5B89\u88C5\uFF0C\u5E76\u542F\u7528\u672C\u5730\u6A21\u5F0F\u548C\u5173\u95ED\u53EF\u89C2\u6D4B\u6027\u529F\u80FD\uFF08\u5982\u679C\u4E0D\u9700\u8981\uFF09\uFF1A
   \`\`\`bash
   helm repo add higress.io https://higress.io/helm-charts
   helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
   \`\`\`

#### \u9636\u6BB5\u56DB\uFF1A\u914D\u7F6E\u793A\u4F8B\u670D\u52A1

4. **\u90E8\u7F72\u793A\u4F8B\u670D\u52A1**\uFF1A\u901A\u8FC7YAML\u6587\u4EF6\u90E8\u7F72\u540D\u4E3A\`foo-app\`\u7684Pod\u548C\u670D\u52A1\uFF1A
   \`\`\`yaml
   # YAML\u5B9A\u4E49\u7565\uFF0C\u53C2\u7167\u4E0A\u6587\u7ED9\u51FA\u7684\u793A\u4F8B\u670D\u52A1\u5B9A\u4E49
   \`\`\`

5. **\u521B\u5EFAIngress\u89C4\u5219**\uFF1A\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF0C\u6307\u5411\u521A\u521A\u90E8\u7F72\u7684\u670D\u52A1\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A
   \`\`\`yaml
   # YAML\u5B9A\u4E49\u7565\uFF0C\u53C2\u7167\u4E0A\u6587\u7ED9\u51FA\u7684Ingress\u914D\u7F6E
   \`\`\`

#### \u9636\u6BB5\u4E94\uFF1A\u8BF7\u6C42\u9A8C\u8BC1

6. **\u9A8C\u8BC1\u8DEF\u7531**\uFF1A\u4F7F\u7528\`curl\`\u547D\u4EE4\u6216\u6D4F\u89C8\u5668\u8BBF\u95EE\u4EE5\u786E\u8BA4\u8DEF\u7531\u914D\u7F6E\u6B63\u786E\u65E0\u8BEF\uFF1A
   \`\`\`bash
   curl http://GatewayIP/foo -H 'host: foo.bar.com'
   \`\`\`

### \u73AF\u5883\u4E8C\uFF1A\u8131\u79BBK8s\u5728Docker Compose\u4E2D\u4F7F\u7528\uFF08\u53EF\u9009\uFF09

\u5982\u679C\u60A8\u9009\u62E9\u4E0D\u4F7F\u7528K8s\u73AF\u5883\uFF0C\u800C\u662F\u91C7\u7528Standalone\u6A21\u5F0F\u5728Docker Compose\u4E2D\u90E8\u7F72Higress\uFF0C\u53EF\u4EE5\u53C2\u8003\u63D0\u4F9B\u7684\u7B2C\u4E8C\u90E8\u5206\u6307\u5357\u8FDB\u884C\u5B89\u88C5\u548C\u914D\u7F6E\u3002\u8FD9\u5305\u62EC\u4F7F\u7528\u9884\u8BBE\u811A\u672C\u5B89\u88C5Higress\uFF0C\u5E76\u901A\u8FC7\u5176\u5185\u7F6E\u7684Nacos\u6216\u72EC\u7ACB\u90E8\u7F72\u7684Nacos\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u548C\u914D\u7F6E\u7BA1\u7406\u3002

\u8BF7\u6CE8\u610F\uFF0C\u4E0A\u8FF0\u6B65\u9AA4\u5047\u8BBE\u60A8\u5DF2\u5177\u5907\u57FA\u672C\u7684Kubernetes\u6216Docker Compose\u64CD\u4F5C\u7ECF\u9A8C\u3002\u6BCF\u4E2A\u9636\u6BB5\u7684\u5177\u4F53\u5B9E\u65BD\u7EC6\u8282\uFF0C\u5305\u62EC\u5982\u4F55\u5904\u7406\u53EF\u80FD\u51FA\u73B0\u7684\u95EE\u9898\uFF0C\u90FD\u53EF\u4EE5\u5728Higress\u5B98\u65B9\u6587\u6863\u4E2D\u627E\u5230\u66F4\u8BE6\u5C3D\u7684\u6307\u5BFC\u3002

### \u603B\u7ED3

\u901A\u8FC7\u9075\u5FAA\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u5B8C\u6210Higress\u7F51\u5173\u4ECE\u73AF\u5883\u642D\u5EFA\u3001\u5B89\u88C5\u914D\u7F6E\u5230\u670D\u52A1\u9A8C\u8BC1\u7684\u5168\u8FC7\u7A0B\u3002\u5BF9\u4E8E\u66F4\u9AD8\u7EA7\u7684\u914D\u7F6E\u9700\u6C42\u6216\u9047\u5230\u7684\u7279\u5B9A\u95EE\u9898\uFF0C\u5EFA\u8BAE\u67E5\u9605[Higress\u5B98\u65B9\u6587\u6863](https://higress.io/zh-cn/docs/)\u83B7\u53D6\u8FDB\u4E00\u6B65\u7684\u5E2E\u52A9\u548C\u4FE1\u606F\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5FEB\u901F\u5F00\u59CB 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17023)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u73AF\u5883\u4E00\u5728kubernetes-k8s\u4E2D\u4F7F\u7528",text:"\u73AF\u5883\u4E00\uFF1A\u5728Kubernetes (K8s)\u4E2D\u4F7F\u7528"},{depth:4,slug:"\u9636\u6BB5\u4E00\u5B89\u88C5\u524D\u51C6\u5907",text:"\u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5\u524D\u51C6\u5907"},{depth:4,slug:"\u9636\u6BB5\u4E8C\u521B\u5EFAk8s\u96C6\u7FA4\u5982\u9700",text:"\u9636\u6BB5\u4E8C\uFF1A\u521B\u5EFAK8s\u96C6\u7FA4\uFF08\u5982\u9700\uFF09"},{depth:4,slug:"\u9636\u6BB5\u4E09\u5B89\u88C5higress",text:"\u9636\u6BB5\u4E09\uFF1A\u5B89\u88C5Higress"},{depth:4,slug:"\u9636\u6BB5\u56DB\u914D\u7F6E\u793A\u4F8B\u670D\u52A1",text:"\u9636\u6BB5\u56DB\uFF1A\u914D\u7F6E\u793A\u4F8B\u670D\u52A1"},{depth:4,slug:"\u9636\u6BB5\u4E94\u8BF7\u6C42\u9A8C\u8BC1",text:"\u9636\u6BB5\u4E94\uFF1A\u8BF7\u6C42\u9A8C\u8BC1"},{depth:3,slug:"\u73AF\u5883\u4E8C\u8131\u79BBk8s\u5728docker-compose\u4E2D\u4F7F\u7528\u53EF\u9009",text:"\u73AF\u5883\u4E8C\uFF1A\u8131\u79BBK8s\u5728Docker Compose\u4E2D\u4F7F\u7528\uFF08\u53EF\u9009\uFF09"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=r((f,F,v)=>{const{layout:b,...o}=t;return o.file=a,o.url=n,d`${h()}${g(s)}`})});export{e as Content,y as __tla,i as compiledContent,e as default,a as file,t as frontmatter,l as getHeadings,p as rawContent,n as url};
