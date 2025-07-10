---
title: Custom Plugin
keywords: [higress, custom, plugin]
description: Custom plugin configuration reference
---

## Edit the Wasm file

1. [SDK](https://github.com/alibaba/higress/tree/main/plugins/wasm-go) for developing Higress Wasm plugins using Go language
2. [Plugin development example](../user/wasm-go.md)

## Build the Wasm image

You can also choose to build the wasm locally first, and then copy it to the Docker image. This requires you to set up a build environment locally first.

> **Note**:
>
> TinyGo has specific version requirements. Currently, the stable version combination that has been extensively validated is: tinygo 0.29 + go 1.20. You can refer to this official [Makefile](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/Makefile)
>
> go 1.24 now natively supports compiling wasm files, related documentation is being updated

The following is an example of local steps to build the [request-block](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block) plugin.

### step1. Compile wasm

```bash
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
```

For detailed compilation instructions, including how to use more complex Header state management mechanisms, please refer to [Best Practices for Go Plugin Development](https://higress.cn/docs/latest/user/wasm-go/#3-%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90-wasm-%E6%96%87%E4%BB%B6).

### step2. Build and push the docker image of the plugin

Use this simple Dockerfile

```Dockerfile
FROM scratch
COPY main.wasm plugin.wasm
```

```bash
docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .
docker push <your_registry_hub>/request-block:1.0.0
```

## Enable Wasm plugin

### Using the Higress console

Click the `Create` button to create a custom plug-in in the plug-in market, and fill in the Wasm mirror address built above in the mirror address column;

After the creation is complete, click the configuration button of the plug-in card, fill in the configuration of the plug-in (if any), and turn on the switch to take effect.

If the plug-in logic changes, you can build a new image with a different image tag, click the "Edit" button in the upper right menu of the plug-in card, and change the address of the Wasm image to the address of the new version.

### Using CRDs

Write the WasmPlugin resource as follows:

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
   name: request-block
   namespace: higress-system
spec:
   defaultConfig:
     block_urls:
     - "swagger.html"
   url: oci://<your_registry_hub>/request-block:1.0.0 # The address of the image built and pushed before
```

Use `kubectl apply -f <your-wasm-plugin-yaml>` to apply the resources.
After the resource takes effect, if the request url carries `swagger.html`, the request will be rejected, for example:

```bash
curl <your_gateway_address>/api/user/swagger.html
```

```text
HTTP/1.1 403 Forbidden
date: Wed, 09 Nov 2022 12:12:32 GMT
server: istio-envoy
content-length: 0
```
