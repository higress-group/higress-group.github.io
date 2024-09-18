---
id: "question-history-16959"
title: "docker compose 管理面板安装和使用"
date: "2024-09-11"
category: "expertConsultation"
description: "根据您的问题「higress docker compose 管理面板安装和使用」，我将依据提供的知识为您提供详细的安装与使用指南。### 安装与配置步骤#### 第一步：创建 Docker Compose 配置文件1. **创建文件**：首先，在本地创建一个名为 `docker-compose.ym"
tags: ["higress","docker","compose","安装","使用","管理","面板"]
keywords: ["higress","docker","compose","安装","使用","管理","面板"]
---

## 用户问题 ： 
 docker compose 管理面板安装和使用  

---------------
## 专家官方解答 ：

根据您的问题「higress docker compose 管理面板安装和使用」，我将依据提供的知识为您提供详细的安装与使用指南。

### 安装与配置步骤

#### 第一步：创建 Docker Compose 配置文件

1. **创建文件**：首先，在本地创建一个名为 `docker-compose.yml` 的文件。
2. **填写内容**：将下面的配置信息复制并粘贴到该文件中。记得替换 `<YOUR_DASHSCOPE_API_KEY>` 为您的实际 DashScope API Key，以及 `/path-to-local-config-folder` 为您希望存放配置文件的本地目录路径。同时，设置 `CODE` 为您自定义的访问密码。

```yaml
version: '3.9'
networks:
  higress-net:
    external: false
services:
  higress:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:1.4.1
    environment:
      - CONFIG_TEMPLATE=ai-proxy
      - DEFAULT_AI_SERVICE=qwen
      - DASHSCOPE_API_KEY=<YOUR_DASHSCOPE_API_KEY>
    networks:
      - higress-net
    ports:
      - "8080:8080/tcp"
      - "8001:8001/tcp"
    volumes:
      - /path-to-local-config-folder:/data
    restart: always
  lobechat:
    image: lobehub/lobe-chat
    environment:
      - CODE=访问密码
      - OPENAI_API_KEY=unused
      - OPENAI_PROXY_URL=http://higress:8080/v1
    networks:
      - higress-net
    ports:
      - "3210:3210/tcp"
    restart: always
```

#### 第二步：启动 Docker Compose 项目

在命令行中，导航到 `docker-compose.yml` 文件所在目录，然后执行以下命令以启动 Higress 和 LobeChat 服务：

```bash
docker compose -p higress-ai up -d
```

#### 第三步：访问 LobeChat 页面

打开浏览器，输入地址 `http://localhost:3210/` 来访问 LobeChat 页面，开始使用您的私人GPT助理。

### 高级配置（可选）

- **开启联网搜索能力**：访问 `http://localhost:8001/` 调整配置，确保 `qwenEnableSearch` 设置为 `true`。
- **启用RAG（检索增强生成）能力**：同样在控制台，上传文件并配置 `qwenFileIds` 使用之前上传得到的文件ID。

### 说明

此过程涉及使用Docker Compose快速部署Higress作为AI服务代理及LobeChat作为交互界面，通过DashScope API实现与AI模型的交互。您可以通过Higress控制台进行高级配置，包括但不限于模型映射、网络搜索及RAG功能的开启，以满足不同场景的需求。

请确保遵循每一步的指示并适当调整以适应您的具体环境。如有进一步的技术细节或遇到问题，可以参考提供的官方文档链接进行深入学习或寻求解决方案。

[[官方文档链接](https://higress.io/zh-cn/docs/plugins/ai/ai-proxy)] 包含了更多关于Higress AI插件的详细信息与配置指南，供您深入探索和定制化配置。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：使用 Higress + LobeChat 快速搭建私人GPT助理（支持 RAG、联网） 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16964)给我们反馈。
