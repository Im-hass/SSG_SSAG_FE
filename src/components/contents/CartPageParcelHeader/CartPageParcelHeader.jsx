import React from 'react';
import './CartPageParcelHeader.scss';

function CartPageParcelHeader() {
  return (
    <div className="mnodr_acdo_header">
      <span className="mnodr_chk ty_group">
        <input
          type="checkbox"
          className="blind codr_inp_chk cartTracking"
          name="btChekShppGrp"
          id="20"
        />
        <label htmlFor="20">
          <span className="blind">택배배송상품전체선택</span>
        </label>
      </span>
      <div className="mnodr_acdo_titwrap">
        <div className="mnodr_acdo_titarea">
          <label htmlFor="20">
            <span className="blind">택배배송상품전체선택</span>
            <h3 className="mnodr_acdo_tit">택배배송</h3>
          </label>

          <p className="mnodr_acdo_subtit" />
        </div>
      </div>
    </div>
  );
}

export default CartPageParcelHeader;
