import{c as l,__tla as i}from"./astro-component.CwRucF1h.js";import{r as g,m as c,u as h,__tla as m}from"./constant.CvItjurb.js";import{__tla as u}from"./astro/assets-service.Dd3mQuiC.js";let r,s,e,o,b,p,a,E=Promise.all([(()=>{try{return i}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let t;t=`<p><strong>\u4E00\u3001\u524D\u8A00</strong><br><strong>\u4EC0\u4E48\u662F Prompt Engingering</strong><br>\u63D0\u793A\u5DE5\u7A0B\uFF08Prompt Engingering\uFF09\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u4E0A\u4E0B\u6587\u63D0\u793A\uFF08In-Context Prompting\uFF09\uFF0C\u6307\u7684\u662F\u901A\u8FC7\u7ED3\u6784\u5316\u6587\u672C\u7B49\u65B9\u5F0F\u6765\u5B8C\u5584\u63D0\u793A\u8BCD\uFF0C\u5F15\u5BFCLLM\u8F93\u51FA\u6211\u4EEC\u671F\u671B\u7684\u7ED3\u679C\u3002\u901A\u8FC7\u63D0\u793A\u8BCD\u5DE5\u7A0B\u53EF\u4EE5\u5728\u4E0D\u66F4\u65B0\u6A21\u578B\u6743\u91CD\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BA9LLM\u5B8C\u6210\u4E0D\u540C\u7C7B\u578B\u7684\u4EFB\u52A1\u3002\u9762\u5BF9\u540C\u6837\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E3ALLM\u8BBE\u7F6E\u4E0D\u540C\u7684\u63D0\u793A\u8BCD\uFF0C\u80FD\u591F\u5F97\u5230\u4E0D\u540C\u7684\u56DE\u7B54\u7ED3\u679C\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5BF9Prompt\u7684\u4F18\u5316\u63D0\u5347LLM\u7684\u56DE\u7B54\u7CBE\u5EA6\u3002<br>\u4F8B\u5982\uFF1A<br><img src="https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1724132690545-bec45a9e-7419-4ed5-a684-7e3b5a8646e0.png#clientId=ud4096270-7206-4&#x26;from=paste&#x26;id=u438b6352&#x26;originHeight=357&#x26;originWidth=1233&#x26;originalType=url&#x26;ratio=2&#x26;rotation=0&#x26;showTitle=false&#x26;status=done&#x26;style=none&#x26;taskId=u01899191-aeb1-4631-852c-c2c313f6665&#x26;title=" alt="" referrerpolicy="no-referrer"><br><strong>\u70B9\u51FB\u56FE\u7247\u53EF\u67E5\u770B\u5B8C\u6574\u7535\u5B50\u8868\u683C</strong><br><strong>\u4EC0\u4E48\u662F AI Gateway</strong><br>AI Gateway\u7684\u5B9A\u4E49\u662FAI Native\u7684API Gateway\uFF0C\u662F\u57FA\u4E8EAPI Gateway\u7684\u80FD\u2F12\u6765\u6EE1\u2F9CAI Native\u7684\u9700\u6C42\u3002\u4F8B\u5982\uFF1A<br>\u2022 \u5C06\u4F20\u7EDF\u7684QPS\u9650\u6D41\u6269\u5C55\u5230Token\u9650\u6D41<br>\u2022 \u5C06\u4F20\u7EDF\u7684\u8D1F\u8F7D\u5747\u8861/\u91CD\u8BD5/fallback\u80FD\u529B\u5EF6\u4F38\uFF0C\u652F\u6301\u5BF9\u63A5\u591A\u4E2A\u5927\u6A21\u578B\u5382\u5546API\uFF0C\u63D0\u9AD8\u6574\u4F53\u7A33\u5B9A\u6027<br>\u2022 \u6269\u5C55\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u652F\u6301\u4E0D\u540C\u6A21\u578B\u4E4B\u95F4\u6548\u679C\u7684\u5BF9\u6BD4A/B Test\uFF0C\u4EE5\u53CA\u5BF9\u8BDD\u4E0A\u4E0B\u2F42\u94FE\u8DEFTracing\u7B49<br>Higress (<a href="https://github.com/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress</a>) \u662F\u963F\u2FA5\u4E91\u5F00\u6E90\u7684\u2F00\u6B3EAI Gateway\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4E00\u7AD9\u5F0F\u7684 AI \u63D2\u4EF6\u96C6\u548C\u589E\u5F3A\u540E\u7AEF\u6A21\u578B\u8C03\u5EA6\u5904\u7406\u80FD\u529B\uFF0C\u4F7F\u5F97 AI \u4E0E\u7F51\u5173\u7684\u96C6\u6210\u66F4\u52A0\u4FBF\u6377\u548C\u9AD8\u6548\u3002\u5B98\u65B9\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E93\uFF0C\u6DB5\u76D6 AI\u3001\u6D41\u91CF\u7BA1\u7406\u3001\u5B89\u5168\u9632\u62A4\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u6EE1\u8DB390%\u4EE5\u4E0A\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\u3002\u6B64\u5916\u8FD8\u652F\u6301 Wasm \u63D2\u4EF6\u6269\u5C55\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u7F16\u5199 Wasm \u63D2\u4EF6\uFF0C\u63D2\u4EF6\u66F4\u65B0\u91C7\u7528\u70ED\u63D2\u62D4\u673A\u5236\u5BF9\u6D41\u91CF\u65E0\u635F\u3002<br>\u672C\u6587\u4E3B\u8981\u57FA\u4E8E Higress \u7684 Wasm \u63D2\u4EF6\u673A\u5236\uFF0C\u4F7F\u7528 Go \u8FDB\u884C\u63D2\u4EF6\u7684\u6574\u4F53\u5F00\u53D1\u548C\u80FD\u529B\u589E\u5F3A\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\uFF1A<a href="https://higress.io/docs/latest/plugins/custom/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.io/docs/latest/plugins/custom/</a></p>
<p><strong>\u4E8C\u3001Geo-IP\u63D2\u4EF6\u4E0EAI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7684\u7ED3\u5408\u4E0E\u4F7F\u7528</strong><br><strong>\u63D2\u4EF6\u53C2\u6570\u914D\u7F6E</strong><br><strong>\u914D\u7F6EGeo-IP\u63D2\u4EF6</strong><br>\u542F\u7528Geo-IP\u63D2\u4EF6\uFF08\u76EE\u524D\u4EC5\u652F\u6301IPv4\uFF09\uFF0C\u5E76\u914D\u7F6E\uFF1A</p>






<table><thead><tr><th>Bash<br>ipProtocal: \u201Cipv4\u201D</th></tr></thead></table>
<p><strong>\u914D\u7F6EAI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6</strong><br>\u542F\u7528AI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\uFF0C\u5728\u914D\u7F6E\u7684 content \u4E2D\u901A\u8FC7\u53D8\u91CF\uFF0C\u6CE8\u5165\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF1A</p>






<table><thead><tr><th>Bash<br>prepend:<br>- content: \u201C\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}\u201D<br>  role: \u201Csystem\u201D<br>append:<br>- content: \u201C\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE\u201D<br>  role: \u201Cuser\u201D</th></tr></thead></table>
<p><strong>\u63D2\u4EF6\u6548\u679C</strong><br>\u793A\u4F8B\u8BF7\u6C42\u2F00\uFF1A</p>






<table><thead><tr><th>Bash<br>curl \u2018http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions\u2019 \\<br>-H \u2018Accept: application/json, text/event-stream\u2019 \\<br>-H \u2018Content-Type: application/json\u2019 \\<br>\u2014data-raw \u2019{<br>  \u201Cmodel\u201D:\u201Cqwen-long\u201D,<br>  \u201Cfrequency_penalty\u201D:0,<br>  \u201Cmax_tokens\u201D:800,<br>  \u201Cstream\u201D:false
,<br>  \u201Cpresence_penalty\u201D:0,<br>  \u201Ctemperature\u201D:0.7,<br>  \u201Ctop_p\u201D:0.95,<br>  \u201Cmessages\u201D:[{\u201Crole\u201D:\u201Cuser\u201D,\u201Ccontent\u201D:\u201C\u9644\u8FD1\u6709\u4EC0\u4E48\u65C5\u6E38\u666F\u70B9\uFF1F\u201D}]<br> }\u2018</th></tr></thead></table>
<p>\u793A\u4F8B\u54CD\u5E94\u4E00\uFF1A</p>






<table><thead><tr><th>Bash<br>{\u2026\u201Ccontent\u201D: \u201C\u9644\u8FD1\u70ED\u95E8\u7684\u65C5\u6E38\u666F\u70B9\u6709\u6545\u5BAB\u3001\u5929\u5B89\u95E8\u5E7F\u573A\u3001\u606D\u738B\u5E9C\u7B49\u3002\u60A8\u5BF9\u54EA\u4E2A\u666F\u70B9\u66F4\u611F\u5174\u8DA3\u5462\uFF1F\u201D\u2026}</th></tr></thead></table>
<p>\u793A\u4F8B\u8BF7\u6C42\u4E8C\uFF1A</p>






<table><thead><tr><th>Bash<br>curl \u2018http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions\u2019 \\<br>-H \u2018Accept: application/json, text/event-stream\u2019 \\<br>-H \u2018Content-Type: application/json\u2019 \\<br>\u2014data-raw \u2019{<br>  \u201Cmodel\u201D:\u201Cqwen-long\u201D,<br>  \u201Cfrequency_penalty\u201D:0,<br>  \u201Cmax_tokens\u201D:800,<br>  \u201Cstream\u201D:false
,<br>  \u201Cpresence_penalty\u201D:0,<br>  \u201Ctemperature\u201D:0.7,<br>  \u201Ctop_p\u201D:0.95,<br>  \u201Cmessages\u201D:[{\u201Crole\u201D:\u201Cuser\u201D,\u201Ccontent\u201D:\u201C\u600E\u4E48\u53BB\u9999\u6E2F?\u201D}]<br> }\u2018</th></tr></thead></table>
<p>\u793A\u4F8B\u54CD\u5E94\u4E8C\uFF1A</p>






<table><thead><tr><th>Bash<br>{\u2026\u201Ccontent\u201D: \u201C\u4ECE\u60A8\u6240\u5728\u7684\u4F4D\u7F6E\uFF08\u5317\u4EAC\u5E02\uFF09\u524D\u5F80\u9999\u6E2F\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4E58\u5750\u98DE\u673A\u3001\u706B\u8F66\u6216\u8005\u957F\u9014\u6C7D\u8F66\u7B49\u591A\u79CD\u4EA4\u901A\u65B9\u5F0F\u3002\\n\\n1. <strong>\u98DE\u673A</strong>\uFF1A\u4ECE\u5317\u4EAC\u9996\u90FD\u56FD\u9645\u673A\u573A\u51FA\u53D1\uFF0C\u6709\u591A\u5BB6\u822A\u7A7A\u516C\u53F8\u63D0\u4F9B\u76F4\u98DE\u9999\u6E2F\u7684\u670D\u52A1\u3002\\n2. <strong>\u9AD8\u94C1</strong>\uFF1A\u5317\u4EAC\u897F\u7AD9\u6709\u76F4\u8FBE\u9999\u6E2F\u897F\u4E5D\u9F99\u7AD9\u7684\u9AD8\u901F\u5217\u8F66\u3002\\n3. <strong>\u957F\u9014\u6C7D\u8F66</strong>\uFF1A\u867D\u7136\u4E0D\u662F\u4E3B\u6D41\u65B9\u5F0F\uFF0C\u4F46\u4E5F\u6709\u90E8\u5206\u957F\u9014\u6C7D\u8F66\u7EBF\u8DEF\u8FDE\u63A5\u4E24\u5730\u3002\\n\\n\u60A8\u8BA1\u5212\u4EC0\u4E48\u65F6\u5019\u51FA\u53D1\u5462\uFF1F\u4E0D\u540C\u7684\u51FA\u884C\u65E5\u671F\u53EF\u80FD\u4F1A\u6709\u4E0D\u540C\u7684\u7968\u52A1\u60C5\u51B5\u548C\u4EF7\u683C\u3002\u201D\u2026}</th></tr></thead></table>
<p>\u793A\u4F8B\u8BF7\u6C42\u4E09\uFF1A</p>






<table><thead><tr><th>Bash<br>curl \u2018http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions\u2019 \\<br>-H \u2018Accept: application/json, text/event-stream\u2019 \\<br>-H \u2018Content-Type: application/json\u2019 \\<br>\u2014data-raw \u2019{<br>  \u201Cmodel\u201D:\u201Cqwen-long\u201D,<br>  \u201Cfrequency_penalty\u201D:0,<br>  \u201Cmax_tokens\u201D:800,<br>  \u201Cstream\u201D:false
,<br>  \u201Cpresence_penalty\u201D:0,<br>  \u201Ctemperature\u201D:0.7,<br>  \u201Ctop_p\u201D:0.95,<br>  \u201Cmessages\u201D:[{\u201Crole\u201D:\u201Cuser\u201D,\u201Ccontent\u201D:\u201C\u7279\u8272\u5C0F\u5403\u6709\u54EA\u4E9B?\u201D}]<br> }\u2018</th></tr></thead></table>
<p>\u793A\u4F8B\u54CD\u5E94\u4E09\uFF1A</p>






<table><thead><tr><th>Bash<br>{\u2026\u201Ccontent\u201D: \u201C\u6211\u53EF\u4EE5\u5E2E\u60A8\u5927\u6982\u4ECB\u7ECD\u4E00\u4E0B\u5317\u4EAC\u7684\u4E00\u4E9B\u7279\u8272\u5C0F\u5403\uFF1A\\n\\n1. <strong>\u8C46\u6C41\u513F\u914D\u7126\u5708</strong>\uFF1A\u5317\u4EAC\u7684\u4F20\u7EDF\u5C0F\u5403\u4E4B\u4E00\uFF0C\u8C46\u6C41\u513F\u53E3\u611F\u72EC\u7279\uFF0C\u642D\u914D\u7126\u5708\u98DF\u7528\u3002\\n2. <strong>\u70B8\u9171\u9762</strong>\uFF1A\u5317\u4EAC\u975E\u5E38\u6709\u540D\u7684\u9762\u6761\u5403\u6CD5\uFF0C\u9762\u6761\u901A\u5E38\u62CC\u4E0A\u7279\u5236\u7684\u70B8\u9171\u4EE5\u53CA\u5404\u79CD\u852C\u83DC\u4E1D\u3002\\n3. <strong>\u5364\u716E\u706B\u70E7</strong>\uFF1A\u4EE5\u732A\u5185\u810F\u548C\u8C46\u8150\u5E72\u4E3A\u4E3B\u8981\u539F\u6599\uFF0C\u7096\u716E\u800C\u6210\uFF0C\u6C64\u5473\u9187\u539A\uFF0C\u662F\u8001\u5317\u4EAC\u7684\u4F20\u7EDF\u98DF\u54C1\u3002\\n4. <strong>\u7092\u809D</strong>\uFF1A\u4E00\u79CD\u7C7B\u4F3C\u5364\u716E\u7684\u5C0F\u5403\uFF0C\u4F46\u662F\u4E3B\u8981\u7528\u732A\u809D\u548C\u5927\u80A0\uFF0C\u52A0\u4E0A\u849C\u6CE5\u7B49\u8C03\u5473\u54C1\u3002\\n5. <strong>\u827E\u7A9D\u7A9D</strong>\uFF1A\u7CEF\u7C73\u5236\u6210\u7684\u751C\u98DF\uFF0C\u5916\u76AE\u8F6F\u7CEF\uFF0C\u91CC\u9762\u5305\u88F9\u7740\u7EA2\u8C46\u6C99\u6216\u5176\u4ED6\u751C\u9985\u3002\\n6. <strong>\u7CD6\u846B\u82A6</strong>\uFF1A\u4E32\u8D77\u6765\u7684\u5C71\u6942\u679C\uFF0C\u8868\u9762\u88F9\u4E0A\u4E00\u5C42\u7CD6\u6D46\uFF0C\u9178\u751C\u53EF\u53E3\uFF0C\u5F88\u53D7\u6B22\u8FCE\u3002\\n\\n\u60A8\u5BF9\u54EA\u4E00\u79CD\u5C0F\u5403\u6BD4\u8F83\u611F\u5174\u8DA3\u5462\uFF1F\u6216\u8005\u60A8\u60F3\u4E86\u89E3\u66F4\u591A\u6709\u5173\u8FD9\u4E9B\u5C0F\u5403\u7684\u4FE1\u606F\u5417\uFF1F\u201D\u2026}</th></tr></thead></table>
<p><strong>\u4E09\u3001\u5B9E\u73B0\u539F\u7406</strong><br>1. Geo-IP\u63D2\u4EF6\u57FA\u4E8E\u7528\u6237 IP \u83B7\u53D6\u7528\u6237\u76F8\u5173\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u5982\uFF1A\u56FD\u5BB6\u3001\u7701\u4EFD\u3001\u57CE\u5E02\u7B49<br>2. \u57FA\u4E8E Higress \u7684 Property \u673A\u5236\u5B9E\u73B0\u8DE8\u63D2\u4EF6\u95F4\u7684\u6570\u636E\u4F20\u9012\uFF0C\u5C06Geo-IP\u63D2\u4EF6\u83B7\u53D6\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u4F20\u9012\u7ED9AI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6<br>3. AI\u63D0\u793A\u8BCD\u63D2\u4EF6\u57FA\u4E8E\u7528\u6237\u914D\u7F6E\u7684\u63D0\u793A\u8BCD\u6A21\u677F\u3001\u7528\u6237\u8F93\u5165\uFF0C\u4EE5\u53CA\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u751F\u6210\u589E\u5F3A\u540E\u7684\u7528\u6237\u8BF7\u6C42\u53D1\u9001\u7ED9 LLM<br><strong>Geo-IP \u63D2\u4EF6\u5B9E\u73B0</strong><br>\u7528\u6237IP\u7684\u83B7\u53D6\uFF1A<br>\u5F53\u8BF7\u6C42\u8FDB\u5165onHttpRequestHeader( ) \u51FD\u6570\u65F6\uFF0C\u5982\u679C\u7528\u6237\u662F\u76F4\u63A5\u8FDE\u63A5Higress\uFF0C\u5C31\u53D6 remote_address \u4F5C\u4E3A\u7528\u6237IP\u3002\u5982\u679C\u7528\u6237\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u8BBF\u95EEHigress\uFF0C\u8BF7\u6C42\u91CC\u5305\u542B\u8BF7\u6C42\u5934X-forwarded-for\uFF0C\u5C31\u89E3\u6790XFF\u5934\u53D6\u7B2C\u4E00\u4E2AIP\u5730\u5740\u4F5C\u4E3A\u539F\u59CB\u7528\u6237IP\u3002</p>
<p>\u79BB\u7EBFIP\u5730\u5740\u5B9A\u4F4D\u5E93\u5185\u5B58\u4F18\u5316\uFF1A<br>Geo IP \u63D2\u4EF6\u5185\u7F6E\u79BB\u7EBFIP\u5730\u5740\u5B9A\u4F4D\u5E93\uFF0C\u6570\u636E\u6765\u6E90\uFF1A<a href="https://gitee.com/lionsoul/ip2region%E3%80%82%E7%94%B1%E4%BA%8E%E9%BB%98%E8%AE%A4%E6%8F%90%E4%BE%9B%E7%9A%84%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F%E4%B8%BA%EF%BC%9A%E8%B5%B7%E5%A7%8BIP%E5%9C%B0%E5%9D%80%7C%E7%BB%93%E6%9D%9FIP%E5%9C%B0%E5%9D%80%7C%E5%9B%BD%E5%AE%B6%7C%E5%8C%BA%E5%9F%9F%7C%E7%9C%81%E4%BB%BD%7C%E5%9F%8E%E5%B8%82%7CISP%EF%BC%8C%E7%9B%B4%E6%8E%A5%E5%AF%B9%E6%95%B0%E6%8D%AE%E8%BF%9B%E8%A1%8C%E5%AD%98%E5%82%A8%E5%AD%98%E5%9C%A8%E8%BE%83%E5%A4%A7%E7%9A%84%E5%86%85%E5%AD%98%E5%BC%80%E9%94%80%E3%80%82%E5%9B%A0%E6%AD%A4%E9%A6%96%E5%85%88%E5%AF%B9%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E8%BF%9B%E8%A1%8C%E5%A4%84%E7%90%86%EF%BC%8C%E5%B0%86%E5%8E%9F%E5%A7%8B%E6%95%B0%E6%8D%AE%E6%8B%86%E5%88%86%E4%B8%BA%E5%A4%9A%E4%B8%AA%EF%BC%9AIP%E5%9C%B0%E5%9D%80/%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81%7C%E5%9B%BD%E5%AE%B6%7C%E5%8C%BA%E5%9F%9F%7C%E7%9C%81%E4%BB%BD%7C%E5%9F%8E%E5%B8%82%7CISP" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://gitee.com/lionsoul/ip2region\u3002\u7531\u4E8E\u9ED8\u8BA4\u63D0\u4F9B\u7684\u6587\u4EF6\u683C\u5F0F\u4E3A\uFF1A\u8D77\u59CBIP\u5730\u5740|\u7ED3\u675FIP\u5730\u5740|\u56FD\u5BB6|\u533A\u57DF|\u7701\u4EFD|\u57CE\u5E02|ISP\uFF0C\u76F4\u63A5\u5BF9\u6570\u636E\u8FDB\u884C\u5B58\u50A8\u5B58\u5728\u8F83\u5927\u7684\u5185\u5B58\u5F00\u9500\u3002\u56E0\u6B64\u9996\u5148\u5BF9\u539F\u59CB\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u5C06\u539F\u59CB\u6570\u636E\u62C6\u5206\u4E3A\u591A\u4E2A\uFF1AIP\u5730\u5740/\u5B50\u7F51\u63A9\u7801|\u56FD\u5BB6|\u533A\u57DF|\u7701\u4EFD|\u57CE\u5E02|ISP</a> \u7684\u683C\u5F0F\u3002\u7136\u540E\u57FA\u4E8E\u52A0\u5DE5\u540E\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u57FA\u6570\u6811\uFF08Radix Tree\uFF09\u7684\u6570\u636E\u7ED3\u6784\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u5B58\u50A8\uFF0C\u6700\u7EC8\u5728\u964D\u4F4E\u5185\u5B58\u5360\u7528\u7684\u540C\u65F6\uFF0C\u4FDD\u8BC1\u4E86IP\u5730\u5740\u7684\u67E5\u627E\u6548\u7387\u3002</p>
<p>\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u7684\u4F20\u9012\uFF1A<br>\u8D77\u521D\u5E0C\u671B\u901A\u8FC7 setContext \u8FDB\u884C\u4FE1\u606F\u7684\u4F20\u9012\u3002\u540E\u6765\u5728\u548C Higress Maintainer \u7684\u6C9F\u901A\u4E2D\u4E86\u89E3\u5230 Context \u6CA1\u6709\u529E\u6CD5\u8DE8\u63D2\u4EF6\u4F20\u9012\u4FE1\u606F\u3002\u9700\u8981\u901A\u8FC7 setProperty \u8BBE\u7F6E\u5230 metadata \u4E2D\uFF0C\u5176\u4ED6\u63D2\u4EF6\u901A\u8FC7 getProperty\u83B7\u53D6\u3002\u5728\u6B64\u611F\u8C22 johnlanni \u7684\u70ED\u5FC3\u89E3\u7B54\u548C\u5E2E\u52A9\u3002</p>
<p><strong>AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u589E\u5F3A\u5B9E\u73B0</strong><br>\u7528\u6237\u914D\u7F6E\uFF1A</p>






<table><thead><tr><th>Bash<br>prepend:<br>- role: system<br>  content: \u201C\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}\u201C</th></tr></thead></table>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A</p>






<table><thead><tr><th>Bash<br>curl <a href="http://localhost/test" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost/test</a> \\<br>-H \u201Ccontent-type: application/json\u201D \\<br>-d \u2019{<br>  \u201Cmodel\u201D:\u201Cgpt-3.5-turbo\u201D,<br>  \u201Cmessages\u201D: [<br>    {<br>      \u201Crole\u201D: \u201Cuser\u201D,<br>      \u201Ccontent\u201D:\u201C\u660E\u5929\u5929\u6C14\u600E\u4E48\u6837\u201D<br>    }<br>  ]<br>}\u2018</th></tr></thead></table>
<p>\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A</p>






<table><thead><tr><th>Bash<br>curl <a href="http://localhost/test" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost/test</a> \\<br>-H \u201Ccontent-type: application/json\u201D \\<br>-d \u2019{<br>  \u201Cmodel\u201D: \u201Cgpt-3.5-turbo\u201D,<br>  \u201Cmessages\u201D: [<br>    {<br>      \u201Crole\u201D: \u201Csystem\u201D,<br>      \u201Ccontent\u201D: \u201C\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\u4E2D\u56FD\uFF0C\u7701\u4EFD\uFF1A\u6D59\u6C5F, \u57CE\u5E02\uFF1A\u676D\u5DDE\u201D<br>    },<br>    {<br>      \u201Crole\u201D: \u201Cuser\u201D,<br>      \u201Ccontent\u201D: \u201C\u660E\u5929\u5929\u6C14\u600E\u4E48\u6837\u201D<br>    }<br>  ]<br>}\u2018</th></tr></thead></table>
<p>\u5728\u8BBE\u7F6E\u63D0\u793A\u8BCD\u65F6\uFF0C\u4E00\u822C\u5C06\u63D0\u793A\u8BCD\u8BBE\u7F6E\u4E3A user \u6216 system \u7C7B\u578B<br>\u2022 user\uFF1Auser\u89D2\u8272\uFF0C\u4EE3\u8868\u5F53\u524D\u7528\u6237\u3002\u5F53\u7528\u6237\u5411 LLM \u63D0\u95EE\u6216\u4E0E\u5176\u4EA4\u4E92\u65F6\uFF0C\u8F93\u5165\u7684\u5185\u5BB9\u90FD\u6807\u8BB0\u4E3A user\u3002<br>\u2022 system\uFF1Asystem\u89D2\u8272\uFF0C\u4EE3\u8868\u7CFB\u7EDF\u7EA7\u7684\u6D88\u606F\u6216\u901A\u77E5\u3002\u7528\u4E8E\u5B58\u653E\u63D0\u95EE\u7684\u76F8\u5173\u80CC\u666F\u4FE1\u606F\u6216\u4E00\u4E9B\u9884\u7F6E\u89C4\u5219\u3002\u6BD4\u5982\uFF0C\u6211\u4EEC\u5728\u4E00\u4E2A\u201C\u5199\u5C0F\u7EA2\u4E66\u6587\u6848\u201D\u7684\u573A\u666F\u4E2D\u4E0E LLM \u5BF9\u8BDD\u3002\u90A3\u4E48\u201C\u5199\u5C0F\u7EA2\u4E66\u6587\u6848\u201D\u8FD9\u4E2A\u573A\u666F\u4E2D\u5C31\u4F1A\u63D0\u524D\u9884\u7F6E\u4E00\u4E9B\u89C4\u5219\uFF08\u6BD4\u5982\u5B57\u6570\u8981\u6C42\u3001emoji\u56FE\u50CF\u7B49\u7B49\uFF09\u3002\u8FD9\u4E9B\u89C4\u5219\u5C31\u662Fsystem\u3002<br><strong>\u56DB\u3001\u603B\u7ED3</strong><br>\u672C\u2F42\u5BF9 Prompt \u7684\u4F7F\u7528\u65B9\u5F0F\u8FDB\u884C\u4E86\u7B80\u5355\u4ECB\u7ECD\uFF0C\u8BA9\u5927\u5BB6\u4E86\u89E3\u5230 Prompt \u5BF9\u4E8E LLM \u7684\u91CD\u8981\u6027\u3002\u5E76\u5C1D\u8BD5\u5728Prompt\u4E2D\u7ED3\u5408\u7528\u6237 Geo IP \u4FE1\u606F\uFF0C\u5B9E\u73B0 LLM \u7684\u4E2A\u6027\u5316\u56DE\u590D\uFF0C\u63D0\u5347\u95EE\u7B54\u7684\u51C6\u786E\u5EA6\u3002\u5E0C\u671B\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF01<br>\u63D2\u4EF6\u7684\u5B9E\u73B0\u5DF2\u7ECF\u63D0\u4EA4PR\u7ED9Higress\u5F00\u6E90\u793E\u533A\uFF0C\u53EF\u4EE5\u5230\u8FD9\u91CC\u67E5\u770B\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0\uFF1A <br>Geo-IP\u63D2\u4EF6\u5B9E\u73B0\uFF1A<a href="https://github.com/alibaba/higress/pull/1172" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/pull/1172</a><br>AI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u589E\u5F3A\u5B9E\u73B0\uFF1A<br><a href="https://github.com/alibaba/higress/pull/1228" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/pull/1228</a></p>
<p>\u4E5F\u6B22\u8FCE\u2F24\u5BB6\u63D0\u51FA\u5B9D\u8D35\u5EFA\u8BAE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u4E0A\u2FAFPR\u4E2D\u8BC4\u8BBA\uFF0C\u6216\u8005\u5728Higress\u793E\u533A\u4EA4\u6D41\u7FA4\uFF08\u9489\u9489\u7FA4\u53F7\uFF1A 30735012403\uFF09\u2FA5\u2F00\u8D77\u6C9F\u901A\u3002</p>`,o={title:"GeoIP \u7ED3\u5408 Prompt \u8D4B\u80FD LLM\uFF1A\u57FA \u4E8E AI \u7F51\u5173\u5B9E\u73B0\u4E2A\u6027\u5316\u4E0E\u7CBE\u786E\u5316\u95EE\u7B54",description:"GeoIP \u7ED3\u5408 Prompt \u8D4B\u80FD LLM\uFF1A\u57FA \u4E8E AI \u7F51\u5173\u5B9E\u73B0\u4E2A\u6027\u5316\u4E0E\u7CBE\u786E\u5316\u95EE\u7B54",date:"2024-08-28",category:"article",keywords:["Higress"],authors:"CH3CHO"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_rf96wdxo9lctgng8.md",a=void 0,p=function(){return`
**\u4E00\u3001\u524D\u8A00**<br />**\u4EC0\u4E48\u662F Prompt Engingering**<br />\u63D0\u793A\u5DE5\u7A0B\uFF08Prompt Engingering\uFF09\uFF0C\u4E5F\u88AB\u79F0\u4E3A\u4E0A\u4E0B\u6587\u63D0\u793A\uFF08In-Context Prompting\uFF09\uFF0C\u6307\u7684\u662F\u901A\u8FC7\u7ED3\u6784\u5316\u6587\u672C\u7B49\u65B9\u5F0F\u6765\u5B8C\u5584\u63D0\u793A\u8BCD\uFF0C\u5F15\u5BFCLLM\u8F93\u51FA\u6211\u4EEC\u671F\u671B\u7684\u7ED3\u679C\u3002\u901A\u8FC7\u63D0\u793A\u8BCD\u5DE5\u7A0B\u53EF\u4EE5\u5728\u4E0D\u66F4\u65B0\u6A21\u578B\u6743\u91CD\u7684\u60C5\u51B5\u4E0B\uFF0C\u8BA9LLM\u5B8C\u6210\u4E0D\u540C\u7C7B\u578B\u7684\u4EFB\u52A1\u3002\u9762\u5BF9\u540C\u6837\u4E00\u4E2A\u95EE\u9898\uFF0C\u4E3ALLM\u8BBE\u7F6E\u4E0D\u540C\u7684\u63D0\u793A\u8BCD\uFF0C\u80FD\u591F\u5F97\u5230\u4E0D\u540C\u7684\u56DE\u7B54\u7ED3\u679C\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5BF9Prompt\u7684\u4F18\u5316\u63D0\u5347LLM\u7684\u56DE\u7B54\u7CBE\u5EA6\u3002<br />\u4F8B\u5982\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1724132690545-bec45a9e-7419-4ed5-a684-7e3b5a8646e0.png#clientId=ud4096270-7206-4&from=paste&id=u438b6352&originHeight=357&originWidth=1233&originalType=url&ratio=2&rotation=0&showTitle=false&status=done&style=none&taskId=u01899191-aeb1-4631-852c-c2c313f6665&title=)<br />**\u70B9\u51FB\u56FE\u7247\u53EF\u67E5\u770B\u5B8C\u6574\u7535\u5B50\u8868\u683C**<br />**\u4EC0\u4E48\u662F AI Gateway**<br />AI Gateway\u7684\u5B9A\u4E49\u662FAI Native\u7684API Gateway\uFF0C\u662F\u57FA\u4E8EAPI Gateway\u7684\u80FD\u2F12\u6765\u6EE1\u2F9CAI Native\u7684\u9700\u6C42\u3002\u4F8B\u5982\uFF1A<br />\u2022 \u5C06\u4F20\u7EDF\u7684QPS\u9650\u6D41\u6269\u5C55\u5230Token\u9650\u6D41<br />\u2022 \u5C06\u4F20\u7EDF\u7684\u8D1F\u8F7D\u5747\u8861/\u91CD\u8BD5/fallback\u80FD\u529B\u5EF6\u4F38\uFF0C\u652F\u6301\u5BF9\u63A5\u591A\u4E2A\u5927\u6A21\u578B\u5382\u5546API\uFF0C\u63D0\u9AD8\u6574\u4F53\u7A33\u5B9A\u6027<br />\u2022 \u6269\u5C55\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u652F\u6301\u4E0D\u540C\u6A21\u578B\u4E4B\u95F4\u6548\u679C\u7684\u5BF9\u6BD4A/B Test\uFF0C\u4EE5\u53CA\u5BF9\u8BDD\u4E0A\u4E0B\u2F42\u94FE\u8DEFTracing\u7B49<br />Higress (https://github.com/alibaba/higress) \u662F\u963F\u2FA5\u4E91\u5F00\u6E90\u7684\u2F00\u6B3EAI Gateway\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E86\u4E00\u7AD9\u5F0F\u7684 AI \u63D2\u4EF6\u96C6\u548C\u589E\u5F3A\u540E\u7AEF\u6A21\u578B\u8C03\u5EA6\u5904\u7406\u80FD\u529B\uFF0C\u4F7F\u5F97 AI \u4E0E\u7F51\u5173\u7684\u96C6\u6210\u66F4\u52A0\u4FBF\u6377\u548C\u9AD8\u6548\u3002\u5B98\u65B9\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u63D2\u4EF6\u5E93\uFF0C\u6DB5\u76D6 AI\u3001\u6D41\u91CF\u7BA1\u7406\u3001\u5B89\u5168\u9632\u62A4\u7B49\u5E38\u7528\u529F\u80FD\uFF0C\u6EE1\u8DB390%\u4EE5\u4E0A\u7684\u4E1A\u52A1\u573A\u666F\u9700\u6C42\u3002\u6B64\u5916\u8FD8\u652F\u6301 Wasm \u63D2\u4EF6\u6269\u5C55\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u7F16\u5199 Wasm \u63D2\u4EF6\uFF0C\u63D2\u4EF6\u66F4\u65B0\u91C7\u7528\u70ED\u63D2\u62D4\u673A\u5236\u5BF9\u6D41\u91CF\u65E0\u635F\u3002<br />\u672C\u6587\u4E3B\u8981\u57FA\u4E8E Higress \u7684 Wasm \u63D2\u4EF6\u673A\u5236\uFF0C\u4F7F\u7528 Go \u8FDB\u884C\u63D2\u4EF6\u7684\u6574\u4F53\u5F00\u53D1\u548C\u80FD\u529B\u589E\u5F3A\u3002\u5177\u4F53\u53EF\u4EE5\u53C2\u8003\uFF1Ahttps://higress.io/docs/latest/plugins/custom/

**\u4E8C\u3001Geo-IP\u63D2\u4EF6\u4E0EAI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7684\u7ED3\u5408\u4E0E\u4F7F\u7528**<br />**\u63D2\u4EF6\u53C2\u6570\u914D\u7F6E**<br />**\u914D\u7F6EGeo-IP\u63D2\u4EF6**<br />\u542F\u7528Geo-IP\u63D2\u4EF6\uFF08\u76EE\u524D\u4EC5\u652F\u6301IPv4\uFF09\uFF0C\u5E76\u914D\u7F6E\uFF1A

| Bash<br />ipProtocal: "ipv4" |
| --- |

**\u914D\u7F6EAI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6**<br />\u542F\u7528AI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\uFF0C\u5728\u914D\u7F6E\u7684 content \u4E2D\u901A\u8FC7\u53D8\u91CF\uFF0C\u6CE8\u5165\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF1A

| Bash<br />prepend:<br />- content: "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}"<br />  role: "system"<br />append:<br />- content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"<br />  role: "user" |
| --- |

**\u63D2\u4EF6\u6548\u679C**<br />\u793A\u4F8B\u8BF7\u6C42\u2F00\uFF1A

| Bash<br />curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\\\<br />-H 'Accept: application/json, text/event-stream' \\\\<br />-H 'Content-Type: application/json' \\\\<br />--data-raw '{<br />  "model":"qwen-long",<br />  "frequency_penalty":0,<br />  "max_tokens":800,<br />  "stream":false,<br />  "presence_penalty":0,<br />  "temperature":0.7,<br />  "top_p":0.95,<br />  "messages":[{"role":"user","content":"\u9644\u8FD1\u6709\u4EC0\u4E48\u65C5\u6E38\u666F\u70B9\uFF1F"}]<br /> }' |
| --- |

\u793A\u4F8B\u54CD\u5E94\u4E00\uFF1A

| Bash<br />{..."content": "\u9644\u8FD1\u70ED\u95E8\u7684\u65C5\u6E38\u666F\u70B9\u6709\u6545\u5BAB\u3001\u5929\u5B89\u95E8\u5E7F\u573A\u3001\u606D\u738B\u5E9C\u7B49\u3002\u60A8\u5BF9\u54EA\u4E2A\u666F\u70B9\u66F4\u611F\u5174\u8DA3\u5462\uFF1F"...} |
| --- |


\u793A\u4F8B\u8BF7\u6C42\u4E8C\uFF1A

| Bash<br />curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\\\<br />-H 'Accept: application/json, text/event-stream' \\\\<br />-H 'Content-Type: application/json' \\\\<br />--data-raw '{<br />  "model":"qwen-long",<br />  "frequency_penalty":0,<br />  "max_tokens":800,<br />  "stream":false,<br />  "presence_penalty":0,<br />  "temperature":0.7,<br />  "top_p":0.95,<br />  "messages":[{"role":"user","content":"\u600E\u4E48\u53BB\u9999\u6E2F?"}]<br /> }' |
| --- |

\u793A\u4F8B\u54CD\u5E94\u4E8C\uFF1A

| Bash<br />{..."content": "\u4ECE\u60A8\u6240\u5728\u7684\u4F4D\u7F6E\uFF08\u5317\u4EAC\u5E02\uFF09\u524D\u5F80\u9999\u6E2F\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4E58\u5750\u98DE\u673A\u3001\u706B\u8F66\u6216\u8005\u957F\u9014\u6C7D\u8F66\u7B49\u591A\u79CD\u4EA4\u901A\u65B9\u5F0F\u3002\\\\n\\\\n1. **\u98DE\u673A**\uFF1A\u4ECE\u5317\u4EAC\u9996\u90FD\u56FD\u9645\u673A\u573A\u51FA\u53D1\uFF0C\u6709\u591A\u5BB6\u822A\u7A7A\u516C\u53F8\u63D0\u4F9B\u76F4\u98DE\u9999\u6E2F\u7684\u670D\u52A1\u3002\\\\n2. **\u9AD8\u94C1**\uFF1A\u5317\u4EAC\u897F\u7AD9\u6709\u76F4\u8FBE\u9999\u6E2F\u897F\u4E5D\u9F99\u7AD9\u7684\u9AD8\u901F\u5217\u8F66\u3002\\\\n3. **\u957F\u9014\u6C7D\u8F66**\uFF1A\u867D\u7136\u4E0D\u662F\u4E3B\u6D41\u65B9\u5F0F\uFF0C\u4F46\u4E5F\u6709\u90E8\u5206\u957F\u9014\u6C7D\u8F66\u7EBF\u8DEF\u8FDE\u63A5\u4E24\u5730\u3002\\\\n\\\\n\u60A8\u8BA1\u5212\u4EC0\u4E48\u65F6\u5019\u51FA\u53D1\u5462\uFF1F\u4E0D\u540C\u7684\u51FA\u884C\u65E5\u671F\u53EF\u80FD\u4F1A\u6709\u4E0D\u540C\u7684\u7968\u52A1\u60C5\u51B5\u548C\u4EF7\u683C\u3002"...} |
| --- |


\u793A\u4F8B\u8BF7\u6C42\u4E09\uFF1A

| Bash<br />curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\\\<br />-H 'Accept: application/json, text/event-stream' \\\\<br />-H 'Content-Type: application/json' \\\\<br />--data-raw '{<br />  "model":"qwen-long",<br />  "frequency_penalty":0,<br />  "max_tokens":800,<br />  "stream":false,<br />  "presence_penalty":0,<br />  "temperature":0.7,<br />  "top_p":0.95,<br />  "messages":[{"role":"user","content":"\u7279\u8272\u5C0F\u5403\u6709\u54EA\u4E9B?"}]<br /> }' |
| --- |

\u793A\u4F8B\u54CD\u5E94\u4E09\uFF1A

| Bash<br />{..."content": "\u6211\u53EF\u4EE5\u5E2E\u60A8\u5927\u6982\u4ECB\u7ECD\u4E00\u4E0B\u5317\u4EAC\u7684\u4E00\u4E9B\u7279\u8272\u5C0F\u5403\uFF1A\\\\n\\\\n1. **\u8C46\u6C41\u513F\u914D\u7126\u5708**\uFF1A\u5317\u4EAC\u7684\u4F20\u7EDF\u5C0F\u5403\u4E4B\u4E00\uFF0C\u8C46\u6C41\u513F\u53E3\u611F\u72EC\u7279\uFF0C\u642D\u914D\u7126\u5708\u98DF\u7528\u3002\\\\n2. **\u70B8\u9171\u9762**\uFF1A\u5317\u4EAC\u975E\u5E38\u6709\u540D\u7684\u9762\u6761\u5403\u6CD5\uFF0C\u9762\u6761\u901A\u5E38\u62CC\u4E0A\u7279\u5236\u7684\u70B8\u9171\u4EE5\u53CA\u5404\u79CD\u852C\u83DC\u4E1D\u3002\\\\n3. **\u5364\u716E\u706B\u70E7**\uFF1A\u4EE5\u732A\u5185\u810F\u548C\u8C46\u8150\u5E72\u4E3A\u4E3B\u8981\u539F\u6599\uFF0C\u7096\u716E\u800C\u6210\uFF0C\u6C64\u5473\u9187\u539A\uFF0C\u662F\u8001\u5317\u4EAC\u7684\u4F20\u7EDF\u98DF\u54C1\u3002\\\\n4. **\u7092\u809D**\uFF1A\u4E00\u79CD\u7C7B\u4F3C\u5364\u716E\u7684\u5C0F\u5403\uFF0C\u4F46\u662F\u4E3B\u8981\u7528\u732A\u809D\u548C\u5927\u80A0\uFF0C\u52A0\u4E0A\u849C\u6CE5\u7B49\u8C03\u5473\u54C1\u3002\\\\n5. **\u827E\u7A9D\u7A9D**\uFF1A\u7CEF\u7C73\u5236\u6210\u7684\u751C\u98DF\uFF0C\u5916\u76AE\u8F6F\u7CEF\uFF0C\u91CC\u9762\u5305\u88F9\u7740\u7EA2\u8C46\u6C99\u6216\u5176\u4ED6\u751C\u9985\u3002\\\\n6. **\u7CD6\u846B\u82A6**\uFF1A\u4E32\u8D77\u6765\u7684\u5C71\u6942\u679C\uFF0C\u8868\u9762\u88F9\u4E0A\u4E00\u5C42\u7CD6\u6D46\uFF0C\u9178\u751C\u53EF\u53E3\uFF0C\u5F88\u53D7\u6B22\u8FCE\u3002\\\\n\\\\n\u60A8\u5BF9\u54EA\u4E00\u79CD\u5C0F\u5403\u6BD4\u8F83\u611F\u5174\u8DA3\u5462\uFF1F\u6216\u8005\u60A8\u60F3\u4E86\u89E3\u66F4\u591A\u6709\u5173\u8FD9\u4E9B\u5C0F\u5403\u7684\u4FE1\u606F\u5417\uFF1F"...} |
| --- |

**\u4E09\u3001\u5B9E\u73B0\u539F\u7406**<br />1. Geo-IP\u63D2\u4EF6\u57FA\u4E8E\u7528\u6237 IP \u83B7\u53D6\u7528\u6237\u76F8\u5173\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u5982\uFF1A\u56FD\u5BB6\u3001\u7701\u4EFD\u3001\u57CE\u5E02\u7B49<br />2. \u57FA\u4E8E Higress \u7684 Property \u673A\u5236\u5B9E\u73B0\u8DE8\u63D2\u4EF6\u95F4\u7684\u6570\u636E\u4F20\u9012\uFF0C\u5C06Geo-IP\u63D2\u4EF6\u83B7\u53D6\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u4F20\u9012\u7ED9AI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6<br />3. AI\u63D0\u793A\u8BCD\u63D2\u4EF6\u57FA\u4E8E\u7528\u6237\u914D\u7F6E\u7684\u63D0\u793A\u8BCD\u6A21\u677F\u3001\u7528\u6237\u8F93\u5165\uFF0C\u4EE5\u53CA\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u751F\u6210\u589E\u5F3A\u540E\u7684\u7528\u6237\u8BF7\u6C42\u53D1\u9001\u7ED9 LLM<br />**Geo-IP \u63D2\u4EF6\u5B9E\u73B0**<br />\u7528\u6237IP\u7684\u83B7\u53D6\uFF1A<br />\u5F53\u8BF7\u6C42\u8FDB\u5165onHttpRequestHeader( ) \u51FD\u6570\u65F6\uFF0C\u5982\u679C\u7528\u6237\u662F\u76F4\u63A5\u8FDE\u63A5Higress\uFF0C\u5C31\u53D6 remote_address \u4F5C\u4E3A\u7528\u6237IP\u3002\u5982\u679C\u7528\u6237\u901A\u8FC7\u4EE3\u7406\u670D\u52A1\u8BBF\u95EEHigress\uFF0C\u8BF7\u6C42\u91CC\u5305\u542B\u8BF7\u6C42\u5934X-forwarded-for\uFF0C\u5C31\u89E3\u6790XFF\u5934\u53D6\u7B2C\u4E00\u4E2AIP\u5730\u5740\u4F5C\u4E3A\u539F\u59CB\u7528\u6237IP\u3002

\u79BB\u7EBFIP\u5730\u5740\u5B9A\u4F4D\u5E93\u5185\u5B58\u4F18\u5316\uFF1A<br />Geo IP \u63D2\u4EF6\u5185\u7F6E\u79BB\u7EBFIP\u5730\u5740\u5B9A\u4F4D\u5E93\uFF0C\u6570\u636E\u6765\u6E90\uFF1Ahttps://gitee.com/lionsoul/ip2region\u3002\u7531\u4E8E\u9ED8\u8BA4\u63D0\u4F9B\u7684\u6587\u4EF6\u683C\u5F0F\u4E3A\uFF1A\u8D77\u59CBIP\u5730\u5740|\u7ED3\u675FIP\u5730\u5740|\u56FD\u5BB6|\u533A\u57DF|\u7701\u4EFD|\u57CE\u5E02|ISP\uFF0C\u76F4\u63A5\u5BF9\u6570\u636E\u8FDB\u884C\u5B58\u50A8\u5B58\u5728\u8F83\u5927\u7684\u5185\u5B58\u5F00\u9500\u3002\u56E0\u6B64\u9996\u5148\u5BF9\u539F\u59CB\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u5C06\u539F\u59CB\u6570\u636E\u62C6\u5206\u4E3A\u591A\u4E2A\uFF1AIP\u5730\u5740/\u5B50\u7F51\u63A9\u7801|\u56FD\u5BB6|\u533A\u57DF|\u7701\u4EFD|\u57CE\u5E02|ISP \u7684\u683C\u5F0F\u3002\u7136\u540E\u57FA\u4E8E\u52A0\u5DE5\u540E\u7684\u6570\u636E\u683C\u5F0F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u57FA\u6570\u6811\uFF08Radix Tree\uFF09\u7684\u6570\u636E\u7ED3\u6784\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u5B58\u50A8\uFF0C\u6700\u7EC8\u5728\u964D\u4F4E\u5185\u5B58\u5360\u7528\u7684\u540C\u65F6\uFF0C\u4FDD\u8BC1\u4E86IP\u5730\u5740\u7684\u67E5\u627E\u6548\u7387\u3002

\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u7684\u4F20\u9012\uFF1A<br />\u8D77\u521D\u5E0C\u671B\u901A\u8FC7 setContext \u8FDB\u884C\u4FE1\u606F\u7684\u4F20\u9012\u3002\u540E\u6765\u5728\u548C Higress Maintainer \u7684\u6C9F\u901A\u4E2D\u4E86\u89E3\u5230 Context \u6CA1\u6709\u529E\u6CD5\u8DE8\u63D2\u4EF6\u4F20\u9012\u4FE1\u606F\u3002\u9700\u8981\u901A\u8FC7 setProperty \u8BBE\u7F6E\u5230 metadata \u4E2D\uFF0C\u5176\u4ED6\u63D2\u4EF6\u901A\u8FC7 getProperty\u83B7\u53D6\u3002\u5728\u6B64\u611F\u8C22 johnlanni \u7684\u70ED\u5FC3\u89E3\u7B54\u548C\u5E2E\u52A9\u3002

**AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u589E\u5F3A\u5B9E\u73B0**<br />\u7528\u6237\u914D\u7F6E\uFF1A

| Bash<br />prepend:<br />- role: system<br />  content: "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}" |
| --- |

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

| Bash<br />curl http://localhost/test \\\\<br />-H "content-type: application/json" \\\\<br />-d '{<br />  "model":"gpt-3.5-turbo",<br />  "messages": [<br />    {<br />      "role": "user",<br />      "content":"\u660E\u5929\u5929\u6C14\u600E\u4E48\u6837"<br />    }<br />  ]<br />}' |
| --- |

\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A

| Bash<br />curl http://localhost/test \\\\<br />-H "content-type: application/json" \\\\<br />-d '{<br />  "model": "gpt-3.5-turbo",<br />  "messages": [<br />    {<br />      "role": "system",<br />      "content": "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\u4E2D\u56FD\uFF0C\u7701\u4EFD\uFF1A\u6D59\u6C5F, \u57CE\u5E02\uFF1A\u676D\u5DDE"<br />    },<br />    {<br />      "role": "user",<br />      "content": "\u660E\u5929\u5929\u6C14\u600E\u4E48\u6837"<br />    }<br />  ]<br />}' |
| --- |

\u5728\u8BBE\u7F6E\u63D0\u793A\u8BCD\u65F6\uFF0C\u4E00\u822C\u5C06\u63D0\u793A\u8BCD\u8BBE\u7F6E\u4E3A user \u6216 system \u7C7B\u578B<br />\u2022 user\uFF1Auser\u89D2\u8272\uFF0C\u4EE3\u8868\u5F53\u524D\u7528\u6237\u3002\u5F53\u7528\u6237\u5411 LLM \u63D0\u95EE\u6216\u4E0E\u5176\u4EA4\u4E92\u65F6\uFF0C\u8F93\u5165\u7684\u5185\u5BB9\u90FD\u6807\u8BB0\u4E3A user\u3002<br />\u2022 system\uFF1Asystem\u89D2\u8272\uFF0C\u4EE3\u8868\u7CFB\u7EDF\u7EA7\u7684\u6D88\u606F\u6216\u901A\u77E5\u3002\u7528\u4E8E\u5B58\u653E\u63D0\u95EE\u7684\u76F8\u5173\u80CC\u666F\u4FE1\u606F\u6216\u4E00\u4E9B\u9884\u7F6E\u89C4\u5219\u3002\u6BD4\u5982\uFF0C\u6211\u4EEC\u5728\u4E00\u4E2A\u201C\u5199\u5C0F\u7EA2\u4E66\u6587\u6848\u201D\u7684\u573A\u666F\u4E2D\u4E0E LLM \u5BF9\u8BDD\u3002\u90A3\u4E48\u201C\u5199\u5C0F\u7EA2\u4E66\u6587\u6848\u201D\u8FD9\u4E2A\u573A\u666F\u4E2D\u5C31\u4F1A\u63D0\u524D\u9884\u7F6E\u4E00\u4E9B\u89C4\u5219\uFF08\u6BD4\u5982\u5B57\u6570\u8981\u6C42\u3001emoji\u56FE\u50CF\u7B49\u7B49\uFF09\u3002\u8FD9\u4E9B\u89C4\u5219\u5C31\u662Fsystem\u3002<br />**\u56DB\u3001\u603B\u7ED3**<br />\u672C\u2F42\u5BF9 Prompt \u7684\u4F7F\u7528\u65B9\u5F0F\u8FDB\u884C\u4E86\u7B80\u5355\u4ECB\u7ECD\uFF0C\u8BA9\u5927\u5BB6\u4E86\u89E3\u5230 Prompt \u5BF9\u4E8E LLM \u7684\u91CD\u8981\u6027\u3002\u5E76\u5C1D\u8BD5\u5728Prompt\u4E2D\u7ED3\u5408\u7528\u6237 Geo IP \u4FE1\u606F\uFF0C\u5B9E\u73B0 LLM \u7684\u4E2A\u6027\u5316\u56DE\u590D\uFF0C\u63D0\u5347\u95EE\u7B54\u7684\u51C6\u786E\u5EA6\u3002\u5E0C\u671B\u5BF9\u4F60\u6709\u5E2E\u52A9\uFF01<br />\u63D2\u4EF6\u7684\u5B9E\u73B0\u5DF2\u7ECF\u63D0\u4EA4PR\u7ED9Higress\u5F00\u6E90\u793E\u533A\uFF0C\u53EF\u4EE5\u5230\u8FD9\u91CC\u67E5\u770B\u5B8C\u6574\u7684\u4EE3\u7801\u5B9E\u73B0\uFF1A <br />Geo-IP\u63D2\u4EF6\u5B9E\u73B0\uFF1A[https://github.com/alibaba/higress/pull/1172](https://github.com/alibaba/higress/pull/1172)<br />AI\u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u589E\u5F3A\u5B9E\u73B0\uFF1A<br />https://github.com/alibaba/higress/pull/1228

\u4E5F\u6B22\u8FCE\u2F24\u5BB6\u63D0\u51FA\u5B9D\u8D35\u5EFA\u8BAE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728\u4E0A\u2FAFPR\u4E2D\u8BC4\u8BBA\uFF0C\u6216\u8005\u5728Higress\u793E\u533A\u4EA4\u6D41\u7FA4\uFF08\u9489\u9489\u7FA4\u53F7\uFF1A 30735012403\uFF09\u2FA5\u2F00\u8D77\u6C9F\u901A\u3002

`},s=function(){return t},b=function(){return[]},r=l((I,P,y)=>{const{layout:d,...n}=o;return n.file=e,n.url=a,g`${c()}${h(t)}`})});export{r as Content,E as __tla,s as compiledContent,r as default,e as file,o as frontmatter,b as getHeadings,p as rawContent,a as url};
