import{c,__tla as o}from"./astro-component.COZxaGv5.js";import{r,m as E,u as v,__tla as y}from"./constant.D5XPYb1J.js";import{__tla as h}from"./astro/assets-service.8AFaQ3Qd.js";let e,p,a,n,l,d,i,g=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u670D\u52A1\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u7070\u5EA6\u5417</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress \u670D\u52A1\u786E\u5B9E\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u7070\u5EA6\u53D1\u5E03\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress \u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\uFF1A</p>
<ol>
<li>
<p><strong>\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03</strong>\uFF1A</p>
<ul>
<li>\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E<code dir="auto">higress.io/canary-by-header</code>\u6CE8\u89E3\u6765\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u7684\u7279\u5B9A\u952E\u540D\u5206\u914D\u6D41\u91CF\u5230\u7070\u5EA6\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u5F53\u8BF7\u6C42\u5934\u4E2D\u5305\u542B<code dir="auto">higress: always</code>\u65F6\uFF0C\u6D41\u91CF\u5C06\u88AB\u5BFC\u5411\u7070\u5EA6\u670D\u52A1\u3002</li>
<li>\u66F4\u8FDB\u4E00\u6B65\uFF0C\u7ED3\u5408<code dir="auto">higress.io/canary-by-header-value</code>\u53EF\u4EE5\u57FA\u4E8E\u8BF7\u6C42\u5934\u7684\u952E\u503C\u5BF9\u7CBE\u786E\u63A7\u5236\u6D41\u91CF\u5207\u5206\uFF0C\u5982\u5206\u522B\u914D\u7F6E<code dir="auto">v1</code>\u548C<code dir="auto">v2</code>\u503C\u5230\u4E0D\u540C\u7684\u7070\u5EA6\u7248\u672C\u670D\u52A1\u3002</li>
</ul>
</li>
<li>
<p><strong>\u57FA\u4E8ECookie\u7684\u7070\u5EA6\u53D1\u5E03</strong>\uFF1A</p>
<ul>
<li>\u4F7F\u7528<code dir="auto">higress.io/canary-by-cookie</code>\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u6839\u636E\u8BF7\u6C42\u643A\u5E26\u7684Cookie\u4E2D\u7279\u5B9A\u952E\u7684\u503C\uFF08\u5FC5\u987B\u4E3A<code dir="auto">always</code>\uFF09\u6765\u8DEF\u7531\u6D41\u91CF\u81F3\u7070\u5EA6\u670D\u52A1\u3002</li>
</ul>
</li>
<li>
<p><strong>\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03</strong>\uFF1A</p>
<ul>
<li>\u5229\u7528<code dir="auto">higress.io/canary-weight</code>\u548C<code dir="auto">higress.io/canary-weight-total</code>\u6CE8\u89E3\u53EF\u4EE5\u7075\u6D3B\u5730\u6309\u767E\u5206\u6BD4\u5206\u914D\u6D41\u91CF\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u5B9A\u4E0D\u540C\u7070\u5EA6\u7248\u672C\u4E0E\u751F\u4EA7\u7248\u672C\u4E4B\u95F4\u7684\u6D41\u91CF\u6BD4\u4F8B\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u5177\u4F53\u5B9E\u65BD\u6B65\u9AA4">\u5177\u4F53\u5B9E\u65BD\u6B65\u9AA4</h3>
<h4 id="\u5B9E\u73B0\u57FA\u4E8Eheader\u7684\u7070\u5EA6\u53D1\u5E03">\u5B9E\u73B0\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03</h4>
<p>\u5047\u8BBE\u6211\u4EEC\u8981\u4E3A\u670D\u52A1<code dir="auto">demo-service</code>\u8BBE\u7F6E\u4E00\u4E2A\u7B80\u5355\u7684\u7070\u5EA6\u53D1\u5E03\u573A\u666F\uFF0C\u5176\u4E2D\u8BF7\u6C42\u5934<code dir="auto">higress: always</code>\u7684\u8BF7\u6C42\u5E94\u8BE5\u88AB\u8DEF\u7531\u5230\u7070\u5EA6\u7248\u672C<code dir="auto">demo-service-canary</code>\u3002</p>
<ol>
<li>
<p><strong>\u521B\u5EFA\u7070\u5EA6\u670D\u52A1Ingress\u914D\u7F6E</strong>\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/canary</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"true"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/canary-by-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-canary</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/hello</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service-canary</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F  name: demo-canary\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - path: /hello\x7F        pathType: Exact\x7F        backend:\x7F          service:\x7F            name: demo-service-canary\x7F            port:\x7F              number: 80"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u786E\u4FDD\u6709\u57FA\u7840\u7684\u670D\u52A1Ingress\u914D\u7F6E</strong>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/hello</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - path: /hello\x7F        pathType: Exact\x7F        backend:\x7F          service:\x7F            name: demo-service\x7F            port:\x7F              number: 80"><div></div></button></div></figure></div>
</li>
</ol>
<h4 id="\u5B9E\u73B0\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03">\u5B9E\u73B0\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03</h4>
<p>\u82E5\u8981\u6309\u7167\u4E0D\u540C\u6743\u91CD\u5206\u914D\u6D41\u91CF\u81F3\u591A\u4E2A\u7248\u672C\uFF0C\u9700\u5206\u522B\u4E3A\u6BCF\u4E2A\u7070\u5EA6\u7248\u672C\u670D\u52A1\u521B\u5EFA\u72EC\u7ACB\u7684Ingress\u8D44\u6E90\uFF0C\u5E76\u8BBE\u7F6E\u76F8\u5E94\u7684<code dir="auto">higress.io/canary-weight</code>\u3002</p>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4E0A\u8FF0\u6B65\u9AA4\u5229\u7528\u4E86Higress\u7684\u9AD8\u7EA7\u6D41\u91CF\u6CBB\u7406\u80FD\u529B\uFF0C\u901A\u8FC7Ingress\u8D44\u6E90\u7684\u6CE8\u89E3\u914D\u7F6E\u5B9E\u73B0\u4E86\u7075\u6D3B\u7684\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\u3002\u57FA\u4E8EHeader\u548CCookie\u7684\u7070\u5EA6\u53D1\u5E03\u8BA9\u60A8\u53EF\u4EE5\u6839\u636E\u8BF7\u6C42\u7279\u5F81\u7CBE\u786E\u63A7\u5236\u6D41\u91CF\u6D41\u5411\uFF0C\u800C\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03\u5219\u63D0\u4F9B\u4E86\u66F4\u7EC6\u7C92\u5EA6\u7684\u6D41\u91CF\u5206\u914D\uFF0C\u65E0\u9700\u5BA2\u6237\u7AEF\u505A\u7279\u6B8A\u914D\u7F6E\u5373\u53EF\u5E73\u6ED1\u5730\u6D4B\u8BD5\u65B0\u7248\u672C\u670D\u52A1\u3002\u8FD9\u4E9B\u7B56\u7565\u5171\u540C\u786E\u4FDD\u4E86\u5728\u90E8\u7F72\u65B0\u529F\u80FD\u6216\u66F4\u65B0\u65F6\uFF0C\u80FD\u6700\u5C0F\u5316\u5BF9\u73B0\u6709\u7528\u6237\u7684\u6F5C\u5728\u5F71\u54CD\uFF0C\u662F\u8FDB\u884C\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u90E8\u7F72(CI/CD)\u6D41\u7A0B\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u73AF\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16718" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16704",title:"higress\u670D\u52A1\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u7070\u5EA6\u5417",date:"2024-09-26",category:"expertConsultation",description:"Higress \u670D\u52A1\u786E\u5B9E\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u7070\u5EA6\u53D1\u5E03\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress \u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\uFF1A1. **\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03**\uFF1A   - \u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E`higress.io/canary-by-header`\u6CE8\u89E3\u6765\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u7684\u7279\u5B9A\u952E\u540D\u5206\u914D\u6D41\u91CF\u5230\u7070\u5EA6\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u5F53\u8BF7",tags:["higress","\u670D\u52A1","\u6D41\u91CF","\u7070\u5EA6","\u540E\u7AEF","\u5B9E\u73B0"],keywords:["higress","\u670D\u52A1","\u6D41\u91CF","\u7070\u5EA6","\u540E\u7AEF","\u5B9E\u73B0"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16704.md",i=void 0,d=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u670D\u52A1\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u7070\u5EA6\u5417  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress \u670D\u52A1\u786E\u5B9E\u53EF\u4EE5\u5B9E\u73B0\u540E\u7AEF\u670D\u52A1\u7684\u6D41\u91CF\u7070\u5EA6\u53D1\u5E03\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress \u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\uFF1A

1. **\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03**\uFF1A
   - \u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\`higress.io/canary-by-header\`\u6CE8\u89E3\u6765\u6839\u636E\u8BF7\u6C42\u5934\u4E2D\u7684\u7279\u5B9A\u952E\u540D\u5206\u914D\u6D41\u91CF\u5230\u7070\u5EA6\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u5F53\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\`higress: always\`\u65F6\uFF0C\u6D41\u91CF\u5C06\u88AB\u5BFC\u5411\u7070\u5EA6\u670D\u52A1\u3002
   - \u66F4\u8FDB\u4E00\u6B65\uFF0C\u7ED3\u5408\`higress.io/canary-by-header-value\`\u53EF\u4EE5\u57FA\u4E8E\u8BF7\u6C42\u5934\u7684\u952E\u503C\u5BF9\u7CBE\u786E\u63A7\u5236\u6D41\u91CF\u5207\u5206\uFF0C\u5982\u5206\u522B\u914D\u7F6E\`v1\`\u548C\`v2\`\u503C\u5230\u4E0D\u540C\u7684\u7070\u5EA6\u7248\u672C\u670D\u52A1\u3002

2. **\u57FA\u4E8ECookie\u7684\u7070\u5EA6\u53D1\u5E03**\uFF1A
   - \u4F7F\u7528\`higress.io/canary-by-cookie\`\u6CE8\u89E3\uFF0C\u53EF\u4EE5\u6839\u636E\u8BF7\u6C42\u643A\u5E26\u7684Cookie\u4E2D\u7279\u5B9A\u952E\u7684\u503C\uFF08\u5FC5\u987B\u4E3A\`always\`\uFF09\u6765\u8DEF\u7531\u6D41\u91CF\u81F3\u7070\u5EA6\u670D\u52A1\u3002

3. **\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03**\uFF1A
   - \u5229\u7528\`higress.io/canary-weight\`\u548C\`higress.io/canary-weight-total\`\u6CE8\u89E3\u53EF\u4EE5\u7075\u6D3B\u5730\u6309\u767E\u5206\u6BD4\u5206\u914D\u6D41\u91CF\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u5B9A\u4E0D\u540C\u7070\u5EA6\u7248\u672C\u4E0E\u751F\u4EA7\u7248\u672C\u4E4B\u95F4\u7684\u6D41\u91CF\u6BD4\u4F8B\u3002

### \u5177\u4F53\u5B9E\u65BD\u6B65\u9AA4

#### \u5B9E\u73B0\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03

\u5047\u8BBE\u6211\u4EEC\u8981\u4E3A\u670D\u52A1\`demo-service\`\u8BBE\u7F6E\u4E00\u4E2A\u7B80\u5355\u7684\u7070\u5EA6\u53D1\u5E03\u573A\u666F\uFF0C\u5176\u4E2D\u8BF7\u6C42\u5934\`higress: always\`\u7684\u8BF7\u6C42\u5E94\u8BE5\u88AB\u8DEF\u7531\u5230\u7070\u5EA6\u7248\u672C\`demo-service-canary\`\u3002

1. **\u521B\u5EFA\u7070\u5EA6\u670D\u52A1Ingress\u914D\u7F6E**\uFF1A
   \`\`\`yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     annotations:
       higress.io/canary: "true"
       higress.io/canary-by-header: "higress"
     name: demo-canary
   spec:
     ingressClassName: higress
     rules:
     - http:
         paths:
         - path: /hello
           pathType: Exact
           backend:
             service:
               name: demo-service-canary
               port:
                 number: 80
   \`\`\`

2. **\u786E\u4FDD\u6709\u57FA\u7840\u7684\u670D\u52A1Ingress\u914D\u7F6E**\uFF1A
   \`\`\`yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: demo
   spec:
     ingressClassName: higress
     rules:
     - http:
         paths:
         - path: /hello
           pathType: Exact
           backend:
             service:
               name: demo-service
               port:
                 number: 80
   \`\`\`

#### \u5B9E\u73B0\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03

\u82E5\u8981\u6309\u7167\u4E0D\u540C\u6743\u91CD\u5206\u914D\u6D41\u91CF\u81F3\u591A\u4E2A\u7248\u672C\uFF0C\u9700\u5206\u522B\u4E3A\u6BCF\u4E2A\u7070\u5EA6\u7248\u672C\u670D\u52A1\u521B\u5EFA\u72EC\u7ACB\u7684Ingress\u8D44\u6E90\uFF0C\u5E76\u8BBE\u7F6E\u76F8\u5E94\u7684\`higress.io/canary-weight\`\u3002

### \u89E3\u91CA

\u4E0A\u8FF0\u6B65\u9AA4\u5229\u7528\u4E86Higress\u7684\u9AD8\u7EA7\u6D41\u91CF\u6CBB\u7406\u80FD\u529B\uFF0C\u901A\u8FC7Ingress\u8D44\u6E90\u7684\u6CE8\u89E3\u914D\u7F6E\u5B9E\u73B0\u4E86\u7075\u6D3B\u7684\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\u3002\u57FA\u4E8EHeader\u548CCookie\u7684\u7070\u5EA6\u53D1\u5E03\u8BA9\u60A8\u53EF\u4EE5\u6839\u636E\u8BF7\u6C42\u7279\u5F81\u7CBE\u786E\u63A7\u5236\u6D41\u91CF\u6D41\u5411\uFF0C\u800C\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03\u5219\u63D0\u4F9B\u4E86\u66F4\u7EC6\u7C92\u5EA6\u7684\u6D41\u91CF\u5206\u914D\uFF0C\u65E0\u9700\u5BA2\u6237\u7AEF\u505A\u7279\u6B8A\u914D\u7F6E\u5373\u53EF\u5E73\u6ED1\u5730\u6D4B\u8BD5\u65B0\u7248\u672C\u670D\u52A1\u3002\u8FD9\u4E9B\u7B56\u7565\u5171\u540C\u786E\u4FDD\u4E86\u5728\u90E8\u7F72\u65B0\u529F\u80FD\u6216\u66F4\u65B0\u65F6\uFF0C\u80FD\u6700\u5C0F\u5316\u5BF9\u73B0\u6709\u7528\u6237\u7684\u6F5C\u5728\u5F71\u54CD\uFF0C\u662F\u8FDB\u884C\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u90E8\u7F72(CI/CD)\u6D41\u7A0B\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u4E00\u73AF\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16718)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},p=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5177\u4F53\u5B9E\u65BD\u6B65\u9AA4",text:"\u5177\u4F53\u5B9E\u65BD\u6B65\u9AA4"},{depth:4,slug:"\u5B9E\u73B0\u57FA\u4E8Eheader\u7684\u7070\u5EA6\u53D1\u5E03",text:"\u5B9E\u73B0\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03"},{depth:4,slug:"\u5B9E\u73B0\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03",text:"\u5B9E\u73B0\u57FA\u4E8E\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=c((u,f,m)=>{const{layout:x,...t}=n;return t.file=a,t.url=i,r`${E()}${v(s)}`})});export{e as Content,g as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,d as rawContent,i as url};
