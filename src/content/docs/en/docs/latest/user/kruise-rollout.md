---
title: Canary Release with OpenKruise Rollout
keywords: [rollout, gray, canary, A/B testing]
description: Implement canary releases and A/B testing with OpenKruise Rollout and Higress
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/kruise-rollout.md
---

# Canary Release with OpenKruise Rollout

In the rapid development of business, ensuring zero-downtime deployments during feature iterations has always been a key concern for developers. Typically, when releasing new features, we adopt a canary release approach to validate the new version with a small portion of traffic before rolling it out completely once it meets expectations. This is known as "progressive delivery." The term originated from large, complex industrial projects that aimed to break down complex projects into phases, reducing delivery costs and time through continuous small iterations. With the evolution of cloud-native architectures, progressive delivery has been widely adopted in internet applications. Developers integrate progressive delivery frameworks through GitOps and CI/CD pipelines, enabling feature releases to be executed in batches. Techniques like A/B testing and canary releases allow fine-grained control over traffic policies for each batch, ensuring application deployment stability.

## What is Kruise Rollout?

Kruise Rollout is an open-source cloud-native application automation management suite developed by Alibaba Cloud under the OpenKruise project, focusing on the field of progressive delivery. It supports canary releases, blue-green deployments, and A/B testing with traffic and instance-based canary releases. The release process can be automated in batches and paused based on Prometheus metrics. It provides a non-intrusive integration approach and is compatible with various existing workloads (Deployment, CloneSet, DaemonSet).

You might wonder, doesn't Kubernetes' native Deployment already have release strategies? Why do we need Kruise Rollout?

First, Kubernetes' native Deployment's release strategy doesn't fully align with the concept of progressive delivery—it's essentially a rolling update. Although Deployment provides parameters like `maxUnavailable` and `maxSurge` for updates, it only supports a one-time streaming release. Users cannot control batching or implement fine-grained traffic policies. For example:
- Users cannot strictly control the traffic ratio between old and new versions; it can only be based on the actual Pod count ratio and the client's load balancing strategy.
- Users cannot implement A/B testing strategies, such as restricting access to new versions for internal employees only.
- If issues arise with the new version, users must perform another rolling update to roll back to the old version, which is slow and introduces instability due to frequent changes.

Additionally, Kubernetes only provides the Deployment controller for application delivery and abstractions like Ingress and Service for traffic management. However, it doesn't offer an out-of-the-box progressive delivery solution that combines these components.

To address these limitations, Alibaba Cloud has developed Kruise Rollout, a non-intrusive, extensible, and user-friendly progressive delivery framework based on years of experience in containerization and cloud-native technologies.

## How Higress & Kruise Rollout Work Together

Let's briefly explain how Higress and Kruise Rollout work together during an application release:

