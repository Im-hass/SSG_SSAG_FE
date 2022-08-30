import React, { useState } from 'react';
import {
  CartPageParcelContentSummary,
  CartPageParcelContentUnit,
} from '../index';
import './CartPageParcelContent.scss';

function CartPageParcelContent({
  data,
  index,
  isPut,
  setIsPut,
  isDelete,
  setIsDelete,
}) {
  const [sellingPrice, setSellingPrice] = useState(0);
  const [cartProductCount, setCartProductCount] = useState(data.count);
  const totalPrice = sellingPrice * cartProductCount;

  return (
    <div className="mnodr_acdo_cont">
      <CartPageParcelContentUnit
        data={data}
        index={index}
        sellingPrice={sellingPrice}
        setSellingPrice={setSellingPrice}
        cartProductCount={cartProductCount}
        setCartProductCount={setCartProductCount}
        totalPrice={totalPrice}
        isPut={isPut}
        setIsPut={setIsPut}
        isDelete={isDelete}
        setIsDelete={setIsDelete}
      />
      <CartPageParcelContentSummary totalPrice={totalPrice} />
    </div>
  );
}

export default CartPageParcelContent;
