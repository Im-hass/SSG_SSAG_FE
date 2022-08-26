import React, { useEffect, useState } from 'react';
import './CartPageParcelContentSummary.scss';

function CartPageParcelContentSummary({ totalPrice }) {
  const [deliveryFee, setDeliveryFee] = useState(3000);

  const checkDeliveryFee = () => {
    if (totalPrice >= 30000) {
      setDeliveryFee(0);
    } else {
      setDeliveryFee(3000);
    }
  };

  useEffect(() => {
    checkDeliveryFee();
  }, [totalPrice]);

  return (
    <div className="mnodr_acdo_summary" id="shppGrp0">
      <strong className="mnodr_tx_gray4 notranslate">
        <span className="ssg_price codr_subtotal_sum">
          {totalPrice.toLocaleString()} + 배송비 {deliveryFee.toLocaleString()}
          원 = {(totalPrice + deliveryFee).toLocaleString()}원
        </span>
        <span className="ssg_tx">&nbsp;(3만원이상 무료배송)</span>
      </strong>
    </div>
  );
}

export default CartPageParcelContentSummary;
