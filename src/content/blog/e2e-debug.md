---
title: 教程：如何在本地进行higress调试和端到端测试
keywords: [higress]
description: 在本地快速完成e2e测试并实现debug功能
author: SJC
date: "2023-12-19"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/e2e-debug.md
category: "article"
---

## 背景说明

### 本地调试

本地调试旨在在开发者的本地开发环境中识别、定位和修复代码中的错误（bug）。这个阶段的主要目标是确保单个模块或组件的正确性，以便更容易理解和解决问题。

开发者通常使用本地集成开发环境（IDE）或调试器来逐步执行代码、查看变量的值、观察程序的流程，并通过打断点来检查代码的执行过程。

本地调试是一个快速、迅速定位问题并进行修复的阶段，能够提供实时的反馈。它有助于确保代码的局部正确性，而不需要考虑整个系统的交互。

### 端到端测试

e2e测试是一种端到端的测试，是一种全面的测试方法，用于验证整个软件系统在真实环境中的功能和性能。它模拟用户的实际使用情况，确保整个系统的各个部分正确协同工作，以达到用户期望的功能。

端到端测试关注整个系统的集成和交互，旨在发现不同组件之间的问题以及在实际使用场景中可能出现的 bug。这有助于确保系统在生产环境中的稳定性和可靠性。

在higress中，e2e测试的主要流程可用下图来表示：

![img.png](/img/blog/e2e-debug0.png)

### 弊端

- 在本地开发的过程中，我们需要频繁的进行e2e测试，但是每次都要重新构建镜像、加载镜像、安装higress、运行e2e测试，这样的过程非常耗时，因此我们希望尽量地减少这些过程，复用测试环境以提高开发效率。

- 当e2e运行的时候出现问题，我们希望能够快速定位问题，这就需要在e2e测试中实现本地调试的功能。

- 另外，通常开发wasm插件的时候是不需要重新构建镜像的，只需要复用测试环境即可。然而，当涉及到higress-core组件代码(higress核心代码)修改的时候，就需要重新构建镜像，频繁地修改代码、重新构建镜像以运行e2e测试，这样开发效率就会大大降低。

### 解决方案

- 不涉及higress-core组件修改

可分为端到端测试的优化和在端到端测试中实现本地调试的功能，端到端优化可采用实现测试环境复用的方法，通过修改makefile文件来减少环境的创建等开销。

而在端到端测试中实现本地调试的功能，可通过Goland来实现，提前准备好测试环境，修改e2e测试的部分代码来减少e2e环境创建的开销，更加方便的实现debug功能。

- 涉及higress-core组件修改

可在本地启动higress-core组件，并使其能够与kind集群中的discovery、gateway等组件进行交互。

例如在涉及到higress-config的ConfigMap修改的时候，其流程大致如下：

![img.png](/img/blog/e2e-debug5.png)

可以发现，只需要修改higress-core容器与discovery容器之间的xds协议通信地址，使其能够与本地的higress-core容器进行交互，其是注册在grpc服务上的，因此只需要修改xds地址为本地的grpc服务地址即可。

## 具体实现

### 端到端测试优化

通过makefile来完成，包含启动系列环境和执行e2e测试。

以运行插件测试为例，其make命令如下：

```makefile
.PHONY: higress-wasmplugin-test
higress-wasmplugin-test: $(tools/kind) delete-cluster create-cluster docker-build kube-load-image install-dev-wasmplugin run-higress-e2e-test-wasmplugin delete-cluster
```

开发者首次运行环境可先删除最后一个`delete-cluster`的操作，第二次运行e2e测试的时候可以删除前面的操作，只保留`run-higress-e2e-test-wasmplugin`的操作，这样就可以减少很多时间。

然而make命令不支持添加到goland里面实现debug功能，运行出错的时候也不方便定位问题，更推荐使用下面这个方法。

### 在e2e中实现本地调试

通过Goland来完成，提前准备好环境，修改Goland启动参数来完成本地调试。

- e2e测试之前的准备

