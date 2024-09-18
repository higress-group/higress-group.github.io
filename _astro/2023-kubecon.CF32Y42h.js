import{c as h,__tla as u}from"./astro-component.cI6d52vQ.js";import{r as b,m as c,u as n,__tla as f}from"./constant.CvqqnJGx.js";import{__tla as m}from"./astro/assets-service.Da9pL5MS.js";let e,o,r,i,a,p,g,d=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u5206\u4EAB\u7B80\u4ECB">\u5206\u4EAB\u7B80\u4ECB</h2>
<p>\u57289\u670826\u65E5\u76842023 KubeCon\u963F\u91CC\u4E91\u4E91\u539F\u751F\u5F00\u653E\u65E5\uFF0CHigress\u7684\u5206\u4EAB\u5185\u5BB9\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A</p>
<p>Part 1. \u7531\u4E0A\u6D77\u8D39\u82AE\u7F51\u7EDC\u79D1\u6280\u7CFB\u7EDF\u8FD0\u7EF4\u526F\u603B\u76D1\u6234\u559C\u519B\uFF0C\u5E26\u6765\u8D39\u82AE\u5728\u9009\u578B\u4F01\u4E1A\u7248Higress\u4F5C\u4E3AK8s Ingress\u66FF\u4EE3Nginx Ingress\u7684\u4ECB\u7ECD</p>
<p>Part 2. \u7531Higress\u5F00\u6E90\u793E\u533A\u8D1F\u8D23\u4EBA\u6F84\u6F6D\uFF0C\u5E26\u6765Higress\u5F00\u6E90\u9879\u76EE\u7684\u4ECB\u7ECD</p>
<p>\u5F00\u6E90\u7248\u548C\u4F01\u4E1A\u7248\u662FHigress\u7684\u4E00\u4F53\u4E24\u9762\uFF0C\u901A\u8FC7\u672C\u6B21\u5206\u4EAB\uFF0C\u76F8\u4FE1\u5927\u5BB6\u4F1A\u5BF9Higress\u6709\u66F4\u5168\u9762\u7684\u4E86\u89E3\u3002</p>
<h2 id="part-1-\u8D39\u82AE\u4E92\u52A8\u4F7F\u7528higress\u4F5C\u4E3Akubernetes-ingress\u5B9E\u73B0\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u63D0\u5347">Part 1. \u8D39\u82AE\u4E92\u52A8\u4F7F\u7528Higress\u4F5C\u4E3AKubernetes Ingress\u5B9E\u73B0\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u63D0\u5347</h2>
<p>\u8D39\u82AE\u901A\u8FC7Higress\u89E3\u51B3\u4E86\u539F\u672CNginx Ingress\u7F51\u5173\u7684\u8BF8\u591A\u75DB\u70B9\uFF0C\u6027\u80FD\u63D0\u534790%\uFF0C\u54CD\u5E94\u65F6\u95F4\u4E0B\u964D50%\uFF0C\u5E76\u5927\u5E45\u63D0\u5347\u4E1A\u52A1\u5165\u53E3\u7684\u7A33\u5B9A\u53CA\u5B89\u5168\u6027\uFF0C\u9AD8\u6548\u652F\u6491\u6BCF\u65E51\u4EBF+\u7C89\u4E1D\u4EA4\u4E92\uFF0C 4\u4E07+\u7EBF\u4E0B\u95E8\u5E97\u3001\u6BCF\u67083000\u4E07+\u7B14\u7684\u79FB\u52A8\u652F\u4ED8\u9700\u6C42\u3002</p>
<h3 id="\u8D39\u82AE\u4E1A\u52A1\u573A\u666F">\u8D39\u82AE\u4E1A\u52A1\u573A\u666F</h3>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/0d4f761d-1471-49b6-a03c-38b11304262d" alt="image" referrerpolicy="no-referrer">
<img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/dba8ae2a-93c8-4368-af3d-739f97090d39" alt="image" referrerpolicy="no-referrer"></p>
<p>\u8D39\u82AE\u4E13\u6CE8\u4E8E\u79FB\u52A8\u8425\u9500\u3001O2O\u3001\u793E\u4EA4\u5A92\u4F53\u3001\u79FB\u52A8\u7535\u5546\u9886\u57DF\u7684\u521B\u65B0\u4E0E\u7814\u53D1\u3002\u8D39\u82AE\u4E92\u52A8\u81EA\u4E3B\u7814\u53D1\u7684\u81EA\u5A92\u4F53\u5E73\u53F0\u8FD0\u7EF4\u8D85\u8FC72\u4EBF\u7C89\u4E1D \uFF1B \u6709\u8D85\u8FC74\u4E07\u5BB6\u7EBF\u4E0B\u95E8\u5E97\u91C7\u7528\u8D39\u82AEO2O\u89E3\u51B3\u65B9\u6848\u3002\u8D39\u82AE\u7684\u4E3B\u8981\u5BA2\u6237\u5305\u62EC\u4F18\u8863\u5E93\uFF0C\u5FC5\u80DC\u5BA2\uFF0C\u80AF\u5FB7\u57FA\uFF0C\u661F\u5DF4\u514B\uFF0CSPG\uFF0C\u6B27\u83B1\u96C5\uFF0CInnisfree\uFF0C\u8FEA\u5361\u4FAC\uFF0C\u9876\u65B0\u96C6\u56E2\u7B49\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/61791bae-b40c-4b90-bc4d-c23bc052911c" alt="image" referrerpolicy="no-referrer"></p>
<p>\u8D39\u82AE\u5185\u90E8\u4E1A\u52A1\u7CFB\u7EDF\u7684\u65E5\u5747\u53D1\u5E03\u6B21\u6570\u8FBE\u5230100\u6B21\u4E4B\u591A\uFF0C\u4F1A\u6D89\u53CA\u5230400\u591A\u6761Ingress\u8DEF\u7531\u89C4\u5219\u7684\u65E5\u5E38\u66F4\u65B0\uFF0C\u4E14\u7F51\u5173\u6BCF\u5929\u9700\u8981\u627F\u8F7D\u7684PV\u6D41\u91CF\u8FBE\u5230\u4E861\u4E2A\u4EBF\u3002Ingress\u7F51\u5173\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u81F3\u5173\u91CD\u8981\u3002</p>
<h3 id="nginx-ingress-\u75DB\u70B9">Nginx Ingress \u75DB\u70B9</h3>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/1d8a178e-05de-4114-96b3-7d4e11240374" alt="image" referrerpolicy="no-referrer"></p>
<p>\u914D\u7F6E\u53D8\u66F4\u9891\u7E41\uFF0C\u5BFC\u81F4Nginx\u8FDB\u7A0B\u9891\u7E41\u91CD\u542F\uFF0C\u5927\u91CF\u8FDE\u63A5\u77AC\u65F6\u65AD\u5F00\u540E\u5E76\u53D1\u91CD\u8FDE\u4F1A\u5BFC\u81F4\u540E\u7AEF\u670D\u52A1\u4EA7\u751F\u538B\u529B\uFF0C\u4E25\u91CD\u65F6\u9020\u6210\u5927\u91CF\u8BF7\u6C42\u5931\u8D25\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/52e6ff5a-7374-4fe9-b001-ff6d3ac97744" alt="image" referrerpolicy="no-referrer"></p>
<p>Nginx Ingress\u7684Controller\u7EC4\u4EF6\u548CNginx\u7EC4\u4EF6\u8FD0\u884C\u5728\u540C\u4E00\u4E2APOD\u4E2D\uFF0C\u63A7\u5236\u9762\u8D44\u6E90\u4F7F\u7528\u8FD8\u4F1A\u5F71\u54CD\u5230\u6570\u636E\u9762\u7684\u6027\u80FD\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/b09a3db4-465b-46b8-8e35-bd274388f143" alt="image" referrerpolicy="no-referrer"></p>
<p>Nginx Ingress\u8FD8\u7F3A\u5C11\u9762\u5411\u670D\u52A1\u9650\u6D41\u7684\u80FD\u529B\uFF0C\u53EA\u80FD\u5B9E\u73B0\u9762\u5411\u5355\u4E2A\u6765\u6E90IP\u9650\u6D41\uFF0C\u5BF9\u4E8E\u540E\u7AEF\u670D\u52A1\u4FDD\u62A4\u6765\u8BF4\u6CA1\u6709\u610F\u4E49\u3002</p>
<h3 id="higress-\u6536\u76CA">Higress \u6536\u76CA</h3>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/48388f01-7796-4f7d-b7d1-fb7bd1522925" alt="image" referrerpolicy="no-referrer"></p>
<p>Higress\u4F01\u4E1A\u7248\u91C7\u7528\u4E86\u5168\u6258\u7BA1\u67B6\u6784\uFF0C\u4E0E\u4E1A\u52A1\u96C6\u7FA4\u5206\u79BB\uFF0C\u65E0\u9700\u81EA\u5DF1\u8FD0\u7EF4\uFF0C\u7A33\u5B9A\u6027\u6709\u66F4\u597D\u4FDD\u969C\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/5e689364-fb08-4ec1-9d71-49539da561b8" alt="image" referrerpolicy="no-referrer"></p>
<p>\u914D\u7F6E\u66F4\u65B0\u90FD\u662F\u52A8\u6001\u52A0\u8F7D\uFF0C\u65E0\u9700\u91CD\u542F\u6570\u636E\u9762\uFF0C\u4FDD\u969C\u4E1A\u52A1\u5E73\u7A33\u53D1\u5E03\uFF0Cwebsocket\u8FDE\u63A5\u7684\u4E1A\u52A1\u6536\u76CA\u4E5F\u7279\u522B\u660E\u663E\uFF0C\u957F\u8FDE\u63A5\u53EF\u4EE5\u59CB\u7EC8\u4FDD\u6301\u4E0D\u4F1A\u65AD\u5F00\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/29ae8168-e84d-41fb-bb4f-a258c4200a7e" alt="image" referrerpolicy="no-referrer"></p>
<p>\u5F00\u542F\u4E86TLS\u786C\u4EF6\u52A0\u901F\uFF0CTLS\u63E1\u624B\u65F6\u5EF6\u76F4\u63A5\u51CF\u534A\uFF0CQPS\u541E\u5410\u63D0\u534786%\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/4ace2996-5b5a-4331-90cb-8448c65042d5" alt="image" referrerpolicy="no-referrer"></p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/8664f436-c058-42bc-82c9-7355d24592ad" alt="image" referrerpolicy="no-referrer"></p>
<p>\u5F00\u542FWAF\u5BF9\u541E\u5410\u5F71\u54CD\u8FD8\u662F\u6BD4\u8F83\u660E\u663E\u7684\uFF0C\u4E0B\u964D\u4E8630%\uFF0C\u4F46\u76F8\u6BD4Ingress Nginx\u76F4\u63A5\u4E0B\u964D\u4E8690%\uFF0C\u6027\u80FD\u63D0\u5347\u8FD8\u662F\u5F88\u660E\u663E\uFF0C\u800C\u4E14\u66F4\u5927\u7684\u4F18\u52BF\u662F\u57FA\u4E8E\u963F\u91CC\u4E91WAF\u4EA7\u54C1\uFF0C\u9632\u62A4\u89C4\u5219\u662F\u5B9E\u65F6\u66F4\u65B0\u7684\uFF0C\u800C\u975EModsecurity\u7684\u9759\u6001\u89C4\u5219\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/10fca63d-a0bb-45a1-82ee-de115bf577e7" alt="image" referrerpolicy="no-referrer"></p>
<p>Higress\u96C6\u6210\u4E86Sentinel\u9650\u6D41\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u76F4\u63A5\u9762\u5411\u670D\u52A1\u7684QPS\u541E\u5410\u4E0A\u9650/\u5E76\u53D1\u6570\u4E0A\u7EBF\u8FDB\u884C\u9650\u6D41\uFF0C\u5E76\u4E14\u76F8\u6BD4Nginx\u53EA\u80FD\u914D\u7F6E\u5355\u673A\u9650\u5236\u9608\u503C\uFF0C\u9700\u8981\u5173\u6CE8\u7F51\u5173\u8282\u70B9\u6570\u91CF\uFF0CHigress\u8FD9\u91CC\u7684\u914D\u7F6E\u662F\u5168\u5C40\u9608\u503C\uFF0C\u4E0D\u53D7\u7F51\u5173\u6269\u7F29\u5BB9\u5F71\u54CD\u3002</p>
<p>\u89E6\u53D1\u9650\u6D41\u540E\u53EF\u4EE5\u81EA\u5B9A\u4E49\u54CD\u5E94\u5185\u5BB9\u6216\u8005\u91CD\u5B9A\u5411\u5230\u6307\u5B9A\u5730\u5740\uFF0C\u90FD\u662F\u5F88\u5B9E\u7528\u7684\u80FD\u529B\u3002</p>
<h2 id="part-2-higress\u5F00\u6E90\u4E4B\u8DEF\u624E\u6839\u5F00\u6E90\u751F\u6001\u5B9A\u4E49\u4E91\u539F\u751F\u7F51\u5173">Part 2. Higress\u5F00\u6E90\u4E4B\u8DEF\uFF1A\u624E\u6839\u5F00\u6E90\u751F\u6001\uFF0C\u5B9A\u4E49\u4E91\u539F\u751F\u7F51\u5173</h2>
<p>\u5F00\u6E90\u662F\u4E91\u539F\u751F\u751F\u6001\u7684\u57FA\u77F3\uFF0CHigress\u4E5F\u662F\u501F\u52A9\u4E86\u5F00\u6E90\u751F\u6001\u7684\u529B\u91CF\uFF0C\u7AD9\u5728Istio/Envoy\u7684\u80A9\u8180\u4E0A\u5F00\u53D1\u51FA\u4E86\u66F4\u591A\u5B9E\u7528\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u9009\u62E9\u5C06MSE Higress\uFF08\u4F01\u4E1A\u7248\uFF09\u4E2D\u7684\u6838\u5FC3\u80FD\u529B\u5168\u90E8\u5F00\u6E90\uFF0C\u51B3\u5FC3\u624E\u6839\u5728\u5F00\u6E90\u751F\u6001\u4E2D\uFF0C\u8BA9Higress\u53D8\u5F97\u66F4\u666E\u60E0\uFF0C\u6709\u66F4\u591A\u4EBA\u4F7F\u7528\uFF0C\u4ECE\u800C\u8BA9Higress\u66F4\u52A0\u5F3A\u5927\u3002</p>
<h3 id="\u7B80\u4ECB">\u7B80\u4ECB</h3>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/438dcf9a-96fa-4d0d-89ed-e810746c61ab" alt="image" referrerpolicy="no-referrer"></p>
<p>Higress\u5B9E\u9645\u4E0A\u6709\u4E09\u6B21\u8BDE\u751F\u8FC7\u7A0B\uFF1A\u7B2C\u4E00\u6B21\u662F\u5728\u963F\u91CC\u96C6\u56E2\u5185\u90E8\u4E1A\u52A1\u9700\u6C42\u9A71\u52A8\u4E0B\u8BDE\u751F\uFF1B\u7B2C\u4E8C\u6B21\u662F\u968F\u7740\u5185\u90E8\u4F7F\u7528\u9010\u6E10\u6210\u719F\u6C89\u6DC0\u4E3A\u963F\u91CC\u4E91\u4E0A\u7684MSE Higress\u4E91\u539F\u751F\u7F51\u5173\u4EA7\u54C1\uFF1B\u7B2C\u4E09\u6B21\u662F\u968F\u7740\u4E91\u4EA7\u54C1\u6210\u719F\uFF0C2022\u5E7411\u6708\u5728\u4E91\u6816\u5927\u4F1A\u4E0A\u6B63\u5F0F\u5BA3\u5E03\u5F00\u6E90\u30022023\u5E745\u6708Release\u4E86\u7B2C\u4E00\u4E2AGA\u7248\u672C\uFF0C\u610F\u5473\u7740\u5F00\u6E90\u7248\u672C\u4E5F\u8D70\u5165\u6210\u719F\u9636\u6BB5\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/783b96cc-b628-4784-a6cf-c2cf10e11f3f" alt="image" referrerpolicy="no-referrer"></p>
<p>\u4ECE\u914D\u7F6E\u6D41\u8F6C\u7684\u8FC7\u7A0B\u6765\u770BHigress\u7684\u67B6\u6784\uFF1A</p>
<ol>
<li>\u9996\u5148\u7528\u6237\u53EF\u4EE5\u901A\u8FC7UI\u63A7\u5236\u53F0/\u547D\u4EE4\u884C\u5DE5\u5177\u591A\u79CD\u65B9\u5F0F\u6765\u4E0B\u53D1\u914D\u7F6E</li>
<li>\u5230\u4E86\u63A7\u5236\u9762\uFF0C\u5982\u679C\u662FK8s\u4E0B\uFF0C\u914D\u7F6E\u6301\u4E45\u5316\u57FA\u4E8ECRD\uFF0C\u5982\u679C\u4E0D\u662FK8s\uFF0C\u914D\u7F6E\u6301\u4E45\u5316\u57FA\u4E8ENacos</li>
<li>\u9664\u4E86\u7528\u6237\u4E0B\u53D1\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u5B9E\u73B0\u670D\u52A1\u8DEF\u7531\u8FD8\u9700\u8981\u7684\u670D\u52A1IP\u5730\u5740\u4FE1\u606F\uFF0C\u652F\u6301\u4ECEK8s service/Nacos/Eureka/Consul/ZooKeeper/DNS/\u56FA\u5B9AIP\u7B49\u591A\u79CD\u65B9\u5F0F\u83B7\u53D6</li>
<li>Higress\u6570\u636E\u9762\u662F\u57FA\u4E8EEnvoy\uFF0C\u914D\u7F6E\u901A\u8FC7xDS\u4E0B\u53D1\uFF0C\u8FD9\u91CC\u590D\u7528\u4E86Istio\u7684\u914D\u7F6E\u4E0B\u53D1\u673A\u5236\uFF0C\u56E0\u4E3A\u662F\u5185\u7F6E\u4E86\u8FD9\u4E2A\u673A\u5236\uFF0C\u65E0\u9700\u5355\u72EC\u90E8\u7F72Istio</li>
<li>\u6700\u7EC8\u914D\u7F6E\u4E0B\u53D1\u5230\u6570\u636E\u9762\u751F\u6548\uFF0CHigress\u57FA\u4E8EEnvoy\u6269\u5C55\u4E86\u5F88\u591A\u80FD\u529B\uFF0C\u800C\u4E14\u57FA\u4E8EWasm\u6269\u5C55\u673A\u5236\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u4E14\u5177\u5907\u5168\u5C40/\u57DF\u540D/\u8DEF\u7531\u7EF4\u5EA6\u7684\u751F\u6548\u7C92\u5EA6</li>
</ol>
<h3 id="\u6838\u5FC3\u80FD\u529B">\u6838\u5FC3\u80FD\u529B</h3>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/be02b599-f82f-42be-a8e5-82f69b9196b8" alt="image" referrerpolicy="no-referrer">
<img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/4dc3cc2b-d6fe-4717-a53a-3e75c5f826ca" alt="image" referrerpolicy="no-referrer"></p>
<p>\u9AD8\u96C6\u6210\uFF1A\u540C\u65F6\u96C6\u6210\u7ECF\u5178\u5FAE\u670D\u52A1\u751F\u6001\u548CK8s\u5F00\u6E90\u751F\u6001\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4E1A\u52A1\u4ECE\u4F20\u7EDF\u67B6\u6784\u8FC1\u79FB\u5230\u4E91\u539F\u751F\u67B6\u6784\uFF0C\u57FA\u4E8E\u6D41\u91CF\u7070\u5EA6\u7B49\u80FD\u529B\uFF0C\u53EF\u4EE5\u4FDD\u969C\u8FD9\u4E00\u8FC7\u7A0B\u7684\u5E73\u6ED1</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/87f8eacd-39b6-4a26-a7a1-b78f6a5abb4f" alt="image" referrerpolicy="no-referrer"></p>
<p>\u6807\u51C6\u5316\uFF1A\u517C\u5BB9Nginx Ingress\u5E38\u7528\u6CE8\u89E3\uFF0C\u57FA\u4E8E\u7EDF\u4E00\u7684Ingress\u6807\u51C6\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0Nginx\u5230Higress\u8FD9\u4E00\u6280\u672F\u9E3F\u6C9F\u7684\u8DE8\u8D8A\uFF0CHigress\u4E5F\u5DF2\u7ECF\u652F\u6301Gateway API\uFF0C\u8DEF\u7531\u6807\u51C6\u672C\u8EAB\u4E5F\u80FD\u501F\u52A9Higress\u5B9E\u73B0\u5E73\u6ED1\u5347\u7EA7</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/33776d12-baf3-4d09-ae42-a5cadb655bef" alt="image" referrerpolicy="no-referrer"></p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/b9e4a718-c985-4ac4-9b7b-46a427ccb987" alt="image" referrerpolicy="no-referrer"></p>
<p>\u6613\u6269\u5C55\uFF1A\u501F\u52A9Higress\u7684Wasm SDK\uFF0C\u5F88\u5C11\u7684\u4E1A\u52A1\u4EE3\u7801\u5C31\u53EF\u4EE5\u5F00\u53D1\u4E00\u4E2A\u7075\u6D3B\u7684\u63D2\u4EF6\uFF1B\u5E76\u4E14\u652F\u6301\u57FA\u4E8EOCI\u955C\u50CF\u6807\u51C6\u5206\u53D1\uFF0C\u53EF\u4EE5\u8BA9\u63D2\u4EF6\u7684\u6587\u6863\uFF0C\u914D\u7F6E\u7EA6\u675F\u7B49\u8DDF\u968F\u63D2\u4EF6\u672C\u8EAB\u4E00\u8D77\u88AB\u5206\u53D1\u548C\u5171\u4EAB\uFF1B\u548C\u4F20\u7EDFNginx\u7C7B\u7F51\u5173\u6700\u5927\u7684\u5DEE\u522B\uFF0C\u5728\u4E8E\u63D2\u4EF6\u7684\u5206\u53D1\u96C6\u6210\u9636\u6BB5\uFF0C\u5B9E\u73B0\u4E86\u63D2\u4EF6\u7248\u672C\u66F4\u65B0\u8DDF\u7F51\u5173\u81EA\u8EAB\u7248\u672C\u66F4\u65B0\u7684\u89E3\u8026\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/d037bd1d-89c1-4f9c-b489-857b46de31ca" alt="image" referrerpolicy="no-referrer"></p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/65f71cee-09d9-4e7b-aa6e-bd4c9a60de83" alt="image" referrerpolicy="no-referrer"></p>
<p>\u70ED\u66F4\u65B0\uFF1AEnvoy\u76F8\u6BD4Nginx\u66F4\u5408\u7406\u7684\u914D\u7F6E\u7CFB\u7EDF\u62BD\u8C61\uFF0C\u8BA9Higress\u5177\u5907\u4E86Nginx Ingress\u65E0\u6CD5\u5B9E\u73B0\u7684\u914D\u7F6E\u70ED\u66F4\u65B0\u80FD\u529B</p>
<h3 id="\u56DE\u987E\u4E0E\u5C55\u671B">\u56DE\u987E\u4E0E\u5C55\u671B</h3>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/f46c4d68-8e31-44bb-afc6-c02c9fccb105" alt="image" referrerpolicy="no-referrer"></p>
<p>Higress\u5F00\u6E90\u7684\u524D\u534A\u5E74\uFF0C\u4E13\u6CE8\u4E8E\u5F00\u6E90\u751F\u6001\u7684\u6253\u901A\u548C\u6613\u7528\u6027\u7684\u63D0\u5347\uFF0C\u5E76\u57FA\u4E8EGithub Action\u6784\u5EFA\u4E86\u5F00\u6E90\u7684\u96C6\u6210\u6D4B\u8BD5\u4F53\u7CFB\uFF0C\u6765\u4FDD\u969C\u9879\u76EE\u8D28\u91CF\uFF0C\u5728\u4ECA\u5E745\u6708\u4EFD\u53D1\u5E03\u7B2C\u4E00\u4E2AGA\u7A33\u5B9A\u7248\u672C\u540E\uFF0C\u5728\u591A\u4E2A\u6838\u5FC3\u793E\u533A\u5F00\u53D1\u8005\u7684\u52AA\u529B\u4E0B\uFF0C\u6211\u4EEC\u53C8\u5F88\u5FEB\u53D1\u5E03\u4E861.1\u548C1.2\u4E24\u4E2A\u5927\u7248\u672C\uFF0C\u63A8\u51FA\u4E86\u975EK8s\u90E8\u7F72/Knative\u652F\u6301\u7B49\u91CD\u91CF\u7EA7\u529F\u80FD\u3002</p>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/6763318/3ba10a71-b3f0-4ede-a150-c64e0b1003c4" alt="image" referrerpolicy="no-referrer"></p>
<p>\u672A\u6765\u7684RoadMap\uFF0CHigress\u4F1A\u805A\u7126\u5728Gateway API/\u63D2\u4EF6\u751F\u6001/API\u7BA1\u7406\u4E09\u4E2A\u65B9\u5411\u4E0A\uFF0C\u968F\u7740\u793E\u533A\u5F00\u53D1\u56E2\u961F\u7684\u4E0D\u65AD\u58EE\u5927\uFF0CHigress\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u591A\u4E2A\u4E0D\u540C\u65B9\u5411\u7684<a href="https://github.com/alibaba/higress/issues/547" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SIG</a> \u5E76\u884C\u63A8\u8FDB\u6838\u5FC3\u529F\u80FD\u6F14\u8FDB\uFF0C\u672A\u6765\u5C06\u4E0D\u65AD\u6709\u91CD\u91CF\u7EA7\u529F\u80FD\u63A8\u51FA\uFF0C\u5C3D\u8BF7\u671F\u5F85\u3002</p>
<h2 id="\u76F4\u64AD\u56DE\u770B">\u76F4\u64AD\u56DE\u770B</h2>
<p><a href="https://www.aliyun.com/activity/middleware/CloudNative_Meetup" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.aliyun.com/activity/middleware/CloudNative_Meetup</a></p>`,i={title:"Higress\u57282023 KubeCon China\u7684\u5206\u4EAB",keywords:["Higress","KubeCon"],description:"\u770BK8s\u8D44\u6DF1\u8FD0\u7EF4\u5982\u4F55\u9009\u578BIngress\u7F51\u5173",author:"\u6F84\u6F6D",date:"2023-09-28",category:"event"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/2023-kubecon.md",g=void 0,p=function(){return`
## \u5206\u4EAB\u7B80\u4ECB

