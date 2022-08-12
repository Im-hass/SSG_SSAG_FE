import React from 'react';
import { CartPageParcelContent, CartPageParcelHeader } from '../index';

import './CartPageParcel.scss';

function CartPageParcel() {
  return (
    <div
      id="_acdo_parcel"
      name="progress_20"
      className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_"
      data-o-acdo=""
      data-tracking-cd="00044_000000204_t10000"
    >
      <CartPageParcelHeader />
      <CartPageParcelContent />
    </div>
  );
}

export default CartPageParcel;
