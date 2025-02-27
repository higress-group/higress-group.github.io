import{c as o,__tla as d}from"./astro-component.CXlaF79K.js";import{r as c,m as h,u as y,__tla as g}from"./constant.wvel8VgE.js";import{__tla as E}from"./astro/assets-service.DQopRnBr.js";let e,l,a,t,p,r,n,u=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u8BE6\u7EC6\u90E8\u7F72\u6B65\u9AA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress \u7684\u8BE6\u7EC6\u90E8\u7F72\u6B65\u9AA4\u5982\u4E0B\uFF1A</p>
<h3 id="1-\u6DFB\u52A0-helm-\u4ED3\u5E93">1. \u6DFB\u52A0 Helm \u4ED3\u5E93</h3>
<p>\u9996\u5148\uFF0C\u786E\u4FDD\u4F60\u7684\u73AF\u5883\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86 Helm\u3002\u63A5\u7740\uFF0C\u6DFB\u52A0 Higress \u7684 Helm \u4ED3\u5E93\uFF0C\u8FD9\u4E2A\u4ED3\u5E93\u5305\u542B\u4E86\u90E8\u7F72 Higress \u6240\u9700\u7684 chart\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
<h3 id="2-\u66F4\u65B0-helm-\u4ED3\u5E93">2. \u66F4\u65B0 Helm \u4ED3\u5E93</h3>
<p>\u4E3A\u4E86\u83B7\u53D6\u6700\u65B0\u7684 chart \u4FE1\u606F\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u66F4\u65B0\u4F60\u7684 Helm \u4ED3\u5E93\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo update"><div></div></button></div></figure></div>
<h3 id="3-\u90E8\u7F72-higress">3. \u90E8\u7F72 Higress</h3>
<p>\u4F7F\u7528 Helm \u90E8\u7F72 Higress \u5230 Kubernetes \u96C6\u7FA4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u90E8\u7F72\u5230\u540D\u4E3A <code dir="auto">higress-system</code> \u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5E76\u521B\u5EFA\u8BE5\u547D\u540D\u7A7A\u95F4\uFF08\u5982\u679C\u5C1A\u4E0D\u5B58\u5728\uFF09\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress higress.io/higress -n higress-system --create-namespace"><div></div></button></div></figure></div>
<p>\u6B64\u547D\u4EE4\u9ED8\u8BA4\u90E8\u7F72\u4E86 Higress \u63A7\u5236\u9762\u7EC4\u4EF6 (<code dir="auto">higress-controller</code>) \u548C\u6570\u636E\u9762\u7EC4\u4EF6 (<code dir="auto">higress-gateway</code>)\uFF0C\u5E76\u4F7F\u7528\u4E86\u4E00\u4E9B\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4F8B\u5982\u76D1\u542C <code dir="auto">higress</code> IngressClass \u7684\u8D44\u6E90\u3002</p>
<h3 id="4-\u53EF\u9009-\u81EA\u5B9A\u4E49\u90E8\u7F72\u53C2\u6570">4. (\u53EF\u9009) \u81EA\u5B9A\u4E49\u90E8\u7F72\u53C2\u6570</h3>
<p>\u6839\u636E\u5B9E\u9645\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E9B\u90E8\u7F72\u53C2\u6570\uFF0C\u4F8B\u5982\u8C03\u6574\u526F\u672C\u6570\u91CF\u3001\u542F\u7528\u7279\u5B9A\u529F\u80FD\u7B49\u3002\u4F8B\u5982\uFF0C\u8981\u7981\u7528 ALPN \u4E2D\u7684 HTTP/2 \u534F\u8BAE\u5E76\u4EC5\u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.disableAlpnH2=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.watchNamespace=&#x3C;your-namespace></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress higress.io/higress \\\x7F  -n higress-system \\\x7F  --set global.disableAlpnH2=true \\\x7F  --set global.watchNamespace=<your-namespace>"><div></div></button></div></figure></div>
<h3 id="5-\u53EF\u9009-\u652F\u6301\u989D\u5916\u529F\u80FD">5. (\u53EF\u9009) \u652F\u6301\u989D\u5916\u529F\u80FD</h3>
<ul>
<li><strong>\u652F\u6301 Istio CRD</strong>: \u5982\u679C\u4F60\u7684\u96C6\u7FA4\u4E2D\u5DF2\u5B89\u88C5 Istio \u6216\u9700\u8981 Higress \u63A7\u5236\u5668\u76D1\u542C Istio \u8D44\u6E90\uFF0C\u9996\u5148\u5B89\u88C5 Istio CRD\uFF0C\u7136\u540E\u66F4\u65B0 Higress \u914D\u7F6E\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio-base</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio/base</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableIstioAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--reuse-values</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install istio-base istio/base -n istio-system --create-namespace\x7Fhelm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values"><div></div></button></div></figure></div>
<ul>
<li><strong>\u652F\u6301 Gateway API CRD</strong>: \u540C\u6837\u5730\uFF0C\u5B89\u88C5 Gateway API CRD \u5E76\u66F4\u65B0 Higress \u914D\u7F6E\u4EE5\u542F\u7528\u5BF9 Gateway API \u7684\u652F\u6301\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableGatewayAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--reuse-values</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml\x7Fhelm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values"><div></div></button></div></figure></div>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4E0A\u8FF0\u6B65\u9AA4\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u4F7F\u7528 Helm \u5728 Kubernetes \u96C6\u7FA4\u4E2D\u90E8\u7F72 Higress \u7F51\u5173\uFF0C\u5305\u62EC\u57FA\u672C\u90E8\u7F72\u3001\u81EA\u5B9A\u4E49\u914D\u7F6E\u4EE5\u53CA\u5982\u4F55\u6269\u5C55\u652F\u6301 Istio CRD \u548C Gateway API CRD\u3002\u6BCF\u4E00\u6B65\u9AA4\u5747\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u6587\u6863\u4E2D\u7684\u6307\u5BFC\uFF0C\u786E\u4FDD\u4E86\u90E8\u7F72\u8FC7\u7A0B\u7684\u5168\u9762\u6027\u548C\u7075\u6D3B\u6027\u3002\u901A\u8FC7\u8C03\u6574\u4E0D\u540C\u7684\u53C2\u6570\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u5E94\u7528\u573A\u666F\u5B9A\u5236 Higress \u7684\u90E8\u7F72\u914D\u7F6E\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16984" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16977",title:"\u8BE6\u7EC6\u90E8\u7F72\u6B65\u9AA4",date:"2024-09-26",category:"expertConsultation",description:"Higress \u7684\u8BE6\u7EC6\u90E8\u7F72\u6B65\u9AA4\u5982\u4E0B\uFF1A### 1. \u6DFB\u52A0 Helm \u4ED3\u5E93\u9996\u5148\uFF0C\u786E\u4FDD\u4F60\u7684\u73AF\u5883\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86 Helm\u3002\u63A5\u7740\uFF0C\u6DFB\u52A0 Higress \u7684 Helm \u4ED3\u5E93\uFF0C\u8FD9\u4E2A\u4ED3\u5E93\u5305\u542B\u4E86\u90E8\u7F72 Higress \u6240\u9700\u7684 chart\u3002```bashhelm repo add higress.io https://hi",tags:["higress","\u90E8\u7F72","","\u8BE6\u7EC6","\u6307\u5357","\u5B9E\u65BD","\u8FC7\u7A0B"],keywords:["higress","\u90E8\u7F72","","\u8BE6\u7EC6","\u6307\u5357","\u5B9E\u65BD","\u8FC7\u7A0B"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16977.md",n=void 0,r=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u8BE6\u7EC6\u90E8\u7F72\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress \u7684\u8BE6\u7EC6\u90E8\u7F72\u6B65\u9AA4\u5982\u4E0B\uFF1A

