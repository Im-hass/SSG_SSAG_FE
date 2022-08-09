import React from 'react';
import './CartPageParcelContentUnitUtil.scss';

function CartPageParcelContentUnitUtil() {
  return (
    <div className="mnodr_unit_util">
      <button
        type="button"
        className="mnodr_unit_pin1 cartTracking"
        name="btKeep"
        data-tracking-cd="00044_000000204_t00060"
        data-tracking-value="계속담아두기"
      >
        <i className="mnodr_ic ic_pin">
          <span className="blind">계속 담아두기</span>
        </i>
      </button>
      <button
        type="button"
        className="mnodr_unit_del cartTracking"
        name="btnDel"
        data-tracking-cd="00044_000000204_t00060"
        data-tracking-value="상품삭제"
      >
        <i className="mnodr_ic ic_del">
          <span className="blind">상품 삭제</span>
        </i>
      </button>
    </div>
  );
}

export default CartPageParcelContentUnitUtil;
