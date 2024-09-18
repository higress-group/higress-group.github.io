import{c as p,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as g,m as d,u as y,__tla as u}from"./constant.BZpKXPh9.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let e,o,n,a,r,l,i,v=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u6A21\u5757\u8BE6\u7EC6\u4ECB\u7ECD</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress\u6A21\u5757\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4E0B\uFF1A</p>
<ol>
<li>
<p><strong>Higress\u7B80\u4ECB</strong>
Higress\u662F\u4E00\u4E2A\u9AD8\u7EA7\u4E91\u539F\u751F\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u57FA\u4E8E\u5F00\u6E90Istio\u548CEnvoy\u9879\u76EE\uFF0C\u96C6\u6210\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u3001\u5B89\u5168\u7F51\u5173\u4E09\u5927\u529F\u80FD\u4E8E\u4E00\u4F53\u3002\u5B83\u65E8\u5728\u7B80\u5316\u90E8\u7F72\u548C\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u540C\u65F6\u4FDD\u6301\u9AD8\u6027\u80FD\u548C\u670D\u52A1\u80FD\u529B\u3002Higress\u4E0EDubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u751F\u6001\u7CFB\u7EDF\u7D27\u5BC6\u96C6\u6210\uFF0C\u786E\u4FDD\u4E86\u4E0E\u73B0\u6709\u6280\u672F\u6808\u7684\u65E0\u7F1D\u5BF9\u63A5\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u5168\u9762\u517C\u5BB9Ingress\u4E0EGateway API\u6807\u51C6\uFF0C\u4FBF\u4E8E\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E2D\u5B9E\u65BD\uFF0C\u5E76\u652F\u6301\u4ECENginx Ingress\u5E73\u6ED1\u8FC1\u79FB\u3002</p>
</li>
<li>
<p><strong>\u53EF\u89C2\u6D4B\u6027\u7279\u6027 - \u94FE\u8DEF\u8FFD\u8E2A</strong>
Higress\u5185\u7F6E\u4E86\u5F3A\u5927\u7684\u53EF\u89C2\u6D4B\u6027\u80FD\u529B\uFF0C\u5176\u4E2D\u5305\u62EC\u94FE\u8DEF\u8FFD\u8E2A\u3002\u94FE\u8DEF\u8FFD\u8E2A\u5BF9\u4E8E\u7406\u89E3\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u8BF7\u6C42\u6D41\u52A8\u8DEF\u5F84\u548C\u6027\u80FD\u81F3\u5173\u91CD\u8981\u3002Higress\u5229\u7528Envoy\u7684\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B\uFF0C\u652F\u6301\u4E0E\u4E3B\u6D41\u94FE\u8DEF\u8FFD\u8E2A\u7CFB\u7EDF\u5982Skywalking\u96C6\u6210\uFF0C\u901A\u8FC7\u914D\u7F6Econfigmap\u5373\u53EF\u8F7B\u677E\u5F00\u542FSkywalking\u96C6\u6210\u5E76\u8BBE\u5B9A\u91C7\u6837\u7387\u3002</p>
</li>
<li>
<p><strong>\u4E0ESkywalking\u96C6\u6210</strong></p>
<ul>
<li><strong>\u914D\u7F6E\u793A\u4F8B</strong>\uFF1A\u5728Higress\u7684\u914D\u7F6E\u6587\u4EF6(configmap)\u4E2D\u52A0\u5165Skywalking\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982\u670D\u52A1\u5730\u5740\u548C\u670D\u52A1\u7AEF\u53E3\uFF0C\u4EE5\u53CA\u91C7\u6837\u7387\u8BBE\u7F6E\uFF0C\u5373\u53EF\u5B9E\u73B0\u4E0ESkywalking\u7684\u96C6\u6210\u3002</li>
</ul>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">tracing:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">enable: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">sampling: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">timeout: 500</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">skywalking:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">service: skywalking-oap-server.op-system.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">port: 11800</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  data:\x7F    higress: |-\x7F      tracing:\x7F        enable: true\x7F        sampling: 100\x7F        timeout: 500\x7F        skywalking:\x7F          service: skywalking-oap-server.op-system.svc.cluster.local\x7F          port: 11800"><div></div></button></div></figure></div>
<ul>
<li><strong>\u6D4B\u8BD5\u73AF\u5883\u67B6\u6784</strong>\uFF1A\u901A\u8FC7\u5728\u672C\u5730Kubernetes\u96C6\u7FA4\u90E8\u7F72\u4E00\u5957Spring Boot\u5E94\u7528\uFF0C\u6A21\u62DF\u590D\u6742\u7684\u670D\u52A1\u8C03\u7528\u94FE\u8DEF\uFF0C\u4EE5\u6B64\u5C55\u793AHigress\u4E0ESkywalking\u7ED3\u5408\u540E\u7684\u94FE\u8DEF\u8FFD\u8E2A\u6548\u679C\u3002</li>
</ul>
</li>
<li>
<p><strong>\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B\u5E94\u7528</strong></p>
<ul>
<li><strong>\u5FAE\u670D\u52A1\u8C03\u7528\u62D3\u6251\u56FE</strong>\uFF1ASkywalking\u63D0\u4F9B\u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u62D3\u6251\u56FE\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u6E05\u6670\u5730\u638C\u63E1\u7CFB\u7EDF\u67B6\u6784\u548C\u4F9D\u8D56\u5173\u7CFB\u3002</li>
<li><strong>\u6027\u80FD\u74F6\u9888\u5B9A\u4F4D</strong>\uFF1A\u901A\u8FC7\u94FE\u8DEF\u8FFD\u8E2A\u6570\u636E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u8BC6\u522B\u51FA\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\u4E2D\u7684\u6162\u8282\u70B9\uFF0C\u5982\u6848\u4F8B\u4E2Dspringboot-svc-4-2\u7684\u9AD8\u54CD\u5E94\u65F6\u95F4\uFF0C\u4ECE\u800C\u8FDB\u884C\u9488\u5BF9\u6027\u4F18\u5316\u3002</li>
<li><strong>\u9519\u8BEF\u8282\u70B9\u6392\u67E5</strong>\uFF1A\u5F53\u7CFB\u7EDF\u4E2D\u67D0\u73AF\u8282\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u7CBE\u786E\u6307\u51FA\u9519\u8BEF\u53D1\u751F\u7684\u8282\u70B9\u53CA\u5176\u5F71\u54CD\u8303\u56F4\uFF0C\u5982\u6A21\u62DF\u5220\u9664springboot svc 4-2\u5BFC\u81F4\u7684\u8FDE\u9501\u9519\u8BEF\u6548\u5E94\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u5B9A\u4F4D\u548C\u4FEE\u590D\u95EE\u9898\u3002</li>
</ul>
</li>
</ol>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4F5C\u4E3A\u4E00\u4E2A\u9AD8\u6027\u80FD\u3001\u6613\u96C6\u6210\u7684\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5176\u94FE\u8DEF\u8FFD\u8E2A\u529F\u80FD\u4E0ESkywalking\u7684\u7ED3\u5408\u4E3A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u53EF\u89C2\u6D4B\u6027\u548C\u6545\u969C\u6392\u67E5\u80FD\u529B\uFF0C\u6781\u5927\u5730\u63D0\u5347\u4E86\u5F00\u53D1\u548C\u8FD0\u7EF4\u6548\u7387\u3002</p>
<p>\u53C2\u8003\u94FE\u63A5\uFF1A</p>
<ul>
<li><a href="https://github.com/higress-group/higress-demo/tree/main/observability/skywalking" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress + Skywalking + SpringBoot \u94FE\u8DEF\u8FFD\u8E2A\u63A2\u7D22</a></li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress + Skywalking + SpringBoot \u94FE\u8DEF\u8FFD\u8E2A\u63A2\u7D22</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16983" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,a={id:"question-history-16976",title:"\u6A21\u5757\u8BE6\u7EC6\u4ECB\u7ECD",date:"2024-09-11",category:"expertConsultation",description:"Higress\u6A21\u5757\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4E0B\uFF1A1. **Higress\u7B80\u4ECB**   Higress\u662F\u4E00\u4E2A\u9AD8\u7EA7\u4E91\u539F\u751F\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u57FA\u4E8E\u5F00\u6E90Istio\u548CEnvoy\u9879\u76EE\uFF0C\u96C6\u6210\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u3001\u5B89\u5168\u7F51\u5173\u4E09\u5927\u529F\u80FD\u4E8E\u4E00\u4F53\u3002\u5B83\u65E8\u5728\u7B80\u5316\u90E8\u7F72\u548C\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u540C\u65F6\u4FDD\u6301\u9AD8\u6027\u80FD\u548C\u670D\u52A1\u80FD\u529B\u3002Higress\u4E0EDubbo\u3001Nacos\u3001Sen",tags:["\u8BF7\u63D0\u4F9B\u5192\u53F7\u540E\u7684\u6587\u7AE0\u5185\u5BB9\u3002"],keywords:["\u8BF7\u63D0\u4F9B\u5192\u53F7\u540E\u7684\u6587\u7AE0\u5185\u5BB9\u3002"]},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16976.md",i=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u6A21\u5757\u8BE6\u7EC6\u4ECB\u7ECD  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress\u6A21\u5757\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4E0B\uFF1A

