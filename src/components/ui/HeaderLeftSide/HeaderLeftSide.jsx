import React from 'react';
import './HeaderLeftSide.scss';

function HeaderLeftSide({ isOpen, handleOpenSearch }) {
  return (
    <>
      {isOpen && (
        <button
          className="back-arrow"
          type="button"
          onClick={() => handleOpenSearch('close')}
          onKeyDown={() => handleOpenSearch('close')}
        >
          <i className="back-arrow-icon" />
        </button>
      )}

      {!isOpen && (
        <div className="header-logo-wrap">
          <div className="logo-ssg" />
          <div className="logo-ssg-mall" />
          <div className="open-mall-btn">
            <span className="open-mall-btn-icon" />
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderLeftSide;
