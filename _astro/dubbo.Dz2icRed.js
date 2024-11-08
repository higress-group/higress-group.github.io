import{c as l,__tla as o}from"./astro-component.DIa0fJKh.js";import{r,m as v,u as E,__tla as y}from"./constant.CC1Aokqc.js";import{__tla as b}from"./astro/assets-service.tyfV9CK3.js";let a,t,e,n,d,c,p,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let s;s=`<p>Higress\u63D0\u4F9B\u4E86\u4ECEHTTP\u534F\u8BAE\u5230Dubbo\u534F\u8BAE\u8FDB\u884C\u8F6C\u6362\u7684\u529F\u80FD\uFF0C\u7528\u6237\u901A\u8FC7\u914D\u7F6E\u534F\u8BAE\u8F6C\u6362\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E2ADubbo\u670D\u52A1\u4EE5HTTP\u63A5\u53E3\u66B4\u9732\u51FA\u6765\uFF0C\u4ECE\u800C\u7528HTTP\u8BF7\u6C42\u5B9E\u73B0\u5BF9Dubbo\u63A5\u53E3\u7684\u8C03\u7528\u3002\u672C\u6587\u5C06\u901A\u8FC7\u4E00\u4E2A\u793A\u4F8B\u6765\u4ECB\u7ECD\u5982\u4F55\u7528Higress\u914D\u7F6EHTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u3002</p>
<h2 id="\u524D\u63D0\u6761\u4EF6">\u524D\u63D0\u6761\u4EF6</h2>
<ol>
<li>Higress\u76EE\u524D\u652F\u6301\u7684Dubbo\u6846\u67B6\u7684\u7248\u672C\u4E3A2.x\u3002\u82E5\u60A8\u4F7F\u7528Dubbo3.0\uFF0C\u8981\u6C42\u4F7F\u7528dubbo\u534F\u8BAE\uFF08\u76EE\u524D\u6682\u4E0D\u652F\u6301Triple\u534F\u8BAE\u3002Triple\u534F\u8BAE\u5E95\u5C42\u57FA\u4E8EgRPC\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4EE3\u7406\uFF0C\u65E0\u9700\u505A\u534F\u8BAE\u8F6C\u5316\uFF09\u3002</li>
</ol>
<h2 id="\u90E8\u7F72dubbo\u670D\u52A1">\u90E8\u7F72Dubbo\u670D\u52A1</h2>
<p>\u60A8\u53EF\u4EE5\u9009\u7528Naocs\u6216\u8005Zookeeper\u4EFB\u610F\u4E00\u79CD\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u90E8\u7F72\u4E00\u4E2ADubbo\u670D\u52A1\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u6587\u6863\uFF1A</p>
<p><a href="https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/nacos/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/nacos/</a></p>
<p><a href="https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/zookeeper/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/zookeeper/</a></p>
<p>\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u5DF2\u7ECF\u90E8\u7F72\u4E86\u5982\u4E0B\u4E00\u4E2ADubbo\u670D\u52A1\uFF0C\u5176\u670D\u52A1\u540D\u4E3Acom.alibaba.nacos.example.dubbo.service.DemoService\uFF0C\u5E76\u6307\u5B9A\u4E86\u8BE5\u670D\u52A1\u7684version\u4E3A\u201C1.0.0\u201D\uFF0Cgroup\u4E3A\u201Cdev\u201D\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u4E3A\u8BE5\u670D\u52A1\u914D\u7F6E\u534F\u8BAE\u8F6C\u6362\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> com.alibaba.nacos.example.dubbo.service;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">interface</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">DemoService</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">String </span><span style="--0:#B392F0">sayName</span><span style="--0:#E1E4E8">(String </span><span style="--0:#FFAB70">name</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package com.alibaba.nacos.example.dubbo.service;\x7F\x7Fpublic interface DemoService {\x7F    String sayName(String name);\x7F}"><div></div></button></div></figure></div>
<h2 id="\u901A\u8FC7ingress\u8F6C\u53D1\u8BF7\u6C42\u5230dubbo\u670D\u52A1">\u901A\u8FC7Ingress\u8F6C\u53D1\u8BF7\u6C42\u5230Dubbo\u670D\u52A1</h2>
<p>Higress\u53EF\u4EE5\u901A\u8FC7<a href="../mcp-bridge/" referrerpolicy="unsafe-url">McpBridge</a>\u6765\u5BF9\u63A5Nacos\u6216\u8005Zookeeper\u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5Nacos\u4E3A\u4F8B\uFF0C\u5047\u8BBENaocs\u7684ip\u5730\u5740\u4E3A192.xxx.xx.32\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728K8s\u96C6\u7FA4\u4E2Dapply\u4EE5\u4E0B\u8D44\u6E90\u6765\u914D\u7F6EMcpBridge</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">192.xxx.xx.32</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nacosGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_GROUP</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos-service-resource</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: 192.xxx.xx.32\x7F    nacosGroups:\x7F    - DEFAULT_GROUP\x7F    name: nacos-service-resource\x7F    port: 8848\x7F    type: nacos2"><div></div></button></div></figure></div>
<p>\u901A\u8FC7McpBridge\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4ECENacos\u4E2D\u53D1\u73B0Dubbo\u670D\u52A1\uFF0C\u5E76\u4E3A\u5176\u521B\u5EFA\u8DEF\u7531\u3002</p>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u521B\u5EFA\u5982\u4E0BIngress\uFF0C\u4ECE\u800C\u521B\u5EFA\u4E00\u6761\u6307\u5411Dubbo\u670D\u52A1\u7684HTTP\u8DEF\u7531\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/rpc-destination-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/dubbo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos\x7F    higress.io/rpc-destination-name: httproute-http2rpc-demo\x7F  name: httproute-http2rpc-demo-ingress\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /dubbo\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>\u8FD9\u6837\uFF0Cpath\u524D\u7F00\u4E3A/dubbo\u7684\u8BF7\u6C42\u5C31\u4F1A\u88AB\u8DEF\u7531\u5230\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684Dubbo\u670D\u52A1\u4E0A\u3002</p>
<h2 id="\u901A\u8FC7higress\u81EA\u5B9A\u4E49\u7684crd-http2rpc\u914D\u7F6Ehttp\u5230dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219">\u901A\u8FC7Higress\u81EA\u5B9A\u4E49\u7684CRD-Http2Rpc\u914D\u7F6EHTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219</h2>
<p>\u7ECF\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u901A\u8FC7Ingress\u5C06path\u524D\u7F00\u4E3A/dubbo\u7684\u8BF7\u6C42\u8DEF\u7531\u5230\u6211\u4EEC\u7684Dubbo\u670D\u52A1\u4E0A\u3002\u4F46\u5149\u662F\u8FD9\u6837\u662F\u65E0\u6CD5\u6B63\u5E38\u901A\u4FE1\u7684\uFF0C\u56E0\u4E3ADubbo\u670D\u52A1\u4F7F\u7528\u7684\u662F\u5B9A\u5236\u7684Dubbo\u534F\u8BAE\uFF0C\u65E0\u6CD5\u5929\u7136\u4E0EHTTP\u534F\u8BAE\u8FDB\u884C\u517C\u5BB9\u3002\u56E0\u6B64\u63A5\u4E0B\u6765\u6211\u4EEC\u8FD8\u8981\u914D\u7F6E\u5177\u4F53\u7684HTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7528HTTP\u8BF7\u6C42\u6765\u8C03\u7528Dubbo\u670D\u52A1\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Http2Rpc</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">dubbo</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">com.alibaba.nacos.example.dubbo.service.DemoService</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">group</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">serviceMethod</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sayName</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">headersAttach</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpMethods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/dubbo/hello"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">params</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">paramKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">p</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paramSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">QUERY</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paramType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"java.lang.String"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: Http2Rpc\x7Fmetadata:\x7F  name: httproute-http2rpc-demo\x7F  namespace: higress-system\x7Fspec:\x7F  dubbo:\x7F    service: com.alibaba.nacos.example.dubbo.service.DemoService\x7F    version: 1.0.0\x7F    group: dev\x7F    methods:\x7F    - serviceMethod: sayName\x7F      headersAttach: &#x22;*&#x22;\x7F      httpMethods:\x7F      - &#x22;GET&#x22;\x7F      httpPath: &#x22;/dubbo/hello&#x22;\x7F      params:\x7F      - paramKey: p\x7F        paramSource: QUERY\x7F        paramType: &#x22;java.lang.String&#x22;"><div></div></button></div></figure></div>
<p>\u5728\u4EE5\u4E0AHttp2Rpc\u4E2D\uFF0C\u6211\u4EEC\u914D\u7F6E\u4E86\u5C06path\u4E3A/dubbo/hello\u7684HTTP\u8BF7\u6C42\u8F6C\u53D1\u5230Dubbo\u670D\u52A1com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev
\u4E2D\uFF0C\u5E76\u8C03\u7528\u5176sayName\u65B9\u6CD5\uFF0C\u800C\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u5219\u901A\u8FC7HTTP url\u4E2D\u7684\u7684query\u53C2\u6570p\u6765\u6307\u5B9A\u3002</p>
<h2 id="\u8BF7\u6C42\u9A8C\u8BC1">\u8BF7\u6C42\u9A8C\u8BC1</h2>
<p>\u901A\u8FC7\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0Bcurl\u547D\u4EE4\u6765\u8C03\u7528\u8FD9\u4E2Adubbo\u670D\u52A1\u4E86\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">$curl </span><span style="--0:#9ECBFF">"localhost/dubbo/hello?p=abc"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"result"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"Service [name :demoService , port : 20880] sayName(</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">abc</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">) : Hello,abc"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$curl &#x22;localhost/dubbo/hello?p=abc&#x22;\x7F{&#x22;result&#x22;:&#x22;Service [name :demoService , port : 20880] sayName(\\&#x22;abc\\&#x22;) : Hello,abc&#x22;}"><div></div></button></div></figure></div>
<h2 id="\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570">\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570</h2>
<p>Http2Rpc\u652F\u6301\u5C06\u6574\u4E2A\u8BF7\u6C42body\u5E8F\u5217\u5316\u4E3ADubbo\u65B9\u6CD5\u7684\u5165\u53C2\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Http2Rpc</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httproute-http2rpc-demo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">dubbo</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">com.alibaba.nacos.example.dubbo.service.DemoService</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">group</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">serviceMethod</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sayName</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">headersAttach</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpMethods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"POST"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">httpPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/dubbo/hello"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paramFromEntireBody</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paramType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"java.lang.String"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: Http2Rpc\x7Fmetadata:\x7F  name: httproute-http2rpc-demo\x7F  namespace: higress-system\x7Fspec:\x7F  dubbo:\x7F    service: com.alibaba.nacos.example.dubbo.service.DemoService\x7F    version: 1.0.0\x7F    group: dev\x7F    methods:\x7F    - serviceMethod: sayName\x7F      headersAttach: &#x22;*&#x22;\x7F      httpMethods:\x7F      - &#x22;POST&#x22;\x7F      httpPath: &#x22;/dubbo/hello&#x22;\x7F      paramFromEntireBody:\x7F        paramType: &#x22;java.lang.String&#x22;"><div></div></button></div></figure></div>
<p>\u901A\u8FC7paramFromEntireBody\u5B57\u6BB5\uFF0C\u5373\u53EF\u5C06\u6574\u4E2A\u8BF7\u6C42body\u5E8F\u5217\u5316\u4E3ADubbo\u65B9\u6CD5\u7684\u5165\u53C2\u3002\u53C2\u6570\u7684\u7C7B\u578B\u901A\u8FC7paramFromEntireBody.paramType\u5B57\u6BB5\u6765\u6307\u5B9A\u3002\u8BE5\u573A\u666F\u9002\u7528\u4E8EDubbo\u65B9\u6CD5\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u540C\u65F6\u6307\u5B9A\u4E86paramFromEntireBody\u548Cparams\uFF0Cparams\u5B57\u6BB5\u7684\u5185\u5BB9\u5C06\u88AB\u5FFD\u7565\u3002</p>
<p>\u901A\u8FC7\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u8C03\u7528dubbo\u670D\u52A1\uFF0C\u6CE8\u610F\u8BF7\u6C42\u7684body\u5FC5\u987B\u7B26\u5408json\u683C\u5F0F\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">$curl </span><span style="--0:#9ECBFF">"localhost/dubbo/hello"</span><span style="--0:#E1E4E8"> -X POST -d </span><span style="--0:#9ECBFF">'"abc"'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"result"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"Service [name :demoService , port : 20880] sayName(</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">abc</span><span style="--0:#79B8FF">\\"</span><span style="--0:#B392F0">) : Hello,abc"</span><span style="--0:#B392F0">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$curl &#x22;localhost/dubbo/hello&#x22; -X POST -d &#x27;&#x22;abc&#x22;&#x27;\x7F{&#x22;result&#x22;:&#x22;Service [name :demoService , port : 20880] sayName(\\&#x22;abc\\&#x22;) : Hello,abc&#x22;}"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E\u53C2\u8003">\u914D\u7F6E\u53C2\u8003</h2>
<p>Http2Rpc\u7684\u76F8\u5173\u914D\u7F6E\u9879\u53C2\u8003<a href="../dubbo-http2rpc/" referrerpolicy="unsafe-url">HTTP\u8F6CDubbo\u914D\u7F6E\u8BF4\u660E</a></p>`,n={title:"Higress \u5BF9\u63A5 Dubbo \u670D\u52A1",keywords:["Dubbo","discovery"],description:"\u5B9E\u73B0 Dubbo \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/dubbo.md",p=void 0,c=function(){return`
# Higress \u5BF9\u63A5 Dubbo \u670D\u52A1

Higress\u63D0\u4F9B\u4E86\u4ECEHTTP\u534F\u8BAE\u5230Dubbo\u534F\u8BAE\u8FDB\u884C\u8F6C\u6362\u7684\u529F\u80FD\uFF0C\u7528\u6237\u901A\u8FC7\u914D\u7F6E\u534F\u8BAE\u8F6C\u6362\uFF0C\u53EF\u4EE5\u5C06\u4E00\u4E2ADubbo\u670D\u52A1\u4EE5HTTP\u63A5\u53E3\u66B4\u9732\u51FA\u6765\uFF0C\u4ECE\u800C\u7528HTTP\u8BF7\u6C42\u5B9E\u73B0\u5BF9Dubbo\u63A5\u53E3\u7684\u8C03\u7528\u3002\u672C\u6587\u5C06\u901A\u8FC7\u4E00\u4E2A\u793A\u4F8B\u6765\u4ECB\u7ECD\u5982\u4F55\u7528Higress\u914D\u7F6EHTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u3002

## \u524D\u63D0\u6761\u4EF6
1. Higress\u76EE\u524D\u652F\u6301\u7684Dubbo\u6846\u67B6\u7684\u7248\u672C\u4E3A2.x\u3002\u82E5\u60A8\u4F7F\u7528Dubbo3.0\uFF0C\u8981\u6C42\u4F7F\u7528dubbo\u534F\u8BAE\uFF08\u76EE\u524D\u6682\u4E0D\u652F\u6301Triple\u534F\u8BAE\u3002Triple\u534F\u8BAE\u5E95\u5C42\u57FA\u4E8EgRPC\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4EE3\u7406\uFF0C\u65E0\u9700\u505A\u534F\u8BAE\u8F6C\u5316\uFF09\u3002

## \u90E8\u7F72Dubbo\u670D\u52A1

\u60A8\u53EF\u4EE5\u9009\u7528Naocs\u6216\u8005Zookeeper\u4EFB\u610F\u4E00\u79CD\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u90E8\u7F72\u4E00\u4E2ADubbo\u670D\u52A1\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u6587\u6863\uFF1A

https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/nacos/

https://cn.dubbo.apache.org/zh-cn/overview/what/ecosystem/registry/zookeeper/

\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u5DF2\u7ECF\u90E8\u7F72\u4E86\u5982\u4E0B\u4E00\u4E2ADubbo\u670D\u52A1\uFF0C\u5176\u670D\u52A1\u540D\u4E3Acom.alibaba.nacos.example.dubbo.service.DemoService\uFF0C\u5E76\u6307\u5B9A\u4E86\u8BE5\u670D\u52A1\u7684version\u4E3A\u201C1.0.0\u201D\uFF0Cgroup\u4E3A\u201Cdev\u201D\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5982\u4F55\u4E3A\u8BE5\u670D\u52A1\u914D\u7F6E\u534F\u8BAE\u8F6C\u6362\u3002

\`\`\`java
package com.alibaba.nacos.example.dubbo.service;

public interface DemoService {
    String sayName(String name);
}
\`\`\`
     
## \u901A\u8FC7Ingress\u8F6C\u53D1\u8BF7\u6C42\u5230Dubbo\u670D\u52A1
Higress\u53EF\u4EE5\u901A\u8FC7[McpBridge](./mcp-bridge.md)\u6765\u5BF9\u63A5Nacos\u6216\u8005Zookeeper\u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\u3002\u8FD9\u91CC\u6211\u4EEC\u4EE5Nacos\u4E3A\u4F8B\uFF0C\u5047\u8BBENaocs\u7684ip\u5730\u5740\u4E3A192.xxx.xx.32\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728K8s\u96C6\u7FA4\u4E2Dapply\u4EE5\u4E0B\u8D44\u6E90\u6765\u914D\u7F6EMcpBridge
\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: 192.xxx.xx.32
    nacosGroups:
    - DEFAULT_GROUP
    name: nacos-service-resource
    port: 8848
    type: nacos2
\`\`\`
\u901A\u8FC7McpBridge\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u4ECENacos\u4E2D\u53D1\u73B0Dubbo\u670D\u52A1\uFF0C\u5E76\u4E3A\u5176\u521B\u5EFA\u8DEF\u7531\u3002

\u63A5\u4E0B\u6765\u6211\u4EEC\u521B\u5EFA\u5982\u4E0BIngress\uFF0C\u4ECE\u800C\u521B\u5EFA\u4E00\u6761\u6307\u5411Dubbo\u670D\u52A1\u7684HTTP\u8DEF\u7531\uFF1A
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: providers:com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev.DEFAULT-GROUP.public.nacos
    higress.io/rpc-destination-name: httproute-http2rpc-demo
  name: httproute-http2rpc-demo-ingress
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /dubbo
        pathType: Prefix
\`\`\`
\u8FD9\u6837\uFF0Cpath\u524D\u7F00\u4E3A/dubbo\u7684\u8BF7\u6C42\u5C31\u4F1A\u88AB\u8DEF\u7531\u5230\u6211\u4EEC\u521A\u521A\u521B\u5EFA\u7684Dubbo\u670D\u52A1\u4E0A\u3002

## \u901A\u8FC7Higress\u81EA\u5B9A\u4E49\u7684CRD-Http2Rpc\u914D\u7F6EHTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219
\u7ECF\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u901A\u8FC7Ingress\u5C06path\u524D\u7F00\u4E3A/dubbo\u7684\u8BF7\u6C42\u8DEF\u7531\u5230\u6211\u4EEC\u7684Dubbo\u670D\u52A1\u4E0A\u3002\u4F46\u5149\u662F\u8FD9\u6837\u662F\u65E0\u6CD5\u6B63\u5E38\u901A\u4FE1\u7684\uFF0C\u56E0\u4E3ADubbo\u670D\u52A1\u4F7F\u7528\u7684\u662F\u5B9A\u5236\u7684Dubbo\u534F\u8BAE\uFF0C\u65E0\u6CD5\u5929\u7136\u4E0EHTTP\u534F\u8BAE\u8FDB\u884C\u517C\u5BB9\u3002\u56E0\u6B64\u63A5\u4E0B\u6765\u6211\u4EEC\u8FD8\u8981\u914D\u7F6E\u5177\u4F53\u7684HTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7528HTTP\u8BF7\u6C42\u6765\u8C03\u7528Dubbo\u670D\u52A1\u3002

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "GET"
      httpPath: "/dubbo/hello"
      params:
      - paramKey: p
        paramSource: QUERY
        paramType: "java.lang.String"
\`\`\`
\u5728\u4EE5\u4E0AHttp2Rpc\u4E2D\uFF0C\u6211\u4EEC\u914D\u7F6E\u4E86\u5C06path\u4E3A/dubbo/hello\u7684HTTP\u8BF7\u6C42\u8F6C\u53D1\u5230Dubbo\u670D\u52A1com.alibaba.nacos.example.dubbo.service.DemoService:1.0.0:dev\u4E2D\uFF0C\u5E76\u8C03\u7528\u5176sayName\u65B9\u6CD5\uFF0C\u800C\u8BE5\u65B9\u6CD5\u7684\u53C2\u6570\u5219\u901A\u8FC7HTTP url\u4E2D\u7684\u7684query\u53C2\u6570p\u6765\u6307\u5B9A\u3002

## \u8BF7\u6C42\u9A8C\u8BC1
\u901A\u8FC7\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0Bcurl\u547D\u4EE4\u6765\u8C03\u7528\u8FD9\u4E2Adubbo\u670D\u52A1\u4E86\uFF1A
\`\`\`bash
$curl "localhost/dubbo/hello?p=abc" 
{"result":"Service [name :demoService , port : 20880] sayName(\\"abc\\") : Hello,abc"}
\`\`\`

## \u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570
Http2Rpc\u652F\u6301\u5C06\u6574\u4E2A\u8BF7\u6C42body\u5E8F\u5217\u5316\u4E3ADubbo\u65B9\u6CD5\u7684\u5165\u53C2\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: Http2Rpc
metadata:
  name: httproute-http2rpc-demo
  namespace: higress-system
spec:
  dubbo: 
    service: com.alibaba.nacos.example.dubbo.service.DemoService
    version: 1.0.0
    group: dev
    methods: 
    - serviceMethod: sayName
      headersAttach: "*"
      httpMethods: 
      - "POST"
      httpPath: "/dubbo/hello"
      paramFromEntireBody:
        paramType: "java.lang.String"
\`\`\`
\u901A\u8FC7paramFromEntireBody\u5B57\u6BB5\uFF0C\u5373\u53EF\u5C06\u6574\u4E2A\u8BF7\u6C42body\u5E8F\u5217\u5316\u4E3ADubbo\u65B9\u6CD5\u7684\u5165\u53C2\u3002\u53C2\u6570\u7684\u7C7B\u578B\u901A\u8FC7paramFromEntireBody.paramType\u5B57\u6BB5\u6765\u6307\u5B9A\u3002\u8BE5\u573A\u666F\u9002\u7528\u4E8EDubbo\u65B9\u6CD5\u53EA\u6709\u4E00\u4E2A\u53C2\u6570\u7684\u60C5\u51B5\uFF0C\u5982\u679C\u540C\u65F6\u6307\u5B9A\u4E86paramFromEntireBody\u548Cparams\uFF0Cparams\u5B57\u6BB5\u7684\u5185\u5BB9\u5C06\u88AB\u5FFD\u7565\u3002

\u901A\u8FC7\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u8C03\u7528dubbo\u670D\u52A1\uFF0C\u6CE8\u610F\u8BF7\u6C42\u7684body\u5FC5\u987B\u7B26\u5408json\u683C\u5F0F\uFF1A
\`\`\`bash
$curl "localhost/dubbo/hello" -X POST -d '"abc"' 
{"result":"Service [name :demoService , port : 20880] sayName(\\"abc\\") : Hello,abc"}
\`\`\`


## \u914D\u7F6E\u53C2\u8003
Http2Rpc\u7684\u76F8\u5173\u914D\u7F6E\u9879\u53C2\u8003[HTTP\u8F6CDubbo\u914D\u7F6E\u8BF4\u660E](./dubbo-http2rpc.md)
`},t=function(){return s},d=function(){return[{depth:2,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:2,slug:"\u90E8\u7F72dubbo\u670D\u52A1",text:"\u90E8\u7F72Dubbo\u670D\u52A1"},{depth:2,slug:"\u901A\u8FC7ingress\u8F6C\u53D1\u8BF7\u6C42\u5230dubbo\u670D\u52A1",text:"\u901A\u8FC7Ingress\u8F6C\u53D1\u8BF7\u6C42\u5230Dubbo\u670D\u52A1"},{depth:2,slug:"\u901A\u8FC7higress\u81EA\u5B9A\u4E49\u7684crd-http2rpc\u914D\u7F6Ehttp\u5230dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219",text:"\u901A\u8FC7Higress\u81EA\u5B9A\u4E49\u7684CRD-Http2Rpc\u914D\u7F6EHTTP\u5230Dubbo\u7684\u534F\u8BAE\u8F6C\u6362\u89C4\u5219"},{depth:2,slug:"\u8BF7\u6C42\u9A8C\u8BC1",text:"\u8BF7\u6C42\u9A8C\u8BC1"},{depth:2,slug:"\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570",text:"\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u65B9\u6CD5\u53C2\u6570"},{depth:2,slug:"\u914D\u7F6E\u53C2\u8003",text:"\u914D\u7F6E\u53C2\u8003"}]},a=l((m,h,g)=>{const{layout:x,...i}=n;return i.file=e,i.url=p,r`${v()}${E(s)}`})});export{a as Content,u as __tla,t as compiledContent,a as default,e as file,n as frontmatter,d as getHeadings,c as rawContent,p as url};
