import React from 'react';
import { CategoryItem } from '../CategoryItem';

function CategoryList({ datas, CATEGORY_IMG_LIST, isSelected, setIsSelected }) {
  return (
    datas &&
    datas.map((data, i) => (
      <CategoryItem
        key={data.largeCategoryId}
        data={data}
        imgUrl={CATEGORY_IMG_LIST[i]}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    ))
  );
}

export default CategoryList;
