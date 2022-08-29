import React from 'react';
import ProductList from '../../product/ProductList/ProductList';
import { SearchFilter } from '../SearchFilter';
import './FindSearchValue.scss';

function FindSearchValue({ datas }) {
  return (
    <>
      <SearchFilter />
      <ProductList datas={datas} />
    </>
  );
}

export default FindSearchValue;
