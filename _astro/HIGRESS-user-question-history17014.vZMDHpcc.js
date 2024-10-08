import{c as g,__tla as d}from"./astro-component.cI6d52vQ.js";import{r as p,m as c,u as h,__tla as u}from"./constant.Cg0TEQOO.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let e,n,t,s,a,l,r,S=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let o;o=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>go wasm \u5F00\u53D1</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<h3 id="-higress-\u4F7F\u7528-go-\u8BED\u8A00\u5F00\u53D1-wasm-\u63D2\u4EF6">: Higress \u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6</h3>
<h4 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h4>
<p>\u5728Higress\u9879\u76EE\u4E2D\uFF0C\u5229\u7528Go\u8BED\u8A00\u5F00\u53D1WebAssembly\uFF08WASM\uFF09\u63D2\u4EF6\u662F\u4E00\u9879\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u6269\u5C55\u4EE3\u7406\u670D\u52A1\u5668\u7684\u529F\u80FD\uFF0C\u5982\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u8BF7\u6C42\u5904\u7406\u903B\u8F91\u3001\u9650\u6D41\u3001\u8BA4\u8BC1\u7B49\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u6574\u4E2A\u5F00\u53D1\u6D41\u7A0B\u6D89\u53CA\u51E0\u4E2A\u5173\u952E\u6B65\u9AA4\uFF0C\u5305\u62EC\u5DE5\u5177\u51C6\u5907\u3001\u7F16\u5199\u63D2\u4EF6\u3001\u672C\u5730\u8C03\u8BD5\u548C\u53C2\u8003\u66F4\u591A\u793A\u4F8B\u3002</p>
<h4 id="\u5F00\u53D1\u6B65\u9AA4\u4F9D\u6258\u77E5\u8BC6\u5206\u6790">\u5F00\u53D1\u6B65\u9AA4\u4F9D\u6258\u77E5\u8BC6\u5206\u6790</h4>
<ol>
<li>
<p><strong>\u5DE5\u5177\u51C6\u5907</strong>: \u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u786E\u4FDD\u5B89\u88C5\u4E86\u6700\u65B0\u7248\u672C\u7684Go\u73AF\u5883\uFF0C\u56E0\u4E3AGo\u662F\u5F00\u53D1WASM\u63D2\u4EF6\u7684\u8BED\u8A00\u57FA\u7840\u3002\u6B64\u5916\uFF0C\u4E86\u89E3\u5E76\u914D\u7F6E\u597DHigress\u6240\u9700\u7684WASM SDK\uFF0C\u8FD9\u901A\u5E38\u5305\u62EC<code dir="auto">proxy-wasm-go-sdk</code>\u5E93\uFF0C\u7528\u4E8E\u63D0\u4F9B\u4E0E\u4EE3\u7406\u4EA4\u4E92\u7684API\u3002</p>
</li>
<li>
<p><strong>\u7F16\u5199\u63D2\u4EF6</strong>: \u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982\u4E0A\u9762\u63D0\u5230\u7684Redis\u9650\u6D41\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5B9E\u9645\u7684\u5F00\u53D1\u8FC7\u7A0B\u3002\u63D2\u4EF6\u4E3B\u8981\u7531\u51E0\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A</p>
<ul>
<li><strong>\u521D\u59CB\u5316\u914D\u7F6E</strong> (<code dir="auto">parseConfig</code>\u51FD\u6570): \u8FD9\u91CC\u89E3\u6790JSON\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BBE\u7F6ERedis\u670D\u52A1\u7684\u8FDE\u63A5\u53C2\u6570\uFF0C\u5982\u670D\u52A1\u540D\u3001\u7AEF\u53E3\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u53CA\u8D85\u65F6\u65F6\u95F4\u3002</li>
<li><strong>\u5904\u7406HTTP\u8BF7\u6C42\u5934</strong> (<code dir="auto">onHttpRequestHeaders</code>\u51FD\u6570): \u5728\u6BCF\u4E2A\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u6B64\u51FD\u6570\u88AB\u8C03\u7528\u4EE5\u6267\u884C\u9650\u6D41\u903B\u8F91\u3002\u901A\u8FC7Redis\u7684<code dir="auto">INCR</code>\u547D\u4EE4\u7D2F\u52A0\u8BF7\u6C42\u8BA1\u6570\uFF0C\u5E76\u6839\u636E\u914D\u7F6E\u7684QPM\uFF08\u6BCF\u5206\u949F\u67E5\u8BE2\u6B21\u6570\uFF09\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u8BF7\u6C42\u6216\u8FD4\u56DE\u9650\u6D41\u54CD\u5E94\u3002</li>
<li><strong>\u5904\u7406HTTP\u54CD\u5E94\u5934</strong> (<code dir="auto">onHttpResponseHeaders</code>\u51FD\u6570): \u53EF\u9009\u5730\u5411\u54CD\u5E94\u5934\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4FE1\u606F\uFF0C\u5982\u672C\u6B21\u8BF7\u6C42\u7684<code dir="auto">timeStamp</code>\u548C\u5269\u4F59\u8BF7\u6C42\u6570<code dir="auto">callTimeLeft</code>\u3002</li>
</ul>
</li>
<li>
<p><strong>\u672C\u5730\u8C03\u8BD5</strong>: \u867D\u7136\u8BE6\u7EC6\u6B65\u9AA4\u672A\u76F4\u63A5\u63D0\u4F9B\uFF0C\u4F46\u901A\u5E38\u6D89\u53CA\u6784\u5EFAWASM\u6A21\u5757\uFF0C\u5E76\u5728Higress\u6216\u5176\u4ED6\u652F\u6301WASM\u63D2\u4EF6\u7684\u73AF\u5883\u4E2D\u90E8\u7F72\u6D4B\u8BD5\uFF0C\u4F7F\u7528\u65E5\u5FD7\u8F93\u51FA\u548C\u9519\u8BEF\u5904\u7406\u673A\u5236\u6765\u8BCA\u65AD\u95EE\u9898\u3002</p>
</li>
<li>
<p><strong>\u66F4\u591A\u793A\u4F8B</strong>: \u63A2\u7D22\u989D\u5916\u7684\u793A\u4F8B\u4EE3\u7801\u548C\u6587\u6863\uFF0C\u53EF\u4EE5\u52A0\u6DF1\u5BF9WASM\u63D2\u4EF6\u5F00\u53D1\u6A21\u5F0F\u7684\u7406\u89E3\uFF0C\u5B66\u4E60\u5982\u4F55\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684HTTP\u4E8B\u4EF6\u3001\u5982\u4F55\u4E0E\u540E\u7AEF\u670D\u52A1\u4EA4\u4E92\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002</p>
</li>
</ol>
<h4 id="\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA">\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA</h4>
<ul>
<li><strong>\u7B2C\u4E00\u6B65</strong>\u786E\u4FDD\u4F60\u7684\u5F00\u53D1\u73AF\u5883\u5DF2\u51C6\u5907\u597DGo\u8BED\u8A00\u73AF\u5883\u548CWASM SDK\u3002\u8FD9\u662F\u5F00\u53D1\u4EFB\u4F55Go\u8BED\u8A00WASM\u63D2\u4EF6\u7684\u57FA\u7840\u3002</li>
<li><strong>\u7B2C\u4E8C\u6B65</strong>\u5728\u7F16\u5199\u63D2\u4EF6\u65F6\uFF0C\u8981\u660E\u786E\u4F60\u7684\u4E1A\u52A1\u9700\u6C42\uFF0C\u6BD4\u5982\u4E0A\u8FF0\u9650\u6D41\u573A\u666F\uFF0C\u9700\u8BBE\u8BA1\u5408\u7406\u7684\u914D\u7F6E\u7ED3\u6784\u548C\u903B\u8F91\u5904\u7406\u51FD\u6570\u3002\u901A\u8FC7\u89E3\u6790\u914D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u7075\u6D3B\u5730\u8C03\u6574\u63D2\u4EF6\u884C\u4E3A\u800C\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u3002</li>
<li><strong>\u7B2C\u4E09\u6B65</strong>\u672C\u5730\u8C03\u8BD5\u9636\u6BB5\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5B83\u5E2E\u52A9\u4F60\u9A8C\u8BC1\u903B\u8F91\u3001\u5B9A\u4F4D\u5E76\u4FEE\u6B63\u9519\u8BEF\u3002\u6784\u5EFAWASM\u6A21\u5757\u540E\uFF0C\u5229\u7528Higress\u63D0\u4F9B\u7684\u5DE5\u5177\u6216\u76F4\u63A5\u5728\u76EE\u6807\u73AF\u5883\u4E2D\u6D4B\u8BD5\u63D2\u4EF6\uFF0C\u89C2\u5BDF\u5176\u884C\u4E3A\u662F\u5426\u7B26\u5408\u9884\u671F\u3002</li>
<li><strong>\u7B2C\u56DB\u6B65</strong>\u6301\u7EED\u5B66\u4E60\u548C\u5B9E\u8DF5\uFF0C\u901A\u8FC7\u7814\u7A76\u66F4\u591A\u793A\u4F8B\u548C\u6587\u6863\uFF0C\u80FD\u8BA9\u4F60\u7684\u63D2\u4EF6\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\u548C\u5B8C\u5584\uFF0C\u63D0\u5347\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002</li>
</ul>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u4F9D\u6258\u4E8EHigress\u5E73\u53F0\u548CGo\u8BED\u8A00\u7684WASM\u63D2\u4EF6\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u7ED3\u5408\u4E86\u73AF\u5883\u914D\u7F6E\u3001\u4EE3\u7801\u7F16\u5199\u3001\u8C03\u8BD5\u4F18\u5316\u548C\u6301\u7EED\u5B66\u4E60\u7684\u8FC7\u7A0B\u3002\u901A\u8FC7\u9075\u5FAA\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u5F00\u53D1\u8005\u80FD\u591F\u9AD8\u6548\u5730\u6269\u5C55Higress\u7684\u529F\u80FD\uFF0C\u6EE1\u8DB3\u7279\u5B9A\u7684\u4E1A\u52A1\u9700\u6C42\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17020" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-17014",title:"go wasm \u5F00\u53D1",date:"2024-09-11",category:"expertConsultation",description:"### : Higress \u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6#### \u5206\u6790\u95EE\u9898\u539F\u56E0\u5728Higress\u9879\u76EE\u4E2D\uFF0C\u5229\u7528Go\u8BED\u8A00\u5F00\u53D1WebAssembly\uFF08WASM\uFF09\u63D2\u4EF6\u662F\u4E00\u9879\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u6269\u5C55\u4EE3\u7406\u670D\u52A1\u5668\u7684\u529F\u80FD\uFF0C\u5982\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u8BF7\u6C42\u5904\u7406\u903B\u8F91\u3001\u9650\u6D41\u3001\u8BA4\u8BC1\u7B49\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u6574\u4E2A\u5F00\u53D1\u6D41\u7A0B\u6D89\u53CA\u51E0",tags:["higress","go","wasm","\u5F00\u53D1"],keywords:["higress","go","wasm","\u5F00\u53D1"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17014.md",r=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 go wasm \u5F00\u53D1  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

### : Higress \u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6

#### \u5206\u6790\u95EE\u9898\u539F\u56E0
\u5728Higress\u9879\u76EE\u4E2D\uFF0C\u5229\u7528Go\u8BED\u8A00\u5F00\u53D1WebAssembly\uFF08WASM\uFF09\u63D2\u4EF6\u662F\u4E00\u9879\u9AD8\u7EA7\u529F\u80FD\uFF0C\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u6269\u5C55\u4EE3\u7406\u670D\u52A1\u5668\u7684\u529F\u80FD\uFF0C\u5982\u5B9E\u73B0\u81EA\u5B9A\u4E49\u7684\u8BF7\u6C42\u5904\u7406\u903B\u8F91\u3001\u9650\u6D41\u3001\u8BA4\u8BC1\u7B49\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\uFF0C\u6211\u4EEC\u4E86\u89E3\u5230\u6574\u4E2A\u5F00\u53D1\u6D41\u7A0B\u6D89\u53CA\u51E0\u4E2A\u5173\u952E\u6B65\u9AA4\uFF0C\u5305\u62EC\u5DE5\u5177\u51C6\u5907\u3001\u7F16\u5199\u63D2\u4EF6\u3001\u672C\u5730\u8C03\u8BD5\u548C\u53C2\u8003\u66F4\u591A\u793A\u4F8B\u3002

#### \u5F00\u53D1\u6B65\u9AA4\u4F9D\u6258\u77E5\u8BC6\u5206\u6790

1. **\u5DE5\u5177\u51C6\u5907**: \u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u786E\u4FDD\u5B89\u88C5\u4E86\u6700\u65B0\u7248\u672C\u7684Go\u73AF\u5883\uFF0C\u56E0\u4E3AGo\u662F\u5F00\u53D1WASM\u63D2\u4EF6\u7684\u8BED\u8A00\u57FA\u7840\u3002\u6B64\u5916\uFF0C\u4E86\u89E3\u5E76\u914D\u7F6E\u597DHigress\u6240\u9700\u7684WASM SDK\uFF0C\u8FD9\u901A\u5E38\u5305\u62EC\`proxy-wasm-go-sdk\`\u5E93\uFF0C\u7528\u4E8E\u63D0\u4F9B\u4E0E\u4EE3\u7406\u4EA4\u4E92\u7684API\u3002

2. **\u7F16\u5199\u63D2\u4EF6**: \u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u7684\u4F8B\u5B50\uFF0C\u6BD4\u5982\u4E0A\u9762\u63D0\u5230\u7684Redis\u9650\u6D41\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230\u5B9E\u9645\u7684\u5F00\u53D1\u8FC7\u7A0B\u3002\u63D2\u4EF6\u4E3B\u8981\u7531\u51E0\u4E2A\u90E8\u5206\u7EC4\u6210\uFF1A
   - **\u521D\u59CB\u5316\u914D\u7F6E** (\`parseConfig\`\u51FD\u6570): \u8FD9\u91CC\u89E3\u6790JSON\u914D\u7F6E\u6587\u4EF6\uFF0C\u8BBE\u7F6ERedis\u670D\u52A1\u7684\u8FDE\u63A5\u53C2\u6570\uFF0C\u5982\u670D\u52A1\u540D\u3001\u7AEF\u53E3\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u53CA\u8D85\u65F6\u65F6\u95F4\u3002
   - **\u5904\u7406HTTP\u8BF7\u6C42\u5934** (\`onHttpRequestHeaders\`\u51FD\u6570): \u5728\u6BCF\u4E2A\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u6B64\u51FD\u6570\u88AB\u8C03\u7528\u4EE5\u6267\u884C\u9650\u6D41\u903B\u8F91\u3002\u901A\u8FC7Redis\u7684\`INCR\`\u547D\u4EE4\u7D2F\u52A0\u8BF7\u6C42\u8BA1\u6570\uFF0C\u5E76\u6839\u636E\u914D\u7F6E\u7684QPM\uFF08\u6BCF\u5206\u949F\u67E5\u8BE2\u6B21\u6570\uFF09\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u8BF7\u6C42\u6216\u8FD4\u56DE\u9650\u6D41\u54CD\u5E94\u3002
   - **\u5904\u7406HTTP\u54CD\u5E94\u5934** (\`onHttpResponseHeaders\`\u51FD\u6570): \u53EF\u9009\u5730\u5411\u54CD\u5E94\u5934\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4FE1\u606F\uFF0C\u5982\u672C\u6B21\u8BF7\u6C42\u7684\`timeStamp\`\u548C\u5269\u4F59\u8BF7\u6C42\u6570\`callTimeLeft\`\u3002

3. **\u672C\u5730\u8C03\u8BD5**: \u867D\u7136\u8BE6\u7EC6\u6B65\u9AA4\u672A\u76F4\u63A5\u63D0\u4F9B\uFF0C\u4F46\u901A\u5E38\u6D89\u53CA\u6784\u5EFAWASM\u6A21\u5757\uFF0C\u5E76\u5728Higress\u6216\u5176\u4ED6\u652F\u6301WASM\u63D2\u4EF6\u7684\u73AF\u5883\u4E2D\u90E8\u7F72\u6D4B\u8BD5\uFF0C\u4F7F\u7528\u65E5\u5FD7\u8F93\u51FA\u548C\u9519\u8BEF\u5904\u7406\u673A\u5236\u6765\u8BCA\u65AD\u95EE\u9898\u3002

4. **\u66F4\u591A\u793A\u4F8B**: \u63A2\u7D22\u989D\u5916\u7684\u793A\u4F8B\u4EE3\u7801\u548C\u6587\u6863\uFF0C\u53EF\u4EE5\u52A0\u6DF1\u5BF9WASM\u63D2\u4EF6\u5F00\u53D1\u6A21\u5F0F\u7684\u7406\u89E3\uFF0C\u5B66\u4E60\u5982\u4F55\u5904\u7406\u4E0D\u540C\u7C7B\u578B\u7684HTTP\u4E8B\u4EF6\u3001\u5982\u4F55\u4E0E\u540E\u7AEF\u670D\u52A1\u4EA4\u4E92\u7B49\u9AD8\u7EA7\u529F\u80FD\u3002

#### \u5177\u4F53\u6B65\u9AA4\u89E3\u91CA
- **\u7B2C\u4E00\u6B65**\u786E\u4FDD\u4F60\u7684\u5F00\u53D1\u73AF\u5883\u5DF2\u51C6\u5907\u597DGo\u8BED\u8A00\u73AF\u5883\u548CWASM SDK\u3002\u8FD9\u662F\u5F00\u53D1\u4EFB\u4F55Go\u8BED\u8A00WASM\u63D2\u4EF6\u7684\u57FA\u7840\u3002
- **\u7B2C\u4E8C\u6B65**\u5728\u7F16\u5199\u63D2\u4EF6\u65F6\uFF0C\u8981\u660E\u786E\u4F60\u7684\u4E1A\u52A1\u9700\u6C42\uFF0C\u6BD4\u5982\u4E0A\u8FF0\u9650\u6D41\u573A\u666F\uFF0C\u9700\u8BBE\u8BA1\u5408\u7406\u7684\u914D\u7F6E\u7ED3\u6784\u548C\u903B\u8F91\u5904\u7406\u51FD\u6570\u3002\u901A\u8FC7\u89E3\u6790\u914D\u7F6E\uFF0C\u4F60\u53EF\u4EE5\u7075\u6D3B\u5730\u8C03\u6574\u63D2\u4EF6\u884C\u4E3A\u800C\u65E0\u9700\u4FEE\u6539\u4EE3\u7801\u3002
- **\u7B2C\u4E09\u6B65**\u672C\u5730\u8C03\u8BD5\u9636\u6BB5\u662F\u81F3\u5173\u91CD\u8981\u7684\uFF0C\u5B83\u5E2E\u52A9\u4F60\u9A8C\u8BC1\u903B\u8F91\u3001\u5B9A\u4F4D\u5E76\u4FEE\u6B63\u9519\u8BEF\u3002\u6784\u5EFAWASM\u6A21\u5757\u540E\uFF0C\u5229\u7528Higress\u63D0\u4F9B\u7684\u5DE5\u5177\u6216\u76F4\u63A5\u5728\u76EE\u6807\u73AF\u5883\u4E2D\u6D4B\u8BD5\u63D2\u4EF6\uFF0C\u89C2\u5BDF\u5176\u884C\u4E3A\u662F\u5426\u7B26\u5408\u9884\u671F\u3002
- **\u7B2C\u56DB\u6B65**\u6301\u7EED\u5B66\u4E60\u548C\u5B9E\u8DF5\uFF0C\u901A\u8FC7\u7814\u7A76\u66F4\u591A\u793A\u4F8B\u548C\u6587\u6863\uFF0C\u80FD\u8BA9\u4F60\u7684\u63D2\u4EF6\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\u548C\u5B8C\u5584\uFF0C\u63D0\u5347\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u4F9D\u6258\u4E8EHigress\u5E73\u53F0\u548CGo\u8BED\u8A00\u7684WASM\u63D2\u4EF6\u5F00\u53D1\uFF0C\u662F\u4E00\u4E2A\u7ED3\u5408\u4E86\u73AF\u5883\u914D\u7F6E\u3001\u4EE3\u7801\u7F16\u5199\u3001\u8C03\u8BD5\u4F18\u5316\u548C\u6301\u7EED\u5B66\u4E60\u7684\u8FC7\u7A0B\u3002\u901A\u8FC7\u9075\u5FAA\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u5F00\u53D1\u8005\u80FD\u591F\u9AD8\u6548\u5730\u6269\u5C55Higress\u7684\u529F\u80FD\uFF0C\u6EE1\u8DB3\u7279\u5B9A\u7684\u4E1A\u52A1\u9700\u6C42\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17020)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return o},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"-higress-\u4F7F\u7528-go-\u8BED\u8A00\u5F00\u53D1-wasm-\u63D2\u4EF6",text:": Higress \u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6"},{depth:4,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:4,slug:"\u5F00\u53D1\u6B65\u9AA4\u4F9D\u6258\u77E5\u8BC6\u5206\u6790",text:"\u5F00\u53D1\u6B65\u9AA4\u4F9D\u6258\u77E5\u8BC6\u5206\u6790"},{depth:4,slug:"\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA",text:"\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=g((m,A,H)=>{const{layout:W,...i}=s;return i.file=t,i.url=r,p`${c()}${h(o)}`})});export{e as Content,S as __tla,n as compiledContent,e as default,t as file,s as frontmatter,a as getHeadings,l as rawContent,r as url};