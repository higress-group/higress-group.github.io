---
title: Request Monitoring Based on Prometheus
keywords: [Higress,Prometheus]
description: Request Monitoring Based on Prometheus
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/prometheus.md
---

# Request Monitoring Based on Prometheus

## Use the Higress Console Built-In Monitor Suite

Higress Console has a built-in monitor suite based on Prometheus + Grafana, which isn't installed by default. When installing Higress with Helm, you can enable it by adding the following argument to the command line: `--set global.o11y.enabled=true`.

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true
```

Note: When installing to a standard K8s cluster (meaning without specifying `global.local=true`), the PersistentVolumeClaim configured in the suite uses the access mode of `ReadWriteMany` by default. If the target K8s cluster doesn't support this mode, you can add the following argument to the command line to change the access mode to `ReadWriteOnce`: `--set global.pvc.rwxSupported=false`.

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true --set global.pvc.rwxSupported=false
```

After installation, open Higress Console in your browser, and click "Dashboard" on the left navigation area. The built-in dashboard will be displayed on the right.

![image](/img/user/prometheus/en-us/builtin.png)

## Use a Standalone Monitor Suite

Both the data and control planes of Higress expose a set of metrics via API. To monitor them, you just need to add probe configurations into Prometheus and configure a dashboard in Grafana.

Before starting the configuration, please open Higress Console in your browser and switch to "Dashboard" from the left navigation area. The external dashboard configuration page and related notes will be displayed on the right.

![image](/img/user/prometheus/en-us/external-before.png)

Update the configurations of Prometheus and Grafana following the notes. Then put the Grafana dashboard into the textbox above and save. The page will reload automatically and your dashboard will be shown on the right.

![image](/img/user/prometheus/en-us/external-after.png)

If you'd like to update the dashboard URL, you can click the "Reconfigure" button on the top left corner.