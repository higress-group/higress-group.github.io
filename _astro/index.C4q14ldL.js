import{A as F,h as s,y as u}from"./hooks.module.Citze9Tm.js";import{u as e}from"./jsxRuntime.module.BmLhYE4m.js";import"./preact.module.DSP1G4xJ.js";const C=c=>{const{dataSource:l}=c;return e("div",{class:"my-8 mx-auto",children:[e("p",{class:"block text-[36px] leading-9 font-medium mb-12",children:l.Functionality}),e("div",{class:" grid gap-8 gap-x-12 sm:gap-y-8 not-content lg:grid-cols-3 sm:grid-cols-2",children:l.plugins.map((i,o)=>e("a",{href:i.Link,class:"no-underline hover-transform-box-shadow bg-error nounderline relative flex flex-col hover:shadow-xl transition ease-in-out hover:scale-[102%] cursor-pointer rounded-lg backdrop-blur border border-[#ffffff29]",children:e("div",{class:"p-6 rounded-2xl ",children:[e("img",{class:"logo w-12 h-12 rounded-lg",src:"https://img.alicdn.com/imgextra/i3/O1CN01dMHdeW24VsfWvPRA9_!!6000000007397-2-tps-192-192.png"}),e("p",{class:"mt-4 text-[18px] leading-[18px] font-medium text-neutral",children:i.Title}),e("p",{class:"mt-[25px] text-[10px] leading-[18px] font-medium text-success",children:i.Des})]})}))})]})},E=c=>{const{dataSource:l}=c,i=F(null),[o,O]=s({}),[x,m]=s([]),[S,v]=s(null),[p,j]=s("");u(()=>{m(f(l))},[]),u(()=>{const t=b(l,o,p);m(f(t))},[l,o,p]);const b=(t,n,r)=>{let a=t;return r&&(a=a.filter(d=>d.Title.toLowerCase().includes(r.toLowerCase()))),a.filter(d=>Object.entries(n).every(([w,h])=>{if(h.length===0)return!0;const k=d[w];return h.find(L=>L.name===k)}))},f=t=>{const n={};return t.forEach(r=>{n[r.Functionality]||(n[r.Functionality]=[]),n[r.Functionality].push(r)}),n},g=t=>{i.current&&!i.current.contains(t.target)&&y()},y=()=>{v(null)};return u(()=>(document.addEventListener("click",g),()=>{document.removeEventListener("click",g)}),[]),e("div",{class:"flex flex-col justify-center items-center bg-secondary",children:e("div",{class:"mb-20 w-full md:w-[85.125rem]",children:Object.entries(x).map(([t,n])=>e(C,{dataSource:{Functionality:t,plugins:n}},t))})})};export{E as default};