\u57289\u670826\u65E5\u76842023 KubeCon\u963F\u91CC\u4E91\u4E91\u539F\u751F\u5F00\u653E\u65E5\uFF0CHigress\u7684\u5206\u4EAB\u5185\u5BB9\u5206\u4E3A\u4E24\u90E8\u5206\uFF1A

Part 1. \u7531\u4E0A\u6D77\u8D39\u82AE\u7F51\u7EDC\u79D1\u6280\u7CFB\u7EDF\u8FD0\u7EF4\u526F\u603B\u76D1\u6234\u559C\u519B\uFF0C\u5E26\u6765\u8D39\u82AE\u5728\u9009\u578B\u4F01\u4E1A\u7248Higress\u4F5C\u4E3AK8s Ingress\u66FF\u4EE3Nginx Ingress\u7684\u4ECB\u7ECD

Part 2. \u7531Higress\u5F00\u6E90\u793E\u533A\u8D1F\u8D23\u4EBA\u6F84\u6F6D\uFF0C\u5E26\u6765Higress\u5F00\u6E90\u9879\u76EE\u7684\u4ECB\u7ECD

\u5F00\u6E90\u7248\u548C\u4F01\u4E1A\u7248\u662FHigress\u7684\u4E00\u4F53\u4E24\u9762\uFF0C\u901A\u8FC7\u672C\u6B21\u5206\u4EAB\uFF0C\u76F8\u4FE1\u5927\u5BB6\u4F1A\u5BF9Higress\u6709\u66F4\u5168\u9762\u7684\u4E86\u89E3\u3002

