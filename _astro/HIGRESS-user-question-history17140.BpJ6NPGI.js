import{c as r,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as c,m as v,u as E,__tla as y}from"./constant.Dvn6RT6C.js";import{__tla as h}from"./astro/assets-service.tyfV9CK3.js";let e,o,n,t,l,p,i,g=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u5982\u4F55 \u901A\u8FC7 Istio \u4FEE\u6539 envoy \u7684 response body \u5927\u5C0F\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress \u901A\u8FC7 Istio \u4FEE\u6539 Envoy \u7684 response body \u5927\u5C0F\u8FD9\u4E00\u9700\u6C42\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u63A2\u8BA8\u5982\u4F55\u5728 Higress\uFF08\u4F5C\u4E3A\u57FA\u4E8E Istio \u7684\u7F51\u5173\uFF09\u7684\u4E0A\u4E0B\u6587\u4E2D\u5E72\u9884\u6216\u8C03\u6574\u7531 Envoy \u4EE3\u7406\u5904\u7406\u7684 HTTP \u54CD\u5E94\u7684\u6570\u636E\u5927\u5C0F\u3002\u6839\u636E Higress \u548C Istio \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u76F4\u63A5\u4FEE\u6539 Envoy response body \u7684\u5927\u5C0F\u5E76\u4E0D\u7B26\u5408\u5E38\u89C4\u7684\u8FD0\u7EF4\u6216\u914D\u7F6E\u5B9E\u8DF5\u3002\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7406\u89E3 Envoy \u7684\u914D\u7F6E\u548C Higress \u7684\u96C6\u6210\u65B9\u5F0F\uFF0C\u63A2\u7D22\u95F4\u63A5\u5F71\u54CD\u54CD\u5E94\u5904\u7406\u7684\u65B9\u5F0F\u3002</p>
<h3 id="\u539F\u56E0\u5206\u6790">\u539F\u56E0\u5206\u6790</h3>
<ol>
<li><strong>Envoy \u914D\u7F6E</strong>: Envoy \u4F5C\u4E3A\u8FB9\u8F66\u4EE3\u7406\uFF0C\u5176\u914D\u7F6E\u4E3B\u8981\u901A\u8FC7 Istio \u7684 VirtualService \u548C DestinationRule \u7B49\u8D44\u6E90\u6765\u95F4\u63A5\u63A7\u5236\u3002\u8FD9\u4E9B\u8D44\u6E90\u5141\u8BB8\u4F60\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u3001\u91CD\u5199\u8BF7\u6C42\u548C\u54CD\u5E94\u7B49\uFF0C\u4F46\u76F4\u63A5\u4FEE\u6539\u54CD\u5E94\u4F53\u5927\u5C0F\u7684\u529F\u80FD\u4E0D\u5728\u6807\u51C6\u914D\u7F6E\u8303\u7574\u5185\u3002</li>
<li><strong>Higress \u63A7\u5236\u5668</strong>: Higress \u63A7\u5236\u5668\u8D1F\u8D23\u751F\u6210\u4E0E Envoy \u914D\u7F6E\u5BF9\u63A5\u7684 Istio API \u5BF9\u8C61\u3002\u7406\u8BBA\u4E0A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 Higress \u63A7\u5236\u5668\u903B\u8F91\u6765\u95F4\u63A5\u5F71\u54CD Envoy \u914D\u7F6E\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u6D41\u91CF\u7BA1\u7406\uFF0C\u5305\u62EC\u53EF\u80FD\u5F71\u54CD\u54CD\u5E94\u5904\u7406\u7684\u884C\u4E3A\u3002</li>
</ol>
<h3 id="\u89E3\u51B3\u601D\u8DEF">\u89E3\u51B3\u601D\u8DEF</h3>
<p>\u7531\u4E8E\u76F4\u63A5\u8C03\u6574 Envoy \u54CD\u5E94\u4F53\u5927\u5C0F\u4E0D\u662F\u6807\u51C6\u914D\u7F6E\u9879\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u51E0\u79CD\u95F4\u63A5\u65B9\u6CD5\uFF1A</p>
<h4 id="1-\u5185\u5BB9\u538B\u7F29">1. \u5185\u5BB9\u538B\u7F29</h4>
<ul>
<li><strong>\u5B9E\u8DF5\u6B65\u9AA4</strong>:
<ol>
<li>\u5728 Higress/Istio \u7684\u914D\u7F6E\u4E2D\uFF0C\u4E3A\u76F8\u5173\u670D\u52A1\u6216\u8DEF\u7531\u542F\u7528 gzip \u538B\u7F29\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u5728 VirtualService \u914D\u7F6E\u4E2D\u6DFB\u52A0\u54CD\u5E94\u7684\u7F16\u7801\u8BBE\u7F6E\u6765\u5B9E\u73B0\u3002</li>
<li>\u914D\u7F6E\u793A\u4F8B\uFF08\u975E\u5177\u4F53\u547D\u4EE4\uFF0C\u4EC5\u4E3A\u793A\u610F\uFF09:
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.istio.io/v1alpha3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">VirtualService</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example-vs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">route</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">destination</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">set</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">Content-Encoding</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gzip</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.istio.io/v1alpha3\x7Fkind: VirtualService\x7Fmetadata:\x7F  name: example-vs\x7Fspec:\x7F  hosts:\x7F  - example.com\x7F  http:\x7F  - route:\x7F    - destination:\x7F        host: example-service\x7F      headers:\x7F        response:\x7F          set:\x7F            Content-Encoding: gzip"><div></div></button></div></figure></div>
</li>
</ol>
</li>
<li><strong>\u89E3\u91CA</strong>: \u901A\u8FC7\u5185\u5BB9\u538B\u7F29\uFF0C\u53EF\u4EE5\u5728\u4E0D\u6539\u53D8\u5E94\u7528\u903B\u8F91\u7684\u60C5\u51B5\u4E0B\u51CF\u5C0F\u54CD\u5E94\u6570\u636E\u7684\u4F20\u8F93\u5927\u5C0F\uFF0C\u4ECE\u800C\u95F4\u63A5\u201C\u4FEE\u6539\u201D\u4E86 Envoy \u5904\u7406\u7684\u54CD\u5E94\u4F53\u5927\u5C0F\u3002</li>
</ul>
<h4 id="2-\u4F7F\u7528\u8FC7\u6EE4\u5668">2. \u4F7F\u7528\u8FC7\u6EE4\u5668</h4>
<ul>
<li><strong>\u5B9E\u8DF5\u6B65\u9AA4</strong>:
<ol>
<li>\u5982\u679C\u6709\u7279\u6B8A\u9700\u6C42\u5FC5\u987B\u4FEE\u6539\u54CD\u5E94\u4F53\u5185\u5BB9\uFF08\u5982\u589E\u52A0\u5934\u90E8\u4FE1\u606F\u6216\u88C1\u526A\u54CD\u5E94\u4F53\uFF09\uFF0C\u8003\u8651\u5728 Envoy \u914D\u7F6E\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u3002\u8FD9\u901A\u5E38\u9700\u8981\u7F16\u5199 Envoy \u6269\u5C55\u8FC7\u6EE4\u5668\u4EE3\u7801\u5E76\u96C6\u6210\u5230 Higress Gateway \u7684 Envoy \u914D\u7F6E\u4E2D\u3002</li>
<li>\u6B64\u6B65\u9AA4\u8F83\u4E3A\u590D\u6742\uFF0C\u6D89\u53CA\u7F16\u5199\u548C\u90E8\u7F72\u81EA\u5B9A\u4E49 Envoy \u6269\u5C55\uFF0C\u4EE5\u53CA\u901A\u8FC7 Higress \u63A7\u5236\u5668\u6216 Istio \u914D\u7F6E\u6765\u5E94\u7528\u8FD9\u4E9B\u8FC7\u6EE4\u5668\u3002</li>
</ol>
</li>
<li><strong>\u89E3\u91CA</strong>: \u8FC7\u6EE4\u5668\u673A\u5236\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u80FD\u529B\u6765\u64CD\u7EB5\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u867D\u7136\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u54CD\u5E94\u4F53\u5927\u5C0F\uFF0C\u4F46\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u5982\u54CD\u5E94\u6570\u636E\u7684\u88C1\u526A\u3001\u8F6C\u6362\u7B49\u6548\u679C\u3002</li>
</ul>
<h3 id="\u7ED3\u8BBA">\u7ED3\u8BBA</h3>
<p>\u76F4\u63A5\u901A\u8FC7 Higress \u6216 Istio \u4FEE\u6539 Envoy \u7684 response body \u5927\u5C0F\u5E76\u4E0D\u76F4\u63A5\u652F\u6301\uFF0C\u4F46\u901A\u8FC7\u4E0A\u8FF0\u95F4\u63A5\u624B\u6BB5\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u54CD\u5E94\u6570\u636E\u7684\u5904\u7406\u548C\u4F20\u8F93\u6548\u7387\u3002\u8BF7\u6CE8\u610F\uFF0C\u5B9E\u65BD\u4E0A\u8FF0\u65B9\u6848\u524D\uFF0C\u5E94\u5145\u5206\u8BC4\u4F30\u5176\u5BF9\u73B0\u6709\u7CFB\u7EDF\u67B6\u6784\u548C\u6027\u80FD\u7684\u6F5C\u5728\u5F71\u54CD\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u65E5\u5FD7\u8BF4\u660E</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17153" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-17140",title:"\u5982\u4F55 \u901A\u8FC7 Istio \u4FEE\u6539 envoy \u7684 response body \u5927\u5C0F\uFF1F",date:"2024-09-26",category:"expertConsultation",description:"Higress \u901A\u8FC7 Istio \u4FEE\u6539 Envoy \u7684 response body \u5927\u5C0F\u8FD9\u4E00\u9700\u6C42\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u63A2\u8BA8\u5982\u4F55\u5728 Higress\uFF08\u4F5C\u4E3A\u57FA\u4E8E Istio \u7684\u7F51\u5173\uFF09\u7684\u4E0A\u4E0B\u6587\u4E2D\u5E72\u9884\u6216\u8C03\u6574\u7531 Envoy \u4EE3\u7406\u5904\u7406\u7684 HTTP \u54CD\u5E94\u7684\u6570\u636E\u5927\u5C0F\u3002\u6839\u636E Higress \u548C Istio \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u76F4\u63A5\u4FEE\u6539 ",tags:["higress","Istio","\u4FEE\u6539","Envoy","response","body","\u5927\u5C0F"],keywords:["higress","Istio","\u4FEE\u6539","Envoy","response","body","\u5927\u5C0F"]},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17140.md",i=void 0,p=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u5982\u4F55 \u901A\u8FC7 Istio \u4FEE\u6539 envoy \u7684 response body \u5927\u5C0F\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress \u901A\u8FC7 Istio \u4FEE\u6539 Envoy \u7684 response body \u5927\u5C0F\u8FD9\u4E00\u9700\u6C42\uFF0C\u5B9E\u9645\u4E0A\u662F\u5728\u63A2\u8BA8\u5982\u4F55\u5728 Higress\uFF08\u4F5C\u4E3A\u57FA\u4E8E Istio \u7684\u7F51\u5173\uFF09\u7684\u4E0A\u4E0B\u6587\u4E2D\u5E72\u9884\u6216\u8C03\u6574\u7531 Envoy \u4EE3\u7406\u5904\u7406\u7684 HTTP \u54CD\u5E94\u7684\u6570\u636E\u5927\u5C0F\u3002\u6839\u636E Higress \u548C Istio \u7684\u5DE5\u4F5C\u539F\u7406\uFF0C\u76F4\u63A5\u4FEE\u6539 Envoy response body \u7684\u5927\u5C0F\u5E76\u4E0D\u7B26\u5408\u5E38\u89C4\u7684\u8FD0\u7EF4\u6216\u914D\u7F6E\u5B9E\u8DF5\u3002\u4E0D\u8FC7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7406\u89E3 Envoy \u7684\u914D\u7F6E\u548C Higress \u7684\u96C6\u6210\u65B9\u5F0F\uFF0C\u63A2\u7D22\u95F4\u63A5\u5F71\u54CD\u54CD\u5E94\u5904\u7406\u7684\u65B9\u5F0F\u3002

