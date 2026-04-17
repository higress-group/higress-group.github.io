---
title: "HiMarket Observability Overview"
description: "An overview of HiMarket's observability capabilities, including monitoring and observability solutions"
date: "2025-12-24"
category: "article"
keywords: ["HiMarket", "Observability", "Monitoring", "SLS", "Database"]
authors: "Higress Team"
---

# HiMarket Observability Overview

## Introduction

HiMarket comes with comprehensive built-in observability capabilities to help administrators monitor the operational status of the AI gateway in real time. Through the observability dashboards, you can track key metrics such as model invocation statistics, MCP tool call statistics, request success rates, response times, and token usage, enabling timely issue detection and troubleshooting.

## Observability Dashboards

HiMarket provides two types of observability dashboards:

### Model Monitoring Dashboard

Monitoring for LLM model invocations:

- **KPI Cards**: Total requests, unique callers, fallback requests, input/output/total token counts
- **Time-Series Trend Charts**: QPS (streaming/non-streaming/overall), request success rate, token throughput, average response time, time to first byte, cache hit rate, rate-limited requests
- **Statistics Tables**: Token usage statistics by model/consumer/service, error request statistics, rate-limited consumer statistics, risk statistics
- **Filter Dimensions**: Filter by instance, API, model, route, service, or consumer

### MCP Monitoring Dashboard

Monitoring for MCP Servers and tool invocations:

- **KPI Cards**: Total requests, unique callers, gateway inbound/outbound traffic
- **Time-Series Trend Charts**: QPS grouped by status code, total QPS, average response time, P99/P95/P90/P50 response times
- **Statistics Tables**: Method distribution, gateway/backend status code distribution, request distribution
- **Filter Dimensions**: Filter by route, MCP tool name, MCP Server, upstream service, or consumer

## Choosing a Solution

HiMarket supports two observability data sources. Choose the one that best fits your environment:

| | SLS Solution (Recommended) | Database Solution |
|------|----------|------------|
| **Use Cases** | Alibaba Cloud environments, large-scale production | Non-Alibaba Cloud environments, small to medium traffic |
| **Log Collection** | `ai-statistics` plugin + SLS collection | `db-log-pusher` plugin + `db-log-collector` service |
| **Storage Dependency** | Alibaba Cloud SLS | MySQL |
| **Open Source Level** | Depends on Alibaba Cloud services | Fully open source |
| **Commercial Gateway** | Works out of the box (just enable log delivery) | Not applicable |
| **Feature Coverage** | Model Dashboard ✅ MCP Dashboard ✅ Token Statistics ✅ Response Time ✅ Log Query ✅ | Model Dashboard ✅ MCP Dashboard ✅ Token Statistics ✅ Response Time ✅ Log Query ✅ |

Both solutions offer identical functionality; the only difference lies in data storage and collection methods.

### Using Alibaba Cloud SLS (Recommended)

Suitable for the following scenarios:
- Using Alibaba Cloud commercial AI gateway (Alibaba Cloud AI Gateway or Apsara Stack Enterprise Edition) — works out of the box
- Deploying open-source Higress in an Alibaba Cloud environment
- Requiring powerful SQL-based log querying and analysis capabilities

👉 [View SLS Solution Configuration Guide](/en/docs/himarket/himarket-sls-observability/)

### Using a Database

Suitable for the following scenarios:
- Not using Alibaba Cloud and requiring a fully open-source solution
- Wanting to store log data in your own database
- Small to medium traffic scenarios where simple deployment is preferred

👉 [View Database Solution Configuration Guide](/en/docs/himarket/himarket-db-observability/)

## Architecture Design

HiMarket's observability module adopts a unified interface with a multi-data-source architecture:

- **Unified Query Interface**: The frontend issues queries through a unified observability API, and the backend automatically routes to the corresponding implementation based on the `logSource` configuration
- **Preset Query Scenarios**: Both data sources share the same scenario identifiers, with a rich set of built-in preset SQL queries
- **Graceful Degradation**: When a data source is not configured or a query fails, empty data is returned automatically without affecting normal system operation

Data source switching is achieved through environment variables or configuration files:

```bash
# 环境变量方式
export OBSERVABILITY_LOG_SOURCE="SLS"  # 或 DB
```

```yaml
# 配置文件方式
observability:
  log-source: SLS   # 或 DB
```
