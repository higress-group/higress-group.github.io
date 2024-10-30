---
title: 教程：如何在本地开发和调试 Higress 控制台
keywords: [higress,console]
description: 介绍如何在本地使用IDE等开发工具进行Higress控制台相关的开发和调试工作。
author: CH3CHO
date: "2024-03-02"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/console-dev.md
category: "article"
---

## 概述

本文旨在介绍如何在本地使用 IDE 来进行 Higress 控制台（以下简称控制台）的开发和调试工作。

## 代码结构

控制台的代码仓库地址为 [https://github.com/higress-group/higress-console](https://github.com/higress-group/higress-console)。

控制台项目使用了前后端分离的架构。在将代码下载到本地后，我们可以看到整个项目主要由以下三个目录组成：backend、frontend 和 helm。它们也分别对应了项目的三个部分：后端、前端和部署。

### Backend：后端部分

后端部分是一个使用 Maven 构建配置的 Java 项目，其中共有两个模块：sdk 和 console。

#### SDK

sdk 中包含了定义了 Higress 治理平面的核心数据模型和业务逻辑，如路由模型、Wasm 插件模型、配置模型转换和读写逻辑等。它也同样作为一个独立产品发布到了 Maven 中央仓库。开发者可以世界使用这个 SDK 来进行面向 Higress 的治理功能开发（[参考文档](/blog/admin-sdk-intro)）。

项目中的核心包如下：

- config：SDK 初始化配置模型
- constant：各类常量
- model：各类配置模型
- service：核心业务逻辑服务
  - kubernetes：与 K8s 模型和 API 相关的服务

#### Console

console 中定义了控制台所使用的 Restful API 和一些界面相关的非核心功能，例如监控看板管理、用户配置管理等。

项目中的核心包如下：

- client：封装访问外部 API 的客户端 
- constant：各类常量
- controller：Restful API 控制器
- service：业务服务逻辑

### Frontend：前端部分

前端部分是一个 NodeJS 项目，使用基于 React 的应用研发框架[飞冰（ICE）](https://v3.ice.work/)搭建。

整个项目的目录结构如下：

- public：项目中使用到的静态资源
- src：核心代码部分
  - components：在项目中被复用的小型组件
  - interfaces：与 API 交互过程中需要使用到的数据模型
  - locales：国际化资源文件
  - models：前端页面上下文中需要使用到的数据模型
  - pages：各个前端页面及其内部组件
  - services：与 API 进行交互逻辑封装
- ice.config.mts：飞冰的项目配置文件

### Helm：部署部分

控制台使用 Helm Chart 进行部署。这一部分就是 Helm Chart 的代码。整体代码结构遵循 Helm 的官方规范，可参考 [Helm 官网](https://helm.sh/)。

## 本地运行

### 后端部分

#### 环境准备

控制台的正常运行依赖 Higress 核心组件，所以需要先准备一个安装好的 Higress 集群。大家可以参考这篇文档：[链接](/docs/latest/user/quickstart)。考虑到本地调试的便利度，建议大家使用本地 K8s 环境的方法进行安装。

控制台的后端项目要求 Java 版本不低于 17，所以请确认本地安装的 JDK 版本满足要求。

#### 启动项目

控制台的外部服务依赖主要有两个，一个是 K8s API，另一个是 Higress Controller。

访问 K8s API，控制台默认使用的是本地默认的 kubeconfig （即 `~/.kube/config`）。如果需要使用其他配置文件，则可以使用 `HIGRESS_CONSOLE_KUBE_CONFIG` 环境变量来指定对应的文件路径。

控制台在本地运行状态下，来访问 K8s 集群，使用本地的 15014 端口来访问 Higress Controller。可以使用以下命令将前面安装好的 Higress 实例中 controller 的 15014 端口映射到本地：

```bash
kubectl port-forward deployment/higress-controller -n higress-system 15014
```

![img.png](/img/blog/console-dev/port-forward.png)

然后使用项目的主类 `com.alibaba.higress.console.HigressConsoleApplication` 进行启动即可。等待启动完成后，我们就可以使用 `http://localhost:8080/` 来访问了。

![img.png](/img/blog/console-dev/backend-start.png)

如果你是第一次启动，那么访问上述地址的时候会发现并没有页面出现。如果只是要调试 API，这样也是可以正常进行的。但如果要结合网页进行调试，那么需要使用以下命令执行一次 Maven 构建，生成前端页面资源：

```bash
./mvnw clean package -Dmaven.test.skip=true
```

![img.png](/img/blog/console-dev/backend-build.png)

### 前端部分

#### 依赖安装

控制台的前端项目要求 NodeJS 的版本不低于 16，所以请确认本地安装的 NodeJS 版本满足要求。

然后使用以下命令安装项目所需的各个依赖包：

```bash
npm install
```

#### 项目启动

使用以下命令契合启动前端页面项目：

```bash
npm start
```

![img.png](/img/blog/console-dev/frontend-start.png)

默认情况下，前端页面会访问 Higress 官方提供的演示版控制台 API。如果不希望影响线上演示数据，或需要与后端 API 进行联调的话，可以修改项目根目录下的 `ice.config.mts` 文件，将其中的 `http://demo.higress.io/` 替换为本地的服务地址（例如：`http://127.0.0.1:8080/`），然后重新启动前端项目。这样页面上访问的就是本地的测试服务了。

![img.png](/img/blog/console-dev/frontend-local-api.png)

## 镜像构建

在命令行下进入 `backend` 目录并执行 `build.sh` 即可启动镜像构建。构建生成的镜像名称为 `higress-console:0.0.1`。

注意：如果尝试在 Windows 下构建，请务必确认该目录下的 `start.sh` 使用的是 Linux 的换行符（即 `LF`）。否则，构建生成的镜像将无法正常运行。

![img.png](/img/blog/console-dev/image-build.png)

## 总结

控制台为用户提供了 Higress 治理侧的重要组成部分，为用户提供了基础的开箱即用体验。社区也会在控制台方面持续发力，为用户提供更丰富的、更便捷的网关治理体验。希望本文可以让更多的开发者加入控制台的研发队伍中，为控制台的升级迭代贡献一份力量。

[欢迎参与阿里开源贡献👏](https://github.com/alibaba/higress/issues/480)
