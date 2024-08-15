import{c,__tla as o}from"./astro-component.CD2fzakh.js";import{r,m as v,u as y,__tla as F}from"./constant.AV_Bn1q0.js";import{__tla as E}from"./astro/assets-service.Bk7KqR8o.js";let e,p,a,n,l,i,t,x=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Higress AI \u7F51\u5173\u6765\u7EDF\u4E00\u5904\u7406\u5E94\u7528\u903B\u8F91\u4E2D\u9700\u8981\u64CD\u63A7 Prompt \u7684\u5730\u65B9\uFF0C\u8BA9\u6240\u6709 LLM API \u6D41\u91CF\u90FD\u7ECF\u8FC7 Higress \u8FDB\u884C\u5904\u7406\uFF0C\u81EA\u52A8\u5B8C\u6210 Prompt \u7684\u7EDF\u4E00\u64CD\u63A7\u3002</p>
<h1 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h1>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">prepend</code></td><td>array of message object</td><td>optional</td><td>-</td><td>\u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5</td></tr><tr><td><code dir="auto">append</code></td><td>array of message object</td><td>optional</td><td>-</td><td>\u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5</td></tr></tbody></table>
<p>message object \u914D\u7F6E\u8BF4\u660E\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">role</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u89D2\u8272</td></tr><tr><td><code dir="auto">content</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6D88\u606F</td></tr></tbody></table>
<h1 id="\u793A\u4F8B">\u793A\u4F8B</h1>
<p>\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prepend:\x7F- role: system\x7F  content: &#x22;\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898&#x22;\x7Fappend:\x7F- role: user\x7F  content: &#x22;\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE&#x22;"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>`,n={title:"AI \u63D0\u793A\u8BCD\u4FEE\u9970",keywords:["higress","ai"],description:"AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-prompt-decorator.md",t=void 0,i=function(){return`
## \u529F\u80FD\u8BF4\u660E

AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Higress AI \u7F51\u5173\u6765\u7EDF\u4E00\u5904\u7406\u5E94\u7528\u903B\u8F91\u4E2D\u9700\u8981\u64CD\u63A7 Prompt \u7684\u5730\u65B9\uFF0C\u8BA9\u6240\u6709 LLM API \u6D41\u91CF\u90FD\u7ECF\u8FC7 Higress \u8FDB\u884C\u5904\u7406\uFF0C\u81EA\u52A8\u5B8C\u6210 Prompt \u7684\u7EDF\u4E00\u64CD\u63A7\u3002

# \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`prepend\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5 |
| \`append\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

# \u793A\u4F8B

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
prepend:
- role: system
  content: "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"
append:
- role: user
  content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"
    },
    {
      "role": "user",
      "content": "\u4F60\u662F\u8C01\uFF1F"
    },
    {
      "role": "user",
      "content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
    }
  ]
}
\`\`\`
`},p=function(){return s},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:1,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:1,slug:"\u793A\u4F8B",text:"\u793A\u4F8B"}]},e=c((u,C,f)=>{const{layout:h,...d}=n;return d.file=a,d.url=t,r`${v()}${y(s)}`})});export{e as Content,x as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,i as rawContent,t as url};
