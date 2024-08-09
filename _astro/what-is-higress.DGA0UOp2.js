import{c as p,__tla as l}from"./astro-component.DeDyO-JF.js";import{r as m,m as c,u as h,__tla as u}from"./constant.BGsTlgYa.js";import{__tla as I}from"./astro/assets-service.B3vdYoe2.js";let e,n,r,i,o,a,t,d=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return I}catch{}})()]).then(async()=>{let s;s=`<p>Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90Istio + Envoy\u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301Ingress\u4E0EGateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01iO9ph825juHbOIg75_!!6000000007563-2-tps-2483-2024.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="\u4F20\u7EDF\u7F51\u5173\u5206\u7C7B">\u4F20\u7EDF\u7F51\u5173\u5206\u7C7B</h2>
<p>\u884C\u4E1A\u4E2D\u901A\u5E38\u628A\u7F51\u5173\u5206\u4E3A\u4E24\u4E2A\u5927\u7C7B\uFF1A\u6D41\u91CF\u7F51\u5173\u4E0E\u4E1A\u52A1\u7F51\u5173\uFF0C\u6D41\u91CF\u7F51\u5173\u4E3B\u8981\u63D0\u4F9B\u5168\u5C40\u6027\u7684\u3001\u4E0E\u540E\u7AEF\u4E1A\u52A1\u65E0\u5173\u7684\u7B56\u7565\u914D\u7F6E\uFF0C\u4F8B\u5982\u963F\u91CC\u5185\u90E8\u7684\u7684\u7EDF\u4E00\u63A5\u5165\u7F51\u5173Tengine\u5C31\u662F\u5178\u578B\u7684\u6D41\u91CF\u7F51\u5173\uFF1B\u4E1A\u52A1\u7F51\u5173\u987E\u540D\u601D\u4E49\u4E3B\u8981\u63D0\u4F9B\u72EC\u7ACB\u4E1A\u52A1\u57DF\u7EA7\u522B\u7684\u3001\u4E0E\u540E\u7AEF\u4E1A\u52A1\u7D27\u8026\u5408\u7B56\u7565\u914D\u7F6E\uFF0C\u968F\u7740\u5E94\u7528\u67B6\u6784\u6A21\u5F0F\u4ECE\u5355\u4F53\u6F14\u8FDB\u5230\u73B0\u5728\u7684\u5206\u5E03\u5F0F\u5FAE\u670D\u52A1\uFF0C\u4E1A\u52A1\u7F51\u5173\u4E5F\u6709\u4E86\u65B0\u7684\u53EB\u6CD5 - \u5FAE\u670D\u52A1\u7F51\u5173\uFF08\u56FE\u793A\u8BF4\u660E\u5982\u4E0B\uFF09\u3002\u5728\u76EE\u524D\u5BB9\u5668\u6280\u672F\u4E0EK8s\u4E3B\u5BFC\u7684\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u4E0B\u4E00\u4EE3\u7F51\u5173\u6A21\u5F0F\u4F9D\u7136\u662F\u8FD9\u6837\u5417\uFF1F</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01b5lrN41VXF7SzQtWU_!!6000000002662-0-tps-2116-974.jpg" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="higress\u5B9A\u4F4D">Higress\u5B9A\u4F4D</h2>
<p>\u5728\u865A\u62DF\u5316\u65F6\u671F\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\uFF0C\u4E1A\u52A1\u901A\u5E38\u91C7\u7528\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173\u7684\u4E24\u5C42\u67B6\u6784\uFF0C\u6D41\u91CF\u7F51\u5173\u8D1F\u8D23\u5357\u5317\u5411\u6D41\u91CF\u8C03\u5EA6\u548C\u5B89\u5168\u9632\u62A4\uFF0C\u5FAE\u670D\u52A1\u7F51\u5173\u8D1F\u8D23\u4E1C\u897F\u5411\u6D41\u91CF\u8C03\u5EA6\u548C\u670D\u52A1\u6CBB\u7406\uFF0C\u800C\u5728\u5BB9\u5668\u548C K8s \u4E3B\u5BFC\u7684\u4E91\u539F\u751F\u65F6\u4EE3\uFF0CIngress \u6210\u4E3A K8s \u751F\u6001\u7684\u7F51\u5173\u6807\u51C6\uFF0C\u8D4B\u4E88\u4E86\u7F51\u5173\u65B0\u7684\u4F7F\u547D\uFF0C\u4F7F\u5F97\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173\u5408\u4E8C\u4E3A\u4E00\u6210\u4E3A\u53EF\u80FD\u3002</p>
<p>\u4F5C\u4E3A\u9762\u5411\u5357\u5317\u5411\u7684\u516C\u7F51\u7F51\u5173\uFF0C\u4F7F\u7528Waf\u9632\u62A4\u5F02\u5E38\u6D41\u91CF\u662F\u5F88\u5E38\u89C4\u7684\u9700\u6C42\uFF0C\u800C\u4E14\u968F\u7740\u4E92\u8054\u7F51\u73AF\u5883\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u7528\u6237\u5BF9\u9632\u62A4\u7684\u8BC9\u6C42\u662F\u6301\u7EED\u589E\u5F3A\u7684\uFF0C\u5E38\u89C4\u505A\u6CD5\u662F\u5C06\u6D41\u91CF\u5148\u63A5\u5165Waf\u5B89\u5168\u7F51\u5173\uFF0C\u8FC7\u6EE4\u540E\u518D\u5C06\u6D41\u91CF\u8F6C\u53D1\u7ED9\u6D41\u91CF\u7F51\u5173\uFF0C\u6700\u540E\u5230\u8FBE\u5FAE\u670D\u52A1\u7F51\u5173\uFF1BHigress\u5E0C\u671B\u901A\u8FC7\u5185\u7F6EWaf\u6A21\u5757\uFF0C\u4F7F\u5F97\u7528\u6237\u7684\u8BF7\u6C42\u94FE\u63A5\u53EA\u7ECF\u8FC7Higress\u5C31\u53EF\u4EE5\u540C\u65F6\u5B8C\u6210Waf\u9632\u62A4\u3001\u6D41\u91CF\u5206\u53D1\u3001\u5FAE\u670D\u52A1\u6CBB\u7406\uFF0C\u65E2\u53EF\u4EE5\u964D\u4F4E\u94FE\u8DEFRT\uFF0C\u4E5F\u53EF\u4EE5\u964D\u4F4E\u7F51\u5173\u7684\u8FD0\u7EF4\u590D\u6742\u5EA6\u3002\u56E0\u6B64Higress\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01B8h0j41nGRfxtGWfB_!!6000000005062-0-tps-2114-1004.jpg" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="higress\u4E3A\u4EC0\u4E48\u9009\u62E9\u4EE5envoy--istio\u4E3A\u5185\u6838\u6784\u5EFA">Higress\u4E3A\u4EC0\u4E48\u9009\u62E9\u4EE5Envoy + Istio\u4E3A\u5185\u6838\u6784\u5EFA?</h2>
<p>\u5728\u5BB9\u5668\u5316\u7684\u4E91\u539F\u751F\u5927\u80CC\u666F\u4E0B\uFF0CKubernetes\u5DF2\u7ECF\u6210\u4E3A\u4E86\u57FA\u7840\u8BBE\u65BD\u4E0E\u4E0A\u5C42\u5E94\u7528\u7684\u6807\u51C6\u63A5\u53E3\uFF0CKubernetes\u96C6\u7FA4\u5929\u7136\u7684\u5185\u5916\u7F51\u7EDC\u9694\u79BB\u73AF\u5883\uFF0C\u4F7F\u5F97\u5916\u90E8\u6D41\u91CF\u8FDB\u5165Kubernetes\u96C6\u7FA4\u5185\u90E8\u9700\u8981\u901A\u8FC7\u5165\u53E3\u7F51\u5173\uFF0C\u56E0\u6B64Kubernetes\u901A\u8FC7Ingress\u6765\u89C4\u8303\u5316\u5165\u53E3\u7F51\u5173\u7684\u5B9A\u4E49\u4E0E\u6807\u51C6\uFF0C\u867D\u7136Ingress\u6807\u51C6\u5B58\u5728\u4E00\u4E9B\u5982\u8DEF\u7531\u8868\u8FBE\u80FD\u529B\u5F31\u7B49\u4E0D\u8DB3\u4E4B\u5904\uFF0C\u793E\u533A\u5DF2\u7ECF\u5728\u79EF\u6781\u63A8\u8FDBGateway API\u6807\u51C6\u5B9A\u4E49\u6765\u89E3\u51B3\uFF0C\u4F46\u4E0D\u53EF\u5426\u8BA4\u7684\u662F\u76EE\u524DIngress\u6807\u51C6\u4ECD\u7136\u5360\u636E\u4E3B\u6D41\uFF0CCNCF\u5E74\u5EA6\u62A5\u544A\u4E2D\u4E5F\u5355\u72EC\u7EDF\u8BA1\u4E86Ingress Provider\uFF08Ingress\u6807\u51C6\u7684\u5B9E\u73B0\u65B9\u7EDF\u79F0\u4E3AIngress Provider\uFF09\u7684\u4F7F\u7528\u60C5\u51B5\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01S99fCF1VBG6dqsXoM_!!6000000002614-0-tps-2194-794.jpg" alt="image" referrerpolicy="no-referrer"></p>
<p>\u4ECE\u4E0A\u8FF0\u7EDF\u8BA1\u62A5\u544A\u4E2D\u53EF\u4EE5\u770B\u5230\u867D\u7136\u76EE\u524DNginx Ingress\u4ECD\u7136\u5360\u636EK8s Ingress Provider\u699C\u9996\uFF0C\u4F46Envoy\u7684\u589E\u957F\u662F\u6700\u5FEB\u7684\uFF0C\u5DF2\u7ECF\u4ECE2019\u5E74\u7684\u4E0D\u8DB320%\u589E\u957F\u4E3A2020\u5E74\u768437%\uFF0C\u4E14\u4EC5\u5728Nginx Ingress\u4E4B\u540E\uFF0C\u589E\u957F\u52BF\u5934\u975E\u5E38\u8FC5\u731B\uFF0C\u8FD9\u8BF4\u660E\u9009\u62E9\u4EE5Envoy\u4E3A\u5185\u6838\u662F\u7B26\u5408\u4E91\u539F\u751F\u53D1\u5C55\u8D8B\u52BF\u7684\uFF1B\u800C\u4E14\u968F\u7740Service Mesh\u9010\u6B65\u88AB\u5927\u4F17\u8BA4\u53EF\uFF0CIstio + Envoy\u7684\u4F53\u7CFB\u53EF\u4EE5\u540C\u65F6\u8986\u76D6Mesh\u4E0EIngress\u9886\u57DF\uFF0C\u5B9E\u73B0\u4EE5\u4E00\u5957\u6280\u672F\u67B6\u6784\u8C03\u5EA6\u4E1C\u897F\u5411\u3001\u5357\u5317\u5411\u5168\u57DF\u6D41\u91CF\u7684\u76EE\u6807\uFF0C\u8FD9\u5BF9\u7528\u6237\u6765\u8BF4\u4E5F\u662F\u975E\u5E38\u6709\u610F\u4E49\u7684\u3002</p>
<h2 id="higress\u5728\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u4ECB\u7ECD">Higress\u5728\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u4ECB\u7ECD</h2>
<p>Higress\u5B75\u5316\u81EA\u963F\u91CC\u5DF4\u5DF4\u5185\u90E82020\u5E745\u6708\u7684\u201D\u672C\u5730\u751F\u6D3B\u6218\u5F79\u201D\uFF0C\u6700\u521D\u662F\u4E3A\u6EE1\u8DB3\u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2\u4E0E\u8682\u8681\u96C6\u56E2\u76F4\u63A5\u4F7F\u7528RPC\u8BF7\u6C42\u4E92\u8BBF\u7684\u8BC9\u6C42\u800C\u6784\u5EFA\uFF0C\u800C\u4E14\u501F\u8BE5\u9879\u76EE\u4E5F\u6210\u529F\u5B75\u5316\u4E86Dubbo 3.0\u7684Triple\u534F\u8BAE\uFF0C\u56E0\u6B64Higress\u4E5F\u662F\u5185\u90E8\u7B2C\u4E00\u4E2A\u652F\u6301Triple\u534F\u8BAE\u7684\u5E94\u7528\uFF0C\u540C\u5E74Higress\u4E5F\u6210\u529F\u652F\u6301\u4E86\u53CC11\u3001\u53CC12\u7B49\u5927\u4FC3\u6D3B\u52A8\uFF0C\u540E\u7EED\u968F\u7740\u4E1A\u52A1\u8303\u56F4\u7684\u6269\u5C55\uFF0C\u76EE\u524DHigress\u5728\u5185\u90E8\u5DF2\u7ECF\u652F\u6301\u4F18\u9177\u3001\u9489\u9489\u3001\u8FBE\u6469\u9662\u3001\u8682\u8681\u7B49\u4E1A\u52A1\uFF0C\u4E1A\u52A1\u573A\u666F\u4E5F\u6269\u5C55\u5230\u4E86\u4E1C\u897F\u5411\u3001\u5357\u5317\u5411\u7684\u5168\u57DF\u6D41\u91CF\u8C03\u5EA6\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01x3Ap5B1SEW4rltAQ7_!!6000000002215-0-tps-2398-1220.jpg" alt="image" referrerpolicy="no-referrer"></p>`,i={title:"Higress\u662F\u4EC0\u4E48?",keywords:["Higress"],description:"Higress\u662F\u4EC0\u4E48",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/what-is-higress.md"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/overview/what-is-higress.md",t=void 0,a=function(){return`

# Higress\u662F\u4EC0\u4E48?

Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90Istio + Envoy\u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301Ingress\u4E0EGateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002

![image](https://img.alicdn.com/imgextra/i1/O1CN01iO9ph825juHbOIg75_!!6000000007563-2-tps-2483-2024.png)

## \u4F20\u7EDF\u7F51\u5173\u5206\u7C7B

\u884C\u4E1A\u4E2D\u901A\u5E38\u628A\u7F51\u5173\u5206\u4E3A\u4E24\u4E2A\u5927\u7C7B\uFF1A\u6D41\u91CF\u7F51\u5173\u4E0E\u4E1A\u52A1\u7F51\u5173\uFF0C\u6D41\u91CF\u7F51\u5173\u4E3B\u8981\u63D0\u4F9B\u5168\u5C40\u6027\u7684\u3001\u4E0E\u540E\u7AEF\u4E1A\u52A1\u65E0\u5173\u7684\u7B56\u7565\u914D\u7F6E\uFF0C\u4F8B\u5982\u963F\u91CC\u5185\u90E8\u7684\u7684\u7EDF\u4E00\u63A5\u5165\u7F51\u5173Tengine\u5C31\u662F\u5178\u578B\u7684\u6D41\u91CF\u7F51\u5173\uFF1B\u4E1A\u52A1\u7F51\u5173\u987E\u540D\u601D\u4E49\u4E3B\u8981\u63D0\u4F9B\u72EC\u7ACB\u4E1A\u52A1\u57DF\u7EA7\u522B\u7684\u3001\u4E0E\u540E\u7AEF\u4E1A\u52A1\u7D27\u8026\u5408\u7B56\u7565\u914D\u7F6E\uFF0C\u968F\u7740\u5E94\u7528\u67B6\u6784\u6A21\u5F0F\u4ECE\u5355\u4F53\u6F14\u8FDB\u5230\u73B0\u5728\u7684\u5206\u5E03\u5F0F\u5FAE\u670D\u52A1\uFF0C\u4E1A\u52A1\u7F51\u5173\u4E5F\u6709\u4E86\u65B0\u7684\u53EB\u6CD5 - \u5FAE\u670D\u52A1\u7F51\u5173\uFF08\u56FE\u793A\u8BF4\u660E\u5982\u4E0B\uFF09\u3002\u5728\u76EE\u524D\u5BB9\u5668\u6280\u672F\u4E0EK8s\u4E3B\u5BFC\u7684\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u4E0B\u4E00\u4EE3\u7F51\u5173\u6A21\u5F0F\u4F9D\u7136\u662F\u8FD9\u6837\u5417\uFF1F

![image](https://img.alicdn.com/imgextra/i2/O1CN01b5lrN41VXF7SzQtWU_!!6000000002662-0-tps-2116-974.jpg)

## Higress\u5B9A\u4F4D

\u5728\u865A\u62DF\u5316\u65F6\u671F\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\uFF0C\u4E1A\u52A1\u901A\u5E38\u91C7\u7528\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173\u7684\u4E24\u5C42\u67B6\u6784\uFF0C\u6D41\u91CF\u7F51\u5173\u8D1F\u8D23\u5357\u5317\u5411\u6D41\u91CF\u8C03\u5EA6\u548C\u5B89\u5168\u9632\u62A4\uFF0C\u5FAE\u670D\u52A1\u7F51\u5173\u8D1F\u8D23\u4E1C\u897F\u5411\u6D41\u91CF\u8C03\u5EA6\u548C\u670D\u52A1\u6CBB\u7406\uFF0C\u800C\u5728\u5BB9\u5668\u548C K8s \u4E3B\u5BFC\u7684\u4E91\u539F\u751F\u65F6\u4EE3\uFF0CIngress \u6210\u4E3A K8s \u751F\u6001\u7684\u7F51\u5173\u6807\u51C6\uFF0C\u8D4B\u4E88\u4E86\u7F51\u5173\u65B0\u7684\u4F7F\u547D\uFF0C\u4F7F\u5F97\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173\u5408\u4E8C\u4E3A\u4E00\u6210\u4E3A\u53EF\u80FD\u3002

\u4F5C\u4E3A\u9762\u5411\u5357\u5317\u5411\u7684\u516C\u7F51\u7F51\u5173\uFF0C\u4F7F\u7528Waf\u9632\u62A4\u5F02\u5E38\u6D41\u91CF\u662F\u5F88\u5E38\u89C4\u7684\u9700\u6C42\uFF0C\u800C\u4E14\u968F\u7740\u4E92\u8054\u7F51\u73AF\u5883\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u7528\u6237\u5BF9\u9632\u62A4\u7684\u8BC9\u6C42\u662F\u6301\u7EED\u589E\u5F3A\u7684\uFF0C\u5E38\u89C4\u505A\u6CD5\u662F\u5C06\u6D41\u91CF\u5148\u63A5\u5165Waf\u5B89\u5168\u7F51\u5173\uFF0C\u8FC7\u6EE4\u540E\u518D\u5C06\u6D41\u91CF\u8F6C\u53D1\u7ED9\u6D41\u91CF\u7F51\u5173\uFF0C\u6700\u540E\u5230\u8FBE\u5FAE\u670D\u52A1\u7F51\u5173\uFF1BHigress\u5E0C\u671B\u901A\u8FC7\u5185\u7F6EWaf\u6A21\u5757\uFF0C\u4F7F\u5F97\u7528\u6237\u7684\u8BF7\u6C42\u94FE\u63A5\u53EA\u7ECF\u8FC7Higress\u5C31\u53EF\u4EE5\u540C\u65F6\u5B8C\u6210Waf\u9632\u62A4\u3001\u6D41\u91CF\u5206\u53D1\u3001\u5FAE\u670D\u52A1\u6CBB\u7406\uFF0C\u65E2\u53EF\u4EE5\u964D\u4F4E\u94FE\u8DEFRT\uFF0C\u4E5F\u53EF\u4EE5\u964D\u4F4E\u7F51\u5173\u7684\u8FD0\u7EF4\u590D\u6742\u5EA6\u3002\u56E0\u6B64Higress\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\u3002

![image](https://img.alicdn.com/imgextra/i1/O1CN01B8h0j41nGRfxtGWfB_!!6000000005062-0-tps-2114-1004.jpg)



## Higress\u4E3A\u4EC0\u4E48\u9009\u62E9\u4EE5Envoy + Istio\u4E3A\u5185\u6838\u6784\u5EFA?

\u5728\u5BB9\u5668\u5316\u7684\u4E91\u539F\u751F\u5927\u80CC\u666F\u4E0B\uFF0CKubernetes\u5DF2\u7ECF\u6210\u4E3A\u4E86\u57FA\u7840\u8BBE\u65BD\u4E0E\u4E0A\u5C42\u5E94\u7528\u7684\u6807\u51C6\u63A5\u53E3\uFF0CKubernetes\u96C6\u7FA4\u5929\u7136\u7684\u5185\u5916\u7F51\u7EDC\u9694\u79BB\u73AF\u5883\uFF0C\u4F7F\u5F97\u5916\u90E8\u6D41\u91CF\u8FDB\u5165Kubernetes\u96C6\u7FA4\u5185\u90E8\u9700\u8981\u901A\u8FC7\u5165\u53E3\u7F51\u5173\uFF0C\u56E0\u6B64Kubernetes\u901A\u8FC7Ingress\u6765\u89C4\u8303\u5316\u5165\u53E3\u7F51\u5173\u7684\u5B9A\u4E49\u4E0E\u6807\u51C6\uFF0C\u867D\u7136Ingress\u6807\u51C6\u5B58\u5728\u4E00\u4E9B\u5982\u8DEF\u7531\u8868\u8FBE\u80FD\u529B\u5F31\u7B49\u4E0D\u8DB3\u4E4B\u5904\uFF0C\u793E\u533A\u5DF2\u7ECF\u5728\u79EF\u6781\u63A8\u8FDBGateway API\u6807\u51C6\u5B9A\u4E49\u6765\u89E3\u51B3\uFF0C\u4F46\u4E0D\u53EF\u5426\u8BA4\u7684\u662F\u76EE\u524DIngress\u6807\u51C6\u4ECD\u7136\u5360\u636E\u4E3B\u6D41\uFF0CCNCF\u5E74\u5EA6\u62A5\u544A\u4E2D\u4E5F\u5355\u72EC\u7EDF\u8BA1\u4E86Ingress Provider\uFF08Ingress\u6807\u51C6\u7684\u5B9E\u73B0\u65B9\u7EDF\u79F0\u4E3AIngress Provider\uFF09\u7684\u4F7F\u7528\u60C5\u51B5\u3002

![image](https://img.alicdn.com/imgextra/i2/O1CN01S99fCF1VBG6dqsXoM_!!6000000002614-0-tps-2194-794.jpg)

\u4ECE\u4E0A\u8FF0\u7EDF\u8BA1\u62A5\u544A\u4E2D\u53EF\u4EE5\u770B\u5230\u867D\u7136\u76EE\u524DNginx Ingress\u4ECD\u7136\u5360\u636EK8s Ingress Provider\u699C\u9996\uFF0C\u4F46Envoy\u7684\u589E\u957F\u662F\u6700\u5FEB\u7684\uFF0C\u5DF2\u7ECF\u4ECE2019\u5E74\u7684\u4E0D\u8DB320%\u589E\u957F\u4E3A2020\u5E74\u768437%\uFF0C\u4E14\u4EC5\u5728Nginx Ingress\u4E4B\u540E\uFF0C\u589E\u957F\u52BF\u5934\u975E\u5E38\u8FC5\u731B\uFF0C\u8FD9\u8BF4\u660E\u9009\u62E9\u4EE5Envoy\u4E3A\u5185\u6838\u662F\u7B26\u5408\u4E91\u539F\u751F\u53D1\u5C55\u8D8B\u52BF\u7684\uFF1B\u800C\u4E14\u968F\u7740Service Mesh\u9010\u6B65\u88AB\u5927\u4F17\u8BA4\u53EF\uFF0CIstio + Envoy\u7684\u4F53\u7CFB\u53EF\u4EE5\u540C\u65F6\u8986\u76D6Mesh\u4E0EIngress\u9886\u57DF\uFF0C\u5B9E\u73B0\u4EE5\u4E00\u5957\u6280\u672F\u67B6\u6784\u8C03\u5EA6\u4E1C\u897F\u5411\u3001\u5357\u5317\u5411\u5168\u57DF\u6D41\u91CF\u7684\u76EE\u6807\uFF0C\u8FD9\u5BF9\u7528\u6237\u6765\u8BF4\u4E5F\u662F\u975E\u5E38\u6709\u610F\u4E49\u7684\u3002



## Higress\u5728\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u4ECB\u7ECD

Higress\u5B75\u5316\u81EA\u963F\u91CC\u5DF4\u5DF4\u5185\u90E82020\u5E745\u6708\u7684"\u672C\u5730\u751F\u6D3B\u6218\u5F79"\uFF0C\u6700\u521D\u662F\u4E3A\u6EE1\u8DB3\u963F\u91CC\u5DF4\u5DF4\u96C6\u56E2\u4E0E\u8682\u8681\u96C6\u56E2\u76F4\u63A5\u4F7F\u7528RPC\u8BF7\u6C42\u4E92\u8BBF\u7684\u8BC9\u6C42\u800C\u6784\u5EFA\uFF0C\u800C\u4E14\u501F\u8BE5\u9879\u76EE\u4E5F\u6210\u529F\u5B75\u5316\u4E86Dubbo 3.0\u7684Triple\u534F\u8BAE\uFF0C\u56E0\u6B64Higress\u4E5F\u662F\u5185\u90E8\u7B2C\u4E00\u4E2A\u652F\u6301Triple\u534F\u8BAE\u7684\u5E94\u7528\uFF0C\u540C\u5E74Higress\u4E5F\u6210\u529F\u652F\u6301\u4E86\u53CC11\u3001\u53CC12\u7B49\u5927\u4FC3\u6D3B\u52A8\uFF0C\u540E\u7EED\u968F\u7740\u4E1A\u52A1\u8303\u56F4\u7684\u6269\u5C55\uFF0C\u76EE\u524DHigress\u5728\u5185\u90E8\u5DF2\u7ECF\u652F\u6301\u4F18\u9177\u3001\u9489\u9489\u3001\u8FBE\u6469\u9662\u3001\u8682\u8681\u7B49\u4E1A\u52A1\uFF0C\u4E1A\u52A1\u573A\u666F\u4E5F\u6269\u5C55\u5230\u4E86\u4E1C\u897F\u5411\u3001\u5357\u5317\u5411\u7684\u5168\u57DF\u6D41\u91CF\u8C03\u5EA6\u3002

![image](https://img.alicdn.com/imgextra/i4/O1CN01x3Ap5B1SEW4rltAQ7_!!6000000002215-0-tps-2398-1220.jpg)
`},n=function(){return s},o=function(){return[{depth:2,slug:"\u4F20\u7EDF\u7F51\u5173\u5206\u7C7B",text:"\u4F20\u7EDF\u7F51\u5173\u5206\u7C7B"},{depth:2,slug:"higress\u5B9A\u4F4D",text:"Higress\u5B9A\u4F4D"},{depth:2,slug:"higress\u4E3A\u4EC0\u4E48\u9009\u62E9\u4EE5envoy--istio\u4E3A\u5185\u6838\u6784\u5EFA",text:"Higress\u4E3A\u4EC0\u4E48\u9009\u62E9\u4EE5Envoy + Istio\u4E3A\u5185\u6838\u6784\u5EFA?"},{depth:2,slug:"higress\u5728\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u4ECB\u7ECD",text:"Higress\u5728\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u4ECB\u7ECD"}]},e=p((H,f,y)=>{const{layout:_,...g}=i;return g.file=r,g.url=t,m`${c()}${h(s)}`})});export{e as Content,d as __tla,n as compiledContent,e as default,r as file,i as frontmatter,o as getHeadings,a as rawContent,t as url};
