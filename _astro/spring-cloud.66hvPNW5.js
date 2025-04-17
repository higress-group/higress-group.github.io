import{c as t,__tla as o}from"./astro-component.m4CCZO6J.js";import{r as v,m as r,u as y,__tla as g}from"./constant.DxSxnLEB.js";import{__tla as x}from"./astro/assets-service.BhtN0nM5.js";let e,p,a,n,c,l,i,f=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u4F7F\u7528-nacos-\u505A\u6CE8\u518C\u4E2D\u5FC3">\u4F7F\u7528 Nacos \u505A\u6CE8\u518C\u4E2D\u5FC3</h2>
<p>\u5E94\u7528\u914D\u7F6E\u5177\u4F53\u53C2\u8003<a href="https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nacos Spring Cloud \u5FEB\u901F\u5F00\u59CB</a>\u8FDB\u884C\u5E94\u7528\u914D\u7F6E</p>
<h3 id="\u4E0D\u6307\u5B9A\u547D\u540D\u7A7A\u95F4">\u4E0D\u6307\u5B9A\u547D\u540D\u7A7A\u95F4</h3>
<p>\u5982\u679C <code dir="auto">application.properties</code> \u4E2D\u6CA1\u6709\u6307\u5B9A Nacos \u547D\u540D\u7A7A\u95F4\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server.port=8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server.port=8080\x7Fspring.application.name=my-service\x7F\x7Fspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848"><div></div></button></div></figure></div>
<p>\u5219 Higress \u7684 <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a> \u4E2D\u4EA6\u65E0\u9700\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u670D\u52A1\u5206\u7EC4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90\x7F  - name: my-nacos\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE\x7F    type: nacos2\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP\x7F    domain: 127.0.0.1\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848\x7F    port: 8848\x7F    # Nacos \u670D\u52A1\u5206\u7EC4\x7F    nacosGroups:\x7F    - DEFAULT_GROUP"><div></div></button></div></figure></div>
<p>\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.DEFAULT-GROUP.public.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.DEFAULT-GROUP.public.nacos\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\u8FD9\u91CC\u901A\u8FC7\u6CE8\u89E3<code dir="auto">higress.io/destination</code>\u6307\u5B9A\u8DEF\u7531\u6700\u7EC8\u8981\u8F6C\u53D1\u5230\u7684\u76EE\u6807\u670D\u52A1\u3002</p>
<p>\u5BF9\u4E8E Nacos \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4ID.nacos\u201D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u9700\u8981\u9075\u5FAA DNS \u57DF\u540D\u683C\u5F0F\uFF0C\u56E0\u6B64\u670D\u52A1\u5206\u7EC4\u4E2D\u7684\u4E0B\u5212\u7EBF\u2019_\u2018\u88AB\u8F6C\u6362\u6210\u4E86\u6A2A\u6760\u2019-\u2018\u3002\u547D\u540D\u7A7A\u95F4\u672A\u6307\u5B9A\u65F6\uFF0C\u8FD9\u91CC\u9ED8\u8BA4\u503C\u4E3A\u201Dpublic\u201D\u3002</p>
<h3 id="\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F">\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u3001\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F</h3>
<p>\u5982\u679C <code dir="auto">application.properties</code> \u4E2D\u6307\u5B9A\u4E86 Nacos \u547D\u540D\u7A7A\u95F4\uFF0C\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server.port=8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.nacos.discovery.group=custom-group</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server.port=8080\x7Fspring.application.name=my-service\x7F\x7Fspring.cloud.nacos.discovery.server-addr=127.0.0.1:8848\x7Fspring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358\x7Fspring.cloud.nacos.discovery.group=custom-group"><div></div></button></div></figure></div>
<p>\u5219 Higress \u7684 McpBridge \u505A\u76F8\u5E94\u914D\u7F6E\u5373\u53EF</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u547D\u540D\u7A7A\u95F4 ID</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosNamespaceId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Nacos \u670D\u52A1\u5206\u7EC4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">custom-group</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90\x7F  - name: my-nacos\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE\x7F    type: nacos2\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP\x7F    domain: 127.0.0.1\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848\x7F    port: 8848\x7F    # Nacos \u547D\u540D\u7A7A\u95F4 ID\x7F    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358\x7F    # Nacos \u670D\u52A1\u5206\u7EC4\x7F    nacosGroups:\x7F    - custom-group"><div></div></button></div></figure></div>
<p>\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<h2 id="\u4F7F\u7528-zookeeper-\u505A\u6CE8\u518C\u4E2D\u5FC3">\u4F7F\u7528 ZooKeeper \u505A\u6CE8\u518C\u4E2D\u5FC3</h2>
<p>\u4F7F\u7528 Zookeeper \u505A\u6CE8\u518C\u4E2D\u5FC3\u65F6\uFF0C\u6CE8\u610F\u5FC5\u987B\u914D\u7F6E<code dir="auto">spring.cloud.zookeeper.discovery.preferIpAddress=true</code>\uFF0C\u5426\u5219\u6CE8\u518C\u5230\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u5230\u5730\u5740\u4E3A\u4E3B\u673A\u540D\u79F0\uFF0C\u800C\u4E0D\u662FIP\u3002</p>
<h3 id="\u4E0D\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84">\u4E0D\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84</h3>
<p>\u5982\u679C <code dir="auto">application.properties</code> \u4E2D\u672A\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.connect-string=127.0.0.1:2181</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.preferIpAddress=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.enabled=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.register=true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="spring.application.name=my-service\x7Fspring.cloud.zookeeper.connect-string=127.0.0.1:2181\x7Fspring.cloud.zookeeper.discovery.preferIpAddress=true\x7Fspring.cloud.zookeeper.discovery.enabled=true\x7Fspring.cloud.zookeeper.discovery.register=true"><div></div></button></div></figure></div>
<p>\u5219 Higress \u7684 <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a> \u4E2D\u4EA6\u65E0\u9700\u6307\u5B9AzkServicePath\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2181</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90\x7F  - name: my-zk\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper\x7F    type: zookeeper\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP\x7F    domain: 127.0.0.1\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\x7F    port: 2181"><div></div></button></div></figure></div>
<p>\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.services.zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.services.zookeeper\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\u5BF9\u4E8E ZooKeeper \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u6CE8\u518C\u6839\u8DEF\u5F84.zookeeper\u201D\uFF0CSpringCloud \u5728\u672A\u6307\u5B9A\u670D\u52A1\u6CE8\u518C\u6839\u8DEF\u5F84\u7684\u60C5\u51B5\u4E0B\uFF0C\u6839\u8DEF\u5F84\u9ED8\u8BA4\u662F\u201Dservices\u201D</p>
<h3 id="\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84">\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84</h3>
<p>\u5982\u679C <code dir="auto">application.properties</code> \u4E2D\u6307\u5B9A\u4E86\u6CE8\u518C\u6839\u8DEF\u5F84\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.application.name=my-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.connect-string=127.0.0.1:2181</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.preferIpAddress=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.enabled=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.register=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.cloud.zookeeper.discovery.root=my-services-root</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="spring.application.name=my-service\x7Fspring.cloud.zookeeper.connect-string=127.0.0.1:2181\x7Fspring.cloud.zookeeper.discovery.preferIpAddress=true\x7Fspring.cloud.zookeeper.discovery.enabled=true\x7Fspring.cloud.zookeeper.discovery.register=true\x7Fspring.cloud.zookeeper.discovery.root=my-services-root"><div></div></button></div></figure></div>
<p>\u5219 Higress \u7684 <a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a> \u4E2D\u4EA6\u9700\u6307\u5B9AzkServicePath\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-zk</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2181</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u5BF9\u5E94 spring.cloud.zookeeper.discovery.root \u914D\u7F6E\u5B57\u6BB5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">zkServicePath</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">my-services-root</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90\x7F  - name: my-zk\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper\x7F    type: zookeeper\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP\x7F    domain: 127.0.0.1\x7F    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\x7F    port: 2181\x7F    # \u5BF9\u5E94 spring.cloud.zookeeper.discovery.root \u914D\u7F6E\u5B57\u6BB5\x7F    zkServicePath:\x7F    - my-services-root"><div></div></button></div></figure></div>
<p>\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/destination: my-service.my-services-root.zookeeper</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">namespace: default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">resource:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">apiGroup: networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">kind: McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">name: default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">path: /api</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: my-service.my-services-root.zookeeper\x7F  name: demo\x7F  namespace: default\x7Fspec:\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\u5982\u679C spring.cloud.zookeeper.discovery.root \u4E2D\u5305\u542B\u4E86\u4E0B\u5212\u7EBF\uFF0C\u9700\u8981\u88AB\u66FF\u6362\u4E3A\u6A2A\u6760\uFF0C\u56E0\u4E3A\u76EE\u6807\u670D\u52A1\u6574\u4F53\u683C\u5F0F\u9700\u8981\u6EE1\u8DB3 DNS \u57DF\u540D\u89C4\u8303</p>`,n={title:"\u5B9E\u73B0 SpringCloud \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531",keywords:["SpringCloud","discovery"],description:"\u5B9E\u73B0 SpringCloud \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/spring-cloud.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/spring-cloud.md",i=void 0,l=function(){return`
# \u5B9E\u73B0 SpringCloud \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531