### 1. \u6DFB\u52A0 Helm \u4ED3\u5E93

\u9996\u5148\uFF0C\u786E\u4FDD\u4F60\u7684\u73AF\u5883\u4E2D\u5DF2\u7ECF\u5B89\u88C5\u4E86 Helm\u3002\u63A5\u7740\uFF0C\u6DFB\u52A0 Higress \u7684 Helm \u4ED3\u5E93\uFF0C\u8FD9\u4E2A\u4ED3\u5E93\u5305\u542B\u4E86\u90E8\u7F72 Higress \u6240\u9700\u7684 chart\u3002

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
\`\`\`

### 2. \u66F4\u65B0 Helm \u4ED3\u5E93

\u4E3A\u4E86\u83B7\u53D6\u6700\u65B0\u7684 chart \u4FE1\u606F\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u66F4\u65B0\u4F60\u7684 Helm \u4ED3\u5E93\u3002

\`\`\`bash
helm repo update
\`\`\`

### 3. \u90E8\u7F72 Higress

\u4F7F\u7528 Helm \u90E8\u7F72 Higress \u5230 Kubernetes \u96C6\u7FA4\uFF0C\u8FD9\u91CC\u6211\u4EEC\u90E8\u7F72\u5230\u540D\u4E3A \`higress-system\` \u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5E76\u521B\u5EFA\u8BE5\u547D\u540D\u7A7A\u95F4\uFF08\u5982\u679C\u5C1A\u4E0D\u5B58\u5728\uFF09\u3002

\`\`\`bash
helm install higress higress.io/higress -n higress-system --create-namespace
\`\`\`

\u6B64\u547D\u4EE4\u9ED8\u8BA4\u90E8\u7F72\u4E86 Higress \u63A7\u5236\u9762\u7EC4\u4EF6 (\`higress-controller\`) \u548C\u6570\u636E\u9762\u7EC4\u4EF6 (\`higress-gateway\`)\uFF0C\u5E76\u4F7F\u7528\u4E86\u4E00\u4E9B\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4F8B\u5982\u76D1\u542C \`higress\` IngressClass \u7684\u8D44\u6E90\u3002

### 4. (\u53EF\u9009) \u81EA\u5B9A\u4E49\u90E8\u7F72\u53C2\u6570

\u6839\u636E\u5B9E\u9645\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E9B\u90E8\u7F72\u53C2\u6570\uFF0C\u4F8B\u5982\u8C03\u6574\u526F\u672C\u6570\u91CF\u3001\u542F\u7528\u7279\u5B9A\u529F\u80FD\u7B49\u3002\u4F8B\u5982\uFF0C\u8981\u7981\u7528 ALPN \u4E2D\u7684 HTTP/2 \u534F\u8BAE\u5E76\u4EC5\u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`bash
helm install higress higress.io/higress \\
  -n higress-system \\
  --set global.disableAlpnH2=true \\
  --set global.watchNamespace=<your-namespace>
