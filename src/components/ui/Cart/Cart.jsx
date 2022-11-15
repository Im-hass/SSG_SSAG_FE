import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isOpenState, isHeaderCartCntSubmit } from '../../../store/states';
import './Cart.scss';

function Cart() {
  const [, setIsOpen] = useRecoilState(isOpenState);
  const [isHeaderCartCnt] = useRecoilState(isHeaderCartCntSubmit);
  const [headerCartCount, setHeaderCartCount] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const getCartDataUrl = 'https://ssg-ssag.shop:9000/users/carts/count';
    const headers = {
      headers: {
        Authorization: JSON.parse(token),
      },
    };

    if (!token) return;

    axios
      .get(getCartDataUrl, headers)
      .then((res) => {
        setHeaderCartCount(res.data.result.cartCount);
      })
      .catch((err) => new Error(err));
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
