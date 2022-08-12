import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { BUTTON_LIST } from '../../../assets/datas/FooterBtnList';
import { isLoginState } from '../../../recoil/states';

import './FooterButtonBox.scss';

function FooterButtonBox() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  const onLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="mcom_btnbx_warp">
      {/* 가라 버튼 */}
      <button type="button" onClick={onLogin}>
        {isLogin ? '로그아웃' : '로그인'}
      </button>
      <ul className="mcom_btnbx_list">
        {BUTTON_LIST.map((el) => (
          <li key={el.id} id="footer_loginBtn">
            <Link
              to={el.href}
              className="clickable"
              onClick={el.onClick}
              style={{
                display:
                  (isLogin && el.name === '로그인') ||
                  (isLogin && el.name === '회원가입') ||
                  (!isLogin && el.name === '로그아웃')
                    ? 'none'
                    : '',
              }}
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterButtonBox;
