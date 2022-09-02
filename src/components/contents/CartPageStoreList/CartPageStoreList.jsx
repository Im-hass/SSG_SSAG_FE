import React from 'react';
import {
  CartPageParcelContentUnitThmb,
  CartPageParcelContentUnitBtn,
  CartPageParcelContentUnitInfo,
  CartPageParcelContentUnitPayLeft,
  CartPageParcelContentUnitPayRight,
  CartPageParcelContentUnitTit,
  CartPageParcelContentUnitUtil,
} from '../index';

function CartPageStoreList({
  storeList,
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
}) {
  const cartItems = storeList.cartList;

  return (
    <>
      {cartItems.map((cartItem) => (
        <div key={cartItem.cartId} className="pay_item_area mnodr_unit_item">
          <CartPageParcelContentUnitThmb cartItem={cartItem} />

          <div className="mnodr_unit_cont">
            <CartPageParcelContentUnitInfo />
            <CartPageParcelContentUnitUtil
              cartItem={cartItem}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
            />
            <CartPageParcelContentUnitTit cartItem={cartItem} />

            <div className="mnodr_unit_prdpay">
              <CartPageParcelContentUnitPayLeft
                cartItem={cartItem}
                isCnt={isCnt}
                setIsSaleInfoModalOpen={setIsSaleInfoModalOpen}
                isAriaHidden={isAriaHidden}
                setIsAriaHidden={setIsAriaHidden}
                setSaleInfoItem={setSaleInfoItem}
              />
              <CartPageParcelContentUnitPayRight
                cartItem={cartItem}
                isCnt={isCnt}
                setIsCnt={setIsCnt}
              />
            </div>

            <CartPageParcelContentUnitBtn
              cartItem={cartItem}
              isOptionModalOpen={isOptionModalOpen}
              setIsOptionModalOpen={setIsOptionModalOpen}
              setProductId={setProductId}
              setCartId={setCartId}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default CartPageStoreList;
