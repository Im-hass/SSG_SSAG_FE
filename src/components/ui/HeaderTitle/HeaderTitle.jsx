import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTitle.scss';

function HeaderTitle(props) {
  const { title } = props;

  return (
    <h2 className="mcom_tit_txt clickable">
      <Link to="/">{title}</Link>
    </h2>
  );
}

export default HeaderTitle;
