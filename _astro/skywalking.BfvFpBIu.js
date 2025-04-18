import{c as r,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as E,m as o,u as y,__tla as v}from"./constant.Dh5mkKue.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let e,l,n,a,i,c,t,u=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<p><a href="https://higress.cn/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress</a> \u4E00\u4E2A\u9075\u5FAA\u5F00\u6E90Ingress/Gateway API\u6807\u51C6\uFF0C\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\u3002</p>
<p><a href="https://skywalking.apache.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Skywalking</a> \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u53EF\u89C2\u6D4B\u5E73\u53F0\uFF0C\u7528\u4E8E\u4ECE\u670D\u52A1\u548C\u4E91\u539F\u751F\u57FA\u7840\u8BBE\u65BD\u6536\u96C6\uFF0C\u5206\u6790\uFF0C \u805A\u5408\u53CA\u53EF\u89C6\u5316\u6570\u636E\u3002</p>
<p><a href="https://github.com/2456868764/httpbin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Httpbin</a> \u662F\u57FA\u4E8E Gin \u5F00\u53D1\uFF0C\u7528\u4E8E\u5FEB\u901F\u6D4B\u8BD5\u57FA\u4E8E\u4E91\u539F\u751F\u5FAE\u670D\u52A1\u53EF\u89C2\u6D4B\u6027\u548C\u6D41\u91CF\u7BA1\u7406\u7B49\u529F\u80FD\u3002</p>
<p>\u672C\u6587\u4ECB\u7ECD Higress \u96C6\u6210 Skywalking \u5B9E\u73B0\u53EF\u89C2\u6D4B\u6027\uFF0C\u4E3B\u8981\u5185\u5BB9\u6D89\u53CA\u6574\u4F53\u67B6\u6784\u3001Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406\u3001Higress \u67B6\u6784\u3001\u4E1A\u52A1\u5E94\u7528\u96C6\u6210 Skywalking\u3001\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA\u3001Higress \u914D\u7F6E\u3001\u5E94\u7528\u5B89\u88C5\u3001\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E\u4EE5\u53CA Higress gateway \u6307\u6807\u548C\u76D1\u63A7\u9762\u677F\u3002</p>
<p>\u8FD9\u6B21\u53EF\u89C2\u6D4B\u6027\u63A2\u7D22\u76F8\u5173 manifests <a href="https://gitcode.net/-/snippets/3612" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E0B\u8F7D\u5730\u5740</a></p>
<h2 id="\u4E00\u6574\u4F53\u67B6\u6784\u56FE">\u4E00\u3001\u6574\u4F53\u67B6\u6784\u56FE</h2>
<p><img src="/img/blog/skywalking/higress.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u6574\u4F53\u5305\u542B\u56DB\u5927\u5757\u5185\u5BB9\uFF1A</p>
<ul>
<li>Higress \u7EC4\u4EF6\uFF1A    higress-gateway, higress-console, higress-controller</li>
<li>Skywalking \u7EC4\u4EF6\uFF1A skywalking dashboard ui, skywalking aop server</li>
<li>\u4E1A\u52A1\u5E94\u7528\u7EC4\u4EF6\uFF1A     bff, middle service, backend service</li>
<li>Ingress \u7EC4\u4EF6\uFF1A    skywalking.higress.io, httpbin.example.com</li>
</ul>
<h2 id="\u4E8Cskywalking-\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406">\u4E8C\u3001Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406</h2>
<p>SkyWalking\u4E3A\u670D\u52A1(service)\uFF0C\u670D\u52A1\u5B9E\u4F8B(service instance)\uFF0C\u4EE5\u53CA\u7AEF\u70B9(endpoint)\u63D0\u4F9B\u4E86\u53EF\u89C2\u6D4B\u80FD\u529B\u3002</p>
<ul>
<li>\u670D\u52A1(service)\uFF1A\u8868\u793A\u5BF9\u8BF7\u6C42\u63D0\u4F9B\u76F8\u540C\u884C\u4E3A\u7684\u4E00\u7EC4\u5DE5\u4F5C\u8D1F\u8F7D\u3002\u5728\u4F7F\u7528\u6253\u70B9\u4EE3\u7406\u6216 SDK \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u670D\u52A1\u7684\u540D\u5B57\u3002</li>
<li>\u670D\u52A1\u5B9E\u4F8B(Service Instance)\uFF1A\u4E00\u7EC4\u5DE5\u4F5C\u8D1F\u8F7D\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5DE5\u4F5C\u8D1F\u8F7D\u79F0\u4E3A\u4E00\u4E2A\u5B9E\u4F8B\u3002</li>
<li>\u7AEF\u70B9(Endpoint)\uFF1A \u5BF9\u4E8E\u7279\u5B9A\u670D\u52A1\u6240\u63A5\u6536\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u5982 HTTP \u7684 URI \u8DEF\u5F84\u548C gRPC \u670D\u52A1\u7684\u7C7B\u540D + \u65B9\u6CD5\u7B7E\u540D\u3002</li>
<li>\u8FDB\u7A0B\uFF08Process\uFF09\uFF1A \u64CD\u4F5C\u7CFB\u7EDF\u8FDB\u7A0B. \u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u4E00\u4E2A\u670D\u52A1\u5B9E\u4F8B\u548C\u8FDB\u7A0B\u4E0D\u662F\u4E00\u4E00\u5BF9\u5E94\uFF0C \u5728k8s\u90E8\u7F72\u4E0B\uFF0C\u4E00\u4E2APOD\u5BF9\u5E94\u591A\u4E2A\u8FDB\u7A0B\u3002</li>
</ul>
<h3 id="skywalking-\u6574\u4F53\u67B6\u6784">Skywalking \u6574\u4F53\u67B6\u6784</h3>
<p><img src="/img/blog/skywalking/skywalking1.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u4E3B\u8981\u7531\u56DB\u4E2A\u6838\u5FC3\u7EC4\u4EF6\u7EC4\u6210\uFF1A</p>
<ul>
<li>\u63A2\u9488: \u63A2\u9488\u7528\u4E8E\u6536\u96C6\u76D1\u6D4B\u6570\u636E\u5305\u62EC\u6307\u6807\uFF0C\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u65E5\u5FD7\u548C\u4E8B\u4EF6</li>
<li>\u6570\u636E\u63A5\u6536\u548C\u805A\u5408: \u5E73\u53F0\u540E\u7AEF\u652F\u6301\u6570\u636E\u805A\u5408\uFF0C\u6570\u636E\u5206\u6790\u4EE5\u53CA\u9A71\u52A8\u6570\u636E\u6D41\u4ECE\u63A2\u9488\u5230\u7528\u6237\u754C\u9762\u7684\u5904\u7406</li>
<li>\u5B58\u50A8: \u901A\u8FC7\u5F00\u653E\u63A5\u53E3\u652F\u6301\u540E\u7AEF\u5B58\u50A8\u7CFB\u7EDF\u652F\u6301ElasticSearch, H2, MySQL, TiDB, BanyanDB\u7B49</li>
<li>UI:  \u4E00\u4E2A\u5B9A\u5236\u5316\u7684Web\u7CFB\u7EDF\uFF0C\u7528\u6237\u53EF\u4EE5\u53EF\u89C6\u5316\u67E5\u770B\u548C\u7BA1\u7406 SkyWalking \u6570\u636E</li>
</ul>
<h3 id="\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u539F\u7406\u5206\u6790">\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u539F\u7406\u5206\u6790</h3>
<ol>
<li>\u5206\u5E03\u5F0F\u94FE\u8DEF\u4ECB\u7ECD</li>
</ol>
<p>\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u662F\u8BB0\u5F55\u6765\u6E90\u4E8E\u7528\u6237\u8BF7\u6C42\u5728\u5404\u4E2A\u7CFB\u7EDF\u6216\u8005\u670D\u52A1\u4E2D\u6240\u4F20\u64AD\u7684\u8DEF\u5F84\u3002</p>
<blockquote>
<p>A distributed trace, more commonly known as a trace, records the paths taken by requests (made by an application or end-user) as they propagate through multi-service architectures, like microservice and serverless applications.</p>
</blockquote>
<p>\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u56FE\u793A\u5982\u4E0B\uFF1A</p>
<p><img src="/img/blog/skywalking/higress13.png" alt="img.png" referrerpolicy="no-referrer"></p>
<ol start="2">
<li>Skywalking \u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A</li>
</ol>
<p>\u4E3B\u8981\u5305\u542B\u56DB\u4E2A\u5185\u5BB9\uFF1A</p>
<ul>
<li>Trace: \u4E00\u4E2A\u5B8C\u6574\u7684\u94FE\u8DEF\u7531\u591A\u4E2A Segment \u7EC4\u6210</li>
<li>Segment: \u4E00\u4E2A\u8BF7\u6C42\u5728\u4E00\u4E2A\u8FDB\u7A0B\u5185\u7684\u8F68\u8FF9</li>
<li>Span: \u4E00\u4E2A\u8BF7\u6C42\u5728\u67D0\u4E2A\u8FDB\u7A0B\u91CC\u7684\u4E00\u4E2A\u7EC4\u4EF6\u903B\u8F91\u5185\u7684\u8F68\u8FF9, \u6709 Entry Span\uFF0C Local Span \u548C Exit Span \u4E09\u7C7B</li>
<li>Span context: \u8DE8\u8FDB\u7A0B\u6216\u8005\u670D\u52A1 Trace \u4F20\u9012\uFF0C\u8FD9\u91CC\u8BA8\u8BBA http \u4F20\u9012\u5934 sw8</li>
</ul>
<p>\u57FA\u672C\u7EC4\u4EF6\u56FE\u793A\u5982\u4E0B\uFF1A</p>
<p><img src="/img/blog/skywalking/skywalking_trace.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u51FA\uFF1A</p>
<ul>
<li>\u4E00\u4E2A Trace \u5185\u7684\u6240\u6709 span \u7684 Trace ID \u662F\u76F8\u540C\u7684</li>
<li>\u4E00\u4E2A Segment \u4E2D\u6709\u4E00\u4E2A EntrySpan\uFF0C\u662F Segment \u5185\u5176\u4ED6 Span \u7684\u6839 Parent</li>
<li>\u540E\u4E00\u4E2A Segment\u7684 Entryspan \u603B\u662F\u4E0E\u524D\u4E00\u4E2A Segment \u4E2D\u7684\u67D0\u4E2A ExitSpan \u5173\u8054</li>
</ul>
<ol start="3">
<li>Skywalking Trace \u7684\u6570\u636E\u534F\u8BAE</li>
</ol>
<p>\u5177\u4F53\u6570\u636E\u534F\u8BAE\u53C2\u8003 <a href="https://skywalking.apache.org/docs/main/next/en/api/trace-data-protocol-v3/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Skywalking Trace Data Protocol</a>, \u8FD9\u91CC\u4E3B\u8981\u8BB2\u4E00\u4E0B sw8 \u683C\u5F0F\u548C\u7EC4\u6210\u3002</p>
<p>sw8 \u683C\u5F0F: XXXXX-XXXXX-XXXX-XXXX\uFF0C\u4EE5 - \u5206\u5272\u3002
\u6837\u4F8B: 1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv</p>
<p>\u5177\u4F53\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u91C7\u6837\u6807\u8BB0(Sample):  0 \u6216\u8005 1\uFF0C 0 \u8868\u793A\u4E0D\u91C7\u6837 1 \u8868\u793A\u91C7\u6837</li>
<li>\u8DDF\u8E2AID(Trace ID): \u5B57\u7B26(BASE64 \u7F16\u7801)</li>
<li>\u7236Sengment ID (Parent trace segment ID): \u5B57\u7B26(BASE64 \u7F16\u7801)</li>
<li>\u7236 Span ID\uFF08Parent span ID): \u6574\u578B</li>
<li>\u7236\u670D\u52A1\u540D\u79F0(Parent service): \u5B57\u7B26(BASE64 \u7F16\u7801)</li>
<li>\u7236\u670D\u52A1\u5B9E\u4F8B(Parent service instance): \u5B57\u7B26(BASE64 \u7F16\u7801)</li>
<li>\u7236Endpoint(Parent endpoint): \u5B57\u7B26(BASE64 \u7F16\u7801)</li>
<li>\u76EE\u6807\u5730\u5740\uFF1A\u5B57\u7B26(BASE64 \u7F16\u7801)</li>
</ul>
<h2 id="\u4E09higress-\u67B6\u6784">\u4E09\u3001Higress \u67B6\u6784</h2>
<p>Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90 Istio + Envoy \u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B</p>
<p>\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301 Ingress\u4E0E Gateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B</p>
<p>\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002</p>
<p><img src="/img/blog/skywalking/higress12.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u56DB\u4E1A\u52A1\u5E94\u7528\u96C6\u6210-skywalking">\u56DB\u3001\u4E1A\u52A1\u5E94\u7528\u96C6\u6210 Skywalking</h2>
<p>\u4E1A\u52A1\u5E94\u7528\u901A\u8FC7\u4E0E <a href="https://github.com/SkyAPM/go2sky" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">go2sky</a> \u9879\u76EE\u96C6\u6210 SkyWalking \u76D1\u63A7 Golang \u5E94\u7528\u7A0B\u5E8F\uFF0C\u4E3B\u8981\u901A\u8FC7 Gin middleware \u548C Http \u8BF7\u6C42\u624B\u52A8\u57CB\u70B9\u3002</p>
<p>1\u3001\u96C6\u6210 Gin middleware</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">middleware</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">engine</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">gin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Engine</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">tracer</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">go2sky</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Tracer</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">gin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HandlerFunc</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> engine </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">||</span><span style="--0:#E1E4E8"> tracer </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">c</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">gin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Context</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">c.</span><span style="--0:#B392F0">Next</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">c</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">gin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Context</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">HasPrefix</span><span style="--0:#E1E4E8">(c.Request.URL.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">(), skipProbPrefix) </span><span style="--0:#F97583">||</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">HasPrefix</span><span style="--0:#E1E4E8">(c.Request.URL.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">(), skipMetricsPrefix) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">c.</span><span style="--0:#B392F0">Next</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span, ctx, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> tracer.</span><span style="--0:#B392F0">CreateEntrySpan</span><span style="--0:#E1E4E8">(c.Request.</span><span style="--0:#B392F0">Context</span><span style="--0:#E1E4E8">(), </span><span style="--0:#B392F0">getOperationName</span><span style="--0:#E1E4E8">(c), </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">key</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> c.Request.Header.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(key), </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">c.</span><span style="--0:#B392F0">Next</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">SetComponent</span><span style="--0:#E1E4E8">(componentIDGINHttpServer)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">Tag</span><span style="--0:#E1E4E8">(go2sky.TagHTTPMethod, c.Request.Method)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">Tag</span><span style="--0:#E1E4E8">(go2sky.TagURL, c.Request.Host</span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8">c.Request.URL.Path)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">SetSpanLayer</span><span style="--0:#E1E4E8">(agentv3.SpanLayer_Http)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">c.Request </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> c.Request.</span><span style="--0:#B392F0">WithContext</span><span style="--0:#E1E4E8">(ctx)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">c.</span><span style="--0:#B392F0">Next</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">len</span><span style="--0:#E1E4E8">(c.Errors) </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">(time.</span><span style="--0:#B392F0">Now</span><span style="--0:#E1E4E8">(), c.Errors.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">Tag</span><span style="--0:#E1E4E8">(go2sky.TagStatusCode, strconv.</span><span style="--0:#B392F0">Itoa</span><span style="--0:#E1E4E8">(c.Writer.</span><span style="--0:#B392F0">Status</span><span style="--0:#E1E4E8">()))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">span.</span><span style="--0:#B392F0">End</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">getOperationName</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">c</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">gin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Context</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"/</span><span style="--0:#79B8FF">%s%s</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, c.Request.Method, c.</span><span style="--0:#B392F0">FullPath</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func middleware(engine *gin.Engine, tracer *go2sky.Tracer) gin.HandlerFunc {\x7F  if engine == nil || tracer == nil {\x7F    return func(c *gin.Context) {\x7F      c.Next()\x7F    }\x7F  }\x7F  return func(c *gin.Context) {\x7F    if strings.HasPrefix(c.Request.URL.String(), skipProbPrefix) || strings.HasPrefix(c.Request.URL.String(), skipMetricsPrefix) {\x7F      c.Next()\x7F      return\x7F    }\x7F    span, ctx, err := tracer.CreateEntrySpan(c.Request.Context(), getOperationName(c), func(key string) (string, error) {\x7F      return c.Request.Header.Get(key), nil\x7F    })\x7F    if err != nil {\x7F      c.Next()\x7F      return\x7F    }\x7F    span.SetComponent(componentIDGINHttpServer)\x7F    span.Tag(go2sky.TagHTTPMethod, c.Request.Method)\x7F    span.Tag(go2sky.TagURL, c.Request.Host+c.Request.URL.Path)\x7F    span.SetSpanLayer(agentv3.SpanLayer_Http)\x7F\x7F    c.Request = c.Request.WithContext(ctx)\x7F\x7F    c.Next()\x7F\x7F    if len(c.Errors) > 0 {\x7F      span.Error(time.Now(), c.Errors.String())\x7F    }\x7F    span.Tag(go2sky.TagStatusCode, strconv.Itoa(c.Writer.Status()))\x7F    span.End()\x7F  }\x7F}\x7F\x7Ffunc getOperationName(c *gin.Context) string {\x7F  return fmt.Sprintf(&#x22;/%s%s&#x22;, c.Request.Method, c.FullPath())\x7F}"><div></div></button></div></figure></div>
<p>2\u3001Http\u8BF7\u6C42\u624B\u52A8\u57CB\u70B9</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">traceHttpCall</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">c</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">gin</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Context</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">req</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Request</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">url</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">fn</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">req</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Request</span><span style="--0:#E1E4E8">) (</span><span style="--0:#F97583">*</span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Response</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">)) (</span><span style="--0:#F97583">*</span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Response</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">tracer </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> go2sky.</span><span style="--0:#B392F0">GetGlobalTracer</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> tracer </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">resp, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">fn</span><span style="--0:#E1E4E8">(req)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> resp, err</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">reqSpan, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> go2sky.</span><span style="--0:#B392F0">GetGlobalTracer</span><span style="--0:#E1E4E8">().</span><span style="--0:#B392F0">CreateExitSpan</span><span style="--0:#E1E4E8">(c.Request.</span><span style="--0:#B392F0">Context</span><span style="--0:#E1E4E8">(), </span><span style="--0:#9ECBFF">"invoke"</span><span style="--0:#E1E4E8">, url, </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">headerKey</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">headerValue</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">req.Header.</span><span style="--0:#B392F0">Set</span><span style="--0:#E1E4E8">(headerKey, headerValue)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">reqSpan.</span><span style="--0:#B392F0">SetComponent</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">reqSpan.</span><span style="--0:#B392F0">SetSpanLayer</span><span style="--0:#E1E4E8">(v3.SpanLayer_Http)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">resp, err2 </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">fn</span><span style="--0:#E1E4E8">(req)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">reqSpan.</span><span style="--0:#B392F0">Tag</span><span style="--0:#E1E4E8">(go2sky.TagHTTPMethod, http.MethodGet)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">reqSpan.</span><span style="--0:#B392F0">Tag</span><span style="--0:#E1E4E8">(go2sky.TagURL, url)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">reqSpan.</span><span style="--0:#B392F0">End</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> resp, err2</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func traceHttpCall(c *gin.Context, req *http.Request, url string, fn func(req *http.Request) (*http.Response, error)) (*http.Response, error) {\x7F  tracer := go2sky.GetGlobalTracer()\x7F  if tracer == nil {\x7F    resp, err := fn(req)\x7F    return resp, err\x7F  }\x7F\x7F  reqSpan, err := go2sky.GetGlobalTracer().CreateExitSpan(c.Request.Context(), &#x22;invoke&#x22;, url, func(headerKey, headerValue string) error {\x7F    req.Header.Set(headerKey, headerValue)\x7F    return nil\x7F  })\x7F\x7F  reqSpan.SetComponent(2)\x7F  reqSpan.SetSpanLayer(v3.SpanLayer_Http)\x7F  resp, err2 := fn(req)\x7F  reqSpan.Tag(go2sky.TagHTTPMethod, http.MethodGet)\x7F  reqSpan.Tag(go2sky.TagURL, url)\x7F  reqSpan.End()\x7F  return resp, err2\x7F\x7F}"><div></div></button></div></figure></div>
<h2 id="\u4E94\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA">\u4E94\u3001\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA</h2>
<ol>
<li>\u672C\u5730\u5B89\u88C5 kubectl, kind, helm</li>
</ol>
<p>\u53EF\u4EE5\u53C2\u8003 Higress <a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5FEB\u901F\u5F00\u59CB</a>\u5B89\u88C5 kubectl, kind\u3002
helm \u5B89\u88C5\u53C2\u8003<a href="https://helm.sh/zh/docs/intro/install/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B89\u88C5\u6587\u6863</a></p>
<ol start="2">
<li>\u5B89\u88C5 higress \u548C istio CRD</li>
</ol>
<p>\u53EF\u4EE5\u53C2\u8003 higress <a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5FEB\u901F\u5F00\u59CB</a> \u548C <a href="https://higress.cn/docs/latest/ops/deploy-by-helm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B89\u88C5\u90E8\u7F72</a> \u6765\u90E8\u7F72\uFF0C\u8FD9\u91CC\u9700\u8981\u5B89\u88C5  Istio CRD\u3002</p>
<p>\u4E0B\u9762\u662F\u4E00\u4E2A\u53C2\u8003\u5B89\u88C5\u547D\u4EE4:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.onlyPushRouteCluster=</span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-core.skywalking.enabled=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-core.skywalking.service.address=skywalking-oap-server.op-system.svc.cluster.local</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-core.skywalking.service.port=</span><span style="--0:#79B8FF">11800</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system --set global.onlyPushRouteCluster=false --set higress-core.skywalking.enabled=true  --set higress-core.skywalking.service.address=skywalking-oap-server.op-system.svc.cluster.local  --set higress-core.skywalking.service.port=11800 higress.io/higress"><div></div></button></div></figure></div>
<ol start="3">
<li>\u90E8\u7F72 Skywalking\uFF0C\u4E1A\u52A1\u5E94\u7528\u548C Ingress</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">export</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">KUBECONFIG=</span><span style="--0:#E1E4E8">\${HOME}</span><span style="--0:#9ECBFF">/.kube/config_higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">skywalking.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">app.yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ingress.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ export KUBECONFIG=\${HOME}/.kube/config_higress\x7F$ kubectl apply -f skywalking.yaml\x7F$ kubectl apply -f app.yaml\x7F$ kubectl apply -f ingress.yaml"><div></div></button></div></figure></div>
<p>\u68C0\u67E5 POD \u8FD0\u884C\u72B6\u6001\u548C Ingress \u72B6\u6001</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">export</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">KUBECONFIG=</span><span style="--0:#E1E4E8">\${HOME}</span><span style="--0:#9ECBFF">/.kube/config_higress</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">NAME</span><span style="--0:#E1E4E8">                                         </span><span style="--0:#9ECBFF">READY</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">STATUS</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">RESTARTS</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">AGE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">higress-console-6f554978dc-cclg7</span><span style="--0:#E1E4E8">             </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">100m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">higress-console-grafana-7495766db4-4flq5</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">131m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">higress-console-prometheus-6d7bdccfb-hxtsq</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">131m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">higress-controller-689c5b965f-7wsmt</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">2/2</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">131m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">higress-gateway-59966b45d9-z7ltd</span><span style="--0:#E1E4E8">             </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">131m</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">op-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">NAME</span><span style="--0:#E1E4E8">                                        </span><span style="--0:#9ECBFF">READY</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">STATUS</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">RESTARTS</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">AGE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">skywalking-oap-dashboard-65f496ccc9-dr96l</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">skywalking-oap-server-859694656b-p8vcq</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">app-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">NAME</span><span style="--0:#E1E4E8">                       </span><span style="--0:#9ECBFF">READY</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">STATUS</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">RESTARTS</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">AGE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">backend-6b9549bc64-f98tr</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">backend-6b9549bc64-x2btl</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">bff-766967f8db-8ght7</span><span style="--0:#E1E4E8">       </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">bff-766967f8db-gflbh</span><span style="--0:#E1E4E8">       </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">middle-6f4dd7bf6c-qdjqj</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">middle-6f4dd7bf6c-stzf4</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">1/1</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">Running</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">          </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">app-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">NAME</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">TYPE</span><span style="--0:#E1E4E8">        </span><span style="--0:#9ECBFF">CLUSTER-IP</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">EXTERNAL-IP</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">PORT</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">S</span><span style="--0:#E1E4E8">)   </span><span style="--0:#9ECBFF">AGE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">backend</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">ClusterIP</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">10.96.179.140</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">&#x3C;none></span><span style="--0:#E1E4E8">        </span><span style="--0:#9ECBFF">80/TCP</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">bff</span><span style="--0:#E1E4E8">       </span><span style="--0:#9ECBFF">ClusterIP</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">10.96.121.62</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">&#x3C;none></span><span style="--0:#E1E4E8">        </span><span style="--0:#9ECBFF">80/TCP</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">middle</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">ClusterIP</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">10.96.55.8</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">&#x3C;none></span><span style="--0:#E1E4E8">        </span><span style="--0:#9ECBFF">80/TCP</span><span style="--0:#E1E4E8">    </span><span style="--0:#9ECBFF">99m</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ingress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">NAME</span><span style="--0:#E1E4E8">                         </span><span style="--0:#9ECBFF">CLASS</span><span style="--0:#E1E4E8">     </span><span style="--0:#9ECBFF">HOSTS</span><span style="--0:#E1E4E8">                   </span><span style="--0:#9ECBFF">ADDRESS</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">PORTS</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">AGE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">httpbin</span><span style="--0:#E1E4E8">                      </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">httpbin.example.com</span><span style="--0:#E1E4E8">               </span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">8s</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">skywalking-dashboard</span><span style="--0:#E1E4E8">         </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">skywalking.higress.io</span><span style="--0:#E1E4E8">             </span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">8s</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ export KUBECONFIG=\${HOME}/.kube/config_higress\x7F\x7F$ kubectl get pods -n higress-system\x7F\x7FNAME                                         READY   STATUS    RESTARTS   AGE\x7Fhigress-console-6f554978dc-cclg7             1/1     Running   0          100m\x7Fhigress-console-grafana-7495766db4-4flq5     1/1     Running   0          131m\x7Fhigress-console-prometheus-6d7bdccfb-hxtsq   1/1     Running   0          131m\x7Fhigress-controller-689c5b965f-7wsmt          2/2     Running   0          131m\x7Fhigress-gateway-59966b45d9-z7ltd             1/1     Running   0          131m\x7F\x7F$ kubectl get pods -n op-system\x7F\x7FNAME                                        READY   STATUS    RESTARTS   AGE\x7Fskywalking-oap-dashboard-65f496ccc9-dr96l   1/1     Running   0          99m\x7Fskywalking-oap-server-859694656b-p8vcq      1/1     Running   0          99m\x7F\x7F$ kubectl get pods -n app-system\x7F\x7FNAME                       READY   STATUS    RESTARTS   AGE\x7Fbackend-6b9549bc64-f98tr   1/1     Running   0          99m\x7Fbackend-6b9549bc64-x2btl   1/1     Running   0          99m\x7Fbff-766967f8db-8ght7       1/1     Running   0          99m\x7Fbff-766967f8db-gflbh       1/1     Running   0          99m\x7Fmiddle-6f4dd7bf6c-qdjqj    1/1     Running   0          99m\x7Fmiddle-6f4dd7bf6c-stzf4    1/1     Running   0          99m\x7F\x7F$ kubectl get svc -n app-system\x7F\x7FNAME      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE\x7Fbackend   ClusterIP   10.96.179.140   <none>        80/TCP    99m\x7Fbff       ClusterIP   10.96.121.62    <none>        80/TCP    99m\x7Fmiddle    ClusterIP   10.96.55.8      <none>        80/TCP    99m\x7F\x7F$ kubectl get ingress -n higress-system\x7F\x7FNAME                         CLASS     HOSTS                   ADDRESS   PORTS   AGE\x7Fhttpbin                      higress   httpbin.example.com               80      8s\x7Fskywalking-dashboard         higress   skywalking.higress.io             80      8s"><div></div></button></div></figure></div>
<ol start="4">
<li>\u6D4B\u8BD5 Higress Console, Skywalking Dashboard, Bff \u670D\u52A1</li>
</ol>
<p>1\uFF09\u7F16\u8F91 /etc/hosts \u6587\u4EF6\u6DFB\u52A0\u4EE5\u4E0B\u4E09\u4E2A\u57DF\u540D</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">127.0.0.1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">skywalking.higress.io</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">127.0.0.1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">httpbin.example.com</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="127.0.0.1 skywalking.higress.io\x7F127.0.0.1 httpbin.example.com"><div></div></button></div></figure></div>
<p>2\uFF09\u6253\u5F00 higress-gateway \u7AEF\u53E3\u8F6C\u53D1</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">export</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">KUBECONFIG=</span><span style="--0:#E1E4E8">\${HOME}</span><span style="--0:#9ECBFF">/.kube/config_higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8080:80</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-console</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">18080:8080</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ export KUBECONFIG=\${HOME}/.kube/config_higress\x7F$ kubectl -n higress-system port-forward service/higress-gateway 8080:80\x7F$ kubectl -n higress-system port-forward service/higress-console 18080:8080"><div></div></button></div></figure></div>
<p>3\uFF09\u901A\u8FC7\u6D4F\u89C8\u5668\u6253\u5F00\u8BBF\u95EE\u4E0A\u9762\u4E09\u4E2A\u57DF\u540D</p>
<p>Higress \u63A7\u5236\u53F0: <a href="http://127.0.0.1:18080" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://127.0.0.1:8080</a>\u3002\u9996\u6B21\u8BBF\u95EE\u63A7\u5236\u53F0\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u7528\u6237\u3002\u521D\u59CB\u5316\u5B8C\u6210\u540E\u4F7F\u7528\u5BF9\u5E94\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5373\u53EF\u3002</p>
<p><img src="/img/blog/skywalking/higress1.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>Skywalking Dashboard: <a href="http://skywalking.higress.io:8080" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://skywalking.higress.io:8080</a></p>
<p><img src="/img/blog/skywalking/higress2.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>Bff \u670D\u52A1\uFF1A <a href="http://httpbin.example.com:8080/hostname" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://httpbin.example.com:8080/hostname</a></p>
<p><img src="/img/blog/skywalking/higress3.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u516Dhigress-\u96C6\u6210-skywalking-\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E">\u516D\u3001Higress \u96C6\u6210 Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E</h2>
<p>\u901A\u8FC7\u4FEE\u6539 Higress configmap \u5168\u5C40\u914D\u7F6E higress-config \u6765\u6FC0\u6D3B Higress \u96C6\u6210 Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">export</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">KUBECONFIG=</span><span style="--0:#E1E4E8">\${HOME}</span><span style="--0:#9ECBFF">/.kube/config_higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higgress-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ export KUBECONFIG=\${HOME}/.kube/config_higress\x7F$ kubectl edit configmap higgress-config -n higress-system"><div></div></button></div></figure></div>
<p>\u5728 data \u4E0B\u589E\u52A0 higress \u914D\u7F6E\u9879\u7136\u540E\u4FDD\u5B58\uFF0C\u5177\u4F53\u914D\u7F6E\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">data:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">higress:</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#B392F0">-</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">tracing:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">enable:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">sampling:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">timeout:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">500</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">skywalking:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">service:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">skywalking-oap-server.op-system.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">port:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">11800</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="data:\x7F  higress: |-\x7F    tracing:\x7F      enable: true\x7F      sampling: 100\x7F      timeout: 500\x7F      skywalking:\x7F        service: skywalking-oap-server.op-system.svc.cluster.local\x7F        port: 11800"><div></div></button></div></figure></div>
<h2 id="\u4E03skywalking-\u94FE\u8DEF\u8DDF\u8E2A">\u4E03\u3001Skywalking \u94FE\u8DEF\u8DDF\u8E2A</h2>
<h3 id="\u8FD0\u884C\u538B\u6D4B\u811A\u672C">\u8FD0\u884C\u538B\u6D4B\u811A\u672C</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> i </span><span style="--0:#F97583">in</span><span style="--0:#E1E4E8"> $(</span><span style="--0:#B392F0">seq</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1000</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">do</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host:httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:8080/hostname</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host:httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:8080/</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host:httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:8080/service?services=middle,backend</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">done</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="for i in $(seq 1 1000)\x7Fdo\x7F    curl -v -H &#x22;Host:httpbin.example.com&#x22; http://127.0.0.1:8080/hostname\x7F    curl -v -H &#x22;Host:httpbin.example.com&#x22; http://127.0.0.1:8080/\x7F    curl -v -H &#x22;Host:httpbin.example.com&#x22; http://127.0.0.1:8080/service?services=middle,backend\x7Fdone"><div></div></button></div></figure></div>
<h3 id="\u8C03\u7528-bff-\u670D\u52A1-service-\u63A5\u53E3\u6765\u6A21\u62DF\u8C03\u7528\u94FE\u8DEF">\u8C03\u7528 bff \u670D\u52A1 /service \u63A5\u53E3\u6765\u6A21\u62DF\u8C03\u7528\u94FE\u8DEF</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Host:httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:8080/service?services=middle,backend</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -H &#x22;Host:httpbin.example.com&#x22; http://127.0.0.1:8080/service?services=middle,backend"><div></div></button></div></figure></div>
<p>\u90E8\u5206\u8FD4\u56DE\u54CD\u5E94\u4F53\u60C5\u51B5\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"args"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"form"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"headers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"accept-encoding"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gzip"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"sw8"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"sw8-correlation"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"user-agent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Go-http-client/1.1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"x-httpbin-trace-host"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bff-766967f8db-jwn2g/middle-6f4dd7bf6c-qbxrm/backend-6b9549bc64-8twnx"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"x-httpbin-trace-service"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bff/middle/backend"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"x-request-id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"e5a1b250-ebe3-931d-91d7-90e3ee2fc867"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"method"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"origin"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"envs"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"NODE_NAME"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"higress-worker2"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"PATH"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"POD_IP"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"10.244.1.7"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"POD_NAME"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend-6b9549bc64-8twnx"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"POD_NAMESPACE"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"app-system"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"SERVICE_ACCOUNT"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"SERVICE_NAME"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"VERSION"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"v1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"host_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend-6b9549bc64-8twnx"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"body"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;args&#x22;: {\x7F  },\x7F  &#x22;form&#x22;: {\x7F  },\x7F  &#x22;headers&#x22;: {\x7F    &#x22;accept-encoding&#x22;: &#x22;gzip&#x22;,\x7F    &#x22;sw8&#x22;: &#x22;1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv&#x22;,\x7F    &#x22;sw8-correlation&#x22;: &#x22;&#x22;,\x7F    &#x22;user-agent&#x22;: &#x22;Go-http-client/1.1&#x22;,\x7F    &#x22;x-httpbin-trace-host&#x22;: &#x22;bff-766967f8db-jwn2g/middle-6f4dd7bf6c-qbxrm/backend-6b9549bc64-8twnx&#x22;,\x7F    &#x22;x-httpbin-trace-service&#x22;: &#x22;bff/middle/backend&#x22;,\x7F    &#x22;x-request-id&#x22;: &#x22;e5a1b250-ebe3-931d-91d7-90e3ee2fc867&#x22;\x7F  },\x7F  &#x22;method&#x22;: &#x22;GET&#x22;,\x7F  &#x22;origin&#x22;: &#x22;&#x22;,\x7F  &#x22;url&#x22;: &#x22;/&#x22;,\x7F  &#x22;envs&#x22;: {\x7F    &#x22;NODE_NAME&#x22;: &#x22;higress-worker2&#x22;,\x7F    &#x22;PATH&#x22;: &#x22;/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin&#x22;,\x7F    &#x22;POD_IP&#x22;: &#x22;10.244.1.7&#x22;,\x7F    &#x22;POD_NAME&#x22;: &#x22;backend-6b9549bc64-8twnx&#x22;,\x7F    &#x22;POD_NAMESPACE&#x22;: &#x22;app-system&#x22;,\x7F    &#x22;SERVICE_ACCOUNT&#x22;: &#x22;backend&#x22;,\x7F    &#x22;SERVICE_NAME&#x22;: &#x22;backend&#x22;,\x7F    &#x22;VERSION&#x22;: &#x22;v1&#x22;\x7F  },\x7F  &#x22;host_name&#x22;: &#x22;backend-6b9549bc64-8twnx&#x22;,\x7F  &#x22;body&#x22;: &#x22;&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u5934\u4E2D\u548C\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u76F8\u5173\u6709\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">"sw8"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv",</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">"x-httpbin-trace-host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"bff-766967f8db-jwn2g/middle-6f4dd7bf6c-qbxrm/backend-6b9549bc64-8twnx",</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">"x-httpbin-trace-service"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"bff/middle/backend",</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;sw8&#x22;: &#x22;1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv&#x22;,\x7F&#x22;x-httpbin-trace-host&#x22;: &#x22;bff-766967f8db-jwn2g/middle-6f4dd7bf6c-qbxrm/backend-6b9549bc64-8twnx&#x22;,\x7F&#x22;x-httpbin-trace-service&#x22;: &#x22;bff/middle/backend&#x22;,"><div></div></button></div></figure></div>
<p>\u5176\u4E2D\uFF1A</p>
<ul>
<li>sw8:  Skywalking \u7528\u4E8E\u8DDF\u8E2A\u7684 Http Header</li>
<li>x-httpbin-trace-host: \u8C03\u7528\u94FE\u8DEF\u7ECF\u8FC7 POD_NAME</li>
<li>x-httpbin-trace-service: \u8C03\u7528\u94FE\u8DEF\u7ECF\u8FC7 SERVICE_NAME</li>
</ul>
<p>\u5728 Skywalking dashboard \u4E2D\u67E5\u770B\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u670D\u52A1\u622A\u56FE</li>
</ul>
<p><img src="/img/blog/skywalking/higress4-1.png" alt="img.png" referrerpolicy="no-referrer"></p>
<ul>
<li>\u8C03\u7528\u94FE\u8DEF\u622A\u56FE</li>
</ul>
<p><img src="/img/blog/skywalking/higress4.png" alt="img.png" referrerpolicy="no-referrer"></p>
<ul>
<li>\u8C03\u7528\u94FE\u8DEF\u62D3\u6251\u622A\u56FE</li>
</ul>
<p><img src="/img/blog/skywalking/higress5.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u516Bhigress-gateway-\u6307\u6807\u548C\u76D1\u63A7\u9762\u677F">\u516B\u3001Higress gateway \u6307\u6807\u548C\u76D1\u63A7\u9762\u677F</h2>
<p>\u53EF\u4EE5\u901A\u8FC7\u5EA6\u91CF\u5404\u4E2A\u7EC4\u4EF6\u7684\u6027\u80FD\u6307\u6807\uFF0C\u4F8B\u5982\u54CD\u5E94\u65F6\u95F4\u3001\u541E\u5410\u91CF\u3001\u9519\u8BEF\u7387\u3001\u8D44\u6E90\u4F7F\u7528\u7387\u7B49\u6307\u6807\u6765\u4E86\u89E3\u7CFB\u7EDF\u7684\u72B6\u6001\u548C\u6027\u80FD\u3002</p>
<p>\u6307\u6807\u6570\u636E\u5305\u542B\u6307\u6807\u540D\u79F0\uFF0C\u6307\u6807\u6807\u7B7E\uFF0C\u548C\u6307\u6807\u503C\uFF0C\u4E0B\u9762\u662F envoy_cluster_upstream_cx_total upstream\uFF08\u603B\u8FDE\u63A5\u6570\uFF09\u90E8\u5206\u6307\u6807\u6570\u636E\uFF0C</p>
<p>\u5176\u4E2D envoy_cluster_upstream_cx_total \u662F\u6307\u6807\u540D\u79F0\uFF0Ccluster_name \u662F\u6307\u6807\u6807\u7B7E\uFF0C16 \u662F\u6307\u6807\u503C\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_cx_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">envoy_cluster_upstream_cx_total</span><span style="--0:#9ECBFF">{cluster_name=</span><span style="--0:#B392F0">"outbound|80||bff.app-system.svc.cluster.local"</span><span style="--0:#B392F0">}</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">16</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="envoy_cluster_upstream_cx_total{cluster_name=&#x22;outbound|80||bff.app-system.svc.cluster.local&#x22;} 16"><div></div></button></div></figure></div>
<p>Higress \u6307\u6807\u6570\u636E\u5927\u4F53\u53EF\u4EE5\u5206\u4E3A\u4E09\u7C7B:</p>
<ul>
<li>Downstream \u4E0B\u6E38: \u6307\u6807\u4E0E\u5916\u6765\u7684\u8FDE\u63A5/\u8BF7\u6C42\u6709\u5173\uFF0C\u4E3B\u8981\u7531\u4FA6\u542C\u5668\uFF0CHTTP\u8FDE\u63A5\u7BA1\u7406\u5668\u7B49</li>
<li>UpStream \u4E0A\u6E38: \u6307\u6807\u4E0E\u5916\u5411\u7684\u8FDE\u63A5/\u8BF7\u6C42\u6709\u5173\uFF0C\u4E3B\u8981\u7531\u8FDE\u63A5\u6C60\uFF0C\u8DEF\u7531\u5668\uFF0C\u8FC7\u6EE4\u5668\uFF0C\u7194\u65AD\u7B49</li>
<li>Server \u8D1F\u8F7D: \u6307\u6807\u4FE1\u606F\u8BB0\u5F55 Higress gateway \u670D\u52A1\u5668\u5B9E\u4F8B\u7684\u8D1F\u8F7D\u7B49</li>
</ul>
<p>Higress \u6307\u6807\u6570\u636E\u7C7B\u578B\u4E3B\u8981\u6709\u4E09\u7C7B:</p>
<ul>
<li>Counter: \u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u53EA\u4F1A\u589E\u52A0\u800C\u4E0D\u4F1A\u51CF\u5C11\u3002\u4F8B\u5982\uFF0C\u603B\u8BF7\u6C42</li>
<li>Gauge: \u589E\u52A0\u548C\u51CF\u5C11\u7684\u65E0\u7B26\u53F7\u6574\u6570\u3002\u4F8B\u5982\uFF0C\u5F53\u524D\u6D3B\u52A8\u7684\u8BF7\u6C42</li>
<li>Histogram: \u4F5C\u4E3A\u6307\u6807\u6D41\u7684\u4E00\u90E8\u5206\u7684\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u7136\u540E\u7531\u6536\u96C6\u5668\u805A\u5408\u4EE5\u6700\u7EC8\u4EA7\u751F\u6C47\u603B\u7684\u767E\u5206\u4F4D\u503C(percentile\uFF0C\u5373\u5E73\u5E38\u8BF4\u7684 P99/P50/Pxx)\u3002\u4F8B\u5982\uFF0CUpstream \u54CD\u5E94\u65F6\u95F4</li>
</ul>
<p>\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u83B7\u53D6 Higress gateway \u652F\u6301\u7684\u6307\u6807\u548C\u7C7B\u578B</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">export</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HIGRESS_GATEWAY_POD=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-l</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">app=higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'jsonpath={.items[0].metadata.name}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">$HIGRESS_GATEWAY_POD</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:15020/stats/prometheus</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">grep</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"# TYPE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ export HIGRESS_GATEWAY_POD=$(kubectl get pods -l app=higress-gateway -o &#x27;jsonpath={.items[0].metadata.name}&#x27; -n higress-system)\x7F$ kubectl exec &#x22;$HIGRESS_GATEWAY_POD&#x22;  -n higress-system  -- curl -sS http://127.0.0.1:15020/stats/prometheus | grep &#x22;# TYPE&#x22;"><div></div></button></div></figure></div>
<p>\u90E8\u5206\u6307\u6807\u5185\u5BB9\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_cx_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_cx_tx_bytes_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_flow_control_backed_up_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_flow_control_drained_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_flow_control_paused_reading_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_flow_control_resumed_reading_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_internal_redirect_failed_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_internal_redirect_succeeded_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_101 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_200 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_201 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_301 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_302 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_304 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_401 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_404 counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_cancelled counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_completed counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_maintenance_mode counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_max_duration_reached counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_pending_failure_eject counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_pending_overflow counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_pending_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_per_try_idle_timeout counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_per_try_timeout counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_retry counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_retry_backoff_exponential counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_retry_backoff_ratelimited counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_retry_limit_exceeded counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_retry_overflow counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_retry_success counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_rx_reset counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_timeout counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_cluster_upstream_rq_tx_reset counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_cx_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_cx_tx_bytes_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_cx_upgrades_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_flow_control_paused_reading_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_flow_control_resumed_reading_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_completed counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_failed_path_normalization counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_header_timeout counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_http1_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_http2_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_http3_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_idle_timeout counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_max_duration_reached counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_non_relative_path counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_overload_close counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_redirected_with_normalized_path counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_rejected_via_ip_detection counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_response_before_rq_complete counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_rx_reset counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_timeout counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_too_large counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_total counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_tx_reset counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># TYPE envoy_http_downstream_rq_ws_on_non_ws_route counter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="...\x7F...\x7F..."><div></div></button></div></figure></div>
<p>\u5177\u4F53\u6307\u6807\u5B9A\u4E49\u53C2\u8003\u5982\u4E0B\uFF1A</p>
<ul>
<li><a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/upstream/cluster_manager/cluster_stats" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">cluster manager</a></li>
<li><a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/stats" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http connection manager</a></li>
<li><a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/stats" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">listeners</a></li>
<li><a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/statistics" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">server</a></li>
</ul>
<p>\u5982\u4F55\u67E5\u770B Higress \u6307\u6807\u6570\u636E\uFF1A</p>
<ul>
<li>\u901A\u8FC7 <a href="http://127.0.0.1:18080/dashboard" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://127.0.0.1:18080/dashboard</a> \u67E5\u770B Higress gateway \u76D1\u63A7\u9762\u677F</li>
<li>\u901A\u8FC7 Skywalking Dashboard \u67E5\u770B Higress gateway \u76D1\u63A7\u6570\u636E</li>
</ul>
<p>\u901A\u8FC7 Skywalking Dashboard \u67E5\u770B Higress gateway \u76D1\u63A7\u6570\u636E\u90E8\u5206\u622A\u56FE\u5982\u4E0B\uFF1A</p>
<p><img src="/img/blog/skywalking/higress14.png" alt="img.png" referrerpolicy="no-referrer">
<img src="/img/blog/skywalking/higress15.png" alt="img.png" referrerpolicy="no-referrer">
<img src="/img/blog/skywalking/higress16.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u53C2\u8003\u6587\u6863">\u53C2\u8003\u6587\u6863</h2>
<ul>
<li><a href="https://istio.io/latest/docs/tasks/observability/distributed-tracing/skywalking/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://istio.io/latest/docs/tasks/observability/distributed-tracing/skywalking/</a></li>
<li><a href="http://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html</a></li>
<li><a href="https://skywalking.apache.org/docs/main/next/en/api/x-process-propagation-headers-v3/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://skywalking.apache.org/docs/main/next/en/api/x-process-propagation-headers-v3/</a></li>
<li><a href="https://skywalking.apache.org/docs/main/next/en/api/trace-data-protocol-v3/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://skywalking.apache.org/docs/main/next/en/api/trace-data-protocol-v3/</a></li>
</ul>`,a={title:"Higress \u96C6\u6210 Skywalking \u53EF\u89C2\u6D4B\u6027\u63A2\u7D22",keywords:["higress"],description:"Higress \u96C6\u6210 Skywalking \u53EF\u89C2\u6D4B\u6027\u63A2\u7D22",author:"Jun",date:"2023-06-20",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/skywalking.md",category:"ecosystem"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/skywalking.md",t=void 0,c=function(){return`
# Higress \u96C6\u6210 Skywalking \u53EF\u89C2\u6D4B\u6027\u63A2\u7D22

[Higress](https://higress.cn/) \u4E00\u4E2A\u9075\u5FAA\u5F00\u6E90Ingress/Gateway API\u6807\u51C6\uFF0C\u63D0\u4F9B\u6D41\u91CF\u8C03\u5EA6\u3001\u670D\u52A1\u6CBB\u7406\u3001\u5B89\u5168\u9632\u62A4\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u3001\u6613\u4F7F\u7528\u3001\u6613\u6269\u5C55\u3001\u70ED\u66F4\u65B0\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\u3002

[Skywalking](https://skywalking.apache.org/) \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u53EF\u89C2\u6D4B\u5E73\u53F0\uFF0C\u7528\u4E8E\u4ECE\u670D\u52A1\u548C\u4E91\u539F\u751F\u57FA\u7840\u8BBE\u65BD\u6536\u96C6\uFF0C\u5206\u6790\uFF0C \u805A\u5408\u53CA\u53EF\u89C6\u5316\u6570\u636E\u3002

[Httpbin](https://github.com/2456868764/httpbin) \u662F\u57FA\u4E8E Gin \u5F00\u53D1\uFF0C\u7528\u4E8E\u5FEB\u901F\u6D4B\u8BD5\u57FA\u4E8E\u4E91\u539F\u751F\u5FAE\u670D\u52A1\u53EF\u89C2\u6D4B\u6027\u548C\u6D41\u91CF\u7BA1\u7406\u7B49\u529F\u80FD\u3002

\u672C\u6587\u4ECB\u7ECD Higress \u96C6\u6210 Skywalking \u5B9E\u73B0\u53EF\u89C2\u6D4B\u6027\uFF0C\u4E3B\u8981\u5185\u5BB9\u6D89\u53CA\u6574\u4F53\u67B6\u6784\u3001Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406\u3001Higress \u67B6\u6784\u3001\u4E1A\u52A1\u5E94\u7528\u96C6\u6210 Skywalking\u3001\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA\u3001Higress \u914D\u7F6E\u3001\u5E94\u7528\u5B89\u88C5\u3001\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E\u4EE5\u53CA Higress gateway \u6307\u6807\u548C\u76D1\u63A7\u9762\u677F\u3002

\u8FD9\u6B21\u53EF\u89C2\u6D4B\u6027\u63A2\u7D22\u76F8\u5173 manifests [\u4E0B\u8F7D\u5730\u5740](https://gitcode.net/-/snippets/3612) 

## \u4E00\u3001\u6574\u4F53\u67B6\u6784\u56FE

![img.png](/img/blog/skywalking/higress.png)

\u6574\u4F53\u5305\u542B\u56DB\u5927\u5757\u5185\u5BB9\uFF1A
- Higress \u7EC4\u4EF6\uFF1A    higress-gateway, higress-console, higress-controller
- Skywalking \u7EC4\u4EF6\uFF1A skywalking dashboard ui, skywalking aop server
- \u4E1A\u52A1\u5E94\u7528\u7EC4\u4EF6\uFF1A     bff, middle service, backend service
- Ingress \u7EC4\u4EF6\uFF1A    skywalking.higress.io, httpbin.example.com

## \u4E8C\u3001Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406

SkyWalking\u4E3A\u670D\u52A1(service)\uFF0C\u670D\u52A1\u5B9E\u4F8B(service instance)\uFF0C\u4EE5\u53CA\u7AEF\u70B9(endpoint)\u63D0\u4F9B\u4E86\u53EF\u89C2\u6D4B\u80FD\u529B\u3002

- \u670D\u52A1(service)\uFF1A\u8868\u793A\u5BF9\u8BF7\u6C42\u63D0\u4F9B\u76F8\u540C\u884C\u4E3A\u7684\u4E00\u7EC4\u5DE5\u4F5C\u8D1F\u8F7D\u3002\u5728\u4F7F\u7528\u6253\u70B9\u4EE3\u7406\u6216 SDK \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u670D\u52A1\u7684\u540D\u5B57\u3002
- \u670D\u52A1\u5B9E\u4F8B(Service Instance)\uFF1A\u4E00\u7EC4\u5DE5\u4F5C\u8D1F\u8F7D\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5DE5\u4F5C\u8D1F\u8F7D\u79F0\u4E3A\u4E00\u4E2A\u5B9E\u4F8B\u3002
- \u7AEF\u70B9(Endpoint)\uFF1A \u5BF9\u4E8E\u7279\u5B9A\u670D\u52A1\u6240\u63A5\u6536\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u5982 HTTP \u7684 URI \u8DEF\u5F84\u548C gRPC \u670D\u52A1\u7684\u7C7B\u540D + \u65B9\u6CD5\u7B7E\u540D\u3002
- \u8FDB\u7A0B\uFF08Process\uFF09\uFF1A \u64CD\u4F5C\u7CFB\u7EDF\u8FDB\u7A0B. \u5728\u67D0\u4E9B\u573A\u666F\u4E0B\uFF0C\u4E00\u4E2A\u670D\u52A1\u5B9E\u4F8B\u548C\u8FDB\u7A0B\u4E0D\u662F\u4E00\u4E00\u5BF9\u5E94\uFF0C \u5728k8s\u90E8\u7F72\u4E0B\uFF0C\u4E00\u4E2APOD\u5BF9\u5E94\u591A\u4E2A\u8FDB\u7A0B\u3002

### Skywalking \u6574\u4F53\u67B6\u6784

![img.png](/img/blog/skywalking/skywalking1.png)

\u4E3B\u8981\u7531\u56DB\u4E2A\u6838\u5FC3\u7EC4\u4EF6\u7EC4\u6210\uFF1A

- \u63A2\u9488: \u63A2\u9488\u7528\u4E8E\u6536\u96C6\u76D1\u6D4B\u6570\u636E\u5305\u62EC\u6307\u6807\uFF0C\u94FE\u8DEF\u8DDF\u8E2A\uFF0C\u65E5\u5FD7\u548C\u4E8B\u4EF6
- \u6570\u636E\u63A5\u6536\u548C\u805A\u5408: \u5E73\u53F0\u540E\u7AEF\u652F\u6301\u6570\u636E\u805A\u5408\uFF0C\u6570\u636E\u5206\u6790\u4EE5\u53CA\u9A71\u52A8\u6570\u636E\u6D41\u4ECE\u63A2\u9488\u5230\u7528\u6237\u754C\u9762\u7684\u5904\u7406
- \u5B58\u50A8: \u901A\u8FC7\u5F00\u653E\u63A5\u53E3\u652F\u6301\u540E\u7AEF\u5B58\u50A8\u7CFB\u7EDF\u652F\u6301ElasticSearch, H2, MySQL, TiDB, BanyanDB\u7B49
- UI:  \u4E00\u4E2A\u5B9A\u5236\u5316\u7684Web\u7CFB\u7EDF\uFF0C\u7528\u6237\u53EF\u4EE5\u53EF\u89C6\u5316\u67E5\u770B\u548C\u7BA1\u7406 SkyWalking \u6570\u636E

### \u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u539F\u7406\u5206\u6790

1. \u5206\u5E03\u5F0F\u94FE\u8DEF\u4ECB\u7ECD

\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u662F\u8BB0\u5F55\u6765\u6E90\u4E8E\u7528\u6237\u8BF7\u6C42\u5728\u5404\u4E2A\u7CFB\u7EDF\u6216\u8005\u670D\u52A1\u4E2D\u6240\u4F20\u64AD\u7684\u8DEF\u5F84\u3002

> A distributed trace, more commonly known as a trace, records the paths taken by requests (made by an application or end-user) as they propagate through multi-service architectures, like microservice and serverless applications.

\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u56FE\u793A\u5982\u4E0B\uFF1A

![img.png](/img/blog/skywalking/higress13.png)

2. Skywalking \u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A

\u4E3B\u8981\u5305\u542B\u56DB\u4E2A\u5185\u5BB9\uFF1A

- Trace: \u4E00\u4E2A\u5B8C\u6574\u7684\u94FE\u8DEF\u7531\u591A\u4E2A Segment \u7EC4\u6210
- Segment: \u4E00\u4E2A\u8BF7\u6C42\u5728\u4E00\u4E2A\u8FDB\u7A0B\u5185\u7684\u8F68\u8FF9
- Span: \u4E00\u4E2A\u8BF7\u6C42\u5728\u67D0\u4E2A\u8FDB\u7A0B\u91CC\u7684\u4E00\u4E2A\u7EC4\u4EF6\u903B\u8F91\u5185\u7684\u8F68\u8FF9, \u6709 Entry Span\uFF0C Local Span \u548C Exit Span \u4E09\u7C7B
- Span context: \u8DE8\u8FDB\u7A0B\u6216\u8005\u670D\u52A1 Trace \u4F20\u9012\uFF0C\u8FD9\u91CC\u8BA8\u8BBA http \u4F20\u9012\u5934 sw8

\u57FA\u672C\u7EC4\u4EF6\u56FE\u793A\u5982\u4E0B\uFF1A

![img.png](/img/blog/skywalking/skywalking_trace.png)

\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u51FA\uFF1A

- \u4E00\u4E2A Trace \u5185\u7684\u6240\u6709 span \u7684 Trace ID \u662F\u76F8\u540C\u7684
- \u4E00\u4E2A Segment \u4E2D\u6709\u4E00\u4E2A EntrySpan\uFF0C\u662F Segment \u5185\u5176\u4ED6 Span \u7684\u6839 Parent
- \u540E\u4E00\u4E2A Segment\u7684 Entryspan \u603B\u662F\u4E0E\u524D\u4E00\u4E2A Segment \u4E2D\u7684\u67D0\u4E2A ExitSpan \u5173\u8054

3. Skywalking Trace \u7684\u6570\u636E\u534F\u8BAE

\u5177\u4F53\u6570\u636E\u534F\u8BAE\u53C2\u8003 [Skywalking Trace Data Protocol](https://skywalking.apache.org/docs/main/next/en/api/trace-data-protocol-v3/), \u8FD9\u91CC\u4E3B\u8981\u8BB2\u4E00\u4E0B sw8 \u683C\u5F0F\u548C\u7EC4\u6210\u3002

sw8 \u683C\u5F0F: XXXXX-XXXXX-XXXX-XXXX\uFF0C\u4EE5 - \u5206\u5272\u3002
\u6837\u4F8B: 1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv

\u5177\u4F53\u5185\u5BB9\u5982\u4E0B\uFF1A

- \u91C7\u6837\u6807\u8BB0(Sample):  0 \u6216\u8005 1\uFF0C 0 \u8868\u793A\u4E0D\u91C7\u6837 1 \u8868\u793A\u91C7\u6837
- \u8DDF\u8E2AID(Trace ID): \u5B57\u7B26(BASE64 \u7F16\u7801)
- \u7236Sengment ID (Parent trace segment ID): \u5B57\u7B26(BASE64 \u7F16\u7801)
- \u7236 Span ID\uFF08Parent span ID): \u6574\u578B
- \u7236\u670D\u52A1\u540D\u79F0(Parent service): \u5B57\u7B26(BASE64 \u7F16\u7801)
- \u7236\u670D\u52A1\u5B9E\u4F8B(Parent service instance): \u5B57\u7B26(BASE64 \u7F16\u7801)
- \u7236Endpoint(Parent endpoint): \u5B57\u7B26(BASE64 \u7F16\u7801)
- \u76EE\u6807\u5730\u5740\uFF1A\u5B57\u7B26(BASE64 \u7F16\u7801)

## \u4E09\u3001Higress \u67B6\u6784

Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90 Istio + Envoy \u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B

\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301 Ingress\u4E0E Gateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B

\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002

![img.png](/img/blog/skywalking/higress12.png)

## \u56DB\u3001\u4E1A\u52A1\u5E94\u7528\u96C6\u6210 Skywalking

\u4E1A\u52A1\u5E94\u7528\u901A\u8FC7\u4E0E [go2sky](https://github.com/SkyAPM/go2sky) \u9879\u76EE\u96C6\u6210 SkyWalking \u76D1\u63A7 Golang \u5E94\u7528\u7A0B\u5E8F\uFF0C\u4E3B\u8981\u901A\u8FC7 Gin middleware \u548C Http \u8BF7\u6C42\u624B\u52A8\u57CB\u70B9\u3002

1\u3001\u96C6\u6210 Gin middleware
\`\`\`go
func middleware(engine *gin.Engine, tracer *go2sky.Tracer) gin.HandlerFunc {
	if engine == nil || tracer == nil {
		return func(c *gin.Context) {
			c.Next()
		}
	}
	return func(c *gin.Context) {
		if strings.HasPrefix(c.Request.URL.String(), skipProbPrefix) || strings.HasPrefix(c.Request.URL.String(), skipMetricsPrefix) {
			c.Next()
			return
		}
		span, ctx, err := tracer.CreateEntrySpan(c.Request.Context(), getOperationName(c), func(key string) (string, error) {
			return c.Request.Header.Get(key), nil
		})
		if err != nil {
			c.Next()
			return
		}
		span.SetComponent(componentIDGINHttpServer)
		span.Tag(go2sky.TagHTTPMethod, c.Request.Method)
		span.Tag(go2sky.TagURL, c.Request.Host+c.Request.URL.Path)
		span.SetSpanLayer(agentv3.SpanLayer_Http)

		c.Request = c.Request.WithContext(ctx)

		c.Next()

		if len(c.Errors) > 0 {
			span.Error(time.Now(), c.Errors.String())
		}
		span.Tag(go2sky.TagStatusCode, strconv.Itoa(c.Writer.Status()))
		span.End()
	}
}

func getOperationName(c *gin.Context) string {
	return fmt.Sprintf("/%s%s", c.Request.Method, c.FullPath())
}

\`\`\`

2\u3001Http\u8BF7\u6C42\u624B\u52A8\u57CB\u70B9

\`\`\`go
func traceHttpCall(c *gin.Context, req *http.Request, url string, fn func(req *http.Request) (*http.Response, error)) (*http.Response, error) {
	tracer := go2sky.GetGlobalTracer()
	if tracer == nil {
		resp, err := fn(req)
		return resp, err
	}

	reqSpan, err := go2sky.GetGlobalTracer().CreateExitSpan(c.Request.Context(), "invoke", url, func(headerKey, headerValue string) error {
		req.Header.Set(headerKey, headerValue)
		return nil
	})
	
	reqSpan.SetComponent(2)
	reqSpan.SetSpanLayer(v3.SpanLayer_Http)
	resp, err2 := fn(req)
	reqSpan.Tag(go2sky.TagHTTPMethod, http.MethodGet)
	reqSpan.Tag(go2sky.TagURL, url)
	reqSpan.End()
	return resp, err2

}
\`\`\`


## \u4E94\u3001\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA

1. \u672C\u5730\u5B89\u88C5 kubectl, kind, helm

\u53EF\u4EE5\u53C2\u8003 Higress [\u5FEB\u901F\u5F00\u59CB](https://higress.cn/docs/latest/user/quickstart/)\u5B89\u88C5 kubectl, kind\u3002
helm \u5B89\u88C5\u53C2\u8003[\u5B89\u88C5\u6587\u6863](https://helm.sh/zh/docs/intro/install/)

2. \u5B89\u88C5 higress \u548C istio CRD

\u53EF\u4EE5\u53C2\u8003 higress [\u5FEB\u901F\u5F00\u59CB](https://higress.cn/docs/latest/user/quickstart/) \u548C [\u5B89\u88C5\u90E8\u7F72](https://higress.cn/docs/latest/ops/deploy-by-helm/) \u6765\u90E8\u7F72\uFF0C\u8FD9\u91CC\u9700\u8981\u5B89\u88C5  Istio CRD\u3002

\u4E0B\u9762\u662F\u4E00\u4E2A\u53C2\u8003\u5B89\u88C5\u547D\u4EE4:

\`\`\`bash
helm install higress -n higress-system --set global.onlyPushRouteCluster=false --set higress-core.skywalking.enabled=true  --set higress-core.skywalking.service.address=skywalking-oap-server.op-system.svc.cluster.local  --set higress-core.skywalking.service.port=11800 higress.io/higress
\`\`\`


3. \u90E8\u7F72 Skywalking\uFF0C\u4E1A\u52A1\u5E94\u7528\u548C Ingress

\`\`\`shell
$ export KUBECONFIG=\${HOME}/.kube/config_higress
$ kubectl apply -f skywalking.yaml
$ kubectl apply -f app.yaml
$ kubectl apply -f ingress.yaml
\`\`\`

\u68C0\u67E5 POD \u8FD0\u884C\u72B6\u6001\u548C Ingress \u72B6\u6001

\`\`\`shell
$ export KUBECONFIG=\${HOME}/.kube/config_higress

$ kubectl get pods -n higress-system 

NAME                                         READY   STATUS    RESTARTS   AGE
higress-console-6f554978dc-cclg7             1/1     Running   0          100m
higress-console-grafana-7495766db4-4flq5     1/1     Running   0          131m
higress-console-prometheus-6d7bdccfb-hxtsq   1/1     Running   0          131m
higress-controller-689c5b965f-7wsmt          2/2     Running   0          131m
higress-gateway-59966b45d9-z7ltd             1/1     Running   0          131m

$ kubectl get pods -n op-system

NAME                                        READY   STATUS    RESTARTS   AGE
skywalking-oap-dashboard-65f496ccc9-dr96l   1/1     Running   0          99m
skywalking-oap-server-859694656b-p8vcq      1/1     Running   0          99m

$ kubectl get pods -n app-system

NAME                       READY   STATUS    RESTARTS   AGE
backend-6b9549bc64-f98tr   1/1     Running   0          99m
backend-6b9549bc64-x2btl   1/1     Running   0          99m
bff-766967f8db-8ght7       1/1     Running   0          99m
bff-766967f8db-gflbh       1/1     Running   0          99m
middle-6f4dd7bf6c-qdjqj    1/1     Running   0          99m
middle-6f4dd7bf6c-stzf4    1/1     Running   0          99m

$ kubectl get svc -n app-system

NAME      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
backend   ClusterIP   10.96.179.140   <none>        80/TCP    99m
bff       ClusterIP   10.96.121.62    <none>        80/TCP    99m
middle    ClusterIP   10.96.55.8      <none>        80/TCP    99m

$ kubectl get ingress -n higress-system

NAME                         CLASS     HOSTS                   ADDRESS   PORTS   AGE
httpbin                      higress   httpbin.example.com               80      8s
skywalking-dashboard         higress   skywalking.higress.io             80      8s
\`\`\`

4. \u6D4B\u8BD5 Higress Console, Skywalking Dashboard, Bff \u670D\u52A1

1\uFF09\u7F16\u8F91 /etc/hosts \u6587\u4EF6\u6DFB\u52A0\u4EE5\u4E0B\u4E09\u4E2A\u57DF\u540D

\`\`\`shell
127.0.0.1 skywalking.higress.io
127.0.0.1 httpbin.example.com
\`\`\`
2\uFF09\u6253\u5F00 higress-gateway \u7AEF\u53E3\u8F6C\u53D1
\`\`\`shell
$ export KUBECONFIG=\${HOME}/.kube/config_higress
$ kubectl -n higress-system port-forward service/higress-gateway 8080:80
$ kubectl -n higress-system port-forward service/higress-console 18080:8080
\`\`\`
3\uFF09\u901A\u8FC7\u6D4F\u89C8\u5668\u6253\u5F00\u8BBF\u95EE\u4E0A\u9762\u4E09\u4E2A\u57DF\u540D

Higress \u63A7\u5236\u53F0: [http://127.0.0.1:8080](http://127.0.0.1:18080)\u3002\u9996\u6B21\u8BBF\u95EE\u63A7\u5236\u53F0\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u7528\u6237\u3002\u521D\u59CB\u5316\u5B8C\u6210\u540E\u4F7F\u7528\u5BF9\u5E94\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5373\u53EF\u3002

![img.png](/img/blog/skywalking/higress1.png)

Skywalking Dashboard: http://skywalking.higress.io:8080

![img.png](/img/blog/skywalking/higress2.png)

Bff \u670D\u52A1\uFF1A http://httpbin.example.com:8080/hostname

![img.png](/img/blog/skywalking/higress3.png)


## \u516D\u3001Higress \u96C6\u6210 Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E

\u901A\u8FC7\u4FEE\u6539 Higress configmap \u5168\u5C40\u914D\u7F6E higress-config \u6765\u6FC0\u6D3B Higress \u96C6\u6210 Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u3002

\`\`\`shell
$ export KUBECONFIG=\${HOME}/.kube/config_higress
$ kubectl edit configmap higgress-config -n higress-system
\`\`\`

\u5728 data \u4E0B\u589E\u52A0 higress \u914D\u7F6E\u9879\u7136\u540E\u4FDD\u5B58\uFF0C\u5177\u4F53\u914D\u7F6E\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`shell
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
        service: skywalking-oap-server.op-system.svc.cluster.local
        port: 11800
\`\`\`

## \u4E03\u3001Skywalking \u94FE\u8DEF\u8DDF\u8E2A

### \u8FD0\u884C\u538B\u6D4B\u811A\u672C
\`\`\`shell
for i in $(seq 1 1000)
do
    curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/hostname
    curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/
    curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/service?services=middle,backend
done
\`\`\`


### \u8C03\u7528 bff \u670D\u52A1 /service \u63A5\u53E3\u6765\u6A21\u62DF\u8C03\u7528\u94FE\u8DEF

\`\`\`shell
curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/service?services=middle,backend
\`\`\`

\u90E8\u5206\u8FD4\u56DE\u54CD\u5E94\u4F53\u60C5\u51B5\u5982\u4E0B\uFF1A

\`\`\`json
{
  "args": {
  },
  "form": {
  },
  "headers": {
    "accept-encoding": "gzip",
    "sw8": "1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv",
    "sw8-correlation": "",
    "user-agent": "Go-http-client/1.1",
    "x-httpbin-trace-host": "bff-766967f8db-jwn2g/middle-6f4dd7bf6c-qbxrm/backend-6b9549bc64-8twnx",
    "x-httpbin-trace-service": "bff/middle/backend",
    "x-request-id": "e5a1b250-ebe3-931d-91d7-90e3ee2fc867"
  },
  "method": "GET",
  "origin": "",
  "url": "/",
  "envs": {
    "NODE_NAME": "higress-worker2",
    "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
    "POD_IP": "10.244.1.7",
    "POD_NAME": "backend-6b9549bc64-8twnx",
    "POD_NAMESPACE": "app-system",
    "SERVICE_ACCOUNT": "backend",
    "SERVICE_NAME": "backend",
    "VERSION": "v1"
  },
  "host_name": "backend-6b9549bc64-8twnx",
  "body": ""
}
\`\`\`

\u54CD\u5E94\u5934\u4E2D\u548C\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u76F8\u5173\u6709\u5982\u4E0B\uFF1A

\`\`\`shell
"sw8": "1-MzYzMzM1NDctNTc0YS00MzZlLTgzNWEtNTY1YTQyNzk3YTY3-ZWQ3ODA2ZjYwNTI0MTFlZWE5ZDdmZTFhNTA5YTRmYTk=-1-bWlkZGxl-bWlkZGxlLTZmNGRkN2JmNmMtcWJ4cm0=-L0dFVC9zZXJ2aWNl-aHR0cDovL2JhY2tlbmQv",
"x-httpbin-trace-host": "bff-766967f8db-jwn2g/middle-6f4dd7bf6c-qbxrm/backend-6b9549bc64-8twnx",
"x-httpbin-trace-service": "bff/middle/backend",
\`\`\`

\u5176\u4E2D\uFF1A
- sw8:  Skywalking \u7528\u4E8E\u8DDF\u8E2A\u7684 Http Header
- x-httpbin-trace-host: \u8C03\u7528\u94FE\u8DEF\u7ECF\u8FC7 POD_NAME
- x-httpbin-trace-service: \u8C03\u7528\u94FE\u8DEF\u7ECF\u8FC7 SERVICE_NAME

\u5728 Skywalking dashboard \u4E2D\u67E5\u770B\u5982\u4E0B\uFF1A
- \u670D\u52A1\u622A\u56FE

![img.png](/img/blog/skywalking/higress4-1.png)

- \u8C03\u7528\u94FE\u8DEF\u622A\u56FE

![img.png](/img/blog/skywalking/higress4.png)

- \u8C03\u7528\u94FE\u8DEF\u62D3\u6251\u622A\u56FE

![img.png](/img/blog/skywalking/higress5.png)

## \u516B\u3001Higress gateway \u6307\u6807\u548C\u76D1\u63A7\u9762\u677F

\u53EF\u4EE5\u901A\u8FC7\u5EA6\u91CF\u5404\u4E2A\u7EC4\u4EF6\u7684\u6027\u80FD\u6307\u6807\uFF0C\u4F8B\u5982\u54CD\u5E94\u65F6\u95F4\u3001\u541E\u5410\u91CF\u3001\u9519\u8BEF\u7387\u3001\u8D44\u6E90\u4F7F\u7528\u7387\u7B49\u6307\u6807\u6765\u4E86\u89E3\u7CFB\u7EDF\u7684\u72B6\u6001\u548C\u6027\u80FD\u3002

\u6307\u6807\u6570\u636E\u5305\u542B\u6307\u6807\u540D\u79F0\uFF0C\u6307\u6807\u6807\u7B7E\uFF0C\u548C\u6307\u6807\u503C\uFF0C\u4E0B\u9762\u662F envoy_cluster_upstream_cx_total upstream\uFF08\u603B\u8FDE\u63A5\u6570\uFF09\u90E8\u5206\u6307\u6807\u6570\u636E\uFF0C

\u5176\u4E2D envoy_cluster_upstream_cx_total \u662F\u6307\u6807\u540D\u79F0\uFF0Ccluster_name \u662F\u6307\u6807\u6807\u7B7E\uFF0C16 \u662F\u6307\u6807\u503C\u3002
\`\`\`shell
# TYPE envoy_cluster_upstream_cx_total counter
envoy_cluster_upstream_cx_total{cluster_name="outbound|80||bff.app-system.svc.cluster.local"} 16
\`\`\`

Higress \u6307\u6807\u6570\u636E\u5927\u4F53\u53EF\u4EE5\u5206\u4E3A\u4E09\u7C7B:
- Downstream \u4E0B\u6E38: \u6307\u6807\u4E0E\u5916\u6765\u7684\u8FDE\u63A5/\u8BF7\u6C42\u6709\u5173\uFF0C\u4E3B\u8981\u7531\u4FA6\u542C\u5668\uFF0CHTTP\u8FDE\u63A5\u7BA1\u7406\u5668\u7B49
- UpStream \u4E0A\u6E38: \u6307\u6807\u4E0E\u5916\u5411\u7684\u8FDE\u63A5/\u8BF7\u6C42\u6709\u5173\uFF0C\u4E3B\u8981\u7531\u8FDE\u63A5\u6C60\uFF0C\u8DEF\u7531\u5668\uFF0C\u8FC7\u6EE4\u5668\uFF0C\u7194\u65AD\u7B49
- Server \u8D1F\u8F7D: \u6307\u6807\u4FE1\u606F\u8BB0\u5F55 Higress gateway \u670D\u52A1\u5668\u5B9E\u4F8B\u7684\u8D1F\u8F7D\u7B49

Higress \u6307\u6807\u6570\u636E\u7C7B\u578B\u4E3B\u8981\u6709\u4E09\u7C7B:
- Counter: \u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u53EA\u4F1A\u589E\u52A0\u800C\u4E0D\u4F1A\u51CF\u5C11\u3002\u4F8B\u5982\uFF0C\u603B\u8BF7\u6C42
- Gauge: \u589E\u52A0\u548C\u51CF\u5C11\u7684\u65E0\u7B26\u53F7\u6574\u6570\u3002\u4F8B\u5982\uFF0C\u5F53\u524D\u6D3B\u52A8\u7684\u8BF7\u6C42
- Histogram: \u4F5C\u4E3A\u6307\u6807\u6D41\u7684\u4E00\u90E8\u5206\u7684\u65E0\u7B26\u53F7\u6574\u6570\uFF0C\u7136\u540E\u7531\u6536\u96C6\u5668\u805A\u5408\u4EE5\u6700\u7EC8\u4EA7\u751F\u6C47\u603B\u7684\u767E\u5206\u4F4D\u503C(percentile\uFF0C\u5373\u5E73\u5E38\u8BF4\u7684 P99/P50/Pxx)\u3002\u4F8B\u5982\uFF0CUpstream \u54CD\u5E94\u65F6\u95F4

\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u53EF\u4EE5\u83B7\u53D6 Higress gateway \u652F\u6301\u7684\u6307\u6807\u548C\u7C7B\u578B

\`\`\`shell
$ export HIGRESS_GATEWAY_POD=$(kubectl get pods -l app=higress-gateway -o 'jsonpath={.items[0].metadata.name}' -n higress-system)
$ kubectl exec "$HIGRESS_GATEWAY_POD"  -n higress-system  -- curl -sS http://127.0.0.1:15020/stats/prometheus | grep "# TYPE"  
\`\`\`
\u90E8\u5206\u6307\u6807\u5185\u5BB9\u5982\u4E0B\uFF1A
\`\`\`shell
...
# TYPE envoy_cluster_upstream_cx_total counter
# TYPE envoy_cluster_upstream_cx_tx_bytes_total counter
# TYPE envoy_cluster_upstream_flow_control_backed_up_total counter
# TYPE envoy_cluster_upstream_flow_control_drained_total counter
# TYPE envoy_cluster_upstream_flow_control_paused_reading_total counter
# TYPE envoy_cluster_upstream_flow_control_resumed_reading_total counter
# TYPE envoy_cluster_upstream_internal_redirect_failed_total counter
# TYPE envoy_cluster_upstream_internal_redirect_succeeded_total counter
# TYPE envoy_cluster_upstream_rq counter
# TYPE envoy_cluster_upstream_rq_101 counter
# TYPE envoy_cluster_upstream_rq_200 counter
# TYPE envoy_cluster_upstream_rq_201 counter
# TYPE envoy_cluster_upstream_rq_301 counter
# TYPE envoy_cluster_upstream_rq_302 counter
# TYPE envoy_cluster_upstream_rq_304 counter
# TYPE envoy_cluster_upstream_rq_401 counter
# TYPE envoy_cluster_upstream_rq_404 counter
# TYPE envoy_cluster_upstream_rq_cancelled counter
# TYPE envoy_cluster_upstream_rq_completed counter
# TYPE envoy_cluster_upstream_rq_maintenance_mode counter
# TYPE envoy_cluster_upstream_rq_max_duration_reached counter
# TYPE envoy_cluster_upstream_rq_pending_failure_eject counter
# TYPE envoy_cluster_upstream_rq_pending_overflow counter
# TYPE envoy_cluster_upstream_rq_pending_total counter
# TYPE envoy_cluster_upstream_rq_per_try_idle_timeout counter
# TYPE envoy_cluster_upstream_rq_per_try_timeout counter
# TYPE envoy_cluster_upstream_rq_retry counter
# TYPE envoy_cluster_upstream_rq_retry_backoff_exponential counter
# TYPE envoy_cluster_upstream_rq_retry_backoff_ratelimited counter
# TYPE envoy_cluster_upstream_rq_retry_limit_exceeded counter
# TYPE envoy_cluster_upstream_rq_retry_overflow counter
# TYPE envoy_cluster_upstream_rq_retry_success counter
# TYPE envoy_cluster_upstream_rq_rx_reset counter
# TYPE envoy_cluster_upstream_rq_timeout counter
# TYPE envoy_cluster_upstream_rq_total counter
# TYPE envoy_cluster_upstream_rq_tx_reset counter
...
# TYPE envoy_http_downstream_cx_total counter
# TYPE envoy_http_downstream_cx_tx_bytes_total counter
# TYPE envoy_http_downstream_cx_upgrades_total counter
# TYPE envoy_http_downstream_flow_control_paused_reading_total counter
# TYPE envoy_http_downstream_flow_control_resumed_reading_total counter
# TYPE envoy_http_downstream_rq counter
# TYPE envoy_http_downstream_rq_completed counter
# TYPE envoy_http_downstream_rq_failed_path_normalization counter
# TYPE envoy_http_downstream_rq_header_timeout counter
# TYPE envoy_http_downstream_rq_http1_total counter
# TYPE envoy_http_downstream_rq_http2_total counter
# TYPE envoy_http_downstream_rq_http3_total counter
# TYPE envoy_http_downstream_rq_idle_timeout counter
# TYPE envoy_http_downstream_rq_max_duration_reached counter
# TYPE envoy_http_downstream_rq_non_relative_path counter
# TYPE envoy_http_downstream_rq_overload_close counter
# TYPE envoy_http_downstream_rq_redirected_with_normalized_path counter
# TYPE envoy_http_downstream_rq_rejected_via_ip_detection counter
# TYPE envoy_http_downstream_rq_response_before_rq_complete counter
# TYPE envoy_http_downstream_rq_rx_reset counter
# TYPE envoy_http_downstream_rq_timeout counter
# TYPE envoy_http_downstream_rq_too_large counter
# TYPE envoy_http_downstream_rq_total counter
# TYPE envoy_http_downstream_rq_tx_reset counter
# TYPE envoy_http_downstream_rq_ws_on_non_ws_route counter
...
\`\`\`

\u5177\u4F53\u6307\u6807\u5B9A\u4E49\u53C2\u8003\u5982\u4E0B\uFF1A
- [cluster manager](https://www.envoyproxy.io/docs/envoy/latest/configuration/upstream/cluster_manager/cluster_stats)
- [http connection manager](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/stats)
- [listeners](https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/stats)
- [server](https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/statistics)


\u5982\u4F55\u67E5\u770B Higress \u6307\u6807\u6570\u636E\uFF1A

- \u901A\u8FC7 http://127.0.0.1:18080/dashboard \u67E5\u770B Higress gateway \u76D1\u63A7\u9762\u677F
- \u901A\u8FC7 Skywalking Dashboard \u67E5\u770B Higress gateway \u76D1\u63A7\u6570\u636E

\u901A\u8FC7 Skywalking Dashboard \u67E5\u770B Higress gateway \u76D1\u63A7\u6570\u636E\u90E8\u5206\u622A\u56FE\u5982\u4E0B\uFF1A

![img.png](/img/blog/skywalking/higress14.png)
![img.png](/img/blog/skywalking/higress15.png)
![img.png](/img/blog/skywalking/higress16.png)

## \u53C2\u8003\u6587\u6863
- https://istio.io/latest/docs/tasks/observability/distributed-tracing/skywalking/
- http://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html
- https://skywalking.apache.org/docs/main/next/en/api/x-process-propagation-headers-v3/
- https://skywalking.apache.org/docs/main/next/en/api/trace-data-protocol-v3/






















`},l=function(){return s},i=function(){return[{depth:2,slug:"\u4E00\u6574\u4F53\u67B6\u6784\u56FE",text:"\u4E00\u3001\u6574\u4F53\u67B6\u6784\u56FE"},{depth:2,slug:"\u4E8Cskywalking-\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406",text:"\u4E8C\u3001Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u539F\u7406"},{depth:3,slug:"skywalking-\u6574\u4F53\u67B6\u6784",text:"Skywalking \u6574\u4F53\u67B6\u6784"},{depth:3,slug:"\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u539F\u7406\u5206\u6790",text:"\u5206\u5E03\u5F0F\u94FE\u8DEF\u8FFD\u8E2A\u539F\u7406\u5206\u6790"},{depth:2,slug:"\u4E09higress-\u67B6\u6784",text:"\u4E09\u3001Higress \u67B6\u6784"},{depth:2,slug:"\u56DB\u4E1A\u52A1\u5E94\u7528\u96C6\u6210-skywalking",text:"\u56DB\u3001\u4E1A\u52A1\u5E94\u7528\u96C6\u6210 Skywalking"},{depth:2,slug:"\u4E94\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA",text:"\u4E94\u3001\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA"},{depth:2,slug:"\u516Dhigress-\u96C6\u6210-skywalking-\u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E",text:"\u516D\u3001Higress \u96C6\u6210 Skywalking \u8C03\u7528\u94FE\u8DEF\u8DDF\u8E2A\u914D\u7F6E"},{depth:2,slug:"\u4E03skywalking-\u94FE\u8DEF\u8DDF\u8E2A",text:"\u4E03\u3001Skywalking \u94FE\u8DEF\u8DDF\u8E2A"},{depth:3,slug:"\u8FD0\u884C\u538B\u6D4B\u811A\u672C",text:"\u8FD0\u884C\u538B\u6D4B\u811A\u672C"},{depth:3,slug:"\u8C03\u7528-bff-\u670D\u52A1-service-\u63A5\u53E3\u6765\u6A21\u62DF\u8C03\u7528\u94FE\u8DEF",text:"\u8C03\u7528 bff \u670D\u52A1 /service \u63A5\u53E3\u6765\u6A21\u62DF\u8C03\u7528\u94FE\u8DEF"},{depth:2,slug:"\u516Bhigress-gateway-\u6307\u6807\u548C\u76D1\u63A7\u9762\u677F",text:"\u516B\u3001Higress gateway \u6307\u6807\u548C\u76D1\u63A7\u9762\u677F"},{depth:2,slug:"\u53C2\u8003\u6587\u6863",text:"\u53C2\u8003\u6587\u6863"}]},e=r((F,_,m)=>{const{layout:f,...p}=a;return p.file=n,p.url=t,E`${o()}${y(s)}`})});export{e as Content,u as __tla,l as compiledContent,e as default,n as file,a as frontmatter,i as getHeadings,c as rawContent,t as url};
