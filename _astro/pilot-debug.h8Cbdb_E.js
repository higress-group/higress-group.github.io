import{c as d,__tla as r}from"./astro-component.CXlaF79K.js";import{r as c,m as E,u as y,__tla as g}from"./constant.V2td3cJV.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let e,p,a,n,l,o,t,u=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u80CC\u666F\u8BF4\u660E">\u80CC\u666F\u8BF4\u660E</h2>
<p>\u524D\u9762 SJC \u5728<a href="/blog/e2e-debug" referrerpolicy="unsafe-url">\u8FD9\u7BC7\u535A\u5BA2</a>\u4E2D\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress Controller\u3002\u800C Higress \u63A7\u5236\u9762\u9664\u4E86 Controller \u4E4B\u5916\u8FD8\u6709\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u90A3\u5C31\u662F Pilot\u3002\u672C\u6587\u5C31\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress Pilot\u3002</p>
<h2 id="\u73AF\u5883\u51C6\u5907">\u73AF\u5883\u51C6\u5907</h2>
<h3 id="\u6B65\u9AA4\u4E00\u514B\u9686\u4EE3\u7801\u4ED3\u5E93">\u6B65\u9AA4\u4E00\uFF1A\u514B\u9686\u4EE3\u7801\u4ED3\u5E93</h3>
<p>Pilot \u7684\u4EE3\u7801\u76EE\u524D\u662F\u4EE5 Istio \u4E0A\u6E38\u4ED3\u5E93 submodule \u52A0\u8865\u4E01\u6587\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728\u4E8E Higress \u7684\u4E3B\u4ED3\u5E93\u4E2D\u7684\uFF0C\u6240\u4EE5\u76F4\u63A5\u514B\u9686 Higress \u7684\u4EE3\u7801\u4E3B\u4ED3\u5E93 <a href="https://github.com/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress</a> \u5373\u53EF\u3002</p>
<h3 id="\u6B65\u9AA4\u4E8C\u51C6\u5907\u9879\u76EE\u4EE3\u7801">\u6B65\u9AA4\u4E8C\uFF1A\u51C6\u5907\u9879\u76EE\u4EE3\u7801</h3>
<p>Higress Pilot \u662F\u5728 Istio Pilot \u7684\u57FA\u7840\u4E0A\uFF0C\u57FA\u4E8E Higress \u81EA\u8EAB\u7684\u529F\u80FD\u9700\u6C42\u8FDB\u884C\u4E86\u4E8C\u6B21\u5F00\u53D1\u800C\u6784\u5EFA\u800C\u6210\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u91CC\u9700\u8981\u4E0B\u8F7D\u4E0A\u6E38\u4EE3\u7801\u4ED3\u5E93\u5E76\u5E94\u7528\u73B0\u6709\u7684\u8865\u4E01\u3002\u6211\u4EEC\u53EA\u9700\u8981\u6267\u884C\u4E0B\u9762\u8FD9\u6761\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="make prebuild"><div></div></button></div></figure></div>
<p><strong>Windows \u7528\u6237\u6CE8\u610F\u4E86\uFF01</strong></p>
<p>\u5982\u679C\u4F60\u662F\u5728 Windows \u4E0A\u8FDB\u884C\u5F00\u53D1\uFF0C\u5E76\u4E14\u6267\u884C <code dir="auto">make</code> \u547D\u4EE4\u6709\u56F0\u96BE\u7684\u8BDD\uFF0C\u4E0D\u8981\u6015\uFF0C\u6211\u4EEC\u4E5F\u6709\u529E\u6CD5\u3002\u56E0\u4E3A\u6574\u4E2A prebuild \u5176\u5B9E\u4E5F\u53EA\u505A\u4E86\u4E24\u4EF6\u4E8B\u60C5\u3002</p>
<p>\u7B2C\u4E00\u4EF6\u4E8B\u60C5\u662F\u521D\u59CB\u5316\u6240\u6709\u7684\u4E0A\u6E38\u5B50\u6A21\u5757\uFF0C\u53EA\u9700\u8981\u6267\u884C\u8FD9\u6837\u4E00\u6761\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">submodule</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--init</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git submodule update --init"><div></div></button></div></figure></div>
<p>\u7B2C\u4E8C\u4EF6\u4E8B\u60C5\u662F\u521D\u59CB\u5316\u5F00\u53D1\u76EE\u5F55\u3002\u8FD9\u4E00\u6B65\u9AA4\u6267\u884C\u7684\u5C31\u662F <code dir="auto">tools/hack/prebuild.sh</code>\u3002\u5927\u5BB6\u53EF\u4EE5\u76F4\u63A5\u5728 Cygwin \u6216\u8005 Git Bash \u7B49\u7C7B Linux \u7EC8\u7AEF\u4E0B\u6267\u884C\u8FD9\u4E2A\u811A\u672C\u6587\u4EF6\u3002</p>
<p>\u5982\u679C\u5728\u5E94\u7528\u8865\u4E01\u7684\u65F6\u5019\u51FA\u73B0\u4E86\u548C\u6362\u884C\u7B26\u6709\u5173\u7684\u62A5\u9519\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7F16\u8F91 <code dir="auto">prebuild.sh</code>\uFF0C\u7ED9\u4E24\u5904 <code dir="auto">patch</code> \u547D\u4EE4\u589E\u52A0 <code dir="auto">--binary</code> \u53C2\u6570\u5373\u53EF\u3002</p>
<p><img src="/img/blog/pilot-debug/patch-binary.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h3 id="\u6B65\u9AA4\u4E09\u5B89\u88C5-higress">\u6B65\u9AA4\u4E09\uFF1A\u5B89\u88C5 Higress</h3>
<p>\u65E2\u7136\u53EA\u662F\u8C03\u8BD5 pilot\uFF0C\u90A3\u4E48\u5176\u4ED6\u7EC4\u4EF6\u8FD8\u662F\u8981\u590D\u7528\u73B0\u6709 Higress \u96C6\u7FA4\u91CC\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728\u672C\u5730\u914D\u7F6E\u4E00\u4E2A Higress \u96C6\u7FA4\u3002\u5927\u5BB6\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A<a href="/docs/latest/user/quickstart" referrerpolicy="unsafe-url">\u94FE\u63A5</a>\u3002</p>
<h2 id="\u5F00\u53D1\u4E0E\u8C03\u8BD5">\u5F00\u53D1\u4E0E\u8C03\u8BD5</h2>
<h3 id="\u672C\u5730\u5F00\u53D1">\u672C\u5730\u5F00\u53D1</h3>
<p>\u672C\u5730\u5F00\u53D1\u63A8\u8350\u4F7F\u7528 IDE JetBrains GoLand\u3002\u6211\u4EEC\u76F4\u63A5\u5728 GoLand \u4E2D\u6253\u5F00 <code dir="auto">external/istio</code> \u76EE\u5F55\uFF0C\u6B63\u5E38\u8FDB\u884C\u5F00\u53D1\u5373\u53EF\u3002</p>
<p><img src="/img/blog/pilot-debug/goland-project.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h3 id="\u8C03\u8BD5\u8FD0\u884C">\u8C03\u8BD5\u8FD0\u884C</h3>
<p><strong>\u73AF\u5883\u51C6\u5907</strong></p>
<p>\u7B2C\u4E00\u6B65\uFF1A\u63D0\u53D6\u914D\u7F6E\u6587\u4EF6</p>
<p>\u5728\u672C\u5730\u4EFB\u610F\u4E00\u4E2A\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u7136\u540E\u5728\u8BE5\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o=jsonpath=</span><span style="--0:#9ECBFF">'{.data.mesh}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./mesh</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o=jsonpath=</span><span style="--0:#9ECBFF">'{.data.meshNetworks}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./meshNetworks</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get configmap higress-config -n higress-system -o=jsonpath=&#x27;{.data.mesh}&#x27; > ./mesh\x7Fkubectl get configmap higress-config -n higress-system -o=jsonpath=&#x27;{.data.meshNetworks}&#x27; > ./meshNetworks"><div></div></button></div></figure></div>
<p>\u7B2C\u4E8C\u6B65\uFF1A\u8F6C\u53D1 controller \u7AEF\u53E3</p>
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5C06 controller \u7684 xDS \u670D\u52A1\u7AEF\u53E3\u8F6C\u53D1\u81F3\u672C\u5730\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">deployment/higress-controller</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">15051</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward deployment/higress-controller -n higress-system 15051"><div></div></button></div></figure></div>
<p><strong>\u4EE3\u7801\u8C03\u6574</strong></p>
<p>\u5982\u679C\u8981\u8C03\u8BD5\u4E0E TLS \u8BC1\u4E66\u4E0B\u53D1\u7684\u76F8\u5173\u529F\u80FD\uFF0C\u5219\u9700\u8981\u5728 <code dir="auto">pilot/pkg/xds/ads.go</code> \u7684 <code dir="auto">initConnection</code> \u51FD\u6570\u4E2D\u6DFB\u52A0\u4EE3\u7801\uFF0C\u7ED5\u8FC7\u8BC1\u4E66\u4E0B\u53D1\u8FC7\u7A0B\u7684\u8BA4\u8BC1\u8981\u6C42\u3002\u4EE3\u7801\u4FEE\u6539\u65B9\u6CD5\u8BF7\u53C2\u8003\u4E0B\u65B9\u793A\u4F8B\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> features.EnableXDSIdentityCheck </span><span style="--0:#F97583">&#x26;&#x26;</span><span style="--0:#E1E4E8"> con.Identities </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// TODO: allow locking down, rejecting unauthenticated requests.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">id, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">checkConnectionIdentity</span><span style="--0:#E1E4E8">(con)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Warnf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Unauthorized XDS: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF"> with identity </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, con.PeerAddr, con.Identities, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> status.</span><span style="--0:#B392F0">Newf</span><span style="--0:#E1E4E8">(codes.PermissionDenied, </span><span style="--0:#9ECBFF">"authorization failed: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, err).</span><span style="--0:#B392F0">Err</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">con.proxy.VerifiedIdentity </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Start - Auth bypassing for local debug</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">con.proxy.VerifiedIdentity </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">spiffe</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Identity</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">TrustDomain:    </span><span style="--0:#9ECBFF">"cluster.local"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">Namespace:      </span><span style="--0:#9ECBFF">"higress-system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">ServiceAccount: </span><span style="--0:#9ECBFF">"higress-gateway"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// End - Auth bypassing for local debug</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  if features.EnableXDSIdentityCheck &#x26;&#x26; con.Identities != nil {\x7F    // TODO: allow locking down, rejecting unauthenticated requests.\x7F    id, err := checkConnectionIdentity(con)\x7F    if err != nil {\x7F      log.Warnf(&#x22;Unauthorized XDS: %v with identity %v: %v&#x22;, con.PeerAddr, con.Identities, err)\x7F      return status.Newf(codes.PermissionDenied, &#x22;authorization failed: %v&#x22;, err).Err()\x7F    }\x7F    con.proxy.VerifiedIdentity = id\x7F  }\x7F    // Start - Auth bypassing for local debug\x7F  con.proxy.VerifiedIdentity = &#x26;spiffe.Identity{\x7F    TrustDomain:    &#x22;cluster.local&#x22;,\x7F    Namespace:      &#x22;higress-system&#x22;,\x7F    ServiceAccount: &#x22;higress-gateway&#x22;,\x7F  }\x7F    // End - Auth bypassing for local debug"><div></div></button></div></figure></div>
<p><strong>\u8FD0\u884C\u914D\u7F6E</strong></p>
<p>\u914D\u7F6E\u4E00\uFF1A\u73AF\u5883\u53D8\u91CF</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">CUSTOM_CA_CERT_NAME</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">higress-ca-root-cert</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">JWT_POLICY</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">none</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">false</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PILOT_ENABLE_GATEWAY_API</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PILOT_ENABLE_GATEWAY_API_DEPLOYMENT_CONTROLLER</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">false</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PILOT_ENABLE_GATEWAY_API_STATUS</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">false</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PILOT_ENABLE_METADATA_EXCHANGE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">false</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">PILOT_SCOPE_GATEWAY_TO_NAMESPACE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">POD_NAME</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">higress-controller</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">POD_NAMESPACE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">REVISION</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">default</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">VALIDATION_ENABLED</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="CUSTOM_CA_CERT_NAME=higress-ca-root-cert;\x7FJWT_POLICY=none;\x7FPILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY=false;\x7FPILOT_ENABLE_GATEWAY_API=true;\x7FPILOT_ENABLE_GATEWAY_API_DEPLOYMENT_CONTROLLER=false;\x7FPILOT_ENABLE_GATEWAY_API_STATUS=false;\x7FPILOT_ENABLE_METADATA_EXCHANGE=false;\x7FPILOT_SCOPE_GATEWAY_TO_NAMESPACE=true;\x7FPOD_NAME=higress-controller;\x7FPOD_NAMESPACE=higress-system;\x7FREVISION=default;\x7FVALIDATION_ENABLED=false"><div></div></button></div></figure></div>
<p>\u914D\u7F6E\u4E8C\uFF1A\u547D\u4EE4\u884C\u53C2\u6570</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">discovery</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--monitoringAddr=:15014</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--log_output_level=default:info</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--domain</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster.local</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--keepaliveMaxServerConnectionAge</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">30m</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--meshConfig</span><span style="--0:#E1E4E8"> \${configDir}</span><span style="--0:#9ECBFF">/mesh</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--networksConfig</span><span style="--0:#E1E4E8"> \${configDir}</span><span style="--0:#9ECBFF">/meshNetworks</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="discovery --monitoringAddr=:15014 --log_output_level=default:info --domain cluster.local --keepaliveMaxServerConnectionAge 30m --meshConfig \${configDir}/mesh --networksConfig \${configDir}/meshNetworks"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF1A\u5176\u4E2D\u7684 <code dir="auto">\${configDir}</code> \u4E3A\u5728<strong>\u73AF\u5883\u51C6\u5907</strong>\u4E00\u6B65\u521B\u5EFA\u7684\u914D\u7F6E\u76EE\u5F55\u3002</p>
<p><strong>\u542F\u52A8\u8C03\u8BD5</strong></p>
<p>\u5728\u5B8C\u6210\u4EE5\u4E0A\u5DE5\u4F5C\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u542F\u52A8 Pilot \u4E86\u3002\u5B83\u7684 main \u51FD\u6570\u5B9A\u4E49\u5728 <code dir="auto">pilot/cmd/pilot-discovery/main.go</code> \u6587\u4EF6\u4E2D\u3002</p>
<p><img src="/img/blog/pilot-debug/debug-run.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p><strong>\u7F51\u5173\u5BF9\u63A5</strong></p>
<p>\u5982\u679C\u60F3\u8981\u9A8C\u8BC1 pilot \u4E0B\u53D1\u914D\u7F6E\u5230 gateway \u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u9700\u8981\u4FEE\u6539 gateway \u7684\u914D\u7F6E\uFF0C\u4F7F\u4E4B\u8FDE\u63A5\u5230\u5904\u4E8E\u5F00\u53D1\u72B6\u6001\u7684 pilot \u5B9E\u4F8B\u3002</p>
<p>\u7B2C\u4E00\u6B65\uFF1A\u4FEE\u6539 <code dir="auto">higress-config</code> ConfigMap</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit configmap higress-config -n higress-system"><div></div></button></div></figure></div>
<p>\u4FEE\u6539\u4E24\u4E2A\u5730\u65B9\uFF1A</p>
<ol>
<li>\u5C06 <code dir="auto">discoveryAddress</code> \u4FEE\u6539\u4E3A<code dir="auto">\u672C\u673AIP:15010</code>\uFF1B
<br>
\u6CE8\u610F\uFF1A\u6B64\u5904\u7684\u672C\u673A IP \u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1 \u7B49 loopback IP\u3002\u9700\u8981\u4F7F\u7528\u672C\u673A\u6709\u7EBF\u6216\u65E0\u7EBF\u7F51\u5361\u7684 IP\u3002</li>
<li>\u5728 <code dir="auto">discoveryAddress</code> \u4E0B\u9762\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF1A<code dir="auto">controlPlaneAuthPolicy: NONE</code>\u3002</li>
</ol>
<p>\u4FEE\u6539\u540E\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<p><img src="/img/blog/pilot-debug/higress-config-edited.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u7B2C\u4E8C\u6B65\uFF1A\u91CD\u542F Higress Gateway</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">rollout</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">restart</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">deployment</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl rollout restart deployment higress-gateway -n higress-system"><div></div></button></div></figure></div>
<p>\u91CD\u542F\u540E\u6211\u4EEC\u53EF\u4EE5\u5728 pilot \u7684\u63A7\u5236\u53F0\u8F93\u51FA\u4E2D\u770B\u5230 gateway \u8FDE\u63A5\u4E0A\u6765\u7684\u5E76\u83B7\u53D6\u914D\u7F6E\u7684\u65E5\u5FD7\u3002</p>
<p><img src="/img/blog/pilot-debug/gateway-connected.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u603B\u7ED3">\u603B\u7ED3</h2>
<p>\u672C\u5730\u8C03\u8BD5\u548C\u6D4B\u8BD5\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u73AF\u8282\u3002\u901A\u8FC7\u672C\u6587\u7684\u4ECB\u7ECD\uFF0C\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u66F4\u52A0\u65B9\u4FBF\u7684\u5BF9 pilot \u8FDB\u884C\u672C\u5730\u8C03\u8BD5\u548Ce2e\u6D4B\u8BD5\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u540C\u65F6\u4E5F\u5E0C\u671B\u80FD\u591F\u6709\u8D8A\u6765\u8D8A\u591A\u7684\u5F00\u53D1\u8005\u52A0\u5165\u5230 Higress \u7814\u53D1\u961F\u4F0D\u4E2D\uFF0C\u4E3A\u4EA7\u54C1\u7684\u5347\u7EA7\u8FED\u4EE3\u8D21\u732E\u4E00\u4EFD\u529B\u91CF\u3002</p>
<p><a href="https://github.com/alibaba/higress/issues/480" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u6B22\u8FCE\u53C2\u4E0E\u963F\u91CC\u5F00\u6E90\u8D21\u732E\u{1F44F}</a></p>`,n={title:"\u6559\u7A0B\uFF1A\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress Pilot",keywords:["higress","pilot"],description:"\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress \u4E2D\u7684 Pilot \u7EC4\u4EF6",author:"CH3CHO",date:"2024-03-16",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/pilot-debug.md",category:"article"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/pilot-debug.md",t=void 0,o=function(){return`
## \u80CC\u666F\u8BF4\u660E

