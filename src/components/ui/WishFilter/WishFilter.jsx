import React from 'react';
import { Link } from 'react-router-dom';

function WishFilter({ datasCount }) {
  return (
    <div className="mylike_filter" role="radiogroup">
      <div className="mylike_filter_hscroll">
        <Link
          to="/wishList"
          className="mylike_filter_btn clickable  on "
          role="radio"
        >
          상품 ({datasCount})
        </Link>
        <Link
          to="/wishList"
          className="mylike_filter_btn clickable "
          role="radio"
        >
          브랜드&amp;스토어 (0)
        </Link>
        <Link
          to="/wishList"
          className="mylike_filter_btn clickable "
          role="radio"
        >
          카테고리 (0)
        </Link>
        <Link
          to="/wishList"
          className="mylike_filter_btn clickable "
          role="radio"
        >
          콘텐츠 (0)
        </Link>
        <Link
          to="/wishList"
          className="mylike_filter_btn clickable "
          role="radio"
        >
          포스트 (0)
        </Link>
        <Link
          to="/wishList"
          className="mylike_filter_btn clickable "
          role="radio"
        >
          여행 (0)
        </Link>
      </div>
    </div>
  );
}

export default WishFilter;
