import React from 'react';
import { ToolbarItem } from '../ToolbarItem';
import { TOOL_LIST } from '../../../assets/datas';
import './ToolbarList.scss';

function ToolbarList({ recentShoppingData }) {
  const recentItemImgUrl = !recentShoppingData
    ? undefined
    : recentShoppingData[0].productImg;

  return (
    <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
      <ul className="toolbar_menu" role="navigation">
        {TOOL_LIST &&
          TOOL_LIST.map((v) => (
            <ToolbarItem
              data={v}
              key={v.txt}
              recentItemImgUrl={recentItemImgUrl}
            />
          ))}
      </ul>
    </div>
  );
}

export default ToolbarList;
