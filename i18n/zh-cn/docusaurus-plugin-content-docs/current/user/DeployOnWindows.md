---
title: window利用Nacos部署higress
keywords: [Higress]
description: window部署higress
---
# window利用Nacos部署higress
## 前置准备

### 下载docker-desktop
####  配置wsl2
详情参看步骤1-5

[WSL手动安装步骤](https://learn.microsoft.com/zh-cn/windows/wsl/install-manual)

#### 下载 Docker Desktop

1. **访问 Docker Desktop 官方下载页面**

   在浏览器中打开 [Docker Desktop 的官方下载页面](https://www.docker.com/products/docker-desktop)

2. **下载 Docker Desktop**

   在下载页面，找到适用于 Windows 的 Docker Desktop 版本，然后点击下载。

3. **运行安装程序**

   下载完成后，找到下载的安装程序（通常在你的 "下载" 文件夹中），然后双击运行。



## 安装cygwin

[cygwin官网](http://www.cygwin.com/)

![1.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F1.png)


![2.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F2.png)


![3.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F3.png)


![4.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F4.png)

**这一步选择Cygwin的安装目录，以及一些参数的设置。默认的安装位置是C:\cygwin，你也可以选择自己的安装目录，然后选下一步**


![5.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F5.png)


![6.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F6.png)

**等待安装完成**




# 验证Cygwin安装是否成功
```shell
cygcheck -c cygwin
```

![7.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F7.png)

# 为cygwin配置环境变量

![8.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F8.png)


![9.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F9.png)


![10.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F10.png)




![11.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F11.png)

点击确定即可添加成功




#### 安装Nacos
我们这里选择提供安装命令二使用 Higress 内置 Nacos进行安装

**安装命令：使用 Higress 内置 Nacos**
```
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- --use-builtin-nacos -p admin
```

![12.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F12.png)



**访问http://localhost:8080/,使用 admin 作为用户名密码登录 Higress 控制台。**

![13.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F13.png)

**点击左侧“服务来源”导航栏，然后点击页面右侧的“创建服务来源”按钮。按照下图所示内容填写表单并点击“确定”按钮。**

![14.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F14.png)

**点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。**

![15.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F15.png)

**点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。**


![16.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F16.png)

### 请求验证
```shell
# should output a JSON object containing request data 
curl http://localhost/get?foo=bar -H 'host: foo.bar.com'
```

![17.png](..%2F..%2F..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2Fwindos%2Fpic%2F17.png)