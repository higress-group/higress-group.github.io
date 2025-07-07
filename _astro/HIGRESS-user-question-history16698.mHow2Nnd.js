import{c as l,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as c,m as E,u,__tla as y}from"./constant.ByWDeEHI.js";import{__tla as v}from"./astro/assets-service.BhtN0nM5.js";let e,p,a,n,o,d,t,h=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>ip-restriction \u600E\u4E48\u914D\u7F6E</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u914D\u7F6E Higress \u7684 <code dir="auto">ip-restriction</code> \u63D2\u4EF6\u4EE5\u5B9E\u73B0 IP \u9650\u5236\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u76F4\u63A5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A</p>
<h3 id="1-\u786E\u5B9A\u914D\u7F6E\u9700\u6C42">1. \u786E\u5B9A\u914D\u7F6E\u9700\u6C42</h3>
<ul>
<li><strong>\u51B3\u5B9A\u9650\u5236\u7C7B\u578B</strong>\uFF1A\u9996\u5148\uFF0C\u60A8\u9700\u8981\u786E\u5B9A\u662F\u8981\u8BBE\u7F6E IP \u767D\u540D\u5355 (<code dir="auto">allow</code>) \u8FD8\u662F\u9ED1\u540D\u5355 (<code dir="auto">deny</code>)\uFF0C\u6216\u8005\u4E24\u8005\u7ED3\u5408\u4F7F\u7528\u3002</li>
<li><strong>\u9009\u62E9 IP \u6765\u6E90</strong>\uFF1A\u51B3\u5B9A IP \u5730\u5740\u7684\u83B7\u53D6\u65B9\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CIP \u5730\u5740\u4ECE\u8FDE\u63A5\u7684\u5BF9\u7AEF socket \u83B7\u53D6\uFF08<code dir="auto">origin-source</code>\uFF09\uFF0C\u4F46\u60A8\u4E5F\u53EF\u4EE5\u9009\u62E9\u901A\u8FC7\u7279\u5B9A\u7684 HTTP \u5934\u90E8\u83B7\u53D6\uFF08\u5982 <code dir="auto">x-forwarded-for</code>\uFF09\u3002</li>
</ul>
<h3 id="2-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6">2. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</h3>
<p>\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u7F16\u8F91 Higress \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u6216\u4FEE\u6539 <code dir="auto">ip-restriction</code> \u76F8\u5173\u7684\u914D\u7F6E\u6BB5\u3002\u4EE5\u4E0B\u662F\u914D\u7F6E\u7684\u793A\u4F8B\u7ED3\u6784\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">plugins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ip-restriction</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">&#x3C;\u6765\u6E90\u7C7B\u578B></span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u9009\u62E9 "origin-source" \u6216 "header"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">&#x3C;\u5934\u90E8\u540D\u79F0></span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u5F53 ip_source_type \u4E3A "header" \u65F6\u9700\u8981\u8BBE\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:                      </span><span style="--0:#99A0A6"># \u767D\u540D\u5355\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">&#x3C;IP\u5730\u5740\u6216CIDR></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:                       </span><span style="--0:#99A0A6"># \u9ED1\u540D\u5355\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">&#x3C;IP\u5730\u5740\u6216CIDR></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">status</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">&#x3C;HTTP\u72B6\u6001\u7801></span><span style="--0:#E1E4E8">       </span><span style="--0:#99A0A6"># \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684HTTP\u72B6\u6001\u7801\uFF0C\u9ED8\u8BA4403</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">message</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">&#x3C;\u8FD4\u56DE\u4FE1\u606F></span><span style="--0:#E1E4E8">         </span><span style="--0:#99A0A6"># \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8FD4\u56DE\u4FE1\u606F\uFF0C\u9ED8\u8BA4'Your IP address is blocked.'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="plugins:\x7F  ip-restriction:\x7F    ip_source_type: <\u6765\u6E90\u7C7B\u578B>  # \u9009\u62E9 &#x22;origin-source&#x22; \u6216 &#x22;header&#x22;\x7F    ip_header_name: <\u5934\u90E8\u540D\u79F0>  # \u5F53 ip_source_type \u4E3A &#x22;header&#x22; \u65F6\u9700\u8981\u8BBE\u7F6E\x7F    allow:                      # \u767D\u540D\u5355\u5217\u8868\x7F      - <IP\u5730\u5740\u6216CIDR>\x7F      - ...\x7F    deny:                       # \u9ED1\u540D\u5355\u5217\u8868\x7F      - <IP\u5730\u5740\u6216CIDR>\x7F      - ...\x7F    status: <HTTP\u72B6\u6001\u7801>       # \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684HTTP\u72B6\u6001\u7801\uFF0C\u9ED8\u8BA4403\x7F    message: <\u8FD4\u56DE\u4FE1\u606F>         # \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8FD4\u56DE\u4FE1\u606F\uFF0C\u9ED8\u8BA4&#x27;Your IP address is blocked.&#x27;"><div></div></button></div></figure></div>
<h4 id="\u793A\u4F8B\u914D\u7F6E">\u793A\u4F8B\u914D\u7F6E</h4>
<p>\u5047\u8BBE\u6211\u4EEC\u5E0C\u671B\u57FA\u4E8E\u8BF7\u6C42\u5934 <code dir="auto">x-real-ip</code> \u8BBE\u7F6E\u9ED1\u540D\u5355\u9650\u5236\uFF0C\u62D2\u7EDD <code dir="auto">10.0.0.1</code> \u548C <code dir="auto">192.168.0.0/16</code> \u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_source_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ip_header_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-real-ip</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">10.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">192.168.0.0/16</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">status</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">403</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">message</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Access Denied. Your IP is not authorized.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ip_source_type: header\x7Fip_header_name: x-real-ip\x7Fdeny:\x7F  - 10.0.0.1\x7F  - 192.168.0.0/16\x7Fstatus: 403\x7Fmessage: Access Denied. Your IP is not authorized."><div></div></button></div></figure></div>
<h3 id="3-\u5E94\u7528\u914D\u7F6E\u66F4\u6539">3. \u5E94\u7528\u914D\u7F6E\u66F4\u6539</h3>
<p>\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u6839\u636E Higress \u7684\u90E8\u7F72\u65B9\u5F0F\uFF08\u5982 Docker \u5BB9\u5668\u3001Kubernetes \u96C6\u7FA4\u6216\u5176\u4ED6\u73AF\u5883\uFF09\uFF0C\u5E94\u7528\u914D\u7F6E\u66F4\u6539\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u91CD\u542F\u670D\u52A1\u6216\u66F4\u65B0\u914D\u7F6E\u6620\u5C04\u7B49\u64CD\u4F5C\u3002</p>
<h3 id="4-\u9A8C\u8BC1\u914D\u7F6E\u6548\u679C">4. \u9A8C\u8BC1\u914D\u7F6E\u6548\u679C</h3>
<p>\u914D\u7F6E\u66F4\u65B0\u540E\uFF0C\u901A\u8FC7\u88AB\u9650\u5236\u6216\u5141\u8BB8\u7684 IP \u5730\u5740\u5C1D\u8BD5\u8BBF\u95EE\u670D\u52A1\uFF0C\u786E\u8BA4\u9650\u5236\u7B56\u7565\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002\u68C0\u67E5\u65E5\u5FD7\u4EE5\u83B7\u53D6\u4EFB\u4F55\u9519\u8BEF\u6216\u62D2\u7EDD\u8BBF\u95EE\u7684\u6D88\u606F\uFF0C\u786E\u4FDD\u914D\u7F6E\u6B63\u786E\u65E0\u8BEF\u3002</p>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<ul>
<li><strong>ip_source_type</strong> \u51B3\u5B9A\u4E86\u7528\u4E8E\u68C0\u67E5\u7684 IP \u5730\u5740\u6765\u6E90\uFF0C\u9002\u5E94\u4E0D\u540C\u7684\u7F51\u7EDC\u67B6\u6784\u548C\u4EE3\u7406\u573A\u666F\u3002</li>
<li><strong>allow</strong> \u548C <strong>deny</strong> \u5217\u8868\u5B9A\u4E49\u4E86\u5177\u4F53\u7684 IP \u8BBF\u95EE\u89C4\u5219\uFF0C\u652F\u6301\u5355\u4E2A IP \u548C CIDR \u8303\u56F4\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u8BBF\u95EE\u63A7\u5236\u3002</li>
<li><strong>status</strong> \u548C <strong>message</strong> \u53C2\u6570\u8BA9\u60A8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u54CD\u5E94\uFF0C\u589E\u5F3A\u7528\u6237\u4F53\u9A8C\u6216\u5B89\u5168\u6027\u63D0\u793A\u3002</li>
</ul>
<p>\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6709\u6548\u5730\u5229\u7528 Higress \u7684 <code dir="auto">ip-restriction</code> \u63D2\u4EF6\u6765\u5B9E\u65BD IP \u8BBF\u95EE\u63A7\u5236\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress IP\u9650\u5236</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16699" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16698",title:"ip-restriction \u600E\u4E48\u914D\u7F6E",date:"2024-09-26",category:"expertConsultation",description:"\u8981\u914D\u7F6E Higress \u7684 `ip-restriction` \u63D2\u4EF6\u4EE5\u5B9E\u73B0 IP \u9650\u5236\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u76F4\u63A5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A### 1. \u786E\u5B9A\u914D\u7F6E\u9700\u6C42- **\u51B3\u5B9A\u9650\u5236\u7C7B\u578B**\uFF1A\u9996\u5148\uFF0C\u60A8\u9700\u8981\u786E\u5B9A\u662F\u8981\u8BBE\u7F6E IP \u767D\u540D\u5355 (`allow`) \u8FD8\u662F\u9ED1\u540D\u5355 (`deny`)\uFF0C\u6216\u8005\u4E24\u8005\u7ED3\u5408",tags:["higress","ip-restriction","\u914D\u7F6E","\u65B9\u6CD5","","\u6559\u7A0B","\u8BBE\u7F6E"],keywords:["higress","ip-restriction","\u914D\u7F6E","\u65B9\u6CD5","","\u6559\u7A0B","\u8BBE\u7F6E"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16698.md",t=void 0,d=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 ip-restriction \u600E\u4E48\u914D\u7F6E  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u914D\u7F6E Higress \u7684 \`ip-restriction\` \u63D2\u4EF6\u4EE5\u5B9E\u73B0 IP \u9650\u5236\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF0C\u8FD9\u4E9B\u6B65\u9AA4\u76F4\u63A5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF1A

### 1. \u786E\u5B9A\u914D\u7F6E\u9700\u6C42
- **\u51B3\u5B9A\u9650\u5236\u7C7B\u578B**\uFF1A\u9996\u5148\uFF0C\u60A8\u9700\u8981\u786E\u5B9A\u662F\u8981\u8BBE\u7F6E IP \u767D\u540D\u5355 (\`allow\`) \u8FD8\u662F\u9ED1\u540D\u5355 (\`deny\`)\uFF0C\u6216\u8005\u4E24\u8005\u7ED3\u5408\u4F7F\u7528\u3002
- **\u9009\u62E9 IP \u6765\u6E90**\uFF1A\u51B3\u5B9A IP \u5730\u5740\u7684\u83B7\u53D6\u65B9\u5F0F\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CIP \u5730\u5740\u4ECE\u8FDE\u63A5\u7684\u5BF9\u7AEF socket \u83B7\u53D6\uFF08\`origin-source\`\uFF09\uFF0C\u4F46\u60A8\u4E5F\u53EF\u4EE5\u9009\u62E9\u901A\u8FC7\u7279\u5B9A\u7684 HTTP \u5934\u90E8\u83B7\u53D6\uFF08\u5982 \`x-forwarded-for\`\uFF09\u3002

### 2. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6
\u6839\u636E\u60A8\u7684\u9700\u6C42\uFF0C\u7F16\u8F91 Higress \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u6DFB\u52A0\u6216\u4FEE\u6539 \`ip-restriction\` \u76F8\u5173\u7684\u914D\u7F6E\u6BB5\u3002\u4EE5\u4E0B\u662F\u914D\u7F6E\u7684\u793A\u4F8B\u7ED3\u6784\uFF1A

\`\`\`yaml
plugins:
  ip-restriction:
    ip_source_type: <\u6765\u6E90\u7C7B\u578B>  # \u9009\u62E9 "origin-source" \u6216 "header"
    ip_header_name: <\u5934\u90E8\u540D\u79F0>  # \u5F53 ip_source_type \u4E3A "header" \u65F6\u9700\u8981\u8BBE\u7F6E
    allow:                      # \u767D\u540D\u5355\u5217\u8868
      - <IP\u5730\u5740\u6216CIDR>
      - ...
    deny:                       # \u9ED1\u540D\u5355\u5217\u8868
      - <IP\u5730\u5740\u6216CIDR>
      - ...
    status: <HTTP\u72B6\u6001\u7801>       # \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684HTTP\u72B6\u6001\u7801\uFF0C\u9ED8\u8BA4403
    message: <\u8FD4\u56DE\u4FE1\u606F>         # \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8FD4\u56DE\u4FE1\u606F\uFF0C\u9ED8\u8BA4'Your IP address is blocked.'
\`\`\`

#### \u793A\u4F8B\u914D\u7F6E
\u5047\u8BBE\u6211\u4EEC\u5E0C\u671B\u57FA\u4E8E\u8BF7\u6C42\u5934 \`x-real-ip\` \u8BBE\u7F6E\u9ED1\u540D\u5355\u9650\u5236\uFF0C\u62D2\u7EDD \`10.0.0.1\` \u548C \`192.168.0.0/16\` \u8BBF\u95EE\uFF1A

\`\`\`yaml
ip_source_type: header
ip_header_name: x-real-ip
deny:
  - 10.0.0.1
  - 192.168.0.0/16
status: 403
message: Access Denied. Your IP is not authorized.
\`\`\`

### 3. \u5E94\u7528\u914D\u7F6E\u66F4\u6539
\u4FDD\u5B58\u914D\u7F6E\u6587\u4EF6\u540E\uFF0C\u6839\u636E Higress \u7684\u90E8\u7F72\u65B9\u5F0F\uFF08\u5982 Docker \u5BB9\u5668\u3001Kubernetes \u96C6\u7FA4\u6216\u5176\u4ED6\u73AF\u5883\uFF09\uFF0C\u5E94\u7528\u914D\u7F6E\u66F4\u6539\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u91CD\u542F\u670D\u52A1\u6216\u66F4\u65B0\u914D\u7F6E\u6620\u5C04\u7B49\u64CD\u4F5C\u3002

### 4. \u9A8C\u8BC1\u914D\u7F6E\u6548\u679C
\u914D\u7F6E\u66F4\u65B0\u540E\uFF0C\u901A\u8FC7\u88AB\u9650\u5236\u6216\u5141\u8BB8\u7684 IP \u5730\u5740\u5C1D\u8BD5\u8BBF\u95EE\u670D\u52A1\uFF0C\u786E\u8BA4\u9650\u5236\u7B56\u7565\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002\u68C0\u67E5\u65E5\u5FD7\u4EE5\u83B7\u53D6\u4EFB\u4F55\u9519\u8BEF\u6216\u62D2\u7EDD\u8BBF\u95EE\u7684\u6D88\u606F\uFF0C\u786E\u4FDD\u914D\u7F6E\u6B63\u786E\u65E0\u8BEF\u3002

### \u89E3\u91CA
- **ip_source_type** \u51B3\u5B9A\u4E86\u7528\u4E8E\u68C0\u67E5\u7684 IP \u5730\u5740\u6765\u6E90\uFF0C\u9002\u5E94\u4E0D\u540C\u7684\u7F51\u7EDC\u67B6\u6784\u548C\u4EE3\u7406\u573A\u666F\u3002
- **allow** \u548C **deny** \u5217\u8868\u5B9A\u4E49\u4E86\u5177\u4F53\u7684 IP \u8BBF\u95EE\u89C4\u5219\uFF0C\u652F\u6301\u5355\u4E2A IP \u548C CIDR \u8303\u56F4\uFF0C\u63D0\u4F9B\u7075\u6D3B\u7684\u8BBF\u95EE\u63A7\u5236\u3002
- **status** \u548C **message** \u53C2\u6570\u8BA9\u60A8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u54CD\u5E94\uFF0C\u589E\u5F3A\u7528\u6237\u4F53\u9A8C\u6216\u5B89\u5168\u6027\u63D0\u793A\u3002

\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6709\u6548\u5730\u5229\u7528 Higress \u7684 \`ip-restriction\` \u63D2\u4EF6\u6765\u5B9E\u65BD IP \u8BBF\u95EE\u63A7\u5236\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress IP\u9650\u5236 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16699)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},p=function(){return s},o=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u786E\u5B9A\u914D\u7F6E\u9700\u6C42",text:"1. \u786E\u5B9A\u914D\u7F6E\u9700\u6C42"},{depth:3,slug:"2-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",text:"2. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6"},{depth:4,slug:"\u793A\u4F8B\u914D\u7F6E",text:"\u793A\u4F8B\u914D\u7F6E"},{depth:3,slug:"3-\u5E94\u7528\u914D\u7F6E\u66F4\u6539",text:"3. \u5E94\u7528\u914D\u7F6E\u66F4\u6539"},{depth:3,slug:"4-\u9A8C\u8BC1\u914D\u7F6E\u6548\u679C",text:"4. \u9A8C\u8BC1\u914D\u7F6E\u6548\u679C"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=l((f,g,x)=>{const{layout:_,...i}=n;return i.file=a,i.url=t,c`${E()}${u(s)}`})});export{e as Content,h as __tla,p as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,d as rawContent,t as url};
