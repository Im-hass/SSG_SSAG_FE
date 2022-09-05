import React from 'react';
import { Link } from 'react-router-dom';
import './CartPageControl.scss';

function CartPageControl() {
  return (
    <div className="mnodr_control mnodr_sticky">
      <div className="mnodr_control_group">
        <span className="mnodr_chk">
          <input
            type="checkbox"
            id="chk_all"
            name="btChekAll"
            className="blind cartTracking"
          />
          <label htmlFor="chk_all">
            <span className="blind">모든상품전체선택</span>
          </label>
        </span>
        <label htmlFor="chk_all" className="mnodr_control_tx">
          <span className="df">전체</span>
          <span className="sm">전체</span>
        </label>

        <span className="mnodr_control_tx">
          <Link
            to="/cart"
            className="mnodr_control_link layer_filter cartTracking"
          >
            <span className="mnodr_selbox_tx"> 배송방법바꾸기 </span>
          </Link>
        </span>
      </div>
      <span className="mnodr_control_delete">
        <Link to="/cart" className="df cartTracking" name="btDelChekItemAll">
          품절상품삭제
        </Link>
        <Link to="/cart" className="sm cartTracking" name="btDelChekItemAll">
          품절삭제
        </Link>
      </span>
    </div>
  );
}

export default CartPageControl;
