import React from 'react';
import './Header.scss';
import { useRecoilState } from 'recoil';
import { SearchInput, Cart, HeaderLeftSide } from '../../ui';
import SearchBox from '../../ui/SearchBox/SearchBox';
import { isOpenState } from '../../../recoil/states';

function Header() {
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <header id="m_header" className="mcom_header react-area">
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
