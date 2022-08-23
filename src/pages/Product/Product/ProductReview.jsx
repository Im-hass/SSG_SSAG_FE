import React from 'react';

function ProductReview() {
  return (
    <div className="mndtl_modal_inr" role="document">
      <header className="mndtl_modal_head">
        <div className="mndtl_modal_top">
          <h2 className="blind">리뷰 크게보기</h2>
          <div className="mndtl_review_pagination v2 swiper-pagination-fraction">
            <span className="blind">현재 슬라이드번호</span>
            <span className="mndtl_review_current" />
            <span className="mndtl_review_separator">/</span>
            <span className="blind">전체 슬라이드 개수</span>
            <span className="mndtl_review_total" />
          </div>
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
