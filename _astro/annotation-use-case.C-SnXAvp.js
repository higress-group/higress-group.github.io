import{c as t,__tla as v}from"./astro-component.DtWAgCJT.js";import{r as o,m as r,u as y,__tla as h}from"./constant.uSv_Pmaf.js";import{__tla as m}from"./astro/assets-service.BMxLt3pn.js";let s,p,a,n,l,c,i,x=Promise.all([(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p>\u672C\u7BC7\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u5728Higress\u4E0A\u4F7F\u7528Ingress\u5E76\u501F\u52A9Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406\u3002</p>
<h2 id="\u524D\u63D0\u6761\u4EF6">\u524D\u63D0\u6761\u4EF6</h2>
<ul>
<li><a href="../quickstart/" referrerpolicy="unsafe-url">\u5B89\u88C5Higress</a></li>
<li>\u5DF2\u62E5\u6709\u4E00\u4E2AKubernetes\u96C6\u7FA4\uFF0C\u4E14\u914D\u7F6E\u4E86kubectl\u547D\u4EE4\u884C\u5DE5\u5177</li>
</ul>
<h2 id="\u7070\u5EA6\u53D1\u5E03">\u7070\u5EA6\u53D1\u5E03</h2>
<p>Higress\u63D0\u4F9B\u590D\u6742\u7684\u8DEF\u7531\u5904\u7406\u80FD\u529B\uFF0C\u652F\u6301\u57FA\u4E8EHeader\u3001Cookie\u4EE5\u53CA\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\u3002\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u6CE8\u89E3\u6765\u5B9E\u73B0\uFF0C\u4E3A\u4E86\u542F\u7528\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\uFF0C\u9700\u8981\u8BBE\u7F6E\u6CE8\u89E3<code dir="auto">higress.io/canary: "true"</code>\u3002\u901A\u8FC7\u4E0D\u540C\u6CE8\u89E3\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u540C\u7684\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\u3002</p>
<blockquote>
<p>\u8BF4\u660E\uFF1A\u5F53\u591A\u79CD\u65B9\u5F0F\u540C\u65F6\u914D\u7F6E\u65F6\uFF0C\u7070\u5EA6\u65B9\u5F0F\u9009\u62E9\u4F18\u5148\u7EA7\u4E3A\uFF1A\u57FA\u4E8EHeader > \u57FA\u4E8ECookie > \u57FA\u4E8E\u6743\u91CD\uFF08\u4ECE\u9AD8\u5230\u4F4E\uFF09\u3002</p>
</blockquote>
<h3 id="\u57FA\u4E8Eheader\u7070\u5EA6\u53D1\u5E03">\u57FA\u4E8EHeader\u7070\u5EA6\u53D1\u5E03</h3>
<ul>
<li>\u53EA\u914D\u7F6E<code dir="auto">higress.io/canary-by-header</code>\uFF1A\u57FA\u4E8ERequest Header\u7684\u540D\u79F0\u8FDB\u884C\u6D41\u91CF\u5207\u5206\u3002\u5F53\u8BF7\u6C42\u5305\u542B\u8BE5Header\u5E76\u5176\u503C\u4E3Aalways\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4F1A\u88AB\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u5165\u53E3\uFF1B\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4E0D\u4F1A\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u3002</li>
<li>\u540C\u65F6\u914D\u7F6E<code dir="auto">higress.io/canary-by-header</code>\u548C<code dir="auto">higress.io/canary-by-header-value</code>\uFF1A\u57FA\u4E8ERequest Header\u7684\u540D\u79F0\u548C\u503C\u8FDB\u884C\u6D41\u91CF\u5207\u5206\u3002\u5F53\u8BF7\u6C42\u4E2D\u7684header\u7684\u540D\u79F0\u548Cheader\u7684\u503C\u4E0E\u8BE5\u914D\u7F6E\u5339\u914D\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4F1A\u88AB\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\uFF1B\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4E0D\u4F1A\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u3002</li>
</ul>
<blockquote>
<p>Higress\u7070\u5EA6\u53D1\u5E03\u65F6\u652F\u6301\u591A\u4E2A\u7248\u672C\u670D\u52A1\uFF08\u65E0\u4E0A\u9650\uFF09\u3002</p>
</blockquote>
<ol>
<li>\u8BF7\u6C42Header\u4E3A<code dir="auto">higress\uFF1Aalways</code>\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F  name: demo-canary\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>\u8BF7\u6C42Header\u4E3A<code dir="auto">higress\uFF1Av1</code>\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary-v1\uFF1B\u8BF7\u6C42Header\u4E3A<code dir="auto">higress\uFF1Av2</code>\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary-v2\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header-value: "v1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header-value: "v2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F    higress.io/canary-by-header-value: &#x22;v1&#x22;\x7F  name: demo-canary-v1\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v1\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F    higress.io/canary-by-header-value: &#x22;v2&#x22;\x7F  name: demo-canary-v2\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v2\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="\u57FA\u4E8Ecookie\u7070\u5EA6\u53D1\u5E03">\u57FA\u4E8ECookie\u7070\u5EA6\u53D1\u5E03</h3>
<ul>
<li>higress.io/canary-by-cookie\uFF1A\u57FA\u4E8ECookie\u7684Key\u8FDB\u884C\u6D41\u91CF\u5207\u5206\u3002\u5F53\u8BF7\u6C42\u7684Cookie\u4E2D\u542B\u6709\u8BE5Key\u4E14\u5176\u503C\u4E3Aalways\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u5C06\u88AB\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\uFF1B\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u5C06\u4E0D\u4F1A\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u3002</li>
</ul>
<blockquote>
<p>\u8BF4\u660E\uFF1A\u57FA\u4E8ECookie\u7684\u7070\u5EA6\u53D1\u5E03\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u8BBE\u7F6EKey\u5BF9\u5E94\u7684\u503C\uFF0C\u53EA\u80FD\u662Falways\u3002</p>
</blockquote>
<p>\u8BF7\u6C42\u7684Cookie\u4E3A<code dir="auto">demo=always</code>\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-cookie: "demo"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-cookie: &#x22;demo&#x22;\x7F  name: demo-canary\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="\u57FA\u4E8E\u6743\u91CD\u7070\u5EA6\u53D1\u5E03">\u57FA\u4E8E\u6743\u91CD\u7070\u5EA6\u53D1\u5E03</h3>
<ul>
<li>higress.io/canary-weight\uFF1A\u8BBE\u7F6E\u8BF7\u6C42\u5230\u6307\u5B9A\u670D\u52A1\u7684\u767E\u5206\u6BD4\uFF08\u503C\u4E3A0~100\u7684\u6574\u6570\uFF09</li>
<li>higress.io/canary-weight-total\uFF1A\u8BBE\u7F6E\u6743\u91CD\u603B\u548C\uFF0C\u9ED8\u8BA4\u4E3A100</li>
</ul>
<p>\u914D\u7F6E\u7070\u5EA6\u670D\u52A1demo-service-canary-v1\u7684\u6743\u91CD\u4E3A30%\uFF0C\u914D\u7F6E\u7070\u5EA6\u670D\u52A1demo-service-canary-v2\u7684\u6743\u91CD\u4E3A20%\uFF0C\u914D\u7F6E\u6B63\u5F0F\u670D\u52A1demo-service\u7684\u6743\u91CD\u4E3A50%\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-weight: "30"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-weight: "20"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-weight: &#x22;30&#x22;\x7F  name: demo-canary-v1\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v1\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-weight: &#x22;20&#x22;\x7F  name: demo-canary-v2\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v2\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u8DE8\u57DF">\u8DE8\u57DF</h2>
<p>\u8DE8\u57DF\u8D44\u6E90\u5171\u4EABCORS\uFF08Cross-Origin Resource Sharing\uFF09\u662F\u6307\u5141\u8BB8Web\u5E94\u7528\u670D\u52A1\u5668\u8FDB\u884C\u8DE8\u57DF\u8BBF\u95EE\u63A7\u5236\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8DE8\u57DF\u6570\u636E\u5B89\u5168\u4F20\u8F93\u3002</p>
<ul>
<li>higress.io/enable-cors\uFF1A\u201Ctrue\u201D or \u201Cfalse\u201D\u3002\u5F00\u542F\u6216\u5173\u95ED\u8DE8\u57DF\u3002</li>
<li>higress.io/cors-allow-origin\uFF1A\u5141\u8BB8\u7684\u7B2C\u4E09\u65B9\u7AD9\u70B9\uFF0C\u652F\u6301\u6CDB\u57DF\u540D\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u652F\u6301\u901A\u914D\u7B26*\u3002\u9ED8\u8BA4\u503C\u4E3A*\uFF0C\u5373\u5141\u8BB8\u6240\u6709\u7B2C\u4E09\u65B9\u7AD9\u70B9\u3002</li>
<li>higress.io/cors-allow-methods\uFF1A\u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5982GET\u3001POST\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u652F\u6301\u901A\u914D\u7B26*\u3002\u9ED8\u8BA4\u503C\u4E3AGET, PUT, POST, DELETE, PATCH, OPTIONS\u3002</li>
<li>higress.io/cors-allow-headers\uFF1A\u5141\u8BB8\u7684\u8BF7\u6C42\u5934\u90E8\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u652F\u6301\u901A\u914D\u7B26*\u3002\u9ED8\u8BA4\u503C\u4E3ADNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization\u3002</li>
<li>higress.io/cors-expose-headers\uFF1A\u5141\u8BB8\u7684\u54CD\u5E94\u5934\u90E8\uFF0C\u9017\u53F7\u5206\u9694\u3002</li>
<li>higress.io/cors-allow-credentials\uFF1A\u201Ctrue\u201D or \u201Cfalse\u201D\u3002\u662F\u5426\u5141\u8BB8\u643A\u5E26\u51ED\u8BC1\u4FE1\u606F\u3002\u9ED8\u8BA4\u5141\u8BB8\u3002</li>
<li>higress.io/cors-max-age\uFF1A\u9884\u68C0\u7ED3\u679C\u7684\u6700\u5927\u7F13\u5B58\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF1B\u9ED8\u8BA4\u503C\u4E3A1728000\u3002</li>
</ul>
<p>\u8DE8\u57DF\u8BF7\u6C42\u88AB\u9650\u5236\u4E3A\u53EA\u80FD\u6765\u81EAexample.com\u57DF\u7684\u8BF7\u6C42\uFF0C\u5E76\u4E14HTTP\u65B9\u6CD5\u53EA\u80FD\u662FGET\u548CPOST\uFF0C\u5141\u8BB8\u7684\u8BF7\u6C42\u5934\u90E8\u4E3AX-Foo-Bar\uFF0C\u4E0D\u5141\u8BB8\u643A\u5E26\u51ED\u8BC1\u4FE1\u606F\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/enable-cors: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-origin: "example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-methods: "GET,POST"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-headers: "X-Foo-Bar"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/cors-allow-credentials: "false"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/enable-cors: &#x22;true&#x22;\x7F    higress.io/cors-allow-origin: &#x22;example.com&#x22;\x7F    higress.io/cors-allow-methods: &#x22;GET,POST&#x22;\x7F    higress.io/cors-allow-headers: &#x22;X-Foo-Bar&#x22;\x7F    higress.io/cors-allow-credentials: &#x22;false&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="rewrite\u91CD\u5199path\u548Chost">Rewrite\u91CD\u5199Path\u548CHost</h2>
<p>\u5728\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u76EE\u6807\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u91CD\u5199\u53EF\u4EE5\u4FEE\u6539\u539F\u59CB\u8BF7\u6C42\u7684\u8DEF\u5F84\uFF08Path\uFF09\u548C\u4E3B\u673A\u57DF\uFF08Host)\u3002</p>
<ul>
<li>higress.io/rewrite-target\uFF1A\u91CD\u5199Path\uFF0C\u652F\u6301\u6355\u83B7\u7EC4\uFF08Capture Group)\u3002</li>
<li>higress.io/upstream-vhost\uFF1A\u91CD\u5199Host\u3002</li>
</ul>
<h3 id="rewrite\u91CD\u5199path">Rewrite\u91CD\u5199Path</h3>
<ol>
<li>\u5C06\u8BF7\u6C42<code dir="auto">example.com/test</code>\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u91CD\u5199\u4E3A<code dir="auto">example.com/dev</code></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/rewrite-target: "/dev"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/rewrite-target: &#x22;/dev&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5C06\u8BF7\u6C42<code dir="auto">example.com/v1/app</code>\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u53BB\u6389Path\u524D\u7F00/v1</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/rewrite-target: "/$2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /v1(/|$)(.*)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: ImplementationSpecific</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/rewrite-target: &#x22;/$2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /v1(/|$)(.*)\x7F            pathType: ImplementationSpecific"><div></div></button></div></figure></div>
<ol start="3">
<li>\u5C06\u8BF7\u6C42<code dir="auto">example.com/v1/app</code>\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u5C06Path\u524D\u7F00/v1\u66F4\u6539\u4E3A/v2</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/rewrite-target: "/v2/$2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /v1(/|$)(.*)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: ImplementationSpecific</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/rewrite-target: &#x22;/v2/$2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /v1(/|$)(.*)\x7F            pathType: ImplementationSpecific"><div></div></button></div></figure></div>
<h3 id="rewrite\u91CD\u5199host">Rewrite\u91CD\u5199Host</h3>
<p>\u5C06\u8BF7\u6C42<code dir="auto">example.com/test</code>\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u91CD\u5199\u4E3A<code dir="auto">test.com/test</code></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-vhost: "test.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-vhost: &#x22;test.com&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u91CD\u5B9A\u5411">\u91CD\u5B9A\u5411</h2>
<p>\u901A\u8FC7\u91CD\u5B9A\u5411\u53EF\u4EE5\u5C06\u539F\u59CB\u5BA2\u6237\u7AEF\u8BF7\u6C42\u66F4\u6539\u4E3A\u76EE\u6807\u8BF7\u6C42\u3002</p>
<h3 id="\u914D\u7F6Ehttp\u91CD\u5B9A\u5411\u81F3https">\u914D\u7F6EHTTP\u91CD\u5B9A\u5411\u81F3HTTPS</h3>
<ul>
<li>higress.io/ssl-redirect\uFF1AHTTP\u91CD\u5B9A\u5411\u5230HTTPS</li>
<li>higress.io/force-ssl-redirect: HTTP\u91CD\u5B9A\u5411\u5230HTTPS</li>
</ul>
<blockquote>
<p>\u8BF4\u660E\uFF1AHigress\u5BF9\u4E8E\u4EE5\u4E0A\u4E24\u4E2A\u6CE8\u89E3\u4E0D\u533A\u5206\u5BF9\u5F85\uFF0C\u90FD\u662F\u5F3A\u5236\u5C06HTTP\u91CD\u5B9A\u5411\u5230HTTPS\u3002</p>
</blockquote>
<p>\u5C06\u8BF7\u6C42<code dir="auto">http://example.com/test</code>\u91CD\u5B9A\u5411\u4E3A<code dir="auto">https://example.com/test</code>\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/ssl-redirect: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/ssl-redirect: &#x22;true&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="\u6C38\u4E45\u91CD\u5B9A\u5411">\u6C38\u4E45\u91CD\u5B9A\u5411</h3>
<ul>
<li>higress.io/permanent-redirect\uFF1A\u6C38\u4E45\u91CD\u5B9A\u5411\u7684\u76EE\u6807url\uFF0C\u5FC5\u987B\u5305\u542Bscheme\uFF08http or https)\u3002</li>
<li>higress.io/permanent-redirect-code\uFF1A\u6C38\u4E45\u91CD\u5B9A\u5411\u7684HTTP\u72B6\u6001\u7801\uFF0C\u9ED8\u8BA4\u4E3A301\u3002</li>
</ul>
<p>\u5C06\u8BF7\u6C42<code dir="auto">http://example.com/test</code>\u6C38\u4E45\u91CD\u5B9A\u5411\u4E3A<code dir="auto">http://example.com/app</code>\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/permanent-redirect: "http://example.com/app"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/permanent-redirect: &#x22;http://example.com/app&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="\u4E34\u65F6\u91CD\u5B9A\u5411">\u4E34\u65F6\u91CD\u5B9A\u5411</h3>
<ul>
<li>higress.io/temporal-redirect\uFF1A\u4E34\u65F6\u91CD\u5B9A\u5411\u7684\u76EE\u6807url\uFF0C\u5FC5\u987B\u5305\u542Bscheme\uFF08http or https)\u3002</li>
</ul>
<p>\u5C06\u8BF7\u6C42<code dir="auto">http://example.com/test</code>\u4E34\u65F6\u91CD\u5B9A\u5411\u4E3A<code dir="auto">http://example.com/app</code>\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/temporal-redirect: "http://example.com/app"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/temporal-redirect: &#x22;http://example.com/app&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="header\u63A7\u5236">Header\u63A7\u5236</h2>
<p>\u901A\u8FC7Header\u63A7\u5236\uFF0C\u60A8\u53EF\u4EE5\u5728\u8F6C\u53D1\u8BF7\u6C42\u5230\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\u5BF9\u8BF7\u6C42Header\u8FDB\u884C\u589E\u5220\u6539\uFF0C\u5728\u6536\u5230\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u65F6\u5BF9\u54CD\u5E94Header\u8FDB\u884C\u589E\u5220\u6539\u3002</p>
<h3 id="\u8BF7\u6C42header\u63A7\u5236">\u8BF7\u6C42Header\u63A7\u5236</h3>
<ul>
<li>higress.io/request-header-control-add\uFF1A\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u6DFB\u52A0\u6307\u5B9AHeader\u3002\u82E5\u8BE5Header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u62FC\u63A5\u5728\u539F\u6709\u503C\u540E\u9762\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
<ul>
<li>\u5355\u4E2AHeader\uFF1AKey Value</li>
<li>\u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C</li>
</ul>
</li>
<li>higress.io/request-header-control-update\uFF1A\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u4FEE\u6539\u6307\u5B9AHeader\u3002\u82E5\u8BE5header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u8986\u76D6\u539F\u6709\u503C\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
<ul>
<li>\u5355\u4E2AHeader\uFF1AKey Value</li>
<li>\u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C</li>
</ul>
</li>
<li>higress.io/request-header-control-remove\uFF1A\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u5220\u9664\u6307\u5B9AHeader\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
<ul>
<li>\u5355\u4E2AHeader\uFF1AKey</li>
<li>\u591A\u4E2AHeader\uFF1A\u9017\u53F7\u5206\u9694</li>
</ul>
</li>
</ul>
<ol>
<li>\u5BF9\u4E8E\u8BF7\u6C42<code dir="auto">example.com/test</code>\u6DFB\u52A0\u4E24\u4E2AHeader\uFF0C<code dir="auto">foo: bar</code>\u548C<code dir="auto">test: true</code>\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/request-header-control-add: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">foo bar</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">test true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/request-header-control-add: |\x7F      foo bar\x7F      test true\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>Header\u63A7\u5236\u53EF\u4EE5\u7ED3\u5408\u7070\u5EA6\u53D1\u5E03\uFF0C\u5BF9\u7070\u5EA6\u6D41\u91CF\u8FDB\u884C\u67D3\u8272\u3002\u8BF7\u6C42Header\u4E3A<code dir="auto">higress\uFF1Av1</code>\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary-v1\uFF0C\u5E76\u6DFB\u52A0Header\uFF0C<code dir="auto">stage: gray</code>\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\uFF0C\u5E76\u6DFB\u52A0Header\uFF0C<code dir="auto">stage: production</code>\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary: "true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header: "higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/canary-by-header-value: "v1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/request-header-control-add: "stage gray"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo-canary-v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service-canary-v1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/request-header-control-add: "stage production"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /hello</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/canary: &#x22;true&#x22;\x7F    higress.io/canary-by-header: &#x22;higress&#x22;\x7F    higress.io/canary-by-header-value: &#x22;v1&#x22;\x7F    higress.io/request-header-control-add: &#x22;stage gray&#x22;\x7F  name: demo-canary-v1\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service-canary-v1\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/request-header-control-add: &#x22;stage production&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /hello\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="\u54CD\u5E94header\u63A7\u5236">\u54CD\u5E94Header\u63A7\u5236</h3>
<ul>
<li>higress.io/response-header-control-add\uFF1A\u8BF7\u6C42\u5728\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u4E4B\u540E\u5E76\u4E14\u8F6C\u53D1\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u6DFB\u52A0\u6307\u5B9AHeader\u3002\u82E5\u8BE5Header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u62FC\u63A5\u5728\u539F\u6709\u503C\u540E\u9762\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
<ul>
<li>\u5355\u4E2AHeader\uFF1AKey Value</li>
<li>\u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C</li>
</ul>
</li>
<li>higress.io/response-header-control-update\uFF1A\u8BF7\u6C42\u5728\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u4E4B\u540E\u5E76\u4E14\u8F6C\u53D1\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u4FEE\u6539\u6307\u5B9AHeader\u3002\u82E5\u8BE5header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u8986\u76D6\u539F\u6709\u503C\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
<ul>
<li>\u5355\u4E2AHeader\uFF1AKey Value</li>
<li>\u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C</li>
</ul>
</li>
<li>higress.io/response-header-control-remove\uFF1A\u8BF7\u6C42\u5728\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u4E4B\u540E\u5E76\u4E14\u8F6C\u53D1\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u5220\u9664\u6307\u5B9AHeader\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
<ul>
<li>\u5355\u4E2AHeader\uFF1AKey</li>
<li>\u591A\u4E2AHeader\uFF1A\u9017\u53F7\u5206\u9694</li>
</ul>
</li>
</ul>
<p>\u5BF9\u4E8E\u8BF7\u6C42<code dir="auto">example.com/test</code>\u7684\u54CD\u5E94\u5220\u9664<code dir="auto">Header\uFF1Areq-cost-time</code>\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/response-header-control-remove: "req-cost-time"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/response-header-control-remove: &#x22;req-cost-time&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u91CD\u8BD5">\u91CD\u8BD5</h2>
<p>Higress\u63D0\u4F9B\u8DEF\u7531\u7EA7\u522B\u7684\u91CD\u8BD5\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u51FA\u9519\u7684\u8BF7\u6C42\u8C03\u7528\u81EA\u52A8\u8FDB\u884C\u91CD\u8BD5\u3002\u60A8\u53EF\u4EE5\u6309\u9700\u8BBE\u7F6E\u91CD\u8BD5\u6761\u4EF6\uFF0C\u4F8B\u5982\u5EFA\u7ACB\u8FDE\u63A5\u5931\u8D25\uFF0C\u6216\u8005\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u4EE5\u53CA\u5BF9\u6307\u5B9AHTTP\u72B6\u6001\u7801\u7684\u54CD\u5E94\u7B49\u8FDB\u884C\u8BF7\u6C42\u91CD\u8BD5\u3002</p>
<ul>
<li>higress.io/proxy-next-upstream-tries\uFF1A\u8BF7\u6C42\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u3002\u9ED8\u8BA43\u6B21\u3002</li>
<li>higress.io/proxy-next-upstream-timeout\uFF1A\u8BF7\u6C42\u91CD\u8BD5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u672A\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002</li>
<li>higress.io/proxy-next-upstream\uFF1A\u8BF7\u6C42\u91CD\u8BD5\u6761\u4EF6\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u9ED8\u8BA4\u503C\u4E3A\u201Derror,timeout\u201D\u3002\u5408\u6CD5\u503C\u5982\u4E0B\uFF1A
<ul>
<li>error\uFF1A\u5EFA\u7ACB\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6C42\u51FA\u95195xx\u3002</li>
<li>timeout\uFF1A\u5EFA\u7ACB\u8FDE\u63A5\u8D85\u65F6\uFF0C\u8BF7\u6C42\u51FA\u95195xx\u3002</li>
<li>invalid_header\uFF1A\u8BF7\u6C42\u51FA\u95195xx\u3002</li>
<li>http_xxx\uFF1A\u9488\u5BF9\u5177\u4F53\u54CD\u5E94\u72B6\u6001\u7801\u7684\u60C5\u51B5\u8FDB\u884C\u91CD\u8BD5\u3002\u4F8B\u5982http_502\uFF0Chttp_403\u3002</li>
<li>non_idempotent\uFF1A\u5BF9\u4E8E\u975E\u5E42\u7B49\u8BF7\u6C42\u51FA\u9519\u65F6\u8FDB\u884C\u91CD\u8BD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CHigress\u9488\u5BF9\u975E\u5E42\u7B49POST\u3001PATCH\u8BF7\u6C42\u51FA\u9519\u65F6\u4E0D\u4F1A\u8FDB\u884C\u91CD\u8BD5\uFF0C\u914D\u7F6Enon_idempotent\u53EF\u4EE5\u5F00\u542F\u91CD\u8BD5\u3002</li>
<li>off\uFF1A\u5173\u95ED\u91CD\u8BD5\u3002</li>
</ul>
</li>
</ul>
<p>\u8BBE\u7F6E<code dir="auto">example/test</code>\u8BF7\u6C42\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u4E3A2\uFF0C\u91CD\u8BD5\u8D85\u65F6\u65F6\u95F4\u4E3A5s\uFF0C\u53EA\u6709\u5728\u54CD\u5E94\u72B6\u6001\u7801\u4E3A502\u624D\u91CD\u8BD5\uFF0C\u5E76\u4E14\u5F00\u542F\u975E\u5E42\u7B49\u91CD\u8BD5\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-next-upstream-tries: "2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-next-upstream-timeout: "5"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-next-upstream: "http_502,non_idempotent"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/proxy-next-upstream-tries: &#x22;2&#x22;\x7F    higress.io/proxy-next-upstream-timeout: &#x22;5&#x22;\x7F    higress.io/proxy-next-upstream: &#x22;http_502,non_idempotent&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u8D85\u65F6">\u8D85\u65F6</h2>
<p>Higress\u63D0\u4F9B\u8DEF\u7531\u7EA7\u522B\u7684\u8D85\u65F6\u8BBE\u7F6E\uFF0C\u4E0Enginx ingress\u4E0D\u540C\uFF0C\u6CA1\u6709\u533A\u5206\u8FDE\u63A5/\u8BFB\u5199\u8D85\u65F6\uFF0C\u800C\u662F\u9762\u5411\u7684\u63A5\u53E3\u5904\u7406\u603B\u5EF6\u65F6\u8FDB\u884C\u914D\u7F6E\uFF0C\u5728\u672A\u8FDB\u884C\u914D\u7F6E\u65F6\u9ED8\u8BA4\u4E0D\u9650\u5236\uFF0C\u4F8B\u5982\u540E\u7AEF\u672A\u8FD4\u56DE\u5E94\u7B54\uFF0C\u7F51\u5173\u5C06\u65E0\u9650\u7B49\u5F85\u3002</p>
<p>\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A5s\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/timeout: "5"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/timeout: &#x22;5&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u5355\u673A\u9650\u6D41">\u5355\u673A\u9650\u6D41</h2>
<blockquote>
<p><strong>\u63D0\u793A</strong>
Higress\u5546\u4E1A\u7248\u5177\u5907\u5168\u5C40\u9650\u6D41\u80FD\u529B\uFF0C\u8BE6\u60C5\u67E5\u770B<a href="https://help.aliyun.com/zh/mse/user-guide/advanced-usage-of-mse-ingress?spm=a2c4g.11186623.0.0.2e3a3db3eYcspD#862f08d03d4d3" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5546\u4E1A\u7248\u6587\u6863</a>\u4E2D\u5168\u5C40\u9650\u6D41\u4E00\u8282\u7684\u4ECB\u7ECD</p>
</blockquote>
<p>\u652F\u6301\u9488\u5BF9\u8DEF\u7531\u7EA7\u522B\u7684\u5355\u673A\u9650\u6D41\u7B56\u7565\uFF0C\u5728\u8BBE\u5B9A\u7684\u65F6\u95F4\u5468\u671F\u5185\uFF0C\u9650\u5236\u6BCF\u4E2A\u7F51\u5173\u526F\u672C\u5339\u914D\u5728\u67D0\u4E2A\u8DEF\u7531\u4E0A\u7684\u8BF7\u6C42\u6570\u91CF\u4E0D\u5927\u4E8E\u9608\u503C\u3002\u8BE5\u9650\u6D41\u662F\u9488\u5BF9\u5355\u673A\u7EA7\u522B\uFF0C\u5373\u914D\u7F6E\u7684\u9608\u503C\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u8FDB\u884C\u6D41\u63A7\u3002</p>
<ul>
<li>higress.io/route-limit-rpm\uFF1A\u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002</li>
<li>higress.io/route-limit-rps\uFF1A\u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002</li>
<li>higress.io/route-limit-burst-multiplier\uFF1A\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u7684\u56E0\u5B50\uFF0C\u9ED8\u8BA4\u4E3A5\u3002</li>
</ul>
<p>\u4F8B\u5982\uFF1A</p>
<p>\u9650\u5236example.com/test\u7684\u8BF7\u6C42\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570\u4E3A100\uFF0C\u77AC\u65F6\u8BF7\u6C42\u6570200\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/route-limit-rpm: "100"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/route-limit-burst-multiplier: "2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: mse</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/route-limit-rpm: &#x22;100&#x22;\x7F    higress.io/route-limit-burst-multiplier: &#x22;2&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: mse\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<p>\u9650\u5236example.com/test\u7684\u8BF7\u6C42\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570\u4E3A10\uFF0C\u77AC\u65F6\u8BF7\u6C42\u657050\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/route-limit-rps: "10"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># \u9ED8\u8BA4\u4E3A5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># higress.io/route-limit-burst-multiplier: "5"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: mse</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/route-limit-rps: &#x22;10&#x22;\x7F    # \u9ED8\u8BA4\u4E3A5\x7F    # higress.io/route-limit-burst-multiplier: &#x22;5&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: mse\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u534F\u8BAEhttps\u6216grpc">\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u534F\u8BAE\uFF1AHTTPS\u6216GRPC</h2>
<p>Higress\u9ED8\u8BA4\u4F7F\u7528HTTP\u534F\u8BAE\u8F6C\u53D1\u8BF7\u6C42\u5230\u540E\u7AEF\u4E1A\u52A1\u5BB9\u5668\u3002\u5F53\u60A8\u7684\u4E1A\u52A1\u5BB9\u5668\u4E3AHTTPS\u534F\u8BAE\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3<code dir="auto">higress.io/backend-protocol: "HTTPS"</code>\uFF1B\u5F53\u60A8\u7684\u4E1A\u52A1\u5BB9\u5668\u4E3AGRPC\u670D\u52A1\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3<code dir="auto">higress.io/backend-protocol: "GRPC"</code>\u3002</p>
<blockquote>
<p>\u8BF4\u660E\uFF1A\u76F8\u6BD4Nginx Ingress\u7684\u4F18\u52BF\uFF0C\u5982\u679C\u60A8\u7684\u540E\u7AEF\u670D\u52A1\u6240\u5C5E\u7684K8s Service\u8D44\u6E90\u4E2D\u5173\u4E8EPort Name\u7684\u5B9A\u4E49\u4E3Agrpc\u6216http2\uFF0C\u60A8\u65E0\u9700\u914D\u7F6E\u6CE8\u89E3higress.io/backend-protocol: \u201CGRPC\u201D\uFF0CHigress\u4F1A\u81EA\u52A8\u4F7F\u7528GRPC\u6216\u8005HTTP2\u3002</p>
</blockquote>
<ol>
<li>\u8BF7\u6C42<code dir="auto">example.com/test</code>\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4F7F\u7528HTTPS\u534F\u8BAE\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/backend-protocol: "HTTPS"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: &#x22;HTTPS&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>\u8BF7\u6C42<code dir="auto">example/grpcbin.GRPCBin</code>\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4F7F\u7528GRPC\u534F\u8BAE\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/backend-protocol: "GRPC"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /grpcbin.GRPCBin</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: &#x22;GRPC&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /grpcbin.GRPCBin\x7F            pathType: Prefix"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5">\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h2>
<p>\u8D1F\u8F7D\u5747\u8861\u51B3\u5B9A\u7740\u7F51\u5173\u5728\u8F6C\u53D1\u8BF7\u6C42\u81F3\u540E\u7AEF\u670D\u52A1\u65F6\u5982\u4F55\u9009\u62E9\u8282\u70B9\u3002</p>
<h3 id="\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5">\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h3>
<ul>
<li>higress.io/load-balance\uFF1A\u540E\u7AEF\u670D\u52A1\u7684\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002\u9ED8\u8BA4\u4E3Around_robin\u3002\u5408\u6CD5\u503C\u5982\u4E0B\uFF1A
<ul>
<li>round_robin\uFF1A\u57FA\u4E8E\u8F6E\u8BE2\u7684\u8D1F\u8F7D\u5747\u8861\u3002</li>
<li>least_conn\uFF1A\u57FA\u4E8E\u6700\u5C0F\u8BF7\u6C42\u6570\u7684\u8D1F\u8F7D\u5747\u8861\u3002</li>
<li>random\uFF1A\u57FA\u4E8E\u968F\u673A\u7684\u8D1F\u8F7D\u5747\u8861\u3002</li>
</ul>
</li>
</ul>
<p>\u8BBE\u7F6E\u540E\u7AEF\u670D\u52A1demo-service\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u4E3Aleast_conn\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/load-balance: "least_conn"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /order</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/load-balance: &#x22;least_conn&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /order\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h3 id="\u57FA\u4E8E\u4E00\u81F4\u6027hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5">\u57FA\u4E8E\u4E00\u81F4\u6027Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h3>
<p>\u57FA\u4E8E\u4E00\u81F4\u6027Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u5177\u5907\u8BF7\u6C42\u4EB2\u548C\u6027\uFF0C\u5177\u6709\u76F8\u540C\u7279\u5F81\u7684\u8BF7\u6C42\u4F1A\u59CB\u7EC8\u8D1F\u8F7D\u5230\u76F8\u540C\u8282\u70B9\u4E0A\u3002Higress\u652F\u6301\u57FA\u4E8E\u90E8\u5206Nginx \u53D8\u91CF\u3001\u8BF7\u6C42Header\u548C\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570\u4F5C\u4E3AHash Key\u3002</p>
<ul>
<li>higress.io/upstream-hash-by\uFF1A\u57FA\u4E8E\u4E00\u81F4Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002Higress\u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A
<ul>
<li>\u652F\u6301\u914D\u7F6E\u90E8\u5206nginx\u53D8\u91CF\uFF1A
<ul>
<li>$request_uri\uFF1A\u8BF7\u6C42\u7684Path\uFF08\u5305\u62EC\u8DEF\u5F84\u53C2\u6570\uFF09\u4F5C\u4E3AHash Key</li>
<li>$host\uFF1A\u8BF7\u6C42\u7684Host\u4F5C\u4E3AHash Key</li>
<li>$remote_addr\uFF1A\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP\u4F5C\u4E3AHash Key</li>
</ul>
</li>
<li>\u57FA\u4E8E\u8BF7\u6C42header\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$http_headerName\u3002</li>
<li>\u57FA\u4E8E\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$arg_varName\u3002</li>
</ul>
</li>
</ul>
<ol>
<li>\u57FA\u4E8E\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP\u4F5C\u4E3AHash Key\uFF0C\u540C\u4E00\u4E2A\u5BA2\u6237\u7AEFIP\u7684\u8BF7\u6C42\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-hash-by: "$remote_addr"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-hash-by: &#x22;$remote_addr&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>\u57FA\u4E8E\u8BF7\u6C42Header x-stage\u4F5C\u4E3AHash key\uFF0C\u5E26\u6709x-stage\u5934\u90E8\u7684\u8BF7\u6C42\u4E14\u503C\u76F8\u540C\u7684\u8BF7\u6C42\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-hash-by: "$http_x-stage"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-hash-by: &#x22;$http_x-stage&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="3">
<li>\u57FA\u4E8E\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570 x-stage\u4F5C\u4E3AHash key\uFF0C\u5E26\u6709\u8DEF\u5F84\u53C2\u6570x-stage\u7684\u8BF7\u6C42\u4E14\u503C\u76F8\u540C\u7684\u8BF7\u6C42\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/upstream-hash-by: "$arg_x-stage"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/upstream-hash-by: &#x22;$arg_x-stage&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="cookie\u4EB2\u548C\u6027-\u4F1A\u8BDD\u4FDD\u6301">Cookie\u4EB2\u548C\u6027 \uFF08\u4F1A\u8BDD\u4FDD\u6301\uFF09</h2>
<p>\u5177\u5907\u76F8\u540C\u7684Cookie\u7684\u8BF7\u6C42\u4F1A\u88AB\u7F51\u5173\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u4E14\u5982\u679C\u7B2C\u4E00\u6B21\u8BBF\u95EE\u643A\u5E26Cookie\uFF0CHigress\u4F1A\u5728\u7B2C\u4E00\u6B21\u54CD\u5E94\u65F6\u4E3A\u5BA2\u6237\u7AEF\u751F\u6210\u4E00\u4E2ACookie\uFF0C\u7528\u6765\u4FDD\u8BC1\u540E\u7EED\u7684\u8BF7\u6C42\u88AB\u7F51\u5173\u59CB\u7EC8\u8D1F\u8F7D\u5230\u76F8\u540C\u8282\u70B9\u3002</p>
<ul>
<li>higress.io/affinity\uFF1A\u4EB2\u548C\u6027\u79CD\u7C7B\uFF0C\u76EE\u524D\u53EA\u652F\u6301cookie\uFF0C\u9ED8\u8BA4\u4E3Acookie\u3002</li>
<li>higress.io/affinity-mode\uFF1A\u4EB2\u548C\u6027\u6A21\u5F0F\uFF0CHigress\u76EE\u524D\u53EA\u652F\u6301balanced\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3Abalanced\u6A21\u5F0F\u3002</li>
<li>higress.io/session-cookie-name\uFF1A\u914D\u7F6E\u6307\u5B9ACookie\u7684\u503C\u4F5C\u4E3AHash Key\uFF0C\u9ED8\u8BA4\u4E3AINGRESSCOOKIE</li>
<li>higress.io/session-cookie-path\uFF1A\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684Path\u503C\uFF0C\u9ED8\u8BA4\u4E3A/</li>
<li>higress.io/session-cookie-max-age\uFF1A\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002</li>
<li>higress.io/session-cookie-expires\uFF1A\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002</li>
</ul>
<blockquote>
<p>\u8BF4\u660E\uFF1Amax-age\u548Cexpires\u90FD\u53EF\u4EE5\u7528\u6765\u6307\u5B9Acookie\u8FC7\u671F\u65F6\u95F4\u3002\u5F53session-cookie-max-age\u548Csession-cookie-expires\u540C\u65F6\u914D\u7F6E\u65F6\uFF0CHigress\u4F18\u5148\u9009\u53D6session-cookie-max-age\u4F5C\u4E3A\u8FC7\u671F\u65F6\u95F4\u3002</p>
</blockquote>
<ol>
<li>\u5F00\u542FCookie\u4EB2\u548C\u6027\uFF0C\u5229\u7528Higress\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5373Cookie\u7684\u540D\u5B57\u4E3AINGRESSCOOKIE\uFF0CPath\u4E3A/\uFF0CCookie\u7684\u751F\u547D\u5468\u671F\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/affinity: "cookie"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/affinity: &#x22;cookie&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5F00\u542FCookie\u4EB2\u548C\u6027\uFF0CCookie\u7684\u540D\u5B57\u4E3Atest\uFF0CPath\u4E3A/\uFF0CCookie\u7684\u8FC7\u671F\u65F6\u95F4\u4E3A10s\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/affinity: "cookie"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/session-cookie-name: "test"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/session-cookie-max-age: "10"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/affinity: &#x22;cookie&#x22;\x7F    higress.io/session-cookie-name: &#x22;test&#x22;\x7F    higress.io/session-cookie-max-age: &#x22;10&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>
<h2 id="\u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u53CC\u5411\u8BA4\u8BC1mtls">\u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u53CC\u5411\u8BA4\u8BC1(MTLS)</h2>
<p>\u5F53\u5F00\u542FHTTPS\u65F6\uFF0C\u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u662F\u57FA\u4E8E\u5355\u5411TLS\u8BA4\u8BC1\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u6CE8\u89E3\u5F00\u542F\u53CC\u5411TLS\u8BA4\u8BC1\uFF0C\u5373\u8BA9\u670D\u52A1\u7AEF\u540C\u65F6\u6821\u9A8C\u5BA2\u6237\u7AEF\u7684\u5408\u6CD5\u6027\u3002</p>
<ul>
<li>higress.io/auth-tls-secret: \u7F51\u5173\u4F7F\u7528\u7684CA\u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1MTLS\u63E1\u624B\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u8BC1\u4E66\u3002\u8BE5\u6CE8\u89E3\u4E3B\u8981\u5E94\u7528\u4E8E\u7F51\u5173\u9700\u8981\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8EAB\u4EFD\u7684\u573A\u666F\u3002secret\u540D\u5B57\u683C\u5F0F\u5FC5\u987B\u662F\uFF1A(\u8BE5\u57DF\u540D\u8BC1\u4E66\u6240\u5728\u7684secret\u7684\u540D\u5B57)-cacert</li>
</ul>
<p>\u4F8B\u5982:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u8FD9\u91CC\u7684\u8981\u6C42\u662F\u5FC5\u987B\u4EE5\u57DF\u540D\u4E0A\u914D\u7F6E\u8BC1\u4E66secret\u540D\u79F0\u540E\u7F00\u52A0\u4E0A-cacert</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/auth-tls-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret-cacert</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bar-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">tls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secretName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">tls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">secretName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    # \u8FD9\u91CC\u7684\u8981\u6C42\u662F\u5FC5\u987B\u4EE5\u57DF\u540D\u4E0A\u914D\u7F6E\u8BC1\u4E66secret\u540D\u79F0\u540E\u7F00\u52A0\u4E0A-cacert\x7F    higress.io/auth-tls-secret: tls-secret-cacert\x7F  name: bar\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: bar.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: bar-service\x7F            port:\x7F              number: 5678\x7F        path: /\x7F        pathType: Prefix\x7F  tls:\x7F  - hosts:\x7F    - bar.com\x7F    secretName: tls-secret\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7F  namespace: default\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678\x7F        path: /\x7F        pathType: Prefix\x7F  tls:\x7F  - hosts:\x7F    - foo.com\x7F    secretName: tls-secret"><div></div></button></div></figure></div>
<p>tls-secret-cacert \u8FD9\u4E2A secret \u7684\u5185\u5BB9\u4E2D\u5FC5\u987B\u6709 cacert \u8FD9\u4E2Akey\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cacert</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tls-secret-cacert</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Opaque</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  cacert: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=\x7Fkind: Secret\x7Fmetadata:\x7F  name: tls-secret-cacert\x7F  namespace: default\x7Ftype: Opaque"><div></div></button></div></figure></div>
<h2 id="\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u53CC\u5411\u8BA4\u8BC1mtls">\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u53CC\u5411\u8BA4\u8BC1\uFF08MTLS)</h2>
<p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CHigress\u9ED8\u8BA4\u4F7F\u7528HTTP\u534F\u8BAE\u8F6C\u53D1\u8BF7\u6C42\u5230\u540E\u7AEF\u4E1A\u52A1\u5BB9\u5668\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3<code dir="auto">higress.io/backend-protocol: "HTTPS"</code>\u914D\u7F6EHigress\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u4F7F\u7528HTTPS\u534F\u8BAE\uFF0C\u4F46\u8FD9\u662F\u5355\u5411TLS\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EA\u6709Higress\u4F1A\u9A8C\u8BC1\u540E\u7AEF\u670D\u52A1\u63D0\u4F9B\u7684\u8BC1\u4E66\uFF0C\u4E14\u4E00\u822C\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u8BC1\u4E66\u9700\u8981\u662F\u6743\u5A01CA\u7B7E\u53D1\u7684\u3002\u53E6\u4E00\u79CD\u66F4\u5B89\u5168\u7684\u6A21\u5F0F\u662F\u96F6\u4FE1\u4EFB\uFF0C\u7F51\u5173\u4F1A\u9A8C\u8BC1\u540E\u7AEF\u670D\u52A1\u7684\u8BC1\u4E66\u662F\u5426\u5408\u6CD5\uFF0C\u540C\u6837\u540E\u7AEF\u670D\u52A1\u4E5F\u4F1A\u9A8C\u8BC1\u7F51\u5173\u63D0\u4F9B\u7684\u8BC1\u4E66\u662F\u5426\u5408\u6CD5\uFF0C\u8FD9\u5C31\u662FMTLS\uFF0C\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u53CC\u5411\u8BA4\u8BC1\u3002</p>
<ul>
<li>higress.io/proxy-ssl-secret\uFF1A\u7F51\u5173\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5BF9\u7F51\u5173\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u683C\u5F0F\u4E3A secretNamespace/secretName\u3002</li>
<li>higress.io/proxy-ssl-name\uFF1ATLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528\u7684SNI\u3002</li>
<li>higress.io/proxy-ssl-server-name\uFF1Aon or off\u3002\u5F00\u542F\u6216\u5173\u95EDTLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528SNI\u3002</li>
</ul>
<p>\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u53CC\u5411\u8BA4\u8BC1\uFF0C\u7F51\u5173\u4F7F\u7528\u7684secret name\u4E3Agateway-cert\uFF0C\u547D\u540D\u7A7A\u95F4\u4E3Adefault\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">apiVersion: networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">kind: Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">annotations:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higress.io/proxy-ssl-secret: "default/gateway-cert"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spec:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ingressClassName: higress</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rules:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- host: example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">http:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">- backend:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">service:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">name: demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">port:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">number: 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">path: /test</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">pathType: Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/proxy-ssl-secret: &#x22;default/gateway-cert&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              service:\x7F                name: demo-service\x7F                port:\x7F                  number: 80\x7F            path: /test\x7F            pathType: Exact"><div></div></button></div></figure></div>`,n={title:"\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406",keywords:["Ingress Annotation"],description:"\u5728Higress\u4E0A\u4F7F\u7528Ingress\u5E76\u501F\u52A9Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/annotation-use-case.md",i=void 0,c=function(){return`
\u672C\u7BC7\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u5728Higress\u4E0A\u4F7F\u7528Ingress\u5E76\u501F\u52A9Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406\u3002

