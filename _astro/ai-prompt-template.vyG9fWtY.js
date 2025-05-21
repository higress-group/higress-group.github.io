import{c as o,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as c,m as E,u as v,__tla as y}from"./constant.C798a0v1.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,p,e,a,l,i,n,g=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>AI\u63D0\u793A\u8BCD\u6A21\u677F\uFF0C\u7528\u4E8E\u5FEB\u901F\u6784\u5EFA\u540C\u7C7B\u578B\u7684AI\u8BF7\u6C42\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">500</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">templates</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u6A21\u677F\u8BBE\u7F6E</td></tr></tbody></table>
<p>template object \u914D\u7F6E\u8BF4\u660E\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6A21\u677F\u540D\u79F0</td></tr><tr><td><code dir="auto">template.model</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6A21\u578B\u540D\u79F0</td></tr><tr><td><code dir="auto">template.messages</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u5927\u6A21\u578B\u8F93\u5165</td></tr></tbody></table>
<p>message object \u914D\u7F6E\u8BF4\u660E\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">role</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u89D2\u8272</td></tr><tr><td><code dir="auto">content</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6D88\u606F</td></tr></tbody></table>
<p>\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">templates</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"developer-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gpt-3.5-turbo</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">messages</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You are a {{program}} expert, in {{language}} programming language."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Write me a {{program}} program."</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="templates:\x7F- name: &#x22;developer-chat&#x22;\x7F  template:\x7F    model: gpt-3.5-turbo\x7F    messages:\x7F    - role: system\x7F      content: &#x22;You are a {{program}} expert, in {{language}} programming language.&#x22;\x7F    - role: user\x7F      content: &#x22;Write me a {{program}} program.&#x22;"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u7684\u8BF7\u6C42body\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"template"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"developer-chat"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"properties"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"program"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quick sort"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"language"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"python"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;template&#x22;: &#x22;developer-chat&#x22;,\x7F  &#x22;properties&#x22;: {\x7F    &#x22;program&#x22;: &#x22;quick sort&#x22;,\x7F    &#x22;language&#x22;: &#x22;python&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>`,a={title:"AI \u63D0\u793A\u8BCD\u6A21\u7248",keywords:["AI\u7F51\u5173","AI\u63D0\u793A\u8BCD\u6A21\u7248"],description:"AI \u63D0\u793A\u8BCD\u6A21\u7248\u914D\u7F6E\u53C2\u8003"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-prompt-template.md",n=void 0,i=function(){return`
## \u529F\u80FD\u8BF4\u660E

AI\u63D0\u793A\u8BCD\u6A21\u677F\uFF0C\u7528\u4E8E\u5FEB\u901F\u6784\u5EFA\u540C\u7C7B\u578B\u7684AI\u8BF7\u6C42\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`500\`

## \u914D\u7F6E\u8BF4\u660E
| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`templates\` | array of object | \u5FC5\u586B | - | \u6A21\u677F\u8BBE\u7F6E |

template object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`name\` | string | \u5FC5\u586B | - | \u6A21\u677F\u540D\u79F0 |
| \`template.model\` | string | \u5FC5\u586B | - | \u6A21\u578B\u540D\u79F0 |
| \`template.messages\` | array of object | \u5FC5\u586B | - | \u5927\u6A21\u578B\u8F93\u5165 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
templates:
- name: "developer-chat"
  template:
    model: gpt-3.5-turbo
    messages:
    - role: system
      content: "You are a {{program}} expert, in {{language}} programming language."
    - role: user
      content: "Write me a {{program}} program."
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u7684\u8BF7\u6C42body\u793A\u4F8B\uFF1A

\`\`\`json
{
  "template": "developer-chat",
  "properties": {
    "program": "quick sort",
    "language": "python"
  }
}
\`\`\`
`},p=function(){return t},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"}]},s=o((h,u,x)=>{const{layout:f,...d}=a;return d.file=e,d.url=n,c`${E()}${v(t)}`})});export{s as Content,g as __tla,p as compiledContent,s as default,e as file,a as frontmatter,l as getHeadings,i as rawContent,n as url};
