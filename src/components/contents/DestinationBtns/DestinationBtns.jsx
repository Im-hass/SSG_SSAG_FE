import React from 'react';
import './DestinationBtns.scss';
import axios from 'axios';
import { DES_BTNS_LIST } from '../../../assets/datas';

function DestinationBtns({ selected, isDefaultChanged, setIsDefaultChanged }) {
  const handleTempAddr = () => {
    console.log('이번만 배송지 설정');
  };

  const handleDefaultAddr = () => {
    const token = localStorage.getItem('token');
    axios
      .put(
        'http://13.209.26.150:9000/users/shipping-addr/default',
        {
          addrId: selected,
        },
        {
          headers: {
            Authorization: JSON.parse(token),
          },
        },
      )
      .then(() => {
        setIsDefaultChanged(!isDefaultChanged);
      })
      .catch((e) => new Error(e));
  };

  return (
    <div className="myodr_btnarea">
      <ul>
        {DES_BTNS_LIST.map((el) => (
          <li key={el.id}>
            <button
              type="button"
              className={el.className}
              onClick={el.id === 2 ? handleDefaultAddr : handleTempAddr}
            >
              <span>{el.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DestinationBtns;