## \u4F7F\u7528 Nacos \u505A\u6CE8\u518C\u4E2D\u5FC3

\u5E94\u7528\u914D\u7F6E\u5177\u4F53\u53C2\u8003[Nacos Spring Cloud \u5FEB\u901F\u5F00\u59CB](https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html)\u8FDB\u884C\u5E94\u7528\u914D\u7F6E

### \u4E0D\u6307\u5B9A\u547D\u540D\u7A7A\u95F4

\u5982\u679C \`application.properties\` \u4E2D\u6CA1\u6709\u6307\u5B9A Nacos \u547D\u540D\u7A7A\u95F4\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
\`\`\`

\u5219 Higress \u7684 [McpBridge](./mcp-bridge.md) \u4E2D\u4EA6\u65E0\u9700\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-nacos
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE
    type: nacos2
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - DEFAULT_GROUP
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.DEFAULT-GROUP.public.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`

\u6CE8\u610F\u8FD9\u91CC\u901A\u8FC7\u6CE8\u89E3\`higress.io/destination\`\u6307\u5B9A\u8DEF\u7531\u6700\u7EC8\u8981\u8F6C\u53D1\u5230\u7684\u76EE\u6807\u670D\u52A1\u3002

\u5BF9\u4E8E Nacos \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4ID.nacos\u201D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u9700\u8981\u9075\u5FAA DNS \u57DF\u540D\u683C\u5F0F\uFF0C\u56E0\u6B64\u670D\u52A1\u5206\u7EC4\u4E2D\u7684\u4E0B\u5212\u7EBF'_'\u88AB\u8F6C\u6362\u6210\u4E86\u6A2A\u6760'-'\u3002\u547D\u540D\u7A7A\u95F4\u672A\u6307\u5B9A\u65F6\uFF0C\u8FD9\u91CC\u9ED8\u8BA4\u503C\u4E3A"public"\u3002

### \u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u3001\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F

\u5982\u679C \`application.properties\` \u4E2D\u6307\u5B9A\u4E86 Nacos \u547D\u540D\u7A7A\u95F4\uFF0C\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
spring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
spring.cloud.nacos.discovery.group=custom-group
\`\`\`

\u5219 Higress \u7684 McpBridge \u505A\u76F8\u5E94\u914D\u7F6E\u5373\u53EF

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-nacos
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE
    type: nacos2
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u547D\u540D\u7A7A\u95F4 ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - custom-group
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`