## Part 1. \u8D39\u82AE\u4E92\u52A8\u4F7F\u7528Higress\u4F5C\u4E3AKubernetes Ingress\u5B9E\u73B0\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u63D0\u5347

\u8D39\u82AE\u901A\u8FC7Higress\u89E3\u51B3\u4E86\u539F\u672CNginx Ingress\u7F51\u5173\u7684\u8BF8\u591A\u75DB\u70B9\uFF0C\u6027\u80FD\u63D0\u534790%\uFF0C\u54CD\u5E94\u65F6\u95F4\u4E0B\u964D50%\uFF0C\u5E76\u5927\u5E45\u63D0\u5347\u4E1A\u52A1\u5165\u53E3\u7684\u7A33\u5B9A\u53CA\u5B89\u5168\u6027\uFF0C\u9AD8\u6548\u652F\u6491\u6BCF\u65E51\u4EBF+\u7C89\u4E1D\u4EA4\u4E92\uFF0C 4\u4E07+\u7EBF\u4E0B\u95E8\u5E97\u3001\u6BCF\u67083000\u4E07+\u7B14\u7684\u79FB\u52A8\u652F\u4ED8\u9700\u6C42\u3002

### \u8D39\u82AE\u4E1A\u52A1\u573A\u666F

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/0d4f761d-1471-49b6-a03c-38b11304262d)
![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/dba8ae2a-93c8-4368-af3d-739f97090d39)

