import React from 'react';
import './NoDataMessage.scss';

function NoDataMessage() {
  return (
    <div className="cmhistory_nodata" style={{ display: 'none' }}>
      <p>최근 본 쇼핑정보 없습니다.</p>
    </div>
  );
}

export default NoDataMessage;
