const e="himarket/himarket-agentscope-agent.md",a="ai",t="himarket/himarket-agentscope-agent",n=`# HiMarket \u4E0A\u67B6 AgentScope Agent \u6307\u5357

## \u76EE\u5F55
- [\u6982\u8FF0](#\u6982\u8FF0)
- [\u7B2C\u4E00\u90E8\u5206\uFF1A\u5F00\u53D1\u5E76\u6CE8\u518C AgentScope Agent \u5230 Nacos](#\u7B2C\u4E00\u90E8\u5206\u5F00\u53D1\u5E76\u6CE8\u518C-agentscope-agent-\u5230-nacos)
    - [\u73AF\u5883\u51C6\u5907](#\u73AF\u5883\u51C6\u5907)
    - [\u5F00\u53D1 Agent](#\u5F00\u53D1-agent)
    - [\u914D\u7F6E Nacos \u6CE8\u518C](#\u914D\u7F6E-nacos-\u6CE8\u518C)
    - [\u9A8C\u8BC1\u6CE8\u518C](#\u9A8C\u8BC1\u6CE8\u518C)
- [\u7B2C\u4E8C\u90E8\u5206\uFF1A\u5728 HiMarket \u4E2D\u5BFC\u5165 Nacos \u5B9E\u4F8B](#\u7B2C\u4E8C\u90E8\u5206\u5728-himarket-\u4E2D\u5BFC\u5165-nacos-\u5B9E\u4F8B)
- [\u7B2C\u4E09\u90E8\u5206\uFF1A\u521B\u5EFA\u5E76\u5173\u8054 Agent \u4EA7\u54C1](#\u7B2C\u4E09\u90E8\u5206\u521B\u5EFA\u5E76\u5173\u8054-agent-\u4EA7\u54C1)
- [\u7B2C\u56DB\u90E8\u5206\uFF1A\u53D1\u5E03\u5230\u95E8\u6237](#\u7B2C\u56DB\u90E8\u5206\u53D1\u5E03\u5230\u95E8\u6237)
- [\u5E38\u89C1\u95EE\u9898](#\u5E38\u89C1\u95EE\u9898)

---

## \u6982\u8FF0
### \u4EC0\u4E48\u662F AgentScope\uFF1F
[AgentScope](https://agentscope.io) \u662F\u4E00\u4E2A\u6784\u5EFA AI Agent \u5E94\u7528\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u652F\u6301\u5FEB\u901F\u6784\u5EFA\u667A\u80FD\u5BF9\u8BDD Agent\u3001\u5DE5\u5177\u8C03\u7528\u3001\u591A Agent \u534F\u4F5C\u7B49\u80FD\u529B\u3002

### \u6280\u672F\u67B6\u6784
AgentScope Agent \u4E0A\u67B6\u5230 HiMarket \u7684\u5B8C\u6574\u94FE\u8DEF\uFF1A

\`\`\`plain
AgentScope Java Agent (\u5F00\u53D1)
        \u2193
    \u6CE8\u518C\u5230 Nacos (\u667A\u80FD\u4F53\u6CE8\u518C\u4E2D\u5FC3)
        \u2193
HiMarket \u5BFC\u5165 Nacos \u5B9E\u4F8B (\u8FDE\u63A5\u6570\u636E\u6E90)
        \u2193
\u521B\u5EFA Agent \u4EA7\u54C1\u5E76\u5173\u8054 (\u62C9\u53D6\u914D\u7F6E)
        \u2193
   \u53D1\u5E03\u5230\u95E8\u6237 (\u7528\u6237\u53EF\u89C1)
\`\`\`

### \u6838\u5FC3\u6982\u5FF5
+ **AgentScope Runtime**\uFF1AAgentScope \u7684\u8FD0\u884C\u65F6\u73AF\u5883\uFF0C\u652F\u6301 A2A \u534F\u8BAE
+ **A2A \u534F\u8BAE**\uFF1AAgent-to-Agent \u534F\u8BAE\uFF0C\u7528\u4E8E Agent \u95F4\u7684\u6807\u51C6\u5316\u901A\u4FE1
+ **Nacos**\uFF1A\u667A\u80FD\u4F53\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u5B58\u50A8 Agent \u7684\u914D\u7F6E\u548C\u5143\u6570\u636E
+ **HiMarket**\uFF1AAPI \u548C Agent \u4EA7\u54C1\u7BA1\u7406\u5E73\u53F0\uFF0C\u63D0\u4F9B\u7EDF\u4E00\u7684\u5C55\u793A\u548C\u7BA1\u7406\u95E8\u6237

### \u8BED\u8A00\u652F\u6301
| \u8BED\u8A00 | \u652F\u6301\u72B6\u6001 | \u8BF4\u660E |
| --- | --- | --- |
| **Java** | \u5DF2\u652F\u6301 | \u5F53\u524D\u7248\u672C\uFF0C\u672C\u6587\u6863\u4ECB\u7ECD |
| **Python** | \u5373\u5C06\u652F\u6301 | \u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85 |


---

## \u7B2C\u4E00\u90E8\u5206\uFF1A\u5F00\u53D1\u5E76\u6CE8\u518C AgentScope Agent \u5230 Nacos
### \u73AF\u5883\u51C6\u5907
#### 1.1 \u524D\u7F6E\u8981\u6C42
+ **Java 17** \u6216\u66F4\u9AD8\u7248\u672C
+ **Maven 3.6** \u6216\u66F4\u9AD8\u7248\u672C
+ **Nacos Server 3.1.0** \u6216\u66F4\u9AD8\u7248\u672C
+ **DashScope API Key**\uFF08\u6216\u5176\u4ED6 LLM \u670D\u52A1\uFF09

#### 1.2 \u542F\u52A8 Nacos Server
**\u4E0B\u8F7D\u5E76\u542F\u52A8**\uFF1A

\`\`\`bash
# Linux/Mac
sh bin/startup.sh -m standalone

# Windows
cmd bin/startup.cmd -m standalone
\`\`\`

\u8BBF\u95EE\u63A7\u5236\u53F0\u9A8C\u8BC1\uFF1A[http://localhost:8848/nacos](http://localhost:8848/nacos)

\u8BE6\u7EC6\u5B89\u88C5\u6B65\u9AA4\u53C2\u8003\uFF1A[Nacos \u5FEB\u901F\u5F00\u59CB](https://nacos.io/docs/latest/guide/start/quick-start/)

---

### \u5F00\u53D1 Agent
#### 2.1 \u6DFB\u52A0 Maven \u4F9D\u8D56
\u5728 \`pom.xml\` \u4E2D\u6DFB\u52A0\uFF1A

> **\u7248\u672C\u8981\u6C42\uFF1A** AgentScope \u548C AgentScope Extensions \u7684\u7248\u672C\u8981\u6C42\u4E3A 1.0.3 \u53CA\u4EE5\u4E0A\u3002

\`\`\`xml
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
        <version>\${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-spring-boot-starter</artifactId>
        <version>\${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-nacos-spring-boot-starter</artifactId>
        <version>\${agentscope-extensions.version}</version>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>\${spring-boot.version}</version>
    </dependency>

</dependencies>

\`\`\`

#### 2.2 \u521B\u5EFA Spring Boot \u4E3B\u7C7B
\`\`\`java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class A2aRegistryExampleApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(A2aRegistryExampleApplication.class, args);
    }
}
\`\`\`

#### 2.3 \u521B\u5EFA\u914D\u7F6E\u6587\u4EF6
\u5728 \`src/main/resources/application.yaml\` \u4E2D\u914D\u7F6E\uFF1A

\`\`\`yaml
server:
  port: 8888

agentscope:
  dashscope:
    api-key: \${AI_DASHSCOPE_API_KEY}
  agent:
    enabled: true
    name: customer-service-agent
    sys-prompt: "\u4F60\u662F\u4E00\u4E2A\u667A\u80FD\u5BA2\u670D\u52A9\u624B\uFF0C\u53EF\u4EE5\u56DE\u7B54\u7528\u6237\u7684\u95EE\u9898"
  a2a:
    server:
      card:
        description: "Example of A2A(Agent2Agent) Protocol Agent"
        provider:
          organization: Alibaba Nacos
          url: https://nacos.io
      nacos:
        server-addr: \${NACOS_SERVER_ADDRESS:127.0.0.1:8848}
        username: \${NACOS_USERNAME:nacos}
        password: \${NACOS_PASSWORD:nacos}
\`\`\`


#### 2.4 \u6838\u5FC3\u914D\u7F6E\u8BF4\u660E
#### Agent \u914D\u7F6E
Agent \u672C\u8EAB\u76F8\u5173\u7684\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 Agent \u7684\u57FA\u672C\u5C5E\u6027\u548C\u884C\u4E3A\u3002

| \u914D\u7F6E\u9879 | \u8BF4\u660E | \u9ED8\u8BA4\u503C | \u5FC5\u586B |
| --- | --- | --- | --- |
| \`agentscope.dashscope.api-key\` | DashScope API \u5BC6\u94A5 | - | \u662F |
| \`agentscope.agent.enabled\` | \u662F\u5426\u542F\u7528 Agent | false | \u5426 |
| \`agentscope.agent.name\` | Agent \u540D\u79F0 | - | \u662F |
| \`agentscope.agent.sys-prompt\` | Agent \u7CFB\u7EDF\u63D0\u793A\u8BCD | - | \u63A8\u8350 |

#### AgentCard \u914D\u7F6E
Agent \u4EE5 A2A \u534F\u8BAE\u5BF9\u5916\u66B4\u9732\u7684 AgentCard \u76F8\u5173\u914D\u7F6E\uFF0C\u7528\u4E8E\u63CF\u8FF0 Agent \u7684\u5143\u6570\u636E\u4FE1\u606F\u3002\u66F4\u591A\u652F\u6301\u7684\u5B57\u6BB5\u53EF\u4EE5\u53C2\u8003 A2A \u534F\u8BAE\u4E2D AgentCard \u7684\u5B9A\u4E49\u3002

| \u914D\u7F6E\u9879 | \u8BF4\u660E | \u9ED8\u8BA4\u503C | \u5FC5\u586B |
| --- | --- | --- | --- |
| \`agentscope.a2a.server.card.description\` | Agent \u63CF\u8FF0\u4FE1\u606F | - | \u63A8\u8350 |
| \`agentscope.a2a.server.card.provider.organization\` | Agent \u63D0\u4F9B\u8005\u7EC4\u7EC7 | - | \u5426 |
| \`agentscope.a2a.server.card.provider.url\` | Agent \u63D0\u4F9B\u8005 URL | - | \u5426 |

#### Nacos \u914D\u7F6E
Nacos \u667A\u80FD\u4F53\u6CE8\u518C\u4E2D\u5FC3\u76F8\u5173\u914D\u7F6E\uFF0C\u7528\u4E8E\u5C06 Agent \u6CE8\u518C\u5230 Nacos \u667A\u80FD\u4F53\u6CE8\u518C\u4E2D\u5FC3\u3002

| \u914D\u7F6E\u9879 | \u8BF4\u660E | \u9ED8\u8BA4\u503C | \u5FC5\u586B |
| --- | --- | --- | --- |
| \`agentscope.a2a.server.nacos.server-addr\` | Nacos \u670D\u52A1\u5668\u5730\u5740 | 127.0.0.1:8848 | \u662F |
| \`agentscope.a2a.server.nacos.username\` | Nacos \u7528\u6237\u540D | - | \u89C6\u914D\u7F6E |
| \`agentscope.a2a.server.nacos.password\` | Nacos \u5BC6\u7801 | - | \u89C6\u914D\u7F6E |
| \`agentscope.a2a.server.nacos.namespace\` | Nacos \u547D\u540D\u7A7A\u95F4 | public | \u5426 |

#### Server \u914D\u7F6E
\u670D\u52A1\u5668\u57FA\u7840\u914D\u7F6E\uFF0C\u7528\u4E8E\u8BBE\u7F6E\u670D\u52A1\u76D1\u542C\u7AEF\u53E3\u7B49\u670D\u52A1\u5668\u7EA7\u522B\u53C2\u6570\u3002

| \u914D\u7F6E\u9879 | \u8BF4\u660E | \u9ED8\u8BA4\u503C | \u5FC5\u586B |
| --- | --- | --- | --- |
| \`server.port\` | Agent \u670D\u52A1\u76D1\u542C\u7AEF\u53E3 | 8080 | \u5426 |


#### 2.5 MSE Nacos \u914D\u7F6E\uFF08\u53EF\u9009\uFF09
\u5982\u679C\u4F7F\u7528\u963F\u91CC\u4E91 MSE Nacos\uFF1A

\`\`\`yaml
agentscope:
  a2a:
    server:
      nacos:
        endpoint: \${NACOS_ENDPOINT:your-endpoint.mse.aliyuncs.com}
        namespace: \${NACOS_NAMESPACE:your-namespace-id}
        access-key: \${NACOS_ACCESS_KEY}
        secret-key: \${NACOS_SECRET_KEY}
\`\`\`

#### 2.6 \u542F\u52A8\u5E94\u7528
\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\uFF1A

\`\`\`bash
export AI_DASHSCOPE_API_KEY=your_api_key
export NACOS_USERNAME=nacos
export NACOS_PASSWORD=nacos
\`\`\`

\u8FD0\u884C\u5E94\u7528\uFF1A

\`\`\`bash
mvn spring-boot:run
\`\`\`

---

### \u9A8C\u8BC1\u6CE8\u518C
#### 3.1 \u67E5\u770B\u65E5\u5FD7
\u786E\u8BA4\u770B\u5230\u4EE5\u4E0B\u65E5\u5FD7\uFF1A

\`\`\`plain
Auto register agent customer-service-agent into Registry Nacos.
Auto register agent customer-service-agent into Registry Nacos successfully.
\`\`\`

#### 3.2 \u8BBF\u95EE Nacos \u63A7\u5236\u53F0
1. \u6253\u5F00 [http://localhost:8848/nacos](http://localhost:8848/nacos)
2. \u8FDB\u5165"Agent\u7BA1\u7406" \u2192 "Agent\u5217\u8868"
3. \u67E5\u627E \`customer-service-agent\` Agent
4. \u70B9\u51FB\u8BE6\u60C5\u67E5\u770BAgent Card

![](/img/1770012396407.png)

![](/img/1770012398858.png)

---

## \u7B2C\u4E8C\u90E8\u5206\uFF1A\u5728 HiMarket \u4E2D\u5BFC\u5165 Nacos \u5B9E\u4F8B
### \u5BFC\u5165\u6D41\u7A0B
\u767B\u5F55 HiMarket Admin \u540E\u53F0\uFF0C\u8FDB\u5165 **"Nacos\u5B9E\u4F8B\u7BA1\u7406"** \u9875\u9762\u3002

![](/img/1770012401450.png)

\u70B9\u51FB **"\u5BFC\u5165/\u521B\u5EFA\u5B9E\u4F8B"**\uFF0C\u9009\u62E9\u5BFC\u5165\u65B9\u5F0F\u3002

### \u65B9\u5F0F A\uFF1A\u4ECE MSE \u5BFC\u5165\uFF08\u63A8\u8350\uFF09
#### \u6B65\u9AA4 1\uFF1A\u8F93\u5165\u963F\u91CC\u4E91\u51ED\u8BC1
\u9009\u62E9 **"MSE Nacos"**\uFF0C\u586B\u5199\uFF1A

+ **Region**\uFF1A\u963F\u91CC\u4E91\u5730\u57DF\uFF08\u5982 \`cn-hangzhou\`\uFF09
+ **Access Key**\uFF1A\u963F\u91CC\u4E91 AK
+ **Secret Key**\uFF1A\u963F\u91CC\u4E91 SK

\u70B9\u51FB **"\u83B7\u53D6\u5B9E\u4F8B\u5217\u8868"**

![](/img/1770012403857.png)

#### \u6B65\u9AA4 2\uFF1A\u9009\u62E9\u5B9E\u4F8B
\u4ECE\u5217\u8868\u4E2D\u9009\u62E9\u76EE\u6807 MSE Nacos \u5B9E\u4F8B\uFF0C\u70B9\u51FB **"\u5BFC\u5165"**

![](/img/1770012406426.png)

#### \u6B65\u9AA4 3\uFF1A\u8865\u5145\u4FE1\u606F
\u7CFB\u7EDF\u81EA\u52A8\u9884\u586B\u4FE1\u606F\uFF0C\u8865\u5145\uFF1A

+ **\u670D\u52A1\u5668\u5730\u5740**\uFF1A\u9009\u62E9\u516C\u7F51\u6216\u5185\u7F51\u5730\u5740
+ **\u7528\u6237\u540D/\u5BC6\u7801**\uFF1ANacos \u8BA4\u8BC1\u4FE1\u606F

\u70B9\u51FB **"\u521B\u5EFA"**

![](/img/1770012408629.png)

### \u65B9\u5F0F B\uFF1A\u624B\u52A8\u521B\u5EFA\u5F00\u6E90 Nacos
\u9009\u62E9 **"\u5F00\u6E90 Nacos"**\uFF0C\u624B\u52A8\u586B\u5199\uFF1A

+ **\u5B9E\u4F8B\u540D\u79F0**\uFF1A\u5982"\u5F00\u53D1\u73AF\u5883 Nacos"
+ **\u670D\u52A1\u5668\u5730\u5740**\uFF1A\u5982 \`http://localhost:8848\`
+ **\u7528\u6237\u540D/\u5BC6\u7801**\uFF1ANacos \u8BA4\u8BC1\u4FE1\u606F
+ **\u63CF\u8FF0**\uFF1A\u5B9E\u4F8B\u8BF4\u660E

\u70B9\u51FB **"\u521B\u5EFA"**

---

## \u7B2C\u4E09\u90E8\u5206\uFF1A\u521B\u5EFA\u5E76\u5173\u8054 Agent \u4EA7\u54C1
### \u521B\u5EFA\u4EA7\u54C1
#### 1. \u8FDB\u5165API Products
\u5728\u5DE6\u4FA7\u5BFC\u822A\u70B9\u51FB **"API Products"**

![](/img/1770012411095.png)

#### 2. \u521B\u5EFA\u4EA7\u54C1
\u70B9\u51FB **"\u521B\u5EFAAPI Product"**\uFF0C\u586B\u5199\uFF1A

| \u5B57\u6BB5 | \u8BF4\u660E | \u793A\u4F8B |
| --- | --- | --- |
| \u540D\u79F0 | \u9762\u5411\u7528\u6237\u7684\u4EA7\u54C1\u540D | customer-service-agent |
| \u7C7B\u578B | Agent API | Agent API |
| \u63CF\u8FF0 | \u7B80\u660E\u529F\u80FD\u8BF4\u660E | \u667A\u80FD\u5BA2\u670D\u52A9\u624B |
| Icon \u8BBE\u7F6E | \u4EA7\u54C1\u56FE\u6807 URL | \uFF08\u53EF\u9009\uFF09 |
| \u7C7B\u522B | \u5206\u7C7B\u6807\u7B7E | "\u5BA2\u6237\u670D\u52A1" |


![](/img/1770012413442.png)

\u70B9\u51FB **"\u521B\u5EFA"**

---

### \u5173\u8054 Nacos Agent
#### 1. \u8FDB\u5165\u5173\u8054\u9875\u9762
\u8FDB\u5165\u4EA7\u54C1\u8BE6\u60C5\u9875\uFF0C\u70B9\u51FB **"Link API"** \u6807\u7B7E\uFF0C\u70B9\u51FB **"\u5173\u8054API"**

****![](/img/1770012416180.png)

#### 2. \u9009\u62E9\u6570\u636E\u6E90
\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\uFF1A

**\u6B65\u9AA4 1**\uFF1A\u6570\u636E\u6E90\u7C7B\u578B\u9009\u62E9 **"Nacos"**

**\u6B65\u9AA4 2**\uFF1A\u9009\u62E9\u4E4B\u524D\u5BFC\u5165\u7684 **Nacos \u5B9E\u4F8B**

**\u6B65\u9AA4 3**\uFF1A\u9009\u62E9 **\u547D\u540D\u7A7A\u95F4**\uFF08\u5982 \`public\`\uFF09

**\u6B65\u9AA4 4**\uFF1A\u9009\u62E9 **Agent**\uFF08\u5982 \`customer-service-agent\`\uFF09

![](/img/1770012419496.png)

#### 3. \u786E\u8BA4\u5173\u8054
\u70B9\u51FB **"\u5173\u8054"**\uFF0C\u7CFB\u7EDF\u5C06\uFF1A

1. \u8FDE\u63A5\u5230 Nacos \u5B9E\u4F8B
2. \u62C9\u53D6 Agent \u7684\u5B8C\u6574\u914D\u7F6E\uFF08Agent Card\u3001\u534F\u8BAE\u3001\u8DEF\u7531\u7B49\uFF09
3. \u4FDD\u5B58\u5230 HiMarket \u6570\u636E\u5E93
4. \u66F4\u65B0\u4EA7\u54C1\u72B6\u6001\u4E3A **READY**

\u5173\u8054\u6210\u529F\u540E\uFF0C\u53EF\u67E5\u770B Agent \u914D\u7F6E\u8BE6\u60C5\uFF1A

![](/img/1770012422133.png)

\u914D\u7F6E\u5305\u542B\uFF1A

+ **\u652F\u6301\u534F\u8BAE**\uFF1Aa2a\u3001http
+ **Agent Card**\uFF1A\u540D\u79F0\u3001\u7248\u672C\u3001\u63CF\u8FF0\u3001URL
+ **\u6280\u80FD\u5217\u8868**\uFF1AAgent \u7684\u80FD\u529B\u6807\u7B7E

---

### \u5B8C\u5584\u4F7F\u7528\u6587\u6863\uFF08\u53EF\u9009\uFF09
\u70B9\u51FB **"Usage Guide"** \u6807\u7B7E\uFF0C\u7F16\u5199\u4F7F\u7528\u6307\u5357\uFF08Markdown \u683C\u5F0F\uFF09\uFF1A

![](/img/1770012424703.png)

---

## \u7B2C\u56DB\u90E8\u5206\uFF1A\u53D1\u5E03\u5230\u95E8\u6237
### \u53D1\u5E03\u6D41\u7A0B
#### 1. \u8FDB\u5165\u53D1\u5E03\u9875\u9762
\u70B9\u51FB **"Portal"** \u6807\u7B7E

![](/img/1770012427348.png)

#### 2. \u9009\u62E9\u95E8\u6237
\u70B9\u51FB **"\u53D1\u5E03\u5230\u95E8\u6237"**\uFF0C\u9009\u62E9\u76EE\u6807\u95E8\u6237\uFF08\u53EF\u591A\u9009\uFF09\uFF1A

![](/img/1770012429417.png)

#### 3. \u786E\u8BA4\u53D1\u5E03
\u70B9\u51FB **"\u53D1\u5E03"**\uFF0C\u4EA7\u54C1\u5373\u53EF\u5728\u95E8\u6237\u4E0A\u88AB\u7528\u6237\u53D1\u73B0\u548C\u4F7F\u7528\u3002

---

### \u7528\u6237\u8BBF\u95EE
\u7528\u6237\u8BBF\u95EE HiMarket \u95E8\u6237\u540E\uFF1A

1. **\u6D4F\u89C8\u667A\u80FD\u4F53\u5E02\u573A**\uFF1A\u5728\u9996\u9875\u70B9\u51FB "\u667A\u80FD\u4F53"
2. **\u641C\u7D22 Agent**\uFF1A\u4F7F\u7528\u5173\u952E\u5B57\u641C\u7D22\u6216\u7C7B\u522B\u7B5B\u9009
3. **\u67E5\u770B\u8BE6\u60C5**\uFF1A\u70B9\u51FB Agent \u5361\u7247\u8FDB\u5165\u8BE6\u60C5\u9875
4. **\u67E5\u770B\u914D\u7F6E**\uFF1A
    - **\u6982\u89C8\u6807\u7B7E**\uFF1A\u67E5\u770B\u4F7F\u7528\u6307\u5357
    - **\u914D\u7F6E\u6807\u7B7E**\uFF1A\u67E5\u770B Agent Card\u3001\u534F\u8BAE\u3001\u8DEF\u7531\u7B49\u6280\u672F\u4FE1\u606F
5. **\u8C03\u7528 Agent**\uFF1A\u6839\u636E\u914D\u7F6E\u4FE1\u606F\u8C03\u7528 Agent API

![](/img/1770012431876.png)

---

## \u5E38\u89C1\u95EE\u9898
### Q1: Agent \u6CE8\u518C\u5230 Nacos \u5931\u8D25\uFF1F
**\u53EF\u80FD\u539F\u56E0**\uFF1A

+ Nacos Server \u672A\u542F\u52A8\u6216\u4E0D\u53EF\u8BBF\u95EE
+ Nacos Server \u7248\u672C\u4F4E\u4E8E 3.1.0
+ \u8BA4\u8BC1\u4FE1\u606F\u9519\u8BEF

**\u89E3\u51B3\u65B9\u6848**\uFF1A

+ \u786E\u8BA4 Nacos Server \u6B63\u5E38\u8FD0\u884C
+ \u68C0\u67E5 \`server-addr\`\u3001\`username\`\u3001\`password\` \u914D\u7F6E
+ \u67E5\u770B\u5E94\u7528\u65E5\u5FD7\u4E2D\u7684\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F

---

### Q2: HiMarket \u4E2D\u627E\u4E0D\u5230\u5DF2\u6CE8\u518C\u7684 Agent\uFF1F
**\u53EF\u80FD\u539F\u56E0**\uFF1A

+ Nacos \u5B9E\u4F8B\u672A\u6B63\u786E\u5BFC\u5165\u5230 HiMarket
+ \u9009\u62E9\u7684\u547D\u540D\u7A7A\u95F4\u4E0D\u6B63\u786E
+ Agent \u6CE8\u518C\u5931\u8D25

**\u89E3\u51B3\u65B9\u6848**\uFF1A

+ \u5728 HiMarket \u4E2D\u9A8C\u8BC1 Nacos \u5B9E\u4F8B\u8FDE\u63A5
+ \u5728 Nacos \u63A7\u5236\u53F0\u786E\u8BA4 Agent \u5DF2\u6CE8\u518C
+ \u68C0\u67E5\u547D\u540D\u7A7A\u95F4\u914D\u7F6E\u662F\u5426\u4E00\u81F4

---

### Q3: \u5173\u8054\u540E\u914D\u7F6E\u4FE1\u606F\u4E0D\u5B8C\u6574\uFF1F
**\u53EF\u80FD\u539F\u56E0**\uFF1A

+ Agent \u5728 Nacos \u4E2D\u7684\u914D\u7F6E\u4E0D\u7B26\u5408 A2A \u89C4\u8303
+ \u7F51\u7EDC\u95EE\u9898\u5BFC\u81F4\u914D\u7F6E\u62C9\u53D6\u5931\u8D25

**\u89E3\u51B3\u65B9\u6848**\uFF1A

+ \u5728 Nacos \u63A7\u5236\u53F0\u68C0\u67E5 Agent \u5143\u6570\u636E
+ \u786E\u4FDD Agent Card \u4FE1\u606F\u5B8C\u6574
+ \u5C1D\u8BD5\u89E3\u9664\u5173\u8054\u540E\u91CD\u65B0\u5173\u8054

---

### Q4: \u5982\u4F55\u66F4\u65B0 Agent \u914D\u7F6E\uFF1F
**\u66F4\u65B0\u6D41\u7A0B**\uFF1A

1. \u5728 Agent \u4EE3\u7801\u4E2D\u4FEE\u6539\u914D\u7F6E
2. \u91CD\u542F Agent \u5E94\u7528\uFF0C\u91CD\u65B0\u6CE8\u518C\u5230 Nacos
3. \u5728 HiMarket \u4EA7\u54C1\u8BE6\u60C5\u9875\u70B9\u51FB **"\u89E3\u9664\u5173\u8054"**
4. \u91CD\u65B0\u5173\u8054\u540C\u4E00\u4E2A Agent
5. \u7CFB\u7EDF\u4F1A\u62C9\u53D6\u6700\u65B0\u914D\u7F6E

**\u6CE8\u610F**\uFF1A\u89E3\u9664\u5173\u8054\u4E0D\u4F1A\u5220\u9664\u4EA7\u54C1\uFF0C\u53EA\u662F\u65AD\u5F00\u4E0E Agent \u7684\u8FDE\u63A5\u3002

---

### Q5: \u53D1\u5E03\u540E\u7528\u6237\u770B\u4E0D\u5230\u4EA7\u54C1\uFF1F
**\u68C0\u67E5\u6E05\u5355**\uFF1A

- [ ] \u4EA7\u54C1\u72B6\u6001\u662F\u5426\u4E3A **READY** \u6216 **PUBLISHED**
- [ ] \u662F\u5426\u5DF2\u6210\u529F\u53D1\u5E03\u5230\u76EE\u6807\u95E8\u6237
- [ ] \u7528\u6237\u8BBF\u95EE\u7684\u95E8\u6237\u5730\u5740\u662F\u5426\u6B63\u786E
- [ ] \u7528\u6237\u662F\u5426\u6709\u8BBF\u95EE\u8BE5\u95E8\u6237\u7684\u6743\u9650

---

## \u5B8C\u6574\u793A\u4F8B\u4EE3\u7801
\u672C\u6587\u6863\u4E2D\u7684\u4EE3\u7801\u793A\u4F8B\u5C55\u793A\u4E86\u5173\u952E\u914D\u7F6E\u3002\u5B8C\u6574\u7684\u3001\u53EF\u8FD0\u884C\u7684\u793A\u4F8B\u9879\u76EE\u8BF7\u53C2\u8003\uFF1A

**\u{1F4E6}**** GitHub \u793A\u4F8B\u9879\u76EE**\uFF1A[agentscope-extensions-nacos/java/example/a2a-example](https://github.com/nacos-group/agentscope-extensions-nacos/tree/main/java/example/a2a-example)

\u5305\u542B\uFF1A

+ Agent \u6CE8\u518C\u793A\u4F8B
+ Agent \u53D1\u73B0\u548C\u8C03\u7528\u793A\u4F8B
+ \u5B8C\u6574\u7684 Maven \u9879\u76EE\u914D\u7F6E
+ \u8BE6\u7EC6\u7684 README \u8BF4\u660E

---

## \u66F4\u591A\u8D44\u6E90
+ [AgentScope \u5B98\u65B9\u6587\u6863](https://agentscope.io)
+ [Nacos \u5B98\u65B9\u6587\u6863](https://nacos.io)
+ [AgentScope Extensions Nacos GitHub](https://github.com/nacos-group/agentscope-extensions-nacos)
+ [HiMarket \u4EA7\u54C1\u6587\u6863](./README.md)

---

`,o={title:"HiMarket \u4E0A\u67B6 AgentScope Agent",description:"HiMarket \u4E0A\u67B6 AgentScope Agent \u6307\u5357",keywords:["HiMarket","AgentScope","Agent","\u90E8\u7F72","\u5B89\u88C5"],date:"2025-12-22",category:"article"},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/himarket/himarket-agentscope-agent.md",rawData:void 0};export{s as _internal,n as body,a as collection,o as data,e as id,t as slug};
