import React from 'react';

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
            <a href={`/category/${largeCategoryId}`} className="clickable">
              상품 전체보기
            </a>
          </li>
          {mediumCategoryList &&
            mediumCategoryList.map((list) => (
              <li key={list.mediumCategoryId}>
                <a
                  href={`/category/${largeCategoryId}/${list.mediumCategoryId}`}
                  className="clickable"
                >
                  {list.mediumCategoryTitle}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SubCategoryList;
