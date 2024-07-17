import { useEffect, useState, useRef } from "preact/hooks";
import Tableplugin from "./Tableplugin.jsx";
import MobileTable from "./MobileTable.jsx";
import UpDown from "./UpDown.jsx";
import {
  advantageSource
} from "../../../constant.ts";
import "./style.css";


const FunctionalCompare = (props) => {
  const dataVersion = ['Higress', 'Nginx', 'Spring Cloud Gateway']

  const versionContain = {
    'Higress': 'higress',
    'Nginx': 'nginx',
    'Spring Cloud Gateway': 'scg',
  }
  const [version, setVersion] = useState('Higress');
  const [isSticky, setIsSticky] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const functionalCompareWrapperRef = useRef(null);

  const handleScroll = () => {
    const wrapper = functionalCompareWrapperRef.current;
    if (wrapper) {
      const distanceFromTop = wrapper.getBoundingClientRect().top;
      setIsSticky(distanceFromTop < 0); // 当距离顶部大于0时展示元素
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // 移除事件监听器
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <functional-compare
      ref={functionalCompareWrapperRef}
      class="functional-compare-wrapper top-[100px] flex flex-col justify-center items-center mt-10 mb-10"
    >
      <div id='collapse-fold' class="collapse bg-error collapse-arrow">
        <input type="checkbox" checked={isCollapsed} onChange={() => setIsCollapsed(!isCollapsed)} />
        <div class="collapse-title text-2xl font-normal">产品对比</div>
        <div class="collapse-content">
          {advantageSource.map((item, index) => {
            return (
              <Tableplugin dataSource={item.data} title={item.title} isHead={index == 0} />
            )
          })}
        </div>
      </div>
      {/* <!-- 吸底 --> */}
      {isSticky && isCollapsed && <div id='sticky-table-bottom' class='table table-fixed bg-error mt-6 px-4'>
        <table class='w-full'>
          <tbody>
            <tr>
              <th class="col1 border-0" />
              <th class="col2 border-0" />
              {dataVersion.map((it, index) => (
                <th class={`col${index + 3}`}>
                  <p class="mb-6 text-2xl font-normal mb-2"> {it}</p>
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      }

      {/* <!-- 移动端 --> */}
      <div class="mobile-content">
        <div>
          <label htmlFor="my_modal_7" className="text-center mb-4 inline-block w-full"  >
            <span class="text-xl">{version}</span>
            <UpDown class="w-8 h-4" />
          </label>

          <input type="checkbox" id="my_modal_7" className="modal-toggle" checked={isShow} onChange={(e) => setIsShow(e.target.checked)} />
          {
            isShow && <div className="modal" role="dialog">
              <div className="modal-box">
                <div className="mb-6" >
                  <span class="text-lg font-bold">选择产品</span>
                  <span
                    class="absolute right-8  "
                    onclick={() => { setIsShow(false) }}
                  >✕</span>
                </div>
                <div class="flex flex-col">
                  {dataVersion.map((it, index) => {
                    return (
                      <button
                        class="btn-select h-12 mb-4 bg-gray-02"
                        onClick={() => { setVersion(it); setIsShow(false) }}
                      >{it}</button>
                    )
                  })}
                </div>
              </div>
            </div>}
        </div>
        <div>
          {
            advantageSource.map((item, index) => {
              return (
                <MobileTable
                  dataSource={item.data}
                  title={item.title}
                  version={versionContain[version]}
                />
              );
            })
          }
        </div>
      </div>
    </functional-compare>
  );
};

export default FunctionalCompare;