## \u4F7F\u7528 ZooKeeper \u505A\u6CE8\u518C\u4E2D\u5FC3

\u4F7F\u7528 Zookeeper \u505A\u6CE8\u518C\u4E2D\u5FC3\u65F6\uFF0C\u6CE8\u610F\u5FC5\u987B\u914D\u7F6E\`spring.cloud.zookeeper.discovery.preferIpAddress=true\`\uFF0C\u5426\u5219\u6CE8\u518C\u5230\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u5230\u5730\u5740\u4E3A\u4E3B\u673A\u540D\u79F0\uFF0C\u800C\u4E0D\u662FIP\u3002

### \u4E0D\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84

\u5982\u679C \`application.properties\` \u4E2D\u672A\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
\`\`\`

\u5219 Higress \u7684 [McpBridge](./mcp-bridge.md) \u4E2D\u4EA6\u65E0\u9700\u6307\u5B9AzkServicePath\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-zk
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper
    type: zookeeper
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3
    port: 2181
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.services.zookeeper
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`
\u6CE8\u610F\u5BF9\u4E8E ZooKeeper \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A"\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u6CE8\u518C\u6839\u8DEF\u5F84.zookeeper"\uFF0CSpringCloud \u5728\u672A\u6307\u5B9A\u670D\u52A1\u6CE8\u518C\u6839\u8DEF\u5F84\u7684\u60C5\u51B5\u4E0B\uFF0C\u6839\u8DEF\u5F84\u9ED8\u8BA4\u662F"services"

