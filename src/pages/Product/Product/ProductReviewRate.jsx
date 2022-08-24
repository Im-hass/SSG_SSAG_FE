import React from 'react';

function ProductReviewRate() {
  return (
    <div className="mndtl_cmt_rate">
      <span className="mndtl_star18">
        <span className="mndtl_star18_per" style={{ width: '96%' }} />
        <span className="blind">
          별점 5점 중 <em>4.8</em>점{' '}
        </span>
      </span>
      <span className="mndtl_rate_score" aria-hidden="true">
        4.8/5
      </span>
      <div className="mndtl_rate_count">
        <div className="mndtl_rate_total">
          <span className="mndtl_rate_totalnum">29</span>건 리뷰
        </div>
      </div>
    </div>
  );
}

export default ProductReviewRate;
