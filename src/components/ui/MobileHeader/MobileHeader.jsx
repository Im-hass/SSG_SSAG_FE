import React from 'react';

function MobileHeader(props) {
  const { title } = props;

  return (
    <div className="mcom_tit_renew  react-area">
      <h2 className="mcom_tit_txt clickable">
        <a href="/">{title}</a>
      </h2>
      <div className="mcom_tit_lft">
        <a href="/" className="btn_back clickable">
          <span className="sp_ctg_icon ctg_icon_back">
            <span className="blind">이전 페이지</span>
          </span>
        </a>
      </div>
      <div className="mcom_tit_rgt" />
    </div>
  );
}

export default MobileHeader;
