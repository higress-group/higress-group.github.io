import{c as p,__tla as c}from"./astro-component.CwRucF1h.js";import{r as g,m as y,u as d,__tla as h}from"./constant.41SvX5xM.js";import{__tla as f}from"./astro/assets-service.Dd3mQuiC.js";let o,a,e,r,l,i,t,x=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u600E\u4E48\u4F7F\u7528enableProxyProtocol</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u5982\u4F55\u5728 Higress \u4E2D\u542F\u7528 Proxy Protocol\u3002\u4E0D\u8FC7\uFF0C\u8003\u8651\u5230 Proxy Protocol \u901A\u5E38\u6D89\u53CA\u5230\u8D1F\u8F7D\u5747\u8861\u5668\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u7528\u4E8E\u4F20\u9012\u5BA2\u6237\u7AEF\u7684\u539F\u59CB\u8FDE\u63A5\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Higress \u7684\u914D\u7F6E\u7075\u6D3B\u6027\u6765\u63A8\u6D4B\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\u3002</p>
<p>Higress \u4F5C\u4E3A\u4E00\u4E2A\u9AD8\u5EA6\u53EF\u914D\u7F6E\u7684\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u652F\u6301\u5E7F\u6CDB\u7684\u5B9A\u5236\u5316\u9700\u6C42\uFF0C\u5305\u62EC\u901A\u8FC7 Helm \u53C2\u6570\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002\u867D\u7136\u6CA1\u6709\u76F4\u63A5\u7684\u53C2\u6570\u8BF4\u660E\u542F\u7528\u4E86 Proxy Protocol\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u662F\u5426\u80FD\u591F\u901A\u8FC7\u81EA\u5B9A\u4E49\u914D\u7F6E\u6216\u6CE8\u89E3\u6765\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\u3002</p>
<h3 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<ul>
<li>\u7528\u6237\u60F3\u8981\u5728 Higress \u7F51\u5173\u4E2D\u542F\u7528 Proxy Protocol\uFF0C\u4EE5\u900F\u660E\u5730\u4F20\u9012\u5BA2\u6237\u7AEF\u7684\u771F\u5B9E IP \u5730\u5740\u548C\u5176\u4ED6\u8FDE\u63A5\u4FE1\u606F\u3002</li>
<li>Higress \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u914D\u7F6E\u9009\u9879\u548C Helm \u90E8\u7F72\u53C2\u6570\uFF0C\u7406\u8BBA\u4E0A\u5E94\u8BE5\u6709\u65B9\u6CD5\u9002\u5E94\u8FD9\u4E00\u573A\u666F\u3002</li>
</ul>
<h3 id="\u63A2\u7D22\u89E3\u51B3\u65B9\u6848">\u63A2\u7D22\u89E3\u51B3\u65B9\u6848</h3>
<p>\u5C3D\u7BA1\u76F4\u63A5\u7684\u542F\u7528 Proxy Protocol \u7684\u6B65\u9AA4\u6CA1\u6709\u5728\u77E5\u8BC6\u6587\u6863\u4E2D\u627E\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u4EE5\u4E0B\u65B9\u5411\u6765\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\uFF1A</p>
<ol>
<li>
<p><strong>\u68C0\u67E5\u5B98\u65B9\u6587\u6863</strong>: \u9996\u5148\uFF0C\u5EFA\u8BAE\u67E5\u9605 Higress \u7684\u6700\u65B0\u5B98\u65B9\u6587\u6863\uFF0C\u7279\u522B\u662F\u5173\u4E8E\u9AD8\u7EA7\u914D\u7F6E\u6216\u7F51\u7EDC\u76F8\u5173\u7684\u90E8\u5206\uFF0C\u770B\u662F\u5426\u6709\u76F4\u63A5\u652F\u6301 Proxy Protocol \u7684\u914D\u7F6E\u8BF4\u660E\u3002</p>
</li>
<li>
<p><strong>\u81EA\u5B9A\u4E49\u914D\u7F6E\u6620\u5C04</strong>: Higress \u652F\u6301\u901A\u8FC7\u914D\u7F6E\u6620\u5C04\uFF08ConfigMap\uFF09\u6765\u81EA\u5B9A\u4E49 Nginx \u914D\u7F6E\u3002\u53EF\u4EE5\u5C1D\u8BD5\u521B\u5EFA\u4E00\u4E2A\u5305\u542B Proxy Protocol \u76F8\u5173\u914D\u7F6E\u7684 ConfigMap\uFF0C\u5E76\u5728 Helm \u90E8\u7F72\u65F6\u901A\u8FC7\u9002\u5F53\u7684\u53C2\u6570\u5F15\u7528\u5B83\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728 Nginx \u914D\u7F6E\u4E2D\u52A0\u5165\u7C7B\u4F3C <code dir="auto">proxy_protocol on;</code> \u7684\u6307\u4EE4\u6765\u542F\u7528 Proxy Protocol \u652F\u6301\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u521B\u5EFA\u5305\u542BProxy Protocol\u914D\u7F6E\u7684ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">proxy-protocol-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--from-literal=proxy_protocol=</span><span style="--0:#9ECBFF">"on"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5728Helm\u90E8\u7F72\u65F6\u5F15\u7528\u8BE5ConfigMap\uFF08\u5177\u4F53\u53C2\u6570\u9700\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF0C\u4EE5\u4E0B\u4EC5\u4E3A\u793A\u4F8B\uFF09</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-core.gateway.extraConfigMaps="proxy-protocol-config"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-core.controller.extraConfigMaps="proxy-protocol-config"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl create configmap proxy-protocol-config --from-literal=proxy_protocol=&#x22;on&#x22; -n higress-system\x7Fhelm install higress higress.io/higress -n higress-system \\\x7F  --set higress-core.gateway.extraConfigMaps=&#x22;proxy-protocol-config&#x22; \\\x7F  --set higress-core.controller.extraConfigMaps=&#x22;proxy-protocol-config&#x22;"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u6CE8\u89E3\u652F\u6301</strong>: \u786E\u8BA4 Ingress \u8D44\u6E90\u662F\u5426\u652F\u6301\u901A\u8FC7\u6CE8\u89E3\u6765\u5F00\u542F Proxy Protocol\u3002\u67D0\u4E9B\u7F51\u5173\u5141\u8BB8\u5728\u7279\u5B9A\u7684 Ingress \u8D44\u6E90\u4E0A\u4F7F\u7528\u6CE8\u89E3\u6765\u63A7\u5236 Proxy Protocol \u884C\u4E3A\uFF0C\u4F8B\u5982 <code dir="auto">service.beta.kubernetes.io/aws-load-balancer-proxy-protocol</code>\u3002\u68C0\u67E5 Higress \u662F\u5426\u6709\u7C7B\u4F3C\u7684\u673A\u5236\u3002</p>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4E0A\u8FF0\u6B65\u9AA4\u662F\u57FA\u4E8E\u5BF9 Higress \u9AD8\u5EA6\u53EF\u914D\u7F6E\u7279\u6027\u7684\u7406\u89E3\u63D0\u51FA\u7684\u3002\u7531\u4E8E\u76F4\u63A5\u7684\u542F\u7528\u8BF4\u660E\u4E0D\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u8303\u56F4\u5185\uFF0C\u6211\u4EEC\u901A\u8FC7\u63A2\u7D22\u5176\u914D\u7F6E\u7075\u6D3B\u6027\u6765\u5C1D\u8BD5\u89E3\u51B3\u95EE\u9898\u3002\u901A\u8FC7\u81EA\u5B9A\u4E49 Nginx \u914D\u7F6E\u6216\u5229\u7528\u7279\u5B9A\u6CE8\u89E3\uFF0C\u7406\u8BBA\u4E0A\u53EF\u4EE5\u5B9E\u73B0\u5BF9 Proxy Protocol \u7684\u652F\u6301\u3002\u7136\u800C\uFF0C\u5177\u4F53\u7684\u5B9E\u73B0\u7EC6\u8282\u8FD8\u9700\u53C2\u8003 Higress \u6700\u65B0\u6587\u6863\u6216\u4E0E\u793E\u533A\u4EA4\u6D41\u786E\u8BA4\uFF0C\u786E\u4FDD\u65B9\u6848\u7684\u6709\u6548\u6027\u548C\u9002\u7528\u6027\u3002</p>
<p>\u8BF7\u6CE8\u610F\uFF0C\u4EE5\u4E0A\u5EFA\u8BAE\u662F\u57FA\u4E8E\u901A\u7528\u7684\u4E91\u539F\u751F\u7F51\u5173\u914D\u7F6E\u601D\u8DEF\uFF0C\u5B9E\u9645\u64CD\u4F5C\u524D\u52A1\u5FC5\u9A8C\u8BC1\u4E0E\u5F53\u524D Higress \u7248\u672C\u7684\u517C\u5BB9\u6027\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress 2.0\u6709\u4EC0\u4E48\u8DE8\u8D8A\u5F0F\u5347\u7EA7\u4E48\uFF1F</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72</p>
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
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17151" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,r={id:"question-history-17138",title:"\u600E\u4E48\u4F7F\u7528enableProxyProtocol",date:"2024-09-19",category:"expertConsultation",description:"\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u5982\u4F55\u5728 Higress \u4E2D\u542F\u7528 Proxy Protocol\u3002\u4E0D\u8FC7\uFF0C\u8003\u8651\u5230 Proxy Protocol \u901A\u5E38\u6D89\u53CA\u5230\u8D1F\u8F7D\u5747\u8861\u5668\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u7528\u4E8E\u4F20\u9012\u5BA2\u6237\u7AEF\u7684\u539F\u59CB\u8FDE\u63A5\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Higress \u7684\u914D\u7F6E\u7075\u6D3B\u6027\u6765\u63A8\u6D4B\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\u3002Higress ",tags:["higress","\u4F7F\u7528","enableProxyProtocol","\u65B9\u6CD5","\u89E3\u6790"],keywords:["higress","\u4F7F\u7528","enableProxyProtocol","\u65B9\u6CD5","\u89E3\u6790"]},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17138.md",t=void 0,i=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u600E\u4E48\u4F7F\u7528enableProxyProtocol  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u5982\u4F55\u5728 Higress \u4E2D\u542F\u7528 Proxy Protocol\u3002\u4E0D\u8FC7\uFF0C\u8003\u8651\u5230 Proxy Protocol \u901A\u5E38\u6D89\u53CA\u5230\u8D1F\u8F7D\u5747\u8861\u5668\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u7528\u4E8E\u4F20\u9012\u5BA2\u6237\u7AEF\u7684\u539F\u59CB\u8FDE\u63A5\u4FE1\u606F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Higress \u7684\u914D\u7F6E\u7075\u6D3B\u6027\u6765\u63A8\u6D4B\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E00\u529F\u80FD\u3002

