import React from 'react';

function Textarea(props) {
  const { maxLength, placeholder } = props;

  return (
    <div className="cmem_textarea">
      <textarea maxLength={maxLength} placeholder={placeholder} />
    </div>
  );
}

export default Textarea;
