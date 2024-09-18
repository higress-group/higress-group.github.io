import{c as r,__tla as o}from"./astro-component.cI6d52vQ.js";import{r as c,m as h,u as E,__tla as g}from"./constant.Bv-WQ3AU.js";import{__tla as u}from"./astro/assets-service.Da9pL5MS.js";let e,l,n,a,d,p,t,y=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress kind\u96C6\u7FA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress higress kind\u96C6\u7FA4\u300D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728\u4F7F\u7528 Kind \u90E8\u7F72\u7684 Kubernetes \u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u914D\u7F6E Higress\u3002Kind \u662F\u4E00\u4E2A\u4F7F\u7528 Docker \u5BB9\u5668\u4F5C\u4E3A\u8282\u70B9\u6765\u8FD0\u884C\u591A\u8282\u70B9 Kubernetes \u96C6\u7FA4\u7684\u5DE5\u5177\uFF0C\u975E\u5E38\u9002\u5408\u672C\u5730\u5F00\u53D1\u548C\u6D4B\u8BD5\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u9488\u5BF9 Kind \u96C6\u7FA4\u90E8\u7F72 Higress \u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A</p>
<h3 id="\u73AF\u5883\u51C6\u5907kind-\u96C6\u7FA4\u7684\u521B\u5EFA\u4E0E\u914D\u7F6E">\u73AF\u5883\u51C6\u5907\uFF1AKind \u96C6\u7FA4\u7684\u521B\u5EFA\u4E0E\u914D\u7F6E</h3>
<h4 id="\u6B65\u9AA4-1\u5B89\u88C5-kubectl-\u548C-kind">\u6B65\u9AA4 1\uFF1A\u5B89\u88C5 kubectl \u548C Kind</h4>
<p>\u5BF9\u4E8E MacOS \u7528\u6237\uFF0C\u786E\u4FDD\u60A8\u5DF2\u7ECF\u5B89\u88C5\u4E86 Homebrew\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 kubectl \u548C Kind\u3002\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528\u4E86\u77E5\u8BC6\u4E2D\u63D0\u4F9B\u7684\u547D\u4EE4\uFF0C\u9488\u5BF9 Intel \u67B6\u6784\u7684 Mac\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5B89\u88C5 kubectl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin/</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5B89\u88C5 Kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin/</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl&#x22;\x7Fchmod +x ./kubectl\x7Fsudo mv ./kubectl /usr/local/bin/\x7Fcurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64\x7Fchmod +x ./kind\x7Fsudo mv ./kind /usr/local/bin/"><div></div></button></div></figure></div>
<h4 id="\u6B65\u9AA4-2\u521B\u5EFA-kind-\u96C6\u7FA4">\u6B65\u9AA4 2\uFF1A\u521B\u5EFA Kind \u96C6\u7FA4</h4>
<p>\u63A5\u4E0B\u6765\uFF0C\u4F7F\u7528 Kind \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Kubernetes \u96C6\u7FA4\u3002\u8FD9\u4E00\u6B65\u5047\u8BBE\u60A8\u5DF2\u7ECF\u6709\u4E86 Docker \u5E76\u4E14\u5B83\u662F\u6B63\u5728\u8FD0\u884C\u7684\u72B6\u6001\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster"><div></div></button></div></figure></div>
<h3 id="higress-\u5728-kind-\u96C6\u7FA4\u4E0A\u7684\u5B89\u88C5">Higress \u5728 Kind \u96C6\u7FA4\u4E0A\u7684\u5B89\u88C5</h3>
<h4 id="\u6B65\u9AA4-3\u6DFB\u52A0-helm-\u4ED3\u5E93\u5E76\u5B89\u88C5-higress">\u6B65\u9AA4 3\uFF1A\u6DFB\u52A0 Helm \u4ED3\u5E93\u5E76\u5B89\u88C5 Higress</h4>
<p>\u7531\u4E8E Kind \u96C6\u7FA4\u901A\u5E38\u7528\u4E8E\u672C\u5730\u5F00\u53D1\u6216\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u6807\u51C6\u7684 Helm \u4ED3\u5E93\u5B89\u88C5 Higress\uFF0C\u4F46\u8BF7\u786E\u4FDD\u60A8\u7684\u7F51\u7EDC\u73AF\u5883\u80FD\u591F\u8BBF\u95EE\u5916\u90E8\u4ED3\u5E93\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<h4 id="\u6B65\u9AA4-4\u9A8C\u8BC1-higress-\u5B89\u88C5">\u6B65\u9AA4 4\uFF1A\u9A8C\u8BC1 Higress \u5B89\u88C5</h4>
<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u68C0\u67E5 Higress Gateway \u670D\u52A1\u7684\u72B6\u6001\uFF0C\u5C3D\u7BA1\u5728 Kind \u73AF\u5883\u4E2D\uFF0C\u60A8\u53EF\u80FD\u4E0D\u4F1A\u83B7\u5F97\u4E00\u4E2A\u5916\u90E8 LoadBalancer IP\uFF0C\u56E0\u4E3A Kind \u4E0D\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684\u670D\u52A1\u66B4\u9732\u5230\u5916\u90E8\u7F51\u7EDC\u3002\u4F46\u662F\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u96C6\u7FA4\u5185\u90E8\u7684 IP \u8BBF\u95EE\u670D\u52A1\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc -n higress-system higress-gateway"><div></div></button></div></figure></div>
<h3 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h3>
<ul>
<li><strong>\u8BBF\u95EE Higress</strong>: \u5728 Kind \u73AF\u5883\u4E0B\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u901A\u8FC7 NodePort \u65B9\u5F0F\u6216\u8005 Port Forwarding \u6765\u8BBF\u95EE Higress Gateway \u670D\u52A1\u3002</li>
<li><strong>\u914D\u7F6E\u8C03\u6574</strong>: \u5982\u679C\u6709\u7279\u5B9A\u9700\u6C42\uFF0C\u6BD4\u5982\u60F3\u8981\u8BA9 Higress \u76D1\u542C\u7279\u5B9A\u7684\u4E3B\u673A\u7AEF\u53E3\uFF0C\u53EF\u4EE5\u53C2\u8003 Higress \u7684\u5B98\u65B9\u6587\u6863\u8FDB\u884C\u914D\u7F6E\u8C03\u6574\u3002</li>
<li><strong>\u8D44\u6E90\u6E05\u7406</strong>: \u5F53\u6D4B\u8BD5\u5B8C\u6BD5\u540E\uFF0C\u8BB0\u5F97\u4F7F\u7528 <code dir="auto">kind delete cluster</code> \u547D\u4EE4\u6E05\u7406\u60A8\u7684 Kind \u96C6\u7FA4\u3002</li>
</ul>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u6307\u5BFC\u4E86\u5982\u4F55\u5728 Kind \u96C6\u7FA4\u4E2D\u90E8\u7F72 Higress\uFF0C\u786E\u4FDD\u9075\u5FAA\u6BCF\u4E00\u6B65\u7684\u6307\u793A\u4EE5\u987A\u5229\u5B8C\u6210\u90E8\u7F72\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16993" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,a={id:"question-history-16990",title:"higress kind\u96C6\u7FA4",date:"2024-09-11",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress higress kind\u96C6\u7FA4\u300D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728\u4F7F\u7528 Kind \u90E8\u7F72\u7684 Kubernetes \u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u914D\u7F6E Higress\u3002Kind \u662F\u4E00\u4E2A\u4F7F\u7528 Docker \u5BB9\u5668\u4F5C\u4E3A\u8282\u70B9\u6765\u8FD0\u884C\u591A\u8282\u70B9 Kubernetes \u96C6\u7FA4\u7684\u5DE5\u5177\uFF0C\u975E\u5E38\u9002\u5408\u672C\u5730\u5F00\u53D1\u548C\u6D4B\u8BD5\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16990.md",t=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress kind\u96C6\u7FA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress higress kind\u96C6\u7FA4\u300D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u5728\u4F7F\u7528 Kind \u90E8\u7F72\u7684 Kubernetes \u96C6\u7FA4\u4E2D\u5B89\u88C5\u548C\u914D\u7F6E Higress\u3002Kind \u662F\u4E00\u4E2A\u4F7F\u7528 Docker \u5BB9\u5668\u4F5C\u4E3A\u8282\u70B9\u6765\u8FD0\u884C\u591A\u8282\u70B9 Kubernetes \u96C6\u7FA4\u7684\u5DE5\u5177\uFF0C\u975E\u5E38\u9002\u5408\u672C\u5730\u5F00\u53D1\u548C\u6D4B\u8BD5\u3002\u4EE5\u4E0B\u662F\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u9488\u5BF9 Kind \u96C6\u7FA4\u90E8\u7F72 Higress \u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A

