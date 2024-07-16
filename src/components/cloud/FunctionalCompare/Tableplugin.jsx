
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
              <p class="mb-6 text-2xl font-normal"> 专业版</p>
              <div class='h-28 text-warning text-xs text-left pl-4'>
                <p class='mb-1'>后付费：0.84元/节点/小时起</p>
                <p class='mb-1'>资源包：422元/月起（相当于1个节点连续运行7200小时）</p>
                <p class='mb-1'>1. 首次购买资源包享受4折优惠，比后付费节省436元/月</p>
                <p class='mb-1'>2. 资源包续费，比后付费节省183元/月</p>
              </div>

            </th>
            <th class="col5">
              <p class="mb-6 text-2xl font-normal"> Serverless 版</p>
              <div class='h-28 text-warning text-xs text-left pl-4'>
                <p class='mb-1'>后付费：0.135元/万次请求（采用阶梯计费，用得越多，单位请求计费越便宜）</p>
                <p class='mb-1'>资源包：92元起</p>
                <p class='mb-1'>1. 承诺购买时长3个月，享95折</p>
                <p class='mb-1'>2. 承诺购买时长1年，享9折</p>
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
                  {item.free.checked ? <Correct /> : <False />}
                  {item.free.des && (
                    <p class="text-xs font-normal color-gray-08">
                      {item.free.des}
                    </p>
                  )}
                </td>
                <td class="col4 text-center">
                  {item.speciality.checked ? <Correct /> : <False />}
                  {item.speciality.des && item.speciality.des.map((item)=>(
                    <p class="text-xs font-normal color-gray-08 mb-1">
                      {item}
                    </p>
                  ))}
                </td>
                <td class="col5 text-center">
                  {item.serverless.checked ? <Correct /> : <False />}
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