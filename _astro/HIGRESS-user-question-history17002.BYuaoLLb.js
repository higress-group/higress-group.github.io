import{c as p,__tla as c}from"./astro-component.BNo6A4i3.js";import{r as d,m as g,u as h,__tla as u}from"./constant.C69AHRjj.js";import{__tla as y}from"./astro/assets-service.lesyujvn.js";let e,i,o,t,a,l,n,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress console \u7F51\u9875\u542F\u52A8\u5931\u8D25\u95EE\u9898\u6392\u67E5</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\u300Chigress higress console \u7F51\u9875\u542F\u52A8\u5931\u8D25\u95EE\u9898\u6392\u67E5\u300D\uFF0C\u867D\u7136\u76F4\u63A5\u76F8\u5173\u7684\u6545\u969C\u6392\u67E5\u4FE1\u606F\u4E0D\u5728\u7ED9\u5B9A\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u4F9D\u636EHigress\u7684\u5DE5\u4F5C\u539F\u7406\u53CA\u5176\u7EC4\u4EF6\u914D\u7F6E\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4E00\u4E2A\u6392\u67E5\u601D\u8DEF\u3002</p>
<h3 id="\u6392\u67E5\u601D\u8DEF\u4F9D\u636E">\u6392\u67E5\u601D\u8DEF\u4F9D\u636E</h3>
<ol>
<li>
<p><strong>\u68C0\u67E5Higress Console\u90E8\u7F72\u72B6\u6001</strong>
\u9996\u5148\uFF0C\u786E\u4FDDHigress Console\u5DF2\u7ECF\u88AB\u6B63\u786E\u90E8\u7F72\u5230\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E2D\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u5176\u90E8\u7F72\u72B6\u6001\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get pods -n higress-system"><div></div></button></div></figure></div>
<p>\u5982\u679C\u53D1\u73B0\u4EFB\u4F55Pod\u5904\u4E8E\u975ERunning\u72B6\u6001\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u901A\u8FC7<code dir="auto">kubectl describe pod &#x3C;pod-name> -n higress-system</code>\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u65E5\u5FD7\u3002</p>
</li>
<li>
<p><strong>\u68C0\u67E5Higress\u670D\u52A1\u7AEF\u53E3\u6620\u5C04</strong>
\u786E\u8BA4Higress Console\u7684\u670D\u52A1\u7AEF\u53E3\u662F\u5426\u5DF2\u88AB\u6B63\u786E\u6620\u5C04\u5E76\u4E14\u53EF\u4EE5\u4ECE\u5916\u90E8\u8BBF\u95EE\u3002\u53EF\u4EE5\u67E5\u770BService\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc -n higress-system"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5BA1\u67E5\u7F51\u7EDC\u7B56\u7565\u4E0E\u9632\u706B\u5899\u8BBE\u7F6E</strong>
\u786E\u4FDD\u96C6\u7FA4\u5185\u5916\u7684\u7F51\u7EDC\u7B56\u7565\u4EE5\u53CA\u4EFB\u4F55\u9632\u706B\u5899\u89C4\u5219\u6CA1\u6709\u963B\u6B62\u5BF9Higress Console\u7684\u8BBF\u95EE\u3002</p>
</li>
<li>
<p><strong>\u67E5\u770BHigress Console\u65E5\u5FD7</strong>
\u4ECE\u8FD0\u884CHigress Console\u7684Pod\u4E2D\u63D0\u53D6\u65E5\u5FD7\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u63ED\u793A\u542F\u52A8\u5931\u8D25\u7684\u5177\u4F53\u539F\u56E0\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;higress-console-pod-name></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs <higress-console-pod-name> -n higress-system"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u9A8C\u8BC1\u4F9D\u8D56\u670D\u52A1\u72B6\u6001</strong>
Higress Console\u53EF\u80FD\u4F9D\u8D56\u4E8E\u5176\u4ED6\u670D\u52A1\u5982Nacos\u3001Prometheus\u7B49\u6B63\u5E38\u8FD0\u884C\u3002\u786E\u8BA4\u8FD9\u4E9B\u670D\u52A1\u90FD\u5904\u4E8E\u5065\u5EB7\u72B6\u6001\u3002</p>
</li>
<li>
<p><strong>\u914D\u7F6E\u590D\u67E5</strong>
\u6839\u636EHigress Console\u7684\u5B89\u88C5\u6587\u6863\uFF0C\u590D\u67E5\u6240\u6709\u914D\u7F6E\u9879\uFF0C\u7279\u522B\u662F\u5F53\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u6216\u542F\u7528\u7279\u5B9A\u529F\u80FD\uFF08\u5982\u76D1\u63A7\uFF09\u65F6\uFF0C\u786E\u4FDD\u6240\u6709\u5FC5\u8981\u7684\u53C2\u6570\u5DF2\u6B63\u786E\u8BBE\u7F6E\u3002</p>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u7CFB\u7EDF\u6027\u5730\u5B9A\u4F4DHigress Console\u7F51\u9875\u542F\u52A8\u5931\u8D25\u7684\u539F\u56E0\u3002\u901A\u8FC7\u68C0\u67E5\u90E8\u7F72\u72B6\u6001\u3001\u670D\u52A1\u7AEF\u53E3\u6620\u5C04\u3001\u7F51\u7EDC\u7B56\u7565\u3001\u65E5\u5FD7\u4FE1\u606F\u3001\u4F9D\u8D56\u670D\u52A1\u53CA\u914D\u7F6E\uFF0C\u6211\u4EEC\u80FD\u591F\u9010\u6B65\u7F29\u5C0F\u95EE\u9898\u8303\u56F4\u5E76\u9488\u5BF9\u6027\u5730\u89E3\u51B3\u95EE\u9898\u3002\u6BCF\u4E00\u6B65\u90FD\u662F\u57FA\u4E8E\u786E\u4FDDHigress\u53CA\u5176\u76F8\u5173\u7EC4\u4EF6\u6B63\u5E38\u8FD0\u884C\u7684\u57FA\u672C\u8981\u6C42\uFF0C\u8FD9\u5BF9\u4E8E\u8BC6\u522B\u548C\u89E3\u51B3\u542F\u52A8\u5931\u8D25\u95EE\u9898\u81F3\u5173\u91CD\u8981\u3002</p>
<p>\u8BF7\u6CE8\u610F\uFF0C\u5177\u4F53\u89E3\u51B3\u65B9\u6848\u53EF\u80FD\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF0C\u4E0A\u8FF0\u6B65\u9AA4\u63D0\u4F9B\u4E86\u4E00\u4E2A\u57FA\u672C\u7684\u6545\u969C\u6392\u9664\u6846\u67B6\u3002\u5982\u679C\u5728\u6267\u884C\u8FD9\u4E9B\u6B65\u9AA4\u540E\u95EE\u9898\u4ECD\u672A\u89E3\u51B3\uFF0C\u5EFA\u8BAE\u67E5\u9605\u66F4\u8BE6\u7EC6\u7684Higress\u5B98\u65B9\u6587\u6863\u6216\u5728Higress\u793E\u533A\u5BFB\u6C42\u5E2E\u52A9\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u652F\u6301\u914D\u7F6E\u70ED\u66F4\u65B0\u5417?\uFF1F</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7F51\u7AD9\u5411\u5BFC</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17011" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-17002",title:"higress console \u7F51\u9875\u542F\u52A8\u5931\u8D25\u95EE\u9898\u6392\u67E5",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\u300Chigress higress console \u7F51\u9875\u542F\u52A8\u5931\u8D25\u95EE\u9898\u6392\u67E5\u300D\uFF0C\u867D\u7136\u76F4\u63A5\u76F8\u5173\u7684\u6545\u969C\u6392\u67E5\u4FE1\u606F\u4E0D\u5728\u7ED9\u5B9A\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u4F9D\u636EHigress\u7684\u5DE5\u4F5C\u539F\u7406\u53CA\u5176\u7EC4\u4EF6\u914D\u7F6E\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4E00\u4E2A\u6392\u67E5\u601D\u8DEF\u3002### \u6392\u67E5\u601D\u8DEF\u4F9D\u636E1. **\u68C0\u67E5Higress Console\u90E8\u7F72\u72B6\u6001**   \u9996\u5148",tags:["higress","console","\u7F51\u9875","\u542F\u52A8","\u5931\u8D25","\u95EE\u9898","\u6392\u67E5"],keywords:["higress","console","\u7F51\u9875","\u542F\u52A8","\u5931\u8D25","\u95EE\u9898","\u6392\u67E5"]},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17002.md",n=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress console \u7F51\u9875\u542F\u52A8\u5931\u8D25\u95EE\u9898\u6392\u67E5  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\u300Chigress higress console \u7F51\u9875\u542F\u52A8\u5931\u8D25\u95EE\u9898\u6392\u67E5\u300D\uFF0C\u867D\u7136\u76F4\u63A5\u76F8\u5173\u7684\u6545\u969C\u6392\u67E5\u4FE1\u606F\u4E0D\u5728\u7ED9\u5B9A\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u4F9D\u636EHigress\u7684\u5DE5\u4F5C\u539F\u7406\u53CA\u5176\u7EC4\u4EF6\u914D\u7F6E\uFF0C\u4E3A\u60A8\u63D0\u4F9B\u4E00\u4E2A\u6392\u67E5\u601D\u8DEF\u3002

