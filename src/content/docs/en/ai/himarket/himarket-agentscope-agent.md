---
title: "Listing AgentScope Agents on HiMarket"
description: "Guide to listing AgentScope Agents on HiMarket"
date: "2025-12-22"
category: "article"
keywords: ["HiMarket", "AgentScope", "Agent", "Deployment", "Installation"]
authors: "Higress Team"
---
# Listing AgentScope Agents on HiMarket

## Table of Contents
- [Overview](#overview)
- [Part 1: Develop and Register AgentScope Agent to Nacos](#part-1-develop-and-register-agentscope-agent-to-nacos)
    - [Environment Preparation](#environment-preparation)
    - [Develop Agent](#develop-agent)
    - [Configure Nacos Registration](#configure-nacos-registration)
    - [Verify Registration](#verify-registration)
- [Part 2: Import Nacos Instance into HiMarket](#part-2-import-nacos-instance-into-himarket)
- [Part 3: Create and Associate Agent Product](#part-3-create-and-associate-agent-product)
- [Part 4: Publish to Portal](#part-4-publish-to-portal)
- [FAQ](#faq)

---

## Overview
### What is AgentScope?
[AgentScope](https://agentscope.io) is a development framework for building AI Agent applications that supports rapid construction of intelligent dialogue agents, tool invocation, and multi-agent collaboration capabilities.

### Technical Architecture
The complete chain for listing AgentScope Agents on HiMarket:

```plain
AgentScope Java Agent (Development)
        ↓
    Register to Nacos (Agent Registry)
        ↓
HiMarket Imports Nacos Instance (Connect Data Source)
        ↓
Create Agent Product and Associate (Pull Configuration)
        ↓
   Publish to Portal (Visible to Users)
```

### Core Concepts
+ **AgentScope Runtime**: AgentScope runtime environment that supports the A2A protocol
+ **A2A Protocol**: Agent-to-Agent protocol for standardized communication between agents
+ **Nacos**: Agent registry that stores agent configurations and metadata
+ **HiMarket**: API and Agent product management platform that provides a unified display and management portal

### Language Support
| Language | Support Status | Description |
| --- | --- | --- |
| **Java** | Supported | Current version, covered in this document |
| **Python** | Coming Soon | Under development, stay tuned |

---

## Part 1: Develop and Register AgentScope Agent to Nacos
### Environment Preparation
#### 1.1 Prerequisites
+ **Java 17** or higher
+ **Maven 3.6** or higher
+ **Nacos Server 3.1.0** or higher
+ **DashScope API Key** (or other LLM service)

#### 1.2 Start Nacos Server
**Download and Start**:

```bash
# Linux/Mac
sh bin/startup.sh -m standalone

# Windows
cmd bin/startup.cmd -m standalone
```

Verify by accessing the console: [http://localhost:8848/nacos](http://localhost:8848/nacos)

For detailed installation steps, refer to: [Nacos Quick Start](https://nacos.io/docs/latest/guide/start/quick-start/)

---

### Develop Agent
#### 2.1 Add Maven Dependencies
Add to `pom.xml`:

> **Version Requirement:** AgentScope and AgentScope Extensions require version 1.0.3 or higher.

```xml
<properties>
    <agentscope.version>1.0.3</agentscope.version>
    <agentscope-extensions.version>1.0.3</agentscope-extensions.version>
    <spring-boot.version>3.5.7</spring-boot.version>
</properties>
<dependencies>
    <!-- Spring Boot -->
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-core</artifactId>
        <version>${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-spring-boot-starter</artifactId>
        <version>${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-nacos-spring-boot-starter</artifactId>
        <version>${agentscope-extensions.version}</version>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>${spring-boot.version}</version>
    </dependency>

</dependencies>

```

#### 2.2 Create Spring Boot Main Class
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class A2aRegistryExampleApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(A2aRegistryExampleApplication.class, args);
    }
}
```

#### 2.3 Create Configuration File
Configure in `src/main/resources/application.yaml`:

```yaml
server:
  port: 8888

agentscope:
  dashscope:
    api-key: ${AI_DASHSCOPE_API_KEY}
  agent:
    enabled: true
    name: customer-service-agent
    sys-prompt: "You are an intelligent customer service assistant who can answer user questions"
  a2a:
    server:
      card:
        description: "Example of A2A(Agent2Agent) Protocol Agent"
        provider:
          organization: Alibaba Nacos
          url: https://nacos.io
      nacos:
        server-addr: ${NACOS_SERVER_ADDRESS:127.0.0.1:8848}
        username: ${NACOS_USERNAME:nacos}
        password: ${NACOS_PASSWORD:nacos}
```

#### 2.4 Core Configuration Explanation
#### Agent Configuration
Configuration related to the Agent itself, used to define the basic properties and behavior of the Agent.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| `agentscope.dashscope.api-key` | DashScope API Key | - | Yes |
| `agentscope.agent.enabled` | Whether to enable Agent | false | No |
| `agentscope.agent.name` | Agent Name | - | Yes |
| `agentscope.agent.sys-prompt` | Agent System Prompt | - | Recommended |

#### AgentCard Configuration
AgentCard-related configuration exposed by the Agent through the A2A protocol, used to describe the metadata information of the Agent. More supported fields can be found in the AgentCard definition in the A2A protocol.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| `agentscope.a2a.server.card.description` | Agent Description | - | Recommended |
| `agentscope.a2a.server.card.provider.organization` | Agent Provider Organization | - | No |
| `agentscope.a2a.server.card.provider.url` | Agent Provider URL | - | No |

#### Nacos Configuration
Configuration related to the Nacos agent registry, used to register the Agent to the Nacos agent registry.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| `agentscope.a2a.server.nacos.server-addr` | Nacos Server Address | 127.0.0.1:8848 | Yes |
| `agentscope.a2a.server.nacos.username` | Nacos Username | - | As Configured |
| `agentscope.a2a.server.nacos.password` | Nacos Password | - | As Configured |
| `agentscope.a2a.server.nacos.namespace` | Nacos Namespace | public | No |

#### Server Configuration
Basic server configuration used to set server-level parameters such as service listening ports.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| `server.port` | Agent Service Listening Port | 8080 | No |

#### 2.5 MSE Nacos Configuration (Optional)
If using Alibaba Cloud MSE Nacos:

```yaml
agentscope:
  a2a:
    server:
      nacos:
        endpoint: ${NACOS_ENDPOINT:your-endpoint.mse.aliyuncs.com}
        namespace: ${NACOS_NAMESPACE:your-namespace-id}
        access-key: ${NACOS_ACCESS_KEY}
        secret-key: ${NACOS_SECRET_KEY}
```

#### 2.6 Start Application
Set environment variables:

```bash
export AI_DASHSCOPE_API_KEY=your_api_key
export NACOS_USERNAME=nacos
export NACOS_PASSWORD=nacos
```

Run the application:

```bash
mvn spring-boot:run
```

---

### Verify Registration
#### 3.1 Check Logs
Confirm you see the following logs:

```plain
Auto register agent customer-service-agent into Registry Nacos.
Auto register agent customer-service-agent into Registry Nacos successfully.
```

#### 3.2 Access Nacos Console
1. Open [http://localhost:8848/nacos](http://localhost:8848/nacos)
2. Go to "Agent Management" → "Agent List"
3. Find the `customer-service-agent` Agent
4. Click Details to view Agent Card

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766048089465-1d0ce739-9cd9-4d2c-9161-a6ea64e9c495.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766048134977-de0eece6-f63f-4540-8ebd-cbbfa92cd96f.png)

---

## Part 2: Import Nacos Instance into HiMarket
### Import Process
After logging into the HiMarket Admin backend, go to the **"Nacos Instance Management"** page.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050379287-fb9d72cf-9532-4d7a-863e-14ec0d10816a.png)

Click **"Import/Create Instance"** and choose the import method.

### Method A: Import from MSE (Recommended)
#### Step 1: Enter Alibaba Cloud Credentials
Select **"MSE Nacos"** and fill in:

+ **Region**: Alibaba Cloud region (e.g. `cn-hangzhou`)
+ **Access Key**: Alibaba Cloud AK
+ **Secret Key**: Alibaba Cloud SK

Click **"Get Instance List"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050596026-672a1bcd-2c52-4914-bdeb-e9f2575555b4.png)

#### Step 2: Select Instance
Select the target MSE Nacos instance from the list and click **"Import"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050503736-809e28c7-d798-4aa9-9c87-b6c65261db5d.png)

#### Step 3: Supplement Information
The system will auto-fill information. Supplement:

+ **Server Address**: Select public or private network address
+ **Username/Password**: Nacos authentication information

Click **"Create"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050566951-c13c3dc1-e38a-4d13-ba8d-09f464d67be4.png)

### Method B: Manually Create Open Source Nacos
Select **"Open Source Nacos"** and manually fill in:

+ **Instance Name**: e.g. "Development Environment Nacos"
+ **Server Address**: e.g. `http://localhost:8848`
+ **Username/Password**: Nacos authentication information
+ **Description**: Instance description

Click **"Create"**

---

## Part 3: Create and Associate Agent Product
### Create Product
#### 1. Go to API Products
Click **"API Products"** in the left navigation

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766052358887-ba1dcd39-30f1-45c6-a169-b38574f7eb8c.png)

#### 2. Create Product
Click **"Create API Product"** and fill in:

| Field | Description | Example |
| --- | --- | --- |
| Name | User-facing product name | customer-service-agent |
| Type | Agent API | Agent API |
| Description | Brief functional description | Intelligent Customer Service Assistant |
| Icon Setting | Product icon URL | (Optional) |
| Category | Category tag | "Customer Service" |

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050921063-ac6c97b1-11ab-4209-b08d-b549cc265a4b.png)

Click **"Create"**

---

### Associate Nacos Agent
#### 1. Go to Association Page
Go to the product details page and click the **"Link API"** tab, then click **"Associate API"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051096099-fd75a9b5-f24b-4437-9618-817f3f018d94.png)

#### 2. Select Data Source
In the pop-up dialog:

**Step 1**: Select **"Nacos"** as the data source type

**Step 2**: Select the previously imported **Nacos Instance**

**Step 3**: Select **Namespace** (e.g. `public`)

**Step 4**: Select **Agent** (e.g. `customer-service-agent`)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051207301-c07d78e4-40c7-424c-9ed6-76a7171f53b9.png)

#### 3. Confirm Association
Click **"Associate"**, and the system will:

1. Connect to the Nacos instance
2. Pull the complete Agent configuration (Agent Card, protocol, routing, etc.)
3. Save to HiMarket database
4. Update product status to **READY**

After successful association, you can view the Agent configuration details:

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051238106-2beea97c-e0a5-4fae-8f9c-4a3a6c234482.png)

The configuration includes:

+ **Supported Protocols**: a2a, http
+ **Agent Card**: Name, Version, Description, URL
+ **Skill List**: Agent capability tags

---

### Improve Usage Documentation (Optional)
Click the **"Usage Guide"** tab and write usage instructions (Markdown format):

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051261427-1ce9af19-ba31-4137-afb8-72d3929068d3.png)

---

## Part 4: Publish to Portal
### Publishing Process
#### 1. Go to Publishing Page
Click the **"Portal"** tab

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051279846-463740c0-ab69-41fe-9fdc-37bf8108e978.png)

#### 2. Select Portal
Click **"Publish to Portal"** and select target portals (multiple selections allowed):

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051316550-6208f8e6-2220-40ae-8ced-6ad25ac90f33.png)

#### 3. Confirm Publication
Click **"Publish"** and the product will be discoverable and usable by users on the portal.

---

### User Access
After users access the HiMarket portal:

1. **Browse Agent Market**: Click "Agents" on the homepage
2. **Search for Agent**: Use keywords to search or filter by category
3. **View Details**: Click the Agent card to go to the details page
4. **View Configuration**:
    - **Overview Tab**: View usage guide
    - **Configuration Tab**: View Agent Card, protocols, routing, and other technical information
5. **Invoke Agent**: Call the Agent API according to the configuration information

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051493057-65ff52e2-a618-467a-a0c5-96d285308777.png)

---

## FAQ
### Q1: Agent registration to Nacos failed?
**Possible Causes**:

+ Nacos Server not started or inaccessible
+ Nacos Server version lower than 3.1.0
+ Incorrect authentication information

**Solutions**:

+ Confirm Nacos Server is running properly
+ Check `server-addr`, `username`, `password` configuration
+ Check detailed error messages in application logs

---

### Q2: Cannot find registered Agent in HiMarket?
**Possible Causes**:

+ Nacos instance not correctly imported into HiMarket
+ Incorrect namespace selection
+ Agent registration failed

**Solutions**:

+ Verify Nacos instance connection in HiMarket
+ Confirm Agent is registered in Nacos console
+ Check if namespace configuration is consistent

---

### Q3: Incomplete configuration information after association?
**Possible Causes**:

+ Agent configuration in Nacos does not conform to A2A specification
+ Network issues causing configuration pull failure

**Solutions**:

+ Check Agent metadata in Nacos console
+ Ensure Agent Card information is complete
+ Try unlinking and re-associating

---

### Q4: How to update Agent configuration?
**Update Process**:

1. Modify configuration in Agent code
2. Restart Agent application to re-register to Nacos
3. Click **"Unlink"** on the HiMarket product details page
4. Re-associate the same Agent
5. System will pull the latest configuration

**Note**: Unlinking will not delete the product, only disconnect from the Agent.

---

### Q5: Users cannot see the product after publication?
**Checklist**:

- [ ] Is the product status **READY** or **PUBLISHED**
- [ ] Has it been successfully published to the target portal
- [ ] Is the portal address accessed by users correct
- [ ] Do users have access permissions to that portal

---

## Complete Example Code
The code examples in this document show key configurations. For a complete, runnable example project, please refer to:

**📦**** GitHub Sample Project**: [agentscope-extensions-nacos/java/example/a2a-example](https://github.com/nacos-group/agentscope-extensions-nacos/tree/main/java/example/a2a-example)

Includes:

+ Agent registration example
+ Agent discovery and invocation example
+ Complete Maven project configuration
+ Detailed README instructions

---

## More Resources
+ [AgentScope Official Documentation](https://agentscope.io)
+ [Nacos Official Documentation](https://nacos.io)
+ [AgentScope Extensions Nacos GitHub](https://github.com/nacos-group/agentscope-extensions-nacos)
+ [HiMarket Product Documentation](./README.md)

---