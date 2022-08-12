import React from 'react';

function RequireLabel(props) {
  const { htmlFor, labelValue } = props;
  return (
    <span className="cmem_require">
      <span className="star" aria-hidden="true">
        *
      </span>
      <label htmlFor={htmlFor}>
        <span className="blind">필수입력</span>
        {labelValue}
      </label>
    </span>
  );
}

export default RequireLabel;
