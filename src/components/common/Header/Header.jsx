import { React, useState } from 'react';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import HeaderBackArrow from '../HeaderBackArrow/HeaderBackArrow';
import NotOpenSearchInput from '../NotOpenSearchInput/NotOpenSearchInput';
import OpenSearchInput from '../OpenSearchInput/OpenSearchInput';
import './Header.scss';
import { Cart } from '../Cart/index';

function Header() {
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = (action) =>
    action === 'open' ? setOpenSearch(true) : setOpenSearch(false);

  return (
    <header>
      <div className="header-container">
        {!openSearch && <HeaderLogo />}
        {openSearch && <HeaderBackArrow handleOpenSearch={handleOpenSearch} />}

        <div className="header-util">
          <div className="search-box">
            {!openSearch && (
              <NotOpenSearchInput handleOpenSearch={handleOpenSearch} />
            )}
            {openSearch && <OpenSearchInput />}
          </div>
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