## \u524D\u63D0\u6761\u4EF6
- [\u5B89\u88C5Higress](./quickstart.md)
- \u5DF2\u62E5\u6709\u4E00\u4E2AKubernetes\u96C6\u7FA4\uFF0C\u4E14\u914D\u7F6E\u4E86kubectl\u547D\u4EE4\u884C\u5DE5\u5177

## \u7070\u5EA6\u53D1\u5E03
Higress\u63D0\u4F9B\u590D\u6742\u7684\u8DEF\u7531\u5904\u7406\u80FD\u529B\uFF0C\u652F\u6301\u57FA\u4E8EHeader\u3001Cookie\u4EE5\u53CA\u6743\u91CD\u7684\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\u3002\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E\u6CE8\u89E3\u6765\u5B9E\u73B0\uFF0C\u4E3A\u4E86\u542F\u7528\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\uFF0C\u9700\u8981\u8BBE\u7F6E\u6CE8\u89E3\`higress.io/canary: "true"\`\u3002\u901A\u8FC7\u4E0D\u540C\u6CE8\u89E3\u53EF\u4EE5\u5B9E\u73B0\u4E0D\u540C\u7684\u7070\u5EA6\u53D1\u5E03\u529F\u80FD\u3002
> \u8BF4\u660E\uFF1A\u5F53\u591A\u79CD\u65B9\u5F0F\u540C\u65F6\u914D\u7F6E\u65F6\uFF0C\u7070\u5EA6\u65B9\u5F0F\u9009\u62E9\u4F18\u5148\u7EA7\u4E3A\uFF1A\u57FA\u4E8EHeader > \u57FA\u4E8ECookie > \u57FA\u4E8E\u6743\u91CD\uFF08\u4ECE\u9AD8\u5230\u4F4E\uFF09\u3002

### \u57FA\u4E8EHeader\u7070\u5EA6\u53D1\u5E03
- \u53EA\u914D\u7F6E\`higress.io/canary-by-header\`\uFF1A\u57FA\u4E8ERequest Header\u7684\u540D\u79F0\u8FDB\u884C\u6D41\u91CF\u5207\u5206\u3002\u5F53\u8BF7\u6C42\u5305\u542B\u8BE5Header\u5E76\u5176\u503C\u4E3Aalways\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4F1A\u88AB\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u5165\u53E3\uFF1B\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4E0D\u4F1A\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u3002
- \u540C\u65F6\u914D\u7F6E\`higress.io/canary-by-header\`\u548C\`higress.io/canary-by-header-value\`\uFF1A\u57FA\u4E8ERequest Header\u7684\u540D\u79F0\u548C\u503C\u8FDB\u884C\u6D41\u91CF\u5207\u5206\u3002\u5F53\u8BF7\u6C42\u4E2D\u7684header\u7684\u540D\u79F0\u548Cheader\u7684\u503C\u4E0E\u8BE5\u914D\u7F6E\u5339\u914D\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4F1A\u88AB\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\uFF1B\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u4E0D\u4F1A\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u3002
> Higress\u7070\u5EA6\u53D1\u5E03\u65F6\u652F\u6301\u591A\u4E2A\u7248\u672C\u670D\u52A1\uFF08\u65E0\u4E0A\u9650\uFF09\u3002

1. \u8BF7\u6C42Header\u4E3A\`higress\uFF1Aalways\`\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`
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
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact   
\`\`\`

2. \u8BF7\u6C42Header\u4E3A\`higress\uFF1Av1\`\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary-v1\uFF1B\u8BF7\u6C42Header\u4E3A\`higress\uFF1Av2\`\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary-v2\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v1"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v2"
  name: demo-canary-v2
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

### \u57FA\u4E8ECookie\u7070\u5EA6\u53D1\u5E03
- higress.io/canary-by-cookie\uFF1A\u57FA\u4E8ECookie\u7684Key\u8FDB\u884C\u6D41\u91CF\u5207\u5206\u3002\u5F53\u8BF7\u6C42\u7684Cookie\u4E2D\u542B\u6709\u8BE5Key\u4E14\u5176\u503C\u4E3Aalways\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u5C06\u88AB\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\uFF1B\u5176\u4ED6\u60C5\u51B5\u65F6\uFF0C\u8BF7\u6C42\u6D41\u91CF\u5C06\u4E0D\u4F1A\u5206\u914D\u5230\u7070\u5EA6\u670D\u52A1\u3002
> \u8BF4\u660E\uFF1A\u57FA\u4E8ECookie\u7684\u7070\u5EA6\u53D1\u5E03\u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u8BBE\u7F6EKey\u5BF9\u5E94\u7684\u503C\uFF0C\u53EA\u80FD\u662Falways\u3002

\u8BF7\u6C42\u7684Cookie\u4E3A\`demo=always\`\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-cookie: "demo"
  name: demo-canary
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

### \u57FA\u4E8E\u6743\u91CD\u7070\u5EA6\u53D1\u5E03
- higress.io/canary-weight\uFF1A\u8BBE\u7F6E\u8BF7\u6C42\u5230\u6307\u5B9A\u670D\u52A1\u7684\u767E\u5206\u6BD4\uFF08\u503C\u4E3A0~100\u7684\u6574\u6570\uFF09
- higress.io/canary-weight-total\uFF1A\u8BBE\u7F6E\u6743\u91CD\u603B\u548C\uFF0C\u9ED8\u8BA4\u4E3A100

\u914D\u7F6E\u7070\u5EA6\u670D\u52A1demo-service-canary-v1\u7684\u6743\u91CD\u4E3A30%\uFF0C\u914D\u7F6E\u7070\u5EA6\u670D\u52A1demo-service-canary-v2\u7684\u6743\u91CD\u4E3A20%\uFF0C\u914D\u7F6E\u6B63\u5F0F\u670D\u52A1demo-service\u7684\u6743\u91CD\u4E3A50%\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-weight: "30"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-weight: "20"
  name: demo-canary-v2
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v2
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

## \u8DE8\u57DF
\u8DE8\u57DF\u8D44\u6E90\u5171\u4EABCORS\uFF08Cross-Origin Resource Sharing\uFF09\u662F\u6307\u5141\u8BB8Web\u5E94\u7528\u670D\u52A1\u5668\u8FDB\u884C\u8DE8\u57DF\u8BBF\u95EE\u63A7\u5236\uFF0C\u4ECE\u800C\u5B9E\u73B0\u8DE8\u57DF\u6570\u636E\u5B89\u5168\u4F20\u8F93\u3002
- higress.io/enable-cors\uFF1A"true" or "false"\u3002\u5F00\u542F\u6216\u5173\u95ED\u8DE8\u57DF\u3002
- higress.io/cors-allow-origin\uFF1A\u5141\u8BB8\u7684\u7B2C\u4E09\u65B9\u7AD9\u70B9\uFF0C\u652F\u6301\u6CDB\u57DF\u540D\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u652F\u6301\u901A\u914D\u7B26*\u3002\u9ED8\u8BA4\u503C\u4E3A*\uFF0C\u5373\u5141\u8BB8\u6240\u6709\u7B2C\u4E09\u65B9\u7AD9\u70B9\u3002
- higress.io/cors-allow-methods\uFF1A\u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5982GET\u3001POST\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u652F\u6301\u901A\u914D\u7B26*\u3002\u9ED8\u8BA4\u503C\u4E3AGET, PUT, POST, DELETE, PATCH, OPTIONS\u3002
- higress.io/cors-allow-headers\uFF1A\u5141\u8BB8\u7684\u8BF7\u6C42\u5934\u90E8\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u652F\u6301\u901A\u914D\u7B26*\u3002\u9ED8\u8BA4\u503C\u4E3ADNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization\u3002
- higress.io/cors-expose-headers\uFF1A\u5141\u8BB8\u7684\u54CD\u5E94\u5934\u90E8\uFF0C\u9017\u53F7\u5206\u9694\u3002
- higress.io/cors-allow-credentials\uFF1A"true" or "false"\u3002\u662F\u5426\u5141\u8BB8\u643A\u5E26\u51ED\u8BC1\u4FE1\u606F\u3002\u9ED8\u8BA4\u5141\u8BB8\u3002
- higress.io/cors-max-age\uFF1A\u9884\u68C0\u7ED3\u679C\u7684\u6700\u5927\u7F13\u5B58\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF1B\u9ED8\u8BA4\u503C\u4E3A1728000\u3002


\u8DE8\u57DF\u8BF7\u6C42\u88AB\u9650\u5236\u4E3A\u53EA\u80FD\u6765\u81EAexample.com\u57DF\u7684\u8BF7\u6C42\uFF0C\u5E76\u4E14HTTP\u65B9\u6CD5\u53EA\u80FD\u662FGET\u548CPOST\uFF0C\u5141\u8BB8\u7684\u8BF7\u6C42\u5934\u90E8\u4E3AX-Foo-Bar\uFF0C\u4E0D\u5141\u8BB8\u643A\u5E26\u51ED\u8BC1\u4FE1\u606F\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/enable-cors: "true"
    higress.io/cors-allow-origin: "example.com"
    higress.io/cors-allow-methods: "GET,POST"
    higress.io/cors-allow-headers: "X-Foo-Bar"
    higress.io/cors-allow-credentials: "false"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

## Rewrite\u91CD\u5199Path\u548CHost
\u5728\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u76EE\u6807\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u91CD\u5199\u53EF\u4EE5\u4FEE\u6539\u539F\u59CB\u8BF7\u6C42\u7684\u8DEF\u5F84\uFF08Path\uFF09\u548C\u4E3B\u673A\u57DF\uFF08Host)\u3002
- higress.io/rewrite-target\uFF1A\u91CD\u5199Path\uFF0C\u652F\u6301\u6355\u83B7\u7EC4\uFF08Capture Group)\u3002
- higress.io/upstream-vhost\uFF1A\u91CD\u5199Host\u3002

### Rewrite\u91CD\u5199Path
1. \u5C06\u8BF7\u6C42\`example.com/test\`\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u91CD\u5199\u4E3A\`example.com/dev\`
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/dev"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. \u5C06\u8BF7\u6C42\`example.com/v1/app\`\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u53BB\u6389Path\u524D\u7F00/v1
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/$2"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /v1(/|$)(.*)
            pathType: ImplementationSpecific
\`\`\`

3. \u5C06\u8BF7\u6C42\`example.com/v1/app\`\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u5C06Path\u524D\u7F00/v1\u66F4\u6539\u4E3A/v2
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/rewrite-target: "/v2/$2"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /v1(/|$)(.*)
            pathType: ImplementationSpecific
\`\`\`

### Rewrite\u91CD\u5199Host
\u5C06\u8BF7\u6C42\`example.com/test\`\u5728\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u91CD\u5199\u4E3A\`test.com/test\`
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-vhost: "test.com"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## \u91CD\u5B9A\u5411
\u901A\u8FC7\u91CD\u5B9A\u5411\u53EF\u4EE5\u5C06\u539F\u59CB\u5BA2\u6237\u7AEF\u8BF7\u6C42\u66F4\u6539\u4E3A\u76EE\u6807\u8BF7\u6C42\u3002
### \u914D\u7F6EHTTP\u91CD\u5B9A\u5411\u81F3HTTPS
- higress.io/ssl-redirect\uFF1AHTTP\u91CD\u5B9A\u5411\u5230HTTPS
- higress.io/force-ssl-redirect: HTTP\u91CD\u5B9A\u5411\u5230HTTPS
> \u8BF4\u660E\uFF1AHigress\u5BF9\u4E8E\u4EE5\u4E0A\u4E24\u4E2A\u6CE8\u89E3\u4E0D\u533A\u5206\u5BF9\u5F85\uFF0C\u90FD\u662F\u5F3A\u5236\u5C06HTTP\u91CD\u5B9A\u5411\u5230HTTPS\u3002

\u5C06\u8BF7\u6C42\`http://example.com/test\`\u91CD\u5B9A\u5411\u4E3A\`https://example.com/test\`\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/ssl-redirect: "true"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

### \u6C38\u4E45\u91CD\u5B9A\u5411
- higress.io/permanent-redirect\uFF1A\u6C38\u4E45\u91CD\u5B9A\u5411\u7684\u76EE\u6807url\uFF0C\u5FC5\u987B\u5305\u542Bscheme\uFF08http or https)\u3002
- higress.io/permanent-redirect-code\uFF1A\u6C38\u4E45\u91CD\u5B9A\u5411\u7684HTTP\u72B6\u6001\u7801\uFF0C\u9ED8\u8BA4\u4E3A301\u3002

\u5C06\u8BF7\u6C42\`http://example.com/test\`\u6C38\u4E45\u91CD\u5B9A\u5411\u4E3A\`http://example.com/app\`\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/permanent-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

### \u4E34\u65F6\u91CD\u5B9A\u5411
- higress.io/temporal-redirect\uFF1A\u4E34\u65F6\u91CD\u5B9A\u5411\u7684\u76EE\u6807url\uFF0C\u5FC5\u987B\u5305\u542Bscheme\uFF08http or https)\u3002
  
\u5C06\u8BF7\u6C42\`http://example.com/test\`\u4E34\u65F6\u91CD\u5B9A\u5411\u4E3A\`http://example.com/app\`\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/temporal-redirect: "http://example.com/app"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Header\u63A7\u5236
\u901A\u8FC7Header\u63A7\u5236\uFF0C\u60A8\u53EF\u4EE5\u5728\u8F6C\u53D1\u8BF7\u6C42\u5230\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\u5BF9\u8BF7\u6C42Header\u8FDB\u884C\u589E\u5220\u6539\uFF0C\u5728\u6536\u5230\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u65F6\u5BF9\u54CD\u5E94Header\u8FDB\u884C\u589E\u5220\u6539\u3002
### \u8BF7\u6C42Header\u63A7\u5236
- higress.io/request-header-control-add\uFF1A\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u6DFB\u52A0\u6307\u5B9AHeader\u3002\u82E5\u8BE5Header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u62FC\u63A5\u5728\u539F\u6709\u503C\u540E\u9762\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
  - \u5355\u4E2AHeader\uFF1AKey Value
  - \u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C
- higress.io/request-header-control-update\uFF1A\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u4FEE\u6539\u6307\u5B9AHeader\u3002\u82E5\u8BE5header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u8986\u76D6\u539F\u6709\u503C\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
  - \u5355\u4E2AHeader\uFF1AKey Value
  - \u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C
- higress.io/request-header-control-remove\uFF1A\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u5220\u9664\u6307\u5B9AHeader\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
  - \u5355\u4E2AHeader\uFF1AKey
  - \u591A\u4E2AHeader\uFF1A\u9017\u53F7\u5206\u9694

1. \u5BF9\u4E8E\u8BF7\u6C42\`example.com/test\`\u6DFB\u52A0\u4E24\u4E2AHeader\uFF0C\`foo: bar\`\u548C\`test: true\`\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/request-header-control-add: |
      foo bar
      test true
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. Header\u63A7\u5236\u53EF\u4EE5\u7ED3\u5408\u7070\u5EA6\u53D1\u5E03\uFF0C\u5BF9\u7070\u5EA6\u6D41\u91CF\u8FDB\u884C\u67D3\u8272\u3002\u8BF7\u6C42Header\u4E3A\`higress\uFF1Av1\`\u65F6\u5C06\u8BBF\u95EE\u7070\u5EA6\u670D\u52A1demo-service-canary-v1\uFF0C\u5E76\u6DFB\u52A0Header\uFF0C\`stage: gray\`\uFF1B\u5176\u4ED6\u60C5\u51B5\u5C06\u8BBF\u95EE\u6B63\u5F0F\u670D\u52A1demo-service\uFF0C\u5E76\u6DFB\u52A0Header\uFF0C\`stage: production\`\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/canary: "true"
    higress.io/canary-by-header: "higress"
    higress.io/canary-by-header-value: "v1"
    higress.io/request-header-control-add: "stage gray"
  name: demo-canary-v1
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service-canary-v1
                port: 
                  number: 80
            path: /hello
            pathType: Exact
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/request-header-control-add: "stage production"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /hello
            pathType: Exact
\`\`\`

### \u54CD\u5E94Header\u63A7\u5236
- higress.io/response-header-control-add\uFF1A\u8BF7\u6C42\u5728\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u4E4B\u540E\u5E76\u4E14\u8F6C\u53D1\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u6DFB\u52A0\u6307\u5B9AHeader\u3002\u82E5\u8BE5Header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u62FC\u63A5\u5728\u539F\u6709\u503C\u540E\u9762\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
  - \u5355\u4E2AHeader\uFF1AKey Value
  - \u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C
- higress.io/response-header-control-update\uFF1A\u8BF7\u6C42\u5728\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u4E4B\u540E\u5E76\u4E14\u8F6C\u53D1\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u4FEE\u6539\u6307\u5B9AHeader\u3002\u82E5\u8BE5header\u5B58\u5728\uFF0C\u5219\u5176\u503C\u8986\u76D6\u539F\u6709\u503C\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
  - \u5355\u4E2AHeader\uFF1AKey Value
  - \u591A\u4E2AHeader\uFF1A\u4F7F\u7528yaml\u7279\u6B8A\u7B26\u53F7 |\uFF0C\u6BCF\u5BF9Key Value\u5355\u72EC\u5904\u4E8E\u4E00\u884C
- higress.io/response-header-control-remove\uFF1A\u8BF7\u6C42\u5728\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u4E4B\u540E\u5E76\u4E14\u8F6C\u53D1\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u5220\u9664\u6307\u5B9AHeader\u3002\u8BED\u6CD5\u5982\u4E0B\uFF1A
  - \u5355\u4E2AHeader\uFF1AKey
  - \u591A\u4E2AHeader\uFF1A\u9017\u53F7\u5206\u9694

\u5BF9\u4E8E\u8BF7\u6C42\`example.com/test\`\u7684\u54CD\u5E94\u5220\u9664\`Header\uFF1Areq-cost-time\`\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/response-header-control-remove: "req-cost-time"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## \u91CD\u8BD5
Higress\u63D0\u4F9B\u8DEF\u7531\u7EA7\u522B\u7684\u91CD\u8BD5\u8BBE\u7F6E\uFF0C\u53EF\u4EE5\u4E3A\u51FA\u9519\u7684\u8BF7\u6C42\u8C03\u7528\u81EA\u52A8\u8FDB\u884C\u91CD\u8BD5\u3002\u60A8\u53EF\u4EE5\u6309\u9700\u8BBE\u7F6E\u91CD\u8BD5\u6761\u4EF6\uFF0C\u4F8B\u5982\u5EFA\u7ACB\u8FDE\u63A5\u5931\u8D25\uFF0C\u6216\u8005\u540E\u7AEF\u670D\u52A1\u4E0D\u53EF\u7528\u4EE5\u53CA\u5BF9\u6307\u5B9AHTTP\u72B6\u6001\u7801\u7684\u54CD\u5E94\u7B49\u8FDB\u884C\u8BF7\u6C42\u91CD\u8BD5\u3002
- higress.io/proxy-next-upstream-tries\uFF1A\u8BF7\u6C42\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u3002\u9ED8\u8BA43\u6B21\u3002
- higress.io/proxy-next-upstream-timeout\uFF1A\u8BF7\u6C42\u91CD\u8BD5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u672A\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002
- higress.io/proxy-next-upstream\uFF1A\u8BF7\u6C42\u91CD\u8BD5\u6761\u4EF6\uFF0C\u9017\u53F7\u5206\u9694\uFF1B\u9ED8\u8BA4\u503C\u4E3A"error,timeout"\u3002\u5408\u6CD5\u503C\u5982\u4E0B\uFF1A
  - error\uFF1A\u5EFA\u7ACB\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u6C42\u51FA\u95195xx\u3002
  - timeout\uFF1A\u5EFA\u7ACB\u8FDE\u63A5\u8D85\u65F6\uFF0C\u8BF7\u6C42\u51FA\u95195xx\u3002
  - invalid_header\uFF1A\u8BF7\u6C42\u51FA\u95195xx\u3002
  - http_xxx\uFF1A\u9488\u5BF9\u5177\u4F53\u54CD\u5E94\u72B6\u6001\u7801\u7684\u60C5\u51B5\u8FDB\u884C\u91CD\u8BD5\u3002\u4F8B\u5982http_502\uFF0Chttp_403\u3002
  - non_idempotent\uFF1A\u5BF9\u4E8E\u975E\u5E42\u7B49\u8BF7\u6C42\u51FA\u9519\u65F6\u8FDB\u884C\u91CD\u8BD5\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CHigress\u9488\u5BF9\u975E\u5E42\u7B49POST\u3001PATCH\u8BF7\u6C42\u51FA\u9519\u65F6\u4E0D\u4F1A\u8FDB\u884C\u91CD\u8BD5\uFF0C\u914D\u7F6Enon_idempotent\u53EF\u4EE5\u5F00\u542F\u91CD\u8BD5\u3002
  - off\uFF1A\u5173\u95ED\u91CD\u8BD5\u3002

\u8BBE\u7F6E\`example/test\`\u8BF7\u6C42\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u4E3A2\uFF0C\u91CD\u8BD5\u8D85\u65F6\u65F6\u95F4\u4E3A5s\uFF0C\u53EA\u6709\u5728\u54CD\u5E94\u72B6\u6001\u7801\u4E3A502\u624D\u91CD\u8BD5\uFF0C\u5E76\u4E14\u5F00\u542F\u975E\u5E42\u7B49\u91CD\u8BD5\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-next-upstream-tries: "2"
    higress.io/proxy-next-upstream-timeout: "5"
    higress.io/proxy-next-upstream: "http_502,non_idempotent"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## \u8D85\u65F6
Higress\u63D0\u4F9B\u8DEF\u7531\u7EA7\u522B\u7684\u8D85\u65F6\u8BBE\u7F6E\uFF0C\u4E0Enginx ingress\u4E0D\u540C\uFF0C\u6CA1\u6709\u533A\u5206\u8FDE\u63A5/\u8BFB\u5199\u8D85\u65F6\uFF0C\u800C\u662F\u9762\u5411\u7684\u63A5\u53E3\u5904\u7406\u603B\u5EF6\u65F6\u8FDB\u884C\u914D\u7F6E\uFF0C\u5728\u672A\u8FDB\u884C\u914D\u7F6E\u65F6\u9ED8\u8BA4\u4E0D\u9650\u5236\uFF0C\u4F8B\u5982\u540E\u7AEF\u672A\u8FD4\u56DE\u5E94\u7B54\uFF0C\u7F51\u5173\u5C06\u65E0\u9650\u7B49\u5F85\u3002

\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A5s\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/timeout: "5"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## \u5355\u673A\u9650\u6D41

> **\u63D0\u793A**
> Higress\u5546\u4E1A\u7248\u5177\u5907\u5168\u5C40\u9650\u6D41\u80FD\u529B\uFF0C\u8BE6\u60C5\u67E5\u770B[\u5546\u4E1A\u7248\u6587\u6863](https://help.aliyun.com/zh/mse/user-guide/advanced-usage-of-mse-ingress?spm=a2c4g.11186623.0.0.2e3a3db3eYcspD#862f08d03d4d3)\u4E2D\u5168\u5C40\u9650\u6D41\u4E00\u8282\u7684\u4ECB\u7ECD

\u652F\u6301\u9488\u5BF9\u8DEF\u7531\u7EA7\u522B\u7684\u5355\u673A\u9650\u6D41\u7B56\u7565\uFF0C\u5728\u8BBE\u5B9A\u7684\u65F6\u95F4\u5468\u671F\u5185\uFF0C\u9650\u5236\u6BCF\u4E2A\u7F51\u5173\u526F\u672C\u5339\u914D\u5728\u67D0\u4E2A\u8DEF\u7531\u4E0A\u7684\u8BF7\u6C42\u6570\u91CF\u4E0D\u5927\u4E8E\u9608\u503C\u3002\u8BE5\u9650\u6D41\u662F\u9488\u5BF9\u5355\u673A\u7EA7\u522B\uFF0C\u5373\u914D\u7F6E\u7684\u9608\u503C\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u8FDB\u884C\u6D41\u63A7\u3002

- higress.io/route-limit-rpm\uFF1A\u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002
- higress.io/route-limit-rps\uFF1A\u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002
- higress.io/route-limit-burst-multiplier\uFF1A\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u7684\u56E0\u5B50\uFF0C\u9ED8\u8BA4\u4E3A5\u3002

\u4F8B\u5982\uFF1A

\u9650\u5236example.com/test\u7684\u8BF7\u6C42\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6570\u4E3A100\uFF0C\u77AC\u65F6\u8BF7\u6C42\u6570200\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/route-limit-rpm: "100"
    higress.io/route-limit-burst-multiplier: "2"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

\u9650\u5236example.com/test\u7684\u8BF7\u6C42\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6570\u4E3A10\uFF0C\u77AC\u65F6\u8BF7\u6C42\u657050\u3002\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/route-limit-rps: "10"
    # \u9ED8\u8BA4\u4E3A5
    # higress.io/route-limit-burst-multiplier: "5"
  name: demo
spec:
  ingressClassName: mse
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`


