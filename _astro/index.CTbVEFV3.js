const m=new Set,s=new WeakSet;let c=!0,u,g=!1;function v(e){var t,n;g||(g=!0,c!=null||(c=(t=e==null?void 0:e.prefetchAll)!=null?t:!1),u!=null||(u=(n=e==null?void 0:e.defaultStrategy)!=null?n:"hover"),p(),w(),y(),L())}function p(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{i(t.target,"tap")&&f(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function w(){let e;document.body.addEventListener("focusin",o=>{i(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),l(()=>{for(const o of document.getElementsByTagName("a"))s.has(o)||i(o,"hover")&&(s.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{f(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function y(){let e;l(()=>{for(const t of document.getElementsByTagName("a"))s.has(t)||i(t,"viewport")&&(s.add(t),e!=null||(e=E()),e.observe(t))})}function E(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,a=e.get(r);o.isIntersecting?(a&&clearTimeout(a),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),f(r.href)},300))):a&&(clearTimeout(a),e.delete(r))}})}function L(){l(()=>{for(const e of document.getElementsByTagName("a"))i(e,"load")&&f(e.href)})}function f(e,t){var o,r,a;const n=(o=t==null?void 0:t.ignoreSlowConnection)!=null?o:!1;if(T(e,n))if(m.add(e),((a=(r=document.createElement("link").relList)==null?void 0:r.supports)==null?void 0:a.call(r,"prefetch"))&&(t==null?void 0:t.with)!=="fetch"){const d=document.createElement("link");d.rel="prefetch",d.setAttribute("href",e),document.head.append(d)}else fetch(e,{priority:"low"})}function T(e,t){if(!navigator.onLine||!t&&h())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!m.has(e)}catch{}return!1}function i(e,t){if((e==null?void 0:e.tagName)!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||c)&&h()?!0:n==null&&c||n===""?t===u:n===t}function h(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function l(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}export{v as i};