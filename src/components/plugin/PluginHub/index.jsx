import { useEffect, useState, useRef } from "preact/hooks";
import Dropdown from "./Dropdown";
import Filter from "./Filter";
import Close from './Close';
import PluginCard from './PluginCard';

const PluginHub = (props) => {

  const { dataSource } = props;
  const selectPlugin = useRef(null);
  const data = [
    {
      label: 'Tiers',
      name: '插件版本',
      options: [
        { name: '企业版', value: 0 },
        { name: '开源版', value: 1 },
      ]
    },
    {
      label: 'Functionality',
      name: '功能类别',
      options: [
        { name: 'AI', value: 0 },
        { name: '认证', value: 1 },
        { name: '转换', value: 2 },
        { name: '流量', value: 3 },
        { name: '安全', value: 4 },
      ]
    },
    {
      label: 'SupportBy',
      name: '插件来源',
      options: [
        { name: 'Higress', value: 0 },
        { name: '技术合作伙伴', value: 1 },
      ]
    },
  ]
  const [allSelectedItems, setAllSelectedItems] = useState({});
  const [cardData, setCardData] = useState([]);
  // 添加状态来追踪当前展开的Dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    setCardData(groupByFunctionality(dataSource)); // 初始化时设置原始分组数据
  }, []);

  useEffect(() => {
    // 使用过滤器和input输入更新 cardData
    const filteredData = applyFilters(dataSource, allSelectedItems, filterText);
    // 更新 PluginCard 的 dataSource
    setCardData(groupByFunctionality(filteredData));
  }, [dataSource, allSelectedItems, filterText]);

  // 过滤器筛选
  const applyFilters = (data, filters, filterText) => {
    let filteredData = data;

    // input过滤
    if (filterText) {
      filteredData = filteredData.filter((item) =>
        item.Title.toLowerCase().includes(filterText.toLowerCase())
      );
    }

    return filteredData.filter(item => {
      return Object.entries(filters).every(([key, selectedOptions]) => {
        if (selectedOptions.length === 0) {
          return true; // 如果筛选项为空，则表示选择了所有，不需要过滤
        }
        const filterValue = item[key];
        return selectedOptions.find(option => option.name === filterValue);
      });
    });
  };

  const handleDropdownClick = (label) => {
    // 如果点击的是当前已展开的Dropdown，则关闭所有Dropdown
    // 否则，打开点击的Dropdown
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const handleSelectionChange = (dropdownLabel, selectedItems) => {
    // 映射 selectedItems 为包含名字的对象形式
    const selectedItemNames = selectedItems.map(item => ({ name: item.name }));
    // 更新筛选条件和关闭所有Dropdown
    setOpenDropdown(null);
    setAllSelectedItems(prevItems => ({
      ...prevItems,
      [dropdownLabel]: selectedItemNames
    }));
  };

  // 根据functionality确定PluginCard
  const groupByFunctionality = (data) => {
    const groups = {};
    data.forEach(item => {
      if (!groups[item.Functionality]) {
        groups[item.Functionality] = [];
      }
      groups[item.Functionality].push(item);
    });
    return groups;
  };

  // 点击空白处关闭Dropdown
  const handleClickOutSide = (event) => {
    if (selectPlugin.current && !selectPlugin.current.contains(event.target)) {
      handleCloseDropdown()
    }
  }

  const handleCloseDropdown = () => {
    setOpenDropdown(null);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, []);



  return (
    <div class="flex flex-col justify-center items-center bg-secondary">
      {/* 过滤器 */}
      {/* <div className="page-hub-filters w-[80%] bg-base-100 h-[80px] mt-[72px] rounded-2xl hidden  md:flex lg:flex" ref={selectPlugin}>
        <div class="filter-name w-[40%] flex items-center px-6">
          <Filter />
          <input
            type='text'
            id='filter-plugins'
            placeholder="过滤插件名称"
            class='bg-[#ffffff] ml-2 outline-none '
            value={filterText}
            onInput={(e) => setFilterText(e.target.value)}
            autoComplete="off"
          />
          <Close onClick={() => setFilterText('')} />
        </div>
        {
          data.map((item, index) =>
            <Dropdown
              dataSource={item}
              isOpen={openDropdown === item.label} // 传递一个标识，判断Dropdown是否应展开
              onDropdownClick={() => handleDropdownClick(item.label)}
              onSelectionChange={(selectedItems) => handleSelectionChange(item.label, selectedItems)}
            />
          )
        }
      </div> */}
      <div class='mb-20 w-full md:w-[85.125rem]'>
        {Object.entries(cardData).map(([functionality, plugins]) => (
          <PluginCard key={functionality} dataSource={{ Functionality: functionality, plugins }} />
        ))}
      </div>
    </div>
  );
};

export default PluginHub;