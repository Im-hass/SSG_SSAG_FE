/* eslint-disable react/button-has-type */
import React from 'react';

function Button(props) {
  const { type, className, name } = props;

  return (
    <div className="cmem_btn_area">
      <button type={type} className={className}>
        {name}
      </button>
    </div>
  );
}

export default Button;
