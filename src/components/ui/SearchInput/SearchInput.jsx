import React from 'react';
import './SearchInput.scss';

function SearchInput({ isOpen, handleOpenSearch }) {
  return (
    <div className="header-util">
      <div className="search-box">
        {isOpen && (
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
        )}

        {!isOpen && (
          <div className="not-open-search-input-wrap">
            <div className="search-input-box">
              <input
                className="not-open-search-input"
                type="text"
                onFocus={() => handleOpenSearch('open')}
              />
              <button className="search-btn" type="button">
                <i className="search-icon" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;
