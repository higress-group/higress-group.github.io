---
title: 修改内置插件的镜像地址
keywords: [ops,config,plugin,repository,url]
description: 介绍如何修改 Higress Console 中内置插件的镜像地址
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/builtin-plugin-url.md
---

# 修改内置插件的镜像地址

## 环境要求

Higress 版本需不低于 2.1.0。

## 一般用户插件的配置方法

要满足这一需求，只需要为 Higress Console 容器添加 `HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN` 环境变量，值为自定义镜像地址的格式模版。模版可以按需使用 `${name}` 和 `${version}` 作为插件名称和镜像版本的占位符。

**例 1：**

在进行了以下配置后，

```bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/${name}:${version}
```

Higress Console 针对 key-rate-limit 插件生成的镜像地址将为：`oci://hub.example.com/wasm-plugins/key-rate-limit:1.0.0`

**例 2：**

在进行了以下配置后，

```bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.100:8080/wasm-plugins/${name}.wasm
```

Higress Console 针对 key-rate-limit 插件生成的镜像地址将为：`http://192.168.1.100:8080/wasm-plugins/key-rate-limit.wasm`

### Helm 部署方式配置方法

#### 1. 导出当前部署配置

```bash
helm get values higress -n higress-system > values.yaml
```

#### 2. 修改配置

添加以下节点：

```yaml
higress-console:
  podEnvs:
    HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN: your-custom-image-url-pattern
```

#### 3. 更新当前部署

```bash
# ${higress_version} 为当前部署的 Higress 版本，例如 v2.1.3
helm upgrade higress --version ${higress_version} -n higress-system higress.io/higress -f values.yaml
```

### Docker Compose 部署方式配置方法

直接修改 `compose/env/console.env` 文件，添加对应的环境变量即可。需要注意的是，环境变量取值中的 `$` 字符需要转义成 `$$`，否则将无法正常生效，例如：

```bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/$${name}.wasm
```

### Docker All-in-One 部署方式配置方法

在启动容器的 docker 命令中添加 `-e` 参数来指定环境变量。需要注意的是，环境变量取值中的 `$` 字符需要转义成 `\$`，否则将无法正常生效，例如：

```bash
-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/\${name}.wasm
```

### 注意事项

以上配置不会影响已经保存的插件配置。如果需要修改这些插件配置中的镜像地址，可以在 Higress Console 的插件配置页面进行针对性修改。

![Edit a built-in plugin](/img/docs/ops/how-tos/builtin-plugin-url/edit-builtin-plugin-zh.png)

## 对接 Nacos 3.x 所生成的 MCP Server 插件地址配置

在对接了 Nacos 3.x 的 MCP 注册中心功能后，Higress Controller 会自动为启动的 MCP Server 生成 mcp-server 插件的配置。而配置中的镜像地址默认指向 Higress 公共插件仓库。如果需要自定义，则需要修改 Higress Controller 的 `MCP_SERVER_WASM_IMAGE_URL` 环境变量。

### Helm 部署方式配置方法

#### 1. 导出当前部署配置

```bash
helm get values higress -n higress-system > values.yaml
```

#### 2. 修改配置

添加以下节点：

```yaml
higress-core:
  controller:
    env:
      MCP_SERVER_WASM_IMAGE_URL: your-mcp-server-image-url 
```

#### 3. 更新当前部署

```bash
# ${higress_version} 为当前部署的 Higress 版本，例如 v2.1.3
helm upgrade higress --version ${higress_version} -n higress-system higress.io/higress -f values.yaml
```

### Docker Compose 部署方式配置方法

直接修改 `compose/env/controller.env` 文件，添加对应的环境变量即可。需要注意的是，环境变量取值中的 `$` 字符需要转义成 `$$`，否则将无法正常生效，例如：

```bash
MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
```

### Docker All-in-One 部署方式配置方法

在启动容器的 docker 命令中添加 `-e` 参数来指定环境变量。需要注意的是，环境变量取值中的 `$` 字符需要转义成 `\$`，否则将无法正常生效，例如：

```bash
-e MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
```
