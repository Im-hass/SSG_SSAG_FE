import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-noti-wrap">
        <div className="footer-noti">
          <p className="noti-tit">공지</p>
          <ul className="noti-dsc">
            <li>[SSG.COM &apos;스타벅스 서머 캐리백&apos; 구매 고객 대...</li>
          </ul>
        </div>
        <span className="noti-arrow" />
      </div>

      <div className="footer-service-wrap">
        <div className="service-area">
          <p className="service-info">
            <span className="info-mall">
              SSG.COM 고객센터 / 전자금융거래 분쟁처리
            </span>
            <br />
            <span className="info-tel">1577-3419 /</span>
            <span className="info-email">ssg@ssg.com</span>
          </p>

          <div className="service-btn-area">
            <button type="button">전화걸기</button>
            <button type="button">1:1 고객센터</button>
          </div>
        </div>
      </div>
      <div>3</div>
      <div>4</div>
    </footer>
  );
}

export default Footer;
