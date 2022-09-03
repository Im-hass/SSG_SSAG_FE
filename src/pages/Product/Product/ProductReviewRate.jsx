import React from 'react';

function ProductReviewRate({ productData }) {
  const rateAvg = productData.reviewTotal.reviewAvg;
  const rateStars = (productData.reviewTotal.reviewAvg / 5) * 100;
  const reviewCnt = productData.reviewTotal.reviewCount;

  return (
    <div className="mndtl_cmt_rate">
      <span className="mndtl_star18">
        <span className="mndtl_star18_per" style={{ width: `${rateStars}%` }} />
        <span className="blind">
          별점 5점 중 <em>{rateAvg}</em>점{' '}
        </span>
      </span>
      <span className="mndtl_rate_score" aria-hidden="true">
        {rateAvg}/5
      </span>
      <div className="mndtl_rate_count">
        <div className="mndtl_rate_total">
          <span className="mndtl_rate_totalnum">{reviewCnt}</span>건 리뷰
        </div>
      </div>
    </div>
  );
}

export default ProductReviewRate;
