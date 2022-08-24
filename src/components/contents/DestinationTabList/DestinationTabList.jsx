import React, { useState } from 'react';
import { DES_TAB_LIST } from '../../../assets/datas';
import './DestinationTabList.scss';

function DestinationTabList() {
  const [isClassOn, setIsClassOn] = useState(0);

  const hadleClassOn = (index) => {
    setIsClassOn(index);
  };

  return (
    <ul className="myodr_tab_list" role="tablist">
      {DES_TAB_LIST.map((el, i) => (
        <li
          key={el.id}
          role="menuitem"
          onClick={() => hadleClassOn(i)}
          onKeyDown={() => hadleClassOn(i)}
          className={isClassOn === i ? 'on' : ''}
        >
          <a href="/destination">
            <span className={el.className}>{el.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default DestinationTabList;
