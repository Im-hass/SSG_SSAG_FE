import React from 'react';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../store/states';
import './HeaderSearchButton.scss';

function HeaderSearchButton() {
  const [, setIsOpen] = useRecoilState(isOpenState);

  const handleOpenSearch = (action) =>
    action === 'open' ? setIsOpen(true) : setIsOpen(false);

  return (
    <div className="btn_cate btn_search">
      <button type="button" onClick={() => handleOpenSearch('open')}>
        <span className="sp_ctg_icon ctg_icon_search payTracking">
          <span className="blind">검색</span>
        </span>
      </button>
    </div>
  );
}

export default HeaderSearchButton;
