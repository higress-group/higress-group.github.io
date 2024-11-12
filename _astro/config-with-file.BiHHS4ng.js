import{c,__tla as o}from"./astro-component.DIa0fJKh.js";import{r,m as E,u as v,__tla as y}from"./constant.DH1S1kY8.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let a,t,e,n,l,d,i,g=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u524D\u7F6E\u51C6\u5907">\u524D\u7F6E\u51C6\u5907</h2>
<h3 id="\u5B89\u88C5-docker-compose">\u5B89\u88C5 Docker Compose</h3>
<p>\u8BF7\u53C2\u8003 Docker \u5B98\u65B9\u6587\u6863\u6765\u5B89\u88C5 Docker Engine\uFF0C\u5176\u4E2D\u5DF2\u7ECF\u5185\u7F6E\u4E86 Docker Compose \u7EC4\u4EF6\uFF1A<a href="https://docs.docker.com/engine/install/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://docs.docker.com/engine/install/</a></p>
<h3 id="\u73AF\u5883\u9A8C\u8BC1">\u73AF\u5883\u9A8C\u8BC1</h3>
<ol>
<li>\u542F\u52A8\u7EC8\u7AEF\uFF1B</li>
<li>\u6267\u884C <code dir="auto">docker compose version</code> \u547D\u4EE4\uFF0C\u786E\u8BA4\u53EF\u4EE5\u6B63\u5E38\u8F93\u51FA Docker Compose \u7684\u7248\u672C\u3002
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Docker Compose version v2.20.2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Docker Compose version v2.20.2"><div></div></button></div></figure></div>
</li>
</ol>
<h2 id="\u5B89\u88C5-higrees">\u5B89\u88C5 Higrees</h2>
<h3 id="\u786E\u5B9A\u914D\u7F6E\u76EE\u5F55">\u786E\u5B9A\u914D\u7F6E\u76EE\u5F55</h3>
<p>\u7531\u4E8E\u8FD9\u6B21\u6211\u4EEC\u51C6\u5907\u4F7F\u7528\u6587\u4EF6\u6765\u7BA1\u7406 Higress \u7684\u914D\u7F6E\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u786E\u5B9A\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4EE5 <code dir="auto">~/higress/conf</code> \u76EE\u5F55\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002</p>
<h3 id="\u6267\u884C\u5B89\u88C5">\u6267\u884C\u5B89\u88C5</h3>
<p>\u542F\u52A8\u7EC8\u7AEF\uFF0C\u5E76\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c file://~/higress/conf -p &#x3C;\u4F60\u7684\u5BC6\u7801> -a</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c file://~/higress/conf -p <\u4F60\u7684\u5BC6\u7801> -a"><div></div></button></div></figure></div>
<p>\u8BF7\u8010\u5FC3\u7B49\u5F85\u5B89\u88C5\u8FC7\u7A0B\u6267\u884C\u5B8C\u6BD5\u3002Higress \u7684\u6267\u884C\u6587\u4EF6\u5C06\u88AB\u5B89\u88C5\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 <code dir="auto">higress</code> \u5B50\u76EE\u5F55\u5185\u3002\u914D\u7F6E\u6570\u636E\u5219\u5C06\u88AB\u5199\u5165 <code dir="auto">~/higress/conf</code> \u76EE\u5F55\u5185\u3002</p>
<p>\u5728\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u542F\u52A8 Higress\u3002\u5F53\u7EC8\u7AEF\u8F93\u51FA\u5982\u4E0B\u4FE1\u606F\u65F6\uFF0C\u5219\u8BF4\u660E Higress \u5DF2\u5B89\u88C5\u5B8C\u6210\u5E76\u6210\u529F\u542F\u52A8\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">now</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">started.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">You</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">can</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">check</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">out</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">its</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">status</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">by</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">executing</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/home/ch3cho/higress/bin/status.sh</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">listening</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">on:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">http://0.0.0.0:80</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">https://0.0.0.0:443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Visit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Console:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8080/</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Higress is now started. You can check out its status by executing /home/ch3cho/higress/bin/status.sh\x7F\x7FHigress Gateway is listening on:\x7F  http://0.0.0.0:80\x7F  https://0.0.0.0:443\x7FVisit Higress Console: http://localhost:8080/"><div></div></button></div></figure></div>
<h3 id="higress-\u8DEF\u7531\u914D\u7F6E">Higress \u8DEF\u7531\u914D\u7F6E</h3>
<p>\u4E3A\u4E86\u7740\u91CD\u8BF4\u660E\u57FA\u4E8E\u6587\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u5C06\u4E0D\u518D\u5C55\u5F00\u4ECB\u7ECD\u4F7F\u7528 Higress \u63A7\u5236\u53F0\u6765\u8FDB\u884C\u914D\u7F6E\u7684\u5177\u4F53\u6B65\u9AA4\u3002\u5982\u6709\u9700\u8981\uFF0C\u5927\u5BB6\u53EF\u4EE5\u67E5\u9605\u5176\u4ED6\u6587\u6863\u3002</p>
<h4 id="\u521B\u5EFA\u670D\u52A1\u6765\u6E90">\u521B\u5EFA\u670D\u52A1\u6765\u6E90</h4>
<p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 <code dir="auto">~/higress/conf/mcpbridges/default.yaml</code> \u6587\u4EF6\u4E2D\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.org</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: httpbin.org\x7F    name: httpbin\x7F    port: 80\x7F    type: dns"><div></div></button></div></figure></div>
<h4 id="\u521B\u5EFA\u57DF\u540D\u914D\u7F6E">\u521B\u5EFA\u57DF\u540D\u914D\u7F6E</h4>
<p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 <code dir="auto">~/higress/conf/configmaps/domain-foo.bar.com.yaml</code> \u6587\u4EF6\u4E2D\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">domain-foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enableHttps</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"off"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: domain-foo.bar.com\x7F  namespace: higress-system\x7Fdata:\x7F  domain: foo.bar.com\x7F  enableHttps: &#x22;off&#x22;"><div></div></button></div></figure></div>
<h4 id="\u521B\u5EFA\u670D\u52A1\u8DEF\u7531">\u521B\u5EFA\u670D\u52A1\u8DEF\u7531</h4>
<p>\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 <code dir="auto">~/higress/conf/ingresses/route-foo-bar.yaml</code> \u6587\u4EF6\u4E2D\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/ignore-path-case</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"false"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">route-foo-bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: httpbin.dns\x7F    higress.io/ignore-path-case: &#x22;false&#x22;\x7F  name: route-foo-bar\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<h3 id="\u8BF7\u6C42\u9A8C\u8BC1">\u8BF7\u6C42\u9A8C\u8BC1</h3>
<p>\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/get?foo=bar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/get?foo=bar -H &#x27;Host: foo.bar.com&#x27;"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u5E94\u8FD4\u56DE\u4E00\u6BB5\u5305\u542B\u8BF7\u6C42\u4FE1\u606F\u7684 JSON \u6570\u636E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"args"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"foo"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bar"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"headers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"Accept"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*/*"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"Host"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"foo.bar.com"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"Original-Host"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"foo.bar.com"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"Req-Start-Time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1693049173053"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"User-Agent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"curl/8.1.2"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-Amzn-Trace-Id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Root=1-11111111-111111111111111111111111"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-B3-Sampled"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-B3-Spanid"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2222222222222222"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-B3-Traceid"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"33333333333333333333333333333333"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-Envoy-Attempt-Count"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-Envoy-Decorator-Operation"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"httpbin.dns:80/*"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"X-Envoy-Internal"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"origin"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"192.168.16.1, 123.123.123.123"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://foo.bar.com/get?foo=bar"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;args&#x22;: {\x7F    &#x22;foo&#x22;: &#x22;bar&#x22;\x7F  },\x7F  &#x22;headers&#x22;: {\x7F    &#x22;Accept&#x22;: &#x22;*/*&#x22;,\x7F    &#x22;Host&#x22;: &#x22;foo.bar.com&#x22;,\x7F    &#x22;Original-Host&#x22;: &#x22;foo.bar.com&#x22;,\x7F    &#x22;Req-Start-Time&#x22;: &#x22;1693049173053&#x22;,\x7F    &#x22;User-Agent&#x22;: &#x22;curl/8.1.2&#x22;,\x7F    &#x22;X-Amzn-Trace-Id&#x22;: &#x22;Root=1-11111111-111111111111111111111111&#x22;,\x7F    &#x22;X-B3-Sampled&#x22;: &#x22;0&#x22;,\x7F    &#x22;X-B3-Spanid&#x22;: &#x22;2222222222222222&#x22;,\x7F    &#x22;X-B3-Traceid&#x22;: &#x22;33333333333333333333333333333333&#x22;,\x7F    &#x22;X-Envoy-Attempt-Count&#x22;: &#x22;1&#x22;,\x7F    &#x22;X-Envoy-Decorator-Operation&#x22;: &#x22;httpbin.dns:80/*&#x22;,\x7F    &#x22;X-Envoy-Internal&#x22;: &#x22;true&#x22;\x7F  },\x7F  &#x22;origin&#x22;: &#x22;192.168.16.1, 123.123.123.123&#x22;,\x7F  &#x22;url&#x22;: &#x22;http://foo.bar.com/get?foo=bar&#x22;\x7F}"><div></div></button></div></figure></div>
<h2 id="\u5DF2\u77E5\u95EE\u9898">\u5DF2\u77E5\u95EE\u9898</h2>
<p>\u5728 Windows \u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u76F4\u63A5\u4FEE\u6539\u6302\u8F7D\u5230 Docker \u5BB9\u5668\u4E2D\u7684\u672C\u5730\u6587\u4EF6\u540E\uFF0C\u5BB9\u5668\u5185\u7684\u8FDB\u7A0B\u65E0\u6CD5\u6536\u5230\u901A\u77E5\uFF08\u8BE6\u60C5\u8BF7\u67E5\u770B <a href="https://github.com/fsnotify/fsnotify/issues/292" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">fsnotify/fsnotify #292</a>\uFF09\u3002\u5982\u679C\u8981\u4F7F\u7528\u6587\u4EF6\u6765\u4FDD\u5B58\u914D\u7F6E\u6570\u636E\u7684\u8BDD\uFF0C\u5728\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\uFF0CHigress \u65E0\u6CD5\u7ACB\u5373\u52A0\u8F7D\u5230\u65B0\u7684\u914D\u7F6E\u3002\u5982\u679C\u9700\u8981\u5728 Windows \u4E0A\u72EC\u7ACB\u90E8\u7F72 Higress \u7F51\u5173\uFF0C\u53EF\u4EE5\u8003\u8651\u901A\u8FC7 Higress Console \u6765\u7BA1\u7406\u914D\u7F6E\u4FE1\u606F\uFF0C\u6216\u4F7F\u7528 Nacos \u4FDD\u5B58\u7F51\u5173\u914D\u7F6E\u3002</p>
<h2 id="\u53C2\u8003\u6587\u6863">\u53C2\u8003\u6587\u6863</h2>
<p>\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u4E0E Higress \u7684\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\u53EF\u67E5\u9605\u4EE5\u4E0B\u6587\u6863\uFF1A</p>
<ul>
<li><a href="../../docs/latest/user/quickstart" referrerpolicy="unsafe-url">\u5FEB\u901F\u5F00\u59CB</a></li>
<li><a href="../../docs/ops/deploy-by-helm" referrerpolicy="unsafe-url">\u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72</a></li>
<li><a href="../../docs/ops/deploy-by-docker-compose" referrerpolicy="unsafe-url">\u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72</a></li>
</ul>`,n={title:"\u57FA\u4E8E\u6587\u4EF6\u914D\u7F6E\u5B9E\u73B0 Higress \u6781\u7B80\u72EC\u7ACB\u90E8\u7F72",keywords:["higress","file","config"],description:"\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u6587\u4EF6\u6765\u7BA1\u7406 Higress \u914D\u7F6E\u4FE1\u606F\u5E76\u5B9E\u73B0\u72EC\u7ACB\u90E8\u7F72",author:"CH3CHO",date:"2023-08-25",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/config-with-file.md",category:"article"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/config-with-file.md",i=void 0,d=function(){return`## \u524D\u7F6E\u51C6\u5907

