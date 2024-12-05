import{c as o,__tla as c}from"./astro-component.DIa0fJKh.js";import{r,m as v,u as x,__tla as y}from"./constant.D5S_Jd2C.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let s,l,n,t,d,p,a,u=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The AI Request-Response Transformation plugin modifies the header and body of requests/responses using LLM.</p>
<h2 id="execution-attributes">Execution Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Authentication Phase</code><br>
Plugin execution priority: <code dir="auto">410</code></p>
<h2 id="configuration-description">Configuration Description</h2>





























































<table><thead><tr><th align="left">Name</th><th align="left">Type</th><th align="left">Requirement</th><th align="left">Default</th><th align="left">Description</th></tr></thead><tbody><tr><td align="left">request.enable</td><td align="left">bool</td><td align="left">required</td><td align="left">-</td><td align="left">Whether to enable transformation in the request phase</td></tr><tr><td align="left">request.prompt</td><td align="left">string</td><td align="left">required</td><td align="left">-</td><td align="left">Prompt used for transformation in the request phase</td></tr><tr><td align="left">response.enable</td><td align="left">bool</td><td align="left">required</td><td align="left">-</td><td align="left">Whether to enable transformation in the response phase</td></tr><tr><td align="left">response.prompt</td><td align="left">string</td><td align="left">required</td><td align="left">-</td><td align="left">Prompt used for transformation in the response phase</td></tr><tr><td align="left">provider.serviceName</td><td align="left">string</td><td align="left">required</td><td align="left">-</td><td align="left">DNS type service name, currently only supports Qwen</td></tr><tr><td align="left">provider.domain</td><td align="left">string</td><td align="left">required</td><td align="left">-</td><td align="left">LLM service domain</td></tr><tr><td align="left">provider.apiKey</td><td align="left">string</td><td align="left">required</td><td align="left">-</td><td align="left">Alibaba Cloud Dashscope service API Key</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"If the request path starts with /httpbin, please remove the /httpbin prefix and do not change anything else."</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Please modify the following HTTP response information with the requirements: 1. change content-type to application/json; 2. convert body from xml to json; 3. remove content-length."</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="request:\x7F    enable: false\x7F    prompt: &#x22;If the request path starts with /httpbin, please remove the /httpbin prefix and do not change anything else.&#x22;\x7Fresponse:\x7F    enable: true\x7F    prompt: &#x22;Please modify the following HTTP response information with the requirements: 1. change content-type to application/json; 2. convert body from xml to json; 3. remove content-length.&#x22;\x7Fprovider:\x7F    serviceName: qwen\x7F    domain: dashscope.aliyuncs.com\x7F    apiKey: xxxxxxxxxxxxx"><div></div></button></div></figure></div>
<p>Accessing the original httpbin\u2019s /xml interface yields:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;?xml version='1.0' encoding='us-ascii'?></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!--  A SAMPLE set of slides  --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;slideshow</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">title="Sample Slide Show"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">date="Date of publication"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">author="Yours Truly"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;!-- TITLE SLIDE --></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;slide type="all"></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">&#x3C;title>Wake up to WonderWidgets!&#x3C;/title></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;/slide></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;!-- OVERVIEW --></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;slide type="all"></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;title>Overview&#x3C;/title></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;item>Why &#x3C;em>WonderWidgets&#x3C;/em> are great&#x3C;/item></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;item/></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;item>Who &#x3C;em>buys&#x3C;/em> WonderWidgets&#x3C;/item></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;/slide></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;/slideshow></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<?xml version=&#x27;1.0&#x27; encoding=&#x27;us-ascii&#x27;?>\x7F<!--  A SAMPLE set of slides  -->\x7F<slideshow\x7F    title=&#x22;Sample Slide Show&#x22;\x7F    date=&#x22;Date of publication&#x22;\x7F    author=&#x22;Yours Truly&#x22;\x7F    >\x7F    <!-- TITLE SLIDE -->\x7F    <slide type=&#x22;all&#x22;>\x7F      <title>Wake up to WonderWidgets!</title>\x7F    </slide>\x7F    <!-- OVERVIEW -->\x7F    <slide type=&#x22;all&#x22;>\x7F        <title>Overview</title>\x7F        <item>Why <em>WonderWidgets</em> are great</item>\x7F        <item/>\x7F        <item>Who <em>buys</em> WonderWidgets</item>\x7F    </slide>\x7F</slideshow>"><div></div></button></div></figure></div>
<p>Using the above configuration, accessing the httpbin\u2019s /xml interface through the gateway yields:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"slideshow": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"title": "Sample Slide Show",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"date": "Date of publication",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"author": "Yours Truly",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"slides": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"type": "all",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"title": "Wake up to WonderWidgets!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"type": "all",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"title": "Overview",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"items": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">"Why &#x3C;em>WonderWidgets&#x3C;/em> are great",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">"Who &#x3C;em>buys&#x3C;/em> WonderWidgets"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;slideshow&#x22;: {\x7F    &#x22;title&#x22;: &#x22;Sample Slide Show&#x22;,\x7F    &#x22;date&#x22;: &#x22;Date of publication&#x22;,\x7F    &#x22;author&#x22;: &#x22;Yours Truly&#x22;,\x7F    &#x22;slides&#x22;: [\x7F      {\x7F        &#x22;type&#x22;: &#x22;all&#x22;,\x7F        &#x22;title&#x22;: &#x22;Wake up to WonderWidgets!&#x22;\x7F      },\x7F      {\x7F        &#x22;type&#x22;: &#x22;all&#x22;,\x7F        &#x22;title&#x22;: &#x22;Overview&#x22;,\x7F        &#x22;items&#x22;: [\x7F          &#x22;Why <em>WonderWidgets</em> are great&#x22;,\x7F          &#x22;&#x22;,\x7F          &#x22;Who <em>buys</em> WonderWidgets&#x22;\x7F        ]\x7F      }\x7F    ]\x7F  }\x7F}"><div></div></button></div></figure></div>`,t={title:"AI Request-Response Transformation",keywords:["higress","AI transformer"],description:"AI Request-Response Transformation plugin configuration reference"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/others/ai-transformer.md",a=void 0,p=function(){return`## Function Description
The AI Request-Response Transformation plugin modifies the header and body of requests/responses using LLM.

