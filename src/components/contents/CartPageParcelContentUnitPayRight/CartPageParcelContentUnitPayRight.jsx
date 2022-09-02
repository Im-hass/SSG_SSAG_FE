import React from 'react';
import axios from 'axios';
import './CartPageParcelContentUnitPayRight.scss';

function CartPageParcelContentUnitPayRight({ cartItem, isCnt, setIsCnt }) {
  const cartItemId = cartItem.cartId;
  const cartItemCnt = cartItem.count;

  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: JSON.parse(token),
    },
  };

  const putProductCount = (cnt, act) => {
    if (cartItemCnt === 1 && act === 'dec') return;
    const putCntUrl = 'http://13.209.26.150:9000/users/carts/count';
    const productData = {
      cartId: cartItemId,
      count: cartItemCnt + cnt,
    };

    axios
      .put(putCntUrl, productData, headers)
      .then((res) => {
        console.log('cart cnt result:', res);
        setIsCnt(!isCnt);
      })
      .catch((err) => console.log('cart cnt err:', err));
  };

  return (
    <div className="mnodr_unit_r">
      <div className="mnodr_amount">
        <div className="mnodr_opa_area">
          <span className="blind">현재수량</span>
          <span className="mnodr_opa_tx ordQty">{cartItemCnt}</span>
        </div>
        <button
          type="button"
          name="btUpdOrdQtyMinus"
          className="mnodr_btn_minus cartTracking"
          onClick={() => putProductCount(-1, 'dec')}
        >
          <i className="mnodr_ic ic_minus">
            <span className="blind">주문수량빼기</span>
          </i>
        </button>
        <button
          type="button"
          name="btUpdOrdQtyPlus"
          className="mnodr_btn_plus cartTracking"
          onClick={() => putProductCount(1, 'inc')}
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
