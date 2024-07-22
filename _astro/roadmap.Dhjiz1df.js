import{c as u,__tla as l}from"./astro-component.DeDyO-JF.js";import{r as c,m as h,u as v,__tla as g}from"./constant.CWuV0I96.js";import{__tla as m}from"./astro/assets-service.B3vdYoe2.js";let r,s,d,e,n,i,o,p=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let t;t=`<h1 id="\u7248\u672C\u8BA1\u5212">\u7248\u672C\u8BA1\u5212</h1>


















































<table><thead><tr><th>\u7248\u672C\u53F7</th><th>\u7248\u672C\u6838\u5FC3\u76EE\u6807</th><th>\u9884\u8BA1\u53D1\u5E03\u65F6\u95F4</th></tr></thead><tbody><tr><td>v0.6.0</td><td>K8s \u4E0B\u9ED1\u5C4F\u64CD\u4F5C(kubectl)\u8FBE\u5230<strong>GA\u72B6\u6001</strong>\uFF1B\u53D1\u5E03\u63A7\u5236\u53F0\u9884\u89C8\u7248\uFF0C\u63D0\u9AD8\u5B89\u88C5\u90E8\u7F72\u7684\u6613\u7528\u6027</td><td>2023-01</td></tr><tr><td>v0.7.0</td><td>\u63A7\u5236\u53F0\u53D1\u5E03\u6B63\u5F0F\u7248\u672C\uFF0C\u96C6\u6210\u5F00\u7BB1\u5373\u7528\u7684\u53EF\u89C2\u6D4B</td><td>2023-02</td></tr><tr><td>v1.0.0</td><td>\u6574\u4F53\u8FBE\u5230<strong>GA\u72B6\u6001</strong></td><td>2023-05</td></tr><tr><td>v1.1.0</td><td>\u589E\u5F3A\u63A7\u5236\u53F0\u529F\u80FD\u4E2D\u5FAE\u670D\u52A1\u7F51\u5173\u76F8\u5173\u80FD\u529B\uFF1B\u652F\u6301\u975E K8s \u4E0B\u5B89\u88C5\u90E8\u7F72</td><td>2023-07</td></tr><tr><td>v1.2.0</td><td>\u652F\u6301\u4F5C\u4E3A Knative \u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\uFF1B\u652F\u6301 ARM \u67B6\u6784\u90E8\u7F72\uFF1B\u652F\u6301\u5BF9\u63A5 Consul</td><td>2023-08</td></tr><tr><td>v1.3.0</td><td>\u5B8C\u6574\u652F\u6301 GatewayAPI\uFF1B\u652F\u6301 Operator \u6A21\u5F0F\u90E8\u7F72</td><td>2023-11</td></tr><tr><td>v1.4.0</td><td>WASM \u652F\u6301 redis \u8C03\u7528\uFF1B\u7B80\u5316 HTTPS \u8BC1\u4E66\u7BA1\u7406</td><td>2024-05</td></tr><tr><td>v2.0.0</td><td>Istio/Envoy \u5185\u6838\u7248\u672C\u5347\u7EA7\uFF0C\u66F4\u4E30\u5BCC\u7684 API \u7F51\u5173\u80FD\u529B</td><td>2024-06</td></tr></tbody></table>`,e={title:"Roadmap",keywords:["Higress","roadmap"],description:"Higress Roadmap.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/roadmap.md"},d="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/overview/roadmap.md",o=void 0,i=function(){return`
# \u7248\u672C\u8BA1\u5212

| \u7248\u672C\u53F7  | \u7248\u672C\u6838\u5FC3\u76EE\u6807 | \u9884\u8BA1\u53D1\u5E03\u65F6\u95F4 |
| ------- | -----------  | -----------  |
| v0.6.0  | K8s \u4E0B\u9ED1\u5C4F\u64CD\u4F5C(kubectl)\u8FBE\u5230**GA\u72B6\u6001**\uFF1B\u53D1\u5E03\u63A7\u5236\u53F0\u9884\u89C8\u7248\uFF0C\u63D0\u9AD8\u5B89\u88C5\u90E8\u7F72\u7684\u6613\u7528\u6027   | 2023-01   |
| v0.7.0  | \u63A7\u5236\u53F0\u53D1\u5E03\u6B63\u5F0F\u7248\u672C\uFF0C\u96C6\u6210\u5F00\u7BB1\u5373\u7528\u7684\u53EF\u89C2\u6D4B   | 2023-02   |
| v1.0.0  | \u6574\u4F53\u8FBE\u5230**GA\u72B6\u6001**   | 2023-05   |
| v1.1.0  | \u589E\u5F3A\u63A7\u5236\u53F0\u529F\u80FD\u4E2D\u5FAE\u670D\u52A1\u7F51\u5173\u76F8\u5173\u80FD\u529B\uFF1B\u652F\u6301\u975E K8s \u4E0B\u5B89\u88C5\u90E8\u7F72   | 2023-07   |
| v1.2.0  | \u652F\u6301\u4F5C\u4E3A Knative \u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\uFF1B\u652F\u6301 ARM \u67B6\u6784\u90E8\u7F72\uFF1B\u652F\u6301\u5BF9\u63A5 Consul   | 2023-08   |
| v1.3.0  | \u5B8C\u6574\u652F\u6301 GatewayAPI\uFF1B\u652F\u6301 Operator \u6A21\u5F0F\u90E8\u7F72   | 2023-11   |
| v1.4.0  | WASM \u652F\u6301 redis \u8C03\u7528\uFF1B\u7B80\u5316 HTTPS \u8BC1\u4E66\u7BA1\u7406  | 2024-05   |
| v2.0.0  | Istio/Envoy \u5185\u6838\u7248\u672C\u5347\u7EA7\uFF0C\u66F4\u4E30\u5BCC\u7684 API \u7F51\u5173\u80FD\u529B  | 2024-06   |
`},s=function(){return t},n=function(){return[{depth:1,slug:"\u7248\u672C\u8BA1\u5212",text:"\u7248\u672C\u8BA1\u5212"}]},r=u((_,b,A)=>{const{layout:y,...a}=e;return a.file=d,a.url=o,c`${h()}${v(t)}`})});export{r as Content,p as __tla,s as compiledContent,r as default,d as file,e as frontmatter,n as getHeadings,i as rawContent,o as url};
