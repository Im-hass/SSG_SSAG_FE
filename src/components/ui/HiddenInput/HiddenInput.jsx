import React from 'react';

function HiddenInput(props) {
  const { inputName, inputValue } = props;
  return <input type="hidden" name={inputName} value={inputValue} />;
}

export default HiddenInput;
