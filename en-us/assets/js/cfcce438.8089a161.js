"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[8197],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},p),{},{components:r})):n.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={title:"Label an Issue",keywords:["Higress"],description:"Label an Issue.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/committer-guide/label-an-issue-guide_dev.md"},l="Label an Issue",s={unversionedId:"developers/committer-guide/label-an-issue-guide_dev",id:"developers/committer-guide/label-an-issue-guide_dev",title:"Label an Issue",description:"Label an Issue.",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/developers/committer-guide/label-an-issue-guide_dev.md",sourceDirName:"developers/committer-guide",slug:"/developers/committer-guide/label-an-issue-guide_dev",permalink:"/en-us/docs/developers/committer-guide/label-an-issue-guide_dev",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/committer-guide/label-an-issue-guide_dev.md",tags:[],version:"current",frontMatter:{title:"Label an Issue",keywords:["Higress"],description:"Label an Issue.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/committer-guide/label-an-issue-guide_dev.md"},sidebar:"developers",previous:{title:"Contributing to Higress",permalink:"/en-us/docs/developers/guide_dev"},next:{title:"Website Guide",permalink:"/en-us/docs/developers/committer-guide/website-guide_dev"}},o={},u=[],p={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"label-an-issue"},"Label an Issue"),(0,i.kt)("p",null,"If you are handling an issue, remember to ",(0,i.kt)("strong",{parentName:"p"},"mark the issue clearly with one or more labels")," whenever you think it's meaningful. With labels on, other developers can easily recognize problems, classify them or track progress. "),(0,i.kt)("p",null,"For issues or pull requests that need coding and further version release to fix, you should always ",(0,i.kt)("strong",{parentName:"p"},"mark it with a ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/alibaba/higress/milestones"},"milestone")),". "),(0,i.kt)("p",null,"Some frequently used labels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Help Wanted"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"help wanted"),(0,i.kt)("li",{parentName:"ul"},"good first issue"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Priority"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"priority/blocker"),(0,i.kt)("li",{parentName:"ul"},"priority/high"),(0,i.kt)("li",{parentName:"ul"},"priority/low"),(0,i.kt)("li",{parentName:"ul"},"priority/normal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Status"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"status/need-triage"),(0,i.kt)("li",{parentName:"ul"},"status/DO-NOT-MERGE"),(0,i.kt)("li",{parentName:"ul"},"status/READY-TO-MERGE"),(0,i.kt)("li",{parentName:"ul"},"status/invalid "),(0,i.kt)("li",{parentName:"ul"},"status/wontfix"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"type/bug"),(0,i.kt)("li",{parentName:"ul"},"type/documentation"),(0,i.kt)("li",{parentName:"ul"},"type/enhancement"),(0,i.kt)("li",{parentName:"ul"},"type/feature")))))}m.isMDXComponent=!0}}]);