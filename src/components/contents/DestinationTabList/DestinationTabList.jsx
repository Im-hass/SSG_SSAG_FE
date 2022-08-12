import React from 'react';
import './DestinationTabList.scss';
import { DES_TAB_LIST } from '../../../assets/datas';

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
