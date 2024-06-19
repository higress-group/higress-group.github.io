---
title: AI 可观测
keywords: [ higress,ai,proxy,rag ]
description: AI 可观测插件配置参考
---

## 功能说明

提供 AI 可观测基础能力，其后需接 ai-proxy 插件，如果不接 ai-proxy 插件的话，则只支持 openai 协议。

## 配置说明

| 名称         | 数据类型   | 填写要求 | 默认值 | 描述               |
|------------|--------|------|-----|------------------|
| `enable` | bool | 必填   | -   | 是否开启ai统计功能 |

开启后 metrics 示例：
```
route_upstream_model_input_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 21
route_upstream_model_output_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 17
```

日志示例：

```json
{
    "model": "qwen-max",
    "input_token": "21",
    "output_token": "17",
    "authority": "dashscope.aliyuncs.com",
    "bytes_received": "336",
    "bytes_sent": "1675",
    "duration": "1590",
    "istio_policy_status": "-",
    "method": "POST",
    "path": "/v1/chat/completions",
    "protocol": "HTTP/1.1",
    "request_id": "5895f5a9-e4e3-425b-98db-6c6a926195b7",
    "requested_server_name": "-",
    "response_code": "200",
    "response_flags": "-",
    "route_name": "openai",
    "start_time": "2024-06-18T09:37:14.078Z",
    "trace_id": "-",
    "upstream_cluster": "qwen",
    "upstream_service_time": "496",
    "upstream_transport_failure_reason": "-",
    "user_agent": "PostmanRuntime/7.37.3",
    "x_forwarded_for": "-"
}
```
