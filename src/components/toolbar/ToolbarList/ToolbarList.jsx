import React from 'react';
import { ToolbarItem } from '../ToolbarItem';
import './ToolbarList.scss';

const TOOL_LIST = [
  {
    link: '/category',
    iconName: 'icon_category',
    txt: '카테고리',
  },
  {
    link: '',
    iconName: 'icon_search',
    txt: '통합검색',
  },
  {
    link: '/',
    iconName: 'icon_house',
    txt: '홈',
  },
  {
    link: '/my',
    iconName: 'icon_person',
    txt: 'My',
  },
  {
    link: '/historyList',
    iconName: 'icon_eye',
    txt: '최근본',
    imgUrl: 'https://sitem.ssgcdn.com/56/43/16/item/1000034164356_i1_120.jpg',
    hasHistory: true,
  },
];

function ToolbarList() {
  return (
    <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
      <ul className="toolbar_menu" role="navigation">
        {TOOL_LIST &&
          TOOL_LIST.map((v) => <ToolbarItem data={v} key={v.txt} />)}
      </ul>
    </div>
  );
}

export default ToolbarList;
