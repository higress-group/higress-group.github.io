import{c,__tla as o}from"./astro-component.DIa0fJKh.js";import{r,m as y,u as E,__tla as v}from"./constant.DnWM9dcJ.js";import{__tla as g}from"./astro/assets-service.tyfV9CK3.js";let a,i,e,n,l,d,t,f=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u524D\u7F6E\u51C6\u5907">\u524D\u7F6E\u51C6\u5907</h2>
<ol>
<li>Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u7F51\u5173\u7684 Service \u540D\u79F0\u4E3A higress-gateway\uFF1B</li>
<li>\u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 tcp-echo \u670D\u52A1\u914D\u7F6E\u4E00\u4E2A\u56DB\u5C42\u8DEF\u7531\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 9000\uFF0C\u7F51\u5173\u76D1\u542C\u7684\u7AEF\u53E3\u4E5F\u4E3A 9000\uFF1B</li>
<li>\u8DEF\u7531\u4F7F\u7528 Gateway API CRD \u8FDB\u884C\u914D\u7F6E\uFF0C\u9700\u8981\u63D0\u524D\u914D\u7F6E Higress \u4F7F\u5176\u652F\u6301\u76D1\u542C Gateway API\u3002\u53C2\u8003\u6587\u6863\uFF1A<a href="../../../ops/deploy-by-helm/#%E6%94%AF%E6%8C%81-gateway-api-crd%E5%8F%AF%E9%80%89" referrerpolicy="unsafe-url">\u6587\u6863</a></li>
</ol>
<h2 id="\u914D\u7F6E\u6B65\u9AA4">\u914D\u7F6E\u6B65\u9AA4</h2>
<h3 id="1-\u521B\u5EFA-gatewayclass">1. \u521B\u5EFA GatewayClass</h3>
<ol>
<li>\u521B\u5EFA <code dir="auto">gatewayclass.yaml</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GatewayClass</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">controllerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"higress.io/gateway-controller"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1\x7Fkind: GatewayClass\x7Fmetadata:\x7F  name: higress-gateway\x7Fspec:\x7F  controllerName: &#x22;higress.io/gateway-controller&#x22;"><div></div></button></div></figure></div>
</li>
<li>\u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gatewayclass.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f gatewayclass.yaml"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="2-\u521B\u5EFA-gateway">2. \u521B\u5EFA Gateway</h3>
<ol>
<li>\u521B\u5EFA <code dir="auto">gateway.yaml</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">gatewayClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default-tcp</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowedRoutes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">namespaces</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">from</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">All</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">kinds</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCPRoute</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1\x7Fkind: Gateway\x7Fmetadata:\x7F  name: higress-gateway\x7F  namespace: higress-system\x7Fspec:\x7F  gatewayClassName: higress-gateway\x7F  listeners:\x7F  - name: default-tcp\x7F    protocol: TCP\x7F    port: 9000\x7F    allowedRoutes:\x7F      namespaces:\x7F        from: All\x7F      kinds:\x7F      - kind: TCPRoute"><div></div></button></div></figure></div>
</li>
<li>\u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f gateway.yaml"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="3-\u4FEE\u6539-higress-gateway-service">3. \u4FEE\u6539 <code dir="auto">higress-gateway</code> Service</h3>
<ol>
<li>\u6267\u884C\u547D\u4EE4\uFF0C\u8FDB\u5EA6 <code dir="auto">higress-gateway</code> Service \u7684\u7F16\u8F91\u72B6\u6001\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit service higress-gateway -n higress-system"><div></div></button></div></figure></div>
</li>
<li>\u5728 <code dir="auto">spec.ports</code> \u5217\u8868\u4E2D\u589E\u52A0\u5BF9 <code dir="auto">9000</code> \u7684\u7AEF\u53E3\u7684\u63CF\u8FF0\u4FE1\u606F\u3002\u589E\u52A0\u540E\u7684\u914D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># --- \u6B64\u5904\u4E3A\u589E\u52A0\u7684\u914D\u7F6E ---</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># ----------------------</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="...\x7F  ports:\x7F  - name: http2\x7F    port: 80\x7F    protocol: TCP\x7F    targetPort: 80\x7F  - name: https\x7F    port: 443\x7F    protocol: TCP\x7F    targetPort: 443\x7F  # --- \u6B64\u5904\u4E3A\u589E\u52A0\u7684\u914D\u7F6E ---\x7F  - name: tcp\x7F    port: 9000\x7F    protocol: TCP\x7F    targetPort: 9000\x7F  # ----------------------\x7F..."><div></div></button></div></figure></div>
</li>
<li>\u4FDD\u5B58\u7F16\u8F91\u5185\u5BB9\u5E76\u9000\u51FA\u7F16\u8F91\u5668\u3002</li>
</ol>
<h3 id="4-\u521B\u5EFA-tcproute">4. \u521B\u5EFA TCPRoute</h3>
<ol>
<li>\u521B\u5EFA <code dir="auto">tcproute.yaml</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1alpha2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCPRoute</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-echo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">parentRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backendRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-echo</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: gateway.networking.k8s.io/v1alpha2\x7Fkind: TCPRoute\x7Fmetadata:\x7F  name: tcp-echo\x7F  namespace: default\x7Fspec:\x7F  parentRefs:\x7F  - name: higress-gateway\x7F    namespace: higress-system\x7F    port: 9000\x7F  rules:\x7F  - backendRefs:\x7F    - name: tcp-echo\x7F      port: 9000"><div></div></button></div></figure></div>
</li>
<li>\u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tcproute.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f tcproute.yaml"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="5-\u914D\u7F6E\u9A8C\u8BC1">5. \u914D\u7F6E\u9A8C\u8BC1</h3>
<p>\u914D\u7F6E\u5B8C\u6210\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 telnet higress-gateway service \u7684 9000 \u7AEF\u53E3\u7B49\u65B9\u5F0F\u9A8C\u8BC1\u8DEF\u7531\u662F\u5426\u80FD\u591F\u6B63\u5E38\u5DE5\u4F5C\u3002</p>`,n={title:"\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531",keywords:["ops","config","route","tcp"],description:"\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/tcp-route.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/tcp-route.md",t=void 0,d=function(){return`\r
# \u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531\r
\r
## \u524D\u7F6E\u51C6\u5907\r
\r
1. Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u7F51\u5173\u7684 Service \u540D\u79F0\u4E3A higress-gateway\uFF1B\r
2. \u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 tcp-echo \u670D\u52A1\u914D\u7F6E\u4E00\u4E2A\u56DB\u5C42\u8DEF\u7531\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 9000\uFF0C\u7F51\u5173\u76D1\u542C\u7684\u7AEF\u53E3\u4E5F\u4E3A 9000\uFF1B\r
3. \u8DEF\u7531\u4F7F\u7528 Gateway API CRD \u8FDB\u884C\u914D\u7F6E\uFF0C\u9700\u8981\u63D0\u524D\u914D\u7F6E Higress \u4F7F\u5176\u652F\u6301\u76D1\u542C Gateway API\u3002\u53C2\u8003\u6587\u6863\uFF1A[\u6587\u6863](../../ops/deploy-by-helm.md#\u652F\u6301-gateway-api-crd\u53EF\u9009)\r
\r
## \u914D\u7F6E\u6B65\u9AA4\r
\r
### 1. \u521B\u5EFA GatewayClass\r
\r
1. \u521B\u5EFA \`gatewayclass.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
    \`\`\`yaml\r
    apiVersion: gateway.networking.k8s.io/v1\r
    kind: GatewayClass\r
    metadata:\r
      name: higress-gateway\r
    spec:\r
      controllerName: "higress.io/gateway-controller"\r
    \`\`\`\r
2. \u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A\r
    \`\`\`bash\r
    kubectl apply -f gatewayclass.yaml\r
    \`\`\`\r
\r
### 2. \u521B\u5EFA Gateway\r
\r
1. \u521B\u5EFA \`gateway.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
    \`\`\`yaml\r
    apiVersion: gateway.networking.k8s.io/v1\r
    kind: Gateway\r
    metadata:\r
      name: higress-gateway\r
      namespace: higress-system\r
    spec:\r
      gatewayClassName: higress-gateway\r
      listeners:\r
      - name: default-tcp\r
        protocol: TCP\r
        port: 9000\r
        allowedRoutes:\r
          namespaces:\r
            from: All\r
          kinds:\r
          - kind: TCPRoute\r
    \`\`\`\r
2. \u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A\r
    \`\`\`bash\r
    kubectl apply -f gateway.yaml\r
    \`\`\`\r
\r
### 3. \u4FEE\u6539 \`higress-gateway\` Service\r
\r
1. \u6267\u884C\u547D\u4EE4\uFF0C\u8FDB\u5EA6 \`higress-gateway\` Service \u7684\u7F16\u8F91\u72B6\u6001\uFF1A\r
    \`\`\`bash\r
    kubectl edit service higress-gateway -n higress-system\r
    \`\`\`\r
2. \u5728 \`spec.ports\` \u5217\u8868\u4E2D\u589E\u52A0\u5BF9 \`9000\` \u7684\u7AEF\u53E3\u7684\u63CF\u8FF0\u4FE1\u606F\u3002\u589E\u52A0\u540E\u7684\u914D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A\r
    \`\`\`yaml\r
    ...\r
      ports:\r
      - name: http2\r
        port: 80\r
        protocol: TCP\r
        targetPort: 80\r
      - name: https\r
        port: 443\r
        protocol: TCP\r
        targetPort: 443\r
      # --- \u6B64\u5904\u4E3A\u589E\u52A0\u7684\u914D\u7F6E ---\r
      - name: tcp\r
        port: 9000\r
        protocol: TCP\r
        targetPort: 9000\r
      # ----------------------\r
    ...\r
    \`\`\`\r
3. \u4FDD\u5B58\u7F16\u8F91\u5185\u5BB9\u5E76\u9000\u51FA\u7F16\u8F91\u5668\u3002\r
\r
### 4. \u521B\u5EFA TCPRoute\r
\r
1. \u521B\u5EFA \`tcproute.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
    \`\`\`yaml\r
    apiVersion: gateway.networking.k8s.io/v1alpha2\r
    kind: TCPRoute\r
    metadata:\r
      name: tcp-echo\r
      namespace: default\r
    spec:\r
      parentRefs:\r
      - name: higress-gateway\r
        namespace: higress-system\r
        port: 9000\r
      rules:\r
      - backendRefs:\r
        - name: tcp-echo\r
          port: 9000\r
    \`\`\`\r
2. \u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A\r
    \`\`\`bash\r
    kubectl apply -f tcproute.yaml\r
    \`\`\`\r
\r
### 5. \u914D\u7F6E\u9A8C\u8BC1\r
\r
\u914D\u7F6E\u5B8C\u6210\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 telnet higress-gateway service \u7684 9000 \u7AEF\u53E3\u7B49\u65B9\u5F0F\u9A8C\u8BC1\u8DEF\u7531\u662F\u5426\u80FD\u591F\u6B63\u5E38\u5DE5\u4F5C\u3002`},i=function(){return s},l=function(){return[{depth:2,slug:"\u524D\u7F6E\u51C6\u5907",text:"\u524D\u7F6E\u51C6\u5907"},{depth:2,slug:"\u914D\u7F6E\u6B65\u9AA4",text:"\u914D\u7F6E\u6B65\u9AA4"},{depth:3,slug:"1-\u521B\u5EFA-gatewayclass",text:"1. \u521B\u5EFA GatewayClass"},{depth:3,slug:"2-\u521B\u5EFA-gateway",text:"2. \u521B\u5EFA Gateway"},{depth:3,slug:"3-\u4FEE\u6539-higress-gateway-service",text:"3. \u4FEE\u6539 higress-gateway Service"},{depth:3,slug:"4-\u521B\u5EFA-tcproute",text:"4. \u521B\u5EFA TCPRoute"},{depth:3,slug:"5-\u914D\u7F6E\u9A8C\u8BC1",text:"5. \u914D\u7F6E\u9A8C\u8BC1"}]},a=c((u,m,h)=>{const{layout:F,...p}=n;return p.file=e,p.url=t,r`${y()}${E(s)}`})});export{a as Content,f as __tla,i as compiledContent,a as default,e as file,n as frontmatter,l as getHeadings,d as rawContent,t as url};
