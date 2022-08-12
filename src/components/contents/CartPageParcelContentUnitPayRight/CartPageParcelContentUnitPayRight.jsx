import React from 'react';
import './CartPageParcelContentUnitPayRight.scss';

function CartPageParcelContentUnitPayRight() {
  return (
    <div className="mnodr_unit_r">
      <div className="mnodr_amount">
        <div className="mnodr_opa_area">
          <span className="blind">현재수량</span>
          <span className="mnodr_opa_tx ordQty">1</span>
        </div>
        <button
          type="button"
          name="btUpdOrdQtyMinus"
          className="mnodr_btn_minus cartTracking"
        >
          <i className="mnodr_ic ic_minus">
            <span className="blind">주문수량빼기</span>
          </i>
        </button>
        <button
          type="button"
          name="btUpdOrdQtyPlus"
          className="mnodr_btn_plus cartTracking"
        >
          <i className="mnodr_ic ic_plus">
            <span className="blind">주문수량더하기</span>
          </i>
        </button>
      </div>
    </div>
  );
}

export default CartPageParcelContentUnitPayRight;
