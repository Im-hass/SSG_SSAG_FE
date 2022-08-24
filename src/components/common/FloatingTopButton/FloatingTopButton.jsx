import React from 'react';
import './FloatingTopButton.scss';

function FloatingTopButton() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating_top is_visible">
      <button
        type="button"
        className="floating_btn ty_top clickable"
        onClick={goToTop}
      >
        <span className="blind">TOP</span>
        <i className="icon ty_sm icon_arrow_top" aria-hidden="true" />
      </button>
    </div>
  );
}

export default FloatingTopButton;