## \u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u534F\u8BAE\uFF1AHTTPS\u6216GRPC
Higress\u9ED8\u8BA4\u4F7F\u7528HTTP\u534F\u8BAE\u8F6C\u53D1\u8BF7\u6C42\u5230\u540E\u7AEF\u4E1A\u52A1\u5BB9\u5668\u3002\u5F53\u60A8\u7684\u4E1A\u52A1\u5BB9\u5668\u4E3AHTTPS\u534F\u8BAE\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3\`higress.io/backend-protocol: "HTTPS"\`\uFF1B\u5F53\u60A8\u7684\u4E1A\u52A1\u5BB9\u5668\u4E3AGRPC\u670D\u52A1\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3\`higress.io/backend-protocol: "GRPC"\`\u3002
> \u8BF4\u660E\uFF1A\u76F8\u6BD4Nginx Ingress\u7684\u4F18\u52BF\uFF0C\u5982\u679C\u60A8\u7684\u540E\u7AEF\u670D\u52A1\u6240\u5C5E\u7684K8s Service\u8D44\u6E90\u4E2D\u5173\u4E8EPort Name\u7684\u5B9A\u4E49\u4E3Agrpc\u6216http2\uFF0C\u60A8\u65E0\u9700\u914D\u7F6E\u6CE8\u89E3higress.io/backend-protocol: "GRPC"\uFF0CHigress\u4F1A\u81EA\u52A8\u4F7F\u7528GRPC\u6216\u8005HTTP2\u3002

1. \u8BF7\u6C42\`example.com/test\`\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4F7F\u7528HTTPS\u534F\u8BAE\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: "HTTPS"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /
            pathType: Exact
\`\`\`

2. \u8BF7\u6C42\`example/grpcbin.GRPCBin\`\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4F7F\u7528GRPC\u534F\u8BAE\u3002

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: "GRPC"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /grpcbin.GRPCBin
            pathType: Prefix
\`\`\`

## \u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5
\u8D1F\u8F7D\u5747\u8861\u51B3\u5B9A\u7740\u7F51\u5173\u5728\u8F6C\u53D1\u8BF7\u6C42\u81F3\u540E\u7AEF\u670D\u52A1\u65F6\u5982\u4F55\u9009\u62E9\u8282\u70B9\u3002
### \u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5
- higress.io/load-balance\uFF1A\u540E\u7AEF\u670D\u52A1\u7684\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002\u9ED8\u8BA4\u4E3Around_robin\u3002\u5408\u6CD5\u503C\u5982\u4E0B\uFF1A
  - round_robin\uFF1A\u57FA\u4E8E\u8F6E\u8BE2\u7684\u8D1F\u8F7D\u5747\u8861\u3002
  - least_conn\uFF1A\u57FA\u4E8E\u6700\u5C0F\u8BF7\u6C42\u6570\u7684\u8D1F\u8F7D\u5747\u8861\u3002
  - random\uFF1A\u57FA\u4E8E\u968F\u673A\u7684\u8D1F\u8F7D\u5747\u8861\u3002

\u8BBE\u7F6E\u540E\u7AEF\u670D\u52A1demo-service\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u4E3Aleast_conn\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/load-balance: "least_conn"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /order
            pathType: Exact
\`\`\`

### \u57FA\u4E8E\u4E00\u81F4\u6027Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5
\u57FA\u4E8E\u4E00\u81F4\u6027Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u5177\u5907\u8BF7\u6C42\u4EB2\u548C\u6027\uFF0C\u5177\u6709\u76F8\u540C\u7279\u5F81\u7684\u8BF7\u6C42\u4F1A\u59CB\u7EC8\u8D1F\u8F7D\u5230\u76F8\u540C\u8282\u70B9\u4E0A\u3002Higress\u652F\u6301\u57FA\u4E8E\u90E8\u5206Nginx \u53D8\u91CF\u3001\u8BF7\u6C42Header\u548C\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570\u4F5C\u4E3AHash Key\u3002
- higress.io/upstream-hash-by\uFF1A\u57FA\u4E8E\u4E00\u81F4Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002Higress\u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A
  - \u652F\u6301\u914D\u7F6E\u90E8\u5206nginx\u53D8\u91CF\uFF1A
    - $request_uri\uFF1A\u8BF7\u6C42\u7684Path\uFF08\u5305\u62EC\u8DEF\u5F84\u53C2\u6570\uFF09\u4F5C\u4E3AHash Key
    - $host\uFF1A\u8BF7\u6C42\u7684Host\u4F5C\u4E3AHash Key
    - $remote_addr\uFF1A\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP\u4F5C\u4E3AHash Key
  - \u57FA\u4E8E\u8BF7\u6C42header\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$http_headerName\u3002
  - \u57FA\u4E8E\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$arg_varName\u3002

1. \u57FA\u4E8E\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP\u4F5C\u4E3AHash Key\uFF0C\u540C\u4E00\u4E2A\u5BA2\u6237\u7AEFIP\u7684\u8BF7\u6C42\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$remote_addr"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. \u57FA\u4E8E\u8BF7\u6C42Header x-stage\u4F5C\u4E3AHash key\uFF0C\u5E26\u6709x-stage\u5934\u90E8\u7684\u8BF7\u6C42\u4E14\u503C\u76F8\u540C\u7684\u8BF7\u6C42\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$http_x-stage"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

3. \u57FA\u4E8E\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570 x-stage\u4F5C\u4E3AHash key\uFF0C\u5E26\u6709\u8DEF\u5F84\u53C2\u6570x-stage\u7684\u8BF7\u6C42\u4E14\u503C\u76F8\u540C\u7684\u8BF7\u6C42\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/upstream-hash-by: "$arg_x-stage"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## Cookie\u4EB2\u548C\u6027 \uFF08\u4F1A\u8BDD\u4FDD\u6301\uFF09
\u5177\u5907\u76F8\u540C\u7684Cookie\u7684\u8BF7\u6C42\u4F1A\u88AB\u7F51\u5173\u59CB\u7EC8\u8D1F\u8F7D\u5230\u540C\u4E00\u4E2A\u8282\u70B9\uFF0C\u5E76\u4E14\u5982\u679C\u7B2C\u4E00\u6B21\u8BBF\u95EE\u643A\u5E26Cookie\uFF0CHigress\u4F1A\u5728\u7B2C\u4E00\u6B21\u54CD\u5E94\u65F6\u4E3A\u5BA2\u6237\u7AEF\u751F\u6210\u4E00\u4E2ACookie\uFF0C\u7528\u6765\u4FDD\u8BC1\u540E\u7EED\u7684\u8BF7\u6C42\u88AB\u7F51\u5173\u59CB\u7EC8\u8D1F\u8F7D\u5230\u76F8\u540C\u8282\u70B9\u3002
- higress.io/affinity\uFF1A\u4EB2\u548C\u6027\u79CD\u7C7B\uFF0C\u76EE\u524D\u53EA\u652F\u6301cookie\uFF0C\u9ED8\u8BA4\u4E3Acookie\u3002
- higress.io/affinity-mode\uFF1A\u4EB2\u548C\u6027\u6A21\u5F0F\uFF0CHigress\u76EE\u524D\u53EA\u652F\u6301balanced\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3Abalanced\u6A21\u5F0F\u3002
- higress.io/session-cookie-name\uFF1A\u914D\u7F6E\u6307\u5B9ACookie\u7684\u503C\u4F5C\u4E3AHash Key\uFF0C\u9ED8\u8BA4\u4E3AINGRESSCOOKIE
- higress.io/session-cookie-path\uFF1A\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684Path\u503C\uFF0C\u9ED8\u8BA4\u4E3A/
- higress.io/session-cookie-max-age\uFF1A\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002
- higress.io/session-cookie-expires\uFF1A\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002
> \u8BF4\u660E\uFF1Amax-age\u548Cexpires\u90FD\u53EF\u4EE5\u7528\u6765\u6307\u5B9Acookie\u8FC7\u671F\u65F6\u95F4\u3002\u5F53session-cookie-max-age\u548Csession-cookie-expires\u540C\u65F6\u914D\u7F6E\u65F6\uFF0CHigress\u4F18\u5148\u9009\u53D6session-cookie-max-age\u4F5C\u4E3A\u8FC7\u671F\u65F6\u95F4\u3002

1. \u5F00\u542FCookie\u4EB2\u548C\u6027\uFF0C\u5229\u7528Higress\u7684\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5373Cookie\u7684\u540D\u5B57\u4E3AINGRESSCOOKIE\uFF0CPath\u4E3A/\uFF0CCookie\u7684\u751F\u547D\u5468\u671F\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/affinity: "cookie"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

2. \u5F00\u542FCookie\u4EB2\u548C\u6027\uFF0CCookie\u7684\u540D\u5B57\u4E3Atest\uFF0CPath\u4E3A/\uFF0CCookie\u7684\u8FC7\u671F\u65F6\u95F4\u4E3A10s\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/affinity: "cookie"
    higress.io/session-cookie-name: "test"
    higress.io/session-cookie-max-age: "10"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`

