---
title: "Nacos Python SDK 强势来袭，动态管理大模型 Prompt！"
description: "Nacos Python SDK 强势来袭，动态管理大模型 Prompt！"
date: "2024-09-27"
category: "ecosystem"
keywords: ["Higress"]
authors: "CH3CHO"
---

> 作者：聪言


**<font style="color:rgba(0, 0, 0, 0.9);">亲爱的开发者们：</font>**

<font style="color:rgba(0, 0, 0, 0.9);">我们激动地宣布，Nacos Python SDK——nacos-sdk-python1.0.0 稳定版正式发布啦！Nacos 从 0.8.0 版本开始就一直参与 Python 生态建设，努力作为 Python 生态中分布式微服务发现和配置管理的解决方案一直往前演进。目前随着 AI 领域的发展，Nacos 社区的 Python 开发者用户越来越多，因此这次我们迭代了 Python 的 GA 稳定版本，对不少历史问题做了修复以及易用性层面的各项兼容优化，帮助大家可以更好的在大模型时代落地自己的业务场景。</font>

## **<font style="color:rgb(46, 75, 227);">一、核心亮点</font>**
**<font style="color:rgba(0, 0, 0, 0.9);">全面兼容性：</font>**<font style="color:rgba(0, 0, 0, 0.9);">支持 Python 2.7、3.6 及 3.7 版本，确保广泛的项目适配性。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">无缝对接 Nacos：</font>**<font style="color:rgba(0, 0, 0, 0.9);">兼容 Nacos 1.x 以及 Nacos 2.x with http protocol 版本，无论是现有项目升级还是新项目集成，都能平滑过渡。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">便捷安装：</font>**<font style="color:rgba(0, 0, 0, 0.9);">通过 pip 一键安装，快速上手，命令行输入 pip install nacos-sdk-python 即可开启服务注册、配置管理之旅。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">简洁 API 设计：</font>**<font style="color:rgba(0, 0, 0, 0.9);">无论是获取配置、监听变更，还是服务注册与发现，API 接口设计直观易用，极大降低了学习成本。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">安全认证：</font>**<font style="color:rgba(0, 0, 0, 0.9);">支持用户名密码加密认证模式，通过 AK/SK 机制确保交互的安全性。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">灵活配置：</font>**<font style="color:rgba(0, 0, 0, 0.9);">丰富的额外选项配置，包括日志轮转配置、自定义超时时间、长轮询间隔、后台心跳保活等，满足不同场景下的定制需求。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">本地快照与故障转移：</font>**<font style="color:rgba(0, 0, 0, 0.9);">自动存储配置快照，即使服务器不可达，也能从本地恢复配置，保障服务连续性。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">强大的监听与通知机制：</font>**<font style="color:rgba(0, 0, 0, 0.9);">轻松添加监听器，实时响应配置变化，确保服务配置的即时更新。</font>

**<font style="color:rgba(0, 0, 0, 0.9);">详尽 API 参考：</font>**<font style="color:rgba(0, 0, 0, 0.9);">详尽的 API 文档，涵盖从基础配置获取到高级服务管理的所有操作，助力您高效开发。</font>

## **<font style="color:rgb(46, 75, 227);">二、快速开始</font>**

**<font style="color:rgb(46, 75, 227);">Flask 篇 —— 简洁而优雅的配置之旅</font>**

<font style="color:rgba(0, 0, 0, 0.9);"></font><font style="color:rgba(0, 0, 0, 0.9);">第一个例子选 Flask 的原因是因为它是一个轻量级的 Python Web 框架，简单易用，特别适合快速开发小型应用和原型。在 Flask 的世界里，保持轻量级是王道，在 Nacos 社区也经常能看到有用户在做 Flask 和 Nacos 的集成，使用 nacos-sdk-python，您可以很轻松地搞定 Flask 的服务注册与发现，以及配置的动态化管理，下面是一个完整的例子：</font>

