import React from 'react';
import './HeaderTitle.scss';

function HeaderTitle(props) {
  const { title } = props;

  return (
    <h2 className="mcom_tit_txt clickable">
      <a href="/">{title}</a>
    </h2>
  );
}

export default HeaderTitle;
