import{c as u,__tla as p}from"./astro-component.CXlaF79K.js";import{r as l,m,u as g,__tla as d}from"./constant.wvel8VgE.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let t,i,o,s,a,c,r,y=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<p>Aliyun ComputeNest is an open PaaS platform for service providers and users that provides software delivery, deployment, and operation process standardization capabilities. It supports the integration of software and resources for one-stop delivery, enabling truly out-of-the-box software usage.
Through Aliyun ComputeNest, a one-click deployment solution for Higress is provided, with support for visual configuration parameters for quick deployment of Higress.\u3002</p>
<blockquote>
<p><strong>Note</strong>
This quick deployment solution is currently based on Docker Compose deployment, and will support cloud-native deployment based on Helm in the future.</p>
</blockquote>
<h2 id="deployment-steps">Deployment steps</h2>
<ul>
<li>
<p>Click the deployment link to enter the service instance deployment page\u3002</p>
<p><a href="https://computenest.console.aliyun.com/service/instance/create/default?type=user&#x26;ServiceName=Higress%E7%A4%BE%E5%8C%BA%E7%89%88" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><img src="https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest-en.svg" alt="Deploy on AlibabaCloud ComputeNest" referrerpolicy="no-referrer"></a></p>
</li>
<li>
<p>According to the interface prompt, fill in the parameters to complete the deployment.
Select a resource type and configure an ECS instance password..
<img src="https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img1.jpg" alt="image" referrerpolicy="no-referrer">
Configure the Nacos service. If you do not have an independently deployed Nacos service, you can use the built-in Nacos service.
<img src="https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img2.jpg" alt="image" referrerpolicy="no-referrer">
If the Nacos service is deployed independently, set the IP address of the Nacos service. If authentication is enabled for Nacos, enter the username and password.
<img src="https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img3.png" alt="image" referrerpolicy="no-referrer">
Finally, configure the zone. You can create a new VPC or use an existing VPC.
<img src="https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img4.png" alt="image" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>After the service instance is created, go to the service instance details page. On the Overview page, you can obtain the login information of the Higress.
<img src="https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img5.png" alt="image" referrerpolicy="no-referrer">
<img src="https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img6.png" alt="image" referrerpolicy="no-referrer"></p>
</li>
</ul>`,s={title:"Rapid deployment through Aliyun ComputeNest",keywords:["deploy","docker compose","docker","ops","aliyun","computenest"],description:"How to Use Aliyun ComputeNest to Rapidly Deploy Higress.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-docs/current/ops/deploy-by-aliyun-computenest.md"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/deploy-by-aliyun-computenest.md",r=void 0,c=function(){return`
# Rapid deployment through Aliyun ComputeNest

Aliyun ComputeNest is an open PaaS platform for service providers and users that provides software delivery, deployment, and operation process standardization capabilities. It supports the integration of software and resources for one-stop delivery, enabling truly out-of-the-box software usage.
Through Aliyun ComputeNest, a one-click deployment solution for Higress is provided, with support for visual configuration parameters for quick deployment of Higress.\u3002

> **Note**
> This quick deployment solution is currently based on Docker Compose deployment, and will support cloud-native deployment based on Helm in the future.

## Deployment steps
- Click the deployment link to enter the service instance deployment page\u3002

  [![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest-en.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress\u793E\u533A\u7248)

- According to the interface prompt, fill in the parameters to complete the deployment.
  Select a resource type and configure an ECS instance password..
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img1.jpg)
  Configure the Nacos service. If you do not have an independently deployed Nacos service, you can use the built-in Nacos service.
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img2.jpg)
  If the Nacos service is deployed independently, set the IP address of the Nacos service. If authentication is enabled for Nacos, enter the username and password.
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img3.png)
  Finally, configure the zone. You can create a new VPC or use an existing VPC.
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img4.png)
- After the service instance is created, go to the service instance details page. On the Overview page, you can obtain the login information of the Higress.
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img5.png)
  ![image](https://raw.githubusercontent.com/aliyun-computenest/quickstart-higress/main/docs/img6.png)



`},i=function(){return e},a=function(){return[{depth:2,slug:"deployment-steps",text:"Deployment steps"}]},t=u((f,v,b)=>{const{layout:w,...n}=s;return n.file=o,n.url=r,l`${m()}${g(e)}`})});export{t as Content,y as __tla,i as compiledContent,t as default,o as file,s as frontmatter,a as getHeadings,c as rawContent,r as url};
