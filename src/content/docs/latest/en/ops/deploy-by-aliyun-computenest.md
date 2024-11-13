---
title: Rapid deployment through Aliyun ComputeNest
keywords: [deploy,docker compose,docker,ops,aliyun,computenest]
description: How to Use Aliyun ComputeNest to Rapidly Deploy Higress.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-docs/current/ops/deploy-by-aliyun-computenest.md
---

# Rapid deployment through Aliyun ComputeNest

Aliyun ComputeNest is an open PaaS platform for service providers and users that provides software delivery, deployment, and operation process standardization capabilities. It supports the integration of software and resources for one-stop delivery, enabling truly out-of-the-box software usage.
Through Aliyun ComputeNest, a one-click deployment solution for Higress is provided, with support for visual configuration parameters for quick deployment of Higress.。

> **Note**
> This quick deployment solution is currently based on Docker Compose deployment, and will support cloud-native deployment based on Helm in the future.

## Deployment steps
- Click the deployment link to enter the service instance deployment page。

  [![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest-en.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress社区版)

- According to the interface prompt, fill in the parameters to complete the deployment.
  Select a resource type and configure an ECS instance password..
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img1.jpg)
  Configure the Nacos service. If you do not have an independently deployed Nacos service, you can use the built-in Nacos service.
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img2.jpg)
  If the Nacos service is deployed independently, set the IP address of the Nacos service. If authentication is enabled for Nacos, enter the username and password.
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img3.png)
  Finally, configure the zone. You can create a new VPC or use an existing VPC.
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img4.png)
- After the service instance is created, go to the service instance details page. On the Overview page, you can obtain the login information of the Higress.
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img5.png)
  ![image](https://github.com/aliyun-computenest/quickstart-higress/blob/main/docs/img6.png)