```plain
# 导入Flask库，用于构建web应用from flask import Flask
# 导入NacosClient，用于与Nacos服务器交互，实现配置管理和服务发现功能from nacos import NacosClient
# 初始化Flask应用实例app = Flask(__name__)
# 设置Nacos服务器地址，请替换为实际的Nacos服务器地址SERVER_ADDRESSES = "Your nacos server address"
# 设置Nacos命名空间ID，请替换为实际的命名空间IDNAMESPACE = "Your nacos namespace"
# 设置Nacos用户名和密码，用于认证访问Nacos服务器USERNAME = 'Your user name'PASSWORD = 'Your password'
client = NacosClient(server_addresses=SERVER_ADDRESSES, namespace=NAMESPACE, username=USERNAME, password=PASSWORD,                     log_level='INFO')

# 定义路由，访问根路径'/'时返回的消息，展示来自Nacos的配置信息@app.route('/')def hello_world():    # 使用flask的config对象获取名为"config"的配置项，展示配置内容    return f'Hello, World! Config from Nacos: {app.config.get("config")}'

def init():    # 服务注册：让Flask应用在启动时自动注册到Nacos，实现服务发现的自动化。heartbeat_interval可以调整后台心跳间隔时间，默认为5秒。    client.add_naming_instance(service_name='my-flask-service', ip='localhost', port=5000, heartbeat_interval=5)
    # 设置Nacos中配置数据的数据ID和分组，默认分组为'DEFAULT_GROUP'    data_id = 'test'    group = 'DEFAULT_GROUP'
    # 从Nacos获取配置，并更新到Flask应用的config对象中，以便在应用中使用这些配置    app.config.update(config=client.get_config(data_id=data_id, group=group))
    # 添加配置监听器，当Nacos中的配置发生变化时，自动更新Flask应用的config对象    client.add_config_watcher(data_id=data_id, group=group,                              cb=lambda cfg: app.config.update(config=cfg['content']))

if __name__ == '__main__':    init()    app.run()
```

<font style="color:rgba(0, 0, 0, 0.9);">在这个简短的 Flask 应用中，我们首先初始化了 Nacos 客户端，随后从 Nacos 中获取配置来动态调整我们的“欢迎信息”，以及将当前的服务实例注册到了 Nacos 服务端，使得其他服务也能轻易发现并与其通信。</font>

![](/img/1728551151316.png)

![](/img/1728551151501.png)

**<font style="color:rgb(46, 75, 227);">FastAPI 篇 —— 模型服务的配置管理</font>**

<font style="color:rgba(0, 0, 0, 0.9);"></font><font style="color:rgba(0, 0, 0, 0.9);">FastAPI 也是一套很优秀的 Python Web 框架，如果你追求高性能、异步编程和类型安全，FastAPI 可能是个更好的选择。他基于 Python 3.6+ 类型提示，利用 Pydantic 进行数据验证，Starlette 和 asyncio 实现异步操作，使得 RESTful API 开发既快速又简单。</font>

<font style="color:rgba(0, 0, 0, 0.9);">同时我们注意到，AI 社区也会基于 FastAPI 来构建模型服务，经常会碰到以下问题：</font>

+ <font style="color:rgba(0, 0, 0, 0.9);">模型服务如何暴露给其他服务调用，包括类似 Java 等跨语言服务的调用</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">模型服务节点的调用负载如何均衡</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">模型服务的容灾 Failover 能力如何实现</font>
+ <font style="color:rgba(0, 0, 0, 0.9);">AI 模型领域的业务配置如何管理</font>

<font style="color:rgba(0, 0, 0, 0.9);">如果你有以上的困惑，借助 nacos-sdk-python 的能力实现 AI 模型服务跟 nacos 的完美融合，服务注册发现与配置管理也会变得前所未有的简洁高效。我们来看下面的一个简单例子吧：</font>

