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
