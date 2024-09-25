---
id: "question-history-16711"
title: "higress 如何集成 LLM"
date: "2024-09-26"
category: "expertConsultation"
description: "根据您的问题，您想了解如何使用 Higress 集成 LLM（大型语言模型）。根据提供的知识内容，这里有一套详细步骤来帮助您实现这一目标，主要利用 Higress 与 NextChat 搭建一个私人 GPT 助理，并以通义千问（Qwen）为例进行说明。如果您希望集成其他LLM，如OpenAI的Cha"
tags: ["higress","LLM","集成","方法","","指南","实现"]
keywords: ["higress","LLM","集成","方法","","指南","实现"]
---

## 用户问题 ： 
 higress 如何集成 LLM  

---------------
## 专家官方解答 ：

根据您的问题，您想了解如何使用 Higress 集成 LLM（大型语言模型）。根据提供的知识内容，这里有一套详细步骤来帮助您实现这一目标，主要利用 Higress 与 NextChat 搭建一个私人 GPT 助理，并以通义千问（Qwen）为例进行说明。如果您希望集成其他LLM，如OpenAI的ChatGPT，请参照后续调整说明。

### **步骤详解：**

#### **1. 准备工作**
- **获取API密钥**：首先，确保您已从阿里云获取了[通义千问的API Key](https://help.aliyun.com/zh/dashscope/opening-service?spm=a2c4g.11186623.0.0.72c2369dLprd45)。对于OpenAI ChatGPT集成，您需要准备OpenAI的API Key。

#### **2. 创建配置文件**
- **编写`docker-compose.yml`**：在本地创建一个名为`docker-compose.yml`的文件，并使用文本编辑器输入下面的配置信息。请记得替换`YOUR_DASHSCOPE_API_KEY`为您自己的API Key，以及指定一个本地配置文件夹路径如`/path-to-local-config-folder`。如果您打算集成OpenAI ChatGPT，请参照后面调整说明进行环境变量的更改。

```yaml
# 示例配置，请按需替换
version: '3.9'
networks:
  higress-net:
    external: false
services:
  higress:
    image: ...
    environment:
      - CONFIG_TEMPLATE=ai-proxy
      - DEFAULT_AI_SERVICE=qwen
      - DASHSCOPE_API_KEY=YOUR_DASHSCOPE_API_KEY
    networks:
      - higress-net
    ports:
      - "8080:8080/tcp"
      - "8001:8001/tcp"
    volumes:
      - /path-to-local-config-folder:/data
    restart: always
  nextchat:
    image: ...
    environment:
      - CODE=访问密码
      - ...
    networks:
      - higress-net
    ports:
      - "3000:3000/tcp"
    restart: always
```

#### **3. 启动服务**
- **运行Docker Compose**：在命令行中，导航到包含`docker-compose.yml`的目录，然后运行以下命令启动服务：
  ```
  docker compose -p higress-ai up -d
  ```

#### **4. 访问与配置**
- 打开浏览器访问[http://localhost:3000/](http://localhost:3000/)，进入NextChat界面。
- 调整模型设置为`gpt-4-turbo`，利用Higress内置的AI Proxy服务映射至Qwen-max模型。

#### **集成OpenAI ChatGPT（可选）**
若要集成OpenAI的ChatGPT，您需要在`docker-compose.yml`中做以下调整：
- 更改`DEFAULT_AI_SERVICE`为`openai`。
- 添加`OPENAI_API_KEY`环境变量，并设置为您的OpenAI API Key。
- 之后，重启Docker Compose服务以应用更改。

```yaml
  higress:
    ...
    environment:
      - CONFIG_TEMPLATE=ai-proxy
      - DEFAULT_AI_SERVICE=openai
      - OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    ...
```
通过执行以下命令重启服务：
```shell
docker compose -p higress-ai down
docker compose -p higress-ai up -d
```

### **总结**
通过以上步骤，您可以成功地使用Higress作为平台集成LLM，不论是通义千问还是OpenAI的ChatGPT，从而创建一个功能强大的私人GPT助理。请确保遵循每一步的指示，并适当调整以适应您的具体需求和环境。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：使用 Higress + NextChat 快速搭建私人GPT助理 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16725)给我们反馈。
