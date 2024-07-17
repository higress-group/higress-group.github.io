
import { useEffect, useState } from "preact/hooks";
import Correct from "./Correct";
import False from "./False"
import "./style.tableplugin.css";



const Tableplugin = (props) => {
  const { dataSource, title, isHead = false } = props;
  const totalRows = dataSource.length;

  return (
    <div class="tableplugin overflow-x-auto rounded-2xl mb-6">
      {
        isHead && (
          <table class='w-full'>
            <tbody>
              <tr>
                <th class="col1 border-0" />
                <th class="col2 border-0" />
                <th class="col3 overflow-hidden">
                  <p class="mb-6 text-2xl font-normal"> Higress</p>
                  <div class='h-20 text-warning text-xs text-left pl-4'>
                    Higress 遵循开源 Ingress/Gateway API 标准，是提供流量调度、服务治理、安全防护三合一的云原生 API 网关，具有高集成、易使用、易扩展、热更新等特点，并能满足 AI 场景下对网关的新需求。
                  </div>
                </th>
                <th class="col4">
                  <p class="mb-6 text-2xl font-normal"> Nginx</p>
                  <div class='h-20 text-warning text-xs text-left pl-4'>
                    Nginx 是用于 Web 服务、反向代理、内容缓存、负载均衡、媒体流传输等场景的开源软件，还可以作为 API 网关，通过反向代理将用户请求转发到后端业务模块，从而为第三方提供服务接口。
                  </div>

                </th>
                <th class="col5">
                  <p class="mb-6 text-2xl font-normal"> Spring Cloud Gateway</p>
                  <div class='h-20 text-warning text-xs text-left pl-4'>
                    Spring Cloud Gateway 为微服务架构提供一种简单而有效的统一的 API 路由管理方式，并基于 Filter 链的方式提供了安全、监控和埋点、限流等能力。
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        )
      }
      <table class="table bg-secondary rounded-2xl table-fixed">
        <tbody>
        {
          dataSource.map((item, index) => {
            return (
                <tr>
                  {index === 0 && (
                    <td
                      class="col1 text-[12px] align-top text-center leading-8"
                      rowspan={totalRows}
                    >
                      {title}
                    </td>
                  )}
                  <td class="col2 text-base font-normal color-gray-14">
                    {item.name.title && <p>{item.name.title}</p>}
                    {item.name.des && <p class="text-xs">{item.name.des}</p>}
                  </td>
                  <td class="col3 text-center">
                    {/* {item.higress.checked ? <Correct /> : <False />} */}
                    {typeof (item.higress.checked) === 'boolean' ? (item.higress.checked ? <Correct /> : <False />) : null}
                    {item.higress.des && item.higress.des.map((item) => (
                      <p class="text-xs font-normal color-gray-08 mb-1">
                        {item}
                      </p>
                    ))}
                  </td>
                  <td class="col4 text-center">
                    {typeof (item.nginx.checked) === 'boolean' ? (item.nginx.checked ? <Correct /> : <False />) : null}
                    {item.nginx.des && item.nginx.des.map((item) => (
                      <p class="text-xs font-normal color-gray-08 mb-1">
                        {item}
                      </p>
                    ))}
                  </td>
                  <td class="col5 text-center">
                    {/* {item.scg.checked ? <Correct /> : <False />} */}
                    {typeof (item.scg.checked) === 'boolean' ? (item.scg.checked ? <Correct /> : <False />) : null}
                    {item.scg.des && item.scg.des.map((item) => (
                      <p class="text-xs font-normal color-gray-08 mb-1">
                        {item}
                      </p>
                    ))}
                  </td>
                </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default Tableplugin;