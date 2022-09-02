import React from 'react';

function WishFilter() {
  return (
    <div className="mylike_filter" role="radiogroup">
      <div className="mylike_filter_hscroll">
        <a
          // href="javascript:goPageMove('10','0')"
          href="/"
          className="mylike_filter_btn clickable  on "
          role="radio"
          aria-checked="true"
          data-react-tarea="좋아요|전체보기_유형탭|상품_클릭"
        >
          상품 (35)
        </a>
        <a
          // href="javascript:goPageMove('30','0')"
          href="/"
          className="mylike_filter_btn clickable "
          role="radio"
          aria-checked="false"
          data-react-tarea="좋아요|전체보기_유형탭|브랜드&amp;스토어_클릭"
        >
          브랜드&amp;스토어 (2)
        </a>
        <a
          // href="javascript:goPageMove('20','0')"
          href="/"
          className="mylike_filter_btn clickable "
          role="radio"
          aria-checked="false"
          data-react-tarea="좋아요|전체보기_유형탭|카테고리_클릭"
        >
          카테고리 (0)
        </a>
        <a
          // href="javascript:goPageMove('CC','0')"
          href="/"
          className="mylike_filter_btn clickable "
          role="radio"
          aria-checked="false"
          data-react-tarea="좋아요|전체보기_유형탭|콘텐츠_클릭"
        >
          콘텐츠 (0)
        </a>
        <a
          // href="javascript:goPageMove('110','0')"
          href="/"
          className="mylike_filter_btn clickable "
          role="radio"
          aria-checked="false"
          data-react-tarea="좋아요|전체보기_유형탭|포스트_클릭"
        >
          포스트 (0)
        </a>
        <a
          // href="javascript:goPageMove('100','0')"
          href="/"
          className="mylike_filter_btn clickable "
          role="radio"
          aria-checked="false"
          data-react-tarea="좋아요|전체보기_유형탭|트립_클릭"
        >
          여행 (0)
        </a>
      </div>
    </div>
  );
}

export default WishFilter;
