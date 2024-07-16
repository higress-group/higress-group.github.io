const e="latest/en/overview/faq.md",t="docs",s="latest/en/overview/faq",a=`
# FAQ

<a href="#1" target="_self">1. Is Higress suitable for production system now? </a>
<br/>

<a href="#2" target="_self">2. What is the difference between Higress and Envoy Gateway? </a>
<br/>

<a href="#3" target="_self">3. What are the differences between Higress and Tengine, another open source gateway of Alibaba? </a>
<br/>

<a href="#4" target="_self">4. What is the relationship between the MSE cloud-native gateway on Higress Alibaba Cloud? Is it an open source project incubated based on this? </a>
<br/>

<a href="#5" target="_self">5. Higress combines traffic gateway, microservice gateway and security gateway into one. Is this practice common in the industry? Is it a trend? </a>
<br/>

<a href="#6" target="_self">6. Higress has customized the upstream. Is there a problem that it cannot enjoy community benefits and has to bear ecological follow-up? </a>
<br/>

<a href="#7" target="_self">7. Higress supports Nacos service discovery. Is there any plan to support Consul? </a>
<br/>

<a href="#8" target="_self">8. Does Higress have an offline deployment version? </a>
<br/>

<a href="#9" target="_self">9. Can Higress be separated from the istio environment and run only based on Docker? </a>
<br/>

<a href="#10" target="_self">10. In addition to running on K8s, does Higress support running on virtual machines and physical machines? </a>
<br/>

<a href="#11" target="_self">11. Will Higress Dashboard be open source? </a>
<br/>

<a href="#12" target="_self">12. Does the current open source version support the Waf function, and is there any relevant best practice? </a>
<br/>

<a href="#13" target="_self">13. Does Higress support auto-scaling, and is the gateway stateless? </a>
<br/>

<a href="#14" target="_self">14. Does Higress have a roadmap? </a>
<br/>

<a href="#15" target="_self">15. How to join the Higress community to contribute, can't wait. </a>
<br/>

***********
<h3 id='1'>Q: Is Higress suitable for production system now? </h3>

**A:**
It is recommended to upgrade to v1.0.0 and above

For details, please refer to our [Roadmap](./roadmap.md)

***********

<h3 id='2'>Q: What is the difference between Higress and Envoy Gateway? </h3>

**A:**
Higress is implemented and extended based on Envoy, and follows the Gateway API standard like Envoy Gateway. The difference is that it also provides:

- Waf protection, authentication and authentication and other security plug-in capabilities
 
- Service management plug-in capabilities such as multiple registries, protocol conversion, and current limiting and downgrading. For example, for microservice users who traditionally use Dubbo, they want to use native RPC to expose external services, but usually the services that provide external access mainly use HTTP. To help Dubbo users reduce the development cost of service exposure, Higress provides the HTTP-to-Dubbo protocol function, and provides users with a white-screen configuration method through the Console. After using it, a customer reported that "this is the industry's most complete HTTP-to-Dubbo protocol." Function.
 
- Support WASM, Lua and other custom plug-ins, such as Nginx users, we will also support out-of-process plug-ins to meet the demands of multi-language users, especially Java users who want to expand the gateway because the Java community's support for WebAssembly is not perfect at this stage demands.
 
***********

<h3 id='3'>Q: What are the differences between Higress and Tengine, another open source gateway of Alibaba? </h3>

**A:**

Tengine is implemented based on Nginx, extended by Lua, and Higress is based on istio + Envoy, extended by WASM. The technical architecture is different, and developers can choose according to business scenarios. Higress already supports the ability of smooth migration of Nginx Ingress annotations, which meets the needs of some users who expect to migrate to Higress but do not want to reconfigure the gateway. Higress can be used as a unified access gateway while enjoying the bonus of Ingress.
 
***********

<h3 id='4'>Q: What is the relationship between the MSE cloud-native gateway on Higress Alibaba Cloud? Is it an open source project incubated based on this? </h3>

**A:**

The MSE cloud-native gateway is a commercial version of Higress, with differences in capabilities, mainly reflected in performance, stability, ease of use, and security, because these are very dependent on the infrastructure capabilities on the cloud, and detailed resources are still available. After sorting, it will be displayed on the product page and document page of MSE in the future, which is convenient for everyone to choose. Of course, Higress is in the process of evolution. We will define with the community which capabilities on the MSE cloud-native gateway are open sourced, and we will also plan a plug-in market for open source.

***********

<h3 id='5'>Q: Higress combines traffic gateway, microservice gateway, and security gateway into one. Is this practice common in the industry? Is it a trend? </h3>

**A:**

Traffic gateways, microservice gateways, and security gateways have always been used in the industry. Most of the deployment forms use independent cluster deployments. In the context of K8s-led containerization, K8s standardized ingress gateways through Ingress. Traditional traffic gateways, microservices The independent deployment mode of gateway and security gateway appears to be high in deployment cost and complicated in operation and maintenance under K8s. From the perspective of users, only a highly integrated gateway with rich functions is enough. Based on this, we judge that highly integrated gateway will be a future development trend.

***********

<h3 id='6'>Q: Higress has customized the upstream. Is there a problem of not being able to enjoy community benefits and being burdened with ecological follow-up? </h3>

**A:**

The Higress core code basically adopts pluggable Filter extensions, and new functions also follow the principle of scalability as much as possible. In order to maintain its own stability in the upstream follow-up, it will not immediately follow up with the latest version. For example, APISIX and Kong kernels are based on Nginx , but they are still developing very well, and the facts also show that upstream follow-up will not become an obstacle to project development.

***********

<h3 id='7'>Q: Higress supports Nacos service discovery, is there any plan to support Consul? </h3>

**A:**

Expected to be available in version 1.2.0

***********

<h3 id='8'>Q: Does Higress have an offline deployment version? </h3>

**A:**

There is no existing one, you need to build it yourself. Currently, all Docker images are provided and can be pulled and used by yourself.

***********

<h3 id='9'>Q: Can Higress be separated from the istio environment and run only based on Docker? </h3>

**A:**

Already supported, you can see it here: https://higress.io/en-us/docs/user/quickstart#environment-2-use-in-docker-compose-without-k8s

***********

<h3 id='10'>Q: In addition to running on K8s, does Higress support running on virtual machines and physical machines? </h3>

**A:**

Not yet supported, open source will use Nacos for configuration management to support this requirement.

You can also consider using [Higress Enterprise Edition] (https://www.aliyun.com/product/aliware/mse?spm=higress-website.topbar.0.0.0), this mode Higress is fully managed, no need to care about Higress Deployment and operation and maintenance, can directly connect to the back-end services deployed on virtual machines and physical machines.

***********

<h3 id='11'>Q: Will Higress Dashboard be open source? </h3>

**A:**

Already open source: https://github.com/higress-group/higress-console

***********

<h3 id='12'>Q: Does the current open source version support the Waf function, and is there any relevant best practice? </h3>

**A:**

Supported, you can read this document: https://higress.io/zh-cn/docs/user/waf/

***********

<h3 id='13'>Q: Does Higress support auto-scaling, and is the gateway stateless? </h3>

**A:**

Higress is based on K8s HPA and supports elastic scaling. The gateway is stateless and is a deployment.

***********

<h3 id='14'>Q: Does Higress have a roadmap? </h3>

**A:**

Please refer to [Roadmap](./roadmap.md)

***********

<h3 id='15'>Q: How to join the Higress community to contribute, I can't wait </h3>

**A:**

We welcome everyone to participate in the construction of our project in various forms, including but not limited to:

- Architecture design
- Modular design
- Code
- Bug Fixes
- Demo sample
- Documentation, websites and translations
 
For details on how to participate, please refer to [Developer Guide](../developers/guide_dev.md) on our official website or contact higress@googlegroups.com.
In fact, we are not limited to the form of contribution. Every issue raised by a developer, whether it is a Bug Report, improvement suggestion or even a question consultation, represents attention and help to the project. I hope that the Higress project will grow healthily with the community and become an excellent solution in the field of cloud-native gateways.

***********
`,o={title:"Higress FAQ",description:"Higress FAQ.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/overview/faq.md",rawData:void 0};export{i as _internal,a as body,t as collection,o as data,e as id,s as slug};
