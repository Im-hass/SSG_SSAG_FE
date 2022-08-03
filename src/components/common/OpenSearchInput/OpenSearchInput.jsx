import React from 'react';
import './OpenSearchInput.scss';

function OpenSearchInput() {
  return (
    <form className="search-form">
      <input
        className="open-search-input"
        name="search-input"
        type="text"
        placeholder="검색어를 입력하세요."
      />
      <button className="search-btn" type="submit">
        <i className="search-icon" />
      </button>
    </form>
  );
}

export default OpenSearchInput;
