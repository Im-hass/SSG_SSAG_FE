import React, { useState } from 'react';
import {
  PaymentMeansAddCardModal,
  PaymentMeansAddCardBtn,
  PaymentMeansCardList,
  PaymentMeansFooter,
} from '../components/contents';

import { MobileHeader, PaymentMeansPwBtn } from '../components/ui';

function PaymentMeansPage() {
  const [isAdded, setIsAdded] = useState(false);

  const handleIsAdded = () => {
    setIsAdded(!isAdded);
  };

  return (
    <div
      id="m_wrap"
      className="reveal-left-wrap reveal-right-wrap mcom_wrap ssg v3"
    >
      <MobileHeader title="결제수단 관리" />
      <button type="button" onClick={handleIsAdded}>
        {isAdded ? '카드 삭제' : '카드 추가'}
      </button>

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
              {isAdded && <PaymentMeansPwBtn />}
            </div>
            {isAdded && <PaymentMeansCardList />}
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