### \u73AF\u5883\u51C6\u5907\uFF1AKind \u96C6\u7FA4\u7684\u521B\u5EFA\u4E0E\u914D\u7F6E

#### \u6B65\u9AA4 1\uFF1A\u5B89\u88C5 kubectl \u548C Kind

\u5BF9\u4E8E MacOS \u7528\u6237\uFF0C\u786E\u4FDD\u60A8\u5DF2\u7ECF\u5B89\u88C5\u4E86 Homebrew\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 kubectl \u548C Kind\u3002\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528\u4E86\u77E5\u8BC6\u4E2D\u63D0\u4F9B\u7684\u547D\u4EE4\uFF0C\u9488\u5BF9 Intel \u67B6\u6784\u7684 Mac\uFF1A

\`\`\`bash
# \u5B89\u88C5 kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/

# \u5B89\u88C5 Kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/
\`\`\`

#### \u6B65\u9AA4 2\uFF1A\u521B\u5EFA Kind \u96C6\u7FA4

\u63A5\u4E0B\u6765\uFF0C\u4F7F\u7528 Kind \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Kubernetes \u96C6\u7FA4\u3002\u8FD9\u4E00\u6B65\u5047\u8BBE\u60A8\u5DF2\u7ECF\u6709\u4E86 Docker \u5E76\u4E14\u5B83\u662F\u6B63\u5728\u8FD0\u884C\u7684\u72B6\u6001\u3002

\`\`\`bash
kind create cluster
\`\`\`

### Higress \u5728 Kind \u96C6\u7FA4\u4E0A\u7684\u5B89\u88C5

#### \u6B65\u9AA4 3\uFF1A\u6DFB\u52A0 Helm \u4ED3\u5E93\u5E76\u5B89\u88C5 Higress

\u7531\u4E8E Kind \u96C6\u7FA4\u901A\u5E38\u7528\u4E8E\u672C\u5730\u5F00\u53D1\u6216\u6D4B\u8BD5\uFF0C\u6211\u4EEC\u63A8\u8350\u4F7F\u7528\u6807\u51C6\u7684 Helm \u4ED3\u5E93\u5B89\u88C5 Higress\uFF0C\u4F46\u8BF7\u786E\u4FDD\u60A8\u7684\u7F51\u7EDC\u73AF\u5883\u80FD\u591F\u8BBF\u95EE\u5916\u90E8\u4ED3\u5E93\u3002

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
\`\`\`

#### \u6B65\u9AA4 4\uFF1A\u9A8C\u8BC1 Higress \u5B89\u88C5

\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u68C0\u67E5 Higress Gateway \u670D\u52A1\u7684\u72B6\u6001\uFF0C\u5C3D\u7BA1\u5728 Kind \u73AF\u5883\u4E2D\uFF0C\u60A8\u53EF\u80FD\u4E0D\u4F1A\u83B7\u5F97\u4E00\u4E2A\u5916\u90E8 LoadBalancer IP\uFF0C\u56E0\u4E3A Kind \u4E0D\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684\u670D\u52A1\u66B4\u9732\u5230\u5916\u90E8\u7F51\u7EDC\u3002\u4F46\u662F\uFF0C\u60A8\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u96C6\u7FA4\u5185\u90E8\u7684 IP \u8BBF\u95EE\u670D\u52A1\u3002

\`\`\`bash
kubectl get svc -n higress-system higress-gateway
\`\`\`

### \u6CE8\u610F\u4E8B\u9879

- **\u8BBF\u95EE Higress**: \u5728 Kind \u73AF\u5883\u4E0B\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u901A\u8FC7 NodePort \u65B9\u5F0F\u6216\u8005 Port Forwarding \u6765\u8BBF\u95EE Higress Gateway \u670D\u52A1\u3002
- **\u914D\u7F6E\u8C03\u6574**: \u5982\u679C\u6709\u7279\u5B9A\u9700\u6C42\uFF0C\u6BD4\u5982\u60F3\u8981\u8BA9 Higress \u76D1\u542C\u7279\u5B9A\u7684\u4E3B\u673A\u7AEF\u53E3\uFF0C\u53EF\u4EE5\u53C2\u8003 Higress \u7684\u5B98\u65B9\u6587\u6863\u8FDB\u884C\u914D\u7F6E\u8C03\u6574\u3002
- **\u8D44\u6E90\u6E05\u7406**: \u5F53\u6D4B\u8BD5\u5B8C\u6BD5\u540E\uFF0C\u8BB0\u5F97\u4F7F\u7528 \`kind delete cluster\` \u547D\u4EE4\u6E05\u7406\u60A8\u7684 Kind \u96C6\u7FA4\u3002

\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u6307\u5BFC\u4E86\u5982\u4F55\u5728 Kind \u96C6\u7FA4\u4E2D\u90E8\u7F72 Higress\uFF0C\u786E\u4FDD\u9075\u5FAA\u6BCF\u4E00\u6B65\u7684\u6307\u793A\u4EE5\u987A\u5229\u5B8C\u6210\u90E8\u7F72\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16993)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return s},d=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u73AF\u5883\u51C6\u5907kind-\u96C6\u7FA4\u7684\u521B\u5EFA\u4E0E\u914D\u7F6E",text:"\u73AF\u5883\u51C6\u5907\uFF1AKind \u96C6\u7FA4\u7684\u521B\u5EFA\u4E0E\u914D\u7F6E"},{depth:4,slug:"\u6B65\u9AA4-1\u5B89\u88C5-kubectl-\u548C-kind",text:"\u6B65\u9AA4 1\uFF1A\u5B89\u88C5 kubectl \u548C Kind"},{depth:4,slug:"\u6B65\u9AA4-2\u521B\u5EFA-kind-\u96C6\u7FA4",text:"\u6B65\u9AA4 2\uFF1A\u521B\u5EFA Kind \u96C6\u7FA4"},{depth:3,slug:"higress-\u5728-kind-\u96C6\u7FA4\u4E0A\u7684\u5B89\u88C5",text:"Higress \u5728 Kind \u96C6\u7FA4\u4E0A\u7684\u5B89\u88C5"},{depth:4,slug:"\u6B65\u9AA4-3\u6DFB\u52A0-helm-\u4ED3\u5E93\u5E76\u5B89\u88C5-higress",text:"\u6B65\u9AA4 3\uFF1A\u6DFB\u52A0 Helm \u4ED3\u5E93\u5E76\u5B89\u88C5 Higress"},{depth:4,slug:"\u6B65\u9AA4-4\u9A8C\u8BC1-higress-\u5B89\u88C5",text:"\u6B65\u9AA4 4\uFF1A\u9A8C\u8BC1 Higress \u5B89\u88C5"},{depth:3,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=r((F,v,b)=>{const{layout:k,...i}=a;return i.file=n,i.url=t,c`${h()}${E(s)}`})});export{e as Content,y as __tla,l as compiledContent,e as default,n as file,a as frontmatter,d as getHeadings,p as rawContent,t as url};
