import React from 'react';
import './DestinationTabList.scss';

const DES_TAB_LIST = [
  {
    id: 1,
    listRole: 'presentation',
    aRole: 'tab',
    href: '/m/comm/shpplocList.ssg',
    className: 'myodr_tab_tx',
    name: 'MY배송지',
  },
  {
    id: 2,
    listRole: 'presentation',
    aRole: 'tab',
    href: '/m/comm/shareShpplocList.ssg',
    className: 'myodr_tab_tx',
    name: '함께장보기 배송지',
  },
];

function DestinationTabList() {
  return (
    <ul className="myodr_tab_list" role="tablist">
      {DES_TAB_LIST.map((el) => (
        <li key={el.id} role={el.listRole}>
          <a role={el.aRole} href={el.href}>
            <span className={el.className}>{el.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DestinationTabList;
