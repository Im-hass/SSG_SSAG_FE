import React from 'react';

function AgreementInput(props) {
  const { object } = props;

  return (
    <span className="cmem_inp_chk">
      <input type="checkbox" id={object.id} name={object.id} />
      <label htmlFor={object.id}>{object.content}</label>
    </span>
  );
}

export default AgreementInput;
