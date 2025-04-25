import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r as v,m as r,u as x,__tla as y}from"./constant.NEBTwwBu.js";import{__tla as f}from"./astro/assets-service.BhtN0nM5.js";let s,d,a,i,l,p,n,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>AI \u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\uFF0C\u901A\u8FC7LLM\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u7684header\u4EE5\u53CAbody\u8FDB\u884C\u4FEE\u6539\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">410</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>





























































<table><thead><tr><th align="left">Name</th><th align="left">Type</th><th align="left">Requirement</th><th align="left">Default</th><th align="left">Description</th></tr></thead><tbody><tr><td align="left">request.enable</td><td align="left">bool</td><td align="left">requried</td><td align="left">-</td><td align="left">\u662F\u5426\u5728request\u9636\u6BB5\u5F00\u542F\u8F6C\u6362</td></tr><tr><td align="left">request.prompt</td><td align="left">string</td><td align="left">requried</td><td align="left">-</td><td align="left">request\u9636\u6BB5\u8F6C\u6362\u4F7F\u7528\u7684prompt</td></tr><tr><td align="left">response.enable</td><td align="left">string</td><td align="left">requried</td><td align="left">-</td><td align="left">\u662F\u5426\u5728response\u9636\u6BB5\u5F00\u542F\u8F6C\u6362</td></tr><tr><td align="left">response.prompt</td><td align="left">string</td><td align="left">requried</td><td align="left">-</td><td align="left">response\u9636\u6BB5\u8F6C\u6362\u4F7F\u7528\u7684prompt</td></tr><tr><td align="left">provider.serviceName</td><td align="left">string</td><td align="left">requried</td><td align="left">-</td><td align="left">DNS\u7C7B\u578B\u7684\u670D\u52A1\u540D\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u901A\u4E49\u5343\u95EE</td></tr><tr><td align="left">provider.domain</td><td align="left">string</td><td align="left">requried</td><td align="left">-</td><td align="left">LLM\u670D\u52A1\u57DF\u540D</td></tr><tr><td align="left">provider.apiKey</td><td align="left">string</td><td align="left">requried</td><td align="left">-</td><td align="left">\u963F\u91CC\u4E91dashscope\u670D\u52A1\u7684API Key</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5982\u679C\u8BF7\u6C42path\u662F\u4EE5/httpbin\u5F00\u5934\u7684\uFF0C\u5E2E\u6211\u53BB\u6389/httpbin\u524D\u7F00\uFF0C\u5176\u4ED6\u7684\u4E0D\u8981\u6539\u3002"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5E2E\u6211\u4FEE\u6539\u4EE5\u4E0BHTTP\u5E94\u7B54\u4FE1\u606F\uFF0C\u8981\u6C42\uFF1A1. content-type\u4FEE\u6539\u4E3Aapplication/json\uFF1B2. body\u7531xml\u8F6C\u5316\u4E3Ajson\uFF1B3. \u79FB\u9664content-length\u3002"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxx</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="request:\x7F    enable: false\x7F    prompt: &#x22;\u5982\u679C\u8BF7\u6C42path\u662F\u4EE5/httpbin\u5F00\u5934\u7684\uFF0C\u5E2E\u6211\u53BB\u6389/httpbin\u524D\u7F00\uFF0C\u5176\u4ED6\u7684\u4E0D\u8981\u6539\u3002&#x22;\x7Fresponse:\x7F    enable: true\x7F    prompt: &#x22;\u5E2E\u6211\u4FEE\u6539\u4EE5\u4E0BHTTP\u5E94\u7B54\u4FE1\u606F\uFF0C\u8981\u6C42\uFF1A1. content-type\u4FEE\u6539\u4E3Aapplication/json\uFF1B2. body\u7531xml\u8F6C\u5316\u4E3Ajson\uFF1B3. \u79FB\u9664content-length\u3002&#x22;\x7Fprovider:\x7F    serviceName: qwen\x7F    domain: dashscope.aliyuncs.com\x7F    apiKey: xxxxxxxxxxxxx"><div></div></button></div></figure></div>
<p>\u8BBF\u95EE\u539F\u59CB\u7684httbin\u7684/xml\u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;?xml version='1.0' encoding='us-ascii'?></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!--  A SAMPLE set of slides  --></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;slideshow</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">title="Sample Slide Show"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">date="Date of publication"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">author="Yours Truly"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;!-- TITLE SLIDE --></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;slide type="all"></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">&#x3C;title>Wake up to WonderWidgets!&#x3C;/title></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;/slide></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;!-- OVERVIEW --></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;slide type="all"></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;title>Overview&#x3C;/title></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;item>Why &#x3C;em>WonderWidgets&#x3C;/em> are great&#x3C;/item></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;item/></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">&#x3C;item>Who &#x3C;em>buys&#x3C;/em> WonderWidgets&#x3C;/item></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">&#x3C;/slide></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;/slideshow></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<?xml version=&#x27;1.0&#x27; encoding=&#x27;us-ascii&#x27;?>\x7F\x7F<!--  A SAMPLE set of slides  -->\x7F\x7F<slideshow\x7F    title=&#x22;Sample Slide Show&#x22;\x7F    date=&#x22;Date of publication&#x22;\x7F    author=&#x22;Yours Truly&#x22;\x7F    >\x7F\x7F    <!-- TITLE SLIDE -->\x7F    <slide type=&#x22;all&#x22;>\x7F      <title>Wake up to WonderWidgets!</title>\x7F    </slide>\x7F\x7F    <!-- OVERVIEW -->\x7F    <slide type=&#x22;all&#x22;>\x7F        <title>Overview</title>\x7F        <item>Why <em>WonderWidgets</em> are great</item>\x7F        <item/>\x7F        <item>Who <em>buys</em> WonderWidgets</item>\x7F    </slide>\x7F\x7F</slideshow>"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\u7684/xml\u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"slideshow": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"title": "Sample Slide Show",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"date": "Date of publication",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"author": "Yours Truly",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"slides": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"type": "all",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"title": "Wake up to WonderWidgets!"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"type": "all",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"title": "Overview",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"items": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">"Why &#x3C;em>WonderWidgets&#x3C;/em> are great",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">"Who &#x3C;em>buys&#x3C;/em> WonderWidgets"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;slideshow&#x22;: {\x7F    &#x22;title&#x22;: &#x22;Sample Slide Show&#x22;,\x7F    &#x22;date&#x22;: &#x22;Date of publication&#x22;,\x7F    &#x22;author&#x22;: &#x22;Yours Truly&#x22;,\x7F    &#x22;slides&#x22;: [\x7F      {\x7F        &#x22;type&#x22;: &#x22;all&#x22;,\x7F        &#x22;title&#x22;: &#x22;Wake up to WonderWidgets!&#x22;\x7F      },\x7F      {\x7F        &#x22;type&#x22;: &#x22;all&#x22;,\x7F        &#x22;title&#x22;: &#x22;Overview&#x22;,\x7F        &#x22;items&#x22;: [\x7F          &#x22;Why <em>WonderWidgets</em> are great&#x22;,\x7F          &#x22;&#x22;,\x7F          &#x22;Who <em>buys</em> WonderWidgets&#x22;\x7F        ]\x7F      }\x7F    ]\x7F  }\x7F}"><div></div></button></div></figure></div>`,i={title:"AI \u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362",keywords:["higress","AI transformer"],description:"AI \u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/others/ai-transformer.md",n=void 0,p=function(){return`

