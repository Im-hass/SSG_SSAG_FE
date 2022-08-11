/* eslint-disable react/button-has-type */
import React from 'react';

function Button(props) {
  const { type, className, onClick, name } = props;

  return (
    <div className="cmem_btn_area">
      <button type={type} className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}

export default Button;
