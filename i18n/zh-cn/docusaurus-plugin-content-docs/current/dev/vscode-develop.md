# 如何用 vscode 搭建 higress 开发调试环境
## 开发机环境
本文使用的操作系统为 Ubuntu 22.04 x86_64 
## k8s本地环境
### 安装相关软件
```bash
# kubectl install
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin

# kind 和 minikube 二选一
## minikube install
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

## kind install
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin
```

### 启动本地k8s环境
```bash
# kind 和 minikube 二选一
## minikube
minikube start --force

## kind
echo <<EOF > cluster.conf
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
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
EOF

kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
```

## higress
```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
```

## 安装hgctl并启动debug模式
```bash
curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | VERSION=latest bash

hgctl code-debug start
```

## vscode 设置
在vscode中打开higress目录

安装vscode go插件：

![](https://gw.alicdn.com/imgextra/i1/O1CN01sr7gNE262gcTX7XuZ_!!6000000007604-49-tps-1482-346.webp)

根据vscode提示或者手动安装以下go程序（可能还需要添加下环境变量）：

```bash
go install -v golang.org/x/tools/gopls@latest
go install github.com/go-delve/delve/cmd/dlv@latest
go install -v honnef.co/go/tools/cmd/staticcheck@latest
```

状态栏debug图标，添加配置：

![](https://gw.alicdn.com/imgextra/i3/O1CN01Kp0JqU27Hd9rZ6aKZ_!!6000000007772-49-tps-750-792.webp)

```json
{
    "configurations": [
        {
            "name": "Go Debug",
            "type": "go",
            "request": "launch",
            "mode": "auto",
            "program": "${fileDirname}",
            "args": ["serve", "~/.kube/config"]
        }
    ]
}
```

打开higress入口程序：`cmd/higress/main.go`，然后运行调试配置即可：

![](https://gw.alicdn.com/imgextra/i3/O1CN010nB02S1CLMHcdjV3W_!!6000000000064-49-tps-2254-1156.webp)
