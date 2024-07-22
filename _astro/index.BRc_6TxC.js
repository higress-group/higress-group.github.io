import{t as at}from"./bundle-mjs.CvwO_xnS.js";import{x as J,h as T,y as lt,A as G,q as kt,P as te,_ as ee}from"./hooks.module.Citze9Tm.js";import{G as Bt}from"./preact.module.DSP1G4xJ.js";import{u as e}from"./jsxRuntime.module.BmLhYE4m.js";import{i as ie}from"./util.BGCE2te7.js";const U=Bt({width:"100%",height:"100%"}),R=({d:t="M0 50 H300",width:a="100px",height:i="100px",viewBox:o="0 0 500 200",label:r="",isTurn:n=!1})=>{var p;const l=J(U);return e("svg",{class:"min-w-4",viewBox:o,style:{width:a,height:i},xmlns:"http://www.w3.org/2000/svg",children:[e("path",{class:"fill-none",stroke:n?"url(#backgroundGradient)":l.colors.arrowColor,"stroke-width":"5",style:{opacity:n?1:.1},d:t}),e("path",{class:" fill-none",style:"animation: dash 2s linear infinite;",d:t,"stroke-width":2,stroke:n?"url(#gradient)":(p=l.colors)==null?void 0:p.arrowColor,"stroke-dasharray":5,"marker-end":"url(#arrowhead)","stroke-linejoin":"round"}),e("text",{x:"50%",y:"60",fill:l.colors.highlightFontColor,"text-anchor":"middle","alignment-baseline":"hanging",class:"text-sm",children:r}),e("defs",{children:[e("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e("stop",{offset:"0%","stop-color":l.colors.arrowColor,"stop-opacity":"0.1"}),e("stop",{offset:"100%",style:`stop-color:${l.colors.arrowColor}`})]}),e("linearGradient",{id:"backgroundGradient",x1:"0%",y1:"100%",x2:"100%",y2:"100%",children:[e("stop",{offset:"0%","stop-color":l.colors.arrowColor,"stop-opacity":"0.1"}),e("stop",{offset:"100%","stop-color":l.colors.arrowColor,"stop-opacity":"0.3"})]}),e("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"5",refX:"0",refY:"2.5",orient:"auto",children:e("polygon",{points:"0 0, 5 2.5, 0 5",fill:l.colors.arrowColor})})]})]})},st=({className:t="",width:a="100%",height:i="90%",children:o,title:r,titleStyle:n={},panelSkewDir:l=1,panelStyle:p={}})=>{const[g,c]=T(!0);lt(()=>{c(ie())},[]);const h=J(U);return e("div",{className:"h-full",style:{width:a,...p},children:[e("div",{className:"relative w-full",children:[e("div",{class:at("shadow-lg rounded-xl absolute top-0 w-full h-full",t),style:{transformStyle:"preserve-3d",transform:`perspective(2000px) translateZ ${g&&"rotateX(30deg)"}skewX(${l>0?"6":"-6"}deg)`,background:h.colors.panelColor,boxShadow:"0px 6px 1px 0px rgb(73 101 120 / 20%), 3px 10px 13px 2px rgb(0 0 0 / 0.1)"}}),e("div",{class:"h-full w-full flex items-center justify-evenly relative p-1",children:o})]}),e("div",{class:at("text-md mt-1"),style:{textShadow:"1px 1px 2px #8C99DD",color:h.colors.panelTitleColor,...n},children:r})]})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Gt(t,a,i,o){function r(n){return n instanceof i?n:new i(function(l){l(n)})}return new(i||(i=Promise))(function(n,l){function p(h){try{c(o.next(h))}catch(m){l(m)}}function g(h){try{c(o.throw(h))}catch(m){l(m)}}function c(h){h.done?n(h.value):r(h.value).then(p,g)}c((o=o.apply(t,[])).next())})}function Dt(t,a){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,r,n,l;return l={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function p(c){return function(h){return g([c,h])}}function g(c){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,r&&(n=c[0]&2?r.return:c[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,c[1])).done)return n;switch(r=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(n=i.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){i=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){i.label=c[1];break}if(c[0]===6&&i.label<n[1]){i.label=n[1],n=c;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(c);break}n[2]&&i.ops.pop(),i.trys.pop();continue}c=a.call(t,i)}catch(h){c=[6,h],r=0}finally{o=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}var j=function(){},C=j(),ct=Object,k=function(t){return t===C},A=function(t){return typeof t=="function"},z=function(t,a){return ct.assign({},t,a)},wt="undefined",yt=function(){return typeof window!=wt},ne=function(){return typeof document!=wt},re=function(){return yt()&&typeof window.requestAnimationFrame!=wt},pt=new WeakMap,oe=0,it=function(t){var a=typeof t,i=t&&t.constructor,o=i==Date,r,n;if(ct(t)===t&&!o&&i!=RegExp){if(r=pt.get(t),r)return r;if(r=++oe+"~",pt.set(t,r),i==Array){for(r="@",n=0;n<t.length;n++)r+=it(t[n])+",";pt.set(t,r)}if(i==ct){r="#";for(var l=ct.keys(t).sort();!k(n=l.pop());)k(t[n])||(r+=n+":"+it(t[n])+",");pt.set(t,r)}}else r=o?t.toJSON():a=="symbol"?t.toString():a=="string"?JSON.stringify(t):""+t;return r},Ct=!0,ae=function(){return Ct},Et=yt(),Nt=ne(),Ot=Et&&window.addEventListener?window.addEventListener.bind(window):j,le=Nt?document.addEventListener.bind(document):j,St=Et&&window.removeEventListener?window.removeEventListener.bind(window):j,se=Nt?document.removeEventListener.bind(document):j,ce=function(){var t=Nt&&document.visibilityState;return k(t)||t!=="hidden"},pe=function(t){return le("visibilitychange",t),Ot("focus",t),function(){se("visibilitychange",t),St("focus",t)}},he=function(t){var a=function(){Ct=!0,t()},i=function(){Ct=!1};return Ot("online",a),Ot("offline",i),function(){St("online",a),St("offline",i)}},ge={isOnline:ae,isVisible:ce},ue={initFocus:pe,initReconnect:he},ht=!yt()||"Deno"in window,de=function(t){return re()?window.requestAnimationFrame(t):setTimeout(t,1)},gt=ht?lt:ee,_t=typeof navigator<"u"&&navigator.connection,Ht=!ht&&_t&&(["slow-2g","2g"].includes(_t.effectiveType)||_t.saveData),Rt=function(t){if(A(t))try{t=t()}catch{t=""}var a=[].concat(t);t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?it(t):"";var i=t?"$swr$"+t:"";return[t,a,i]},Q=new WeakMap,At=0,zt=1,Pt=2,nt=function(t,a,i,o,r,n,l){l===void 0&&(l=!0);var p=Q.get(t),g=p[0],c=p[1],h=p[3],m=g[a],d=c[a];if(l&&d)for(var w=0;w<d.length;++w)d[w](i,o,r);return n&&(delete h[a],m&&m[0])?m[0](Pt).then(function(){return t.get(a)}):t.get(a)},me=0,Tt=function(){return++me},It=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return Gt(void 0,void 0,void 0,function(){var i,o,r,n,l,p,g,c,h,m,d,w,D,b,u,s,L,q,y,F,P;return Dt(this,function(E){switch(E.label){case 0:if(i=t[0],o=t[1],r=t[2],n=t[3],l=typeof n=="boolean"?{revalidate:n}:n||{},p=k(l.populateCache)?!0:l.populateCache,g=l.revalidate!==!1,c=l.rollbackOnError!==!1,h=l.optimisticData,m=Rt(o),d=m[0],w=m[2],!d)return[2];if(D=Q.get(i),b=D[2],t.length<3)return[2,nt(i,d,i.get(d),C,C,g,!0)];if(u=r,L=Tt(),b[d]=[L,0],q=!k(h),y=i.get(d),q&&(F=A(h)?h(y):h,i.set(d,F),nt(i,d,F)),A(u))try{u=u(i.get(d))}catch(I){s=I}return u&&A(u.then)?[4,u.catch(function(I){s=I})]:[3,2];case 1:if(u=E.sent(),L!==b[d][0]){if(s)throw s;return[2,u]}else s&&q&&c&&(p=!0,u=y,i.set(d,y));E.label=2;case 2:return p&&(s||(A(p)&&(u=p(u,y)),i.set(d,u)),i.set(w,z(i.get(w),{error:s}))),b[d][1]=Tt(),[4,nt(i,d,u,s,C,g,!!p)];case 3:if(P=E.sent(),s)throw s;return[2,p?P:u]}})})},Wt=function(t,a){for(var i in t)t[i][0]&&t[i][0](a)},fe=function(t,a){if(!Q.has(t)){var i=z(ue,a),o={},r=It.bind(C,t),n=j;if(Q.set(t,[o,{},{},{},r]),!ht){var l=i.initFocus(setTimeout.bind(C,Wt.bind(C,o,At))),p=i.initReconnect(setTimeout.bind(C,Wt.bind(C,o,zt)));n=function(){l&&l(),p&&p(),Q.delete(t)}}return[t,r,n]}return[t,Q.get(t)[4]]},be=function(t,a,i,o,r){var n=i.errorRetryCount,l=r.retryCount,p=~~((Math.random()+.5)*(1<<(l<8?l:8)))*i.errorRetryInterval;!k(n)&&l>n||setTimeout(o,p,r)},Qt=fe(new Map),ve=Qt[0],xe=Qt[1],ke=z({onLoadingSlow:j,onSuccess:j,onError:j,onErrorRetry:be,onDiscarded:j,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ht?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ht?5e3:3e3,compare:function(t,a){return it(t)==it(a)},isPaused:function(){return!1},cache:ve,mutate:xe,fallback:{}},ge),we=function(t,a){var i=z(t,a);if(a){var o=t.use,r=t.fallback,n=a.use,l=a.fallback;o&&n&&(i.use=o.concat(n)),r&&l&&(i.fallback=z(r,l))}return i},ye=Bt({}),Ce=function(t,a){var i=T({})[1],o=G(t),r=G({data:!1,error:!1,isValidating:!1}),n=kt(function(l){var p=!1,g=o.current;for(var c in l){var h=c;g[h]!==l[h]&&(g[h]=l[h],r.current[h]&&(p=!0))}p&&!a.current&&i({})},[]);return gt(function(){o.current=t}),[o,r.current,n]},Ne=function(t){return A(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}]},Oe=function(){return z(ke,J(ye))},Se=function(t){return function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];var o=Oe(),r=Ne(a),n=r[0],l=r[1],p=r[2],g=we(o,p),c=t,h=g.use;if(h)for(var m=h.length;m-- >0;)c=h[m](c);return c(n,l||g.fetcher,g)}},Zt=function(t,a,i){var o=a[t]||(a[t]=[]);return o.push(i),function(){var r=o.indexOf(i);r>=0&&(o[r]=o[o.length-1],o.pop())}},Lt={dedupe:!0},_e=function(t,a,i){var o=i.cache,r=i.compare,n=i.fallbackData,l=i.suspense,p=i.revalidateOnMount,g=i.refreshInterval,c=i.refreshWhenHidden,h=i.refreshWhenOffline,m=Q.get(o),d=m[0],w=m[1],D=m[2],b=m[3],u=Rt(t),s=u[0],L=u[1],q=u[2],y=G(!1),F=G(!1),P=G(s),E=G(a),I=G(i),v=function(){return I.current},dt=function(){return v().isVisible()&&v().isOnline()},rt=function(S){return o.set(q,z(o.get(q),S))},qt=o.get(s),Xt=k(n)?i.fallback[s]:n,B=k(qt)?Xt:qt,Ft=o.get(q)||{},X=Ft.error,Mt=!y.current,Vt=function(){return Mt&&!k(p)?p:v().isPaused()?!1:l?k(B)?!1:i.revalidateIfStale:k(B)||i.revalidateIfStale},Kt=function(){return!s||!a?!1:Ft.isValidating?!0:Mt&&Vt()},mt=Kt(),ft=Ce({data:B,error:X,isValidating:mt},F),Z=ft[0],bt=ft[1],ot=ft[2],W=kt(function(S){return Gt(void 0,void 0,void 0,function(){var N,O,_,K,Y,M,x,H,V,vt,tt,$,xt;return Dt(this,function(et){switch(et.label){case 0:if(N=E.current,!s||!N||F.current||v().isPaused())return[2,!1];K=!0,Y=S||{},M=!b[s]||!Y.dedupe,x=function(){return!F.current&&s===P.current&&y.current},H=function(){var jt=b[s];jt&&jt[1]===_&&delete b[s]},V={isValidating:!1},vt=function(){rt({isValidating:!1}),x()&&ot(V)},rt({isValidating:!0}),ot({isValidating:!0}),et.label=1;case 1:return et.trys.push([1,3,,4]),M&&(nt(o,s,Z.current.data,Z.current.error,!0),i.loadingTimeout&&!o.get(s)&&setTimeout(function(){K&&x()&&v().onLoadingSlow(s,i)},i.loadingTimeout),b[s]=[N.apply(void 0,L),Tt()]),xt=b[s],O=xt[0],_=xt[1],[4,O];case 2:return O=et.sent(),M&&setTimeout(H,i.dedupingInterval),!b[s]||b[s][1]!==_?(M&&x()&&v().onDiscarded(s),[2,!1]):(rt({error:C}),V.error=C,tt=D[s],!k(tt)&&(_<=tt[0]||_<=tt[1]||tt[1]===0)?(vt(),M&&x()&&v().onDiscarded(s),[2,!1]):(r(Z.current.data,O)?V.data=Z.current.data:V.data=O,r(o.get(s),O)||o.set(s,O),M&&x()&&v().onSuccess(O,s,i),[3,4]));case 3:return $=et.sent(),H(),v().isPaused()||(rt({error:$}),V.error=$,M&&x()&&(v().onError($,s,i),(typeof i.shouldRetryOnError=="boolean"&&i.shouldRetryOnError||A(i.shouldRetryOnError)&&i.shouldRetryOnError($))&&dt()&&v().onErrorRetry($,s,i,W,{retryCount:(Y.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return K=!1,vt(),x()&&M&&nt(o,s,V.data,V.error,!1),[2,!0]}})})},[s]),Yt=kt(It.bind(C,o,function(){return P.current}),[]);if(gt(function(){E.current=a,I.current=i}),gt(function(){if(s){var S=s!==P.current,N=W.bind(C,Lt),O=function(x,H,V){ot(z({error:H,isValidating:V},r(Z.current.data,x)?C:{data:x}))},_=0,K=function(x){if(x==At){var H=Date.now();v().revalidateOnFocus&&H>_&&dt()&&(_=H+v().focusThrottleInterval,N())}else if(x==zt)v().revalidateOnReconnect&&dt()&&N();else if(x==Pt)return W()},Y=Zt(s,w,O),M=Zt(s,d,K);return F.current=!1,P.current=s,y.current=!0,S&&ot({data:B,error:X,isValidating:mt}),Vt()&&(k(B)||ht?N():de(N)),function(){F.current=!0,Y(),M()}}},[s,W]),gt(function(){var S;function N(){var _=A(g)?g(B):g;_&&S!==-1&&(S=setTimeout(O,_))}function O(){!Z.current.error&&(c||v().isVisible())&&(h||v().isOnline())?W(Lt).then(N):N()}return N(),function(){S&&(clearTimeout(S),S=-1)}},[g,c,h,W]),te(B),l&&k(B)&&s)throw E.current=a,I.current=i,F.current=!1,k(X)?W(Lt):X;return{mutate:Yt,get data(){return bt.data=!0,B},get error(){return bt.error=!0,X},get isValidating(){return bt.isValidating=!0,mt}}},Te=Se(_e);const Le=(...t)=>fetch(...t).then(a=>a.json()),qe=t=>{const[a,i]=T(!1),{data:o,error:r}=Te(a?t:null,Le,{dedupingInterval:36e5,revalidateOnFocus:!1});return{swrData:o||{},error:r,isLoading:!r&&!o,fetchData:()=>{i(!0)}}},Fe=({image:t,title:a,labels:i,links:o,direction:r="top",isHovering:n})=>{var b;const{swrData:l={},fetchData:p}=qe((b=o==null?void 0:o.Github)==null?void 0:b.apiLink),g=J(U),[c,h]=T(""),[m,d]=T(0),[w,D]=T(0);return lt(()=>{const{stargazers_count:u=0,forks_count:s=0}=l||{};d(u||0),D(s||0)},[l]),lt(()=>{n&&p()},[n]),h(r==="bottom"?"after:absolute after:bottom-full after:left-2/4 after:ml-[-5px] after:border-[5px] after:border-b-base-100 after:border-x-transparent after:border-t-transparent  after:content-['']":"after:absolute after:top-full after:left-2/4 after:ml-[-5px] after:border-[5px] after:border-t-base-100 after:border-x-transparent after:border-b-transparent  after:content-['']"),e("div",{className:`relative bg-base-100 text-base-100 p-6 rounded-xl backdrop-opacity-96 shadow-lg min-w-[400px] max-w-md mx-auto ${c}`,children:[e("div",{className:"flex items-center justify-between border-b border-success mb-4 pb-4",children:[e("img",{src:t,alt:"logo",className:"max-h-16 max-w-[130px] "}),e("div",{children:i.map((u,s)=>e("span",{className:" bg-opacity-60 border text-xs px-2 py-1 rounded mr-2 mb-2 whitespace-nowrap",style:`color:${g.colors.tagFontColor}; background-color:${g.colors.tagBgColor}; border-color:${g.colors.tagBorderColor};`,children:u},s))})]}),e("div",{children:[e("div",{className:"text-sm text-success mb-4 ",children:a}),Object.entries(o).map(([u,{link:s}],L)=>e("div",{className:"mb-2 flex justify-between",children:[e("div",{className:at("text-success text-sm mb-1"),children:[u,":"]}),e("div",{className:"w-[70%] overflow-hidden ",children:[e("a",{href:s,className:at("line-clamp-1 no-underline",g.linkStyle),style:`color:${g.colors.linkColor};`,children:s}),u==="Github"&&e("div",{className:"flex justify-start mt-1",children:[e("div",{className:"flex items-center text-xs py-1 px-2 rounded",style:`color:${g.colors.starForkFontColor};background-color:${g.colors.starForkBgColor};`,children:[e("svg",{t:"1711507787559",class:"icon w-4 h-4 mr-1",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5263",width:"200",height:"200",fill:"currentColor",children:e("path",{d:"M960 384l-313.6-40.96L512 64 377.6 343.04 64 384l230.4 208.64L234.88 896 512 746.88 789.12 896l-59.52-303.36L960 384z","p-id":"5264"})}),e("span",{children:m})]}),e("div",{className:"ml-2 flex items-center text-xs py-1 px-2 rounded",style:`color:${g.colors.starForkFontColor};background-color:${g.colors.starForkBgColor};`,children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",version:"1.1",width:"16",height:"18",viewBox:"0 0 1024 1024",class:"icon w-4 h-4 mr-1",children:e("g",{children:e("path",{d:"M384 160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-64v128h192a64 64 0 0 1 64 64v64h64a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h64V576h-448v64h64a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h64V576a64 64 0 0 1 64-64h192V384h-64a32 32 0 0 1-32-32v-192zM448 320h128V192H448v128z m-256 384v128h128v-128H192z m512 0v128h128v-128h-128z",fill:"currentColor","fill-opacity":"1"})})}),e("span",{children:w})]})]})]})]},L))]})]})},f=({image:t,label:a,hoverable:i=!0,hoverContent:o,direction:r="top",logo:n})=>{const[l,p]=T(!1);T({});const[g,c]=T({}),[h,m]=T(!1),d=G(null),w=G(null),D=J(U),b=async({})=>{p(!0),h||(p(!0),m(!0))},u=s=>{const{clientX:L,clientY:q}=s,y=w.current.getBoundingClientRect();L>=y.left&&L<=y.right&&q>=y.top&&q<=y.bottom||p(!1)};return e("div",{class:"relative cursor-pointer flex flex-col items-center justify-center p-1 ",style:{marginTop:"0 !important"},onMouseLeave:u,onMouseEnter:b,onTouchStart:b,onTouchEnd:u,children:[e("div",{class:"w-16 h-16 ",ref:d,children:[t&&!n&&e("img",{class:"w-full object-cover mx-auto",src:t,alt:a}),n&&e("div",{class:"flex flex-col items-center ",children:[e("div",{class:"z-[1] relative",style:{animation:l&&i?"bounce 4s infinite":"none"},children:[e("div",{class:"w-full h-8 flex items-center justify-center",children:e("img",{class:"w-[50%] object-cover mx-auto ",src:n,alt:a})}),e("img",{class:"w-full object-cover  mx-auto z-[1] relative -translate-y-[70%] visiblity-visible",src:"https://gw.alicdn.com/imgextra/i1/O1CN016wUWox1REEMXKzwhg_!!6000000002079-2-tps-168-84.png",alt:"",style:{visibility:l?"visible":"hidden"}})]}),e("img",{class:"w-[90%] object-cover mx-auto -translate-y-[120%]",src:"https://gw.alicdn.com/imgextra/i2/O1CN01sYFTnE21aVnWHhLGR_!!6000000007001-2-tps-144-112.png"})]})]}),e("p",{class:"text-center text-xs",style:`color:${D.colors.normalFontColor}`,children:a}),i&&e("div",{className:"absolute z-10 shadow-md -mt-20 ml-2",style:{visibility:l?"visible":"hidden",bottom:r==="top"?"95px":"",top:r==="top"?"":"165px"},onMouseLeave:()=>p(!1),ref:w,children:e(Fe,{...o,direction:r,data:g,isHovering:l})})]})},Me={title:"Sentinel\u662F\u2F00\u6B3E\u9762\u5411\u5206\u5E03\u5F0F\u3001\u591A\u8BED\u8A00\u5F02\u6784\u5316\u670D\u52A1\u67B6\u6784\u7684\u6D41\u91CF\u6CBB\u7406\u7EC4\u4EF6\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01GNcMeH1n8f5u0Qus8_!!6000000005045-55-tps-200-36.svg",labels:["\u9AD8\u53EF\u7528","\u6D41\u91CF\u6CBB\u7406","\u6D41\u91CF\u9632\u62A4"],links:{Github:{link:"https://github.com/alibaba/Sentinel",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/sentinel"},\u5B98\u7F51:{link:"https://sentinelguard.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/Sentinel/releases/tag/1.8.6"},\u5FEB\u901F\u5165\u95E8:{link:"https://sentinelguard.io/zh-cn/docs/quick-start.html"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},Ve={title:"ChaosBlade\u662F\u2F00\u4E2A\u4E91\u539F\u751F\u6DF7\u6C8C\u5DE5\u7A0B\u5E73\u53F0\uFF0C\u652F\u6301\u591A\u79CD\u73AF\u5883\u3001\u96C6\u7FA4\u548C\u8BED\u8A00\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN01uCl9p31NxKuC6WxON_!!6000000001636-55-tps-200-36.svg",labels:["\u9AD8\u53EF\u7528","\u4E91\u539F\u751F","\u6DF7\u6C8C\u5DE5\u7A0B"],links:{Github:{link:"https://github.com/chaosblade-io/chaosblade",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/chaosblade-io/chaosblade"},\u5B98\u7F51:{link:"https://chaosblade.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/chaosblade-io/chaosblade/releases/tag/v1.7.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://chaosblade.io/docs"}}},je={title:"\u4E00\u6B3E\u6807\u51C6\u3001\u901A\u7528\u4E14\u529F\u80FD\u5F3A\u5927\u7684\uFF0C\u81F4\u529B\u4E8E\u6784\u5EFA\u5E94\u7528\u591A\u6D3B\u67B6\u6784\u7684\u5F00\u6E90\u4E2D\u95F4\u4EF6\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN018Q4Lut1HqZMI4Rgot_!!6000000000809-55-tps-200-43.svg",labels:["\u591A\u6D3B\u5BB9\u707E","\u9AD8\u53EF\u7528","\u7A33\u5B9A\u6027"],links:{Github:{link:"https://github.com/alibaba/Appactive",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/Appactive"},\u5B98\u7F51:{link:"https://doc.appactive.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/Appactive/releases/tag/v0.2.1"},\u5FEB\u901F\u5165\u95E8:{link:"https://doc.appactive.io/docs/cn/README_CN.html/"}}},Be={title:"\u2F00\u4E2A\u66F4\u6613\u4E8E\u6784\u5EFA\u4E91\u539F\u751F\u5E94\u7528\u7684\u52A8\u6001\u670D\u52A1\u53D1\u73B0\u3001\u914D\u7F6E\u7BA1\u7406\u548C\u670D\u52A1\u7BA1\u7406\u5E73\u53F0\u3002",image:"https://img.alicdn.com/imgextra/i1/O1CN01YjDURc26ODF5FQt4d_!!6000000007651-55-tps-123-24.svg",labels:["\u914D\u7F6E\u7BA1\u7406","\u670D\u52A1\u53D1\u73B0","\u670D\u52A1\u7BA1\u7406"],links:{Github:{link:"https://github.com/alibaba/nacos",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/nacos"},\u5B98\u7F51:{link:"https://nacos.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/nacos/releases/tag/2.1.2"},\u5FEB\u901F\u5165\u95E8:{link:"https://nacos.io/zh-cn/docs/v2/quickstart/quick-start.html"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},Ge={title:"OpenSergo\u662F\u2F00\u5957\u5F00\u653E\u901A\u7528\u7684\u3001\u9762\u5411\u4E91\u539F\u751F\u670D\u52A1\u3001\u8986\u76D6\u5FAE\u670D\u52A1\u53CA\u4E0A\u4E0B\u6E38\u5173\u8054\u7EC4\u4EF6\u7684\u5FAE\u670D\u52A1\u6CBB\u7406\u6807\u51C6\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN01Bs0YtX1qMoAvDQO9j_!!6000000005482-55-tps-200-36.svg",labels:["\u5FAE\u670D\u52A1\u6CBB\u7406","\u6CBB\u7406\u6807\u51C6","\u6D41\u91CF\u6CBB\u7406"],links:{Github:{link:"https://github.com/opensergo/opensergo-specification",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/opensergo/opensergo-specification"},\u5B98\u7F51:{link:"https://opensergo.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/opensergo/opensergo-java-sdk/releases/tag/v0.1.0-beta1"},\u5FEB\u901F\u5165\u95E8:{link:"https://opensergo.io/zh-cn/docs/quick-start/opensergo-control-plane/"}}},De={title:"\u2F00\u4E2A\u9075\u5FAA\u5F00\u6E90Ingress/Gateway API\u6807\u51C6\uFF0C\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u2F00\u7684\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7684\u4E0B\u2F00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN0186oyN31ksVtlINQGM_!!6000000004739-55-tps-200-36.svg",labels:["\u6D41\u91CF\u7F51\u5173","\u5FAE\u670D\u52A1\u7F51\u5173","\u5B89\u5168\u7F51\u5173"],links:{Github:{link:"https://github.com/alibaba/higress",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/higress"},\u5B98\u7F51:{link:"https://higress.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/higress/releases/tag/v0.5.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://higress.io/zh-cn/docs/overview/what-is-higress.html"}}},Ee={title:"\u4E91\u539F\u751F\u201C\u6D88\u606F\u3001\u4E8B\u4EF6\u3001\u6D41\u201D\u5B9E\u65F6\u6570\u636E\u5904\u7406\u5E73\u53F0\uFF0C\u8986\u76D6\u4E91\u8FB9\u7AEF\u2F00\u4F53\u5316\u6570\u636E\u5904\u7406\u573A\u666F\u3002",image:"https://img.alicdn.com/imgextra/i1/O1CN01vJbfLg1Vtgfyuv3KF_!!6000000002711-2-tps-447-161.png",labels:["\u6D88\u606F","\u4E8B\u4EF6","\u6D41"],links:{Github:{link:"https://github.com/apache/rocketmq",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/apache/rocketmq"},\u5B98\u7F51:{link:"https://rocketmq.apache.org/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/apache/rocketmq/releases/tag/rocketmq-all-5.0.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://rocketmq.apache.org/zh/docs/quickStart/02quickstart"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},$t={title:"Apache Dubbo\u662F\u2F00\u6B3E\u5FAE\u670D\u52A1\u6846\u67B6\uFF0C\u4E3A\u2F24\u89C4\u6A21\u5FAE\u670D\u52A1 \u5B9E\u8DF5\u63D0\u4F9B\u2FBC\u6027\u80FDRPC\u901A\u4FE1\u3001\u6D41\u91CF\u6CBB\u7406\u3001\u53EF\u89C2\u6D4B\u6027\u7B49\u89E3\u51B3\u2F45\u6848\uFF0C\u6DB5\u76D6Java\u3001Golang\u7B49\u591A\u79CD\u8BED\u2F94SDK\u5B9E\u73B0\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN01Efw9Qu1Xto0ghUDgv_!!6000000002982-55-tps-200-36.svg",labels:["\u5FAE\u670D\u52A1","\u670D\u52A1\u8C03\u7528","RPC\u901A\u4FE1"],links:{Github:{link:"https://github.com/apache/dubbo",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/dubbo"},\u5B98\u7F51:{link:"https://dubbo.apache.org/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/apache/dubbo/releases/tag/dubbo-3.1.3"},\u5FEB\u901F\u5165\u95E8:{link:"https://cn.dubbo.apache.org/zh-cn/overview/"}}},Jt={title:"\u4E00\u7AD9\u5F0F\u7684\u5206\u5E03\u5F0F\u5E94\u7528\u5F00\u53D1\u6846\u67B6\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01GtWTyl1aLP6ky10ZS_!!6000000003313-2-tps-1212-114.png",labels:["\u5E94\u7528\u6846\u67B6","\u5FAE\u670D\u52A1"],links:{Github:{link:"https://github.com/alibaba/spring-cloud-alibaba",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/spring-cloud-alibaba"},\u5B98\u7F51:{link:"https://sca.aliyun.com/"},\u6700\u65B0\u7248\u672C:{link:"https://sca.aliyun.com/docs/2023/overview/version-explain/"},\u5FEB\u901F\u5165\u95E8:{link:"https://sca.aliyun.com/docs/2023/user-guide/ai/quick-start/"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},He={title:"Seata\u662F\u2F00\u6B3E\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u63D0\u4F9B\u9AD8\u6027\u80FD\u548C\u7B80\u5355\u6613\u7528\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u670D\u52A1\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN01ULY29M1JbZchZLegx_!!6000000001047-55-tps-200-36.svg",labels:["\u5206\u5E03\u5F0F\u4E8B\u52A1","\u6570\u636E\u4E00\u81F4\u6027","\u5FAE\u670D\u52A1"],links:{Github:{link:"https://github.com/seata/seata",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/seata/seata"},\u5B98\u7F51:{link:"https://seata.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/seata/seata/releases/tag/v1.5.2"},\u5FEB\u901F\u5165\u95E8:{link:"https://seata.io/zh-cn/docs/ops/deploy-guide-beginner.html"},\u5FEB\u901F\u6784\u5EFA:{link:"https://start.aliyun.com/"}}},Re={title:"Kubernetes\u662F\u2F00\u4E2A\u5F00\u6E90\u7684\u5BB9\u5668\u7F16\u6392\u5F15\u64CE\uFF0C\u7528\u6765\u5BF9\u5BB9\u5668\u5316\u5E94\u7528\u8FDB\u884C\u81EA\u52A8\u5316\u90E8\u7F72\u3001\u6269\u7F29\u548C\u7BA1\u7406\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN012u7Nuk1fQ3CjgvLyT_!!6000000004000-55-tps-201-37.svg",labels:["\u5BB9\u5668\u7F16\u6392","\u5E94\u7528\u7BA1\u7406","\u53D1\u5E03\u90E8\u7F72"],links:{Github:{link:"https://github.com/kubernetes/kubernetes",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/kubernetes/kubernetes"},\u5B98\u7F51:{link:"https://kubernetes.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/kubernetes/kubernetes/releases/tag/v1.23.14"},\u5FEB\u901F\u5165\u95E8:{link:"https://kubernetes.io/zh-cn/docs/setup/"}}},Ae={title:"\u4E00\u6B3E\u5F00\u6E90\u7684\u76D1\u63A7\u89E3\u51B3\u65B9\u6848\uFF0C\u4E3A\u60A8\u7684\u6307\u6807\u548C\u62A5\u8B66\u63D0\u4F9B\u652F\u6301\u3002",image:"https://img.alicdn.com/imgextra/i2/O1CN01vV6wJj1PEZQfWuukM_!!6000000001809-2-tps-536-200.png",labels:["\u53EF\u89C2\u6D4B","\u5E94\u7528\u76D1\u63A7","Metrics"],links:{Github:{link:"https://github.com/prometheus/prometheus",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/prometheus/prometheus"},\u5B98\u7F51:{link:"https://prometheus.io/"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/prometheus/prometheus/releases/tag/v2.51.1"},\u5FEB\u901F\u5165\u95E8:{link:"https://prometheus.io/docs/prometheus/latest/getting_started"}}},ze={title:"\u9AD8\u8D28\u91CF\u3001\u4F7F\u7528\u5E7F\u6CDB\u548C\u53EF\u79FB\u690D\u7684\u53EF\u89C2\u6D4B\u6280\u672F\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01BhKykq1Jr95px13as_!!6000000001081-2-tps-72-72.png",labels:["\u53EF\u89C2\u6D4B","\u94FE\u8DEF\u8FFD\u8E2A","\u5E94\u7528\u76D1\u63A7"],links:{Github:{link:"https://github.com/open-telemetry",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/open-telemetry/opentelemetry-collector"},\u5B98\u7F51:{link:"https://opentelemetry.io"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/open-telemetry/opentelemetry-specification/releases/tag/v1.26.0"},\u5FEB\u901F\u5165\u95E8:{link:"https://opentelemetry.io/docs/getting-started/dev/"}}},Pe={title:"\u4E91\u539F\u751F\u5E94\u7528\u7684\u81EA\u52A8\u5316\u7BA1\u7406\u5957\u4EF6\u3002",image:"https://img.alicdn.com/imgextra/i3/O1CN01hSarHT1u8OAkeN4eo_!!6000000005992-2-tps-288-80.png",labels:["\u8FD0\u7EF4\u90E8\u7F72","\u5E94\u7528\u7BA1\u7406","Workloads"],links:{Github:{link:"https://github.com/openkruise/kruise ",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/openkruise/kruise"},\u5B98\u7F51:{link:"https://openkruise.io"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/openkruise/kruise/releases/tag/v1.6.2"},\u5FEB\u901F\u5165\u95E8:{link:"https://openkruise.io/zh/docs/installation"}}},Ie={title:"\u4E00\u6B3E\u5FEB\u901F\u3001\u8F7B\u91CF\u7684\u53EF\u89C2\u6D4B\u6570\u636E\u91C7\u96C6\u5668\u3002",image:"https://img.alicdn.com/imgextra/i4/O1CN01DkZf3V1cAWwyWl3PU_!!6000000003560-2-tps-372-80.png",labels:["\u53EF\u89C2\u6D4B","\u65E5\u5FD7","Metrics"],links:{Github:{link:"https://github.com/alibaba/ilogtail",apiLink:"https://git-proxy-test-git-proxy-ieeqhwptvv.cn-hongkong.fcapp.run/api/alibaba/ilogtail"},\u5B98\u7F51:{link:"https://ilogtail.gitbook.io/ilogtail-docs"},\u6700\u65B0\u7248\u672C:{link:"https://github.com/alibaba/ilogtail/releases/tag/v1.8.8"},\u5FEB\u901F\u5165\u95E8:{link:"https://ilogtail.gitbook.io/ilogtail-docs/installation/quick-start"}}},ut=({title:t,children:a,width:i="30%",panelSkewDir:o=1})=>e(st,{title:t,width:i,panelSkewDir:o,children:a}),We=({})=>e(ut,{title:"\u6CBB\u7406\u9762",children:[e(f,{logo:"https://img.alicdn.com/imgextra/i2/O1CN01bbN4uH1OXyb3Upgcg_!!6000000001716-2-tps-80-80.png",label:"Sentinel",hoverContent:Me,direction:"bottom"}),e(f,{image:"https://gw.alicdn.com/imgextra/i3/O1CN018gvzgw1GnzVoYQSib_!!6000000000668-2-tps-216-148.png",direction:"bottom",logo:"https://img.alicdn.com/imgextra/i3/O1CN01MbnN5j20pL0WhvbDl_!!6000000006898-2-tps-80-80.png",label:"ChaosBlade",hoverContent:Ve}),e(f,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01yZolgm1U0RHWgJGC6_!!6000000002455-2-tps-216-178.png",hoverContent:je,direction:"bottom",logo:"https://img.alicdn.com/imgextra/i3/O1CN019Nt2qs1eyZRjJMDwi_!!6000000003940-2-tps-80-80.png",label:"AppActive"})]}),Qe=({})=>e(ut,{title:"\u63A7\u5236\u9762",panelSkewDir:-1,children:[e(f,{image:"https://gw.alicdn.com/imgextra/i3/O1CN01dI5UtV1iMnEY2sB3r_!!6000000004399-2-tps-216-154.png",label:"Nacos",hoverContent:Be,logo:"https://img.alicdn.com/imgextra/i3/O1CN01GdSxST24NB7Yl5Pdx_!!6000000007378-2-tps-80-80.png",direction:"bottom"}),e(f,{image:"https://gw.alicdn.com/imgextra/i3/O1CN01g7SsmO1GHTOMxOpzr_!!6000000000597-2-tps-216-160.png",label:"OpenSergo",hoverContent:Ge,logo:"https://img.alicdn.com/imgextra/i3/O1CN01oLvUis1DjSkwk53Tg_!!6000000000252-2-tps-80-80.png",direction:"bottom"})]}),Ze=()=>e(ut,{title:"\u8FD0\u7EF4\u9762",width:"25%",panelSkewDir:-1,children:[e(f,{logo:"https://img.alicdn.com/imgextra/i1/O1CN01wGWLaP1WHVHF2P73D_!!6000000002763-2-tps-80-80.png",label:"Openkruise",hoverContent:Pe}),e(f,{image:"https://gw.alicdn.com/imgextra/i4/O1CN01b9Zgrx1px9zjkxaBN_!!6000000005426-2-tps-216-160.png",logo:"https://img.alicdn.com/imgextra/i1/O1CN01FxpqPp1Q3rn1Xh6N1_!!6000000001921-2-tps-80-80.png",label:"Kubernetes",hoverContent:Re})]}),$e=()=>e(ut,{title:"\u53EF\u89C2\u6D4B",children:[e(f,{logo:"https://img.alicdn.com/imgextra/i3/O1CN01jYzUO31nQywwUzAAv_!!6000000005085-2-tps-80-80.png",label:"iLogtail",hoverContent:Ie}),e(f,{logo:"https://img.alicdn.com/imgextra/i3/O1CN01hTFdm51Jor72V1UQ9_!!6000000001076-2-tps-80-80.png",label:"OpenTelemetry",hoverContent:ze}),e(f,{logo:"https://img.alicdn.com/imgextra/i2/O1CN01xWWOPW1YLHmKw5I1Z_!!6000000003042-2-tps-80-80.png",label:"Prometheus",hoverContent:Ae})]}),Je=()=>{const t=J(U);return e(st,{title:"\u6570\u636E\u9762",width:"90%",children:e("div",{className:"flex items-center justify-evenly w-full pt-1 pr-4",children:[e(f,{image:"https://gw.alicdn.com/imgextra/i2/O1CN014ZK8OP1msdEMGutsg_!!6000000005010-2-tps-166-160.png",label:"IoT/PC/Mobile",hoverable:!1}),e(R,{d:"M0 50 H80",viewBox:"0 0 100 100"}),e(f,{label:"\u7F51\u5173/Higress",hoverContent:De,logo:"https://img.alicdn.com/imgextra/i4/O1CN01BodpHP1YS9ihnVuRB_!!6000000003057-2-tps-80-80.png"}),e(R,{d:"M0 50 H80",viewBox:"0 0 100 100"}),e("div",{className:"flex flex-1 flex-col justify-center items-center",children:[e("div",{className:"flex w-full px-4",children:[e(R,{d:"M10 100  V60 A10 10 0 0 1 20 50 H80",viewBox:"0 0 100 100",isTurn:!0,width:"30%"}),e("div",{className:"flex-1",children:e(f,{image:"https://gw.alicdn.com/imgextra/i3/O1CN01ZVqiyi1sSQGBsdTtE_!!6000000005765-2-tps-216-174.png",logo:"https://img.alicdn.com/imgextra/i4/O1CN01qZ4Kh71Vfwndw8Qoa_!!6000000002681-2-tps-80-80.png",label:e("span",{children:[e("span",{style:`color:${t.colors.highlightFontColor}`,children:"\u5F02\u6B65\u8C03\u7528 /"}),e("span",{children:"RocketMQ"})]}),hoverContent:Ee,direction:"bottom"})}),e(R,{d:"M10 50 H80 A10 10 0 0 1 90 60 V80",viewBox:"0 0 100 100",isTurn:!0,width:"30%"})]}),e("div",{className:"flex w-full items-center",children:[e(st,{title:"\u5FAE\u670D\u52A1\u96C6\u7FA4A",width:"auto",panelStyle:{flex:1},height:"auto",titleStyle:{fontSize:"0.75rem",color:t.colors.normalFontColor,textShadow:"none"},children:[e(f,{image:"https://gw.alicdn.com/imgextra/i2/O1CN01Qe8woR1OvKmr7JClT_!!6000000001767-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01TIWcnX1inMDF8jH9J_!!6000000004457-2-tps-80-80.png",label:"Dubbo",hoverContent:$t}),e(f,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01QS9gNx27T54BcAw5L_!!6000000007797-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01kjTZ8b1d4remhTuM6_!!6000000003683-2-tps-80-80.png",label:"SCA",hoverContent:Jt})]}),e(R,{width:"30%",d:"M0 50 H180",viewBox:"0 0 200 100",label:"\u540C\u6B65\u8C03\u7528"}),e(st,{title:"\u5FAE\u670D\u52A1\u96C6\u7FA4B",width:"auto",panelStyle:{flex:1},height:"auto",titleStyle:{fontSize:"0.75rem",color:t.colors.normalFontColor,textShadow:"none",textAlign:"right"},children:[e(f,{image:"https://gw.alicdn.com/imgextra/i2/O1CN01Qe8woR1OvKmr7JClT_!!6000000001767-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01TIWcnX1inMDF8jH9J_!!6000000004457-2-tps-80-80.png",label:"Dubbo",hoverContent:$t}),e(f,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01QS9gNx27T54BcAw5L_!!6000000007797-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i2/O1CN01kjTZ8b1d4remhTuM6_!!6000000003683-2-tps-80-80.png",label:"SCA",hoverContent:Jt})]})]}),e("div",{className:"flex w-full px-4",children:[e(R,{d:"M10 0 V40 A10 10 0 0 0 20 50 H80",viewBox:"0 0 100 100",isTurn:!0,width:"30%"}),e("div",{className:"flex-1",children:e(f,{image:"https://gw.alicdn.com/imgextra/i2/O1CN014fUi061REEMVnXgBv_!!6000000002079-2-tps-216-166.png",logo:"https://img.alicdn.com/imgextra/i3/O1CN01W3W4PH1qXngVzf7uP_!!6000000005506-2-tps-80-80.png",label:e("span",{children:[e("span",{style:`color:${t.colors.highlightFontColor}`,children:"\u5206\u5E03\u5F0F\u4E8B\u52A1 /"}),e("span",{children:"Seata"})]}),hoverContent:He})}),e(R,{d:"M100 0 V40 A10 10 0 0 1 90 50 H10",viewBox:"0 0 100 100",isTurn:!0,width:"30%"})]})]}),e(R,{d:"M0 50 H80",viewBox:"0 0 100 100"}),e(f,{image:"https://gw.alicdn.com/imgextra/i1/O1CN01VfCTpe1gHdXoaboh6_!!6000000004117-2-tps-200-211.png",label:"\u6570\u636E\u5B58\u50A8",hoverable:!1})]})})},Ut={panelColor:"linear-gradient(179deg, rgba(43, 85, 255, 0) 4%, rgba(112, 131, 254, 0.47) 95%)",arrowColor:"#2491FF",background:"url('https://gw.alicdn.com/imgextra/i3/O1CN01kMsmPQ1rqrmbBpNo1_!!6000000005683-0-tps-3600-1440.jpg')",normalFontColor:"#5C6170",highlightFontColor:"#567BE1",panelTitleColor:"#F4F4F6",tagBgColor:"#e6f4ff",tagBorderColor:"#91caff",tagFontColor:"#1677ff",starForkFontColor:"#8498ee",starForkBgColor:"#ced3f1",linkColor:"#a3e635"};function Ue({colors:t=Ut,linkStyle:a="text-sm",className:i="",...o}){const[r,n]=T(!1),l=()=>{n(!0)},p=()=>{n(!1)};return e(U.Provider,{value:{linkStyle:a,colors:{...Ut,...t}},children:e("div",{class:" flex flex-col justify-around px-2 pt-4 pb-2 "+i,id:"overview-image-root",style:{background:t.background},...o,children:[e("div",{class:"hidden md:inline-block",children:[e("div",{class:"flex justify-around flex-1 items-center",children:[e(Qe,{}),e(We,{})]}),e("div",{class:"flex justify-around flex-[2]",children:e(Je,{})}),e("div",{class:"flex justify-around flex-1",children:[e(Ze,{}),e($e,{})]})]}),e("img",{class:"md:hidden",alt:"overview image",onClick:l,src:"https://img.alicdn.com/imgextra/i2/O1CN01Sb00TA1LFFa1ZQliw_!!6000000001269-0-tps-2400-1156.jpg"}),r&&e("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},onClick:p,children:e("div",{style:{maxWidth:"80%",maxHeight:"90%",overflow:"auto"},onClick:g=>g.stopPropagation(),children:e("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01Sb00TA1LFFa1ZQliw_!!6000000001269-0-tps-2400-1156.jpg",alt:"overview image",style:{maxWidth:"100%"}})})})]})})}const Xe=Ue;export{Xe as OverviewImage};
