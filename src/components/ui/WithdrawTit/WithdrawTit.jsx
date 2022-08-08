import React from 'react';

function WithdrawTit(props) {
  const { title } = props;
  return (
    <div className="cmem_card_tit">
      <h3>{title}</h3>
    </div>
  );
}

export default WithdrawTit;
