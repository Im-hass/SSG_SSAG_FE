import React from 'react';

function ProductReview() {
  return (
    <div className="mndtl_modal_inr" role="document">
      <header className="mndtl_modal_head">
        <div className="mndtl_modal_top">
          <h2 className="blind">리뷰 크게보기</h2>

          <a
            // href="#"
            href="/"
            className="mndtl_btn_close modal-close-btn"
            target=""
          >
            <span className="blind">레이어팝업 닫기</span>
          </a>
        </div>
      </header>
      <div className="mndtl_modal_cont">
        <div className="mndtl_modal_scroll" />
      </div>
    </div>
  );
}

export default ProductReview;
