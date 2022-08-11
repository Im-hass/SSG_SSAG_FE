import React from 'react';
import './CartPageParcelFootInfo.scss';

function CartPageParcelFootInfo() {
  return (
    <div className="mnodr_footinfo">
      <button
        type="button"
        className="mnodr_cmplccbn cartTracking"
        name="plccBtn"
        style={{
          backgroundImage:
            "url('https://sui.ssgcdn.com/cmpt/banner/202207/2022071216423641510009634100_30.png')",
        }}
        onClick="location.href='https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005recruitmentPath=L6007001&amp;eventCode=HPG02'"
        data-tracking-cd="00044_000000209_t00001"
        data-tracking-value="2003010236"
      >
        <span className="mnodr_cmplccbn_logo">
          <img
            src="https://sui.ssgcdn.com/cmpt/banner/202207/2022071216424180894012693501_964.png"
            alt="SSG.COM CARD"
          />
        </span>
        <span className="mnodr_cmplccbn_desc">
          스마일클럽 가입비 지원 + 최대 12% 적립
        </span>
      </button>
      <button
        type="button"
        className="mnodr_cmplccbn cartTracking"
        name="ssPlccBtn"
        style={{
          backgroundImage:
            "url('https://sui.ssgcdn.com/cmpt/banner/202202/2022022109481447918457898845_569.png')",
        }}
        onClick="location.href='https://m.ssg.com/event/eventDetail.ssg?promId=1100580609'"
        data-tracking-cd="00044_000000209_t00001"
        data-tracking-value="2003010238"
      >
        <span className="mnodr_cmplccbn_logo">
          <img
            src="https://sui.ssgcdn.com/cmpt/banner/202202/2022022110000988966866483786_123.png"
            alt="SSG.COM CARD"
          />
        </span>
        <span className="mnodr_cmplccbn_desc">
          SSG MONEY 1% 적립 + 4% 추가적립
        </span>
      </button>
      <button
        type="button"
        className="mnodr_footinfo_row layer_filter cartTracking"
        data-type="cardDiscount"
        data-tracking-cd="00044_000000209_t00060"
        data-tracking-value="청구할인혜택보기"
      >
        <i className="mnodr_ic ic_card_icon" />
        <p className="mnodr_footinfo_tit">
          <strong className="mnodr_tx_point">트레이더스삼성카드</strong>
          <span className="mnodr_tx_primary"> 외 6개 카드혜택 확인하기</span>
        </p>
        <span className="mnodr_arr">
          <i className="mnodr_ic ic_arr ty_arr_right">
            <span className="blind">청구할인 혜택안내</span>
          </i>
        </span>
      </button>
      <a
        href="/"
        style={{ display: 'none' }}
        className="modal-fix-open"
        data-layer-target="#_layerDiscountCharge"
      >
        ㅇㅅㅇ
      </a>

      <div
        className="mnodr_modal ty_full"
        role="dialog"
        tabIndex="-1"
        aria-hidden="true"
        id="_layerDiscountCharge"
      >
        <div
          className="mnodr_modal_wrap"
          role="document"
          // tabIndex="0"
        />
      </div>
    </div>
  );
}

export default CartPageParcelFootInfo;
