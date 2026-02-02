import{c,__tla as o}from"./astro-component.YcfuVWta.js";import{r as d,m,u as g,__tla as u}from"./constant.Cx6UCuye.js";import{__tla as h}from"./astro/assets-service.r1ocst81.js";let i,n,t,a,p,r,s,C=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<p>9\u67085\u65E5\uFF0CAnthropic \u5BA3\u5E03\u505C\u6B62\u5411\u4E2D\u56FD\u8D44\u672C\u63A7\u80A1\uFF08\u8D8550%\u80A1\u6743\uFF09\u7684\u4F01\u4E1A\u53CA\u5176\u5B50\u516C\u53F8\u63D0\u4F9B Claude \u670D\u52A1\u3002\u6B64\u524D\uFF0CClaude \u7CFB\u5217\u6A21\u578B\u56E0\u5176\u7F16\u7A0B\u80FD\u529B\u51FA\u4F17\u53D7\u5230\u5F00\u53D1\u8005\u7684\u597D\u8BC4\u548C\u5E7F\u6CDB\u5E94\u7528\u3002</p>
<p>\u4E3A\u6B64\uFF0C\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF08Higress \u4F01\u4E1A\u7248\uFF09\u7B2C\u4E00\u65F6\u95F4\u63D0\u4F9B\u4E86\u8FC1\u79FB\u65B9\u6848\u3002</p>
<p>\u73B0\u5728\uFF0C\u5F00\u53D1\u8005\u4F7F\u7528\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF0C<strong>\u53EA\u9700\u4E09\u6B65</strong>\u5C31\u5C06 Claude Code \u4F7F\u7528\u7684\u6A21\u578B\u4ECE Anthropic \u7684\u5B98\u65B9\u6A21\u578B<strong>\u8FC1\u79FB\u5230\u4EFB\u610F \u6A21\u578B\u670D\u52A1</strong>\uFF0C\u4F8B\u5982\u963F\u91CC\u4E91\u767E\u70BC Qwen3\uFF0C\u667A\u8C31 GLM3.5\uFF0C\u6708\u4E4B\u6697\u9762 Kimi2 \u7B49\u7B49\u56FD\u4EA7\u6A21\u578B\u3002</p>
<p>\u57FA\u4E8E\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u901A\u8FC7\u4E00\u4E2A\u7EDF\u4E00\u7684\u5165\u53E3\u5C4F\u853D\u5404\u5BB6\u6A21\u578B\u534F\u8BAE\u5DEE\u5F02\uFF0C\u4E14<strong>\u907F\u514D\u88AB\u7279\u5B9A\u4F9B\u5E94\u5546\u9501\u5B9A</strong>\u3002\u540C\u65F6\u5BF9\u63A5\u591A\u4E2A\u4F9B\u5E94\u5546\uFF0C\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u4F9B\u5E94\u5546 A \u5931\u8D25\u540E\u515C\u5E95\u5230\u4F9B\u5E94\u5546 B \u7684<a href="https://mp.weixin.qq.com/s/WmQcGITBfoUG62gfV5rUvA" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u9AD8\u53EF\u7528\u80FD\u529B</a>\u3002</p>
<h2 id="\u8FC1\u79FB\u6B65\u9AA4">\u8FC1\u79FB\u6B65\u9AA4</h2>
<h3 id="\u7B2C\u4E00\u6B65\u5728\u963F\u91CC\u4E91-ai-\u7F51\u5173\u4E0A\u914D\u7F6E-llm-\u4F9B\u5E94\u5546\u7684-api-key">\u7B2C\u4E00\u6B65\uFF1A\u5728\u963F\u91CC\u4E91 AI \u7F51\u5173\u4E0A\u914D\u7F6E LLM \u4F9B\u5E94\u5546\u7684 API Key</h3>
<p>\u963F\u91CC\u4E91 AI \u7F51\u5173\u652F\u6301\u5BF9\u63A5\u591A\u8FBE 20 \u4E2A\u4E0D\u540C\u7684 LLM \u4F9B\u5E94\u5546\uFF0C\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u4F9B\u5E94\u5546\uFF08\u4E5F\u53EF\u4EE5\u5BF9\u63A5\u5728\u963F\u91CC\u4E91\u4E0A\u81EA\u5EFA\u7684\u5F00\u6E90\u6A21\u578B\u670D\u52A1\uFF09\uFF0C\u586B\u5199 API Key\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01vzScPR23yRsJqQKHT_!!6000000007324-2-tps-1902-736.png" alt="" referrerpolicy="no-referrer"></p>
<p>API Key \u901A\u8FC7\u5F15\u7528\u51ED\u636E\u65B9\u5F0F\u53EF\u4EE5\u5B89\u5168\u5B58\u50A8\u5728\u7528\u6237\u81EA\u5DF1\u7684\u963F\u91CC\u4E91 KMS \u5B9E\u4F8B\u4E2D\uFF0C\u907F\u514D API Key \u6CC4\u6F0F\u98CE\u9669\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01lRKrmV1dPTce9nDFN_!!6000000003728-2-tps-3016-1614.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u8FD9\u91CC\u4E3A\u4E86\u6F14\u793A\u65B9\u4FBF\u521B\u5EFA\u4E86\u4E09\u4E2A\u670D\u52A1\uFF0C\u5206\u522B\u5BF9\u5E94\u963F\u91CC\u4E91\u767E\u70BC\uFF0C\u6708\u4E4B\u6697\u9762\u548C\u667A\u8C31 GLM\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN011KXMAr2214uy2Vt90_!!6000000007059-2-tps-2918-544.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u7B2C\u4E8C\u6B65\u521B\u5EFA-model-api\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\u5230\u4E0D\u540C\u4F9B\u5E94\u5546">\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA Model API\uFF0C\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\u5230\u4E0D\u540C\u4F9B\u5E94\u5546</h3>
<p>\u670D\u52A1\u6A21\u578B\u9009\u62E9<strong>\u591A\u6A21\u578B\u670D\u52A1\uFF08\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\uFF09</strong>\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6839\u636E\u8BF7\u6C42\u4E2D\u7684\u4E0D\u540C\u6A21\u578B\u540D\u79F0\uFF0C\u8DEF\u7531\u5230\u4E0D\u540C\u6A21\u578B\uFF1A</p>
<ul>
<li><code dir="auto">kimi-k2-</code>\u5F00\u5934\u7684\u6A21\u578B\u8DEF\u7531\u5230\u6708\u4E4B\u6697\u9762\uFF08\u670D\u52A1\u540D\uFF1Amoonshot\uFF09</li>
<li><code dir="auto">glm-</code>\u5F00\u5934\u7684\u6A21\u578B\u8DEF\u7531\u5230\u667A\u8C31GLM\uFF08\u670D\u52A1\u540D\uFF1Aglm\uFF09</li>
<li><code dir="auto">qwen</code>\u5F00\u5934\u5230\u6A21\u578B\u8DEF\u7531\u5230\u963F\u91CC\u4E91\u767E\u70BC\uFF08\u670D\u52A1\u540D\uFF1A bailian\uFF09</li>
</ul>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01FKTc4321NESb77GG4_!!6000000006972-2-tps-3022-1610.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u914D\u7F6E\u597D\u540E\u53EF\u4EE5\u7ACB\u5373\u8FDB\u884C\u8C03\u8BD5\uFF0C\u6211\u4EEC\u7528\u201C\u4F60\u662F\u8C01\u201D\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A</p>
<ul>
<li>\u5F53\u8BF7\u6C42\u6A21\u578B\u540D\u79F0\u6307\u5B9A\u4E3A kimi-k2-0905-preview \u65F6\uFF0C\u6B63\u786E\u8DEF\u7531\u5230\u4E86\u6708\u4E4B\u6697\u9762\u7684\u670D\u52A1</li>
</ul>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01mwbUZ624zC8Uolwbe_!!6000000007461-2-tps-3020-1282.png" alt="" referrerpolicy="no-referrer"></p>
<ul>
<li>\u5F53\u8BF7\u6C42\u6A21\u578B\u540D\u79F0\u6307\u5B9A\u4E3A glm-4.5 \u65F6\uFF0C\u6B63\u786E\u8DEF\u7531\u5230\u4E86\u667A\u8C31 GLM \u7684\u670D\u52A1</li>
</ul>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01o47bLA1umEm0AZcOb_!!6000000006079-2-tps-3022-1610.png" alt="" referrerpolicy="no-referrer"></p>
<ul>
<li>\u5F53\u8BF7\u6C42\u6A21\u578B\u540D\u79F0\u6307\u5B9A\u4E3A qwen3-max-preview \u65F6\uFF0C\u6B63\u786E\u8DEF\u7531\u5230\u4E86\u963F\u91CC\u4E91\u767E\u70BC\u7684\u670D\u52A1</li>
</ul>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01gXffiC1GepjwYlhbt_!!6000000000648-2-tps-3022-1332.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u7B2C\u4E09\u6B65\u542F\u52A8-claude-code\u5E76\u4F7F\u7528\u6307\u5B9A\u6A21\u578B">\u7B2C\u4E09\u6B65\uFF1A\u542F\u52A8 Claude Code\uFF0C\u5E76\u4F7F\u7528\u6307\u5B9A\u6A21\u578B</h3>
<p>\u5728 Model API \u4E0A\u53EF\u4EE5\u770B\u5230\u5B9E\u4F8B\u8BBF\u95EE\u5165\u53E3\uFF0C\u53EF\u4EE5\u590D\u5236\u4E0B\u6765\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01iGzG4H21a3Y94NBK0_!!6000000007000-2-tps-2544-258.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728\u542F\u52A8 claude \u4E4B\u524D \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> ANTHROPIC_BASE_URL</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">http://env-xxxxxx-cn-hangzhou.alicloudapi.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u53EF\u4EE5\u4E3A\u8FD9\u4E2A Model API \u5F00\u542F\u8BA4\u8BC1\uFF0C\u914D\u7F6E\u72EC\u7ACB\u7684 API Key\uFF0C\u8FD9\u91CC\u586B\u5199\u5BF9\u5E94\u7684 API Key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5982\u679C\u6CA1\u6709\u5F00\u542F\u8BA4\u8BC1\uFF0C\u8FD9\u91CC\u4E5F\u9700\u8981\u586B\u4E00\u4E2A\u4EFB\u610F\u503C\uFF0C\u4E0D\u80FD\u586B\u7A7A\uFF0C\u5426\u5219\u65E0\u6CD5\u542F\u52A8 claude code</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> ANTHROPIC_AUTH_TOKEN</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">xxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export ANTHROPIC_BASE_URL=http://env-xxxxxx-cn-hangzhou.alicloudapi.com\x7Fexport ANTHROPIC_AUTH_TOKEN=xxxx"><div></div></button></div></figure></div>
<p>\u7136\u540E\u6307\u5B9A\u6A21\u578B\u542F\u52A8 claude code \u5373\u53EF\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4F7F\u7528\u963F\u91CC\u4E91 qwen3 \u6A21\u578B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">claude</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--model</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">qwen3-coder-plus</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4F7F\u7528 kimi-k2 \u6A21\u578B\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">claude</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--model</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kimi-k2-0905-preview</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4F7F\u7528 glm \u6A21\u578B\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">claude</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--model</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">glm-3.5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="claude --model qwen3-coder-plus\x7Fclaude --model kimi-k2-0905-preview\x7Fclaude --model glm-3.5"><div></div></button></div></figure></div>
<h2 id="\u8FC1\u79FB\u540E\u6548\u679C\u5BF9\u6BD4">\u8FC1\u79FB\u540E\u6548\u679C\u5BF9\u6BD4</h2>
<p>\u5B8C\u6210\u8FC1\u79FB\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6765\u5BF9\u6BD4\u4E00\u4E0B Qwen3 \u548C\u539F\u751F Claude Sonnet4 \u7684\u6A21\u578B\u6548\u679C\u3002</p>
<p>\u8FD9\u91CC\u8BBE\u8BA1\u4E86\u4E00\u4E2A\u57FA\u4E8E\u4EE3\u7801\u6587\u6863\u7ED3\u5408\u4E92\u8054\u7F51\u641C\u7D22\uFF0C\u57FA\u4E8E three.js \u6765\u5B9E\u73B0\u4E00\u4E2A\u949F\u6446\u6CE2\u6548\u5E94\u7684\u52A8\u753B\u3002\u53EF\u4EE5\u7ED3\u5408 MCP \u5DE5\u5177\u6BD4\u8F83\u5168\u9762\u5730\u6D4B\u8BD5\u5207\u6362\u540E Claude Code \u7684\u529F\u80FD\u662F\u5426\u6B63\u5E38\u4F7F\u7528\uFF0C\u540C\u65F6\u4EFB\u52A1\u53C8\u5177\u5907\u4E00\u5B9A\u96BE\u5EA6\uFF0C\u53EF\u4EE5\u540C\u65F6\u8003\u91CF\u6A21\u578B\u7684\u591A\u6B65\u5DE5\u5177\u8C03\u7528\u548C\u5B9E\u73B0\u5B8C\u6574\u9879\u76EE\u7684\u4EE3\u7801\u80FD\u529B\u3002</p>
<p>\u8FD9\u91CC\u4F7F\u7528 Context7 \u67E5\u8BE2 three.js \u7684\u4EE3\u7801\u6587\u6863\uFF0C\u7528 BraveSearch \u641C\u7D22\u7269\u7406\u516C\u5F0F\u7B49\u76F8\u5173\u8D44\u6599\uFF0C\u518D\u7ED3\u5408 Firecrawl \u5C06 Context7 \u548C BraveSearch \u67E5\u8BE2\u5230\u7684\u8D44\u6599\u4E2D\u7684 URL \u8FDE\u63A5\u89E3\u6790\u6210\u5B8C\u6574\u6587\u672C\uFF0C\u4ECE\u800C\u63D0\u4F9B\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002</p>
<p>\u8FD9\u91CC\u4F7F\u7528 qwen3-coder-plus \u6A21\u578B\u542F\u52A8 Claude Code\uFF0C\u4F7F\u7528\u4E0B\u56FE\u4E2D\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u4EE5\u770B\u5230\u5404\u4E2A\u5DE5\u5177\u53EF\u4EE5\u88AB\u6B63\u786E\u8C03\u7528\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01SbcpUQ1eNTVViZZBJ_!!6000000003859-2-tps-1220-970.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u6700\u540E\u6211\u4EEC\u6765\u5BF9\u6BD4 Qwen3 \u548C Claude Sonnet4 \u7684\u6548\u679C\u5DEE\u5F02\uFF0CQwen3 \u7684\u6548\u679C\u770B\u4E0A\u53BB\u7565\u4F18\u4E8E Claude Sonnet4\uFF0C\u800C\u4E14 Qwen3\u662F\u4E00\u6B21\u6210\u529F\u7684\uFF0CClaude Sonnet4 \u7B2C\u4E00\u6B21\u751F\u6210\u6709\u5305\u5F15\u7528\u9519\u8BEF\uFF0C\u63D0\u793A\u540E\u624D\u4FEE\u590D\u3002\u751F\u6210\u7684\u4EE3\u7801\u5728\u8FD9\u91CC\uFF1A
<a href="https://gist.github.com/johnlanni/4e6f84eb1fb676c45a6ac14b69ca2db6" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://gist.github.com/johnlanni/4e6f84eb1fb676c45a6ac14b69ca2db6</a></p>
<h3 id="qwen3">Qwen3</h3>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01FMO6Vi1ywY9dfflQm_!!6000000006643-1-tps-982-554.gif" alt="" referrerpolicy="no-referrer"></p>
<h3 id="claude-sonnet-4">Claude Sonnet 4</h3>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01hfptAm1wFNaehtrUY_!!6000000006278-1-tps-982-554.gif" alt="" referrerpolicy="no-referrer"></p>
<h2 id=""></h2>`,a={title:"Claude Code\u7528\u4E0D\u4E86? \u4F7F\u7528AI\u7F51\u5173\u8FC1\u79FB\u81F3\u4EFB\u610F\u6A21\u578B",description:"Claude Code\u7528\u4E0D\u4E86? \u4F7F\u7528AI\u7F51\u5173\u8FC1\u79FB\u81F3\u4EFB\u610F\u6A21\u578B",date:"2025-09-10",category:"article",keywords:["Higress"],authors:"CH3CHO"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_gdmwwnrt9pkd7q12.md",s=void 0,r=function(){return`
9\u67085\u65E5\uFF0CAnthropic \u5BA3\u5E03\u505C\u6B62\u5411\u4E2D\u56FD\u8D44\u672C\u63A7\u80A1\uFF08\u8D8550%\u80A1\u6743\uFF09\u7684\u4F01\u4E1A\u53CA\u5176\u5B50\u516C\u53F8\u63D0\u4F9B Claude \u670D\u52A1\u3002\u6B64\u524D\uFF0CClaude \u7CFB\u5217\u6A21\u578B\u56E0\u5176\u7F16\u7A0B\u80FD\u529B\u51FA\u4F17\u53D7\u5230\u5F00\u53D1\u8005\u7684\u597D\u8BC4\u548C\u5E7F\u6CDB\u5E94\u7528\u3002

