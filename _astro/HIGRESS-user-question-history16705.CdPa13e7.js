import{c as l,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as d,m as g,u,__tla as h}from"./constant.8Jd2BsE0.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let e,i,t,n,o,p,r,b=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>k8s\u73AF\u5883\u90E8\u7F72higress</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u5B9E\u73B0\u5728Kubernetes (K8s) \u73AF\u5883\u4E2D\u90E8\u7F72 Higress\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u4F9D\u636E\u4E86\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A</p>
<h3 id="\u6B65\u9AA4\u5206\u6790\u4E0E\u64CD\u4F5C\u6307\u5357">\u6B65\u9AA4\u5206\u6790\u4E0E\u64CD\u4F5C\u6307\u5357</h3>
<h4 id="1-\u51C6\u5907kubernetes\u73AF\u5883">1. <strong>\u51C6\u5907Kubernetes\u73AF\u5883</strong></h4>
<p>\u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u7684Kubernetes\u96C6\u7FA4\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u7684minikube\u3001\u81EA\u5EFA\u96C6\u7FA4\u6216\u4E91\u670D\u52A1\u5546\u63D0\u4F9B\u7684Kubernetes\u670D\u52A1\u5982\u963F\u91CC\u4E91ACK\u6765\u5B9E\u73B0\u3002</p>
<h4 id="2-\u83B7\u53D6higress\u90E8\u7F72\u6587\u4EF6">2. <strong>\u83B7\u53D6Higress\u90E8\u7F72\u6587\u4EF6</strong></h4>
<p>\u4ECEHigress\u7684\u5B98\u65B9GitHub\u4ED3\u5E93\u4E2D\u83B7\u53D6\u6700\u65B0\u7684\u90E8\u7F72\u914D\u7F6E\u6587\u4EF6\u3002\u901A\u5E38\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4F1A\u5305\u62ECDeployment\u3001Service\u4EE5\u53CA\u5FC5\u8981\u7684CRDs\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u7B49YAML\u914D\u7F6E\u3002</p>
<h4 id="3-\u5B89\u88C5higress">3. <strong>\u5B89\u88C5Higress</strong></h4>
<p>\u4F7F\u7528<code dir="auto">kubectl</code>\u547D\u4EE4\u884C\u5DE5\u5177\u6765\u90E8\u7F72Higress\u5230\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E2D\u3002\u8FD9\u4E00\u6B65\u9AA4\u53EF\u80FD\u6D89\u53CA\u5E94\u7528YAML\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://raw.githubusercontent.com/higress-group/higress/master/deployments/kubernetes/higress.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f https://raw.githubusercontent.com/higress-group/higress/master/deployments/kubernetes/higress.yaml"><div></div></button></div></figure></div>
<p>\u8BF7\u6839\u636EHigress\u7684\u5B98\u65B9\u6587\u6863\u786E\u8BA4\u6B63\u786E\u7684\u90E8\u7F72\u547D\u4EE4\u548C\u6587\u4EF6URL\uFF0C\u56E0\u4E3A\u5B9E\u9645URL\u548C\u547D\u4EE4\u53EF\u80FD\u4F1A\u968F\u7248\u672C\u66F4\u65B0\u800C\u53D8\u5316\u3002</p>
<h4 id="4-\u914D\u7F6Eingress\u8D44\u6E90">4. <strong>\u914D\u7F6EIngress\u8D44\u6E90</strong></h4>
<p>\u521B\u5EFAIngress\u8D44\u6E90\u4EE5\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF0C\u4F7F\u5F97\u8FDB\u5165\u96C6\u7FA4\u7684\u6D41\u91CF\u80FD\u591F\u88AB\u6B63\u786E\u5730\u5BFC\u5411\u81F3\u540E\u7AEF\u670D\u52A1\u3002Higress\u9075\u5FAAKubernetes\u7684Ingress\u6807\u51C6\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u6309\u7167\u5E38\u89C4\u7684Ingress\u914D\u7F6E\u65B9\u5F0F\u6765\u7F16\u5199YAML\u6587\u4EF6\uFF0C\u5E76\u5E94\u7528\u81F3\u96C6\u7FA4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">your-ingress-resource.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f your-ingress-resource.yaml"><div></div></button></div></figure></div>
<h4 id="5-\u9A8C\u8BC1\u90E8\u7F72">5. <strong>\u9A8C\u8BC1\u90E8\u7F72</strong></h4>
<p>\u68C0\u67E5Higress\u53CA\u5176\u5173\u8054\u670D\u52A1\u662F\u5426\u6B63\u5E38\u8FD0\u884C\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;namespace></span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u786E\u8BA4\u6240\u6709Pod\u90FD\u5904\u4E8ERunning\u72B6\u6001</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;namespace></span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u786E\u8BA4\u670D\u52A1\u5DF2\u521B\u5EFA\u5E76\u8FD0\u884C</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get pods -n <namespace> # \u786E\u8BA4\u6240\u6709Pod\u90FD\u5904\u4E8ERunning\u72B6\u6001\x7Fkubectl get svc -n <namespace> # \u786E\u8BA4\u670D\u52A1\u5DF2\u521B\u5EFA\u5E76\u8FD0\u884C"><div></div></button></div></figure></div>
<p>\u5176\u4E2D\uFF0C<code dir="auto">&#x3C;namespace></code>\u5E94\u66FF\u6362\u4E3A\u60A8\u90E8\u7F72Higress\u6240\u5728\u7684\u547D\u540D\u7A7A\u95F4\u3002</p>
<h4 id="6-\u53EF\u9009\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027">6. <strong>\u53EF\u9009\uFF1A\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027</strong></h4>
<p>\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u60A8\u53EF\u80FD\u8FD8\u9700\u8981\u914D\u7F6E\u5982WAF\u3001\u8BA4\u8BC1\u9274\u6743\u3001\u670D\u52A1\u53D1\u73B0\u7B49\u76F8\u5173\u7279\u6027\u3002Higress\u652F\u6301\u901A\u8FC7CRDs\u6216\u5176Dashboard\u8FDB\u884C\u914D\u7F6E\u3002\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u8BF7\u53C2\u7167Higress\u5B98\u65B9\u6587\u6863\uFF0C\u5982<a href="https://higress.cn/docs/latest/user/service-discovery/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u670D\u52A1\u53D1\u73B0</a>\u3001<a href="https://higress.cn/docs/latest/user/waf/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WAF</a>\u7B49\u7AE0\u8282\u3002</p>
<h3 id="\u89E3\u91CA\u8BF4\u660E">\u89E3\u91CA\u8BF4\u660E</h3>
<ul>
<li><strong>\u4E3A\u4F55\u9009\u62E9Kubernetes\u90E8\u7F72</strong>\uFF1AK8s\u63D0\u4F9B\u4E86\u4E00\u79CD\u6807\u51C6\u5316\u7684\u65B9\u5F0F\u6765\u90E8\u7F72\u548C\u7BA1\u7406\u5BB9\u5668\u5316\u5E94\u7528\uFF0CHigress\u5BF9\u5176\u826F\u597D\u652F\u6301\u53EF\u4EE5\u7B80\u5316\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u7684\u7F51\u7EDC\u7BA1\u7406\uFF0C\u5229\u7528K8s\u7684\u81EA\u52A8\u6269\u7F29\u5BB9\uFF08HPA\uFF09\u3001\u6EDA\u52A8\u66F4\u65B0\u7B49\u7279\u6027\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u5F39\u6027\u3002</li>
<li><strong>\u914D\u7F6E\u6587\u4EF6\u6765\u6E90</strong>\uFF1A\u76F4\u63A5\u4ECEHigress\u4ED3\u5E93\u83B7\u53D6\u90E8\u7F72\u6587\u4EF6\u80FD\u4FDD\u8BC1\u90E8\u7F72\u7684\u662F\u6700\u65B0\u7A33\u5B9A\u7248\u672C\uFF0C\u51CF\u5C11\u624B\u52A8\u914D\u7F6E\u9519\u8BEF\u3002</li>
<li><strong>\u9A8C\u8BC1\u6B65\u9AA4\u7684\u91CD\u8981\u6027</strong>\uFF1A\u786E\u4FDD\u90E8\u7F72\u6210\u529F\u4E14\u670D\u52A1\u6B63\u5E38\u8FD0\u884C\u662F\u57FA\u7840\uFF0C\u4E5F\u662F\u8FDB\u4E00\u6B65\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027\u7684\u524D\u63D0\u3002</li>
</ul>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u90E8\u7F72Higress\u5230K8s\u73AF\u5883\u4E2D\u662F\u4E00\u4E2A\u6D89\u53CA\u51C6\u5907\u73AF\u5883\u3001\u83B7\u53D6\u5E76\u5E94\u7528\u914D\u7F6E\u3001\u9A8C\u8BC1\u90E8\u7F72\u53CA\u53EF\u9009\u9AD8\u7EA7\u914D\u7F6E\u7684\u8FC7\u7A0B\u3002\u9075\u5FAA\u5B98\u65B9\u6587\u6863\u6307\u5BFC\uFF0C\u7ED3\u5408Kubernetes\u7684\u539F\u751F\u5DE5\u5177\u548C\u8D44\u6E90\u7BA1\u7406\u673A\u5236\uFF0C\u53EF\u4EE5\u4F7F\u90E8\u7F72\u8FC7\u7A0B\u65E2\u9AD8\u6548\u53C8\u53EF\u9760\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress FAQ</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16719" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16705",title:"k8s\u73AF\u5883\u90E8\u7F72higress",date:"2024-09-03",category:"expertConsultation",description:"\u8981\u5B9E\u73B0\u5728Kubernetes (K8s) \u73AF\u5883\u4E2D\u90E8\u7F72 Higress\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u4F9D\u636E\u4E86\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A### \u6B65\u9AA4\u5206\u6790\u4E0E\u64CD\u4F5C\u6307\u5357#### 1. **\u51C6\u5907Kubernetes\u73AF\u5883**\u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u7684Kubernetes\u96C6\u7FA4\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u7684minikube\u3001\u81EA\u5EFA\u96C6\u7FA4\u6216\u4E91\u670D\u52A1"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16705.md",r=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 k8s\u73AF\u5883\u90E8\u7F72higress  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u5B9E\u73B0\u5728Kubernetes (K8s) \u73AF\u5883\u4E2D\u90E8\u7F72 Higress\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u4F9D\u636E\u4E86\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A

