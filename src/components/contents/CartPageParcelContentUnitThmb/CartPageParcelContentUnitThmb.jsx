import React from 'react';
import './CartPageParcelContentUnitThmb.scss';

function CartPageParcelContentUnitThmb() {
  return (
    <div className="mnodr_unit_thmb">
      <span className="mnodr_chk">
        <input
          type="checkbox"
          className="blind cartTracking"
          id="chk_order_5092900303"
          name="cbCartId"
          value="5092900303"
        />
        <label htmlFor="chk_order_5092900303">
          <span className="blind">상품선택</span>
        </label>
      </span>
      <span className="mnodr_unit_img" aria-hidden="true">
        <img
          src="https://sitem.ssgcdn.com/13/55/82/item/1000312825513_i1_140.jpg"
          alt="(남성)배색 립 캐주얼 양말 3족 세트(RA122B-52G)3컬러 SET"
          id="img5092900303"
          width="75"
          height="75"
        />
      </span>
    </div>
  );
}

export default CartPageParcelContentUnitThmb;
