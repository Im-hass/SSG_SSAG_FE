import React from 'react';
import { useRecoilState } from 'recoil';
import { isCategorySelected } from '../../../recoil/states';
import { SubCategoryList } from '../SubCategoryList';

function CategoryItem({ data, imgUrl }) {
  const { largeCategoryId, title, mediumCategoryList } = data;
  const [isSelected, setIsSelected] = useRecoilState(isCategorySelected);

  const handleClick = (e) => {
    e.preventDefault();
    const idx = e.currentTarget.dataset.id;
    const copyArray = [...isSelected];
    copyArray.fill(false);
    copyArray[idx] = true;
    setIsSelected(copyArray);
  };

  return (
    <li
      className={
        isSelected[largeCategoryId - 1]
          ? 'clnb_renew_item selected'
          : 'clnb_renew_item'
      }
    >
      <a
        href="/"
        className="clickable"
        onClick={handleClick}
        data-id={largeCategoryId - 1}
      >
        <span
          className="thmb ssg_lazy"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
        <em>{title}</em>
      </a>

      <SubCategoryList
        isSelected={isSelected}
        largeCategoryId={largeCategoryId}
        mediumCategoryList={mediumCategoryList}
        handleClick={handleClick}
      />
    </li>
  );
}

export default CategoryItem;