\u8D39\u82AE\u4E13\u6CE8\u4E8E\u79FB\u52A8\u8425\u9500\u3001O2O\u3001\u793E\u4EA4\u5A92\u4F53\u3001\u79FB\u52A8\u7535\u5546\u9886\u57DF\u7684\u521B\u65B0\u4E0E\u7814\u53D1\u3002\u8D39\u82AE\u4E92\u52A8\u81EA\u4E3B\u7814\u53D1\u7684\u81EA\u5A92\u4F53\u5E73\u53F0\u8FD0\u7EF4\u8D85\u8FC72\u4EBF\u7C89\u4E1D \uFF1B \u6709\u8D85\u8FC74\u4E07\u5BB6\u7EBF\u4E0B\u95E8\u5E97\u91C7\u7528\u8D39\u82AEO2O\u89E3\u51B3\u65B9\u6848\u3002\u8D39\u82AE\u7684\u4E3B\u8981\u5BA2\u6237\u5305\u62EC\u4F18\u8863\u5E93\uFF0C\u5FC5\u80DC\u5BA2\uFF0C\u80AF\u5FB7\u57FA\uFF0C\u661F\u5DF4\u514B\uFF0CSPG\uFF0C\u6B27\u83B1\u96C5\uFF0CInnisfree\uFF0C\u8FEA\u5361\u4FAC\uFF0C\u9876\u65B0\u96C6\u56E2\u7B49\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/61791bae-b40c-4b90-bc4d-c23bc052911c)

