import{c as p,__tla as d}from"./astro-component.BNo6A4i3.js";import{r as c,m as u,u as y,__tla as h}from"./constant.BV4LuVy-.js";import{__tla as g}from"./astro/assets-service.lesyujvn.js";let s,l,t,i,o,n,a,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u63A5\u53E3\u9650\u6D41\u600E\u4E48\u505A</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u4E3A\u4E86\u5B9E\u73B0Higress\u63A5\u53E3\u9650\u6D41\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u5176\u63D0\u4F9B\u7684<code dir="auto">key-rate-limit</code>\u63D2\u4EF6\u6765\u6839\u636E\u7279\u5B9A\u7684\u952E\u503C\uFF08\u5982URL\u53C2\u6570\u3001HTTP\u8BF7\u6C42\u5934\uFF09\u6765\u8FDB\u884C\u9650\u6D41\u63A7\u5236\u3002\u4EE5\u4E0B\u662F\u8BE6\u7EC6\u7684\u64CD\u4F5C\u6B65\u9AA4\u548C\u8BF4\u660E\uFF1A</p>
<h3 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<p>\u63A5\u53E3\u9650\u6D41\u7684\u9700\u6C42\u901A\u5E38\u6E90\u81EA\u4E8E\u4FDD\u62A4\u540E\u7AEF\u670D\u52A1\u514D\u53D7\u77AC\u65F6\u5927\u6D41\u91CF\u51B2\u51FB\uFF0C\u786E\u4FDD\u670D\u52A1\u7A33\u5B9A\u6027\u548C\u8D44\u6E90\u5408\u7406\u5206\u914D\u3002Higress\u901A\u8FC7\u5176\u63D2\u4EF6\u7CFB\u7EDF\uFF0C\u7279\u522B\u662F<code dir="auto">key-rate-limit</code>\u63D2\u4EF6\uFF0C\u80FD\u591F\u5B9E\u73B0\u7075\u6D3B\u4E14\u7CBE\u51C6\u7684\u9650\u6D41\u7B56\u7565\uFF0C\u9488\u5BF9\u4E0D\u540C\u7684\u8BF7\u6C42\u5C5E\u6027\u8BBE\u7F6E\u4E0D\u540C\u7684\u9650\u6D41\u89C4\u5219\u3002</p>
<h3 id="\u5B9E\u65BD\u6B65\u9AA4">\u5B9E\u65BD\u6B65\u9AA4</h3>
<h4 id="1-\u9009\u62E9\u952E\u503C\u6765\u6E90">1. \u9009\u62E9\u952E\u503C\u6765\u6E90</h4>
<ul>
<li><strong>\u5982\u679C\u8981\u6839\u636EURL\u53C2\u6570\u9650\u6D41</strong>\uFF0C\u4F60\u9700\u8981\u5728\u914D\u7F6E\u4E2D\u6307\u5B9A<code dir="auto">limit_by_param</code>\u5B57\u6BB5\uFF0C\u5E76\u586B\u5165\u4F5C\u4E3A\u9650\u6D41\u4F9D\u636E\u7684\u53C2\u6570\u540D\u3002</li>
<li><strong>\u5982\u679C\u8981\u6839\u636EHTTP\u8BF7\u6C42\u5934\u9650\u6D41</strong>\uFF0C\u5219\u5E94\u914D\u7F6E<code dir="auto">limit_by_header</code>\u5B57\u6BB5\uFF0C\u586B\u5165\u76F8\u5E94\u7684\u8BF7\u6C42\u5934\u540D\u79F0\u3002</li>
</ul>
<h4 id="2-\u5B9A\u4E49\u9650\u6D41\u89C4\u5219">2. \u5B9A\u4E49\u9650\u6D41\u89C4\u5219</h4>
<ul>
<li>\u5728<code dir="auto">limit_keys</code>\u6570\u7EC4\u4E2D\uFF0C\u4E3A\u6BCF\u4E2A\u9700\u8981\u9650\u5236\u7684\u952E\u503C\u6DFB\u52A0\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u660E\u786E\u6307\u5B9A\uFF1A
<ul>
<li><code dir="auto">key</code>: \u5339\u914D\u7684\u952E\u503C\u3002</li>
<li>\u4EE5\u53CA\u81F3\u5C11\u4E00\u4E2A\u65F6\u95F4\u7A97\u53E3\u5185\u7684\u8BF7\u6C42\u9650\u5236\u6570\uFF0C\u4F8B\u5982<code dir="auto">query_per_second</code>\u3001<code dir="auto">query_per_minute</code>\u7B49\u3002</li>
</ul>
</li>
</ul>
<h4 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h4>
<p>\u5047\u8BBE\u6211\u4EEC\u8981\u6839\u636E\u8BF7\u6C42\u4E2D\u7684API\u5BC6\u94A5\uFF08\u4ECEURL\u53C2\u6570<code dir="auto">apikey</code>\u83B7\u53D6\uFF09\u5B9E\u65BD\u9650\u6D41\uFF0C\u5141\u8BB8\u6BCF\u4E2A\u5BC6\u94A5\u6BCF\u79D2\u6700\u591A10\u6B21\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example-key-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example-key-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_param: apikey\x7Flimit_keys:\x7F- key: example-key-1\x7F  query_per_second: 10\x7F- key: example-key-2\x7F  query_per_second: 5"><div></div></button></div></figure></div>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u901A\u8FC7\u4E0A\u8FF0\u914D\u7F6E\uFF0CHigress\u5C06\u4F1A\u76D1\u63A7\u5230\u8FBE\u63A5\u53E3\u7684\u8BF7\u6C42\uFF0C\u6839\u636E\u8BF7\u6C42\u4E2D\u6307\u5B9A\u53C2\u6570\uFF08\u6216\u8BF7\u6C42\u5934\uFF09\u7684\u503C\uFF0C\u5E94\u7528\u5BF9\u5E94\u7684\u9650\u6D41\u7B56\u7565\u3002\u6BD4\u5982\uFF0C\u5F53\u8BF7\u6C42\u643A\u5E26\u7684<code dir="auto">apikey</code>\u4E3A<code dir="auto">example-key-1</code>\u65F6\uFF0C\u8BE5API\u6BCF\u79D2\u53EA\u80FD\u88AB\u8C03\u752810\u6B21\uFF1B\u5982\u679C\u662F<code dir="auto">example-key-2</code>\uFF0C\u5219\u9650\u6D41\u4E3A\u6BCF\u79D25\u6B21\u3002\u8FD9\u6837\u7684\u8BBE\u8BA1\u8BA9\u670D\u52A1\u80FD\u591F\u5BF9\u4E0D\u540C\u5BA2\u6237\u7AEF\u6216\u7528\u6237\u8FDB\u884C\u7CBE\u7EC6\u5316\u7684\u8BBF\u95EE\u63A7\u5236\uFF0C\u6709\u6548\u9632\u6B62\u56E0\u4E2A\u522B\u7528\u6237\u7684\u9AD8\u5E76\u53D1\u8BF7\u6C42\u5BFC\u81F4\u7684\u670D\u52A1\u8FC7\u8F7D\u3002</p>
<h3 id="\u6CE8\u610F">\u6CE8\u610F</h3>
<ul>
<li>\u786E\u4FDD\u914D\u7F6E\u7B26\u5408\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\uFF0C\u907F\u514D\u8FC7\u5EA6\u9650\u6D41\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002</li>
<li>\u76D1\u63A7\u9650\u6D41\u6548\u679C\u5E76\u9002\u65F6\u8C03\u6574\u7B56\u7565\uFF0C\u4EE5\u8FBE\u5230\u6700\u4F73\u7684\u4FDD\u62A4\u6548\u679C\u548C\u8D44\u6E90\u5229\u7528\u7387\u3002</li>
</ul>
<h3 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5</h3>
<ul>
<li>Higress Key\u9650\u6D41\u63D2\u4EF6\u6E90\u7801\uFF1A<a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/cluster-key-rate-limit" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GitHub - Alibaba/Higress Key\u9650\u6D41\u63D2\u4EF6</a></li>
<li>\u867D\u7136\u63D0\u53CA\u4E86\u57FA\u4E8ESentinel\u7684\u5165\u53E3\u7194\u65AD\u9650\u6D41\uFF0C\u4F46\u672C\u56DE\u7B54\u4E3B\u8981\u805A\u7126\u4E8E\u57FA\u4E8EKey\u7684\u9650\u6D41\u5B9E\u73B0\uFF0C\u5173\u4E8ESentinel\u7684\u66F4\u6DF1\u5165\u5E94\u7528\uFF0C\u8BF7\u5173\u6CE8\u6587\u6863\u8BA1\u5212\u63A8\u51FA\u7684\u65E5\u671F\uFF1A<a href="https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/sentinel.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Sentinel\u6587\u6863</a>\uFF0C\u9884\u8BA12022\u5E7403\u670815\u65E5\u3002</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Key \u9650\u6D41</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Sentinel \u5B9E\u73B0\u5165\u53E3\u7194\u65AD\u9650\u6D41</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17025" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,i={id:"question-history-17024",title:"higress \u63A5\u53E3\u9650\u6D41\u600E\u4E48\u505A",date:"2024-09-26",category:"expertConsultation",description:"\u4E3A\u4E86\u5B9E\u73B0Higress\u63A5\u53E3\u9650\u6D41\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u5176\u63D0\u4F9B\u7684`key-rate-limit`\u63D2\u4EF6\u6765\u6839\u636E\u7279\u5B9A\u7684\u952E\u503C\uFF08\u5982URL\u53C2\u6570\u3001HTTP\u8BF7\u6C42\u5934\uFF09\u6765\u8FDB\u884C\u9650\u6D41\u63A7\u5236\u3002\u4EE5\u4E0B\u662F\u8BE6\u7EC6\u7684\u64CD\u4F5C\u6B65\u9AA4\u548C\u8BF4\u660E\uFF1A### \u5206\u6790\u95EE\u9898\u539F\u56E0\u63A5\u53E3\u9650\u6D41\u7684\u9700\u6C42\u901A\u5E38\u6E90\u81EA\u4E8E\u4FDD\u62A4\u540E\u7AEF\u670D\u52A1\u514D\u53D7\u77AC\u65F6\u5927\u6D41\u91CF\u51B2\u51FB\uFF0C\u786E\u4FDD\u670D\u52A1\u7A33\u5B9A\u6027\u548C\u8D44\u6E90\u5408\u7406\u5206\u914D\u3002Higress",tags:["higress","\u63A5\u53E3","\u9650\u6D41","\u65B9\u6CD5","\u5B9E\u73B0","\u600E\u4E48\u505A"],keywords:["higress","\u63A5\u53E3","\u9650\u6D41","\u65B9\u6CD5","\u5B9E\u73B0","\u600E\u4E48\u505A"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17024.md",a=void 0,n=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u63A5\u53E3\u9650\u6D41\u600E\u4E48\u505A  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u4E3A\u4E86\u5B9E\u73B0Higress\u63A5\u53E3\u9650\u6D41\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u5176\u63D0\u4F9B\u7684\`key-rate-limit\`\u63D2\u4EF6\u6765\u6839\u636E\u7279\u5B9A\u7684\u952E\u503C\uFF08\u5982URL\u53C2\u6570\u3001HTTP\u8BF7\u6C42\u5934\uFF09\u6765\u8FDB\u884C\u9650\u6D41\u63A7\u5236\u3002\u4EE5\u4E0B\u662F\u8BE6\u7EC6\u7684\u64CD\u4F5C\u6B65\u9AA4\u548C\u8BF4\u660E\uFF1A

### \u5206\u6790\u95EE\u9898\u539F\u56E0
\u63A5\u53E3\u9650\u6D41\u7684\u9700\u6C42\u901A\u5E38\u6E90\u81EA\u4E8E\u4FDD\u62A4\u540E\u7AEF\u670D\u52A1\u514D\u53D7\u77AC\u65F6\u5927\u6D41\u91CF\u51B2\u51FB\uFF0C\u786E\u4FDD\u670D\u52A1\u7A33\u5B9A\u6027\u548C\u8D44\u6E90\u5408\u7406\u5206\u914D\u3002Higress\u901A\u8FC7\u5176\u63D2\u4EF6\u7CFB\u7EDF\uFF0C\u7279\u522B\u662F\`key-rate-limit\`\u63D2\u4EF6\uFF0C\u80FD\u591F\u5B9E\u73B0\u7075\u6D3B\u4E14\u7CBE\u51C6\u7684\u9650\u6D41\u7B56\u7565\uFF0C\u9488\u5BF9\u4E0D\u540C\u7684\u8BF7\u6C42\u5C5E\u6027\u8BBE\u7F6E\u4E0D\u540C\u7684\u9650\u6D41\u89C4\u5219\u3002

### \u5B9E\u65BD\u6B65\u9AA4

#### 1. \u9009\u62E9\u952E\u503C\u6765\u6E90
- **\u5982\u679C\u8981\u6839\u636EURL\u53C2\u6570\u9650\u6D41**\uFF0C\u4F60\u9700\u8981\u5728\u914D\u7F6E\u4E2D\u6307\u5B9A\`limit_by_param\`\u5B57\u6BB5\uFF0C\u5E76\u586B\u5165\u4F5C\u4E3A\u9650\u6D41\u4F9D\u636E\u7684\u53C2\u6570\u540D\u3002
- **\u5982\u679C\u8981\u6839\u636EHTTP\u8BF7\u6C42\u5934\u9650\u6D41**\uFF0C\u5219\u5E94\u914D\u7F6E\`limit_by_header\`\u5B57\u6BB5\uFF0C\u586B\u5165\u76F8\u5E94\u7684\u8BF7\u6C42\u5934\u540D\u79F0\u3002

#### 2. \u5B9A\u4E49\u9650\u6D41\u89C4\u5219
- \u5728\`limit_keys\`\u6570\u7EC4\u4E2D\uFF0C\u4E3A\u6BCF\u4E2A\u9700\u8981\u9650\u5236\u7684\u952E\u503C\u6DFB\u52A0\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u660E\u786E\u6307\u5B9A\uFF1A
  - \`key\`: \u5339\u914D\u7684\u952E\u503C\u3002
  - \u4EE5\u53CA\u81F3\u5C11\u4E00\u4E2A\u65F6\u95F4\u7A97\u53E3\u5185\u7684\u8BF7\u6C42\u9650\u5236\u6570\uFF0C\u4F8B\u5982\`query_per_second\`\u3001\`query_per_minute\`\u7B49\u3002

#### \u914D\u7F6E\u793A\u4F8B
\u5047\u8BBE\u6211\u4EEC\u8981\u6839\u636E\u8BF7\u6C42\u4E2D\u7684API\u5BC6\u94A5\uFF08\u4ECEURL\u53C2\u6570\`apikey\`\u83B7\u53D6\uFF09\u5B9E\u65BD\u9650\u6D41\uFF0C\u5141\u8BB8\u6BCF\u4E2A\u5BC6\u94A5\u6BCF\u79D2\u6700\u591A10\u6B21\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
limit_by_param: apikey
limit_keys:
- key: example-key-1
  query_per_second: 10
- key: example-key-2
  query_per_second: 5
\`\`\`

### \u89E3\u91CA
\u901A\u8FC7\u4E0A\u8FF0\u914D\u7F6E\uFF0CHigress\u5C06\u4F1A\u76D1\u63A7\u5230\u8FBE\u63A5\u53E3\u7684\u8BF7\u6C42\uFF0C\u6839\u636E\u8BF7\u6C42\u4E2D\u6307\u5B9A\u53C2\u6570\uFF08\u6216\u8BF7\u6C42\u5934\uFF09\u7684\u503C\uFF0C\u5E94\u7528\u5BF9\u5E94\u7684\u9650\u6D41\u7B56\u7565\u3002\u6BD4\u5982\uFF0C\u5F53\u8BF7\u6C42\u643A\u5E26\u7684\`apikey\`\u4E3A\`example-key-1\`\u65F6\uFF0C\u8BE5API\u6BCF\u79D2\u53EA\u80FD\u88AB\u8C03\u752810\u6B21\uFF1B\u5982\u679C\u662F\`example-key-2\`\uFF0C\u5219\u9650\u6D41\u4E3A\u6BCF\u79D25\u6B21\u3002\u8FD9\u6837\u7684\u8BBE\u8BA1\u8BA9\u670D\u52A1\u80FD\u591F\u5BF9\u4E0D\u540C\u5BA2\u6237\u7AEF\u6216\u7528\u6237\u8FDB\u884C\u7CBE\u7EC6\u5316\u7684\u8BBF\u95EE\u63A7\u5236\uFF0C\u6709\u6548\u9632\u6B62\u56E0\u4E2A\u522B\u7528\u6237\u7684\u9AD8\u5E76\u53D1\u8BF7\u6C42\u5BFC\u81F4\u7684\u670D\u52A1\u8FC7\u8F7D\u3002

### \u6CE8\u610F
- \u786E\u4FDD\u914D\u7F6E\u7B26\u5408\u5B9E\u9645\u4E1A\u52A1\u9700\u6C42\uFF0C\u907F\u514D\u8FC7\u5EA6\u9650\u6D41\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002
- \u76D1\u63A7\u9650\u6D41\u6548\u679C\u5E76\u9002\u65F6\u8C03\u6574\u7B56\u7565\uFF0C\u4EE5\u8FBE\u5230\u6700\u4F73\u7684\u4FDD\u62A4\u6548\u679C\u548C\u8D44\u6E90\u5229\u7528\u7387\u3002

### \u53C2\u8003\u94FE\u63A5
- Higress Key\u9650\u6D41\u63D2\u4EF6\u6E90\u7801\uFF1A[GitHub - Alibaba/Higress Key\u9650\u6D41\u63D2\u4EF6](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/cluster-key-rate-limit)
- \u867D\u7136\u63D0\u53CA\u4E86\u57FA\u4E8ESentinel\u7684\u5165\u53E3\u7194\u65AD\u9650\u6D41\uFF0C\u4F46\u672C\u56DE\u7B54\u4E3B\u8981\u805A\u7126\u4E8E\u57FA\u4E8EKey\u7684\u9650\u6D41\u5B9E\u73B0\uFF0C\u5173\u4E8ESentinel\u7684\u66F4\u6DF1\u5165\u5E94\u7528\uFF0C\u8BF7\u5173\u6CE8\u6587\u6863\u8BA1\u5212\u63A8\u51FA\u7684\u65E5\u671F\uFF1A[Higress Sentinel\u6587\u6863](https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/sentinel.md)\uFF0C\u9884\u8BA12022\u5E7403\u670815\u65E5\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Key \u9650\u6D41 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Sentinel \u5B9E\u73B0\u5165\u53E3\u7194\u65AD\u9650\u6D41 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17025)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return e},o=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"\u5B9E\u65BD\u6B65\u9AA4",text:"\u5B9E\u65BD\u6B65\u9AA4"},{depth:4,slug:"1-\u9009\u62E9\u952E\u503C\u6765\u6E90",text:"1. \u9009\u62E9\u952E\u503C\u6765\u6E90"},{depth:4,slug:"2-\u5B9A\u4E49\u9650\u6D41\u89C4\u5219",text:"2. \u5B9A\u4E49\u9650\u6D41\u89C4\u5219"},{depth:4,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:3,slug:"\u6CE8\u610F",text:"\u6CE8\u610F"},{depth:3,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=p((f,_,b)=>{const{layout:k,...r}=i;return r.file=t,r.url=a,c`${u()}${y(e)}`})});export{s as Content,m as __tla,l as compiledContent,s as default,t as file,i as frontmatter,o as getHeadings,n as rawContent,a as url};
