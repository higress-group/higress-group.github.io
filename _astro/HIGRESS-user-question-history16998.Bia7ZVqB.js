import{c,__tla as d}from"./astro-component.DdmMvaZ5.js";import{r as p,m as u,u as E,__tla as h}from"./constant.0nah1gwt.js";import{__tla as v}from"./astro/assets-service.B3lmwFKy.js";let e,i,a,n,l,r,o,y=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress jwt\u63D2\u4EF6</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress JWT\u63D2\u4EF6\u662F\u7528\u4E8E\u5B9E\u73B0\u57FA\u4E8EJSON Web Tokens\uFF08JWT\uFF09\u7684\u8BA4\u8BC1\u4E0E\u9274\u6743\u529F\u80FD\u7684\u4E00\u4E2A\u7EC4\u4EF6\u3002\u5B83\u5141\u8BB8\u60A8\u4ECEHTTP\u8BF7\u6C42\u7684\u4E0D\u540C\u90E8\u5206\uFF08\u5982URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\uFF09\u89E3\u6790JWT\uFF0C\u5E76\u9A8C\u8BC1\u8BE5Token\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u76EE\u6807\u8D44\u6E90\u3002\u4E0B\u9762\u6211\u5C06\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5BF9Higress JWT\u63D2\u4EF6\u8FDB\u884C\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u5E76\u63D0\u4F9B\u5982\u4F55\u914D\u7F6E\u4E0E\u4F7F\u7528\u6B64\u63D2\u4EF6\u7684\u57FA\u672C\u6307\u5BFC\u3002</p>
<h3 id="higress-jwt\u63D2\u4EF6\u529F\u80FD\u6982\u89C8">Higress JWT\u63D2\u4EF6\u529F\u80FD\u6982\u89C8</h3>
<ul>
<li><strong>\u8BA4\u8BC1\u673A\u5236</strong>\uFF1A\u652F\u6301\u5168\u5C40\u6216\u7279\u5B9A\u57DF\u540D\u53CA\u8DEF\u7531\u7684JWT\u8BA4\u8BC1\uFF0C\u786E\u4FDD\u8BF7\u6C42\u5408\u6CD5\u6027\u3002</li>
<li><strong>Token\u89E3\u6790\u4F4D\u7F6E</strong>\uFF1A\u53EF\u914D\u7F6E\u4ECE<code dir="auto">Authorization</code>\u5934\u3001URL\u53C2\u6570\uFF08\u9ED8\u8BA4\u4E3A<code dir="auto">access_token</code>\uFF09\u3001Cookie\u4E2D\u63D0\u53D6JWT\u3002</li>
<li><strong>JWT\u9A8C\u8BC1</strong>\uFF1A\u9A8C\u8BC1Token\u7684\u6709\u6548\u6027\uFF0C\u5305\u62EC\u7B7E\u53D1\u8005(issuer)\u3001\u7B7E\u540D(jwks)\u4EE5\u53CA\u8FC7\u671F\u65F6\u95F4(exp)\u7B49\u3002</li>
<li><strong>\u989D\u5916\u5904\u7406</strong>\uFF1A\u53EF\u5C06JWT\u8F7D\u8377(payload)\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u6620\u5C04\u5230\u8BF7\u6C42\u5934\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B\u5E76\u63A7\u5236\u662F\u5426\u4FDD\u7559JWT\u8F6C\u53D1\u7ED9\u540E\u7AEF\u3002</li>
</ul>
<h3 id="\u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E">\u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E</h3>
<h4 id="1-\u5168\u5C40\u914D\u7F6E">1. \u5168\u5C40\u914D\u7F6E</h4>
<p>\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728Higress\u7684\u5168\u5C40\u914D\u7F6E\u4E2D\u542F\u7528JWT\u8BA4\u8BC1\u63D2\u4EF6\u5E76\u5B9A\u4E49\u6D88\u8D39\u8005(consumers)\uFF0C\u6BCF\u4E2A\u6D88\u8D39\u8005\u4EE3\u8868\u4E00\u4E2A\u4FE1\u4EFB\u7684\u8C03\u7528\u65B9\uFF0C\u9700\u8981\u63D0\u4F9B\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p>
<ul>
<li><strong><code dir="auto">name</code></strong>\uFF1A\u6D88\u8D39\u8005\u540D\u79F0\uFF0C\u5FC5\u586B\u3002</li>
<li><strong><code dir="auto">jwks</code></strong>\uFF1AJSON Web Key Set\u7684URL\uFF0C\u7528\u4E8E\u9A8C\u8BC1JWT\u7B7E\u540D\uFF0C\u5FC5\u586B\u3002</li>
<li><strong><code dir="auto">issuer</code></strong>\uFF1AJWT\u7684\u9884\u671F\u7B7E\u53D1\u8005\uFF0C\u5FC5\u586B\u3002</li>
<li><strong>\u5176\u4ED6\u53EF\u9009\u914D\u7F6E</strong>\uFF1A\u5982<code dir="auto">claims_to_headers</code>\u3001<code dir="auto">from_headers</code>\u3001<code dir="auto">from_params</code>\u3001<code dir="auto">clock_skew_seconds</code>\u7B49\uFF0C\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8C03\u6574\u3002</li>
</ul>
<h4 id="2-\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E">2. \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E</h4>
<p>\u5BF9\u4E8E\u7279\u5B9A\u7684\u57DF\u540D\u6216\u8DEF\u7531\uFF0C\u4F60\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7EC6\u5316\u8BA4\u8BC1\u89C4\u5219\uFF0C\u6307\u5B9A\u54EA\u4E9Bconsumer\u53EF\u4EE5\u8BBF\u95EE\uFF1A</p>
<ul>
<li><strong><code dir="auto">allow</code></strong>\uFF1A\u6570\u7EC4\uFF0C\u5217\u51FA\u5141\u8BB8\u8BBF\u95EE\u7684consumer\u540D\u79F0\uFF0C\u5FC5\u586B\u3002</li>
</ul>
<h3 id="\u793A\u4F8B\u914D\u7F6E\u7247\u6BB5">\u793A\u4F8B\u914D\u7F6E\u7247\u6BB5</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5168\u5C40\u914D\u7F6E\u793A\u4F8B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"service_consumer"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://yourdomain.com/.well-known/jwks.json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your_issuer"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">from_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Authorization"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">value_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bearer "</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">claims_to_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">claim</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sub"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"X-User-Id"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u57DF\u540D\u6216\u8DEF\u7531\u914D\u7F6E\u793A\u4F8B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">routes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"secured_api"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domains</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"api.example.com"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"service_consumer"</span><span style="--0:#E1E4E8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u5168\u5C40\u914D\u7F6E\u793A\u4F8B\x7Fglobal_config:\x7F  consumers:\x7F    - name: &#x22;service_consumer&#x22;\x7F      jwks: &#x22;https://yourdomain.com/.well-known/jwks.json&#x22;\x7F      issuer: &#x22;your_issuer&#x22;\x7F      from_headers:\x7F        - name: &#x22;Authorization&#x22;\x7F          value_prefix: &#x22;Bearer &#x22;\x7F      claims_to_headers:\x7F        - claim: &#x22;sub&#x22;\x7F          header: &#x22;X-User-Id&#x22;\x7F\x7F# \u57DF\u540D\u6216\u8DEF\u7531\u914D\u7F6E\u793A\u4F8B\x7Froutes:\x7F  - name: &#x22;secured_api&#x22;\x7F    domains: [&#x22;api.example.com&#x22;]\x7F    allow: [&#x22;service_consumer&#x22;]"><div></div></button></div></figure></div>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<ul>
<li><strong>\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E9B\u914D\u7F6E</strong>\uFF1A\u8FD9\u4E9B\u914D\u7F6E\u786E\u4FDD\u4E86\u53EA\u6709\u643A\u5E26\u6709\u6548JWT\u4E14\u7B26\u5408\u9884\u8BBE\u6761\u4EF6\u7684\u8BF7\u6C42\u624D\u80FD\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u589E\u5F3A\u4E86\u5E94\u7528\u7684\u5B89\u5168\u6027\u3002</li>
<li><strong>\u4ECE\u54EA\u91CC\u83B7\u53D6jwks</strong>\uFF1Ajwks\u901A\u5E38\u7531JWT\u7684\u7B7E\u53D1\u670D\u52A1\u5668\u63D0\u4F9B\uFF0C\u7528\u4E8E\u6821\u9A8CToken\u7684\u7B7E\u540D\uFF0C\u786E\u4FDDToken\u672A\u88AB\u7BE1\u6539\u3002</li>
<li><strong>claims_to_headers\u7684\u4F5C\u7528</strong>\uFF1A\u6B64\u914D\u7F6E\u5E2E\u52A9\u5C06JWT\u4E2D\u7684\u7528\u6237\u4FE1\u606F\u6216\u5176\u4ED6\u91CD\u8981\u58F0\u660E\u5B89\u5168\u5730\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\uFF0C\u4FBF\u4E8E\u540E\u7AEF\u505A\u8FDB\u4E00\u6B65\u7684\u6743\u9650\u63A7\u5236\u6216\u65E5\u5FD7\u8BB0\u5F55\u3002</li>
</ul>
<p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u6709\u6548\u5730\u5728Higress\u4E2D\u90E8\u7F72\u5E76\u5229\u7528JWT\u63D2\u4EF6\u6765\u4FDD\u62A4\u4F60\u7684\u670D\u52A1\u548CAPI\uFF0C\u5B9E\u73B0\u5B89\u5168\u7684\u8BA4\u8BC1\u4E0E\u6388\u6743\u7BA1\u7406\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress JWT \u8BA4\u8BC1</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17007" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16998",title:"higress jwt\u63D2\u4EF6",date:"2024-09-26",category:"expertConsultation",description:"Higress JWT\u63D2\u4EF6\u662F\u7528\u4E8E\u5B9E\u73B0\u57FA\u4E8EJSON Web Tokens\uFF08JWT\uFF09\u7684\u8BA4\u8BC1\u4E0E\u9274\u6743\u529F\u80FD\u7684\u4E00\u4E2A\u7EC4\u4EF6\u3002\u5B83\u5141\u8BB8\u60A8\u4ECEHTTP\u8BF7\u6C42\u7684\u4E0D\u540C\u90E8\u5206\uFF08\u5982URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\uFF09\u89E3\u6790JWT\uFF0C\u5E76\u9A8C\u8BC1\u8BE5Token\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u76EE\u6807\u8D44\u6E90\u3002\u4E0B\u9762\u6211\u5C06\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5BF9Higress JWT\u63D2\u4EF6\u8FDB\u884C\u8BE6\u7EC6\u8BF4\u660E",tags:["higress","jwt","\u63D2\u4EF6"],keywords:["higress","jwt","\u63D2\u4EF6"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16998.md",o=void 0,r=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress jwt\u63D2\u4EF6  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress JWT\u63D2\u4EF6\u662F\u7528\u4E8E\u5B9E\u73B0\u57FA\u4E8EJSON Web Tokens\uFF08JWT\uFF09\u7684\u8BA4\u8BC1\u4E0E\u9274\u6743\u529F\u80FD\u7684\u4E00\u4E2A\u7EC4\u4EF6\u3002\u5B83\u5141\u8BB8\u60A8\u4ECEHTTP\u8BF7\u6C42\u7684\u4E0D\u540C\u90E8\u5206\uFF08\u5982URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\uFF09\u89E3\u6790JWT\uFF0C\u5E76\u9A8C\u8BC1\u8BE5Token\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u76EE\u6807\u8D44\u6E90\u3002\u4E0B\u9762\u6211\u5C06\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5BF9Higress JWT\u63D2\u4EF6\u8FDB\u884C\u8BE6\u7EC6\u8BF4\u660E\uFF0C\u5E76\u63D0\u4F9B\u5982\u4F55\u914D\u7F6E\u4E0E\u4F7F\u7528\u6B64\u63D2\u4EF6\u7684\u57FA\u672C\u6307\u5BFC\u3002

### Higress JWT\u63D2\u4EF6\u529F\u80FD\u6982\u89C8

- **\u8BA4\u8BC1\u673A\u5236**\uFF1A\u652F\u6301\u5168\u5C40\u6216\u7279\u5B9A\u57DF\u540D\u53CA\u8DEF\u7531\u7684JWT\u8BA4\u8BC1\uFF0C\u786E\u4FDD\u8BF7\u6C42\u5408\u6CD5\u6027\u3002
- **Token\u89E3\u6790\u4F4D\u7F6E**\uFF1A\u53EF\u914D\u7F6E\u4ECE\`Authorization\`\u5934\u3001URL\u53C2\u6570\uFF08\u9ED8\u8BA4\u4E3A\`access_token\`\uFF09\u3001Cookie\u4E2D\u63D0\u53D6JWT\u3002
- **JWT\u9A8C\u8BC1**\uFF1A\u9A8C\u8BC1Token\u7684\u6709\u6548\u6027\uFF0C\u5305\u62EC\u7B7E\u53D1\u8005(issuer)\u3001\u7B7E\u540D(jwks)\u4EE5\u53CA\u8FC7\u671F\u65F6\u95F4(exp)\u7B49\u3002
- **\u989D\u5916\u5904\u7406**\uFF1A\u53EF\u5C06JWT\u8F7D\u8377(payload)\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\u6620\u5C04\u5230\u8BF7\u6C42\u5934\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B\u5E76\u63A7\u5236\u662F\u5426\u4FDD\u7559JWT\u8F6C\u53D1\u7ED9\u540E\u7AEF\u3002

### \u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E

#### 1. \u5168\u5C40\u914D\u7F6E

\u9996\u5148\uFF0C\u4F60\u9700\u8981\u5728Higress\u7684\u5168\u5C40\u914D\u7F6E\u4E2D\u542F\u7528JWT\u8BA4\u8BC1\u63D2\u4EF6\u5E76\u5B9A\u4E49\u6D88\u8D39\u8005(consumers)\uFF0C\u6BCF\u4E2A\u6D88\u8D39\u8005\u4EE3\u8868\u4E00\u4E2A\u4FE1\u4EFB\u7684\u8C03\u7528\u65B9\uFF0C\u9700\u8981\u63D0\u4F9B\u4EE5\u4E0B\u4FE1\u606F\uFF1A
- **\`name\`**\uFF1A\u6D88\u8D39\u8005\u540D\u79F0\uFF0C\u5FC5\u586B\u3002
- **\`jwks\`**\uFF1AJSON Web Key Set\u7684URL\uFF0C\u7528\u4E8E\u9A8C\u8BC1JWT\u7B7E\u540D\uFF0C\u5FC5\u586B\u3002
- **\`issuer\`**\uFF1AJWT\u7684\u9884\u671F\u7B7E\u53D1\u8005\uFF0C\u5FC5\u586B\u3002
- **\u5176\u4ED6\u53EF\u9009\u914D\u7F6E**\uFF1A\u5982\`claims_to_headers\`\u3001\`from_headers\`\u3001\`from_params\`\u3001\`clock_skew_seconds\`\u7B49\uFF0C\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8C03\u6574\u3002

#### 2. \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E

\u5BF9\u4E8E\u7279\u5B9A\u7684\u57DF\u540D\u6216\u8DEF\u7531\uFF0C\u4F60\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7EC6\u5316\u8BA4\u8BC1\u89C4\u5219\uFF0C\u6307\u5B9A\u54EA\u4E9Bconsumer\u53EF\u4EE5\u8BBF\u95EE\uFF1A
- **\`allow\`**\uFF1A\u6570\u7EC4\uFF0C\u5217\u51FA\u5141\u8BB8\u8BBF\u95EE\u7684consumer\u540D\u79F0\uFF0C\u5FC5\u586B\u3002

### \u793A\u4F8B\u914D\u7F6E\u7247\u6BB5

\`\`\`yaml
# \u5168\u5C40\u914D\u7F6E\u793A\u4F8B
global_config:
  consumers:
    - name: "service_consumer"
      jwks: "https://yourdomain.com/.well-known/jwks.json"
      issuer: "your_issuer"
      from_headers:
        - name: "Authorization"
          value_prefix: "Bearer "
      claims_to_headers:
        - claim: "sub"
          header: "X-User-Id"

# \u57DF\u540D\u6216\u8DEF\u7531\u914D\u7F6E\u793A\u4F8B
routes:
  - name: "secured_api"
    domains: ["api.example.com"]
    allow: ["service_consumer"]
\`\`\`

### \u89E3\u91CA

- **\u4E3A\u4EC0\u4E48\u9700\u8981\u8FD9\u4E9B\u914D\u7F6E**\uFF1A\u8FD9\u4E9B\u914D\u7F6E\u786E\u4FDD\u4E86\u53EA\u6709\u643A\u5E26\u6709\u6548JWT\u4E14\u7B26\u5408\u9884\u8BBE\u6761\u4EF6\u7684\u8BF7\u6C42\u624D\u80FD\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF0C\u589E\u5F3A\u4E86\u5E94\u7528\u7684\u5B89\u5168\u6027\u3002
- **\u4ECE\u54EA\u91CC\u83B7\u53D6jwks**\uFF1Ajwks\u901A\u5E38\u7531JWT\u7684\u7B7E\u53D1\u670D\u52A1\u5668\u63D0\u4F9B\uFF0C\u7528\u4E8E\u6821\u9A8CToken\u7684\u7B7E\u540D\uFF0C\u786E\u4FDDToken\u672A\u88AB\u7BE1\u6539\u3002
- **claims_to_headers\u7684\u4F5C\u7528**\uFF1A\u6B64\u914D\u7F6E\u5E2E\u52A9\u5C06JWT\u4E2D\u7684\u7528\u6237\u4FE1\u606F\u6216\u5176\u4ED6\u91CD\u8981\u58F0\u660E\u5B89\u5168\u5730\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\uFF0C\u4FBF\u4E8E\u540E\u7AEF\u505A\u8FDB\u4E00\u6B65\u7684\u6743\u9650\u63A7\u5236\u6216\u65E5\u5FD7\u8BB0\u5F55\u3002

\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u4F60\u53EF\u4EE5\u6709\u6548\u5730\u5728Higress\u4E2D\u90E8\u7F72\u5E76\u5229\u7528JWT\u63D2\u4EF6\u6765\u4FDD\u62A4\u4F60\u7684\u670D\u52A1\u548CAPI\uFF0C\u5B9E\u73B0\u5B89\u5168\u7684\u8BA4\u8BC1\u4E0E\u6388\u6743\u7BA1\u7406\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress JWT \u8BA4\u8BC1 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17007)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"higress-jwt\u63D2\u4EF6\u529F\u80FD\u6982\u89C8",text:"Higress JWT\u63D2\u4EF6\u529F\u80FD\u6982\u89C8"},{depth:3,slug:"\u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E",text:"\u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E"},{depth:4,slug:"1-\u5168\u5C40\u914D\u7F6E",text:"1. \u5168\u5C40\u914D\u7F6E"},{depth:4,slug:"2-\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E",text:"2. \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E"},{depth:3,slug:"\u793A\u4F8B\u914D\u7F6E\u7247\u6BB5",text:"\u793A\u4F8B\u914D\u7F6E\u7247\u6BB5"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=c((f,g,m)=>{const{layout:_,...t}=n;return t.file=a,t.url=o,p`${u()}${E(s)}`})});export{e as Content,y as __tla,i as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,r as rawContent,o as url};
