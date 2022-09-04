import React from 'react';
import { CartPageParcelContentSummary, CartPageStoreList } from '../index';
import './CartPageParcel.scss';

function CartPageParcel({
  cartData,
  isCnt,
  setIsCnt,
  isDelete,
  setIsDelete,
  isOptionModalOpen,
  setIsOptionModalOpen,
  setIsSaleInfoModalOpen,
  isAriaHidden,
  setIsAriaHidden,
  setProductId,
  setCartId,
  setSaleInfoItem,
  setStoreIndex,
  setCartIndex,
}) {
  return (
    <div className="mnodr_acdo_cont">
      {cartData &&
        cartData.storeList.map((storeList, storeIndex) => (
          <div key={storeList.storeId} className="mnodr_unit">
            <CartPageStoreList
              storeList={storeList}
              isCnt={isCnt}
              setIsCnt={setIsCnt}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
              isOptionModalOpen={isOptionModalOpen}
              setIsOptionModalOpen={setIsOptionModalOpen}
              setIsSaleInfoModalOpen={setIsSaleInfoModalOpen}
              isAriaHidden={isAriaHidden}
              setIsAriaHidden={setIsAriaHidden}
              setProductId={setProductId}
              setCartId={setCartId}
              setSaleInfoItem={setSaleInfoItem}
              setStoreIndex={setStoreIndex}
              setCartIndex={setCartIndex}
              storeIndex={storeIndex}
            />
            <CartPageParcelContentSummary storeList={storeList} />
          </div>
        ))}
    </div>
  );
}

export default CartPageParcel;
