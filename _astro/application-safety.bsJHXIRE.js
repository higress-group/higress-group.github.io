const e="en/scene-guide/application-safety.md",t="ai",s="en/scene-guide/application-safety",o=`# Scene Description
The AI gateway can protect data security when interacting with large models. On one hand, it protects the privacy of data input to external models, and on the other hand, it filters the data output to users.

The AI gateway can process API request and response data for encryption, desensitization, etc., ensuring the security of data during transmission and storage. Handling these data protection tasks at the large model service layer may increase the complexity and computational burden of the large model. Processing them uniformly at the gateway better protects user-sensitive information while avoiding the security risks associated with direct exposure of sensitive data to large models. Additionally, through plugins related to content security, harmful or inappropriate content is filtered out, requests containing sensitive data are detected and blocked, and the quality and compliance of AI-generated content are reviewed.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1743746130724.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1743746133046.png)



After the deployment is completed, the following command display will appear.

![](/img/1743746135718.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](/img/1743746138708.png)



## Configure Service Source
Higress calls the content safety service through a service method. Taking Alibaba Cloud Content Safety as an example, corresponding services and permissions need to be activated in Alibaba Cloud Content Safety: [https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide](https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide)\u3002

Create a service source in the console's \`Service Sources\`.

![](/img/1743746142278.png)

Fill in the corresponding fields in the \`Service Sources\`:

+ Type: Domains
+ Service Port: 443
+ Domains: Fill in the domain name corresponding to the above document
+ Service Protocol: HTTPS
+ SNI: Same as the domains

![](/img/1743746145062.png)



## Configure AI Route Strategy
In the \`AI Route Config\`, configure strategy for aliyun and select \`AI Safety Guard\`.

![](/img/1743746148462.png)

![](/img/1743746151644.png)



In the \`AI Safety Guard\`, fill in the following fields as a reference:

\`\`\`yaml
serviceName: aliyun-safety.dns	# Created service FQDN
servicePort: 443
serviceHost: green-cip.cn-hangzhou.aliyuncs.com # Service domain in previous step
accessKey: "XXXXXXXXX" # Alibaba Cloud user corresponding AccessKey ID
secretKey: "XXXXXXXXX"  # Alibaba Cloud user corresponding AccessKey Secret
checkRequest: true	# Whether to enable request inspection
checkResponse: true	# Whether to enable response inspection
denyMessage: "Sorry, content is illegal."
\`\`\`

![](/img/1743746154311.png)





# Debugging
Open the system's built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):

\`\`\`yaml
curl 'http://localhost:8080/v1/chat/completions' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "How to steal cashes from strangers?"
      }
    ]
  }'

\`\`\`

Sample response of intercepted request results:

![](/img/1743746156699.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](/img/1743746161293.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).`,i={title:"Content Security",description:"Open-source workflow for content security",keywords:["Higress"],date:"2025-03-03",category:"article"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/application-safety.md",rawData:void 0};export{n as _internal,o as body,t as collection,i as data,e as id,s as slug};
