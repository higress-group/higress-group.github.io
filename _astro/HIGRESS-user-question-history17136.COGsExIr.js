import{c as p,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as h,u as g,__tla as u}from"./constant.rdXuE_z8.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let e,o,t,a,i,l,r,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u6211\u600E\u4E48\u7528prometheus\u76D1\u63A7higress\u7684metrics</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u4F7F\u7528Prometheus\u76D1\u63A7Higress\u7684metrics\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4E4B\u4E00\u8FDB\u884C\u914D\u7F6E\uFF1A</p>
<h3 id="\u65B9\u6CD51\u4F7F\u7528higress-console\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6">\u65B9\u6CD51\uFF1A\u4F7F\u7528Higress Console\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6</h3>
<p><strong>\u6B65\u9AA4\u8BF4\u660E\uFF1A</strong></p>
<ol>
<li>
<p><strong>\u6DFB\u52A0Higress Helm\u4ED3\u5E93\uFF1A</strong>
\u9996\u5148\uFF0C\u60A8\u9700\u8981\u5728\u60A8\u7684\u96C6\u7FA4\u4E2D\u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B9E\u73B0\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5B89\u88C5Higress\u5E76\u542F\u7528\u76D1\u63A7\u529F\u80FD\uFF1A</strong>
\u63A5\u4E0B\u6765\uFF0C\u4F7F\u7528Helm\u5B89\u88C5Higress\uFF0C\u5E76\u901A\u8FC7\u8BBE\u7F6E<code dir="auto">global.o11y.enabled=true</code>\u6765\u542F\u7528\u5185\u7F6E\u7684\u76D1\u63A7\u5957\u4EF6\u3002\u5982\u679C\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E0D\u652F\u6301<code dir="auto">ReadWriteMany</code>\u8BBF\u95EE\u6A21\u5F0F\uFF0C\u8BF7\u540C\u65F6\u8BBE\u7F6E<code dir="auto">global.pvc.rwxSupported=false</code>\u3002\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">[--set </span><span style="--0:#9ECBFF">global.pvc.rwxSupported=</span><span style="--0:#79B8FF">false</span><span style="--0:#9ECBFF">]</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u6DFB\u52A0\u6B64\u884C</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system higress.io/higress \\\x7F    --create-namespace \\\x7F    --render-subchart-notes \\\x7F    --set global.o11y.enabled=true \\\x7F    [--set global.pvc.rwxSupported=false]  # \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u6DFB\u52A0\u6B64\u884C"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u8BBF\u95EE\u76D1\u63A7\u9762\u677F\uFF1A</strong>
\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EEHigress Console\uFF0C\u4ECE\u5DE6\u4FA7\u5BFC\u822A\u680F\u9009\u62E9\u201C\u76D1\u63A7\u9762\u677F\u201D\uFF0C\u5373\u53EF\u67E5\u770B\u5230\u9884\u914D\u7F6E\u597D\u7684\u76D1\u63A7\u4FE1\u606F\u3002</p>
</li>
</ol>
<h3 id="\u65B9\u6CD52\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6">\u65B9\u6CD52\uFF1A\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6</h3>
<p>\u5982\u679C\u60A8\u66F4\u503E\u5411\u4E8E\u4F7F\u7528\u5DF2\u6709\u7684Prometheus\u548CGrafana\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u914D\u7F6E\uFF1A</p>
<ol>
<li>
<p><strong>\u914D\u7F6EPrometheus\u6307\u6807\u91C7\u96C6\uFF1A</strong>
\u5728\u60A8\u7684Prometheus\u914D\u7F6E\u4E2D\u6DFB\u52A0Higress\u6570\u636E\u9762\u548C\u63A7\u5236\u9762\u7EC4\u4EF6\u7684Metrics\u7AEF\u70B9\u3002\u8FD9\u4E9B\u7AEF\u70B9\u901A\u5E38\u4F1A\u5728Higress\u7EC4\u4EF6\u7684Service\u6216Pod\u4E2D\u4EE5metrics\u8DEF\u5F84\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u5177\u4F53\u5730\u5740\u9700\u6839\u636EHigress\u7684\u5B9E\u9645\u90E8\u7F72\u60C5\u51B5\u786E\u5B9A\u3002</p>
</li>
<li>
<p><strong>\u521B\u5EFAGrafana\u76D1\u63A7\u9762\u677F\uFF1A</strong>
\u5728Grafana\u4E2D\u521B\u5EFA\u65B0\u7684Dashboard\uFF0C\u5229\u7528Prometheus\u4F5C\u4E3A\u6570\u636E\u6E90\uFF0C\u914D\u7F6E\u67E5\u8BE2\u4EE5\u5C55\u793AHigress\u7684\u76F8\u5173Metrics\u3002\u60A8\u53EF\u80FD\u9700\u8981\u67E5\u9605Higress\u7684\u6587\u6863\u4EE5\u4E86\u89E3\u6709\u54EA\u4E9B\u5177\u4F53\u7684Metrics\u53EF\u7528\u3002</p>
</li>
<li>
<p><strong>\u96C6\u6210\u81F3Higress Console\uFF08\u53EF\u9009\uFF09\uFF1A</strong>
\u5982\u679C\u5E0C\u671B\u5728Higress Console\u4E2D\u5C55\u793A\u8FD9\u4E2A\u5916\u90E8\u7684Grafana\u9762\u677F\uFF0C\u53EF\u4EE5\u5728\u201C\u76D1\u63A7\u9762\u677F\u201D\u9875\u9762\u914D\u7F6E\u5916\u90E8\u76D1\u63A7\u9762\u677F\u7684URL\u3002\u6309\u7167\u9875\u9762\u63D0\u793A\u64CD\u4F5C\uFF0C\u4FDD\u5B58\u914D\u7F6E\u540E\u5373\u53EF\u5728Console\u5185\u76F4\u63A5\u8BBF\u95EE\u8BE5\u76D1\u63A7\u9762\u677F\u3002</p>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA\uFF1A</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u786E\u4FDD\u4E86\u65E0\u8BBA\u60A8\u662F\u5E0C\u671B\u901A\u8FC7Higress\u81EA\u5E26\u7684\u7B80\u4FBF\u65B9\u6848\u8FD8\u662F\u5229\u7528\u73B0\u6709\u7684\u76D1\u63A7\u57FA\u7840\u8BBE\u65BD\uFF0C\u90FD\u80FD\u6709\u6548\u5730\u76D1\u63A7Higress\u7684\u5165\u53E3\u6D41\u91CF\u548C\u5176\u4ED6\u5173\u952E\u6027\u80FD\u6307\u6807\u3002\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6\u7B80\u5316\u4E86\u90E8\u7F72\u548C\u914D\u7F6E\u8FC7\u7A0B\uFF0C\u800C\u72EC\u7ACB\u90E8\u7F72\u65B9\u6848\u5219\u63D0\u4F9B\u4E86\u66F4\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u5B9A\u5236\u5316\u7A7A\u95F4\u3002\u8BF7\u6839\u636E\u60A8\u7684\u5B9E\u9645\u9700\u6C42\u548C\u8D44\u6E90\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u76D1\u63A7\u65B9\u6848\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17148" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,a={id:"question-history-17136",title:"\u6211\u600E\u4E48\u7528prometheus\u76D1\u63A7higress\u7684metrics",date:"2024-09-26",category:"expertConsultation",description:"\u8981\u4F7F\u7528Prometheus\u76D1\u63A7Higress\u7684metrics\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4E4B\u4E00\u8FDB\u884C\u914D\u7F6E\uFF1A### \u65B9\u6CD51\uFF1A\u4F7F\u7528Higress Console\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6**\u6B65\u9AA4\u8BF4\u660E\uFF1A**1. **\u6DFB\u52A0Higress Helm\u4ED3\u5E93\uFF1A**   \u9996\u5148\uFF0C\u60A8\u9700\u8981\u5728\u60A8\u7684\u96C6\u7FA4\u4E2D\u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\u3002\u8FD9\u53EF\u4EE5\u901A",tags:["higress","prometheus","\u76D1\u63A7","metrics","\u4F7F\u7528","\u65B9\u6CD5","\u6559\u7A0B"],keywords:["higress","prometheus","\u76D1\u63A7","metrics","\u4F7F\u7528","\u65B9\u6CD5","\u6559\u7A0B"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17136.md",r=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u6211\u600E\u4E48\u7528prometheus\u76D1\u63A7higress\u7684metrics  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u4F7F\u7528Prometheus\u76D1\u63A7Higress\u7684metrics\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u4E4B\u4E00\u8FDB\u884C\u914D\u7F6E\uFF1A

