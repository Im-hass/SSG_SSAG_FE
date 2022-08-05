import React from 'react';
import './FooterService.scss';

function FooterService() {
  return (
    <div className="mcom_service_wrap">
      <div className="mcom_service_area">
        <p className="mcom_service_info">
          <span className="mcom_info_mall">
            SSG.COM 고객센터 / 전자금융거래 분쟁처리
          </span>
          <br />
          <span className="mcom_tel_tx">1577-3419 /</span>
          <span className="mcom_email_tx">ssg@ssg.com</span>
        </p>
        <div className="mcom_service_btnarea">
          <a
            href="tel:1577-3419"
            className="mcom_service_btn clickable"
            data-react-tarea="푸터|전화연결"
          >
            <em>전화걸기</em>
          </a>
          <a
            href="http://talk.ssg.com/webchat?gateType=cs"
            className="mcom_service_btn clickable"
            data-react-tarea="푸터|고객상담톡"
          >
            <em>1:1 고객센터</em>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterService;
