import React from 'react';
import axios from 'axios/index';
import { DestinationListBtns } from '../index';
import './DestinationList.scss';

function DestinationList({ datas, isDelete, setIsDelete, handleSelectedAddr }) {
  const handleDelete = (id) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`http://13.209.26.150:9000/users/shipping-addr/${id}`, {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then(() => {
        setIsDelete(!isDelete);
      })
      .catch((e) => new Error(e));
  };

  return (
    <ul className="myodr_tabrdo_lst">
      {datas &&
        datas.map(
          ({ addrId, addrDefault, addrName, zipCode, streetAddr, lotAddr }) => (
            <li key={addrId} className="myodr_tabrdo">
              <div className="myodr_rdo on">
                <input
                  type="radio"
                  id={`ui_test_rdotab${addrId}`}
                  name="delivery"
                  value={addrId}
                  defaultChecked={addrDefault === 1}
                  onClick={() => {
                    handleSelectedAddr(addrId);
                  }}
                />
                <label
                  htmlFor={`ui_test_rdotab${addrId}`}
                  className="myodr_rdo_cont"
                >
                  <span className="myodr_rdo_inner">
                    <strong className="tx_deliv_name">
                      <span className="blind">배송지명</span>
                      {addrName}
                      {addrDefault === 1 && <em>기본배송지</em>}
                    </strong>
                    <span className="tx_deliv_address">
                      <span className="blind">우편번호</span>({zipCode})
                    </span>
                    <span className="tx_deliv_address">
                      도로명주소: {streetAddr}
                    </span>
                    <span className="tx_deliv_address">
                      지번주소: {lotAddr}
                    </span>
                  </span>
                </label>
                <DestinationListBtns
                  isDefaultAddr={addrDefault === 1}
                  id={addrId}
                  handleDelete={handleDelete}
                />
              </div>
            </li>
          ),
        )}
    </ul>
  );
}

export default DestinationList;
