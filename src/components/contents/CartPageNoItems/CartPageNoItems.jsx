import React from 'react';
import './CartPageNoItems.scss';

function CartPageNoItems() {
  return (
    <div className="mnodr_nodata">
      <p className="mnodr_tx_tit">장바구니에 담긴 상품이 없습니다.</p>
      <div className="mnodr_btn_area ty_mgtop" />
    </div>
  );
}

export default CartPageNoItems;
