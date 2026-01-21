export interface GlossaryTerm {
  id: string;
  term: string;
  termEn: string;
  category: 'ai' | 'gateway' | 'cloud-native' | 'security';
  definition: string;
  higressRelation: string;
  examples?: string[];
  relatedTerms?: string[];
  configExample?: string;
}

export interface GlossaryCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  icon: string;
}

export const GLOSSARY_CATEGORIES: GlossaryCategory[] = [
  {
    id: 'ai',
    name: 'AI / 大模型',
    nameEn: 'AI / LLM',
    description: '人工智能和大语言模型相关的核心概念',
    icon: '🤖'
  },
  {
    id: 'gateway',
    name: '网关技术',
    nameEn: 'Gateway',
    description: 'API 网关和流量管理相关术语',
    icon: '🚪'
  },
  {
    id: 'cloud-native',
    name: '云原生',
    nameEn: 'Cloud Native',
    description: 'Kubernetes、容器和微服务相关概念',
    icon: '☁️'
  },
  {
    id: 'security',
    name: '安全认证',
    nameEn: 'Security',
    description: '身份认证、授权和安全防护相关术语',
    icon: '🔐'
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // ==================== AI / 大模型 ====================
  {
    id: 'token',
    term: 'Token',
    termEn: 'Token',
    category: 'ai',
    definition: 'Token 是大语言模型处理文本的基本单位。模型将输入文本分割成一系列 Token 进行处理，每个 Token 可能是一个单词、子词或字符。Token 数量直接影响 API 调用成本和响应时间。',
    higressRelation: 'Higress AI 网关提供 Token 级别的流量管理，支持按 Token 消耗进行配额管理和限流，帮助企业精确控制 AI 调用成本。',
    examples: [
      '英文中 "Hello World" 通常被分为 2 个 Token',
      '中文的 Token 划分通常按字或词组进行',
      'GPT-4 的上下文窗口支持 128K Token'
    ],
    relatedTerms: ['llm', 'prompt', 'context-window'],
    configExample: `# Higress Token 限流配置示例
rule:
  limit_by_token:
    tokens_per_minute: 100000
    tokens_per_day: 1000000`
  },
  {
    id: 'llm',
    term: 'LLM (大语言模型)',
    termEn: 'Large Language Model',
    category: 'ai',
    definition: 'LLM（Large Language Model）即大语言模型，是一种基于深度学习的自然语言处理模型，通过海量文本数据训练，能够理解和生成人类语言。代表产品包括 GPT、Claude、通义千问、DeepSeek 等。',
    higressRelation: 'Higress AI 网关支持 100+ 种主流 LLM 的统一接入，通过协议转换实现多模型统一调用，并提供模型级别的负载均衡和 Failover 能力。',
    examples: [
      'OpenAI GPT-4 是目前最知名的商业 LLM',
      'DeepSeek 是高性价比的开源 LLM 代表',
      '通义千问是阿里云的大语言模型产品'
    ],
    relatedTerms: ['token', 'prompt', 'agent', 'rag']
  },
  {
    id: 'prompt',
    term: 'Prompt (提示词)',
    termEn: 'Prompt',
    category: 'ai',
    definition: 'Prompt 是用户向大语言模型发送的输入指令或问题。高质量的 Prompt 设计（Prompt Engineering）对于获得准确、有用的模型输出至关重要。',
    higressRelation: 'Higress 支持 Prompt 模板管理和提示词注入防护，帮助企业标准化 AI 交互并防范提示词攻击。',
    examples: [
      '系统提示词（System Prompt）定义 AI 的角色和行为',
      '用户提示词（User Prompt）是具体的问题或任务',
      '少样本提示（Few-shot Prompt）通过示例引导模型输出'
    ],
    relatedTerms: ['llm', 'token', 'rag']
  },
  {
    id: 'agent',
    term: 'Agent (智能体)',
    termEn: 'AI Agent',
    category: 'ai',
    definition: 'AI Agent 是能够自主感知环境、做出决策并执行任务的智能系统。它结合大语言模型的推理能力和外部工具的执行能力，实现复杂任务的自动化处理。',
    higressRelation: 'Higress 通过 MCP 协议支持和 HiMarket 平台，为企业提供 Agent 的统一接入、管理和市场化能力，加速智能体应用落地。',
    examples: [
      '自动客服 Agent 可处理用户咨询并执行订单操作',
      '代码助手 Agent 可理解需求并编写、测试代码',
      '数据分析 Agent 可自动查询数据库并生成报告'
    ],
    relatedTerms: ['llm', 'mcp', 'rag', 'function-calling']
  },
  {
    id: 'mcp',
    term: 'MCP (模型上下文协议)',
    termEn: 'Model Context Protocol',
    category: 'ai',
    definition: 'MCP（Model Context Protocol）是 Anthropic 提出的开放标准协议，用于连接 AI 模型与外部数据源和工具。它定义了统一的接口规范，让 AI 应用能够安全地访问各种资源。',
    higressRelation: 'Higress 原生支持 MCP 协议，可将现有 HTTP API 转换为 MCP Server，并提供 MCP 市场功能，实现工具的统一管理和分发。',
    examples: [
      'MCP Server 可以暴露数据库查询能力给 AI',
      'MCP 工具让 AI 能够调用外部 API 执行操作',
      'HiMarket 提供企业级 MCP 服务市场'
    ],
    relatedTerms: ['agent', 'function-calling', 'api-gateway'],
    configExample: `# Higress MCP 配置示例
mcp:
  servers:
    - name: database-tools
      transport: http
      endpoint: /mcp/database`
  },
  {
    id: 'rag',
    term: 'RAG (检索增强生成)',
    termEn: 'Retrieval-Augmented Generation',
    category: 'ai',
    definition: 'RAG 是一种将信息检索与文本生成相结合的技术。它先从知识库中检索相关文档，再将检索结果作为上下文输入给 LLM 生成答案，有效减少模型幻觉并提供最新信息。',
    higressRelation: 'Higress AI 网关可与向量数据库集成，支持 RAG 场景下的知识检索路由和缓存优化，提升检索增强生成的效率。',
    examples: [
      '企业知识库问答系统使用 RAG 确保答案准确性',
      '客服系统通过 RAG 检索产品文档回答用户问题',
      'RAG 可结合实时数据源提供最新信息'
    ],
    relatedTerms: ['llm', 'embedding', 'vector-database']
  },
  {
    id: 'embedding',
    term: 'Embedding (向量嵌入)',
    termEn: 'Embedding',
    category: 'ai',
    definition: 'Embedding 是将文本、图像等数据转换为高维向量的技术。这些向量能够捕捉数据的语义信息，使得语义相似的内容在向量空间中距离接近，是实现语义搜索和 RAG 的基础。',
    higressRelation: 'Higress 支持 Embedding API 的统一代理，可路由请求到不同的 Embedding 服务提供商，并支持语义缓存以减少重复计算。',
    examples: [
      'OpenAI text-embedding-ada-002 是常用的文本嵌入模型',
      '向量数据库使用 Embedding 实现相似度搜索',
      '语义缓存通过 Embedding 相似度判断是否命中缓存'
    ],
    relatedTerms: ['rag', 'vector-database', 'llm']
  },
  {
    id: 'function-calling',
    term: 'Function Calling (函数调用)',
    termEn: 'Function Calling',
    category: 'ai',
    definition: 'Function Calling 是 LLM 与外部系统交互的能力。模型可以根据用户意图，决定调用预定义的函数并生成符合函数签名的参数，实现查询数据库、调用 API 等操作。',
    higressRelation: 'Higress 支持 Function Calling 请求的路由和权限控制，确保 AI 调用外部函数的安全性和可审计性。',
    examples: [
      '天气查询函数让 AI 能获取实时天气信息',
      '订单查询函数使 AI 客服能查看用户订单状态',
      'Function Calling 是 Agent 执行任务的核心机制'
    ],
    relatedTerms: ['agent', 'mcp', 'llm']
  },
  {
    id: 'context-window',
    term: 'Context Window (上下文窗口)',
    termEn: 'Context Window',
    category: 'ai',
    definition: '上下文窗口是 LLM 单次处理的最大 Token 数量限制。它决定了模型能够"记住"多少对话历史和参考信息。更大的上下文窗口支持更长的对话和更多的参考文档。',
    higressRelation: 'Higress 可根据请求的上下文长度智能路由到不同规格的模型，优化成本和性能的平衡。',
    examples: [
      'GPT-4 Turbo 支持 128K Token 的上下文窗口',
      'Claude 3 支持 200K Token 的超长上下文',
      '长文档分析需要大上下文窗口的模型支持'
    ],
    relatedTerms: ['token', 'llm', 'prompt']
  },
  {
    id: 'ai-gateway',
    term: 'AI 网关',
    termEn: 'AI Gateway',
    category: 'ai',
    definition: 'AI 网关是专为 AI 应用设计的 API 网关，提供大模型 API 的统一接入、协议转换、流量管理、安全防护和可观测性等能力，是企业 AI 基础设施的核心组件。',
    higressRelation: 'Higress 是业界领先的 AI 网关产品，支持 100+ 模型统一接入、Token 级限流、语义缓存、内容安全防护等企业级 AI 治理能力。',
    examples: [
      'AI 网关统一管理多个 LLM 提供商的 API',
      '通过 AI 网关实现模型调用的成本控制',
      'AI 网关提供 Prompt 注入攻击防护'
    ],
    relatedTerms: ['api-gateway', 'llm', 'token', 'mcp']
  },

  // ==================== 网关技术 ====================
  {
    id: 'api-gateway',
    term: 'API 网关',
    termEn: 'API Gateway',
    category: 'gateway',
    definition: 'API 网关是微服务架构中的统一入口点，负责请求路由、协议转换、认证授权、限流熔断、监控日志等功能。它将后端服务的复杂性对客户端屏蔽，提供统一的 API 访问层。',
    higressRelation: 'Higress 是云原生 API 网关，将流量网关、微服务网关和安全网关三合一，基于 Envoy 构建，提供高性能、易扩展的 API 管理能力。',
    examples: [
      'API 网关统一处理所有外部请求的认证',
      '通过网关实现 API 版本管理和灰度发布',
      '网关层的限流保护后端服务免受流量冲击'
    ],
    relatedTerms: ['rate-limiting', 'load-balancing', 'ingress']
  },
  {
    id: 'rate-limiting',
    term: '限流 (Rate Limiting)',
    termEn: 'Rate Limiting',
    category: 'gateway',
    definition: '限流是控制 API 请求速率的技术，通过限制单位时间内的请求数量，保护后端服务免受过载，确保系统稳定性和公平的资源分配。常见算法包括令牌桶、漏桶、滑动窗口等。',
    higressRelation: 'Higress 提供多维度限流能力，支持基于路由、Header、参数的精细化限流策略，AI 场景下还支持 Token 级别的限流。',
    examples: [
      '每个 API Key 每分钟最多 100 次请求',
      '按用户 ID 限制调用频率防止滥用',
      'AI 接口按 Token 消耗量进行配额控制'
    ],
    relatedTerms: ['circuit-breaker', 'api-gateway', 'token'],
    configExample: `# Higress 限流配置示例
plugins:
  - name: request-rate-limiter
    config:
      rate: 100
      burst: 200
      key: consumer`
  },
  {
    id: 'load-balancing',
    term: '负载均衡',
    termEn: 'Load Balancing',
    category: 'gateway',
    definition: '负载均衡将流量分发到多个后端服务实例，提高系统的可用性和处理能力。常见策略包括轮询、加权轮询、最少连接、一致性哈希等。',
    higressRelation: 'Higress 支持多种负载均衡策略，可根据服务健康状态动态调整权重，AI 场景下支持多模型间的智能负载分配。',
    examples: [
      '轮询策略将请求均匀分配到所有实例',
      '加权策略让高性能实例承担更多流量',
      '一致性哈希确保相同用户请求到达同一实例'
    ],
    relatedTerms: ['api-gateway', 'service-discovery', 'health-check']
  },
  {
    id: 'circuit-breaker',
    term: '熔断器',
    termEn: 'Circuit Breaker',
    category: 'gateway',
    definition: '熔断器是一种容错机制，当下游服务出现故障时，自动"断开"请求链路，快速返回错误响应，防止故障蔓延。待服务恢复后自动"闭合"恢复正常调用。',
    higressRelation: 'Higress 内置熔断能力，支持基于错误率、超时率等指标自动触发熔断，并可配置 Fallback 策略，AI 场景支持模型级 Failover。',
    examples: [
      '当错误率超过 50% 时触发熔断',
      '熔断期间直接返回缓存的默认响应',
      '主模型不可用时自动切换到备用模型'
    ],
    relatedTerms: ['rate-limiting', 'failover', 'health-check']
  },
  {
    id: 'failover',
    term: 'Failover (故障转移)',
    termEn: 'Failover',
    category: 'gateway',
    definition: 'Failover 是系统在检测到故障时自动切换到备用资源的机制。它确保在主服务不可用时，请求能够自动路由到健康的备用服务，保证业务连续性。',
    higressRelation: 'Higress 支持多层级 Failover：服务实例级、服务级、跨集群级。AI 网关特别支持多模型 Failover，主模型故障时自动切换备用模型。',
    examples: [
      'GPT-4 不可用时自动切换到 Claude',
      '主数据中心故障时切换到灾备中心',
      '服务实例故障时自动摘除并路由到健康实例'
    ],
    relatedTerms: ['circuit-breaker', 'health-check', 'load-balancing']
  },
  {
    id: 'health-check',
    term: '健康检查',
    termEn: 'Health Check',
    category: 'gateway',
    definition: '健康检查是定期探测后端服务状态的机制，通过主动或被动方式检测服务是否正常运行。不健康的实例会被自动从负载均衡池中移除，防止请求路由到故障节点。',
    higressRelation: 'Higress 支持 HTTP、TCP、gRPC 等多种健康检查方式，可配置检查间隔、超时时间、健康阈值等参数，实现精准的服务状态管理。',
    examples: [
      '每 10 秒发送 HTTP GET /health 检查服务状态',
      '连续 3 次检查失败则标记实例为不健康',
      '不健康实例恢复后自动重新加入服务池'
    ],
    relatedTerms: ['load-balancing', 'failover', 'service-discovery']
  },
  {
    id: 'reverse-proxy',
    term: '反向代理',
    termEn: 'Reverse Proxy',
    category: 'gateway',
    definition: '反向代理位于服务器端，接收客户端请求并转发到后端服务器，对客户端隐藏真实服务器地址。它可以实现负载均衡、缓存、SSL 终止、安全防护等功能。',
    higressRelation: 'Higress 基于 Envoy 构建，是高性能的反向代理，支持 HTTP/HTTPS/gRPC/WebSocket 等多种协议的代理转发。',
    examples: [
      'Nginx 是最常用的反向代理软件',
      '反向代理隐藏后端服务器的真实 IP',
      'CDN 本质上是分布式的反向代理'
    ],
    relatedTerms: ['api-gateway', 'load-balancing', 'ssl-termination']
  },
  {
    id: 'service-discovery',
    term: '服务发现',
    termEn: 'Service Discovery',
    category: 'gateway',
    definition: '服务发现是微服务架构中自动检测和定位服务实例的机制。服务启动时注册到注册中心，其他服务通过注册中心获取可用实例地址，实现动态的服务调用。',
    higressRelation: 'Higress 集成 Nacos、Consul、Kubernetes 等多种服务发现机制，支持自动同步服务实例信息，无需手动维护上游服务地址。',
    examples: [
      'Nacos 提供服务注册与发现功能',
      'Kubernetes Service 通过 DNS 实现服务发现',
      'Consul 支持多数据中心的服务发现'
    ],
    relatedTerms: ['api-gateway', 'load-balancing', 'nacos']
  },
  {
    id: 'grayscale-release',
    term: '灰度发布',
    termEn: 'Canary Release',
    category: 'gateway',
    definition: '灰度发布是一种渐进式发布策略，将新版本先部署给一小部分用户，观察运行状态后再逐步扩大范围。它降低了发布风险，支持快速回滚。',
    higressRelation: 'Higress 支持基于 Header、Cookie、权重等多维度的灰度路由，可实现全链路灰度发布，AI 场景支持多模型灰度切换。',
    examples: [
      '先将 5% 流量导入新版本观察',
      '按用户 ID 尾号进行灰度分流',
      '新模型先对内部用户开放测试'
    ],
    relatedTerms: ['api-gateway', 'load-balancing', 'failover'],
    configExample: `# Higress 灰度路由配置
route:
  - match:
      headers:
        x-canary: ["true"]
    destination:
      host: service-v2
      weight: 100`
  },

  // ==================== 云原生 ====================
  {
    id: 'kubernetes',
    term: 'Kubernetes (K8s)',
    termEn: 'Kubernetes',
    category: 'cloud-native',
    definition: 'Kubernetes 是开源的容器编排平台，自动化部署、扩展和管理容器化应用。它提供服务发现、负载均衡、存储编排、自动回滚等能力，是云原生基础设施的事实标准。',
    higressRelation: 'Higress 是 Kubernetes 原生网关，完全遵循 Ingress 和 Gateway API 标准，可无缝部署在 K8s 集群中，与云原生生态深度集成。',
    examples: [
      'K8s Pod 是最小的部署单元',
      'Deployment 管理无状态应用的副本',
      'Service 为 Pod 提供稳定的访问入口'
    ],
    relatedTerms: ['ingress', 'gateway-api', 'envoy', 'service-mesh']
  },
  {
    id: 'ingress',
    term: 'Ingress',
    termEn: 'Kubernetes Ingress',
    category: 'cloud-native',
    definition: 'Ingress 是 Kubernetes 中管理集群外部访问的 API 对象，定义 HTTP/HTTPS 路由规则，将外部流量导入到集群内的 Service。Ingress Controller 负责实现这些路由规则。',
    higressRelation: 'Higress 是高性能的 Ingress Controller，兼容 Nginx Ingress 注解，支持从 Nginx Ingress 平滑迁移，并提供更丰富的流量治理能力。',
    examples: [
      'Ingress 根据域名路由到不同 Service',
      '配置 TLS 证书实现 HTTPS 访问',
      '通过 annotation 配置高级路由规则'
    ],
    relatedTerms: ['kubernetes', 'gateway-api', 'api-gateway'],
    configExample: `# Kubernetes Ingress 示例
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: api.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: api-service
            port:
              number: 80`
  },
  {
    id: 'gateway-api',
    term: 'Gateway API',
    termEn: 'Kubernetes Gateway API',
    category: 'cloud-native',
    definition: 'Gateway API 是 Kubernetes 新一代的网关标准，相比 Ingress 提供更丰富的路由能力和更清晰的角色分离。它支持 HTTP、TCP、gRPC 等多种协议，是 Ingress 的演进方向。',
    higressRelation: 'Higress 完整支持 Gateway API 标准，提供 GatewayClass、Gateway、HTTPRoute 等资源的实现，支持高级流量管理特性。',
    examples: [
      'HTTPRoute 定义 HTTP 请求的路由规则',
      'Gateway 资源配置监听端口和协议',
      'Gateway API 支持请求头匹配和重写'
    ],
    relatedTerms: ['kubernetes', 'ingress', 'api-gateway']
  },
  {
    id: 'envoy',
    term: 'Envoy',
    termEn: 'Envoy Proxy',
    category: 'cloud-native',
    definition: 'Envoy 是 CNCF 的高性能边缘和服务代理，专为云原生应用设计。它支持动态配置、丰富的可观测性、高级负载均衡等特性，是 Istio、Higress 等项目的核心组件。',
    higressRelation: 'Higress 基于 Envoy 构建，继承了 Envoy 的高性能和可扩展性，并通过 Wasm 插件机制提供更灵活的扩展能力。',
    examples: [
      'Envoy 支持 xDS API 动态更新配置',
      '内置丰富的可观测性指标和追踪',
      'Envoy 是服务网格的数据平面标准选择'
    ],
    relatedTerms: ['service-mesh', 'wasm', 'istio']
  },
  {
    id: 'service-mesh',
    term: 'Service Mesh (服务网格)',
    termEn: 'Service Mesh',
    category: 'cloud-native',
    definition: '服务网格是微服务间通信的基础设施层，通过 Sidecar 代理处理服务间的网络通信，提供负载均衡、服务发现、加密、可观测性等能力，将这些关注点从业务代码中分离。',
    higressRelation: 'Higress 可与 Istio 服务网格集成，作为入口网关将外部流量导入网格，同时支持网格内的流量治理策略。',
    examples: [
      'Istio 是最流行的服务网格实现',
      'Sidecar 代理拦截所有进出流量',
      '服务网格提供零信任安全模型'
    ],
    relatedTerms: ['envoy', 'istio', 'sidecar']
  },
  {
    id: 'istio',
    term: 'Istio',
    termEn: 'Istio Service Mesh',
    category: 'cloud-native',
    definition: 'Istio 是开源的服务网格平台，提供流量管理、安全、可观测性等能力。它由控制平面（istiod）和数据平面（Envoy 代理）组成，是企业级服务网格的首选方案。',
    higressRelation: 'Higress 基于 Istio 和 Envoy 构建，复用了 Istio 的控制平面能力，同时针对网关场景进行了深度优化和增强。',
    examples: [
      'Istio VirtualService 定义流量路由规则',
      'Istio 支持自动 mTLS 加密服务间通信',
      'Kiali 提供 Istio 的可视化管理界面'
    ],
    relatedTerms: ['service-mesh', 'envoy', 'kubernetes']
  },
  {
    id: 'wasm',
    term: 'Wasm (WebAssembly)',
    termEn: 'WebAssembly',
    category: 'cloud-native',
    definition: 'WebAssembly 是一种可移植的二进制指令格式，支持多种编程语言编译。在网关场景中，Wasm 插件可以安全、高效地扩展网关功能，支持热更新且通过沙箱隔离保障安全。',
    higressRelation: 'Higress 主打 Wasm 插件生态，支持 Go、Rust、JavaScript 等语言开发插件，提供丰富的官方插件库，插件可热更新无需重启网关。',
    examples: [
      'Wasm 插件运行在沙箱中保障内存安全',
      '使用 Go 语言编写自定义认证插件',
      'Wasm 插件支持流量无损的热更新'
    ],
    relatedTerms: ['envoy', 'api-gateway', 'plugin'],
    configExample: `# Higress Wasm 插件配置示例
plugins:
  - name: custom-auth
    wasm:
      url: oci://registry/custom-auth:v1
    config:
      api_key_header: "X-API-Key"`
  },
  {
    id: 'nacos',
    term: 'Nacos',
    termEn: 'Nacos',
    category: 'cloud-native',
    definition: 'Nacos 是阿里巴巴开源的服务发现和配置管理平台，支持动态服务发现、配置管理、DNS 服务等功能，是微服务架构中注册中心和配置中心的流行选择。',
    higressRelation: 'Higress 深度集成 Nacos，支持从 Nacos 自动同步服务实例，实现动态服务发现和配置热更新。',
    examples: [
      'Nacos 作为微服务的注册中心',
      '通过 Nacos 管理应用配置',
      'Nacos 支持多环境配置隔离'
    ],
    relatedTerms: ['service-discovery', 'kubernetes', 'api-gateway']
  },
  {
    id: 'sidecar',
    term: 'Sidecar (边车)',
    termEn: 'Sidecar Pattern',
    category: 'cloud-native',
    definition: 'Sidecar 是一种部署模式，将辅助功能（如代理、日志收集）部署为与主应用容器并行运行的独立容器。这种模式实现了关注点分离，无需修改应用代码即可增强功能。',
    higressRelation: 'Higress 支持 Sidecar 和独立部署两种模式，可根据场景选择最适合的部署方式。',
    examples: [
      'Envoy Sidecar 处理服务间的所有网络通信',
      '日志收集 Sidecar 统一采集应用日志',
      'Sidecar 模式实现无侵入的能力增强'
    ],
    relatedTerms: ['service-mesh', 'envoy', 'istio']
  },

  // ==================== 安全认证 ====================
  {
    id: 'jwt',
    term: 'JWT (JSON Web Token)',
    termEn: 'JSON Web Token',
    category: 'security',
    definition: 'JWT 是一种紧凑的、URL 安全的令牌格式，用于在各方之间安全地传递信息。它由 Header、Payload、Signature 三部分组成，常用于身份认证和信息交换。',
    higressRelation: 'Higress 内置 JWT 认证插件，支持 JWT 的签发验证、Claims 提取、Token 刷新等功能，可在网关层统一实现认证。',
    examples: [
      'JWT 包含用户 ID 和角色等声明信息',
      '使用 RS256 算法签名保证 Token 不被篡改',
      'JWT 的 exp 声明定义 Token 过期时间'
    ],
    relatedTerms: ['oauth', 'oidc', 'api-key'],
    configExample: `# Higress JWT 认证配置
plugins:
  - name: jwt-auth
    config:
      issuer: "https://auth.example.com"
      jwks_uri: "https://auth.example.com/.well-known/jwks.json"`
  },
  {
    id: 'oauth',
    term: 'OAuth 2.0',
    termEn: 'OAuth 2.0',
    category: 'security',
    definition: 'OAuth 2.0 是授权框架的行业标准，允许第三方应用在用户授权下访问其资源，而无需共享用户凭证。它定义了授权码、隐式、密码、客户端凭证等多种授权流程。',
    higressRelation: 'Higress 支持 OAuth 2.0 Token 验证，可集成企业身份提供商，在网关层实现统一的授权控制。',
    examples: [
      '授权码模式适用于 Web 应用',
      '客户端凭证模式用于服务间认证',
      'OAuth 2.0 的 scope 控制访问权限范围'
    ],
    relatedTerms: ['jwt', 'oidc', 'api-gateway']
  },
  {
    id: 'oidc',
    term: 'OIDC (OpenID Connect)',
    termEn: 'OpenID Connect',
    category: 'security',
    definition: 'OIDC 是基于 OAuth 2.0 的身份认证协议，在 OAuth 授权流程上增加了身份层。它提供标准化的用户信息获取方式，是现代单点登录（SSO）的基础。',
    higressRelation: 'Higress 支持 OIDC 认证，可与 Keycloak、Auth0 等身份提供商集成，实现企业级单点登录。',
    examples: [
      'OIDC 的 ID Token 包含用户身份信息',
      'UserInfo Endpoint 提供用户详细资料',
      '企业通过 OIDC 实现员工统一登录'
    ],
    relatedTerms: ['oauth', 'jwt', 'sso']
  },
  {
    id: 'mtls',
    term: 'mTLS (双向 TLS)',
    termEn: 'Mutual TLS',
    category: 'security',
    definition: 'mTLS 是双向的 TLS 认证，不仅服务器向客户端证明身份，客户端也向服务器证明身份。它提供了比单向 TLS 更强的安全保障，是零信任架构的重要组成。',
    higressRelation: 'Higress 支持 mTLS 配置，可验证客户端证书，实现服务间的双向认证，保障通信安全。',
    examples: [
      'mTLS 确保只有持有有效证书的客户端才能访问',
      '服务网格使用 mTLS 加密服务间通信',
      '金融行业使用 mTLS 保护敏感 API'
    ],
    relatedTerms: ['ssl-termination', 'zero-trust', 'service-mesh']
  },
  {
    id: 'waf',
    term: 'WAF (Web 应用防火墙)',
    termEn: 'Web Application Firewall',
    category: 'security',
    definition: 'WAF 是保护 Web 应用的安全防护系统，通过分析 HTTP 流量，识别和阻断 SQL 注入、XSS、CSRF 等常见 Web 攻击，是应用安全的重要防线。',
    higressRelation: 'Higress 内置 WAF 能力，支持 OWASP 核心规则集，可有效防护常见 Web 攻击，并支持自定义安全规则。',
    examples: [
      'WAF 检测并阻断 SQL 注入攻击',
      '防护 XSS 跨站脚本攻击',
      'WAF 规则可根据业务需求定制'
    ],
    relatedTerms: ['api-gateway', 'security', 'ddos']
  },
  {
    id: 'api-key',
    term: 'API Key',
    termEn: 'API Key',
    category: 'security',
    definition: 'API Key 是一种简单的 API 认证方式，客户端在请求中携带预先分配的密钥来证明身份。它实现简单但安全性较低，适用于内部服务或低风险场景。',
    higressRelation: 'Higress 支持 API Key 认证，可管理多个消费者的 Key，并基于 Key 实现限流、统计等功能。',
    examples: [
      'API Key 通常放在 Header 或查询参数中',
      '不同消费者分配不同的 API Key',
      'API Key 可设置过期时间和权限范围'
    ],
    relatedTerms: ['jwt', 'oauth', 'rate-limiting'],
    configExample: `# Higress API Key 认证配置
plugins:
  - name: key-auth
    config:
      consumers:
        - name: user-a
          key: "sk-xxxxxxxxxxxx"
        - name: user-b
          key: "sk-yyyyyyyyyyyy"`
  },
  {
    id: 'ssl-termination',
    term: 'SSL 终止',
    termEn: 'SSL Termination',
    category: 'security',
    definition: 'SSL 终止是在网关层解密 HTTPS 流量的技术，网关负责 TLS 握手和加解密，后端服务只需处理明文 HTTP 请求。这简化了后端服务的证书管理，同时允许网关检查和处理请求内容。',
    higressRelation: 'Higress 支持 SSL 终止，可统一管理 TLS 证书，支持证书自动续期，并可对解密后的流量进行安全检查和路由。',
    examples: [
      '在网关层统一管理所有域名的证书',
      'Let\'s Encrypt 证书自动续期',
      'SSL 终止后可进行内容级别的安全检查'
    ],
    relatedTerms: ['reverse-proxy', 'mtls', 'api-gateway']
  },
  {
    id: 'zero-trust',
    term: '零信任架构',
    termEn: 'Zero Trust Architecture',
    category: 'security',
    definition: '零信任是一种安全模型，核心原则是"永不信任，始终验证"。它假设网络内外都不安全，每个请求都需要验证身份和权限，最小化攻击面和横向移动风险。',
    higressRelation: 'Higress 支持构建零信任架构，通过 mTLS、JWT 验证、细粒度授权等能力，实现每个请求的身份验证和权限控制。',
    examples: [
      '即使内网请求也需要身份认证',
      '最小权限原则限制访问范围',
      '持续验证而非一次性信任'
    ],
    relatedTerms: ['mtls', 'oidc', 'api-gateway']
  }
];

// 辅助函数：按分类获取术语
export function getTermsByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY_TERMS.filter(term => term.category === category);
}

// 辅助函数：根据 ID 获取术语
export function getTermById(id: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find(term => term.id === id);
}

// 辅助函数：获取相关术语详情
export function getRelatedTerms(termId: string): GlossaryTerm[] {
  const term = getTermById(termId);
  if (!term?.relatedTerms) return [];
  return term.relatedTerms
    .map(id => getTermById(id))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

// 辅助函数：搜索术语
export function searchTerms(query: string): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  return GLOSSARY_TERMS.filter(term =>
    term.term.toLowerCase().includes(lowerQuery) ||
    term.termEn.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery)
  );
}
