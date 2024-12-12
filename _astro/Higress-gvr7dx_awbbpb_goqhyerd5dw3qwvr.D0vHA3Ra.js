import{c as l,__tla as p}from"./astro-component.DIa0fJKh.js";import{r as v,m as r,u as f,__tla as g}from"./constant.BM2MCpQA.js";import{__tla as y}from"./astro/assets-service.tyfV9CK3.js";let s,c,i,a,o,t,d,u=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h1 id="\u524D\u8A00">\u524D\u8A00</h1>
<p>\u5728Spring Cloud\u5E94\u7528\u4E2D\u53EF\u4EE5\u975E\u5E38\u4F4E\u6210\u672C\u5730\u96C6\u6210Nacos\u5B9E\u73B0\u914D\u7F6E\u52A8\u6001\u5237\u65B0\uFF0C\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u901A\u8FC7Spring\u5B98\u65B9\u7684\u6CE8\u89E3@Value\u548C@ConfigurationProperties\uFF0C\u5F15\u7528Spring enviroment\u4E0A\u4E0B\u6587\u4E2D\u7684\u5C5E\u6027\u503C, \u5173\u4E8E\u8FD9\u90E8\u5206\u7684\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u7167<a href="%5Bhttps://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA" referrerpolicy="unsafe-url">\u300ASpring Cloud+Nacos+KMS \u52A8\u6001\u914D\u7F6E\u6700\u4F73\u5B9E\u8DF5\u300B</a>](<a href="https://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA))%E4%B8%80%E6%96%87%EF%BC%8C%E8%BF%99%E7%A7%8D%E7%94%A8%E6%B3%95%E7%9A%84%E6%9C%80%E5%A4%A7%E4%BC%98%E7%82%B9%E6%98%AF%E6%97%A0%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%BE%B5%E5%85%A5%E6%80%A7%EF%BC%8C%E4%BD%86%E4%B9%9F%E5%AD%98%E5%9C%A8%E8%AF%B8%E5%A4%9A%E9%99%90%E5%88%B6%EF%BC%8C%E6%AF%94%E5%A6%82%EF%BC%9A" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA))\u4E00\u6587\uFF0C\u8FD9\u79CD\u7528\u6CD5\u7684\u6700\u5927\u4F18\u70B9\u662F\u65E0\u4EE3\u7801\u5C42\u9762\u4FB5\u5165\u6027\uFF0C\u4F46\u4E5F\u5B58\u5728\u8BF8\u591A\u9650\u5236\uFF0C\u6BD4\u5982\uFF1A</a></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">* Nacos\u4E2D\u914D\u7F6E\u662F\u4F5C\u4E3ASpring\u4E0A\u4E0B\u6587enviroment\u7684\u5C5E\u6027\u6E90\u4E4B\u4E00\uFF0C\u83B7\u53D6\u5C5E\u6027\u65F6\u4F1A\u6536\u5230\u5176\u4ED6\u5C5E\u6027\u6E90\u7684\u5E72\u6270\uFF0C\u6BD4\u5982\u901A\u8FC7JVM\u53C2\u6570\u548C\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7684\u5C5E\u6027\u4F18\u5148\u7EA7\u6BD4Nacos\u4E2D\u7684\u66F4\u9AD8</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">* \u901A\u8FC7spring.config.import\u5BFC\u5165\u591A\u4E2ANacos\u914D\u7F6E\u65F6\uFF0C\u5176\u4E2D\u76F8\u540C\u7684key\u5BF9\u5E94\u7684\u5C5E\u6027\u53EA\u4F1A\u6709\u4E00\u4E2A\u751F\u6548\uFF0C\u9700\u8981\u63A7\u5236\u591A\u4E2A\u5C5E\u6027\u6E90\u7684key\u4E0D\u91CD\u590D\u6216\u8005\u5904\u7406\u56E0\u4F18\u5148\u7EA7\u95EE\u9898\u5BFC\u81F4\u7684\u5C5E\u6027\u8986\u76D6\u95EE\u9898\u3002\u65E0\u6CD5\u7CBE\u51C6\u83B7\u53D6\u6307\u5B9ANacos\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">* \u65E0\u6CD5\u5C06Nacos\u914D\u7F6E\u81EA\u52A8\u6CE8\u5165\u5BF9\u8C61\u7C7B\u578B\u7684\u5B57\u6BB5</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">* \u53EA\u80FD\u88AB\u52A8\u63A5\u53D7\u914D\u7F6E\u6700\u7EC8\u5185\u5BB9\uFF0C\u65E0\u6CD5\u5728\u914D\u7F6E\u53D8\u66F4\u65F6\u5BF9\u914D\u7F6E\u8FDB\u884C\u4E8C\u6B21\u5904\u7406\u6216\u8005\u89E6\u53D1\u5176\u4ED6\u4E1A\u52A1\u52A8\u4F5C\uFF0C\u65E0\u6CD5\u611F\u77E5\u6307\u5B9A\u7684\u5C5E\u6027\u53D8\u66F4\u524D\u540E\u7684\u8BE6\u7EC6\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">* \u901A\u8FC7@Value\u6CE8\u89E3\u5F15\u7528\u7684\u914D\u7F6E\u8981\u652F\u6301\u52A8\u6001\u5237\u65B0\uFF0C\u9700\u8981\u5728SpringBean\u4E0A\u6DFB\u52A0@RefreshScope\uFF0C\u914D\u7F6E\u66F4\u65B0\u65F6\u4F1A\u5148\u5C06Bean\u9500\u6BC1\u518D\u91CD\u65B0\u521B\u5EFA\u65B0\u7684Bean\uFF0C\u4F7F\u7528\u4E0D\u5F53\u6613\u4EA7\u751F\u7EBF\u4E0A\u95EE\u9898\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="    * Nacos\u4E2D\u914D\u7F6E\u662F\u4F5C\u4E3ASpring\u4E0A\u4E0B\u6587enviroment\u7684\u5C5E\u6027\u6E90\u4E4B\u4E00\uFF0C\u83B7\u53D6\u5C5E\u6027\u65F6\u4F1A\u6536\u5230\u5176\u4ED6\u5C5E\u6027\u6E90\u7684\u5E72\u6270\uFF0C\u6BD4\u5982\u901A\u8FC7JVM\u53C2\u6570\u548C\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7684\u5C5E\u6027\u4F18\u5148\u7EA7\u6BD4Nacos\u4E2D\u7684\u66F4\u9AD8\x7F\x7F    * \u901A\u8FC7spring.config.import\u5BFC\u5165\u591A\u4E2ANacos\u914D\u7F6E\u65F6\uFF0C\u5176\u4E2D\u76F8\u540C\u7684key\u5BF9\u5E94\u7684\u5C5E\u6027\u53EA\u4F1A\u6709\u4E00\u4E2A\u751F\u6548\uFF0C\u9700\u8981\u63A7\u5236\u591A\u4E2A\u5C5E\u6027\u6E90\u7684key\u4E0D\u91CD\u590D\u6216\u8005\u5904\u7406\u56E0\u4F18\u5148\u7EA7\u95EE\u9898\u5BFC\u81F4\u7684\u5C5E\u6027\u8986\u76D6\u95EE\u9898\u3002\u65E0\u6CD5\u7CBE\u51C6\u83B7\u53D6\u6307\u5B9ANacos\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027\x7F\x7F    * \u65E0\u6CD5\u5C06Nacos\u914D\u7F6E\u81EA\u52A8\u6CE8\u5165\u5BF9\u8C61\u7C7B\u578B\u7684\u5B57\u6BB5\x7F\x7F    * \u53EA\u80FD\u88AB\u52A8\u63A5\u53D7\u914D\u7F6E\u6700\u7EC8\u5185\u5BB9\uFF0C\u65E0\u6CD5\u5728\u914D\u7F6E\u53D8\u66F4\u65F6\u5BF9\u914D\u7F6E\u8FDB\u884C\u4E8C\u6B21\u5904\u7406\u6216\u8005\u89E6\u53D1\u5176\u4ED6\u4E1A\u52A1\u52A8\u4F5C\uFF0C\u65E0\u6CD5\u611F\u77E5\u6307\u5B9A\u7684\u5C5E\u6027\u53D8\u66F4\u524D\u540E\u7684\u8BE6\u7EC6\u4FE1\u606F\x7F\x7F    * \u901A\u8FC7@Value\u6CE8\u89E3\u5F15\u7528\u7684\u914D\u7F6E\u8981\u652F\u6301\u52A8\u6001\u5237\u65B0\uFF0C\u9700\u8981\u5728SpringBean\u4E0A\u6DFB\u52A0@RefreshScope\uFF0C\u914D\u7F6E\u66F4\u65B0\u65F6\u4F1A\u5148\u5C06Bean\u9500\u6BC1\u518D\u91CD\u65B0\u521B\u5EFA\u65B0\u7684Bean\uFF0C\u4F7F\u7528\u4E0D\u5F53\u6613\u4EA7\u751F\u7EBF\u4E0A\u95EE\u9898\u3002"><div></div></button></div></figure></div>
<p>\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0C\u63D0\u5347\u5E94\u7528\u63A5\u5165Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u6613\u7528\u6027\uFF0CSpring Cloud Alibaba\u53D1\u5E03\u4E00\u5957\u5168\u65B0\u7684Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u6CE8\u89E3\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- @NacosConfig\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u5B57\u6BB5\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165\u5B57\u6BB5\uFF1B\u4F5C\u7528\u4E8ESpringBean Class\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165Bean\u7684\u5C5E\u6027\u4E2D\uFF1B\u4F5C\u7528\u4E8EFactoryBean \u65B9\u6CD5\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165Bean\u7684\u5C5E\u6027\u4E2D\uFF0C\u4E0D\u4F9D\u8D56RefreshScope\u6CE8\u89E3\u5373\u53EF\u751F\u6548\u3002</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- @NacosConfigListener\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\uFF0C\u5728Nacos\u4E2D\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u53C2\u6570\u5F62\u5F0F\u63A5\u53D7\u53D8\u66F4\u540E\u7684\u6700\u65B0\u914D\u7F6E\u5185\u5BB9\uFF0C\u652F\u6301\u4EE5\u5BF9\u8C61\u7C7B\u578B\u63A5\u6536\u7ED3\u679C\u3002</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- @NacosConfigKeysListener\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\uFF0C\u5728Nacos\u4E2D\u7684\u914D\u7F6E\u7684\u6307\u5B9A\u5C5E\u6027key\u96C6\u5408\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u53C2\u6570ConfigChangeEvent\u63A5\u53D7\u53D8\u66F4\u524D\u540E\u7684\u5C5E\u6027\u503C\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="- @NacosConfig\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u5B57\u6BB5\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165\u5B57\u6BB5\uFF1B\u4F5C\u7528\u4E8ESpringBean Class\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165Bean\u7684\u5C5E\u6027\u4E2D\uFF1B\u4F5C\u7528\u4E8EFactoryBean \u65B9\u6CD5\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165Bean\u7684\u5C5E\u6027\u4E2D\uFF0C\u4E0D\u4F9D\u8D56RefreshScope\u6CE8\u89E3\u5373\u53EF\u751F\u6548\u3002\x7F\x7F- @NacosConfigListener\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\uFF0C\u5728Nacos\u4E2D\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u53C2\u6570\u5F62\u5F0F\u63A5\u53D7\u53D8\u66F4\u540E\u7684\u6700\u65B0\u914D\u7F6E\u5185\u5BB9\uFF0C\u652F\u6301\u4EE5\u5BF9\u8C61\u7C7B\u578B\u63A5\u6536\u7ED3\u679C\u3002\x7F\x7F- @NacosConfigKeysListener\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\uFF0C\u5728Nacos\u4E2D\u7684\u914D\u7F6E\u7684\u6307\u5B9A\u5C5E\u6027key\u96C6\u5408\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u53C2\u6570ConfigChangeEvent\u63A5\u53D7\u53D8\u66F4\u524D\u540E\u7684\u5C5E\u6027\u503C\u3002"><div></div></button></div></figure></div>
<p>\u4EE5\u4E0B\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u4E09\u79CD\u6CE8\u89E3\u7684\u7528\u6CD5\u3002</p>
<h1 id="nacosconfig\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD">@NacosConfig\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD</h1>
<p>\u4F7F\u7528\u8BE5\u6CE8\u89E3\u53EF\u4EE5\u5C06\u6307\u5B9Anacos\u914D\u7F6E\u6CE8\u5165Spring Bean\u7684\u5B57\u6BB5\u4E2D\uFF0C\u53EF\u4EE5\u4F5C\u7528\u4E8ESpringBean\u7684\u5355\u4E00\u5B57\u6BB5\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u7528\u4E8ESpringBean\u4E0A(\u5305\u62EC\u5C06\u6CE8\u89E3\u52A0\u5728BeanClass\u4E0A\u4EE5\u53CA\u7ED3\u5408@Bean\u6CE8\u89E3\u5DE5\u5382Bean\u6CE8\u5165\u6A21\u5F0F)\uFF0C\u6CE8\u5165\u7684\u76EE\u6807\u7C7B\u578B\u4E2D\u652F\u6301\u57FA\u7840\u7C7B\u578B\uFF0CProperties\uFF0C\u96C6\u5408List<t>\uFF0CSet<t>\uFF0CMap<t>\u6CDB\u578B\uFF0C\u4EE5\u53CA\u5176\u4ED6\u4EFB\u610F\u81EA\u5B9A\u4E49Java Bean\u3002</t></t></t></p>
<p>\u5982\u679C\u914D\u7F6E\u683C\u5F0F\u4E3Ayaml\u548Cproperties\uFF0C\u4E5F\u53EF\u4EE5\u989D\u5916\u6307\u5B9Akey\u5B57\u6BB5\u540D\uFF0C\u52A0\u8F7D\u6307\u5B9Akey\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u3002</p>
<p><strong>\u6CE8\u89E3\u5B57\u6BB5\u89E3\u91CA</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@Retention(RetentionPolicy.RUNTIME)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@Target({ElementType.FIELD, ElementType.TYPE, ElementType.METHOD})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@Documented</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">public @interface NacosConfig {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">String group();</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">String dataId();</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">String key() default "";</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">String defaultValue() default "";</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@Retention(RetentionPolicy.RUNTIME)\x7F\x7F@Target({ElementType.FIELD, ElementType.TYPE, ElementType.METHOD})\x7F\x7F@Documented\x7F\x7Fpublic @interface NacosConfig {\x7F\x7F\x7F\x7F    String group();\x7F\x7F\x7F\x7F    String dataId();\x7F\x7F\x7F\x7F    String key() default &#x22;&#x22;;\x7F\x7F\x7F\x7F    String defaultValue() default &#x22;&#x22;;\x7F\x7F}"><div></div></button></div></figure></div>
<ul>
<li>
<p>group\uFF1A\u5F15\u5165\u7684\u914D\u7F6E\u6240\u5C5E\u5206\u7EC4</p>
</li>
<li>
<p>dataId: \u5F15\u5165\u7684\u914D\u7F6EDataId</p>
</li>
<li>
<p>key : \u914D\u7F6E\u683C\u5F0F\u4E3Ayaml\u548Cproperties\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u989D\u5916\u6307\u5B9Akey\u5B57\u6BB5\u540D\uFF0C\u52A0\u8F7D\u6307\u5B9Akey\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u3002</p>
</li>
<li>
<p>defaultValue\uFF1A\u5F53\u914D\u7F6E\u4E0D\u5B58\u5728\u6216\u8005\u914D\u7F6E\u5185\u6307\u5B9Akey\u5C5E\u6027\u4E3A\u7A7A\u65F6\uFF0C\u52A0\u8F7D\u7684\u9ED8\u8BA4\u503C\u3002</p>
</li>
</ul>
<p>*\u8BBF\u95EEnacos\u7684\u5168\u5C40\u53C2\u6570\u901A\u8FC7application.properties\u4E2Dspring.cloud.nacos.config.server-addr, spring.cloud.nacos.config.namespace\u53C2\u6570\u914D\u7F6E\u3002\u901A\u8FC7spring.config.import\u5BFC\u5165\u7684\u914D\u7F6E\u4F5C\u7528\u4E8ESpring\u7684@Value\u5F15\u7528\u5C5E\u6027\u6E90\uFF0C\u548C\u901A\u8FC7\u6CE8\u89E3\u5F15\u5165\u7684\u65B9\u5F0F\u76F8\u4E92\u72EC\u7ACB\uFF0C\u4F46\u5176\u5185\u90E8\u662F\u5171\u4EAB\u540C\u4E00\u4E2ANacosClient\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8BBF\u95EE\u7684\u662F\u540C\u4E00\u4E2ANacos\u5B9E\u4F8B\u4EE5\u53CA\u540C\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u914D\u7F6E\u3002</p>
<p><strong>\u7528\u6CD5\u793A\u4F8B</strong></p>
<h2 id="1\u52A0\u8F7D\u5B8C\u6574\u914D\u7F6E\u5185\u5BB9\u81F3string\u7C7B\u578B\u5B57\u6BB5">1\u3001\u52A0\u8F7D\u5B8C\u6574\u914D\u7F6E\u5185\u5BB9\u81F3String\u7C7B\u578B\u5B57\u6BB5</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "SampleApp.application.properties", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">String configContent;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfig(dataId = &#x22;SampleApp.application.properties&#x22;, group = &#x22;default&#x22;)\x7F\x7FString configContent;"><div></div></button></div></figure></div>
<p>\u5C06dataId=SampleApp.application.properties\uFF0Cgroup = default\u5BF9\u5E94\u7684\u914D\u7F6E\u7684\u5B8C\u6574\u5185\u5BB9\u6CE8\u5165\u5230configContent\u5B57\u6BB5\u3002</p>
<h2 id="2\u52A0\u8F7D\u914D\u7F6E\u4E2D\u7684\u6307\u5B9Akey\u5C5E\u6027\u81F3\u57FA\u7840\u7C7B\u578B\u5B57\u6BB5">2\u3001\u52A0\u8F7D\u914D\u7F6E\u4E2D\u7684\u6307\u5B9Akey\u5C5E\u6027\u81F3\u57FA\u7840\u7C7B\u578B\u5B57\u6BB5</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "SampleApp.application.properties", group = "default", key = "useCache", defaultValue = "false")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">boolean booleanValue;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfig(dataId = &#x22;SampleApp.application.properties&#x22;, group = &#x22;default&#x22;, key = &#x22;useCache&#x22;, defaultValue = &#x22;false&#x22;)\x7F\x7Fboolean booleanValue;"><div></div></button></div></figure></div>
<p>\u5C06dataId=SampleApp.application.properties\uFF0Cgroup = default\u5BF9\u5E94\u7684\u914D\u7F6E\u4E2D\u7684useCache\u5C5E\u6027\u503C\u6CE8\u5165\u5230booleanValue\u5B57\u6BB5\u3002</p>
<p>*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B\u4EE5\u53CA\u5176\u5C01\u88C5\u7C7B\u578B\u3002</p>
<h2 id="3\u52A0\u8F7Djson\u683C\u5F0F\u914D\u7F6E\u81F3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5B57\u6BB5">3\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5B57\u6BB5</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "scoreintArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">int[] scores;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfig(dataId = &#x22;scoreintArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7Fint[] scores;"><div></div></button></div></figure></div>
<p>\u5C06dataId=scoreintArray.json\uFF0Cgroup = default\u5BF9\u5E94\u7684json\u683C\u5F0F\u914D\u7F6E\u6CE8\u5165\u5230scores\u5B57\u6BB5\uFF0C\u9700\u4FDD\u8BC1\u914D\u7F6E\u683C\u5F0F\u53EF\u6B63\u5E38\u53CD\u5E8F\u5217\u5316\u3002</p>
<p>*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u4EE5\u53CA\u5176\u5C01\u88C5\u7C7B\u578B\u3002</p>
<p>*\u914D\u7F6E\u9700\u4EE5.json\u7ED3\u5C3E\u4E14\u914D\u7F6E\u5185\u5BB9\u4E3Ajson\u683C\u5F0F\u3002</p>
<h2 id="4\u52A0\u8F7D\u914D\u7F6E\u81F3properties\u7C7B\u578B\u5B57\u6BB5">4\u3001\u52A0\u8F7D\u914D\u7F6E\u81F3Properties\u7C7B\u578B\u5B57\u6BB5</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "SampleApp.application.properties", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Properties properties = new Properties();</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfig(dataId = &#x22;SampleApp.application.properties&#x22;, group = &#x22;default&#x22;)\x7F\x7FProperties properties = new Properties();"><div></div></button></div></figure></div>
<p>\u5C06dataId = \u201CSampleApp.application.properties\u201D, group = \u201Cdefault\u201D\u7684\u914D\u7F6E\u5185\u5BB9\u6CE8\u5165\u5230properties\u5B57\u6BB5\u4E2D\u3002\u53EF\u4EE5\u901A\u8FC7properties.getProperty\u65B9\u6CD5\u83B7\u53D6\u5176\u5185\u90E8\u5C5E\u6027\u503C\u3002\u5F53\u8FDC\u7AEFNacos\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u4E2D\uFF0Cproperties\u5BF9\u8C61\u4F1A\u88AB\u66FF\u6362\uFF0C\u5F15\u7528\u4E5F\u4F1A\u66F4\u65B0\u3002</p>
<p>*\u652F\u6301properties\u53CAyaml\u683C\u5F0F\uFF0CdataId\u9700\u4EE5properties,yaml,yml\u7ED3\u5C3E\uFF0C\u5176\u4E2Dyaml\u683C\u5F0F\u4E2D\u4E0D\u80FD\u5305\u542B\u6570\u7EC4\u5217\u8868\u683C\u5F0F\u5C5E\u6027\u3002</p>
<h2 id="5\u52A0\u8F7D\u81F3\u81EA\u5B9A\u4E49javabean\u5B57\u6BB5">5\u3001\u52A0\u8F7D\u81F3\u81EA\u5B9A\u4E49JavaBean\u5B57\u6BB5</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobject.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">MyObject json2Object;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobjectArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">MyObject[] json2ObjectArray;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobjectArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">List&#x3C;MyObject> json2ObjectList;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobjectMap.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Map&#x3C;String, MyObject> json2ObjectMap;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfig(dataId = &#x22;myobject.json&#x22;, group = &#x22;default&#x22;)\x7F\x7FMyObject json2Object;\x7F\x7F\x7F\x7F@NacosConfig(dataId = &#x22;myobjectArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7FMyObject[] json2ObjectArray;\x7F\x7F\x7F\x7F@NacosConfig(dataId = &#x22;myobjectArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7FList<MyObject> json2ObjectList;\x7F\x7F\x7F\x7F@NacosConfig(dataId = &#x22;myobjectMap.json&#x22;, group = &#x22;default&#x22;)\x7F\x7FMap<String, MyObject> json2ObjectMap;"><div></div></button></div></figure></div>
<p>\u5C06dataId = \u201Cmyobject.json\u201D, group = \u201Cdefault\u201D\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2Object\u5B57\u6BB5</p>
<p>\u5C06dataId = \u201CmyobjectArray.json\u201D, group = \u201Cdefault\u201D\u7684json\u6570\u7EC4/\u5217\u8868\u683C\u5F0F\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2ObjectArray\u5B57\u6BB5</p>
<p>\u5C06dataId = \u201CmyobjectArray.json\u201D, group = \u201Cdefault\u201D\u7684json\u6570\u7EC4/\u5217\u8868\u683C\u5F0F\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2ObjectList\u5B57\u6BB5</p>
<p>\u5C06dataId = \u201CmyobjectMap.json\u201D, group = \u201Cdefault\u201D\u7684json map\u683C\u5F0F\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2ObjectMap\u5B57\u6BB5</p>
<p>*\u652F\u6301\u81EA\u5B9A\u4E49\u6570\u7EC4\uFF0C\u96C6\u5408\u7C7B\u578B\uFF0C\u652F\u6301\u81EA\u52A8\u6839\u636E\u6307\u5B9A\u6CDB\u578B\u8FDB\u884C\u53CD\u5E8F\u5217\u5316</p>
<p>*\u5F53\u8FDC\u7AEFNacos\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u4E2D\uFF0C\u5B57\u6BB5\u5BF9\u5E94\u7684\u5BF9\u8C61\u4F1A\u88AB\u66FF\u6362\uFF0C\u5F15\u7528\u4E5F\u4F1A\u66F4\u65B0\u3002</p>
<h2 id="6\u52A0\u8F7Djson\u683C\u5F0F\u914D\u7F6E\u81F3springbean">6\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3SpringBean</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@Component</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobject.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">public class MyObject {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">String name;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">String age;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">public String getName() {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">return name;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">public void setName(String name) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">this.name = name;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">public String getAge() {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">return age;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">public void setAge(String age) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">this.age = age;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@Component\x7F\x7F@NacosConfig(dataId = &#x22;myobject.json&#x22;, group = &#x22;default&#x22;)\x7F\x7Fpublic class MyObject {\x7F\x7F\x7F\x7F    String name;\x7F\x7F\x7F\x7F    String age;\x7F\x7F\x7F\x7F    public String getName() {\x7F\x7F        return name;\x7F\x7F    }\x7F\x7F\x7F\x7F    public void setName(String name) {\x7F\x7F        this.name = name;\x7F\x7F    }\x7F\x7F\x7F\x7F    public String getAge() {\x7F\x7F        return age;\x7F\x7F    }\x7F\x7F\x7F\x7F    public void setAge(String age) {\x7F\x7F        this.age = age;\x7F\x7F    }\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u5C06dataId = \u201Cmyobject.json\u201D, group = \u201Cdefault\u201D\u7684JSON\u914D\u7F6E\u52A0\u8F7D\u81F3\u6307\u5B9ASpringBean\u7684\u5B57\u6BB5\u4E2D\uFF0C\u914D\u7F6E\u4E2D\u7684JSON\u5C5E\u6027\u540D\u9700\u8981\u548CSpringBean\u4E2D\u5B57\u6BB5\u5B8C\u5168\u4E00\u81F4\uFF0C\u4E14\u4FDD\u8BC1\u6BCF\u4E2A\u5B57\u6BB5\u6709getter\u53CAsetter\u65B9\u6CD5\u3002</p>
<p>*@NacosConfig\u6240\u5728\u7684\u7C7B\u5FC5\u987B\u88AB\u53D1\u5E03\u4E3A\u4E00\u4E2ASpringBean\u624D\u80FD\u751F\u6548</p>
<p>*@NacosConfig\u7C7B\u7EA7\u522B\u7684\u6CE8\u5165\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5B57\u6BB5\u7EA7\u522B\uFF0C\u5982\u5728\u5176Bean\u5185\u90E8\u5B57\u6BB5\u4E2D\u989D\u5916\u6DFB\u52A0@NacosConfig\u5C06\u4E0D\u4F1A\u751F\u6548\u3002</p>
<h2 id="7\u52A0\u8F7Djson\u683C\u5F0F\u914D\u7F6E\u81F3\u5DE5\u5382bean">7\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3\u5DE5\u5382Bean</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">public class SampleConfiguration {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobject1.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">@Bean</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">public MyObject bean1(){</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return new MyObject();</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">@NacosConfig(dataId = "myobject2.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">@Bean</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">public MyObject bean2(){</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return new MyObject();</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="public class SampleConfiguration {\x7F\x7F\x7F\x7F  @NacosConfig(dataId = &#x22;myobject1.json&#x22;, group = &#x22;default&#x22;)\x7F\x7F  @Bean\x7F\x7F  public MyObject bean1(){\x7F\x7F    return new MyObject();\x7F\x7F  }\x7F\x7F\x7F\x7F  @NacosConfig(dataId = &#x22;myobject2.json&#x22;, group = &#x22;default&#x22;)\x7F\x7F  @Bean\x7F\x7F  public MyObject bean2(){\x7F\x7F    return new MyObject();\x7F\x7F  }\x7F\x7F\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u5C06dataId = \u201Cmyobject1.json\u201D, group = \u201Cdefault\u201D\u7684\u914D\u7F6E\u5185\u5BB9\u52A0\u8F7D\u81F3beanName=bean1\u7684MyObject\u7C7B\u578B\u7684SpringBean\u4E2D\u3002</p>
<p>\u5C06dataId = \u201Cmyobject2.json\u201D, group = \u201Cdefault\u201D\u7684\u914D\u7F6E\u5185\u5BB9\u52A0\u8F7D\u81F3beanName=bean2\u7684MyObject\u7C7B\u578B\u7684SpringBean\u4E2D\u3002</p>
<p>*\u5FC5\u987B\u914D\u5408@Bean\u6CE8\u89E3\u4F7F\u7528\u3002</p>
<h1 id="nacosconfiglistener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD">@NacosConfigListener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD</h1>
<p>NacosConfig\u6CE8\u89E3\u4F5C\u7528\u7684\u76EE\u6807\u4E3B\u4F53\u662F\u5B57\u6BB5\uFF0C\u662F\u5C06\u76EE\u6807\u5B57\u6BB5\u7684\u5C5E\u6027\u76F4\u63A5\u53D8\u66F4\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u5BF9\u914D\u7F6E\u7684\u5185\u5BB9\u8FDB\u884C\u4E8C\u6B21\u5904\u7406\u65F6\uFF0C\u6BD4\u5982\u5F53\u67D0\u4E2A\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u52A8\u7A0B\u5E8F\u6267\u884C\u4E00\u4E2A\u4E1A\u52A1\u52A8\u4F5C\u6216\u8005\u5728\u53D8\u66F4\u540E\u7684\u914D\u7F6E\u57FA\u7840\u4E0A\u5728\u4EE3\u7801\u4E2D\u505A\u4E8C\u6B21\u5904\u7406\u65F6\uFF0CNacosConfig\u6CE8\u89E3\u5C06\u65E0\u6CD5\u80DC\u4EFB\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528NacosConfigListener\u6CE8\u89E3\u6765\u5B9E\u73B0\u8FD9\u4E2A\u8BC9\u6C42\uFF0C\u8BE5\u6CE8\u89E3\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\u4E0A\uFF0C\u652F\u6301\u6307\u5B9A\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\u5C06\u914D\u7F6E\u5185\u5BB9\u4EE5\u65B9\u6CD5\u53C2\u6570\u5F62\u5F0F\u56DE\u8C03\u6307\u5B9A\u65B9\u6CD5\u3002\u548CNacosConfig\u6CE8\u89E3\u76F8\u4F3C\uFF0C\u65B9\u6CD5\u53C2\u6570\u652F\u6301\u57FA\u7840\u7C7B\u578B\uFF0CProperties\uFF0C\u6570\u7EC4\uFF0C\u96C6\u5408\u4EE5\u53CA\u81EA\u5B9A\u4E49JavaBean\u3002</p>
<p>*\u5982\u679C\u5E0C\u671B\u5728Bean\u521D\u59CB\u5316\u65F6\u63A5\u53D7\u521D\u59CB\u56DE\u8C03\uFF0C\u53EF\u4EE5\u8BBE\u7F6EinitNotify=true\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002</p>
<p><font style="color:rgb(0, 0, 0);">*\u4EE5\u4E0B\u793A\u4F8B\u4E2D\u7684\u56DE\u8C03\u65B9\u6CD5\u540D\u5747\u4E3A\u793A\u4F8B\uFF0C\u65B9\u6CD5\u540D\u53EF\u4EE5\u81EA\u5B9A\u4E49</font></p>
<p><strong>\u7528\u6CD5\u793A\u4F8B</strong></p>
<h2 id="1string\u53C2\u6570\u65B9\u6CD5\u63A5\u6536\u539F\u751F\u914D\u7F6E\u5185\u5BB9">1\u3001String\u53C2\u6570\u65B9\u6CD5\u63A5\u6536\u539F\u751F\u914D\u7F6E\u5185\u5BB9</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "myobjectArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">private void fullContentChanged(String content) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + content);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfigListener(dataId = &#x22;myobjectArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7Fprivate void fullContentChanged(String content) {\x7F\x7F    System.out.println(&#x22;receive \uFF1A&#x22; + content);\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u5F53dataId = \u201CmyobjectArray.json\u201D, group = \u201Cdefault\u201D\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u5B8C\u6574\u5185\u5BB9\u4EE5content\u53C2\u6570\u56DE\u8C03fullContentChanged\u65B9\u6CD5\u3002</p>
<h2 id="2\u57FA\u7840\u7C7B\u578B\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u6307\u5B9Akey\u503C\u5185\u5BB9">2\u3001\u57FA\u7840\u7C7B\u578B\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u6307\u5B9Akey\u503C\u5185\u5BB9</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "SampleApp.application.properties", group = "default",key="score")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">private void scoreChanged(int score) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + score);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfigListener(dataId = &#x22;SampleApp.application.properties&#x22;, group = &#x22;default&#x22;,key=&#x22;score&#x22;)\x7F\x7Fprivate void scoreChanged(int score) {\x7F\x7F    System.out.println(&#x22;receive \uFF1A&#x22; + score);\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u5F53dataId = \u201CSampleApp.application.properties\u201D, group = \u201Cdefault\u201D\u7684\u914D\u7F6E\u4E2Dkey=\u201Cscore\u201D\u7684\u5C5E\u6027\u503C\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u5BF9\u5E94\u5C5E\u6027\u503Cscore\u53C2\u6570\u56DE\u8C03scoreChanged\u65B9\u6CD5\u3002</p>
<p>*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B</p>
<h2 id="3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7json\u683C\u5F0F\u914D\u7F6E\u5185\u5BB9">3\u3001\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7JSON\u683C\u5F0F\u914D\u7F6E\u5185\u5BB9</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "scoresArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">private void scoresChanged(int[] scores) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + scores);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfigListener(dataId = &#x22;scoresArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7Fprivate void scoresChanged(int[] scores) {\x7F\x7F    System.out.println(&#x22;receive \uFF1A&#x22; + scores);\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u5F53dataId = \u201CscoresArray.json\u201D, group = \u201Cdefault\u201D\u7684JSON\u683C\u5F0F\u914D\u7F6E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u914D\u7F6E\u5185\u5BB9\u53CD\u5E8F\u5217\u5316\u4E3A\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5BF9\u8C61\u4EE5scores\u53C2\u6570\u56DE\u8C03scoresChanged\u65B9\u6CD5</p>
<p>*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B\u6570\u7EC4</p>
<p>*\u914D\u7F6EdataId\u5FC5\u987B\u4EE5.json\u7ED3\u5C3E\uFF0C\u5E76\u4E14\u914D\u7F6E\u5185\u5BB9\u5FC5\u987B\u4E3Ajson\u6570\u7EC4\u683C\u5F0F</p>
<h2 id="4properties\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u53C2\u6570">4\u3001Properties\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u53C2\u6570</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "SampleApp.application.properties", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">private void propertiesChanged(Properties properties) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + properties);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfigListener(dataId = &#x22;SampleApp.application.properties&#x22;, group = &#x22;default&#x22;)\x7F\x7Fprivate void propertiesChanged(Properties properties) {\x7F\x7F    System.out.println(&#x22;receive \uFF1A&#x22; + properties);\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u5F53dataId = \u201CSampleApp.application.properties\u201D, group = \u201Cdefault\u201D\u7684properties\u683C\u5F0F\u914D\u7F6E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u914D\u7F6E\u5185\u5BB9\u89E3\u6790\u4E3AProperties\u5BF9\u8C61\u4EE5Properties\u7C7B\u578B\u53C2\u6570\u56DE\u8C03propertiesChanged\u65B9\u6CD5\u3002</p>
<h2 id="5\u81EA\u5B9A\u4E49java-bean\u53C2\u6570">5\u3001\u81EA\u5B9A\u4E49Java Bean\u53C2\u6570</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "myobject.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">private void myObjectChanged(MyObject object) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + object);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "myobjectArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">private void myObjectArrayChanged(MyObject[] objectArray) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + objectArray);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "myobjectArray.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">private void myObjectListChanged(List&#x3C;MyObject> objectList) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + objectList);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">@NacosConfigListener(dataId = "myobjectMap.json", group = "default")</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">private void myObjectMapChanged(Map&#x3C;String,MyObject> objectMap) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">System.out.println("receive \uFF1A" + objectMap);</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="    @NacosConfigListener(dataId = &#x22;myobject.json&#x22;, group = &#x22;default&#x22;)\x7F\x7F    private void myObjectChanged(MyObject object) {\x7F\x7F        System.out.println(&#x22;receive \uFF1A&#x22; + object);\x7F\x7F    }\x7F\x7F\x7F\x7F    @NacosConfigListener(dataId = &#x22;myobjectArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7F    private void myObjectArrayChanged(MyObject[] objectArray) {\x7F\x7F        System.out.println(&#x22;receive \uFF1A&#x22; + objectArray);\x7F\x7F    }\x7F\x7F\x7F\x7F    @NacosConfigListener(dataId = &#x22;myobjectArray.json&#x22;, group = &#x22;default&#x22;)\x7F\x7F    private void myObjectListChanged(List<MyObject> objectList) {\x7F\x7F        System.out.println(&#x22;receive \uFF1A&#x22; + objectList);\x7F\x7F    }\x7F\x7F\x7F\x7F    @NacosConfigListener(dataId = &#x22;myobjectMap.json&#x22;, group = &#x22;default&#x22;)\x7F\x7F    private void myObjectMapChanged(Map<String,MyObject> objectMap) {\x7F\x7F        System.out.println(&#x22;receive \uFF1A&#x22; + objectMap);\x7F\x7F    }"><div></div></button></div></figure></div>
<p>\u5F53\u6307\u5B9A\u914D\u7F6E\u5185\u5BB9\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u4EE5\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5BF9\u8C61\u5217\u8868\uFF0C\u5BF9\u8C61\u6A21\u5F0F\u7C7B\u578B\u56DE\u8C03\u65B9\u6CD5\u3002</p>
<p>*\u652F\u6301\u81EA\u5B9A\u4E49\u6570\u7EC4\uFF0C\u96C6\u5408\u7C7B\u578B\uFF0C\u81EA\u52A8\u6839\u636E\u6307\u5B9A\u6CDB\u578B\u8FDB\u884C\u53CD\u5E8F\u5217\u5316</p>
<h1 id="nacosconfigkeyslistener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD">@NacosConfigKeysListener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD</h1>
<p>\u8BE5\u6CE8\u89E3\u652F\u6301propertie\u53CAyaml\u683C\u5F0F\u914D\u7F6E\u4E2D\u6307\u5B9Akeys\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u901A\u8FC7ConfigChangeEvent\u53C2\u6570\u63A5\u53D7\u6307\u5B9Akeys\u53D8\u66F4\u524D\u540E\u7684\u5185\u5BB9\u3002</p>
<p>\u901A\u8FC7interestedKeys\u6307\u5B9A\u76D1\u542C\u7684keys\u96C6\u5408\uFF0C\u901A\u8FC7interestedKeyPrefixes\u6307\u5B9A\u9700\u8981\u76D1\u542C\u7684key\u524D\u7F00\u96C6\u5408\uFF0C\u5982\u679C\u7B26\u5408\u4EFB\u610F\u4EFB\u4E00\u6761\u4EF6\u7684key\u53D1\u751F\u53D8\u5316\u65F6\u90FD\u4F1A\u89E6\u53D1\u56DE\u8C03\u3002</p>
<p><strong>\u7528\u6CD5\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">@NacosConfigKeysListener(dataId = "SampleApp.122110test.properties", group = "default", interestedKeys = {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"useLocalCache,"}, interestedKeyPrefixes = {"122110."})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">private void onKeysChangeSingle(ConfigChangeEvent changeEvent) {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">System.out.println("interestedKeyPrefixes:nacos." + changeEvent.getChangeItems());</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="@NacosConfigKeysListener(dataId = &#x22;SampleApp.122110test.properties&#x22;, group = &#x22;default&#x22;, interestedKeys = {\x7F\x7F        &#x22;useLocalCache,&#x22;}, interestedKeyPrefixes = {&#x22;122110.&#x22;})\x7F\x7Fprivate void onKeysChangeSingle(ConfigChangeEvent changeEvent) {\x7F\x7F    System.out.println(&#x22;interestedKeyPrefixes:nacos.&#x22; + changeEvent.getChangeItems());\x7F\x7F}"><div></div></button></div></figure></div>
<p>*\u652F\u6301properties\u53CAyaml\u683C\u5F0F\uFF0CdataId\u9700\u4EE5properties,yaml,yml\u7ED3\u5C3E\u3002</p>
<h1 id="\u7ED3\u8BED">\u7ED3\u8BED</h1>
<p>\u5F53\u524DSpring Cloud Alibaba\u5728\u5168\u7CFB\u5217\u7248\u672C(\u5305\u62EC2.2.x\uFF0C2021.x\uFF0C2022.x\uFF0C2023.x)\u4E2D\u90FD\u5DF2\u7ECF\u6B63\u5F0F\u53D1\u5E03\u65B0\u7248\u672C\u652F\u6301\u4EE5\u4E0A\u6CE8\u89E3\u3002</p>
<ul>
<li>
<p>2023.x \u7CFB\u5217\u9700\u5347\u7EA7\u7248\u672C\u81F32023.0.3.2</p>
</li>
<li>
<p>2022.x \u7CFB\u5217\u9700\u5347\u7EA7\u7248\u672C\u81F3<font style="color:rgb(0, 0, 0);">2022.0.0.2 </font></p>
</li>
<li>
<p><font style="color:rgb(0, 0, 0);background-color:rgb(241, 241, 241);">2021.x \u7CFB\u5217\u9700\u5347\u7EA7\u7248\u672C\u81F3</font><font style="color:rgb(0, 0, 0);background-color:rgb(241, 241, 241);">2021.0.6.2</font></p>
</li>
<li>
<p>2.2.x \u7CFB\u5217\u9700\u5347\u7EA7\u81F32.2.11</p>
</li>
</ul>
<p>\u5176\u4E2D\u57282023.x\u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5BF9spring-cloud-alibaba\u914D\u7F6E\u6A21\u5757\u8FDB\u884C\u4E86\u91CD\u6784\uFF0C\u5355\u72EC\u62BD\u53D6\u4E86spring-alibaba-nacos-config\u6A21\u5757\uFF0C\u8BE5\u6A21\u5757\u4E0D\u4F9D\u8D56SpringCloud\u6846\u67B6\uFF0C\u6240\u4EE5\u57FA\u4E8ESpringBoot3 \u7684\u5E94\u7528\u901A\u8FC7\u5355\u72EC\u5F15\u5165spring-alibaba-nacos-config\u4E5F\u53EF\u4EE5\u4F7F\u7528@Value\u5F15\u7528Nacos\u4E2D\u7684\u914D\u7F6E\u4EE5\u53CA\u672C\u6587\u4ECB\u7ECD\u7684\u4E09\u79CD\u6CE8\u89E3\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">#pom.xml\u4E2D\u5F15\u5165spring-alibaba-nacos-config\u4F9D\u8D56</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;dependency></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">&#x3C;groupId>com.alibaba.cloud&#x3C;/groupId></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">&#x3C;artifactId>spring-alibaba-nacos-config&#x3C;/artifactId></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">&#x3C;version>2023.0.3.2&#x3C;/version></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;/dependency></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">#application.properties\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.config.import=nacos:optional:nacos:{\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3A\u9700\u5BFC\u5165\u7684nacos dataId}?group={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3A\u9700\u5BFC\u5165\u7684nacos group}&#x26;refreshEnabled=true</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.nacos.config.server-addr={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3Anacos\u7684serverAddr}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">spring.nacos.config.namespace={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3Anacos\u7684\u547D\u540D\u7A7A\u95F4\uFF0Cpublic\u8BF7\u586B\u7A7A}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">//\u5176\u4ED6\u53C2\u6570\u8BF7\u53C2\u7167sca\u5B98\u65B9\u6587\u6863\uFF0C\u5C06spring.cloud.nacos\u524D\u7F00\u66FF\u6362\u4E3Aspring.nacos\u5373\u53EF,\u672C\u6587\u4E2D\u7684\u6CE8\u89E3\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="#pom.xml\u4E2D\u5F15\u5165spring-alibaba-nacos-config\u4F9D\u8D56\x7F\x7F<dependency>\x7F\x7F      <groupId>com.alibaba.cloud</groupId>\x7F\x7F      <artifactId>spring-alibaba-nacos-config</artifactId>\x7F\x7F      <version>2023.0.3.2</version>\x7F\x7F</dependency>\x7F\x7F\x7F\x7F#application.properties\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\x7F\x7Fspring.config.import=nacos:optional:nacos:{\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3A\u9700\u5BFC\u5165\u7684nacos dataId}?group={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3A\u9700\u5BFC\u5165\u7684nacos group}&#x26;refreshEnabled=true\x7F\x7Fspring.nacos.config.server-addr={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3Anacos\u7684serverAddr}\x7F\x7Fspring.nacos.config.namespace={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3Anacos\u7684\u547D\u540D\u7A7A\u95F4\uFF0Cpublic\u8BF7\u586B\u7A7A}\x7F\x7F\x7F\x7F//\u5176\u4ED6\u53C2\u6570\u8BF7\u53C2\u7167sca\u5B98\u65B9\u6587\u6863\uFF0C\u5C06spring.cloud.nacos\u524D\u7F00\u66FF\u6362\u4E3Aspring.nacos\u5373\u53EF,\u672C\u6587\u4E2D\u7684\u6CE8\u89E3\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4"><div></div></button></div></figure></div>`,a={title:"SpringCloud\u5E94\u7528Nacos\u914D\u7F6E\u4E2D\u5FC3\u6CE8\u89E3",description:"SpringCloud\u5E94\u7528Nacos\u914D\u7F6E\u4E2D\u5FC3\u6CE8\u89E3",date:"2024-12-12",category:"article",keywords:["Higress"],authors:"CH3CHO"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_goqhyerd5dw3qwvr.md",d=void 0,t=function(){return`
# \u524D\u8A00

\u5728Spring Cloud\u5E94\u7528\u4E2D\u53EF\u4EE5\u975E\u5E38\u4F4E\u6210\u672C\u5730\u96C6\u6210Nacos\u5B9E\u73B0\u914D\u7F6E\u52A8\u6001\u5237\u65B0\uFF0C\u5728\u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u901A\u8FC7Spring\u5B98\u65B9\u7684\u6CE8\u89E3@Value\u548C@ConfigurationProperties\uFF0C\u5F15\u7528Spring enviroment\u4E0A\u4E0B\u6587\u4E2D\u7684\u5C5E\u6027\u503C, \u5173\u4E8E\u8FD9\u90E8\u5206\u7684\u4ECB\u7ECD\u53EF\u4EE5\u53C2\u7167[\u300ASpring Cloud+Nacos+KMS \u52A8\u6001\u914D\u7F6E\u6700\u4F73\u5B9E\u8DF5\u300B]([https://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA)](https://mp.weixin.qq.com/s/SdMAGMXb3RUf8TlGMYr_oA))\u4E00\u6587\uFF0C\u8FD9\u79CD\u7528\u6CD5\u7684\u6700\u5927\u4F18\u70B9\u662F\u65E0\u4EE3\u7801\u5C42\u9762\u4FB5\u5165\u6027\uFF0C\u4F46\u4E5F\u5B58\u5728\u8BF8\u591A\u9650\u5236\uFF0C\u6BD4\u5982\uFF1A



        * Nacos\u4E2D\u914D\u7F6E\u662F\u4F5C\u4E3ASpring\u4E0A\u4E0B\u6587enviroment\u7684\u5C5E\u6027\u6E90\u4E4B\u4E00\uFF0C\u83B7\u53D6\u5C5E\u6027\u65F6\u4F1A\u6536\u5230\u5176\u4ED6\u5C5E\u6027\u6E90\u7684\u5E72\u6270\uFF0C\u6BD4\u5982\u901A\u8FC7JVM\u53C2\u6570\u548C\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u7684\u5C5E\u6027\u4F18\u5148\u7EA7\u6BD4Nacos\u4E2D\u7684\u66F4\u9AD8

        * \u901A\u8FC7spring.config.import\u5BFC\u5165\u591A\u4E2ANacos\u914D\u7F6E\u65F6\uFF0C\u5176\u4E2D\u76F8\u540C\u7684key\u5BF9\u5E94\u7684\u5C5E\u6027\u53EA\u4F1A\u6709\u4E00\u4E2A\u751F\u6548\uFF0C\u9700\u8981\u63A7\u5236\u591A\u4E2A\u5C5E\u6027\u6E90\u7684key\u4E0D\u91CD\u590D\u6216\u8005\u5904\u7406\u56E0\u4F18\u5148\u7EA7\u95EE\u9898\u5BFC\u81F4\u7684\u5C5E\u6027\u8986\u76D6\u95EE\u9898\u3002\u65E0\u6CD5\u7CBE\u51C6\u83B7\u53D6\u6307\u5B9ANacos\u914D\u7F6E\u4E2D\u7684\u5C5E\u6027

        * \u65E0\u6CD5\u5C06Nacos\u914D\u7F6E\u81EA\u52A8\u6CE8\u5165\u5BF9\u8C61\u7C7B\u578B\u7684\u5B57\u6BB5

        * \u53EA\u80FD\u88AB\u52A8\u63A5\u53D7\u914D\u7F6E\u6700\u7EC8\u5185\u5BB9\uFF0C\u65E0\u6CD5\u5728\u914D\u7F6E\u53D8\u66F4\u65F6\u5BF9\u914D\u7F6E\u8FDB\u884C\u4E8C\u6B21\u5904\u7406\u6216\u8005\u89E6\u53D1\u5176\u4ED6\u4E1A\u52A1\u52A8\u4F5C\uFF0C\u65E0\u6CD5\u611F\u77E5\u6307\u5B9A\u7684\u5C5E\u6027\u53D8\u66F4\u524D\u540E\u7684\u8BE6\u7EC6\u4FE1\u606F

        * \u901A\u8FC7@Value\u6CE8\u89E3\u5F15\u7528\u7684\u914D\u7F6E\u8981\u652F\u6301\u52A8\u6001\u5237\u65B0\uFF0C\u9700\u8981\u5728SpringBean\u4E0A\u6DFB\u52A0@RefreshScope\uFF0C\u914D\u7F6E\u66F4\u65B0\u65F6\u4F1A\u5148\u5C06Bean\u9500\u6BC1\u518D\u91CD\u65B0\u521B\u5EFA\u65B0\u7684Bean\uFF0C\u4F7F\u7528\u4E0D\u5F53\u6613\u4EA7\u751F\u7EBF\u4E0A\u95EE\u9898\u3002



\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898\uFF0C\u63D0\u5347\u5E94\u7528\u63A5\u5165Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u6613\u7528\u6027\uFF0CSpring Cloud Alibaba\u53D1\u5E03\u4E00\u5957\u5168\u65B0\u7684Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u6CE8\u89E3\u3002



    - @NacosConfig\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u5B57\u6BB5\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165\u5B57\u6BB5\uFF1B\u4F5C\u7528\u4E8ESpringBean Class\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165Bean\u7684\u5C5E\u6027\u4E2D\uFF1B\u4F5C\u7528\u4E8EFactoryBean \u65B9\u6CD5\uFF0C\u5C06Nacos\u4E2D\u6307\u5B9A\u7684\u914D\u7F6E\u6CE8\u5165Bean\u7684\u5C5E\u6027\u4E2D\uFF0C\u4E0D\u4F9D\u8D56RefreshScope\u6CE8\u89E3\u5373\u53EF\u751F\u6548\u3002

    - @NacosConfigListener\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\uFF0C\u5728Nacos\u4E2D\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u53C2\u6570\u5F62\u5F0F\u63A5\u53D7\u53D8\u66F4\u540E\u7684\u6700\u65B0\u914D\u7F6E\u5185\u5BB9\uFF0C\u652F\u6301\u4EE5\u5BF9\u8C61\u7C7B\u578B\u63A5\u6536\u7ED3\u679C\u3002

    - @NacosConfigKeysListener\uFF1A\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\uFF0C\u5728Nacos\u4E2D\u7684\u914D\u7F6E\u7684\u6307\u5B9A\u5C5E\u6027key\u96C6\u5408\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u4EE5\u65B9\u6CD5\u53C2\u6570ConfigChangeEvent\u63A5\u53D7\u53D8\u66F4\u524D\u540E\u7684\u5C5E\u6027\u503C\u3002



\u4EE5\u4E0B\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u4E09\u79CD\u6CE8\u89E3\u7684\u7528\u6CD5\u3002



# @NacosConfig\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD

\u4F7F\u7528\u8BE5\u6CE8\u89E3\u53EF\u4EE5\u5C06\u6307\u5B9Anacos\u914D\u7F6E\u6CE8\u5165Spring Bean\u7684\u5B57\u6BB5\u4E2D\uFF0C\u53EF\u4EE5\u4F5C\u7528\u4E8ESpringBean\u7684\u5355\u4E00\u5B57\u6BB5\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u7528\u4E8ESpringBean\u4E0A(\u5305\u62EC\u5C06\u6CE8\u89E3\u52A0\u5728BeanClass\u4E0A\u4EE5\u53CA\u7ED3\u5408@Bean\u6CE8\u89E3\u5DE5\u5382Bean\u6CE8\u5165\u6A21\u5F0F)\uFF0C\u6CE8\u5165\u7684\u76EE\u6807\u7C7B\u578B\u4E2D\u652F\u6301\u57FA\u7840\u7C7B\u578B\uFF0CProperties\uFF0C\u96C6\u5408List<T>\uFF0CSet<T>\uFF0CMap<T>\u6CDB\u578B\uFF0C\u4EE5\u53CA\u5176\u4ED6\u4EFB\u610F\u81EA\u5B9A\u4E49Java Bean\u3002



\u5982\u679C\u914D\u7F6E\u683C\u5F0F\u4E3Ayaml\u548Cproperties\uFF0C\u4E5F\u53EF\u4EE5\u989D\u5916\u6307\u5B9Akey\u5B57\u6BB5\u540D\uFF0C\u52A0\u8F7D\u6307\u5B9Akey\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u3002



**\u6CE8\u89E3\u5B57\u6BB5\u89E3\u91CA**



\`\`\`plain

@Retention(RetentionPolicy.RUNTIME)

@Target({ElementType.FIELD, ElementType.TYPE, ElementType.METHOD})

@Documented

public @interface NacosConfig {

    

    String group();



    String dataId();



    String key() default "";



    String defaultValue() default "";

}



\`\`\`



+ group\uFF1A\u5F15\u5165\u7684\u914D\u7F6E\u6240\u5C5E\u5206\u7EC4

+ dataId: \u5F15\u5165\u7684\u914D\u7F6EDataId

+ key : \u914D\u7F6E\u683C\u5F0F\u4E3Ayaml\u548Cproperties\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u989D\u5916\u6307\u5B9Akey\u5B57\u6BB5\u540D\uFF0C\u52A0\u8F7D\u6307\u5B9Akey\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u3002

+ defaultValue\uFF1A\u5F53\u914D\u7F6E\u4E0D\u5B58\u5728\u6216\u8005\u914D\u7F6E\u5185\u6307\u5B9Akey\u5C5E\u6027\u4E3A\u7A7A\u65F6\uFF0C\u52A0\u8F7D\u7684\u9ED8\u8BA4\u503C\u3002



*\u8BBF\u95EEnacos\u7684\u5168\u5C40\u53C2\u6570\u901A\u8FC7application.properties\u4E2Dspring.cloud.nacos.config.server-addr, spring.cloud.nacos.config.namespace\u53C2\u6570\u914D\u7F6E\u3002\u901A\u8FC7spring.config.import\u5BFC\u5165\u7684\u914D\u7F6E\u4F5C\u7528\u4E8ESpring\u7684@Value\u5F15\u7528\u5C5E\u6027\u6E90\uFF0C\u548C\u901A\u8FC7\u6CE8\u89E3\u5F15\u5165\u7684\u65B9\u5F0F\u76F8\u4E92\u72EC\u7ACB\uFF0C\u4F46\u5176\u5185\u90E8\u662F\u5171\u4EAB\u540C\u4E00\u4E2ANacosClient\u5BF9\u8C61\uFF0C\u5E76\u4E14\u8BBF\u95EE\u7684\u662F\u540C\u4E00\u4E2ANacos\u5B9E\u4F8B\u4EE5\u53CA\u540C\u4E00\u4E2A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u914D\u7F6E\u3002







**\u7528\u6CD5\u793A\u4F8B**



## 1\u3001\u52A0\u8F7D\u5B8C\u6574\u914D\u7F6E\u5185\u5BB9\u81F3String\u7C7B\u578B\u5B57\u6BB5

\`\`\`plain

@NacosConfig(dataId = "SampleApp.application.properties", group = "default")

String configContent;

\`\`\`



\u5C06dataId=SampleApp.application.properties\uFF0Cgroup = default\u5BF9\u5E94\u7684\u914D\u7F6E\u7684\u5B8C\u6574\u5185\u5BB9\u6CE8\u5165\u5230configContent\u5B57\u6BB5\u3002



## 2\u3001\u52A0\u8F7D\u914D\u7F6E\u4E2D\u7684\u6307\u5B9Akey\u5C5E\u6027\u81F3\u57FA\u7840\u7C7B\u578B\u5B57\u6BB5

\`\`\`plain

@NacosConfig(dataId = "SampleApp.application.properties", group = "default", key = "useCache", defaultValue = "false")

boolean booleanValue;

\`\`\`



\u5C06dataId=SampleApp.application.properties\uFF0Cgroup = default\u5BF9\u5E94\u7684\u914D\u7F6E\u4E2D\u7684useCache\u5C5E\u6027\u503C\u6CE8\u5165\u5230booleanValue\u5B57\u6BB5\u3002



*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B\u4EE5\u53CA\u5176\u5C01\u88C5\u7C7B\u578B\u3002



## 3\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5B57\u6BB5

\`\`\`plain

@NacosConfig(dataId = "scoreintArray.json", group = "default")

int[] scores;

\`\`\`



\u5C06dataId=scoreintArray.json\uFF0Cgroup = default\u5BF9\u5E94\u7684json\u683C\u5F0F\u914D\u7F6E\u6CE8\u5165\u5230scores\u5B57\u6BB5\uFF0C\u9700\u4FDD\u8BC1\u914D\u7F6E\u683C\u5F0F\u53EF\u6B63\u5E38\u53CD\u5E8F\u5217\u5316\u3002



*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u4EE5\u53CA\u5176\u5C01\u88C5\u7C7B\u578B\u3002



*\u914D\u7F6E\u9700\u4EE5.json\u7ED3\u5C3E\u4E14\u914D\u7F6E\u5185\u5BB9\u4E3Ajson\u683C\u5F0F\u3002



## 4\u3001\u52A0\u8F7D\u914D\u7F6E\u81F3Properties\u7C7B\u578B\u5B57\u6BB5

\`\`\`plain

@NacosConfig(dataId = "SampleApp.application.properties", group = "default")

Properties properties = new Properties();

\`\`\`



\u5C06dataId = "SampleApp.application.properties", group = "default"\u7684\u914D\u7F6E\u5185\u5BB9\u6CE8\u5165\u5230properties\u5B57\u6BB5\u4E2D\u3002\u53EF\u4EE5\u901A\u8FC7properties.getProperty\u65B9\u6CD5\u83B7\u53D6\u5176\u5185\u90E8\u5C5E\u6027\u503C\u3002\u5F53\u8FDC\u7AEFNacos\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u4E2D\uFF0Cproperties\u5BF9\u8C61\u4F1A\u88AB\u66FF\u6362\uFF0C\u5F15\u7528\u4E5F\u4F1A\u66F4\u65B0\u3002



*\u652F\u6301properties\u53CAyaml\u683C\u5F0F\uFF0CdataId\u9700\u4EE5properties,yaml,yml\u7ED3\u5C3E\uFF0C\u5176\u4E2Dyaml\u683C\u5F0F\u4E2D\u4E0D\u80FD\u5305\u542B\u6570\u7EC4\u5217\u8868\u683C\u5F0F\u5C5E\u6027\u3002



## 5\u3001\u52A0\u8F7D\u81F3\u81EA\u5B9A\u4E49JavaBean\u5B57\u6BB5

\`\`\`plain

@NacosConfig(dataId = "myobject.json", group = "default")

MyObject json2Object;



@NacosConfig(dataId = "myobjectArray.json", group = "default")

MyObject[] json2ObjectArray;

    

@NacosConfig(dataId = "myobjectArray.json", group = "default")

List<MyObject> json2ObjectList;

    

@NacosConfig(dataId = "myobjectMap.json", group = "default")

Map<String, MyObject> json2ObjectMap;

\`\`\`



\u5C06dataId = "myobject.json", group = "default"\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2Object\u5B57\u6BB5



\u5C06dataId = "myobjectArray.json", group = "default"\u7684json\u6570\u7EC4/\u5217\u8868\u683C\u5F0F\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2ObjectArray\u5B57\u6BB5



\u5C06dataId = "myobjectArray.json", group = "default"\u7684json\u6570\u7EC4/\u5217\u8868\u683C\u5F0F\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2ObjectList\u5B57\u6BB5



\u5C06dataId = "myobjectMap.json", group = "default"\u7684json map\u683C\u5F0F\u7684\u914D\u7F6E\u52A0\u8F7D\u81F3json2ObjectMap\u5B57\u6BB5



*\u652F\u6301\u81EA\u5B9A\u4E49\u6570\u7EC4\uFF0C\u96C6\u5408\u7C7B\u578B\uFF0C\u652F\u6301\u81EA\u52A8\u6839\u636E\u6307\u5B9A\u6CDB\u578B\u8FDB\u884C\u53CD\u5E8F\u5217\u5316



*\u5F53\u8FDC\u7AEFNacos\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u4E2D\uFF0C\u5B57\u6BB5\u5BF9\u5E94\u7684\u5BF9\u8C61\u4F1A\u88AB\u66FF\u6362\uFF0C\u5F15\u7528\u4E5F\u4F1A\u66F4\u65B0\u3002







## 6\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3SpringBean

\`\`\`plain

@Component

@NacosConfig(dataId = "myobject.json", group = "default")

public class MyObject {

    

    String name;

    

    String age;

    

    public String getName() {

        return name;

    }

    

    public void setName(String name) {

        this.name = name;

    }

    

    public String getAge() {

        return age;

    }

    

    public void setAge(String age) {

        this.age = age;

    }

}

\`\`\`



\u5C06dataId = "myobject.json", group = "default"\u7684JSON\u914D\u7F6E\u52A0\u8F7D\u81F3\u6307\u5B9ASpringBean\u7684\u5B57\u6BB5\u4E2D\uFF0C\u914D\u7F6E\u4E2D\u7684JSON\u5C5E\u6027\u540D\u9700\u8981\u548CSpringBean\u4E2D\u5B57\u6BB5\u5B8C\u5168\u4E00\u81F4\uFF0C\u4E14\u4FDD\u8BC1\u6BCF\u4E2A\u5B57\u6BB5\u6709getter\u53CAsetter\u65B9\u6CD5\u3002



*@NacosConfig\u6240\u5728\u7684\u7C7B\u5FC5\u987B\u88AB\u53D1\u5E03\u4E3A\u4E00\u4E2ASpringBean\u624D\u80FD\u751F\u6548



*@NacosConfig\u7C7B\u7EA7\u522B\u7684\u6CE8\u5165\u4F18\u5148\u7EA7\u9AD8\u4E8E\u5B57\u6BB5\u7EA7\u522B\uFF0C\u5982\u5728\u5176Bean\u5185\u90E8\u5B57\u6BB5\u4E2D\u989D\u5916\u6DFB\u52A0@NacosConfig\u5C06\u4E0D\u4F1A\u751F\u6548\u3002







## 7\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3\u5DE5\u5382Bean

\`\`\`plain

public class SampleConfiguration {

  

  @NacosConfig(dataId = "myobject1.json", group = "default")

	@Bean

	public MyObject bean1(){

		return new MyObject();

	}



  @NacosConfig(dataId = "myobject2.json", group = "default")

	@Bean

	public MyObject bean2(){

		return new MyObject();

	}

	

}

\`\`\`



\u5C06dataId = "myobject1.json", group = "default"\u7684\u914D\u7F6E\u5185\u5BB9\u52A0\u8F7D\u81F3beanName=bean1\u7684MyObject\u7C7B\u578B\u7684SpringBean\u4E2D\u3002



\u5C06dataId = "myobject2.json", group = "default"\u7684\u914D\u7F6E\u5185\u5BB9\u52A0\u8F7D\u81F3beanName=bean2\u7684MyObject\u7C7B\u578B\u7684SpringBean\u4E2D\u3002



*\u5FC5\u987B\u914D\u5408@Bean\u6CE8\u89E3\u4F7F\u7528\u3002



# @NacosConfigListener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD

NacosConfig\u6CE8\u89E3\u4F5C\u7528\u7684\u76EE\u6807\u4E3B\u4F53\u662F\u5B57\u6BB5\uFF0C\u662F\u5C06\u76EE\u6807\u5B57\u6BB5\u7684\u5C5E\u6027\u76F4\u63A5\u53D8\u66F4\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u5BF9\u914D\u7F6E\u7684\u5185\u5BB9\u8FDB\u884C\u4E8C\u6B21\u5904\u7406\u65F6\uFF0C\u6BD4\u5982\u5F53\u67D0\u4E2A\u5C5E\u6027\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u52A8\u7A0B\u5E8F\u6267\u884C\u4E00\u4E2A\u4E1A\u52A1\u52A8\u4F5C\u6216\u8005\u5728\u53D8\u66F4\u540E\u7684\u914D\u7F6E\u57FA\u7840\u4E0A\u5728\u4EE3\u7801\u4E2D\u505A\u4E8C\u6B21\u5904\u7406\u65F6\uFF0CNacosConfig\u6CE8\u89E3\u5C06\u65E0\u6CD5\u80DC\u4EFB\uFF0C\u6B64\u65F6\u53EF\u4EE5\u4F7F\u7528NacosConfigListener\u6CE8\u89E3\u6765\u5B9E\u73B0\u8FD9\u4E2A\u8BC9\u6C42\uFF0C\u8BE5\u6CE8\u89E3\u4F5C\u7528\u4E8ESpringBean\u7684\u65B9\u6CD5\u4E0A\uFF0C\u652F\u6301\u6307\u5B9A\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u65F6\u5C06\u914D\u7F6E\u5185\u5BB9\u4EE5\u65B9\u6CD5\u53C2\u6570\u5F62\u5F0F\u56DE\u8C03\u6307\u5B9A\u65B9\u6CD5\u3002\u548CNacosConfig\u6CE8\u89E3\u76F8\u4F3C\uFF0C\u65B9\u6CD5\u53C2\u6570\u652F\u6301\u57FA\u7840\u7C7B\u578B\uFF0CProperties\uFF0C\u6570\u7EC4\uFF0C\u96C6\u5408\u4EE5\u53CA\u81EA\u5B9A\u4E49JavaBean\u3002



*\u5982\u679C\u5E0C\u671B\u5728Bean\u521D\u59CB\u5316\u65F6\u63A5\u53D7\u521D\u59CB\u56DE\u8C03\uFF0C\u53EF\u4EE5\u8BBE\u7F6EinitNotify=true\uFF0C\u9ED8\u8BA4\u4E3Afalse\u3002



<font style="color:rgb(0, 0, 0);">*\u4EE5\u4E0B\u793A\u4F8B\u4E2D\u7684\u56DE\u8C03\u65B9\u6CD5\u540D\u5747\u4E3A\u793A\u4F8B\uFF0C\u65B9\u6CD5\u540D\u53EF\u4EE5\u81EA\u5B9A\u4E49</font>







**\u7528\u6CD5\u793A\u4F8B**



## 1\u3001String\u53C2\u6570\u65B9\u6CD5\u63A5\u6536\u539F\u751F\u914D\u7F6E\u5185\u5BB9

\`\`\`plain

@NacosConfigListener(dataId = "myobjectArray.json", group = "default")

private void fullContentChanged(String content) {

    System.out.println("receive \uFF1A" + content);

}

\`\`\`



\u5F53dataId = "myobjectArray.json", group = "default"\u7684\u914D\u7F6E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u5B8C\u6574\u5185\u5BB9\u4EE5content\u53C2\u6570\u56DE\u8C03fullContentChanged\u65B9\u6CD5\u3002



## 2\u3001\u57FA\u7840\u7C7B\u578B\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u6307\u5B9Akey\u503C\u5185\u5BB9

\`\`\`plain

@NacosConfigListener(dataId = "SampleApp.application.properties", group = "default",key="score")

private void scoreChanged(int score) {

    System.out.println("receive \uFF1A" + score);

}



\`\`\`



\u5F53dataId = "SampleApp.application.properties", group = "default"\u7684\u914D\u7F6E\u4E2Dkey="score"\u7684\u5C5E\u6027\u503C\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u5BF9\u5E94\u5C5E\u6027\u503Cscore\u53C2\u6570\u56DE\u8C03scoreChanged\u65B9\u6CD5\u3002



*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B



## 3\u3001\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7JSON\u683C\u5F0F\u914D\u7F6E\u5185\u5BB9

\`\`\`plain

@NacosConfigListener(dataId = "scoresArray.json", group = "default")

private void scoresChanged(int[] scores) {

    System.out.println("receive \uFF1A" + scores);

}



\`\`\`



\u5F53dataId = "scoresArray.json", group = "default"\u7684JSON\u683C\u5F0F\u914D\u7F6E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u914D\u7F6E\u5185\u5BB9\u53CD\u5E8F\u5217\u5316\u4E3A\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5BF9\u8C61\u4EE5scores\u53C2\u6570\u56DE\u8C03scoresChanged\u65B9\u6CD5



*\u652F\u6301int, long,float,double,boolean 5\u79CD\u57FA\u7840\u7C7B\u578B\u6570\u7EC4



*\u914D\u7F6EdataId\u5FC5\u987B\u4EE5.json\u7ED3\u5C3E\uFF0C\u5E76\u4E14\u914D\u7F6E\u5185\u5BB9\u5FC5\u987B\u4E3Ajson\u6570\u7EC4\u683C\u5F0F



## 4\u3001Properties\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u53C2\u6570

\`\`\`plain

@NacosConfigListener(dataId = "SampleApp.application.properties", group = "default")

private void propertiesChanged(Properties properties) {

    System.out.println("receive \uFF1A" + properties);

}

\`\`\`



\u5F53dataId = "SampleApp.application.properties", group = "default"\u7684properties\u683C\u5F0F\u914D\u7F6E\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u5C06\u914D\u7F6E\u5185\u5BB9\u89E3\u6790\u4E3AProperties\u5BF9\u8C61\u4EE5Properties\u7C7B\u578B\u53C2\u6570\u56DE\u8C03propertiesChanged\u65B9\u6CD5\u3002



## 5\u3001\u81EA\u5B9A\u4E49Java Bean\u53C2\u6570

\`\`\`plain

    @NacosConfigListener(dataId = "myobject.json", group = "default")

    private void myObjectChanged(MyObject object) {

        System.out.println("receive \uFF1A" + object);

    }



    @NacosConfigListener(dataId = "myobjectArray.json", group = "default")

    private void myObjectArrayChanged(MyObject[] objectArray) {

        System.out.println("receive \uFF1A" + objectArray);

    }



    @NacosConfigListener(dataId = "myobjectArray.json", group = "default")

    private void myObjectListChanged(List<MyObject> objectList) {

        System.out.println("receive \uFF1A" + objectList);

    }



    @NacosConfigListener(dataId = "myobjectMap.json", group = "default")

    private void myObjectMapChanged(Map<String,MyObject> objectMap) {

        System.out.println("receive \uFF1A" + objectMap);

    }

\`\`\`



\u5F53\u6307\u5B9A\u914D\u7F6E\u5185\u5BB9\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u4EE5\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5BF9\u8C61\u5217\u8868\uFF0C\u5BF9\u8C61\u6A21\u5F0F\u7C7B\u578B\u56DE\u8C03\u65B9\u6CD5\u3002



*\u652F\u6301\u81EA\u5B9A\u4E49\u6570\u7EC4\uFF0C\u96C6\u5408\u7C7B\u578B\uFF0C\u81EA\u52A8\u6839\u636E\u6307\u5B9A\u6CDB\u578B\u8FDB\u884C\u53CD\u5E8F\u5217\u5316







# @NacosConfigKeysListener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD

\u8BE5\u6CE8\u89E3\u652F\u6301propertie\u53CAyaml\u683C\u5F0F\u914D\u7F6E\u4E2D\u6307\u5B9Akeys\u53D1\u751F\u53D8\u66F4\u65F6\uFF0C\u901A\u8FC7ConfigChangeEvent\u53C2\u6570\u63A5\u53D7\u6307\u5B9Akeys\u53D8\u66F4\u524D\u540E\u7684\u5185\u5BB9\u3002



\u901A\u8FC7interestedKeys\u6307\u5B9A\u76D1\u542C\u7684keys\u96C6\u5408\uFF0C\u901A\u8FC7interestedKeyPrefixes\u6307\u5B9A\u9700\u8981\u76D1\u542C\u7684key\u524D\u7F00\u96C6\u5408\uFF0C\u5982\u679C\u7B26\u5408\u4EFB\u610F\u4EFB\u4E00\u6761\u4EF6\u7684key\u53D1\u751F\u53D8\u5316\u65F6\u90FD\u4F1A\u89E6\u53D1\u56DE\u8C03\u3002



**\u7528\u6CD5\u793A\u4F8B**



\`\`\`plain

@NacosConfigKeysListener(dataId = "SampleApp.122110test.properties", group = "default", interestedKeys = {

        "useLocalCache,"}, interestedKeyPrefixes = {"122110."})

private void onKeysChangeSingle(ConfigChangeEvent changeEvent) {

    System.out.println("interestedKeyPrefixes:nacos." + changeEvent.getChangeItems());

}

\`\`\`



*\u652F\u6301properties\u53CAyaml\u683C\u5F0F\uFF0CdataId\u9700\u4EE5properties,yaml,yml\u7ED3\u5C3E\u3002







# \u7ED3\u8BED

\u5F53\u524DSpring Cloud Alibaba\u5728\u5168\u7CFB\u5217\u7248\u672C(\u5305\u62EC2.2.x\uFF0C2021.x\uFF0C2022.x\uFF0C2023.x)\u4E2D\u90FD\u5DF2\u7ECF\u6B63\u5F0F\u53D1\u5E03\u65B0\u7248\u672C\u652F\u6301\u4EE5\u4E0A\u6CE8\u89E3\u3002



+ 2023.x \u7CFB\u5217\u9700\u5347\u7EA7\u7248\u672C\u81F32023.0.3.2

+ 2022.x \u7CFB\u5217\u9700\u5347\u7EA7\u7248\u672C\u81F3<font style="color:rgb(0, 0, 0);">2022.0.0.2 </font>

+ <font style="color:rgb(0, 0, 0);background-color:rgb(241, 241, 241);">2021.x \u7CFB\u5217\u9700\u5347\u7EA7\u7248\u672C\u81F3</font><font style="color:rgb(0, 0, 0);background-color:rgb(241, 241, 241);">2021.0.6.2</font>

+ 2.2.x \u7CFB\u5217\u9700\u5347\u7EA7\u81F32.2.11



\u5176\u4E2D\u57282023.x\u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5BF9spring-cloud-alibaba\u914D\u7F6E\u6A21\u5757\u8FDB\u884C\u4E86\u91CD\u6784\uFF0C\u5355\u72EC\u62BD\u53D6\u4E86spring-alibaba-nacos-config\u6A21\u5757\uFF0C\u8BE5\u6A21\u5757\u4E0D\u4F9D\u8D56SpringCloud\u6846\u67B6\uFF0C\u6240\u4EE5\u57FA\u4E8ESpringBoot3 \u7684\u5E94\u7528\u901A\u8FC7\u5355\u72EC\u5F15\u5165spring-alibaba-nacos-config\u4E5F\u53EF\u4EE5\u4F7F\u7528@Value\u5F15\u7528Nacos\u4E2D\u7684\u914D\u7F6E\u4EE5\u53CA\u672C\u6587\u4ECB\u7ECD\u7684\u4E09\u79CD\u6CE8\u89E3\u3002



\`\`\`plain



#pom.xml\u4E2D\u5F15\u5165spring-alibaba-nacos-config\u4F9D\u8D56

<dependency>

      <groupId>com.alibaba.cloud</groupId>

      <artifactId>spring-alibaba-nacos-config</artifactId>

      <version>2023.0.3.2</version>

</dependency>



#application.properties\u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E

spring.config.import=nacos:optional:nacos:{\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3A\u9700\u5BFC\u5165\u7684nacos dataId}?group={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3A\u9700\u5BFC\u5165\u7684nacos group}&refreshEnabled=true

spring.nacos.config.server-addr={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3Anacos\u7684serverAddr}

spring.nacos.config.namespace={\u6B64\u5904\u6309\u9700\u66FF\u6362\u4E3Anacos\u7684\u547D\u540D\u7A7A\u95F4\uFF0Cpublic\u8BF7\u586B\u7A7A}



//\u5176\u4ED6\u53C2\u6570\u8BF7\u53C2\u7167sca\u5B98\u65B9\u6587\u6863\uFF0C\u5C06spring.cloud.nacos\u524D\u7F00\u66FF\u6362\u4E3Aspring.nacos\u5373\u53EF,\u672C\u6587\u4E2D\u7684\u6CE8\u89E3\u7528\u6CD5\u5B8C\u5168\u4E00\u81F4



\`\`\`














`},c=function(){return e},o=function(){return[{depth:1,slug:"\u524D\u8A00",text:"\u524D\u8A00"},{depth:1,slug:"nacosconfig\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD",text:"@NacosConfig\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD"},{depth:2,slug:"1\u52A0\u8F7D\u5B8C\u6574\u914D\u7F6E\u5185\u5BB9\u81F3string\u7C7B\u578B\u5B57\u6BB5",text:"1\u3001\u52A0\u8F7D\u5B8C\u6574\u914D\u7F6E\u5185\u5BB9\u81F3String\u7C7B\u578B\u5B57\u6BB5"},{depth:2,slug:"2\u52A0\u8F7D\u914D\u7F6E\u4E2D\u7684\u6307\u5B9Akey\u5C5E\u6027\u81F3\u57FA\u7840\u7C7B\u578B\u5B57\u6BB5",text:"2\u3001\u52A0\u8F7D\u914D\u7F6E\u4E2D\u7684\u6307\u5B9Akey\u5C5E\u6027\u81F3\u57FA\u7840\u7C7B\u578B\u5B57\u6BB5"},{depth:2,slug:"3\u52A0\u8F7Djson\u683C\u5F0F\u914D\u7F6E\u81F3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5B57\u6BB5",text:"3\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u5B57\u6BB5"},{depth:2,slug:"4\u52A0\u8F7D\u914D\u7F6E\u81F3properties\u7C7B\u578B\u5B57\u6BB5",text:"4\u3001\u52A0\u8F7D\u914D\u7F6E\u81F3Properties\u7C7B\u578B\u5B57\u6BB5"},{depth:2,slug:"5\u52A0\u8F7D\u81F3\u81EA\u5B9A\u4E49javabean\u5B57\u6BB5",text:"5\u3001\u52A0\u8F7D\u81F3\u81EA\u5B9A\u4E49JavaBean\u5B57\u6BB5"},{depth:2,slug:"6\u52A0\u8F7Djson\u683C\u5F0F\u914D\u7F6E\u81F3springbean",text:"6\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3SpringBean"},{depth:2,slug:"7\u52A0\u8F7Djson\u683C\u5F0F\u914D\u7F6E\u81F3\u5DE5\u5382bean",text:"7\u3001\u52A0\u8F7DJSON\u683C\u5F0F\u914D\u7F6E\u81F3\u5DE5\u5382Bean"},{depth:1,slug:"nacosconfiglistener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD",text:"@NacosConfigListener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD"},{depth:2,slug:"1string\u53C2\u6570\u65B9\u6CD5\u63A5\u6536\u539F\u751F\u914D\u7F6E\u5185\u5BB9",text:"1\u3001String\u53C2\u6570\u65B9\u6CD5\u63A5\u6536\u539F\u751F\u914D\u7F6E\u5185\u5BB9"},{depth:2,slug:"2\u57FA\u7840\u7C7B\u578B\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u6307\u5B9Akey\u503C\u5185\u5BB9",text:"2\u3001\u57FA\u7840\u7C7B\u578B\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u6307\u5B9Akey\u503C\u5185\u5BB9"},{depth:2,slug:"3\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7json\u683C\u5F0F\u914D\u7F6E\u5185\u5BB9",text:"3\u3001\u57FA\u7840\u7C7B\u578B\u6570\u7EC4\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7JSON\u683C\u5F0F\u914D\u7F6E\u5185\u5BB9"},{depth:2,slug:"4properties\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u53C2\u6570",text:"4\u3001Properties\u53C2\u6570\u65B9\u6CD5\u63A5\u53D7\u5C5E\u6027\u53C2\u6570"},{depth:2,slug:"5\u81EA\u5B9A\u4E49java-bean\u53C2\u6570",text:"5\u3001\u81EA\u5B9A\u4E49Java Bean\u53C2\u6570"},{depth:1,slug:"nacosconfigkeyslistener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD",text:"@NacosConfigKeysListener\u6CE8\u89E3\u7528\u6CD5\u4ECB\u7ECD"},{depth:1,slug:"\u7ED3\u8BED",text:"\u7ED3\u8BED"}]},s=l((x,b,j)=>{const{layout:m,...n}=a;return n.file=i,n.url=d,v`${r()}${f(e)}`})});export{s as Content,u as __tla,c as compiledContent,s as default,i as file,a as frontmatter,o as getHeadings,t as rawContent,d as url};
