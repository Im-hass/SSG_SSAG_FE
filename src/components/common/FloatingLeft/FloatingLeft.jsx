import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingLeft.scss';

function FloatingLeft() {
  return (
    <div className="floating_left">
      <Link to=".." className="floating_btn ty_back clickable">
        <span className="blind">이전 페이지로 가기</span>
        <i className="icon ty_sm icon_arrow_left" aria-hidden="true" />
      </Link>
    </div>
  );
}

export default FloatingLeft;
