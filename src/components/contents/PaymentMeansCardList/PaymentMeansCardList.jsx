import React from 'react';

function PaymentMeansCardList() {
  return (
    <ul className="myssgpay_reserv_cardlst" style={{ userSelect: 'auto' }}>
      <li className="myssgpay_reserv_card" style={{ userSelect: 'auto' }}>
        <div
          className="myssgpay_reserv_carditem"
          style={{ userSelect: 'auto' }}
        >
          <div
            className="card_item"
            style={{
              backgroundColor: 'rgb(119, 119, 119)',
              userSelect: 'auto',
            }}
          >
            <span
              className="logo ty_short"
              style={{
                backgroundImage:
                  "url('https://sui.ssgcdn.com/ui/ssg/img/order/card/ordercard-08.png')",
                userSelect: 'auto',
              }}
            >
              <span className="blind" style={{ userSelect: 'auto' }}>
                현대카드 로고
              </span>
            </span>
          </div>
          <div className="card_info" style={{ userSelect: 'auto' }}>
            <div className="card_name" style={{ userSelect: 'auto' }}>
              현대카드
            </div>
            <div className="card_num" style={{ userSelect: 'auto' }}>
              4033-02**-****-6928
            </div>
          </div>
          <div className="card_btn" style={{ userSelect: 'auto' }}>
            <button
              type="button"
              className="btn_remove"
              data-fncco-cd="08"
              style={{ userSelect: 'auto' }}
            >
              삭제
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default PaymentMeansCardList;
