import{c,__tla as d}from"./astro-component.YcfuVWta.js";import{r as p,m as u,u as h,__tla as g}from"./constant.Cx6UCuye.js";import{__tla as m}from"./astro/assets-service.r1ocst81.js";let t,s,i,r,n,l,o,f=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p>This document is designed for administrators and developers of the HiMarket AI open platform, providing detailed operation guides and best practices.</p>
<p>If you are an <strong>administrator</strong>, this document will guide you through the complete process from importing gateway instances, creating portals, to publishing API products. If you are a <strong>developer</strong>, this document will help you understand how to register an account, subscribe to API products, obtain call credentials, and initiate actual calls.</p>
<p>Through this guide, you can quickly master HiMarket\u2019s core functions and achieve efficient management and convenient use of AI capabilities.</p>
<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#himarket-management-console" referrerpolicy="unsafe-url">HiMarket Management Console</a>
<ul>
<li><a href="#register-administrator" referrerpolicy="unsafe-url">Register Administrator</a></li>
<li><a href="#import-higress-instance" referrerpolicy="unsafe-url">Import Higress Instance</a></li>
<li><a href="#create-portal" referrerpolicy="unsafe-url">Create Portal</a></li>
<li><a href="#create-api-product" referrerpolicy="unsafe-url">Create API Product</a></li>
<li><a href="#link-api" referrerpolicy="unsafe-url">Link API</a></li>
<li><a href="#write-usage-guide" referrerpolicy="unsafe-url">Write Usage Guide</a></li>
<li><a href="#publish-to-portal" referrerpolicy="unsafe-url">Publish to Portal</a></li>
</ul>
</li>
<li><a href="#himarket-developer-portal" referrerpolicy="unsafe-url">HiMarket Developer Portal</a>
<ul>
<li><a href="#access-portal" referrerpolicy="unsafe-url">Access Portal</a></li>
<li><a href="#register-developer" referrerpolicy="unsafe-url">Register Developer</a></li>
<li><a href="#browse-and-subscribe-to-api-products" referrerpolicy="unsafe-url">Browse and Subscribe to API Products</a></li>
<li><a href="#create-consumer" referrerpolicy="unsafe-url">Create Consumer</a></li>
<li><a href="#hichat" referrerpolicy="unsafe-url">HiChat</a></li>
</ul>
</li>
</ul>
<hr>
<h2 id="himarket-management-console">HiMarket Management Console</h2>
<p>The HiMarket management console is designed for administrators and operators to manage AI resources, create portals, publish API products, etc.</p>
<h3 id="register-administrator">Register Administrator</h3>
<p>When accessing the HiMarket management console for the first time, you need to register an administrator account.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Access the management console address: <code dir="auto">http://localhost:5174</code> (using local development environment as an example)</li>
<li>Click the \u201CRegister\u201D button</li>
<li>Fill in administrator information:
<ul>
<li>Username</li>
<li>Password</li>
</ul>
</li>
<li>Click \u201CInitialize\u201D to complete account creation</li>
<li>Log in to the management console using the registered account</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/2caca9f6-5da4-4996-8953-ed6f4647cd12" alt="" referrerpolicy="no-referrer"></p>
</div>
<hr>
<h3 id="import-higress-instance">Import Higress Instance</h3>
<p>Before starting to create API Products, you need to import a Higress gateway instance as the underlying gateway for AI resources.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Log in to the management console</li>
<li>Navigate to [Instance Management] \u2192 [Gateway Instances]</li>
<li>Click the [Import Gateway Instance] button</li>
<li>Select [Higress Gateway]</li>
<li>Fill in Higress instance information:
<ul>
<li>Console Address: Higress console address (e.g., <code dir="auto">http://demo.higress.io</code>)</li>
<li>Username: Higress console username (e.g., <code dir="auto">admin</code>)</li>
<li>Password: Higress console password (e.g., <code dir="auto">admin</code>)</li>
<li>Gateway Address: Higress gateway service address (e.g., <code dir="auto">http://gateway.higress.io</code>), MCP Server and Model use domain names for access by default. If no domain is configured, the Gateway address is used</li>
</ul>
</li>
<li>Click [Import]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/fca47d51-db11-457c-9f06-91342bb1fdfa" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Notes:</strong></p>
<ul>
<li>Supports importing multiple Higress instances</li>
<li>After import, you can view and manage them in the instance list</li>
</ul>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/61dda900-6f5f-419b-8b61-34a6fd1da514" alt="" referrerpolicy="no-referrer"></p>
</div>
<hr>
<h3 id="create-portal">Create Portal</h3>
<p>A Portal is a site for external developers. Administrators can create multiple portals, each with independent configuration and API products.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Navigate to the [Portal] menu</li>
<li>Click the [Create Portal] button</li>
<li>Fill in basic portal information:
<ul>
<li>Portal Name: e.g., <code dir="auto">himarket-demo</code></li>
<li>Portal Description: Brief description of portal purpose</li>
</ul>
</li>
<li>Click [Confirm]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/178d4644-eee2-488e-9cac-f76a7cad9a7f" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Portal Configuration Description:</strong></p>
<p>After creating a portal, click the portal card to enter the detailed configuration page, which mainly includes the following functions:</p>
<h4 id="1-overview">1. Overview</h4>
<ul>
<li>Portal basic information: name, description, login method, approval policy, etc.</li>
<li>Statistics:
<ul>
<li>Number of published API products</li>
<li>Number of registered developers</li>
</ul>
</li>
</ul>
<h4 id="2-products-published-api-products">2. Products (Published API Products)</h4>
<ul>
<li>Manage API products published in the current portal</li>
<li>View product details</li>
<li>Remove or update published products</li>
</ul>
<h4 id="3-developers-developer-management">3. Developers (Developer Management)</h4>
<ul>
<li>View and manage developers registered in this portal</li>
<li>Approve developer registration applications</li>
<li>Manage Consumers associated with developers</li>
<li>View developer subscription status</li>
</ul>
<h4 id="4-security-security-settings">4. Security (Security Settings)</h4>
<p>User login configuration:</p>
<ul>
<li>Username/Password Login: Traditional username and password method (enabled by default)</li>
<li>OIDC Login: Supports third-party identity authentication (such as enterprise SSO)</li>
</ul>
<p>Approval process configuration:</p>
<ul>
<li>Developer Registration Approval: Choose whether to automatically approve developer registration applications
<ul>
<li>Automatic Approval: Developer registration takes effect immediately</li>
<li>Manual Approval: Requires administrator approval in the backend before use</li>
</ul>
</li>
<li>API Product Subscription Approval: Choose whether to automatically approve subscription applications
<ul>
<li>Automatic Approval: Developer subscription requests take effect immediately</li>
<li>Manual Approval: Requires administrator approval before calling API Products</li>
</ul>
</li>
</ul>
<h4 id="5-domain-domain-management">5. Domain (Domain Management)</h4>
<ul>
<li>The system automatically assigns a default domain for each portal</li>
<li>Additional custom domains can be bound (e.g., binding <code dir="auto">localhost</code> for local development)</li>
</ul>
<p><strong>Notes:</strong></p>
<ul>
<li>Domains require self-configuration of DNS resolution or hosts file to point to the himarket-frontend service</li>
<li>Portals use multi-tenant design, identifying different portal instances through domains</li>
<li>For local development, it\u2019s recommended to bind the <code dir="auto">localhost</code> domain for easy testing</li>
<li>For production environments, it\u2019s recommended to configure real domain names and DNS resolution</li>
</ul>
<hr>
<h3 id="create-api-product">Create API Product</h3>
<p>API Product is a core concept of HiMarket. It encapsulates underlying AI capabilities (such as MCP Server, Model, Agent) into standardized API products.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Navigate to the [API Products] menu</li>
<li>Click the [Create API Product] button</li>
<li>Fill in product information:
<ul>
<li>Product Name: e.g., <code dir="auto">demo-api</code></li>
<li>Product Type: Select product type (MCP Server, Model API, Agent API, etc.)</li>
<li>Product Description: Brief description of product features and purpose</li>
<li>Product Category: Select product category, categories can be used for classification and filtering, supports custom categories</li>
<li>Product Icon: Select product icon, can use URL link or upload local file</li>
</ul>
</li>
<li>Special Note: Model API type products can configure model parameters, such as Model name, Max Tokens, Temperature, whether to support internet search, etc. Model parameters are used for debugging models in the HiMarket frontend. If missing, it may cause model call failures</li>
<li>Click [Confirm]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/59f94af9-c28d-4313-b17a-79319bbeda8f" alt="" referrerpolicy="no-referrer"></p>
</div>
<ol start="6">
<li>After successful creation, enter the product details page</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/f10eb08d-3e4e-4c4f-ae8f-e9af04cf1cdf" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Product Status Description:</strong></p>
<p>Newly created API Products have an initial status of <strong>\u201CPending Configuration\u201D</strong>. The following operations need to be completed before publishing:</p>
<ol>
<li><strong>Link API</strong>: Associate the product with actual API resources</li>
<li><strong>Configure Usage Guide</strong>: Write product usage documentation</li>
<li><strong>Publish to Portal</strong>: Publish the product to a specified portal for developer subscription</li>
</ol>
<hr>
<h3 id="link-api">Link API</h3>
<p>After creating an API Product, you need to associate it with actual API resources, establishing a mapping relationship between the product and underlying services.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Enter the API Product details page</li>
<li>Click the [Link API] tab</li>
<li>Select API resource type:
<ul>
<li>MCP Server: From Higress or AI Gateway (Enterprise Higress) MCP service</li>
<li>Model API: From Higress or AI Gateway model service</li>
<li>Agent API: From AI Gateway Agent application</li>
</ul>
</li>
<li>Select the API resource to link from the list. For example, for Model API, link AI routes on Higress</li>
<li>Click [Link]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/e5bc4963-c7b9-4bbd-9a0e-55eb06cc91c5" alt="" referrerpolicy="no-referrer"></p>
</div>
<ol start="7">
<li>After successful linking, the API Product status changes to <strong>\u201CPending Release\u201D</strong>. At this point, the API Product can be published to the Portal. The Link API tab will display API configuration information</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/845935ee-79c4-45dc-9cd0-e49ab840a505" alt="" referrerpolicy="no-referrer"></p>
</div>
<hr>
<h3 id="write-usage-guide">Write Usage Guide</h3>
<p>Write detailed usage guides for API Products to help developers quickly understand and use APIs.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Enter the API Product details page</li>
<li>Click the [Usage Guide] tab</li>
<li>Use the Markdown editor to write usage documentation:
<ul>
<li>API Product Introduction: Features and use cases of the API product</li>
<li>Authentication Method: How to obtain and use credentials</li>
<li>Request Examples: Provide complete request example code</li>
<li>Response Examples: Show API return data format</li>
<li>Error Code Description: List common error codes and handling methods</li>
<li>Best Practices: Usage recommendations and precautions</li>
</ul>
</li>
<li>Supports real-time preview to ensure correct formatting</li>
<li>Click [Save]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/5a35a3ce-4dd3-4644-a7b7-f4ba64c5a387" alt="" referrerpolicy="no-referrer"></p>
</div>
<hr>
<h3 id="publish-to-portal">Publish to Portal</h3>
<p>When the API Product configuration is complete, it can be published to specified portals for developer use.</p>
<p><strong>Operation Steps:</strong></p>
<ol>
<li>Enter the API Product details page</li>
<li>Confirm the product status is <strong>\u201CPending Release\u201D</strong> (API linking completed)</li>
<li>Click the [Publish to Portal] button</li>
<li>Select target portal:
<ul>
<li>Select one or more portals from the portal list</li>
<li>Can be published to multiple portals simultaneously</li>
</ul>
</li>
<li>Click [Publish]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/6f09d6aa-08f0-4eb9-aab1-1295236ba986" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>After Publishing:</strong></p>
<ul>
<li>The product will be immediately displayed in the portal</li>
<li>Developers can browse product details and usage guides</li>
<li>Developers can apply to subscribe to the product</li>
<li>Administrators can view subscription and call status in the backend</li>
</ul>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/dd43e7f5-d490-45bc-a3b1-1ebdb0df66eb" alt="" referrerpolicy="no-referrer"></p>
</div>
<p>At this point, the complete process of an API Product from creation to publication is complete!</p>
<hr>
<h2 id="himarket-developer-portal">HiMarket Developer Portal</h2>
<p>The developer portal is a self-service platform for external developers, where developers can register, browse API products, apply for subscriptions, and initiate calls.</p>
<h3 id="access-portal">Access Portal</h3>
<p>HiMarket portals use <strong>multi-tenant design</strong>, identifying different portal instances through domain names.</p>
<p><strong>Access Methods:</strong></p>
<ol>
<li><strong>Use Default Domain:</strong>
<ul>
<li>Each portal is automatically assigned a default domain</li>
<li>For example: <code dir="auto">portal-68ac4564bdb292ee9261ff4a.api.portal.local</code></li>
<li>Requires DNS resolution or hosts file configuration to point the domain to the himarket-frontend service</li>
</ul>
</li>
<li><strong>Use Custom Domain:</strong>
<ul>
<li>Custom domain bound by administrators in the backend</li>
<li>For example, <code dir="auto">localhost</code> bound for local development</li>
<li>Access: <code dir="auto">http://localhost:5173</code></li>
</ul>
</li>
<li><strong>Use himarket-frontend Service IP:</strong>
<ul>
<li>Using the himarket-frontend service IP will access the \u201CDefault Portal\u201D, which is the first portal created</li>
<li>For local development environment, access <code dir="auto">http://127.0.0.1:5173</code></li>
</ul>
</li>
</ol>
<hr>
<h3 id="register-developer">Register Developer</h3>
<p>Developers need to register an account in the portal first to browse and subscribe to API products.</p>
<p><strong>Registration Steps:</strong></p>
<ol>
<li>Access the portal homepage</li>
<li>Click the [Register] button</li>
<li>Fill in developer information:
<ul>
<li>Username: Unique developer identifier</li>
<li>Password: Set login password</li>
</ul>
</li>
<li>Click [Register] to submit application</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/c5bb8ab7-c55a-4d19-b20f-99bf65ef655c" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Registration Approval:</strong></p>
<p>The status after registration depends on the portal configuration:</p>
<ul>
<li>Automatic Approval Mode: Registration takes effect immediately, can log in directly</li>
<li>Manual Approval Mode: Registration requires administrator approval
<ul>
<li>Cannot log in to portal before approval</li>
<li>Administrators approve in the backend [Developers] menu</li>
</ul>
</li>
</ul>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/4d3743ac-01b3-4770-a1e0-f5a8d0955e4c" alt="" referrerpolicy="no-referrer"></p>
</div>
<p>After approval, you can log in to the portal</p>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/47f51797-b92f-4235-8b70-dd96c0d9c51b" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Notes:</strong></p>
<ul>
<li>Developer accounts for each portal are independent</li>
<li>Need to register separately for different portals</li>
</ul>
<hr>
<h3 id="browse-and-subscribe-to-api-products">Browse and Subscribe to API Products</h3>
<p>After registration and login, developers can browse API products in the portal and apply for subscriptions.</p>
<p><strong>Browse API Products:</strong></p>
<ol>
<li>Log in to the developer portal</li>
<li>Navigate to [Models], [MCP], [Agents], and other product pages</li>
<li>Browse product list:
<ul>
<li>View product names, descriptions, and versions</li>
<li>Filter and search for products of interest</li>
</ul>
</li>
<li>Click product card to view details:
<ul>
<li>Product feature introduction</li>
<li>API Product usage guide</li>
<li>Call example code (if available)</li>
<li>Pricing information (if available)</li>
</ul>
</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/14a0fb9c-0b09-46c1-a6f3-5e6ffd29d3e2" alt="" referrerpolicy="no-referrer"></p>
</div>
<hr>
<h3 id="create-consumer">Create Consumer</h3>
<p>In HiMarket\u2019s design:</p>
<ul>
<li>Developer: Represents user identity, used for login and management</li>
<li>Consumer: Represents call credentials, used for API Product authentication</li>
</ul>
<p>One Developer can create multiple Consumers for different application scenarios (such as development environment, test environment, production environment). Each Developer is automatically assigned a Consumer after registration and supports creating new Consumers.</p>
<p><strong>Creation Steps:</strong></p>
<ol>
<li>Log in to the developer portal</li>
<li>Click the avatar in the upper right corner and navigate to [Consumer Management]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/6af8fd64-7755-40ec-8abd-3158fae59e8f" alt="" referrerpolicy="no-referrer"></p>
</div>
<ol start="3">
<li>Click the [Add Consumer] button</li>
<li>Fill in consumer information:
<ul>
<li>Consumer Name: Used to identify this consumer (e.g., <code dir="auto">my-app-prod</code>)</li>
<li>Description: Brief explanation of purpose (e.g., production environment application)</li>
</ul>
</li>
<li>Click [Submit]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/c3d6cc15-7b10-4f3c-8a67-f5d0a755594e" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>After Successful Creation:</strong></p>
<ul>
<li>The system will generate a set of credentials (such as API Key, Secret)</li>
<li>You can manage and delete created consumers in the list</li>
</ul>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/cf6522af-46e7-43af-828f-80e7b8cbf6fa" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Apply for Product Subscription:</strong></p>
<p>After creating a consumer, you can use the consumer to subscribe to API products:</p>
<ol>
<li>Select the API product to subscribe to</li>
<li>Click the [Subscribe] button on the product details page</li>
<li>Select the Consumer to use</li>
<li>Click [Confirm Subscription]</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/1d6dc5d3-8a1c-4dc4-9843-59f79b33b583" alt="" referrerpolicy="no-referrer"></p>
</div>
<p><strong>Subscription Approval:</strong></p>
<ul>
<li>Automatic Approval: Takes effect immediately after submission, can directly call API Product</li>
<li>Manual Approval: Need to wait for administrator approval</li>
</ul>
<p><strong>Description:</strong></p>
<ul>
<li>Subscription status can be viewed in the [Subscription List] of Consumer details</li>
<li>After successful subscription, you can use the Consumer\u2019s credentials to call the corresponding API Product</li>
<li>You can cancel subscription at any time</li>
</ul>
<hr>
<h3 id="hichat">HiChat</h3>
<p>HiMarket provides the HiChat AI Innovation Center for quickly applying AI resources, such as conversing with models and calling MCP Servers with models.</p>
<p><strong>Call Models and MCP:</strong></p>
<ol>
<li>Log in to the developer portal</li>
<li>Navigate to the [HiChat] page</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/f324e384-845e-4201-9ca4-2ebd3ab75350" alt="" referrerpolicy="no-referrer"></p>
</div>
<ol start="3">
<li>Select the model product to test, you can converse with this model, and during the conversation, you can choose to combine with MCP Server</li>
<li>Note:
<ul>
<li>Models and MCP Servers need to be subscribed to before they can be accessed normally. HiMarket HiChat uses the Developer\u2019s default Consumer by default. You need to use the default Consumer to subscribe to corresponding API Products</li>
<li>Developers can configure the default Consumer in the [Consumer Management] page</li>
</ul>
</li>
<li>Operation Example:
<ul>
<li>Select model and MCP Server</li>
</ul>
</li>
</ol>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/d8b0d691-2dc7-47d7-9b42-c2cf8d43f40c" alt="" referrerpolicy="no-referrer"></p>
</div>
<ul>
<li>Specify and subscribe to MCP Server. Quick subscription will use the default Consumer to execute subscription operations</li>
</ul>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/8088532d-b419-4d33-86d2-23c80edbe8ad" alt="" referrerpolicy="no-referrer"></p>
</div>
<ul>
<li>Converse with model</li>
</ul>
<div align="center">
<p><img src="https://github.com/user-attachments/assets/a396bc08-6d70-47bd-bf75-807486e2c63a" alt="" referrerpolicy="no-referrer"></p>
</div>
<p>At this point, you have successfully completed the full process experience of the HiMarket platform! Thank you for choosing HiMarket! We look forward to seeing you build excellent applications with it.</p>`,r={title:"HiMarket User Guide",description:"HiMarket feature usage details and best practices",date:"2025-12-13",category:"article",keywords:["HiMarket","User Guide","Tutorial"],authors:"Higress Team"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/himarket/himarket-usage.md",o=void 0,l=function(){return`
# HiMarket User Guide

This document is designed for administrators and developers of the HiMarket AI open platform, providing detailed operation guides and best practices.

If you are an **administrator**, this document will guide you through the complete process from importing gateway instances, creating portals, to publishing API products. If you are a **developer**, this document will help you understand how to register an account, subscribe to API products, obtain call credentials, and initiate actual calls.

Through this guide, you can quickly master HiMarket's core functions and achieve efficient management and convenient use of AI capabilities.

## Table of Contents
+ [HiMarket Management Console](#himarket-management-console)
    - [Register Administrator](#register-administrator)
    - [Import Higress Instance](#import-higress-instance)
    - [Create Portal](#create-portal)
    - [Create API Product](#create-api-product)
    - [Link API](#link-api)
    - [Write Usage Guide](#write-usage-guide)
    - [Publish to Portal](#publish-to-portal)
+ [HiMarket Developer Portal](#himarket-developer-portal)
    - [Access Portal](#access-portal)
    - [Register Developer](#register-developer)
    - [Browse and Subscribe to API Products](#browse-and-subscribe-to-api-products)
    - [Create Consumer](#create-consumer)
    - [HiChat](#hichat)

---

## HiMarket Management Console
The HiMarket management console is designed for administrators and operators to manage AI resources, create portals, publish API products, etc.

### Register Administrator
When accessing the HiMarket management console for the first time, you need to register an administrator account.

**Operation Steps:**

1. Access the management console address: \`http://localhost:5174\` (using local development environment as an example)
2. Click the "Register" button
3. Fill in administrator information:
    - Username
    - Password
4. Click "Initialize" to complete account creation
5. Log in to the management console using the registered account

<div align="center">

![](https://github.com/user-attachments/assets/2caca9f6-5da4-4996-8953-ed6f4647cd12)

</div>

---

### Import Higress Instance
Before starting to create API Products, you need to import a Higress gateway instance as the underlying gateway for AI resources.

**Operation Steps:**

1. Log in to the management console
2. Navigate to [Instance Management] \u2192 [Gateway Instances]
3. Click the [Import Gateway Instance] button
4. Select [Higress Gateway]
5. Fill in Higress instance information:
    - Console Address: Higress console address (e.g., \`http://demo.higress.io\`)
    - Username: Higress console username (e.g., \`admin\`)
    - Password: Higress console password (e.g., \`admin\`)
    - Gateway Address: Higress gateway service address (e.g., \`http://gateway.higress.io\`), MCP Server and Model use domain names for access by default. If no domain is configured, the Gateway address is used
6. Click [Import]

<div align="center">

![](https://github.com/user-attachments/assets/fca47d51-db11-457c-9f06-91342bb1fdfa)

</div>

**Notes:**

+ Supports importing multiple Higress instances
+ After import, you can view and manage them in the instance list

<div align="center">

![](https://github.com/user-attachments/assets/61dda900-6f5f-419b-8b61-34a6fd1da514)

</div>

---

### Create Portal
A Portal is a site for external developers. Administrators can create multiple portals, each with independent configuration and API products.

**Operation Steps:**

1. Navigate to the [Portal] menu
2. Click the [Create Portal] button
3. Fill in basic portal information:
    - Portal Name: e.g., \`himarket-demo\`
    - Portal Description: Brief description of portal purpose
4. Click [Confirm]

<div align="center">

![](https://github.com/user-attachments/assets/178d4644-eee2-488e-9cac-f76a7cad9a7f)

</div>

**Portal Configuration Description:**

After creating a portal, click the portal card to enter the detailed configuration page, which mainly includes the following functions:

#### 1. Overview
+ Portal basic information: name, description, login method, approval policy, etc.
+ Statistics:
    - Number of published API products
    - Number of registered developers

#### 2. Products (Published API Products)
+ Manage API products published in the current portal
+ View product details
+ Remove or update published products

#### 3. Developers (Developer Management)
+ View and manage developers registered in this portal
+ Approve developer registration applications
+ Manage Consumers associated with developers
+ View developer subscription status

#### 4. Security (Security Settings)
User login configuration:

+ Username/Password Login: Traditional username and password method (enabled by default)
+ OIDC Login: Supports third-party identity authentication (such as enterprise SSO)

Approval process configuration:

+ Developer Registration Approval: Choose whether to automatically approve developer registration applications
    - Automatic Approval: Developer registration takes effect immediately
    - Manual Approval: Requires administrator approval in the backend before use
+ API Product Subscription Approval: Choose whether to automatically approve subscription applications
    - Automatic Approval: Developer subscription requests take effect immediately
    - Manual Approval: Requires administrator approval before calling API Products

#### 5. Domain (Domain Management)
+ The system automatically assigns a default domain for each portal
+ Additional custom domains can be bound (e.g., binding \`localhost\` for local development)

**Notes:**

+ Domains require self-configuration of DNS resolution or hosts file to point to the himarket-frontend service
+ Portals use multi-tenant design, identifying different portal instances through domains
+ For local development, it's recommended to bind the \`localhost\` domain for easy testing
+ For production environments, it's recommended to configure real domain names and DNS resolution

---

### Create API Product
API Product is a core concept of HiMarket. It encapsulates underlying AI capabilities (such as MCP Server, Model, Agent) into standardized API products.

**Operation Steps:**

1. Navigate to the [API Products] menu
2. Click the [Create API Product] button
3. Fill in product information:
    - Product Name: e.g., \`demo-api\`
    - Product Type: Select product type (MCP Server, Model API, Agent API, etc.)
    - Product Description: Brief description of product features and purpose
    - Product Category: Select product category, categories can be used for classification and filtering, supports custom categories
    - Product Icon: Select product icon, can use URL link or upload local file
4. Special Note: Model API type products can configure model parameters, such as Model name, Max Tokens, Temperature, whether to support internet search, etc. Model parameters are used for debugging models in the HiMarket frontend. If missing, it may cause model call failures
5. Click [Confirm]

<div align="center">

![](https://github.com/user-attachments/assets/59f94af9-c28d-4313-b17a-79319bbeda8f)

</div>

6. After successful creation, enter the product details page

<div align="center">

![](https://github.com/user-attachments/assets/f10eb08d-3e4e-4c4f-ae8f-e9af04cf1cdf)

</div>

**Product Status Description:**

Newly created API Products have an initial status of **"Pending Configuration"**. The following operations need to be completed before publishing:

1. **Link API**: Associate the product with actual API resources
2. **Configure Usage Guide**: Write product usage documentation
3. **Publish to Portal**: Publish the product to a specified portal for developer subscription

---

### Link API
After creating an API Product, you need to associate it with actual API resources, establishing a mapping relationship between the product and underlying services.

**Operation Steps:**

1. Enter the API Product details page
2. Click the [Link API] tab
3. Select API resource type:
    - MCP Server: From Higress or AI Gateway (Enterprise Higress) MCP service
    - Model API: From Higress or AI Gateway model service
    - Agent API: From AI Gateway Agent application
4. Select the API resource to link from the list. For example, for Model API, link AI routes on Higress
5. Click [Link]

<div align="center">

![](https://github.com/user-attachments/assets/e5bc4963-c7b9-4bbd-9a0e-55eb06cc91c5)

</div>

7. After successful linking, the API Product status changes to **"Pending Release"**. At this point, the API Product can be published to the Portal. The Link API tab will display API configuration information

<div align="center">

![](https://github.com/user-attachments/assets/845935ee-79c4-45dc-9cd0-e49ab840a505)

</div>

---

### Write Usage Guide
Write detailed usage guides for API Products to help developers quickly understand and use APIs.

**Operation Steps:**

1. Enter the API Product details page
2. Click the [Usage Guide] tab
3. Use the Markdown editor to write usage documentation:
    - API Product Introduction: Features and use cases of the API product
    - Authentication Method: How to obtain and use credentials
    - Request Examples: Provide complete request example code
    - Response Examples: Show API return data format
    - Error Code Description: List common error codes and handling methods
    - Best Practices: Usage recommendations and precautions
4. Supports real-time preview to ensure correct formatting
5. Click [Save]

<div align="center">

![](https://github.com/user-attachments/assets/5a35a3ce-4dd3-4644-a7b7-f4ba64c5a387)

</div>

---

### Publish to Portal
When the API Product configuration is complete, it can be published to specified portals for developer use.

**Operation Steps:**

1. Enter the API Product details page
2. Confirm the product status is **"Pending Release"** (API linking completed)
3. Click the [Publish to Portal] button
4. Select target portal:
    - Select one or more portals from the portal list
    - Can be published to multiple portals simultaneously
5. Click [Publish]

<div align="center">

![](https://github.com/user-attachments/assets/6f09d6aa-08f0-4eb9-aab1-1295236ba986)

</div>

**After Publishing:**

+ The product will be immediately displayed in the portal
+ Developers can browse product details and usage guides
+ Developers can apply to subscribe to the product
+ Administrators can view subscription and call status in the backend

<div align="center">

![](https://github.com/user-attachments/assets/dd43e7f5-d490-45bc-a3b1-1ebdb0df66eb)

</div>

At this point, the complete process of an API Product from creation to publication is complete!

---

## HiMarket Developer Portal
The developer portal is a self-service platform for external developers, where developers can register, browse API products, apply for subscriptions, and initiate calls.

### Access Portal
HiMarket portals use **multi-tenant design**, identifying different portal instances through domain names.

**Access Methods:**

1. **Use Default Domain:**
    - Each portal is automatically assigned a default domain
    - For example: \`portal-68ac4564bdb292ee9261ff4a.api.portal.local\`
    - Requires DNS resolution or hosts file configuration to point the domain to the himarket-frontend service
2. **Use Custom Domain:**
    - Custom domain bound by administrators in the backend
    - For example, \`localhost\` bound for local development
    - Access: \`http://localhost:5173\`
3. **Use himarket-frontend Service IP:**
    - Using the himarket-frontend service IP will access the "Default Portal", which is the first portal created
    - For local development environment, access \`http://127.0.0.1:5173\`

---

### Register Developer
Developers need to register an account in the portal first to browse and subscribe to API products.

**Registration Steps:**

1. Access the portal homepage
2. Click the [Register] button
3. Fill in developer information:
    - Username: Unique developer identifier
    - Password: Set login password
4. Click [Register] to submit application

<div align="center">

![](https://github.com/user-attachments/assets/c5bb8ab7-c55a-4d19-b20f-99bf65ef655c)

</div>

**Registration Approval:**

The status after registration depends on the portal configuration:

+ Automatic Approval Mode: Registration takes effect immediately, can log in directly
+ Manual Approval Mode: Registration requires administrator approval
    - Cannot log in to portal before approval
    - Administrators approve in the backend [Developers] menu

<div align="center">

![](https://github.com/user-attachments/assets/4d3743ac-01b3-4770-a1e0-f5a8d0955e4c)

</div>

After approval, you can log in to the portal

<div align="center">

![](https://github.com/user-attachments/assets/47f51797-b92f-4235-8b70-dd96c0d9c51b)

</div>

**Notes:**

+ Developer accounts for each portal are independent
+ Need to register separately for different portals

---

### Browse and Subscribe to API Products
After registration and login, developers can browse API products in the portal and apply for subscriptions.

**Browse API Products:**

1. Log in to the developer portal
2. Navigate to [Models], [MCP], [Agents], and other product pages
3. Browse product list:
    - View product names, descriptions, and versions
    - Filter and search for products of interest
4. Click product card to view details:
    - Product feature introduction
    - API Product usage guide
    - Call example code (if available)
    - Pricing information (if available)

<div align="center">

![](https://github.com/user-attachments/assets/14a0fb9c-0b09-46c1-a6f3-5e6ffd29d3e2)

</div>

---

### Create Consumer
In HiMarket's design:

+ Developer: Represents user identity, used for login and management
+ Consumer: Represents call credentials, used for API Product authentication

One Developer can create multiple Consumers for different application scenarios (such as development environment, test environment, production environment). Each Developer is automatically assigned a Consumer after registration and supports creating new Consumers.

**Creation Steps:**

1. Log in to the developer portal
2. Click the avatar in the upper right corner and navigate to [Consumer Management]

<div align="center">

![](https://github.com/user-attachments/assets/6af8fd64-7755-40ec-8abd-3158fae59e8f)

</div>

3. Click the [Add Consumer] button
4. Fill in consumer information:
    - Consumer Name: Used to identify this consumer (e.g., \`my-app-prod\`)
    - Description: Brief explanation of purpose (e.g., production environment application)
5. Click [Submit]

<div align="center">

![](https://github.com/user-attachments/assets/c3d6cc15-7b10-4f3c-8a67-f5d0a755594e)

</div>

**After Successful Creation:**

+ The system will generate a set of credentials (such as API Key, Secret)
+ You can manage and delete created consumers in the list

<div align="center">

![](https://github.com/user-attachments/assets/cf6522af-46e7-43af-828f-80e7b8cbf6fa)

</div>

**Apply for Product Subscription:**

After creating a consumer, you can use the consumer to subscribe to API products:

1. Select the API product to subscribe to
2. Click the [Subscribe] button on the product details page
3. Select the Consumer to use
4. Click [Confirm Subscription]

<div align="center">

![](https://github.com/user-attachments/assets/1d6dc5d3-8a1c-4dc4-9843-59f79b33b583)

</div>

**Subscription Approval:**

+ Automatic Approval: Takes effect immediately after submission, can directly call API Product
+ Manual Approval: Need to wait for administrator approval

**Description:**

+ Subscription status can be viewed in the [Subscription List] of Consumer details
+ After successful subscription, you can use the Consumer's credentials to call the corresponding API Product
+ You can cancel subscription at any time

---

### HiChat
HiMarket provides the HiChat AI Innovation Center for quickly applying AI resources, such as conversing with models and calling MCP Servers with models.

**Call Models and MCP:**

1. Log in to the developer portal
2. Navigate to the [HiChat] page

<div align="center">

![](https://github.com/user-attachments/assets/f324e384-845e-4201-9ca4-2ebd3ab75350)

</div>

3. Select the model product to test, you can converse with this model, and during the conversation, you can choose to combine with MCP Server
4. Note:
    - Models and MCP Servers need to be subscribed to before they can be accessed normally. HiMarket HiChat uses the Developer's default Consumer by default. You need to use the default Consumer to subscribe to corresponding API Products
    - Developers can configure the default Consumer in the [Consumer Management] page
5. Operation Example:
    - Select model and MCP Server

<div align="center">

![](https://github.com/user-attachments/assets/d8b0d691-2dc7-47d7-9b42-c2cf8d43f40c)

</div>

+ Specify and subscribe to MCP Server. Quick subscription will use the default Consumer to execute subscription operations

<div align="center">

![](https://github.com/user-attachments/assets/8088532d-b419-4d33-86d2-23c80edbe8ad)

</div>

+ Converse with model

<div align="center">

![](https://github.com/user-attachments/assets/a396bc08-6d70-47bd-bf75-807486e2c63a)

</div>

At this point, you have successfully completed the full process experience of the HiMarket platform! Thank you for choosing HiMarket! We look forward to seeing you build excellent applications with it.



`},s=function(){return e},n=function(){return[{depth:2,slug:"table-of-contents",text:"Table of Contents"},{depth:2,slug:"himarket-management-console",text:"HiMarket Management Console"},{depth:3,slug:"register-administrator",text:"Register Administrator"},{depth:3,slug:"import-higress-instance",text:"Import Higress Instance"},{depth:3,slug:"create-portal",text:"Create Portal"},{depth:4,slug:"1-overview",text:"1. Overview"},{depth:4,slug:"2-products-published-api-products",text:"2. Products (Published API Products)"},{depth:4,slug:"3-developers-developer-management",text:"3. Developers (Developer Management)"},{depth:4,slug:"4-security-security-settings",text:"4. Security (Security Settings)"},{depth:4,slug:"5-domain-domain-management",text:"5. Domain (Domain Management)"},{depth:3,slug:"create-api-product",text:"Create API Product"},{depth:3,slug:"link-api",text:"Link API"},{depth:3,slug:"write-usage-guide",text:"Write Usage Guide"},{depth:3,slug:"publish-to-portal",text:"Publish to Portal"},{depth:2,slug:"himarket-developer-portal",text:"HiMarket Developer Portal"},{depth:3,slug:"access-portal",text:"Access Portal"},{depth:3,slug:"register-developer",text:"Register Developer"},{depth:3,slug:"browse-and-subscribe-to-api-products",text:"Browse and Subscribe to API Products"},{depth:3,slug:"create-consumer",text:"Create Consumer"},{depth:3,slug:"hichat",text:"HiChat"}]},t=c((b,v,P)=>{const{layout:A,...a}=r;return a.file=i,a.url=o,p`${u()}${h(e)}`})});export{t as Content,f as __tla,s as compiledContent,t as default,i as file,r as frontmatter,n as getHeadings,l as rawContent,o as url};
