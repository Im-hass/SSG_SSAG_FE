import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';
// import { PRODUCT_LIST } from '../../../assets/datas';

function ProductList({ datas }) {
  return (
    <div className="cmitem_grid">
      <ul className="cmitem_grid_lst cmitem_ty_thmb">
        {datas &&
          datas.map((data) => (
            <ProductItem
              key={data.categoryProductDtoRes.productProductId}
              data={data}
            />
          ))}
      </ul>
    </div>
  );
}

export default ProductList;
