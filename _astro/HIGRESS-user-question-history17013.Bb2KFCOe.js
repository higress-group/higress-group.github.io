import{c as l,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as p,m as u,u as f,__tla as h}from"./constant.AEgXKg10.js";import{__tla as g}from"./astro/assets-service.tyfV9CK3.js";let s,i,t,o,r,c,a,y=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>waf \u914D\u7F6E\u8BE6\u89E3</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress WAF \u914D\u7F6E\u8BE6\u89E3\u5982\u4E0B\uFF1A</p>
<h3 id="1-\u529F\u80FD\u6982\u8FF0">1. \u529F\u80FD\u6982\u8FF0</h3>
<p>Higress\u5F00\u6E90\u7248WAF\u63D2\u4EF6\u65E8\u5728\u4E3A\u60A8\u7684\u5E94\u7528\u63D0\u4F9B\u57FA\u4E8EOWASP ModSecurity Core Rule Set (CRS)\u7684\u9632\u62A4\u3002CRS\u662F\u4E00\u5957\u5E7F\u6CDB\u8BA4\u53EF\u7684\u5B89\u5168\u89C4\u5219\u96C6\u5408\uFF0C\u7528\u4E8E\u68C0\u6D4B\u548C\u963B\u6B62\u5E38\u89C1\u7684Web\u653B\u51FB\uFF0C\u5982SQL\u6CE8\u5165\u3001\u8DE8\u7AD9\u811A\u672C(XSS)\u7B49\u3002</p>
<h3 id="2-\u542F\u7528owasp-crs">2. \u542F\u7528OWASP CRS</h3>
<p>\u8981\u542F\u7528OWASP CRS\uFF0C\u60A8\u9700\u8981\u5728\u914D\u7F6E\u4E2D\u8BBE\u7F6E<code dir="auto">useCRS</code>\u5B57\u6BB5\u4E3A<code dir="auto">true</code>\u3002\u8FD9\u5C06\u6FC0\u6D3BCRS\u63D0\u4F9B\u7684\u9ED8\u8BA4\u5B89\u5168\u7B56\u7565\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="useCRS: true"><div></div></button></div></figure></div>
<p><strong>\u94FE\u63A5:</strong> <a href="https://github.com/coreruleset/coreruleset/tree/v3.3.2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">coreruleset</a></p>
<h3 id="3-\u914D\u7F6E\u89C4\u5219\u5F15\u64CE\u6A21\u5F0F">3. \u914D\u7F6E\u89C4\u5219\u5F15\u64CE\u6A21\u5F0F</h3>
<ul>
<li><strong>\u89C2\u5BDF\u6A21\u5F0F</strong>\uFF1A\u6B64\u6A21\u5F0F\u4E0B\uFF0CWAF\u4EC5\u8BB0\u5F55\u6F5C\u5728\u7684\u653B\u51FB\u800C\u4E0D\u5B9E\u9645\u963B\u6B62\u3002\u9002\u5408\u6D4B\u8BD5\u548C\u8C03\u8BD5\u9636\u6BB5\u3002
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine DetectionOnly"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="secRules:\x7F- &#x22;SecRuleEngine DetectionOnly&#x22;"><div></div></button></div></figure></div>
</li>
<li><strong>\u9632\u62A4\u6A21\u5F0F</strong>\uFF1A\u542F\u7528\u540E\uFF0CWAF\u5C06\u6309\u7167\u914D\u7F6E\u7684\u89C4\u5219\u6267\u884C\u9632\u62A4\u52A8\u4F5C\uFF0C\u5982\u62D2\u7EDD\u8FDD\u89C4\u8BF7\u6C42\u3002
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="secRules:\x7F- &#x22;SecRuleEngine On&#x22;"><div></div></button></div></figure></div>
</li>
</ul>
<h3 id="4-\u81EA\u5B9A\u4E49\u89C4\u5219">4. \u81EA\u5B9A\u4E49\u89C4\u5219</h3>
<p>\u60A8\u53EF\u4EE5\u901A\u8FC7<code dir="auto">secRules</code>\u5B57\u6BB5\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684WAF\u9632\u62A4\u89C4\u5219\uFF0C\u9075\u5FAA<a href="https://coraza.io/docs/seclang/directives/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SecLang\u8BED\u6CD5</a>\u3002\u4F8B\u5982\uFF0C\u963B\u6B62\u6240\u6709\u8BBF\u95EE/admin\u8DEF\u5F84\u7684\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="secRules:\x7F- &#x22;SecRuleEngine On&#x22;\x7F- &#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;"><div></div></button></div></figure></div>
<p>\u8FD9\u6761\u89C4\u5219\u4F1A\u5728\u8BF7\u6C42\u7684\u7B2C\u4E00\u9636\u6BB5\u68C0\u67E5<code dir="auto">REQUEST_URI</code>\uFF0C\u5982\u679C\u5176\u7CBE\u786E\u7B49\u4E8E<code dir="auto">/admin</code>\uFF08\u5FFD\u7565\u5927\u5C0F\u5199\uFF09\uFF0C\u5219\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002</p>
<h3 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h3>
<ul>
<li><strong>Body\u7F13\u5B58\u9650\u5236</strong>\uFF1A\u786E\u4FDD\u8BF7\u6C42\u548C\u54CD\u5E94Body\u7684\u5927\u5C0F\u4E0D\u8D85\u8FC7<code dir="auto">downstream.connectionBufferLimits</code>\u914D\u7F6E\u503C\uFF0C\u4EE5\u907F\u514D\u8BF7\u6C42\u6216\u54CD\u5E94\u5F02\u5E38\u3002</li>
<li><strong>\u6027\u80FD\u8003\u91CF</strong>\uFF1A\u4E0D\u8981\u8FC7\u5EA6\u589E\u5927<code dir="auto">downstream.connectionBufferLimits</code>\uFF0C\u4EE5\u514D\u5728\u7F51\u7EDC\u5EF6\u8FDF\u8F83\u9AD8\u65F6\u5BFC\u81F4\u7F51\u5173\u5185\u5B58\u5360\u7528\u8FC7\u591A\u3002</li>
</ul>
<h3 id="\u7ED3\u8BBA">\u7ED3\u8BBA</h3>
<p>\u901A\u8FC7\u4E0A\u8FF0\u914D\u7F6E\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u7075\u6D3B\u8C03\u6574Higress WAF\u7684\u884C\u4E3A\uFF0C\u4ECE\u4EC5\u8BB0\u5F55\u65E5\u5FD7\u7684\u89C2\u5BDF\u6A21\u5F0F\u5230\u79EF\u6781\u963B\u6B62\u5A01\u80C1\u7684\u9632\u62A4\u6A21\u5F0F\uFF0C\u5E76\u80FD\u8F7B\u677E\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219\u4EE5\u5E94\u5BF9\u7279\u5B9A\u5B89\u5168\u573A\u666F\u3002\u8BF7\u52A1\u5FC5\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u524D\uFF0C\u5145\u5206\u6D4B\u8BD5\u914D\u7F6E\u4EE5\u786E\u4FDD\u4E1A\u52A1\u517C\u5BB9\u6027\u548C\u5B89\u5168\u6027\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress WAF \u9632\u62A4</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17019" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,o={id:"question-history-17013",title:"waf \u914D\u7F6E\u8BE6\u89E3",date:"2024-09-26",category:"expertConsultation",description:"Higress WAF \u914D\u7F6E\u8BE6\u89E3\u5982\u4E0B\uFF1A### 1. \u529F\u80FD\u6982\u8FF0Higress\u5F00\u6E90\u7248WAF\u63D2\u4EF6\u65E8\u5728\u4E3A\u60A8\u7684\u5E94\u7528\u63D0\u4F9B\u57FA\u4E8EOWASP ModSecurity Core Rule Set (CRS)\u7684\u9632\u62A4\u3002CRS\u662F\u4E00\u5957\u5E7F\u6CDB\u8BA4\u53EF\u7684\u5B89\u5168\u89C4\u5219\u96C6\u5408\uFF0C\u7528\u4E8E\u68C0\u6D4B\u548C\u963B\u6B62\u5E38\u89C1\u7684Web\u653B\u51FB\uFF0C\u5982SQL\u6CE8\u5165\u3001\u8DE8\u7AD9\u811A\u672C(XSS)\u7B49\u3002#",tags:["higress","waf","\u914D\u7F6E","\u8BE6\u89E3"],keywords:["higress","waf","\u914D\u7F6E","\u8BE6\u89E3"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17013.md",a=void 0,c=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 waf \u914D\u7F6E\u8BE6\u89E3  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress WAF \u914D\u7F6E\u8BE6\u89E3\u5982\u4E0B\uFF1A

