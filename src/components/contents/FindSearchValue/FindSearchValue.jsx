import React, { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import ProductList from '../../product/ProductList/ProductList';
import { SearchFilter } from '../SearchFilter';
import './FindSearchValue.scss';

function FindSearchValue({ datas }) {
  const ctx = useContext(AuthContext);

  return (
    <>
      <SearchFilter />
      <ProductList datas={datas} isLogin={ctx.isLogin} />
    </>
  );
}

export default FindSearchValue;
