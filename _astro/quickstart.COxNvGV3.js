const e="latest/zh-cn/user/quickstart.md",s="docs",t="latest/zh-cn/user/quickstart",a=`
# \u5FEB\u901F\u5F00\u59CB

## \u73AF\u5883\u4E00\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528

### \u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5

#### \u573A\u666F\u4E00\uFF1A\u5728\u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u4F7F\u7528

**Helm \u5B89\u88C5\u547D\u4EE4**

\`\`\`bash
helm repo add higress.io https://higress.cn/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
\`\`\`

**Higress \u7684\u6240\u6709 Docker \u955C\u50CF\u90FD\u4E00\u76F4\u4F7F\u7528\u81EA\u5DF1\u72EC\u4EAB\u7684\u4ED3\u5E93\uFF0C\u4E0D\u53D7 Docker Hub \u5883\u5185\u8BBF\u95EE\u53D7\u9650\u7684\u5F71\u54CD**


\u83B7\u53D6 Higress Gateway \u7684 LoadBalancer IP\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u6765\u3002\u540E\u7EED\u53EF\u4EE5\u901A\u8FC7\u8BE5 IP \u7684 80 \u548C 443 \u7AEF\u53E3\u8BBF\u95EE Higress Gateway\u3002
\`\`\`bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
\`\`\`
**\u5907\u6CE8**

\u5982\u679C LoadBalancer IP \u83B7\u53D6\u4E0D\u5230\uFF0C\u8BF4\u660E\u60A8\u5F53\u524D\u7684 K8s \u96C6\u7FA4\u4E0D\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684 Service\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u65B9\u6848\uFF1A

1. \u4F7F\u7528\u4E91\u5382\u5546\u63D0\u4F9B\u7684 K8s \u670D\u52A1\uFF0C\u4F8B\u5982[\u963F\u91CC\u4E91 ACK](https://www.aliyun.com/product/kubernetes)
2. \u53C2\u8003[\u8FD0\u7EF4\u53C2\u6570\u914D\u7F6E](https://higress.cn/docs/latest/user/configurations)\uFF0C\u5F00\u542F\`higress-core.gateway.hostNetwork\`\uFF0C\u8BA9 Higress \u76D1\u542C\u672C\u673A\u7AEF\u53E3\uFF0C\u518D\u901A\u8FC7\u5176\u4ED6\u8F6F/\u786C\u8D1F\u8F7D\u5747\u8861\u5668\u8F6C\u53D1\u7ED9\u56FA\u5B9A\u673A\u5668 IP
3. \uFF08\u751F\u4EA7\u4E0D\u5EFA\u8BAE\uFF09\u4F7F\u7528\u5F00\u6E90\u7684\u8D1F\u8F7D\u5747\u8861\u65B9\u6848 [MetalLB](https://metallb.universe.tf/)

#### \u573A\u666F\u4E8C\uFF1A\u5728\u672C\u5730 K8s \u73AF\u5883\u4E2D\u4F7F\u7528

\u4EE5\u4E0B\u6B65\u9AA4\u9002\u7528\u4E8E\u6240\u6709\u5728\u672C\u5730\u542F\u52A8 K8s \u96C6\u7FA4\u8FDB\u884C\u9A8C\u8BC1\u7684\u573A\u666F\u3002\u5982\u679C\u60A8\u672C\u5730\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8F6C\u5230\u7B2C\u4E09\u6B65\u5B89\u88C5 Higress\u3002

##### \u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5 kubectl & kind

**MacOS\uFF1A**
\`\`\`bash
# for Intel Macs
[ $(uname -m) = x86_64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
# for Apple Silicon Macs (M1/M2)
[ $(uname -m) = arm64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

**Windows \u4E2D\u4F7F\u7528 PowerShell\uFF1A**

\u4E0B\u8F7D [kubectl v1.27.1](https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe) \u548C [kind v0.18.0](https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64)\u3002

\u5982\u679C\u4F60\u672C\u5730\u5B89\u88C5\u4E86 \`curl\` \u5DE5\u5177\uFF0C\u53EF\u76F4\u63A5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A
\`\`\`powershell
curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64
\`\`\`
> \u6CE8\uFF1A\u82E5\u8981\u83B7\u77E5 \`kubectl\` \u7684\u6700\u65B0\u7A33\u5B9A\u7248\u672C\uFF08\u4F8B\u5982\u7528\u4E8E\u811A\u672C\u7F16\u5199\u7B49\u573A\u666F\uFF09\uFF0C\u53EF\u67E5\u770B https://dl.k8s.io/release/stable.txt \u7684\u5185\u5BB9.

\u7136\u540E\u5C06\u4E0B\u8F7D\u4E0B\u6765\u7684 \`kind-windows-amd64\` \u6216\u8005 \`kind-windows-amd64.exe\` \u91CD\u547D\u540D\u4E3A \`kind.exe\`\uFF0C\u5E76\u5C06 \`kubectl.exe\` \u548C \`kind.exe\` \u79FB\u52A8\u5230 \`PATH\` \u73AF\u5883\u53D8\u91CF\u6240\u5305\u542B\u7684\u8DEF\u5F84\u4E0B\u3002

**Linux:**

\`\`\`bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

##### \u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA\u5E76\u542F\u7528 kind

\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6: \`cluster.conf\`

\`\`\`yaml
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
# networking:
  # WARNING: It is _strongly_ recommended that you keep this the default
  # (127.0.0.1) for security reasons. However it is possible to change this.
  # apiServerAddress: "0.0.0.0"
  # By default the API server listens on a random open port.
  # You may choose a specific port but probably don't need to in most cases.
  # Using a random port makes it easier to spin up multiple clusters.
  # apiServerPort: 6443
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
\`\`\`
Mac & Linux \u7CFB\u7EDF\u6267\u884C\uFF1A
\`\`\`bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
\`\`\`
Windows \u7CFB\u7EDF\u6267\u884C:
\`\`\`bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
\`\`\`

**\u5907\u6CE8**

\u4E0A\u8FF0\u914D\u7F6E\u662F\u4E3A\u4E86\u5C06\u672C\u5730\uFF08127.0.0.1\uFF09\u768480\u548C443\u7AEF\u53E3\u7528\u4E8EHigress\u8BBF\u95EE

##### \u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5 Higress

\u672C\u5730\u5B89\u88C5\u5F00\u5173: \`--set global.local=true\`

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
\`\`\`

> \u82E5\u8981\u542F\u7528 Higress \u5185\u7F6E\u7684\u5957\u4EF6\uFF0C\u53EF\u53C2\u9605[\u5B89\u88C5\u90E8\u7F72](../ops/deploy-by-helm.md)\u6587\u6863\u3002

\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u672C\u5730\u7684 80 \u548C 443 \u7AEF\u53E3\u5373\u53EF\u8BBF\u95EE\u672C\u5730\u96C6\u7FA4\u5185\u7684 Higress Gateway\u3002

\u6CE8\uFF1A\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u672C\u5730\u73B0\u5B58\u7684 K8s \u96C6\u7FA4\uFF0C\u90A3\u4E48\u53EF\u80FD\u9700\u8981\u5148\u6267\u884C\u4E0B\u65B9\u547D\u4EE4\u5C06 K8s \u96C6\u7FA4\u5185\u7684\u7AEF\u53E3\u6620\u5C04\u51FA\u6765\uFF0C\u7136\u540E\u518D\u5C1D\u8BD5\u8BBF\u95EE\u672C\u5730\u7AEF\u53E3\u3002

\`\`\`bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
\`\`\`

### \u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E

\u5047\u8BBE\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B\u5DF2\u7ECF\u90E8\u7F72\u4E86\u4E00\u4E2A\u540D\u4E3A foo \u7684\u670D\u52A1\uFF0C\u800C\u6211\u4EEC\u5E0C\u671B\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94 http://foo.bar.com/foo \u7684\u8DEF\u7531\u6307\u5411\u8BE5\u670D\u52A1\u3002

\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u5404\u4F4D\u53EF\u4EE5\u4F7F\u7528\u4E0B\u65B9 YAML \u6765\u521B\u5EFA\u5BF9\u5E94\u7684\u6D4B\u8BD5\u670D\u52A1\u3002
\`\`\`yaml
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
  - name: foo-app
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
    args:
    - "-text=foo"
---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
  # Default port used by the image
  - port: 5678
\`\`\`

#### \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 Higress Console \u8FDB\u884C\u914D\u7F6E

\u4F7F\u7528 [hgctl](https://higress.io/zh-cn/docs/ops/hgctl) \u6253\u5F00\u63A7\u5236\u53F0\uFF1A

\`\`\`bash
hgctl dashboard console
\`\`\`

\u9996\u6B21\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u8D26\u53F7\u3002

![image](/img/user/quickstart/zh-cn/init.png)

\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u754C\u9762\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762\u3002\u8BF7\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55 Higress \u63A7\u5236\u53F0\u3002

![image](/img/user/quickstart/zh-cn/login.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u57DF\u540D\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u57DF\u540D\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/domain_management.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u8DEF\u7531\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u7247\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/route_management.png)

#### \u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528 Ingress CRD \u8FDB\u884C\u914D\u7F6E

\u4F7F\u7528\u4E0B\u65B9 YAML \u6765\u521B\u5EFA\u6211\u4EEC\u9700\u8981\u7684\u8DEF\u7531\u914D\u7F6E\u3002
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
spec:
  ingressClassName: higress
  rules:
  - host: foo.bar.com
    http:
      paths:
      - pathType: Prefix
        path: "/foo"
        backend:
          service:
            name: foo-service
            port:
              number: 5678
\`\`\`

### \u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1

\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u9A8C\u8BC1\u6D4B\u8BD5\u8DEF\u7531\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF1A

\`\`\`bash
# should output "foo"
curl http://GatewayIP/foo -H 'host: foo.bar.com'
\`\`\`


## \u73AF\u5883\u4E8C\uFF1A\u8131\u79BB K8s \u4F7F\u7528

### \u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5

\u5982\u679C\u60A8\u662F\u5728\u4E91\u4E0A\u90E8\u7F72\uFF0C\u751F\u4EA7\u73AF\u5883\u63A8\u8350\u4F7F\u7528\u4F01\u4E1A\u7248\uFF08\u65E0\u9700 K8s\uFF09\uFF0C\u5F00\u53D1\u6D4B\u8BD5\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u4E00\u952E\u90E8\u7F72\u793E\u533A\u7248\uFF1A

[![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/default?type=user&ServiceName=Higress\u793E\u533A\u7248)

\u672C\u5730\u5F00\u53D1\u53EF\u4EE5\u4F7F\u7528\u6781\u7B80\u65B9\u5F0F\u90E8\u7F72\uFF0C\u57FA\u4E8E\u672C\u5730\u6587\u4EF6\u505A\u914D\u7F6E\u5B58\u50A8\uFF1A

\`\`\`bash
# \u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55
mkdir higress; cd higress
# \u542F\u52A8 higress\uFF0C\u914D\u7F6E\u6587\u4EF6\u4F1A\u5199\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E0B
docker run -d --rm --name higress-ai -v \${PWD}:/data -e O11Y=on \\
        -p 8001:8001 -p 8080:8080 -p 8443:8443  \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest

\`\`\`
\u76D1\u542C\u7AEF\u53E3\u8BF4\u660E\u5982\u4E0B\uFF1A

- 8001 \u7AEF\u53E3\uFF1AHigress UI \u63A7\u5236\u53F0\u5165\u53E3
- 8080 \u7AEF\u53E3\uFF1A\u7F51\u5173 HTTP \u534F\u8BAE\u5165\u53E3
- 8443 \u7AEF\u53E3\uFF1A\u7F51\u5173 HTTPS \u534F\u8BAE\u5165\u53E3

\u6216\u8005\u4F7F\u7528\u4E0B\u9762\u65B9\u5F0F\uFF0C\u5BF9\u63A5 Nacos \u505A\u914D\u7F6E\u5B58\u50A8\uFF1A

\`\`\`bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos
\`\`\`

\u8BF7\u5C06 \`192.168.0.1\` \u66FF\u6362\u4E3A Nacos \u670D\u52A1\u5668\u7684 IP\uFF08\u5982\u679C Nacos \u90E8\u7F72\u5728\u672C\u673A\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u5982 \`localhost\` \u6216 \`127.0.0.1\` \u7684 Loopback \u5730\u5740\uFF09\uFF0C\u5E76\u6309\u9700\u8C03\u6574 \`--nacos-username\` \u548C \`--nacos-password\` \u7684\u53D6\u503C\u3002\u5982\u679C Nacos \u670D\u52A1\u672A\u5F00\u542F\u8BA4\u8BC1\u529F\u80FD\uFF0C\u5219\u53EF\u4EE5\u79FB\u9664\u8FD9\u4E24\u4E2A\u53C2\u6570\u3002


### \u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E

\u8FDB\u5165 Higress \u63A7\u5236\u53F0\u3002\u9996\u6B21\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u8D26\u53F7\u3002
![image](/img/user/quickstart/zh-cn/init.png)

\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u754C\u9762\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762\u3002\u8BF7\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55 Higress \u63A7\u5236\u53F0\u3002

![image](/img/user/quickstart/zh-cn/login.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u670D\u52A1\u6765\u6E90\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/service_source_management_standalone.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u57DF\u540D\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u57DF\u540D\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/domain_management.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u8DEF\u7531\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u7247\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/route_management_standalone.png)

`,i={title:"\u5FEB\u901F\u5F00\u59CB",description:"Higress \u5FEB\u901F\u5F00\u59CB.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/quickstart.md",rawData:void 0};export{o as _internal,a as body,s as collection,i as data,e as id,t as slug};
