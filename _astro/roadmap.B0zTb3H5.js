import{c as v,__tla as u}from"./astro-component.DeDyO-JF.js";import{r as p,m as l,u as c,__tla as h}from"./constant.BLb3VGiE.js";import{__tla as g}from"./astro/assets-service.B3vdYoe2.js";let r,a,d,e,n,i,s,m=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let t;t=`


























































<table><thead><tr><th>\u7248\u672C\u53F7</th><th>\u7248\u672C\u6838\u5FC3\u76EE\u6807</th><th>\u9884\u8BA1\u53D1\u5E03\u65F6\u95F4</th><th>\u4F01\u4E1A\u7248\u7684\u7248\u672C\u6620\u5C04</th></tr></thead><tbody><tr><td>v0.6.0</td><td>K8s \u4E0B\u9ED1\u5C4F\u64CD\u4F5C(kubectl)\u8FBE\u5230<strong>GA\u72B6\u6001</strong>\uFF1B\u53D1\u5E03\u63A7\u5236\u53F0\u9884\u89C8\u7248\uFF0C\u63D0\u9AD8\u5B89\u88C5\u90E8\u7F72\u7684\u6613\u7528\u6027</td><td>2023-01</td><td>1.1.x</td></tr><tr><td>v0.7.0</td><td>\u63A7\u5236\u53F0\u53D1\u5E03\u6B63\u5F0F\u7248\u672C\uFF0C\u96C6\u6210\u5F00\u7BB1\u5373\u7528\u7684\u53EF\u89C2\u6D4B</td><td>2023-02</td><td>1.1.x</td></tr><tr><td>v1.0.0</td><td>\u6574\u4F53\u8FBE\u5230<strong>GA\u72B6\u6001</strong></td><td>2023-05</td><td>1.2.x</td></tr><tr><td>v1.1.0</td><td>\u589E\u5F3A\u63A7\u5236\u53F0\u529F\u80FD\u4E2D\u5FAE\u670D\u52A1\u7F51\u5173\u76F8\u5173\u80FD\u529B\uFF1B\u652F\u6301\u975E K8s \u4E0B\u5B89\u88C5\u90E8\u7F72</td><td>2023-07</td><td>1.2.x</td></tr><tr><td>v1.2.0</td><td>\u652F\u6301\u4F5C\u4E3A Knative \u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\uFF1B\u652F\u6301 ARM \u67B6\u6784\u90E8\u7F72\uFF1B\u652F\u6301\u5BF9\u63A5 Consul</td><td>2023-08</td><td>1.2.x</td></tr><tr><td>v1.3.0</td><td>\u5B8C\u6574\u652F\u6301 GatewayAPI\uFF1B\u652F\u6301 Operator \u6A21\u5F0F\u90E8\u7F72</td><td>2023-11</td><td>1.2.x</td></tr><tr><td>v1.4.0</td><td>WASM \u652F\u6301 redis \u8C03\u7528\uFF1B\u7B80\u5316 HTTPS \u8BC1\u4E66\u7BA1\u7406</td><td>2024-05</td><td>1.2.x</td></tr><tr><td>v2.0.0</td><td>Istio/Envoy \u5185\u6838\u7248\u672C\u5347\u7EA7\uFF0C\u66F4\u4E30\u5BCC\u7684 API \u7F51\u5173\u80FD\u529B</td><td>2024-08</td><td>2.0.x</td></tr></tbody></table>
<blockquote>
<p><strong>\u6CE8\u610F</strong></p>
<p>Higress \u4F01\u4E1A\u7248\u548C\u5F00\u6E90\u7248\u4F7F\u7528\u76F8\u540C\u7684\u6838\u5FC3\u903B\u8F91\uFF0C\u4F46\u8FED\u4EE3\u8282\u594F\u4E0D\u540C\uFF0C\u6240\u4EE5\u7248\u672C\u53F7\u4E0A\u4F1A\u6709\u5DEE\u5F02\u3002</p>
<p>\u4ECE Higress v2.0.0 \u5F00\u59CB\uFF0C\u4F01\u4E1A\u7248\u548C\u5F00\u6E90\u7248\u7684\u7248\u672C\u6709\u4E86\u66F4\u597D\u7684\u5BF9\u9F50\u673A\u5236\uFF1A</p>
<p>\u57FA\u4E8E<a href="https://semver.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303</a>\uFF0C\u53EF\u4EE5\u786E\u4FDD\u5F00\u6E90\u548C\u4F01\u4E1A\u7248\u672C\u7684 major version \u548C minor version \u5B8C\u5168\u4E00\u81F4\u6620\u5C04\uFF0C\u4F46 patch version \u5C06\u6709\u5DEE\u5F02\uFF0C\u4F8B\u5982\uFF1A</p>
<p>Higress \u4F01\u4E1A\u7248\u53D1\u5E03\u4E86 v2.1.x\uFF0C\u5F00\u6E90\u7248\u53D1\u5E03 v2.1.x \u65F6\u4E5F\u5C06\u5E26\u4E0A\u5BF9\u5E94\u7248\u672C\u7684\u6838\u5FC3\u529F\u80FD\u7279\u6027\uFF1B</p>
<p>\u800C patch version \u610F\u5473\u7740\u4E00\u4E9B\u5C0F\u7684\u4FEE\u590D\uFF0C\u5F00\u6E90\u548C\u4F01\u4E1A\u7248\u7684\u7248\u672C\u4E0D\u662F\u5B8C\u5168\u5BF9\u9F50\u7684\uFF0C\u4F8B\u5982\uFF1A</p>
<p>\u5F00\u6E90\u7248\u540E\u7EED\u53D1\u5E03\u4E86\u7248\u672C\u4ECE v2.1.1 \u5230 v2.1.10\uFF0C\u800C\u4F01\u4E1A\u7248\u53D1\u5E03\u4E86\u4ECE v2.1.1 \u5230 v2.1.3\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u5177\u4F53\u5C0F\u7248\u672C\uFF0C\u4E8C\u8005\u4E4B\u95F4\u4E0D\u4FDD\u8BC1\u5B8C\u5168\u5BF9\u9F50\u3002</p>
</blockquote>`,e={title:"\u7248\u672C\u8BA1\u5212",keywords:["Higress","roadmap"],description:"Higress \u7248\u672C\u8BA1\u5212.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/roadmap.md"},d="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/overview/roadmap.md",s=void 0,i=function(){return`
# \u7248\u672C\u8BA1\u5212

| \u7248\u672C\u53F7  | \u7248\u672C\u6838\u5FC3\u76EE\u6807 | \u9884\u8BA1\u53D1\u5E03\u65F6\u95F4 | \u4F01\u4E1A\u7248\u7684\u7248\u672C\u6620\u5C04 |
| ------- | -----------  | -----------  |  -----------  |  
| v0.6.0  | K8s \u4E0B\u9ED1\u5C4F\u64CD\u4F5C(kubectl)\u8FBE\u5230**GA\u72B6\u6001**\uFF1B\u53D1\u5E03\u63A7\u5236\u53F0\u9884\u89C8\u7248\uFF0C\u63D0\u9AD8\u5B89\u88C5\u90E8\u7F72\u7684\u6613\u7528\u6027   | 2023-01   | 1.1.x  | 
| v0.7.0  | \u63A7\u5236\u53F0\u53D1\u5E03\u6B63\u5F0F\u7248\u672C\uFF0C\u96C6\u6210\u5F00\u7BB1\u5373\u7528\u7684\u53EF\u89C2\u6D4B   | 2023-02   |  1.1.x  | 
| v1.0.0  | \u6574\u4F53\u8FBE\u5230**GA\u72B6\u6001**   | 2023-05   | 1.2.x  | 
| v1.1.0  | \u589E\u5F3A\u63A7\u5236\u53F0\u529F\u80FD\u4E2D\u5FAE\u670D\u52A1\u7F51\u5173\u76F8\u5173\u80FD\u529B\uFF1B\u652F\u6301\u975E K8s \u4E0B\u5B89\u88C5\u90E8\u7F72   | 2023-07   | 1.2.x  | 
| v1.2.0  | \u652F\u6301\u4F5C\u4E3A Knative \u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\uFF1B\u652F\u6301 ARM \u67B6\u6784\u90E8\u7F72\uFF1B\u652F\u6301\u5BF9\u63A5 Consul   | 2023-08   | 1.2.x  | 
| v1.3.0  | \u5B8C\u6574\u652F\u6301 GatewayAPI\uFF1B\u652F\u6301 Operator \u6A21\u5F0F\u90E8\u7F72   | 2023-11   | 1.2.x  |  
| v1.4.0  | WASM \u652F\u6301 redis \u8C03\u7528\uFF1B\u7B80\u5316 HTTPS \u8BC1\u4E66\u7BA1\u7406  | 2024-05   | 1.2.x  | 
| v2.0.0  | Istio/Envoy \u5185\u6838\u7248\u672C\u5347\u7EA7\uFF0C\u66F4\u4E30\u5BCC\u7684 API \u7F51\u5173\u80FD\u529B  | 2024-08   | 2.0.x  | 


> **\u6CE8\u610F**
> 
>  Higress \u4F01\u4E1A\u7248\u548C\u5F00\u6E90\u7248\u4F7F\u7528\u76F8\u540C\u7684\u6838\u5FC3\u903B\u8F91\uFF0C\u4F46\u8FED\u4EE3\u8282\u594F\u4E0D\u540C\uFF0C\u6240\u4EE5\u7248\u672C\u53F7\u4E0A\u4F1A\u6709\u5DEE\u5F02\u3002
> 
>  \u4ECE Higress v2.0.0 \u5F00\u59CB\uFF0C\u4F01\u4E1A\u7248\u548C\u5F00\u6E90\u7248\u7684\u7248\u672C\u6709\u4E86\u66F4\u597D\u7684\u5BF9\u9F50\u673A\u5236\uFF1A
> 
>  \u57FA\u4E8E[\u8BED\u4E49\u5316\u7248\u672C\u89C4\u8303](https://semver.org/)\uFF0C\u53EF\u4EE5\u786E\u4FDD\u5F00\u6E90\u548C\u4F01\u4E1A\u7248\u672C\u7684 major version \u548C minor version \u5B8C\u5168\u4E00\u81F4\u6620\u5C04\uFF0C\u4F46 patch version \u5C06\u6709\u5DEE\u5F02\uFF0C\u4F8B\u5982\uFF1A
>
>  Higress \u4F01\u4E1A\u7248\u53D1\u5E03\u4E86 v2.1.x\uFF0C\u5F00\u6E90\u7248\u53D1\u5E03 v2.1.x \u65F6\u4E5F\u5C06\u5E26\u4E0A\u5BF9\u5E94\u7248\u672C\u7684\u6838\u5FC3\u529F\u80FD\u7279\u6027\uFF1B
>
>  \u800C patch version \u610F\u5473\u7740\u4E00\u4E9B\u5C0F\u7684\u4FEE\u590D\uFF0C\u5F00\u6E90\u548C\u4F01\u4E1A\u7248\u7684\u7248\u672C\u4E0D\u662F\u5B8C\u5168\u5BF9\u9F50\u7684\uFF0C\u4F8B\u5982\uFF1A
>
>  \u5F00\u6E90\u7248\u540E\u7EED\u53D1\u5E03\u4E86\u7248\u672C\u4ECE v2.1.1 \u5230 v2.1.10\uFF0C\u800C\u4F01\u4E1A\u7248\u53D1\u5E03\u4E86\u4ECE v2.1.1 \u5230 v2.1.3\uFF0C\u5BF9\u4E8E\u6BCF\u4E2A\u5177\u4F53\u5C0F\u7248\u672C\uFF0C\u4E8C\u8005\u4E4B\u95F4\u4E0D\u4FDD\u8BC1\u5B8C\u5168\u5BF9\u9F50\u3002
`},a=function(){return t},n=function(){return[]},r=v((x,_,b)=>{const{layout:f,...o}=e;return o.file=d,o.url=s,p`${l()}${c(t)}`})});export{r as Content,m as __tla,a as compiledContent,r as default,d as file,e as frontmatter,n as getHeadings,i as rawContent,s as url};
