---
title: "HiMarket 部署指南"
description: "HiMarket 快速部署与安装配置指南"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "部署", "安装"]
authors: "Higress Team"
---

# HiMarket 部署指南

## 一、本地搭建

**环境依赖：** JDK 17、Node.js 18+、Maven 3.6+、MySQL 8.0+

**启动后端：**

```bash
# 构建项目
mvn clean package -DskipTests

# 启动后端服务
java --add-opens java.base/java.util=ALL-UNNAMED \
     --add-opens java.base/java.lang=ALL-UNNAMED \
     --add-opens java.base/java.lang.reflect=ALL-UNNAMED \
     -Ddb.host=${DB_HOST} \
     -Ddb.port=${DB_PORT} \
     -Ddb.name=${DB_NAME} \
     -Ddb.username=${DB_USERNAME} \
     -Ddb.password=${DB_PASSWORD} \
     -jar himarket-bootstrap/target/himarket-bootstrap-1.0-SNAPSHOT.jar

# 后端 API 地址：http://localhost:8080
```

**启动前端：**

```bash
# 启动管理后台
cd himarket-web/himarket-admin
npm install
npm run dev
# 管理后台地址：http://localhost:5174

# 启动开发者门户
cd himarket-web/himarket-frontend
npm install
npm run dev
# 开发者门户地址：http://localhost:5173
```

## 二、基于 Docker Compose 部署

包含七个服务组件：

+ **mysql：** 数据库服务，为后端服务提供数据存储；
+ **himarket-server：** 后端服务，运行在 8081 端口；
+ **himarket-admin：** 管理后台界面，运行在 5174 端口，供管理员配置 Portal；
+ **himarket-frontend：** 前台用户界面，运行在 5173 端口，供用户浏览和使用 API Product；
+ **Higress：** Higress all-in-one 网关服务，运行在 8443、8082、8001 端口，其中控制台运行在 8001 端口，供用户浏览和使用；
+ **Redis：** Higress 缓存服务；
+ **Nacos：** Nacos 服务，运行在 8080、8848、9848 端口，其中控制台运行在 8080 端口，供用户浏览和使用。

### 安装命令

**环境依赖：** docker、docker compose、curl、jq

**一键拉起：** 使用 `deploy.sh` 脚本完成 HiMarket、Higress、Nacos 全栈部署和数据初始化。

```bash
# 克隆项目
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/docker/scripts

# 部署全栈服务并初始化
./deploy.sh install

# 或仅部署 Himarket 服务（不含 Nacos/Higress）
./deploy.sh himarket-only

# 卸载所有服务
./deploy.sh uninstall

# 服务地址
# 管理后台地址：http://localhost:5174
# 开发者门户地址：http://localhost:5173
# 后端 API 地址：http://localhost:8081
```

该脚本在部署完后会**执行数据初始化钩子**：执行登录数据初始化、示例 MCP 数据初始化、API 产品数据初始化。注意脚本包含**部署**和**数据初始化**两部分，数据初始化执行不阻塞部署，如若数据初始化钩子失败，可在 `/scripts/hooks/post_ready.d` 下重试。如：

```bash
cd docker/scripts/hooks/post_ready.d

# 重试失败脚本
./10-init-nacos-admin.sh
```

### 安装配置

所有配置集中在 `scripts/data/.env` 文件中：

```bash
cd docker/scripts/data
vi .env
```

