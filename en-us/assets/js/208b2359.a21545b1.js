"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[1141],{3905:(e,n,s)=>{s.d(n,{Zo:()=>c,kt:()=>d});var t=s(7294);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){a(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function o(e,n){if(null==e)return{};var s,t,a=function(e,n){if(null==e)return{};var s,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||(a[s]=e[s]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var p=t.createContext({}),l=function(e){var n=t.useContext(p),s=n;return e&&(s="function"==typeof e?e(n):i(i({},n),e)),s},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var s=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(s),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||r;return s?t.createElement(d,i(i({ref:n},c),{},{components:s})):t.createElement(d,i({ref:n},c))}));function d(e,n){var s=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=s.length,i=new Array(r);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<r;l++)i[l]=s[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}m.displayName="MDXCreateElement"},3706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=s(7462),a=(s(7294),s(3905));const r={title:"Higress + Nacos \u5fae\u670d\u52a1\u7f51\u5173\u6700\u4f73\u5b9e\u8df5",keywords:["higress","wasm"],description:"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863",author:"\u6f84\u6f6d",date:new Date("2023-01-10T00:00:00.000Z")},i="\u524d\u8a00",o={permalink:"/en-us/blog/nacos",source:"@site/blog/nacos.md",title:"Higress + Nacos \u5fae\u670d\u52a1\u7f51\u5173\u6700\u4f73\u5b9e\u8df5",description:"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863",date:"2023-01-10T00:00:00.000Z",formattedDate:"January 10, 2023",tags:[],readingTime:13.13,hasTruncateMarker:!0,authors:[{name:"\u6f84\u6f6d"}],frontMatter:{title:"Higress + Nacos \u5fae\u670d\u52a1\u7f51\u5173\u6700\u4f73\u5b9e\u8df5",keywords:["higress","wasm"],description:"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863",author:"\u6f84\u6f6d",date:"2023-01-10T00:00:00.000Z"},nextItem:{title:"30\u884c\u4ee3\u7801\u5199\u4e00\u4e2aWasm Go\u63d2\u4ef6",permalink:"/en-us/blog/30-line-wasm"}},p={authorsImageUrls:[void 0]},l=[{value:"\u914d\u7f6e\u670d\u52a1\u6765\u6e90",id:"\u914d\u7f6e\u670d\u52a1\u6765\u6e90",level:2},{value:"\u914d\u7f6e Ingress",id:"\u914d\u7f6e-ingress",level:2},{value:"\u4e30\u5bcc\u7684\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b",id:"\u4e30\u5bcc\u7684\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b",level:2},{value:"\u7070\u5ea6\u53d1\u5e03",id:"\u7070\u5ea6\u53d1\u5e03",level:3},{value:"\u81ea\u5b9a\u4e49\u6269\u5c55",id:"\u81ea\u5b9a\u4e49\u6269\u5c55",level:3},{value:"\u8d8b\u52bf\u4e00\uff1a\u7edf\u4e00 API \u6807\u51c6\uff0c\u5411\u4e91\u539f\u751f\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb",id:"\u8d8b\u52bf\u4e00\u7edf\u4e00-api-\u6807\u51c6\u5411\u4e91\u539f\u751f\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb",level:2},{value:"\u8d8b\u52bf\u4e8c\uff1a\u5408\u5e76\u5b89\u5168&amp;\u6d41\u91cf\u7f51\u5173\uff0c\u5411 DevSecOps \u6f14\u8fdb",id:"\u8d8b\u52bf\u4e8c\u5408\u5e76\u5b89\u5168\u6d41\u91cf\u7f51\u5173\u5411-devsecops-\u6f14\u8fdb",level:2}],c={toc:l},g="wrapper";function u(e){let{components:n,...s}=e;return(0,a.kt)(g,(0,t.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u53bb\u5e7411\u6708\u7684\u4e91\u6816\u5927\u4f1a\u4e0a\uff0c\u6211\u4eec\u5f00\u6e90\u4e86\u4e91\u539f\u751f\u7f51\u5173 Higress\uff0c\u65f6\u9694 2 \u6708\uff0cHigress \u7684 Github \u9879\u76ee(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress"},"https://github.com/alibaba/higress"),")\u5df2\u7ecf\u6536\u83b7\u4e86 700+ star\uff0c\u4ee5\u53ca\u5927\u91cf\u793e\u533a\u5c0f\u4f19\u4f34\u7684\u5173\u6ce8\u3002"),(0,a.kt)("p",null,"\u5728\u793e\u533a\u7684\u4ea4\u6d41\u4e2d\u6211\u4eec\u53d1\u73b0\u6709\u4e0d\u5c11\u5fae\u670d\u52a1\u5f00\u53d1\u8005\u5728\u4f7f\u7528\u5982 Spring Cloud Gateway/Zuul \u7b49\u5fae\u670d\u52a1\u7f51\u5173\u5bf9\u63a5 Nacos \u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0\u5fae\u670d\u52a1\u7684\u8def\u7531\uff0c\u5e76\u4e14\u5e0c\u671b\u4e86\u89e3\u8fc1\u79fb\u5230 Higress \u7f51\u5173\u80fd\u5e26\u6765\u54ea\u4e9b\u597d\u5904\u3002\n\u672c\u6587\u5c06\u4ecb\u7ecd Higress \u7ec4\u5408 Nacos \u4f5c\u4e3a\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b\uff0c\u5e76\u4ecb\u7ecd\u5fae\u670d\u52a1\u7f51\u5173\u53d1\u5c55\u7684\u4e24\u4e2a\u8d8b\u52bf\uff0c\u4e3a\u7f51\u5173\u7684\u9009\u578b\u6307\u660e\u9053\u8def\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d8b\u52bf\u4e00\uff1a\u7edf\u4e00 API \u6807\u51c6\uff0c\u5411\u4e91\u539f\u751f\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb"),(0,a.kt)("li",{parentName:"ul"},"\u8d8b\u52bf\u4e8c\uff1a\u5408\u5e76\u5b89\u5168&\u6d41\u91cf\u7f51\u5173\uff0c\u5411 DevSecOps \u6f14\u8fdb")),(0,a.kt)("h1",{id:"higressnacos\u7684\u6700\u4f73\u62cd\u6863"},"Higress\uff1aNacos\u7684\u6700\u4f73\u62cd\u6863"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01Ww9gDw1PwXJUlwwRy_!!6000000001905-2-tps-1200-475.png",alt:"image.png"}),"\nHigress \u548c Nacos \u5176\u5b9e\u662f\u5e08\u51fa\u540c\u95e8\u2014\u2014\u963f\u91cc\u4e2d\u95f4\u4ef6\u56e2\u961f\u3002\u5728 Higress \u652f\u6491\u963f\u91cc\u5185\u90e8\u4e1a\u52a1\u7684\u9636\u6bb5\uff0cHigress \u5c31\u5df2\u7ecf\u642d\u914d Nacos \u4f5c\u4e3a\u5fae\u670d\u52a1\u7f51\u5173\u4f7f\u7528\uff0c\u51ed\u501f\u9ad8\u6027\u80fd\u652f\u6491\u4e86\u53cc\u5341\u4e00\u7684\u6d2a\u5cf0\u6d41\u91cf\uff1b\u5230\u4e86\u4e91\u4ea7\u54c1\u5546\u4e1a\u5316\u9636\u6bb5\uff0cHigress \u548c Nacos \u7ee7\u7eed\u57fa\u4e8e\u963f\u91cc\u4e91 MSE\uff08Microservices Engine\uff09\u4ea7\u54c1\uff0c\u7d27\u5bc6\u534f\u4f5c\u6f14\u8fdb\u4ea7\u54c1\u529f\u80fd\uff1bHigress \u5f00\u6e90\u4e4b\u540e\uff0c\u5982\u679c\u60f3\u8981\u81ea\u5efa\u5fae\u670d\u52a1\u7f51\u5173\uff0c\u9009\u62e9 Higress \u914d\u5408 Nacos \u4f7f\u7528\uff0c\u5177\u5907\u4ee5\u4e0b\u4f18\u52bf\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u6bd4 Spring Cloud Gateway/Zuul \u7b49\u4f20\u7edf Java \u5fae\u670d\u52a1\u7f51\u5173\u6027\u80fd\u9ad8\u51fa 2-4 \u500d\uff0c\u53ef\u4ee5\u663e\u8457\u964d\u4f4e\u8d44\u6e90\u6210\u672c"),(0,a.kt)("li",{parentName:"ol"},"\u4f5c\u4e3a\u4e91\u539f\u751f\u7f51\u5173\uff0c\u5b9e\u73b0\u4e86 Ingress/Gateway API \u6807\u51c6\uff0c\u517c\u5bb9 Nginx Ingress \u5927\u90e8\u5206\u6ce8\u89e3\uff0c\u652f\u6301\u4e1a\u52a1\u6e10\u8fdb\u5f0f\u5411\u57fa\u4e8e K8s \u7684\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb"),(0,a.kt)("li",{parentName:"ol"},"\u4e0e Dubbo/OpenSergo/Sentinel \u7b49\u5f00\u6e90\u5fae\u670d\u52a1\u751f\u6001\u6df1\u5ea6\u6574\u5408\uff0c\u63d0\u4f9b\u6700\u4f73\u5b9e\u8df5")),(0,a.kt)("p",null,"\u8fd9\u91cc\u9ed8\u8ba4\u5df2\u7ecf\u5b89\u88c5\u597d Higress\uff0c\u642d\u914d Nacos \u4f7f\u7528\u7684\u5177\u4f53\u65b9\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u670d\u52a1\u6765\u6e90"},"\u914d\u7f6e\u670d\u52a1\u6765\u6e90"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.higress.io/v1\nkind: McpBridge\nmetadata:\n  name: default\n  namespace: higress-system\nspec:\n  registries:\n    # \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a \u201cproduction\u201d \u7684\u670d\u52a1\u6765\u6e90\n  - name: production\n    # \u6ce8\u518c\u4e2d\u5fc3\u7c7b\u578b\u662f Nacos 2.x\uff0c\u652f\u6301 gRPC \u534f\u8bae\n    type: nacos2  \n    # \u6ce8\u518c\u4e2d\u5fc3\u7684\u8bbf\u95ee\u5730\u5740\uff0c\u53ef\u4ee5\u662f\u57df\u540d\u6216\u8005IP\n    domain: 192.xxx.xx.32\n    # \u6ce8\u518c\u4e2d\u5fc3\u7684\u8bbf\u95ee\u7aef\u53e3\uff0cNacos \u9ed8\u8ba4\u90fd\u662f 8848\n    port: 8848\n    # Nacos \u547d\u540d\u7a7a\u95f4 ID\n    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358    \n    # Nacos \u670d\u52a1\u5206\u7ec4\n    nacosGroups:\n    - DEFAULT_GROUP\n    # \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a \u201cuat\u201d \u7684\u670d\u52a1\u6765\u6e90\n  - name: uat\n    # \u6ce8\u518c\u4e2d\u5fc3\u7c7b\u578b\u662f Nacos 1.x\uff0c\u53ea\u652f\u6301 HTTP \u534f\u8bae\n    type: nacos\n    # \u6ce8\u518c\u4e2d\u5fc3\u7684\u8bbf\u95ee\u5730\u5740\uff0c\u53ef\u4ee5\u662f\u57df\u540d\u6216\u8005IP\n    domain: 192.xxx.xx.31\n    # \u6ce8\u518c\u4e2d\u5fc3\u7684\u8bbf\u95ee\u7aef\u53e3\uff0cNacos \u9ed8\u8ba4\u90fd\u662f 8848\n    port: 8848\n    # Nacos \u547d\u540d\u7a7a\u95f4 ID\n    nacosNamespaceId: 98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4    \n    # Nacos \u670d\u52a1\u5206\u7ec4\n    nacosGroups:\n    - DEFAULT_GROUP    \n")),(0,a.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 McpBridge \u8d44\u6e90\u914d\u7f6e\u4e86\u4e24\u4e2a\u670d\u52a1\u6765\u6e90\uff0c\u5206\u522b\u53d6\u540d \u201cproduction\u201d\u548c\u201cuat\u201d\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f Higress \u5bf9\u63a5 Nacos \u540c\u65f6\u652f\u6301 HTTP \u548c gRPC \u4e24\u79cd\u534f\u8bae\uff0c\u5efa\u8bae\u5c06 Nacos \u5347\u7ea7\u5230 2.x \u7248\u672c\uff0c\u8fd9\u6837\u53ef\u4ee5\u5728\u4e0a\u8ff0\u914d\u7f6e\u7684 type \u4e2d\u6307\u5b9a \u201cnacos2\u201d \u4f7f\u7528 gRPC \u534f\u8bae\uff0c\u4ece\u800c\u66f4\u5feb\u901f\u5730\u611f\u77e5\u5230\u670d\u52a1\u53d8\u5316\uff0c\u5e76\u6d88\u8017\u66f4\u5c11\u7684 Nacos \u670d\u52a1\u7aef\u8d44\u6e90\u3002\n\u57fa\u4e8e McpBridge \u4e2d\u7684 registries \u6570\u7ec4\u914d\u7f6e\uff0cHigress \u53ef\u4ee5\u8f7b\u677e\u5bf9\u63a5\u591a\u4e2a\u4e14\u4e0d\u540c\u7c7b\u578b\u7684\u670d\u52a1\u6765\u6e90\uff08Nacos/Zookeeper/Eureka/Consul/...\uff09\uff0c\u8fd9\u91cc\u5bf9\u4e8e Nacos \u7c7b\u578b\u7684\u670d\u52a1\u6765\u6e90\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\uff0c\u4ece\u800c\u5b9e\u73b0\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\u7684\u5fae\u670d\u52a1\u53ef\u4ee5\u5171\u7528\u4e00\u4e2a\u7f51\u5173\uff0c\u964d\u4f4e\u81ea\u5efa\u5fae\u670d\u52a1\u7f51\u5173\u7684\u8d44\u6e90\u6210\u672c\u5f00\u9500\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-ingress"},"\u914d\u7f6e Ingress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    higress.io/destination: service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos\n  name: demo\n  namespace: default\nspec:\n  rules:\n  - http:\n      paths:\n      - backend:\n          resource:\n            apiGroup: networking.higress.io\n            kind: McpBridge\n            name: default\n        path: /\n        pathType: Prefix\n")),(0,a.kt)("p",null,"\u548c\u5e38\u89c1\u7684 Ingress \u5728 backend \u4e2d\u5b9a\u4e49 service \u4e0d\u540c\uff0c\u8fd9\u91cc\u57fa\u4e8e Ingress \u7684 resource backend \u5c06\u4e0a\u9762\u5b9a\u4e49\u670d\u52a1\u6765\u6e90\u7684 McpBridge \u8fdb\u884c\u5173\u8054\u3002\u5e76\u901a\u8fc7\u6ce8\u89e3",(0,a.kt)("inlineCode",{parentName:"p"},"higress.io/destination"),"\u6307\u5b9a\u8def\u7531\u6700\u7ec8\u8981\u8f6c\u53d1\u5230\u7684\u76ee\u6807\u670d\u52a1\u3002\u5bf9\u4e8e Nacos \u6765\u6e90\u7684\u670d\u52a1\uff0c\u8fd9\u91cc\u7684\u76ee\u6807\u670d\u52a1\u683c\u5f0f\u4e3a\uff1a\u201c\u670d\u52a1\u540d\u79f0.\u670d\u52a1\u5206\u7ec4.\u547d\u540d\u7a7a\u95f4ID.nacos\u201d\uff0c\u6ce8\u610f\u8fd9\u91cc\u9700\u8981\u9075\u5faa DNS \u57df\u540d\u683c\u5f0f\uff0c\u56e0\u6b64\u670d\u52a1\u5206\u7ec4\u4e2d\u7684\u4e0b\u5212\u7ebf'_'\u88ab\u8f6c\u6362\u6210\u4e86\u6a2a\u6760'-'\u3002"),(0,a.kt)("h2",{id:"\u4e30\u5bcc\u7684\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b"},"\u4e30\u5bcc\u7684\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b"),(0,a.kt)("p",null,"Higress \u5728\u5fae\u670d\u52a1\u53d1\u73b0\u7684\u57fa\u7840\u4e0a\uff0c\u63d0\u4f9b\u4e86\u591a\u79cd\u5b9e\u7528\u7684\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b\uff0c\u8fd9\u91cc\u4ee5\u201c\u7070\u5ea6\u53d1\u5e03\u201d\u548c\u201c\u81ea\u5b9a\u4e49\u6269\u5c55\u201d\u8fdb\u884c\u4e3e\u4f8b\uff0c\u66f4\u591a\u80fd\u529b\u53ef\u4ee5\u70b9\u51fb\u539f\u6587\u53c2\u8003 Higress \u5b98\u7f51\u6587\u6863\u8fdb\u884c\u4e86\u89e3\u3002"),(0,a.kt)("h3",{id:"\u7070\u5ea6\u53d1\u5e03"},"\u7070\u5ea6\u53d1\u5e03"),(0,a.kt)("p",null,"Higress \u5b8c\u5168\u517c\u5bb9\u4e86 Nginx Ingress \u7684\u91d1\u4e1d\u96c0\uff08Canary\uff09\u76f8\u5173\u6ce8\u89e3\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u53ef\u4ee5\u5c06\u5e26\u6709HTTP Header\u4e3ax-user-id: 100\u7684\u8bf7\u6c42\u6d41\u91cf\u8def\u7531\u5230\u7070\u5ea6\u670d\u52a1\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  annotations:\n    higress.io/destination: service-provider.DEFAULT-GROUP.98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4.nacos\n    nginx.ingress.kubernetes.io/canary: 'true'\n    nginx.ingress.kubernetes.io/canary-by-header: x-user-id\n    nginx.ingress.kubernetes.io/canary-by-header-value: '100'\n  name: demo-uat\n  namespace: default\nspec:\n  rules:\n  - http:\n      paths:\n      - backend:\n          resource:\n            apiGroup: networking.higress.io\n            kind: McpBridge\n            name: default\n        path: /\n        pathType: Prefix\n")),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u57fa\u4e8e OpenKruise Rollout \u8ba9\u7070\u5ea6\u53d1\u5e03\u548c\u670d\u52a1\u90e8\u7f72\u8fc7\u7a0b\u8054\u52a8\uff0c\u4ece\u800c\u5b9e\u73b0\u6e10\u8fdb\u5f0f\u4ea4\u4ed8\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/vqwAUITNq9_twYHWX_5ZDg"},"\u300aHigress & Kruise Rollout: \u6e10\u8fdb\u5f0f\u4ea4\u4ed8\u4e3a\u5e94\u7528\u53d1\u5e03\u4fdd\u9a7e\u62a4\u822a\u300b")),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6269\u5c55"},"\u81ea\u5b9a\u4e49\u6269\u5c55"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u5fae\u670d\u52a1\u7f51\u5173\uff0c\u9700\u8981\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u627f\u62c5\u90e8\u5206\u901a\u7528\u903b\u8f91\u7684\u5904\u7406\uff0c\u4f8b\u5982\u8ba4\u8bc1\u9274\u6743\uff0c\u5b89\u5168\u9632\u62a4\u7b49\u3002\u901a\u7528\u7684\u903b\u8f91\u65e0\u6cd5\u6ee1\u8db3\u591a\u6837\u6027\u7684\u4e1a\u52a1\u573a\u666f\uff0cHigress \u53ef\u4ee5\u652f\u6301\u5f00\u53d1\u8005\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\u3002\u4e0e Spring Cloud Gateway \u7b49\u4f20\u7edf\u5fae\u670d\u52a1\u7f51\u5173\u9700\u8981\u5f00\u53d1\u8005\u81ea\u5df1\u5728 Gateway \u4ee3\u7801\u4e2d\u52a0 Filter \u4e0d\u540c\uff0cHigress \u652f\u6301\u5f00\u53d1\u8005\u4f7f\u7528\u591a\u79cd\u8bed\u8a00\u7f16\u5199 Wasm \u63d2\u4ef6\uff0c\u5e76\u52a8\u6001\u52a0\u8f7d\u751f\u6548\uff0c\u63d2\u4ef6\u751f\u6548\u8fc7\u7a0b\u65e0\u9700\u91cd\u542f\u7f51\u5173\uff0c\u53d8\u66f4\u63d2\u4ef6\u903b\u8f91\u5bf9\u6d41\u91cf\u5b8c\u5168\u65e0\u635f\u3002\n\u4e0b\u4f8b\u662f\u4e00\u4e2a\u5c4f\u853d\u7279\u5b9a\u8bf7\u6c42\u7684 Wasm \u63d2\u4ef6\uff0c\u5f53\u8bf7\u6c42 url \u4e2d\u51fa\u73b0 \u201cswagger.html\u201d \u65f6\u5c06\u88ab\u76f4\u63a5\u62d2\u7edd\u8bbf\u95ee\uff0c\u63d2\u4ef6\u5b9e\u73b0\u4ee3\u7801\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block"},"https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: extensions.istio.io/v1alpha1\nkind: WasmPlugin\nmetadata:\n  name: request-block\n  namespace: higress-system\nspec:\n  selector:\n    matchLabels:\n      higress: higress-system-higress-gateway\n  pluginConfig:\n    block_urls:\n    - "swagger.html"\n  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0\n')),(0,a.kt)("p",null,"Wasm \u63d2\u4ef6\u7684\u5f00\u53d1&\u7f16\u8bd1&\u955c\u50cf\u63a8\u9001\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\u8fd9\u7bc7\u6587\u7ae0",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/eoPlaOgRm7u5wJAxhbVGGg"},"\u300aHigress \u5b9e\u6218\uff1a30 \u884c\u4ee3\u7801\u5199\u4e00\u4e2a Wasm Go\u63d2\u4ef6\u300b")),(0,a.kt)("h1",{id:"\u5fae\u670d\u52a1\u7f51\u5173\u53d1\u5c55\u8d8b\u52bf"},"\u5fae\u670d\u52a1\u7f51\u5173\u53d1\u5c55\u8d8b\u52bf"),(0,a.kt)("h2",{id:"\u8d8b\u52bf\u4e00\u7edf\u4e00-api-\u6807\u51c6\u5411\u4e91\u539f\u751f\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb"},"\u8d8b\u52bf\u4e00\uff1a\u7edf\u4e00 API \u6807\u51c6\uff0c\u5411\u4e91\u539f\u751f\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e00\u5957 API \u53ef\u4ee5\u6709\u4e0d\u540c\u7684\u5b9e\u73b0\uff0c\u65e2\u8ba9\u7528\u6237\u4e0d\u88ab\u5177\u4f53\u5b9e\u73b0\u9501\u5b9a\uff0c\u53c8\u6865\u63a5\u4e86\u6280\u672f\u6f14\u8fdb\u7684\u9e3f\u6c9f\u3002API \u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u4e91\u539f\u751f\u67b6\u6784\u7684\u57fa\u77f3\uff0c\u6216\u8bb8\u6709\u4e00\u5929 K8s \u4f1a\u6d88\u5931\uff0c\u4f46\u662f\u9762\u5411\u62bd\u8c61\u7684 API \u6807\u51c6\u5b9a\u4f1a\u957f\u5b58\u3002\u5728\u6d41\u91cf\u7f51\u5173\u9886\u57df\uff0cIngress API \u5df2\u7ecf\u6210\u4e3a\u6807\u51c6\u3002\u800c\u5bf9\u4e8e\u5fae\u670d\u52a1\u7f51\u5173\u7b49\u66f4\u590d\u6742\u7684\u4f7f\u7528\u573a\u666f\uff0cIngress \u53d7\u9650\u4e8e\u5176\u7b80\u5355\u7684\u534f\u8bae\u5b57\u6bb5\uff0c\u9700\u8981\u901a\u8fc7 Ingress \u6ce8\u89e3\u7b49\u65b9\u5f0f\u8fdb\u884c\u80fd\u529b\u6269\u5c55\uff0c\u96be\u4ee5\u88ab\u6807\u51c6\u5316\u3002\u56e0\u6b64\u8bf8\u5982 Contour\u3001Emissary\u3001Kong\u3001APISIX \u7b49\u90fd\u5b9a\u4e49\u4e86\u81ea\u5df1\u7684 HTTP \u8def\u7531\u7b49 CRD\uff0c\u7f51\u5173\u7684 API \u5b9a\u4e49\u5f00\u59cb\u5448\u73b0\u788e\u7247\u5316\u3002\n\u8fd9\u4e00\u80cc\u666f\u4e4b\u4e0b\uff0cGateway API \u5e94\u8fd0\u800c\u751f\uff0c\u5e76\u4e14\u5728\u8fc7\u53bb\u7684\u4e00\u5e74\u91cc\u4ece alpha \u6f14\u8fdb\u5230\u4e86 beta \u9636\u6bb5\u3002\u867d\u7136\u76ee\u524d Gateway API \u8fd8\u672a\u5b9a\u7a3f\uff0c\u534f\u8bae\u4ecd\u4f1a\u53d1\u751f\u53d8\u52a8\uff0c\u4e0d\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\uff0c\u4f46 API \u7edf\u4e00\u8d8b\u52bf\u5df2\u7ecf\u4e0d\u53ef\u963b\u6321\uff0c\u53ea\u662f\u65f6\u95f4\u7684\u95ee\u9898\u3002\u4e0b\u56fe\u662f Gateway API \u7684\u4e00\u4e2a\u7528\u4f8b\u573a\u666f\uff0c\u4e0d\u540c\u4e8e Ingress API\uff0c\u5c06\u96c6\u7fa4\u8fd0\u7ef4\u548c\u4e1a\u52a1\u8fd0\u7ef4\u7684\u804c\u8d23\u8fdb\u884c\u4e86\u5212\u5206\uff0c\u8fd9\u6837\u4e1a\u52a1\u5f00\u53d1\u4eba\u5458\u4e0d\u518d\u9700\u8981\u5173\u5fc3\u7f51\u7ad9\u8bc1\u4e66\u7b49\u96c6\u7fa4\u7ea7\u7684\u7ec6\u8282\uff0c\u53ea\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u672c\u8eab\u7684 DevOps\uff0c\u96c6\u7fa4\u8fd0\u7ef4\u4efb\u52a1\u53ef\u4ee5\u4ea4\u7ed9 SRE \u4eba\u5458\u8fdb\u884c\u7edf\u4e00\u5904\u7406\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01jDsDrv1zaqj82YkYP_!!6000000006731-2-tps-2735-1519.png",alt:"image.png"}),"\nHigress \u76ee\u524d\u91c7\u7528 Ingress \u6ce8\u89e3\u7684\u80fd\u529b\u6765\u5b9e\u73b0\u80fd\u529b\u6269\u5c55\uff0c\u5e76\u517c\u5bb9\u4e86 Nginx Ingress \u5927\u90e8\u5206\u5e38\u7528\u6ce8\u89e3\uff0c\u4e14\u5177\u5907\u5e73\u6ed1\u8fc1\u79fb\u5230 Gateway API \u7684\u80fd\u529b\u3002\nHigress \u4e3a\u4f20\u7edf\u5fae\u670d\u52a1\u67b6\u6784\uff0c\u63d0\u4f9b\u4e86\u6e10\u8fdb\u5f0f\u7684\u65b9\u5f0f\uff0c\u5411\u57fa\u4e8e K8s \u7684\u4e91\u539f\u751f\u5fae\u670d\u52a1\u67b6\u6784\u6f14\u8fdb\uff1a\u53ef\u4ee5\u901a\u8fc7 Nacos \u53d1\u73b0\u90e8\u7f72\u5728 K8s \u4e4b\u5916\u7684\u670d\u52a1\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86\u7f51\u5173\u540e\u7aef\u5fae\u670d\u52a1\u53ef\u4ee5\u548c K8s \u89e3\u8026\uff0c\u4e1a\u52a1\u56e2\u961f\u53ef\u4ee5\u5c06\u5fae\u670d\u52a1\u9010\u4e2a\u8fc1\u79fb\u81f3 K8s\uff0c\u800c\u4e0d\u7528\u62c5\u5fc3\u7f51\u5173\u5c42\u7684\u6d41\u91cf\u5f71\u54cd\u3002\n\u4ece\u4f20\u7edf\u5fae\u670d\u52a1\u7f51\u5173\u8fc1\u79fb\u5230 Higress\uff0c\u518d\u6e10\u8fdb\u5f0f\u5b8c\u6210\u6574\u4e2a\u5fae\u670d\u52a1\u67b6\u6784\u7684\u4e91\u539f\u751f\u5316\uff0c\u662f\u4e00\u4e2a\u660e\u667a\u7684\u9009\u62e9\u3002"),(0,a.kt)("h2",{id:"\u8d8b\u52bf\u4e8c\u5408\u5e76\u5b89\u5168\u6d41\u91cf\u7f51\u5173\u5411-devsecops-\u6f14\u8fdb"},"\u8d8b\u52bf\u4e8c\uff1a\u5408\u5e76\u5b89\u5168&\u6d41\u91cf\u7f51\u5173\uff0c\u5411 DevSecOps \u6f14\u8fdb"),(0,a.kt)("p",null,"Higress \u63d0\u51fa\u4e86\u5c06\u5b89\u5168\u3001\u6d41\u91cf\u3001\u5fae\u670d\u52a1\u7f51\u5173\u4e09\u5408\u4e00\u7684\u6982\u5ff5\uff0c\u9996\u5148\u6765\u770b\u4e00\u4e2a\u5178\u578b\u7684\u591a\u5c42\u7f51\u5173\u67b6\u6784\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN0178hdNj25QDDnqmISC_!!6000000007520-2-tps-1318-198.png",alt:null}),"\n\u5728\u8fd9\u4e2a\u67b6\u6784\u4e2d\uff0c\u7528 WAF \u7f51\u5173\u5b9e\u73b0\u5b89\u5168\u80fd\u529b\uff0cIngress \u7f51\u5173\u5b9e\u73b0\u96c6\u7fa4\u5165\u53e3\u7f51\u5173\u80fd\u529b\uff08\u975e K8s \u573a\u666f\u6216\u4f1a\u90e8\u7f72\u4e00\u5c42 Nginx\uff09\uff0cSCG\uff08Spring Cloud Gateway\uff09 \u5b9e\u73b0\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b\u3002\u8fd9\u6837\u7684\u67b6\u6784\u4e0b\uff0c\u9700\u8981\u5bf9\u6bcf\u4e00\u5c42\u7f51\u5173\u90fd\u8fdb\u884c\u5bb9\u91cf\u8bc4\u4f30\uff0c\u6bcf\u4e00\u5c42\u7f51\u5173\u90fd\u662f\u6f5c\u5728\u7684\u74f6\u9888\u70b9\uff0c\u90fd\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u6269\u5bb9\u3002\u8fd9\u6837\u9020\u6210\u7684\u8d44\u6e90\u6210\u672c\u548c\u8fd0\u7ef4\u4eba\u529b\u6210\u672c\u90fd\u662f\u5de8\u5927\u7684\u3002\u5e76\u4e14\u6bcf\u591a\u4e00\u5c42\u7f51\u5173\uff0c\u5c31\u591a\u4e00\u5c42\u53ef\u7528\u6027\u98ce\u9669\u3002\u4e00\u65e6\u51fa\u73b0\u53ef\u7528\u6027\u95ee\u9898\uff0c\u591a\u5c42\u7f51\u5173\u4f1a\u5bfc\u81f4\u95ee\u9898\u5b9a\u4f4d\u590d\u6742\u5ea6\u663e\u8457\u4e0a\u5347\uff0c\u5bf9\u5e94\u7684\u5e73\u5747\u6545\u969c\u6062\u590d\u65f6\u95f4\uff08MTTR\uff09\u5c06\u5927\u5e45\u589e\u52a0\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01BnAVqH1SCE73I5l85_!!6000000002210-2-tps-1318-198.png",alt:null}),"\n\u91c7\u7528\u4e09\u5408\u4e00\u7684\u67b6\u6784\u4e2d\uff0c\u53ef\u4ee5\u663e\u8457\u964d\u4f4e\u6210\u672c\uff0c\u5e76\u63d0\u9ad8\u7cfb\u7edf\u6574\u4f53\u53ef\u7528\u6027\u3002\u540c\u65f6\u8fd9\u4e5f\u7b26\u5408 DevSecOps \u7684\u5fae\u670d\u52a1\u6f14\u8fdb\u8d8b\u52bf\uff0c\u5fae\u670d\u52a1\u5f00\u53d1\u8005\u53ef\u4ee5\u66f4\u591a\u5730\u4ece\u4e1a\u52a1\u63a5\u53e3\u89c6\u89d2\u5173\u6ce8\u5b89\u5168\u6027\uff0c\u800c\u4e0d\u662f\u91c7\u7528\u6240\u6709\u8def\u7531\u4e00\u5200\u5207\u7684 WAF \u9632\u62a4\u6a21\u5f0f\u3002\n\u6280\u672f\u67b6\u6784\u6f14\u8fdb\u7684\u80cc\u540e\u662f\u7ec4\u7ec7\u67b6\u6784\u6f14\u8fdb\uff0c\u8fd9\u4e5f\u662f\u5fae\u670d\u52a1 DevOps \u4e00\u76f4\u5728\u5f3a\u8c03\u7684\uff0c\u8981\u56f4\u7ed5\u5f00\u53d1\u8005\u4e3a\u6838\u5fc3\uff0c\u4ece\u800c\u63d0\u5347\u5fae\u670d\u52a1\u5f00\u53d1\u6548\u7387\u3002\u5411 DevSecOps \u6f14\u8fdb\u5e76\u6ca1\u6709\u6377\u5f84\uff0c\u4f9d\u7136\u9700\u8981\u5f00\u53d1\u89d2\u8272\u548c\u8fd0\u7ef4\u89d2\u8272\u4e4b\u95f4\u7684\u53cc\u5411\u5954\u8d74\uff0c\u6253\u7834\u4f20\u7edf\u5f00\u53d1\u4e0e\u8fd0\u7ef4\u4e4b\u95f4\u7684\u58c1\u5792\uff0c\u5f62\u6210\u4ece\u5f00\u53d1\u3001\u90e8\u7f72\u3001\u5b89\u5168\u8fd0\u8425\u8fd9\u6837\u4e00\u4e2a\u5168\u529f\u80fd\u5316\u7684\u654f\u6377\u56e2\u961f\u3002\n\u901a\u8fc7 Higress \u5c06\u7f51\u5173\u5408\u5e76\u4f5c\u4e3a\u5411 DevSecOps \u6f14\u8fdb\u7684\u6293\u624b\uff0c\u662f\u4e00\u4e2a\u660e\u667a\u7684\u9009\u62e9\u3002"),(0,a.kt)("h1",{id:"\u53c2\u4e0e-higress-\u793e\u533a"},"\u53c2\u4e0e Higress \u793e\u533a"),(0,a.kt)("p",null,"Higress \u5f00\u6e90\u8d21\u732e\u5c0f\u7ec4\u6b63\u5728\u706b\u70ed\u62db\u52df\u8d21\u732e\u8005\u3002\u5982\u679c\u60a8\u6709\u65f6\u95f4\uff0c\u6709\u70ed\u60c5\uff0c\u6709\u610f\u613f\uff0c\u6b22\u8fce\u8054\u7cfb\u793e\u533a\u52a0\u5165\u5f00\u6e90\u8d21\u732e\u5c0f\u7ec4\uff0c\u4e00\u8d77\u5171\u540c\u5b8c\u5584 Higress\uff0c\u4e00\u8d77\u4e3b\u5bfc\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u3002\n\u793e\u533a\u5b98\u7f51\uff08\u70b9\u51fb\u201c\u9605\u8bfb\u539f\u6587\u201d\u8df3\u8f6c\uff09: ",(0,a.kt)("a",{parentName:"p",href:"https://higress.io"},"https://higress.io"),"\n\u793e\u533a\u5f00\u53d1\u8005\u7fa4\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01Zc7yGt1p0zYq3OCwj_!!6000000005299-2-tps-979-1280.png",alt:"image.png"}),"\n\u793e\u533a\u4ea4\u6d41\u7fa4\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01Ebh7P021yKGBaP35B_!!6000000007053-2-tps-720-405.png",alt:"higress-comm.png"})),(0,a.kt)("h1",{id:"\u5b9e\u6218\u6f14\u793a\u76f4\u64ad"},"\u5b9e\u6218\u6f14\u793a\u76f4\u64ad"),(0,a.kt)("p",null,"1\u670812\u53f7\uff08\u672c\u5468\u56db\uff09\u5c06\u5728\u7ebf\u76f4\u64ad Higress \u901a\u8fc7 Nacos \u5b9e\u73b0\u5fae\u670d\u52a1\u7f51\u5173\u80fd\u529b\u7684\u5b9e\u6218\u6f14\u793a\uff0c\u53ef\u4ee5\u626b\u63cf\u56fe\u4e2d\u4e8c\u7ef4\u7801\uff0c\u9884\u7ea6\u89c2\u770b\uff0c\u5c06\u5728\u76f4\u64ad\u5f00\u59cb\u524d\u6536\u5230\u77ed\u4fe1\u901a\u77e5\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01fZzh1e1EQVqOnw415_!!6000000000346-2-tps-1500-2044.png",alt:"image.png"})))}u.isMDXComponent=!0}}]);