Higress \u4F5C\u4E3A\u4E00\u4E2A\u9AD8\u5EA6\u53EF\u914D\u7F6E\u7684\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u652F\u6301\u5E7F\u6CDB\u7684\u5B9A\u5236\u5316\u9700\u6C42\uFF0C\u5305\u62EC\u901A\u8FC7 Helm \u53C2\u6570\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002\u867D\u7136\u6CA1\u6709\u76F4\u63A5\u7684\u53C2\u6570\u8BF4\u660E\u542F\u7528\u4E86 Proxy Protocol\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u662F\u5426\u80FD\u591F\u901A\u8FC7\u81EA\u5B9A\u4E49\u914D\u7F6E\u6216\u6CE8\u89E3\u6765\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\u3002

### \u5206\u6790\u95EE\u9898\u539F\u56E0

- \u7528\u6237\u60F3\u8981\u5728 Higress \u7F51\u5173\u4E2D\u542F\u7528 Proxy Protocol\uFF0C\u4EE5\u900F\u660E\u5730\u4F20\u9012\u5BA2\u6237\u7AEF\u7684\u771F\u5B9E IP \u5730\u5740\u548C\u5176\u4ED6\u8FDE\u63A5\u4FE1\u606F\u3002
- Higress \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u914D\u7F6E\u9009\u9879\u548C Helm \u90E8\u7F72\u53C2\u6570\uFF0C\u7406\u8BBA\u4E0A\u5E94\u8BE5\u6709\u65B9\u6CD5\u9002\u5E94\u8FD9\u4E00\u573A\u666F\u3002