1. **Higress\u7B80\u4ECB**
   Higress\u662F\u4E00\u4E2A\u9AD8\u7EA7\u4E91\u539F\u751F\u7F51\u5173\u89E3\u51B3\u65B9\u6848\uFF0C\u57FA\u4E8E\u5F00\u6E90Istio\u548CEnvoy\u9879\u76EE\uFF0C\u96C6\u6210\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u3001\u5B89\u5168\u7F51\u5173\u4E09\u5927\u529F\u80FD\u4E8E\u4E00\u4F53\u3002\u5B83\u65E8\u5728\u7B80\u5316\u90E8\u7F72\u548C\u8FD0\u7EF4\u6D41\u7A0B\uFF0C\u540C\u65F6\u4FDD\u6301\u9AD8\u6027\u80FD\u548C\u670D\u52A1\u80FD\u529B\u3002Higress\u4E0EDubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u751F\u6001\u7CFB\u7EDF\u7D27\u5BC6\u96C6\u6210\uFF0C\u786E\u4FDD\u4E86\u4E0E\u73B0\u6709\u6280\u672F\u6808\u7684\u65E0\u7F1D\u5BF9\u63A5\u3002\u6B64\u5916\uFF0C\u5B83\u8FD8\u5168\u9762\u517C\u5BB9Ingress\u4E0EGateway API\u6807\u51C6\uFF0C\u4FBF\u4E8E\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E2D\u5B9E\u65BD\uFF0C\u5E76\u652F\u6301\u4ECENginx Ingress\u5E73\u6ED1\u8FC1\u79FB\u3002

