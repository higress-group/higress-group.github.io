import{c as g,__tla as l}from"./astro-component.BNo6A4i3.js";import{r as I,m as c,u as h,__tla as A}from"./constant.Cnf2nzHm.js";import{__tla as m}from"./astro/assets-service.lesyujvn.js";let s,o,r,t,p,n,i,u=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return A}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="higress-\u7B80\u4ECB">Higress \u7B80\u4ECB</h2>
<p>Higress \u662F\u4E00\u6B3E\u4E91\u539F\u751F API \u7F51\u5173\uFF0C\u5185\u6838\u57FA\u4E8E Istio \u548C Envoy\uFF0C\u53EF\u4EE5\u7528 Go/Rust/JS \u7B49\u7F16\u5199 Wasm \u63D2\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u6570\u5341\u4E2A\u73B0\u6210\u7684\u901A\u7528\u63D2\u4EF6\uFF0C\u4EE5\u53CA\u5F00\u7BB1\u5373\u7528\u7684\u63A7\u5236\u53F0\uFF08demo \u70B9<a href="http://demo.higress.io/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8FD9\u91CC</a>\uFF09</p>
<p>Higress \u5728\u963F\u91CC\u5185\u90E8\u4E3A\u89E3\u51B3 Tengine reload \u5BF9\u957F\u8FDE\u63A5\u4E1A\u52A1\u6709\u635F\uFF0C\u4EE5\u53CA gRPC/Dubbo \u8D1F\u8F7D\u5747\u8861\u80FD\u529B\u4E0D\u8DB3\u800C\u8BDE\u751F\u3002</p>
<p>\u963F\u91CC\u4E91\u57FA\u4E8E Higress \u6784\u5EFA\u4E86\u4E91\u539F\u751F API \u7F51\u5173\u4EA7\u54C1\uFF0C\u4E3A\u5927\u91CF\u4F01\u4E1A\u5BA2\u6237\u63D0\u4F9B 99.99% \u7684\u7F51\u5173\u9AD8\u53EF\u7528\u4FDD\u969C\u670D\u52A1\u80FD\u529B\u3002</p>
<h3 id="\u4EC0\u4E48\u662F-ai-\u7F51\u5173">\u4EC0\u4E48\u662F AI \u7F51\u5173</h3>
<p>\u5728 AI \u65F6\u4EE3\uFF0CHigress \u57FA\u4E8E AI \u7F51\u5173\u80FD\u529B\uFF0C\u652F\u6491\u4E86\u901A\u4E49\u5343\u95EE APP\u3001\u767E\u70BC\u5927\u6A21\u578B API\u3001\u673A\u5668\u5B66\u4E60 PAI \u5E73\u53F0\u7B49 AI \u4E1A\u52A1\u3002\u540C\u65F6\u670D\u52A1\u56FD\u5185\u5934\u90E8\u7684 AIGC \u4F01\u4E1A\uFF08\u5982\u96F6\u4E00\u4E07\u7269\uFF09\uFF0C\u4EE5\u53CA AI \u4EA7\u54C1\uFF08\u5982 FastGPT\uFF09\u3002</p>
<p>AI Gateway = AI Native API Gateway</p>
<p>AI \u7F51\u5173\u7684\u672C\u8D28\u4F9D\u7136\u662F API \u7F51\u5173\uFF0CAI \u539F\u751F\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u5728\u8FD9\u6837\u7684 API \u7F51\u5173\u91CC\uFF0CAI \u662F\u4E00\u7B49\u516C\u6C11\u3002API \u7814\u53D1\uFF0CAPI \u4F9B\u5E94\uFF0CAPI \u6D88\u8D39\uFF0C\u4EE5\u53CA API \u89C2\u6D4B\u90FD\u57FA\u4E8E AI \u573A\u666F\u4E0B\u7684\u9700\u6C42\uFF0C\u6F14\u8FDB\u51FA\u5168\u65B0\u7684\u80FD\u529B\u3002</p>
<p>\u8FD9\u662F\u4F20\u7EDF API \u7F51\u5173\u7684\u529F\u80FD\u8303\u7574\uFF0CAI \u573A\u666F\u4E0B\u4ECD\u7136\u6709\u5176\u901A\u7528\u4EF7\u503C\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01yvRXRl1Ux42Nd4bos_!!6000000002583-2-tps-1904-908.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728 AI \u573A\u666F\u4E0B\uFF0C\u57FA\u4E8E Higress \u53EF\u4EE5\u5C06 API \u7F51\u5173\u7684\u529F\u80FD\u8303\u7574\u8FDB\u4E00\u6B65\u6269\u5C55\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01TtjqnE1vLVBDlhiJf_!!6000000006156-2-tps-1904-970.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u6838\u5FC3\u4F18\u52BF">\u6838\u5FC3\u4F18\u52BF</h2>
<ul>
<li>
<p><strong>\u751F\u4EA7\u7B49\u7EA7</strong></p>
<p>\u8131\u80CE\u4E8E\u963F\u91CC\u5DF4\u5DF4\u591A\u5E74\u751F\u4EA7\u9A8C\u8BC1\u7684\u5185\u90E8\u4EA7\u54C1\uFF0C\u652F\u6301\u6BCF\u79D2\u8BF7\u6C42\u91CF\u8FBE\u6570\u5341\u4E07\u7EA7\u7684\u5927\u89C4\u6A21\u573A\u666F\u3002</p>
<p>\u5F7B\u5E95\u6446\u8131 Nginx reload \u5F15\u8D77\u7684\u6D41\u91CF\u6296\u52A8\uFF0C\u914D\u7F6E\u53D8\u66F4\u6BEB\u79D2\u7EA7\u751F\u6548\u4E14\u4E1A\u52A1\u65E0\u611F\u3002\u5BF9 AI \u4E1A\u52A1\u7B49\u957F\u8FDE\u63A5\u573A\u666F\u7279\u522B\u53CB\u597D\u3002</p>
</li>
<li>
<p><strong>\u4FBF\u4E8E\u6269\u5C55</strong></p>
<p>\u63D0\u4F9B\u4E30\u5BCC\u7684\u5B98\u65B9\u63D2\u4EF6\u5E93\uFF0C\u6DB5\u76D6 AI\u3001\u6D41\u91CF\u7BA1\u7406\u3001\u5B89\u5168\u9632\u62A4\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u6EE1\u8DB390%\u4EE5\u4E0A\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\u3002</p>
<p>\u4E3B\u6253 Wasm \u63D2\u4EF6\u6269\u5C55\uFF0C\u901A\u8FC7\u6C99\u7BB1\u9694\u79BB\u786E\u4FDD\u5185\u5B58\u5B89\u5168\uFF0C\u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5141\u8BB8\u63D2\u4EF6\u7248\u672C\u72EC\u7ACB\u5347\u7EA7\uFF0C\u5B9E\u73B0\u6D41\u91CF\u65E0\u635F\u70ED\u66F4\u65B0\u7F51\u5173\u903B\u8F91\u3002</p>
</li>
<li>
<p><strong>\u5B89\u5168\u6613\u7528</strong></p>
<p>\u57FA\u4E8E Ingress API \u548C Gateway API \u6807\u51C6\uFF0C\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 UI \u63A7\u5236\u53F0\uFF0CWAF \u9632\u62A4\u63D2\u4EF6\u3001IP/Cookie CC \u9632\u62A4\u63D2\u4EF6\u5F00\u7BB1\u5373\u7528\u3002</p>
<p>\u652F\u6301\u5BF9\u63A5 Let\u2019s Encrypt \u81EA\u52A8\u7B7E\u53D1\u548C\u7EED\u7B7E\u514D\u8D39\u8BC1\u4E66\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8131\u79BB K8s \u90E8\u7F72\uFF0C\u4E00\u884C Docker \u547D\u4EE4\u5373\u53EF\u542F\u52A8\uFF0C\u65B9\u4FBF\u4E2A\u4EBA\u5F00\u53D1\u8005\u4F7F\u7528\u3002</p>
</li>
<li>
<p><strong>\u6D41\u5F0F\u5904\u7406</strong></p>
<p>\u652F\u6301\u771F\u6B63\u7684\u5B8C\u5168\u6D41\u5F0F\u5904\u7406\u8BF7\u6C42/\u54CD\u5E94 Body\uFF0CWasm \u63D2\u4EF6\u5F88\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u5904\u7406 SSE \uFF08Server-Sent Events\uFF09\u7B49\u6D41\u5F0F\u534F\u8BAE\u7684\u62A5\u6587\u3002</p>
<p>\u5728 AI \u4E1A\u52A1\u7B49\u5927\u5E26\u5BBD\u573A\u666F\u4E0B\uFF0C\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u5185\u5B58\u5F00\u9500\u3002</p>
</li>
</ul>
<h2 id="\u4F7F\u7528\u573A\u666F">\u4F7F\u7528\u573A\u666F</h2>
<ul>
<li>
<p><strong>AI \u7F51\u5173</strong>:</p>
<p>Higress \u80FD\u591F\u7528\u7EDF\u4E00\u7684\u534F\u8BAE\u5BF9\u63A5\u56FD\u5185\u5916\u6240\u6709 LLM \u6A21\u578B\u5382\u5546\uFF0C\u540C\u65F6\u5177\u5907\u4E30\u5BCC\u7684 AI \u53EF\u89C2\u6D4B\u3001\u591A\u6A21\u578B\u8D1F\u8F7D\u5747\u8861/fallback\u3001AI token \u6D41\u63A7\u3001AI \u7F13\u5B58\u7B49\u80FD\u529B\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01fNnhCp1cV8mYPRFeS_!!6000000003605-0-tps-1080-608.jpg" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>Kubernetes Ingress \u7F51\u5173</strong>:</p>
<p>Higress \u53EF\u4EE5\u4F5C\u4E3A K8s \u96C6\u7FA4\u7684 Ingress \u5165\u53E3\u7F51\u5173, \u5E76\u4E14\u517C\u5BB9\u4E86\u5927\u91CF K8s Nginx Ingress \u7684\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u4ECE K8s Nginx Ingress \u5FEB\u901F\u5E73\u6ED1\u8FC1\u79FB\u5230 Higress\u3002</p>
<p>\u652F\u6301 <a href="https://gateway-api.sigs.k8s.io/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Gateway API</a> \u6807\u51C6\uFF0C\u652F\u6301\u7528\u6237\u4ECE Ingress API \u5E73\u6ED1\u8FC1\u79FB\u5230 Gateway API\u3002</p>
<p>\u76F8\u6BD4 ingress-nginx\uFF0C\u8D44\u6E90\u5F00\u9500\u5927\u5E45\u4E0B\u964D\uFF0C\u8DEF\u7531\u53D8\u66F4\u751F\u6548\u901F\u5EA6\u6709\u5341\u500D\u63D0\u5347\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01bhEtb229eeMNBWmdP_!!6000000008093-2-tps-750-547.png" alt="" referrerpolicy="no-referrer">
<img src="https://img.alicdn.com/imgextra/i1/O1CN01bqRets1LsBGyitj4S_!!6000000001354-2-tps-887-489.png" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>\u5FAE\u670D\u52A1\u7F51\u5173</strong>:</p>
<p>Higress \u53EF\u4EE5\u4F5C\u4E3A\u5FAE\u670D\u52A1\u7F51\u5173, \u80FD\u591F\u5BF9\u63A5\u591A\u79CD\u7C7B\u578B\u7684\u6CE8\u518C\u4E2D\u5FC3\u53D1\u73B0\u670D\u52A1\u914D\u7F6E\u8DEF\u7531\uFF0C\u4F8B\u5982 Nacos, ZooKeeper, Consul, Eureka \u7B49\u3002</p>
<p>\u5E76\u4E14\u6DF1\u5EA6\u96C6\u6210\u4E86 <a href="https://github.com/apache/dubbo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Dubbo</a>, <a href="https://github.com/alibaba/nacos" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nacos</a>, <a href="https://github.com/alibaba/Sentinel" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Sentinel</a> \u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u57FA\u4E8E Envoy C++ \u7F51\u5173\u5185\u6838\u7684\u51FA\u8272\u6027\u80FD\uFF0C\u76F8\u6BD4\u4F20\u7EDF Java \u7C7B\u5FAE\u670D\u52A1\u7F51\u5173\uFF0C\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u8D44\u6E90\u4F7F\u7528\u7387\uFF0C\u51CF\u5C11\u6210\u672C\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01v4ZbCj1dBjePSMZ17_!!6000000003698-0-tps-1613-926.jpg" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>\u5B89\u5168\u9632\u62A4\u7F51\u5173</strong>:</p>
<p>Higress \u53EF\u4EE5\u4F5C\u4E3A\u5B89\u5168\u9632\u62A4\u7F51\u5173\uFF0C \u63D0\u4F9B WAF \u7684\u80FD\u529B\uFF0C\u5E76\u4E14\u652F\u6301\u591A\u79CD\u8BA4\u8BC1\u9274\u6743\u7B56\u7565\uFF0C\u4F8B\u5982 key-auth, hmac-auth, jwt-auth, basic-auth, oidc \u7B49\u3002</p>
</li>
</ul>`,t={title:"Higress\u662F\u4EC0\u4E48?",keywords:["Higress"],description:"Higress\u662F\u4EC0\u4E48",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/what-is-higress.md"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/overview/what-is-higress.md",i=void 0,n=function(){return`

