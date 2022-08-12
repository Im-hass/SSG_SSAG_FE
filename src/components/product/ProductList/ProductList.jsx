import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';
import { PRODUCT_LIST } from '../../../assets/datas';

function ProductList({ hasResult }) {
  return (
    <div className="cmitem_grid">
      <ul className="cmitem_grid_lst cmitem_ty_thmb">
        {PRODUCT_LIST &&
          PRODUCT_LIST.map((product) => (
            <ProductItem
              key={product.productId}
              datas={product}
              hasResult={hasResult}
            />
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
