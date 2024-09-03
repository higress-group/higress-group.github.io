---
id: "question-history-16696"
title: "higress 结合 kruise rollout可以实现End to End Canary release 发布怎么做"
date: "2024-09-03"
category: "expertConsultation"
description: "要实现End to End的金丝雀发布流程，结合Higress和Kruise Rollout，可以遵循以下详细步骤操作：### 1. 环境准备确保你已具备以下前提条件：- **安装Higress**：根据[安装部署文档](../ops/deploy-by-helm.md)指引完成Higress的安装"
---

## 用户问题 ： 
 higress 结合 kruise rollout可以实现End to End Canary release 发布怎么做  

---------------
## 专家官方解答 ：

要实现End to End的金丝雀发布流程，结合Higress和Kruise Rollout，可以遵循以下详细步骤操作：

### 1. 环境准备
确保你已具备以下前提条件：
- **安装Higress**：根据[安装部署文档](../ops/deploy-by-helm.md)指引完成Higress的安装。
- **安装Kruise Rollout**：通过 Helm 安装 Kruise Rollout 组件，命令如下：
  ```
  helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0
  ```
- **安装kubectl-kruise**：为了更方便地操作Kruise资源，安装[kubectl-kruise命令行工具](https://github.com/openkruise/kruise-tools/blob/master/README.md)。

### 2. 应用部署基础配置
假设你已经有了一个名为`demo`的服务，其Deployment、Service和Ingress配置如知识中所示。这包括定义了服务的副本数量、端口映射以及外部访问入口。

### 3. 定义金丝雀发布策略
接下来，你需要为`demo`服务定义金丝雀发布策略。通过创建一个`Rollout`资源对象，具体配置如同知识中给出的例子。这个策略会控制新版本Pod的逐步部署及其接收的流量比例，确保在整个发布过程中流量的平滑过渡。

### 4. 更新镜像并启动金丝雀发布
修改`demo`服务的Deployment配置，将镜像更新为新版本（例如，从`v1`更新到`v2`）。提交更改后，观察Rollout控制器开始按照你定义的策略执行金丝雀发布过程。

### 5. 监控与确认
- **监控Rollout状态**：使用`kubectl get rollout`命令查看当前Rollout的状态，确保发布按计划进行。如遇暂停点，需根据实际情况决定是否继续。
- **检查Pod状态**：通过`kubectl get pods`查看新旧版本Pod的数量变化，验证金丝雀步骤是否正确执行。
- **验证流量分配**：使用流量测试工具或直接访问应用，确认不同阶段流量是否按预期比例分配给新旧版本服务。

### 6. 分阶段推进发布
- 在每个金丝雀步骤完成后，根据测试结果和业务需求，通过`kubectl rollout resume`命令继续到下一个发布阶段，或者根据需要进行回滚。
- 最终，当所有步骤执行完毕，新版本将全量替代旧版本，完成整个金丝雀发布流程。

### 解释
通过上述步骤，我们实现了从环境准备、基础配置、策略定义到逐步发布的全过程。Higress作为入口网关，配合Kruise Rollout的精细化发布策略，能够有效地控制流量切换，确保在不影响用户体验的前提下安全地完成版本升级。整个流程高度自动化，同时保留了人工干预的灵活性，以应对发布过程中的不确定性，保障了发布的稳定性和效率。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress 通过 OpenKruise Rollout 实现灰度发布 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16697)给我们反馈。
