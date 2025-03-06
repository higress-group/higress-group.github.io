import{c as p,__tla as c}from"./astro-component.CXlaF79K.js";import{r as d,m as h,u,__tla as y}from"./constant.DXPxw1OC.js";import{__tla as g}from"./astro/assets-service.DQopRnBr.js";let e,n,a,i,r,o,t,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h1 id="ojca1">\u4E00\u3001<font style="color:rgb(64, 64, 64);">\u573A\u666F\u9A71\u52A8\uFF1A\u4E3A\u4EC0\u4E48\u4F01\u4E1A\u9700\u8981AI\u7F51\u5173\uFF1F</font></h1>
\u968F\u7740\u5982DeepSeek\u7B49\u5927\u6A21\u578B\u7684\u706B\u70ED\uFF0C\u5927\u6A21\u578B\u6280\u672F\u53D1\u5C55\u91CD\u5FC3\u6B63\u4ECE\u8BAD\u7EC3\u5411\u63A8\u7406\u9636\u6BB5\u52A0\u901F\u8FC1\u79FB\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u516C\u53F8\u5DF2\u7ECF\u5F00\u59CB\u8BBE\u8BA1\u7B26\u6EE1\u8DB3\u4F01\u4E1A\u5185\u90E8\u9700\u6C42\u548C\u5916\u90E8\u5546\u4E1A\u65B9\u5411\u7684\u5927\u6A21\u578B\u5E94\u7528\uFF0C\u5E76\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u8FDB\u884C\u90E8\u7F72\u3002\u5728\u5927\u6A21\u578B\u5E94\u7528\u89C4\u6A21\u5316\u843D\u5730\u7684\u80CC\u666F\u4E0B\uFF0C\u4F01\u4E1A\u9762\u4E34\u4E09\u5927\u6838\u5FC3\u6311\u6218\uFF1A
<ol>
<li>Token\u6210\u672C\u7BA1\u63A7\uFF1ALLM\u670D\u52A1\u6309Token\u8BA1\u8D39\u6A21\u5F0F\u4E0B\u7684\u9884\u7B97\u63A7\u5236</li>
<li>\u8D44\u6E90\u516C\u5E73\u5206\u914D\uFF1A\u591A\u79DF\u6237\u573A\u666F\u4E0B\u7684\u8D44\u6E90\u914D\u989D\u7BA1\u7406</li>
<li>\u670D\u52A1\u7A33\u5B9A\u6027\u4FDD\u969C\uFF1A\u7A81\u53D1\u6D41\u91CF\u4E0B\u7684\u670D\u52A1\u964D\u7EA7\u4E0E\u7194\u65AD</li>
</ol>
<p>Higress AI\u7F51\u5173\u901A\u8FC7\u4E09\u5927\u6838\u5FC3\u80FD\u529B\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF1A</p>
<ul>
<li>\u7EC6\u7C92\u5EA6Token\u8BA1\u91CF\uFF1A\u7CBE\u786E\u7EDF\u8BA1\u8F93\u5165/\u8F93\u51FAToken\u6D88\u8017</li>
<li>\u52A8\u6001\u914D\u989D\u7BA1\u7406\uFF1A\u652F\u6301\u5B9E\u65F6\u8C03\u6574\u79DF\u6237\u914D\u989D</li>
<li>\u5206\u7EA7\u9650\u6D41\u7B56\u7565\uFF1A\u5206\u949F\u7EA7\u8C03\u7528\u6B21\u6570\u4E0EToken\u6D88\u8017\u53CC\u91CD\u63A7\u5236</li>
</ul>
<h1 id="okxEf">\u4E8C\u3001\u5FEB\u901F\u5165\u95E8\uFF1A\u4E94\u5206\u949F\u642D\u5EFA\u7BA1\u63A7\u4F53\u7CFB</h1>
<h3 id="fxlsQ">\u4E00\u952E\u5F0F\u73AF\u5883\u90E8\u7F72</h3>
\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`
<p>\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u91C7\u7528K8s\u90E8\u7F72\u6216\u4E91\u4E0A\u90E8\u7F72\u65B9\u5F0F\uFF08\u53C2\u8003<a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u90E8\u7F72\u6307\u5357</a>\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u6269\u7F29\u5BB9\u4E0E\u6EDA\u52A8\u5347\u7EA7\u3002</p>
<h3 id="vgyDZ">\u53EF\u89C6\u5316\u63A7\u5236\u53F0\u914D\u7F6E</h3>
\u8BBF\u95EE \`http://localhost:8001\` \u5B8C\u6210\u521D\u59CB\u5316\uFF1A
<ul>
<li><strong>\u4F9B\u5E94\u5546\u7BA1\u7406</strong>\uFF1A\u521B\u5EFA\u4E0D\u540C\u6A21\u578B\u4F9B\u5E94\u5546\u7684API\u5BC6\u94A5</li>
<li><strong>\u6D88\u8D39\u8005\u7BA1\u7406</strong>\uFF1A\u521B\u5EFA\u5206\u7EA7\u8D26\u53F7\u4F53\u7CFB\uFF0C\u914D\u7F6E\u4E0D\u540C\u7684\u6D88\u8D39\u8005\u6743\u9650</li>
</ul>
<p><img src="/img/1741264659756.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="dwjhn">\u5206\u7EA7\u914D\u989D\u7BA1\u7406</h3>
Higress\u652F\u6301\u5BF9\u4E0D\u540C\u7684AI\u8DEF\u7531\u8FDB\u884C\u4E0D\u540C\u7684\u914D\u989D\u7B56\u7565\u7BA1\u7406\uFF0C\u7BA1\u7406\u5458\u53EF\u901A\u8FC7URL\u5F62\u5F0F\u8FDB\u884C\u52A8\u6001\u7684\u8DEF\u7531\u7BA1\u7406\u8C03\u914D\u3002
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u4E3A\u7279\u5B9A\u6D88\u8D39\u8005\u589E\u52A0\u56FA\u5B9A\u6570\u91CF\u914D\u989D</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8080/v1/chat/completions/quota/delta'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'consumer=aliyun-user1&#x26;value=100'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions/quota/delta&#x27; -d &#x27;consumer=aliyun-user1&#x26;value=100&#x27;"><div></div></button></div></figure></div>
<p>\u9488\u5BF9\u67D0\u4E00\u6A21\u578B\u7684\u4E0D\u540C\u573A\u666F\uFF0C\u4E0D\u540C\u7684\u914D\u989D\u6570\u91CF\u53EF\u4EE5\u8BA9\u4F01\u4E1A\u6210\u672C\u8FDB\u4E00\u6B65\u4F18\u5316\u3002</p>
<p><img src="/img/1741264661731.png" alt="\u753B\u677F" referrerpolicy="no-referrer"></p>
<p>\u540C\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E3A\u7279\u5B9A\u7684API-KEY\u914D\u7F6E\u79D2\u7EA7/\u5206\u949F\u7EA7/\u5C0F\u65F6\u7EA7\u7684Token\u6570\u91CF\u9650\u5236\uFF0C\u9632\u6B62\u56E0\u7A81\u53D1\u6D41\u91CF\u6216API-KEY\u6CC4\u9732\u5BFC\u81F4\u7684\u8D39\u7528\u7A81\u589E\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">rule_items:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">limit_by_per_header:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"x-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">limit_keys:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">key:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"sk-XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">token_per_minute:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">100000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">rule_name:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"default_rule"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_items:\x7F- limit_by_per_header: &#x22;x-api-key&#x22;\x7F  limit_keys:\x7F  - key: &#x22;sk-XXXXXXXXX&#x22;\x7F    token_per_minute: 100000\x7Frule_name: &#x22;default_rule&#x22;"><div></div></button></div></figure></div>
<h3 id="RLolM"></h3>
<h1 id="YnQCL">\u56DB\u3001\u53EF\u89C2\u6D4B\u6027\uFF1A\u6570\u636E\u9A71\u52A8\u7684\u51B3\u7B56\u4F53\u7CFB</h1>
<h3 id="lOsxI">1. \u591A\u7EF4\u76D1\u63A7\u770B\u677F</h3>
Higress\u5185\u7F6E\u591A\u4E2A\u89C2\u6D4B\u7EF4\u5EA6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6307\u6807\u63A5\u5165Prometheus\uFF0C\u4E5F\u63A5\u5165\u4E86Grafana\u770B\u677F\uFF0C\u7BA1\u7406\u5458\u5728\u89C2\u6D4B\u754C\u9762\u53EF\u4EE5\u5B9E\u65F6\u83B7\u53D6\u5F53\u524DAI API\u6570\u636E\u3002AI\u573A\u666F\u4E0B\u5185\u7F6E\u7684\u6307\u6807\u6709\uFF1A
<ol>
<li>\u4F9B\u5E94\u5546\u5065\u5EB7\u72B6\u6001</li>
<li>\u6A21\u578B\u4F7F\u7528\u91CF\u5206\u5E03</li>
<li>\u6D88\u8D39\u8005\u4F7F\u7528\u91CF\u89C2\u6D4B</li>
<li>Token\u6D88\u8017\u8D8B\u52BF</li>
</ol>
<p><img src="/img/1741264664628.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="aIyhz">2. \u9884\u8B66\u89C4\u5219\u914D\u7F6E</h3>
\u9488\u5BF9Token\u5F02\u5E38\u6570\u91CF\u3001\u6D41\u91CF\u5F02\u5E38\u589E\u957F\u7684\u60C5\u51B5\uFF0C\u5728\u63A7\u5236\u53F0\u4FA7\u89C2\u6D4B\u754C\u9762\u53EF\u4EE5\u914D\u7F6E\u544A\u8B66\u4FE1\u606F\u3002\u89E6\u53D1\u544A\u8B66\u65F6\uFF0C\u8FD0\u7EF4\u5DE5\u7A0B\u5E08\u53EF\u4EE5\u53CA\u65F6\u4ECB\u5165\uFF0C\u907F\u514D\u8D44\u91D1\u635F\u5931\u3002
<p><img src="/img/1741264667632.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="LWa0P"></h2>`,i={title:"\u57FA\u4E8EHigress\u6784\u5EFA\u4F01\u4E1A\u7EA7AI\u7F51\u5173\u7684Token\u7BA1\u63A7\u6700\u4F73\u5B9E\u8DF5",description:"\u57FA\u4E8EHigress\u6784\u5EFA\u4F01\u4E1A\u7EA7AI\u7F51\u5173\u7684Token\u7BA1\u63A7\u6700\u4F73\u5B9E\u8DF5",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/best/higress-token-management.md",t=void 0,o=function(){return`
<h1 id="ojca1">\u4E00\u3001<font style="color:rgb(64, 64, 64);">\u573A\u666F\u9A71\u52A8\uFF1A\u4E3A\u4EC0\u4E48\u4F01\u4E1A\u9700\u8981AI\u7F51\u5173\uFF1F</font></h1>
\u968F\u7740\u5982DeepSeek\u7B49\u5927\u6A21\u578B\u7684\u706B\u70ED\uFF0C\u5927\u6A21\u578B\u6280\u672F\u53D1\u5C55\u91CD\u5FC3\u6B63\u4ECE\u8BAD\u7EC3\u5411\u63A8\u7406\u9636\u6BB5\u52A0\u901F\u8FC1\u79FB\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u516C\u53F8\u5DF2\u7ECF\u5F00\u59CB\u8BBE\u8BA1\u7B26\u6EE1\u8DB3\u4F01\u4E1A\u5185\u90E8\u9700\u6C42\u548C\u5916\u90E8\u5546\u4E1A\u65B9\u5411\u7684\u5927\u6A21\u578B\u5E94\u7528\uFF0C\u5E76\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u8FDB\u884C\u90E8\u7F72\u3002\u5728\u5927\u6A21\u578B\u5E94\u7528\u89C4\u6A21\u5316\u843D\u5730\u7684\u80CC\u666F\u4E0B\uFF0C\u4F01\u4E1A\u9762\u4E34\u4E09\u5927\u6838\u5FC3\u6311\u6218\uFF1A

1. Token\u6210\u672C\u7BA1\u63A7\uFF1ALLM\u670D\u52A1\u6309Token\u8BA1\u8D39\u6A21\u5F0F\u4E0B\u7684\u9884\u7B97\u63A7\u5236
2. \u8D44\u6E90\u516C\u5E73\u5206\u914D\uFF1A\u591A\u79DF\u6237\u573A\u666F\u4E0B\u7684\u8D44\u6E90\u914D\u989D\u7BA1\u7406
3. \u670D\u52A1\u7A33\u5B9A\u6027\u4FDD\u969C\uFF1A\u7A81\u53D1\u6D41\u91CF\u4E0B\u7684\u670D\u52A1\u964D\u7EA7\u4E0E\u7194\u65AD

Higress AI\u7F51\u5173\u901A\u8FC7\u4E09\u5927\u6838\u5FC3\u80FD\u529B\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF1A

+ \u7EC6\u7C92\u5EA6Token\u8BA1\u91CF\uFF1A\u7CBE\u786E\u7EDF\u8BA1\u8F93\u5165/\u8F93\u51FAToken\u6D88\u8017
+ \u52A8\u6001\u914D\u989D\u7BA1\u7406\uFF1A\u652F\u6301\u5B9E\u65F6\u8C03\u6574\u79DF\u6237\u914D\u989D
+ \u5206\u7EA7\u9650\u6D41\u7B56\u7565\uFF1A\u5206\u949F\u7EA7\u8C03\u7528\u6B21\u6570\u4E0EToken\u6D88\u8017\u53CC\u91CD\u63A7\u5236

<h1 id="okxEf">\u4E8C\u3001\u5FEB\u901F\u5165\u95E8\uFF1A\u4E94\u5206\u949F\u642D\u5EFA\u7BA1\u63A7\u4F53\u7CFB</h1>
<h3 id="fxlsQ">\u4E00\u952E\u5F0F\u73AF\u5883\u90E8\u7F72</h3>
\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE\u91C7\u7528K8s\u90E8\u7F72\u6216\u4E91\u4E0A\u90E8\u7F72\u65B9\u5F0F\uFF08\u53C2\u8003[Higress\u90E8\u7F72\u6307\u5357](https://higress.cn/docs/latest/user/quickstart/)\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u6269\u7F29\u5BB9\u4E0E\u6EDA\u52A8\u5347\u7EA7\u3002

<h3 id="vgyDZ">\u53EF\u89C6\u5316\u63A7\u5236\u53F0\u914D\u7F6E</h3>
\u8BBF\u95EE \`http://localhost:8001\` \u5B8C\u6210\u521D\u59CB\u5316\uFF1A

+ **\u4F9B\u5E94\u5546\u7BA1\u7406**\uFF1A\u521B\u5EFA\u4E0D\u540C\u6A21\u578B\u4F9B\u5E94\u5546\u7684API\u5BC6\u94A5
+ **\u6D88\u8D39\u8005\u7BA1\u7406**\uFF1A\u521B\u5EFA\u5206\u7EA7\u8D26\u53F7\u4F53\u7CFB\uFF0C\u914D\u7F6E\u4E0D\u540C\u7684\u6D88\u8D39\u8005\u6743\u9650

![](/img/1741264659756.png)



<h3 id="dwjhn">\u5206\u7EA7\u914D\u989D\u7BA1\u7406</h3>
Higress\u652F\u6301\u5BF9\u4E0D\u540C\u7684AI\u8DEF\u7531\u8FDB\u884C\u4E0D\u540C\u7684\u914D\u989D\u7B56\u7565\u7BA1\u7406\uFF0C\u7BA1\u7406\u5458\u53EF\u901A\u8FC7URL\u5F62\u5F0F\u8FDB\u884C\u52A8\u6001\u7684\u8DEF\u7531\u7BA1\u7406\u8C03\u914D\u3002

\`\`\`bash
#\u4E3A\u7279\u5B9A\u6D88\u8D39\u8005\u589E\u52A0\u56FA\u5B9A\u6570\u91CF\u914D\u989D
curl 'http://localhost:8080/v1/chat/completions/quota/delta' -d 'consumer=aliyun-user1&value=100'
\`\`\`

\u9488\u5BF9\u67D0\u4E00\u6A21\u578B\u7684\u4E0D\u540C\u573A\u666F\uFF0C\u4E0D\u540C\u7684\u914D\u989D\u6570\u91CF\u53EF\u4EE5\u8BA9\u4F01\u4E1A\u6210\u672C\u8FDB\u4E00\u6B65\u4F18\u5316\u3002

![\u753B\u677F](/img/1741264661731.png)





\u540C\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4E3A\u7279\u5B9A\u7684API-KEY\u914D\u7F6E\u79D2\u7EA7/\u5206\u949F\u7EA7/\u5C0F\u65F6\u7EA7\u7684Token\u6570\u91CF\u9650\u5236\uFF0C\u9632\u6B62\u56E0\u7A81\u53D1\u6D41\u91CF\u6216API-KEY\u6CC4\u9732\u5BFC\u81F4\u7684\u8D39\u7528\u7A81\u589E\u3002

\`\`\`bash
rule_items:
- limit_by_per_header: "x-api-key"
  limit_keys:
  - key: "sk-XXXXXXXXX"
    token_per_minute: 100000
rule_name: "default_rule"
\`\`\`

<h3 id="RLolM"></h3>
<h1 id="YnQCL">\u56DB\u3001\u53EF\u89C2\u6D4B\u6027\uFF1A\u6570\u636E\u9A71\u52A8\u7684\u51B3\u7B56\u4F53\u7CFB</h1>
<h3 id="lOsxI">1. \u591A\u7EF4\u76D1\u63A7\u770B\u677F</h3>
Higress\u5185\u7F6E\u591A\u4E2A\u89C2\u6D4B\u7EF4\u5EA6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6307\u6807\u63A5\u5165Prometheus\uFF0C\u4E5F\u63A5\u5165\u4E86Grafana\u770B\u677F\uFF0C\u7BA1\u7406\u5458\u5728\u89C2\u6D4B\u754C\u9762\u53EF\u4EE5\u5B9E\u65F6\u83B7\u53D6\u5F53\u524DAI API\u6570\u636E\u3002AI\u573A\u666F\u4E0B\u5185\u7F6E\u7684\u6307\u6807\u6709\uFF1A

1. \u4F9B\u5E94\u5546\u5065\u5EB7\u72B6\u6001
2. \u6A21\u578B\u4F7F\u7528\u91CF\u5206\u5E03
3. \u6D88\u8D39\u8005\u4F7F\u7528\u91CF\u89C2\u6D4B
4. Token\u6D88\u8017\u8D8B\u52BF

![](/img/1741264664628.png)

<h3 id="aIyhz">2. \u9884\u8B66\u89C4\u5219\u914D\u7F6E</h3>
\u9488\u5BF9Token\u5F02\u5E38\u6570\u91CF\u3001\u6D41\u91CF\u5F02\u5E38\u589E\u957F\u7684\u60C5\u51B5\uFF0C\u5728\u63A7\u5236\u53F0\u4FA7\u89C2\u6D4B\u754C\u9762\u53EF\u4EE5\u914D\u7F6E\u544A\u8B66\u4FE1\u606F\u3002\u89E6\u53D1\u544A\u8B66\u65F6\uFF0C\u8FD0\u7EF4\u5DE5\u7A0B\u5E08\u53EF\u4EE5\u53CA\u65F6\u4ECB\u5165\uFF0C\u907F\u514D\u8D44\u91D1\u635F\u5931\u3002

![](/img/1741264667632.png)

<h2 id="LWa0P"></h2>
`},n=function(){return s},r=function(){return[]},e=p((v,f,_)=>{const{layout:k,...l}=i;return l.file=a,l.url=t,d`${h()}${u(s)}`})});export{e as Content,m as __tla,n as compiledContent,e as default,a as file,i as frontmatter,r as getHeadings,o as rawContent,t as url};
