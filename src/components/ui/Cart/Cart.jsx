import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { isOpenState } from '../../../recoil/isOpenState';
import './Cart.scss';

function Cart() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <Link to="/cart" className="cart-btn" onClick={handleClick}>
      <i className="cart-icon" />
    </Link>
  );
}

export default Cart;