## Higress \u7B80\u4ECB

Higress \u662F\u4E00\u6B3E\u4E91\u539F\u751F API \u7F51\u5173\uFF0C\u5185\u6838\u57FA\u4E8E Istio \u548C Envoy\uFF0C\u53EF\u4EE5\u7528 Go/Rust/JS \u7B49\u7F16\u5199 Wasm \u63D2\u4EF6\uFF0C\u63D0\u4F9B\u4E86\u6570\u5341\u4E2A\u73B0\u6210\u7684\u901A\u7528\u63D2\u4EF6\uFF0C\u4EE5\u53CA\u5F00\u7BB1\u5373\u7528\u7684\u63A7\u5236\u53F0\uFF08demo \u70B9[\u8FD9\u91CC](http://demo.higress.io/)\uFF09

Higress \u5728\u963F\u91CC\u5185\u90E8\u4E3A\u89E3\u51B3 Tengine reload \u5BF9\u957F\u8FDE\u63A5\u4E1A\u52A1\u6709\u635F\uFF0C\u4EE5\u53CA gRPC/Dubbo \u8D1F\u8F7D\u5747\u8861\u80FD\u529B\u4E0D\u8DB3\u800C\u8BDE\u751F\u3002

\u963F\u91CC\u4E91\u57FA\u4E8E Higress \u6784\u5EFA\u4E86\u4E91\u539F\u751F API \u7F51\u5173\u4EA7\u54C1\uFF0C\u4E3A\u5927\u91CF\u4F01\u4E1A\u5BA2\u6237\u63D0\u4F9B 99.99% \u7684\u7F51\u5173\u9AD8\u53EF\u7528\u4FDD\u969C\u670D\u52A1\u80FD\u529B\u3002

### \u4EC0\u4E48\u662F AI \u7F51\u5173

\u5728 AI \u65F6\u4EE3\uFF0CHigress \u57FA\u4E8E AI \u7F51\u5173\u80FD\u529B\uFF0C\u652F\u6491\u4E86\u901A\u4E49\u5343\u95EE APP\u3001\u767E\u70BC\u5927\u6A21\u578B API\u3001\u673A\u5668\u5B66\u4E60 PAI \u5E73\u53F0\u7B49 AI \u4E1A\u52A1\u3002\u540C\u65F6\u670D\u52A1\u56FD\u5185\u5934\u90E8\u7684 AIGC \u4F01\u4E1A\uFF08\u5982\u96F6\u4E00\u4E07\u7269\uFF09\uFF0C\u4EE5\u53CA AI \u4EA7\u54C1\uFF08\u5982 FastGPT\uFF09\u3002

AI Gateway = AI Native API Gateway

AI \u7F51\u5173\u7684\u672C\u8D28\u4F9D\u7136\u662F API \u7F51\u5173\uFF0CAI \u539F\u751F\u7684\u610F\u4E49\u5728\u4E8E\uFF0C\u5728\u8FD9\u6837\u7684 API \u7F51\u5173\u91CC\uFF0CAI \u662F\u4E00\u7B49\u516C\u6C11\u3002API \u7814\u53D1\uFF0CAPI \u4F9B\u5E94\uFF0CAPI \u6D88\u8D39\uFF0C\u4EE5\u53CA API \u89C2\u6D4B\u90FD\u57FA\u4E8E AI \u573A\u666F\u4E0B\u7684\u9700\u6C42\uFF0C\u6F14\u8FDB\u51FA\u5168\u65B0\u7684\u80FD\u529B\u3002

\u8FD9\u662F\u4F20\u7EDF API \u7F51\u5173\u7684\u529F\u80FD\u8303\u7574\uFF0CAI \u573A\u666F\u4E0B\u4ECD\u7136\u6709\u5176\u901A\u7528\u4EF7\u503C\uFF1A

![](https://img.alicdn.com/imgextra/i2/O1CN01yvRXRl1Ux42Nd4bos_!!6000000002583-2-tps-1904-908.png)

\u5728 AI \u573A\u666F\u4E0B\uFF0C\u57FA\u4E8E Higress \u53EF\u4EE5\u5C06 API \u7F51\u5173\u7684\u529F\u80FD\u8303\u7574\u8FDB\u4E00\u6B65\u6269\u5C55\uFF1A

![](https://img.alicdn.com/imgextra/i1/O1CN01TtjqnE1vLVBDlhiJf_!!6000000006156-2-tps-1904-970.png)


## \u6838\u5FC3\u4F18\u52BF

- **\u751F\u4EA7\u7B49\u7EA7**

  \u8131\u80CE\u4E8E\u963F\u91CC\u5DF4\u5DF4\u591A\u5E74\u751F\u4EA7\u9A8C\u8BC1\u7684\u5185\u90E8\u4EA7\u54C1\uFF0C\u652F\u6301\u6BCF\u79D2\u8BF7\u6C42\u91CF\u8FBE\u6570\u5341\u4E07\u7EA7\u7684\u5927\u89C4\u6A21\u573A\u666F\u3002

  \u5F7B\u5E95\u6446\u8131 Nginx reload \u5F15\u8D77\u7684\u6D41\u91CF\u6296\u52A8\uFF0C\u914D\u7F6E\u53D8\u66F4\u6BEB\u79D2\u7EA7\u751F\u6548\u4E14\u4E1A\u52A1\u65E0\u611F\u3002\u5BF9 AI \u4E1A\u52A1\u7B49\u957F\u8FDE\u63A5\u573A\u666F\u7279\u522B\u53CB\u597D\u3002
    
- **\u4FBF\u4E8E\u6269\u5C55**
  
  \u63D0\u4F9B\u4E30\u5BCC\u7684\u5B98\u65B9\u63D2\u4EF6\u5E93\uFF0C\u6DB5\u76D6 AI\u3001\u6D41\u91CF\u7BA1\u7406\u3001\u5B89\u5168\u9632\u62A4\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u6EE1\u8DB390%\u4EE5\u4E0A\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\u3002

  \u4E3B\u6253 Wasm \u63D2\u4EF6\u6269\u5C55\uFF0C\u901A\u8FC7\u6C99\u7BB1\u9694\u79BB\u786E\u4FDD\u5185\u5B58\u5B89\u5168\uFF0C\u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5141\u8BB8\u63D2\u4EF6\u7248\u672C\u72EC\u7ACB\u5347\u7EA7\uFF0C\u5B9E\u73B0\u6D41\u91CF\u65E0\u635F\u70ED\u66F4\u65B0\u7F51\u5173\u903B\u8F91\u3002

- **\u5B89\u5168\u6613\u7528**
  
  \u57FA\u4E8E Ingress API \u548C Gateway API \u6807\u51C6\uFF0C\u63D0\u4F9B\u5F00\u7BB1\u5373\u7528\u7684 UI \u63A7\u5236\u53F0\uFF0CWAF \u9632\u62A4\u63D2\u4EF6\u3001IP/Cookie CC \u9632\u62A4\u63D2\u4EF6\u5F00\u7BB1\u5373\u7528\u3002

  \u652F\u6301\u5BF9\u63A5 Let's Encrypt \u81EA\u52A8\u7B7E\u53D1\u548C\u7EED\u7B7E\u514D\u8D39\u8BC1\u4E66\uFF0C\u5E76\u4E14\u53EF\u4EE5\u8131\u79BB K8s \u90E8\u7F72\uFF0C\u4E00\u884C Docker \u547D\u4EE4\u5373\u53EF\u542F\u52A8\uFF0C\u65B9\u4FBF\u4E2A\u4EBA\u5F00\u53D1\u8005\u4F7F\u7528\u3002

- **\u6D41\u5F0F\u5904\u7406**

  \u652F\u6301\u771F\u6B63\u7684\u5B8C\u5168\u6D41\u5F0F\u5904\u7406\u8BF7\u6C42/\u54CD\u5E94 Body\uFF0CWasm \u63D2\u4EF6\u5F88\u65B9\u4FBF\u5730\u81EA\u5B9A\u4E49\u5904\u7406 SSE \uFF08Server-Sent Events\uFF09\u7B49\u6D41\u5F0F\u534F\u8BAE\u7684\u62A5\u6587\u3002

  \u5728 AI \u4E1A\u52A1\u7B49\u5927\u5E26\u5BBD\u573A\u666F\u4E0B\uFF0C\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u5185\u5B58\u5F00\u9500\u3002  

## \u4F7F\u7528\u573A\u666F

- **AI \u7F51\u5173**:

  Higress \u80FD\u591F\u7528\u7EDF\u4E00\u7684\u534F\u8BAE\u5BF9\u63A5\u56FD\u5185\u5916\u6240\u6709 LLM \u6A21\u578B\u5382\u5546\uFF0C\u540C\u65F6\u5177\u5907\u4E30\u5BCC\u7684 AI \u53EF\u89C2\u6D4B\u3001\u591A\u6A21\u578B\u8D1F\u8F7D\u5747\u8861/fallback\u3001AI token \u6D41\u63A7\u3001AI \u7F13\u5B58\u7B49\u80FD\u529B\uFF1A

  ![](https://img.alicdn.com/imgextra/i1/O1CN01fNnhCp1cV8mYPRFeS_!!6000000003605-0-tps-1080-608.jpg)

- **Kubernetes Ingress \u7F51\u5173**:

  Higress \u53EF\u4EE5\u4F5C\u4E3A K8s \u96C6\u7FA4\u7684 Ingress \u5165\u53E3\u7F51\u5173, \u5E76\u4E14\u517C\u5BB9\u4E86\u5927\u91CF K8s Nginx Ingress \u7684\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u4ECE K8s Nginx Ingress \u5FEB\u901F\u5E73\u6ED1\u8FC1\u79FB\u5230 Higress\u3002
  
  \u652F\u6301 [Gateway API](https://gateway-api.sigs.k8s.io/) \u6807\u51C6\uFF0C\u652F\u6301\u7528\u6237\u4ECE Ingress API \u5E73\u6ED1\u8FC1\u79FB\u5230 Gateway API\u3002

  \u76F8\u6BD4 ingress-nginx\uFF0C\u8D44\u6E90\u5F00\u9500\u5927\u5E45\u4E0B\u964D\uFF0C\u8DEF\u7531\u53D8\u66F4\u751F\u6548\u901F\u5EA6\u6709\u5341\u500D\u63D0\u5347\uFF1A

  ![](https://img.alicdn.com/imgextra/i1/O1CN01bhEtb229eeMNBWmdP_!!6000000008093-2-tps-750-547.png)
  ![](https://img.alicdn.com/imgextra/i1/O1CN01bqRets1LsBGyitj4S_!!6000000001354-2-tps-887-489.png)
  
- **\u5FAE\u670D\u52A1\u7F51\u5173**:

  Higress \u53EF\u4EE5\u4F5C\u4E3A\u5FAE\u670D\u52A1\u7F51\u5173, \u80FD\u591F\u5BF9\u63A5\u591A\u79CD\u7C7B\u578B\u7684\u6CE8\u518C\u4E2D\u5FC3\u53D1\u73B0\u670D\u52A1\u914D\u7F6E\u8DEF\u7531\uFF0C\u4F8B\u5982 Nacos, ZooKeeper, Consul, Eureka \u7B49\u3002
  
  \u5E76\u4E14\u6DF1\u5EA6\u96C6\u6210\u4E86 [Dubbo](https://github.com/apache/dubbo), [Nacos](https://github.com/alibaba/nacos), [Sentinel](https://github.com/alibaba/Sentinel) \u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u57FA\u4E8E Envoy C++ \u7F51\u5173\u5185\u6838\u7684\u51FA\u8272\u6027\u80FD\uFF0C\u76F8\u6BD4\u4F20\u7EDF Java \u7C7B\u5FAE\u670D\u52A1\u7F51\u5173\uFF0C\u53EF\u4EE5\u663E\u8457\u964D\u4F4E\u8D44\u6E90\u4F7F\u7528\u7387\uFF0C\u51CF\u5C11\u6210\u672C\u3002

  ![](https://img.alicdn.com/imgextra/i4/O1CN01v4ZbCj1dBjePSMZ17_!!6000000003698-0-tps-1613-926.jpg)
  
- **\u5B89\u5168\u9632\u62A4\u7F51\u5173**:

  Higress \u53EF\u4EE5\u4F5C\u4E3A\u5B89\u5168\u9632\u62A4\u7F51\u5173\uFF0C \u63D0\u4F9B WAF \u7684\u80FD\u529B\uFF0C\u5E76\u4E14\u652F\u6301\u591A\u79CD\u8BA4\u8BC1\u9274\u6743\u7B56\u7565\uFF0C\u4F8B\u5982 key-auth, hmac-auth, jwt-auth, basic-auth, oidc \u7B49\u3002  
`},o=function(){return e},p=function(){return[{depth:2,slug:"higress-\u7B80\u4ECB",text:"Higress \u7B80\u4ECB"},{depth:3,slug:"\u4EC0\u4E48\u662F-ai-\u7F51\u5173",text:"\u4EC0\u4E48\u662F AI \u7F51\u5173"},{depth:2,slug:"\u6838\u5FC3\u4F18\u52BF",text:"\u6838\u5FC3\u4F18\u52BF"},{depth:2,slug:"\u4F7F\u7528\u573A\u666F",text:"\u4F7F\u7528\u573A\u666F"}]},s=g((b,P,d)=>{const{layout:f,...a}=t;return a.file=r,a.url=i,I`${c()}${h(e)}`})});export{s as Content,u as __tla,o as compiledContent,s as default,r as file,t as frontmatter,p as getHeadings,n as rawContent,i as url};
