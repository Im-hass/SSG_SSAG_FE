import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import AuthContext from '../../../store/auth-context';

function FooterButtonBox() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.logout();
    navigate('/');
    toast.success('로그아웃되었습니다.');
  };

  return (
    <div className="mcom_btnbx_warp">
      <ul className="mcom_btnbx_list">
        <li id="footer_loginBtn">
          <Link
            to={authCtx.isLogin ? '/' : '/login'}
            onClick={authCtx.isLogin && handleLogout}
            className="clickable"
            name={authCtx.isLogin ? '로그아웃' : '로그인'}
          >
            {authCtx.isLogin ? '로그아웃' : '로그인'}
          </Link>
        </li>
        {!authCtx.isLogin && (
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
      <Toaster
        containerStyle={{
          top: 30,
        }}
      />
    </div>
  );
}

export default FooterButtonBox;
