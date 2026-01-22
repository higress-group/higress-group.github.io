export interface AIModel {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  configExample: string;
}

export const AI_MODELS: AIModel[] = [
  {
    id: "deepseek",
    name: "DeepSeek",
    type: "deepseek",
    description: "DeepSeek 是一家领先的 AI 技术公司，提供高性能、低成本的大型语言模型。其开源模型在多个基准测试中表现卓越。",
    features: ["极高性价比", "强大的代码生成能力", "支持 OpenAI 协议兼容", "低延迟响应"],
    configExample: `provider:
  type: deepseek
  apiTokens:
    - "YOUR_DEEPSEEK_API_TOKEN"`,
  },
  {
    id: "qwen",
    name: "通义千问 (Qwen)",
    type: "qwen",
    description: "通义千问是阿里云自主研发的超大规模语言模型，具备强大的语义理解、内容创作、多轮对话和逻辑推理能力。",
    features: ["原生中文支持优化", "多模态理解能力", "支持长文本输入", "内置联网搜索增强"],
    configExample: `provider:
  type: qwen
  apiTokens:
    - "YOUR_QWEN_API_TOKEN"
  modelMapping:
    "gpt-3": "qwen-turbo"
    "gpt-4": "qwen-max"`,
  },
  {
    id: "openai",
    name: "OpenAI (GPT-4o)",
    type: "openai",
    description: "OpenAI 是全球领先的人工智能研究实验室，其 GPT 系列模型定义了现代大语言模型的基础标准。",
    features: ["行业标准协议", "最广泛的生态支持", "强大的多模态交互", "极高的逻辑推理上限"],
    configExample: `provider:
  type: openai
  apiTokens:
    - "YOUR_OPENAI_API_TOKEN"`,
  },
  {
    id: "claude",
    name: "Anthropic Claude",
    type: "claude",
    description: "Claude 是由 Anthropic 开发的 AI 助手，以其更具安全性、更长上下文窗口和更自然的人机交互风格著称。",
    features: ["超长上下文支持", "更强的安全性过滤", "极佳的创意写作能力", "复杂的逻辑分析"],
    configExample: `provider:
  type: claude
  apiTokens:
    - "YOUR_CLAUDE_API_TOKEN"
  claudeVersion: "2023-06-01"`,
  },
  {
    id: "gemini",
    name: "Google Gemini",
    type: "gemini",
    description: "Gemini 是 Google DeepMind 开发的最强大、最通用的多模态模型，能够无缝理解文本、图像、音频和视频。",
    features: ["原生多模态设计", "Google 生态深度集成", "高效的推理速度", "多语言专家"],
    configExample: `provider:
  type: gemini
  apiTokens:
    - "YOUR_GEMINI_API_KEY"
  apiVersion: "v1beta"`,
  },
  {
    id: "moonshot",
    name: "月之暗面 (Kimi)",
    type: "moonshot",
    description: "月之暗面（Moonshot AI）专注于超长上下文处理，其 Kimi 智能助手在长文分析和总结领域处于领先地位。",
    features: ["百万级长文本支持", "优秀的文件处理能力", "中文语境深度优化", "智能搜索增强"],
    configExample: `provider:
  type: moonshot
  apiTokens:
    - "YOUR_MOONSHOT_API_TOKEN"
  modelMapping:
    "*": "moonshot-v1-32k"`,
  }
];

// 插件分类
export type PluginCategory = 'ai' | 'authentication' | 'security' | 'traffic' | 'transformation';

export interface Plugin {
  id: string;
  name: string;
  nameEn: string;
  category: PluginCategory;
  description: string;
  descriptionEn: string;
  docPath: string;
}

