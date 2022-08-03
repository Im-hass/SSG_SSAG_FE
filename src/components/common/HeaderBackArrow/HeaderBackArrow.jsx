import React from 'react';
import './HeaderBackArrow.scss';

function HeaderBackArrow({ handleOpenSearch }) {
  return (
    <button
      className="back-arrow"
      type="button"
      onClick={() => handleOpenSearch('close')}
      onKeyDown={() => handleOpenSearch('close')}
    >
      <i className="back-arrow-icon" />
    </button>
  );
}

export default HeaderBackArrow;
