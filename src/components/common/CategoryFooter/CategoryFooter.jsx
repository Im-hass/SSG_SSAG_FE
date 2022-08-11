import React from 'react';

function CategoryFooter() {
  return (
    <div className="clnb_footer">
      <div className="clnb_renew_help">
        <a
          href="/"
          onClick="appBroswer('http://m.ssg.com/customer/main.ssg?aplSiteNo=6004&_mpop=new','stack'); return false;"
          className="clnb_help_link clickable"
          data-react-tarea="카테고리_LNB|기타|고객센터_N"
        >
          <span>고객센터</span>
        </a>
        <a
          href="http://m.ssg.com/comm/reportItem.ssg?&divcTypeCd=50&siteNo=6004"
          className="clnb_help_link clickable"
          data-react-tarea="카테고리_LNB|기타|제안해봐쓱_N"
        >
          <span>제안해봐쓱</span>
        </a>
        <a
          href="http://m.ssg.com/customer/noticeList.ssg?_mpop=new&siteNo=6005"
          className="clnb_help_link"
        >
          <span>공지사항</span>
        </a>
        <a href="https://partners.ssgadm.com/m/" className="clnb_help_link">
          <span>입점상담</span>
        </a>
        <a
          href="/"
          className="clnb_help_link"
          onClick="mobileLogin('login')"
          id="lnb_loginBtn"
        >
          <span>로그인</span>
        </a>
        <a
          href="/"
          className="clnb_help_link"
          onClick="logout()"
          id="lnb_logoutBtn"
          style={{ display: 'none' }}
        >
          <span>로그아웃</span>
        </a>
      </div>
      <div className="clnb_renew_lang">
        <a
          href="/"
          // onClick="javascript:changeLang('ko-KR');"
          className="clnb_lang_btn on"
        >
          <span className="clnb_lang_tx ic_lang_kr">한국어 / KR</span>
        </a>
        <a
          href="/"
          // onClick="javascript:changeLang('en-US');"
          className="clnb_lang_btn"
        >
          <span className="clnb_lang_tx ic_lang_en">English / EN</span>
        </a>
        <a
          href="/"
          // onClick="javascript:changeLang('zh-CN');"
          className="clnb_lang_btn"
        >
          <span className="clnb_lang_tx ic_lang_chn">简体中文 / CN</span>
        </a>
      </div>
    </div>
  );
}

export default CategoryFooter;
