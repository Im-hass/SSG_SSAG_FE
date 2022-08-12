import React from 'react';
import { MY_DES_LIST } from '../../../assets/datas';
import { DestinationListBtns } from '../index';
import './DestinationList.scss';

function DestinationList() {
  return (
    <ul className="myodr_tabrdo_lst">
      {MY_DES_LIST.map((el) => (
        <li key={el.id} className="myodr_tabrdo">
          <div className="myodr_rdo on">
            <input
              type="radio"
              id={`ui_test_rdotab${el.id - 1}`}
              name="delivery"
              value={el.id}
              checked={el.id === 1 ? 'checked' : ''}
            />
            <label
              htmlFor={`ui_test_rdotab${el.id - 1}`}
              className="myodr_rdo_cont"
            >
              <span className="myodr_rdo_inner">
                <strong className="tx_deliv_name">
                  <span className="blind">배송지명</span>
                  {el.destinationName}
                  {el.id === 1 && <em>기본배송지</em>}
                </strong>
                <span className="tx_deliv_address">
                  <span className="blind">우편번호</span>
                  {el.zipCode}
                </span>
                <span className="tx_deliv_address">{el.addressDoro}</span>
                <span className="tx_deliv_address">{el.addressJibeon}</span>
              </span>
            </label>
            <DestinationListBtns />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DestinationList;
