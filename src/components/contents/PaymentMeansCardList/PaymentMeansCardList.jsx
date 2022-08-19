import React, { useEffect, useState } from 'react';

const axios = require('axios');

const cardNumArr = [];

function PaymentMeansCardList() {
  const [cards, setCards] = useState([]);

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
    axios
      .get('http://10.10.10.174:8081/users/payment', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NjA4MDU1NDMsImV4cCI6MTY2MDgwNzM0M30._Te4qgbQBxnsNxW9B8pHFaqkBQiwiMRnjGg1bjodgeg',
        },
      })
      .then((res) => {
        console.log(res);
        setCards(res.data.result);
        insertCardNums(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ul className="myssgpay_reserv_cardlst" style={{ userSelect: 'auto' }}>
      {cards &&
        cards.map((card, i) => (
          <li
            key={card.paymentId}
            className="myssgpay_reserv_card"
            style={{ userSelect: 'auto' }}
          >
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
                    backgroundImage: `url('${card.cardImg.imgUrl}')`,
                    userSelect: 'auto',
                  }}
                >
                  <span className="blind" style={{ userSelect: 'auto' }}>
                    {card.cardCompany} 로고
                  </span>
                </span>
              </div>
              <div className="card_info" style={{ userSelect: 'auto' }}>
                <div className="card_name" style={{ userSelect: 'auto' }}>
                  {card.cardCompany}
                </div>
                <div className="card_num" style={{ userSelect: 'auto' }}>
                  {cardNumArr[i]}
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
        ))}
    </ul>
  );
}

export default PaymentMeansCardList;
