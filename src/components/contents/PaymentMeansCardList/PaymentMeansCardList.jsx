import React from 'react';
import axios from 'axios';

function PaymentMeansCardList({ cards, isSubmit, setIsSubmit }) {
  const handleDeleteCard = (data, index) => {
    const { paymentId } = data;
    const token = localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    axios
      .delete(`http://13.209.26.150:9000/users/payment/${paymentId}`, headers)
      .then((res) => {
        console.log('delete result:', res);
        setIsSubmit(!isSubmit);
      })
      .catch((err) => console.log('delete err:', err));
  };

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
                  {card.cardNumber}
                </div>
              </div>
              <div className="card_btn" style={{ userSelect: 'auto' }}>
                <button
                  type="button"
                  className="btn_remove"
                  data-fncco-cd="08"
                  style={{ userSelect: 'auto' }}
                  onClick={() => handleDeleteCard(card, i)}
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
