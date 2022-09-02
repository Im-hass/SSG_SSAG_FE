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
import { isOpenState } from '../../../recoil/states';
import './MobileHeader.scss';

function MobileHeader(props) {
  const { title } = props;
  const [isOpen] = useRecoilState(isOpenState);
  const token = localStorage.getItem('token');

  return (
    <header
      id="header"
      className="reveal-left-header reveal-right-header mnodr_head_fix"
      style={{ position: title !== '장바구니' ? 'relative' : '' }}
    >
      {!isOpen && (
        <div className="mcom_tit_renew  react-area">
          {!isOpen &&
            title !== '배송지 선택' &&
            title !== '주문자정보 변경' &&
            title !== '수령위치 선택' &&
            title !== '결제완료' && <HeaderPrevButton />}
          {!isOpen && <HeaderTitle title={title} />}

          {token === null ? (
            ''
          ) : (
            <div className="mcom_tit_rgt">
              {!isOpen && title === '장바구니' && <HeaderSearchButton />}
              {!isOpen && title === 'MY SSG' && <Cart />}
              {!isOpen &&
                title !== '배송지 관리' &&
                title !== '결제하기' &&
                title !== '배송지 선택' &&
                title !== '주문자정보 변경' &&
                title !== '수령위치 선택' &&
                title !== '결제완료' && <HeaderHomeButton />}
            </div>
          )}
        </div>
      )}
      {isOpen && <MobileHeaderSearch />}
    </header>
  );
}

export default MobileHeader;
