import React from 'react';
import { useRecoilState } from 'recoil';
import {
  Cart,
  HeaderHomeButton,
  HeaderPrevButton,
  HeaderSearchButton,
  HeaderTitle,
  MobileHeaderSearch,
} from '../index';
import { isOpenState } from '../../../recoil/isOpenState';
import './MobileHeader.scss';

function MobileHeader(props) {
  const { title } = props;
  const [isOpen] = useRecoilState(isOpenState);

  return (
    <header
      id="header"
      className="reveal-left-header reveal-right-header mnodr_head_fix"
      style={{ position: title !== '장바구니' ? 'relative' : '' }}
    >
      {!isOpen && (
        <div className="mcom_tit_renew  react-area">
          {!isOpen && <HeaderPrevButton />}
          {!isOpen && <HeaderTitle title={title} />}

          {!isOpen && title === '장바구니' && <HeaderSearchButton />}

          <div className="mcom_tit_rgt">
            {!isOpen && title !== '로그인' && <HeaderHomeButton />}
          </div>
        </div>
      )}
      {isOpen && <MobileHeaderSearch />}
    </header>
  );
}

export default MobileHeader;