\u8D39\u82AE\u5185\u90E8\u4E1A\u52A1\u7CFB\u7EDF\u7684\u65E5\u5747\u53D1\u5E03\u6B21\u6570\u8FBE\u5230100\u6B21\u4E4B\u591A\uFF0C\u4F1A\u6D89\u53CA\u5230400\u591A\u6761Ingress\u8DEF\u7531\u89C4\u5219\u7684\u65E5\u5E38\u66F4\u65B0\uFF0C\u4E14\u7F51\u5173\u6BCF\u5929\u9700\u8981\u627F\u8F7D\u7684PV\u6D41\u91CF\u8FBE\u5230\u4E861\u4E2A\u4EBF\u3002Ingress\u7F51\u5173\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u81F3\u5173\u91CD\u8981\u3002

### Nginx Ingress \u75DB\u70B9

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/1d8a178e-05de-4114-96b3-7d4e11240374)

\u914D\u7F6E\u53D8\u66F4\u9891\u7E41\uFF0C\u5BFC\u81F4Nginx\u8FDB\u7A0B\u9891\u7E41\u91CD\u542F\uFF0C\u5927\u91CF\u8FDE\u63A5\u77AC\u65F6\u65AD\u5F00\u540E\u5E76\u53D1\u91CD\u8FDE\u4F1A\u5BFC\u81F4\u540E\u7AEF\u670D\u52A1\u4EA7\u751F\u538B\u529B\uFF0C\u4E25\u91CD\u65F6\u9020\u6210\u5927\u91CF\u8BF7\u6C42\u5931\u8D25\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/52e6ff5a-7374-4fe9-b001-ff6d3ac97744)

