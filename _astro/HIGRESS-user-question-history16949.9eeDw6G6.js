import{c,__tla as l}from"./astro-component.CwRucF1h.js";import{r as p,m as u,u as v,__tla as f}from"./constant.CvItjurb.js";import{__tla as g}from"./astro/assets-service.Dd3mQuiC.js";let e,d,a,n,o,r,t,E=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u5BB9\u707E  default-backend \u914D\u7F6E\u8BE6\u89E3</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<h3 id="\u56DE\u7B54higress\u5BB9\u707E---default-backend\u914D\u7F6E\u8BE6\u89E3">\u56DE\u7B54\uFF1AHigress\u5BB9\u707E - <code dir="auto">default-backend</code>\u914D\u7F6E\u8BE6\u89E3</h3>
<p>\u5728Higress\u7684\u6D41\u91CF\u6CBB\u7406\u914D\u7F6E\u4E2D\uFF0C<code dir="auto">default-backend</code>\u6CE8\u89E3\u626E\u6F14\u7740\u81F3\u5173\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u7279\u522B\u662F\u5728\u5B9E\u73B0\u5BB9\u707E\u673A\u5236\u65B9\u9762\u3002\u4EE5\u4E0B\u662F\u5173\u4E8E<code dir="auto">default-backend</code>\u914D\u7F6E\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF1A</p>
<h4 id="1-\u5B9A\u4E49\u4E0E\u4F5C\u7528">1. \u5B9A\u4E49\u4E0E\u4F5C\u7528</h4>
<ul>
<li><strong>\u4F5C\u7528\u57DF</strong>\uFF1A<code dir="auto">Ingress</code></li>
<li><strong>\u529F\u80FD</strong>\uFF1A<code dir="auto">default-backend</code>\u6CE8\u89E3\u7528\u4E8E\u6307\u5B9A\u4E00\u4E2A\u9ED8\u8BA4\u7684\u670D\u52A1\u6216endpoint\uFF0C\u5F53Ingress\u89C4\u5219\u6240\u5B9A\u4E49\u7684\u6240\u6709\u670D\u52A1\u90FD\u6CA1\u6709\u53EF\u7528\u7684\u540E\u7AEFPod\u65F6\uFF0CHigress\u4F1A\u5C06\u8BF7\u6C42\u81EA\u52A8\u91CD\u5B9A\u5411\u5230\u8FD9\u4E2A\u9884\u8BBE\u7684\u201C\u5BB9\u707E\u201D\u670D\u52A1\u4E0A\u3002\u8FD9\u786E\u4FDD\u4E86\u5373\u4F7F\u4E3B\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u4E5F\u80FD\u591F\u63D0\u4F9B\u4E00\u4E2A\u515C\u5E95\u7684\u54CD\u5E94\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u6574\u4F53\u53EF\u7528\u6027\u548C\u7A33\u5B9A\u6027\u3002</li>
</ul>
<h4 id="2-\u914D\u7F6E\u793A\u4F8B">2. \u914D\u7F6E\u793A\u4F8B</h4>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example-ingress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nginx.ingress.kubernetes.io/default-backend</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"service-name"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">myapp.example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">primary-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: example-ingress\x7F  annotations:\x7F    nginx.ingress.kubernetes.io/default-backend: &#x22;service-name&#x22;\x7Fspec:\x7F  rules:\x7F  - host: myapp.example.com\x7F    http:\x7F      paths:\x7F      - path: /\x7F        pathType: Prefix\x7F        backend:\x7F          service:\x7F            name: primary-service\x7F            port:\x7F              name: http"><div></div></button></div></figure></div>
<p>\u5728\u4E0A\u8FF0\u914D\u7F6E\u4E2D\uFF0C<code dir="auto">nginx.ingress.kubernetes.io/default-backend</code>\u6CE8\u89E3\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\u201Cservice-name\u201D\uFF0C\u8868\u793A\u5F53<code dir="auto">primary-service</code>\u65E0\u6CD5\u54CD\u5E94\u65F6\uFF0C\u6D41\u91CF\u5C06\u88AB\u91CD\u5B9A\u5411\u5230\u540D\u4E3A\u201Cservice-name\u201D\u7684\u670D\u52A1\u3002</p>
<h4 id="3-\u9AD8\u7EA7\u7528\u6CD5\u4E0Ecustom-http-errors\u914D\u5408">3. \u9AD8\u7EA7\u7528\u6CD5\uFF1A\u4E0E<code dir="auto">custom-http-errors</code>\u914D\u5408</h4>
<ul>
<li><strong>\u6CE8\u89E3</strong>\uFF1A<code dir="auto">nginx.ingress.kubernetes.io/custom-http-errors</code></li>
<li><strong>\u529F\u80FD</strong>\uFF1A\u5141\u8BB8\u5B9A\u4E49\u4E00\u7CFB\u5217HTTP\u9519\u8BEF\u72B6\u6001\u7801\uFF0C\u5F53\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u8FD9\u4E9B\u72B6\u6001\u7801\u65F6\uFF0CHigress\u4E0D\u4EC5\u4F1A\u8BB0\u5F55\u9519\u8BEF\uFF0C\u8FD8\u4F1A\u5C06\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230<code dir="auto">default-backend</code>\u6307\u5B9A\u7684\u670D\u52A1\u3002\u8FD9\u6837\u53EF\u4EE5\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u9519\u8BEF\u5904\u7406\u548C\u5BB9\u707E\u7B56\u7565\u3002</li>
</ul>
<p>\u793A\u4F8B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">nginx.ingress.kubernetes.io/custom-http-errors</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"404,500,502,503,504"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="metadata:\x7F  annotations:\x7F    ...\x7F    nginx.ingress.kubernetes.io/custom-http-errors: &#x22;404,500,502,503,504&#x22;"><div></div></button></div></figure></div>
<p>\u5728\u6B64\u914D\u7F6E\u4E0B\uFF0C\u9664\u4E86\u670D\u52A1\u4E0D\u53EF\u8FBE\u7684\u60C5\u51B5\u5916\uFF0C\u5F53\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE404\u3001500\u3001502\u3001503\u6216504\u72B6\u6001\u7801\u65F6\uFF0C\u8BF7\u6C42\u540C\u6837\u4F1A\u88AB\u8F6C\u53D1\u81F3<code dir="auto">default-backend</code>\u670D\u52A1\u3002</p>
<h4 id="4-\u6CE8\u610F\u4E8B\u9879">4. \u6CE8\u610F\u4E8B\u9879</h4>
<ul>
<li><strong>Path\u91CD\u5199</strong>\uFF1A\u5F53\u8BF7\u6C42\u88AB\u91CD\u5B9A\u5411\u5230<code dir="auto">default-backend</code>\u65F6\uFF0C\u5176\u8DEF\u5F84\u4F1A\u88AB\u91CD\u5199\u4E3A<code dir="auto">/</code>\u3002\u8FD9\u610F\u5473\u7740\u5230\u8FBE\u5BB9\u707E\u670D\u52A1\u7684\u8BF7\u6C42\u53EF\u80FD\u9700\u8981\u80FD\u591F\u5904\u7406\u8FD9\u79CD\u901A\u7528\u8DEF\u5F84\u7684\u903B\u8F91\u3002</li>
<li><strong>\u914D\u7F6E\u517C\u5BB9\u6027</strong>\uFF1A\u5C3D\u7BA1\u793A\u4F8B\u4F7F\u7528\u4E86<code dir="auto">nginx.ingress.kubernetes.io</code>\u524D\u7F00\uFF0CHigress\u5BF9\u6B64\u7C7B\u6CE8\u89E3\u63D0\u4F9B\u4E86\u517C\u5BB9\u652F\u6301\u3002\u5B9E\u9645\u90E8\u7F72\u65F6\uFF0C\u8BF7\u6839\u636EHigress\u7684\u5177\u4F53\u7248\u672C\u548C\u6587\u6863\u786E\u8BA4\u6700\u4F73\u5B9E\u8DF5\u3002</li>
</ul>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u901A\u8FC7<code dir="auto">default-backend</code>\u914D\u7F6E\uFF0CHigress\u63D0\u4F9B\u4E86\u57FA\u672C\u7684\u5BB9\u707E\u80FD\u529B\uFF0C\u786E\u4FDD\u5728\u7F51\u7EDC\u6545\u969C\u6216\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\u65F6\uFF0C\u4ECD\u80FD\u63D0\u4F9B\u4E00\u5B9A\u7684\u670D\u52A1\u8FDE\u7EED\u6027\u3002\u7ED3\u5408<code dir="auto">custom-http-errors</code>\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7EC6\u5316\u5BB9\u707E\u7B56\u7565\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u5065\u58EE\u6027\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress\u7684Ingress Annotation \u914D\u7F6E\u8BF4\u660E</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16956" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16949",title:"higress\u5BB9\u707E  default-backend \u914D\u7F6E\u8BE6\u89E3",date:"2024-09-26",category:"expertConsultation",description:"### \u56DE\u7B54\uFF1AHigress\u5BB9\u707E - `default-backend`\u914D\u7F6E\u8BE6\u89E3\u5728Higress\u7684\u6D41\u91CF\u6CBB\u7406\u914D\u7F6E\u4E2D\uFF0C`default-backend`\u6CE8\u89E3\u626E\u6F14\u7740\u81F3\u5173\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u7279\u522B\u662F\u5728\u5B9E\u73B0\u5BB9\u707E\u673A\u5236\u65B9\u9762\u3002\u4EE5\u4E0B\u662F\u5173\u4E8E`default-backend`\u914D\u7F6E\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF1A#### 1. \u5B9A\u4E49\u4E0E\u4F5C\u7528- **\u4F5C\u7528\u57DF",tags:["higress","\u5BB9\u707E","default-backend","\u914D\u7F6E","\u8BE6\u89E3"],keywords:["higress","\u5BB9\u707E","default-backend","\u914D\u7F6E","\u8BE6\u89E3"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16949.md",t=void 0,r=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u5BB9\u707E  default-backend \u914D\u7F6E\u8BE6\u89E3  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

### \u56DE\u7B54\uFF1AHigress\u5BB9\u707E - \`default-backend\`\u914D\u7F6E\u8BE6\u89E3

\u5728Higress\u7684\u6D41\u91CF\u6CBB\u7406\u914D\u7F6E\u4E2D\uFF0C\`default-backend\`\u6CE8\u89E3\u626E\u6F14\u7740\u81F3\u5173\u91CD\u8981\u7684\u89D2\u8272\uFF0C\u7279\u522B\u662F\u5728\u5B9E\u73B0\u5BB9\u707E\u673A\u5236\u65B9\u9762\u3002\u4EE5\u4E0B\u662F\u5173\u4E8E\`default-backend\`\u914D\u7F6E\u7684\u8BE6\u7EC6\u8BF4\u660E\uFF1A

#### 1. \u5B9A\u4E49\u4E0E\u4F5C\u7528
- **\u4F5C\u7528\u57DF**\uFF1A\`Ingress\`
- **\u529F\u80FD**\uFF1A\`default-backend\`\u6CE8\u89E3\u7528\u4E8E\u6307\u5B9A\u4E00\u4E2A\u9ED8\u8BA4\u7684\u670D\u52A1\u6216endpoint\uFF0C\u5F53Ingress\u89C4\u5219\u6240\u5B9A\u4E49\u7684\u6240\u6709\u670D\u52A1\u90FD\u6CA1\u6709\u53EF\u7528\u7684\u540E\u7AEFPod\u65F6\uFF0CHigress\u4F1A\u5C06\u8BF7\u6C42\u81EA\u52A8\u91CD\u5B9A\u5411\u5230\u8FD9\u4E2A\u9884\u8BBE\u7684\u201C\u5BB9\u707E\u201D\u670D\u52A1\u4E0A\u3002\u8FD9\u786E\u4FDD\u4E86\u5373\u4F7F\u4E3B\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u4E5F\u80FD\u591F\u63D0\u4F9B\u4E00\u4E2A\u515C\u5E95\u7684\u54CD\u5E94\uFF0C\u4ECE\u800C\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u6574\u4F53\u53EF\u7528\u6027\u548C\u7A33\u5B9A\u6027\u3002

#### 2. \u914D\u7F6E\u793A\u4F8B
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/default-backend: "service-name"
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: primary-service
            port:
              name: http
\`\`\`
\u5728\u4E0A\u8FF0\u914D\u7F6E\u4E2D\uFF0C\`nginx.ingress.kubernetes.io/default-backend\`\u6CE8\u89E3\u7684\u503C\u88AB\u8BBE\u7F6E\u4E3A\u201Cservice-name\u201D\uFF0C\u8868\u793A\u5F53\`primary-service\`\u65E0\u6CD5\u54CD\u5E94\u65F6\uFF0C\u6D41\u91CF\u5C06\u88AB\u91CD\u5B9A\u5411\u5230\u540D\u4E3A\u201Cservice-name\u201D\u7684\u670D\u52A1\u3002

#### 3. \u9AD8\u7EA7\u7528\u6CD5\uFF1A\u4E0E\`custom-http-errors\`\u914D\u5408
- **\u6CE8\u89E3**\uFF1A\`nginx.ingress.kubernetes.io/custom-http-errors\`
- **\u529F\u80FD**\uFF1A\u5141\u8BB8\u5B9A\u4E49\u4E00\u7CFB\u5217HTTP\u9519\u8BEF\u72B6\u6001\u7801\uFF0C\u5F53\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u8FD9\u4E9B\u72B6\u6001\u7801\u65F6\uFF0CHigress\u4E0D\u4EC5\u4F1A\u8BB0\u5F55\u9519\u8BEF\uFF0C\u8FD8\u4F1A\u5C06\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\`default-backend\`\u6307\u5B9A\u7684\u670D\u52A1\u3002\u8FD9\u6837\u53EF\u4EE5\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u9519\u8BEF\u5904\u7406\u548C\u5BB9\u707E\u7B56\u7565\u3002

\u793A\u4F8B\u914D\u7F6E\uFF1A
\`\`\`yaml
metadata:
  annotations:
    ...
    nginx.ingress.kubernetes.io/custom-http-errors: "404,500,502,503,504"
\`\`\`
\u5728\u6B64\u914D\u7F6E\u4E0B\uFF0C\u9664\u4E86\u670D\u52A1\u4E0D\u53EF\u8FBE\u7684\u60C5\u51B5\u5916\uFF0C\u5F53\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE404\u3001500\u3001502\u3001503\u6216504\u72B6\u6001\u7801\u65F6\uFF0C\u8BF7\u6C42\u540C\u6837\u4F1A\u88AB\u8F6C\u53D1\u81F3\`default-backend\`\u670D\u52A1\u3002

#### 4. \u6CE8\u610F\u4E8B\u9879
- **Path\u91CD\u5199**\uFF1A\u5F53\u8BF7\u6C42\u88AB\u91CD\u5B9A\u5411\u5230\`default-backend\`\u65F6\uFF0C\u5176\u8DEF\u5F84\u4F1A\u88AB\u91CD\u5199\u4E3A\`/\`\u3002\u8FD9\u610F\u5473\u7740\u5230\u8FBE\u5BB9\u707E\u670D\u52A1\u7684\u8BF7\u6C42\u53EF\u80FD\u9700\u8981\u80FD\u591F\u5904\u7406\u8FD9\u79CD\u901A\u7528\u8DEF\u5F84\u7684\u903B\u8F91\u3002
- **\u914D\u7F6E\u517C\u5BB9\u6027**\uFF1A\u5C3D\u7BA1\u793A\u4F8B\u4F7F\u7528\u4E86\`nginx.ingress.kubernetes.io\`\u524D\u7F00\uFF0CHigress\u5BF9\u6B64\u7C7B\u6CE8\u89E3\u63D0\u4F9B\u4E86\u517C\u5BB9\u652F\u6301\u3002\u5B9E\u9645\u90E8\u7F72\u65F6\uFF0C\u8BF7\u6839\u636EHigress\u7684\u5177\u4F53\u7248\u672C\u548C\u6587\u6863\u786E\u8BA4\u6700\u4F73\u5B9E\u8DF5\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u901A\u8FC7\`default-backend\`\u914D\u7F6E\uFF0CHigress\u63D0\u4F9B\u4E86\u57FA\u672C\u7684\u5BB9\u707E\u80FD\u529B\uFF0C\u786E\u4FDD\u5728\u7F51\u7EDC\u6545\u969C\u6216\u540E\u7AEF\u670D\u52A1\u5F02\u5E38\u65F6\uFF0C\u4ECD\u80FD\u63D0\u4F9B\u4E00\u5B9A\u7684\u670D\u52A1\u8FDE\u7EED\u6027\u3002\u7ED3\u5408\`custom-http-errors\`\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7EC6\u5316\u5BB9\u707E\u7B56\u7565\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u7684\u5065\u58EE\u6027\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress\u7684Ingress Annotation \u914D\u7F6E\u8BF4\u660E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16956)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},d=function(){return s},o=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u56DE\u7B54higress\u5BB9\u707E---default-backend\u914D\u7F6E\u8BE6\u89E3",text:"\u56DE\u7B54\uFF1AHigress\u5BB9\u707E - default-backend\u914D\u7F6E\u8BE6\u89E3"},{depth:4,slug:"1-\u5B9A\u4E49\u4E0E\u4F5C\u7528",text:"1. \u5B9A\u4E49\u4E0E\u4F5C\u7528"},{depth:4,slug:"2-\u914D\u7F6E\u793A\u4F8B",text:"2. \u914D\u7F6E\u793A\u4F8B"},{depth:4,slug:"3-\u9AD8\u7EA7\u7528\u6CD5\u4E0Ecustom-http-errors\u914D\u5408",text:"3. \u9AD8\u7EA7\u7528\u6CD5\uFF1A\u4E0Ecustom-http-errors\u914D\u5408"},{depth:4,slug:"4-\u6CE8\u610F\u4E8B\u9879",text:"4. \u6CE8\u610F\u4E8B\u9879"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=c((h,y,m)=>{const{layout:b,...i}=n;return i.file=a,i.url=t,p`${u()}${v(s)}`})});export{e as Content,E as __tla,d as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,r as rawContent,t as url};
