import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as v,__tla as y}from"./constant.D4Mjy2rC.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let e,p,a,n,d,l,i,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u8D85\u8BE6\u7EC6\u914D\u7F6E\u8DEF\u7531\u793A\u4F8B</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u56DE\u7B54\u95EE\u9898\uFF1AHigress\u8D85\u8BE6\u7EC6\u914D\u7F6E\u8DEF\u7531\u793A\u4F8B</p>
<p><strong>\u4F9D\u6258\u77E5\u8BC6\u5206\u6790\u95EE\u9898\u539F\u56E0\uFF1A</strong></p>
<p>\u7528\u6237\u5E0C\u671B\u4E86\u89E3\u5982\u4F55\u4F7F\u7528Higress\u8FDB\u884C\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EHeader\u63A7\u5236\u3001\u91CD\u8BD5\u3001\u8D85\u65F6\u3001\u4EE5\u53CA\u5355\u673A\u9650\u6D41\u7684\u914D\u7F6E\u793A\u4F8B\u3002\u8FD9\u4E9B\u914D\u7F6E\u80FD\u5E2E\u52A9\u63D0\u5347\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u901A\u8FC7\u7CBE\u7EC6\u5316\u7BA1\u7406\u8FDB\u51FA\u6D41\u91CF\u7684\u5404\u79CD\u7B56\u7565\u6765\u8FBE\u5230\u9884\u671F\u7684\u670D\u52A1\u8D28\u91CF\u3002</p>
<p><strong>\u8BE6\u7EC6\u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E\uFF1A</strong></p>
<h3 id="1-header\u63A7\u5236\u914D\u7F6E\u793A\u4F8B">1. Header\u63A7\u5236\u914D\u7F6E\u793A\u4F8B</h3>
<h4 id="\u8BF7\u6C42header\u63A7\u5236">\u8BF7\u6C42Header\u63A7\u5236</h4>
<ul>
<li><strong>\u76EE\u7684</strong>\uFF1A\u5728\u8BF7\u6C42\u8F6C\u53D1\u81F3\u540E\u7AEF\u524D\uFF0C\u589E\u5220\u6539\u8BF7\u6C42\u5934\u3002</li>
<li><strong>\u793A\u4F8B</strong>\uFF1A\u4E3A<code dir="auto">example.com/test</code>\u6DFB\u52A0<code dir="auto">foo: bar</code>\u548C<code dir="auto">test: true</code>\u4E24\u4E2AHeader\u3002</li>
</ul>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/request-header-control-add</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">foo bar</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">test true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/request-header-control-add: |\x7F      foo bar\x7F      test true\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: example.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: demo-service\x7F            port:\x7F              number: 80\x7F        path: /test\x7F        pathType: Exact"><div></div></button></div></figure></div>
<ul>
<li><strong>\u89E3\u91CA</strong>\uFF1A\u6B64\u914D\u7F6E\u4F1A\u5728\u8BF7\u6C42\u8F6C\u53D1\u5230<code dir="auto">demo-service</code>\u65F6\uFF0C\u4E3A\u8BF7\u6C42\u6DFB\u52A0<code dir="auto">foo: bar,test:true</code>\u3002</li>
</ul>
<h4 id="\u54CD\u5E94header\u63A7\u5236">\u54CD\u5E94Header\u63A7\u5236</h4>
<ul>
<li><strong>\u76EE\u7684</strong>\uFF1A\u5728\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u524D\uFF0C\u589E\u5220\u6539\u54CD\u5E94\u5934\u3002</li>
<li><strong>\u793A\u4F8B</strong>\uFF1A\u4E3A<code dir="auto">example.com/test</code>\u7684\u54CD\u5E94\u5220\u9664<code dir="auto">req-cost-time</code>\u8FD9\u4E2AHeader\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/response-header-control-remove</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"req-cost-time"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/response-header-control-remove: &#x22;req-cost-time&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: example.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: demo-service\x7F            port:\x7F              number: 80\x7F        path: /test\x7F        pathType: Exact"><div></div></button></div></figure></div>
<ul>
<li><strong>\u89E3\u91CA</strong>\uFF1A\u5F53\u8BF7\u6C42<code dir="auto">/test</code>\u7684\u54CD\u5E94\u88AB\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u4F1A\u79FB\u9664<code dir="auto">req-cost-time</code>\u5934\u90E8\u3002</li>
</ul>
<h3 id="2-\u91CD\u8BD5\u914D\u7F6E\u793A\u4F8B">2. \u91CD\u8BD5\u914D\u7F6E\u793A\u4F8B</h3>
<ul>
<li><strong>\u76EE\u7684</strong>\uFF1A\u4E3A\u9519\u8BEF\u8BF7\u6C42\u914D\u7F6E\u81EA\u52A8\u91CD\u8BD5\u673A\u5236\u3002</li>
<li><strong>\u793A\u4F8B</strong>\uFF1A\u8BBE\u7F6E<code dir="auto">example.com/test</code>\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u4E3A2\uFF0C\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2\uFF0C\u4EC5\u5728\u54CD\u5E94\u72B6\u6001\u7801\u4E3A502\u65F6\u91CD\u8BD5\uFF0C\u5E76\u5F00\u542F\u975E\u5E42\u7B49\u8BF7\u6C42\u7684\u91CD\u8BD5\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-next-upstream-tries</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-next-upstream-timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-next-upstream</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http_502,non_idempotent"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/proxy-next-upstream-tries: &#x22;2&#x22;\x7F    higress.io/proxy-next-upstream-timeout: &#x22;5&#x22;\x7F    higress.io/proxy-next-upstream: &#x22;http_502,non_idempotent&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: example.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: demo-service\x7F            port:\x7F              number: 80\x7F        path: /test\x7F        pathType: Exact"><div></div></button></div></figure></div>
<ul>
<li><strong>\u89E3\u91CA</strong>\uFF1A\u6B64\u914D\u7F6E\u786E\u4FDD\u4E86\u5F53\u8BF7\u6C42<code dir="auto">/test</code>\u9047\u5230502\u9519\u8BEF\u6216\u975E\u5E42\u7B49\u8BF7\u6C42\u5931\u8D25\u65F6\uFF0C\u6700\u591A\u4F1A\u81EA\u52A8\u91CD\u8BD52\u6B21\uFF0C\u6BCF\u6B21\u5C1D\u8BD5\u7B49\u5F85\u4E0D\u8D85\u8FC75\u79D2\u3002</li>
</ul>
<h3 id="3-\u8D85\u65F6\u914D\u7F6E\u793A\u4F8B">3. \u8D85\u65F6\u914D\u7F6E\u793A\u4F8B</h3>
<ul>
<li><strong>\u76EE\u7684</strong>\uFF1A\u9650\u5236\u63A5\u53E3\u5904\u7406\u7684\u603B\u5EF6\u8FDF\u65F6\u95F4\u3002</li>
<li><strong>\u793A\u4F8B</strong>\uFF1A\u4E3A<code dir="auto">example.com/test</code>\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">demo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/test</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Exact</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/timeout: &#x22;5&#x22;\x7F  name: demo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: example.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          service:\x7F            name: demo-service\x7F            port:\x7F              number: 80\x7F        path: /test\x7F        pathType: Exact"><div></div></button></div></figure></div>
<ul>
<li><strong>\u89E3\u91CA</strong>\uFF1A\u4EFB\u4F55\u5230\u8FBE<code dir="auto">/test</code>\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u57285\u79D2\u5185\u672A\u54CD\u5E94\uFF0CHigress\u5C06\u4F1A\u7EC8\u6B62\u8BE5\u8BF7\u6C42\u5E76\u8FD4\u56DE\u8D85\u65F6\u9519\u8BEF\u3002</li>
</ul>
<h3 id="4-\u5355\u673A\u9650\u6D41\u914D\u7F6E\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\u4F46\u57FA\u4E8Ehigress\u529F\u80FD\u63A8\u6D4B">4. \u5355\u673A\u9650\u6D41\u914D\u7F6E\uFF08\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\uFF0C\u4F46\u57FA\u4E8EHigress\u529F\u80FD\u63A8\u6D4B\uFF09</h3>
<p>\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u5355\u673A\u9650\u6D41\u7684\u914D\u7F6E\u793A\u4F8B\uFF0C\u4F46\u6839\u636EHigress\u4F5C\u4E3A\u9AD8\u6027\u80FDIngress\u63A7\u5236\u5668\u7684\u4E00\u822C\u7279\u6027\uFF0C\u5355\u673A\u9650\u6D41\u901A\u5E38\u6D89\u53CA\u5230\u914D\u7F6E\u6BCF\u4E2A\u540E\u7AEF\u670D\u52A1\u7684\u5E76\u53D1\u8FDE\u63A5\u6570\u6216\u8BF7\u6C42\u901F\u7387\u7B49\u6307\u6807\uFF0C\u8FD9\u53EF\u80FD\u9700\u8981\u901A\u8FC7Higress\u7684\u7279\u5B9A\u6CE8\u89E3\u6216\u5916\u90E8\u63D2\u4EF6\u6765\u5B9E\u73B0\u3002\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u5EFA\u8BAE\u67E5\u9605Higress\u5B98\u65B9\u6587\u6863\u6216\u793E\u533A\u6700\u4F73\u5B9E\u8DF5\u4EE5\u83B7\u53D6\u6700\u65B0\u4E14\u51C6\u786E\u7684\u6307\u5BFC\u4FE1\u606F\u3002</p>
<p><strong>\u603B\u7ED3\uFF1A</strong>
\u4EE5\u4E0A\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528Higress\u8FDB\u884C\u9AD8\u7EA7\u6D41\u91CF\u7BA1\u7406\uFF0C\u5305\u62EC\u8BF7\u6C42\u4E0E\u54CD\u5E94Header\u7684\u63A7\u5236\u3001\u8BF7\u6C42\u91CD\u8BD5\u7B56\u7565\u7684\u5B9A\u5236\u3001\u4EE5\u53CA\u63A5\u53E3\u8D85\u65F6\u7684\u8BBE\u5B9A\uFF0C\u8FD9\u4E9B\u90FD\u662F\u4FDD\u969C\u670D\u52A1\u8D28\u91CF\u548C\u7A33\u5B9A\u6027\u7684\u91CD\u8981\u624B\u6BB5\u3002\u5BF9\u4E8E\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\u7684\u5355\u673A\u9650\u6D41\u9700\u6C42\uFF0C\u5EFA\u8BAE\u8FDB\u4E00\u6B65\u63A2\u7D22Higress\u7684\u5B98\u65B9\u6587\u6863\u4EE5\u83B7\u53D6\u6700\u5408\u9002\u7684\u89E3\u51B3\u65B9\u6848\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1AHeader\u63A7\u5236\u3001\u91CD\u8BD5\u3001\u8D85\u65F6\u3001\u5355\u673A\u9650\u6D41-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16962" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16957",title:"higress \u8D85\u8BE6\u7EC6\u914D\u7F6E\u8DEF\u7531\u793A\u4F8B",date:"2024-09-26",category:"expertConsultation",description:"\u56DE\u7B54\u95EE\u9898\uFF1AHigress\u8D85\u8BE6\u7EC6\u914D\u7F6E\u8DEF\u7531\u793A\u4F8B**\u4F9D\u6258\u77E5\u8BC6\u5206\u6790\u95EE\u9898\u539F\u56E0\uFF1A**\u7528\u6237\u5E0C\u671B\u4E86\u89E3\u5982\u4F55\u4F7F\u7528Higress\u8FDB\u884C\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EHeader\u63A7\u5236\u3001\u91CD\u8BD5\u3001\u8D85\u65F6\u3001\u4EE5\u53CA\u5355\u673A\u9650\u6D41\u7684\u914D\u7F6E\u793A\u4F8B\u3002\u8FD9\u4E9B\u914D\u7F6E\u80FD\u5E2E\u52A9\u63D0\u5347\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u901A\u8FC7\u7CBE\u7EC6\u5316\u7BA1\u7406\u8FDB\u51FA\u6D41\u91CF\u7684\u5404\u79CD\u7B56\u7565\u6765\u8FBE\u5230\u9884\u671F\u7684\u670D\u52A1\u8D28\u91CF\u3002**\u8BE6\u7EC6\u914D\u7F6E\u6B65",tags:["higress","\u8D85\u8BE6\u7EC6","\u914D\u7F6E","\u8DEF\u7531","\u793A\u4F8B"],keywords:["higress","\u8D85\u8BE6\u7EC6","\u914D\u7F6E","\u8DEF\u7531","\u793A\u4F8B"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16957.md",i=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u8D85\u8BE6\u7EC6\u914D\u7F6E\u8DEF\u7531\u793A\u4F8B  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u56DE\u7B54\u95EE\u9898\uFF1AHigress\u8D85\u8BE6\u7EC6\u914D\u7F6E\u8DEF\u7531\u793A\u4F8B

**\u4F9D\u6258\u77E5\u8BC6\u5206\u6790\u95EE\u9898\u539F\u56E0\uFF1A**

\u7528\u6237\u5E0C\u671B\u4E86\u89E3\u5982\u4F55\u4F7F\u7528Higress\u8FDB\u884C\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EHeader\u63A7\u5236\u3001\u91CD\u8BD5\u3001\u8D85\u65F6\u3001\u4EE5\u53CA\u5355\u673A\u9650\u6D41\u7684\u914D\u7F6E\u793A\u4F8B\u3002\u8FD9\u4E9B\u914D\u7F6E\u80FD\u5E2E\u52A9\u63D0\u5347\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u901A\u8FC7\u7CBE\u7EC6\u5316\u7BA1\u7406\u8FDB\u51FA\u6D41\u91CF\u7684\u5404\u79CD\u7B56\u7565\u6765\u8FBE\u5230\u9884\u671F\u7684\u670D\u52A1\u8D28\u91CF\u3002

**\u8BE6\u7EC6\u914D\u7F6E\u6B65\u9AA4\u4E0E\u8BF4\u660E\uFF1A**

### 1. Header\u63A7\u5236\u914D\u7F6E\u793A\u4F8B

#### \u8BF7\u6C42Header\u63A7\u5236
- **\u76EE\u7684**\uFF1A\u5728\u8BF7\u6C42\u8F6C\u53D1\u81F3\u540E\u7AEF\u524D\uFF0C\u589E\u5220\u6539\u8BF7\u6C42\u5934\u3002
- **\u793A\u4F8B**\uFF1A\u4E3A\`example.com/test\`\u6DFB\u52A0\`foo: bar\`\u548C\`test: true\`\u4E24\u4E2AHeader\u3002
\`\`\`yaml
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
- **\u89E3\u91CA**\uFF1A\u6B64\u914D\u7F6E\u4F1A\u5728\u8BF7\u6C42\u8F6C\u53D1\u5230\`demo-service\`\u65F6\uFF0C\u4E3A\u8BF7\u6C42\u6DFB\u52A0\`foo: bar,test:true\`\u3002

#### \u54CD\u5E94Header\u63A7\u5236
- **\u76EE\u7684**\uFF1A\u5728\u54CD\u5E94\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u524D\uFF0C\u589E\u5220\u6539\u54CD\u5E94\u5934\u3002
- **\u793A\u4F8B**\uFF1A\u4E3A\`example.com/test\`\u7684\u54CD\u5E94\u5220\u9664\`req-cost-time\`\u8FD9\u4E2AHeader\u3002
\`\`\`yaml
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
- **\u89E3\u91CA**\uFF1A\u5F53\u8BF7\u6C42\`/test\`\u7684\u54CD\u5E94\u88AB\u8F6C\u53D1\u7ED9\u5BA2\u6237\u7AEF\u4E4B\u524D\uFF0C\u4F1A\u79FB\u9664\`req-cost-time\`\u5934\u90E8\u3002

### 2. \u91CD\u8BD5\u914D\u7F6E\u793A\u4F8B

- **\u76EE\u7684**\uFF1A\u4E3A\u9519\u8BEF\u8BF7\u6C42\u914D\u7F6E\u81EA\u52A8\u91CD\u8BD5\u673A\u5236\u3002
- **\u793A\u4F8B**\uFF1A\u8BBE\u7F6E\`example.com/test\`\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u4E3A2\uFF0C\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2\uFF0C\u4EC5\u5728\u54CD\u5E94\u72B6\u6001\u7801\u4E3A502\u65F6\u91CD\u8BD5\uFF0C\u5E76\u5F00\u542F\u975E\u5E42\u7B49\u8BF7\u6C42\u7684\u91CD\u8BD5\u3002
\`\`\`yaml
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
- **\u89E3\u91CA**\uFF1A\u6B64\u914D\u7F6E\u786E\u4FDD\u4E86\u5F53\u8BF7\u6C42\`/test\`\u9047\u5230502\u9519\u8BEF\u6216\u975E\u5E42\u7B49\u8BF7\u6C42\u5931\u8D25\u65F6\uFF0C\u6700\u591A\u4F1A\u81EA\u52A8\u91CD\u8BD52\u6B21\uFF0C\u6BCF\u6B21\u5C1D\u8BD5\u7B49\u5F85\u4E0D\u8D85\u8FC75\u79D2\u3002

### 3. \u8D85\u65F6\u914D\u7F6E\u793A\u4F8B

- **\u76EE\u7684**\uFF1A\u9650\u5236\u63A5\u53E3\u5904\u7406\u7684\u603B\u5EF6\u8FDF\u65F6\u95F4\u3002
- **\u793A\u4F8B**\uFF1A\u4E3A\`example.com/test\`\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u4E3A5\u79D2\u3002
\`\`\`yaml
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
- **\u89E3\u91CA**\uFF1A\u4EFB\u4F55\u5230\u8FBE\`/test\`\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u540E\u7AEF\u670D\u52A1\u57285\u79D2\u5185\u672A\u54CD\u5E94\uFF0CHigress\u5C06\u4F1A\u7EC8\u6B62\u8BE5\u8BF7\u6C42\u5E76\u8FD4\u56DE\u8D85\u65F6\u9519\u8BEF\u3002

### 4. \u5355\u673A\u9650\u6D41\u914D\u7F6E\uFF08\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\uFF0C\u4F46\u57FA\u4E8EHigress\u529F\u80FD\u63A8\u6D4B\uFF09

\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\u4E2D\u6CA1\u6709\u76F4\u63A5\u63D0\u53CA\u5355\u673A\u9650\u6D41\u7684\u914D\u7F6E\u793A\u4F8B\uFF0C\u4F46\u6839\u636EHigress\u4F5C\u4E3A\u9AD8\u6027\u80FDIngress\u63A7\u5236\u5668\u7684\u4E00\u822C\u7279\u6027\uFF0C\u5355\u673A\u9650\u6D41\u901A\u5E38\u6D89\u53CA\u5230\u914D\u7F6E\u6BCF\u4E2A\u540E\u7AEF\u670D\u52A1\u7684\u5E76\u53D1\u8FDE\u63A5\u6570\u6216\u8BF7\u6C42\u901F\u7387\u7B49\u6307\u6807\uFF0C\u8FD9\u53EF\u80FD\u9700\u8981\u901A\u8FC7Higress\u7684\u7279\u5B9A\u6CE8\u89E3\u6216\u5916\u90E8\u63D2\u4EF6\u6765\u5B9E\u73B0\u3002\u5177\u4F53\u914D\u7F6E\u65B9\u6CD5\u5EFA\u8BAE\u67E5\u9605Higress\u5B98\u65B9\u6587\u6863\u6216\u793E\u533A\u6700\u4F73\u5B9E\u8DF5\u4EE5\u83B7\u53D6\u6700\u65B0\u4E14\u51C6\u786E\u7684\u6307\u5BFC\u4FE1\u606F\u3002

**\u603B\u7ED3\uFF1A**
\u4EE5\u4E0A\u793A\u4F8B\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528Higress\u8FDB\u884C\u9AD8\u7EA7\u6D41\u91CF\u7BA1\u7406\uFF0C\u5305\u62EC\u8BF7\u6C42\u4E0E\u54CD\u5E94Header\u7684\u63A7\u5236\u3001\u8BF7\u6C42\u91CD\u8BD5\u7B56\u7565\u7684\u5B9A\u5236\u3001\u4EE5\u53CA\u63A5\u53E3\u8D85\u65F6\u7684\u8BBE\u5B9A\uFF0C\u8FD9\u4E9B\u90FD\u662F\u4FDD\u969C\u670D\u52A1\u8D28\u91CF\u548C\u7A33\u5B9A\u6027\u7684\u91CD\u8981\u624B\u6BB5\u3002\u5BF9\u4E8E\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\u7684\u5355\u673A\u9650\u6D41\u9700\u6C42\uFF0C\u5EFA\u8BAE\u8FDB\u4E00\u6B65\u63A2\u7D22Higress\u7684\u5B98\u65B9\u6587\u6863\u4EE5\u83B7\u53D6\u6700\u5408\u9002\u7684\u89E3\u51B3\u65B9\u6848\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHeader\u63A7\u5236\u3001\u91CD\u8BD5\u3001\u8D85\u65F6\u3001\u5355\u673A\u9650\u6D41-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16962)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},p=function(){return s},d=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-header\u63A7\u5236\u914D\u7F6E\u793A\u4F8B",text:"1. Header\u63A7\u5236\u914D\u7F6E\u793A\u4F8B"},{depth:4,slug:"\u8BF7\u6C42header\u63A7\u5236",text:"\u8BF7\u6C42Header\u63A7\u5236"},{depth:4,slug:"\u54CD\u5E94header\u63A7\u5236",text:"\u54CD\u5E94Header\u63A7\u5236"},{depth:3,slug:"2-\u91CD\u8BD5\u914D\u7F6E\u793A\u4F8B",text:"2. \u91CD\u8BD5\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"3-\u8D85\u65F6\u914D\u7F6E\u793A\u4F8B",text:"3. \u8D85\u65F6\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"4-\u5355\u673A\u9650\u6D41\u914D\u7F6E\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\u4F46\u57FA\u4E8Ehigress\u529F\u80FD\u63A8\u6D4B",text:"4. \u5355\u673A\u9650\u6D41\u914D\u7F6E\uFF08\u672A\u76F4\u63A5\u63D0\u4F9B\u793A\u4F8B\uFF0C\u4F46\u57FA\u4E8EHigress\u529F\u80FD\u63A8\u6D4B\uFF09"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=c((g,x,f)=>{const{layout:u,...t}=n;return t.file=a,t.url=i,r`${E()}${v(s)}`})});export{e as Content,m as __tla,p as compiledContent,e as default,a as file,n as frontmatter,d as getHeadings,l as rawContent,i as url};