Nginx Ingress\u7684Controller\u7EC4\u4EF6\u548CNginx\u7EC4\u4EF6\u8FD0\u884C\u5728\u540C\u4E00\u4E2APOD\u4E2D\uFF0C\u63A7\u5236\u9762\u8D44\u6E90\u4F7F\u7528\u8FD8\u4F1A\u5F71\u54CD\u5230\u6570\u636E\u9762\u7684\u6027\u80FD\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/b09a3db4-465b-46b8-8e35-bd274388f143)

Nginx Ingress\u8FD8\u7F3A\u5C11\u9762\u5411\u670D\u52A1\u9650\u6D41\u7684\u80FD\u529B\uFF0C\u53EA\u80FD\u5B9E\u73B0\u9762\u5411\u5355\u4E2A\u6765\u6E90IP\u9650\u6D41\uFF0C\u5BF9\u4E8E\u540E\u7AEF\u670D\u52A1\u4FDD\u62A4\u6765\u8BF4\u6CA1\u6709\u610F\u4E49\u3002

### Higress \u6536\u76CA

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/48388f01-7796-4f7d-b7d1-fb7bd1522925)

Higress\u4F01\u4E1A\u7248\u91C7\u7528\u4E86\u5168\u6258\u7BA1\u67B6\u6784\uFF0C\u4E0E\u4E1A\u52A1\u96C6\u7FA4\u5206\u79BB\uFF0C\u65E0\u9700\u81EA\u5DF1\u8FD0\u7EF4\uFF0C\u7A33\u5B9A\u6027\u6709\u66F4\u597D\u4FDD\u969C\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/5e689364-fb08-4ec1-9d71-49539da561b8)

\u914D\u7F6E\u66F4\u65B0\u90FD\u662F\u52A8\u6001\u52A0\u8F7D\uFF0C\u65E0\u9700\u91CD\u542F\u6570\u636E\u9762\uFF0C\u4FDD\u969C\u4E1A\u52A1\u5E73\u7A33\u53D1\u5E03\uFF0Cwebsocket\u8FDE\u63A5\u7684\u4E1A\u52A1\u6536\u76CA\u4E5F\u7279\u522B\u660E\u663E\uFF0C\u957F\u8FDE\u63A5\u53EF\u4EE5\u59CB\u7EC8\u4FDD\u6301\u4E0D\u4F1A\u65AD\u5F00\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/29ae8168-e84d-41fb-bb4f-a258c4200a7e)

\u5F00\u542F\u4E86TLS\u786C\u4EF6\u52A0\u901F\uFF0CTLS\u63E1\u624B\u65F6\u5EF6\u76F4\u63A5\u51CF\u534A\uFF0CQPS\u541E\u5410\u63D0\u534786%\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/4ace2996-5b5a-4331-90cb-8448c65042d5)

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/8664f436-c058-42bc-82c9-7355d24592ad)

\u5F00\u542FWAF\u5BF9\u541E\u5410\u5F71\u54CD\u8FD8\u662F\u6BD4\u8F83\u660E\u663E\u7684\uFF0C\u4E0B\u964D\u4E8630%\uFF0C\u4F46\u76F8\u6BD4Ingress Nginx\u76F4\u63A5\u4E0B\u964D\u4E8690%\uFF0C\u6027\u80FD\u63D0\u5347\u8FD8\u662F\u5F88\u660E\u663E\uFF0C\u800C\u4E14\u66F4\u5927\u7684\u4F18\u52BF\u662F\u57FA\u4E8E\u963F\u91CC\u4E91WAF\u4EA7\u54C1\uFF0C\u9632\u62A4\u89C4\u5219\u662F\u5B9E\u65F6\u66F4\u65B0\u7684\uFF0C\u800C\u975EModsecurity\u7684\u9759\u6001\u89C4\u5219\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/10fca63d-a0bb-45a1-82ee-de115bf577e7)

Higress\u96C6\u6210\u4E86Sentinel\u9650\u6D41\u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u76F4\u63A5\u9762\u5411\u670D\u52A1\u7684QPS\u541E\u5410\u4E0A\u9650/\u5E76\u53D1\u6570\u4E0A\u7EBF\u8FDB\u884C\u9650\u6D41\uFF0C\u5E76\u4E14\u76F8\u6BD4Nginx\u53EA\u80FD\u914D\u7F6E\u5355\u673A\u9650\u5236\u9608\u503C\uFF0C\u9700\u8981\u5173\u6CE8\u7F51\u5173\u8282\u70B9\u6570\u91CF\uFF0CHigress\u8FD9\u91CC\u7684\u914D\u7F6E\u662F\u5168\u5C40\u9608\u503C\uFF0C\u4E0D\u53D7\u7F51\u5173\u6269\u7F29\u5BB9\u5F71\u54CD\u3002

\u89E6\u53D1\u9650\u6D41\u540E\u53EF\u4EE5\u81EA\u5B9A\u4E49\u54CD\u5E94\u5185\u5BB9\u6216\u8005\u91CD\u5B9A\u5411\u5230\u6307\u5B9A\u5730\u5740\uFF0C\u90FD\u662F\u5F88\u5B9E\u7528\u7684\u80FD\u529B\u3002

## Part 2. Higress\u5F00\u6E90\u4E4B\u8DEF\uFF1A\u624E\u6839\u5F00\u6E90\u751F\u6001\uFF0C\u5B9A\u4E49\u4E91\u539F\u751F\u7F51\u5173

\u5F00\u6E90\u662F\u4E91\u539F\u751F\u751F\u6001\u7684\u57FA\u77F3\uFF0CHigress\u4E5F\u662F\u501F\u52A9\u4E86\u5F00\u6E90\u751F\u6001\u7684\u529B\u91CF\uFF0C\u7AD9\u5728Istio/Envoy\u7684\u80A9\u8180\u4E0A\u5F00\u53D1\u51FA\u4E86\u66F4\u591A\u5B9E\u7528\u7684\u529F\u80FD\uFF0C\u6211\u4EEC\u9009\u62E9\u5C06MSE Higress\uFF08\u4F01\u4E1A\u7248\uFF09\u4E2D\u7684\u6838\u5FC3\u80FD\u529B\u5168\u90E8\u5F00\u6E90\uFF0C\u51B3\u5FC3\u624E\u6839\u5728\u5F00\u6E90\u751F\u6001\u4E2D\uFF0C\u8BA9Higress\u53D8\u5F97\u66F4\u666E\u60E0\uFF0C\u6709\u66F4\u591A\u4EBA\u4F7F\u7528\uFF0C\u4ECE\u800C\u8BA9Higress\u66F4\u52A0\u5F3A\u5927\u3002

