import React from 'react';

function SignUpTermTit(props) {
  const { title } = props;
  return (
    <div className="cmem_term_tit">
      <h4 style={{ fontWeight: 'bold' }}>{title}</h4>
    </div>
  );
}

export default SignUpTermTit;