### \u539F\u56E0\u5206\u6790
1. **Envoy \u914D\u7F6E**: Envoy \u4F5C\u4E3A\u8FB9\u8F66\u4EE3\u7406\uFF0C\u5176\u914D\u7F6E\u4E3B\u8981\u901A\u8FC7 Istio \u7684 VirtualService \u548C DestinationRule \u7B49\u8D44\u6E90\u6765\u95F4\u63A5\u63A7\u5236\u3002\u8FD9\u4E9B\u8D44\u6E90\u5141\u8BB8\u4F60\u5B9A\u4E49\u8DEF\u7531\u89C4\u5219\u3001\u91CD\u5199\u8BF7\u6C42\u548C\u54CD\u5E94\u7B49\uFF0C\u4F46\u76F4\u63A5\u4FEE\u6539\u54CD\u5E94\u4F53\u5927\u5C0F\u7684\u529F\u80FD\u4E0D\u5728\u6807\u51C6\u914D\u7F6E\u8303\u7574\u5185\u3002
2. **Higress \u63A7\u5236\u5668**: Higress \u63A7\u5236\u5668\u8D1F\u8D23\u751F\u6210\u4E0E Envoy \u914D\u7F6E\u5BF9\u63A5\u7684 Istio API \u5BF9\u8C61\u3002\u7406\u8BBA\u4E0A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u81EA\u5B9A\u4E49 Higress \u63A7\u5236\u5668\u903B\u8F91\u6765\u95F4\u63A5\u5F71\u54CD Envoy \u914D\u7F6E\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u6D41\u91CF\u7BA1\u7406\uFF0C\u5305\u62EC\u53EF\u80FD\u5F71\u54CD\u54CD\u5E94\u5904\u7406\u7684\u884C\u4E3A\u3002

