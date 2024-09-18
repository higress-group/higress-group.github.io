import{c as d,__tla as r}from"./astro-component.cI6d52vQ.js";import{r as c,m as E,u as v,__tla as y}from"./constant.CvqqnJGx.js";import{__tla as g}from"./astro/assets-service.Da9pL5MS.js";let e,p,a,n,l,o,t,h=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u672C\u5730k8s\u73AF\u5883\u914D\u7F6E\u4E0E\u8FD0\u884C</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u5728\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u4E8E\u672C\u5730Kubernetes\uFF08K8s\uFF09\u73AF\u5883\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\u64CD\u4F5C\uFF1A</p>
<h3 id="\u9636\u6BB5\u4E00\u73AF\u5883\u51C6\u5907\u4E0Ehigress\u5B89\u88C5"><strong>\u9636\u6BB5\u4E00\uFF1A\u73AF\u5883\u51C6\u5907\u4E0EHigress\u5B89\u88C5</strong></h3>
<h4 id="\u6B65\u9AA41-\u51C6\u5907kubernetes\u96C6\u7FA4"><strong>\u6B65\u9AA41: \u51C6\u5907Kubernetes\u96C6\u7FA4</strong></h4>
<ul>
<li>
<p><strong>\u5BF9\u4E8E\u5DF2\u6709\u672C\u5730K8s\u96C6\u7FA4</strong>: \u786E\u4FDD\u60A8\u7684\u96C6\u7FA4\u5DF2\u6B63\u786E\u5B89\u88C5\u5E76\u8FD0\u884C\u3002</p>
</li>
<li>
<p><strong>\u65B0\u5EFAK8s\u96C6\u7FA4\uFF08\u5982\u65E0\u73B0\u6210\u96C6\u7FA4\uFF09</strong>: \u53EF\u4EE5\u4F7F\u7528<a href="https://kind.sigs.k8s.io/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kind</a>\u5DE5\u5177\u5FEB\u901F\u642D\u5EFA\u672C\u5730\u96C6\u7FA4\u3002\u6267\u884C\u547D\u4EE4\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf"><div></div></button></div></figure></div>
<p>\u5176\u4E2D<code dir="auto">cluster.conf</code>\u5E94\u5305\u542B\u9488\u5BF9Higress\u7684\u5FC5\u8981\u914D\u7F6E\uFF0C\u6BD4\u5982\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u548C\u989D\u5916\u7AEF\u53E3\u6620\u5C04\u3002</p>
</li>
</ul>
<h4 id="\u6B65\u9AA42-\u914D\u7F6E\u8282\u70B9\u4EE5\u652F\u6301ingress\u6D41\u91CF"><strong>\u6B65\u9AA42: \u914D\u7F6E\u8282\u70B9\u4EE5\u652F\u6301Ingress\u6D41\u91CF</strong></h4>
<ul>
<li>\u786E\u4FDD\u81F3\u5C11\u4E00\u4E2A\u8282\u70B9\u88AB\u6807\u8BB0\u4E3A<code dir="auto">ingress-ready=true</code>\uFF0C\u5E76\u5F00\u653E80\u548C443\u7AEF\u53E3\u6620\u5C04\u81F3\u4E3B\u673A\uFF0C\u5982\u53C2\u8003\u5185\u5BB9\u6240\u793A\u8FDB\u884C<code dir="auto">kubeadmConfigPatches</code>\u914D\u7F6E\u3002</li>
</ul>
<h4 id="\u6B65\u9AA43-\u6DFB\u52A0higress-helm\u4ED3\u5E93\u5E76\u5B89\u88C5"><strong>\u6B65\u9AA43: \u6DFB\u52A0Higress Helm\u4ED3\u5E93\u5E76\u5B89\u88C5</strong></h4>
<ul>
<li>\u6DFB\u52A0Higress Helm\u4ED3\u5E93\u5230\u4F60\u7684\u7CFB\u7EDF\u4E2D\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
</li>
<li>\u5B89\u88C5Higress\uFF0C\u7279\u522B\u6307\u5B9A\u4E3A\u672C\u5730\u90E8\u7F72\u6A21\u5F0F\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system higress.io/higress \\\x7F  --create-namespace \\\x7F  --render-subchart-notes \\\x7F  --set global.local=true \\\x7F  --set higress-console.o11y.enabled=false"><div></div></button></div></figure></div>
</li>
</ul>
<h3 id="\u9636\u6BB5\u4E8C\u914D\u7F6Eingress\u89C4\u5219"><strong>\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6EIngress\u89C4\u5219</strong></h3>
<h4 id="\u6B65\u9AA44-\u521B\u5EFA\u793A\u4F8B\u670D\u52A1\u4E0Eingress\u8D44\u6E90"><strong>\u6B65\u9AA44: \u521B\u5EFA\u793A\u4F8B\u670D\u52A1\u4E0EIngress\u8D44\u6E90</strong></h4>
<ul>
<li>
<p>\u5047\u8BBE\u60A8\u5DF2\u6709\u4E00\u4E2A\u670D\u52A1\uFF08\u6216\u6309\u7167\u63D0\u4F9B\u7684YAML\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u670D\u52A1<code dir="auto">foo-app</code>\uFF09\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u793A\u4F8B\u670D\u52A1YAML</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u793A\u4F8B\u670D\u52A1YAML\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F    - protocol: TCP\x7F      port: 80\x7F      targetPort: 80"><div></div></button></div></figure></div>
</li>
<li>
<p>\u521B\u5EFA\u4E00\u4E2AHigress Ingress\u8D44\u6E90\uFF0C\u6307\u5411\u60A8\u7684\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u521B\u5EFA\u8DEF\u7531<code dir="auto">http://foo.bar.com/foo</code>\u81F3\u670D\u52A1<code dir="auto">foo-service</code>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress.higress.io/rewrite-target</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo-ingress\x7F  annotations:\x7F    ingress.higress.io/rewrite-target: /\x7Fspec:\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - path: /foo\x7F        pathType: Prefix\x7F        backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 80"><div></div></button></div></figure></div>
</li>
</ul>
<h3 id="\u9636\u6BB5\u4E09\u9A8C\u8BC1\u4E0E\u8C03\u8BD5"><strong>\u9636\u6BB5\u4E09\uFF1A\u9A8C\u8BC1\u4E0E\u8C03\u8BD5</strong></h3>
<h4 id="\u6B65\u9AA45-\u8BBF\u95EE\u4E0E\u9A8C\u8BC1"><strong>\u6B65\u9AA45: \u8BBF\u95EE\u4E0E\u9A8C\u8BC1</strong></h4>
<ul>
<li>\u5728\u5B8C\u6210\u4E0A\u8FF0\u6B65\u9AA4\u540E\uFF0C\u5C1D\u8BD5\u901A\u8FC7\u672C\u5730\u6D4F\u89C8\u5668\u8BBF\u95EE<code dir="auto">http://foo.bar.com/foo</code>\uFF0C\u60A8\u5E94\u8BE5\u80FD\u770B\u5230\u7531\u670D\u52A1\u8FD4\u56DE\u7684\u201Dfoo\u201D\u6587\u672C\u3002</li>
<li>\u5982\u679C\u4F7F\u7528\u7684\u662F\u73B0\u6709\u7684\u96C6\u7FA4\u4E14\u76F4\u63A5\u8BBF\u95EE\u4E0D\u6210\u529F\uFF0C\u53EF\u80FD\u9700\u8981\u6267\u884C\u7AEF\u53E3\u8F6C\u53D1\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">80:80</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">443:443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443"><div></div></button></div></figure></div>
</li>
</ul>
<h3 id="\u89E3\u91CA\u8BF4\u660E"><strong>\u89E3\u91CA\u8BF4\u660E</strong></h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u9996\u5148\u786E\u4FDD\u4E86\u672C\u5730Kubernetes\u96C6\u7FA4\u7684\u6B63\u786E\u914D\u7F6E\u4EE5\u652F\u6491Higress\u7684\u90E8\u7F72\u9700\u6C42\uFF0C\u7279\u522B\u662F\u5BF9Ingress\u6D41\u91CF\u7684\u652F\u6301\u3002\u63A5\u7740\uFF0C\u901A\u8FC7Helm\u56FE\u8868\u5B89\u88C5Higress\uFF0C\u5E76\u8C03\u6574\u5FC5\u8981\u7684\u8BBE\u7F6E\u4EE5\u9002\u5E94\u672C\u5730\u73AF\u5883\u3002\u6700\u540E\uFF0C\u901A\u8FC7\u521B\u5EFAIngress\u8D44\u6E90\uFF0C\u5B9E\u73B0\u5BF9\u5916\u670D\u52A1\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u786E\u4FDD\u5916\u90E8\u8BF7\u6C42\u80FD\u591F\u88AB\u6B63\u786E\u5730\u8F6C\u53D1\u81F3\u76EE\u6807\u670D\u52A1\u3002\u6574\u4E2A\u8FC7\u7A0B\u8986\u76D6\u4E86\u4ECE\u73AF\u5883\u642D\u5EFA\u5230\u670D\u52A1\u914D\u7F6E\u7684\u5B8C\u6574\u6D41\u7A0B\uFF0C\u65E8\u5728\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u5728\u672C\u5730K8s\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17010" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-17001",title:"higress \u672C\u5730k8s\u73AF\u5883\u914D\u7F6E\u4E0E\u8FD0\u884C",date:"2024-09-11",category:"expertConsultation",description:"\u5728\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u4E8E\u672C\u5730Kubernetes\uFF08K8s\uFF09\u73AF\u5883\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\u64CD\u4F5C\uFF1A### **\u9636\u6BB5\u4E00\uFF1A\u73AF\u5883\u51C6\u5907\u4E0EHigress\u5B89\u88C5**#### **\u6B65\u9AA41: \u51C6\u5907Kubernetes\u96C6\u7FA4**- **\u5BF9\u4E8E\u5DF2\u6709\u672C\u5730K8s\u96C6\u7FA4**: \u786E\u4FDD\u60A8\u7684\u96C6\u7FA4\u5DF2\u6B63\u786E\u5B89\u88C5\u5E76\u8FD0\u884C\u3002- **\u65B0\u5EFAK8s\u96C6\u7FA4\uFF08\u5982"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17001.md",t=void 0,o=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u672C\u5730k8s\u73AF\u5883\u914D\u7F6E\u4E0E\u8FD0\u884C  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u5728\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u4E8E\u672C\u5730Kubernetes\uFF08K8s\uFF09\u73AF\u5883\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\u64CD\u4F5C\uFF1A

