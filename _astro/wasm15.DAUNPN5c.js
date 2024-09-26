import{c as l,__tla as c}from"./astro-component.CwRucF1h.js";import{r,m as v,u as y,__tla as u}from"./constant.CvItjurb.js";import{__tla as m}from"./astro/assets-service.Dd3mQuiC.js";let s,o,t,a,p,d,n,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p>\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD Proxy-Wasm  Go SDK \u548C Wasm \u63D2\u4EF6\u57FA\u672C\u539F\u7406\u3002</p>
<h2 id="1-wasmtinygoproxy-wasm-go-sdk">1 Wasm\u3001TinyGo\u3001Proxy-Wasm Go SDK</h2>
<h3 id="11-wasm">1.1 Wasm</h3>
<h4 id="111-\u4EC0\u4E48\u662F-wasm">1.1.1 \u4EC0\u4E48\u662F Wasm \uFF1F</h4>
<p><a href="https://webassembly.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly\uFF08\u7B80\u79F0 Wasm\uFF09</a> \u662F\u64CD\u4F5C\u5806\u6808\u865A\u62DF\u673A\u7684\u4E8C\u8FDB\u5236\u6307\u4EE4\u96C6\uFF0CWasm \u53EF\u4EE5\u5728 Web \u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u6216\u8005\u5176\u4ED6\u73AF\u5883\u6BD4\u5982\u670D\u52A1\u5668\u7AEF\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u3002Wasm\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A</p>
<ul>
<li>\u9AD8\u6548\u6027\u80FD\uFF1A\u63D0\u4F9B\u4E86\u63A5\u8FD1\u673A\u5668\u7801\u7684\u6027\u80FD\u3002</li>
<li>\u8DE8\u5E73\u53F0\uFF1AWasm \u662F\u4E00\u79CD\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u683C\u5F0F\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u652F\u6301\u5B83\u7684\u5E73\u53F0\u4E0A\u8FD0\u884C\uFF0C\u5305\u62EC\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u3002</li>
<li>\u5B89\u5168\u6027\uFF1AWasm \u5728\u4E00\u4E2A\u5185\u5B58\u5B89\u5168\u7684\u6C99\u7BB1\u73AF\u5883\u4E2D\u8FD0\u884C\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u5B89\u5168\u5730\u6267\u884C\u4E0D\u53D7\u4FE1\u4EFB\u7684\u4EE3\u7801\uFF0C\u800C\u4E0D\u4F1A\u8BBF\u95EE\u6216\u4FEE\u6539\u4E3B\u673A\u7CFB\u7EDF\u7684\u5176\u4ED6\u90E8\u5206\u3002</li>
<li>\u53EF\u79FB\u690D\u6027\uFF1AWasm \u6A21\u5757\u53EF\u4EE5\u88AB\u7F16\u8BD1\u6210 WebAssembly \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u53EF\u4EE5\u88AB\u4F20\u8F93\u548C\u52A0\u8F7D\u5230\u652F\u6301 Wasm \u7684\u4EFB\u4F55\u73AF\u5883\u4E2D\u3002</li>
<li>\u591A\u8BED\u8A00\u652F\u6301\uFF1AWasm \u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528 C\u3001C++\u3001Rust\u3001Go \u7B49\u591A\u79CD\u8BED\u8A00\u7F16\u5199\u4EE3\u7801\uFF0C\u7136\u540E\u7F16\u8BD1\u6210 Wasm \u683C\u5F0F\u3002</li>
</ul>
<h4 id="112-wasm-\u6A21\u5757">1.1.2 Wasm \u6A21\u5757</h4>
<p>Wasm \u6A21\u5757\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u79CD\u683C\u5F0F\uFF1A</p>
<ul>
<li>\u4E8C\u8FDB\u5236\u683C\u5F0F\uFF1AWasm \u7684\u4E3B\u8981\u7F16\u7801\u683C\u5F0F\uFF0C\u4EE5 .wasm \u540E\u7F00\u7ED3\u5C3E\u3002</li>
<li>\u6587\u672C\u683C\u5F0F\uFF1A\u4E3B\u8981\u662F\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005\u7406\u89E3 Wasm \u6A21\u5757\uFF0C\u4EE5 .wat \u540E\u7F00\u7ED3\u5C3E\uFF0C\u76F8\u5F53\u4E8E\u6C47\u7F16\u8BED\u8A00\u7A0B\u5E8F\u3002</li>
</ul>
<p>Wasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u662F Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0CWasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u4E5F\u662F\u4EE5\u9B54\u6570\u548C\u7248\u672C\u53F7\u5F00\u5934\uFF0C\u4E4B\u540E\u5C31\u662F\u6A21\u5757\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u6839\u636E\u4E0D\u540C\u7528\u9014\u88AB\u5206\u522B\u653E\u5728\u4E0D\u540C\u7684\u6BB5\uFF08Section\uFF09 \u4E2D\u3002\u4E00\u5171\u5B9A\u4E49\u4E86 12 \u79CD\u6BB5\uFF0C\u6BCF\u79CD\u6BB5\u5206\u914D\u4E86 ID\uFF08\u4ECE 0 \u5230 11\uFF09\uFF0C\u4F9D\u6B21\u6709\u5982\u4E0B 12 \u4E2A\u6BB5\uFF1A\u81EA\u5B9A\u4E49\u6BB5\u3001\u7C7B\u578B\u6BB5\u3001\u5BFC\u5165\u6BB5\u3001\u51FD\u6570\u6BB5\u3001\u8868\u6BB5\u3001\u5185\u5B58\u6BB5\u3001\u5168\u5C40\u6BB5\u3001\u5BFC\u51FA\u6BB5\u3001\u8D77\u59CB\u6BB5\u3001\u5143\u7D20\u6BB5\u3001\u4EE3\u7801\u6BB5\u3001\u6570\u636E\u6BB5\u3002
Wasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\u7EC4\u6210\u5982\u4E0B\u56FE\uFF08\u56FE\u7247\u6765\u6E90 <a href="https://github.com/mcuking/blog/issues/96/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7</a>\uFF09\u6240\u793A\uFF1A
<img src="https://img.alicdn.com/imgextra/i1/O1CN01rLuxGp1zIX413ZQ0g_!!6000000006691-0-tps-1784-1266.jpg" alt="img" referrerpolicy="no-referrer"></p>
<p>\u6BCF\u4E00\u4E2A\u4E0D\u540C\u7684\u6BB5\u90FD\u63CF\u8FF0\u4E86\u8FD9\u4E2A Wasm \u6A21\u5757\u7684\u4E00\u90E8\u5206\u4FE1\u606F\u3002\u800C\u6A21\u5757\u5185\u7684\u6240\u6709\u6BB5\u653E\u5728\u4E00\u8D77\uFF0C\u4FBF\u63CF\u8FF0\u4E86\u8FD9\u4E2A Wasm \u6A21\u5757\u7684\u5168\u90E8\u4FE1\u606F\uFF1A</p>
<ul>
<li>\u5185\u5B58\u6BB5\u548C\u6570\u636E\u6BB5\uFF1A\u5185\u5B58\u6BB5\u662F\u7EBF\u6027\u5185\u5B58\uFF08linear memory\uFF09\u7528\u4E8E\u5B58\u50A8\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u52A8\u6001\u6570\u636E\u3002\u6570\u636E\u6BB5\u7528\u4E8E\u5B58\u50A8\u521D\u59CB\u5316\u5185\u5B58\u7684\u9759\u6001\u6570\u636E\u3002\u5185\u5B58\u53EF\u4EE5\u4ECE\u5916\u90E8\u5BBF\u4E3B\u5BFC\u5165\uFF0C\u540C\u65F6\u5185\u5B58\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u5230\u5916\u90E8\u5BBF\u4E3B\u73AF\u5883\u3002</li>
<li>\u8868\u6BB5\u548C\u5143\u7D20\u6BB5\uFF1A\u8868\u6BB5\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u5F15\u7528\uFF0C\u76EE\u524D\u5BF9\u8C61\u53EA\u80FD\u662F\u51FD\u6570\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u8868\u6BB5\u5B9E\u73B0\u51FD\u6570\u6307\u9488\u7684\u529F\u80FD\u3002\u5143\u7D20\u6BB5\u7528\u4E8E\u5B58\u50A8\u521D\u59CB\u5316\u8868\u6BB5\u7684\u6570\u636E\u3002\u8868\u5BF9\u8C61\u53EF\u4EE5\u4ECE\u5916\u90E8\u5BBF\u4E3B\u5BFC\u5165\uFF0C\u540C\u65F6\u8868\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u5230\u5916\u90E8\u5BBF\u4E3B\u73AF\u5883\u3002</li>
<li>\u8D77\u59CB\u6BB5\uFF1A\u8D77\u59CB\u6BB5\u7528\u4E8E\u5B58\u50A8\u8D77\u59CB\u51FD\u6570\u7684\u7D22\u5F15\uFF0C\u5373\u6307\u5B9A\u4E86\u4E00\u4E2A\u5728\u52A0\u8F7D\u65F6\u81EA\u52A8\u8FD0\u884C\u7684\u51FD\u6570\u3002\u8D77\u59CB\u51FD\u6570\u4E3B\u8981\u4F5C\u7528\uFF1A1. \u5728\u6A21\u5757\u52A0\u8F7D\u540E\u8FDB\u884C\u521D\u59CB\u5316\u5DE5\u4F5C\uFF1B 2. \u5C06\u6A21\u5757\u53D8\u6210\u53EF\u6267\u884C\u6587\u4EF6\u3002</li>
<li>\u5168\u5C40\u6BB5\uFF1A\u5168\u5C40\u6BB5\u7528\u4E8E\u5B58\u50A8\u5168\u5C40\u53D8\u91CF\u7684\u4FE1\u606F\uFF08\u5168\u5C40\u53D8\u91CF\u7684\u503C\u7C7B\u578B\u3001\u53EF\u53D8\u6027\u3001\u521D\u59CB\u5316\u8868\u8FBE\u5F0F\u7B49\uFF09\u3002</li>
<li>\u51FD\u6570\u6BB5\u3001\u4EE3\u7801\u6BB5\u548C\u7C7B\u578B\u6BB5\uFF1A\u8FD9\u4E09\u4E2A\u6BB5\u5747\u662F\u7528\u4E8E\u5B58\u50A8\u8868\u8FBE\u51FD\u6570\u7684\u6570\u636E\u3002\u5176\u4E2D
<ul>
<li>\u7C7B\u578B\u6BB5\uFF1A\u7C7B\u578B\u6BB5\u7528\u4E8E\u5B58\u50A8\u6A21\u5757\u5185\u6240\u6709\u7684\u51FD\u6570\u7B7E\u540D\uFF08\u51FD\u6570\u7B7E\u540D\u8BB0\u5F55\u4E86\u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u548C\u6570\u91CF\uFF09\uFF0C\u6CE8\u610F\u82E5\u5B58\u5728\u591A\u4E2A\u51FD\u6570\u7684\u51FD\u6570\u7B7E\u540D\u76F8\u540C\uFF0C\u5219\u5B58\u50A8\u4E00\u4EFD\u5373\u53EF\u3002</li>
<li>\u51FD\u6570\u6BB5\uFF1A\u51FD\u6570\u6BB5\u7528\u4E8E\u5B58\u50A8\u51FD\u6570\u5BF9\u5E94\u7684\u51FD\u6570\u7B7E\u540D\u7D22\u5F15\uFF0C\u6CE8\u610F\u662F\u51FD\u6570\u7B7E\u540D\u7684\u7D22\u5F15\uFF0C\u800C\u4E0D\u662F\u51FD\u6570\u7D22\u5F15\u3002</li>
<li>\u4EE3\u7801\u6BB5\uFF1A\u4EE3\u7801\u6BB5\u7528\u4E8E\u5B58\u50A8\u51FD\u6570\u7684\u5B57\u8282\u7801\u548C\u5C40\u90E8\u53D8\u91CF\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u4F53\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u4EE3\u7801\u6240\u5BF9\u5E94\u7684\u5B57\u8282\u7801\u3002</li>
</ul>
</li>
<li>\u5BFC\u5165\u6BB5\u548C\u5BFC\u51FA\u6BB5\uFF1A\u5BFC\u51FA\u6BB5\u7528\u4E8E\u5B58\u50A8\u5BFC\u51FA\u9879\u4FE1\u606F\uFF08\u5BFC\u51FA\u9879\u7684\u6210\u5458\u540D\u3001\u7C7B\u578B\uFF0C\u4EE5\u53CA\u5728\u5BF9\u5E94\u6BB5\u4E2D\u7684\u7D22\u5F15\u7B49\uFF09\u3002\u5BFC\u5165\u6BB5\u7528\u4E8E\u5B58\u50A8\u5BFC\u5165\u9879\u4FE1\u606F\uFF08\u5BFC\u5165\u9879\u7684\u6210\u5458\u540D\u3001\u7C7B\u578B\uFF0C\u4EE5\u53CA\u4ECE\u54EA\u4E2A\u6A21\u5757\u5BFC\u5165\u7B49\uFF09\u3002\u5BFC\u51FA/\u5BFC\u5165\u9879\u7C7B\u578B\u6709 4 \u79CD\uFF1A\u51FD\u6570\u3001\u8868\u3001\u5185\u5B58\u3001\u5168\u5C40\u53D8\u91CF\u3002</li>
<li>\u81EA\u5B9A\u4E49\u6BB5\uFF1A\u81EA\u5B9A\u4E49\u6BB5\u4E3B\u8981\u7528\u4E8E\u4FDD\u5B58\u8C03\u8BD5\u7B26\u53F7\u7B49\u548C\u8FD0\u884C\u65E0\u5173\u7684\u4FE1\u606F\u3002</li>
</ul>
<p>\u5173\u4E8E Wasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u8BE6\u7EC6\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003 <a href="https://webassembly.github.io/spec/core/binary/modules.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Wasm \u6A21\u5757 Binary Format</a>\u3002</p>
<p>Wasm \u6A21\u5757 wat \u6587\u672C\u683C\u5F0F \u4F7F\u7528\u4E86 <code dir="auto">S- \u8868\u8FBE\u5F0F</code> \u7684\u5F62\u5F0F\u6765\u8868\u8FBE Wasm \u6A21\u5757\u53CA\u5176\u76F8\u5173\u5B9A\u4E49\u3002\u5173\u4E8E wat \u683C\u5F0F\u7684\u66F4\u591A\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u8003 <a href="https://developer.mozilla.org/zh-CN/docs/WebAssembly/Understanding_the_text_format" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u7406\u89E3 WebAssembly \u6587\u672C\u683C\u5F0F</a>\u3002
\u4E0B\u56FE\uFF08\u56FE\u7247\u6765\u6E90 <a href="https://github.com/mcuking/blog/issues/96/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7</a>\uFF09\u5C31\u662F\u4F7F\u7528 C \u8BED\u8A00\u7F16\u5199\u7684\u9636\u4E58\u51FD\u6570\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684 Wasm \u6587\u672C\u683C\u5F0F\u548C\u4E8C\u8FDB\u5236\u683C\u5F0F\u3002
<img src="https://img.alicdn.com/imgextra/i4/O1CN01VcoLBQ1ZcWL5XHYIR_!!6000000003215-0-tps-1892-878.jpg" alt="img" referrerpolicy="no-referrer"></p>
<p>\u53EF\u4EE5\u901A\u8FC7 <a href="https://wasdk.github.io/wasmcodeexplorer/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly Code Explorer</a> \u66F4\u76F4\u89C2\u5730\u67E5\u770B Wasm \u4E8C\u8FDB\u5236\u683C\u5F0F\u548C\u6587\u672C\u683C\u5F0F\u4E4B\u95F4\u7684\u5173\u8054\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 <a href="https://github.com/WebAssembly/wabt" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">wabt</a> \u63D0\u4F9B\u5DE5\u5177 \uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C Wasm \u4E8C\u8FDB\u5236\u683C\u5F0F\u548C\u6587\u672C\u683C\u5F0F\u7684\u8F6C\u6362\u3002</p>
<h4 id="113--wasm-\u6307\u4EE4\u96C6">1.1.3  Wasm \u6307\u4EE4\u96C6</h4>
<p>Wasm \u6307\u4EE4\u96C6\u5305\u542B\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<ul>
<li>Wasm \u6307\u4EE4\u4E3B\u8981\u5206\u4E3A\u63A7\u5236\u6307\u4EE4\u3001\u53C2\u6570\u6307\u4EE4\u3001\u53D8\u91CF\u6307\u4EE4\u3001\u5185\u5B58\u6307\u4EE4\u548C\u6570\u503C\u6307\u4EE4\uFF0C\u6BCF\u6761\u6307\u4EE4\u5305\u542B\u64CD\u4F5C\u7801\u548C\u64CD\u4F5C\u6570\u3002\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u70B9\u51FB\u67E5\u770B\u4E0B <a href="https://pengowray.github.io/wasm-ops/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Wasm \u6240\u6709\u7684\u64CD\u4F5C\u7801</a>, \u53EF\u89C6\u5316\u8868\u683C\u76F4\u89C2\u5730\u5C55\u793A\u4E86 Wasm \u6240\u6709\u7684\u64CD\u4F5C\u7801\u3002</li>
<li>\u53EA\u6709\u56DB\u79CD\u6570\u636E\u7C7B\u578B\uFF1A i32\u3001i64\u3001f32\u3001f64</li>
<li>\u6307\u4EE4\u57FA\u4E8E\u6808\uFF0C\u5E76\u4E14\u652F\u6301\u9012\u5F52\u8C03\u7528\u3002\u4F8B\u5982 i32.add \u4ECE\u6808\u5F39\u51FA\u4E24\u4E2A i32 \u7C7B\u578B\u7684\u503C\uFF0C\u5E76\u5C06\u5B83\u4EEC\u76F8\u52A0\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u538B\u5165\u6808\u3002</li>
<li>\u4ECE\u5185\u5B58\u8BFB\u53D6\u6570\u636E
<ul>
<li>i32.load \u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\u4E00\u4E2A i32 \u7C7B\u578B\u7684\u503C\u3002</li>
<li>i32.const value \u5C06\u4E00\u4E2A i32 \u7C7B\u578B\u7684\u503C\u538B\u5165\u6808\u3002</li>
<li>\u4ECE\u7EBF\u6027\u5185\u5B58\u8BFB\u53D6\u6570\u636E</li>
</ul>
</li>
</ul>
<p>\u5173\u4E8E\u66F4\u591A Wasm \u89E3\u91CA\u5668\u5B9E\u73B0\u539F\u7406\u7684\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/mcuking/blog/issues/96" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7</a>\u3002</p>
<h3 id="12-tinygo">1.2 TinyGo</h3>
<p><a href="https://tinygo.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">TinyGo</a> \u662F\u4E00\u4E2A Go \u8BED\u8A00\u7F16\u8BD1\u5668\uFF0C\u5B83\u4E13\u6CE8\u4E8E\u751F\u6210\u5C0F\u578B\u3001\u9AD8\u6548\u7684 Go \u7A0B\u5E8F\uFF0C\u7279\u522B\u662F\u4E3A\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u548C WebAssembly \u73AF\u5883\u8BBE\u8BA1\u3002 TinyGo \u4E0E Go \u8BED\u8A00\u7684\u6807\u51C6\u7F16\u8BD1\u5668\u4E0D\u540C\uFF0C\u5B83\u6709\u4EE5\u4E0B\u4F18\u52BF\uFF1A</p>
<ul>
<li>\u751F\u6210\u5C0F\u578B\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1ATinyGo \u4F18\u5316\u4E86\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u4F7F\u5176\u975E\u5E38\u9002\u5408\u8D44\u6E90\u53D7\u9650\u7684\u73AF\u5883\u3002</li>
<li>\u7B80\u5316\u7684 Go \u6807\u51C6\u5E93\uFF1ATinyGo \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5316\u7248\u672C\u7684 Go \u6807\u51C6\u5E93\uFF0C\u51CF\u5C11\u4E86\u4F9D\u8D56\u548C\u590D\u6742\u6027\u3002TinyGo \u652F\u6301\u6807\u51C6\u5E93\u8BE6\u60C5\uFF1A<a href="https://tinygo.org/docs/reference/lang-support/stdlib/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://tinygo.org/docs/reference/lang-support/stdlib/</a> \u3002</li>
<li>\u8DE8\u5E73\u53F0\u7F16\u8BD1\uFF1ATinyGo \u652F\u6301\u8DE8\u5E73\u53F0\u7F16\u8BD1\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4E3A\u4E0D\u540C\u7684\u76EE\u6807\u5E73\u53F0\u751F\u6210\u4EE3\u7801\u3002</li>
<li>\u652F\u6301 WebAssembly\uFF1A\u901A\u8FC7\u4F7F\u7528 TinyGo\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u4E3A WebAssembly \u73AF\u5883\u7F16\u5199\u9AD8\u6548\u7684 Go \u5E94\u7528\u7A0B\u5E8F\uFF0C\u540C\u65F6\u5229\u7528 Go \u8BED\u8A00\u7684\u7B80\u6D01\u6027\u548C\u6613\u7528\u6027\u3002</li>
</ul>
<p>\u201C\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5B98\u65B9 Go \u7F16\u8BD1\u5668\uFF1F\u201D\u7684\u95EE\u9898\uFF0C\u5982\u679C\u5BF9\u7EC6\u8282\u611F\u5174\u8DA3\uFF0C\u8BF7\u53C2\u8003 Go \u4ED3\u5E93\u4E2D\u7684\u76F8\u5173 issue\uFF1A</p>
<ul>
<li><a href="https://github.com/golang/go/issues/25612" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/golang/go/issues/25612</a></li>
<li><a href="https://github.com/golang/go/issues/31105" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/golang/go/issues/31105</a></li>
<li><a href="https://github.com/golang/go/issues/38248" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/golang/go/issues/38248</a></li>
</ul>
<p>\u8FD9\u4E9B issue \u8BA8\u8BBA\u4E86\u5B98\u65B9 Go \u7F16\u8BD1\u5668\u5728\u751F\u6210 Wasm \u652F\u6301\u65B9\u9762\u7684\u9650\u5236\u548C\u8FDB\u5C55\u3002 TinyGo \u4F5C\u4E3A\u4E00\u4E2A\u66FF\u4EE3\u65B9\u6848\uFF0C\u80FD\u591F\u751F\u6210\u9002\u5408 <a href="https://github.com/proxy-wasm/spec" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm ABI</a> \u89C4\u8303\u7684 Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u4F7F\u5F97\u5B83\u6210\u4E3A\u5F00\u53D1 Proxy-Wasm \u5E94\u7528\u7A0B\u5E8F\u7684\u7406\u60F3\u9009\u62E9\u3002</p>
<h3 id="13-proxy-wasm-go-sdk">1.3 Proxy-Wasm Go SDK</h3>
<p><a href="https://github.com/higress-group/proxy-wasm-go-sdk" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm Go SDK</a> \u4F9D\u8D56\u4E8E TinyGo, \u540C\u65F6 Proxy-Wasm Go SDK \u662F\u57FA\u4E8E <a href="https://github.com/proxy-wasm/spec" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm ABI</a> \u89C4\u8303\u4F7F\u7528 Go \u7F16\u7A0B\u8BED\u8A00\u6269\u5C55\u7F51\u7EDC\u4EE3\u7406\uFF08\u4F8B\u5982 Envoyproxy\uFF09\u7684 SDK\uFF0C \u800C Proxy-Wasm ABI \u5B9A\u4E49\u4E86\u7F51\u7EDC\u4EE3\u7406\u548C\u5728\u7F51\u7EDC\u4EE3\u7406\u5185\u90E8\u8FD0\u884C\u7684 Wasm \u865A\u62DF\u673A\u4E4B\u95F4\u7684\u63A5\u53E3\u3002
\u901A\u8FC7\u8FD9\u4E2A SDK\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u751F\u6210\u7B26\u5408 Proxy-Wasm \u89C4\u8303\u7684 Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u800C\u65E0\u9700\u4E86\u89E3 Proxy-Wasm ABI \u89C4\u8303\uFF0C\u540C\u65F6\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u4F9D\u8D56\u8FD9\u4E2A SDK \u7684 Go API \u6765\u5F00\u53D1\u63D2\u4EF6\u6269\u5C55 Enovy \u529F\u80FD\u3002</p>
<h2 id="2-wasm-vm\u63D2\u4EF6\u548C-envoy-\u914D\u7F6E">2 Wasm VM\u3001\u63D2\u4EF6\u548C Envoy \u914D\u7F6E</h2>
<p>Wasm \u865A\u62DF\u673A\uFF08Wasm VM\uFF09 \u6216\u7B80\u79F0 VM \u6307\u7684\u662F\u52A0\u8F7D Wasm \u7A0B\u5E8F\u7684\u5B9E\u4F8B\u3002 \u5728 Envoy \u4E2D\uFF0CVM \u901A\u5E38\u5728\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u521B\u5EFA\u5E76\u76F8\u4E92\u9694\u79BB\u3002\u56E0\u6B64 Wasm \u7A0B\u5E8F\u5C06\u590D\u5236\u5230 Envoy \u6240\u521B\u5EFA\u7684\u7EBF\u7A0B\u91CC\uFF0C\u5E76\u5728\u8FD9\u4E9B\u865A\u62DF\u673A\u4E0A\u52A0\u8F7D\u5E76\u6267\u884C\u3002
\u63D2\u4EF6\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\u7684\u65B9\u5F0F\u6765\u6269\u5C55\u548C\u81EA\u5B9A\u4E49 Envoy \u7684\u884C\u4E3A\u3002Proxy-Wasm \u89C4\u8303\u5141\u8BB8\u5728\u6BCF\u4E2A VM \u4E2D\u914D\u7F6E\u591A\u4E2A\u63D2\u4EF6\u3002\u56E0\u6B64\u4E00\u4E2A VM \u53EF\u4EE5\u88AB\u591A\u4E2A\u63D2\u4EF6\u5171\u540C\u4F7F\u7528\u3002Envoy \u4E2D\u6709\u4E09\u79CD\u7C7B\u578B\u63D2\u4EF6: <code dir="auto">Http Filter</code>\u3001<code dir="auto">Network Filter</code> \u548C <code dir="auto">Wasm Service</code>\u3002</p>
<ul>
<li><code dir="auto">Http Filter</code> \u662F\u4E00\u79CD\u5904\u7406 Http \u534F\u8BAE\u7684\u63D2\u4EF6\uFF0C\u4F8B\u5982\u64CD\u4F5C Http \u8BF7\u6C42\u5934\u3001\u6B63\u6587\u7B49\u3002</li>
<li><code dir="auto">Network Filter</code> \u662F\u4E00\u79CD\u5904\u7406 Tcp \u534F\u8BAE\u7684\u63D2\u4EF6\uFF0C\u4F8B\u5982\u64CD\u4F5C Tcp \u6570\u636E\u5E27\u3001\u8FDE\u63A5\u5EFA\u7ACB\u7B49\u3002</li>
<li><code dir="auto">Wasm Service</code> \u662F\u5728\u5355\u4F8B VM \u4E2D\u8FD0\u884C\u7684\u63D2\u4EF6\u7C7B\u578B\uFF08\u5373\u5728 Envoy \u4E3B\u7EBF\u7A0B\u4E2D\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF09\u3002\u5B83\u4E3B\u8981\u7528\u4E8E\u6267\u884C\u4E0E <code dir="auto">Network Filter</code> \u6216 <code dir="auto">Http Filter</code> \u5E76\u884C\u7684\u4E00\u4E9B\u989D\u5916\u5DE5\u4F5C\uFF0C\u5982\u805A\u5408\u6307\u6807\u3001\u65E5\u5FD7\u7B49\u3002\u8FD9\u6837\u7684\u5355\u4F8B VM \u672C\u8EAB\u4E5F\u88AB\u79F0\u4E3A <code dir="auto">Wasm Service</code>\u3002</li>
</ul>
<p>\u5176\u67B6\u6784\u5982\u4E0B\u56FE\uFF08\u56FE\u7247\u6765\u6E90 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm Go SDK</a>\uFF09\uFF1A
<img src="https://img.alicdn.com/imgextra/i4/O1CN018UJzEX1YlqnAmBV4u_!!6000000003100-0-tps-2321-1190.jpg" alt="img" referrerpolicy="no-referrer"></p>
<h3 id="21-envoy-\u914D\u7F6E">2.1 Envoy \u914D\u7F6E</h3>
<p>\u6240\u6709\u7C7B\u578B\u63D2\u4EF6\u7684\u914D\u7F6E\u90FD\u5305\u542B <code dir="auto">vm_config</code> \u7528\u4E8E\u914D\u7F6E Wasm VM\uFF0C \u548C <code dir="auto">configuration</code> \u7528\u4E8E\u914D\u7F6E\u63D2\u4EF6\u5B9E\u4F8B\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">vm_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"envoy.wasm.runtime.v8"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"my-vm-env": "dev"}'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"example.wasm"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"my-plugin-config": "bar"}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vm_config:\x7F  vm_id: &#x22;foo&#x22;\x7F  runtime: &#x22;envoy.wasm.runtime.v8&#x22;\x7F  configuration:\x7F    &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F    value: &#x27;{&#x22;my-vm-env&#x22;: &#x22;dev&#x22;}&#x27;\x7F  code:\x7F    local:\x7F      filename: &#x22;example.wasm&#x22;\x7Fconfiguration:\x7F  &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F  value: &#x27;{&#x22;my-plugin-config&#x22;: &#x22;bar&#x22;}&#x27;"><div></div></button></div></figure></div>
<p>\u914D\u7F6E\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">vm_config</code></td><td>\u914D\u7F6E Wasm VM</td></tr><tr><td><code dir="auto">vm_config.vm_id</code></td><td>\u7528\u4E8E\u8DE8 VM \u901A\u4FE1\u7684\u8BED\u4E49\u9694\u79BB\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003 \u8DE8 VM \u901A\u4FE1 \u90E8\u5206\u3002</td></tr><tr><td><code dir="auto">vm_config.runtime</code></td><td>\u6307\u5B9A Wasm \u8FD0\u884C\u65F6\u7C7B\u578B\u3002\u9ED8\u8BA4\u4E3A envoy.wasm.runtime.v8\u3002</td></tr><tr><td><code dir="auto">vm_config.configuration</code></td><td>\u7528\u4E8E\u8BBE\u7F6E VM \u7684\u914D\u7F6E\u6570\u636E</td></tr><tr><td><code dir="auto">vm_config.code</code></td><td>Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u4F4D\u7F6E</td></tr><tr><td><code dir="auto">configuration</code></td><td>\u5BF9\u5E94\u4E8E\u6BCF\u4E2A\u63D2\u4EF6\u5B9E\u4F8B\u914D\u7F6E\uFF08\u5728\u4E0B\u9762\u4ECB\u7ECD\u7684 PluginContext\uFF09\u3002</td></tr></tbody></table>
<blockquote>
<p>\u5B8C\u5168\u76F8\u540C\u7684 vm_config \u914D\u7F6E\u7684\u591A\u4E2A\u63D2\u4EF6\u5B83\u4EEC\u4E4B\u95F4\u5171\u4EAB\u4E00\u4E2A Wasm VM\uFF0C\u5355\u4E2A Wasm VM \u7528\u4E8E\u591A\u4E2A Http Filter \u6216 Network Filter\uFF0C\u53EF\u4EE5\u63D0\u5347\u5185\u5B58/CPU \u8D44\u6E90\u6548\u7387\u3001\u964D\u4F4E\u542F\u52A8\u5EF6\u8FDF\u3002
\u5B8C\u6574\u7684 Envoy API \u914D\u7F6E\u53EF\u4EE5 <a href="https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/wasm/v3/wasm.proto#envoy-v3-api-msg-extensions-wasm-v3-pluginconfig" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u53C2\u8003 Envoy \u6587\u6863</a>\u3002</p>
</blockquote>
<p>Envoy Wasm \u8FD0\u884C\u65F6\u76EE\u524D\u6709\u4EE5\u4E0B\u51E0\u79CD\u9009\u62E9:</p>
<ul>
<li>envoy.wasm.runtime.null\uFF1A\u8FD9\u8868\u793A\u4E00\u4E2A\u7A7A\u7684\u6C99\u76D2\uFF08null sandbox\uFF09\u73AF\u5883\uFF0CWasm \u6A21\u5757\u5FC5\u987B\u88AB\u7F16\u8BD1\u5E76\u94FE\u63A5\u5230 Envoy \u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u3002\u8FD9\u79CD\u65B9\u5F0F\u9002\u7528\u4E8E\u90A3\u4E9B\u9700\u8981\u5C06 Wasm \u6A21\u5757\u4E0E Envoy \u4E8C\u8FDB\u5236\u6587\u4EF6\u4E00\u8D77\u5206\u53D1\u7684\u90E8\u7F72\u573A\u666F\u3002</li>
<li>envoy.wasm.runtime.v8: \u57FA\u4E8E V8 JavaScript \u5F15\u64CE\u7684\u8FD0\u884C\u65F6\u3002</li>
<li>envoy.wasm.runtime.wamr: WAMR (WebAssembly Micro Runtime) \u8FD0\u884C\u65F6\u3002</li>
<li>envoy.wasm.runtime.wasmtime:  Wasmtime \u8FD0\u884C\u65F6\u3002</li>
</ul>
<p>\u4E0D\u540C\u7684\u8FD0\u884C\u65F6\u6709\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF0C\u6BD4\u5982 <a href="https://v8.dev/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">V8</a> \u6027\u80FD\u8F83\u597D\u4F46\u5BB9\u5668\u4F53\u79EF\u8F83\u5927,<a href="https://github.com/bytecodealliance/wasm-micro-runtime" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WAMR</a> \u548C <a href="https://wasmtime.dev/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">wasmtime</a> \u5219\u76F8\u5BF9\u8F7B\u91CF\u3002</p>
<blockquote>
<p>[\u5F85\u8865\u5145\uFF1F] envoy v8 runtime \u5982\u4F55\u52A0\u8F7D wasm \u548C \u5982\u4F55\u548C envoy \u4EA4\u4E92\u539F\u7406\u3002</p>
</blockquote>
<h3 id="22-http-filter-\u914D\u7F6E">2.2 Http Filter \u914D\u7F6E</h3>
<p>Http Filter \u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u4E3A <code dir="auto">envoy.filter.http.wasm</code>\uFF0CHttp Filter \u63D2\u4EF6\u53EF\u4EE5\u5904\u7406 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002 \u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/udpa.type.v1.TypedStruct</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type_url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">"header": "x-wasm-header",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">"value": "demo-wasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"envoy.wasm.runtime.v8"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"./examples/http_headers/main.wasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.router.v3.Router</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_filters:\x7F  - name: envoy.filters.http.wasm\x7F    typed_config:\x7F      &#x22;@type&#x22;: type.googleapis.com/udpa.type.v1.TypedStruct\x7F      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F      value:\x7F        config:\x7F          configuration:\x7F            &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F            value: |\x7F              {\x7F                &#x22;header&#x22;: &#x22;x-wasm-header&#x22;,\x7F                &#x22;value&#x22;: &#x22;demo-wasm&#x22;\x7F              }\x7F          vm_config:\x7F            runtime: &#x22;envoy.wasm.runtime.v8&#x22;\x7F            code:\x7F              local:\x7F                filename: &#x22;./examples/http_headers/main.wasm&#x22;\x7F  - name: envoy.filters.http.router\x7F    typed_config:\x7F      &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.http.router.v3.Router"><div></div></button></div></figure></div>
<p>\u8FD9\u65F6 Envoy \u4F1A\u5728\u6BCF\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2A Wasm \u865A\u62DF\u673A\uFF0C\u8BE5\u865A\u62DF\u673A\u5C06\u4E13\u95E8\u7528\u4E8E\u5904\u7406\u8BE5\u7EBF\u7A0B\u4E0A\u7684 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002\u6BCF\u4E2A\u865A\u62DF\u673A\u90FD\u4F1A\u52A0\u8F7D\u548C\u6267\u884C WebAssembly \u4EE3\u7801\uFF0C\u5141\u8BB8\u5BF9 HTTP \u6D41\u91CF\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u5982\u4FEE\u6539\u5934\u4FE1\u606F\u3001\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u4F53\u7B49\u3002
\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/http_headers/envoy.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy.yaml</a> \u3002</p>
<h3 id="23-network-filter-\u914D\u7F6E">2.3 Network Filter \u914D\u7F6E</h3>
<p><code dir="auto">Network Filter</code> \u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u4E3A <code dir="auto">envoy.filters.network.wasm</code>\uFF0C<code dir="auto">Network Filter</code> \u63D2\u4EF6\u53EF\u4EE5\u5904\u7406 TCP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002 \u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">...</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#99A0A6"># ... plugin config follows</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.tcp_proxy</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="filter_chains:\x7F- filters:\x7F    - name: envoy.filters.network.wasm\x7F      typed_config:\x7F        &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm\x7F        config:\x7F          vm_config: { ... }\x7F          # ... plugin config follows\x7F    - name: envoy.tcp_proxy"><div></div></button></div></figure></div>
<p>\u8FD9\u65F6 Envoy \u4F1A\u5728\u6BCF\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2A Wasm \u865A\u62DF\u673A\uFF0C\u8BE5\u865A\u62DF\u673A\u5C06\u4E13\u95E8\u7528\u4E8E\u5904\u7406\u8BE5\u7EBF\u7A0B\u4E0A\u7684 TCP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002\u6BCF\u4E2A\u865A\u62DF\u673A\u90FD\u4F1A\u52A0\u8F7D\u548C\u6267\u884C WebAssembly \u4EE3\u7801\uFF0C\u5141\u8BB8\u5BF9 TCP \u6D41\u91CF\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\u7B49\u3002
\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/network/envoy.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy.yaml</a> \u3002</p>
<h3 id="24-wasm-service-\u914D\u7F6E">2.4 Wasm Service \u914D\u7F6E</h3>
<p><code dir="auto">Wasm Service</code> \u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u4E3A <code dir="auto">envoy.bootstrap.wasm</code>\u3002\u63D2\u4EF6\u5728 Envoy \u542F\u52A8\u65F6\u52A0\u8F7D\u7684\uFF0C\u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">bootstrap_extensions</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.bootstrap.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.wasm.v3.WasmService</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">singleton</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">...</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># ... plugin config follows</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="bootstrap_extensions:\x7F- name: envoy.bootstrap.wasm\x7F  typed_config:\x7F    &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.wasm.v3.WasmService\x7F    singleton: true\x7F    config:\x7F      vm_config: { ... }\x7F      # ... plugin config follows"><div></div></button></div></figure></div>
<p><code dir="auto">singleton</code> \u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u751F\u6210\u865A\u62DF\u673A\uFF08VM\uFF09\u662F\u5355\u4F8B\uFF0C\u5E76\u4E14\u8FD0\u884C\u5728 Envoy \u7684\u4E3B\u7EBF\u7A0B\u4E0A\uFF0C\u56E0\u6B64\u5B83\u4E0D\u4F1A\u963B\u585E\u4EFB\u4F55\u5DE5\u4F5C\u7EBF\u7A0B\u3002</p>
<p>\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/envoy.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy.yaml</a> \u3002</p>
<h3 id="25-\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A-vm">2.5 \u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A VM</h3>
<p>\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A VM\uFF0C\u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">static_resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http-header-operation</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18000</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#99A0A6"># ....</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http-header-operation"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">vm_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"my-vm-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"envoy.wasm.runtime.v8"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"my-vm-configuration"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"all-in-one.wasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http-body-operation</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18001</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#99A0A6"># ....</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http-body-operation"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">vm_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"my-vm-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"envoy.wasm.runtime.v8"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"my-vm-configuration"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                              </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"all-in-one.wasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tcp-total-data-size-counter</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18002</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"tcp-total-data-size-counter"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">vm_id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"my-vm-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"envoy.wasm.runtime.v8"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/google.protobuf.StringValue</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"my-vm-configuration"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"all-in-one.wasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.tcp_proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># ...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="static_resources:\x7F  listeners:\x7F    - name: http-header-operation\x7F      address:\x7F        socket_address:\x7F          address: 0.0.0.0\x7F          port_value: 18000\x7F      filter_chains:\x7F        - filters:\x7F            - name: envoy.http_connection_manager\x7F              typed_config:\x7F                # ....\x7F                http_filters:\x7F                  - name: envoy.filters.http.wasm\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F                      config:\x7F                        configuration:\x7F                          &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F                          value: &#x22;http-header-operation&#x22;\x7F                        vm_config:\x7F                          vm_id: &#x22;my-vm-id&#x22;\x7F                          runtime: &#x22;envoy.wasm.runtime.v8&#x22;\x7F                          configuration:\x7F                            &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F                            value: &#x22;my-vm-configuration&#x22;\x7F                          code:\x7F                            local:\x7F                              filename: &#x22;all-in-one.wasm&#x22;\x7F                  - name: envoy.filters.http.router\x7F\x7F    - name: http-body-operation\x7F      address:\x7F        socket_address:\x7F          address: 0.0.0.0\x7F          port_value: 18001\x7F      filter_chains:\x7F        - filters:\x7F            - name: envoy.http_connection_manager\x7F              typed_config:\x7F                # ....\x7F                http_filters:\x7F                  - name: envoy.filters.http.wasm\x7F                    typed_config:\x7F                      &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F                      config:\x7F                        configuration:\x7F                          &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F                          value: &#x22;http-body-operation&#x22;\x7F                        vm_config:\x7F                          vm_id: &#x22;my-vm-id&#x22;\x7F                          runtime: &#x22;envoy.wasm.runtime.v8&#x22;\x7F                          configuration:\x7F                            &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F                            value: &#x22;my-vm-configuration&#x22;\x7F                          code:\x7F                            local:\x7F                              filename: &#x22;all-in-one.wasm&#x22;\x7F                  - name: envoy.filters.http.router\x7F\x7F    - name: tcp-total-data-size-counter\x7F      address:\x7F        socket_address:\x7F          address: 0.0.0.0\x7F          port_value: 18002\x7F      filter_chains:\x7F        - filters:\x7F            - name: envoy.filters.network.wasm\x7F              typed_config:\x7F                &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm\x7F                config:\x7F                  configuration:\x7F                    &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F                    value: &#x22;tcp-total-data-size-counter&#x22;\x7F                    vm_config:\x7F                      vm_id: &#x22;my-vm-id&#x22;\x7F                      runtime: &#x22;envoy.wasm.runtime.v8&#x22;\x7F                      configuration:\x7F                        &#x22;@type&#x22;: type.googleapis.com/google.protobuf.StringValue\x7F                        value: &#x22;my-vm-configuration&#x22;\x7F                      code:\x7F                        local:\x7F                          filename: &#x22;all-in-one.wasm&#x22;\x7F            - name: envoy.tcp_proxy\x7F              typed_config: # ..."><div></div></button></div></figure></div>
<p>\u5728 <code dir="auto">18000</code> \u548C <code dir="auto">18001</code> \u76D1\u542C\u5668\u4E0A\u7684 Http \u8FC7\u6EE4\u5668\u94FE\u4EE5\u53CA <code dir="auto">18002</code> \u4E0A\u7684\u7F51\u7EDC\u8FC7\u6EE4\u5668\u94FE\u4E2D\uFF0Cvm_config \u5B57\u6BB5\u90FD\u662F\u76F8\u540C\u7684\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CEnvoy \u4E2D\u7684\u591A\u4E2A\u63D2\u4EF6\u5C06\u4F7F\u7528\u540C\u4E00\u4E2A Wasm \u865A\u62DF\u673A\u3002 \u4E3A\u4E86\u91CD\u7528\u76F8\u540C\u7684 VM\uFF0C\u6240\u6709\u7684 vm_config.vm_id\u3001vm_config.runtime\u3001vm_config.configuration \u548C vm_config.code \u5FC5\u987B\u76F8\u540C\u3002</p>
<p>\u901A\u8FC7\u8FD9\u79CD\u914D\u7F6E\u65B9\u5F0F\u5141\u8BB8\u4E3A\u4E0D\u540C\u7684\u8FC7\u6EE4\u5668\u91CD\u7528\u540C\u4E00\u4E2A Wasm \u865A\u62DF\u673A\uFF0C\u901A\u8FC7\u4E3A\u6BCF\u4E2A <code dir="auto">PluginContext</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u9694\u79BB\u7684\u73AF\u5883\uFF0C\u4F7F\u5F97\u63D2\u4EF6\u80FD\u591F\u72EC\u7ACB\u8FD0\u884C\uFF0C\u540C\u65F6\u5171\u4EAB\u540C\u4E00\u4E2A\u865A\u62DF\u673A\u7684\u6267\u884C\u73AF\u5883\uFF0C\u865A\u62DF\u673A\u53EA\u9700\u8981\u52A0\u8F7D\u548C\u521D\u59CB\u5316\u4E00\u6B21\u5373\u53EF\u4E3A\u591A\u4E2A\u63D2\u4EF6\u670D\u52A1\uFF0C\u8FD9\u4E0D\u4EC5\u53EF\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u8FD8\u53EF\u4EE5\u964D\u4F4E\u542F\u52A8\u65F6\u7684\u5EF6\u8FDF\u3002</p>
<p>\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/envoy.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">envoy.yaml</a> \u3002</p>
<h2 id="3-proxy-wasm-go-sdk-api">3 Proxy-Wasm Go SDK API</h2>
<p>\u4E0A\u9762\u4ECB\u7ECD\u63D2\u4EF6\u6982\u5FF5\u548C\u63D2\u4EF6\u914D\u7F6E\uFF0C\u4E0B\u9762\u5F00\u59CB\u6DF1\u5165\u63A2\u8BA8 Proxy-Wasm Go SDK \u7684 API\u3002</p>
<h3 id="31-contexts">3.1 Contexts</h3>
<p>\u4E0A\u4E0B\u6587\uFF08Contexts\uFF09 \u662F Proxy-Wasm Go SDK \u4E2D\u7684\u63A5\u53E3\u96C6\u5408\uFF0C\u5B83\u4EEC\u5728  <a href="https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/proxywasm/types" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">types</a>  \u5305\u4E2D\u5B9A\u4E49\u3002
\u6709\u56DB\u79CD\u7C7B\u578B\u7684\u4E0A\u4E0B\u6587\uFF1AVMContext\u3001PluginContext\u3001TcpContext \u548C HttpContext\u3002\u5B83\u4EEC\u7684\u5173\u7CFB\u5982\u4E0B\u56FE\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                    </span></span><span style="--0:#e1e4e8">Wasm Virtual Machine</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                      </span></span><span style="--0:#e1e4e8">(.vm_config.code)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502  Your program (.vm_config.code)                TcpContext      \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502          \u2502                                  \u2571 (Tcp stream)     \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502          \u2502 1: 1                            \u2571                   \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502          \u2502         1: N                   \u2571 1: N               \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502      VMContext  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  PluginContext                      \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502                                (Plugin)   \u2572 1: N               \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502                                            \u2572                   \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502                                             \u2572  HttpContext     \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2502                                               (Http stream)    \u2502</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="                    Wasm Virtual Machine\x7F                      (.vm_config.code)\x7F\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\x7F\u2502  Your program (.vm_config.code)                TcpContext      \u2502\x7F\u2502          \u2502                                  \u2571 (Tcp stream)     \u2502\x7F\u2502          \u2502 1: 1                            \u2571                   \u2502\x7F\u2502          \u2502         1: N                   \u2571 1: N               \u2502\x7F\u2502      VMContext  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  PluginContext                      \u2502\x7F\u2502                                (Plugin)   \u2572 1: N               \u2502\x7F\u2502                                            \u2572                   \u2502\x7F\u2502                                             \u2572  HttpContext     \u2502\x7F\u2502                                               (Http stream)    \u2502\x7F\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"><div></div></button></div></figure></div>
<ol>
<li>VMContext \u5BF9\u5E94\u4E8E\u6BCF\u4E2A .vm_config.code\uFF0C\u6BCF\u4E2A VM \u4E2D\u53EA\u5B58\u5728\u4E00\u4E2A VMContext\u3002</li>
<li>VMContext \u662F PluginContexts \u7684\u7236\u4E0A\u4E0B\u6587\uFF0C\u8D1F\u8D23\u521B\u5EFA PluginContext\u3002</li>
<li>PluginContext \u5BF9\u5E94\u4E8E\u4E00\u4E2A Plugin \u5B9E\u4F8B\u3002\u4E00\u4E2A PluginContext \u5BF9\u5E94\u4E8E Http Filter\u3001Network Filter\u3001Wasm Service \u7684 configuration \u5B57\u6BB5\u914D\u7F6E\u3002</li>
<li>PluginContext \u662F TcpContext \u548C HttpContext \u7684\u7236\u4E0A\u4E0B\u6587\uFF0C\u5E76\u4E14\u8D1F\u8D23\u4E3A \u5904\u7406 Http \u6D41\u7684Http Filter \u6216 \u5904\u7406 Tcp \u6D41\u7684 Network Filter \u521B\u5EFA\u4E0A\u4E0B\u6587\u3002</li>
<li>TcpContext \u8D1F\u8D23\u5904\u7406\u6BCF\u4E2A Tcp \u6D41\u3002</li>
<li>HttpContext \u8D1F\u8D23\u5904\u7406\u6BCF\u4E2A Http \u6D41\u3002</li>
</ol>
<p>\u56E0\u6B64\uFF0C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u8981\u5B9E\u73B0 <code dir="auto">VMContext</code> \u548C <code dir="auto">PluginContext</code>\u3002 \u540C\u65F6 <code dir="auto">Http Filter</code> \u6216 <code dir="auto">Network Filter</code>\uFF0C\u8981\u5206\u522B\u5B9E\u73B0 <code dir="auto">HttpContext</code> \u6216 <code dir="auto">TcpContext</code>\u3002</p>
<p>\u9996\u5148 VMContext \u5B9A\u4E49\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">VMContext</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">interface</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// OnVMStart \u5728 VM \u521B\u5EFA\u548C\u8C03\u7528 main \u51FD\u6570\u540E\u88AB\u8C03\u7528\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5728\u6B64\u8C03\u7528\u671F\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetVMConfiguration \u83B7\u53D6\u5728 vm_config.configuration \u8BBE\u7F6E\u7684\u914D\u7F6E\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u8FD9\u4E3B\u8981\u7528\u4E8E\u6267\u884C Wasm VM \u8303\u56F4\u5185\u7684\u521D\u59CB\u5316\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">OnVMStart</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">vmConfigurationSize</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">int</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">OnVMStartStatus</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// NewPluginContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A\u63D2\u4EF6\u914D\u7F6E\u521B\u5EFA PluginContext\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">NewPluginContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">contextID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">PluginContext</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type VMContext interface {\x7F  // OnVMStart \u5728 VM \u521B\u5EFA\u548C\u8C03\u7528 main \u51FD\u6570\u540E\u88AB\u8C03\u7528\u3002\x7F  // \u5728\u6B64\u8C03\u7528\u671F\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetVMConfiguration \u83B7\u53D6\u5728 vm_config.configuration \u8BBE\u7F6E\u7684\u914D\u7F6E\u3002\x7F  // \u8FD9\u4E3B\u8981\u7528\u4E8E\u6267\u884C Wasm VM \u8303\u56F4\u5185\u7684\u521D\u59CB\u5316\u3002\x7F  OnVMStart(vmConfigurationSize int) OnVMStartStatus\x7F\x7F  // NewPluginContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A\u63D2\u4EF6\u914D\u7F6E\u521B\u5EFA PluginContext\u3002\x7F  NewPluginContext(contextID uint32) PluginContext\x7F}"><div></div></button></div></figure></div>
<p>VMContext \u8D1F\u8D23\u901A\u8FC7 NewPluginContext \u65B9\u6CD5\u521B\u5EFA PluginContext\u3002\u540C\u65F6\u5728 VM \u542F\u52A8\u9636\u6BB5\u8C03\u7528 OnVMStart\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 <code dir="auto">GetVMConfiguration</code> hostcall API \u83B7\u53D6 vm_config.configuration \u7684\u503C\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u8FDB\u884C VM \u8303\u56F4\u5185\u7684\u63D2\u4EF6\u521D\u59CB\u5316\u5E76\u63A7\u5236 VMContext \u7684\u884C\u4E3A\u3002</p>
<p>PluginContext\uFF0C\u5B9A\u4E49\u5982\u4E0B\uFF08\u7701\u7565\u4E86\u4E00\u4E9B\u65B9\u6CD5\uFF09\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">PluginContext</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">interface</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// OnPluginStart \u5728\u6240\u6709\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E0A\u8C03\u7528\uFF08\u5982\u679C\u5728\u8FD9\u662F VM \u4E0A\u4E0B\u6587\uFF0C\u5219\u5728 OnVmStart \u4E4B\u540E\uFF09\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5728\u6B64\u8C03\u7528\u671F\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetPluginConfiguration \u83B7\u53D6 envoy.yaml \u4E2D config.configuration \u8BBE\u7F6E\u7684\u914D\u7F6E\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">OnPluginStart</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">pluginConfigurationSize</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">int</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">OnPluginStartStatus</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u4EE5\u4E0B\u51FD\u6570\u7528\u4E8E\u5728\u6D41\u4E0A\u521B\u5EFA\u4E0A\u4E0B\u6587\uFF0C</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// *\u5FC5\u987B* \u5B9E\u73B0\u5B83\u4EEC\u4E2D\u7684\u4EFB\u4E00\u4E2A\uFF0C\u5BF9\u5E94\u4E8E\u6269\u5C55\u70B9\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u914D\u7F6E\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u5728 Http \u8FC7\u6EE4\u5668\u4E0A\u8FD0\u884C\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0 NewHttpContext\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5BF9 Tcp \u8FC7\u6EE4\u5668\u4E5F\u662F\u5982\u6B64\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// NewTcpContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A Tcp \u6D41\u521B\u5EFA TcpContext\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">NewTcpContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">contextID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">TcpContext</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// NewHttpContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A Http \u6D41\u521B\u5EFA HttpContext\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">NewHttpContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">contextID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">HttpContext</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type PluginContext interface {\x7F  // OnPluginStart \u5728\u6240\u6709\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E0A\u8C03\u7528\uFF08\u5982\u679C\u5728\u8FD9\u662F VM \u4E0A\u4E0B\u6587\uFF0C\u5219\u5728 OnVmStart \u4E4B\u540E\uFF09\u3002\x7F  // \u5728\u6B64\u8C03\u7528\u671F\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetPluginConfiguration \u83B7\u53D6 envoy.yaml \u4E2D config.configuration \u8BBE\u7F6E\u7684\u914D\u7F6E\u3002\x7F  OnPluginStart(pluginConfigurationSize int) OnPluginStartStatus\x7F\x7F  // \u4EE5\u4E0B\u51FD\u6570\u7528\u4E8E\u5728\u6D41\u4E0A\u521B\u5EFA\u4E0A\u4E0B\u6587\uFF0C\x7F  // *\u5FC5\u987B* \u5B9E\u73B0\u5B83\u4EEC\u4E2D\u7684\u4EFB\u4E00\u4E2A\uFF0C\u5BF9\u5E94\u4E8E\u6269\u5C55\u70B9\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u914D\u7F6E\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u5728 Http \u8FC7\u6EE4\u5668\u4E0A\u8FD0\u884C\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0 NewHttpContext\u3002\x7F  // \u5BF9 Tcp \u8FC7\u6EE4\u5668\u4E5F\u662F\u5982\u6B64\u3002\x7F  //\x7F  // NewTcpContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A Tcp \u6D41\u521B\u5EFA TcpContext\u3002\x7F  NewTcpContext(contextID uint32) TcpContext\x7F  // NewHttpContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A Http \u6D41\u521B\u5EFA HttpContext\u3002\x7F  NewHttpContext(contextID uint32) HttpContext\x7F}"><div></div></button></div></figure></div>
<p><code dir="auto">PluginContext</code> \u6709 <code dir="auto">OnPluginStart</code> \u65B9\u6CD5\uFF0C\u521B\u5EFA\u63D2\u4EF6\u65F6\u8C03\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetPluginConfiguration hostcall API \u83B7\u53D6 plugin config \u4E2D configuration \u5B57\u6BB5\u7684\u503C\u3002
\u53E6\u5916 <code dir="auto">PluginContext</code> \u6709 <code dir="auto">NewTcpContext</code> \u548C <code dir="auto">NewHttpContext</code> \u65B9\u6CD5\uFF0C\u4E3A\u6BCF\u4E2A Http \u6216 Tcp \u6D41\u521B\u5EFA\u4E0A\u4E0B\u6587\u65F6\u8C03\u7528\u3002 \u5173\u4E8E HttpContext \u548C TcpContext \u7684\u8BE6\u7EC6\u5B9A\u4E49\u8BF7\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/types/context.go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">context.go</a> \u3002</p>
<h3 id="32-hostcall-api">3.2 Hostcall API</h3>
<p>Hostcall API \u662F\u6307\u5728 Wasm \u6A21\u5757\u5185\u8C03\u7528 Envoy \u63D0\u4F9B\u7684\u529F\u80FD\u3002\u8FD9\u4E9B\u529F\u80FD\u901A\u5E38\u7528\u4E8E\u83B7\u53D6\u5916\u90E8\u6570\u636E\u6216\u4E0E Envoy \u4EA4\u4E92\u3002\u5728\u5F00\u53D1 Wasm \u63D2\u4EF6\u65F6\uFF0C\u9700\u8981\u8BBF\u95EE\u7F51\u7EDC\u8BF7\u6C42\u7684\u5143\u6570\u636E\u3001\u4FEE\u6539\u8BF7\u6C42\u6216\u54CD\u5E94\u5934\u3001\u8BB0\u5F55\u65E5\u5FD7\u7B49\uFF0C\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u901A\u8FC7 Hostcall API \u6765\u5B9E\u73B0\u3002
Hostcall API \u5728 proxywasm \u5305\u7684 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/hostcall.go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">hostcall.go</a> \u4E2D\u5B9A\u4E49\u3002
Hostcall API \u5305\u62EC\u914D\u7F6E\u548C\u521D\u59CB\u5316\u3001\u5B9A\u65F6\u5668\u8BBE\u7F6E\u3001\u4E0A\u4E0B\u6587\u7BA1\u7406\u3001\u63D2\u4EF6\u5B8C\u6210\u3001\u5171\u4EAB\u961F\u5217\u7BA1\u7406\u3001Redis \u64CD\u4F5C\u3001Http \u8C03\u7528\u3001TCP \u6D41\u64CD\u4F5C\u3001HTTP \u8BF7\u6C42/\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C\u3001\u5171\u4EAB\u6570\u636E\u64CD\u4F5C\u3001\u65E5\u5FD7\u64CD\u4F5C\u3001\u5C5E\u6027\u548C\u5143\u6570\u636E\u64CD\u4F5C\u3001\u6307\u6807\u64CD\u4F5C\u3002\u5177\u4F53\u51FD\u6570\u540D\u79F0\u548C\u63CF\u8FF0\u5982\u4E0B\uFF1A</p>
<h4 id="1\u914D\u7F6E\u548C\u521D\u59CB\u5316">1.\u914D\u7F6E\u548C\u521D\u59CB\u5316</h4>

















