import React from 'react';

function SignUpInput(props) {
  const { object, onChange } = props;

  return (
    <input
      type={object.type}
      title={object.title}
      id={object.id}
      placeholder={object.placeholder}
      name={object.name}
      maxLength={object.maxLength}
      onChange={onChange}
    />
  );
}

export default SignUpInput;
