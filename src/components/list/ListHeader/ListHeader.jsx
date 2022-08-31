import React from 'react';
import { Link } from 'react-router-dom';
import './ListHeader.scss';

function ListHeader() {
  return (
    <div className="list-header-container">
      <div className="left">
        <h3 className="heading3">Happy Lounge</h3>
        <p className="left-text">당신의 쇼핑이 특별해지는 매일 오전 9시</p>
      </div>
      <div className="right">
        <Link to="/" className="right-link">
          전체보기
        </Link>
      </div>
    </div>
  );
}

export default ListHeader;
