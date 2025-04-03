import{c as n,__tla as u}from"./astro-component.m4CCZO6J.js";import{r as l,m as T,u as c,__tla as m}from"./constant.BWAxSZWr.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let s,h,r,o,p,i,a,d=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u6587\u4EF6\u8981\u6C42">\u6587\u4EF6\u8981\u6C42</h2>
<p>\u8003\u8651\u5230\u4FBF\u6377\u6027\uFF0C\u5EFA\u8BAE\u76EE\u6807 URL \u76F4\u63A5\u6307\u5411 Wasm \u6587\u4EF6\u3002</p>
<h2 id="http-\u534F\u8BAE">HTTP \u534F\u8BAE</h2>
<p>\u76F4\u63A5\u914D\u7F6E\u5373\u53EF\uFF0C\u4F46\u9700\u8981\u786E\u4FDD\u76EE\u6807 URL \u53EF\u4EE5\u88AB Gateway \u5BB9\u5668\u8BBF\u95EE\u5230\u3002\u53EF\u4EE5\u5C1D\u8BD5\u5728\u5BB9\u5668\u5185 curl \u9A8C\u8BC1\u3002</p>
<p><img src="/img/docs/ops/how-tos/load-wasm-with-http/http.png" alt="http" referrerpolicy="no-referrer"></p>
<h2 id="https-\u534F\u8BAE">HTTPS \u534F\u8BAE</h2>
<p>\u914D\u7F6E\u65B9\u5F0F\u548C\u8981\u6C42\u4E0E HTTP \u534F\u8BAE\u7C7B\u4F3C\u3002\u4F46\u5982\u679C\u670D\u52A1\u7AEF\u4F7F\u7528\u7684\u662F\u81EA\u7B7E\u7B49\u975E\u53EF\u4FE1\u4EFB\u8BC1\u4E66\u7684\u8BDD\uFF0C\u9700\u8981\u5728 Gateway \u5BB9\u5668\u5185\u589E\u52A0\u4E00\u4E2A\u540D\u4E3A\u201CWASM_INSECURE_REGISTRIES\u201D\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u503C\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u4E3A\u201C*\u201D\uFF0C\u8868\u793A\u4FE1\u4EFB\u6240\u6709\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTPS \u8BC1\u4E66\u3002</p>`,o={title:"\u4F7F\u7528 HTTP/HTTPS \u534F\u8BAE\u52A0\u8F7D Wasm \u63D2\u4EF6",keywords:["ops","config","wasm","plugin","http","https"],description:"\u4ECB\u7ECD\u5982\u4F55\u4E3A\u4F7F\u7528 HTTP/HTTPS \u534F\u8BAE\u52A0\u8F7D Wasm \u63D2\u4EF6",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/config/load-wasm-with-http.md"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/load-wasm-with-http.md",a=void 0,i=function(){return`
# \u4F7F\u7528 HTTP/HTTPS \u534F\u8BAE\u52A0\u8F7D Wasm \u63D2\u4EF6

## \u6587\u4EF6\u8981\u6C42

\u8003\u8651\u5230\u4FBF\u6377\u6027\uFF0C\u5EFA\u8BAE\u76EE\u6807 URL \u76F4\u63A5\u6307\u5411 Wasm \u6587\u4EF6\u3002

## HTTP \u534F\u8BAE

\u76F4\u63A5\u914D\u7F6E\u5373\u53EF\uFF0C\u4F46\u9700\u8981\u786E\u4FDD\u76EE\u6807 URL \u53EF\u4EE5\u88AB Gateway \u5BB9\u5668\u8BBF\u95EE\u5230\u3002\u53EF\u4EE5\u5C1D\u8BD5\u5728\u5BB9\u5668\u5185 curl \u9A8C\u8BC1\u3002

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS \u534F\u8BAE

\u914D\u7F6E\u65B9\u5F0F\u548C\u8981\u6C42\u4E0E HTTP \u534F\u8BAE\u7C7B\u4F3C\u3002\u4F46\u5982\u679C\u670D\u52A1\u7AEF\u4F7F\u7528\u7684\u662F\u81EA\u7B7E\u7B49\u975E\u53EF\u4FE1\u4EFB\u8BC1\u4E66\u7684\u8BDD\uFF0C\u9700\u8981\u5728 Gateway \u5BB9\u5668\u5185\u589E\u52A0\u4E00\u4E2A\u540D\u4E3A\u201CWASM_INSECURE_REGISTRIES\u201D\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u503C\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u4E3A\u201C*\u201D\uFF0C\u8868\u793A\u4FE1\u4EFB\u6240\u6709\u670D\u52A1\u5668\u8FD4\u56DE\u7684 HTTPS \u8BC1\u4E66\u3002
`},h=function(){return t},p=function(){return[{depth:2,slug:"\u6587\u4EF6\u8981\u6C42",text:"\u6587\u4EF6\u8981\u6C42"},{depth:2,slug:"http-\u534F\u8BAE",text:"HTTP \u534F\u8BAE"},{depth:2,slug:"https-\u534F\u8BAE",text:"HTTPS \u534F\u8BAE"}]},s=n((_,w,H)=>{const{layout:P,...e}=o;return e.file=r,e.url=a,l`${T()}${c(t)}`})});export{s as Content,d as __tla,h as compiledContent,s as default,r as file,o as frontmatter,p as getHeadings,i as rawContent,a as url};
