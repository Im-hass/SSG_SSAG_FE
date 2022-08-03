import React from 'react';
import './NotOpenSearchInput.scss';

function NotOpenSearchInput({ handleOpenSearch }) {
  return (
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
  );
}

export default NotOpenSearchInput;