### \u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84

\u5982\u679C \`application.properties\` \u4E2D\u6307\u5B9A\u4E86\u6CE8\u518C\u6839\u8DEF\u5F84\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
spring.cloud.zookeeper.discovery.root=my-services-root
\`\`\`

\u5219 Higress \u7684 [McpBridge](./mcp-bridge.md) \u4E2D\u4EA6\u9700\u6307\u5B9AzkServicePath\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-zk
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper
    type: zookeeper
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3
    port: 2181
    # \u5BF9\u5E94 spring.cloud.zookeeper.discovery.root \u914D\u7F6E\u5B57\u6BB5
    zkServicePath:
    - my-services-root
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.my-services-root.zookeeper
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
\`\`\`

\u6CE8\u610F\u5982\u679C spring.cloud.zookeeper.discovery.root \u4E2D\u5305\u542B\u4E86\u4E0B\u5212\u7EBF\uFF0C\u9700\u8981\u88AB\u66FF\u6362\u4E3A\u6A2A\u6760\uFF0C\u56E0\u4E3A\u76EE\u6807\u670D\u52A1\u6574\u4F53\u683C\u5F0F\u9700\u8981\u6EE1\u8DB3 DNS \u57DF\u540D\u89C4\u8303

`},p=function(){return s},c=function(){return[{depth:2,slug:"\u4F7F\u7528-nacos-\u505A\u6CE8\u518C\u4E2D\u5FC3",text:"\u4F7F\u7528 Nacos \u505A\u6CE8\u518C\u4E2D\u5FC3"},{depth:3,slug:"\u4E0D\u6307\u5B9A\u547D\u540D\u7A7A\u95F4",text:"\u4E0D\u6307\u5B9A\u547D\u540D\u7A7A\u95F4"},{depth:3,slug:"\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F",text:"\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u3001\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F"},{depth:2,slug:"\u4F7F\u7528-zookeeper-\u505A\u6CE8\u518C\u4E2D\u5FC3",text:"\u4F7F\u7528 ZooKeeper \u505A\u6CE8\u518C\u4E2D\u5FC3"},{depth:3,slug:"\u4E0D\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84",text:"\u4E0D\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84"},{depth:3,slug:"\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84",text:"\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84"}]},e=t((u,E,m)=>{const{layout:k,...d}=n;return d.file=a,d.url=i,v`${r()}${y(s)}`})});export{e as Content,f as __tla,p as compiledContent,e as default,a as file,n as frontmatter,c as getHeadings,l as rawContent,i as url};
