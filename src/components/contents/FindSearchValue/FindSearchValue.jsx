import React from 'react';
import ProductList from '../../product/ProductList/ProductList';
import { SearchFilter } from '../SearchFilter';
import './FindSearchValue.scss';

function FindSearchValue({ datas, isWishChange, setIsWishChange }) {
  return (
    <>
      <SearchFilter />
      <ProductList
        datas={datas}
        isWishChange={isWishChange}
        setIsWishChange={setIsWishChange}
      />
    </>
  );
}

export default FindSearchValue;
