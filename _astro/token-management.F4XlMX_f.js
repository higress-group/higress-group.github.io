import{c as r,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as o,m as x,u as v,__tla as y}from"./constant.IVguHoYO.js";import{__tla as u}from"./astro/assets-service.BhtN0nM5.js";let e,p,a,i,t,d,n,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h1 id="\u573A\u666F\u63CF\u8FF0">\u573A\u666F\u63CF\u8FF0</h1>
<p>AI\u7F51\u5173\u80FD\u591F\u5BF9\u5927\u6A21\u578B\u4F7F\u7528\u7684Token\u6570\u91CF\u8FDB\u884C\u8FFD\u8E2A\uFF0C\u5728\u6D88\u8D39\u8005\u4F7F\u7528\u8D85\u989D\u65F6\u8FDB\u884C\u9650\u5236\uFF0C\u4ECE\u800C\u66F4\u597D\u7BA1\u7406\u8C03\u7528AI\u5E94\u7528\u7684\u7528\u6237\u989D\u5EA6\uFF0C\u4E3AToken\u4F7F\u7528\u5206\u6790\u63D0\u4F9B\u6570\u636E\u652F\u6301\u3002</p>
<p>\u4EE4\u724C\u9650\u6D41\u573A\u666F\u57FA\u4E8E\u6D88\u8D39\u8005\u8BA4\u8BC1\u3001Token\u9650\u6D41\u3001Token\u914D\u989D\u63D2\u4EF6\uFF0C\u96C6\u5408\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5C06Token\u8D44\u6E90\u8F6C\u5316\u4E3A\u53EF\u91CF\u5316\u3001\u53EF\u7BA1\u63A7\u3001\u53EF\u4F18\u5316\u7684\u670D\u52A1\u5355\u5143\uFF0C\u57FA\u4E8E\u81EA\u5B9A\u4E49\u7684\u7B56\u7565\uFF0C\u4FDD\u969C\u9AD8\u5E76\u53D1\u4E0B\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u3001\u5B89\u5168\u6027\u4E0E\u516C\u5E73\u6027\u3002</p>
<h1 id="\u90E8\u7F72higressai">\u90E8\u7F72Higress.AI</h1>
<p>\u672C\u6307\u5357\u4E2D\u57FA\u4E8Edocker\u90E8\u7F72\uFF0C\u5982\u60A8\u9700\u8981\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08k8s\u3001helm\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167<a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5FEB\u901F\u5F00\u59CB</a>\u3002</p>
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165 Aliyun Dashscope\u6216\u5176\u4ED6API-KEY\uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002</p>
<p><img src="/img/1744336247600.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u4E0A\u8FF0\u547D\u4EE4\u7684\u9ED8\u8BA4\u7684HTTP\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8080\uFF0CHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8443\uFF0C\u63A7\u5236\u53F0\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8001\u3002\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539<em>DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT</em>\u7ED3\u679C\uFF1B\u7136\u540E\u662F\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002</p>
<p><img src="/img/1744336250004.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A</p>
<p><img src="/img/1744336253143.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u63A7\u5236\u53F0\u914D\u7F6E">\u63A7\u5236\u53F0\u914D\u7F6E</h1>
<p>\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762<a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002</p>
<p>\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002\u8FD9\u91CC\u6211\u4EEC\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EAPI-KEY\uFF0C\u5982\u60A8\u5728\u4E0A\u4E00\u6B65\u4E2D\u5DF2\u7ECF\u914D\u7F6E\uFF0C\u5219\u76F4\u63A5\u5FFD\u7565\u3002</p>
<p><img src="/img/1744336256698.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6E\u6D88\u8D39\u8005">\u914D\u7F6E\u6D88\u8D39\u8005</h2>
<p>\u5728\u63A7\u5236\u53F0\u4E2D\u7684\u6D88\u8D39\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u4E3A\u5F53\u524D\u7F51\u5173\u6DFB\u52A0\u6D88\u8D39\u8005\u4EE5\u7BA1\u7406\u914D\u989D\u3001\u53D1\u9001\u8BF7\u6C42\u3002</p>
<p><img src="/img/1744336260018.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u70B9\u51FB\u521B\u5EFA\u6D88\u8D39\u8005\uFF0C\u57FA\u4E8EKey Auth\u521B\u5EFA3\u4E2A\u6D88\u8D39\u8005\uFF0C\u4F9D\u6B21\u4E3Aaliyun-admin\u3001aliyun-user1\u3001aliyun-user2\uFF0C\u57FA\u4E8EHTTP Header\u4E2D\u7684x-api-key\u5B57\u6BB5\u8FDB\u884C\u8BA4\u8BC1\u3002</p>
<p><img src="/img/1744336262806.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744336265319.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6Eredis\u5B58\u50A8\u670D\u52A1">\u914D\u7F6ERedis\u5B58\u50A8\u670D\u52A1</h2>
<p>Token\u7684\u4FE1\u606F\u9700\u8981\u4E34\u65F6\u5B58\u50A8\u4EE5\u4F9B\u8BBF\u95EE\uFF0C\u56E0\u6B64\u9700\u8981\u521B\u5EFA\u4E00\u4E2ARedis\u670D\u52A1\u7528\u4E8E\u7F13\u5B58\u3002\u672C\u6587\u793A\u4F8B\u57FA\u4E8Edocker\u642D\u5EFA\u4E00\u4E2A\u672C\u5730Redis\u670D\u52A1\uFF0C\u63D0\u4F9B\u7ED9Higress\u4F7F\u7528\u3002</p>
<h3 id="redis\u670D\u52A1\u6784\u5EFA">Redis\u670D\u52A1\u6784\u5EFA</h3>
<ol>
<li>\u4F7F\u7528docker\u547D\u4EE4\u542F\u52A8\u4E00\u4E2Aredis\u5BB9\u5668</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">docker run --name my-redis -p 6379:6379 -d redis</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run --name my-redis -p 6379:6379 -d redis"><div></div></button></div></figure></div>
<ol start="2">
<li>
<p>\u67E5\u770Bmy-redis\u670D\u52A1ip</p>
<ol>
<li>
<p>\u4F7F\u7528<code dir="auto">docker network ls</code>\u83B7\u53D6bridge\u7F51\u7EDC\u7684id
<img src="/img/1744336267414.png" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>\u4F7F\u7528<code dir="auto">docker network inspect &#x3C;netword-id></code>\uFF0C\u68C0\u67E5bridge\u4E0B\u662F\u5426\u6709my-redis\u5BB9\u5668</p>
<blockquote>
<p>\u5982\u679C\u6CA1\u6709\uFF0C\u901A\u8FC7<code dir="auto">docker network connect bridge my-redis</code>\u547D\u4EE4\u8FDE\u63A5\u5230\u7F51\u7EDC\u4E2D</p>
</blockquote>
</li>
<li>
<p>\u83B7\u53D6my-redis\u670D\u52A1\u5BF9\u5E94\u7684ip
<img src="/img/1744336269822.png" alt="" referrerpolicy="no-referrer"></p>
</li>
</ol>
</li>
</ol>
<h3 id="redis\u670D\u52A1\u914D\u7F6E">Redis\u670D\u52A1\u914D\u7F6E</h3>
<p>\u5728\u63A7\u5236\u53F0\u670D\u52A1\u6765\u6E90\u7684\u754C\u9762\uFF0C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\uFF0C\u586B\u5199\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF1A</p>
<ul>
<li>\u7C7B\u578B\uFF1A\u56FA\u5B9A\u5730\u5740</li>
<li>\u670D\u52A1\u5730\u5740\uFF1Amy-redis\u7684ip\u548C\u670D\u52A1\u7AEF\u53E3\u62FC\u63A5</li>
<li>\u670D\u52A1\u534F\u8BAE\uFF1AHTTP</li>
</ul>
<p><img src="/img/1744336272251.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u914D\u7F6Eai\u8DEF\u7531\u7B56\u7565">\u914D\u7F6EAI\u8DEF\u7531\u7B56\u7565</h2>
<h3 id="\u6D88\u8D39\u8005\u8BA4\u8BC1\u914D\u7F6E">\u6D88\u8D39\u8005\u8BA4\u8BC1\u914D\u7F6E</h3>
<p>\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6E\u6D88\u8D39\u8005\uFF0C\u70B9\u51FB\u7F16\u8F91\u3002</p>
<p><img src="/img/1744336275006.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728\u7F16\u8F91\u754C\u9762\u4E2D\uFF0C\u6253\u5F00\u542F\u7528\u8BF7\u6C42\u8BA4\u8BC1\uFF0C\u6DFB\u52A0\u521A\u521A\u521B\u5EFA\u7684\u6D88\u8D39\u8005\u3002</p>
<p><img src="/img/1744336277356.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="token\u914D\u989D\u914D\u7F6E">Token\u914D\u989D\u914D\u7F6E</h3>
<p>\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EToken\u914D\u989D\uFF0C\u70B9\u51FB\u7B56\u7565\u8FDB\u884C\u914D\u7F6E\uFF0C\u9009\u62E9AI\u914D\u989D\u7BA1\u7406\u3002</p>
<p><img src="/img/1744336280617.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744336284010.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728AI\u914D\u989D\u7BA1\u7406\u63D2\u4EF6\u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u53C2\u8003\u4EE5\u4E0B\u5B57\u6BB5\u586B\u5199\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis_key_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'chat_quota:'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aliyun-admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/quota</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-redis.static</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis_key_prefix: &#x27;chat_quota:&#x27;\x7Fadmin_consumer: aliyun-admin\x7Fadmin_path: /quota\x7Fredis:\x7F  service_name: local-redis.static\x7F  service_port: 80\x7F  timeout: 2000"><div></div></button></div></figure></div>
<p><img src="/img/1744336286537.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="token\u9650\u6D41\u914D\u7F6E">Token\u9650\u6D41\u914D\u7F6E</h3>
<p>\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EToken\u9650\u6D41\uFF0C\u70B9\u51FB\u7B56\u7565\u8FDB\u884C\u914D\u7F6E\u3002</p>
<p><img src="/img/1744336289966.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744336293004.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728AI Token\u9650\u6D41\u63D2\u4EF6\u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u53C2\u8003\u4EE5\u4E0B\u5B57\u6BB5\u586B\u5199\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6">#\u6BCF\u5206\u949F\u9650\u6D415\u4E2A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"default_rule"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-redis.static</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_items:\x7F- limit_by_per_header: x-api-key\x7F  limit_keys:\x7F  - key: &#x22;*&#x22;\x7F    token_per_minute: 5 #\u6BCF\u5206\u949F\u9650\u6D415\u4E2A\x7Frule_name: &#x22;default_rule&#x22;\x7F\x7Fredis:\x7F  service_name: local-redis.static\x7F  service_port: 80"><div></div></button></div></figure></div>
<p><img src="/img/1744336295801.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u8C03\u8BD5">\u8C03\u8BD5</h1>
<p>\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982HTTP\u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u67E5\u8BE2quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'x-higress-llm-model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u5237\u65B0quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d 'consumer=aliyun-user1&#x26;quota=100' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'x-higress-llm-model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u589E\u52A0quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions/quota/delta' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d 'consumer=aliyun-user1&#x26;value=100' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'x-higress-llm-model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#\u8BF7\u6C42,x-api-key\u4E3Aaliyun-user1\u7684\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F60\u662F\u8C01"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="#\u67E5\u8BE2quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;x-higress-llm-model: qwen-max&#x27;\x7F\x7F#\u5237\u65B0quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions/quota/refresh&#x27; \\\x7F  -d &#x27;consumer=aliyun-user1&#x26;quota=100&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;x-higress-llm-model: qwen-max&#x27;\x7F\x7F#\u589E\u52A0quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions/quota/delta&#x27; \\\x7F  -d &#x27;consumer=aliyun-user1&#x26;value=100&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;x-higress-llm-model: qwen-max&#x27;\x7F\x7F#\u8BF7\u6C42,x-api-key\u4E3Aaliyun-user1\u7684\u51ED\u8BC1\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A</p>
<p><img src="/img/1744336299295.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744336302241.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="\u7ED3\u679C\u89C2\u6D4B">\u7ED3\u679C\u89C2\u6D4B</h1>
<p>\u5728AI\u76D1\u63A7\u9762\u677F\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9AI\u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FAToken\u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546/\u6A21\u578BToken\u4F7F\u7528\u6570\u91CF\u3001\u6D88\u8D39\u8005\u4F7F\u7528Token\u60C5\u51B5\u7B49\u3002</p>
<p><img src="/img/1744336305430.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>\u5982\u60A8\u5728\u90E8\u7F72\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a> \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002</p>
<p>\u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>\u3002</p>
</blockquote>`,i={title:"\u4EE4\u724C\u9650\u6D41",description:"\u4EE4\u724C\u9650\u6D41\u5F00\u6E90\u8FD0\u884C\u6D41\u7A0B",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/scene-guide/token-management.md",n=void 0,d=function(){return`
# \u573A\u666F\u63CF\u8FF0
AI\u7F51\u5173\u80FD\u591F\u5BF9\u5927\u6A21\u578B\u4F7F\u7528\u7684Token\u6570\u91CF\u8FDB\u884C\u8FFD\u8E2A\uFF0C\u5728\u6D88\u8D39\u8005\u4F7F\u7528\u8D85\u989D\u65F6\u8FDB\u884C\u9650\u5236\uFF0C\u4ECE\u800C\u66F4\u597D\u7BA1\u7406\u8C03\u7528AI\u5E94\u7528\u7684\u7528\u6237\u989D\u5EA6\uFF0C\u4E3AToken\u4F7F\u7528\u5206\u6790\u63D0\u4F9B\u6570\u636E\u652F\u6301\u3002

