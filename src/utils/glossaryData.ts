export interface GlossaryTerm {
  id: string;
  term: string;
  termEn: string;
  category: 'ai' | 'gateway' | 'cloud-native' | 'security';
  definition: string;
  definitionEn?: string;
  higressRelation: string;
  higressRelationEn?: string;
  examples?: string[];
  examplesEn?: string[];
  relatedTerms?: string[];
  configExample?: string;
  configExampleEn?: string;
}

export interface GlossaryCategory {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn?: string;
  icon: string;
}

// 中文数据
const GLOSSARY_CATEGORIES_ZH: GlossaryCategory[] = [
  {
    id: 'ai',
    name: 'AI / 大模型',
    nameEn: 'AI / LLM',
    description: '人工智能和大语言模型相关的核心概念',
    descriptionEn: 'Core concepts in artificial intelligence and large language models',
    icon: '🤖'
  },
  {
    id: 'gateway',
    name: '网关技术',
    nameEn: 'Gateway',
    description: 'API 网关和流量管理相关术语',
    descriptionEn: 'API gateway and traffic management terminology',
    icon: '🚪'
  },
  {
    id: 'cloud-native',
    name: '云原生',
    nameEn: 'Cloud Native',
    description: 'Kubernetes、容器和微服务相关概念',
    descriptionEn: 'Kubernetes, containers, and microservices concepts',
    icon: '☁️'
  },
  {
    id: 'security',
    name: '安全认证',
    nameEn: 'Security',
    description: '身份认证、授权和安全防护相关术语',
    descriptionEn: 'Authentication, authorization, and security protection terms',
    icon: '🔐'
  }
];

// 英文数据
const GLOSSARY_CATEGORIES_EN: GlossaryCategory[] = [
  {
    id: 'ai',
    name: 'AI / LLM',
    nameEn: 'AI / LLM',
    description: 'Core concepts in artificial intelligence and large language models',
    descriptionEn: 'Core concepts in artificial intelligence and large language models',
    icon: '🤖'
  },
  {
    id: 'gateway',
    name: 'Gateway',
    nameEn: 'Gateway',
    description: 'API gateway and traffic management terminology',
    descriptionEn: 'API gateway and traffic management terminology',
    icon: '🚪'
  },
  {
    id: 'cloud-native',
    name: 'Cloud Native',
    nameEn: 'Cloud Native',
    description: 'Kubernetes, containers, and microservices concepts',
    descriptionEn: 'Kubernetes, containers, and microservices concepts',
    icon: '☁️'
  },
  {
    id: 'security',
    name: 'Security',
    nameEn: 'Security',
    description: 'Authentication, authorization, and security protection terms',
    descriptionEn: 'Authentication, authorization, and security protection terms',
    icon: '🔐'
  }
];

