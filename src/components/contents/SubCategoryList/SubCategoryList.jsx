import React from 'react';
import { Link } from 'react-router-dom';

const BOX_HEIGHT = [
  150, 120, 150, 150, 180, 150, 90, 150, 150, 120, 150, 120, 120,
];

function SubCategoryList({ isSelected, largeCategoryId, mediumCategoryList }) {
  return (
    <div
      className={
        isSelected[largeCategoryId - 1]
          ? 'clnb_lst_cate selected'
          : 'clnb_lst_cate'
      }
      style={{ height: `${BOX_HEIGHT[largeCategoryId - 1]}px` }}
    >
      {/* 클릭 시 selected 추가 */}
      <div className="clnb_lst">
        <ul className="cate_view">
          <li>
            <Link to={`/products/${largeCategoryId}/0`} className="clickable">
              상품 전체보기
            </Link>
          </li>
          {mediumCategoryList &&
            mediumCategoryList.map((list) => (
              <li key={list.mediumCategoryId}>
                <Link
                  to={`/products/${largeCategoryId}/${list.mediumCategoryId}`}
                  className="clickable"
                >
                  {list.mediumCategoryTitle}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SubCategoryList;
