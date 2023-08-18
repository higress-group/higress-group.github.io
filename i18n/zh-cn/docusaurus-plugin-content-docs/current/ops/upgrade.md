---
title: 版本升级
keywords: [Upgrade]
description: Higress 版本升级.
---

# 版本升级

## 基于 helm 实现版本升级

```bash
# ${higress_version} 的值示例: v1.1.0
kubectl apply -f https://github.com/alibaba/higress/releases/download/${higress_version}/customresourcedefinitions.gen.yaml
helm repo update
helm upgrade higress -n higress-system higress.io/higress
```
