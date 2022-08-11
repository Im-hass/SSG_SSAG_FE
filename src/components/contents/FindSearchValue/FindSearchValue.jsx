import React from 'react';
import ProductList from '../../product/ProductList/ProductList';
import { SearchFilter } from '../SearchFilter';
import './FindSearchValue.scss';

function FindSearchValue({ hasResult }) {
  return (
    <>
      <SearchFilter />
      <ProductList hasResult={hasResult} />
    </>
  );
}

export default FindSearchValue;
