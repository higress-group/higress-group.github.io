"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[6136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>a,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},a=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,a=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,d=l["".concat(i,".").concat(m)]||l[m]||g[m]||c;return r?n.createElement(d,s(s({ref:t},a),{},{components:r})):n.createElement(d,s({ref:t},a))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:o,s[1]=p;for(var u=2;u<c;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const c={title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 gRPC \u670d\u52a1",keywords:["ops","config","route","upstream","grpc"],description:"\u4ecb\u7ecd\u5982\u4f55\u4e3a\u4f7f\u7528 gRPC \u534f\u8bae\u7684\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u8def\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md"},s="\u8def\u7531\u6307\u5411 gRPC \u670d\u52a1",p={unversionedId:"ops/how-tos/grpc-upstream",id:"ops/how-tos/grpc-upstream",title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 gRPC \u670d\u52a1",description:"\u4ecb\u7ecd\u5982\u4f55\u4e3a\u4f7f\u7528 gRPC \u534f\u8bae\u7684\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u8def\u7531",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/how-tos/grpc-upstream.md",sourceDirName:"ops/how-tos",slug:"/ops/how-tos/grpc-upstream",permalink:"/zh-cn/docs/ops/how-tos/grpc-upstream",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md",tags:[],version:"current",frontMatter:{title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 gRPC \u670d\u52a1",keywords:["ops","config","route","upstream","grpc"],description:"\u4ecb\u7ecd\u5982\u4f55\u4e3a\u4f7f\u7528 gRPC \u534f\u8bae\u7684\u540e\u7aef\u670d\u52a1\u914d\u7f6e\u8def\u7531",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/grpc-upstream.md"},sidebar:"docs",previous:{title:"\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72",permalink:"/zh-cn/docs/ops/deploy-by-docker-compose"},next:{title:"\u914d\u7f6e\u8def\u7531\u6307\u5411 HTTPS \u670d\u52a1",permalink:"/zh-cn/docs/ops/how-tos/https-upstream"}},i={},u=[],a={toc:u},l="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},a,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8def\u7531\u6307\u5411-grpc-\u670d\u52a1"},"\u8def\u7531\u6307\u5411 gRPC \u670d\u52a1"),(0,o.kt)("p",null,"TBD"))}g.isMDXComponent=!0}}]);