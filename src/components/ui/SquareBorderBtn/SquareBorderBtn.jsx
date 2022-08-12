import React from 'react';

function SquareBorderBtn(props) {
  const { btnImgClass, btnName } = props;

  return (
    <span className="cmem_certi_item">
      <a href="/" className={btnImgClass} title="새창열림">
        {btnName}
      </a>
    </span>
  );
}

export default SquareBorderBtn;
