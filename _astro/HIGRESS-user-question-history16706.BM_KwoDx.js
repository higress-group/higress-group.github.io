import{c as l,__tla as c}from"./astro-component.BNo6A4i3.js";import{r as p,m as g,u as h,__tla as u}from"./constant.BusZ7hZv.js";import{__tla as f}from"./astro/assets-service.lesyujvn.js";let s,o,i,t,n,d,r,v=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u7684\u542F\u52A8\u547D\u4EE4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u5728 Higress \u7684\u542F\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u4E3B\u8981\u6D89\u53CA\u5230\u4E86\u5728\u5176 Kubernetes (K8s) \u96C6\u7FA4\u4E0A\u7684\u90E8\u7F72\u3002\u6839\u636E\u63D0\u4F9B\u7684 \u6211\u4E86\u89E3\u7684\u77E5\u8BC6, \u542F\u52A8 Higress \u7684\u547D\u4EE4\u4F9D\u8D56\u4E8E\u4F60\u7684\u73AF\u5883\uFF0C\u5177\u4F53\u5206\u4E3A\u4E24\u4E2A\u4E3B\u8981\u573A\u666F\uFF1A\u6807\u51C6 K8s \u96C6\u7FA4\u548C\u672C\u5730 K8s \u73AF\u5883\uFF08\u5982\u4F7F\u7528 kind\uFF09\u3002\u4E0B\u9762\u662F\u542F\u52A8 Higress \u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A</p>
<h3 id="\u6807\u51C6-k8s-\u96C6\u7FA4\u4E2D\u542F\u52A8-higress">\u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u542F\u52A8 Higress</h3>
<ol>
<li>
<p><strong>\u6DFB\u52A0 Helm \u4ED3\u5E93</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">helm repo add higress.io https://higress.io/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts"><div></div></button></div></figure></div>
<p>\u6216\u5BF9\u4E8E\u4E2D\u56FD\u5927\u9646\u7528\u6237\u52A0\u901F\u5B89\u88C5\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">helm repo add higress.cn https://higress.cn/helm-charts</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.cn https://higress.cn/helm-charts"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5B89\u88C5 Higress</strong>
\u4F7F\u7528 Helm \u5B89\u88C5 Higress \u5230\u540D\u4E3A <code dir="auto">higress-system</code> \u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5E76\u6E32\u67D3\u5B50\u56FE\u8868\u6CE8\u91CA\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">helm upgrade --install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade --install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<p>\u6216\u4F7F\u7528\u4E2D\u56FD\u955C\u50CF\u6E90\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">helm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u83B7\u53D6 LoadBalancer IP</strong>
\u5982\u679C\u4F60\u7684\u96C6\u7FA4\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684\u670D\u52A1\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u83B7\u53D6 Higress Gateway \u7684\u5916\u90E8\u8BBF\u95EE IP\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc -n higress-system higress-gateway -o jsonpath=&#x27;{.status.loadBalancer.ingress[0].ip}&#x27;"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="\u672C\u5730-k8s-\u73AF\u5883\u4F7F\u7528-kind\u4E2D\u542F\u52A8-higress">\u672C\u5730 K8s \u73AF\u5883\uFF08\u4F7F\u7528 kind\uFF09\u4E2D\u542F\u52A8 Higress</h3>
<ol>
<li>
<p><strong>\u5B89\u88C5 kubectl \u548C kind</strong>
\u5728 MacOS \u4E0A\uFF0C\u9488\u5BF9 Intel \u82AF\u7247\u7684\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl&#x22;\x7Fcurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF1A\u8BF7\u6839\u636E\u4F60\u7684\u7CFB\u7EDF\u67B6\u6784\u548C kind \u7684\u6700\u65B0\u7248\u672C\u8C03\u6574\u4E0B\u8F7D\u94FE\u63A5\u3002</p>
</li>
<li>
<p><strong>\u914D\u7F6E\u5E76\u521B\u5EFA kind \u96C6\u7FA4</strong>\uFF08\u8FD9\u4E00\u6B65\u672A\u76F4\u63A5\u63D0\u4F9B\u547D\u4EE4\uFF0C\u4F46\u5047\u8BBE\u4F60\u5DF2\u6709\u6216\u80FD\u521B\u5EFA\u4E00\u4E2A kind \u96C6\u7FA4\uFF09</p>
</li>
<li>
<p><strong>\u7EE7\u7EED\u6309\u7167\u6807\u51C6 K8s \u96C6\u7FA4\u7684\u6B65\u9AA4\u4ECE\u6DFB\u52A0 Helm \u4ED3\u5E93\u5F00\u59CB\u5B89\u88C5 Higress</strong></p>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<ul>
<li><strong>Helm</strong> \u662F\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u7528\u4E8E Kubernetes \u5E94\u7528\u7684\u5B89\u88C5\u548C\u7BA1\u7406\u3002\u901A\u8FC7 Helm \u6DFB\u52A0\u4ED3\u5E93\u5E76\u5B89\u88C5 Higress\uFF0C\u7B80\u5316\u4E86\u90E8\u7F72\u8FC7\u7A0B\u3002</li>
<li><strong>LoadBalancer IP</strong> \u7684\u83B7\u53D6\u662F\u4E3A\u4E86\u5916\u90E8\u80FD\u591F\u8BBF\u95EE\u90E8\u7F72\u5728\u96C6\u7FA4\u5185\u7684 Higress Gateway\u3002\u5982\u679C\u5B9E\u9645\u73AF\u5883\u4E2D\u65E0\u6CD5\u76F4\u63A5\u83B7\u53D6 LoadBalancer IP\uFF0C\u63D0\u4F9B\u4E86\u51E0\u79CD\u5907\u9009\u65B9\u6848\uFF0C\u786E\u4FDD\u670D\u52A1\u7684\u53EF\u8BBF\u95EE\u6027\u3002</li>
<li>\u5BF9\u4E8E\u672C\u5730\u5F00\u53D1\u6216\u6D4B\u8BD5\uFF0C\u4F7F\u7528 <strong>kind</strong> \u521B\u5EFA\u8F7B\u91CF\u7EA7\u7684 K8s \u96C6\u7FA4\uFF0C\u4FBF\u4E8E\u5728\u672C\u5730\u6A21\u62DF\u4E91\u7AEF\u73AF\u5883\u8FDB\u884C\u5FEB\u901F\u8FED\u4EE3\u548C\u6D4B\u8BD5\u3002</li>
</ul>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u6307\u5BFC\u4E86\u5982\u4F55\u5728\u4E0D\u540C\u73AF\u5883\u4E0B\u542F\u52A8 Higress\uFF0C\u786E\u4FDD\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u90E8\u7F72\u65B9\u5F0F\u3002</p>
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
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16720" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16706",title:"higress\u7684\u542F\u52A8\u547D\u4EE4",date:"2024-09-26",category:"expertConsultation",description:"\u5728 Higress \u7684\u542F\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u4E3B\u8981\u6D89\u53CA\u5230\u4E86\u5728\u5176 Kubernetes (K8s) \u96C6\u7FA4\u4E0A\u7684\u90E8\u7F72\u3002\u6839\u636E\u63D0\u4F9B\u7684 \u6211\u4E86\u89E3\u7684\u77E5\u8BC6, \u542F\u52A8 Higress \u7684\u547D\u4EE4\u4F9D\u8D56\u4E8E\u4F60\u7684\u73AF\u5883\uFF0C\u5177\u4F53\u5206\u4E3A\u4E24\u4E2A\u4E3B\u8981\u573A\u666F\uFF1A\u6807\u51C6 K8s \u96C6\u7FA4\u548C\u672C\u5730 K8s \u73AF\u5883\uFF08\u5982\u4F7F\u7528 kind\uFF09\u3002\u4E0B\u9762\u662F\u542F\u52A8 Higress \u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A###",tags:["higress","\u542F\u52A8","\u547D\u4EE4"],keywords:["higress","\u542F\u52A8","\u547D\u4EE4"]},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16706.md",r=void 0,d=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u7684\u542F\u52A8\u547D\u4EE4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u5728 Higress \u7684\u542F\u52A8\u8FC7\u7A0B\u4E2D\uFF0C\u4E3B\u8981\u6D89\u53CA\u5230\u4E86\u5728\u5176 Kubernetes (K8s) \u96C6\u7FA4\u4E0A\u7684\u90E8\u7F72\u3002\u6839\u636E\u63D0\u4F9B\u7684 \u6211\u4E86\u89E3\u7684\u77E5\u8BC6, \u542F\u52A8 Higress \u7684\u547D\u4EE4\u4F9D\u8D56\u4E8E\u4F60\u7684\u73AF\u5883\uFF0C\u5177\u4F53\u5206\u4E3A\u4E24\u4E2A\u4E3B\u8981\u573A\u666F\uFF1A\u6807\u51C6 K8s \u96C6\u7FA4\u548C\u672C\u5730 K8s \u73AF\u5883\uFF08\u5982\u4F7F\u7528 kind\uFF09\u3002\u4E0B\u9762\u662F\u542F\u52A8 Higress \u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A

