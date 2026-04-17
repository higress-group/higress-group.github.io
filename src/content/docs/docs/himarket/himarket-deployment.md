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

包含以下服务组件：

+ **MySQL：** 数据库服务，为后端服务和 Nacos 提供数据存储；
+ **Nacos：** 配置中心，运行在 8848 端口；
+ **Higress：** AI 网关服务，控制台运行在 8001 端口，网关 HTTP 入口运行在 8082 端口；
+ **Redis：** Higress 缓存服务；
+ **HiMarket Server：** 后端 API 服务，运行在 8081 端口；
+ **HiMarket Admin：** 管理后台界面，运行在 5175 端口；
+ **HiMarket Frontend：** 开发者门户界面，运行在 5173 端口；
+ **Sandbox：** 远程沙箱服务，支持云 IDE 功能。

### 安装命令

**环境依赖：** docker、docker compose、curl、jq

**交互式部署（推荐）：**

```bash
# 克隆项目
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/docker

# 交互式部署，脚本会逐步引导完成所有配置
./install.sh
```

脚本会引导您完成镜像选择、密码设置、AI 模型配置等所有配置项。首次安装时，数据库密码和服务凭证会自动生成随机值。

**非交互模式（CI/CD）：**

```bash
cp .env.example ~/himarket-install-docker.env
# 编辑 ~/himarket-install-docker.env 按需修改配置
./install.sh -n
```

**卸载：**

```bash
./install.sh --uninstall
```

**升级：**

重新运行 `./install.sh`，脚本会自动检测已有部署并提供升级选项。配置自动保存到 `~/himarket-install-docker.env`，升级时自动复用。

**重试数据初始化：**

```bash
# 仅重试初始化钩子，不重新部署服务
./install.sh --init-data

# 或手动执行单个钩子
cd hooks/post_ready.d
./10-init-nacos-admin.sh
```

### 服务端口

| 服务 | 主机端口 | 说明 |
|------|---------|------|
| HiMarket Frontend | 5173 | 开发者门户界面 |
| HiMarket Admin | 5175 | 管理后台界面 |
| HiMarket Server | 8081 | 后端 API 服务 |
| Nacos | 8848 | Nacos 控制台 |
| Higress Console | 8001 | Higress 控制台 |
| Higress Gateway | 8082 | 网关 HTTP 入口 |
| MySQL | 3306 | 数据库服务 |
| Redis | 6379 | Redis 服务 |

### 安装配置

配置文件为 `~/himarket-install-docker.env`（交互模式下自动生成），也可从 `.env.example` 模板复制。主要配置项：

| 配置名 | 配置说明 | 默认值 |
| --- | --- | --- |
| HIMARKET_SERVER_IMAGE | HiMarket 后端服务镜像 | opensource-registry...himarket-server:latest |
| HIMARKET_ADMIN_IMAGE | HiMarket 管理后台镜像 | opensource-registry...himarket-admin:latest |
| HIMARKET_FRONTEND_IMAGE | HiMarket 前台服务镜像 | opensource-registry...himarket-frontend:latest |
| MYSQL_IMAGE | MySQL 镜像地址 | opensource-registry...mysql:latest |
| NACOS_IMAGE | Nacos 镜像地址 | nacos-registry...nacos-server:v3.2.1-2026.03.30 |
| HIGRESS_IMAGE | Higress 镜像地址 | higress-registry...all-in-one:latest |
| REDIS_IMAGE | Redis 镜像地址 | higress-registry...redis-stack-server:7.4.0-v3 |
| SANDBOX_IMAGE | Sandbox 镜像地址 | opensource-registry...sandbox:latest |
| MYSQL_ROOT_PASSWORD | MySQL Root 密码 | 自动生成 |
| MYSQL_PASSWORD | MySQL 应用密码 | 自动生成 |
| NACOS_ADMIN_PASSWORD | Nacos 管理员密码 | 自动生成 |
| HIGRESS_USERNAME | Higress 登录用户名 | admin |
| HIGRESS_PASSWORD | Higress 登录密码 | 自动生成 |
| ADMIN_USERNAME | 后台管理员用户名 | admin |
| ADMIN_PASSWORD | 后台管理员密码 | 自动生成 |
| FRONT_USERNAME | 前台默认用户名 | user |
| FRONT_PASSWORD | 前台默认密码 | 自动生成 |
| SKIP_AI_MODEL_INIT | 是否跳过 AI 模型初始化 | true |
| AI_MODEL_COUNT | AI 模型数量 | 0 |

