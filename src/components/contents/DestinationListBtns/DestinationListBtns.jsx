import React from 'react';
import './DestinationListBtns.scss';

function DestinationListBtns() {
  return (
    <span className="myodr_btn_rt">
      <button
        type="button"
        className="myodr_btn_tx"
        onClick="ShpplocList.update(2);"
      >
        <span>수정</span>
      </button>
      <button
        type="button"
        className="myodr_btn_tx"
        onClick="ShpplocList.delete(2);"
      >
        <span>삭제</span>
      </button>
    </span>
  );
}

export default DestinationListBtns;
