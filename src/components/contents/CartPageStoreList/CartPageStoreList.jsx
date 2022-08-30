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
  isModalOpen,
  setIsModalOpen,
  setDataId,
  setCartId,
}) {
  const cartItems = storeList.cartList;

  return (
    <>
      {cartItems.map((cartItem, index) => (
        <div key={cartItem.cartId} className="pay_item_area mnodr_unit_item">
          <CartPageParcelContentUnitThmb cartItem={cartItem} index={index} />

          <div className="mnodr_unit_cont">
            <CartPageParcelContentUnitInfo />
            <CartPageParcelContentUnitUtil
              cartItem={cartItem}
              isDelete={isDelete}
              setIsDelete={setIsDelete}
            />
            <CartPageParcelContentUnitTit cartItem={cartItem} index={index} />

            <div className="mnodr_unit_prdpay">
              <CartPageParcelContentUnitPayLeft
                cartItem={cartItem}
                isCnt={isCnt}
              />
              <CartPageParcelContentUnitPayRight
                cartItem={cartItem}
                isCnt={isCnt}
                setIsCnt={setIsCnt}
              />
            </div>

            <CartPageParcelContentUnitBtn
              cartItem={cartItem}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              setDataId={setDataId}
              setCartId={setCartId}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default CartPageStoreList;
