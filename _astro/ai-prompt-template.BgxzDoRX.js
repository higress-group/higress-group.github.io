const e="latest/en/plugins/ai/api-dev/ai-prompt-template.md",t="docs",a="latest/en/plugins/ai/api-dev/ai-prompt-template",i=`## Function Description
AI prompt templates are used to quickly build similar types of AI requests.

## Execution Properties
Plugin Execution Phase: \`Default Phase\`  
Plugin Execution Priority: \`500\`  

## Configuration Description
| Name            | Data Type         | Required | Default Value | Description                       |
|-----------------|-------------------|----------|---------------|-----------------------------------|
| \`templates\`     | array of object   | Required | -             | Template settings                 |

Template object configuration description:  
| Name                  | Data Type         | Required | Default Value | Description                       |
|-----------------------|-------------------|----------|---------------|-----------------------------------|
| \`name\`                | string            | Required | -             | Template name                     |
| \`template.model\`     | string            | Required | -             | Model name                        |
| \`template.messages\`   | array of object   | Required | -             | Input for large model            |

Message object configuration description:  
| Name           | Data Type         | Required | Default Value | Description                       |
|----------------|-------------------|----------|---------------|-----------------------------------|
| \`role\`         | string            | Required | -             | Role                              |
| \`content\`      | string            | Required | -             | Message                           |

Configuration example:  
\`\`\`yaml
templates:
- name: "developer-chat"
  template:
    model: gpt-3.5-turbo
    messages:
    - role: system
      content: "You are a {{program}} expert, in {{language}} programming language."
    - role: user
      content: "Write me a {{program}} program."
\`\`\`

Example request body using the above configuration:  
\`\`\`json
{
  "template": "developer-chat",
  "properties": {
    "program": "quick sort",
    "language": "python"
  }
}
\`\`\`  
`,o={title:"AI Prompt Template",description:"AI Prompt Template Configuration Reference",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI Gateway","AI Prompt Template"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-dev/ai-prompt-template.md",rawData:void 0};export{r as _internal,i as body,t as collection,o as data,e as id,a as slug};