### \u63A2\u7D22\u89E3\u51B3\u65B9\u6848

\u5C3D\u7BA1\u76F4\u63A5\u7684\u542F\u7528 Proxy Protocol \u7684\u6B65\u9AA4\u6CA1\u6709\u5728\u77E5\u8BC6\u6587\u6863\u4E2D\u627E\u5230\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C1D\u8BD5\u4EE5\u4E0B\u65B9\u5411\u6765\u5B9E\u73B0\u8FD9\u4E00\u9700\u6C42\uFF1A

1. **\u68C0\u67E5\u5B98\u65B9\u6587\u6863**: \u9996\u5148\uFF0C\u5EFA\u8BAE\u67E5\u9605 Higress \u7684\u6700\u65B0\u5B98\u65B9\u6587\u6863\uFF0C\u7279\u522B\u662F\u5173\u4E8E\u9AD8\u7EA7\u914D\u7F6E\u6216\u7F51\u7EDC\u76F8\u5173\u7684\u90E8\u5206\uFF0C\u770B\u662F\u5426\u6709\u76F4\u63A5\u652F\u6301 Proxy Protocol \u7684\u914D\u7F6E\u8BF4\u660E\u3002

2. **\u81EA\u5B9A\u4E49\u914D\u7F6E\u6620\u5C04**: Higress \u652F\u6301\u901A\u8FC7\u914D\u7F6E\u6620\u5C04\uFF08ConfigMap\uFF09\u6765\u81EA\u5B9A\u4E49 Nginx \u914D\u7F6E\u3002\u53EF\u4EE5\u5C1D\u8BD5\u521B\u5EFA\u4E00\u4E2A\u5305\u542B Proxy Protocol \u76F8\u5173\u914D\u7F6E\u7684 ConfigMap\uFF0C\u5E76\u5728 Helm \u90E8\u7F72\u65F6\u901A\u8FC7\u9002\u5F53\u7684\u53C2\u6570\u5F15\u7528\u5B83\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728 Nginx \u914D\u7F6E\u4E2D\u52A0\u5165\u7C7B\u4F3C \`proxy_protocol on;\` \u7684\u6307\u4EE4\u6765\u542F\u7528 Proxy Protocol \u652F\u6301\u3002

    \`\`\`bash
    # \u521B\u5EFA\u5305\u542BProxy Protocol\u914D\u7F6E\u7684ConfigMap
    kubectl create configmap proxy-protocol-config --from-literal=proxy_protocol="on" -n higress-system

    # \u5728Helm\u90E8\u7F72\u65F6\u5F15\u7528\u8BE5ConfigMap\uFF08\u5177\u4F53\u53C2\u6570\u9700\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF0C\u4EE5\u4E0B\u4EC5\u4E3A\u793A\u4F8B\uFF09
    helm install higress higress.io/higress -n higress-system \\
      --set higress-core.gateway.extraConfigMaps="proxy-protocol-config" \\
      --set higress-core.controller.extraConfigMaps="proxy-protocol-config"
    \`\`\`

3. **\u6CE8\u89E3\u652F\u6301**: \u786E\u8BA4 Ingress \u8D44\u6E90\u662F\u5426\u652F\u6301\u901A\u8FC7\u6CE8\u89E3\u6765\u5F00\u542F Proxy Protocol\u3002\u67D0\u4E9B\u7F51\u5173\u5141\u8BB8\u5728\u7279\u5B9A\u7684 Ingress \u8D44\u6E90\u4E0A\u4F7F\u7528\u6CE8\u89E3\u6765\u63A7\u5236 Proxy Protocol \u884C\u4E3A\uFF0C\u4F8B\u5982 \`service.beta.kubernetes.io/aws-load-balancer-proxy-protocol\`\u3002\u68C0\u67E5 Higress \u662F\u5426\u6709\u7C7B\u4F3C\u7684\u673A\u5236\u3002

### \u89E3\u91CA

\u4E0A\u8FF0\u6B65\u9AA4\u662F\u57FA\u4E8E\u5BF9 Higress \u9AD8\u5EA6\u53EF\u914D\u7F6E\u7279\u6027\u7684\u7406\u89E3\u63D0\u51FA\u7684\u3002\u7531\u4E8E\u76F4\u63A5\u7684\u542F\u7528\u8BF4\u660E\u4E0D\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u8303\u56F4\u5185\uFF0C\u6211\u4EEC\u901A\u8FC7\u63A2\u7D22\u5176\u914D\u7F6E\u7075\u6D3B\u6027\u6765\u5C1D\u8BD5\u89E3\u51B3\u95EE\u9898\u3002\u901A\u8FC7\u81EA\u5B9A\u4E49 Nginx \u914D\u7F6E\u6216\u5229\u7528\u7279\u5B9A\u6CE8\u89E3\uFF0C\u7406\u8BBA\u4E0A\u53EF\u4EE5\u5B9E\u73B0\u5BF9 Proxy Protocol \u7684\u652F\u6301\u3002\u7136\u800C\uFF0C\u5177\u4F53\u7684\u5B9E\u73B0\u7EC6\u8282\u8FD8\u9700\u53C2\u8003 Higress \u6700\u65B0\u6587\u6863\u6216\u4E0E\u793E\u533A\u4EA4\u6D41\u786E\u8BA4\uFF0C\u786E\u4FDD\u65B9\u6848\u7684\u6709\u6548\u6027\u548C\u9002\u7528\u6027\u3002

\u8BF7\u6CE8\u610F\uFF0C\u4EE5\u4E0A\u5EFA\u8BAE\u662F\u57FA\u4E8E\u901A\u7528\u7684\u4E91\u539F\u751F\u7F51\u5173\u914D\u7F6E\u601D\u8DEF\uFF0C\u5B9E\u9645\u64CD\u4F5C\u524D\u52A1\u5FC5\u9A8C\u8BC1\u4E0E\u5F53\u524D Higress \u7248\u672C\u7684\u517C\u5BB9\u6027\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress 2.0\u6709\u4EC0\u4E48\u8DE8\u8D8A\u5F0F\u5347\u7EA7\u4E48\uFF1F 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17151)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},a=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"\u63A2\u7D22\u89E3\u51B3\u65B9\u6848",text:"\u63A2\u7D22\u89E3\u51B3\u65B9\u6848"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},o=p((P,u,E)=>{const{layout:F,...n}=r;return n.file=e,n.url=t,g`${y()}${d(s)}`})});export{o as Content,x as __tla,a as compiledContent,o as default,e as file,r as frontmatter,l as getHeadings,i as rawContent,t as url};