### \u6B65\u9AA4\u5206\u6790\u4E0E\u64CD\u4F5C\u6307\u5357

#### 1. **\u51C6\u5907Kubernetes\u73AF\u5883**

\u786E\u4FDD\u60A8\u6709\u4E00\u4E2A\u6B63\u5728\u8FD0\u884C\u7684Kubernetes\u96C6\u7FA4\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u7684minikube\u3001\u81EA\u5EFA\u96C6\u7FA4\u6216\u4E91\u670D\u52A1\u5546\u63D0\u4F9B\u7684Kubernetes\u670D\u52A1\u5982\u963F\u91CC\u4E91ACK\u6765\u5B9E\u73B0\u3002

#### 2. **\u83B7\u53D6Higress\u90E8\u7F72\u6587\u4EF6**

\u4ECEHigress\u7684\u5B98\u65B9GitHub\u4ED3\u5E93\u4E2D\u83B7\u53D6\u6700\u65B0\u7684\u90E8\u7F72\u914D\u7F6E\u6587\u4EF6\u3002\u901A\u5E38\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u4F1A\u5305\u62ECDeployment\u3001Service\u4EE5\u53CA\u5FC5\u8981\u7684CRDs\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u7B49YAML\u914D\u7F6E\u3002

#### 3. **\u5B89\u88C5Higress**

