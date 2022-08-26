import React from 'react';
import './CartPageParcelContentUnitUtil.scss';

function CartPageParcelContentUnitUtil() {
  const handleDeleteCartItem = () => {
    console.log('삭제닷!');
  };

  return (
    <div className="mnodr_unit_util">
      <button
        type="button"
        className="mnodr_unit_pin1 cartTracking"
        name="btKeep"
      >
        <i className="mnodr_ic ic_pin">
          <span className="blind">계속 담아두기</span>
        </i>
      </button>
      <button
        type="button"
        className="mnodr_unit_del cartTracking"
        name="btnDel"
        onClick={handleDeleteCartItem}
      >
        <i className="mnodr_ic ic_del">
          <span className="blind">상품 삭제</span>
        </i>
      </button>
    </div>
  );
}

export default CartPageParcelContentUnitUtil;
