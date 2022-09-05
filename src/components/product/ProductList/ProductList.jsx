import React from 'react';
import './ProductList.scss';
import ProductItem from '../ProductItem/ProductItem';

function ProductList({
  datas,
  isWishChange,
  setIsWishChange,
  listEndRef = null,
}) {
  return (
    <>
      <div className="cmitem_grid">
        <ul className="cmitem_grid_lst cmitem_ty_thmb">
          {datas &&
            datas.productDtoRes.map((data) => (
              <ProductItem
                key={data.categoryProductDtoRes.productProductId}
                data={data}
                isWishChange={isWishChange}
                setIsWishChange={setIsWishChange}
              />
            ))}
        </ul>
      </div>
      <div ref={listEndRef} style={{ height: '1px' }} />
    </>
  );
}

export default ProductList;
