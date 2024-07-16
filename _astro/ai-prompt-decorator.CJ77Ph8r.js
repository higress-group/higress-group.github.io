import{c as p,r as i,m as l}from"./render-template.BxWVGK5g.js";import{u as c}from"./index.DVQprq0Y.js";import"./hooks.module.6Mr8QjZg.js";import"./preact.module.LHOPIhyX.js";import"./jsxRuntime.module.B-HT3-kV.js";import"./preload-helper.BiBI96sQ.js";const e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Higress AI \u7F51\u5173\u6765\u7EDF\u4E00\u5904\u7406\u5E94\u7528\u903B\u8F91\u4E2D\u9700\u8981\u64CD\u63A7 Prompt \u7684\u5730\u65B9\uFF0C\u8BA9\u6240\u6709 LLM API \u6D41\u91CF\u90FD\u7ECF\u8FC7 Higress \u8FDB\u884C\u5904\u7406\uFF0C\u81EA\u52A8\u5B8C\u6210 Prompt \u7684\u7EDF\u4E00\u64CD\u63A7\u3002</p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">decorators</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u4FEE\u9970\u8BBE\u7F6E</td></tr></tbody></table>
<p>template object \u914D\u7F6E\u8BF4\u660E\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u4FEE\u9970\u540D\u79F0</td></tr><tr><td><code dir="auto">decorator.prepend</code></td><td>array of message object</td><td>\u5FC5\u586B</td><td>-</td><td>\u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5</td></tr><tr><td><code dir="auto">decorator.append</code></td><td>array of message object</td><td>\u5FC5\u586B</td><td>-</td><td>\u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5</td></tr></tbody></table>
<p>message object \u914D\u7F6E\u8BF4\u660E\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">role</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u89D2\u8272</td></tr><tr><td><code dir="auto">content</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6D88\u606F</td></tr></tbody></table>
<h1 id="\u793A\u4F8B">\u793A\u4F8B</h1>
<p>\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">decorators</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hangzhou-guide"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">decorator</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You will always respond in the Chinese language."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Assume you are from Hangzhou."</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Don't introduce Hangzhou's food."</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="decorators:\x7F- name: &#x22;hangzhou-guide&#x22;\x7F  decorator:\x7F    prepend:\x7F    - role: system\x7F      content: &#x22;You will always respond in the Chinese language.&#x22;\x7F    - role: user\x7F      content: &#x22;Assume you are from Hangzhou.&#x22;\x7F    append:\x7F    - role: user\x7F      content: &#x22;Don&#x27;t introduce Hangzhou&#x27;s food.&#x22;"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"model"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"messages"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"role"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"user",</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"content"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Please introduce your home."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Please introduce your home.&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>\u54CD\u5E94\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"id": "chatcmpl-9UYwQlEg6GwAswEZBDYXl41RU4gab",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"object": "chat.completion",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"created": 1717071182,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"model": "gpt-3.5-turbo-0125",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"choices": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"index": 0,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"message": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"role": "assistant",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"content": "\u676D\u5DDE\u662F\u4E00\u4E2A\u7F8E\u4E3D\u7684\u57CE\u5E02\uFF0C\u6709\u7740\u60A0\u4E45\u7684\u5386\u53F2\u548C\u5BCC\u6709\u7279\u8272\u7684\u6587\u5316\u3002\u8FD9\u91CC\u98CE\u666F\u4F18\u7F8E\uFF0C\u6709\u897F\u6E56\u3001\u96F7\u5CF0\u5854\u7B49\u8457\u540D\u666F\u70B9\uFF0C\u5438\u5F15\u7740\u8BB8\u591A\u6E38\u5BA2\u524D\u6765\u89C2\u5149\u3002\u676D\u5DDE\u4EBA\u6C11\u70ED\u60C5\u597D\u5BA2\uFF0C\u57CE\u5E02\u5B81\u9759\u5B89\u9038\uFF0C\u662F\u4E00\u4E2A\u9002\u5408\u5C45\u4F4F\u548C\u65C5\u6E38\u7684\u5730\u65B9\u3002"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"logprobs": null,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">"finish_reason": "stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"usage": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"prompt_tokens": 49,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"completion_tokens": 117,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"total_tokens": 166</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"system_fingerprint": null</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;chatcmpl-9UYwQlEg6GwAswEZBDYXl41RU4gab&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;created&#x22;: 1717071182,\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo-0125&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u676D\u5DDE\u662F\u4E00\u4E2A\u7F8E\u4E3D\u7684\u57CE\u5E02\uFF0C\u6709\u7740\u60A0\u4E45\u7684\u5386\u53F2\u548C\u5BCC\u6709\u7279\u8272\u7684\u6587\u5316\u3002\u8FD9\u91CC\u98CE\u666F\u4F18\u7F8E\uFF0C\u6709\u897F\u6E56\u3001\u96F7\u5CF0\u5854\u7B49\u8457\u540D\u666F\u70B9\uFF0C\u5438\u5F15\u7740\u8BB8\u591A\u6E38\u5BA2\u524D\u6765\u89C2\u5149\u3002\u676D\u5DDE\u4EBA\u6C11\u70ED\u60C5\u597D\u5BA2\uFF0C\u57CE\u5E02\u5B81\u9759\u5B89\u9038\uFF0C\u662F\u4E00\u4E2A\u9002\u5408\u5C45\u4F4F\u548C\u65C5\u6E38\u7684\u5730\u65B9\u3002&#x22;\x7F      },\x7F      &#x22;logprobs&#x22;: null,\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 49,\x7F    &#x22;completion_tokens&#x22;: 117,\x7F    &#x22;total_tokens&#x22;: 166\x7F  },\x7F  &#x22;system_fingerprint&#x22;: null\x7F}"><div></div></button></div></figure></div>`,a={title:"AI \u63D0\u793A\u8BCD\u4FEE\u9970",keywords:["higress","ai"],description:"AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\u3002"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-prompt-decorator.md",t=void 0;function o(){return`
## \u529F\u80FD\u8BF4\u660E

AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Higress AI \u7F51\u5173\u6765\u7EDF\u4E00\u5904\u7406\u5E94\u7528\u903B\u8F91\u4E2D\u9700\u8981\u64CD\u63A7 Prompt \u7684\u5730\u65B9\uFF0C\u8BA9\u6240\u6709 LLM API \u6D41\u91CF\u90FD\u7ECF\u8FC7 Higress \u8FDB\u884C\u5904\u7406\uFF0C\u81EA\u52A8\u5B8C\u6210 Prompt \u7684\u7EDF\u4E00\u64CD\u63A7\u3002

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`decorators\` | array of object | \u5FC5\u586B | - | \u4FEE\u9970\u8BBE\u7F6E |

template object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`name\` | string | \u5FC5\u586B | - | \u4FEE\u9970\u540D\u79F0 |
| \`decorator.prepend\` | array of message object | \u5FC5\u586B | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5 |
| \`decorator.append\` | array of message object | \u5FC5\u586B | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

# \u793A\u4F8B

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
decorators:
- name: "hangzhou-guide"
  decorator:
    prepend:
    - role: system
      content: "You will always respond in the Chinese language."
    - role: user
      content: "Assume you are from Hangzhou."
    append:
    - role: user
      content: "Don't introduce Hangzhou's food."
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please introduce your home."
    }
  ]
}
\`\`\`

\u54CD\u5E94\u5982\u4E0B\uFF1A

\`\`\`
{
  "id": "chatcmpl-9UYwQlEg6GwAswEZBDYXl41RU4gab",
  "object": "chat.completion",
  "created": 1717071182,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u676D\u5DDE\u662F\u4E00\u4E2A\u7F8E\u4E3D\u7684\u57CE\u5E02\uFF0C\u6709\u7740\u60A0\u4E45\u7684\u5386\u53F2\u548C\u5BCC\u6709\u7279\u8272\u7684\u6587\u5316\u3002\u8FD9\u91CC\u98CE\u666F\u4F18\u7F8E\uFF0C\u6709\u897F\u6E56\u3001\u96F7\u5CF0\u5854\u7B49\u8457\u540D\u666F\u70B9\uFF0C\u5438\u5F15\u7740\u8BB8\u591A\u6E38\u5BA2\u524D\u6765\u89C2\u5149\u3002\u676D\u5DDE\u4EBA\u6C11\u70ED\u60C5\u597D\u5BA2\uFF0C\u57CE\u5E02\u5B81\u9759\u5B89\u9038\uFF0C\u662F\u4E00\u4E2A\u9002\u5408\u5C45\u4F4F\u548C\u65C5\u6E38\u7684\u5730\u65B9\u3002"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 49,
    "completion_tokens": 117,
    "total_tokens": 166
  },
  "system_fingerprint": null
}
\`\`\`
`}function r(){return e}function v(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:1,slug:"\u793A\u4F8B",text:"\u793A\u4F8B"}]}const d=p((y,E,u)=>{const{layout:h,...s}=a;return s.file=n,s.url=t,i`${l()}${c(e)}`});export{d as Content,r as compiledContent,d as default,n as file,a as frontmatter,v as getHeadings,o as rawContent,t as url};
