import React from 'react';

function MemberNotice(props) {
  const { title } = props;
  return (
    <p className="cmem_noti">
      <em>{title}</em>
    </p>
  );
}

export default MemberNotice;
