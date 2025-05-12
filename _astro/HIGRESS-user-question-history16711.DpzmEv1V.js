import{c as d,__tla as c}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as v,__tla as y}from"./constant.CYSm-e82.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let e,i,a,n,l,o,t,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u5982\u4F55\u96C6\u6210 LLM</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 Higress \u96C6\u6210 LLM\uFF08\u5927\u578B\u8BED\u8A00\u6A21\u578B\uFF09\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u8FD9\u91CC\u6709\u4E00\u5957\u8BE6\u7EC6\u6B65\u9AA4\u6765\u5E2E\u52A9\u60A8\u5B9E\u73B0\u8FD9\u4E00\u76EE\u6807\uFF0C\u4E3B\u8981\u5229\u7528 Higress \u4E0E NextChat \u642D\u5EFA\u4E00\u4E2A\u79C1\u4EBA GPT \u52A9\u7406\uFF0C\u5E76\u4EE5\u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09\u4E3A\u4F8B\u8FDB\u884C\u8BF4\u660E\u3002\u5982\u679C\u60A8\u5E0C\u671B\u96C6\u6210\u5176\u4ED6LLM\uFF0C\u5982OpenAI\u7684ChatGPT\uFF0C\u8BF7\u53C2\u7167\u540E\u7EED\u8C03\u6574\u8BF4\u660E\u3002</p>
<h3 id="\u6B65\u9AA4\u8BE6\u89E3"><strong>\u6B65\u9AA4\u8BE6\u89E3\uFF1A</strong></h3>
<h4 id="1-\u51C6\u5907\u5DE5\u4F5C"><strong>1. \u51C6\u5907\u5DE5\u4F5C</strong></h4>
<ul>
<li><strong>\u83B7\u53D6API\u5BC6\u94A5</strong>\uFF1A\u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u5DF2\u4ECE\u963F\u91CC\u4E91\u83B7\u53D6\u4E86<a href="https://help.aliyun.com/zh/dashscope/opening-service?spm=a2c4g.11186623.0.0.72c2369dLprd45" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u901A\u4E49\u5343\u95EE\u7684API Key</a>\u3002\u5BF9\u4E8EOpenAI ChatGPT\u96C6\u6210\uFF0C\u60A8\u9700\u8981\u51C6\u5907OpenAI\u7684API Key\u3002</li>
</ul>
<h4 id="2-\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6"><strong>2. \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</strong></h4>
<ul>
<li><strong>\u7F16\u5199<code dir="auto">docker-compose.yml</code></strong>\uFF1A\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code dir="auto">docker-compose.yml</code>\u7684\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u8F93\u5165\u4E0B\u9762\u7684\u914D\u7F6E\u4FE1\u606F\u3002\u8BF7\u8BB0\u5F97\u66FF\u6362<code dir="auto">YOUR_DASHSCOPE_API_KEY</code>\u4E3A\u60A8\u81EA\u5DF1\u7684API Key\uFF0C\u4EE5\u53CA\u6307\u5B9A\u4E00\u4E2A\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u5939\u8DEF\u5F84\u5982<code dir="auto">/path-to-local-config-folder</code>\u3002\u5982\u679C\u60A8\u6253\u7B97\u96C6\u6210OpenAI ChatGPT\uFF0C\u8BF7\u53C2\u7167\u540E\u9762\u8C03\u6574\u8BF4\u660E\u8FDB\u884C\u73AF\u5883\u53D8\u91CF\u7684\u66F4\u6539\u3002</li>
</ul>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u793A\u4F8B\u914D\u7F6E\uFF0C\u8BF7\u6309\u9700\u66FF\u6362</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.9'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress-net</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">external</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">CONFIG_TEMPLATE=ai-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_AI_SERVICE=qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DASHSCOPE_API_KEY=YOUR_DASHSCOPE_API_KEY</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-net</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"8080:8080/tcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"8001:8001/tcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">/path-to-local-config-folder:/data</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restart</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">always</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">nextchat</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">CODE=\u8BBF\u95EE\u5BC6\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-net</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"3000:3000/tcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restart</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">always</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u793A\u4F8B\u914D\u7F6E\uFF0C\u8BF7\u6309\u9700\u66FF\u6362\x7Fversion: &#x27;3.9&#x27;\x7Fnetworks:\x7F  higress-net:\x7F    external: false\x7Fservices:\x7F  higress:\x7F    image: ...\x7F    environment:\x7F      - CONFIG_TEMPLATE=ai-proxy\x7F      - DEFAULT_AI_SERVICE=qwen\x7F      - DASHSCOPE_API_KEY=YOUR_DASHSCOPE_API_KEY\x7F    networks:\x7F      - higress-net\x7F    ports:\x7F      - &#x22;8080:8080/tcp&#x22;\x7F      - &#x22;8001:8001/tcp&#x22;\x7F    volumes:\x7F      - /path-to-local-config-folder:/data\x7F    restart: always\x7F  nextchat:\x7F    image: ...\x7F    environment:\x7F      - CODE=\u8BBF\u95EE\u5BC6\u7801\x7F      - ...\x7F    networks:\x7F      - higress-net\x7F    ports:\x7F      - &#x22;3000:3000/tcp&#x22;\x7F    restart: always"><div></div></button></div></figure></div>
<h4 id="3-\u542F\u52A8\u670D\u52A1"><strong>3. \u542F\u52A8\u670D\u52A1</strong></h4>
<ul>
<li><strong>\u8FD0\u884CDocker Compose</strong>\uFF1A\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u5BFC\u822A\u5230\u5305\u542B<code dir="auto">docker-compose.yml</code>\u7684\u76EE\u5F55\uFF0C\u7136\u540E\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u670D\u52A1\uFF1A
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">docker compose -p higress-ai up -d</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker compose -p higress-ai up -d"><div></div></button></div></figure></div>
</li>
</ul>
<h4 id="4-\u8BBF\u95EE\u4E0E\u914D\u7F6E"><strong>4. \u8BBF\u95EE\u4E0E\u914D\u7F6E</strong></h4>
<ul>
<li>\u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE<a href="http://localhost:3000/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:3000/</a>\uFF0C\u8FDB\u5165NextChat\u754C\u9762\u3002</li>
<li>\u8C03\u6574\u6A21\u578B\u8BBE\u7F6E\u4E3A<code dir="auto">gpt-4-turbo</code>\uFF0C\u5229\u7528Higress\u5185\u7F6E\u7684AI Proxy\u670D\u52A1\u6620\u5C04\u81F3Qwen-max\u6A21\u578B\u3002</li>
</ul>
<h4 id="\u96C6\u6210openai-chatgpt\u53EF\u9009"><strong>\u96C6\u6210OpenAI ChatGPT\uFF08\u53EF\u9009\uFF09</strong></h4>
<p>\u82E5\u8981\u96C6\u6210OpenAI\u7684ChatGPT\uFF0C\u60A8\u9700\u8981\u5728<code dir="auto">docker-compose.yml</code>\u4E2D\u505A\u4EE5\u4E0B\u8C03\u6574\uFF1A</p>
<ul>
<li>\u66F4\u6539<code dir="auto">DEFAULT_AI_SERVICE</code>\u4E3A<code dir="auto">openai</code>\u3002</li>
<li>\u6DFB\u52A0<code dir="auto">OPENAI_API_KEY</code>\u73AF\u5883\u53D8\u91CF\uFF0C\u5E76\u8BBE\u7F6E\u4E3A\u60A8\u7684OpenAI API Key\u3002</li>
<li>\u4E4B\u540E\uFF0C\u91CD\u542FDocker Compose\u670D\u52A1\u4EE5\u5E94\u7528\u66F4\u6539\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">CONFIG_TEMPLATE=ai-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DEFAULT_AI_SERVICE=openai</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">OPENAI_API_KEY=YOUR_OPENAI_API_KEY</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  higress:\x7F    ...\x7F    environment:\x7F      - CONFIG_TEMPLATE=ai-proxy\x7F      - DEFAULT_AI_SERVICE=openai\x7F      - OPENAI_API_KEY=YOUR_OPENAI_API_KEY\x7F    ..."><div></div></button></div></figure></div>
<p>\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F\u670D\u52A1\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">down</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">up</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker compose -p higress-ai down\x7Fdocker compose -p higress-ai up -d"><div></div></button></div></figure></div>
<h3 id="\u603B\u7ED3"><strong>\u603B\u7ED3</strong></h3>
<p>\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6210\u529F\u5730\u4F7F\u7528Higress\u4F5C\u4E3A\u5E73\u53F0\u96C6\u6210LLM\uFF0C\u4E0D\u8BBA\u662F\u901A\u4E49\u5343\u95EE\u8FD8\u662FOpenAI\u7684ChatGPT\uFF0C\u4ECE\u800C\u521B\u5EFA\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u7684\u79C1\u4EBAGPT\u52A9\u7406\u3002\u8BF7\u786E\u4FDD\u9075\u5FAA\u6BCF\u4E00\u6B65\u7684\u6307\u793A\uFF0C\u5E76\u9002\u5F53\u8C03\u6574\u4EE5\u9002\u5E94\u60A8\u7684\u5177\u4F53\u9700\u6C42\u548C\u73AF\u5883\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u4F7F\u7528 Higress + NextChat \u5FEB\u901F\u642D\u5EFA\u79C1\u4EBAGPT\u52A9\u7406</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16725" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,n={id:"question-history-16711",title:"higress \u5982\u4F55\u96C6\u6210 LLM",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 Higress \u96C6\u6210 LLM\uFF08\u5927\u578B\u8BED\u8A00\u6A21\u578B\uFF09\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u8FD9\u91CC\u6709\u4E00\u5957\u8BE6\u7EC6\u6B65\u9AA4\u6765\u5E2E\u52A9\u60A8\u5B9E\u73B0\u8FD9\u4E00\u76EE\u6807\uFF0C\u4E3B\u8981\u5229\u7528 Higress \u4E0E NextChat \u642D\u5EFA\u4E00\u4E2A\u79C1\u4EBA GPT \u52A9\u7406\uFF0C\u5E76\u4EE5\u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09\u4E3A\u4F8B\u8FDB\u884C\u8BF4\u660E\u3002\u5982\u679C\u60A8\u5E0C\u671B\u96C6\u6210\u5176\u4ED6LLM\uFF0C\u5982OpenAI\u7684Cha",tags:["higress","LLM","\u96C6\u6210","\u65B9\u6CD5","","\u6307\u5357","\u5B9E\u73B0"],keywords:["higress","LLM","\u96C6\u6210","\u65B9\u6CD5","","\u6307\u5357","\u5B9E\u73B0"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16711.md",t=void 0,o=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u5982\u4F55\u96C6\u6210 LLM  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\uFF0C\u60A8\u60F3\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 Higress \u96C6\u6210 LLM\uFF08\u5927\u578B\u8BED\u8A00\u6A21\u578B\uFF09\u3002\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u8FD9\u91CC\u6709\u4E00\u5957\u8BE6\u7EC6\u6B65\u9AA4\u6765\u5E2E\u52A9\u60A8\u5B9E\u73B0\u8FD9\u4E00\u76EE\u6807\uFF0C\u4E3B\u8981\u5229\u7528 Higress \u4E0E NextChat \u642D\u5EFA\u4E00\u4E2A\u79C1\u4EBA GPT \u52A9\u7406\uFF0C\u5E76\u4EE5\u901A\u4E49\u5343\u95EE\uFF08Qwen\uFF09\u4E3A\u4F8B\u8FDB\u884C\u8BF4\u660E\u3002\u5982\u679C\u60A8\u5E0C\u671B\u96C6\u6210\u5176\u4ED6LLM\uFF0C\u5982OpenAI\u7684ChatGPT\uFF0C\u8BF7\u53C2\u7167\u540E\u7EED\u8C03\u6574\u8BF4\u660E\u3002

### **\u6B65\u9AA4\u8BE6\u89E3\uFF1A**

#### **1. \u51C6\u5907\u5DE5\u4F5C**
- **\u83B7\u53D6API\u5BC6\u94A5**\uFF1A\u9996\u5148\uFF0C\u786E\u4FDD\u60A8\u5DF2\u4ECE\u963F\u91CC\u4E91\u83B7\u53D6\u4E86[\u901A\u4E49\u5343\u95EE\u7684API Key](https://help.aliyun.com/zh/dashscope/opening-service?spm=a2c4g.11186623.0.0.72c2369dLprd45)\u3002\u5BF9\u4E8EOpenAI ChatGPT\u96C6\u6210\uFF0C\u60A8\u9700\u8981\u51C6\u5907OpenAI\u7684API Key\u3002

#### **2. \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6**
- **\u7F16\u5199\`docker-compose.yml\`**\uFF1A\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\`docker-compose.yml\`\u7684\u6587\u4EF6\uFF0C\u5E76\u4F7F\u7528\u6587\u672C\u7F16\u8F91\u5668\u8F93\u5165\u4E0B\u9762\u7684\u914D\u7F6E\u4FE1\u606F\u3002\u8BF7\u8BB0\u5F97\u66FF\u6362\`YOUR_DASHSCOPE_API_KEY\`\u4E3A\u60A8\u81EA\u5DF1\u7684API Key\uFF0C\u4EE5\u53CA\u6307\u5B9A\u4E00\u4E2A\u672C\u5730\u914D\u7F6E\u6587\u4EF6\u5939\u8DEF\u5F84\u5982\`/path-to-local-config-folder\`\u3002\u5982\u679C\u60A8\u6253\u7B97\u96C6\u6210OpenAI ChatGPT\uFF0C\u8BF7\u53C2\u7167\u540E\u9762\u8C03\u6574\u8BF4\u660E\u8FDB\u884C\u73AF\u5883\u53D8\u91CF\u7684\u66F4\u6539\u3002

\`\`\`yaml
# \u793A\u4F8B\u914D\u7F6E\uFF0C\u8BF7\u6309\u9700\u66FF\u6362
version: '3.9'
networks:
  higress-net:
    external: false
services:
  higress:
    image: ...
    environment:
      - CONFIG_TEMPLATE=ai-proxy
      - DEFAULT_AI_SERVICE=qwen
      - DASHSCOPE_API_KEY=YOUR_DASHSCOPE_API_KEY
    networks:
      - higress-net
    ports:
      - "8080:8080/tcp"
      - "8001:8001/tcp"
    volumes:
      - /path-to-local-config-folder:/data
    restart: always
  nextchat:
    image: ...
    environment:
      - CODE=\u8BBF\u95EE\u5BC6\u7801
      - ...
    networks:
      - higress-net
    ports:
      - "3000:3000/tcp"
    restart: always
\`\`\`

#### **3. \u542F\u52A8\u670D\u52A1**
- **\u8FD0\u884CDocker Compose**\uFF1A\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u5BFC\u822A\u5230\u5305\u542B\`docker-compose.yml\`\u7684\u76EE\u5F55\uFF0C\u7136\u540E\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u670D\u52A1\uFF1A
  \`\`\`
  docker compose -p higress-ai up -d
  \`\`\`

#### **4. \u8BBF\u95EE\u4E0E\u914D\u7F6E**
- \u6253\u5F00\u6D4F\u89C8\u5668\u8BBF\u95EE[http://localhost:3000/](http://localhost:3000/)\uFF0C\u8FDB\u5165NextChat\u754C\u9762\u3002
- \u8C03\u6574\u6A21\u578B\u8BBE\u7F6E\u4E3A\`gpt-4-turbo\`\uFF0C\u5229\u7528Higress\u5185\u7F6E\u7684AI Proxy\u670D\u52A1\u6620\u5C04\u81F3Qwen-max\u6A21\u578B\u3002

#### **\u96C6\u6210OpenAI ChatGPT\uFF08\u53EF\u9009\uFF09**
\u82E5\u8981\u96C6\u6210OpenAI\u7684ChatGPT\uFF0C\u60A8\u9700\u8981\u5728\`docker-compose.yml\`\u4E2D\u505A\u4EE5\u4E0B\u8C03\u6574\uFF1A
- \u66F4\u6539\`DEFAULT_AI_SERVICE\`\u4E3A\`openai\`\u3002
- \u6DFB\u52A0\`OPENAI_API_KEY\`\u73AF\u5883\u53D8\u91CF\uFF0C\u5E76\u8BBE\u7F6E\u4E3A\u60A8\u7684OpenAI API Key\u3002
- \u4E4B\u540E\uFF0C\u91CD\u542FDocker Compose\u670D\u52A1\u4EE5\u5E94\u7528\u66F4\u6539\u3002

\`\`\`yaml
  higress:
    ...
    environment:
      - CONFIG_TEMPLATE=ai-proxy
      - DEFAULT_AI_SERVICE=openai
      - OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    ...
\`\`\`
\u901A\u8FC7\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F\u670D\u52A1\uFF1A
\`\`\`shell
docker compose -p higress-ai down
docker compose -p higress-ai up -d
\`\`\`

### **\u603B\u7ED3**
\u901A\u8FC7\u4EE5\u4E0A\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6210\u529F\u5730\u4F7F\u7528Higress\u4F5C\u4E3A\u5E73\u53F0\u96C6\u6210LLM\uFF0C\u4E0D\u8BBA\u662F\u901A\u4E49\u5343\u95EE\u8FD8\u662FOpenAI\u7684ChatGPT\uFF0C\u4ECE\u800C\u521B\u5EFA\u4E00\u4E2A\u529F\u80FD\u5F3A\u5927\u7684\u79C1\u4EBAGPT\u52A9\u7406\u3002\u8BF7\u786E\u4FDD\u9075\u5FAA\u6BCF\u4E00\u6B65\u7684\u6307\u793A\uFF0C\u5E76\u9002\u5F53\u8C03\u6574\u4EE5\u9002\u5E94\u60A8\u7684\u5177\u4F53\u9700\u6C42\u548C\u73AF\u5883\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u4F7F\u7528 Higress + NextChat \u5FEB\u901F\u642D\u5EFA\u79C1\u4EBAGPT\u52A9\u7406 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16725)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return s},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u6B65\u9AA4\u8BE6\u89E3",text:"\u6B65\u9AA4\u8BE6\u89E3\uFF1A"},{depth:4,slug:"1-\u51C6\u5907\u5DE5\u4F5C",text:"1. \u51C6\u5907\u5DE5\u4F5C"},{depth:4,slug:"2-\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6",text:"2. \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6"},{depth:4,slug:"3-\u542F\u52A8\u670D\u52A1",text:"3. \u542F\u52A8\u670D\u52A1"},{depth:4,slug:"4-\u8BBF\u95EE\u4E0E\u914D\u7F6E",text:"4. \u8BBF\u95EE\u4E0E\u914D\u7F6E"},{depth:4,slug:"\u96C6\u6210openai-chatgpt\u53EF\u9009",text:"\u96C6\u6210OpenAI ChatGPT\uFF08\u53EF\u9009\uFF09"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=d((f,u,F)=>{const{layout:x,...p}=n;return p.file=a,p.url=t,r`${E()}${v(s)}`})});export{e as Content,g as __tla,i as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,o as rawContent,t as url};
