import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { MobileHeader } from '../../components/ui/index';
import { orderInfoState } from '../../recoil/states';

function OrderChangeRecipientPage() {
  const navigate = useNavigate();

  const [orderInfo, setOrderInfo] = useRecoilState(orderInfoState);

  const handleChangeInput = (e) => {
    if (e.target.name === 'refundCheck') {
      setOrderInfo({
        ...orderInfo,
        recipient: {
          ...orderInfo.recipient,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setOrderInfo({
        ...orderInfo,
        recipient: { ...orderInfo.recipient, [e.target.name]: e.target.value },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/order');
  };

  return (
    <form onSubmit={handleSubmit}>
      <MobileHeader title="주문자정보 변경" />
      <div id="ordNotiInfoDiv">
        <div name="divOrdStep" id="notiInfoDiv">
          <div className="mnodr_sec_heading">
            <h3 className="mnodr_tx_heading" style={{ fontWeight: 'bold' }}>
              어느 분에게
              <br />
              주문 알림을 보내드릴까요?
            </h3>
          </div>

          <div className="mnodr_form_sec ty3">
            <div className="mnodr_form_tit">
              <strong>주문자명</strong>
            </div>
            <div className="mnodr_form_cont ty_space">
              <span className="mnodr_inp_txt">
                <input
                  type="text"
                  className="payTracking"
                  value={orderInfo.recipient.name}
                  placeholder="성명을 입력해주세요"
                  maxLength="50"
                  name="name"
                  onChange={handleChangeInput}
                />
              </span>
            </div>
          </div>
          <div className="mnodr_form_sec ty2">
            <div className="mnodr_form_tit">
              <strong>휴대전화번호</strong>
            </div>
            <div className="mnodr_form_cont ty_space">
              <div className="mnodr_inp_row_grp">
                <span className="mnodr_inp_txt">
                  <input
                    type="tel"
                    name="phone"
                    maxLength="13"
                    value={orderInfo.recipient.phone}
                    onChange={handleChangeInput}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="mnodr_form_sec ty2">
            <div className="mnodr_form_tit">
              <strong>이메일주소</strong>
            </div>
            <div className="mnodr_form_cont ty_space">
              <span className="mnodr_inp_txt">
                <input
                  type="text"
                  id="change.email"
                  name="email"
                  value={orderInfo.recipient.email}
                  className="payTracking"
                  placeholder="예) email@ssg.com"
                  maxLength="100"
                  onChange={handleChangeInput}
                />
              </span>
            </div>
          </div>

          <div className="mnodr_form_sec ty2">
            <div className="mnodr_form_tit">
              <strong>품절시 환불</strong>
            </div>
            <div className="mnodr_form_cont ty_space">
              <ul className="mnodr_form_lst">
                <li>
                  <span className="mnodr_rdo">
                    <input
                      type="checkbox"
                      id="change.rdoRefund_10"
                      name="refundCheck"
                      value="10"
                      className="blind payTracking"
                      onChange={handleChangeInput}
                      checked={orderInfo.recipient.refundCheck}
                    />
                    <label htmlFor="change.rdoRefund_10">
                      <span className="mnodr_tx_label rfdMthdTxt">
                        주문시 결제수단으로 환불
                      </span>
                    </label>
                  </span>
                </li>
              </ul>
            </div>
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

export default OrderChangeRecipientPage;