<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">GetVMConfiguration</code></td><td>\u83B7\u53D6\u5728 <code dir="auto">vm_config.configuration</code> \u5B57\u6BB5\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.PluginContext.OnVMStart</code> \u8C03\u7528\u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetPluginConfiguration</code></td><td>\u83B7\u53D6\u5728 <code dir="auto">config.configuration</code> \u5B57\u6BB5\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.PluginContext.OnPluginStart</code> \u8C03\u7528\u671F\u95F4\u53EF\u7528\u3002</td></tr></tbody></table>
<h4 id="2\u5B9A\u65F6\u5668\u8BBE\u7F6E">2.\u5B9A\u65F6\u5668\u8BBE\u7F6E</h4>













<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">SetTickPeriodMilliSeconds</code></td><td>\u8BBE\u7F6E <code dir="auto">types.PluginContext.OnTick</code> \u8C03\u7528\u7684tick\u95F4\u9694\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 <code dir="auto">types.PluginContext</code> \u6709\u6548\u3002</td></tr></tbody></table>
<h4 id="3\u4E0A\u4E0B\u6587\u7BA1\u7406">3.\u4E0A\u4E0B\u6587\u7BA1\u7406</h4>













<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">SetEffectiveContext</code></td><td>\u8BBE\u7F6E\u6709\u6548\u4E0A\u4E0B\u6587\u4E3A <code dir="auto">context_id</code>\u3002\u901A\u5E38\u7528\u4E8E\u5728\u63A5\u6536\u5230 <code dir="auto">types.PluginContext.OnQueueReady</code> \u6216 <code dir="auto">types.PluginContext.OnTick</code> \u540E\u66F4\u6539\u4E0A\u4E0B\u6587\u3002</td></tr></tbody></table>
<h4 id="4\u63D2\u4EF6\u5B8C\u6210">4.\u63D2\u4EF6\u5B8C\u6210</h4>













