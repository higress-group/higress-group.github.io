"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[2537],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",keywords:["higress","architecture"],description:"Higress \u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e."},a="\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",l={unversionedId:"dev/architecture",id:"dev/architecture",title:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",description:"Higress \u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md",sourceDirName:"dev",slug:"/dev/architecture",permalink:"/zh-cn/docs/dev/architecture",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md",tags:[],version:"current",frontMatter:{title:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e",keywords:["higress","architecture"],description:"Higress \u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e."},sidebar:"docs",previous:{title:"\u6e90\u7801\u9605\u8bfb\u6307\u5f15",permalink:"/zh-cn/docs/dev/code"},next:{title:"Higress\u81ea\u5b9a\u4e49CRD\u5f00\u53d1\u6307\u5f15",permalink:"/zh-cn/docs/dev/CustomResourceDefinition"}},s={},c=[{value:"Higress Controller",id:"higress-controller",level:2},{value:"Higress Gateway",id:"higress-gateway",level:2},{value:"\u5feb\u901f\u6784\u5efa",id:"\u5feb\u901f\u6784\u5efa",level:3},{value:"\u5b8c\u6574\u6784\u5efa",id:"\u5b8c\u6574\u6784\u5efa",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e"},"\u7ec4\u4ef6\u7f16\u8bd1\u8bf4\u660e"),(0,i.kt)("h2",{id:"higress-controller"},"Higress Controller"),(0,i.kt)("p",null,"Higress \u7684\u63a7\u5236\u9762\u7a0b\u5e8f\uff0c\u4f1a\u8fde\u63a5 Istio \uff0c\u7528\u4e8e\u751f\u6210 Istio API \u5bf9\u8c61\uff0c\u901a\u8fc7 xDS \u534f\u8bae\u53d1\u9001\u7ed9 Istio\u3002"),(0,i.kt)("p",null,"\u5728 higress \u4ed3\u5e93\u76ee\u5f55\u4e0b\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make build")," \u5373\u53ef\u8fdb\u884c\u672c\u5730\u73af\u5883\u80fd\u8fd0\u884c\u7684\u4e8c\u8fdb\u5236\u7f16\u8bd1"),(0,i.kt)("p",null,"\u82e5\u9700\u8981\u7f16\u8bd1 docker \u955c\u50cf\uff0c\u8bf7\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"make docker-build"),"\u3002Higress Controller\u4f7f\u7528\u7684Istio pilot\u955c\u50cf\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"make build-istio-local")," \u7f16\u8bd1\u3002"),(0,i.kt)("h2",{id:"higress-gateway"},"Higress Gateway"),(0,i.kt)("p",null,"Higress \u7684\u6570\u636e\u9762\u7a0b\u5e8f\uff0c\u7528\u4e8e\u5b9e\u73b0\u7f51\u5173\u8def\u7531\u8f6c\u53d1\u7b49\u80fd\u529b\u3002"),(0,i.kt)("h3",{id:"\u5feb\u901f\u6784\u5efa"},"\u5feb\u901f\u6784\u5efa"),(0,i.kt)("p",null,"\u9002\u7528\u573a\u666f\uff1a\u672a\u5bf9 Envoy \u672c\u4f53\u8fdb\u884c\u4e86\u4fee\u6539\uff0c\u5373\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1 Envoy \u672c\u4f53\u7684\u60c5\u51b5"),(0,i.kt)("p",null,"\u6784\u5efa\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u547d\u4ee4\u884c\u4e0b\u8fdb\u5165 higress \u4ed3\u5e93\u76ee\u5f55\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"make build-gateway-local")," \u547d\u4ee4\uff0c\u8fdb\u884c Higress Gateway \u955c\u50cf\u7684\u6784\u5efa\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6784\u5efa\u5b8c\u6210\u540e\u4f1a\u8f93\u51fa\u955c\u50cf tag\u3002")),(0,i.kt)("h3",{id:"\u5b8c\u6574\u6784\u5efa"},"\u5b8c\u6574\u6784\u5efa"),(0,i.kt)("p",null,"\u9002\u7528\u573a\u666f\uff1a\u9700\u8981\u91cd\u65b0\u7f16\u8bd1 Envoy \u672c\u4f53\u7684\u60c5\u51b5"),(0,i.kt)("p",null,"\u6784\u5efa\u6b65\u9aa4\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u547d\u4ee4\u884c\u4e0b\u8fdb\u5165 higress \u4ed3\u5e93\u76ee\u5f55\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"cd external/proxy; BUILD_WITH_CONTAINER=1 make test_release")," \u547d\u4ee4\uff0c\u6784\u5efa Envoy \u672c\u4f53\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u751f\u6210\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"envoy.tar.gz")," \u6587\u4ef6\u4f1a\u653e\u5728 higress \u4ed3\u5e93\u76ee\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"external/package")," \u5b50\u76ee\u5f55\u5185\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5c06\u6784\u5efa\u5b8c\u6210\u540e\u8f93\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"envoy.tar.gz")," \u6587\u4ef6\uff0c\u6839\u636e\u672c\u673a\u7684\u7cfb\u7edf\u67b6\u6784\u91cd\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"envoy-amd64.tar.gz")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"envoy-arm64.tar.gz"),"\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u9700\u8981\u6784\u5efa\u591a\u5e73\u53f0\u955c\u50cf\uff0c\u90a3\u4e48\u9700\u8981\u5728\u53e6\u4e00\u4e2a\u5e73\u53f0\u7684\u7cfb\u7edf\u4e0a\u5b8c\u6210 Envoy \u7684\u6784\u5efa\uff0c\u5e76\u5c06\u5176\u751f\u6210\u7684 envoy.tar.gz \u6587\u4ef6\u91cd\u547d\u540d\u540e\u590d\u5236\u5230\u672c\u673a\u4e0a\uff08\u53c2\u8003\u4ee5\u4e0a 2\u30013 \u4e24\u6b65\uff09\uff1b"),(0,i.kt)("li",{parentName:"ol"},"\u53c2\u8003\u4e0a\u9762\u7684\u5feb\u901f\u6784\u5efa\u6b65\u9aa4\uff0c\u6784\u5efa Higress Gateway \u955c\u50cf\u3002")))}d.isMDXComponent=!0}}]);