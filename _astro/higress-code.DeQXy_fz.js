import{c as r,__tla as o}from"./astro-component.CkonuESJ.js";import{r as c,m as v,u as E,__tla as y}from"./constant.CLSD4Wx5.js";import{__tla as g}from"./astro/assets-service.BSoMdJpH.js";let e,l,n,a,p,d,i,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u5F15\u8A00">\u5F15\u8A00</h2>
<p>\u5728\u5F00\u6E90\u793E\u533A\u4E2D\uFF0C\u6E90\u7801\u5206\u6790\u662F\u6DF1\u5165\u7406\u89E3\u9879\u76EE\u5185\u90E8\u673A\u5236\u7684\u5173\u952E\u6B65\u9AA4\u3002\u901A\u8FC7\u4ED4\u7EC6\u7814\u7A76\u9879\u76EE\u7684\u6E90\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63ED\u793A\u80CC\u540E\u7684\u8BBE\u8BA1\u539F\u7406\u3001\u7B97\u6CD5\u548C\u5DE5\u4F5C\u6D41\u7A0B\u3002\u8FD9\u4E0D\u4EC5\u6709\u52A9\u4E8E\u63D0\u9AD8\u6211\u4EEC\u7684\u7F16\u7A0B\u6280\u80FD\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u5F00\u53D1\u8005\u793E\u533A\u63D0\u4F9B\u5B9D\u8D35\u7684\u5B66\u4E60\u8D44\u6E90\u3002</p>
<p>\u672C\u6587\u5C06\u805A\u7126\u4E8E\u5206\u6790<a href="https://github.com/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress</a>\u7684\u6E90\u7801\uFF0C\u8BE5\u9879\u76EE\u5728\u5F00\u6E90\u754C\u5907\u53D7\u77A9\u76EE\u3002\u901A\u8FC7\u6D4F\u89C8\u9605\u8BFB\u5176\u4EE3\u7801\uFF0C\u6211\u4EEC\u5C06\u521D\u6B65\u5C55\u73B0\u5176\u6838\u5FC3\u7279\u6027\u3001\u67B6\u6784\u8BBE\u8BA1\u548C\u5B9E\u73B0\u7EC6\u8282\u3002\u5E0C\u671B\u5404\u4F4D\u7528\u6237\u4EE5\u53CA\u5F00\u53D1\u8005\u5728\u672C\u6587\u4E2D\u80FD\u591F\u627E\u5230\u6709\u4EF7\u503C\u7684\u89C1\u89E3\u3002</p>
<h2 id="\u5173\u4E8Ehigress">\u5173\u4E8EHigress</h2>
<p>Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90Istio + Envoy\u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301Ingress\u4E0EGateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002</p>
<h2 id="\u4EE3\u7801\u76EE\u5F55\u8BF4\u660E">\u4EE3\u7801\u76EE\u5F55\u8BF4\u660E</h2>
<ul>
<li>cmd: \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801</li>
<li>pkg/ingress: Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801</li>
<li>pkg/bootstrap: \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801</li>
<li>registry: \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801</li>
<li>envoy: \u4F9D\u8D56\u7684 envoy \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801</li>
<li>istio: \u4F9D\u8D56\u7684 istio \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801</li>
<li>plugins: Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801</li>
<li>script: \u7F16\u8BD1\u76F8\u5173\u811A\u672C</li>
<li>docker: docker \u955C\u50CF\u6784\u5EFA\u76F8\u5173\u811A\u672C</li>
</ul>
<p>\u672C\u6587\u4E3B\u8981\u56F4\u7ED5\u7740higress-core\u7EC4\u4EF6\u7684\u6E90\u7801\uFF0C\u7814\u7A76higress-core\u81EA\u542F\u52A8\u4EE5\u6765\u505A\u4E86\u54EA\u4E9B\u4E8B\u60C5\u3002higress-core\u7684\u4EE3\u7801\u4E3B\u8981\u4F4D\u4E8E<code dir="auto">pkg</code>\u76EE\u5F55\u4E0B\u3002</p>
<h2 id="higress-core\u6E90\u7801\u6574\u4F53\u5206\u6790">higress-core\u6E90\u7801\u6574\u4F53\u5206\u6790</h2>
<h3 id="\u542F\u52A8\u5165\u53E3pkgcmdservergo">\u542F\u52A8\u5165\u53E3\uFF1Apkg/cmd/server.go</h3>
<p>\u5728\u8BE5\u6587\u4EF6\u4E0B\uFF0C\u4E3B\u8981\u8FDB\u884C\u4E86\u547D\u4EE4\u53C2\u6570\u7684\u89E3\u6790\uFF0C\u5E76\u8C03\u7528<code dir="auto">NewServer</code>\u6765\u521B\u5EFA\u4E00\u4E2AServer\u5B9E\u4F8B\uFF0C\u8C03\u7528\u8BE5\u5B9E\u4F8B\u7684<code dir="auto">Start</code>\u65B9\u6CD5\u6765\u542F\u52A8\u5B9E\u4F8BServer\uFF0C\u8C03\u7528<code dir="auto">waitForMonitorSignal</code>\u65B9\u6CD5\u6765\u76D1\u542C\u8FDB\u7A0B\u7684\u9000\u51FA\u3002</p>
<p>\u663E\u7136\u8FD9\u91CC\u6709\u4E24\u4E2A\u5F88\u91CD\u8981\u7684\u65B9\u6CD5\u51FD\u6570\uFF1A<code dir="auto">NewServer</code>\u548C<code dir="auto">Start</code>\uFF0C\u63A5\u4E0B\u6765\u9488\u5BF9\u8FD9\u4E24\u4E2A\u51FD\u6570\u8FDB\u884C\u5177\u4F53\u5206\u6790\u3002</p>
<h3 id="\u521B\u5EFA\u5B9E\u4F8Bnewserver">\u521B\u5EFA\u5B9E\u4F8B\uFF1ANewServer</h3>
<h4 id="\u521D\u59CB\u5316pilot\u7684\u73AF\u5883-apimodelenvironment">\u521D\u59CB\u5316Pilot\u7684\u73AF\u5883 API<code dir="auto">model.Environment</code></h4>
<p><code dir="auto">model.Environment</code>\u4E3APilot \u4E2D\u7684\u6838\u5FC3\u73AF\u5883\u5BF9\u8C61\uFF0C\u96C6\u6210\u4E86\u8BB8\u591A\u4E0D\u540C\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u670D\u52A1\u53D1\u73B0\u3001\u914D\u7F6E\u5B58\u50A8\u3001\u7F51\u7EDC\u89C2\u5BDF\u7B49\uFF0C\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u5B8C\u6574\u7684\u73AF\u5883 API\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">e </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Environment</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">PushContext:  model.</span><span style="--0:#B392F0">NewPushContext</span><span style="--0:#E1E4E8">(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">DomainSuffix: constants.DefaultKubernetesDomain,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">MCPMode:      </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="e := &#x26;model.Environment{\x7F    PushContext:  model.NewPushContext(),\x7F    DomainSuffix: constants.DefaultKubernetesDomain,\x7F    MCPMode:      true,\x7F}"><div></div></button></div></figure></div>
<h4 id="\u4E3Amodelenvironment\u8BBE\u7F6Eledger">\u4E3A<code dir="auto">model.Environment</code>\u8BBE\u7F6E<code dir="auto">Ledger</code></h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">e.</span><span style="--0:#B392F0">SetLedger</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">buildLedger</span><span style="--0:#E1E4E8">(args.RegistryOptions))</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="e.SetLedger(buildLedger(args.RegistryOptions))"><div></div></button></div></figure></div>
<p><code dir="auto">Ledger</code> \u662F\u4E00\u4E2A\u8868\u793A\u7ECF\u8FC7\u4FEE\u6539\u7684 map \u7684\u63A5\u53E3\u3002\u8FD9\u4E2A map \u5177\u6709\u4E09\u4E2A\u72EC\u7279\u7684\u7279\u5F81\uFF1A</p>
<ol>
<li>\u6BCF\u4E2A map \u7684\u552F\u4E00\u72B6\u6001\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u54C8\u5E0C\u503C\u3002</li>
<li>map \u7684\u5148\u524D\u72B6\u6001\u5728\u56FA\u5B9A\u7684\u65F6\u95F4\u5185\u88AB\u4FDD\u7559\u3002</li>
<li>\u7ED9\u5B9A\u5148\u524D\u7684\u54C8\u5E0C\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE map \u4E2D\u68C0\u7D22\u5148\u524D\u7684\u72B6\u6001\uFF08\u5982\u679C\u4ECD\u7136\u88AB\u4FDD\u7559\uFF09\u3002</li>
</ol>
<p><code dir="auto">Ledger</code>\u63D0\u4F9B\u4E86\u4E2A\u63A5\u53E3\u6765\u83B7\u53D6\u4E4B\u524D\u7248\u672C\u7684Value\uFF0C\u63A5\u53E3\u8BE6\u60C5\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// GetPreviousValue executes a get against a previous version of the ledger, using that version's root hash.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">GetPreviousValue</span><span style="--0:#E1E4E8">(previousRootHash, key </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (result </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">, err </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// GetPreviousValue executes a get against a previous version of the ledger, using that version&#x27;s root hash.\x7FGetPreviousValue(previousRootHash, key string) (result string, err error)"><div></div></button></div></figure></div>
<h4 id="\u4E3Amodelenvironment\u8BBE\u7F6E\u670D\u52A1\u53D1\u73B0\u7684\u63A5\u53E3servicediscovery\u7528\u4E8E\u5217\u4E3E\u670D\u52A1\u548C\u5B9E\u4F8B">\u4E3A<code dir="auto">model.Environment</code>\u8BBE\u7F6E\u670D\u52A1\u53D1\u73B0\u7684\u63A5\u53E3<code dir="auto">ServiceDiscovery</code>\uFF0C\u7528\u4E8E\u5217\u4E3E\u670D\u52A1\u548C\u5B9E\u4F8B\u3002</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">ac </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> aggregate.</span><span style="--0:#B392F0">NewController</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">aggregate</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Options</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">MeshHolder: e,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">e.ServiceDiscovery </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> ac</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ac := aggregate.NewController(aggregate.Options{\x7F    MeshHolder: e,\x7F})\x7Fe.ServiceDiscovery = ac"><div></div></button></div></figure></div>
<h4 id="\u521D\u59CB\u5316server\u5B9E\u4F8B">\u521D\u59CB\u5316<code dir="auto">Server</code>\u5B9E\u4F8B</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">Server</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">ServerArgs:      args,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">httpMux:         http.</span><span style="--0:#B392F0">NewServeMux</span><span style="--0:#E1E4E8">(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">environment:     e,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">readinessProbes: </span><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#B392F0">readinessProbe</span><span style="--0:#E1E4E8">),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">server:          server.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(),</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.environment.Watcher </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> mesh.</span><span style="--0:#B392F0">NewFixedWatcher</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">v1alpha1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">MeshConfig</span><span style="--0:#E1E4E8">{})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.environment.</span><span style="--0:#B392F0">Init</span><span style="--0:#E1E4E8">()</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="s := &#x26;Server{\x7F    ServerArgs:      args,\x7F    httpMux:         http.NewServeMux(),\x7F    environment:     e,\x7F    readinessProbes: make(map[string]readinessProbe),\x7F    server:          server.New(),\x7F}\x7Fs.environment.Watcher = mesh.NewFixedWatcher(&#x26;v1alpha1.MeshConfig{})\x7Fs.environment.Init()"><div></div></button></div></figure></div>
<p>\u8FD9\u91CC\u8BF4\u660E\u4E00\u4E0B<code dir="auto">Server</code>\u7ED3\u6784\u4F53\u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u542B\u4E49\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">Server</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">ServerArgs</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// Server\u53C2\u6570\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">environment      </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Environment</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// Pilot\u73AF\u5883\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">kubeClient       </span><span style="--0:#B392F0">higresskube</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Client</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// \u4E0E Kubernetes \u96C6\u6210\u7684\u5BA2\u6237\u7AEF</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">configController </span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ConfigStoreCache</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// \u914D\u7F6E\u5B58\u50A8\u63A7\u5236\u5668</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">configStores     []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ConfigStoreCache</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// \u591A\u4E2A\u914D\u7F6E\u5B58\u50A8\u7684\u7F13\u5B58</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">httpServer       </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Server</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// HTTP \u8BF7\u6C42\u5904\u7406\u5668</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">httpMux          </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ServeMux</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// HTTP \u8BF7\u6C42\u591A\u8DEF\u590D\u7528\u5668</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">grpcServer       </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">grpc</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Server</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// grpc\u670D\u52A1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">xdsServer        </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">xds</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">DiscoveryServer</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// xds\u670D\u52A1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">server           </span><span style="--0:#B392F0">server</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Instance</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// Pilot Server\u5B9E\u4F8B\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">readinessProbes  </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#B392F0">readinessProbe</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">// server\u5185\u90E8\u670D\u52A1\u8BB0\u5F55\u8868\uFF0C\u8BB0\u5F55\u670D\u52A1\u662F\u5426\u51C6\u5907\u597D</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type Server struct {\x7F    *ServerArgs  // Server\u53C2\u6570\u914D\u7F6E\x7F    environment      *model.Environment  // Pilot\u73AF\u5883\u914D\u7F6E\x7F    kubeClient       higresskube.Client  // \u4E0E Kubernetes \u96C6\u6210\u7684\u5BA2\u6237\u7AEF\x7F    configController model.ConfigStoreCache  // \u914D\u7F6E\u5B58\u50A8\u63A7\u5236\u5668\x7F    configStores     []model.ConfigStoreCache  // \u591A\u4E2A\u914D\u7F6E\u5B58\u50A8\u7684\u7F13\u5B58\x7F    httpServer       *http.Server  // HTTP \u8BF7\u6C42\u5904\u7406\u5668\x7F    httpMux          *http.ServeMux  // HTTP \u8BF7\u6C42\u591A\u8DEF\u590D\u7528\u5668\x7F    grpcServer       *grpc.Server  // grpc\u670D\u52A1\x7F    xdsServer        *xds.DiscoveryServer  // xds\u670D\u52A1\x7F    server           server.Instance  // Pilot Server\u5B9E\u4F8B\u914D\u7F6E\x7F    readinessProbes  map[string]readinessProbe  // server\u5185\u90E8\u670D\u52A1\u8BB0\u5F55\u8868\uFF0C\u8BB0\u5F55\u670D\u52A1\u662F\u5426\u51C6\u5907\u597D\x7F}"><div></div></button></div></figure></div>
<blockquote>
<p>\u5728\u8FD9\u91CC\uFF0C<code dir="auto">server.Instance</code>\u7EF4\u62A4\u4E86\u4E00\u4E2Achan\u53D8\u91CF<code dir="auto">components chan Component</code>\uFF0C<code dir="auto">Component</code>\u5219\u5B9A\u4E49\u4E86\u4E00\u4E2A\u51FD\u6570\u65B9\u6CD5\u6A21\u677F\u3002\u5F53\u6211\u4EEC\u8C03\u7528<code dir="auto">Instance</code>\u7684<code dir="auto">RunComponent(t Component)</code>\u65B9\u6CD5\uFF0C\u5219\u4F1A\u5C06\u53D8\u91CF<code dir="auto">t</code>\u53D1\u9001\u7ED9<code dir="auto">components</code>\u7BA1\u9053\uFF0C\u800C\u6211\u4EEC\u8C03\u7528<code dir="auto">Instance</code>\u7684<code dir="auto">Start(stop &#x3C;-chan struct{}) error</code>\u65B9\u6CD5\uFF0C\u5219\u4F1A\u4ECE<code dir="auto">components</code>\u7BA1\u9053\u53BB\u63A5\u6536<code dir="auto">Component</code>\u5BF9\u8C61\uFF0C\u5E76\u6267\u884C\u8BE5\u5BF9\u8C61\u7684\u51FD\u6570\u65B9\u6CD5\u3002</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type Component func(stop &#x3C;-chan struct{}) error</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type Component func(stop <-chan struct{}) error"><div></div></button></div></figure></div>
<h4 id="\u521B\u5EFA\u521D\u59CB\u542F\u52A8\u51FD\u6570\u5217\u8868">\u521B\u5EFA\u521D\u59CB\u542F\u52A8\u51FD\u6570\u5217\u8868</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">initFuncList </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.initKubeClient,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.initXdsServer,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.initHttpServer,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.initConfigController,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.initRegistryEventHandlers,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.initAuthenticators,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="initFuncList := []func() error{\x7F    s.initKubeClient,\x7F    s.initXdsServer,\x7F    s.initHttpServer,\x7F    s.initConfigController,\x7F    s.initRegistryEventHandlers,\x7F    s.initAuthenticators,\x7F}"><div></div></button></div></figure></div>
<ul>
<li>
<p><code dir="auto">initKubeClient</code>\u51FD\u6570</p>
<ol>
<li>
<p>\u9996\u5148\u5224\u65AD<code dir="auto">kubeClient</code>\u662F\u5426\u4E3A\u7A7A\uFF0C\u4E0D\u4E3A\u7A7A\u8FDB\u884C\u4E0B\u4E00\u6B65\uFF1B</p>
</li>
<li>
<p>\u8C03\u7528<code dir="auto">istiokube.DefaultRestConfig</code>\u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5177\u6709 RESTful \u98CE\u683C\u7684<code dir="auto">Kubernetes Config</code>\uFF1B</p>
</li>
<li>
<p>\u4EE5<code dir="auto">Kubernetes Config</code>\u4E3A\u5165\u53C2\uFF0C\u8C03\u7528<code dir="auto">istiokube.NewClientConfigForRestConfig</code>\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u5177\u6709 RESTful \u98CE\u683C\u7684<code dir="auto">Kubernetes Client Config</code>\uFF1B</p>
</li>
<li>
<p>\u8C03\u7528higress\u5B9A\u4E49\u7684<code dir="auto">NewClient</code>\u65B9\u6CD5\uFF0C\u96C6\u6210 Istio \u5BA2\u6237\u7AEF\u3001Higress \u5BA2\u6237\u7AEF\u548C\u53EF\u80FD\u7684 Kingress \u5BA2\u6237\u7AEF\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u4E86\u76F8\u5E94\u7684 SharedInformerFactory\u3002</p>
</li>
</ol>
</li>
<li>
<p><code dir="auto">initXdsServer</code>\u51FD\u6570</p>
<ol>
<li>\u8C03\u7528<code dir="auto">pliot xds</code>\u7684<code dir="auto">NewDiscoveryServer</code>\u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A<code dir="auto">xdsServer</code>\u5B9E\u4F8B\uFF0C\u5E76\u521D\u59CB\u5316\u4E00\u4E9B\u8D44\u6E90\u3002
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> xds.</span><span style="--0:#B392F0">NewDiscoveryServer</span><span style="--0:#E1E4E8">(s.environment, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.McpGenerators[gvk.WasmPlugin.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">mcp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">WasmpluginGenerator</span><span style="--0:#E1E4E8">{Server: s.xdsServer}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.McpGenerators[gvk.DestinationRule.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">mcp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">DestinationRuleGenerator</span><span style="--0:#E1E4E8">{Server: s.xdsServer}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.McpGenerators[gvk.EnvoyFilter.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">mcp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EnvoyFilterGenerator</span><span style="--0:#E1E4E8">{Server: s.xdsServer}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.McpGenerators[gvk.Gateway.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">mcp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">GatewayGenerator</span><span style="--0:#E1E4E8">{Server: s.xdsServer}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.McpGenerators[gvk.VirtualService.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">mcp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">VirtualServiceGenerator</span><span style="--0:#E1E4E8">{Server: s.xdsServer}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.McpGenerators[gvk.ServiceEntry.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">mcp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ServiceEntryGenerator</span><span style="--0:#E1E4E8">{Server: s.xdsServer}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.ProxyNeedsPush </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">proxy</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Proxy</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">req</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">PushRequest</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">bool</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="s.xdsServer = xds.NewDiscoveryServer(s.environment, nil, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)\x7Fs.xdsServer.McpGenerators[gvk.WasmPlugin.String()] = &#x26;mcp.WasmpluginGenerator{Server: s.xdsServer}\x7Fs.xdsServer.McpGenerators[gvk.DestinationRule.String()] = &#x26;mcp.DestinationRuleGenerator{Server: s.xdsServer}\x7Fs.xdsServer.McpGenerators[gvk.EnvoyFilter.String()] = &#x26;mcp.EnvoyFilterGenerator{Server: s.xdsServer}\x7Fs.xdsServer.McpGenerators[gvk.Gateway.String()] = &#x26;mcp.GatewayGenerator{Server: s.xdsServer}\x7Fs.xdsServer.McpGenerators[gvk.VirtualService.String()] = &#x26;mcp.VirtualServiceGenerator{Server: s.xdsServer}\x7Fs.xdsServer.McpGenerators[gvk.ServiceEntry.String()] = &#x26;mcp.ServiceEntryGenerator{Server: s.xdsServer}\x7Fs.xdsServer.ProxyNeedsPush = func(proxy *model.Proxy, req *model.PushRequest) bool {\x7F    return true\x7F}"><div></div></button></div></figure></div>
</li>
<li>\u5C06<code dir="auto">xdsServer</code>\u7684<code dir="auto">Start</code>\u65B9\u6CD5\u6CE8\u518C\u7ED9pilot server instance\uFF0C\u5E76\u8C03\u7528higress server\u7684<code dir="auto">initGrpcServer</code>\u521D\u59CB\u5316\u51FD\u6570\uFF0C\u5C06xds\u670D\u52A1\u6CE8\u518C\u5728grpc\u670D\u52A1\u4E0A\uFF0C\u4F7F\u5F97\u53EF\u4EE5\u901A\u8FC7grpc\u534F\u8BAE\u7AEF\u53E3\u8FDB\u884Cxds\u534F\u8BAE\u7684\u901A\u4FE1\u3002</li>
</ol>
</li>
<li>
<p><code dir="auto">initHttpServer</code>\u51FD\u6570\uFF0C\u521D\u59CB\u5316http server\uFF0C\u6DFB\u52A08888\u7AEF\u53E3\u7684debug\u63A5\u53E3\u7684\u5904\u7406\u5668\uFF0C\u5E76\u6DFB\u52A0<code dir="auto">/ready</code>\u8DEF\u7531\u7684\u5904\u7406\u5668\uFF0C\u7528\u4E8E\u904D\u5386higress server\u7684<code dir="auto">readinessProbes</code>\uFF0C\u5224\u65AD\u5185\u90E8\u670D\u52A1\u8BB0\u5F55\u8868\u5185\u7684\u670D\u52A1\u662F\u5426\u51C6\u5907\u5B8C\u6BD5\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.xdsServer.</span><span style="--0:#B392F0">AddDebugHandlers</span><span style="--0:#E1E4E8">(s.httpMux, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.httpMux.</span><span style="--0:#B392F0">HandleFunc</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"/ready"</span><span style="--0:#E1E4E8">, s.readyHandler)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="s.xdsServer.AddDebugHandlers(s.httpMux, nil, true, nil)\x7Fs.httpMux.HandleFunc(&#x22;/ready&#x22;, s.readyHandler)"><div></div></button></div></figure></div>
</li>
<li>
<p><code dir="auto">initConfigController</code>\u51FD\u6570\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u6BD4\u8F83\u6838\u5FC3\uFF0C\u5C06\u4F1A\u5728\u540E\u9762\u8BE6\u7EC6\u5C55\u5F00\uFF0C\u6682\u65F6\u5148\u8DF3\u8FC7\u3002</p>
</li>
<li>
<p><code dir="auto">initRegistryEventHandlers</code>\u51FD\u6570\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u8DDF<code dir="auto">initConfigController</code>\u51FD\u6570\u6709\u5173\uFF0C\u6682\u65F6\u5148\u8DF3\u8FC7\u3002</p>
</li>
<li>
<p><code dir="auto">initAuthenticators</code>\u51FD\u6570\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u521D\u59CB\u5316\u8BA4\u8BC1\u5668\uFF0C\u5E76\u5C06\u5176\u5E94\u7528\u4E8E xDS \u670D\u52A1\u5668\u3002\u901A\u8FC7\u6DFB\u52A0\u4E0D\u540C\u7684\u8BA4\u8BC1\u5668\uFF0C\u53EF\u4EE5\u652F\u6301\u4E0D\u540C\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u5F0F\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u5728\u5904\u7406\u8BF7\u6C42\u65F6\u53EF\u4EE5\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u7684\u8EAB\u4EFD\u4FE1\u606F\u3002</p>
</li>
</ul>
<h4 id="\u904D\u5386\u542F\u52A8\u51FD\u6570\u5217\u8868\u6267\u884C\u542F\u52A8\u51FD\u6570">\u904D\u5386\u542F\u52A8\u51FD\u6570\u5217\u8868\uFF0C\u6267\u884C\u542F\u52A8\u51FD\u6570</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, f </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> initFuncList {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">f</span><span style="--0:#E1E4E8">(); err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">       </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, err</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="for _, f := range initFuncList {\x7F    if err := f(); err != nil {\x7F       return nil, err\x7F    }\x7F}"><div></div></button></div></figure></div>
<h4 id="\u6CE8\u518Cpilot-server">\u6CE8\u518CPilot Server</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">s.server.</span><span style="--0:#B392F0">RunComponent</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">stop</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x3C;-chan</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8">{}) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">s.kubeClient.</span><span style="--0:#B392F0">RunAndWait</span><span style="--0:#E1E4E8">(stop)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="s.server.RunComponent(func(stop <-chan struct{}) error {\x7F    s.kubeClient.RunAndWait(stop)\x7F    return nil\x7F})"><div></div></button></div></figure></div>
<blockquote>
<p>\u6CE8\u610F\u8FD9\u91CC\u7684<code dir="auto">kubeClient</code>\u6240\u8C03\u7528\u7684\u65B9\u6CD5\u662F<code dir="auto">istio</code>\u7684Kubernetes\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u3002</p>
</blockquote>
<h4 id="\u5728ready\u670D\u52A1\u8BB0\u5F55\u8868\u91CC\u6CE8\u518Cxds\u670D\u52A1">\u5728ready\u670D\u52A1\u8BB0\u5F55\u8868\u91CC\u6CE8\u518Cxds\u670D\u52A1</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">s.readinessProbes["xds"] = func() (bool, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return s.xdsServer.IsServerReady(), nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="s.readinessProbes[&#x22;xds&#x22;] = func() (bool, error) {\x7F    return s.xdsServer.IsServerReady(), nil\x7F}"><div></div></button></div></figure></div>
<h3 id="\u542F\u52A8\u5B9E\u4F8Bstart">\u542F\u52A8\u5B9E\u4F8B\uFF1AStart</h3>
<ul>
<li>\u7B2C\u4E00\u90E8\u5206\uFF1A\u904D\u5386pilot server\u7684<code dir="auto">components</code>\uFF0C\u6267\u884Cchan\u7BA1\u9053\u91CC\u7684\u51FD\u6570</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> s.server.</span><span style="--0:#B392F0">Start</span><span style="--0:#E1E4E8">(stop); err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> err</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="if err := s.server.Start(stop); err != nil {\x7F    return err\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u7B2C\u4E8C\u90E8\u5206\uFF1A\u7B49\u5F85\u7F13\u5B58\u540C\u6B65\u5B8C\u6210</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">!</span><span style="--0:#E1E4E8">s.</span><span style="--0:#B392F0">waitForCacheSync</span><span style="--0:#E1E4E8">(stop) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> fmt.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"failed to sync cache"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="if !s.waitForCacheSync(stop) {\x7F    return fmt.Errorf(&#x22;failed to sync cache&#x22;)\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u7B2C\u4E09\u90E8\u5206\uFF1A\u542F\u52A8grpc\u670D\u52A1</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">grpcListener, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> net.</span><span style="--0:#B392F0">Listen</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"tcp"</span><span style="--0:#E1E4E8">, s.GrpcAddress)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> err</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"starting gRPC discovery service at </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, grpcListener.</span><span style="--0:#B392F0">Addr</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> s.grpcServer.</span><span style="--0:#B392F0">Serve</span><span style="--0:#E1E4E8">(grpcListener); err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"error serving GRPC server: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}()</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grpcListener, err := net.Listen(&#x22;tcp&#x22;, s.GrpcAddress)\x7Fif err != nil {\x7F    return err\x7F}\x7Fgo func() {\x7F    log.Infof(&#x22;starting gRPC discovery service at %s&#x22;, grpcListener.Addr())\x7F    if err := s.grpcServer.Serve(grpcListener); err != nil {\x7F       log.Errorf(&#x22;error serving GRPC server: %v&#x22;, err)\x7F    }\x7F}()"><div></div></button></div></figure></div>
<ul>
<li>\u7B2C\u56DB\u90E8\u5206\uFF1A\u542F\u52A8http\u670D\u52A1</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">httpListener, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> net.</span><span style="--0:#B392F0">Listen</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"tcp"</span><span style="--0:#E1E4E8">, s.HttpAddress)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> err</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"starting HTTP service at </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, httpListener.</span><span style="--0:#B392F0">Addr</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> s.httpServer.</span><span style="--0:#B392F0">Serve</span><span style="--0:#E1E4E8">(httpListener); err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"error serving http server: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}()</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="httpListener, err := net.Listen(&#x22;tcp&#x22;, s.HttpAddress)\x7Fif err != nil {\x7F    return err\x7F}\x7Fgo func() {\x7F    log.Infof(&#x22;starting HTTP service at %s&#x22;, httpListener.Addr())\x7F    if err := s.httpServer.Serve(httpListener); err != nil {\x7F       log.Errorf(&#x22;error serving http server: %v&#x22;, err)\x7F    }\x7F}()"><div></div></button></div></figure></div>
<h2 id="higress-core\u6838\u5FC3\u6E90\u7801\u5206\u6790">higress-core\u6838\u5FC3\u6E90\u7801\u5206\u6790</h2>
<p>\u5728\u524D\u9762\u6709\u4E24\u4E2A\u51FD\u6570<code dir="auto">initConfigController</code>\u548C<code dir="auto">initRegistryEventHandlers</code>\u6211\u4EEC\u6CA1\u6709\u4ECB\u7ECD\uFF0C\u8FD9\u4E24\u4E2A\u51FD\u6570\u53EF\u4EE5\u8BF4\u662Fhigress-core\u7684\u6838\u5FC3\u4EE3\u7801\uFF0C\u63A5\u4E0B\u6765\u5BF9\u8FD9\u4E24\u4E2A\u51FD\u6570\u8FDB\u884C\u5177\u4F53\u5256\u6790\u3002\u5728\u5206\u6790\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E0B<code dir="auto">pkg</code>\u5176\u4ED6\u76EE\u5F55\u7684\u529F\u80FD\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u251C\u2500\u2500 common //\u516C\u5171\u5305</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u251C\u2500\u2500 config //\u914D\u7F6E\u5305</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u251C\u2500\u2500 ingress //higress\u5B9A\u4E49\u7684ingress\u8D44\u6E90\u63A7\u5236\u5668</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u251C\u2500\u2500 config //\u914D\u7F6Eingress config\u548Ckingress config</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u251C\u2500\u2500 kube //\u96C6\u6210Kubernetes\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 annotations //\u5904\u7406 Ingress \u7684\u6CE8\u89E3\u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 common //\u901A\u7528\u7684\u4EE3\u7801\u548C\u5DE5\u5177\u51FD\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 configmap //\u5904\u7406 ConfigMap \u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 controller //\u63A7\u5236\u5668\u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 http2rpc //\u5904\u7406 HTTP \u5230 RPC \u7684\u8F6C\u6362\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 ingress //\u5904\u7406 Ingress \u914D\u7F6E\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 ingressv1 //Ingress \u7684 API \u7248\u672C v1 \u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 kingress //\u5904\u7406 Kingress \u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 mcpbridge //MCP\uFF08Mesh Configuration Protocol\uFF09\u7684\u6865\u63A5\u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 secret //\u5904\u7406 Secret \u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 util //\u901A\u7528\u7684\u5DE5\u5177\u51FD\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 wasmplugin //\u5904\u7406 WebAssembly \u63D2\u4EF6\u76F8\u5173\u7684\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u251C\u2500\u2500 log //\u65E5\u5FD7</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u251C\u2500\u2500 mcp</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502\xA0\xA0 \u2514\u2500\u2500 translation //\u7FFB\u8BD1\u6A21\u5757</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2514\u2500\u2500 kube //higress\u5B9A\u4E49\u7684Kubernetes\u5BA2\u6237\u7AEF\uFF0C\u5305\u542B\u4E86istio\u63D0\u4F9B\u7684Kubernetes\u5BA2\u6237\u7AEF</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=".\x7F\u251C\u2500\u2500 common //\u516C\u5171\u5305\x7F\u251C\u2500\u2500 config //\u914D\u7F6E\u5305\x7F\u251C\u2500\u2500 ingress //higress\u5B9A\u4E49\u7684ingress\u8D44\u6E90\u63A7\u5236\u5668\x7F\u2502\xA0\xA0 \u251C\u2500\u2500 config //\u914D\u7F6Eingress config\u548Ckingress config\x7F\u2502\xA0\xA0 \u251C\u2500\u2500 kube //\u96C6\u6210Kubernetes\u914D\u7F6E\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 annotations //\u5904\u7406 Ingress \u7684\u6CE8\u89E3\u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 common //\u901A\u7528\u7684\u4EE3\u7801\u548C\u5DE5\u5177\u51FD\u6570\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 configmap //\u5904\u7406 ConfigMap \u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 controller //\u63A7\u5236\u5668\u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 http2rpc //\u5904\u7406 HTTP \u5230 RPC \u7684\u8F6C\u6362\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 ingress //\u5904\u7406 Ingress \u914D\u7F6E\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 ingressv1 //Ingress \u7684 API \u7248\u672C v1 \u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 kingress //\u5904\u7406 Kingress \u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 mcpbridge //MCP\uFF08Mesh Configuration Protocol\uFF09\u7684\u6865\u63A5\u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 secret //\u5904\u7406 Secret \u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 util //\u901A\u7528\u7684\u5DE5\u5177\u51FD\u6570\x7F\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 wasmplugin //\u5904\u7406 WebAssembly \u63D2\u4EF6\u76F8\u5173\u7684\u4EE3\u7801\x7F\u2502\xA0\xA0 \u251C\u2500\u2500 log //\u65E5\u5FD7\x7F\u2502\xA0\xA0 \u251C\u2500\u2500 mcp\x7F\u2502\xA0\xA0 \u2514\u2500\u2500 translation //\u7FFB\u8BD1\u6A21\u5757\x7F\u2514\u2500\u2500 kube //higress\u5B9A\u4E49\u7684Kubernetes\u5BA2\u6237\u7AEF\uFF0C\u5305\u542B\u4E86istio\u63D0\u4F9B\u7684Kubernetes\u5BA2\u6237\u7AEF"><div></div></button></div></figure></div>
<p>\u901A\u8FC7\u76EE\u5F55\u6211\u4EEC\u53EF\u4EE5\u6E05\u6670\u5730\u770B\u5230higress\u96C6\u6210\u4E86\u591A\u4E2AKubernetes\u8D44\u6E90\u4EE5\u53CAIngress\u914D\u7F6E\u3002</p>
<h3 id="initconfigcontroller\u51FD\u6570\u5256\u6790"><code dir="auto">initConfigController</code>\u51FD\u6570\u5256\u6790</h3>
<p>\u6211\u4EEC\u5148\u5927\u81F4\u5206\u6790\u4E00\u4E0B\u8FD9\u4E2A\u51FD\u6570\u7684\u6D41\u7A0B\uFF0C\u51FD\u6570\u7684\u5177\u4F53\u903B\u8F91\u7A0D\u540E\u5206\u6790\u3002\u6700\u540E\u4F1A\u7ED9\u51FA\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u7684\u6D41\u7A0B\u56FE\uFF0C\u53EF\u4EE5\u7ED3\u5408\u6D41\u7A0B\u56FE\u8FDB\u884C\u6E90\u7801\u7684\u7406\u89E3\u5206\u6790\u3002</p>
<ol>
<li>\u8BBE\u7F6E <code dir="auto">common.Options</code> \u7ED3\u6784\u4F53\u7684\u4E00\u4E9B\u9009\u9879\uFF0C\u8FD9\u4E9B\u9009\u9879\u53EF\u80FD\u5F71\u54CD\u914D\u7F6E\u63A7\u5236\u5668\u7684\u884C\u4E3A\u3002\u8FD9\u4E9B\u9009\u9879\u5305\u62EC\u662F\u5426\u542F\u7528\u63A7\u5236\u5668\u3001\u96C6\u7FA4 ID\u3001Ingress \u7C7B\u7B49</li>
<li>\u521B\u5EFA\u4E00\u4E2A <code dir="auto">translation.NewIngressTranslation</code> \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7528\u4E8E\u5904\u7406 Ingress \u7684\u7FFB\u8BD1\u548C\u914D\u7F6E</li>
<li>\u5411 <code dir="auto">ingressConfig</code> \u4E2D\u6DFB\u52A0\u672C\u5730\u96C6\u7FA4\u7684\u914D\u7F6E\uFF0C\u5E76\u83B7\u53D6\u5BF9\u5E94\u7684 Ingress \u63A7\u5236\u5668\u548C Kingress \u63A7\u5236\u5668</li>
<li>\u4F7F\u7528 <code dir="auto">configaggregate.MakeCache</code> \u521B\u5EFA\u4E00\u4E2A\u5E26\u6709\u7F13\u5B58\u7684\u914D\u7F6E\u63A7\u5236\u5668</li>
<li>\u521B\u5EFA\u4E00\u4E2A Istio \u914D\u7F6E\u5B58\u50A8\uFF0C\u5E76\u5C06\u5176\u8BBE\u7F6E\u5230 <code dir="auto">Server</code> \u5BF9\u8C61\u7684 <code dir="auto">environment.IstioConfigStore</code> \u4E2D</li>
<li>\u5C06 <code dir="auto">ingressConfig</code> \u8BBE\u7F6E\u5230 <code dir="auto">Server</code> \u5BF9\u8C61\u7684 <code dir="auto">environment.IngressStore</code> \u4E2D</li>
<li>\u5C06\u5305\u542B\u914D\u7F6E\u548C\u542F\u52A8 Ingress \u63A7\u5236\u5668\u3001Kingress \u63A7\u5236\u5668\u4EE5\u53CA\u76F8\u5173\u7684\u914D\u7F6E\u63A7\u5236\u5668\u7684\u51FD\u6570\u65B9\u6CD5\u6CE8\u518C\u5230pilot server instance\u7684<code dir="auto">components</code>\u7BA1\u9053\u4E2D\u3002</li>
</ol>
<p>\u6211\u4EEC\u4ECE\u4E2D\u6311\u9009\u51FA\u51E0\u4E2A\u6BD4\u8F83\u91CD\u8981\u7684\u51FD\u6570\u51FA\u6765\uFF1A<code dir="auto">NewIngressTranslation</code>\u3001<code dir="auto">AddLocalCluster</code>\u3001<code dir="auto">InitializeCluster</code>\u4EE5\u53CA<code dir="auto">configController</code>\u7684<code dir="auto">Run</code>\u65B9\u6CD5\uFF0C\u5176\u5B83\u7684\u50CF<code dir="auto">MakeCache</code>\u3001<code dir="auto">MakeIstioStore</code>\u65B9\u6CD5\u5219\u662F\u6709<code dir="auto">istio</code>\u63D0\u4F9B\u7684\u51FD\u6570\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u63A5higress\u4E2D\u7684discovery\u5BB9\u5668\u4E2D<code dir="auto">Pilot</code>\u7EC4\u4EF6\u3002\u786E\u5B9A\u597D\u63A5\u4E0B\u6765\u8981\u5206\u6790\u7684\u5185\u5BB9\u4E4B\u540E\uFF0C\u6211\u4EEC\u6765\u5230<code dir="auto">pkg/ingress/translattion</code>\u76EE\u5F55\uFF0C\u67E5\u770B\u4E00\u4E0B<code dir="auto">translation.go</code>\u3002</p>
<h4 id="translationgo\u5256\u6790"><code dir="auto">translation.go</code>\u5256\u6790</h4>
<p><code dir="auto">IngressTranslation</code>\u5B9E\u73B0\u4E86\u4E24\u4E2A\u63A5\u53E3\uFF1A<code dir="auto">model.ConfigStoreCache</code>\u548C<code dir="auto">model.IngressStore</code>\uFF0C\u5176\u4E2D<code dir="auto">model.ConfigStoreCache</code>\u8FD8\u5305\u542B\u4E86<code dir="auto">model.ConfigStore</code>\u63A5\u53E3\u3002\u6211\u4EEC\u53EF\u4EE5\u5927\u81F4\u6D4F\u89C8\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u53D1\u73B0\u57FA\u672C\u4E0A\u662F\u8C03\u7528<code dir="auto">IngressTranslation</code>\u7ED3\u6784\u4F53\u4E2D\u7684<code dir="auto">ingressConfig</code>\u548C<code dir="auto">kingressConfig</code>\u7684\u65B9\u6CD5\uFF0C\u4F4D\u4E8E<code dir="auto">pkg/ingress/config</code>\u76EE\u5F55\u4E0B\u3002</p>
<p>\u9664\u4E86\u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5\u4E4B\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86<code dir="auto">NewIngressTranslation</code>\u3001<code dir="auto">AddLocalCluster</code>\u3001<code dir="auto">InitializeCluster</code>\u65B9\u6CD5\u3002\u540C\u6837\u5730\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u53D1\u73B0\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u672C\u8D28\u4E0A\u4E5F\u662F\u8C03\u7528<code dir="auto">ingressConfig</code>\u548C<code dir="auto">kingressConfig</code>\u7684\u65B9\u6CD5\u3002</p>
<p>\u65E2\u7136<code dir="auto">translation.go</code>\u672C\u8D28\u4E0A\u662F\u8C03\u7528<code dir="auto">pkg/ingress/config</code>\u76EE\u5F55\u4E0B\u7684\u51FD\u6570\uFF0C\u4E0D\u59A8\u6211\u4EEC\u8FDB\u5165\u8BE5\u76EE\u5F55\uFF0C\u67E5\u770B\u4E00\u4E0B<code dir="auto">ingress_config.go</code>\uFF0C\u5BF9\u4E8E<code dir="auto">kingress_config.go</code>\uFF0C\u6211\u4EEC\u6682\u4E0D\u505A\u5206\u6790\u3002</p>
<h4 id="ingress_configgo\u5256\u6790"><code dir="auto">ingress_config.go</code>\u5256\u6790</h4>
<p>\u5728<code dir="auto">ingress_config.go</code>\u4E2D\u6709\u4E00\u4E2A\u540D\u4E3A<code dir="auto">IngressConfig</code>\u7ED3\u6784\u4F53\uFF0C\u5185\u5BB9\u5982\u4E0B(\u9644\u5E26\u6CE8\u91CA)\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">IngressConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8FDC\u7A0B Ingress \u63A7\u5236\u5668\u7684\u6620\u5C04\uFF0C\u952E\u4E3A\u96C6\u7FA4 ID\uFF0C\u503C\u4E3A common.IngressController</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">remoteIngressControllers </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#B392F0">common</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">IngressController</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7528\u4E8E\u4FDD\u62A4\u5E76\u53D1\u8BBF\u95EE remoteIngressControllers \u7684\u4E92\u65A5\u9501</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mutex </span><span style="--0:#B392F0">sync</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">RWMutex</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Ingress \u8DEF\u7531\u548C\u57DF\u540D\u7684\u7F13\u5B58</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">ingressRouteCache  </span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">IngressRouteCollection</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">ingressDomainCache </span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">IngressDomainCollection</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u672C\u5730 Kubernetes \u5BA2\u6237\u7AEF</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">localKubeClient </span><span style="--0:#B392F0">kube</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Client</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406 VirtualService \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">virtualServiceHandlers []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406 Gateway \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">gatewayHandlers []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406 DestinationRule \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">destinationRuleHandlers []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406 EnvoyFilter \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">envoyFilterHandlers []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406 ServiceEntry \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">serviceEntryHandlers []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406 WasmPlugin \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wasmPluginHandlers []</span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7528\u4E8E\u5904\u7406\u76D1\u89C6\u9519\u8BEF\u7684\u5904\u7406\u7A0B\u5E8F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">watchErrorHandler </span><span style="--0:#B392F0">cache</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">WatchErrorHandler</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7F13\u5B58\u7684 EnvoyFilter \u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">cachedEnvoyFilters []</span><span style="--0:#B392F0">config</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Config</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u6B63\u5728\u76D1\u89C6\u7684 Secret \u96C6\u5408</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">watchedSecretSet </span><span style="--0:#B392F0">sets</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Set</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7528\u4E8E\u534F\u8C03\u6CE8\u518C\u8868\u7684\u8C03\u89E3\u5668</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">RegistryReconciler </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">reconcile</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Reconciler</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// MCP \u6865\u63A5\u662F\u5426\u5DF2\u8C03\u89E3\u7684\u6807\u5FD7</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mcpbridgeReconciled </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">atomic</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Bool</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7BA1\u7406 MCP \u6865\u63A5\u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mcpbridgeController </span><span style="--0:#B392F0">mcpbridge</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">McpBridgeController</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mcpbridgeLister     </span><span style="--0:#B392F0">netlisterv1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">McpBridgeLister</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7BA1\u7406 WasmPlugin \u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wasmPluginController </span><span style="--0:#B392F0">wasmplugin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">WasmPluginController</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wasmPluginLister     </span><span style="--0:#B392F0">extlisterv1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">WasmPluginLister</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5DF2\u6CE8\u518C\u7684 WasmPlugin \u96C6\u5408\uFF0C\u952E\u4E3A WasmPlugin \u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wasmPlugins </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">*</span><span style="--0:#B392F0">extensions</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">WasmPlugin</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7BA1\u7406 HTTP2RPC \u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">http2rpcController </span><span style="--0:#B392F0">http2rpc</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Http2RpcController</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">http2rpcLister     </span><span style="--0:#B392F0">netlisterv1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Http2RpcLister</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5DF2\u6CE8\u518C\u7684 HTTP2RPC \u96C6\u5408\uFF0C\u952E\u4E3A HTTP2RPC \u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">http2rpcs </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">*</span><span style="--0:#B392F0">higressv1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Http2Rpc</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Configmap \u7684\u7BA1\u7406\u5668</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">configmapMgr </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">configmap</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ConfigmapMgr</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7528\u4E8E\u66F4\u65B0 XDS</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">XDSUpdater </span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">XDSUpdater</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u5904\u7406\u6CE8\u89E3\u7684\u6CE8\u89E3\u5904\u7406\u7A0B\u5E8F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">annotationHandler </span><span style="--0:#B392F0">annotations</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">AnnotationHandler</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u547D\u540D\u7A7A\u95F4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">namespace </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u96C6\u7FA4 ID</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">clusterId </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type IngressConfig struct {\x7F    // \u8FDC\u7A0B Ingress \u63A7\u5236\u5668\u7684\u6620\u5C04\uFF0C\u952E\u4E3A\u96C6\u7FA4 ID\uFF0C\u503C\u4E3A common.IngressController\x7F    remoteIngressControllers map[string]common.IngressController\x7F    // \u7528\u4E8E\u4FDD\u62A4\u5E76\u53D1\u8BBF\u95EE remoteIngressControllers \u7684\u4E92\u65A5\u9501\x7F    mutex sync.RWMutex\x7F\x7F    // Ingress \u8DEF\u7531\u548C\u57DF\u540D\u7684\u7F13\u5B58\x7F    ingressRouteCache  model.IngressRouteCollection\x7F    ingressDomainCache model.IngressDomainCollection\x7F\x7F    // \u672C\u5730 Kubernetes \u5BA2\u6237\u7AEF\x7F    localKubeClient kube.Client\x7F\x7F    // \u5904\u7406 VirtualService \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247\x7F    virtualServiceHandlers []model.EventHandler\x7F    // \u5904\u7406 Gateway \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247\x7F    gatewayHandlers []model.EventHandler\x7F    // \u5904\u7406 DestinationRule \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247\x7F    destinationRuleHandlers []model.EventHandler\x7F    // \u5904\u7406 EnvoyFilter \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247\x7F    envoyFilterHandlers []model.EventHandler\x7F    // \u5904\u7406 ServiceEntry \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247\x7F    serviceEntryHandlers []model.EventHandler\x7F    // \u5904\u7406 WasmPlugin \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247\x7F    wasmPluginHandlers []model.EventHandler\x7F\x7F    // \u7528\u4E8E\u5904\u7406\u76D1\u89C6\u9519\u8BEF\u7684\u5904\u7406\u7A0B\u5E8F\x7F    watchErrorHandler cache.WatchErrorHandler\x7F\x7F    // \u7F13\u5B58\u7684 EnvoyFilter \u914D\u7F6E\x7F    cachedEnvoyFilters []config.Config\x7F\x7F    // \u6B63\u5728\u76D1\u89C6\u7684 Secret \u96C6\u5408\x7F    watchedSecretSet sets.Set\x7F\x7F    // \u7528\u4E8E\u534F\u8C03\u6CE8\u518C\u8868\u7684\u8C03\u89E3\u5668\x7F    RegistryReconciler *reconcile.Reconciler\x7F\x7F    // MCP \u6865\u63A5\u662F\u5426\u5DF2\u8C03\u89E3\u7684\u6807\u5FD7\x7F    mcpbridgeReconciled *atomic.Bool\x7F\x7F    // \u7BA1\u7406 MCP \u6865\u63A5\u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868\x7F    mcpbridgeController mcpbridge.McpBridgeController\x7F    mcpbridgeLister     netlisterv1.McpBridgeLister\x7F\x7F    // \u7BA1\u7406 WasmPlugin \u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868\x7F    wasmPluginController wasmplugin.WasmPluginController\x7F    wasmPluginLister     extlisterv1.WasmPluginLister\x7F\x7F    // \u5DF2\u6CE8\u518C\u7684 WasmPlugin \u96C6\u5408\uFF0C\u952E\u4E3A WasmPlugin \u540D\u79F0\x7F    wasmPlugins map[string]*extensions.WasmPlugin\x7F\x7F    // \u7BA1\u7406 HTTP2RPC \u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868\x7F    http2rpcController http2rpc.Http2RpcController\x7F    http2rpcLister     netlisterv1.Http2RpcLister\x7F\x7F    // \u5DF2\u6CE8\u518C\u7684 HTTP2RPC \u96C6\u5408\uFF0C\u952E\u4E3A HTTP2RPC \u540D\u79F0\x7F    http2rpcs map[string]*higressv1.Http2Rpc\x7F\x7F    // Configmap \u7684\u7BA1\u7406\u5668\x7F    configmapMgr *configmap.ConfigmapMgr\x7F\x7F    // \u7528\u4E8E\u66F4\u65B0 XDS\x7F    XDSUpdater model.XDSUpdater\x7F\x7F    // \u5904\u7406\u6CE8\u89E3\u7684\u6CE8\u89E3\u5904\u7406\u7A0B\u5E8F\x7F    annotationHandler annotations.AnnotationHandler\x7F\x7F    // \u547D\u540D\u7A7A\u95F4\x7F    namespace string\x7F\x7F    // \u96C6\u7FA4 ID\x7F    clusterId string\x7F}"><div></div></button></div></figure></div>
<p>\u8BE5\u7ED3\u6784\u4F53\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u7ED3\u6784\u4F53\u672C\u8D28\u4E0A\u4E5F\u662F\u5B9E\u73B0\u4E86<code dir="auto">translation.go</code>\u63D0\u5230\u7684\u4E24\u4E2A\u63A5\u53E3\uFF0C\u65B9\u6CD5\u5217\u8868\u548C<code dir="auto">translation.go</code>\u6781\u5176\u76F8\u4F3C\uFF0C\u6211\u4EEC\u5206\u6790\u4E00\u4E0B\u4E00\u4E9B\u6BD4\u8F83\u590D\u6742\u7684\u65B9\u6CD5\uFF0C\u5269\u4E0B\u7684\u53EF\u81EA\u884C\u5B9A\u4F4D\u5230\u6E90\u7801\u67E5\u770B\uFF1A</p>
<ul>
<li>
<p><code dir="auto">NewIngressConfig</code></p>
<ol>
<li>\u521D\u59CB\u5316<code dir="auto">IngressConfig</code>\uFF0C\u521B\u5EFA\u591A\u4E2A\u5B50\u63A7\u5236\u5668(mcpbridge\u3001wasmplugin\u3001http2rpc\u7B49)\u5E76\u8D4B\u503C\u7ED9\u5BF9\u5E94\u7684\u5B57\u6BB5\u4E0A\u3002</li>
<li>\u4E3A\u591A\u4E2A\u5B50\u63A7\u5236\u5668\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u7528\u4E8E\u76D1\u542CKubernetes\u8D44\u6E90\u7684\u53D8\u5316\uFF0C\u5E76\u8FDB\u884C\u76F8\u5E94\u7684\u5904\u7406\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">config </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">IngressConfig</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">remoteIngressControllers: </span><span style="--0:#B392F0">make</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#B392F0">common</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">IngressController</span><span style="--0:#E1E4E8">),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">localKubeClient:          localKubeClient,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">XDSUpdater:               XDSUpdater,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">annotationHandler:        annotations.</span><span style="--0:#B392F0">NewAnnotationHandlerManager</span><span style="--0:#E1E4E8">(),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">mcpbridgeController </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> mcpbridge.</span><span style="--0:#B392F0">NewController</span><span style="--0:#E1E4E8">(localKubeClient, clusterId)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">mcpbridgeController.</span><span style="--0:#B392F0">AddEventHandler</span><span style="--0:#E1E4E8">(config.AddOrUpdateMcpBridge, config.DeleteMcpBridge)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">config.mcpbridgeController </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> mcpbridgeController</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">config.mcpbridgeLister </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> mcpbridgeController.</span><span style="--0:#B392F0">Lister</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="config := &#x26;IngressConfig{\x7F    remoteIngressControllers: make(map[string]common.IngressController),\x7F    localKubeClient:          localKubeClient,\x7F    XDSUpdater:               XDSUpdater,\x7F    annotationHandler:        annotations.NewAnnotationHandlerManager(),\x7F    ...\x7F}\x7FmcpbridgeController := mcpbridge.NewController(localKubeClient, clusterId)\x7FmcpbridgeController.AddEventHandler(config.AddOrUpdateMcpBridge, config.DeleteMcpBridge)\x7Fconfig.mcpbridgeController = mcpbridgeController\x7Fconfig.mcpbridgeLister = mcpbridgeController.Lister()\x7F..."><div></div></button></div></figure></div>
</li>
</ul>
<p>\u5728\u8FD9\u91CC\uFF0C\u6709\u51E0\u4E2A\u65B9\u6CD5\u9700\u8981\u6CE8\u610F\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. \`annotations.NewAnnotationHandlerManager()\`</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. \`mcpbridge.NewController(localKubeClient, clusterId)\`</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. \`wasmplugin.NewController(localKubeClient, clusterId)\`</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. \`http2rpc.NewController(localKubeClient, clusterId)\`</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">5. \`configmap.NewController(localKubeClient, clusterId, namespace)\`</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="1. &#x60;annotations.NewAnnotationHandlerManager()&#x60;\x7F2. &#x60;mcpbridge.NewController(localKubeClient, clusterId)&#x60;\x7F3. &#x60;wasmplugin.NewController(localKubeClient, clusterId)&#x60;\x7F4. &#x60;http2rpc.NewController(localKubeClient, clusterId)&#x60;\x7F5. &#x60;configmap.NewController(localKubeClient, clusterId, namespace)&#x60;"><div></div></button></div></figure></div>
<p>\u5F88\u660E\u663E\u8FD9\u4E9B\u65B9\u6CD5\u5206\u522B\u5BF9\u5E94<code dir="auto">pkg/ingress/kube</code>\u76EE\u5F55\u4E0B\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u8D44\u6E90\u914D\u7F6E\u65B9\u6CD5\uFF0C\u540E\u9762\u4F1A\u9488\u5BF9\u8BE5\u76EE\u5F55\u8FDB\u884C\u5355\u72EC\u7684\u4ECB\u7ECD\u3002</p>
<ul>
<li>
<p><code dir="auto">RegisterEventHandler</code></p>
<ol>
<li>\u5BF9kind\u53D8\u91CF\u8FDB\u884C\u5224\u65AD\uFF0C\u5224\u65AD\u5C5E\u4E8E\u54EA\u79CD\u8D44\u6E90\uFF0C\u5E76\u6DFB\u52A0\u5230\u5BF9\u5E94\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">switch</span><span style="--0:#E1E4E8"> kind {</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> gvk.VirtualService:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">   </span></span><span style="--0:#E1E4E8">m.virtualServiceHandlers </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">append</span><span style="--0:#E1E4E8">(m.virtualServiceHandlers, f)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="switch kind {\x7Fcase gvk.VirtualService:\x7F   m.virtualServiceHandlers = append(m.virtualServiceHandlers, f)\x7F\x7F...\x7F}"><div></div></button></div></figure></div>
<ol start="2">
<li>\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, remoteIngressController </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> m.remoteIngressControllers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">remoteIngressController.</span><span style="--0:#B392F0">RegisterEventHandler</span><span style="--0:#E1E4E8">(kind, f)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="for _, remoteIngressController := range m.remoteIngressControllers {\x7F    remoteIngressController.RegisterEventHandler(kind, f)\x7F}"><div></div></button></div></figure></div>
<p>\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4F4D\u4E00\u4E0B<code dir="auto">remoteIngressController</code>\u7684<code dir="auto">RegisterEventHandler</code>\u65B9\u6CD5\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> (</span><span style="--0:#FFAB70">c </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">controller</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">RegisterEventHandler</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">config</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">GroupVersionKind</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">f</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">model</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">EventHandler</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">switch</span><span style="--0:#E1E4E8"> kind {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> gvk.VirtualService:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">c.virtualServiceHandlers </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">append</span><span style="--0:#E1E4E8">(c.virtualServiceHandlers, f)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (c *controller) RegisterEventHandler(kind config.GroupVersionKind, f model.EventHandler) {\x7F    switch kind {\x7F    case gvk.VirtualService:\x7F       c.virtualServiceHandlers = append(c.virtualServiceHandlers, f)\x7F    ...\x7F    }\x7F}"><div></div></button></div></figure></div>
</li>
<li>
<p><code dir="auto">AddLocalCluster</code></p>
<ol>
<li>\u521B\u5EFAingress\u603B\u63A7\u5236\u5668\uFF0C\u5E76\u6CE8\u518C\u5230<code dir="auto">remoteIngressControllers</code>\u4E2D</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">ingressController </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> ingress.</span><span style="--0:#B392F0">NewController</span><span style="--0:#E1E4E8">(m.localKubeClient, m.localKubeClient, options, secretController)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">m.remoteIngressControllers[options.ClusterId] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> ingressController</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ingressController = ingress.NewController(m.localKubeClient, m.localKubeClient, options, secretController)\x7Fm.remoteIngressControllers[options.ClusterId] = ingressController"><div></div></button></div></figure></div>
</li>
<li>
<p><code dir="auto">InitializeCluster</code></p>
<ol>
<li>\u8BBE\u7F6E\u9519\u8BEF\u76D1\u542C\u5904\u7406\u5668</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">_ </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> ingressController.</span><span style="--0:#B392F0">SetWatchErrorHandler</span><span style="--0:#E1E4E8">(m.watchErrorHandler)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="_ = ingressController.SetWatchErrorHandler(m.watchErrorHandler)"><div></div></button></div></figure></div>
<p>\u5176\u4E2D<code dir="auto">SetWatchErrorHandler</code>\u65B9\u6CD5\u5982\u4E0B\uFF0C\u8C03\u7528\u5404\u4E2Ainformer\u7684<code dir="auto">SetWatchErrorHandler</code>\u65B9\u6CD5\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> (</span><span style="--0:#FFAB70">c </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">controller</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">SetWatchErrorHandler</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">handler</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">r</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">cache</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Reflector</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">err</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> errs </span><span style="--0:#F97583">error</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> c.serviceInformer.</span><span style="--0:#B392F0">SetWatchErrorHandler</span><span style="--0:#E1E4E8">(handler); err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">errs </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> multierror.</span><span style="--0:#B392F0">Append</span><span style="--0:#E1E4E8">(errs, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> c.ingressInformer.</span><span style="--0:#B392F0">SetWatchErrorHandler</span><span style="--0:#E1E4E8">(handler); err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">errs </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> multierror.</span><span style="--0:#B392F0">Append</span><span style="--0:#E1E4E8">(errs, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> errs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (c *controller) SetWatchErrorHandler(handler func(r *cache.Reflector, err error)) error {\x7F    var errs error\x7F    if err := c.serviceInformer.SetWatchErrorHandler(handler); err != nil {\x7F       errs = multierror.Append(errs, err)\x7F    }\x7F    if err := c.ingressInformer.SetWatchErrorHandler(handler); err != nil {\x7F       errs = multierror.Append(errs, err)\x7F    }\x7F    ...\x7F    return errs\x7F}"><div></div></button></div></figure></div>
<ol start="3">
<li>\u901A\u8FC7go\u534F\u7A0B\u542F\u52A8<code dir="auto">ingressController</code></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">go</span><span style="--0:#E1E4E8"> ingressController.</span><span style="--0:#B392F0">Run</span><span style="--0:#E1E4E8">(stop)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go ingressController.Run(stop)"><div></div></button></div></figure></div>
</li>
<li>
<p><code dir="auto">List</code></p>
<ol>
<li>\u524D\u671F\u68C0\u67E5\uFF0C\u9884\u9632\u7A7A\u6307\u9488\u6216\u903B\u8F91\u9519\u8BEF</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> typ </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> gvk.Gateway </span><span style="--0:#F97583">&#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">typ </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> gvk.VirtualService </span><span style="--0:#F97583">&#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">typ </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> gvk.DestinationRule </span><span style="--0:#F97583">&#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">typ </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> gvk.EnvoyFilter </span><span style="--0:#F97583">&#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">typ </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> gvk.ServiceEntry </span><span style="--0:#F97583">&#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">typ </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> gvk.WasmPlugin {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, common.ErrUnsupportedOp</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// Currently, only support list all namespaces gateways or virtualservices.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> namespace </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">IngressLog.</span><span style="--0:#B392F0">Warnf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"ingress store only support type </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF"> of all namespace."</span><span style="--0:#E1E4E8">, typ)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, common.ErrUnsupportedOp</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="if typ != gvk.Gateway &#x26;&#x26;\x7F    typ != gvk.VirtualService &#x26;&#x26;\x7F    typ != gvk.DestinationRule &#x26;&#x26;\x7F    typ != gvk.EnvoyFilter &#x26;&#x26;\x7F    typ != gvk.ServiceEntry &#x26;&#x26;\x7F    typ != gvk.WasmPlugin {\x7F    return nil, common.ErrUnsupportedOp\x7F}\x7F\x7F// Currently, only support list all namespaces gateways or virtualservices.\x7Fif namespace != &#x22;&#x22; {\x7F    IngressLog.Warnf(&#x22;ingress store only support type %s of all namespace.&#x22;, typ)\x7F    return nil, common.ErrUnsupportedOp\x7F}"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5982\u679Ckind\u7C7B\u578B\u662Fenvoyfilter\uFF0C\u62FF\u51FA\u6765\u5904\u7406\u6389</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> typ </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> gvk.EnvoyFilter {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Build configmap envoy filters</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">configmapEnvoyFilters, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> m.configmapMgr.</span><span style="--0:#B392F0">ConstructEnvoyFilters</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="if typ == gvk.EnvoyFilter {\x7F    ...\x7F    // Build configmap envoy filters\x7FconfigmapEnvoyFilters, err := m.configmapMgr.ConstructEnvoyFilters()\x7F    ...\x7F}"><div></div></button></div></figure></div>
<ol start="3">
<li>\u5982\u679C\u4E0D\u662F\uFF0C\u8C03\u7528ingress\u63A7\u5236\u5668(\u5982\u679C\u6709kingress\u63A7\u5236\u5668\uFF0C\u4E5F\u7ED9\u5E26\u4E0A)\u7684<code dir="auto">List</code>\u65B9\u6CD5\uFF0C\u6DFB\u52A0\u5230config\u5217\u8868\uFF0C\u4EE5ingress\u63A7\u5236\u5668\u7684\u65B9\u6CD5\u4E3A\u4F8B\uFF0C\u4F1A\u83B7\u53D6informer\u5BF9\u8C61\u7684\u5B58\u50A8\u5668\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u904D\u5386\uFF0C\u5C06\u904D\u5386\u5230\u7684\u5BF9\u8C61\u8FDB\u884C\u6DF1\u62F7\u8D1D\uFF0C\u5E76\u8FD4\u56DEconfig\u5217\u8868\u3002\u7531\u4E8E<code dir="auto">List</code>\u65B9\u6CD5\u662F\u5B9E\u73B0<code dir="auto">ConfigStore</code>\u63A5\u53E3\u7684\uFF0C<code dir="auto">istio</code>\u5185\u90E8\u4F1A\u5BF9\u8FD9\u4E2Aconfig\u5217\u8868\u8FDB\u884C\u4E0B\u4E00\u6B65\u5904\u7406\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> configs []</span><span style="--0:#B392F0">config</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Config</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">m.mutex.</span><span style="--0:#B392F0">RLock</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, ingressController </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> m.remoteIngressControllers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">configs </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">append</span><span style="--0:#E1E4E8">(configs, ingressController.</span><span style="--0:#B392F0">List</span><span style="--0:#E1E4E8">()</span><span style="--0:#F97583">...</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">m.mutex.</span><span style="--0:#B392F0">RUnlock</span><span style="--0:#E1E4E8">()</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="var configs []config.Config\x7Fm.mutex.RLock()\x7Ffor _, ingressController := range m.remoteIngressControllers {\x7F    configs = append(configs, ingressController.List()...)\x7F}\x7Fm.mutex.RUnlock()"><div></div></button></div></figure></div>
<ol start="4">
<li>\u5BF9config\u5217\u8868\u6839\u636E\u521B\u5EFA\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u5305\u88C5\u597D\u7684config\u5217\u8868\uFF0CwrapperConfigs\u91CC\u9664\u4E86<code dir="auto">Config\`\`\uFF0C\u8FD8\u4F1A\u5305\u542B</code>AnnotationsConfig\`\u6CE8\u89E3\u914D\u7F6E</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">common.</span><span style="--0:#B392F0">SortIngressByCreationTime</span><span style="--0:#E1E4E8">(configs)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">wrapperConfigs </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> m.</span><span style="--0:#B392F0">createWrapperConfigs</span><span style="--0:#E1E4E8">(configs)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="common.SortIngressByCreationTime(configs)\x7FwrapperConfigs := m.createWrapperConfigs(configs)"><div></div></button></div></figure></div>
<ol start="5">
<li>\u6839\u636Ekind\u7C7B\u578B\uFF0C\u5C06wrapperConfigs\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u8D44\u6E90\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF0C\u5E76\u4E3AconvertGateways\u9644\u52A0\u6CE8\u91CA</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">switch</span><span style="--0:#E1E4E8"> typ {</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> gvk.Gateway:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//1.\u521D\u59CB\u5316ConvertOptions</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//2.\u8C03\u7528ingress\u63A7\u5236\u5668\u7684ConvertGateway\u65B9\u6CD5\uFF0C\u5728\u8FD9\u91CC\uFF0Cingress\u63A7\u5236\u5668\u9996\u5148\u505A\u4E00\u4E9B\u68C0\u67E5\uFF0C\u5E76\u904D\u5386rule\u89C4\u5219\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//  \u4E3A\u6BCF\u4E2Arule\u521B\u5EFAIngressDomainBuilder\u6784\u9020\u5668\uFF0C\u4E2D\u95F4\u8FC7\u7A0B\u4F1A\u6784\u9020gateway\u5305\u88C5\u5668\u3001\u83B7\u53D6tls\u5BC6\u94A5\u540D\u79F0\u7B49\u7B49</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//  \u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F1A\u5BF9config\u5305\u88C5\u5668\u8FDB\u884C\u4FEE\u6539</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//3.apply\u6CE8\u89E3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//4.\u7EC4\u5408\u6210istio\u80FD\u591F\u8BC6\u522B\u7684config\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> m.</span><span style="--0:#B392F0">convertGateways</span><span style="--0:#E1E4E8">(wrapperConfigs), </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> gvk.VirtualService:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> m.</span><span style="--0:#B392F0">convertVirtualService</span><span style="--0:#E1E4E8">(wrapperConfigs), </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> gvk.DestinationRule:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> m.</span><span style="--0:#B392F0">convertDestinationRule</span><span style="--0:#E1E4E8">(wrapperConfigs), </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="switch typ {\x7Fcase gvk.Gateway:\x7F    //1.\u521D\u59CB\u5316ConvertOptions\x7F    //2.\u8C03\u7528ingress\u63A7\u5236\u5668\u7684ConvertGateway\u65B9\u6CD5\uFF0C\u5728\u8FD9\u91CC\uFF0Cingress\u63A7\u5236\u5668\u9996\u5148\u505A\u4E00\u4E9B\u68C0\u67E5\uFF0C\u5E76\u904D\u5386rule\u89C4\u5219\u5217\u8868\x7F    //  \u4E3A\u6BCF\u4E2Arule\u521B\u5EFAIngressDomainBuilder\u6784\u9020\u5668\uFF0C\u4E2D\u95F4\u8FC7\u7A0B\u4F1A\u6784\u9020gateway\u5305\u88C5\u5668\u3001\u83B7\u53D6tls\u5BC6\u94A5\u540D\u79F0\u7B49\u7B49\x7F    //  \u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F1A\u5BF9config\u5305\u88C5\u5668\u8FDB\u884C\u4FEE\u6539\x7F    //3.apply\u6CE8\u89E3\x7F    //4.\u7EC4\u5408\u6210istio\u80FD\u591F\u8BC6\u522B\u7684config\u5217\u8868\x7F    return m.convertGateways(wrapperConfigs), nil\x7Fcase gvk.VirtualService:\x7F    return m.convertVirtualService(wrapperConfigs), nil\x7Fcase gvk.DestinationRule:\x7F    return m.convertDestinationRule(wrapperConfigs), nil\x7F...\x7F}"><div></div></button></div></figure></div>
<p>\u8FD9\u5757\u5185\u5BB9\u8F83\u591A\uFF0C\u5177\u5907\u4E00\u5B9A\u7684\u96BE\u5EA6\uFF0C\u9700\u8981\u5BF9\u5404\u4E2A\u8D44\u6E90\u6709\u4E00\u5B9A\u7684\u7406\u89E3\u3002</p>
</li>
</ul>
<p>\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u6781\u4E3A\u76F8\u4F3C\u7684</p>
<ul>
<li><code dir="auto">AddOrUpdateWasmPlugin</code></li>
<li><code dir="auto">DeleteWasmPlugin</code></li>
<li><code dir="auto">AddOrUpdateMcpBridge</code></li>
<li><code dir="auto">DeleteMcpBridge</code></li>
<li><code dir="auto">AddOrUpdateHttp2Rpc</code></li>
<li><code dir="auto">DeleteHttp2Rpc</code></li>
</ul>
<p>\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u5728\u76D1\u542C\u5BF9\u5E94\u8D44\u6E90\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u751F\u8D44\u6E90\u7684\u6DFB\u52A0\u6216\u8005\u53D8\u66F4\u6216\u8005\u5220\u9664\u8FDB\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\u3002</p>
<p>\u4EE5<code dir="auto">AddOrUpdateWasmPlugin</code>\u548C<code dir="auto">DeleteWasmPlugin</code>\u4E3A\u4F8B\u3002</p>
<ul>
<li>
<p><code dir="auto">AddOrUpdateWasmPlugin</code></p>
<ol>
<li>\u83B7\u53D6wasmplugin</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">wasmPlugin, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> m.wasmPluginLister.</span><span style="--0:#B392F0">WasmPlugins</span><span style="--0:#E1E4E8">(clusterNamespacedName.Namespace).</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(clusterNamespacedName.Name)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="wasmPlugin, err := m.wasmPluginLister.WasmPlugins(clusterNamespacedName.Namespace).Get(clusterNamespacedName.Name)"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5C06wasmplugin\u8F6C\u5316\u4E3Aistio\u80FD\u591F\u8BC6\u522B\u7684wasmplugin</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">istioWasmPlugin, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> m.</span><span style="--0:#B392F0">convertIstioWasmPlugin</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">&#x26;</span><span style="--0:#E1E4E8">wasmPlugin.Spec)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="istioWasmPlugin, err := m.convertIstioWasmPlugin(&#x26;wasmPlugin.Spec)"><div></div></button></div></figure></div>
<ol start="3">
<li>\u66F4\u65B0<code dir="auto">IngressConfig</code></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">m.wasmPlugins[clusterNamespacedName.Name] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> istioWasmPlugin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="m.wasmPlugins[clusterNamespacedName.Name] = istioWasmPlugin"><div></div></button></div></figure></div>
</li>
<li>
<p><code dir="auto">DeleteWasmPlugin</code></p>
<ol>
<li>\u66F4\u65B0<code dir="auto">IngressConfig</code></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">delete</span><span style="--0:#E1E4E8">(m.wasmPlugins, clusterNamespacedName.Name)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="delete(m.wasmPlugins, clusterNamespacedName.Name)"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5982\u679C\u5B58\u5728\u8BE5wasmplugin\uFF0C\u89E6\u53D1<code dir="auto">wasmPluginHandlers</code>\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u6267\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, f </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> m.wasmPluginHandlers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">IngressLog.</span><span style="--0:#B392F0">Debug</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"WasmPlugin triggerd update"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">f</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">config</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Config</span><span style="--0:#E1E4E8">{Meta: metadata}, </span><span style="--0:#B392F0">config</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Config</span><span style="--0:#E1E4E8">{Meta: metadata}, model.EventDelete)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="for _, f := range m.wasmPluginHandlers {\x7F    IngressLog.Debug(&#x22;WasmPlugin triggerd update&#x22;)\x7F    f(config.Config{Meta: metadata}, config.Config{Meta: metadata}, model.EventDelete)\x7F}"><div></div></button></div></figure></div>
</li>
</ul>
<p>\u5230\u6B64\u4E3A\u6B64\uFF0C<code dir="auto">ingress_config.go</code>\u7684\u5185\u5BB9\u57FA\u672C\u4ECB\u7ECD\u5B8C\u6BD5\uFF0C\u5927\u90E8\u5206\u5185\u5BB9\u5E76\u672A\u505A\u8FC7\u591A\u6DF1\u5165\uFF0C\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u81EA\u884C\u4E0B\u8F7D\u6E90\u7801\u6D4F\u89C8\u67E5\u770B\u3002</p>
<p>\u6211\u4EEC\u73B0\u5728\u56DE\u5230\u6700\u5F00\u59CB\u7684<code dir="auto">initConfigController</code>\u51FD\u6570\u4E0A\uFF0C\u53EF\u4EE5\u53D1\u73B0\u8FD9\u4E2A\u51FD\u6570\u7684\u6838\u5FC3\u5185\u5BB9\u5176\u5B9E\u5C31\u662F<code dir="auto">ingress_config.go</code>\uFF0C\u5F53\u7136\u8FD8\u6709\u5BF9\u5E94\u7684\u591A\u4E2A\u63A7\u5236\u5668\uFF0C\u5173\u4E8E\u63A7\u5236\u5668\u7684\u4ECB\u7ECD\uFF0C\u5C06\u5728\u540E\u9762\u8FDB\u884C\u4ECB\u7ECD\u3002</p>
<h3 id="initregistryeventhandlers\u51FD\u6570\u5256\u6790"><code dir="auto">initRegistryEventHandlers</code>\u51FD\u6570\u5256\u6790</h3>
<p>\u8BE5\u51FD\u6570\u76F8\u5BF9\u4E8E<code dir="auto">initConfigController</code>\u51FD\u6570\u6765\u8BF4\u7B80\u5355\u5F88\u591A\uFF0C\u5176\u4E3B\u8981\u505A\u7684\u5185\u5BB9\u5C31\u662F\u914D\u7F6Exds\u66F4\u65B0\u5904\u7406\u5668\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF0C\u6CE8\u518C\u7ED9<code dir="auto">configController</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u53D1\u751F\u8D44\u6E90\u7684\u53D8\u66F4\u65F6\uFF0C\u4F1A\u901A\u8FC7xds\u534F\u8BAE\u8FDB\u884C\u63A8\u9001\u66F4\u65B0\u3002</p>
<h2 id="pkgingresskube\u76EE\u5F55\u4ECB\u7ECD"><code dir="auto">pkg/ingress/kube</code>\u76EE\u5F55\u4ECB\u7ECD</h2>
<p>\u8FD9\u90E8\u5206\u5185\u5BB9\u8F83\u591A\uFF0C\u540E\u7EED\u53EF\u81EA\u884C\u9488\u5BF9\u611F\u5174\u8DA3\u7684\u90E8\u5206\u8FDB\u884C\u7CBE\u8BFB\u3002</p>
<ul>
<li>
<p><code dir="auto">annotations</code></p>
<p>\u8FD9\u91CC\u4E3B\u8981\u5904\u7406ingress\u6CE8\u89E3\u7684\u914D\u7F6E\uFF0C\u5728<code dir="auto">NewAnnotationHandlerManager</code>\u65B9\u6CD5\u91CC\u5217\u51FA\u4E86\u4E00\u4E9B\u5DF2\u7ECF\u652F\u6301\u7684\u6CE8\u89E3\uFF0C\u6BCF\u4E2A\u6CE8\u89E3\u7684\u5904\u7406\u7A0B\u5E8F\u9700\u8981\u5B9E\u73B0<code dir="auto">AnnotationHandler</code>\u6240\u5B9A\u4E49\u7684\u63A5\u53E3\u5217\u8868\u3002</p>
</li>
<li>
<p><code dir="auto">common</code></p>
<p>\u8FD9\u91CC\u6838\u5FC3\u7684\u6587\u4EF6\u4E3A<code dir="auto">controller.go</code>\uFF0C\u4E3B\u8981\u505A\u4E86\u4E00\u4E9B\u8D44\u6E90\u7684\u5305\u88C5\uFF0C\u4EE5\u53CA\u5B9A\u4E49\u4E86<code dir="auto">IngressController</code>\u63A5\u53E3\u65B9\u6CD5\uFF0C\u5176\u5B9E\u73B0\u7C7B\u6709<code dir="auto">pkg/ingress/kube/ingress/controller.go</code>\u548C<code dir="auto">pkg/ingress/kube/ingressv1/controller.go</code></p>
</li>
<li>
<p><code dir="auto">configmap</code></p>
<p>\u8FD9\u91CC\u4E3B\u8981\u4E3A<code dir="auto">ConfigMap</code>\u6DFB\u52A0\u4E86<code dir="auto">higress</code>\u7684KV\u5BF9\uFF0C\u5728<code dir="auto">controller.go</code>\u4E2D\u5B9A\u4E49\u4E86<code dir="auto">ItemController</code>\u63A5\u53E3\uFF0C\u548C\u524D\u8005\u63D0\u5230\u7684\u4E00\u6837\uFF0C\u8FD9\u91CC\u4E5F\u63D0\u4F9B\u4E86\u76F8\u4F3C\u7684\u66F4\u65B0\u914D\u7F6E\u7684\u65B9\u6CD5<code dir="auto">AddOrUpdateHigressConfig</code>\uFF0C\u540C\u6837\u5730\uFF0C\u4E5F\u662F\u5148\u83B7\u53D6\u5F53\u524D\u7684value\u503C\uFF0C\u5E76\u83B7\u53D6\u65E7\u7684value\u503C\uFF0C\u8FDB\u884C\u4E00\u4E2A\u6BD4\u5BF9\uFF0C\u6BD4\u5BF9\u7ED3\u679C\u53EF\u80FD\u4E3A\u65B0\u589E\u3001\u66F4\u65B0\u3001\u5220\u9664\uFF0C\u5206\u522B\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u91CC\u6240\u5B9A\u4E49\u7684\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u4E5F\u5C31\u662F<code dir="auto">XDSUpdater</code>\u3002</p>
</li>
<li>
<p><code dir="auto">controller</code></p>
<p>\u5728\u524D\u9762\u7684\u4ECB\u7ECD\u4E2D\uFF0C\u63D0\u5230\u4E86\u5F88\u591A\u6B21\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u53EF\u80FD\u4F1A\u6709\u4EBA\u7591\u95EE\u662F\u600E\u4E48\u505A\u8D44\u6E90\u76D1\u542C\u7684\uFF0C\u8D44\u6E90\u76D1\u542C\u7684\u4EE3\u7801\u5C31\u4F4D\u4E8E\u672C\u76EE\u5F55\u4E0B\u4E86\u3002\u8FD9\u91CC\u53EF\u4EE5\u7740\u91CD\u4ECB\u7ECD\u4E00\u4E0B\uFF0C\u4E8B\u4EF6\u76D1\u542C\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406\u3002</p>
<ol>
<li>
<p>\u5B9A\u4E49\u4E86<code dir="auto">Controller[lister any]</code>\u63A5\u53E3\uFF0C\u5176\u5B9E\u73B0\u7C7B\u4E3A<code dir="auto">CommonController</code>\u3002
\u6211\u4EEC\u53EF\u4EE5\u770B\u4E00\u4E0B\u8FD9\u4E2A\u5B9E\u73B0\u7ED3\u6784\u4F53\u6709\u54EA\u4E9B\u9700\u8981\u6CE8\u610F\u7684\u5B57\u6BB5\u3002</p>
<p><strong>lister</strong>: \u8FD9\u4E2A\u5B57\u6BB5\u4E3Aany\u7C7B\u578B\uFF0C\u4F1A\u5728<code dir="auto">NewCommonController</code>\u65B9\u6CD5\u91CC\u4F20\u5165\u8FDB\u6765\uFF0C\u70B9\u51FB\u67E5\u770B\u8BE5\u65B9\u6CD5\u8C03\u7528\u60C5\u51B5\uFF0C\u53EF\u4EE5\u53D1\u73B0\u4F20\u5165\u8BE5\u5B57\u6BB5\u7684\u90FD\u662F\u5404\u4E2A\u8D44\u6E90\u7684\u76D1\u542C\u5668\uFF0C\u4F8B\u5982<code dir="auto">ConfigMap</code>\u7684\u76D1\u542C\u5668\u5C31\u662F<code dir="auto">client.KubeInformer().Core().V1().ConfigMaps().Lister().ConfigMaps(namespace)</code>\uFF0C\u5176\u5B83\u4E5F\u662F\u5982\u6B64\u3002
<strong>updateHandler</strong>: \u8FD9\u4E2A\u5B57\u6BB5\u4E3A<code dir="auto">func(util.ClusterNamespacedName)</code>\u7C7B\u578B\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B58\u50A8\u5BF9\u5E94\u76D1\u542C\u5668lister\u6240\u63D0\u4F9B\u7684\u66F4\u65B0\u6216\u8005\u65B0\u589E\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u5B58\u50A8\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> (</span><span style="--0:#FFAB70">c </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">CommonController</span><span style="--0:#E1E4E8">[</span><span style="--0:#B392F0">lister</span><span style="--0:#E1E4E8">]) </span><span style="--0:#B392F0">AddEventHandler</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">addOrUpdate</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">util</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ClusterNamespacedName</span><span style="--0:#E1E4E8">), </span><span style="--0:#FFAB70">delete</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">...func</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">util</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">ClusterNamespacedName</span><span style="--0:#E1E4E8">)) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">c.updateHandler </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> addOrUpdate</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">len</span><span style="--0:#E1E4E8">(delete) </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">c.removeHandler </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> delete[</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (c *CommonController[lister]) AddEventHandler(addOrUpdate func(util.ClusterNamespacedName), delete ...func(util.ClusterNamespacedName)) {\x7F    c.updateHandler = addOrUpdate\x7F    if len(delete) > 0 {\x7F       c.removeHandler = delete[0]\x7F    }\x7F}"><div></div></button></div></figure></div>
<p><strong>removeHandler</strong>: \u540C<strong>updateHandler</strong></p>
</li>
<li>
<p>\u63A5\u53E3\u65B9\u6CD5\u9664\u4E86\u521A\u521A\u4ECB\u7ECD\u7684<code dir="auto">AddEventHandler</code>\u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E2A<code dir="auto">Run</code>\u65B9\u6CD5\u9700\u8981\u6CE8\u610F\u4E00\u4E0B</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> (</span><span style="--0:#FFAB70">c </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">CommonController</span><span style="--0:#E1E4E8">[</span><span style="--0:#B392F0">lister</span><span style="--0:#E1E4E8">]) </span><span style="--0:#B392F0">Run</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">stop</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x3C;-chan</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8">{}) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">defer</span><span style="--0:#E1E4E8"> utilruntime.</span><span style="--0:#B392F0">HandleCrash</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">defer</span><span style="--0:#E1E4E8"> c.queue.</span><span style="--0:#B392F0">ShutDown</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">!</span><span style="--0:#E1E4E8">cache.</span><span style="--0:#B392F0">WaitForCacheSync</span><span style="--0:#E1E4E8">(stop, c.HasSynced) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">IngressLog.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Failed to sync </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF"> controller cache"</span><span style="--0:#E1E4E8">, c.typeName)</span></div></div><div class="ec-line"><div class="code"><span class="indent">       </span><span style="--0:#F97583">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">IngressLog.</span><span style="--0:#B392F0">Debugf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF"> cache has synced"</span><span style="--0:#E1E4E8">, c.typeName)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">go</span><span style="--0:#E1E4E8"> wait.</span><span style="--0:#B392F0">Until</span><span style="--0:#E1E4E8">(c.worker, time.Second, stop)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">&#x3C;-</span><span style="--0:#E1E4E8">stop</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (c *CommonController[lister]) Run(stop <-chan struct{}) {\x7F    defer utilruntime.HandleCrash()\x7F    defer c.queue.ShutDown()\x7F    if !cache.WaitForCacheSync(stop, c.HasSynced) {\x7F       IngressLog.Errorf(&#x22;Failed to sync %s controller cache&#x22;, c.typeName)\x7F       return\x7F    }\x7F    IngressLog.Debugf(&#x22;%s cache has synced&#x22;, c.typeName)\x7F    go wait.Until(c.worker, time.Second, stop)\x7F    <-stop\x7F}"><div></div></button></div></figure></div>
<p>\u53EF\u4EE5\u770B\u6709\u4E2A<code dir="auto">wait.Until</code>\u65B9\u6CD5\uFF0C\u7528\u4E8E\u6BCF\u79D2\u949F\u6267\u884C<code dir="auto">c.worker</code>\u65B9\u6CD5\uFF0C\u76F4\u5230\u63A5\u6536\u5230<code dir="auto">stop</code>\u4FE1\u53F7\uFF0C\u65B9\u6CD5\u8C03\u7528\u94FE\u5982\u4E0B\uFF1A<code dir="auto">c.worker</code>-><code dir="auto">c.processNextWorkItem()</code>-><code dir="auto">c.onEvent(ingressNamespacedName)</code>-><code dir="auto">c.updateHandler(obj)</code>\uFF0C\u53EF\u4EE5\u770B\u51FA\u6765\u5F53\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u63A7\u5236\u5668\uFF0C\u5E76\u4E3A\u5176\u6CE8\u518C\u4E86\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u4EE5\u53CA\u4E8B\u4EF6\u5904\u7406\u5668(updateHandler)\uFF0C\u56E0\u6B64\u6BCF\u79D2\u949F\u4F1A\u6267\u884C\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u4E5F\u5C31\u5B9E\u73B0\u4E86\u76D1\u542C\u7684\u903B\u8F91\u3002</p>
</li>
</ol>
<p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u4E3B\u8981\u5B9A\u4E49\u4E86\u4E00\u4E2A\u516C\u5171\u7684\u63A7\u5236\u5668\uFF0C\u53EF\u4EE5\u8282\u7701\u5927\u91CF\u4EE3\u7801\u7684\u7F16\u5199\uFF0C\u6211\u4EEC\u5728\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B50\u63A7\u5236\u5668\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8C03\u7528<code dir="auto">NewCommonController</code>\u65B9\u6CD5\u6765\u5B9E\u73B0\u76D1\u542C\u903B\u8F91\u3002</p>
</li>
<li>
<p><code dir="auto">http2rpc</code></p>
<p>\u4EE3\u7801\u8F83\u4E3A\u7B80\u5355\uFF0C\u901A\u8FC7<code dir="auto">NewCommonController</code>\u6765\u521B\u5EFA<code dir="auto">Http2RpcController</code>\uFF0C\u5E76\u63D0\u4F9B\u4E86<code dir="auto">GetHttp2Rpc</code>\u65B9\u6CD5\u3002</p>
</li>
<li>
<p><code dir="auto">ingress</code></p>
<p>Ingress\u63A7\u5236\u5668\u7684\u6838\u5FC3\u4EE3\u7801\u903B\u8F91\uFF0C\u4E3B\u8981\u4E3A\u524D\u6587\u63D0\u5230\u7684<code dir="auto">ingress_config.go</code>\u6240\u8C03\u7528\u3002\u90E8\u5206\u5185\u5BB9\u5728\u524D\u6587\u5DF2\u7ECF\u7B80\u5355\u4ECB\u7ECD\u8FC7\u3002</p>
</li>
<li>
<p><code dir="auto">ingressv1</code></p>
<p>Ingress\u7684API\u7248\u672Cv1\u76F8\u5173\u7684\u63A7\u5236\u5668\u4EE3\u7801\u3002</p>
</li>
<li>
<p><code dir="auto">kingress</code></p>
<p>kingress\u76F8\u5173\u7684\u63A7\u5236\u5668\u4EE3\u7801\u3002</p>
</li>
<li>
<p><code dir="auto">mcpbridge</code></p>
<p>\u540C<code dir="auto">http2rpc</code>\u76EE\u5F55\u3002</p>
</li>
<li>
<p><code dir="auto">secret</code></p>
<p>\u540C<code dir="auto">http2rpc</code>\u76EE\u5F55\u3002</p>
</li>
<li>
<p><code dir="auto">util</code></p>
<p>\u5DE5\u5177\u5305\u3002</p>
</li>
<li>
<p><code dir="auto">wasmplugin</code></p>
<p>\u540C<code dir="auto">http2rpc</code>\u76EE\u5F55\u3002</p>
</li>
</ul>
<h2 id="higress-core\u6D41\u7A0B\u56FE">higress-core\u6D41\u7A0B\u56FE</h2>
<p>\u7ECF\u8FC7\u524D\u9762\u7684\u6E90\u7801\u5206\u6790\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5BF9higress\u6838\u5FC3\u903B\u8F91\u5DF2\u7ECF\u6709\u4E86\u521D\u6B65\u7684\u7406\u89E3\uFF0C\u540E\u7EED\u53EF\u4EE5\u9488\u5BF9\u81EA\u5DF1\u611F\u5174\u8DA3\u7684\u90E8\u5206\uFF0C\u8FDB\u884C\u6DF1\u5165\u7814\u7A76\uFF0C\u5176\u4E2D\u4F1A\u6D89\u53CA\u5230Kubernetes\u8D44\u6E90\u914D\u7F6E\u7684\u6838\u5FC3\u903B\u8F91\u4EE5\u53CAIstio\u7684\u57FA\u672C\u638C\u63E1\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u7ED9\u5B83\u7814\u7A76\u900F\u4E86\uFF0C\u5BF9\u8FD9\u4E9B\u57FA\u672C\u539F\u7406\u7684\u7406\u89E3\u5C06\u4F1A\u66F4\u4E3A\u6DF1\u523B\u3002</p>
<p>\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p>
<p><img src="/img/blog/higress-code0.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u5BF9\u4E8E\u521D\u59CB\u5316\u914D\u7F6E\u63A7\u5236\u5668\u90E8\u5206\uFF0C\u53EF\u8FDB\u4E00\u6B65\u7ED8\u753B\u6D41\u7A0B\u56FE\u3002</p>
<p><img src="/img/blog/higress-code1.png" alt="img1.png" referrerpolicy="no-referrer"></p>
<p>\u5173\u4E8E\u4E8B\u4EF6\u76D1\u542C\u90E8\u5206\uFF0C\u5176\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A</p>
<p><img src="/img/blog/higress-code2.png" alt="img2.png" referrerpolicy="no-referrer"></p>
<h2 id="\u603B\u7ED3">\u603B\u7ED3</h2>
<p>\u4EE5\u4E0A\u662F\u5BF9higress\u6E90\u7801\u7684\u521D\u6B65\u5206\u6790\uFF0C\u5E0C\u671B\u80FD\u591F\u7ED9\u7528\u6237\u4EE5\u53CA\u5F00\u53D1\u8005\u5BF9higress\u6709\u4E2A\u57FA\u672C\u7684\u4E86\u89E3\u3002</p>`,a={title:"higress-core\u6E90\u7801\u5206\u6790",keywords:["higress"],description:"\u901A\u8FC7\u5206\u6790higress-core\u6E90\u7801\uFF0C\u4E86\u89E3higress-core\u81EA\u542F\u52A8\u4EE5\u6765\u505A\u4E86\u54EA\u4E9B\u4E8B\u60C5",author:"SJC",date:"2024-1-25",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/higress-code.md",category:"article"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/higress-code.md",i=void 0,d=function(){return`
## \u5F15\u8A00

\u5728\u5F00\u6E90\u793E\u533A\u4E2D\uFF0C\u6E90\u7801\u5206\u6790\u662F\u6DF1\u5165\u7406\u89E3\u9879\u76EE\u5185\u90E8\u673A\u5236\u7684\u5173\u952E\u6B65\u9AA4\u3002\u901A\u8FC7\u4ED4\u7EC6\u7814\u7A76\u9879\u76EE\u7684\u6E90\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63ED\u793A\u80CC\u540E\u7684\u8BBE\u8BA1\u539F\u7406\u3001\u7B97\u6CD5\u548C\u5DE5\u4F5C\u6D41\u7A0B\u3002\u8FD9\u4E0D\u4EC5\u6709\u52A9\u4E8E\u63D0\u9AD8\u6211\u4EEC\u7684\u7F16\u7A0B\u6280\u80FD\uFF0C\u8FD8\u53EF\u4EE5\u4E3A\u5F00\u53D1\u8005\u793E\u533A\u63D0\u4F9B\u5B9D\u8D35\u7684\u5B66\u4E60\u8D44\u6E90\u3002

\u672C\u6587\u5C06\u805A\u7126\u4E8E\u5206\u6790[Higress](https://github.com/alibaba/higress)\u7684\u6E90\u7801\uFF0C\u8BE5\u9879\u76EE\u5728\u5F00\u6E90\u754C\u5907\u53D7\u77A9\u76EE\u3002\u901A\u8FC7\u6D4F\u89C8\u9605\u8BFB\u5176\u4EE3\u7801\uFF0C\u6211\u4EEC\u5C06\u521D\u6B65\u5C55\u73B0\u5176\u6838\u5FC3\u7279\u6027\u3001\u67B6\u6784\u8BBE\u8BA1\u548C\u5B9E\u73B0\u7EC6\u8282\u3002\u5E0C\u671B\u5404\u4F4D\u7528\u6237\u4EE5\u53CA\u5F00\u53D1\u8005\u5728\u672C\u6587\u4E2D\u80FD\u591F\u627E\u5230\u6709\u4EF7\u503C\u7684\u89C1\u89E3\u3002

## \u5173\u4E8EHigress

Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90Istio + Envoy\u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301Ingress\u4E0EGateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002

## \u4EE3\u7801\u76EE\u5F55\u8BF4\u660E

-   cmd: \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801
-   pkg/ingress: Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801
-   pkg/bootstrap: \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801
-   registry: \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801
-   envoy: \u4F9D\u8D56\u7684 envoy \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801
-   istio: \u4F9D\u8D56\u7684 istio \u5B98\u65B9\u4ED3\u5E93 commit\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684\u8865\u4E01\u4EE3\u7801
-   plugins: Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801
-   script: \u7F16\u8BD1\u76F8\u5173\u811A\u672C
-   docker: docker \u955C\u50CF\u6784\u5EFA\u76F8\u5173\u811A\u672C

\u672C\u6587\u4E3B\u8981\u56F4\u7ED5\u7740higress-core\u7EC4\u4EF6\u7684\u6E90\u7801\uFF0C\u7814\u7A76higress-core\u81EA\u542F\u52A8\u4EE5\u6765\u505A\u4E86\u54EA\u4E9B\u4E8B\u60C5\u3002higress-core\u7684\u4EE3\u7801\u4E3B\u8981\u4F4D\u4E8E\`pkg\`\u76EE\u5F55\u4E0B\u3002

## higress-core\u6E90\u7801\u6574\u4F53\u5206\u6790

### \u542F\u52A8\u5165\u53E3\uFF1Apkg/cmd/server.go

\u5728\u8BE5\u6587\u4EF6\u4E0B\uFF0C\u4E3B\u8981\u8FDB\u884C\u4E86\u547D\u4EE4\u53C2\u6570\u7684\u89E3\u6790\uFF0C\u5E76\u8C03\u7528\`NewServer\`\u6765\u521B\u5EFA\u4E00\u4E2AServer\u5B9E\u4F8B\uFF0C\u8C03\u7528\u8BE5\u5B9E\u4F8B\u7684\`Start\`\u65B9\u6CD5\u6765\u542F\u52A8\u5B9E\u4F8BServer\uFF0C\u8C03\u7528\`waitForMonitorSignal\`\u65B9\u6CD5\u6765\u76D1\u542C\u8FDB\u7A0B\u7684\u9000\u51FA\u3002

\u663E\u7136\u8FD9\u91CC\u6709\u4E24\u4E2A\u5F88\u91CD\u8981\u7684\u65B9\u6CD5\u51FD\u6570\uFF1A\`NewServer\`\u548C\`Start\`\uFF0C\u63A5\u4E0B\u6765\u9488\u5BF9\u8FD9\u4E24\u4E2A\u51FD\u6570\u8FDB\u884C\u5177\u4F53\u5206\u6790\u3002

### \u521B\u5EFA\u5B9E\u4F8B\uFF1ANewServer

#### \u521D\u59CB\u5316Pilot\u7684\u73AF\u5883 API\`model.Environment\`

\`model.Environment\`\u4E3APilot \u4E2D\u7684\u6838\u5FC3\u73AF\u5883\u5BF9\u8C61\uFF0C\u96C6\u6210\u4E86\u8BB8\u591A\u4E0D\u540C\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u670D\u52A1\u53D1\u73B0\u3001\u914D\u7F6E\u5B58\u50A8\u3001\u7F51\u7EDC\u89C2\u5BDF\u7B49\uFF0C\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u5B8C\u6574\u7684\u73AF\u5883 API\u3002

\`\`\`go
e := &model.Environment{
    PushContext:  model.NewPushContext(),
    DomainSuffix: constants.DefaultKubernetesDomain,
    MCPMode:      true,
}
\`\`\`

#### \u4E3A\`model.Environment\`\u8BBE\u7F6E\`Ledger\`


\`\`\`go
e.SetLedger(buildLedger(args.RegistryOptions))
\`\`\`

\`Ledger\` \u662F\u4E00\u4E2A\u8868\u793A\u7ECF\u8FC7\u4FEE\u6539\u7684 map \u7684\u63A5\u53E3\u3002\u8FD9\u4E2A map \u5177\u6709\u4E09\u4E2A\u72EC\u7279\u7684\u7279\u5F81\uFF1A

1.  \u6BCF\u4E2A map \u7684\u552F\u4E00\u72B6\u6001\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u54C8\u5E0C\u503C\u3002
1.  map \u7684\u5148\u524D\u72B6\u6001\u5728\u56FA\u5B9A\u7684\u65F6\u95F4\u5185\u88AB\u4FDD\u7559\u3002
1.  \u7ED9\u5B9A\u5148\u524D\u7684\u54C8\u5E0C\u503C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE map \u4E2D\u68C0\u7D22\u5148\u524D\u7684\u72B6\u6001\uFF08\u5982\u679C\u4ECD\u7136\u88AB\u4FDD\u7559\uFF09\u3002

\`Ledger\`\u63D0\u4F9B\u4E86\u4E2A\u63A5\u53E3\u6765\u83B7\u53D6\u4E4B\u524D\u7248\u672C\u7684Value\uFF0C\u63A5\u53E3\u8BE6\u60C5\u5982\u4E0B\uFF1A


\`\`\`go
// GetPreviousValue executes a get against a previous version of the ledger, using that version's root hash.
GetPreviousValue(previousRootHash, key string) (result string, err error)
\`\`\`

#### \u4E3A\`model.Environment\`\u8BBE\u7F6E\u670D\u52A1\u53D1\u73B0\u7684\u63A5\u53E3\`ServiceDiscovery\`\uFF0C\u7528\u4E8E\u5217\u4E3E\u670D\u52A1\u548C\u5B9E\u4F8B\u3002

\`\`\`go
ac := aggregate.NewController(aggregate.Options{
    MeshHolder: e,
})
e.ServiceDiscovery = ac
\`\`\`

#### \u521D\u59CB\u5316\`Server\`\u5B9E\u4F8B

\`\`\`go
s := &Server{
    ServerArgs:      args,
    httpMux:         http.NewServeMux(),
    environment:     e,
    readinessProbes: make(map[string]readinessProbe),
    server:          server.New(),
}
s.environment.Watcher = mesh.NewFixedWatcher(&v1alpha1.MeshConfig{})
s.environment.Init()
\`\`\`

\u8FD9\u91CC\u8BF4\u660E\u4E00\u4E0B\`Server\`\u7ED3\u6784\u4F53\u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u542B\u4E49\uFF1A
\`\`\`go
type Server struct {
    *ServerArgs  // Server\u53C2\u6570\u914D\u7F6E
    environment      *model.Environment  // Pilot\u73AF\u5883\u914D\u7F6E
    kubeClient       higresskube.Client  // \u4E0E Kubernetes \u96C6\u6210\u7684\u5BA2\u6237\u7AEF
    configController model.ConfigStoreCache  // \u914D\u7F6E\u5B58\u50A8\u63A7\u5236\u5668
    configStores     []model.ConfigStoreCache  // \u591A\u4E2A\u914D\u7F6E\u5B58\u50A8\u7684\u7F13\u5B58
    httpServer       *http.Server  // HTTP \u8BF7\u6C42\u5904\u7406\u5668
    httpMux          *http.ServeMux  // HTTP \u8BF7\u6C42\u591A\u8DEF\u590D\u7528\u5668
    grpcServer       *grpc.Server  // grpc\u670D\u52A1
    xdsServer        *xds.DiscoveryServer  // xds\u670D\u52A1
    server           server.Instance  // Pilot Server\u5B9E\u4F8B\u914D\u7F6E
    readinessProbes  map[string]readinessProbe  // server\u5185\u90E8\u670D\u52A1\u8BB0\u5F55\u8868\uFF0C\u8BB0\u5F55\u670D\u52A1\u662F\u5426\u51C6\u5907\u597D
}
\`\`\`

> \u5728\u8FD9\u91CC\uFF0C\`server.Instance\`\u7EF4\u62A4\u4E86\u4E00\u4E2Achan\u53D8\u91CF\`components chan Component\`\uFF0C\`Component\`\u5219\u5B9A\u4E49\u4E86\u4E00\u4E2A\u51FD\u6570\u65B9\u6CD5\u6A21\u677F\u3002\u5F53\u6211\u4EEC\u8C03\u7528\`Instance\`\u7684\`RunComponent(t Component)\`\u65B9\u6CD5\uFF0C\u5219\u4F1A\u5C06\u53D8\u91CF\`t\`\u53D1\u9001\u7ED9\`components\`\u7BA1\u9053\uFF0C\u800C\u6211\u4EEC\u8C03\u7528\`Instance\`\u7684\`Start(stop <-chan struct{}) error\`\u65B9\u6CD5\uFF0C\u5219\u4F1A\u4ECE\`components\`\u7BA1\u9053\u53BB\u63A5\u6536\`Component\`\u5BF9\u8C61\uFF0C\u5E76\u6267\u884C\u8BE5\u5BF9\u8C61\u7684\u51FD\u6570\u65B9\u6CD5\u3002

\`\`\`
type Component func(stop <-chan struct{}) error
\`\`\`

#### \u521B\u5EFA\u521D\u59CB\u542F\u52A8\u51FD\u6570\u5217\u8868

\`\`\`go
initFuncList := []func() error{
    s.initKubeClient,
    s.initXdsServer,
    s.initHttpServer,
    s.initConfigController,
    s.initRegistryEventHandlers,
    s.initAuthenticators,
}
\`\`\`

- \`initKubeClient\`\u51FD\u6570

    1. \u9996\u5148\u5224\u65AD\`kubeClient\`\u662F\u5426\u4E3A\u7A7A\uFF0C\u4E0D\u4E3A\u7A7A\u8FDB\u884C\u4E0B\u4E00\u6B65\uFF1B

    2. \u8C03\u7528\`istiokube.DefaultRestConfig\`\u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5177\u6709 RESTful \u98CE\u683C\u7684\`Kubernetes Config\`\uFF1B

    3. \u4EE5\`Kubernetes Config\`\u4E3A\u5165\u53C2\uFF0C\u8C03\u7528\`istiokube.NewClientConfigForRestConfig\`\u65B9\u6CD5\u521B\u5EFA\u4E00\u4E2A\u5177\u6709 RESTful \u98CE\u683C\u7684\`Kubernetes Client Config\`\uFF1B

    4. \u8C03\u7528higress\u5B9A\u4E49\u7684\`NewClient\`\u65B9\u6CD5\uFF0C\u96C6\u6210 Istio \u5BA2\u6237\u7AEF\u3001Higress \u5BA2\u6237\u7AEF\u548C\u53EF\u80FD\u7684 Kingress \u5BA2\u6237\u7AEF\uFF0C\u5E76\u4E3A\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u4E86\u76F8\u5E94\u7684 SharedInformerFactory\u3002

- \`initXdsServer\`\u51FD\u6570

    1. \u8C03\u7528\`pliot xds\`\u7684\`NewDiscoveryServer\`\u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A\`xdsServer\`\u5B9E\u4F8B\uFF0C\u5E76\u521D\u59CB\u5316\u4E00\u4E9B\u8D44\u6E90\u3002
        \`\`\`go
        s.xdsServer = xds.NewDiscoveryServer(s.environment, nil, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)
        s.xdsServer.McpGenerators[gvk.WasmPlugin.String()] = &mcp.WasmpluginGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.DestinationRule.String()] = &mcp.DestinationRuleGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.EnvoyFilter.String()] = &mcp.EnvoyFilterGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.Gateway.String()] = &mcp.GatewayGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.VirtualService.String()] = &mcp.VirtualServiceGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.ServiceEntry.String()] = &mcp.ServiceEntryGenerator{Server: s.xdsServer}
        s.xdsServer.ProxyNeedsPush = func(proxy *model.Proxy, req *model.PushRequest) bool {
            return true
        }
        \`\`\`
    2. \u5C06\`xdsServer\`\u7684\`Start\`\u65B9\u6CD5\u6CE8\u518C\u7ED9pilot server instance\uFF0C\u5E76\u8C03\u7528higress server\u7684\`initGrpcServer\`\u521D\u59CB\u5316\u51FD\u6570\uFF0C\u5C06xds\u670D\u52A1\u6CE8\u518C\u5728grpc\u670D\u52A1\u4E0A\uFF0C\u4F7F\u5F97\u53EF\u4EE5\u901A\u8FC7grpc\u534F\u8BAE\u7AEF\u53E3\u8FDB\u884Cxds\u534F\u8BAE\u7684\u901A\u4FE1\u3002

- \`initHttpServer\`\u51FD\u6570\uFF0C\u521D\u59CB\u5316http server\uFF0C\u6DFB\u52A08888\u7AEF\u53E3\u7684debug\u63A5\u53E3\u7684\u5904\u7406\u5668\uFF0C\u5E76\u6DFB\u52A0\`/ready\`\u8DEF\u7531\u7684\u5904\u7406\u5668\uFF0C\u7528\u4E8E\u904D\u5386higress server\u7684\`readinessProbes\`\uFF0C\u5224\u65AD\u5185\u90E8\u670D\u52A1\u8BB0\u5F55\u8868\u5185\u7684\u670D\u52A1\u662F\u5426\u51C6\u5907\u5B8C\u6BD5\u3002

    \`\`\`go
    s.xdsServer.AddDebugHandlers(s.httpMux, nil, true, nil)
    s.httpMux.HandleFunc("/ready", s.readyHandler)
    \`\`\`

- \`initConfigController\`\u51FD\u6570\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u6BD4\u8F83\u6838\u5FC3\uFF0C\u5C06\u4F1A\u5728\u540E\u9762\u8BE6\u7EC6\u5C55\u5F00\uFF0C\u6682\u65F6\u5148\u8DF3\u8FC7\u3002
- \`initRegistryEventHandlers\`\u51FD\u6570\uFF0C\u8FD9\u90E8\u5206\u5185\u5BB9\u8DDF\`initConfigController\`\u51FD\u6570\u6709\u5173\uFF0C\u6682\u65F6\u5148\u8DF3\u8FC7\u3002
- \`initAuthenticators\`\u51FD\u6570\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u521D\u59CB\u5316\u8BA4\u8BC1\u5668\uFF0C\u5E76\u5C06\u5176\u5E94\u7528\u4E8E xDS \u670D\u52A1\u5668\u3002\u901A\u8FC7\u6DFB\u52A0\u4E0D\u540C\u7684\u8BA4\u8BC1\u5668\uFF0C\u53EF\u4EE5\u652F\u6301\u4E0D\u540C\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u5F0F\uFF0C\u8FD9\u6837\u670D\u52A1\u5668\u5728\u5904\u7406\u8BF7\u6C42\u65F6\u53EF\u4EE5\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u7684\u8EAB\u4EFD\u4FE1\u606F\u3002

#### \u904D\u5386\u542F\u52A8\u51FD\u6570\u5217\u8868\uFF0C\u6267\u884C\u542F\u52A8\u51FD\u6570

\`\`\`go
for _, f := range initFuncList {
    if err := f(); err != nil {
       return nil, err
    }
}
\`\`\`

#### \u6CE8\u518CPilot Server

\`\`\`go
s.server.RunComponent(func(stop <-chan struct{}) error {
    s.kubeClient.RunAndWait(stop)
    return nil
})
\`\`\`

>\u6CE8\u610F\u8FD9\u91CC\u7684\`kubeClient\`\u6240\u8C03\u7528\u7684\u65B9\u6CD5\u662F\`istio\`\u7684Kubernetes\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u3002

#### \u5728ready\u670D\u52A1\u8BB0\u5F55\u8868\u91CC\u6CE8\u518Cxds\u670D\u52A1

\`\`\`gog
s.readinessProbes["xds"] = func() (bool, error) {
    return s.xdsServer.IsServerReady(), nil
}
\`\`\`

### \u542F\u52A8\u5B9E\u4F8B\uFF1AStart

- \u7B2C\u4E00\u90E8\u5206\uFF1A\u904D\u5386pilot server\u7684\`components\`\uFF0C\u6267\u884Cchan\u7BA1\u9053\u91CC\u7684\u51FD\u6570

\`\`\`go
if err := s.server.Start(stop); err != nil {
    return err
}
\`\`\`

- \u7B2C\u4E8C\u90E8\u5206\uFF1A\u7B49\u5F85\u7F13\u5B58\u540C\u6B65\u5B8C\u6210

\`\`\`go
if !s.waitForCacheSync(stop) {
    return fmt.Errorf("failed to sync cache")
}
\`\`\`

- \u7B2C\u4E09\u90E8\u5206\uFF1A\u542F\u52A8grpc\u670D\u52A1

\`\`\`go
grpcListener, err := net.Listen("tcp", s.GrpcAddress)
if err != nil {
    return err
}
go func() {
    log.Infof("starting gRPC discovery service at %s", grpcListener.Addr())
    if err := s.grpcServer.Serve(grpcListener); err != nil {
       log.Errorf("error serving GRPC server: %v", err)
    }
}()
\`\`\`

- \u7B2C\u56DB\u90E8\u5206\uFF1A\u542F\u52A8http\u670D\u52A1

\`\`\`go
httpListener, err := net.Listen("tcp", s.HttpAddress)
if err != nil {
    return err
}
go func() {
    log.Infof("starting HTTP service at %s", httpListener.Addr())
    if err := s.httpServer.Serve(httpListener); err != nil {
       log.Errorf("error serving http server: %v", err)
    }
}()
\`\`\`

## higress-core\u6838\u5FC3\u6E90\u7801\u5206\u6790

\u5728\u524D\u9762\u6709\u4E24\u4E2A\u51FD\u6570\`initConfigController\`\u548C\`initRegistryEventHandlers\`\u6211\u4EEC\u6CA1\u6709\u4ECB\u7ECD\uFF0C\u8FD9\u4E24\u4E2A\u51FD\u6570\u53EF\u4EE5\u8BF4\u662Fhigress-core\u7684\u6838\u5FC3\u4EE3\u7801\uFF0C\u63A5\u4E0B\u6765\u5BF9\u8FD9\u4E24\u4E2A\u51FD\u6570\u8FDB\u884C\u5177\u4F53\u5256\u6790\u3002\u5728\u5206\u6790\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u770B\u4E00\u4E0B\`pkg\`\u5176\u4ED6\u76EE\u5F55\u7684\u529F\u80FD\u3002

\`\`\`
.
\u251C\u2500\u2500 common //\u516C\u5171\u5305
\u251C\u2500\u2500 config //\u914D\u7F6E\u5305
\u251C\u2500\u2500 ingress //higress\u5B9A\u4E49\u7684ingress\u8D44\u6E90\u63A7\u5236\u5668
\u2502\xA0\xA0 \u251C\u2500\u2500 config //\u914D\u7F6Eingress config\u548Ckingress config
\u2502\xA0\xA0 \u251C\u2500\u2500 kube //\u96C6\u6210Kubernetes\u914D\u7F6E
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 annotations //\u5904\u7406 Ingress \u7684\u6CE8\u89E3\u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 common //\u901A\u7528\u7684\u4EE3\u7801\u548C\u5DE5\u5177\u51FD\u6570
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 configmap //\u5904\u7406 ConfigMap \u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 controller //\u63A7\u5236\u5668\u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 http2rpc //\u5904\u7406 HTTP \u5230 RPC \u7684\u8F6C\u6362\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 ingress //\u5904\u7406 Ingress \u914D\u7F6E\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 ingressv1 //Ingress \u7684 API \u7248\u672C v1 \u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 kingress //\u5904\u7406 Kingress \u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 mcpbridge //MCP\uFF08Mesh Configuration Protocol\uFF09\u7684\u6865\u63A5\u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 secret //\u5904\u7406 Secret \u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 util //\u901A\u7528\u7684\u5DE5\u5177\u51FD\u6570
\u2502\xA0\xA0 \u2502\xA0\xA0 \u2514\u2500\u2500 wasmplugin //\u5904\u7406 WebAssembly \u63D2\u4EF6\u76F8\u5173\u7684\u4EE3\u7801
\u2502\xA0\xA0 \u251C\u2500\u2500 log //\u65E5\u5FD7
\u2502\xA0\xA0 \u251C\u2500\u2500 mcp
\u2502\xA0\xA0 \u2514\u2500\u2500 translation //\u7FFB\u8BD1\u6A21\u5757
\u2514\u2500\u2500 kube //higress\u5B9A\u4E49\u7684Kubernetes\u5BA2\u6237\u7AEF\uFF0C\u5305\u542B\u4E86istio\u63D0\u4F9B\u7684Kubernetes\u5BA2\u6237\u7AEF
\`\`\`

\u901A\u8FC7\u76EE\u5F55\u6211\u4EEC\u53EF\u4EE5\u6E05\u6670\u5730\u770B\u5230higress\u96C6\u6210\u4E86\u591A\u4E2AKubernetes\u8D44\u6E90\u4EE5\u53CAIngress\u914D\u7F6E\u3002

### \`initConfigController\`\u51FD\u6570\u5256\u6790

\u6211\u4EEC\u5148\u5927\u81F4\u5206\u6790\u4E00\u4E0B\u8FD9\u4E2A\u51FD\u6570\u7684\u6D41\u7A0B\uFF0C\u51FD\u6570\u7684\u5177\u4F53\u903B\u8F91\u7A0D\u540E\u5206\u6790\u3002\u6700\u540E\u4F1A\u7ED9\u51FA\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u7684\u6D41\u7A0B\u56FE\uFF0C\u53EF\u4EE5\u7ED3\u5408\u6D41\u7A0B\u56FE\u8FDB\u884C\u6E90\u7801\u7684\u7406\u89E3\u5206\u6790\u3002

1. \u8BBE\u7F6E \`common.Options\` \u7ED3\u6784\u4F53\u7684\u4E00\u4E9B\u9009\u9879\uFF0C\u8FD9\u4E9B\u9009\u9879\u53EF\u80FD\u5F71\u54CD\u914D\u7F6E\u63A7\u5236\u5668\u7684\u884C\u4E3A\u3002\u8FD9\u4E9B\u9009\u9879\u5305\u62EC\u662F\u5426\u542F\u7528\u63A7\u5236\u5668\u3001\u96C6\u7FA4 ID\u3001Ingress \u7C7B\u7B49
2. \u521B\u5EFA\u4E00\u4E2A \`translation.NewIngressTranslation\` \u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u7528\u4E8E\u5904\u7406 Ingress \u7684\u7FFB\u8BD1\u548C\u914D\u7F6E
3. \u5411 \`ingressConfig\` \u4E2D\u6DFB\u52A0\u672C\u5730\u96C6\u7FA4\u7684\u914D\u7F6E\uFF0C\u5E76\u83B7\u53D6\u5BF9\u5E94\u7684 Ingress \u63A7\u5236\u5668\u548C Kingress \u63A7\u5236\u5668
4. \u4F7F\u7528 \`configaggregate.MakeCache\` \u521B\u5EFA\u4E00\u4E2A\u5E26\u6709\u7F13\u5B58\u7684\u914D\u7F6E\u63A7\u5236\u5668
5. \u521B\u5EFA\u4E00\u4E2A Istio \u914D\u7F6E\u5B58\u50A8\uFF0C\u5E76\u5C06\u5176\u8BBE\u7F6E\u5230 \`Server\` \u5BF9\u8C61\u7684 \`environment.IstioConfigStore\` \u4E2D
6. \u5C06 \`ingressConfig\` \u8BBE\u7F6E\u5230 \`Server\` \u5BF9\u8C61\u7684 \`environment.IngressStore\` \u4E2D
7. \u5C06\u5305\u542B\u914D\u7F6E\u548C\u542F\u52A8 Ingress \u63A7\u5236\u5668\u3001Kingress \u63A7\u5236\u5668\u4EE5\u53CA\u76F8\u5173\u7684\u914D\u7F6E\u63A7\u5236\u5668\u7684\u51FD\u6570\u65B9\u6CD5\u6CE8\u518C\u5230pilot server instance\u7684\`components\`\u7BA1\u9053\u4E2D\u3002

\u6211\u4EEC\u4ECE\u4E2D\u6311\u9009\u51FA\u51E0\u4E2A\u6BD4\u8F83\u91CD\u8981\u7684\u51FD\u6570\u51FA\u6765\uFF1A\`NewIngressTranslation\`\u3001\`AddLocalCluster\`\u3001\`InitializeCluster\`\u4EE5\u53CA\`configController\`\u7684\`Run\`\u65B9\u6CD5\uFF0C\u5176\u5B83\u7684\u50CF\`MakeCache\`\u3001\`MakeIstioStore\`\u65B9\u6CD5\u5219\u662F\u6709\`istio\`\u63D0\u4F9B\u7684\u51FD\u6570\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5BF9\u63A5higress\u4E2D\u7684discovery\u5BB9\u5668\u4E2D\`Pilot\`\u7EC4\u4EF6\u3002\u786E\u5B9A\u597D\u63A5\u4E0B\u6765\u8981\u5206\u6790\u7684\u5185\u5BB9\u4E4B\u540E\uFF0C\u6211\u4EEC\u6765\u5230\`pkg/ingress/translattion\`\u76EE\u5F55\uFF0C\u67E5\u770B\u4E00\u4E0B\`translation.go\`\u3002

#### \`translation.go\`\u5256\u6790

\`IngressTranslation\`\u5B9E\u73B0\u4E86\u4E24\u4E2A\u63A5\u53E3\uFF1A\`model.ConfigStoreCache\`\u548C\`model.IngressStore\`\uFF0C\u5176\u4E2D\`model.ConfigStoreCache\`\u8FD8\u5305\u542B\u4E86\`model.ConfigStore\`\u63A5\u53E3\u3002\u6211\u4EEC\u53EF\u4EE5\u5927\u81F4\u6D4F\u89C8\u4E00\u4E0B\uFF0C\u53EF\u4EE5\u53D1\u73B0\u57FA\u672C\u4E0A\u662F\u8C03\u7528\`IngressTranslation\`\u7ED3\u6784\u4F53\u4E2D\u7684\`ingressConfig\`\u548C\`kingressConfig\`\u7684\u65B9\u6CD5\uFF0C\u4F4D\u4E8E\`pkg/ingress/config\`\u76EE\u5F55\u4E0B\u3002

\u9664\u4E86\u5B9E\u73B0\u63A5\u53E3\u65B9\u6CD5\u4E4B\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86\`NewIngressTranslation\`\u3001\`AddLocalCluster\`\u3001\`InitializeCluster\`\u65B9\u6CD5\u3002\u540C\u6837\u5730\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u53D1\u73B0\u8FD9\u4E09\u4E2A\u65B9\u6CD5\u672C\u8D28\u4E0A\u4E5F\u662F\u8C03\u7528\`ingressConfig\`\u548C\`kingressConfig\`\u7684\u65B9\u6CD5\u3002

\u65E2\u7136\`translation.go\`\u672C\u8D28\u4E0A\u662F\u8C03\u7528\`pkg/ingress/config\`\u76EE\u5F55\u4E0B\u7684\u51FD\u6570\uFF0C\u4E0D\u59A8\u6211\u4EEC\u8FDB\u5165\u8BE5\u76EE\u5F55\uFF0C\u67E5\u770B\u4E00\u4E0B\`ingress_config.go\`\uFF0C\u5BF9\u4E8E\`kingress_config.go\`\uFF0C\u6211\u4EEC\u6682\u4E0D\u505A\u5206\u6790\u3002

#### \`ingress_config.go\`\u5256\u6790

\u5728\`ingress_config.go\`\u4E2D\u6709\u4E00\u4E2A\u540D\u4E3A\`IngressConfig\`\u7ED3\u6784\u4F53\uFF0C\u5185\u5BB9\u5982\u4E0B(\u9644\u5E26\u6CE8\u91CA)\uFF1A
\`\`\`go
type IngressConfig struct {
    // \u8FDC\u7A0B Ingress \u63A7\u5236\u5668\u7684\u6620\u5C04\uFF0C\u952E\u4E3A\u96C6\u7FA4 ID\uFF0C\u503C\u4E3A common.IngressController
    remoteIngressControllers map[string]common.IngressController
    // \u7528\u4E8E\u4FDD\u62A4\u5E76\u53D1\u8BBF\u95EE remoteIngressControllers \u7684\u4E92\u65A5\u9501
    mutex sync.RWMutex

    // Ingress \u8DEF\u7531\u548C\u57DF\u540D\u7684\u7F13\u5B58
    ingressRouteCache  model.IngressRouteCollection
    ingressDomainCache model.IngressDomainCollection

    // \u672C\u5730 Kubernetes \u5BA2\u6237\u7AEF
    localKubeClient kube.Client

    // \u5904\u7406 VirtualService \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
    virtualServiceHandlers []model.EventHandler
    // \u5904\u7406 Gateway \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
    gatewayHandlers []model.EventHandler
    // \u5904\u7406 DestinationRule \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
    destinationRuleHandlers []model.EventHandler
    // \u5904\u7406 EnvoyFilter \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
    envoyFilterHandlers []model.EventHandler
    // \u5904\u7406 ServiceEntry \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
    serviceEntryHandlers []model.EventHandler
    // \u5904\u7406 WasmPlugin \u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
    wasmPluginHandlers []model.EventHandler

    // \u7528\u4E8E\u5904\u7406\u76D1\u89C6\u9519\u8BEF\u7684\u5904\u7406\u7A0B\u5E8F
    watchErrorHandler cache.WatchErrorHandler

    // \u7F13\u5B58\u7684 EnvoyFilter \u914D\u7F6E
    cachedEnvoyFilters []config.Config

    // \u6B63\u5728\u76D1\u89C6\u7684 Secret \u96C6\u5408
    watchedSecretSet sets.Set

    // \u7528\u4E8E\u534F\u8C03\u6CE8\u518C\u8868\u7684\u8C03\u89E3\u5668
    RegistryReconciler *reconcile.Reconciler

    // MCP \u6865\u63A5\u662F\u5426\u5DF2\u8C03\u89E3\u7684\u6807\u5FD7
    mcpbridgeReconciled *atomic.Bool

    // \u7BA1\u7406 MCP \u6865\u63A5\u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868
    mcpbridgeController mcpbridge.McpBridgeController
    mcpbridgeLister     netlisterv1.McpBridgeLister

    // \u7BA1\u7406 WasmPlugin \u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868
    wasmPluginController wasmplugin.WasmPluginController
    wasmPluginLister     extlisterv1.WasmPluginLister

    // \u5DF2\u6CE8\u518C\u7684 WasmPlugin \u96C6\u5408\uFF0C\u952E\u4E3A WasmPlugin \u540D\u79F0
    wasmPlugins map[string]*extensions.WasmPlugin

    // \u7BA1\u7406 HTTP2RPC \u76F8\u5173\u7684\u63A7\u5236\u5668\u548C\u5217\u8868
    http2rpcController http2rpc.Http2RpcController
    http2rpcLister     netlisterv1.Http2RpcLister

    // \u5DF2\u6CE8\u518C\u7684 HTTP2RPC \u96C6\u5408\uFF0C\u952E\u4E3A HTTP2RPC \u540D\u79F0
    http2rpcs map[string]*higressv1.Http2Rpc

    // Configmap \u7684\u7BA1\u7406\u5668
    configmapMgr *configmap.ConfigmapMgr

    // \u7528\u4E8E\u66F4\u65B0 XDS
    XDSUpdater model.XDSUpdater

    // \u5904\u7406\u6CE8\u89E3\u7684\u6CE8\u89E3\u5904\u7406\u7A0B\u5E8F
    annotationHandler annotations.AnnotationHandler

    // \u547D\u540D\u7A7A\u95F4
    namespace string

    // \u96C6\u7FA4 ID
    clusterId string
}
\`\`\`

\u8BE5\u7ED3\u6784\u4F53\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u7ED3\u6784\u4F53\u672C\u8D28\u4E0A\u4E5F\u662F\u5B9E\u73B0\u4E86\`translation.go\`\u63D0\u5230\u7684\u4E24\u4E2A\u63A5\u53E3\uFF0C\u65B9\u6CD5\u5217\u8868\u548C\`translation.go\`\u6781\u5176\u76F8\u4F3C\uFF0C\u6211\u4EEC\u5206\u6790\u4E00\u4E0B\u4E00\u4E9B\u6BD4\u8F83\u590D\u6742\u7684\u65B9\u6CD5\uFF0C\u5269\u4E0B\u7684\u53EF\u81EA\u884C\u5B9A\u4F4D\u5230\u6E90\u7801\u67E5\u770B\uFF1A

- \`NewIngressConfig\`

    1. \u521D\u59CB\u5316\`IngressConfig\`\uFF0C\u521B\u5EFA\u591A\u4E2A\u5B50\u63A7\u5236\u5668(mcpbridge\u3001wasmplugin\u3001http2rpc\u7B49)\u5E76\u8D4B\u503C\u7ED9\u5BF9\u5E94\u7684\u5B57\u6BB5\u4E0A\u3002
    2. \u4E3A\u591A\u4E2A\u5B50\u63A7\u5236\u5668\u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u7528\u4E8E\u76D1\u542CKubernetes\u8D44\u6E90\u7684\u53D8\u5316\uFF0C\u5E76\u8FDB\u884C\u76F8\u5E94\u7684\u5904\u7406\u3002
    \`\`\`go
    config := &IngressConfig{
        remoteIngressControllers: make(map[string]common.IngressController),
        localKubeClient:          localKubeClient,
        XDSUpdater:               XDSUpdater,
        annotationHandler:        annotations.NewAnnotationHandlerManager(),
        ...
    }
    mcpbridgeController := mcpbridge.NewController(localKubeClient, clusterId)
    mcpbridgeController.AddEventHandler(config.AddOrUpdateMcpBridge, config.DeleteMcpBridge)
    config.mcpbridgeController = mcpbridgeController
    config.mcpbridgeLister = mcpbridgeController.Lister()
    ...
    \`\`\`


\u5728\u8FD9\u91CC\uFF0C\u6709\u51E0\u4E2A\u65B9\u6CD5\u9700\u8981\u6CE8\u610F\uFF1A

    1. \`annotations.NewAnnotationHandlerManager()\`
    2. \`mcpbridge.NewController(localKubeClient, clusterId)\`
    3. \`wasmplugin.NewController(localKubeClient, clusterId)\`
    4. \`http2rpc.NewController(localKubeClient, clusterId)\`
    5. \`configmap.NewController(localKubeClient, clusterId, namespace)\`

\u5F88\u660E\u663E\u8FD9\u4E9B\u65B9\u6CD5\u5206\u522B\u5BF9\u5E94\`pkg/ingress/kube\`\u76EE\u5F55\u4E0B\u4E00\u4E9B\u81EA\u5B9A\u4E49\u7684\u8D44\u6E90\u914D\u7F6E\u65B9\u6CD5\uFF0C\u540E\u9762\u4F1A\u9488\u5BF9\u8BE5\u76EE\u5F55\u8FDB\u884C\u5355\u72EC\u7684\u4ECB\u7ECD\u3002

- \`RegisterEventHandler\`

    1. \u5BF9kind\u53D8\u91CF\u8FDB\u884C\u5224\u65AD\uFF0C\u5224\u65AD\u5C5E\u4E8E\u54EA\u79CD\u8D44\u6E90\uFF0C\u5E76\u6DFB\u52A0\u5230\u5BF9\u5E94\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5207\u7247
     \`\`\`go
    switch kind {
    case gvk.VirtualService:
        m.virtualServiceHandlers = append(m.virtualServiceHandlers, f)

    ...
    }
    \`\`\`
    2. \u6CE8\u518C\u4E8B\u4EF6\u76D1\u542C\u5668
    \`\`\`go
    for _, remoteIngressController := range m.remoteIngressControllers {
        remoteIngressController.RegisterEventHandler(kind, f)
    }
    \`\`\`
  \u6211\u4EEC\u53EF\u4EE5\u5B9A\u4F4D\u4E00\u4E0B\`remoteIngressController\`\u7684\`RegisterEventHandler\`\u65B9\u6CD5\uFF1A
    \`\`\`go
    func (c *controller) RegisterEventHandler(kind config.GroupVersionKind, f model.EventHandler) {
        switch kind {
        case gvk.VirtualService:
           c.virtualServiceHandlers = append(c.virtualServiceHandlers, f)
        ...
        }
    }
    \`\`\`
- \`AddLocalCluster\`
    1. \u521B\u5EFAingress\u603B\u63A7\u5236\u5668\uFF0C\u5E76\u6CE8\u518C\u5230\`remoteIngressControllers\`\u4E2D
    \`\`\`go
    ingressController = ingress.NewController(m.localKubeClient, m.localKubeClient, options, secretController)
    m.remoteIngressControllers[options.ClusterId] = ingressController
    \`\`\`
- \`InitializeCluster\`
    1. \u8BBE\u7F6E\u9519\u8BEF\u76D1\u542C\u5904\u7406\u5668
    \`\`\`go
    _ = ingressController.SetWatchErrorHandler(m.watchErrorHandler)
    \`\`\`
  \u5176\u4E2D\`SetWatchErrorHandler\`\u65B9\u6CD5\u5982\u4E0B\uFF0C\u8C03\u7528\u5404\u4E2Ainformer\u7684\`SetWatchErrorHandler\`\u65B9\u6CD5\uFF1A
    \`\`\`go
    func (c *controller) SetWatchErrorHandler(handler func(r *cache.Reflector, err error)) error {
        var errs error
        if err := c.serviceInformer.SetWatchErrorHandler(handler); err != nil {
           errs = multierror.Append(errs, err)
        }
        if err := c.ingressInformer.SetWatchErrorHandler(handler); err != nil {
           errs = multierror.Append(errs, err)
        }
        ...
        return errs
    }
    \`\`\`
    3. \u901A\u8FC7go\u534F\u7A0B\u542F\u52A8\`ingressController\`
    \`\`\`go
    go ingressController.Run(stop)
    \`\`\`
- \`List\`
    1. \u524D\u671F\u68C0\u67E5\uFF0C\u9884\u9632\u7A7A\u6307\u9488\u6216\u903B\u8F91\u9519\u8BEF
    \`\`\`go
    if typ != gvk.Gateway &&
        typ != gvk.VirtualService &&
        typ != gvk.DestinationRule &&
        typ != gvk.EnvoyFilter &&
        typ != gvk.ServiceEntry &&
        typ != gvk.WasmPlugin {
        return nil, common.ErrUnsupportedOp
    }

    // Currently, only support list all namespaces gateways or virtualservices.
    if namespace != "" {
        IngressLog.Warnf("ingress store only support type %s of all namespace.", typ)
        return nil, common.ErrUnsupportedOp
    }
    \`\`\`
    2. \u5982\u679Ckind\u7C7B\u578B\u662Fenvoyfilter\uFF0C\u62FF\u51FA\u6765\u5904\u7406\u6389
    \`\`\`go
    if typ == gvk.EnvoyFilter {
        ...
        // Build configmap envoy filters
	configmapEnvoyFilters, err := m.configmapMgr.ConstructEnvoyFilters()
        ...
    }
    \`\`\`
    3. \u5982\u679C\u4E0D\u662F\uFF0C\u8C03\u7528ingress\u63A7\u5236\u5668(\u5982\u679C\u6709kingress\u63A7\u5236\u5668\uFF0C\u4E5F\u7ED9\u5E26\u4E0A)\u7684\`List\`\u65B9\u6CD5\uFF0C\u6DFB\u52A0\u5230config\u5217\u8868\uFF0C\u4EE5ingress\u63A7\u5236\u5668\u7684\u65B9\u6CD5\u4E3A\u4F8B\uFF0C\u4F1A\u83B7\u53D6informer\u5BF9\u8C61\u7684\u5B58\u50A8\u5668\uFF0C\u5E76\u5BF9\u5176\u8FDB\u884C\u904D\u5386\uFF0C\u5C06\u904D\u5386\u5230\u7684\u5BF9\u8C61\u8FDB\u884C\u6DF1\u62F7\u8D1D\uFF0C\u5E76\u8FD4\u56DEconfig\u5217\u8868\u3002\u7531\u4E8E\`List\`\u65B9\u6CD5\u662F\u5B9E\u73B0\`ConfigStore\`\u63A5\u53E3\u7684\uFF0C\`istio\`\u5185\u90E8\u4F1A\u5BF9\u8FD9\u4E2Aconfig\u5217\u8868\u8FDB\u884C\u4E0B\u4E00\u6B65\u5904\u7406\u3002
    \`\`\`go
    var configs []config.Config
    m.mutex.RLock()
    for _, ingressController := range m.remoteIngressControllers {
        configs = append(configs, ingressController.List()...)
    }
    m.mutex.RUnlock()
    \`\`\`
    4. \u5BF9config\u5217\u8868\u6839\u636E\u521B\u5EFA\u65F6\u95F4\u8FDB\u884C\u6392\u5E8F\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u5305\u88C5\u597D\u7684config\u5217\u8868\uFF0CwrapperConfigs\u91CC\u9664\u4E86\`Config\`\`\uFF0C\u8FD8\u4F1A\u5305\u542B\`AnnotationsConfig\`\u6CE8\u89E3\u914D\u7F6E
    \`\`\`go
    common.SortIngressByCreationTime(configs)
    wrapperConfigs := m.createWrapperConfigs(configs)
    \`\`\`
    5. \u6839\u636Ekind\u7C7B\u578B\uFF0C\u5C06wrapperConfigs\u8F6C\u6362\u4E3A\u5BF9\u5E94\u7684\u8D44\u6E90\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF0C\u5E76\u4E3AconvertGateways\u9644\u52A0\u6CE8\u91CA
    \`\`\`go
    switch typ {
    case gvk.Gateway:
        //1.\u521D\u59CB\u5316ConvertOptions
        //2.\u8C03\u7528ingress\u63A7\u5236\u5668\u7684ConvertGateway\u65B9\u6CD5\uFF0C\u5728\u8FD9\u91CC\uFF0Cingress\u63A7\u5236\u5668\u9996\u5148\u505A\u4E00\u4E9B\u68C0\u67E5\uFF0C\u5E76\u904D\u5386rule\u89C4\u5219\u5217\u8868
        //  \u4E3A\u6BCF\u4E2Arule\u521B\u5EFAIngressDomainBuilder\u6784\u9020\u5668\uFF0C\u4E2D\u95F4\u8FC7\u7A0B\u4F1A\u6784\u9020gateway\u5305\u88C5\u5668\u3001\u83B7\u53D6tls\u5BC6\u94A5\u540D\u79F0\u7B49\u7B49
        //  \u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u4F1A\u5BF9config\u5305\u88C5\u5668\u8FDB\u884C\u4FEE\u6539
        //3.apply\u6CE8\u89E3
        //4.\u7EC4\u5408\u6210istio\u80FD\u591F\u8BC6\u522B\u7684config\u5217\u8868
        return m.convertGateways(wrapperConfigs), nil
    case gvk.VirtualService:
        return m.convertVirtualService(wrapperConfigs), nil
    case gvk.DestinationRule:
        return m.convertDestinationRule(wrapperConfigs), nil
    ...
    }
    \`\`\`
  \u8FD9\u5757\u5185\u5BB9\u8F83\u591A\uFF0C\u5177\u5907\u4E00\u5B9A\u7684\u96BE\u5EA6\uFF0C\u9700\u8981\u5BF9\u5404\u4E2A\u8D44\u6E90\u6709\u4E00\u5B9A\u7684\u7406\u89E3\u3002

\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u6781\u4E3A\u76F8\u4F3C\u7684
- \`AddOrUpdateWasmPlugin\`
- \`DeleteWasmPlugin\`
- \`AddOrUpdateMcpBridge\`
- \`DeleteMcpBridge\`
- \`AddOrUpdateHttp2Rpc\`
- \`DeleteHttp2Rpc\`

\u987E\u540D\u601D\u4E49\uFF0C\u5C31\u662F\u5728\u76D1\u542C\u5BF9\u5E94\u8D44\u6E90\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u751F\u8D44\u6E90\u7684\u6DFB\u52A0\u6216\u8005\u53D8\u66F4\u6216\u8005\u5220\u9664\u8FDB\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C\u3002

\u4EE5\`AddOrUpdateWasmPlugin\`\u548C\`DeleteWasmPlugin\`\u4E3A\u4F8B\u3002

- \`AddOrUpdateWasmPlugin\`

    1. \u83B7\u53D6wasmplugin
    \`\`\`go
    wasmPlugin, err := m.wasmPluginLister.WasmPlugins(clusterNamespacedName.Namespace).Get(clusterNamespacedName.Name)
    \`\`\`
    2. \u5C06wasmplugin\u8F6C\u5316\u4E3Aistio\u80FD\u591F\u8BC6\u522B\u7684wasmplugin
    \`\`\`go
    istioWasmPlugin, err := m.convertIstioWasmPlugin(&wasmPlugin.Spec)
    \`\`\`
    3. \u66F4\u65B0\`IngressConfig\`
    \`\`\`go
    m.wasmPlugins[clusterNamespacedName.Name] = istioWasmPlugin
    \`\`\`

- \`DeleteWasmPlugin\`

    1. \u66F4\u65B0\`IngressConfig\`
    \`\`\`go
    delete(m.wasmPlugins, clusterNamespacedName.Name)
    \`\`\`
    2. \u5982\u679C\u5B58\u5728\u8BE5wasmplugin\uFF0C\u89E6\u53D1\`wasmPluginHandlers\`\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u6267\u884C\u5BF9\u5E94\u7684\u64CD\u4F5C
    \`\`\`go
    for _, f := range m.wasmPluginHandlers {
        IngressLog.Debug("WasmPlugin triggerd update")
        f(config.Config{Meta: metadata}, config.Config{Meta: metadata}, model.EventDelete)
    }
    \`\`\`

\u5230\u6B64\u4E3A\u6B64\uFF0C\`ingress_config.go\`\u7684\u5185\u5BB9\u57FA\u672C\u4ECB\u7ECD\u5B8C\u6BD5\uFF0C\u5927\u90E8\u5206\u5185\u5BB9\u5E76\u672A\u505A\u8FC7\u591A\u6DF1\u5165\uFF0C\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u81EA\u884C\u4E0B\u8F7D\u6E90\u7801\u6D4F\u89C8\u67E5\u770B\u3002

\u6211\u4EEC\u73B0\u5728\u56DE\u5230\u6700\u5F00\u59CB\u7684\`initConfigController\`\u51FD\u6570\u4E0A\uFF0C\u53EF\u4EE5\u53D1\u73B0\u8FD9\u4E2A\u51FD\u6570\u7684\u6838\u5FC3\u5185\u5BB9\u5176\u5B9E\u5C31\u662F\`ingress_config.go\`\uFF0C\u5F53\u7136\u8FD8\u6709\u5BF9\u5E94\u7684\u591A\u4E2A\u63A7\u5236\u5668\uFF0C\u5173\u4E8E\u63A7\u5236\u5668\u7684\u4ECB\u7ECD\uFF0C\u5C06\u5728\u540E\u9762\u8FDB\u884C\u4ECB\u7ECD\u3002

### \`initRegistryEventHandlers\`\u51FD\u6570\u5256\u6790

\u8BE5\u51FD\u6570\u76F8\u5BF9\u4E8E\`initConfigController\`\u51FD\u6570\u6765\u8BF4\u7B80\u5355\u5F88\u591A\uFF0C\u5176\u4E3B\u8981\u505A\u7684\u5185\u5BB9\u5C31\u662F\u914D\u7F6Exds\u66F4\u65B0\u5904\u7406\u5668\uFF0C\u5E76\u5C06\u5176\u4F5C\u4E3A\u4E8B\u4EF6\u76D1\u542C\u5668\u7684\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF0C\u6CE8\u518C\u7ED9\`configController\`\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5F53\u53D1\u751F\u8D44\u6E90\u7684\u53D8\u66F4\u65F6\uFF0C\u4F1A\u901A\u8FC7xds\u534F\u8BAE\u8FDB\u884C\u63A8\u9001\u66F4\u65B0\u3002

## \`pkg/ingress/kube\`\u76EE\u5F55\u4ECB\u7ECD

\u8FD9\u90E8\u5206\u5185\u5BB9\u8F83\u591A\uFF0C\u540E\u7EED\u53EF\u81EA\u884C\u9488\u5BF9\u611F\u5174\u8DA3\u7684\u90E8\u5206\u8FDB\u884C\u7CBE\u8BFB\u3002

- \`annotations\`

  \u8FD9\u91CC\u4E3B\u8981\u5904\u7406ingress\u6CE8\u89E3\u7684\u914D\u7F6E\uFF0C\u5728\`NewAnnotationHandlerManager\`\u65B9\u6CD5\u91CC\u5217\u51FA\u4E86\u4E00\u4E9B\u5DF2\u7ECF\u652F\u6301\u7684\u6CE8\u89E3\uFF0C\u6BCF\u4E2A\u6CE8\u89E3\u7684\u5904\u7406\u7A0B\u5E8F\u9700\u8981\u5B9E\u73B0\`AnnotationHandler\`\u6240\u5B9A\u4E49\u7684\u63A5\u53E3\u5217\u8868\u3002
- \`common\`

  \u8FD9\u91CC\u6838\u5FC3\u7684\u6587\u4EF6\u4E3A\`controller.go\`\uFF0C\u4E3B\u8981\u505A\u4E86\u4E00\u4E9B\u8D44\u6E90\u7684\u5305\u88C5\uFF0C\u4EE5\u53CA\u5B9A\u4E49\u4E86\`IngressController\`\u63A5\u53E3\u65B9\u6CD5\uFF0C\u5176\u5B9E\u73B0\u7C7B\u6709\`pkg/ingress/kube/ingress/controller.go\`\u548C\`pkg/ingress/kube/ingressv1/controller.go\`

- \`configmap\`

  \u8FD9\u91CC\u4E3B\u8981\u4E3A\`ConfigMap\`\u6DFB\u52A0\u4E86\`higress\`\u7684KV\u5BF9\uFF0C\u5728\`controller.go\`\u4E2D\u5B9A\u4E49\u4E86\`ItemController\`\u63A5\u53E3\uFF0C\u548C\u524D\u8005\u63D0\u5230\u7684\u4E00\u6837\uFF0C\u8FD9\u91CC\u4E5F\u63D0\u4F9B\u4E86\u76F8\u4F3C\u7684\u66F4\u65B0\u914D\u7F6E\u7684\u65B9\u6CD5\`AddOrUpdateHigressConfig\`\uFF0C\u540C\u6837\u5730\uFF0C\u4E5F\u662F\u5148\u83B7\u53D6\u5F53\u524D\u7684value\u503C\uFF0C\u5E76\u83B7\u53D6\u65E7\u7684value\u503C\uFF0C\u8FDB\u884C\u4E00\u4E2A\u6BD4\u5BF9\uFF0C\u6BD4\u5BF9\u7ED3\u679C\u53EF\u80FD\u4E3A\u65B0\u589E\u3001\u66F4\u65B0\u3001\u5220\u9664\uFF0C\u5206\u522B\u6267\u884C\u5BF9\u5E94\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u91CC\u6240\u5B9A\u4E49\u7684\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u4E5F\u5C31\u662F\`XDSUpdater\`\u3002

- \`controller\`

  \u5728\u524D\u9762\u7684\u4ECB\u7ECD\u4E2D\uFF0C\u63D0\u5230\u4E86\u5F88\u591A\u6B21\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u53EF\u80FD\u4F1A\u6709\u4EBA\u7591\u95EE\u662F\u600E\u4E48\u505A\u8D44\u6E90\u76D1\u542C\u7684\uFF0C\u8D44\u6E90\u76D1\u542C\u7684\u4EE3\u7801\u5C31\u4F4D\u4E8E\u672C\u76EE\u5F55\u4E0B\u4E86\u3002\u8FD9\u91CC\u53EF\u4EE5\u7740\u91CD\u4ECB\u7ECD\u4E00\u4E0B\uFF0C\u4E8B\u4EF6\u76D1\u542C\u7684\u5177\u4F53\u5B9E\u73B0\u539F\u7406\u3002
    1. \u5B9A\u4E49\u4E86\`Controller[lister any]\`\u63A5\u53E3\uFF0C\u5176\u5B9E\u73B0\u7C7B\u4E3A\`CommonController\`\u3002
       \u6211\u4EEC\u53EF\u4EE5\u770B\u4E00\u4E0B\u8FD9\u4E2A\u5B9E\u73B0\u7ED3\u6784\u4F53\u6709\u54EA\u4E9B\u9700\u8981\u6CE8\u610F\u7684\u5B57\u6BB5\u3002

       **lister**: \u8FD9\u4E2A\u5B57\u6BB5\u4E3Aany\u7C7B\u578B\uFF0C\u4F1A\u5728\`NewCommonController\`\u65B9\u6CD5\u91CC\u4F20\u5165\u8FDB\u6765\uFF0C\u70B9\u51FB\u67E5\u770B\u8BE5\u65B9\u6CD5\u8C03\u7528\u60C5\u51B5\uFF0C\u53EF\u4EE5\u53D1\u73B0\u4F20\u5165\u8BE5\u5B57\u6BB5\u7684\u90FD\u662F\u5404\u4E2A\u8D44\u6E90\u7684\u76D1\u542C\u5668\uFF0C\u4F8B\u5982\`ConfigMap\`\u7684\u76D1\u542C\u5668\u5C31\u662F\`client.KubeInformer().Core().V1().ConfigMaps().Lister().ConfigMaps(namespace)\`\uFF0C\u5176\u5B83\u4E5F\u662F\u5982\u6B64\u3002
       **updateHandler**: \u8FD9\u4E2A\u5B57\u6BB5\u4E3A\`func(util.ClusterNamespacedName)\`\u7C7B\u578B\uFF0C\u4E3B\u8981\u7528\u4E8E\u5B58\u50A8\u5BF9\u5E94\u76D1\u542C\u5668lister\u6240\u63D0\u4F9B\u7684\u66F4\u65B0\u6216\u8005\u65B0\u589E\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u5B58\u50A8\u4EE3\u7801\u5982\u4E0B\uFF1A
        \`\`\`go
        func (c *CommonController[lister]) AddEventHandler(addOrUpdate func(util.ClusterNamespacedName), delete ...func(util.ClusterNamespacedName)) {
            c.updateHandler = addOrUpdate
            if len(delete) > 0 {
               c.removeHandler = delete[0]
            }
        }
        \`\`\`
       **removeHandler**: \u540C**updateHandler**
    2. \u63A5\u53E3\u65B9\u6CD5\u9664\u4E86\u521A\u521A\u4ECB\u7ECD\u7684\`AddEventHandler\`\u65B9\u6CD5\uFF0C\u8FD8\u6709\u4E2A\`Run\`\u65B9\u6CD5\u9700\u8981\u6CE8\u610F\u4E00\u4E0B
        \`\`\`go
        func (c *CommonController[lister]) Run(stop <-chan struct{}) {
            defer utilruntime.HandleCrash()
            defer c.queue.ShutDown()
            if !cache.WaitForCacheSync(stop, c.HasSynced) {
               IngressLog.Errorf("Failed to sync %s controller cache", c.typeName)
               return
            }
            IngressLog.Debugf("%s cache has synced", c.typeName)
            go wait.Until(c.worker, time.Second, stop)
            <-stop
        }
        \`\`\`
       \u53EF\u4EE5\u770B\u6709\u4E2A\`wait.Until\`\u65B9\u6CD5\uFF0C\u7528\u4E8E\u6BCF\u79D2\u949F\u6267\u884C\`c.worker\`\u65B9\u6CD5\uFF0C\u76F4\u5230\u63A5\u6536\u5230\`stop\`\u4FE1\u53F7\uFF0C\u65B9\u6CD5\u8C03\u7528\u94FE\u5982\u4E0B\uFF1A\`c.worker\`->\`c.processNextWorkItem()\`->\`c.onEvent(ingressNamespacedName)\`->\`c.updateHandler(obj)\`\uFF0C\u53EF\u4EE5\u770B\u51FA\u6765\u5F53\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u63A7\u5236\u5668\uFF0C\u5E76\u4E3A\u5176\u6CE8\u518C\u4E86\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\u5668\u4EE5\u53CA\u4E8B\u4EF6\u5904\u7406\u5668(updateHandler)\uFF0C\u56E0\u6B64\u6BCF\u79D2\u949F\u4F1A\u6267\u884C\u4E8B\u4EF6\u5904\u7406\u5668\uFF0C\u4E5F\u5C31\u5B9E\u73B0\u4E86\u76D1\u542C\u7684\u903B\u8F91\u3002

  \u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u4E3B\u8981\u5B9A\u4E49\u4E86\u4E00\u4E2A\u516C\u5171\u7684\u63A7\u5236\u5668\uFF0C\u53EF\u4EE5\u8282\u7701\u5927\u91CF\u4EE3\u7801\u7684\u7F16\u5199\uFF0C\u6211\u4EEC\u5728\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5B50\u63A7\u5236\u5668\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8C03\u7528\`NewCommonController\`\u65B9\u6CD5\u6765\u5B9E\u73B0\u76D1\u542C\u903B\u8F91\u3002

- \`http2rpc\`

  \u4EE3\u7801\u8F83\u4E3A\u7B80\u5355\uFF0C\u901A\u8FC7\`NewCommonController\`\u6765\u521B\u5EFA\`Http2RpcController\`\uFF0C\u5E76\u63D0\u4F9B\u4E86\`GetHttp2Rpc\`\u65B9\u6CD5\u3002

- \`ingress\`

  Ingress\u63A7\u5236\u5668\u7684\u6838\u5FC3\u4EE3\u7801\u903B\u8F91\uFF0C\u4E3B\u8981\u4E3A\u524D\u6587\u63D0\u5230\u7684\`ingress_config.go\`\u6240\u8C03\u7528\u3002\u90E8\u5206\u5185\u5BB9\u5728\u524D\u6587\u5DF2\u7ECF\u7B80\u5355\u4ECB\u7ECD\u8FC7\u3002

- \`ingressv1\`

  Ingress\u7684API\u7248\u672Cv1\u76F8\u5173\u7684\u63A7\u5236\u5668\u4EE3\u7801\u3002

- \`kingress\`

  kingress\u76F8\u5173\u7684\u63A7\u5236\u5668\u4EE3\u7801\u3002

- \`mcpbridge\`

  \u540C\`http2rpc\`\u76EE\u5F55\u3002

- \`secret\`

  \u540C\`http2rpc\`\u76EE\u5F55\u3002

- \`util\`

  \u5DE5\u5177\u5305\u3002

- \`wasmplugin\`

  \u540C\`http2rpc\`\u76EE\u5F55\u3002

## higress-core\u6D41\u7A0B\u56FE

\u7ECF\u8FC7\u524D\u9762\u7684\u6E90\u7801\u5206\u6790\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5BF9higress\u6838\u5FC3\u903B\u8F91\u5DF2\u7ECF\u6709\u4E86\u521D\u6B65\u7684\u7406\u89E3\uFF0C\u540E\u7EED\u53EF\u4EE5\u9488\u5BF9\u81EA\u5DF1\u611F\u5174\u8DA3\u7684\u90E8\u5206\uFF0C\u8FDB\u884C\u6DF1\u5165\u7814\u7A76\uFF0C\u5176\u4E2D\u4F1A\u6D89\u53CA\u5230Kubernetes\u8D44\u6E90\u914D\u7F6E\u7684\u6838\u5FC3\u903B\u8F91\u4EE5\u53CAIstio\u7684\u57FA\u672C\u638C\u63E1\uFF0C\u5F53\u7136\uFF0C\u5982\u679C\u7ED9\u5B83\u7814\u7A76\u900F\u4E86\uFF0C\u5BF9\u8FD9\u4E9B\u57FA\u672C\u539F\u7406\u7684\u7406\u89E3\u5C06\u4F1A\u66F4\u4E3A\u6DF1\u523B\u3002

\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A


![img.png](/img/blog/higress-code0.png)

\u5BF9\u4E8E\u521D\u59CB\u5316\u914D\u7F6E\u63A7\u5236\u5668\u90E8\u5206\uFF0C\u53EF\u8FDB\u4E00\u6B65\u7ED8\u753B\u6D41\u7A0B\u56FE\u3002

![img1.png](/img/blog/higress-code1.png)

\u5173\u4E8E\u4E8B\u4EF6\u76D1\u542C\u90E8\u5206\uFF0C\u5176\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A

![img2.png](/img/blog/higress-code2.png)

## \u603B\u7ED3

\u4EE5\u4E0A\u662F\u5BF9higress\u6E90\u7801\u7684\u521D\u6B65\u5206\u6790\uFF0C\u5E0C\u671B\u80FD\u591F\u7ED9\u7528\u6237\u4EE5\u53CA\u5F00\u53D1\u8005\u5BF9higress\u6709\u4E2A\u57FA\u672C\u7684\u4E86\u89E3\u3002`},l=function(){return s},p=function(){return[{depth:2,slug:"\u5F15\u8A00",text:"\u5F15\u8A00"},{depth:2,slug:"\u5173\u4E8Ehigress",text:"\u5173\u4E8EHigress"},{depth:2,slug:"\u4EE3\u7801\u76EE\u5F55\u8BF4\u660E",text:"\u4EE3\u7801\u76EE\u5F55\u8BF4\u660E"},{depth:2,slug:"higress-core\u6E90\u7801\u6574\u4F53\u5206\u6790",text:"higress-core\u6E90\u7801\u6574\u4F53\u5206\u6790"},{depth:3,slug:"\u542F\u52A8\u5165\u53E3pkgcmdservergo",text:"\u542F\u52A8\u5165\u53E3\uFF1Apkg/cmd/server.go"},{depth:3,slug:"\u521B\u5EFA\u5B9E\u4F8Bnewserver",text:"\u521B\u5EFA\u5B9E\u4F8B\uFF1ANewServer"},{depth:4,slug:"\u521D\u59CB\u5316pilot\u7684\u73AF\u5883-apimodelenvironment",text:"\u521D\u59CB\u5316Pilot\u7684\u73AF\u5883 APImodel.Environment"},{depth:4,slug:"\u4E3Amodelenvironment\u8BBE\u7F6Eledger",text:"\u4E3Amodel.Environment\u8BBE\u7F6ELedger"},{depth:4,slug:"\u4E3Amodelenvironment\u8BBE\u7F6E\u670D\u52A1\u53D1\u73B0\u7684\u63A5\u53E3servicediscovery\u7528\u4E8E\u5217\u4E3E\u670D\u52A1\u548C\u5B9E\u4F8B",text:"\u4E3Amodel.Environment\u8BBE\u7F6E\u670D\u52A1\u53D1\u73B0\u7684\u63A5\u53E3ServiceDiscovery\uFF0C\u7528\u4E8E\u5217\u4E3E\u670D\u52A1\u548C\u5B9E\u4F8B\u3002"},{depth:4,slug:"\u521D\u59CB\u5316server\u5B9E\u4F8B",text:"\u521D\u59CB\u5316Server\u5B9E\u4F8B"},{depth:4,slug:"\u521B\u5EFA\u521D\u59CB\u542F\u52A8\u51FD\u6570\u5217\u8868",text:"\u521B\u5EFA\u521D\u59CB\u542F\u52A8\u51FD\u6570\u5217\u8868"},{depth:4,slug:"\u904D\u5386\u542F\u52A8\u51FD\u6570\u5217\u8868\u6267\u884C\u542F\u52A8\u51FD\u6570",text:"\u904D\u5386\u542F\u52A8\u51FD\u6570\u5217\u8868\uFF0C\u6267\u884C\u542F\u52A8\u51FD\u6570"},{depth:4,slug:"\u6CE8\u518Cpilot-server",text:"\u6CE8\u518CPilot Server"},{depth:4,slug:"\u5728ready\u670D\u52A1\u8BB0\u5F55\u8868\u91CC\u6CE8\u518Cxds\u670D\u52A1",text:"\u5728ready\u670D\u52A1\u8BB0\u5F55\u8868\u91CC\u6CE8\u518Cxds\u670D\u52A1"},{depth:3,slug:"\u542F\u52A8\u5B9E\u4F8Bstart",text:"\u542F\u52A8\u5B9E\u4F8B\uFF1AStart"},{depth:2,slug:"higress-core\u6838\u5FC3\u6E90\u7801\u5206\u6790",text:"higress-core\u6838\u5FC3\u6E90\u7801\u5206\u6790"},{depth:3,slug:"initconfigcontroller\u51FD\u6570\u5256\u6790",text:"initConfigController\u51FD\u6570\u5256\u6790"},{depth:4,slug:"translationgo\u5256\u6790",text:"translation.go\u5256\u6790"},{depth:4,slug:"ingress_configgo\u5256\u6790",text:"ingress_config.go\u5256\u6790"},{depth:3,slug:"initregistryeventhandlers\u51FD\u6570\u5256\u6790",text:"initRegistryEventHandlers\u51FD\u6570\u5256\u6790"},{depth:2,slug:"pkgingresskube\u76EE\u5F55\u4ECB\u7ECD",text:"pkg/ingress/kube\u76EE\u5F55\u4ECB\u7ECD"},{depth:2,slug:"higress-core\u6D41\u7A0B\u56FE",text:"higress-core\u6D41\u7A0B\u56FE"},{depth:2,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"}]},e=r((f,m,x)=>{const{layout:C,...t}=a;return t.file=n,t.url=i,c`${v()}${E(s)}`})});export{e as Content,u as __tla,l as compiledContent,e as default,n as file,a as frontmatter,p as getHeadings,d as rawContent,i as url};