<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">PluginDone</code></td><td>\u5F53 <code dir="auto">OnPluginDone</code> \u8FD4\u56DE false\uFF0C\u8868\u793A\u63D2\u4EF6\u5904\u4E8E\u5F85\u5B9A\u72B6\u6001\uFF0C\u5728\u5220\u9664\u4E4B\u524D\u5FC5\u987B\u8C03\u7528\u6B64\u51FD\u6570\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 <code dir="auto">types.PluginContext</code> \u6709\u6548\u3002</td></tr></tbody></table>
<h4 id="5\u5171\u4EAB\u961F\u5217\u7BA1\u7406">5.\u5171\u4EAB\u961F\u5217\u7BA1\u7406</h4>

























<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">RegisterSharedQueue</code></td><td>\u5728\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u5171\u4EAB\u961F\u5217\u3002</td></tr><tr><td><code dir="auto">ResolveSharedQueue</code></td><td>\u83B7\u53D6\u7ED9\u5B9A <code dir="auto">vmID</code> \u548C <code dir="auto">queueName</code> \u7684\u961F\u5217ID\u3002</td></tr><tr><td><code dir="auto">EnqueueSharedQueue</code></td><td>\u5C06\u6570\u636E\u6392\u961F\u5230\u7ED9\u5B9A\u961F\u5217ID\u7684\u5171\u4EAB\u961F\u5217\u3002</td></tr><tr><td><code dir="auto">DequeueSharedQueue</code></td><td>\u4ECE\u7ED9\u5B9A\u961F\u5217ID\u7684\u5171\u4EAB\u961F\u5217\u4E2D\u51FA\u961F\u6570\u636E\u3002</td></tr></tbody></table>
<h4 id="6redis-\u64CD\u4F5C">6.Redis \u64CD\u4F5C</h4>





















<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">RedisInit</code></td><td>\u521D\u59CB\u5316Redis\u8FDE\u63A5\u3002</td></tr><tr><td><code dir="auto">DispatchRedisCall</code></td><td>\u53D1\u9001Redis\u8C03\u7528\u3002</td></tr><tr><td><code dir="auto">GetRedisCallResponse</code></td><td>\u83B7\u53D6Redis\u8C03\u7528\u54CD\u5E94\u3002</td></tr></tbody></table>
<h4 id="7http-\u8C03\u7528">7.HTTP \u8C03\u7528</h4>

























<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">DispatchHttpCall</code></td><td>\u5411\u8FDC\u7A0B\u96C6\u7FA4\u5206\u6D3EHTTP\u8C03\u7528\u3002\u6B64\u529F\u80FD\u53EF\u88AB\u6240\u6709\u4E0A\u4E0B\u6587\u4F7F\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpCallResponseHeaders</code></td><td>\u7528\u4E8E\u68C0\u7D22\u7531\u8FDC\u7A0B\u96C6\u7FA4\u8FD4\u56DE\u7684HTTP\u54CD\u5E94\u5934\uFF0C\u6B64\u529F\u80FD\u4EC5\u5728\u4F20\u9012\u7ED9 <code dir="auto">DispatchHttpCall</code> \u7684 \u201Ccallback\u201D \u51FD\u6570\u4E2D\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpCallResponseBody</code></td><td>\u7528\u4E8E\u68C0\u7D22\u7531\u8FDC\u7A0B\u96C6\u7FA4\u8FD4\u56DE\u7684HTTP\u54CD\u5E94\u4F53\uFF0C\u6B64\u529F\u80FD\u4EC5\u5728\u4F20\u9012\u7ED9 <code dir="auto">DispatchHttpCall</code> \u7684 \u201Ccallback\u201D \u51FD\u6570\u4E2D\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpCallResponseTrailers</code></td><td>\u7528\u4E8E\u68C0\u7D22\u7531\u8FDC\u7A0B\u96C6\u7FA4\u8FD4\u56DE\u7684HTTP\u54CD\u5E94\u5C3E\u968F\u5934\uFF0C\u6B64\u529F\u80FD\u4EC5\u5728\u4F20\u9012\u7ED9 <code dir="auto">DispatchHttpCall</code> \u7684 \u201Ccallback\u201D \u51FD\u6570\u4E2D\u53EF\u7528\u3002</td></tr></tbody></table>
<h4 id="8tcp-\u6D41\u64CD\u4F5C">8.TCP \u6D41\u64CD\u4F5C</h4>





















































<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">GetDownstreamData</code></td><td>\u7528\u4E8E\u68C0\u7D22\u5728\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnDownstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AppendDownstreamData</code></td><td>\u5C06\u7ED9\u5B9A\u5B57\u8282\u8FFD\u52A0\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnDownstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">PrependDownstreamData</code></td><td>\u5C06\u7ED9\u5B9A\u5B57\u8282\u524D\u7F00\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnDownstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceDownstreamData</code></td><td>\u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnDownstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetUpstreamData</code></td><td>\u7528\u4E8E\u68C0\u7D22\u5728\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnUpstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AppendUpstreamData</code></td><td>\u5C06\u7ED9\u5B9A\u5B57\u8282\u8FFD\u52A0\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnUpstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">PrependUpstreamData</code></td><td>\u5C06\u7ED9\u5B9A\u5B57\u8282\u524D\u7F00\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnUpstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceUpstreamData</code></td><td>\u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.TcpContext.OnUpstreamData</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ContinueTcpStream</code></td><td>\u5728\u8FD4\u56DE <code dir="auto">types.Action.Pause</code> \u540E\uFF0C\u7EE7\u7EEDTCP\u8FDE\u63A5\u7684\u5904\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 <code dir="auto">types.TcpContext</code> \u6709\u6548\u3002</td></tr><tr><td><code dir="auto">CloseDownstream</code></td><td>\u5173\u95EDTcp\u4E0A\u4E0B\u6587\u4E2D\u7684\u4E0B\u6E38TCP\u8FDE\u63A5\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 <code dir="auto">types.TcpContext</code> \u6709\u6548\u3002</td></tr><tr><td><code dir="auto">CloseUpstream</code></td><td>\u5173\u95EDTcp\u4E0A\u4E0B\u6587\u4E2D\u7684\u4E0A\u6E38TCP\u8FDE\u63A5\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 <code dir="auto">types.TcpContext</code> \u6709\u6548\u3002</td></tr></tbody></table>
<h4 id="9http-\u8BF7\u6C42\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C">9.HTTP \u8BF7\u6C42/\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C</h4>





















































































































































<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">GetHttpRequestHeaders</code></td><td>\u83B7\u53D6HTTP\u8BF7\u6C42\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestHeaders</code> \u548C <code dir="auto">types.HttpContext.OnHttpStreamDone</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpRequestHeaders</code></td><td>\u7528\u7ED9\u5B9A\u7684\u5934\u66FF\u6362HTTP\u8BF7\u6C42\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestHeaders</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpRequestHeader</code></td><td>\u83B7\u53D6\u7ED9\u5B9A \u201Ckey\u201D \u7684HTTP\u8BF7\u6C42\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestHeaders</code> \u548C <code dir="auto">types.HttpContext.OnHttpStreamDone</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">RemoveHttpRequestHeader</code></td><td>\u79FB\u9664\u8BF7\u6C42\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestHeaders</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpRequestHeader</code></td><td>\u66FF\u6362\u8BF7\u6C42\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestHeaders</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AddHttpRequestHeader</code></td><td>\u5411\u8BF7\u6C42\u5934\u6DFB\u52A0\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestHeaders</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpRequestBody</code></td><td>\u83B7\u53D6\u6574\u4E2AHTTP\u8BF7\u6C42\u4F53\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestBody</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AppendHttpRequestBody</code></td><td>\u5411HTTP\u8BF7\u6C42\u4F53\u7F13\u51B2\u533A\u8FFD\u52A0\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestBody</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">PrependHttpRequestBody</code></td><td>\u5411HTTP\u8BF7\u6C42\u4F53\u7F13\u51B2\u533A\u524D\u7F00\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestBody</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpRequestBody</code></td><td>\u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362HTTP\u8BF7\u6C42\u4F53\u7F13\u51B2\u533A\u3002\u6B64\u529F\u80FD\u4EC5\u5728 <code dir="auto">types.HttpContext.OnHttpRequestBody</code> \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpRequestTrailers</code></td><td>\u83B7\u53D6HTTP\u8BF7\u6C42\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpRequestTrailers</code></td><td>\u7528\u7ED9\u5B9A\u7684\u5C3E\u968F\u5934\u66FF\u6362HTTP\u8BF7\u6C42\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpRequestTrailer</code></td><td>\u83B7\u53D6\u7ED9\u5B9A \u201Ckey\u201D \u7684HTTP\u8BF7\u6C42\u5C3E\u968F\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">RemoveHttpRequestTrailer</code></td><td>\u79FB\u9664\u8BF7\u6C42\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpRequestTrailer</code></td><td>\u66FF\u6362\u8BF7\u6C42\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AddHttpRequestTrailer</code></td><td>\u5411\u8BF7\u6C42\u5C3E\u968F\u5934\u6DFB\u52A0\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ResumeHttpRequest</code></td><td>\u7EE7\u7EED\u505C\u6B62\u7684HTTP\u8BF7\u6C42\u5904\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpResponseHeaders</code></td><td>\u83B7\u53D6HTTP\u54CD\u5E94\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpResponseHeaders</code></td><td>\u7528\u7ED9\u5B9A\u7684\u5934\u66FF\u6362HTTP\u54CD\u5E94\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpResponseHeader </code></td><td>\u83B7\u53D6\u7ED9\u5B9A \u201Ckey\u201D \u7684HTTP\u54CD\u5E94\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">RemoveHttpResponseHeader</code></td><td>\u79FB\u9664\u54CD\u5E94\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpResponseHeader</code></td><td>\u66FF\u6362\u54CD\u5E94\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AddHttpResponseHeader</code></td><td>\u5411\u54CD\u5E94\u5934\u6DFB\u52A0\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpResponseBody</code></td><td>\u83B7\u53D6\u6574\u4E2AHTTP\u54CD\u5E94\u4F53\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AppendHttpResponseBody</code></td><td>\u5411HTTP\u54CD\u5E94\u4F53\u7F13\u51B2\u533A\u8FFD\u52A0\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">PrependHttpResponseBody</code></td><td>\u5411HTTP\u54CD\u5E94\u4F53\u7F13\u51B2\u533A\u524D\u7F00\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpResponseBody</code></td><td>\u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362HTTP\u54CD\u5E94\u4F53\u7F13\u51B2\u533A\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpResponseTrailers</code></td><td>\u83B7\u53D6HTTP\u54CD\u5E94\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpResponseTrailers</code></td><td>\u7528\u7ED9\u5B9A\u7684\u5C3E\u968F\u5934\u66FF\u6362HTTP\u54CD\u5E94\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">GetHttpResponseTrailer</code></td><td>\u83B7\u53D6\u7ED9\u5B9A \u201Ckey\u201D \u7684HTTP\u54CD\u5E94\u5C3E\u968F\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">RemoveHttpResponseTrailer</code></td><td>\u79FB\u9664\u54CD\u5E94\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ReplaceHttpResponseTrailer</code></td><td>\u66FF\u6362\u54CD\u5E94\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">AddHttpResponseTrailer</code></td><td>\u5411\u54CD\u5E94\u5C3E\u968F\u5934\u6DFB\u52A0\u7ED9\u5B9A \u201Ckey\u201D \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">ResumeHttpResponse</code></td><td>\u7EE7\u7EED\u505C\u6B62\u7684HTTP\u54CD\u5E94\u5904\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext \u671F\u95F4\u53EF\u7528\u3002</td></tr><tr><td><code dir="auto">SendHttpResponse</code></td><td>\u5411\u4E0B\u6E38\u53D1\u9001HTTP\u54CD\u5E94\u3002\u8C03\u7528\u6B64\u51FD\u6570\u540E\uFF0C\u60A8\u5FC5\u987B\u8FD4\u56DE types.Action.Pause \u4EE5\u505C\u6B62\u521D\u59CBHTTP\u8BF7\u6C42/\u54CD\u5E94\u7684\u8FDB\u4E00\u6B65\u5904\u7406\u3002</td></tr></tbody></table>
<h4 id="10\u5171\u4EAB\u6570\u636E\u64CD\u4F5C">10.\u5171\u4EAB\u6570\u636E\u64CD\u4F5C</h4>

















<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">GetSharedData</code></td><td>\u83B7\u53D6\u5171\u4EAB\u6570\u636E\u3002</td></tr><tr><td><code dir="auto">SetSharedData</code></td><td>\u8BBE\u7F6E\u5171\u4EAB\u6570\u636E\u3002</td></tr></tbody></table>
<h4 id="11\u65E5\u5FD7\u64CD\u4F5C">11.\u65E5\u5FD7\u64CD\u4F5C</h4>

























































<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">LogTrace</code></td><td>\u4EE5 Trace \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002</td></tr><tr><td><code dir="auto">LogTracef</code></td><td>\u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Trace \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002</td></tr><tr><td><code dir="auto">LogDebug</code></td><td>\u4EE5 Debug \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002</td></tr><tr><td><code dir="auto">LogDebugf</code></td><td>\u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Debug \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002</td></tr><tr><td><code dir="auto">LogInfo</code></td><td>\u4EE5 Info \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002</td></tr><tr><td><code dir="auto">LogInfof</code></td><td>\u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Info \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002</td></tr><tr><td><code dir="auto">LogWarn</code></td><td>\u4EE5 Warn \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002</td></tr><tr><td><code dir="auto">LogWarnf</code></td><td>\u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Warn \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002</td></tr><tr><td><code dir="auto">LogError</code></td><td>\u4EE5 Error \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002</td></tr><tr><td><code dir="auto">LogErrorf</code></td><td>\u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Error \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002</td></tr><tr><td><code dir="auto">LogCritical</code></td><td>\u4EE5 Critical \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002</td></tr><tr><td><code dir="auto">LogCriticalf</code></td><td>\u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Critical \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002</td></tr></tbody></table>
<h4 id="12\u6307\u6807\u64CD\u4F5C">12.\u6307\u6807\u64CD\u4F5C</h4>













































