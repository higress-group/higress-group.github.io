---
title: 版本升级
keywords: Upgrade
description: Higress 版本升级.
---

# 版本升级

## 基于 helm 实现版本升级

```bash
helm upgrade higress -n higress-system higress.io/higress 
```

### 从 0.5.x 版本升级到最新版本

#### 选项一：移除 Istio 依赖

```bash
helm upgrade higress -n higress-system --set global.enableMesh=false higress.io/higress 
kubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Available
helm delete istio -n istio-system
kubectl delete ns istio-system
kubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete
```

#### 选项二：保留 Istio

```bash
helm upgrade higress -n higress-system --set global.enableMesh=true higress.io/higress
```
