import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PaymentMeansAddCardModal,
  PaymentMeansAddCardBtn,
  PaymentMeansCardList,
  PaymentMeansFooter,
} from '../components/contents';

import { MobileHeader, PaymentMeansPwBtn } from '../components/ui';

const cardNumArr = [];

function PaymentMeansPage() {
  const [cards, setCards] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const changeCardNums = (numArr) => {
    for (let i = 0; i < numArr.length; i += 1) {
      cardNumArr[i] = numArr[i].split('');
      for (let j = 0; j < numArr[i].length; j += 1) {
        if (
          j === 7 ||
          j === 8 ||
          j === 10 ||
          j === 11 ||
          j === 12 ||
          j === 13
        ) {
          cardNumArr[i][j] = '*';
        }
      }
      cardNumArr[i] = numArr[i].join('');
    }
  };

  const insertCardNums = (datas) => {
    for (let i = 0; i < datas.length; i += 1) {
      cardNumArr.push(datas[i].cardNumber);
    }
    changeCardNums(cardNumArr);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios
      .get('http://13.209.26.150:9000/users/payment', {
        headers: {
          Authorization: JSON.parse(token),
        },
      })
      .then((res) => {
        console.log('get result:', res);
        setCards(res.data.result);
        insertCardNums(res.data.result);
      })
      .catch((err) => console.log('get result:', err));
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
                cardNumArr={cardNumArr}
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
