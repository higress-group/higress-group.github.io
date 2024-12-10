import{c as r,__tla as l}from"./astro-component.DIa0fJKh.js";import{r as c,m as u,u as m,__tla as g}from"./constant.AEgXKg10.js";import{__tla as E}from"./astro/assets-service.tyfV9CK3.js";let t,d,s,a,p,o,n,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>AI prompt templates are used to quickly build similar types of AI requests.</p>
<h2 id="execution-properties">Execution Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Default Phase</code><br>
Plugin Execution Priority: <code dir="auto">500</code></p>
<h2 id="configuration-description">Configuration Description</h2>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">templates</code></td><td>array of object</td><td>Required</td><td>-</td><td>Template settings</td></tr></tbody></table>
<p>Template object configuration description:</p>

































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Template name</td></tr><tr><td><code dir="auto">template.model</code></td><td>string</td><td>Required</td><td>-</td><td>Model name</td></tr><tr><td><code dir="auto">template.messages</code></td><td>array of object</td><td>Required</td><td>-</td><td>Input for large model</td></tr></tbody></table>
<p>Message object configuration description:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">role</code></td><td>string</td><td>Required</td><td>-</td><td>Role</td></tr><tr><td><code dir="auto">content</code></td><td>string</td><td>Required</td><td>-</td><td>Message</td></tr></tbody></table>
<p>Configuration example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">templates</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"developer-chat"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gpt-3.5-turbo</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">messages</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You are a {{program}} expert, in {{language}} programming language."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Write me a {{program}} program."</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="templates:\x7F- name: &#x22;developer-chat&#x22;\x7F  template:\x7F    model: gpt-3.5-turbo\x7F    messages:\x7F    - role: system\x7F      content: &#x22;You are a {{program}} expert, in {{language}} programming language.&#x22;\x7F    - role: user\x7F      content: &#x22;Write me a {{program}} program.&#x22;"><div></div></button></div></figure></div>
<p>Example request body using the above configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"template"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"developer-chat"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"properties"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"program"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quick sort"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"language"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"python"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;template&#x22;: &#x22;developer-chat&#x22;,\x7F  &#x22;properties&#x22;: {\x7F    &#x22;program&#x22;: &#x22;quick sort&#x22;,\x7F    &#x22;language&#x22;: &#x22;python&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>`,a={title:"AI Prompt Template",keywords:["AI Gateway","AI Prompt Template"],description:"AI Prompt Template Configuration Reference"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-dev/ai-prompt-template.md",n=void 0,o=function(){return`## Function Description
AI prompt templates are used to quickly build similar types of AI requests.

## Execution Properties
Plugin Execution Phase: \`Default Phase\`  
Plugin Execution Priority: \`500\`  

## Configuration Description
| Name            | Data Type         | Required | Default Value | Description                       |
|-----------------|-------------------|----------|---------------|-----------------------------------|
| \`templates\`     | array of object   | Required | -             | Template settings                 |

Template object configuration description:  
| Name                  | Data Type         | Required | Default Value | Description                       |
|-----------------------|-------------------|----------|---------------|-----------------------------------|
| \`name\`                | string            | Required | -             | Template name                     |
| \`template.model\`     | string            | Required | -             | Model name                        |
| \`template.messages\`   | array of object   | Required | -             | Input for large model            |

Message object configuration description:  
| Name           | Data Type         | Required | Default Value | Description                       |
|----------------|-------------------|----------|---------------|-----------------------------------|
| \`role\`         | string            | Required | -             | Role                              |
| \`content\`      | string            | Required | -             | Message                           |

Configuration example:  
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

Example request body using the above configuration:  
\`\`\`json
{
  "template": "developer-chat",
  "properties": {
    "program": "quick sort",
    "language": "python"
  }
}
\`\`\`  
`},d=function(){return e},p=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-properties",text:"Execution Properties"},{depth:2,slug:"configuration-description",text:"Configuration Description"}]},t=r((v,h,f)=>{const{layout:x,...i}=a;return i.file=s,i.url=n,c`${u()}${m(e)}`})});export{t as Content,y as __tla,d as compiledContent,t as default,s as file,a as frontmatter,p as getHeadings,o as rawContent,n as url};
