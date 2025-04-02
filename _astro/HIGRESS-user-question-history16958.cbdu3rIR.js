import{c as r,__tla as c}from"./astro-component.fC12J6m8.js";import{r as d,m as E,u as h,__tla as g}from"./constant.BdKA6-5g.js";import{__tla as y}from"./astro/assets-service.CogLqxaq.js";let e,i,a,n,o,p,t,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u5728Kubernetes\u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u4F7F\u7528Higress\u7BA1\u7406\u9762\u677F\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF1A</p>
<h3 id="\u9636\u6BB5\u4E00\u51C6\u5907\u4E0E\u5B89\u88C5higress"><strong>\u9636\u6BB5\u4E00\uFF1A\u51C6\u5907\u4E0E\u5B89\u88C5Higress</strong></h3>
<ol>
<li>
<p><strong>\u914D\u7F6E\u96C6\u7FA4\u4EE5\u652F\u6301Higress</strong></p>
<ul>
<li>\u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684Kubernetes\u96C6\u7FA4\u5DF2\u51C6\u5907\u597D\u3002\u5982\u679C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u6784\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u4F7F\u7528KinD\uFF08Kubernetes in Docker\uFF09\u5DE5\u5177\u3002\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code dir="auto">higress</code>\u7684\u96C6\u7FA4\uFF0C\u5E76\u914D\u7F6E\u5B83\u4EE5\u4FBFHigress\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u768480\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf"><div></div></button></div></figure></div>
\u5176\u4E2D<code dir="auto">cluster.conf</code>\u5E94\u5305\u542B\u9002\u5F53\u7684\u8282\u70B9\u914D\u7F6E\uFF0C\u5982\u793A\u4F8B\u4E2D\u7684\u6DFB\u52A0\u7279\u5B9A\u6807\u7B7E\u548C\u7AEF\u53E3\u6620\u5C04\u3002</li>
</ul>
</li>
<li>
<p><strong>\u5B89\u88C5Higress</strong></p>
<ul>
<li>\u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\u5E76\u5B89\u88C5Higress\u5230\u540D\u4E3A<code dir="auto">higress-system</code>\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u540C\u65F6\u6307\u5B9A\u672C\u5730\u90E8\u7F72\u6A21\u5F0F\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false"><div></div></button></div></figure></div>
</li>
</ul>
</li>
</ol>
<h3 id="\u9636\u6BB5\u4E8C\u914D\u7F6E\u4E0E\u9A8C\u8BC1"><strong>\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E\u4E0E\u9A8C\u8BC1</strong></h3>
<h4 id="\u914D\u7F6E\u670D\u52A1\u8DEF\u7531"><strong>\u914D\u7F6E\u670D\u52A1\u8DEF\u7531</strong></h4>
<p>\u5047\u8BBE\u60A8\u5DF2\u6709\u670D\u52A1\u90E8\u7F72\u5728default\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u540D\u4E3A<code dir="auto">foo</code>\u3002\u63A5\u4E0B\u6765\uFF0C\u914D\u7F6E\u8DEF\u7531\u8BA9<code dir="auto">http://foo.bar.com/foo</code>\u6307\u5411\u8FD9\u4E2A\u670D\u52A1\u3002</p>
<ol>
<li><strong>\u901A\u8FC7Ingress CRD\u914D\u7F6E</strong>
<ul>
<li>\u521B\u5EFA\u4E00\u4E2AIngress\u8D44\u6E90\uFF0C\u6307\u5B9AHigress\u4F5C\u4E3AIngress Class\uFF0C\u5E76\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF1A
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - pathType: Prefix\x7F        path: &#x22;/foo&#x22;\x7F        backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678"><div></div></button></div></figure></div>
\u4F7F\u7528<code dir="auto">kubectl apply -f &#x3C;filename>.yaml</code>\u5E94\u7528\u6B64\u914D\u7F6E\u3002</li>
</ul>
</li>
</ol>
<h4 id="\u6216\u4F7F\u7528higress-console\u914D\u7F6E"><strong>\u6216\u4F7F\u7528Higress Console\u914D\u7F6E</strong></h4>
<ul>
<li>\u5982\u679C\u60A8\u66F4\u503E\u5411\u4E8E\u56FE\u5F62\u754C\u9762\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528<code dir="auto">hgctl dashboard console</code>\u547D\u4EE4\u542F\u52A8Higress\u63A7\u5236\u53F0\uFF0C\u5B8C\u6210\u7BA1\u7406\u5458\u8D26\u6237\u7684\u521D\u59CB\u5316\u540E\uFF0C\u624B\u52A8\u521B\u5EFA\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\uFF0C\u6839\u636E\u63A7\u5236\u53F0\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C\u3002</li>
</ul>
<h3 id="\u9636\u6BB5\u4E09\u8BF7\u6C42\u9A8C\u8BC1"><strong>\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1</strong></h3>
<ul>
<li>\u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u751F\u6548\uFF0C\u901A\u8FC7\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5230\u914D\u7F6E\u7684\u8DEF\u7531\u5730\u5740\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://GatewayIP/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://GatewayIP/foo -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>
\u5982\u679C\u4E00\u5207\u914D\u7F6E\u6B63\u786E\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230\u201Dfoo\u201D\u4F5C\u4E3A\u54CD\u5E94\uFF0C\u8868\u660E\u8BF7\u6C42\u5DF2\u88AB\u6B63\u786E\u8DEF\u7531\u5230\u540E\u7AEF\u670D\u52A1\u3002</li>
</ul>
<h3 id="\u603B\u7ED3"><strong>\u603B\u7ED3</strong></h3>
<p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u5B8C\u6210\u4E86Higress\u7BA1\u7406\u9762\u677F\u7684\u5B89\u88C5\u3001\u670D\u52A1\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u529F\u80FD\u9A8C\u8BC1\u3002\u65E0\u8BBA\u662F\u901A\u8FC7\u547D\u4EE4\u884C\u4F7F\u7528Ingress\u8D44\u6E90\u8FD8\u662F\u76F4\u89C2\u7684Higress\u63A7\u5236\u53F0\uFF0C\u90FD\u80FD\u7075\u6D3B\u5730\u7BA1\u7406Kubernetes\u96C6\u7FA4\u4E2D\u7684\u670D\u52A1\u8DEF\u7531\u3002\u8BF7\u786E\u4FDD\u6BCF\u4E00\u6B65\u64CD\u4F5C\u6210\u529F\u540E\u518D\u8FDB\u884C\u4E0B\u4E00\u6B65\uFF0C\u4EE5\u786E\u4FDD\u6574\u4E2A\u8FC7\u7A0B\u7684\u987A\u7545\u3002<a href="https://higress.cn/docs/latest/ops/deploy-by-helm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">[\u5B89\u88C5\u90E8\u7F72\u6587\u6863]</a>\u63D0\u4F9B\u4E86\u66F4\u591A\u9AD8\u7EA7\u914D\u7F6E\u548C\u4F7F\u7528\u7EC6\u8282\uFF0C\u53EF\u4F9B\u8FDB\u4E00\u6B65\u63A2\u7D22\u3002</p>
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
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16963" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16958",title:"higress \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528",date:"2024-09-26",category:"expertConsultation",description:"\u8981\u5728Kubernetes\u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u4F7F\u7528Higress\u7BA1\u7406\u9762\u677F\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF1A### **\u9636\u6BB5\u4E00\uFF1A\u51C6\u5907\u4E0E\u5B89\u88C5Higress**1. **\u914D\u7F6E\u96C6\u7FA4\u4EE5\u652F\u6301Higress**   - \u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684Kubernetes\u96C6\u7FA4\u5DF2\u51C6\u5907\u597D\u3002\u5982\u679C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u6784\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u4F7F\u7528KinD\uFF08Kubernetes",tags:["higress","\u7BA1\u7406\u9762\u677F","\u5B89\u88C5","\u4F7F\u7528"],keywords:["higress","\u7BA1\u7406\u9762\u677F","\u5B89\u88C5","\u4F7F\u7528"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16958.md",t=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u5728Kubernetes\u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u4F7F\u7528Higress\u7BA1\u7406\u9762\u677F\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF1A

### **\u9636\u6BB5\u4E00\uFF1A\u51C6\u5907\u4E0E\u5B89\u88C5Higress**

1. **\u914D\u7F6E\u96C6\u7FA4\u4EE5\u652F\u6301Higress**
   - \u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u7684Kubernetes\u96C6\u7FA4\u5DF2\u51C6\u5907\u597D\u3002\u5982\u679C\u9700\u8981\u4ECE\u5934\u5F00\u59CB\u6784\u5EFA\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u4F7F\u7528KinD\uFF08Kubernetes in Docker\uFF09\u5DE5\u5177\u3002\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\`higress\`\u7684\u96C6\u7FA4\uFF0C\u5E76\u914D\u7F6E\u5B83\u4EE5\u4FBFHigress\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u768480\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A
     \`\`\`shell
     kind create cluster --name higress --config=cluster.conf
     \`\`\`
     \u5176\u4E2D\`cluster.conf\`\u5E94\u5305\u542B\u9002\u5F53\u7684\u8282\u70B9\u914D\u7F6E\uFF0C\u5982\u793A\u4F8B\u4E2D\u7684\u6DFB\u52A0\u7279\u5B9A\u6807\u7B7E\u548C\u7AEF\u53E3\u6620\u5C04\u3002

2. **\u5B89\u88C5Higress**
   - \u6DFB\u52A0Higress\u7684Helm\u4ED3\u5E93\u5E76\u5B89\u88C5Higress\u5230\u540D\u4E3A\`higress-system\`\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u540C\u65F6\u6307\u5B9A\u672C\u5730\u90E8\u7F72\u6A21\u5F0F\uFF1A
     \`\`\`shell
     helm repo add higress.io https://higress.io/helm-charts
     helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
     \`\`\`

### **\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E\u4E0E\u9A8C\u8BC1**

#### **\u914D\u7F6E\u670D\u52A1\u8DEF\u7531**

\u5047\u8BBE\u60A8\u5DF2\u6709\u670D\u52A1\u90E8\u7F72\u5728default\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u540D\u4E3A\`foo\`\u3002\u63A5\u4E0B\u6765\uFF0C\u914D\u7F6E\u8DEF\u7531\u8BA9\`http://foo.bar.com/foo\`\u6307\u5411\u8FD9\u4E2A\u670D\u52A1\u3002

1. **\u901A\u8FC7Ingress CRD\u914D\u7F6E**
   - \u521B\u5EFA\u4E00\u4E2AIngress\u8D44\u6E90\uFF0C\u6307\u5B9AHigress\u4F5C\u4E3AIngress Class\uFF0C\u5E76\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\uFF1A
     \`\`\`yaml
     apiVersion: networking.k8s.io/v1
     kind: Ingress
     metadata:
       name: foo
     spec:
       ingressClassName: higress
       rules:
       - host: foo.bar.com
         http:
           paths:
           - pathType: Prefix
             path: "/foo"
             backend:
               service:
                 name: foo-service
                 port:
                   number: 5678
     \`\`\`
     \u4F7F\u7528\`kubectl apply -f <filename>.yaml\`\u5E94\u7528\u6B64\u914D\u7F6E\u3002

#### **\u6216\u4F7F\u7528Higress Console\u914D\u7F6E**

- \u5982\u679C\u60A8\u66F4\u503E\u5411\u4E8E\u56FE\u5F62\u754C\u9762\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u4F7F\u7528\`hgctl dashboard console\`\u547D\u4EE4\u542F\u52A8Higress\u63A7\u5236\u53F0\uFF0C\u5B8C\u6210\u7BA1\u7406\u5458\u8D26\u6237\u7684\u521D\u59CB\u5316\u540E\uFF0C\u624B\u52A8\u521B\u5EFA\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\uFF0C\u6839\u636E\u63A7\u5236\u53F0\u63D0\u793A\u8FDB\u884C\u64CD\u4F5C\u3002

### **\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1**

- \u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u751F\u6548\uFF0C\u901A\u8FC7\u53D1\u9001\u4E00\u4E2A\u8BF7\u6C42\u5230\u914D\u7F6E\u7684\u8DEF\u7531\u5730\u5740\uFF1A
  \`\`\`shell
  curl http://GatewayIP/foo -H 'host: foo.bar.com'
  \`\`\`
  \u5982\u679C\u4E00\u5207\u914D\u7F6E\u6B63\u786E\uFF0C\u60A8\u5E94\u8BE5\u770B\u5230"foo"\u4F5C\u4E3A\u54CD\u5E94\uFF0C\u8868\u660E\u8BF7\u6C42\u5DF2\u88AB\u6B63\u786E\u8DEF\u7531\u5230\u540E\u7AEF\u670D\u52A1\u3002

### **\u603B\u7ED3**

\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u5B8C\u6210\u4E86Higress\u7BA1\u7406\u9762\u677F\u7684\u5B89\u88C5\u3001\u670D\u52A1\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u529F\u80FD\u9A8C\u8BC1\u3002\u65E0\u8BBA\u662F\u901A\u8FC7\u547D\u4EE4\u884C\u4F7F\u7528Ingress\u8D44\u6E90\u8FD8\u662F\u76F4\u89C2\u7684Higress\u63A7\u5236\u53F0\uFF0C\u90FD\u80FD\u7075\u6D3B\u5730\u7BA1\u7406Kubernetes\u96C6\u7FA4\u4E2D\u7684\u670D\u52A1\u8DEF\u7531\u3002\u8BF7\u786E\u4FDD\u6BCF\u4E00\u6B65\u64CD\u4F5C\u6210\u529F\u540E\u518D\u8FDB\u884C\u4E0B\u4E00\u6B65\uFF0C\u4EE5\u786E\u4FDD\u6574\u4E2A\u8FC7\u7A0B\u7684\u987A\u7545\u3002[[\u5B89\u88C5\u90E8\u7F72\u6587\u6863]](https://higress.cn/docs/latest/ops/deploy-by-helm/)\u63D0\u4F9B\u4E86\u66F4\u591A\u9AD8\u7EA7\u914D\u7F6E\u548C\u4F7F\u7528\u7EC6\u8282\uFF0C\u53EF\u4F9B\u8FDB\u4E00\u6B65\u63A2\u7D22\u3002


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
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16963)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},o=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u9636\u6BB5\u4E00\u51C6\u5907\u4E0E\u5B89\u88C5higress",text:"\u9636\u6BB5\u4E00\uFF1A\u51C6\u5907\u4E0E\u5B89\u88C5Higress"},{depth:3,slug:"\u9636\u6BB5\u4E8C\u914D\u7F6E\u4E0E\u9A8C\u8BC1",text:"\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E\u4E0E\u9A8C\u8BC1"},{depth:4,slug:"\u914D\u7F6E\u670D\u52A1\u8DEF\u7531",text:"\u914D\u7F6E\u670D\u52A1\u8DEF\u7531"},{depth:4,slug:"\u6216\u4F7F\u7528higress-console\u914D\u7F6E",text:"\u6216\u4F7F\u7528Higress Console\u914D\u7F6E"},{depth:3,slug:"\u9636\u6BB5\u4E09\u8BF7\u6C42\u9A8C\u8BC1",text:"\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=r((u,v,F)=>{const{layout:m,...l}=n;return l.file=a,l.url=t,d`${E()}${h(s)}`})});export{e as Content,f as __tla,i as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,p as rawContent,t as url};
