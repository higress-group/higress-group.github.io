import{c,__tla as p}from"./astro-component.B3fYMMDi.js";import{r as l,m as u,u as m,__tla as h}from"./constant.B9AWHwfy.js";import{__tla as v}from"./astro/assets-service.DmDXK_Mj.js";let e,i,s,a,n,r,d,y=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">ai-quota</code> \u63D2\u4EF6\u5B9E\u73B0\u7ED9\u7279\u5B9A consumer \u6839\u636E\u5206\u914D\u56FA\u5B9A\u7684 quota \u8FDB\u884C quota \u7B56\u7565\u9650\u6D41\uFF0C\u540C\u65F6\u652F\u6301 quota \u7BA1\u7406\u80FD\u529B\uFF0C\u5305\u62EC\u67E5\u8BE2 quota \u3001\u5237\u65B0 quota\u3001\u589E\u51CF quota\u3002</p>
<p><code dir="auto">ai-quota</code> \u63D2\u4EF6\u9700\u8981\u914D\u5408 \u8BA4\u8BC1\u63D2\u4EF6\u6BD4\u5982 <code dir="auto">key-auth</code>\u3001<code dir="auto">jwt-auth</code> \u7B49\u63D2\u4EF6\u83B7\u53D6\u8BA4\u8BC1\u8EAB\u4EFD\u7684 consumer \u540D\u79F0\uFF0C\u540C\u65F6\u9700\u8981\u914D\u5408 <code dir="auto">ai-statistics</code> \u63D2\u4EF6\u83B7\u53D6 AI Token \u7EDF\u8BA1\u4FE1\u606F\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">750</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">redis_key_prefix</code></td><td>string</td><td>\u9009\u586B</td><td>chat_quota:</td><td>qutoa redis key \u524D\u7F00</td></tr><tr><td><code dir="auto">admin_consumer</code></td><td>string</td><td>\u5FC5\u586B</td><td></td><td>\u7BA1\u7406 quota \u7BA1\u7406\u8EAB\u4EFD\u7684 consumer \u540D\u79F0</td></tr><tr><td><code dir="auto">admin_path</code></td><td>string</td><td>\u9009\u586B</td><td>/quota</td><td>\u7BA1\u7406 quota \u8BF7\u6C42 path \u524D\u7F00</td></tr><tr><td><code dir="auto">redis</code></td><td>object</td><td>\u662F</td><td></td><td>redis\u76F8\u5173\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">redis</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>service_name</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</td></tr><tr><td>service_port</td><td>int</td><td>\u5426</td><td>\u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379</td><td>\u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>username</td><td>string</td><td>\u5426</td><td>-</td><td>redis\u7528\u6237\u540D</td></tr><tr><td>password</td><td>string</td><td>\u5426</td><td>-</td><td>redis\u5BC6\u7801</td></tr><tr><td>timeout</td><td>int</td><td>\u5426</td><td>1000</td><td>redis\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis_key_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat_quota:"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/quota</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis-service.default.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis_key_prefix: &#x22;chat_quota:&#x22;\x7Fadmin_consumer: consumer3\x7Fadmin_path: /quota\x7Fredis:\x7F  service_name: redis-service.default.svc.cluster.local\x7F  service_port: 6379\x7F  timeout: 2000"><div></div></button></div></figure></div>
<h3 id="\u5237\u65B0-quota">\u5237\u65B0 quota</h3>
<p>\u5982\u679C\u5F53\u524D\u8BF7\u6C42 url \u7684\u540E\u7F00\u7B26\u5408 admin_path\uFF0C\u4F8B\u5982\u63D2\u4EF6\u5728 example.com/v1/chat/completions \u8FD9\u4E2A\u8DEF\u7531\u4E0A\u751F\u6548\uFF0C\u90A3\u4E48\u66F4\u65B0 quota \u53EF\u4EE5\u901A\u8FC7</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://example.com/v1/chat/completions/quota/refresh</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: Bearer credential3"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"consumer=consumer1&#x26;quota=10000"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl https://example.com/v1/chat/completions/quota/refresh -H &#x22;Authorization: Bearer credential3&#x22; -d &#x22;consumer=consumer1&#x26;quota=10000&#x22;"><div></div></button></div></figure></div>
<p>Redis \u4E2D key \u4E3A chat_quota:consumer1
 \u7684\u503C\u5C31\u4F1A\u88AB\u5237\u65B0\u4E3A 10000</p>
