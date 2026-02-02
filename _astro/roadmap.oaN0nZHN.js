import{c as p,__tla as l}from"./astro-component.YcfuVWta.js";import{r as c,m as u,u as m,__tla as h}from"./constant.Cx6UCuye.js";import{__tla as v}from"./astro/assets-service.r1ocst81.js";let t,s,r,o,a,d,n,f=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let e;e=`


















































































<table><thead><tr><th>Version</th><th>Core Goals</th><th>Estimated Release Date</th><th>Enterprise Version Mapping</th></tr></thead><tbody><tr><td>v0.6.0</td><td>Black screen operations (kubectl) under K8s reach <strong>GA status</strong>; release of console preview version to improve ease of installation and deployment</td><td>2023-01</td><td>1.1.x</td></tr><tr><td>v0.7.0</td><td>Official version of the console is released, integrating out-of-the-box observability</td><td>2023-02</td><td>1.1.x</td></tr><tr><td>v1.0.0</td><td>Overall reaches <strong>GA status</strong></td><td>2023-05</td><td>1.2.x</td></tr><tr><td>v1.1.0</td><td>Enhance microservice gateway capabilities in the console; support installation and deployment in non-K8s environments</td><td>2023-07</td><td>1.2.x</td></tr><tr><td>v1.2.0</td><td>Support use as Knative\u2019s network layer; support ARM architecture deployment; support integration with Consul</td><td>2023-08</td><td>1.2.x</td></tr><tr><td>v1.3.0</td><td>Full support for GatewayAPI; support for Operator mode deployment</td><td>2023-11</td><td>1.2.x</td></tr><tr><td>v1.4.0</td><td>WASM support for Redis calls; simplified HTTPS certificate management</td><td>2024-05</td><td>1.2.x</td></tr><tr><td>v2.0.0</td><td>Providing richer API gateway capabilities based on numerous new plugins</td><td>2024-08</td><td>2.0.x</td></tr><tr><td>v2.1.0</td><td>Console support for AI traffic entry management, reducing usage costs related to AI functionality</td><td>2025-02</td><td>2.1.x</td></tr><tr><td>v2.2.0</td><td>Support <a href="https://gateway-api-inference-extension.sigs.k8s.io/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GIE</a>, to achieve extensive integration with CNCF AI infra such as llm-d</td><td>2025-12</td><td>2.2.x</td></tr><tr><td>v2.3.0</td><td>Support comprehensive AI-native operations of Higress through Agent. Support WebRTC protocol for realtime AI scenarios</td><td>2026-06</td><td>2.3.x</td></tr><tr><td>v2.4.0</td><td>Optimize the performance of the wasm plugin in memory copy scenarios (based on the memory control proposal), supporting custom extensions for webRTC and websocket protocols within the wasm plugin.</td><td>2026-12</td><td>2.4.x</td></tr></tbody></table>
<blockquote>
<p><strong>Note</strong></p>
<p>Higress Enterprise Edition and Open Source Edition use the same core logic but have different iteration rhythms, so there are differences in version numbers.</p>
<p>Starting from Higress v2.0.0, the Enterprise and Open Source versions have a better alignment mechanism:</p>
<p>Based on the <a href="https://semver.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Semantic Versioning Specification</a>, it ensures that the major version and minor version of open source and enterprise versions are completely aligned, but patch versions will have differences. For example:</p>
<p>When Higress Enterprise Edition releases v2.1.x, the Open Source Edition will also include corresponding core functional features when releasing v2.1.x;</p>
<p>Patch versions indicate small fixes, and the versions between open source and enterprise editions are not completely aligned. For example:</p>
<p>If the Open Source Edition subsequently releases versions from v2.1.1 to v2.1.10, while the Enterprise Edition releases from v2.1.1 to v2.1.3, complete alignment between the two is not guaranteed for each specific minor version.</p>
</blockquote>`,o={title:"Roadmap",keywords:["Higress","roadmap"],description:"Higress Roadmap.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/overview/roadmap.md"},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/overview/roadmap.md",n=void 0,d=function(){return`
# Roadmap

| Version | Core Goals | Estimated Release Date | Enterprise Version Mapping |
| ------- | ---------- | ---------------------- | --------------------------- |
| v0.6.0 | Black screen operations (kubectl) under K8s reach **GA status**; release of console preview version to improve ease of installation and deployment | 2023-01 | 1.1.x |
| v0.7.0 | Official version of the console is released, integrating out-of-the-box observability | 2023-02 | 1.1.x |
| v1.0.0 | Overall reaches **GA status** | 2023-05 | 1.2.x |
| v1.1.0 | Enhance microservice gateway capabilities in the console; support installation and deployment in non-K8s environments | 2023-07 | 1.2.x |
| v1.2.0 | Support use as Knative's network layer; support ARM architecture deployment; support integration with Consul | 2023-08 | 1.2.x |
| v1.3.0 | Full support for GatewayAPI; support for Operator mode deployment | 2023-11 | 1.2.x |
| v1.4.0 | WASM support for Redis calls; simplified HTTPS certificate management | 2024-05 | 1.2.x |
| v2.0.0 | Providing richer API gateway capabilities based on numerous new plugins | 2024-08 | 2.0.x |
| v2.1.0 | Console support for AI traffic entry management, reducing usage costs related to AI functionality | 2025-02 | 2.1.x |
| v2.2.0 | Support [GIE](https://gateway-api-inference-extension.sigs.k8s.io/), to achieve extensive integration with CNCF AI infra such as llm-d | 2025-12 | 2.2.x |
| v2.3.0 | Support comprehensive AI-native operations of Higress through Agent. Support WebRTC protocol for realtime AI scenarios | 2026-06 | 2.3.x |
| v2.4.0 | Optimize the performance of the wasm plugin in memory copy scenarios (based on the memory control proposal), supporting custom extensions for webRTC and websocket protocols within the wasm plugin. | 2026-12 | 2.4.x |


> **Note**
> 
> Higress Enterprise Edition and Open Source Edition use the same core logic but have different iteration rhythms, so there are differences in version numbers.
> 
> Starting from Higress v2.0.0, the Enterprise and Open Source versions have a better alignment mechanism:
> 
> Based on the [Semantic Versioning Specification](https://semver.org/), it ensures that the major version and minor version of open source and enterprise versions are completely aligned, but patch versions will have differences. For example:
>
> When Higress Enterprise Edition releases v2.1.x, the Open Source Edition will also include corresponding core functional features when releasing v2.1.x;
>
> Patch versions indicate small fixes, and the versions between open source and enterprise editions are not completely aligned. For example:
>
> If the Open Source Edition subsequently releases versions from v2.1.1 to v2.1.10, while the Enterprise Edition releases from v2.1.1 to v2.1.3, complete alignment between the two is not guaranteed for each specific minor version.
`},s=function(){return e},a=function(){return[]},t=p((g,b,w)=>{const{layout:y,...i}=o;return i.file=r,i.url=n,c`${u()}${m(e)}`})});export{t as Content,f as __tla,s as compiledContent,t as default,r as file,o as frontmatter,a as getHeadings,d as rawContent,n as url};