\u4F7F\u7528\`kubectl\`\u547D\u4EE4\u884C\u5DE5\u5177\u6765\u90E8\u7F72Higress\u5230\u60A8\u7684Kubernetes\u96C6\u7FA4\u4E2D\u3002\u8FD9\u4E00\u6B65\u9AA4\u53EF\u80FD\u6D89\u53CA\u5E94\u7528YAML\u914D\u7F6E\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
kubectl apply -f https://raw.githubusercontent.com/higress-group/higress/master/deployments/kubernetes/higress.yaml
\`\`\`

\u8BF7\u6839\u636EHigress\u7684\u5B98\u65B9\u6587\u6863\u786E\u8BA4\u6B63\u786E\u7684\u90E8\u7F72\u547D\u4EE4\u548C\u6587\u4EF6URL\uFF0C\u56E0\u4E3A\u5B9E\u9645URL\u548C\u547D\u4EE4\u53EF\u80FD\u4F1A\u968F\u7248\u672C\u66F4\u65B0\u800C\u53D8\u5316\u3002

#### 4. **\u914D\u7F6EIngress\u8D44\u6E90**

\u521B\u5EFAIngress\u8D44\u6E90\u4EE5\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF0C\u4F7F\u5F97\u8FDB\u5165\u96C6\u7FA4\u7684\u6D41\u91CF\u80FD\u591F\u88AB\u6B63\u786E\u5730\u5BFC\u5411\u81F3\u540E\u7AEF\u670D\u52A1\u3002Higress\u9075\u5FAAKubernetes\u7684Ingress\u6807\u51C6\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u6309\u7167\u5E38\u89C4\u7684Ingress\u914D\u7F6E\u65B9\u5F0F\u6765\u7F16\u5199YAML\u6587\u4EF6\uFF0C\u5E76\u5E94\u7528\u81F3\u96C6\u7FA4\uFF1A

\`\`\`bash
kubectl apply -f your-ingress-resource.yaml
\`\`\`

#### 5. **\u9A8C\u8BC1\u90E8\u7F72**

\u68C0\u67E5Higress\u53CA\u5176\u5173\u8054\u670D\u52A1\u662F\u5426\u6B63\u5E38\u8FD0\u884C\uFF1A

\`\`\`bash
kubectl get pods -n <namespace> # \u786E\u8BA4\u6240\u6709Pod\u90FD\u5904\u4E8ERunning\u72B6\u6001
kubectl get svc -n <namespace> # \u786E\u8BA4\u670D\u52A1\u5DF2\u521B\u5EFA\u5E76\u8FD0\u884C
\`\`\`

\u5176\u4E2D\uFF0C\`<namespace>\`\u5E94\u66FF\u6362\u4E3A\u60A8\u90E8\u7F72Higress\u6240\u5728\u7684\u547D\u540D\u7A7A\u95F4\u3002

#### 6. **\u53EF\u9009\uFF1A\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027**

\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u60A8\u53EF\u80FD\u8FD8\u9700\u8981\u914D\u7F6E\u5982WAF\u3001\u8BA4\u8BC1\u9274\u6743\u3001\u670D\u52A1\u53D1\u73B0\u7B49\u76F8\u5173\u7279\u6027\u3002Higress\u652F\u6301\u901A\u8FC7CRDs\u6216\u5176Dashboard\u8FDB\u884C\u914D\u7F6E\u3002\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u8BF7\u53C2\u7167Higress\u5B98\u65B9\u6587\u6863\uFF0C\u5982[\u670D\u52A1\u53D1\u73B0](https://higress.cn/docs/latest/user/service-discovery/)\u3001[WAF](https://higress.cn/docs/latest/user/waf/)\u7B49\u7AE0\u8282\u3002

### \u89E3\u91CA\u8BF4\u660E

- **\u4E3A\u4F55\u9009\u62E9Kubernetes\u90E8\u7F72**\uFF1AK8s\u63D0\u4F9B\u4E86\u4E00\u79CD\u6807\u51C6\u5316\u7684\u65B9\u5F0F\u6765\u90E8\u7F72\u548C\u7BA1\u7406\u5BB9\u5668\u5316\u5E94\u7528\uFF0CHigress\u5BF9\u5176\u826F\u597D\u652F\u6301\u53EF\u4EE5\u7B80\u5316\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u7684\u7F51\u7EDC\u7BA1\u7406\uFF0C\u5229\u7528K8s\u7684\u81EA\u52A8\u6269\u7F29\u5BB9\uFF08HPA\uFF09\u3001\u6EDA\u52A8\u66F4\u65B0\u7B49\u7279\u6027\uFF0C\u63D0\u5347\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\u548C\u5F39\u6027\u3002
- **\u914D\u7F6E\u6587\u4EF6\u6765\u6E90**\uFF1A\u76F4\u63A5\u4ECEHigress\u4ED3\u5E93\u83B7\u53D6\u90E8\u7F72\u6587\u4EF6\u80FD\u4FDD\u8BC1\u90E8\u7F72\u7684\u662F\u6700\u65B0\u7A33\u5B9A\u7248\u672C\uFF0C\u51CF\u5C11\u624B\u52A8\u914D\u7F6E\u9519\u8BEF\u3002
- **\u9A8C\u8BC1\u6B65\u9AA4\u7684\u91CD\u8981\u6027**\uFF1A\u786E\u4FDD\u90E8\u7F72\u6210\u529F\u4E14\u670D\u52A1\u6B63\u5E38\u8FD0\u884C\u662F\u57FA\u7840\uFF0C\u4E5F\u662F\u8FDB\u4E00\u6B65\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027\u7684\u524D\u63D0\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u90E8\u7F72Higress\u5230K8s\u73AF\u5883\u4E2D\u662F\u4E00\u4E2A\u6D89\u53CA\u51C6\u5907\u73AF\u5883\u3001\u83B7\u53D6\u5E76\u5E94\u7528\u914D\u7F6E\u3001\u9A8C\u8BC1\u90E8\u7F72\u53CA\u53EF\u9009\u9AD8\u7EA7\u914D\u7F6E\u7684\u8FC7\u7A0B\u3002\u9075\u5FAA\u5B98\u65B9\u6587\u6863\u6307\u5BFC\uFF0C\u7ED3\u5408Kubernetes\u7684\u539F\u751F\u5DE5\u5177\u548C\u8D44\u6E90\u7BA1\u7406\u673A\u5236\uFF0C\u53EF\u4EE5\u4F7F\u90E8\u7F72\u8FC7\u7A0B\u65E2\u9AD8\u6548\u53C8\u53EF\u9760\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress FAQ 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16719)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},o=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u6B65\u9AA4\u5206\u6790\u4E0E\u64CD\u4F5C\u6307\u5357",text:"\u6B65\u9AA4\u5206\u6790\u4E0E\u64CD\u4F5C\u6307\u5357"},{depth:4,slug:"1-\u51C6\u5907kubernetes\u73AF\u5883",text:"1. \u51C6\u5907Kubernetes\u73AF\u5883"},{depth:4,slug:"2-\u83B7\u53D6higress\u90E8\u7F72\u6587\u4EF6",text:"2. \u83B7\u53D6Higress\u90E8\u7F72\u6587\u4EF6"},{depth:4,slug:"3-\u5B89\u88C5higress",text:"3. \u5B89\u88C5Higress"},{depth:4,slug:"4-\u914D\u7F6Eingress\u8D44\u6E90",text:"4. \u914D\u7F6EIngress\u8D44\u6E90"},{depth:4,slug:"5-\u9A8C\u8BC1\u90E8\u7F72",text:"5. \u9A8C\u8BC1\u90E8\u7F72"},{depth:4,slug:"6-\u53EF\u9009\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027",text:"6. \u53EF\u9009\uFF1A\u914D\u7F6E\u9AD8\u7EA7\u7279\u6027"},{depth:3,slug:"\u89E3\u91CA\u8BF4\u660E",text:"\u89E3\u91CA\u8BF4\u660E"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=l((f,E,m)=>{const{layout:F,...a}=n;return a.file=t,a.url=r,d`${g()}${u(s)}`})});export{e as Content,b as __tla,i as compiledContent,e as default,t as file,n as frontmatter,o as getHeadings,p as rawContent,r as url};
