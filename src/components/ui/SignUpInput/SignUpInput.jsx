import React from 'react';

function SignUpInput(props) {
  const { object } = props;

  return (
    <div className="cmem_inp_txt">
      <input
        type={object.type}
        title={object.title}
        id={object.id}
        placeholder={object.placeholder}
        name={object.name}
        maxLength={object.maxLength}
      />
    </div>
  );
}

export default SignUpInput;
