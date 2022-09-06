import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isOpenState } from '../../../store/states';
import './HeaderPrevButton.scss';

function HeaderPrevButton() {
  const [, setIsOpen] = useRecoilState(isOpenState);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(false);
    navigate(-1);
  };

  return (
    <div className="mcom_tit_lft">
      <button
        type="button"
        className="btn_back clickable"
        onClick={handleClick}
      >
        <span id="header_back_icon" className="sp_ctg_icon ctg_icon_back">
          <span className="blind">이전 페이지</span>
        </span>
      </button>
    </div>
  );
}

export default HeaderPrevButton;