### \u89E3\u51B3\u601D\u8DEF
\u7531\u4E8E\u76F4\u63A5\u8C03\u6574 Envoy \u54CD\u5E94\u4F53\u5927\u5C0F\u4E0D\u662F\u6807\u51C6\u914D\u7F6E\u9879\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u51E0\u79CD\u95F4\u63A5\u65B9\u6CD5\uFF1A

#### 1. \u5185\u5BB9\u538B\u7F29
- **\u5B9E\u8DF5\u6B65\u9AA4**:
  1. \u5728 Higress/Istio \u7684\u914D\u7F6E\u4E2D\uFF0C\u4E3A\u76F8\u5173\u670D\u52A1\u6216\u8DEF\u7531\u542F\u7528 gzip \u538B\u7F29\u3002\u8FD9\u53EF\u4EE5\u901A\u8FC7\u5728 VirtualService \u914D\u7F6E\u4E2D\u6DFB\u52A0\u54CD\u5E94\u7684\u7F16\u7801\u8BBE\u7F6E\u6765\u5B9E\u73B0\u3002
  2. \u914D\u7F6E\u793A\u4F8B\uFF08\u975E\u5177\u4F53\u547D\u4EE4\uFF0C\u4EC5\u4E3A\u793A\u610F\uFF09:
     \`\`\`yaml
     apiVersion: networking.istio.io/v1alpha3
     kind: VirtualService
     metadata:
       name: example-vs
     spec:
       hosts:
       - example.com
       http:
       - route:
         - destination:
             host: example-service
           headers:
             response:
               set:
                 Content-Encoding: gzip
     \`\`\`
- **\u89E3\u91CA**: \u901A\u8FC7\u5185\u5BB9\u538B\u7F29\uFF0C\u53EF\u4EE5\u5728\u4E0D\u6539\u53D8\u5E94\u7528\u903B\u8F91\u7684\u60C5\u51B5\u4E0B\u51CF\u5C0F\u54CD\u5E94\u6570\u636E\u7684\u4F20\u8F93\u5927\u5C0F\uFF0C\u4ECE\u800C\u95F4\u63A5\u201C\u4FEE\u6539\u201D\u4E86 Envoy \u5904\u7406\u7684\u54CD\u5E94\u4F53\u5927\u5C0F\u3002

#### 2. \u4F7F\u7528\u8FC7\u6EE4\u5668
- **\u5B9E\u8DF5\u6B65\u9AA4**:
  1. \u5982\u679C\u6709\u7279\u6B8A\u9700\u6C42\u5FC5\u987B\u4FEE\u6539\u54CD\u5E94\u4F53\u5185\u5BB9\uFF08\u5982\u589E\u52A0\u5934\u90E8\u4FE1\u606F\u6216\u88C1\u526A\u54CD\u5E94\u4F53\uFF09\uFF0C\u8003\u8651\u5728 Envoy \u914D\u7F6E\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u5668\u3002\u8FD9\u901A\u5E38\u9700\u8981\u7F16\u5199 Envoy \u6269\u5C55\u8FC7\u6EE4\u5668\u4EE3\u7801\u5E76\u96C6\u6210\u5230 Higress Gateway \u7684 Envoy \u914D\u7F6E\u4E2D\u3002
  2. \u6B64\u6B65\u9AA4\u8F83\u4E3A\u590D\u6742\uFF0C\u6D89\u53CA\u7F16\u5199\u548C\u90E8\u7F72\u81EA\u5B9A\u4E49 Envoy \u6269\u5C55\uFF0C\u4EE5\u53CA\u901A\u8FC7 Higress \u63A7\u5236\u5668\u6216 Istio \u914D\u7F6E\u6765\u5E94\u7528\u8FD9\u4E9B\u8FC7\u6EE4\u5668\u3002
- **\u89E3\u91CA**: \u8FC7\u6EE4\u5668\u673A\u5236\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u80FD\u529B\u6765\u64CD\u7EB5\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u867D\u7136\u4E0D\u662F\u76F4\u63A5\u4FEE\u6539\u54CD\u5E94\u4F53\u5927\u5C0F\uFF0C\u4F46\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u5982\u54CD\u5E94\u6570\u636E\u7684\u88C1\u526A\u3001\u8F6C\u6362\u7B49\u6548\u679C\u3002

### \u7ED3\u8BBA
\u76F4\u63A5\u901A\u8FC7 Higress \u6216 Istio \u4FEE\u6539 Envoy \u7684 response body \u5927\u5C0F\u5E76\u4E0D\u76F4\u63A5\u652F\u6301\uFF0C\u4F46\u901A\u8FC7\u4E0A\u8FF0\u95F4\u63A5\u624B\u6BB5\uFF0C\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u5F71\u54CD\u54CD\u5E94\u6570\u636E\u7684\u5904\u7406\u548C\u4F20\u8F93\u6548\u7387\u3002\u8BF7\u6CE8\u610F\uFF0C\u5B9E\u65BD\u4E0A\u8FF0\u65B9\u6848\u524D\uFF0C\u5E94\u5145\u5206\u8BC4\u4F30\u5176\u5BF9\u73B0\u6709\u7CFB\u7EDF\u67B6\u6784\u548C\u6027\u80FD\u7684\u6F5C\u5728\u5F71\u54CD\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u65E5\u5FD7\u8BF4\u660E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17153)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},o=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u539F\u56E0\u5206\u6790",text:"\u539F\u56E0\u5206\u6790"},{depth:3,slug:"\u89E3\u51B3\u601D\u8DEF",text:"\u89E3\u51B3\u601D\u8DEF"},{depth:4,slug:"1-\u5185\u5BB9\u538B\u7F29",text:"1. \u5185\u5BB9\u538B\u7F29"},{depth:4,slug:"2-\u4F7F\u7528\u8FC7\u6EE4\u5668",text:"2. \u4F7F\u7528\u8FC7\u6EE4\u5668"},{depth:3,slug:"\u7ED3\u8BBA",text:"\u7ED3\u8BBA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=r((u,f,m)=>{const{layout:x,...a}=t;return a.file=n,a.url=i,c`${v()}${E(s)}`})});export{e as Content,g as __tla,o as compiledContent,e as default,n as file,t as frontmatter,l as getHeadings,p as rawContent,i as url};