\u4EE4\u724C\u9650\u6D41\u573A\u666F\u57FA\u4E8E\u6D88\u8D39\u8005\u8BA4\u8BC1\u3001Token\u9650\u6D41\u3001Token\u914D\u989D\u63D2\u4EF6\uFF0C\u96C6\u5408\u53EF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5C06Token\u8D44\u6E90\u8F6C\u5316\u4E3A\u53EF\u91CF\u5316\u3001\u53EF\u7BA1\u63A7\u3001\u53EF\u4F18\u5316\u7684\u670D\u52A1\u5355\u5143\uFF0C\u57FA\u4E8E\u81EA\u5B9A\u4E49\u7684\u7B56\u7565\uFF0C\u4FDD\u969C\u9AD8\u5E76\u53D1\u4E0B\u670D\u52A1\u7684\u7A33\u5B9A\u6027\u3001\u5B89\u5168\u6027\u4E0E\u516C\u5E73\u6027\u3002



# \u90E8\u7F72Higress.AI
\u672C\u6307\u5357\u4E2D\u57FA\u4E8Edocker\u90E8\u7F72\uFF0C\u5982\u60A8\u9700\u8981\u5176\u4ED6\u90E8\u7F72\u65B9\u5F0F\uFF08k8s\u3001helm\u7B49\uFF09\uFF0C\u8BF7\u53C2\u7167[\u5FEB\u901F\u5F00\u59CB](https://higress.cn/docs/latest/user/quickstart/)\u3002



\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

\u6309\u7167\u6307\u5F15\u53EF\u4EE5\u5206\u522B\u5F55\u5165 Aliyun Dashscope\u6216\u5176\u4ED6API-KEY\uFF1B\u4E5F\u53EF\u4EE5\u952E\u5165\u56DE\u8F66\u540E\u8DF3\u8FC7\uFF0C\u4E4B\u540E\u5728\u63A7\u5236\u53F0\u4E2D\u4FEE\u6539\u3002

![](/img/1744336247600.png)



\u4E0A\u8FF0\u547D\u4EE4\u7684\u9ED8\u8BA4\u7684HTTP\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8080\uFF0CHTTPS\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8443\uFF0C\u63A7\u5236\u53F0\u7684\u670D\u52A1\u7AEF\u53E3\u4E3A8001\u3002\u5982\u60A8\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7AEF\u53E3\uFF0C\u53EF\u4F7F\u7528 \`wget https://higress.cn/ai-gateway/install.sh\`\u4E0B\u8F7D\u90E8\u7F72\u811A\u672C\u540E\uFF0C\u4FEE\u6539*DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*\u7ED3\u679C\uFF1B\u7136\u540E\u662F\u4F7F\u7528bash\u6267\u884C\u811A\u672C\u3002

![](/img/1744336250004.png)



\u90E8\u7F72\u5B8C\u6210\u540E\uFF0C\u4F1A\u51FA\u73B0\u4EE5\u4E0B\u754C\u9762\uFF1A

![](/img/1744336253143.png)

# \u63A7\u5236\u53F0\u914D\u7F6E
\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u63A7\u5236\u53F0\u754C\u9762[http://localhost:8001/](http://localhost:8001/)\uFF0C\u9996\u6B21\u767B\u5F55\u9700\u8981\u914D\u7F6E\u7BA1\u7406\u5458\u53CA\u5BC6\u7801\u3002

\u5728AI\u670D\u52A1\u63D0\u4F9B\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5DF2\u96C6\u6210\u4F9B\u5E94\u5546\u7684API-KEY\u3002\u5F53\u524D\u5DF2\u96C6\u6210\u7684\u4F9B\u5E94\u5546\u6709\u963F\u91CC\u4E91\u3001DeepSeek\u3001Azure OpenAI\u3001OpenAI\u3001\u8C46\u5305\u7B49\u3002\u8FD9\u91CC\u6211\u4EEC\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EAPI-KEY\uFF0C\u5982\u60A8\u5728\u4E0A\u4E00\u6B65\u4E2D\u5DF2\u7ECF\u914D\u7F6E\uFF0C\u5219\u76F4\u63A5\u5FFD\u7565\u3002

![](/img/1744336256698.png)



## \u914D\u7F6E\u6D88\u8D39\u8005
\u5728\u63A7\u5236\u53F0\u4E2D\u7684\u6D88\u8D39\u8005\u7BA1\u7406\u754C\u9762\uFF0C\u4E3A\u5F53\u524D\u7F51\u5173\u6DFB\u52A0\u6D88\u8D39\u8005\u4EE5\u7BA1\u7406\u914D\u989D\u3001\u53D1\u9001\u8BF7\u6C42\u3002

![](/img/1744336260018.png)

\u70B9\u51FB\u521B\u5EFA\u6D88\u8D39\u8005\uFF0C\u57FA\u4E8EKey Auth\u521B\u5EFA3\u4E2A\u6D88\u8D39\u8005\uFF0C\u4F9D\u6B21\u4E3Aaliyun-admin\u3001aliyun-user1\u3001aliyun-user2\uFF0C\u57FA\u4E8EHTTP Header\u4E2D\u7684x-api-key\u5B57\u6BB5\u8FDB\u884C\u8BA4\u8BC1\u3002

![](/img/1744336262806.png)

![](/img/1744336265319.png)



## \u914D\u7F6ERedis\u5B58\u50A8\u670D\u52A1
Token\u7684\u4FE1\u606F\u9700\u8981\u4E34\u65F6\u5B58\u50A8\u4EE5\u4F9B\u8BBF\u95EE\uFF0C\u56E0\u6B64\u9700\u8981\u521B\u5EFA\u4E00\u4E2ARedis\u670D\u52A1\u7528\u4E8E\u7F13\u5B58\u3002\u672C\u6587\u793A\u4F8B\u57FA\u4E8Edocker\u642D\u5EFA\u4E00\u4E2A\u672C\u5730Redis\u670D\u52A1\uFF0C\u63D0\u4F9B\u7ED9Higress\u4F7F\u7528\u3002



### Redis\u670D\u52A1\u6784\u5EFA
1. \u4F7F\u7528docker\u547D\u4EE4\u542F\u52A8\u4E00\u4E2Aredis\u5BB9\u5668

\`\`\`plain
docker run --name my-redis -p 6379:6379 -d redis
\`\`\`

2. \u67E5\u770Bmy-redis\u670D\u52A1ip
   
   1. \u4F7F\u7528\`docker network ls\`\u83B7\u53D6bridge\u7F51\u7EDC\u7684id
![](/img/1744336267414.png)

   2. \u4F7F\u7528\`docker network inspect <netword-id>\`\uFF0C\u68C0\u67E5bridge\u4E0B\u662F\u5426\u6709my-redis\u5BB9\u5668
        > \u5982\u679C\u6CA1\u6709\uFF0C\u901A\u8FC7\`docker network connect bridge my-redis\`\u547D\u4EE4\u8FDE\u63A5\u5230\u7F51\u7EDC\u4E2D
   
   1. \u83B7\u53D6my-redis\u670D\u52A1\u5BF9\u5E94\u7684ip
![](/img/1744336269822.png)



### Redis\u670D\u52A1\u914D\u7F6E
\u5728\u63A7\u5236\u53F0\u670D\u52A1\u6765\u6E90\u7684\u754C\u9762\uFF0C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\uFF0C\u586B\u5199\u5BF9\u5E94\u7684\u5B57\u6BB5\uFF1A

+ \u7C7B\u578B\uFF1A\u56FA\u5B9A\u5730\u5740
+ \u670D\u52A1\u5730\u5740\uFF1Amy-redis\u7684ip\u548C\u670D\u52A1\u7AEF\u53E3\u62FC\u63A5
+ \u670D\u52A1\u534F\u8BAE\uFF1AHTTP

![](/img/1744336272251.png)



## \u914D\u7F6EAI\u8DEF\u7531\u7B56\u7565
### \u6D88\u8D39\u8005\u8BA4\u8BC1\u914D\u7F6E
\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6E\u6D88\u8D39\u8005\uFF0C\u70B9\u51FB\u7F16\u8F91\u3002

![](/img/1744336275006.png)

\u5728\u7F16\u8F91\u754C\u9762\u4E2D\uFF0C\u6253\u5F00\u542F\u7528\u8BF7\u6C42\u8BA4\u8BC1\uFF0C\u6DFB\u52A0\u521A\u521A\u521B\u5EFA\u7684\u6D88\u8D39\u8005\u3002

![](/img/1744336277356.png)





### Token\u914D\u989D\u914D\u7F6E
\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EToken\u914D\u989D\uFF0C\u70B9\u51FB\u7B56\u7565\u8FDB\u884C\u914D\u7F6E\uFF0C\u9009\u62E9AI\u914D\u989D\u7BA1\u7406\u3002

![](/img/1744336280617.png)

![](/img/1744336284010.png)

\u5728AI\u914D\u989D\u7BA1\u7406\u63D2\u4EF6\u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u53C2\u8003\u4EE5\u4E0B\u5B57\u6BB5\u586B\u5199\uFF1A

\`\`\`yaml
redis_key_prefix: 'chat_quota:'
admin_consumer: aliyun-admin
admin_path: /quota
redis:
  service_name: local-redis.static
  service_port: 80
  timeout: 2000
\`\`\`

![](/img/1744336286537.png)

### Token\u9650\u6D41\u914D\u7F6E
\u5728AI\u8DEF\u7531\u7BA1\u7406\u754C\u9762\u4E2D\uFF0C\u4E3A\u963F\u91CC\u4E91\u914D\u7F6EToken\u9650\u6D41\uFF0C\u70B9\u51FB\u7B56\u7565\u8FDB\u884C\u914D\u7F6E\u3002

![](/img/1744336289966.png)

![](/img/1744336293004.png)

\u5728AI Token\u9650\u6D41\u63D2\u4EF6\u914D\u7F6E\u754C\u9762\u4E2D\uFF0C\u53C2\u8003\u4EE5\u4E0B\u5B57\u6BB5\u586B\u5199\uFF1A

\`\`\`yaml
rule_items:
- limit_by_per_header: x-api-key
  limit_keys:
  - key: "*"
    token_per_minute: 5 #\u6BCF\u5206\u949F\u9650\u6D415\u4E2A
rule_name: "default_rule"

redis:
  service_name: local-redis.static
  service_port: 80
\`\`\`

![](/img/1744336295801.png)



# \u8C03\u8BD5
\u6253\u5F00\u7CFB\u7EDF\u81EA\u5E26\u547D\u4EE4\u884C\uFF0C\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u8BF7\u6C42\uFF08\u5982HTTP\u670D\u52A1\u672A\u90E8\u7F72\u57288080\u7AEF\u53E3\u4E0A\uFF0C\u4FEE\u6539\u4E3A\u5BF9\u5E94\u7AEF\u53E3\u5373\u53EF\uFF09

\`\`\`yaml
#\u67E5\u8BE2quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1
curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'
  
#\u5237\u65B0quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1
curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \\
  -d 'consumer=aliyun-user1&quota=100' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'
  
#\u589E\u52A0quota,x-api-key\u4E3Aaliyun-admin\u7684\u51ED\u8BC1
curl 'http://localhost:8080/v1/chat/completions/quota/delta' \\
  -d 'consumer=aliyun-user1&value=100' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'

#\u8BF7\u6C42,x-api-key\u4E3Aaliyun-user1\u7684\u51ED\u8BC1
curl 'http://localhost:8080/v1/chat/completions' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "\u4F60\u662F\u8C01"
      }
    ]
  }'

\`\`\`

\u8BF7\u6C42\u7ED3\u679C\u793A\u4F8B\uFF1A

![](/img/1744336299295.png)

![](/img/1744336302241.png)



# \u7ED3\u679C\u89C2\u6D4B
\u5728AI\u76D1\u63A7\u9762\u677F\u754C\u9762\uFF0C\u53EF\u4EE5\u5BF9AI\u8BF7\u6C42\u8FDB\u884C\u89C2\u6D4B\u3002\u89C2\u6D4B\u6307\u6807\u5305\u62EC\u6BCF\u79D2\u8F93\u5165\u8F93\u51FAToken\u6570\u91CF\u3001\u5404\u4F9B\u5E94\u5546/\u6A21\u578BToken\u4F7F\u7528\u6570\u91CF\u3001\u6D88\u8D39\u8005\u4F7F\u7528Token\u60C5\u51B5\u7B49\u3002

![](/img/1744336305430.png)


> \u5982\u60A8\u5728\u90E8\u7F72\u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
> 
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002`},p=function(){return s},t=function(){return[{depth:1,slug:"\u573A\u666F\u63CF\u8FF0",text:"\u573A\u666F\u63CF\u8FF0"},{depth:1,slug:"\u90E8\u7F72higressai",text:"\u90E8\u7F72Higress.AI"},{depth:1,slug:"\u63A7\u5236\u53F0\u914D\u7F6E",text:"\u63A7\u5236\u53F0\u914D\u7F6E"},{depth:2,slug:"\u914D\u7F6E\u6D88\u8D39\u8005",text:"\u914D\u7F6E\u6D88\u8D39\u8005"},{depth:2,slug:"\u914D\u7F6Eredis\u5B58\u50A8\u670D\u52A1",text:"\u914D\u7F6ERedis\u5B58\u50A8\u670D\u52A1"},{depth:3,slug:"redis\u670D\u52A1\u6784\u5EFA",text:"Redis\u670D\u52A1\u6784\u5EFA"},{depth:3,slug:"redis\u670D\u52A1\u914D\u7F6E",text:"Redis\u670D\u52A1\u914D\u7F6E"},{depth:2,slug:"\u914D\u7F6Eai\u8DEF\u7531\u7B56\u7565",text:"\u914D\u7F6EAI\u8DEF\u7531\u7B56\u7565"},{depth:3,slug:"\u6D88\u8D39\u8005\u8BA4\u8BC1\u914D\u7F6E",text:"\u6D88\u8D39\u8005\u8BA4\u8BC1\u914D\u7F6E"},{depth:3,slug:"token\u914D\u989D\u914D\u7F6E",text:"Token\u914D\u989D\u914D\u7F6E"},{depth:3,slug:"token\u9650\u6D41\u914D\u7F6E",text:"Token\u9650\u6D41\u914D\u7F6E"},{depth:1,slug:"\u8C03\u8BD5",text:"\u8C03\u8BD5"},{depth:1,slug:"\u7ED3\u679C\u89C2\u6D4B",text:"\u7ED3\u679C\u89C2\u6D4B"}]},e=r((g,E,h)=>{const{layout:f,...l}=i;return l.file=a,l.url=n,o`${x()}${v(s)}`})});export{e as Content,m as __tla,p as compiledContent,e as default,a as file,i as frontmatter,t as getHeadings,d as rawContent,n as url};
