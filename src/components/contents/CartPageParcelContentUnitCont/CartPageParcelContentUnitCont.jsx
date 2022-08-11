import React from 'react';
import {
  CartPageParcelContentUnitBtn,
  CartPageParcelContentUnitInfo,
  CartPageParcelContentUnitPayLeft,
  CartPageParcelContentUnitPayRight,
  CartPageParcelContentUnitTit,
  CartPageParcelContentUnitUtil,
} from '../index';
import './CartPageParcelContentUnitCont.scss';

function CartPageParcelContentUnitCont() {
  return (
    <div className="mnodr_unit_cont">
      <CartPageParcelContentUnitInfo />
      <CartPageParcelContentUnitUtil />
      <CartPageParcelContentUnitTit />

      <div className="mnodr_unit_prdpay">
        <CartPageParcelContentUnitPayLeft />
        <CartPageParcelContentUnitPayRight />
      </div>

      <CartPageParcelContentUnitBtn />
    </div>
  );
}

export default CartPageParcelContentUnitCont;
