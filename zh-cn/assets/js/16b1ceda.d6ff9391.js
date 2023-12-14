"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[4449],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),i=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=i(r),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(k,o(o({ref:e},u),{},{components:r})):n.createElement(k,o({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[c]="string"==typeof t?t:a,o[1]=p;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3965:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72",keywords:["deploy","docker compose","docker","ops"],description:"\u5982\u4f55\u4f7f\u7528 Docker Compose \u5b9e\u73b0 Higress \u7684\u72ec\u7acb\u90e8\u7f72",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-compose.md"},o="\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72",p={unversionedId:"ops/deploy-by-docker-compose",id:"ops/deploy-by-docker-compose",title:"\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72",description:"\u5982\u4f55\u4f7f\u7528 Docker Compose \u5b9e\u73b0 Higress \u7684\u72ec\u7acb\u90e8\u7f72",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-compose.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose",permalink:"/zh-cn/docs/ops/deploy-by-docker-compose",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-compose.md",tags:[],version:"current",frontMatter:{title:"\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72",keywords:["deploy","docker compose","docker","ops"],description:"\u5982\u4f55\u4f7f\u7528 Docker Compose \u5b9e\u73b0 Higress \u7684\u72ec\u7acb\u90e8\u7f72",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-compose.md"},sidebar:"docs",previous:{title:"\u4f7f\u7528 Helm \u8fdb\u884c\u4e91\u539f\u751f\u90e8\u7f72",permalink:"/zh-cn/docs/ops/deploy-by-helm"},next:{title:"\u7248\u672c\u5347\u7ea7",permalink:"/zh-cn/docs/ops/upgrade"}},s={},i=[{value:"\u5b89\u88c5 Higress",id:"\u5b89\u88c5-higress",level:2},{value:"\u5b89\u88c5\u547d\u4ee4",id:"\u5b89\u88c5\u547d\u4ee4",level:3},{value:"\u5b89\u88c5\u53c2\u6570",id:"\u5b89\u88c5\u53c2\u6570",level:3}],u={toc:i},c="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u4e8e-docker-compose-\u8fdb\u884c\u72ec\u7acb\u90e8\u7f72"},"\u57fa\u4e8e Docker Compose \u8fdb\u884c\u72ec\u7acb\u90e8\u7f72"),(0,a.kt)("p",null,"Docker Compose \u662f\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u591a\u5bb9\u5668 Docker \u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u5177\u3002\u901a\u8fc7\u5b83\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 YAML \u6587\u4ef6\u6765\u8131\u79bb K8s \u96c6\u7fa4\u6765\u5b9e\u73b0 Higress \u7f51\u5173\u7684\u72ec\u7acb\u90e8\u7f72\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,a.kt)("p",{parentName:"blockquote"},"Standalone \u6a21\u5f0f\u6ca1\u6709\u5927\u89c4\u6a21\u751f\u4ea7\u4f7f\u7528\u8fc7\uff0c\u76ee\u524d\u4e3b\u8981\u7528\u4e8e\u672c\u5730\u90e8\u7f72\u6d4b\u8bd5\u7684\u573a\u666f\uff0c\u5982\u679c\u751f\u4ea7\u90e8\u7f72\u66f4\u5efa\u8bae",(0,a.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/docs/ops/deploy-by-helm"},"\u4e91\u539f\u751f\u6a21\u5f0f"),"\u90e8\u7f72")),(0,a.kt)("h2",{id:"\u5b89\u88c5-higress"},"\u5b89\u88c5 Higress"),(0,a.kt)("p",null,"\u57fa\u4e8e Docker Compose \u90e8\u7f72\u65f6\uff0cHigress \u7f51\u5173\u7531\u5982\u4e0b\u51e0\u4e2a\u670d\u52a1\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"apiserver\uff1a\u57fa\u7840\u8bbe\u65bd\u670d\u52a1\u3002\u8d1f\u8d23\u6a21\u62df K8s \u7684 API Server\uff1b"),(0,a.kt)("li",{parentName:"ul"},"controller\uff1a\u63a7\u5236\u9762\u670d\u52a1\u4e00\u53f7\u3002\u8d1f\u8d23\u914d\u7f6e\u6536\u96c6\u6574\u5408\u6240\u6709\u7684\u914d\u7f6e\u6570\u636e\u548c\u670d\u52a1\u5217\u8868\uff1b"),(0,a.kt)("li",{parentName:"ul"},"pilot\uff1a\u63a7\u5236\u9762\u670d\u52a1\u4e00\u53f7\u3002\u8d1f\u8d23\u4e0b\u53d1\u7f51\u5173\u8def\u7531\u6570\u636e\uff1b"),(0,a.kt)("li",{parentName:"ul"},"gateway\uff1a\u6570\u636e\u9762\u670d\u52a1\u3002\u8d1f\u8d23\u627f\u8f7d\u5b9e\u9645\u7684\u7f51\u5173\u8bf7\u6c42\uff1b"),(0,a.kt)("li",{parentName:"ul"},"console\uff1aHigress \u7f51\u5173\u63a7\u5236\u53f0")),(0,a.kt)("h3",{id:"\u5b89\u88c5\u547d\u4ee4"},"\u5b89\u88c5\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- [DESTINATION] [OPTIONS...]\n")),(0,a.kt)("h3",{id:"\u5b89\u88c5\u53c2\u6570"},"\u5b89\u88c5\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u53c2\u6570\u540d")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u53c2\u6570\u8bf4\u660e")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"\u9ed8\u8ba4\u503c")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DESTINATION"),(0,a.kt)("td",{parentName:"tr",align:null},"\u76ee\u6807\u5b89\u88c5\u76ee\u5f55"),(0,a.kt)("td",{parentName:"tr",align:null},"./higress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-a",(0,a.kt)("br",null),"--auto-run"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5b8c\u6210\u540e\u81ea\u52a8\u542f\u52a8 Higress \u7f51\u5173"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-c CONFIG_URL",(0,a.kt)("br",null),"--config-url CONFIG_URL"),(0,a.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u670d\u52a1\u7684 URL\u3002",(0,a.kt)("br",null),"- \u82e5\u4f7f\u7528\u72ec\u7acb\u90e8\u7f72\u7684 Nacos \u670d\u52a1\uff08\u7248\u672c\u4e0d\u4f4e\u4e8e 2.0.0\uff09\uff0cURL \u683c\u5f0f\u4e3a\uff1anacos://192.168.0.1:8848",(0,a.kt)("br",null),"- \u82e5\u5728\u672c\u5730\u78c1\u76d8\u4e0a\u4fdd\u5b58\u914d\u7f6e\uff0cURL \u683c\u5f0f\u4e3a\uff1afile://opt/higress/conf"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--use-builtin-nacos"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5185\u7f6e\u7684 Nacos \u670d\u52a1\u3002\u4e0d\u5efa\u8bae\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002\u5982\u679c\u8bbe\u7f6e\u672c\u53c2\u6570\uff0c\u5219\u65e0\u9700\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"td"},"-c"),"\u53c2\u6570"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--nacos-ns=NACOS_NAMESPACE"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u4fdd\u5b58 Higress \u914d\u7f6e\u7684 Nacos \u547d\u540d\u7a7a\u95f4 ID"),(0,a.kt)("td",{parentName:"tr",align:null},"higress-system")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--nacos-username=NACOS_USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bbf\u95ee Nacos \u7684\u7528\u6237\u540d\u3002\u4ec5\u7528\u4e8e Nacos \u542f\u52a8\u4e86\u8ba4\u8bc1\u7684\u60c5\u51b5\u4e0b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--nacos-password=NACOS_PASSWORD"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bbf\u95ee Nacos \u7684\u7528\u6237\u5bc6\u7801\u3002\u4ec5\u7528\u4e8e Nacos \u542f\u52a8\u4e86\u8ba4\u8bc1\u7684\u60c5\u51b5\u4e0b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-k KEY",(0,a.kt)("br",null),"--data-enc-key=KEY"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u52a0\u5bc6\u654f\u611f\u914d\u7f6e\u6570\u636e\u7684\u5bc6\u94a5\u3002\u957f\u5ea6\u5fc5\u987b\u4e3a 32 \u4e2a\u5b57\u7b26\u3002\u82e5\u672a\u8bbe\u7f6e\uff0cHigress \u5c06\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u968f\u673a\u7684\u5bc6\u94a5\u3002\u82e5\u9700\u96c6\u7fa4\u90e8\u7f72\uff0c\u6b64\u9879\u5fc5\u987b\u8bbe\u7f6e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u968f\u673a\u5b57\u7b26\u4e32")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--nacos-port=NACOS_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u7f6e NACOS \u670d\u52a1\u5728\u670d\u52a1\u5668\u672c\u5730\u76d1\u542c\u7684\u7aef\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"8848")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--gateway-http-port=GATEWAY_HTTP_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Gateway \u5728\u670d\u52a1\u5668\u672c\u5730\u76d1\u542c\u7684 HTTP \u7aef\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--gateway-https-port=GATEWAY_HTTPS_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Gateway \u5728\u670d\u52a1\u5668\u672c\u5730\u76d1\u542c\u7684 HTTPS \u7aef\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--gateway-metrics-port=GATEWAY_METRIC_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Gateway \u5728\u670d\u52a1\u5668\u672c\u5730\u76d1\u542c\u7684\u7528\u4e8e\u66b4\u9732\u8fd0\u884c\u6307\u6807\u7aef\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"15020")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--console-port=CONSOLE_PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"Higress Console \u5728\u670d\u52a1\u5668\u672c\u5730\u76d1\u542c\u7684\u7aef\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"8080")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-r",(0,a.kt)("br",null),"--rerun"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728 Higress \u5df2\u914d\u7f6e\u5b8c\u6210\u540e\u91cd\u65b0\u6267\u884c\u914d\u7f6e\u6d41\u7a0b"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-h",(0,a.kt)("br",null),"--help"),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5e2e\u52a9\u4fe1\u606f"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0")))))}m.isMDXComponent=!0}}]);