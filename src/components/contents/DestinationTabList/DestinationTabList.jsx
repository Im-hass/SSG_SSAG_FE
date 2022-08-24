import React from 'react';
import './DestinationTabList.scss';
import { Link } from 'react-router-dom';
import { DES_TAB_LIST } from '../../../assets/datas';

function DestinationTabList({ handleMenu, menuName }) {
  return (
    <ul className="myodr_tab_list" role="tablist">
      {DES_TAB_LIST.map((el) => (
        <li
          key={el.name}
          role="menuitem"
          onClick={() => handleMenu(el.menuName)}
          onKeyDown={() => handleMenu(el.menuName)}
          className={el.menuName === menuName ? 'on' : ''}
        >
          <Link to={el.to}>
            <span className="myodr_tab_tx">{el.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DestinationTabList;
