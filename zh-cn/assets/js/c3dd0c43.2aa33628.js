"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[253],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),o=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(a),g=n,k=u["".concat(p,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=a(7462),n=(a(7294),a(3905));const l={title:"Higress \u5f00\u6e90\u4e4b\u590f\u9879\u76ee\u62a5\u540d",keywords:["higress","summer-ospp"],description:"Higress \u662f\u57fa\u4e8e\u963f\u91cc\u5185\u90e8\u4e24\u5e74\u591a\u7684\u5b9e\u8df5\u6c89\u6dc0\uff0c\u4ee5\u5f00\u6e90 Istio \u4e0e Envoy \u4e3a\u6838\u5fc3\u6784\u5efa\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173",author:"\u6f84\u6f6d",date:new Date("2023-05-09T00:00:00.000Z")},i=void 0,s={permalink:"/zh-cn/blog/ospp-2023",editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/ospp-2023.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/ospp-2023.md",title:"Higress \u5f00\u6e90\u4e4b\u590f\u9879\u76ee\u62a5\u540d",description:"Higress \u662f\u57fa\u4e8e\u963f\u91cc\u5185\u90e8\u4e24\u5e74\u591a\u7684\u5b9e\u8df5\u6c89\u6dc0\uff0c\u4ee5\u5f00\u6e90 Istio \u4e0e Envoy \u4e3a\u6838\u5fc3\u6784\u5efa\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173",date:"2023-05-09T00:00:00.000Z",formattedDate:"2023\u5e745\u67089\u65e5",tags:[],readingTime:8.635,hasTruncateMarker:!1,authors:[{name:"\u6f84\u6f6d"}],frontMatter:{title:"Higress \u5f00\u6e90\u4e4b\u590f\u9879\u76ee\u62a5\u540d",keywords:["higress","summer-ospp"],description:"Higress \u662f\u57fa\u4e8e\u963f\u91cc\u5185\u90e8\u4e24\u5e74\u591a\u7684\u5b9e\u8df5\u6c89\u6dc0\uff0c\u4ee5\u5f00\u6e90 Istio \u4e0e Envoy \u4e3a\u6838\u5fc3\u6784\u5efa\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173",author:"\u6f84\u6f6d",date:"2023-05-09T00:00:00.000Z"},prevItem:{title:"Higress \u96c6\u6210 Skywalking \u53ef\u89c2\u6d4b\u6027\u63a2\u7d22",permalink:"/zh-cn/blog/skywalking"},nextItem:{title:"\u4e0a\u7ebf\u63a7\u5236\u53f0\uff0c\u964d\u4f4e\u4f7f\u7528\u95e8\u69db \uff5c Higress 1.0.0 RC \u7248\u672c\u53d1\u5e03",permalink:"/zh-cn/blog/release-100"}},p={authorsImageUrls:[void 0]},o=[{value:"\u5f00\u6e90\u4e4b\u590f\u4ecb\u7ecd",id:"\u5f00\u6e90\u4e4b\u590f\u4ecb\u7ecd",level:2},{value:"Higress \u4ecb\u7ecd",id:"higress-\u4ecb\u7ecd",level:2},{value:"\u9879\u76ee\u4ecb\u7ecd",id:"\u9879\u76ee\u4ecb\u7ecd",level:2},{value:"\u9879\u76ee\u4e00\uff1aHigress Wasm \u63d2\u4ef6\u6784\u5efa/\u8c03\u8bd5/\u90e8\u7f72\u7684\u547d\u4ee4\u884c\u5b9e\u73b0",id:"\u9879\u76ee\u4e00higress-wasm-\u63d2\u4ef6\u6784\u5efa\u8c03\u8bd5\u90e8\u7f72\u7684\u547d\u4ee4\u884c\u5b9e\u73b0",level:3},{value:"\u9879\u76ee\u4e8c\uff1a\u57fa\u4e8e Wasm \u5b9e\u73b0 OIDC \u8ba4\u8bc1\u63d2\u4ef6",id:"\u9879\u76ee\u4e8c\u57fa\u4e8e-wasm-\u5b9e\u73b0-oidc-\u8ba4\u8bc1\u63d2\u4ef6",level:3},{value:"\u52a0\u5165\u793e\u533a",id:"\u52a0\u5165\u793e\u533a",level:2},{value:"\u76f8\u5173\u9879\u76ee\u63a8\u8350",id:"\u76f8\u5173\u9879\u76ee\u63a8\u8350",level:2}],m={toc:o},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5f00\u6e90\u4e4b\u590f\u4ecb\u7ecd"},"\u5f00\u6e90\u4e4b\u590f\u4ecb\u7ecd"),(0,n.kt)("p",null,"\u5f00\u6e90\u4e4b\u590f\u662f\u7531\u4e2d\u79d1\u9662\u8f6f\u4ef6\u6240\u201c\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u70b9\u4eae\u8ba1\u5212\u201d\u53d1\u8d77\u5e76\u957f\u671f\u652f\u6301\u7684\u4e00\u9879\u6691\u671f\u5f00\u6e90\u6d3b\u52a8\uff0c\u65e8\u5728\u9f13\u52b1\u5728\u6821\u5b66\u751f\u79ef\u6781\u53c2\u4e0e\u5f00\u6e90\u8f6f\u4ef6\u7684\u5f00\u53d1\u7ef4\u62a4\uff0c\u57f9\u517b\u548c\u53d1\u6398\u66f4\u591a\u4f18\u79c0\u7684\u5f00\u53d1\u8005\uff0c\u4fc3\u8fdb\u4f18\u79c0\u5f00\u6e90\u8f6f\u4ef6\u793e\u533a\u7684\u84ec\u52c3\u53d1\u5c55\uff0c\u52a9\u529b\u5f00\u6e90\u8f6f\u4ef6\u4f9b\u5e94\u94fe\u5efa\u8bbe\u3002"),(0,n.kt)("p",null,"\u76ee\u524d",(0,n.kt)("a",{parentName:"p",href:"https://summer-ospp.ac.cn"},"\u5f00\u6e90\u4e4b\u590f\u5b98\u7f51"),"\u5df2\u7ecf\u5f00\u542f\u4e86\u5b66\u751f\u62a5\u540d\uff0c\u53ea\u8981\u4f60\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\u5373\u53ef\u8fdb\u884c\u9879\u76ee\u7533\u8bf7\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u6d3b\u52a8\u9762\u5411\u5e74\u6ee1 18 \u5468\u5c81\u5728\u6821\u5b66\u751f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6691\u671f\u5373\u5c06\u6bd5\u4e1a\u7684\u5b66\u751f\uff0c\u53ea\u8981\u5728\u7533\u8bf7\u65f6\u5b66\u751f\u8bc1\u5904\u5728\u6709\u6548\u671f\u5185\uff0c\u5c31\u53ef\u4ee5\u63d0\u4ea4\u7533\u8bf7\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u56fd\u7c4d\u5b66\u751f\u53c2\u4e0e\u6d3b\u52a8\u9700\u63d0\u4f9b\u8eab\u4efd\u8bc1\u3001\u5b66\u751f\u8bc1\u3001\u6559\u80b2\u90e8\u5b66\u7c4d\u5728\u7ebf\u9a8c\u8bc1\u62a5\u544a\uff08\u5b66\u4fe1\u7f51\uff09\u6216\u5728\u8bfb\u8bc1\u660e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u7c4d\u5b66\u751f\u53c2\u4e0e\u6d3b\u52a8\u9700\u63d0\u4f9b\u62a4\u7167\uff0c\u540c\u65f6\u63d0\u4f9b\u5f55\u53d6\u901a\u77e5\u4e66\u3001\u5b66\u751f\u5361\u3001\u5728\u8bfb\u8bc1\u660e\u7b49\u6587\u4ef6\u7528\u4e8e\u8bc1\u660e\u5b66\u751f\u8eab\u4efd\u3002")),(0,n.kt)("p",null,"\u53c2\u4e0e\u9879\u76ee\u4e0d\u4ec5\u53ef\u4ee5\u4e3a\u5f00\u6e90\u4e16\u754c\u505a\u51fa\u81ea\u5df1\u7684\u8d21\u732e\uff0c\u8fd8\u80fd\u83b7\u5f97\u4e30\u539a\u7684\u7ed3\u9879\u5956\u91d1\uff08\u57fa\u7840\u96be\u5ea68000 RMB/\u8fdb\u9636\u96be\u5ea612000 RMB\uff09\uff0c\u9879\u76ee\u7ecf\u9a8c\u4e5f\u4f1a\u6210\u4e3a\u4f60\u6bd5\u4e1a\u7b80\u5386\u4e0a\u7684\u4eae\u70b9\uff0c\u5feb\u6765\u62a5\u540d\u5427\uff01"),(0,n.kt)("p",null,"\u62a5\u540d\u622a\u6b62\u65f6\u95f4\u4e3a 6 \u6708 3 \u65e5 15 \u70b9\uff0c\u5177\u4f53\u53c2\u8003\u5b98\u7f51\u6d3b\u52a8\u6d41\u7a0b\u548c\u53c2\u4e0e\u6307\u5357\u4ecb\u7ecd\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01gxAj9N27FL4twpxbV_!!6000000007767-0-tps-2768-1114.jpg",alt:null})),(0,n.kt)("h2",{id:"higress-\u4ecb\u7ecd"},"Higress \u4ecb\u7ecd"),(0,n.kt)("p",null,"Higress \u662f\u57fa\u4e8e\u963f\u91cc\u5185\u90e8\u4e24\u5e74\u591a\u7684\u5b9e\u8df5\u6c89\u6dc0\uff0c\u4ee5\u5f00\u6e90 Istio \u4e0e Envoy \u4e3a\u6838\u5fc3\u6784\u5efa\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173\u3002Higress \u5b9e\u73b0\u4e86\u5b89\u5168\u9632\u62a4\u7f51\u5173\u3001\u6d41\u91cf\u7f51\u5173\u3001\u5fae\u670d\u52a1\u7f51\u5173\u4e09\u5c42\u7f51\u5173\u5408\u4e00\uff0c\u53ef\u4ee5\u663e\u8457\u964d\u4f4e\u7f51\u5173\u7684\u90e8\u7f72\u548c\u8fd0\u7ef4\u6210\u672c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01iO9ph825juHbOIg75_!!6000000007563-2-tps-2483-2024.png",alt:null})),(0,n.kt)("p",null,"Higress \u5728\u963f\u91cc\u5185\u90e8\u7684\u8bde\u751f\u548c\u6f14\u8fdb\u5386\u7a0b\u53ef\u4ee5\u770b\u8fd9\u7bc7\u6587\u7ae0:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/dgvd9TslzhX1ZuUNIH2ZXg"},"\u963f\u91cc\u5df4\u5df4\u91cd\u78c5\u5f00\u6e90\u4e91\u539f\u751f\u7f51\u5173: Higress")),(0,n.kt)("p",null,"Higress \u5f00\u6e90\u534a\u5e74\u65f6\u95f4\uff0cGitHub star \u6570\u5df2\u7ecf\u7834\u5343\uff0c\u5728\u4e0a\u4e2a\u6708 Higress \u5df2\u7ecf Release \u51fa\u4e86\u7b2c\u4e00\u4e2a RC \u7248\u672c\uff0c\u4f5c\u4e3a\u6b63\u5f0f GA \u7684\u5019\u9009\u53d1\u5e03\u7248\u672c\uff0c\u8be6\u60c5\u53ef\u4ee5\u67e5\u770b\u8fd9\u7bc7\u6587\u7ae0:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/ogy-xXXLEgzw6otaIAT6Dw"},"\u4e0a\u7ebf\u63a7\u5236\u53f0\uff0c\u964d\u4f4e\u4f7f\u7528\u95e8\u69db\uff5cHigress 1.0.0 RC \u7248\u672c\u53d1\u5e03")),(0,n.kt)("p",null,"\u5728\u672c\u6b21\u5f00\u6e90\u4e4b\u590f\u6d3b\u52a8\u4e2d\uff0cHigress \u6709\u4e24\u4e2a\u8fdb\u9636\u96be\u5ea6\u7684\u9879\u76ee\u53ef\u4ee5\u7533\u8bf7\uff0c\u6b22\u8fce\u5404\u4f4d\u540c\u5b66\u8e0a\u8dc3\u62a5\u540d\u3002"),(0,n.kt)("h2",{id:"\u9879\u76ee\u4ecb\u7ecd"},"\u9879\u76ee\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"\u9879\u76ee\u4e00higress-wasm-\u63d2\u4ef6\u6784\u5efa\u8c03\u8bd5\u90e8\u7f72\u7684\u547d\u4ee4\u884c\u5b9e\u73b0"},"\u9879\u76ee\u4e00\uff1aHigress Wasm \u63d2\u4ef6\u6784\u5efa/\u8c03\u8bd5/\u90e8\u7f72\u7684\u547d\u4ee4\u884c\u5b9e\u73b0"),(0,n.kt)("p",null,"Higress \u63d0\u4f9b\u4e86\u5f88\u65b9\u4fbf\u7684 Wasm \u63d2\u4ef6\u6269\u5c55\u6846\u67b6\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u770b\u8fd9\u7bc7\u6587\u7ae0\uff1a ",(0,n.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/blog/30-line-wasm"},"30\u884c\u4ee3\u7801\u5199\u4e00\u4e2aWasm Go\u63d2\u4ef6")),(0,n.kt)("p",null,"\u66f4\u8be6\u7ec6\u7684\u63d2\u4ef6\u5f00\u53d1\u548c\u8c03\u8bd5\u6d41\u7a0b\u53ef\u4ee5\u67e5\u770b\u8fd9\u7bc7\u6587\u7ae0\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/docs/user/wasm-go"},"\u4f7f\u7528 Go \u8bed\u8a00\u5f00\u53d1 WASM \u63d2\u4ef6")),(0,n.kt)("p",null,"\u8fd9\u91cc\u5bf9\u63d2\u4ef6\u7684\u751f\u6548\u673a\u5236\u7b80\u5355\u505a\u4e2a\u8bf4\u660e\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01PO4HYC1h7qYHonHHZ_!!6000000004231-2-tps-1100-537.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u5c06\u4ee3\u7801\u7f16\u8bd1\u6210 wasm \u6587\u4ef6"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u5c06 wasm \u6587\u4ef6\u6784\u5efa\u6210 oci \u955c\u50cf"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u5c06 oci \u955c\u50cf\u63a8\u9001\u81f3\u955c\u50cf\u4ed3\u5e93"),(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u521b\u5efa WasmPlugin \u8d44\u6e90"),(0,n.kt)("li",{parentName:"ol"},"Istio watch \u5230 WasmPlugin \u8d44\u6e90\u7684\u53d8\u5316"),(0,n.kt)("li",{parentName:"ol"},"Higress Gateway \u4e2d\u7684 xDS proxy \u8fdb\u7a0b\u4ece Istio \u83b7\u53d6\u5230\u914d\u7f6e\uff0c\u53d1\u73b0\u63d2\u4ef6\u7684\u955c\u50cf\u5730\u5740"),(0,n.kt)("li",{parentName:"ol"},"xDS proxy \u4ece\u955c\u50cf\u4ed3\u5e93\u62c9\u53d6\u955c\u50cf"),(0,n.kt)("li",{parentName:"ol"},"xDS proxy \u4ece\u955c\u50cf\u4e2d\u63d0\u53d6\u51fa wasm \u6587\u4ef6"),(0,n.kt)("li",{parentName:"ol"},"Higress Gateway \u4e2d\u7684 envoy \u8fdb\u7a0b\u4ece xDS proxy \u83b7\u53d6\u5230\u914d\u7f6e\uff0c\u53d1\u73b0 wasm \u6587\u4ef6\u7684\u672c\u5730\u8def\u5f84"),(0,n.kt)("li",{parentName:"ol"},"envoy \u4ece\u672c\u5730\u6587\u4ef6\u4e2d\u52a0\u8f7d wasm \u6587\u4ef6")),(0,n.kt)("p",null,"\u8fd9\u91cc envoy \u83b7\u53d6\u914d\u7f6e\u5e76\u52a0\u8f7d wasm \u6587\u4ef6\u4f7f\u7528\u5230\u4e86 ECDS (Extension Config Discovery Service)\u7684\u673a\u5236\uff0c\u5b9e\u73b0\u4e86 wasm \u6587\u4ef6\u66f4\u65b0\uff0c\u76f4\u63a5\u70ed\u52a0\u8f7d\uff0c\u4e0d\u4f1a\u5bfc\u81f4\u4efb\u4f55\u8fde\u63a5\u4e2d\u65ad\uff0c\u4e1a\u52a1\u6d41\u91cf\u5b8c\u5168\u65e0\u635f\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u9879\u76ee\u7684\u521d\u8877\u662f\u5e0c\u671b\u80fd\u57fa\u4e8e Higress \u7684 CLI \u547d\u4ee4\u884c\u5de5\u5177(hgctl) \u6765\u8fdb\u4e00\u6b65\u7b80\u5316 Higress Wasm \u63d2\u4ef6\u7684\u5f00\u53d1\u8c03\u8bd5\u548c\u5b89\u88c5\u90e8\u7f72\u6b65\u9aa4\uff0c\u4f7f\u4e4b\u66f4\u5bb9\u6613\u4e0a\u624b\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u9700\u8981\u5b9e\u73b0\u7684 hgctl \u547d\u4ee4\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hgctl plugin build\uff1a\u6784\u5efa wasm OCI \u955c\u50cf\u5e76\u63a8\u9001\u5230\u6307\u5b9a\u4ed3\u5e93"),(0,n.kt)("li",{parentName:"ul"},"hgctl plugin test\uff1a\u542f\u52a8 docker compose \u6d4b\u8bd5\u63d2\u4ef6\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"hgctl plugin install/uninstall \uff1a\u5728\u5f53\u524dhigress\u96c6\u7fa4\u4e2d\u5b89\u88c5\u6216\u5378\u8f7d\u63d2\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"hgctl plugin config\uff1a\u4fee\u6539\u5236\u5b9a\u63d2\u4ef6\u7684\u914d\u7f6e")),(0,n.kt)("p",null,"Higress Wasm \u63d2\u4ef6\u914d\u7f6e\u57fa\u4e8e Openapi Specification \uff08OAS 3.0\uff09\u8fdb\u884c\u7ea6\u675f\uff0c\u9700\u8981\u80fd\u4ece\u4ee3\u7801\u4e2d\u89e3\u6790\u51fa\u63d2\u4ef6\u914d\u7f6e\u5b57\u6bb5\u683c\u5f0f\uff0c\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u7684 OAS \u7ea6\u675f\uff0c\u7528\u4e8e\u6dfb\u52a0\u5230 OCI \u955c\u50cf\u4e2d\uff0c\u5e76\u540c\u65f6\u7528\u4e8e install/uninstall/config \u7b49\u547d\u4ee4\u7684\u53c2\u6570\u914d\u7f6e\u6821\u9a8c"),(0,n.kt)("h3",{id:"\u9879\u76ee\u4e8c\u57fa\u4e8e-wasm-\u5b9e\u73b0-oidc-\u8ba4\u8bc1\u63d2\u4ef6"},"\u9879\u76ee\u4e8c\uff1a\u57fa\u4e8e Wasm \u5b9e\u73b0 OIDC \u8ba4\u8bc1\u63d2\u4ef6"),(0,n.kt)("p",null,"Higress \u4f5c\u4e3a\u4e00\u4e2a\u4e91\u539f\u751f\u7f51\u5173\uff0c\u9700\u8981\u5b9e\u73b0 OIDC \u8ba4\u8bc1\u7684\u80fd\u529b\uff0c\u65b9\u4fbf\u7528\u6237\u5bf9\u63a5\u5916\u90e8\u8ba4\u8bc1\u670d\u52a1\u3002"),(0,n.kt)("p",null,"OIDC \uff08OpenID Connect\uff09 \u662f\u57fa\u4e8e OAuth 2.0 \u7684\u8eab\u4efd\u8ba4\u8bc1\u534f\u8bae\uff0c\u53ef\u4ee5\u7528\u4e8e\u5b9e\u73b0 SSO\uff08Single Sign On\uff09\u5355\u70b9\u767b\u5f55\uff0c\u5373\u901a\u8fc7\u7f51\u5173\u7edf\u4e00\u5b8c\u6210\u7528\u6237\u7684\u8eab\u4efd\u8ba4\u8bc1\uff0c\u5728\u8eab\u4efd\u8ba4\u8bc1\u6210\u529f\u540e\uff0c\u518d\u5c06\u8d44\u6e90\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u540e\u7aef\u670d\u52a1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://summer-resource.obs.cn-north-4.myhuaweicloud.com/image_1682322347641.png?AccessKeyId=PVWAQ81YUWFDVEUNOSXR&Expires=1768722347&Signature=uaKg4CAupPRGPdz%2BtRT1qcc5SeI%3D",alt:null})),(0,n.kt)("p",null,"\u6d41\u7a0b\u7b80\u4ecb\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u5411\u7f51\u5173\u53d1\u8d77\u8ba4\u8bc1\u8bf7\u6c42\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7f51\u5173\u5c06\u8ba4\u8bc1\u8bf7\u6c42\u76f4\u63a5\u8f6c\u53d1\u5230\u7ed9\u8ba4\u8bc1\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8ba4\u8bc1\u670d\u52a1\u8bfb\u53d6\u8bf7\u6c42\u4e2d\u7684\u9a8c\u8bc1\u4fe1\u606f\uff08\u4f8b\u5982\u7528\u6237\u540d\u3001\u5bc6\u7801\uff09\u8fdb\u884c\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u901a\u8fc7\u540e\u8fd4\u56deCode\u7ed9\u7f51\u5173\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7f51\u5173\u5c06\u643a\u5e26Code\u7684\u5e94\u7b54\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u5411\u7f51\u5173\u8bf7\u6c42\u56de\u8c03\u63a5\u53e3\uff0c\u8bf7\u6c42\u4e2d\u643a\u5e26Code\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7f51\u5173\u8bf7\u6c42\u8ba4\u8bc1\u670d\u52a1\u9881\u53d1Token\uff0c\u8bf7\u6c42\u4e2d\u643a\u5e26Code\u3001Client ID\u3001Client Secret\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8ba4\u8bc1\u670d\u52a1\u9a8c\u8bc1\u5408\u6cd5\u6027\uff0c\u5e76\u8fd4\u56deID Token\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8ba4\u8bc1\u6210\u529f\uff0c\u7f51\u5173\u5c06\u643a\u5e26ID Token\u7684\u5e94\u7b54\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5ba2\u6237\u7aef\u5411\u7f51\u5173\u53d1\u8d77\u4e1a\u52a1\u8bf7\u6c42\uff0c\u8bf7\u6c42\u4e2d\u643a\u5e26ID Token\uff0c\u7f51\u5173\u6821\u9a8c\u8bf7\u6c42\u4e2d\u662f\u5426\u643a\u5e26ID Token\u548c\u5408\u6cd5\u6027\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7f51\u5173\u6821\u9a8c\u5ba2\u6237\u7aef\u7684\u4e1a\u52a1\u8bf7\u6c42\u5408\u6cd5\uff0c\u5c06\u8bf7\u6c42\u900f\u4f20\u7ed9\u4e1a\u52a1\u670d\u52a1\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4e1a\u52a1\u670d\u52a1\u8fdb\u884c\u4e1a\u52a1\u5904\u7406\u540e\u5e94\u7b54\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7f51\u5173\u5c06\u4e1a\u52a1\u5e94\u7b54\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002")),(0,n.kt)("p",null,"\u76ee\u524d Higress \u4e5f\u53ef\u4ee5\u57fa\u4e8e Envoy \u7684 Ext Authz \u673a\u5236\u5bf9\u63a5\u5916\u7f6e\u7684 oauth2-proxy \u6765\u5b9e\u73b0\u9274\u6743\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u65b9\u6848\u4e00\u65b9\u9762\u6709\u989d\u5916\u7684\u8bf7\u6c42\u5f00\u9500\uff0c\u53e6\u4e00\u65b9\u9762 oauth2-proxy \u53ea\u80fd\u4f5c\u4e00\u7ec4 OIDC \u914d\u7f6e\uff0c\u65e0\u6cd5\u5bf9\u63a5\u591a\u4e2a\u4e0d\u540c\u7684\u8ba4\u8bc1\u670d\u52a1"),(0,n.kt)("h2",{id:"\u52a0\u5165\u793e\u533a"},"\u52a0\u5165\u793e\u533a"),(0,n.kt)("p",null,"GitHub\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress"},"https://github.com/alibaba/higress")),(0,n.kt)("p",null,"\u5b98\u7f51: ",(0,n.kt)("a",{parentName:"p",href:"https://higress.io"},"https://higress.io")),(0,n.kt)("p",null,"\u5bf9\u4e8e\u62a5\u540d\u65b9\u5f0f\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u6216\u8005\u5bf9\u67d0\u4e00\u4e2a\u4efb\u52a1\u975e\u5e38\u611f\u5174\u8da3\uff0c\u5e76\u4e14\u60f3\u8981\u6df1\u5165\u4e86\u89e3\u7684\u540c\u5b66\uff0c\u6b22\u8fce\u626b\u7801\u6dfb\u52a0\u5fae\u4fe1\uff0c\u5907\u6ce8\u5f00\u6e90\u4e4b\u590f"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01bkpHik1yZBhbnhyTf_!!6000000006592-2-tps-500-500.png",alt:null})),(0,n.kt)("h2",{id:"\u76f8\u5173\u9879\u76ee\u63a8\u8350"},"\u76f8\u5173\u9879\u76ee\u63a8\u8350"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"li"},"\u5fae\u670d\u52a1\u6ce8\u518c\u53d1\u73b0\u548c\u914d\u7f6e\u7ba1\u7406"),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5 ",(0,n.kt)("a",{parentName:"li",href:"https://nacos.io/zh-cn/blog/iscas2023.html"},"Nacos")," \u5f00\u6e90\u4e4b\u590f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"li"},"\u5fae\u670d\u52a1\u5206\u5e03\u5f0f\u4e8b\u52a1"),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5 ",(0,n.kt)("a",{parentName:"li",href:"https://summer-ospp.ac.cn/org/orgdetail/064c15df-705c-483a-8fc8-02831370db14?lang=zh"},"Seata")," \u5f00\u6e90\u4e4b\u590f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"li"},"\u5fae\u670d\u52a1\u6846\u67b6\u548cRPC\u6846\u67b6"),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5 ",(0,n.kt)("a",{parentName:"li",href:"https://summer-ospp.ac.cn/org/orgdetail/41d68399-ed48-4d6d-9d4d-3ff4128dc132?lang=zh"},"Spring Cloud Alibaba")," \u548c ",(0,n.kt)("a",{parentName:"li",href:"https://summer-ospp.ac.cn/org/orgdetail/a7f6e2ad-4acc-47f8-9471-4e54b9a166a6?lang=zh"},"Dubbo")," \u5f00\u6e90\u4e4b\u590f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"li"},"\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528\u9632\u62a4"),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5 ",(0,n.kt)("a",{parentName:"li",href:"https://summer-ospp.ac.cn/org/orgdetail/5e879522-bd90-4a8b-bf8b-b11aea48626b?lang=zh"},"Sentinel")," \u5f00\u6e90\u4e4b\u590f\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"li"},"\u5fae\u670d\u52a1\u6cbb\u7406"),"\u6709\u5174\u8da3\u7684\u540c\u5b66\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u586b\u62a5 ",(0,n.kt)("a",{parentName:"li",href:"https://summer-ospp.ac.cn/org/orgdetail/aaff4eec-11b1-4375-997d-5eea8f51762b?lang=zh"},"OpenSergo")," \u5f00\u6e90\u4e4b\u590f\u3002")))}c.isMDXComponent=!0}}]);