\`\`\`

### 5. (\u53EF\u9009) \u652F\u6301\u989D\u5916\u529F\u80FD

- **\u652F\u6301 Istio CRD**: \u5982\u679C\u4F60\u7684\u96C6\u7FA4\u4E2D\u5DF2\u5B89\u88C5 Istio \u6216\u9700\u8981 Higress \u63A7\u5236\u5668\u76D1\u542C Istio \u8D44\u6E90\uFF0C\u9996\u5148\u5B89\u88C5 Istio CRD\uFF0C\u7136\u540E\u66F4\u65B0 Higress \u914D\u7F6E\u3002

\`\`\`bash
helm install istio-base istio/base -n istio-system --create-namespace
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values
\`\`\`

- **\u652F\u6301 Gateway API CRD**: \u540C\u6837\u5730\uFF0C\u5B89\u88C5 Gateway API CRD \u5E76\u66F4\u65B0 Higress \u914D\u7F6E\u4EE5\u542F\u7528\u5BF9 Gateway API \u7684\u652F\u6301\u3002

\`\`\`bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml
helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values
\`\`\`

### \u89E3\u91CA

\u4E0A\u8FF0\u6B65\u9AA4\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u4F7F\u7528 Helm \u5728 Kubernetes \u96C6\u7FA4\u4E2D\u90E8\u7F72 Higress \u7F51\u5173\uFF0C\u5305\u62EC\u57FA\u672C\u90E8\u7F72\u3001\u81EA\u5B9A\u4E49\u914D\u7F6E\u4EE5\u53CA\u5982\u4F55\u6269\u5C55\u652F\u6301 Istio CRD \u548C Gateway API CRD\u3002\u6BCF\u4E00\u6B65\u9AA4\u5747\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u6587\u6863\u4E2D\u7684\u6307\u5BFC\uFF0C\u786E\u4FDD\u4E86\u90E8\u7F72\u8FC7\u7A0B\u7684\u5168\u9762\u6027\u548C\u7075\u6D3B\u6027\u3002\u901A\u8FC7\u8C03\u6574\u4E0D\u540C\u7684\u53C2\u6570\uFF0C\u7528\u6237\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u5E94\u7528\u573A\u666F\u5B9A\u5236 Higress \u7684\u90E8\u7F72\u914D\u7F6E\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16984)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return s},p=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u6DFB\u52A0-helm-\u4ED3\u5E93",text:"1. \u6DFB\u52A0 Helm \u4ED3\u5E93"},{depth:3,slug:"2-\u66F4\u65B0-helm-\u4ED3\u5E93",text:"2. \u66F4\u65B0 Helm \u4ED3\u5E93"},{depth:3,slug:"3-\u90E8\u7F72-higress",text:"3. \u90E8\u7F72 Higress"},{depth:3,slug:"4-\u53EF\u9009-\u81EA\u5B9A\u4E49\u90E8\u7F72\u53C2\u6570",text:"4. (\u53EF\u9009) \u81EA\u5B9A\u4E49\u90E8\u7F72\u53C2\u6570"},{depth:3,slug:"5-\u53EF\u9009-\u652F\u6301\u989D\u5916\u529F\u80FD",text:"5. (\u53EF\u9009) \u652F\u6301\u989D\u5916\u529F\u80FD"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=o((F,m,v)=>{const{layout:b,...i}=t;return i.file=a,i.url=n,c`${h()}${y(s)}`})});export{e as Content,u as __tla,l as compiledContent,e as default,a as file,t as frontmatter,p as getHeadings,r as rawContent,n as url};
