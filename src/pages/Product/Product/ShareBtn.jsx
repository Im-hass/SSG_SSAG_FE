import React from 'react';

function ShareBtn() {
  return (
    <div className="mcom_ly_wrap mcom_ly_share react-area">
      <div className="mcom_ly_inr">
        <h2 className="mcom_ly_tit">SNS 공유</h2>
        <div className="mcom_ly_cont">
          <ul className="cm_sns">
            <li>
              <a
                // href="javascript:void(0)"
                href="/"
                className="kakao"
                title="카카오톡"
                target="_parent"
              >
                <span className="blind">카카오톡</span>
              </a>
            </li>
            <li>
              <a
                // href="javascript:void(0)"
                href="/"
                className="facebook"
                title="페이스북"
                target="_parent"
              >
                <span className="blind">페이스북</span>
              </a>
            </li>
            <li>
              <a
                // href="javascript:void(0)"
                href="/"
                className="twitter"
                title="트위터"
                target="_parent"
              >
                <span className="blind">트위터</span>
              </a>
            </li>
            <li>
              <a
                // href="javascript:void(0)"
                href="/"
                className="sms"
                title="SMS"
                target="_parent"
              >
                <span className="blind">SMS 발송</span>
              </a>
            </li>
            <li>
              <a
                // href="javascript:void(0)"
                href="/"
                className="url"
                title="URL복사"
                target="_parent"
              >
                <span className="blind">URL복사</span>
              </a>
            </li>
          </ul>
          <p className="cm_url_tip url_show">
            아래의 URL을 전체선택하여 복사하세요
          </p>
          <div className="cm_url_txt url_show">
            <input type="text" />
          </div>
        </div>
        <a
          // href="#"
          href="/"
          className="modal-close-btn"
          target=""
        >
          <span className="blind">닫기</span>
        </a>
      </div>
    </div>
  );
}

export default ShareBtn;
