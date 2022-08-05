import React from 'react';

function SubmitBtn(props) {
  const { className, onClick, name } = props;

  return (
    <div className="cmem_btn_area">
      <button type="submit" className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
}

export default SubmitBtn;
