import React from 'react';
import './CartPageParcelContentSummary.scss';

function CartPageParcelContentSummary() {
  return (
    <div className="mnodr_acdo_summary" id="shppGrp0">
      <strong className="mnodr_tx_gray4 notranslate">
        <span className="ssg_price codr_subtotal_sum">
          20,700원 + 배송비 3,000원 = 23,700원
        </span>
        <span className="ssg_tx">&nbsp;(3만원이상 무료배송)</span>
      </strong>
    </div>
  );
}

export default CartPageParcelContentSummary;
