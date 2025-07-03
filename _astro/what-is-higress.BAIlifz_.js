import{c as l,__tla as g}from"./astro-component.m4CCZO6J.js";import{r as p,m as u,u as d,__tla as h}from"./constant.B6p3iceL.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let a,o,i,s,r,c,t,f=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="higress-introduction">Higress Introduction</h2>
<p>Higress is a cloud-native API gateway with a kernel based on Istio and Envoy. It allows writing Wasm plugins using Go/Rust/JS and other languages, provides dozens of ready-to-use general-purpose plugins, and comes with an out-of-the-box console (click <a href="http://demo.higress.io/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">here</a> for a demo).</p>
<p>Higress was born within Alibaba to solve the issue of Tengine reload causing damage to long-connection services, as well as insufficient load balancing capabilities for gRPC/Dubbo.</p>
<p>Alibaba Cloud has built a cloud-native API gateway product based on Higress, providing 99.99% gateway high-availability guarantee service capabilities for a large number of enterprise customers.</p>
<p>Higress, with its AI gateway capabilities, supports AI services such as Tongyi Qianwen APP, Bailian large model API, and machine learning PAI platform. It also serves leading domestic AIGC enterprises (such as Zero One Infinite) and AI products (such as FastGPT).</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN011AbR8023V8R5N0HcA_!!6000000007260-2-tps-1080-606.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="what-is-an-ai-gateway">What is an AI Gateway</h3>
<p>AI Gateway = AI Native API Gateway</p>
<p>The essence of an AI gateway remains an API gateway, with the significance of AI-native being that AI is a first-class citizen in such an API gateway. API development, API supply, API consumption, and API observation are all based on requirements in AI scenarios, evolving into entirely new capabilities.</p>
<p>These are the functional domains of traditional API gateways, which still have universal value in AI scenarios:</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01yvRXRl1Ux42Nd4bos_!!6000000002583-2-tps-1904-908.png" alt="" referrerpolicy="no-referrer"></p>
<p>In AI scenarios, the functional domain of API gateways can be further expanded based on Higress:</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01TtjqnE1vLVBDlhiJf_!!6000000006156-2-tps-1904-970.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="core-advantages">Core Advantages</h2>
<ul>
<li>
<p><strong>Production Grade</strong></p>
<p>Born from an internal product validated through years of production at Alibaba, supporting large-scale scenarios with hundreds of thousands of requests per second.</p>
<p>Completely eliminates traffic fluctuations caused by Nginx reload, with configuration changes taking effect in milliseconds without affecting business. Particularly friendly to long-connection scenarios such as AI services.</p>
</li>
<li>
<p><strong>Easy to Extend</strong></p>
<p>Provides a rich library of official plugins covering common functions such as AI, traffic management, and security protection, meeting over 90% of business scenario requirements.</p>
<p>Focuses on Wasm plugin extensions, ensuring memory safety through sandbox isolation, supporting multiple programming languages, allowing independent version upgrades of plugins, and achieving lossless hot updates of gateway logic.</p>
</li>
<li>
<p><strong>Secure and User-Friendly</strong></p>
<p>Based on Ingress API and Gateway API standards, provides an out-of-the-box UI console, with WAF protection plugins and IP/Cookie CC protection plugins ready to use.</p>
<p>Supports interfacing with Let\u2019s Encrypt for automatic issuance and renewal of free certificates, and can be deployed outside of K8s, starting with a single Docker command, convenient for individual developers.</p>
</li>
<li>
<p><strong>Stream Processing</strong></p>
<p>Supports true complete stream processing of request/response bodies, with Wasm plugins easily customizing the handling of streaming protocol messages such as SSE (Server-Sent Events).</p>
<p>Significantly reduces memory overhead in high-bandwidth scenarios such as AI services.</p>
</li>
</ul>
<h2 id="use-cases">Use Cases</h2>
<ul>
<li>
<p><strong>AI Gateway</strong>:</p>
<p>Higress can interface with all domestic and international LLM model providers using a unified protocol, while possessing rich AI observability, multi-model load balancing/fallback, AI token flow control, AI caching, and other capabilities:</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01fNnhCp1cV8mYPRFeS_!!6000000003605-0-tps-1080-608.jpg" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>Kubernetes Ingress Gateway</strong>:</p>
<p>Higress can serve as the Ingress entry gateway for K8s clusters and is compatible with many K8s Nginx Ingress annotations, allowing for quick and smooth migration from K8s Nginx Ingress to Higress.</p>
<p>Supports the <a href="https://gateway-api.sigs.k8s.io/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Gateway API</a> standard, enabling users to smoothly migrate from Ingress API to Gateway API.</p>
<p>Compared to ingress-nginx, resource overhead is significantly reduced, and the speed of route change implementation is improved tenfold:</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01bhEtb229eeMNBWmdP_!!6000000008093-2-tps-750-547.png" alt="" referrerpolicy="no-referrer">
<img src="https://img.alicdn.com/imgextra/i1/O1CN01bqRets1LsBGyitj4S_!!6000000001354-2-tps-887-489.png" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>Microservice Gateway</strong>:</p>
<p>Higress can function as a microservice gateway, capable of interfacing with various types of registry centers to discover service configuration routes, such as Nacos, ZooKeeper, Consul, Eureka, etc.</p>
<p>It is also deeply integrated with microservice technology stacks such as <a href="https://github.com/apache/dubbo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Dubbo</a>, <a href="https://github.com/alibaba/nacos" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nacos</a>, and <a href="https://github.com/alibaba/Sentinel" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Sentinel</a>. With the excellent performance of the Envoy C++ gateway kernel, compared to traditional Java-type microservice gateways, it can significantly reduce resource utilization and costs.</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01v4ZbCj1dBjePSMZ17_!!6000000003698-0-tps-1613-926.jpg" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p><strong>Security Protection Gateway</strong>:</p>
<p>Higress can serve as a security protection gateway, providing WAF capabilities and supporting various authentication and authorization strategies, such as key-auth, hmac-auth, jwt-auth, basic-auth, oidc, etc.</p>
</li>
</ul>`,s={title:"What Is Higress?",keywords:["Higress"],description:"Higress introduction",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/overview/what-is-higress.md"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/overview/what-is-higress.md",t=void 0,c=function(){return`

