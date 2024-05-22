/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Overview',
      collapsible: false,
      items: ['overview/what-is-higress', 'overview/roadmap', 'overview/faq', 'overview/terminology'],
    },
    {
      type: 'category',
      label: 'User Doc',
      collapsible: false,
      items: [
        'user/quickstart',
        {
          type: 'category',
          label: 'Reference',
          items: ['user/configmap', 'user/annotation', 'user/annotation-use-case', 'user/configurations', 'user/mcp-bridge', 'user/dubbo-http2rpc', 'user/wasm-image-spec'],
        },
        {
          type: 'category',
          label: 'Plugins',
          items: [
            {
              type: 'category',
              label: 'AI Plugins',
              items: ['plugins/ai/ai-proxy', 'plugins/ai/ai-cache', 'plugins/ai/ai-prompt-decorator', 'plugins/ai/ai-prompt-template', 'plugins/ai/ai-rag', 'plugins/ai/ai-statistics', 'plugins/ai/ai-token-ratelimit', 'plugins/ai/ai-transformer', 'plugins/ai/ai-security-guard'],
            },
            {
              type: 'category',
              label: 'Authentication Plugins',
              items: ['plugins/authentication/basic-auth', 'plugins/authentication/key-auth', 'plugins/authentication/oidc', 'plugins/authentication/jwt-auth', 'plugins/authentication/hmac-auth']
            },
            {
              "type": "category",
              "label": "Transformation Plugins",
              "items": ['plugins/transformation/custom-response', 'plugins/transformation/transformer', 'plugins/transformation/cache-control', 'plugins/transformation/de-graphql']
            },
            {
              "type": "category",
              "label": "Traffic Plugins",
              "items": ['plugins/traffic/request-block', 'plugins/traffic/key-rate-limit', 'plugins/traffic/cluster-key-rate-limit', 'plugins/traffic/ip-restriction', 'plugins/traffic/request-validation']
            },
            {
              "type": "category",
              "label": "Security Plugins",
              "items": ['plugins/security/bot-detect', 'plugins/security/waf', 'plugins/security/cors']
            },
            'plugins/intro',
            'plugins/custom'
          ],
        },
        {
          type: 'category',
          label: 'Best Practices',
          items: ['user/wasm-go', 'user/kruise-rollout', 'user/nacos-route', 'user/spring-cloud', 'user/dubbo', 'user/prometheus', 'user/waf'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Ops',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Deploy',
          items: ['ops/hgctl','ops/deploy-by-helm', 'ops/deploy-by-docker-compose'],
        },
        {
          type: 'category',
          label: 'How-tos',
          items: ['ops/how-tos/grpc-upstream','ops/how-tos/https-upstream', 'ops/how-tos/tcp-route', 'ops/how-tos/gateway-ports'],
        },
        'ops/upgrade',
        'ops/log'
      ],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsible: false,
      items: ['dev/code', 'dev/architecture', 'dev/CustomResourceDefinition', 'dev/e2e-debug', 'dev/console-dev'],
    },
  ],
  developers: [
    {
      type: 'category',
      label: 'developer',
      collapsible: false,
      items: ['developers/developers_dev'],
    },
    {
      type: 'category',
      label: 'developer guide',
      collapsible: false,
      items: [
        'developers/contributor-guide/new-contributor-guide_dev',
        'developers/contributor-guide/test-coverage-guide_dev',
        'developers/contributor-guide/reporting-security-issues_dev',
        'developers/guide_dev',
      ],
    },
    {
      type: 'category',
      label: 'committer guide',
      collapsible: false,
      items: [
        'developers/committer-guide/label-an-issue-guide_dev',
        'developers/committer-guide/website-guide_dev',
        'developers/committer-guide/release-guide_dev',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'contributor activity',
    //   items: ['developers/developers_dev'],
    // },
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',t st
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
