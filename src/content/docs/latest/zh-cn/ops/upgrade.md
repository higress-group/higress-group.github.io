---
title: 版本升级
keywords: [Upgrade]
description: Higress 版本升级.
---

# 版本升级

## 云原生部署

### 基于 Helm 实现版本升级

```bash
# ${higress_version} 的值示例: v2.0.3
kubectl apply -f https://github.com/alibaba/higress/releases/download/${higress_version}/crd.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress -n higress-system higress.io/higress -f values.yaml
```

不建议使用 --reuse-values，因为它会继承所有上一个版本的 values。

## 独立部署

```bash
wget https://higress.io/standalone/get-higress.sh
chmod +x ./get-higress.sh
# ${higress_version} 的值示例: v2.0.3
# ${higress_dir} 为 Higress 独立部署的安装目录
VERSION=${higress_version} ./get-higress.sh "${higress_dir}" -u
```
