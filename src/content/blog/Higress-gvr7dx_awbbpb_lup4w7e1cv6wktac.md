---
title: "手把手带你玩转基于 Nacos + Higress 的 MCP 开发新范式"
description: "手把手带你玩转基于 Nacos + Higress 的 MCP 开发新范式"
date: "2025-07-22"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：子葵

Naocs 3.0 中已经支持和Higress配合使用实现存量Http转化为MCP服务，3.0.1 及以上版本在支持存量转化的基础上同时支持同步Nacos中已经注册的原生的MCP服务，并在Higress上进行暴露，完成了对所有Remote Server类型的代理访问支持。

![](https://img.alicdn.com/imgextra/i4/O1CN01cIKoQq1OJK3C0Z7wW_!!6000000001684-2-tps-1113-369.png)

通过结合 Spring AI Alibaba，FastMCP 等框架，可以实现应用自动注册到Nacos中，并通过 Higress 自动将注册的应用对外暴露给Client侧访问。此文档从0到一完成Higress+Nacos配合实现REST API转MCP和透明代理暴露标准 MCP 服务。

## 环境准备
### 创建独立的docker网络
```yaml
docker network create mcp
```

### Higress 部署
使用docker部署Higress

```shell
docker run -d --rm --name higress-ai -v ${PWD}:/data \
        -p 8001:8001 -p 8080:8080 -p 8443:8443 --network mcp \
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
```

部署redis

```shell
docker run -d --rm --name higress-redis -p 6379:6379 --network mcp higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3
```

配置MCP Server的全局参数

```shell
vi ./configmaps/higress-config.yaml
```

修改配置文件

```shell
apiVersion: v1
kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
  creationTimestamp: "2000-01-01T00:00:00Z"
  resourceVersion: "1"
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE 连接的路径后缀
      enable: true          # 启用 MCP Server
      redis:
        address: higress-redis:6379 # Redis服务地址。这里需要使用本机的内网 IP，不可以使用 127.0.0.1
    downstream:
    # 以下配置无需修改，此处省略
```

> <font style="color:rgb(53, 56, 65);">受 Docker 运行环境的限制，非 Linux 操作系统在修改 yaml 文件之后，需要等待一段时间才能让新的配置生效。如果希望立即生效的话，可以使用以下命令重启 higress-ai 容器：</font>
>

### Nacos部署
通过docker直接部署

```shell
docker run --name nacos \
    -e MODE=standalone \
    -e NACOS_AUTH_TOKEN=your_token_base64 \
    -e NACOS_AUTH_IDENTITY_KEY=your_key \
    -e NACOS_AUTH_IDENTITY_VALUE=your_value \
    -p 8081:8080 \
    -p 8848:8848 \
    -p 9848:9848 \
    --network mcp \
    -d nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3.0.1
```

### 配置Higress 连接到Nacos mcp registry
在Higress 服务来源中增加Nacos3.x服务来源

打开 higress 控制台，部署主机地址:8001, 点击服务来源添加，并添加nacos3.x 服务来源，地址填写 nacos

![](https://img.alicdn.com/imgextra/i2/O1CN01Y4aeLJ1PVybjtamiq_!!6000000001847-2-tps-2425-1167.png)

## 服务部署和验证
### REST API 转 MCP
进入nacos控制台，访问 部署主机ip:8081,点击 mcp regsitry 并创建 mcp server

![](https://img.alicdn.com/imgextra/i3/O1CN01Bs8xDj29oGkl8uugi_!!6000000008114-2-tps-2426-1165.png)

![](https://img.alicdn.com/imgextra/i4/O1CN017yHGx51miYeTFZnlh_!!6000000004988-2-tps-2433-845.png)

添加 TOOL，Tool 名称为 get_weather, 参数为 city， 协议转化配置为

```shell
{
  "requestTemplate": {
    "url": "/v3/weather/weatherInfo?key=yourkey",
    "argsToUrlParam": true,
    "method": "GET"
  }
}
```

并发布为最新版本, 通过 sse ednpoint 直接访问 http://宿主机host:8080/mcp/amap/sse

![](https://img.alicdn.com/imgextra/i4/O1CN01mcEpUo21LrG36cHeF_!!6000000006969-2-tps-2419-935.png)

在 3.0.0 基础上，3.0.1 支持在模版中引用 Nacos 配置，并且可以通过动态修改配置实现对模版的动态控制。

![](https://img.alicdn.com/imgextra/i3/O1CN01cA54CN20EF3Xxlwlh_!!6000000006817-2-tps-1088-423.png)

通过Nacos 动态配置能力，动态更新模版中的值，动态轮转后端访问token，动态控制网关访问后端服务的参数。

新建配置文件 amap_key ， 分组为data的配置，配置内容为

```json
{
  "data": "your_key"
}
```

并在模版中直接进行引用

![](https://img.alicdn.com/imgextra/i3/O1CN01xEDznl1qnpfzwfUjj_!!6000000005541-2-tps-1686-526.png)

保存为最新版本，通过上面的endpoint进行访问

![](https://img.alicdn.com/imgextra/i4/O1CN019dq4WM23F6eQxLaka_!!6000000007225-2-tps-2415-858.png)

访问成功，修改配置中的key的值为非法值

![](https://img.alicdn.com/imgextra/i1/O1CN01STKDe11ood8Ph3weB_!!6000000005272-2-tps-2425-537.png)

访问失败

### 通过 Spring AI Alibaba 实现自动注册和自动暴露到 Higress
克隆 sping ai alibaba examples 仓库

```shell
git clone https://github.com/springaialibaba/spring-ai-alibaba-examples.git
```

进入nacos mcp example 目录

```shell

cd ./spring-ai-alibaba-examples/spring-ai-alibaba-mcp-example/spring-ai-alibaba-mcp-nacos-example/server/mcp-nacos-registry-example
```

修改配置文件中nacos的用户名密码为自己设置的用户名和密码

```shell
vi ./src/main/resources/application.yml
```

启动项目

```shell
mvn spring-boot:run
```

启动之后，在nacos中查看注册的mcp服务

![](https://img.alicdn.com/imgextra/i2/O1CN01Fb2RPN1a35OnRHHPN_!!6000000003273-2-tps-2551-746.png)

higress 会自动发现注册的mcp服务并产生透明代理规则，可以直接通过higress访问mcp服务。通过inspector应用调试通过higress暴露的 mcp 服务

![](https://img.alicdn.com/imgextra/i1/O1CN01yqKB7d2A9nMvkI9zS_!!6000000008161-2-tps-2552-1324.png)

## 总结
在新版本的 higress 和 nacos 中，higress 通过 nacos 做统一发现实现存量应用的零改造适配MCP协议，并且能够实现 MCP 服务的自动代理，Higress 作为 MCP 网关对外提供统一的MCP暴露，Nacos作为MCP Regsitry 对MCP 服务做统一管理，对外提供统一的服务发现，动态变更等能力。


