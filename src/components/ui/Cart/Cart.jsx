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
    axios
      .get(getCartDataUrl, headers)
      .then((res) => {
        console.log('cart header cnt result:', res);
        setHeaderCartCount(res.data.result.length);
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
        <span className="cart-cnt">
          {headerCartCount > 0 && headerCartCount}
        </span>
      </div>
    </Link>
  );
}

export default Cart;
