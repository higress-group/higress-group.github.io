import{c as p,__tla as c}from"./astro-component.DIa0fJKh.js";import{r as d,m as g,u as h,__tla as u}from"./constant.Cq9jJUDl.js";import{__tla as m}from"./astro/assets-service.tyfV9CK3.js";let s,r,t,o,n,a,i,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u6982\u8FF0">\u6982\u8FF0</h2>
<p>\u672C\u6587\u65E8\u5728\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u4F7F\u7528 IDE \u6765\u8FDB\u884C Higress \u63A7\u5236\u53F0\uFF08\u4EE5\u4E0B\u7B80\u79F0\u63A7\u5236\u53F0\uFF09\u7684\u5F00\u53D1\u548C\u8C03\u8BD5\u5DE5\u4F5C\u3002</p>
<h2 id="\u4EE3\u7801\u7ED3\u6784">\u4EE3\u7801\u7ED3\u6784</h2>
<p>\u63A7\u5236\u53F0\u7684\u4EE3\u7801\u4ED3\u5E93\u5730\u5740\u4E3A <a href="https://github.com/higress-group/higress-console" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/higress-console</a>\u3002</p>
<p>\u63A7\u5236\u53F0\u9879\u76EE\u4F7F\u7528\u4E86\u524D\u540E\u7AEF\u5206\u79BB\u7684\u67B6\u6784\u3002\u5728\u5C06\u4EE3\u7801\u4E0B\u8F7D\u5230\u672C\u5730\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6574\u4E2A\u9879\u76EE\u4E3B\u8981\u7531\u4EE5\u4E0B\u4E09\u4E2A\u76EE\u5F55\u7EC4\u6210\uFF1Abackend\u3001frontend \u548C helm\u3002\u5B83\u4EEC\u4E5F\u5206\u522B\u5BF9\u5E94\u4E86\u9879\u76EE\u7684\u4E09\u4E2A\u90E8\u5206\uFF1A\u540E\u7AEF\u3001\u524D\u7AEF\u548C\u90E8\u7F72\u3002</p>
<h3 id="backend\u540E\u7AEF\u90E8\u5206">Backend\uFF1A\u540E\u7AEF\u90E8\u5206</h3>
<p>\u540E\u7AEF\u90E8\u5206\u662F\u4E00\u4E2A\u4F7F\u7528 Maven \u6784\u5EFA\u914D\u7F6E\u7684 Java \u9879\u76EE\uFF0C\u5176\u4E2D\u5171\u6709\u4E24\u4E2A\u6A21\u5757\uFF1Asdk \u548C console\u3002</p>
<h4 id="sdk">SDK</h4>
<p>sdk \u4E2D\u5305\u542B\u4E86\u5B9A\u4E49\u4E86 Higress \u6CBB\u7406\u5E73\u9762\u7684\u6838\u5FC3\u6570\u636E\u6A21\u578B\u548C\u4E1A\u52A1\u903B\u8F91\uFF0C\u5982\u8DEF\u7531\u6A21\u578B\u3001Wasm \u63D2\u4EF6\u6A21\u578B\u3001\u914D\u7F6E\u6A21\u578B\u8F6C\u6362\u548C\u8BFB\u5199\u903B\u8F91\u7B49\u3002\u5B83\u4E5F\u540C\u6837\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u4EA7\u54C1\u53D1\u5E03\u5230\u4E86 Maven \u4E2D\u592E\u4ED3\u5E93\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u4E16\u754C\u4F7F\u7528\u8FD9\u4E2A SDK \u6765\u8FDB\u884C\u9762\u5411 Higress \u7684\u6CBB\u7406\u529F\u80FD\u5F00\u53D1\uFF08<a href="/blog/admin-sdk-intro" referrerpolicy="unsafe-url">\u53C2\u8003\u6587\u6863</a>\uFF09\u3002</p>
<p>\u9879\u76EE\u4E2D\u7684\u6838\u5FC3\u5305\u5982\u4E0B\uFF1A</p>
<ul>
<li>config\uFF1ASDK \u521D\u59CB\u5316\u914D\u7F6E\u6A21\u578B</li>
<li>constant\uFF1A\u5404\u7C7B\u5E38\u91CF</li>
<li>model\uFF1A\u5404\u7C7B\u914D\u7F6E\u6A21\u578B</li>
<li>service\uFF1A\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91\u670D\u52A1
<ul>
<li>kubernetes\uFF1A\u4E0E K8s \u6A21\u578B\u548C API \u76F8\u5173\u7684\u670D\u52A1</li>
</ul>
</li>
</ul>
<h4 id="console">Console</h4>
<p>console \u4E2D\u5B9A\u4E49\u4E86\u63A7\u5236\u53F0\u6240\u4F7F\u7528\u7684 Restful API \u548C\u4E00\u4E9B\u754C\u9762\u76F8\u5173\u7684\u975E\u6838\u5FC3\u529F\u80FD\uFF0C\u4F8B\u5982\u76D1\u63A7\u770B\u677F\u7BA1\u7406\u3001\u7528\u6237\u914D\u7F6E\u7BA1\u7406\u7B49\u3002</p>
<p>\u9879\u76EE\u4E2D\u7684\u6838\u5FC3\u5305\u5982\u4E0B\uFF1A</p>
<ul>
<li>client\uFF1A\u5C01\u88C5\u8BBF\u95EE\u5916\u90E8 API \u7684\u5BA2\u6237\u7AEF</li>
<li>constant\uFF1A\u5404\u7C7B\u5E38\u91CF</li>
<li>controller\uFF1ARestful API \u63A7\u5236\u5668</li>
<li>service\uFF1A\u4E1A\u52A1\u670D\u52A1\u903B\u8F91</li>
</ul>
<h3 id="frontend\u524D\u7AEF\u90E8\u5206">Frontend\uFF1A\u524D\u7AEF\u90E8\u5206</h3>
<p>\u524D\u7AEF\u90E8\u5206\u662F\u4E00\u4E2A NodeJS \u9879\u76EE\uFF0C\u4F7F\u7528\u57FA\u4E8E React \u7684\u5E94\u7528\u7814\u53D1\u6846\u67B6<a href="https://v3.ice.work/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u98DE\u51B0\uFF08ICE\uFF09</a>\u642D\u5EFA\u3002</p>
<p>\u6574\u4E2A\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A</p>
<ul>
<li>public\uFF1A\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684\u9759\u6001\u8D44\u6E90</li>
<li>src\uFF1A\u6838\u5FC3\u4EE3\u7801\u90E8\u5206
<ul>
<li>components\uFF1A\u5728\u9879\u76EE\u4E2D\u88AB\u590D\u7528\u7684\u5C0F\u578B\u7EC4\u4EF6</li>
<li>interfaces\uFF1A\u4E0E API \u4EA4\u4E92\u8FC7\u7A0B\u4E2D\u9700\u8981\u4F7F\u7528\u5230\u7684\u6570\u636E\u6A21\u578B</li>
<li>locales\uFF1A\u56FD\u9645\u5316\u8D44\u6E90\u6587\u4EF6</li>
<li>models\uFF1A\u524D\u7AEF\u9875\u9762\u4E0A\u4E0B\u6587\u4E2D\u9700\u8981\u4F7F\u7528\u5230\u7684\u6570\u636E\u6A21\u578B</li>
<li>pages\uFF1A\u5404\u4E2A\u524D\u7AEF\u9875\u9762\u53CA\u5176\u5185\u90E8\u7EC4\u4EF6</li>
<li>services\uFF1A\u4E0E API \u8FDB\u884C\u4EA4\u4E92\u903B\u8F91\u5C01\u88C5</li>
</ul>
</li>
<li>ice.config.mts\uFF1A\u98DE\u51B0\u7684\u9879\u76EE\u914D\u7F6E\u6587\u4EF6</li>
</ul>
<h3 id="helm\u90E8\u7F72\u90E8\u5206">Helm\uFF1A\u90E8\u7F72\u90E8\u5206</h3>
<p>\u63A7\u5236\u53F0\u4F7F\u7528 Helm Chart \u8FDB\u884C\u90E8\u7F72\u3002\u8FD9\u4E00\u90E8\u5206\u5C31\u662F Helm Chart \u7684\u4EE3\u7801\u3002\u6574\u4F53\u4EE3\u7801\u7ED3\u6784\u9075\u5FAA Helm \u7684\u5B98\u65B9\u89C4\u8303\uFF0C\u53EF\u53C2\u8003 <a href="https://helm.sh/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Helm \u5B98\u7F51</a>\u3002</p>
<h2 id="\u672C\u5730\u8FD0\u884C">\u672C\u5730\u8FD0\u884C</h2>
<h3 id="\u540E\u7AEF\u90E8\u5206">\u540E\u7AEF\u90E8\u5206</h3>
<h4 id="\u73AF\u5883\u51C6\u5907">\u73AF\u5883\u51C6\u5907</h4>
<p>\u63A7\u5236\u53F0\u7684\u6B63\u5E38\u8FD0\u884C\u4F9D\u8D56 Higress \u6838\u5FC3\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u51C6\u5907\u4E00\u4E2A\u5B89\u88C5\u597D\u7684 Higress \u96C6\u7FA4\u3002\u5927\u5BB6\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A<a href="/docs/latest/user/quickstart" referrerpolicy="unsafe-url">\u94FE\u63A5</a>\u3002\u8003\u8651\u5230\u672C\u5730\u8C03\u8BD5\u7684\u4FBF\u5229\u5EA6\uFF0C\u5EFA\u8BAE\u5927\u5BB6\u4F7F\u7528\u672C\u5730 K8s \u73AF\u5883\u7684\u65B9\u6CD5\u8FDB\u884C\u5B89\u88C5\u3002</p>
<p>\u63A7\u5236\u53F0\u7684\u540E\u7AEF\u9879\u76EE\u8981\u6C42 Java \u7248\u672C\u4E0D\u4F4E\u4E8E 17\uFF0C\u6240\u4EE5\u8BF7\u786E\u8BA4\u672C\u5730\u5B89\u88C5\u7684 JDK \u7248\u672C\u6EE1\u8DB3\u8981\u6C42\u3002</p>
<h4 id="\u542F\u52A8\u9879\u76EE">\u542F\u52A8\u9879\u76EE</h4>
<p>\u63A7\u5236\u53F0\u7684\u5916\u90E8\u670D\u52A1\u4F9D\u8D56\u4E3B\u8981\u6709\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u662F K8s API\uFF0C\u53E6\u4E00\u4E2A\u662F Higress Controller\u3002</p>
<p>\u8BBF\u95EE K8s API\uFF0C\u63A7\u5236\u53F0\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u672C\u5730\u9ED8\u8BA4\u7684 kubeconfig \uFF08\u5373 <code dir="auto">~/.kube/config</code>\uFF09\u3002\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 <code dir="auto">HIGRESS_CONSOLE_KUBE_CONFIG</code> \u73AF\u5883\u53D8\u91CF\u6765\u6307\u5B9A\u5BF9\u5E94\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</p>
<p>\u63A7\u5236\u53F0\u5728\u672C\u5730\u8FD0\u884C\u72B6\u6001\u4E0B\uFF0C\u6765\u8BBF\u95EE K8s \u96C6\u7FA4\uFF0C\u4F7F\u7528\u672C\u5730\u7684 15014 \u7AEF\u53E3\u6765\u8BBF\u95EE Higress Controller\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u524D\u9762\u5B89\u88C5\u597D\u7684 Higress \u5B9E\u4F8B\u4E2D controller \u7684 15014 \u7AEF\u53E3\u6620\u5C04\u5230\u672C\u5730\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">deployment/higress-controller</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">15014</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward deployment/higress-controller -n higress-system 15014"><div></div></button></div></figure></div>
<p><img src="/img/blog/console-dev/port-forward.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u7136\u540E\u4F7F\u7528\u9879\u76EE\u7684\u4E3B\u7C7B <code dir="auto">com.alibaba.higress.console.HigressConsoleApplication</code> \u8FDB\u884C\u542F\u52A8\u5373\u53EF\u3002\u7B49\u5F85\u542F\u52A8\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528 <code dir="auto">http://localhost:8080/</code> \u6765\u8BBF\u95EE\u4E86\u3002</p>
<p><img src="/img/blog/console-dev/backend-start.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u5982\u679C\u4F60\u662F\u7B2C\u4E00\u6B21\u542F\u52A8\uFF0C\u90A3\u4E48\u8BBF\u95EE\u4E0A\u8FF0\u5730\u5740\u7684\u65F6\u5019\u4F1A\u53D1\u73B0\u5E76\u6CA1\u6709\u9875\u9762\u51FA\u73B0\u3002\u5982\u679C\u53EA\u662F\u8981\u8C03\u8BD5 API\uFF0C\u8FD9\u6837\u4E5F\u662F\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u7684\u3002\u4F46\u5982\u679C\u8981\u7ED3\u5408\u7F51\u9875\u8FDB\u884C\u8C03\u8BD5\uFF0C\u90A3\u4E48\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6267\u884C\u4E00\u6B21 Maven \u6784\u5EFA\uFF0C\u751F\u6210\u524D\u7AEF\u9875\u9762\u8D44\u6E90\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">./mvnw</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clean</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Dmaven.test.skip=true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="./mvnw clean package -Dmaven.test.skip=true"><div></div></button></div></figure></div>
<p><img src="/img/blog/console-dev/backend-build.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h3 id="\u524D\u7AEF\u90E8\u5206">\u524D\u7AEF\u90E8\u5206</h3>
<h4 id="\u4F9D\u8D56\u5B89\u88C5">\u4F9D\u8D56\u5B89\u88C5</h4>
<p>\u63A7\u5236\u53F0\u7684\u524D\u7AEF\u9879\u76EE\u8981\u6C42 NodeJS \u7684\u7248\u672C\u4E0D\u4F4E\u4E8E 16\uFF0C\u6240\u4EE5\u8BF7\u786E\u8BA4\u672C\u5730\u5B89\u88C5\u7684 NodeJS \u7248\u672C\u6EE1\u8DB3\u8981\u6C42\u3002</p>
<p>\u7136\u540E\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u9879\u76EE\u6240\u9700\u7684\u5404\u4E2A\u4F9D\u8D56\u5305\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">npm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install"><div></div></button></div></figure></div>
<h4 id="\u9879\u76EE\u542F\u52A8">\u9879\u76EE\u542F\u52A8</h4>
<p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5951\u5408\u542F\u52A8\u524D\u7AEF\u9875\u9762\u9879\u76EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">npm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">start</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="npm start"><div></div></button></div></figure></div>
<p><img src="/img/blog/console-dev/frontend-start.png" alt="img.png" referrerpolicy="no-referrer"></p>
<p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u524D\u7AEF\u9875\u9762\u4F1A\u8BBF\u95EE Higress \u5B98\u65B9\u63D0\u4F9B\u7684\u6F14\u793A\u7248\u63A7\u5236\u53F0 API\u3002\u5982\u679C\u4E0D\u5E0C\u671B\u5F71\u54CD\u7EBF\u4E0A\u6F14\u793A\u6570\u636E\uFF0C\u6216\u9700\u8981\u4E0E\u540E\u7AEF API \u8FDB\u884C\u8054\u8C03\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 <code dir="auto">ice.config.mts</code> \u6587\u4EF6\uFF0C\u5C06\u5176\u4E2D\u7684 <code dir="auto">http://demo.higress.io/</code> \u66FF\u6362\u4E3A\u672C\u5730\u7684\u670D\u52A1\u5730\u5740\uFF08\u4F8B\u5982\uFF1A<code dir="auto">http://127.0.0.1:8080/</code>\uFF09\uFF0C\u7136\u540E\u91CD\u65B0\u542F\u52A8\u524D\u7AEF\u9879\u76EE\u3002\u8FD9\u6837\u9875\u9762\u4E0A\u8BBF\u95EE\u7684\u5C31\u662F\u672C\u5730\u7684\u6D4B\u8BD5\u670D\u52A1\u4E86\u3002</p>
<p><img src="/img/blog/console-dev/frontend-local-api.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u955C\u50CF\u6784\u5EFA">\u955C\u50CF\u6784\u5EFA</h2>
<p>\u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 <code dir="auto">backend</code> \u76EE\u5F55\u5E76\u6267\u884C <code dir="auto">build.sh</code> \u5373\u53EF\u542F\u52A8\u955C\u50CF\u6784\u5EFA\u3002\u6784\u5EFA\u751F\u6210\u7684\u955C\u50CF\u540D\u79F0\u4E3A <code dir="auto">higress-console:0.0.1</code>\u3002</p>
<p>\u6CE8\u610F\uFF1A\u5982\u679C\u5C1D\u8BD5\u5728 Windows \u4E0B\u6784\u5EFA\uFF0C\u8BF7\u52A1\u5FC5\u786E\u8BA4\u8BE5\u76EE\u5F55\u4E0B\u7684 <code dir="auto">start.sh</code> \u4F7F\u7528\u7684\u662F Linux \u7684\u6362\u884C\u7B26\uFF08\u5373 <code dir="auto">LF</code>\uFF09\u3002\u5426\u5219\uFF0C\u6784\u5EFA\u751F\u6210\u7684\u955C\u50CF\u5C06\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\u3002</p>
<p><img src="/img/blog/console-dev/image-build.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h2 id="\u603B\u7ED3">\u603B\u7ED3</h2>
<p>\u63A7\u5236\u53F0\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86 Higress \u6CBB\u7406\u4FA7\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u57FA\u7840\u7684\u5F00\u7BB1\u5373\u7528\u4F53\u9A8C\u3002\u793E\u533A\u4E5F\u4F1A\u5728\u63A7\u5236\u53F0\u65B9\u9762\u6301\u7EED\u53D1\u529B\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u4E30\u5BCC\u7684\u3001\u66F4\u4FBF\u6377\u7684\u7F51\u5173\u6CBB\u7406\u4F53\u9A8C\u3002\u5E0C\u671B\u672C\u6587\u53EF\u4EE5\u8BA9\u66F4\u591A\u7684\u5F00\u53D1\u8005\u52A0\u5165\u63A7\u5236\u53F0\u7684\u7814\u53D1\u961F\u4F0D\u4E2D\uFF0C\u4E3A\u63A7\u5236\u53F0\u7684\u5347\u7EA7\u8FED\u4EE3\u8D21\u732E\u4E00\u4EFD\u529B\u91CF\u3002</p>
<p><a href="https://github.com/alibaba/higress/issues/480" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u6B22\u8FCE\u53C2\u4E0E\u963F\u91CC\u5F00\u6E90\u8D21\u732E\u{1F44F}</a></p>`,o={title:"\u6559\u7A0B\uFF1A\u5982\u4F55\u5728\u672C\u5730\u5F00\u53D1\u548C\u8C03\u8BD5 Higress \u63A7\u5236\u53F0",keywords:["higress","console"],description:"\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u4F7F\u7528IDE\u7B49\u5F00\u53D1\u5DE5\u5177\u8FDB\u884CHigress\u63A7\u5236\u53F0\u76F8\u5173\u7684\u5F00\u53D1\u548C\u8C03\u8BD5\u5DE5\u4F5C\u3002",author:"CH3CHO",date:"2024-03-02",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/console-dev.md",category:"article"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/console-dev.md",i=void 0,a=function(){return`
## \u6982\u8FF0

