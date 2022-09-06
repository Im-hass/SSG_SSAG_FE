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
  listEndRef,
}) {
  return (
    <>
      <SearchFilter
        value={value}
        urlParams={urlParams}
        setUrlParams={setUrlParams}
      />
      <ProductList
        datas={{ productDtoRes: datas }}
        isWishChange={isWishChange}
        setIsWishChange={setIsWishChange}
        listEndRef={listEndRef}
      />
    </>
  );
}

export default FindSearchValue;
