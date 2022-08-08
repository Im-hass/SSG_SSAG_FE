import { React, useState } from 'react';
import './Header.scss';
import { SearchInput, Cart, HeaderLeftSide } from '../../ui';
import SearchBox from '../../ui/SearchBox/SearchBox';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSearch = (action) =>
    action === 'open' ? setIsOpen(true) : setIsOpen(false);

  return (
    <header>
      <div className="header-container">
        <HeaderLeftSide isOpen={isOpen} handleOpenSearch={handleOpenSearch} />
        <SearchInput isOpen={isOpen} handleOpenSearch={handleOpenSearch} />
        <Cart />
      </div>
      {isOpen && <SearchBox />}
    </header>
  );
}

export default Header;
