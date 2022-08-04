import React from 'react';
import './RecentShoppingTitle.scss';

function RecentShoppingTitle() {
  return (
    <div className="cmhistory_tit">
      <h1>
        <strong>최근 본 쇼핑정보</strong>
      </h1>
      <button type="button" className="cmhistory_bt cmhistory_bt_edit">
        편집
        <i className="sp_cmhistory_ic cmhistory_ic_edit" />
      </button>
      <button type="button" className="cmhistory_bt cmhistory_bt_cancel">
        취소
        <i className="sp_cmhistory_ic cmhistory_ic_cancel" />
      </button>
    </div>
  );
}

export default RecentShoppingTitle;
