var _=Object.defineProperty;var G=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var f=(e,t,n)=>G(e,typeof t!="symbol"?t+"":t,n);import"./Particles.astro_astro_type_script_index_0_lang.BiyDd7c3.js";import"./LanguageToggle.astro_astro_type_script_index_0_lang.C1TXaPhW.js";import{i as J}from"./index.CTbVEFV3.js";window.dataLayer=window.dataLayer||[];function M(){dataLayer.push(arguments)}M("js",new Date),M("config","G-YHS75WKFBR"),function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?4debd66ec73a32e236b30b46d219e2e3";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(e,t,n,o,r){e[o]=e[o]||[];var i=t.getElementsByTagName(n)[0],a=t.createElement(n);a.async=!0,a.id="beacon-aplus",a.setAttribute("exparams","userid=&aplus&sidx=aplusSidex&ckx=aplusCkx"),a.src="//g.alicdn.com/alilog/mlog/aplus_v2.js",a.crossorigin="anonymous",i.parentNode.insertBefore(a,i)}(window,document,"script","aplus_queue"),function(e){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="//g.alicdn.com/aes/??tracker/3.3.4/index.js,tracker-plugin-pv/3.0.5/index.js,tracker-plugin-event/3.0.0/index.js,tracker-plugin-autolog/3.0.3/index.js,tracker-plugin-survey/3.0.3/index.js,tracker-plugin-jserror/3.0.3/index.js,tracker-plugin-resourceError/3.0.3/index.js",t.onload=function(){window.location.hostname==="nacos.io"&&(window.AES_CONFIG=window.AES_CONFIG||{env:"prod"},window.aes=new AES({pid:"ZAwmfA",user_type:6}),window.AESPluginAutologConfig={exposure:"auto"},window.AEMPluginInstances=[aes.use(AESPluginPV,window.AESPluginPVConfig||{enableHistory:!0}),aes.use(AESPluginEvent,window.AESPluginEventConfig||{}),aes.use(AESPluginSurvey,window.AESPluginEventConfig||{}),aes.use(AESPluginAutolog,window.AESPluginAutologConfig||{}),aes.use(AESPluginJSError,window.AESPluginJSError||{}),aes.use(AESPluginResourceError,window.AESPluginResourceError||{})])},setTimeout(function(){e.getElementsByTagName("body")[0].appendChild(t)},800)}(document);class Z extends HTMLElement{constructor(){super();f(this,"ifscroll");f(this,"handleScroll",()=>{window.innerWidth<=800||(window.scrollY>=100&&!this.ifscroll&&(this.ifscroll=!0,this.classList.add("bg-neutral/[0.84]")),window.scrollY<=100&&this.ifscroll&&(this.ifscroll=!1,this.classList.remove("bg-neutral/[0.84]")))});this.ifscroll=!1,window.addEventListener("scroll",this.handleScroll)}}customElements.define("my-layout",Z);let T=document.createElement("script");T.src="https://g.alicdn.com/cm-design/mw-vendor/1.6.12/web-animations-next.min.js?spm=defwork.home.0.0.413a5c4bEOqptl&file=web-animations-next.min.js",T.onload=function(){document.getAnimations||(document.getAnimations=window.Element.prototype.getAnimations)},document.head.appendChild(T);class z extends HTMLElement{constructor(){super();const t=this.querySelector('[role="tablist"]');this.tabs=[...t.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.tabs.forEach((n,o)=>{n.addEventListener("click",r=>{r.preventDefault();const i=t.querySelector("[aria-selected]");r.currentTarget!==i&&this.switchTab(r.currentTarget,o)}),n.addEventListener("keydown",r=>{const i=this.tabs.indexOf(r.currentTarget),a=r.key==="ArrowLeft"?i-1:r.key==="ArrowRight"?i+1:r.key==="Home"?0:r.key==="End"?this.tabs.length-1:null;a!==null&&this.tabs[a]&&(r.preventDefault(),this.switchTab(this.tabs[a],a))})})}switchTab(t,n){if(!t)return;this.tabs.forEach(r=>{r.removeAttribute("aria-selected"),r.setAttribute("tabindex","-1")}),this.panels.forEach(r=>{r.hidden=!0});const o=this.panels[n];o&&(o.hidden=!1),t.removeAttribute("tabindex"),t.setAttribute("aria-selected","true"),t.focus()}}customElements.define("starlight-tabs",z);function Q(e){e.parentNode.style.display="none",window.alertBarClosed=!0}function R(){if(!["/","/en/","/cloud/","/en/cloud/","/news/","/en/news/","/activity","/en/activity","/blog/","/en/blog/","/wuyi/","/en/wuyi/","/plugin/","/en/plugin/"].includes(location.pathname))document.querySelector(".alert-bar")&&(document.querySelector(".alert-bar").style.display="none");else try{const e=document.querySelector(".alert-bar"),t=document.querySelector(".close-button");(window.alertBarClosed||!1)===!0?e.style.display="none":t.addEventListener("click",function(){Q(t)})}catch(e){console.log(e)}}window.addEventListener("DOMContentLoaded",R),document.addEventListener("astro:after-swap",R);class ee extends HTMLElement{constructor(){super();const t=this.querySelector("button");t.addEventListener("click",()=>this.toggleExpanded());const n=this.closest("nav");n&&n.addEventListener("keyup",o=>this.closeOnEscape(o,t))}setExpanded(t){this.setAttribute("aria-expanded",String(t)),document.body.toggleAttribute("data-mobile-menu-expanded",t)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(t,n){t.code==="Escape"&&(this.setExpanded(!1),n.focus())}}customElements.define("mobile-menu-button",ee);const b="data-astro-transition-persist";function te(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function ne(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function oe(e){for(const t of Array.from(document.head.children)){const n=se(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function re(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ae(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ie=()=>{const e=document.activeElement;if(e!=null&&e.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>x({activeElement:e,start:t,end:n})}return()=>x({activeElement:e})}else return()=>x({activeElement:null})},x=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},se=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ae=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},le=e=>{te(e),ne(e),oe(e);const t=ie();re(e.body,document.body),t()},ce="astro:before-preparation",de="astro:after-preparation",ue="astro:before-swap",me="astro:after-swap",fe=e=>document.dispatchEvent(new Event(e));class j extends Event{constructor(n,o,r,i,a,l,d,m,c,s){super(n,o);f(this,"from");f(this,"to");f(this,"direction");f(this,"navigationType");f(this,"sourceElement");f(this,"info");f(this,"newDocument");f(this,"signal");this.from=r,this.to=i,this.direction=a,this.navigationType=l,this.sourceElement=d,this.info=m,this.newDocument=c,this.signal=s,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class he extends j{constructor(n,o,r,i,a,l,d,m,c,s){super(ce,{cancelable:!0},n,o,r,i,a,l,d,m);f(this,"formData");f(this,"loader");this.formData=c,this.loader=s.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class pe extends j{constructor(n,o){super(ue,void 0,n.from,n.to,n.direction,n.navigationType,n.sourceElement,n.info,n.newDocument,n.signal);f(this,"direction");f(this,"viewTransition");f(this,"swap");this.direction=n.direction,this.viewTransition=o,this.swap=()=>le(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ge(e,t,n,o,r,i,a,l,d){const m=new he(e,t,n,o,r,i,window.document,a,l,d);return document.dispatchEvent(m)&&(await m.loader(),m.defaultPrevented||(fe(de),m.navigationType!=="traverse"&&k({scrollX,scrollY}))),m}function we(e,t){const n=new pe(e,t);return document.dispatchEvent(n),n.swap(),n}const be=history.pushState.bind(history),A=history.replaceState.bind(history),k=e=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...e},""))},P=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Y=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let h,w,S;const X=e=>document.dispatchEvent(new Event(e)),O=()=>X("astro:page-load"),ye=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{var n;let t=document.title||((n=document.querySelector("h1"))==null?void 0:n.textContent)||location.pathname;e.textContent=t},60)},N="data-astro-transition-persist",U="data-astro-transition",q="data-astro-transition-fallback";let L,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(A({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function ve(e,t){var n;try{const o=await fetch(e,t),r=((n=o.headers.get("content-type"))!=null?n:"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:r}}catch{return null}}function F(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Ee(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const i=new Promise(a=>{o.onload=o.onerror=a});e=e.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const $=(e,t,n,o,r)=>{const i=Y(t,e),a=document.title;document.title=o;let l=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const d=history.state;A({...n.state,index:d.index,scrollX:d.scrollX,scrollY:d.scrollY},"",e.href)}else be({...n.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(document.title=a,S=e,i||(scrollTo({left:0,top:0,behavior:"instant"}),l=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const d=history.state;location.href=e.href,history.state||(A(d,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else l||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ae(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${N}="${n.getAttribute(N)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return t}async function B(e,t,n,o,r){async function i(d){function m(u){const p=u.effect;return!p||!(p instanceof KeyframeEffect)||!p.target?!1:window.getComputedStyle(p.target,p.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(q,d);const s=document.getAnimations().filter(u=>!c.includes(u)&&!m(u));return Promise.allSettled(s.map(u=>u.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await i("old")}catch{}const a=document.title,l=we(e,n.viewTransition);$(l.to,l.from,t,a,o),X(me),r==="animate"&&(!n.transitionSkipped&&!l.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Se(){return h==null||h.controller.abort(),h={controller:new AbortController}}async function I(e,t,n,o,r){const i=Se();if(!D()||location.origin!==n.origin){i===h&&(h=void 0),location.href=n.href;return}const a=r?"traverse":o.history==="replace"?"replace":"push";if(a!=="traverse"&&k({scrollX,scrollY}),Y(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){$(n,t,o,document.title,r),i===h&&(h=void 0);return}const l=await ge(t,n,e,a,o.sourceElement,o.info,i.controller.signal,o.formData,d);if(l.defaultPrevented||l.signal.aborted){i===h&&(h=void 0),l.signal.aborted||(location.href=n.href);return}async function d(s){var C,H;const u=s.to.href,p={signal:s.signal};if(s.formData){p.method="POST";const v=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:(C=s.sourceElement)==null?void 0:C.closest("form");p.body=((H=v==null?void 0:v.attributes.getNamedItem("enctype"))==null?void 0:H.value)==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const g=await ve(u,p);if(g===null){s.preventDefault();return}if(g.redirected&&(s.to=new URL(g.redirected)),L!=null||(L=new DOMParser),s.newDocument=L.parseFromString(g.html,g.mediaType),s.newDocument.querySelectorAll("noscript").forEach(v=>v.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const y=Ae(s.newDocument);y.length&&!s.signal.aborted&&await Promise.all(y)}async function m(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const c=await m();if(l.signal.aborted){i===h&&(h=void 0);return}if(document.documentElement.setAttribute(U,l.direction),P)c.viewTransition=document.startViewTransition(async()=>await B(l,o,c,r));else{const s=(async()=>{await Promise.resolve(),await B(l,o,c,r,F())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(u=>c.viewTransitionFinished=u),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(q)}}}c.viewTransition.updateCallbackDone.finally(async()=>{await Ee(),O(),ye()}),c.viewTransition.finished.finally(()=>{c.viewTransition=void 0,c===w&&(w=void 0),i===h&&(h=void 0),document.documentElement.removeAttribute(U),document.documentElement.removeAttribute(q)});try{await c.viewTransition.updateCallbackDone}catch(s){const u=s;console.log("[astro]",u.name,u.message,u.stack)}}async function V(e,t){await I("forward",S,new URL(e,location.href),t!=null?t:{})}function Le(e){if(!D()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>E?"forward":"back";E=n,I(o,S,new URL(location.href),{},t)}const K=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&k({scrollX,scrollY})};{if(P||F()!=="none")if(S=new URL(location.href),addEventListener("popstate",Le),addEventListener("load",O),"onscrollend"in window)addEventListener("scrollend",K);else{let e,t,n,o;const r=()=>{var i;if(o!==((i=history.state)==null?void 0:i.index)){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,K();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}function Te(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function W(e){return e.dataset.astroReload!==void 0}(P||Te()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;W(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),V(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{var c,s,u,p;let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||W(t))return;const n=t,o=e.submitter,r=new FormData(n,o),i=typeof n.action=="string"?n.action:n.getAttribute("action"),a=typeof n.method=="string"?n.method:n.getAttribute("method");let l=(s=(c=o==null?void 0:o.getAttribute("formaction"))!=null?c:i)!=null?s:location.pathname;const d=(p=(u=o==null?void 0:o.getAttribute("formmethod"))!=null?u:a)!=null?p:"get";if(d==="dialog"||location.origin!==new URL(l,location.href).origin)return;const m={sourceElement:o!=null?o:n};if(d==="get"){const g=new URLSearchParams(r),y=new URL(l);y.search=g.toString(),l=y.toString()}else m.formData=r;e.preventDefault(),V(l,m)}),J({prefetchAll:!0}));class xe extends HTMLElement{constructor(){super();const t=this.getAttribute("data-trigger"),n=this.querySelector(".toggle-dropdown"),o=this.querySelector("svg[data-updown]");o&&(t==="click"?this.addEventListener("click",()=>{n&&n.classList.toggle("toggle-dropdown-active"),document.body.classList.toggle("overflow-hidden"),Array.from(o.classList).includes("toggle-trigger-up")?this.toggleDown(o):this.toggleUp(o)}):t==="hover"&&(this.addEventListener("mouseenter",()=>{n&&n.classList.add("toggle-dropdown-active"),this.toggleUp(o)}),this.addEventListener("mouseleave",()=>{n&&n.classList.remove("toggle-dropdown-active"),this.toggleDown(o)})))}toggleUp(t){t.classList.remove("toggle-trigger-down"),t.classList.add("toggle-trigger-up")}toggleDown(t){t.classList.remove("toggle-trigger-up"),t.classList.add("toggle-trigger-down")}}customElements.define("toggle-component",xe);class ke extends HTMLElement{constructor(){super();const t=this.parentElement;this.querySelector(".dropdown-overlay").addEventListener("mouseenter",()=>{t.classList.remove("toggle-dropdown-active"),t.classList.add("toggle-dropdown-notactive")})}}customElements.define("menu-container",ke);