## \u529F\u80FD\u8BF4\u660E
AI \u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\uFF0C\u901A\u8FC7LLM\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u7684header\u4EE5\u53CAbody\u8FDB\u884C\u4FEE\u6539\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`410\`

## \u914D\u7F6E\u8BF4\u660E
| Name | Type | Requirement | Default | Description |
| :- | :-  | :-  | :- | :- |
| request.enable | bool | requried | - | \u662F\u5426\u5728request\u9636\u6BB5\u5F00\u542F\u8F6C\u6362 |
| request.prompt | string | requried | - | request\u9636\u6BB5\u8F6C\u6362\u4F7F\u7528\u7684prompt |
| response.enable | string | requried | - | \u662F\u5426\u5728response\u9636\u6BB5\u5F00\u542F\u8F6C\u6362 |
| response.prompt | string | requried | - | response\u9636\u6BB5\u8F6C\u6362\u4F7F\u7528\u7684prompt |
| provider.serviceName | string | requried | - | DNS\u7C7B\u578B\u7684\u670D\u52A1\u540D\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u901A\u4E49\u5343\u95EE |
| provider.domain | string | requried | - | LLM\u670D\u52A1\u57DF\u540D |
| provider.apiKey | string | requried | - | \u963F\u91CC\u4E91dashscope\u670D\u52A1\u7684API Key |

## \u914D\u7F6E\u793A\u4F8B
\`\`\`yaml
request:
    enable: false
    prompt: "\u5982\u679C\u8BF7\u6C42path\u662F\u4EE5/httpbin\u5F00\u5934\u7684\uFF0C\u5E2E\u6211\u53BB\u6389/httpbin\u524D\u7F00\uFF0C\u5176\u4ED6\u7684\u4E0D\u8981\u6539\u3002"
response: 
    enable: true
    prompt: "\u5E2E\u6211\u4FEE\u6539\u4EE5\u4E0BHTTP\u5E94\u7B54\u4FE1\u606F\uFF0C\u8981\u6C42\uFF1A1. content-type\u4FEE\u6539\u4E3Aapplication/json\uFF1B2. body\u7531xml\u8F6C\u5316\u4E3Ajson\uFF1B3. \u79FB\u9664content-length\u3002"
provider: 
    serviceName: qwen
    domain: dashscope.aliyuncs.com
    apiKey: xxxxxxxxxxxxx
\`\`\`

\u8BBF\u95EE\u539F\u59CB\u7684httbin\u7684/xml\u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A
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

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\u7684/xml\u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A
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
`},d=function(){return e},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"}]},s=c((g,m,h)=>{const{layout:E,...t}=i;return t.file=a,t.url=n,v`${r()}${x(e)}`})});export{s as Content,u as __tla,d as compiledContent,s as default,a as file,i as frontmatter,l as getHeadings,p as rawContent,n as url};
