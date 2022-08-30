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
              <CartPageParcelContentUnitPayLeft cartItem={cartItem} />
              <CartPageParcelContentUnitPayRight cartItem={cartItem} />
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
