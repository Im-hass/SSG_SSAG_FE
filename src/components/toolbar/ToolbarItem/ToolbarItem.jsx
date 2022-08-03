import React from 'react';
import { Link } from 'react-router-dom';
import './ToolbarItem.scss';

function ToolbarItem({ to, iconName, txt }) {
  return (
    <li className="toolbar_item">
      <Link
        to={to}
        className="toolbar_lnk ty_category clickable"
        data-react-tarea="웹공통_N|웹바|카테고리|신세계몰"
      >
        <i className={`icon ty_lg ${iconName}`} aria-hidden="true" />
        <span className="toolbar_txt">{txt}</span>
      </Link>
    </li>
  );
}

export default ToolbarItem;
