---
title: Windows 下 Higress 部署实践
keywords: [higress]
description: Windows部署Higress
author: Fkbqf
date: "2023-07-28"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/blog/DeployOnWindows.md
category: "ecosystem"
---
## 前置准备

###  配置 WSL2
详情参看步骤1-5,顺便在微软商店中下载Terminal。

[WSL手动安装步骤](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual)

### 下载 Docker Desktop

1. **访问 Docker Desktop 官方下载页面**

   在浏览器中打开 [Docker Desktop 的官方下载页面](https://www.docker.com/products/docker-desktop)

2. **下载 Docker Desktop**

   在下载页面，找到适用于 Windows 的 Docker Desktop 版本，然后点击下载。

3. **运行安装程序**

   下载完成后，找到下载的安装程序（通常在你的 "下载" 文件夹中），然后双击运行。



### 安装 Cygwin

[cygwin官网](http://www.cygwin.com/)


选择setup-x86_64.exe，等待安装完成。


#### 验证 Cygwin 安装是否成功
```shell
cygcheck -c cygwin
```

![7.png](/img/blog/windows/pic/7.png)

#### 为 Cygwin 配置环境变量

![8.png](/img/blog/windows/pic/8.png)


![9.png](/img/blog/windows/pic/9.png)


![10.png](/img/blog/windows/pic/10.png)


![11.png](/img/blog/windows/pic/11.png)


点击确定即可添加成功


## 安装 Higrees

### 准备 Nacos 
[nacos官网手册](https://nacos.io/zh-cn/docs/v2/quickstart/quick-start-docker.html)

我们这里选择nacos-docker的模式安装

![A.png](/img/blog/windows/pic/A.png)

下载解压zip文件,进入 nacos-docker-master 文件夹右键选择终端打开，执行命令，我们这里选择单机模式部署

```powershell
    docker-compose -f example/standalone-derby.yaml up
```

等待出现界面，即安装成功

![B.png](/img/blog/windows/pic/B.png)

### 使用 Higrees 对接 Nacos
**安装命令：使用独立部署的 Nacos**

当访问docker容器互相访问时候本地回环地址并不是真正的地址，所以需要在cygwin中执行获取本地网卡地址

```shell
ipconfig
```

![C.png](/img/blog/windows/pic/C.png)


```
curl -fsSL https://higress.cn/standalone/get-higress.sh | bash -s -- -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos
```

请将 `192.168.0.1` 替换为 Nacos 服务器的 IP（如果 Nacos 部署在本机，请不要使用如 `localhost` 或 `127.0.0.1` 的 Loopback 地址），并按需调整 `--nacos-username` 和 `--nacos-password` 的取值。如果 Nacos 服务未开启认证功能，则可以移除这两个参数。


在这里未开启授权服务，直接使用WLANIP替换对应的IP
```shell
curl -fsSL https://higress.cn/standalone/get-higress.sh | bash -s -- -c nacos://10.30.0.225:8848

```
输入命令等待部署，即可看到生成的用户名与密码

![D.png](/img/blog/windows/pic/D.png)

### Higress 控制台配置

**访问 `http://localhost:8080/`, 登录 Higress 控制台。首次访问时需要先设置用户名密码**

![13.png](/img/blog/windows/pic/13.png)

**点击左侧“服务来源”导航栏，然后点击页面右侧的“创建服务来源”按钮。按照下图所示内容填写表单并点击“确定”按钮。**

![14.png](/img/blog/windows/pic/14.png)

**点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。**

![15.png](/img/blog/windows/pic/15.png)

**点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。**

![16.png](/img/blog/windows/pic/16.png)

### 请求验证
```shell
# should output a JSON object containing request data 
curl http://localhost/get?foo=bar -H 'host: foo.bar.com'
```

![E.png](/img/blog/windows/pic/E.png)

更多详情与部署方案可参考 [quick start](https://higress.cn/docs/latest/user/quickstart/)
