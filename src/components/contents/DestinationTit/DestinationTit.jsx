import React from 'react';
import './DestinationTit.scss';

const userName = '임희선';

function DestinationTit() {
  return (
    <div className="myodr_tit">
      <i className="myodr_tit_ico" />
      <h3 className="myodr_tit_tx">[MY배송지] {userName}</h3>
    </div>
  );
}

export default DestinationTit;
