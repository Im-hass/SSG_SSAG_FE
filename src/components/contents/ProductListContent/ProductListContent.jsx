import React from 'react';
import CategoryDetailList from '../../product/CategoryDetailList/CategoryDetailList';

function ProductListContent({ mediumCateList }) {
  return (
    <div id="m_content" className="react-area">
      <CategoryDetailList mediumCateList={mediumCateList} />
    </div>
  );
}

export default ProductListContent;
