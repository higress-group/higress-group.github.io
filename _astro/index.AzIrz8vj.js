import{h as p,A as S,y as _}from"./hooks.module.Citze9Tm.js";import{u as e}from"./jsxRuntime.module.BmLhYE4m.js";import{k as H}from"./preact.module.DSP1G4xJ.js";import{a as L,__tla as I}from"./constant.8Jd2BsE0.js";import{i as A}from"./util.BGCE2te7.js";import{__tla as G}from"./astro/assets-service.Da9pL5MS.js";let N,P=Promise.all([(()=>{try{return I}catch{}})(),(()=>{try{return G}catch{}})()]).then(async()=>{let o,h,w,u,v;o=r=>e("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2330",width:"24",height:"24",children:e("path",{d:"M392.533333 806.4L85.333333 503.466667l59.733334-59.733334 247.466666 247.466667L866.133333 213.333333l59.733334 59.733334L392.533333 806.4z",fill:"#4aba49","p-id":"2331"})}),h=r=>e("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2296",width:"24",height:"24",children:e("path",{d:"M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z",fill:"#444444","p-id":"2297"})}),w=r=>{const{dataSource:a,title:x,isHead:n=!1}=r,c=a.length;return e("div",{class:"tableplugin overflow-x-auto rounded-2xl mb-6",children:[n&&e("table",{class:"w-full",children:e("tbody",{children:e("tr",{children:[e("th",{class:"col1 border-0"}),e("th",{class:"col2 border-0"}),e("th",{class:"col3 overflow-hidden",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" Higress"}),e("div",{class:"h-20 text-warning text-xs text-left pl-4",children:"Higress \u9075\u5FAA\u5F00\u6E90 Ingress/Gateway API \u6807\u51C6\uFF0C\u662F\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u4E00\u7684\u4E91\u539F\u751F API \u7F51\u5173\uFF0C\u5177\u6709\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7B49\u7279\u70B9\uFF0C\u5E76\u80FD\u6EE1\u8DB3 AI \u573A\u666F\u4E0B\u5BF9\u7F51\u5173\u7684\u65B0\u9700\u6C42\u3002"})]}),e("th",{class:"col4",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" Nginx"}),e("div",{class:"h-20 text-warning text-xs text-left pl-4",children:"Nginx \u662F\u7528\u4E8E Web \u670D\u52A1\u3001\u53CD\u5411\u4EE3\u7406\u3001\u5185\u5BB9\u7F13\u5B58\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u5A92\u4F53\u6D41\u4F20\u8F93\u7B49\u573A\u666F\u7684\u5F00\u6E90\u8F6F\u4EF6\uFF0C\u8FD8\u53EF\u4EE5\u4F5C\u4E3A API \u7F51\u5173\uFF0C\u901A\u8FC7\u53CD\u5411\u4EE3\u7406\u5C06\u7528\u6237\u8BF7\u6C42\u8F6C\u53D1\u5230\u540E\u7AEF\u4E1A\u52A1\u6A21\u5757\uFF0C\u4ECE\u800C\u4E3A\u7B2C\u4E09\u65B9\u63D0\u4F9B\u670D\u52A1\u63A5\u53E3\u3002"})]}),e("th",{class:"col5",children:[e("p",{class:"mb-6 text-2xl font-normal",children:" Spring Cloud Gateway"}),e("div",{class:"h-20 text-warning text-xs text-left pl-4",children:"Spring Cloud Gateway \u4E3A\u5FAE\u670D\u52A1\u67B6\u6784\u63D0\u4F9B\u4E00\u79CD\u7B80\u5355\u800C\u6709\u6548\u7684\u7EDF\u4E00\u7684 API \u8DEF\u7531\u7BA1\u7406\u65B9\u5F0F\uFF0C\u5E76\u57FA\u4E8E Filter \u94FE\u7684\u65B9\u5F0F\u63D0\u4F9B\u4E86\u5B89\u5168\u3001\u76D1\u63A7\u548C\u57CB\u70B9\u3001\u9650\u6D41\u7B49\u80FD\u529B\u3002"})]})]})})}),e("table",{class:"table bg-secondary rounded-2xl table-fixed",children:e("tbody",{children:a.map((l,i)=>e("tr",{children:[i===0&&e("td",{class:"col1 text-[12px] align-top text-center leading-8",rowspan:c,children:x}),e("td",{class:"col2 text-base font-normal color-gray-14",children:[l.name.title&&e("p",{children:l.name.title}),l.name.des&&e("p",{class:"text-xs",children:l.name.des})]}),e("td",{class:"col3 text-center",children:[typeof l.higress.checked=="boolean"?l.higress.checked?e(o,{}):e(h,{}):null,l.higress.des&&l.higress.des.map(s=>e("p",{class:"text-xs font-normal color-gray-08 mb-1",children:s}))]}),e("td",{class:"col4 text-center",children:[typeof l.nginx.checked=="boolean"?l.nginx.checked?e(o,{}):e(h,{}):null,l.nginx.des&&l.nginx.des.map(s=>e("p",{class:"text-xs font-normal color-gray-08 mb-1",children:s}))]}),e("td",{class:"col5 text-center",children:[typeof l.scg.checked=="boolean"?l.scg.checked?e(o,{}):e(h,{}):null,l.scg.des&&l.scg.des.map(s=>e("p",{class:"text-xs font-normal color-gray-08 mb-1",children:s}))]})]}))})})]})},u=r=>{const{dataSource:a,title:x,version:n}=r;return e("div",{class:"overflow-x-auto rounded-2xl mb-6",children:e("table",{class:"table bg-secondary rounded-2xl table-fixed",children:e("tbody",{children:a.map((c,l)=>{var i,s,g,m;return e(H,{children:[l===0&&e("tr",{children:e("td",{class:"text-xl align-top text-left",colspan:2,children:x})}),e("tr",{children:[e("td",{class:"text-base font-normal text-neutral border-l-0 border-dotted border-r border-link border-t",children:[c.name.title&&e("p",{children:c.name.title}),c.name.des&&e("p",{class:"text-xs",children:c.name.des})]}),e("td",{class:"text-center border-dotted border-r-0 border-link border-t",children:[typeof((i=c[n])==null?void 0:i.checked)=="boolean"&&e("p",{children:(s=c[n])!=null&&s.checked?e(o,{}):e(h,{})}),((g=c[n])==null?void 0:g.des)&&e("p",{class:"text-xs font-normal text-warning",children:(m=c[n])==null?void 0:m.des})]})]})]})})})})})},v=r=>e("svg",{width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:e("path",{d:"M8.05264 2L5.05264 5.00649L2.05264 2",stroke:"#a3a6b3","stroke-width":"1.25","stroke-linecap":"square"})}),N=r=>{const a=["Higress","Nginx","Spring Cloud Gateway"],x={Higress:"higress",Nginx:"nginx","Spring Cloud Gateway":"scg"},[n,c]=p(!0),[l,i]=p("Higress"),[s,g]=p(!1),[m,b]=p(!1),[f,C]=p(!0),y=S(null);_(()=>{c(A())},[]);const k=()=>{const t=y.current;if(t){const d=t.getBoundingClientRect().top;g(d<0)}};return _(()=>(window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)),[]),e("functional-compare",{ref:y,class:"functional-compare-wrapper top-[100px] flex flex-col justify-center items-center mt-10 mb-10",children:[e("div",{id:"collapse-fold",class:"collapse bg-error collapse-arrow",children:[!n&&e("input",{type:"checkbox",checked:f,onChange:()=>C(!f)}),e("div",{class:"collapse-title text-2xl font-normal",children:"\u4EA7\u54C1\u5BF9\u6BD4"}),e("div",{class:`${!n&&"collapse-content"}`,children:L.map((t,d)=>e(w,{dataSource:t.data,title:t.title,isHead:d==0}))})]}),s&&f&&e("div",{id:"sticky-table-bottom",class:"table table-fixed bg-error mt-6 px-4",children:e("table",{class:"w-full",children:e("tbody",{children:e("tr",{children:[e("th",{class:"col1 border-0"}),e("th",{class:"col2 border-0"}),a.map((t,d)=>e("th",{class:`col${d+3}`,children:e("p",{class:"mb-6 text-2xl font-normal mb-2",children:[" ",t]})}))]})})})}),e("div",{class:"mobile-content",children:[e("div",{children:[e("label",{htmlFor:"my_modal_7",className:"text-center mb-4 inline-block w-full",children:[e("span",{class:"text-xl",children:l}),e(v,{class:"w-8 h-4"})]}),e("input",{type:"checkbox",id:"my_modal_7",className:"modal-toggle",checked:m,onChange:t=>b(t.target.checked)}),m&&e("div",{className:"modal",role:"dialog",children:e("div",{className:"modal-box",children:[e("div",{className:"mb-6",children:[e("span",{class:"text-lg font-bold",children:"\u9009\u62E9\u4EA7\u54C1"}),e("span",{class:"absolute right-8  ",onclick:()=>{b(!1)},children:"\u2715"})]}),e("div",{class:"flex flex-col",children:a.map((t,d)=>e("button",{class:"btn-select h-12 mb-4 bg-gray-02",onClick:()=>{i(t),b(!1)},children:t}))})]})})]}),e("div",{children:L.map((t,d)=>e(u,{dataSource:t.data,title:t.title,version:x[l]}))})]})]})}});export{P as __tla,N as default};
