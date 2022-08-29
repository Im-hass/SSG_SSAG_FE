import React from 'react';
import { CartPageParcelContent } from '../index';

import './CartPageParcel.scss';

function CartPageParcel({
  data,
  index,
  isPut,
  setIsPut,
  isDelete,
  setIsDelete,
}) {
  return (
    <CartPageParcelContent
      data={data}
      index={index}
      isPut={isPut}
      setIsPut={setIsPut}
      isDelete={isDelete}
      setIsDelete={setIsDelete}
    />
  );
}

export default CartPageParcel;
