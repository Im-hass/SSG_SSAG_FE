import React from 'react';
import './PaymentMeansAddCardBtn.scss';

function PaymentMeansAddCardBtn() {
  return (
    <div className="myssgpay_btnlst">
      <button className="btn_add_card modal-open-btn" type="button">
        <span className="btn_txt">카드 등록하기</span>
      </button>
    </div>
  );
}

export default PaymentMeansAddCardBtn;