```plain
# 导入FastAPI库，用于构建API服务from fastapi import FastAPIfrom nacos import NacosClient
app = FastAPI()
# 设置Nacos服务器地址，请替换为实际的Nacos服务器地址SERVER_ADDRESSES = "Your nacos server address"
# 设置Nacos命名空间ID，请替换为实际的命名空间IDNAMESPACE = "Your nacos namespace"
# 设置Nacos用户名和密码，用于认证访问Nacos服务器USERNAME = 'Your user name'PASSWORD = 'Your password'
client = NacosClient(server_addresses=SERVER_ADDRESSES, namespace=NAMESPACE, username=USERNAME, password=PASSWORD,                     log_level='INFO')

# 定义一个异步函数，在FastAPI应用启动时执行@app.on_event("startup")async def startup_event():    # 在启动时创建一个任务来初始化配置    asyncio.create_task(init())

# 通过NacosClient获取配置，并存储在应用的状态(state)中，以便后续使用async def load_config(data_id, group):    app.state = {'config_data': client.get_config(data_id=data_id, group=group)}

# 异步函数，用于初始化应用所需的各种配置和监听器async def init():    data_id = 'test'    group = 'DEFAULT_GROUP'    await load_config(data_id, group)
    def on_config_change(cfg):        # 当Nacos中的配置发生变化时，更新应用状态中的配置数据        app.state = {'config_data': cfg['content']}
    client.add_config_watcher(data_id, group, cb=on_config_change)    client.add_naming_instance(service_name='my-flask-service', ip='localhost', port=8000, heartbeat_interval=5)
# 定义一个GET请求的路由，返回简单的欢迎信息及当前从Nacos获取的配置数据@app.get("/")def hello_world():    return f'Hello, World! Config from Nacos: {app.state["config_data"]}'

if __name__ == '__main__':    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

![](/img/1728551151653.png)

<font style="color:rgba(0, 0, 0, 0.9);">通过这个例子，你也可以继续加工，尝试把你的 AI 算法模型包装成服务对外暴露调用，同时一些算法模型参数通过 nacos 来作为配置化动态管理。</font>

**<font style="color:rgb(46, 75, 227);">AI 大模型篇 —— AI 场景的配置管理加速器</font>**

<font style="color:rgba(0, 0, 0, 0.9);">为什么这里需要把 AI 大模型配置场景拎出来单独讲，是因为这在 AI 领域十分重要，因为算法往往需要根据不同的应用场景或性能要求频繁调整配置，以下是一些常见的 AI 算法动态配置场景，大家还可以继续自由发挥想象空间：</font>

1. **<font style="color:rgba(0, 0, 0, 0.9);">模型版本管理：</font>**<font style="color:rgba(0, 0, 0, 0.9);">在持续迭代和优化模型的过程中，可以通过 Nacos 动态切换不同版本的模型配置。例如，在 A/B 测试新旧模型效果时，可以快速调整配置指向新的模型版本，而无需修改代码或重启服务。</font>
2. **<font style="color:rgba(0, 0, 0, 0.9);">Dynamic Prompt Template：</font>**<font style="color:rgba(0, 0, 0, 0.9);">开发者通常会使用 Prompt Template 来与大型模型交互，实际的开发和测试过程中，他们会不断调整模板，以测试与大模型的交互效果。</font>
3. **<font style="color:rgba(0, 0, 0, 0.9);">参数调整：</font>**<font style="color:rgba(0, 0, 0, 0.9);">AI 算法的性能很大程度上依赖于超参数的选择。利用 Nacos，可以动态调整学习率、批量大小、正则化参数等，从而在运行时优化模型表现，实现快速迭代调优。</font>
4. **<font style="color:rgba(0, 0, 0, 0.9);">数据源配置：</font>**<font style="color:rgba(0, 0, 0, 0.9);">AI 模型训练和推理可能涉及多个数据源。通过 Nacos 管理数据源的 URL、访问密钥等信息，可以根据需要轻松切换数据源，或者应对数据源的变动，提高系统的灵活性和稳定性。</font>
5. **<font style="color:rgba(0, 0, 0, 0.9);">特征选择与权重调整：</font>**<font style="color:rgba(0, 0, 0, 0.9);">在复杂模型中，特征的选择及其权重对模型性能至关重要。Nacos 可以帮助动态调整哪些特征被启用、特征的预处理方式以及特征的重要性权重，从而快速响应业务需求变化或市场环境变化。</font>
6. **<font style="color:rgba(0, 0, 0, 0.9);">推理服务资源分配：</font>**<font style="color:rgba(0, 0, 0, 0.9);">对于资源密集型的 AI 推理任务，可以根据实时负载情况动态调整资源分配策略，比如 GPU/CPU 资源的分配比例、并发请求处理数限制等，以优化服务性能和成本效率。</font>
7. **<font style="color:rgba(0, 0, 0, 0.9);">算法策略选择：</font>**<font style="color:rgba(0, 0, 0, 0.9);">在一些应用场景中，可能会部署多种算法策略（如推荐系统中的基于内容的推荐、协同过滤等）。通过 Nacos，可以根据用户行为分析或业务需求动态选择最合适的算法策略进行部署。</font>
8. **<font style="color:rgba(0, 0, 0, 0.9);">安全与隐私配置：</font>**<font style="color:rgba(0, 0, 0, 0.9);">对于敏感应用，模型的使用可能需要遵循严格的安全和隐私政策。通过 Nacos，可以动态管理加密算法、数据脱敏规则、访问控制列表等配置，确保 AI 服务的合规性和安全性。</font>

<font style="color:rgba(0, 0, 0, 0.9);">基于动态 Promot 调整这个 case，这次我们来结合阿里云通义百炼实践一下，来看看 Nacos 可以在其中流程中扮演什么样的角色</font>

```plain
# 定义一个名为NacosConfigManager的类，用于管理Nacos配置class NacosConfigManager:    def __init__(self):        # 初始化方法，创建一个空字典用于缓存配置信息        self.config_cache = {}
    def get_config(self, data_id, group="DEFAULT_GROUP", need_watch=False):        """        获取配置，如果缓存中没有则从Nacos获取并缓存。        如果need_watch为True，则为该配置添加监听器以便在配置变化时自动更新。        """        if data_id not in self.config_cache:            config = client.get_config(data_id=data_id, group=group)            self.config_cache[data_id] = config
        if need_watch:            client.add_config_watcher(data_id, group, cb=self.on_config_change)        return self.config_cache[data_id]
    def on_config_change(self, cfg):        self.config_cache[cfg['data_id']] = cfg['content']

