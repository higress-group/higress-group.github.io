import{c as p,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as h,u as g,__tla as u}from"./constant.C798a0v1.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let e,i,t,a,o,l,n,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress k8s\u90E8\u7F72</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\u201Chigress higress k8s\u90E8\u7F72\u201D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728Kubernetes(K8s)\u73AF\u5883\u4E2D\u90E8\u7F72Higress\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u7684\u8BE6\u7EC6\u6B65\u9AA4\u53CA\u8BF4\u660E\uFF1A</p>
<h3 id="\u90E8\u7F72\u51C6\u5907">\u90E8\u7F72\u51C6\u5907</h3>
<ol>
<li>
<p><strong>\u73AF\u5883\u914D\u7F6E</strong>: \u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u8FD0\u884C\u6B63\u5E38\u7684Kubernetes\u96C6\u7FA4\u3002\u8FD9\u53EF\u4EE5\u662F\u672C\u5730\u73AF\u5883\u5982\u4F7F\u7528<code dir="auto">kind</code>\u521B\u5EFA\u7684\u96C6\u7FA4\uFF0C\u6216\u662F\u8FDC\u7A0B\u7684\u6807\u51C6K8s\u96C6\u7FA4\u3002</p>
</li>
<li>
<p><strong>\u6DFB\u52A0Higress Helm\u4ED3\u5E93</strong>:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="\u90E8\u7F72higress">\u90E8\u7F72Higress</h3>
<ol start="3">
<li><strong>\u5B89\u88C5Higress\u5230K8s\u96C6\u7FA4</strong>:
\u5982\u679C\u662F\u672C\u5730\u96C6\u7FA4\uFF08\u4F8B\u5982\u4F7F\u7528<code dir="auto">kind</code>\uFF09\uFF0C\u9700\u6307\u5B9A<code dir="auto">--set global.local=true</code>\u4EE5\u9002\u5E94\u672C\u5730\u73AF\u5883\u914D\u7F6E\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system higress.io/higress \\\x7F  --create-namespace \\\x7F  --render-subchart-notes \\\x7F  --set global.local=true \\\x7F  --set higress-console.o11y.enabled=false"><div></div></button></div></figure></div>
\u8FD9\u4E00\u6B65\u9AA4\u4F1A\u5B89\u88C5Higress\u5230\u540D\u4E3A<code dir="auto">higress-system</code>\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u5E76\u7981\u7528\u63A7\u5236\u53F0\u7684\u53EF\u89C2\u6D4B\u6027\u529F\u80FD\u4EE5\u7B80\u5316\u90E8\u7F72\u3002</li>
</ol>
<h3 id="\u7AEF\u53E3\u6620\u5C04\u4E0E\u8BBF\u95EE\u4EC5\u672C\u5730\u96C6\u7FA4\u65F6\u9700\u8981">\u7AEF\u53E3\u6620\u5C04\u4E0E\u8BBF\u95EE\uFF08\u4EC5\u672C\u5730\u96C6\u7FA4\u65F6\u9700\u8981\uFF09</h3>
<ol start="4">
<li><strong>\uFF08\u53EF\u9009\uFF09\u7AEF\u53E3\u8F6C\u53D1</strong>:
\u5BF9\u4E8E\u672C\u5730\u96C6\u7FA4\uFF0C\u786E\u4FDDHigress Gateway\u53EF\u4EE5\u901A\u8FC780\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">80:80</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">443:443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443"><div></div></button></div></figure></div>
\u5982\u679C\u60A8\u76F4\u63A5\u5728\u96C6\u7FA4\u5916\u90E8\u53EF\u4EE5\u8BBF\u95EE\u8D1F\u8F7D\u5747\u8861\u5668IP\uFF08\u4F8B\u5982\u901A\u8FC7<code dir="auto">kubectl get svc -n higress-system higress-gateway</code>\u83B7\u53D6\uFF09\uFF0C\u5219\u6B64\u6B65\u9AA4\u53EF\u7701\u7565\u3002</li>
</ol>
<h3 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h3>
<ol start="5">
<li><strong>\u521B\u5EFA\u8DEF\u7531\u548C\u670D\u52A1</strong>:
\u5047\u8BBE\u60A8\u5E0C\u671B\u4E3A\u4E00\u4E2A\u540D\u4E3A<code dir="auto">foo</code>\u7684\u670D\u52A1\u521B\u5EFA\u8DEF\u7531\uFF0C\u4F7F\u5176\u53EF\u901A\u8FC7<code dir="auto">http://foo.bar.com/foo</code>\u8BBF\u95EE\u3002\u9996\u5148\uFF0C\u786E\u4FDD\u670D\u52A1\u5DF2\u90E8\u7F72\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2AIngress\u8D44\u6E90\u6765\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u3002\u867D\u7136\u8FD9\u91CC\u672A\u76F4\u63A5\u63D0\u4F9B\u521B\u5EFAIngress\u7684\u547D\u4EE4\uFF0C\u4F46\u60A8\u53EF\u4EE5\u53C2\u8003Higress\u6587\u6863\u4E2D\u5173\u4E8E<a href="https://higress.cn/docs/latest/usage/routing/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8DEF\u7531\u914D\u7F6E</a>\u7684\u90E8\u5206\u6765\u5B9A\u5236\u60A8\u7684\u8DEF\u7531\u89C4\u5219\u3002</li>
</ol>
<h3 id="\u5907\u6CE8">\u5907\u6CE8</h3>
<ul>
<li>\u4E0A\u8FF0\u90E8\u7F72\u6B65\u9AA4\u9002\u7528\u4E8E\u5FEB\u901F\u542F\u52A8Higress\uFF0C\u7279\u522B\u662F\u5728\u672C\u5730\u5F00\u53D1\u6216\u6D4B\u8BD5\u573A\u666F\u4E2D\u3002</li>
<li>\u5982\u9700\u542F\u7528Higress\u7684\u5176\u4ED6\u5185\u7F6E\u529F\u80FD\uFF0C\u5982\u53EF\u89C2\u6D4B\u6027\u5DE5\u5177\u7B49\uFF0C\u8BF7\u67E5\u9605<a href="https://higress.cn/docs/latest/ops/deploy-by-helm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u5B98\u65B9\u6587\u6863\u7684\u5B89\u88C5\u90E8\u7F72\u7AE0\u8282</a>\u3002</li>
<li>\u786E\u4FDD\u5728\u6267\u884C\u547D\u4EE4\u524D\uFF0C\u60A8\u7684\u73AF\u5883\u5DF2\u6B63\u786E\u914D\u7F6E\u4E86<code dir="auto">helm</code>\u4E0E<code dir="auto">kubectl</code>\uFF0C\u5E76\u5177\u5907\u76F8\u5E94\u7684\u6267\u884C\u6743\u9650\u3002</li>
</ul>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u5E94\u80FD\u6307\u5BFC\u60A8\u5B8C\u6210Higress\u5728Kubernetes\u96C6\u7FA4\u4E2D\u7684\u90E8\u7F72\u548C\u57FA\u672C\u914D\u7F6E\u3002\u5982\u679C\u6709\u66F4\u5177\u4F53\u7684\u914D\u7F6E\u9700\u6C42\u6216\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u5EFA\u8BAE\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u4EE5\u83B7\u53D6\u66F4\u8BE6\u5C3D\u7684\u4FE1\u606F\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16989" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,a={id:"question-history-16982",title:"higress k8s\u90E8\u7F72",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\u201Chigress higress k8s\u90E8\u7F72\u201D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728Kubernetes(K8s)\u73AF\u5883\u4E2D\u90E8\u7F72Higress\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u7684\u8BE6\u7EC6\u6B65\u9AA4\u53CA\u8BF4\u660E\uFF1A### \u90E8\u7F72\u51C6\u59071. **\u73AF\u5883\u914D\u7F6E**: \u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u8FD0\u884C\u6B63\u5E38\u7684Kubernetes\u96C6\u7FA4\u3002\u8FD9\u53EF\u4EE5\u662F\u672C\u5730\u73AF\u5883\u5982\u4F7F\u7528`kind",tags:["higress","k8s","\u90E8\u7F72"],keywords:["higress","k8s","\u90E8\u7F72"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16982.md",n=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress k8s\u90E8\u7F72  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\u201Chigress higress k8s\u90E8\u7F72\u201D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728Kubernetes(K8s)\u73AF\u5883\u4E2D\u90E8\u7F72Higress\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u7684\u8BE6\u7EC6\u6B65\u9AA4\u53CA\u8BF4\u660E\uFF1A

### \u90E8\u7F72\u51C6\u5907

1. **\u73AF\u5883\u914D\u7F6E**: \u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u8FD0\u884C\u6B63\u5E38\u7684Kubernetes\u96C6\u7FA4\u3002\u8FD9\u53EF\u4EE5\u662F\u672C\u5730\u73AF\u5883\u5982\u4F7F\u7528\`kind\`\u521B\u5EFA\u7684\u96C6\u7FA4\uFF0C\u6216\u662F\u8FDC\u7A0B\u7684\u6807\u51C6K8s\u96C6\u7FA4\u3002

2. **\u6DFB\u52A0Higress Helm\u4ED3\u5E93**:
    \`\`\`shell
    helm repo add higress.io https://higress.io/helm-charts
    \`\`\`

### \u90E8\u7F72Higress

3. **\u5B89\u88C5Higress\u5230K8s\u96C6\u7FA4**:
    \u5982\u679C\u662F\u672C\u5730\u96C6\u7FA4\uFF08\u4F8B\u5982\u4F7F\u7528\`kind\`\uFF09\uFF0C\u9700\u6307\u5B9A\`--set global.local=true\`\u4EE5\u9002\u5E94\u672C\u5730\u73AF\u5883\u914D\u7F6E\uFF1A
    \`\`\`shell
    helm install higress -n higress-system higress.io/higress \\
      --create-namespace \\
      --render-subchart-notes \\
      --set global.local=true \\
      --set higress-console.o11y.enabled=false
    \`\`\`
    \u8FD9\u4E00\u6B65\u9AA4\u4F1A\u5B89\u88C5Higress\u5230\u540D\u4E3A\`higress-system\`\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u5E76\u7981\u7528\u63A7\u5236\u53F0\u7684\u53EF\u89C2\u6D4B\u6027\u529F\u80FD\u4EE5\u7B80\u5316\u90E8\u7F72\u3002

### \u7AEF\u53E3\u6620\u5C04\u4E0E\u8BBF\u95EE\uFF08\u4EC5\u672C\u5730\u96C6\u7FA4\u65F6\u9700\u8981\uFF09

4. **\uFF08\u53EF\u9009\uFF09\u7AEF\u53E3\u8F6C\u53D1**:
    \u5BF9\u4E8E\u672C\u5730\u96C6\u7FA4\uFF0C\u786E\u4FDDHigress Gateway\u53EF\u4EE5\u901A\u8FC780\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A
    \`\`\`shell
    kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
    \`\`\`
    \u5982\u679C\u60A8\u76F4\u63A5\u5728\u96C6\u7FA4\u5916\u90E8\u53EF\u4EE5\u8BBF\u95EE\u8D1F\u8F7D\u5747\u8861\u5668IP\uFF08\u4F8B\u5982\u901A\u8FC7\`kubectl get svc -n higress-system higress-gateway\`\u83B7\u53D6\uFF09\uFF0C\u5219\u6B64\u6B65\u9AA4\u53EF\u7701\u7565\u3002

### \u914D\u7F6E\u793A\u4F8B

5. **\u521B\u5EFA\u8DEF\u7531\u548C\u670D\u52A1**:
    \u5047\u8BBE\u60A8\u5E0C\u671B\u4E3A\u4E00\u4E2A\u540D\u4E3A\`foo\`\u7684\u670D\u52A1\u521B\u5EFA\u8DEF\u7531\uFF0C\u4F7F\u5176\u53EF\u901A\u8FC7\`http://foo.bar.com/foo\`\u8BBF\u95EE\u3002\u9996\u5148\uFF0C\u786E\u4FDD\u670D\u52A1\u5DF2\u90E8\u7F72\uFF0C\u7136\u540E\u521B\u5EFA\u4E00\u4E2AIngress\u8D44\u6E90\u6765\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u3002\u867D\u7136\u8FD9\u91CC\u672A\u76F4\u63A5\u63D0\u4F9B\u521B\u5EFAIngress\u7684\u547D\u4EE4\uFF0C\u4F46\u60A8\u53EF\u4EE5\u53C2\u8003Higress\u6587\u6863\u4E2D\u5173\u4E8E[\u8DEF\u7531\u914D\u7F6E](https://higress.cn/docs/latest/usage/routing/)\u7684\u90E8\u5206\u6765\u5B9A\u5236\u60A8\u7684\u8DEF\u7531\u89C4\u5219\u3002

### \u5907\u6CE8

- \u4E0A\u8FF0\u90E8\u7F72\u6B65\u9AA4\u9002\u7528\u4E8E\u5FEB\u901F\u542F\u52A8Higress\uFF0C\u7279\u522B\u662F\u5728\u672C\u5730\u5F00\u53D1\u6216\u6D4B\u8BD5\u573A\u666F\u4E2D\u3002
- \u5982\u9700\u542F\u7528Higress\u7684\u5176\u4ED6\u5185\u7F6E\u529F\u80FD\uFF0C\u5982\u53EF\u89C2\u6D4B\u6027\u5DE5\u5177\u7B49\uFF0C\u8BF7\u67E5\u9605[Higress\u5B98\u65B9\u6587\u6863\u7684\u5B89\u88C5\u90E8\u7F72\u7AE0\u8282](https://higress.cn/docs/latest/ops/deploy-by-helm/)\u3002
- \u786E\u4FDD\u5728\u6267\u884C\u547D\u4EE4\u524D\uFF0C\u60A8\u7684\u73AF\u5883\u5DF2\u6B63\u786E\u914D\u7F6E\u4E86\`helm\`\u4E0E\`kubectl\`\uFF0C\u5E76\u5177\u5907\u76F8\u5E94\u7684\u6267\u884C\u6743\u9650\u3002

\u4EE5\u4E0A\u6B65\u9AA4\u5E94\u80FD\u6307\u5BFC\u60A8\u5B8C\u6210Higress\u5728Kubernetes\u96C6\u7FA4\u4E2D\u7684\u90E8\u7F72\u548C\u57FA\u672C\u914D\u7F6E\u3002\u5982\u679C\u6709\u66F4\u5177\u4F53\u7684\u914D\u7F6E\u9700\u6C42\u6216\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u5EFA\u8BAE\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u4EE5\u83B7\u53D6\u66F4\u8BE6\u5C3D\u7684\u4FE1\u606F\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16989)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},o=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u90E8\u7F72\u51C6\u5907",text:"\u90E8\u7F72\u51C6\u5907"},{depth:3,slug:"\u90E8\u7F72higress",text:"\u90E8\u7F72Higress"},{depth:3,slug:"\u7AEF\u53E3\u6620\u5C04\u4E0E\u8BBF\u95EE\u4EC5\u672C\u5730\u96C6\u7FA4\u65F6\u9700\u8981",text:"\u7AEF\u53E3\u6620\u5C04\u4E0E\u8BBF\u95EE\uFF08\u4EC5\u672C\u5730\u96C6\u7FA4\u65F6\u9700\u8981\uFF09"},{depth:3,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5907\u6CE8",text:"\u5907\u6CE8"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=p((E,F,b)=>{const{layout:m,...r}=a;return r.file=t,r.url=n,d`${h()}${g(s)}`})});export{e as Content,f as __tla,i as compiledContent,e as default,t as file,a as frontmatter,o as getHeadings,l as rawContent,n as url};
