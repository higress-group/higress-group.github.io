---
id: "question-history-16946"
title: "docker单机安装Higress详细步骤"
date: "2024-09-11"
category: "expertConsultation"
description: "根据您的需求，这里是使用 Docker Compose 在单机上安装 Higress 网关的详细步骤：### 1. 准备工作确保您的系统中已安装：- Docker- Docker Compose### 2. 下载安装脚本打开终端，执行以下命令下载 Higress 的安装脚本：```shellcurl"
tags: ["higress","docker","安装","详细","","单机"]
keywords: ["higress","docker","安装","详细","","单机"]
---

## 用户问题 ： 
 docker单机安装Higress详细步骤  

---------------
## 专家官方解答 ：

根据您的需求，这里是使用 Docker Compose 在单机上安装 Higress 网关的详细步骤：

### 1. 准备工作
确保您的系统中已安装：
- Docker
- Docker Compose

### 2. 下载安装脚本
打开终端，执行以下命令下载 Higress 的安装脚本：

```shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s --
```

### 3. 配置安装参数
安装脚本提供了多个选项来自定义安装过程，以下是关键参数及其说明，您可以根据实际情况选择需要的参数。例如，要进行基本的单机部署，可以考虑以下参数组合：

- 目标安装目录，默认为 `./higress`
- 若要自动启动 Higress，在命令后添加 `-a` 或 `--auto-run`
- 配置服务 URL，默认情况下，如果不提供外部配置服务，可以考虑使用内置的 Nacos 服务，通过 `--use-builtin-nacos` 参数启用

示例命令（包括自动启动和使用内置 Nacos）:

```shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress -a --use-builtin-nacos
```

### 4. 执行安装
按照上述配置执行安装命令后，脚本会自动完成以下操作：
- 下载所需的 Docker 镜像
- 创建并启动 Docker Compose 容器，包括 apiserver、controller、pilot、gateway 和 console
- 如果选择了内置 Nacos，也会一同部署

### 5. 验证安装
安装完成后，您可以通过以下方式验证 Higress 是否成功启动：
- 访问 Higress Console，其默认监听端口为 8080（除非您修改了 `--console-port`）。例如，在浏览器中输入 `http://localhost:8080`。
- 查看 Docker Compose 日志以确认各个服务是否正常运行。

### 注意事项
- 如文档中所述，Standalone 模式主要适用于本地部署和测试，对于生产环境，推荐使用云原生模式部署，具体可以参考[云原生模式部署文档](https://higress.io/zh-cn/docs/ops/deploy-by-helm)。

以上步骤将指导您完成 Higress 在单机上的 Docker Compose 部署。请根据实际需求调整安装参数，以满足特定的部署条件。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress 基于 Docker Compose 进行独立部署 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16953)给我们反馈。
