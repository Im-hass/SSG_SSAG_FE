import React from 'react';
import { CartPageParcelContent, CartPageParcelHeader } from '../index';

import './CartPageParcel.scss';

function CartPageParcel() {
  return (
    <div
      id="_acdo_parcel"
      name="progress_20"
      className="mnodr_acdo v2 ty_parcel progress_20 addOrdTab addOrd_"
    >
      <CartPageParcelHeader />
      <CartPageParcelContent />
    </div>
  );
}

export default CartPageParcel;
