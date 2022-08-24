import React from 'react';
import './DestinationListBtns.scss';

function DestinationListBtns({ isDefaultAddr, id, handleDelete }) {
  return (
    <span className="myodr_btn_rt">
      <button type="button" className="myodr_btn_tx">
        <span>수정</span>
      </button>
      {!isDefaultAddr && (
        <button
          type="button"
          className="myodr_btn_tx"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <span>삭제</span>
        </button>
      )}
    </span>
  );
}

export default DestinationListBtns;
