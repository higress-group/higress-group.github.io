---
title: 通过阿里云计算巢快速部署
keywords: [deploy,docker compose,docker,ops, 阿里云,计算巢]
description: 如何使用阿里云计算巢实现Higress的快速部署
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-aliyun-computenest.md
---

# 通过阿里云计算巢快速部署

阿里云计算巢是一个开放给服务商和用户的服务管理PaaS平台，提供软件的交付、部署、运维流程标准化等能力，支持软件和资源的一体化交付，真正实现了软件的开箱即用。
通过阿里云计算巢，提供了一键部署Higress的解决方案，支持可视化配置参数，快速部署Higress。

> **注意**
> 本快速部署方案暂时基于Docker Compose部署的，后续将会支持基于Helm进行云原生部署。

## 部署步骤
- 点击部署链接，进入部署页面。

 [![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress社区版)

- 部署页面中，根据界面提示，填写配置参数并提交订单。
  选择资源类型并配置ECS实例密码.
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img1.jpg)
  配置Nacos服务，如果没有独立部署的Nacos服务，可以使用内置的Nacos服务，但不建议生产环境下使用
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img2.jpg)
  若有独立部署的Nacos服务，设置Nacos服务的Ip地址，如果Nacos开启了鉴权认证，则需要填写用户名和密码
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img3.png)
  最后配置可用区，可选择新建VPC，也可使用已有的VPC.
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img4.png)
- 等到服务实例部署成功, 进入服务实例详情页，获取Higress的登录信息。
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img5.png)
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img6.png)