### \u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u542F\u52A8 Higress

1. **\u6DFB\u52A0 Helm \u4ED3\u5E93**
   \`\`\`plain
   helm repo add higress.io https://higress.io/helm-charts
   \`\`\`
   \u6216\u5BF9\u4E8E\u4E2D\u56FD\u5927\u9646\u7528\u6237\u52A0\u901F\u5B89\u88C5\uFF1A
   \`\`\`plain
   helm repo add higress.cn https://higress.cn/helm-charts
   \`\`\`

2. **\u5B89\u88C5 Higress**
   \u4F7F\u7528 Helm \u5B89\u88C5 Higress \u5230\u540D\u4E3A \`higress-system\` \u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5E76\u6E32\u67D3\u5B50\u56FE\u8868\u6CE8\u91CA\uFF1A
   \`\`\`plain
   helm upgrade --install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
   \`\`\`
   \u6216\u4F7F\u7528\u4E2D\u56FD\u955C\u50CF\u6E90\uFF1A
   \`\`\`plain
   helm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes
   \`\`\`

3. **\u83B7\u53D6 LoadBalancer IP**
   \u5982\u679C\u4F60\u7684\u96C6\u7FA4\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684\u670D\u52A1\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u83B7\u53D6 Higress Gateway \u7684\u5916\u90E8\u8BBF\u95EE IP\uFF1A
   \`\`\`plain
   kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
   \`\`\`

### \u672C\u5730 K8s \u73AF\u5883\uFF08\u4F7F\u7528 kind\uFF09\u4E2D\u542F\u52A8 Higress

1. **\u5B89\u88C5 kubectl \u548C kind**
   \u5728 MacOS \u4E0A\uFF0C\u9488\u5BF9 Intel \u82AF\u7247\u7684\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A
   \`\`\`plain
   curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
   curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
   \`\`\`
   \u6CE8\u610F\uFF1A\u8BF7\u6839\u636E\u4F60\u7684\u7CFB\u7EDF\u67B6\u6784\u548C kind \u7684\u6700\u65B0\u7248\u672C\u8C03\u6574\u4E0B\u8F7D\u94FE\u63A5\u3002

2. **\u914D\u7F6E\u5E76\u521B\u5EFA kind \u96C6\u7FA4**\uFF08\u8FD9\u4E00\u6B65\u672A\u76F4\u63A5\u63D0\u4F9B\u547D\u4EE4\uFF0C\u4F46\u5047\u8BBE\u4F60\u5DF2\u6709\u6216\u80FD\u521B\u5EFA\u4E00\u4E2A kind \u96C6\u7FA4\uFF09
   
3. **\u7EE7\u7EED\u6309\u7167\u6807\u51C6 K8s \u96C6\u7FA4\u7684\u6B65\u9AA4\u4ECE\u6DFB\u52A0 Helm \u4ED3\u5E93\u5F00\u59CB\u5B89\u88C5 Higress**

### \u89E3\u91CA
- **Helm** \u662F\u4E00\u4E2A\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u7528\u4E8E Kubernetes \u5E94\u7528\u7684\u5B89\u88C5\u548C\u7BA1\u7406\u3002\u901A\u8FC7 Helm \u6DFB\u52A0\u4ED3\u5E93\u5E76\u5B89\u88C5 Higress\uFF0C\u7B80\u5316\u4E86\u90E8\u7F72\u8FC7\u7A0B\u3002
- **LoadBalancer IP** \u7684\u83B7\u53D6\u662F\u4E3A\u4E86\u5916\u90E8\u80FD\u591F\u8BBF\u95EE\u90E8\u7F72\u5728\u96C6\u7FA4\u5185\u7684 Higress Gateway\u3002\u5982\u679C\u5B9E\u9645\u73AF\u5883\u4E2D\u65E0\u6CD5\u76F4\u63A5\u83B7\u53D6 LoadBalancer IP\uFF0C\u63D0\u4F9B\u4E86\u51E0\u79CD\u5907\u9009\u65B9\u6848\uFF0C\u786E\u4FDD\u670D\u52A1\u7684\u53EF\u8BBF\u95EE\u6027\u3002
- \u5BF9\u4E8E\u672C\u5730\u5F00\u53D1\u6216\u6D4B\u8BD5\uFF0C\u4F7F\u7528 **kind** \u521B\u5EFA\u8F7B\u91CF\u7EA7\u7684 K8s \u96C6\u7FA4\uFF0C\u4FBF\u4E8E\u5728\u672C\u5730\u6A21\u62DF\u4E91\u7AEF\u73AF\u5883\u8FDB\u884C\u5FEB\u901F\u8FED\u4EE3\u548C\u6D4B\u8BD5\u3002

\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u6307\u5BFC\u4E86\u5982\u4F55\u5728\u4E0D\u540C\u73AF\u5883\u4E0B\u542F\u52A8 Higress\uFF0C\u786E\u4FDD\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684\u90E8\u7F72\u65B9\u5F0F\u3002


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
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16720)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},o=function(){return e},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u6807\u51C6-k8s-\u96C6\u7FA4\u4E2D\u542F\u52A8-higress",text:"\u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u542F\u52A8 Higress"},{depth:3,slug:"\u672C\u5730-k8s-\u73AF\u5883\u4F7F\u7528-kind\u4E2D\u542F\u52A8-higress",text:"\u672C\u5730 K8s \u73AF\u5883\uFF08\u4F7F\u7528 kind\uFF09\u4E2D\u542F\u52A8 Higress"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=l((m,b,k)=>{const{layout:y,...a}=t;return a.file=i,a.url=r,p`${g()}${h(e)}`})});export{s as Content,v as __tla,o as compiledContent,s as default,i as file,t as frontmatter,n as getHeadings,d as rawContent,r as url};
