import React from 'react';
import './CartPageParcelToolBar.scss';

function CartPageParcelToolBar() {
  return (
    <div className="mnodr_toolbar_ctn">
      <div className="mnodr_toolbar_cont">
        <p className="mnodr_tx_desc" id="bar_price">
          <span className="mnodr_cnt">전체상품 1개</span>
          <span className="ssg_tx" id="toolbarCst">
            20,700원 + 배송비 3,000원 =
          </span>
          <span className="mnodr_tx_total">
            <span className="ssg_tx" id="toolbarTotCst">
              {' '}
              23,700원
            </span>
          </span>
        </p>
        <p
          id="dmndDisplay"
          className="mnodr_tx_desc mnodr_tx_point"
          style={{ display: 'block' }}
        >
          <a
            // href="javascript:void(0);"
            href="/"
            className="mnodr_tx_link2 layer_filter cartTracking"
            data-btn-target="#_layerDiscountCharge"
            data-type="cardDiscount"
            data-tracking-cd="00044_000000094_t00060"
            data-tracking-value="청구할인혜택보기"
          >
            청구할인 혜택보기
            <i className="icon ty_xs icon_chevron_right" aria-hidden="true" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default CartPageParcelToolBar;
