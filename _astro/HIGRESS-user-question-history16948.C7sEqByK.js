import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as y,u as E,__tla as v}from"./constant.Dh5mkKue.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let a,l,e,n,p,d,t,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress tcp\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u7684TCP\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4\u53EF\u4EE5\u8BE6\u7EC6\u89E3\u7B54\u5982\u4E0B\uFF1A</p>
<h3 id="1-\u524D\u7F6E\u51C6\u5907">1. <strong>\u524D\u7F6E\u51C6\u5907</strong></h3>
<p>\u786E\u4FDD\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A</p>
<ul>
<li><strong>Higress\u5B89\u88C5</strong>\uFF1A\u786E\u8BA4Higress\u5DF2\u88AB\u90E8\u7F72\u5728Kubernetes\u96C6\u7FA4\u7684<code dir="auto">higress-system</code>\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u4E14\u5176Service\u540D\u79F0\u4E3A<code dir="auto">higress-gateway</code>\u3002</li>
<li><strong>\u670D\u52A1\u76EE\u6807</strong>\uFF1A\u9700\u8981\u4E3A<code dir="auto">default</code>\u547D\u540D\u7A7A\u95F4\u4E0B\u7684<code dir="auto">tcp-echo</code>\u670D\u52A1\u914D\u7F6E\u56DB\u5C42\u8DEF\u7531\uFF0C\u8BE5\u670D\u52A1\u76D1\u542C\u7AEF\u53E3\u4E3A9000\uFF0C\u4E0E\u7F51\u5173\u76D1\u542C\u7AEF\u53E3\u4E00\u81F4\u3002</li>
<li><strong>Gateway API\u652F\u6301</strong>\uFF1AHigress\u9700\u9884\u5148\u914D\u7F6E\u4EE5\u652F\u6301Gateway API CRD\u3002<a href="https://higress.cn/docs/latest/ops/deploy-by-helm/#%E6%94%AF%E6%8C%81-gateway-api-crd%E5%8F%AF%E9%80%89" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u76F8\u5173\u6587\u6863</a></li>
</ul>
<h3 id="2-\u914D\u7F6E\u6B65\u9AA4">2. <strong>\u914D\u7F6E\u6B65\u9AA4</strong></h3>
<h4 id="\u521B\u5EFA-gatewayclass"><strong>\u521B\u5EFA GatewayClass</strong></h4>
<ol>
<li><strong>\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6</strong>\uFF1A\u521B\u5EFA<code dir="auto">gatewayclass.yaml</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GatewayClass</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">controllerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"higress.io/gateway-controller"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1\x7Fkind: GatewayClass\x7Fmetadata:\x7F  name: higress-gateway\x7Fspec:\x7F  controllerName: &#x22;higress.io/gateway-controller&#x22;"><div></div></button></div></figure></div>
<ol start="2">
<li><strong>\u5E94\u7528\u914D\u7F6E</strong>\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gatewayclass.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f gatewayclass.yaml"><div></div></button></div></figure></div>
<h4 id="\u521B\u5EFA-gateway"><strong>\u521B\u5EFA Gateway</strong></h4>
<ol>
<li><strong>\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6</strong>\uFF1A\u521B\u5EFA<code dir="auto">gateway.yaml</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">gatewayClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default-tcp</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowedRoutes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">namespaces</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">from</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">All</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">kinds</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCPRoute</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1\x7Fkind: Gateway\x7Fmetadata:\x7F  name: higress-gateway\x7F  namespace: higress-system\x7Fspec:\x7F  gatewayClassName: higress-gateway\x7F  listeners:\x7F  - name: default-tcp\x7F    protocol: TCP\x7F    port: 9000\x7F    allowedRoutes:\x7F      namespaces:\x7F        from: All\x7F      kinds:\x7F      - kind: TCPRoute"><div></div></button></div></figure></div>
<ol start="2">
<li><strong>\u5E94\u7528\u914D\u7F6E</strong>\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f gateway.yaml"><div></div></button></div></figure></div>
<h4 id="\u4FEE\u6539-higress-gateway-service"><strong>\u4FEE\u6539 higress-gateway Service</strong></h4>
<ol>
<li><strong>\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F</strong>\uFF1A\u4F7F\u7528\u547D\u4EE4\u8FDB\u5165Service\u7684\u7F16\u8F91\u72B6\u6001\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit service higress-gateway -n higress-system"><div></div></button></div></figure></div>
<ol start="2">
<li><strong>\u6DFB\u52A0\u7AEF\u53E3\u63CF\u8FF0</strong>\uFF1A\u5728<code dir="auto">spec.ports</code>\u90E8\u5206\u65B0\u589E9000\u7AEF\u53E3\u7684\u63CF\u8FF0\uFF0C\u4FDD\u5B58\u9000\u51FA\u3002</li>
</ol>
<h4 id="\u521B\u5EFA-tcproute"><strong>\u521B\u5EFA TCPRoute</strong></h4>
<ol>
<li><strong>\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6</strong>\uFF1A\u521B\u5EFA<code dir="auto">tcproute.yaml</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1alpha2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCPRoute</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-echo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">parentRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backendRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-echo</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1alpha2\x7Fkind: TCPRoute\x7Fmetadata:\x7F  name: tcp-echo\x7F  namespace: default\x7Fspec:\x7F  parentRefs:\x7F  - name: higress-gateway\x7F    namespace: higress-system\x7F    port: 9000\x7F  rules:\x7F  - backendRefs:\x7F    - name: tcp-echo\x7F      port: 9000"><div></div></button></div></figure></div>
<ol start="2">
<li><strong>\u5E94\u7528\u914D\u7F6E</strong>\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tcproute.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f tcproute.yaml"><div></div></button></div></figure></div>
<h4 id="\u914D\u7F6E\u9A8C\u8BC1"><strong>\u914D\u7F6E\u9A8C\u8BC1</strong></h4>
<ul>
<li>\u4F7F\u7528telnet\u6216\u7C7B\u4F3C\u5DE5\u5177\u5C1D\u8BD5\u8FDE\u63A5<code dir="auto">higress-gateway</code>\u670D\u52A1\u76849000\u7AEF\u53E3\uFF0C\u4EE5\u9A8C\u8BC1TCP\u8DEF\u7531\u914D\u7F6E\u662F\u5426\u751F\u6548\u3002</li>
</ul>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u4F9D\u6B21\u5B8C\u6210\u4E86\u4ECE\u5B9A\u4E49<code dir="auto">GatewayClass</code>\u4EE5\u6307\u5B9A\u63A7\u5236\u5668\uFF0C\u5230\u521B\u5EFA<code dir="auto">Gateway</code>\u4EE5\u914D\u7F6E\u76D1\u542C\u5668\u548C\u8DEF\u7531\u89C4\u5219\uFF0C\u518D\u5230\u8C03\u6574<code dir="auto">Service</code>\u4EE5\u66B4\u9732\u6240\u9700\u7AEF\u53E3\uFF0C\u4EE5\u53CA\u521B\u5EFA<code dir="auto">TCPRoute</code>\u6765\u5B9A\u4E49\u540E\u7AEF\u670D\u52A1\u7684\u6574\u4E2ATCP\u4EE3\u7406\u914D\u7F6E\u6D41\u7A0B\u3002\u6BCF\u4E00\u6B65\u90FD\u662F\u57FA\u4E8EKubernetes\u7684Gateway API\u8FDB\u884C\uFF0C\u786E\u4FDD\u4E86\u670D\u52A1\u7684\u9AD8\u53EF\u7528\u6027\u548C\u7075\u6D3B\u6027\u3002\u6700\u540E\u7684\u9A8C\u8BC1\u73AF\u8282\u662F\u4E3A\u4E86\u786E\u8BA4\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u670D\u52A1\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16955" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16948",title:"higress tcp\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u7684TCP\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4\u53EF\u4EE5\u8BE6\u7EC6\u89E3\u7B54\u5982\u4E0B\uFF1A### 1. **\u524D\u7F6E\u51C6\u5907**\u786E\u4FDD\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A- **Higress\u5B89\u88C5**\uFF1A\u786E\u8BA4Higress\u5DF2\u88AB\u90E8\u7F72\u5728Kubernetes\u96C6\u7FA4\u7684`higress-system`\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u4E14\u5176Service\u540D\u79F0\u4E3A`higress-gate",tags:["higress","tcp","\u4EE3\u7406","\u914D\u7F6E",""],keywords:["higress","tcp","\u4EE3\u7406","\u914D\u7F6E",""]},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16948.md",t=void 0,d=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress tcp\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress\u7684TCP\u4EE3\u7406\u914D\u7F6E\u6B65\u9AA4\u53EF\u4EE5\u8BE6\u7EC6\u89E3\u7B54\u5982\u4E0B\uFF1A