| 配置名 | 配置说明 | **默认值** |
| --- | --- | --- |
| MYSQL_ROOT_PASSWORD | MySQL Root 密码 | 123456 |
| MYSQL_DATABASE | MySQL 数据库名 | portal_db |
| MYSQL_USER | MySQL 用户名 | portal_user |
| MYSQL_PASSWORD | MySQL 密码 | portal_pass |
| USE_BUILTIN_MYSQL | 是否使用内置 MySQL（true/false） | true |
| DB_HOST | 数据库地址（使用外置数据库时必填） | mysql |
| DB_PORT | 数据库端口（使用外置数据库时必填） | 3306 |
| DB_NAME | 数据库名称（使用外置数据库时必填） | portal_db |
| DB_USERNAME | 数据库用户名（使用外置数据库时必填） | portal_user |
| DB_PASSWORD | 数据库密码（使用外置数据库时必填） | portal_pass |
| USE_COMMERCIAL_NACOS | 是否使用商业化 Nacos（true/false），如若使用则跳过部署 Nacos | false |
| COMMERCIAL_NACOS_NAME | 商业化 Nacos 实例名称 | 空 |
| COMMERCIAL_NACOS_SERVER_URL | 商业化 Nacos 服务地址 | 空 |
| COMMERCIAL_NACOS_USERNAME | 商业化 Nacos 用户名（如需进行商业化 Nacos MCP 数据导入，必填） | 空 |
| COMMERCIAL_NACOS_PASSWORD | 商业化 Nacos 密码（如需进行商业化 Nacos MCP 数据导入，必填） | 空 |
| COMMERCIAL_NACOS_ACCESS_KEY | 商业化 Nacos AccessKey | 空 |
| COMMERCIAL_NACOS_SECRET_KEY | 商业化 Nacos SecretKey | 空 |
| USE_AI_GATEWAY | 是否使用 AI 网关（true/false），如若使用则跳过部署 Higress 及相关数据初始化脚本 | false |
| AI_GATEWAY_ID | AI 网关实例 ID | 空 |
| AI_GATEWAY_NAME | AI 网关实例名称 | 空 |
| AI_GATEWAY_REGION | AI 网关所在地域 | 空 |
| AI_GATEWAY_ACCESS_KEY | AI 网关 AccessKey | 空 |
| AI_GATEWAY_SECRET_KEY | AI 网关 SecretKey | 空 |
| NACOS_ADMIN_PASSWORD | Nacos 管理员密码 | nacos |
| HIGRESS_USERNAME | Higress 登录用户名 | admin |
| HIGRESS_PASSWORD | Higress 登录密码 | admin |
| ADMIN_USERNAME | 后台管理员用户名 | admin |
| ADMIN_PASSWORD | 后台管理员密码 | admin |
| FRONT_USERNAME | 前台默认用户名 | demo |
| FRONT_PASSWORD | 前台默认密码 | demo123 |
| NACOS_IMAGE | Nacos 镜像地址 | nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3.1.1 |
| NACOS_AUTH_IDENTITY_KEY | Nacos 认证身份标识 Key | serverIdentity |
| NACOS_AUTH_IDENTITY_VALUE | Nacos 认证身份标识 Value | security |
| NACOS_AUTH_TOKEN | Nacos 认证 Token | VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg= |
| HIGRESS_IMAGE | Higress 镜像地址 | higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest |
| HIMARKET_SERVER_IMAGE | Himarket 后端服务镜像 | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-server:latest |
| HIMARKET_ADMIN_IMAGE | Himarket 管理后台镜像 | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-admin:latest |
| HIMARKET_FRONTEND_IMAGE | Himarket 前台服务镜像 | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-frontend:latest |
| REDIS_IMAGE | Redis 镜像地址 | higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3 |
| MYSQL_IMAGE | MySQL 镜像地址 | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/mysql:latest |


## 三、使用 Helm 进行云原生部署

Helm 是一个用于自动化管理和发布 Kubernetes 软件的包管理系统。通过 Helm 一键部署脚本您可以在 Kubernetes 集群上快速部署安装 HiMarkt+Higress+Nacos，包含十个服务组件：

+ **HiMarket：**
    - himarket-server：Himarket AI 开放平台的后端服务；
    - himarket-admin：Himarket AI 开放平台管理后台，管理员通过此界面配置 Portal；
    - himarket-frontend：Himarket AI 开放平台的前台服务，用户通过此界面浏览和使用 API；
    - mysql：可选内置数据库。
+ **Higress：**
    - higress-console：控制台，用户通过此界面浏览和使用 Higress 服务；
    - higress-controller：控制面组件，负责管理配置下发；
    - higress-gateway：数据面组件，负责承载数据流量；
    - redis-stack-server：缓存组件。
+ **Nacos：**
    - nacos：Nacos 应用；
    - nacos-mysql：Nacos 数据库。

**服务类型说明：**

默认为 LoadBalancer 类型服务，适用于云环境（阿里云 ACK、AWS EKS 等）。如果您的环境不支持 LoadBalancer（如本地 minikube、自建集群），可以使用 NodePort 或端口转发方式访问。后台配置好 Himarket 后，将域名解析到 himarket-frontend 服务的访问地址，用户就可以通过域名访问前台站点。

### 安装命令

**环境依赖：** kubectl、python3/python、curl、jq

**一键拉起：** 使用 `deploy.sh` 脚本将 HiMarket 部署到 Kubernetes 集群。

```bash
# 克隆项目
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/helm/scripts

# 部署全栈服务并初始化
./deploy.sh install

# 或仅部署 Himarket 服务（不含 Nacos/Higress）
./deploy.sh himarket-only

# 卸载
./deploy.sh uninstall
```

该脚本在部署完后会**执行数据初始化钩子**：执行登录数据初始化、示例 MCP 数据初始化、API 产品数据初始化。注意脚本包含**部署**和**数据初始化**两部分，数据初始化执行不阻塞部署，如若数据初始化钩子失败，可在 `/scripts/hooks/post_ready.d` 下重试。如：

```bash
cd helm/scripts/hooks/post_ready.d

# 重试失败脚本
./10-init-nacos-admin.sh
```

### 安装配置

