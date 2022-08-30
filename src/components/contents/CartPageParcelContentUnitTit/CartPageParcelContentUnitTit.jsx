import React from 'react';
import './CartPageParcelContentUnitTit.scss';

function CartPageParcelContentUnitTit({ cartItem, index }) {
  const productName = cartItem.productOptionDto.productDto.name;
  const productColor = cartItem.productOptionDto.color;
  const productSize = cartItem.productOptionDto.size;

  return (
    <p className="mnodr_unit_tit">
      <a
        className="cartTracking"
        // href="javascript:void(0);"
        href="/"
        name="itemNmBtn"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span className="mnodr_unit_name">{productName}</span>
        <span>색상: {productColor}</span>
        <span>사이즈: {productSize}</span>
      </a>
    </p>
  );
}

export default CartPageParcelContentUnitTit;
