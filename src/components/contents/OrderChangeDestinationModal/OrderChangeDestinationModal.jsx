import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { MobileHeader } from '../../ui/index';
import { AddAddressMyInfo } from '../index';

function OrderChangeDestinationModal(props) {
  const { setClickBtn, setDestinationData, setRegistDestination } = props;
  const [destinationArr, setDestinationArr] = useState([]);
  const [clickAddDestinationBtn, setClickAddDestinationBtn] = useState(false);
  const title = 'order';

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://13.209.26.150:9000/users/shipping-addr', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        setDestinationArr(res.data.result);
      })
      .catch((err) => new Error(err));
  }, [destinationArr]);

  const handleInputClick = (e) => {
    const clickAddr = destinationArr.find(
      (addr) => addr.addrName === e.target.id,
    );
    setDestinationData(clickAddr);
    setRegistDestination(false);
  };

  const handleOpenAddDestinationModal = () => {
    setClickAddDestinationBtn((prev) => !prev);
  };

  const handleSubmit = () => {
    setClickBtn({
      destination: false,
      recipient: false,
      message: false,
    });
    toast.success('배송지가 변경되었습니다.');
  };

  return (
    <div className="wrap">
      <MobileHeader title="배송지 선택" />
      {clickAddDestinationBtn && (
        <AddAddressMyInfo
          title={title}
          setClickAddDestinationBtn={setClickAddDestinationBtn}
        />
      )}
      <div className="mnodr_sec_heading">
        <h3 className="mnodr_tx_heading">어디로 보내드릴까요?</h3>
      </div>
      <div
        className="mbrShpplocArea mnodr_form_sec ty3"
        style={{ paddingBottom: '90px' }}
      >
        <div className="mnodr_form_head">
          <button
            type="button"
            className="mbrShpplocAddButton mnodr_tx_wrap2"
            onClick={handleOpenAddDestinationModal}
          >
            <i className="mnodr_ic ic_plus_css" />
            <span className="mnodr_tx">신규배송지등록</span>
          </button>
        </div>
        <div className="mnodr_form_cont ty_space">
          <ul className="mnodr_rdotablist">
            {destinationArr.map((addr) => (
              <li
                key={addr.addrId}
                className="eachMbrShpplocArea mnodr_rdotab ty_input"
              >
                <input
                  type="radio"
                  id={addr.addrName}
                  className="blind mnodr_rdotab_inp ordShpplocRadio"
                  name="addr"
                  onChange={handleInputClick}
                />
                <label htmlFor={addr.addrName} className="mnodr_rdotab_label">
                  <div className="mnodr_rdotab_head">
                    <div className="mnodr_rdotab_headlt">
                      <i className="mnodr_rdotab_btn" />
                      <strong className="mnodr_tx_desc3">
                        {addr.addrName}
                      </strong>
                    </div>
                  </div>
                  <div className="mnodr_rdotab_ctn ty_pull ty_desc">
                    <span className="mnodr_tx_desc">
                      [{addr.zipCode}] {addr.streetAddr}
                    </span>
                    <div className="mnodr_tx_wrap">
                      <span className="mnodr_tx_size2 mnodr_tx_gray">
                        {addr.recipient} / {addr.phone}
                      </span>
                    </div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        type="button"
        className="mnodr_btn ty_point ty_m payTracking"
        style={{ position: 'fixed', bottom: 0, zIndex: '1' }}
        onClick={handleSubmit}
      >
        변경하기
      </button>
      <Toaster
        containerStyle={{
          top: 30,
        }}
      />
    </div>
  );
}

export default OrderChangeDestinationModal;