config_manager = NacosConfigManager()
# 初始化异步函数async def init():    group = 'DEFAULT_GROUP'    config_manager.get_config(promot_data_id, group, True)    config_manager.get_config(app_id_data_id, group)    config_manager.get_config(app_key_id, group)
@app.get("/")def hello_world():    # 通过百炼Application.call方法来调用模型，传递从Nacos获取的配置参数    response = Application.call(app_id=config_manager.get_config(app_id_data_id),                                prompt=config_manager.get_config(promot_data_id),                                api_key=config_manager.get_config(app_key_id),                                )    if response.status_code != HTTPStatus.OK:        print('request_id=%s, code=%s, message=%s\n' % (response.request_id, response.status_code, response.message))    else:        print('request_id=%s\n output=%s\n usage=%s\n' % (response.request_id, response.output, response.usage))
    return response.output.text
```

<font style="color:rgba(0, 0, 0, 0.9);">可以看到在这个例子中，我们把 APP_KEY、APP_ID 这类参数都放在了 Nacos 中存储，同时经常需要调整的 promot 模板利用 Nacos 的动态配置下发能力来实现运营实时调整更新，非常容易实现类似 ABTest 的效果。</font>

<font style="color:rgba(0, 0, 0, 0.9);">这里我们模拟了一个电商客户助手的场景，通过 Prompt 模板的配置下发，来动态调整小助手回复客户的话术，而这一切完全不需要你重新修改或者重新部署模型就可以办到。下面的对比是否有觉得效果更拟人呢？</font>

<font style="color:rgba(0, 0, 0, 0.9);">调优前：</font>

![](/img/1728551151831.png)

<font style="color:rgba(0, 0, 0, 0.9);">调优后：</font>

![](/img/1728551152012.png)

## **<font style="color:rgb(46, 75, 227);">三、加入我们</font>**<font style="color:rgb(51, 51, 51);">  
</font>

<font style="color:rgba(0, 0, 0, 0.9);">最后，我们诚邀每一位 Python 开发者体验 nacos-sdk-python，并期待您的宝贵反馈。无论是功能建议还是遇到的问题，都请不吝告知。让我们携手推动 Python 微服务生态的发展，共创更加高效、稳定的开发环境。  
</font>

<font style="color:rgba(0, 0, 0, 0.9);">立即行动吧，探索 Nacos 带来的无限可能，让您的微服务架构更加健壮、灵活！</font>

<font style="color:rgba(0, 0, 0, 0.9);">加个预告：我们的 Nacos Python SDK 适配 Nacos 2.x Grpc 模式工作也在进行中，不久的将来就能跟大家正式亮相！</font>

**<font style="color:rgba(0, 0, 0, 0.9);">GitHub 仓库：</font>**

<font style="color:rgba(0, 0, 0, 0.9);">访问 nacos-sdk-python，查看文档、报告问题或贡献代码，共同构建更好的 Nacos Python 社区：</font>_<u><font style="color:rgb(0, 122, 170);">https://github.com/nacos-group/nacos-sdk-python</font></u>_
