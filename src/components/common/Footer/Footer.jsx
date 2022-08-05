import React from 'react';
import {
  FooterNotification,
  FooterService,
  FooterButtonBox,
} from '../../contents';
import './Footer.scss';

function Footer() {
  return (
    <footer id="m_footer" className="mcom_footer react-area">
      <FooterNotification />
      <FooterService />
      <FooterButtonBox />

      <div className="mcom_mall_wrap v2">
        <div className="mcom_mall_box">
          <span className="mcom_mall_name">(주)에스에스지닷컴</span>
          <address>
            대표자: 강희석<span className="bar">|</span>사업자등록번호:
            870-88-01143
            <br />
            통신판매업 신고번호: 제2022-서울강남-03751호
            <a href="/" className="txt_link">
              사업자 정보확인
            </a>
            <br />
            개인정보보호 책임자: 김우진<span className="bar">|</span>주소:
            서울특별시 강남구 테헤란로 231
            <br />
            호스팅서비스 사업자 : (주)에스에스지닷컴
          </address>
        </div>
        <div className="mcom_noti_wrap">
          <p className="mcom_noti_tip">
            우리은행 채무지급보증 안내
            <a href="/" className="txt_link">
              서비스가입사실 확인
            </a>
          </p>
          <p className="mcom_noti_txt">
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과
            <br />
            채무지급 보증 계약을 체결하여 안전거래를 보장하고 있습니다.
          </p>
        </div>
        <div className="mcom_cont_info">
          <h3 className="blind">SSG.COM 정책 및 약관</h3>
          <ul className="mcom_cont_lst">
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://company.ssg.com', 'stack', 'Y'); return false;"
              >
                <span>회사소개</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://m.ssg.com/comm/commInfo.ssg?type=clause&amp;_mpop=new','stack','Y'); return false;"
              >
                이용약관
              </a>
            </li>
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://member.ssg.com/m/policies/tradeTerms.ssg', 'stack', 'Y'); return false;"
              >
                전자금융거래이용약관
              </a>
            </li>
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://member.ssg.com/m/policies/privacy.ssg', 'stack', 'Y'); return false;"
              >
                <strong>개인정보처리방침</strong>
              </a>
            </li>
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://member.ssg.com/m/policies/youthProtection.ssg', 'stack', 'Y'); return false;"
              >
                청소년보호방침
              </a>
            </li>
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://member.ssg.com/m/policies/consumerDispute.ssg', 'stack', 'Y'); return false;"
              >
                소비자분쟁해결기준
              </a>
            </li>
            <li>
              <a
                href="/"
                title="새창열림"
                onClick="appBroswer('https://partners.ssgadm.com/m/', 'stack', 'Y'); return false;"
              >
                <span>입점상담</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mcom_noti_wrap ty2">
          <p className="mcom_noti_txt">
            ㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는
            오픈마켓 상품이 포함되어 있습니다.
          </p>
          <p className="mcom_noti_txt">
            오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래
            당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해
            책임을 지지 않습니다.
          </p>
          <p className="mcom_noti_txt">
            ㈜에스에스지닷컴 사이트의 상품/판매자/쇼핑정보, 컨텐츠, UI 등에 대한
            무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠사업
            진흥법 등에 의하여 엄격히 금지됩니다.
          </p>
        </div>
        <p className="mcom_copyright">
          Copyright ⓒ SSG.COM Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