\u524D\u9762 SJC \u5728[\u8FD9\u7BC7\u535A\u5BA2](/blog/e2e-debug)\u4E2D\u4ECB\u7ECD\u4E86\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress Controller\u3002\u800C Higress \u63A7\u5236\u9762\u9664\u4E86 Controller \u4E4B\u5916\u8FD8\u6709\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u90A3\u5C31\u662F Pilot\u3002\u672C\u6587\u5C31\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress Pilot\u3002

## \u73AF\u5883\u51C6\u5907

### \u6B65\u9AA4\u4E00\uFF1A\u514B\u9686\u4EE3\u7801\u4ED3\u5E93

Pilot \u7684\u4EE3\u7801\u76EE\u524D\u662F\u4EE5 Istio \u4E0A\u6E38\u4ED3\u5E93 submodule \u52A0\u8865\u4E01\u6587\u4EF6\u7684\u5F62\u5F0F\u5B58\u5728\u4E8E Higress \u7684\u4E3B\u4ED3\u5E93\u4E2D\u7684\uFF0C\u6240\u4EE5\u76F4\u63A5\u514B\u9686 Higress \u7684\u4EE3\u7801\u4E3B\u4ED3\u5E93 https://github.com/alibaba/higress \u5373\u53EF\u3002

