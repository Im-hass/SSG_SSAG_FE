import React from 'react';
import './CartPageParcelContentUnitBtn.scss';

function CartPageParcelContentUnitBtn() {
  return (
    <div className="mnodr_unit_btnarea ty_fillbtn">
      <button
        type="button"
        name="btOrd"
        className="mnodr_unit_btn ty_point cartTracking"
      >
        <span>바로구매</span>
      </button>
    </div>
  );
}

export default CartPageParcelContentUnitBtn;
