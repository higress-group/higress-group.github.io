import{c,__tla as d}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as F,__tla as E}from"./constant.6aDJg6hN.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let e,l,a,n,p,o,i,f=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u672C\u5730k8s\u73AF\u5883\u914D\u7F6E\u4E0E\u8FD0\u884C</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u4E3A\u4E86\u5728\u672C\u5730Kubernetes\uFF08k8s\uFF09\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u7F51\u5173\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A</p>
<h3 id="\u73AF\u5883\u51C6\u5907">\u73AF\u5883\u51C6\u5907</h3>
<p>\u786E\u4FDD\u4F60\u5DF2\u5177\u5907\u4EE5\u4E0B\u57FA\u7840\u73AF\u5883\uFF1A</p>
<ul>
<li>\u5B89\u88C5\u4E86<a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kubectl</a>\u3002</li>
<li>\u5BF9\u4E8EMac/Linux\u7528\u6237\uFF0C\u5177\u5907\u6267\u884CBash\u811A\u672C\u7684\u80FD\u529B\u3002</li>
<li>\u5BF9\u4E8EWindows\u7528\u6237\uFF0C\u5B89\u88C5\u4E86<a href="https://kind.sigs.k8s.io/docs/user/quick-start/#installation" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kind.exe</a>\u548C<a href="https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kubectl.exe</a>\u3002</li>
</ul>
<h3 id="\u9636\u6BB5\u4E00\u521B\u5EFA\u672C\u5730k8s\u96C6\u7FA4">\u9636\u6BB5\u4E00\uFF1A\u521B\u5EFA\u672C\u5730K8s\u96C6\u7FA4</h3>
<ol>
<li>
<p><strong>\u914D\u7F6E\u96C6\u7FA4</strong>: \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code dir="auto">cluster.conf</code>\u7684\u6587\u4EF6\uFF0C\u5185\u5BB9\u5E94\u5305\u542B\u8282\u70B9\u89D2\u8272\u548C\u989D\u5916\u7AEF\u53E3\u6620\u5C04\u914D\u7F6E\uFF0C\u4EE5\u786E\u4FDDHigress\u53EF\u4EE5\u901A\u8FC780\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Cluster</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kind.x-k8s.io/v1alpha4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nodes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">control-plane</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kubeadmConfigPatches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">kind: InitConfiguration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">nodeRegistration:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">kubeletExtraArgs:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">node-labels: "ingress-ready=true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">extraPortMappings:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- containerPort: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">hostPort: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">protocol: TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- containerPort: 443</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">hostPort: 443</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">protocol: TCP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind: Cluster\x7FapiVersion: kind.x-k8s.io/v1alpha4\x7Fnodes:\x7F- role: control-plane\x7F  kubeadmConfigPatches:\x7F  - |\x7F    kind: InitConfiguration\x7F    nodeRegistration:\x7F      kubeletExtraArgs:\x7F        node-labels: &#x22;ingress-ready=true&#x22;\x7F        extraPortMappings:\x7F        - containerPort: 80\x7F          hostPort: 80\x7F          protocol: TCP\x7F        - containerPort: 443\x7F          hostPort: 443\x7F          protocol: TCP"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u521B\u5EFA\u96C6\u7FA4</strong>: \u6839\u636E\u4F60\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\uFF1A</p>
<ul>
<li><strong>Mac/Linux</strong>:
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf\x7Fkubectl config use-context kind-higress"><div></div></button></div></figure></div>
</li>
<li><strong>Windows</strong>:
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind.exe create cluster --name higress --config=cluster.conf\x7Fkubectl.exe config use-context kind-higress"><div></div></button></div></figure></div>
</li>
</ul>
</li>
</ol>
<h3 id="\u9636\u6BB5\u4E8C\u5B89\u88C5higress">\u9636\u6BB5\u4E8C\uFF1A\u5B89\u88C5Higress</h3>
<ol start="3">
<li>
<p><strong>\u6DFB\u52A0Higress Helm\u4ED3\u5E93</strong>:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5B89\u88C5Higress\u5230\u672C\u5730\u96C6\u7FA4</strong>:
\u672C\u5730\u5B89\u88C5\u65F6\uFF0C\u4F7F\u7528<code dir="auto">global.local=true</code>\u6807\u5FD7\u6765\u6307\u793AHigress\u9002\u5E94\u672C\u5730\u73AF\u5883\uFF0C\u5E76\u5173\u95ED\u53EF\u89C2\u6D4B\u6027\u7279\u6027\uFF08\u5982\u679C\u4E0D\u9700\u8981\uFF09\u4EE5\u7B80\u5316\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="\u9636\u6BB5\u4E09\u914D\u7F6E\u793A\u4F8B\u670D\u52A1\u4E0E\u8DEF\u7531">\u9636\u6BB5\u4E09\uFF1A\u914D\u7F6E\u793A\u4F8B\u670D\u52A1\u4E0E\u8DEF\u7531</h3>
<ol start="5">
<li>
<p><strong>\u521B\u5EFA\u793A\u4F8B\u670D\u52A1</strong>\uFF08\u53EF\u9009\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u914D\u7F6E\uFF09:
\u4F7F\u7528\u63D0\u4F9B\u7684YAML\u6A21\u677F\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u670D\u52A1<code dir="auto">foo-app</code>\u53CA\u5176\u670D\u52A1<code dir="auto">foo-service</code>\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u8DEF\u7531\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x3C;&#x3C;</span><span style="--0:#9ECBFF">EOF</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">apiVersion: v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">kind: Pod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">name: foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">labels:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">app: foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">containers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">- name: foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">- "-text=foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">apiVersion: v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">kind: Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">name: foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">selector:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">app: foo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">ports:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">- port: 5678</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">EOF</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f - <<EOF\x7FapiVersion: v1\x7Fkind: Pod\x7Fmetadata:\x7F  name: foo-app\x7F  labels:\x7F    app: foo\x7Fspec:\x7F  containers:\x7F  - name: foo-app\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\x7F    args:\x7F    - &#x22;-text=foo&#x22;\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F  - port: 5678\x7FEOF"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u914D\u7F6E\u8DEF\u7531</strong>:</p>
<ul>
<li><strong>\u65B9\u6CD5\u4E00</strong>\uFF08\u63A8\u8350\uFF09: \u4F7F\u7528<a href="https://higress.io/zh-cn/docs/ops/hgctl" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Console</a>\u56FE\u5F62\u754C\u9762\u914D\u7F6E\uFF0C\u901A\u8FC7<code dir="auto">hgctl dashboard console</code>\u547D\u4EE4\u8BBF\u95EE\u63A7\u5236\u53F0\u540E\uFF0C\u6839\u636EUI\u6307\u5F15\u521B\u5EFA\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\u3002</li>
<li><strong>\u65B9\u6CD5\u4E8C</strong>: \u76F4\u63A5\u901A\u8FC7Ingress CRD\u914D\u7F6E\uFF0C\u4F7F\u7528\u5982\u4E0BYAML\u521B\u5EFAIngress\u8D44\u6E90\u6307\u5411\u670D\u52A1<code dir="auto">foo-service</code>\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x3C;&#x3C;</span><span style="--0:#9ECBFF">EOF</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">name: foo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">ingressclass.kubernetes.io/is-default-class: "true"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">- host: foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- pathType: Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">path: "/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">path: /</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">name: foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">number: 5678</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">EOF</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f - <<EOF\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7F  annotations:\x7F    ingressclass.kubernetes.io/is-default-class: &#x22;true&#x22;\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - pathType: Prefix\x7F        path: &#x22;/foo&#x22;\x7F        path: /\x7F        backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678\x7FEOF"><div></div></button></div></figure></div>
</li>
</ul>
</li>
</ol>
<h3 id="\u9636\u6BB5\u56DB\u8BF7\u6C42\u9A8C\u8BC1">\u9636\u6BB5\u56DB\uFF1A\u8BF7\u6C42\u9A8C\u8BC1</h3>
<ol start="7">
<li><strong>\u9A8C\u8BC1\u914D\u7F6E</strong>:
\u786E\u8BA4Higress\u5DF2\u6210\u529F\u914D\u7F6E\u5E76\u8DEF\u7531\u5230\u670D\u52A1\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF08\u786E\u4FDD\u4F60\u7684\u672C\u5730DNS\u89E3\u6790\u6216/etc/hosts\u6587\u4EF6\u6B63\u786E\u8BBE\u7F6E\u4E86<code dir="auto">foo.bar.com</code>\u6307\u5411Higress\u7684IP\u5730\u5740\uFF09\uFF1A
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://foo.bar.com/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://foo.bar.com/foo -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="\u603B\u7ED3">\u603B\u7ED3</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5982\u4F55\u5728\u672C\u5730Kubernetes\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u7F51\u5173\uFF0C\u5305\u62EC\u96C6\u7FA4\u7684\u521B\u5EFA\u3001Higress\u7684\u5B89\u88C5\u3001\u670D\u52A1\u53CA\u8DEF\u7531\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u6700\u7EC8\u7684\u9A8C\u8BC1\u8FC7\u7A0B\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u670D\u52A1\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5E76\u786E\u4FDD\u6BCF\u4E00\u6B65\u64CD\u4F5C\u5747\u6267\u884C\u6210\u529F\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5FEB\u901F\u5F00\u59CB</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17150" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-17001",title:"higress \u672C\u5730k8s\u73AF\u5883\u914D\u7F6E\u4E0E\u8FD0\u884C",date:"2024-09-26",category:"expertConsultation",description:"\u4E3A\u4E86\u5728\u672C\u5730Kubernetes\uFF08k8s\uFF09\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u7F51\u5173\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A### \u73AF\u5883\u51C6\u5907\u786E\u4FDD\u4F60\u5DF2\u5177\u5907\u4EE5\u4E0B\u57FA\u7840\u73AF\u5883\uFF1A- \u5B89\u88C5\u4E86[kubectl](https://kubernetes.io/docs/tasks/tools/install-ku",tags:["higress","\u672C\u5730","k8s","\u73AF\u5883","\u914D\u7F6E","\u8FD0\u884C"],keywords:["higress","\u672C\u5730","k8s","\u73AF\u5883","\u914D\u7F6E","\u8FD0\u884C"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17001.md",i=void 0,o=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u672C\u5730k8s\u73AF\u5883\u914D\u7F6E\u4E0E\u8FD0\u884C  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u4E3A\u4E86\u5728\u672C\u5730Kubernetes\uFF08k8s\uFF09\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u7F51\u5173\uFF0C\u6211\u4EEC\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A