### 1. **\u524D\u7F6E\u51C6\u5907**
\u786E\u4FDD\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\uFF1A
- **Higress\u5B89\u88C5**\uFF1A\u786E\u8BA4Higress\u5DF2\u88AB\u90E8\u7F72\u5728Kubernetes\u96C6\u7FA4\u7684\`higress-system\`\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u4E14\u5176Service\u540D\u79F0\u4E3A\`higress-gateway\`\u3002
- **\u670D\u52A1\u76EE\u6807**\uFF1A\u9700\u8981\u4E3A\`default\`\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\`tcp-echo\`\u670D\u52A1\u914D\u7F6E\u56DB\u5C42\u8DEF\u7531\uFF0C\u8BE5\u670D\u52A1\u76D1\u542C\u7AEF\u53E3\u4E3A9000\uFF0C\u4E0E\u7F51\u5173\u76D1\u542C\u7AEF\u53E3\u4E00\u81F4\u3002
- **Gateway API\u652F\u6301**\uFF1AHigress\u9700\u9884\u5148\u914D\u7F6E\u4EE5\u652F\u6301Gateway API CRD\u3002[\u76F8\u5173\u6587\u6863](https://higress.cn/docs/latest/ops/deploy-by-helm/#%E6%94%AF%E6%8C%81-gateway-api-crd%E5%8F%AF%E9%80%89)

### 2. **\u914D\u7F6E\u6B65\u9AA4**

#### **\u521B\u5EFA GatewayClass**
1. **\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6**\uFF1A\u521B\u5EFA\`gatewayclass.yaml\`\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: higress-gateway
spec:
  controllerName: "higress.io/gateway-controller"
\`\`\`
2. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A

\`\`\`shell
kubectl apply -f gatewayclass.yaml
\`\`\`

#### **\u521B\u5EFA Gateway**
1. **\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6**\uFF1A\u521B\u5EFA\`gateway.yaml\`\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: higress-gateway
  namespace: higress-system
spec:
  gatewayClassName: higress-gateway
  listeners:
  - name: default-tcp
    protocol: TCP
    port: 9000
    allowedRoutes:
      namespaces:
        from: All
      kinds:
      - kind: TCPRoute
\`\`\`
2. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A

\`\`\`shell
kubectl apply -f gateway.yaml
\`\`\`

#### **\u4FEE\u6539 higress-gateway Service**
1. **\u8FDB\u5165\u7F16\u8F91\u6A21\u5F0F**\uFF1A\u4F7F\u7528\u547D\u4EE4\u8FDB\u5165Service\u7684\u7F16\u8F91\u72B6\u6001\uFF1A

\`\`\`shell
kubectl edit service higress-gateway -n higress-system
\`\`\`
2. **\u6DFB\u52A0\u7AEF\u53E3\u63CF\u8FF0**\uFF1A\u5728\`spec.ports\`\u90E8\u5206\u65B0\u589E9000\u7AEF\u53E3\u7684\u63CF\u8FF0\uFF0C\u4FDD\u5B58\u9000\u51FA\u3002

#### **\u521B\u5EFA TCPRoute**
1. **\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6**\uFF1A\u521B\u5EFA\`tcproute.yaml\`\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: gateway.networking.k8s.io/v1alpha2
kind: TCPRoute
metadata:
  name: tcp-echo
  namespace: default
spec:
  parentRefs:
  - name: higress-gateway
    namespace: higress-system
    port: 9000
  rules:
  - backendRefs:
    - name: tcp-echo
      port: 9000
\`\`\`
2. **\u5E94\u7528\u914D\u7F6E**\uFF1A\u901A\u8FC7\u547D\u4EE4\u5E94\u7528\u5230\u96C6\u7FA4\uFF1A

\`\`\`shell
kubectl apply -f tcproute.yaml
\`\`\`

#### **\u914D\u7F6E\u9A8C\u8BC1**
- \u4F7F\u7528telnet\u6216\u7C7B\u4F3C\u5DE5\u5177\u5C1D\u8BD5\u8FDE\u63A5\`higress-gateway\`\u670D\u52A1\u76849000\u7AEF\u53E3\uFF0C\u4EE5\u9A8C\u8BC1TCP\u8DEF\u7531\u914D\u7F6E\u662F\u5426\u751F\u6548\u3002

### \u89E3\u91CA
\u4EE5\u4E0A\u6B65\u9AA4\u4F9D\u6B21\u5B8C\u6210\u4E86\u4ECE\u5B9A\u4E49\`GatewayClass\`\u4EE5\u6307\u5B9A\u63A7\u5236\u5668\uFF0C\u5230\u521B\u5EFA\`Gateway\`\u4EE5\u914D\u7F6E\u76D1\u542C\u5668\u548C\u8DEF\u7531\u89C4\u5219\uFF0C\u518D\u5230\u8C03\u6574\`Service\`\u4EE5\u66B4\u9732\u6240\u9700\u7AEF\u53E3\uFF0C\u4EE5\u53CA\u521B\u5EFA\`TCPRoute\`\u6765\u5B9A\u4E49\u540E\u7AEF\u670D\u52A1\u7684\u6574\u4E2ATCP\u4EE3\u7406\u914D\u7F6E\u6D41\u7A0B\u3002\u6BCF\u4E00\u6B65\u90FD\u662F\u57FA\u4E8EKubernetes\u7684Gateway API\u8FDB\u884C\uFF0C\u786E\u4FDD\u4E86\u670D\u52A1\u7684\u9AD8\u53EF\u7528\u6027\u548C\u7075\u6D3B\u6027\u3002\u6700\u540E\u7684\u9A8C\u8BC1\u73AF\u8282\u662F\u4E3A\u4E86\u786E\u8BA4\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u670D\u52A1\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16955)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return s},p=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u524D\u7F6E\u51C6\u5907",text:"1. \u524D\u7F6E\u51C6\u5907"},{depth:3,slug:"2-\u914D\u7F6E\u6B65\u9AA4",text:"2. \u914D\u7F6E\u6B65\u9AA4"},{depth:4,slug:"\u521B\u5EFA-gatewayclass",text:"\u521B\u5EFA GatewayClass"},{depth:4,slug:"\u521B\u5EFA-gateway",text:"\u521B\u5EFA Gateway"},{depth:4,slug:"\u4FEE\u6539-higress-gateway-service",text:"\u4FEE\u6539 higress-gateway Service"},{depth:4,slug:"\u521B\u5EFA-tcproute",text:"\u521B\u5EFA TCPRoute"},{depth:4,slug:"\u914D\u7F6E\u9A8C\u8BC1",text:"\u914D\u7F6E\u9A8C\u8BC1"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},a=c((f,h,m)=>{const{layout:w,...i}=n;return i.file=e,i.url=t,r`${y()}${E(s)}`})});export{a as Content,u as __tla,l as compiledContent,a as default,e as file,n as frontmatter,p as getHeadings,d as rawContent,t as url};
