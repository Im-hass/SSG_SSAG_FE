import React from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { isOpenState } from '../../../recoil/states';
import './HeaderPrevButton.scss';

function HeaderPrevButton() {
  const [isOpen, setIsOpen] = useRecoilState(isOpenState);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="mcom_tit_lft">
      <Link to=".." className="btn_back clickable" onClick={handleClick}>
        <span className="sp_ctg_icon ctg_icon_back">
          <span className="blind">이전 페이지</span>
        </span>
      </Link>
    </div>
  );
}

export default HeaderPrevButton;
