
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
          <tr>
            <th class="col1 border-0" />
            <th class="col2 border-0" />
            <th class="col3 overflow-hidden">
              <p class="mb-6 text-2xl font-normal"> 社区版</p>
              <div class='text-warning text-xs h-28 leading-8'>免费</div>
            </th>
            <th class="col4">
              <p class="mb-6 text-2xl font-normal"> 开发版</p>
              <div class='min-h-28 text-warning text-xs text-left pl-4'>
                <p class='mb-1'>后付费：0.826元/小时起</p>
                <p class='mb-1'>apigw.dev.x1</p>
                <p class='mb-1'>最大客户端连接数：24000</p>
                <p class='mb-1'>最大 HTTPS 每秒新建连接数：800</p>
                <p class='mb-1'>最大短连接 QPS：1700</p>
                <p class='mb-1'>最大长连接 QPS：2200</p>
                <p class='mb-1'>无 SLA 保障</p>
                
                <p class='mb-1'>资源包：249.6元/月起</p>
                <p class='mb-1'>1. 首次购买资源包享受6折优惠，比后付费节省178元/月</p>
                <p class='mb-1'>2. 资源包续费，比后付费节省345元/月</p>
              </div>

            </th>
            <th class="col5">
              <p class="mb-6 text-2xl font-normal"> 生产版</p>
              <div class='min-h-28 text-warning text-xs text-left pl-4'>
                <p class='mb-1'>后付费：1.935元/小时起</p>
                <p class='mb-1'>apigw.small.x1</p>
                <p class='mb-1'>最大客户端连接数：48000</p>
                <p class='mb-1'>最大 HTTPS 每秒新建连接数：1600</p>
                <p class='mb-1'>最大短连接 QPS：3400</p>
                <p class='mb-1'>最大长连接 QPS：4400</p>
                <p class='mb-1'>SLA：99.99%</p>

                <p class='mb-1'>资源包：585元/月起</p>
                <p class='mb-1'>1. 首次购买资源包享受6折优惠，比后付费节省808元/月</p>
                <p class='mb-1'>2. 资源包续费，比后付费节省418元/月</p>
              </div>
            </th>
          </tr>
        </table>
        )
      }
      <table class="table bg-secondary rounded-2xl table-fixed">
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
                  {typeof item.free.checked =='boolean' && (item.free.checked ? <Correct /> : <False />)}
                  {item.free.des && (
                    <p class="text-xs font-normal color-gray-08">
                      {item.free.des}
                    </p>
                  )}
                </td>
                <td class="col4 text-center">
                  {typeof item.speciality.checked =='boolean' && (item.speciality.checked ? <Correct /> : <False />)}
                  {item.speciality.des && item.speciality.des.map((item)=>(
                    <p class="text-xs font-normal color-gray-08 mb-1">
                      {item}
                    </p>
                  ))}
                </td>
                <td class="col5 text-center">
                  {typeof item.serverless.checked =='boolean' && (item.serverless.checked ? <Correct /> : <False />)}
                  {item.serverless.des && item.serverless.des.map((item)=>(
                    <p class="text-xs font-normal color-gray-08 mb-1">
                      {item}
                    </p>
                  ))}
                </td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
};

export default Tableplugin;