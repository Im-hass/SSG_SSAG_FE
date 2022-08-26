import React from 'react';
import './CartPageParcelContentUnitPayRight.scss';
import axios from 'axios';

function CartPageParcelContentUnitPayRight({
  data,
  cartProductCount,
  setCartProductCount,
}) {
  const putProductCount = (cnt) => {
    const token = localStorage.getItem('token');
    const productData = {
      cartId: data.cartId,
      count: cnt,
    };
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    axios
      .put('http://13.209.26.150:9000/users/carts/count', productData, headers)
      .then((res) => {
        console.log('cart cnt result:', res);
      })
      .catch((err) => console.log('cart cnt err:', err));
  };

  const handleProductCount = (action) => {
    if (action === 'inc') {
      setCartProductCount((prevCnt) => {
        const currCnt = prevCnt + 1;
        return currCnt;
      });
      putProductCount(cartProductCount);
      console.log('db cnt', data.count);
      console.log('cl cnt', cartProductCount);
    } else if (cartProductCount > 1) {
      setCartProductCount((prevCnt) => {
        const currCnt = prevCnt - 1;
        return currCnt;
      });
      putProductCount(cartProductCount);
      console.log('db cnt', data.count);
      console.log('cl cnt', cartProductCount);
    }
  };

  return (
    <div className="mnodr_unit_r">
      <div className="mnodr_amount">
        <div className="mnodr_opa_area">
          <span className="blind">현재수량</span>
          <span className="mnodr_opa_tx ordQty">{cartProductCount}</span>
        </div>
        <button
          type="button"
          name="btUpdOrdQtyMinus"
          className="mnodr_btn_minus cartTracking"
          onClick={() => handleProductCount('dec')}
        >
          <i className="mnodr_ic ic_minus">
            <span className="blind">주문수량빼기</span>
          </i>
        </button>
        <button
          type="button"
          name="btUpdOrdQtyPlus"
          className="mnodr_btn_plus cartTracking"
          onClick={() => handleProductCount('inc')}
        >
          <i className="mnodr_ic ic_plus">
            <span className="blind">주문수량더하기</span>
          </i>
        </button>
      </div>
    </div>
  );
}

export default CartPageParcelContentUnitPayRight;
