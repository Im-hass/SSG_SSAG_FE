import React from 'react';

function OptionCheckInput(props) {
  const { array } = props;

  return (
    <span className="cmem_inp_chk">
      <input
        type="checkbox"
        id={array.id}
        name={array.name}
        value={array.value}
        disabled=""
      />
      <label htmlFor={array.id}>{array.labelValue}</label>
    </span>
  );
}

export default OptionCheckInput;
