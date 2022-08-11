import React from 'react';

function CheckSquareInput(props) {
  const { htmlFor, text } = props;
  return (
    <span className="cmem_inp_chk">
      <input type="checkbox" id={htmlFor} name={htmlFor} />
      <label htmlFor={htmlFor}>{text}</label>
    </span>
  );
}

export default CheckSquareInput;