export const PLUGIN_CATEGORIES: { id: PluginCategory; labelZh: string; labelEn: string }[] = [
  { id: 'ai', labelZh: 'AI 插件', labelEn: 'AI Plugins' },
  { id: 'authentication', labelZh: '认证鉴权', labelEn: 'Authentication' },
  { id: 'security', labelZh: '安全防护', labelEn: 'Security' },
  { id: 'traffic', labelZh: '流量管理', labelEn: 'Traffic Management' },
  { id: 'transformation', labelZh: '请求转换', labelEn: 'Transformation' },
];

export const PLUGINS: Plugin[] = [
  // AI 插件
  {
    id: 'ai-proxy',
    name: 'AI 代理',
    nameEn: 'AI Proxy',
    category: 'ai',
    description: '统一的 AI 模型代理，支持多种大模型提供商，实现协议转换和负载均衡',
    descriptionEn: 'Unified AI model proxy supporting multiple LLM providers with protocol conversion and load balancing',
    docPath: 'plugins/ai/api-provider/ai-proxy',
  },
  {
    id: 'ai-cache',
    name: 'AI 缓存',
    nameEn: 'AI Cache',
    category: 'ai',
    description: 'LLM 结果缓存，支持语义化缓存和字符串匹配缓存，降低调用成本',
    descriptionEn: 'LLM response caching with semantic and string-matching support to reduce API costs',
    docPath: 'plugins/ai/api-provider/ai-cache',
  },
  {
    id: 'ai-token-ratelimit',
    name: 'AI Token 限流',
    nameEn: 'AI Token Rate Limit',
    category: 'ai',
    description: '基于 Token 的限流策略，精确控制 AI 调用成本和并发',
    descriptionEn: 'Token-based rate limiting for precise AI cost and concurrency control',
    docPath: 'plugins/ai/api-consumer/ai-token-ratelimit',
  },
  {
    id: 'ai-quota',
    name: 'AI 配额管理',
    nameEn: 'AI Quota',
    category: 'ai',
    description: '管理调用方的 AI 使用配额，支持多维度配额策略',
    descriptionEn: 'Manage AI usage quotas for consumers with multi-dimensional quota policies',
    docPath: 'plugins/ai/api-consumer/ai-quota',
  },
  {
    id: 'ai-data-masking',
    name: 'AI 数据脱敏',
    nameEn: 'AI Data Masking',
    category: 'ai',
    description: '对请求/返回中的敏感词进行拦截或替换，保护敏感数据不出域',
    descriptionEn: 'Intercept or replace sensitive data in requests/responses to protect privacy',
    docPath: 'plugins/ai/api-consumer/ai-data-masking',
  },
  {
    id: 'ai-prompt-decorator',
    name: 'AI 提示词装饰',
    nameEn: 'AI Prompt Decorator',
    category: 'ai',
    description: '在请求中自动添加系统提示词或前后缀，增强模型输出',
    descriptionEn: 'Automatically add system prompts or prefixes/suffixes to enhance model output',
    docPath: 'plugins/ai/api-provider/ai-prompt-decorator',
  },
  {
    id: 'ai-prompt-template',
    name: 'AI 提示词模版',
    nameEn: 'AI Prompt Template',
    category: 'ai',
    description: '使用预定义的提示词模版，简化 AI 应用开发',
    descriptionEn: 'Use predefined prompt templates to simplify AI application development',
    docPath: 'plugins/ai/api-dev/ai-prompt-template',
  },
  {
    id: 'ai-security-guard',
    name: 'AI 内容安全',
    nameEn: 'AI Security Guard',
    category: 'ai',
    description: '集成阿里云内容安全服务，对 AI 输入输出进行安全检测',
    descriptionEn: 'Integrate with Alibaba Cloud content security for AI input/output safety detection',
    docPath: 'plugins/ai/api-provider/ai-security-guard',
  },
  {
    id: 'ai-statistics',
    name: 'AI 可观测',
    nameEn: 'AI Statistics',
    category: 'ai',
    description: '收集 AI 调用的统计指标，支持 Token 用量、延迟等多维度监控',
    descriptionEn: 'Collect AI call metrics including token usage, latency and multi-dimensional monitoring',
    docPath: 'plugins/ai/api-o11y/ai-statistics',
  },
  {
    id: 'ai-agent',
    name: 'AI Agent',
    nameEn: 'AI Agent',
    category: 'ai',
    description: '支持 AI Agent 模式，实现工具调用和多轮对话编排',
    descriptionEn: 'Support AI Agent mode with tool calling and multi-turn conversation orchestration',
    docPath: 'plugins/ai/api-dev/ai-agent',
  },
  {
    id: 'ai-search',
    name: 'AI 搜索增强',
    nameEn: 'AI Search',
    category: 'ai',
    description: '为 AI 模型提供联网搜索能力，增强实时信息获取',
    descriptionEn: 'Provide web search capabilities for AI models to enhance real-time information retrieval',
    docPath: 'plugins/ai/api-dev/ai-search',
  },
  {
    id: 'ai-json-resp',
    name: 'AI JSON 格式化',
    nameEn: 'AI JSON Response',
    category: 'ai',
    description: '强制 AI 返回结构化 JSON 格式，便于下游解析处理',
    descriptionEn: 'Force AI to return structured JSON format for easier downstream parsing',
    docPath: 'plugins/ai/api-dev/ai-json-resp',
  },
  {
    id: 'ai-history',
    name: 'AI 历史对话',
    nameEn: 'AI History',
    category: 'ai',
    description: '自动管理多轮对话历史，支持上下文窗口控制',
    descriptionEn: 'Automatically manage multi-turn conversation history with context window control',
    docPath: 'plugins/ai/others/ai-history',
  },
  {
    id: 'ai-intent',
    name: 'AI 意图识别',
    nameEn: 'AI Intent',
    category: 'ai',
    description: '识别用户意图，实现智能路由和分流',
    descriptionEn: 'Identify user intent for intelligent routing and traffic splitting',
    docPath: 'plugins/ai/others/ai-intent',
  },
  {
    id: 'ai-rag',
    name: 'AI RAG',
    nameEn: 'AI RAG',
    category: 'ai',
    description: '检索增强生成，结合知识库增强 AI 回答准确性',
    descriptionEn: 'Retrieval-Augmented Generation to enhance AI answer accuracy with knowledge bases',
    docPath: 'plugins/ai/others/ai-rag',
  },
  {
    id: 'ai-transformer',
    name: 'AI 请求响应转换',
    nameEn: 'AI Transformer',
    category: 'ai',
    description: '灵活转换 AI 请求和响应格式，适配不同模型协议',
    descriptionEn: 'Flexibly transform AI request/response formats to adapt different model protocols',
    docPath: 'plugins/ai/others/ai-transformer',
  },
  {
    id: 'geo-ip',
    name: 'IP 地理位置',
    nameEn: 'Geo IP',
    category: 'ai',
    description: '解析客户端 IP 地理位置信息，支持基于地域的访问控制',
    descriptionEn: 'Parse client IP geolocation for region-based access control',
    docPath: 'plugins/ai/api-o11y/geo-ip',
  },

  // 认证鉴权插件
  {
    id: 'jwt-auth',
    name: 'JWT 认证',
    nameEn: 'JWT Auth',
    category: 'authentication',
    description: '基于 JWT 的认证鉴权，支持多调用方配置和细粒度权限控制',
    descriptionEn: 'JWT-based authentication with multi-consumer configuration and fine-grained access control',
    docPath: 'plugins/authentication/jwt-auth',
  },
  {
    id: 'key-auth',
    name: 'Key 认证',
    nameEn: 'Key Auth',
    category: 'authentication',
    description: '基于 API Key 的简单认证方式，支持多种密钥传递方式',
    descriptionEn: 'Simple API Key-based authentication supporting multiple key delivery methods',
    docPath: 'plugins/authentication/key-auth',
  },
  {
    id: 'basic-auth',
    name: 'Basic 认证',
    nameEn: 'Basic Auth',
    category: 'authentication',
    description: 'HTTP Basic 认证，通过用户名密码进行身份验证',
    descriptionEn: 'HTTP Basic authentication with username and password verification',
    docPath: 'plugins/authentication/basic-auth',
  },
  {
    id: 'hmac-auth',
    name: 'HMAC 认证',
    nameEn: 'HMAC Auth',
    category: 'authentication',
    description: '基于 HMAC 签名的认证方式，提供更高安全性',
    descriptionEn: 'HMAC signature-based authentication for enhanced security',
    docPath: 'plugins/authentication/hmac-auth',
  },
  {
    id: 'oauth',
    name: 'OAuth2 认证',
    nameEn: 'OAuth2',
    category: 'authentication',
    description: '支持 OAuth2.0 协议，实现第三方授权登录',
    descriptionEn: 'OAuth 2.0 protocol support for third-party authorization',
    docPath: 'plugins/authentication/oauth',
  },
  {
    id: 'oidc',
    name: 'OIDC 认证',
    nameEn: 'OIDC',
    category: 'authentication',
    description: 'OpenID Connect 认证，支持主流身份提供商集成',
    descriptionEn: 'OpenID Connect authentication with major identity provider integration',
    docPath: 'plugins/authentication/oidc',
  },
  {
    id: 'ext-auth',
    name: '外部认证',
    nameEn: 'External Auth',
    category: 'authentication',
    description: '将认证请求转发到外部服务，实现自定义认证逻辑',
    descriptionEn: 'Forward authentication requests to external services for custom auth logic',
    docPath: 'plugins/authentication/ext-auth',
  },
  {
    id: 'opa',
    name: 'OPA 策略控制',
    nameEn: 'OPA',
    category: 'authentication',
    description: '基于 Open Policy Agent 的策略控制，实现灵活的访问决策',
    descriptionEn: 'Open Policy Agent-based policy control for flexible access decisions',
    docPath: 'plugins/authentication/opa',
  },
  {
    id: 'hmac-auth-apisix',
    name: 'APISIX HMAC 认证',
    nameEn: 'APISIX HMAC Auth',
    category: 'authentication',
    description: '兼容 APISIX 的 HMAC 认证格式，便于迁移',
    descriptionEn: 'APISIX-compatible HMAC authentication format for easy migration',
    docPath: 'plugins/authentication/hmac-auth-apisix',
  },

  // 安全防护插件
  {
    id: 'waf',
    name: 'WAF 防护',
    nameEn: 'WAF',
    category: 'security',
    description: '基于 ModSecurity 的 Web 应用防火墙，支持 OWASP CRS 规则',
    descriptionEn: 'ModSecurity-based WAF with OWASP CRS rules support',
    docPath: 'plugins/security/waf',
  },
  {
    id: 'cors',
    name: '跨域资源共享',
    nameEn: 'CORS',
    category: 'security',
    description: '配置 CORS 响应头，控制跨域资源访问策略',
    descriptionEn: 'Configure CORS response headers to control cross-origin resource access',
    docPath: 'plugins/security/cors',
  },
  {
    id: 'ip-restriction',
    name: 'IP 访问限制',
    nameEn: 'IP Restriction',
    category: 'security',
    description: '基于 IP 地址的黑白名单控制，限制或允许特定 IP 访问',
    descriptionEn: 'IP-based blacklist/whitelist control to restrict or allow specific IP access',
    docPath: 'plugins/security/ip-restriction',
  },
  {
    id: 'bot-detect',
    name: 'Bot 拦截',
    nameEn: 'Bot Detect',
    category: 'security',
    description: '检测并拦截机器人流量，保护服务免受爬虫攻击',
    descriptionEn: 'Detect and block bot traffic to protect services from crawler attacks',
    docPath: 'plugins/security/bot-detect',
  },
  {
    id: 'request-block',
    name: '请求屏蔽',
    nameEn: 'Request Block',
    category: 'security',
    description: '基于规则屏蔽特定请求，支持 URL、Header 等多维度匹配',
    descriptionEn: 'Block specific requests based on rules with URL, Header and multi-dimensional matching',
    docPath: 'plugins/security/request-block',
  },
  {
    id: 'replay-protection',
    name: '防重放攻击',
    nameEn: 'Replay Protection',
    category: 'security',
    description: '防止请求重放攻击，保护 API 安全',
    descriptionEn: 'Prevent request replay attacks to protect API security',
    docPath: 'plugins/security/replay-protection',
  },

  // 流量管理插件
  {
    id: 'cluster-key-rate-limit',
    name: '集群限流',
    nameEn: 'Cluster Rate Limit',
    category: 'traffic',
    description: '基于 Key 的分布式集群限流，支持 Redis 存储',
    descriptionEn: 'Key-based distributed cluster rate limiting with Redis storage',
    docPath: 'plugins/traffic/cluster-key-rate-limit',
  },
  {
    id: 'key-rate-limit',
    name: '本地限流',
    nameEn: 'Local Rate Limit',
    category: 'traffic',
    description: '基于 Key 的本地限流，无需外部依赖',
    descriptionEn: 'Key-based local rate limiting without external dependencies',
    docPath: 'plugins/traffic/key-rate-limit',
  },
  {
    id: 'traffic-tag',
    name: '流量染色',
    nameEn: 'Traffic Tag',
    category: 'traffic',
    description: '为流量添加标签，支持灰度发布和流量分组',
    descriptionEn: 'Add tags to traffic for canary releases and traffic grouping',
    docPath: 'plugins/traffic/traffic-tag',
  },
  {
    id: 'request-validation',
    name: '请求校验',
    nameEn: 'Request Validation',
    category: 'traffic',
    description: '校验请求格式和参数，确保请求符合预期规范',
    descriptionEn: 'Validate request format and parameters to ensure compliance with expected specifications',
    docPath: 'plugins/traffic/request-validation',
  },

  // 请求转换插件
  {
    id: 'transformer',
    name: '请求响应转换',
    nameEn: 'Transformer',
    category: 'transformation',
    description: '灵活转换请求和响应内容，支持添加、删除、修改 Header 和 Body',
    descriptionEn: 'Flexibly transform request/response content with Header and Body modifications',
    docPath: 'plugins/transformation/transformer',
  },
  {
    id: 'de-graphql',
    name: 'DeGraphQL',
    nameEn: 'DeGraphQL',
    category: 'transformation',
    description: '将 RESTful 请求转换为 GraphQL 查询',
    descriptionEn: 'Convert RESTful requests to GraphQL queries',
    docPath: 'plugins/transformation/de-graphql',
  },
  {
    id: 'custom-response',
    name: '自定义应答',
    nameEn: 'Custom Response',
    category: 'transformation',
    description: '自定义返回响应内容，可用于 Mock 测试或静态响应',
    descriptionEn: 'Customize response content for mock testing or static responses',
    docPath: 'plugins/transformation/custom-response',
  },
  {
    id: 'frontend-gray',
    name: '前端灰度',
    nameEn: 'Frontend Gray',
    category: 'transformation',
    description: '前端资源灰度发布，支持多版本并行部署',
    descriptionEn: 'Frontend resource canary release with multi-version parallel deployment',
    docPath: 'plugins/transformation/frontend-gray',
  },
  {
    id: 'cache-control',
    name: '浏览器缓存控制',
    nameEn: 'Cache Control',
    category: 'transformation',
    description: '设置浏览器缓存相关响应头，优化资源加载性能',
    descriptionEn: 'Set browser cache response headers to optimize resource loading performance',
    docPath: 'plugins/transformation/cache-control',
  },
];
