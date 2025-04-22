import{c as d,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as v,__tla as y}from"./constant.CXpFh17o.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let e,l,a,n,t,c,i,h=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<p>\u7F51\u5173\u5728\u7CFB\u7EDF\u67B6\u6784\u4E2D\u626E\u6F14\u7740\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u5B83\u662F\u8FDE\u63A5\u4E0D\u540C\u7F51\u7EDC\u3001\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u7684\u5165\u53E3\u70B9\uFF0CWeb\u5E94\u7528\u9632\u706B\u5899\uFF08Web Application Firewall\uFF0CWAF\uFF09\u662F\u7F51\u5173\u5B89\u5168\u9886\u57DF\u5FC5\u4E0D\u53EF\u5C11\u7684\u80FD\u529B\uFF0C\u5BF9\u7F51\u7AD9\u6216\u8005App\u7684\u4E1A\u52A1\u6D41\u91CF\u8FDB\u884C\u6076\u610F\u7279\u5F81\u8BC6\u522B\u53CA\u9632\u62A4\uFF0C\u5728\u5BF9\u6D41\u91CF\u6E05\u6D17\u548C\u8FC7\u6EE4\u540E\uFF0C\u5C06\u6B63\u5E38\u3001\u5B89\u5168\u7684\u6D41\u91CF\u8FD4\u56DE\u7ED9\u670D\u52A1\u5668\uFF0C\u907F\u514D\u7F51\u7AD9\u670D\u52A1\u5668\u88AB\u6076\u610F\u5165\u4FB5\u5BFC\u81F4\u6027\u80FD\u5F02\u5E38\u7B49\u95EE\u9898\uFF0C\u4ECE\u800C\u4FDD\u969C\u7F51\u7AD9\u7684\u4E1A\u52A1\u5B89\u5168\u548C\u6570\u636E\u5B89\u5168\u3002</p>
<h2 id="\u76F8\u5173\u77E5\u8BC6\u4ECB\u7ECD">\u76F8\u5173\u77E5\u8BC6\u4ECB\u7ECD</h2>
<h3 id="modsecurity">ModSecurity</h3>
<p><a href="https://github.com/SpiderLabs/ModSecurity" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ModSecurity</a>\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u8DE8\u5E73\u53F0Web\u5E94\u7528\u7A0B\u5E8F\u9632\u706B\u5899\uFF08WAF\uFF09\u5F15\u64CE\uFF0C\u662F\u76EE\u524D\u4E16\u754C\u4E0A\u4F7F\u7528\u6700\u591A\u7684\u5F00\u6E90WAF\u4EA7\u54C1\uFF0C\u5176\u4E3B\u8981\u529F\u80FD\u662F\u5BF9\u4F20\u5165\u7684 HTTP \u8BF7\u6C42\u8FDB\u884C\u5206\u6790\u548C\u8FC7\u6EE4\uFF0C\u4EE5\u4FBF\u68C0\u6D4B\u548C\u963B\u6B62\u6F5C\u5728\u7684\u653B\u51FB\uFF0C\u4E3B\u8981\u5305\u62EC\uFF1A</p>
<ul>
<li>SQL Injection (SQLi)\uFF1A\u963B\u6B62SQL\u6CE8\u5165</li>
<li>Cross Site Scripting (XSS)\uFF1A\u963B\u6B62\u8DE8\u7AD9\u811A\u672C\u653B\u51FB</li>
<li>Local File Inclusion (LFI)\uFF1A\u963B\u6B62\u5229\u7528\u672C\u5730\u6587\u4EF6\u5305\u542B\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB</li>
<li>Remote File Inclusione(RFI)\uFF1A\u963B\u6B62\u5229\u7528\u8FDC\u7A0B\u6587\u4EF6\u5305\u542B\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB</li>
<li>Remote Code Execution (RCE)\uFF1A\u963B\u6B62\u5229\u7528\u8FDC\u7A0B\u547D\u4EE4\u6267\u884C\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB</li>
<li>PHP Code Injectiod\uFF1A\u963B\u6B62PHP\u4EE3\u7801\u6CE8\u5165</li>
<li>HTTP Protocol Violations\uFF1A\u963B\u6B62\u8FDD\u53CDHTTP\u534F\u8BAE\u7684\u6076\u610F\u8BBF\u95EE</li>
<li>HTTPoxy\uFF1A\u963B\u6B62\u5229\u7528\u8FDC\u7A0B\u4EE3\u7406\u611F\u67D3\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB</li>
<li>Shellshock\uFF1A\u963B\u6B62\u5229\u7528Shellshock\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB</li>
</ul>
<p>ModSecurity\u901A\u8FC7\u4E00\u4E2A\u57FA\u4E8E\u89C4\u5219\u7684\u5F15\u64CE\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\uFF0C\u8FD9\u4E9B\u89C4\u5219\u5B9A\u4E49\u4E86\u8981\u5339\u914D\u548C\u5904\u7406\u7684\u6A21\u5F0F\u548C\u884C\u4E3A\u3002</p>
<h3 id="\u5B89\u5168\u89C4\u5219\u8BED\u8A00">\u5B89\u5168\u89C4\u5219\u8BED\u8A00</h3>
<p>ModSecurity\u89C4\u5219\u8BED\u8A00\uFF08\u4E5F\u79F0\u4E3ASecLang\uFF09\u662F\u4E00\u79CD\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u548C\u6A21\u5F0F\u5339\u914D\u7684\u9886\u57DF\u7279\u5B9A\u8BED\u8A00\uFF0C\u7528\u4E8E\u63CF\u8FF0\u548C\u68C0\u6D4BWeb\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5B89\u5168\u4E8B\u4EF6\u548C\u653B\u51FB\u3002</p>
<p>SecLang \u652F\u6301\u4EE5\u4E0B\u57FA\u672C\u6982\u5FF5\u548C\u8BED\u6CD5\u7ED3\u6784\uFF1A</p>
<ul>
<li>\u4E8B\u52A1\u548C\u89C4\u5219\uFF1ASecLang\u4E2D\u7684\u89C4\u5219\u4EE5\u4E8B\u52A1\u4E3A\u5355\u4F4D\uFF0C\u4E8B\u52A1\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u89C4\u5219\u3002\u89C4\u5219\u5B9A\u4E49\u4E86\u8981\u5339\u914D\u548C\u68C0\u6D4B\u7684\u6A21\u5F0F\uFF0C\u4EE5\u53CA\u5728\u5339\u914D\u65F6\u8981\u6267\u884C\u7684\u64CD\u4F5C\u3002</li>
<li>\u52A8\u4F5C\uFF1A\u89C4\u5219\u53EF\u4EE5\u5305\u542B\u591A\u79CD\u52A8\u4F5C\uFF0C\u7528\u4E8E\u6267\u884C\u7279\u5B9A\u7684\u64CD\u4F5C\uFF0C\u5982\u65E5\u5FD7\u8BB0\u5F55\u3001\u62E6\u622A\u8BF7\u6C42\u3001\u8BBE\u7F6E\u53D8\u91CF\u3001\u4FEE\u6539\u8BF7\u6C42\u7B49\u3002</li>
<li>\u6761\u4EF6\uFF1A\u89C4\u5219\u53EF\u4EE5\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5\u6765\u6307\u5B9A\u4EC5\u5728\u6EE1\u8DB3\u7279\u5B9A\u6761\u4EF6\u65F6\u624D\u6267\u884C\u7684\u52A8\u4F5C\u3002\u6761\u4EF6\u53EF\u4EE5\u57FA\u4E8E\u8BF7\u6C42\u7684\u5404\u4E2A\u65B9\u9762\uFF0C\u5982\u8BF7\u6C42\u65B9\u6CD5\u3001URI\u3001\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u6B63\u6587\u3001IP\u5730\u5740\u7B49\u3002</li>
<li>\u53D8\u91CF\uFF1ASecLang \u652F\u6301\u5185\u7F6E\u53D8\u91CF\u548C\u7528\u6237\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u7528\u4E8E\u5B58\u50A8\u548C\u64CD\u4F5C\u8BF7\u6C42\u548C\u54CD\u5E94\u4E2D\u7684\u6570\u636E\u3002\u53D8\u91CF\u53EF\u4EE5\u7528\u4E8E\u89C4\u5219\u5339\u914D\u3001\u6761\u4EF6\u5224\u65AD\u548C\u52A8\u4F5C\u6267\u884C\u3002</li>
<li>\u8FD0\u7B97\u7B26\uFF1ASecLang \u63D0\u4F9B\u4E86\u5404\u79CD\u8FD0\u7B97\u7B26\uFF0C\u7528\u4E8E\u6267\u884C\u6A21\u5F0F\u5339\u914D\u3001\u6BD4\u8F83\u548C\u903B\u8F91\u64CD\u4F5C\u3002\u8FD9\u4E9B\u8FD0\u7B97\u7B26\u7528\u4E8E\u6784\u5EFA\u89C4\u5219\u7684\u6761\u4EF6\u548C\u64CD\u4F5C\u3002</li>
</ul>
<p>SecLang \u5141\u8BB8\u7528\u6237\u7F16\u5199\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u4EE5\u6307\u5B9A\u5728HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u4E2D\u5E94\u8BE5\u5982\u4F55\u68C0\u6D4B\u548C\u5904\u7406\u6F5C\u5728\u7684\u5B89\u5168\u95EE\u9898\u3002\u89C4\u5219\u53EF\u4EE5\u5B9A\u4E49\u8BF8\u5982\u963B\u6B62\u6076\u610F\u8BF7\u6C42\u3001\u8FC7\u6EE4\u7279\u5B9A\u7684\u6570\u636E\u3001\u62E6\u622ASQL\u6CE8\u5165\u548C\u8DE8\u7AD9\u70B9\u811A\u672C\uFF08XSS\uFF09\u7B49\u653B\u51FB\u7C7B\u578B\u7684\u884C\u4E3A\u3002\u901A\u8FC7\u4F7F\u7528SecLang\uFF0C\u7528\u6237\u53EF\u4EE5\u5229\u7528ModSecurity\u7684\u5F3A\u5927\u529F\u80FD\u6765\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u514D\u53D7\u5404\u79CD\u5B89\u5168\u5A01\u80C1\u3002\u66F4\u591A\u5173\u4E8ESecLang\u7684\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003<a href="https://coraza.io/docs/seclang/directives/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SecLang\u8BED\u6CD5\u53C2\u8003</a>\u3002</p>
<h3 id="owasp\u6838\u5FC3\u89C4\u5219\u96C6">OWASP\u6838\u5FC3\u89C4\u5219\u96C6</h3>
<p><a href="https://coreruleset.org/docs/deployment/engine_integration_options/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">OWASP CRS</a>\uFF08OWASP ModSecurity Core Rule Set\uFF09\u662F\u4E00\u4E2A\u7531OWASP\uFF08\u5F00\u653E\u5F0FWeb\u5E94\u7528\u5B89\u5168\u9879\u76EE\uFF09\u793E\u533A\u5F00\u53D1\u548C\u7EF4\u62A4\u7684ModSecurity\u89C4\u5219\u96C6\u5408\u3002\u5B83\u662F\u4E00\u5957\u9884\u5148\u5B9A\u4E49\u7684\u89C4\u5219\uFF0C\u65E8\u5728\u63D0\u4F9B\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u514D\u53D7\u5E7F\u6CDB\u7684Web\u5B89\u5168\u5A01\u80C1\u548C\u653B\u51FB\u3002\u8FD9\u4E9B\u89C4\u5219\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u7684\u9700\u6C42\u8FDB\u884C\u4FEE\u6539\uFF0C\u4EE5\u9002\u5E94\u4E0D\u540C\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u9700\u6C42\u3002</p>
<h2 id="waf\u63D2\u4EF6\u9632\u62A4\u539F\u7406">WAF\u63D2\u4EF6\u9632\u62A4\u539F\u7406</h2>
<p>WAF \u63D2\u4EF6\u57FA\u4E8E Higress Wasm Go SDK \u4EE5\u53CA <a href="https://coraza.io/docs/tutorials/introduction/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Coraza</a> \u5B9E\u73B0\uFF0C\u9075\u5FAA Modsecurity \u5B9A\u4E49\u7684 <a href="https://malware.expert/modsecurity/processing-phases-modsecurity/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Phase \u89C4\u8303</a>\u3002</p>
<ul>
<li>Phase 1: Request headers</li>
<li>Phase 2: Request body</li>
<li>Phase 3: Response headers</li>
<li>Phase 4: Response body</li>
<li>Phase 5: Logging</li>
</ul>
<p><img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/55b4c826-1861-459b-88f4-5803a522566b" alt="image" referrerpolicy="no-referrer"></p>
<p>\u63D2\u4EF6\u5185\u7F6E\u4E86OWASP CRS\u4EE5\u63D0\u4F9B\u57FA\u7840\u7684\u9632\u62A4\u529F\u80FD\uFF0C\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219\uFF0C\u5E76\u4E14\u652F\u6301\u8DEF\u7531\u7EA7/\u57DF\u540D\u7EA7\u7EC6\u7C92\u5EA6\u9632\u62A4\u3002</p>
<h2 id="\u4F7F\u7528\u793A\u4F8B">\u4F7F\u7528\u793A\u4F8B</h2>
<p>\u9996\u5148\u51C6\u5907\u4E00\u4E2Ak8s\u96C6\u7FA4\uFF0C\u5E76\u5B89\u88C5Higress\uFF0C\u53C2\u8003<a href="https://higress.cn/docs/latest/ops/deploy-by-helm/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u90E8\u7F72\u6559\u7A0B</a>\u3002</p>
<h3 id="\u90E8\u7F72\u670D\u52A1\u5E76\u521B\u5EFAingress">\u90E8\u7F72\u670D\u52A1\u5E76\u521B\u5EFAingress</h3>
<p>\u5728K8s\u96C6\u7FA4\u4E2Dapply\u5982\u4E0B\u8D44\u6E90\uFF0C\u4EE5\u90E8\u7F72\u540E\u7AEF\u670D\u52A1\u4EE5\u53CAingress\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kennethreitz/httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">IfNotPresent</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-backend</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-deployment</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClusterIP</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Pod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"-text=foo"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default port used by the image</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: httpbin-deployment\x7F  labels:\x7F    app: httpbin-deployment\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: httpbin-deployment\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: httpbin-deployment\x7F    spec:\x7F      containers:\x7F      - image: kennethreitz/httpbin\x7F        imagePullPolicy: IfNotPresent\x7F        name: httpbin-backend\x7F        ports:\x7F        - name: http\x7F          containerPort: 80\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: httpbin-service\x7F  namespace: default\x7F  labels:\x7F    app: httpbin-service\x7Fspec:\x7F  ports:\x7F    - port: 8080\x7F      name: http\x7F      protocol: TCP\x7F      targetPort: 80\x7F  selector:\x7F    app: httpbin-deployment\x7F  type: ClusterIP\x7F\x7F---\x7Fkind: Pod\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-app\x7F  labels:\x7F    app: foo\x7Fspec:\x7F  containers:\x7F  - name: foo-app\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\x7F    args:\x7F    - &#x22;-text=foo&#x22;\x7F\x7F---\x7Fkind: Service\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F  # Default port used by the image\x7F  - port: 5678\x7F\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: httpbin-ingress\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/&#x22;\x7F            backend:\x7F              service:\x7F                name: httpbin-service\x7F                port:\x7F                  number: 8080\x7F\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: echo-ingress\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/foo&#x22;\x7F            backend:\x7F              service:\x7F                name: foo-service\x7F                port:\x7F                  number: 5678"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE\u4E24\u6761\u8DEF\u7531\uFF08<code dir="auto">/user-agent</code>\u88AB\u8DEF\u7531\u5230<code dir="auto">httpbin-service</code>\u670D\u52A1\uFF0C<code dir="auto">/foo</code>\u88AB\u8DEF\u7531\u5230<code dir="auto">foo-service</code>\uFF09\uFF1A
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/ccdbad12-230a-4229-8948-4d7b1d4f4a24" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="\u5B89\u88C5waf\u63D2\u4EF6">\u5B89\u88C5WAF\u63D2\u4EF6</h3>
<p>\u5728K8s\u96C6\u7FA4\u4E2Dapply\u5982\u4E0B\u8D44\u6E90\uFF0C\u4EE5\u90E8\u7F72WAF\u63D2\u4EF6\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">waf-go</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">useCRS</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/echo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecAction </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:102,phase:1,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: waf-go\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    useCRS: true\x7F    secRules:\x7F    - &#x22;SecRuleEngine On&#x22;\x7F    - &#x22;SecDebugLogLevel 3&#x22;\x7F    - &#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;\x7F  matchRules:\x7F  - ingress:\x7F    - default/echo-ingress\x7F    config:\x7F      secRules:\x7F      - &#x22;SecRuleEngine On&#x22;\x7F      - &#x22;SecDebugLogLevel 3&#x22;\x7F      - &#x22;SecAction \\&#x22;id:102,phase:1,deny\\&#x22;&#x22;\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1"><div></div></button></div></figure></div>
<p>\u4E0A\u8FF0\u914D\u7F6E\u542B\u4E49\u5982\u4E0B\uFF1A</p>
<ul>
<li><code dir="auto">defaultConfig</code>\u4E0B\u914D\u7F6E\u4E86\u5168\u5C40\u7684\u9632\u62A4\u89C4\u5219
<ul>
<li><code dir="auto">useCRS=true</code>\u8868\u660E\u52A0\u8F7DOWASP CRS\u5B89\u5168\u89C4\u5219\u96C6</li>
<li><code dir="auto">secRules</code>\u4E0B\u6709\u4E09\u6761\u89C4\u5219\u4E3A\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u9632\u62A4\u89C4\u5219\u3002</li>
</ul>
</li>
<li><code dir="auto">matchRules</code>\u4E0B\u914D\u7F6E\u4E86\u8DEF\u7531\u7EA7\u9632\u62A4\u89C4\u5219\uFF08\u57DF\u540D\u7EA7\u540C\u7406\uFF09\uFF0C\u53C2\u8003<a href="https://higress.io/zh-cn/docs/plugins/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u63D2\u4EF6\u4F7F\u7528\u6587\u6863</a>
<ul>
<li><code dir="auto">ingress</code>\u7528\u4E8E\u6307\u5B9A\u9632\u62A4\u89C4\u5219\u751F\u6548\u7684\u8DEF\u7531\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u8DEF\u7531\u4E3A<code dir="auto">default</code>\u547D\u540D\u7A7A\u95F4\u4E0B\u7684<code dir="auto">echo-ingress</code>\u8DEF\u7531</li>
<li><code dir="auto">config</code>\u4E0B\u914D\u7F6E\u8DEF\u7531\u7EA7\u9632\u62A4\u89C4\u5219\uFF0C\u7ED3\u6784\u4E0E<code dir="auto">defaultConfig</code>\u4E00\u81F4\uFF0C\u5728\u8FD9\u91CC\u6CA1\u6709\u52A0\u8F7DOWASP CRS\u89C4\u5219\u96C6\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u62E6\u622A\u4E00\u5207\u8BF7\u6C42\u3002</li>
</ul>
</li>
</ul>
<h3 id="\u8BF7\u6C42\u62E6\u622A\u793A\u4F8B">\u8BF7\u6C42\u62E6\u622A\u793A\u4F8B</h3>
<h4 id="\u81EA\u5B9A\u4E49\u89C4\u5219\u9632\u62A4\u6D4B\u8BD5">\u81EA\u5B9A\u4E49\u89C4\u5219\u9632\u62A4\u6D4B\u8BD5</h4>
<p>\u6D4B\u8BD5\u6211\u4EEC\u5728\u5168\u5C40\u9632\u62A4\u89C4\u5219\u4E2D\u5B9A\u4E49\u7684\u5982\u4E0B\u81EA\u5B9A\u4E49\u89C4\u5219\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">"SecRule REQUEST_URI </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">@streq /admin</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:101,phase:1,t:lowercase,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;SecRule REQUEST_URI \\&#x22;@streq /admin\\&#x22; \\&#x22;id:101,phase:1,t:lowercase,deny\\&#x22;&#x22;"><div></div></button></div></figure></div>
<p>\u8BE5\u6761\u89C4\u5219\u4F1A\u963B\u6B62path\u4E3A/admin\u7684\u8BF7\u6C42\uFF1A
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/8582df5c-9db4-4526-ba9e-35e6bc3526d5" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="\u7EC6\u7C92\u5EA6\u8DEF\u7531\u7EA7\u57DF\u540D\u7EA7\u9632\u62A4\u6D4B\u8BD5">\u7EC6\u7C92\u5EA6\uFF08\u8DEF\u7531\u7EA7/\u57DF\u540D\u7EA7\uFF09\u9632\u62A4\u6D4B\u8BD5</h4>
<p>\u4EE5\u8DEF\u7531\u7EA7\u4E3A\u4F8B\uFF0C\u8BBF\u95EE<code dir="auto">/foo</code>\uFF0C\u8BE5\u8BF7\u6C42\u547D\u4E2D\u4EE5\u4E0B\u8DEF\u7531\u7EA7\u9632\u62A4\u89C4\u5219\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/echo-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecRuleEngine On"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecDebugLogLevel 3"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"SecAction </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">id:102,phase:1,deny</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="matchRules:\x7F- ingress:\x7F  - default/echo-ingress\x7F  config:\x7F    secRules:\x7F    - &#x22;SecRuleEngine On&#x22;\x7F    - &#x22;SecDebugLogLevel 3&#x22;\x7F    - &#x22;SecAction \\&#x22;id:102,phase:1,deny\\&#x22;&#x22;"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u9632\u62A4\u89C4\u5219\uFF0C\u8BE5\u8BF7\u6C42\u5C06\u4F1A\u88AB\u62E6\u622A\uFF1A
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/4898a648-1f0a-426a-8fe2-b8f0cb3ee843" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="\u5E38\u89C1\u653B\u51FB\u9632\u62A4\u6D4B\u8BD5">\u5E38\u89C1\u653B\u51FB\u9632\u62A4\u6D4B\u8BD5</h4>
<ol>
<li>
<p>shell\u6CE8\u5165\u653B\u9632\u793A\u4F8B
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/a0dac168-a513-4266-9059-6c71597667e0" alt="image" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>sql\u6CE8\u5165\u653B\u9632\u793A\u4F8B
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/89f76e7c-c43d-470e-8568-e1cadb475918" alt="image" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>\u8FDC\u7A0B\u6587\u4EF6\u5305\u542B\uFF08RFI\uFF09\u653B\u9632\u793A\u4F8B
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/3b58c2d7-2e49-4bf6-a6aa-a5a8ace8a7f0" alt="image" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>xss\u653B\u9632\u793A\u4F8B
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/89ac58f4-d175-406e-b2c4-6bfecd6b22d9" alt="image" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>php\u6CE8\u5165\u653B\u9632\u793A\u4F8B
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/9bb538a8-30a1-4558-bdf3-d6e7c847e42e" alt="image" referrerpolicy="no-referrer"></p>
</li>
</ol>
<h2 id="\u6574\u4F53\u9632\u62A4\u80FD\u529B\u8BC4\u4F30">\u6574\u4F53\u9632\u62A4\u80FD\u529B\u8BC4\u4F30</h2>
<p><a href="https://github.com/wallarm/gotestwaf" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GoTestWAF</a>\u662F\u4E00\u6B3EAPI\u548COWASP\u653B\u51FB\u6A21\u62DF\u5DE5\u5177\uFF0C\u652F\u6301\u5305\u62ECREST\u3001GraphQL\u3001gRPC\u3001WebSockets\u3001SOAP\u3001XMLRPC\u7B49\u591A\u79CDAPI\u534F\u8BAE\uFF0C\u65E8\u5728\u8BC4\u4F30Web\u5E94\u7528\u5B89\u5168\u89E3\u51B3\u65B9\u6848\uFF0C\u5982API\u5B89\u5168\u4EE3\u7406\u3001Web\u5E94\u7528\u9632\u706B\u5899\uFF08WAF\uFF09\u3001IPS\u3001API\u7F51\u5173\u7B49\u3002</p>
<p>\u8BE5\u5DE5\u5177\u4F7F\u7528\u653E\u7F6E\u5728HTTP\u8BF7\u6C42\u6B63\u6587\u3001\u6807\u5934\u3001URL\u53C2\u6570\u7B49\u4E0D\u540C\u90E8\u5206\u7684\u4E0D\u540C\u7F16\u7801\u7684\u6709\u6548\u8D1F\u8F7D\u751F\u6210\u6076\u610F\u8BF7\u6C42\uFF0C\u6DB5\u76D6\u4E86\u5E38\u89C1\u7684\u5404\u79CD\u653B\u51FB\u7C7B\u578B\u3002</p>
<p>\u591A\u79CD\u653B\u51FB\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u56FE\u4E2D\u7ED3\u679C\u8868\u660EWAF\u63D2\u4EF6\u80FD\u591F\u6709\u6548\u68C0\u6D4B\u5404\u79CD\u653B\u51FB\u7C7B\u578B\u7684\u975E\u6CD5\u8BF7\u6C42\u3002
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/72dd87ca-1c79-4a84-974f-0d2005d0e49b" alt="image" referrerpolicy="no-referrer"></p>
<p>WAF\u9632\u62A4\u529F\u80FD\u6574\u4F53\u5F97\u5206\u5982\u4E0B\uFF0C\u9AD8\u4E8Egotestwaf\u63D0\u4F9B\u7684benchmark\uFF08benchmark\u4E2Dparanoia\u8868\u793A\u9632\u62A4\u7B49\u7EA7\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u9632\u62A4\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u6B63\u786E\u62E6\u622A\u4E0E\u8BEF\u62E6\u622A\u7684\u8BF7\u6C42\u6570\u5747\u4F1A\u589E\u52A0\uFF09\uFF0C\u6D4B\u8BD5\u7ED3\u679C\u8868\u660EWAF\u63D2\u4EF6\u5177\u6709\u8F83\u597D\u7684\u9632\u62A4\u80FD\u529B\u3002
<img src="https://github.com/higress-group/higress-group.github.io/assets/25995563/52a31de8-27af-456e-bb3d-d48db9adc973" alt="image" referrerpolicy="no-referrer"></p>`,n={title:"\u5F00\u542F WAF \u9632\u62A4\u7684\u6700\u4F73\u5B9E\u8DF5"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/waf.md",i=void 0,c=function(){return`# \u5F00\u542F WAF \u9632\u62A4\u7684\u6700\u4F73\u5B9E\u8DF5
\u7F51\u5173\u5728\u7CFB\u7EDF\u67B6\u6784\u4E2D\u626E\u6F14\u7740\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u5B83\u662F\u8FDE\u63A5\u4E0D\u540C\u7F51\u7EDC\u3001\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u7684\u5165\u53E3\u70B9\uFF0CWeb\u5E94\u7528\u9632\u706B\u5899\uFF08Web Application Firewall\uFF0CWAF\uFF09\u662F\u7F51\u5173\u5B89\u5168\u9886\u57DF\u5FC5\u4E0D\u53EF\u5C11\u7684\u80FD\u529B\uFF0C\u5BF9\u7F51\u7AD9\u6216\u8005App\u7684\u4E1A\u52A1\u6D41\u91CF\u8FDB\u884C\u6076\u610F\u7279\u5F81\u8BC6\u522B\u53CA\u9632\u62A4\uFF0C\u5728\u5BF9\u6D41\u91CF\u6E05\u6D17\u548C\u8FC7\u6EE4\u540E\uFF0C\u5C06\u6B63\u5E38\u3001\u5B89\u5168\u7684\u6D41\u91CF\u8FD4\u56DE\u7ED9\u670D\u52A1\u5668\uFF0C\u907F\u514D\u7F51\u7AD9\u670D\u52A1\u5668\u88AB\u6076\u610F\u5165\u4FB5\u5BFC\u81F4\u6027\u80FD\u5F02\u5E38\u7B49\u95EE\u9898\uFF0C\u4ECE\u800C\u4FDD\u969C\u7F51\u7AD9\u7684\u4E1A\u52A1\u5B89\u5168\u548C\u6570\u636E\u5B89\u5168\u3002

