import React from 'react';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../recoil/isOpenState';
import './HeaderSearchButton.scss';

function HeaderSearchButton() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const handleOpenSearch = (action) => {
    console.log('clicked');
    return action === 'open' ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <div className="btn_cate btn_search">
      <button type="button" onClick={() => handleOpenSearch('open')}>
        <span
          className="sp_ctg_icon ctg_icon_search payTracking"
          data-pt-click="장바구니|GNB|검색"
        >
          <span className="blind">검색</span>
        </span>
      </button>
    </div>
  );
}

export default HeaderSearchButton;
