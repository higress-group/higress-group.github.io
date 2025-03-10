---
title: "Token管控"
description: "Token管控场景开源运行流程"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---

# 场景描述
AI网关能够对大模型使用的Token数量进行追踪，在消费者使用超额时进行限制，从而更好管理调用AI应用的用户额度，为Token使用分析提供数据支持。

Token管控场景基于消费者认证、Token限流、Token配额插件，集合可观测能力，将Token资源转化为可量化、可管控、可优化的服务单元，基于自定义的策略，保障高并发下服务的稳定性、安全性与公平性。



# 部署Higress.AI
本指南中基于docker部署，如您需要其他部署方式（k8s、helm等），请参照[快速开始](https://higress.cn/docs/latest/user/quickstart/)。



执行以下命令：

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

按照指引可以分别录入 Aliyun Dashscope或其他API-KEY；也可以键入回车后跳过，之后在控制台中修改。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)



上述命令的默认的HTTP的服务端口为8080，HTTPS的服务端口为8443，控制台的服务端口为8001。如您需要使用其他端口，可使用 `wget https://higress.cn/ai-gateway/install.sh`下载部署脚本后，修改*DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*结果；然后是使用bash执行脚本。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png)



部署完成后，会出现以下界面：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)

# 控制台配置
通过浏览器访问控制台界面[http://localhost:8001/](http://localhost:8001/)，首次登录需要配置管理员及密码。

在AI服务提供者管理界面，可以配置已集成供应商的API-KEY。当前已集成的供应商有阿里云、DeepSeek、Azure OpenAI、OpenAI、豆包等。这里我们为阿里云配置API-KEY，如您在上一步中已经配置，则直接忽略。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082187334-4ffee05e-04d9-49c0-b3e9-aa40c1d4ce9c.png)



## 配置消费者
在控制台中的消费者管理界面，为当前网关添加消费者以管理配额、发送请求。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741163343009-d86b6ab1-ac65-4bff-85d5-b10470cdb5d2.png)

点击创建消费者，基于Key Auth创建3个消费者，依次为aliyun-admin、aliyun-user1、aliyun-user2，基于HTTP Header中的x-api-key字段进行认证。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741163423118-136460aa-2343-4d21-a650-2582cc54f7a5.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741163549425-932c37ba-dac9-479f-a8e4-4da178f2923b.png)



## 配置Redis存储服务
Token的信息需要临时存储以供访问，因此需要创建一个Redis服务用于缓存。本文示例基于docker搭建一个本地Redis服务，提供给Higress使用。



### Redis服务构建
1. 使用docker命令启动一个redis容器

```plain
docker run --name my-redis -p 6379:6379 -d redis
```

2. 查看my-redis服务ip
    1. 使用`docker network ls`获取bridge网络的id

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165645724-273cc80e-8999-4411-ad0e-5af7a5aebf08.png)

    2. 使用`docker network inspect <netword-id>`检查bridge下是否有my-redis容器
        1. 如果没有，通过`docker network connect bridge my-redis`命令连接到网络中
    3. 获取my-redis服务对应的ip

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165741053-28f5caa1-e1d3-43ff-bfd0-af244893d8ad.png)



### Redis服务配置
在控制台服务来源的界面，创建服务来源，填写对应的字段：

+ 类型：固定地址
+ 服务地址：my-redis的ip和服务端口拼接
+ 服务协议：HTTP

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165841319-2c1310d2-253c-4127-8464-326c5dbbf305.png)



## 配置AI路由策略
### 消费者认证配置
在AI路由管理界面中，为阿里云配置消费者，点击编辑。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741166983812-8a2d6ce9-4c09-4415-a591-2a7fe6eea38f.png)

在编辑界面中，打开启用请求认证，添加刚刚创建的消费者。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741166960430-81abef16-03f3-4580-8bd9-2c0b26d86763.png)





### Token配额配置
在AI路由管理界面中，为阿里云配置Token配额，点击策略进行配置，选择AI配额管理。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741167450711-b9d1b3da-b821-4e0a-88bf-4e48453387e1.png)在AI配额管理插件配置界面中，参考以下字段填写：

```yaml
redis_key_prefix: 'chat_quota:'
admin_consumer: aliyun-admin
admin_path: /quota
redis:
  service_name: local-redis.static
  service_port: 80
  timeout: 2000
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741167559447-bd6ecc5b-9c07-4fdc-b006-526399707731.png)

### Token限流配置
在AI路由管理界面中，为阿里云配置Token限流，点击策略进行配置。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741190894349-a7790310-3f03-4fe6-80d8-e2b48bcce815.png)

在AI Token限流插件配置界面中，参考以下字段填写：

```yaml
rule_items:
- limit_by_per_header: x-api-key
  limit_keys:
  - key: "*"
    token_per_minute: 5 #每分钟限流5个
rule_name: "default_rule"

redis:
  service_name: local-redis.static
  service_port: 80
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741190983553-93b83b07-345d-4315-a7e6-8269b37dd933.png)



# 调试
打开系统自带命令行，通过以下命令进行请求（如HTTP服务未部署在8080端口上，修改为对应端口即可）

```yaml
#查询quota,x-api-key为aliyun-admin的凭证
curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'x-higress-llm-model: qwen-max'
  
#刷新quota,x-api-key为aliyun-admin的凭证
curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \
  -d 'consumer=aliyun-user1&quota=100' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'x-higress-llm-model: qwen-max'
  
#增加quota,x-api-key为aliyun-admin的凭证
curl 'http://localhost:8080/v1/chat/completions/quota/delta' \
  -d 'consumer=aliyun-user1&value=100' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'x-higress-llm-model: qwen-max'

#请求,x-api-key为aliyun-user1的凭证
curl 'http://localhost:8080/v1/chat/completions' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "你是谁"
      }
    ]
  }'

```

请求结果示例：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741191138320-6be5d195-a26c-403d-a260-0588530d5813.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741191958688-f724afa7-0dfc-43be-9798-8feb7fcf1c37.png)



# 结果观测
在AI监控面板界面，可以对AI请求进行观测。观测指标包括每秒输入输出Token数量、各供应商/模型Token使用数量、消费者使用Token情况等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741191602518-6e6009a6-ee53-4450-9066-4a2dcc312bbf.png)