### \u7B80\u4ECB

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/438dcf9a-96fa-4d0d-89ed-e810746c61ab)

Higress\u5B9E\u9645\u4E0A\u6709\u4E09\u6B21\u8BDE\u751F\u8FC7\u7A0B\uFF1A\u7B2C\u4E00\u6B21\u662F\u5728\u963F\u91CC\u96C6\u56E2\u5185\u90E8\u4E1A\u52A1\u9700\u6C42\u9A71\u52A8\u4E0B\u8BDE\u751F\uFF1B\u7B2C\u4E8C\u6B21\u662F\u968F\u7740\u5185\u90E8\u4F7F\u7528\u9010\u6E10\u6210\u719F\u6C89\u6DC0\u4E3A\u963F\u91CC\u4E91\u4E0A\u7684MSE Higress\u4E91\u539F\u751F\u7F51\u5173\u4EA7\u54C1\uFF1B\u7B2C\u4E09\u6B21\u662F\u968F\u7740\u4E91\u4EA7\u54C1\u6210\u719F\uFF0C2022\u5E7411\u6708\u5728\u4E91\u6816\u5927\u4F1A\u4E0A\u6B63\u5F0F\u5BA3\u5E03\u5F00\u6E90\u30022023\u5E745\u6708Release\u4E86\u7B2C\u4E00\u4E2AGA\u7248\u672C\uFF0C\u610F\u5473\u7740\u5F00\u6E90\u7248\u672C\u4E5F\u8D70\u5165\u6210\u719F\u9636\u6BB5\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/783b96cc-b628-4784-a6cf-c2cf10e11f3f)

\u4ECE\u914D\u7F6E\u6D41\u8F6C\u7684\u8FC7\u7A0B\u6765\u770BHigress\u7684\u67B6\u6784\uFF1A

1. \u9996\u5148\u7528\u6237\u53EF\u4EE5\u901A\u8FC7UI\u63A7\u5236\u53F0/\u547D\u4EE4\u884C\u5DE5\u5177\u591A\u79CD\u65B9\u5F0F\u6765\u4E0B\u53D1\u914D\u7F6E
2. \u5230\u4E86\u63A7\u5236\u9762\uFF0C\u5982\u679C\u662FK8s\u4E0B\uFF0C\u914D\u7F6E\u6301\u4E45\u5316\u57FA\u4E8ECRD\uFF0C\u5982\u679C\u4E0D\u662FK8s\uFF0C\u914D\u7F6E\u6301\u4E45\u5316\u57FA\u4E8ENacos
3. \u9664\u4E86\u7528\u6237\u4E0B\u53D1\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u5B9E\u73B0\u670D\u52A1\u8DEF\u7531\u8FD8\u9700\u8981\u7684\u670D\u52A1IP\u5730\u5740\u4FE1\u606F\uFF0C\u652F\u6301\u4ECEK8s service/Nacos/Eureka/Consul/ZooKeeper/DNS/\u56FA\u5B9AIP\u7B49\u591A\u79CD\u65B9\u5F0F\u83B7\u53D6
4. Higress\u6570\u636E\u9762\u662F\u57FA\u4E8EEnvoy\uFF0C\u914D\u7F6E\u901A\u8FC7xDS\u4E0B\u53D1\uFF0C\u8FD9\u91CC\u590D\u7528\u4E86Istio\u7684\u914D\u7F6E\u4E0B\u53D1\u673A\u5236\uFF0C\u56E0\u4E3A\u662F\u5185\u7F6E\u4E86\u8FD9\u4E2A\u673A\u5236\uFF0C\u65E0\u9700\u5355\u72EC\u90E8\u7F72Istio
5. \u6700\u7EC8\u914D\u7F6E\u4E0B\u53D1\u5230\u6570\u636E\u9762\u751F\u6548\uFF0CHigress\u57FA\u4E8EEnvoy\u6269\u5C55\u4E86\u5F88\u591A\u80FD\u529B\uFF0C\u800C\u4E14\u57FA\u4E8EWasm\u6269\u5C55\u673A\u5236\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u4E14\u5177\u5907\u5168\u5C40/\u57DF\u540D/\u8DEF\u7531\u7EF4\u5EA6\u7684\u751F\u6548\u7C92\u5EA6

### \u6838\u5FC3\u80FD\u529B

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/be02b599-f82f-42be-a8e5-82f69b9196b8)
![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/4dc3cc2b-d6fe-4717-a53a-3e75c5f826ca)

\u9AD8\u96C6\u6210\uFF1A\u540C\u65F6\u96C6\u6210\u7ECF\u5178\u5FAE\u670D\u52A1\u751F\u6001\u548CK8s\u5F00\u6E90\u751F\u6001\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4E1A\u52A1\u4ECE\u4F20\u7EDF\u67B6\u6784\u8FC1\u79FB\u5230\u4E91\u539F\u751F\u67B6\u6784\uFF0C\u57FA\u4E8E\u6D41\u91CF\u7070\u5EA6\u7B49\u80FD\u529B\uFF0C\u53EF\u4EE5\u4FDD\u969C\u8FD9\u4E00\u8FC7\u7A0B\u7684\u5E73\u6ED1

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/87f8eacd-39b6-4a26-a7a1-b78f6a5abb4f)

\u6807\u51C6\u5316\uFF1A\u517C\u5BB9Nginx Ingress\u5E38\u7528\u6CE8\u89E3\uFF0C\u57FA\u4E8E\u7EDF\u4E00\u7684Ingress\u6807\u51C6\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0Nginx\u5230Higress\u8FD9\u4E00\u6280\u672F\u9E3F\u6C9F\u7684\u8DE8\u8D8A\uFF0CHigress\u4E5F\u5DF2\u7ECF\u652F\u6301Gateway API\uFF0C\u8DEF\u7531\u6807\u51C6\u672C\u8EAB\u4E5F\u80FD\u501F\u52A9Higress\u5B9E\u73B0\u5E73\u6ED1\u5347\u7EA7

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/33776d12-baf3-4d09-ae42-a5cadb655bef)

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/b9e4a718-c985-4ac4-9b7b-46a427ccb987)


