import React from 'react';
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
            asdfasf
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
          <a
            // href="javascript:void(0);"
            href="/"
            className="mnodr_control_link layer_filter cartTracking"
          >
            <span className="mnodr_selbox_tx"> 배송방법바꾸기 </span>
          </a>
          <a href="/" style={{ display: 'none' }} className="modal-fix-open">
            ㅇㅅㅇ
          </a>
        </span>
      </div>
      <span className="mnodr_control_delete">
        <a
          // href="javascript:void(0);"
          href="/"
          className="df cartTracking"
          name="btDelChekItemAll"
        >
          품절상품삭제
        </a>
        <a
          // href="javascript:void(0);"
          href="/"
          className="sm cartTracking"
          name="btDelChekItemAll"
        >
          품절삭제
        </a>
      </span>
    </div>
  );
}

export default CartPageControl;