### \u6392\u67E5\u601D\u8DEF\u4F9D\u636E

1. **\u68C0\u67E5Higress Console\u90E8\u7F72\u72B6\u6001**
   \u9996\u5148\uFF0C\u786E\u4FDDHigress Console\u5DF2\u7ECF\u88AB\u6B63\u786E\u90E8\u7F72\u5230\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E2D\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u68C0\u67E5\u5176\u90E8\u7F72\u72B6\u6001\uFF1A
   \`\`\`bash
   kubectl get pods -n higress-system
   \`\`\`
   \u5982\u679C\u53D1\u73B0\u4EFB\u4F55Pod\u5904\u4E8E\u975ERunning\u72B6\u6001\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u901A\u8FC7\`kubectl describe pod <pod-name> -n higress-system\`\u67E5\u770B\u5177\u4F53\u9519\u8BEF\u65E5\u5FD7\u3002

2. **\u68C0\u67E5Higress\u670D\u52A1\u7AEF\u53E3\u6620\u5C04**
   \u786E\u8BA4Higress Console\u7684\u670D\u52A1\u7AEF\u53E3\u662F\u5426\u5DF2\u88AB\u6B63\u786E\u6620\u5C04\u5E76\u4E14\u53EF\u4EE5\u4ECE\u5916\u90E8\u8BBF\u95EE\u3002\u53EF\u4EE5\u67E5\u770BService\u914D\u7F6E\uFF1A
   \`\`\`bash
   kubectl get svc -n higress-system
   \`\`\`

3. **\u5BA1\u67E5\u7F51\u7EDC\u7B56\u7565\u4E0E\u9632\u706B\u5899\u8BBE\u7F6E**
   \u786E\u4FDD\u96C6\u7FA4\u5185\u5916\u7684\u7F51\u7EDC\u7B56\u7565\u4EE5\u53CA\u4EFB\u4F55\u9632\u706B\u5899\u89C4\u5219\u6CA1\u6709\u963B\u6B62\u5BF9Higress Console\u7684\u8BBF\u95EE\u3002

4. **\u67E5\u770BHigress Console\u65E5\u5FD7**
   \u4ECE\u8FD0\u884CHigress Console\u7684Pod\u4E2D\u63D0\u53D6\u65E5\u5FD7\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u63ED\u793A\u542F\u52A8\u5931\u8D25\u7684\u5177\u4F53\u539F\u56E0\uFF1A
   \`\`\`bash
   kubectl logs <higress-console-pod-name> -n higress-system
   \`\`\`

5. **\u9A8C\u8BC1\u4F9D\u8D56\u670D\u52A1\u72B6\u6001**
   Higress Console\u53EF\u80FD\u4F9D\u8D56\u4E8E\u5176\u4ED6\u670D\u52A1\u5982Nacos\u3001Prometheus\u7B49\u6B63\u5E38\u8FD0\u884C\u3002\u786E\u8BA4\u8FD9\u4E9B\u670D\u52A1\u90FD\u5904\u4E8E\u5065\u5EB7\u72B6\u6001\u3002

6. **\u914D\u7F6E\u590D\u67E5**
   \u6839\u636EHigress Console\u7684\u5B89\u88C5\u6587\u6863\uFF0C\u590D\u67E5\u6240\u6709\u914D\u7F6E\u9879\uFF0C\u7279\u522B\u662F\u5F53\u4F7F\u7528\u81EA\u5B9A\u4E49\u914D\u7F6E\u6216\u542F\u7528\u7279\u5B9A\u529F\u80FD\uFF08\u5982\u76D1\u63A7\uFF09\u65F6\uFF0C\u786E\u4FDD\u6240\u6709\u5FC5\u8981\u7684\u53C2\u6570\u5DF2\u6B63\u786E\u8BBE\u7F6E\u3002

### \u89E3\u91CA

\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u7CFB\u7EDF\u6027\u5730\u5B9A\u4F4DHigress Console\u7F51\u9875\u542F\u52A8\u5931\u8D25\u7684\u539F\u56E0\u3002\u901A\u8FC7\u68C0\u67E5\u90E8\u7F72\u72B6\u6001\u3001\u670D\u52A1\u7AEF\u53E3\u6620\u5C04\u3001\u7F51\u7EDC\u7B56\u7565\u3001\u65E5\u5FD7\u4FE1\u606F\u3001\u4F9D\u8D56\u670D\u52A1\u53CA\u914D\u7F6E\uFF0C\u6211\u4EEC\u80FD\u591F\u9010\u6B65\u7F29\u5C0F\u95EE\u9898\u8303\u56F4\u5E76\u9488\u5BF9\u6027\u5730\u89E3\u51B3\u95EE\u9898\u3002\u6BCF\u4E00\u6B65\u90FD\u662F\u57FA\u4E8E\u786E\u4FDDHigress\u53CA\u5176\u76F8\u5173\u7EC4\u4EF6\u6B63\u5E38\u8FD0\u884C\u7684\u57FA\u672C\u8981\u6C42\uFF0C\u8FD9\u5BF9\u4E8E\u8BC6\u522B\u548C\u89E3\u51B3\u542F\u52A8\u5931\u8D25\u95EE\u9898\u81F3\u5173\u91CD\u8981\u3002

\u8BF7\u6CE8\u610F\uFF0C\u5177\u4F53\u89E3\u51B3\u65B9\u6848\u53EF\u80FD\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF0C\u4E0A\u8FF0\u6B65\u9AA4\u63D0\u4F9B\u4E86\u4E00\u4E2A\u57FA\u672C\u7684\u6545\u969C\u6392\u9664\u6846\u67B6\u3002\u5982\u679C\u5728\u6267\u884C\u8FD9\u4E9B\u6B65\u9AA4\u540E\u95EE\u9898\u4ECD\u672A\u89E3\u51B3\uFF0C\u5EFA\u8BAE\u67E5\u9605\u66F4\u8BE6\u7EC6\u7684Higress\u5B98\u65B9\u6587\u6863\u6216\u5728Higress\u793E\u533A\u5BFB\u6C42\u5E2E\u52A9\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u652F\u6301\u914D\u7F6E\u70ED\u66F4\u65B0\u5417?\uFF1F 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Prometheus \u5B9E\u73B0\u5165\u53E3\u6D41\u91CF\u89C2\u6D4B 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7F51\u7AD9\u5411\u5BFC 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17011)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u6392\u67E5\u601D\u8DEF\u4F9D\u636E",text:"\u6392\u67E5\u601D\u8DEF\u4F9D\u636E"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=p((E,m,b)=>{const{layout:v,...r}=t;return r.file=o,r.url=n,d`${g()}${h(s)}`})});export{e as Content,f as __tla,i as compiledContent,e as default,o as file,t as frontmatter,a as getHeadings,l as rawContent,n as url};
