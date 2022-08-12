import React from 'react';
import './DestinationNoDataBtn.scss';

function DestinationNoDataBtn() {
  return (
    <button
      type="button"
      className="myodr_btn myodr_btn_gray2"
      onClick="ShpplocList.add();"
    >
      <span>새 배송지 추가</span>
    </button>
  );
}

export default DestinationNoDataBtn;