<h3 id="\u67E5\u8BE2-quota">\u67E5\u8BE2 quota</h3>
<p>\u67E5\u8BE2\u7279\u5B9A\u7528\u6237\u7684 quota \u53EF\u4EE5\u901A\u8FC7</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://example.com/v1/chat/completions/quota?consumer=consumer1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: Bearer credential3"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl https://example.com/v1/chat/completions/quota?consumer=consumer1 -H &#x22;Authorization: Bearer credential3&#x22;"><div></div></button></div></figure></div>
<p>\u5C06\u8FD4\u56DE\uFF1A {\u201Cquota\u201D: 10000, \u201Cconsumer\u201D: \u201Cconsumer1\u201D}</p>
<h3 id="\u589E\u51CF-quota">\u589E\u51CF quota</h3>
<p>\u589E\u51CF\u7279\u5B9A\u7528\u6237\u7684 quota \u53EF\u4EE5\u901A\u8FC7</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://example.com/v1/chat/completions/quota/delta</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"consumer=consumer1&#x26;value=100"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: Bearer credential3"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl https://example.com/v1/chat/completions/quota/delta -d &#x22;consumer=consumer1&#x26;value=100&#x22; -H &#x22;Authorization: Bearer credential3&#x22;"><div></div></button></div></figure></div>
<p>\u8FD9\u6837 Redis \u4E2D Key \u4E3A chat_quota:consumer1
 \u7684\u503C\u5C31\u4F1A\u589E\u52A0100\uFF0C\u53EF\u4EE5\u652F\u6301\u8D1F\u6570\uFF0C\u5219\u51CF\u53BB\u5BF9\u5E94\u503C\u3002</p>
