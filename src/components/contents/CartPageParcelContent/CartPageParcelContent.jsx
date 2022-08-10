import React from 'react';
import {
  CartPageParcelContentSummary,
  CartPageParcelContentUnit,
} from '../index';
import './CartPageParcelContent.scss';

function CartPageParcelContent() {
  return (
    <div className="mnodr_acdo_cont">
      <CartPageParcelContentUnit />
      <CartPageParcelContentSummary />
    </div>
  );
}

export default CartPageParcelContent;
