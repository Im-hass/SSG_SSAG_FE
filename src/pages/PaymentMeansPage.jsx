import React from 'react';
import {
  PaymentMeansAddCardModal,
  PaymentMeansAddCardBtn,
  PaymentMeansFooter,
} from '../components/contents';

import { MobileHeader } from '../components/ui';

function PaymentMeansPage() {
  return (
    <div
      id="m_wrap"
      className="reveal-left-wrap reveal-right-wrap mcom_wrap ssg v3"
    >
      <MobileHeader title="결제수단 관리" />

      <div id="m_container">
        <div id="m_content">
          <div className="cmem_card_tit">
            <h3>예약서비스 결제 관리</h3>
          </div>

          <div className="myssgpay_reserv">
            <div className="myssgpay_reserv_top">
              <p className="myssgpay_desc">
                등록된 결제수단은 정기배송 결제 서비스에서 이용됩니다.
              </p>
              <div className="myssgpay_btnlst" />
            </div>

            <ul className="myssgpay_reserv_cardlst" />

            <PaymentMeansAddCardBtn />
          </div>
        </div>

        <PaymentMeansAddCardModal />

        <PaymentMeansFooter />
      </div>
    </div>
  );
}

export default PaymentMeansPage;