## \u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u53CC\u5411\u8BA4\u8BC1(MTLS)

\u5F53\u5F00\u542FHTTPS\u65F6\uFF0C\u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u9ED8\u8BA4\u662F\u57FA\u4E8E\u5355\u5411TLS\u8BA4\u8BC1\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u6CE8\u89E3\u5F00\u542F\u53CC\u5411TLS\u8BA4\u8BC1\uFF0C\u5373\u8BA9\u670D\u52A1\u7AEF\u540C\u65F6\u6821\u9A8C\u5BA2\u6237\u7AEF\u7684\u5408\u6CD5\u6027\u3002

- higress.io/auth-tls-secret: \u7F51\u5173\u4F7F\u7528\u7684CA\u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1MTLS\u63E1\u624B\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u8BC1\u4E66\u3002\u8BE5\u6CE8\u89E3\u4E3B\u8981\u5E94\u7528\u4E8E\u7F51\u5173\u9700\u8981\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8EAB\u4EFD\u7684\u573A\u666F\u3002secret\u540D\u5B57\u683C\u5F0F\u5FC5\u987B\u662F\uFF1A(\u8BE5\u57DF\u540D\u8BC1\u4E66\u6240\u5728\u7684secret\u7684\u540D\u5B57)-cacert

\u4F8B\u5982:
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # \u8FD9\u91CC\u7684\u8981\u6C42\u662F\u5FC5\u987B\u4EE5\u57DF\u540D\u4E0A\u914D\u7F6E\u8BC1\u4E66secret\u540D\u79F0\u540E\u7F00\u52A0\u4E0A-cacert
    higress.io/auth-tls-secret: tls-secret-cacert
  name: bar
  namespace: default
