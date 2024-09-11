import{c as l,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as d,m as h,u as g,__tla as u}from"./constant.8Jd2BsE0.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let e,r,o,t,i,p,a,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>docker compose \u5B89\u88C5Higress\u8BE6\u7EC6\u6B65\u9AA4</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u57FA\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u7684\u6307\u5BFC\uFF0C\u4EE5\u4E0B\u662F\u5B89\u88C5Higress\u4F7F\u7528Docker Compose\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A</p>
<h3 id="1-\u51C6\u5907\u5DE5\u4F5C">1. \u51C6\u5907\u5DE5\u4F5C</h3>
<p>\u786E\u4FDD\u4F60\u7684\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5Docker\u548CDocker Compose\uFF0C\u56E0\u4E3AHigress\u7684\u72EC\u7ACB\u90E8\u7F72\u4F9D\u8D56\u4E8E\u8FD9\u4E9B\u57FA\u7840\u5DE5\u5177\u3002</p>
<h3 id="2-\u4E0B\u8F7D\u5B89\u88C5\u811A\u672C">2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C</h3>
<p>\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7DHigress\u7684\u5B89\u88C5\u811A\u672C\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s --"><div></div></button></div></figure></div>
<p>\u6B64\u547D\u4EE4\u4F1A\u4E0B\u8F7D\u5E76\u6267\u884C\u4E00\u4E2A\u5B89\u88C5\u811A\u672C\uFF0C\u4F46\u8FD8\u672A\u5E26\u5177\u4F53\u53C2\u6570\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u4F1A\u6DFB\u52A0\u5FC5\u8981\u7684\u53C2\u6570\u4EE5\u5B8C\u6210\u5B9A\u5236\u5316\u5B89\u88C5\u3002</p>
<h3 id="3-\u5B9A\u5236\u5316\u5B89\u88C5\u53C2\u6570">3. \u5B9A\u5236\u5316\u5B89\u88C5\u53C2\u6570</h3>
<p>\u6839\u636E\u4F60\u7684\u9700\u6C42\uFF0C\u9009\u62E9\u5408\u9002\u7684\u5B89\u88C5\u53C2\u6570\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5173\u952E\u53C2\u6570\u7684\u4F8B\u5B50\u53CA\u5176\u8BF4\u660E\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF1A</p>
<ul>
<li><strong>\u76EE\u6807\u5B89\u88C5\u76EE\u5F55</strong> (<code dir="auto">DESTINATION</code>): \u6307\u5B9AHigress\u5B89\u88C5\u7684\u76EE\u6807\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A<code dir="auto">./higress</code>\u3002</li>
<li><strong>\u81EA\u52A8\u542F\u52A8</strong> (<code dir="auto">-a</code> \u6216 <code dir="auto">--auto-run</code>): \u6DFB\u52A0\u6B64\u53C2\u6570\u53EF\u4EE5\u5728\u914D\u7F6E\u5B8C\u6210\u540E\u81EA\u52A8\u542F\u52A8Higress\u3002</li>
<li><strong>\u914D\u7F6E\u670D\u52A1URL</strong> (<code dir="auto">-c</code> \u6216 <code dir="auto">--config-url</code>): \u5982\u679C\u4F7F\u7528\u5916\u90E8Nacos\u6216\u672C\u5730\u6587\u4EF6\u5B58\u50A8\u914D\u7F6E\uFF0C\u9700\u63D0\u4F9B\u76F8\u5E94\u7684URL\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u72EC\u7ACBNacos\u670D\u52A1\uFF0C\u53EF\u4EE5\u662F<code dir="auto">nacos://192.168.0.1:8848</code>\uFF1B\u5982\u679C\u662F\u672C\u5730\u6587\u4EF6\uFF0C\u5219\u4E3A<code dir="auto">file:///opt/higress/conf</code>\u3002</li>
<li><strong>\u4F7F\u7528\u5185\u7F6ENacos\u670D\u52A1</strong> (<code dir="auto">--use-builtin-nacos</code>): \u82E5\u5E0C\u671B\u4F7F\u7528Higress\u5185\u7F6E\u7684Nacos\u670D\u52A1\uFF0C\u6DFB\u52A0\u6B64\u53C2\u6570\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E0D\u9002\u5408\u751F\u4EA7\u73AF\u5883\u3002</li>
<li><strong>\u5176\u4ED6\u7AEF\u53E3\u914D\u7F6E</strong>: \u53EF\u4EE5\u901A\u8FC7<code dir="auto">--nacos-port</code>\u3001<code dir="auto">--gateway-http-port</code>\u7B49\u53C2\u6570\u81EA\u5B9A\u4E49\u5404\u7EC4\u4EF6\u4F7F\u7528\u7684\u7AEF\u53E3\u3002</li>
</ul>
<h3 id="\u793A\u4F8B\u547D\u4EE4">\u793A\u4F8B\u547D\u4EE4</h3>
<p>\u5047\u8BBE\u4F60\u60F3\u5728\u672C\u5730\u76EE\u5F55\u4E0B\u5B89\u88C5Higress\uFF0C\u4F7F\u7528\u5185\u7F6ENacos\u670D\u52A1\uFF0C\u5E76\u81EA\u52A8\u542F\u52A8\uFF0C\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--use-builtin-nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress -a --use-builtin-nacos"><div></div></button></div></figure></div>
<h3 id="4-\u6267\u884C\u5B89\u88C5">4. \u6267\u884C\u5B89\u88C5</h3>
<p>\u8F93\u5165\u5B9A\u5236\u5316\u7684\u547D\u4EE4\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u4E0B\u8F7DDocker\u955C\u50CF\u5E76\u542F\u52A8\u76F8\u5173\u670D\u52A1\u3002\u8BF7\u8010\u5FC3\u7B49\u5F85\u76F4\u5230\u6240\u6709\u670D\u52A1\u6B63\u5E38\u8FD0\u884C\u3002</p>
<h3 id="5-\u9A8C\u8BC1\u5B89\u88C5">5. \u9A8C\u8BC1\u5B89\u88C5</h3>
<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE<code dir="auto">http://localhost:8080</code>(\u9ED8\u8BA4\u7684Console\u7AEF\u53E3)\u6765\u9A8C\u8BC1Higress Console\u662F\u5426\u53EF\u7528\u3002\u540C\u65F6\uFF0C\u68C0\u67E5\u5176\u4ED6\u670D\u52A1\u5982Gateway\u662F\u5426\u5728\u6307\u5B9A\u7AEF\u53E3\u4E0A\u76D1\u542C\u3002</p>
<h3 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h3>
<ul>
<li>\u6839\u636E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u63D0\u793A\uFF0CStandalone\u6A21\u5F0F\u66F4\u9002\u5408\u672C\u5730\u90E8\u7F72\u6D4B\u8BD5\uFF0C\u751F\u4EA7\u73AF\u5883\u63A8\u8350\u4F7F\u7528\u4E91\u539F\u751F\u6A21\u5F0F\u90E8\u7F72\u3002</li>
<li>\u786E\u4FDD\u7406\u89E3\u6BCF\u4E2A\u53C2\u6570\u7684\u610F\u4E49\uFF0C\u907F\u514D\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u8BEF\u7528\u5185\u7F6ENacos\u6216\u5176\u4ED6\u975E\u751F\u4EA7\u7EA7\u914D\u7F6E\u3002</li>
</ul>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u5229\u7528Docker Compose\u72EC\u7ACB\u90E8\u7F72Higress\uFF0C\u6BCF\u4E00\u6B65\u90FD\u7D27\u5BC6\u5173\u8054\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u6587\u6863\u63D0\u4F9B\u7684\u4FE1\u606F\u4E0E\u5EFA\u8BAE\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16954" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16947",title:"docker compose \u5B89\u88C5Higress\u8BE6\u7EC6\u6B65\u9AA4",date:"2024-09-11",category:"expertConsultation",description:"\u57FA\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u7684\u6307\u5BFC\uFF0C\u4EE5\u4E0B\u662F\u5B89\u88C5Higress\u4F7F\u7528Docker Compose\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A### 1. \u51C6\u5907\u5DE5\u4F5C\u786E\u4FDD\u4F60\u7684\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5Docker\u548CDocker Compose\uFF0C\u56E0\u4E3AHigress\u7684\u72EC\u7ACB\u90E8\u7F72\u4F9D\u8D56\u4E8E\u8FD9\u4E9B\u57FA\u7840\u5DE5\u5177\u3002### 2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7DHigress\u7684\u5B89\u88C5"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16947.md",a=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 docker compose \u5B89\u88C5Higress\u8BE6\u7EC6\u6B65\u9AA4  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u57FA\u4E8E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u7684\u6307\u5BFC\uFF0C\u4EE5\u4E0B\u662F\u5B89\u88C5Higress\u4F7F\u7528Docker Compose\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF1A