> 完整配置项请参考 `.env.example` 文件。日志文件位于 `~/himarket-install-docker.log`。

## 三、使用 Helm 进行云原生部署

Helm 是 Kubernetes 的包管理工具。通过 `install.sh` 脚本可在 K8s 集群上一键部署 HiMarket + Higress + Nacos 全栈服务，包含以下组件：

+ **HiMarket：**
    - himarket-server：后端 API 服务；
    - himarket-admin：管理后台界面；
    - himarket-frontend：开发者门户界面；
    - mysql：可选内置数据库；
    - sandbox-shared：远程沙箱服务。
+ **Higress：**
    - higress-console：Higress 控制台；
    - higress-controller：控制面组件；
    - higress-gateway：数据面组件；
    - redis-stack-server：缓存组件。
+ **Nacos：**
    - nacos：Nacos 应用；
    - nacos-mysql：Nacos 数据库。

**服务类型说明：**

默认为 LoadBalancer 类型服务，适用于云环境（阿里云 ACK、AWS EKS 等）。如果您的环境不支持 LoadBalancer（如本地 minikube、自建集群），可以使用 NodePort 或端口转发方式访问。

### 安装命令

**环境依赖：** kubectl（已连接 K8s 集群）、helm、curl、jq、python3

**交互式部署（推荐）：**

```bash
# 克隆项目
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/helm

# 交互式部署
./install.sh
```

**非交互模式（CI/CD）：**

```bash
cp .env.example ~/himarket-install.env
# 编辑 ~/himarket-install.env 按需修改配置
./install.sh -n
```

**卸载：**

```bash
./install.sh --uninstall
```

**升级：**

重新运行 `./install.sh`，脚本会自动检测已有部署并提供升级选项。配置自动保存到 `~/himarket-install.env`，升级时自动复用。

**重试数据初始化：**

```bash
# 仅重试初始化钩子，不重新部署服务
./install.sh --init-data

# 或手动执行单个钩子
cd hooks/post_ready.d
./10-init-nacos-admin.sh
```

### 安装配置

配置文件为 `~/himarket-install.env`（交互模式下自动生成），也可从 `.env.example` 模板复制。主要配置项：

| 配置名 | 配置说明 | 默认值 |
| --- | --- | --- |
| NAMESPACE | Kubernetes 命名空间 | himarket |
| HIMARKET_HUB | HiMarket 镜像仓库地址 | opensource-registry...higress-group |
| HIMARKET_IMAGE_TAG | HiMarket 镜像标签 | latest |
| NACOS_VERSION | Nacos 镜像版本 | v3.2.1-2026.03.30 |
| MYSQL_ROOT_PASSWORD | MySQL Root 密码 | 自动生成 |
| MYSQL_PASSWORD | MySQL 应用密码 | 自动生成 |
| NACOS_ADMIN_PASSWORD | Nacos 管理员密码 | 自动生成 |
| HIGRESS_USERNAME | Higress 登录用户名 | admin |
| HIGRESS_PASSWORD | Higress 登录密码 | 自动生成 |
| ADMIN_USERNAME | 后台管理员用户名 | admin |
| ADMIN_PASSWORD | 后台管理员密码 | 自动生成 |
| FRONT_USERNAME | 前台默认用户名 | user |
| FRONT_PASSWORD | 前台默认密码 | 自动生成 |
| MYSQL_STORAGE_CLASS | MySQL 存储类 | alicloud-disk-essd |
| MYSQL_STORAGE_SIZE | MySQL 存储大小 | 50Gi |
| SANDBOX_STORAGE_CLASS | Sandbox 存储类 | alicloud-disk-essd |
| SANDBOX_STORAGE_SIZE | Sandbox 存储大小 | 50Gi |
| HIGRESS_INGRESS_CLASS | Higress IngressClass | himarket |
| SKIP_AI_MODEL_INIT | 是否跳过 AI 模型初始化 | true |
| AI_MODEL_COUNT | AI 模型数量 | 0 |

> 完整配置项请参考 `.env.example` 文件。存储类 `MYSQL_STORAGE_CLASS` 和 `SANDBOX_STORAGE_CLASS` 需根据实际 K8s 环境调整。日志文件位于 `~/himarket-install.log`。

## 四、云平台部署（阿里云）

阿里云计算巢支持该项目的开箱即用版本，可一键部署社区版：[![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/cn-hangzhou?type=user&ServiceId=service-b96fefcb748f47b7b958)
