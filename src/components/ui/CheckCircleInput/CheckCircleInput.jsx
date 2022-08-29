/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function CheckCircleInput(props) {
  const { inputId, inputName, inputValue, inputCheck, labelFor, laberValue } =
    props;

  return (
    <span className="cmem_inp_chk type3">
      <input
        type="checkbox"
        id={inputId}
        name={inputName}
        value={inputValue}
        checked={inputCheck}
      />
      <label htmlFor={labelFor}>{laberValue}</label>
    </span>
  );
}

export default CheckCircleInput;