\u6613\u6269\u5C55\uFF1A\u501F\u52A9Higress\u7684Wasm SDK\uFF0C\u5F88\u5C11\u7684\u4E1A\u52A1\u4EE3\u7801\u5C31\u53EF\u4EE5\u5F00\u53D1\u4E00\u4E2A\u7075\u6D3B\u7684\u63D2\u4EF6\uFF1B\u5E76\u4E14\u652F\u6301\u57FA\u4E8EOCI\u955C\u50CF\u6807\u51C6\u5206\u53D1\uFF0C\u53EF\u4EE5\u8BA9\u63D2\u4EF6\u7684\u6587\u6863\uFF0C\u914D\u7F6E\u7EA6\u675F\u7B49\u8DDF\u968F\u63D2\u4EF6\u672C\u8EAB\u4E00\u8D77\u88AB\u5206\u53D1\u548C\u5171\u4EAB\uFF1B\u548C\u4F20\u7EDFNginx\u7C7B\u7F51\u5173\u6700\u5927\u7684\u5DEE\u522B\uFF0C\u5728\u4E8E\u63D2\u4EF6\u7684\u5206\u53D1\u96C6\u6210\u9636\u6BB5\uFF0C\u5B9E\u73B0\u4E86\u63D2\u4EF6\u7248\u672C\u66F4\u65B0\u8DDF\u7F51\u5173\u81EA\u8EAB\u7248\u672C\u66F4\u65B0\u7684\u89E3\u8026\u3002

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/d037bd1d-89c1-4f9c-b489-857b46de31ca)

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/65f71cee-09d9-4e7b-aa6e-bd4c9a60de83)

\u70ED\u66F4\u65B0\uFF1AEnvoy\u76F8\u6BD4Nginx\u66F4\u5408\u7406\u7684\u914D\u7F6E\u7CFB\u7EDF\u62BD\u8C61\uFF0C\u8BA9Higress\u5177\u5907\u4E86Nginx Ingress\u65E0\u6CD5\u5B9E\u73B0\u7684\u914D\u7F6E\u70ED\u66F4\u65B0\u80FD\u529B

### \u56DE\u987E\u4E0E\u5C55\u671B

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/f46c4d68-8e31-44bb-afc6-c02c9fccb105)

Higress\u5F00\u6E90\u7684\u524D\u534A\u5E74\uFF0C\u4E13\u6CE8\u4E8E\u5F00\u6E90\u751F\u6001\u7684\u6253\u901A\u548C\u6613\u7528\u6027\u7684\u63D0\u5347\uFF0C\u5E76\u57FA\u4E8EGithub Action\u6784\u5EFA\u4E86\u5F00\u6E90\u7684\u96C6\u6210\u6D4B\u8BD5\u4F53\u7CFB\uFF0C\u6765\u4FDD\u969C\u9879\u76EE\u8D28\u91CF\uFF0C\u5728\u4ECA\u5E745\u6708\u4EFD\u53D1\u5E03\u7B2C\u4E00\u4E2AGA\u7A33\u5B9A\u7248\u672C\u540E\uFF0C\u5728\u591A\u4E2A\u6838\u5FC3\u793E\u533A\u5F00\u53D1\u8005\u7684\u52AA\u529B\u4E0B\uFF0C\u6211\u4EEC\u53C8\u5F88\u5FEB\u53D1\u5E03\u4E861.1\u548C1.2\u4E24\u4E2A\u5927\u7248\u672C\uFF0C\u63A8\u51FA\u4E86\u975EK8s\u90E8\u7F72/Knative\u652F\u6301\u7B49\u91CD\u91CF\u7EA7\u529F\u80FD\u3002


![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/3ba10a71-b3f0-4ede-a150-c64e0b1003c4)

\u672A\u6765\u7684RoadMap\uFF0CHigress\u4F1A\u805A\u7126\u5728Gateway API/\u63D2\u4EF6\u751F\u6001/API\u7BA1\u7406\u4E09\u4E2A\u65B9\u5411\u4E0A\uFF0C\u968F\u7740\u793E\u533A\u5F00\u53D1\u56E2\u961F\u7684\u4E0D\u65AD\u58EE\u5927\uFF0CHigress\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u591A\u4E2A\u4E0D\u540C\u65B9\u5411\u7684[SIG](https://github.com/alibaba/higress/issues/547) \u5E76\u884C\u63A8\u8FDB\u6838\u5FC3\u529F\u80FD\u6F14\u8FDB\uFF0C\u672A\u6765\u5C06\u4E0D\u65AD\u6709\u91CD\u91CF\u7EA7\u529F\u80FD\u63A8\u51FA\uFF0C\u5C3D\u8BF7\u671F\u5F85\u3002


## \u76F4\u64AD\u56DE\u770B

https://www.aliyun.com/activity/middleware/CloudNative_Meetup







`},o=function(){return s},a=function(){return[{depth:2,slug:"\u5206\u4EAB\u7B80\u4ECB",text:"\u5206\u4EAB\u7B80\u4ECB"},{depth:2,slug:"part-1-\u8D39\u82AE\u4E92\u52A8\u4F7F\u7528higress\u4F5C\u4E3Akubernetes-ingress\u5B9E\u73B0\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u63D0\u5347",text:"Part 1. \u8D39\u82AE\u4E92\u52A8\u4F7F\u7528Higress\u4F5C\u4E3AKubernetes Ingress\u5B9E\u73B0\u7A33\u5B9A\u6027\u548C\u6027\u80FD\u63D0\u5347"},{depth:3,slug:"\u8D39\u82AE\u4E1A\u52A1\u573A\u666F",text:"\u8D39\u82AE\u4E1A\u52A1\u573A\u666F"},{depth:3,slug:"nginx-ingress-\u75DB\u70B9",text:"Nginx Ingress \u75DB\u70B9"},{depth:3,slug:"higress-\u6536\u76CA",text:"Higress \u6536\u76CA"},{depth:2,slug:"part-2-higress\u5F00\u6E90\u4E4B\u8DEF\u624E\u6839\u5F00\u6E90\u751F\u6001\u5B9A\u4E49\u4E91\u539F\u751F\u7F51\u5173",text:"Part 2. Higress\u5F00\u6E90\u4E4B\u8DEF\uFF1A\u624E\u6839\u5F00\u6E90\u751F\u6001\uFF0C\u5B9A\u4E49\u4E91\u539F\u751F\u7F51\u5173"},{depth:3,slug:"\u7B80\u4ECB",text:"\u7B80\u4ECB"},{depth:3,slug:"\u6838\u5FC3\u80FD\u529B",text:"\u6838\u5FC3\u80FD\u529B"},{depth:3,slug:"\u56DE\u987E\u4E0E\u5C55\u671B",text:"\u56DE\u987E\u4E0E\u5C55\u671B"},{depth:2,slug:"\u76F4\u64AD\u56DE\u770B",text:"\u76F4\u64AD\u56DE\u770B"}]},e=h((l,H,I)=>{const{layout:y,...t}=i;return t.file=r,t.url=g,b`${c()}${n(s)}`})});export{e as Content,d as __tla,o as compiledContent,e as default,r as file,i as frontmatter,a as getHeadings,p as rawContent,g as url};
