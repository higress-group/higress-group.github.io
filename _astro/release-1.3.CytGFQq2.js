import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r as E,m as y,u as r,__tla as v}from"./constant.V2td3cJV.js";import{__tla as g}from"./astro/assets-service.DQopRnBr.js";let a,i,e,n,t,d,p,F=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u5386\u7A0B\u56DE\u987E">\u5386\u7A0B\u56DE\u987E</h2>
<p><img src="https://github.com/johnlanni/higress-group.github.io/assets/6763318/b5f3ee1b-d53a-4fbb-8d4a-82427ebdfe40" alt="image" referrerpolicy="no-referrer"></p>
<p>Higress \u5F00\u6E90\u4E00\u5E74\u65F6\u95F4\uFF0C\u4E00\u5171\u53D1\u5E03\u4E86 18 \u4E2A release \u7248\u672C\uFF0C\u6536\u83B7\u4E86 40 \u591A\u4F4D\u793E\u533A\u8D21\u732E\u8005\u548C 1800+ star\uFF0C\u4E0A\u56FE\u662F\u8FD9\u4E00\u5E74\u8FC7\u6765\u8FBE\u6210\u7684\u4E00\u4E9B\u5173\u952E\u7684\u91CC\u7A0B\u7891\u3002</p>
<p>\u524D\u9762\u534A\u5E74\u901A\u8FC7\u96C6\u6210\u5F00\u6E90\u751F\u6001\uFF0C\u6253\u78E8\u5F00\u6E90\u7248\u672C\u7A33\u5B9A\u6027\uFF0C\u5E76\u5728\u53D1\u5E03 1.0 GA \u7248\u672C\u540E\uFF0C\u793E\u533A\u53C8\u9A6C\u4E0D\u505C\u8E44\u53D1\u5E03\u4E86 1.1 \u548C 1.2 \u4E24\u4E2A\u91CD\u8981\u7248\u672C\uFF0C\u5B9E\u73B0\u4E86\u975E K8s \u90E8\u7F72\uFF0CKnative \u9002\u914D\u7B49\u6838\u5FC3\u80FD\u529B\u3002</p>
<p>Higress 1.3 \u7248\u672C\u5DF2\u7ECF\u6B63\u5F0F\u53D1\u5E03\uFF0C\u9664\u4E86\u589E\u52A0\u7684\u65B0\u529F\u80FD\uFF0C\u5DF2\u6709\u80FD\u529B\u4E5F\u5728\u5927\u91CF\u793E\u533A\u7528\u6237\u53CD\u9988\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u5B8C\u5584\u6539\u8FDB\uFF0C\u8FD9\u4E2A\u7248\u672C\u540C\u65F6\u6807\u5FD7\u7740 1.x \u8FDB\u5165\u53EF\u4EE5\u5927\u89C4\u6A21\u751F\u4EA7\u4F7F\u7528\u7684\u72B6\u6001\u3002</p>
<h2 id="\u65B0\u7248\u672C\u529F\u80FD\u901F\u89C8">\u65B0\u7248\u672C\uFF1A\u529F\u80FD\u901F\u89C8</h2>
<p>\u81EA\u53D1\u5E03 1.2 \u7248\u672C\u8FC7\u53BB\u4E86\u4E00\u4E2A\u591A\u6708\u65F6\u95F4\uFF0C1.3 \u7248\u672C\u6B63\u5F0F\u53D1\u5E03\uFF0C\u5E26\u6765\u4E24\u4E2A\u5168\u65B0\u80FD\u529B\uFF1A</p>
<ul>
<li>\u65B0\u6807\u51C6\uFF1A\u652F\u6301\u6700\u65B0\u7248\u672C Gateway API \u6807\u51C6\uFF0C\u5E76\u4E14\u5177\u5907\u4ECE Ingress \u5E73\u6ED1\u6E10\u8FDB\u6F14\u8FDB\uFF0C\u4EE5\u53CA\u5BF9\u63A5\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\u7684\u80FD\u529B</li>
<li>\u65B0\u5DE5\u5177\uFF1A\u6B63\u5F0F release \u4E86 hgctl (Higress Crontroller) \u8FD9\u4E2A \u201CAll in one\u201D \u7684\u65B0\u5DE5\u5177\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u66FF\u4EE3 Helm \u5B9E\u73B0\u66F4\u7B80\u6613\u7684\u5B89\u88C5\uFF0C\u8FD8\u63D0\u4F9B\u4E86 WASM \u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305\uFF0C\u4EE5\u53CA\u7F51\u5173\u914D\u7F6E\u68C0\u67E5\u7B49\u4E30\u5BCC\u529F\u80FD</li>
</ul>
<p>\u9664\u4E86\u8FD9\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5B9E\u7528\u529F\u80FD\uFF1A</p>
<ol>
<li>\u63D0\u4F9B\u4E86 Higress Admin Java SDK\uFF0C\u53EF\u4EE5\u7EDF\u4E00\u5BF9\u63A5 K8s \u548C\u975E K8s \u73AF\u5883\uFF0C\u7BA1\u7406\u57DF\u540D/\u8DEF\u7531\u7B49\u914D\u7F6E</li>
<li>\u63D0\u4F9B\u4E86 OIDC \u63D2\u4EF6\uFF0C\u652F\u6301\u5BF9\u63A5 Keycloak/Okta \u7B49\u7B2C\u4E09\u65B9\u8EAB\u4EFD\u8BA4\u8BC1\u7CFB\u7EDF</li>
<li>Higress Console \u7684\u6613\u7528\u6027\u548C\u5B89\u5168\u6027\u63D0\u5347\uFF0C\u4E0D\u518D\u901A\u8FC7\u8DEF\u7531\u66B4\u9732\uFF0C\u652F\u6301\u754C\u9762\u521D\u59CB\u5316/\u4FEE\u6539\u5BC6\u7801</li>
</ol>
<p>\u4E0E\u6B64\u540C\u65F6\uFF0CHigress \u5F00\u6E90\u793E\u533A\u5DF2\u7ECF\u5F00\u59CB\u51C6\u5907\u8E0F\u4E0A\u4E00\u6BB5\u5168\u65B0\u7684\u5F00\u6E90\u5F81\u7A0B\u2026</p>
<h2 id="\u65B0\u6807\u51C6\u652F\u6301\u6700\u65B0\u7248-gateway-api">\u65B0\u6807\u51C6\uFF1A\u652F\u6301\u6700\u65B0\u7248 Gateway API</h2>
<p>Gateway API \u5728 11 \u6708 1 \u65E5\u6B63\u5F0F\u53D1\u5E03\u4E86 1.0.0 \u7248\u672C\uFF0C\u5176\u4E2D GatewayClass, Gateway, HTTPRoute \u8FD9\u4E09\u4E2A API\u6B63\u5F0F\u5BA3\u5E03 GA\uFF0C\u53D1\u5E03\u4E86 v1 \u7248\u672C\uFF1Agateway.networking.k8s.io/v1\u3002</p>
<p>\u76EE\u524D Higress \u5DF2\u7ECF\u53EF\u4EE5\u652F\u6301\u8FD9\u4E9B\u6700\u65B0\u7248\u672C\u7684 API \u914D\u7F6E\uFF0C\u53EA\u9700\u5728\u5B89\u88C5/\u5347\u7EA7 Higress \u65F6\u914D\u7F6E\u5F00\u542F Gateway API\uFF1A</p>
<ul>
<li>\u4F7F\u7528 Helm \uFF1A\u901A\u8FC7\u53C2\u6570 <code dir="auto">--set global.enableGatewayAPI=true</code></li>
<li>\u4F7F\u7528 Hgctl \uFF1A\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u6216\u8005 install.yaml \u4E2D\u914D\u7F6E <code dir="auto">global.enableGatewayAPI=true</code></li>
</ul>
<p>\u9996\u5148\u521B\u5EFA GatewayClass \u8D44\u6E90\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GatewayClass</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">controllerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"higress.io/gateway-controller"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  apiVersion: gateway.networking.k8s.io/v1\x7F  kind: GatewayClass\x7F  metadata:\x7F    name: higress-gateway\x7F  spec:\x7F    controllerName: &#x22;higress.io/gateway-controller&#x22;"><div></div></button></div></figure></div>
<p>\u63A5\u7740\u5728\u5B89\u88C5 Higress \u7684\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u521B\u5EFA Gateway \u8D44\u6E90\uFF0C\u901A\u8FC7 gatewayClassName \u5173\u8054\u4E0A\u9762\u521B\u5EFA\u7684 GatewayClass \u8D44\u6E90\uFF0C\u6307\u5B9A\u7531 Higress \u6765\u7BA1\u7406\u6B64 Gateway \u914D\u7F6E\uFF0C\u4E0B\u9762\u4E3A\u57DF\u540D\u540C\u65F6\u914D\u7F6E\u4E86 HTTP \u548C HTTPS \u5165\u53E3\uFF0C\u5E76\u4E3A HTTPS \u5165\u53E3\u914D\u7F6E\u4E86\u8BC1\u4E66\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">gatewayClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foobar</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">hostname</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*.foobar.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">allowedRoutes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">namespaces</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">from</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">All</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foobar-https</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">hostname</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*.foobar.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">allowedRoutes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">namespaces</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">from</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">All</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">tls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">certificateRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wildcard-foobar-com</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Terminate</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  apiVersion: gateway.networking.k8s.io/v1\x7F  kind: Gateway\x7F  metadata:\x7F    name: higress-gateway\x7F    namespace: higress-system\x7F  spec:\x7F    gatewayClassName: higress-gateway\x7F    listeners:\x7F    - name: foobar\x7F      hostname: &#x22;*.foobar.com&#x22;\x7F      port: 80\x7F      protocol: HTTP\x7F      allowedRoutes:\x7F        namespaces:\x7F          from: All\x7F    - name: foobar-https\x7F      hostname: &#x22;*.foobar.com&#x22;\x7F      port: 443\x7F      protocol: HTTPS\x7F      allowedRoutes:\x7F        namespaces:\x7F          from: All\x7F      tls:\x7F        certificateRefs:\x7F        - kind: Secret\x7F          name: wildcard-foobar-com\x7F        mode: Terminate"><div></div></button></div></figure></div>
<p>\u56E0\u4E3A\u4E0A\u9762 Gateway \u901A\u8FC7 allowedRoutes \u914D\u7F6E\u4E86\u5141\u8BB8\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684\u8DEF\u7531\u6765\u5173\u8054\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B\u521B\u5EFA HTTPRoute\uFF0C\u5173\u8054\u4E0A\u9762\u521B\u5EFA\u7684 Gateway\uFF0C\u5373\u53EF\u5B9A\u4E49\u57DF\u540D\u4E0B\u7684\u5177\u4F53\u8DEF\u7531\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPRoute</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foobar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">parentRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostnames</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"www.foobar.com"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">matches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">PathPrefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">backendRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  apiVersion: gateway.networking.k8s.io/v1\x7F  kind: HTTPRoute\x7F  metadata:\x7F    name: foobar\x7F    namespace: default\x7F  spec:\x7F    parentRefs:\x7F    - name: higress-gateway\x7F      namespace: higress-system\x7F    hostnames: [&#x22;www.foobar.com&#x22;]\x7F    rules:\x7F    - matches:\x7F      - path:\x7F          type: PathPrefix\x7F          value: /foo\x7F      backendRefs:\x7F      - name: foo-service\x7F        port: 5678"><div></div></button></div></figure></div>
<p>\u4EE5\u4E0A\u5C31\u662F Gateway API \u7684\u4E00\u4E2A\u7B80\u5355\u7528\u6CD5\u793A\u4F8B\uFF0CGateway API \u8FD8\u6709\u5F88\u591A\u529F\u80FD\u548C\u73A9\u6CD5\uFF0C\u540E\u9762 Higress \u516C\u4F17\u53F7/\u535A\u5BA2\u4F1A\u51FA\u4E00\u4E2A\u7CFB\u5217\u8FDB\u884C\u7CFB\u7EDF\u5206\u4EAB\u548C\u4ECB\u7ECD\u3002</p>
<p>\u6B22\u8FCE\u7ED3\u5408<a href="https://gateway-api.sigs.k8s.io/reference/spec/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B98\u65B9 API \u6587\u6863</a>\uFF0C\u5E76\u4F7F\u7528 hgctl \uFF08\u83B7\u53D6\u65B9\u5F0F\u89C1\u4E0B\u6587\uFF09\u5728\u81EA\u5DF1\u7535\u8111\u4E0A\u5B89\u88C5\u4E00\u4E2A local-k8s \u6A21\u5F0F\u7684 Higress\uFF0C\u6765\u5F00\u542F\u5BF9\u8FD9\u4E00\u65B0\u6807\u51C6\u7684\u63A2\u7D22\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4E00\u952E\u5B89\u88C5, \u4EA4\u4E92\u5F0F\u547D\u4EE4\u9009\u62E9\u7B2C\u4E00\u79CD\u5B89\u88C5\u6A21\u5F0F local-k8s\uFF0C\u5C06\u9ED8\u8BA4\u5B89\u88C5 Gateway API CRD</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl install"><div></div></button></div></figure></div>
<h3 id="\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B">\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B</h3>
<p>\u5728 Ingress API \u6807\u51C6\u4E0B\uFF0CHigress \u5BF9\u63A5\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B\u662F\u72EC\u6811\u4E00\u5E1C\u7684\uFF0C\u5728 Gateway API \u6807\u51C6\u4E0B\uFF0C Higress \u4ECD\u5C31\u4FDD\u6301\u4E86\u8FD9\u4E00\u80FD\u529B\u4F18\u52BF\uFF1A</p>
<p>\u9996\u5148\u901A\u8FC7 McpBridge \u8D44\u6E90\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-local-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-local-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2181</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-local-eureka</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8761</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">eureka</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">consulDatacenter</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dc1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-local-consul</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8500</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consul</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  apiVersion: networking.higress.io/v1\x7F  kind: McpBridge\x7F  metadata:\x7F    name: default\x7F    namespace: higress-system\x7F  spec:\x7F    registries:\x7F    - domain: 127.0.0.1\x7F      nacosGroups:\x7F      - DEFAULT_GROUP\x7F      name: my-local-nacos\x7F      port: 8848\x7F      type: nacos2\x7F    - domain: 127.0.0.1\x7F      name: my-local-zk\x7F      port: 2181\x7F      type: zookeeper\x7F    - domain: 127.0.0.1\x7F      name: my-local-eureka\x7F      port: 8761\x7F      type: eureka\x7F    - domain: 127.0.0.1\x7F      consulDatacenter: dc1\x7F      name: my-local-consul\x7F      port: 8500\x7F      type: consul"><div></div></button></div></figure></div>
<p>\u521B\u5EFA\u4E00\u4E2A HTTPRoute \u8D44\u6E90\uFF0C\u53EF\u4EE5\u540C\u65F6\u5BF9\u63A5 K8s \u670D\u52A1\uFF0C\u548C\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\uFF0C\u5E76\u5B9E\u73B0\u7070\u5EA6\u8DEF\u7531\u80FD\u529B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gateway.networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPRoute</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">parentRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">matches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">PathPrefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">backendRefs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">service-provider.DEFAULT-GROUP.public.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">group</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  apiVersion: gateway.networking.k8s.io/v1\x7F  kind: HTTPRoute\x7F  metadata:\x7F    name: http\x7F    namespace: default\x7F  spec:\x7F    parentRefs:\x7F    - name: higress-gateway\x7F      namespace: higress-system\x7F    rules:\x7F    - matches:\x7F      - path:\x7F          type: PathPrefix\x7F          value: /\x7F      backendRefs:\x7F      - name: service-provider.DEFAULT-GROUP.public.nacos\x7F        group: networking.higress.io\x7F        port: 8080\x7F        weight: 90\x7F      - name: foo-service\x7F        port: 5678\x7F        weight: 10"><div></div></button></div></figure></div>
<p>\u548C K8s \u670D\u52A1\u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u91CC group \u4E3A <code dir="auto">networking.higress.io</code> \u7684\u670D\u52A1\u5E76\u4E0D\u9700\u8981\u63D0\u524D\u521B\u5EFA CRD \u8D44\u6E90\uFF0C\u8FD9\u66F4\u7B26\u5408\u4F20\u7EDF\u5FAE\u670D\u52A1\u7528\u6237\u7684\u4E60\u60EF\uFF0C\u5373\u670D\u52A1\u6A21\u578B\u4E0D\u9700\u8981\u63D0\u524D\u521B\u5EFA\uFF0C\u662F\u901A\u8FC7\u670D\u52A1\u8282\u70B9\u6CE8\u518C\u81EA\u52A8\u751F\u6210\u3002</p>
<h3 id="ingress-api-\u548C-gateway-api-\u4E4B\u95F4\u5982\u4F55\u9009\u62E9">Ingress API \u548C Gateway API \u4E4B\u95F4\u5982\u4F55\u9009\u62E9</h3>
<p>\u6709\u4E86 Gateway API\uFF0C\u662F\u5426\u5E94\u8BE5\u7ACB\u5373\u629B\u5F03 Ingress API\uFF1F</p>
<p>\u53EA\u6709\u6700\u5408\u9002\u7684\uFF0C\u6CA1\u6709\u6700\u597D\u7684\u3002Gateway API \u867D\u7136\u4E3A\u66F4\u591A\u7F51\u5173\u80FD\u529B\u505A\u4E86\u6807\u51C6\u5316\uFF0C\u4F46 CRD \u7684\u79CD\u7C7B\u548C\u590D\u6742\u5EA6\u4E5F\u589E\u52A0\u4E86\uFF0C\u76F8\u6BD4\u4E4B\u4E0B\u5BF9\u4E8E\u5927\u90E8\u5206\u7B80\u5355\u7528\u4F8B\u573A\u666F\uFF0CIngress API \u66F4\u52A0\u7B80\u5355\u6613\u7528\u3002</p>
<p>\u5BF9\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF0C\u91C7\u7528 Gateway API \u66FF\u4EE3 Ingress API \u4F1A\u5E26\u6765\u5F88\u5927\u5E2E\u52A9\uFF1A</p>
<ul>
<li>\u5927\u578B\u56E2\u961F\u5212\u5206\u4E86 SRE \u89D2\u8272\u548C\u4E1A\u52A1\u7814\u53D1\u89D2\u8272\uFF0C\u7531 SRE \u901A\u8FC7 Gateway \u8D44\u6E90\u7EDF\u4E00\u7BA1\u7406\u7AD9\u70B9\u57DF\u540D\u548C\u8BC1\u4E66\uFF0C\u7531\u4E1A\u52A1\u7814\u53D1\u901A\u8FC7 HTTPRoute \u8D44\u6E90\u7BA1\u7406\u4E1A\u52A1\u8DEF\u7531\uFF0C\u5B9E\u73B0\u804C\u8D23\u5212\u5206\uFF0C\u6743\u9650\u6536\u655B</li>
<li>\u521B\u5EFA\u7684\u8DEF\u7531\u548C Service \u6709\u4E0D\u5728\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u501F\u52A9 ReferenceGrant \u8D44\u6E90\u5B9E\u73B0</li>
<li>\u6709\u5927\u91CF\u8BC1\u4E66\u9700\u8981\u96C6\u4E2D\u5F0F\u7BA1\u7406\uFF0C\u4E0D\u5E0C\u671B\u5C06\u8BC1\u4E66 Secret \u540C\u6B65\u5230 Ingress \u6240\u5728\u547D\u540D\u7A7A\u95F4\uFF0C\u5E26\u6765\u5B89\u5168\u98CE\u9669</li>
</ul>
<p>Gateway API \u7684\u53E6\u4E00\u4E2A\u597D\u5904\u662F\u5BF9\u4E8E\u66F4\u591A\u529F\u80FD\u7684\u6807\u51C6\u5316\u5B9A\u4E49\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u9047\u5230\u5B9E\u9645\u9700\u8981\u518D\u8F6C\u6362\u5230\u8FD9\u4E2A\u65B0\u7684\u6807\u51C6\uFF0C\u800C\u4E0D\u5FC5\u76F2\u76EE\u8DDF\u968F\u3002</p>
<p>Higress \u652F\u6301 Gateway API \u548C Ingress API \u6DF7\u5408\u4F7F\u7528\uFF0CGateway API \u4E0B\u7684\u57DF\u540D\u8DEF\u7531\u5C06\u6BD4 Ingress API \u4F18\u5148\u5339\u914D\uFF0C\u548C Ingress \u76F8\u540C\u8D44\u6E90\u540D\u79F0\u7684 HTTPRoute \u8FD8\u4F1A\u7EE7\u627F WASM \u63D2\u4EF6\u914D\u7F6E\uFF0C\u8FD9\u6837\u7528\u6237\u53EF\u4EE5\u6309\u9700\u91C7\u7528 Gateway API\uFF0C\u5E73\u6ED1\u5730\u5B8C\u6210\u4ECE Ingress API \u5411 Gateway API \u7684\u6F14\u8FDB\uFF0C\u65E0\u9700\u7126\u8651 API \u6807\u51C6\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u4E1A\u52A1\u635F\u5931\u3002</p>
<h2 id="\u65B0\u5DE5\u5177all-in-one-\u7684-hgctl">\u65B0\u5DE5\u5177\uFF1AAll in one \u7684 hgctl</h2>
<h3 id="\u66FF\u4EE3-helm-\u7528\u4E8E\u5B89\u88C5\u5347\u7EA7">\u66FF\u4EE3 Helm \u7528\u4E8E\u5B89\u88C5/\u5347\u7EA7</h3>
<p>\u5728 K8s \u4E0B\u7528 Helm \u5B89\u88C5/\u5347\u7EA7\u7EC4\u4EF6\u5F88\u65B9\u4FBF\uFF0C\u4F46\u5728 Higress \u7684\u573A\u666F\u4E0B\u4ECD\u7136\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF1A</p>
<ol>
<li>\u65E0\u6CD5\u652F\u6301\u975E K8s \u573A\u666F\u4E0B\u7684\u5B89\u88C5/\u5347\u7EA7</li>
<li>Higress \u6709\u5F88\u591A\u5B89\u88C5\u53C2\u6570\uFF0C\u8FDB\u884C\u5347\u7EA7\u7B49\u64CD\u4F5C\u65F6\u4E0D\u597D\u7EF4\u62A4\uFF0C\u4F7F\u7528<code dir="auto">reuse-values</code> \u6709\u4E00\u4E9B\u526F\u4F5C\u7528\uFF0C\u4E14\u5BB9\u6613\u8BEF\u64CD\u4F5C</li>
<li>\u65E0\u6CD5\u7BA1\u7406 CRD \u8DDF\u968F\u7248\u672C\u66F4\u65B0\uFF0C\u9700\u8981\u624B\u52A8\u66F4\u65B0</li>
</ol>
<p>Higress \u501F\u9274\u4E86 istio \u7684 istioctl\uFF0C\u63D0\u4F9B\u4E86 hgctl \u8FD9\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\u89E3\u51B3\u4E86\u4E0A\u8FF0\u95EE\u9898\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\u5B89\u88C5 hgctl</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u4E0B\u8F7D\u6700\u65B0\u7248 Hgctl\uFF1A</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Ls</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> VERSION</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">latest</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | VERSION=latest bash"><div></div></button></div></figure></div>
<p>hgctl \u96C6\u6210\u4E86\u4E09\u79CD Higress \u5B89\u88C5\u6A21\u5F0F\uFF0C\u5E76\u7EDF\u4E00\u4E86\u5347\u7EA7/\u8FD0\u7EF4\u64CD\u4F5C\uFF1A</p>
<ol>
<li>\u672C\u5730 K8s \u73AF\u5883\uFF08\u4F8B\u5982kind/k3s\uFF09\u6A21\u5F0F</li>
<li>\u6B63\u5F0F K8s \u73AF\u5883\u6A21\u5F0F</li>
<li>\u4E0D\u4F9D\u8D56 K8s \u7684\u7EAF Docker \u73AF\u5883\u6A21\u5F0F</li>
</ol>
<p>\u76F4\u63A5\u6267\u884C <code dir="auto">hgctl install</code> \u547D\u4EE4\u5373\u53EF\u9009\u62E9\u4EFB\u610F\u6A21\u5F0F\u8FDB\u884C\u5B89\u88C5</p>
<p>\u5B89\u88C5\u914D\u7F6E\u6587\u4EF6\u5C06\u5B58\u81F3 <code dir="auto">~/.hgctl/profiles/install.yaml</code> \u76EE\u5F55\u4E0B\uFF0C\u67E5\u770B\u8BE5\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">charts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u5B89\u88C5\u6587\u4EF6\u7684 helm repo \u5730\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6267\u884C hgctl upgrade \u65F6\u5C06\u81EA\u52A8\u66F4\u65B0\u81F3\u6700\u65B0\u7248\u672C</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">latest</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">console</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5F00\u542F\u53EF\u89C2\u6D4B\u7EC4\u4EF6</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">o11YEnabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u63A7\u5236\u53F0\u5B9E\u4F8B\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">controller</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u63A7\u5236\u9762\u7EC4\u4EF6\u5B9E\u4F8B\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">gateway</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6570\u636E\u9762\u7EC4\u4EF6\u5B9E\u4F8B\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">global</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5F00\u542F Gateway API</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enableGatewayAPI</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5F00\u542F Istio API</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enableIstioAPI</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u8BBE\u7F6E\u76D1\u542C\u7684 ingress class</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingressClass</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B89\u88C5\u6A21\u5F0F</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">install</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-k8s</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B89\u88C5\u547D\u540D\u7A7A\u95F4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u914D\u7F6E\u4F20\u9012\u7ED9 helm \u7684 values \u53C2\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">values</span><span style="--0:#E1E4E8">: {}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">profile</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-k8s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  charts:\x7F    higress:\x7F      name: higress\x7F      # \u5B89\u88C5\u6587\u4EF6\u7684 helm repo \u5730\u5740\x7F      url: https://higress.io/helm-charts\x7F      # \u6267\u884C hgctl upgrade \u65F6\u5C06\u81EA\u52A8\u66F4\u65B0\u81F3\u6700\u65B0\u7248\u672C\x7F      version: latest\x7F  console:\x7F    # \u5F00\u542F\u53EF\u89C2\u6D4B\u7EC4\u4EF6\x7F    o11YEnabled: true\x7F    # \u63A7\u5236\u53F0\u5B9E\u4F8B\u6570\x7F    replicas: 1\x7F  controller:\x7F    # \u63A7\u5236\u9762\u7EC4\u4EF6\u5B9E\u4F8B\u6570\x7F    replicas: 1\x7F  gateway:\x7F    # \u6570\u636E\u9762\u7EC4\u4EF6\u5B9E\u4F8B\u6570\x7F    replicas: 1\x7F  global:\x7F    # \u5F00\u542F Gateway API\x7F    enableGatewayAPI: true\x7F    # \u5F00\u542F Istio API\x7F    enableIstioAPI: true\x7F    # \u8BBE\u7F6E\u76D1\u542C\u7684 ingress class\x7F    ingressClass: higress\x7F    # \u5B89\u88C5\u6A21\u5F0F\x7F    install: local-k8s\x7F    # \u5B89\u88C5\u547D\u540D\u7A7A\u95F4\x7F    namespace: higress-system\x7F  # \u914D\u7F6E\u4F20\u9012\u7ED9 helm \u7684 values \u53C2\u6570\x7F  values: {}\x7F  profile: local-k8s"><div></div></button></div></figure></div>
<p>\u4FEE\u6539\u4E0A\u9762\u6587\u4EF6\u7684\u5185\u5BB9\u540E\uFF0C\u6267\u884C<code dir="auto">hgctl upgarde</code>\u5373\u53EF\u5B9E\u73B0\u53C2\u6570\u53D8\u66F4\u751F\u6548\uFF0C\u5982\u679C\u53EA\u60F3\u4FEE\u6539\u53C2\u6570\uFF0C\u4E0D\u60F3\u89E6\u53D1\u7248\u672C\u5347\u7EA7\uFF0C\u53EF\u4EE5\u5C06 version \u53C2\u6570\u56FA\u5B9A\u4E3A\u5F53\u524D\u7248\u672C\u3002</p>
<h3 id="wasm-\u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305">WASM \u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305</h3>
<p>\u4E3A\u4E86\u6807\u51C6\u5316\u5E76\u7B80\u5316 WASM \u63D2\u4EF6\u7684\u5F00\u53D1/\u7F16\u8BD1/\u6D4B\u8BD5/\u53D1\u5E03\uFF0CHigress \u63D0\u4F9B\u4E86 <code dir="auto">hgctl plugin</code> \u8FD9\u4E00\u5B50\u547D\u4EE4\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4E3A\uFF1A</p>
<ol>
<li><code dir="auto">hgctl plugin init</code>: \u521D\u59CB\u5316 Golang WASM \u63D2\u4EF6\u9879\u76EE\uFF0C\u5305\u62EC\u4E09\u4E2A\u6587\u4EF6\uFF1B</li>
<li>\u7528\u6237\u7F16\u5199 WASM \u63D2\u4EF6\u903B\u8F91\uFF1B</li>
<li><code dir="auto">hgctl plugin build --output-type files</code>: \u6784\u5EFA WASM \u63D2\u4EF6\uFF0C\u5728\u672C\u5730\u8F93\u51FA\u6784\u5EFA\u4EA7\u7269\uFF1B</li>
<li><code dir="auto">hgctl plugin test: \u4F7F\u7528 docker compose</code> \u5728\u672C\u5730\u6D4B\u8BD5 WASM \u63D2\u4EF6\uFF0C\u5982\u9700\u4FEE\u6539\u63D2\u4EF6\u903B\u8F91\uFF0C\u5219\u8FD4\u56DE\u7B2C 2 \u6B65\uFF1B</li>
<li><code dir="auto">hgctl plugin build --output-type image</code>: \u6784\u5EFA WASM \u63D2\u4EF6\u4F5C\u4E3A OCI \u955C\u50CF\u4E0A\u4F20\u81F3\u955C\u50CF\u4ED3\u5E93\uFF1B</li>
<li><code dir="auto">hgctl plugin install</code>: \u5B89\u88C5 WASM \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u7684 yaml \u6587\u4EF6\u6216\u63D2\u4EF6\u9879\u76EE\u8FDB\u884C\u5B89\u88C5\u3002</li>
</ol>
<p>\u53E6\u5916\uFF0C\u82E5\u9700\u8981\u67E5\u770B\u5DF2\u5B89\u88C5\u7684\u63D2\u4EF6\uFF0C\u5219\u4F7F\u7528 <code dir="auto">hgctl plugin ls</code>\uFF1B\u82E5\u9700\u8981\u64CD\u4F5C\u63D2\u4EF6\u914D\u7F6E\uFF0C\u5219\u4F7F\u7528 <code dir="auto">hgctl plugin config</code></p>
<p>\u901A\u8FC7\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728\u6784\u5EFA WASM \u63D2\u4EF6\u7684\u540C\u65F6\uFF0C\u6839\u636E\u914D\u7F6E\u4EE3\u7801\u81EA\u52A8\u751F\u6210\u63D2\u4EF6\u7684\u914D\u7F6E\u8BF4\u660E\u6587\u6863\uFF0C\u4EE5\u53CA\u5305\u542B\u63D2\u4EF6\u914D\u7F6E\u7EA6\u675F\u7684\u5143\u4FE1\u606F\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u90FD\u5C06\u548C WASM \u6587\u4EF6\u4E00\u8D77\u653E\u5165 OCI \u955C\u50CF\u5236\u54C1\u4E2D\uFF0C\u901A\u8FC7\u955C\u50CF\u65B9\u5F0F\u8FDB\u884C\u7248\u672C\u7BA1\u7406\u548C\u5206\u53D1\u3002\u8FD9\u4E00\u673A\u5236\u662F\u540E\u7EED Higress \u5EFA\u8BBE WASM \u63D2\u4EF6\u5E02\u573A\u7684\u57FA\u77F3\u3002</p>
<h3 id="\u5176\u4ED6\u529F\u80FD">\u5176\u4ED6\u529F\u80FD</h3>
<p>\u53E6\u5916\u4ECB\u7ECD\u4E24\u4E2A\u5B9E\u7528\u7684\u5B50\u547D\u4EE4\uFF1A</p>
<ol>
<li><code dir="auto">hgctl dashboard</code>: \u7528\u4E8E\u547C\u51FA UI \u754C\u9762\uFF0C\u4F8B\u5982 Higress \u63A7\u5236\u53F0\uFF0C\u76F4\u63A5\u901A\u8FC7 <code dir="auto">hgctl dashboard console</code> \u5373\u53EF\u6253\u5F00</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Access</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UIs</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Usage:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> [flags]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> [command]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Aliases:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">dashboard,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dash,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">d</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Available</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Commands:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">console</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Console</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">controller</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Controller</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">debug</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">envoy</span><span style="--0:#E1E4E8">       </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">grafana</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Grafana</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">prometheus</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">Open</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Prometheus</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">web</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">UI</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ hgctl dashboard\x7F  Access to Higress web UIs\x7F\x7F  Usage:\x7F    hgctl dashboard [flags]\x7F    hgctl dashboard [command]\x7F\x7F  Aliases:\x7F    dashboard, dash, d\x7F\x7F  Available Commands:\x7F    console     Open Console web UI\x7F    controller  Open Controller debug web UI\x7F    envoy       Open Envoy admin web UI\x7F    grafana     Open Grafana web UI\x7F    prometheus  Open Prometheus web UI"><div></div></button></div></figure></div>
<ol start="2">
<li><code dir="auto">hgctl gateway-config</code>: \u7528\u4E8E\u67E5\u770B\u6570\u636E\u9762\u7684 envoy \u914D\u7F6E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u6B63\u786E\u4E0B\u53D1</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Retrieve</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">information</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">about</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Configuration.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Usage:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway-config</span><span style="--0:#E1E4E8"> [command]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Aliases:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">gateway-config,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gc</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">Available</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Commands:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">all</span><span style="--0:#E1E4E8">         </span><span style="--0:#9ECBFF">Retrieves</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">all</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">xDS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">bootstrap</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">Retrieves</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bootstrap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">xDS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">cluster</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Retrieves</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">xDS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">endpoint</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Retrieves</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">endpoint</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">xDS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">listener</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">Retrieves</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">listener</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">xDS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">route</span><span style="--0:#E1E4E8">       </span><span style="--0:#9ECBFF">Retrieves</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">route</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Envoy</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">xDS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">resources</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">from</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">specified</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ hgctl gateway-config\x7F  Retrieve information about Higress Gateway Configuration.\x7F\x7F  Usage:\x7F    hgctl gateway-config [command]\x7F\x7F  Aliases:\x7F    gateway-config, gc\x7F\x7F  Available Commands:\x7F    all         Retrieves all Envoy xDS resources from the specified Higress Gateway\x7F    bootstrap   Retrieves bootstrap Envoy xDS resources from the specified Higress Gateway\x7F    cluster     Retrieves cluster Envoy xDS resources from the specified Higress Gateway\x7F    endpoint    Retrieves endpoint Envoy xDS resources from the specified Higress Gateway\x7F    listener    Retrieves listener Envoy xDS resources from the specified Higress Gateway\x7F    route       Retrieves route Envoy xDS resources from the specified Higress Gateway"><div></div></button></div></figure></div>
<h2 id="\u65B0\u5F81\u7A0Bapi-gateway">\u65B0\u5F81\u7A0B\uFF1AAPI Gateway</h2>
<p>\u4E0A\u9762\u8BF4\u4E86 Gateway API\uFF0C\u63A5\u7740\u6211\u4EEC\u804A\u804A API Gateway \u{1F604}\uFF0CAPI Gateway \u6709\u4E24\u5C42\u5B9A\u4E49\uFF1A</p>
<ol>
<li>\u72ED\u4E49\u4E0A\uFF1A\u6EE1\u8DB3\u7EDF\u4E00\u63A5\u5165\uFF0C\u5C06\u8DEF\u7531\u8F6C\u53D1\u5230\u4E0D\u540C\u670D\u52A1\u7684\u8FD0\u7EF4\u9700\u6C42\uFF0C\u5373\u53EF\u79F0\u4E3A API Gateway\uFF1B\u8FD9\u91CC API \u7684\u5B9A\u4E49\u662F\u670D\u52A1\u7684\u8DEF\u7531</li>
<li>\u5E7F\u4E49\u4E0A\uFF1A\u5728\u5B9E\u73B0\u670D\u52A1\u8F6C\u53D1\u7684\u57FA\u7840\u4E0A\uFF0C\u9700\u8981\u8BC6\u522B\u5E26\u4E1A\u52A1\u8BED\u4E49\u7684\u63A5\u53E3\uFF0C\u5C06\u4E1A\u52A1\u80FD\u529B API \u5316\u7BA1\u7406\uFF0C\u7EDF\u4E00\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF1B\u8FD9\u91CC API \u7684\u5B9A\u4E49\u662F\u4E1A\u52A1\u529F\u80FD\u63A5\u53E3</li>
</ol>
<p>Higress \u5DF2\u7ECF\u5B9E\u73B0\u4E86\u72ED\u4E49\u4E0A\u7684 API Gateway \u80FD\u529B\uFF0C\u5E76\u4E14\u662F\u57FA\u4E8E Gateway/Ingress API \u8FD9\u4E9B\u901A\u7528\u8DEF\u7531\u6807\u51C6\u6765\u5B9E\u73B0\u7684\u3002\u800C\u4E0E\u670D\u52A1\u8DEF\u7531\u6807\u51C6\u4E0D\u540C\uFF0C\u4E1A\u52A1\u529F\u80FD\u63A5\u53E3\u7684\u6807\u51C6\u662F Swagger/OAS3/RPC IDL \u7B49\uFF0C\u505A\u4E3A API Gateway \u9700\u8981\u63D0\u4F9B\u4EE5\u4E0B\u5173\u952E\u80FD\u529B\uFF1A</p>
<ol>
<li>\u652F\u6301\u901A\u8FC7\u4E0A\u4F20 Swagger \u7B49\u63A5\u53E3\u5B9A\u4E49\u6587\u4EF6\u7684\u65B9\u5F0F\u5BFC\u5165 API</li>
<li>\u5BF9 API \u5B9E\u73B0\u7CBE\u7EC6\u5316\u7B56\u7565\u7BA1\u7406\uFF0C\u4F8B\u5982\u6839\u636E\u51FA\u5165\u53C2\u5B9A\u4E49\u5B9E\u73B0\u53C2\u6570\u6620\u5C04/\u8F6C\u6362</li>
<li>\u5B9E\u73B0\u4EE5 API \u65B9\u5F0F\u5F00\u653E\u80FD\u529B\u65F6\u7684\u8BA4\u8BC1/\u9274\u6743\uFF0C\u8C03\u7528\u91CF\u63A7\u5236/\u5BA1\u8BA1\u80FD\u529B</li>
</ol>
<p>Higress \u65B0\u7684\u5F00\u6E90\u5F81\u7A0B\u5C06\u5411\u5177\u5907\u4E1A\u52A1 API \u7BA1\u7406\u80FD\u529B\u7684 API Gateway \u5F62\u6001\u8FDB\u53D1\u3002\u5728\u5B9E\u73B0\u65B9\u5F0F\u4E0A\uFF0C\u6211\u4EEC\u5C06\u57FA\u4E8E WASM \u63D2\u4EF6\u53BB\u6269\u5C55\u8FD9\u4E00\u90E8\u5206\u80FD\u529B\uFF0C\u8FD9\u53EF\u4EE5\u964D\u4F4E\u6211\u4EEC\u5BF9\u4E0A\u6E38 Envoy \u793E\u533A\u7684\u4FB5\u5165\u6027\u6539\u9020\uFF0C\u540C\u65F6\u8BA9\u5BF9 API \u7684\u7CBE\u7EC6\u5316\u7B56\u7565\u7BA1\u7406\u5177\u5907\u81EA\u5B9A\u4E49\u6269\u5C55\u80FD\u529B\u3002
\u76EE\u524D\u793E\u533A\u5DF2\u7ECF\u6709\u4E00\u4E9B Proposal \uFF0C\u6B22\u8FCE\u4E86\u89E3\uFF1A</p>
<p><a href="https://github.com/alibaba/higress/issues/535" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/issues/535</a></p>
<p><a href="https://github.com/alibaba/higress/issues/601" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/issues/601</a></p>
<p>\u6B22\u8FCE\u6709\u66F4\u591A\u5C0F\u4F19\u4F34\u52A0\u5165\uFF0C\u548C\u6211\u4EEC\u4E00\u8D77\u8E0F\u4E0A\u65B0\u7684\u5F81\u7A0B\uFF0C\u6709\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u8054\u7CFB\u6211(\u5FAE\u4FE1\uFF1Anomadao)\uFF0C\u52A0\u5165 API Gateway \u7684 SIG\uFF08\u5174\u8DA3\u5C0F\u7EC4\uFF09\u3002</p>
<h2 id="\u793E\u533A\u81F4\u8C22">\u793E\u533A\u81F4\u8C22</h2>
<p>\u9996\u5148\u8981\u611F\u8C22 Envoy \u548C Istio \u793E\u533A\uFF0CHigress \u7AD9\u5728\u8FD9\u4E24\u4E2A\u8F6F\u4EF6\u7684\u80A9\u8180\u4E0A\u6F14\u8FDB\u80FD\u529B\uFF0C\u5F97\u4EE5\uFF1A</p>
<ol>
<li>\u901A\u8FC7 WASM \u673A\u5236\u6269\u5C55 Envoy \u6570\u636E\u9762\u80FD\u529B\uFF0C\u6301\u7EED\u4E0D\u65AD\u5730\u6269\u5927\u7F51\u5173\u63D2\u4EF6\u751F\u6001</li>
<li>\u901A\u8FC7\u4E13\u6CE8\u5728\u7F51\u5173\u9886\u57DF\uFF0C\u5728 Istio \u4F18\u79C0\u7684\u63A7\u5236\u9762\u57FA\u7840\u4E0A\uFF0C\u8FDB\u4E00\u6B65\u505A\u62BD\u8C61\u548C\u7B80\u5316\uFF0C\u964D\u4F4E\u4E0A\u624B\u548C\u8FD0\u7EF4\u95E8\u69DB</li>
</ol>
<p>\u8FD8\u8981\u611F\u8C22\u53C2\u4E0E Higress \u5F00\u6E90\u8D21\u732E\u7684\u5F00\u53D1\u8005\u4EEC\uFF0C\u8FD9\u91CC\u91CD\u70B9\u611F\u8C22\u4E0B\u4E3A 1.3 \u7248\u672C\u505A\u51FA\u6838\u5FC3\u8D21\u732E\u7684\u5F00\u53D1\u8005\uFF1A</p>
<h3 id="maintainer\u8463\u827A\u8343ch3cho">Maintainer\uFF1A\u8463\u827A\u8343(CH3CHO)</h3>
<p>\u4EBA\u5982\u5176\u540D\u201C\u827A\u5168\u201D\uFF0C\u5341\u516B\u822C\u6B66\u827A\u6837\u6837\u7CBE\u901A\uFF0C\u4E0D\u7BA1\u662F\u63A7\u5236\u53F0 TS \u524D\u7AEF\uFF0CJava \u540E\u53F0\uFF0C\u8FD8\u662F Higress \u7684 GO \u63A7\u5236\u9762\uFF0C\u4EE5\u53CA Standalone \u5B89\u88C5 Shell \u811A\u672C\u548C\u5404\u79CD CICD \u6D41\u7A0B\uFF0C\u901A\u901A\u624B\u5230\u64D2\u6765\u3002</p>
<p>\u5728 1.3 \u7248\u672C\u4E2D\u4E3B\u8981\u8D1F\u8D23\u4E86 Higress \u652F\u6301 Gateway API \u7684\u80FD\u529B\uFF0C\u4EE5\u53CA\u5B9E\u73B0\u4E86 Higress Admin Java SDK \u53EF\u4EE5\u63D0\u4F9B\u5916\u90E8\u96C6\u6210\u7528\u4E8E\u7BA1\u7406 Higress \u914D\u7F6E\uFF0C\u5E76\u6539\u8FDB\u4E86 Higress Console \u7684\u5B89\u5168\u6027\u548C\u6613\u7528\u6027\u3002</p>
<p>\u9664\u4E86\u5F00\u53D1\u8D21\u732E\u4E4B\u5916\uFF0C\u4ED6\u8FD8\u5BF9\u793E\u533A\u7528\u6237\u5145\u6EE1\u5584\u610F\u548C\u70ED\u60C5\uFF0C\u65E0\u8BBA\u662F\u5728 GitHub \u7684 Issues/Discussions\uFF0C\u6216\u662F\u793E\u533A\u4EA4\u6D41\u5FAE\u4FE1/\u9489\u9489\u7FA4\uFF0C\u968F\u5904\u53EF\u89C1\u4ED6\u5E2E\u52A9\u7528\u6237\u89E3\u51B3\u95EE\u9898\u7684\u8EAB\u5F71\u3002</p>
<h3 id="approver\u5434\u65B0\u519Bjun\u5218\u8BAD\u707Cxunzhuo">Approver\uFF1A\u5434\u65B0\u519B(Jun)\uFF0C\u5218\u8BAD\u707C(Xunzhuo)</h3>
<p>\u4E24\u4F4D\u90FD\u5728\u591A\u4E2A Higress \u7248\u672C\u4E3A\u793E\u533A\u505A\u51FA\u4E86\u8D21\u732E\uFF0CJun \u7684\u4E3B\u8981\u8D21\u732E\u6709\uFF1A\u5728\u591A\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\u53D1\u73B0\u652F\u6301\uFF0C\u5168\u5C40\u914D\u7F6E\u7BA1\u7406\u67B6\u6784\u62BD\u8C61\uFF1BXunzhuo \u7684\u4E3B\u8981\u8D21\u732E\u6709\uFF1AHigress E2E \u6D4B\u8BD5\u6D41\u7A0B\u7684\u642D\u5EFA\uFF0CGitHub CI \u6D41\u7A0B\u7684\u5EFA\u8BBE\uFF0Chgctl \u7684\u6574\u4F53\u67B6\u6784\u8BBE\u8BA1\u3002</p>
<p>\u5728 1.3 \u7248\u672C\u4E2D\u4E8C\u4F4D\u534F\u4F5C\u5B8C\u6210\u4E86 hgctl \u7684\u591A\u6837\u5316\u80FD\u529B\u5EFA\u8BBE\uFF0C\u5E2E\u52A9 Higress \u7684\u6613\u7528\u6027\u53C8\u4E0A\u5230\u4E86\u4E00\u4E2A\u65B0\u7684\u53F0\u9636\u3002</p>
<p>\u4E24\u4F4D\u540C\u5B66\u4F5C\u4E3A Approver \u79EF\u6781\u53C2\u4E0E\u793E\u533A\u8D21\u732E PR \u7684 Review\uFF0C\u76EE\u524D\u5206\u522B\u662F Higress Tools SIG \u548C Higress GatewayAPI SIG \u7684\u9886\u5BFC\u8005\u3002</p>
<h3 id="member\u97E6\u946Bweixinx\u5C01\u5B87\u817Efkbqf">Member\uFF1A\u97E6\u946B(WeixinX)\uFF0C\u5C01\u5B87\u817E(Fkbqf)</h3>
<p>\u4E24\u4F4D\u90FD\u662F\u901A\u8FC7\u4E2D\u79D1\u9662\u5F00\u6E90\u4E4B\u590F\uFF08OSPP 2023\uFF09\u9879\u76EE\u5F00\u59CB\u53C2\u4E0E Higress \u8D21\u732E\uFF0CWeixinX \u662F\u4E00\u540D\u7814\u4E8C\u7684\u5B66\u751F\uFF0CFkbqf \u662F\u4E00\u540D\u5927\u4E09\u7684\u5B66\u751F\u3002</p>
<p>\u5728 1.3 \u7248\u672C\u4E2D\uFF0CWeixinX \u5B9E\u73B0\u4E86 hgctl plugin \u5B50\u547D\u4EE4\u7684\u80FD\u529B\uFF0C\u540C\u65F6\u8D21\u732E\u4E86 Go \u5B9E\u73B0\u7684 Basic Auth \u63D2\u4EF6\uFF0C\u4EE5\u53CA\u5BF9\u6807 Spring Cloud Gateway \u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u80FD\u529B\u7684 Transformer \u63D2\u4EF6\uFF1BFkbqf \u5219\u5B9E\u73B0\u4E86\u66F4\u4E3A\u590D\u6742\u7684 OIDC \u63D2\u4EF6\uFF0C\u5177\u5907\u6BD4 Envoy \u81EA\u5E26 OAuth2 Filter \u66F4\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u5E76\u4E14\u5177\u5907\u826F\u597D\u7684\u6269\u5C55\u6027\u3002</p>
<p>\u4E24\u4F4D\u540C\u5B66\u9664\u4E86\u5F00\u53D1\u8D21\u732E\u4EE5\u5916\uFF0C\u7528\u8BFE\u4F59\u65F6\u95F4\u79EF\u6781\u53C2\u4E0E Higress \u793E\u533A\u5468\u4F1A\uFF0C\u4E00\u8D77\u63A2\u8BA8\u548C\u5B66\u4E60\u6280\u672F\uFF0C\u4E0D\u4EA6\u4E50\u4E4E\u3002\u80FD\u591F\u6210\u4E3A\u4F60\u4EEC\u4EBA\u751F\u5B66\u4E1A\u8FDB\u9636\u8DEF\u4E0A\u7684\u9636\u68AF\uFF0CHigress \u8363\u5E78\u4E4B\u81F3\u3002</p>
<p>Higress \u793E\u533A\u540E\u7EED\u6574\u4F53\u7684 Roadmap \u89C4\u5212\u5982\u4E0B\uFF1A</p>
<p><img src="https://github.com/johnlanni/higress-group.github.io/assets/6763318/f646d9ad-d2d0-4496-b164-2884851e9e0c" alt="image" referrerpolicy="no-referrer"></p>
<p>\u6B22\u8FCE\u66F4\u591A\u5C0F\u4F19\u4F34\u4E00\u8D77\u52A0\u5165\u6211\u4EEC\uFF1A</p>
<p><img src="https://github.com/johnlanni/higress-group.github.io/assets/6763318/d8e09712-0b3b-4c5a-b478-c84da139cf2f" alt="higress-comm" referrerpolicy="no-referrer"></p>`,n={title:"Higress \u5F00\u6E90\u4E00\u5468\u5E74\uFF1A\u65B0\u7248\u672C\uFF0C\u65B0\u6807\u51C6\uFF0C\u65B0\u5DE5\u5177\uFF0C\u65B0\u5F81\u7A0B",keywords:["higress","ingress","Gateway API"],description:"\u652F\u6301\u4E86 Gateway API \u6807\u51C6\uFF0C\u8FD8\u6709\u5168\u65B0\u7684\u8FD0\u7EF4/\u5F00\u53D1\u5DE5\u5177\uFF0C\u4EE5\u53CA\u6211\u4EEC\u65B0\u7684\u5F00\u6E90\u5F81\u7A0B",author:"\u6F84\u6F6D",date:"2023-11-04",category:"article"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/release-1.3.md",p=void 0,d=function(){return`
## \u5386\u7A0B\u56DE\u987E
![image](https://github.com/johnlanni/higress-group.github.io/assets/6763318/b5f3ee1b-d53a-4fbb-8d4a-82427ebdfe40)

Higress \u5F00\u6E90\u4E00\u5E74\u65F6\u95F4\uFF0C\u4E00\u5171\u53D1\u5E03\u4E86 18 \u4E2A release \u7248\u672C\uFF0C\u6536\u83B7\u4E86 40 \u591A\u4F4D\u793E\u533A\u8D21\u732E\u8005\u548C 1800+ star\uFF0C\u4E0A\u56FE\u662F\u8FD9\u4E00\u5E74\u8FC7\u6765\u8FBE\u6210\u7684\u4E00\u4E9B\u5173\u952E\u7684\u91CC\u7A0B\u7891\u3002

\u524D\u9762\u534A\u5E74\u901A\u8FC7\u96C6\u6210\u5F00\u6E90\u751F\u6001\uFF0C\u6253\u78E8\u5F00\u6E90\u7248\u672C\u7A33\u5B9A\u6027\uFF0C\u5E76\u5728\u53D1\u5E03 1.0 GA \u7248\u672C\u540E\uFF0C\u793E\u533A\u53C8\u9A6C\u4E0D\u505C\u8E44\u53D1\u5E03\u4E86 1.1 \u548C 1.2 \u4E24\u4E2A\u91CD\u8981\u7248\u672C\uFF0C\u5B9E\u73B0\u4E86\u975E K8s \u90E8\u7F72\uFF0CKnative \u9002\u914D\u7B49\u6838\u5FC3\u80FD\u529B\u3002

Higress 1.3 \u7248\u672C\u5DF2\u7ECF\u6B63\u5F0F\u53D1\u5E03\uFF0C\u9664\u4E86\u589E\u52A0\u7684\u65B0\u529F\u80FD\uFF0C\u5DF2\u6709\u80FD\u529B\u4E5F\u5728\u5927\u91CF\u793E\u533A\u7528\u6237\u53CD\u9988\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u65AD\u5B8C\u5584\u6539\u8FDB\uFF0C\u8FD9\u4E2A\u7248\u672C\u540C\u65F6\u6807\u5FD7\u7740 1.x \u8FDB\u5165\u53EF\u4EE5\u5927\u89C4\u6A21\u751F\u4EA7\u4F7F\u7528\u7684\u72B6\u6001\u3002

## \u65B0\u7248\u672C\uFF1A\u529F\u80FD\u901F\u89C8
  
\u81EA\u53D1\u5E03 1.2 \u7248\u672C\u8FC7\u53BB\u4E86\u4E00\u4E2A\u591A\u6708\u65F6\u95F4\uFF0C1.3 \u7248\u672C\u6B63\u5F0F\u53D1\u5E03\uFF0C\u5E26\u6765\u4E24\u4E2A\u5168\u65B0\u80FD\u529B\uFF1A

- \u65B0\u6807\u51C6\uFF1A\u652F\u6301\u6700\u65B0\u7248\u672C Gateway API \u6807\u51C6\uFF0C\u5E76\u4E14\u5177\u5907\u4ECE Ingress \u5E73\u6ED1\u6E10\u8FDB\u6F14\u8FDB\uFF0C\u4EE5\u53CA\u5BF9\u63A5\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\u7684\u80FD\u529B
- \u65B0\u5DE5\u5177\uFF1A\u6B63\u5F0F release \u4E86 hgctl (Higress Crontroller) \u8FD9\u4E2A "All in one" \u7684\u65B0\u5DE5\u5177\uFF0C\u4E0D\u4EC5\u53EF\u4EE5\u66FF\u4EE3 Helm \u5B9E\u73B0\u66F4\u7B80\u6613\u7684\u5B89\u88C5\uFF0C\u8FD8\u63D0\u4F9B\u4E86 WASM \u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305\uFF0C\u4EE5\u53CA\u7F51\u5173\u914D\u7F6E\u68C0\u67E5\u7B49\u4E30\u5BCC\u529F\u80FD
  
\u9664\u4E86\u8FD9\u4E24\u4E2A\u6838\u5FC3\u529F\u80FD\u5916\uFF0C\u8FD8\u6709\u4E00\u4E9B\u5B9E\u7528\u529F\u80FD\uFF1A

1. \u63D0\u4F9B\u4E86 Higress Admin Java SDK\uFF0C\u53EF\u4EE5\u7EDF\u4E00\u5BF9\u63A5 K8s \u548C\u975E K8s \u73AF\u5883\uFF0C\u7BA1\u7406\u57DF\u540D/\u8DEF\u7531\u7B49\u914D\u7F6E
2. \u63D0\u4F9B\u4E86 OIDC \u63D2\u4EF6\uFF0C\u652F\u6301\u5BF9\u63A5 Keycloak/Okta \u7B49\u7B2C\u4E09\u65B9\u8EAB\u4EFD\u8BA4\u8BC1\u7CFB\u7EDF
3. Higress Console \u7684\u6613\u7528\u6027\u548C\u5B89\u5168\u6027\u63D0\u5347\uFF0C\u4E0D\u518D\u901A\u8FC7\u8DEF\u7531\u66B4\u9732\uFF0C\u652F\u6301\u754C\u9762\u521D\u59CB\u5316/\u4FEE\u6539\u5BC6\u7801
   
\u4E0E\u6B64\u540C\u65F6\uFF0CHigress \u5F00\u6E90\u793E\u533A\u5DF2\u7ECF\u5F00\u59CB\u51C6\u5907\u8E0F\u4E0A\u4E00\u6BB5\u5168\u65B0\u7684\u5F00\u6E90\u5F81\u7A0B...

## \u65B0\u6807\u51C6\uFF1A\u652F\u6301\u6700\u65B0\u7248 Gateway API

Gateway API \u5728 11 \u6708 1 \u65E5\u6B63\u5F0F\u53D1\u5E03\u4E86 1.0.0 \u7248\u672C\uFF0C\u5176\u4E2D GatewayClass, Gateway, HTTPRoute \u8FD9\u4E09\u4E2A API\u6B63\u5F0F\u5BA3\u5E03 GA\uFF0C\u53D1\u5E03\u4E86 v1 \u7248\u672C\uFF1Agateway.networking.k8s.io/v1\u3002

\u76EE\u524D Higress \u5DF2\u7ECF\u53EF\u4EE5\u652F\u6301\u8FD9\u4E9B\u6700\u65B0\u7248\u672C\u7684 API \u914D\u7F6E\uFF0C\u53EA\u9700\u5728\u5B89\u88C5/\u5347\u7EA7 Higress \u65F6\u914D\u7F6E\u5F00\u542F Gateway API\uFF1A

- \u4F7F\u7528 Helm \uFF1A\u901A\u8FC7\u53C2\u6570 \`--set global.enableGatewayAPI=true\`
- \u4F7F\u7528 Hgctl \uFF1A\u901A\u8FC7\u547D\u4EE4\u884C\u53C2\u6570\u6216\u8005 install.yaml \u4E2D\u914D\u7F6E \`global.enableGatewayAPI=true\`

\u9996\u5148\u521B\u5EFA GatewayClass \u8D44\u6E90\uFF1A

\`\`\` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: GatewayClass
  metadata:
    name: higress-gateway
  spec:
    controllerName: "higress.io/gateway-controller"
\`\`\`

\u63A5\u7740\u5728\u5B89\u88C5 Higress \u7684\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u521B\u5EFA Gateway \u8D44\u6E90\uFF0C\u901A\u8FC7 gatewayClassName \u5173\u8054\u4E0A\u9762\u521B\u5EFA\u7684 GatewayClass \u8D44\u6E90\uFF0C\u6307\u5B9A\u7531 Higress \u6765\u7BA1\u7406\u6B64 Gateway \u914D\u7F6E\uFF0C\u4E0B\u9762\u4E3A\u57DF\u540D\u540C\u65F6\u914D\u7F6E\u4E86 HTTP \u548C HTTPS \u5165\u53E3\uFF0C\u5E76\u4E3A HTTPS \u5165\u53E3\u914D\u7F6E\u4E86\u8BC1\u4E66\uFF1A

\`\`\` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: Gateway
  metadata:
    name: higress-gateway
    namespace: higress-system
  spec:
    gatewayClassName: higress-gateway
    listeners:
    - name: foobar
      hostname: "*.foobar.com"
      port: 80
      protocol: HTTP
      allowedRoutes:
        namespaces:
          from: All
    - name: foobar-https
      hostname: "*.foobar.com"
      port: 443
      protocol: HTTPS
    	allowedRoutes:
        namespaces:
          from: All
      tls:
        certificateRefs:
        - kind: Secret
          name: wildcard-foobar-com
        mode: Terminate        
\`\`\`

\u56E0\u4E3A\u4E0A\u9762 Gateway \u901A\u8FC7 allowedRoutes \u914D\u7F6E\u4E86\u5141\u8BB8\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684\u8DEF\u7531\u6765\u5173\u8054\uFF0C\u6240\u4EE5\u8FD9\u91CC\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B\u521B\u5EFA HTTPRoute\uFF0C\u5173\u8054\u4E0A\u9762\u521B\u5EFA\u7684 Gateway\uFF0C\u5373\u53EF\u5B9A\u4E49\u57DF\u540D\u4E0B\u7684\u5177\u4F53\u8DEF\u7531\uFF1A

\`\`\` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: HTTPRoute
  metadata:
    name: foobar
    namespace: default
  spec:
    parentRefs:
    - name: higress-gateway
      namespace: higress-system
    hostnames: ["www.foobar.com"]
    rules:
    - matches:
      - path:
          type: PathPrefix
          value: /foo
      backendRefs:
      - name: foo-service
        port: 5678
\`\`\`

\u4EE5\u4E0A\u5C31\u662F Gateway API \u7684\u4E00\u4E2A\u7B80\u5355\u7528\u6CD5\u793A\u4F8B\uFF0CGateway API \u8FD8\u6709\u5F88\u591A\u529F\u80FD\u548C\u73A9\u6CD5\uFF0C\u540E\u9762 Higress \u516C\u4F17\u53F7/\u535A\u5BA2\u4F1A\u51FA\u4E00\u4E2A\u7CFB\u5217\u8FDB\u884C\u7CFB\u7EDF\u5206\u4EAB\u548C\u4ECB\u7ECD\u3002

\u6B22\u8FCE\u7ED3\u5408[\u5B98\u65B9 API \u6587\u6863](https://gateway-api.sigs.k8s.io/reference/spec/)\uFF0C\u5E76\u4F7F\u7528 hgctl \uFF08\u83B7\u53D6\u65B9\u5F0F\u89C1\u4E0B\u6587\uFF09\u5728\u81EA\u5DF1\u7535\u8111\u4E0A\u5B89\u88C5\u4E00\u4E2A local-k8s \u6A21\u5F0F\u7684 Higress\uFF0C\u6765\u5F00\u542F\u5BF9\u8FD9\u4E00\u65B0\u6807\u51C6\u7684\u63A2\u7D22\uFF1A
\`\`\` bash
  # \u4E00\u952E\u5B89\u88C5, \u4EA4\u4E92\u5F0F\u547D\u4EE4\u9009\u62E9\u7B2C\u4E00\u79CD\u5B89\u88C5\u6A21\u5F0F local-k8s\uFF0C\u5C06\u9ED8\u8BA4\u5B89\u88C5 Gateway API CRD
  hgctl install
\`\`\`

### \u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B

\u5728 Ingress API \u6807\u51C6\u4E0B\uFF0CHigress \u5BF9\u63A5\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B\u662F\u72EC\u6811\u4E00\u5E1C\u7684\uFF0C\u5728 Gateway API \u6807\u51C6\u4E0B\uFF0C Higress \u4ECD\u5C31\u4FDD\u6301\u4E86\u8FD9\u4E00\u80FD\u529B\u4F18\u52BF\uFF1A

\u9996\u5148\u901A\u8FC7 McpBridge \u8D44\u6E90\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF1A

\`\`\` yaml
  apiVersion: networking.higress.io/v1
  kind: McpBridge
  metadata:
    name: default
    namespace: higress-system
  spec:
    registries:
    - domain: 127.0.0.1
      nacosGroups:
      - DEFAULT_GROUP
      name: my-local-nacos
      port: 8848
      type: nacos2
    - domain: 127.0.0.1
      name: my-local-zk
      port: 2181
      type: zookeeper      
    - domain: 127.0.0.1
      name: my-local-eureka
      port: 8761
      type: eureka
    - domain: 127.0.0.1
      consulDatacenter: dc1      
      name: my-local-consul
      port: 8500
      type: consul
\`\`\`

\u521B\u5EFA\u4E00\u4E2A HTTPRoute \u8D44\u6E90\uFF0C\u53EF\u4EE5\u540C\u65F6\u5BF9\u63A5 K8s \u670D\u52A1\uFF0C\u548C\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\uFF0C\u5E76\u5B9E\u73B0\u7070\u5EA6\u8DEF\u7531\u80FD\u529B\uFF1A

\`\`\` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: HTTPRoute
  metadata:
    name: http
    namespace: default
  spec:
    parentRefs:
    - name: higress-gateway
      namespace: higress-system
    rules:
    - matches:
      - path:
          type: PathPrefix
          value: /
      backendRefs:
      - name: service-provider.DEFAULT-GROUP.public.nacos
        group: networking.higress.io
        port: 8080
        weight: 90
      - name: foo-service
        port: 5678
        weight: 10
\`\`\`

\u548C K8s \u670D\u52A1\u4E0D\u540C\u7684\u662F\uFF0C\u8FD9\u91CC group \u4E3A \`networking.higress.io\` \u7684\u670D\u52A1\u5E76\u4E0D\u9700\u8981\u63D0\u524D\u521B\u5EFA CRD \u8D44\u6E90\uFF0C\u8FD9\u66F4\u7B26\u5408\u4F20\u7EDF\u5FAE\u670D\u52A1\u7528\u6237\u7684\u4E60\u60EF\uFF0C\u5373\u670D\u52A1\u6A21\u578B\u4E0D\u9700\u8981\u63D0\u524D\u521B\u5EFA\uFF0C\u662F\u901A\u8FC7\u670D\u52A1\u8282\u70B9\u6CE8\u518C\u81EA\u52A8\u751F\u6210\u3002

### Ingress API \u548C Gateway API \u4E4B\u95F4\u5982\u4F55\u9009\u62E9

\u6709\u4E86 Gateway API\uFF0C\u662F\u5426\u5E94\u8BE5\u7ACB\u5373\u629B\u5F03 Ingress API\uFF1F

\u53EA\u6709\u6700\u5408\u9002\u7684\uFF0C\u6CA1\u6709\u6700\u597D\u7684\u3002Gateway API \u867D\u7136\u4E3A\u66F4\u591A\u7F51\u5173\u80FD\u529B\u505A\u4E86\u6807\u51C6\u5316\uFF0C\u4F46 CRD \u7684\u79CD\u7C7B\u548C\u590D\u6742\u5EA6\u4E5F\u589E\u52A0\u4E86\uFF0C\u76F8\u6BD4\u4E4B\u4E0B\u5BF9\u4E8E\u5927\u90E8\u5206\u7B80\u5355\u7528\u4F8B\u573A\u666F\uFF0CIngress API \u66F4\u52A0\u7B80\u5355\u6613\u7528\u3002

\u5BF9\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF0C\u91C7\u7528 Gateway API \u66FF\u4EE3 Ingress API \u4F1A\u5E26\u6765\u5F88\u5927\u5E2E\u52A9\uFF1A

- \u5927\u578B\u56E2\u961F\u5212\u5206\u4E86 SRE \u89D2\u8272\u548C\u4E1A\u52A1\u7814\u53D1\u89D2\u8272\uFF0C\u7531 SRE \u901A\u8FC7 Gateway \u8D44\u6E90\u7EDF\u4E00\u7BA1\u7406\u7AD9\u70B9\u57DF\u540D\u548C\u8BC1\u4E66\uFF0C\u7531\u4E1A\u52A1\u7814\u53D1\u901A\u8FC7 HTTPRoute \u8D44\u6E90\u7BA1\u7406\u4E1A\u52A1\u8DEF\u7531\uFF0C\u5B9E\u73B0\u804C\u8D23\u5212\u5206\uFF0C\u6743\u9650\u6536\u655B
- \u521B\u5EFA\u7684\u8DEF\u7531\u548C Service \u6709\u4E0D\u5728\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u501F\u52A9 ReferenceGrant \u8D44\u6E90\u5B9E\u73B0
- \u6709\u5927\u91CF\u8BC1\u4E66\u9700\u8981\u96C6\u4E2D\u5F0F\u7BA1\u7406\uFF0C\u4E0D\u5E0C\u671B\u5C06\u8BC1\u4E66 Secret \u540C\u6B65\u5230 Ingress \u6240\u5728\u547D\u540D\u7A7A\u95F4\uFF0C\u5E26\u6765\u5B89\u5168\u98CE\u9669

Gateway API \u7684\u53E6\u4E00\u4E2A\u597D\u5904\u662F\u5BF9\u4E8E\u66F4\u591A\u529F\u80FD\u7684\u6807\u51C6\u5316\u5B9A\u4E49\uFF0C\u6211\u4EEC\u5EFA\u8BAE\u9047\u5230\u5B9E\u9645\u9700\u8981\u518D\u8F6C\u6362\u5230\u8FD9\u4E2A\u65B0\u7684\u6807\u51C6\uFF0C\u800C\u4E0D\u5FC5\u76F2\u76EE\u8DDF\u968F\u3002

Higress \u652F\u6301 Gateway API \u548C Ingress API \u6DF7\u5408\u4F7F\u7528\uFF0CGateway API \u4E0B\u7684\u57DF\u540D\u8DEF\u7531\u5C06\u6BD4 Ingress API \u4F18\u5148\u5339\u914D\uFF0C\u548C Ingress \u76F8\u540C\u8D44\u6E90\u540D\u79F0\u7684 HTTPRoute \u8FD8\u4F1A\u7EE7\u627F WASM \u63D2\u4EF6\u914D\u7F6E\uFF0C\u8FD9\u6837\u7528\u6237\u53EF\u4EE5\u6309\u9700\u91C7\u7528 Gateway API\uFF0C\u5E73\u6ED1\u5730\u5B8C\u6210\u4ECE Ingress API \u5411 Gateway API \u7684\u6F14\u8FDB\uFF0C\u65E0\u9700\u7126\u8651 API \u6807\u51C6\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u4E1A\u52A1\u635F\u5931\u3002

## \u65B0\u5DE5\u5177\uFF1AAll in one \u7684 hgctl

### \u66FF\u4EE3 Helm \u7528\u4E8E\u5B89\u88C5/\u5347\u7EA7

\u5728 K8s \u4E0B\u7528 Helm \u5B89\u88C5/\u5347\u7EA7\u7EC4\u4EF6\u5F88\u65B9\u4FBF\uFF0C\u4F46\u5728 Higress \u7684\u573A\u666F\u4E0B\u4ECD\u7136\u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF1A

1. \u65E0\u6CD5\u652F\u6301\u975E K8s \u573A\u666F\u4E0B\u7684\u5B89\u88C5/\u5347\u7EA7
2. Higress \u6709\u5F88\u591A\u5B89\u88C5\u53C2\u6570\uFF0C\u8FDB\u884C\u5347\u7EA7\u7B49\u64CD\u4F5C\u65F6\u4E0D\u597D\u7EF4\u62A4\uFF0C\u4F7F\u7528\`reuse-values\` \u6709\u4E00\u4E9B\u526F\u4F5C\u7528\uFF0C\u4E14\u5BB9\u6613\u8BEF\u64CD\u4F5C
3. \u65E0\u6CD5\u7BA1\u7406 CRD \u8DDF\u968F\u7248\u672C\u66F4\u65B0\uFF0C\u9700\u8981\u624B\u52A8\u66F4\u65B0

Higress \u501F\u9274\u4E86 istio \u7684 istioctl\uFF0C\u63D0\u4F9B\u4E86 hgctl \u8FD9\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\u89E3\u51B3\u4E86\u4E0A\u8FF0\u95EE\u9898\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\u5B89\u88C5 hgctl

\`\`\` bash
  # \u4E0B\u8F7D\u6700\u65B0\u7248 Hgctl\uFF1A
  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | VERSION=latest bash
\`\`\`

hgctl \u96C6\u6210\u4E86\u4E09\u79CD Higress \u5B89\u88C5\u6A21\u5F0F\uFF0C\u5E76\u7EDF\u4E00\u4E86\u5347\u7EA7/\u8FD0\u7EF4\u64CD\u4F5C\uFF1A

1. \u672C\u5730 K8s \u73AF\u5883\uFF08\u4F8B\u5982kind/k3s\uFF09\u6A21\u5F0F
2. \u6B63\u5F0F K8s \u73AF\u5883\u6A21\u5F0F
3. \u4E0D\u4F9D\u8D56 K8s \u7684\u7EAF Docker \u73AF\u5883\u6A21\u5F0F

\u76F4\u63A5\u6267\u884C \`hgctl install\` \u547D\u4EE4\u5373\u53EF\u9009\u62E9\u4EFB\u610F\u6A21\u5F0F\u8FDB\u884C\u5B89\u88C5

\u5B89\u88C5\u914D\u7F6E\u6587\u4EF6\u5C06\u5B58\u81F3 \`~/.hgctl/profiles/install.yaml\` \u76EE\u5F55\u4E0B\uFF0C\u67E5\u770B\u8BE5\u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\` yaml
  charts:
    higress:
      name: higress
      # \u5B89\u88C5\u6587\u4EF6\u7684 helm repo \u5730\u5740
      url: https://higress.io/helm-charts
      # \u6267\u884C hgctl upgrade \u65F6\u5C06\u81EA\u52A8\u66F4\u65B0\u81F3\u6700\u65B0\u7248\u672C
      version: latest
  console:
    # \u5F00\u542F\u53EF\u89C2\u6D4B\u7EC4\u4EF6
    o11YEnabled: true
    # \u63A7\u5236\u53F0\u5B9E\u4F8B\u6570
    replicas: 1
  controller:
    # \u63A7\u5236\u9762\u7EC4\u4EF6\u5B9E\u4F8B\u6570
    replicas: 1
  gateway:
    # \u6570\u636E\u9762\u7EC4\u4EF6\u5B9E\u4F8B\u6570
    replicas: 1
  global:
    # \u5F00\u542F Gateway API
    enableGatewayAPI: true
    # \u5F00\u542F Istio API
    enableIstioAPI: true
    # \u8BBE\u7F6E\u76D1\u542C\u7684 ingress class
    ingressClass: higress
    # \u5B89\u88C5\u6A21\u5F0F
    install: local-k8s
    # \u5B89\u88C5\u547D\u540D\u7A7A\u95F4
    namespace: higress-system
  # \u914D\u7F6E\u4F20\u9012\u7ED9 helm \u7684 values \u53C2\u6570 
  values: {}
  profile: local-k8s
\`\`\`

\u4FEE\u6539\u4E0A\u9762\u6587\u4EF6\u7684\u5185\u5BB9\u540E\uFF0C\u6267\u884C\`hgctl upgarde\`\u5373\u53EF\u5B9E\u73B0\u53C2\u6570\u53D8\u66F4\u751F\u6548\uFF0C\u5982\u679C\u53EA\u60F3\u4FEE\u6539\u53C2\u6570\uFF0C\u4E0D\u60F3\u89E6\u53D1\u7248\u672C\u5347\u7EA7\uFF0C\u53EF\u4EE5\u5C06 version \u53C2\u6570\u56FA\u5B9A\u4E3A\u5F53\u524D\u7248\u672C\u3002

### WASM \u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305

\u4E3A\u4E86\u6807\u51C6\u5316\u5E76\u7B80\u5316 WASM \u63D2\u4EF6\u7684\u5F00\u53D1/\u7F16\u8BD1/\u6D4B\u8BD5/\u53D1\u5E03\uFF0CHigress \u63D0\u4F9B\u4E86 \`hgctl plugin\` \u8FD9\u4E00\u5B50\u547D\u4EE4\uFF0C\u4F7F\u7528\u65B9\u5F0F\u4E3A\uFF1A

1. \`hgctl plugin init\`: \u521D\u59CB\u5316 Golang WASM \u63D2\u4EF6\u9879\u76EE\uFF0C\u5305\u62EC\u4E09\u4E2A\u6587\u4EF6\uFF1B
2. \u7528\u6237\u7F16\u5199 WASM \u63D2\u4EF6\u903B\u8F91\uFF1B
3. \`hgctl plugin build --output-type files\`: \u6784\u5EFA WASM \u63D2\u4EF6\uFF0C\u5728\u672C\u5730\u8F93\u51FA\u6784\u5EFA\u4EA7\u7269\uFF1B
4. \`hgctl plugin test: \u4F7F\u7528 docker compose\` \u5728\u672C\u5730\u6D4B\u8BD5 WASM \u63D2\u4EF6\uFF0C\u5982\u9700\u4FEE\u6539\u63D2\u4EF6\u903B\u8F91\uFF0C\u5219\u8FD4\u56DE\u7B2C 2 \u6B65\uFF1B
5. \`hgctl plugin build --output-type image\`: \u6784\u5EFA WASM \u63D2\u4EF6\u4F5C\u4E3A OCI \u955C\u50CF\u4E0A\u4F20\u81F3\u955C\u50CF\u4ED3\u5E93\uFF1B
6. \`hgctl plugin install\`: \u5B89\u88C5 WASM \u63D2\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u672C\u5730\u7684 yaml \u6587\u4EF6\u6216\u63D2\u4EF6\u9879\u76EE\u8FDB\u884C\u5B89\u88C5\u3002

\u53E6\u5916\uFF0C\u82E5\u9700\u8981\u67E5\u770B\u5DF2\u5B89\u88C5\u7684\u63D2\u4EF6\uFF0C\u5219\u4F7F\u7528 \`hgctl plugin ls\`\uFF1B\u82E5\u9700\u8981\u64CD\u4F5C\u63D2\u4EF6\u914D\u7F6E\uFF0C\u5219\u4F7F\u7528 \`hgctl plugin config\`

\u901A\u8FC7\u8FD9\u4E2A\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728\u6784\u5EFA WASM \u63D2\u4EF6\u7684\u540C\u65F6\uFF0C\u6839\u636E\u914D\u7F6E\u4EE3\u7801\u81EA\u52A8\u751F\u6210\u63D2\u4EF6\u7684\u914D\u7F6E\u8BF4\u660E\u6587\u6863\uFF0C\u4EE5\u53CA\u5305\u542B\u63D2\u4EF6\u914D\u7F6E\u7EA6\u675F\u7684\u5143\u4FE1\u606F\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u90FD\u5C06\u548C WASM \u6587\u4EF6\u4E00\u8D77\u653E\u5165 OCI \u955C\u50CF\u5236\u54C1\u4E2D\uFF0C\u901A\u8FC7\u955C\u50CF\u65B9\u5F0F\u8FDB\u884C\u7248\u672C\u7BA1\u7406\u548C\u5206\u53D1\u3002\u8FD9\u4E00\u673A\u5236\u662F\u540E\u7EED Higress \u5EFA\u8BBE WASM \u63D2\u4EF6\u5E02\u573A\u7684\u57FA\u77F3\u3002

### \u5176\u4ED6\u529F\u80FD

\u53E6\u5916\u4ECB\u7ECD\u4E24\u4E2A\u5B9E\u7528\u7684\u5B50\u547D\u4EE4\uFF1A

1. \`hgctl dashboard\`: \u7528\u4E8E\u547C\u51FA UI \u754C\u9762\uFF0C\u4F8B\u5982 Higress \u63A7\u5236\u53F0\uFF0C\u76F4\u63A5\u901A\u8FC7 \`hgctl dashboard console\` \u5373\u53EF\u6253\u5F00

\`\`\` bash
  $ hgctl dashboard
  Access to Higress web UIs
  
  Usage:
    hgctl dashboard [flags]
    hgctl dashboard [command]
  
  Aliases:
    dashboard, dash, d
  
  Available Commands:
    console     Open Console web UI
    controller  Open Controller debug web UI
    envoy       Open Envoy admin web UI
    grafana     Open Grafana web UI
    prometheus  Open Prometheus web UI
\`\`\`

2. \`hgctl gateway-config\`: \u7528\u4E8E\u67E5\u770B\u6570\u636E\u9762\u7684 envoy \u914D\u7F6E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u9A8C\u8BC1\u914D\u7F6E\u662F\u5426\u6B63\u786E\u4E0B\u53D1

\`\`\` bash
  $ hgctl gateway-config
  Retrieve information about Higress Gateway Configuration.
  
  Usage:
    hgctl gateway-config [command]
  
  Aliases:
    gateway-config, gc
  
  Available Commands:
    all         Retrieves all Envoy xDS resources from the specified Higress Gateway
    bootstrap   Retrieves bootstrap Envoy xDS resources from the specified Higress Gateway
    cluster     Retrieves cluster Envoy xDS resources from the specified Higress Gateway
    endpoint    Retrieves endpoint Envoy xDS resources from the specified Higress Gateway
    listener    Retrieves listener Envoy xDS resources from the specified Higress Gateway
    route       Retrieves route Envoy xDS resources from the specified Higress Gateway
\`\`\`

## \u65B0\u5F81\u7A0B\uFF1AAPI Gateway

\u4E0A\u9762\u8BF4\u4E86 Gateway API\uFF0C\u63A5\u7740\u6211\u4EEC\u804A\u804A API Gateway \u{1F604}\uFF0CAPI Gateway \u6709\u4E24\u5C42\u5B9A\u4E49\uFF1A

1. \u72ED\u4E49\u4E0A\uFF1A\u6EE1\u8DB3\u7EDF\u4E00\u63A5\u5165\uFF0C\u5C06\u8DEF\u7531\u8F6C\u53D1\u5230\u4E0D\u540C\u670D\u52A1\u7684\u8FD0\u7EF4\u9700\u6C42\uFF0C\u5373\u53EF\u79F0\u4E3A API Gateway\uFF1B\u8FD9\u91CC API \u7684\u5B9A\u4E49\u662F\u670D\u52A1\u7684\u8DEF\u7531
2. \u5E7F\u4E49\u4E0A\uFF1A\u5728\u5B9E\u73B0\u670D\u52A1\u8F6C\u53D1\u7684\u57FA\u7840\u4E0A\uFF0C\u9700\u8981\u8BC6\u522B\u5E26\u4E1A\u52A1\u8BED\u4E49\u7684\u63A5\u53E3\uFF0C\u5C06\u4E1A\u52A1\u80FD\u529B API \u5316\u7BA1\u7406\uFF0C\u7EDF\u4E00\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF1B\u8FD9\u91CC API \u7684\u5B9A\u4E49\u662F\u4E1A\u52A1\u529F\u80FD\u63A5\u53E3

Higress \u5DF2\u7ECF\u5B9E\u73B0\u4E86\u72ED\u4E49\u4E0A\u7684 API Gateway \u80FD\u529B\uFF0C\u5E76\u4E14\u662F\u57FA\u4E8E Gateway/Ingress API \u8FD9\u4E9B\u901A\u7528\u8DEF\u7531\u6807\u51C6\u6765\u5B9E\u73B0\u7684\u3002\u800C\u4E0E\u670D\u52A1\u8DEF\u7531\u6807\u51C6\u4E0D\u540C\uFF0C\u4E1A\u52A1\u529F\u80FD\u63A5\u53E3\u7684\u6807\u51C6\u662F Swagger/OAS3/RPC IDL \u7B49\uFF0C\u505A\u4E3A API Gateway \u9700\u8981\u63D0\u4F9B\u4EE5\u4E0B\u5173\u952E\u80FD\u529B\uFF1A

1. \u652F\u6301\u901A\u8FC7\u4E0A\u4F20 Swagger \u7B49\u63A5\u53E3\u5B9A\u4E49\u6587\u4EF6\u7684\u65B9\u5F0F\u5BFC\u5165 API
2. \u5BF9 API \u5B9E\u73B0\u7CBE\u7EC6\u5316\u7B56\u7565\u7BA1\u7406\uFF0C\u4F8B\u5982\u6839\u636E\u51FA\u5165\u53C2\u5B9A\u4E49\u5B9E\u73B0\u53C2\u6570\u6620\u5C04/\u8F6C\u6362
3. \u5B9E\u73B0\u4EE5 API \u65B9\u5F0F\u5F00\u653E\u80FD\u529B\u65F6\u7684\u8BA4\u8BC1/\u9274\u6743\uFF0C\u8C03\u7528\u91CF\u63A7\u5236/\u5BA1\u8BA1\u80FD\u529B

Higress \u65B0\u7684\u5F00\u6E90\u5F81\u7A0B\u5C06\u5411\u5177\u5907\u4E1A\u52A1 API \u7BA1\u7406\u80FD\u529B\u7684 API Gateway \u5F62\u6001\u8FDB\u53D1\u3002\u5728\u5B9E\u73B0\u65B9\u5F0F\u4E0A\uFF0C\u6211\u4EEC\u5C06\u57FA\u4E8E WASM \u63D2\u4EF6\u53BB\u6269\u5C55\u8FD9\u4E00\u90E8\u5206\u80FD\u529B\uFF0C\u8FD9\u53EF\u4EE5\u964D\u4F4E\u6211\u4EEC\u5BF9\u4E0A\u6E38 Envoy \u793E\u533A\u7684\u4FB5\u5165\u6027\u6539\u9020\uFF0C\u540C\u65F6\u8BA9\u5BF9 API \u7684\u7CBE\u7EC6\u5316\u7B56\u7565\u7BA1\u7406\u5177\u5907\u81EA\u5B9A\u4E49\u6269\u5C55\u80FD\u529B\u3002
\u76EE\u524D\u793E\u533A\u5DF2\u7ECF\u6709\u4E00\u4E9B Proposal \uFF0C\u6B22\u8FCE\u4E86\u89E3\uFF1A

https://github.com/alibaba/higress/issues/535

https://github.com/alibaba/higress/issues/601

\u6B22\u8FCE\u6709\u66F4\u591A\u5C0F\u4F19\u4F34\u52A0\u5165\uFF0C\u548C\u6211\u4EEC\u4E00\u8D77\u8E0F\u4E0A\u65B0\u7684\u5F81\u7A0B\uFF0C\u6709\u5174\u8DA3\u7684\u5C0F\u4F19\u4F34\u53EF\u4EE5\u8054\u7CFB\u6211(\u5FAE\u4FE1\uFF1Anomadao)\uFF0C\u52A0\u5165 API Gateway \u7684 SIG\uFF08\u5174\u8DA3\u5C0F\u7EC4\uFF09\u3002

## \u793E\u533A\u81F4\u8C22

\u9996\u5148\u8981\u611F\u8C22 Envoy \u548C Istio \u793E\u533A\uFF0CHigress \u7AD9\u5728\u8FD9\u4E24\u4E2A\u8F6F\u4EF6\u7684\u80A9\u8180\u4E0A\u6F14\u8FDB\u80FD\u529B\uFF0C\u5F97\u4EE5\uFF1A

1. \u901A\u8FC7 WASM \u673A\u5236\u6269\u5C55 Envoy \u6570\u636E\u9762\u80FD\u529B\uFF0C\u6301\u7EED\u4E0D\u65AD\u5730\u6269\u5927\u7F51\u5173\u63D2\u4EF6\u751F\u6001
2. \u901A\u8FC7\u4E13\u6CE8\u5728\u7F51\u5173\u9886\u57DF\uFF0C\u5728 Istio \u4F18\u79C0\u7684\u63A7\u5236\u9762\u57FA\u7840\u4E0A\uFF0C\u8FDB\u4E00\u6B65\u505A\u62BD\u8C61\u548C\u7B80\u5316\uFF0C\u964D\u4F4E\u4E0A\u624B\u548C\u8FD0\u7EF4\u95E8\u69DB

\u8FD8\u8981\u611F\u8C22\u53C2\u4E0E Higress \u5F00\u6E90\u8D21\u732E\u7684\u5F00\u53D1\u8005\u4EEC\uFF0C\u8FD9\u91CC\u91CD\u70B9\u611F\u8C22\u4E0B\u4E3A 1.3 \u7248\u672C\u505A\u51FA\u6838\u5FC3\u8D21\u732E\u7684\u5F00\u53D1\u8005\uFF1A

### Maintainer\uFF1A\u8463\u827A\u8343(CH3CHO)

\u4EBA\u5982\u5176\u540D\u201C\u827A\u5168\u201D\uFF0C\u5341\u516B\u822C\u6B66\u827A\u6837\u6837\u7CBE\u901A\uFF0C\u4E0D\u7BA1\u662F\u63A7\u5236\u53F0 TS \u524D\u7AEF\uFF0CJava \u540E\u53F0\uFF0C\u8FD8\u662F Higress \u7684 GO \u63A7\u5236\u9762\uFF0C\u4EE5\u53CA Standalone \u5B89\u88C5 Shell \u811A\u672C\u548C\u5404\u79CD CICD \u6D41\u7A0B\uFF0C\u901A\u901A\u624B\u5230\u64D2\u6765\u3002

\u5728 1.3 \u7248\u672C\u4E2D\u4E3B\u8981\u8D1F\u8D23\u4E86 Higress \u652F\u6301 Gateway API \u7684\u80FD\u529B\uFF0C\u4EE5\u53CA\u5B9E\u73B0\u4E86 Higress Admin Java SDK \u53EF\u4EE5\u63D0\u4F9B\u5916\u90E8\u96C6\u6210\u7528\u4E8E\u7BA1\u7406 Higress \u914D\u7F6E\uFF0C\u5E76\u6539\u8FDB\u4E86 Higress Console \u7684\u5B89\u5168\u6027\u548C\u6613\u7528\u6027\u3002

\u9664\u4E86\u5F00\u53D1\u8D21\u732E\u4E4B\u5916\uFF0C\u4ED6\u8FD8\u5BF9\u793E\u533A\u7528\u6237\u5145\u6EE1\u5584\u610F\u548C\u70ED\u60C5\uFF0C\u65E0\u8BBA\u662F\u5728 GitHub \u7684 Issues/Discussions\uFF0C\u6216\u662F\u793E\u533A\u4EA4\u6D41\u5FAE\u4FE1/\u9489\u9489\u7FA4\uFF0C\u968F\u5904\u53EF\u89C1\u4ED6\u5E2E\u52A9\u7528\u6237\u89E3\u51B3\u95EE\u9898\u7684\u8EAB\u5F71\u3002

### Approver\uFF1A\u5434\u65B0\u519B(Jun)\uFF0C\u5218\u8BAD\u707C(Xunzhuo)

\u4E24\u4F4D\u90FD\u5728\u591A\u4E2A Higress \u7248\u672C\u4E3A\u793E\u533A\u505A\u51FA\u4E86\u8D21\u732E\uFF0CJun \u7684\u4E3B\u8981\u8D21\u732E\u6709\uFF1A\u5728\u591A\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\u53D1\u73B0\u652F\u6301\uFF0C\u5168\u5C40\u914D\u7F6E\u7BA1\u7406\u67B6\u6784\u62BD\u8C61\uFF1BXunzhuo \u7684\u4E3B\u8981\u8D21\u732E\u6709\uFF1AHigress E2E \u6D4B\u8BD5\u6D41\u7A0B\u7684\u642D\u5EFA\uFF0CGitHub CI \u6D41\u7A0B\u7684\u5EFA\u8BBE\uFF0Chgctl \u7684\u6574\u4F53\u67B6\u6784\u8BBE\u8BA1\u3002

\u5728 1.3 \u7248\u672C\u4E2D\u4E8C\u4F4D\u534F\u4F5C\u5B8C\u6210\u4E86 hgctl \u7684\u591A\u6837\u5316\u80FD\u529B\u5EFA\u8BBE\uFF0C\u5E2E\u52A9 Higress \u7684\u6613\u7528\u6027\u53C8\u4E0A\u5230\u4E86\u4E00\u4E2A\u65B0\u7684\u53F0\u9636\u3002

\u4E24\u4F4D\u540C\u5B66\u4F5C\u4E3A Approver \u79EF\u6781\u53C2\u4E0E\u793E\u533A\u8D21\u732E PR \u7684 Review\uFF0C\u76EE\u524D\u5206\u522B\u662F Higress Tools SIG \u548C Higress GatewayAPI SIG \u7684\u9886\u5BFC\u8005\u3002

### Member\uFF1A\u97E6\u946B(WeixinX)\uFF0C\u5C01\u5B87\u817E(Fkbqf)

\u4E24\u4F4D\u90FD\u662F\u901A\u8FC7\u4E2D\u79D1\u9662\u5F00\u6E90\u4E4B\u590F\uFF08OSPP 2023\uFF09\u9879\u76EE\u5F00\u59CB\u53C2\u4E0E Higress \u8D21\u732E\uFF0CWeixinX \u662F\u4E00\u540D\u7814\u4E8C\u7684\u5B66\u751F\uFF0CFkbqf \u662F\u4E00\u540D\u5927\u4E09\u7684\u5B66\u751F\u3002

\u5728 1.3 \u7248\u672C\u4E2D\uFF0CWeixinX \u5B9E\u73B0\u4E86 hgctl plugin \u5B50\u547D\u4EE4\u7684\u80FD\u529B\uFF0C\u540C\u65F6\u8D21\u732E\u4E86 Go \u5B9E\u73B0\u7684 Basic Auth \u63D2\u4EF6\uFF0C\u4EE5\u53CA\u5BF9\u6807 Spring Cloud Gateway \u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u80FD\u529B\u7684 Transformer \u63D2\u4EF6\uFF1BFkbqf \u5219\u5B9E\u73B0\u4E86\u66F4\u4E3A\u590D\u6742\u7684 OIDC \u63D2\u4EF6\uFF0C\u5177\u5907\u6BD4 Envoy \u81EA\u5E26 OAuth2 Filter \u66F4\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u5E76\u4E14\u5177\u5907\u826F\u597D\u7684\u6269\u5C55\u6027\u3002

\u4E24\u4F4D\u540C\u5B66\u9664\u4E86\u5F00\u53D1\u8D21\u732E\u4EE5\u5916\uFF0C\u7528\u8BFE\u4F59\u65F6\u95F4\u79EF\u6781\u53C2\u4E0E Higress \u793E\u533A\u5468\u4F1A\uFF0C\u4E00\u8D77\u63A2\u8BA8\u548C\u5B66\u4E60\u6280\u672F\uFF0C\u4E0D\u4EA6\u4E50\u4E4E\u3002\u80FD\u591F\u6210\u4E3A\u4F60\u4EEC\u4EBA\u751F\u5B66\u4E1A\u8FDB\u9636\u8DEF\u4E0A\u7684\u9636\u68AF\uFF0CHigress \u8363\u5E78\u4E4B\u81F3\u3002

Higress \u793E\u533A\u540E\u7EED\u6574\u4F53\u7684 Roadmap \u89C4\u5212\u5982\u4E0B\uFF1A

![image](https://github.com/johnlanni/higress-group.github.io/assets/6763318/f646d9ad-d2d0-4496-b164-2884851e9e0c)

\u6B22\u8FCE\u66F4\u591A\u5C0F\u4F19\u4F34\u4E00\u8D77\u52A0\u5165\u6211\u4EEC\uFF1A

![higress-comm](https://github.com/johnlanni/higress-group.github.io/assets/6763318/d8e09712-0b3b-4c5a-b478-c84da139cf2f)

`},i=function(){return s},t=function(){return[{depth:2,slug:"\u5386\u7A0B\u56DE\u987E",text:"\u5386\u7A0B\u56DE\u987E"},{depth:2,slug:"\u65B0\u7248\u672C\u529F\u80FD\u901F\u89C8",text:"\u65B0\u7248\u672C\uFF1A\u529F\u80FD\u901F\u89C8"},{depth:2,slug:"\u65B0\u6807\u51C6\u652F\u6301\u6700\u65B0\u7248-gateway-api",text:"\u65B0\u6807\u51C6\uFF1A\u652F\u6301\u6700\u65B0\u7248 Gateway API"},{depth:3,slug:"\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B",text:"\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u80FD\u529B"},{depth:3,slug:"ingress-api-\u548C-gateway-api-\u4E4B\u95F4\u5982\u4F55\u9009\u62E9",text:"Ingress API \u548C Gateway API \u4E4B\u95F4\u5982\u4F55\u9009\u62E9"},{depth:2,slug:"\u65B0\u5DE5\u5177all-in-one-\u7684-hgctl",text:"\u65B0\u5DE5\u5177\uFF1AAll in one \u7684 hgctl"},{depth:3,slug:"\u66FF\u4EE3-helm-\u7528\u4E8E\u5B89\u88C5\u5347\u7EA7",text:"\u66FF\u4EE3 Helm \u7528\u4E8E\u5B89\u88C5/\u5347\u7EA7"},{depth:3,slug:"wasm-\u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305",text:"WASM \u63D2\u4EF6\u5F00\u53D1\u5DE5\u5177\u5305"},{depth:3,slug:"\u5176\u4ED6\u529F\u80FD",text:"\u5176\u4ED6\u529F\u80FD"},{depth:2,slug:"\u65B0\u5F81\u7A0Bapi-gateway",text:"\u65B0\u5F81\u7A0B\uFF1AAPI Gateway"},{depth:2,slug:"\u793E\u533A\u81F4\u8C22",text:"\u793E\u533A\u81F4\u8C22"},{depth:3,slug:"maintainer\u8463\u827A\u8343ch3cho",text:"Maintainer\uFF1A\u8463\u827A\u8343(CH3CHO)"},{depth:3,slug:"approver\u5434\u65B0\u519Bjun\u5218\u8BAD\u707Cxunzhuo",text:"Approver\uFF1A\u5434\u65B0\u519B(Jun)\uFF0C\u5218\u8BAD\u707C(Xunzhuo)"},{depth:3,slug:"member\u97E6\u946Bweixinx\u5C01\u5B87\u817Efkbqf",text:"Member\uFF1A\u97E6\u946B(WeixinX)\uFF0C\u5C01\u5B87\u817E(Fkbqf)"}]},a=c((f,h,u)=>{const{layout:m,...l}=n;return l.file=e,l.url=p,E`${y()}${r(s)}`})});export{a as Content,F as __tla,i as compiledContent,a as default,e as file,n as frontmatter,t as getHeadings,d as rawContent,p as url};
