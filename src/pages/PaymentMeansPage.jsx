import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PaymentMeansAddCardModal,
  PaymentMeansAddCardBtn,
  PaymentMeansCardList,
  PaymentMeansFooter,
} from '../components/contents';

import { MobileHeader, PaymentMeansPwBtn } from '../components/ui';

function PaymentMeansPage() {
  const [cards, setCards] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const changeCardNum = (num) => {
    const cardNum = num;
    for (let i = 0; i < cardNum.length; i += 1) {
      if (i === 7 || i === 8 || i === 10 || i === 11 || i === 12 || i === 13) {
        cardNum[i] = '*';
      }
    }
    return cardNum.join('');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('https://ssg-ssag.shop:9000/users/payment', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        const data = res.data.result;
        setCards(data);

        for (let i = 0; i < data.length; i += 1) {
          const cardNum = data[i].cardNumber.split('');
          data[i].cardNumber = changeCardNum(cardNum);
        }
      })
      .catch((err) => new Error(err));
  }, [isSubmit]);

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
              {cards.length > 0 && <PaymentMeansPwBtn />}
            </div>
            {cards.length > 0 && (
              <PaymentMeansCardList
                cards={cards}
                isSubmit={isSubmit}
                setIsSubmit={setIsSubmit}
              />
            )}
            <PaymentMeansAddCardBtn />
          </div>
        </div>

        <PaymentMeansAddCardModal
          isSubmit={isSubmit}
          setIsSubmit={setIsSubmit}
        />
        <PaymentMeansFooter />
      </div>
    </div>
  );
}

export default PaymentMeansPage;
