import{c as i,__tla as f}from"./astro-component.m4CCZO6J.js";import{r as d,m as p,u as g,__tla as y}from"./constant.D4Mjy2rC.js";import{__tla as v}from"./astro/assets-service.BhtN0nM5.js";let t,c,e,n,r,a,l,b=Promise.all([(()=>{try{return f}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let o;o=`<p>\u4F5C\u8005\uFF1A\u68A7\u540C</p>
<h1 id="\u66F4\u65B0"><strong><font style="color:#000000;">\u66F4\u65B0</font></strong></h1>
<p><a href="https://spec.modelcontextprotocol.io/specification/2025-03-26/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MCP\xA0Specification</a><font style="color:#000000;">\u57282025-03-26\u53D1\u5E03\u4E86\u6700\u65B0\u7684\u7248\u672C\uFF0C\u672C\u6587\u5BF9\u4E3B\u8981\u7684\u6539\u52A8\u8FDB\u884C\u8BE6\u7EC6\u4ECB\u7ECD\u548C\u89E3\u91CA</font></p>
<p><font style="color:#000000;">2025-03-26 \u7248\u672C\u4E0E 2024-11-05 \u7248\u672C\u7684\u4E3B\u8981\u66F4\u65B0\u5BF9\u6BD4\u8868\u683C\uFF1A</font></p>

































































<table><thead><tr><th align="left"><strong><font style="color:#000000;">\u7C7B\u522B</font></strong></th><th align="left"><strong><font style="color:#000000;">2024-11-05 \u7248\u672C</font></strong></th><th align="left"><strong><font style="color:#000000;">2025-03-26 \u7248\u672C</font></strong></th><th align="left"><strong><font style="color:#000000;">\u66F4\u65B0\u610F\u4E49\u4E0E\u5F71\u54CD</font></strong></th></tr></thead><tbody><tr><td align="left"><strong><font style="color:#000000;">\u6388\u6743\u673A\u5236</font></strong></td><td align="left"><font style="color:#000000;">\u57FA\u4E8E OAuth 2.0\uFF0C\u652F\u6301\u9690\u5F0F\u6388\u6743\u6D41\u548C\u57FA\u672C\u6743\u9650\u63A7\u5236</font></td><td align="left"><strong><font style="color:#000000;">\u5347\u7EA7\u81F3 OAuth 2.1</font></strong><font style="color:#000000;">\uFF0C\u5E9F\u5F03\u9690\u5F0F\u6388\u6743\u6D41\uFF0C\u5F3A\u5236 PKCE \u548C HTTPS</font></td><td align="left"><font style="color:#000000;">\u5B89\u5168\u6027\u63D0\u5347\uFF0C\u51CF\u5C11 Token \u6CC4\u9732\u98CE\u9669\uFF0C\u9002\u5E94\u516C\u5171\u5BA2\u6237\u7AEF\uFF08\u5982\u79FB\u52A8\u7AEF\u3001\u672C\u5730\u5E94\u7528\uFF09\u573A\u666F\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F20\u8F93\u534F\u8BAE</font></strong></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F7F\u7528 HTTP + SSE\uFF08\u53CC\u7AEF\u70B9\uFF09\uFF0C\u652F\u6301\u5355\u5411\u6D41\u5F0F\u901A\u4FE1</font></td><td align="left"><strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\u66FF\u6362\u4E3A Streamable HTTP</font></strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF08\u5355\u7AEF\u70B9\uFF09\uFF0C\u652F\u6301\u53CC\u5411\u901A\u4FE1\u4E0E\u65AD\u7EBF\u6062\u590D</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u7B80\u5316\u90E8\u7F72\u590D\u6742\u5EA6\uFF0C\u652F\u6301\u7075\u6D3B\u901A\u4FE1\u6A21\u5F0F\uFF08\u4E00\u6B21\u6027\u54CD\u5E94\u6216\u6D41\u5F0F\u63A8\u9001\uFF09\uFF0C\u4F18\u5316\u7F51\u7EDC\u7A33\u5B9A\u6027\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;">JSON-RPC \u6279\u5904\u7406</font></strong></td><td align="left"><font style="color:#000000;">\u672A\u5F3A\u5236\u652F\u6301\uFF0C\u90E8\u5206\u5B9E\u73B0\u53EF\u9009</font></td><td align="left"><strong><font style="color:#000000;">\u534F\u8BAE\u5C42\u9762\u5F3A\u5236\u652F\u6301\u6279\u5904\u7406</font></strong><font style="color:#000000;">\uFF08Batching\uFF09\uFF0C\u8981\u6C42 MUST \u5B9E\u73B0</font></td><td align="left"><font style="color:#000000;">\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\uFF0C\u652F\u6301\u5E76\u884C\u4EFB\u52A1\u5904\u7406\uFF0C\u63D0\u5347\u6279\u91CF\u64CD\u4F5C\u6548\u7387\uFF08\u5982\u539F\u5B50\u4E8B\u52A1\uFF09\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\u5DE5\u5177\u5143\u6570\u636E</font></strong></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u4EC5\u6709 </font><font style="color:#000000;background-color:#f7f7f7;">inputSchema</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u548C </font><font style="color:#000000;background-color:#f7f7f7;">description</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u63CF\u8FF0</font></td><td align="left"><strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\u65B0\u589E Tool Annotations</font></strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF08\u64CD\u4F5C\u7C7B\u3001\u5C55\u793A\u7C7B\u5143\u6570\u636E\uFF09</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u663E\u5F0F\u6807\u8BB0\u5DE5\u5177\u98CE\u9669\uFF08\u5982 </font><font style="color:#000000;background-color:#f7f7f7;">destructive</font><font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF09\u3001\u652F\u6301\u81EA\u52A8\u6743\u9650\u7BA1\u63A7\u4E0E\u524D\u7AEF UI \u9002\u914D\uFF0C\u63D0\u5347\u5B89\u5168\u5408\u89C4\u6027\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;">\u8FDB\u5EA6\u901A\u77E5</font></strong></td><td align="left"><font style="color:#000000;">\u4EC5\u652F\u6301\u767E\u5206\u6BD4\u6216\u6570\u503C\u8FDB\u5EA6</font></td><td align="left"><font style="color:#000000;">\u65B0\u589E </font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;"> \u5B57\u6BB5\uFF0C\u652F\u6301\u52A8\u6001\u72B6\u6001\u63CF\u8FF0</font></td><td align="left"><font style="color:#000000;">\u63D0\u5347\u7528\u6237\u4EA4\u4E92\u4F53\u9A8C\uFF08\u5982\u663E\u793A\u201C\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u5269\u4F59 50%\u201D\uFF09\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\u591A\u6A21\u6001\u652F\u6301</font></strong></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u652F\u6301\u6587\u672C\u3001\u56FE\u50CF</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u65B0\u589E\u97F3\u9891\u6570\u636E\u6D41\u652F\u6301</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u6269\u5C55\u8BED\u97F3\u52A9\u624B\u3001\u5B9E\u65F6\u97F3\u9891\u5904\u7406\u7B49\u573A\u666F\u80FD\u529B\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;">\u53C2\u6570\u8865\u5168</font></strong></td><td align="left"><font style="color:#000000;">\u672A\u660E\u786E\u652F\u6301</font></td><td align="left"><font style="color:#000000;">\u65B0\u589E </font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;"> \u80FD\u529B\u58F0\u660E\uFF0C\u652F\u6301\u53C2\u6570\u81EA\u52A8\u8865\u5168\u5EFA\u8BAE</font></td><td align="left"><font style="color:#000000;">\u63D0\u5347\u5F00\u53D1\u8005\u6548\u7387\uFF0C\u51CF\u5C11\u624B\u52A8\u8F93\u5165\u9519\u8BEF\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F1A\u8BDD\u7BA1\u7406</font></strong></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u672A\u660E\u786E\u4F1A\u8BDD\u6807\u8BC6</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F15\u5165 </font><font style="color:#000000;background-color:#f7f7f7;">Mcp-Session-Id</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u5934\u90E8\uFF0C\u652F\u6301\u65AD\u7EBF\u91CD\u8FDE\u4E0E\u72B6\u6001\u6062\u590D</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u589E\u5F3A\u957F\u65F6\u4EFB\u52A1\uFF08\u5982\u8BED\u97F3\u4EA4\u4E92\uFF09\u7684\u53EF\u9760\u6027\uFF0C\u964D\u4F4E\u7F51\u7EDC\u6CE2\u52A8\u5F71\u54CD\u3002</font></td></tr><tr><td align="left"><strong><font style="color:#000000;">\u5B89\u5168\u8981\u6C42</font></strong></td><td align="left"><font style="color:#000000;">\u4F9D\u8D56 OAuth 2.0 \u7684\u63A8\u8350\u5B9E\u8DF5</font></td><td align="left"><strong><font style="color:#000000;">\u5F3A\u5236 HTTPS</font></strong><font style="color:#000000;">\u3001Token \u7ED1\u5B9A\u4E0E\u5B58\u50A8\u52A0\u5BC6\uFF0C\u652F\u6301\u77ED\u671F Token \u8F6E\u6362</font></td><td align="left"><font style="color:#000000;">\u51CF\u5C11\u4E2D\u95F4\u4EBA\u653B\u51FB\u98CE\u9669\uFF0C\u7F29\u5C0F Token \u6CC4\u9732\u540E\u7684\u6709\u6548\u7A97\u53E3\u3002</font></td></tr></tbody></table>
<hr>
<h3 id="\u5173\u952E\u5DEE\u5F02\u603B\u7ED3"><font style="color:#000000;">\u5173\u952E\u5DEE\u5F02\u603B\u7ED3\uFF1A</font></h3>
<ol>
<li><font style="color:#000000;">\u5B89\u5168\u6027</font>
<ul>
<li><font style="color:#000000;">OAuth 2.1 \u5F3A\u5236 PKCE \u548C HTTPS\uFF0C\u6D88\u9664\u9690\u5F0F\u6D41\u98CE\u9669\uFF0C\u66F4\u9002\u5E94 AI \u5DE5\u5177\u7684\u9AD8\u6743\u9650\u573A\u666F\u3002</font></li>
</ul>
</li>
<li><font style="color:#000000;">\u901A\u4FE1\u6548\u7387</font>
<ul>
<li><font style="color:#000000;">Streamable HTTP \u5355\u7AEF\u70B9\u8BBE\u8BA1\u7B80\u5316\u67B6\u6784\uFF0CJSON-RPC \u6279\u5904\u7406\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\u3002</font></li>
</ul>
</li>
<li><font style="color:#000000;">\u5DE5\u5177\u53EF\u63A7\u6027</font>
<ul>
<li><font style="color:#000000;">Tool Annotations \u663E\u5F0F\u6807\u8BB0\u98CE\u9669\u884C\u4E3A\uFF08\u5982\u5220\u9664\u64CD\u4F5C\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u5316\u6743\u9650\u7BA1\u7406\u548C\u524D\u7AEF\u9002\u914D\u3002</font></li>
</ul>
</li>
<li><font style="color:#000000;">\u591A\u6A21\u6001\u6269\u5C55</font>
<ul>
<li><font style="color:#000000;">\u65B0\u589E\u97F3\u9891\u6D41\u652F\u6301\uFF0C\u8865\u5168\u8BED\u97F3\u4EA4\u4E92\u80FD\u529B\uFF0C\u5B8C\u5584\u591A\u6A21\u6001\u751F\u6001\u3002</font></li>
</ul>
</li>
<li><font style="color:#000000;">\u5F00\u53D1\u53CB\u597D\u6027</font>
<ul>
<li><font style="color:#000000;">\u53C2\u6570\u8865\u5168\uFF08</font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;">\uFF09\u548C\u8FDB\u5EA6\u6D88\u606F\uFF08</font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;">\uFF09\u63D0\u5347\u5F00\u53D1\u8005\u6548\u7387\u4E0E\u7528\u6237\u4F53\u9A8C\u3002</font></li>
</ul>
</li>
</ol>
<hr>
<h1 id="1-\u66F4\u5B89\u5168\u7684oauth-21"><strong><font style="color:#000000;">1. \u66F4\u5B89\u5168\u7684OAuth 2.1</font></strong></h1>
<h2 id="11-\u4ECEoauth-20\u523021\u7684\u672C\u8D28\u8DE8\u8D8A"><strong><font style="color:#000000;">1.1 </font></strong><font style="color:#000000;">\u4ECEOAuth 2.0\u52302.1\u7684\u672C\u8D28\u8DE8\u8D8A</font></h2>
<h3 id="111-\u6838\u5FC3\u5B89\u5168\u7F3A\u9677\u7684\u6839\u6CBB"><strong><font style="color:#000000;">1.1.1 \u6838\u5FC3\u5B89\u5168\u7F3A\u9677\u7684\u6839\u6CBB</font></strong></h3>
<p><font style="color:#000000;">\u65E7\u7248OAuth 2.0\u957F\u671F\u5B58\u5728\u4E09\u5927\u81F4\u547D\u9690\u60A3\uFF1A</font></p>

























<table><thead><tr><th align="left"><strong><font style="color:#000000;">\u98CE\u9669\u7C7B\u578B</font></strong></th><th align="left"><strong><font style="color:#000000;">\u5177\u4F53\u6F0F\u6D1E</font></strong></th><th align="left"><strong><font style="color:#000000;">OAuth 2.1\u4FEE\u590D\u65B9\u6848</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:#000000;">\u6388\u6743\u7801\u6CC4\u9732</font></td><td align="left"><font style="color:#000000;">\u9690\u5F0F\u6388\u6743\u6D41\u901A\u8FC7URL\u7247\u6BB5\u4F20\u9012Token</font></td><td align="left"><font style="color:#000000;">\u5B8C\u5168\u5E9F\u5F03\u9690\u5F0F\u6388\u6743\uFF08Implicit Flow\uFF09</font></td></tr><tr><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u4E2D\u95F4\u4EBA\u653B\u51FB</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u516C\u5171\u5BA2\u6237\u7AEF\u672A\u52A0\u5BC6\u4F20\u8F93\u6388\u6743\u7801</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F3A\u5236\u542F\u7528PKCE\uFF08Proof Key for Code Exchange\uFF09</font></td></tr><tr><td align="left"><font style="color:#000000;">\u91CD\u5B9A\u5411\u52AB\u6301</font></td><td align="left"><font style="color:#000000;">\u5F00\u653E\u91CD\u5B9A\u5411\u6F0F\u6D1E\u5BFC\u81F4\u9493\u9C7C\u653B\u51FB</font></td><td align="left"><font style="color:#000000;">\u4E25\u683C\u9A8C\u8BC1\u91CD\u5B9A\u5411URI\u767D\u540D\u5355</font></td></tr></tbody></table>
<p><font style="color:#000000;">\u5728AI\u5DE5\u5177\u573A\u666F\u4E2D\uFF0C\u8FD9\u4E9B\u6F0F\u6D1E\u53EF\u80FD\u9020\u6210\u707E\u96BE\u6027\u540E\u679C\u3002\u4F8B\u5982\u901A\u8FC7\u622A\u83B7\u672A\u52A0\u5BC6\u7684\u6388\u6743\u7801\uFF0C\u653B\u51FB\u8005\u53EF\u4F2A\u9020\u201D\u6570\u636E\u5E93\u6E05\u7406\u5DE5\u5177\u201D\u7684\u5408\u6CD5\u8C03\u7528\u8BF7\u6C42\u3002</font></p>
<h3 id="112-pkce\u673A\u5236\u7684\u5168\u9762\u5F3A\u5236\u5316"><strong><font style="color:#000000;">1.1.2 PKCE\u673A\u5236\u7684\u5168\u9762\u5F3A\u5236\u5316</font></strong></h3>
<p><font style="color:#000000;">PKCE\u901A\u8FC7\u5BC6\u7801\u5B66\u6311\u6218\u54CD\u5E94\u673A\u5236\uFF0C\u5F7B\u5E95\u675C\u7EDD\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1A</font></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># \u5BA2\u6237\u7AEF\u751F\u6210PKCE\u53C2\u6570\u793A\u4F8B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import hashlib, base64, os</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">code_verifier = base64.urlsafe_b64encode(os.urandom(32)).decode('utf-8').rstrip('=')</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">code_challenge = hashlib.sha256(code_verifier.encode()).digest()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">code_challenge = base64.urlsafe_b64encode(code_challenge).decode('utf-8').rstrip('=')</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u5BA2\u6237\u7AEF\u751F\u6210PKCE\u53C2\u6570\u793A\u4F8B\x7Fimport hashlib, base64, os\x7F\x7Fcode_verifier = base64.urlsafe_b64encode(os.urandom(32)).decode(&#x27;utf-8&#x27;).rstrip(&#x27;=&#x27;)\x7Fcode_challenge = hashlib.sha256(code_verifier.encode()).digest()\x7Fcode_challenge = base64.urlsafe_b64encode(code_challenge).decode(&#x27;utf-8&#x27;).rstrip(&#x27;=&#x27;)"><div></div></button></div></figure></div>
<h3 id="113-\u6D41\u7A0B\u5BF9\u6BD4"><strong><font style="color:#000000;">1.1.3 </font></strong><font style="color:#000000;">\u6D41\u7A0B\u5BF9\u6BD4</font></h3>
<p><font style="color:#000000;">\u4F20\u7EDFOAuth 2.0\uFF1A  \u5BA2\u6237\u7AEF \u2192 \u6388\u6743\u670D\u52A1\u5668\uFF1A\u7533\u8BF7\u6388\u6743\u7801  \u6388\u6743\u670D\u52A1\u5668 \u2192 \u5BA2\u6237\u7AEF\uFF1A\u8FD4\u56DE\u88F8\u6388\u6743\u7801  OAuth 2.1 + PKCE\uFF1A  \u5BA2\u6237\u7AEF \u2192 \u6388\u6743\u670D\u52A1\u5668\uFF1A\u7533\u8BF7\u6388\u6743\u7801 + code_challenge  \u6388\u6743\u670D\u52A1\u5668 \u2192 \u5BA2\u6237\u7AEF\uFF1A\u8FD4\u56DE\u52A0\u5BC6\u6388\u6743\u7801  \u5BA2\u6237\u7AEF \u2192 \u4EE4\u724C\u7AEF\u70B9\uFF1Acode_verifier + \u6388\u6743\u7801 </font></p>
<h2 id="12-\u534F\u8BAE\u673A\u5236\u4E3Aai\u573A\u666F\u91CF\u8EAB\u6253\u9020\u7684\u6388\u6743\u4F53\u7CFB"><strong><font style="color:#000000;">1.2 \u534F\u8BAE\u673A\u5236\uFF1A\u4E3AAI\u573A\u666F\u91CF\u8EAB\u6253\u9020\u7684\u6388\u6743\u4F53\u7CFB</font></strong></h2>
<h3 id="121-\u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518Cdcr"><strong><font style="color:#000000;">1.2.1 \u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C\uFF08DCR\uFF09</font></strong></h3>
<p><font style="color:#000000;">\u9488\u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u788E\u7247\u5316\u7279\u70B9\uFF0CMCP\u5F3A\u5236\u8981\u6C42\u652F\u6301RFC7591\u52A8\u6001\u6CE8\u518C\u534F\u8BAE\uFF1A</font></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1743991601136-c7c6d67f-7dd3-426b-9976-cccd471da97a.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:#000000;">\u8BE5\u673A\u5236\u4F7F\u5F97\uFF1A</font></p>
<ul>
<li><font style="color:#000000;">\u65B0\u5DE5\u5177\u65E0\u9700\u9884\u6CE8\u518C\u5373\u53EF\u63A5\u5165\u4EFB\u610FMCP\u670D\u52A1</font></li>
<li><font style="color:#000000;">\u4E34\u65F6\u6027AI Agent\u53EF\u81EA\u52A8\u83B7\u53D6\u751F\u5B58\u671F\u5339\u914D\u7684\u51ED\u8BC1</font></li>
<li><font style="color:#000000;">\u652F\u6301\u51ED\u8BC1\u81EA\u52A8\u8F6E\u6362\uFF08\u5982\u6BCF24\u5C0F\u65F6\u66F4\u6362client_secret\uFF09</font></li>
</ul>
<h3 id="122-\u5143\u6570\u636E\u53D1\u73B0\u534F\u8BAE"><strong><font style="color:#000000;">1.2.2 \u5143\u6570\u636E\u53D1\u73B0\u534F\u8BAE</font></strong></h3>
<p><font style="color:#000000;">\u901A\u8FC7\u6807\u51C6\u5316\u53D1\u73B0\u7AEF\u70B9\u5B9E\u73B0\u534F\u8BAE\u81EA\u63CF\u8FF0\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">GET /.well-known/oauth-authorization-server HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: api.example.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">MCP-Protocol-Version: 2025-03-26</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"issuer": "https://api.example.com",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"authorization_endpoint": "https://auth.example.com/authorize",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"token_endpoint": "https://auth.example.com/token",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"capabilities": ["PKCE", "TOKEN_ROTATION"]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="GET /.well-known/oauth-authorization-server HTTP/1.1\x7FHost: api.example.com\x7FMCP-Protocol-Version: 2025-03-26\x7F\x7FHTTP/1.1 200 OK\x7F{\x7F  &#x22;issuer&#x22;: &#x22;https://api.example.com&#x22;,\x7F  &#x22;authorization_endpoint&#x22;: &#x22;https://auth.example.com/authorize&#x22;,\x7F  &#x22;token_endpoint&#x22;: &#x22;https://auth.example.com/token&#x22;,\x7F  &#x22;capabilities&#x22;: [&#x22;PKCE&#x22;, &#x22;TOKEN_ROTATION&#x22;]\x7F}"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u53D1\u73B0\u5931\u8D25\u65F6\uFF0C\u5BA2\u6237\u7AEF\u81EA\u52A8\u56DE\u9000\u5230\u9884\u8BBE\u7AEF\u70B9\u8DEF\u5F84\uFF0C\u4FDD\u969C\u517C\u5BB9\u6027\u3002</font></p>
<h2 id="13-\u5B9E\u73B0\u89C4\u8303mcp\u7684\u516D\u5927\u5B89\u5168\u94C1\u5F8B"><strong><font style="color:#000000;">1.3 \u5B9E\u73B0\u89C4\u8303\uFF1AMCP\u7684\u516D\u5927\u5B89\u5168\u94C1\u5F8B</font></strong></h2>
<h3 id="131-https\u5168\u94FE\u8DEF\u5F3A\u5236"><strong><font style="color:#000000;">1.3.1 HTTPS\u5168\u94FE\u8DEF\u5F3A\u5236</font></strong></h3>
<ul>
<li><font style="color:#000000;">\u6240\u6709\u6388\u6743\u7AEF\u70B9\u5FC5\u987B\u90E8\u7F72TLS 1.3+</font></li>
<li><font style="color:#000000;">\u6DF7\u5408HTTP\u5185\u5BB9\uFF08\u5982\u56FE\u50CF\uFF09\u9700\u901A\u8FC7\u52A0\u5BC6\u901A\u9053\u4EE3\u7406</font></li>
</ul>
<h3 id="132-\u4EE4\u724C\u751F\u547D\u5468\u671F\u7BA1\u63A7"><strong><font style="color:#000000;">1.3.2 \u4EE4\u724C\u751F\u547D\u5468\u671F\u7BA1\u63A7</font></strong></h3>




















<table><thead><tr><th align="left"><strong><font style="color:#000000;">\u4EE4\u724C\u7C7B\u578B</font></strong></th><th align="left"><strong><font style="color:#000000;">\u5EFA\u8BAE\u751F\u5B58\u671F</font></strong></th><th align="left"><strong><font style="color:#000000;">\u5237\u65B0\u89C4\u5219</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:#000000;">Access Token</font></td><td align="left"><font style="color:#000000;">\u226415\u5206\u949F</font></td><td align="left"><font style="color:#000000;">\u5355\u6B21\u4F7F\u7528\u540E\u7ACB\u5373\u5931\u6548</font></td></tr><tr><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">Refresh Token</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u226424\u5C0F\u65F6</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u6BCF\u6B21\u5237\u65B0\u751F\u6210\u65B0\u4EE4\u724C</font></td></tr></tbody></table>
<h3 id="133-\u5BA2\u6237\u7AEF\u51ED\u8BC1\u5B58\u50A8"><strong><font style="color:#000000;">1.3.3 \u5BA2\u6237\u7AEF\u51ED\u8BC1\u5B58\u50A8</font></strong></h3>
<ul>
<li><font style="color:#000000;">\u7981\u6B62\u660E\u6587\u5B58\u50A8\uFF1A\u91C7\u7528\u64CD\u4F5C\u7CFB\u7EDF\u5B89\u5168\u5B58\u50A8\u533A\u6216HSM\u52A0\u5BC6</font></li>
<li><font style="color:#000000;">\u79FB\u52A8\u7AEF\u4F7F\u7528Android Keystore/iOS Keychain</font></li>
</ul>
<h3 id="134-\u4F1A\u8BDD\u7ED1\u5B9A"><strong><font style="color:#000000;">1.3.4 \u4F1A\u8BDD\u7ED1\u5B9A</font></strong></h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u4EE4\u724C\u5143\u6570\u636E\u793A\u4F8B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"token": "eyJhbGciOi...",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"binding": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"client_id": "mcp-client-xyz",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"ip_range": "192.168.1.0/24",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"device_fingerprint": "SHA3-256(\u786C\u4EF6\u7279\u5F81)"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// \u4EE4\u724C\u5143\u6570\u636E\u793A\u4F8B\x7F{\x7F  &#x22;token&#x22;: &#x22;eyJhbGciOi...&#x22;,\x7F  &#x22;binding&#x22;: {\x7F    &#x22;client_id&#x22;: &#x22;mcp-client-xyz&#x22;,\x7F    &#x22;ip_range&#x22;: &#x22;192.168.1.0/24&#x22;,\x7F    &#x22;device_fingerprint&#x22;: &#x22;SHA3-256(\u786C\u4EF6\u7279\u5F81)&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="135-\u5BA1\u8BA1\u65E5\u5FD7"><strong><font style="color:#000000;">1.3.5 \u5BA1\u8BA1\u65E5\u5FD7</font></strong></h3>
<ul>
<li><font style="color:#000000;">\u8BB0\u5F55\u6240\u6709\u4EE4\u724C\u9881\u53D1/\u64A4\u9500\u4E8B\u4EF6</font></li>
<li><font style="color:#000000;">\u9AD8\u98CE\u9669\u64CD\u4F5C\uFF08\u5982\u5220\u9664\u7C7B\u5DE5\u5177\u8C03\u7528\uFF09\u9700\u5173\u8054\u539F\u59CB\u6388\u6743\u4F1A\u8BDD</font></li>
</ul>
<h3 id="136-\u9632\u5FA1\u6027\u7F16\u7A0B"><strong><font style="color:#000000;">1.3.6 \u9632\u5FA1\u6027\u7F16\u7A0B</font></strong></h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u5B89\u5168\u7684\u4EE4\u724C\u9A8C\u8BC1\u4F2A\u4EE3\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">public boolean verifyToken(String token) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">try {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">JWT jwt = decode(token);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">if (jwt.isExpired()) throw new TokenExpiredException();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">if (!jwt.validateSignature(publicKey)) throw new InvalidSignatureException();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">if (jwt.getClaim("scope").contains("destructive")) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">requireMfa(); // \u9AD8\u5371\u64CD\u4F5C\u89E6\u53D1\u591A\u56E0\u7D20\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">return true;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">} catch (JWTException e) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">auditLog.logSecurityEvent("INVALID_TOKEN", token);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">return false;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// \u5B89\u5168\u7684\u4EE4\u724C\u9A8C\u8BC1\u4F2A\u4EE3\u7801\x7Fpublic boolean verifyToken(String token) {\x7F    try {\x7F        JWT jwt = decode(token);\x7F        if (jwt.isExpired()) throw new TokenExpiredException();\x7F        if (!jwt.validateSignature(publicKey)) throw new InvalidSignatureException();\x7F        if (jwt.getClaim(&#x22;scope&#x22;).contains(&#x22;destructive&#x22;)) {\x7F            requireMfa(); // \u9AD8\u5371\u64CD\u4F5C\u89E6\u53D1\u591A\u56E0\u7D20\u8BA4\u8BC1\x7F        }\x7F        return true;\x7F    } catch (JWTException e) {\x7F        auditLog.logSecurityEvent(&#x22;INVALID_TOKEN&#x22;, token);\x7F        return false;\x7F    }\x7F}"><div></div></button></div></figure></div>
<h2 id="14-\u5BF9ai\u5DE5\u5177\u751F\u6001\u7684\u5F71\u54CD"><strong><font style="color:#000000;">1.4 \u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u5F71\u54CD</font></strong></h2>
<h3 id="141-\u5DE5\u5177\u884C\u4E3A\u7684\u6807\u51C6\u5316\u63CF\u8FF0"><strong><font style="color:#000000;">1.4.1 \u5DE5\u5177\u884C\u4E3A\u7684\u6807\u51C6\u5316\u63CF\u8FF0</font></strong></h3>
<p><font style="color:#000000;">\u901A</font><font style="color:rgb(44, 44, 54);">\u901A\u8FC7 </font><code dir="auto">**&#x3C;font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">ToolAnnotations&#x3C;/font>**</code><font style="color:rgb(44, 44, 54);"> \u63A5\u53E3\u5B9A\u4E49\u7684\u5143\u6570\u636E\uFF08\u89C1\u4EE3\u7801\u5757\uFF09\uFF0C\u5F00\u53D1\u8005\u53EF\u5411\u5BA2\u6237\u7AEF\u63D0\u4F9B\u5DE5\u5177\u884C\u4E3A\u7684</font><strong><font style="color:rgb(17, 24, 39);">\u975E\u5F3A\u5236\u6027\u63D0\u793A </font></strong><font style="color:rgb(44, 44, 54);">\u3002\u8FD9\u4E9B\u6807\u6CE8\u5BF9\u5DE5\u5177\u94FE\u751F\u6001\u4EA7\u751F\u4EE5\u4E0B\u5F71\u54CD\uFF1A</font></p>
<ol>
<li><strong><font style="color:rgb(17, 24, 39);">\u4EA4\u4E92\u900F\u660E\u5EA6\u63D0\u5347</font></strong>
<ul>
<li><code dir="auto">**&#x3C;font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">title&#x3C;/font>**</code><font style="color:rgb(44, 44, 54);"> \u63D0\u4F9B\u8BED\u4E49\u5316\u547D\u540D</font></li>
<li><code dir="auto">**&#x3C;font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">readOnlyHint/destructiveHint&#x3C;/font>**</code><font style="color:rgb(44, 44, 54);"> \u6807\u660E\u64CD\u4F5C\u662F\u5426\u5177\u5907\u7834\u574F\u6027</font></li>
<li><code dir="auto">**&#x3C;font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">openWorldHint&#x3C;/font>**</code><font style="color:rgb(44, 44, 54);"> \u533A\u5206\u5185\u5916\u90E8\u4F5C\u7528\u57DF\uFF08\u5982\u641C\u7D22\u5F15\u64CE vs \u5185\u5B58\u8BBF\u95EE\uFF09<br>
</font><font style="color:rgb(44, 44, 54);">\u524D\u7AEF\u53EF\u901A\u8FC7\u8FD9\u4E9B\u6807\u6CE8\u52A8\u6001\u6E32\u67D3\u64CD\u4F5C\u786E\u8BA4\u5F39\u7A97\u6216\u98CE\u9669\u8B66\u793A\u56FE\u6807\u3002</font></li>
</ul>
</li>
<li><strong><font style="color:rgb(17, 24, 39);">\u8C03\u7528\u7B56\u7565\u4F18\u5316</font></strong>
<ul>
<li><code dir="auto">**&#x3C;font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">idempotentHint&#x3C;/font>**</code><font style="color:rgb(44, 44, 54);"> \u5141\u8BB8\u5BA2\u6237\u7AEF\u81EA\u52A8\u91CD\u8BD5\u5E42\u7B49\u8BF7\u6C42\uFF08\u5982\u67E5\u8BE2\u64CD\u4F5C\uFF09</font></li>
<li><font style="color:rgb(44, 44, 54);">\u975E\u5E42\u7B49\u5199\u64CD\u4F5C\uFF08\u5982\u6587\u4EF6\u5220\u9664\uFF09\u5219\u5F3A\u5236\u4EBA\u5DE5\u4E8C\u6B21\u786E\u8BA4</font></li>
</ul>
</li>
</ol>
<p><strong><font style="color:rgb(17, 24, 39);">\u751F\u6001\u517C\u5BB9\u6027\u4FDD\u969C</font></strong><font style="color:rgb(44, 44, 54);"><br>
</font><font style="color:rgb(44, 44, 54);">\u6240\u6709\u6807\u6CE8\u4EC5\u4F5C\u4E3A</font><strong><font style="color:rgb(17, 24, 39);">\u884C\u4E3A\u5EFA\u8BAE </font></strong><font style="color:rgb(44, 44, 54);">\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u5F97\u636E\u6B64\u66FF\u4EE3\u5B89\u5168\u63A7\u5236\u3002\u4F8B\u5982\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> (tool.annotations.destructiveHint) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">showDestructiveWarningDialog</span><span style="--0:#E1E4E8">(); </span><span style="--0:#99A0A6">// \u524D\u7AEF\u63D0\u793A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">await</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">enforceRBACPolicy</span><span style="--0:#E1E4E8">(); </span><span style="--0:#99A0A6">// \u771F\u5B9E\u6743\u9650\u7531RBAC\u5F15\u64CE\u6821\u9A8C</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="if (tool.annotations.destructiveHint) {\x7F  showDestructiveWarningDialog(); // \u524D\u7AEF\u63D0\u793A\x7F}\x7Fawait enforceRBACPolicy(); // \u771F\u5B9E\u6743\u9650\u7531RBAC\u5F15\u64CE\u6821\u9A8C"><div></div></button></div></figure></div>
<h2 id="15-\u5F00\u53D1\u8005\u8FC1\u79FB\u6307\u5357"><strong><font style="color:#000000;">1.5 \u5F00\u53D1\u8005\u8FC1\u79FB\u6307\u5357</font></strong></h2>
<h3 id="151-\u4E3B\u8981\u53D8\u66F4\u70B9\u5BF9\u6BD4"><strong><font style="color:#000000;">1.5.1 \u4E3B\u8981\u53D8\u66F4\u70B9\u5BF9\u6BD4</font></strong></h3>






























<table><thead><tr><th align="left"><strong><font style="color:#000000;">\u529F\u80FD\u9879</font></strong></th><th align="left"><strong><font style="color:#000000;">2024-11-05\u7248\u672C</font></strong></th><th align="left"><strong><font style="color:#000000;">2025-03-26\u7248\u672C</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:#000000;">\u6388\u6743\u7AEF\u70B9\u53D1\u73B0</font></td><td align="left"><font style="color:#000000;">\u624B\u52A8\u914D\u7F6E</font></td><td align="left"><font style="color:#000000;">\u81EA\u52A8\u53D1\u73B0 + \u56DE\u9000\u673A\u5236</font></td></tr><tr><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">PKCE\u652F\u6301</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u53EF\u9009</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F3A\u5236\u542F\u7528</font></td></tr><tr><td align="left"><font style="color:#000000;">\u4EE4\u724C\u5B58\u50A8</font></td><td align="left"><font style="color:#000000;">\u5141\u8BB8\u5185\u5B58\u7F13\u5B58</font></td><td align="left"><font style="color:#000000;">\u5FC5\u987B\u4F7F\u7528\u5B89\u5168\u5B58\u50A8</font></td></tr><tr><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u9519\u8BEF\u5904\u7406</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u57FA\u7840HTTP\u72B6\u6001\u7801</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u7EC6\u5316OAuth\u9519\u8BEF\u4EE3\u7801\uFF08\u5982invalid_scope\uFF09</font></td></tr></tbody></table>
<h3 id="152-\u4EE3\u7801\u8FC1\u79FB\u793A\u4F8B"><strong><font style="color:#000000;">1.5.2 \u4EE3\u7801\u8FC1\u79FB\u793A\u4F8B</font></strong></h3>
<p><font style="color:#000000;">\u65E7\u7248\u4EE3\u7801\u7247\u6BB5\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// OAuth 2.0\u9690\u5F0F\u6D41</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">const token = getTokenFromURLFragment();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">callMCPService(token);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// OAuth 2.0\u9690\u5F0F\u6D41\x7Fconst token = getTokenFromURLFragment();\x7FcallMCPService(token);"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u65B0\u7248\u5B89\u5168\u5B9E\u73B0\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// OAuth 2.1 PKCE\u6D41</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">const { verifier, challenge } = generatePKCE();</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">startAuthFlow(challenge);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u56DE\u8C03\u5904\u7406</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">function handleCallback(code) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">fetchToken(code, verifier).then(token => {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">secureStorage.save('mcp_token', token);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">callMCPService(token);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">});</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// OAuth 2.1 PKCE\u6D41\x7Fconst { verifier, challenge } = generatePKCE();\x7FstartAuthFlow(challenge);\x7F\x7F// \u56DE\u8C03\u5904\u7406\x7Ffunction handleCallback(code) {\x7F    fetchToken(code, verifier).then(token => {\x7F        secureStorage.save(&#x27;mcp_token&#x27;, token);\x7F        callMCPService(token);\x7F    });\x7F}"><div></div></button></div></figure></div>
<h1 id="2-streamable-http\u7EDF\u4E00\u901A\u4FE1\u534F\u8BAE\u7684\u9769\u547D\u6027\u5347\u7EA7"><strong><font style="color:#000000;">2. Streamable HTTP\uFF1A\u7EDF\u4E00\u901A\u4FE1\u534F\u8BAE\u7684\u9769\u547D\u6027\u5347\u7EA7</font></strong></h1>
<h3 id="21-\u4ECE\u53CC\u7AEF\u70B9\u5230\u5355\u7AEF\u70B9\u7684\u8FDB\u5316\u4E4B\u8DEF"><font style="color:#000000;">2.1. \u4ECE\u53CC\u7AEF\u70B9\u5230\u5355\u7AEF\u70B9\u7684\u8FDB\u5316\u4E4B\u8DEF</font></h3>
<h3 id="211-\u65E7\u7248\u67B6\u6784\u7684\u75DB\u70B9"><strong><font style="color:#000000;">2.1.1 \u65E7\u7248\u67B6\u6784\u7684\u75DB\u70B9</font></strong></h3>
<p><font style="color:#000000;">2024-11-05\u7248\u672C\u91C7\u7528\u7684HTTP+SSE\u53CC\u901A\u9053\u65B9\u6848\u5B58\u5728\u4E09\u5927\u7ED3\u6784\u6027\u7F3A\u9677\uFF1A</font></p>

























<table><thead><tr><th align="left"><strong><font style="color:#000000;">\u95EE\u9898\u7C7B\u578B</font></strong></th><th align="left"><strong><font style="color:#000000;">\u5177\u4F53\u8868\u73B0</font></strong></th><th align="left"><strong><font style="color:#000000;">\u6280\u672F\u540E\u679C</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:#000000;">\u8FDE\u63A5\u7BA1\u7406\u590D\u6742</font></td><td align="left"><font style="color:#000000;">\u9700\u7EF4\u62A4POST\u8BF7\u6C42\u7AEF\u4E0ESSE\u4E8B\u4EF6\u6D41\u53CC\u901A\u9053</font></td><td align="left"><font style="color:#000000;">\u5BA2\u6237\u7AEF\u9700\u5B9E\u73B0\u53CC\u91CD\u8FDE\u63A5\u4FDD\u6D3B\u673A\u5236</font></td></tr><tr><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u65AD\u7EBF\u6062\u590D\u56F0\u96BE</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">SSE\u6D41\u4E2D\u65AD\u540E\u9700\u91CD\u65B0\u5EFA\u7ACB\u5B8C\u6574\u4F1A\u8BDD</font></td><td align="left"><font style="color:#000000;background-color:rgb(248, 250, 252);">\u957F\u4EFB\u52A1\u573A\u666F\u53EF\u80FD\u4E22\u5931\u4E0A\u4E0B\u6587\u6570\u636E</font></td></tr><tr><td align="left"><font style="color:#000000;">\u534F\u8BAE\u5197\u4F59</font></td><td align="left"><font style="color:#000000;">\u7B80\u5355\u8BF7\u6C42\u88AB\u8FEB\u4F7F\u7528\u6D41\u5F0F\u4F20\u8F93</font></td><td align="left"><font style="color:#000000;">\u989D\u591630%\u7684\u7F51\u7EDC\u8D44\u6E90\u6D88\u8017\uFF08\u57FA\u4E8EMCP\u5DE5\u4F5C\u7EC4\u57FA\u51C6\u6D4B\u8BD5\uFF09</font></td></tr></tbody></table>
<p><font style="color:#000000;">\u5178\u578B\u6848\u4F8B\uFF1A\u5F53AI\u52A9\u624B\u540C\u65F6\u6267\u884C\u201D\u8BED\u97F3\u8F6C\u6587\u5B57+\u5B9E\u65F6\u7FFB\u8BD1\u201D\u65F6\uFF0C\u65E7\u65B9\u6848\u9700\u8981\u5EFA\u7ACB4\u4E2A\u72EC\u7ACB\u8FDE\u63A5\uFF082\u5DE5\u5177\xD72\u534F\u8BAE\uFF09\uFF0C\u5BFC\u81F4\u79FB\u52A8\u7AEF\u5E73\u5747\u5EF6\u8FDF\u589E\u52A0400ms\u3002</font></p>
<h3 id="212-streamable-http\u6838\u5FC3\u6280\u672F\u89E3\u6790"><strong><font style="color:#000000;">2.1.2 Streamable HTTP\u6838\u5FC3\u6280\u672F\u89E3\u6790</font></strong></h3>
<p><font style="color:#000000;">\u65B0\u534F\u8BAE\u901A\u8FC7\u4E09\u5927\u521B\u65B0\u5B9E\u73B0\u901A\u4FE1\u8303\u5F0F\u8F6C\u6362\uFF1A</font></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1743991601098-28985854-b478-4e4b-b5f3-904a6ada170d.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="\u5173\u952E\u6280\u672F\u7279\u5F81"><strong><font style="color:#000000;">\u5173\u952E\u6280\u672F\u7279\u5F81</font></strong></h4>
<ol>
<li><font style="color:#000000;">\u667A\u80FD\u534F\u8BAE\u534F\u5546</font>
<ul>
<li><font style="color:#000000;">\u5BA2\u6237\u7AEF\u901A\u8FC7</font><font style="color:#000000;background-color:#f7f7f7;">Accept</font><font style="color:#000000;">\u5934\u58F0\u660E\u80FD\u529B\uFF1A</font></li>
<li><font style="color:#000000;">\u670D\u52A1\u7AEF\u52A8\u6001\u9009\u62E9\u4F20\u8F93\u6A21\u5F0F\uFF08\u5B9E\u9A8C\u6570\u636E\u663E\u793A\u534F\u5546\u8017\u65F6&#x3C;5ms\uFF09</font></li>
</ul>
</li>
<li><font style="color:#000000;">\u53CC\u5411\u901A\u4FE1\u96A7\u9053</font>
<ul>
<li><font style="color:#000000;">\u5728SSE\u6D41\u5F00\u542F\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u53EF\u901A\u8FC7\u9644\u52A0HTTP POST\u53D1\u9001\u65B0\u8BF7\u6C42</font></li>
<li><font style="color:#000000;">\u670D\u52A1\u7AEF\u901A\u8FC7</font><font style="color:#000000;background-color:#f7f7f7;">Mcp-Request-Id</font><font style="color:#000000;">\u5934\u90E8\u5B9E\u73B0\u591A\u8DEF\u590D\u7528</font></li>
</ul>
</li>
<li><font style="color:#000000;">\u65AD\u70B9\u7EED\u4F20\u673A\u5236</font>
<ul>
<li><font style="color:#000000;">\u91CD\u8FDE\u65F6\u643A\u5E26</font><font style="color:#000000;background-color:#f7f7f7;">Last-Event-ID</font><font style="color:#000000;">\u5934\u90E8\uFF1A</font></li>
<li><font style="color:#000000;">\u670D\u52A1\u7AEF\u53EF\u9009\u62E9\uFF1A</font>
<ul>
<li><font style="color:#000000;">\u4ECE\u6307\u5B9AID\u91CD\u653E\u4E8B\u4EF6\uFF08\u9700\u5B9E\u73B0\u4E8B\u4EF6\u65E5\u5FD7\uFF09</font></li>
<li><font style="color:#000000;">\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0\uFF08\u63A8\u8350\u7528\u4E8E\u5B9E\u65F6\u76D1\u63A7\u573A\u666F\uFF09</font></li>
</ul>
</li>
</ul>
</li>
</ol>
<h3 id="213-\u6027\u80FD\u63D0\u5347\u4E0E\u7A33\u5B9A\u6027\u4FDD\u969C"><strong><font style="color:#000000;">2.1.3 \u6027\u80FD\u63D0\u5347\u4E0E\u7A33\u5B9A\u6027\u4FDD\u969C</font></strong></h3>
<h4 id="\u7F51\u7EDC\u6548\u7387\u5BF9\u6BD4\u6D4B\u8BD5"><font style="color:#000000;">\u7F51\u7EDC\u6548\u7387\u5BF9\u6BD4\u6D4B\u8BD5</font></h4>
<p><font style="color:#000000;">\u57FA\u4E8EMCP\u5B98\u65B9\u6D4B\u8BD5\u5E73\u53F0\u7684\u6570\u636E\uFF1A</font></p>





























<table><thead><tr><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u6307\u6807</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u65E7\u534F\u8BAE(HTTP+SSE)</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">Streamable HTTP</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u63D0\u5347\u5E45\u5EA6</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:rgb(0, 0, 0);">\u8FDE\u63A5\u5EFA\u7ACB\u8017\u65F6</font></td><td align="left"><font style="color:rgb(0, 0, 0);">320ms \xB150ms</font></td><td align="left"><font style="color:rgb(0, 0, 0);">180ms \xB120ms</font></td><td align="left"><font style="color:rgb(0, 0, 0);">43.75%</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6570\u636E\u4F20\u8F93\u5197\u4F59\u5EA6</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">18%</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">5%</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">72.2%</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);">\u65AD\u7EBF\u6062\u590D\u6210\u529F\u7387</font></td><td align="left"><font style="color:rgb(0, 0, 0);">68%</font></td><td align="left"><font style="color:rgb(0, 0, 0);">93%</font></td><td align="left"><font style="color:rgb(0, 0, 0);">36.8%</font></td></tr></tbody></table>
<h1 id="3-json-rpc\u6279\u5904\u7406\u6548\u7387\u9769\u547D\u7684\u534F\u8BAE\u7EA7\u652F\u6301"><strong><font style="color:#000000;">3. JSON-RPC\u6279\u5904\u7406\uFF1A\u6548\u7387\u9769\u547D\u7684\u534F\u8BAE\u7EA7\u652F\u6301</font></strong></h1>
<h2 id="31-\u6279\u5904\u7406\u673A\u5236\u7684\u5B9E\u73B0\u539F\u7406"><strong><font style="color:#000000;">3.1 \u6279\u5904\u7406\u673A\u5236\u7684\u5B9E\u73B0\u539F\u7406</font></strong></h2>
<h3 id="311-\u534F\u8BAE\u5C42\u5F3A\u5236\u8981\u6C42"><strong><font style="color:#000000;">3.1.1 \u534F\u8BAE\u5C42\u5F3A\u5236\u8981\u6C42</font></strong></h3>
<p><font style="color:#000000;">\u65B0\u7248\u89C4\u8303\u7B2C4.2\u6761\u660E\u786E\u89C4\u5B9A\uFF1A</font></p>
<p><font style="color:rgb(139, 139, 139);">\u6240\u6709MCP\u5B9E\u73B0\u5FC5\u987B\u652F\u6301JSON-RPC 2.0\u6279\u5904\u7406\u89C4\u8303\u3002\u5BF9\u4E8E\u5305\u542B\u901A\u77E5\uFF08notification\uFF09\u7684\u6279\u5904\u7406\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u5E94\u5728\u5B8C\u6210\u5904\u7406\u540E\u8FD4\u56DEHTTP 202 Accepted\u72B6\u6001\u7801\u3002</font></p>
<p><font style="color:#000000;">\u5408\u6CD5\u8BF7\u6C42\u793A\u4F8B\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">json[</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">{"jsonrpc":"2.0","id":1,"method":"text_analyze","params":{"text":"Hello"}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">{"jsonrpc":"2.0","id":2,"method":"image_tag","params":{"url":"img.jpg"}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">{"jsonrpc":"2.0","method":"log_event"}  // \u65E0ID\u7684\u901A\u77E5\u7C7B\u578B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="json[\x7F    {&#x22;jsonrpc&#x22;:&#x22;2.0&#x22;,&#x22;id&#x22;:1,&#x22;method&#x22;:&#x22;text_analyze&#x22;,&#x22;params&#x22;:{&#x22;text&#x22;:&#x22;Hello&#x22;}},\x7F    {&#x22;jsonrpc&#x22;:&#x22;2.0&#x22;,&#x22;id&#x22;:2,&#x22;method&#x22;:&#x22;image_tag&#x22;,&#x22;params&#x22;:{&#x22;url&#x22;:&#x22;img.jpg&#x22;}},\x7F    {&#x22;jsonrpc&#x22;:&#x22;2.0&#x22;,&#x22;method&#x22;:&#x22;log_event&#x22;}  // \u65E0ID\u7684\u901A\u77E5\u7C7B\u578B\x7F]"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u54CD\u5E94\u5904\u7406\u89C4\u5219\uFF1A</font></p>
<ul>
<li><font style="color:#000000;">\u6210\u529F\u6279\u5904\u7406\u8FD4\u56DEHTTP 200 + \u54CD\u5E94\u6570\u7EC4</font></li>
<li><font style="color:#000000;">\u539F\u5B50\u6027\u4FDD\u8BC1\uFF1A\u652F\u6301</font><font style="color:#000000;background-color:#f7f7f7;">atomic</font><font style="color:#000000;">\u6807\u8BB0\u5B9E\u73B0\u5168\u6210\u529F\u6216\u5168\u56DE\u6EDA</font></li>
</ul>
<h2 id="32-\u6027\u80FD\u4F18\u5316\u6848\u4F8B\u5206\u6790"><strong><font style="color:#000000;">3.2 \u6027\u80FD\u4F18\u5316\u6848\u4F8B\u5206\u6790</font></strong></h2>
<h3 id="321-\u7F51\u7EDC\u5F00\u9500\u5BF9\u6BD4"><strong><font style="color:#000000;">3.2.1 \u7F51\u7EDC\u5F00\u9500\u5BF9\u6BD4</font></strong></h3>
<p><font style="color:#000000;">\u5047\u8BBE\u5904\u7406100\u4E2A\u72EC\u7ACB\u8BF7\u6C42\uFF1A</font></p>





























<table><thead><tr><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u6307\u6807</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u5355\u8BF7\u6C42\u6A21\u5F0F</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u6279\u5904\u7406\u6A21\u5F0F</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u4F18\u5316\u6BD4\u4F8B</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:rgb(0, 0, 0);">TCP\u63E1\u624B\u6B21\u6570</font></td><td align="left"><font style="color:rgb(0, 0, 0);">100</font></td><td align="left"><font style="color:rgb(0, 0, 0);">1</font></td><td align="left"><font style="color:rgb(0, 0, 0);">99%</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u603B\u5934\u90E8\u5927\u5C0F</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">~150KB</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">~2KB</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">98.7%</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);">\u603B\u8017\u65F6\uFF083G\u7F51\u7EDC\uFF09</font></td><td align="left"><font style="color:rgb(0, 0, 0);">12.3s</font></td><td align="left"><font style="color:rgb(0, 0, 0);">1.8s</font></td><td align="left"><font style="color:rgb(0, 0, 0);">85.4%</font></td></tr></tbody></table>
<h3 id="322-\u670D\u52A1\u7AEF\u5E76\u884C\u5904\u7406"><strong><font style="color:#000000;">3.2.2 \u670D\u52A1\u7AEF\u5E76\u884C\u5904\u7406</font></strong></h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Go\u8BED\u8A00\u5B9E\u73B0\u6279\u5904\u7406\u5E76\u884C\u6267\u884C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func HandleBatch(ctx context.Context, batch []RPCRequest) []RPCResponse {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">var wg sync.WaitGroup</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">resChan := make(chan RPCResponse, len(batch))</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">for _, req := range batch {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">wg.Add(1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">go func(r RPCRequest) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">defer wg.Done()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">result := processSingle(r)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">resChan &#x3C;- result</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}(req)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wg.Wait()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">close(resChan)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">var responses []RPCResponse</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">for res := range resChan {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">responses = append(responses, res)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return responses</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// Go\u8BED\u8A00\u5B9E\u73B0\u6279\u5904\u7406\u5E76\u884C\u6267\u884C\x7Ffunc HandleBatch(ctx context.Context, batch []RPCRequest) []RPCResponse {\x7F    var wg sync.WaitGroup\x7F    resChan := make(chan RPCResponse, len(batch))\x7F\x7F    for _, req := range batch {\x7F        wg.Add(1)\x7F        go func(r RPCRequest) {\x7F            defer wg.Done()\x7F            result := processSingle(r)\x7F            resChan <- result\x7F        }(req)\x7F    }\x7F\x7F    wg.Wait()\x7F    close(resChan)\x7F\x7F    var responses []RPCResponse\x7F    for res := range resChan {\x7F        responses = append(responses, res)\x7F    }\x7F    return responses\x7F}"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u6CE8\u610F\u4E8B\u9879\uFF1A</font></p>
<ul>
<li><font style="color:#000000;">\u63A7\u5236\u5E76\u53D1\u7C92\u5EA6\uFF08\u5EFA\u8BAE\u6BCF\u4E2A\u6279\u5904\u7406\u4E0D\u8D85\u8FC750\u4E2A\u8BF7\u6C42\uFF09</font></li>
<li><font style="color:#000000;">\u5B9E\u73B0\u8BF7\u6C42\u4F18\u5148\u7EA7\u6807\u8BB0\uFF08priority\u5B57\u6BB5\uFF09</font></li>
<li><font style="color:#000000;">\u652F\u6301\u8D85\u65F6\u7194\u65AD\u673A\u5236</font></li>
</ul>
<h1 id="4-\u5DE5\u5177\u5143\u6570\u636E\u5B89\u5168\u4E0E\u4F53\u9A8C\u7684\u53CC\u91CD\u8FDB\u5316"><strong><font style="color:#000000;">4. \u5DE5\u5177\u5143\u6570\u636E\uFF1A\u5B89\u5168\u4E0E\u4F53\u9A8C\u7684\u53CC\u91CD\u8FDB\u5316</font></strong></h1>
<h2 id="41-tool-annotations\u67B6\u6784\u89E3\u6790"><strong><font style="color:#000000;">4.1 Tool Annotations\u67B6\u6784\u89E3\u6790</font></strong></h2>
<h3 id="411-\u5143\u6570\u636E\u5206\u7C7B\u4F53\u7CFB"><strong><font style="color:#000000;">4.1.1 \u5143\u6570\u636E\u5206\u7C7B\u4F53\u7CFB</font></strong></h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">tools:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: database_backup</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8"># \u6807\u51C6\u884C\u4E3A\u63D0\u793A (\u9075\u5FAA ToolAnnotations \u63A5\u53E3\u5B9A\u4E49)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">title: "Database Backup"                 # \u8BED\u4E49\u5316\u6807\u9898</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">readOnlyHint: false                      # \u975E\u53EA\u8BFB\u64CD\u4F5C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">destructiveHint: false                   # \u975E\u7834\u574F\u6027\u64CD\u4F5C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">idempotentHint: true                     # \u5E42\u7B49\u64CD\u4F5C\uFF08\u91CD\u590D\u6267\u884C\u65E0\u526F\u4F5C\u7528\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">openWorldHint: false                     # \u4F5C\u7528\u57DF\u5C01\u95ED\uFF08\u4EC5\u9650\u672C\u5730\u6570\u636E\u5E93\uFF09</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tools:\x7F  - name: database_backup\x7F    annotations:\x7F      # \u6807\u51C6\u884C\u4E3A\u63D0\u793A (\u9075\u5FAA ToolAnnotations \u63A5\u53E3\u5B9A\u4E49)\x7F      title: &#x22;Database Backup&#x22;                 # \u8BED\u4E49\u5316\u6807\u9898\x7F      readOnlyHint: false                      # \u975E\u53EA\u8BFB\u64CD\u4F5C\x7F      destructiveHint: false                   # \u975E\u7834\u574F\u6027\u64CD\u4F5C\x7F      idempotentHint: true                     # \u5E42\u7B49\u64CD\u4F5C\uFF08\u91CD\u590D\u6267\u884C\u65E0\u526F\u4F5C\u7528\uFF09\x7F      openWorldHint: false                     # \u4F5C\u7528\u57DF\u5C01\u95ED\uFF08\u4EC5\u9650\u672C\u5730\u6570\u636E\u5E93\uFF09"><div></div></button></div></figure></div>
<h3 id="412-\u52A8\u6001\u6743\u9650\u7BA1\u63A7\u6D41\u7A0B"><strong><font style="color:#000000;">4.1.2 \u52A8\u6001\u6743\u9650\u7BA1\u63A7\u6D41\u7A0B</font></strong></h3>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1743991601145-ade0fb57-c253-4231-968e-dde98c21fe04.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="42-\u5B89\u5168\u589E\u5F3A\u5B9E\u8DF5"><strong><font style="color:#000000;">4.2 \u5B89\u5168\u589E\u5F3A\u5B9E\u8DF5</font></strong></h2>
<h3 id="421-\u7834\u574F\u6027\u64CD\u4F5C\u62E6\u622A\u673A\u5236"><strong><font style="color:#000000;">4.2.1 \u7834\u574F\u6027\u64CD\u4F5C\u62E6\u622A\u673A\u5236</font></strong></h3>
<p><font style="color:#000000;">\u5F53\u68C0\u6D4B\u5230</font><font style="color:#000000;background-color:#f7f7f7;">destructiveHint: true</font><font style="color:#000000;">\u65F6\uFF1A</font></p>
<ol>
<li><font style="color:#000000;">\u524D\u7AEF\u81EA\u52A8\u63D2\u5165\u4E8C\u6B21\u786E\u8BA4</font></li>
<li><font style="color:#000000;">\u670D\u52A1\u7AEF\u8BB0\u5F55\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7</font></li>
<li><font style="color:#000000;">\u5F3A\u5236\u89E6\u53D1MFA\u591A\u56E0\u7D20\u8BA4\u8BC1\uFF08\u5982\u679C\u914D\u7F6E\uFF09</font></li>
</ol>
<p><font style="color:#000000;">\u5BA1\u8BA1\u65E5\u5FD7\u793A\u4F8B\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">json{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"action": "data_purge",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"user": "ai_agent_123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"riskLevel": "critical",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"annotations": {"destructiveHint": true},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"timestamp": "2025-03-27T08:15:30Z",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"mfaUsed": true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="json{\x7F  &#x22;action&#x22;: &#x22;data_purge&#x22;,\x7F  &#x22;user&#x22;: &#x22;ai_agent_123&#x22;,\x7F  &#x22;riskLevel&#x22;: &#x22;critical&#x22;,\x7F  &#x22;annotations&#x22;: {&#x22;destructiveHint&#x22;: true},\x7F  &#x22;timestamp&#x22;: &#x22;2025-03-27T08:15:30Z&#x22;,\x7F  &#x22;mfaUsed&#x22;: true\x7F}"><div></div></button></div></figure></div>
<h3 id="422-\u81EA\u52A8\u5316\u7B56\u7565\u751F\u6210"><strong><font style="color:#000000;">4.2.2 \u81EA\u52A8\u5316\u7B56\u7565\u751F\u6210</font></strong></h3>
<p><font style="color:#000000;">\u57FA\u4E8E\u5143\u6570\u636E\u7684\u7B56\u7565\u5F15\u64CE\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">def generate_policy(tool):</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">policy = {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"effect": "allow" if tool.requiredScopes else "deny",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"conditions": []</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if tool.annotations.get('destructiveHint'):</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">policy['conditions'].append({</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"type": "mfa",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"required": True</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return policy</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="def generate_policy(tool):\x7F    policy = {\x7F        &#x22;effect&#x22;: &#x22;allow&#x22; if tool.requiredScopes else &#x22;deny&#x22;,\x7F        &#x22;conditions&#x22;: []\x7F    }\x7F\x7F    if tool.annotations.get(&#x27;destructiveHint&#x27;):\x7F        policy[&#x27;conditions&#x27;].append({\x7F            &#x22;type&#x22;: &#x22;mfa&#x22;,\x7F            &#x22;required&#x22;: True\x7F        })\x7F\x7F    return policy"><div></div></button></div></figure></div>
<h1 id="5-\u667A\u80FD\u8FDB\u5EA6\u901A\u77E5\u4ECE\u6570\u5B57\u5230\u8BED\u4E49\u7684\u8FDB\u5316"><strong><font style="color:#000000;">5. \u667A\u80FD\u8FDB\u5EA6\u901A\u77E5\uFF1A\u4ECE\u6570\u5B57\u5230\u8BED\u4E49\u7684\u8FDB\u5316</font></strong></h1>
<h2 id="51-\u52A8\u6001\u6D88\u606F\u901A\u77E5\u673A\u5236"><strong><font style="color:#000000;">5.1 \u52A8\u6001\u6D88\u606F\u901A\u77E5\u673A\u5236</font></strong></h2>
<p><font style="color:#000000;">\u65B0\u589E</font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;">\u5B57\u6BB5\u652F\u6301\u7ED3\u6784\u5316\u72B6\u6001\u63CF\u8FF0\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"type": "ProgressNotification",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"progress": 65,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"message": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"phase": "\u6570\u636E\u6E05\u6D17",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"detail": "\u5DF2\u5904\u7406 12000/20000 \u6761\u8BB0\u5F55",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"next_step": "\u5373\u5C06\u5F00\u59CB\u7279\u5F81\u63D0\u53D6"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;type&#x22;: &#x22;ProgressNotification&#x22;,\x7F  &#x22;progress&#x22;: 65,\x7F  &#x22;message&#x22;: {\x7F    &#x22;phase&#x22;: &#x22;\u6570\u636E\u6E05\u6D17&#x22;,\x7F    &#x22;detail&#x22;: &#x22;\u5DF2\u5904\u7406 12000/20000 \u6761\u8BB0\u5F55&#x22;,\x7F    &#x22;next_step&#x22;: &#x22;\u5373\u5C06\u5F00\u59CB\u7279\u5F81\u63D0\u53D6&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u5E94\u7528\u4EF7\u503C\uFF1A</font></p>
<ul>
<li><font style="color:#000000;">\u5F00\u53D1\u8C03\u8BD5\uFF1A\u7CBE\u51C6\u5B9A\u4F4D\u4EFB\u52A1\u5361\u70B9\uFF08\u5982\u201D\u5361\u5728\u56FE\u50CF\u9884\u5904\u7406\u9636\u6BB5\u201D\uFF09</font></li>
<li><font style="color:#000000;">\u7528\u6237\u754C\u9762\uFF1A\u652F\u6301\u591A\u8BED\u8A00\u52A8\u6001\u63D0\u793A\uFF08\u201C\u5269\u4F59\u65F6\u95F4\uFF1A\u7EA62\u5206\u949F\u201D\uFF09</font></li>
<li><font style="color:#000000;">\u5BA1\u8BA1\u8FFD\u6EAF\uFF1A\u5B8C\u6574\u8BB0\u5F55\u4EFB\u52A1\u751F\u547D\u5468\u671F\u72B6\u6001</font></li>
</ul>
<h1 id="6\u591A\u6A21\u6001\u6269\u5C55\u97F3\u9891\u6D41\u652F\u6301\u843D\u5730"><strong><font style="color:#000000;">6.\u591A\u6A21\u6001\u6269\u5C55\uFF1A\u97F3\u9891\u6D41\u652F\u6301\u843D\u5730</font></strong></h1>
<h2 id="61-\u97F3\u9891\u534F\u8BAE\u5B9E\u73B0\u65B9\u6848"><strong><font style="color:#000000;">6.1 \u97F3\u9891\u534F\u8BAE\u5B9E\u73B0\u65B9\u6848</font></strong></h2>
<p><font style="color:#000000;">\u65B0\u589E</font><font style="color:#000000;background-color:#f7f7f7;">audio/*</font><font style="color:#000000;">\u5185\u5BB9\u7C7B\u578B\u652F\u6301\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">httpPOST /voice-process</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type: audio/webm</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Transfer-Encoding: chunked</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;\u97F3\u9891\u4E8C\u8FDB\u5236\u6D41></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="httpPOST /voice-process\x7FContent-Type: audio/webm\x7FTransfer-Encoding: chunked\x7F\x7F<\u97F3\u9891\u4E8C\u8FDB\u5236\u6D41>"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u5173\u952E\u6280\u672F\u7279\u6027\uFF1A</font></p>





















<table><thead><tr><th align="left"><strong><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u529F\u80FD</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u53C2\u6570</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:rgb(0, 0, 0);">\u7F16\u7801\u683C\u5F0F</font></td><td align="left"><font style="color:rgb(0, 0, 0);">WebM/MP3/WAV</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6D41\u5F0F\u4F20\u8F93</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u652F\u6301\u5206\u7247\u4E0A\u4F20\u4E0E\u5B9E\u65F6\u8F6C\u5F55</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(239, 246, 255);">\u5143\u6570\u636E\u7ED1\u5B9A</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(239, 246, 255);">\u901A\u8FC7X-Audio-Metadata\u5934\u4F20\u9012\u91C7\u6837\u7387\u7B49\u53C2\u6570</font></td></tr></tbody></table>
<p><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u573A\u666F\u6848\u4F8B\uFF1A\u667A\u80FD\u5BA2\u670D\u7CFB\u7EDF\u53EF\u540C\u65F6\u63A5\u6536\u7528\u6237\u8BED\u97F3\u6D41\u5E76\u5B9E\u65F6\u8FD4\u56DE\u6587\u5B57\u54CD\u5E94</font></p>
<h1 id="7-\u53C2\u6570\u8865\u5168\u5F00\u53D1\u8005\u4F53\u9A8C\u5347\u7EA7"><strong><font style="color:#000000;">7. \u53C2\u6570\u8865\u5168\uFF1A\u5F00\u53D1\u8005\u4F53\u9A8C\u5347\u7EA7</font></strong></h1>
<h2 id="71-\u667A\u80FD\u8865\u5168\u5DE5\u4F5C\u6D41\u7A0B"><strong><font style="color:#000000;">7.1. \u667A\u80FD\u8865\u5168\u5DE5\u4F5C\u6D41\u7A0B</font></strong></h2>
<ol>
<li><font style="color:#000000;">\u5BA2\u6237\u7AEF\u53D1\u73B0\u670D\u52A1\u7AEF\u58F0\u660E</font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;">\u80FD\u529B</font></li>
<li><font style="color:#000000;">\u7528\u6237\u8F93\u5165\u65F6\u89E6\u53D1\u8865\u5168\u8BF7\u6C42\uFF1A</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">GET /completions?prefix=dat</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u54CD\u5E94\uFF1A["date_format", "data_source", "dataset"]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="GET /completions?prefix=dat\x7F\u54CD\u5E94\uFF1A[&#x22;date_format&#x22;, &#x22;data_source&#x22;, &#x22;dataset&#x22;]"><div></div></button></div></figure></div>
<ol>
<li><font style="color:#000000;">\u52A8\u6001\u751F\u6210\u53C2\u6570\u5EFA\u8BAE\u5217\u8868 \u8BBE\u8BA1\u4F18\u52BF\uFF1A</font></li>
</ol>
<ul>
<li><font style="color:#000000;">\u964D\u4F4E90%\u7684\u53C2\u6570\u8F93\u5165\u9519\u8BEF\u7387\uFF08MCP\u5DE5\u4F5C\u7EC4\u7EDF\u8BA1\uFF09</font></li>
<li><font style="color:#000000;">\u652F\u6301\u57FA\u4E8E\u4E0A\u4E0B\u6587\u7684\u667A\u80FD\u63A8\u8350\uFF08\u5982\u4F18\u5148\u63A8\u8350\u5F53\u524D\u5DE5\u5177\u5E38\u7528\u53C2\u6570\uFF09</font></li>
</ul>
<h1 id="8-\u4F1A\u8BDD\u7BA1\u7406\u957F\u65F6\u4EFB\u52A1\u53EF\u9760\u6027\u4FDD\u969C"><strong><font style="color:#000000;">8. \u4F1A\u8BDD\u7BA1\u7406\uFF1A\u957F\u65F6\u4EFB\u52A1\u53EF\u9760\u6027\u4FDD\u969C</font></strong></h1>
<h2 id="81-\u4F1A\u8BDD\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406"><strong><font style="color:#000000;">8.1 \u4F1A\u8BDD\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406</font></strong></h2>
<p><font style="color:#000000;">\u6838\u5FC3\u6807\u8BC6\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Mcp-Session-Id: sess_XYZ123 (UUIDv7\u683C\u5F0F)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Mcp-Session-Id: sess_XYZ123 (UUIDv7\u683C\u5F0F)"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u65AD\u7EBF\u6062\u590D\u6D41\u7A0B\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. \u5BA2\u6237\u7AEF\u7F13\u5B58\u6700\u540E\u63A5\u6536\u7684Event-ID\uFF08\u5982159\uFF09</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. \u91CD\u8FDE\u65F6\u643A\u5E26\uFF1A</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">   </span></span><span style="--0:#e1e4e8">Last-Event-ID: 159</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">   </span></span><span style="--0:#e1e4e8">Mcp-Session-Id: sess_XYZ123</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. \u670D\u52A1\u7AEF\u4ECE\u65AD\u70B9\u7EED\u4F20\u6216\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="1. \u5BA2\u6237\u7AEF\u7F13\u5B58\u6700\u540E\u63A5\u6536\u7684Event-ID\uFF08\u5982159\uFF09\x7F2. \u91CD\u8FDE\u65F6\u643A\u5E26\uFF1A\x7F   Last-Event-ID: 159\x7F   Mcp-Session-Id: sess_XYZ123\x7F3. \u670D\u52A1\u7AEF\u4ECE\u65AD\u70B9\u7EED\u4F20\u6216\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0"><div></div></button></div></figure></div>
<h1 id="9-\u603B\u7ED3---\u6784\u5EFA\u4E0B\u4E00\u4EE3ai\u534F\u4F5C\u8303\u5F0F"><strong><font style="color:#000000;">9. \u603B\u7ED3 - </font></strong><font style="color:#000000;">\u6784\u5EFA\u4E0B\u4E00\u4EE3AI\u534F\u4F5C\u8303\u5F0F</font></h1>
<h2 id="91-\u5BF9\u5BA2\u6237\u7AEF\u7684\u5F71\u54CD"><strong><font style="color:#000000;">9.1 \u5BF9\u5BA2\u6237\u7AEF\u7684\u5F71\u54CD</font></strong></h2>
<p><font style="color:#000000;">\u6280\u672F\u9002\u914D\u6311\u6218</font></p>
<ul>
<li><font style="color:#000000;">\u5F3A\u5236\u5B9E\u73B0OAuth 2.1\u4E0EPKCE\u6D41\u7A0B\uFF0C\u79FB\u52A8\u7AEF\u9700\u96C6\u6210\u7CFB\u7EDF\u7EA7\u5B89\u5168\u5B58\u50A8\uFF08\u5982iOS Secure Enclave\uFF09</font></li>
<li><font style="color:#000000;">\u524D\u7AEF\u6846\u67B6\u9700\u6DF1\u5EA6\u89E3\u6790Tool Annotations\uFF0C\u5B9E\u73B0\u52A8\u6001UI\u751F\u6210\uFF08\u5982\u81EA\u52A8\u6E32\u67D3\u9AD8\u5371\u64CD\u4F5C\u8B66\u793A\u56FE\u6807\uFF09</font></li>
<li><font style="color:#000000;">\u97F3\u9891\u6D41\u5904\u7406\u9700\u652F\u6301Web Audio API\u4E0E\u5206\u7247\u4F20\u8F93\u903B\u8F91</font></li>
</ul>
<p><font style="color:#000000;">\u4F53\u9A8C\u5347\u7EA7\u673A\u9047</font></p>
<ul>
<li><font style="color:#000000;">\u53C2\u6570\u8865\u5168\u529F\u80FD\u964D\u4F4E\u5F00\u53D1\u8005\u5DE5\u5177\u5B66\u4E60\u66F2\u7EBF\uFF08\u5B9E\u6D4B\u63D0\u534738%\u7684API\u8C03\u7528\u6548\u7387\uFF09</font></li>
<li><font style="color:#000000;">\u667A\u80FD\u8FDB\u5EA6\u6D88\u606F\u652F\u6301\u751F\u6210\u5BCC\u5A92\u4F53\u72B6\u6001\u5361\u7247\uFF08\u5982\u56FE\u8868+\u6587\u5B57\u6DF7\u5408\u5448\u73B0\uFF09</font></li>
</ul>
<h2 id="92-\u5BF9\u670D\u52A1\u7AEF\u7684\u5F71\u54CD"><strong><font style="color:#000000;">9.2 \u5BF9\u670D\u52A1\u7AEF\u7684\u5F71\u54CD</font></strong></h2>
<p><font style="color:#000000;">\u67B6\u6784\u6539\u9020\u9700\u6C42</font></p>

























<table><thead><tr><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u6539\u9020\u9879</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u5B9E\u65BD\u6210\u672C</font></strong></th><th align="left"><strong><font style="color:rgb(0, 0, 0);">\u6536\u76CA\u7B49\u7EA7</font></strong></th></tr></thead><tbody><tr><td align="left"><font style="color:rgb(0, 0, 0);">\u4F1A\u8BDD\u72B6\u6001\u7BA1\u7406</font></td><td align="left"><font style="color:rgb(0, 0, 0);">\u9AD8</font></td><td align="left"><font style="color:rgb(0, 0, 0);">\u2605\u2605\u2605\u2605\u2606</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6D41\u5F0FHTTP\u7F51\u5173(\u5982Higress)</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u4F4E</font></td><td align="left"><font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u2605\u2605\u2605\u2605\u2605</font></td></tr><tr><td align="left"><font style="color:rgb(0, 0, 0);">\u6279\u5904\u7406\u539F\u5B50\u4E8B\u52A1</font></td><td align="left"><font style="color:rgb(0, 0, 0);">\u4E2D</font></td><td align="left"><font style="color:rgb(0, 0, 0);">\u2605\u2605\u2605\u2606\u2606</font></td></tr></tbody></table>
<h2 id="93-\u5BF9\u5F00\u53D1\u8005\u5DE5\u5177\u94FE\u7684\u91CD\u6784"><strong><font style="color:#000000;">9.3 \u5BF9\u5F00\u53D1\u8005\u5DE5\u5177\u94FE\u7684\u91CD\u6784</font></strong></h2>
<p><font style="color:#000000;">SDK\u5173\u952E\u5347\u7EA7\u70B9\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># \u65B0\u4E00\u4EE3SDK\u4F2A\u4EE3\u7801\u793A\u4F8B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">class MCPClient:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">def __init__(self):</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">self.session = ResilientSession()  # \u81EA\u52A8\u91CD\u8FDE+\u65AD\u70B9\u7EED\u4F20</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">self.annotator = ToolAnnotationParser()  # \u5143\u6570\u636E\u89E3\u6790\u5F15\u64CE</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">self.auditor = SecurityAuditHook()  # \u5B89\u5168\u5BA1\u8BA1\u94A9\u5B50</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">def call_tool(self, tool_name):</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">if self.annotator.risk_level(tool_name) == 'critical':</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">self.auditor.log_operation(tool_name)  # \u81EA\u52A8\u89E6\u53D1\u5BA1\u8BA1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u65B0\u4E00\u4EE3SDK\u4F2A\u4EE3\u7801\u793A\u4F8B\x7Fclass MCPClient:\x7F    def __init__(self):\x7F        self.session = ResilientSession()  # \u81EA\u52A8\u91CD\u8FDE+\u65AD\u70B9\u7EED\u4F20\x7F        self.annotator = ToolAnnotationParser()  # \u5143\u6570\u636E\u89E3\u6790\u5F15\u64CE\x7F        self.auditor = SecurityAuditHook()  # \u5B89\u5168\u5BA1\u8BA1\u94A9\u5B50\x7F\x7F    def call_tool(self, tool_name):\x7F        if self.annotator.risk_level(tool_name) == &#x27;critical&#x27;:\x7F            self.auditor.log_operation(tool_name)  # \u81EA\u52A8\u89E6\u53D1\u5BA1\u8BA1"><div></div></button></div></figure></div>
<p><font style="color:#000000;">\u5DE5\u5177\u94FE\u5347\u7EA7\u5E26\u6765\uFF1A</font></p>
<ul>
<li><font style="color:#000000;">\u5F00\u53D1\u8C03\u8BD5\u65F6\u95F4\u51CF\u5C1157%\uFF08IDE\u63D2\u4EF6\u96C6\u6210\u81EA\u52A8\u8865\u5168\u4E0E\u534F\u8BAE\u6821\u9A8C\uFF09</font></li>
<li><font style="color:#000000;">\u5B89\u5168\u6F0F\u6D1E\u7387\u4E0B\u964D82%\uFF08\u901A\u8FC7\u6CE8\u89E3\u9A71\u52A8\u7684\u6743\u9650\u6821\u9A8C\uFF09</font></li>
</ul>
<h2 id="94-\u5982\u4F55\u5FEB\u901F\u63A5\u5165\u65B0\u7279\u6027"><strong>9.4 \u5982\u4F55\u5FEB\u901F\u63A5\u5165\u65B0\u7279\u6027</strong></h2>
<p>Higress\u5DF2\u7387\u5148\u652F\u6301Streamable HTTP\u4F20\u8F93\u683C\u5F0F\uFF0C\u5E76\u4E14\u5BF9MCP 2025-03-26\u7248\u672C\u7684\u591A\u9879\u7279\u6027\u90FD\u4FDD\u6301\u9AD8\u4F18\u5148\u7EA7\u8DDF\u7D27\uFF0C\u5982Mcp-Session-Id\u5934\u7684\u4F1A\u8BDD\u7BA1\u7406\uFF0C\u5E76\u652F\u6301\u6279\u91CF\u8BF7\u6C42\u3001\u54CD\u5E94\u548C\u901A\u77E5\uFF0C\u4EE5\u53CA SSE \u6D41\u7684\u53EF\u6062\u590D\u6027\u7B49\u3002</p>
<p>\u8BE6\u89C1 <a href="https://higress.cn/blog/higress-gvr7dx_awbbpb_igk8hdx9xt83ptqg/?spm=36971b57.2385fb13.0.0.78b8285fzhuGKT" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300AAPI \u5373 MCP\uFF5CHigress \u53D1\u5E03 MCP Marketplace\uFF0C\u52A0\u901F\u5B58\u91CF API \u8DE8\u5165 MCP \u65F6\u4EE3\u300B</a></p>
<p>\u5546\u4E1A\u5316\u4EA7\u54C1\u4FA7\uFF0C<a href="https://www.aliyun.com/product/apigateway" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751FAPI\u7F51\u5173</a>\u4E5F\u4F1A\u5728\u7A0D\u665A\u7684\u65F6\u5019\u5BF9\u9F50\u5F00\u6E90\u4FA7Higress\u7684\u5404\u9879\u80FD\u529B\uFF0C\u63D0\u4F9B\u4F01\u4E1A\u7EA7\u7684\u5404\u9879MCP\u7279\u6027\uFF0C\u6B22\u8FCE\u54A8\u8BE2\u548C\u5173\u6CE8\u3002</p>`,n={title:"MCP \u6700\u65B0\u7248\u672C 9 \u5927\u5DEE\u5F02\u89E3\u8BFB\uFF1A\u6388\u6743\u673A\u5236\u3001\u4F20\u8F93\u534F\u8BAE\u3001\u6279\u5904\u7406\u3001\u5DE5\u5177\u5143\u6570\u636E...",description:"MCP \u6700\u65B0\u7248\u672C 9 \u5927\u5DEE\u5F02\u89E3\u8BFB\uFF1A\u6388\u6743\u673A\u5236\u3001\u4F20\u8F93\u534F\u8BAE\u3001\u6279\u5904\u7406\u3001\u5DE5\u5177\u5143\u6570\u636E...",date:"2025-05-09",category:"article",keywords:["Higress"],authors:"CH3CHO"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_mfm8mgpsfrkay78a.md",l=void 0,a=function(){return`
\u4F5C\u8005\uFF1A\u68A7\u540C

# **<font style="color:#000000;">\u66F4\u65B0</font>**
[MCP\xA0Specification](https://spec.modelcontextprotocol.io/specification/2025-03-26/)<font style="color:#000000;">\u57282025-03-26\u53D1\u5E03\u4E86\u6700\u65B0\u7684\u7248\u672C\uFF0C\u672C\u6587\u5BF9\u4E3B\u8981\u7684\u6539\u52A8\u8FDB\u884C\u8BE6\u7EC6\u4ECB\u7ECD\u548C\u89E3\u91CA</font>

<font style="color:#000000;">2025-03-26 \u7248\u672C\u4E0E 2024-11-05 \u7248\u672C\u7684\u4E3B\u8981\u66F4\u65B0\u5BF9\u6BD4\u8868\u683C\uFF1A</font>

| **<font style="color:#000000;">\u7C7B\u522B</font>** | **<font style="color:#000000;">2024-11-05 \u7248\u672C</font>** | **<font style="color:#000000;">2025-03-26 \u7248\u672C</font>** | **<font style="color:#000000;">\u66F4\u65B0\u610F\u4E49\u4E0E\u5F71\u54CD</font>** |
| :--- | :--- | :--- | :--- |
| **<font style="color:#000000;">\u6388\u6743\u673A\u5236</font>** | <font style="color:#000000;">\u57FA\u4E8E OAuth 2.0\uFF0C\u652F\u6301\u9690\u5F0F\u6388\u6743\u6D41\u548C\u57FA\u672C\u6743\u9650\u63A7\u5236</font> | **<font style="color:#000000;">\u5347\u7EA7\u81F3 OAuth 2.1</font>**<font style="color:#000000;">\uFF0C\u5E9F\u5F03\u9690\u5F0F\u6388\u6743\u6D41\uFF0C\u5F3A\u5236 PKCE \u548C HTTPS</font> | <font style="color:#000000;">\u5B89\u5168\u6027\u63D0\u5347\uFF0C\u51CF\u5C11 Token \u6CC4\u9732\u98CE\u9669\uFF0C\u9002\u5E94\u516C\u5171\u5BA2\u6237\u7AEF\uFF08\u5982\u79FB\u52A8\u7AEF\u3001\u672C\u5730\u5E94\u7528\uFF09\u573A\u666F\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F20\u8F93\u534F\u8BAE</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F7F\u7528 HTTP + SSE\uFF08\u53CC\u7AEF\u70B9\uFF09\uFF0C\u652F\u6301\u5355\u5411\u6D41\u5F0F\u901A\u4FE1</font> | **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u66FF\u6362\u4E3A Streamable HTTP</font>**<font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF08\u5355\u7AEF\u70B9\uFF09\uFF0C\u652F\u6301\u53CC\u5411\u901A\u4FE1\u4E0E\u65AD\u7EBF\u6062\u590D</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u7B80\u5316\u90E8\u7F72\u590D\u6742\u5EA6\uFF0C\u652F\u6301\u7075\u6D3B\u901A\u4FE1\u6A21\u5F0F\uFF08\u4E00\u6B21\u6027\u54CD\u5E94\u6216\u6D41\u5F0F\u63A8\u9001\uFF09\uFF0C\u4F18\u5316\u7F51\u7EDC\u7A33\u5B9A\u6027\u3002</font> |
| **<font style="color:#000000;">JSON-RPC \u6279\u5904\u7406</font>** | <font style="color:#000000;">\u672A\u5F3A\u5236\u652F\u6301\uFF0C\u90E8\u5206\u5B9E\u73B0\u53EF\u9009</font> | **<font style="color:#000000;">\u534F\u8BAE\u5C42\u9762\u5F3A\u5236\u652F\u6301\u6279\u5904\u7406</font>**<font style="color:#000000;">\uFF08Batching\uFF09\uFF0C\u8981\u6C42 MUST \u5B9E\u73B0</font> | <font style="color:#000000;">\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\uFF0C\u652F\u6301\u5E76\u884C\u4EFB\u52A1\u5904\u7406\uFF0C\u63D0\u5347\u6279\u91CF\u64CD\u4F5C\u6548\u7387\uFF08\u5982\u539F\u5B50\u4E8B\u52A1\uFF09\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u5DE5\u5177\u5143\u6570\u636E</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u4EC5\u6709 </font><font style="color:#000000;background-color:#f7f7f7;">inputSchema</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u548C </font><font style="color:#000000;background-color:#f7f7f7;">description</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u63CF\u8FF0</font> | **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u65B0\u589E Tool Annotations</font>**<font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF08\u64CD\u4F5C\u7C7B\u3001\u5C55\u793A\u7C7B\u5143\u6570\u636E\uFF09</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u663E\u5F0F\u6807\u8BB0\u5DE5\u5177\u98CE\u9669\uFF08\u5982 </font><font style="color:#000000;background-color:#f7f7f7;">destructive</font><font style="color:#000000;background-color:rgb(248, 250, 252);">\uFF09\u3001\u652F\u6301\u81EA\u52A8\u6743\u9650\u7BA1\u63A7\u4E0E\u524D\u7AEF UI \u9002\u914D\uFF0C\u63D0\u5347\u5B89\u5168\u5408\u89C4\u6027\u3002</font> |
| **<font style="color:#000000;">\u8FDB\u5EA6\u901A\u77E5</font>** | <font style="color:#000000;">\u4EC5\u652F\u6301\u767E\u5206\u6BD4\u6216\u6570\u503C\u8FDB\u5EA6</font> | <font style="color:#000000;">\u65B0\u589E </font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;"> \u5B57\u6BB5\uFF0C\u652F\u6301\u52A8\u6001\u72B6\u6001\u63CF\u8FF0</font> | <font style="color:#000000;">\u63D0\u5347\u7528\u6237\u4EA4\u4E92\u4F53\u9A8C\uFF08\u5982\u663E\u793A\u201C\u6570\u636E\u52A0\u8F7D\u4E2D\uFF0C\u5269\u4F59 50%\u201D\uFF09\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u591A\u6A21\u6001\u652F\u6301</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u652F\u6301\u6587\u672C\u3001\u56FE\u50CF</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u65B0\u589E\u97F3\u9891\u6570\u636E\u6D41\u652F\u6301</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u6269\u5C55\u8BED\u97F3\u52A9\u624B\u3001\u5B9E\u65F6\u97F3\u9891\u5904\u7406\u7B49\u573A\u666F\u80FD\u529B\u3002</font> |
| **<font style="color:#000000;">\u53C2\u6570\u8865\u5168</font>** | <font style="color:#000000;">\u672A\u660E\u786E\u652F\u6301</font> | <font style="color:#000000;">\u65B0\u589E </font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;"> \u80FD\u529B\u58F0\u660E\uFF0C\u652F\u6301\u53C2\u6570\u81EA\u52A8\u8865\u5168\u5EFA\u8BAE</font> | <font style="color:#000000;">\u63D0\u5347\u5F00\u53D1\u8005\u6548\u7387\uFF0C\u51CF\u5C11\u624B\u52A8\u8F93\u5165\u9519\u8BEF\u3002</font> |
| **<font style="color:#000000;background-color:rgb(248, 250, 252);">\u4F1A\u8BDD\u7BA1\u7406</font>** | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u672A\u660E\u786E\u4F1A\u8BDD\u6807\u8BC6</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F15\u5165 </font><font style="color:#000000;background-color:#f7f7f7;">Mcp-Session-Id</font><font style="color:#000000;background-color:rgb(248, 250, 252);"> \u5934\u90E8\uFF0C\u652F\u6301\u65AD\u7EBF\u91CD\u8FDE\u4E0E\u72B6\u6001\u6062\u590D</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u589E\u5F3A\u957F\u65F6\u4EFB\u52A1\uFF08\u5982\u8BED\u97F3\u4EA4\u4E92\uFF09\u7684\u53EF\u9760\u6027\uFF0C\u964D\u4F4E\u7F51\u7EDC\u6CE2\u52A8\u5F71\u54CD\u3002</font> |
| **<font style="color:#000000;">\u5B89\u5168\u8981\u6C42</font>** | <font style="color:#000000;">\u4F9D\u8D56 OAuth 2.0 \u7684\u63A8\u8350\u5B9E\u8DF5</font> | **<font style="color:#000000;">\u5F3A\u5236 HTTPS</font>**<font style="color:#000000;">\u3001Token \u7ED1\u5B9A\u4E0E\u5B58\u50A8\u52A0\u5BC6\uFF0C\u652F\u6301\u77ED\u671F Token \u8F6E\u6362</font> | <font style="color:#000000;">\u51CF\u5C11\u4E2D\u95F4\u4EBA\u653B\u51FB\u98CE\u9669\uFF0C\u7F29\u5C0F Token \u6CC4\u9732\u540E\u7684\u6709\u6548\u7A97\u53E3\u3002</font> |


---

### <font style="color:#000000;">\u5173\u952E\u5DEE\u5F02\u603B\u7ED3\uFF1A</font>
1. <font style="color:#000000;">\u5B89\u5168\u6027</font>
    - <font style="color:#000000;">OAuth 2.1 \u5F3A\u5236 PKCE \u548C HTTPS\uFF0C\u6D88\u9664\u9690\u5F0F\u6D41\u98CE\u9669\uFF0C\u66F4\u9002\u5E94 AI \u5DE5\u5177\u7684\u9AD8\u6743\u9650\u573A\u666F\u3002</font>
2. <font style="color:#000000;">\u901A\u4FE1\u6548\u7387</font>
    - <font style="color:#000000;">Streamable HTTP \u5355\u7AEF\u70B9\u8BBE\u8BA1\u7B80\u5316\u67B6\u6784\uFF0CJSON-RPC \u6279\u5904\u7406\u51CF\u5C11\u7F51\u7EDC\u5F00\u9500\u3002</font>
3. <font style="color:#000000;">\u5DE5\u5177\u53EF\u63A7\u6027</font>
    - <font style="color:#000000;">Tool Annotations \u663E\u5F0F\u6807\u8BB0\u98CE\u9669\u884C\u4E3A\uFF08\u5982\u5220\u9664\u64CD\u4F5C\uFF09\uFF0C\u652F\u6301\u81EA\u52A8\u5316\u6743\u9650\u7BA1\u7406\u548C\u524D\u7AEF\u9002\u914D\u3002</font>
4. <font style="color:#000000;">\u591A\u6A21\u6001\u6269\u5C55</font>
    - <font style="color:#000000;">\u65B0\u589E\u97F3\u9891\u6D41\u652F\u6301\uFF0C\u8865\u5168\u8BED\u97F3\u4EA4\u4E92\u80FD\u529B\uFF0C\u5B8C\u5584\u591A\u6A21\u6001\u751F\u6001\u3002</font>
5. <font style="color:#000000;">\u5F00\u53D1\u53CB\u597D\u6027</font>
    - <font style="color:#000000;">\u53C2\u6570\u8865\u5168\uFF08</font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;">\uFF09\u548C\u8FDB\u5EA6\u6D88\u606F\uFF08</font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;">\uFF09\u63D0\u5347\u5F00\u53D1\u8005\u6548\u7387\u4E0E\u7528\u6237\u4F53\u9A8C\u3002</font>

---

# **<font style="color:#000000;">1. \u66F4\u5B89\u5168\u7684OAuth 2.1</font>**
## **<font style="color:#000000;">1.1 </font>**<font style="color:#000000;">\u4ECEOAuth 2.0\u52302.1\u7684\u672C\u8D28\u8DE8\u8D8A</font>
### **<font style="color:#000000;">1.1.1 \u6838\u5FC3\u5B89\u5168\u7F3A\u9677\u7684\u6839\u6CBB</font>**
<font style="color:#000000;">\u65E7\u7248OAuth 2.0\u957F\u671F\u5B58\u5728\u4E09\u5927\u81F4\u547D\u9690\u60A3\uFF1A</font>

| **<font style="color:#000000;">\u98CE\u9669\u7C7B\u578B</font>** | **<font style="color:#000000;">\u5177\u4F53\u6F0F\u6D1E</font>** | **<font style="color:#000000;">OAuth 2.1\u4FEE\u590D\u65B9\u6848</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">\u6388\u6743\u7801\u6CC4\u9732</font> | <font style="color:#000000;">\u9690\u5F0F\u6388\u6743\u6D41\u901A\u8FC7URL\u7247\u6BB5\u4F20\u9012Token</font> | <font style="color:#000000;">\u5B8C\u5168\u5E9F\u5F03\u9690\u5F0F\u6388\u6743\uFF08Implicit Flow\uFF09</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">\u4E2D\u95F4\u4EBA\u653B\u51FB</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u516C\u5171\u5BA2\u6237\u7AEF\u672A\u52A0\u5BC6\u4F20\u8F93\u6388\u6743\u7801</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F3A\u5236\u542F\u7528PKCE\uFF08Proof Key for Code Exchange\uFF09</font> |
| <font style="color:#000000;">\u91CD\u5B9A\u5411\u52AB\u6301</font> | <font style="color:#000000;">\u5F00\u653E\u91CD\u5B9A\u5411\u6F0F\u6D1E\u5BFC\u81F4\u9493\u9C7C\u653B\u51FB</font> | <font style="color:#000000;">\u4E25\u683C\u9A8C\u8BC1\u91CD\u5B9A\u5411URI\u767D\u540D\u5355</font> |


<font style="color:#000000;">\u5728AI\u5DE5\u5177\u573A\u666F\u4E2D\uFF0C\u8FD9\u4E9B\u6F0F\u6D1E\u53EF\u80FD\u9020\u6210\u707E\u96BE\u6027\u540E\u679C\u3002\u4F8B\u5982\u901A\u8FC7\u622A\u83B7\u672A\u52A0\u5BC6\u7684\u6388\u6743\u7801\uFF0C\u653B\u51FB\u8005\u53EF\u4F2A\u9020"\u6570\u636E\u5E93\u6E05\u7406\u5DE5\u5177"\u7684\u5408\u6CD5\u8C03\u7528\u8BF7\u6C42\u3002</font>

### **<font style="color:#000000;">1.1.2 PKCE\u673A\u5236\u7684\u5168\u9762\u5F3A\u5236\u5316</font>**
<font style="color:#000000;">PKCE\u901A\u8FC7\u5BC6\u7801\u5B66\u6311\u6218\u54CD\u5E94\u673A\u5236\uFF0C\u5F7B\u5E95\u675C\u7EDD\u4E2D\u95F4\u4EBA\u653B\u51FB\uFF1A</font>

\`\`\`plain
# \u5BA2\u6237\u7AEF\u751F\u6210PKCE\u53C2\u6570\u793A\u4F8B  
import hashlib, base64, os  

code_verifier = base64.urlsafe_b64encode(os.urandom(32)).decode('utf-8').rstrip('=')  
code_challenge = hashlib.sha256(code_verifier.encode()).digest()  
code_challenge = base64.urlsafe_b64encode(code_challenge).decode('utf-8').rstrip('=')
\`\`\`

### **<font style="color:#000000;">1.1.3 </font>**<font style="color:#000000;">\u6D41\u7A0B\u5BF9\u6BD4</font>
<font style="color:#000000;">\u4F20\u7EDFOAuth 2.0\uFF1A  \u5BA2\u6237\u7AEF \u2192 \u6388\u6743\u670D\u52A1\u5668\uFF1A\u7533\u8BF7\u6388\u6743\u7801  \u6388\u6743\u670D\u52A1\u5668 \u2192 \u5BA2\u6237\u7AEF\uFF1A\u8FD4\u56DE\u88F8\u6388\u6743\u7801  OAuth 2.1 + PKCE\uFF1A  \u5BA2\u6237\u7AEF \u2192 \u6388\u6743\u670D\u52A1\u5668\uFF1A\u7533\u8BF7\u6388\u6743\u7801 + code_challenge  \u6388\u6743\u670D\u52A1\u5668 \u2192 \u5BA2\u6237\u7AEF\uFF1A\u8FD4\u56DE\u52A0\u5BC6\u6388\u6743\u7801  \u5BA2\u6237\u7AEF \u2192 \u4EE4\u724C\u7AEF\u70B9\uFF1Acode_verifier + \u6388\u6743\u7801 </font>

## **<font style="color:#000000;">1.2 \u534F\u8BAE\u673A\u5236\uFF1A\u4E3AAI\u573A\u666F\u91CF\u8EAB\u6253\u9020\u7684\u6388\u6743\u4F53\u7CFB</font>**
### **<font style="color:#000000;">1.2.1 \u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C\uFF08DCR\uFF09</font>**
<font style="color:#000000;">\u9488\u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u788E\u7247\u5316\u7279\u70B9\uFF0CMCP\u5F3A\u5236\u8981\u6C42\u652F\u6301RFC7591\u52A8\u6001\u6CE8\u518C\u534F\u8BAE\uFF1A</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1743991601136-c7c6d67f-7dd3-426b-9976-cccd471da97a.png)

<font style="color:#000000;">\u8BE5\u673A\u5236\u4F7F\u5F97\uFF1A</font>

+ <font style="color:#000000;">\u65B0\u5DE5\u5177\u65E0\u9700\u9884\u6CE8\u518C\u5373\u53EF\u63A5\u5165\u4EFB\u610FMCP\u670D\u52A1</font>
+ <font style="color:#000000;">\u4E34\u65F6\u6027AI Agent\u53EF\u81EA\u52A8\u83B7\u53D6\u751F\u5B58\u671F\u5339\u914D\u7684\u51ED\u8BC1</font>
+ <font style="color:#000000;">\u652F\u6301\u51ED\u8BC1\u81EA\u52A8\u8F6E\u6362\uFF08\u5982\u6BCF24\u5C0F\u65F6\u66F4\u6362client_secret\uFF09</font>

### **<font style="color:#000000;">1.2.2 \u5143\u6570\u636E\u53D1\u73B0\u534F\u8BAE</font>**
<font style="color:#000000;">\u901A\u8FC7\u6807\u51C6\u5316\u53D1\u73B0\u7AEF\u70B9\u5B9E\u73B0\u534F\u8BAE\u81EA\u63CF\u8FF0\uFF1A</font>

\`\`\`plain
GET /.well-known/oauth-authorization-server HTTP/1.1  
Host: api.example.com  
MCP-Protocol-Version: 2025-03-26  

HTTP/1.1 200 OK  
{  
  "issuer": "https://api.example.com",  
  "authorization_endpoint": "https://auth.example.com/authorize",  
  "token_endpoint": "https://auth.example.com/token",  
  "capabilities": ["PKCE", "TOKEN_ROTATION"]  
}
\`\`\`

<font style="color:#000000;">\u53D1\u73B0\u5931\u8D25\u65F6\uFF0C\u5BA2\u6237\u7AEF\u81EA\u52A8\u56DE\u9000\u5230\u9884\u8BBE\u7AEF\u70B9\u8DEF\u5F84\uFF0C\u4FDD\u969C\u517C\u5BB9\u6027\u3002</font>

## **<font style="color:#000000;">1.3 \u5B9E\u73B0\u89C4\u8303\uFF1AMCP\u7684\u516D\u5927\u5B89\u5168\u94C1\u5F8B</font>**
### **<font style="color:#000000;">1.3.1 HTTPS\u5168\u94FE\u8DEF\u5F3A\u5236</font>**
+ <font style="color:#000000;">\u6240\u6709\u6388\u6743\u7AEF\u70B9\u5FC5\u987B\u90E8\u7F72TLS 1.3+</font>
+ <font style="color:#000000;">\u6DF7\u5408HTTP\u5185\u5BB9\uFF08\u5982\u56FE\u50CF\uFF09\u9700\u901A\u8FC7\u52A0\u5BC6\u901A\u9053\u4EE3\u7406</font>

### **<font style="color:#000000;">1.3.2 \u4EE4\u724C\u751F\u547D\u5468\u671F\u7BA1\u63A7</font>**
| **<font style="color:#000000;">\u4EE4\u724C\u7C7B\u578B</font>** | **<font style="color:#000000;">\u5EFA\u8BAE\u751F\u5B58\u671F</font>** | **<font style="color:#000000;">\u5237\u65B0\u89C4\u5219</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">Access Token</font> | <font style="color:#000000;">\u226415\u5206\u949F</font> | <font style="color:#000000;">\u5355\u6B21\u4F7F\u7528\u540E\u7ACB\u5373\u5931\u6548</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">Refresh Token</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u226424\u5C0F\u65F6</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u6BCF\u6B21\u5237\u65B0\u751F\u6210\u65B0\u4EE4\u724C</font> |


### **<font style="color:#000000;">1.3.3 \u5BA2\u6237\u7AEF\u51ED\u8BC1\u5B58\u50A8</font>**
+ <font style="color:#000000;">\u7981\u6B62\u660E\u6587\u5B58\u50A8\uFF1A\u91C7\u7528\u64CD\u4F5C\u7CFB\u7EDF\u5B89\u5168\u5B58\u50A8\u533A\u6216HSM\u52A0\u5BC6</font>
+ <font style="color:#000000;">\u79FB\u52A8\u7AEF\u4F7F\u7528Android Keystore/iOS Keychain</font>

### **<font style="color:#000000;">1.3.4 \u4F1A\u8BDD\u7ED1\u5B9A</font>**
\`\`\`plain
// \u4EE4\u724C\u5143\u6570\u636E\u793A\u4F8B  
{  
  "token": "eyJhbGciOi...",  
  "binding": {  
    "client_id": "mcp-client-xyz",  
    "ip_range": "192.168.1.0/24",  
    "device_fingerprint": "SHA3-256(\u786C\u4EF6\u7279\u5F81)"  
  }  
}
\`\`\`

### **<font style="color:#000000;">1.3.5 \u5BA1\u8BA1\u65E5\u5FD7</font>**
+ <font style="color:#000000;">\u8BB0\u5F55\u6240\u6709\u4EE4\u724C\u9881\u53D1/\u64A4\u9500\u4E8B\u4EF6</font>
+ <font style="color:#000000;">\u9AD8\u98CE\u9669\u64CD\u4F5C\uFF08\u5982\u5220\u9664\u7C7B\u5DE5\u5177\u8C03\u7528\uFF09\u9700\u5173\u8054\u539F\u59CB\u6388\u6743\u4F1A\u8BDD</font>

### **<font style="color:#000000;">1.3.6 \u9632\u5FA1\u6027\u7F16\u7A0B</font>**
\`\`\`plain
// \u5B89\u5168\u7684\u4EE4\u724C\u9A8C\u8BC1\u4F2A\u4EE3\u7801  
public boolean verifyToken(String token) {  
    try {  
        JWT jwt = decode(token);  
        if (jwt.isExpired()) throw new TokenExpiredException();  
        if (!jwt.validateSignature(publicKey)) throw new InvalidSignatureException();  
        if (jwt.getClaim("scope").contains("destructive")) {  
            requireMfa(); // \u9AD8\u5371\u64CD\u4F5C\u89E6\u53D1\u591A\u56E0\u7D20\u8BA4\u8BC1  
        }  
        return true;  
    } catch (JWTException e) {  
        auditLog.logSecurityEvent("INVALID_TOKEN", token);  
        return false;  
    }  
}
\`\`\`

## **<font style="color:#000000;">1.4 \u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u5F71\u54CD</font>**
### **<font style="color:#000000;">1.4.1 \u5DE5\u5177\u884C\u4E3A\u7684\u6807\u51C6\u5316\u63CF\u8FF0</font>**
<font style="color:#000000;">\u901A</font><font style="color:rgb(44, 44, 54);">\u901A\u8FC7 </font>\`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">ToolAnnotations</font>**\`<font style="color:rgb(44, 44, 54);"> \u63A5\u53E3\u5B9A\u4E49\u7684\u5143\u6570\u636E\uFF08\u89C1\u4EE3\u7801\u5757\uFF09\uFF0C\u5F00\u53D1\u8005\u53EF\u5411\u5BA2\u6237\u7AEF\u63D0\u4F9B\u5DE5\u5177\u884C\u4E3A\u7684</font>**<font style="color:rgb(17, 24, 39);">\u975E\u5F3A\u5236\u6027\u63D0\u793A </font>**<font style="color:rgb(44, 44, 54);">\u3002\u8FD9\u4E9B\u6807\u6CE8\u5BF9\u5DE5\u5177\u94FE\u751F\u6001\u4EA7\u751F\u4EE5\u4E0B\u5F71\u54CD\uFF1A</font>

1. **<font style="color:rgb(17, 24, 39);">\u4EA4\u4E92\u900F\u660E\u5EA6\u63D0\u5347</font>**
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">title</font>**\`<font style="color:rgb(44, 44, 54);"> \u63D0\u4F9B\u8BED\u4E49\u5316\u547D\u540D</font>
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">readOnlyHint/destructiveHint</font>**\`<font style="color:rgb(44, 44, 54);"> \u6807\u660E\u64CD\u4F5C\u662F\u5426\u5177\u5907\u7834\u574F\u6027</font>
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">openWorldHint</font>**\`<font style="color:rgb(44, 44, 54);"> \u533A\u5206\u5185\u5916\u90E8\u4F5C\u7528\u57DF\uFF08\u5982\u641C\u7D22\u5F15\u64CE vs \u5185\u5B58\u8BBF\u95EE\uFF09  
</font><font style="color:rgb(44, 44, 54);">\u524D\u7AEF\u53EF\u901A\u8FC7\u8FD9\u4E9B\u6807\u6CE8\u52A8\u6001\u6E32\u67D3\u64CD\u4F5C\u786E\u8BA4\u5F39\u7A97\u6216\u98CE\u9669\u8B66\u793A\u56FE\u6807\u3002</font>
2. **<font style="color:rgb(17, 24, 39);">\u8C03\u7528\u7B56\u7565\u4F18\u5316</font>**
    - \`**<font style="color:rgb(235, 87, 87);background-color:rgb(236, 236, 236);">idempotentHint</font>**\`<font style="color:rgb(44, 44, 54);"> \u5141\u8BB8\u5BA2\u6237\u7AEF\u81EA\u52A8\u91CD\u8BD5\u5E42\u7B49\u8BF7\u6C42\uFF08\u5982\u67E5\u8BE2\u64CD\u4F5C\uFF09</font>
    - <font style="color:rgb(44, 44, 54);">\u975E\u5E42\u7B49\u5199\u64CD\u4F5C\uFF08\u5982\u6587\u4EF6\u5220\u9664\uFF09\u5219\u5F3A\u5236\u4EBA\u5DE5\u4E8C\u6B21\u786E\u8BA4</font>

**<font style="color:rgb(17, 24, 39);">\u751F\u6001\u517C\u5BB9\u6027\u4FDD\u969C</font>**<font style="color:rgb(44, 44, 54);">  
</font><font style="color:rgb(44, 44, 54);">\u6240\u6709\u6807\u6CE8\u4EC5\u4F5C\u4E3A</font>**<font style="color:rgb(17, 24, 39);">\u884C\u4E3A\u5EFA\u8BAE </font>**<font style="color:rgb(44, 44, 54);">\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u5F97\u636E\u6B64\u66FF\u4EE3\u5B89\u5168\u63A7\u5236\u3002\u4F8B\u5982\uFF1A</font>

\`\`\`typescript
if (tool.annotations.destructiveHint) {  
  showDestructiveWarningDialog(); // \u524D\u7AEF\u63D0\u793A  
}  
await enforceRBACPolicy(); // \u771F\u5B9E\u6743\u9650\u7531RBAC\u5F15\u64CE\u6821\u9A8C  
\`\`\`

## **<font style="color:#000000;">1.5 \u5F00\u53D1\u8005\u8FC1\u79FB\u6307\u5357</font>**
### **<font style="color:#000000;">1.5.1 \u4E3B\u8981\u53D8\u66F4\u70B9\u5BF9\u6BD4</font>**
| **<font style="color:#000000;">\u529F\u80FD\u9879</font>** | **<font style="color:#000000;">2024-11-05\u7248\u672C</font>** | **<font style="color:#000000;">2025-03-26\u7248\u672C</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">\u6388\u6743\u7AEF\u70B9\u53D1\u73B0</font> | <font style="color:#000000;">\u624B\u52A8\u914D\u7F6E</font> | <font style="color:#000000;">\u81EA\u52A8\u53D1\u73B0 + \u56DE\u9000\u673A\u5236</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">PKCE\u652F\u6301</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u53EF\u9009</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u5F3A\u5236\u542F\u7528</font> |
| <font style="color:#000000;">\u4EE4\u724C\u5B58\u50A8</font> | <font style="color:#000000;">\u5141\u8BB8\u5185\u5B58\u7F13\u5B58</font> | <font style="color:#000000;">\u5FC5\u987B\u4F7F\u7528\u5B89\u5168\u5B58\u50A8</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">\u9519\u8BEF\u5904\u7406</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u57FA\u7840HTTP\u72B6\u6001\u7801</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u7EC6\u5316OAuth\u9519\u8BEF\u4EE3\u7801\uFF08\u5982invalid_scope\uFF09</font> |


### **<font style="color:#000000;">1.5.2 \u4EE3\u7801\u8FC1\u79FB\u793A\u4F8B</font>**
<font style="color:#000000;">\u65E7\u7248\u4EE3\u7801\u7247\u6BB5\uFF1A</font>

\`\`\`plain
// OAuth 2.0\u9690\u5F0F\u6D41  
const token = getTokenFromURLFragment();  
callMCPService(token);
\`\`\`

<font style="color:#000000;">\u65B0\u7248\u5B89\u5168\u5B9E\u73B0\uFF1A</font>

\`\`\`plain
// OAuth 2.1 PKCE\u6D41  
const { verifier, challenge } = generatePKCE();  
startAuthFlow(challenge);  

// \u56DE\u8C03\u5904\u7406  
function handleCallback(code) {  
    fetchToken(code, verifier).then(token => {  
        secureStorage.save('mcp_token', token);  
        callMCPService(token);  
    });  
}
\`\`\`

# **<font style="color:#000000;">2. Streamable HTTP\uFF1A\u7EDF\u4E00\u901A\u4FE1\u534F\u8BAE\u7684\u9769\u547D\u6027\u5347\u7EA7</font>**
### <font style="color:#000000;">2.1. \u4ECE\u53CC\u7AEF\u70B9\u5230\u5355\u7AEF\u70B9\u7684\u8FDB\u5316\u4E4B\u8DEF</font>
### **<font style="color:#000000;">2.1.1 \u65E7\u7248\u67B6\u6784\u7684\u75DB\u70B9</font>**
<font style="color:#000000;">2024-11-05\u7248\u672C\u91C7\u7528\u7684HTTP+SSE\u53CC\u901A\u9053\u65B9\u6848\u5B58\u5728\u4E09\u5927\u7ED3\u6784\u6027\u7F3A\u9677\uFF1A</font>

| **<font style="color:#000000;">\u95EE\u9898\u7C7B\u578B</font>** | **<font style="color:#000000;">\u5177\u4F53\u8868\u73B0</font>** | **<font style="color:#000000;">\u6280\u672F\u540E\u679C</font>** |
| :--- | :--- | :--- |
| <font style="color:#000000;">\u8FDE\u63A5\u7BA1\u7406\u590D\u6742</font> | <font style="color:#000000;">\u9700\u7EF4\u62A4POST\u8BF7\u6C42\u7AEF\u4E0ESSE\u4E8B\u4EF6\u6D41\u53CC\u901A\u9053</font> | <font style="color:#000000;">\u5BA2\u6237\u7AEF\u9700\u5B9E\u73B0\u53CC\u91CD\u8FDE\u63A5\u4FDD\u6D3B\u673A\u5236</font> |
| <font style="color:#000000;background-color:rgb(248, 250, 252);">\u65AD\u7EBF\u6062\u590D\u56F0\u96BE</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">SSE\u6D41\u4E2D\u65AD\u540E\u9700\u91CD\u65B0\u5EFA\u7ACB\u5B8C\u6574\u4F1A\u8BDD</font> | <font style="color:#000000;background-color:rgb(248, 250, 252);">\u957F\u4EFB\u52A1\u573A\u666F\u53EF\u80FD\u4E22\u5931\u4E0A\u4E0B\u6587\u6570\u636E</font> |
| <font style="color:#000000;">\u534F\u8BAE\u5197\u4F59</font> | <font style="color:#000000;">\u7B80\u5355\u8BF7\u6C42\u88AB\u8FEB\u4F7F\u7528\u6D41\u5F0F\u4F20\u8F93</font> | <font style="color:#000000;">\u989D\u591630%\u7684\u7F51\u7EDC\u8D44\u6E90\u6D88\u8017\uFF08\u57FA\u4E8EMCP\u5DE5\u4F5C\u7EC4\u57FA\u51C6\u6D4B\u8BD5\uFF09</font> |


<font style="color:#000000;">\u5178\u578B\u6848\u4F8B\uFF1A\u5F53AI\u52A9\u624B\u540C\u65F6\u6267\u884C"\u8BED\u97F3\u8F6C\u6587\u5B57+\u5B9E\u65F6\u7FFB\u8BD1"\u65F6\uFF0C\u65E7\u65B9\u6848\u9700\u8981\u5EFA\u7ACB4\u4E2A\u72EC\u7ACB\u8FDE\u63A5\uFF082\u5DE5\u5177\xD72\u534F\u8BAE\uFF09\uFF0C\u5BFC\u81F4\u79FB\u52A8\u7AEF\u5E73\u5747\u5EF6\u8FDF\u589E\u52A0400ms\u3002</font>

### **<font style="color:#000000;">2.1.2 Streamable HTTP\u6838\u5FC3\u6280\u672F\u89E3\u6790</font>**
<font style="color:#000000;">\u65B0\u534F\u8BAE\u901A\u8FC7\u4E09\u5927\u521B\u65B0\u5B9E\u73B0\u901A\u4FE1\u8303\u5F0F\u8F6C\u6362\uFF1A</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1743991601098-28985854-b478-4e4b-b5f3-904a6ada170d.png)

#### **<font style="color:#000000;">\u5173\u952E\u6280\u672F\u7279\u5F81</font>**
1. <font style="color:#000000;">\u667A\u80FD\u534F\u8BAE\u534F\u5546</font>
    - <font style="color:#000000;">\u5BA2\u6237\u7AEF\u901A\u8FC7</font><font style="color:#000000;background-color:#f7f7f7;">Accept</font><font style="color:#000000;">\u5934\u58F0\u660E\u80FD\u529B\uFF1A</font>
    - <font style="color:#000000;">\u670D\u52A1\u7AEF\u52A8\u6001\u9009\u62E9\u4F20\u8F93\u6A21\u5F0F\uFF08\u5B9E\u9A8C\u6570\u636E\u663E\u793A\u534F\u5546\u8017\u65F6<5ms\uFF09</font>
2. <font style="color:#000000;">\u53CC\u5411\u901A\u4FE1\u96A7\u9053</font>
    - <font style="color:#000000;">\u5728SSE\u6D41\u5F00\u542F\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u53EF\u901A\u8FC7\u9644\u52A0HTTP POST\u53D1\u9001\u65B0\u8BF7\u6C42</font>
    - <font style="color:#000000;">\u670D\u52A1\u7AEF\u901A\u8FC7</font><font style="color:#000000;background-color:#f7f7f7;">Mcp-Request-Id</font><font style="color:#000000;">\u5934\u90E8\u5B9E\u73B0\u591A\u8DEF\u590D\u7528</font>
3. <font style="color:#000000;">\u65AD\u70B9\u7EED\u4F20\u673A\u5236</font>
    - <font style="color:#000000;">\u91CD\u8FDE\u65F6\u643A\u5E26</font><font style="color:#000000;background-color:#f7f7f7;">Last-Event-ID</font><font style="color:#000000;">\u5934\u90E8\uFF1A</font>
    - <font style="color:#000000;">\u670D\u52A1\u7AEF\u53EF\u9009\u62E9\uFF1A</font>
        * <font style="color:#000000;">\u4ECE\u6307\u5B9AID\u91CD\u653E\u4E8B\u4EF6\uFF08\u9700\u5B9E\u73B0\u4E8B\u4EF6\u65E5\u5FD7\uFF09</font>
        * <font style="color:#000000;">\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0\uFF08\u63A8\u8350\u7528\u4E8E\u5B9E\u65F6\u76D1\u63A7\u573A\u666F\uFF09</font>

### **<font style="color:#000000;">2.1.3 \u6027\u80FD\u63D0\u5347\u4E0E\u7A33\u5B9A\u6027\u4FDD\u969C</font>**
#### <font style="color:#000000;">\u7F51\u7EDC\u6548\u7387\u5BF9\u6BD4\u6D4B\u8BD5</font>
<font style="color:#000000;">\u57FA\u4E8EMCP\u5B98\u65B9\u6D4B\u8BD5\u5E73\u53F0\u7684\u6570\u636E\uFF1A</font>

| **<font style="color:rgb(0, 0, 0);">\u6307\u6807</font>** | **<font style="color:rgb(0, 0, 0);">\u65E7\u534F\u8BAE(HTTP+SSE)</font>** | **<font style="color:rgb(0, 0, 0);">Streamable HTTP</font>** | **<font style="color:rgb(0, 0, 0);">\u63D0\u5347\u5E45\u5EA6</font>** |
| :--- | :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">\u8FDE\u63A5\u5EFA\u7ACB\u8017\u65F6</font> | <font style="color:rgb(0, 0, 0);">320ms \xB150ms</font> | <font style="color:rgb(0, 0, 0);">180ms \xB120ms</font> | <font style="color:rgb(0, 0, 0);">43.75%</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6570\u636E\u4F20\u8F93\u5197\u4F59\u5EA6</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">18%</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">5%</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">72.2%</font> |
| <font style="color:rgb(0, 0, 0);">\u65AD\u7EBF\u6062\u590D\u6210\u529F\u7387</font> | <font style="color:rgb(0, 0, 0);">68%</font> | <font style="color:rgb(0, 0, 0);">93%</font> | <font style="color:rgb(0, 0, 0);">36.8%</font> |


# **<font style="color:#000000;">3. JSON-RPC\u6279\u5904\u7406\uFF1A\u6548\u7387\u9769\u547D\u7684\u534F\u8BAE\u7EA7\u652F\u6301</font>**
## **<font style="color:#000000;">3.1 \u6279\u5904\u7406\u673A\u5236\u7684\u5B9E\u73B0\u539F\u7406</font>**
### **<font style="color:#000000;">3.1.1 \u534F\u8BAE\u5C42\u5F3A\u5236\u8981\u6C42</font>**
<font style="color:#000000;">\u65B0\u7248\u89C4\u8303\u7B2C4.2\u6761\u660E\u786E\u89C4\u5B9A\uFF1A</font>

<font style="color:rgb(139, 139, 139);">\u6240\u6709MCP\u5B9E\u73B0\u5FC5\u987B\u652F\u6301JSON-RPC 2.0\u6279\u5904\u7406\u89C4\u8303\u3002\u5BF9\u4E8E\u5305\u542B\u901A\u77E5\uFF08notification\uFF09\u7684\u6279\u5904\u7406\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u5E94\u5728\u5B8C\u6210\u5904\u7406\u540E\u8FD4\u56DEHTTP 202 Accepted\u72B6\u6001\u7801\u3002</font>

<font style="color:#000000;">\u5408\u6CD5\u8BF7\u6C42\u793A\u4F8B\uFF1A</font>

\`\`\`plain
json[  
    {"jsonrpc":"2.0","id":1,"method":"text_analyze","params":{"text":"Hello"}},  
    {"jsonrpc":"2.0","id":2,"method":"image_tag","params":{"url":"img.jpg"}},  
    {"jsonrpc":"2.0","method":"log_event"}  // \u65E0ID\u7684\u901A\u77E5\u7C7B\u578B  
]
\`\`\`

<font style="color:#000000;">\u54CD\u5E94\u5904\u7406\u89C4\u5219\uFF1A</font>

+ <font style="color:#000000;">\u6210\u529F\u6279\u5904\u7406\u8FD4\u56DEHTTP 200 + \u54CD\u5E94\u6570\u7EC4</font>
+ <font style="color:#000000;">\u539F\u5B50\u6027\u4FDD\u8BC1\uFF1A\u652F\u6301</font><font style="color:#000000;background-color:#f7f7f7;">atomic</font><font style="color:#000000;">\u6807\u8BB0\u5B9E\u73B0\u5168\u6210\u529F\u6216\u5168\u56DE\u6EDA</font>

## **<font style="color:#000000;">3.2 \u6027\u80FD\u4F18\u5316\u6848\u4F8B\u5206\u6790</font>**
### **<font style="color:#000000;">3.2.1 \u7F51\u7EDC\u5F00\u9500\u5BF9\u6BD4</font>**
<font style="color:#000000;">\u5047\u8BBE\u5904\u7406100\u4E2A\u72EC\u7ACB\u8BF7\u6C42\uFF1A</font>

| **<font style="color:rgb(0, 0, 0);">\u6307\u6807</font>** | **<font style="color:rgb(0, 0, 0);">\u5355\u8BF7\u6C42\u6A21\u5F0F</font>** | **<font style="color:rgb(0, 0, 0);">\u6279\u5904\u7406\u6A21\u5F0F</font>** | **<font style="color:rgb(0, 0, 0);">\u4F18\u5316\u6BD4\u4F8B</font>** |
| :--- | :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">TCP\u63E1\u624B\u6B21\u6570</font> | <font style="color:rgb(0, 0, 0);">100</font> | <font style="color:rgb(0, 0, 0);">1</font> | <font style="color:rgb(0, 0, 0);">99%</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u603B\u5934\u90E8\u5927\u5C0F</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">~150KB</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">~2KB</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">98.7%</font> |
| <font style="color:rgb(0, 0, 0);">\u603B\u8017\u65F6\uFF083G\u7F51\u7EDC\uFF09</font> | <font style="color:rgb(0, 0, 0);">12.3s</font> | <font style="color:rgb(0, 0, 0);">1.8s</font> | <font style="color:rgb(0, 0, 0);">85.4%</font> |


### **<font style="color:#000000;">3.2.2 \u670D\u52A1\u7AEF\u5E76\u884C\u5904\u7406</font>**
\`\`\`plain
// Go\u8BED\u8A00\u5B9E\u73B0\u6279\u5904\u7406\u5E76\u884C\u6267\u884C  
func HandleBatch(ctx context.Context, batch []RPCRequest) []RPCResponse {  
    var wg sync.WaitGroup  
    resChan := make(chan RPCResponse, len(batch))  

    for _, req := range batch {  
        wg.Add(1)  
        go func(r RPCRequest) {  
            defer wg.Done()  
            result := processSingle(r)  
            resChan <- result  
        }(req)  
    }  

    wg.Wait()  
    close(resChan)  

    var responses []RPCResponse  
    for res := range resChan {  
        responses = append(responses, res)  
    }  
    return responses  
}
\`\`\`

<font style="color:#000000;">\u6CE8\u610F\u4E8B\u9879\uFF1A</font>

+ <font style="color:#000000;">\u63A7\u5236\u5E76\u53D1\u7C92\u5EA6\uFF08\u5EFA\u8BAE\u6BCF\u4E2A\u6279\u5904\u7406\u4E0D\u8D85\u8FC750\u4E2A\u8BF7\u6C42\uFF09</font>
+ <font style="color:#000000;">\u5B9E\u73B0\u8BF7\u6C42\u4F18\u5148\u7EA7\u6807\u8BB0\uFF08priority\u5B57\u6BB5\uFF09</font>
+ <font style="color:#000000;">\u652F\u6301\u8D85\u65F6\u7194\u65AD\u673A\u5236</font>

# **<font style="color:#000000;">4. \u5DE5\u5177\u5143\u6570\u636E\uFF1A\u5B89\u5168\u4E0E\u4F53\u9A8C\u7684\u53CC\u91CD\u8FDB\u5316</font>**
## **<font style="color:#000000;">4.1 Tool Annotations\u67B6\u6784\u89E3\u6790</font>**
### **<font style="color:#000000;">4.1.1 \u5143\u6570\u636E\u5206\u7C7B\u4F53\u7CFB</font>**
\`\`\`plain
tools:
  - name: database_backup  
    annotations:  
      # \u6807\u51C6\u884C\u4E3A\u63D0\u793A (\u9075\u5FAA ToolAnnotations \u63A5\u53E3\u5B9A\u4E49)
      title: "Database Backup"                 # \u8BED\u4E49\u5316\u6807\u9898
      readOnlyHint: false                      # \u975E\u53EA\u8BFB\u64CD\u4F5C
      destructiveHint: false                   # \u975E\u7834\u574F\u6027\u64CD\u4F5C
      idempotentHint: true                     # \u5E42\u7B49\u64CD\u4F5C\uFF08\u91CD\u590D\u6267\u884C\u65E0\u526F\u4F5C\u7528\uFF09
      openWorldHint: false                     # \u4F5C\u7528\u57DF\u5C01\u95ED\uFF08\u4EC5\u9650\u672C\u5730\u6570\u636E\u5E93\uFF09
\`\`\`

### **<font style="color:#000000;">4.1.2 \u52A8\u6001\u6743\u9650\u7BA1\u63A7\u6D41\u7A0B</font>**
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1743991601145-ade0fb57-c253-4231-968e-dde98c21fe04.png)

## **<font style="color:#000000;">4.2 \u5B89\u5168\u589E\u5F3A\u5B9E\u8DF5</font>**
### **<font style="color:#000000;">4.2.1 \u7834\u574F\u6027\u64CD\u4F5C\u62E6\u622A\u673A\u5236</font>**
<font style="color:#000000;">\u5F53\u68C0\u6D4B\u5230</font><font style="color:#000000;background-color:#f7f7f7;">destructiveHint: true</font><font style="color:#000000;">\u65F6\uFF1A</font>

1. <font style="color:#000000;">\u524D\u7AEF\u81EA\u52A8\u63D2\u5165\u4E8C\u6B21\u786E\u8BA4</font>
2. <font style="color:#000000;">\u670D\u52A1\u7AEF\u8BB0\u5F55\u5B89\u5168\u5BA1\u8BA1\u65E5\u5FD7</font>
3. <font style="color:#000000;">\u5F3A\u5236\u89E6\u53D1MFA\u591A\u56E0\u7D20\u8BA4\u8BC1\uFF08\u5982\u679C\u914D\u7F6E\uFF09</font>

<font style="color:#000000;">\u5BA1\u8BA1\u65E5\u5FD7\u793A\u4F8B\uFF1A</font>

\`\`\`plain
json{  
  "action": "data_purge",  
  "user": "ai_agent_123",  
  "riskLevel": "critical",  
  "annotations": {"destructiveHint": true},  
  "timestamp": "2025-03-27T08:15:30Z",  
  "mfaUsed": true  
}
\`\`\`

### **<font style="color:#000000;">4.2.2 \u81EA\u52A8\u5316\u7B56\u7565\u751F\u6210</font>**
<font style="color:#000000;">\u57FA\u4E8E\u5143\u6570\u636E\u7684\u7B56\u7565\u5F15\u64CE\uFF1A</font>

\`\`\`plain
def generate_policy(tool):  
    policy = {  
        "effect": "allow" if tool.requiredScopes else "deny",  
        "conditions": []  
    }  

    if tool.annotations.get('destructiveHint'):  
        policy['conditions'].append({  
            "type": "mfa",  
            "required": True  
        })  

    return policy
\`\`\`

# **<font style="color:#000000;">5. \u667A\u80FD\u8FDB\u5EA6\u901A\u77E5\uFF1A\u4ECE\u6570\u5B57\u5230\u8BED\u4E49\u7684\u8FDB\u5316</font>**
## **<font style="color:#000000;">5.1 \u52A8\u6001\u6D88\u606F\u901A\u77E5\u673A\u5236</font>**
<font style="color:#000000;">\u65B0\u589E</font><font style="color:#000000;background-color:#f7f7f7;">message</font><font style="color:#000000;">\u5B57\u6BB5\u652F\u6301\u7ED3\u6784\u5316\u72B6\u6001\u63CF\u8FF0\uFF1A</font>

\`\`\`plain
{
  "type": "ProgressNotification",
  "progress": 65,
  "message": {
    "phase": "\u6570\u636E\u6E05\u6D17",
    "detail": "\u5DF2\u5904\u7406 12000/20000 \u6761\u8BB0\u5F55",
    "next_step": "\u5373\u5C06\u5F00\u59CB\u7279\u5F81\u63D0\u53D6"
  }
}
\`\`\`

<font style="color:#000000;">\u5E94\u7528\u4EF7\u503C\uFF1A</font>

+ <font style="color:#000000;">\u5F00\u53D1\u8C03\u8BD5\uFF1A\u7CBE\u51C6\u5B9A\u4F4D\u4EFB\u52A1\u5361\u70B9\uFF08\u5982"\u5361\u5728\u56FE\u50CF\u9884\u5904\u7406\u9636\u6BB5"\uFF09</font>
+ <font style="color:#000000;">\u7528\u6237\u754C\u9762\uFF1A\u652F\u6301\u591A\u8BED\u8A00\u52A8\u6001\u63D0\u793A\uFF08"\u5269\u4F59\u65F6\u95F4\uFF1A\u7EA62\u5206\u949F"\uFF09</font>
+ <font style="color:#000000;">\u5BA1\u8BA1\u8FFD\u6EAF\uFF1A\u5B8C\u6574\u8BB0\u5F55\u4EFB\u52A1\u751F\u547D\u5468\u671F\u72B6\u6001</font>

# **<font style="color:#000000;">6.\u591A\u6A21\u6001\u6269\u5C55\uFF1A\u97F3\u9891\u6D41\u652F\u6301\u843D\u5730</font>**
## **<font style="color:#000000;">6.1 \u97F3\u9891\u534F\u8BAE\u5B9E\u73B0\u65B9\u6848</font>**
<font style="color:#000000;">\u65B0\u589E</font><font style="color:#000000;background-color:#f7f7f7;">audio/*</font><font style="color:#000000;">\u5185\u5BB9\u7C7B\u578B\u652F\u6301\uFF1A</font>

\`\`\`plain
httpPOST /voice-process  
Content-Type: audio/webm  
Transfer-Encoding: chunked  

<\u97F3\u9891\u4E8C\u8FDB\u5236\u6D41>
\`\`\`

<font style="color:#000000;">\u5173\u952E\u6280\u672F\u7279\u6027\uFF1A</font>

| **<font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u529F\u80FD</font>** | **<font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u53C2\u6570</font>** |
| :--- | :--- |
| <font style="color:rgb(0, 0, 0);">\u7F16\u7801\u683C\u5F0F</font> | <font style="color:rgb(0, 0, 0);">WebM/MP3/WAV</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6D41\u5F0F\u4F20\u8F93</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u652F\u6301\u5206\u7247\u4E0A\u4F20\u4E0E\u5B9E\u65F6\u8F6C\u5F55</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(239, 246, 255);">\u5143\u6570\u636E\u7ED1\u5B9A</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(239, 246, 255);">\u901A\u8FC7X-Audio-Metadata\u5934\u4F20\u9012\u91C7\u6837\u7387\u7B49\u53C2\u6570</font> |


<font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u573A\u666F\u6848\u4F8B\uFF1A\u667A\u80FD\u5BA2\u670D\u7CFB\u7EDF\u53EF\u540C\u65F6\u63A5\u6536\u7528\u6237\u8BED\u97F3\u6D41\u5E76\u5B9E\u65F6\u8FD4\u56DE\u6587\u5B57\u54CD\u5E94</font>

# **<font style="color:#000000;">7. \u53C2\u6570\u8865\u5168\uFF1A\u5F00\u53D1\u8005\u4F53\u9A8C\u5347\u7EA7</font>**
## **<font style="color:#000000;">7.1. \u667A\u80FD\u8865\u5168\u5DE5\u4F5C\u6D41\u7A0B</font>**
1. <font style="color:#000000;">\u5BA2\u6237\u7AEF\u53D1\u73B0\u670D\u52A1\u7AEF\u58F0\u660E</font><font style="color:#000000;background-color:#f7f7f7;">completions</font><font style="color:#000000;">\u80FD\u529B</font>
2. <font style="color:#000000;">\u7528\u6237\u8F93\u5165\u65F6\u89E6\u53D1\u8865\u5168\u8BF7\u6C42\uFF1A</font>

\`\`\`plain
GET /completions?prefix=dat  
\u54CD\u5E94\uFF1A["date_format", "data_source", "dataset"]
\`\`\`

1. <font style="color:#000000;">\u52A8\u6001\u751F\u6210\u53C2\u6570\u5EFA\u8BAE\u5217\u8868 \u8BBE\u8BA1\u4F18\u52BF\uFF1A</font>
+ <font style="color:#000000;">\u964D\u4F4E90%\u7684\u53C2\u6570\u8F93\u5165\u9519\u8BEF\u7387\uFF08MCP\u5DE5\u4F5C\u7EC4\u7EDF\u8BA1\uFF09</font>
+ <font style="color:#000000;">\u652F\u6301\u57FA\u4E8E\u4E0A\u4E0B\u6587\u7684\u667A\u80FD\u63A8\u8350\uFF08\u5982\u4F18\u5148\u63A8\u8350\u5F53\u524D\u5DE5\u5177\u5E38\u7528\u53C2\u6570\uFF09</font>

# **<font style="color:#000000;">8. \u4F1A\u8BDD\u7BA1\u7406\uFF1A\u957F\u65F6\u4EFB\u52A1\u53EF\u9760\u6027\u4FDD\u969C</font>**
## **<font style="color:#000000;">8.1 \u4F1A\u8BDD\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406</font>**
<font style="color:#000000;">\u6838\u5FC3\u6807\u8BC6\uFF1A</font>

\`\`\`plain
Mcp-Session-Id: sess_XYZ123 (UUIDv7\u683C\u5F0F)
\`\`\`

<font style="color:#000000;">\u65AD\u7EBF\u6062\u590D\u6D41\u7A0B\uFF1A</font>

\`\`\`plain
1. \u5BA2\u6237\u7AEF\u7F13\u5B58\u6700\u540E\u63A5\u6536\u7684Event-ID\uFF08\u5982159\uFF09  
2. \u91CD\u8FDE\u65F6\u643A\u5E26\uFF1A  
   Last-Event-ID: 159  
   Mcp-Session-Id: sess_XYZ123  
3. \u670D\u52A1\u7AEF\u4ECE\u65AD\u70B9\u7EED\u4F20\u6216\u8FD4\u56DE\u589E\u91CF\u66F4\u65B0
\`\`\`

# **<font style="color:#000000;">9. \u603B\u7ED3 - </font>**<font style="color:#000000;">\u6784\u5EFA\u4E0B\u4E00\u4EE3AI\u534F\u4F5C\u8303\u5F0F</font>
## **<font style="color:#000000;">9.1 \u5BF9\u5BA2\u6237\u7AEF\u7684\u5F71\u54CD</font>**
<font style="color:#000000;">\u6280\u672F\u9002\u914D\u6311\u6218</font>

+ <font style="color:#000000;">\u5F3A\u5236\u5B9E\u73B0OAuth 2.1\u4E0EPKCE\u6D41\u7A0B\uFF0C\u79FB\u52A8\u7AEF\u9700\u96C6\u6210\u7CFB\u7EDF\u7EA7\u5B89\u5168\u5B58\u50A8\uFF08\u5982iOS Secure Enclave\uFF09</font>
+ <font style="color:#000000;">\u524D\u7AEF\u6846\u67B6\u9700\u6DF1\u5EA6\u89E3\u6790Tool Annotations\uFF0C\u5B9E\u73B0\u52A8\u6001UI\u751F\u6210\uFF08\u5982\u81EA\u52A8\u6E32\u67D3\u9AD8\u5371\u64CD\u4F5C\u8B66\u793A\u56FE\u6807\uFF09</font>
+ <font style="color:#000000;">\u97F3\u9891\u6D41\u5904\u7406\u9700\u652F\u6301Web Audio API\u4E0E\u5206\u7247\u4F20\u8F93\u903B\u8F91</font>

<font style="color:#000000;">\u4F53\u9A8C\u5347\u7EA7\u673A\u9047</font>

+ <font style="color:#000000;">\u53C2\u6570\u8865\u5168\u529F\u80FD\u964D\u4F4E\u5F00\u53D1\u8005\u5DE5\u5177\u5B66\u4E60\u66F2\u7EBF\uFF08\u5B9E\u6D4B\u63D0\u534738%\u7684API\u8C03\u7528\u6548\u7387\uFF09</font>
+ <font style="color:#000000;">\u667A\u80FD\u8FDB\u5EA6\u6D88\u606F\u652F\u6301\u751F\u6210\u5BCC\u5A92\u4F53\u72B6\u6001\u5361\u7247\uFF08\u5982\u56FE\u8868+\u6587\u5B57\u6DF7\u5408\u5448\u73B0\uFF09</font>

## **<font style="color:#000000;">9.2 \u5BF9\u670D\u52A1\u7AEF\u7684\u5F71\u54CD</font>**
<font style="color:#000000;">\u67B6\u6784\u6539\u9020\u9700\u6C42</font>

| **<font style="color:rgb(0, 0, 0);">\u6539\u9020\u9879</font>** | **<font style="color:rgb(0, 0, 0);">\u5B9E\u65BD\u6210\u672C</font>** | **<font style="color:rgb(0, 0, 0);">\u6536\u76CA\u7B49\u7EA7</font>** |
| :--- | :--- | :--- |
| <font style="color:rgb(0, 0, 0);">\u4F1A\u8BDD\u72B6\u6001\u7BA1\u7406</font> | <font style="color:rgb(0, 0, 0);">\u9AD8</font> | <font style="color:rgb(0, 0, 0);">\u2605\u2605\u2605\u2605\u2606</font> |
| <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u6D41\u5F0FHTTP\u7F51\u5173(\u5982Higress)</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u4F4E</font> | <font style="color:rgb(0, 0, 0);background-color:rgb(248, 250, 252);">\u2605\u2605\u2605\u2605\u2605</font> |
| <font style="color:rgb(0, 0, 0);">\u6279\u5904\u7406\u539F\u5B50\u4E8B\u52A1</font> | <font style="color:rgb(0, 0, 0);">\u4E2D</font> | <font style="color:rgb(0, 0, 0);">\u2605\u2605\u2605\u2606\u2606</font> |


## **<font style="color:#000000;">9.3 \u5BF9\u5F00\u53D1\u8005\u5DE5\u5177\u94FE\u7684\u91CD\u6784</font>**
<font style="color:#000000;">SDK\u5173\u952E\u5347\u7EA7\u70B9\uFF1A</font>

\`\`\`plain
# \u65B0\u4E00\u4EE3SDK\u4F2A\u4EE3\u7801\u793A\u4F8B  
class MCPClient:  
    def __init__(self):  
        self.session = ResilientSession()  # \u81EA\u52A8\u91CD\u8FDE+\u65AD\u70B9\u7EED\u4F20  
        self.annotator = ToolAnnotationParser()  # \u5143\u6570\u636E\u89E3\u6790\u5F15\u64CE  
        self.auditor = SecurityAuditHook()  # \u5B89\u5168\u5BA1\u8BA1\u94A9\u5B50  

    def call_tool(self, tool_name):  
        if self.annotator.risk_level(tool_name) == 'critical':  
            self.auditor.log_operation(tool_name)  # \u81EA\u52A8\u89E6\u53D1\u5BA1\u8BA1
\`\`\`

<font style="color:#000000;">\u5DE5\u5177\u94FE\u5347\u7EA7\u5E26\u6765\uFF1A</font>

+ <font style="color:#000000;">\u5F00\u53D1\u8C03\u8BD5\u65F6\u95F4\u51CF\u5C1157%\uFF08IDE\u63D2\u4EF6\u96C6\u6210\u81EA\u52A8\u8865\u5168\u4E0E\u534F\u8BAE\u6821\u9A8C\uFF09</font>
+ <font style="color:#000000;">\u5B89\u5168\u6F0F\u6D1E\u7387\u4E0B\u964D82%\uFF08\u901A\u8FC7\u6CE8\u89E3\u9A71\u52A8\u7684\u6743\u9650\u6821\u9A8C\uFF09</font>

## **9.4 \u5982\u4F55\u5FEB\u901F\u63A5\u5165\u65B0\u7279\u6027**
Higress\u5DF2\u7387\u5148\u652F\u6301Streamable HTTP\u4F20\u8F93\u683C\u5F0F\uFF0C\u5E76\u4E14\u5BF9MCP 2025-03-26\u7248\u672C\u7684\u591A\u9879\u7279\u6027\u90FD\u4FDD\u6301\u9AD8\u4F18\u5148\u7EA7\u8DDF\u7D27\uFF0C\u5982Mcp-Session-Id\u5934\u7684\u4F1A\u8BDD\u7BA1\u7406\uFF0C\u5E76\u652F\u6301\u6279\u91CF\u8BF7\u6C42\u3001\u54CD\u5E94\u548C\u901A\u77E5\uFF0C\u4EE5\u53CA SSE \u6D41\u7684\u53EF\u6062\u590D\u6027\u7B49\u3002

\u8BE6\u89C1 [\u300AAPI \u5373 MCP\uFF5CHigress \u53D1\u5E03 MCP Marketplace\uFF0C\u52A0\u901F\u5B58\u91CF API \u8DE8\u5165 MCP \u65F6\u4EE3\u300B](https://higress.cn/blog/higress-gvr7dx_awbbpb_igk8hdx9xt83ptqg/?spm=36971b57.2385fb13.0.0.78b8285fzhuGKT)

\u5546\u4E1A\u5316\u4EA7\u54C1\u4FA7\uFF0C[\u4E91\u539F\u751FAPI\u7F51\u5173](https://www.aliyun.com/product/apigateway)\u4E5F\u4F1A\u5728\u7A0D\u665A\u7684\u65F6\u5019\u5BF9\u9F50\u5F00\u6E90\u4FA7Higress\u7684\u5404\u9879\u80FD\u529B\uFF0C\u63D0\u4F9B\u4F01\u4E1A\u7EA7\u7684\u5404\u9879MCP\u7279\u6027\uFF0C\u6B22\u8FCE\u54A8\u8BE2\u548C\u5173\u6CE8\u3002
`},c=function(){return o},r=function(){return[{depth:1,slug:"\u66F4\u65B0",text:"\u66F4\u65B0"},{depth:3,slug:"\u5173\u952E\u5DEE\u5F02\u603B\u7ED3",text:"\u5173\u952E\u5DEE\u5F02\u603B\u7ED3\uFF1A"},{depth:1,slug:"1-\u66F4\u5B89\u5168\u7684oauth-21",text:"1. \u66F4\u5B89\u5168\u7684OAuth 2.1"},{depth:2,slug:"11-\u4ECEoauth-20\u523021\u7684\u672C\u8D28\u8DE8\u8D8A",text:"1.1 \u4ECEOAuth 2.0\u52302.1\u7684\u672C\u8D28\u8DE8\u8D8A"},{depth:3,slug:"111-\u6838\u5FC3\u5B89\u5168\u7F3A\u9677\u7684\u6839\u6CBB",text:"1.1.1 \u6838\u5FC3\u5B89\u5168\u7F3A\u9677\u7684\u6839\u6CBB"},{depth:3,slug:"112-pkce\u673A\u5236\u7684\u5168\u9762\u5F3A\u5236\u5316",text:"1.1.2 PKCE\u673A\u5236\u7684\u5168\u9762\u5F3A\u5236\u5316"},{depth:3,slug:"113-\u6D41\u7A0B\u5BF9\u6BD4",text:"1.1.3 \u6D41\u7A0B\u5BF9\u6BD4"},{depth:2,slug:"12-\u534F\u8BAE\u673A\u5236\u4E3Aai\u573A\u666F\u91CF\u8EAB\u6253\u9020\u7684\u6388\u6743\u4F53\u7CFB",text:"1.2 \u534F\u8BAE\u673A\u5236\uFF1A\u4E3AAI\u573A\u666F\u91CF\u8EAB\u6253\u9020\u7684\u6388\u6743\u4F53\u7CFB"},{depth:3,slug:"121-\u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518Cdcr",text:"1.2.1 \u52A8\u6001\u5BA2\u6237\u7AEF\u6CE8\u518C\uFF08DCR\uFF09"},{depth:3,slug:"122-\u5143\u6570\u636E\u53D1\u73B0\u534F\u8BAE",text:"1.2.2 \u5143\u6570\u636E\u53D1\u73B0\u534F\u8BAE"},{depth:2,slug:"13-\u5B9E\u73B0\u89C4\u8303mcp\u7684\u516D\u5927\u5B89\u5168\u94C1\u5F8B",text:"1.3 \u5B9E\u73B0\u89C4\u8303\uFF1AMCP\u7684\u516D\u5927\u5B89\u5168\u94C1\u5F8B"},{depth:3,slug:"131-https\u5168\u94FE\u8DEF\u5F3A\u5236",text:"1.3.1 HTTPS\u5168\u94FE\u8DEF\u5F3A\u5236"},{depth:3,slug:"132-\u4EE4\u724C\u751F\u547D\u5468\u671F\u7BA1\u63A7",text:"1.3.2 \u4EE4\u724C\u751F\u547D\u5468\u671F\u7BA1\u63A7"},{depth:3,slug:"133-\u5BA2\u6237\u7AEF\u51ED\u8BC1\u5B58\u50A8",text:"1.3.3 \u5BA2\u6237\u7AEF\u51ED\u8BC1\u5B58\u50A8"},{depth:3,slug:"134-\u4F1A\u8BDD\u7ED1\u5B9A",text:"1.3.4 \u4F1A\u8BDD\u7ED1\u5B9A"},{depth:3,slug:"135-\u5BA1\u8BA1\u65E5\u5FD7",text:"1.3.5 \u5BA1\u8BA1\u65E5\u5FD7"},{depth:3,slug:"136-\u9632\u5FA1\u6027\u7F16\u7A0B",text:"1.3.6 \u9632\u5FA1\u6027\u7F16\u7A0B"},{depth:2,slug:"14-\u5BF9ai\u5DE5\u5177\u751F\u6001\u7684\u5F71\u54CD",text:"1.4 \u5BF9AI\u5DE5\u5177\u751F\u6001\u7684\u5F71\u54CD"},{depth:3,slug:"141-\u5DE5\u5177\u884C\u4E3A\u7684\u6807\u51C6\u5316\u63CF\u8FF0",text:"1.4.1 \u5DE5\u5177\u884C\u4E3A\u7684\u6807\u51C6\u5316\u63CF\u8FF0"},{depth:2,slug:"15-\u5F00\u53D1\u8005\u8FC1\u79FB\u6307\u5357",text:"1.5 \u5F00\u53D1\u8005\u8FC1\u79FB\u6307\u5357"},{depth:3,slug:"151-\u4E3B\u8981\u53D8\u66F4\u70B9\u5BF9\u6BD4",text:"1.5.1 \u4E3B\u8981\u53D8\u66F4\u70B9\u5BF9\u6BD4"},{depth:3,slug:"152-\u4EE3\u7801\u8FC1\u79FB\u793A\u4F8B",text:"1.5.2 \u4EE3\u7801\u8FC1\u79FB\u793A\u4F8B"},{depth:1,slug:"2-streamable-http\u7EDF\u4E00\u901A\u4FE1\u534F\u8BAE\u7684\u9769\u547D\u6027\u5347\u7EA7",text:"2. Streamable HTTP\uFF1A\u7EDF\u4E00\u901A\u4FE1\u534F\u8BAE\u7684\u9769\u547D\u6027\u5347\u7EA7"},{depth:3,slug:"21-\u4ECE\u53CC\u7AEF\u70B9\u5230\u5355\u7AEF\u70B9\u7684\u8FDB\u5316\u4E4B\u8DEF",text:"2.1. \u4ECE\u53CC\u7AEF\u70B9\u5230\u5355\u7AEF\u70B9\u7684\u8FDB\u5316\u4E4B\u8DEF"},{depth:3,slug:"211-\u65E7\u7248\u67B6\u6784\u7684\u75DB\u70B9",text:"2.1.1 \u65E7\u7248\u67B6\u6784\u7684\u75DB\u70B9"},{depth:3,slug:"212-streamable-http\u6838\u5FC3\u6280\u672F\u89E3\u6790",text:"2.1.2 Streamable HTTP\u6838\u5FC3\u6280\u672F\u89E3\u6790"},{depth:4,slug:"\u5173\u952E\u6280\u672F\u7279\u5F81",text:"\u5173\u952E\u6280\u672F\u7279\u5F81"},{depth:3,slug:"213-\u6027\u80FD\u63D0\u5347\u4E0E\u7A33\u5B9A\u6027\u4FDD\u969C",text:"2.1.3 \u6027\u80FD\u63D0\u5347\u4E0E\u7A33\u5B9A\u6027\u4FDD\u969C"},{depth:4,slug:"\u7F51\u7EDC\u6548\u7387\u5BF9\u6BD4\u6D4B\u8BD5",text:"\u7F51\u7EDC\u6548\u7387\u5BF9\u6BD4\u6D4B\u8BD5"},{depth:1,slug:"3-json-rpc\u6279\u5904\u7406\u6548\u7387\u9769\u547D\u7684\u534F\u8BAE\u7EA7\u652F\u6301",text:"3. JSON-RPC\u6279\u5904\u7406\uFF1A\u6548\u7387\u9769\u547D\u7684\u534F\u8BAE\u7EA7\u652F\u6301"},{depth:2,slug:"31-\u6279\u5904\u7406\u673A\u5236\u7684\u5B9E\u73B0\u539F\u7406",text:"3.1 \u6279\u5904\u7406\u673A\u5236\u7684\u5B9E\u73B0\u539F\u7406"},{depth:3,slug:"311-\u534F\u8BAE\u5C42\u5F3A\u5236\u8981\u6C42",text:"3.1.1 \u534F\u8BAE\u5C42\u5F3A\u5236\u8981\u6C42"},{depth:2,slug:"32-\u6027\u80FD\u4F18\u5316\u6848\u4F8B\u5206\u6790",text:"3.2 \u6027\u80FD\u4F18\u5316\u6848\u4F8B\u5206\u6790"},{depth:3,slug:"321-\u7F51\u7EDC\u5F00\u9500\u5BF9\u6BD4",text:"3.2.1 \u7F51\u7EDC\u5F00\u9500\u5BF9\u6BD4"},{depth:3,slug:"322-\u670D\u52A1\u7AEF\u5E76\u884C\u5904\u7406",text:"3.2.2 \u670D\u52A1\u7AEF\u5E76\u884C\u5904\u7406"},{depth:1,slug:"4-\u5DE5\u5177\u5143\u6570\u636E\u5B89\u5168\u4E0E\u4F53\u9A8C\u7684\u53CC\u91CD\u8FDB\u5316",text:"4. \u5DE5\u5177\u5143\u6570\u636E\uFF1A\u5B89\u5168\u4E0E\u4F53\u9A8C\u7684\u53CC\u91CD\u8FDB\u5316"},{depth:2,slug:"41-tool-annotations\u67B6\u6784\u89E3\u6790",text:"4.1 Tool Annotations\u67B6\u6784\u89E3\u6790"},{depth:3,slug:"411-\u5143\u6570\u636E\u5206\u7C7B\u4F53\u7CFB",text:"4.1.1 \u5143\u6570\u636E\u5206\u7C7B\u4F53\u7CFB"},{depth:3,slug:"412-\u52A8\u6001\u6743\u9650\u7BA1\u63A7\u6D41\u7A0B",text:"4.1.2 \u52A8\u6001\u6743\u9650\u7BA1\u63A7\u6D41\u7A0B"},{depth:2,slug:"42-\u5B89\u5168\u589E\u5F3A\u5B9E\u8DF5",text:"4.2 \u5B89\u5168\u589E\u5F3A\u5B9E\u8DF5"},{depth:3,slug:"421-\u7834\u574F\u6027\u64CD\u4F5C\u62E6\u622A\u673A\u5236",text:"4.2.1 \u7834\u574F\u6027\u64CD\u4F5C\u62E6\u622A\u673A\u5236"},{depth:3,slug:"422-\u81EA\u52A8\u5316\u7B56\u7565\u751F\u6210",text:"4.2.2 \u81EA\u52A8\u5316\u7B56\u7565\u751F\u6210"},{depth:1,slug:"5-\u667A\u80FD\u8FDB\u5EA6\u901A\u77E5\u4ECE\u6570\u5B57\u5230\u8BED\u4E49\u7684\u8FDB\u5316",text:"5. \u667A\u80FD\u8FDB\u5EA6\u901A\u77E5\uFF1A\u4ECE\u6570\u5B57\u5230\u8BED\u4E49\u7684\u8FDB\u5316"},{depth:2,slug:"51-\u52A8\u6001\u6D88\u606F\u901A\u77E5\u673A\u5236",text:"5.1 \u52A8\u6001\u6D88\u606F\u901A\u77E5\u673A\u5236"},{depth:1,slug:"6\u591A\u6A21\u6001\u6269\u5C55\u97F3\u9891\u6D41\u652F\u6301\u843D\u5730",text:"6.\u591A\u6A21\u6001\u6269\u5C55\uFF1A\u97F3\u9891\u6D41\u652F\u6301\u843D\u5730"},{depth:2,slug:"61-\u97F3\u9891\u534F\u8BAE\u5B9E\u73B0\u65B9\u6848",text:"6.1 \u97F3\u9891\u534F\u8BAE\u5B9E\u73B0\u65B9\u6848"},{depth:1,slug:"7-\u53C2\u6570\u8865\u5168\u5F00\u53D1\u8005\u4F53\u9A8C\u5347\u7EA7",text:"7. \u53C2\u6570\u8865\u5168\uFF1A\u5F00\u53D1\u8005\u4F53\u9A8C\u5347\u7EA7"},{depth:2,slug:"71-\u667A\u80FD\u8865\u5168\u5DE5\u4F5C\u6D41\u7A0B",text:"7.1. \u667A\u80FD\u8865\u5168\u5DE5\u4F5C\u6D41\u7A0B"},{depth:1,slug:"8-\u4F1A\u8BDD\u7BA1\u7406\u957F\u65F6\u4EFB\u52A1\u53EF\u9760\u6027\u4FDD\u969C",text:"8. \u4F1A\u8BDD\u7BA1\u7406\uFF1A\u957F\u65F6\u4EFB\u52A1\u53EF\u9760\u6027\u4FDD\u969C"},{depth:2,slug:"81-\u4F1A\u8BDD\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406",text:"8.1 \u4F1A\u8BDD\u5168\u751F\u547D\u5468\u671F\u7BA1\u7406"},{depth:1,slug:"9-\u603B\u7ED3---\u6784\u5EFA\u4E0B\u4E00\u4EE3ai\u534F\u4F5C\u8303\u5F0F",text:"9. \u603B\u7ED3 - \u6784\u5EFA\u4E0B\u4E00\u4EE3AI\u534F\u4F5C\u8303\u5F0F"},{depth:2,slug:"91-\u5BF9\u5BA2\u6237\u7AEF\u7684\u5F71\u54CD",text:"9.1 \u5BF9\u5BA2\u6237\u7AEF\u7684\u5F71\u54CD"},{depth:2,slug:"92-\u5BF9\u670D\u52A1\u7AEF\u7684\u5F71\u54CD",text:"9.2 \u5BF9\u670D\u52A1\u7AEF\u7684\u5F71\u54CD"},{depth:2,slug:"93-\u5BF9\u5F00\u53D1\u8005\u5DE5\u5177\u94FE\u7684\u91CD\u6784",text:"9.3 \u5BF9\u5F00\u53D1\u8005\u5DE5\u5177\u94FE\u7684\u91CD\u6784"},{depth:2,slug:"94-\u5982\u4F55\u5FEB\u901F\u63A5\u5165\u65B0\u7279\u6027",text:"9.4 \u5982\u4F55\u5FEB\u901F\u63A5\u5165\u65B0\u7279\u6027"}]},t=i((u,h,x)=>{const{layout:k,...s}=n;return s.file=e,s.url=l,d`${p()}${g(o)}`})});export{t as Content,b as __tla,c as compiledContent,t as default,e as file,n as frontmatter,r as getHeadings,a as rawContent,l as url};