相关配置集中在 `scripts/data/.env` 文件中：

```bash
cd helm/scripts/data
vi .env
```

| 配置名 | 配置说明 | **默认值** |
| --- | --- | --- |
| NAMESPACE | Kubernetes 命名空间 | himarket-system |
| HIMARKET_ONLY | 仅部署 Himarket（跳过 Nacos/Higress） | false |
| HIMARKET_IMAGE_TAG | Himarket 镜像标签 | latest |
| HIMARKET_MYSQL_IMAGE_TAG | MySQL 镜像标签 | latest |
| HIMARKET_MYSQL_ENABLED | 是否使用内置 MySQL（true/false） | true |
| EXTERNAL_DB_HOST | 外部数据库地址（HIMARKET_MYSQL_ENABLED=false 时使用） | Your_External_DB_Host |
| EXTERNAL_DB_PORT | 外部数据库端口 | 3306 |
| EXTERNAL_DB_NAME | 外部数据库名称 | Your_DB_Name |
| EXTERNAL_DB_USERNAME | 外部数据库用户名 | Your_DB_Username |
| EXTERNAL_DB_PASSWORD | 外部数据库密码 | Your_DB_Password |
| USE_COMMERCIAL_NACOS | 是否使用商业化 Nacos（true/false），如若使用则跳过部署 Nacos | false |
| COMMERCIAL_NACOS_NAME | 商业化 Nacos 实例名称 | 空 |
| COMMERCIAL_NACOS_SERVER_URL | 商业化 Nacos 服务地址 | 空 |
| COMMERCIAL_NACOS_USERNAME | 商业化 Nacos 用户名（如需进行商业化 Nacos MCP 数据导入，必填） | 空 |
| COMMERCIAL_NACOS_PASSWORD | 商业化 Nacos 密码（如需进行商业化 Nacos MCP 数据导入，必填） | 空 |
| COMMERCIAL_NACOS_ACCESS_KEY | 商业化 Nacos AccessKey | 空 |
| COMMERCIAL_NACOS_SECRET_KEY | 商业化 Nacos SecretKey | 空 |
| USE_AI_GATEWAY | 是否使用 AI 网关（true/false），如若使用则跳过部署 Higress 及相关数据初始化脚本 | false |
| AI_GATEWAY_ID | AI 网关实例 ID | 空 |
| AI_GATEWAY_NAME | AI 网关实例名称 | 空 |
| AI_GATEWAY_REGION | AI 网关所在地域 | 空 |
| AI_GATEWAY_ACCESS_KEY | AI 网关 AccessKey | 空 |
| AI_GATEWAY_SECRET_KEY | AI 网关 SecretKey | 空 |
| NACOS_ADMIN_PASSWORD | Nacos 管理员密码 | nacos |
| HIGRESS_USERNAME | Higress 登录用户名 | admin |
| HIGRESS_PASSWORD | Higress 登录密码 | admin |
| ADMIN_USERNAME | 后台管理员用户名 | admin |
| ADMIN_PASSWORD | 后台管理员密码 | admin |
| FRONT_USERNAME | 前台默认用户名 | demo |
| FRONT_PASSWORD | 前台默认密码 | demo123 |
| NACOS_VERSION | Nacos 镜像版本 | v3.1.1 |
| NACOS_IMAGE_REGISTRY | Nacos 镜像仓库 | nacos-registry.cn-hangzhou.cr.aliyuncs.com |
| NACOS_IMAGE_REPOSITORY | Nacos 镜像地址 | nacos/nacos-server |
| HIGRESS_REPO_NAME | Higress Helm 仓库名称 | higress.io |
| HIGRESS_REPO_URL | Higress Helm 仓库地址 | https://higress.cn/helm-charts |
| HIGRESS_CHART_REF | Higress Chart 引用 | higress.io/higress |
| NACOS_REPO_NAME | Nacos Helm 仓库名称 | ygqygq2 |
| NACOS_REPO_URL | Nacos Helm 仓库地址 | https://ygqygq2.github.io/charts/ |
| NACOS_CHART_REF | Nacos Chart 引用 | ygqygq2/nacos |
| HIMARKET_HUB | Himarket 镜像仓库地址 | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group |
| HIMARKET_IMAGE_TAG | Himarket 镜像标签 | latest |
| HIMARKET_MYSQL_IMAGE_TAG | MySQL 镜像标签 | latest |


注：Himarket 的 Helm 包适配阿里云 ACK 集群使用，/helm/values.yaml 文件下存储类 persistence.storageClass: "alicloud-disk-essd"  值需根据实际环境调整。

## 四、云平台部署（阿里云）

阿里云计算巢支持该项目的开箱即用版本，可一键部署社区版：[![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/cn-hangzhou?type=user&ServiceId=service-b96fefcb748f47b7b958)


