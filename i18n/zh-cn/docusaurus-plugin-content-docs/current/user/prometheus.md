---
title: 基于 Prometheus 实现入口流量观测
keywords: [Higress,Prometheus]
description: 基于 Prometheus 实现入口流量观测
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/prometheus.md
---

# 基于 Prometheus 实现入口流量观测

## 使用 Higress Console 的内置监控套件

Higress Console 内置了一套基于 Prometheus + Grafana 的监控套件，但默认不会安装。在使用 Helm 安装 Higress 时，可以通过在命令行中添加 `--set higress-console.o11y.enabled=true` 参数启用这一监控套件。

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io --set higress-console.o11y.enabled=true
```

注意：在安装到标准 K8s 集群（即未指定 `global.local=true` 或 `global.kind=true` 参数）时，监控系统所配置的 PersistentVolumeClaim 默认使用 `ReadWriteMany` 访问模式。如果目标 K8s 集群不支持这一访问模式，则可以在命令行中额外添加 `--set higress-console.pvc.rwxSupported=false` 参数来将访问模式切换为 `ReadyWriteOnce`。

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io --set higress-console.o11y.enabled=true --set higress-console.pvc.rwxSupported=false
```

完成安装后，在浏览器中访问 Higress Console，点击左侧导航栏“监控面板”，页面右侧就会展示出系统内置的监控面板。

![image](/img/user/prometheus/zh-cn/builtin.png)

## 使用独立部署的监控套件

Higress 的数据面和控制面组件均通过 API 对外暴露了一系列的 Metrics 指标。只需要为 Prometheus 添加相应指标采集配置，并在 Grafana 中配置监控面板就可以监控 Higress 的内部运行情况了。

在正式开始配置之前，请先在浏览器中打开 Higress Console，并在左侧导航栏切换至“监控面板”页面。在未安装内置监控套件时，页面上就会展示出外置监控面板 URL 配置页面和外部系统的配置法。

![image](/img/user/prometheus/zh-cn/external-before.png)

按照界面下方给出的方法更新 Prometheus 和 Grafana 中的配置，然后把  Grafana 看板的页面 URL 填入上方输入框中并保存。随后页面会自动刷新，右侧就会出现配置好的外置监控面板。

![image](/img/user/prometheus/zh-cn/external-after.png)

如果需要更新监控面板的 URL，则可点击页面左上角的“重新配置”按钮。