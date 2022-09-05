import React from 'react';
import { Link } from 'react-router-dom';
import './style/TopNav.scss';

function TopNav() {
  return (
    <div id="m_topnav" className="mcom_topnav react-area">
      <h2 className="blind">서비스 매장 바로가기</h2>
      <ul className="topnav_menu" role="navigation">
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk on clickable">
            <span className="topnav_txt">홈</span>
          </Link>
        </li>
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk new clickable">
            <span className="topnav_txt">추석</span>
          </Link>
        </li>
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk clickable">
            <span className="topnav_txt">명품관</span>
          </Link>
        </li>
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk clickable">
            <span className="topnav_txt">해피라운지</span>
          </Link>
        </li>
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk clickable">
            <span className="topnav_txt">베스트</span>
          </Link>
        </li>
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk clickable">
            <span className="topnav_txt">백화점</span>
          </Link>
        </li>
        <li className="topnav_item">
          <Link to="/" className="topnav_lnk clickable">
            <span className="topnav_txt">브랜드</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopNav;
