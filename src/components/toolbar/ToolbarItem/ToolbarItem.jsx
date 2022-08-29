import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isOpenState } from '../../../recoil/states';
import './ToolbarItem.scss';

function ToolbarItem({ data }) {
  const { link, iconName, txt, imgUrl, hasHistory } = data;
  const [, setIsOpen] = useRecoilState(isOpenState);

  const handleOpenSearch = (action, text) => {
    if (text === '통합검색') {
      return action === 'open' ? setIsOpen(true) : setIsOpen(false);
    }
    return null;
  };

  return (
    <li
      role="menuitem"
      className="toolbar_item"
      onClick={() => handleOpenSearch('open', txt)}
      onKeyDown={() => handleOpenSearch('open', txt)}
    >
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
