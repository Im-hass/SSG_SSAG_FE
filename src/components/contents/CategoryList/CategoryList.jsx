import React from 'react';
import { CategoryItem } from '../CategoryItem';
import {
  CATEGORY_LIST_DATA,
  CATEGORY_IMG_LIST,
} from '../../../assets/datas/CategoryList';

function CategoryList() {
  return (
    CATEGORY_LIST_DATA &&
    CATEGORY_LIST_DATA.map((data, i) => (
      <CategoryItem
        key={data.largeCategoryId}
        data={data}
        imgUrl={CATEGORY_IMG_LIST[i]}
      />
    ))
  );
}

export default CategoryList;