![image](https://img.alicdn.com/imgextra/i2/O1CN01LN9dRY1iiJiG17N36_!!6000000004446-2-tps-1080-500.png)

Assume there's a Deployment application A in the cluster exposed externally via the Higress gateway. Now, application A needs to release new features.

1. The user adds a progressive delivery strategy (Rollout CRD resource) to the cluster, describing the delivery strategy for the target workload, such as batches, traffic control for each batch, and associated Service and Ingress resources.
2. The user updates the container image of the target Deployment to the new version.
3. Kruise Rollout hooks into the Deployment's rolling update process and pauses it by modifying the Deployment's `Paused` field.
4. The first batch of the release is executed. Based on the delivery strategy in the Rollout CRD, the number of new version Pods is controlled, and a canary Ingress resource is generated for the main Ingress resource. Traffic policies like traffic weight ratios or request header-based routing are configured. Higress detects the Ingress resource changes and dynamically updates routing rules to direct traffic matching the canary rules to the new version.
5. The user monitors application metrics (e.g., via Prometheus) to verify the new version's performance:
   - If the new version meets expectations, the next batch is triggered, repeating step 4.
   - If issues are detected, a rollback is triggered. The newly released Pods are taken down, and the Ingress resource's canary rules are removed. Higress updates the routing rules to ensure traffic is only directed to the old version.

The entire Rollout process automatically integrates Deployment, Service, and Ingress resources, abstracting away the underlying resource changes from the user. This approach works collaboratively with existing workload capabilities, reusing workload features while ensuring zero intrusion when Rollout is not in use.

## Hands-on Guide

### Prerequisites
1. Install Higress. Refer to [Installation Guide](../ops/deploy-by-helm.md).
2. Install Kruise Rollout:
   ```bash
   helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0
   ```
3. Install the kubectl-kruise CLI tool. Refer to [Install kubectl-kruise](https://github.com/openkruise/kruise-tools/blob/main/README.md).

### Canary Release

#### What is a Canary Release?

A canary release involves directing a small portion of traffic to the new version, requiring only a minimal number of machines to deploy the new version. After validating the new version's performance, traffic is gradually shifted from the old version to the new one based on configured weight ratios. During this process, the new version can be scaled up while the old version is scaled down to optimize resource utilization.

For example, consider a service currently running version v1, with a new version v2 ready for deployment. To ensure a smooth transition, a canary release is used to gradually shift traffic from the old version to the new one.

![image](https://img.alicdn.com/imgextra/i2/O1CN01iHCuzf220cEiziyVK_!!6000000007058-2-tps-750-602.png)

#### Implementing Canary Release with Higress & Kruise Rollout

Assume there's a service `demo` in the cluster exposed via the Higress gateway.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo
spec:
  replicas: 5
  selector:
    matchLabels:
      app: demo
  template:
    metadata:
      labels:
        app: demo
    spec:
      containers:
      - name: main
        image: registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v1
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: demo
spec:
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP
    name: http
  selector:
    app: demo
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          service:
            name: demo
            port:
              number: 80
        path: /version
        pathType: Exact
```

Now, the `demo` service needs to release a new version. Before updating the container image, we define a canary release strategy for the `demo` service to achieve progressive delivery.

```yaml
apiVersion: rollouts.kruise.io/v1alpha1
kind: Rollout
metadata:
  name: rollouts-demo
spec:
  objectRef:
    workloadRef:
      apiVersion: apps/v1
      kind: Deployment
      name: demo
  strategy:
    canary:
      steps:
      - weight: 10
        pause: {}
        replicas: 1
      - weight: 30
        pause: {}
        replicas: 2
      trafficRoutings:
      - service: demo
        ingress:
          classType: higress
          name: demo
```

- `workloadRef`: References the target workload (Deployment in this case) for the Rollout. Other supported workloads include CloneSet and DaemonSet.
- `canary.steps`: Defines the Rollout process in 3 batches:
  1. First batch: Deploys 1 new Pod and routes 10% of traffic to it, then pauses for manual confirmation.
  2. Second batch: Deploys 2 new Pods and routes 30% of traffic to them, then pauses for manual confirmation.
  3. Final batch: Full rollout (implicit, no need to define).
- `trafficRoutings`: Specifies the resources that need traffic rule updates. Kruise Rollout automatically updates these resources to reflect the target traffic rules.

Update the `demo` Deployment's image to `registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2` and observe the resource changes.

Check the Rollout status. You'll see the first batch is complete and paused, awaiting manual confirmation to proceed.
![image](https://img.alicdn.com/imgextra/i3/O1CN0181SARr1GOLC66FHHS_!!6000000000612-2-tps-2878-148.png)

Check the Pod status. You'll notice only one new version Pod is running, and the Deployment hasn't fully rolled out.
![image](https://img.alicdn.com/imgextra/i3/O1CN01213qEY1wMhdwdrwgF_!!6000000006294-2-tps-1302-374.png)

Test the traffic. You'll observe that 10% of the traffic is directed to the new version.
![image](https://img.alicdn.com/imgextra/i2/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png)

Proceed with the second batch. Check the Pod status again. You'll now see two new version Pods.
![image](https://img.alicdn.com/imgextra/i4/O1CN01jWKV7e1QT3QaWGyVf_!!6000000001976-2-tps-1500-534.png)

Test the traffic. Observe the traffic distribution ratio.
![image](https://img.alicdn.com/imgextra/i1/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png)

Finally, release the last batch to complete the full rollout. Verify that all traffic is now directed to the new version.
![image](https://img.alicdn.com/imgextra/i3/O1CN01fdKoHN1tYf8bS3eWb_!!6000000005914-2-tps-1500-165.png)

### A/B Testing

#### What is A/B Testing?

Unlike weight-based canary releases, A/B testing routes traffic to the new version based on request metadata, such as HTTP headers or cookies. This is a content-based routing strategy for canary releases. For example:
- **HTTP Header-based**: Route requests with `User-Agent: Android` (from Android devices) to the new version, while other systems continue to use the old version.
- **Cookie-based**: Cookies often contain business-specific user information. For instance, route regular users to the new version while keeping VIP users on the old version.

For example, consider a service currently running version v1, with a new version v2 ready for deployment. The goal is to allow Android users to try the new features while keeping other users on the old version.

![image](https://img.alicdn.com/imgextra/i1/O1CN01VHlM3Y1Rx72X2wEfy_!!6000000002177-2-tps-1500-328.png)

By monitoring metrics like success rates and response times (RT) for both versions, once the new version performs as expected, all traffic can be switched to v2. Finally, to save resources, the old version v1 can be gradually phased out.

![image](https://img.alicdn.com/imgextra/i3/O1CN01Zq9Jnc1Dj0DQjNf0M_!!6000000000251-2-tps-1500-325.png)

#### Implementing A/B Testing with Higress & Kruise Rollout

Using the same `demo` service example, the initial image is v1. Now, the `demo` service needs to release a new version. Before updating the container image, we define an A/B testing strategy for the `demo` service.

```yaml
apiVersion: rollouts.kruise.io/v1alpha1
kind: Rollout
metadata:
  name: rollouts-header
spec:
  objectRef:
    workloadRef:
      apiVersion: apps/v1
      kind: Deployment
      name: demo
  strategy:
    canary:
      steps:
      - matches:
        - headers:
          - name: user-agent
            value: android
        pause: {}
        replicas: 1
      trafficRoutings:
      - service: demo
        ingress:
          classType: higress
          name: demo
```

The `canary.steps` defines the Rollout process in 2 batches:
1. First batch: Deploys 1 new Pod and routes traffic with the HTTP Header `user-agent: android` to the new version, then pauses for manual confirmation.
2. Final batch: Full rollout (implicit, no need to define).

Update the `demo` Deployment's image to `registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2` and observe the resource changes.

Check the Rollout status. You'll see the first batch is complete and paused, awaiting manual confirmation to proceed.
![image](https://img.alicdn.com/imgextra/i3/O1CN01HzzMtN1dVQUKu9MUa_!!6000000003741-2-tps-2630-138.png)

Check the Pod status. You'll notice only one new version Pod is running, and the Deployment hasn't fully rolled out.
![image](https://img.alicdn.com/imgextra/i4/O1CN01Oz1CW51zwpjdv29GL_!!6000000006779-2-tps-1290-372.png)

Test the traffic. Verify that Android traffic is routed to the new version, while non-Android traffic goes to the old version.
![image](https://img.alicdn.com/imgextra/i3/O1CN01uPe4Hg1gSAW2YhEzb_!!6000000004140-2-tps-1144-240.png)

Finally, release the last batch to complete the full rollout. Verify that all traffic is now directed to the new version.
![image](https://img.alicdn.com/imgextra/i3/O1CN01EBOKzb1J0TPAj46dd_!!6000000000966-2-tps-1256-252.png)

## Conclusion

Compared to traditional manual approaches, Higress & Kruise Rollout provides a non-intrusive, automated operations experience that makes application releases as smooth as silk. Developers no longer need to worry about adjusting Deployment, Ingress, or Service resources during the release process. They only need to declare and manage the Rollout strategy. The native Deployment rolling update is automatically transformed into a progressive delivery process, making application releases batchable, canary-capable, and rollback-friendly. This not only accelerates business iteration but also enhances the stability and efficiency of application deployments.