### 1. \u529F\u80FD\u6982\u8FF0
Higress\u5F00\u6E90\u7248WAF\u63D2\u4EF6\u65E8\u5728\u4E3A\u60A8\u7684\u5E94\u7528\u63D0\u4F9B\u57FA\u4E8EOWASP ModSecurity Core Rule Set (CRS)\u7684\u9632\u62A4\u3002CRS\u662F\u4E00\u5957\u5E7F\u6CDB\u8BA4\u53EF\u7684\u5B89\u5168\u89C4\u5219\u96C6\u5408\uFF0C\u7528\u4E8E\u68C0\u6D4B\u548C\u963B\u6B62\u5E38\u89C1\u7684Web\u653B\u51FB\uFF0C\u5982SQL\u6CE8\u5165\u3001\u8DE8\u7AD9\u811A\u672C(XSS)\u7B49\u3002

### 2. \u542F\u7528OWASP CRS
\u8981\u542F\u7528OWASP CRS\uFF0C\u60A8\u9700\u8981\u5728\u914D\u7F6E\u4E2D\u8BBE\u7F6E\`useCRS\`\u5B57\u6BB5\u4E3A\`true\`\u3002\u8FD9\u5C06\u6FC0\u6D3BCRS\u63D0\u4F9B\u7684\u9ED8\u8BA4\u5B89\u5168\u7B56\u7565\u3002
\`\`\`yaml
useCRS: true
\`\`\`
**\u94FE\u63A5:** [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2)

### 3. \u914D\u7F6E\u89C4\u5219\u5F15\u64CE\u6A21\u5F0F
- **\u89C2\u5BDF\u6A21\u5F0F**\uFF1A\u6B64\u6A21\u5F0F\u4E0B\uFF0CWAF\u4EC5\u8BB0\u5F55\u6F5C\u5728\u7684\u653B\u51FB\u800C\u4E0D\u5B9E\u9645\u963B\u6B62\u3002\u9002\u5408\u6D4B\u8BD5\u548C\u8C03\u8BD5\u9636\u6BB5\u3002
  \`\`\`yaml
  secRules: 
  - "SecRuleEngine DetectionOnly"
  \`\`\`
- **\u9632\u62A4\u6A21\u5F0F**\uFF1A\u542F\u7528\u540E\uFF0CWAF\u5C06\u6309\u7167\u914D\u7F6E\u7684\u89C4\u5219\u6267\u884C\u9632\u62A4\u52A8\u4F5C\uFF0C\u5982\u62D2\u7EDD\u8FDD\u89C4\u8BF7\u6C42\u3002
  \`\`\`yaml
  secRules: 
  - "SecRuleEngine On"
  \`\`\`

### 4. \u81EA\u5B9A\u4E49\u89C4\u5219
\u60A8\u53EF\u4EE5\u901A\u8FC7\`secRules\`\u5B57\u6BB5\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684WAF\u9632\u62A4\u89C4\u5219\uFF0C\u9075\u5FAA[SecLang\u8BED\u6CD5](https://coraza.io/docs/seclang/directives/)\u3002\u4F8B\u5982\uFF0C\u963B\u6B62\u6240\u6709\u8BBF\u95EE/admin\u8DEF\u5F84\u7684\u8BF7\u6C42\uFF1A
\`\`\`yaml
secRules: 
- "SecRuleEngine On"
- "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
\`\`\`
\u8FD9\u6761\u89C4\u5219\u4F1A\u5728\u8BF7\u6C42\u7684\u7B2C\u4E00\u9636\u6BB5\u68C0\u67E5\`REQUEST_URI\`\uFF0C\u5982\u679C\u5176\u7CBE\u786E\u7B49\u4E8E\`/admin\`\uFF08\u5FFD\u7565\u5927\u5C0F\u5199\uFF09\uFF0C\u5219\u62D2\u7EDD\u8BE5\u8BF7\u6C42\u3002

### \u6CE8\u610F\u4E8B\u9879
- **Body\u7F13\u5B58\u9650\u5236**\uFF1A\u786E\u4FDD\u8BF7\u6C42\u548C\u54CD\u5E94Body\u7684\u5927\u5C0F\u4E0D\u8D85\u8FC7\`downstream.connectionBufferLimits\`\u914D\u7F6E\u503C\uFF0C\u4EE5\u907F\u514D\u8BF7\u6C42\u6216\u54CD\u5E94\u5F02\u5E38\u3002
- **\u6027\u80FD\u8003\u91CF**\uFF1A\u4E0D\u8981\u8FC7\u5EA6\u589E\u5927\`downstream.connectionBufferLimits\`\uFF0C\u4EE5\u514D\u5728\u7F51\u7EDC\u5EF6\u8FDF\u8F83\u9AD8\u65F6\u5BFC\u81F4\u7F51\u5173\u5185\u5B58\u5360\u7528\u8FC7\u591A\u3002

### \u7ED3\u8BBA
\u901A\u8FC7\u4E0A\u8FF0\u914D\u7F6E\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u9700\u6C42\u7075\u6D3B\u8C03\u6574Higress WAF\u7684\u884C\u4E3A\uFF0C\u4ECE\u4EC5\u8BB0\u5F55\u65E5\u5FD7\u7684\u89C2\u5BDF\u6A21\u5F0F\u5230\u79EF\u6781\u963B\u6B62\u5A01\u80C1\u7684\u9632\u62A4\u6A21\u5F0F\uFF0C\u5E76\u80FD\u8F7B\u677E\u5B9E\u73B0\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219\u4EE5\u5E94\u5BF9\u7279\u5B9A\u5B89\u5168\u573A\u666F\u3002\u8BF7\u52A1\u5FC5\u5728\u751F\u4EA7\u73AF\u5883\u90E8\u7F72\u524D\uFF0C\u5145\u5206\u6D4B\u8BD5\u914D\u7F6E\u4EE5\u786E\u4FDD\u4E1A\u52A1\u517C\u5BB9\u6027\u548C\u5B89\u5168\u6027\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress WAF \u9632\u62A4 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17019)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return e},r=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u529F\u80FD\u6982\u8FF0",text:"1. \u529F\u80FD\u6982\u8FF0"},{depth:3,slug:"2-\u542F\u7528owasp-crs",text:"2. \u542F\u7528OWASP CRS"},{depth:3,slug:"3-\u914D\u7F6E\u89C4\u5219\u5F15\u64CE\u6A21\u5F0F",text:"3. \u914D\u7F6E\u89C4\u5219\u5F15\u64CE\u6A21\u5F0F"},{depth:3,slug:"4-\u81EA\u5B9A\u4E49\u89C4\u5219",text:"4. \u81EA\u5B9A\u4E49\u89C4\u5219"},{depth:3,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"},{depth:3,slug:"\u7ED3\u8BBA",text:"\u7ED3\u8BBA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=l((v,S,E)=>{const{layout:R,...n}=o;return n.file=t,n.url=a,p`${u()}${f(e)}`})});export{s as Content,y as __tla,i as compiledContent,s as default,t as file,o as frontmatter,r as getHeadings,c as rawContent,a as url};
