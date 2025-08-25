import{c as a,__tla as b}from"./astro-component.m4CCZO6J.js";import{r as f,m as d,u as i,__tla as p}from"./constant.D4Mjy2rC.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let r,e,t,l,g,s,n,u=Promise.all([(()=>{try{return b}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let o;o=`<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6587\uFF1A\u5B64\u5F0B\u3001\u6B63\u5DF1</font></p>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5728AI\u5927\u6A21\u578B\u5E94\u7528\u7206\u53D1\u7684\u4ECA\u5929\uFF0CModel Context Protocol (MCP) \u4F5C\u4E3A\u8FDE\u63A5AI\u5927\u6A21\u578B\u4E0E\u5E94\u7528\u7684\u5173\u952E\u534F\u8BAE\uFF0C\u6B63\u5728\u5FEB\u901F\u666E\u53CA\u3002\u7136\u800C\uFF0C\u5982\u4F55\u5728\u4F01\u4E1A\u7EA7\u73AF\u5883\u4E2D\u9AD8\u6548\u90E8\u7F72\u548C\u7BA1\u7406MCP\u670D\u52A1\uFF0C\u6210\u4E3A\u6280\u672F\u56E2\u961F\u9762\u4E34\u7684\u91CD\u8981\u6311\u6218\u3002\u672C\u6587\u5C06\u6DF1\u5165\u5256\u6790MCP Server\u7684\u4E94\u79CD\u4E3B\u6D41\u67B6\u6784\u6A21\u5F0F\uFF0C\u5E76\u7ED3\u5408Nacos\u670D\u52A1\u6CBB\u7406\u6846\u67B6\uFF0C\u4E3A\u4F01\u4E1A\u7EA7MCP\u90E8\u7F72\u63D0\u4F9B\u5B9E\u7528\u6307\u5357\u3002</font></p>
<h2 id="mcp\u67B6\u6784\u7684\u6F14\u8FDB\u4E0E\u6311\u6218"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP\u67B6\u6784\u7684\u6F14\u8FDB\u4E0E\u6311\u6218</font></h2>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP\u534F\u8BAE\u4E3AAI\u5E94\u7528\u63D0\u4F9B\u4E86\u6807\u51C6\u5316\u7684\u4EA4\u4E92\u65B9\u5F0F\uFF0C\u4F46\u5728\u4F01\u4E1A\u7EA7\u843D\u5730\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u9762\u4E34\u7740\u8BA4\u8BC1\u9274\u6743\u53D7\u9650\u3001\u90E8\u7F72\u6A21\u5F0F\u591A\u6837\u3001\u6280\u672F\u503A\u52A1\u98CE\u9669\u7B49\u591A\u91CD\u6311\u6218\u3002\u76EE\u524D\uFF0CMCP Server\u4E3B\u8981\u6709\u4E94\u79CD\u67B6\u6784\u6A21\u5F0F\uFF0C\u6BCF\u79CD\u67B6\u6784\u5404\u6709\u4F18\u52A3\uFF0C\u9002\u7528\u4E8E\u4E0D\u540C\u7684\u4E1A\u52A1\u573A\u666F\u3002</font></p>
<h2 id="\u4E94\u79CDmcp\u67B6\u6784\u6A21\u5F0F\u8BE6\u89E3"><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E94\u79CDMCP\u67B6\u6784\u6A21\u5F0F\u8BE6\u89E3</font></h2>
<h3 id="\u67B6\u6784\u4E00mcp-client\u76F4\u8FDEremote-server-sse"><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E00\uFF1AMCP Client\u76F4\u8FDERemote Server (SSE)</font></h3>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265009-f464ebe0-65d5-4a27-a128-dd5efbf7ee63.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u76F4\u63A5\u6253\u7535\u8BDD\u7ED9\u4E13\u5BB6\u54A8\u8BE2\u95EE\u9898 \u2014\u2014 MCP Client\u901A\u8FC7SSE\u65B9\u5F0F\u76F4\u63A5\u8FDE\u63A5\u5230\u8FDC\u7A0BMCP Server\uFF0C\u5168\u7A0B\u4FDD\u6301HTTP\u957F\u8FDE\u63A5\u3002</font></p>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8D85\u7B80\u5355\uFF01\u6CA1\u6709\u4E2D\u95F4\u5C42\uFF0C\u90E8\u7F72\u7EF4\u62A4\u6210\u672C\u4F4E</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B9E\u65F6\u6027\u597D\uFF0C\u6A21\u578B\u7684\u6D41\u5F0F\u8F93\u51FA\u4F53\u9A8C\u4E00\u6D41</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u96C6\u4E2D\u5316\u7BA1\u7406\uFF0C\u76D1\u63A7\u548C\u8FD0\u7EF4\u4E0D\u8D39\u52B2</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u7F51\u7EDC\u4E00\u5361\uFF0C\u4F53\u9A8C\u5C31\u5D29\u4E86</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6240\u6709\u6570\u636E\u90FD\u5F97\u4F20\u5230\u4E91\u7AEF\uFF0C\u654F\u611F\u4FE1\u606F\u6709\u987E\u8651</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B89\u5168\u98CE\u9669\u8F83\u9AD8\uFF0C\u670D\u52A1\u7AEF\u70B9\u76F4\u63A5\u66B4\u9732</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u5982\u679C\u4F60\u662F\u505ASaaS\u5E94\u7528\u3001\u8F7B\u91CF\u7EA7\u5BA2\u6237\u7AEF\u6216\u516C\u5171\u4E91\u670D\u52A1\uFF0C\u5BF9\u5B89\u5168\u8981\u6C42\u4E0D\u90A3\u4E48\u9AD8\uFF0C\u8FD9\u79CD\u67B6\u6784\u5C31\u633A\u5408\u9002\u7684\u3002</font></p>
<h3 id="\u67B6\u6784\u4E8Cmcp-client\u901A\u8FC7proxy\u8FDE\u63A5remote-server-sse"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E8C\uFF1AMCP Client\u901A\u8FC7Proxy\u8FDE\u63A5Remote Server (SSE)</font></h3>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499264847-342e626d-714b-48d2-9a4a-4f3e9892fb93.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u6709\u4E2A\u7FFB\u8BD1\u5728\u4E2D\u95F4\u5E2E\u4F60\u6C9F\u901A \u2014\u2014 MCP Client\u5148\u8FDE\u63A5\u5230Proxy Server\uFF0C\u518D\u7531Proxy\u8F6C\u63A5\u5230Remote Server\u3002</font></p>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B89\u5168\u6027\u66F4\u9AD8\uFF0C\u4EE3\u7406\u5C42\u53EF\u4EE5\u505A\u5404\u79CD\u9632\u62A4</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u652F\u6301\u667A\u80FD\u8DEF\u7531\u548C\u8D1F\u8F7D\u5747\u8861\uFF0C\u6D41\u91CF\u8C03\u5EA6\u66F4\u7075\u6D3B</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u53EF\u4EE5\u805A\u5408\u591A\u4E2A\u540E\u7AEF\u670D\u52A1\uFF0C\u4E00\u4E2A\u63A5\u53E3\u901A\u5403</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u67B6\u6784\u590D\u6742\u4E86\uFF0C\u7EF4\u62A4\u6210\u672C\u81EA\u7136\u4E0A\u5347</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u591A\u4E00\u5C42\u4EE3\u7406\u53EF\u80FD\u589E\u52A0\u5EF6\u8FDF\uFF0C\u4F53\u9A8C\u7A0D\u5DEE</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4EE3\u7406\u5C42\u53EF\u80FD\u6210\u4E3A\u65B0\u7684\u6545\u969C\u70B9</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u591A\u79DF\u6237\u73AF\u5883\u3001\u4F01\u4E1A\u7F51\u5173\u96C6\u6210\u3001\u9700\u8981\u8C03\u7528\u591A\u79CD\u6A21\u578B\u7684\u573A\u666F\uFF0C\u8FD9\u79CD\u67B6\u6784\u5C31\u5F88\u7ED9\u529B\u3002</font></p>
<h3 id="\u67B6\u6784\u4E09mcp-client\u76F4\u8FDElocal-server-stdio"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E09\uFF1AMCP Client\u76F4\u8FDELocal Server (STDIO)</font></h3>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265000-4cb4b61b-3235-473e-bcbd-d49f3d7dead3.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u5BB6\u91CC\u6709\u4E2A\u79C1\u4EBA\u52A9\u7406 \u2014\u2014 MCP Client\u901A\u8FC7STDIO\u65B9\u5F0F\u76F4\u63A5\u8FDE\u63A5\u672C\u5730MCP Server\uFF0C\u8FDB\u7A0B\u95F4\u76F4\u63A5\u901A\u4FE1\u3002</font></p>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6570\u636E\u5B89\u5168\u6027\u62C9\u6EE1\uFF01\u654F\u611F\u6570\u636E\u53EF\u901A\u8FC7 Local Server \u52A0\u5BC6\u6388\u6743\u518D\u51FA\u672C\u5730</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u51E0\u4E4E\u96F6\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u54CD\u5E94\u901F\u5EA6\u98DE\u5FEB</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B8C\u5168\u79BB\u7EBF\u73AF\u5883\u4E5F\u80FD\u7528\uFF0C\u4E0D\u4F9D\u8D56\u5916\u7F51</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u672C\u5730\u8BA1\u7B97\u8D44\u6E90\u5F97\u591F\u5F3A\uFF0C\u4E0D\u7136 Server \u592A\u591A\u53EF\u80FD\u9020\u6210\u8D1F\u8F7D\u592A\u5927</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6BCF\u4E2A\u73AF\u5883\u90FD\u8981\u5355\u72EC\u90E8\u7F72\u7EF4\u62A4\uFF0C\u8FD0\u7EF4\u6210\u672C\u9AD8</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Server \u670D\u52A1\u66F4\u65B0\u5F88\u9EBB\u70E6\uFF0C\u5F97\u4E00\u4E2A\u4E2A\u73AF\u5883\u53BB\u66F4\u65B0</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u91D1\u878D\u6838\u5FC3\u7CFB\u7EDF\u3001\u533B\u7597\u6570\u636E\u5206\u6790\u3001\u5DE5\u4E1A\u73B0\u573A\u7CFB\u7EDF\u7B49\u5BF9\u6570\u636E\u5B89\u5168\u548C\u9690\u79C1\u6709\u9AD8\u8981\u6C42\u7684\u573A\u666F\u3002</font></p>
<h3 id="\u67B6\u6784\u56DBmcp-client\u901A\u8FC7local-proxy\u8FDE\u63A5local-server-stdio"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u56DB\uFF1AMCP Client\u901A\u8FC7Local Proxy\u8FDE\u63A5Local Server (STDIO)</font></h3>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265318-f19e2744-cdea-4822-84ed-954d49458d95.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u6709\u4E2A\u79C1\u4EBA\u79D8\u4E66\u5E2E\u4F60\u534F\u8C03\u591A\u4E2A\u672C\u5730\u4E13\u5BB6 \u2014\u2014 MCP Client\u5148\u8FDE\u63A5\u5230Local Proxy\uFF0C\u518D\u7531Proxy\u8FDE\u63A5\u5230Local Server\u3002</font></p>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u670D\u52A1\u62BD\u8C61\u505A\u5F97\u597D\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u7528\u5173\u5FC3\u5B9E\u73B0\u7EC6\u8282</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u652F\u6301\u672C\u5730\u591A\u5B9E\u4F8B\u90E8\u7F72\uFF0C\u81EA\u52A8\u6545\u969C\u8F6C\u79FB</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u540C\u4E1A\u52A1\u7EBF\u6216\u90E8\u95E8\u7684\u8D44\u6E90\u9694\u79BB</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u672C\u5730\u73AF\u5883\u66F4\u590D\u6742\u4E86\uFF0C\u7EF4\u62A4\u96BE\u5EA6\u52A0\u5927</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u672C\u5730\u4EE3\u7406\u9700\u8981\u989D\u5916\u7684\u8BA1\u7B97\u8D44\u6E90</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u591A\u5C42\u67B6\u6784\u8BA9\u95EE\u9898\u5B9A\u4F4D\u548C\u8C03\u8BD5\u53D8\u5F97\u66F4\u56F0\u96BE</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u5927\u578B\u4F01\u4E1A\u5185\u90E8\u5E73\u53F0\u3001\u9AD8\u53EF\u7528\u8981\u6C42\u573A\u666F\u3001\u9700\u8981\u7EDF\u4E00\u7BA1\u7406\u672C\u5730AI\u8D44\u6E90\u7684\u573A\u666F\u3002</font></p>
<h3 id="\u67B6\u6784\u4E94mcp-client\u901A\u8FC7local-proxy\u8FDE\u63A5remote-server-stdiosse"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E94\uFF1AMCP Client\u901A\u8FC7Local Proxy\u8FDE\u63A5Remote Server (STDIO+SSE)</font></h3>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499266520-c4a01fec-3509-4361-8819-857b49d244d1.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u6709\u4E2A\u8D85\u7EA7\u52A9\u624B\uFF0C\u65E2\u80FD\u5904\u7406\u672C\u5730\u4E8B\u52A1\u53C8\u80FD\u5E2E\u4F60\u5BF9\u63A5\u5916\u90E8\u4E13\u5BB6 \u2014\u2014 MCP Client\u901A\u8FC7STDIO\u8FDE\u63A5Local Proxy\uFF0CLocal Proxy\u518D\u901A\u8FC7SSE\u8FDE\u63A5Remote Server\u3002</font></p>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6DF7\u5408\u4E91\u6218\u7565\u7684\u6700\u4F73\u9009\u62E9\uFF0C\u672C\u5730\u4E91\u7AEF\u8D44\u6E90\u968F\u610F\u5207\u6362</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4F01\u4E1A\u4ECE\u672C\u5730\u5411\u4E91\u7AEF\u8FC1\u79FB\u7684\u5E73\u6ED1\u8FC7\u6E21\u65B9\u6848</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5BA2\u6237\u7AEF\u4F53\u9A8C\u4E00\u81F4\uFF0C\u4E0D\u7528\u5173\u5FC3\u670D\u52A1\u5728\u54EA\u91CC</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font></strong></p>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u67B6\u6784\u6700\u590D\u6742\uFF0C\u7EF4\u62A4\u548C\u6392\u969C\u96BE\u5EA6\u6700\u5927</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u9700\u8981\u786E\u4FDD\u672C\u5730\u548C\u4E91\u7AEF\u670D\u52A1\u7684\u4E00\u81F4\u6027</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6027\u80FD\u53D7\u7F51\u7EDC\u72B6\u51B5\u5F71\u54CD\uFF0C\u53EF\u80FD\u6709\u6CE2\u52A8</font></li>
</ul>
<p><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u5B9E\u65BD\u6DF7\u5408\u4E91\u6218\u7565\u7684\u5927\u578B\u4F01\u4E1A\u3001\u9700\u8981\u5F39\u6027\u6269\u5C55\u7684\u4E1A\u52A1\u3001\u591A\u533A\u57DF\u90E8\u7F72\u7684\u5168\u7403\u4F01\u4E1A\u3002</font></p>
<h2 id="nacos\u5982\u4F55\u8D4B\u80FDmcp\u67B6\u6784"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos\u5982\u4F55\u8D4B\u80FDMCP\u67B6\u6784</font></h2>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5728\u4F01\u4E1A\u7EA7MCP\u90E8\u7F72\u4E2D\uFF0CMCP Server \u7684\u81EA\u52A8\u53D1\u73B0\u4E0E\u9009\u62E9\u53CA\u5176 Server \u7684\u52A8\u6001\u5B89\u88C5\u80FD\u529B\u6BD4\u8F83\u9AD8\u6548\u7684\u89E3\u51B3\u4E86\u5404\u4E2A\u67B6\u6784\u4E2D\u9047\u5230\u7684\u573A\u666F\u3002</font>\u5728 <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos 3.0 \u4E4B\u524D\u7684\u7248\u672C\uFF0C\u4E3B\u8981\u56F4\u7ED5\u7740\u5206\u5E03\u5F0F\u5E94\u7528\u7684\u670D\u52A1\u6CE8\u518C\u53D1\u73B0\u4EE5\u53CA\u914D\u7F6E\u7BA1\u7406\uFF0C\u63D0\u4F9B\u4E86\u4E09\u5927\u6838\u5FC3\u80FD\u529B\uFF1A</font></p>
<ol>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u670D\u52A1\u53D1\u73B0\u4E0E\u6CE8\u518C</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u652F\u6301\u670D\u52A1\u7684\u81EA\u52A8\u6CE8\u518C\u548C\u53D1\u73B0\uFF0C\u5B9E\u73B0\u670D\u52A1\u7684\u52A8\u6001\u6269\u7F29\u5BB9</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u914D\u7F6E\u7BA1\u7406</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u652F\u6301\u914D\u7F6E\u7684\u52A8\u6001\u66F4\u65B0\u548C\u63A8\u9001\uFF0C\u65E0\u9700\u91CD\u542F\u5E94\u7528</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u670D\u52A1\u6CBB\u7406</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u63D0\u4F9B\u670D\u52A1\u8DEF\u7531\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u6D41\u91CF\u63A7\u5236\u7B49\u6CBB\u7406\u80FD\u529B</font></li>
</ol>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u4E9B\u80FD\u529B\u4E0EMCP\u67B6\u6784\u7684\u9700\u6C42\u9AD8\u5EA6\u5951\u5408\uFF0C\u7279\u522B\u662F\u5728\u591AMCP\u670D\u52A1\u5668\u7684\u573A\u666F\u4E0B\u3002</font></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499270250-68d01376-953b-478d-bdf4-3f41cd28ff29.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="nacos-mcp-router\u8FDE\u63A5-mcp-\u4E0E-nacos-\u7684\u6865\u6881"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos MCP Router\uFF1A\u8FDE\u63A5 MCP \u4E0E Nacos \u7684\u6865\u6881</font></h3>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos MCP Router (</font><a href="https://github.com/nacos-group/nacos-mcp-router" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/nacos-group/nacos-mcp-router</a><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">) \u662F\u4E00\u4E2A\u57FA\u4E8EMCP\u534F\u8BAE\u7684\u670D\u52A1\u5668\uFF0C\u5B83\u4E0ENacos\u6DF1\u5EA6\u96C6\u6210\uFF0C\u63D0\u4F9B\u4E86\u4E09\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A</font></p>
<ol>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP\u670D\u52A1\u5668\u641C\u7D22</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u6839\u636E\u4EFB\u52A1\u63CF\u8FF0\u548C\u5173\u952E\u8BCD\u641C\u7D22\u5408\u9002\u7684 MCP \u670D\u52A1\u5668\uFF0C\u91CD\u70B9\u89E3\u51B3 MCP \u5DE5\u5177\u8FC7\u591A\u65F6\u89E3\u51B3\u5927\u6A21\u578B\u9009\u62E9\u5DE5\u5177\u7684\u6548\u7387\u7684\u95EE\u9898\u3002</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP\u670D\u52A1\u5668\u6DFB\u52A0</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u652F\u6301\u6DFB\u52A0stdio\u548CSSE\u4E24\u79CD\u534F\u8BAE\u7684 MCP \u670D\u52A1\u5668\uFF0C\u914D\u5408 Nacos Server \u7684\u7BA1\u7406\u80FD\u529B\uFF0C\u91CD\u70B9\u89E3\u51B3\u8F6F\u4EF6\u4F9B\u5E94\u94FE\u5B89\u5168\u7684\u95EE\u9898\u3002</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u5DE5\u5177\u4EE3\u7406\u8C03\u7528</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u4EE3\u7406 LLM \u5BF9\u76EE\u6807 MCP \u670D\u52A1\u5668\u5DE5\u5177\u7684\u8C03\u7528\uFF0C\u901A\u8FC7\u4E00\u4E2A\u672C\u5730\u4EE3\u7406\u7684\u65B9\u5F0F\u89E3\u51B3 Local Server \u4E0E Remote Server \u8C03\u7528\u7684\u7075\u6D3B\u5207\u6362\u95EE\u9898\u3002</font></li>
</ol>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u901A\u8FC7\u4EE5\u4E0A\u7684\u51E0\u4E2A\u80FD\u529B\uFF0C\u6211\u4EEC\u642D\u5EFA\u4E86\u4E00\u79CD\u6DF7\u5408 MCP Server \u67B6\u6784\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5B9E\u73B0MCP\u670D\u52A1\u7684\u7EDF\u4E00\u7BA1\u7406\u548C\u667A\u80FD\u8DEF\u7531\uFF0C\u5927\u5927\u7B80\u5316\u63D0\u5347\u5DE5\u5177\u9009\u62E9\u65F6\u7684\u6027\u80FD\u4E0E\u4F01\u4E1A\u7EA7 MCP \u90E8\u7F72\u7684\u590D\u6742\u5EA6\u3002</font></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499272587-5cdc3629-7a26-47f0-ad1c-cfc8c8a51a41.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="nacos\u4E0Emcp\u7684\u5B9E\u6218\u96C6\u6210"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos\u4E0EMCP\u7684\u5B9E\u6218\u96C6\u6210</font></h2>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u5B9E\u9645\u6848\u4F8B\uFF0C\u5C55\u793A\u5982\u4F55\u4F7F\u7528Nacos\u548CNacos MCP Router\u6784\u5EFA\u4F01\u4E1A\u7EA7MCP\u670D\u52A1\u3002</font></p>
<h3 id="\u90E8\u7F72-nacos-mcp-router"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u90E8\u7F72 </font><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos MCP Router</font></h3>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5728\u6709 NodeJS \u7684\u5F00\u53D1\u73AF\u5883\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u624B\u52A8\u90E8\u7F72Nacos MCP Router\uFF08\u4E0D\u8FC7\u8FD9\u4E00\u6B65\u4E0D\u662F\u5FC5\u987B\u7684\uFF09</font></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">$ pnpm i nacos-mcp-router@latest</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ pnpm i nacos-mcp-router@latest"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6Emcp\u5BA2\u6237\u7AEF"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u914D\u7F6EMCP\u5BA2\u6237\u7AEF</font></h3>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u7136\u540E\uFF0C\u5728MCP\u5BA2\u6237\u7AEF\u914D\u7F6E\u4E2D\u6DFB\u52A0nacos-mcp-router\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"mcpServers": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"nacos-mcp-router": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"command": "npx",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"args": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"nacos-mcp-router@latest"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"env": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"NACOS_ADDR": "127.0.0.1:8848",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"NACOS_USERNAME": "nacos",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"NACOS_PASSWORD": "your_password"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;mcpServers&#x22;: {\x7F    &#x22;nacos-mcp-router&#x22;: {\x7F      &#x22;command&#x22;: &#x22;npx&#x22;,\x7F      &#x22;args&#x22;: [\x7F        &#x22;nacos-mcp-router@latest&#x22;\x7F      ],\x7F      &#x22;env&#x22;: {\x7F        &#x22;NACOS_ADDR&#x22;: &#x22;127.0.0.1:8848&#x22;,\x7F        &#x22;NACOS_USERNAME&#x22;: &#x22;nacos&#x22;,\x7F        &#x22;NACOS_PASSWORD&#x22;: &#x22;your_password&#x22;\x7F      }\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u4F7F\u7528mcp\u670D\u52A1"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F7F\u7528MCP\u670D\u52A1</font></h3>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u73B0\u5728\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7nacos-mcp-router\u4F7F\u7528\u5404\u79CDMCP\u670D\u52A1\uFF08\u6CE8\uFF1A\u4EE5\u4E0B\u6B65\u9AA4\u4E3A MCP Client \u4E0E Nacos Router \u81EA\u52A8\u4EA4\u4E92\u65F6\u7684\u6838\u5FC3\u65B9\u6CD5\uFF0C\u5E76\u4E0D\u662F\u7A0B\u5E8F\u5458\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u786C\u7F16\u7801\u7684\u5B9E\u73B0\uFF09\uFF1A</font></p>
<ol>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u641C\u7D22MCP\u670D\u52A1\u5668\uFF1A</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">search_mcp_server(task_description="\u751F\u6210\u4E00\u5F20\u732B\u7684\u56FE\u7247",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">key_words="\u56FE\u50CF\u751F\u6210")</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="search_mcp_server(task_description=&#x22;\u751F\u6210\u4E00\u5F20\u732B\u7684\u56FE\u7247&#x22;,\x7F                  key_words=&#x22;\u56FE\u50CF\u751F\u6210&#x22;)"><div></div></button></div></figure></div>
<ol>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6DFB\u52A0MCP\u670D\u52A1\u5668\uFF1A</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">add_mcp_server(mcp_server_name="image-generator")</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="add_mcp_server(mcp_server_name=&#x22;image-generator&#x22;)"><div></div></button></div></figure></div>
<ol>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4F7F\u7528MCP\u670D\u52A1\u5668\u5DE5\u5177\uFF1A</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">use_tool(mcp_server_name="image-generator",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">         </span></span><span style="--0:#e1e4e8">mcp_tool_name="generate_image",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">         </span></span><span style="--0:#e1e4e8">params={"prompt": "\u4E00\u53EA\u6A59\u8272\u7684\u732B"})</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="use_tool(mcp_server_name=&#x22;image-generator&#x22;,\x7F         mcp_tool_name=&#x22;generate_image&#x22;,\x7F         params={&#x22;prompt&#x22;: &#x22;\u4E00\u53EA\u6A59\u8272\u7684\u732B&#x22;})"><div></div></button></div></figure></div>
<h2 id="\u4F01\u4E1A\u4E2D\u843D\u5730-mcp-\u67B6\u6784\u9009\u578B\u6307\u5357"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F01\u4E1A\u4E2D\u843D\u5730 MCP \u67B6\u6784\u9009\u578B\u6307\u5357</font></h2>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP \u793E\u533A\u8FD8\u5728\u98DE\u901F\u7684\u53D1\u5C55\u4E4B\u4E2D\uFF0C\u5728\u4F01\u4E1A\u7EA7\u573A\u666F\u7684\u80FD\u529B\u4E0A\u7684\u8BF8\u591A\u6838\u5FC3\u529F\u80FD\u8FD8\u6682\u65F6\u672A\u5F62\u6210\u7EDF\u4E00\u7684\u6807\u51C6\uFF0C\u57FA\u4E8E\u76EE\u524D\u7684\u80FD\u529B\uFF0C\u6211\u4EEC\u5728\u9009\u62E9\u9002\u5408\u4F01\u4E1A\u7684MCP\u67B6\u6784\u8FDB\u884C\u843D\u5730\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8003\u8651\u4EE5\u4E0B\u5173\u952E\u56E0\u7D20\uFF1A</font></p>
<ol>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u6570\u636E\u5B89\u5168\u4E0E\u9690\u79C1</font></strong>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u9AD8\u654F\u611F\u6570\u636E\uFF1A\u4F18\u5148\u8003\u8651\u672C\u5730\u90E8\u7F72\u67B6\u6784\uFF08\u67B6\u6784\u4E09\u3001\u67B6\u6784\u56DB\uFF09</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E00\u822C\u4E1A\u52A1\u6570\u636E\uFF1A\u53EF\u8003\u8651\u4E91\u7AEF\u6216\u6DF7\u5408\u67B6\u6784\uFF08\u67B6\u6784\u4E00\u3001\u67B6\u6784\u4E8C\u3001\u67B6\u6784\u4E94\uFF09</font></li>
</ul>
</li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u6027\u80FD\u4E0E\u5EF6\u8FDF\u8981\u6C42</font></strong>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4F4E\u5EF6\u8FDF\u5173\u952E\u5E94\u7528\uFF1A\u4F18\u5148\u8003\u8651\u672C\u5730\u90E8\u7F72\u67B6\u6784</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E00\u822C\u6027\u80FD\u8981\u6C42\uFF1A\u4E91\u7AEF\u67B6\u6784\u901A\u5E38\u8DB3\u591F</font></li>
</ul>
</li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u53EF\u6269\u5C55\u6027\u9700\u6C42</font></strong>
<ul>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u9700\u8981\u5FEB\u901F\u5F39\u6027\u6269\u5C55\uFF1A\u4F18\u5148\u8003\u8651\u4E91\u7AEF\u67B6\u6784</font></li>
<li><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u53EF\u9884\u6D4B\u7684\u7A33\u5B9A\u8D1F\u8F7D\uFF1A\u672C\u5730\u90E8\u7F72\u53EF\u80FD\u66F4\u7ECF\u6D4E</font></li>
</ul>
</li>
</ol>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u57FA\u4E8E\u8FD9\u4E9B\u56E0\u7D20\uFF0C\u4E0D\u540C\u884C\u4E1A\u53EF\u80FD\u7684\u9009\u62E9\u53EF\u80FD\u7684\u53C2\u8003\u5982\u4E0B\uFF1A</font></p>
<ul>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u91D1\u878D\u884C\u4E1A</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u56DB\uFF08\u672C\u5730\u4EE3\u7406+\u672C\u5730\u670D\u52A1\u5668\uFF09\u6700\u4E3A\u9002\u5408\uFF0C\u6EE1\u8DB3\u4E25\u683C\u7684\u6570\u636E\u5B89\u5168\u8981\u6C42</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4E92\u8054\u7F51\u884C\u4E1A</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u4E8C\uFF08\u4EE3\u7406+\u8FDC\u7A0B\u670D\u52A1\u5668\uFF09\u652F\u6301\u5FEB\u901F\u5F39\u6027\u6269\u5C55\uFF0C\u9002\u5408\u9AD8\u5E76\u53D1\u573A\u666F</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u5236\u9020\u4E1A</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u4E94\uFF08\u6DF7\u5408\u6A21\u5F0F\uFF09\u5E73\u8861\u4E86\u672C\u5730\u5B9E\u65F6\u63A7\u5236\u548C\u4E91\u7AEF\u667A\u80FD\u5206\u6790\u7684\u9700\u6C42</font></li>
<li><strong><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u653F\u5E9C\u90E8\u95E8</font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u4E09\uFF08\u76F4\u8FDE\u672C\u5730\u670D\u52A1\u5668\uFF09\u63D0\u4F9B\u6700\u9AD8\u7EA7\u522B\u7684\u6570\u636E\u5B89\u5168\u548C\u9690\u79C1\u4FDD\u62A4</font></li>
</ul>
<h2 id="\u7ED3\u8BBA\u4E0E\u5C55\u671B"><font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7ED3\u8BBA\u4E0E\u5C55\u671B</font></h2>
<p><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP \u76EE\u524D\u9ED8\u8BA4\u6210\u4E3A\u4E86 AI \u5927\u6A21\u578B\u4E0E\u5B58\u91CF\u4E1A\u52A1\u6570\u636E\u4E92\u901A\u7684\u7BA1\u9053\uFF0C\u4F46\u7531\u4E8E\u76EE\u524D\u7684 MCP \u534F\u8BAE\u672C\u8EAB\u4ECE\u8BBE\u8BA1\u4E0A\u672A\u592A\u591A\u8003\u8651\u4F01\u4E1A\u7EA7\u843D\u5730\u7684\u60C5\u51B5\uFF0C\u5BFC\u81F4\u5F88\u591A\u7684\u4F01\u4E1A\u8FD8\u5904\u5728\u89C2\u671B\u7684\u72B6\u6001\u3002MCP\u8981\u60F3\u5B8C\u6574\u843D\u5730\uFF0C</font><strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E2D\u5FC3\u5316\u7684\u6CE8\u518C\u4E2D\u5FC3\u3001\u53EF\u63A7\u7684\u8F6F\u4EF6\u4F9B\u5E94\u94FE\u3001\u5B89\u5168\u7684\u8BBF\u95EE\u63A7\u5236 </font></strong><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u4E09\u65B9\u9762\u7684\u5EFA\u8BBE\u5FC5\u4E0D\u53EF\u5C11\u3002\u5728\u6211\u4EEC\u7684\u65B9\u6848\u4E2D\uFF0C\u4E3B\u8981\u901A\u8FC7 Nacos \u4F5C\u4E3A MCP \u7684\u672A\u6765\u4F01\u4E1A MCP \u7684\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u901A\u8FC7 Nacos Server \u5BF9 MCP \u670D\u52A1\u5668\u7684\u7BA1\u7406\u80FD\u529B\uFF0C\u7ED3\u5408 Nacos Router \u505A\u5230\u8F6F\u4EF6\u4F9B\u5E94\u94FE\u7684\u7CBE\u51C6\u63A7\u5236\uFF1B\u540C\u65F6\u914D\u5408 Higress \u505A\u5230 MCP \u7684\u5B89\u5168\u8BBF\u95EE\uFF0C\u4EE5\u6B64\u7ED9\u6211\u4EEC\u7684\u4F01\u4E1A\u7EA7\u5BA2\u6237\u5E26\u6765 MCP \u5B8C\u6574\u7684\u89E3\u51B3\u65B9\u6848\u3002</font></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499273040-822d449a-6e2c-4881-853e-b6bdf4bfce07.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u7279\u522B\u81F4\u8C22 Lingma-Agents (<a href="https://github.com/apps/lingma-agents" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/apps/lingma-agents</a>) \u5728 Nacos Router \u5B9E\u73B0\u7684\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u81EA\u52A8\u5316\u7684 Code Review \u80FD\u529B\u3002</p>`,l={title:"\u4F01\u4E1A\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5B9E\u73B0 MCP \u670D\u52A1\u7684\u7EDF\u4E00\u7BA1\u7406\u548C\u667A\u80FD\u8DEF\u7531\u7684\u5B9E\u8DF5",description:"\u4F01\u4E1A\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5B9E\u73B0 MCP \u670D\u52A1\u7684\u7EDF\u4E00\u7BA1\u7406\u548C\u667A\u80FD\u8DEF\u7531\u7684\u5B9E\u8DF5",date:"2025-06-16",category:"article",keywords:["Higress"],authors:"CH3CHO"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_ggr2myyqe89ag3pv.md",n=void 0,s=function(){return`
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6587\uFF1A\u5B64\u5F0B\u3001\u6B63\u5DF1</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5728AI\u5927\u6A21\u578B\u5E94\u7528\u7206\u53D1\u7684\u4ECA\u5929\uFF0CModel Context Protocol (MCP) \u4F5C\u4E3A\u8FDE\u63A5AI\u5927\u6A21\u578B\u4E0E\u5E94\u7528\u7684\u5173\u952E\u534F\u8BAE\uFF0C\u6B63\u5728\u5FEB\u901F\u666E\u53CA\u3002\u7136\u800C\uFF0C\u5982\u4F55\u5728\u4F01\u4E1A\u7EA7\u73AF\u5883\u4E2D\u9AD8\u6548\u90E8\u7F72\u548C\u7BA1\u7406MCP\u670D\u52A1\uFF0C\u6210\u4E3A\u6280\u672F\u56E2\u961F\u9762\u4E34\u7684\u91CD\u8981\u6311\u6218\u3002\u672C\u6587\u5C06\u6DF1\u5165\u5256\u6790MCP Server\u7684\u4E94\u79CD\u4E3B\u6D41\u67B6\u6784\u6A21\u5F0F\uFF0C\u5E76\u7ED3\u5408Nacos\u670D\u52A1\u6CBB\u7406\u6846\u67B6\uFF0C\u4E3A\u4F01\u4E1A\u7EA7MCP\u90E8\u7F72\u63D0\u4F9B\u5B9E\u7528\u6307\u5357\u3002</font>

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP\u67B6\u6784\u7684\u6F14\u8FDB\u4E0E\u6311\u6218</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP\u534F\u8BAE\u4E3AAI\u5E94\u7528\u63D0\u4F9B\u4E86\u6807\u51C6\u5316\u7684\u4EA4\u4E92\u65B9\u5F0F\uFF0C\u4F46\u5728\u4F01\u4E1A\u7EA7\u843D\u5730\u8FC7\u7A0B\u4E2D\uFF0C\u6211\u4EEC\u9762\u4E34\u7740\u8BA4\u8BC1\u9274\u6743\u53D7\u9650\u3001\u90E8\u7F72\u6A21\u5F0F\u591A\u6837\u3001\u6280\u672F\u503A\u52A1\u98CE\u9669\u7B49\u591A\u91CD\u6311\u6218\u3002\u76EE\u524D\uFF0CMCP Server\u4E3B\u8981\u6709\u4E94\u79CD\u67B6\u6784\u6A21\u5F0F\uFF0C\u6BCF\u79CD\u67B6\u6784\u5404\u6709\u4F18\u52A3\uFF0C\u9002\u7528\u4E8E\u4E0D\u540C\u7684\u4E1A\u52A1\u573A\u666F\u3002</font>

## <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E94\u79CDMCP\u67B6\u6784\u6A21\u5F0F\u8BE6\u89E3</font>
### <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E00\uFF1AMCP Client\u76F4\u8FDERemote Server (SSE)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265009-f464ebe0-65d5-4a27-a128-dd5efbf7ee63.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u76F4\u63A5\u6253\u7535\u8BDD\u7ED9\u4E13\u5BB6\u54A8\u8BE2\u95EE\u9898 \u2014\u2014 MCP Client\u901A\u8FC7SSE\u65B9\u5F0F\u76F4\u63A5\u8FDE\u63A5\u5230\u8FDC\u7A0BMCP Server\uFF0C\u5168\u7A0B\u4FDD\u6301HTTP\u957F\u8FDE\u63A5\u3002</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8D85\u7B80\u5355\uFF01\u6CA1\u6709\u4E2D\u95F4\u5C42\uFF0C\u90E8\u7F72\u7EF4\u62A4\u6210\u672C\u4F4E</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B9E\u65F6\u6027\u597D\uFF0C\u6A21\u578B\u7684\u6D41\u5F0F\u8F93\u51FA\u4F53\u9A8C\u4E00\u6D41</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u96C6\u4E2D\u5316\u7BA1\u7406\uFF0C\u76D1\u63A7\u548C\u8FD0\u7EF4\u4E0D\u8D39\u52B2</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u7F51\u7EDC\u4E00\u5361\uFF0C\u4F53\u9A8C\u5C31\u5D29\u4E86</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6240\u6709\u6570\u636E\u90FD\u5F97\u4F20\u5230\u4E91\u7AEF\uFF0C\u654F\u611F\u4FE1\u606F\u6709\u987E\u8651</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B89\u5168\u98CE\u9669\u8F83\u9AD8\uFF0C\u670D\u52A1\u7AEF\u70B9\u76F4\u63A5\u66B4\u9732</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u5982\u679C\u4F60\u662F\u505ASaaS\u5E94\u7528\u3001\u8F7B\u91CF\u7EA7\u5BA2\u6237\u7AEF\u6216\u516C\u5171\u4E91\u670D\u52A1\uFF0C\u5BF9\u5B89\u5168\u8981\u6C42\u4E0D\u90A3\u4E48\u9AD8\uFF0C\u8FD9\u79CD\u67B6\u6784\u5C31\u633A\u5408\u9002\u7684\u3002</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E8C\uFF1AMCP Client\u901A\u8FC7Proxy\u8FDE\u63A5Remote Server (SSE)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499264847-342e626d-714b-48d2-9a4a-4f3e9892fb93.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u6709\u4E2A\u7FFB\u8BD1\u5728\u4E2D\u95F4\u5E2E\u4F60\u6C9F\u901A \u2014\u2014 MCP Client\u5148\u8FDE\u63A5\u5230Proxy Server\uFF0C\u518D\u7531Proxy\u8F6C\u63A5\u5230Remote Server\u3002</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B89\u5168\u6027\u66F4\u9AD8\uFF0C\u4EE3\u7406\u5C42\u53EF\u4EE5\u505A\u5404\u79CD\u9632\u62A4</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u652F\u6301\u667A\u80FD\u8DEF\u7531\u548C\u8D1F\u8F7D\u5747\u8861\uFF0C\u6D41\u91CF\u8C03\u5EA6\u66F4\u7075\u6D3B</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u53EF\u4EE5\u805A\u5408\u591A\u4E2A\u540E\u7AEF\u670D\u52A1\uFF0C\u4E00\u4E2A\u63A5\u53E3\u901A\u5403</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u67B6\u6784\u590D\u6742\u4E86\uFF0C\u7EF4\u62A4\u6210\u672C\u81EA\u7136\u4E0A\u5347</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u591A\u4E00\u5C42\u4EE3\u7406\u53EF\u80FD\u589E\u52A0\u5EF6\u8FDF\uFF0C\u4F53\u9A8C\u7A0D\u5DEE</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4EE3\u7406\u5C42\u53EF\u80FD\u6210\u4E3A\u65B0\u7684\u6545\u969C\u70B9</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u591A\u79DF\u6237\u73AF\u5883\u3001\u4F01\u4E1A\u7F51\u5173\u96C6\u6210\u3001\u9700\u8981\u8C03\u7528\u591A\u79CD\u6A21\u578B\u7684\u573A\u666F\uFF0C\u8FD9\u79CD\u67B6\u6784\u5C31\u5F88\u7ED9\u529B\u3002</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E09\uFF1AMCP Client\u76F4\u8FDELocal Server (STDIO)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265000-4cb4b61b-3235-473e-bcbd-d49f3d7dead3.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u5BB6\u91CC\u6709\u4E2A\u79C1\u4EBA\u52A9\u7406 \u2014\u2014 MCP Client\u901A\u8FC7STDIO\u65B9\u5F0F\u76F4\u63A5\u8FDE\u63A5\u672C\u5730MCP Server\uFF0C\u8FDB\u7A0B\u95F4\u76F4\u63A5\u901A\u4FE1\u3002</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6570\u636E\u5B89\u5168\u6027\u62C9\u6EE1\uFF01\u654F\u611F\u6570\u636E\u53EF\u901A\u8FC7 Local Server \u52A0\u5BC6\u6388\u6743\u518D\u51FA\u672C\u5730</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u51E0\u4E4E\u96F6\u7F51\u7EDC\u5EF6\u8FDF\uFF0C\u54CD\u5E94\u901F\u5EA6\u98DE\u5FEB</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5B8C\u5168\u79BB\u7EBF\u73AF\u5883\u4E5F\u80FD\u7528\uFF0C\u4E0D\u4F9D\u8D56\u5916\u7F51</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u672C\u5730\u8BA1\u7B97\u8D44\u6E90\u5F97\u591F\u5F3A\uFF0C\u4E0D\u7136 Server \u592A\u591A\u53EF\u80FD\u9020\u6210\u8D1F\u8F7D\u592A\u5927</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6BCF\u4E2A\u73AF\u5883\u90FD\u8981\u5355\u72EC\u90E8\u7F72\u7EF4\u62A4\uFF0C\u8FD0\u7EF4\u6210\u672C\u9AD8</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Server \u670D\u52A1\u66F4\u65B0\u5F88\u9EBB\u70E6\uFF0C\u5F97\u4E00\u4E2A\u4E2A\u73AF\u5883\u53BB\u66F4\u65B0</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u91D1\u878D\u6838\u5FC3\u7CFB\u7EDF\u3001\u533B\u7597\u6570\u636E\u5206\u6790\u3001\u5DE5\u4E1A\u73B0\u573A\u7CFB\u7EDF\u7B49\u5BF9\u6570\u636E\u5B89\u5168\u548C\u9690\u79C1\u6709\u9AD8\u8981\u6C42\u7684\u573A\u666F\u3002</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u56DB\uFF1AMCP Client\u901A\u8FC7Local Proxy\u8FDE\u63A5Local Server (STDIO)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265318-f19e2744-cdea-4822-84ed-954d49458d95.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u6709\u4E2A\u79C1\u4EBA\u79D8\u4E66\u5E2E\u4F60\u534F\u8C03\u591A\u4E2A\u672C\u5730\u4E13\u5BB6 \u2014\u2014 MCP Client\u5148\u8FDE\u63A5\u5230Local Proxy\uFF0C\u518D\u7531Proxy\u8FDE\u63A5\u5230Local Server\u3002</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u670D\u52A1\u62BD\u8C61\u505A\u5F97\u597D\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u7528\u5173\u5FC3\u5B9E\u73B0\u7EC6\u8282</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u652F\u6301\u672C\u5730\u591A\u5B9E\u4F8B\u90E8\u7F72\uFF0C\u81EA\u52A8\u6545\u969C\u8F6C\u79FB</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u540C\u4E1A\u52A1\u7EBF\u6216\u90E8\u95E8\u7684\u8D44\u6E90\u9694\u79BB</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u672C\u5730\u73AF\u5883\u66F4\u590D\u6742\u4E86\uFF0C\u7EF4\u62A4\u96BE\u5EA6\u52A0\u5927</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u672C\u5730\u4EE3\u7406\u9700\u8981\u989D\u5916\u7684\u8BA1\u7B97\u8D44\u6E90</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u591A\u5C42\u67B6\u6784\u8BA9\u95EE\u9898\u5B9A\u4F4D\u548C\u8C03\u8BD5\u53D8\u5F97\u66F4\u56F0\u96BE</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u5927\u578B\u4F01\u4E1A\u5185\u90E8\u5E73\u53F0\u3001\u9AD8\u53EF\u7528\u8981\u6C42\u573A\u666F\u3001\u9700\u8981\u7EDF\u4E00\u7BA1\u7406\u672C\u5730AI\u8D44\u6E90\u7684\u573A\u666F\u3002</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u67B6\u6784\u4E94\uFF1AMCP Client\u901A\u8FC7Local Proxy\u8FDE\u63A5Remote Server (STDIO+SSE)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499266520-c4a01fec-3509-4361-8819-857b49d244d1.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u79CD\u67B6\u6784\u5C31\u50CF\u4F60\u6709\u4E2A\u8D85\u7EA7\u52A9\u624B\uFF0C\u65E2\u80FD\u5904\u7406\u672C\u5730\u4E8B\u52A1\u53C8\u80FD\u5E2E\u4F60\u5BF9\u63A5\u5916\u90E8\u4E13\u5BB6 \u2014\u2014 MCP Client\u901A\u8FC7STDIO\u8FDE\u63A5Local Proxy\uFF0CLocal Proxy\u518D\u901A\u8FC7SSE\u8FDE\u63A5Remote Server\u3002</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F18\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6DF7\u5408\u4E91\u6218\u7565\u7684\u6700\u4F73\u9009\u62E9\uFF0C\u672C\u5730\u4E91\u7AEF\u8D44\u6E90\u968F\u610F\u5207\u6362</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4F01\u4E1A\u4ECE\u672C\u5730\u5411\u4E91\u7AEF\u8FC1\u79FB\u7684\u5E73\u6ED1\u8FC7\u6E21\u65B9\u6848</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5BA2\u6237\u7AEF\u4F53\u9A8C\u4E00\u81F4\uFF0C\u4E0D\u7528\u5173\u5FC3\u670D\u52A1\u5728\u54EA\u91CC</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7F3A\u70B9\uFF1F</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u67B6\u6784\u6700\u590D\u6742\uFF0C\u7EF4\u62A4\u548C\u6392\u969C\u96BE\u5EA6\u6700\u5927</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u9700\u8981\u786E\u4FDD\u672C\u5730\u548C\u4E91\u7AEF\u670D\u52A1\u7684\u4E00\u81F4\u6027</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6027\u80FD\u53D7\u7F51\u7EDC\u72B6\u51B5\u5F71\u54CD\uFF0C\u53EF\u80FD\u6709\u6CE2\u52A8</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u9002\u5408\u8C01\uFF1F</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> \u5B9E\u65BD\u6DF7\u5408\u4E91\u6218\u7565\u7684\u5927\u578B\u4F01\u4E1A\u3001\u9700\u8981\u5F39\u6027\u6269\u5C55\u7684\u4E1A\u52A1\u3001\u591A\u533A\u57DF\u90E8\u7F72\u7684\u5168\u7403\u4F01\u4E1A\u3002</font>

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos\u5982\u4F55\u8D4B\u80FDMCP\u67B6\u6784</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5728\u4F01\u4E1A\u7EA7MCP\u90E8\u7F72\u4E2D\uFF0CMCP Server \u7684\u81EA\u52A8\u53D1\u73B0\u4E0E\u9009\u62E9\u53CA\u5176 Server \u7684\u52A8\u6001\u5B89\u88C5\u80FD\u529B\u6BD4\u8F83\u9AD8\u6548\u7684\u89E3\u51B3\u4E86\u5404\u4E2A\u67B6\u6784\u4E2D\u9047\u5230\u7684\u573A\u666F\u3002</font>\u5728 <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos 3.0 \u4E4B\u524D\u7684\u7248\u672C\uFF0C\u4E3B\u8981\u56F4\u7ED5\u7740\u5206\u5E03\u5F0F\u5E94\u7528\u7684\u670D\u52A1\u6CE8\u518C\u53D1\u73B0\u4EE5\u53CA\u914D\u7F6E\u7BA1\u7406\uFF0C\u63D0\u4F9B\u4E86\u4E09\u5927\u6838\u5FC3\u80FD\u529B\uFF1A</font>

1. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u670D\u52A1\u53D1\u73B0\u4E0E\u6CE8\u518C</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u652F\u6301\u670D\u52A1\u7684\u81EA\u52A8\u6CE8\u518C\u548C\u53D1\u73B0\uFF0C\u5B9E\u73B0\u670D\u52A1\u7684\u52A8\u6001\u6269\u7F29\u5BB9</font>
2. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u914D\u7F6E\u7BA1\u7406</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u652F\u6301\u914D\u7F6E\u7684\u52A8\u6001\u66F4\u65B0\u548C\u63A8\u9001\uFF0C\u65E0\u9700\u91CD\u542F\u5E94\u7528</font>
3. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u670D\u52A1\u6CBB\u7406</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u63D0\u4F9B\u670D\u52A1\u8DEF\u7531\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u6D41\u91CF\u63A7\u5236\u7B49\u6CBB\u7406\u80FD\u529B</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u4E9B\u80FD\u529B\u4E0EMCP\u67B6\u6784\u7684\u9700\u6C42\u9AD8\u5EA6\u5951\u5408\uFF0C\u7279\u522B\u662F\u5728\u591AMCP\u670D\u52A1\u5668\u7684\u573A\u666F\u4E0B\u3002</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499270250-68d01376-953b-478d-bdf4-3f41cd28ff29.png)

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos MCP Router\uFF1A\u8FDE\u63A5 MCP \u4E0E Nacos \u7684\u6865\u6881</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos MCP Router (</font>[https://github.com/nacos-group/nacos-mcp-router](https://github.com/nacos-group/nacos-mcp-router)<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">) \u662F\u4E00\u4E2A\u57FA\u4E8EMCP\u534F\u8BAE\u7684\u670D\u52A1\u5668\uFF0C\u5B83\u4E0ENacos\u6DF1\u5EA6\u96C6\u6210\uFF0C\u63D0\u4F9B\u4E86\u4E09\u4E2A\u6838\u5FC3\u529F\u80FD\uFF1A</font>

1. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP\u670D\u52A1\u5668\u641C\u7D22</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u6839\u636E\u4EFB\u52A1\u63CF\u8FF0\u548C\u5173\u952E\u8BCD\u641C\u7D22\u5408\u9002\u7684 MCP \u670D\u52A1\u5668\uFF0C\u91CD\u70B9\u89E3\u51B3 MCP \u5DE5\u5177\u8FC7\u591A\u65F6\u89E3\u51B3\u5927\u6A21\u578B\u9009\u62E9\u5DE5\u5177\u7684\u6548\u7387\u7684\u95EE\u9898\u3002</font>
2. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP\u670D\u52A1\u5668\u6DFB\u52A0</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u652F\u6301\u6DFB\u52A0stdio\u548CSSE\u4E24\u79CD\u534F\u8BAE\u7684 MCP \u670D\u52A1\u5668\uFF0C\u914D\u5408 Nacos Server \u7684\u7BA1\u7406\u80FD\u529B\uFF0C\u91CD\u70B9\u89E3\u51B3\u8F6F\u4EF6\u4F9B\u5E94\u94FE\u5B89\u5168\u7684\u95EE\u9898\u3002</font>
3. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u5DE5\u5177\u4EE3\u7406\u8C03\u7528</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u4EE3\u7406 LLM \u5BF9\u76EE\u6807 MCP \u670D\u52A1\u5668\u5DE5\u5177\u7684\u8C03\u7528\uFF0C\u901A\u8FC7\u4E00\u4E2A\u672C\u5730\u4EE3\u7406\u7684\u65B9\u5F0F\u89E3\u51B3 Local Server \u4E0E Remote Server \u8C03\u7528\u7684\u7075\u6D3B\u5207\u6362\u95EE\u9898\u3002</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u901A\u8FC7\u4EE5\u4E0A\u7684\u51E0\u4E2A\u80FD\u529B\uFF0C\u6211\u4EEC\u642D\u5EFA\u4E86\u4E00\u79CD\u6DF7\u5408 MCP Server \u67B6\u6784\u7684\u6A21\u5F0F\uFF0C\u53EF\u4EE5\u5B9E\u73B0MCP\u670D\u52A1\u7684\u7EDF\u4E00\u7BA1\u7406\u548C\u667A\u80FD\u8DEF\u7531\uFF0C\u5927\u5927\u7B80\u5316\u63D0\u5347\u5DE5\u5177\u9009\u62E9\u65F6\u7684\u6027\u80FD\u4E0E\u4F01\u4E1A\u7EA7 MCP \u90E8\u7F72\u7684\u590D\u6742\u5EA6\u3002</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499272587-5cdc3629-7a26-47f0-ad1c-cfc8c8a51a41.png)

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos\u4E0EMCP\u7684\u5B9E\u6218\u96C6\u6210</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E0B\u9762\u901A\u8FC7\u4E00\u4E2A\u5B9E\u9645\u6848\u4F8B\uFF0C\u5C55\u793A\u5982\u4F55\u4F7F\u7528Nacos\u548CNacos MCP Router\u6784\u5EFA\u4F01\u4E1A\u7EA7MCP\u670D\u52A1\u3002</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u90E8\u7F72 </font><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos MCP Router</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u5728\u6709 NodeJS \u7684\u5F00\u53D1\u73AF\u5883\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u624B\u52A8\u90E8\u7F72Nacos MCP Router\uFF08\u4E0D\u8FC7\u8FD9\u4E00\u6B65\u4E0D\u662F\u5FC5\u987B\u7684\uFF09</font>

\`\`\`plain
$ pnpm i nacos-mcp-router@latest
\`\`\`

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u914D\u7F6EMCP\u5BA2\u6237\u7AEF</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u7136\u540E\uFF0C\u5728MCP\u5BA2\u6237\u7AEF\u914D\u7F6E\u4E2D\u6DFB\u52A0nacos-mcp-router\uFF1A</font>

\`\`\`plain
{
  "mcpServers": {
    "nacos-mcp-router": {
      "command": "npx",
      "args": [
        "nacos-mcp-router@latest"
      ],
      "env": {
        "NACOS_ADDR": "127.0.0.1:8848",
        "NACOS_USERNAME": "nacos",
        "NACOS_PASSWORD": "your_password"
      }
    }
  }
}
\`\`\`

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F7F\u7528MCP\u670D\u52A1</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u73B0\u5728\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7nacos-mcp-router\u4F7F\u7528\u5404\u79CDMCP\u670D\u52A1\uFF08\u6CE8\uFF1A\u4EE5\u4E0B\u6B65\u9AA4\u4E3A MCP Client \u4E0E Nacos Router \u81EA\u52A8\u4EA4\u4E92\u65F6\u7684\u6838\u5FC3\u65B9\u6CD5\uFF0C\u5E76\u4E0D\u662F\u7A0B\u5E8F\u5458\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u786C\u7F16\u7801\u7684\u5B9E\u73B0\uFF09\uFF1A</font>

1. <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u641C\u7D22MCP\u670D\u52A1\u5668\uFF1A</font>

\`\`\`plain
search_mcp_server(task_description="\u751F\u6210\u4E00\u5F20\u732B\u7684\u56FE\u7247", 
                  key_words="\u56FE\u50CF\u751F\u6210")
\`\`\`

1. <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u6DFB\u52A0MCP\u670D\u52A1\u5668\uFF1A</font>

\`\`\`plain
add_mcp_server(mcp_server_name="image-generator")
\`\`\`

1. <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4F7F\u7528MCP\u670D\u52A1\u5668\u5DE5\u5177\uFF1A</font>

\`\`\`plain
use_tool(mcp_server_name="image-generator",     
         mcp_tool_name="generate_image", 
         params={"prompt": "\u4E00\u53EA\u6A59\u8272\u7684\u732B"})
\`\`\`

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4F01\u4E1A\u4E2D\u843D\u5730 MCP \u67B6\u6784\u9009\u578B\u6307\u5357</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP \u793E\u533A\u8FD8\u5728\u98DE\u901F\u7684\u53D1\u5C55\u4E4B\u4E2D\uFF0C\u5728\u4F01\u4E1A\u7EA7\u573A\u666F\u7684\u80FD\u529B\u4E0A\u7684\u8BF8\u591A\u6838\u5FC3\u529F\u80FD\u8FD8\u6682\u65F6\u672A\u5F62\u6210\u7EDF\u4E00\u7684\u6807\u51C6\uFF0C\u57FA\u4E8E\u76EE\u524D\u7684\u80FD\u529B\uFF0C\u6211\u4EEC\u5728\u9009\u62E9\u9002\u5408\u4F01\u4E1A\u7684MCP\u67B6\u6784\u8FDB\u884C\u843D\u5730\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8003\u8651\u4EE5\u4E0B\u5173\u952E\u56E0\u7D20\uFF1A</font>

1. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u6570\u636E\u5B89\u5168\u4E0E\u9690\u79C1</font>**
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u9AD8\u654F\u611F\u6570\u636E\uFF1A\u4F18\u5148\u8003\u8651\u672C\u5730\u90E8\u7F72\u67B6\u6784\uFF08\u67B6\u6784\u4E09\u3001\u67B6\u6784\u56DB\uFF09</font>
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E00\u822C\u4E1A\u52A1\u6570\u636E\uFF1A\u53EF\u8003\u8651\u4E91\u7AEF\u6216\u6DF7\u5408\u67B6\u6784\uFF08\u67B6\u6784\u4E00\u3001\u67B6\u6784\u4E8C\u3001\u67B6\u6784\u4E94\uFF09</font>
2. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u6027\u80FD\u4E0E\u5EF6\u8FDF\u8981\u6C42</font>**
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4F4E\u5EF6\u8FDF\u5173\u952E\u5E94\u7528\uFF1A\u4F18\u5148\u8003\u8651\u672C\u5730\u90E8\u7F72\u67B6\u6784</font>
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E00\u822C\u6027\u80FD\u8981\u6C42\uFF1A\u4E91\u7AEF\u67B6\u6784\u901A\u5E38\u8DB3\u591F</font>
3. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u53EF\u6269\u5C55\u6027\u9700\u6C42</font>**
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u9700\u8981\u5FEB\u901F\u5F39\u6027\u6269\u5C55\uFF1A\u4F18\u5148\u8003\u8651\u4E91\u7AEF\u67B6\u6784</font>
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u53EF\u9884\u6D4B\u7684\u7A33\u5B9A\u8D1F\u8F7D\uFF1A\u672C\u5730\u90E8\u7F72\u53EF\u80FD\u66F4\u7ECF\u6D4E</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u57FA\u4E8E\u8FD9\u4E9B\u56E0\u7D20\uFF0C\u4E0D\u540C\u884C\u4E1A\u53EF\u80FD\u7684\u9009\u62E9\u53EF\u80FD\u7684\u53C2\u8003\u5982\u4E0B\uFF1A</font>

+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u91D1\u878D\u884C\u4E1A</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u56DB\uFF08\u672C\u5730\u4EE3\u7406+\u672C\u5730\u670D\u52A1\u5668\uFF09\u6700\u4E3A\u9002\u5408\uFF0C\u6EE1\u8DB3\u4E25\u683C\u7684\u6570\u636E\u5B89\u5168\u8981\u6C42</font>
+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u4E92\u8054\u7F51\u884C\u4E1A</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u4E8C\uFF08\u4EE3\u7406+\u8FDC\u7A0B\u670D\u52A1\u5668\uFF09\u652F\u6301\u5FEB\u901F\u5F39\u6027\u6269\u5C55\uFF0C\u9002\u5408\u9AD8\u5E76\u53D1\u573A\u666F</font>
+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u5236\u9020\u4E1A</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u4E94\uFF08\u6DF7\u5408\u6A21\u5F0F\uFF09\u5E73\u8861\u4E86\u672C\u5730\u5B9E\u65F6\u63A7\u5236\u548C\u4E91\u7AEF\u667A\u80FD\u5206\u6790\u7684\u9700\u6C42</font>
+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u653F\u5E9C\u90E8\u95E8</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\uFF1A\u67B6\u6784\u4E09\uFF08\u76F4\u8FDE\u672C\u5730\u670D\u52A1\u5668\uFF09\u63D0\u4F9B\u6700\u9AD8\u7EA7\u522B\u7684\u6570\u636E\u5B89\u5168\u548C\u9690\u79C1\u4FDD\u62A4</font>

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">\u7ED3\u8BBA\u4E0E\u5C55\u671B</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP \u76EE\u524D\u9ED8\u8BA4\u6210\u4E3A\u4E86 AI \u5927\u6A21\u578B\u4E0E\u5B58\u91CF\u4E1A\u52A1\u6570\u636E\u4E92\u901A\u7684\u7BA1\u9053\uFF0C\u4F46\u7531\u4E8E\u76EE\u524D\u7684 MCP \u534F\u8BAE\u672C\u8EAB\u4ECE\u8BBE\u8BA1\u4E0A\u672A\u592A\u591A\u8003\u8651\u4F01\u4E1A\u7EA7\u843D\u5730\u7684\u60C5\u51B5\uFF0C\u5BFC\u81F4\u5F88\u591A\u7684\u4F01\u4E1A\u8FD8\u5904\u5728\u89C2\u671B\u7684\u72B6\u6001\u3002MCP\u8981\u60F3\u5B8C\u6574\u843D\u5730\uFF0C</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u4E2D\u5FC3\u5316\u7684\u6CE8\u518C\u4E2D\u5FC3\u3001\u53EF\u63A7\u7684\u8F6F\u4EF6\u4F9B\u5E94\u94FE\u3001\u5B89\u5168\u7684\u8BBF\u95EE\u63A7\u5236 </font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">\u8FD9\u4E09\u65B9\u9762\u7684\u5EFA\u8BBE\u5FC5\u4E0D\u53EF\u5C11\u3002\u5728\u6211\u4EEC\u7684\u65B9\u6848\u4E2D\uFF0C\u4E3B\u8981\u901A\u8FC7 Nacos \u4F5C\u4E3A MCP \u7684\u672A\u6765\u4F01\u4E1A MCP \u7684\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u901A\u8FC7 Nacos Server \u5BF9 MCP \u670D\u52A1\u5668\u7684\u7BA1\u7406\u80FD\u529B\uFF0C\u7ED3\u5408 Nacos Router \u505A\u5230\u8F6F\u4EF6\u4F9B\u5E94\u94FE\u7684\u7CBE\u51C6\u63A7\u5236\uFF1B\u540C\u65F6\u914D\u5408 Higress \u505A\u5230 MCP \u7684\u5B89\u5168\u8BBF\u95EE\uFF0C\u4EE5\u6B64\u7ED9\u6211\u4EEC\u7684\u4F01\u4E1A\u7EA7\u5BA2\u6237\u5E26\u6765 MCP \u5B8C\u6574\u7684\u89E3\u51B3\u65B9\u6848\u3002</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499273040-822d449a-6e2c-4881-853e-b6bdf4bfce07.png)

\u7279\u522B\u81F4\u8C22 Lingma-Agents ([https://github.com/apps/lingma-agents](https://github.com/apps/lingma-agents)) \u5728 Nacos Router \u5B9E\u73B0\u7684\u8FC7\u7A0B\u4E2D\u63D0\u4F9B\u81EA\u52A8\u5316\u7684 Code Review \u80FD\u529B\u3002


`},e=function(){return o},g=function(){return[{depth:2,slug:"mcp\u67B6\u6784\u7684\u6F14\u8FDB\u4E0E\u6311\u6218",text:"MCP\u67B6\u6784\u7684\u6F14\u8FDB\u4E0E\u6311\u6218"},{depth:2,slug:"\u4E94\u79CDmcp\u67B6\u6784\u6A21\u5F0F\u8BE6\u89E3",text:"\u4E94\u79CDMCP\u67B6\u6784\u6A21\u5F0F\u8BE6\u89E3"},{depth:3,slug:"\u67B6\u6784\u4E00mcp-client\u76F4\u8FDEremote-server-sse",text:"\u67B6\u6784\u4E00\uFF1AMCP Client\u76F4\u8FDERemote Server (SSE)"},{depth:3,slug:"\u67B6\u6784\u4E8Cmcp-client\u901A\u8FC7proxy\u8FDE\u63A5remote-server-sse",text:"\u67B6\u6784\u4E8C\uFF1AMCP Client\u901A\u8FC7Proxy\u8FDE\u63A5Remote Server (SSE)"},{depth:3,slug:"\u67B6\u6784\u4E09mcp-client\u76F4\u8FDElocal-server-stdio",text:"\u67B6\u6784\u4E09\uFF1AMCP Client\u76F4\u8FDELocal Server (STDIO)"},{depth:3,slug:"\u67B6\u6784\u56DBmcp-client\u901A\u8FC7local-proxy\u8FDE\u63A5local-server-stdio",text:"\u67B6\u6784\u56DB\uFF1AMCP Client\u901A\u8FC7Local Proxy\u8FDE\u63A5Local Server (STDIO)"},{depth:3,slug:"\u67B6\u6784\u4E94mcp-client\u901A\u8FC7local-proxy\u8FDE\u63A5remote-server-stdiosse",text:"\u67B6\u6784\u4E94\uFF1AMCP Client\u901A\u8FC7Local Proxy\u8FDE\u63A5Remote Server (STDIO+SSE)"},{depth:2,slug:"nacos\u5982\u4F55\u8D4B\u80FDmcp\u67B6\u6784",text:"Nacos\u5982\u4F55\u8D4B\u80FDMCP\u67B6\u6784"},{depth:3,slug:"nacos-mcp-router\u8FDE\u63A5-mcp-\u4E0E-nacos-\u7684\u6865\u6881",text:"Nacos MCP Router\uFF1A\u8FDE\u63A5 MCP \u4E0E Nacos \u7684\u6865\u6881"},{depth:2,slug:"nacos\u4E0Emcp\u7684\u5B9E\u6218\u96C6\u6210",text:"Nacos\u4E0EMCP\u7684\u5B9E\u6218\u96C6\u6210"},{depth:3,slug:"\u90E8\u7F72-nacos-mcp-router",text:"\u90E8\u7F72 Nacos MCP Router"},{depth:3,slug:"\u914D\u7F6Emcp\u5BA2\u6237\u7AEF",text:"\u914D\u7F6EMCP\u5BA2\u6237\u7AEF"},{depth:3,slug:"\u4F7F\u7528mcp\u670D\u52A1",text:"\u4F7F\u7528MCP\u670D\u52A1"},{depth:2,slug:"\u4F01\u4E1A\u4E2D\u843D\u5730-mcp-\u67B6\u6784\u9009\u578B\u6307\u5357",text:"\u4F01\u4E1A\u4E2D\u843D\u5730 MCP \u67B6\u6784\u9009\u578B\u6307\u5357"},{depth:2,slug:"\u7ED3\u8BBA\u4E0E\u5C55\u671B",text:"\u7ED3\u8BBA\u4E0E\u5C55\u671B"}]},r=a((k,v,C)=>{const{layout:m,...c}=l;return c.file=t,c.url=n,f`${d()}${i(o)}`})});export{r as Content,u as __tla,e as compiledContent,r as default,t as file,l as frontmatter,g as getHeadings,s as rawContent,n as url};
