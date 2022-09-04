import React from 'react';
import { Link } from 'react-router-dom';

function FilterList({ data, value, handleSelectedOption, isActive = false }) {
  const { name, option } = data;

  return (
    <li
      className={isActive ? 'active' : ''}
      role="menuitem"
      onClick={() => {
        handleSelectedOption(name, option);
      }}
      onKeyDown={() => {
        handleSelectedOption(name, option);
      }}
    >
      <Link to={`/search/${value}`} className="clickable">
        {name}
      </Link>
      {name === '추천순' && (
        <button type="button" className="btn_info">
          <span className="blind">추천순 설명 보기</span>
        </button>
      )}
    </li>
  );
}

export default FilterList;
