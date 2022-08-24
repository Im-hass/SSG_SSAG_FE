import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function BackBtn() {
  const navi = useNavigate();
  const handleBack = () => {
    navi(-1);
  };

  return (
    <button type="button" className="mcom_tit_lft" onClick={handleBack}>
      <Link to=".." className="btn_back clickable">
        <span className="sp_ctg_icon ctg_icon_back">
          <span className="blind">이전 페이지</span>
        </span>
      </Link>
    </button>
  );
}

export default BackBtn;