\u672C\u6587\u65E8\u5728\u4ECB\u7ECD\u5982\u4F55\u5728\u672C\u5730\u4F7F\u7528 IDE \u6765\u8FDB\u884C Higress \u63A7\u5236\u53F0\uFF08\u4EE5\u4E0B\u7B80\u79F0\u63A7\u5236\u53F0\uFF09\u7684\u5F00\u53D1\u548C\u8C03\u8BD5\u5DE5\u4F5C\u3002

## \u4EE3\u7801\u7ED3\u6784

\u63A7\u5236\u53F0\u7684\u4EE3\u7801\u4ED3\u5E93\u5730\u5740\u4E3A [https://github.com/higress-group/higress-console](https://github.com/higress-group/higress-console)\u3002

\u63A7\u5236\u53F0\u9879\u76EE\u4F7F\u7528\u4E86\u524D\u540E\u7AEF\u5206\u79BB\u7684\u67B6\u6784\u3002\u5728\u5C06\u4EE3\u7801\u4E0B\u8F7D\u5230\u672C\u5730\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6574\u4E2A\u9879\u76EE\u4E3B\u8981\u7531\u4EE5\u4E0B\u4E09\u4E2A\u76EE\u5F55\u7EC4\u6210\uFF1Abackend\u3001frontend \u548C helm\u3002\u5B83\u4EEC\u4E5F\u5206\u522B\u5BF9\u5E94\u4E86\u9879\u76EE\u7684\u4E09\u4E2A\u90E8\u5206\uFF1A\u540E\u7AEF\u3001\u524D\u7AEF\u548C\u90E8\u7F72\u3002

### Backend\uFF1A\u540E\u7AEF\u90E8\u5206

\u540E\u7AEF\u90E8\u5206\u662F\u4E00\u4E2A\u4F7F\u7528 Maven \u6784\u5EFA\u914D\u7F6E\u7684 Java \u9879\u76EE\uFF0C\u5176\u4E2D\u5171\u6709\u4E24\u4E2A\u6A21\u5757\uFF1Asdk \u548C console\u3002

#### SDK

sdk \u4E2D\u5305\u542B\u4E86\u5B9A\u4E49\u4E86 Higress \u6CBB\u7406\u5E73\u9762\u7684\u6838\u5FC3\u6570\u636E\u6A21\u578B\u548C\u4E1A\u52A1\u903B\u8F91\uFF0C\u5982\u8DEF\u7531\u6A21\u578B\u3001Wasm \u63D2\u4EF6\u6A21\u578B\u3001\u914D\u7F6E\u6A21\u578B\u8F6C\u6362\u548C\u8BFB\u5199\u903B\u8F91\u7B49\u3002\u5B83\u4E5F\u540C\u6837\u4F5C\u4E3A\u4E00\u4E2A\u72EC\u7ACB\u4EA7\u54C1\u53D1\u5E03\u5230\u4E86 Maven \u4E2D\u592E\u4ED3\u5E93\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u4E16\u754C\u4F7F\u7528\u8FD9\u4E2A SDK \u6765\u8FDB\u884C\u9762\u5411 Higress \u7684\u6CBB\u7406\u529F\u80FD\u5F00\u53D1\uFF08[\u53C2\u8003\u6587\u6863](/blog/admin-sdk-intro)\uFF09\u3002

\u9879\u76EE\u4E2D\u7684\u6838\u5FC3\u5305\u5982\u4E0B\uFF1A

- config\uFF1ASDK \u521D\u59CB\u5316\u914D\u7F6E\u6A21\u578B
- constant\uFF1A\u5404\u7C7B\u5E38\u91CF
- model\uFF1A\u5404\u7C7B\u914D\u7F6E\u6A21\u578B
- service\uFF1A\u6838\u5FC3\u4E1A\u52A1\u903B\u8F91\u670D\u52A1
  - kubernetes\uFF1A\u4E0E K8s \u6A21\u578B\u548C API \u76F8\u5173\u7684\u670D\u52A1

#### Console

console \u4E2D\u5B9A\u4E49\u4E86\u63A7\u5236\u53F0\u6240\u4F7F\u7528\u7684 Restful API \u548C\u4E00\u4E9B\u754C\u9762\u76F8\u5173\u7684\u975E\u6838\u5FC3\u529F\u80FD\uFF0C\u4F8B\u5982\u76D1\u63A7\u770B\u677F\u7BA1\u7406\u3001\u7528\u6237\u914D\u7F6E\u7BA1\u7406\u7B49\u3002

\u9879\u76EE\u4E2D\u7684\u6838\u5FC3\u5305\u5982\u4E0B\uFF1A

- client\uFF1A\u5C01\u88C5\u8BBF\u95EE\u5916\u90E8 API \u7684\u5BA2\u6237\u7AEF 
- constant\uFF1A\u5404\u7C7B\u5E38\u91CF
- controller\uFF1ARestful API \u63A7\u5236\u5668
- service\uFF1A\u4E1A\u52A1\u670D\u52A1\u903B\u8F91

### Frontend\uFF1A\u524D\u7AEF\u90E8\u5206

\u524D\u7AEF\u90E8\u5206\u662F\u4E00\u4E2A NodeJS \u9879\u76EE\uFF0C\u4F7F\u7528\u57FA\u4E8E React \u7684\u5E94\u7528\u7814\u53D1\u6846\u67B6[\u98DE\u51B0\uFF08ICE\uFF09](https://v3.ice.work/)\u642D\u5EFA\u3002

\u6574\u4E2A\u9879\u76EE\u7684\u76EE\u5F55\u7ED3\u6784\u5982\u4E0B\uFF1A

- public\uFF1A\u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684\u9759\u6001\u8D44\u6E90
- src\uFF1A\u6838\u5FC3\u4EE3\u7801\u90E8\u5206
  - components\uFF1A\u5728\u9879\u76EE\u4E2D\u88AB\u590D\u7528\u7684\u5C0F\u578B\u7EC4\u4EF6
  - interfaces\uFF1A\u4E0E API \u4EA4\u4E92\u8FC7\u7A0B\u4E2D\u9700\u8981\u4F7F\u7528\u5230\u7684\u6570\u636E\u6A21\u578B
  - locales\uFF1A\u56FD\u9645\u5316\u8D44\u6E90\u6587\u4EF6
  - models\uFF1A\u524D\u7AEF\u9875\u9762\u4E0A\u4E0B\u6587\u4E2D\u9700\u8981\u4F7F\u7528\u5230\u7684\u6570\u636E\u6A21\u578B
  - pages\uFF1A\u5404\u4E2A\u524D\u7AEF\u9875\u9762\u53CA\u5176\u5185\u90E8\u7EC4\u4EF6
  - services\uFF1A\u4E0E API \u8FDB\u884C\u4EA4\u4E92\u903B\u8F91\u5C01\u88C5
- ice.config.mts\uFF1A\u98DE\u51B0\u7684\u9879\u76EE\u914D\u7F6E\u6587\u4EF6

### Helm\uFF1A\u90E8\u7F72\u90E8\u5206

\u63A7\u5236\u53F0\u4F7F\u7528 Helm Chart \u8FDB\u884C\u90E8\u7F72\u3002\u8FD9\u4E00\u90E8\u5206\u5C31\u662F Helm Chart \u7684\u4EE3\u7801\u3002\u6574\u4F53\u4EE3\u7801\u7ED3\u6784\u9075\u5FAA Helm \u7684\u5B98\u65B9\u89C4\u8303\uFF0C\u53EF\u53C2\u8003 [Helm \u5B98\u7F51](https://helm.sh/)\u3002

## \u672C\u5730\u8FD0\u884C

### \u540E\u7AEF\u90E8\u5206

#### \u73AF\u5883\u51C6\u5907

\u63A7\u5236\u53F0\u7684\u6B63\u5E38\u8FD0\u884C\u4F9D\u8D56 Higress \u6838\u5FC3\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u51C6\u5907\u4E00\u4E2A\u5B89\u88C5\u597D\u7684 Higress \u96C6\u7FA4\u3002\u5927\u5BB6\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A[\u94FE\u63A5](/docs/latest/user/quickstart)\u3002\u8003\u8651\u5230\u672C\u5730\u8C03\u8BD5\u7684\u4FBF\u5229\u5EA6\uFF0C\u5EFA\u8BAE\u5927\u5BB6\u4F7F\u7528\u672C\u5730 K8s \u73AF\u5883\u7684\u65B9\u6CD5\u8FDB\u884C\u5B89\u88C5\u3002

\u63A7\u5236\u53F0\u7684\u540E\u7AEF\u9879\u76EE\u8981\u6C42 Java \u7248\u672C\u4E0D\u4F4E\u4E8E 17\uFF0C\u6240\u4EE5\u8BF7\u786E\u8BA4\u672C\u5730\u5B89\u88C5\u7684 JDK \u7248\u672C\u6EE1\u8DB3\u8981\u6C42\u3002

#### \u542F\u52A8\u9879\u76EE

\u63A7\u5236\u53F0\u7684\u5916\u90E8\u670D\u52A1\u4F9D\u8D56\u4E3B\u8981\u6709\u4E24\u4E2A\uFF0C\u4E00\u4E2A\u662F K8s API\uFF0C\u53E6\u4E00\u4E2A\u662F Higress Controller\u3002

\u8BBF\u95EE K8s API\uFF0C\u63A7\u5236\u53F0\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u672C\u5730\u9ED8\u8BA4\u7684 kubeconfig \uFF08\u5373 \`~/.kube/config\`\uFF09\u3002\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528 \`HIGRESS_CONSOLE_KUBE_CONFIG\` \u73AF\u5883\u53D8\u91CF\u6765\u6307\u5B9A\u5BF9\u5E94\u7684\u6587\u4EF6\u8DEF\u5F84\u3002

\u63A7\u5236\u53F0\u5728\u672C\u5730\u8FD0\u884C\u72B6\u6001\u4E0B\uFF0C\u6765\u8BBF\u95EE K8s \u96C6\u7FA4\uFF0C\u4F7F\u7528\u672C\u5730\u7684 15014 \u7AEF\u53E3\u6765\u8BBF\u95EE Higress Controller\u3002\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u524D\u9762\u5B89\u88C5\u597D\u7684 Higress \u5B9E\u4F8B\u4E2D controller \u7684 15014 \u7AEF\u53E3\u6620\u5C04\u5230\u672C\u5730\uFF1A

\`\`\`bash
kubectl port-forward deployment/higress-controller -n higress-system 15014
\`\`\`

![img.png](/img/blog/console-dev/port-forward.png)

\u7136\u540E\u4F7F\u7528\u9879\u76EE\u7684\u4E3B\u7C7B \`com.alibaba.higress.console.HigressConsoleApplication\` \u8FDB\u884C\u542F\u52A8\u5373\u53EF\u3002\u7B49\u5F85\u542F\u52A8\u5B8C\u6210\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u4F7F\u7528 \`http://localhost:8080/\` \u6765\u8BBF\u95EE\u4E86\u3002

![img.png](/img/blog/console-dev/backend-start.png)

\u5982\u679C\u4F60\u662F\u7B2C\u4E00\u6B21\u542F\u52A8\uFF0C\u90A3\u4E48\u8BBF\u95EE\u4E0A\u8FF0\u5730\u5740\u7684\u65F6\u5019\u4F1A\u53D1\u73B0\u5E76\u6CA1\u6709\u9875\u9762\u51FA\u73B0\u3002\u5982\u679C\u53EA\u662F\u8981\u8C03\u8BD5 API\uFF0C\u8FD9\u6837\u4E5F\u662F\u53EF\u4EE5\u6B63\u5E38\u8FDB\u884C\u7684\u3002\u4F46\u5982\u679C\u8981\u7ED3\u5408\u7F51\u9875\u8FDB\u884C\u8C03\u8BD5\uFF0C\u90A3\u4E48\u9700\u8981\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6267\u884C\u4E00\u6B21 Maven \u6784\u5EFA\uFF0C\u751F\u6210\u524D\u7AEF\u9875\u9762\u8D44\u6E90\uFF1A

\`\`\`bash
./mvnw clean package -Dmaven.test.skip=true
\`\`\`

![img.png](/img/blog/console-dev/backend-build.png)

### \u524D\u7AEF\u90E8\u5206

#### \u4F9D\u8D56\u5B89\u88C5

\u63A7\u5236\u53F0\u7684\u524D\u7AEF\u9879\u76EE\u8981\u6C42 NodeJS \u7684\u7248\u672C\u4E0D\u4F4E\u4E8E 16\uFF0C\u6240\u4EE5\u8BF7\u786E\u8BA4\u672C\u5730\u5B89\u88C5\u7684 NodeJS \u7248\u672C\u6EE1\u8DB3\u8981\u6C42\u3002

\u7136\u540E\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5\u9879\u76EE\u6240\u9700\u7684\u5404\u4E2A\u4F9D\u8D56\u5305\uFF1A

\`\`\`bash
npm install
\`\`\`

#### \u9879\u76EE\u542F\u52A8

\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5951\u5408\u542F\u52A8\u524D\u7AEF\u9875\u9762\u9879\u76EE\uFF1A

\`\`\`bash
npm start
\`\`\`

![img.png](/img/blog/console-dev/frontend-start.png)

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u524D\u7AEF\u9875\u9762\u4F1A\u8BBF\u95EE Higress \u5B98\u65B9\u63D0\u4F9B\u7684\u6F14\u793A\u7248\u63A7\u5236\u53F0 API\u3002\u5982\u679C\u4E0D\u5E0C\u671B\u5F71\u54CD\u7EBF\u4E0A\u6F14\u793A\u6570\u636E\uFF0C\u6216\u9700\u8981\u4E0E\u540E\u7AEF API \u8FDB\u884C\u8054\u8C03\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684 \`ice.config.mts\` \u6587\u4EF6\uFF0C\u5C06\u5176\u4E2D\u7684 \`http://demo.higress.io/\` \u66FF\u6362\u4E3A\u672C\u5730\u7684\u670D\u52A1\u5730\u5740\uFF08\u4F8B\u5982\uFF1A\`http://127.0.0.1:8080/\`\uFF09\uFF0C\u7136\u540E\u91CD\u65B0\u542F\u52A8\u524D\u7AEF\u9879\u76EE\u3002\u8FD9\u6837\u9875\u9762\u4E0A\u8BBF\u95EE\u7684\u5C31\u662F\u672C\u5730\u7684\u6D4B\u8BD5\u670D\u52A1\u4E86\u3002

![img.png](/img/blog/console-dev/frontend-local-api.png)

## \u955C\u50CF\u6784\u5EFA

\u5728\u547D\u4EE4\u884C\u4E0B\u8FDB\u5165 \`backend\` \u76EE\u5F55\u5E76\u6267\u884C \`build.sh\` \u5373\u53EF\u542F\u52A8\u955C\u50CF\u6784\u5EFA\u3002\u6784\u5EFA\u751F\u6210\u7684\u955C\u50CF\u540D\u79F0\u4E3A \`higress-console:0.0.1\`\u3002

\u6CE8\u610F\uFF1A\u5982\u679C\u5C1D\u8BD5\u5728 Windows \u4E0B\u6784\u5EFA\uFF0C\u8BF7\u52A1\u5FC5\u786E\u8BA4\u8BE5\u76EE\u5F55\u4E0B\u7684 \`start.sh\` \u4F7F\u7528\u7684\u662F Linux \u7684\u6362\u884C\u7B26\uFF08\u5373 \`LF\`\uFF09\u3002\u5426\u5219\uFF0C\u6784\u5EFA\u751F\u6210\u7684\u955C\u50CF\u5C06\u65E0\u6CD5\u6B63\u5E38\u8FD0\u884C\u3002

![img.png](/img/blog/console-dev/image-build.png)

## \u603B\u7ED3

\u63A7\u5236\u53F0\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86 Higress \u6CBB\u7406\u4FA7\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u57FA\u7840\u7684\u5F00\u7BB1\u5373\u7528\u4F53\u9A8C\u3002\u793E\u533A\u4E5F\u4F1A\u5728\u63A7\u5236\u53F0\u65B9\u9762\u6301\u7EED\u53D1\u529B\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u4E30\u5BCC\u7684\u3001\u66F4\u4FBF\u6377\u7684\u7F51\u5173\u6CBB\u7406\u4F53\u9A8C\u3002\u5E0C\u671B\u672C\u6587\u53EF\u4EE5\u8BA9\u66F4\u591A\u7684\u5F00\u53D1\u8005\u52A0\u5165\u63A7\u5236\u53F0\u7684\u7814\u53D1\u961F\u4F0D\u4E2D\uFF0C\u4E3A\u63A7\u5236\u53F0\u7684\u5347\u7EA7\u8FED\u4EE3\u8D21\u732E\u4E00\u4EFD\u529B\u91CF\u3002

[\u6B22\u8FCE\u53C2\u4E0E\u963F\u91CC\u5F00\u6E90\u8D21\u732E\u{1F44F}](https://github.com/alibaba/higress/issues/480)
`},r=function(){return e},n=function(){return[{depth:2,slug:"\u6982\u8FF0",text:"\u6982\u8FF0"},{depth:2,slug:"\u4EE3\u7801\u7ED3\u6784",text:"\u4EE3\u7801\u7ED3\u6784"},{depth:3,slug:"backend\u540E\u7AEF\u90E8\u5206",text:"Backend\uFF1A\u540E\u7AEF\u90E8\u5206"},{depth:4,slug:"sdk",text:"SDK"},{depth:4,slug:"console",text:"Console"},{depth:3,slug:"frontend\u524D\u7AEF\u90E8\u5206",text:"Frontend\uFF1A\u524D\u7AEF\u90E8\u5206"},{depth:3,slug:"helm\u90E8\u7F72\u90E8\u5206",text:"Helm\uFF1A\u90E8\u7F72\u90E8\u5206"},{depth:2,slug:"\u672C\u5730\u8FD0\u884C",text:"\u672C\u5730\u8FD0\u884C"},{depth:3,slug:"\u540E\u7AEF\u90E8\u5206",text:"\u540E\u7AEF\u90E8\u5206"},{depth:4,slug:"\u73AF\u5883\u51C6\u5907",text:"\u73AF\u5883\u51C6\u5907"},{depth:4,slug:"\u542F\u52A8\u9879\u76EE",text:"\u542F\u52A8\u9879\u76EE"},{depth:3,slug:"\u524D\u7AEF\u90E8\u5206",text:"\u524D\u7AEF\u90E8\u5206"},{depth:4,slug:"\u4F9D\u8D56\u5B89\u88C5",text:"\u4F9D\u8D56\u5B89\u88C5"},{depth:4,slug:"\u9879\u76EE\u542F\u52A8",text:"\u9879\u76EE\u542F\u52A8"},{depth:2,slug:"\u955C\u50CF\u6784\u5EFA",text:"\u955C\u50CF\u6784\u5EFA"},{depth:2,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"}]},s=p((b,v,y)=>{const{layout:E,...l}=o;return l.file=t,l.url=i,d`${g()}${h(e)}`})});export{s as Content,f as __tla,r as compiledContent,s as default,t as file,o as frontmatter,n as getHeadings,a as rawContent,i as url};