2. **\u53EF\u89C2\u6D4B\u6027\u7279\u6027 - \u94FE\u8DEF\u8FFD\u8E2A**
   Higress\u5185\u7F6E\u4E86\u5F3A\u5927\u7684\u53EF\u89C2\u6D4B\u6027\u80FD\u529B\uFF0C\u5176\u4E2D\u5305\u62EC\u94FE\u8DEF\u8FFD\u8E2A\u3002\u94FE\u8DEF\u8FFD\u8E2A\u5BF9\u4E8E\u7406\u89E3\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u8BF7\u6C42\u6D41\u52A8\u8DEF\u5F84\u548C\u6027\u80FD\u81F3\u5173\u91CD\u8981\u3002Higress\u5229\u7528Envoy\u7684\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B\uFF0C\u652F\u6301\u4E0E\u4E3B\u6D41\u94FE\u8DEF\u8FFD\u8E2A\u7CFB\u7EDF\u5982Skywalking\u96C6\u6210\uFF0C\u901A\u8FC7\u914D\u7F6Econfigmap\u5373\u53EF\u8F7B\u677E\u5F00\u542FSkywalking\u96C6\u6210\u5E76\u8BBE\u5B9A\u91C7\u6837\u7387\u3002

3. **\u4E0ESkywalking\u96C6\u6210**
   - **\u914D\u7F6E\u793A\u4F8B**\uFF1A\u5728Higress\u7684\u914D\u7F6E\u6587\u4EF6(configmap)\u4E2D\u52A0\u5165Skywalking\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982\u670D\u52A1\u5730\u5740\u548C\u670D\u52A1\u7AEF\u53E3\uFF0C\u4EE5\u53CA\u91C7\u6837\u7387\u8BBE\u7F6E\uFF0C\u5373\u53EF\u5B9E\u73B0\u4E0ESkywalking\u7684\u96C6\u6210\u3002
   \`\`\`yaml
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
   - **\u6D4B\u8BD5\u73AF\u5883\u67B6\u6784**\uFF1A\u901A\u8FC7\u5728\u672C\u5730Kubernetes\u96C6\u7FA4\u90E8\u7F72\u4E00\u5957Spring Boot\u5E94\u7528\uFF0C\u6A21\u62DF\u590D\u6742\u7684\u670D\u52A1\u8C03\u7528\u94FE\u8DEF\uFF0C\u4EE5\u6B64\u5C55\u793AHigress\u4E0ESkywalking\u7ED3\u5408\u540E\u7684\u94FE\u8DEF\u8FFD\u8E2A\u6548\u679C\u3002

4. **\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u529B\u5E94\u7528**
   - **\u5FAE\u670D\u52A1\u8C03\u7528\u62D3\u6251\u56FE**\uFF1ASkywalking\u63D0\u4F9B\u5FAE\u670D\u52A1\u4E4B\u95F4\u7684\u8C03\u7528\u5173\u7CFB\u62D3\u6251\u56FE\uFF0C\u5E2E\u52A9\u5F00\u53D1\u8005\u6E05\u6670\u5730\u638C\u63E1\u7CFB\u7EDF\u67B6\u6784\u548C\u4F9D\u8D56\u5173\u7CFB\u3002
   - **\u6027\u80FD\u74F6\u9888\u5B9A\u4F4D**\uFF1A\u901A\u8FC7\u94FE\u8DEF\u8FFD\u8E2A\u6570\u636E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u8BC6\u522B\u51FA\u8BF7\u6C42\u5904\u7406\u8FC7\u7A0B\u4E2D\u7684\u6162\u8282\u70B9\uFF0C\u5982\u6848\u4F8B\u4E2Dspringboot-svc-4-2\u7684\u9AD8\u54CD\u5E94\u65F6\u95F4\uFF0C\u4ECE\u800C\u8FDB\u884C\u9488\u5BF9\u6027\u4F18\u5316\u3002
   - **\u9519\u8BEF\u8282\u70B9\u6392\u67E5**\uFF1A\u5F53\u7CFB\u7EDF\u4E2D\u67D0\u73AF\u8282\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u94FE\u8DEF\u8FFD\u8E2A\u80FD\u7CBE\u786E\u6307\u51FA\u9519\u8BEF\u53D1\u751F\u7684\u8282\u70B9\u53CA\u5176\u5F71\u54CD\u8303\u56F4\uFF0C\u5982\u6A21\u62DF\u5220\u9664springboot svc 4-2\u5BFC\u81F4\u7684\u8FDE\u9501\u9519\u8BEF\u6548\u5E94\uFF0C\u4FBF\u4E8E\u5FEB\u901F\u5B9A\u4F4D\u548C\u4FEE\u590D\u95EE\u9898\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4F5C\u4E3A\u4E00\u4E2A\u9AD8\u6027\u80FD\u3001\u6613\u96C6\u6210\u7684\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5176\u94FE\u8DEF\u8FFD\u8E2A\u529F\u80FD\u4E0ESkywalking\u7684\u7ED3\u5408\u4E3A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u53EF\u89C2\u6D4B\u6027\u548C\u6545\u969C\u6392\u67E5\u80FD\u529B\uFF0C\u6781\u5927\u5730\u63D0\u5347\u4E86\u5F00\u53D1\u548C\u8FD0\u7EF4\u6548\u7387\u3002

\u53C2\u8003\u94FE\u63A5\uFF1A
- [Higress + Skywalking + SpringBoot \u94FE\u8DEF\u8FFD\u8E2A\u63A2\u7D22](https://github.com/higress-group/higress-demo/tree/main/observability/skywalking)


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress + Skywalking + SpringBoot \u94FE\u8DEF\u8FFD\u8E2A\u63A2\u7D22 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16983)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},o=function(){return s},r=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=p((k,h,b)=>{const{layout:w,...t}=a;return t.file=n,t.url=i,g`${d()}${y(s)}`})});export{e as Content,v as __tla,o as compiledContent,e as default,n as file,a as frontmatter,r as getHeadings,l as rawContent,i as url};
