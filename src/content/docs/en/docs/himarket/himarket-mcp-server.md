---
title: "HiMarket MCP Server Management Guide"
description: "Complete guide for creating, registering, importing, deploying, and using MCP Servers in HiMarket"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "MCP Server", "MCP", "Management Guide", "Tutorial"]
authors: "Higress Team"
---

# HiMarket MCP Server Management Guide

This document is designed for administrators and developers of the HiMarket AI open platform, providing a complete operation guide for MCP Server management.

If you are an **administrator**, this document will guide you through the full process of creating, registering, importing, configuring tools, deploying sandboxes, and publishing MCP Servers. If you are a **developer**, this document will help you understand how to browse the MCP marketplace, subscribe to MCP Servers, use them in HiChat, and register your own MCP Servers.

## Table of Contents

+ [MCP Server Overview](#mcp-server-overview)
+ [Administrator Operations](#administrator-operations)
    - [Create an MCP Server Product](#create-an-mcp-server-product)
    - [Manually Register an MCP Server](#manually-register-an-mcp-server)
    - [Import MCP Server from Nacos](#import-mcp-server-from-nacos)
    - [Batch Import from Vendors](#batch-import-from-vendors)
    - [Refresh Tool List](#refresh-tool-list)
    - [Edit Service Introduction and Tool Configuration](#edit-service-introduction-and-tool-configuration)
    - [Sandbox Deployment](#sandbox-deployment)
    - [Publish to Portal](#publish-to-portal)
+ [Developer Operations](#developer-operations)
    - [Browse MCP Marketplace](#browse-mcp-marketplace)
    - [Subscribe to MCP Server](#subscribe-to-mcp-server)
    - [Use MCP Server in HiChat](#use-mcp-server-in-hichat)
    - [Register Your Own MCP Server](#register-your-own-mcp-server)
+ [API to MCP Conversion](#api-to-mcp-conversion)

---

## MCP Server Overview

MCP (Model Context Protocol) is a standardized protocol for connecting AI models with external tools and data sources. An MCP Server is the server-side implementation of this protocol, exposing callable tools to AI models, enabling them to perform operations such as searching, querying databases, and calling external APIs.

In HiMarket, MCP Servers are managed as a type of API Product, providing the following core capabilities:

+ **Unified Hosting**: Supports multiple onboarding methods including manual registration, Nacos import, and batch import from vendors
+ **Tool Management**: Automatically discovers and refreshes the tool list provided by MCP Servers, with support for manual editing of tool configurations
+ **Sandbox Deployment**: Provides sandbox environments for MCP Servers with one-click deployment and management
+ **Marketplace Publishing**: Publishes MCP Servers to the developer portal for browsing and subscription
+ **HiChat Integration**: Developers can select MCP Servers in HiChat to use alongside models during conversations
+ **API to MCP Conversion**: Supports automatic conversion of existing REST APIs (OpenAPI specification) into MCP Servers

MCP Servers support two transport protocols:
+ **SSE (Server-Sent Events)**: HTTP-based unidirectional streaming
+ **Streamable HTTP**: HTTP-based bidirectional streaming

---

## Administrator Operations

### Create an MCP Server Product

MCP Servers are managed as API Products in HiMarket. The first step to creating an MCP Server is to create an API Product of type MCP Server.

**Operation Steps:**

1. Log in to the management console
2. Navigate to the **API Products** menu
3. Click the **Create API Product** button
4. Fill in the product information:
    - Product Name: e.g., `my-mcp-server`
    - Product Type: Select **MCP Server**
    - Product Description: Briefly describe the MCP Server's functionality and purpose
    - Product Category: Select or customize a category for classification and filtering
    - Product Icon: Provide an icon URL or upload a local file
5. Click **Confirm**



After successful creation, you will enter the product detail page with an initial status of **"Pending Configuration"**. Next, you need to configure the MCP Server information for this product.

---

### Manually Register an MCP Server

If you already have a running MCP Server, you can onboard it to HiMarket through manual registration.

**Operation Steps:**

1. Navigate to the API Product detail page of the MCP Server type product
2. Click the **MCP Configuration** tab
3. Click the **Register MCP Server** button
4. Fill in the MCP Server basic information:

| Field | Description | Example |
|-------|-------------|---------|
| MCP Name | Must start with a lowercase letter, containing only lowercase letters, digits, and hyphens, up to 63 characters | `my-weather-mcp` |
| Display Name | The name displayed on the portal | `Weather Query MCP` |
| Description | Functional description of the MCP Server | `Provides global weather query tools` |
| Protocol Type | Select **SSE** or **Streamable HTTP** | SSE |
| Connection Address | The MCP Server endpoint address | `https://my-mcp-server.example.com/sse` |

5. Optional fields:
    - Repository URL: Source code repository URL
    - Tags: Tags for classification and search
    - Icon: MCP Server icon
    - Extra Parameters: Additional parameter definitions required by the MCP Server
    - Service Introduction: Markdown-formatted service introduction
6. Click **Save**



**Notes:**

+ Upon successful registration, the system automatically creates MCP metadata and product association
+ The product status will change to **"Pending Publication"**
+ You can continue configuring the tool list, service introduction, and other information

---

### Import MCP Server from Nacos

HiMarket supports importing MCP Servers from the Nacos registry, suitable for MCP services already registered in Nacos.

**Prerequisites:**

+ A Nacos instance has been imported in the management console (**Instance Management** → **Nacos Instances**)
+ MCP Servers are registered in Nacos

**Operation Steps:**

1. Navigate to the API Product detail page of the MCP Server type product
2. Click the **Link API** tab
3. Select the API resource type as **MCP Server**
4. Select the source as **Nacos**
5. Choose the MCP Server to import from the list
6. Click **Link**



**Notes:**

+ The import process automatically retrieves MCP Server configuration from Nacos, including the tool list, connection address, etc.
+ After import, you can view and edit the configuration on the **MCP Configuration** page

---

### Batch Import from Vendors

HiMarket supports batch importing MCP Servers from external vendors. Currently supported vendors include:

+ **ModelScope**: Import from the ModelScope community's MCP Server catalog
+ **MCP Registry**: Import from the official MCP Registry

**Operation Steps:**

1. Log in to the management console
2. Navigate to the **MCP Vendor Import** page
3. Select the vendor type (ModelScope / MCP Registry)
4. Browse or search the available MCP Server list:
    - Keyword search is supported
    - Pagination is supported
5. Select the MCP Servers to import
6. Click **Batch Import**



**Notes:**

+ Batch import automatically creates a corresponding API Product and MCP metadata for each MCP Server
+ Import results display the count and details of successes and failures
+ Imported MCP Servers default to draft status and need to be published manually

---

### Refresh Tool List

After an MCP Server is registered, administrators can refresh the tool list. The system will automatically connect to the MCP Server and retrieve the latest tool definitions.

**Operation Steps:**

1. Navigate to the MCP Server's API Product detail page
2. Click the **MCP Configuration** tab
3. Locate the target MCP Server
4. Click the **Refresh Tool List** button
5. The system will connect to the MCP Server and retrieve the latest tool list



**Notes:**

+ The refresh operation establishes an actual connection to the MCP Server's service address
+ If the connection fails, an error message will be returned
+ After refreshing, you can view and edit the tool definitions in the tool configuration

---

### Edit Service Introduction and Tool Configuration

Administrators can edit the MCP Server's service introduction and tool configuration for display on the developer portal.

#### Edit Service Introduction

**Operation Steps:**

1. Navigate to the MCP Server's API Product detail page
2. Click the **MCP Configuration** tab
3. Locate the target MCP Server
4. Click **Edit Service Introduction**
5. Use the Markdown editor to write the service introduction:
    - MCP Server feature overview
    - List of provided tools with descriptions
    - Use cases and examples
    - Important notes
6. Click **Save**



#### Edit Tool Configuration

**Operation Steps:**

1. On the **MCP Configuration** page, locate the tool configuration section
2. Click **Edit Tool Configuration**
3. Edit the tool definitions, including:
    - Tool name and description
    - Parameter definitions: parameter name, type, required flag, default value, etc.
    - Request template: URL, HTTP method, headers
    - Response template
4. Click **Save**



---

### Sandbox Deployment

HiMarket provides sandbox deployment functionality to create managed runtime environments for MCP Servers. Sandbox deployment is suitable for MCP Servers that need to be hosted and run by HiMarket.

**Operation Steps:**

1. Navigate to the MCP Server's API Product detail page
2. Click the **MCP Configuration** tab
3. Locate the target MCP Server
4. Click the **Deploy Sandbox** button
5. Fill in the sandbox deployment parameters:

| Field | Description |
|-------|-------------|
| Sandbox Instance | Select the target sandbox instance |
| Transport Protocol | Select SSE or HTTP |
| Authentication | None or Bearer Token |
| Parameter Values | Parameters required for MCP Server operation (e.g., API Key) |
| Namespace | Target deployment namespace |
| Resource Spec | CPU / memory resource configuration |

6. Click **Deploy**



**Notes:**

+ After successful deployment, the MCP Server will serve through the sandbox-provided service address
+ You can use the **Undeploy Sandbox** button to remove the sandbox deployment

---

### Publish to Portal

After MCP Server configuration is complete, you need to publish it to the developer portal for developers to browse and subscribe.

**Operation Steps:**

1. Navigate to the MCP Server's API Product detail page
2. Confirm the product status is **"Pending Publication"** (MCP Server configuration is complete)
3. Click the **Publish to Portal** button
4. Select the target portal(s):
    - Choose one or more portals from the portal list
    - You can publish to multiple portals simultaneously
5. Click **Publish**



**After Publishing:**

+ The MCP Server will be displayed in the portal's MCP marketplace
+ Developers can browse MCP Server details, tool lists, and service introductions
+ Developers can apply to subscribe to the MCP Server
+ After subscription, it can be used in HiChat

---

## Developer Operations

### Browse MCP Marketplace

Developers can browse the list of published MCP Servers on the portal.

**Operation Steps:**

1. Log in to the developer portal
2. Navigate to the **MCP** product page
3. Browse the MCP Server list:
    - View MCP Server names, descriptions, and icons
    - Filter and search for MCP Servers of interest
4. Click an MCP Server card to view details:
    - Service introduction
    - Tool list with parameter descriptions
    - Usage guide



---

### Subscribe to MCP Server

Developers need to subscribe to an MCP Server before they can use it.

**Operation Steps:**

1. On the MCP Server detail page, click the **Subscribe** button
2. Select the Consumer to use
3. Click **Confirm Subscription**



**Notes:**

+ Subscription approval depends on the portal configuration (automatic or manual approval)
+ After successful subscription, the MCP Server can be used in HiChat
+ You can view subscription status in the Consumer's subscription list

---

### Use MCP Server in HiChat

HiChat is HiMarket's AI Innovation Center, supporting the use of MCP Servers during conversations.

**Operation Steps:**

1. Log in to the developer portal
2. Navigate to the **HiChat** page
3. Select a model product for conversation
4. In the conversation interface, click the MCP Server selection area
5. Choose the MCP Server to use from the list of subscribed MCP Servers
6. If not yet subscribed, click **Quick Subscribe** — the system will use the default Consumer to execute the subscription
7. Start the conversation — the model will automatically call tools provided by the MCP Server as needed



**Important Notes:**

+ Both the model and MCP Server must be subscribed before they can be used
+ HiChat uses the Developer's default Consumer by default
+ You can configure the default Consumer on the **Consumer Management** page

---

### Register Your Own MCP Server

Developers can register their own MCP Servers to HiMarket through the portal.

**Operation Steps:**

1. Log in to the developer portal
2. Navigate to the **My MCP** page
3. Click **Register MCP Server**
4. Fill in the MCP Server information:

| Field | Description |
|-------|-------------|
| MCP Name | Must start with a lowercase letter, containing only lowercase letters, digits, and hyphens |
| Display Name | The name displayed on the portal |
| Description | Functional description of the MCP Server |
| Protocol Type | Select SSE or Streamable HTTP |
| Connection Address | The MCP Server endpoint address |

5. Click **Register**



**Notes:**

+ The system automatically creates an API Product with the same name during registration
+ Registered MCP Servers default to published status
+ You can view all your registered MCP Servers on the **My MCP** page

---

## API to MCP Conversion

HiMarket supports converting existing REST APIs into MCP Servers automatically, enabling AI models to call traditional HTTP APIs through the MCP protocol. This means you don't need to build a new MCP Server from scratch — just connect your existing APIs.

### How It Works

The API-to-MCP conversion feature reads your REST API's OpenAPI (Swagger) specification and automatically performs the following:

1. **Parses API definitions**: Extracts endpoint paths, HTTP methods, request parameters, and response formats
2. **Generates tool definitions**: Maps each API endpoint to an MCP tool, including tool name, description, parameter definitions, and request template
3. **Creates MCP Server configuration**: Produces a complete MCP configuration containing server information and the tool list

Once the conversion is complete, AI models can call your REST APIs just like native MCP tools.

### Supported Conversion Scenarios

| Source | Conversion Method | Description |
|--------|-------------------|-------------|
| Higress Gateway | OpenAPI Conversion | Convert OpenAPI routes on Higress into MCP Servers |
| Higress Gateway | Direct Routing | MCP Server direct proxy mode |
| AI Gateway (Enterprise) | HTTP Conversion | Convert HTTP APIs into MCP Servers |
| AI Gateway (Enterprise) | MCP Proxy | Direct MCP protocol proxy |

### Usage

**Operation Steps:**

1. Create an MCP Server type API Product in the management console
2. On the **Link API** tab, select the **MCP Server** resource type
3. Select the source as **Higress**
4. Choose the API route to convert from the Higress route list
5. The system will automatically convert the API route into an MCP Server configuration
6. After conversion, you can view and edit the generated tool definitions on the **MCP Configuration** page



**Notes:**

+ The converted tool configuration can be manually edited and adjusted in the management console
+ Each API endpoint is mapped to an individual MCP tool with complete parameter definitions and request templates
+ Path parameters, query parameters, and request body parameters are all automatically converted
