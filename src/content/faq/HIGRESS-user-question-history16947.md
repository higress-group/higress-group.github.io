---
id: "question-history-16947"
title: "docker compose 安装Higress详细步骤"
date: "2024-09-26"
category: "expertConsultation"
description: "基于我了解的知识中的指导，以下是安装Higress使用Docker Compose的详细步骤：### 1. 准备工作确保你的系统中已安装Docker和Docker Compose，因为Higress的独立部署依赖于这些基础工具。### 2. 下载安装脚本打开终端，运行以下命令下载Higress的安装"
tags: ["higress","docker-compose","安装","详细",""]
keywords: ["higress","docker-compose","安装","详细",""]
---

## 用户问题 ： 
 docker compose 安装Higress详细步骤  

---------------
## 专家官方解答 ：

基于我了解的知识中的指导，以下是安装Higress使用Docker Compose的详细步骤：

### 1. 准备工作
确保你的系统中已安装Docker和Docker Compose，因为Higress的独立部署依赖于这些基础工具。

### 2. 下载安装脚本
打开终端，运行以下命令下载Higress的安装脚本：
```shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s --
```
此命令会下载并执行一个安装脚本，但还未带具体参数，我们接下来会添加必要的参数以完成定制化安装。

### 3. 定制化安装参数
根据你的需求，选择合适的安装参数。以下是一些关键参数的例子及其说明，你可以根据实际情况调整：

- **目标安装目录** (`DESTINATION`): 指定Higress安装的目标目录，默认为`./higress`。
- **自动启动** (`-a` 或 `--auto-run`): 添加此参数可以在配置完成后自动启动Higress。
- **配置服务URL** (`-c` 或 `--config-url`): 如果使用外部Nacos或本地文件存储配置，需提供相应的URL。例如，对于独立Nacos服务，可以是`nacos://192.168.0.1:8848`；如果是本地文件，则为`file:///opt/higress/conf`。
- **使用内置Nacos服务** (`--use-builtin-nacos`): 若希望使用Higress内置的Nacos服务，添加此参数。注意，这不适合生产环境。
- **其他端口配置**: 可以通过`--nacos-port`、`--gateway-http-port`等参数自定义各组件使用的端口。

### 示例命令
假设你想在本地目录下安装Higress，使用内置Nacos服务，并自动启动，可以执行如下命令：
```shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress -a --use-builtin-nacos
```

### 4. 执行安装
输入定制化的命令后，脚本会自动下载Docker镜像并启动相关服务。请耐心等待直到所有服务正常运行。

### 5. 验证安装
安装完成后，可以通过访问`http://localhost:8080`(默认的Console端口)来验证Higress Console是否可用。同时，检查其他服务如Gateway是否在指定端口上监听。

### 注意事项
- 根据我了解的知识提示，Standalone模式更适合本地部署测试，生产环境推荐使用云原生模式部署。
- 确保理解每个参数的意义，避免在生产环境中误用内置Nacos或其他非生产级配置。

以上步骤详细介绍了如何利用Docker Compose独立部署Higress，每一步都紧密关联我了解的知识文档提供的信息与建议。


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
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16954)给我们反馈。
