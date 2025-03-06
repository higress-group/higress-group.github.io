import{c as d,__tla as r}from"./astro-component.CXlaF79K.js";import{r as v,m as E,u as o,__tla as y}from"./constant.aRFXM4Q6.js";import{__tla as g}from"./astro/assets-service.DQopRnBr.js";let a,l,n,e,t,c,p,f=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h1 id="\u8DEF\u7531\u6307\u5411-grpc-\u670D\u52A1">\u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1</h1>
<h2 id="\u524D\u7F6E\u51C6\u5907">\u524D\u7F6E\u51C6\u5907</h2>
<ol>
<li>Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u76D1\u542C\u7684 HTTP \u7AEF\u53E3\u4E3A 80\u3002 \u4E3A\u4E86\u6D4B\u8BD5\u65B9\u4FBF\uFF0Cgateway \u7AEF\u53E3\u6620\u5C04\u90FD\u672C\u5730 127.0.0.1:80;</li>
<li>\u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 \u90E8\u7F72 grpc-httpbin \u670D\u52A1\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 9091\uFF1B</li>
<li>grpc-httpbin \u670D\u52A1\u5177\u4F53\u5185\u5BB9\u8BF7\u53C2\u8003 <a href="https://github.com/2456868764/httpbin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">github httpbin</a>;</li>
<li>grpcurl \u5DE5\u5177\u8BF7\u53C2\u8003 <a href="https://github.com/fullstorydev/grpcurl" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">github grpcurl</a>;</li>
</ol>
<h2 id="\u51C6\u5907\u540E\u7AEF-grpc-httpbin-\u670D\u52A1">\u51C6\u5907\u540E\u7AEF grpc-httpbin \u670D\u52A1</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9091</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9091</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">env</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POD_NAME</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NAMESPACE</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">10m</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: grpc-httpbin-v1\x7F  namespace: default\x7Fspec:\x7F  selector:\x7F    app: grpc-httpbin-v1\x7F  ports:\x7F    - protocol: TCP\x7F      port: 9091\x7F      targetPort: 9091\x7F---\x7FapiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: grpc-httpbin-v1\x7F  namespace: default\x7F  labels:\x7F    app: grpc-httpbin-v1\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: grpc-httpbin-v1\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: grpc-httpbin-v1\x7F    spec:\x7F      containers:\x7F      - name: grpc-httpbin-v1\x7F        image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1\x7F        env:\x7F        - name: POD_NAME\x7F          valueFrom:\x7F            fieldRef:\x7F              fieldPath: metadata.name\x7F        - name: NAMESPACE\x7F          valueFrom:\x7F            fieldRef:\x7F              fieldPath: metadata.namespace\x7F        resources:\x7F          requests:\x7F            cpu: 10m"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E\u8DEF\u7531">\u914D\u7F6E\u8DEF\u7531</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nginx.ingress.kubernetes.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GRPC"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-grpc-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">grpc-httpbin-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9091</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    nginx.ingress.kubernetes.io/backend-protocol: &#x22;GRPC&#x22;\x7F  name: ingress-grpc-httpbin\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: foo.com\x7F      http:\x7F        paths:\x7F          - path: /\x7F            pathType: Prefix\x7F            backend:\x7F              service:\x7F                name: grpc-httpbin-v1\x7F                port:\x7F                  number: 9091"><div></div></button></div></figure></div>
<p><code dir="auto">nginx.ingress.kubernetes.io/backend-protocol</code> Ingress Annotaion \u914D\u7F6E\u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3AHTTP\uFF0C\u652F\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548CGRPCS\u3002</p>
<h2 id="grpcurl-\u8C03\u7528\u6D4B\u8BD5">grpcurl \u8C03\u7528\u6D4B\u8BD5</h2>
<ol>
<li>\u5217\u51FA\u540E\u7AEF\u670D\u52A1\u5217\u8868</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpcurl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-plaintext</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-authority</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">foo.com</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">127.0.0.1:80</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">list</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpc.reflection.v1.ServerReflection</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpc.reflection.v1alpha.ServerReflection</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">order.OrderManagement</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grpcurl -plaintext -authority foo.com  127.0.0.1:80  list\x7F\x7Fgrpc.reflection.v1.ServerReflection\x7Fgrpc.reflection.v1alpha.ServerReflection\x7Forder.OrderManagement"><div></div></button></div></figure></div>
<ol start="2">
<li>\u8C03\u7528 sayHello \u65B9\u6CD5</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">grpcurl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-plaintext</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-authority</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">foo.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"name": "jun"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">127.0.0.1:80</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">order.OrderManagement/sayHello</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">"Hello jun"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grpcurl -plaintext -authority foo.com -d &#x27;{&#x22;name&#x22;: &#x22;jun&#x22;}&#x27; 127.0.0.1:80  order.OrderManagement/sayHello\x7F\x7F&#x22;Hello jun&#x22;"><div></div></button></div></figure></div>`,e={title:"\u914D\u7F6E\u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1",keywords:["ops","config","route","upstream","grpc"],description:"\u4ECB\u7ECD\u5982\u4F55\u4E3A\u4F7F\u7528 gRPC \u534F\u8BAE\u7684\u540E\u7AEF\u670D\u52A1\u914D\u7F6E\u8DEF\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/grpc-upstream.md",p=void 0,c=function(){return`\r
# \u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1\r
\r
## \u524D\u7F6E\u51C6\u5907\r
\r
1. Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u76D1\u542C\u7684 HTTP \u7AEF\u53E3\u4E3A 80\u3002 \u4E3A\u4E86\u6D4B\u8BD5\u65B9\u4FBF\uFF0Cgateway \u7AEF\u53E3\u6620\u5C04\u90FD\u672C\u5730 127.0.0.1:80;\r
2. \u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 \u90E8\u7F72 grpc-httpbin \u670D\u52A1\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 9091\uFF1B\r
3. grpc-httpbin \u670D\u52A1\u5177\u4F53\u5185\u5BB9\u8BF7\u53C2\u8003 [github httpbin](https://github.com/2456868764/httpbin);\r
4. grpcurl \u5DE5\u5177\u8BF7\u53C2\u8003 [github grpcurl](https://github.com/fullstorydev/grpcurl);\r
\r
## \u51C6\u5907\u540E\u7AEF grpc-httpbin \u670D\u52A1\r
\r
\`\`\`yaml\r
apiVersion: v1\r
kind: Service\r
metadata:\r
  name: grpc-httpbin-v1\r
  namespace: default\r
spec:\r
  selector:\r
    app: grpc-httpbin-v1\r
  ports:\r
    - protocol: TCP\r
      port: 9091\r
      targetPort: 9091\r
---\r
apiVersion: apps/v1\r
kind: Deployment\r
metadata:\r
  name: grpc-httpbin-v1\r
  namespace: default\r
  labels:\r
    app: grpc-httpbin-v1\r
spec:\r
  replicas: 1\r
  selector:\r
    matchLabels:\r
      app: grpc-httpbin-v1\r
  template:\r
    metadata:\r
      labels:\r
        app: grpc-httpbin-v1\r
    spec:\r
      containers:\r
      - name: grpc-httpbin-v1\r
        image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1\r
        env:\r
        - name: POD_NAME\r
          valueFrom:\r
            fieldRef:\r
              fieldPath: metadata.name\r
        - name: NAMESPACE\r
          valueFrom:\r
            fieldRef:\r
              fieldPath: metadata.namespace\r
        resources:\r
          requests:\r
            cpu: 10m\r
\`\`\`\r
\r
## \u914D\u7F6E\u8DEF\u7531\r
\r
\`\`\`yaml\r
apiVersion: networking.k8s.io/v1\r
kind: Ingress\r
metadata:\r
  annotations:\r
    nginx.ingress.kubernetes.io/backend-protocol: "GRPC"\r
  name: ingress-grpc-httpbin\r
  namespace: default\r
spec:\r
  ingressClassName: higress\r
  rules:\r
    - host: foo.com\r
      http:\r
        paths:\r
          - path: /\r
            pathType: Prefix\r
            backend:\r
              service:\r
                name: grpc-httpbin-v1\r
                port:\r
                  number: 9091\r
\`\`\`\r
\r
\`nginx.ingress.kubernetes.io/backend-protocol\` Ingress Annotaion \u914D\u7F6E\u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3AHTTP\uFF0C\u652F\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548CGRPCS\u3002\r
\r
## grpcurl \u8C03\u7528\u6D4B\u8BD5\r
\r
1. \u5217\u51FA\u540E\u7AEF\u670D\u52A1\u5217\u8868\r
\r
\`\`\`shell\r
grpcurl -plaintext -authority foo.com  127.0.0.1:80  list\r
\r
grpc.reflection.v1.ServerReflection\r
grpc.reflection.v1alpha.ServerReflection\r
order.OrderManagement\r
\`\`\`\r
2. \u8C03\u7528 sayHello \u65B9\u6CD5\r
\r
\`\`\`shell\r
grpcurl -plaintext -authority foo.com -d '{"name": "jun"}' 127.0.0.1:80  order.OrderManagement/sayHello\r
\r
"Hello jun"\r
\`\`\`\r
\r
\r
\r
\r
\r
`},l=function(){return s},t=function(){return[{depth:1,slug:"\u8DEF\u7531\u6307\u5411-grpc-\u670D\u52A1",text:"\u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1"},{depth:2,slug:"\u524D\u7F6E\u51C6\u5907",text:"\u524D\u7F6E\u51C6\u5907"},{depth:2,slug:"\u51C6\u5907\u540E\u7AEF-grpc-httpbin-\u670D\u52A1",text:"\u51C6\u5907\u540E\u7AEF grpc-httpbin \u670D\u52A1"},{depth:2,slug:"\u914D\u7F6E\u8DEF\u7531",text:"\u914D\u7F6E\u8DEF\u7531"},{depth:2,slug:"grpcurl-\u8C03\u7528\u6D4B\u8BD5",text:"grpcurl \u8C03\u7528\u6D4B\u8BD5"}]},a=d((u,h,m)=>{const{layout:x,...i}=e;return i.file=n,i.url=p,v`${E()}${o(s)}`})});export{a as Content,f as __tla,l as compiledContent,a as default,n as file,e as frontmatter,t as getHeadings,c as rawContent,p as url};
