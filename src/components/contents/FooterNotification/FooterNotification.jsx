import React from 'react';
import { Link } from 'react-router-dom';
import './FooterNotification.scss';

function FooterNotification() {
  return (
    <div className="footer_notiwrap">
      <div className="footer_noti">
        <p className="noti_tit">공지</p>
        <ul className="noti_dsc">
          <li>
            <Link to="/">[SSG.COM 스타벅스 서머 캐리백 구매 고객 대...</Link>
          </li>
          <li>
            <Link to="/">
              SSG.COM 이용약관 및 전자금융거래이용약관 개정 안...
            </Link>
          </li>
          <li>
            <Link to="/">SSG.COM 생일쿠폰 적용몰 확대 안내</Link>
          </li>
        </ul>
      </div>
      <span className="sp_head noti_arrow">&nbsp;</span>
    </div>
  );
}

export default FooterNotification;
