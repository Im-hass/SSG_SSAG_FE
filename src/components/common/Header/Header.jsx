import React from 'react';
import './Header.scss';
import { SearchInput, Cart, HeaderLeftSide } from '../../ui';

function Header() {
  return (
    <header>
      <div className="header-container">
        <HeaderLeftSide />
        <SearchInput />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