## Higress Introduction

Higress is a cloud-native API gateway with a kernel based on Istio and Envoy. It allows writing Wasm plugins using Go/Rust/JS and other languages, provides dozens of ready-to-use general-purpose plugins, and comes with an out-of-the-box console (click [here](http://demo.higress.io/) for a demo).

Higress was born within Alibaba to solve the issue of Tengine reload causing damage to long-connection services, as well as insufficient load balancing capabilities for gRPC/Dubbo.

Alibaba Cloud has built a cloud-native API gateway product based on Higress, providing 99.99% gateway high-availability guarantee service capabilities for a large number of enterprise customers.

Higress, with its AI gateway capabilities, supports AI services such as Tongyi Qianwen APP, Bailian large model API, and machine learning PAI platform. It also serves leading domestic AIGC enterprises (such as Zero One Infinite) and AI products (such as FastGPT).

![](https://img.alicdn.com/imgextra/i2/O1CN011AbR8023V8R5N0HcA_!!6000000007260-2-tps-1080-606.png)


### What is an AI Gateway

AI Gateway = AI Native API Gateway

The essence of an AI gateway remains an API gateway, with the significance of AI-native being that AI is a first-class citizen in such an API gateway. API development, API supply, API consumption, and API observation are all based on requirements in AI scenarios, evolving into entirely new capabilities.

These are the functional domains of traditional API gateways, which still have universal value in AI scenarios:

![](https://img.alicdn.com/imgextra/i2/O1CN01yvRXRl1Ux42Nd4bos_!!6000000002583-2-tps-1904-908.png)

In AI scenarios, the functional domain of API gateways can be further expanded based on Higress:

![](https://img.alicdn.com/imgextra/i1/O1CN01TtjqnE1vLVBDlhiJf_!!6000000006156-2-tps-1904-970.png)


## Core Advantages

- **Production Grade**

  Born from an internal product validated through years of production at Alibaba, supporting large-scale scenarios with hundreds of thousands of requests per second.

  Completely eliminates traffic fluctuations caused by Nginx reload, with configuration changes taking effect in milliseconds without affecting business. Particularly friendly to long-connection scenarios such as AI services.
    
- **Easy to Extend**
  
  Provides a rich library of official plugins covering common functions such as AI, traffic management, and security protection, meeting over 90% of business scenario requirements.

  Focuses on Wasm plugin extensions, ensuring memory safety through sandbox isolation, supporting multiple programming languages, allowing independent version upgrades of plugins, and achieving lossless hot updates of gateway logic.

- **Secure and User-Friendly**
  
  Based on Ingress API and Gateway API standards, provides an out-of-the-box UI console, with WAF protection plugins and IP/Cookie CC protection plugins ready to use.

  Supports interfacing with Let's Encrypt for automatic issuance and renewal of free certificates, and can be deployed outside of K8s, starting with a single Docker command, convenient for individual developers.

- **Stream Processing**

  Supports true complete stream processing of request/response bodies, with Wasm plugins easily customizing the handling of streaming protocol messages such as SSE (Server-Sent Events).

  Significantly reduces memory overhead in high-bandwidth scenarios such as AI services.

## Use Cases

- **AI Gateway**:

  Higress can interface with all domestic and international LLM model providers using a unified protocol, while possessing rich AI observability, multi-model load balancing/fallback, AI token flow control, AI caching, and other capabilities:

  ![](https://img.alicdn.com/imgextra/i1/O1CN01fNnhCp1cV8mYPRFeS_!!6000000003605-0-tps-1080-608.jpg)

- **Kubernetes Ingress Gateway**:

  Higress can serve as the Ingress entry gateway for K8s clusters and is compatible with many K8s Nginx Ingress annotations, allowing for quick and smooth migration from K8s Nginx Ingress to Higress.
  
  Supports the [Gateway API](https://gateway-api.sigs.k8s.io/) standard, enabling users to smoothly migrate from Ingress API to Gateway API.

  Compared to ingress-nginx, resource overhead is significantly reduced, and the speed of route change implementation is improved tenfold:

  ![](https://img.alicdn.com/imgextra/i1/O1CN01bhEtb229eeMNBWmdP_!!6000000008093-2-tps-750-547.png)
  ![](https://img.alicdn.com/imgextra/i1/O1CN01bqRets1LsBGyitj4S_!!6000000001354-2-tps-887-489.png)
  
- **Microservice Gateway**:

  Higress can function as a microservice gateway, capable of interfacing with various types of registry centers to discover service configuration routes, such as Nacos, ZooKeeper, Consul, Eureka, etc.
  
  It is also deeply integrated with microservice technology stacks such as [Dubbo](https://github.com/apache/dubbo), [Nacos](https://github.com/alibaba/nacos), and [Sentinel](https://github.com/alibaba/Sentinel). With the excellent performance of the Envoy C++ gateway kernel, compared to traditional Java-type microservice gateways, it can significantly reduce resource utilization and costs.

  ![](https://img.alicdn.com/imgextra/i4/O1CN01v4ZbCj1dBjePSMZ17_!!6000000003698-0-tps-1613-926.jpg)
  
- **Security Protection Gateway**:

  Higress can serve as a security protection gateway, providing WAF capabilities and supporting various authentication and authorization strategies, such as key-auth, hmac-auth, jwt-auth, basic-auth, oidc, etc.
`},o=function(){return e},r=function(){return[{depth:2,slug:"higress-introduction",text:"Higress Introduction"},{depth:3,slug:"what-is-an-ai-gateway",text:"What is an AI Gateway"},{depth:2,slug:"core-advantages",text:"Core Advantages"},{depth:2,slug:"use-cases",text:"Use Cases"}]},a=l((y,b,w)=>{const{layout:v,...n}=s;return n.file=i,n.url=t,p`${u()}${d(e)}`})});export{a as Content,f as __tla,o as compiledContent,a as default,i as file,s as frontmatter,r as getHeadings,c as rawContent,t as url};
