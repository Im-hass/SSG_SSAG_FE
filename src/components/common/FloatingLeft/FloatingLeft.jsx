import React from 'react';
import './FloatingLeft.scss';

function FloatingLeft() {
  return (
    <div className="floating_left">
      <a
        // href="javascript:history.back();"
        href="/"
        className="floating_btn ty_back clickable"
        data-react-tarea="웹공통_N|버튼_영역|뒤로가기"
      >
        <span className="blind">이전 페이지로 가기</span>
        <i className="icon ty_sm icon_arrow_left" aria-hidden="true" />
      </a>
    </div>
  );
}

export default FloatingLeft;
