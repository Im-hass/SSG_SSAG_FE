import React from 'react';
import {
  CartPageParcelContentUnitCont,
  CartPageParcelContentUnitThmb,
} from '../index';
import './CartPageParcelContentUnit.scss';

function CartPageParcelContentUnit({
  data,
  index,
  sellingPrice,
  setSellingPrice,
  cartProductCount,
  setCartProductCount,
  totalPrice,
  isPut,
  setIsPut,
  isDelete,
  setIsDelete,
  isModalOpen,
  setIsModalOpen,
  setDataId,
  setCartId,
}) {
  const productImgUrl = data.productOption.product.imgUrl;

  return (
    <div className="mnodr_unit">
      <div id="mnodr_unit_5092900303" className="pay_item_area mnodr_unit_item">
        <CartPageParcelContentUnitThmb productImgUrl={productImgUrl} />
        <CartPageParcelContentUnitCont
          data={data}
          index={index}
          sellingPrice={sellingPrice}
          setSellingPrice={setSellingPrice}
          cartProductCount={cartProductCount}
          setCartProductCount={setCartProductCount}
          totalPrice={totalPrice}
          isPut={isPut}
          setIsPut={setIsPut}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setDataId={setDataId}
          setCartId={setCartId}
        />
      </div>
    </div>
  );
}

export default CartPageParcelContentUnit;
