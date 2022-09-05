import React from 'react';
import axios from 'axios';

function PaymentMeansCardList({ cards, isSubmit, setIsSubmit }) {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  const handleDeleteCard = (data) => {
    const { paymentId } = data;
    const deleteCardUrl = `http://13.209.26.150:9000/users/payment/${paymentId}`;

    axios
      .delete(deleteCardUrl, headers)
      .then(() => {
        setIsSubmit(!isSubmit);
      })
      .catch((err) => new Error(err));
  };

  return (
    <ul className="myssgpay_reserv_cardlst" style={{ userSelect: 'auto' }}>
      {cards &&
        cards.map((card) => (
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
                  {card.cardNumber}
                </div>
              </div>
              <div className="card_btn" style={{ userSelect: 'auto' }}>
                <button
                  type="button"
                  className="btn_remove"
                  data-fncco-cd="08"
                  style={{ userSelect: 'auto' }}
                  onClick={() => handleDeleteCard(card)}
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