根据各自的需求来定制环境，如果测试环境中需要用到higress的controller、gateway等组件，需要提前本地安装好环境，安装教程可参考[这里](https://higress.io/zh-cn/docs/user/quickstart/)，或者参考端到端测试优化步骤来准备好测试环境。

安装好higress后，可以使用如下命令来查看higress的pod是否正常运行：

```shell
kubectl get pods --all-namespaces
```

显示结果如下图所示：

![1.png](/img/blog/e2e-debug1.png)

都显示Running状态，说明higress已经正常运行。

- e2e的flag修改

在`test/e2e/conformance/utils/flags`目录下，有一个`flags.go`文件，里面定义了e2e测试的flag：

```go
var (
    IngressClassName     = flag.String("ingress-class", "higress", "Name of IngressClass to use for tests")
    ShowDebug            = flag.Bool("debug", false, "Whether to print debug logs")
    CleanupBaseResources = flag.Bool("cleanup-base-resources", true, "Whether to cleanup base test resources after the run")
    SupportedFeatures    = flag.String("supported-features", "", "Supported features included in conformance tests suites")
    ExemptFeatures       = flag.String("exempt-features", "", "Exempt Features excluded from conformance tests suites")
    IsWasmPluginTest     = flag.Bool("isWasmPluginTest", false, "Determine if run wasm plugin conformance test")
    WasmPluginType       = flag.String("wasmPluginType", "GO", "Define wasm plugin type, currently supports GO, CPP")
    WasmPluginName       = flag.String("wasmPluginName", "", "Define wasm plugin name")
    IsEnvoyConfigTest    = flag.Bool("isEnvoyConfigTest", false, "Determine if run envoy config conformance test")
)
```
可临时修改这些flag的初始值，也可以在Goland编辑器中定义启动参数，例如设置`IsWasmPluginTest`为true可只运行wasm插件的e2e测试。

修改好flag之后，我们就可以在Goland中通过debug的方式运行e2e测试。可先在如下位置添加一个断点，等待e2e环境准备完毕：

![2.png](/img/blog/e2e-debug2.png)

e2e测试在前期环境准备的过程中会创建一些namespace并启动一些pod，可以手动查看一下pod的启动情况。

![img.png](/img/blog/e2e-debug3.png)

在这张图里面，除了我们提前安装好的higress组件之外，还有一些其他的pod，这些pod是e2e测试过程中创建的，如果有些pod在本地e2e测试中用不到，可手动修改代码来减少前期环境的准备时间。

> 注意：如果设置了cleanup-base-resources为false，那么e2e测试结束之后，这些pod不会被删除，但是重启的时候会报错，例如：
> ```
> Pod "consul-standlone" is invalid: spec: Forbidden: pod updates may not change fields other than `spec.containers[*].image`, `spec.initContainers[*].image`, `spec.activeDeadlineSeconds`, `spec.tolerations` (only additions to existing tolerations) or `spec.terminationGracePeriodSeconds` (allow it to be set to 1 if it was previously negative)
> ```

> 建议设置为true，每次测试完需要等待pod的销毁，然后重新测试，这些过程一般很快，也可以修改代码来减少一些pod的创建。

- e2e测试环境优化

例如只需要higress环境，而不需要`higress-conformance-infra`,`higress-conformance-app-backend`等namespace环境，可以手动在如下几行代码里添加注释，来跳过这些环境的创建，然后测试中只用到了higress的组件：

![img.png](/img/blog/e2e-debug4.png)

在这里，我只需要运行`EnvoyConfigTracing`的Test测试，它只跟higress和higress-conformance-infra有关，注释掉了其他namespace的准备环境，可以看到e2e测试不到1s就结束了。

如果需要其他namespace的环境，而不需要nacos/consul等环境，可以在suite的New方法里找到以下代码块，根据需要进行注释：

```go
// apply defaults
if suite.BaseManifests == nil {
	suite.BaseManifests = []string{
		"base/manifests.yaml",
		"base/consul.yaml",
		"base/eureka.yaml",
		"base/nacos.yaml",
		"base/dubbo.yaml",
	}
}
```

解决好e2e测试的环境相关问题，我们就可以在Goland里添加自己想要的断点，来debug测试用例了。

### higress-core本地调试+e2e测试

- 首先在本地启动higress-core组件，需要修改其启动参数，与正常部署的启动参数保持一致，可参考如下配置Goland的启动参数：

![img.png](/img/blog/e2e-debug6.png)

- 查找自己的本机非回环网卡的ip地址，例如我使用wlo0网卡，也就是192.168.0.189

![img.png](/img/blog/e2e-debug7.png)



- 修改xds协议地址，运行`kubectl edit cm higress-config -n higress-system`，将其修改本地的grpc服务地址，如图：

![img.png](/img/blog/e2e-debug8.png)

将其中的127.0.0.1:15051修改为192.168.0.189:15051，保存退出。

- 重启controller和gateway deployment，使其能够重新加载配置:

```shell
kubectl rollout restart deployment higress-gateway -n higress-system
```

```shell
kubectl rollout restart deployment higress-controller -n higress-system
```

![img.png](/img/blog/e2e-debug9.png)

- 重启成功后可以先运行一下简单的e2e测试，比如http route等，测试是否能正常连通gateway，关于ConfigMap部分，我这里给本地higress-core添加了一个global-option的配置，此时kind的core组件还没有该配置，按照前面步骤启动本地higress-core并修改xds地址重启负载之后，运行相关的e2e测试，可以看到测试通过，本地higress-core日志以及kind上的discovery日志如下：

![img.png](/img/blog/e2e-debug10.png)

通过本地higress-core日志可以看到ads成功推送出去envoyfilter配置文件给discovery，而discovery日志则显示lds/rds/cds等成功将配置文件推送给gateway。

## hgctl code-debug的使用

hgctl已经推出code-debug的功能，会自动修改xds地址，使其能够与本地的higress-core进行交互。这里需要使用hgctl来安装higress，目前code-debug只支持local-k8s的profile。

- hgctl安装higress

```shell
hgctl install --set profile=local-k8s
```

等待安装完成后，手动查看一下是否启动成功。

- 启动本地higress-core

修改Goland启动参数为`serve --kubeconfig=/root/.kube/config`(改为自己的home目录)，然后启动higress-core，等待higress-core启动成功。

- 开启code-debug

```shell
hgctl code-debug start
```

查看controller和gateway的pod是否重启成功，如果重启成功，说明code-debug已经生效。

- 其他环境准备

在后面的步骤上涉及到Ingress资源，这里需要准备一下Ingress资源，运行如下命令：

```shell
kubectl apply -f - <<EOF
apiVersion: v1
kind: Namespace
metadata:
  name: higress-conformance-infra
  labels:
    higress-conformance: infra
---
apiVersion: v1
kind: Service
metadata:
  name: infra-backend-v1
  namespace: higress-conformance-infra
spec:
  selector:
    app: infra-backend-v1
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: infra-backend-v1
  namespace: higress-conformance-infra
  labels:
    app: infra-backend-v1
spec:
  replicas: 2
  selector:
    matchLabels:
      app: infra-backend-v1
  template:
    metadata:
      labels:
        app: infra-backend-v1
    spec:
      containers:
      - name: infra-backend-v1
        # From https://github.com/kubernetes-sigs/ingress-controller-conformance/tree/master/images/echoserver
        image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echoserver:v20221109-7ee2f3e
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        resources:
          requests:
            cpu: 10m
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: higress-conformance-infra-configmap-global-test
  namespace: higress-conformance-infra
spec:
  ingressClassName: higress
  rules:
    - host: "foo.com"
      http:
        paths:
          - pathType: Prefix
            path: "/foo"
            backend:
              service:
                name: infra-backend-v1
                port:
                  number: 8080
EOF
```

- 调试higress-core

以ConfigMap的gzip(位于pkg/ingress/kube/configmap/gzip.go)为例，修改`NewDefaultGzip`方法，将`Enable`的默认值修改为true，然后重启higress-core。

在重启之前，先运行如下shell命令，启动envoy查看面板：

```shell
hgctl dashboard envoy
```

访问http://localhost:15000/config_dump，使用Ctrl+F搜索`compression_level`，可以看到查找结果为空，说明gzip配置还没有生效。

接下来重启higress-core，等待higress-core重启成功，再次访问http://localhost:15000/config_dump，使用Ctrl+F搜索`compression_level`，可以看到查找结果不为空，说明gzip配置已经生效。

- 关闭code-debug

```shell
hgctl code-debug stop
```

## 总结

1. 本地调试和e2e测试是开发过程中必不可少的环节，通过本文的介绍，我们可以更加方便的进行本地调试和e2e测试，提高开发效率。
2. 涉及到higress-core组件修改的时候，我们可以通过修改xds地址并本地启动higress-core，而不需要频繁地修改代码、重新构建镜像以运行e2e测试，并且还能调试higress-core组件的代码。
3. higress后续会推出一些新功能，实现e2e测试的拆分，主要会分为准备环境，运行测试以及清除环境等，灵活性更高。
