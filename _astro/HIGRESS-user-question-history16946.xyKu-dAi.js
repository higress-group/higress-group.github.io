import{c as p,__tla as c}from"./astro-component.CXlaF79K.js";import{r as d,m as h,u,__tla as g}from"./constant.BTMRFRkb.js";import{__tla as f}from"./astro/assets-service.DQopRnBr.js";let e,n,o,t,l,i,a,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>docker\u5355\u673A\u5B89\u88C5Higress\u8BE6\u7EC6\u6B65\u9AA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u8FD9\u91CC\u662F\u4F7F\u7528 Docker Compose \u5728\u5355\u673A\u4E0A\u5B89\u88C5 Higress \u7F51\u5173\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A</p>
<h3 id="1-\u51C6\u5907\u5DE5\u4F5C">1. \u51C6\u5907\u5DE5\u4F5C</h3>
<p>\u786E\u4FDD\u60A8\u7684\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5\uFF1A</p>
<ul>
<li>Docker</li>
<li>Docker Compose</li>
</ul>
<h3 id="2-\u4E0B\u8F7D\u5B89\u88C5\u811A\u672C">2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C</h3>
<p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7D Higress \u7684\u5B89\u88C5\u811A\u672C\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s --"><div></div></button></div></figure></div>
<h3 id="3-\u914D\u7F6E\u5B89\u88C5\u53C2\u6570">3. \u914D\u7F6E\u5B89\u88C5\u53C2\u6570</h3>
<p>\u5B89\u88C5\u811A\u672C\u63D0\u4F9B\u4E86\u591A\u4E2A\u9009\u9879\u6765\u81EA\u5B9A\u4E49\u5B89\u88C5\u8FC7\u7A0B\uFF0C\u4EE5\u4E0B\u662F\u5173\u952E\u53C2\u6570\u53CA\u5176\u8BF4\u660E\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u9700\u8981\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF0C\u8981\u8FDB\u884C\u57FA\u672C\u7684\u5355\u673A\u90E8\u7F72\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u53C2\u6570\u7EC4\u5408\uFF1A</p>
<ul>
<li>\u76EE\u6807\u5B89\u88C5\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A <code dir="auto">./higress</code></li>
<li>\u82E5\u8981\u81EA\u52A8\u542F\u52A8 Higress\uFF0C\u5728\u547D\u4EE4\u540E\u6DFB\u52A0 <code dir="auto">-a</code> \u6216 <code dir="auto">--auto-run</code></li>
<li>\u914D\u7F6E\u670D\u52A1 URL\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E0D\u63D0\u4F9B\u5916\u90E8\u914D\u7F6E\u670D\u52A1\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5185\u7F6E\u7684 Nacos \u670D\u52A1\uFF0C\u901A\u8FC7 <code dir="auto">--use-builtin-nacos</code> \u53C2\u6570\u542F\u7528</li>
</ul>
<p>\u793A\u4F8B\u547D\u4EE4\uFF08\u5305\u62EC\u81EA\u52A8\u542F\u52A8\u548C\u4F7F\u7528\u5185\u7F6E Nacos\uFF09:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--use-builtin-nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress -a --use-builtin-nacos"><div></div></button></div></figure></div>
<h3 id="4-\u6267\u884C\u5B89\u88C5">4. \u6267\u884C\u5B89\u88C5</h3>
<p>\u6309\u7167\u4E0A\u8FF0\u914D\u7F6E\u6267\u884C\u5B89\u88C5\u547D\u4EE4\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u5B8C\u6210\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u4E0B\u8F7D\u6240\u9700\u7684 Docker \u955C\u50CF</li>
<li>\u521B\u5EFA\u5E76\u542F\u52A8 Docker Compose \u5BB9\u5668\uFF0C\u5305\u62EC apiserver\u3001controller\u3001pilot\u3001gateway \u548C console</li>
<li>\u5982\u679C\u9009\u62E9\u4E86\u5185\u7F6E Nacos\uFF0C\u4E5F\u4F1A\u4E00\u540C\u90E8\u7F72</li>
</ul>
<h3 id="5-\u9A8C\u8BC1\u5B89\u88C5">5. \u9A8C\u8BC1\u5B89\u88C5</h3>
<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u9A8C\u8BC1 Higress \u662F\u5426\u6210\u529F\u542F\u52A8\uFF1A</p>
<ul>
<li>\u8BBF\u95EE Higress Console\uFF0C\u5176\u9ED8\u8BA4\u76D1\u542C\u7AEF\u53E3\u4E3A 8080\uFF08\u9664\u975E\u60A8\u4FEE\u6539\u4E86 <code dir="auto">--console-port</code>\uFF09\u3002\u4F8B\u5982\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165 <code dir="auto">http://localhost:8080</code>\u3002</li>
<li>\u67E5\u770B Docker Compose \u65E5\u5FD7\u4EE5\u786E\u8BA4\u5404\u4E2A\u670D\u52A1\u662F\u5426\u6B63\u5E38\u8FD0\u884C\u3002</li>
</ul>
<h3 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h3>
<ul>
<li>\u5982\u6587\u6863\u4E2D\u6240\u8FF0\uFF0CStandalone \u6A21\u5F0F\u4E3B\u8981\u9002\u7528\u4E8E\u672C\u5730\u90E8\u7F72\u548C\u6D4B\u8BD5\uFF0C\u5BF9\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u63A8\u8350\u4F7F\u7528\u4E91\u539F\u751F\u6A21\u5F0F\u90E8\u7F72\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003<a href="https://higress.io/zh-cn/docs/ops/deploy-by-helm" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F\u6A21\u5F0F\u90E8\u7F72\u6587\u6863</a>\u3002</li>
</ul>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u5C06\u6307\u5BFC\u60A8\u5B8C\u6210 Higress \u5728\u5355\u673A\u4E0A\u7684 Docker Compose \u90E8\u7F72\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8C03\u6574\u5B89\u88C5\u53C2\u6570\uFF0C\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u7684\u90E8\u7F72\u6761\u4EF6\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16953" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16946",title:"docker\u5355\u673A\u5B89\u88C5Higress\u8BE6\u7EC6\u6B65\u9AA4",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u8FD9\u91CC\u662F\u4F7F\u7528 Docker Compose \u5728\u5355\u673A\u4E0A\u5B89\u88C5 Higress \u7F51\u5173\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A### 1. \u51C6\u5907\u5DE5\u4F5C\u786E\u4FDD\u60A8\u7684\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5\uFF1A- Docker- Docker Compose### 2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C\u6253\u5F00\u7EC8\u7AEF\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7D Higress \u7684\u5B89\u88C5\u811A\u672C\uFF1A```shellcurl",tags:["higress","docker","\u5355\u673A","\u5B89\u88C5","\u8BE6\u7EC6",""],keywords:["higress","docker","\u5355\u673A","\u5B89\u88C5","\u8BE6\u7EC6",""]},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16946.md",a=void 0,i=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 docker\u5355\u673A\u5B89\u88C5Higress\u8BE6\u7EC6\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u8FD9\u91CC\u662F\u4F7F\u7528 Docker Compose \u5728\u5355\u673A\u4E0A\u5B89\u88C5 Higress \u7F51\u5173\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A

