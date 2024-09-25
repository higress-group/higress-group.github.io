import{c,__tla as o}from"./astro-component.CwRucF1h.js";import{r as v,m as r,u as E,__tla as F}from"./constant.BLgJB4oM.js";import{__tla as y}from"./astro/assets-service.Dd3mQuiC.js";let e,i,a,n,d,l,t,x=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u4E00\u4E2A\u53EF\u5B9A\u5236\u5316\u7684 API AI Agent\uFF0C\u652F\u6301\u914D\u7F6E http method \u7C7B\u578B\u4E3A GET \u4E0E POST \u7684 API\uFF0C\u652F\u6301\u591A\u8F6E\u5BF9\u8BDD\uFF0C\u652F\u6301\u6D41\u5F0F\u4E0E\u975E\u6D41\u5F0F\u6A21\u5F0F\u3002
agent\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A
<img src="https://img.alicdn.com/imgextra/i1/O1CN01PGSDW31WQfEPm173u_!!6000000002783-0-tps-2733-1473.jpg" alt="ai-agent" referrerpolicy="no-referrer"></p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">200</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<h3 id="\u57FA\u672C\u914D\u7F6E">\u57FA\u672C\u914D\u7F6E</h3>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">llm</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E AI \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F</td></tr><tr><td><code dir="auto">apis</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u5916\u90E8 API \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F</td></tr><tr><td><code dir="auto">promptTemplate</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E Agent ReAct \u6A21\u677F\u7684\u4FE1\u606F</td></tr></tbody></table>
<p><code dir="auto">llm</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>











































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">apiKey</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5927\u6A21\u578B\u670D\u52A1\u540D</td></tr><tr><td><code dir="auto">servicePort</code></td><td>int</td><td>\u5FC5\u586B</td><td>-</td><td>\u5927\u6A21\u578B\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">domain</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u57DF\u540D</td></tr><tr><td><code dir="auto">path</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u8DEF\u5F84</td></tr><tr><td><code dir="auto">model</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u6A21\u578B\u540D</td></tr><tr><td><code dir="auto">maxIterations</code></td><td>int</td><td>\u5FC5\u586B</td><td>15</td><td>\u7ED3\u675F\u6267\u884C\u5FAA\u73AF\u524D\u7684\u6700\u5927\u6B65\u6570</td></tr><tr><td><code dir="auto">maxExecutionTime</code></td><td>int</td><td>\u5FC5\u586B</td><td>50000</td><td>\u6BCF\u4E00\u6B21\u8BF7\u6C42\u5927\u6A21\u578B\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td><code dir="auto">maxTokens</code></td><td>int</td><td>\u5FC5\u586B</td><td>1000</td><td>\u6BCF\u4E00\u6B21\u8BF7\u6C42\u5927\u6A21\u578B\u7684\u8F93\u51FAtoken\u9650\u5236</td></tr></tbody></table>
<p><code dir="auto">apis</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">apiProvider</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>\u5916\u90E8 API \u670D\u52A1\u4FE1\u606F</td></tr><tr><td><code dir="auto">api</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5DE5\u5177\u7684 OpenAPI \u6587\u6863</td></tr></tbody></table>
<p><code dir="auto">apiProvider</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">apiKey</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002</td></tr><tr><td><code dir="auto">maxExecutionTime</code></td><td>int</td><td>\u975E\u5FC5\u586B</td><td>50000</td><td>\u6BCF\u4E00\u6B21\u8BF7\u6C42API\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002</td></tr><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u540D</td></tr><tr><td><code dir="auto">servicePort</code></td><td>int</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">domain</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BBF\u8BBF\u95EE\u5916\u90E8 API \u65F6\u57DF\u540D</td></tr></tbody></table>
<p><code dir="auto">apiKey</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">in</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>none</td><td>\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u662F\u653E\u5728 header \u4E2D\u8FD8\u662F\u653E\u5728 query \u4E2D\uFF0C\u5982\u679CAPI\u6CA1\u6709\u4EE4\u724C\uFF0C\u586Bnone\u3002</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u7684\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">value</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u7684\u503C\u3002</td></tr></tbody></table>
<p><code dir="auto">promptTemplate</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">language</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>EN</td><td>Agent ReAct \u6A21\u677F\u7684\u8BED\u8A00\u7C7B\u578B\uFF0C\u5305\u62EC CH \u548C EN \u4E24\u79CD</td></tr><tr><td><code dir="auto">chTemplate</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Agent ReAct \u4E2D\u6587\u6A21\u677F</td></tr><tr><td><code dir="auto">enTemplate</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Agent ReAct \u82F1\u6587\u6A21\u677F</td></tr></tbody></table>
<p><code dir="auto">chTemplate</code>\u548C<code dir="auto">enTemplate</code>\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">question</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Agent ReAct \u6A21\u677F\u7684 question \u90E8\u5206</td></tr><tr><td><code dir="auto">thought1</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Agent ReAct \u6A21\u677F\u7684 thought1 \u90E8\u5206</td></tr><tr><td><code dir="auto">observation</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Agent ReAct \u6A21\u677F\u7684 observation \u90E8\u5206</td></tr><tr><td><code dir="auto">thought2</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>Agent ReAct \u6A21\u677F\u7684 thought2 \u90E8\u5206</td></tr></tbody></table>
<h2 id="\u7528\u6CD5\u793A\u4F8B">\u7528\u6CD5\u793A\u4F8B</h2>
<p><strong>\u914D\u7F6E\u4FE1\u606F</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">llm</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/compatible-mode/v1/chat/completions</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max-0403</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">maxIterations</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">promptTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">language</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">CH</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apiProvider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">restapi.amap.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">geo.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">api</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">openapi: 3.1.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">info:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">title: \u9AD8\u5FB7\u5730\u56FE</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">description: \u83B7\u53D6 POI \u7684\u76F8\u5173\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">version: v1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">servers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- url: https://restapi.amap.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/v5/place/text:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">get:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">description: \u6839\u636EPOI\u540D\u79F0\uFF0C\u83B7\u5F97POI\u7684\u7ECF\u7EAC\u5EA6\u5750\u6807</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: get_location_coordinate</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">parameters:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: keywords</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: POI\u540D\u79F0\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: region</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: POI\u6240\u5728\u7684\u533A\u57DF\u540D\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">deprecated: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/v5/place/around:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">get:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">description: \u641C\u7D22\u7ED9\u5B9A\u5750\u6807\u9644\u8FD1\u7684POI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: search_nearby_pois</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">parameters:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: keywords</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: \u76EE\u6807POI\u7684\u5173\u952E\u5B57</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: location</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: \u4E2D\u5FC3\u70B9\u7684\u7ECF\u5EA6\u548C\u7EAC\u5EA6\uFF0C\u7528\u9017\u53F7\u9694\u5F00</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">deprecated: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">components:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">schemas: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apiProvider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.seniverse.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">seniverse.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">xxxxxxxxxxxxxxx</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">api</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">openapi: 3.1.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">info:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">title: \u5FC3\u77E5\u5929\u6C14</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">description: \u83B7\u53D6 \u5929\u6C14\u9884\u529E\u76F8\u5173\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">version: v1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">servers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- url: https://api.seniverse.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/v3/weather/now.json:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">get:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">description: \u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u5B9E\u51B5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: get_weather_now</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">parameters:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: location</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: \u6240\u67E5\u8BE2\u7684\u57CE\u5E02</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: language</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: \u8FD4\u56DE\u5929\u6C14\u67E5\u8BE2\u7ED3\u679C\u6240\u4F7F\u7528\u7684\u8BED\u8A00</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">default: zh-Hans</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">enum:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- zh-Hans</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- en</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- ja</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">- name: unit</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">in: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">description: \u8868\u793A\u6E29\u5EA6\u7684\u7684\u5355\u4F4D\uFF0C\u6709\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u4E24\u79CD</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">default: c</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">enum:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- c</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">- f</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">deprecated: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">components:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">schemas: {}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apiProvider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"header"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"DeepL-Auth-Key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"73xxxxxxxxxxxxxxx:fx"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api-free.deepl.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"deepl.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">api</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">openapi: 3.1.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">info:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">title: DeepL API Documentation</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">version: v1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">servers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- url: https://api-free.deepl.com/v2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">paths:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">/translate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">post:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">summary: Request Translation</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">operationId: translateText</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">requestBody:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">            </span></span><span style="--0:#9ECBFF">content:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">application/json:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">schema:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">type: object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">required:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">- text</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">- target_lang</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">properties:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">text:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">description: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">up to 50 times in a single request. Translations are returned in the same order as they are requested.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">type: array</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">maxItems: 50</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">items:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">example: Hello, World!</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">target_lang:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">description: The language into which the text should be translated.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">enum:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- BG</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- CS</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- DA</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- DE</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- EL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- EN-GB</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- EN-US</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ES</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- FI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- FR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- HU</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ID</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- IT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- JA</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- KO</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- LT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- LV</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- NB</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- NL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- PL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- PT-BR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- PT-PT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- RO</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- RU</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- SK</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- SL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- SV</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- TR</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- UK</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ZH</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">- ZH-HANS</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">example: DE</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">components:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">schemas: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="llm:\x7F  apiKey: xxxxxxxxxxxxxxxxxx\x7F  domain: dashscope.aliyuncs.com\x7F  serviceName: dashscope.dns\x7F  servicePort: 443\x7F  path: /compatible-mode/v1/chat/completions\x7F  model: qwen-max-0403\x7F  maxIterations: 2\x7FpromptTemplate:\x7F  language: CH\x7Fapis:\x7F- apiProvider:\x7F    domain: restapi.amap.com\x7F    serviceName: geo.dns\x7F    servicePort: 80\x7F    apiKey:\x7F      in: query\x7F      name: key\x7F      value: xxxxxxxxxxxxxxx\x7F  api: |\x7F    openapi: 3.1.0\x7F    info:\x7F      title: \u9AD8\u5FB7\u5730\u56FE\x7F      description: \u83B7\u53D6 POI \u7684\u76F8\u5173\u4FE1\u606F\x7F      version: v1.0.0\x7F    servers:\x7F      - url: https://restapi.amap.com\x7F    paths:\x7F      /v5/place/text:\x7F        get:\x7F          description: \u6839\u636EPOI\u540D\u79F0\uFF0C\u83B7\u5F97POI\u7684\u7ECF\u7EAC\u5EA6\u5750\u6807\x7F          operationId: get_location_coordinate\x7F          parameters:\x7F            - name: keywords\x7F              in: query\x7F              description: POI\u540D\u79F0\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587\x7F              required: true\x7F              schema:\x7F                type: string\x7F            - name: region\x7F              in: query\x7F              description: POI\u6240\u5728\u7684\u533A\u57DF\u540D\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587\x7F              required: true\x7F              schema:\x7F                type: string\x7F          deprecated: false\x7F      /v5/place/around:\x7F        get:\x7F          description: \u641C\u7D22\u7ED9\u5B9A\u5750\u6807\u9644\u8FD1\u7684POI\x7F          operationId: search_nearby_pois\x7F          parameters:\x7F            - name: keywords\x7F              in: query\x7F              description: \u76EE\u6807POI\u7684\u5173\u952E\u5B57\x7F              required: true\x7F              schema:\x7F                type: string\x7F            - name: location\x7F              in: query\x7F              description: \u4E2D\u5FC3\u70B9\u7684\u7ECF\u5EA6\u548C\u7EAC\u5EA6\uFF0C\u7528\u9017\u53F7\u9694\u5F00\x7F              required: true\x7F              schema:\x7F                type: string\x7F          deprecated: false\x7F    components:\x7F      schemas: {}\x7F- apiProvider:\x7F    domain: api.seniverse.com\x7F    serviceName: seniverse.dns\x7F    servicePort: 80\x7F    apiKey:\x7F      in: query\x7F      name: key\x7F      value: xxxxxxxxxxxxxxx\x7F  api: |\x7F    openapi: 3.1.0\x7F    info:\x7F      title: \u5FC3\u77E5\u5929\u6C14\x7F      description: \u83B7\u53D6 \u5929\u6C14\u9884\u529E\u76F8\u5173\u4FE1\u606F\x7F      version: v1.0.0\x7F    servers:\x7F      - url: https://api.seniverse.com\x7F    paths:\x7F      /v3/weather/now.json:\x7F        get:\x7F          description: \u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u5B9E\u51B5\x7F          operationId: get_weather_now\x7F          parameters:\x7F            - name: location\x7F              in: query\x7F              description: \u6240\u67E5\u8BE2\u7684\u57CE\u5E02\x7F              required: true\x7F              schema:\x7F                type: string\x7F            - name: language\x7F              in: query\x7F              description: \u8FD4\u56DE\u5929\u6C14\u67E5\u8BE2\u7ED3\u679C\u6240\u4F7F\u7528\u7684\u8BED\u8A00\x7F              required: true\x7F              schema:\x7F                type: string\x7F                default: zh-Hans\x7F                enum:\x7F                  - zh-Hans\x7F                  - en\x7F                  - ja\x7F            - name: unit\x7F              in: query\x7F              description: \u8868\u793A\u6E29\u5EA6\u7684\u7684\u5355\u4F4D\uFF0C\u6709\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u4E24\u79CD\x7F              required: true\x7F              schema:\x7F                type: string\x7F                default: c\x7F                enum:\x7F                  - c\x7F                  - f\x7F          deprecated: false\x7F    components:\x7F      schemas: {}\x7F- apiProvider:\x7F    apiKey:\x7F      in: &#x22;header&#x22;\x7F      name: &#x22;DeepL-Auth-Key&#x22;\x7F      value: &#x22;73xxxxxxxxxxxxxxx:fx&#x22;\x7F    domain: &#x22;api-free.deepl.com&#x22;\x7F    serviceName: &#x22;deepl.dns&#x22;\x7F    servicePort: 443\x7F  api: |\x7F    openapi: 3.1.0\x7F    info:\x7F      title: DeepL API Documentation\x7F      description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.\x7F      version: v1.0.0\x7F    servers:\x7F      - url: https://api-free.deepl.com/v2\x7F    paths:\x7F      /translate:\x7F        post:\x7F          summary: Request Translation\x7F          operationId: translateText\x7F          requestBody:\x7F            required: true\x7F            content:\x7F              application/json:\x7F                schema:\x7F                  type: object\x7F                  required:\x7F                    - text\x7F                    - target_lang\x7F                  properties:\x7F                    text:\x7F                      description: |\x7F                        Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified\x7F                        up to 50 times in a single request. Translations are returned in the same order as they are requested.\x7F                      type: array\x7F                      maxItems: 50\x7F                      items:\x7F                        type: string\x7F                        example: Hello, World!\x7F                    target_lang:\x7F                      description: The language into which the text should be translated.\x7F                      type: string\x7F                      enum:\x7F                        - BG\x7F                        - CS\x7F                        - DA\x7F                        - DE\x7F                        - EL\x7F                        - EN-GB\x7F                        - EN-US\x7F                        - ES\x7F                        - ET\x7F                        - FI\x7F                        - FR\x7F                        - HU\x7F                        - ID\x7F                        - IT\x7F                        - JA\x7F                        - KO\x7F                        - LT\x7F                        - LV\x7F                        - NB\x7F                        - NL\x7F                        - PL\x7F                        - PT-BR\x7F                        - PT-PT\x7F                        - RO\x7F                        - RU\x7F                        - SK\x7F                        - SL\x7F                        - SV\x7F                        - TR\x7F                        - UK\x7F                        - ZH\x7F                        - ZH-HANS\x7F                      example: DE\x7F    components:\x7F      schemas: {}"><div></div></button></div></figure></div>
<p>\u672C\u793A\u4F8B\u914D\u7F6E\u4E86\u4E09\u4E2A\u670D\u52A1\uFF0C\u6F14\u793A\u4E86get\u4E0Epost\u4E24\u79CD\u7C7B\u578B\u7684\u5DE5\u5177\u3002\u5176\u4E2Dget\u7C7B\u578B\u7684\u5DE5\u5177\u5305\u62EC\u9AD8\u5FB7\u5730\u56FE\u4E0E\u5FC3\u77E5\u5929\u6C14\uFF0Cpost\u7C7B\u578B\u7684\u5DE5\u5177\u662Fdeepl\u7FFB\u8BD1\u3002\u4E09\u4E2A\u670D\u52A1\u90FD\u9700\u8981\u73B0\u5728Higress\u7684\u670D\u52A1\u4E2D\u4EE5DNS\u57DF\u540D\u7684\u65B9\u5F0F\u914D\u7F6E\u597D\uFF0C\u5E76\u786E\u4FDD\u5065\u5EB7\u3002
\u9AD8\u5FB7\u5730\u56FE\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5DE5\u5177\uFF0C\u5206\u522B\u662F\u83B7\u53D6\u6307\u5B9A\u5730\u70B9\u7684\u5750\u6807\uFF0C\u4EE5\u53CA\u641C\u7D22\u5750\u6807\u9644\u8FD1\u7684\u611F\u5174\u8DA3\u7684\u5730\u70B9\u3002\u6587\u6863\uFF1A<a href="https://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch</a>
\u5FC3\u77E5\u5929\u6C14\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\uFF0C\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5B9E\u65F6\u5929\u6C14\u60C5\u51B5\uFF0C\u652F\u6301\u4E2D\u6587\uFF0C\u82F1\u6587\uFF0C\u65E5\u8BED\u8FD4\u56DE\uFF0C\u4EE5\u53CA\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u7684\u8868\u793A\u3002\u6587\u6863\uFF1A<a href="https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://seniverse.yuque.com/hyper_data/api_v3/nyiu3t</a>
deepl\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\uFF0C\u7528\u4E8E\u7FFB\u8BD1\u7ED9\u5B9A\u7684\u53E5\u5B50\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u3002\u3002\u6587\u6863\uFF1A<a href="https://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true</a></p>
<p>\u4EE5\u4E0B\u4E3A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u4E3A\u4E86\u6548\u679C\u7684\u7A33\u5B9A\u6027\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u5927\u6A21\u578B\u7248\u672C\u7684\u7A33\u5B9A\uFF0C\u672C\u4F8B\u5B50\u4E2D\u4F7F\u7528\u7684qwen-max-0403\uFF1A</p>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6211\u60F3\u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\u559D\u5496\u5561\uFF0C\u7ED9\u6211\u63A8\u8350\u51E0\u4E2A"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;\u6211\u60F3\u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\u559D\u5496\u5561\uFF0C\u7ED9\u6211\u63A8\u8350\u51E0\u4E2A&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"139487e7-96a0-9b13-91b4-290fb79ac992"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" \u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u5496\u5561\u5E97\uFF1A</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u88571299\u53F7\u946B\u76DB\u5927\u53A62\u53F7\u697C\u5927\u5802\uFF1B</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E0E\u9896\u79C0\u8DEF\u4EA4\u53C9\u53E3\u897F\u535760\u7C73\uFF1B</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9896\u79C0\u8DEF1267\u53F7\uFF1B</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E09\u5E86\u9F50\u76DB\u5E7F\u573A4\u53F7\u697C\u5E95\u5546\uFF1B</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9AD8\u65B0\u533A\u65B0\u6CFA\u5927\u88571166\u53F7\u7F8E\u83B2\u5E7F\u573AL117\u53F7\uFF1B\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u9009\u9879\u3002\u5E0C\u671B\u8FD9\u4E9B\u5EFA\u8BAE\u5BF9\u60A8\u6709\u6240\u5E2E\u52A9\uFF01"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723172296</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">886</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">50</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">936</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;139487e7-96a0-9b13-91b4-290fb79ac992&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; \u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u5496\u5561\u5E97\uFF1A\\n1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u88571299\u53F7\u946B\u76DB\u5927\u53A62\u53F7\u697C\u5927\u5802\uFF1B\\n2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E0E\u9896\u79C0\u8DEF\u4EA4\u53C9\u53E3\u897F\u535760\u7C73\uFF1B\\n3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9896\u79C0\u8DEF1267\u53F7\uFF1B\\n4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E09\u5E86\u9F50\u76DB\u5E7F\u573A4\u53F7\u697C\u5E95\u5546\uFF1B\\n5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9AD8\u65B0\u533A\u65B0\u6CFA\u5927\u88571166\u53F7\u7F8E\u83B2\u5E7F\u573AL117\u53F7\uFF1B\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u9009\u9879\u3002\u5E0C\u671B\u8FD9\u4E9B\u5EFA\u8BAE\u5BF9\u60A8\u6709\u6240\u5E2E\u52A9\uFF01&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723172296,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:886,&#x22;completion_tokens&#x22;:50,&#x22;total_tokens&#x22;:936}}"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"ebd6ea91-8e38-9e14-9a5b-90178d2edea4"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" \u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u72B6\u51B5\u4E3A\u9634\u5929\uFF0C\u6E29\u5EA6\u4E3A31\u2103\u3002\u6B64\u4FE1\u606F\u6700\u540E\u66F4\u65B0\u4E8E2024\u5E748\u67089\u65E515\u65F612\u5206\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09\u3002"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723187991</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">890</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">56</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">946</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;ebd6ea91-8e38-9e14-9a5b-90178d2edea4&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; \u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u72B6\u51B5\u4E3A\u9634\u5929\uFF0C\u6E29\u5EA6\u4E3A31\u2103\u3002\u6B64\u4FE1\u606F\u6700\u540E\u66F4\u65B0\u4E8E2024\u5E748\u67089\u65E515\u65F612\u5206\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09\u3002&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723187991,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:890,&#x22;completion_tokens&#x22;:56,&#x22;total_tokens&#x22;:946}}"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role": "user","content": "\u6D4E\u5357\u7684\u5929\u6C14\u5982\u4F55\uFF1F"},{ "role": "assistant","content": "\u76EE\u524D\uFF0C\u6D4E\u5357\u5E02\u7684\u5929\u6C14\u4E3A\u591A\u4E91\uFF0C\u6C14\u6E29\u4E3A24\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E521\u65F650\u520614\u79D2\u3002"},{"role": "user","content": "\u5317\u4EAC\u5462\uFF1F"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;: &#x22;user&#x22;,&#x22;content&#x22;: &#x22;\u6D4E\u5357\u7684\u5929\u6C14\u5982\u4F55\uFF1F&#x22;},{ &#x22;role&#x22;: &#x22;assistant&#x22;,&#x22;content&#x22;: &#x22;\u76EE\u524D\uFF0C\u6D4E\u5357\u5E02\u7684\u5929\u6C14\u4E3A\u591A\u4E91\uFF0C\u6C14\u6E29\u4E3A24\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E521\u65F650\u520614\u79D2\u3002&#x22;},{&#x22;role&#x22;: &#x22;user&#x22;,&#x22;content&#x22;: &#x22;\u5317\u4EAC\u5462\uFF1F&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"ebd6ea91-8e38-9e14-9a5b-90178d2edea4"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"\u76EE\u524D\uFF0C\u5317\u4EAC\u5E02\u7684\u5929\u6C14\u4E3A\u6674\u6717\uFF0C\u6C14\u6E29\u4E3A19\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E522\u65F617\u520640\u79D2\u3002"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723187991</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">999</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">76</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1075</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;ebd6ea91-8e38-9e14-9a5b-90178d2edea4&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22;\u76EE\u524D\uFF0C\u5317\u4EAC\u5E02\u7684\u5929\u6C14\u4E3A\u6674\u6717\uFF0C\u6C14\u6E29\u4E3A19\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E522\u65F617\u520640\u79D2\u3002&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723187991,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:999,&#x22;completion_tokens&#x22;:76,&#x22;total_tokens&#x22;:1075}}"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F\u7528\u534E\u6C0F\u5EA6\u8868\u793A\uFF0C\u7528\u65E5\u8BED\u56DE\u7B54"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F\u7528\u534E\u6C0F\u5EA6\u8868\u793A\uFF0C\u7528\u65E5\u8BED\u56DE\u7B54&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"ebd6ea91-8e38-9e14-9a5b-90178d2edea4"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" \u6D4E\u5357\u5E02\u306E\u73FE\u5728\u306E\u5929\u6C17\u306F\u96E8\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1723187991</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">890</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">56</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">946</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;ebd6ea91-8e38-9e14-9a5b-90178d2edea4&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; \u6D4E\u5357\u5E02\u306E\u73FE\u5728\u306E\u5929\u6C17\u306F\u96E8\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1723187991,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:890,&#x22;completion_tokens&#x22;:56,&#x22;total_tokens&#x22;:946}}"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://&#x3C;\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Accept: application/json, text/event-stream'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">--data-raw </span><span style="--0:#9ECBFF">'{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u5E2E\u6211\u7528\u5FB7\u8BED\u7FFB\u8BD1\u4EE5\u4E0B\u53E5\u5B50\uFF1A\u4E5D\u5934\u86C7\u4E07\u5C81!"}],"presence_penalty":0,"temperature":0,"top_p":0}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions&#x27; \\\x7F-H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F--data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[{&#x22;role&#x22;:&#x22;user&#x22;,&#x22;content&#x22;:&#x22;\u5E2E\u6211\u7528\u5FB7\u8BED\u7FFB\u8BD1\u4EE5\u4E0B\u53E5\u5B50\uFF1A\u4E5D\u5934\u86C7\u4E07\u5C81!&#x22;}],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0,&#x22;top_p&#x22;:0}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u54CD\u5E94\u793A\u4F8B</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"65dcf12c-61ff-9e68-bffa-44fc9e6070d5"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">:[{</span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">" \u201C\u4E5D\u5934\u86C7\u4E07\u5C81!\u201D\u7684\u5FB7\u8BED\u7FFB\u8BD1\u4E3A\u201CHoch lebe Hydra!\u201D\u3002"</span><span style="--0:#E1E4E8">},</span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"stop"</span><span style="--0:#E1E4E8">}],</span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">1724043865</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"qwen-max-0403"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">:</span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">:{</span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">908</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">52</span><span style="--0:#E1E4E8">,</span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">960</span><span style="--0:#E1E4E8">}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{&#x22;id&#x22;:&#x22;65dcf12c-61ff-9e68-bffa-44fc9e6070d5&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22; \u201C\u4E5D\u5934\u86C7\u4E07\u5C81!\u201D\u7684\u5FB7\u8BED\u7FFB\u8BD1\u4E3A\u201CHoch lebe Hydra!\u201D\u3002&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1724043865,&#x22;model&#x22;:&#x22;qwen-max-0403&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:908,&#x22;completion_tokens&#x22;:52,&#x22;total_tokens&#x22;:960}}"><div></div></button></div></figure></div>`,n={title:"AI Agent",keywords:["AI\u7F51\u5173","AI Agent"],description:"AI Agent\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-agent.md",t=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E
\u4E00\u4E2A\u53EF\u5B9A\u5236\u5316\u7684 API AI Agent\uFF0C\u652F\u6301\u914D\u7F6E http method \u7C7B\u578B\u4E3A GET \u4E0E POST \u7684 API\uFF0C\u652F\u6301\u591A\u8F6E\u5BF9\u8BDD\uFF0C\u652F\u6301\u6D41\u5F0F\u4E0E\u975E\u6D41\u5F0F\u6A21\u5F0F\u3002
agent\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A
![ai-agent](https://img.alicdn.com/imgextra/i1/O1CN01PGSDW31WQfEPm173u_!!6000000002783-0-tps-2733-1473.jpg)


## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`200\`

## \u914D\u7F6E\u5B57\u6BB5

### \u57FA\u672C\u914D\u7F6E
| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                       |
|------------------|-----------|---------|--------|----------------------------|
| \`llm\`            | object    | \u5FC5\u586B    | -      | \u914D\u7F6E AI \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F     |
| \`apis\`           | object    | \u5FC5\u586B    | -      | \u914D\u7F6E\u5916\u90E8 API \u670D\u52A1\u63D0\u4F9B\u5546\u7684\u4FE1\u606F |
| \`promptTemplate\` | object    | \u975E\u5FC5\u586B  | -      | \u914D\u7F6E Agent ReAct \u6A21\u677F\u7684\u4FE1\u606F  |

\`llm\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0               | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|--------------------|-----------|---------|--------|-----------------------------------|
| \`apiKey\`           | string    | \u5FC5\u586B    | -      | \u7528\u4E8E\u5728\u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002|
| \`serviceName\`      | string    | \u5FC5\u586B    | -      | \u5927\u6A21\u578B\u670D\u52A1\u540D                        |
| \`servicePort\`      | int       | \u5FC5\u586B    | -      | \u5927\u6A21\u578B\u670D\u52A1\u7AEF\u53E3                      |
| \`domain\`           | string    | \u5FC5\u586B    | -      | \u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u57DF\u540D                 |
| \`path\`             | string    | \u5FC5\u586B    | -      | \u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u8DEF\u5F84                 |
| \`model\`            | string    | \u5FC5\u586B    | -      | \u8BBF\u95EE\u5927\u6A21\u578B\u670D\u52A1\u65F6\u6A21\u578B\u540D               |
| \`maxIterations\`    | int       | \u5FC5\u586B    | 15     | \u7ED3\u675F\u6267\u884C\u5FAA\u73AF\u524D\u7684\u6700\u5927\u6B65\u6570             |
| \`maxExecutionTime\` | int       | \u5FC5\u586B    | 50000  | \u6BCF\u4E00\u6B21\u8BF7\u6C42\u5927\u6A21\u578B\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2  |
| \`maxTokens\`        | int       | \u5FC5\u586B    | 1000   | \u6BCF\u4E00\u6B21\u8BF7\u6C42\u5927\u6A21\u578B\u7684\u8F93\u51FAtoken\u9650\u5236      |

\`apis\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                               |
|-----------------|-----------|---------|--------|-----------------------------------|
| \`apiProvider\`   | object    | \u5FC5\u586B     | -     | \u5916\u90E8 API \u670D\u52A1\u4FE1\u606F                   |
| \`api\`           | string    | \u5FC5\u586B     | -     | \u5DE5\u5177\u7684 OpenAPI \u6587\u6863                 |

\`apiProvider\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                      |
|-------------------|-----------|---------|--------|------------------------------------------|
| \`apiKey\`          | object    | \u975E\u5FC5\u586B   | -     | \u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u3002    |
| \`maxExecutionTime\`| int       | \u975E\u5FC5\u586B   | 50000 | \u6BCF\u4E00\u6B21\u8BF7\u6C42API\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002          |
| \`serviceName\`     | string    | \u5FC5\u586B     | -     | \u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u540D                        |
| \`servicePort\`     | int       | \u5FC5\u586B     | -     | \u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u7AEF\u53E3                      |
| \`domain\`          | string    | \u5FC5\u586B     | -     | \u8BBF\u8BBF\u95EE\u5916\u90E8 API \u65F6\u57DF\u540D                      |

\`apiKey\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0              | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42    | \u9ED8\u8BA4\u503C  | \u63CF\u8FF0                                                                          |
|-------------------|---------|------------|--------|-----------------------------------------------------------------------------------------|
| \`in\`              | string  | \u975E\u5FC5\u586B     | none   | \u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u662F\u653E\u5728 header \u4E2D\u8FD8\u662F\u653E\u5728 query \u4E2D\uFF0C\u5982\u679CAPI\u6CA1\u6709\u4EE4\u724C\uFF0C\u586Bnone\u3002
| \`name\`            | string  | \u975E\u5FC5\u586B     | -      | \u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u7684\u540D\u79F0\u3002 |
| \`value\`           | string  | \u975E\u5FC5\u586B     | -      | \u7528\u4E8E\u5728\u8BBF\u95EE\u5916\u90E8 API \u670D\u52A1\u65F6\u8FDB\u884C\u8BA4\u8BC1\u7684\u4EE4\u724C\u7684\u503C\u3002   |

\`promptTemplate\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42   | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                        |
|-----------------|-----------|-----------|--------|--------------------------------------------|
| \`language\`      | string    | \u975E\u5FC5\u586B     | EN    | Agent ReAct \u6A21\u677F\u7684\u8BED\u8A00\u7C7B\u578B\uFF0C\u5305\u62EC CH \u548C EN \u4E24\u79CD|
| \`chTemplate\`    | object    | \u975E\u5FC5\u586B     | -     | Agent ReAct \u4E2D\u6587\u6A21\u677F                         |
| \`enTemplate\`    | object    | \u975E\u5FC5\u586B     | -     | Agent ReAct \u82F1\u6587\u6A21\u677F                         |

\`chTemplate\`\u548C\`enTemplate\`\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42   | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                         |
|-----------------|-----------|-----------|--------|---------------------------------------------|
| \`question\`      | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 question \u90E8\u5206             |
| \`thought1\`      | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 thought1 \u90E8\u5206             |
| \`observation\`   | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 observation \u90E8\u5206          |
| \`thought2\`      | string    | \u975E\u5FC5\u586B     | -      | Agent ReAct \u6A21\u677F\u7684 thought2 \u90E8\u5206             |

## \u7528\u6CD5\u793A\u4F8B

**\u914D\u7F6E\u4FE1\u606F**

\`\`\`yaml
llm:
  apiKey: xxxxxxxxxxxxxxxxxx
  domain: dashscope.aliyuncs.com
  serviceName: dashscope.dns
  servicePort: 443
  path: /compatible-mode/v1/chat/completions
  model: qwen-max-0403
  maxIterations: 2
promptTemplate:
  language: CH
apis:
- apiProvider:
    domain: restapi.amap.com
    serviceName: geo.dns
    servicePort: 80
    apiKey: 
      in: query
      name: key
      value: xxxxxxxxxxxxxxx
  api: |
    openapi: 3.1.0
    info:
      title: \u9AD8\u5FB7\u5730\u56FE
      description: \u83B7\u53D6 POI \u7684\u76F8\u5173\u4FE1\u606F
      version: v1.0.0
    servers:
      - url: https://restapi.amap.com
    paths:
      /v5/place/text:
        get:
          description: \u6839\u636EPOI\u540D\u79F0\uFF0C\u83B7\u5F97POI\u7684\u7ECF\u7EAC\u5EA6\u5750\u6807
          operationId: get_location_coordinate
          parameters:
            - name: keywords
              in: query
              description: POI\u540D\u79F0\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587
              required: true
              schema:
                type: string
            - name: region
              in: query
              description: POI\u6240\u5728\u7684\u533A\u57DF\u540D\uFF0C\u5FC5\u987B\u662F\u4E2D\u6587
              required: true
              schema:
                type: string
          deprecated: false
      /v5/place/around:
        get:
          description: \u641C\u7D22\u7ED9\u5B9A\u5750\u6807\u9644\u8FD1\u7684POI
          operationId: search_nearby_pois
          parameters:
            - name: keywords
              in: query
              description: \u76EE\u6807POI\u7684\u5173\u952E\u5B57
              required: true
              schema:
                type: string
            - name: location
              in: query
              description: \u4E2D\u5FC3\u70B9\u7684\u7ECF\u5EA6\u548C\u7EAC\u5EA6\uFF0C\u7528\u9017\u53F7\u9694\u5F00
              required: true
              schema:
                type: string
          deprecated: false
    components:
      schemas: {}
- apiProvider:
    domain: api.seniverse.com
    serviceName: seniverse.dns
    servicePort: 80
    apiKey: 
      in: query
      name: key
      value: xxxxxxxxxxxxxxx
  api: |
    openapi: 3.1.0
    info:
      title: \u5FC3\u77E5\u5929\u6C14
      description: \u83B7\u53D6 \u5929\u6C14\u9884\u529E\u76F8\u5173\u4FE1\u606F
      version: v1.0.0
    servers:
      - url: https://api.seniverse.com
    paths:
      /v3/weather/now.json:
        get:
          description: \u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u5B9E\u51B5
          operationId: get_weather_now
          parameters:
            - name: location
              in: query
              description: \u6240\u67E5\u8BE2\u7684\u57CE\u5E02
              required: true
              schema:
                type: string
            - name: language
              in: query
              description: \u8FD4\u56DE\u5929\u6C14\u67E5\u8BE2\u7ED3\u679C\u6240\u4F7F\u7528\u7684\u8BED\u8A00
              required: true
              schema:
                type: string
                default: zh-Hans 
                enum:
                  - zh-Hans 
                  - en 
                  - ja 
            - name: unit
              in: query
              description: \u8868\u793A\u6E29\u5EA6\u7684\u7684\u5355\u4F4D\uFF0C\u6709\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u4E24\u79CD
              required: true
              schema:
                type: string
                default: c 
                enum:
                  - c 
                  - f 
          deprecated: false
    components:
      schemas: {}
- apiProvider:
    apiKey:
      in: "header"
      name: "DeepL-Auth-Key"
      value: "73xxxxxxxxxxxxxxx:fx"
    domain: "api-free.deepl.com"
    serviceName: "deepl.dns"
    servicePort: 443
  api: |
    openapi: 3.1.0
    info:
      title: DeepL API Documentation
      description: The DeepL API provides programmatic access to DeepL\u2019s machine translation technology.
      version: v1.0.0
    servers:
      - url: https://api-free.deepl.com/v2
    paths:
      /translate:
        post:
          summary: Request Translation
          operationId: translateText
          requestBody:
            required: true
            content:
              application/json:
                schema:
                  type: object
                  required:
                    - text
                    - target_lang
                  properties:
                    text:
                      description: |
                        Text to be translated. Only UTF-8-encoded plain text is supported. The parameter may be specified
                        up to 50 times in a single request. Translations are returned in the same order as they are requested.
                      type: array
                      maxItems: 50
                      items:
                        type: string
                        example: Hello, World!
                    target_lang:
                      description: The language into which the text should be translated.
                      type: string
                      enum:
                        - BG
                        - CS
                        - DA
                        - DE
                        - EL
                        - EN-GB
                        - EN-US
                        - ES
                        - ET
                        - FI
                        - FR
                        - HU
                        - ID
                        - IT
                        - JA
                        - KO
                        - LT
                        - LV
                        - NB
                        - NL
                        - PL
                        - PT-BR
                        - PT-PT
                        - RO
                        - RU
                        - SK
                        - SL
                        - SV
                        - TR
                        - UK
                        - ZH
                        - ZH-HANS
                      example: DE
    components:
      schemas: {}
\`\`\`

\u672C\u793A\u4F8B\u914D\u7F6E\u4E86\u4E09\u4E2A\u670D\u52A1\uFF0C\u6F14\u793A\u4E86get\u4E0Epost\u4E24\u79CD\u7C7B\u578B\u7684\u5DE5\u5177\u3002\u5176\u4E2Dget\u7C7B\u578B\u7684\u5DE5\u5177\u5305\u62EC\u9AD8\u5FB7\u5730\u56FE\u4E0E\u5FC3\u77E5\u5929\u6C14\uFF0Cpost\u7C7B\u578B\u7684\u5DE5\u5177\u662Fdeepl\u7FFB\u8BD1\u3002\u4E09\u4E2A\u670D\u52A1\u90FD\u9700\u8981\u73B0\u5728Higress\u7684\u670D\u52A1\u4E2D\u4EE5DNS\u57DF\u540D\u7684\u65B9\u5F0F\u914D\u7F6E\u597D\uFF0C\u5E76\u786E\u4FDD\u5065\u5EB7\u3002
\u9AD8\u5FB7\u5730\u56FE\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5DE5\u5177\uFF0C\u5206\u522B\u662F\u83B7\u53D6\u6307\u5B9A\u5730\u70B9\u7684\u5750\u6807\uFF0C\u4EE5\u53CA\u641C\u7D22\u5750\u6807\u9644\u8FD1\u7684\u611F\u5174\u8DA3\u7684\u5730\u70B9\u3002\u6587\u6863\uFF1Ahttps://lbs.amap.com/api/webservice/guide/api-advanced/newpoisearch
\u5FC3\u77E5\u5929\u6C14\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\uFF0C\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5B9E\u65F6\u5929\u6C14\u60C5\u51B5\uFF0C\u652F\u6301\u4E2D\u6587\uFF0C\u82F1\u6587\uFF0C\u65E5\u8BED\u8FD4\u56DE\uFF0C\u4EE5\u53CA\u6444\u6C0F\u5EA6\u548C\u534E\u6C0F\u5EA6\u7684\u8868\u793A\u3002\u6587\u6863\uFF1Ahttps://seniverse.yuque.com/hyper_data/api_v3/nyiu3t
deepl\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\uFF0C\u7528\u4E8E\u7FFB\u8BD1\u7ED9\u5B9A\u7684\u53E5\u5B50\uFF0C\u652F\u6301\u591A\u8BED\u8A00\u3002\u3002\u6587\u6863\uFF1Ahttps://developers.deepl.com/docs/v/zh/api-reference/translate?fallback=true


\u4EE5\u4E0B\u4E3A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u4E3A\u4E86\u6548\u679C\u7684\u7A33\u5B9A\u6027\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u5927\u6A21\u578B\u7248\u672C\u7684\u7A33\u5B9A\uFF0C\u672C\u4F8B\u5B50\u4E2D\u4F7F\u7528\u7684qwen-max-0403\uFF1A

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6211\u60F3\u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\u559D\u5496\u5561\uFF0C\u7ED9\u6211\u63A8\u8350\u51E0\u4E2A"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"139487e7-96a0-9b13-91b4-290fb79ac992","choices":[{"index":0,"message":{"role":"assistant","content":" \u5728\u6D4E\u5357\u5E02\u946B\u76DB\u5927\u53A6\u9644\u8FD1\uFF0C\u60A8\u53EF\u4EE5\u9009\u62E9\u4EE5\u4E0B\u5496\u5561\u5E97\uFF1A\\n1. luckin coffee \u745E\u5E78\u5496\u5561(\u946B\u76DB\u5927\u53A6\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u88571299\u53F7\u946B\u76DB\u5927\u53A62\u53F7\u697C\u5927\u5802\uFF1B\\n2. \u4E09\u5E86\u9F50\u76DB\u5E7F\u573A\u632A\u74E6\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E0E\u9896\u79C0\u8DEF\u4EA4\u53C9\u53E3\u897F\u535760\u7C73\uFF1B\\n3. luckin coffee \u745E\u5E78\u5496\u5561(\u4E09\u5E86\xB7\u9F50\u76DB\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9896\u79C0\u8DEF1267\u53F7\uFF1B\\n4. \u5E93\u8FEA\u5496\u5561(\u9F50\u9C81\u8F6F\u4EF6\u56ED\u5E97)\uFF0C\u4F4D\u4E8E\u65B0\u6CFA\u5927\u8857\u4E09\u5E86\u9F50\u76DB\u5E7F\u573A4\u53F7\u697C\u5E95\u5546\uFF1B\\n5. \u5E93\u8FEA\u5496\u5561(\u7F8E\u83B2\u5E7F\u573A\u5E97)\uFF0C\u4F4D\u4E8E\u9AD8\u65B0\u533A\u65B0\u6CFA\u5927\u88571166\u53F7\u7F8E\u83B2\u5E7F\u573AL117\u53F7\uFF1B\u4EE5\u53CA\u5176\u4ED6\u4E00\u4E9B\u9009\u9879\u3002\u5E0C\u671B\u8FD9\u4E9B\u5EFA\u8BAE\u5BF9\u60A8\u6709\u6240\u5E2E\u52A9\uFF01"},"finish_reason":"stop"}],"created":1723172296,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":886,"completion_tokens":50,"total_tokens":936}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" \u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u72B6\u51B5\u4E3A\u9634\u5929\uFF0C\u6E29\u5EA6\u4E3A31\u2103\u3002\u6B64\u4FE1\u606F\u6700\u540E\u66F4\u65B0\u4E8E2024\u5E748\u67089\u65E515\u65F612\u5206\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":890,"completion_tokens":56,"total_tokens":946}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role": "user","content": "\u6D4E\u5357\u7684\u5929\u6C14\u5982\u4F55\uFF1F"},{ "role": "assistant","content": "\u76EE\u524D\uFF0C\u6D4E\u5357\u5E02\u7684\u5929\u6C14\u4E3A\u591A\u4E91\uFF0C\u6C14\u6E29\u4E3A24\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E521\u65F650\u520614\u79D2\u3002"},{"role": "user","content": "\u5317\u4EAC\u5462\uFF1F"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":"\u76EE\u524D\uFF0C\u5317\u4EAC\u5E02\u7684\u5929\u6C14\u4E3A\u6674\u6717\uFF0C\u6C14\u6E29\u4E3A19\u2103\uFF0C\u6570\u636E\u66F4\u65B0\u65F6\u95F4\u4E3A2024\u5E749\u670812\u65E522\u65F617\u520640\u79D2\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":999,"completion_tokens":76,"total_tokens":1075}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u6D4E\u5357\u5E02\u73B0\u5728\u7684\u5929\u6C14\u60C5\u51B5\u5982\u4F55\uFF1F\u7528\u534E\u6C0F\u5EA6\u8868\u793A\uFF0C\u7528\u65E5\u8BED\u56DE\u7B54"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"ebd6ea91-8e38-9e14-9a5b-90178d2edea4","choices":[{"index":0,"message":{"role":"assistant","content":" \u6D4E\u5357\u5E02\u306E\u73FE\u5728\u306E\u5929\u6C17\u306F\u96E8\u66C7\u308A\u3067\u3001\u6C17\u6E29\u306F88\xB0F\u3067\u3059\u3002\u3053\u306E\u60C5\u5831\u306F2024\u5E748\u67089\u65E515\u664212\u5206\uFF08\u6771\u4EAC\u6642\u9593\uFF09\u306B\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F\u3002"},"finish_reason":"stop"}],"created":1723187991,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":890,"completion_tokens":56,"total_tokens":946}}
\`\`\`

**\u8BF7\u6C42\u793A\u4F8B**

\`\`\`shell
curl 'http://<\u8FD9\u91CC\u6362\u6210\u7F51\u5173\u516C\u7F51IP>/api/openai/v1/chat/completions' \\
-H 'Accept: application/json, text/event-stream' \\
-H 'Content-Type: application/json' \\
--data-raw '{"model":"qwen","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[{"role":"user","content":"\u5E2E\u6211\u7528\u5FB7\u8BED\u7FFB\u8BD1\u4EE5\u4E0B\u53E5\u5B50\uFF1A\u4E5D\u5934\u86C7\u4E07\u5C81!"}],"presence_penalty":0,"temperature":0,"top_p":0}'
\`\`\`

**\u54CD\u5E94\u793A\u4F8B**

\`\`\`json
{"id":"65dcf12c-61ff-9e68-bffa-44fc9e6070d5","choices":[{"index":0,"message":{"role":"assistant","content":" \u201C\u4E5D\u5934\u86C7\u4E07\u5C81!\u201D\u7684\u5FB7\u8BED\u7FFB\u8BD1\u4E3A\u201CHoch lebe Hydra!\u201D\u3002"},"finish_reason":"stop"}],"created":1724043865,"model":"qwen-max-0403","object":"chat.completion","usage":{"prompt_tokens":908,"completion_tokens":52,"total_tokens":960}}
\`\`\`
`},i=function(){return s},d=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u57FA\u672C\u914D\u7F6E",text:"\u57FA\u672C\u914D\u7F6E"},{depth:2,slug:"\u7528\u6CD5\u793A\u4F8B",text:"\u7528\u6CD5\u793A\u4F8B"}]},e=c((B,m,C)=>{const{layout:f,...p}=n;return p.file=a,p.url=t,v`${r()}${E(s)}`})});export{e as Content,x as __tla,i as compiledContent,e as default,a as file,n as frontmatter,d as getHeadings,l as rawContent,t as url};
