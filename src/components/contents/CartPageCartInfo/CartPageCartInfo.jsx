import React from 'react';
import './CartPageCartInfo.scss';

function CartPageCartInfo() {
  return (
    <div className="mnodr_cartinfo">
      <div className="mnodr_form_sec">
        <h3 className="mnodr_form_tit">
          <strong>장바구니 상품안내</strong>
        </h3>
        <ul className="mnodr_bullst ty2">
          <li>장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
          <li>
            상품 우측 상단의 핀셋 아이콘으로 ‘계속 담아두기’를 설정해 두시면
            시간이 지나도 상품이 삭제되지 않습니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CartPageCartInfo;