### 1. \u51C6\u5907\u5DE5\u4F5C
\u786E\u4FDD\u60A8\u7684\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5\uFF1A
- Docker
- Docker Compose

### 2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C
\u6253\u5F00\u7EC8\u7AEF\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7D Higress \u7684\u5B89\u88C5\u811A\u672C\uFF1A

\`\`\`shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s --
\`\`\`

### 3. \u914D\u7F6E\u5B89\u88C5\u53C2\u6570
\u5B89\u88C5\u811A\u672C\u63D0\u4F9B\u4E86\u591A\u4E2A\u9009\u9879\u6765\u81EA\u5B9A\u4E49\u5B89\u88C5\u8FC7\u7A0B\uFF0C\u4EE5\u4E0B\u662F\u5173\u952E\u53C2\u6570\u53CA\u5176\u8BF4\u660E\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u9700\u8981\u7684\u53C2\u6570\u3002\u4F8B\u5982\uFF0C\u8981\u8FDB\u884C\u57FA\u672C\u7684\u5355\u673A\u90E8\u7F72\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u53C2\u6570\u7EC4\u5408\uFF1A

- \u76EE\u6807\u5B89\u88C5\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A \`./higress\`
- \u82E5\u8981\u81EA\u52A8\u542F\u52A8 Higress\uFF0C\u5728\u547D\u4EE4\u540E\u6DFB\u52A0 \`-a\` \u6216 \`--auto-run\`
- \u914D\u7F6E\u670D\u52A1 URL\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4E0D\u63D0\u4F9B\u5916\u90E8\u914D\u7F6E\u670D\u52A1\uFF0C\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u5185\u7F6E\u7684 Nacos \u670D\u52A1\uFF0C\u901A\u8FC7 \`--use-builtin-nacos\` \u53C2\u6570\u542F\u7528

\u793A\u4F8B\u547D\u4EE4\uFF08\u5305\u62EC\u81EA\u52A8\u542F\u52A8\u548C\u4F7F\u7528\u5185\u7F6E Nacos\uFF09:

\`\`\`shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress -a --use-builtin-nacos
\`\`\`

### 4. \u6267\u884C\u5B89\u88C5
\u6309\u7167\u4E0A\u8FF0\u914D\u7F6E\u6267\u884C\u5B89\u88C5\u547D\u4EE4\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u5B8C\u6210\u4EE5\u4E0B\u64CD\u4F5C\uFF1A
- \u4E0B\u8F7D\u6240\u9700\u7684 Docker \u955C\u50CF
- \u521B\u5EFA\u5E76\u542F\u52A8 Docker Compose \u5BB9\u5668\uFF0C\u5305\u62EC apiserver\u3001controller\u3001pilot\u3001gateway \u548C console
- \u5982\u679C\u9009\u62E9\u4E86\u5185\u7F6E Nacos\uFF0C\u4E5F\u4F1A\u4E00\u540C\u90E8\u7F72

### 5. \u9A8C\u8BC1\u5B89\u88C5
\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u9A8C\u8BC1 Higress \u662F\u5426\u6210\u529F\u542F\u52A8\uFF1A
- \u8BBF\u95EE Higress Console\uFF0C\u5176\u9ED8\u8BA4\u76D1\u542C\u7AEF\u53E3\u4E3A 8080\uFF08\u9664\u975E\u60A8\u4FEE\u6539\u4E86 \`--console-port\`\uFF09\u3002\u4F8B\u5982\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165 \`http://localhost:8080\`\u3002
- \u67E5\u770B Docker Compose \u65E5\u5FD7\u4EE5\u786E\u8BA4\u5404\u4E2A\u670D\u52A1\u662F\u5426\u6B63\u5E38\u8FD0\u884C\u3002

### \u6CE8\u610F\u4E8B\u9879
- \u5982\u6587\u6863\u4E2D\u6240\u8FF0\uFF0CStandalone \u6A21\u5F0F\u4E3B\u8981\u9002\u7528\u4E8E\u672C\u5730\u90E8\u7F72\u548C\u6D4B\u8BD5\uFF0C\u5BF9\u4E8E\u751F\u4EA7\u73AF\u5883\uFF0C\u63A8\u8350\u4F7F\u7528\u4E91\u539F\u751F\u6A21\u5F0F\u90E8\u7F72\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003[\u4E91\u539F\u751F\u6A21\u5F0F\u90E8\u7F72\u6587\u6863](https://higress.io/zh-cn/docs/ops/deploy-by-helm)\u3002

\u4EE5\u4E0A\u6B65\u9AA4\u5C06\u6307\u5BFC\u60A8\u5B8C\u6210 Higress \u5728\u5355\u673A\u4E0A\u7684 Docker Compose \u90E8\u7F72\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8C03\u6574\u5B89\u88C5\u53C2\u6570\uFF0C\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u7684\u90E8\u7F72\u6761\u4EF6\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16953)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u51C6\u5907\u5DE5\u4F5C",text:"1. \u51C6\u5907\u5DE5\u4F5C"},{depth:3,slug:"2-\u4E0B\u8F7D\u5B89\u88C5\u811A\u672C",text:"2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C"},{depth:3,slug:"3-\u914D\u7F6E\u5B89\u88C5\u53C2\u6570",text:"3. \u914D\u7F6E\u5B89\u88C5\u53C2\u6570"},{depth:3,slug:"4-\u6267\u884C\u5B89\u88C5",text:"4. \u6267\u884C\u5B89\u88C5"},{depth:3,slug:"5-\u9A8C\u8BC1\u5B89\u88C5",text:"5. \u9A8C\u8BC1\u5B89\u88C5"},{depth:3,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=p((E,F,m)=>{const{layout:b,...r}=t;return r.file=o,r.url=a,d`${h()}${u(s)}`})});export{e as Content,y as __tla,n as compiledContent,e as default,o as file,t as frontmatter,l as getHeadings,i as rawContent,a as url};
