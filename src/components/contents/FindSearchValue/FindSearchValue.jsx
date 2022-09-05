import React from 'react';
import ProductList from '../../product/ProductList/ProductList';
import { SearchFilter } from '../SearchFilter';
import './FindSearchValue.scss';

function FindSearchValue({
  datas,
  value,
  isWishChange,
  setIsWishChange,
  urlParams,
  setUrlParams,
}) {
  return (
    <>
      <SearchFilter
        value={value}
        urlParams={urlParams}
        setUrlParams={setUrlParams}
      />
      <ProductList
        datas={datas}
        isWishChange={isWishChange}
        setIsWishChange={setIsWishChange}
      />
    </>
  );
}

export default FindSearchValue;
