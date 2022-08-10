import React from 'react';
import './CartPageNoData.scss';

function CartPageNoData() {
  return (
    <div className="mnodr_nodata">
      <i className="mnodr_ic ic_basket" />
      <p className="mnodr_tx_tit">장바구니에 담긴 상품이 없습니다.</p>
      <p className="mnodr_tx_desc">
        로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!
      </p>
      <div className="mnodr_btn_area ty_mgtop">
        <button
          type="button"
          name="loginBtn"
          className="mnodr_btn ty_point ty_lg codr_btn_login"
        >
          <span className="mnodr_btn_tx">로그인하기</span>
        </button>
      </div>
    </div>
  );
}

export default CartPageNoData;
