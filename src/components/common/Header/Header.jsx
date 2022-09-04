import React, { useEffect } from 'react';
import './Header.scss';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { SearchInput, Cart, HeaderLeftSide } from '../../ui';
import SearchBox from '../../ui/SearchBox/SearchBox';
import { isOpenState, searchValueState } from '../../../recoil/states';

function Header() {
  const { value } = useParams();
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  return (
    <header id="m_header" className="mcom_header react-area">
      <div className="header-container">
        <HeaderLeftSide />
        <SearchInput
          value={value}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="cart-btn-box">
          <Cart />
        </div>
      </div>
      <div>{isOpen && <SearchBox setIsOpen={setIsOpen} />}</div>
    </header>
  );
}

export default Header;