### \u6B65\u9AA4\u4E8C\uFF1A\u51C6\u5907\u9879\u76EE\u4EE3\u7801

Higress Pilot \u662F\u5728 Istio Pilot \u7684\u57FA\u7840\u4E0A\uFF0C\u57FA\u4E8E Higress \u81EA\u8EAB\u7684\u529F\u80FD\u9700\u6C42\u8FDB\u884C\u4E86\u4E8C\u6B21\u5F00\u53D1\u800C\u6784\u5EFA\u800C\u6210\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD9\u91CC\u9700\u8981\u4E0B\u8F7D\u4E0A\u6E38\u4EE3\u7801\u4ED3\u5E93\u5E76\u5E94\u7528\u73B0\u6709\u7684\u8865\u4E01\u3002\u6211\u4EEC\u53EA\u9700\u8981\u6267\u884C\u4E0B\u9762\u8FD9\u6761\u547D\u4EE4\uFF1A

\`\`\`bash
make prebuild
\`\`\`

**Windows \u7528\u6237\u6CE8\u610F\u4E86\uFF01**

\u5982\u679C\u4F60\u662F\u5728 Windows \u4E0A\u8FDB\u884C\u5F00\u53D1\uFF0C\u5E76\u4E14\u6267\u884C \`make\` \u547D\u4EE4\u6709\u56F0\u96BE\u7684\u8BDD\uFF0C\u4E0D\u8981\u6015\uFF0C\u6211\u4EEC\u4E5F\u6709\u529E\u6CD5\u3002\u56E0\u4E3A\u6574\u4E2A prebuild \u5176\u5B9E\u4E5F\u53EA\u505A\u4E86\u4E24\u4EF6\u4E8B\u60C5\u3002

\u7B2C\u4E00\u4EF6\u4E8B\u60C5\u662F\u521D\u59CB\u5316\u6240\u6709\u7684\u4E0A\u6E38\u5B50\u6A21\u5757\uFF0C\u53EA\u9700\u8981\u6267\u884C\u8FD9\u6837\u4E00\u6761\u547D\u4EE4\uFF1A

\`\`\`bash
git submodule update --init
\`\`\`

\u7B2C\u4E8C\u4EF6\u4E8B\u60C5\u662F\u521D\u59CB\u5316\u5F00\u53D1\u76EE\u5F55\u3002\u8FD9\u4E00\u6B65\u9AA4\u6267\u884C\u7684\u5C31\u662F \`tools/hack/prebuild.sh\`\u3002\u5927\u5BB6\u53EF\u4EE5\u76F4\u63A5\u5728 Cygwin \u6216\u8005 Git Bash \u7B49\u7C7B Linux \u7EC8\u7AEF\u4E0B\u6267\u884C\u8FD9\u4E2A\u811A\u672C\u6587\u4EF6\u3002

\u5982\u679C\u5728\u5E94\u7528\u8865\u4E01\u7684\u65F6\u5019\u51FA\u73B0\u4E86\u548C\u6362\u884C\u7B26\u6709\u5173\u7684\u62A5\u9519\uFF0C\u90A3\u4E48\u53EF\u4EE5\u7F16\u8F91 \`prebuild.sh\`\uFF0C\u7ED9\u4E24\u5904 \`patch\` \u547D\u4EE4\u589E\u52A0 \`--binary\` \u53C2\u6570\u5373\u53EF\u3002

![img.png](/img/blog/pilot-debug/patch-binary.png)

### \u6B65\u9AA4\u4E09\uFF1A\u5B89\u88C5 Higress

\u65E2\u7136\u53EA\u662F\u8C03\u8BD5 pilot\uFF0C\u90A3\u4E48\u5176\u4ED6\u7EC4\u4EF6\u8FD8\u662F\u8981\u590D\u7528\u73B0\u6709 Higress \u96C6\u7FA4\u91CC\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u5728\u672C\u5730\u914D\u7F6E\u4E00\u4E2A Higress \u96C6\u7FA4\u3002\u5927\u5BB6\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A[\u94FE\u63A5](/docs/latest/user/quickstart)\u3002

## \u5F00\u53D1\u4E0E\u8C03\u8BD5

### \u672C\u5730\u5F00\u53D1

\u672C\u5730\u5F00\u53D1\u63A8\u8350\u4F7F\u7528 IDE JetBrains GoLand\u3002\u6211\u4EEC\u76F4\u63A5\u5728 GoLand \u4E2D\u6253\u5F00 \`external/istio\` \u76EE\u5F55\uFF0C\u6B63\u5E38\u8FDB\u884C\u5F00\u53D1\u5373\u53EF\u3002

![img.png](/img/blog/pilot-debug/goland-project.png)

### \u8C03\u8BD5\u8FD0\u884C

**\u73AF\u5883\u51C6\u5907**

\u7B2C\u4E00\u6B65\uFF1A\u63D0\u53D6\u914D\u7F6E\u6587\u4EF6

\u5728\u672C\u5730\u4EFB\u610F\u4E00\u4E2A\u4F4D\u7F6E\u521B\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u7136\u540E\u5728\u8BE5\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u751F\u6210\u914D\u7F6E\u6587\u4EF6\uFF1A

\`\`\`bash
kubectl get configmap higress-config -n higress-system -o=jsonpath='{.data.mesh}' > ./mesh
kubectl get configmap higress-config -n higress-system -o=jsonpath='{.data.meshNetworks}' > ./meshNetworks
\`\`\`

\u7B2C\u4E8C\u6B65\uFF1A\u8F6C\u53D1 controller \u7AEF\u53E3

\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5C06 controller \u7684 xDS \u670D\u52A1\u7AEF\u53E3\u8F6C\u53D1\u81F3\u672C\u5730\uFF1A

\`\`\`bash
kubectl port-forward deployment/higress-controller -n higress-system 15051
\`\`\`

**\u4EE3\u7801\u8C03\u6574**

\u5982\u679C\u8981\u8C03\u8BD5\u4E0E TLS \u8BC1\u4E66\u4E0B\u53D1\u7684\u76F8\u5173\u529F\u80FD\uFF0C\u5219\u9700\u8981\u5728 \`pilot/pkg/xds/ads.go\` \u7684 \`initConnection\` \u51FD\u6570\u4E2D\u6DFB\u52A0\u4EE3\u7801\uFF0C\u7ED5\u8FC7\u8BC1\u4E66\u4E0B\u53D1\u8FC7\u7A0B\u7684\u8BA4\u8BC1\u8981\u6C42\u3002\u4EE3\u7801\u4FEE\u6539\u65B9\u6CD5\u8BF7\u53C2\u8003\u4E0B\u65B9\u793A\u4F8B\u3002

\`\`\`go
	if features.EnableXDSIdentityCheck && con.Identities != nil {
		// TODO: allow locking down, rejecting unauthenticated requests.
		id, err := checkConnectionIdentity(con)
		if err != nil {
			log.Warnf("Unauthorized XDS: %v with identity %v: %v", con.PeerAddr, con.Identities, err)
			return status.Newf(codes.PermissionDenied, "authorization failed: %v", err).Err()
		}
		con.proxy.VerifiedIdentity = id
	}
    // Start - Auth bypassing for local debug
	con.proxy.VerifiedIdentity = &spiffe.Identity{
		TrustDomain:    "cluster.local",
		Namespace:      "higress-system",
		ServiceAccount: "higress-gateway",
	}
    // End - Auth bypassing for local debug
\`\`\`

**\u8FD0\u884C\u914D\u7F6E**

\u914D\u7F6E\u4E00\uFF1A\u73AF\u5883\u53D8\u91CF

\`\`\`bash
CUSTOM_CA_CERT_NAME=higress-ca-root-cert;
JWT_POLICY=none;
PILOT_ENABLE_CROSS_CLUSTER_WORKLOAD_ENTRY=false;
PILOT_ENABLE_GATEWAY_API=true;
PILOT_ENABLE_GATEWAY_API_DEPLOYMENT_CONTROLLER=false;
PILOT_ENABLE_GATEWAY_API_STATUS=false;
PILOT_ENABLE_METADATA_EXCHANGE=false;
PILOT_SCOPE_GATEWAY_TO_NAMESPACE=true;
POD_NAME=higress-controller;
POD_NAMESPACE=higress-system;
REVISION=default;
VALIDATION_ENABLED=false
\`\`\`

\u914D\u7F6E\u4E8C\uFF1A\u547D\u4EE4\u884C\u53C2\u6570

\`\`\`bash
discovery --monitoringAddr=:15014 --log_output_level=default:info --domain cluster.local --keepaliveMaxServerConnectionAge 30m --meshConfig \${configDir}/mesh --networksConfig \${configDir}/meshNetworks
\`\`\`

\u6CE8\u610F\uFF1A\u5176\u4E2D\u7684 \`\${configDir}\` \u4E3A\u5728**\u73AF\u5883\u51C6\u5907**\u4E00\u6B65\u521B\u5EFA\u7684\u914D\u7F6E\u76EE\u5F55\u3002

**\u542F\u52A8\u8C03\u8BD5**

\u5728\u5B8C\u6210\u4EE5\u4E0A\u5DE5\u4F5C\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u542F\u52A8 Pilot \u4E86\u3002\u5B83\u7684 main \u51FD\u6570\u5B9A\u4E49\u5728 \`pilot/cmd/pilot-discovery/main.go\` \u6587\u4EF6\u4E2D\u3002

![img.png](/img/blog/pilot-debug/debug-run.png)

**\u7F51\u5173\u5BF9\u63A5**

\u5982\u679C\u60F3\u8981\u9A8C\u8BC1 pilot \u4E0B\u53D1\u914D\u7F6E\u5230 gateway \u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u9700\u8981\u4FEE\u6539 gateway \u7684\u914D\u7F6E\uFF0C\u4F7F\u4E4B\u8FDE\u63A5\u5230\u5904\u4E8E\u5F00\u53D1\u72B6\u6001\u7684 pilot \u5B9E\u4F8B\u3002

\u7B2C\u4E00\u6B65\uFF1A\u4FEE\u6539 \`higress-config\` ConfigMap

\`\`\`bash
kubectl edit configmap higress-config -n higress-system
\`\`\`

\u4FEE\u6539\u4E24\u4E2A\u5730\u65B9\uFF1A
1. \u5C06 \`discoveryAddress\` \u4FEE\u6539\u4E3A\`\u672C\u673AIP:15010\`\uFF1B
    <br/>
    \u6CE8\u610F\uFF1A\u6B64\u5904\u7684\u672C\u673A IP \u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1 \u7B49 loopback IP\u3002\u9700\u8981\u4F7F\u7528\u672C\u673A\u6709\u7EBF\u6216\u65E0\u7EBF\u7F51\u5361\u7684 IP\u3002
2. \u5728 \`discoveryAddress\` \u4E0B\u9762\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5C5E\u6027\uFF1A\`controlPlaneAuthPolicy: NONE\`\u3002

\u4FEE\u6539\u540E\u914D\u7F6E\u793A\u4F8B\uFF1A

![img.png](/img/blog/pilot-debug/higress-config-edited.png)

\u7B2C\u4E8C\u6B65\uFF1A\u91CD\u542F Higress Gateway

\`\`\`bash
kubectl rollout restart deployment higress-gateway -n higress-system
\`\`\`

\u91CD\u542F\u540E\u6211\u4EEC\u53EF\u4EE5\u5728 pilot \u7684\u63A7\u5236\u53F0\u8F93\u51FA\u4E2D\u770B\u5230 gateway \u8FDE\u63A5\u4E0A\u6765\u7684\u5E76\u83B7\u53D6\u914D\u7F6E\u7684\u65E5\u5FD7\u3002

![img.png](/img/blog/pilot-debug/gateway-connected.png)

## \u603B\u7ED3

\u672C\u5730\u8C03\u8BD5\u548C\u6D4B\u8BD5\u662F\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u73AF\u8282\u3002\u901A\u8FC7\u672C\u6587\u7684\u4ECB\u7ECD\uFF0C\u5E0C\u671B\u5927\u5BB6\u53EF\u4EE5\u66F4\u52A0\u65B9\u4FBF\u7684\u5BF9 pilot \u8FDB\u884C\u672C\u5730\u8C03\u8BD5\u548Ce2e\u6D4B\u8BD5\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u540C\u65F6\u4E5F\u5E0C\u671B\u80FD\u591F\u6709\u8D8A\u6765\u8D8A\u591A\u7684\u5F00\u53D1\u8005\u52A0\u5165\u5230 Higress \u7814\u53D1\u961F\u4F0D\u4E2D\uFF0C\u4E3A\u4EA7\u54C1\u7684\u5347\u7EA7\u8FED\u4EE3\u8D21\u732E\u4E00\u4EFD\u529B\u91CF\u3002

[\u6B22\u8FCE\u53C2\u4E0E\u963F\u91CC\u5F00\u6E90\u8D21\u732E\u{1F44F}](https://github.com/alibaba/higress/issues/480)
`},p=function(){return s},l=function(){return[{depth:2,slug:"\u80CC\u666F\u8BF4\u660E",text:"\u80CC\u666F\u8BF4\u660E"},{depth:2,slug:"\u73AF\u5883\u51C6\u5907",text:"\u73AF\u5883\u51C6\u5907"},{depth:3,slug:"\u6B65\u9AA4\u4E00\u514B\u9686\u4EE3\u7801\u4ED3\u5E93",text:"\u6B65\u9AA4\u4E00\uFF1A\u514B\u9686\u4EE3\u7801\u4ED3\u5E93"},{depth:3,slug:"\u6B65\u9AA4\u4E8C\u51C6\u5907\u9879\u76EE\u4EE3\u7801",text:"\u6B65\u9AA4\u4E8C\uFF1A\u51C6\u5907\u9879\u76EE\u4EE3\u7801"},{depth:3,slug:"\u6B65\u9AA4\u4E09\u5B89\u88C5-higress",text:"\u6B65\u9AA4\u4E09\uFF1A\u5B89\u88C5 Higress"},{depth:2,slug:"\u5F00\u53D1\u4E0E\u8C03\u8BD5",text:"\u5F00\u53D1\u4E0E\u8C03\u8BD5"},{depth:3,slug:"\u672C\u5730\u5F00\u53D1",text:"\u672C\u5730\u5F00\u53D1"},{depth:3,slug:"\u8C03\u8BD5\u8FD0\u884C",text:"\u8C03\u8BD5\u8FD0\u884C"},{depth:2,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"}]},e=d((f,h,F)=>{const{layout:m,...i}=n;return i.file=a,i.url=t,c`${E()}${y(s)}`})});export{e as Content,u as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,o as rawContent,t as url};
