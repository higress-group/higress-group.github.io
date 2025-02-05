import{c,__tla as d}from"./astro-component.CXlaF79K.js";import{r,m as E,u as v,__tla as h}from"./constant.Zsfu44Ss.js";import{__tla as y}from"./astro/assets-service.DQopRnBr.js";let e,p,a,n,i,l,t,f=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>docker compose \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress docker compose \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528\u300D\uFF0C\u6211\u5C06\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E3A\u60A8\u63D0\u4F9B\u8BE6\u7EC6\u7684\u5B89\u88C5\u4E0E\u4F7F\u7528\u6307\u5357\u3002</p>
<h3 id="\u5B89\u88C5\u4E0E\u914D\u7F6E\u6B65\u9AA4">\u5B89\u88C5\u4E0E\u914D\u7F6E\u6B65\u9AA4</h3>
<h4 id="\u7B2C\u4E00\u6B65\u521B\u5EFA-docker-compose-\u914D\u7F6E\u6587\u4EF6">\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA Docker Compose \u914D\u7F6E\u6587\u4EF6</h4>
<ol>
<li><strong>\u521B\u5EFA\u6587\u4EF6</strong>\uFF1A\u9996\u5148\uFF0C\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code dir="auto">docker-compose.yml</code> \u7684\u6587\u4EF6\u3002</li>
<li><strong>\u586B\u5199\u5185\u5BB9</strong>\uFF1A\u5C06\u4E0B\u9762\u7684\u914D\u7F6E\u4FE1\u606F\u590D\u5236\u5E76\u7C98\u8D34\u5230\u8BE5\u6587\u4EF6\u4E2D\u3002\u8BB0\u5F97\u66FF\u6362 <code dir="auto">&#x3C;YOUR_DASHSCOPE_API_KEY></code> \u4E3A\u60A8\u7684\u5B9E\u9645 DashScope API Key\uFF0C\u4EE5\u53CA <code dir="auto">/path-to-local-config-folder</code> \u4E3A\u60A8\u5E0C\u671B\u5B58\u653E\u914D\u7F6E\u6587\u4EF6\u7684\u672C\u5730\u76EE\u5F55\u8DEF\u5F84\u3002\u540C\u65F6\uFF0C\u8BBE\u7F6E <code dir="auto">CODE</code> \u4E3A\u60A8\u81EA\u5B9A\u4E49\u7684\u8BBF\u95EE\u5BC6\u7801\u3002</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.9'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress-net</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">external</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:1.4.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">CONFIG_TEMPLATE=ai-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_AI_SERVICE=qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DASHSCOPE_API_KEY=&#x3C;YOUR_DASHSCOPE_API_KEY></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-net</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"8080:8080/tcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"8001:8001/tcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">/path-to-local-config-folder:/data</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restart</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">always</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">lobechat</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">lobehub/lobe-chat</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">CODE=\u8BBF\u95EE\u5BC6\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">OPENAI_API_KEY=unused</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">OPENAI_PROXY_URL=http://higress:8080/v1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-net</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"3210:3210/tcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restart</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">always</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="version: &#x27;3.9&#x27;\x7Fnetworks:\x7F  higress-net:\x7F    external: false\x7Fservices:\x7F  higress:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:1.4.1\x7F    environment:\x7F      - CONFIG_TEMPLATE=ai-proxy\x7F      - DEFAULT_AI_SERVICE=qwen\x7F      - DASHSCOPE_API_KEY=<YOUR_DASHSCOPE_API_KEY>\x7F    networks:\x7F      - higress-net\x7F    ports:\x7F      - &#x22;8080:8080/tcp&#x22;\x7F      - &#x22;8001:8001/tcp&#x22;\x7F    volumes:\x7F      - /path-to-local-config-folder:/data\x7F    restart: always\x7F  lobechat:\x7F    image: lobehub/lobe-chat\x7F    environment:\x7F      - CODE=\u8BBF\u95EE\u5BC6\u7801\x7F      - OPENAI_API_KEY=unused\x7F      - OPENAI_PROXY_URL=http://higress:8080/v1\x7F    networks:\x7F      - higress-net\x7F    ports:\x7F      - &#x22;3210:3210/tcp&#x22;\x7F    restart: always"><div></div></button></div></figure></div>
<h4 id="\u7B2C\u4E8C\u6B65\u542F\u52A8-docker-compose-\u9879\u76EE">\u7B2C\u4E8C\u6B65\uFF1A\u542F\u52A8 Docker Compose \u9879\u76EE</h4>
<p>\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u5BFC\u822A\u5230 <code dir="auto">docker-compose.yml</code> \u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4EE5\u542F\u52A8 Higress \u548C LobeChat \u670D\u52A1\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">up</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker compose -p higress-ai up -d"><div></div></button></div></figure></div>
<h4 id="\u7B2C\u4E09\u6B65\u8BBF\u95EE-lobechat-\u9875\u9762">\u7B2C\u4E09\u6B65\uFF1A\u8BBF\u95EE LobeChat \u9875\u9762</h4>
<p>\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u8F93\u5165\u5730\u5740 <code dir="auto">http://localhost:3210/</code> \u6765\u8BBF\u95EE LobeChat \u9875\u9762\uFF0C\u5F00\u59CB\u4F7F\u7528\u60A8\u7684\u79C1\u4EBAGPT\u52A9\u7406\u3002</p>
<h3 id="\u9AD8\u7EA7\u914D\u7F6E\u53EF\u9009">\u9AD8\u7EA7\u914D\u7F6E\uFF08\u53EF\u9009\uFF09</h3>
<ul>
<li><strong>\u5F00\u542F\u8054\u7F51\u641C\u7D22\u80FD\u529B</strong>\uFF1A\u8BBF\u95EE <code dir="auto">http://localhost:8001/</code> \u8C03\u6574\u914D\u7F6E\uFF0C\u786E\u4FDD <code dir="auto">qwenEnableSearch</code> \u8BBE\u7F6E\u4E3A <code dir="auto">true</code>\u3002</li>
<li><strong>\u542F\u7528RAG\uFF08\u68C0\u7D22\u589E\u5F3A\u751F\u6210\uFF09\u80FD\u529B</strong>\uFF1A\u540C\u6837\u5728\u63A7\u5236\u53F0\uFF0C\u4E0A\u4F20\u6587\u4EF6\u5E76\u914D\u7F6E <code dir="auto">qwenFileIds</code> \u4F7F\u7528\u4E4B\u524D\u4E0A\u4F20\u5F97\u5230\u7684\u6587\u4EF6ID\u3002</li>
</ul>
<h3 id="\u8BF4\u660E">\u8BF4\u660E</h3>
<p>\u6B64\u8FC7\u7A0B\u6D89\u53CA\u4F7F\u7528Docker Compose\u5FEB\u901F\u90E8\u7F72Higress\u4F5C\u4E3AAI\u670D\u52A1\u4EE3\u7406\u53CALobeChat\u4F5C\u4E3A\u4EA4\u4E92\u754C\u9762\uFF0C\u901A\u8FC7DashScope API\u5B9E\u73B0\u4E0EAI\u6A21\u578B\u7684\u4EA4\u4E92\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7Higress\u63A7\u5236\u53F0\u8FDB\u884C\u9AD8\u7EA7\u914D\u7F6E\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6A21\u578B\u6620\u5C04\u3001\u7F51\u7EDC\u641C\u7D22\u53CARAG\u529F\u80FD\u7684\u5F00\u542F\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u7684\u9700\u6C42\u3002</p>
<p>\u8BF7\u786E\u4FDD\u9075\u5FAA\u6BCF\u4E00\u6B65\u7684\u6307\u793A\u5E76\u9002\u5F53\u8C03\u6574\u4EE5\u9002\u5E94\u60A8\u7684\u5177\u4F53\u73AF\u5883\u3002\u5982\u6709\u8FDB\u4E00\u6B65\u7684\u6280\u672F\u7EC6\u8282\u6216\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003\u63D0\u4F9B\u7684\u5B98\u65B9\u6587\u6863\u94FE\u63A5\u8FDB\u884C\u6DF1\u5165\u5B66\u4E60\u6216\u5BFB\u6C42\u89E3\u51B3\u65B9\u6848\u3002</p>
<p>[<a href="https://higress.io/zh-cn/docs/plugins/ai/ai-proxy" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B98\u65B9\u6587\u6863\u94FE\u63A5</a>] \u5305\u542B\u4E86\u66F4\u591A\u5173\u4E8EHigress AI\u63D2\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F\u4E0E\u914D\u7F6E\u6307\u5357\uFF0C\u4F9B\u60A8\u6DF1\u5165\u63A2\u7D22\u548C\u5B9A\u5236\u5316\u914D\u7F6E\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u4F7F\u7528 Higress + LobeChat \u5FEB\u901F\u642D\u5EFA\u79C1\u4EBAGPT\u52A9\u7406\uFF08\u652F\u6301 RAG\u3001\u8054\u7F51\uFF09</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16964" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16959",title:"docker compose \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress docker compose \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528\u300D\uFF0C\u6211\u5C06\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E3A\u60A8\u63D0\u4F9B\u8BE6\u7EC6\u7684\u5B89\u88C5\u4E0E\u4F7F\u7528\u6307\u5357\u3002### \u5B89\u88C5\u4E0E\u914D\u7F6E\u6B65\u9AA4#### \u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA Docker Compose \u914D\u7F6E\u6587\u4EF61. **\u521B\u5EFA\u6587\u4EF6**\uFF1A\u9996\u5148\uFF0C\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A `docker-compose.ym",tags:["higress","docker-compose","\u7BA1\u7406\u9762\u677F","\u5B89\u88C5","\u4F7F\u7528"],keywords:["higress","docker-compose","\u7BA1\u7406\u9762\u677F","\u5B89\u88C5","\u4F7F\u7528"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16959.md",t=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 docker compose \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress docker compose \u7BA1\u7406\u9762\u677F\u5B89\u88C5\u548C\u4F7F\u7528\u300D\uFF0C\u6211\u5C06\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E3A\u60A8\u63D0\u4F9B\u8BE6\u7EC6\u7684\u5B89\u88C5\u4E0E\u4F7F\u7528\u6307\u5357\u3002

### \u5B89\u88C5\u4E0E\u914D\u7F6E\u6B65\u9AA4

#### \u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA Docker Compose \u914D\u7F6E\u6587\u4EF6

1. **\u521B\u5EFA\u6587\u4EF6**\uFF1A\u9996\u5148\uFF0C\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A \`docker-compose.yml\` \u7684\u6587\u4EF6\u3002
2. **\u586B\u5199\u5185\u5BB9**\uFF1A\u5C06\u4E0B\u9762\u7684\u914D\u7F6E\u4FE1\u606F\u590D\u5236\u5E76\u7C98\u8D34\u5230\u8BE5\u6587\u4EF6\u4E2D\u3002\u8BB0\u5F97\u66FF\u6362 \`<YOUR_DASHSCOPE_API_KEY>\` \u4E3A\u60A8\u7684\u5B9E\u9645 DashScope API Key\uFF0C\u4EE5\u53CA \`/path-to-local-config-folder\` \u4E3A\u60A8\u5E0C\u671B\u5B58\u653E\u914D\u7F6E\u6587\u4EF6\u7684\u672C\u5730\u76EE\u5F55\u8DEF\u5F84\u3002\u540C\u65F6\uFF0C\u8BBE\u7F6E \`CODE\` \u4E3A\u60A8\u81EA\u5B9A\u4E49\u7684\u8BBF\u95EE\u5BC6\u7801\u3002

\`\`\`yaml
version: '3.9'
networks:
  higress-net:
    external: false
services:
  higress:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:1.4.1
    environment:
      - CONFIG_TEMPLATE=ai-proxy
      - DEFAULT_AI_SERVICE=qwen
      - DASHSCOPE_API_KEY=<YOUR_DASHSCOPE_API_KEY>
    networks:
      - higress-net
    ports:
      - "8080:8080/tcp"
      - "8001:8001/tcp"
    volumes:
      - /path-to-local-config-folder:/data
    restart: always
  lobechat:
    image: lobehub/lobe-chat
    environment:
      - CODE=\u8BBF\u95EE\u5BC6\u7801
      - OPENAI_API_KEY=unused
      - OPENAI_PROXY_URL=http://higress:8080/v1
    networks:
      - higress-net
    ports:
      - "3210:3210/tcp"
    restart: always
\`\`\`

#### \u7B2C\u4E8C\u6B65\uFF1A\u542F\u52A8 Docker Compose \u9879\u76EE

\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u5BFC\u822A\u5230 \`docker-compose.yml\` \u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u7136\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4EE5\u542F\u52A8 Higress \u548C LobeChat \u670D\u52A1\uFF1A

\`\`\`bash
docker compose -p higress-ai up -d
\`\`\`

#### \u7B2C\u4E09\u6B65\uFF1A\u8BBF\u95EE LobeChat \u9875\u9762

\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u8F93\u5165\u5730\u5740 \`http://localhost:3210/\` \u6765\u8BBF\u95EE LobeChat \u9875\u9762\uFF0C\u5F00\u59CB\u4F7F\u7528\u60A8\u7684\u79C1\u4EBAGPT\u52A9\u7406\u3002

### \u9AD8\u7EA7\u914D\u7F6E\uFF08\u53EF\u9009\uFF09

- **\u5F00\u542F\u8054\u7F51\u641C\u7D22\u80FD\u529B**\uFF1A\u8BBF\u95EE \`http://localhost:8001/\` \u8C03\u6574\u914D\u7F6E\uFF0C\u786E\u4FDD \`qwenEnableSearch\` \u8BBE\u7F6E\u4E3A \`true\`\u3002
- **\u542F\u7528RAG\uFF08\u68C0\u7D22\u589E\u5F3A\u751F\u6210\uFF09\u80FD\u529B**\uFF1A\u540C\u6837\u5728\u63A7\u5236\u53F0\uFF0C\u4E0A\u4F20\u6587\u4EF6\u5E76\u914D\u7F6E \`qwenFileIds\` \u4F7F\u7528\u4E4B\u524D\u4E0A\u4F20\u5F97\u5230\u7684\u6587\u4EF6ID\u3002

### \u8BF4\u660E

\u6B64\u8FC7\u7A0B\u6D89\u53CA\u4F7F\u7528Docker Compose\u5FEB\u901F\u90E8\u7F72Higress\u4F5C\u4E3AAI\u670D\u52A1\u4EE3\u7406\u53CALobeChat\u4F5C\u4E3A\u4EA4\u4E92\u754C\u9762\uFF0C\u901A\u8FC7DashScope API\u5B9E\u73B0\u4E0EAI\u6A21\u578B\u7684\u4EA4\u4E92\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7Higress\u63A7\u5236\u53F0\u8FDB\u884C\u9AD8\u7EA7\u914D\u7F6E\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6A21\u578B\u6620\u5C04\u3001\u7F51\u7EDC\u641C\u7D22\u53CARAG\u529F\u80FD\u7684\u5F00\u542F\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u7684\u9700\u6C42\u3002

\u8BF7\u786E\u4FDD\u9075\u5FAA\u6BCF\u4E00\u6B65\u7684\u6307\u793A\u5E76\u9002\u5F53\u8C03\u6574\u4EE5\u9002\u5E94\u60A8\u7684\u5177\u4F53\u73AF\u5883\u3002\u5982\u6709\u8FDB\u4E00\u6B65\u7684\u6280\u672F\u7EC6\u8282\u6216\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u4EE5\u53C2\u8003\u63D0\u4F9B\u7684\u5B98\u65B9\u6587\u6863\u94FE\u63A5\u8FDB\u884C\u6DF1\u5165\u5B66\u4E60\u6216\u5BFB\u6C42\u89E3\u51B3\u65B9\u6848\u3002

[[\u5B98\u65B9\u6587\u6863\u94FE\u63A5](https://higress.io/zh-cn/docs/plugins/ai/ai-proxy)] \u5305\u542B\u4E86\u66F4\u591A\u5173\u4E8EHigress AI\u63D2\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F\u4E0E\u914D\u7F6E\u6307\u5357\uFF0C\u4F9B\u60A8\u6DF1\u5165\u63A2\u7D22\u548C\u5B9A\u5236\u5316\u914D\u7F6E\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u4F7F\u7528 Higress + LobeChat \u5FEB\u901F\u642D\u5EFA\u79C1\u4EBAGPT\u52A9\u7406\uFF08\u652F\u6301 RAG\u3001\u8054\u7F51\uFF09 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16964)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},p=function(){return s},i=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5B89\u88C5\u4E0E\u914D\u7F6E\u6B65\u9AA4",text:"\u5B89\u88C5\u4E0E\u914D\u7F6E\u6B65\u9AA4"},{depth:4,slug:"\u7B2C\u4E00\u6B65\u521B\u5EFA-docker-compose-\u914D\u7F6E\u6587\u4EF6",text:"\u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA Docker Compose \u914D\u7F6E\u6587\u4EF6"},{depth:4,slug:"\u7B2C\u4E8C\u6B65\u542F\u52A8-docker-compose-\u9879\u76EE",text:"\u7B2C\u4E8C\u6B65\uFF1A\u542F\u52A8 Docker Compose \u9879\u76EE"},{depth:4,slug:"\u7B2C\u4E09\u6B65\u8BBF\u95EE-lobechat-\u9875\u9762",text:"\u7B2C\u4E09\u6B65\uFF1A\u8BBF\u95EE LobeChat \u9875\u9762"},{depth:3,slug:"\u9AD8\u7EA7\u914D\u7F6E\u53EF\u9009",text:"\u9AD8\u7EA7\u914D\u7F6E\uFF08\u53EF\u9009\uFF09"},{depth:3,slug:"\u8BF4\u660E",text:"\u8BF4\u660E"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=c((g,u,m)=>{const{layout:C,...o}=n;return o.file=a,o.url=t,r`${E()}${v(s)}`})});export{e as Content,f as __tla,p as compiledContent,e as default,a as file,n as frontmatter,i as getHeadings,l as rawContent,t as url};
