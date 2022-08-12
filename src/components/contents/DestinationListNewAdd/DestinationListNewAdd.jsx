import React from 'react';
import './DestinationListNewAdd.scss';

function DestinationListNewAdd() {
  return (
    <div className="myodr_btn_newaddr">
      <button type="button" onClick="ShpplocList.add();">
        <span>
          <span aria-hidden="true">+</span> 새 배송지 추가
        </span>
      </button>
    </div>
  );
}

export default DestinationListNewAdd;
