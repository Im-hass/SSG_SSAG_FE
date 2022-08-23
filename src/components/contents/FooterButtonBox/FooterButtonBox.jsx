import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoginState } from '../../../recoil/states';

function FooterButtonBox() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsLogin(true);
    }
  }, [isLogin]);

  const handleIsLogin = (e) => {
    if (e.target.name === '로그아웃') {
      setIsLogin(false);
      localStorage.removeItem('token');
      navigate('/');
    }
  };

  return (
    <div className="mcom_btnbx_warp">
      <ul className="mcom_btnbx_list">
        <li id="footer_loginBtn">
          <Link
            to={isLogin ? '/' : '/login'}
            onClick={handleIsLogin}
            className="clickable"
            name={isLogin ? '로그아웃' : '로그인'}
          >
            {isLogin ? '로그아웃' : '로그인'}
          </Link>
        </li>
        {!isLogin && (
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
