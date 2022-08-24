import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';

function CategoryFooter() {
  const ctx = useContext(AuthContext);

  return (
    <div className="clnb_footer">
      <div className="clnb_renew_help">
        <a
          href="/"
          // onClick="appBroswer('http://m.ssg.com/customer/main.ssg?aplSiteNo=6004&_mpop=new','stack'); return false;"
          className="clnb_help_link clickable"
        >
          <span>고객센터</span>
        </a>
        <a
          href="http://m.ssg.com/comm/reportItem.ssg?&divcTypeCd=50&siteNo=6004"
          className="clnb_help_link clickable"
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
        <Link
          to={ctx.isLogin ? '/' : '/login'}
          className="clnb_help_link"
          id="lnb_loginBtn"
          onClick={ctx.isLogin ? ctx.onLogout : ctx.onLogin}
        >
          <span>{ctx.isLogin ? '로그아웃' : '로그인'}</span>
        </Link>
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
