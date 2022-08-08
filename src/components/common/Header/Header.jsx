import React from 'react';
import './Header.scss';
import { SearchInput, Cart, HeaderLeftSide } from '../../ui';
import SearchBox from '../../ui/SearchBox/SearchBox';

function Header() {
  return (
    <header>
      <div className="header-container">
        <HeaderLeftSide />
        <SearchInput />
        <Cart />
      </div>
      {isOpen && <SearchBox />}
    </header>
  );
}

export default Header;