spec:
  ingressClassName: higress
  rules:
  - host: bar.com
    http:
      paths:
      - backend:
          service:
            name: bar-service
            port:
              number: 5678
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - bar.com
    secretName: tls-secret
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
  namespace: default
spec:
  ingressClassName: higress
  rules:
  - host: foo.com
    http:
      paths:
      - backend:
          service:
            name: foo-service
            port:
              number: 5678
        path: /
        pathType: Prefix
  tls:
  - hosts:
    - foo.com
    secretName: tls-secret
\`\`\`

tls-secret-cacert \u8FD9\u4E2A secret \u7684\u5185\u5BB9\u4E2D\u5FC5\u987B\u6709 cacert \u8FD9\u4E2Akey\uFF0C\u4F8B\u5982\uFF1A
\`\`\`yaml
apiVersion: v1
data:
  cacert: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURDekNDQWZPZ0F3SUJBZ0lVQ0tMSGM5SFhBbEFYNUdFR2dHVk1zVXhzUFhBd0RRWUpLb1pJaHZjTkFRRUwKQlFBd0ZURVRNQkVHQTFVRUF3d0tSWGhoYlhCc1pTQkRRVEFlRncweU16RXlNakl3T1RNek1ESmFGdzB5TkRFeQpNakV3T1RNek1ESmFNQlV4RXpBUkJnTlZCQU1NQ2tWNFlXMXdiR1VnUTBFd2dnRWlNQTBHQ1NxR1NJYjNEUUVCCkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDaW1jaWQ4VWx4VzA4a1RTcmc1UnAzTlMvSmFMQWt3bVZzeWdEanc0TUEKSjh6Q2FWWHFmU2xpbCtTRFdLcllRYUtPQ1JRWjlWdXBwODl4UnRJTkpUVmlBZUpHYzh6SDY2Sy82aUZJZ2N4ZQplczVaaDdqQXdENzZ4eEtMUjJPbkRSb0xpVlFVOGxkekVNclVHRytCOXJ1TzFsNjkxNlRjQ0dqS3VGUklQNzJCCjlJcEI0ekxZUUNLWldmZ1cxVmU0alpYTUZ0MVhUc0dWdkhCaEt0MSt5eXMrNnc3WndxMW43NysxdXcya2dmM3cKaXNCbXBzTlRPVVJSZzVvdEdYVUUxaGl3dC9KeW9PQkt1YmVyY2dwd05OYzAvNHZ6eWRHMm83UFFpTHcyallPbwppbFptYUZzVXEyclU4S0hCdWlSbVkyTXlOWEU2R0liY29sVGZRQWM2NE5EWEFnTUJBQUdqVXpCUk1CMEdBMVVkCkRnUVdCQlNOZC9vYTkyemFGWFNaRVJoRXJMSElqRE8zYWpBZkJnTlZIU01FR0RBV2dCU05kL29hOTJ6YUZYU1oKRVJoRXJMSElqRE8zYWpBUEJnTlZIUk1CQWY4RUJUQURBUUgvTUEwR0NTcUdTSWIzRFFFQkN3VUFBNElCQVFBTwpjMDNIYWFDRHhhR0phdzlrYkJxMW1DbUVvR3pWZ0loYkhveTQ0Q0IxbGpnS0xOWHo2bnZ5bDVCdWRzWXJkT1lXCmJMMEJGdGxLbWRqeUFHemtnOThGSkpVNExTVFM1ZDNySlBkQU1lcXFOQ2R5NVh0c2l2VDlIbzh5QVBiUGFmZlkKTmozN29JVEQrdXhQbTNVMGhOTU5YSGdGdnJ4bGV6U2MyOHFWL1VxVDBWcnNJR3IyblNiaEYrR3g1WS92aTZocQp5RTJsYWJXdDQ3VlBYcTNFL2lHRWhTSmFndTdhN2xBSDhYWWlqMUtCMkU4bjlERy80R2ZDMEVpTnNXbUpzWVNjCk9tdXlmRGpXaHQ2LzlUVkh4YkNZMzZGQ08vOTcraThqUGhxVlkxRlJzUG5WRUtiRXBNemdXb3Y0UXNKeHoxS3gKdHN2eHlVRnJsaU5wUk1OQmVEODIKLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=
kind: Secret
metadata:
  name: tls-secret-cacert
  namespace: default
type: Opaque
\`\`\`

## \u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u53CC\u5411\u8BA4\u8BC1\uFF08MTLS)
\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CHigress\u9ED8\u8BA4\u4F7F\u7528HTTP\u534F\u8BAE\u8F6C\u53D1\u8BF7\u6C42\u5230\u540E\u7AEF\u4E1A\u52A1\u5BB9\u5668\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3\`higress.io/backend-protocol: "HTTPS"\`\u914D\u7F6EHigress\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u4F7F\u7528HTTPS\u534F\u8BAE\uFF0C\u4F46\u8FD9\u662F\u5355\u5411TLS\uFF0C\u4E5F\u5C31\u662F\u8BF4\u53EA\u6709Higress\u4F1A\u9A8C\u8BC1\u540E\u7AEF\u670D\u52A1\u63D0\u4F9B\u7684\u8BC1\u4E66\uFF0C\u4E14\u4E00\u822C\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u8BC1\u4E66\u9700\u8981\u662F\u6743\u5A01CA\u7B7E\u53D1\u7684\u3002\u53E6\u4E00\u79CD\u66F4\u5B89\u5168\u7684\u6A21\u5F0F\u662F\u96F6\u4FE1\u4EFB\uFF0C\u7F51\u5173\u4F1A\u9A8C\u8BC1\u540E\u7AEF\u670D\u52A1\u7684\u8BC1\u4E66\u662F\u5426\u5408\u6CD5\uFF0C\u540C\u6837\u540E\u7AEF\u670D\u52A1\u4E5F\u4F1A\u9A8C\u8BC1\u7F51\u5173\u63D0\u4F9B\u7684\u8BC1\u4E66\u662F\u5426\u5408\u6CD5\uFF0C\u8FD9\u5C31\u662FMTLS\uFF0C\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u53CC\u5411\u8BA4\u8BC1\u3002

- higress.io/proxy-ssl-secret\uFF1A\u7F51\u5173\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5BF9\u7F51\u5173\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u683C\u5F0F\u4E3A secretNamespace/secretName\u3002
- higress.io/proxy-ssl-name\uFF1ATLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528\u7684SNI\u3002
- higress.io/proxy-ssl-server-name\uFF1Aon or off\u3002\u5F00\u542F\u6216\u5173\u95EDTLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528SNI\u3002

\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u53CC\u5411\u8BA4\u8BC1\uFF0C\u7F51\u5173\u4F7F\u7528\u7684secret name\u4E3Agateway-cert\uFF0C\u547D\u540D\u7A7A\u95F4\u4E3Adefault\u3002
\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/proxy-ssl-secret: "default/gateway-cert"
  name: demo
spec:
  ingressClassName: higress
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: Exact
\`\`\`
`},p=function(){return e},l=function(){return[{depth:2,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:2,slug:"\u7070\u5EA6\u53D1\u5E03",text:"\u7070\u5EA6\u53D1\u5E03"},{depth:3,slug:"\u57FA\u4E8Eheader\u7070\u5EA6\u53D1\u5E03",text:"\u57FA\u4E8EHeader\u7070\u5EA6\u53D1\u5E03"},{depth:3,slug:"\u57FA\u4E8Ecookie\u7070\u5EA6\u53D1\u5E03",text:"\u57FA\u4E8ECookie\u7070\u5EA6\u53D1\u5E03"},{depth:3,slug:"\u57FA\u4E8E\u6743\u91CD\u7070\u5EA6\u53D1\u5E03",text:"\u57FA\u4E8E\u6743\u91CD\u7070\u5EA6\u53D1\u5E03"},{depth:2,slug:"\u8DE8\u57DF",text:"\u8DE8\u57DF"},{depth:2,slug:"rewrite\u91CD\u5199path\u548Chost",text:"Rewrite\u91CD\u5199Path\u548CHost"},{depth:3,slug:"rewrite\u91CD\u5199path",text:"Rewrite\u91CD\u5199Path"},{depth:3,slug:"rewrite\u91CD\u5199host",text:"Rewrite\u91CD\u5199Host"},{depth:2,slug:"\u91CD\u5B9A\u5411",text:"\u91CD\u5B9A\u5411"},{depth:3,slug:"\u914D\u7F6Ehttp\u91CD\u5B9A\u5411\u81F3https",text:"\u914D\u7F6EHTTP\u91CD\u5B9A\u5411\u81F3HTTPS"},{depth:3,slug:"\u6C38\u4E45\u91CD\u5B9A\u5411",text:"\u6C38\u4E45\u91CD\u5B9A\u5411"},{depth:3,slug:"\u4E34\u65F6\u91CD\u5B9A\u5411",text:"\u4E34\u65F6\u91CD\u5B9A\u5411"},{depth:2,slug:"header\u63A7\u5236",text:"Header\u63A7\u5236"},{depth:3,slug:"\u8BF7\u6C42header\u63A7\u5236",text:"\u8BF7\u6C42Header\u63A7\u5236"},{depth:3,slug:"\u54CD\u5E94header\u63A7\u5236",text:"\u54CD\u5E94Header\u63A7\u5236"},{depth:2,slug:"\u91CD\u8BD5",text:"\u91CD\u8BD5"},{depth:2,slug:"\u8D85\u65F6",text:"\u8D85\u65F6"},{depth:2,slug:"\u5355\u673A\u9650\u6D41",text:"\u5355\u673A\u9650\u6D41"},{depth:2,slug:"\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u534F\u8BAEhttps\u6216grpc",text:"\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u534F\u8BAE\uFF1AHTTPS\u6216GRPC"},{depth:2,slug:"\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5",text:"\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5"},{depth:3,slug:"\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5",text:"\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5"},{depth:3,slug:"\u57FA\u4E8E\u4E00\u81F4\u6027hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5",text:"\u57FA\u4E8E\u4E00\u81F4\u6027Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5"},{depth:2,slug:"cookie\u4EB2\u548C\u6027-\u4F1A\u8BDD\u4FDD\u6301",text:"Cookie\u4EB2\u548C\u6027 \uFF08\u4F1A\u8BDD\u4FDD\u6301\uFF09"},{depth:2,slug:"\u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u53CC\u5411\u8BA4\u8BC1mtls",text:"\u7F51\u5173\u4E0E\u5BA2\u6237\u7AEF\u53CC\u5411\u8BA4\u8BC1(MTLS)"},{depth:2,slug:"\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u53CC\u5411\u8BA4\u8BC1mtls",text:"\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u53CC\u5411\u8BA4\u8BC1\uFF08MTLS)"}]},s=t((g,f,u)=>{const{layout:k,...d}=n;return d.file=a,d.url=i,o`${r()}${y(e)}`})});export{s as Content,x as __tla,p as compiledContent,s as default,a as file,n as frontmatter,l as getHeadings,c as rawContent,i as url};
