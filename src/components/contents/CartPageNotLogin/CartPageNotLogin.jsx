import React from 'react';
import './CartPageNotLogin.scss';

function CartPageNotLogin() {
  return (
    <>
      <div className="mnodr_info_header">
        <div className="mnodr_info_row">
          <i className="mnodr_ic ic_power" />
          <span className="mnodr_info_tit ty2">로그인을 해보세요.</span>
        </div>
        <p className="mnodr_tx_desc mnodr_tx_gray">
          장바구니에 담아두신 상품을 나중에도 확인하실 수 있습니다.
        </p>
      </div>
      <div className="mnodr_info_contents">
        <div className="mnodr_info_btnarea">
          <button className="mnodr_info_btn" type="button" name="loginBtn">
            로그인 하기
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPageNotLogin;
