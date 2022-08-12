import React from 'react';
import './DestinationBtns.scss';
import { DES_BTNS_LIST } from '../../../assets/datas';

function DestinationBtns() {
  return (
    <div className="myodr_btnarea">
      <ul>
        {DES_BTNS_LIST.map((el) => (
          <li key={el.id}>
            <button type="button" className={el.className} onClick={el.onClick}>
              <span>{el.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationBtns;
