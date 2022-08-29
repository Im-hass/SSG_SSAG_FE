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
  isModalOpen,
  setIsModalOpen,
  setDataId,
  setCartId,
}) {
  return (
    <CartPageParcelContent
      data={data}
      index={index}
      isPut={isPut}
      setIsPut={setIsPut}
      isDelete={isDelete}
      setIsDelete={setIsDelete}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      setDataId={setDataId}
      setCartId={setCartId}
    />
  );
}

export default CartPageParcel;