// 中文术语数据
const GLOSSARY_TERMS_ZH: GlossaryTerm[] = [
  // ==================== AI / 大模型 ====================
  {
    id: 'token',
    term: 'Token',
    termEn: 'Token',
    category: 'ai',
    definition: 'Token 是大语言模型处理文本的基本单位。模型将输入文本分割成一系列 Token 进行处理，每个 Token 可能是一个单词、子词或字符。Token 数量直接影响 API 调用成本和响应时间。',
    definitionEn: 'Token is the basic unit for processing text in large language models. Models split input text into a series of tokens for processing, where each token may be a word, subword, or character. Token count directly affects API call costs and response time.',
    higressRelation: 'Higress AI 网关提供 Token 级别的流量管理，支持按 Token 消耗进行配额管理和限流，帮助企业精确控制 AI 调用成本。',
    higressRelationEn: 'Higress AI Gateway provides token-level traffic management, supporting quota management and rate limiting based on token consumption, helping enterprises precisely control AI call costs.',
    examples: [
      '英文中 "Hello World" 通常被分为 2 个 Token',
      '中文的 Token 划分通常按字或词组进行',
      'GPT-4 的上下文窗口支持 128K Token'
    ],
    examplesEn: [
      '"Hello World" in English is typically split into 2 tokens',
      'Chinese tokenization is usually done by character or word group',
      'GPT-4\'s context window supports 128K tokens'
    ],
    relatedTerms: ['llm', 'prompt', 'context-window'],
    configExample: `# Higress Token 限流配置示例
rule:
  limit_by_token:
    tokens_per_minute: 100000
    tokens_per_day: 1000000`,
    configExampleEn: `# Higress Token Rate Limiting Configuration Example
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
    definitionEn: 'LLM (Large Language Model) is a deep learning-based natural language processing model trained on massive text data, capable of understanding and generating human language. Representative products include GPT, Claude, Qwen, DeepSeek, etc.',
    higressRelation: 'Higress AI 网关支持 100+ 种主流 LLM 的统一接入，通过协议转换实现多模型统一调用，并提供模型级别的负载均衡和 Failover 能力。',
    higressRelationEn: 'Higress AI Gateway supports unified access to 100+ mainstream LLMs, enabling unified multi-model calls through protocol conversion, and provides model-level load balancing and failover capabilities.',
    examples: [
      'OpenAI GPT-4 是目前最知名的商业 LLM',
      'DeepSeek 是高性价比的开源 LLM 代表',
      '通义千问是阿里云的大语言模型产品'
    ],
    examplesEn: [
      'OpenAI GPT-4 is currently the most well-known commercial LLM',
      'DeepSeek is a representative of cost-effective open-source LLMs',
      'Qwen is Alibaba Cloud\'s large language model product'
    ],
    relatedTerms: ['token', 'prompt', 'agent', 'rag']
  },
  {
    id: 'prompt',
    term: 'Prompt (提示词)',
    termEn: 'Prompt',
    category: 'ai',
    definition: 'Prompt 是用户向大语言模型发送的输入指令或问题。高质量的 Prompt 设计（Prompt Engineering）对于获得准确、有用的模型输出至关重要。',
    definitionEn: 'Prompt is the input instruction or question sent by users to large language models. High-quality prompt design (Prompt Engineering) is crucial for obtaining accurate and useful model outputs.',
    higressRelation: 'Higress 支持 Prompt 模板管理和提示词注入防护，帮助企业标准化 AI 交互并防范提示词攻击。',
    higressRelationEn: 'Higress supports prompt template management and prompt injection protection, helping enterprises standardize AI interactions and prevent prompt attacks.',
    examples: [
      '系统提示词（System Prompt）定义 AI 的角色和行为',
      '用户提示词（User Prompt）是具体的问题或任务',
      '少样本提示（Few-shot Prompt）通过示例引导模型输出'
    ],
    examplesEn: [
      'System Prompt defines the AI\'s role and behavior',
      'User Prompt is a specific question or task',
      'Few-shot Prompt guides model output through examples'
    ],
    relatedTerms: ['llm', 'token', 'rag']
  },
  {
    id: 'agent',
    term: 'Agent (智能体)',
    termEn: 'AI Agent',
    category: 'ai',
    definition: 'AI Agent 是能够自主感知环境、做出决策并执行任务的智能系统。它结合大语言模型的推理能力和外部工具的执行能力，实现复杂任务的自动化处理。',
    definitionEn: 'AI Agent is an intelligent system capable of autonomously perceiving the environment, making decisions, and executing tasks. It combines the reasoning capabilities of large language models with the execution capabilities of external tools to automate complex tasks.',
    higressRelation: 'Higress 通过 MCP 协议支持和 HiMarket 平台，为企业提供 Agent 的统一接入、管理和市场化能力，加速智能体应用落地。',
    higressRelationEn: 'Through MCP protocol support and HiMarket platform, Higress provides enterprises with unified access, management, and marketization capabilities for Agents, accelerating agent application deployment.',
    examples: [
      '自动客服 Agent 可处理用户咨询并执行订单操作',
      '代码助手 Agent 可理解需求并编写、测试代码',
      '数据分析 Agent 可自动查询数据库并生成报告'
    ],
    examplesEn: [
      'Automated customer service Agent can handle user inquiries and execute order operations',
      'Code assistant Agent can understand requirements and write, test code',
      'Data analysis Agent can automatically query databases and generate reports'
    ],
    relatedTerms: ['llm', 'mcp', 'rag', 'function-calling']
  },
  {
    id: 'hallucination',
    term: '幻觉 (Hallucination)',
    termEn: 'AI Hallucination',
    category: 'ai',
    definition: '幻觉是指大语言模型生成看似合理但实际上不准确、无事实依据或与其训练数据不符的信息的现象。这是由于模型是基于概率预测下一个 Token，而非真正理解事实。',
    definitionEn: 'Hallucination refers to the phenomenon where large language models generate information that seems reasonable but is actually inaccurate, unfounded, or inconsistent with their training data. This occurs because models predict the next token probabilistically rather than truly understanding facts.',
    higressRelation: 'Higress 通过 RAG（检索增强生成）集成、知识库引用以及内容安全审查插件，有效降低 AI 响应中的幻觉风险，提升回答的可靠性。',
    higressRelationEn: 'Through RAG (Retrieval-Augmented Generation) integration, knowledge base references, and content safety review plugins, Higress effectively reduces hallucination risks in AI responses and improves answer reliability.',
    examples: [
      '模型虚构了一个并不存在的历史事件或法律条文',
      '在回答技术问题时给出了错误的 API 调用参数',
      '自信地陈述一个逻辑上矛盾的事实'
    ],
    examplesEn: [
      'Model fabricates a historical event or legal provision that doesn\'t exist',
      'Provides incorrect API call parameters when answering technical questions',
      'Confidently states a fact that is logically contradictory'
    ],
    relatedTerms: ['llm', 'rag', 'prompt-engineering']
  },
  {
    id: 'prompt-engineering',
    term: '提示词工程',
    termEn: 'Prompt Engineering',
    category: 'ai',
    definition: '提示词工程是通过设计、精炼和优化输入给 AI 模型的指令（Prompt），以引导模型生成更高质量、更准确输出的技术。它包括结构化提示、少样本引导等多种策略。',
    definitionEn: 'Prompt Engineering is the technique of designing, refining, and optimizing instructions (Prompts) input to AI models to guide them to generate higher quality and more accurate outputs. It includes various strategies such as structured prompts and few-shot guidance.',
    higressRelation: 'Higress 支持在网关层对请求进行 Prompt 模板增强，统一注入系统级约束，降低对前端 Prompt 编写的依赖。',
    higressRelationEn: 'Higress supports prompt template enhancement at the gateway layer, uniformly injecting system-level constraints and reducing dependence on frontend prompt writing.',
    examples: [
      '思维链（CoT）提示：引导模型一步步思考',
      '角色扮演：让 AI 扮演特定的专家角色',
      '少样本提示：提供几个例子让模型学习输出格式'
    ],
    examplesEn: [
      'Chain-of-Thought (CoT) prompting: guides the model to think step by step',
      'Role-playing: makes AI play a specific expert role',
      'Few-shot prompting: provides examples for the model to learn output format'
    ],
    relatedTerms: ['prompt', 'llm', 'agent']
  },
  {
    id: 'model-routing',
    term: '模型路由',
    termEn: 'Model Routing',
    category: 'ai',
    definition: '模型路由是根据请求的复杂度、成本要求、响应时间或内容类型，动态选择最合适 LLM 的技术。它可以平衡成本与性能，实现 AI 资源的最优利用。',
    definitionEn: 'Model Routing is a technique that dynamically selects the most appropriate LLM based on request complexity, cost requirements, response time, or content type. It can balance cost and performance to achieve optimal utilization of AI resources.',
    higressRelation: 'Higress 提供强大的模型路由能力，可根据请求特征（如用户级别、Token 长度）将流量分发到 GPT-4 或成本更低的本地模型。',
    higressRelationEn: 'Higress provides powerful model routing capabilities, distributing traffic to GPT-4 or lower-cost local models based on request characteristics such as user level and token length.',
    examples: [
      '简单分类任务路由到轻量级模型以降低成本',
      '逻辑推理任务路由到高性能大模型以保证准确性',
      '当主模型响应慢时自动切换到备用模型路由'
    ],
    examplesEn: [
      'Simple classification tasks routed to lightweight models to reduce costs',
      'Logical reasoning tasks routed to high-performance large models to ensure accuracy',
      'Automatically switches to backup model routing when the primary model responds slowly'
    ],
    relatedTerms: ['llm', 'ai-gateway', 'failover']
  },
  {
    id: 'ai-content-safety',
    term: 'AI 内容安全',
    termEn: 'AI Content Safety',
    category: 'ai',
    definition: 'AI 内容安全是指对大语言模型的输入（Prompt）和输出（Response）进行审查，识别并拦截违规、有害、色情或敏感内容，确保 AI 应用符合合规要求。',
    definitionEn: 'AI Content Safety refers to reviewing inputs (Prompts) and outputs (Responses) of large language models, identifying and blocking violations, harmful, pornographic, or sensitive content to ensure AI applications comply with regulatory requirements.',
    higressRelation: 'Higress 集成多种内容安全插件，支持敏感词过滤、合规性审查，防止 AI 模型被诱导输出不当信息或泄露隐私。',
    higressRelationEn: 'Higress integrates various content safety plugins, supporting sensitive word filtering and compliance review to prevent AI models from being induced to output inappropriate information or leak privacy.',
    examples: [
      '拦截包含政治敏感词的用户输入',
      '屏蔽模型输出中的虚假诈骗信息',
      '通过语义识别防止提示词攻击（Prompt Injection）'
    ],
    examplesEn: [
      'Block user inputs containing politically sensitive words',
      'Filter false fraud information in model outputs',
      'Prevent prompt injection attacks through semantic recognition'
    ],
    relatedTerms: ['llm', 'prompt', 'waf']
  },
  {
    id: 'mcp',
    term: 'MCP (模型上下文协议)',
    termEn: 'Model Context Protocol',
    category: 'ai',
    definition: 'MCP（Model Context Protocol）是 Anthropic 提出的开放标准协议，用于连接 AI 模型与外部数据源和工具。它定义了统一的接口规范，让 AI 应用能够安全地访问各种资源。',
    definitionEn: 'MCP (Model Context Protocol) is an open standard protocol proposed by Anthropic for connecting AI models with external data sources and tools. It defines a unified interface specification, enabling AI applications to securely access various resources.',
    higressRelation: 'Higress 原生支持 MCP 协议，可将现有 HTTP API 转换为 MCP Server，并提供 MCP 市场功能，实现工具的统一管理和分发。',
    higressRelationEn: 'Higress natively supports the MCP protocol, can convert existing HTTP APIs to MCP Servers, and provides MCP marketplace functionality for unified management and distribution of tools.',
    examples: [
      'MCP Server 可以暴露数据库查询能力给 AI',
      'MCP 工具让 AI 能够调用外部 API 执行操作',
      'HiMarket 提供企业级 MCP 服务市场'
    ],
    examplesEn: [
      'MCP Server can expose database query capabilities to AI',
      'MCP tools enable AI to call external APIs to perform operations',
      'HiMarket provides enterprise-grade MCP service marketplace'
    ],
    relatedTerms: ['agent', 'function-calling', 'api-gateway'],
    configExample: `# Higress MCP 配置示例
mcp:
  servers:
    - name: database-tools
      transport: http
      endpoint: /mcp/database`,
    configExampleEn: `# Higress MCP Configuration Example
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
    definitionEn: 'RAG is a technique that combines information retrieval with text generation. It first retrieves relevant documents from a knowledge base, then uses the retrieval results as context input to the LLM to generate answers, effectively reducing model hallucinations and providing up-to-date information.',
    higressRelation: 'Higress AI 网关可与向量数据库集成，支持 RAG 场景下的知识检索路由和缓存优化，提升检索增强生成的效率。',
    higressRelationEn: 'Higress AI Gateway can integrate with vector databases, supporting knowledge retrieval routing and cache optimization in RAG scenarios to improve retrieval-augmented generation efficiency.',
    examples: [
      '企业知识库问答系统使用 RAG 确保答案准确性',
      '客服系统通过 RAG 检索产品文档回答用户问题',
      'RAG 可结合实时数据源提供最新信息'
    ],
    examplesEn: [
      'Enterprise knowledge base Q&A systems use RAG to ensure answer accuracy',
      'Customer service systems retrieve product documents through RAG to answer user questions',
      'RAG can combine real-time data sources to provide the latest information'
    ],
    relatedTerms: ['llm', 'embedding', 'vector-database']
  },
  {
    id: 'embedding',
    term: 'Embedding (向量嵌入)',
    termEn: 'Embedding',
    category: 'ai',
    definition: 'Embedding 是将文本、图像等数据转换为高维向量的技术。这些向量能够捕捉数据的语义信息，使得语义相似的内容在向量空间中距离接近，是实现语义搜索和 RAG 的基础。',
    definitionEn: 'Embedding is a technique for converting data such as text and images into high-dimensional vectors. These vectors can capture semantic information of the data, making semantically similar content close in vector space, which is the foundation for semantic search and RAG.',
    higressRelation: 'Higress 支持 Embedding API 的统一代理，可路由请求到不同的 Embedding 服务提供商，并支持语义缓存以减少重复计算。',
    higressRelationEn: 'Higress supports unified proxying of Embedding APIs, can route requests to different embedding service providers, and supports semantic caching to reduce redundant computations.',
    examples: [
      'OpenAI text-embedding-ada-002 是常用的文本嵌入模型',
      '向量数据库使用 Embedding 实现相似度搜索',
      '语义缓存通过 Embedding 相似度判断是否命中缓存'
    ],
    examplesEn: [
      'OpenAI text-embedding-ada-002 is a commonly used text embedding model',
      'Vector databases use Embeddings to implement similarity search',
      'Semantic caching determines cache hits through embedding similarity'
    ],
    relatedTerms: ['rag', 'vector-database', 'llm']
  },
  {
    id: 'function-calling',
    term: 'Function Calling (函数调用)',
    termEn: 'Function Calling',
    category: 'ai',
    definition: 'Function Calling 是 LLM 与外部系统交互的能力。模型可以根据用户意图，决定调用预定义的函数并生成符合函数签名的参数，实现查询数据库、调用 API 等操作。',
    definitionEn: 'Function Calling is the capability of LLMs to interact with external systems. Models can decide to call predefined functions based on user intent and generate parameters that match function signatures, enabling operations such as querying databases and calling APIs.',
    higressRelation: 'Higress 支持 Function Calling 请求的路由和权限控制，确保 AI 调用外部函数的安全性和可审计性。',
    higressRelationEn: 'Higress supports routing and permission control for Function Calling requests, ensuring the security and auditability of AI calls to external functions.',
    examples: [
      '天气查询函数让 AI 能获取实时天气信息',
      '订单查询函数使 AI 客服能查看用户订单状态',
      'Function Calling 是 Agent 执行任务的核心机制'
    ],
    examplesEn: [
      'Weather query functions enable AI to obtain real-time weather information',
      'Order query functions allow AI customer service to view user order status',
      'Function Calling is the core mechanism for Agents to execute tasks'
    ],
    relatedTerms: ['agent', 'mcp', 'llm']
  },
  {
    id: 'context-window',
    term: 'Context Window (上下文窗口)',
    termEn: 'Context Window',
    category: 'ai',
    definition: '上下文窗口是 LLM 单次处理的最大 Token 数量限制。它决定了模型能够"记住"多少对话历史和参考信息。更大的上下文窗口支持更长的对话和更多的参考文档。',
    definitionEn: 'Context Window is the maximum token count limit that an LLM can process in a single session. It determines how much conversation history and reference information the model can "remember". Larger context windows support longer conversations and more reference documents.',
    higressRelation: 'Higress 可根据请求的上下文长度智能路由到不同规格的模型，优化成本和性能的平衡。',
    higressRelationEn: 'Higress can intelligently route to models of different specifications based on request context length, optimizing the balance between cost and performance.',
    examples: [
      'GPT-4 Turbo 支持 128K Token 的上下文窗口',
      'Claude 3 支持 200K Token 的超长上下文',
      '长文档分析需要大上下文窗口的模型支持'
    ],
    examplesEn: [
      'GPT-4 Turbo supports a 128K token context window',
      'Claude 3 supports an ultra-long 200K token context',
      'Long document analysis requires model support with large context windows'
    ],
    relatedTerms: ['token', 'llm', 'prompt']
  },
  {
    id: 'ai-gateway',
    term: 'AI 网关',
    termEn: 'AI Gateway',
    category: 'ai',
    definition: 'AI 网关是专为 AI 应用设计的 API 网关，提供大模型 API 的统一接入、协议转换、流量管理、安全防护和可观测性等能力，是企业 AI 基础设施的核心组件。',
    definitionEn: 'AI Gateway is an API gateway designed specifically for AI applications, providing unified access to large model APIs, protocol conversion, traffic management, security protection, and observability capabilities. It is a core component of enterprise AI infrastructure.',
    higressRelation: 'Higress 是业界领先的 AI 网关产品，支持 100+ 模型统一接入、Token 级限流、语义缓存、内容安全防护等企业级 AI 治理能力。',
    higressRelationEn: 'Higress is an industry-leading AI gateway product, supporting unified access to 100+ models, token-level rate limiting, semantic caching, content safety protection, and other enterprise-grade AI governance capabilities.',
    examples: [
      'AI 网关统一管理多个 LLM 提供商的 API',
      '通过 AI 网关实现模型调用的成本控制',
      'AI 网关提供 Prompt 注入攻击防护'
    ],
    examplesEn: [
      'AI Gateway uniformly manages APIs from multiple LLM providers',
      'Cost control for model calls through AI Gateway',
      'AI Gateway provides prompt injection attack protection'
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
    definitionEn: 'API Gateway is a unified entry point in microservices architecture, responsible for request routing, protocol conversion, authentication and authorization, rate limiting and circuit breaking, monitoring and logging, etc. It shields clients from backend service complexity and provides a unified API access layer.',
    higressRelation: 'Higress 是云原生 API 网关，将流量网关、微服务网关和安全网关三合一，基于 Envoy 构建，提供高性能、易扩展的 API 管理能力。',
    higressRelationEn: 'Higress is a cloud-native API gateway that combines traffic gateway, microservice gateway, and security gateway into one, built on Envoy, providing high-performance and easily extensible API management capabilities.',
    examples: [
      'API 网关统一处理所有外部请求的认证',
      '通过网关实现 API 版本管理和灰度发布',
      '网关层的限流保护后端服务免受流量冲击'
    ],
    examplesEn: [
      'API Gateway uniformly handles authentication for all external requests',
      'API version management and canary releases through the gateway',
      'Rate limiting at the gateway layer protects backend services from traffic surges'
    ],
    relatedTerms: ['rate-limiting', 'load-balancing', 'ingress']
  },
  {
    id: 'rate-limiting',
    term: '限流 (Rate Limiting)',
    termEn: 'Rate Limiting',
    category: 'gateway',
    definition: '限流是控制 API 请求速率的技术，通过限制单位时间内的请求数量，保护后端服务免受过载，确保系统稳定性和公平的资源分配。常见算法包括令牌桶、漏桶、滑动窗口等。',
    definitionEn: 'Rate Limiting is a technique for controlling API request rates by limiting the number of requests per unit time, protecting backend services from overload and ensuring system stability and fair resource allocation. Common algorithms include token bucket, leaky bucket, sliding window, etc.',
    higressRelation: 'Higress 提供多维度限流能力，支持基于路由、Header、参数的精细化限流策略，AI 场景下还支持 Token 级别的限流。',
    higressRelationEn: 'Higress provides multi-dimensional rate limiting capabilities, supporting fine-grained rate limiting strategies based on routes, headers, and parameters, and also supports token-level rate limiting in AI scenarios.',
    examples: [
      '每个 API Key 每分钟最多 100 次请求',
      '按用户 ID 限制调用频率防止滥用',
      'AI 接口按 Token 消耗量进行配额控制'
    ],
    examplesEn: [
      'Each API Key allows a maximum of 100 requests per minute',
      'Limit call frequency by user ID to prevent abuse',
      'AI interfaces perform quota control based on token consumption'
    ],
    relatedTerms: ['circuit-breaker', 'api-gateway', 'token'],
    configExample: `# Higress 限流配置示例
plugins:
  - name: request-rate-limiter
    config:
      rate: 100
      burst: 200
      key: consumer`,
    configExampleEn: `# Higress Rate Limiting Configuration Example
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
    definitionEn: 'Load Balancing distributes traffic across multiple backend service instances to improve system availability and processing capacity. Common strategies include round-robin, weighted round-robin, least connections, consistent hashing, etc.',
    higressRelation: 'Higress 支持多种负载均衡策略，可根据服务健康状态动态调整权重，AI 场景下支持多模型间的智能负载分配。',
    higressRelationEn: 'Higress supports multiple load balancing strategies, can dynamically adjust weights based on service health status, and supports intelligent load distribution among multiple models in AI scenarios.',
    examples: [
      '轮询策略将请求均匀分配到所有实例',
      '加权策略让高性能实例承担更多流量',
      '一致性哈希确保相同用户请求到达同一实例'
    ],
    examplesEn: [
      'Round-robin strategy evenly distributes requests to all instances',
      'Weighted strategy allows high-performance instances to handle more traffic',
      'Consistent hashing ensures requests from the same user reach the same instance'
    ],
    relatedTerms: ['api-gateway', 'service-discovery', 'health-check']
  },
  {
    id: 'circuit-breaker',
    term: '熔断器',
    termEn: 'Circuit Breaker',
    category: 'gateway',
    definition: '熔断器是一种容错机制，当下游服务出现故障时，自动"断开"请求链路，快速返回错误响应，防止故障蔓延。待服务恢复后自动"闭合"恢复正常调用。',
    definitionEn: 'Circuit Breaker is a fault tolerance mechanism that automatically "opens" the request chain when downstream services fail, quickly returning error responses to prevent fault propagation. It automatically "closes" to resume normal calls after service recovery.',
    higressRelation: 'Higress 内置熔断能力，支持基于错误率、超时率等指标自动触发熔断，并可配置 Fallback 策略，AI 场景支持模型级 Failover。',
    higressRelationEn: 'Higress has built-in circuit breaking capabilities, supporting automatic triggering based on error rates, timeout rates, and other metrics, and can configure Fallback strategies. AI scenarios support model-level Failover.',
    examples: [
      '当错误率超过 50% 时触发熔断',
      '熔断期间直接返回缓存的默认响应',
      '主模型不可用时自动切换到备用模型'
    ],
    examplesEn: [
      'Circuit breaker triggers when error rate exceeds 50%',
      'Directly returns cached default response during circuit breaking',
      'Automatically switches to backup model when primary model is unavailable'
    ],
    relatedTerms: ['rate-limiting', 'failover', 'health-check']
  },
  {
    id: 'failover',
    term: 'Failover (故障转移)',
    termEn: 'Failover',
    category: 'gateway',
    definition: 'Failover 是系统在检测到故障时自动切换到备用资源的机制。它确保在主服务不可用时，请求能够自动路由到健康的备用服务，保证业务连续性。',
    definitionEn: 'Failover is a mechanism where the system automatically switches to backup resources when a fault is detected. It ensures that requests can be automatically routed to healthy backup services when the primary service is unavailable, ensuring business continuity.',
    higressRelation: 'Higress 支持多层级 Failover：服务实例级、服务级、跨集群级。AI 网关特别支持多模型 Failover，主模型故障时自动切换备用模型。',
    higressRelationEn: 'Higress supports multi-level Failover: service instance level, service level, and cross-cluster level. AI Gateway particularly supports multi-model Failover, automatically switching to backup models when the primary model fails.',
    examples: [
      'GPT-4 不可用时自动切换到 Claude',
      '主数据中心故障时切换到灾备中心',
      '服务实例故障时自动摘除并路由到健康实例'
    ],
    examplesEn: [
      'Automatically switches to Claude when GPT-4 is unavailable',
      'Switches to disaster recovery center when primary data center fails',
      'Automatically removes and routes to healthy instances when service instances fail'
    ],
    relatedTerms: ['circuit-breaker', 'health-check', 'load-balancing']
  },
  {
    id: 'health-check',
    term: '健康检查',
    termEn: 'Health Check',
    category: 'gateway',
    definition: '健康检查是定期探测后端服务状态的机制，通过主动或被动方式检测服务是否正常运行。不健康的实例会被自动从负载均衡池中移除，防止请求路由到故障节点。',
    definitionEn: 'Health Check is a mechanism that periodically probes backend service status, detecting whether services are running normally through active or passive methods. Unhealthy instances are automatically removed from the load balancing pool to prevent requests from being routed to faulty nodes.',
    higressRelation: 'Higress 支持 HTTP、TCP、gRPC 等多种健康检查方式，可配置检查间隔、超时时间、健康阈值等参数，实现精准的服务状态管理。',
    higressRelationEn: 'Higress supports various health check methods such as HTTP, TCP, and gRPC, and can configure parameters such as check interval, timeout, and health threshold to achieve precise service status management.',
    examples: [
      '每 10 秒发送 HTTP GET /health 检查服务状态',
      '连续 3 次检查失败则标记实例为不健康',
      '不健康实例恢复后自动重新加入服务池'
    ],
    examplesEn: [
      'Send HTTP GET /health every 10 seconds to check service status',
      'Mark instance as unhealthy after 3 consecutive check failures',
      'Automatically rejoin service pool after unhealthy instance recovers'
    ],
    relatedTerms: ['load-balancing', 'failover', 'service-discovery']
  },
  {
    id: 'reverse-proxy',
    term: '反向代理',
    termEn: 'Reverse Proxy',
    category: 'gateway',
    definition: '反向代理位于服务器端，接收客户端请求并转发到后端服务器，对客户端隐藏真实服务器地址。它可以实现负载均衡、缓存、SSL 终止、安全防护等功能。',
    definitionEn: 'Reverse Proxy is located on the server side, receiving client requests and forwarding them to backend servers, hiding the real server address from clients. It can implement load balancing, caching, SSL termination, security protection, and other functions.',
    higressRelation: 'Higress 基于 Envoy 构建，是高性能的反向代理，支持 HTTP/HTTPS/gRPC/WebSocket 等多种协议的代理转发。',
    higressRelationEn: 'Higress is built on Envoy, a high-performance reverse proxy supporting proxy forwarding for various protocols such as HTTP/HTTPS/gRPC/WebSocket.',
    examples: [
      'Nginx 是最常用的反向代理软件',
      '反向代理隐藏后端服务器的真实 IP',
      'CDN 本质上是分布式的反向代理'
    ],
    examplesEn: [
      'Nginx is the most commonly used reverse proxy software',
      'Reverse proxy hides the real IP of backend servers',
      'CDN is essentially a distributed reverse proxy'
    ],
    relatedTerms: ['api-gateway', 'load-balancing', 'ssl-termination']
  },
  {
    id: 'service-discovery',
    term: '服务发现',
    termEn: 'Service Discovery',
    category: 'gateway',
    definition: '服务发现是微服务架构中自动检测和定位服务实例的机制。服务启动时注册到注册中心，其他服务通过注册中心获取可用实例地址，实现动态的服务调用。',
    definitionEn: 'Service Discovery is a mechanism in microservices architecture that automatically detects and locates service instances. Services register with a registry center upon startup, and other services obtain available instance addresses through the registry center to achieve dynamic service calls.',
    higressRelation: 'Higress 集成 Nacos、Consul、Kubernetes 等多种服务发现机制，支持自动同步服务实例信息，无需手动维护上游服务地址。',
    higressRelationEn: 'Higress integrates various service discovery mechanisms such as Nacos, Consul, and Kubernetes, supporting automatic synchronization of service instance information without manual maintenance of upstream service addresses.',
    examples: [
      'Nacos 提供服务注册与发现功能',
      'Kubernetes Service 通过 DNS 实现服务发现',
      'Consul 支持多数据中心的服务发现'
    ],
    examplesEn: [
      'Nacos provides service registration and discovery functionality',
      'Kubernetes Service implements service discovery through DNS',
      'Consul supports service discovery across multiple data centers'
    ],
    relatedTerms: ['api-gateway', 'load-balancing', 'nacos']
  },
  {
    id: 'grayscale-release',
    term: '灰度发布',
    termEn: 'Canary Release',
    category: 'gateway',
    definition: '灰度发布是一种渐进式发布策略，将新版本先部署给一小部分用户，观察运行状态后再逐步扩大范围。它降低了发布风险，支持快速回滚。',
    definitionEn: 'Canary Release is a gradual release strategy that deploys new versions to a small subset of users first, then gradually expands the scope after observing the running status. It reduces release risks and supports quick rollback.',
    higressRelation: 'Higress 支持基于 Header、Cookie、权重等多维度的灰度路由，可实现全链路灰度发布，AI 场景支持多模型灰度切换。',
    higressRelationEn: 'Higress supports multi-dimensional canary routing based on headers, cookies, weights, etc., enabling end-to-end canary releases. AI scenarios support multi-model canary switching.',
    examples: [
      '先将 5% 流量导入新版本观察',
      '按用户 ID 尾号进行灰度分流',
      '新模型先对内部用户开放测试'
    ],
    examplesEn: [
      'First route 5% of traffic to the new version for observation',
      'Perform canary splitting based on user ID suffix',
      'New models are first opened for testing to internal users'
    ],
    relatedTerms: ['api-gateway', 'load-balancing', 'failover'],
    configExample: `# Higress 灰度路由配置
route:
  - match:
      headers:
        x-canary: ["true"]
    destination:
      host: service-v2
      weight: 100`,
    configExampleEn: `# Higress Canary Routing Configuration
route:
  - match:
      headers:
        x-canary: ["true"]
    destination:
      host: service-v2
      weight: 100`
  },
  {
    id: 'grpc',
    term: 'gRPC',
    termEn: 'gRPC Remote Procedure Call',
    category: 'gateway',
    definition: 'gRPC 是谷歌开发的现代、高性能、开源的远程过程调用（RPC）框架。它使用 Protocol Buffers 作为接口描述语言和底层序列化格式，支持双向流处理和高效的跨语言调用。',
    definitionEn: 'gRPC is a modern, high-performance, open-source Remote Procedure Call (RPC) framework developed by Google. It uses Protocol Buffers as the interface description language and underlying serialization format, supporting bidirectional streaming and efficient cross-language calls.',
    higressRelation: 'Higress 原生支持 gRPC 协议的代理、路由和转码（HTTP to gRPC），可作为 gRPC 服务的高性能入口网关。',
    higressRelationEn: 'Higress natively supports gRPC protocol proxying, routing, and transcoding (HTTP to gRPC), serving as a high-performance entry gateway for gRPC services.',
    examples: [
      '微服务间使用 gRPC 进行低延迟、高吞吐的通信',
      '通过网关将外部 HTTP 请求转码为内部 gRPC 调用',
      '利用 gRPC 流处理实现实时数据同步'
    ],
    examplesEn: [
      'Microservices use gRPC for low-latency, high-throughput communication',
      'Transcode external HTTP requests to internal gRPC calls through the gateway',
      'Use gRPC streaming to achieve real-time data synchronization'
    ],
    relatedTerms: ['api-gateway', 'reverse-proxy', 'http3']
  },
  {
    id: 'websockets',
    term: 'WebSockets',
    termEn: 'WebSockets',
    category: 'gateway',
    definition: 'WebSockets 是一种在单个 TCP 连接上进行全双工通信的协议。它允许服务器主动向客户端推送数据，实现实时的交互式 Web 应用。',
    definitionEn: 'WebSockets is a protocol for full-duplex communication over a single TCP connection. It allows servers to actively push data to clients, enabling real-time interactive web applications.',
    higressRelation: 'Higress 完美支持 WebSocket 协议的长连接管理和心跳检测，适用于 AI 场景下的流式输出（SSE/WebSocket）和实时聊天。',
    higressRelationEn: 'Higress perfectly supports WebSocket protocol long connection management and heartbeat detection, suitable for streaming output (SSE/WebSocket) and real-time chat in AI scenarios.',
    examples: [
      '网页端的实时聊天应用',
      '金融市场的实时股票报价更新',
      'AI 模型的打字机式流式响应输出'
    ],
    examplesEn: [
      'Real-time chat applications on web pages',
      'Real-time stock quote updates in financial markets',
      'Typewriter-style streaming response output from AI models'
    ],
    relatedTerms: ['api-gateway', 'reverse-proxy', 'http3']
  },
  {
    id: 'observability',
    term: '可观测性',
    termEn: 'Observability',
    category: 'gateway',
    definition: '可观测性通过度量指标（Metrics）、分布式追踪（Tracing）和日志（Logging）三大支柱，帮助开发者理解复杂系统的运行状态，快速定位生产环境中的问题。',
    definitionEn: 'Observability helps developers understand the running status of complex systems and quickly locate problems in production environments through three pillars: Metrics, Distributed Tracing, and Logging.',
    higressRelation: 'Higress 提供深度集成的可观测性能力，支持将网关指标导出到 Prometheus，追踪信息导出到 Skywalking/Jaeger。',
    higressRelationEn: 'Higress provides deeply integrated observability capabilities, supporting exporting gateway metrics to Prometheus and trace information to Skywalking/Jaeger.',
    examples: [
      '通过 Prometheus 监控网关的 QPS 和延迟',
      '利用分布式追踪分析请求在微服务间的调用链路',
      '实时分析网关错误日志定位配置问题'
    ],
    examplesEn: [
      'Monitor gateway QPS and latency through Prometheus',
      'Use distributed tracing to analyze request call chains across microservices',
      'Real-time analysis of gateway error logs to locate configuration issues'
    ],
    relatedTerms: ['api-gateway', 'health-check', 'kubernetes']
  },

  // ==================== 云原生 ====================
  {
    id: 'kubernetes',
    term: 'Kubernetes (K8s)',
    termEn: 'Kubernetes',
    category: 'cloud-native',
    definition: 'Kubernetes 是开源的容器编排平台，自动化部署、扩展和管理容器化应用。它提供服务发现、负载均衡、存储编排、自动回滚等能力，是云原生基础设施的事实标准。',
    definitionEn: 'Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications. It provides capabilities such as service discovery, load balancing, storage orchestration, and automatic rollback, making it the de facto standard for cloud-native infrastructure.',
    higressRelation: 'Higress 是 Kubernetes 原生网关，完全遵循 Ingress 和 Gateway API 标准，可无缝部署在 K8s 集群中，与云原生生态深度集成。',
    higressRelationEn: 'Higress is a Kubernetes-native gateway that fully adheres to Ingress and Gateway API standards, can be seamlessly deployed in K8s clusters, and deeply integrates with the cloud-native ecosystem.',
    examples: [
      'K8s Pod 是最小的部署单元',
      'Deployment 管理无状态应用的副本',
      'Service 为 Pod 提供稳定的访问入口'
    ],
    examplesEn: [
      'K8s Pod is the smallest deployment unit',
      'Deployment manages replicas of stateless applications',
      'Service provides stable access entry points for Pods'
    ],
    relatedTerms: ['ingress', 'gateway-api', 'envoy', 'service-mesh']
  },
  {
    id: 'ingress',
    term: 'Ingress',
    termEn: 'Kubernetes Ingress',
    category: 'cloud-native',
    definition: 'Ingress 是 Kubernetes 中管理集群外部访问的 API 对象，定义 HTTP/HTTPS 路由规则，将外部流量导入到集群内的 Service。Ingress Controller 负责实现这些路由规则。',
    definitionEn: 'Ingress is an API object in Kubernetes that manages external access to the cluster, defining HTTP/HTTPS routing rules to route external traffic to Services within the cluster. Ingress Controller is responsible for implementing these routing rules.',
    higressRelation: 'Higress 是高性能的 Ingress Controller，兼容 Nginx Ingress 注解，支持从 Nginx Ingress 平滑迁移，并提供更丰富的流量治理能力。',
    higressRelationEn: 'Higress is a high-performance Ingress Controller, compatible with Nginx Ingress annotations, supports smooth migration from Nginx Ingress, and provides richer traffic governance capabilities.',
    examples: [
      'Ingress 根据域名路由到不同 Service',
      '配置 TLS 证书实现 HTTPS 访问',
      '通过 annotation 配置高级路由规则'
    ],
    examplesEn: [
      'Ingress routes to different Services based on domain names',
      'Configure TLS certificates to enable HTTPS access',
      'Configure advanced routing rules through annotations'
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
              number: 80`,
    configExampleEn: `# Kubernetes Ingress Example
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
    definitionEn: 'Gateway API is Kubernetes\' next-generation gateway standard, providing richer routing capabilities and clearer role separation compared to Ingress. It supports various protocols such as HTTP, TCP, and gRPC, and is the evolution direction of Ingress.',
    higressRelation: 'Higress 完整支持 Gateway API 标准，提供 GatewayClass、Gateway、HTTPRoute 等资源的实现，支持高级流量管理特性。',
    higressRelationEn: 'Higress fully supports the Gateway API standard, providing implementations of resources such as GatewayClass, Gateway, and HTTPRoute, supporting advanced traffic management features.',
    examples: [
      'HTTPRoute 定义 HTTP 请求的路由规则',
      'Gateway 资源配置监听端口和协议',
      'Gateway API 支持请求头匹配和重写'
    ],
    examplesEn: [
      'HTTPRoute defines routing rules for HTTP requests',
      'Gateway resources configure listening ports and protocols',
      'Gateway API supports request header matching and rewriting'
    ],
    relatedTerms: ['kubernetes', 'ingress', 'api-gateway']
  },
  {
    id: 'envoy',
    term: 'Envoy',
    termEn: 'Envoy Proxy',
    category: 'cloud-native',
    definition: 'Envoy 是 CNCF 的高性能边缘和服务代理，专为云原生应用设计。它支持动态配置、丰富的可观测性、高级负载均衡等特性，是 Istio、Higress 等项目的核心组件。',
    definitionEn: 'Envoy is CNCF\'s high-performance edge and service proxy designed for cloud-native applications. It supports dynamic configuration, rich observability, advanced load balancing, and other features, making it a core component of projects like Istio and Higress.',
    higressRelation: 'Higress 基于 Envoy 构建，继承了 Envoy 的高性能和可扩展性，并通过 Wasm 插件机制提供更灵活的扩展能力。',
    higressRelationEn: 'Higress is built on Envoy, inheriting Envoy\'s high performance and scalability, and provides more flexible extension capabilities through the Wasm plugin mechanism.',
    examples: [
      'Envoy 支持 xDS API 动态更新配置',
      '内置丰富的可观测性指标和追踪',
      'Envoy 是服务网格的数据平面标准选择'
    ],
    examplesEn: [
      'Envoy supports dynamic configuration updates through xDS API',
      'Built-in rich observability metrics and tracing',
      'Envoy is the standard choice for service mesh data plane'
    ],
    relatedTerms: ['service-mesh', 'wasm', 'istio']
  },
  {
    id: 'service-mesh',
    term: 'Service Mesh (服务网格)',
    termEn: 'Service Mesh',
    category: 'cloud-native',
    definition: '服务网格是微服务间通信的基础设施层，通过 Sidecar 代理处理服务间的网络通信，提供负载均衡、服务发现、加密、可观测性等能力，将这些关注点从业务代码中分离。',
    definitionEn: 'Service Mesh is an infrastructure layer for inter-microservice communication, handling network communication between services through Sidecar proxies, providing capabilities such as load balancing, service discovery, encryption, and observability, separating these concerns from business code.',
    higressRelation: 'Higress 可与 Istio 服务网格集成，作为入口网关将外部流量导入网格，同时支持网格内的流量治理策略。',
    higressRelationEn: 'Higress can integrate with Istio service mesh, serving as an entry gateway to route external traffic into the mesh, while also supporting traffic governance policies within the mesh.',
    examples: [
      'Istio 是最流行的服务网格实现',
      'Sidecar 代理拦截所有进出流量',
      '服务网格提供零信任安全模型'
    ],
    examplesEn: [
      'Istio is the most popular service mesh implementation',
      'Sidecar proxies intercept all inbound and outbound traffic',
      'Service mesh provides a zero-trust security model'
    ],
    relatedTerms: ['envoy', 'istio', 'sidecar']
  },
  {
    id: 'istio',
    term: 'Istio',
    termEn: 'Istio Service Mesh',
    category: 'cloud-native',
    definition: 'Istio 是开源的服务网格平台，提供流量管理、安全、可观测性等能力。它由控制平面（istiod）和数据平面（Envoy 代理）组成，是企业级服务网格的首选方案。',
    definitionEn: 'Istio is an open-source service mesh platform providing capabilities such as traffic management, security, and observability. It consists of a control plane (istiod) and a data plane (Envoy proxies), making it the preferred solution for enterprise-grade service meshes.',
    higressRelation: 'Higress 基于 Istio 和 Envoy 构建，复用了 Istio 的控制平面能力，同时针对网关场景进行了深度优化和增强。',
    higressRelationEn: 'Higress is built on Istio and Envoy, reusing Istio\'s control plane capabilities while being deeply optimized and enhanced for gateway scenarios.',
    examples: [
      'Istio VirtualService 定义流量路由规则',
      'Istio 支持自动 mTLS 加密服务间通信',
      'Kiali 提供 Istio 的可视化管理界面'
    ],
    examplesEn: [
      'Istio VirtualService defines traffic routing rules',
      'Istio supports automatic mTLS encryption for inter-service communication',
      'Kiali provides a visual management interface for Istio'
    ],
    relatedTerms: ['service-mesh', 'envoy', 'kubernetes']
  },
  {
    id: 'wasm',
    term: 'Wasm (WebAssembly)',
    termEn: 'WebAssembly',
    category: 'cloud-native',
    definition: 'WebAssembly 是一种可移植的二进制指令格式，支持多种编程语言编译。在网关场景中，Wasm 插件可以安全、高效地扩展网关功能，支持热更新且通过沙箱隔离保障安全。',
    definitionEn: 'WebAssembly is a portable binary instruction format that supports compilation from multiple programming languages. In gateway scenarios, Wasm plugins can safely and efficiently extend gateway functionality, support hot updates, and ensure security through sandbox isolation.',
    higressRelation: 'Higress 主打 Wasm 插件生态，支持 Go、Rust、JavaScript 等语言开发插件，提供丰富的官方插件库，插件可热更新无需重启网关。',
    higressRelationEn: 'Higress focuses on the Wasm plugin ecosystem, supporting plugin development in languages such as Go, Rust, and JavaScript, providing a rich official plugin library, and plugins can be hot-updated without restarting the gateway.',
    examples: [
      'Wasm 插件运行在沙箱中保障内存安全',
      '使用 Go 语言编写自定义认证插件',
      'Wasm 插件支持流量无损的热更新'
    ],
    examplesEn: [
      'Wasm plugins run in sandboxes to ensure memory safety',
      'Write custom authentication plugins using Go',
      'Wasm plugins support lossless hot updates'
    ],
    relatedTerms: ['envoy', 'api-gateway', 'plugin'],
    configExample: `# Higress Wasm 插件配置示例
plugins:
  - name: custom-auth
    wasm:
      url: oci://registry/custom-auth:v1
    config:
      api_key_header: "X-API-Key"`,
    configExampleEn: `# Higress Wasm Plugin Configuration Example
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
    definitionEn: 'Nacos is Alibaba\'s open-source service discovery and configuration management platform, supporting dynamic service discovery, configuration management, DNS services, and other functions. It is a popular choice for registry centers and configuration centers in microservices architecture.',
    higressRelation: 'Higress 深度集成 Nacos，支持从 Nacos 自动同步服务实例，实现动态服务发现和配置热更新。',
    higressRelationEn: 'Higress deeply integrates with Nacos, supporting automatic synchronization of service instances from Nacos, enabling dynamic service discovery and hot configuration updates.',
    examples: [
      'Nacos 作为微服务的注册中心',
      '通过 Nacos 管理应用配置',
      'Nacos 支持多环境配置隔离'
    ],
    examplesEn: [
      'Nacos serves as the registry center for microservices',
      'Manage application configurations through Nacos',
      'Nacos supports multi-environment configuration isolation'
    ],
    relatedTerms: ['service-discovery', 'kubernetes', 'api-gateway']
  },
  {
    id: 'sidecar',
    term: 'Sidecar (边车)',
    termEn: 'Sidecar Pattern',
    category: 'cloud-native',
    definition: 'Sidecar 是一种部署模式，将辅助功能（如代理、日志收集）部署为与主应用容器并行运行的独立容器。这种模式实现了关注点分离，无需修改应用代码即可增强功能。',
    definitionEn: 'Sidecar is a deployment pattern that deploys auxiliary functions (such as proxies, log collection) as independent containers running in parallel with the main application container. This pattern achieves separation of concerns and can enhance functionality without modifying application code.',
    higressRelation: 'Higress 支持 Sidecar 和独立部署两种模式，可根据场景选择最适合的部署方式。',
    higressRelationEn: 'Higress supports both Sidecar and standalone deployment modes, allowing selection of the most suitable deployment method based on scenarios.',
    examples: [
      'Envoy Sidecar 处理服务间的所有网络通信',
      '日志收集 Sidecar 统一采集应用日志',
      'Sidecar 模式实现无侵入的能力增强'
    ],
    examplesEn: [
      'Envoy Sidecar handles all network communication between services',
      'Log collection Sidecar uniformly collects application logs',
      'Sidecar pattern enables non-invasive capability enhancement'
    ],
    relatedTerms: ['service-mesh', 'envoy', 'istio']
  },
  {
    id: 'control-plane',
    term: '控制平面',
    termEn: 'Control Plane',
    category: 'cloud-native',
    definition: '控制平面是分布式系统的"大脑"，负责管理配置、制定路由策略和监控数据平面的状态。它不处理实际的用户业务流量，而是向数据平面下发指令。',
    definitionEn: 'Control Plane is the "brain" of distributed systems, responsible for managing configurations, formulating routing policies, and monitoring the status of the data plane. It does not handle actual user business traffic but issues commands to the data plane.',
    higressRelation: 'Higress 的控制平面负责将 Kubernetes 的 Ingress/Gateway 配置转换为 Envoy 可理解的 xDS 配置，并将其分发到网关实例。',
    higressRelationEn: 'Higress\' control plane is responsible for converting Kubernetes Ingress/Gateway configurations into xDS configurations understandable by Envoy and distributing them to gateway instances.',
    examples: [
      'Kubernetes 的 API Server 是其控制平面的核心',
      'Istio 的 istiod 组件负责下发服务治理策略',
      'Higress 控制器监听 K8s 资源变化并更新网关配置'
    ],
    examplesEn: [
      'Kubernetes\' API Server is the core of its control plane',
      'Istio\'s istiod component is responsible for issuing service governance policies',
      'Higress controller monitors K8s resource changes and updates gateway configurations'
    ],
    relatedTerms: ['data-plane', 'envoy', 'kubernetes']
  },
  {
    id: 'data-plane',
    term: '数据平面',
    termEn: 'Data Plane',
    category: 'cloud-native',
    definition: '数据平面负责实际处理和转发业务流量。它根据控制平面下发的配置，执行路由、过滤、限流、加解密等具体操作。',
    definitionEn: 'Data Plane is responsible for actually processing and forwarding business traffic. It executes specific operations such as routing, filtering, rate limiting, encryption/decryption based on configurations issued by the control plane.',
    higressRelation: 'Higress 的数据平面是基于 Envoy 代理构建的，提供极致的请求处理性能和丰富的插件扩展能力。',
    higressRelationEn: 'Higress\' data plane is built on Envoy proxies, providing ultimate request processing performance and rich plugin extension capabilities.',
    examples: [
      'Envoy 代理在服务网格中充当数据平面',
      '路由器中的包转发逻辑属于数据平面',
      'Higress 的 Envoy 实例负责执行 Wasm 插件逻辑'
    ],
    examplesEn: [
      'Envoy proxies serve as the data plane in service meshes',
      'Packet forwarding logic in routers belongs to the data plane',
      'Higress\' Envoy instances are responsible for executing Wasm plugin logic'
    ],
    relatedTerms: ['control-plane', 'envoy', 'api-gateway']
  },
  {
    id: 'crd',
    term: 'CRD (自定义资源)',
    termEn: 'Custom Resource Definition',
    category: 'cloud-native',
    definition: 'CRD 是 Kubernetes 的扩展机制，允许用户定义自己的 API 对象类型。通过 CRD，你可以像使用原生的 Pod、Service 一样，使用 kubectl 管理自定义的业务资源。',
    definitionEn: 'CRD is Kubernetes\' extension mechanism that allows users to define their own API object types. Through CRD, you can manage custom business resources using kubectl just like native Pods and Services.',
    higressRelation: 'Higress 使用 CRD（如 McpBridge, WasmPlugin）来配置高级网关能力，实现了 Kubernetes 原生的管理体验。',
    higressRelationEn: 'Higress uses CRDs (such as McpBridge, WasmPlugin) to configure advanced gateway capabilities, achieving a Kubernetes-native management experience.',
    examples: [
      '通过 WasmPlugin CRD 在集群中动态启用网关插件',
      'McpBridge CRD 用于定义 MCP 服务器的连接配置',
      'Istio 使用 CRD 定义 VirtualService 和 DestinationRule'
    ],
    examplesEn: [
      'Dynamically enable gateway plugins in clusters through WasmPlugin CRD',
      'McpBridge CRD is used to define connection configurations for MCP servers',
      'Istio uses CRDs to define VirtualService and DestinationRule'
    ],
    relatedTerms: ['kubernetes', 'ingress', 'gateway-api']
  },

  // ==================== 安全认证 ====================
  {
    id: 'jwt',
    term: 'JWT (JSON Web Token)',
    termEn: 'JSON Web Token',
    category: 'security',
    definition: 'JWT 是一种紧凑的、URL 安全的令牌格式，用于在各方之间安全地传递信息。它由 Header、Payload、Signature 三部分组成，常用于身份认证和信息交换。',
    definitionEn: 'JWT is a compact, URL-safe token format used to securely transmit information between parties. It consists of three parts: Header, Payload, and Signature, commonly used for authentication and information exchange.',
    higressRelation: 'Higress 内置 JWT 认证插件，支持 JWT 的签发验证、Claims 提取、Token 刷新等功能，可在网关层统一实现认证。',
    higressRelationEn: 'Higress has a built-in JWT authentication plugin, supporting JWT issuance verification, claims extraction, token refresh, and other functions, enabling unified authentication at the gateway layer.',
    examples: [
      'JWT 包含用户 ID 和角色等声明信息',
      '使用 RS256 算法签名保证 Token 不被篡改',
      'JWT 的 exp 声明定义 Token 过期时间'
    ],
    examplesEn: [
      'JWT contains claim information such as user ID and roles',
      'Use RS256 algorithm signature to ensure tokens are not tampered with',
      'JWT\'s exp claim defines token expiration time'
    ],
    relatedTerms: ['oauth', 'oidc', 'api-key'],
    configExample: `# Higress JWT 认证配置
plugins:
  - name: jwt-auth
    config:
      issuer: "https://auth.example.com"
      jwks_uri: "https://auth.example.com/.well-known/jwks.json"`,
    configExampleEn: `# Higress JWT Authentication Configuration
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
    definitionEn: 'OAuth 2.0 is an industry-standard authorization framework that allows third-party applications to access user resources with user authorization without sharing user credentials. It defines various authorization flows such as authorization code, implicit, password, and client credentials.',
    higressRelation: 'Higress 支持 OAuth 2.0 Token 验证，可集成企业身份提供商，在网关层实现统一的授权控制。',
    higressRelationEn: 'Higress supports OAuth 2.0 token verification, can integrate with enterprise identity providers, and implements unified authorization control at the gateway layer.',
    examples: [
      '授权码模式适用于 Web 应用',
      '客户端凭证模式用于服务间认证',
      'OAuth 2.0 的 scope 控制访问权限范围'
    ],
    examplesEn: [
      'Authorization code mode is suitable for web applications',
      'Client credentials mode is used for inter-service authentication',
      'OAuth 2.0\'s scope controls access permission range'
    ],
    relatedTerms: ['jwt', 'oidc', 'api-gateway']
  },
  {
    id: 'oidc',
    term: 'OIDC (OpenID Connect)',
    termEn: 'OpenID Connect',
    category: 'security',
    definition: 'OIDC 是基于 OAuth 2.0 的身份认证协议，在 OAuth 授权流程上增加了身份层。它提供标准化的用户信息获取方式，是现代单点登录（SSO）的基础。',
    definitionEn: 'OIDC is an identity authentication protocol based on OAuth 2.0, adding an identity layer on top of the OAuth authorization flow. It provides a standardized way to obtain user information and is the foundation of modern Single Sign-On (SSO).',
    higressRelation: 'Higress 支持 OIDC 认证，可与 Keycloak、Auth0 等身份提供商集成，实现企业级单点登录。',
    higressRelationEn: 'Higress supports OIDC authentication, can integrate with identity providers such as Keycloak and Auth0, and implements enterprise-grade single sign-on.',
    examples: [
      'OIDC 的 ID Token 包含用户身份信息',
      'UserInfo Endpoint 提供用户详细资料',
      '企业通过 OIDC 实现员工统一登录'
    ],
    examplesEn: [
      'OIDC\'s ID Token contains user identity information',
      'UserInfo Endpoint provides user detailed information',
      'Enterprises achieve unified employee login through OIDC'
    ],
    relatedTerms: ['oauth', 'jwt', 'sso']
  },
  {
    id: 'mtls',
    term: 'mTLS (双向 TLS)',
    termEn: 'Mutual TLS',
    category: 'security',
    definition: 'mTLS 是双向的 TLS 认证，不仅服务器向客户端证明身份，客户端也向服务器证明身份。它提供了比单向 TLS 更强的安全保障，是零信任架构的重要组成。',
    definitionEn: 'mTLS is bidirectional TLS authentication where not only does the server prove its identity to the client, but the client also proves its identity to the server. It provides stronger security guarantees than one-way TLS and is an important component of zero-trust architecture.',
    higressRelation: 'Higress 支持 mTLS 配置，可验证客户端证书，实现服务间的双向认证，保障通信安全。',
    higressRelationEn: 'Higress supports mTLS configuration, can verify client certificates, implements mutual authentication between services, and ensures communication security.',
    examples: [
      'mTLS 确保只有持有有效证书的客户端才能访问',
      '服务网格使用 mTLS 加密服务间通信',
      '金融行业使用 mTLS 保护敏感 API'
    ],
    examplesEn: [
      'mTLS ensures only clients with valid certificates can access',
      'Service meshes use mTLS to encrypt inter-service communication',
      'Financial industry uses mTLS to protect sensitive APIs'
    ],
    relatedTerms: ['ssl-termination', 'zero-trust', 'service-mesh']
  },
  {
    id: 'waf',
    term: 'WAF (Web 应用防火墙)',
    termEn: 'Web Application Firewall',
    category: 'security',
    definition: 'WAF 是保护 Web 应用的安全防护系统，通过分析 HTTP 流量，识别和阻断 SQL 注入、XSS、CSRF 等常见 Web 攻击，是应用安全的重要防线。',
    definitionEn: 'WAF is a security protection system for web applications that analyzes HTTP traffic to identify and block common web attacks such as SQL injection, XSS, and CSRF. It is an important line of defense for application security.',
    higressRelation: 'Higress 内置 WAF 能力，支持 OWASP 核心规则集，可有效防护常见 Web 攻击，并支持自定义安全规则。',
    higressRelationEn: 'Higress has built-in WAF capabilities, supports OWASP core rule sets, can effectively protect against common web attacks, and supports custom security rules.',
    examples: [
      'WAF 检测并阻断 SQL 注入攻击',
      '防护 XSS 跨站脚本攻击',
      'WAF 规则可根据业务需求定制'
    ],
    examplesEn: [
      'WAF detects and blocks SQL injection attacks',
      'Protect against XSS cross-site scripting attacks',
      'WAF rules can be customized according to business needs'
    ],
    relatedTerms: ['api-gateway', 'security', 'ddos']
  },
  {
    id: 'api-key',
    term: 'API Key',
    termEn: 'API Key',
    category: 'security',
    definition: 'API Key 是一种简单的 API 认证方式，客户端在请求中携带预先分配的密钥来证明身份。它实现简单但安全性较低，适用于内部服务或低风险场景。',
    definitionEn: 'API Key is a simple API authentication method where clients carry pre-assigned keys in requests to prove identity. It is simple to implement but has lower security, suitable for internal services or low-risk scenarios.',
    higressRelation: 'Higress 支持 API Key 认证，可管理多个消费者的 Key，并基于 Key 实现限流、统计等功能。',
    higressRelationEn: 'Higress supports API Key authentication, can manage keys for multiple consumers, and implements rate limiting, statistics, and other functions based on keys.',
    examples: [
      'API Key 通常放在 Header 或查询参数中',
      '不同消费者分配不同的 API Key',
      'API Key 可设置过期时间和权限范围'
    ],
    examplesEn: [
      'API Key is usually placed in headers or query parameters',
      'Different consumers are assigned different API Keys',
      'API Key can set expiration time and permission scope'
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
          key: "sk-yyyyyyyyyyyy"`,
    configExampleEn: `# Higress API Key Authentication Configuration
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
    definitionEn: 'SSL Termination is a technique for decrypting HTTPS traffic at the gateway layer, where the gateway handles TLS handshake and encryption/decryption, and backend services only need to process plain HTTP requests. This simplifies certificate management for backend services while allowing the gateway to inspect and process request content.',
    higressRelation: 'Higress 支持 SSL 终止，可统一管理 TLS 证书，支持证书自动续期，并可对解密后的流量进行安全检查和路由。',
    higressRelationEn: 'Higress supports SSL termination, can uniformly manage TLS certificates, supports automatic certificate renewal, and can perform security checks and routing on decrypted traffic.',
    examples: [
      '在网关层统一管理所有域名的证书',
      'Let\'s Encrypt 证书自动续期',
      'SSL 终止后可进行内容级别的安全检查'
    ],
    examplesEn: [
      'Uniformly manage certificates for all domains at the gateway layer',
      'Let\'s Encrypt certificate automatic renewal',
      'Content-level security checks can be performed after SSL termination'
    ],
    relatedTerms: ['reverse-proxy', 'mtls', 'api-gateway']
  },
  {
    id: 'zero-trust',
    term: '零信任架构',
    termEn: 'Zero Trust Architecture',
    category: 'security',
    definition: '零信任是一种安全模型，核心原则是"永不信任，始终验证"。它假设网络内外都不安全，每个请求都需要验证身份和权限，最小化攻击面和横向移动风险。',
    definitionEn: 'Zero Trust is a security model with the core principle of "never trust, always verify". It assumes that both inside and outside the network are insecure, and every request needs to verify identity and permissions, minimizing attack surface and lateral movement risks.',
    higressRelation: 'Higress 支持构建零信任架构，通过 mTLS、JWT 验证、细粒度授权等能力，实现每个请求的身份验证和权限控制。',
    higressRelationEn: 'Higress supports building zero-trust architecture, implementing identity verification and permission control for every request through capabilities such as mTLS, JWT verification, and fine-grained authorization.',
    examples: [
      '即使内网请求也需要身份认证',
      '最小权限原则限制访问范围',
      '持续验证而非一次性信任'
    ],
    examplesEn: [
      'Even intranet requests require identity authentication',
      'Principle of least privilege limits access scope',
      'Continuous verification rather than one-time trust'
    ],
    relatedTerms: ['mtls', 'oidc', 'api-gateway']
  }
];

// 根据 locale 返回本地化的术语
function localizeTerm(term: GlossaryTerm, locale: string): GlossaryTerm {
  const isEn = locale === 'en';
  
  return {
    ...term,
    term: isEn ? term.termEn : term.term,
    definition: isEn ? (term.definitionEn || term.definition) : term.definition,
    higressRelation: isEn ? (term.higressRelationEn || term.higressRelation) : term.higressRelation,
    examples: isEn ? (term.examplesEn || term.examples) : term.examples,
    configExample: isEn ? (term.configExampleEn || term.configExample) : term.configExample,
  };
}

// 根据 locale 返回本地化的分类
function localizeCategory(category: GlossaryCategory, locale: string): GlossaryCategory {
  const isEn = locale === 'en';
  const source = isEn ? GLOSSARY_CATEGORIES_EN : GLOSSARY_CATEGORIES_ZH;
  const localized = source.find(c => c.id === category.id) || category;
  
  return {
    ...localized,
    name: isEn ? localized.nameEn : localized.name,
    description: isEn ? (localized.descriptionEn || localized.description) : localized.description,
  };
}

// 导出函数：根据 locale 获取分类
export function getGlossaryCategories(locale: string = 'root'): GlossaryCategory[] {
  const source = locale === 'en' ? GLOSSARY_CATEGORIES_EN : GLOSSARY_CATEGORIES_ZH;
  return source.map(cat => localizeCategory(cat, locale));
}

// 导出函数：根据 locale 获取术语
export function getGlossaryTerms(locale: string = 'root'): GlossaryTerm[] {
  return GLOSSARY_TERMS_ZH.map(term => localizeTerm(term, locale));
}

// 向后兼容：默认导出中文数据
export const GLOSSARY_CATEGORIES = GLOSSARY_CATEGORIES_ZH;
export const GLOSSARY_TERMS = GLOSSARY_TERMS_ZH;

// 辅助函数：按分类获取术语（支持 locale）
export function getTermsByCategory(category: string, locale: string = 'root'): GlossaryTerm[] {
  return getGlossaryTerms(locale).filter(term => term.category === category);
}

// 辅助函数：根据 ID 获取术语（支持 locale）
export function getTermById(id: string, locale: string = 'root'): GlossaryTerm | undefined {
  return getGlossaryTerms(locale).find(term => term.id === id);
}

// 辅助函数：获取相关术语详情（支持 locale）
export function getRelatedTerms(termId: string, locale: string = 'root'): GlossaryTerm[] {
  const term = getTermById(termId, locale);
  if (!term?.relatedTerms) return [];
  return term.relatedTerms
    .map(id => getTermById(id, locale))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

// 辅助函数：搜索术语（支持 locale）
export function searchTerms(query: string, locale: string = 'root'): GlossaryTerm[] {
  const lowerQuery = query.toLowerCase();
  const terms = getGlossaryTerms(locale);
  return terms.filter(term =>
    term.term.toLowerCase().includes(lowerQuery) ||
    term.termEn.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery)
  );
}
