import React from 'react';
import { LikeButton } from '../../../components/ui/LikeButton';
import './style/PdtTool01.scss';

function PdtTool01({
  buyBtn,
  productData,
  handleOpenBtn,
  isWishChange,
  setIsWishChange,
}) {
  return (
    <div className={`btm_bgn_in dps1 ${buyBtn}`}>
      <ul className="btm_bgn_bx type_other1">
        <li className="ty_like">
          <LikeButton
            wishDto={productData.wishDto}
            productId={productData.productId}
            isWishChange={isWishChange}
            setIsWishChange={setIsWishChange}
          />
        </li>
        <li>
          <a
            // href="javascript:;"
            href="/"
            className="mndtl_btn type05 line type_gift _js_mndtl_opt_toggle_btn clickable"
            target="_parent"
          >
            <span className="btn_tx">
              <i className="ico_gift_box_btm" />
              선물하기
            </span>
          </a>
        </li>
        <li>
          <button
            type="button"
            className="mndtl_btn type01 line _js_mndtl_opt_toggle_btn clickable"
            target="_parent"
            onClick={() => handleOpenBtn('open')}
          >
            <span className="btn_tx">구매하기</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PdtTool01;
