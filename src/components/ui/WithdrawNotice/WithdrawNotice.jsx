import React from 'react';

function WithdrawNotice(props) {
  const { contentsArray } = props;

  return (
    <ul className="noti_lst">
      {contentsArray.map((notice) => (
        <li key={notice.id}>{notice.content}</li>
      ))}
    </ul>
  );
}

export default WithdrawNotice;