## \u76F8\u5173\u77E5\u8BC6\u4ECB\u7ECD
### ModSecurity
[ModSecurity](https://github.com/SpiderLabs/ModSecurity)\u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u8DE8\u5E73\u53F0Web\u5E94\u7528\u7A0B\u5E8F\u9632\u706B\u5899\uFF08WAF\uFF09\u5F15\u64CE\uFF0C\u662F\u76EE\u524D\u4E16\u754C\u4E0A\u4F7F\u7528\u6700\u591A\u7684\u5F00\u6E90WAF\u4EA7\u54C1\uFF0C\u5176\u4E3B\u8981\u529F\u80FD\u662F\u5BF9\u4F20\u5165\u7684 HTTP \u8BF7\u6C42\u8FDB\u884C\u5206\u6790\u548C\u8FC7\u6EE4\uFF0C\u4EE5\u4FBF\u68C0\u6D4B\u548C\u963B\u6B62\u6F5C\u5728\u7684\u653B\u51FB\uFF0C\u4E3B\u8981\u5305\u62EC\uFF1A
- SQL Injection (SQLi)\uFF1A\u963B\u6B62SQL\u6CE8\u5165
- Cross Site Scripting (XSS)\uFF1A\u963B\u6B62\u8DE8\u7AD9\u811A\u672C\u653B\u51FB
- Local File Inclusion (LFI)\uFF1A\u963B\u6B62\u5229\u7528\u672C\u5730\u6587\u4EF6\u5305\u542B\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB
- Remote File Inclusione(RFI)\uFF1A\u963B\u6B62\u5229\u7528\u8FDC\u7A0B\u6587\u4EF6\u5305\u542B\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB
- Remote Code Execution (RCE)\uFF1A\u963B\u6B62\u5229\u7528\u8FDC\u7A0B\u547D\u4EE4\u6267\u884C\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB
- PHP Code Injectiod\uFF1A\u963B\u6B62PHP\u4EE3\u7801\u6CE8\u5165
- HTTP Protocol Violations\uFF1A\u963B\u6B62\u8FDD\u53CDHTTP\u534F\u8BAE\u7684\u6076\u610F\u8BBF\u95EE
- HTTPoxy\uFF1A\u963B\u6B62\u5229\u7528\u8FDC\u7A0B\u4EE3\u7406\u611F\u67D3\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB
- Shellshock\uFF1A\u963B\u6B62\u5229\u7528Shellshock\u6F0F\u6D1E\u8FDB\u884C\u653B\u51FB

ModSecurity\u901A\u8FC7\u4E00\u4E2A\u57FA\u4E8E\u89C4\u5219\u7684\u5F15\u64CE\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\uFF0C\u8FD9\u4E9B\u89C4\u5219\u5B9A\u4E49\u4E86\u8981\u5339\u914D\u548C\u5904\u7406\u7684\u6A21\u5F0F\u548C\u884C\u4E3A\u3002

### \u5B89\u5168\u89C4\u5219\u8BED\u8A00
ModSecurity\u89C4\u5219\u8BED\u8A00\uFF08\u4E5F\u79F0\u4E3ASecLang\uFF09\u662F\u4E00\u79CD\u57FA\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u548C\u6A21\u5F0F\u5339\u914D\u7684\u9886\u57DF\u7279\u5B9A\u8BED\u8A00\uFF0C\u7528\u4E8E\u63CF\u8FF0\u548C\u68C0\u6D4BWeb\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u5B89\u5168\u4E8B\u4EF6\u548C\u653B\u51FB\u3002

SecLang \u652F\u6301\u4EE5\u4E0B\u57FA\u672C\u6982\u5FF5\u548C\u8BED\u6CD5\u7ED3\u6784\uFF1A
- \u4E8B\u52A1\u548C\u89C4\u5219\uFF1ASecLang\u4E2D\u7684\u89C4\u5219\u4EE5\u4E8B\u52A1\u4E3A\u5355\u4F4D\uFF0C\u4E8B\u52A1\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u89C4\u5219\u3002\u89C4\u5219\u5B9A\u4E49\u4E86\u8981\u5339\u914D\u548C\u68C0\u6D4B\u7684\u6A21\u5F0F\uFF0C\u4EE5\u53CA\u5728\u5339\u914D\u65F6\u8981\u6267\u884C\u7684\u64CD\u4F5C\u3002
- \u52A8\u4F5C\uFF1A\u89C4\u5219\u53EF\u4EE5\u5305\u542B\u591A\u79CD\u52A8\u4F5C\uFF0C\u7528\u4E8E\u6267\u884C\u7279\u5B9A\u7684\u64CD\u4F5C\uFF0C\u5982\u65E5\u5FD7\u8BB0\u5F55\u3001\u62E6\u622A\u8BF7\u6C42\u3001\u8BBE\u7F6E\u53D8\u91CF\u3001\u4FEE\u6539\u8BF7\u6C42\u7B49\u3002
- \u6761\u4EF6\uFF1A\u89C4\u5219\u53EF\u4EE5\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5\u6765\u6307\u5B9A\u4EC5\u5728\u6EE1\u8DB3\u7279\u5B9A\u6761\u4EF6\u65F6\u624D\u6267\u884C\u7684\u52A8\u4F5C\u3002\u6761\u4EF6\u53EF\u4EE5\u57FA\u4E8E\u8BF7\u6C42\u7684\u5404\u4E2A\u65B9\u9762\uFF0C\u5982\u8BF7\u6C42\u65B9\u6CD5\u3001URI\u3001\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u6B63\u6587\u3001IP\u5730\u5740\u7B49\u3002
- \u53D8\u91CF\uFF1ASecLang \u652F\u6301\u5185\u7F6E\u53D8\u91CF\u548C\u7528\u6237\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u7528\u4E8E\u5B58\u50A8\u548C\u64CD\u4F5C\u8BF7\u6C42\u548C\u54CD\u5E94\u4E2D\u7684\u6570\u636E\u3002\u53D8\u91CF\u53EF\u4EE5\u7528\u4E8E\u89C4\u5219\u5339\u914D\u3001\u6761\u4EF6\u5224\u65AD\u548C\u52A8\u4F5C\u6267\u884C\u3002
- \u8FD0\u7B97\u7B26\uFF1ASecLang \u63D0\u4F9B\u4E86\u5404\u79CD\u8FD0\u7B97\u7B26\uFF0C\u7528\u4E8E\u6267\u884C\u6A21\u5F0F\u5339\u914D\u3001\u6BD4\u8F83\u548C\u903B\u8F91\u64CD\u4F5C\u3002\u8FD9\u4E9B\u8FD0\u7B97\u7B26\u7528\u4E8E\u6784\u5EFA\u89C4\u5219\u7684\u6761\u4EF6\u548C\u64CD\u4F5C\u3002

SecLang \u5141\u8BB8\u7528\u6237\u7F16\u5199\u81EA\u5B9A\u4E49\u89C4\u5219\uFF0C\u4EE5\u6307\u5B9A\u5728HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u4E2D\u5E94\u8BE5\u5982\u4F55\u68C0\u6D4B\u548C\u5904\u7406\u6F5C\u5728\u7684\u5B89\u5168\u95EE\u9898\u3002\u89C4\u5219\u53EF\u4EE5\u5B9A\u4E49\u8BF8\u5982\u963B\u6B62\u6076\u610F\u8BF7\u6C42\u3001\u8FC7\u6EE4\u7279\u5B9A\u7684\u6570\u636E\u3001\u62E6\u622ASQL\u6CE8\u5165\u548C\u8DE8\u7AD9\u70B9\u811A\u672C\uFF08XSS\uFF09\u7B49\u653B\u51FB\u7C7B\u578B\u7684\u884C\u4E3A\u3002\u901A\u8FC7\u4F7F\u7528SecLang\uFF0C\u7528\u6237\u53EF\u4EE5\u5229\u7528ModSecurity\u7684\u5F3A\u5927\u529F\u80FD\u6765\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u514D\u53D7\u5404\u79CD\u5B89\u5168\u5A01\u80C1\u3002\u66F4\u591A\u5173\u4E8ESecLang\u7684\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003[SecLang\u8BED\u6CD5\u53C2\u8003](https://coraza.io/docs/seclang/directives/)\u3002

### OWASP\u6838\u5FC3\u89C4\u5219\u96C6
[OWASP CRS](https://coreruleset.org/docs/deployment/engine_integration_options/)\uFF08OWASP ModSecurity Core Rule Set\uFF09\u662F\u4E00\u4E2A\u7531OWASP\uFF08\u5F00\u653E\u5F0FWeb\u5E94\u7528\u5B89\u5168\u9879\u76EE\uFF09\u793E\u533A\u5F00\u53D1\u548C\u7EF4\u62A4\u7684ModSecurity\u89C4\u5219\u96C6\u5408\u3002\u5B83\u662F\u4E00\u5957\u9884\u5148\u5B9A\u4E49\u7684\u89C4\u5219\uFF0C\u65E8\u5728\u63D0\u4F9B\u4FDD\u62A4Web\u5E94\u7528\u7A0B\u5E8F\u514D\u53D7\u5E7F\u6CDB\u7684Web\u5B89\u5168\u5A01\u80C1\u548C\u653B\u51FB\u3002\u8FD9\u4E9B\u89C4\u5219\u53EF\u4EE5\u6839\u636E\u5177\u4F53\u7684\u9700\u6C42\u8FDB\u884C\u4FEE\u6539\uFF0C\u4EE5\u9002\u5E94\u4E0D\u540C\u7684 Web \u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u9700\u6C42\u3002

## WAF\u63D2\u4EF6\u9632\u62A4\u539F\u7406
WAF \u63D2\u4EF6\u57FA\u4E8E Higress Wasm Go SDK \u4EE5\u53CA [Coraza](https://coraza.io/docs/tutorials/introduction/) \u5B9E\u73B0\uFF0C\u9075\u5FAA Modsecurity \u5B9A\u4E49\u7684 [Phase \u89C4\u8303](https://malware.expert/modsecurity/processing-phases-modsecurity/)\u3002
- Phase 1: Request headers
- Phase 2: Request body
- Phase 3: Response headers
- Phase 4: Response body
- Phase 5: Logging

![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/55b4c826-1861-459b-88f4-5803a522566b)

\u63D2\u4EF6\u5185\u7F6E\u4E86OWASP CRS\u4EE5\u63D0\u4F9B\u57FA\u7840\u7684\u9632\u62A4\u529F\u80FD\uFF0C\u652F\u6301\u7528\u6237\u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219\uFF0C\u5E76\u4E14\u652F\u6301\u8DEF\u7531\u7EA7/\u57DF\u540D\u7EA7\u7EC6\u7C92\u5EA6\u9632\u62A4\u3002

## \u4F7F\u7528\u793A\u4F8B
\u9996\u5148\u51C6\u5907\u4E00\u4E2Ak8s\u96C6\u7FA4\uFF0C\u5E76\u5B89\u88C5Higress\uFF0C\u53C2\u8003[Higress\u90E8\u7F72\u6559\u7A0B](https://higress.cn/docs/latest/ops/deploy-by-helm/)\u3002

### \u90E8\u7F72\u670D\u52A1\u5E76\u521B\u5EFAingress
\u5728K8s\u96C6\u7FA4\u4E2Dapply\u5982\u4E0B\u8D44\u6E90\uFF0C\u4EE5\u90E8\u7F72\u540E\u7AEF\u670D\u52A1\u4EE5\u53CAingress\uFF1A
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpbin-deployment
  labels:
    app: httpbin-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: httpbin-deployment
  template:
    metadata:
      labels:
        app: httpbin-deployment
    spec:
      containers:
      - image: kennethreitz/httpbin
        imagePullPolicy: IfNotPresent
        name: httpbin-backend
        ports:
        - name: http
          containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: httpbin-service
  namespace: default
  labels:
    app: httpbin-service
spec:
  ports:
    - port: 8080
      name: http
      protocol: TCP
      targetPort: 80
  selector:
    app: httpbin-deployment
  type: ClusterIP

---
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
  - name: foo-app
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
    args:
    - "-text=foo"

---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
  # Default port used by the image
  - port: 5678

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: httpbin-ingress
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: httpbin-service
                port:
                  number: 8080

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: echo-ingress
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/foo"
            backend:
              service:
                name: foo-service
                port:
                  number: 5678
\`\`\`

\u8BBF\u95EE\u4E24\u6761\u8DEF\u7531\uFF08\`/user-agent\`\u88AB\u8DEF\u7531\u5230\`httpbin-service\`\u670D\u52A1\uFF0C\`/foo\`\u88AB\u8DEF\u7531\u5230\`foo-service\`\uFF09\uFF1A
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/ccdbad12-230a-4229-8948-4d7b1d4f4a24)

### \u5B89\u88C5WAF\u63D2\u4EF6
\u5728K8s\u96C6\u7FA4\u4E2Dapply\u5982\u4E0B\u8D44\u6E90\uFF0C\u4EE5\u90E8\u7F72WAF\u63D2\u4EF6\uFF1A
\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: waf-go
  namespace: higress-system
spec:
  defaultConfig:
    useCRS: true
    secRules:
    - "SecRuleEngine On"
    - "SecDebugLogLevel 3"
    - "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
  matchRules:
  - ingress:
    - default/echo-ingress
    config:
      secRules:
      - "SecRuleEngine On"
      - "SecDebugLogLevel 3"
      - "SecAction \\"id:102,phase:1,deny\\""
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1
\`\`\`

\u4E0A\u8FF0\u914D\u7F6E\u542B\u4E49\u5982\u4E0B\uFF1A
- \`defaultConfig\`\u4E0B\u914D\u7F6E\u4E86\u5168\u5C40\u7684\u9632\u62A4\u89C4\u5219
  - \`useCRS=true\`\u8868\u660E\u52A0\u8F7DOWASP CRS\u5B89\u5168\u89C4\u5219\u96C6
  - \`secRules\`\u4E0B\u6709\u4E09\u6761\u89C4\u5219\u4E3A\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u9632\u62A4\u89C4\u5219\u3002
- \`matchRules\`\u4E0B\u914D\u7F6E\u4E86\u8DEF\u7531\u7EA7\u9632\u62A4\u89C4\u5219\uFF08\u57DF\u540D\u7EA7\u540C\u7406\uFF09\uFF0C\u53C2\u8003[Higress\u63D2\u4EF6\u4F7F\u7528\u6587\u6863](https://higress.io/zh-cn/docs/plugins/intro)
  - \`ingress\`\u7528\u4E8E\u6307\u5B9A\u9632\u62A4\u89C4\u5219\u751F\u6548\u7684\u8DEF\u7531\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u7684\u8DEF\u7531\u4E3A\`default\`\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\`echo-ingress\`\u8DEF\u7531
  - \`config\`\u4E0B\u914D\u7F6E\u8DEF\u7531\u7EA7\u9632\u62A4\u89C4\u5219\uFF0C\u7ED3\u6784\u4E0E\`defaultConfig\`\u4E00\u81F4\uFF0C\u5728\u8FD9\u91CC\u6CA1\u6709\u52A0\u8F7DOWASP CRS\u89C4\u5219\u96C6\uFF0C\u5E76\u4E14\u8BBE\u7F6E\u62E6\u622A\u4E00\u5207\u8BF7\u6C42\u3002
 
### \u8BF7\u6C42\u62E6\u622A\u793A\u4F8B
#### \u81EA\u5B9A\u4E49\u89C4\u5219\u9632\u62A4\u6D4B\u8BD5
\u6D4B\u8BD5\u6211\u4EEC\u5728\u5168\u5C40\u9632\u62A4\u89C4\u5219\u4E2D\u5B9A\u4E49\u7684\u5982\u4E0B\u81EA\u5B9A\u4E49\u89C4\u5219\uFF1A
\`\`\`yaml
"SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
\`\`\`
\u8BE5\u6761\u89C4\u5219\u4F1A\u963B\u6B62path\u4E3A/admin\u7684\u8BF7\u6C42\uFF1A
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/8582df5c-9db4-4526-ba9e-35e6bc3526d5)

#### \u7EC6\u7C92\u5EA6\uFF08\u8DEF\u7531\u7EA7/\u57DF\u540D\u7EA7\uFF09\u9632\u62A4\u6D4B\u8BD5
\u4EE5\u8DEF\u7531\u7EA7\u4E3A\u4F8B\uFF0C\u8BBF\u95EE\`/foo\`\uFF0C\u8BE5\u8BF7\u6C42\u547D\u4E2D\u4EE5\u4E0B\u8DEF\u7531\u7EA7\u9632\u62A4\u89C4\u5219\uFF1A
\`\`\`yaml
matchRules:
- ingress:
  - default/echo-ingress
  config:
    secRules:
    - "SecRuleEngine On"
    - "SecDebugLogLevel 3"
    - "SecAction \\"id:102,phase:1,deny\\""
\`\`\`
\u6839\u636E\u8BE5\u9632\u62A4\u89C4\u5219\uFF0C\u8BE5\u8BF7\u6C42\u5C06\u4F1A\u88AB\u62E6\u622A\uFF1A
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/4898a648-1f0a-426a-8fe2-b8f0cb3ee843)

#### \u5E38\u89C1\u653B\u51FB\u9632\u62A4\u6D4B\u8BD5
1. shell\u6CE8\u5165\u653B\u9632\u793A\u4F8B
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/a0dac168-a513-4266-9059-6c71597667e0)

2. sql\u6CE8\u5165\u653B\u9632\u793A\u4F8B
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/89f76e7c-c43d-470e-8568-e1cadb475918)

3. \u8FDC\u7A0B\u6587\u4EF6\u5305\u542B\uFF08RFI\uFF09\u653B\u9632\u793A\u4F8B
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/3b58c2d7-2e49-4bf6-a6aa-a5a8ace8a7f0)

4. xss\u653B\u9632\u793A\u4F8B
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/89ac58f4-d175-406e-b2c4-6bfecd6b22d9)

5. php\u6CE8\u5165\u653B\u9632\u793A\u4F8B
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/9bb538a8-30a1-4558-bdf3-d6e7c847e42e)

## \u6574\u4F53\u9632\u62A4\u80FD\u529B\u8BC4\u4F30
[GoTestWAF](https://github.com/wallarm/gotestwaf)\u662F\u4E00\u6B3EAPI\u548COWASP\u653B\u51FB\u6A21\u62DF\u5DE5\u5177\uFF0C\u652F\u6301\u5305\u62ECREST\u3001GraphQL\u3001gRPC\u3001WebSockets\u3001SOAP\u3001XMLRPC\u7B49\u591A\u79CDAPI\u534F\u8BAE\uFF0C\u65E8\u5728\u8BC4\u4F30Web\u5E94\u7528\u5B89\u5168\u89E3\u51B3\u65B9\u6848\uFF0C\u5982API\u5B89\u5168\u4EE3\u7406\u3001Web\u5E94\u7528\u9632\u706B\u5899\uFF08WAF\uFF09\u3001IPS\u3001API\u7F51\u5173\u7B49\u3002

\u8BE5\u5DE5\u5177\u4F7F\u7528\u653E\u7F6E\u5728HTTP\u8BF7\u6C42\u6B63\u6587\u3001\u6807\u5934\u3001URL\u53C2\u6570\u7B49\u4E0D\u540C\u90E8\u5206\u7684\u4E0D\u540C\u7F16\u7801\u7684\u6709\u6548\u8D1F\u8F7D\u751F\u6210\u6076\u610F\u8BF7\u6C42\uFF0C\u6DB5\u76D6\u4E86\u5E38\u89C1\u7684\u5404\u79CD\u653B\u51FB\u7C7B\u578B\u3002

\u591A\u79CD\u653B\u51FB\u6D4B\u8BD5\u7ED3\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u56FE\u4E2D\u7ED3\u679C\u8868\u660EWAF\u63D2\u4EF6\u80FD\u591F\u6709\u6548\u68C0\u6D4B\u5404\u79CD\u653B\u51FB\u7C7B\u578B\u7684\u975E\u6CD5\u8BF7\u6C42\u3002
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/72dd87ca-1c79-4a84-974f-0d2005d0e49b)

WAF\u9632\u62A4\u529F\u80FD\u6574\u4F53\u5F97\u5206\u5982\u4E0B\uFF0C\u9AD8\u4E8Egotestwaf\u63D0\u4F9B\u7684benchmark\uFF08benchmark\u4E2Dparanoia\u8868\u793A\u9632\u62A4\u7B49\u7EA7\uFF0C\u6570\u503C\u8D8A\u5927\uFF0C\u9632\u62A4\u7B49\u7EA7\u8D8A\u9AD8\uFF0C\u6B63\u786E\u62E6\u622A\u4E0E\u8BEF\u62E6\u622A\u7684\u8BF7\u6C42\u6570\u5747\u4F1A\u589E\u52A0\uFF09\uFF0C\u6D4B\u8BD5\u7ED3\u679C\u8868\u660EWAF\u63D2\u4EF6\u5177\u6709\u8F83\u597D\u7684\u9632\u62A4\u80FD\u529B\u3002
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/52a31de8-27af-456e-bb3d-d48db9adc973)

`},l=function(){return s},t=function(){return[{depth:2,slug:"\u76F8\u5173\u77E5\u8BC6\u4ECB\u7ECD",text:"\u76F8\u5173\u77E5\u8BC6\u4ECB\u7ECD"},{depth:3,slug:"modsecurity",text:"ModSecurity"},{depth:3,slug:"\u5B89\u5168\u89C4\u5219\u8BED\u8A00",text:"\u5B89\u5168\u89C4\u5219\u8BED\u8A00"},{depth:3,slug:"owasp\u6838\u5FC3\u89C4\u5219\u96C6",text:"OWASP\u6838\u5FC3\u89C4\u5219\u96C6"},{depth:2,slug:"waf\u63D2\u4EF6\u9632\u62A4\u539F\u7406",text:"WAF\u63D2\u4EF6\u9632\u62A4\u539F\u7406"},{depth:2,slug:"\u4F7F\u7528\u793A\u4F8B",text:"\u4F7F\u7528\u793A\u4F8B"},{depth:3,slug:"\u90E8\u7F72\u670D\u52A1\u5E76\u521B\u5EFAingress",text:"\u90E8\u7F72\u670D\u52A1\u5E76\u521B\u5EFAingress"},{depth:3,slug:"\u5B89\u88C5waf\u63D2\u4EF6",text:"\u5B89\u88C5WAF\u63D2\u4EF6"},{depth:3,slug:"\u8BF7\u6C42\u62E6\u622A\u793A\u4F8B",text:"\u8BF7\u6C42\u62E6\u622A\u793A\u4F8B"},{depth:4,slug:"\u81EA\u5B9A\u4E49\u89C4\u5219\u9632\u62A4\u6D4B\u8BD5",text:"\u81EA\u5B9A\u4E49\u89C4\u5219\u9632\u62A4\u6D4B\u8BD5"},{depth:4,slug:"\u7EC6\u7C92\u5EA6\u8DEF\u7531\u7EA7\u57DF\u540D\u7EA7\u9632\u62A4\u6D4B\u8BD5",text:"\u7EC6\u7C92\u5EA6\uFF08\u8DEF\u7531\u7EA7/\u57DF\u540D\u7EA7\uFF09\u9632\u62A4\u6D4B\u8BD5"},{depth:4,slug:"\u5E38\u89C1\u653B\u51FB\u9632\u62A4\u6D4B\u8BD5",text:"\u5E38\u89C1\u653B\u51FB\u9632\u62A4\u6D4B\u8BD5"},{depth:2,slug:"\u6574\u4F53\u9632\u62A4\u80FD\u529B\u8BC4\u4F30",text:"\u6574\u4F53\u9632\u62A4\u80FD\u529B\u8BC4\u4F30"}]},e=d((u,f,m)=>{const{layout:F,...p}=n;return p.file=a,p.url=i,r`${E()}${v(s)}`})});export{e as Content,h as __tla,l as compiledContent,e as default,a as file,n as frontmatter,t as getHeadings,c as rawContent,i as url};