<h3 id="\u914D\u7F6E\u6839\u636E\u6A21\u578B\u53C2\u6570\u8DEF\u7531\u65F6\u5982\u4F55\u8BBF\u95EE">\u914D\u7F6E\u6839\u636E\u6A21\u578B\u53C2\u6570\u8DEF\u7531\u65F6\u5982\u4F55\u8BBF\u95EE</h3>
<p>\u5F53\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8BF7\u6C42 body \u4E2D\u7684 model \u53C2\u6570\u8DEF\u7531\u751F\u6548\u65F6\uFF0C\u6309\u4E0A\u8FF0\u65B9\u5F0F\u8BBF\u95EE quota API \u4F1A\u51FA\u73B0 404 \u7684\u60C5\u51B5\uFF0C\u56E0\u4E3A quota API \u5E76\u4E0D\u9075\u5FAA openai \u7684 body \u534F\u8BAE\uFF0C\u65E0\u6CD5\u63D0\u53D6\u51FA model \u53C2\u6570\u3002</p>
<p>\u6B64\u65F6\u82E5\u5E0C\u671B\u547D\u4E2D\u5339\u914D\u7279\u5B9A model \u53C2\u6570\u7684\u8DEF\u7531\uFF0C\u53EF\u4EE5\u901A\u8FC7\u9644\u52A0 <code dir="auto">x-higress-llm-model</code> \u8BF7\u6C42\u5934\u6765\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">### \u4EE5\u5237\u65B0 quota \u4E3A\u4F8B\uFF0C\u5176\u4ED6\u4E5F\u662F\u4E00\u6837</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://example.com/v1/chat/completions/quota/refresh</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'x-higress-llm-model: deepseek-r1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: Bearer credential3"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"consumer=consumer1&#x26;quota=10000"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl https://example.com/v1/chat/completions/quota/refresh -H &#x27;x-higress-llm-model: deepseek-r1&#x27; -H &#x22;Authorization: Bearer credential3&#x22; -d &#x22;consumer=consumer1&#x26;quota=10000&#x22;"><div></div></button></div></figure></div>
<p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u547D\u4E2D\u6A21\u578B\u53C2\u6570\u5339\u914D <code dir="auto">deepseek-r1</code> \u7684\u8DEF\u7531\uFF0C\u5F53\u7136\u8FD8\u9700\u8981\u6CE8\u610F\u8DEF\u7531\u672C\u8EAB\u7684 Method \u548C\u8DEF\u5F84\u5339\u914D\u89C4\u5219\uFF0C\u53EF\u4EE5\u5339\u914D\u5230 quota API</p>`,a={title:"AI \u914D\u989D\u7BA1\u7406",keywords:["AI\u7F51\u5173","AI\u914D\u989D"],description:"AI \u914D\u989D\u7BA1\u7406\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-consumer/ai-quota.md",d=void 0,r=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`ai-quota\` \u63D2\u4EF6\u5B9E\u73B0\u7ED9\u7279\u5B9A consumer \u6839\u636E\u5206\u914D\u56FA\u5B9A\u7684 quota \u8FDB\u884C quota \u7B56\u7565\u9650\u6D41\uFF0C\u540C\u65F6\u652F\u6301 quota \u7BA1\u7406\u80FD\u529B\uFF0C\u5305\u62EC\u67E5\u8BE2 quota \u3001\u5237\u65B0 quota\u3001\u589E\u51CF quota\u3002

\`ai-quota\` \u63D2\u4EF6\u9700\u8981\u914D\u5408 \u8BA4\u8BC1\u63D2\u4EF6\u6BD4\u5982 \`key-auth\`\u3001\`jwt-auth\` \u7B49\u63D2\u4EF6\u83B7\u53D6\u8BA4\u8BC1\u8EAB\u4EFD\u7684 consumer \u540D\u79F0\uFF0C\u540C\u65F6\u9700\u8981\u914D\u5408 \`ai-statistics\` \u63D2\u4EF6\u83B7\u53D6 AI Token \u7EDF\u8BA1\u4FE1\u606F\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`750\`

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0                 | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42                                 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                         |
|--------------------|-----------------|--------------------------------------| ---- |--------------------------------------------|
| \`redis_key_prefix\` | string          |  \u9009\u586B                                     |   chat_quota:   | qutoa redis key \u524D\u7F00                         |
| \`admin_consumer\`   | string          | \u5FC5\u586B                                   |      | \u7BA1\u7406 quota \u7BA1\u7406\u8EAB\u4EFD\u7684 consumer \u540D\u79F0                 |
| \`admin_path\`       | string          | \u9009\u586B                                   |   /quota   | \u7BA1\u7406 quota \u8BF7\u6C42 path \u524D\u7F00                        |
| \`redis\`            | object          | \u662F                                    |      | redis\u76F8\u5173\u914D\u7F6E                                  |

\`redis\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879       | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C                                                     | \u8BF4\u660E                        |
| ------------ | ------ | ---- | ---------------------------------------------------------- | --------------------------- |
| service_name | string | \u5FC5\u586B | -                                                          | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local     |
| service_port | int    | \u5426   | \u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379 | \u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3     |
| username     | string | \u5426   | -                                                          | redis\u7528\u6237\u540D                 |
| password     | string | \u5426   | -                                                          | redis\u5BC6\u7801                   |
| timeout      | int    | \u5426   | 1000                                                       | redis\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |



## \u914D\u7F6E\u793A\u4F8B

### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41
\`\`\`yaml
redis_key_prefix: "chat_quota:"
admin_consumer: consumer3
admin_path: /quota
redis:
  service_name: redis-service.default.svc.cluster.local
  service_port: 6379
  timeout: 2000
\`\`\`


###  \u5237\u65B0 quota

\u5982\u679C\u5F53\u524D\u8BF7\u6C42 url \u7684\u540E\u7F00\u7B26\u5408 admin_path\uFF0C\u4F8B\u5982\u63D2\u4EF6\u5728 example.com/v1/chat/completions \u8FD9\u4E2A\u8DEF\u7531\u4E0A\u751F\u6548\uFF0C\u90A3\u4E48\u66F4\u65B0 quota \u53EF\u4EE5\u901A\u8FC7

\`\`\`bash
curl https://example.com/v1/chat/completions/quota/refresh -H "Authorization: Bearer credential3" -d "consumer=consumer1&quota=10000"
\`\`\`

Redis \u4E2D key \u4E3A chat_quota:consumer1 \u7684\u503C\u5C31\u4F1A\u88AB\u5237\u65B0\u4E3A 10000


### \u67E5\u8BE2 quota

\u67E5\u8BE2\u7279\u5B9A\u7528\u6237\u7684 quota \u53EF\u4EE5\u901A\u8FC7 

\`\`\`bash
curl https://example.com/v1/chat/completions/quota?consumer=consumer1 -H "Authorization: Bearer credential3"
\`\`\`

\u5C06\u8FD4\u56DE\uFF1A {"quota": 10000, "consumer": "consumer1"}

### \u589E\u51CF quota 

\u589E\u51CF\u7279\u5B9A\u7528\u6237\u7684 quota \u53EF\u4EE5\u901A\u8FC7 

\`\`\`bash
curl https://example.com/v1/chat/completions/quota/delta -d "consumer=consumer1&value=100" -H "Authorization: Bearer credential3"
\`\`\`

\u8FD9\u6837 Redis \u4E2D Key \u4E3A chat_quota:consumer1 \u7684\u503C\u5C31\u4F1A\u589E\u52A0100\uFF0C\u53EF\u4EE5\u652F\u6301\u8D1F\u6570\uFF0C\u5219\u51CF\u53BB\u5BF9\u5E94\u503C\u3002

### \u914D\u7F6E\u6839\u636E\u6A21\u578B\u53C2\u6570\u8DEF\u7531\u65F6\u5982\u4F55\u8BBF\u95EE

\u5F53\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8BF7\u6C42 body \u4E2D\u7684 model \u53C2\u6570\u8DEF\u7531\u751F\u6548\u65F6\uFF0C\u6309\u4E0A\u8FF0\u65B9\u5F0F\u8BBF\u95EE quota API \u4F1A\u51FA\u73B0 404 \u7684\u60C5\u51B5\uFF0C\u56E0\u4E3A quota API \u5E76\u4E0D\u9075\u5FAA openai \u7684 body \u534F\u8BAE\uFF0C\u65E0\u6CD5\u63D0\u53D6\u51FA model \u53C2\u6570\u3002

\u6B64\u65F6\u82E5\u5E0C\u671B\u547D\u4E2D\u5339\u914D\u7279\u5B9A model \u53C2\u6570\u7684\u8DEF\u7531\uFF0C\u53EF\u4EE5\u901A\u8FC7\u9644\u52A0 \`x-higress-llm-model\` \u8BF7\u6C42\u5934\u6765\u5B9E\u73B0\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
### \u4EE5\u5237\u65B0 quota \u4E3A\u4F8B\uFF0C\u5176\u4ED6\u4E5F\u662F\u4E00\u6837
curl https://example.com/v1/chat/completions/quota/refresh -H 'x-higress-llm-model: deepseek-r1' -H "Authorization: Bearer credential3" -d "consumer=consumer1&quota=10000" 
\`\`\`

\u8FD9\u6837\u5C31\u53EF\u4EE5\u547D\u4E2D\u6A21\u578B\u53C2\u6570\u5339\u914D \`deepseek-r1\` \u7684\u8DEF\u7531\uFF0C\u5F53\u7136\u8FD8\u9700\u8981\u6CE8\u610F\u8DEF\u7531\u672C\u8EAB\u7684 Method \u548C\u8DEF\u5F84\u5339\u914D\u89C4\u5219\uFF0C\u53EF\u4EE5\u5339\u914D\u5230 quota API
`},i=function(){return t},n=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u5237\u65B0-quota",text:"\u5237\u65B0 quota"},{depth:3,slug:"\u67E5\u8BE2-quota",text:"\u67E5\u8BE2 quota"},{depth:3,slug:"\u589E\u51CF-quota",text:"\u589E\u51CF quota"},{depth:3,slug:"\u914D\u7F6E\u6839\u636E\u6A21\u578B\u53C2\u6570\u8DEF\u7531\u65F6\u5982\u4F55\u8BBF\u95EE",text:"\u914D\u7F6E\u6839\u636E\u6A21\u578B\u53C2\u6570\u8DEF\u7531\u65F6\u5982\u4F55\u8BBF\u95EE"}]},e=c((E,q,x)=>{const{layout:_,...o}=a;return o.file=s,o.url=d,l`${u()}${m(t)}`})});export{e as Content,y as __tla,i as compiledContent,e as default,s as file,a as frontmatter,n as getHeadings,r as rawContent,d as url};
