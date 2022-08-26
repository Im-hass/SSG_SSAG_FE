import React from 'react';
import { CartPageParcelContent } from '../index';

import './CartPageParcel.scss';

function CartPageParcel({ data, index, isPut, setIsPut }) {
  return (
    <CartPageParcelContent
      data={data}
      index={index}
      isPut={isPut}
      setIsPut={setIsPut}
    />
  );
}

export default CartPageParcel;
