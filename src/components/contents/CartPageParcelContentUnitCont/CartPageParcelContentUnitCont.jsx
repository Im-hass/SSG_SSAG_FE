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

function CartPageParcelContentUnitCont({
  data,
  index,
  sellingPrice,
  setSellingPrice,
  cartProductCount,
  setCartProductCount,
  totalPrice,
  isPut,
  setIsPut,
}) {
  return (
    <div className="mnodr_unit_cont">
      <CartPageParcelContentUnitInfo />
      <CartPageParcelContentUnitUtil />
      <CartPageParcelContentUnitTit data={data} />

      <div className="mnodr_unit_prdpay">
        <CartPageParcelContentUnitPayLeft
          data={data}
          sellingPrice={sellingPrice}
          setSellingPrice={setSellingPrice}
          totalPrice={totalPrice}
        />
        <CartPageParcelContentUnitPayRight
          data={data}
          index={index}
          cartProductCount={cartProductCount}
          setCartProductCount={setCartProductCount}
          isPut={isPut}
          setIsPut={setIsPut}
        />
      </div>

      <CartPageParcelContentUnitBtn />
    </div>
  );
}

export default CartPageParcelContentUnitCont;
