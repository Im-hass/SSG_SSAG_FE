import React from 'react';
import { ToolbarItem } from '../ToolbarItem';
import './ToolbarList.scss';

function ToolbarList() {
  return (
    <div>
      <h2>Toolbar List</h2>
      <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
        <ul className="toolbar_menu" role="navigation">
          <ToolbarItem to="/" iconName="icon_category" txt="카테고리" />
          <ToolbarItem to="/" iconName="icon_search" txt="통합검색" />
          <ToolbarItem to="/" iconName="icon_house" txt="홈" />
          <ToolbarItem to="/" iconName="icon_person" txt="My" />
          <ToolbarItem to="/" iconName="icon_eye" txt="최근본" />
        </ul>
      </div>
    </div>
  );
}

export default ToolbarList;
