import React from 'react';

function FilterList({ data }) {
  const { isActive, isRecommend, title, value } = data;

  return (
    <li className={isActive ? 'active' : ''}>
      <a title={title} href={`/product/${title}`} className="clickable">
        {value}
      </a>
      {isRecommend && (
        <button
          type="button"
          onClick="alert('추천순 상품의 판매량과 정확도 등을 점수화하여 정렬하며, 광고상품의 경우 별도 기준으로 상단에 정렬됩니다.');"
          className="btn_info"
        >
          <span className="blind">추천순 설명 보기</span>
        </button>
      )}
    </li>
  );
}

export default FilterList;
