import React, { useState } from 'react';
import { CartPageParcelContentSummary, CartPageStoreList } from '../index';
import './CartPageParcel.scss';

function CartPageParcel({
  cartData,
  isDelete,
  setIsDelete,
  isModalOpen,
  setIsModalOpen,
  setDataId,
  setCartId,
}) {
  return (
    <div className="mnodr_acdo_cont">
      {cartData &&
        cartData.storeList.map((storeList, i) => (
          <div key={storeList.storeId} className="mnodr_unit">
            <CartPageStoreList
              storeList={storeList}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setDataId={setDataId}
              setCartId={setCartId}
            />
            <CartPageParcelContentSummary storeList={storeList} />
          </div>
        ))}
    </div>
  );
}

export default CartPageParcel;
