import{h as p,A as B,y as _}from"./hooks.module.Citze9Tm.js";import{u as e}from"./jsxRuntime.module.BmLhYE4m.js";import{k as C}from"./preact.module.DSP1G4xJ.js";import{v as L,__tla as E}from"./constant.BZpKXPh9.js";import{i as M}from"./util.BGCE2te7.js";import{__tla as z}from"./astro/assets-service.Da9pL5MS.js";let S,F=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return z}catch{}})()]).then(async()=>{let i,o,g,w,u;i=r=>e("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2330",width:"24",height:"24",children:e("path",{d:"M392.533333 806.4L85.333333 503.466667l59.733334-59.733334 247.466666 247.466667L866.133333 213.333333l59.733334 59.733334L392.533333 806.4z",fill:"#4aba49","p-id":"2331"})}),o=r=>e("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2296",width:"24",height:"24",children:e("path",{d:"M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",fill:"#444444","p-id":"2297"})}),g=r=>{const{dataSource:n,title:h,isHead:c=!1}=r,s=n.length;return e("div",{class:"tableplugin overflow-x-auto rounded-2xl mb-6",children:[c&&e("table",{class:"w-full",children:e("tr",{children:[e("th",{class:"col1 border-0"}),e("th",{class:"col2 border-0"}),e("th",{class:"col3 overflow-hidden",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" \u793E\u533A\u7248"}),e("div",{class:"text-warning text-xs h-28 leading-8",children:"\u514D\u8D39"})]}),e("th",{class:"col4",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" \u4E13\u4E1A\u7248"}),e("div",{class:"h-28 text-warning text-xs text-left pl-4",children:[e("p",{class:"mb-1",children:"\u540E\u4ED8\u8D39\uFF1A0.84\u5143/\u8282\u70B9/\u5C0F\u65F6\u8D77"}),e("p",{class:"mb-1",children:"\u8D44\u6E90\u5305\uFF1A422\u5143/\u6708\u8D77\uFF08\u76F8\u5F53\u4E8E1\u4E2A\u8282\u70B9\u8FDE\u7EED\u8FD0\u884C7200\u5C0F\u65F6\uFF09"}),e("p",{class:"mb-1",children:"1. \u9996\u6B21\u8D2D\u4E70\u8D44\u6E90\u5305\u4EAB\u53D74\u6298\u4F18\u60E0\uFF0C\u6BD4\u540E\u4ED8\u8D39\u8282\u7701436\u5143/\u6708"}),e("p",{class:"mb-1",children:"2. \u8D44\u6E90\u5305\u7EED\u8D39\uFF0C\u6BD4\u540E\u4ED8\u8D39\u8282\u7701183\u5143/\u6708"})]})]}),e("th",{class:"col5",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" Serverless \u7248"}),e("div",{class:"h-28 text-warning text-xs text-left pl-4",children:[e("p",{class:"mb-1",children:"\u540E\u4ED8\u8D39\uFF1A0.135\u5143/\u4E07\u6B21\u8BF7\u6C42\uFF08\u91C7\u7528\u9636\u68AF\u8BA1\u8D39\uFF0C\u7528\u5F97\u8D8A\u591A\uFF0C\u5355\u4F4D\u8BF7\u6C42\u8BA1\u8D39\u8D8A\u4FBF\u5B9C\uFF09"}),e("p",{class:"mb-1",children:"\u8D44\u6E90\u5305\uFF1A92\u5143\u8D77"}),e("p",{class:"mb-1",children:"1. \u627F\u8BFA\u8D2D\u4E70\u65F6\u957F3\u4E2A\u6708\uFF0C\u4EAB95\u6298"}),e("p",{class:"mb-1",children:"2. \u627F\u8BFA\u8D2D\u4E70\u65F6\u957F1\u5E74\uFF0C\u4EAB9\u6298"})]})]})]})}),e("table",{class:"table bg-secondary rounded-2xl table-fixed",children:n.map((l,d)=>e("tr",{children:[d===0&&e("td",{class:"col1 text-[12px] align-top text-center leading-8",rowspan:s,children:h}),e("td",{class:"col2 text-base font-normal color-gray-14",children:[l.name.title&&e("p",{children:l.name.title}),l.name.des&&e("p",{class:"text-xs",children:l.name.des})]}),e("td",{class:"col3 text-center",children:[typeof l.free.checked=="boolean"&&(l.free.checked?e(i,{}):e(o,{})),l.free.des&&e("p",{class:"text-xs font-normal color-gray-08",children:l.free.des})]}),e("td",{class:"col4 text-center",children:[typeof l.speciality.checked=="boolean"&&(l.speciality.checked?e(i,{}):e(o,{})),l.speciality.des&&l.speciality.des.map(a=>e("p",{class:"text-xs font-normal color-gray-08 mb-1",children:a}))]}),e("td",{class:"col5 text-center",children:[typeof l.serverless.checked=="boolean"&&(l.serverless.checked?e(i,{}):e(o,{})),l.serverless.des&&l.serverless.des.map(a=>e("p",{class:"text-xs font-normal color-gray-08 mb-1",children:a}))]})]}))})]})},w=r=>{const{dataSource:n,title:h,version:c}=r;return e("div",{class:"overflow-x-auto rounded-2xl mb-6",children:e("table",{class:"table bg-secondary rounded-2xl table-fixed",children:n.map((s,l)=>{var d,a,b,x;return e(C,{children:[l===0&&e("tr",{children:e("td",{class:"text-xl align-top text-left",colspan:2,children:h})}),e("tr",{children:[e("td",{class:"text-base font-normal text-neutral border-l-0 border-dotted border-r border-link border-t",children:[s.name.title&&e("p",{children:s.name.title}),s.name.des&&e("p",{class:"text-xs",children:s.name.des})]}),e("td",{class:"text-center border-dotted border-r-0 border-link border-t",children:[typeof((d=s[c])==null?void 0:d.checked)=="boolean"&&e("p",{children:(a=s[c])!=null&&a.checked?e(i,{}):e(o,{})}),((b=s[c])==null?void 0:b.des)&&e("p",{class:"text-xs font-normal text-warning",children:(x=s[c])==null?void 0:x.des})]})]})]})})})})},u=r=>e("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:e("path",{d:"M8.05264 2L5.05264 5.00649L2.05264 2",stroke:"#a3a6b3","stroke-width":"1.25","stroke-linecap":"square"})}),S=r=>{const n=["\u793E\u533A\u7248","\u4E13\u4E1A\u7248","Serverless \u7248"],h={\u793E\u533A\u7248:"free",\u4E13\u4E1A\u7248:"speciality","Serverless \u7248":"serverless"},[c,s]=p(!0),[l,d]=p("\u793E\u533A\u7248"),[a,b]=p(!1),[x,f]=p(!1),[v,N]=p(!0),y=B(null),k=()=>{const t=y.current;if(t){const m=t.getBoundingClientRect().top;b(m<0)}};return _(()=>{s(M())},[]),_(()=>(window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)),[]),e("functional-compare",{ref:y,class:"functional-compare-wrapper top-[100px] flex flex-col justify-center items-center mt-10 mb-10",children:[e("div",{id:"collapse-fold",class:"collapse bg-error collapse-arrow",children:[!c&&e("input",{type:"checkbox",checked:v,onChange:()=>N(!v)}),e("div",{class:"collapse-title text-2xl font-normal",children:"\u4E0D\u540C\u7248\u672C\u529F\u80FD\u5BF9\u6BD4"}),e("div",{class:`${!c&&"collapse-content"}`,children:L.map((t,m)=>e(g,{dataSource:t.data,title:t.title,isHead:m==0}))})]}),a&&v&&e("div",{id:"sticky-table-bottom",class:"table table-fixed bg-error mt-6 px-4",children:e("table",{class:"w-full",children:e("tr",{children:[e("th",{class:"col1 border-0"}),e("th",{class:"col2 border-0"}),e("th",{class:"col3 overflow-hidden",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" \u793E\u533A\u7248"}),e("div",{class:"text-warning text-xs h-2 leading-8"})]}),e("th",{class:"col4",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" \u4E13\u4E1A\u7248"}),e("div",{class:"h-2 text-warning text-xs text-left pl-4"})]}),e("th",{class:"col5",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" Serverless \u7248"}),e("div",{class:"h-2 text-warning text-xs text-left pl-4"})]})]})})}),e("div",{class:"mobile-content",children:[e("div",{children:[e("label",{htmlFor:"my_modal_6",className:"text-center mb-4 inline-block w-full",children:[e("span",{class:"text-xl",children:l}),e(u,{class:"w-8 h-4"})]}),e("input",{type:"checkbox",id:"my_modal_6",className:"modal-toggle",checked:x,onChange:t=>f(t.target.checked)}),x&&e("div",{className:"modal",role:"dialog",children:e("div",{className:"modal-box",children:[e("div",{className:"mb-6",children:[e("span",{class:"text-lg font-bold",children:"\u9009\u62E9\u7248\u672C"}),e("span",{class:"absolute right-8  ",onclick:()=>{f(!1)},children:"\u2715"})]}),e("div",{class:"flex flex-col",children:n.map((t,m)=>e("button",{class:"btn-select h-12 mb-4 bg-gray-02",onClick:()=>{d(t),f(!1)},children:t}))})]})})]}),e("div",{children:L.map((t,m)=>e(w,{dataSource:t.data,title:t.title,version:h[l]}))})]})]})}});export{F as __tla,S as default};