<table><thead><tr><th>\u51FD\u6570\u540D</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">DefineCounterMetric</code></td><td>\u4E3A\u540D\u79F0\u5B9A\u4E49\u4E00\u4E2A\u8BA1\u6570\u5668\u6307\u6807\u3002\u8FD4\u56DE\u4E00\u4E2A <code dir="auto">MetricCounter</code> \u7528\u4E8E\u540E\u7EED\u64CD\u4F5C\u3002</td></tr><tr><td><code dir="auto">DefineGaugeMetric</code></td><td>\u4E3A\u540D\u79F0\u5B9A\u4E49\u4E00\u4E2A\u8BA1\u91CF\u5668\u6307\u6807\u3002\u8FD4\u56DE\u4E00\u4E2A <code dir="auto">MetricGauge</code> \u7528\u4E8E\u540E\u7EED\u64CD\u4F5C\u3002</td></tr><tr><td><code dir="auto">DefineHistogramMetric</code></td><td>\u4E3A\u540D\u79F0\u5B9A\u4E49\u4E00\u4E2A\u76F4\u65B9\u56FE\u6307\u6807\u3002\u8FD4\u56DE\u4E00\u4E2A <code dir="auto">MetricHistogram</code> \u7528\u4E8E\u540E\u7EED\u64CD\u4F5C\u3002</td></tr><tr><td><code dir="auto">MetricCounter.Value</code></td><td>\u83B7\u53D6 <code dir="auto">MetricCounter</code> \u7684\u5F53\u524D\u503C\u3002</td></tr><tr><td><code dir="auto">MetricCounter.Increment</code></td><td>\u5C06 <code dir="auto">MetricCounter</code> \u7684\u5F53\u524D\u503C\u589E\u52A0\u6307\u5B9A\u7684\u504F\u79FB\u91CF\u3002</td></tr><tr><td><code dir="auto">MetricGauge.Value</code></td><td>\u83B7\u53D6 <code dir="auto">MetricGauge</code> \u7684\u5F53\u524D\u503C\u3002</td></tr><tr><td><code dir="auto">MetricGauge.Add</code></td><td>\u5C06 <code dir="auto">MetricGauge</code> \u7684\u5F53\u524D\u503C\u589E\u52A0\u6307\u5B9A\u7684\u504F\u79FB\u91CF\u3002</td></tr><tr><td><code dir="auto">MetricHistogram.Value</code></td><td>\u83B7\u53D6 <code dir="auto">MetricHistogram</code> \u7684\u5F53\u524D\u503C\u3002</td></tr><tr><td><code dir="auto">MetricHistogram.Record</code></td><td>\u4E3A <code dir="auto">MetricHistogram</code> \u8BB0\u5F55\u4E00\u4E2A\u503C\u3002</td></tr></tbody></table>
<h3 id="33-\u63D2\u4EF6\u8C03\u7528\u5165\u53E3-entrypoint">3.3 \u63D2\u4EF6\u8C03\u7528\u5165\u53E3 Entrypoint</h3>
<p>\u5F53 Envoy \u521B\u5EFA VM \u65F6\uFF0C\u5728\u865A\u62DF\u673A\u5185\u90E8\u521B\u5EFA <code dir="auto">VMContext</code> \u4E4B\u524D\uFF0C\u5B83\u4F1A\u5728\u542F\u52A8\u9636\u6BB5\u8C03\u7528\u63D2\u4EF6\u7A0B\u5E8F\u7684 <code dir="auto">main</code> \u51FD\u6570\u3002\u6240\u4EE5\u5FC5\u987B\u5728 <code dir="auto">main</code> \u51FD\u6570\u4E2D\u4F20\u9012\u63D2\u4EF6\u81EA\u5B9A\u4E49\u7684 <code dir="auto">VMContext</code> \u5B9E\u73B0\u3002
<a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">proxywasm</a> \u5305\u7684 <code dir="auto">SetVMContext</code> \u51FD\u6570\u662F\u5165\u53E3\u70B9\u3002<code dir="auto">main</code> \u51FD\u6570\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">SetVMContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">myVMContext</span><span style="--0:#E1E4E8">{})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">myVMContext</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> { </span><span style="--0:#F97583">...</span><span style="--0:#E1E4E8">. }</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> _ </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">VMContext</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">&#x26;</span><span style="--0:#B392F0">myVMContext</span><span style="--0:#E1E4E8">{}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// Implementations follow...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func main() {\x7F  proxywasm.SetVMContext(&#x26;myVMContext{})\x7F}\x7F\x7Ftype myVMContext struct { .... }\x7F\x7Fvar _ types.VMContext = &#x26;myVMContext{}\x7F\x7F// Implementations follow..."><div></div></button></div></figure></div>
<h2 id="4-\u8DE8\u865A\u62DF\u673A\u901A\u4FE1">4 \u8DE8\u865A\u62DF\u673A\u901A\u4FE1</h2>
<p>Envoy \u4E2D\u7684\u8DE8\u865A\u62DF\u673A\u901A\u4FE1\uFF08Cross-VM communications\uFF09\u5141\u8BB8\u5728\u4E0D\u540C\u7EBF\u7A0B\u4E2D\u8FD0\u884C \u7684Wasm \u865A\u62DF\u673A\uFF08VMs\uFF09\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u4EA4\u6362\u548C\u901A\u4FE1\u3002\u8FD9\u5728\u9700\u8981\u5728\u591A\u4E2AVMs\u4E4B\u95F4\u805A\u5408\u6570\u636E\u3001\u7EDF\u8BA1\u4FE1\u606F\u6216\u7F13\u5B58\u6570\u636E\u7B49\u573A\u666F\u4E2D\u975E\u5E38\u6709\u7528\u3002
\u8DE8\u865A\u62DF\u673A\u901A\u4FE1\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p>
<ul>
<li>\u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09:
<ul>
<li>\u5171\u4EAB\u6570\u636E\u662F\u4E00\u79CD\u5728\u6240\u6709 VMs \u4E4B\u95F4\u5171\u4EAB\u7684\u952E\u503C\u5B58\u50A8\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u548C\u68C0\u7D22\u7B80\u5355\u7684\u6570\u636E\u9879\u3002</li>
<li>\u5B83\u9002\u7528\u4E8E\u5B58\u50A8\u5C0F\u7684\u3001\u4E0D\u7ECF\u5E38\u53D8\u5316\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u914D\u7F6E\u53C2\u6570\u6216\u7EDF\u8BA1\u4FE1\u606F\u3002</li>
</ul>
</li>
<li>\u5171\u4EAB\u961F\u5217\uFF08Shared Queue\uFF09:
<ul>
<li>\u5171\u4EAB\u961F\u5217\u5141\u8BB8VMs\u4E4B\u95F4\u8FDB\u884C\u66F4\u590D\u6742\u7684\u6570\u636E\u4EA4\u6362\uFF0C\u652F\u6301\u53D1\u9001\u548C\u63A5\u6536\u66F4\u4E30\u5BCC\u7684\u6570\u636E\u7ED3\u6784\u3002</li>
<li>\u961F\u5217\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u4EFB\u52A1\u8C03\u5EA6\u3001\u5F02\u6B65\u6D88\u606F\u4F20\u9012\u7B49\u6A21\u5F0F\u3002</li>
</ul>
</li>
</ul>
<h3 id="41-\u5171\u4EAB\u6570\u636Eshared-data">4.1 \u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09</h3>
<p>\u5982\u679C\u60F3\u8981\u5728\u6240\u6709 Wasm \u865A\u62DF\u673A\uFF08VMs\uFF09\u8FD0\u884C\u7684\u591A\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u95F4\u62E5\u6709\u5168\u5C40\u8BF7\u6C42\u8BA1\u6570\u5668\uFF0C\u6216\u8005\u60F3\u8981\u7F13\u5B58\u4E00\u4E9B\u5E94\u88AB\u6240\u6709 Wasm VMs \u4F7F\u7528\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09\u6216\u7B49\u6548\u7684\u5171\u4EAB\u952E\u503C\u5B58\u50A8\uFF08Shared KVS\uFF09\u5C31\u4F1A\u53D1\u6325\u4F5C\u7528\u3002
\u5171\u4EAB\u6570\u636E\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u8DE8\u6240\u6709VMs\u5171\u4EAB\u7684\u952E\u503C\u5B58\u50A8\uFF08\u5373\u8DE8 VM \u6216\u8DE8\u7EBF\u7A0B\uFF09\u3002</p>
<p>\u5171\u4EAB\u6570\u636E KVS \u662F\u6839\u636E vm_config \u4E2D\u6307\u5B9A\u7684\u521B\u5EFA\u7684\u3002\u53EF\u4EE5\u5728\u6240\u6709 Wasm VMs \u4E4B\u95F4\u5171\u4EAB\u4E00\u4E2A\u952E\u503C\u5B58\u50A8\uFF0C\u800C\u5B83\u4EEC\u4E0D\u5FC5\u5177\u6709\u76F8\u540C\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6 <code dir="auto">vm_config.code</code>,\u552F\u4E00\u7684\u8981\u6C42\u662F\u5177\u6709\u76F8\u540C\u7684 vm_id\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01fLn4Lr1GXxhKORL9t_!!6000000000633-0-tps-1784-1266.jpg" alt="img" referrerpolicy="no-referrer"></p>
<p>\u5728\u4E0A\u56FE\uFF08\u56FE\u7247\u6765\u6E90 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm Go SDK</a>\uFF09\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u5373\u4F7F\u5B83\u4EEC\u5177\u6709\u4E0D\u540C\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08 hello.wasm \u548C bye.wasm \uFF09\uFF0C\u201Cvm_id=foo\u201D\u7684 VMs \u4E5F\u5171\u4EAB\u76F8\u540C\u7684\u5171\u4EAB\u6570\u636E\u5B58\u50A8\u3002
hostcall.go \u4E2D\u5B9A\u4E49\u5171\u4EAB\u6570\u636E\u76F8\u5173\u7684 API\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// GetSharedData \u7528\u4E8E\u68C0\u7D22\u7ED9\u5B9A "key" \u7684\u503C\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8FD4\u56DE\u7684 "cas" \u5E94\u7528\u4E8E SetSharedData \u4EE5\u5B9E\u73B0\u8BE5\u952E\u7684\u7EBF\u7A0B\u5B89\u5168\u66F4\u65B0\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GetSharedData</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">key</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (</span><span style="--0:#FFAB70">value</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">cas</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">err</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// SetSharedData \u7528\u4E8E\u5728\u5171\u4EAB\u6570\u636E\u5B58\u50A8\u4E2D\u8BBE\u7F6E\u952E\u503C\u5BF9\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u5171\u4EAB\u6570\u636E\u5B58\u50A8\u6309\u4E3B\u673A\u4E2D\u7684 "vm_config.vm_id" \u5B9A\u4E49\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u5F53\u7ED9\u5B9A\u7684 CAS \u503C\u4E0E\u5F53\u524D\u503C\u4E0D\u5339\u914D\u65F6\uFF0C\u5C06\u8FD4\u56DE ErrorStatusCasMismatch\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8FD9\u8868\u660E\u5176\u4ED6 Wasm VM \u5DF2\u7ECF\u6210\u529F\u8BBE\u7F6E\u76F8\u540C\u952E\u7684\u503C\uFF0C\u5E76\u4E14\u8BE5\u952E\u7684\u5F53\u524D CAS \u5DF2\u9012\u589E\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u5EFA\u8BAE\u5728\u9047\u5230\u6B64\u9519\u8BEF\u65F6\u5B9E\u73B0\u91CD\u8BD5\u903B\u8F91\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u5C06 cas \u8BBE\u7F6E\u4E3A 0 \u5C06\u6C38\u8FDC\u4E0D\u4F1A\u8FD4\u56DE ErrorStatusCasMismatch \u5E76\u4E14\u603B\u662F\u6210\u529F\u7684\uFF0C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u4F46\u8FD9\u5E76\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u5373\u53EF\u80FD\u5728\u60A8\u8C03\u7528\u6B64\u51FD\u6570\u65F6\u53E6\u4E00\u4E2A VM \u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u8BE5\u503C\uFF0C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u770B\u5230\u7684\u503C\u4E0E\u5B58\u50A8\u65F6\u7684\u503C\u5DF2\u7ECF\u4E0D\u540C\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SetSharedData</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">key</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">value</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">cas</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// GetSharedData \u7528\u4E8E\u68C0\u7D22\u7ED9\u5B9A &#x22;key&#x22; \u7684\u503C\u3002\x7F// \u8FD4\u56DE\u7684 &#x22;cas&#x22; \u5E94\u7528\u4E8E SetSharedData \u4EE5\u5B9E\u73B0\u8BE5\u952E\u7684\u7EBF\u7A0B\u5B89\u5168\u66F4\u65B0\u3002\x7Ffunc GetSharedData(key string) (value []byte, cas uint32, err error)\x7F\x7F// SetSharedData \u7528\u4E8E\u5728\u5171\u4EAB\u6570\u636E\u5B58\u50A8\u4E2D\u8BBE\u7F6E\u952E\u503C\u5BF9\u3002\x7F// \u5171\u4EAB\u6570\u636E\u5B58\u50A8\u6309\u4E3B\u673A\u4E2D\u7684 &#x22;vm_config.vm_id&#x22; \u5B9A\u4E49\u3002\x7F//\x7F// \u5F53\u7ED9\u5B9A\u7684 CAS \u503C\u4E0E\u5F53\u524D\u503C\u4E0D\u5339\u914D\u65F6\uFF0C\u5C06\u8FD4\u56DE ErrorStatusCasMismatch\u3002\x7F// \u8FD9\u8868\u660E\u5176\u4ED6 Wasm VM \u5DF2\u7ECF\u6210\u529F\u8BBE\u7F6E\u76F8\u540C\u952E\u7684\u503C\uFF0C\u5E76\u4E14\u8BE5\u952E\u7684\u5F53\u524D CAS \u5DF2\u9012\u589E\u3002\x7F// \u5EFA\u8BAE\u5728\u9047\u5230\u6B64\u9519\u8BEF\u65F6\u5B9E\u73B0\u91CD\u8BD5\u903B\u8F91\u3002\x7F//\x7F// \u5C06 cas \u8BBE\u7F6E\u4E3A 0 \u5C06\u6C38\u8FDC\u4E0D\u4F1A\u8FD4\u56DE ErrorStatusCasMismatch \u5E76\u4E14\u603B\u662F\u6210\u529F\u7684\uFF0C\x7F// \u4F46\u8FD9\u5E76\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u5373\u53EF\u80FD\u5728\u60A8\u8C03\u7528\u6B64\u51FD\u6570\u65F6\u53E6\u4E00\u4E2A VM \u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u8BE5\u503C\uFF0C\x7F// \u770B\u5230\u7684\u503C\u4E0E\u5B58\u50A8\u65F6\u7684\u503C\u5DF2\u7ECF\u4E0D\u540C\u3002\x7Ffunc SetSharedData(key string, value []byte, cas uint32) error"><div></div></button></div></figure></div>
<p>\u5171\u4EAB\u6570\u636E API \u662F\u5176\u7EBF\u7A0B\u5B89\u5168\u6027\u548C\u8DE8 VM \u5B89\u5168\u6027\uFF0C\u8FD9\u901A\u8FC7 \u201Ccas\u201D \uFF08<a href="https://en.wikipedia.org/wiki/Compare-and-swap" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Compare-And-Swap</a>)\u503C\u6765\u5B9E\u73B0\u3002\u5982\u4F55\u4F7F\u7528 GetSharedData \u548C SetSharedData \u51FD\u6570\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_data/main.go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u793A\u4F8B</a>\u3002</p>
<h3 id="42-\u5171\u4EAB\u961F\u5217-shared-queue">4.2 \u5171\u4EAB\u961F\u5217 Shared Queue</h3>
<p>\u5982\u679C\u8981\u5728\u8BF7\u6C42/\u54CD\u5E94\u5904\u7406\u7684\u540C\u65F6\u8DE8\u6240\u6709 Wasm VMs \u805A\u5408\u6307\u6807\uFF0C\u6216\u8005\u5C06\u4E00\u4E9B\u8DE8 VM \u805A\u5408\u7684\u4FE1\u606F\u63A8\u9001\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7 <em>Shared Queue</em> \u6765\u5B9E\u73B0\u3002</p>
<p><em>Shared Queue</em> \u662F\u4E3A <code dir="auto">vm_id</code> \u548C\u961F\u5217\u540D\u79F0\u7684\u7EC4\u5408\u521B\u5EFA\u7684 FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u961F\u5217\u3002\u5E76\u4E3A\u8BE5\u7EC4\u5408\uFF08<code dir="auto">vm_id</code>\uFF0C\u540D\u79F0\uFF09\u5206\u914D\u4E86\u4E00\u4E2A\u552F\u4E00\u7684 <em>queue id</em>\uFF0C\u8BE5 ID \u7528\u4E8E\u5165\u961F/\u51FA\u961F\u64CD\u4F5C\u3002</p>
<p>\u201C\u5165\u961F\u201D\u548C\u201C\u51FA\u961F\u201D\u7B49\u64CD\u4F5C\u5177\u6709\u7EBF\u7A0B\u5B89\u5168\u6027\u548C\u8DE8 VM \u5B89\u5168\u6027\u3002\u5728  hostcall.go \u4E2D\u4E0E <em>Shared Queue</em> \u76F8\u5173 API \u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// DequeueSharedQueue \u4ECE\u7ED9\u5B9A queueID \u7684\u5171\u4EAB\u961F\u5217\u4E2D\u51FA\u961F\u6570\u636E\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8981\u83B7\u53D6\u76EE\u6807\u961F\u5217\u7684 queue id\uFF0C\u8BF7\u5148\u4F7F\u7528 "ResolveSharedQueue"\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">DequeueSharedQueue</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">queueID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">) ([]</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// RegisterSharedQueue \u5728\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u5171\u4EAB\u961F\u5217\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// "\u6CE8\u518C" \u610F\u5473\u7740\u6BCF\u5F53\u8BE5 queueID \u4E0A\u6709\u65B0\u6570\u636E\u5165\u961F\u65F6\uFF0C\u5C06\u5BF9\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u8C03\u7528 OnQueueReady\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u4EC5\u9002\u7528\u4E8E types.PluginContext\u3002\u8FD4\u56DE\u7684 queueID \u53EF\u7528\u4E8E Enqueue/DequeueSharedQueue\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8BF7\u6CE8\u610F "name" \u5FC5\u987B\u5728\u6240\u6709\u5171\u4EAB\u76F8\u540C "vm_id" \u7684 Wasm VMs \u4E2D\u662F\u552F\u4E00\u7684\u3002\u4F7F\u7528 "vm_id" \u6765\u5206\u9694\u5171\u4EAB\u961F\u5217\u7684\u547D\u540D\u7A7A\u95F4\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u53EA\u6709\u5728\u8C03\u7528 RegisterSharedQueue \u4E4B\u540E\uFF0CResolveSharedQueue("\u6B64 vm_id", "\u540D\u79F0") \u624D\u80FD\u6210\u529F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u901A\u8FC7\u5176\u4ED6 VMs \u68C0\u7D22 queueID\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RegisterSharedQueue</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">name</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (</span><span style="--0:#FFAB70">queueID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">err</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// EnqueueSharedQueue \u5C06\u6570\u636E\u5165\u961F\u5230\u7ED9\u5B9A queueID \u7684\u5171\u4EAB\u961F\u5217\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8981\u83B7\u53D6\u76EE\u6807\u961F\u5217\u7684 queue id\uFF0C\u8BF7\u5148\u4F7F\u7528 "ResolveSharedQueue"\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">EnqueueSharedQueue</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">queueID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">data</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// ResolveSharedQueue \u83B7\u53D6\u7ED9\u5B9A vmID \u548C\u961F\u5217\u540D\u79F0\u7684 queueID\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8FD4\u56DE\u7684 queueID \u53EF\u7528\u4E8E Enqueue/DequeueSharedQueue\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">ResolveSharedQueue</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">vmID</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">queueName</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (</span><span style="--0:#FFAB70">queueID</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">uint32</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">err</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// DequeueSharedQueue \u4ECE\u7ED9\u5B9A queueID \u7684\u5171\u4EAB\u961F\u5217\u4E2D\u51FA\u961F\u6570\u636E\u3002\x7F// \u8981\u83B7\u53D6\u76EE\u6807\u961F\u5217\u7684 queue id\uFF0C\u8BF7\u5148\u4F7F\u7528 &#x22;ResolveSharedQueue&#x22;\u3002\x7Ffunc DequeueSharedQueue(queueID uint32) ([]byte, error)\x7F\x7F// RegisterSharedQueue \u5728\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u5171\u4EAB\u961F\u5217\u3002\x7F// &#x22;\u6CE8\u518C&#x22; \u610F\u5473\u7740\u6BCF\u5F53\u8BE5 queueID \u4E0A\u6709\u65B0\u6570\u636E\u5165\u961F\u65F6\uFF0C\u5C06\u5BF9\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u8C03\u7528 OnQueueReady\u3002\x7F// \u4EC5\u9002\u7528\u4E8E types.PluginContext\u3002\u8FD4\u56DE\u7684 queueID \u53EF\u7528\u4E8E Enqueue/DequeueSharedQueue\u3002\x7F// \u8BF7\u6CE8\u610F &#x22;name&#x22; \u5FC5\u987B\u5728\u6240\u6709\u5171\u4EAB\u76F8\u540C &#x22;vm_id&#x22; \u7684 Wasm VMs \u4E2D\u662F\u552F\u4E00\u7684\u3002\u4F7F\u7528 &#x22;vm_id&#x22; \u6765\u5206\u9694\u5171\u4EAB\u961F\u5217\u7684\u547D\u540D\u7A7A\u95F4\u3002\x7F//\x7F// \u53EA\u6709\u5728\u8C03\u7528 RegisterSharedQueue \u4E4B\u540E\uFF0CResolveSharedQueue(&#x22;\u6B64 vm_id&#x22;, &#x22;\u540D\u79F0&#x22;) \u624D\u80FD\u6210\u529F\x7F// \u901A\u8FC7\u5176\u4ED6 VMs \u68C0\u7D22 queueID\u3002\x7Ffunc RegisterSharedQueue(name string) (queueID uint32, err error)\x7F\x7F// EnqueueSharedQueue \u5C06\u6570\u636E\u5165\u961F\u5230\u7ED9\u5B9A queueID \u7684\u5171\u4EAB\u961F\u5217\u3002\x7F// \u8981\u83B7\u53D6\u76EE\u6807\u961F\u5217\u7684 queue id\uFF0C\u8BF7\u5148\u4F7F\u7528 &#x22;ResolveSharedQueue&#x22;\u3002\x7Ffunc EnqueueSharedQueue(queueID uint32, data []byte) error\x7F\x7F// ResolveSharedQueue \u83B7\u53D6\u7ED9\u5B9A vmID \u548C\u961F\u5217\u540D\u79F0\u7684 queueID\u3002\x7F// \u8FD4\u56DE\u7684 queueID \u53EF\u7528\u4E8E Enqueue/DequeueSharedQueue\u3002\x7Ffunc ResolveSharedQueue(vmID, queueName string) (queueID uint32, err error)"><div></div></button></div></figure></div>
<p><code dir="auto">RegisterSharedQueue</code> \u548C <code dir="auto">DequeueSharedQueue</code> \u7531\u961F\u5217\u7684\u201C\u6D88\u8D39\u8005\u201D\u4F7F\u7528\uFF0C\u800C <code dir="auto">ResolveSharedQueue</code> \u548C <code dir="auto">EnqueueSharedQueue</code> \u662F\u4E3A\u961F\u5217\u201C\u751F\u4EA7\u8005\u201D\u51C6\u5907\u7684\u3002\u8BF7\u6CE8\u610F\uFF1A</p>
<ul>
<li>RegisterSharedQueue \u7528\u4E8E\u4E3A\u8C03\u7528\u8005\u7684 name \u548C vm_id \u521B\u5EFA\u5171\u4EAB\u961F\u5217\u3002\u4F7F\u7528\u4E00\u4E2A\u961F\u5217\uFF0C\u90A3\u4E48\u5FC5\u987B\u5148\u7531\u4E00\u4E2A VM \u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002\u8FD9\u53EF\u4EE5\u7531 PluginContext \u8C03\u7528\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8BA4\u4E3A\u201C\u6D88\u8D39\u8005\u201D = PluginContexts\u3002</li>
<li>ResolveSharedQueue \u7528\u4E8E\u83B7\u53D6 name \u548C vm_id \u7684 queue id\u3002\u8FD9\u662F\u4E3A\u201C\u751F\u4EA7\u8005\u201D\u51C6\u5907\u7684\u3002</li>
</ul>
<p>\u8FD9\u4E24\u4E2A\u8C03\u7528\u90FD\u8FD4\u56DE\u4E00\u4E2A\u961F\u5217 ID\uFF0C\u8BE5 ID \u7528\u4E8E DequeueSharedQueue \u548C EnqueueSharedQueue\u3002\u540C\u65F6\u5F53\u961F\u5217\u4E2D\u5165\u961F\u65B0\u6570\u636E\u65F6 \u6D88\u8D39\u8005 PluginContext \u4E2D\u6709 OnQueueReady(queueID uint32) \u63A5\u53E3\u4F1A\u6536\u5230\u901A\u77E5\u3002
\u8FD8\u5F3A\u70C8\u5EFA\u8BAE\u7531 Envoy \u7684\u4E3B\u7EBF\u7A0B\u4E0A\u7684\u5355\u4F8B Wasm Service \u521B\u5EFA\u5171\u4EAB\u961F\u5217\u3002\u5426\u5219 OnQueueReady \u5C06\u5728\u5DE5\u4F5C\u7EBF\u7A0B\u4E0A\u8C03\u7528\uFF0C\u8FD9\u4F1A\u963B\u585E\u5B83\u4EEC\u5904\u7406 Http \u6216 Tcp \u6D41\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01s1cT1s28xb7OKkEg0_!!6000000007999-0-tps-2378-1316.jpg" alt="img" referrerpolicy="no-referrer">
\u5728\u4E0A\u56FE\uFF08\u56FE\u7247\u6765\u6E90 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm Go SDK</a>\uFF09\u4E2D\u5C55\u793A\u5171\u4EAB\u961F\u5217\u5DE5\u4F5C\u539F\u7406\uFF0C\u66F4\u8BE6\u7EC6\u5982\u4F55\u4F7F\u7528\u5171\u4EAB\u961F\u5217\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/main.go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u793A\u4F8B</a>\u3002</p>
<h2 id="5-\u9650\u5236\u548C\u6CE8\u610F\u4E8B\u9879">5 \u9650\u5236\u548C\u6CE8\u610F\u4E8B\u9879</h2>
<p>\u4EE5\u4E0B\u662F\u5728\u4F7F\u7528 Proxy-Wasm Go SDK \u548C Proxy-Wasm \u7F16\u5199\u63D2\u4EF6\u65F6\u9700\u8981\u6CE8\u610F\u4E8B\u9879\u3002</p>
<h3 id="51-\u4E00\u4E9B\u6807\u51C6\u5E93\u4E0D\u53EF\u7528">5.1 \u4E00\u4E9B\u6807\u51C6\u5E93\u4E0D\u53EF\u7528</h3>
<p>\u4E00\u4E9B\u73B0\u6709\u7684\u6807\u51C6\u5E93\u4E0D\u53EF\u7528\uFF08\u53EF\u5BFC\u5165\u4F46\u8FD0\u884C\u65F6 panic / \u65E0\u6CD5\u5BFC\u5165\uFF09\u3002\u8FD9\u6709\u51E0\u4E2A\u539F\u56E0\uFF1A</p>
<ol>
<li>TinyGo \u7684 WASI \u76EE\u6807\u4E0D\u652F\u6301\u67D0\u4E9B\u7CFB\u7EDF\u8C03\u7528\u3002</li>
<li>TinyGo \u6CA1\u6709\u5B9E\u73B0 reflect \u5305\u7684\u5168\u90E8\u529F\u80FD\u3002</li>
<li><a href="https://github.com/proxy-wasm/proxy-wasm-cpp-host" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Proxy-Wasm C++ \u4E3B\u673A</a> \u5C1A\u672A\u652F\u6301\u67D0\u4E9B WASI API\u3002</li>
<li>TinyGo \u6216 Proxy-Wasm \u4E2D\u4E0D\u652F\u6301\u4E00\u4E9B\u8BED\u8A00\u7279\u6027\uFF1A\u5305\u62EC <code dir="auto">recover</code> \u548C <code dir="auto">goroutine</code>\u3002</li>
</ol>
<p>\u968F\u7740 TinyGo \u548C Proxy-Wasm \u7684\u53D1\u5C55\uFF0C\u8FD9\u4E9B\u95EE\u9898\u5C06\u5F97\u5230\u7F13\u89E3\u3002</p>
<h3 id="52-\u7531\u4E8E\u5783\u573E\u56DE\u6536\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500">5.2 \u7531\u4E8E\u5783\u573E\u56DE\u6536\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500</h3>
<p>\u7531\u4E8E GC\uFF0C\u4F7F\u7528 Go/TinyGo \u4F1A\u5E26\u6765\u6027\u80FD\u5F00\u9500\uFF0C\u5C3D\u7BA1\u53EF\u4EE5\u8BA4\u4E3A\u4E0E\u4EE3\u7406\u4E2D\u7684\u5176\u4ED6\u64CD\u4F5C\u76F8\u6BD4\uFF0CGC \u7684\u5F00\u9500\u8DB3\u591F\u5C0F\u3002
TinyGo \u5141\u8BB8\u7981\u7528 GC\uFF0C\u4F46\u7531\u4E8E\u5185\u90E8\u9700\u8981\u4F7F\u7528\u6620\u5C04\uFF08\u9690\u5F0F\u5F15\u8D77\u5206\u914D\uFF09\u6765\u4FDD\u5B58\u865A\u62DF\u673A\u7684\u72B6\u6001\uFF0C\u53EF\u4EE5\u901A\u8FC7 <code dir="auto">alloc(uintptr)</code> <a href="https://github.com/tinygo-org/tinygo/blob/v0.14.1/src/runtime/gc_none.go#L13" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u63A5\u53E3</a> \u4F7F\u7528 <code dir="auto">-gc=custom</code> \u9009\u9879\u8BBE\u7F6E proxy-wasm \u5B9A\u5236\u7684 GC \u7B97\u6CD5\u3002</p>
<h3 id="53-recover-\u672A\u5B9E\u73B0">5.3 <code dir="auto">recover</code> \u672A\u5B9E\u73B0</h3>
<p>\u5728 TinyGo \u4E2D\uFF0C<code dir="auto">recover</code> \u672A\u5B9E\u73B0\uFF08<a href="https://github.com/tinygo-org/tinygo/issues/891)%E3%80%82%E8%BF%99%E4%B9%9F%E6%84%8F%E5%91%B3%E7%9D%80%E4%BE%9D%E8%B5%96" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/tinygo-org/tinygo/issues/891)\u3002\u8FD9\u4E5F\u610F\u5473\u7740\u4F9D\u8D56</a> <code dir="auto">recover</code> \u7684\u4EE3\u7801\u5C06\u65E0\u6CD5\u6309\u9884\u671F\u5DE5\u4F5C\u3002</p>
<h3 id="54-goroutine-\u4E0D\u652F\u6301">5.4 Goroutine \u4E0D\u652F\u6301</h3>
<p>\u5728 TinyGo \u4E2D\uFF0CGoroutine \u901A\u8FC7 LLVM \u7684\u534F\u7A0B\u5B9E\u73B0\uFF08\u89C1<a href="https://aykevl.nl/2019/02/tinygo-goroutines" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8FD9\u7BC7\u535A\u5BA2\u6587\u7AE0</a>\uFF09\u3002 \u5728 Envoy \u4E2D\uFF0CWasm \u6A21\u5757\u4EE5\u4E8B\u4EF6\u9A71\u52A8\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u56E0\u6B64\u4E00\u65E6\u4E3B\u51FD\u6570\u9000\u51FA\uFF0C\u201C\u8C03\u5EA6\u5668\u201D\u5C31\u4E0D\u518D\u6267\u884C\u3002\u56E0\u6B64\u4E0D\u80FD\u50CF\u666E\u901A\u4E3B\u673A\u73AF\u5883\u4E2D\u90A3\u6837\u4F7F\u7528 Goroutine \u3002
\u5728\u4EE5\u4E8B\u4EF6\u9A71\u52A8\u65B9\u5F0F\u6267\u884C\u7684 Wasm VM \u7EBF\u7A0B\u4E2D\u5982\u4F55\u5904\u7406 Goroutine \u7684\u95EE\u9898\u5C1A\u672A\u6709\u89E3\u51B3\u65B9\u6848\u3002\u5EFA\u8BAE\u4F7F\u7528\u5B9E\u73B0 <code dir="auto">OnTick</code> \u51FD\u6570\u6765\u5904\u7406\u4EFB\u4F55\u5F02\u6B65\u4EFB\u52A1\u3002</p>
<h2 id="6-\u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B">6 \u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B</h2>
<p>\u7528 Proxy-Wasm Go SDK \u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u63D2\u4EF6\uFF0C\u5177\u4F53\u6837\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u63D2\u4EF6\u5165\u53E3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.SetVMContext(&#x26;vmContext{})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// VM \u4E0A\u4E0B\u6587</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type vmContext struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Embed the default VM context here,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">types.DefaultVMContext</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u6DFB\u52A0 VM \u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// VM \u542F\u52A8\u56DE\u8C03</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (*vmContext) OnVMStart(vmConfigurationSize int) types.OnVMStartStatus {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("OnVMStart()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u83B7\u53D6 VM \u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">_, err := proxywasm.GetVMConfiguration()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.LogCriticalf("error reading vm configuration: %v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u89E3\u6790 VM \u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.OnVMStartStatusOK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u751F\u6210\u63D2\u4EF6\u4E0A\u4E0B\u6587</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (*vmContext) NewPluginContext(contextID uint32) types.PluginContext {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("NewPluginContex()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return &#x26;pluginContext{}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u63D2\u4EF6\u4E0A\u4E0B\u6587</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type pluginContext struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Embed the default plugin context here,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">types.DefaultPluginContext</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u6DFB\u52A0\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Http \u4E0A\u4E0B\u6587</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type httpContext struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Embed the default root http context here,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// so that we don't need to reimplement all the methods.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">types.DefaultHttpContext</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u6DFB\u52A0http \u4E0A\u4E0B\u6587\u5C5E\u6027</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestBodySize       int</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseBodySize      int</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u751F\u6210 Http \u4E0A\u4E0B\u6587</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (ctx *pluginContext) NewHttpContext(contextID uint32) types.HttpContext {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("NewHttpContext()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return &#x26;httpContext{}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u63D2\u4EF6\u542F\u52A8\u56DE\u8C03\uFF0C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (ctx *pluginContext) OnPluginStart(pluginConfigurationSize int) types.OnPluginStartStatus {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("OnPluginStart()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u83B7\u53D6\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">_, err := proxywasm.GetPluginConfiguration()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.LogCriticalf("error reading plugin configuration: %v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.OnPluginStartStatusOK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// http \u8BF7\u6C42\u5934\u56DE\u8C03</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (ctx *httpContext) OnHttpRequestHeaders(numHeaders int, endOfStream bool) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("OnHttpRequestHeaders()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u5904\u7406\u8BF7\u6C42\u5934\u56DE\u8C03</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// http \u8BF7\u6C42\u4F53\u56DE\u8C03\uFF0C\u6CE8\u610F\u8FD9\u91CC\u6D41\u5F0F\u5904\u7406</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (ctx *httpContext) OnHttpRequestBody(bodySize int, endOfStream bool) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("OnHttpRequestBody()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ctx.requestBodySize += bodySize</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if !endOfStream {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// Wait until we see the entire body to replace.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionPause</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">_, err := proxywasm.GetHttpRequestBody(0, ctx.requestBodySize)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.LogErrorf("failed to get request body: %v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// http \u54CD\u5E94\u5934\u56DE\u8C03</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (ctx *httpContext) OnHttpResponseHeaders(numHeaders int, endOfStream bool) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("OnHttpResponseHeaders()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD9\u91CC\u54CD\u5E94\u5934\u56DE\u8C03</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// http \u54CD\u5E94\u4F53\u56DE\u8C03\uFF0C \u6CE8\u610F\u8FD9\u91CC\u6D41\u5F0F\u5904\u7406</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (ctx *httpContext) OnHttpResponseBody(bodySize int, endOfStream bool) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.LogInfof("OnHttpResponseBody()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ctx.responseBodySize += bodySize</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5224\u65AD\u662F\u5426\u54CD\u5E94\u4F53\u7ED3\u675F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if !endOfStream {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// Wait until we see the entire body to replace.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionPause</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">_, err := proxywasm.GetHttpResponseBody(0, ctx.responseBodySize)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.LogErrorf("failed to get response body: %v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F)\x7F\x7F// \u63D2\u4EF6\u5165\u53E3\x7Ffunc main() {\x7F  proxywasm.SetVMContext(&#x26;vmContext{})\x7F}\x7F\x7F// VM \u4E0A\u4E0B\u6587\x7Ftype vmContext struct {\x7F  // Embed the default VM context here,\x7F  types.DefaultVMContext\x7F  // \u8FD9\u91CC\u6DFB\u52A0 VM \u914D\u7F6E\x7F}\x7F\x7F// VM \u542F\u52A8\u56DE\u8C03\x7Ffunc (*vmContext) OnVMStart(vmConfigurationSize int) types.OnVMStartStatus {\x7F  proxywasm.LogInfof(&#x22;OnVMStart()&#x22;)\x7F  // \u83B7\u53D6 VM \u914D\u7F6E\x7F  _, err := proxywasm.GetVMConfiguration()\x7F  if err != nil {\x7F    proxywasm.LogCriticalf(&#x22;error reading vm configuration: %v&#x22;, err)\x7F  }\x7F  // \u8FD9\u91CC\u89E3\u6790 VM \u914D\u7F6E\x7F  return types.OnVMStartStatusOK\x7F}\x7F\x7F// \u751F\u6210\u63D2\u4EF6\u4E0A\u4E0B\u6587\x7Ffunc (*vmContext) NewPluginContext(contextID uint32) types.PluginContext {\x7F  proxywasm.LogInfof(&#x22;NewPluginContex()&#x22;)\x7F  return &#x26;pluginContext{}\x7F}\x7F\x7F// \u63D2\u4EF6\u4E0A\u4E0B\u6587\x7Ftype pluginContext struct {\x7F  // Embed the default plugin context here,\x7F  types.DefaultPluginContext\x7F  // \u8FD9\u91CC\u6DFB\u52A0\u63D2\u4EF6\u914D\u7F6E\x7F}\x7F\x7F// Http \u4E0A\u4E0B\u6587\x7Ftype httpContext struct {\x7F  // Embed the default root http context here,\x7F  // so that we don&#x27;t need to reimplement all the methods.\x7F  types.DefaultHttpContext\x7F  // \u8FD9\u91CC\u6DFB\u52A0http \u4E0A\u4E0B\u6587\u5C5E\u6027\x7F  requestBodySize       int\x7F  responseBodySize      int\x7F}\x7F\x7F// \u751F\u6210 Http \u4E0A\u4E0B\u6587\x7Ffunc (ctx *pluginContext) NewHttpContext(contextID uint32) types.HttpContext {\x7F  proxywasm.LogInfof(&#x22;NewHttpContext()&#x22;)\x7F  return &#x26;httpContext{}\x7F}\x7F\x7F// \u63D2\u4EF6\u542F\u52A8\u56DE\u8C03\uFF0C\x7Ffunc (ctx *pluginContext) OnPluginStart(pluginConfigurationSize int) types.OnPluginStartStatus {\x7F  proxywasm.LogInfof(&#x22;OnPluginStart()&#x22;)\x7F  // \u83B7\u53D6\u63D2\u4EF6\u914D\u7F6E\x7F  _, err := proxywasm.GetPluginConfiguration()\x7F  if err != nil {\x7F    proxywasm.LogCriticalf(&#x22;error reading plugin configuration: %v&#x22;, err)\x7F  }\x7F  // \u8FD9\u91CC\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\x7F\x7F  return types.OnPluginStartStatusOK\x7F}\x7F\x7F// http \u8BF7\u6C42\u5934\u56DE\u8C03\x7Ffunc (ctx *httpContext) OnHttpRequestHeaders(numHeaders int, endOfStream bool) types.Action {\x7F  proxywasm.LogInfof(&#x22;OnHttpRequestHeaders()&#x22;)\x7F  // \u8FD9\u91CC\u5904\u7406\u8BF7\u6C42\u5934\u56DE\u8C03\x7F  return types.ActionContinue\x7F}\x7F\x7F// http \u8BF7\u6C42\u4F53\u56DE\u8C03\uFF0C\u6CE8\u610F\u8FD9\u91CC\u6D41\u5F0F\u5904\u7406\x7Ffunc (ctx *httpContext) OnHttpRequestBody(bodySize int, endOfStream bool) types.Action {\x7F  proxywasm.LogInfof(&#x22;OnHttpRequestBody()&#x22;)\x7F  ctx.requestBodySize += bodySize\x7F  if !endOfStream {\x7F    // Wait until we see the entire body to replace.\x7F    return types.ActionPause\x7F  }\x7F  _, err := proxywasm.GetHttpRequestBody(0, ctx.requestBodySize)\x7F  if err != nil {\x7F    proxywasm.LogErrorf(&#x22;failed to get request body: %v&#x22;, err)\x7F    return types.ActionContinue\x7F  }\x7F\x7F  return types.ActionContinue\x7F}\x7F\x7F// http \u54CD\u5E94\u5934\u56DE\u8C03\x7Ffunc (ctx *httpContext) OnHttpResponseHeaders(numHeaders int, endOfStream bool) types.Action {\x7F  proxywasm.LogInfof(&#x22;OnHttpResponseHeaders()&#x22;)\x7F  // \u8FD9\u91CC\u54CD\u5E94\u5934\u56DE\u8C03\x7F  return types.ActionContinue\x7F}\x7F\x7F// http \u54CD\u5E94\u4F53\u56DE\u8C03\uFF0C \u6CE8\u610F\u8FD9\u91CC\u6D41\u5F0F\u5904\u7406\x7Ffunc (ctx *httpContext) OnHttpResponseBody(bodySize int, endOfStream bool) types.Action {\x7F  proxywasm.LogInfof(&#x22;OnHttpResponseBody()&#x22;)\x7F  ctx.responseBodySize += bodySize\x7F  // \u5224\u65AD\u662F\u5426\u54CD\u5E94\u4F53\u7ED3\u675F\x7F  if !endOfStream {\x7F    // Wait until we see the entire body to replace.\x7F    return types.ActionPause\x7F  }\x7F  _, err := proxywasm.GetHttpResponseBody(0, ctx.responseBodySize)\x7F  if err != nil {\x7F    proxywasm.LogErrorf(&#x22;failed to get response body: %v&#x22;, err)\x7F    return types.ActionContinue\x7F  }\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<p>\u6838\u5FC3\u6B65\u9AA4\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u5165\u53E3\u6CE8\u518C vmContext</li>
<li>VM \u542F\u52A8\u56DE\u8C03\u65F6\u5019\u89E3\u6790 VM \u914D\u7F6E</li>
<li>\u7531 vmContext \u751F\u6210 pluginContext</li>
<li>\u63D2\u4EF6\u542F\u52A8\u56DE\u8C03\u65F6\u5019\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E</li>
<li>\u5BF9\u4E8E\u6BCF\u4E2A http \u6D41\uFF0CpluginContext \u751F\u6210 httpContext</li>
<li>\u751F\u6210\u7684 httpContext \u5904\u7406\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53\u3001\u54CD\u5E94\u5934\u3001\u54CD\u5E94\u4F53\uFF0C\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\u5904\u7406 OnHttpRequestBody \u548C OnHttpResponseBody \u56DE\u8C03\u662F\u6D41\u5F0F\u5904\u7406</li>
</ul>
<p>\u53EF\u4EE5\u901A\u8FC7 <a href="https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/examples" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5F00\u53D1\u6837\u4F8B</a> \u67E5\u770B\u66F4\u591A Proxy-Wasm Go SDK \u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B\u3002</p>
<h2 id="\u53C2\u8003">\u53C2\u8003</h2>
<ul>
<li>[1] <a href="https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">proxy-wasm-go-sdk doc</a></li>
<li>[2] <a href="https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/examples" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">proxy-wasm-go-sdk example</a></li>
<li>[3] <a href="https://github.com/mcuking/blog/issues/96/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7</a></li>
<li>[4] <a href="https://developer.mozilla.org/zh-CN/docs/WebAssembly/Understanding_the_text_format" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u7406\u89E3 WebAssembly \u6587\u672C\u683C\u5F0F</a></li>
<li>[5] <a href="https://webassembly.github.io/spec/core/binary/modules.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Wasm Module Binary Format</a></li>
<li>[6] <a href="https://www.bilibili.com/video/BV1WK42117dW" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly \u7A76\u7ADF\u662F\u4EC0\u4E48\uFF1F</a></li>
<li>[7] <a href="https://mosn.io/blog/posts/mosn-wasm-framework/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WebAssembly \u5728 MOSN \u4E2D\u7684\u5B9E\u8DF5 - \u57FA\u7840\u6846\u67B6\u7BC7</a></li>
</ul>`,a={title:"Wasm \u63D2\u4EF6\u539F\u7406",keywords:["Higress"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/zh-cn/wasm15.md",n=void 0,d=function(){return`
# Wasm \u63D2\u4EF6\u539F\u7406

\u672C\u7AE0\u4E3B\u8981\u4ECB\u7ECD Proxy-Wasm  Go SDK \u548C Wasm \u63D2\u4EF6\u57FA\u672C\u539F\u7406\u3002

## 1 Wasm\u3001TinyGo\u3001Proxy-Wasm Go SDK

### 1.1 Wasm

#### 1.1.1 \u4EC0\u4E48\u662F Wasm \uFF1F

 [WebAssembly\uFF08\u7B80\u79F0 Wasm\uFF09](https://webassembly.org/) \u662F\u64CD\u4F5C\u5806\u6808\u865A\u62DF\u673A\u7684\u4E8C\u8FDB\u5236\u6307\u4EE4\u96C6\uFF0CWasm \u53EF\u4EE5\u5728 Web \u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u6216\u8005\u5176\u4ED6\u73AF\u5883\u6BD4\u5982\u670D\u52A1\u5668\u7AEF\u5E94\u7528\u7A0B\u5E8F\u8FD0\u884C\u3002Wasm\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A

- \u9AD8\u6548\u6027\u80FD\uFF1A\u63D0\u4F9B\u4E86\u63A5\u8FD1\u673A\u5668\u7801\u7684\u6027\u80FD\u3002
- \u8DE8\u5E73\u53F0\uFF1AWasm \u662F\u4E00\u79CD\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u683C\u5F0F\uFF0C\u53EF\u4EE5\u5728\u4EFB\u4F55\u652F\u6301\u5B83\u7684\u5E73\u53F0\u4E0A\u8FD0\u884C\uFF0C\u5305\u62EC\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u3002
- \u5B89\u5168\u6027\uFF1AWasm \u5728\u4E00\u4E2A\u5185\u5B58\u5B89\u5168\u7684\u6C99\u7BB1\u73AF\u5883\u4E2D\u8FD0\u884C\uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u5B89\u5168\u5730\u6267\u884C\u4E0D\u53D7\u4FE1\u4EFB\u7684\u4EE3\u7801\uFF0C\u800C\u4E0D\u4F1A\u8BBF\u95EE\u6216\u4FEE\u6539\u4E3B\u673A\u7CFB\u7EDF\u7684\u5176\u4ED6\u90E8\u5206\u3002
- \u53EF\u79FB\u690D\u6027\uFF1AWasm \u6A21\u5757\u53EF\u4EE5\u88AB\u7F16\u8BD1\u6210 WebAssembly \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u53EF\u4EE5\u88AB\u4F20\u8F93\u548C\u52A0\u8F7D\u5230\u652F\u6301 Wasm \u7684\u4EFB\u4F55\u73AF\u5883\u4E2D\u3002
- \u591A\u8BED\u8A00\u652F\u6301\uFF1AWasm \u652F\u6301\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u4F7F\u7528 C\u3001C++\u3001Rust\u3001Go \u7B49\u591A\u79CD\u8BED\u8A00\u7F16\u5199\u4EE3\u7801\uFF0C\u7136\u540E\u7F16\u8BD1\u6210 Wasm \u683C\u5F0F\u3002

#### 1.1.2 Wasm \u6A21\u5757 

Wasm \u6A21\u5757\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E24\u79CD\u683C\u5F0F\uFF1A
- \u4E8C\u8FDB\u5236\u683C\u5F0F\uFF1AWasm \u7684\u4E3B\u8981\u7F16\u7801\u683C\u5F0F\uFF0C\u4EE5 .wasm \u540E\u7F00\u7ED3\u5C3E\u3002
- \u6587\u672C\u683C\u5F0F\uFF1A\u4E3B\u8981\u662F\u4E3A\u4E86\u65B9\u4FBF\u5F00\u53D1\u8005\u7406\u89E3 Wasm \u6A21\u5757\uFF0C\u4EE5 .wat \u540E\u7F00\u7ED3\u5C3E\uFF0C\u76F8\u5F53\u4E8E\u6C47\u7F16\u8BED\u8A00\u7A0B\u5E8F\u3002

Wasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u662F Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0CWasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u4E5F\u662F\u4EE5\u9B54\u6570\u548C\u7248\u672C\u53F7\u5F00\u5934\uFF0C\u4E4B\u540E\u5C31\u662F\u6A21\u5757\u7684\u4E3B\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u6839\u636E\u4E0D\u540C\u7528\u9014\u88AB\u5206\u522B\u653E\u5728\u4E0D\u540C\u7684\u6BB5\uFF08Section\uFF09 \u4E2D\u3002\u4E00\u5171\u5B9A\u4E49\u4E86 12 \u79CD\u6BB5\uFF0C\u6BCF\u79CD\u6BB5\u5206\u914D\u4E86 ID\uFF08\u4ECE 0 \u5230 11\uFF09\uFF0C\u4F9D\u6B21\u6709\u5982\u4E0B 12 \u4E2A\u6BB5\uFF1A\u81EA\u5B9A\u4E49\u6BB5\u3001\u7C7B\u578B\u6BB5\u3001\u5BFC\u5165\u6BB5\u3001\u51FD\u6570\u6BB5\u3001\u8868\u6BB5\u3001\u5185\u5B58\u6BB5\u3001\u5168\u5C40\u6BB5\u3001\u5BFC\u51FA\u6BB5\u3001\u8D77\u59CB\u6BB5\u3001\u5143\u7D20\u6BB5\u3001\u4EE3\u7801\u6BB5\u3001\u6570\u636E\u6BB5\u3002
Wasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684\u7EC4\u6210\u5982\u4E0B\u56FE\uFF08\u56FE\u7247\u6765\u6E90 [WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7](https://github.com/mcuking/blog/issues/96/)\uFF09\u6240\u793A\uFF1A 
![img](https://img.alicdn.com/imgextra/i1/O1CN01rLuxGp1zIX413ZQ0g_!!6000000006691-0-tps-1784-1266.jpg)

\u6BCF\u4E00\u4E2A\u4E0D\u540C\u7684\u6BB5\u90FD\u63CF\u8FF0\u4E86\u8FD9\u4E2A Wasm \u6A21\u5757\u7684\u4E00\u90E8\u5206\u4FE1\u606F\u3002\u800C\u6A21\u5757\u5185\u7684\u6240\u6709\u6BB5\u653E\u5728\u4E00\u8D77\uFF0C\u4FBF\u63CF\u8FF0\u4E86\u8FD9\u4E2A Wasm \u6A21\u5757\u7684\u5168\u90E8\u4FE1\u606F\uFF1A
- \u5185\u5B58\u6BB5\u548C\u6570\u636E\u6BB5\uFF1A\u5185\u5B58\u6BB5\u662F\u7EBF\u6027\u5185\u5B58\uFF08linear memory\uFF09\u7528\u4E8E\u5B58\u50A8\u7A0B\u5E8F\u7684\u8FD0\u884C\u65F6\u52A8\u6001\u6570\u636E\u3002\u6570\u636E\u6BB5\u7528\u4E8E\u5B58\u50A8\u521D\u59CB\u5316\u5185\u5B58\u7684\u9759\u6001\u6570\u636E\u3002\u5185\u5B58\u53EF\u4EE5\u4ECE\u5916\u90E8\u5BBF\u4E3B\u5BFC\u5165\uFF0C\u540C\u65F6\u5185\u5B58\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u5230\u5916\u90E8\u5BBF\u4E3B\u73AF\u5883\u3002
- \u8868\u6BB5\u548C\u5143\u7D20\u6BB5\uFF1A\u8868\u6BB5\u7528\u4E8E\u5B58\u50A8\u5BF9\u8C61\u5F15\u7528\uFF0C\u76EE\u524D\u5BF9\u8C61\u53EA\u80FD\u662F\u51FD\u6570\uFF0C\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u8868\u6BB5\u5B9E\u73B0\u51FD\u6570\u6307\u9488\u7684\u529F\u80FD\u3002\u5143\u7D20\u6BB5\u7528\u4E8E\u5B58\u50A8\u521D\u59CB\u5316\u8868\u6BB5\u7684\u6570\u636E\u3002\u8868\u5BF9\u8C61\u53EF\u4EE5\u4ECE\u5916\u90E8\u5BBF\u4E3B\u5BFC\u5165\uFF0C\u540C\u65F6\u8868\u5BF9\u8C61\u4E5F\u53EF\u4EE5\u5BFC\u51FA\u5230\u5916\u90E8\u5BBF\u4E3B\u73AF\u5883\u3002
- \u8D77\u59CB\u6BB5\uFF1A\u8D77\u59CB\u6BB5\u7528\u4E8E\u5B58\u50A8\u8D77\u59CB\u51FD\u6570\u7684\u7D22\u5F15\uFF0C\u5373\u6307\u5B9A\u4E86\u4E00\u4E2A\u5728\u52A0\u8F7D\u65F6\u81EA\u52A8\u8FD0\u884C\u7684\u51FD\u6570\u3002\u8D77\u59CB\u51FD\u6570\u4E3B\u8981\u4F5C\u7528\uFF1A1. \u5728\u6A21\u5757\u52A0\u8F7D\u540E\u8FDB\u884C\u521D\u59CB\u5316\u5DE5\u4F5C\uFF1B 2. \u5C06\u6A21\u5757\u53D8\u6210\u53EF\u6267\u884C\u6587\u4EF6\u3002
- \u5168\u5C40\u6BB5\uFF1A\u5168\u5C40\u6BB5\u7528\u4E8E\u5B58\u50A8\u5168\u5C40\u53D8\u91CF\u7684\u4FE1\u606F\uFF08\u5168\u5C40\u53D8\u91CF\u7684\u503C\u7C7B\u578B\u3001\u53EF\u53D8\u6027\u3001\u521D\u59CB\u5316\u8868\u8FBE\u5F0F\u7B49\uFF09\u3002
- \u51FD\u6570\u6BB5\u3001\u4EE3\u7801\u6BB5\u548C\u7C7B\u578B\u6BB5\uFF1A\u8FD9\u4E09\u4E2A\u6BB5\u5747\u662F\u7528\u4E8E\u5B58\u50A8\u8868\u8FBE\u51FD\u6570\u7684\u6570\u636E\u3002\u5176\u4E2D
  - \u7C7B\u578B\u6BB5\uFF1A\u7C7B\u578B\u6BB5\u7528\u4E8E\u5B58\u50A8\u6A21\u5757\u5185\u6240\u6709\u7684\u51FD\u6570\u7B7E\u540D\uFF08\u51FD\u6570\u7B7E\u540D\u8BB0\u5F55\u4E86\u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u548C\u6570\u91CF\uFF09\uFF0C\u6CE8\u610F\u82E5\u5B58\u5728\u591A\u4E2A\u51FD\u6570\u7684\u51FD\u6570\u7B7E\u540D\u76F8\u540C\uFF0C\u5219\u5B58\u50A8\u4E00\u4EFD\u5373\u53EF\u3002
  - \u51FD\u6570\u6BB5\uFF1A\u51FD\u6570\u6BB5\u7528\u4E8E\u5B58\u50A8\u51FD\u6570\u5BF9\u5E94\u7684\u51FD\u6570\u7B7E\u540D\u7D22\u5F15\uFF0C\u6CE8\u610F\u662F\u51FD\u6570\u7B7E\u540D\u7684\u7D22\u5F15\uFF0C\u800C\u4E0D\u662F\u51FD\u6570\u7D22\u5F15\u3002
  - \u4EE3\u7801\u6BB5\uFF1A\u4EE3\u7801\u6BB5\u7528\u4E8E\u5B58\u50A8\u51FD\u6570\u7684\u5B57\u8282\u7801\u548C\u5C40\u90E8\u53D8\u91CF\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u4F53\u5185\u7684\u5C40\u90E8\u53D8\u91CF\u548C\u4EE3\u7801\u6240\u5BF9\u5E94\u7684\u5B57\u8282\u7801\u3002
- \u5BFC\u5165\u6BB5\u548C\u5BFC\u51FA\u6BB5\uFF1A\u5BFC\u51FA\u6BB5\u7528\u4E8E\u5B58\u50A8\u5BFC\u51FA\u9879\u4FE1\u606F\uFF08\u5BFC\u51FA\u9879\u7684\u6210\u5458\u540D\u3001\u7C7B\u578B\uFF0C\u4EE5\u53CA\u5728\u5BF9\u5E94\u6BB5\u4E2D\u7684\u7D22\u5F15\u7B49\uFF09\u3002\u5BFC\u5165\u6BB5\u7528\u4E8E\u5B58\u50A8\u5BFC\u5165\u9879\u4FE1\u606F\uFF08\u5BFC\u5165\u9879\u7684\u6210\u5458\u540D\u3001\u7C7B\u578B\uFF0C\u4EE5\u53CA\u4ECE\u54EA\u4E2A\u6A21\u5757\u5BFC\u5165\u7B49\uFF09\u3002\u5BFC\u51FA/\u5BFC\u5165\u9879\u7C7B\u578B\u6709 4 \u79CD\uFF1A\u51FD\u6570\u3001\u8868\u3001\u5185\u5B58\u3001\u5168\u5C40\u53D8\u91CF\u3002
- \u81EA\u5B9A\u4E49\u6BB5\uFF1A\u81EA\u5B9A\u4E49\u6BB5\u4E3B\u8981\u7528\u4E8E\u4FDD\u5B58\u8C03\u8BD5\u7B26\u53F7\u7B49\u548C\u8FD0\u884C\u65E0\u5173\u7684\u4FE1\u606F\u3002

\u5173\u4E8E Wasm \u6A21\u5757\u4E8C\u8FDB\u5236\u683C\u5F0F\u8BE6\u7EC6\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003 [Wasm \u6A21\u5757 Binary Format](https://webassembly.github.io/spec/core/binary/modules.html)\u3002

Wasm \u6A21\u5757 wat \u6587\u672C\u683C\u5F0F \u4F7F\u7528\u4E86 \`S- \u8868\u8FBE\u5F0F\` \u7684\u5F62\u5F0F\u6765\u8868\u8FBE Wasm \u6A21\u5757\u53CA\u5176\u76F8\u5173\u5B9A\u4E49\u3002\u5173\u4E8E wat \u683C\u5F0F\u7684\u66F4\u591A\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u8003 [\u7406\u89E3 WebAssembly \u6587\u672C\u683C\u5F0F](https://developer.mozilla.org/zh-CN/docs/WebAssembly/Understanding_the_text_format)\u3002
\u4E0B\u56FE\uFF08\u56FE\u7247\u6765\u6E90 [WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7](https://github.com/mcuking/blog/issues/96/)\uFF09\u5C31\u662F\u4F7F\u7528 C \u8BED\u8A00\u7F16\u5199\u7684\u9636\u4E58\u51FD\u6570\uFF0C\u4EE5\u53CA\u5BF9\u5E94\u7684 Wasm \u6587\u672C\u683C\u5F0F\u548C\u4E8C\u8FDB\u5236\u683C\u5F0F\u3002
![img](https://img.alicdn.com/imgextra/i4/O1CN01VcoLBQ1ZcWL5XHYIR_!!6000000003215-0-tps-1892-878.jpg)

\u53EF\u4EE5\u901A\u8FC7 [WebAssembly Code Explorer](https://wasdk.github.io/wasmcodeexplorer/) \u66F4\u76F4\u89C2\u5730\u67E5\u770B Wasm \u4E8C\u8FDB\u5236\u683C\u5F0F\u548C\u6587\u672C\u683C\u5F0F\u4E4B\u95F4\u7684\u5173\u8054\u3002\u4E5F\u53EF\u4EE5\u901A\u8FC7 [wabt](https://github.com/WebAssembly/wabt) \u63D0\u4F9B\u5DE5\u5177 \uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u8FDB\u884C Wasm \u4E8C\u8FDB\u5236\u683C\u5F0F\u548C\u6587\u672C\u683C\u5F0F\u7684\u8F6C\u6362\u3002

#### 1.1.3  Wasm \u6307\u4EE4\u96C6

Wasm \u6307\u4EE4\u96C6\u5305\u542B\u5982\u4E0B\u5185\u5BB9\uFF1A
- Wasm \u6307\u4EE4\u4E3B\u8981\u5206\u4E3A\u63A7\u5236\u6307\u4EE4\u3001\u53C2\u6570\u6307\u4EE4\u3001\u53D8\u91CF\u6307\u4EE4\u3001\u5185\u5B58\u6307\u4EE4\u548C\u6570\u503C\u6307\u4EE4\uFF0C\u6BCF\u6761\u6307\u4EE4\u5305\u542B\u64CD\u4F5C\u7801\u548C\u64CD\u4F5C\u6570\u3002\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u70B9\u51FB\u67E5\u770B\u4E0B [Wasm \u6240\u6709\u7684\u64CD\u4F5C\u7801](https://pengowray.github.io/wasm-ops/), \u53EF\u89C6\u5316\u8868\u683C\u76F4\u89C2\u5730\u5C55\u793A\u4E86 Wasm \u6240\u6709\u7684\u64CD\u4F5C\u7801\u3002
- \u53EA\u6709\u56DB\u79CD\u6570\u636E\u7C7B\u578B\uFF1A i32\u3001i64\u3001f32\u3001f64
- \u6307\u4EE4\u57FA\u4E8E\u6808\uFF0C\u5E76\u4E14\u652F\u6301\u9012\u5F52\u8C03\u7528\u3002\u4F8B\u5982 i32.add \u4ECE\u6808\u5F39\u51FA\u4E24\u4E2A i32 \u7C7B\u578B\u7684\u503C\uFF0C\u5E76\u5C06\u5B83\u4EEC\u76F8\u52A0\uFF0C\u7136\u540E\u5C06\u7ED3\u679C\u538B\u5165\u6808\u3002
- \u4ECE\u5185\u5B58\u8BFB\u53D6\u6570\u636E
  - i32.load \u4ECE\u5185\u5B58\u4E2D\u8BFB\u53D6\u4E00\u4E2A i32 \u7C7B\u578B\u7684\u503C\u3002
  - i32.const value \u5C06\u4E00\u4E2A i32 \u7C7B\u578B\u7684\u503C\u538B\u5165\u6808\u3002
  - \u4ECE\u7EBF\u6027\u5185\u5B58\u8BFB\u53D6\u6570\u636E

\u5173\u4E8E\u66F4\u591A Wasm \u89E3\u91CA\u5668\u5B9E\u73B0\u539F\u7406\u7684\u53EF\u4EE5\u53C2\u8003 [WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7](https://github.com/mcuking/blog/issues/96)\u3002

### 1.2 TinyGo 

[TinyGo](https://tinygo.org/) \u662F\u4E00\u4E2A Go \u8BED\u8A00\u7F16\u8BD1\u5668\uFF0C\u5B83\u4E13\u6CE8\u4E8E\u751F\u6210\u5C0F\u578B\u3001\u9AD8\u6548\u7684 Go \u7A0B\u5E8F\uFF0C\u7279\u522B\u662F\u4E3A\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u548C WebAssembly \u73AF\u5883\u8BBE\u8BA1\u3002 TinyGo \u4E0E Go \u8BED\u8A00\u7684\u6807\u51C6\u7F16\u8BD1\u5668\u4E0D\u540C\uFF0C\u5B83\u6709\u4EE5\u4E0B\u4F18\u52BF\uFF1A

- \u751F\u6210\u5C0F\u578B\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1ATinyGo \u4F18\u5316\u4E86\u751F\u6210\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u5927\u5C0F\uFF0C\u4F7F\u5176\u975E\u5E38\u9002\u5408\u8D44\u6E90\u53D7\u9650\u7684\u73AF\u5883\u3002
- \u7B80\u5316\u7684 Go \u6807\u51C6\u5E93\uFF1ATinyGo \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7B80\u5316\u7248\u672C\u7684 Go \u6807\u51C6\u5E93\uFF0C\u51CF\u5C11\u4E86\u4F9D\u8D56\u548C\u590D\u6742\u6027\u3002TinyGo \u652F\u6301\u6807\u51C6\u5E93\u8BE6\u60C5\uFF1Ahttps://tinygo.org/docs/reference/lang-support/stdlib/ \u3002
- \u8DE8\u5E73\u53F0\u7F16\u8BD1\uFF1ATinyGo \u652F\u6301\u8DE8\u5E73\u53F0\u7F16\u8BD1\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u4E3A\u4E0D\u540C\u7684\u76EE\u6807\u5E73\u53F0\u751F\u6210\u4EE3\u7801\u3002
- \u652F\u6301 WebAssembly\uFF1A\u901A\u8FC7\u4F7F\u7528 TinyGo\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u4E3A WebAssembly \u73AF\u5883\u7F16\u5199\u9AD8\u6548\u7684 Go \u5E94\u7528\u7A0B\u5E8F\uFF0C\u540C\u65F6\u5229\u7528 Go \u8BED\u8A00\u7684\u7B80\u6D01\u6027\u548C\u6613\u7528\u6027\u3002

\u201C\u4E3A\u4EC0\u4E48\u4E0D\u4F7F\u7528\u5B98\u65B9 Go \u7F16\u8BD1\u5668\uFF1F\u201D\u7684\u95EE\u9898\uFF0C\u5982\u679C\u5BF9\u7EC6\u8282\u611F\u5174\u8DA3\uFF0C\u8BF7\u53C2\u8003 Go \u4ED3\u5E93\u4E2D\u7684\u76F8\u5173 issue\uFF1A

- https://github.com/golang/go/issues/25612
- https://github.com/golang/go/issues/31105
- https://github.com/golang/go/issues/38248

\u8FD9\u4E9B issue \u8BA8\u8BBA\u4E86\u5B98\u65B9 Go \u7F16\u8BD1\u5668\u5728\u751F\u6210 Wasm \u652F\u6301\u65B9\u9762\u7684\u9650\u5236\u548C\u8FDB\u5C55\u3002 TinyGo \u4F5C\u4E3A\u4E00\u4E2A\u66FF\u4EE3\u65B9\u6848\uFF0C\u80FD\u591F\u751F\u6210\u9002\u5408 [Proxy-Wasm ABI](https://github.com/proxy-wasm/spec) \u89C4\u8303\u7684 Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u8FD9\u4F7F\u5F97\u5B83\u6210\u4E3A\u5F00\u53D1 Proxy-Wasm \u5E94\u7528\u7A0B\u5E8F\u7684\u7406\u60F3\u9009\u62E9\u3002

### 1.3 Proxy-Wasm Go SDK

[Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk) \u4F9D\u8D56\u4E8E TinyGo, \u540C\u65F6 Proxy-Wasm Go SDK \u662F\u57FA\u4E8E [Proxy-Wasm ABI](https://github.com/proxy-wasm/spec) \u89C4\u8303\u4F7F\u7528 Go \u7F16\u7A0B\u8BED\u8A00\u6269\u5C55\u7F51\u7EDC\u4EE3\u7406\uFF08\u4F8B\u5982 Envoyproxy\uFF09\u7684 SDK\uFF0C \u800C Proxy-Wasm ABI \u5B9A\u4E49\u4E86\u7F51\u7EDC\u4EE3\u7406\u548C\u5728\u7F51\u7EDC\u4EE3\u7406\u5185\u90E8\u8FD0\u884C\u7684 Wasm \u865A\u62DF\u673A\u4E4B\u95F4\u7684\u63A5\u53E3\u3002
\u901A\u8FC7\u8FD9\u4E2A SDK\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5730\u751F\u6210\u7B26\u5408 Proxy-Wasm \u89C4\u8303\u7684 Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u800C\u65E0\u9700\u4E86\u89E3 Proxy-Wasm ABI \u89C4\u8303\uFF0C\u540C\u65F6\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u4F9D\u8D56\u8FD9\u4E2A SDK \u7684 Go API \u6765\u5F00\u53D1\u63D2\u4EF6\u6269\u5C55 Enovy \u529F\u80FD\u3002


## 2 Wasm VM\u3001\u63D2\u4EF6\u548C Envoy \u914D\u7F6E

Wasm \u865A\u62DF\u673A\uFF08Wasm VM\uFF09 \u6216\u7B80\u79F0 VM \u6307\u7684\u662F\u52A0\u8F7D Wasm \u7A0B\u5E8F\u7684\u5B9E\u4F8B\u3002 \u5728 Envoy \u4E2D\uFF0CVM \u901A\u5E38\u5728\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u521B\u5EFA\u5E76\u76F8\u4E92\u9694\u79BB\u3002\u56E0\u6B64 Wasm \u7A0B\u5E8F\u5C06\u590D\u5236\u5230 Envoy \u6240\u521B\u5EFA\u7684\u7EBF\u7A0B\u91CC\uFF0C\u5E76\u5728\u8FD9\u4E9B\u865A\u62DF\u673A\u4E0A\u52A0\u8F7D\u5E76\u6267\u884C\u3002
\u63D2\u4EF6\u63D0\u4F9B\u4E86\u4E00\u79CD\u7075\u6D3B\u7684\u65B9\u5F0F\u6765\u6269\u5C55\u548C\u81EA\u5B9A\u4E49 Envoy \u7684\u884C\u4E3A\u3002Proxy-Wasm \u89C4\u8303\u5141\u8BB8\u5728\u6BCF\u4E2A VM \u4E2D\u914D\u7F6E\u591A\u4E2A\u63D2\u4EF6\u3002\u56E0\u6B64\u4E00\u4E2A VM \u53EF\u4EE5\u88AB\u591A\u4E2A\u63D2\u4EF6\u5171\u540C\u4F7F\u7528\u3002Envoy \u4E2D\u6709\u4E09\u79CD\u7C7B\u578B\u63D2\u4EF6: \`Http Filter\`\u3001\`Network Filter\` \u548C \`Wasm Service\`\u3002

- \`Http Filter\` \u662F\u4E00\u79CD\u5904\u7406 Http \u534F\u8BAE\u7684\u63D2\u4EF6\uFF0C\u4F8B\u5982\u64CD\u4F5C Http \u8BF7\u6C42\u5934\u3001\u6B63\u6587\u7B49\u3002
- \`Network Filter\` \u662F\u4E00\u79CD\u5904\u7406 Tcp \u534F\u8BAE\u7684\u63D2\u4EF6\uFF0C\u4F8B\u5982\u64CD\u4F5C Tcp \u6570\u636E\u5E27\u3001\u8FDE\u63A5\u5EFA\u7ACB\u7B49\u3002
- \`Wasm Service\` \u662F\u5728\u5355\u4F8B VM \u4E2D\u8FD0\u884C\u7684\u63D2\u4EF6\u7C7B\u578B\uFF08\u5373\u5728 Envoy \u4E3B\u7EBF\u7A0B\u4E2D\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF09\u3002\u5B83\u4E3B\u8981\u7528\u4E8E\u6267\u884C\u4E0E \`Network Filter\` \u6216 \`Http Filter\` \u5E76\u884C\u7684\u4E00\u4E9B\u989D\u5916\u5DE5\u4F5C\uFF0C\u5982\u805A\u5408\u6307\u6807\u3001\u65E5\u5FD7\u7B49\u3002\u8FD9\u6837\u7684\u5355\u4F8B VM \u672C\u8EAB\u4E5F\u88AB\u79F0\u4E3A \`Wasm Service\`\u3002

\u5176\u67B6\u6784\u5982\u4E0B\u56FE\uFF08\u56FE\u7247\u6765\u6E90 [Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)\uFF09\uFF1A
![img](https://img.alicdn.com/imgextra/i4/O1CN018UJzEX1YlqnAmBV4u_!!6000000003100-0-tps-2321-1190.jpg)


### 2.1 Envoy \u914D\u7F6E

\u6240\u6709\u7C7B\u578B\u63D2\u4EF6\u7684\u914D\u7F6E\u90FD\u5305\u542B \`vm_config\` \u7528\u4E8E\u914D\u7F6E Wasm VM\uFF0C \u548C \`configuration\` \u7528\u4E8E\u914D\u7F6E\u63D2\u4EF6\u5B9E\u4F8B\u3002

\`\`\`yaml
vm_config:
  vm_id: "foo"
  runtime: "envoy.wasm.runtime.v8"
  configuration:
    "@type": type.googleapis.com/google.protobuf.StringValue
    value: '{"my-vm-env": "dev"}'
  code:
    local:
      filename: "example.wasm"
configuration:
  "@type": type.googleapis.com/google.protobuf.StringValue
  value: '{"my-plugin-config": "bar"}'
\`\`\`

\u914D\u7F6E\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u5B57\u6BB5                       | \u63CF\u8FF0                                            |
|--------------------------|-----------------------------------------------|
| \`vm_config\`              | \u914D\u7F6E Wasm VM                                    |
| \`vm_config.vm_id\`        | \u7528\u4E8E\u8DE8 VM \u901A\u4FE1\u7684\u8BED\u4E49\u9694\u79BB\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003 \u8DE8 VM \u901A\u4FE1 \u90E8\u5206\u3002              |
| \`vm_config.runtime\`      | \u6307\u5B9A Wasm \u8FD0\u884C\u65F6\u7C7B\u578B\u3002\u9ED8\u8BA4\u4E3A envoy.wasm.runtime.v8\u3002      |
| \`vm_config.configuration\` | \u7528\u4E8E\u8BBE\u7F6E VM \u7684\u914D\u7F6E\u6570\u636E                                 |
| \`vm_config.code\`         | Wasm \u4E8C\u8FDB\u5236\u6587\u4EF6\u7684\u4F4D\u7F6E                                 |
| \`configuration\`          | \u5BF9\u5E94\u4E8E\u6BCF\u4E2A\u63D2\u4EF6\u5B9E\u4F8B\u914D\u7F6E\uFF08\u5728\u4E0B\u9762\u4ECB\u7ECD\u7684 PluginContext\uFF09\u3002 |

> \u5B8C\u5168\u76F8\u540C\u7684 vm_config \u914D\u7F6E\u7684\u591A\u4E2A\u63D2\u4EF6\u5B83\u4EEC\u4E4B\u95F4\u5171\u4EAB\u4E00\u4E2A Wasm VM\uFF0C\u5355\u4E2A Wasm VM \u7528\u4E8E\u591A\u4E2A Http Filter \u6216 Network Filter\uFF0C\u53EF\u4EE5\u63D0\u5347\u5185\u5B58/CPU \u8D44\u6E90\u6548\u7387\u3001\u964D\u4F4E\u542F\u52A8\u5EF6\u8FDF\u3002
> \u5B8C\u6574\u7684 Envoy API \u914D\u7F6E\u53EF\u4EE5 [\u53C2\u8003 Envoy \u6587\u6863](https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/wasm/v3/wasm.proto#envoy-v3-api-msg-extensions-wasm-v3-pluginconfig)\u3002

Envoy Wasm \u8FD0\u884C\u65F6\u76EE\u524D\u6709\u4EE5\u4E0B\u51E0\u79CD\u9009\u62E9:
- envoy.wasm.runtime.null\uFF1A\u8FD9\u8868\u793A\u4E00\u4E2A\u7A7A\u7684\u6C99\u76D2\uFF08null sandbox\uFF09\u73AF\u5883\uFF0CWasm \u6A21\u5757\u5FC5\u987B\u88AB\u7F16\u8BD1\u5E76\u94FE\u63A5\u5230 Envoy \u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u4E2D\u3002\u8FD9\u79CD\u65B9\u5F0F\u9002\u7528\u4E8E\u90A3\u4E9B\u9700\u8981\u5C06 Wasm \u6A21\u5757\u4E0E Envoy \u4E8C\u8FDB\u5236\u6587\u4EF6\u4E00\u8D77\u5206\u53D1\u7684\u90E8\u7F72\u573A\u666F\u3002
- envoy.wasm.runtime.v8: \u57FA\u4E8E V8 JavaScript \u5F15\u64CE\u7684\u8FD0\u884C\u65F6\u3002
- envoy.wasm.runtime.wamr: WAMR (WebAssembly Micro Runtime) \u8FD0\u884C\u65F6\u3002
- envoy.wasm.runtime.wasmtime:  Wasmtime \u8FD0\u884C\u65F6\u3002

\u4E0D\u540C\u7684\u8FD0\u884C\u65F6\u6709\u5404\u81EA\u7684\u4F18\u7F3A\u70B9\uFF0C\u6BD4\u5982 [V8](https://v8.dev/) \u6027\u80FD\u8F83\u597D\u4F46\u5BB9\u5668\u4F53\u79EF\u8F83\u5927,[WAMR](https://github.com/bytecodealliance/wasm-micro-runtime) \u548C [wasmtime](https://wasmtime.dev/) \u5219\u76F8\u5BF9\u8F7B\u91CF\u3002

> [\u5F85\u8865\u5145\uFF1F] envoy v8 runtime \u5982\u4F55\u52A0\u8F7D wasm \u548C \u5982\u4F55\u548C envoy \u4EA4\u4E92\u539F\u7406\u3002

### 2.2 Http Filter \u914D\u7F6E

Http Filter \u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u4E3A \`envoy.filter.http.wasm\`\uFF0CHttp Filter \u63D2\u4EF6\u53EF\u4EE5\u5904\u7406 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002 \u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`yaml
http_filters:
  - name: envoy.filters.http.wasm
    typed_config:
      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
      value:
        config:
          configuration:
            "@type": type.googleapis.com/google.protobuf.StringValue
            value: |
              {
                "header": "x-wasm-header",
                "value": "demo-wasm"
              }
          vm_config:
            runtime: "envoy.wasm.runtime.v8"
            code:
              local:
                filename: "./examples/http_headers/main.wasm"
  - name: envoy.filters.http.router
    typed_config:
      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
\`\`\`

\u8FD9\u65F6 Envoy \u4F1A\u5728\u6BCF\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2A Wasm \u865A\u62DF\u673A\uFF0C\u8BE5\u865A\u62DF\u673A\u5C06\u4E13\u95E8\u7528\u4E8E\u5904\u7406\u8BE5\u7EBF\u7A0B\u4E0A\u7684 HTTP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002\u6BCF\u4E2A\u865A\u62DF\u673A\u90FD\u4F1A\u52A0\u8F7D\u548C\u6267\u884C WebAssembly \u4EE3\u7801\uFF0C\u5141\u8BB8\u5BF9 HTTP \u6D41\u91CF\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\uFF0C\u5982\u4FEE\u6539\u5934\u4FE1\u606F\u3001\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u4F53\u7B49\u3002 
\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/http_headers/envoy.yaml) \u3002


### 2.3 Network Filter \u914D\u7F6E

\`Network Filter\` \u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u4E3A \`envoy.filters.network.wasm\`\uFF0C\`Network Filter\` \u63D2\u4EF6\u53EF\u4EE5\u5904\u7406 TCP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002 \u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
filter_chains:
- filters:
    - name: envoy.filters.network.wasm
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm
        config:
          vm_config: { ... }
          # ... plugin config follows
    - name: envoy.tcp_proxy
\`\`\`

\u8FD9\u65F6 Envoy \u4F1A\u5728\u6BCF\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2A Wasm \u865A\u62DF\u673A\uFF0C\u8BE5\u865A\u62DF\u673A\u5C06\u4E13\u95E8\u7528\u4E8E\u5904\u7406\u8BE5\u7EBF\u7A0B\u4E0A\u7684 TCP \u8BF7\u6C42\u548C\u54CD\u5E94\u3002\u6BCF\u4E2A\u865A\u62DF\u673A\u90FD\u4F1A\u52A0\u8F7D\u548C\u6267\u884C WebAssembly \u4EE3\u7801\uFF0C\u5141\u8BB8\u5BF9 TCP \u6D41\u91CF\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\u7B49\u3002
\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/network/envoy.yaml) \u3002


### 2.4 Wasm Service \u914D\u7F6E

\`Wasm Service\` \u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u4E3A \`envoy.bootstrap.wasm\`\u3002\u63D2\u4EF6\u5728 Envoy \u542F\u52A8\u65F6\u52A0\u8F7D\u7684\uFF0C\u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
bootstrap_extensions:
- name: envoy.bootstrap.wasm
  typed_config:
    "@type": type.googleapis.com/envoy.extensions.wasm.v3.WasmService
    singleton: true
    config:
      vm_config: { ... }
      # ... plugin config follows
\`\`\`

\`singleton\` \u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u751F\u6210\u865A\u62DF\u673A\uFF08VM\uFF09\u662F\u5355\u4F8B\uFF0C\u5E76\u4E14\u8FD0\u884C\u5728 Envoy \u7684\u4E3B\u7EBF\u7A0B\u4E0A\uFF0C\u56E0\u6B64\u5B83\u4E0D\u4F1A\u963B\u585E\u4EFB\u4F55\u5DE5\u4F5C\u7EBF\u7A0B\u3002

\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/envoy.yaml) \u3002

### 2.5 \u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A VM

\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A VM\uFF0C\u5176\u4E3B\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
static_resources:
  listeners:
    - name: http-header-operation
      address:
        socket_address:
          address: 0.0.0.0
          port_value: 18000
      filter_chains:
        - filters:
            - name: envoy.http_connection_manager
              typed_config:
                # ....
                http_filters:
                  - name: envoy.filters.http.wasm
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      config:
                        configuration:
                          "@type": type.googleapis.com/google.protobuf.StringValue
                          value: "http-header-operation"
                        vm_config:
                          vm_id: "my-vm-id"
                          runtime: "envoy.wasm.runtime.v8"
                          configuration:
                            "@type": type.googleapis.com/google.protobuf.StringValue
                            value: "my-vm-configuration"
                          code:
                            local:
                              filename: "all-in-one.wasm"
                  - name: envoy.filters.http.router

    - name: http-body-operation
      address:
        socket_address:
          address: 0.0.0.0
          port_value: 18001
      filter_chains:
        - filters:
            - name: envoy.http_connection_manager
              typed_config:
                # ....
                http_filters:
                  - name: envoy.filters.http.wasm
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      config:
                        configuration:
                          "@type": type.googleapis.com/google.protobuf.StringValue
                          value: "http-body-operation"
                        vm_config:
                          vm_id: "my-vm-id"
                          runtime: "envoy.wasm.runtime.v8"
                          configuration:
                            "@type": type.googleapis.com/google.protobuf.StringValue
                            value: "my-vm-configuration"
                          code:
                            local:
                              filename: "all-in-one.wasm"
                  - name: envoy.filters.http.router

    - name: tcp-total-data-size-counter
      address:
        socket_address:
          address: 0.0.0.0
          port_value: 18002
      filter_chains:
        - filters:
            - name: envoy.filters.network.wasm
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm
                config:
                  configuration:
                    "@type": type.googleapis.com/google.protobuf.StringValue
                    value: "tcp-total-data-size-counter"
                    vm_config:
                      vm_id: "my-vm-id"
                      runtime: "envoy.wasm.runtime.v8"
                      configuration:
                        "@type": type.googleapis.com/google.protobuf.StringValue
                        value: "my-vm-configuration"
                      code:
                        local:
                          filename: "all-in-one.wasm"
            - name: envoy.tcp_proxy
              typed_config: # ...
\`\`\`



\u5728 \`18000\` \u548C \`18001\` \u76D1\u542C\u5668\u4E0A\u7684 Http \u8FC7\u6EE4\u5668\u94FE\u4EE5\u53CA \`18002\` \u4E0A\u7684\u7F51\u7EDC\u8FC7\u6EE4\u5668\u94FE\u4E2D\uFF0Cvm_config \u5B57\u6BB5\u90FD\u662F\u76F8\u540C\u7684\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CEnvoy \u4E2D\u7684\u591A\u4E2A\u63D2\u4EF6\u5C06\u4F7F\u7528\u540C\u4E00\u4E2A Wasm \u865A\u62DF\u673A\u3002 \u4E3A\u4E86\u91CD\u7528\u76F8\u540C\u7684 VM\uFF0C\u6240\u6709\u7684 vm_config.vm_id\u3001vm_config.runtime\u3001vm_config.configuration \u548C vm_config.code \u5FC5\u987B\u76F8\u540C\u3002

\u901A\u8FC7\u8FD9\u79CD\u914D\u7F6E\u65B9\u5F0F\u5141\u8BB8\u4E3A\u4E0D\u540C\u7684\u8FC7\u6EE4\u5668\u91CD\u7528\u540C\u4E00\u4E2A Wasm \u865A\u62DF\u673A\uFF0C\u901A\u8FC7\u4E3A\u6BCF\u4E2A \`PluginContext\` \u63D0\u4F9B\u4E86\u4E00\u4E2A\u9694\u79BB\u7684\u73AF\u5883\uFF0C\u4F7F\u5F97\u63D2\u4EF6\u80FD\u591F\u72EC\u7ACB\u8FD0\u884C\uFF0C\u540C\u65F6\u5171\u4EAB\u540C\u4E00\u4E2A\u865A\u62DF\u673A\u7684\u6267\u884C\u73AF\u5883\uFF0C\u865A\u62DF\u673A\u53EA\u9700\u8981\u52A0\u8F7D\u548C\u521D\u59CB\u5316\u4E00\u6B21\u5373\u53EF\u4E3A\u591A\u4E2A\u63D2\u4EF6\u670D\u52A1\uFF0C\u8FD9\u4E0D\u4EC5\u53EF\u4EE5\u51CF\u5C11\u5185\u5B58\u5360\u7528\uFF0C\u8FD8\u53EF\u4EE5\u964D\u4F4E\u542F\u52A8\u65F6\u7684\u5EF6\u8FDF\u3002

\u5B8C\u6574\u7684\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/envoy.yaml) \u3002

## 3 Proxy-Wasm Go SDK API

\u4E0A\u9762\u4ECB\u7ECD\u63D2\u4EF6\u6982\u5FF5\u548C\u63D2\u4EF6\u914D\u7F6E\uFF0C\u4E0B\u9762\u5F00\u59CB\u6DF1\u5165\u63A2\u8BA8 Proxy-Wasm Go SDK \u7684 API\u3002

### 3.1 Contexts

\u4E0A\u4E0B\u6587\uFF08Contexts\uFF09 \u662F Proxy-Wasm Go SDK \u4E2D\u7684\u63A5\u53E3\u96C6\u5408\uFF0C\u5B83\u4EEC\u5728  [types](https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/proxywasm/types)  \u5305\u4E2D\u5B9A\u4E49\u3002
\u6709\u56DB\u79CD\u7C7B\u578B\u7684\u4E0A\u4E0B\u6587\uFF1AVMContext\u3001PluginContext\u3001TcpContext \u548C HttpContext\u3002\u5B83\u4EEC\u7684\u5173\u7CFB\u5982\u4E0B\u56FE\uFF1A
\`\`\`
                    Wasm Virtual Machine
                      (.vm_config.code)
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Your program (.vm_config.code)                TcpContext      \u2502
\u2502          \u2502                                  \u2571 (Tcp stream)     \u2502
\u2502          \u2502 1: 1                            \u2571                   \u2502
\u2502          \u2502         1: N                   \u2571 1: N               \u2502
\u2502      VMContext  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  PluginContext                      \u2502
\u2502                                (Plugin)   \u2572 1: N               \u2502
\u2502                                            \u2572                   \u2502
\u2502                                             \u2572  HttpContext     \u2502
\u2502                                               (Http stream)    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
\`\`\`

1) VMContext \u5BF9\u5E94\u4E8E\u6BCF\u4E2A .vm_config.code\uFF0C\u6BCF\u4E2A VM \u4E2D\u53EA\u5B58\u5728\u4E00\u4E2A VMContext\u3002
2) VMContext \u662F PluginContexts \u7684\u7236\u4E0A\u4E0B\u6587\uFF0C\u8D1F\u8D23\u521B\u5EFA PluginContext\u3002
3) PluginContext \u5BF9\u5E94\u4E8E\u4E00\u4E2A Plugin \u5B9E\u4F8B\u3002\u4E00\u4E2A PluginContext \u5BF9\u5E94\u4E8E Http Filter\u3001Network Filter\u3001Wasm Service \u7684 configuration \u5B57\u6BB5\u914D\u7F6E\u3002
4) PluginContext \u662F TcpContext \u548C HttpContext \u7684\u7236\u4E0A\u4E0B\u6587\uFF0C\u5E76\u4E14\u8D1F\u8D23\u4E3A \u5904\u7406 Http \u6D41\u7684Http Filter \u6216 \u5904\u7406 Tcp \u6D41\u7684 Network Filter \u521B\u5EFA\u4E0A\u4E0B\u6587\u3002
5) TcpContext \u8D1F\u8D23\u5904\u7406\u6BCF\u4E2A Tcp \u6D41\u3002
6) HttpContext \u8D1F\u8D23\u5904\u7406\u6BCF\u4E2A Http \u6D41\u3002

\u56E0\u6B64\uFF0C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u8981\u5B9E\u73B0 \`VMContext\` \u548C \`PluginContext\`\u3002 \u540C\u65F6 \`Http Filter\` \u6216 \`Network Filter\`\uFF0C\u8981\u5206\u522B\u5B9E\u73B0 \`HttpContext\` \u6216 \`TcpContext\`\u3002

\u9996\u5148 VMContext \u5B9A\u4E49\u5982\u4E0B\uFF1A

\`\`\`go
type VMContext interface {
	// OnVMStart \u5728 VM \u521B\u5EFA\u548C\u8C03\u7528 main \u51FD\u6570\u540E\u88AB\u8C03\u7528\u3002
	// \u5728\u6B64\u8C03\u7528\u671F\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetVMConfiguration \u83B7\u53D6\u5728 vm_config.configuration \u8BBE\u7F6E\u7684\u914D\u7F6E\u3002
	// \u8FD9\u4E3B\u8981\u7528\u4E8E\u6267\u884C Wasm VM \u8303\u56F4\u5185\u7684\u521D\u59CB\u5316\u3002
	OnVMStart(vmConfigurationSize int) OnVMStartStatus

	// NewPluginContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A\u63D2\u4EF6\u914D\u7F6E\u521B\u5EFA PluginContext\u3002
	NewPluginContext(contextID uint32) PluginContext
}
\`\`\`

VMContext \u8D1F\u8D23\u901A\u8FC7 NewPluginContext \u65B9\u6CD5\u521B\u5EFA PluginContext\u3002\u540C\u65F6\u5728 VM \u542F\u52A8\u9636\u6BB5\u8C03\u7528 OnVMStart\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 \`GetVMConfiguration\` hostcall API \u83B7\u53D6 vm_config.configuration \u7684\u503C\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u8FDB\u884C VM \u8303\u56F4\u5185\u7684\u63D2\u4EF6\u521D\u59CB\u5316\u5E76\u63A7\u5236 VMContext \u7684\u884C\u4E3A\u3002

PluginContext\uFF0C\u5B9A\u4E49\u5982\u4E0B\uFF08\u7701\u7565\u4E86\u4E00\u4E9B\u65B9\u6CD5\uFF09\uFF1A
\`\`\`go
type PluginContext interface {
	// OnPluginStart \u5728\u6240\u6709\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E0A\u8C03\u7528\uFF08\u5982\u679C\u5728\u8FD9\u662F VM \u4E0A\u4E0B\u6587\uFF0C\u5219\u5728 OnVmStart \u4E4B\u540E\uFF09\u3002
	// \u5728\u6B64\u8C03\u7528\u671F\u95F4\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetPluginConfiguration \u83B7\u53D6 envoy.yaml \u4E2D config.configuration \u8BBE\u7F6E\u7684\u914D\u7F6E\u3002
	OnPluginStart(pluginConfigurationSize int) OnPluginStartStatus

	// \u4EE5\u4E0B\u51FD\u6570\u7528\u4E8E\u5728\u6D41\u4E0A\u521B\u5EFA\u4E0A\u4E0B\u6587\uFF0C
	// *\u5FC5\u987B* \u5B9E\u73B0\u5B83\u4EEC\u4E2D\u7684\u4EFB\u4E00\u4E2A\uFF0C\u5BF9\u5E94\u4E8E\u6269\u5C55\u70B9\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u914D\u7F6E\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u5728 Http \u8FC7\u6EE4\u5668\u4E0A\u8FD0\u884C\uFF0C\u90A3\u4E48\u5FC5\u987B\u5B9E\u73B0 NewHttpContext\u3002
	// \u5BF9 Tcp \u8FC7\u6EE4\u5668\u4E5F\u662F\u5982\u6B64\u3002
	//
	// NewTcpContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A Tcp \u6D41\u521B\u5EFA TcpContext\u3002
	NewTcpContext(contextID uint32) TcpContext
	// NewHttpContext \u7528\u4E8E\u4E3A\u6BCF\u4E2A Http \u6D41\u521B\u5EFA HttpContext\u3002
	NewHttpContext(contextID uint32) HttpContext
}
\`\`\`

\`PluginContext\` \u6709 \`OnPluginStart\` \u65B9\u6CD5\uFF0C\u521B\u5EFA\u63D2\u4EF6\u65F6\u8C03\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7 GetPluginConfiguration hostcall API \u83B7\u53D6 plugin config \u4E2D configuration \u5B57\u6BB5\u7684\u503C\u3002
\u53E6\u5916 \`PluginContext\` \u6709 \`NewTcpContext\` \u548C \`NewHttpContext\` \u65B9\u6CD5\uFF0C\u4E3A\u6BCF\u4E2A Http \u6216 Tcp \u6D41\u521B\u5EFA\u4E0A\u4E0B\u6587\u65F6\u8C03\u7528\u3002 \u5173\u4E8E HttpContext \u548C TcpContext \u7684\u8BE6\u7EC6\u5B9A\u4E49\u8BF7\u53C2\u8003 [context.go](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/types/context.go) \u3002

### 3.2 Hostcall API

Hostcall API \u662F\u6307\u5728 Wasm \u6A21\u5757\u5185\u8C03\u7528 Envoy \u63D0\u4F9B\u7684\u529F\u80FD\u3002\u8FD9\u4E9B\u529F\u80FD\u901A\u5E38\u7528\u4E8E\u83B7\u53D6\u5916\u90E8\u6570\u636E\u6216\u4E0E Envoy \u4EA4\u4E92\u3002\u5728\u5F00\u53D1 Wasm \u63D2\u4EF6\u65F6\uFF0C\u9700\u8981\u8BBF\u95EE\u7F51\u7EDC\u8BF7\u6C42\u7684\u5143\u6570\u636E\u3001\u4FEE\u6539\u8BF7\u6C42\u6216\u54CD\u5E94\u5934\u3001\u8BB0\u5F55\u65E5\u5FD7\u7B49\uFF0C\u8FD9\u4E9B\u90FD\u53EF\u4EE5\u901A\u8FC7 Hostcall API \u6765\u5B9E\u73B0\u3002
Hostcall API \u5728 proxywasm \u5305\u7684 [hostcall.go](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/hostcall.go) \u4E2D\u5B9A\u4E49\u3002
Hostcall API \u5305\u62EC\u914D\u7F6E\u548C\u521D\u59CB\u5316\u3001\u5B9A\u65F6\u5668\u8BBE\u7F6E\u3001\u4E0A\u4E0B\u6587\u7BA1\u7406\u3001\u63D2\u4EF6\u5B8C\u6210\u3001\u5171\u4EAB\u961F\u5217\u7BA1\u7406\u3001Redis \u64CD\u4F5C\u3001Http \u8C03\u7528\u3001TCP \u6D41\u64CD\u4F5C\u3001HTTP \u8BF7\u6C42/\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C\u3001\u5171\u4EAB\u6570\u636E\u64CD\u4F5C\u3001\u65E5\u5FD7\u64CD\u4F5C\u3001\u5C5E\u6027\u548C\u5143\u6570\u636E\u64CD\u4F5C\u3001\u6307\u6807\u64CD\u4F5C\u3002\u5177\u4F53\u51FD\u6570\u540D\u79F0\u548C\u63CF\u8FF0\u5982\u4E0B\uFF1A

#### 1.\u914D\u7F6E\u548C\u521D\u59CB\u5316
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`GetVMConfiguration\`           | \u83B7\u53D6\u5728 \`vm_config.configuration\` \u5B57\u6BB5\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.PluginContext.OnVMStart\` \u8C03\u7528\u671F\u95F4\u53EF\u7528\u3002 |
| \`GetPluginConfiguration\`       | \u83B7\u53D6\u5728 \`config.configuration\` \u5B57\u6BB5\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.PluginContext.OnPluginStart\` \u8C03\u7528\u671F\u95F4\u53EF\u7528\u3002 |

#### 2.\u5B9A\u65F6\u5668\u8BBE\u7F6E
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`SetTickPeriodMilliSeconds\`     | \u8BBE\u7F6E \`types.PluginContext.OnTick\` \u8C03\u7528\u7684tick\u95F4\u9694\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 \`types.PluginContext\` \u6709\u6548\u3002 |

#### 3.\u4E0A\u4E0B\u6587\u7BA1\u7406
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`SetEffectiveContext\`          | \u8BBE\u7F6E\u6709\u6548\u4E0A\u4E0B\u6587\u4E3A \`context_id\`\u3002\u901A\u5E38\u7528\u4E8E\u5728\u63A5\u6536\u5230 \`types.PluginContext.OnQueueReady\` \u6216 \`types.PluginContext.OnTick\` \u540E\u66F4\u6539\u4E0A\u4E0B\u6587\u3002 |

#### 4.\u63D2\u4EF6\u5B8C\u6210
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                                                |
|--------------------------------|-----------------------------------------------------------------------------------|
| \`PluginDone\`                   | \u5F53 \`OnPluginDone\` \u8FD4\u56DE false\uFF0C\u8868\u793A\u63D2\u4EF6\u5904\u4E8E\u5F85\u5B9A\u72B6\u6001\uFF0C\u5728\u5220\u9664\u4E4B\u524D\u5FC5\u987B\u8C03\u7528\u6B64\u51FD\u6570\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 \`types.PluginContext\` \u6709\u6548\u3002 |

#### 5.\u5171\u4EAB\u961F\u5217\u7BA1\u7406
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                        |
|--------------------------------|-------------------------------------------------------------|
| \`RegisterSharedQueue\`         | \u5728\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u5171\u4EAB\u961F\u5217\u3002 |
| \`ResolveSharedQueue\`           | \u83B7\u53D6\u7ED9\u5B9A \`vmID\` \u548C \`queueName\` \u7684\u961F\u5217ID\u3002 |
| \`EnqueueSharedQueue\`           | \u5C06\u6570\u636E\u6392\u961F\u5230\u7ED9\u5B9A\u961F\u5217ID\u7684\u5171\u4EAB\u961F\u5217\u3002 |
| \`DequeueSharedQueue\`           | \u4ECE\u7ED9\u5B9A\u961F\u5217ID\u7684\u5171\u4EAB\u961F\u5217\u4E2D\u51FA\u961F\u6570\u636E\u3002 |

#### 6.Redis \u64CD\u4F5C
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`RedisInit\`                    | \u521D\u59CB\u5316Redis\u8FDE\u63A5\u3002                                           |
| \`DispatchRedisCall\`            | \u53D1\u9001Redis\u8C03\u7528\u3002                                           |
| \`GetRedisCallResponse\`         | \u83B7\u53D6Redis\u8C03\u7528\u54CD\u5E94\u3002                                       |

#### 7.HTTP \u8C03\u7528
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`DispatchHttpCall\`             | \u5411\u8FDC\u7A0B\u96C6\u7FA4\u5206\u6D3EHTTP\u8C03\u7528\u3002\u6B64\u529F\u80FD\u53EF\u88AB\u6240\u6709\u4E0A\u4E0B\u6587\u4F7F\u7528\u3002 |
| \`GetHttpCallResponseHeaders\`   | \u7528\u4E8E\u68C0\u7D22\u7531\u8FDC\u7A0B\u96C6\u7FA4\u8FD4\u56DE\u7684HTTP\u54CD\u5E94\u5934\uFF0C\u6B64\u529F\u80FD\u4EC5\u5728\u4F20\u9012\u7ED9 \`DispatchHttpCall\` \u7684 "callback" \u51FD\u6570\u4E2D\u53EF\u7528\u3002 |
| \`GetHttpCallResponseBody\`     | \u7528\u4E8E\u68C0\u7D22\u7531\u8FDC\u7A0B\u96C6\u7FA4\u8FD4\u56DE\u7684HTTP\u54CD\u5E94\u4F53\uFF0C\u6B64\u529F\u80FD\u4EC5\u5728\u4F20\u9012\u7ED9 \`DispatchHttpCall\` \u7684 "callback" \u51FD\u6570\u4E2D\u53EF\u7528\u3002 |
| \`GetHttpCallResponseTrailers\`  | \u7528\u4E8E\u68C0\u7D22\u7531\u8FDC\u7A0B\u96C6\u7FA4\u8FD4\u56DE\u7684HTTP\u54CD\u5E94\u5C3E\u968F\u5934\uFF0C\u6B64\u529F\u80FD\u4EC5\u5728\u4F20\u9012\u7ED9 \`DispatchHttpCall\` \u7684 "callback" \u51FD\u6570\u4E2D\u53EF\u7528\u3002 |

#### 8.TCP \u6D41\u64CD\u4F5C
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`GetDownstreamData\`           | \u7528\u4E8E\u68C0\u7D22\u5728\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnDownstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`AppendDownstreamData\`         | \u5C06\u7ED9\u5B9A\u5B57\u8282\u8FFD\u52A0\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnDownstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`PrependDownstreamData\`        | \u5C06\u7ED9\u5B9A\u5B57\u8282\u524D\u7F00\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnDownstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceDownstreamData\`        | \u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0B\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnDownstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetUpstreamData\`              | \u7528\u4E8E\u68C0\u7D22\u5728\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnUpstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`AppendUpstreamData\`           | \u5C06\u7ED9\u5B9A\u5B57\u8282\u8FFD\u52A0\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnUpstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`PrependUpstreamData\`          | \u5C06\u7ED9\u5B9A\u5B57\u8282\u524D\u7F00\u5230\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnUpstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceUpstreamData\`          | \u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362\u5BBF\u4E3B\u4E2D\u7F13\u51B2\u7684TCP\u4E0A\u6E38\u6570\u636E\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.TcpContext.OnUpstreamData\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`ContinueTcpStream\`            | \u5728\u8FD4\u56DE \`types.Action.Pause\` \u540E\uFF0C\u7EE7\u7EEDTCP\u8FDE\u63A5\u7684\u5904\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 \`types.TcpContext\` \u6709\u6548\u3002 |
| \`CloseDownstream\`              | \u5173\u95EDTcp\u4E0A\u4E0B\u6587\u4E2D\u7684\u4E0B\u6E38TCP\u8FDE\u63A5\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 \`types.TcpContext\` \u6709\u6548\u3002 |
| \`CloseUpstream\`                | \u5173\u95EDTcp\u4E0A\u4E0B\u6587\u4E2D\u7684\u4E0A\u6E38TCP\u8FDE\u63A5\u3002\u6B64\u529F\u80FD\u4EC5\u5BF9 \`types.TcpContext\` \u6709\u6548\u3002 |

#### 9.HTTP \u8BF7\u6C42/\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|-------------------------------|--------------------------------------------------------------|
| \`GetHttpRequestHeaders\`       | \u83B7\u53D6HTTP\u8BF7\u6C42\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestHeaders\` \u548C \`types.HttpContext.OnHttpStreamDone\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpRequestHeaders\`   | \u7528\u7ED9\u5B9A\u7684\u5934\u66FF\u6362HTTP\u8BF7\u6C42\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestHeaders\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpRequestHeader\`        | \u83B7\u53D6\u7ED9\u5B9A "key" \u7684HTTP\u8BF7\u6C42\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestHeaders\` \u548C \`types.HttpContext.OnHttpStreamDone\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`RemoveHttpRequestHeader\`     | \u79FB\u9664\u8BF7\u6C42\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestHeaders\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpRequestHeader\`    | \u66FF\u6362\u8BF7\u6C42\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestHeaders\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`AddHttpRequestHeader\`        | \u5411\u8BF7\u6C42\u5934\u6DFB\u52A0\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestHeaders\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpRequestBody\`          | \u83B7\u53D6\u6574\u4E2AHTTP\u8BF7\u6C42\u4F53\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestBody\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`AppendHttpRequestBody\`       | \u5411HTTP\u8BF7\u6C42\u4F53\u7F13\u51B2\u533A\u8FFD\u52A0\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestBody\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`PrependHttpRequestBody\`      | \u5411HTTP\u8BF7\u6C42\u4F53\u7F13\u51B2\u533A\u524D\u7F00\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestBody\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpRequestBody\`      | \u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362HTTP\u8BF7\u6C42\u4F53\u7F13\u51B2\u533A\u3002\u6B64\u529F\u80FD\u4EC5\u5728 \`types.HttpContext.OnHttpRequestBody\` \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpRequestTrailers\`      | \u83B7\u53D6HTTP\u8BF7\u6C42\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpRequestTrailers\`  | \u7528\u7ED9\u5B9A\u7684\u5C3E\u968F\u5934\u66FF\u6362HTTP\u8BF7\u6C42\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpRequestTrailer\`       | \u83B7\u53D6\u7ED9\u5B9A "key" \u7684HTTP\u8BF7\u6C42\u5C3E\u968F\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002 |
| \`RemoveHttpRequestTrailer\`    | \u79FB\u9664\u8BF7\u6C42\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpRequestTrailer\`   | \u66FF\u6362\u8BF7\u6C42\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002 |
| \`AddHttpRequestTrailer\`       | \u5411\u8BF7\u6C42\u5C3E\u968F\u5934\u6DFB\u52A0\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpRequestTrailers \u671F\u95F4\u53EF\u7528\u3002 |
| \`ResumeHttpRequest\`           | \u7EE7\u7EED\u505C\u6B62\u7684HTTP\u8BF7\u6C42\u5904\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpResponseHeaders\`      | \u83B7\u53D6HTTP\u54CD\u5E94\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpResponseHeaders\`  | \u7528\u7ED9\u5B9A\u7684\u5934\u66FF\u6362HTTP\u54CD\u5E94\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpResponseHeader \`      | \u83B7\u53D6\u7ED9\u5B9A "key" \u7684HTTP\u54CD\u5E94\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002 |
| \`RemoveHttpResponseHeader\`    | \u79FB\u9664\u54CD\u5E94\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpResponseHeader\`   | \u66FF\u6362\u54CD\u5E94\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002 |
| \`AddHttpResponseHeader\`       | \u5411\u54CD\u5E94\u5934\u6DFB\u52A0\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpResponseBody\`         | \u83B7\u53D6\u6574\u4E2AHTTP\u54CD\u5E94\u4F53\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002 |
| \`AppendHttpResponseBody\`     | \u5411HTTP\u54CD\u5E94\u4F53\u7F13\u51B2\u533A\u8FFD\u52A0\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002 |
| \`PrependHttpResponseBody\`      | \u5411HTTP\u54CD\u5E94\u4F53\u7F13\u51B2\u533A\u524D\u7F00\u7ED9\u5B9A\u5B57\u8282\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpResponseBody\`      | \u7528\u7ED9\u5B9A\u5B57\u8282\u66FF\u6362HTTP\u54CD\u5E94\u4F53\u7F13\u51B2\u533A\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseBody \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpResponseTrailers\`      | \u83B7\u53D6HTTP\u54CD\u5E94\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpResponseTrailers\`  | \u7528\u7ED9\u5B9A\u7684\u5C3E\u968F\u5934\u66FF\u6362HTTP\u54CD\u5E94\u5C3E\u968F\u5934\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u671F\u95F4\u53EF\u7528\u3002 |
| \`GetHttpResponseTrailer\`       | \u83B7\u53D6\u7ED9\u5B9A "key" \u7684HTTP\u54CD\u5E94\u5C3E\u968F\u5934\u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u548C types.HttpContext.OnHttpStreamDone \u671F\u95F4\u53EF\u7528\u3002 |
| \`RemoveHttpResponseTrailer\`    | \u79FB\u9664\u54CD\u5E94\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u6240\u6709\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseTrailers \u671F\u95F4\u53EF\u7528\u3002 |
| \`ReplaceHttpResponseTrailer\`   | \u66FF\u6362\u54CD\u5E94\u5C3E\u968F\u5934\u4E2D\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002 |
| \`AddHttpResponseTrailer\`      | \u5411\u54CD\u5E94\u5C3E\u968F\u5934\u6DFB\u52A0\u7ED9\u5B9A "key" \u7684\u503C\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext.OnHttpResponseHeaders \u671F\u95F4\u53EF\u7528\u3002 |
| \`ResumeHttpResponse\`           | \u7EE7\u7EED\u505C\u6B62\u7684HTTP\u54CD\u5E94\u5904\u7406\u3002\u6B64\u529F\u80FD\u4EC5\u5728 types.HttpContext \u671F\u95F4\u53EF\u7528\u3002 |
| \`SendHttpResponse\`             | \u5411\u4E0B\u6E38\u53D1\u9001HTTP\u54CD\u5E94\u3002\u8C03\u7528\u6B64\u51FD\u6570\u540E\uFF0C\u60A8\u5FC5\u987B\u8FD4\u56DE types.Action.Pause \u4EE5\u505C\u6B62\u521D\u59CBHTTP\u8BF7\u6C42/\u54CD\u5E94\u7684\u8FDB\u4E00\u6B65\u5904\u7406\u3002 |


#### 10.\u5171\u4EAB\u6570\u636E\u64CD\u4F5C
| \u51FD\u6570\u540D                         | \u63CF\u8FF0      |
|--------------------------------|---------|
| \`GetSharedData\`                | \u83B7\u53D6\u5171\u4EAB\u6570\u636E\u3002 |
| \`SetSharedData\`                | \u8BBE\u7F6E\u5171\u4EAB\u6570\u636E\u3002 |

#### 11.\u65E5\u5FD7\u64CD\u4F5C
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`LogTrace\`                     | \u4EE5 Trace \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002                                   |
| \`LogTracef\`                    | \u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Trace \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002           |
| \`LogDebug\`                     | \u4EE5 Debug \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002                                   |
| \`LogDebugf\`                    | \u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Debug \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002           |
| \`LogInfo\`                      | \u4EE5 Info \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002                                   |
| \`LogInfof\`                     | \u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Info \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002           |
| \`LogWarn\`                      | \u4EE5 Warn \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002                                   |
| \`LogWarnf\`                     | \u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Warn \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002           |
| \`LogError\`                     | \u4EE5 Error \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002                                   |
| \`LogErrorf\`                    | \u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Error \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002           |
| \`LogCritical\`                  | \u4EE5 Critical \u65E5\u5FD7\u7EA7\u522B\u53D1\u51FA\u6D88\u606F\u3002                               |
| \`LogCriticalf\`                 | \u6839\u636E\u683C\u5F0F\u8BF4\u660E\u7B26\u683C\u5F0F\u5316\u5E76\u53D1\u51FA Critical \u65E5\u5FD7\u7EA7\u522B\u7684\u65E5\u5FD7\u3002       |

#### 12.\u6307\u6807\u64CD\u4F5C
| \u51FD\u6570\u540D                         | \u63CF\u8FF0                                                         |
|--------------------------------|--------------------------------------------------------------|
| \`DefineCounterMetric\`          | \u4E3A\u540D\u79F0\u5B9A\u4E49\u4E00\u4E2A\u8BA1\u6570\u5668\u6307\u6807\u3002\u8FD4\u56DE\u4E00\u4E2A \`MetricCounter\` \u7528\u4E8E\u540E\u7EED\u64CD\u4F5C\u3002 |
| \`DefineGaugeMetric\`            | \u4E3A\u540D\u79F0\u5B9A\u4E49\u4E00\u4E2A\u8BA1\u91CF\u5668\u6307\u6807\u3002\u8FD4\u56DE\u4E00\u4E2A \`MetricGauge\` \u7528\u4E8E\u540E\u7EED\u64CD\u4F5C\u3002 |
| \`DefineHistogramMetric\`        | \u4E3A\u540D\u79F0\u5B9A\u4E49\u4E00\u4E2A\u76F4\u65B9\u56FE\u6307\u6807\u3002\u8FD4\u56DE\u4E00\u4E2A \`MetricHistogram\` \u7528\u4E8E\u540E\u7EED\u64CD\u4F5C\u3002 |
| \`MetricCounter.Value\`          | \u83B7\u53D6 \`MetricCounter\` \u7684\u5F53\u524D\u503C\u3002                             |
| \`MetricCounter.Increment\`      | \u5C06 \`MetricCounter\` \u7684\u5F53\u524D\u503C\u589E\u52A0\u6307\u5B9A\u7684\u504F\u79FB\u91CF\u3002             |
| \`MetricGauge.Value\`            | \u83B7\u53D6 \`MetricGauge\` \u7684\u5F53\u524D\u503C\u3002                             |
| \`MetricGauge.Add\`              | \u5C06 \`MetricGauge\` \u7684\u5F53\u524D\u503C\u589E\u52A0\u6307\u5B9A\u7684\u504F\u79FB\u91CF\u3002             |
| \`MetricHistogram.Value\`        | \u83B7\u53D6 \`MetricHistogram\` \u7684\u5F53\u524D\u503C\u3002                         |
| \`MetricHistogram.Record\`       | \u4E3A \`MetricHistogram\` \u8BB0\u5F55\u4E00\u4E2A\u503C\u3002                         |



### 3.3 \u63D2\u4EF6\u8C03\u7528\u5165\u53E3 Entrypoint

\u5F53 Envoy \u521B\u5EFA VM \u65F6\uFF0C\u5728\u865A\u62DF\u673A\u5185\u90E8\u521B\u5EFA \`VMContext\` \u4E4B\u524D\uFF0C\u5B83\u4F1A\u5728\u542F\u52A8\u9636\u6BB5\u8C03\u7528\u63D2\u4EF6\u7A0B\u5E8F\u7684 \`main\` \u51FD\u6570\u3002\u6240\u4EE5\u5FC5\u987B\u5728 \`main\` \u51FD\u6570\u4E2D\u4F20\u9012\u63D2\u4EF6\u81EA\u5B9A\u4E49\u7684 \`VMContext\` \u5B9E\u73B0\u3002
[proxywasm](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/) \u5305\u7684 \`SetVMContext\` \u51FD\u6570\u662F\u5165\u53E3\u70B9\u3002\`main\` \u51FD\u6570\u5982\u4E0B\uFF1A

\`\`\`go
func main() {
	proxywasm.SetVMContext(&myVMContext{})
}

type myVMContext struct { .... }

var _ types.VMContext = &myVMContext{}

// Implementations follow...
\`\`\`

## 4 \u8DE8\u865A\u62DF\u673A\u901A\u4FE1

Envoy \u4E2D\u7684\u8DE8\u865A\u62DF\u673A\u901A\u4FE1\uFF08Cross-VM communications\uFF09\u5141\u8BB8\u5728\u4E0D\u540C\u7EBF\u7A0B\u4E2D\u8FD0\u884C \u7684Wasm \u865A\u62DF\u673A\uFF08VMs\uFF09\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u4EA4\u6362\u548C\u901A\u4FE1\u3002\u8FD9\u5728\u9700\u8981\u5728\u591A\u4E2AVMs\u4E4B\u95F4\u805A\u5408\u6570\u636E\u3001\u7EDF\u8BA1\u4FE1\u606F\u6216\u7F13\u5B58\u6570\u636E\u7B49\u573A\u666F\u4E2D\u975E\u5E38\u6709\u7528\u3002
\u8DE8\u865A\u62DF\u673A\u901A\u4FE1\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A

- \u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09:
    - \u5171\u4EAB\u6570\u636E\u662F\u4E00\u79CD\u5728\u6240\u6709 VMs \u4E4B\u95F4\u5171\u4EAB\u7684\u952E\u503C\u5B58\u50A8\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5B58\u50A8\u548C\u68C0\u7D22\u7B80\u5355\u7684\u6570\u636E\u9879\u3002
    - \u5B83\u9002\u7528\u4E8E\u5B58\u50A8\u5C0F\u7684\u3001\u4E0D\u7ECF\u5E38\u53D8\u5316\u7684\u6570\u636E\uFF0C\u4F8B\u5982\u914D\u7F6E\u53C2\u6570\u6216\u7EDF\u8BA1\u4FE1\u606F\u3002
- \u5171\u4EAB\u961F\u5217\uFF08Shared Queue\uFF09:
    - \u5171\u4EAB\u961F\u5217\u5141\u8BB8VMs\u4E4B\u95F4\u8FDB\u884C\u66F4\u590D\u6742\u7684\u6570\u636E\u4EA4\u6362\uFF0C\u652F\u6301\u53D1\u9001\u548C\u63A5\u6536\u66F4\u4E30\u5BCC\u7684\u6570\u636E\u7ED3\u6784\u3002
    - \u961F\u5217\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u4EFB\u52A1\u8C03\u5EA6\u3001\u5F02\u6B65\u6D88\u606F\u4F20\u9012\u7B49\u6A21\u5F0F\u3002

### 4.1 \u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09

\u5982\u679C\u60F3\u8981\u5728\u6240\u6709 Wasm \u865A\u62DF\u673A\uFF08VMs\uFF09\u8FD0\u884C\u7684\u591A\u4E2A\u5DE5\u4F5C\u7EBF\u7A0B\u95F4\u62E5\u6709\u5168\u5C40\u8BF7\u6C42\u8BA1\u6570\u5668\uFF0C\u6216\u8005\u60F3\u8981\u7F13\u5B58\u4E00\u4E9B\u5E94\u88AB\u6240\u6709 Wasm VMs \u4F7F\u7528\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09\u6216\u7B49\u6548\u7684\u5171\u4EAB\u952E\u503C\u5B58\u50A8\uFF08Shared KVS\uFF09\u5C31\u4F1A\u53D1\u6325\u4F5C\u7528\u3002
\u5171\u4EAB\u6570\u636E\u672C\u8D28\u4E0A\u662F\u4E00\u4E2A\u8DE8\u6240\u6709VMs\u5171\u4EAB\u7684\u952E\u503C\u5B58\u50A8\uFF08\u5373\u8DE8 VM \u6216\u8DE8\u7EBF\u7A0B\uFF09\u3002

\u5171\u4EAB\u6570\u636E KVS \u662F\u6839\u636E vm_config \u4E2D\u6307\u5B9A\u7684\u521B\u5EFA\u7684\u3002\u53EF\u4EE5\u5728\u6240\u6709 Wasm VMs \u4E4B\u95F4\u5171\u4EAB\u4E00\u4E2A\u952E\u503C\u5B58\u50A8\uFF0C\u800C\u5B83\u4EEC\u4E0D\u5FC5\u5177\u6709\u76F8\u540C\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6 \`vm_config.code\`,\u552F\u4E00\u7684\u8981\u6C42\u662F\u5177\u6709\u76F8\u540C\u7684 vm_id\u3002

![img](https://img.alicdn.com/imgextra/i2/O1CN01fLn4Lr1GXxhKORL9t_!!6000000000633-0-tps-1784-1266.jpg)

\u5728\u4E0A\u56FE\uFF08\u56FE\u7247\u6765\u6E90 [Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)\uFF09\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u5373\u4F7F\u5B83\u4EEC\u5177\u6709\u4E0D\u540C\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08 hello.wasm \u548C bye.wasm \uFF09\uFF0C"vm_id=foo"\u7684 VMs \u4E5F\u5171\u4EAB\u76F8\u540C\u7684\u5171\u4EAB\u6570\u636E\u5B58\u50A8\u3002
hostcall.go \u4E2D\u5B9A\u4E49\u5171\u4EAB\u6570\u636E\u76F8\u5173\u7684 API\u5982\u4E0B\uFF1A
\`\`\`go
// GetSharedData \u7528\u4E8E\u68C0\u7D22\u7ED9\u5B9A "key" \u7684\u503C\u3002
// \u8FD4\u56DE\u7684 "cas" \u5E94\u7528\u4E8E SetSharedData \u4EE5\u5B9E\u73B0\u8BE5\u952E\u7684\u7EBF\u7A0B\u5B89\u5168\u66F4\u65B0\u3002
func GetSharedData(key string) (value []byte, cas uint32, err error)

// SetSharedData \u7528\u4E8E\u5728\u5171\u4EAB\u6570\u636E\u5B58\u50A8\u4E2D\u8BBE\u7F6E\u952E\u503C\u5BF9\u3002
// \u5171\u4EAB\u6570\u636E\u5B58\u50A8\u6309\u4E3B\u673A\u4E2D\u7684 "vm_config.vm_id" \u5B9A\u4E49\u3002
//
// \u5F53\u7ED9\u5B9A\u7684 CAS \u503C\u4E0E\u5F53\u524D\u503C\u4E0D\u5339\u914D\u65F6\uFF0C\u5C06\u8FD4\u56DE ErrorStatusCasMismatch\u3002
// \u8FD9\u8868\u660E\u5176\u4ED6 Wasm VM \u5DF2\u7ECF\u6210\u529F\u8BBE\u7F6E\u76F8\u540C\u952E\u7684\u503C\uFF0C\u5E76\u4E14\u8BE5\u952E\u7684\u5F53\u524D CAS \u5DF2\u9012\u589E\u3002
// \u5EFA\u8BAE\u5728\u9047\u5230\u6B64\u9519\u8BEF\u65F6\u5B9E\u73B0\u91CD\u8BD5\u903B\u8F91\u3002
//
// \u5C06 cas \u8BBE\u7F6E\u4E3A 0 \u5C06\u6C38\u8FDC\u4E0D\u4F1A\u8FD4\u56DE ErrorStatusCasMismatch \u5E76\u4E14\u603B\u662F\u6210\u529F\u7684\uFF0C
// \u4F46\u8FD9\u5E76\u4E0D\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u5373\u53EF\u80FD\u5728\u60A8\u8C03\u7528\u6B64\u51FD\u6570\u65F6\u53E6\u4E00\u4E2A VM \u5DF2\u7ECF\u8BBE\u7F6E\u4E86\u8BE5\u503C\uFF0C
// \u770B\u5230\u7684\u503C\u4E0E\u5B58\u50A8\u65F6\u7684\u503C\u5DF2\u7ECF\u4E0D\u540C\u3002
func SetSharedData(key string, value []byte, cas uint32) error
\`\`\`

\u5171\u4EAB\u6570\u636E API \u662F\u5176\u7EBF\u7A0B\u5B89\u5168\u6027\u548C\u8DE8 VM \u5B89\u5168\u6027\uFF0C\u8FD9\u901A\u8FC7 "cas" \uFF08[Compare-And-Swap](https://en.wikipedia.org/wiki/Compare-and-swap))\u503C\u6765\u5B9E\u73B0\u3002\u5982\u4F55\u4F7F\u7528 GetSharedData \u548C SetSharedData \u51FD\u6570\u53EF\u4EE5\u53C2\u8003 [\u793A\u4F8B](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_data/main.go)\u3002 


### 4.2 \u5171\u4EAB\u961F\u5217 Shared Queue

\u5982\u679C\u8981\u5728\u8BF7\u6C42/\u54CD\u5E94\u5904\u7406\u7684\u540C\u65F6\u8DE8\u6240\u6709 Wasm VMs \u805A\u5408\u6307\u6807\uFF0C\u6216\u8005\u5C06\u4E00\u4E9B\u8DE8 VM \u805A\u5408\u7684\u4FE1\u606F\u63A8\u9001\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u901A\u8FC7 *Shared Queue* \u6765\u5B9E\u73B0\u3002

*Shared Queue* \u662F\u4E3A \`vm_id\` \u548C\u961F\u5217\u540D\u79F0\u7684\u7EC4\u5408\u521B\u5EFA\u7684 FIFO\uFF08\u5148\u8FDB\u5148\u51FA\uFF09\u961F\u5217\u3002\u5E76\u4E3A\u8BE5\u7EC4\u5408\uFF08\`vm_id\`\uFF0C\u540D\u79F0\uFF09\u5206\u914D\u4E86\u4E00\u4E2A\u552F\u4E00\u7684 *queue id*\uFF0C\u8BE5 ID \u7528\u4E8E\u5165\u961F/\u51FA\u961F\u64CD\u4F5C\u3002

\u201C\u5165\u961F\u201D\u548C\u201C\u51FA\u961F\u201D\u7B49\u64CD\u4F5C\u5177\u6709\u7EBF\u7A0B\u5B89\u5168\u6027\u548C\u8DE8 VM \u5B89\u5168\u6027\u3002\u5728  hostcall.go \u4E2D\u4E0E *Shared Queue* \u76F8\u5173 API \u5982\u4E0B\uFF1A

\`\`\`go
// DequeueSharedQueue \u4ECE\u7ED9\u5B9A queueID \u7684\u5171\u4EAB\u961F\u5217\u4E2D\u51FA\u961F\u6570\u636E\u3002
// \u8981\u83B7\u53D6\u76EE\u6807\u961F\u5217\u7684 queue id\uFF0C\u8BF7\u5148\u4F7F\u7528 "ResolveSharedQueue"\u3002
func DequeueSharedQueue(queueID uint32) ([]byte, error)

// RegisterSharedQueue \u5728\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u4E2D\u6CE8\u518C\u5171\u4EAB\u961F\u5217\u3002
// "\u6CE8\u518C" \u610F\u5473\u7740\u6BCF\u5F53\u8BE5 queueID \u4E0A\u6709\u65B0\u6570\u636E\u5165\u961F\u65F6\uFF0C\u5C06\u5BF9\u6B64\u63D2\u4EF6\u4E0A\u4E0B\u6587\u8C03\u7528 OnQueueReady\u3002
// \u4EC5\u9002\u7528\u4E8E types.PluginContext\u3002\u8FD4\u56DE\u7684 queueID \u53EF\u7528\u4E8E Enqueue/DequeueSharedQueue\u3002
// \u8BF7\u6CE8\u610F "name" \u5FC5\u987B\u5728\u6240\u6709\u5171\u4EAB\u76F8\u540C "vm_id" \u7684 Wasm VMs \u4E2D\u662F\u552F\u4E00\u7684\u3002\u4F7F\u7528 "vm_id" \u6765\u5206\u9694\u5171\u4EAB\u961F\u5217\u7684\u547D\u540D\u7A7A\u95F4\u3002
//
// \u53EA\u6709\u5728\u8C03\u7528 RegisterSharedQueue \u4E4B\u540E\uFF0CResolveSharedQueue("\u6B64 vm_id", "\u540D\u79F0") \u624D\u80FD\u6210\u529F
// \u901A\u8FC7\u5176\u4ED6 VMs \u68C0\u7D22 queueID\u3002
func RegisterSharedQueue(name string) (queueID uint32, err error)

// EnqueueSharedQueue \u5C06\u6570\u636E\u5165\u961F\u5230\u7ED9\u5B9A queueID \u7684\u5171\u4EAB\u961F\u5217\u3002
// \u8981\u83B7\u53D6\u76EE\u6807\u961F\u5217\u7684 queue id\uFF0C\u8BF7\u5148\u4F7F\u7528 "ResolveSharedQueue"\u3002
func EnqueueSharedQueue(queueID uint32, data []byte) error

// ResolveSharedQueue \u83B7\u53D6\u7ED9\u5B9A vmID \u548C\u961F\u5217\u540D\u79F0\u7684 queueID\u3002
// \u8FD4\u56DE\u7684 queueID \u53EF\u7528\u4E8E Enqueue/DequeueSharedQueue\u3002
func ResolveSharedQueue(vmID, queueName string) (queueID uint32, err error)
\`\`\`

\`RegisterSharedQueue\` \u548C \`DequeueSharedQueue\` \u7531\u961F\u5217\u7684\u201C\u6D88\u8D39\u8005\u201D\u4F7F\u7528\uFF0C\u800C \`ResolveSharedQueue\` \u548C \`EnqueueSharedQueue\` \u662F\u4E3A\u961F\u5217\u201C\u751F\u4EA7\u8005\u201D\u51C6\u5907\u7684\u3002\u8BF7\u6CE8\u610F\uFF1A

- RegisterSharedQueue \u7528\u4E8E\u4E3A\u8C03\u7528\u8005\u7684 name \u548C vm_id \u521B\u5EFA\u5171\u4EAB\u961F\u5217\u3002\u4F7F\u7528\u4E00\u4E2A\u961F\u5217\uFF0C\u90A3\u4E48\u5FC5\u987B\u5148\u7531\u4E00\u4E2A VM \u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002\u8FD9\u53EF\u4EE5\u7531 PluginContext \u8C03\u7528\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8BA4\u4E3A\u201C\u6D88\u8D39\u8005\u201D = PluginContexts\u3002
- ResolveSharedQueue \u7528\u4E8E\u83B7\u53D6 name \u548C vm_id \u7684 queue id\u3002\u8FD9\u662F\u4E3A\u201C\u751F\u4EA7\u8005\u201D\u51C6\u5907\u7684\u3002

\u8FD9\u4E24\u4E2A\u8C03\u7528\u90FD\u8FD4\u56DE\u4E00\u4E2A\u961F\u5217 ID\uFF0C\u8BE5 ID \u7528\u4E8E DequeueSharedQueue \u548C EnqueueSharedQueue\u3002\u540C\u65F6\u5F53\u961F\u5217\u4E2D\u5165\u961F\u65B0\u6570\u636E\u65F6 \u6D88\u8D39\u8005 PluginContext \u4E2D\u6709 OnQueueReady(queueID uint32) \u63A5\u53E3\u4F1A\u6536\u5230\u901A\u77E5\u3002
\u8FD8\u5F3A\u70C8\u5EFA\u8BAE\u7531 Envoy \u7684\u4E3B\u7EBF\u7A0B\u4E0A\u7684\u5355\u4F8B Wasm Service \u521B\u5EFA\u5171\u4EAB\u961F\u5217\u3002\u5426\u5219 OnQueueReady \u5C06\u5728\u5DE5\u4F5C\u7EBF\u7A0B\u4E0A\u8C03\u7528\uFF0C\u8FD9\u4F1A\u963B\u585E\u5B83\u4EEC\u5904\u7406 Http \u6216 Tcp \u6D41\u3002

![img](https://img.alicdn.com/imgextra/i1/O1CN01s1cT1s28xb7OKkEg0_!!6000000007999-0-tps-2378-1316.jpg)
\u5728\u4E0A\u56FE\uFF08\u56FE\u7247\u6765\u6E90 [Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)\uFF09\u4E2D\u5C55\u793A\u5171\u4EAB\u961F\u5217\u5DE5\u4F5C\u539F\u7406\uFF0C\u66F4\u8BE6\u7EC6\u5982\u4F55\u4F7F\u7528\u5171\u4EAB\u961F\u5217\u53EF\u4EE5\u53C2\u8003 [\u793A\u4F8B](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/main.go)\u3002


## 5 \u9650\u5236\u548C\u6CE8\u610F\u4E8B\u9879

\u4EE5\u4E0B\u662F\u5728\u4F7F\u7528 Proxy-Wasm Go SDK \u548C Proxy-Wasm \u7F16\u5199\u63D2\u4EF6\u65F6\u9700\u8981\u6CE8\u610F\u4E8B\u9879\u3002

### 5.1 \u4E00\u4E9B\u6807\u51C6\u5E93\u4E0D\u53EF\u7528

\u4E00\u4E9B\u73B0\u6709\u7684\u6807\u51C6\u5E93\u4E0D\u53EF\u7528\uFF08\u53EF\u5BFC\u5165\u4F46\u8FD0\u884C\u65F6 panic / \u65E0\u6CD5\u5BFC\u5165\uFF09\u3002\u8FD9\u6709\u51E0\u4E2A\u539F\u56E0\uFF1A
1. TinyGo \u7684 WASI \u76EE\u6807\u4E0D\u652F\u6301\u67D0\u4E9B\u7CFB\u7EDF\u8C03\u7528\u3002
2. TinyGo \u6CA1\u6709\u5B9E\u73B0 reflect \u5305\u7684\u5168\u90E8\u529F\u80FD\u3002
3. [Proxy-Wasm C++ \u4E3B\u673A](https://github.com/proxy-wasm/proxy-wasm-cpp-host) \u5C1A\u672A\u652F\u6301\u67D0\u4E9B WASI API\u3002
4. TinyGo \u6216 Proxy-Wasm \u4E2D\u4E0D\u652F\u6301\u4E00\u4E9B\u8BED\u8A00\u7279\u6027\uFF1A\u5305\u62EC \`recover\` \u548C \`goroutine\`\u3002

\u968F\u7740 TinyGo \u548C Proxy-Wasm \u7684\u53D1\u5C55\uFF0C\u8FD9\u4E9B\u95EE\u9898\u5C06\u5F97\u5230\u7F13\u89E3\u3002

### 5.2 \u7531\u4E8E\u5783\u573E\u56DE\u6536\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500

\u7531\u4E8E GC\uFF0C\u4F7F\u7528 Go/TinyGo \u4F1A\u5E26\u6765\u6027\u80FD\u5F00\u9500\uFF0C\u5C3D\u7BA1\u53EF\u4EE5\u8BA4\u4E3A\u4E0E\u4EE3\u7406\u4E2D\u7684\u5176\u4ED6\u64CD\u4F5C\u76F8\u6BD4\uFF0CGC \u7684\u5F00\u9500\u8DB3\u591F\u5C0F\u3002
TinyGo \u5141\u8BB8\u7981\u7528 GC\uFF0C\u4F46\u7531\u4E8E\u5185\u90E8\u9700\u8981\u4F7F\u7528\u6620\u5C04\uFF08\u9690\u5F0F\u5F15\u8D77\u5206\u914D\uFF09\u6765\u4FDD\u5B58\u865A\u62DF\u673A\u7684\u72B6\u6001\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`alloc(uintptr)\` [\u63A5\u53E3](https://github.com/tinygo-org/tinygo/blob/v0.14.1/src/runtime/gc_none.go#L13) \u4F7F\u7528 \`-gc=custom\` \u9009\u9879\u8BBE\u7F6E proxy-wasm \u5B9A\u5236\u7684 GC \u7B97\u6CD5\u3002

### 5.3 \`recover\` \u672A\u5B9E\u73B0

\u5728 TinyGo \u4E2D\uFF0C\`recover\` \u672A\u5B9E\u73B0\uFF08https://github.com/tinygo-org/tinygo/issues/891)\u3002\u8FD9\u4E5F\u610F\u5473\u7740\u4F9D\u8D56 \`recover\` \u7684\u4EE3\u7801\u5C06\u65E0\u6CD5\u6309\u9884\u671F\u5DE5\u4F5C\u3002

### 5.4 Goroutine \u4E0D\u652F\u6301

\u5728 TinyGo \u4E2D\uFF0CGoroutine \u901A\u8FC7 LLVM \u7684\u534F\u7A0B\u5B9E\u73B0\uFF08\u89C1[\u8FD9\u7BC7\u535A\u5BA2\u6587\u7AE0](https://aykevl.nl/2019/02/tinygo-goroutines)\uFF09\u3002 \u5728 Envoy \u4E2D\uFF0CWasm \u6A21\u5757\u4EE5\u4E8B\u4EF6\u9A71\u52A8\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u56E0\u6B64\u4E00\u65E6\u4E3B\u51FD\u6570\u9000\u51FA\uFF0C\u201C\u8C03\u5EA6\u5668\u201D\u5C31\u4E0D\u518D\u6267\u884C\u3002\u56E0\u6B64\u4E0D\u80FD\u50CF\u666E\u901A\u4E3B\u673A\u73AF\u5883\u4E2D\u90A3\u6837\u4F7F\u7528 Goroutine \u3002
\u5728\u4EE5\u4E8B\u4EF6\u9A71\u52A8\u65B9\u5F0F\u6267\u884C\u7684 Wasm VM \u7EBF\u7A0B\u4E2D\u5982\u4F55\u5904\u7406 Goroutine \u7684\u95EE\u9898\u5C1A\u672A\u6709\u89E3\u51B3\u65B9\u6848\u3002\u5EFA\u8BAE\u4F7F\u7528\u5B9E\u73B0 \`OnTick\` \u51FD\u6570\u6765\u5904\u7406\u4EFB\u4F55\u5F02\u6B65\u4EFB\u52A1\u3002

## 6 \u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B

\u7528 Proxy-Wasm Go SDK \u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7684\u63D2\u4EF6\uFF0C\u5177\u4F53\u6837\u4F8B\u5982\u4E0B\uFF1A

\`\`\`golang
package main

import (
  "github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
  "github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
)

// \u63D2\u4EF6\u5165\u53E3
func main() {
  proxywasm.SetVMContext(&vmContext{})
}

// VM \u4E0A\u4E0B\u6587
type vmContext struct {
  // Embed the default VM context here,
  types.DefaultVMContext
  // \u8FD9\u91CC\u6DFB\u52A0 VM \u914D\u7F6E
}

// VM \u542F\u52A8\u56DE\u8C03
func (*vmContext) OnVMStart(vmConfigurationSize int) types.OnVMStartStatus {
  proxywasm.LogInfof("OnVMStart()")
  // \u83B7\u53D6 VM \u914D\u7F6E
  _, err := proxywasm.GetVMConfiguration()
  if err != nil {
    proxywasm.LogCriticalf("error reading vm configuration: %v", err)
  }
  // \u8FD9\u91CC\u89E3\u6790 VM \u914D\u7F6E
  return types.OnVMStartStatusOK
}

// \u751F\u6210\u63D2\u4EF6\u4E0A\u4E0B\u6587
func (*vmContext) NewPluginContext(contextID uint32) types.PluginContext {
  proxywasm.LogInfof("NewPluginContex()")
  return &pluginContext{}
}

// \u63D2\u4EF6\u4E0A\u4E0B\u6587
type pluginContext struct {
  // Embed the default plugin context here,
  types.DefaultPluginContext
  // \u8FD9\u91CC\u6DFB\u52A0\u63D2\u4EF6\u914D\u7F6E
}

// Http \u4E0A\u4E0B\u6587
type httpContext struct {
  // Embed the default root http context here,
  // so that we don't need to reimplement all the methods.
  types.DefaultHttpContext
  // \u8FD9\u91CC\u6DFB\u52A0http \u4E0A\u4E0B\u6587\u5C5E\u6027
  requestBodySize       int
  responseBodySize      int
}

// \u751F\u6210 Http \u4E0A\u4E0B\u6587
func (ctx *pluginContext) NewHttpContext(contextID uint32) types.HttpContext {
  proxywasm.LogInfof("NewHttpContext()")
  return &httpContext{}
}

// \u63D2\u4EF6\u542F\u52A8\u56DE\u8C03\uFF0C
func (ctx *pluginContext) OnPluginStart(pluginConfigurationSize int) types.OnPluginStartStatus {
  proxywasm.LogInfof("OnPluginStart()")
  // \u83B7\u53D6\u63D2\u4EF6\u914D\u7F6E
  _, err := proxywasm.GetPluginConfiguration()
  if err != nil {
    proxywasm.LogCriticalf("error reading plugin configuration: %v", err)
  }
  // \u8FD9\u91CC\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E

  return types.OnPluginStartStatusOK
}

// http \u8BF7\u6C42\u5934\u56DE\u8C03
func (ctx *httpContext) OnHttpRequestHeaders(numHeaders int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpRequestHeaders()")
  // \u8FD9\u91CC\u5904\u7406\u8BF7\u6C42\u5934\u56DE\u8C03
  return types.ActionContinue
}

// http \u8BF7\u6C42\u4F53\u56DE\u8C03\uFF0C\u6CE8\u610F\u8FD9\u91CC\u6D41\u5F0F\u5904\u7406
func (ctx *httpContext) OnHttpRequestBody(bodySize int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpRequestBody()")
  ctx.requestBodySize += bodySize
  if !endOfStream {
    // Wait until we see the entire body to replace.
    return types.ActionPause
  }
  _, err := proxywasm.GetHttpRequestBody(0, ctx.requestBodySize)
  if err != nil {
    proxywasm.LogErrorf("failed to get request body: %v", err)
    return types.ActionContinue
  }

  return types.ActionContinue
}

// http \u54CD\u5E94\u5934\u56DE\u8C03
func (ctx *httpContext) OnHttpResponseHeaders(numHeaders int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpResponseHeaders()")
  // \u8FD9\u91CC\u54CD\u5E94\u5934\u56DE\u8C03
  return types.ActionContinue
}

// http \u54CD\u5E94\u4F53\u56DE\u8C03\uFF0C \u6CE8\u610F\u8FD9\u91CC\u6D41\u5F0F\u5904\u7406
func (ctx *httpContext) OnHttpResponseBody(bodySize int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpResponseBody()")
  ctx.responseBodySize += bodySize
  // \u5224\u65AD\u662F\u5426\u54CD\u5E94\u4F53\u7ED3\u675F
  if !endOfStream {
    // Wait until we see the entire body to replace.
    return types.ActionPause
  }
  _, err := proxywasm.GetHttpResponseBody(0, ctx.responseBodySize)
  if err != nil {
    proxywasm.LogErrorf("failed to get response body: %v", err)
    return types.ActionContinue
  }
  return types.ActionContinue
}
\`\`\`
\u6838\u5FC3\u6B65\u9AA4\u5982\u4E0B\uFF1A
- \u5165\u53E3\u6CE8\u518C vmContext
- VM \u542F\u52A8\u56DE\u8C03\u65F6\u5019\u89E3\u6790 VM \u914D\u7F6E
- \u7531 vmContext \u751F\u6210 pluginContext
- \u63D2\u4EF6\u542F\u52A8\u56DE\u8C03\u65F6\u5019\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
- \u5BF9\u4E8E\u6BCF\u4E2A http \u6D41\uFF0CpluginContext \u751F\u6210 httpContext
- \u751F\u6210\u7684 httpContext \u5904\u7406\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53\u3001\u54CD\u5E94\u5934\u3001\u54CD\u5E94\u4F53\uFF0C\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\u5904\u7406 OnHttpRequestBody \u548C OnHttpResponseBody \u56DE\u8C03\u662F\u6D41\u5F0F\u5904\u7406 

\u53EF\u4EE5\u901A\u8FC7 [\u5F00\u53D1\u6837\u4F8B](https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/examples) \u67E5\u770B\u66F4\u591A Proxy-Wasm Go SDK \u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B\u3002

## \u53C2\u8003
- [1] [proxy-wasm-go-sdk doc](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)
- [2] [proxy-wasm-go-sdk example](https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/examples)
- [3] [WebAssembly \u89E3\u91CA\u5668\u5B9E\u73B0\u7BC7](https://github.com/mcuking/blog/issues/96/)
- [4] [\u7406\u89E3 WebAssembly \u6587\u672C\u683C\u5F0F](https://developer.mozilla.org/zh-CN/docs/WebAssembly/Understanding_the_text_format)
- [5] [Wasm Module Binary Format](https://webassembly.github.io/spec/core/binary/modules.html)
- [6] [WebAssembly \u7A76\u7ADF\u662F\u4EC0\u4E48\uFF1F](https://www.bilibili.com/video/BV1WK42117dW)
- [7] [WebAssembly \u5728 MOSN \u4E2D\u7684\u5B9E\u8DF5 - \u57FA\u7840\u6846\u67B6\u7BC7](https://mosn.io/blog/posts/mosn-wasm-framework/)`},o=function(){return e},p=function(){return[{depth:2,slug:"1-wasmtinygoproxy-wasm-go-sdk",text:"1 Wasm\u3001TinyGo\u3001Proxy-Wasm Go SDK"},{depth:3,slug:"11-wasm",text:"1.1 Wasm"},{depth:4,slug:"111-\u4EC0\u4E48\u662F-wasm",text:"1.1.1 \u4EC0\u4E48\u662F Wasm \uFF1F"},{depth:4,slug:"112-wasm-\u6A21\u5757",text:"1.1.2 Wasm \u6A21\u5757"},{depth:4,slug:"113--wasm-\u6307\u4EE4\u96C6",text:"1.1.3  Wasm \u6307\u4EE4\u96C6"},{depth:3,slug:"12-tinygo",text:"1.2 TinyGo"},{depth:3,slug:"13-proxy-wasm-go-sdk",text:"1.3 Proxy-Wasm Go SDK"},{depth:2,slug:"2-wasm-vm\u63D2\u4EF6\u548C-envoy-\u914D\u7F6E",text:"2 Wasm VM\u3001\u63D2\u4EF6\u548C Envoy \u914D\u7F6E"},{depth:3,slug:"21-envoy-\u914D\u7F6E",text:"2.1 Envoy \u914D\u7F6E"},{depth:3,slug:"22-http-filter-\u914D\u7F6E",text:"2.2 Http Filter \u914D\u7F6E"},{depth:3,slug:"23-network-filter-\u914D\u7F6E",text:"2.3 Network Filter \u914D\u7F6E"},{depth:3,slug:"24-wasm-service-\u914D\u7F6E",text:"2.4 Wasm Service \u914D\u7F6E"},{depth:3,slug:"25-\u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A-vm",text:"2.5 \u6BCF\u4E2A\u7EBF\u7A0B\u4E2D\u591A\u4E2A\u63D2\u4EF6\u5171\u4EAB\u4E00\u4E2A VM"},{depth:2,slug:"3-proxy-wasm-go-sdk-api",text:"3 Proxy-Wasm Go SDK API"},{depth:3,slug:"31-contexts",text:"3.1 Contexts"},{depth:3,slug:"32-hostcall-api",text:"3.2 Hostcall API"},{depth:4,slug:"1\u914D\u7F6E\u548C\u521D\u59CB\u5316",text:"1.\u914D\u7F6E\u548C\u521D\u59CB\u5316"},{depth:4,slug:"2\u5B9A\u65F6\u5668\u8BBE\u7F6E",text:"2.\u5B9A\u65F6\u5668\u8BBE\u7F6E"},{depth:4,slug:"3\u4E0A\u4E0B\u6587\u7BA1\u7406",text:"3.\u4E0A\u4E0B\u6587\u7BA1\u7406"},{depth:4,slug:"4\u63D2\u4EF6\u5B8C\u6210",text:"4.\u63D2\u4EF6\u5B8C\u6210"},{depth:4,slug:"5\u5171\u4EAB\u961F\u5217\u7BA1\u7406",text:"5.\u5171\u4EAB\u961F\u5217\u7BA1\u7406"},{depth:4,slug:"6redis-\u64CD\u4F5C",text:"6.Redis \u64CD\u4F5C"},{depth:4,slug:"7http-\u8C03\u7528",text:"7.HTTP \u8C03\u7528"},{depth:4,slug:"8tcp-\u6D41\u64CD\u4F5C",text:"8.TCP \u6D41\u64CD\u4F5C"},{depth:4,slug:"9http-\u8BF7\u6C42\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C",text:"9.HTTP \u8BF7\u6C42/\u54CD\u5E94\u5934\u548C\u4F53\u64CD\u4F5C"},{depth:4,slug:"10\u5171\u4EAB\u6570\u636E\u64CD\u4F5C",text:"10.\u5171\u4EAB\u6570\u636E\u64CD\u4F5C"},{depth:4,slug:"11\u65E5\u5FD7\u64CD\u4F5C",text:"11.\u65E5\u5FD7\u64CD\u4F5C"},{depth:4,slug:"12\u6307\u6807\u64CD\u4F5C",text:"12.\u6307\u6807\u64CD\u4F5C"},{depth:3,slug:"33-\u63D2\u4EF6\u8C03\u7528\u5165\u53E3-entrypoint",text:"3.3 \u63D2\u4EF6\u8C03\u7528\u5165\u53E3 Entrypoint"},{depth:2,slug:"4-\u8DE8\u865A\u62DF\u673A\u901A\u4FE1",text:"4 \u8DE8\u865A\u62DF\u673A\u901A\u4FE1"},{depth:3,slug:"41-\u5171\u4EAB\u6570\u636Eshared-data",text:"4.1 \u5171\u4EAB\u6570\u636E\uFF08Shared Data\uFF09"},{depth:3,slug:"42-\u5171\u4EAB\u961F\u5217-shared-queue",text:"4.2 \u5171\u4EAB\u961F\u5217 Shared Queue"},{depth:2,slug:"5-\u9650\u5236\u548C\u6CE8\u610F\u4E8B\u9879",text:"5 \u9650\u5236\u548C\u6CE8\u610F\u4E8B\u9879"},{depth:3,slug:"51-\u4E00\u4E9B\u6807\u51C6\u5E93\u4E0D\u53EF\u7528",text:"5.1 \u4E00\u4E9B\u6807\u51C6\u5E93\u4E0D\u53EF\u7528"},{depth:3,slug:"52-\u7531\u4E8E\u5783\u573E\u56DE\u6536\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500",text:"5.2 \u7531\u4E8E\u5783\u573E\u56DE\u6536\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500"},{depth:3,slug:"53-recover-\u672A\u5B9E\u73B0",text:"5.3 recover \u672A\u5B9E\u73B0"},{depth:3,slug:"54-goroutine-\u4E0D\u652F\u6301",text:"5.4 Goroutine \u4E0D\u652F\u6301"},{depth:2,slug:"6-\u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B",text:"6 \u63D2\u4EF6\u5F00\u53D1\u6837\u4F8B"},{depth:2,slug:"\u53C2\u8003",text:"\u53C2\u8003"}]},s=l((x,f,E)=>{const{layout:h,...i}=a;return i.file=t,i.url=n,r`${v()}${y(e)}`})});export{s as Content,g as __tla,o as compiledContent,s as default,t as file,a as frontmatter,p as getHeadings,d as rawContent,n as url};
