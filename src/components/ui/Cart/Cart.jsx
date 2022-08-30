import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isOpenState, isHeaderCartCntSubmit } from '../../../recoil/states';
import './Cart.scss';

function Cart() {
  const [, setIsOpen] = useRecoilState(isOpenState);
  const [isHeaderCartCnt] = useRecoilState(isHeaderCartCntSubmit);
  const [headerCartCount, setHeaderCartCount] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getCartDataUrl = 'http://13.209.26.150:9000/users/carts';
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    if (!token) return;

    // setHeaderCartCount(res.data.result.storeList.);
    axios
      .get(getCartDataUrl, headers)
      .then((res) => {
        console.log('cart header cnt result:', res);
        const data = res.data.result.storeList;
        for (let i = 0; i < data.length; i += 1) {
          const storeData = data[i].cartList.length;
          setHeaderCartCount(storeData);
        }
      })
      .catch((err) => console.log('cart header  cnt err:', err));
  }, [isHeaderCartCnt]);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <Link to="/cart" className="cart-btn" onClick={handleClick}>
      <div className="cart-wrap">
        <i className="cart-icon" />
        {headerCartCount > 0 && (
          <span className="cart-cnt">{headerCartCount}</span>
        )}
      </div>
    </Link>
  );
}

export default Cart;
