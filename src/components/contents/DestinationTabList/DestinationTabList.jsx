import React, { useState } from 'react';
import './DestinationTabList.scss';
import { Link } from 'react-router-dom';
import { DES_TAB_LIST } from '../../../assets/datas';

function DestinationTabList() {
  const [isClassOn, setIsClassOn] = useState(0);

  const hadleClassOn = (index) => {
    setIsClassOn(index);
  };

  return (
    <ul className="myodr_tab_list" role="tablist">
      {DES_TAB_LIST.map((el, i) => (
        <li
          key={el.name}
          role="menuitem"
          onClick={() => hadleClassOn(i)}
          onKeyDown={hadleClassOn}
          className={isClassOn === i ? 'on' : ''}
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
