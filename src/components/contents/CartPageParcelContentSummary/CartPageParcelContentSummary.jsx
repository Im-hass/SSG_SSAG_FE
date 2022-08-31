import React, { useEffect, useState } from 'react';
import './CartPageParcelContentSummary.scss';

function CartPageParcelContentSummary({ storeList }) {
  const [deliveryFee, setDeliveryFee] = useState(3000);
  const sellingPrice = storeList.storeAmount;
  const totalPrice = sellingPrice + deliveryFee;

  const checkDeliveryFee = () => {
    if (sellingPrice >= 30000) {
      setDeliveryFee(0);
    } else {
      setDeliveryFee(3000);
    }
  };

  useEffect(() => {
    checkDeliveryFee();
  }, [sellingPrice]);

  return (
    <div className="mnodr_acdo_summary" id="shppGrp0">
      <strong className="mnodr_tx_gray4 notranslate">
        <span className="ssg_price codr_subtotal_sum">
          {sellingPrice.toLocaleString()} + 배송비{' '}
          {deliveryFee.toLocaleString()}원 = {totalPrice.toLocaleString()}원
        </span>
        <span className="ssg_tx">&nbsp;(3만원이상 무료배송)</span>
      </strong>
    </div>
  );
}

export default CartPageParcelContentSummary;
