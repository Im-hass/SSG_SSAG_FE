import React from 'react';
import './Cart.scss';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <Link to="/cart" className="cart-btn">
      <i className="cart-icon" />
    </Link>
  );
}

export default Cart;
