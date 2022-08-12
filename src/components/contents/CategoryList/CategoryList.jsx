import React from 'react';
import { CategoryItem } from '../CategoryItem';
import { CATEGORY_LIST_DATA } from '../../../assets/datas/CategoryList';

function CategoryList() {
  return (
    CATEGORY_LIST_DATA &&
    CATEGORY_LIST_DATA.map((data) => (
      <CategoryItem key={data.largeCategoryId} data={data} />
    ))
  );
}

export default CategoryList;