## Execution Attributes
Plugin execution phase: \`Authentication Phase\`  
Plugin execution priority: \`410\`  

## Configuration Description
| Name | Type | Requirement | Default | Description |
| :- | :-  | :-  | :- | :- |
| request.enable | bool | required | - | Whether to enable transformation in the request phase |
| request.prompt | string | required | - | Prompt used for transformation in the request phase |
| response.enable | bool | required | - | Whether to enable transformation in the response phase |
| response.prompt | string | required | - | Prompt used for transformation in the response phase |
| provider.serviceName | string | required | - | DNS type service name, currently only supports Qwen |
| provider.domain | string | required | - | LLM service domain |
| provider.apiKey | string | required | - | Alibaba Cloud Dashscope service API Key |

## Configuration Example
\`\`\`yaml
request:
    enable: false
    prompt: "If the request path starts with /httpbin, please remove the /httpbin prefix and do not change anything else."
response:
    enable: true
    prompt: "Please modify the following HTTP response information with the requirements: 1. change content-type to application/json; 2. convert body from xml to json; 3. remove content-length."
provider:
    serviceName: qwen
    domain: dashscope.aliyuncs.com
    apiKey: xxxxxxxxxxxxx
\`\`\`

Accessing the original httpbin's /xml interface yields:
\`\`\`
<?xml version='1.0' encoding='us-ascii'?>
<!--  A SAMPLE set of slides  -->
<slideshow
    title="Sample Slide Show"
    date="Date of publication"
    author="Yours Truly"
    >
    <!-- TITLE SLIDE -->
    <slide type="all">
      <title>Wake up to WonderWidgets!</title>
    </slide>
    <!-- OVERVIEW -->
    <slide type="all">
        <title>Overview</title>
        <item>Why <em>WonderWidgets</em> are great</item>
        <item/>
        <item>Who <em>buys</em> WonderWidgets</item>
    </slide>
</slideshow>
\`\`\`

Using the above configuration, accessing the httpbin's /xml interface through the gateway yields:
\`\`\`
{
  "slideshow": {
    "title": "Sample Slide Show",
    "date": "Date of publication",
    "author": "Yours Truly",
    "slides": [
      {
        "type": "all",
        "title": "Wake up to WonderWidgets!"
      },
      {
        "type": "all",
        "title": "Overview",
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "",
          "Who <em>buys</em> WonderWidgets"
        ]
      }
    ]
  }
}
\`\`\`
`},l=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-attributes",text:"Execution Attributes"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"configuration-example",text:"Configuration Example"}]},s=o((h,g,m)=>{const{layout:b,...i}=t;return i.file=n,i.url=a,r`${v()}${x(e)}`})});export{s as Content,u as __tla,l as compiledContent,s as default,n as file,t as frontmatter,d as getHeadings,p as rawContent,a as url};
