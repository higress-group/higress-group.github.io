import{c,__tla as i}from"./astro-component.YcfuVWta.js";import{r as a,m as y,u as b,__tla as d}from"./constant.Cx6UCuye.js";import{__tla as p}from"./astro/assets-service.r1ocst81.js";let t,l,n,s,f,g,r,v=Promise.all([(()=>{try{return i}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return p}catch{}})()]).then(async()=>{let o;o=`<p>\u4F5C\u8005\uFF1A\u6F84\u6F6D</p>
<p><font style="color:rgba(0, 0, 0, 0.9);">\u7F16\u8005\u6309\uFF1AIngress NGINX \u9000\u5F79\u5F15\u53D1\u5F00\u53D1\u8005\u4EEC\u7684\u5F3A\u70C8\u5173\u6CE8\uFF0C</font><a href="https://higress.cn/blog/higress-gvr7dx_awbbpb_glwn7aov9cvqg8gx/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300A\u9057\u61BE\uFF0CIngress NGINX \u8981\u9000\u5F79\u4E86\u300B</a><font style="color:rgba(0, 0, 0, 0.9);">\u516C\u4F17\u53F7\u9605\u8BFB\u91CF\u8D85\u8FC72w\u3002</font></p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01JlSMU02267IB3Phci_!!6000000007070-2-tps-588-116.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgba(0, 0, 0, 0.9);">\u5B98\u65B9\u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5B8C\u5907\u7684\u5E94\u5BF9\u63AA\u65BD\uFF0C\u8FC1\u79FB\u5230 Gateway API\uFF0C\u4EE5\u53CA20+ Ingress \u63A7\u5236\u5668\u3002\u4F46\u5B9E\u65BD\u8FC1\u79FB\u7684\u65F6\u5019\uFF0C\u4F01\u4E1A\u8FD8\u4F1A\u5E0C\u671B\u4E86\u89E3\u65B0\u7684 Ingress \u63A7\u5236\u5668\u662F\u5426\u517C\u5BB9 Ingress NGINX \u7684\u6CE8\u89E3\uFF0C\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u5982\u4F55\u8FDB\u884C\u7070\u5EA6\u5207\u6D41\uFF0C\u9047\u5230\u6D41\u91CF\u635F\u5931\u5982\u4F55\u5FEB\u901F\u56DE\u6EDA\u7B49\uFF0C\u4EE5\u4FDD\u969C\u8FC1\u79FB\u8FC7\u7A0B\u5E73\u6ED1\uFF0C\u4E0D\u5F71\u54CD\u7EBF\u4E0A\u4E1A\u52A1\u3002</font></p>
<p><font style="color:rgba(0, 0, 0, 0.9);">\u56E0\u6B64\uFF0C\u672C\u6587\u5C06\u63D0\u4F9B\u57FA\u4E8E\u5B9E\u64CD\u7684\u5E94\u5BF9\u65B9\u6848\uFF0C\u4EE5\u963F\u91CC\u4E91\u4E91\u539F\u751F API \u7F51\u5173(Higress \u4F01\u4E1A\u7248)\u4E3A\u4F8B\uFF0C\u6309\u6B65\u9AA4\u8BE6\u7EC6\u9610\u8FF0\u8FC1\u79FB\u7684\u64CD\u4F5C\u8FC7\u7A0B\u3002</font><strong><font style="color:rgb(122, 152, 228);"></font></strong></p>
<h2 id="\u6982\u8FF0"><font style="color:rgb(27, 28, 29);">\u6982\u8FF0</font></h2>
<p><font style="color:rgb(27, 28, 29);">\u968F\u7740 Nginx Ingress \u9010\u6B65\u505C\u6B62\u7EF4\u62A4\uFF0C\u7528\u6237\u9700\u8981\u5C06\u5176\u8FC1\u79FB\u81F3\u65B0\u7684\u7F51\u5173\u65B9\u6848\u3002\u4E91\u539F\u751F API \u7F51\u5173\u662F\u963F\u91CC\u4E91 API \u7F51\u5173\u7684\u5B50\u4EA7\u54C1\uFF0C\u7EDF\u4E00\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u548C\u5B89\u5168\u7F51\u5173 \uFF0C\u4E3A Nginx Ingress \u7528\u6237\u63D0\u4F9B\u4E86\u5E73\u6ED1\u7684\u8FC1\u79FB\u8DEF\u5F84\u548C\u5F3A\u5927\u7684\u529F\u80FD\u5347\u7EA7\u3002</font></p>
<p><font style="color:rgb(27, 28, 29);">\u4E91\u539F\u751F API \u7F51\u5173\u63D0\u4F9B\u4E24\u79CD\u6838\u5FC3\u914D\u7F6E\u6A21\u5F0F\uFF0C\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u7BA1\u7406\u9700\u6C42\u548C\u4F7F\u7528\u573A\u666F\uFF1A</font></p>
<ol>
<li><strong><font style="color:rgb(27, 28, 29);">\u76D1\u542C K8s Ingress\uFF08Ingress \u6A21\u5F0F\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u7F51\u5173\u4F5C\u4E3A APIG Ingress Controller \u8FD0\u884C\uFF0C\u517C\u5BB9 K8s Ingress \u8D44\u6E90\u53CA </font><a href="https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nginx Ingress \u6CE8\u89E3</a><font style="color:rgb(27, 28, 29);">\uFF0C\u9002\u7528\u4E8E\u5E0C\u671B\u4FDD\u6301 K8s \u539F\u751F\u5DE5\u4F5C\u6D41\uFF08\u5982 GitOps\uFF09\u7684\u56E2\u961F \u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u63A7\u5236\u53F0\u914D\u7F6E API\uFF08API \u7BA1\u7406\u6A21\u5F0F\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u901A\u8FC7\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u6216 API \u8FDB\u884C\u914D\u7F6E\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684 API \u751F\u547D\u5468\u671F\u7BA1\u7406\u3001\u9AD8\u7EA7\u5B89\u5168\u7B56\u7565\u548C API \u8FD0\u8425\u80FD\u529B\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u96C6\u4E2D\u6CBB\u7406\u548C\u7CBE\u7EC6\u5316\u7BA1\u7406\u7684\u573A\u666F \u3002</font></li>
</ol>
<p><font style="color:rgb(27, 28, 29);">\u672C\u6587\u6863\u5C06\u8BE6\u7EC6\u5BF9\u6BD4\u8FD9\u4E24\u79CD\u6A21\u5F0F\u7684\u529F\u80FD\u3001\u4F18\u52BF\u53CA\u9002\u7528\u573A\u666F\uFF0C\u4EE5\u5E2E\u52A9\u60A8\u9009\u62E9\u6700\u9002\u5408\u7684\u914D\u7F6E\u8DEF\u5F84\u3002</font></p>
<h2 id="\u6A21\u5F0F\u4E00\u76D1\u542C-k8s-ingressingress-\u6A21\u5F0F"><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF1A\u76D1\u542C K8s Ingress\uFF08Ingress \u6A21\u5F0F\uFF09</font></h2>
<p><font style="color:rgb(27, 28, 29);">\u6B64\u6A21\u5F0F\u5C06\u4E91\u539F\u751F API \u7F51\u5173\u90E8\u7F72\u4E3A Kubernetes \u96C6\u7FA4\u7684 Ingress Controller\uFF0C\u7528\u4E8E\u7BA1\u7406\u96C6\u7FA4\u7684\u5357\u5317\u5411\u6D41\u91CF\u3002</font></p>
<h3 id="11-\u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F"><font style="color:rgb(27, 28, 29);">1.1 \u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F</font></h3>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u5E73\u6ED1\u8FC1\u79FB</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u4E3A Nginx Ingress \u7528\u6237\u63D0\u4F9B</font><a href="https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/migrating-from-nginx-ingress-to-cloud-native-api-gateway" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E00\u952E\u5F0F\u8FC1\u79FB\u5DE5\u5177</a><font style="color:rgb(27, 28, 29);">\uFF0C\u6700\u5927\u7A0B\u5EA6\u964D\u4F4E\u8FC1\u79FB\u6210\u672C\u548C\u4E1A\u52A1\u4E2D\u65AD\u98CE\u9669\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u4FDD\u6301 K8s \u539F\u751F\u5DE5\u4F5C\u6D41</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u5B8C\u5168\u517C\u5BB9 K8s Ingress \u8D44\u6E90\u548C\u6CE8\u89E3\uFF0C\u56E2\u961F\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">kubectl apply&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u3001GitOps\u7B49\u73B0\u6709\u5DE5\u4F5C\u6D41\u6765\u7BA1\u7406\u8DEF\u7531\u89C4\u5219\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u529F\u80FD\u589E\u5F3A</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u5728\u517C\u5BB9 Nginx Ingress \u7684\u57FA\u7840\u4E0A\uFF0C\u63D0\u4F9B\u4E86\u66F4\u5F3A\u5927\u7684\u6CBB\u7406\u80FD\u529B\uFF0C\u5982</font><a href="https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress?spm=a2c4g.11186623.help-menu-29462.d_2_10_2.13d16ab7JSrjZM#862f08d03d4d3" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u9650\u6D41</a><font style="color:rgb(27, 28, 29);">\u7B49\u3002</font></li>
</ul>
<p><strong><font style="color:rgb(27, 28, 29);">\u9002\u7528\u573A\u666F</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font></p>
<ul>
<li><font style="color:rgb(27, 28, 29);">Nginx Ingress \u7684\u5B58\u91CF\u7528\u6237\u8FC1\u79FB\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u4EE5 K8s \u4E3A\u4E2D\u5FC3\u3001\u4F9D\u8D56 GitOps \u6D41\u7A0B\u7BA1\u7406\u5E94\u7528\u53D1\u5E03\u7684\u56E2\u961F\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u9700\u8981\u5FEB\u901F\u5B9E\u73B0\u96C6\u7FA4\u6D41\u91CF\u8DEF\u7531\u548C\u57FA\u7840\u6CBB\u7406\u7684\u5F00\u53D1\u8FD0\u7EF4\u56E2\u961F\u3002</font></li>
</ul>
<h3 id="12-\u529F\u80FD\u8BE6\u60C5"><font style="color:rgb(27, 28, 29);">1.2 \u529F\u80FD\u8BE6\u60C5</font></h3>
<blockquote>
<p>APIG Ingress Controller \u652F\u6301\u7684\u5B8C\u6574 Ingress \u80FD\u529B\u8BF7\u53C2\u8003\uFF1A</p>
<ol>
<li><a href="https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300AAPIG Ingress\u652F\u6301\u7684Annotation\u300B</a></li>
<li><a href="https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300AAPIG Ingress\u9AD8\u7EA7\u7528\u6CD5\u300B</a></li>
</ol>
</blockquote>
<h4 id="121-\u9AD8\u5EA6\u517C\u5BB9-nginx-ingress-\u6CE8\u89E3"><font style="color:rgb(27, 28, 29);">1.2.1 \u9AD8\u5EA6\u517C\u5BB9 Nginx Ingress \u6CE8\u89E3</font></h4>
<p><font style="color:rgb(27, 28, 29);">APIG Ingress\uFF08\u4E91\u539F\u751F API \u7F51\u5173\u7684 Ingress Controller\uFF09\u652F\u6301\u7EDD\u5927\u591A\u6570 Nginx Ingress \u6CE8\u89E3\uFF08\u636E\u7EDF\u8BA1\u652F\u630151\u79CD\uFF0C\u8986\u76D690%\u7684\u7528\u6237\u573A\u666F\uFF09\u3002\u8FD9\u610F\u5473\u7740\u73B0\u6709\u7684 K8s Ingress YAML \u6587\u4EF6\u65E0\u9700\u5927\u91CF\u4FEE\u6539\u5373\u53EF\u8FC1\u79FB\u3002</font></p>
<p><strong><font style="color:rgb(27, 28, 29);">\u5173\u952E\u517C\u5BB9\u6CE8\u89E3\u793A\u4F8B</font></strong><sup><font style="color:rgb(68, 71, 70);"></font></sup><font style="color:rgb(27, 28, 29);">\uFF1A</font></p>





























<table><thead><tr><th><strong><font style="color:rgb(27, 28, 29);">\u529F\u80FD\u7C7B\u522B</font></strong></th><th><strong><font style="color:rgb(27, 28, 29);">\u517C\u5BB9\u7684 Nginx \u6CE8\u89E3 (nginx.ingress.kubernetes.io/)</font></strong></th></tr></thead><tbody><tr><td><strong><font style="color:rgb(27, 28, 29);">\u8DEF\u7531\u4E0E\u91CD\u5199</font></strong></td><td><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">rewrite-target&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">use-regex&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">upstream-vhost&#x3C;/font></code></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u6D41\u91CF\u5207\u5206</font></strong></td><td><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">canary&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">canary-by-header&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">canary-weight&#x3C;/font></code></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u5B89\u5168\u4E0E\u8DE8\u57DF</font></strong></td><td><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">enable-cors&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">cors-allow-methods&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">ssl-redirect&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">force-ssl-redirect&#x3C;/font></code></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u8D85\u65F6\u4E0E\u91CD\u8BD5</font></strong></td><td><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">proxy-next-upstream&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">proxy-next-upstream-tries&#x3C;/font></code></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">IP \u8BBF\u95EE\u63A7\u5236</font></strong></td><td><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">whitelist-source-range&#x3C;/font></code></td></tr></tbody></table>
<h4 id="122-\u72EC\u6709\u7684\u529F\u80FD\u589E\u5F3A-higress-\u6CE8\u89E3"><font style="color:rgb(27, 28, 29);">1.2.2 \u72EC\u6709\u7684\u529F\u80FD\u589E\u5F3A (Higress \u6CE8\u89E3)</font></h4>
<p><font style="color:rgb(27, 28, 29);">\u6B64\u6A21\u5F0F\u4E0D\u4EC5\u517C\u5BB9 Nginx\uFF0C\u8FD8\u901A\u8FC7</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u524D\u7F00\u6CE8\u89E3\u63D0\u4F9B\u4E86Nginx Ingress\u6240\u4E0D\u5177\u5907\u7684\u9AD8\u7EA7\u529F\u80FD\uFF0C\u4E3E\u4F8B\u6765\u8BF4\uFF1A</font></p>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u6D41\u91CF\u9884\u70ED </font></strong>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u65E0\u6CD5\u5B9E\u73B0\u6B64\u80FD\u529B</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u539F\u751F\u7684</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/warmup&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u65B0\u8282\u70B9\u4E0A\u7EBF\u65F6\uFF0C\u6D41\u91CF\u5728\u6307\u5B9A\u9884\u70ED\u7A97\u53E3\u5185\u662F\u9010\u6B65\u8C03\u5927\uFF0C\u5145\u5206\u4FDD\u8BC1\u65B0\u8282\u70B9\u5B8C\u6210\u9884\u70ED\u3002</font></li>
</ul>
</li>
<li><strong><font style="color:rgb(27, 28, 29);">\u5168\u5C40\u9650\u6D41 </font></strong>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">nginx.ingress.kubernetes.io/limit-rps&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u5B9E\u73B0\u7684\u662F\u5355Pod\u9650\u6D41\uFF0C\u603B\u9650\u5236\u7B49\u4E8E\u201C\u9650\u6D41\u503C x Pod\u6570\u91CF\u201D\uFF0C\u96BE\u4EE5\u7CBE\u786E\u63A7\u5236\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/rate-limit&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u63D0\u4F9B\u7684\u662F\u8DE8\u6240\u6709\u7F51\u5173\u5B9E\u4F8B\u7684</font><em><font style="color:rgb(27, 28, 29);">\u5168\u5C40</font></em><font style="color:rgb(27, 28, 29);">\u9650\u6D41\uFF0C\u53EF\u7CBE\u786E\u63A7\u5236\u603B QPS\u3002</font></li>
</ul>
</li>
<li><strong><font style="color:rgb(27, 28, 29);">\u5168\u5C40\u5E76\u53D1\u63A7\u5236 </font></strong>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u7F3A\u4E4F\u7B80\u5355\u6709\u6548\u7684\u5168\u5C40\u5E76\u53D1\u6570\u63A7\u5236\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/concurrency-limit&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u63D0\u4F9B</font><em><font style="color:rgb(27, 28, 29);">\u5168\u5C40</font></em><font style="color:rgb(27, 28, 29);">\u5E76\u53D1\u6570\u9650\u5236\uFF0C\u4FDD\u62A4\u540E\u7AEF\u670D\u52A1\u514D\u53D7\u77AC\u65F6\u6D41\u91CF\u51B2\u51FB\u3002</font></li>
</ul>
</li>
<li><strong><font style="color:rgb(27, 28, 29);">\u6D41\u91CF\u955C\u50CF </font></strong>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u7F3A\u4E4F\u6D41\u91CF\u955C\u50CF\u80FD\u529B\uFF0C\u9700\u8981\u5199 Lua \u811A\u672C</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u539F\u751F\u7684</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/mirror-target-service&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u6CE8\u89E3\uFF0C\u53EF\u4FBF\u6377\u5730\u590D\u5236\u6D41\u91CF\u5230\u6D4B\u8BD5\u670D\u52A1\uFF0C\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u5F71\u5B50\u6D4B\u8BD5\u3002</font></li>
</ul>
</li>
</ul>
<h2 id="\u6A21\u5F0F\u4E8C\u63A7\u5236\u53F0\u914D\u7F6E-apiapi-\u7BA1\u7406\u6A21\u5F0F"><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0\u914D\u7F6E API\uFF08API \u7BA1\u7406\u6A21\u5F0F\uFF09</font></h2>
<p><font style="color:rgb(27, 28, 29);">\u6B64\u6A21\u5F0F\u5C06\u4E91\u539F\u751F API \u7F51\u5173\u4F5C\u4E3A\u4E00\u4E2A\u4E2D\u5FC3\u5316\u7684 API \u7BA1\u7406\u5E73\u53F0\u3002\u7528\u6237\u901A\u8FC7\u963F\u91CC\u4E91\u63A7\u5236\u53F0\uFF08\u6216 API/Terraform\uFF09\u6765\u5B9A\u4E49\u548C\u7BA1\u7406 API\uFF0C\u5B9E\u73B0\u4ECE\u8DEF\u7531\u8F6C\u53D1\u5230 API \u6CBB\u7406\u7684\u5168\u9762\u5347\u7EA7\u3002</font></p>
<h3 id="21-\u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F"><font style="color:rgb(27, 28, 29);">2.1 \u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F</font></h3>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u96C6\u4E2D\u5316\u6CBB\u7406</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u5141\u8BB8\u5E73\u53F0\u56E2\u961F\u3001\u67B6\u6784\u5E08\u6216\u5B89\u5168\u56E2\u961F\u4ECE\u7EDF\u4E00\u89C6\u56FE\u7BA1\u7406\u6240\u6709 API\uFF0C\u5F3A\u5236\u6267\u884C\u5B89\u5168\u3001\u5408\u89C4\u548C\u6D41\u91CF\u7B56\u7565\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u652F\u6301 API \u4ECE\u8BBE\u8BA1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u53D1\u5E03\u5230\u4E0B\u7EBF\u7684\u5B8C\u6574\u751F\u547D\u5468\u671F\uFF0C\u5305\u62EC\u7248\u672C\u63A7\u5236\u3001\u53D1\u5E03\u5BA1\u8BA1\u548C\u4E00\u952E\u56DE\u6EDA\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u9AD8\u7EA7\u5B89\u5168\u80FD\u529B</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u539F\u751F\u96C6\u6210\u590D\u6742\u7684\u8BA4\u8BC1\u673A\u5236\uFF08\u5982 OIDC, JWT\uFF0C\u81EA\u5EFA\u8BA4\u8BC1\u9274\u6743\uFF09</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">API \u8FD0\u8425\u4E0E\u751F\u6001</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u652F\u6301 API \u7684\u6D88\u8D39\u8005\u7BA1\u7406 \u3001\u8BA2\u9605\u5173\u7CFB\u548C\u8C03\u7528\u914D\u989D \uFF0C\u8D4B\u80FD API \u7ECF\u6D4E\u3002</font></li>
</ul>
<p><strong><font style="color:rgb(27, 28, 29);">\u9002\u7528\u573A\u666F</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font></p>
<ul>
<li><font style="color:rgb(27, 28, 29);">\u9700\u8981\u5BF9 API \u8FDB\u884C\u7CBE\u7EC6\u5316\u3001\u96C6\u4E2D\u5316\u6CBB\u7406\u7684\u4F01\u4E1A\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u5BF9 API \u5B89\u5168\u8EAB\u4EFD\u8BA4\u8BC1\u6709\u9AD8\u8981\u6C42\u7684\u4E1A\u52A1\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u9700\u8981\u7BA1\u7406 API \u7248\u672C\u3001\u8FDB\u884C\u7070\u5EA6\u53D1\u5E03\u548C\u5BA1\u8BA1\u7684\u56E2\u961F\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u6784\u5EFA\u5F00\u653E\u5E73\u53F0\uFF0C\u9700\u8981\u7BA1\u7406\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\uFF08\u6D88\u8D39\u8005\uFF09\u53CA\u5176\u8C03\u7528\u914D\u989D\u7684\u573A\u666F\u3002</font></li>
</ul>
<h3 id="22-\u529F\u80FD\u8BE6\u60C5"><font style="color:rgb(27, 28, 29);">2.2 \u529F\u80FD\u8BE6\u60C5</font></h3>
<h4 id="221-\u5B8C\u6574\u7684-api-\u751F\u547D\u5468\u671F\u7BA1\u7406"><font style="color:rgb(27, 28, 29);">2.2.1 \u5B8C\u6574\u7684 API \u751F\u547D\u5468\u671F\u7BA1\u7406</font></h4>
<p><font style="color:rgb(27, 28, 29);">\u652F\u6301 API \u7684\u8BBE\u8BA1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u53D1\u5E03\u53CA\u4E0B\u7EBF\u5168\u5468\u671F\u7BA1\u7406 \u3002\u5173\u952E\u529F\u80FD\u5305\u62EC\uFF1A</font></p>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u7248\u672C\u7BA1\u7406</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u652F\u6301 API \u7684\u591A\u4E2A\u7248\u672C\uFF08\u5982v1, v2\uFF09\u540C\u65F6\u5728\u7EBF\uFF0C\u5E76\u53EF\u7BA1\u7406\u5176\u53D1\u5E03\u72B6\u6001 \u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u53D1\u5E03\u4E0E\u56DE\u6EDA</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B API \u7684\u53D1\u5E03\u5386\u53F2\u8BB0\u5F55\uFF0C\u652F\u6301\u4E00\u952E\u56DE\u6EDA\u5230\u4EFB\u4E00\u5386\u53F2\u7248\u672C \u3002</font></li>
</ul>
<h4 id="222-\u9AD8\u7EA7\u7684\u4F01\u4E1A\u7EA7\u5B89\u5168"><font style="color:rgb(27, 28, 29);">2.2.2 \u9AD8\u7EA7\u7684\u4F01\u4E1A\u7EA7\u5B89\u5168</font></h4>
<p><font style="color:rgb(27, 28, 29);">\u63D0\u4F9B\u8FDC\u8D85 Ingress \u6A21\u5F0F\u7684\u57FA\u7840\u5B89\u5168\u80FD\u529B\uFF0C\u5C06\u590D\u6742\u7684\u8BA4\u8BC1\u903B\u8F91\u4ECE\u540E\u7AEF\u670D\u52A1\u4E2D\u5265\u79BB\uFF1A</font></p>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u4E30\u5BCC\u8BA4\u8BC1\u9274\u6743</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u539F\u751F\u652F\u6301 JWT\u3001OIDC\uFF0C\u5E76\u80FD\u4E0E\u963F\u91CC\u4E91 IDaaS\uFF08\u5E94\u7528\u8EAB\u4EFD\u670D\u52A1\uFF09\u96C6\u6210\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u591A\u5C42\u9632\u5FA1</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u6DF1\u5EA6\u96C6\u6210 WAF\uFF08Web \u5E94\u7528\u9632\u706B\u5899\uFF09\u3001\u652F\u6301 mTLS \u53CC\u5411\u8BA4\u8BC1\u3001IP \u9ED1\u767D\u540D\u5355\u53CA\u81EA\u5B9A\u4E49\u5B89\u5168\u63D2\u4EF6\u3002</font></li>
</ul>
<h4 id="223-\u5F3A\u5927\u7684\u53EF\u6269\u5C55\u6027"><font style="color:rgb(27, 28, 29);">2.2.3 \u5F3A\u5927\u7684\u53EF\u6269\u5C55\u6027</font></h4>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u63D2\u4EF6\u5E02\u573A</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u4E30\u5BCC\u7684\u5B98\u65B9\u63D2\u4EF6\uFF08\u8986\u76D6\u8BA4\u8BC1\u3001\u5B89\u5168\u3001\u6D41\u91CF\u7B49\uFF09\uFF0C\u5E76\u652F\u6301\u7528\u6237\u4E0A\u4F20\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u70ED\u66F4\u65B0</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u7F51\u5173\u652F\u6301\u63D2\u4EF6\u548C\u914D\u7F6E\u7684\u70ED\u66F4\u65B0\uFF0C\u65E0\u9700\u91CD\u542F\u5B9E\u4F8B\uFF0C\u4FDD\u969C\u4E1A\u52A1\u9AD8\u53EF\u7528\u3002</font></li>
</ul>
<h4 id="224-api-\u8FD0\u8425\u4E0E\u591A\u6E90\u670D\u52A1\u53D1\u73B0"><font style="color:rgb(27, 28, 29);">2.2.4 API \u8FD0\u8425\u4E0E\u591A\u6E90\u670D\u52A1\u53D1\u73B0</font></h4>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">API \u751F\u6001</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u201C\u6D88\u8D39\u8005\u7BA1\u7406\u201D\u529F\u80FD\uFF0C\u53EF\u7BA1\u7406 API \u7684\u8C03\u7528\u914D\u989D\u548C\u8BA2\u9605\u89C4\u5219\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u591A\u6E90\u53D1\u73B0</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u540E\u7AEF\u670D\u52A1\u4E0D\u4EC5\u9650\u4E8E K8s \u96C6\u7FA4\uFF0C\u8FD8\u652F\u6301\u4ECE Nacos\u3001\u51FD\u6570\u8BA1\u7B97(FC)\u4EE5\u53CA\u56FA\u5B9A\u5730\u5740/\u57DF\u540D\u7B49\u591A\u79CD\u6765\u6E90\u53D1\u73B0\u670D\u52A1\u3002</font></li>
</ul>
<h2 id="\u6A21\u5F0F\u5BF9\u6BD4\u603B\u7ED3"><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u5BF9\u6BD4\u603B\u7ED3</font></h2>
<p><font style="color:rgb(27, 28, 29);">\u4E0B\u8868\u603B\u7ED3\u4E86\u4E24\u79CD\u914D\u7F6E\u6A21\u5F0F\u5728\u5173\u952E\u7EF4\u5EA6\u7684\u5DEE\u5F02\uFF1A</font></p>


















































<table><thead><tr><th><strong><font style="color:rgb(27, 28, 29);">\u7EF4\u5EA6</font></strong></th><th><strong><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF1AK8s Ingress \u6A21\u5F0F</font></strong></th><th><strong><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0 API \u6A21\u5F0F</font></strong></th></tr></thead><tbody><tr><td><strong><font style="color:rgb(27, 28, 29);">\u6838\u5FC3\u5B9A\u4F4D</font></strong></td><td><font style="color:rgb(27, 28, 29);">K8s Ingress Controller\uFF0C\u6D41\u91CF\u8DEF\u7531 </font><sup><font style="color:rgb(68, 71, 70);"></font></sup></td><td><font style="color:rgb(27, 28, 29);">\u7EDF\u4E00 API \u7BA1\u7406\u5E73\u53F0</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u914D\u7F6E\u65B9\u5F0F</font></strong></td><td><font style="color:rgb(27, 28, 29);">K8s YAML</font></td><td><font style="color:rgb(27, 28, 29);">\u963F\u91CC\u4E91\u63A7\u5236\u53F0 / API / Terraform</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u7BA1\u7406\u5DE5\u4F5C\u6D41</font></strong></td><td><font style="color:rgb(27, 28, 29);">GitOps / </font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">kubectl apply&#x3C;/font></code><br><font style="color:rgb(27, 28, 29);"></font></td><td><font style="color:rgb(27, 28, 29);">UI/API\u9A71\u52A8</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">Nginx \u8FC1\u79FB</font></strong></td><td><strong><font style="color:rgb(27, 28, 29);"></font></strong><font style="color:rgb(27, 28, 29);">\u63D0\u4F9B\u4E00\u952E\u5F0F\u8FC1\u79FB\u5DE5\u5177\u3002</font></td><td><font style="color:rgb(27, 28, 29);">\u9700\u8981\u91CD\u65B0\u5B9A\u4E49 API \u5E76\u914D\u7F6E\u7B56\u7565</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">API \u751F\u547D\u5468\u671F</font></strong></td><td><strong><font style="color:rgb(27, 28, 29);">\u65E0</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u4E0E K8s \u8D44\u6E90\u751F\u547D\u5468\u671F\u7ED1\u5B9A</font></td><td><strong><font style="color:rgb(27, 28, 29);">\u5B8C\u6574</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u652F\u6301\u8BBE\u8BA1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u53D1\u5E03\u3001\u7248\u672C\u3001\u4E0B\u7EBF</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u6269\u5C55\u6027</font></strong></td><td><strong><font style="color:rgb(27, 28, 29);">\u6709\u9650</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u53D7\u9650\u4E8E\u5DF2\u652F\u6301\u7684\u6CE8\u89E3</font></td><td><strong><font style="color:rgb(27, 28, 29);">\u9AD8</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E02\u573A + \u81EA\u5B9A\u4E49\u63D2\u4EF6\u70ED\u66F4\u65B0</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">\u670D\u52A1\u53D1\u73B0</font></strong></td><td><strong><font style="color:rgb(27, 28, 29);">K8s\u539F\u751F</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u81EA\u52A8\u53D1\u73B0 K8s </font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">Service&#x3C;/font></code></td><td><strong><font style="color:rgb(27, 28, 29);">\u591A\u6E90</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u652F\u6301 K8s (ACK)\u3001Nacos\u3001FC\u3001\u56FA\u5B9A\u5730\u5740\u7B49</font></td></tr><tr><td><strong><font style="color:rgb(27, 28, 29);">API \u8FD0\u8425</font></strong></td><td><strong><font style="color:rgb(27, 28, 29);">\u65E0</font></strong><font style="color:rgb(27, 28, 29);"></font></td><td><strong><font style="color:rgb(27, 28, 29);">\u5B8C\u6574</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u652F\u6301\u6D88\u8D39\u8005\u7BA1\u7406\u3001\u8BA2\u9605\u3001\u914D\u989D\u7BA1\u7406</font></td></tr></tbody></table>
<h2 id="\u5982\u4F55\u9009\u62E9\u63A8\u8350\u7684\u8FC1\u79FB\u4E0E\u6F14\u8FDB\u8DEF\u5F84"><font style="color:rgb(27, 28, 29);">\u5982\u4F55\u9009\u62E9\uFF1A\u63A8\u8350\u7684\u8FC1\u79FB\u4E0E\u6F14\u8FDB\u8DEF\u5F84</font></h2>
<h3 id="\u573A\u666F\u4E00\u5E73\u6ED1\u8FC1\u79FB"><font style="color:rgb(27, 28, 29);">\u573A\u666F\u4E00\uFF1A\u5E73\u6ED1\u8FC1\u79FB</font></h3>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u9002\u7528\u5BF9\u8C61</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u4F18\u5148\u8003\u8651\u8FC1\u79FB\u901F\u5EA6\u3001\u5E0C\u671B\u4FDD\u6301\u73B0\u6709 K8s \u5DE5\u4F5C\u6D41\u7684\u56E2\u961F\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u63A8\u8350\u65B9\u6848</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u91C7\u7528</font><strong><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF1AK8s Ingress \u6A21\u5F0F</font></strong><font style="color:rgb(27, 28, 29);">\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u5B9E\u65BD</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font>
<ol>
<li><font style="color:rgb(27, 28, 29);">\u4F7F\u7528\u5B98\u65B9\u8FC1\u79FB\u5DE5\u5177\u5C06 Nginx Ingress \u914D\u7F6E\u8FC1\u79FB\u81F3\u4E91\u539F\u751F API \u7F51\u5173\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u5BA1\u67E5\u8FC1\u79FB\u62A5\u544A\uFF0C\u5904\u7406\u5C11\u91CF\u4E0D\u517C\u5BB9\u6CE8\u89E3\uFF08\u53EF\u63D0\u4EA4\u5DE5\u5355\u54A8\u8BE2\uFF09\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\uFF08\u53EF\u9009\uFF09\u4F7F\u7528</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u6CE8\u89E3\u66FF\u6362\u539F\u6709\u914D\u7F6E\uFF0C\u4EE5\u542F\u7528\u5168\u5C40\u9650\u6D41\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</font></li>
</ol>
</li>
</ul>
<h3 id="\u573A\u666F\u4E8C\u65B0\u4E1A\u52A1\u67B6\u6784"><font style="color:rgb(27, 28, 29);">\u573A\u666F\u4E8C\uFF1A\u65B0\u4E1A\u52A1\u67B6\u6784</font></h3>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u9002\u7528\u5BF9\u8C61</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u6784\u5EFA\u5168\u65B0\u7684 API \u5E73\u53F0\uFF0C\u6216\u5BF9\u5B89\u5168\u3001\u6CBB\u7406\u6709\u9AD8\u8981\u6C42\u7684\u4F01\u4E1A\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u63A8\u8350\u65B9\u6848</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u91C7\u7528</font><strong><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0 API \u6A21\u5F0F</font></strong><font style="color:rgb(27, 28, 29);">\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u5B9E\u65BD</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font>
<ol>
<li><font style="color:rgb(27, 28, 29);">\u5728\u63A7\u5236\u53F0\u5B9A\u4E49 API\u3001\u914D\u7F6E\u5B89\u5168\u7B56\u7565\uFF08\u5982 OIDC/JWT\uFF09\u548C\u9650\u6D41\u7B56\u7565\u3002</font></li>
<li><font style="color:rgb(27, 28, 29);">\u4F7F\u7528\u7F51\u5173\u7684\u670D\u52A1\u53D1\u73B0\u80FD\u529B\uFF0C\u5C06 API \u540E\u7AEF\u6307\u5411 ACK \u96C6\u7FA4\u4E2D\u7684</font><code dir="auto">&#x3C;font style="color:rgb(68, 71, 70);">Service&#x3C;/font></code><font style="color:rgb(27, 28, 29);">\u6216\u5176\u4ED6\u670D\u52A1\u6765\u6E90\u3002</font></li>
</ol>
</li>
</ul>
<h3 id="\u573A\u666F\u4E09\u6E10\u8FDB\u5F0F\u6F14\u8FDB\u63A8\u8350\u7B56\u7565"><font style="color:rgb(27, 28, 29);">\u573A\u666F\u4E09\uFF1A\u6E10\u8FDB\u5F0F\u6F14\u8FDB\uFF08\u63A8\u8350\u7B56\u7565\uFF09</font></h3>
<ul>
<li><strong><font style="color:rgb(27, 28, 29);">\u9002\u7528\u5BF9\u8C61</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u7EDD\u5927\u591A\u6570\u7EC4\u7EC7\uFF0C\u65E2\u8981\u89E3\u51B3\u5B58\u91CF\u8FC1\u79FB\u95EE\u9898\uFF0C\u53C8\u5E0C\u671B\u9010\u6B65\u63D0\u5347\u6CBB\u7406\u80FD\u529B\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u63A8\u8350\u65B9\u6848</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font><strong><font style="color:rgb(27, 28, 29);">\u4ECE\u6A21\u5F0F\u4E00\u5F00\u59CB\uFF0C\u9010\u6B65\u6F14\u8FDB\u5230\u6A21\u5F0F\u4E8C</font></strong><font style="color:rgb(27, 28, 29);">\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u5B9E\u65BD</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A</font>
<ol>
<li><strong><font style="color:rgb(27, 28, 29);">\u7B2C\u4E00\u6B65\uFF08\u8FC1\u79FB\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u9996\u5148\u91C7\u7528</font><strong><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF08Ingress\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\uFF0C\u5B8C\u6210\u6240\u6709 Nginx Ingress \u7684\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5FEB\u901F\u89E3\u51B3 Nginx EOL \u95EE\u9898\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u7B2C\u4E8C\u6B65\uFF08\u6CBB\u7406\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u8BC6\u522B\u51FA\u7EC4\u7EC7\u5185\u7684\u6838\u5FC3 API\uFF08\u4F8B\u5982\uFF1A\u5BF9\u5916\u7684\u3001\u9AD8\u5B89\u5168\u7B49\u7EA7\u7684\u3001\u9700\u7CBE\u7EC6\u5316\u7BA1\u7406\u7684 API\uFF09\u3002</font></li>
<li><strong><font style="color:rgb(27, 28, 29);">\u7B2C\u4E09\u6B65\uFF08\u6F14\u8FDB\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\uFF1A\u5C06\u8FD9\u4E9B\u6838\u5FC3 API \u9010\u6B65\u201C\u7EB3\u7BA1\u201D\u5230</font><strong><font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF08\u63A7\u5236\u53F0\uFF09</font></strong><font style="color:rgb(27, 28, 29);">\u3002\u60A8\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u4E3A\u8FD9\u4E9B API \u914D\u7F6EJWT \u8BA4\u8BC1\u3001WAF \u9632\u62A4\u3001\u6D88\u8D39\u8005\u914D\u989D \u7B49\u9AD8\u7EA7\u7B56\u7565\uFF0C\u800C\u5176\u4ED6\u975E\u6838\u5FC3 API \u53EF\u4EE5\u7EE7\u7EED\u4FDD\u7559\u5728\u6A21\u5F0F\u4E00\u4E2D\u8FD0\u884C\u3002</font></li>
</ol>
</li>
</ul>
<h4 id="\u8DEF\u7531\u4F18\u5148\u7EA7\u8BF4\u660E">\u8DEF\u7531\u4F18\u5148\u7EA7\u8BF4\u660E\uFF1A</h4>
<p>\u5BF9\u4E8E\u76F8\u540C\u57DF\u540D\u548C\u76F8\u540C\u8DEF\u5F84\u7684\u8DEF\u7531\uFF0C\u63A7\u5236\u53F0\u521B\u5EFA\u7684 API \u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E Ingress \u65B9\u5F0F\u540C\u6B65\u7684\u8DEF\u7531\uFF0C\u56E0\u6B64\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u9010\u4E2A\u5728\u63A7\u5236\u53F0\u4E0A\u8FDB\u884C\u914D\u7F6E\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u95EE\u9898\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5220\u9664\u63A7\u5236\u53F0\u914D\u7F6E\u7ACB\u5373\u6062\u590D\u5230 Ingress \u6A21\u5F0F\u3002</p>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u4F18\u5148\u7EA7\u662F\u57FA\u4E8E\u5355\u4E2A\u8DEF\u7531\u7C92\u5EA6\u7684\uFF0C\u4E0D\u662F\u6574\u4E2A\u57DF\u540D\u3002\u8FD9\u610F\u5473\u7740\uFF1A</p>
<ul>
<li>\u53EF\u4EE5\u5BF9\u67D0\u4E2A\u57DF\u540D\u4E0B\u7684\u90E8\u5206\u8DEF\u5F84\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u5176\u4ED6\u8DEF\u5F84\u7EE7\u7EED\u4F7F\u7528 Ingress</li>
<li>\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531\u4EC5\u8986\u76D6\u5339\u914D\u6761\u4EF6\u76F8\u540C\u7684 Ingress \u8DEF\u7531</li>
<li>\u5EFA\u8BAE\u6309\u8DEF\u5F84\u9010\u6B65\u8FC1\u79FB\uFF0C\u800C\u4E0D\u662F\u4E00\u6B21\u6027\u8FC1\u79FB\u6574\u4E2A\u57DF\u540D\u7684\u6240\u6709\u8DEF\u7531</li>
</ul>
<p>\u53EF\u4EE5\u901A\u8FC7\u4F8B\u5B50\uFF0C\u66F4\u5BB9\u6613\u7406\u89E3\u8FD9\u4E2A\u4F18\u5148\u7EA7\u673A\u5236\uFF1A</p>
<p><strong>\u573A\u666F\uFF1A</strong> \u60A8\u6709\u4E00\u4E2A\u57DF\u540D <code dir="auto">example.com</code>\uFF0C\u9700\u8981\u4ECE Ingress \u9010\u6B65\u8FC1\u79FB\u5230\u63A7\u5236\u53F0\u914D\u7F6E\u3002</p>
<p><strong>1. \u521D\u59CB\u72B6\u6001\uFF08\u4EC5 Ingress \u914D\u7F6E\uFF09</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/api</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api-service-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/web</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">web-service-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: my-ingress\x7Fspec:\x7F  rules:\x7F  - host: example.com\x7F    http:\x7F      paths:\x7F      - path: /api\x7F        pathType: Prefix\x7F        backend:\x7F          service:\x7F            name: api-service-v1\x7F            port:\x7F              number: 8080\x7F      - path: /web\x7F        pathType: Prefix\x7F        backend:\x7F          service:\x7F            name: web-service-v1\x7F            port:\x7F              number: 80"><div></div></button></div></figure></div>
<p>\u6B64\u65F6 API \u7F51\u5173\u81EA\u52A8\u751F\u6210\u7684\u8DEF\u7531\u4E3A\uFF1A</p>
<ul>
<li><code dir="auto">/api</code> \u2192 <code dir="auto">api-service-v1:8080</code></li>
<li><code dir="auto">/web</code> \u2192 <code dir="auto">web-service-v1:80</code></li>
</ul>
<p><strong>2. \u8FC1\u79FB\u4E2D\uFF08\u63A7\u5236\u53F0\u914D\u7F6E <strong><code dir="auto">**/api**</code></strong> \u8DEF\u5F84\uFF09</strong></p>
<p>\u5728\u63A7\u5236\u53F0\u4E3A <code dir="auto">example.com</code> \u521B\u5EFA\u8DEF\u7531\uFF0C\u914D\u7F6E <code dir="auto">/api</code> \u6307\u5411\u65B0\u7248\u672C\u670D\u52A1 <code dir="auto">api-service-v2:8080</code>\u3002</p>
<p>\u6B64\u65F6\u5408\u5E76\u540E\u7684\u5B9E\u9645\u8DEF\u7531\u987A\u5E8F\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. /api \u2192 api-service-v2:8080  (\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u4F18\u5148\u5339\u914D) \u2705</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E\uFF0C\u6B63\u5E38\u751F\u6548)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="1. /api \u2192 api-service-v2:8080  (\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u4F18\u5148\u5339\u914D) \u2705\x7F2. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)\x7F3. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E\uFF0C\u6B63\u5E38\u751F\u6548)"><div></div></button></div></figure></div>
<p><strong>\u6548\u679C\uFF1A</strong></p>
<ul>
<li>\u8BBF\u95EE <code dir="auto">example.com/api/*</code> \u2192 \u8DEF\u7531\u5230 <code dir="auto">api-service-v2</code>\uFF08\u63A7\u5236\u53F0\u914D\u7F6E\u751F\u6548\uFF09</li>
<li>\u8BBF\u95EE <code dir="auto">example.com/web/*</code> \u2192 \u8DEF\u7531\u5230 <code dir="auto">web-service-v1</code>\uFF08Ingress \u914D\u7F6E\u751F\u6548\uFF09</li>
</ul>
<p><strong>3. \u53D1\u73B0\u95EE\u9898\uFF0C\u5FEB\u901F\u56DE\u9000</strong></p>
<p>\u5982\u679C\u53D1\u73B0 <code dir="auto">api-service-v2</code> \u6709\u95EE\u9898\uFF0C\u53EA\u9700\u5728\u63A7\u5236\u53F0\u5220\u9664 <code dir="auto">/api</code> \u8DEF\u7531\u914D\u7F6E\u3002</p>
<p>\u5220\u9664\u540E\u7684\u8DEF\u7531\u987A\u5E8F\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u7ACB\u5373\u6062\u590D) \u2705</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="1. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u7ACB\u5373\u6062\u590D) \u2705\x7F2. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E)"><div></div></button></div></figure></div>
<p><strong>\u6548\u679C\uFF1A</strong> \u6D41\u91CF\u7ACB\u5373\u56DE\u9000\u5230 Ingress \u914D\u7F6E\u7684 <code dir="auto">api-service-v1</code>\uFF0C\u65E0\u9700\u4FEE\u6539 Ingress \u6216\u91CD\u542F\u4EFB\u4F55\u670D\u52A1\u3002</p>
<p><strong>4. \u5B8C\u5168\u8FC1\u79FB\uFF08\u63A7\u5236\u53F0\u914D\u7F6E\u6240\u6709\u8DEF\u5F84\uFF09</strong></p>
<p>\u5728\u63A7\u5236\u53F0\u7EE7\u7EED\u914D\u7F6E <code dir="auto">/web</code> \u8DEF\u5F84\u540E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. /api \u2192 api-service-v2:8080  (\u63A7\u5236\u53F0\u914D\u7F6E) \u2705</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. /web \u2192 web-service-v2:80    (\u63A7\u5236\u53F0\u914D\u7F6E) \u2705</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="1. /api \u2192 api-service-v2:8080  (\u63A7\u5236\u53F0\u914D\u7F6E) \u2705\x7F2. /web \u2192 web-service-v2:80    (\u63A7\u5236\u53F0\u914D\u7F6E) \u2705\x7F3. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)\x7F4. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)"><div></div></button></div></figure></div>
<p>\u6B64\u65F6\u6240\u6709\u6D41\u91CF\u90FD\u7531\u63A7\u5236\u53F0\u914D\u7F6E\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B89\u5168\u5220\u9664\u5BF9\u5E94\u7684 Ingress \u914D\u7F6E\u3002</p>`,s={title:"Nginx Ingress \u8FC1\u79FB\u6307\u5F15",description:"Nginx Ingress \u8FC1\u79FB\u6307\u5F15",date:"2025-11-26",category:"article",keywords:["Higress"],authors:"CH3CHO"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_cgd0lkflotpwluzq.md",r=void 0,g=function(){return`
\u4F5C\u8005\uFF1A\u6F84\u6F6D

<font style="color:rgba(0, 0, 0, 0.9);">\u7F16\u8005\u6309\uFF1AIngress NGINX \u9000\u5F79\u5F15\u53D1\u5F00\u53D1\u8005\u4EEC\u7684\u5F3A\u70C8\u5173\u6CE8\uFF0C</font>[\u300A\u9057\u61BE\uFF0CIngress NGINX \u8981\u9000\u5F79\u4E86\u300B](https://higress.cn/blog/higress-gvr7dx_awbbpb_glwn7aov9cvqg8gx/)<font style="color:rgba(0, 0, 0, 0.9);">\u516C\u4F17\u53F7\u9605\u8BFB\u91CF\u8D85\u8FC72w\u3002</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01JlSMU02267IB3Phci_!!6000000007070-2-tps-588-116.png)

<font style="color:rgba(0, 0, 0, 0.9);">\u5B98\u65B9\u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5B8C\u5907\u7684\u5E94\u5BF9\u63AA\u65BD\uFF0C\u8FC1\u79FB\u5230 Gateway API\uFF0C\u4EE5\u53CA20+ Ingress \u63A7\u5236\u5668\u3002\u4F46\u5B9E\u65BD\u8FC1\u79FB\u7684\u65F6\u5019\uFF0C\u4F01\u4E1A\u8FD8\u4F1A\u5E0C\u671B\u4E86\u89E3\u65B0\u7684 Ingress \u63A7\u5236\u5668\u662F\u5426\u517C\u5BB9 Ingress NGINX \u7684\u6CE8\u89E3\uFF0C\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u5982\u4F55\u8FDB\u884C\u7070\u5EA6\u5207\u6D41\uFF0C\u9047\u5230\u6D41\u91CF\u635F\u5931\u5982\u4F55\u5FEB\u901F\u56DE\u6EDA\u7B49\uFF0C\u4EE5\u4FDD\u969C\u8FC1\u79FB\u8FC7\u7A0B\u5E73\u6ED1\uFF0C\u4E0D\u5F71\u54CD\u7EBF\u4E0A\u4E1A\u52A1\u3002</font>

<font style="color:rgba(0, 0, 0, 0.9);">\u56E0\u6B64\uFF0C\u672C\u6587\u5C06\u63D0\u4F9B\u57FA\u4E8E\u5B9E\u64CD\u7684\u5E94\u5BF9\u65B9\u6848\uFF0C\u4EE5\u963F\u91CC\u4E91\u4E91\u539F\u751F API \u7F51\u5173(Higress \u4F01\u4E1A\u7248)\u4E3A\u4F8B\uFF0C\u6309\u6B65\u9AA4\u8BE6\u7EC6\u9610\u8FF0\u8FC1\u79FB\u7684\u64CD\u4F5C\u8FC7\u7A0B\u3002</font>**<font style="color:rgb(122, 152, 228);"></font>**

## <font style="color:rgb(27, 28, 29);">\u6982\u8FF0</font>
<font style="color:rgb(27, 28, 29);">\u968F\u7740 Nginx Ingress \u9010\u6B65\u505C\u6B62\u7EF4\u62A4\uFF0C\u7528\u6237\u9700\u8981\u5C06\u5176\u8FC1\u79FB\u81F3\u65B0\u7684\u7F51\u5173\u65B9\u6848\u3002\u4E91\u539F\u751F API \u7F51\u5173\u662F\u963F\u91CC\u4E91 API \u7F51\u5173\u7684\u5B50\u4EA7\u54C1\uFF0C\u7EDF\u4E00\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u548C\u5B89\u5168\u7F51\u5173 \uFF0C\u4E3A Nginx Ingress \u7528\u6237\u63D0\u4F9B\u4E86\u5E73\u6ED1\u7684\u8FC1\u79FB\u8DEF\u5F84\u548C\u5F3A\u5927\u7684\u529F\u80FD\u5347\u7EA7\u3002</font>

<font style="color:rgb(27, 28, 29);">\u4E91\u539F\u751F API \u7F51\u5173\u63D0\u4F9B\u4E24\u79CD\u6838\u5FC3\u914D\u7F6E\u6A21\u5F0F\uFF0C\u4EE5\u9002\u5E94\u4E0D\u540C\u7684\u7BA1\u7406\u9700\u6C42\u548C\u4F7F\u7528\u573A\u666F\uFF1A</font>

1. **<font style="color:rgb(27, 28, 29);">\u76D1\u542C K8s Ingress\uFF08Ingress \u6A21\u5F0F\uFF09</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u7F51\u5173\u4F5C\u4E3A APIG Ingress Controller \u8FD0\u884C\uFF0C\u517C\u5BB9 K8s Ingress \u8D44\u6E90\u53CA </font>[Nginx Ingress \u6CE8\u89E3](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways)<font style="color:rgb(27, 28, 29);">\uFF0C\u9002\u7528\u4E8E\u5E0C\u671B\u4FDD\u6301 K8s \u539F\u751F\u5DE5\u4F5C\u6D41\uFF08\u5982 GitOps\uFF09\u7684\u56E2\u961F \u3002</font>
2. **<font style="color:rgb(27, 28, 29);">\u63A7\u5236\u53F0\u914D\u7F6E API\uFF08API \u7BA1\u7406\u6A21\u5F0F\uFF09</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u901A\u8FC7\u963F\u91CC\u4E91\u63A7\u5236\u53F0\u6216 API \u8FDB\u884C\u914D\u7F6E\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684 API \u751F\u547D\u5468\u671F\u7BA1\u7406\u3001\u9AD8\u7EA7\u5B89\u5168\u7B56\u7565\u548C API \u8FD0\u8425\u80FD\u529B\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u96C6\u4E2D\u6CBB\u7406\u548C\u7CBE\u7EC6\u5316\u7BA1\u7406\u7684\u573A\u666F \u3002</font>

<font style="color:rgb(27, 28, 29);">\u672C\u6587\u6863\u5C06\u8BE6\u7EC6\u5BF9\u6BD4\u8FD9\u4E24\u79CD\u6A21\u5F0F\u7684\u529F\u80FD\u3001\u4F18\u52BF\u53CA\u9002\u7528\u573A\u666F\uFF0C\u4EE5\u5E2E\u52A9\u60A8\u9009\u62E9\u6700\u9002\u5408\u7684\u914D\u7F6E\u8DEF\u5F84\u3002</font>

## <font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF1A\u76D1\u542C K8s Ingress\uFF08Ingress \u6A21\u5F0F\uFF09</font>
<font style="color:rgb(27, 28, 29);">\u6B64\u6A21\u5F0F\u5C06\u4E91\u539F\u751F API \u7F51\u5173\u90E8\u7F72\u4E3A Kubernetes \u96C6\u7FA4\u7684 Ingress Controller\uFF0C\u7528\u4E8E\u7BA1\u7406\u96C6\u7FA4\u7684\u5357\u5317\u5411\u6D41\u91CF\u3002</font>

### <font style="color:rgb(27, 28, 29);">1.1 \u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F</font>
+ **<font style="color:rgb(27, 28, 29);">\u5E73\u6ED1\u8FC1\u79FB</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u4E3A Nginx Ingress \u7528\u6237\u63D0\u4F9B</font>[\u4E00\u952E\u5F0F\u8FC1\u79FB\u5DE5\u5177](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/migrating-from-nginx-ingress-to-cloud-native-api-gateway)<font style="color:rgb(27, 28, 29);">\uFF0C\u6700\u5927\u7A0B\u5EA6\u964D\u4F4E\u8FC1\u79FB\u6210\u672C\u548C\u4E1A\u52A1\u4E2D\u65AD\u98CE\u9669\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u4FDD\u6301 K8s \u539F\u751F\u5DE5\u4F5C\u6D41</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u5B8C\u5168\u517C\u5BB9 K8s Ingress \u8D44\u6E90\u548C\u6CE8\u89E3\uFF0C\u56E2\u961F\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528</font>\`<font style="color:rgb(68, 71, 70);">kubectl apply</font>\`<font style="color:rgb(27, 28, 29);">\u3001GitOps\u7B49\u73B0\u6709\u5DE5\u4F5C\u6D41\u6765\u7BA1\u7406\u8DEF\u7531\u89C4\u5219\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u529F\u80FD\u589E\u5F3A</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u5728\u517C\u5BB9 Nginx Ingress \u7684\u57FA\u7840\u4E0A\uFF0C\u63D0\u4F9B\u4E86\u66F4\u5F3A\u5927\u7684\u6CBB\u7406\u80FD\u529B\uFF0C\u5982</font>[\u5168\u5C40\u9650\u6D41](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress?spm=a2c4g.11186623.help-menu-29462.d_2_10_2.13d16ab7JSrjZM#862f08d03d4d3)<font style="color:rgb(27, 28, 29);">\u7B49\u3002</font>

**<font style="color:rgb(27, 28, 29);">\u9002\u7528\u573A\u666F</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>

+ <font style="color:rgb(27, 28, 29);">Nginx Ingress \u7684\u5B58\u91CF\u7528\u6237\u8FC1\u79FB\u3002</font>
+ <font style="color:rgb(27, 28, 29);">\u4EE5 K8s \u4E3A\u4E2D\u5FC3\u3001\u4F9D\u8D56 GitOps \u6D41\u7A0B\u7BA1\u7406\u5E94\u7528\u53D1\u5E03\u7684\u56E2\u961F\u3002</font>
+ <font style="color:rgb(27, 28, 29);">\u9700\u8981\u5FEB\u901F\u5B9E\u73B0\u96C6\u7FA4\u6D41\u91CF\u8DEF\u7531\u548C\u57FA\u7840\u6CBB\u7406\u7684\u5F00\u53D1\u8FD0\u7EF4\u56E2\u961F\u3002</font>

### <font style="color:rgb(27, 28, 29);">1.2 \u529F\u80FD\u8BE6\u60C5</font>
> APIG Ingress Controller \u652F\u6301\u7684\u5B8C\u6574 Ingress \u80FD\u529B\u8BF7\u53C2\u8003\uFF1A
>
> 1. [\u300AAPIG Ingress\u652F\u6301\u7684Annotation\u300B](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways)
> 2. [\u300AAPIG Ingress\u9AD8\u7EA7\u7528\u6CD5\u300B](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/advanced-usage-of-apig-ingress)
>

#### <font style="color:rgb(27, 28, 29);">1.2.1 \u9AD8\u5EA6\u517C\u5BB9 Nginx Ingress \u6CE8\u89E3</font>
<font style="color:rgb(27, 28, 29);">APIG Ingress\uFF08\u4E91\u539F\u751F API \u7F51\u5173\u7684 Ingress Controller\uFF09\u652F\u6301\u7EDD\u5927\u591A\u6570 Nginx Ingress \u6CE8\u89E3\uFF08\u636E\u7EDF\u8BA1\u652F\u630151\u79CD\uFF0C\u8986\u76D690%\u7684\u7528\u6237\u573A\u666F\uFF09\u3002\u8FD9\u610F\u5473\u7740\u73B0\u6709\u7684 K8s Ingress YAML \u6587\u4EF6\u65E0\u9700\u5927\u91CF\u4FEE\u6539\u5373\u53EF\u8FC1\u79FB\u3002</font>

**<font style="color:rgb(27, 28, 29);">\u5173\u952E\u517C\u5BB9\u6CE8\u89E3\u793A\u4F8B</font>**<sup><font style="color:rgb(68, 71, 70);"></font></sup><font style="color:rgb(27, 28, 29);">\uFF1A</font>

| **<font style="color:rgb(27, 28, 29);">\u529F\u80FD\u7C7B\u522B</font>** | **<font style="color:rgb(27, 28, 29);">\u517C\u5BB9\u7684 Nginx \u6CE8\u89E3 (nginx.ingress.kubernetes.io/)</font>** |
| --- | --- |
| **<font style="color:rgb(27, 28, 29);">\u8DEF\u7531\u4E0E\u91CD\u5199</font>** | \`<font style="color:rgb(68, 71, 70);">rewrite-target</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">use-regex</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">upstream-vhost</font>\` |
| **<font style="color:rgb(27, 28, 29);">\u6D41\u91CF\u5207\u5206</font>** | \`<font style="color:rgb(68, 71, 70);">canary</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">canary-by-header</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">canary-weight</font>\` |
| **<font style="color:rgb(27, 28, 29);">\u5B89\u5168\u4E0E\u8DE8\u57DF</font>** | \`<font style="color:rgb(68, 71, 70);">enable-cors</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">cors-allow-methods</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">ssl-redirect</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">force-ssl-redirect</font>\` |
| **<font style="color:rgb(27, 28, 29);">\u8D85\u65F6\u4E0E\u91CD\u8BD5</font>** | \`<font style="color:rgb(68, 71, 70);">proxy-next-upstream</font>\`<br/><font style="color:rgb(27, 28, 29);"></font>\`<font style="color:rgb(68, 71, 70);">proxy-next-upstream-tries</font>\` |
| **<font style="color:rgb(27, 28, 29);">IP \u8BBF\u95EE\u63A7\u5236</font>** | \`<font style="color:rgb(68, 71, 70);">whitelist-source-range</font>\` |


#### <font style="color:rgb(27, 28, 29);">1.2.2 \u72EC\u6709\u7684\u529F\u80FD\u589E\u5F3A (Higress \u6CE8\u89E3)</font>
<font style="color:rgb(27, 28, 29);">\u6B64\u6A21\u5F0F\u4E0D\u4EC5\u517C\u5BB9 Nginx\uFF0C\u8FD8\u901A\u8FC7</font>\`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/</font>\`<font style="color:rgb(27, 28, 29);">\u524D\u7F00\u6CE8\u89E3\u63D0\u4F9B\u4E86Nginx Ingress\u6240\u4E0D\u5177\u5907\u7684\u9AD8\u7EA7\u529F\u80FD\uFF0C\u4E3E\u4F8B\u6765\u8BF4\uFF1A</font>

+ **<font style="color:rgb(27, 28, 29);">\u6D41\u91CF\u9884\u70ED </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u65E0\u6CD5\u5B9E\u73B0\u6B64\u80FD\u529B</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u539F\u751F\u7684</font>\`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/warmup</font>\`<font style="color:rgb(27, 28, 29);">\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u65B0\u8282\u70B9\u4E0A\u7EBF\u65F6\uFF0C\u6D41\u91CF\u5728\u6307\u5B9A\u9884\u70ED\u7A97\u53E3\u5185\u662F\u9010\u6B65\u8C03\u5927\uFF0C\u5145\u5206\u4FDD\u8BC1\u65B0\u8282\u70B9\u5B8C\u6210\u9884\u70ED\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u5168\u5C40\u9650\u6D41 </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>\`<font style="color:rgb(68, 71, 70);">nginx.ingress.kubernetes.io/limit-rps</font>\`<font style="color:rgb(27, 28, 29);">\u5B9E\u73B0\u7684\u662F\u5355Pod\u9650\u6D41\uFF0C\u603B\u9650\u5236\u7B49\u4E8E\u201C\u9650\u6D41\u503C x Pod\u6570\u91CF\u201D\uFF0C\u96BE\u4EE5\u7CBE\u786E\u63A7\u5236\u3002</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>\`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/rate-limit</font>\`<font style="color:rgb(27, 28, 29);">\u63D0\u4F9B\u7684\u662F\u8DE8\u6240\u6709\u7F51\u5173\u5B9E\u4F8B\u7684</font>_<font style="color:rgb(27, 28, 29);">\u5168\u5C40</font>_<font style="color:rgb(27, 28, 29);">\u9650\u6D41\uFF0C\u53EF\u7CBE\u786E\u63A7\u5236\u603B QPS\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u5168\u5C40\u5E76\u53D1\u63A7\u5236 </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u7F3A\u4E4F\u7B80\u5355\u6709\u6548\u7684\u5168\u5C40\u5E76\u53D1\u6570\u63A7\u5236\u3002</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>\`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/concurrency-limit</font>\`<font style="color:rgb(27, 28, 29);">\u63D0\u4F9B</font>_<font style="color:rgb(27, 28, 29);">\u5168\u5C40</font>_<font style="color:rgb(27, 28, 29);">\u5E76\u53D1\u6570\u9650\u5236\uFF0C\u4FDD\u62A4\u540E\u7AEF\u670D\u52A1\u514D\u53D7\u77AC\u65F6\u6D41\u91CF\u51B2\u51FB\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u6D41\u91CF\u955C\u50CF </font>**
    - **<font style="color:rgb(27, 28, 29);">Nginx \u7684\u95EE\u9898</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u7F3A\u4E4F\u6D41\u91CF\u955C\u50CF\u80FD\u529B\uFF0C\u9700\u8981\u5199 Lua \u811A\u672C</font>
    - **<font style="color:rgb(27, 28, 29);">APIG Ingress \u89E3\u51B3</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u539F\u751F\u7684</font>\`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/mirror-target-service</font>\`<font style="color:rgb(27, 28, 29);">\u6CE8\u89E3\uFF0C\u53EF\u4FBF\u6377\u5730\u590D\u5236\u6D41\u91CF\u5230\u6D4B\u8BD5\u670D\u52A1\uFF0C\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684\u5F71\u5B50\u6D4B\u8BD5\u3002</font>



## <font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0\u914D\u7F6E API\uFF08API \u7BA1\u7406\u6A21\u5F0F\uFF09</font>
<font style="color:rgb(27, 28, 29);">\u6B64\u6A21\u5F0F\u5C06\u4E91\u539F\u751F API \u7F51\u5173\u4F5C\u4E3A\u4E00\u4E2A\u4E2D\u5FC3\u5316\u7684 API \u7BA1\u7406\u5E73\u53F0\u3002\u7528\u6237\u901A\u8FC7\u963F\u91CC\u4E91\u63A7\u5236\u53F0\uFF08\u6216 API/Terraform\uFF09\u6765\u5B9A\u4E49\u548C\u7BA1\u7406 API\uFF0C\u5B9E\u73B0\u4ECE\u8DEF\u7531\u8F6C\u53D1\u5230 API \u6CBB\u7406\u7684\u5168\u9762\u5347\u7EA7\u3002</font>

### <font style="color:rgb(27, 28, 29);">2.1 \u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F</font>
+ **<font style="color:rgb(27, 28, 29);">\u96C6\u4E2D\u5316\u6CBB\u7406</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u5141\u8BB8\u5E73\u53F0\u56E2\u961F\u3001\u67B6\u6784\u5E08\u6216\u5B89\u5168\u56E2\u961F\u4ECE\u7EDF\u4E00\u89C6\u56FE\u7BA1\u7406\u6240\u6709 API\uFF0C\u5F3A\u5236\u6267\u884C\u5B89\u5168\u3001\u5408\u89C4\u548C\u6D41\u91CF\u7B56\u7565\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u652F\u6301 API \u4ECE\u8BBE\u8BA1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u53D1\u5E03\u5230\u4E0B\u7EBF\u7684\u5B8C\u6574\u751F\u547D\u5468\u671F\uFF0C\u5305\u62EC\u7248\u672C\u63A7\u5236\u3001\u53D1\u5E03\u5BA1\u8BA1\u548C\u4E00\u952E\u56DE\u6EDA\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u9AD8\u7EA7\u5B89\u5168\u80FD\u529B</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u539F\u751F\u96C6\u6210\u590D\u6742\u7684\u8BA4\u8BC1\u673A\u5236\uFF08\u5982 OIDC, JWT\uFF0C\u81EA\u5EFA\u8BA4\u8BC1\u9274\u6743\uFF09</font>
+ **<font style="color:rgb(27, 28, 29);">API \u8FD0\u8425\u4E0E\u751F\u6001</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u652F\u6301 API \u7684\u6D88\u8D39\u8005\u7BA1\u7406 \u3001\u8BA2\u9605\u5173\u7CFB\u548C\u8C03\u7528\u914D\u989D \uFF0C\u8D4B\u80FD API \u7ECF\u6D4E\u3002</font>

**<font style="color:rgb(27, 28, 29);">\u9002\u7528\u573A\u666F</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>

+ <font style="color:rgb(27, 28, 29);">\u9700\u8981\u5BF9 API \u8FDB\u884C\u7CBE\u7EC6\u5316\u3001\u96C6\u4E2D\u5316\u6CBB\u7406\u7684\u4F01\u4E1A\u3002</font>
+ <font style="color:rgb(27, 28, 29);">\u5BF9 API \u5B89\u5168\u8EAB\u4EFD\u8BA4\u8BC1\u6709\u9AD8\u8981\u6C42\u7684\u4E1A\u52A1\u3002</font>
+ <font style="color:rgb(27, 28, 29);">\u9700\u8981\u7BA1\u7406 API \u7248\u672C\u3001\u8FDB\u884C\u7070\u5EA6\u53D1\u5E03\u548C\u5BA1\u8BA1\u7684\u56E2\u961F\u3002</font>
+ <font style="color:rgb(27, 28, 29);">\u6784\u5EFA\u5F00\u653E\u5E73\u53F0\uFF0C\u9700\u8981\u7BA1\u7406\u7B2C\u4E09\u65B9\u5F00\u53D1\u8005\uFF08\u6D88\u8D39\u8005\uFF09\u53CA\u5176\u8C03\u7528\u914D\u989D\u7684\u573A\u666F\u3002</font>

### <font style="color:rgb(27, 28, 29);">2.2 \u529F\u80FD\u8BE6\u60C5</font>
#### <font style="color:rgb(27, 28, 29);">2.2.1 \u5B8C\u6574\u7684 API \u751F\u547D\u5468\u671F\u7BA1\u7406</font>
<font style="color:rgb(27, 28, 29);">\u652F\u6301 API \u7684\u8BBE\u8BA1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u53D1\u5E03\u53CA\u4E0B\u7EBF\u5168\u5468\u671F\u7BA1\u7406 \u3002\u5173\u952E\u529F\u80FD\u5305\u62EC\uFF1A</font>

+ **<font style="color:rgb(27, 28, 29);">\u7248\u672C\u7BA1\u7406</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u652F\u6301 API \u7684\u591A\u4E2A\u7248\u672C\uFF08\u5982v1, v2\uFF09\u540C\u65F6\u5728\u7EBF\uFF0C\u5E76\u53EF\u7BA1\u7406\u5176\u53D1\u5E03\u72B6\u6001 \u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u53D1\u5E03\u4E0E\u56DE\u6EDA</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B API \u7684\u53D1\u5E03\u5386\u53F2\u8BB0\u5F55\uFF0C\u652F\u6301\u4E00\u952E\u56DE\u6EDA\u5230\u4EFB\u4E00\u5386\u53F2\u7248\u672C \u3002</font>

#### <font style="color:rgb(27, 28, 29);">2.2.2 \u9AD8\u7EA7\u7684\u4F01\u4E1A\u7EA7\u5B89\u5168</font>
<font style="color:rgb(27, 28, 29);">\u63D0\u4F9B\u8FDC\u8D85 Ingress \u6A21\u5F0F\u7684\u57FA\u7840\u5B89\u5168\u80FD\u529B\uFF0C\u5C06\u590D\u6742\u7684\u8BA4\u8BC1\u903B\u8F91\u4ECE\u540E\u7AEF\u670D\u52A1\u4E2D\u5265\u79BB\uFF1A</font>

+ **<font style="color:rgb(27, 28, 29);">\u4E30\u5BCC\u8BA4\u8BC1\u9274\u6743</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u539F\u751F\u652F\u6301 JWT\u3001OIDC\uFF0C\u5E76\u80FD\u4E0E\u963F\u91CC\u4E91 IDaaS\uFF08\u5E94\u7528\u8EAB\u4EFD\u670D\u52A1\uFF09\u96C6\u6210\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u591A\u5C42\u9632\u5FA1</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u6DF1\u5EA6\u96C6\u6210 WAF\uFF08Web \u5E94\u7528\u9632\u706B\u5899\uFF09\u3001\u652F\u6301 mTLS \u53CC\u5411\u8BA4\u8BC1\u3001IP \u9ED1\u767D\u540D\u5355\u53CA\u81EA\u5B9A\u4E49\u5B89\u5168\u63D2\u4EF6\u3002</font>

#### <font style="color:rgb(27, 28, 29);">2.2.3 \u5F3A\u5927\u7684\u53EF\u6269\u5C55\u6027</font>
+ **<font style="color:rgb(27, 28, 29);">\u63D2\u4EF6\u5E02\u573A</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u4E30\u5BCC\u7684\u5B98\u65B9\u63D2\u4EF6\uFF08\u8986\u76D6\u8BA4\u8BC1\u3001\u5B89\u5168\u3001\u6D41\u91CF\u7B49\uFF09\uFF0C\u5E76\u652F\u6301\u7528\u6237\u4E0A\u4F20\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u70ED\u66F4\u65B0</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u7F51\u5173\u652F\u6301\u63D2\u4EF6\u548C\u914D\u7F6E\u7684\u70ED\u66F4\u65B0\uFF0C\u65E0\u9700\u91CD\u542F\u5B9E\u4F8B\uFF0C\u4FDD\u969C\u4E1A\u52A1\u9AD8\u53EF\u7528\u3002</font>

#### <font style="color:rgb(27, 28, 29);">2.2.4 API \u8FD0\u8425\u4E0E\u591A\u6E90\u670D\u52A1\u53D1\u73B0</font>
+ **<font style="color:rgb(27, 28, 29);">API \u751F\u6001</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u63D0\u4F9B\u201C\u6D88\u8D39\u8005\u7BA1\u7406\u201D\u529F\u80FD\uFF0C\u53EF\u7BA1\u7406 API \u7684\u8C03\u7528\u914D\u989D\u548C\u8BA2\u9605\u89C4\u5219\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u591A\u6E90\u53D1\u73B0</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u540E\u7AEF\u670D\u52A1\u4E0D\u4EC5\u9650\u4E8E K8s \u96C6\u7FA4\uFF0C\u8FD8\u652F\u6301\u4ECE Nacos\u3001\u51FD\u6570\u8BA1\u7B97(FC)\u4EE5\u53CA\u56FA\u5B9A\u5730\u5740/\u57DF\u540D\u7B49\u591A\u79CD\u6765\u6E90\u53D1\u73B0\u670D\u52A1\u3002</font>

## <font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u5BF9\u6BD4\u603B\u7ED3</font>
<font style="color:rgb(27, 28, 29);">\u4E0B\u8868\u603B\u7ED3\u4E86\u4E24\u79CD\u914D\u7F6E\u6A21\u5F0F\u5728\u5173\u952E\u7EF4\u5EA6\u7684\u5DEE\u5F02\uFF1A</font>

| **<font style="color:rgb(27, 28, 29);">\u7EF4\u5EA6</font>** | **<font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF1AK8s Ingress \u6A21\u5F0F</font>** | **<font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0 API \u6A21\u5F0F</font>** |
| --- | --- | --- |
| **<font style="color:rgb(27, 28, 29);">\u6838\u5FC3\u5B9A\u4F4D</font>** | <font style="color:rgb(27, 28, 29);">K8s Ingress Controller\uFF0C\u6D41\u91CF\u8DEF\u7531 </font><sup><font style="color:rgb(68, 71, 70);"></font></sup> | <font style="color:rgb(27, 28, 29);">\u7EDF\u4E00 API \u7BA1\u7406\u5E73\u53F0</font> |
| **<font style="color:rgb(27, 28, 29);">\u914D\u7F6E\u65B9\u5F0F</font>** | <font style="color:rgb(27, 28, 29);">K8s YAML</font> | <font style="color:rgb(27, 28, 29);">\u963F\u91CC\u4E91\u63A7\u5236\u53F0 / API / Terraform</font> |
| **<font style="color:rgb(27, 28, 29);">\u7BA1\u7406\u5DE5\u4F5C\u6D41</font>** | <font style="color:rgb(27, 28, 29);">GitOps / </font>\`<font style="color:rgb(68, 71, 70);">kubectl apply</font>\`<br/><font style="color:rgb(27, 28, 29);"></font> | <font style="color:rgb(27, 28, 29);">UI/API\u9A71\u52A8</font> |
| **<font style="color:rgb(27, 28, 29);">Nginx \u8FC1\u79FB</font>** | **<font style="color:rgb(27, 28, 29);"></font>**<font style="color:rgb(27, 28, 29);">\u63D0\u4F9B\u4E00\u952E\u5F0F\u8FC1\u79FB\u5DE5\u5177\u3002</font> | <font style="color:rgb(27, 28, 29);">\u9700\u8981\u91CD\u65B0\u5B9A\u4E49 API \u5E76\u914D\u7F6E\u7B56\u7565</font> |
| **<font style="color:rgb(27, 28, 29);">API \u751F\u547D\u5468\u671F</font>** | **<font style="color:rgb(27, 28, 29);">\u65E0</font>**<font style="color:rgb(27, 28, 29);">\u3002\u4E0E K8s \u8D44\u6E90\u751F\u547D\u5468\u671F\u7ED1\u5B9A</font> | **<font style="color:rgb(27, 28, 29);">\u5B8C\u6574</font>**<font style="color:rgb(27, 28, 29);">\u3002\u652F\u6301\u8BBE\u8BA1\u3001\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u53D1\u5E03\u3001\u7248\u672C\u3001\u4E0B\u7EBF</font> |
| **<font style="color:rgb(27, 28, 29);">\u6269\u5C55\u6027</font>** | **<font style="color:rgb(27, 28, 29);">\u6709\u9650</font>**<font style="color:rgb(27, 28, 29);">\u3002\u53D7\u9650\u4E8E\u5DF2\u652F\u6301\u7684\u6CE8\u89E3</font> | **<font style="color:rgb(27, 28, 29);">\u9AD8</font>**<font style="color:rgb(27, 28, 29);">\u3002\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E02\u573A + \u81EA\u5B9A\u4E49\u63D2\u4EF6\u70ED\u66F4\u65B0</font> |
| **<font style="color:rgb(27, 28, 29);">\u670D\u52A1\u53D1\u73B0</font>** | **<font style="color:rgb(27, 28, 29);">K8s\u539F\u751F</font>**<font style="color:rgb(27, 28, 29);">\u3002\u81EA\u52A8\u53D1\u73B0 K8s </font>\`<font style="color:rgb(68, 71, 70);">Service</font>\` | **<font style="color:rgb(27, 28, 29);">\u591A\u6E90</font>**<font style="color:rgb(27, 28, 29);">\u3002\u652F\u6301 K8s (ACK)\u3001Nacos\u3001FC\u3001\u56FA\u5B9A\u5730\u5740\u7B49</font> |
| **<font style="color:rgb(27, 28, 29);">API \u8FD0\u8425</font>** | **<font style="color:rgb(27, 28, 29);">\u65E0</font>**<font style="color:rgb(27, 28, 29);"></font> | **<font style="color:rgb(27, 28, 29);">\u5B8C\u6574</font>**<font style="color:rgb(27, 28, 29);">\u3002\u652F\u6301\u6D88\u8D39\u8005\u7BA1\u7406\u3001\u8BA2\u9605\u3001\u914D\u989D\u7BA1\u7406</font> |


## <font style="color:rgb(27, 28, 29);">\u5982\u4F55\u9009\u62E9\uFF1A\u63A8\u8350\u7684\u8FC1\u79FB\u4E0E\u6F14\u8FDB\u8DEF\u5F84</font>
### <font style="color:rgb(27, 28, 29);">\u573A\u666F\u4E00\uFF1A\u5E73\u6ED1\u8FC1\u79FB</font>
+ **<font style="color:rgb(27, 28, 29);">\u9002\u7528\u5BF9\u8C61</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u4F18\u5148\u8003\u8651\u8FC1\u79FB\u901F\u5EA6\u3001\u5E0C\u671B\u4FDD\u6301\u73B0\u6709 K8s \u5DE5\u4F5C\u6D41\u7684\u56E2\u961F\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u63A8\u8350\u65B9\u6848</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u91C7\u7528</font>**<font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF1AK8s Ingress \u6A21\u5F0F</font>**<font style="color:rgb(27, 28, 29);">\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u5B9E\u65BD</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>
    1. <font style="color:rgb(27, 28, 29);">\u4F7F\u7528\u5B98\u65B9\u8FC1\u79FB\u5DE5\u5177\u5C06 Nginx Ingress \u914D\u7F6E\u8FC1\u79FB\u81F3\u4E91\u539F\u751F API \u7F51\u5173\u3002</font>
    2. <font style="color:rgb(27, 28, 29);">\u5BA1\u67E5\u8FC1\u79FB\u62A5\u544A\uFF0C\u5904\u7406\u5C11\u91CF\u4E0D\u517C\u5BB9\u6CE8\u89E3\uFF08\u53EF\u63D0\u4EA4\u5DE5\u5355\u54A8\u8BE2\uFF09\u3002</font>
    3. <font style="color:rgb(27, 28, 29);">\uFF08\u53EF\u9009\uFF09\u4F7F\u7528</font>\`<font style="color:rgb(68, 71, 70);">higress.ingress.kubernetes.io/</font>\`<font style="color:rgb(27, 28, 29);">\u6CE8\u89E3\u66FF\u6362\u539F\u6709\u914D\u7F6E\uFF0C\u4EE5\u542F\u7528\u5168\u5C40\u9650\u6D41\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</font>

### <font style="color:rgb(27, 28, 29);">\u573A\u666F\u4E8C\uFF1A\u65B0\u4E1A\u52A1\u67B6\u6784</font>
+ **<font style="color:rgb(27, 28, 29);">\u9002\u7528\u5BF9\u8C61</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u6784\u5EFA\u5168\u65B0\u7684 API \u5E73\u53F0\uFF0C\u6216\u5BF9\u5B89\u5168\u3001\u6CBB\u7406\u6709\u9AD8\u8981\u6C42\u7684\u4F01\u4E1A\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u63A8\u8350\u65B9\u6848</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u91C7\u7528</font>**<font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0 API \u6A21\u5F0F</font>**<font style="color:rgb(27, 28, 29);">\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u5B9E\u65BD</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>
    1. <font style="color:rgb(27, 28, 29);">\u5728\u63A7\u5236\u53F0\u5B9A\u4E49 API\u3001\u914D\u7F6E\u5B89\u5168\u7B56\u7565\uFF08\u5982 OIDC/JWT\uFF09\u548C\u9650\u6D41\u7B56\u7565\u3002</font>
    2. <font style="color:rgb(27, 28, 29);">\u4F7F\u7528\u7F51\u5173\u7684\u670D\u52A1\u53D1\u73B0\u80FD\u529B\uFF0C\u5C06 API \u540E\u7AEF\u6307\u5411 ACK \u96C6\u7FA4\u4E2D\u7684</font>\`<font style="color:rgb(68, 71, 70);">Service</font>\`<font style="color:rgb(27, 28, 29);">\u6216\u5176\u4ED6\u670D\u52A1\u6765\u6E90\u3002</font>

### <font style="color:rgb(27, 28, 29);">\u573A\u666F\u4E09\uFF1A\u6E10\u8FDB\u5F0F\u6F14\u8FDB\uFF08\u63A8\u8350\u7B56\u7565\uFF09</font>
+ **<font style="color:rgb(27, 28, 29);">\u9002\u7528\u5BF9\u8C61</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u7EDD\u5927\u591A\u6570\u7EC4\u7EC7\uFF0C\u65E2\u8981\u89E3\u51B3\u5B58\u91CF\u8FC1\u79FB\u95EE\u9898\uFF0C\u53C8\u5E0C\u671B\u9010\u6B65\u63D0\u5347\u6CBB\u7406\u80FD\u529B\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u63A8\u8350\u65B9\u6848</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>**<font style="color:rgb(27, 28, 29);">\u4ECE\u6A21\u5F0F\u4E00\u5F00\u59CB\uFF0C\u9010\u6B65\u6F14\u8FDB\u5230\u6A21\u5F0F\u4E8C</font>**<font style="color:rgb(27, 28, 29);">\u3002</font>
+ **<font style="color:rgb(27, 28, 29);">\u5B9E\u65BD</font>**<font style="color:rgb(27, 28, 29);">\uFF1A</font>
    1. **<font style="color:rgb(27, 28, 29);">\u7B2C\u4E00\u6B65\uFF08\u8FC1\u79FB\uFF09</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u9996\u5148\u91C7\u7528</font>**<font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E00\uFF08Ingress\uFF09</font>**<font style="color:rgb(27, 28, 29);">\uFF0C\u5B8C\u6210\u6240\u6709 Nginx Ingress \u7684\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5FEB\u901F\u89E3\u51B3 Nginx EOL \u95EE\u9898\u3002</font>
    2. **<font style="color:rgb(27, 28, 29);">\u7B2C\u4E8C\u6B65\uFF08\u6CBB\u7406\uFF09</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u8BC6\u522B\u51FA\u7EC4\u7EC7\u5185\u7684\u6838\u5FC3 API\uFF08\u4F8B\u5982\uFF1A\u5BF9\u5916\u7684\u3001\u9AD8\u5B89\u5168\u7B49\u7EA7\u7684\u3001\u9700\u7CBE\u7EC6\u5316\u7BA1\u7406\u7684 API\uFF09\u3002</font>
    3. **<font style="color:rgb(27, 28, 29);">\u7B2C\u4E09\u6B65\uFF08\u6F14\u8FDB\uFF09</font>**<font style="color:rgb(27, 28, 29);">\uFF1A\u5C06\u8FD9\u4E9B\u6838\u5FC3 API \u9010\u6B65\u201C\u7EB3\u7BA1\u201D\u5230</font>**<font style="color:rgb(27, 28, 29);">\u6A21\u5F0F\u4E8C\uFF08\u63A7\u5236\u53F0\uFF09</font>**<font style="color:rgb(27, 28, 29);">\u3002\u60A8\u53EF\u4EE5\u5728\u63A7\u5236\u53F0\u4E3A\u8FD9\u4E9B API \u914D\u7F6EJWT \u8BA4\u8BC1\u3001WAF \u9632\u62A4\u3001\u6D88\u8D39\u8005\u914D\u989D \u7B49\u9AD8\u7EA7\u7B56\u7565\uFF0C\u800C\u5176\u4ED6\u975E\u6838\u5FC3 API \u53EF\u4EE5\u7EE7\u7EED\u4FDD\u7559\u5728\u6A21\u5F0F\u4E00\u4E2D\u8FD0\u884C\u3002</font>

#### \u8DEF\u7531\u4F18\u5148\u7EA7\u8BF4\u660E\uFF1A
\u5BF9\u4E8E\u76F8\u540C\u57DF\u540D\u548C\u76F8\u540C\u8DEF\u5F84\u7684\u8DEF\u7531\uFF0C\u63A7\u5236\u53F0\u521B\u5EFA\u7684 API \u4F18\u5148\u7EA7\u4F1A\u9AD8\u4E8E Ingress \u65B9\u5F0F\u540C\u6B65\u7684\u8DEF\u7531\uFF0C\u56E0\u6B64\u8FC1\u79FB\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u9010\u4E2A\u5728\u63A7\u5236\u53F0\u4E0A\u8FDB\u884C\u914D\u7F6E\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u95EE\u9898\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5220\u9664\u63A7\u5236\u53F0\u914D\u7F6E\u7ACB\u5373\u6062\u590D\u5230 Ingress \u6A21\u5F0F\u3002

**\u6CE8\u610F\uFF1A** \u4F18\u5148\u7EA7\u662F\u57FA\u4E8E\u5355\u4E2A\u8DEF\u7531\u7C92\u5EA6\u7684\uFF0C\u4E0D\u662F\u6574\u4E2A\u57DF\u540D\u3002\u8FD9\u610F\u5473\u7740\uFF1A

+ \u53EF\u4EE5\u5BF9\u67D0\u4E2A\u57DF\u540D\u4E0B\u7684\u90E8\u5206\u8DEF\u5F84\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u5176\u4ED6\u8DEF\u5F84\u7EE7\u7EED\u4F7F\u7528 Ingress
+ \u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531\u4EC5\u8986\u76D6\u5339\u914D\u6761\u4EF6\u76F8\u540C\u7684 Ingress \u8DEF\u7531
+ \u5EFA\u8BAE\u6309\u8DEF\u5F84\u9010\u6B65\u8FC1\u79FB\uFF0C\u800C\u4E0D\u662F\u4E00\u6B21\u6027\u8FC1\u79FB\u6574\u4E2A\u57DF\u540D\u7684\u6240\u6709\u8DEF\u7531

\u53EF\u4EE5\u901A\u8FC7\u4F8B\u5B50\uFF0C\u66F4\u5BB9\u6613\u7406\u89E3\u8FD9\u4E2A\u4F18\u5148\u7EA7\u673A\u5236\uFF1A

**\u573A\u666F\uFF1A** \u60A8\u6709\u4E00\u4E2A\u57DF\u540D \`example.com\`\uFF0C\u9700\u8981\u4ECE Ingress \u9010\u6B65\u8FC1\u79FB\u5230\u63A7\u5236\u53F0\u914D\u7F6E\u3002

**1. \u521D\u59CB\u72B6\u6001\uFF08\u4EC5 Ingress \u914D\u7F6E\uFF09**

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: api-service-v1
            port:
              number: 8080
      - path: /web
        pathType: Prefix
        backend:
          service:
            name: web-service-v1
            port:
              number: 80
\`\`\`

\u6B64\u65F6 API \u7F51\u5173\u81EA\u52A8\u751F\u6210\u7684\u8DEF\u7531\u4E3A\uFF1A

+ \`/api\` \u2192 \`api-service-v1:8080\`
+ \`/web\` \u2192 \`web-service-v1:80\`



**2. \u8FC1\u79FB\u4E2D\uFF08\u63A7\u5236\u53F0\u914D\u7F6E **\`**/api**\`** \u8DEF\u5F84\uFF09**

\u5728\u63A7\u5236\u53F0\u4E3A \`example.com\` \u521B\u5EFA\u8DEF\u7531\uFF0C\u914D\u7F6E \`/api\` \u6307\u5411\u65B0\u7248\u672C\u670D\u52A1 \`api-service-v2:8080\`\u3002

\u6B64\u65F6\u5408\u5E76\u540E\u7684\u5B9E\u9645\u8DEF\u7531\u987A\u5E8F\u4E3A\uFF1A

\`\`\`plain
1. /api \u2192 api-service-v2:8080  (\u63A7\u5236\u53F0\u914D\u7F6E\uFF0C\u4F18\u5148\u5339\u914D) \u2705
2. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)
3. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E\uFF0C\u6B63\u5E38\u751F\u6548)
\`\`\`

**\u6548\u679C\uFF1A**

+ \u8BBF\u95EE \`example.com/api/*\` \u2192 \u8DEF\u7531\u5230 \`api-service-v2\`\uFF08\u63A7\u5236\u53F0\u914D\u7F6E\u751F\u6548\uFF09
+ \u8BBF\u95EE \`example.com/web/*\` \u2192 \u8DEF\u7531\u5230 \`web-service-v1\`\uFF08Ingress \u914D\u7F6E\u751F\u6548\uFF09



**3. \u53D1\u73B0\u95EE\u9898\uFF0C\u5FEB\u901F\u56DE\u9000**

\u5982\u679C\u53D1\u73B0 \`api-service-v2\` \u6709\u95EE\u9898\uFF0C\u53EA\u9700\u5728\u63A7\u5236\u53F0\u5220\u9664 \`/api\` \u8DEF\u7531\u914D\u7F6E\u3002

\u5220\u9664\u540E\u7684\u8DEF\u7531\u987A\u5E8F\uFF1A

\`\`\`plain
1. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u7ACB\u5373\u6062\u590D) \u2705
2. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E)
\`\`\`

**\u6548\u679C\uFF1A** \u6D41\u91CF\u7ACB\u5373\u56DE\u9000\u5230 Ingress \u914D\u7F6E\u7684 \`api-service-v1\`\uFF0C\u65E0\u9700\u4FEE\u6539 Ingress \u6216\u91CD\u542F\u4EFB\u4F55\u670D\u52A1\u3002



**4. \u5B8C\u5168\u8FC1\u79FB\uFF08\u63A7\u5236\u53F0\u914D\u7F6E\u6240\u6709\u8DEF\u5F84\uFF09**

\u5728\u63A7\u5236\u53F0\u7EE7\u7EED\u914D\u7F6E \`/web\` \u8DEF\u5F84\u540E\uFF1A

\`\`\`plain
1. /api \u2192 api-service-v2:8080  (\u63A7\u5236\u53F0\u914D\u7F6E) \u2705
2. /web \u2192 web-service-v2:80    (\u63A7\u5236\u53F0\u914D\u7F6E) \u2705
3. /api \u2192 api-service-v1:8080  (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)
4. /web \u2192 web-service-v1:80    (Ingress \u914D\u7F6E\uFF0C\u4E0D\u4F1A\u5339\u914D\u5230)
\`\`\`

\u6B64\u65F6\u6240\u6709\u6D41\u91CF\u90FD\u7531\u63A7\u5236\u53F0\u914D\u7F6E\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B89\u5168\u5220\u9664\u5BF9\u5E94\u7684 Ingress \u914D\u7F6E\u3002


`},l=function(){return o},f=function(){return[{depth:2,slug:"\u6982\u8FF0",text:"\u6982\u8FF0"},{depth:2,slug:"\u6A21\u5F0F\u4E00\u76D1\u542C-k8s-ingressingress-\u6A21\u5F0F",text:"\u6A21\u5F0F\u4E00\uFF1A\u76D1\u542C K8s Ingress\uFF08Ingress \u6A21\u5F0F\uFF09"},{depth:3,slug:"11-\u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F",text:"1.1 \u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F"},{depth:3,slug:"12-\u529F\u80FD\u8BE6\u60C5",text:"1.2 \u529F\u80FD\u8BE6\u60C5"},{depth:4,slug:"121-\u9AD8\u5EA6\u517C\u5BB9-nginx-ingress-\u6CE8\u89E3",text:"1.2.1 \u9AD8\u5EA6\u517C\u5BB9 Nginx Ingress \u6CE8\u89E3"},{depth:4,slug:"122-\u72EC\u6709\u7684\u529F\u80FD\u589E\u5F3A-higress-\u6CE8\u89E3",text:"1.2.2 \u72EC\u6709\u7684\u529F\u80FD\u589E\u5F3A (Higress \u6CE8\u89E3)"},{depth:2,slug:"\u6A21\u5F0F\u4E8C\u63A7\u5236\u53F0\u914D\u7F6E-apiapi-\u7BA1\u7406\u6A21\u5F0F",text:"\u6A21\u5F0F\u4E8C\uFF1A\u63A7\u5236\u53F0\u914D\u7F6E API\uFF08API \u7BA1\u7406\u6A21\u5F0F\uFF09"},{depth:3,slug:"21-\u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F",text:"2.1 \u6838\u5FC3\u4F18\u52BF\u4E0E\u9002\u7528\u573A\u666F"},{depth:3,slug:"22-\u529F\u80FD\u8BE6\u60C5",text:"2.2 \u529F\u80FD\u8BE6\u60C5"},{depth:4,slug:"221-\u5B8C\u6574\u7684-api-\u751F\u547D\u5468\u671F\u7BA1\u7406",text:"2.2.1 \u5B8C\u6574\u7684 API \u751F\u547D\u5468\u671F\u7BA1\u7406"},{depth:4,slug:"222-\u9AD8\u7EA7\u7684\u4F01\u4E1A\u7EA7\u5B89\u5168",text:"2.2.2 \u9AD8\u7EA7\u7684\u4F01\u4E1A\u7EA7\u5B89\u5168"},{depth:4,slug:"223-\u5F3A\u5927\u7684\u53EF\u6269\u5C55\u6027",text:"2.2.3 \u5F3A\u5927\u7684\u53EF\u6269\u5C55\u6027"},{depth:4,slug:"224-api-\u8FD0\u8425\u4E0E\u591A\u6E90\u670D\u52A1\u53D1\u73B0",text:"2.2.4 API \u8FD0\u8425\u4E0E\u591A\u6E90\u670D\u52A1\u53D1\u73B0"},{depth:2,slug:"\u6A21\u5F0F\u5BF9\u6BD4\u603B\u7ED3",text:"\u6A21\u5F0F\u5BF9\u6BD4\u603B\u7ED3"},{depth:2,slug:"\u5982\u4F55\u9009\u62E9\u63A8\u8350\u7684\u8FC1\u79FB\u4E0E\u6F14\u8FDB\u8DEF\u5F84",text:"\u5982\u4F55\u9009\u62E9\uFF1A\u63A8\u8350\u7684\u8FC1\u79FB\u4E0E\u6F14\u8FDB\u8DEF\u5F84"},{depth:3,slug:"\u573A\u666F\u4E00\u5E73\u6ED1\u8FC1\u79FB",text:"\u573A\u666F\u4E00\uFF1A\u5E73\u6ED1\u8FC1\u79FB"},{depth:3,slug:"\u573A\u666F\u4E8C\u65B0\u4E1A\u52A1\u67B6\u6784",text:"\u573A\u666F\u4E8C\uFF1A\u65B0\u4E1A\u52A1\u67B6\u6784"},{depth:3,slug:"\u573A\u666F\u4E09\u6E10\u8FDB\u5F0F\u6F14\u8FDB\u63A8\u8350\u7B56\u7565",text:"\u573A\u666F\u4E09\uFF1A\u6E10\u8FDB\u5F0F\u6F14\u8FDB\uFF08\u63A8\u8350\u7B56\u7565\uFF09"},{depth:4,slug:"\u8DEF\u7531\u4F18\u5148\u7EA7\u8BF4\u660E",text:"\u8DEF\u7531\u4F18\u5148\u7EA7\u8BF4\u660E\uFF1A"}]},t=c((I,u,x)=>{const{layout:h,...e}=s;return e.file=n,e.url=r,a`${y()}${b(o)}`})});export{t as Content,v as __tla,l as compiledContent,t as default,n as file,s as frontmatter,f as getHeadings,g as rawContent,r as url};
