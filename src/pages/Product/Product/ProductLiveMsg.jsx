import React from 'react';

function ProductLiveMsg() {
  return (
    <div className="mndtl_live" id="mndtl_live_cont">
      <div className="mndtl_live_wrap">
        <ul className="mndtl_live_list swiper-wrapper">
          <li className="mndtl_live_bx swiper-slide">
            <div className="mndtl_live_msg">
              <p className="mndtl_live_tx">
                상품이 딱 1개 남았어요. 구매 시 재고가 소진 될 수 있으니
                서두르세요!&nbsp;
              </p>
              <button type="button" className="mndtl_btn_liveclose clickable">
                <i className="mndtl_ic_cancle" />
                <span className="blind">라이브 메시지 닫기</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductLiveMsg;