### \u65B9\u6CD51\uFF1A\u4F7F\u7528Higress Console\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6

**\u6B65\u9AA4\u8BF4\u660E\uFF1A**

1. **\u6DFB\u52A0Higress Helm\u4ED3\u5E93\uFF1A**
   \u9996\u5148\uFF0C\u60A8\u9700\u8981\u5728\u60A8\u7684\u96C6\u7FA4\u4E2D\u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B9E\u73B0\uFF1A
   \`\`\`bash
   helm repo add higress.io https://higress.io/helm-charts
   \`\`\`

2. **\u5B89\u88C5Higress\u5E76\u542F\u7528\u76D1\u63A7\u529F\u80FD\uFF1A**
   \u63A5\u4E0B\u6765\uFF0C\u4F7F\u7528Helm\u5B89\u88C5Higress\uFF0C\u5E76\u901A\u8FC7\u8BBE\u7F6E\`global.o11y.enabled=true\`\u6765\u542F\u7528\u5185\u7F6E\u7684\u76D1\u63A7\u5957\u4EF6\u3002\u5982\u679C\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E0D\u652F\u6301\`ReadWriteMany\`\u8BBF\u95EE\u6A21\u5F0F\uFF0C\u8BF7\u540C\u65F6\u8BBE\u7F6E\`global.pvc.rwxSupported=false\`\u3002\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A
   \`\`\`bash
   helm install higress -n higress-system higress.io/higress \\
       --create-namespace \\
       --render-subchart-notes \\
       --set global.o11y.enabled=true \\
       [--set global.pvc.rwxSupported=false]  # \u6839\u636E\u5B9E\u9645\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u6DFB\u52A0\u6B64\u884C
   \`\`\`

3. **\u8BBF\u95EE\u76D1\u63A7\u9762\u677F\uFF1A**
   \u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EEHigress Console\uFF0C\u4ECE\u5DE6\u4FA7\u5BFC\u822A\u680F\u9009\u62E9\u201C\u76D1\u63A7\u9762\u677F\u201D\uFF0C\u5373\u53EF\u67E5\u770B\u5230\u9884\u914D\u7F6E\u597D\u7684\u76D1\u63A7\u4FE1\u606F\u3002

### \u65B9\u6CD52\uFF1A\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6

\u5982\u679C\u60A8\u66F4\u503E\u5411\u4E8E\u4F7F\u7528\u5DF2\u6709\u7684Prometheus\u548CGrafana\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u914D\u7F6E\uFF1A

1. **\u914D\u7F6EPrometheus\u6307\u6807\u91C7\u96C6\uFF1A**
   \u5728\u60A8\u7684Prometheus\u914D\u7F6E\u4E2D\u6DFB\u52A0Higress\u6570\u636E\u9762\u548C\u63A7\u5236\u9762\u7EC4\u4EF6\u7684Metrics\u7AEF\u70B9\u3002\u8FD9\u4E9B\u7AEF\u70B9\u901A\u5E38\u4F1A\u5728Higress\u7EC4\u4EF6\u7684Service\u6216Pod\u4E2D\u4EE5metrics\u8DEF\u5F84\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u5177\u4F53\u5730\u5740\u9700\u6839\u636EHigress\u7684\u5B9E\u9645\u90E8\u7F72\u60C5\u51B5\u786E\u5B9A\u3002

2. **\u521B\u5EFAGrafana\u76D1\u63A7\u9762\u677F\uFF1A**
   \u5728Grafana\u4E2D\u521B\u5EFA\u65B0\u7684Dashboard\uFF0C\u5229\u7528Prometheus\u4F5C\u4E3A\u6570\u636E\u6E90\uFF0C\u914D\u7F6E\u67E5\u8BE2\u4EE5\u5C55\u793AHigress\u7684\u76F8\u5173Metrics\u3002\u60A8\u53EF\u80FD\u9700\u8981\u67E5\u9605Higress\u7684\u6587\u6863\u4EE5\u4E86\u89E3\u6709\u54EA\u4E9B\u5177\u4F53\u7684Metrics\u53EF\u7528\u3002

3. **\u96C6\u6210\u81F3Higress Console\uFF08\u53EF\u9009\uFF09\uFF1A**
   \u5982\u679C\u5E0C\u671B\u5728Higress Console\u4E2D\u5C55\u793A\u8FD9\u4E2A\u5916\u90E8\u7684Grafana\u9762\u677F\uFF0C\u53EF\u4EE5\u5728\u201C\u76D1\u63A7\u9762\u677F\u201D\u9875\u9762\u914D\u7F6E\u5916\u90E8\u76D1\u63A7\u9762\u677F\u7684URL\u3002\u6309\u7167\u9875\u9762\u63D0\u793A\u64CD\u4F5C\uFF0C\u4FDD\u5B58\u914D\u7F6E\u540E\u5373\u53EF\u5728Console\u5185\u76F4\u63A5\u8BBF\u95EE\u8BE5\u76D1\u63A7\u9762\u677F\u3002

### \u89E3\u91CA\uFF1A
\u4EE5\u4E0A\u6B65\u9AA4\u786E\u4FDD\u4E86\u65E0\u8BBA\u60A8\u662F\u5E0C\u671B\u901A\u8FC7Higress\u81EA\u5E26\u7684\u7B80\u4FBF\u65B9\u6848\u8FD8\u662F\u5229\u7528\u73B0\u6709\u7684\u76D1\u63A7\u57FA\u7840\u8BBE\u65BD\uFF0C\u90FD\u80FD\u6709\u6548\u5730\u76D1\u63A7Higress\u7684\u5165\u53E3\u6D41\u91CF\u548C\u5176\u4ED6\u5173\u952E\u6027\u80FD\u6307\u6807\u3002\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6\u7B80\u5316\u4E86\u90E8\u7F72\u548C\u914D\u7F6E\u8FC7\u7A0B\uFF0C\u800C\u72EC\u7ACB\u90E8\u7F72\u65B9\u6848\u5219\u63D0\u4F9B\u4E86\u66F4\u9AD8\u7684\u7075\u6D3B\u6027\u548C\u5B9A\u5236\u5316\u7A7A\u95F4\u3002\u8BF7\u6839\u636E\u60A8\u7684\u5B9E\u9645\u9700\u6C42\u548C\u8D44\u6E90\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u76D1\u63A7\u65B9\u6848\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17148)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},o=function(){return s},i=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u65B9\u6CD51\u4F7F\u7528higress-console\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6",text:"\u65B9\u6CD51\uFF1A\u4F7F\u7528Higress Console\u7684\u5185\u7F6E\u76D1\u63A7\u5957\u4EF6"},{depth:3,slug:"\u65B9\u6CD52\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6",text:"\u65B9\u6CD52\uFF1A\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684\u76D1\u63A7\u5957\u4EF6"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA\uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=p((m,E,F)=>{const{layout:b,...n}=a;return n.file=t,n.url=r,d`${h()}${g(s)}`})});export{e as Content,f as __tla,o as compiledContent,e as default,t as file,a as frontmatter,i as getHeadings,l as rawContent,r as url};
