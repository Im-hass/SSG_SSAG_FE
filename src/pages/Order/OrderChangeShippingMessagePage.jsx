import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { MobileHeader } from '../../components/ui/index';
import { orderInfoState } from '../../recoil/states';

function OrderChangeShippingMessagePage() {
  const navigate = useNavigate();

  const [orderInfo, setOrderInfo] = useRecoilState(orderInfoState);

  const handleClickInput = (e) => {
    setOrderInfo({
      ...orderInfo,
      message: e.target.value,
    });
  };

  const handleChangeMessage = (e) => {
    setOrderInfo({
      ...orderInfo,
      message: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order');
  };

  return (
    <form onSubmit={handleSubmit}>
      <MobileHeader title="수령위치 선택" />
      <div id="ordShppRcptInfoDiv">
        <div name="divOrdStep" id="rcptInfoDiv_1" className="fullOrdArea">
          <div className="mnodr_form_sec ty3">
            <h3 className="mnodr_form_tit2">택배배송 요청사항</h3>
            <ul className="mnodr_form_lst">
              <li className="mnodr_form_lst_itm">
                <span className="mnodr_rdo">
                  <input
                    type="radio"
                    id="deliShppMemo_0_1"
                    name="deliShppMemo_0"
                    className="blind payTracking"
                    value="부재 시 경비실에 맡겨주세요"
                    onChange={handleClickInput}
                  />
                  <label htmlFor="deliShppMemo_0_1">
                    <span className="mnodr_tx_label">
                      부재 시 경비실에 맡겨주세요
                    </span>
                  </label>
                </span>
              </li>

              <li className="mnodr_form_lst_itm">
                <span className="mnodr_rdo">
                  <input
                    type="radio"
                    id="deliShppMemo_0_2"
                    name="deliShppMemo_0"
                    className="blind payTracking"
                    value="부재 시 문 앞에 놓아주세요"
                    onChange={handleClickInput}
                  />
                  <label htmlFor="deliShppMemo_0_2">
                    <span className="mnodr_tx_label">
                      부재 시 문 앞에 놓아주세요
                    </span>
                  </label>
                </span>
              </li>

              <li className="mnodr_form_lst_itm">
                <span className="mnodr_rdo">
                  <input
                    type="radio"
                    id="deliShppMemo_0_3"
                    name="deliShppMemo_0"
                    className="blind payTracking"
                    value="직접 받겠습니다"
                    onChange={handleClickInput}
                  />
                  <label htmlFor="deliShppMemo_0_3">
                    <span className="mnodr_tx_label">직접 받겠습니다</span>
                  </label>
                </span>
              </li>

              <li className="mnodr_form_lst_itm">
                <span className="mnodr_rdo">
                  <input
                    type="radio"
                    id="deliShppMemo_0_4"
                    name="deliShppMemo_0"
                    className="blind payTracking"
                    value="배송 전에 연락주세요"
                    onChange={handleClickInput}
                  />
                  <label htmlFor="deliShppMemo_0_4">
                    <span className="mnodr_tx_label">배송 전에 연락주세요</span>
                  </label>
                </span>
              </li>

              <li className="mnodr_form_lst_itm">
                <span className="mnodr_rdo">
                  <input
                    type="radio"
                    id="deliShppMemo_0_5"
                    name="deliShppMemo_0"
                    className="blind payTracking"
                    value="직접 입력"
                    onChange={handleClickInput}
                  />
                  <label htmlFor="deliShppMemo_0_5">
                    <span className="mnodr_tx_label">직접 입력</span>
                  </label>
                  <span className="mnodr_inp_txtarea focus_visible ty_delete">
                    <label htmlFor="deliShppMemoTxtArea_0_5" className="blind">
                      메세지를 입력해주세요
                    </label>
                    <textarea
                      id="deliShppMemoTxtArea_0_5"
                      cols="30"
                      rows="2"
                      maxLength="50"
                      onChange={handleChangeMessage}
                    />
                    <span className="mnodr_inp_txtcount">
                      <span className="mnodr_inp_current">0</span>/
                      <span className="mnodr_inp_total">50</span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="mnodr_btn ty_point ty_m payTracking"
        style={{ position: 'fixed', bottom: 0, zIndex: '1' }}
      >
        변경하기
      </button>
    </form>
  );
}

export default OrderChangeShippingMessagePage;
