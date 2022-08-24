import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';

function FooterButtonBox() {
  const ctx = useContext(AuthContext);

  return (
    <div className="mcom_btnbx_warp">
      <ul className="mcom_btnbx_list">
        <li id="footer_loginBtn">
          <Link
            to={ctx.isLogin ? '/' : '/login'}
            onClick={ctx.isLogin ? ctx.onLogout : ctx.onLogin}
            className="clickable"
            name={ctx.isLogin ? '로그아웃' : '로그인'}
          >
            {ctx.isLogin ? '로그아웃' : '로그인'}
          </Link>
        </li>
        {!ctx.isLogin && (
          <li id="footer_loginBtn">
            <Link to="/signup" className="clickable">
              회원가입
            </Link>
          </li>
        )}
        <li id="footer_loginBtn">
          <Link
            to="https://m-shinsegaemall.ssg.com/comm/app/appLink.ssg?mobilAppSvcNo=2"
            className="clickable"
          >
            앱다운로드
          </Link>
        </li>
        <li id="footer_loginBtn">
          <Link to="/" className="clickable">
            PC버전
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FooterButtonBox;
