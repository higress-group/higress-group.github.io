---
title: 版本升级
keywords: [Upgrade]
description: Higress 版本升级.
---

# 版本升级

## 云原生部署

### 基于 Helm 实现版本升级

```bash
# ${higress_version} 的值示例: v1.1.0
kubectl apply -f https://raw.githubusercontent.com/alibaba/higress/${higress_version}/helm/core/crds/customresourcedefinitions.gen.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress -n higress-system higress.io/higress -f values.yaml
```

不建议使用 --reuse-values，因为它会继承所有上一个版本的 values。

## 独立部署

```bash
# ${higress_dir} 为 Higress 独立部署的安装目录
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "${higress_dir}" -u
```
