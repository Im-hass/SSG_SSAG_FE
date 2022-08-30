import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isCntPut } from '../../../recoil/states';
import './CartPageParcelContentUnitPayRight.scss';

function CartPageParcelContentUnitPayRight({ cartItem }) {
  const [isCnt, setIsCnt] = useRecoilState(isCntPut);
  const [cartItemCnt, setCartItemCnt] = useState(cartItem.count);
  const cartItemId = cartItem.cartId;

  const putProductCount = (cnt) => {
    const token = localStorage.getItem('token');
    const productData = {
      cartId: cartItemId,
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
      setCartItemCnt((prevCnt) => {
        const currCnt = prevCnt + 1;
        return currCnt;
      });
      setIsCnt(!isCnt);
    } else if (cartItemCnt > 1) {
      setCartItemCnt((prevCnt) => {
        const currCnt = prevCnt - 1;
        return currCnt;
      });
      setIsCnt(!isCnt);
    }
  };

  useEffect(() => {
    putProductCount(cartItemCnt);
  }, [isCnt]);

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