### **\u9636\u6BB5\u4E00\uFF1A\u73AF\u5883\u51C6\u5907\u4E0EHigress\u5B89\u88C5**

#### **\u6B65\u9AA41: \u51C6\u5907Kubernetes\u96C6\u7FA4**
- **\u5BF9\u4E8E\u5DF2\u6709\u672C\u5730K8s\u96C6\u7FA4**: \u786E\u4FDD\u60A8\u7684\u96C6\u7FA4\u5DF2\u6B63\u786E\u5B89\u88C5\u5E76\u8FD0\u884C\u3002
- **\u65B0\u5EFAK8s\u96C6\u7FA4\uFF08\u5982\u65E0\u73B0\u6210\u96C6\u7FA4\uFF09**: \u53EF\u4EE5\u4F7F\u7528[kind](https://kind.sigs.k8s.io/)\u5DE5\u5177\u5FEB\u901F\u642D\u5EFA\u672C\u5730\u96C6\u7FA4\u3002\u6267\u884C\u547D\u4EE4\u5982\u4E0B\uFF1A
  \`\`\`bash
  kind create cluster --name higress --config=cluster.conf
  \`\`\`

  \u5176\u4E2D\`cluster.conf\`\u5E94\u5305\u542B\u9488\u5BF9Higress\u7684\u5FC5\u8981\u914D\u7F6E\uFF0C\u6BD4\u5982\u6307\u5B9A\u8282\u70B9\u6807\u7B7E\u548C\u989D\u5916\u7AEF\u53E3\u6620\u5C04\u3002

#### **\u6B65\u9AA42: \u914D\u7F6E\u8282\u70B9\u4EE5\u652F\u6301Ingress\u6D41\u91CF**
- \u786E\u4FDD\u81F3\u5C11\u4E00\u4E2A\u8282\u70B9\u88AB\u6807\u8BB0\u4E3A\`ingress-ready=true\`\uFF0C\u5E76\u5F00\u653E80\u548C443\u7AEF\u53E3\u6620\u5C04\u81F3\u4E3B\u673A\uFF0C\u5982\u53C2\u8003\u5185\u5BB9\u6240\u793A\u8FDB\u884C\`kubeadmConfigPatches\`\u914D\u7F6E\u3002

#### **\u6B65\u9AA43: \u6DFB\u52A0Higress Helm\u4ED3\u5E93\u5E76\u5B89\u88C5**
- \u6DFB\u52A0Higress Helm\u4ED3\u5E93\u5230\u4F60\u7684\u7CFB\u7EDF\u4E2D\uFF1A
  \`\`\`bash
  helm repo add higress.io https://higress.io/helm-charts
  \`\`\`
- \u5B89\u88C5Higress\uFF0C\u7279\u522B\u6307\u5B9A\u4E3A\u672C\u5730\u90E8\u7F72\u6A21\u5F0F\uFF1A
  \`\`\`bash
  helm install higress -n higress-system higress.io/higress \\
    --create-namespace \\
    --render-subchart-notes \\
    --set global.local=true \\
    --set higress-console.o11y.enabled=false
  \`\`\`

### **\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6EIngress\u89C4\u5219**

#### **\u6B65\u9AA44: \u521B\u5EFA\u793A\u4F8B\u670D\u52A1\u4E0EIngress\u8D44\u6E90**
- \u5047\u8BBE\u60A8\u5DF2\u6709\u4E00\u4E2A\u670D\u52A1\uFF08\u6216\u6309\u7167\u63D0\u4F9B\u7684YAML\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u670D\u52A1\`foo-app\`\uFF09\uFF1A
  \`\`\`yaml
  # \u793A\u4F8B\u670D\u52A1YAML
  apiVersion: v1
  kind: Service
  metadata:
    name: foo-service
  spec:
    selector:
      app: foo
    ports:
      - protocol: TCP
        port: 80
        targetPort: 80
  \`\`\`

- \u521B\u5EFA\u4E00\u4E2AHigress Ingress\u8D44\u6E90\uFF0C\u6307\u5411\u60A8\u7684\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u521B\u5EFA\u8DEF\u7531\`http://foo.bar.com/foo\`\u81F3\u670D\u52A1\`foo-service\`\uFF1A
  \`\`\`yaml
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: foo-ingress
    annotations:
      ingress.higress.io/rewrite-target: /
  spec:
    rules:
    - host: foo.bar.com
      http:
        paths:
        - path: /foo
          pathType: Prefix
          backend:
            service:
              name: foo-service
              port:
                number: 80
  \`\`\`

### **\u9636\u6BB5\u4E09\uFF1A\u9A8C\u8BC1\u4E0E\u8C03\u8BD5**

#### **\u6B65\u9AA45: \u8BBF\u95EE\u4E0E\u9A8C\u8BC1**
- \u5728\u5B8C\u6210\u4E0A\u8FF0\u6B65\u9AA4\u540E\uFF0C\u5C1D\u8BD5\u901A\u8FC7\u672C\u5730\u6D4F\u89C8\u5668\u8BBF\u95EE\`http://foo.bar.com/foo\`\uFF0C\u60A8\u5E94\u8BE5\u80FD\u770B\u5230\u7531\u670D\u52A1\u8FD4\u56DE\u7684"foo"\u6587\u672C\u3002
- \u5982\u679C\u4F7F\u7528\u7684\u662F\u73B0\u6709\u7684\u96C6\u7FA4\u4E14\u76F4\u63A5\u8BBF\u95EE\u4E0D\u6210\u529F\uFF0C\u53EF\u80FD\u9700\u8981\u6267\u884C\u7AEF\u53E3\u8F6C\u53D1\uFF1A
  \`\`\`bash
  kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
  \`\`\`

### **\u89E3\u91CA\u8BF4\u660E**
\u4EE5\u4E0A\u6B65\u9AA4\u9996\u5148\u786E\u4FDD\u4E86\u672C\u5730Kubernetes\u96C6\u7FA4\u7684\u6B63\u786E\u914D\u7F6E\u4EE5\u652F\u6491Higress\u7684\u90E8\u7F72\u9700\u6C42\uFF0C\u7279\u522B\u662F\u5BF9Ingress\u6D41\u91CF\u7684\u652F\u6301\u3002\u63A5\u7740\uFF0C\u901A\u8FC7Helm\u56FE\u8868\u5B89\u88C5Higress\uFF0C\u5E76\u8C03\u6574\u5FC5\u8981\u7684\u8BBE\u7F6E\u4EE5\u9002\u5E94\u672C\u5730\u73AF\u5883\u3002\u6700\u540E\uFF0C\u901A\u8FC7\u521B\u5EFAIngress\u8D44\u6E90\uFF0C\u5B9E\u73B0\u5BF9\u5916\u670D\u52A1\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u786E\u4FDD\u5916\u90E8\u8BF7\u6C42\u80FD\u591F\u88AB\u6B63\u786E\u5730\u8F6C\u53D1\u81F3\u76EE\u6807\u670D\u52A1\u3002\u6574\u4E2A\u8FC7\u7A0B\u8986\u76D6\u4E86\u4ECE\u73AF\u5883\u642D\u5EFA\u5230\u670D\u52A1\u914D\u7F6E\u7684\u5B8C\u6574\u6D41\u7A0B\uFF0C\u65E8\u5728\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u5728\u672C\u5730K8s\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17010)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},p=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u9636\u6BB5\u4E00\u73AF\u5883\u51C6\u5907\u4E0Ehigress\u5B89\u88C5",text:"\u9636\u6BB5\u4E00\uFF1A\u73AF\u5883\u51C6\u5907\u4E0EHigress\u5B89\u88C5"},{depth:4,slug:"\u6B65\u9AA41-\u51C6\u5907kubernetes\u96C6\u7FA4",text:"\u6B65\u9AA41: \u51C6\u5907Kubernetes\u96C6\u7FA4"},{depth:4,slug:"\u6B65\u9AA42-\u914D\u7F6E\u8282\u70B9\u4EE5\u652F\u6301ingress\u6D41\u91CF",text:"\u6B65\u9AA42: \u914D\u7F6E\u8282\u70B9\u4EE5\u652F\u6301Ingress\u6D41\u91CF"},{depth:4,slug:"\u6B65\u9AA43-\u6DFB\u52A0higress-helm\u4ED3\u5E93\u5E76\u5B89\u88C5",text:"\u6B65\u9AA43: \u6DFB\u52A0Higress Helm\u4ED3\u5E93\u5E76\u5B89\u88C5"},{depth:3,slug:"\u9636\u6BB5\u4E8C\u914D\u7F6Eingress\u89C4\u5219",text:"\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6EIngress\u89C4\u5219"},{depth:4,slug:"\u6B65\u9AA44-\u521B\u5EFA\u793A\u4F8B\u670D\u52A1\u4E0Eingress\u8D44\u6E90",text:"\u6B65\u9AA44: \u521B\u5EFA\u793A\u4F8B\u670D\u52A1\u4E0EIngress\u8D44\u6E90"},{depth:3,slug:"\u9636\u6BB5\u4E09\u9A8C\u8BC1\u4E0E\u8C03\u8BD5",text:"\u9636\u6BB5\u4E09\uFF1A\u9A8C\u8BC1\u4E0E\u8C03\u8BD5"},{depth:4,slug:"\u6B65\u9AA45-\u8BBF\u95EE\u4E0E\u9A8C\u8BC1",text:"\u6B65\u9AA45: \u8BBF\u95EE\u4E0E\u9A8C\u8BC1"},{depth:3,slug:"\u89E3\u91CA\u8BF4\u660E",text:"\u89E3\u91CA\u8BF4\u660E"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=d((f,u,F)=>{const{layout:m,...i}=n;return i.file=a,i.url=t,c`${E()}${v(s)}`})});export{e as Content,h as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,o as rawContent,t as url};