### \u73AF\u5883\u51C6\u5907

\u786E\u4FDD\u4F60\u5DF2\u5177\u5907\u4EE5\u4E0B\u57FA\u7840\u73AF\u5883\uFF1A
- \u5B89\u88C5\u4E86[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)\u3002
- \u5BF9\u4E8EMac/Linux\u7528\u6237\uFF0C\u5177\u5907\u6267\u884CBash\u811A\u672C\u7684\u80FD\u529B\u3002
- \u5BF9\u4E8EWindows\u7528\u6237\uFF0C\u5B89\u88C5\u4E86[kind.exe](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)\u548C[kubectl.exe](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)\u3002

### \u9636\u6BB5\u4E00\uFF1A\u521B\u5EFA\u672C\u5730K8s\u96C6\u7FA4

1. **\u914D\u7F6E\u96C6\u7FA4**: \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\`cluster.conf\`\u7684\u6587\u4EF6\uFF0C\u5185\u5BB9\u5E94\u5305\u542B\u8282\u70B9\u89D2\u8272\u548C\u989D\u5916\u7AEF\u53E3\u6620\u5C04\u914D\u7F6E\uFF0C\u4EE5\u786E\u4FDDHigress\u53EF\u4EE5\u901A\u8FC780\u548C443\u7AEF\u53E3\u8BBF\u95EE\uFF1A
   \`\`\`yaml
   kind: Cluster
   apiVersion: kind.x-k8s.io/v1alpha4
   nodes:
   - role: control-plane
     kubeadmConfigPatches:
     - |
       kind: InitConfiguration
       nodeRegistration:
         kubeletExtraArgs:
           node-labels: "ingress-ready=true"
           extraPortMappings:
           - containerPort: 80
             hostPort: 80
             protocol: TCP
           - containerPort: 443
             hostPort: 443
             protocol: TCP
   \`\`\`
   
2. **\u521B\u5EFA\u96C6\u7FA4**: \u6839\u636E\u4F60\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\uFF1A
   - **Mac/Linux**:
     \`\`\`bash
     kind create cluster --name higress --config=cluster.conf
     kubectl config use-context kind-higress
     \`\`\`
   - **Windows**:
     \`\`\`bash
     kind.exe create cluster --name higress --config=cluster.conf
     kubectl.exe config use-context kind-higress
     \`\`\`

### \u9636\u6BB5\u4E8C\uFF1A\u5B89\u88C5Higress

3. **\u6DFB\u52A0Higress Helm\u4ED3\u5E93**:
   \`\`\`bash
   helm repo add higress.io https://higress.io/helm-charts
   \`\`\`

4. **\u5B89\u88C5Higress\u5230\u672C\u5730\u96C6\u7FA4**:
   \u672C\u5730\u5B89\u88C5\u65F6\uFF0C\u4F7F\u7528\`global.local=true\`\u6807\u5FD7\u6765\u6307\u793AHigress\u9002\u5E94\u672C\u5730\u73AF\u5883\uFF0C\u5E76\u5173\u95ED\u53EF\u89C2\u6D4B\u6027\u7279\u6027\uFF08\u5982\u679C\u4E0D\u9700\u8981\uFF09\u4EE5\u7B80\u5316\u914D\u7F6E\uFF1A
   \`\`\`bash
   helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
   \`\`\`

### \u9636\u6BB5\u4E09\uFF1A\u914D\u7F6E\u793A\u4F8B\u670D\u52A1\u4E0E\u8DEF\u7531

5. **\u521B\u5EFA\u793A\u4F8B\u670D\u52A1**\uFF08\u53EF\u9009\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u914D\u7F6E\uFF09:
   \u4F7F\u7528\u63D0\u4F9B\u7684YAML\u6A21\u677F\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u670D\u52A1\`foo-app\`\u53CA\u5176\u670D\u52A1\`foo-service\`\uFF0C\u7528\u4E8E\u6D4B\u8BD5\u8DEF\u7531\u914D\u7F6E\uFF1A
   \`\`\`bash
   kubectl apply -f - <<EOF
   apiVersion: v1
   kind: Pod
   metadata:
     name: foo-app
     labels:
       app: foo
   spec:
     containers:
     - name: foo-app
       image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
       args:
       - "-text=foo"
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: foo-service
   spec:
     selector:
       app: foo
     ports:
     - port: 5678
   EOF
   \`\`\`

6. **\u914D\u7F6E\u8DEF\u7531**:
   - **\u65B9\u6CD5\u4E00**\uFF08\u63A8\u8350\uFF09: \u4F7F\u7528[Higress Console](https://higress.io/zh-cn/docs/ops/hgctl)\u56FE\u5F62\u754C\u9762\u914D\u7F6E\uFF0C\u901A\u8FC7\`hgctl dashboard console\`\u547D\u4EE4\u8BBF\u95EE\u63A7\u5236\u53F0\u540E\uFF0C\u6839\u636EUI\u6307\u5F15\u521B\u5EFA\u57DF\u540D\u548C\u8DEF\u7531\u89C4\u5219\u3002
   - **\u65B9\u6CD5\u4E8C**: \u76F4\u63A5\u901A\u8FC7Ingress CRD\u914D\u7F6E\uFF0C\u4F7F\u7528\u5982\u4E0BYAML\u521B\u5EFAIngress\u8D44\u6E90\u6307\u5411\u670D\u52A1\`foo-service\`\uFF1A
     \`\`\`bash
     kubectl apply -f - <<EOF
     apiVersion: networking.k8s.io/v1
     kind: Ingress
     metadata:
       name: foo
       annotations:
         ingressclass.kubernetes.io/is-default-class: "true"
     spec:
       ingressClassName: higress
       rules:
       - host: foo.bar.com
         http:
           paths:
           - pathType: Prefix
             path: "/foo"
             path: /
             backend:
               service:
                 name: foo-service
                 port:
                   number: 5678
     EOF
     \`\`\`

### \u9636\u6BB5\u56DB\uFF1A\u8BF7\u6C42\u9A8C\u8BC1

7. **\u9A8C\u8BC1\u914D\u7F6E**:
   \u786E\u8BA4Higress\u5DF2\u6210\u529F\u914D\u7F6E\u5E76\u8DEF\u7531\u5230\u670D\u52A1\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF08\u786E\u4FDD\u4F60\u7684\u672C\u5730DNS\u89E3\u6790\u6216/etc/hosts\u6587\u4EF6\u6B63\u786E\u8BBE\u7F6E\u4E86\`foo.bar.com\`\u6307\u5411Higress\u7684IP\u5730\u5740\uFF09\uFF1A
   \`\`\`bash
   curl http://foo.bar.com/foo -H 'host: foo.bar.com'
   \`\`\`

### \u603B\u7ED3

\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u8BF4\u660E\u4E86\u5982\u4F55\u5728\u672C\u5730Kubernetes\u73AF\u5883\u4E2D\u914D\u7F6E\u4E0E\u8FD0\u884CHigress\u7F51\u5173\uFF0C\u5305\u62EC\u96C6\u7FA4\u7684\u521B\u5EFA\u3001Higress\u7684\u5B89\u88C5\u3001\u670D\u52A1\u53CA\u8DEF\u7531\u7684\u914D\u7F6E\uFF0C\u4EE5\u53CA\u6700\u7EC8\u7684\u9A8C\u8BC1\u8FC7\u7A0B\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5408\u9002\u7684\u670D\u52A1\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5E76\u786E\u4FDD\u6BCF\u4E00\u6B65\u64CD\u4F5C\u5747\u6267\u884C\u6210\u529F\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5FEB\u901F\u5F00\u59CB 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17150)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return s},p=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u73AF\u5883\u51C6\u5907",text:"\u73AF\u5883\u51C6\u5907"},{depth:3,slug:"\u9636\u6BB5\u4E00\u521B\u5EFA\u672C\u5730k8s\u96C6\u7FA4",text:"\u9636\u6BB5\u4E00\uFF1A\u521B\u5EFA\u672C\u5730K8s\u96C6\u7FA4"},{depth:3,slug:"\u9636\u6BB5\u4E8C\u5B89\u88C5higress",text:"\u9636\u6BB5\u4E8C\uFF1A\u5B89\u88C5Higress"},{depth:3,slug:"\u9636\u6BB5\u4E09\u914D\u7F6E\u793A\u4F8B\u670D\u52A1\u4E0E\u8DEF\u7531",text:"\u9636\u6BB5\u4E09\uFF1A\u914D\u7F6E\u793A\u4F8B\u670D\u52A1\u4E0E\u8DEF\u7531"},{depth:3,slug:"\u9636\u6BB5\u56DB\u8BF7\u6C42\u9A8C\u8BC1",text:"\u9636\u6BB5\u56DB\uFF1A\u8BF7\u6C42\u9A8C\u8BC1"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=c((g,h,u)=>{const{layout:C,...t}=n;return t.file=a,t.url=i,r`${v()}${F(s)}`})});export{e as Content,f as __tla,l as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,o as rawContent,i as url};
