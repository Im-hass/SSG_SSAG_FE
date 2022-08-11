import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';
import { SubCategoryList } from '../SubCategoryList';

function CategoryList({ data }) {
  const { largeCategoryId, imgUrl, title, mediumCategoryList } = data;
  // const isSelected = new Array(11).fill(false);
  const [isSelected, setIsSelected] = useState(Array(11).fill(false));
  // const [selectedName, setSelectedName] = useState('');
  // console.log(`is: ${isSelected}`);

  const handleClick = (e) => {
    e.preventDefault();
    const idx = e.target.dataset.id;
    console.log();
    // const newIsSelected = [...isSelected];
    // newIsSelected.map(() => false);
    const newIsSelected = new Array(11).fill(false);
    newIsSelected[idx] = true;
    console.log('newIsSelected');
    console.log(newIsSelected);
    setIsSelected([newIsSelected]);
    console.log('isSelected');
    console.log(isSelected);
  };

  return (
    <li className="clnb_renew_item selected">
      {/* li 클릭 시 selected 추가 */}
      <a href="/" className="clickable" onClick={handleClick}>
        <span
          data-id={largeCategoryId - 1}
          className="thmb ssg_lazy"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
        <em>{title}</em>
      </a>

      <SubCategoryList
        largeCategoryId={largeCategoryId}
        mediumCategoryList={mediumCategoryList}
      />
    </li>
  );
}

export default CategoryList;
