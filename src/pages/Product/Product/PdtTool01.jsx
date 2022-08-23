import React from 'react';
import './style/PdtTool01.scss';

function PdtTool01({ buyBtn, handleOpenBtn }) {
  return (
    <div className={`btm_bgn_in dps1 ${buyBtn}`}>
      <ul className="btm_bgn_bx type_other1">
        <li className="ty_like">
          <span className="cmlike _js_cmlike interestIt clickable">
            <input type="hidden" name="attnDivCd" value="10" />
            <input type="hidden" name="siteNo" value="6004" />
            <input type="hidden" name="attnTgtIdnfNo1" value="1000310147566" />
            <input type="hidden" name="attnTgtIdnfNo2" value="6005" />
            <input type="hidden" name="notiTitle" value="론디 01(BR)" />
            <input
              type="hidden"
              name="notiImgPath"
              value="https://sitem.ssgcdn.com/66/75/14/item/1000310147566_i1_70.jpg"
            />
            <input type="hidden" name="sellStatCd" value="20" />
            <input type="hidden" name="soldoutYn" value="N" />
            <input type="hidden" name="checked" value="N" />
            <input type="hidden" name="uitemIdAndSalestrNo" value="00000" />

            <button
              type="button"
              className="cmlike_btn _js_cmlike_btn enp_mobon_wish"
            >
              <span className="cmlike_ico">
                <i className="cmlike_primary_l" />
                <span className="sr_off">
                  <span className="blind">관심상품 취소</span>
                </span>
                <span className="sr_on">
                  <span className="blind">관심상품 등록</span>
                </span>
              </span>
            </button>
          </span>
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
