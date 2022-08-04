import React from 'react';
import { Link } from 'react-router-dom';
import './ToolbarItem.scss';

function ToolbarItem({ data }) {
  const { link, iconName, txt, imgUrl, hasHistory } = data;

  return (
    <li className="toolbar_item">
      <Link to={link} className="toolbar_lnk ty_category clickable">
        <i className={`icon ty_lg ${iconName}`} aria-hidden="true" />
        {hasHistory ? (
          <span id="mHistory_toolbar_thumb" className="toolbar_thumb">
            <img
              id="bottomToolbarThumbImg"
              alt="최근본 상품 이미지"
              src={imgUrl}
            />
          </span>
        ) : (
          <span className="toolbar_txt">{txt}</span>
        )}
      </Link>
    </li>
  );
}

export default ToolbarItem;
