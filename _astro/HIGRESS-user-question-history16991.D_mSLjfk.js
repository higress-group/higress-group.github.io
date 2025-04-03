import{c as o,__tla as c}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as v,__tla as y}from"./constant.DUMFLcxs.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let e,l,a,n,p,d,i,u=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress kind\u96C6\u7FA4\u90E8\u7F72\u8BE6\u89E3</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5173\u4E8E\u5728Kubernetes\uFF08K8s\uFF09\u4E2D\u4F7F\u7528Higress\u4EE5\u53CA\u5982\u4F55\u5728Kind\u96C6\u7FA4\u4E0A\u90E8\u7F72Higress\u7684\u8BE6\u7EC6\u6B65\u9AA4\u3002\u4EE5\u4E0B\u662F\u5BF9\u8FD9\u4E00\u8FC7\u7A0B\u7684\u8BE6\u7EC6\u89E3\u6790\u548C\u6307\u5BFC\uFF0C\u4F9D\u6258\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u3002</p>
<h3 id="\u90E8\u7F72\u51C6\u5907\u4E0E\u73AF\u5883\u914D\u7F6E">\u90E8\u7F72\u51C6\u5907\u4E0E\u73AF\u5883\u914D\u7F6E</h3>
<h4 id="\u7B2C\u4E00\u6B65\u914D\u7F6E\u672C\u5730\u73AF\u5883\u4E0Ekubernetes\u96C6\u7FA4">\u7B2C\u4E00\u6B65\uFF1A\u914D\u7F6E\u672C\u5730\u73AF\u5883\u4E0EKubernetes\u96C6\u7FA4</h4>
<p>\u786E\u4FDD\u4F60\u7684\u672C\u5730\u73AF\u5883\u5DF2\u51C6\u5907\u597DKubernetes\u76F8\u5173\u7684\u5DE5\u5177\uFF0C\u5982<code dir="auto">kubectl</code>\u548C<code dir="auto">kind</code>\u3002\u5BF9\u4E8EMac\u548CLinux\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u6216\u66F4\u65B0\u8FD9\u4E9B\u5DE5\u5177\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8">)</span><span style="--0:#9ECBFF">-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin/</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://dl.k8s.io/release/v1.27.1/bin/darwin/amd64/kubectl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin/</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-$(uname)-amd64\x7Fchmod +x ./kind\x7Fsudo mv ./kind /usr/local/bin/\x7F\x7Fcurl -LO https://dl.k8s.io/release/v1.27.1/bin/darwin/amd64/kubectl\x7Fchmod +x ./kubectl\x7Fsudo mv ./kubectl /usr/local/bin/"><div></div></button></div></figure></div>
<p>\u5BF9\u4E8EWindows\u7CFB\u7EDF\uFF0C\u8BF7\u53C2\u7167\u76F8\u5E94\u547D\u4EE4\u6267\u884C\u3002\u8FD9\u4E00\u6B65\u9AA4\u786E\u4FDD\u4E86\u4F60\u6709\u6B63\u786E\u7684\u5DE5\u5177\u6765\u521B\u5EFA\u548C\u7BA1\u7406Kubernetes\u96C6\u7FA4\u3002</p>
<h4 id="\u7B2C\u4E8C\u6B65\u521B\u5EFAkind\u96C6\u7FA4\u5E76\u914D\u7F6E">\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFAKind\u96C6\u7FA4\u5E76\u914D\u7F6E</h4>
<p>\u63A5\u4E0B\u6765\uFF0C\u521B\u5EFA\u4E00\u4E2AKind\u96C6\u7FA4\uFF0C\u7279\u522B\u914D\u7F6E\u4EE5\u652F\u6301Higress\u7684\u90E8\u7F72\u3002\u4F7F\u7528\u7279\u5B9A\u7684\u914D\u7F6E\u6587\u4EF6<code dir="auto">cluster.conf</code>\u6765\u521B\u5EFA\u96C6\u7FA4\uFF0C\u786E\u4FDD\u63A7\u5236\u5E73\u9762\u8282\u70B9\u5E26\u6709\u7279\u5B9A\u6807\u7B7E\u53CA\u7AEF\u53E3\u6620\u5C04\uFF0C\u4EE5\u4FBFHigress\u80FD\u591F\u6B63\u786E\u5730\u5904\u7406\u6D41\u91CF\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiServerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6443</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nodes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">control-plane</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kubeadmConfigPatches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">InitConfiguration</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nodeRegistration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kubeletExtraArgs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">node-labels</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ingress-ready=true"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">extraPortMappings</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiServerPort: 6443\x7F\x7Fnodes:\x7F\x7F- role: control-plane\x7F\x7FkubeadmConfigPatches:\x7F\x7F- |\x7F\x7Fkind: InitConfiguration\x7F\x7FnodeRegistration:\x7F\x7F  kubeletExtraArgs:\x7F\x7F    node-labels: &#x22;ingress-ready=true&#x22;\x7F\x7FextraPortMappings:\x7F\x7F- containerPort: 80\x7F\x7F  hostPort: 80\x7F\x7F  protocol: TCP\x7F\x7F- containerPort: 443\x7F\x7F  hostPort: 443\x7F\x7F  protocol: TCP"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u521B\u5EFA\u96C6\u7FA4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf\x7Fkubectl config use-context kind-higress"><div></div></button></div></figure></div>
<p>\u8FD9\u5C06\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u2019higress\u2019\u7684Kind\u96C6\u7FA4\uFF0C\u5E76\u914D\u7F6E\u597D\u5FC5\u8981\u7684\u7AEF\u53E3\u6620\u5C04\u3002</p>
<h3 id="\u90E8\u7F72higress">\u90E8\u7F72Higress</h3>
<h4 id="\u7B2C\u4E09\u6B65\u5B89\u88C5higress\u81F3kind\u96C6\u7FA4">\u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5Higress\u81F3Kind\u96C6\u7FA4</h4>
<p>\u4F7F\u7528Helm\u56FE\u8868\u6765\u5B89\u88C5Higress\u81F3\u96C6\u7FA4\u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF\u4EE5\u9002\u5E94\u672C\u5730\u90E8\u7F72\u573A\u666F\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false"><div></div></button></div></figure></div>
<p>\u6B64\u547D\u4EE4\u4E0D\u4EC5\u6DFB\u52A0\u4E86Higress\u7684Helm\u4ED3\u5E93\uFF0C\u8FD8\u5B89\u88C5\u4E86Higress\u81F3\u540D\u4E3A\u2019higress-system\u2019\u7684\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u5E76\u542F\u7528\u4E86\u9002\u5408\u672C\u5730\u73AF\u5883\u7684\u914D\u7F6E\u3002</p>
<h3 id="\u8BBF\u95EE\u4E0E\u9A8C\u8BC1">\u8BBF\u95EE\u4E0E\u9A8C\u8BC1</h3>
<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u7406\u8BBA\u4E0A\u4F60\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u672C\u5730\u768480\u548C443\u7AEF\u53E3\u8BBF\u95EEHigress Gateway\u3002\u4F46\u5982\u679C\u4F60\u53D1\u73B0\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u7AEF\u53E3\u6620\u5C04\u672A\u6B63\u786E\u5EFA\u7ACB\uFF0C\u6216\u8005\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u4E0D\u662FKind\u96C6\u7FA4\u800C\u662F\u5176\u4ED6\u672C\u5730K8s\u96C6\u7FA4\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u7AEF\u53E3\u8F6C\u53D1\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">80:80</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">443:443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6E\u8DEF\u7531">\u914D\u7F6E\u8DEF\u7531</h3>
<p>\u4E00\u65E6Higress\u6210\u529F\u90E8\u7F72\u4E14\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u4F60\u53EF\u4EE5\u5F00\u59CB\u914D\u7F6E\u8DEF\u7531\u4EE5\u6307\u5411\u4F60\u7684\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u4E3A\u540D\u4E3A<code dir="auto">foo</code>\u7684\u670D\u52A1\u521B\u5EFA\u8DEF\u7531\uFF0C\u4F7F\u5176\u53EF\u901A\u8FC7<code dir="auto">http://foo.bar.com/foo</code>\u8BBF\u95EE\u3002\u5982\u679C\u670D\u52A1\u5C1A\u672A\u90E8\u7F72\uFF0C\u53C2\u8003\u63D0\u4F9B\u7684YAML\u6A21\u677F\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u6D4B\u8BD5\u670D\u52A1\u3002</p>
<h3 id="\u603B\u7ED3">\u603B\u7ED3</h3>
<p>\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u5728Kind\u96C6\u7FA4\u4E0A\u5B8C\u6210Higress\u7684\u90E8\u7F72\uFF0C\u5E76\u4E3A\u96C6\u7FA4\u5185\u7684\u670D\u52A1\u914D\u7F6E\u8DEF\u7531\u3002\u8BF7\u6CE8\u610F\uFF0C\u5B9E\u9645\u90E8\u7F72\u65F6\u53EF\u80FD\u9700\u8981\u6839\u636E\u5177\u4F53\u60C5\u51B5\u8C03\u6574\u914D\u7F6E\u7EC6\u8282\uFF0C\u6BD4\u5982\u6839\u636E\u4F60\u7684\u7F51\u7EDC\u73AF\u5883\u8C03\u6574\u7AEF\u53E3\u6620\u5C04\u8BBE\u7F6E\u6216\u670D\u52A1\u53D1\u73B0\u673A\u5236\u3002Higress\u7684\u5B98\u65B9\u6587\u6863<a href="https://higress.cn/docs/latest/ops/deploy-by-helm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B89\u88C5\u90E8\u7F72</a>\u63D0\u4F9B\u4E86\u66F4\u591A\u9AD8\u7EA7\u914D\u7F6E\u548C\u6700\u4F73\u5B9E\u8DF5\u4FE1\u606F\uFF0C\u5EFA\u8BAE\u8FDB\u4E00\u6B65\u9605\u8BFB\u4EE5\u6EE1\u8DB3\u66F4\u590D\u6742\u7684\u9700\u6C42\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16994" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16991",title:"higress kind\u96C6\u7FA4\u90E8\u7F72\u8BE6\u89E3",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5173\u4E8E\u5728Kubernetes\uFF08K8s\uFF09\u4E2D\u4F7F\u7528Higress\u4EE5\u53CA\u5982\u4F55\u5728Kind\u96C6\u7FA4\u4E0A\u90E8\u7F72Higress\u7684\u8BE6\u7EC6\u6B65\u9AA4\u3002\u4EE5\u4E0B\u662F\u5BF9\u8FD9\u4E00\u8FC7\u7A0B\u7684\u8BE6\u7EC6\u89E3\u6790\u548C\u6307\u5BFC\uFF0C\u4F9D\u6258\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u3002### \u90E8\u7F72\u51C6\u5907\u4E0E\u73AF\u5883\u914D\u7F6E#### \u7B2C\u4E00\u6B65\uFF1A\u914D\u7F6E\u672C\u5730\u73AF\u5883\u4E0EKubernetes\u96C6\u7FA4\u786E\u4FDD\u4F60\u7684\u672C\u5730\u73AF\u5883\u5DF2\u51C6\u5907\u597DKub",tags:["higress","kind","\u96C6\u7FA4","\u90E8\u7F72","\u8BE6\u89E3"],keywords:["higress","kind","\u96C6\u7FA4","\u90E8\u7F72","\u8BE6\u89E3"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16991.md",i=void 0,d=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress kind\u96C6\u7FA4\u90E8\u7F72\u8BE6\u89E3  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5173\u4E8E\u5728Kubernetes\uFF08K8s\uFF09\u4E2D\u4F7F\u7528Higress\u4EE5\u53CA\u5982\u4F55\u5728Kind\u96C6\u7FA4\u4E0A\u90E8\u7F72Higress\u7684\u8BE6\u7EC6\u6B65\u9AA4\u3002\u4EE5\u4E0B\u662F\u5BF9\u8FD9\u4E00\u8FC7\u7A0B\u7684\u8BE6\u7EC6\u89E3\u6790\u548C\u6307\u5BFC\uFF0C\u4F9D\u6258\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u3002

### \u90E8\u7F72\u51C6\u5907\u4E0E\u73AF\u5883\u914D\u7F6E

#### \u7B2C\u4E00\u6B65\uFF1A\u914D\u7F6E\u672C\u5730\u73AF\u5883\u4E0EKubernetes\u96C6\u7FA4

\u786E\u4FDD\u4F60\u7684\u672C\u5730\u73AF\u5883\u5DF2\u51C6\u5907\u597DKubernetes\u76F8\u5173\u7684\u5DE5\u5177\uFF0C\u5982\`kubectl\`\u548C\`kind\`\u3002\u5BF9\u4E8EMac\u548CLinux\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC8\u7AEF\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u6216\u66F4\u65B0\u8FD9\u4E9B\u5DE5\u5177\uFF1A

\`\`\`shell
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-$(uname)-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/

curl -LO https://dl.k8s.io/release/v1.27.1/bin/darwin/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/
\`\`\`

\u5BF9\u4E8EWindows\u7CFB\u7EDF\uFF0C\u8BF7\u53C2\u7167\u76F8\u5E94\u547D\u4EE4\u6267\u884C\u3002\u8FD9\u4E00\u6B65\u9AA4\u786E\u4FDD\u4E86\u4F60\u6709\u6B63\u786E\u7684\u5DE5\u5177\u6765\u521B\u5EFA\u548C\u7BA1\u7406Kubernetes\u96C6\u7FA4\u3002

#### \u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFAKind\u96C6\u7FA4\u5E76\u914D\u7F6E

\u63A5\u4E0B\u6765\uFF0C\u521B\u5EFA\u4E00\u4E2AKind\u96C6\u7FA4\uFF0C\u7279\u522B\u914D\u7F6E\u4EE5\u652F\u6301Higress\u7684\u90E8\u7F72\u3002\u4F7F\u7528\u7279\u5B9A\u7684\u914D\u7F6E\u6587\u4EF6\`cluster.conf\`\u6765\u521B\u5EFA\u96C6\u7FA4\uFF0C\u786E\u4FDD\u63A7\u5236\u5E73\u9762\u8282\u70B9\u5E26\u6709\u7279\u5B9A\u6807\u7B7E\u53CA\u7AEF\u53E3\u6620\u5C04\uFF0C\u4EE5\u4FBFHigress\u80FD\u591F\u6B63\u786E\u5730\u5904\u7406\u6D41\u91CF\uFF1A

\`\`\`yaml
apiServerPort: 6443

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

\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u521B\u5EFA\u96C6\u7FA4\uFF1A

\`\`\`shell
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
\`\`\`

\u8FD9\u5C06\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A'higress'\u7684Kind\u96C6\u7FA4\uFF0C\u5E76\u914D\u7F6E\u597D\u5FC5\u8981\u7684\u7AEF\u53E3\u6620\u5C04\u3002

### \u90E8\u7F72Higress

#### \u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5Higress\u81F3Kind\u96C6\u7FA4

\u4F7F\u7528Helm\u56FE\u8868\u6765\u5B89\u88C5Higress\u81F3\u96C6\u7FA4\u4E2D\uFF0C\u5E76\u8BBE\u7F6E\u5168\u5C40\u53D8\u91CF\u4EE5\u9002\u5E94\u672C\u5730\u90E8\u7F72\u573A\u666F\uFF1A

\`\`\`shell
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
\`\`\`

\u6B64\u547D\u4EE4\u4E0D\u4EC5\u6DFB\u52A0\u4E86Higress\u7684Helm\u4ED3\u5E93\uFF0C\u8FD8\u5B89\u88C5\u4E86Higress\u81F3\u540D\u4E3A'higress-system'\u7684\u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u5E76\u542F\u7528\u4E86\u9002\u5408\u672C\u5730\u73AF\u5883\u7684\u914D\u7F6E\u3002

### \u8BBF\u95EE\u4E0E\u9A8C\u8BC1

\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u7406\u8BBA\u4E0A\u4F60\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u672C\u5730\u768480\u548C443\u7AEF\u53E3\u8BBF\u95EEHigress Gateway\u3002\u4F46\u5982\u679C\u4F60\u53D1\u73B0\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u7AEF\u53E3\u6620\u5C04\u672A\u6B63\u786E\u5EFA\u7ACB\uFF0C\u6216\u8005\u4F60\u6B63\u5728\u4F7F\u7528\u7684\u4E0D\u662FKind\u96C6\u7FA4\u800C\u662F\u5176\u4ED6\u672C\u5730K8s\u96C6\u7FA4\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u624B\u52A8\u6267\u884C\u7AEF\u53E3\u8F6C\u53D1\uFF1A

\`\`\`shell
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
\`\`\`

### \u914D\u7F6E\u8DEF\u7531

\u4E00\u65E6Higress\u6210\u529F\u90E8\u7F72\u4E14\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u4F60\u53EF\u4EE5\u5F00\u59CB\u914D\u7F6E\u8DEF\u7531\u4EE5\u6307\u5411\u4F60\u7684\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u4E3A\u540D\u4E3A\`foo\`\u7684\u670D\u52A1\u521B\u5EFA\u8DEF\u7531\uFF0C\u4F7F\u5176\u53EF\u901A\u8FC7\`http://foo.bar.com/foo\`\u8BBF\u95EE\u3002\u5982\u679C\u670D\u52A1\u5C1A\u672A\u90E8\u7F72\uFF0C\u53C2\u8003\u63D0\u4F9B\u7684YAML\u6A21\u677F\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u6D4B\u8BD5\u670D\u52A1\u3002

### \u603B\u7ED3

\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u5728Kind\u96C6\u7FA4\u4E0A\u5B8C\u6210Higress\u7684\u90E8\u7F72\uFF0C\u5E76\u4E3A\u96C6\u7FA4\u5185\u7684\u670D\u52A1\u914D\u7F6E\u8DEF\u7531\u3002\u8BF7\u6CE8\u610F\uFF0C\u5B9E\u9645\u90E8\u7F72\u65F6\u53EF\u80FD\u9700\u8981\u6839\u636E\u5177\u4F53\u60C5\u51B5\u8C03\u6574\u914D\u7F6E\u7EC6\u8282\uFF0C\u6BD4\u5982\u6839\u636E\u4F60\u7684\u7F51\u7EDC\u73AF\u5883\u8C03\u6574\u7AEF\u53E3\u6620\u5C04\u8BBE\u7F6E\u6216\u670D\u52A1\u53D1\u73B0\u673A\u5236\u3002Higress\u7684\u5B98\u65B9\u6587\u6863[\u5B89\u88C5\u90E8\u7F72](https://higress.cn/docs/latest/ops/deploy-by-helm/)\u63D0\u4F9B\u4E86\u66F4\u591A\u9AD8\u7EA7\u914D\u7F6E\u548C\u6700\u4F73\u5B9E\u8DF5\u4FE1\u606F\uFF0C\u5EFA\u8BAE\u8FDB\u4E00\u6B65\u9605\u8BFB\u4EE5\u6EE1\u8DB3\u66F4\u590D\u6742\u7684\u9700\u6C42\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16994)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return s},p=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u90E8\u7F72\u51C6\u5907\u4E0E\u73AF\u5883\u914D\u7F6E",text:"\u90E8\u7F72\u51C6\u5907\u4E0E\u73AF\u5883\u914D\u7F6E"},{depth:4,slug:"\u7B2C\u4E00\u6B65\u914D\u7F6E\u672C\u5730\u73AF\u5883\u4E0Ekubernetes\u96C6\u7FA4",text:"\u7B2C\u4E00\u6B65\uFF1A\u914D\u7F6E\u672C\u5730\u73AF\u5883\u4E0EKubernetes\u96C6\u7FA4"},{depth:4,slug:"\u7B2C\u4E8C\u6B65\u521B\u5EFAkind\u96C6\u7FA4\u5E76\u914D\u7F6E",text:"\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFAKind\u96C6\u7FA4\u5E76\u914D\u7F6E"},{depth:3,slug:"\u90E8\u7F72higress",text:"\u90E8\u7F72Higress"},{depth:4,slug:"\u7B2C\u4E09\u6B65\u5B89\u88C5higress\u81F3kind\u96C6\u7FA4",text:"\u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5Higress\u81F3Kind\u96C6\u7FA4"},{depth:3,slug:"\u8BBF\u95EE\u4E0E\u9A8C\u8BC1",text:"\u8BBF\u95EE\u4E0E\u9A8C\u8BC1"},{depth:3,slug:"\u914D\u7F6E\u8DEF\u7531",text:"\u914D\u7F6E\u8DEF\u7531"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=o((g,f,F)=>{const{layout:b,...t}=n;return t.file=a,t.url=i,r`${E()}${v(s)}`})});export{e as Content,u as __tla,l as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,d as rawContent,i as url};
