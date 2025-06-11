import{c as o,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as h,u as g,__tla as E}from"./constant.BwWfJoOA.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let e,i,t,a,p,l,n,u=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u5728ecs\u4E0A\u5B89\u88C5\u8BE6\u7EC6\u8BF4\u660E</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5728ECS\uFF08Elastic Compute Service\uFF0C\u5F39\u6027\u8BA1\u7B97\u670D\u52A1\uFF09\u4E0A\u5B89\u88C5Higress\u7684\u8BE6\u7EC6\u8BF4\u660E\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u6CA1\u6709\u76F4\u63A5\u6DB5\u76D6\u5728ECS\u4E0A\u7684\u90E8\u7F72\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EKubernetes\uFF08K8s\uFF09\u73AF\u5883\u7684\u5B89\u88C5\u8BF4\u660E\u8FDB\u884C\u7C7B\u6BD4\u548C\u8C03\u6574\uFF0C\u56E0\u4E3AECS\u5B9E\u4F8B\u901A\u5E38\u88AB\u7528\u6765\u90E8\u7F72\u548C\u7BA1\u7406Kubernetes\u96C6\u7FA4\u3002\u4E0B\u9762\u662F\u6839\u636E\u901A\u7528\u7684K8s\u73AF\u5883\u5B89\u88C5Higress\u7684\u6B65\u9AA4\uFF0C\u9002\u5F53\u8C03\u6574\u4EE5\u9002\u5E94ECS\u73AF\u5883\u7684\u6307\u5BFC\uFF1A</p>
<h3 id="\u51C6\u5907\u5DE5\u4F5C">\u51C6\u5907\u5DE5\u4F5C</h3>
<ol>
<li>
<p><strong>\u786E\u4FDDECS\u5B9E\u4F8B\u51C6\u5907\u5C31\u7EEA</strong>\uFF1A</p>
<ul>
<li>\u786E\u4FDD\u60A8\u7684ECS\u5B9E\u4F8B\u64CD\u4F5C\u7CFB\u7EDF\u517C\u5BB9Kubernetes\u3002\u63A8\u8350\u4F7F\u7528Ubuntu\u6216CentOS\u7B49\u6D41\u884CLinux\u53D1\u884C\u7248\u3002</li>
<li>\u786E\u8BA4ECS\u5B9E\u4F8B\u6709\u8DB3\u591F\u7684\u8D44\u6E90\uFF08CPU\u3001\u5185\u5B58\uFF09\u6765\u8FD0\u884CKubernetes\u96C6\u7FA4\u4EE5\u53CAHigress\u3002</li>
</ul>
</li>
<li>
<p><strong>\u5B89\u88C5Kubernetes</strong>\uFF1A</p>
<ul>
<li>\u5728ECS\u4E0A\u624B\u52A8\u90E8\u7F72Kubernetes\u6216\u8005\u4F7F\u7528\u4E91\u670D\u52A1\u5546\u63D0\u4F9B\u7684Kubernetes\u670D\u52A1\uFF08\u5982\u963F\u91CC\u4E91ACK\uFF09\u6765\u5FEB\u901F\u90E8\u7F72K8s\u96C6\u7FA4\u3002\u5177\u4F53\u6B65\u9AA4\u8BF7\u53C2\u8003<a href="https://www.aliyun.com/product/kubernetes" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u963F\u91CC\u4E91ACK\u5B98\u65B9\u6587\u6863</a>\u6216\u5176\u4ED6Kubernetes\u5B89\u88C5\u6307\u5357\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u90E8\u7F72higress\u5230ecs\u4E0A\u7684kubernetes\u96C6\u7FA4">\u90E8\u7F72Higress\u5230ECS\u4E0A\u7684Kubernetes\u96C6\u7FA4</h3>
<h4 id="1-\u6DFB\u52A0higress-helm\u4ED3\u5E93">1. \u6DFB\u52A0Higress Helm\u4ED3\u5E93</h4>
<p>\u5728ECS\u4E0A\u901A\u8FC7kubectl\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
<h4 id="2-\u5B89\u88C5higress">2. \u5B89\u88C5Higress</h4>
<p>\u4F7F\u7528Helm\u5B89\u88C5Higress\u5230\u9ED8\u8BA4\u7684\u547D\u540D\u7A7A\u95F4\u6216\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u4F8B\u5982<code dir="auto">higress-system</code>\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<p>\u9488\u5BF9\u4E2D\u56FD\u5927\u9646\u5730\u533A\uFF0C\u53EF\u4F7F\u7528\u52A0\u901F\u955C\u50CF\u6E90\u8FDB\u884C\u5B89\u88C5\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.cn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.cn/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.cn https://higress.cn/helm-charts\x7Fhelm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<h4 id="3-\u914D\u7F6E\u5916\u90E8\u8BBF\u95EE">3. \u914D\u7F6E\u5916\u90E8\u8BBF\u95EE</h4>
<p>\u7531\u4E8EECS\u4E0D\u50CF\u4E91K8s\u670D\u52A1\u81EA\u52A8\u63D0\u4F9BLoadBalancer\uFF0C\u60A8\u9700\u8981\u9009\u62E9\u5408\u9002\u7684\u65B9\u5F0F\u4F7FHigress\u5BF9\u5916\u53EF\u8BBF\u95EE\uFF1A</p>
<ul>
<li>
<p><strong>\u4F7F\u7528NodePort</strong>\uFF1A\u4FEE\u6539Helm\u5B89\u88C5\u547D\u4EE4\uFF0C\u8BBE\u7F6E<code dir="auto">higress-core.gateway.type=NodePort</code>\uFF0C\u8FD9\u4F1A\u66B4\u9732Higress Gateway\u7684\u7AEF\u53E3\u5230ECS\u5B9E\u4F8B\u7684IP\u5730\u5740\u4E0A\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-core.gateway.type=NodePort</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system higress.io/higress \\\x7F  --set higress-core.gateway.type=NodePort \\\x7F  --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u914D\u7F6EIngress Controller</strong>\uFF1A\u5982\u679CECS\u4F4D\u4E8EVPC\u5185\uFF0C\u8003\u8651\u914D\u7F6E\u4E91\u63D0\u4F9B\u5546\u7684Ingress\u63A7\u5236\u5668\uFF08\u5982\u963F\u91CC\u4E91SLB\uFF09\uFF0C\u4EE5\u5B9E\u73B0\u4ECE\u516C\u7F51\u5230Kubernetes\u670D\u52A1\u7684\u8DEF\u7531\u3002</p>
</li>
<li>
<p><strong>\u81EA\u5EFA\u8D1F\u8F7D\u5747\u8861</strong>\uFF1A\u5BF9\u4E8E\u66F4\u590D\u6742\u7684\u7F51\u7EDC\u9700\u6C42\uFF0C\u53EF\u4EE5\u8003\u8651\u5728ECS\u5B9E\u4F8B\u524D\u90E8\u7F72MetalLB\u6216Nginx ingress controller\u4F5C\u4E3A\u8D1F\u8F7D\u5747\u8861\u5668\u3002</p>
</li>
</ul>
<h4 id="4-\u9A8C\u8BC1higress\u5B89\u88C5">4. \u9A8C\u8BC1Higress\u5B89\u88C5</h4>
<p>\u68C0\u67E5Higress\u670D\u52A1\u7684\u72B6\u6001\uFF0C\u5E76\u901A\u8FC7NodePort\u6216\u81EA\u5EFA\u8D1F\u8F7D\u5747\u8861\u7684\u5730\u5740\u548C\u7AEF\u53E3\u8BBF\u95EEHigress Gateway\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get pods -n higress-system"><div></div></button></div></figure></div>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4E0A\u8FF0\u6B65\u9AA4\u9996\u5148\u786E\u4FDDECS\u73AF\u5883\u80FD\u591F\u8FD0\u884CKubernetes\u96C6\u7FA4\uFF0C\u63A5\u7740\u901A\u8FC7Helm\u5DE5\u5177\u4FBF\u6377\u5730\u90E8\u7F72Higress\u3002\u8003\u8651\u5230ECS\u73AF\u5883\u7684\u7279\u6B8A\u6027\uFF0C\u63D0\u4F9B\u4E86\u4F7F\u7528NodePort\u4F5C\u4E3A\u57FA\u7840\u7684\u5916\u90E8\u8BBF\u95EE\u65B9\u5F0F\uFF0C\u5E76\u63D0\u53CA\u4E86\u66F4\u9AD8\u7EA7\u7684\u914D\u7F6E\u5982\u4F7F\u7528\u4E91\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u6216\u81EA\u5EFA\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7684\u7F51\u7EDC\u67B6\u6784\u9700\u6C42\u3002\u5B89\u88C5\u540E\uFF0C\u901A\u8FC7\u68C0\u67E5Pod\u72B6\u6001\u6765\u9A8C\u8BC1Higress\u662F\u5426\u6210\u529F\u90E8\u7F72\u5E76\u8FD0\u884C\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5FEB\u901F\u5F00\u59CB</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16975" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,a={id:"question-history-16969",title:"higress\u5728ecs\u4E0A\u5B89\u88C5\u8BE6\u7EC6\u8BF4\u660E",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5728ECS\uFF08Elastic Compute Service\uFF0C\u5F39\u6027\u8BA1\u7B97\u670D\u52A1\uFF09\u4E0A\u5B89\u88C5Higress\u7684\u8BE6\u7EC6\u8BF4\u660E\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u6CA1\u6709\u76F4\u63A5\u6DB5\u76D6\u5728ECS\u4E0A\u7684\u90E8\u7F72\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EKubernetes\uFF08K8s\uFF09\u73AF\u5883\u7684\u5B89\u88C5\u8BF4\u660E\u8FDB\u884C\u7C7B\u6BD4\u548C\u8C03\u6574\uFF0C\u56E0\u4E3AECS\u5B9E\u4F8B\u901A\u5E38\u88AB\u7528\u6765\u90E8\u7F72\u548C\u7BA1\u7406Kuberne",tags:["higress","\u5B89\u88C5","ecs","\u8BE6\u7EC6","\u8BF4\u660E"],keywords:["higress","\u5B89\u88C5","ecs","\u8BE6\u7EC6","\u8BF4\u660E"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16969.md",n=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u5728ecs\u4E0A\u5B89\u88C5\u8BE6\u7EC6\u8BF4\u660E  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5728ECS\uFF08Elastic Compute Service\uFF0C\u5F39\u6027\u8BA1\u7B97\u670D\u52A1\uFF09\u4E0A\u5B89\u88C5Higress\u7684\u8BE6\u7EC6\u8BF4\u660E\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u6CA1\u6709\u76F4\u63A5\u6DB5\u76D6\u5728ECS\u4E0A\u7684\u90E8\u7F72\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EKubernetes\uFF08K8s\uFF09\u73AF\u5883\u7684\u5B89\u88C5\u8BF4\u660E\u8FDB\u884C\u7C7B\u6BD4\u548C\u8C03\u6574\uFF0C\u56E0\u4E3AECS\u5B9E\u4F8B\u901A\u5E38\u88AB\u7528\u6765\u90E8\u7F72\u548C\u7BA1\u7406Kubernetes\u96C6\u7FA4\u3002\u4E0B\u9762\u662F\u6839\u636E\u901A\u7528\u7684K8s\u73AF\u5883\u5B89\u88C5Higress\u7684\u6B65\u9AA4\uFF0C\u9002\u5F53\u8C03\u6574\u4EE5\u9002\u5E94ECS\u73AF\u5883\u7684\u6307\u5BFC\uFF1A

### \u51C6\u5907\u5DE5\u4F5C

1. **\u786E\u4FDDECS\u5B9E\u4F8B\u51C6\u5907\u5C31\u7EEA**\uFF1A
   - \u786E\u4FDD\u60A8\u7684ECS\u5B9E\u4F8B\u64CD\u4F5C\u7CFB\u7EDF\u517C\u5BB9Kubernetes\u3002\u63A8\u8350\u4F7F\u7528Ubuntu\u6216CentOS\u7B49\u6D41\u884CLinux\u53D1\u884C\u7248\u3002
   - \u786E\u8BA4ECS\u5B9E\u4F8B\u6709\u8DB3\u591F\u7684\u8D44\u6E90\uFF08CPU\u3001\u5185\u5B58\uFF09\u6765\u8FD0\u884CKubernetes\u96C6\u7FA4\u4EE5\u53CAHigress\u3002

2. **\u5B89\u88C5Kubernetes**\uFF1A
   - \u5728ECS\u4E0A\u624B\u52A8\u90E8\u7F72Kubernetes\u6216\u8005\u4F7F\u7528\u4E91\u670D\u52A1\u5546\u63D0\u4F9B\u7684Kubernetes\u670D\u52A1\uFF08\u5982\u963F\u91CC\u4E91ACK\uFF09\u6765\u5FEB\u901F\u90E8\u7F72K8s\u96C6\u7FA4\u3002\u5177\u4F53\u6B65\u9AA4\u8BF7\u53C2\u8003[\u963F\u91CC\u4E91ACK\u5B98\u65B9\u6587\u6863](https://www.aliyun.com/product/kubernetes)\u6216\u5176\u4ED6Kubernetes\u5B89\u88C5\u6307\u5357\u3002

### \u90E8\u7F72Higress\u5230ECS\u4E0A\u7684Kubernetes\u96C6\u7FA4

#### 1. \u6DFB\u52A0Higress Helm\u4ED3\u5E93

\u5728ECS\u4E0A\u901A\u8FC7kubectl\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\uFF1A

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
\`\`\`

#### 2. \u5B89\u88C5Higress

\u4F7F\u7528Helm\u5B89\u88C5Higress\u5230\u9ED8\u8BA4\u7684\u547D\u540D\u7A7A\u95F4\u6216\u6307\u5B9A\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u4F8B\u5982\`higress-system\`\uFF1A

\`\`\`bash
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
\`\`\`

\u9488\u5BF9\u4E2D\u56FD\u5927\u9646\u5730\u533A\uFF0C\u53EF\u4F7F\u7528\u52A0\u901F\u955C\u50CF\u6E90\u8FDB\u884C\u5B89\u88C5\uFF1A

\`\`\`bash
helm repo add higress.cn https://higress.cn/helm-charts
helm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes
\`\`\`

#### 3. \u914D\u7F6E\u5916\u90E8\u8BBF\u95EE

\u7531\u4E8EECS\u4E0D\u50CF\u4E91K8s\u670D\u52A1\u81EA\u52A8\u63D0\u4F9BLoadBalancer\uFF0C\u60A8\u9700\u8981\u9009\u62E9\u5408\u9002\u7684\u65B9\u5F0F\u4F7FHigress\u5BF9\u5916\u53EF\u8BBF\u95EE\uFF1A

- **\u4F7F\u7528NodePort**\uFF1A\u4FEE\u6539Helm\u5B89\u88C5\u547D\u4EE4\uFF0C\u8BBE\u7F6E\`higress-core.gateway.type=NodePort\`\uFF0C\u8FD9\u4F1A\u66B4\u9732Higress Gateway\u7684\u7AEF\u53E3\u5230ECS\u5B9E\u4F8B\u7684IP\u5730\u5740\u4E0A\u3002
  
  \`\`\`bash
  helm install higress -n higress-system higress.io/higress \\
    --set higress-core.gateway.type=NodePort \\
    --create-namespace --render-subchart-notes
  \`\`\`

- **\u914D\u7F6EIngress Controller**\uFF1A\u5982\u679CECS\u4F4D\u4E8EVPC\u5185\uFF0C\u8003\u8651\u914D\u7F6E\u4E91\u63D0\u4F9B\u5546\u7684Ingress\u63A7\u5236\u5668\uFF08\u5982\u963F\u91CC\u4E91SLB\uFF09\uFF0C\u4EE5\u5B9E\u73B0\u4ECE\u516C\u7F51\u5230Kubernetes\u670D\u52A1\u7684\u8DEF\u7531\u3002

- **\u81EA\u5EFA\u8D1F\u8F7D\u5747\u8861**\uFF1A\u5BF9\u4E8E\u66F4\u590D\u6742\u7684\u7F51\u7EDC\u9700\u6C42\uFF0C\u53EF\u4EE5\u8003\u8651\u5728ECS\u5B9E\u4F8B\u524D\u90E8\u7F72MetalLB\u6216Nginx ingress controller\u4F5C\u4E3A\u8D1F\u8F7D\u5747\u8861\u5668\u3002

#### 4. \u9A8C\u8BC1Higress\u5B89\u88C5

\u68C0\u67E5Higress\u670D\u52A1\u7684\u72B6\u6001\uFF0C\u5E76\u901A\u8FC7NodePort\u6216\u81EA\u5EFA\u8D1F\u8F7D\u5747\u8861\u7684\u5730\u5740\u548C\u7AEF\u53E3\u8BBF\u95EEHigress Gateway\u3002

\`\`\`bash
kubectl get pods -n higress-system
\`\`\`

### \u89E3\u91CA

\u4E0A\u8FF0\u6B65\u9AA4\u9996\u5148\u786E\u4FDDECS\u73AF\u5883\u80FD\u591F\u8FD0\u884CKubernetes\u96C6\u7FA4\uFF0C\u63A5\u7740\u901A\u8FC7Helm\u5DE5\u5177\u4FBF\u6377\u5730\u90E8\u7F72Higress\u3002\u8003\u8651\u5230ECS\u73AF\u5883\u7684\u7279\u6B8A\u6027\uFF0C\u63D0\u4F9B\u4E86\u4F7F\u7528NodePort\u4F5C\u4E3A\u57FA\u7840\u7684\u5916\u90E8\u8BBF\u95EE\u65B9\u5F0F\uFF0C\u5E76\u63D0\u53CA\u4E86\u66F4\u9AD8\u7EA7\u7684\u914D\u7F6E\u5982\u4F7F\u7528\u4E91\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u6216\u81EA\u5EFA\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u7684\u7F51\u7EDC\u67B6\u6784\u9700\u6C42\u3002\u5B89\u88C5\u540E\uFF0C\u901A\u8FC7\u68C0\u67E5Pod\u72B6\u6001\u6765\u9A8C\u8BC1Higress\u662F\u5426\u6210\u529F\u90E8\u7F72\u5E76\u8FD0\u884C\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5FEB\u901F\u5F00\u59CB 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16975)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},p=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u51C6\u5907\u5DE5\u4F5C",text:"\u51C6\u5907\u5DE5\u4F5C"},{depth:3,slug:"\u90E8\u7F72higress\u5230ecs\u4E0A\u7684kubernetes\u96C6\u7FA4",text:"\u90E8\u7F72Higress\u5230ECS\u4E0A\u7684Kubernetes\u96C6\u7FA4"},{depth:4,slug:"1-\u6DFB\u52A0higress-helm\u4ED3\u5E93",text:"1. \u6DFB\u52A0Higress Helm\u4ED3\u5E93"},{depth:4,slug:"2-\u5B89\u88C5higress",text:"2. \u5B89\u88C5Higress"},{depth:4,slug:"3-\u914D\u7F6E\u5916\u90E8\u8BBF\u95EE",text:"3. \u914D\u7F6E\u5916\u90E8\u8BBF\u95EE"},{depth:4,slug:"4-\u9A8C\u8BC1higress\u5B89\u88C5",text:"4. \u9A8C\u8BC1Higress\u5B89\u88C5"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=o((m,F,C)=>{const{layout:b,...r}=a;return r.file=t,r.url=n,d`${h()}${g(s)}`})});export{e as Content,u as __tla,i as compiledContent,e as default,t as file,a as frontmatter,p as getHeadings,l as rawContent,n as url};
