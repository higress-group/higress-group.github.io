import{c as a,__tla as h}from"./astro-component.m4CCZO6J.js";import{r as u,m as b,u as l,__tla as x}from"./constant.DSwpUafx.js";import{__tla as c}from"./astro/assets-service.BhtN0nM5.js";let e,d,s,n,o,g,r,k=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return c}catch{}})()]).then(async()=>{let t;t=`<p>\u6807\u51C6\u7684K8s Ingress\u8D44\u6E90\u53EA\u80FD\u5904\u7406\u7B80\u5355\u573A\u666F\u4E0B\u7684HTTP(S)\u6D41\u91CF\u8DEF\u7531\uFF0C\u65E0\u6CD5\u5904\u7406\u6D41\u91CF\u5207\u5206\uFF0C\u8D85\u65F6\u91CD\u8BD5\uFF0CHeader\u63A7\u5236\u548C\u8DE8\u57DF\u7B49\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u4E0D\u540C\u7684Ingress Controller\u5229\u7528\u81EA\u5B9A\u4E49\u7684Ingress Annotation\u589E\u5F3AIngress\u80FD\u529B\u3002\u5E38\u89C1\u7684Nginx Ingress Controller\u5F15\u5165\u4E86100\u591A\u4E2AAnnotation\u5BF9Ingress\u5728\u6D41\u91CF\u6CBB\u7406\u548C\u5B89\u5168\u9632\u62A4\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\u5B9E\u73B0\u3002\u76EE\u524D\uFF0CHigress\u5DF2\u7ECF\u5168\u9762\u517C\u5BB9\u4E86\u5927\u90E8\u5206Nginx Ingress Annotation\uFF0C\u65B9\u4FBF\u7528\u6237\u4ECENginx Ingress\u65E0\u7F1D\u8FC1\u79FB\u81F3Higress\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDHigress\u5173\u4E8EIngress Annotation\u7684\u914D\u7F6E\u8BF4\u660E\u3002</p>
<h2 id="ingress-annotation">Ingress Annotation</h2>
<h3 id="\u7279\u6B8A\u8BF4\u660E">\u7279\u6B8A\u8BF4\u660E</h3>
<h4 id="annotation-key-\u524D\u7F00">Annotation Key \u524D\u7F00</h4>
<p>\u4EE5\u4E0B\u51FA\u73B0\u7684Nginx Ingress Annotation\u90FD\u5DF2\u88ABHigress\u652F\u6301\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u4F7F\u7528\u4E60\u60EF\u7EE7\u7EED\u4F7F\u7528Nginx Ingress\u7684Annotation\u524D\u7F00<code dir="auto">nginx.ingress.kubernetes.io</code>\uFF0C\u6216\u8005\u4F7F\u7528Higress Ingress\u7684Annotation\u524D\u7F00<code dir="auto">higress.io</code>\uFF0C\u4E24\u8005\u662F\u7B49\u4EF7\u7684\u3002</p>
<h4 id="\u4F5C\u7528\u57DF\u8BF4\u660E">\u4F5C\u7528\u57DF\u8BF4\u660E</h4>
<ul>
<li>Ingress\uFF1A\u4F5C\u7528\u57DF\u4E3AIngress\u7684Annotation\u7684\u4F5C\u7528\u8303\u56F4\u4EC5\u9650\u5F53\u524DIngress\u4E0A\u5B9A\u4E49\u7684\u8DEF\u7531\u89C4\u5219\u3002</li>
<li>\u57DF\u540D\uFF1A\u4F5C\u7528\u57DF\u4E3A\u57DF\u540D\u7684Annotation\uFF0C\u5176\u4F5C\u7528\u8303\u56F4\u4E3A\u6240\u6709Ingress\u4E0A\u51FA\u73B0\u7684\u76F8\u540CHost\u3002</li>
<li>\u670D\u52A1\uFF1A\u4F5C\u7528\u57DF\u4E3A\u670D\u52A1\u7684Annotation\uFF0C\u5176\u4F5C\u7528\u8303\u56F4\u4E3A\u6240\u6709Ingress\u4E0A\u51FA\u73B0\u7684\u76F8\u540CService\u3002</li>
</ul>
<h3 id="\u6D41\u91CF\u6CBB\u7406">\u6D41\u91CF\u6CBB\u7406</h3>
<h4 id="\u7070\u5EA6\u53D1\u5E03">\u7070\u5EA6\u53D1\u5E03</h4>





















































<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/canary</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5F00\u542F\u6216\u5173\u95ED\u7070\u5EA6\u53D1\u5E03</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-header</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u57FA\u4E8ERequest Header Key \u6D41\u91CF\u5207\u5206</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-header-value</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u57FA\u4E8ERequest Header Value \u6D41\u91CF\u5207\u5206\uFF0CValue\u4E3A\u7CBE\u786E\u5339\u914D</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-header-pattern</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u57FA\u4E8ERequest Header Value \u6D41\u91CF\u5207\u5206\uFF0CValue\u4E3A\u6B63\u5219\u5339\u914D</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-by-cookie</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u57FA\u4E8ERequest Cookie Key \u6D41\u91CF\u5207\u5206</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-weight</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u57FA\u4E8E\u6743\u91CD \u6D41\u91CF\u5207\u5206</td></tr><tr><td>nginx.ingress.kubernetes.io/canary-weight-total</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u6743\u91CD\u603B\u548C</td></tr></tbody></table>
<h4 id="fallback\u5BB9\u707E">Fallback\uFF08\u5BB9\u707E\uFF09</h4>























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/default-backend</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5BB9\u707E\u670D\u52A1\u3002\u5F53Ingress\u5B9A\u4E49\u7684\u670D\u52A1\u6CA1\u6709\u53EF\u7528\u8282\u70B9\u65F6\uFF0C\u8BF7\u6C42\u4F1A\u81EA\u52A8\u8F6C\u53D1\u8BE5\u5BB9\u707E\u670D\u52A1\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/custom-http-errors</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u8BE5\u6CE8\u89E3\u548C<code dir="auto">default-backend</code>\u4E00\u8D77\u5DE5\u4F5C\u3002\u5F53\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u6307\u5B9AHTTP\u54CD\u5E94\u7801\uFF0C\u539F\u59CB\u8BF7\u6C42\u4F1A\u88AB\u518D\u6B21\u8F6C\u53D1\u81F3\u5BB9\u707E\u670D\u52A1\u3002<br> > \u6CE8\u610F\uFF1A\u8F6C\u53D1\u81F3\u5BB9\u707E\u670D\u52A1\u65F6\uFF0C\u8BF7\u6C42\u7684Path\u4F1A\u88AB\u91CD\u5199\u4E3A/\uFF0C\u8BE5\u884C\u4E3A\u4E0Eingress-nginx\u4FDD\u6301\u4E00\u81F4</td></tr></tbody></table>
<h4 id="\u91CD\u5199">\u91CD\u5199</h4>























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/rewrite-target</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5C06Ingress\u5B9A\u4E49\u7684\u539Fpath\u91CD\u5199\u4E3A\u6307\u5B9A\u76EE\u6807\uFF0C\u652F\u6301Group Capture.</td></tr><tr><td>nginx.ingress.kubernetes.io/upstream-vhost</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5339\u914DIngress\u5B9A\u4E49\u7684\u8DEF\u7531\u7684\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u4FEE\u6539\u5934\u90E8host\u503C\u4E3A\u6307\u5B9A\u503C\u3002</td></tr></tbody></table>
<h4 id="\u91CD\u5B9A\u5411">\u91CD\u5B9A\u5411</h4>















































<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/ssl-redirect</td><td>Ingress</td><td>\u517C\u5BB9</td><td>HTTP \u91CD\u5B9A\u5411\u4E3AHTTPS</td></tr><tr><td>nginx.ingress.kubernetes.io/force-ssl-redirect</td><td>Ingress</td><td>\u517C\u5BB9</td><td>HTTP \u91CD\u5B9A\u5411\u4E3AHTTPS</td></tr><tr><td>nginx.ingress.kubernetes.io/permanent-redirect</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u6C38\u4E45\u91CD\u5B9A\u5411</td></tr><tr><td>nginx.ingress.kubernetes.io/permanent-redirect-code</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u6C38\u4E45\u91CD\u5B9A\u5411\u72B6\u6001\u7801</td></tr><tr><td>nginx.ingress.kubernetes.io/temporal-redirect</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u4E34\u65F6\u91CD\u5B9A\u5411</td></tr><tr><td>nginx.ingress.kubernetes.io/app-root</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u4FEE\u6539\u5E94\u7528\u6839\u8DEF\u5F84\uFF0C\u5BF9\u4E8E\u8BBF\u95EE/\u7684\u8BF7\u6C42\u5C06\u4F1A\u88AB\u91CD\u5B9A\u5411\u4E3A\u8BBE\u7F6E\u7684\u65B0\u8DEF\u5F84</td></tr></tbody></table>
<h4 id="\u8DE8\u57DF">\u8DE8\u57DF</h4>





















































<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/enable-cors</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5F00\u542F\u6216\u5173\u95ED\u8DE8\u57DF</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-origin</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5141\u8BB8\u7684\u7B2C\u4E09\u65B9\u7AD9\u70B9</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-methods</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5982GET\u3001POST\u3001PUT\u7B49</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-headers</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5141\u8BB8\u7684\u8BF7\u6C42Header</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-expose-headers</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u5141\u8BB8\u7684\u66B4\u9732\u7ED9\u6D4F\u89C8\u5668\u7684\u54CD\u5E94Header</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-allow-credentials</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u662F\u5426\u5141\u8BB8\u643A\u5E26\u51ED\u8BC1\u4FE1\u606F</td></tr><tr><td>nginx.ingress.kubernetes.io/cors-max-age</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u9884\u68C0\u7ED3\u679C\u7684\u6700\u5927\u7F13\u5B58\u65F6\u95F4</td></tr></tbody></table>
<h4 id="\u8D85\u65F6">\u8D85\u65F6</h4>

















<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>higress.io/timeout</td><td>Ingress</td><td>Higress \u6269\u5C55</td><td>\u8BF7\u6C42\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u672A\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002\u8D85\u65F6\u8BBE\u7F6E\u4F5C\u7528\u5728\u5E94\u7528\u5C42\uFF0C\u975E\u4F20\u8F93\u5C42TCP\u3002</td></tr></tbody></table>
<h4 id="\u5355\u673A\u9650\u6D41">\u5355\u673A\u9650\u6D41</h4>





























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>higress.io/route-limit-rpm</td><td>Ingress</td><td>Higress \u6269\u5C55</td><td>\u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002</td></tr><tr><td>higress.io/route-limit-rps</td><td>Ingress</td><td>Higress \u6269\u5C55</td><td>\u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002</td></tr><tr><td>higress.io/route-limit-burst-multiplier</td><td>Ingress</td><td>Higress \u6269\u5C55</td><td>\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u7684\u56E0\u5B50\uFF0C\u9ED8\u8BA4\u4E3A5\u3002</td></tr></tbody></table>
<h4 id="\u91CD\u8BD5">\u91CD\u8BD5</h4>





























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/proxy-next-upstream-tries</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u8BF7\u6C42\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u3002\u9ED8\u8BA43\u6B21\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-next-upstream-timeout</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u8BF7\u6C42\u91CD\u8BD5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u672A\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-next-upstream</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u8BF7\u6C42\u91CD\u8BD5\u6761\u4EF6\uFF0C\u53C2\u8003<a href="http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream</a></td></tr></tbody></table>
<h4 id="\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE">\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE</h4>

















<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/backend-protocol</td><td>\u670D\u52A1</td><td>\u90E8\u5206\u517C\u5BB9\u3002\u4E0D\u652F\u6301AJP\u548CFCGI</td><td>\u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3AHTTP\uFF0C\u652F\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548CGRPCS</td></tr></tbody></table>
<h4 id="\u8D1F\u8F7D\u5747\u8861">\u8D1F\u8F7D\u5747\u8861</h4>























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/load-balance</td><td>\u670D\u52A1</td><td>\u90E8\u5206\u517C\u5BB9\u3002\u4E0D\u652F\u6301<code dir="auto">ewma</code>\u7B97\u6CD5</td><td>\u540E\u7AEF\u670D\u52A1\u7684\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002\u9ED8\u8BA4\u4E3Around_robin\u3002 <br>\u5408\u6CD5\u503C\u5982\u4E0B\uFF1A<br>- round_robin\uFF1A\u57FA\u4E8E\u8F6E\u8BE2\u7684\u8D1F\u8F7D\u5747\u8861\u3002<br>- least_conn\uFF1A\u57FA\u4E8E\u6700\u5C0F\u8BF7\u6C42\u6570\u7684\u8D1F\u8F7D\u5747\u8861\u3002<br>- random\uFF1A\u57FA\u4E8E\u968F\u673A\u7684\u8D1F\u8F7D\u5747\u8861\u3002<br> > \u6CE8\u610F\uFF1AHigress\u4E0D\u652F\u6301ewma\u7B97\u6CD5\uFF0C\u82E5\u914D\u7F6E\u4E3Aewma\u7B97\u6CD5\uFF0C\u4F1A\u56DE\u9000\u5230round_robin\u7B97\u6CD5\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/upstream-hash-by</td><td>\u670D\u52A1</td><td>\u90E8\u5206\u517C\u5BB9\u3002\u6682\u4E0D\u652F\u6301Nginx\u53D8\u91CF\u3001\u5E38\u91CF\u7684\u7EC4\u5408\u4F7F\u7528\u65B9\u5F0F</td><td>\u57FA\u4E8E\u4E00\u81F4Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF0CHigress\u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A<br>1. Higress\u652F\u6301\u914D\u7F6E\u90E8\u5206nginx\u53D8\u91CF\uFF1A<br>- $request_uri\uFF1A\u8BF7\u6C42\u7684Path\uFF08\u5305\u62EC\u8DEF\u5F84\u53C2\u6570\uFF09\u4F5C\u4E3AHash Key <br>- $host\uFF1A\u8BF7\u6C42\u7684Host\u4F5C\u4E3AHash Key<br>- $remote_addr\uFF1A\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP\u4F5C\u4E3AHash Key\u3002<br>2. \u57FA\u4E8E\u8BF7\u6C42header\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$http_headerName\u3002<br>3. \u57FA\u4E8E\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$arg_varName</td></tr></tbody></table>
<h4 id="cookie\u4EB2\u548C\u6027">Cookie\u4EB2\u548C\u6027</h4>















































<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/affinity</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u4EB2\u548C\u6027\u79CD\u7C7B\uFF0C\u76EE\u524D\u53EA\u652F\u6301cookie\uFF0C\u9ED8\u8BA4\u4E3Acookie\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/affinity-mode</td><td>\u670D\u52A1</td><td>\u90E8\u5206\u517C\u5BB9\u3002\u6682\u4E0D\u652F\u6301<code dir="auto">persistent</code>\u6A21\u5F0F</td><td>\u4EB2\u548C\u6027\u6A21\u5F0F\uFF0C\u4E91\u539F\u751F\u7F51\u5173\u76EE\u524D\u53EA\u652F\u6301balanced\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3Abalanced\u6A21\u5F0F\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-name</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u914D\u7F6E\u6307\u5B9ACookie\u7684\u503C\u4F5C\u4E3AHash Key</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-path</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684Path\u503C\uFF0C\u9ED8\u8BA4\u4E3A/</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-max-age</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/session-cookie-expires</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002</td></tr></tbody></table>
<h4 id="ip\u8BBF\u95EE\u63A7\u5236">IP\u8BBF\u95EE\u63A7\u5236</h4>

















<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/<a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#whitelist-source-range" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">whitelist-source-range</a></td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u6307\u5B9A\u8DEF\u7531\u4E0A\u7684IP\u767D\u540D\u5355\uFF0C\u652F\u6301IP\u5730\u5740\u6216CIDR\u5730\u5740\u5757\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002</td></tr></tbody></table>
<h3 id="\u5B89\u5168\u9632\u62A4">\u5B89\u5168\u9632\u62A4</h3>
<h4 id="\u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u524D\u7684\u901A\u4FE1\u52A0\u5BC6">\u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u524D\u7684\u901A\u4FE1\u52A0\u5BC6</h4>























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/ssl-cipher</td><td>\u57DF\u540D</td><td>\u517C\u5BB9</td><td>\u6307\u5B9Atls\u7684\u52A0\u5BC6\u5957\u4EF6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\uFF0C\u82F1\u6587\u9017\u53F7\u5206\u9694\uFF0C\u4EC5\u5F53tls\u63E1\u624B\u65F6\u91C7\u7528TLSv1.0-1.2\u751F\u6548\u3002<br>\u9ED8\u8BA4\u52A0\u5BC6\u5957\u4EF6\u5982\u4E0B\uFF1A<br>- ECDHE-ECDSA-AES128-GCM-SHA256<br>- ECDHE-RSA-AES128-GCM-SHA256<br>- ECDHE-ECDSA-AES128-SHA<br>- ECDHE-RSA-AES128-SHA<br>- AES128-GCM-SHA256<br>- AES128-SHA<br>- ECDHE-ECDSA-AES256-GCM-SHA384<br>- ECDHE-RSA-AES256-GCM-SHA384<br>- ECDHE-ECDSA-AES256-SHA<br>- ECDHE-RSA-AES256-SHA<br>- AES256-GCM-SHA384<br>- AES256-SHA</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-tls-secret</td><td>\u57DF\u540D</td><td>\u90E8\u5206\u517C\u5BB9\u3002secret\u540D\u5B57\u683C\u5F0F\u5FC5\u987B\u662F\uFF1A(\u8BE5\u57DF\u540D\u8BC1\u4E66\u6240\u5728\u7684secret\u7684\u540D\u5B57)-cacert</td><td>\u7F51\u5173\u4F7F\u7528\u7684CA\u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1MTLS\u63E1\u624B\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u8BC1\u4E66\u3002\u8BE5\u6CE8\u89E3\u4E3B\u8981\u5E94\u7528\u4E8E\u7F51\u5173\u9700\u8981\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8EAB\u4EFD\u7684\u573A\u666F\u3002</td></tr></tbody></table>
<h4 id="\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1\u52A0\u5BC6">\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1\u52A0\u5BC6</h4>





























<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/proxy-ssl-secret</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u7F51\u5173\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5BF9\u7F51\u5173\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-ssl-name</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>TLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528\u7684SNI</td></tr><tr><td>nginx.ingress.kubernetes.io/proxy-ssl-server-name</td><td>\u670D\u52A1</td><td>\u517C\u5BB9</td><td>\u5F00\u542F\u6216\u5173\u95EDTLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528SNI</td></tr></tbody></table>
<h4 id="\u5B89\u5168\u8BA4\u8BC1">\u5B89\u5168\u8BA4\u8BC1</h4>
<h5 id="basic">Basic</h5>
<blockquote>
<p>\u8BE5\u6CE8\u89E3\u7684\u80FD\u529B\u5DF2\u7ECF\u88AB <a href="https://higress.cn/docs/latest/plugins/authentication/basic-auth/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Basic auth \u63D2\u4EF6</a>\u66FF\u4EE3\uFF0C2.0.0 \u7248\u672C\u540E\u4E0D\u518D\u652F\u6301</p>
</blockquote>



































<table><thead><tr><th>\u6CE8\u89E3</th><th>\u4F5C\u7528\u57DF</th><th>\u652F\u6301\u5EA6</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>nginx.ingress.kubernetes.io/auth-type</td><td>Ingress</td><td>\u90E8\u5206\u517C\u5BB9\u3002\u6682\u53EA\u652F\u6301Basic\u3002</td><td>\u8BA4\u8BC1\u7C7B\u578B</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-secret</td><td>Ingress</td><td>\u517C\u5BB9</td><td>Secret\u540D\u5B57\uFF0C\u683C\u5F0F\u652F\u6301&#x3C;namespace>/&#x3C;name>\uFF0C\u5305\u542B\u88AB\u6388\u4E88\u80FD\u591F\u8BBF\u95EE\u8BE5Ingress\u4E0A\u5B9A\u4E49\u7684\u8DEF\u7531\u7684\u8BBF\u95EE\u6743\u9650\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-secret-type</td><td>Ingress</td><td>\u517C\u5BB9</td><td>Secret\u5185\u5BB9\u683C\u5F0F\u3002<br>- auth-file\uFF1Adata\u7684key\u4E3Aauth\uFF1Bvalue\u4E3A\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u591A\u5E10\u53F7\u56DE\u8F66\u5206\u9694<br>- auth-map\uFF1Adata\u7684key\u4E3A\u7528\u6237\u540D\uFF1Bvalue\u4E3A\u5BC6\u7801</td></tr><tr><td>nginx.ingress.kubernetes.io/auth-realm</td><td>Ingress</td><td>\u517C\u5BB9</td><td>\u4FDD\u62A4\u57DF\u3002\u76F8\u540C\u7684\u4FDD\u62A4\u57DF\u5171\u4EAB\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</td></tr></tbody></table>
<h2 id="\u5907\u6CE8">\u5907\u6CE8</h2>
<p>\u5173\u4E8E\u4EE5\u4E0A\u63D0\u5230\u7684Nginx Ingress Annotation\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u5B98\u65B9\u6587\u6863\uFF08<a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations</a>\uFF09\u3002</p>`,n={title:"Nginx Ingress Annotation \u517C\u5BB9\u8BF4\u660E",keywords:["Ingress"],description:"Higress Ingress Annotation \u914D\u7F6E\u8BF4\u660E\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/user/annotation.md"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/annotation.md",r=void 0,g=function(){return`
# Nginx Ingress Annotation \u517C\u5BB9\u8BF4\u660E
\u6807\u51C6\u7684K8s Ingress\u8D44\u6E90\u53EA\u80FD\u5904\u7406\u7B80\u5355\u573A\u666F\u4E0B\u7684HTTP(S)\u6D41\u91CF\u8DEF\u7531\uFF0C\u65E0\u6CD5\u5904\u7406\u6D41\u91CF\u5207\u5206\uFF0C\u8D85\u65F6\u91CD\u8BD5\uFF0CHeader\u63A7\u5236\u548C\u8DE8\u57DF\u7B49\u95EE\u9898\u3002\u56E0\u6B64\uFF0C\u4E0D\u540C\u7684Ingress Controller\u5229\u7528\u81EA\u5B9A\u4E49\u7684Ingress Annotation\u589E\u5F3AIngress\u80FD\u529B\u3002\u5E38\u89C1\u7684Nginx Ingress Controller\u5F15\u5165\u4E86100\u591A\u4E2AAnnotation\u5BF9Ingress\u5728\u6D41\u91CF\u6CBB\u7406\u548C\u5B89\u5168\u9632\u62A4\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\u5B9E\u73B0\u3002\u76EE\u524D\uFF0CHigress\u5DF2\u7ECF\u5168\u9762\u517C\u5BB9\u4E86\u5927\u90E8\u5206Nginx Ingress Annotation\uFF0C\u65B9\u4FBF\u7528\u6237\u4ECENginx Ingress\u65E0\u7F1D\u8FC1\u79FB\u81F3Higress\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECDHigress\u5173\u4E8EIngress Annotation\u7684\u914D\u7F6E\u8BF4\u660E\u3002

## Ingress Annotation

### \u7279\u6B8A\u8BF4\u660E
#### Annotation Key \u524D\u7F00
\u4EE5\u4E0B\u51FA\u73B0\u7684Nginx Ingress Annotation\u90FD\u5DF2\u88ABHigress\u652F\u6301\uFF0C\u60A8\u53EF\u4EE5\u6839\u636E\u4F7F\u7528\u4E60\u60EF\u7EE7\u7EED\u4F7F\u7528Nginx Ingress\u7684Annotation\u524D\u7F00\`nginx.ingress.kubernetes.io\`\uFF0C\u6216\u8005\u4F7F\u7528Higress Ingress\u7684Annotation\u524D\u7F00\`higress.io\`\uFF0C\u4E24\u8005\u662F\u7B49\u4EF7\u7684\u3002

#### \u4F5C\u7528\u57DF\u8BF4\u660E
- Ingress\uFF1A\u4F5C\u7528\u57DF\u4E3AIngress\u7684Annotation\u7684\u4F5C\u7528\u8303\u56F4\u4EC5\u9650\u5F53\u524DIngress\u4E0A\u5B9A\u4E49\u7684\u8DEF\u7531\u89C4\u5219\u3002
- \u57DF\u540D\uFF1A\u4F5C\u7528\u57DF\u4E3A\u57DF\u540D\u7684Annotation\uFF0C\u5176\u4F5C\u7528\u8303\u56F4\u4E3A\u6240\u6709Ingress\u4E0A\u51FA\u73B0\u7684\u76F8\u540CHost\u3002
- \u670D\u52A1\uFF1A\u4F5C\u7528\u57DF\u4E3A\u670D\u52A1\u7684Annotation\uFF0C\u5176\u4F5C\u7528\u8303\u56F4\u4E3A\u6240\u6709Ingress\u4E0A\u51FA\u73B0\u7684\u76F8\u540CService\u3002

### \u6D41\u91CF\u6CBB\u7406
#### \u7070\u5EA6\u53D1\u5E03
| \u6CE8\u89E3                                                   | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                                     |
|------------------------------------------------------|---------|-----|----------------------------------------|
| nginx.ingress.kubernetes.io/canary                   | Ingress | \u517C\u5BB9  | \u5F00\u542F\u6216\u5173\u95ED\u7070\u5EA6\u53D1\u5E03                              |
| nginx.ingress.kubernetes.io/canary-by-header         | Ingress | \u517C\u5BB9  | \u57FA\u4E8ERequest Header Key \u6D41\u91CF\u5207\u5206              |
| nginx.ingress.kubernetes.io/canary-by-header-value   | Ingress | \u517C\u5BB9  | \u57FA\u4E8ERequest Header Value \u6D41\u91CF\u5207\u5206\uFF0CValue\u4E3A\u7CBE\u786E\u5339\u914D |
| nginx.ingress.kubernetes.io/canary-by-header-pattern | Ingress | \u517C\u5BB9  | \u57FA\u4E8ERequest Header Value \u6D41\u91CF\u5207\u5206\uFF0CValue\u4E3A\u6B63\u5219\u5339\u914D |
| nginx.ingress.kubernetes.io/canary-by-cookie         | Ingress | \u517C\u5BB9  | \u57FA\u4E8ERequest Cookie Key \u6D41\u91CF\u5207\u5206              |
| nginx.ingress.kubernetes.io/canary-weight            | Ingress | \u517C\u5BB9  | \u57FA\u4E8E\u6743\u91CD \u6D41\u91CF\u5207\u5206                              |
| nginx.ingress.kubernetes.io/canary-weight-total      | Ingress | \u517C\u5BB9  | \u6743\u91CD\u603B\u548C                                   |

#### Fallback\uFF08\u5BB9\u707E\uFF09
| \u6CE8\u89E3                                             | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                                                                                                                |
|------------------------------------------------|---------|-----|-------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/default-backend    | Ingress | \u517C\u5BB9  | \u5BB9\u707E\u670D\u52A1\u3002\u5F53Ingress\u5B9A\u4E49\u7684\u670D\u52A1\u6CA1\u6709\u53EF\u7528\u8282\u70B9\u65F6\uFF0C\u8BF7\u6C42\u4F1A\u81EA\u52A8\u8F6C\u53D1\u8BE5\u5BB9\u707E\u670D\u52A1\u3002                                                                           |
| nginx.ingress.kubernetes.io/custom-http-errors | Ingress | \u517C\u5BB9  | \u8BE5\u6CE8\u89E3\u548C\`default-backend\`\u4E00\u8D77\u5DE5\u4F5C\u3002\u5F53\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u6307\u5B9AHTTP\u54CD\u5E94\u7801\uFF0C\u539F\u59CB\u8BF7\u6C42\u4F1A\u88AB\u518D\u6B21\u8F6C\u53D1\u81F3\u5BB9\u707E\u670D\u52A1\u3002<br /> > \u6CE8\u610F\uFF1A\u8F6C\u53D1\u81F3\u5BB9\u707E\u670D\u52A1\u65F6\uFF0C\u8BF7\u6C42\u7684Path\u4F1A\u88AB\u91CD\u5199\u4E3A/\uFF0C\u8BE5\u884C\u4E3A\u4E0Eingress-nginx\u4FDD\u6301\u4E00\u81F4 |

#### \u91CD\u5199
| \u6CE8\u89E3                                         | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                                        |
|--------------------------------------------|---------|-----|-------------------------------------------|
| nginx.ingress.kubernetes.io/rewrite-target | Ingress | \u517C\u5BB9  | \u5C06Ingress\u5B9A\u4E49\u7684\u539Fpath\u91CD\u5199\u4E3A\u6307\u5B9A\u76EE\u6807\uFF0C\u652F\u6301Group Capture.  |
| nginx.ingress.kubernetes.io/upstream-vhost | Ingress | \u517C\u5BB9  | \u5339\u914DIngress\u5B9A\u4E49\u7684\u8DEF\u7531\u7684\u8BF7\u6C42\u5728\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u65F6\uFF0C\u4FEE\u6539\u5934\u90E8host\u503C\u4E3A\u6307\u5B9A\u503C\u3002 |

#### \u91CD\u5B9A\u5411
| \u6CE8\u89E3                                                  | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                            |
|-----------------------------------------------------|---------|-----|-------------------------------|
| nginx.ingress.kubernetes.io/ssl-redirect            | Ingress | \u517C\u5BB9  | HTTP \u91CD\u5B9A\u5411\u4E3AHTTPS                |
| nginx.ingress.kubernetes.io/force-ssl-redirect      | Ingress | \u517C\u5BB9  | HTTP \u91CD\u5B9A\u5411\u4E3AHTTPS                |
| nginx.ingress.kubernetes.io/permanent-redirect      | Ingress | \u517C\u5BB9  | \u6C38\u4E45\u91CD\u5B9A\u5411                         |
| nginx.ingress.kubernetes.io/permanent-redirect-code | Ingress | \u517C\u5BB9  | \u6C38\u4E45\u91CD\u5B9A\u5411\u72B6\u6001\u7801                      |
| nginx.ingress.kubernetes.io/temporal-redirect       | Ingress | \u517C\u5BB9  | \u4E34\u65F6\u91CD\u5B9A\u5411                         |
| nginx.ingress.kubernetes.io/app-root                | Ingress | \u517C\u5BB9  | \u4FEE\u6539\u5E94\u7528\u6839\u8DEF\u5F84\uFF0C\u5BF9\u4E8E\u8BBF\u95EE/\u7684\u8BF7\u6C42\u5C06\u4F1A\u88AB\u91CD\u5B9A\u5411\u4E3A\u8BBE\u7F6E\u7684\u65B0\u8DEF\u5F84 |

#### \u8DE8\u57DF
| \u6CE8\u89E3                                                 | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                     |
|----------------------------------------------------|---------|-----|------------------------|
| nginx.ingress.kubernetes.io/enable-cors            | Ingress | \u517C\u5BB9  | \u5F00\u542F\u6216\u5173\u95ED\u8DE8\u57DF                |
| nginx.ingress.kubernetes.io/cors-allow-origin      | Ingress | \u517C\u5BB9  | \u5141\u8BB8\u7684\u7B2C\u4E09\u65B9\u7AD9\u70B9               |
| nginx.ingress.kubernetes.io/cors-allow-methods     | Ingress | \u517C\u5BB9  | \u5141\u8BB8\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u5982GET\u3001POST\u3001PUT\u7B49 |
| nginx.ingress.kubernetes.io/cors-allow-headers     | Ingress | \u517C\u5BB9  | \u5141\u8BB8\u7684\u8BF7\u6C42Header            |
| nginx.ingress.kubernetes.io/cors-expose-headers    | Ingress | \u517C\u5BB9  | \u5141\u8BB8\u7684\u66B4\u9732\u7ED9\u6D4F\u89C8\u5668\u7684\u54CD\u5E94Header     |
| nginx.ingress.kubernetes.io/cors-allow-credentials | Ingress | \u517C\u5BB9  | \u662F\u5426\u5141\u8BB8\u643A\u5E26\u51ED\u8BC1\u4FE1\u606F             |
| nginx.ingress.kubernetes.io/cors-max-age           | Ingress | \u517C\u5BB9  | \u9884\u68C0\u7ED3\u679C\u7684\u6700\u5927\u7F13\u5B58\u65F6\u95F4            |

#### \u8D85\u65F6

| \u6CE8\u89E3                                          | \u4F5C\u7528\u57DF | \u652F\u6301\u5EA6                                           | \u8BF4\u660E                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------|-----|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| higress.io/timeout     | Ingress  | Higress \u6269\u5C55                                           | \u8BF7\u6C42\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002\u9ED8\u8BA4\u672A\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002\u8D85\u65F6\u8BBE\u7F6E\u4F5C\u7528\u5728\u5E94\u7528\u5C42\uFF0C\u975E\u4F20\u8F93\u5C42TCP\u3002|

#### \u5355\u673A\u9650\u6D41

| \u6CE8\u89E3                                          | \u4F5C\u7528\u57DF | \u652F\u6301\u5EA6                                           | \u8BF4\u660E                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------|-----|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| higress.io/route-limit-rpm    | Ingress  | Higress \u6269\u5C55   | \u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u5206\u949F\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002|
| higress.io/route-limit-rps   | Ingress  | Higress \u6269\u5C55   | \u8BE5Ingress\u5B9A\u4E49\u7684\u8DEF\u7531\u5728\u6BCF\u4E2A\u7F51\u5173\u5B9E\u4F8B\u4E0A\u6BCF\u79D2\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u3002\u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u4E3A\u8BE5\u503C\u4E58\u4EE5limit-burst-multiplier\u3002|
| higress.io/route-limit-burst-multiplier | Ingress  | Higress \u6269\u5C55  | \u77AC\u65F6\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u7684\u56E0\u5B50\uFF0C\u9ED8\u8BA4\u4E3A5\u3002|


#### \u91CD\u8BD5
| \u6CE8\u89E3                                                      | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                                                                                                                                                                    |
|---------------------------------------------------------|---------|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/proxy-next-upstream-tries   | Ingress | \u517C\u5BB9  | \u8BF7\u6C42\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u3002\u9ED8\u8BA43\u6B21\u3002                                                                                                                                                       |
| nginx.ingress.kubernetes.io/proxy-next-upstream-timeout | Ingress | \u517C\u5BB9  | \u8BF7\u6C42\u91CD\u8BD5\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u3002\u9ED8\u8BA4\u672A\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4\u3002                                                                                                                                              |
| nginx.ingress.kubernetes.io/proxy-next-upstream         | Ingress | \u517C\u5BB9  | \u8BF7\u6C42\u91CD\u8BD5\u6761\u4EF6\uFF0C\u53C2\u8003[http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream](http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream) |


#### \u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE
| \u6CE8\u89E3                                           | \u4F5C\u7528\u57DF | \u652F\u6301\u5EA6              | \u8BF4\u660E                                                |
|----------------------------------------------|-----|------------------|---------------------------------------------------|
| nginx.ingress.kubernetes.io/backend-protocol | \u670D\u52A1  | \u90E8\u5206\u517C\u5BB9\u3002\u4E0D\u652F\u6301AJP\u548CFCGI | \u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3AHTTP\uFF0C\u652F\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548CGRPCS |


#### \u8D1F\u8F7D\u5747\u8861
| \u6CE8\u89E3                                           | \u4F5C\u7528\u57DF | \u652F\u6301\u5EA6                        | \u8BF4\u660E                                                                                                                                                                                                                                                                      |
|----------------------------------------------|-----|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/load-balance     | \u670D\u52A1  | \u90E8\u5206\u517C\u5BB9\u3002\u4E0D\u652F\u6301\`ewma\`\u7B97\u6CD5           | \u540E\u7AEF\u670D\u52A1\u7684\u666E\u901A\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\u3002\u9ED8\u8BA4\u4E3Around_robin\u3002 <br />\u5408\u6CD5\u503C\u5982\u4E0B\uFF1A<br />- round_robin\uFF1A\u57FA\u4E8E\u8F6E\u8BE2\u7684\u8D1F\u8F7D\u5747\u8861\u3002<br />- least_conn\uFF1A\u57FA\u4E8E\u6700\u5C0F\u8BF7\u6C42\u6570\u7684\u8D1F\u8F7D\u5747\u8861\u3002<br />- random\uFF1A\u57FA\u4E8E\u968F\u673A\u7684\u8D1F\u8F7D\u5747\u8861\u3002<br /> > \u6CE8\u610F\uFF1AHigress\u4E0D\u652F\u6301ewma\u7B97\u6CD5\uFF0C\u82E5\u914D\u7F6E\u4E3Aewma\u7B97\u6CD5\uFF0C\u4F1A\u56DE\u9000\u5230round_robin\u7B97\u6CD5\u3002                                                                                       |
| nginx.ingress.kubernetes.io/upstream-hash-by | \u670D\u52A1  | \u90E8\u5206\u517C\u5BB9\u3002\u6682\u4E0D\u652F\u6301Nginx\u53D8\u91CF\u3001\u5E38\u91CF\u7684\u7EC4\u5408\u4F7F\u7528\u65B9\u5F0F | \u57FA\u4E8E\u4E00\u81F4Hash\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5\uFF0CHigress\u652F\u6301\u4EE5\u4E0B\u51E0\u79CD\u5F62\u5F0F\uFF1A<br />1. Higress\u652F\u6301\u914D\u7F6E\u90E8\u5206nginx\u53D8\u91CF\uFF1A<br />- $request_uri\uFF1A\u8BF7\u6C42\u7684Path\uFF08\u5305\u62EC\u8DEF\u5F84\u53C2\u6570\uFF09\u4F5C\u4E3AHash Key <br />- $host\uFF1A\u8BF7\u6C42\u7684Host\u4F5C\u4E3AHash Key<br />- $remote_addr\uFF1A\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEFIP\u4F5C\u4E3AHash Key\u3002<br />2. \u57FA\u4E8E\u8BF7\u6C42header\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$http_headerName\u3002<br />3. \u57FA\u4E8E\u8BF7\u6C42\u8DEF\u5F84\u53C2\u6570\u7684\u4E00\u81F4\u6027Hash\u3002\u60A8\u53EA\u9700\u914D\u7F6E\u4E3A$arg_varName |


#### Cookie\u4EB2\u548C\u6027
| \u6CE8\u89E3                                                 | \u4F5C\u7528  | \u652F\u6301\u5EA6                     | \u8BF4\u660E                                               |
|----------------------------------------------------|-----|-------------------------|--------------------------------------------------|
| nginx.ingress.kubernetes.io/affinity               | \u670D\u52A1  | \u517C\u5BB9                      | \u4EB2\u548C\u6027\u79CD\u7C7B\uFF0C\u76EE\u524D\u53EA\u652F\u6301cookie\uFF0C\u9ED8\u8BA4\u4E3Acookie\u3002                     |
| nginx.ingress.kubernetes.io/affinity-mode          | \u670D\u52A1  | \u90E8\u5206\u517C\u5BB9\u3002\u6682\u4E0D\u652F\u6301\`persistent\`\u6A21\u5F0F | \u4EB2\u548C\u6027\u6A21\u5F0F\uFF0C\u4E91\u539F\u751F\u7F51\u5173\u76EE\u524D\u53EA\u652F\u6301balanced\u6A21\u5F0F\uFF0C\u9ED8\u8BA4\u4E3Abalanced\u6A21\u5F0F\u3002        |
| nginx.ingress.kubernetes.io/session-cookie-name    | \u670D\u52A1  | \u517C\u5BB9                      | \u914D\u7F6E\u6307\u5B9ACookie\u7684\u503C\u4F5C\u4E3AHash Key                           |
| nginx.ingress.kubernetes.io/session-cookie-path    | \u670D\u52A1  | \u517C\u5BB9                      | \u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684Path\u503C\uFF0C\u9ED8\u8BA4\u4E3A/                |
| nginx.ingress.kubernetes.io/session-cookie-max-age | \u670D\u52A1  | \u517C\u5BB9                      | \u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002 |
| nginx.ingress.kubernetes.io/session-cookie-expires | \u670D\u52A1  | \u517C\u5BB9                      | \u5F53\u6307\u5B9ACookie\u4E0D\u5B58\u5728\uFF0C\u751F\u6210\u7684Cookie\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u9ED8\u8BA4\u4E3ASession\u4F1A\u8BDD\u7EA7\u522B\u3002 |


#### IP\u8BBF\u95EE\u63A7\u5236
| \u6CE8\u89E3                                                                                                                                                                  | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6 | \u8BF4\u660E                                |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----|-----------------------------------|
| nginx.ingress.kubernetes.io/[whitelist-source-range](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#whitelist-source-range) | Ingress | \u517C\u5BB9  | \u6307\u5B9A\u8DEF\u7531\u4E0A\u7684IP\u767D\u540D\u5355\uFF0C\u652F\u6301IP\u5730\u5740\u6216CIDR\u5730\u5740\u5757\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002 |

### \u5B89\u5168\u9632\u62A4
#### \u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u524D\u7684\u901A\u4FE1\u52A0\u5BC6
| \u6CE8\u89E3                                          | \u4F5C\u7528\u57DF | \u652F\u6301\u5EA6                                           | \u8BF4\u660E                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------|-----|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/ssl-cipher      | \u57DF\u540D  | \u517C\u5BB9                                            | \u6307\u5B9Atls\u7684\u52A0\u5BC6\u5957\u4EF6\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\uFF0C\u82F1\u6587\u9017\u53F7\u5206\u9694\uFF0C\u4EC5\u5F53tls\u63E1\u624B\u65F6\u91C7\u7528TLSv1.0-1.2\u751F\u6548\u3002<br />\u9ED8\u8BA4\u52A0\u5BC6\u5957\u4EF6\u5982\u4E0B\uFF1A<br />- ECDHE-ECDSA-AES128-GCM-SHA256<br />- ECDHE-RSA-AES128-GCM-SHA256<br />- ECDHE-ECDSA-AES128-SHA<br />- ECDHE-RSA-AES128-SHA<br />- AES128-GCM-SHA256<br />- AES128-SHA<br />- ECDHE-ECDSA-AES256-GCM-SHA384<br />- ECDHE-RSA-AES256-GCM-SHA384<br />- ECDHE-ECDSA-AES256-SHA<br />- ECDHE-RSA-AES256-SHA<br />- AES256-GCM-SHA384<br />- AES256-SHA |
| nginx.ingress.kubernetes.io/auth-tls-secret | \u57DF\u540D  | \u90E8\u5206\u517C\u5BB9\u3002secret\u540D\u5B57\u683C\u5F0F\u5FC5\u987B\u662F\uFF1A(\u8BE5\u57DF\u540D\u8BC1\u4E66\u6240\u5728\u7684secret\u7684\u540D\u5B57)-cacert | \u7F51\u5173\u4F7F\u7528\u7684CA\u8BC1\u4E66\uFF0C\u7528\u4E8E\u9A8C\u8BC1MTLS\u63E1\u624B\u671F\u95F4\uFF0C\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u8BC1\u4E66\u3002\u8BE5\u6CE8\u89E3\u4E3B\u8981\u5E94\u7528\u4E8E\u7F51\u5173\u9700\u8981\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u8EAB\u4EFD\u7684\u573A\u666F\u3002                                                                                                                                                                                                                                                                                                                                          |


#### \u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1\u52A0\u5BC6
| \u6CE8\u89E3                                                | \u4F5C\u7528\u57DF | \u652F\u6301\u5EA6 | \u8BF4\u660E                         |
|---------------------------------------------------|-----|-----|----------------------------|
| nginx.ingress.kubernetes.io/proxy-ssl-secret      | \u670D\u52A1  | \u517C\u5BB9  | \u7F51\u5173\u4F7F\u7528\u7684\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF0C\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u5BF9\u7F51\u5173\u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1 |
| nginx.ingress.kubernetes.io/proxy-ssl-name        | \u670D\u52A1  | \u517C\u5BB9  | TLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528\u7684SNI              |
| nginx.ingress.kubernetes.io/proxy-ssl-server-name | \u670D\u52A1  | \u517C\u5BB9  | \u5F00\u542F\u6216\u5173\u95EDTLS\u63E1\u624B\u671F\u95F4\u4F7F\u7528SNI          |

#### \u5B89\u5168\u8BA4\u8BC1

##### Basic

> \u8BE5\u6CE8\u89E3\u7684\u80FD\u529B\u5DF2\u7ECF\u88AB [Basic auth \u63D2\u4EF6](https://higress.cn/docs/latest/plugins/authentication/basic-auth/)\u66FF\u4EE3\uFF0C2.0.0 \u7248\u672C\u540E\u4E0D\u518D\u652F\u6301

| \u6CE8\u89E3                                           | \u4F5C\u7528\u57DF     | \u652F\u6301\u5EA6             | \u8BF4\u660E                                                                                                |
|----------------------------------------------|---------|-----------------|---------------------------------------------------------------------------------------------------|
| nginx.ingress.kubernetes.io/auth-type        | Ingress | \u90E8\u5206\u517C\u5BB9\u3002\u6682\u53EA\u652F\u6301Basic\u3002 | \u8BA4\u8BC1\u7C7B\u578B                                                                                              |
| nginx.ingress.kubernetes.io/auth-secret      | Ingress | \u517C\u5BB9              | Secret\u540D\u5B57\uFF0C\u683C\u5F0F\u652F\u6301&lt;namespace&gt;/&lt;name&gt;\uFF0C\u5305\u542B\u88AB\u6388\u4E88\u80FD\u591F\u8BBF\u95EE\u8BE5Ingress\u4E0A\u5B9A\u4E49\u7684\u8DEF\u7531\u7684\u8BBF\u95EE\u6743\u9650\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002                              |
| nginx.ingress.kubernetes.io/auth-secret-type | Ingress | \u517C\u5BB9              | Secret\u5185\u5BB9\u683C\u5F0F\u3002<br />- auth-file\uFF1Adata\u7684key\u4E3Aauth\uFF1Bvalue\u4E3A\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u591A\u5E10\u53F7\u56DE\u8F66\u5206\u9694<br />- auth-map\uFF1Adata\u7684key\u4E3A\u7528\u6237\u540D\uFF1Bvalue\u4E3A\u5BC6\u7801 |
| nginx.ingress.kubernetes.io/auth-realm       | Ingress | \u517C\u5BB9              | \u4FDD\u62A4\u57DF\u3002\u76F8\u540C\u7684\u4FDD\u62A4\u57DF\u5171\u4EAB\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002                                                                               |


## \u5907\u6CE8
\u5173\u4E8E\u4EE5\u4E0A\u63D0\u5230\u7684Nginx Ingress Annotation\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605\u5B98\u65B9\u6587\u6863\uFF08[https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations)\uFF09\u3002
`},d=function(){return t},o=function(){return[{depth:2,slug:"ingress-annotation",text:"Ingress Annotation"},{depth:3,slug:"\u7279\u6B8A\u8BF4\u660E",text:"\u7279\u6B8A\u8BF4\u660E"},{depth:4,slug:"annotation-key-\u524D\u7F00",text:"Annotation Key \u524D\u7F00"},{depth:4,slug:"\u4F5C\u7528\u57DF\u8BF4\u660E",text:"\u4F5C\u7528\u57DF\u8BF4\u660E"},{depth:3,slug:"\u6D41\u91CF\u6CBB\u7406",text:"\u6D41\u91CF\u6CBB\u7406"},{depth:4,slug:"\u7070\u5EA6\u53D1\u5E03",text:"\u7070\u5EA6\u53D1\u5E03"},{depth:4,slug:"fallback\u5BB9\u707E",text:"Fallback\uFF08\u5BB9\u707E\uFF09"},{depth:4,slug:"\u91CD\u5199",text:"\u91CD\u5199"},{depth:4,slug:"\u91CD\u5B9A\u5411",text:"\u91CD\u5B9A\u5411"},{depth:4,slug:"\u8DE8\u57DF",text:"\u8DE8\u57DF"},{depth:4,slug:"\u8D85\u65F6",text:"\u8D85\u65F6"},{depth:4,slug:"\u5355\u673A\u9650\u6D41",text:"\u5355\u673A\u9650\u6D41"},{depth:4,slug:"\u91CD\u8BD5",text:"\u91CD\u8BD5"},{depth:4,slug:"\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE",text:"\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE"},{depth:4,slug:"\u8D1F\u8F7D\u5747\u8861",text:"\u8D1F\u8F7D\u5747\u8861"},{depth:4,slug:"cookie\u4EB2\u548C\u6027",text:"Cookie\u4EB2\u548C\u6027"},{depth:4,slug:"ip\u8BBF\u95EE\u63A7\u5236",text:"IP\u8BBF\u95EE\u63A7\u5236"},{depth:3,slug:"\u5B89\u5168\u9632\u62A4",text:"\u5B89\u5168\u9632\u62A4"},{depth:4,slug:"\u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u524D\u7684\u901A\u4FE1\u52A0\u5BC6",text:"\u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u524D\u7684\u901A\u4FE1\u52A0\u5BC6"},{depth:4,slug:"\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1\u52A0\u5BC6",text:"\u7F51\u5173\u4E0E\u540E\u7AEF\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1\u52A0\u5BC6"},{depth:4,slug:"\u5B89\u5168\u8BA4\u8BC1",text:"\u5B89\u5168\u8BA4\u8BC1"},{depth:5,slug:"basic",text:"Basic"},{depth:2,slug:"\u5907\u6CE8",text:"\u5907\u6CE8"}]},e=a((p,I,H)=>{const{layout:y,...i}=n;return i.file=s,i.url=r,u`${b()}${l(t)}`})});export{e as Content,k as __tla,d as compiledContent,e as default,s as file,n as frontmatter,o as getHeadings,g as rawContent,r as url};