### 1. \u51C6\u5907\u5DE5\u4F5C
\u786E\u4FDD\u4F60\u7684\u7CFB\u7EDF\u4E2D\u5DF2\u5B89\u88C5Docker\u548CDocker Compose\uFF0C\u56E0\u4E3AHigress\u7684\u72EC\u7ACB\u90E8\u7F72\u4F9D\u8D56\u4E8E\u8FD9\u4E9B\u57FA\u7840\u5DE5\u5177\u3002

### 2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C
\u6253\u5F00\u7EC8\u7AEF\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0B\u8F7DHigress\u7684\u5B89\u88C5\u811A\u672C\uFF1A
\`\`\`shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s --
\`\`\`
\u6B64\u547D\u4EE4\u4F1A\u4E0B\u8F7D\u5E76\u6267\u884C\u4E00\u4E2A\u5B89\u88C5\u811A\u672C\uFF0C\u4F46\u8FD8\u672A\u5E26\u5177\u4F53\u53C2\u6570\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u4F1A\u6DFB\u52A0\u5FC5\u8981\u7684\u53C2\u6570\u4EE5\u5B8C\u6210\u5B9A\u5236\u5316\u5B89\u88C5\u3002

### 3. \u5B9A\u5236\u5316\u5B89\u88C5\u53C2\u6570
\u6839\u636E\u4F60\u7684\u9700\u6C42\uFF0C\u9009\u62E9\u5408\u9002\u7684\u5B89\u88C5\u53C2\u6570\u3002\u4EE5\u4E0B\u662F\u4E00\u4E9B\u5173\u952E\u53C2\u6570\u7684\u4F8B\u5B50\u53CA\u5176\u8BF4\u660E\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF1A

- **\u76EE\u6807\u5B89\u88C5\u76EE\u5F55** (\`DESTINATION\`): \u6307\u5B9AHigress\u5B89\u88C5\u7684\u76EE\u6807\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u4E3A\`./higress\`\u3002
- **\u81EA\u52A8\u542F\u52A8** (\`-a\` \u6216 \`--auto-run\`): \u6DFB\u52A0\u6B64\u53C2\u6570\u53EF\u4EE5\u5728\u914D\u7F6E\u5B8C\u6210\u540E\u81EA\u52A8\u542F\u52A8Higress\u3002
- **\u914D\u7F6E\u670D\u52A1URL** (\`-c\` \u6216 \`--config-url\`): \u5982\u679C\u4F7F\u7528\u5916\u90E8Nacos\u6216\u672C\u5730\u6587\u4EF6\u5B58\u50A8\u914D\u7F6E\uFF0C\u9700\u63D0\u4F9B\u76F8\u5E94\u7684URL\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u72EC\u7ACBNacos\u670D\u52A1\uFF0C\u53EF\u4EE5\u662F\`nacos://192.168.0.1:8848\`\uFF1B\u5982\u679C\u662F\u672C\u5730\u6587\u4EF6\uFF0C\u5219\u4E3A\`file:///opt/higress/conf\`\u3002
- **\u4F7F\u7528\u5185\u7F6ENacos\u670D\u52A1** (\`--use-builtin-nacos\`): \u82E5\u5E0C\u671B\u4F7F\u7528Higress\u5185\u7F6E\u7684Nacos\u670D\u52A1\uFF0C\u6DFB\u52A0\u6B64\u53C2\u6570\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E0D\u9002\u5408\u751F\u4EA7\u73AF\u5883\u3002
- **\u5176\u4ED6\u7AEF\u53E3\u914D\u7F6E**: \u53EF\u4EE5\u901A\u8FC7\`--nacos-port\`\u3001\`--gateway-http-port\`\u7B49\u53C2\u6570\u81EA\u5B9A\u4E49\u5404\u7EC4\u4EF6\u4F7F\u7528\u7684\u7AEF\u53E3\u3002

### \u793A\u4F8B\u547D\u4EE4
\u5047\u8BBE\u4F60\u60F3\u5728\u672C\u5730\u76EE\u5F55\u4E0B\u5B89\u88C5Higress\uFF0C\u4F7F\u7528\u5185\u7F6ENacos\u670D\u52A1\uFF0C\u5E76\u81EA\u52A8\u542F\u52A8\uFF0C\u53EF\u4EE5\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A
\`\`\`shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress -a --use-builtin-nacos
\`\`\`

### 4. \u6267\u884C\u5B89\u88C5
\u8F93\u5165\u5B9A\u5236\u5316\u7684\u547D\u4EE4\u540E\uFF0C\u811A\u672C\u4F1A\u81EA\u52A8\u4E0B\u8F7DDocker\u955C\u50CF\u5E76\u542F\u52A8\u76F8\u5173\u670D\u52A1\u3002\u8BF7\u8010\u5FC3\u7B49\u5F85\u76F4\u5230\u6240\u6709\u670D\u52A1\u6B63\u5E38\u8FD0\u884C\u3002

### 5. \u9A8C\u8BC1\u5B89\u88C5
\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\`http://localhost:8080\`(\u9ED8\u8BA4\u7684Console\u7AEF\u53E3)\u6765\u9A8C\u8BC1Higress Console\u662F\u5426\u53EF\u7528\u3002\u540C\u65F6\uFF0C\u68C0\u67E5\u5176\u4ED6\u670D\u52A1\u5982Gateway\u662F\u5426\u5728\u6307\u5B9A\u7AEF\u53E3\u4E0A\u76D1\u542C\u3002

### \u6CE8\u610F\u4E8B\u9879
- \u6839\u636E\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u63D0\u793A\uFF0CStandalone\u6A21\u5F0F\u66F4\u9002\u5408\u672C\u5730\u90E8\u7F72\u6D4B\u8BD5\uFF0C\u751F\u4EA7\u73AF\u5883\u63A8\u8350\u4F7F\u7528\u4E91\u539F\u751F\u6A21\u5F0F\u90E8\u7F72\u3002
- \u786E\u4FDD\u7406\u89E3\u6BCF\u4E2A\u53C2\u6570\u7684\u610F\u4E49\uFF0C\u907F\u514D\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u8BEF\u7528\u5185\u7F6ENacos\u6216\u5176\u4ED6\u975E\u751F\u4EA7\u7EA7\u914D\u7F6E\u3002

\u4EE5\u4E0A\u6B65\u9AA4\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\u5982\u4F55\u5229\u7528Docker Compose\u72EC\u7ACB\u90E8\u7F72Higress\uFF0C\u6BCF\u4E00\u6B65\u90FD\u7D27\u5BC6\u5173\u8054\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u6587\u6863\u63D0\u4F9B\u7684\u4FE1\u606F\u4E0E\u5EFA\u8BAE\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u57FA\u4E8E Docker Compose \u8FDB\u884C\u72EC\u7ACB\u90E8\u7F72 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16954)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},r=function(){return s},i=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u51C6\u5907\u5DE5\u4F5C",text:"1. \u51C6\u5907\u5DE5\u4F5C"},{depth:3,slug:"2-\u4E0B\u8F7D\u5B89\u88C5\u811A\u672C",text:"2. \u4E0B\u8F7D\u5B89\u88C5\u811A\u672C"},{depth:3,slug:"3-\u5B9A\u5236\u5316\u5B89\u88C5\u53C2\u6570",text:"3. \u5B9A\u5236\u5316\u5B89\u88C5\u53C2\u6570"},{depth:3,slug:"\u793A\u4F8B\u547D\u4EE4",text:"\u793A\u4F8B\u547D\u4EE4"},{depth:3,slug:"4-\u6267\u884C\u5B89\u88C5",text:"4. \u6267\u884C\u5B89\u88C5"},{depth:3,slug:"5-\u9A8C\u8BC1\u5B89\u88C5",text:"5. \u9A8C\u8BC1\u5B89\u88C5"},{depth:3,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=l((E,F,m)=>{const{layout:b,...n}=t;return n.file=o,n.url=a,d`${h()}${g(s)}`})});export{e as Content,y as __tla,r as compiledContent,e as default,o as file,t as frontmatter,i as getHeadings,p as rawContent,a as url};