\u4E3A\u6B64\uFF0C\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF08Higress \u4F01\u4E1A\u7248\uFF09\u7B2C\u4E00\u65F6\u95F4\u63D0\u4F9B\u4E86\u8FC1\u79FB\u65B9\u6848\u3002

\u73B0\u5728\uFF0C\u5F00\u53D1\u8005\u4F7F\u7528\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF0C**\u53EA\u9700\u4E09\u6B65**\u5C31\u5C06 Claude Code \u4F7F\u7528\u7684\u6A21\u578B\u4ECE Anthropic \u7684\u5B98\u65B9\u6A21\u578B**\u8FC1\u79FB\u5230\u4EFB\u610F \u6A21\u578B\u670D\u52A1**\uFF0C\u4F8B\u5982\u963F\u91CC\u4E91\u767E\u70BC Qwen3\uFF0C\u667A\u8C31 GLM3.5\uFF0C\u6708\u4E4B\u6697\u9762 Kimi2 \u7B49\u7B49\u56FD\u4EA7\u6A21\u578B\u3002

\u57FA\u4E8E\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u901A\u8FC7\u4E00\u4E2A\u7EDF\u4E00\u7684\u5165\u53E3\u5C4F\u853D\u5404\u5BB6\u6A21\u578B\u534F\u8BAE\u5DEE\u5F02\uFF0C\u4E14**\u907F\u514D\u88AB\u7279\u5B9A\u4F9B\u5E94\u5546\u9501\u5B9A**\u3002\u540C\u65F6\u5BF9\u63A5\u591A\u4E2A\u4F9B\u5E94\u5546\uFF0C\u8FD8\u53EF\u4EE5\u5B9E\u73B0\u4F9B\u5E94\u5546 A \u5931\u8D25\u540E\u515C\u5E95\u5230\u4F9B\u5E94\u5546 B \u7684[\u9AD8\u53EF\u7528\u80FD\u529B](https://mp.weixin.qq.com/s/WmQcGITBfoUG62gfV5rUvA)\u3002

## \u8FC1\u79FB\u6B65\u9AA4
### \u7B2C\u4E00\u6B65\uFF1A\u5728\u963F\u91CC\u4E91 AI \u7F51\u5173\u4E0A\u914D\u7F6E LLM \u4F9B\u5E94\u5546\u7684 API Key
\u963F\u91CC\u4E91 AI \u7F51\u5173\u652F\u6301\u5BF9\u63A5\u591A\u8FBE 20 \u4E2A\u4E0D\u540C\u7684 LLM \u4F9B\u5E94\u5546\uFF0C\u53EF\u4EE5\u9009\u62E9\u4EFB\u610F\u4F9B\u5E94\u5546\uFF08\u4E5F\u53EF\u4EE5\u5BF9\u63A5\u5728\u963F\u91CC\u4E91\u4E0A\u81EA\u5EFA\u7684\u5F00\u6E90\u6A21\u578B\u670D\u52A1\uFF09\uFF0C\u586B\u5199 API Key\uFF1A

![](https://img.alicdn.com/imgextra/i2/O1CN01vzScPR23yRsJqQKHT_!!6000000007324-2-tps-1902-736.png)

API Key \u901A\u8FC7\u5F15\u7528\u51ED\u636E\u65B9\u5F0F\u53EF\u4EE5\u5B89\u5168\u5B58\u50A8\u5728\u7528\u6237\u81EA\u5DF1\u7684\u963F\u91CC\u4E91 KMS \u5B9E\u4F8B\u4E2D\uFF0C\u907F\u514D API Key \u6CC4\u6F0F\u98CE\u9669\uFF1A

![](https://img.alicdn.com/imgextra/i1/O1CN01lRKrmV1dPTce9nDFN_!!6000000003728-2-tps-3016-1614.png)

\u8FD9\u91CC\u4E3A\u4E86\u6F14\u793A\u65B9\u4FBF\u521B\u5EFA\u4E86\u4E09\u4E2A\u670D\u52A1\uFF0C\u5206\u522B\u5BF9\u5E94\u963F\u91CC\u4E91\u767E\u70BC\uFF0C\u6708\u4E4B\u6697\u9762\u548C\u667A\u8C31 GLM\uFF1A

![](https://img.alicdn.com/imgextra/i4/O1CN011KXMAr2214uy2Vt90_!!6000000007059-2-tps-2918-544.png)

### \u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA Model API\uFF0C\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\u5230\u4E0D\u540C\u4F9B\u5E94\u5546
\u670D\u52A1\u6A21\u578B\u9009\u62E9**\u591A\u6A21\u578B\u670D\u52A1\uFF08\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\uFF09**\uFF0C\u8FD9\u6837\u53EF\u4EE5\u6839\u636E\u8BF7\u6C42\u4E2D\u7684\u4E0D\u540C\u6A21\u578B\u540D\u79F0\uFF0C\u8DEF\u7531\u5230\u4E0D\u540C\u6A21\u578B\uFF1A

+ \`kimi-k2-\`\u5F00\u5934\u7684\u6A21\u578B\u8DEF\u7531\u5230\u6708\u4E4B\u6697\u9762\uFF08\u670D\u52A1\u540D\uFF1Amoonshot\uFF09
+ \`glm-\`\u5F00\u5934\u7684\u6A21\u578B\u8DEF\u7531\u5230\u667A\u8C31GLM\uFF08\u670D\u52A1\u540D\uFF1Aglm\uFF09
+ \`qwen\`\u5F00\u5934\u5230\u6A21\u578B\u8DEF\u7531\u5230\u963F\u91CC\u4E91\u767E\u70BC\uFF08\u670D\u52A1\u540D\uFF1A bailian\uFF09

![](https://img.alicdn.com/imgextra/i4/O1CN01FKTc4321NESb77GG4_!!6000000006972-2-tps-3022-1610.png)

\u914D\u7F6E\u597D\u540E\u53EF\u4EE5\u7ACB\u5373\u8FDB\u884C\u8C03\u8BD5\uFF0C\u6211\u4EEC\u7528\u201C\u4F60\u662F\u8C01\u201D\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A

+ \u5F53\u8BF7\u6C42\u6A21\u578B\u540D\u79F0\u6307\u5B9A\u4E3A kimi-k2-0905-preview \u65F6\uFF0C\u6B63\u786E\u8DEF\u7531\u5230\u4E86\u6708\u4E4B\u6697\u9762\u7684\u670D\u52A1

![](https://img.alicdn.com/imgextra/i2/O1CN01mwbUZ624zC8Uolwbe_!!6000000007461-2-tps-3020-1282.png)

+ \u5F53\u8BF7\u6C42\u6A21\u578B\u540D\u79F0\u6307\u5B9A\u4E3A glm-4.5 \u65F6\uFF0C\u6B63\u786E\u8DEF\u7531\u5230\u4E86\u667A\u8C31 GLM \u7684\u670D\u52A1

![](https://img.alicdn.com/imgextra/i1/O1CN01o47bLA1umEm0AZcOb_!!6000000006079-2-tps-3022-1610.png)

+ \u5F53\u8BF7\u6C42\u6A21\u578B\u540D\u79F0\u6307\u5B9A\u4E3A qwen3-max-preview \u65F6\uFF0C\u6B63\u786E\u8DEF\u7531\u5230\u4E86\u963F\u91CC\u4E91\u767E\u70BC\u7684\u670D\u52A1

![](https://img.alicdn.com/imgextra/i3/O1CN01gXffiC1GepjwYlhbt_!!6000000000648-2-tps-3022-1332.png)

### \u7B2C\u4E09\u6B65\uFF1A\u542F\u52A8 Claude Code\uFF0C\u5E76\u4F7F\u7528\u6307\u5B9A\u6A21\u578B
\u5728 Model API \u4E0A\u53EF\u4EE5\u770B\u5230\u5B9E\u4F8B\u8BBF\u95EE\u5165\u53E3\uFF0C\u53EF\u4EE5\u590D\u5236\u4E0B\u6765\uFF1A

![](https://img.alicdn.com/imgextra/i4/O1CN01iGzG4H21a3Y94NBK0_!!6000000007000-2-tps-2544-258.png)

\u5728\u542F\u52A8 claude \u4E4B\u524D \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A

\`\`\`bash
export ANTHROPIC_BASE_URL=http://env-xxxxxx-cn-hangzhou.alicloudapi.com
# \u53EF\u4EE5\u4E3A\u8FD9\u4E2A Model API \u5F00\u542F\u8BA4\u8BC1\uFF0C\u914D\u7F6E\u72EC\u7ACB\u7684 API Key\uFF0C\u8FD9\u91CC\u586B\u5199\u5BF9\u5E94\u7684 API Key
# \u5982\u679C\u6CA1\u6709\u5F00\u542F\u8BA4\u8BC1\uFF0C\u8FD9\u91CC\u4E5F\u9700\u8981\u586B\u4E00\u4E2A\u4EFB\u610F\u503C\uFF0C\u4E0D\u80FD\u586B\u7A7A\uFF0C\u5426\u5219\u65E0\u6CD5\u542F\u52A8 claude code
export ANTHROPIC_AUTH_TOKEN=xxxx
\`\`\`

\u7136\u540E\u6307\u5B9A\u6A21\u578B\u542F\u52A8 claude code \u5373\u53EF\uFF1A

\`\`\`bash
# \u4F7F\u7528\u963F\u91CC\u4E91 qwen3 \u6A21\u578B
claude --model qwen3-coder-plus
# \u4F7F\u7528 kimi-k2 \u6A21\u578B\uFF1A
claude --model kimi-k2-0905-preview
# \u4F7F\u7528 glm \u6A21\u578B\uFF1A
claude --model glm-3.5
\`\`\`

## \u8FC1\u79FB\u540E\u6548\u679C\u5BF9\u6BD4
\u5B8C\u6210\u8FC1\u79FB\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6765\u5BF9\u6BD4\u4E00\u4E0B Qwen3 \u548C\u539F\u751F Claude Sonnet4 \u7684\u6A21\u578B\u6548\u679C\u3002

\u8FD9\u91CC\u8BBE\u8BA1\u4E86\u4E00\u4E2A\u57FA\u4E8E\u4EE3\u7801\u6587\u6863\u7ED3\u5408\u4E92\u8054\u7F51\u641C\u7D22\uFF0C\u57FA\u4E8E three.js \u6765\u5B9E\u73B0\u4E00\u4E2A\u949F\u6446\u6CE2\u6548\u5E94\u7684\u52A8\u753B\u3002\u53EF\u4EE5\u7ED3\u5408 MCP \u5DE5\u5177\u6BD4\u8F83\u5168\u9762\u5730\u6D4B\u8BD5\u5207\u6362\u540E Claude Code \u7684\u529F\u80FD\u662F\u5426\u6B63\u5E38\u4F7F\u7528\uFF0C\u540C\u65F6\u4EFB\u52A1\u53C8\u5177\u5907\u4E00\u5B9A\u96BE\u5EA6\uFF0C\u53EF\u4EE5\u540C\u65F6\u8003\u91CF\u6A21\u578B\u7684\u591A\u6B65\u5DE5\u5177\u8C03\u7528\u548C\u5B9E\u73B0\u5B8C\u6574\u9879\u76EE\u7684\u4EE3\u7801\u80FD\u529B\u3002

\u8FD9\u91CC\u4F7F\u7528 Context7 \u67E5\u8BE2 three.js \u7684\u4EE3\u7801\u6587\u6863\uFF0C\u7528 BraveSearch \u641C\u7D22\u7269\u7406\u516C\u5F0F\u7B49\u76F8\u5173\u8D44\u6599\uFF0C\u518D\u7ED3\u5408 Firecrawl \u5C06 Context7 \u548C BraveSearch \u67E5\u8BE2\u5230\u7684\u8D44\u6599\u4E2D\u7684 URL \u8FDE\u63A5\u89E3\u6790\u6210\u5B8C\u6574\u6587\u672C\uFF0C\u4ECE\u800C\u63D0\u4F9B\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002

\u8FD9\u91CC\u4F7F\u7528 qwen3-coder-plus \u6A21\u578B\u542F\u52A8 Claude Code\uFF0C\u4F7F\u7528\u4E0B\u56FE\u4E2D\u7684\u63D0\u793A\u8BCD\uFF0C\u53EF\u4EE5\u770B\u5230\u5404\u4E2A\u5DE5\u5177\u53EF\u4EE5\u88AB\u6B63\u786E\u8C03\u7528\uFF1A

![](https://img.alicdn.com/imgextra/i2/O1CN01SbcpUQ1eNTVViZZBJ_!!6000000003859-2-tps-1220-970.png)

\u6700\u540E\u6211\u4EEC\u6765\u5BF9\u6BD4 Qwen3 \u548C Claude Sonnet4 \u7684\u6548\u679C\u5DEE\u5F02\uFF0CQwen3 \u7684\u6548\u679C\u770B\u4E0A\u53BB\u7565\u4F18\u4E8E Claude Sonnet4\uFF0C\u800C\u4E14 Qwen3\u662F\u4E00\u6B21\u6210\u529F\u7684\uFF0CClaude Sonnet4 \u7B2C\u4E00\u6B21\u751F\u6210\u6709\u5305\u5F15\u7528\u9519\u8BEF\uFF0C\u63D0\u793A\u540E\u624D\u4FEE\u590D\u3002\u751F\u6210\u7684\u4EE3\u7801\u5728\u8FD9\u91CC\uFF1A
[https://gist.github.com/johnlanni/4e6f84eb1fb676c45a6ac14b69ca2db6](https://gist.github.com/johnlanni/4e6f84eb1fb676c45a6ac14b69ca2db6)

### Qwen3
![](https://img.alicdn.com/imgextra/i4/O1CN01FMO6Vi1ywY9dfflQm_!!6000000006643-1-tps-982-554.gif)

### Claude Sonnet 4
![](https://img.alicdn.com/imgextra/i3/O1CN01hfptAm1wFNaehtrUY_!!6000000006278-1-tps-982-554.gif)

## 

`},n=function(){return e},p=function(){return[{depth:2,slug:"\u8FC1\u79FB\u6B65\u9AA4",text:"\u8FC1\u79FB\u6B65\u9AA4"},{depth:3,slug:"\u7B2C\u4E00\u6B65\u5728\u963F\u91CC\u4E91-ai-\u7F51\u5173\u4E0A\u914D\u7F6E-llm-\u4F9B\u5E94\u5546\u7684-api-key",text:"\u7B2C\u4E00\u6B65\uFF1A\u5728\u963F\u91CC\u4E91 AI \u7F51\u5173\u4E0A\u914D\u7F6E LLM \u4F9B\u5E94\u5546\u7684 API Key"},{depth:3,slug:"\u7B2C\u4E8C\u6B65\u521B\u5EFA-model-api\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\u5230\u4E0D\u540C\u4F9B\u5E94\u5546",text:"\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA Model API\uFF0C\u6309\u6A21\u578B\u540D\u79F0\u8DEF\u7531\u5230\u4E0D\u540C\u4F9B\u5E94\u5546"},{depth:3,slug:"\u7B2C\u4E09\u6B65\u542F\u52A8-claude-code\u5E76\u4F7F\u7528\u6307\u5B9A\u6A21\u578B",text:"\u7B2C\u4E09\u6B65\uFF1A\u542F\u52A8 Claude Code\uFF0C\u5E76\u4F7F\u7528\u6307\u5B9A\u6A21\u578B"},{depth:2,slug:"\u8FC1\u79FB\u540E\u6548\u679C\u5BF9\u6BD4",text:"\u8FC1\u79FB\u540E\u6548\u679C\u5BF9\u6BD4"},{depth:3,slug:"qwen3",text:"Qwen3"},{depth:3,slug:"claude-sonnet-4",text:"Claude Sonnet 4"},{depth:2,slug:"",text:""}]},i=c((x,f,y)=>{const{layout:v,...l}=a;return l.file=t,l.url=s,d`${m()}${g(e)}`})});export{i as Content,C as __tla,n as compiledContent,i as default,t as file,a as frontmatter,p as getHeadings,r as rawContent,s as url};