### \u5B89\u88C5 Docker Compose

\u8BF7\u53C2\u8003 Docker \u5B98\u65B9\u6587\u6863\u6765\u5B89\u88C5 Docker Engine\uFF0C\u5176\u4E2D\u5DF2\u7ECF\u5185\u7F6E\u4E86 Docker Compose \u7EC4\u4EF6\uFF1Ahttps://docs.docker.com/engine/install/

### \u73AF\u5883\u9A8C\u8BC1

1. \u542F\u52A8\u7EC8\u7AEF\uFF1B
3. \u6267\u884C \`docker compose version\` \u547D\u4EE4\uFF0C\u786E\u8BA4\u53EF\u4EE5\u6B63\u5E38\u8F93\u51FA Docker Compose \u7684\u7248\u672C\u3002
   \`\`\`
   Docker Compose version v2.20.2
   \`\`\`

## \u5B89\u88C5 Higrees

### \u786E\u5B9A\u914D\u7F6E\u76EE\u5F55

\u7531\u4E8E\u8FD9\u6B21\u6211\u4EEC\u51C6\u5907\u4F7F\u7528\u6587\u4EF6\u6765\u7BA1\u7406 Higress \u7684\u914D\u7F6E\u6570\u636E\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u786E\u5B9A\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u3002\u4E0B\u9762\u6211\u4EEC\u5C06\u4EE5 \`~/higress/conf\` \u76EE\u5F55\u4E3A\u4F8B\u8FDB\u884C\u4ECB\u7ECD\u3002

### \u6267\u884C\u5B89\u88C5

\u542F\u52A8\u7EC8\u7AEF\uFF0C\u5E76\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -c file://~/higress/conf -p <\u4F60\u7684\u5BC6\u7801> -a
\`\`\`

\u8BF7\u8010\u5FC3\u7B49\u5F85\u5B89\u88C5\u8FC7\u7A0B\u6267\u884C\u5B8C\u6BD5\u3002Higress \u7684\u6267\u884C\u6587\u4EF6\u5C06\u88AB\u5B89\u88C5\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u7684 \`higress\` \u5B50\u76EE\u5F55\u5185\u3002\u914D\u7F6E\u6570\u636E\u5219\u5C06\u88AB\u5199\u5165 \`~/higress/conf\` \u76EE\u5F55\u5185\u3002

\u5728\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u542F\u52A8 Higress\u3002\u5F53\u7EC8\u7AEF\u8F93\u51FA\u5982\u4E0B\u4FE1\u606F\u65F6\uFF0C\u5219\u8BF4\u660E Higress \u5DF2\u5B89\u88C5\u5B8C\u6210\u5E76\u6210\u529F\u542F\u52A8\u3002

\`\`\`shell
Higress is now started. You can check out its status by executing /home/ch3cho/higress/bin/status.sh

Higress Gateway is listening on:
  http://0.0.0.0:80
  https://0.0.0.0:443
Visit Higress Console: http://localhost:8080/
\`\`\`

### Higress \u8DEF\u7531\u914D\u7F6E

\u4E3A\u4E86\u7740\u91CD\u8BF4\u660E\u57FA\u4E8E\u6587\u4EF6\u7684\u8DEF\u7531\u914D\u7F6E\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u5C06\u4E0D\u518D\u5C55\u5F00\u4ECB\u7ECD\u4F7F\u7528 Higress \u63A7\u5236\u53F0\u6765\u8FDB\u884C\u914D\u7F6E\u7684\u5177\u4F53\u6B65\u9AA4\u3002\u5982\u6709\u9700\u8981\uFF0C\u5927\u5BB6\u53EF\u4EE5\u67E5\u9605\u5176\u4ED6\u6587\u6863\u3002

#### \u521B\u5EFA\u670D\u52A1\u6765\u6E90

\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 \`~/higress/conf/mcpbridges/default.yaml\` \u6587\u4EF6\u4E2D\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: httpbin.org
    name: httpbin
    port: 80
    type: dns
\`\`\`

#### \u521B\u5EFA\u57DF\u540D\u914D\u7F6E

\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 \`~/higress/conf/configmaps/domain-foo.bar.com.yaml\` \u6587\u4EF6\u4E2D\uFF1A

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: domain-foo.bar.com
  namespace: higress-system
data:
  domain: foo.bar.com
  enableHttps: "off"
\`\`\`

#### \u521B\u5EFA\u670D\u52A1\u8DEF\u7531

\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u5C06\u4EE5\u4E0B\u5185\u5BB9\u5199\u5165 \`~/higress/conf/ingresses/route-foo-bar.yaml\` \u6587\u4EF6\u4E2D\uFF1A

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: httpbin.dns
    higress.io/ignore-path-case: "false"
  name: route-foo-bar
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: foo.bar.com
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

### \u8BF7\u6C42\u9A8C\u8BC1

\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`shell
curl http://localhost/get?foo=bar -H 'Host: foo.bar.com'
\`\`\`

\u8BF7\u6C42\u5E94\u8FD4\u56DE\u4E00\u6BB5\u5305\u542B\u8BF7\u6C42\u4FE1\u606F\u7684 JSON \u6570\u636E\uFF1A
\`\`\`json
{
  "args": {
    "foo": "bar"
  },
  "headers": {
    "Accept": "*/*",
    "Host": "foo.bar.com",
    "Original-Host": "foo.bar.com",
    "Req-Start-Time": "1693049173053",
    "User-Agent": "curl/8.1.2",
    "X-Amzn-Trace-Id": "Root=1-11111111-111111111111111111111111",
    "X-B3-Sampled": "0",
    "X-B3-Spanid": "2222222222222222",
    "X-B3-Traceid": "33333333333333333333333333333333",
    "X-Envoy-Attempt-Count": "1",
    "X-Envoy-Decorator-Operation": "httpbin.dns:80/*",
    "X-Envoy-Internal": "true"
  },
  "origin": "192.168.16.1, 123.123.123.123",
  "url": "http://foo.bar.com/get?foo=bar"
}
\`\`\`

## \u5DF2\u77E5\u95EE\u9898

\u5728 Windows \u64CD\u4F5C\u7CFB\u7EDF\u4E2D\uFF0C\u76F4\u63A5\u4FEE\u6539\u6302\u8F7D\u5230 Docker \u5BB9\u5668\u4E2D\u7684\u672C\u5730\u6587\u4EF6\u540E\uFF0C\u5BB9\u5668\u5185\u7684\u8FDB\u7A0B\u65E0\u6CD5\u6536\u5230\u901A\u77E5\uFF08\u8BE6\u60C5\u8BF7\u67E5\u770B [fsnotify/fsnotify #292](https://github.com/fsnotify/fsnotify/issues/292)\uFF09\u3002\u5982\u679C\u8981\u4F7F\u7528\u6587\u4EF6\u6765\u4FDD\u5B58\u914D\u7F6E\u6570\u636E\u7684\u8BDD\uFF0C\u5728\u76F4\u63A5\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\uFF0CHigress \u65E0\u6CD5\u7ACB\u5373\u52A0\u8F7D\u5230\u65B0\u7684\u914D\u7F6E\u3002\u5982\u679C\u9700\u8981\u5728 Windows \u4E0A\u72EC\u7ACB\u90E8\u7F72 Higress \u7F51\u5173\uFF0C\u53EF\u4EE5\u8003\u8651\u901A\u8FC7 Higress Console \u6765\u7BA1\u7406\u914D\u7F6E\u4FE1\u606F\uFF0C\u6216\u4F7F\u7528 Nacos \u4FDD\u5B58\u7F51\u5173\u914D\u7F6E\u3002

## \u53C2\u8003\u6587\u6863

\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u4E0E Higress \u7684\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\u53EF\u67E5\u9605\u4EE5\u4E0B\u6587\u6863\uFF1A
- [\u5FEB\u901F\u5F00\u59CB](../docs/latest/user/quickstart)
- [\u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72](../docs/ops/deploy-by-helm)
- [\u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72](../docs/ops/deploy-by-docker-compose)
`},t=function(){return s},l=function(){return[{depth:2,slug:"\u524D\u7F6E\u51C6\u5907",text:"\u524D\u7F6E\u51C6\u5907"},{depth:3,slug:"\u5B89\u88C5-docker-compose",text:"\u5B89\u88C5 Docker Compose"},{depth:3,slug:"\u73AF\u5883\u9A8C\u8BC1",text:"\u73AF\u5883\u9A8C\u8BC1"},{depth:2,slug:"\u5B89\u88C5-higrees",text:"\u5B89\u88C5 Higrees"},{depth:3,slug:"\u786E\u5B9A\u914D\u7F6E\u76EE\u5F55",text:"\u786E\u5B9A\u914D\u7F6E\u76EE\u5F55"},{depth:3,slug:"\u6267\u884C\u5B89\u88C5",text:"\u6267\u884C\u5B89\u88C5"},{depth:3,slug:"higress-\u8DEF\u7531\u914D\u7F6E",text:"Higress \u8DEF\u7531\u914D\u7F6E"},{depth:4,slug:"\u521B\u5EFA\u670D\u52A1\u6765\u6E90",text:"\u521B\u5EFA\u670D\u52A1\u6765\u6E90"},{depth:4,slug:"\u521B\u5EFA\u57DF\u540D\u914D\u7F6E",text:"\u521B\u5EFA\u57DF\u540D\u914D\u7F6E"},{depth:4,slug:"\u521B\u5EFA\u670D\u52A1\u8DEF\u7531",text:"\u521B\u5EFA\u670D\u52A1\u8DEF\u7531"},{depth:3,slug:"\u8BF7\u6C42\u9A8C\u8BC1",text:"\u8BF7\u6C42\u9A8C\u8BC1"},{depth:2,slug:"\u5DF2\u77E5\u95EE\u9898",text:"\u5DF2\u77E5\u95EE\u9898"},{depth:2,slug:"\u53C2\u8003\u6587\u6863",text:"\u53C2\u8003\u6587\u6863"}]},a=c((h,x,F)=>{const{layout:m,...p}=n;return p.file=e,p.url=i,r`${E()}${v(s)}`})});export{a as Content,g as __tla,t as compiledContent,a as default,e as file,n as frontmatter,l as getHeadings,d as rawContent,i as url};
