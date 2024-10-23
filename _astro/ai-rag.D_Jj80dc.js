import{c,__tla as l}from"./astro-component.BNo6A4i3.js";import{r as p,m as u,u as h,__tla as x}from"./constant.DJKTwoWF.js";import{__tla as v}from"./astro/assets-service.lesyujvn.js";let t,o,i,s,d,r,a,m=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return x}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>Implement LLM-RAG by integrating with Alibaba Cloud Vector Search Service, as shown in the figure below:
<img src="https://img.alicdn.com/imgextra/i1/O1CN01LuRVs41KhoeuzakeF_!!6000000001196-0-tps-1926-1316.jpg" width="600"></p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code><br>
Plugin execution priority: <code dir="auto">400</code></p>
<h2 id="configuration-description">Configuration Description</h2>

























































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">dashscope.apiKey</code></td><td>string</td><td>Required</td><td>-</td><td>Token used for authentication when accessing Tongyi Qianwen service.</td></tr><tr><td><code dir="auto">dashscope.serviceFQDN</code></td><td>string</td><td>Required</td><td>-</td><td>Tongyi Qianwen service name</td></tr><tr><td><code dir="auto">dashscope.servicePort</code></td><td>int</td><td>Required</td><td>-</td><td>Tongyi Qianwen service port</td></tr><tr><td><code dir="auto">dashscope.serviceHost</code></td><td>string</td><td>Required</td><td>-</td><td>Domain name for accessing Tongyi Qianwen service</td></tr><tr><td><code dir="auto">dashvector.apiKey</code></td><td>string</td><td>Required</td><td>-</td><td>Token used for authentication when accessing Alibaba Cloud Vector Search Service.</td></tr><tr><td><code dir="auto">dashvector.serviceFQDN</code></td><td>string</td><td>Required</td><td>-</td><td>Alibaba Cloud Vector Search service name</td></tr><tr><td><code dir="auto">dashvector.servicePort</code></td><td>int</td><td>Required</td><td>-</td><td>Alibaba Cloud Vector Search service port</td></tr><tr><td><code dir="auto">dashvector.serviceHost</code></td><td>string</td><td>Required</td><td>-</td><td>Domain name for accessing Alibaba Cloud Vector Search service</td></tr><tr><td><code dir="auto">dashvector.topk</code></td><td>int</td><td>Required</td><td>-</td><td>Number of vectors to retrieve from Alibaba Cloud Vector Search</td></tr><tr><td><code dir="auto">dashvector.threshold</code></td><td>float</td><td>Required</td><td>-</td><td>Vector distance threshold; documents above this threshold will be filtered out</td></tr><tr><td><code dir="auto">dashvector.field</code></td><td>string</td><td>Required</td><td>-</td><td>Field name where documents are stored in Alibaba Cloud Vector Search</td></tr></tbody></table>
<p>Once the plugin is enabled, while using the tracing feature, the document ID information retrieved by RAG will be added to the span\u2019s attributes for troubleshooting purposes.</p>
<h2 id="example">Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">dashscope</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceFQDN</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">dashvector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceFQDN</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashvector</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">vrs-cn-xxxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">collection</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">topk</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">threshold</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">field</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">raw</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="dashscope:\x7F    apiKey: xxxxxxxxxxxxxxx\x7F    serviceFQDN: dashscope\x7F    servicePort: 443\x7F    serviceHost: dashscope.aliyuncs.com\x7Fdashvector:\x7F    apiKey: xxxxxxxxxxxxxxxxxxxx\x7F    serviceFQDN: dashvector\x7F    servicePort: 443\x7F    serviceHost: vrs-cn-xxxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com\x7F    collection: xxxxxxxxxxxxxxx\x7F    topk: 1\x7F    threshold: 0.4\x7F    field: raw"><div></div></button></div></figure></div>
<p>The <a href="https://github.com/shijiebei2009/CEC-Corpus" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">CEC-Corpus</a> dataset contains 332 news reports on emergency events, along with annotation data. The original news text is extracted, vectorized, and then added to Alibaba Cloud Vector Search Service. For text vectorization tutorials, you can refer to <a href="https://help.aliyun.com/document_detail/2510234.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u201CImplementing Semantic Search Based on Vector Search Service and Lingji\u201D</a>.</p>
<p>Below is an example enhanced using RAG, with the original request being:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Where did the rear-end collision in Hainan occur? What was the cause? How many casualties were there?</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Where did the rear-end collision in Hainan occur? What was the cause? How many casualties were there?"><div></div></button></div></figure></div>
<p>The result returned by LLM without RAG plugin processing was:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">I'm sorry, as an AI model, I cannot retrieve and update specific information on news events in real time, including details such as location, cause, and casualties. For such specific events, it is recommended that you consult the latest news reports or official announcements for accurate information. You can visit mainstream media websites, use news applications, or follow announcements from relevant government departments to get dynamic updates.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="I&#x27;m sorry, as an AI model, I cannot retrieve and update specific information on news events in real time, including details such as location, cause, and casualties. For such specific events, it is recommended that you consult the latest news reports or official announcements for accurate information. You can visit mainstream media websites, use news applications, or follow announcements from relevant government departments to get dynamic updates."><div></div></button></div></figure></div>
<p>After processing with RAG plugin, the result returned by LLM was:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">The rear-end collision in Hainan occurred on the Haiven Expressway, 37 kilometers from Wenchang to Haikou. Regarding the specific cause of the accident, traffic police were still conducting further investigations at the time, so the exact cause of the accident cannot be determined based on the provided information. The casualty situation is 1 death (the driver died on the spot) and 8 injuries (including 2 children and 6 adults). All injured persons were rescued and sent to the hospital for treatment.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="The rear-end collision in Hainan occurred on the Haiven Expressway, 37 kilometers from Wenchang to Haikou. Regarding the specific cause of the accident, traffic police were still conducting further investigations at the time, so the exact cause of the accident cannot be determined based on the provided information. The casualty situation is 1 death (the driver died on the spot) and 8 injuries (including 2 children and 6 adults). All injured persons were rescued and sent to the hospital for treatment."><div></div></button></div></figure></div>`,s={title:"AI RAG",keywords:["AI Gateway","AI RAG"],description:"AI RAG Plugin Configuration Reference"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/others/ai-rag.md",a=void 0,r=function(){return`## Function Description
Implement LLM-RAG by integrating with Alibaba Cloud Vector Search Service, as shown in the figure below:
<img src="https://img.alicdn.com/imgextra/i1/O1CN01LuRVs41KhoeuzakeF_!!6000000001196-0-tps-1926-1316.jpg" width=600>

## Running Attributes
Plugin execution phase: \`Default Phase\`  
Plugin execution priority: \`400\`  

## Configuration Description
| Name                     | Data Type | Requirement | Default Value | Description                                                                               |
|--------------------------|-----------|-------------|---------------|-------------------------------------------------------------------------------------------|
| \`dashscope.apiKey\`      | string    | Required    | -             | Token used for authentication when accessing Tongyi Qianwen service.                    |
| \`dashscope.serviceFQDN\` | string    | Required    | -             | Tongyi Qianwen service name                                                                |
| \`dashscope.servicePort\` | int       | Required    | -             | Tongyi Qianwen service port                                                                |
| \`dashscope.serviceHost\` | string    | Required    | -             | Domain name for accessing Tongyi Qianwen service                                            |
| \`dashvector.apiKey\`     | string    | Required    | -             | Token used for authentication when accessing Alibaba Cloud Vector Search Service.         |
| \`dashvector.serviceFQDN\`| string    | Required    | -             | Alibaba Cloud Vector Search service name                                                   |
| \`dashvector.servicePort\`| int       | Required    | -             | Alibaba Cloud Vector Search service port                                                   |
| \`dashvector.serviceHost\`| string    | Required    | -             | Domain name for accessing Alibaba Cloud Vector Search service                               |
| \`dashvector.topk\`       | int       | Required    | -             | Number of vectors to retrieve from Alibaba Cloud Vector Search                              |
| \`dashvector.threshold\`   | float     | Required    | -             | Vector distance threshold; documents above this threshold will be filtered out              |
| \`dashvector.field\`      | string    | Required    | -             | Field name where documents are stored in Alibaba Cloud Vector Search                       |

Once the plugin is enabled, while using the tracing feature, the document ID information retrieved by RAG will be added to the span's attributes for troubleshooting purposes.

## Example
\`\`\`yaml
dashscope:
    apiKey: xxxxxxxxxxxxxxx
    serviceFQDN: dashscope
    servicePort: 443
    serviceHost: dashscope.aliyuncs.com
dashvector:
    apiKey: xxxxxxxxxxxxxxxxxxxx
    serviceFQDN: dashvector
    servicePort: 443
    serviceHost: vrs-cn-xxxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com
    collection: xxxxxxxxxxxxxxx
    topk: 1
    threshold: 0.4
    field: raw
\`\`\`
The [CEC-Corpus](https://github.com/shijiebei2009/CEC-Corpus) dataset contains 332 news reports on emergency events, along with annotation data. The original news text is extracted, vectorized, and then added to Alibaba Cloud Vector Search Service. For text vectorization tutorials, you can refer to [\u201CImplementing Semantic Search Based on Vector Search Service and Lingji\u201D](https://help.aliyun.com/document_detail/2510234.html).

Below is an example enhanced using RAG, with the original request being:
\`\`\`
Where did the rear-end collision in Hainan occur? What was the cause? How many casualties were there?
\`\`\`
The result returned by LLM without RAG plugin processing was:
\`\`\`
I'm sorry, as an AI model, I cannot retrieve and update specific information on news events in real time, including details such as location, cause, and casualties. For such specific events, it is recommended that you consult the latest news reports or official announcements for accurate information. You can visit mainstream media websites, use news applications, or follow announcements from relevant government departments to get dynamic updates.
\`\`\`
After processing with RAG plugin, the result returned by LLM was:
\`\`\`
The rear-end collision in Hainan occurred on the Haiven Expressway, 37 kilometers from Wenchang to Haikou. Regarding the specific cause of the accident, traffic police were still conducting further investigations at the time, so the exact cause of the accident cannot be determined based on the provided information. The casualty situation is 1 death (the driver died on the spot) and 8 injuries (including 2 children and 6 adults). All injured persons were rescued and sent to the hospital for treatment.
\`\`\`
`},o=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"example",text:"Example"}]},t=c((g,f,y)=>{const{layout:b,...n}=s;return n.file=i,n.url=a,p`${u()}${h(e)}`})});export{t as Content,m as __tla,o as compiledContent,t as default,i as file,s as frontmatter,d as getHeadings,r as rawContent,a as url};
