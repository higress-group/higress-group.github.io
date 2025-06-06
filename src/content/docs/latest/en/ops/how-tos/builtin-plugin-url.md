---
title: Change the Image URLs of Built-In Wasm Plugins
keywords: [ops,config,plugin,repository,url]
description: Introduce how to change the image URLs of built-in Wasm plugins in Higress Console
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/builtin-plugin-url.md
---

# Change the Image URLs of Built-In Wasm Plugins

## Environment Requirements

Higress version must be 2.1.0 or higher.

## Configuration Method for General User Plugins

To meet this requirement, you only need to add the `HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN` environment variable to the Higress Console container, with the value being the format template for your custom image URL. The template can use `${name}` and `${version}` as placeholders for the plugin name and image version as needed.

**Example 1:**

After making the following configuration,

```bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/${name}:${version}
```

The image URL generated by Higress Console for the key-rate-limit plugin will be: `oci://hub.example.com/wasm-plugins/key-rate-limit:1.0.0`

**Example 2:**

After making the following configuration,

```bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.100:8080/wasm-plugins/${name}.wasm
```

The image URL generated by Higress Console for the key-rate-limit plugin will be: `http://192.168.1.100:8080/wasm-plugins/key-rate-limit.wasm`

### Configuration Method for Helm Deployment

#### 1. Export Current Deployment Configuration

```bash
helm get values higress -n higress-system > values.yaml
```

#### 2. Modify Configuration

Add the following configuration:

```yaml
higress-console:
  podEnvs:
    HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN: your-custom-image-url-pattern
```

#### 3. Update Current Deployment

```bash
# ${higress_version} is the current deployed Higress version, for example v2.1.3
helm upgrade higress --version ${higress_version} -n higress-system higress.io/higress -f values.yaml
```

### Configuration Method for Docker Compose Deployment

Directly modify the `compose/env/console.env` file and add the corresponding environment variable. Note that the `$` character in the environment variable value needs to be escaped as `$$`, otherwise it will not take effect properly, for example:

```bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/$${name}.wasm
```

### Configuration Method for Docker All-in-One Deployment

Add the `-e` parameter to the docker command when starting the container to specify the environment variable. Note that the `$` character in the environment variable value needs to be escaped as `\$`, otherwise it will not take effect properly, for example:

```bash
-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/\${name}.wasm
```

### Notes

The above configuration will not affect plugin configurations that have already been saved. If you need to modify the image URLs in these plugin configurations, you can make targeted modifications on the plugin configuration page of the Higress Console.

![Edit a built-in plugin](/img/docs/ops/how-tos/builtin-plugin-url/edit-builtin-plugin-zh.png)

## Configuration for MCP Server Plugin Addresses Generated by Nacos 3.x Integration

After integrating with the MCP registry function of Nacos 3.x, Higress Controller will automatically generate the configuration for the mcp-server plugin for the started MCP Server. The image URL in the configuration defaults to the Higress public plugin repository. If you need to customize it, you need to modify the `MCP_SERVER_WASM_IMAGE_URL` environment variable of Higress Controller.

### Configuration Method for Helm Deployment

#### 1. Export Current Deployment Configuration

```bash
helm get values higress -n higress-system > values.yaml
```

#### 2. Modify Configuration

Add the following node:

```yaml
higress-core:
  controller:
    env:
      MCP_SERVER_WASM_IMAGE_URL: your-mcp-server-image-url 
```

#### 3. Update Current Deployment

```bash
# ${higress_version} is the current deployed Higress version, for example v2.1.3
helm upgrade higress --version ${higress_version} -n higress-system higress.io/higress -f values.yaml
```

### Configuration Method for Docker Compose Deployment

Directly modify the `compose/env/controller.env` file and add the corresponding environment variable. Note that the `$` character in the environment variable value needs to be escaped as `$$`, otherwise it will not take effect properly, for example:

```bash
MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
```

### Configuration Method for Docker All-in-One Deployment

Add the `-e` parameter to the docker command when starting the container to specify the environment variable. Note that the `$` character in the environment variable value needs to be escaped as `\$`, otherwise it will not take effect properly, for example:

```bash
-e MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
```